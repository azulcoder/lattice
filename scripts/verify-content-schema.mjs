#!/usr/bin/env node
// Persistent verification harness for content schema across all domains.
//
// Validates structural integrity of every content module in
// data/domains/*/content/*.js against the canonical content schema:
//   - itemId matches the entry in items.js
//   - 8 canonical sections present (motivation, intuition, formalization,
//     worked-example, applications, practice, connections, sources)
//   - Every translatable field has both `en` and `id` keys, both non-empty
//   - Author block has 8 required prose fields + ≥4 keyWorks
//   - selfTest entries well-formed (sectionId, question, prompt, answer, all bilingual)
//   - Viz component references resolve in COMPONENTS registry
//   - Word counts meet minimum thresholds
//   - item: cross-references in body text resolve to real items
//
// Covers: hasbrouck-2007, ohara-1995, kyle-1985, glosten-milgrom-1985, acuna-2008
//
// Usage:
//   node scripts/verify-content-schema.mjs
//   node scripts/verify-content-schema.mjs --quiet
//   node scripts/verify-content-schema.mjs --section S3
//
// Exit code: 0 = all pass, 1 = any fail.

import { pathToFileURL, fileURLToPath } from 'node:url';
import path from 'node:path';
import { readdirSync, existsSync } from 'node:fs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');

const args = process.argv.slice(2);
const QUIET = args.includes('--quiet');
const sectionFilter = (() => {
  const idx = args.indexOf('--section');
  return idx >= 0 ? args[idx + 1] : null;
})();

// ─── Discover all content modules + items.js across domains ─────────────
const domainsDir = path.join(ROOT, 'data/domains');
const domains = readdirSync(domainsDir).filter(d => {
  const items = path.join(domainsDir, d, 'items.js');
  return existsSync(items);
});

const allItems = new Map();  // domain → ITEMS array
const allContent = new Map(); // 'domain/itemId' → CONTENT
for (const domain of domains) {
  const itemsPath = path.join(domainsDir, domain, 'items.js');
  const itemsMod = await import(pathToFileURL(itemsPath).href);
  allItems.set(domain, itemsMod.ITEMS || []);
  const contentDir = path.join(domainsDir, domain, 'content');
  if (existsSync(contentDir)) {
    const files = readdirSync(contentDir).filter(f => f.endsWith('.js'));
    for (const file of files) {
      const filePath = path.join(contentDir, file);
      const mod = await import(pathToFileURL(filePath).href);
      if (mod.CONTENT) {
        allContent.set(`${domain}/${mod.CONTENT.itemId}`, { CONTENT: mod.CONTENT, file: filePath, domain });
      }
    }
  }
}

// Load viz.js to validate component references
const vizMod = await import(pathToFileURL(path.join(ROOT, 'js/viz.js')).href);
const REGISTERED_COMPONENTS = Object.keys(vizMod.COMPONENTS || {});

// ─── Test infrastructure ────────────────────────────────────────────────
const results = [];

function check(section, label, cond, detail = '') {
  if (sectionFilter && section !== sectionFilter) return;
  results.push({ section, label, ok: cond, detail });
  if (!QUIET && !cond) {
    console.log(`  [${section}] ✗ ${label}${detail ? ': ' + detail : ''}`);
  }
}

const REQUIRED_SECTIONS = ['motivation', 'intuition', 'formalization', 'worked-example', 'applications', 'practice', 'connections', 'sources'];
const REQUIRED_AUTHOR_FIELDS = ['fullName', 'affiliation', 'tagline', 'bio', 'focus', 'intellectualLineage', 'keyCollaborators', 'legacy'];

function isBilingual(field, allowEmpty = false) {
  if (!field || typeof field !== 'object') return false;
  if (typeof field.en !== 'string' || typeof field.id !== 'string') return false;
  if (!allowEmpty && (field.en.trim().length === 0 || field.id.trim().length === 0)) return false;
  return true;
}

function countWords(str) {
  return (str || '').split(/\s+/).filter(Boolean).length;
}

// ─── S1: itemId matches items.js entry ──────────────────────────────────
{
  for (const [key, { CONTENT, domain }] of allContent.entries()) {
    const itemsArr = allItems.get(domain);
    const itemEntry = itemsArr.find(i => i.id === CONTENT.itemId);
    check('S1', `${key}: itemId resolves in ${domain}/items.js`, !!itemEntry);
  }
}

