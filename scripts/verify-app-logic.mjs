#!/usr/bin/env node
// Persistent regression harness for app-logic bugs found in the 2026-05-30 audit.
//
// Covers (see notes/audit-findings-2026-05-30.md):
//   L1  B3  — mergeWithDefaults must preserve the settings.ui namespace
//             (self-test confidence + author-card open-state) and be idempotent,
//             so ensureAllDomainsScaffolded()/updateSettings() never wipe it.
//   L2  —    stripSensitive() zeroes apiKey but preserves ui + other ai fields.
//   L3  D8 — save() returns false (never throws) when localStorage is full/unavailable.
//   L4  B4 — glossary `term`/`definition` are bilingual { en, id } objects, the shape
//             reference.js findRelatedCards / See-also chips must handle without crashing.
//
// Usage:
//   node scripts/verify-app-logic.mjs
//   node scripts/verify-app-logic.mjs --quiet
//   node scripts/verify-app-logic.mjs --section L1
//
// Exit code: 0 = all pass, 1 = any fail.

import { pathToFileURL, fileURLToPath } from 'node:url';
import path from 'node:path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');

const args = process.argv.slice(2);
const QUIET = args.includes('--quiet');
const sectionFilter = (() => {
  const idx = args.indexOf('--section');
  return idx >= 0 ? args[idx + 1] : null;
})();

const results = [];
function check(section, label, cond, detail = '') {
  if (sectionFilter && section !== sectionFilter) return;
  results.push({ section, label, ok: !!cond, detail });
  if (!QUIET && !cond) console.log(`  [${section}] ✗ ${label}${detail ? ': ' + detail : ''}`);
}

const imp = (rel) => import(pathToFileURL(path.join(ROOT, rel)).href);

// ─── L1 + L2: settings.ui persistence + stripSensitive (B3) ──────────────
{
  const { defaultSettings, mergeWithDefaults, stripSensitive } = await imp('data/shared/ai-config.js');

  const d = defaultSettings();
  check('L1', 'defaultSettings has ui.selfTestConfidence', d.ui && typeof d.ui.selfTestConfidence === 'object');
  check('L1', 'defaultSettings has ui.authorCardOpenByItem', d.ui && typeof d.ui.authorCardOpenByItem === 'object');

  // The exact bug: a stored settings object carrying ui state runs through
  // mergeWithDefaults on every load() and every settings mutation.
  const stored = {
    ai: { enabled: true, apiKey: 'sk-secret', model: 'claude-opus-4-7' },
    appearance: { theme: 'light', language: 'id' },
    ui: {
      selfTestConfidence: { 'kyle-1985:formalization:0': 'got-it' },
      authorCardOpenByItem: { 'kyle-1985': true },
    },
  };
  const merged = mergeWithDefaults(stored);
  check('L1', 'merge preserves ui.selfTestConfidence entry',
    merged.ui?.selfTestConfidence?.['kyle-1985:formalization:0'] === 'got-it');
  check('L1', 'merge preserves ui.authorCardOpenByItem entry',
    merged.ui?.authorCardOpenByItem?.['kyle-1985'] === true);
  check('L1', 'merge preserves user apiKey', merged.ai.apiKey === 'sk-secret');
  check('L1', 'merge preserves user model', merged.ai.model === 'claude-opus-4-7');

  // Idempotence: ensureAllDomainsScaffolded saves only when merge changes the
  // object; if merge is not idempotent on ui, it would re-write (and could
  // strip) ui every load. Assert the second pass is a deep no-op.
  const merged2 = mergeWithDefaults(merged);
  check('L1', 'merge is idempotent (ui survives a re-merge)',
    JSON.stringify(merged2.ui) === JSON.stringify(merged.ui));
  check('L1', 'merge is idempotent (whole object stable)',
    JSON.stringify(merged2) === JSON.stringify(merged));

  // Settings with no ui at all (legacy v3) gain the default ui, not undefined.
  const legacy = mergeWithDefaults({ ai: { apiKey: 'x' }, appearance: {} });
  check('L1', 'merge backfills ui for legacy settings', !!legacy.ui && !!legacy.ui.selfTestConfidence);

  // L2 — stripSensitive
  const stripped = stripSensitive(merged);
  check('L2', 'stripSensitive zeroes apiKey', stripped.ai.apiKey === '');
  check('L2', 'stripSensitive preserves ui', JSON.stringify(stripped.ui) === JSON.stringify(merged.ui));
  check('L2', 'stripSensitive preserves non-sensitive ai fields', stripped.ai.model === 'claude-opus-4-7');
}

