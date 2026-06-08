#!/usr/bin/env node
// Harness for the spaced-repetition "what-if" projection (js/dashboard.js,
// Phase S17): grade-pattern presets, the faithful forward interval trajectory
// under each engine (driving the real schedule() facade), and the summary
// stats — plus a stub-DOM render of the whole dashboard (which exercises the
// whatIfSVG chart + wireWhatIf control wiring) in both EN and ID.
//
// Usage:  node scripts/verify-whatif-sim.mjs [--quiet]
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
const { whatIfPattern, whatIfTrajectory, whatIfSummary, renderDashboardView } = dash;

const results = [];
function check(section, label, cond, detail = '') {
  results.push({ section, ok: !!cond });
  if (!QUIET && !cond) console.log(`  [${section}] ✗ ${label}${detail ? ': ' + detail : ''}`);
}
const TODAY = '2026-06-04';

// ─── W1: grade-pattern presets ─────────────────────────────────────────
{
  check('W1', 'good ⇒ all quality 4', whatIfPattern('good', 6).every((q) => q === 4) && whatIfPattern('good', 6).length === 6);
  check('W1', 'easy ⇒ all quality 5', whatIfPattern('easy', 5).every((q) => q === 5));
  check('W1', 'hard ⇒ all quality 3', whatIfPattern('hard', 5).every((q) => q === 3));
  const alt = whatIfPattern('alt', 6);
  check('W1', 'alt ⇒ 4,3,4,3…', alt[0] === 4 && alt[1] === 3 && alt[2] === 4 && alt[3] === 3);
  const lap = whatIfPattern('lapse', 9);
  check('W1', 'lapse ⇒ exactly one "again" (q<3)', lap.filter((q) => q < 3).length === 1);
  check('W1', 'lapse ⇒ rest are Good', lap.filter((q) => q === 4).length === 8);
  check('W1', 'unknown preset falls back to good', whatIfPattern('???', 4).every((q) => q === 4));
}

// ─── W2: SM-2 trajectory under all-Good ────────────────────────────────
{
  const t = whatIfTrajectory(whatIfPattern('good', 6), 'sm2', TODAY);
  check('W2', 'one point per review', t.length === 6);
  check('W2', 'SM-2 first interval = 1', t[0].interval === 1);
  check('W2', 'SM-2 second interval = 6', t[1].interval === 6);
  check('W2', 'SM-2 third interval = round(6·2.5)=15', t[2].interval === 15);
  check('W2', 'intervals strictly increase from review 2', t.slice(1).every((p, i) => i === 0 || p.interval > t[i].interval));
  check('W2', 'dayOfReview = cumulative prior intervals', t[1].dayOfReview === t[0].interval && t[2].dayOfReview === t[0].interval + t[1].interval);
  check('W2', 'nextDay = dayOfReview + interval', t.every((p) => p.nextDay === p.dayOfReview + p.interval));
  check('W2', 'no lapses flagged under all-Good', t.every((p) => p.lapsed === false));
  check('W2', 'reaches mastery at review 3 (reps≥3)', t[2].mastered === true && t[1].mastered === false);
  check('W2', 'SM-2 points carry ef, not stability', typeof t[0].ef === 'number' && t[0].stability === undefined);
}

// ─── W3: FSRS trajectory under all-Good ────────────────────────────────
{
  const t = whatIfTrajectory(whatIfPattern('good', 8), 'fsrs', TODAY, 0.9);
  check('W3', 'all intervals positive', t.every((p) => p.interval > 0));
  check('W3', 'FSRS intervals strictly increase under all-Good', t.every((p, i) => i === 0 || p.interval >= t[i - 1].interval));
  check('W3', 'stability strictly increases', t.every((p, i) => i === 0 || p.stability > t[i - 1].stability));
  check('W3', 'FSRS points carry stability + difficulty', typeof t[0].stability === 'number' && typeof t[0].difficulty === 'number');
  check('W3', 'difficulty stays in [1,10]', t.every((p) => p.difficulty >= 1 && p.difficulty <= 10));
}

// ─── W4: lapse resets the schedule ─────────────────────────────────────
{
  const grades = whatIfPattern('lapse', 9);          // lapse at the middle step (index 4 → step 5)
  const lapseStep = grades.findIndex((q) => q < 3) + 1;
  const sm2 = whatIfTrajectory(grades, 'sm2', TODAY);
  const fsrs = whatIfTrajectory(grades, 'fsrs', TODAY, 0.9);
  check('W4', 'lapsed flag set only at the lapse step', sm2.filter((p) => p.lapsed).length === 1 && sm2[lapseStep - 1].lapsed === true);
  check('W4', 'SM-2 interval collapses to 1 on lapse', sm2[lapseStep - 1].interval === 1);
  check('W4', 'SM-2 reps reset: post-lapse restarts 1 → 6', sm2[lapseStep].interval === 1 && sm2[lapseStep + 1].interval === 6);
  check('W4', 'FSRS interval drops at the lapse vs prior step', fsrs[lapseStep - 1].interval < fsrs[lapseStep - 2].interval);
}

// ─── W5: FSRS target retention shortens intervals ──────────────────────
{
  const hi = whatIfTrajectory(whatIfPattern('good', 7), 'fsrs', TODAY, 0.95);
  const lo = whatIfTrajectory(whatIfPattern('good', 7), 'fsrs', TODAY, 0.80);
  check('W5', 'higher target retention ⇒ shorter final interval', hi[hi.length - 1].interval < lo[lo.length - 1].interval);
  check('W5', 'every step: 0.95-target ≤ 0.80-target interval', hi.every((p, i) => p.interval <= lo[i].interval));
}

