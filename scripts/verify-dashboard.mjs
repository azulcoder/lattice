#!/usr/bin/env node
// Harness for the dashboard / knowledge-map pure functions (js/dashboard.js):
// label formatting, prereq-DAG level assignment (incl. robustness to missing
// ids / cycles), per-item progress state, graph availability (locked vs
// available), and the engine-aware summary stats.
//
// Usage:  node scripts/verify-dashboard.mjs [--quiet]
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

const dash = await import(pathToFileURL(path.join(ROOT, 'js/dashboard.js')).href);
const { addDays } = await import(pathToFileURL(path.join(ROOT, 'js/util.js')).href);
const itemsMod = await import(pathToFileURL(path.join(ROOT, 'data/domains/microstructure/items.js')).href);
const MICRO = itemsMod.ITEMS || itemsMod.default;

const results = [];
function check(section, label, cond, detail = '') {
  results.push({ section, ok: !!cond });
  if (!QUIET && !cond) console.log(`  [${section}] ✗ ${label}${detail ? ': ' + detail : ''}`);
}
const TODAY = '2026-06-04';

// ─── D1: short labels ──────────────────────────────────────────────────
check('D1', 'kyle-1985 → "Kyle 1985"', dash.shortLabel({ id: 'kyle-1985' }) === 'Kyle 1985');
check('D1', 'glosten-milgrom-1985 → "Glosten+ 1985"', dash.shortLabel({ id: 'glosten-milgrom-1985' }) === 'Glosten+ 1985');
check('D1', 'easley-lopez-prado-vpin → "Easley+" (no year)', dash.shortLabel({ id: 'easley-lopez-prado-vpin' }) === 'Easley+');
check('D1', 'tester-mit-2006 → "Tester+ 2006"', dash.shortLabel({ id: 'tester-mit-2006' }) === 'Tester+ 2006');

// ─── D2: prereq-DAG levels on the real microstructure catalog ──────────
{
  const lv = dash.computeLevels(MICRO);
  check('D2', 'roots at level 0', lv.get('hasbrouck-2007') === 0 && lv.get('ohara-1995') === 0);
  check('D2', 'kyle (prereq ohara) at 1', lv.get('kyle-1985') === 1);
  check('D2', 'stoikov (prereq kyle,glosten) at 2', lv.get('stoikov-2008') === 2);
  check('D2', 'cartea (prereq stoikov) at 3', lv.get('cartea-jaimungal-penalva') === 3);
  check('D2', 'bouchaud at 3 (longest path via cks=2)', lv.get('bouchaud-bonart-donier-gould-2018') === 3);
  check('D2', 'makarov (prereq hasbrouck) at 1', lv.get('makarov-schoar-2020') === 1);
  check('D2', 'every item has a finite level', MICRO.every((i) => Number.isInteger(lv.get(i.id))));
}

// ─── D3: level robustness (missing prereq id, cycle) ───────────────────
{
  const lvMissing = dash.computeLevels([{ id: 'a', prereqs: ['ghost'] }]);
  check('D3', 'missing prereq id ⇒ level 0', lvMissing.get('a') === 0);
  const lvCycle = dash.computeLevels([{ id: 'x', prereqs: ['y'] }, { id: 'y', prereqs: ['x'] }]);
  check('D3', 'cycle terminates (finite levels)', Number.isInteger(lvCycle.get('x')) && Number.isInteger(lvCycle.get('y')));
}

// ─── D4: per-item progress states (SM-2 engine) ────────────────────────
{
  const mastered = { repetitions: 4, ef: 2.5, interval: 25, nextReview: '2026-07-01' };
  const reviewing = { repetitions: 1, ef: 2.4, interval: 6, nextReview: '2026-06-10' };
  const fresh = { repetitions: 0, lapses: 0, interval: 0, nextReview: TODAY };
  check('D4', 'no cards ⇒ no-cards', dash.itemProgress({}, [], TODAY, 'sm2').state === 'no-cards');
  check('D4', 'all mastered ⇒ mastered', dash.itemProgress({}, [mastered, mastered], TODAY, 'sm2').state === 'mastered');
  check('D4', 'some reviewed, not all mastered ⇒ in-progress', dash.itemProgress({}, [mastered, reviewing], TODAY, 'sm2').state === 'in-progress');
  check('D4', 'cards but none reviewed ⇒ available', dash.itemProgress({}, [fresh, fresh], TODAY, 'sm2').state === 'available');
  const p = dash.itemProgress({}, [mastered, reviewing, fresh], TODAY, 'sm2');
  check('D4', 'counts: total/mastered/due', p.total === 3 && p.mastered === 1 && p.due >= 1);
}