// ─── S2: Required top-level fields present ─────────────────────────────
{
  for (const [key, { CONTENT }] of allContent.entries()) {
    check('S2', `${key}: estimatedReadMinutes is number`, typeof CONTENT.estimatedReadMinutes === 'number' && CONTENT.estimatedReadMinutes > 0);
    check('S2', `${key}: audio object exists`, typeof CONTENT.audio === 'object' && CONTENT.audio !== null);
    check('S2', `${key}: audio.enabled is boolean`, typeof CONTENT.audio?.enabled === 'boolean');
    check('S2', `${key}: sections is array`, Array.isArray(CONTENT.sections));
    check('S2', `${key}: author block present`, typeof CONTENT.author === 'object' && CONTENT.author !== null);
    check('S2', `${key}: selfTest is array`, Array.isArray(CONTENT.selfTest));
  }
}

// ─── S3: Author block — 8 fields all bilingual + keyWorks ─────────────
{
  for (const [key, { CONTENT }] of allContent.entries()) {
    const A = CONTENT.author;
    if (!A) continue;
    for (const f of REQUIRED_AUTHOR_FIELDS) {
      check('S3', `${key}: author.${f} bilingual`, isBilingual(A[f]));
    }
    check('S3', `${key}: author.keyWorks is array`, Array.isArray(A.keyWorks));
    check('S3', `${key}: author.keyWorks length ≥ 4`, Array.isArray(A.keyWorks) && A.keyWorks.length >= 4);
    // Each keyWork has year + title + venue
    if (Array.isArray(A.keyWorks)) {
      for (let i = 0; i < A.keyWorks.length; i++) {
        const kw = A.keyWorks[i];
        check('S3', `${key}: keyWorks[${i}] has year/title/venue`,
          typeof kw.year === 'number' && typeof kw.title === 'string' && typeof kw.venue === 'string');
      }
    }
  }
}

// ─── S4: All 8 canonical sections present + bilingual + word counts ───
{
  for (const [key, { CONTENT }] of allContent.entries()) {
    const sectionIds = CONTENT.sections.map(s => s.id);
    for (const reqId of REQUIRED_SECTIONS) {
      check('S4', `${key}: section "${reqId}" present`, sectionIds.includes(reqId));
    }
    check('S4', `${key}: exactly 8 sections`, CONTENT.sections.length === 8);

    for (const s of CONTENT.sections) {
      check('S4', `${key}: section "${s.id}" has bilingual heading`, isBilingual(s.heading));
      check('S4', `${key}: section "${s.id}" has bilingual body`, isBilingual(s.body));
    }

    // Word count thresholds — minimum body density per section + total.
    // Guard on isBilingual so a section with a missing/malformed body (already
    // reported by the S4 bilingual-body check above) contributes 0 instead of
    // throwing a TypeError that would abort S5–S8 and the summary for the run.
    const totalEn = CONTENT.sections.reduce((sum, s) => sum + (isBilingual(s.body) ? countWords(s.body.en) : 0), 0);
    const totalId = CONTENT.sections.reduce((sum, s) => sum + (isBilingual(s.body) ? countWords(s.body.id) : 0), 0);
    check('S4', `${key}: total EN words ≥ 1500 (got ${totalEn})`, totalEn >= 1500);
    check('S4', `${key}: total ID words ≥ 1000 (got ${totalId})`, totalId >= 1000);
  }
}

// ─── S5: selfTest entries well-formed ──────────────────────────────────
{
  for (const [key, { CONTENT }] of allContent.entries()) {
    if (!Array.isArray(CONTENT.selfTest)) continue;
    check('S5', `${key}: selfTest length ≥ 3`, CONTENT.selfTest.length >= 3);

    const sectionIds = new Set(CONTENT.sections.map(s => s.id));
    for (let i = 0; i < CONTENT.selfTest.length; i++) {
      const st = CONTENT.selfTest[i];
      check('S5', `${key}: selfTest[${i}].sectionId valid`,
        typeof st.sectionId === 'string' && sectionIds.has(st.sectionId));
      check('S5', `${key}: selfTest[${i}].question bilingual`, isBilingual(st.question));
      check('S5', `${key}: selfTest[${i}].answer bilingual`, isBilingual(st.answer));
      check('S5', `${key}: selfTest[${i}].prompt bilingual`, isBilingual(st.prompt));
    }

    // Distinct section coverage
    const distinctSections = new Set(CONTENT.selfTest.map(s => s.sectionId));
    check('S5', `${key}: selfTest spans ≥ 3 distinct sections`, distinctSections.size >= 3);
  }
}

