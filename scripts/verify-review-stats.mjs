#!/usr/bin/env node
// Harness for the review stats + streak readout (js/dashboard.js, Phase S24):
// totals, grade distribution + success rate, current/longest daily streak
// (including the "today not yet reviewed" carry-over), and the rolling 7/30-day
// windows.
//
// Usage:  node scripts/verify-review-stats.mjs [--quiet]
// Exit code: 0 = all pass, 1 = any fail.

import { pathToFileURL, fileURLToPath } from 'node:url';
import path from 'node:path';
import { readFileSync } from 'node:fs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const QUIET = process.argv.includes('--quiet');

if (typeof globalThis.localStorage === 'undefined') {
  const m = new Map();
  globalThis.localStorage = { getItem: (k) => (m.has(k) ? m.get(k) : null), setItem: (k, v) => m.set(k, String(v)), removeItem: (k) => m.delete(k) };
}

const dash = await import(pathToFileURL(path.join(ROOT, 'js/dashboard.js')).href);
const { reviewStats, retentionTrend, reviewStatsByDomain, reviewTimeStats } = dash;
const { addDays } = await import(pathToFileURL(path.join(ROOT, 'js/util.js')).href);

const results = [];
function check(section, label, cond, detail = '') {
  results.push({ section, ok: !!cond });
  if (!QUIET && !cond) console.log(`  [${section}] ✗ ${label}${detail ? ': ' + detail : ''}`);
}
const TODAY = '2026-06-05';
const day = (n, grade = 3) => ({ cardId: 'c', ts: addDays(TODAY, n), grade });

// ─── RS1: empty / robust ───────────────────────────────────────────────
{
  const s = reviewStats([], TODAY);
  check('RS1', 'empty ⇒ zeroed totals + streaks', s.total === 0 && s.currentStreak === 0 && s.longestStreak === 0 && s.activeDays === 0);
  check('RS1', 'empty ⇒ successPct 0', s.successPct === 0);
  const s2 = reviewStats([{ ts: null }, { grade: 3 }, null, { ts: TODAY, grade: 3 }], TODAY);
  check('RS1', 'ignores entries without ts', s2.total === 1);
}

// ─── RS2: totals + grade distribution + success rate ───────────────────
{
  const log = [day(0, 1), day(0, 2), day(0, 3), day(0, 4), day(0, 4)];
  const s = reviewStats(log, TODAY);
  check('RS2', 'total counts every entry', s.total === 5);
  check('RS2', 'grade distribution', s.byGrade[1] === 1 && s.byGrade[2] === 1 && s.byGrade[3] === 1 && s.byGrade[4] === 2);
  check('RS2', 'graded count', s.graded === 5);
  check('RS2', 'success rate = (grade≥2)/graded', Math.abs(s.successPct - 0.8) < 1e-9);
  check('RS2', 'reviewsToday', s.reviewsToday === 5);
  check('RS2', 'activeDays = 1 (all same day)', s.activeDays === 1);
}

// ─── RS3: current streak ───────────────────────────────────────────────
{
  check('RS3', 'today+yesterday+day-2 ⇒ streak 3', reviewStats([day(0), day(-1), day(-2)], TODAY).currentStreak === 3);
  check('RS3', 'today empty but y-1,y-2 active ⇒ streak 2 (carry-over)', reviewStats([day(-1), day(-2)], TODAY).currentStreak === 2);
  check('RS3', 'gap breaks it: today + day-2 ⇒ streak 1', reviewStats([day(0), day(-2)], TODAY).currentStreak === 1);
  check('RS3', 'stale (last active 5d ago) ⇒ streak 0', reviewStats([day(-5), day(-6)], TODAY).currentStreak === 0);
  check('RS3', 'multiple reviews same day count once for streak', reviewStats([day(0), day(0), day(-1)], TODAY).currentStreak === 2);
}

