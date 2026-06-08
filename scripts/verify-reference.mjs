#!/usr/bin/env node
// Persistent harness: the per-domain reference layer (glossary.js + notation.js)
// must stay structurally sound, because js/reference.js renders it verbatim and
// nothing else type-checks it. Before this harness, ONLY the microstructure
// glossary's bilingual shape was spot-checked (verify-app-logic L4); the trading
// glossary/notation and the notation KaTeX symbols were unguarded.
//
// For every domain that HAS a reference layer, this checks:
//   G1  glossary — GLOSSARY is an array of { slug, term:{en,id}, definition:{en,id},
//       category } with bilingual non-empty term + definition, slugs unique within
//       the domain, every category resolving to GLOSSARY_CATEGORIES, and no dangling
//       seeAlso reference.
//   G2  notation — NOTATION is an array of { concept, glossarySlug, rows[] }; concept
//       non-empty, glossarySlug is null or resolves to a glossary slug in the SAME
//       domain, each row has a non-empty author/symbol/notes string and a year that
//       is a number or null.
//   G3  every notation symbol PARSES under KaTeX (throwOnError) — a malformed symbol
//       renders as a red error box in the UI. (Uses the vendored vendor/katex.min.js.)
//
// Usage: node scripts/verify-reference.mjs [--quiet]
// Exit: 0 = sound, 1 = any issue.

import { pathToFileURL, fileURLToPath } from 'node:url';
import { createRequire } from 'node:module';
import path from 'node:path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const QUIET = process.argv.includes('--quiet');
const require = createRequire(import.meta.url);

// Vendored KaTeX (committed to the repo) — used to prove every symbol renders.
let katex = null;
try { katex = require(path.join(ROOT, 'vendor/katex.min.js')); } catch { katex = null; }

const results = [];
function check(section, label, cond, detail = '') {
  results.push({ section, ok: !!cond });
  if (!QUIET && !cond) console.log(`  [${section}] ✗ ${label}${detail ? ': ' + detail : ''}`);
}

const isBi = (f) => f && typeof f === 'object' && typeof f.en === 'string' && f.en.trim() && typeof f.id === 'string' && f.id.trim();
const isStr = (s) => typeof s === 'string' && s.trim().length > 0;
const imp = async (rel) => {
  try { return await import(pathToFileURL(path.join(ROOT, rel)).href); } catch { return null; }
};

const domains = ['microstructure', 'geothermal', 'trading'];
for (const d of domains) {
  const gMod = await imp(`data/domains/${d}/glossary.js`);
  const nMod = await imp(`data/domains/${d}/notation.js`);
  if (!gMod && !nMod) continue; // a domain may legitimately have no reference layer yet

  const slugSet = new Set();

  // ── G1: glossary ──
  if (gMod) {
    const GL = gMod.GLOSSARY;
    const cats = new Set((gMod.GLOSSARY_CATEGORIES || []).map((c) => c.id));
    check('G1', `${d}: GLOSSARY is a non-empty array`, Array.isArray(GL) && GL.length > 0);
    for (const g of (GL || [])) if (isStr(g.slug)) slugSet.add(g.slug);

    const seen = new Set();
    const badTerm = [], badDef = [], dupSlug = [], badCat = [], dangSeeAlso = [];
    for (const g of (GL || [])) {
      if (!isBi(g.term)) badTerm.push(g.slug);
      if (!isBi(g.definition)) badDef.push(g.slug);
      if (!isStr(g.slug)) dupSlug.push('(missing slug)');
      else if (seen.has(g.slug)) dupSlug.push(g.slug); else seen.add(g.slug);
      if (cats.size && !cats.has(g.category)) badCat.push(`${g.slug}->${g.category}`);
      for (const s of (g.seeAlso || [])) if (!slugSet.has(s)) dangSeeAlso.push(`${g.slug}->${s}`);
    }
    check('G1', `${d}: every term is bilingual { en, id }`, badTerm.length === 0, badTerm.slice(0, 5).join(', '));
    check('G1', `${d}: every definition is bilingual { en, id }`, badDef.length === 0, badDef.slice(0, 5).join(', '));
    check('G1', `${d}: glossary slugs unique`, dupSlug.length === 0, dupSlug.slice(0, 5).join(', '));
    check('G1', `${d}: every category resolves to GLOSSARY_CATEGORIES`, badCat.length === 0, badCat.slice(0, 5).join(', '));
    check('G1', `${d}: no dangling glossary seeAlso`, dangSeeAlso.length === 0, dangSeeAlso.slice(0, 5).join(', '));
  }

  // ── G2 + G3: notation ──
  if (nMod) {
    const NT = nMod.NOTATION;
    check('G2', `${d}: NOTATION is a non-empty array`, Array.isArray(NT) && NT.length > 0);

    const badConcept = [], badSlug = [], badRow = [], badYear = [], katexErr = [];
    for (const e of (NT || [])) {
      if (!isStr(e.concept)) badConcept.push(String(e.concept));
      if (!(e.glossarySlug === null || (isStr(e.glossarySlug) && slugSet.has(e.glossarySlug)))) badSlug.push(`${e.concept}->${e.glossarySlug}`);
      const rows = Array.isArray(e.rows) ? e.rows : [];
      if (!rows.length) badRow.push(`${e.concept}: no rows`);
      for (const r of rows) {
        if (!isStr(r.author) || !isStr(r.symbol) || !isStr(r.notes)) badRow.push(`${e.concept}: row fields`);
        if (!(r.year === null || typeof r.year === 'number')) badYear.push(`${e.concept}: year=${r.year}`);
        if (katex && isStr(r.symbol)) {
          try { katex.renderToString(r.symbol, { throwOnError: true, displayMode: false }); }
          catch (err) { katexErr.push(`${e.concept}: ${r.symbol} (${String(err.message).split('\n')[0]})`); }
        }
      }
    }
    check('G2', `${d}: every notation concept is a non-empty string`, badConcept.length === 0, badConcept.slice(0, 5).join(', '));
    check('G2', `${d}: every glossarySlug is null or resolves`, badSlug.length === 0, badSlug.slice(0, 5).join(', '));
    check('G2', `${d}: every notation row has author/symbol/notes`, badRow.length === 0, badRow.slice(0, 5).join(', '));
    check('G2', `${d}: every notation year is a number or null`, badYear.length === 0, badYear.slice(0, 5).join(', '));
    check('G3', `${d}: every notation symbol parses under KaTeX`, katexErr.length === 0, katexErr.slice(0, 5).join(' | '));
  }
}

if (!katex && !QUIET) console.log('  [G3] note: vendor/katex.min.js could not be loaded — symbol-parse checks skipped.');

const total = results.length, passed = results.filter((r) => r.ok).length;
const bySection = {};
for (const r of results) { bySection[r.section] = bySection[r.section] || { t: 0, p: 0 }; bySection[r.section].t++; if (r.ok) bySection[r.section].p++; }
if (!QUIET) {
  console.log('\n=== Reference-layer verification (glossary + notation, all domains) ===');
  for (const s of Object.keys(bySection).sort()) console.log(`  ${s}: ${bySection[s].p}/${bySection[s].t}${bySection[s].p === bySection[s].t ? ' ✓' : ' ✗'}`);
  console.log(`\nTotal: ${passed}/${total}`);
}
if (passed === total) { if (!QUIET) console.log('Reference layer sound: bilingual glossary, resolving categories/slugs, KaTeX-clean notation.'); process.exit(0); }
else { console.log(`\n${total - passed} reference-layer issue(s).`); process.exit(1); }