// ─── D5: graph availability (locked vs available; card-less prereq ok) ─
{
  const masteredCard = { repetitions: 4, ef: 2.5, interval: 25, nextReview: '2026-07-01' };
  const freshCard = { repetitions: 0, lapses: 0, nextReview: TODAY };
  const items = [
    { id: 'root', phase: 'p', prereqs: [] },
    { id: 'mid', phase: 'p', prereqs: ['root'] },
    { id: 'leaf', phase: 'p', prereqs: ['mid'] },
    { id: 'cardless', phase: 'p', prereqs: [] },
    { id: 'afterCardless', phase: 'p', prereqs: ['cardless'] },
  ];
  // root mastered; mid fresh (prereq met → available); leaf fresh (prereq mid NOT mastered → locked)
  const cardsByItem = {
    root: [masteredCard],
    mid: [freshCard],
    leaf: [freshCard],
    cardless: [],            // no cards
    afterCardless: [freshCard],
  };
  const g = dash.buildGraph(items, cardsByItem, TODAY, 'sm2');
  const byId = Object.fromEntries(g.nodes.map((n) => [n.id, n]));
  check('D5', 'root mastered', byId.root.state === 'mastered');
  check('D5', 'mid available (prereq root mastered)', byId.mid.state === 'available');
  check('D5', 'leaf locked (prereq mid not mastered)', byId.leaf.state === 'locked');
  check('D5', 'card-less prereq does not lock downstream', byId.afterCardless.state === 'available');
  check('D5', 'edges count = total prereq links', g.edges.length === 3);
  check('D5', 'cols = maxLevel+1', g.cols === 3);   // root0 → mid1 → leaf2
}

// ─── D6: engine-aware summary ──────────────────────────────────────────
{
  const items = [{ id: 'a', phase: 'foundation' }, { id: 'b', phase: 'theory' }];
  const phases = [{ id: 'foundation', name: 'Foundation' }, { id: 'theory', name: 'Theory' }];
  const allCards = [
    { itemId: 'a', repetitions: 4, ef: 2.5, interval: 25, nextReview: '2026-05-01', stability: 40, lastReviewed: TODAY },  // mastered, due
    { itemId: 'a', repetitions: 1, ef: 2.3, interval: 6, nextReview: '2026-07-01', stability: 6, lastReviewed: TODAY },    // in-progress
    { itemId: 'b', repetitions: 0, lapses: 0, nextReview: TODAY },                                                          // fresh, due
  ];
  const sm2 = dash.dashboardSummary(items, allCards, TODAY, 'sm2', phases);
  check('D6', 'totalCards', sm2.totalCards === 3);
  check('D6', 'mastered count', sm2.mastered === 1);
  check('D6', 'in-progress count', sm2.inProgress === 1);
  check('D6', 'fresh count', sm2.fresh === 1);
  check('D6', 'due count', sm2.due === 2);
  check('D6', 'sm2 stat label = Avg EF', sm2.statLabel === 'Avg EF');
  check('D6', 'perPhase covers both phases', sm2.perPhase.length === 2 && sm2.perPhase[0].phase === 'foundation');
  const fs = dash.dashboardSummary(items, allCards, TODAY, 'fsrs', phases);
  check('D6', 'fsrs stat label = Avg retention', fs.statLabel === 'Avg retention');
  check('D6', 'fsrs stat is a percentage', /%$/.test(fs.statValue));
}

// ─── D7: review-workload forecast ──────────────────────────────────────
{
  const cards = [
    { nextReview: '2026-06-01' },            // overdue → day 0
    { nextReview: TODAY },                    // due today → day 0
    { nextReview: addDays(TODAY, 3) },        // → day 3
    { nextReview: addDays(TODAY, 3) },        // → day 3
    { nextReview: addDays(TODAY, 21) },       // → day 21 (edge of horizon)
    { nextReview: addDays(TODAY, 40) },       // beyond horizon → excluded
    { nextReview: null },                     // unscheduled → excluded
  ];
  const fc = dash.reviewForecast(cards, TODAY, 21);
  check('D7', 'bins length = horizon + 1', fc.bins.length === 22);
  check('D7', 'overdue + due-today land on day 0', fc.bins[0].count === 2 && fc.overdue === 1);
  check('D7', 'cards land on their due-day bin', fc.bins[3].count === 2 && fc.bins[21].count === 1);
  check('D7', 'beyond-horizon + unscheduled excluded', fc.bins.reduce((a, b) => a + b.count, 0) === 5);
}