// ─── RS4: longest streak ───────────────────────────────────────────────
{
  // a 4-day run (−10..−7) + an isolated day (−2)
  const log = [day(-10), day(-9), day(-8), day(-7), day(-2)];
  const s = reviewStats(log, TODAY);
  check('RS4', 'longest run found in history', s.longestStreak === 4);
  check('RS4', "isolated day doesn't extend it", s.currentStreak === 0);   // −2 is not today/yesterday
  check('RS4', 'all-consecutive ⇒ longest = activeDays', (() => {
    const r = reviewStats([day(0), day(-1), day(-2), day(-3)], TODAY);
    return r.longestStreak === 4 && r.activeDays === 4;
  })());
}

// ─── RS5: rolling windows ──────────────────────────────────────────────
{
  const log = [day(0), day(0), day(-6), day(-7), day(-29), day(-30)];
  const s = reviewStats(log, TODAY);
  check('RS5', 'last7 includes day 0 + day −6 boundary, excludes −7', s.last7 === 3);
  check('RS5', 'last30 includes through −29 boundary, excludes −30', s.last30 === 5);
  check('RS5', 'future-dated entries excluded from windows', (() => {
    const r = reviewStats([day(0), day(3)], TODAY);   // +3 is in the future
    return r.last7 === 1 && r.last30 === 1 && r.total === 2;
  })());
}

// ─── RS6: determinism ──────────────────────────────────────────────────
{
  const log = [day(0), day(-1), day(-1, 1), day(-3, 4)];
  check('RS6', 'identical inputs ⇒ identical output', JSON.stringify(reviewStats(log, TODAY)) === JSON.stringify(reviewStats(log, TODAY)));
}

// ─── RS7: weekly retention trend (success-rate sparkline) ──────────────
{
  const empty = retentionTrend([], TODAY, 12);
  check('RS7', 'points length = weeks', empty.points.length === 12);
  check('RS7', 'oldest → newest (last point is this week)', empty.points[empty.points.length - 1].weeksAgo === 0 && empty.points[0].weeksAgo === 11);
  check('RS7', 'empty ⇒ all rates null, overall null', empty.points.every((p) => p.rate === null) && empty.overallRate === null && empty.totalGraded === 0);

  // this week: 3 of 4 recalled (75%); 2 weeks ago: 1 of 2 (50%); week 1: nothing
  const log = [
    day(0, 4), day(-1, 3), day(-2, 2), day(-3, 1),     // this week → 3/4
    day(-14, 4), day(-15, 1),                           // 2 weeks ago → 1/2
  ];
  const t = retentionTrend(log, TODAY, 12);
  const thisWk = t.points[t.points.length - 1];
  const twoWk = t.points.find((p) => p.weeksAgo === 2);
  const oneWk = t.points.find((p) => p.weeksAgo === 1);
  check('RS7', 'this week rate = 3/4', Math.abs(thisWk.rate - 0.75) < 1e-9 && thisWk.graded === 4 && thisWk.success === 3);
  check('RS7', 'two weeks ago rate = 1/2', Math.abs(twoWk.rate - 0.5) < 1e-9 && twoWk.graded === 2);
  check('RS7', 'a week with no reviews ⇒ rate null (line gap)', oneWk.rate === null && oneWk.graded === 0);
  check('RS7', 'overall rate = total success / total graded (4/6)', Math.abs(t.overallRate - 4 / 6) < 1e-9 && t.totalGraded === 6);
  check('RS7', 'beyond the window excluded', retentionTrend([day(-90, 4)], TODAY, 12).totalGraded === 0);
  check('RS7', 'ungraded / future entries ignored', retentionTrend([{ ts: TODAY }, day(7, 4)], TODAY, 12).totalGraded === 0);
  check('RS7', 'determinism', JSON.stringify(retentionTrend(log, TODAY, 12)) === JSON.stringify(retentionTrend(log, TODAY, 12)));
}