// ─── L3: save() resilience to quota / unavailable storage (D8) ───────────
{
  const realLS = globalThis.localStorage;
  // Working mock: setItem succeeds.
  let written = null;
  globalThis.localStorage = {
    _d: {},
    getItem(k) { return this._d[k] ?? null; },
    setItem(k, v) { written = { k, v }; this._d[k] = v; },
    removeItem(k) { delete this._d[k]; },
  };
  const { save } = await imp('js/storage.js');

  const okReturn = save({ schemaVersion: 3, domains: {}, settings: {} });
  check('L3', 'save returns true on success', okReturn === true);
  check('L3', 'save actually persisted', written !== null);

  // Throwing mock: simulate QuotaExceededError.
  globalThis.localStorage = {
    getItem() { return null; },
    setItem() { const e = new Error('QuotaExceededError'); e.name = 'QuotaExceededError'; throw e; },
    removeItem() {},
  };
  let threw = false, ret;
  const realWarn = console.warn;
  console.warn = () => {};  // expected: save() logs a warning on the quota path
  try { ret = save({ domains: {}, settings: {} }); } catch { threw = true; }
  console.warn = realWarn;
  check('L3', 'save does NOT throw when storage rejects', threw === false);
  check('L3', 'save returns false when storage rejects', ret === false);

  if (realLS === undefined) delete globalThis.localStorage; else globalThis.localStorage = realLS;
}

// ─── L4: glossary term/definition bilingual shape (B4) ───────────────────
{
  const { GLOSSARY } = await imp('data/domains/microstructure/glossary.js');
  check('L4', 'GLOSSARY is a non-empty array', Array.isArray(GLOSSARY) && GLOSSARY.length > 0);

  const isBi = (f) => f && typeof f === 'object' && typeof f.en === 'string' && typeof f.id === 'string';
  const badTerm = (GLOSSARY || []).filter((g) => !isBi(g.term));
  const badDef = (GLOSSARY || []).filter((g) => !isBi(g.definition));
  check('L4', 'every glossary term is bilingual { en, id }', badTerm.length === 0,
    badTerm.length ? `${badTerm.length} non-bilingual: ${badTerm.map((g) => g.slug).slice(0, 5).join(', ')}` : '');
  check('L4', 'every glossary definition is bilingual { en, id }', badDef.length === 0,
    badDef.length ? `${badDef.length} non-bilingual: ${badDef.map((g) => g.slug).slice(0, 5).join(', ')}` : '');

  // Replicate the fixed findRelatedCards needle-builder: a bilingual term must
  // not throw (the bug was term.term.toLowerCase() on an object) and must yield
  // lowercase strings from BOTH languages plus aliases.
  let threw = false, needles = [];
  try {
    const sample = GLOSSARY.find((g) => isBi(g.term)) || GLOSSARY[0];
    const tf = sample.term;
    const termStrings = (typeof tf === 'string' ? [tf] : [tf && tf.en, tf && tf.id]);
    needles = [...termStrings, ...(sample.aliases || [])].filter(Boolean).map((s) => s.toLowerCase());
  } catch { threw = true; }
  check('L4', 'bilingual-term needle builder does not throw', threw === false);
  check('L4', 'bilingual-term needle builder yields ≥1 lowercase needle', needles.length >= 1);

  // No dangling seeAlso reference (regression for the orphan 'stoll-model' slug).
  const slugs = new Set((GLOSSARY || []).map((g) => g.slug));
  const dangling = [];
  for (const g of (GLOSSARY || [])) for (const s of (g.seeAlso || [])) if (!slugs.has(s)) dangling.push(`${g.slug}->${s}`);
  check('L4', 'no dangling glossary seeAlso reference', dangling.length === 0, dangling.slice(0, 5).join(', '));
}

// ─── L5: seed-card integrity across domains ──────────────────────────────
{
  const safeImport = async (rel, name) => {
    try { const m = await imp(rel); return m[name] ?? []; } catch { return []; }
  };
  const domains = [
    { id: 'microstructure', cards: 'data/domains/microstructure/seed-cards.js', items: 'data/domains/microstructure/items.js' },
    { id: 'geothermal', cards: 'data/domains/geothermal/seed-cards.js', items: 'data/domains/geothermal/items.js' },
    { id: 'trading', cards: 'data/domains/trading/seed-cards.js', items: 'data/domains/trading/items.js' },
  ];
  const VALID_TYPES = new Set(['basic', 'cloze', 'formula']);
  const allIds = new Set();

  for (const d of domains) {
    const cards = await safeImport(d.cards, 'SEED_CARDS');
    const items = await safeImport(d.items, 'ITEMS');
    const itemIds = new Set((items || []).map((i) => i.id));
    if (!cards.length) continue;  // a domain may legitimately have no cards yet

    const seenInDomain = new Set();
    const dup = [], missingItem = [], badType = [], emptyFB = [], badCloze = [], badFormula = [], crossDup = [];
    for (const c of cards) {
      if (!c || typeof c.id !== 'string' || !c.id) { dup.push('(missing id)'); continue; }
      if (seenInDomain.has(c.id)) dup.push(c.id); else seenInDomain.add(c.id);
      if (allIds.has(c.id)) crossDup.push(c.id); else allIds.add(c.id);
      if (!itemIds.has(c.itemId)) missingItem.push(`${c.id}->${c.itemId}`);
      if (!VALID_TYPES.has(c.type)) badType.push(c.id);
      if (typeof c.front !== 'string' || !c.front.trim() || typeof c.back !== 'string' || !c.back.trim()) emptyFB.push(c.id);
      if (c.type === 'cloze' && (typeof c.cloze !== 'string' || !c.cloze || !c.front.includes(c.cloze))) badCloze.push(c.id);
      if (c.type === 'formula' && (typeof c.latex !== 'string' || !c.latex.trim())) badFormula.push(c.id);
    }
    const sec = 'L5';
    check(sec, `${d.id}: card ids unique within domain`, dup.length === 0, dup.slice(0, 5).join(', '));
    check(sec, `${d.id}: card ids globally unique`, crossDup.length === 0, crossDup.slice(0, 5).join(', '));
    check(sec, `${d.id}: every card.itemId resolves in items.js`, missingItem.length === 0, missingItem.slice(0, 5).join(', '));
    check(sec, `${d.id}: every card.type is basic|cloze|formula`, badType.length === 0, badType.slice(0, 5).join(', '));
    check(sec, `${d.id}: every card has non-empty front + back`, emptyFB.length === 0, emptyFB.slice(0, 5).join(', '));
    check(sec, `${d.id}: cloze cards carry a cloze span present in front`, badCloze.length === 0, badCloze.slice(0, 5).join(', '));
    check(sec, `${d.id}: formula cards carry a latex string`, badFormula.length === 0, badFormula.slice(0, 5).join(', '));
  }
}

