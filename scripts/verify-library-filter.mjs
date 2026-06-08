#!/usr/bin/env node
// Harness for the Library multi-select card filter (js/library.js, Phase S18):
// facet derivation (available types/states), the per-item predicate (Status
// OR within facet, AND across facets, empty facet = no constraint), the list
// filter, and a stub-DOM render of the filtered Library list.
//
// Usage:  node scripts/verify-library-filter.mjs [--quiet]
// Exit code: 0 = all pass, 1 = any fail.

import { pathToFileURL, fileURLToPath } from 'node:url';
import path from 'node:path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const QUIET = process.argv.includes('--quiet');

if (typeof globalThis.localStorage === 'undefined') {
  const m = new Map();
  globalThis.localStorage = { getItem: (k) => (m.has(k) ? m.get(k) : null), setItem: (k, v) => m.set(k, String(v)), removeItem: (k) => m.delete(k) };
}

const lib = await import(pathToFileURL(path.join(ROOT, 'js/library.js')).href);
const { availableTypes, availableStates, filterIsActive, itemMatchesFilter, applyCardFilter, groupCardsByItem, CARD_STATES, renderLibraryView } = lib;
const { addDays } = await import(pathToFileURL(path.join(ROOT, 'js/util.js')).href);

const results = [];
function check(section, label, cond, detail = '') {
  results.push({ section, ok: !!cond });
  if (!QUIET && !cond) console.log(`  [${section}] ✗ ${label}${detail ? ': ' + detail : ''}`);
}
const TODAY = '2026-06-04';

// Fixture: three items, four cards spanning four card-states.
const items = [
  { id: 'a-2020', type: 'paper', phase: 'p1', authors: ['Alpha'], year: 2020, title: 'Alpha', difficulty: 3 },
  { id: 'b-2021', type: 'textbook', phase: 'p1', authors: ['Bravo'], year: 2021, title: 'Bravo', difficulty: 2 },
  { id: 'c-2022', type: 'paper', phase: 'p2', authors: ['Charlie'], year: 2022, title: 'Charlie', difficulty: 4 },
];
const cards = [
  { id: 'a1', itemId: 'a-2020', repetitions: 4, ef: 2.5, interval: 25, nextReview: addDays(TODAY, 20) },   // mastered
  { id: 'a2', itemId: 'a-2020', repetitions: 1, ef: 2.4, interval: 6, nextReview: addDays(TODAY, -1) },     // due
  { id: 'b1', itemId: 'b-2021', repetitions: 1, ef: 2.4, interval: 6, nextReview: addDays(TODAY, 9) },      // learning
  { id: 'c1', itemId: 'c-2022', repetitions: 0, lapses: 0, interval: 0, nextReview: null },                 // unscheduled
];
const byItem = groupCardsByItem(cards);

// ─── F1: facet derivation ──────────────────────────────────────────────
check('F1', 'availableTypes distinct + sorted', JSON.stringify(availableTypes(items)) === JSON.stringify(['paper', 'textbook']));
{
  const st = availableStates(items, byItem, TODAY, 'sm2');
  check('F1', 'availableStates = present states only', JSON.stringify(st) === JSON.stringify(['due', 'learning', 'mastered', 'unscheduled']));
  check('F1', "no 'new' chip (no new-state card present)", !st.includes('new'));
  check('F1', 'states returned in canonical CARD_STATES order', st.every((s, i) => CARD_STATES.indexOf(s) > (i === 0 ? -1 : CARD_STATES.indexOf(st[i - 1]))));
}

// ─── F2: filterIsActive ────────────────────────────────────────────────
check('F2', 'empty filter inactive', filterIsActive({ states: [], types: [] }) === false);
check('F2', 'null filter inactive', filterIsActive(null) === false);
check('F2', 'any states ⇒ active', filterIsActive({ states: ['due'], types: [] }) === true);
check('F2', 'any types ⇒ active', filterIsActive({ states: [], types: ['paper'] }) === true);

// ─── F3: type facet ────────────────────────────────────────────────────
{
  const f = { states: [], types: ['paper'] };
  check('F3', 'paper matches a + c, not b', itemMatchesFilter(items[0], byItem['a-2020'], f, TODAY, 'sm2') && !itemMatchesFilter(items[1], byItem['b-2021'], f, TODAY, 'sm2') && itemMatchesFilter(items[2], byItem['c-2022'], f, TODAY, 'sm2'));
}