// ─── RS8: per-domain breakdown ─────────────────────────────────────────
{
  const dd = (n, domain, grade = 3) => ({ cardId: 'c', ts: addDays(TODAY, n), domain, grade });
  const log = [
    dd(0, 'micro', 4), dd(0, 'micro', 4), dd(-1, 'micro', 1),   // micro: 3 reviews, 2/3 success, streak 2
    dd(0, 'geo', 3),                                             // geo: 1 review, 1/1, streak 1
    { cardId: 'x', ts: TODAY, grade: 3 },                       // legacy (no domain) → 'untagged'
  ];
  const rows = reviewStatsByDomain(log, TODAY);
  check('RS8', 'one row per domain (+ untagged)', rows.length === 3);
  check('RS8', 'sorted by volume (micro first)', rows[0].domainId === 'micro' && rows[0].total === 3);
  const micro = rows.find((r) => r.domainId === 'micro');
  check('RS8', 'per-domain success rate (micro 2/3)', Math.abs(micro.successPct - 2 / 3) < 1e-9);
  check('RS8', 'per-domain streak (micro 2)', micro.currentStreak === 2);
  check('RS8', 'legacy entries bucket as untagged', rows.some((r) => r.domainId === 'untagged' && r.total === 1));
  check('RS8', 'per-domain totals sum to overall', rows.reduce((a, r) => a + r.total, 0) === reviewStats(log, TODAY).total);
  check('RS8', 'empty log ⇒ no rows', reviewStatsByDomain([], TODAY).length === 0);
  check('RS8', 'determinism', JSON.stringify(reviewStatsByDomain(log, TODAY)) === JSON.stringify(reviewStatsByDomain(log, TODAY)));
}

// ─── RS9: study-timing (day-of-week + hour-of-day) ─────────────────────
{
  const empty = reviewTimeStats([]);
  check('RS9', 'empty ⇒ 7 dow + 24 hour buckets, total 0', empty.byDow.length === 7 && empty.byHour.length === 24 && empty.total === 0 && empty.hasHours === false);

  // 2026-06-01 is a Monday; +7 is the next Monday (same weekday bucket)
  const MON = '2026-06-01';
  const monWd = new Date(MON + 'T00:00:00Z').getUTCDay();
  const log = [
    { ts: MON, grade: 4, hour: 9 }, { ts: MON, grade: 1, hour: 9 },   // Monday 09:00 → 1/2 recall
    { ts: '2026-06-08', grade: 3, hour: 21 },                          // next Monday 21:00
    { ts: '2026-06-03', grade: 4, hour: 9 },                           // Wednesday 09:00
    { ts: '2026-06-03' },                                              // Wednesday, ungraded + no hour
  ];
  const t = reviewTimeStats(log);
  check('RS9', 'same weekday a week apart shares a bucket', t.byDow[monWd].n === 3);
  check('RS9', 'Monday recall = 2/3 (g4,g1,g3 across two Mondays)', Math.abs(t.byDow[monWd].rate - 2 / 3) < 1e-9 && t.byDow[monWd].graded === 3);
  check('RS9', 'hour bucket 9 gets the three 09:00 reviews', t.byHour[9].n === 3);
  check('RS9', 'hour 9 recall = 2/3', Math.abs(t.byHour[9].rate - 2 / 3) < 1e-9);
  check('RS9', 'hasHours true when any entry has hour', t.hasHours === true);
  check('RS9', 'ungraded entry counts as volume but not in rate', t.byDow[new Date('2026-06-03T00:00:00Z').getUTCDay()].n === 2 && t.byDow[new Date('2026-06-03T00:00:00Z').getUTCDay()].graded === 1);
  check('RS9', 'entry without hour excluded from byHour', reviewTimeStats([{ ts: MON, grade: 3 }]).hasHours === false);
  check('RS9', 'out-of-range hour ignored for hour buckets', reviewTimeStats([{ ts: MON, grade: 3, hour: 99 }]).hasHours === false);
  check('RS9', 'total counts every dated entry', t.total === 5);
  check('RS9', 'determinism', JSON.stringify(reviewTimeStats(log)) === JSON.stringify(reviewTimeStats(log)));

  // app.js captures the local hour on each review-log entry
  const appSrc = readFileSync(path.join(ROOT, 'js/app.js'), 'utf8');
  check('RS9', 'onRate captures hour into the review log', /hour\s*=\s*new Date\(\)\.getHours\(\)/.test(appSrc) && /appendReview\(App\.state,\s*\{[^}]*hour\b/.test(appSrc));
}

const passed = results.filter((r) => r.ok).length;
console.log(`\nTotal: ${passed}/${results.length}`);
if (passed === results.length) console.log('All checks pass. Review stats + streak verified.');
process.exit(passed === results.length ? 0 : 1);