// ─── S6: Viz component references resolve ──────────────────────────────
{
  for (const [key, { CONTENT }] of allContent.entries()) {
    for (const s of CONTENT.sections) {
      if (!s.visualization) continue;
      const viz = s.visualization;
      check('S6', `${key}: section "${s.id}" viz has id`,
        typeof viz.id === 'string' && viz.id.length > 0);
      check('S6', `${key}: section "${s.id}" viz has component`,
        typeof viz.component === 'string' && viz.component.length > 0);
      check('S6', `${key}: section "${s.id}" viz component "${viz.component}" registered in viz.js`,
        REGISTERED_COMPONENTS.includes(viz.component));
      check('S6', `${key}: section "${s.id}" viz title bilingual`, isBilingual(viz.title));
      check('S6', `${key}: section "${s.id}" viz description bilingual`, isBilingual(viz.description));
      check('S6', `${key}: section "${s.id}" viz defaultParams object`,
        typeof viz.defaultParams === 'object' && viz.defaultParams !== null);
    }
  }
}

// ─── S7: item: cross-references resolve ────────────────────────────────
// Look for [..](item:foo-bar-1234) syntax in body text. Each must resolve to
// an item id in some domain's items.js.
{
  const allItemIds = new Set();
  for (const [, items] of allItems.entries()) {
    for (const it of items) allItemIds.add(it.id);
  }

  const linkPattern = /\(item:([a-zA-Z0-9_-]+)\)/g;
  for (const [key, { CONTENT }] of allContent.entries()) {
    const allBodyText = [
      ...CONTENT.sections.flatMap(s => [s.body.en, s.body.id]),
    ].join('\n');
    const matches = [...allBodyText.matchAll(linkPattern)];
    const seen = new Set();
    for (const m of matches) {
      const refId = m[1];
      if (seen.has(refId)) continue;
      seen.add(refId);
      check('S7', `${key}: item-link "item:${refId}" resolves`, allItemIds.has(refId));
    }
  }
}

// ─── S8: items.js cross-references (prereqs) resolve ──────────────────
{
  for (const [domain, items] of allItems.entries()) {
    const itemIds = new Set(items.map(i => i.id));
    for (const item of items) {
      check('S8', `${domain}/${item.id}: id is a non-empty string`, typeof item.id === 'string' && item.id.length > 0);
      if (Array.isArray(item.prereqs)) {
        for (const pre of item.prereqs) {
          // Cross-domain prereqs allowed; check across all domains
          let found = false;
          for (const [, otherItems] of allItems.entries()) {
            if (otherItems.some(o => o.id === pre)) { found = true; break; }
          }
          check('S8', `${domain}/${item.id}: prereq "${pre}" resolves`, found);
        }
      }
    }
    // Unique ids within a domain
    const ids = items.map(i => i.id);
    const dupes = ids.filter((id, i) => ids.indexOf(id) !== i);
    check('S8', `${domain}: no duplicate item ids (found: ${dupes.join(',') || 'none'})`, dupes.length === 0);
  }
}

// ─── Summary ───────────────────────────────────────────────────────────
const total = results.length;
const passed = results.filter(r => r.ok).length;
const failed = results.filter(r => !r.ok);

const bySection = {};
for (const r of results) {
  bySection[r.section] = bySection[r.section] || { total: 0, passed: 0 };
  bySection[r.section].total += 1;
  if (r.ok) bySection[r.section].passed += 1;
}

if (!QUIET) {
  console.log('\n=== Content schema verification ===');
  console.log(`Modules covered: ${allContent.size} (${[...allContent.keys()].join(', ')})`);
  for (const sec of Object.keys(bySection).sort()) {
    const s = bySection[sec];
    console.log(`  ${sec}: ${s.passed}/${s.total}${s.passed === s.total ? ' ✓' : ' ✗'}`);
  }
  console.log(`\nTotal: ${passed}/${total}`);
}

if (failed.length === 0) {
  if (!QUIET) console.log('All checks pass. Content schema valid across all modules.');
  process.exit(0);
} else {
  console.log(`\n${failed.length} failures:`);
  for (const f of failed.slice(0, 30)) {
    console.log(`  [${f.section}] ${f.label}${f.detail ? ': ' + f.detail : ''}`);
  }
  if (failed.length > 30) console.log(`  ... and ${failed.length - 30} more`);
  process.exit(1);
}