// ─── F4: status facet (≥1 card in a selected state) ────────────────────
{
  const due = { states: ['due'], types: [] };
  check('F4', 'due matches only item a', itemMatchesFilter(items[0], byItem['a-2020'], due, TODAY, 'sm2') && !itemMatchesFilter(items[1], byItem['b-2021'], due, TODAY, 'sm2') && !itemMatchesFilter(items[2], byItem['c-2022'], due, TODAY, 'sm2'));
  const ml = { states: ['mastered', 'learning'], types: [] };   // OR within facet
  check('F4', 'mastered OR learning matches a (mastered) + b (learning)', itemMatchesFilter(items[0], byItem['a-2020'], ml, TODAY, 'sm2') && itemMatchesFilter(items[1], byItem['b-2021'], ml, TODAY, 'sm2') && !itemMatchesFilter(items[2], byItem['c-2022'], ml, TODAY, 'sm2'));
  check('F4', 'unscheduled matches only c', !itemMatchesFilter(items[0], byItem['a-2020'], { states: ['unscheduled'], types: [] }, TODAY, 'sm2') && itemMatchesFilter(items[2], byItem['c-2022'], { states: ['unscheduled'], types: [] }, TODAY, 'sm2'));
}

// ─── F5: AND across facets, empty = no constraint, applyCardFilter ─────
{
  const both = { states: ['mastered'], types: ['paper'] };       // AND across facets
  check('F5', 'paper AND mastered matches only a', itemMatchesFilter(items[0], byItem['a-2020'], both, TODAY, 'sm2') && !itemMatchesFilter(items[2], byItem['c-2022'], both, TODAY, 'sm2'));
  check('F5', 'empty facets ⇒ every item matches', items.every((it) => itemMatchesFilter(it, byItem[it.id] || [], { states: [], types: [] }, TODAY, 'sm2')));
  check('F5', 'inactive filter ⇒ applyCardFilter returns all', applyCardFilter(items, byItem, { states: [], types: [] }, TODAY, 'sm2').length === 3);
  const filtered = applyCardFilter(items, byItem, { states: ['due'], types: [] }, TODAY, 'sm2');
  check('F5', 'applyCardFilter(due) ⇒ [a]', filtered.length === 1 && filtered[0].id === 'a-2020');
  check('F5', 'applyCardFilter(paper) ⇒ [a,c]', applyCardFilter(items, byItem, { states: [], types: ['paper'] }, TODAY, 'sm2').map((i) => i.id).join() === 'a-2020,c-2022');
  check('F5', 'no-match filter ⇒ empty list', applyCardFilter(items, byItem, { states: ['new'], types: [] }, TODAY, 'sm2').length === 0);
}

// ─── F6: stub-DOM render of the filtered list ──────────────────────────
{
  function stubRoot() {
    let html = '';
    return {
      set innerHTML(v) { html = v; }, get innerHTML() { return html; },
      querySelectorAll() { return []; }, querySelector() { return null; },
      classList: { add() {} },
    };
  }
  // far-future / null cards keep states stable vs the harness's real "today"
  const state = {
    settings: { review: { scheduler: 'sm2' } },
    domains: { test: { cards: { a1: cards[0], a2: { ...cards[1], nextReview: addDays('2999-01-01', 0) }, b1: { ...cards[2], nextReview: '2999-01-01' }, c1: cards[3] } } },
  };
  const phases = [{ id: 'p1', order: 1, name: 'Phase 1' }, { id: 'p2', order: 2, name: 'Phase 2' }];
  const deps = {
    domainId: 'test', items, phases, selectedItemId: null, expandedPhases: new Set(),
    onPhaseToggle() {}, onItemSelect() {}, onCardSchedule() {}, onBack() {},
    domainMeta: { fullName: 'Test' }, systemTypeFilter: 'all', lang: 'en',
    libraryFilter: { states: ['mastered'], types: [] }, onCardFilterToggle() {}, onCardFilterClear() {},
  };
  let threw = null; const root = stubRoot();
  try { renderLibraryView(state, root, deps); } catch (e) { threw = e; }
  check('F6', 'renders without throwing', threw === null, threw ? threw.message : '');
  const h = root.innerHTML;
  check('F6', 'filter bar present', /library-filter/.test(h));
  check('F6', 'mastered chip rendered active', /class="filter-chip active"[^>]*data-filter-value="mastered"/.test(h));
  check('F6', 'count line reflects filter (1 of 3)', /Showing 1 of 3 source/.test(h));
  check('F6', 'matching item (Alpha) shown', /Alpha/.test(h));
  check('F6', 'non-matching item (Charlie) hidden', !/Charlie/.test(h));
  // empty-result render still shows the chip bar + a clear affordance
  const root2 = stubRoot();
  renderLibraryView(state, root2, { ...deps, libraryFilter: { states: ['new'], types: [] } });
  check('F6', 'no-match: chip bar + clear shown, no items', /library-filter/.test(root2.innerHTML) && /data-filter-clear/.test(root2.innerHTML) && !/Alpha/.test(root2.innerHTML));
}

const passed = results.filter((r) => r.ok).length;
console.log(`\nTotal: ${passed}/${results.length}`);
if (passed === results.length) console.log('All checks pass. Library multi-select card filter (facets + predicate + render) verified.');
process.exit(passed === results.length ? 0 : 1);