// ─── L6: Library item-detail view renders for items WITH cards ───────────
//
// Regression for the bug where itemDetailHTML referenced an out-of-scope
// `engine` variable (introduced with FSRS in Phase S3). It only fired on the
// cards.length > 0 branch, so geothermal (no cards) opened fine but every
// microstructure / trading item threw a ReferenceError mid-innerHTML — the
// detail page silently never rendered. itemDetailHTML is a pure string builder,
// so we can render it headless here and assert it neither throws nor drops the
// card list.
{
  const { itemDetailHTML } = await imp('js/library.js');
  const today = (await imp('js/util.js')).todayLocalISO();

  const domains = [
    { id: 'microstructure', items: 'data/domains/microstructure/items.js', cards: 'data/domains/microstructure/seed-cards.js' },
    { id: 'trading', items: 'data/domains/trading/items.js', cards: 'data/domains/trading/seed-cards.js' },
  ];

  for (const d of domains) {
    let items = [], cards = [];
    try { items = (await imp(d.items)).ITEMS || []; } catch {}
    try { cards = (await imp(d.cards)).SEED_CARDS || []; } catch {}
    // Pick an item that actually has ≥1 seed card — that's the branch that broke.
    const withCards = items.find((it) => cards.some((c) => c.itemId === it.id));
    check('L6', `${d.id}: has an item with seed cards to exercise`, !!withCards,
      withCards ? '' : 'no item/card pairing found');
    if (!withCards) continue;
    const itemCards = cards.filter((c) => c.itemId === withCards.id)
      .map((c) => ({ ...c, front: c.front, back: c.back, interval: 0, repetitions: 0, ef: 2.5, nextReview: null }));

    for (const engine of ['sm2', 'fsrs']) {
      let html = '', threw = false, err = '';
      try {
        html = itemDetailHTML(withCards, itemCards, today, items, d.id, {}, null, false, 'en', engine);
      } catch (e) { threw = true; err = e.message; }
      check('L6', `${d.id}: itemDetailHTML(${engine}) does not throw on cards branch`, !threw, err);
      check('L6', `${d.id}: itemDetailHTML(${engine}) renders the card list`, !threw && typeof html === 'string' && html.includes(`Cards (${itemCards.length})`));
      check('L6', `${d.id}: itemDetailHTML(${engine}) shows the item title`, !threw && html.includes(withCards.title));
    }
  }
}

// ─── Summary ─────────────────────────────────────────────────────────────
const passed = results.filter((r) => r.ok).length;
const total = results.length;
const failed = results.filter((r) => !r.ok);

const bySection = {};
for (const r of results) {
  bySection[r.section] = bySection[r.section] || { total: 0, passed: 0 };
  bySection[r.section].total += 1;
  if (r.ok) bySection[r.section].passed += 1;
}

if (!QUIET) {
  console.log('\n=== App-logic regression verification ===');
  for (const sec of Object.keys(bySection).sort()) {
    const s = bySection[sec];
    console.log(`  ${sec}: ${s.passed}/${s.total}${s.passed === s.total ? ' ✓' : ' ✗'}`);
  }
  console.log(`\nTotal: ${passed}/${total}`);
}

if (failed.length === 0) {
  if (!QUIET) console.log('All checks pass. App-logic regressions covered.');
  process.exit(0);
} else {
  console.log(`\n${failed.length} failures:`);
  for (const f of failed.slice(0, 30)) {
    console.log(`  [${f.section}] ${f.label}${f.detail ? ': ' + f.detail : ''}`);
  }
  process.exit(1);
}