// ─── W6: Easy grows at least as fast as Good ───────────────────────────
{
  const goodF = whatIfTrajectory(whatIfPattern('good', 7), 'fsrs', TODAY, 0.9);
  const easyF = whatIfTrajectory(whatIfPattern('easy', 7), 'fsrs', TODAY, 0.9);
  check('W6', 'FSRS: Easy final ≥ Good final interval', easyF[easyF.length - 1].interval >= goodF[goodF.length - 1].interval);
  const goodS = whatIfTrajectory(whatIfPattern('good', 7), 'sm2', TODAY);
  const easyS = whatIfTrajectory(whatIfPattern('easy', 7), 'sm2', TODAY);
  check('W6', 'SM-2: Easy final ≥ Good final interval', easyS[easyS.length - 1].interval >= goodS[goodS.length - 1].interval);
}

// ─── W7: summary stats ─────────────────────────────────────────────────
{
  const t = whatIfTrajectory(whatIfPattern('good', 6), 'sm2', TODAY);
  const s = whatIfSummary(t);
  check('W7', 'finalInterval = last interval', s.finalInterval === t[t.length - 1].interval);
  check('W7', 'totalDays = last nextDay', s.totalDays === t[t.length - 1].nextDay);
  check('W7', 'reviews = trajectory length', s.reviews === 6);
  check('W7', 'masteredAt = first mastered step', s.masteredAt === 3);
  const never = whatIfSummary(whatIfTrajectory(whatIfPattern('hard', 2), 'sm2', TODAY));
  check('W7', 'masteredAt null when never mastered (2 hard reviews)', never.masteredAt === null);
  check('W7', 'empty trajectory ⇒ zeroed summary', whatIfSummary([]).reviews === 0 && whatIfSummary([]).masteredAt === null);
}

// ─── W8: determinism ───────────────────────────────────────────────────
{
  const a = whatIfTrajectory(whatIfPattern('alt', 8), 'fsrs', TODAY, 0.9);
  const b = whatIfTrajectory(whatIfPattern('alt', 8), 'fsrs', TODAY, 0.9);
  check('W8', 'identical inputs ⇒ identical intervals', a.every((p, i) => p.interval === b[i].interval && p.stability === b[i].stability));
}

// ─── W9: dashboard render smoke-test (stub DOM, EN + ID) ───────────────
{
  function el(props = {}) {
    let html = '', txt = '';
    return {
      set innerHTML(v) { html = v; }, get innerHTML() { return html; },
      set textContent(v) { txt = v; }, get textContent() { return txt; },
      value: props.value, addEventListener() {},
    };
  }
  function stubRoot() {
    const controls = {
      '[data-whatif="preset"]': el({ value: 'lapse' }),
      '[data-whatif="n"]': el({ value: '9' }),
      '[data-whatif="rr"]': el({ value: '0.9' }),
      '[data-whatif-show="n"]': el(),
      '[data-whatif-show="rr"]': el(),
      '[data-whatif-chart]': el(),
      '[data-whatif-readout]': el(),
    };
    let html = '';
    return {
      set innerHTML(v) { html = v; }, get innerHTML() { return html; },
      querySelector(sel) { return controls[sel] || el(); },
      querySelectorAll() { return []; },
      _chart: controls['[data-whatif-chart]'], _readout: controls['[data-whatif-readout]'],
    };
  }
  const items = [{ id: 'a-2020', phase: 'p', prereqs: [] }, { id: 'b-2021', phase: 'p', prereqs: ['a-2020'] }];
  const state = { settings: { review: { scheduler: 'sm2', requestRetention: 0.9, fsrsWeights: null } }, reviewLog: [], domains: { test: { cards: {} } } };
  for (const lang of ['en', 'id']) {
    let threw = null; const root = stubRoot();
    try {
      renderDashboardView(state, root, { domainId: 'test', items, phases: [{ id: 'p', name: 'P' }], domainMeta: { fullName: 'Test' }, lang, today: TODAY, onNodeClick() {} });
    } catch (e) { threw = e; }
    check('W9', `dashboard renders without throwing (${lang})`, threw === null, threw ? threw.message : '');
    const svg = root._chart.innerHTML;
    check('W9', `what-if chart drew an <svg> (${lang})`, /<svg/.test(svg));
    check('W9', `chart has no NaN/undefined (${lang})`, svg.length > 0 && !/NaN|undefined/.test(svg));
    check('W9', `readout populated (${lang})`, /SM-2/.test(root._readout.innerHTML) && /FSRS/.test(root._readout.innerHTML));
    check('W9', `scheduler-backtest panel present (${lang})`, /dashboard-backtest/.test(root.innerHTML));
    check('W9', `target-retention panel present (${lang})`, /dashboard-retention/.test(root.innerHTML));
    check('W9', `new-cards-per-day panel present (${lang})`, /dashboard-newcards/.test(root.innerHTML));
    check('W9', `study-timing panel present (${lang})`, /dashboard-timing/.test(root.innerHTML));
    check('W9', `review-stats panel present (${lang})`, /dashboard-stats/.test(root.innerHTML));
  }
}

const passed = results.filter((r) => r.ok).length;
console.log(`\nTotal: ${passed}/${results.length}`);
if (passed === results.length) console.log('All checks pass. SR what-if projection (presets + dual-engine trajectory + render) verified.');
process.exit(passed === results.length ? 0 : 1);