// ─── D8: FSRS retention-forecast curve ─────────────────────────────────
{
  const fsrsCards = [
    { stability: 10, lastReviewed: TODAY },
    { stability: 30, lastReviewed: addDays(TODAY, -5) },
  ];
  check('D8', 'null for SM-2 engine', dash.retentionForecastCurve(fsrsCards, TODAY, 21, 'sm2') === null);
  const curve = dash.retentionForecastCurve(fsrsCards, TODAY, 21, 'fsrs');
  check('D8', 'curve length = horizon + 1', curve && curve.length === 22);
  check('D8', 'retention monotonically decays (no reviews)', curve.every((p, i) => i === 0 || p.retention <= curve[i - 1].retention + 1e-12));
  check('D8', 'all retention values in (0,1]', curve.every((p) => p.retention > 0 && p.retention <= 1));
  check('D8', 'null when no FSRS-reviewed cards', dash.retentionForecastCurve([{ stability: null, lastReviewed: null }], TODAY, 21, 'fsrs') === null);
}

// ─── D9: review-activity heatmap ───────────────────────────────────────
{
  const log = [
    { ts: TODAY, domain: 'microstructure' },
    { ts: TODAY, domain: 'microstructure' },
    { ts: addDays(TODAY, -3), domain: 'microstructure' },
    { ts: addDays(TODAY, -3), domain: 'geothermal' },   // other domain → excluded
    { ts: addDays(TODAY, -3) },                           // legacy (no domain) → counted everywhere
    { ts: addDays(TODAY, -200), domain: 'microstructure' }, // outside the 16-week window → excluded
  ];
  const hm = dash.reviewHeatmap(log, TODAY, 16, 'microstructure');
  check('D9', 'cells = weeks × 7', hm.cells.length === 112);
  check('D9', 'last cell is today', hm.cells[hm.cells.length - 1].date === TODAY);
  check('D9', 'today counts both micro reviews', hm.cells[hm.cells.length - 1].count === 2);
  const d3 = hm.cells.find((c) => c.date === addDays(TODAY, -3));
  check('D9', 'domain filter: micro + legacy counted, other-domain excluded', d3 && d3.count === 2);
  check('D9', 'outside-window entry excluded from total', hm.total === 4 && hm.max === 2);
  check('D9', 'no domain filter ⇒ all entries in-window counted', dash.reviewHeatmap(log, TODAY, 16, null).total === 5);
}

// ─── D10: leech detection ──────────────────────────────────────────────
{
  const cards = [
    { id: 'a', itemId: 'kyle-1985', front: 'A', lapses: 6, ef: 1.6 },
    { id: 'b', itemId: 'kyle-1985', front: 'B', lapses: 4, ef: 2.1 },
    { id: 'c', itemId: 'ohara-1995', front: 'C', lapses: 4, ef: 1.4 },   // ties b on lapses, lower ef ⇒ ranks above b
    { id: 'd', itemId: 'kyle-1985', front: 'D', lapses: 3 },             // below threshold
    { id: 'e', itemId: 'kyle-1985', front: 'E' },                        // no lapses field
  ];
  const leeches = dash.findLeeches(cards);
  check('D10', 'default threshold = 4 (lapses≥4 kept, <4 dropped)', leeches.length === 3 && !leeches.some((l) => l.id === 'd' || l.id === 'e'));
  check('D10', 'sorted worst-first (most lapses)', leeches[0].id === 'a' && leeches[0].lapses === 6);
  check('D10', 'lapse tie broken by lower ease (c before b)', leeches[1].id === 'c' && leeches[2].id === 'b');
  check('D10', 'carries front + itemId + lapses', leeches[0].front === 'A' && leeches[0].itemId === 'kyle-1985' && leeches[0].lapses === 6);
  check('D10', 'custom threshold raises the bar', dash.findLeeches(cards, { threshold: 5 }).length === 1);
  check('D10', 'no leeches ⇒ []', dash.findLeeches([{ id: 'x', lapses: 1 }]).length === 0);
  check('D10', 'empty / null input safe', dash.findLeeches([]).length === 0 && dash.findLeeches(null).length === 0);
  check('D10', 'LEECH_THRESHOLD exported = 4', dash.LEECH_THRESHOLD === 4);
}

const passed = results.filter(r => r.ok).length;
console.log(`\nTotal: ${passed}/${results.length}`);
if (passed === results.length) console.log('All checks pass. Dashboard graph + summary + forecast + heatmap + leech functions verified.');
process.exit(passed === results.length ? 0 : 1);
