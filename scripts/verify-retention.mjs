#!/usr/bin/env node
// Harness for the target-retention workload model (js/retention.js, Phase S28):
// the FSRS-driven workload curve, its monotonicity (more retention ⇒ more
// reviews, shorter intervals), the diminishing-returns knee recommendation, and
// the advice bundle.
//
// Usage:  node scripts/verify-retention.mjs [--quiet]
// Exit code: 0 = all pass, 1 = any fail.

import { pathToFileURL, fileURLToPath } from 'node:url';
import path from 'node:path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const QUIET = process.argv.includes('--quiet');

const ret = await import(pathToFileURL(path.join(ROOT, 'js/retention.js')).href);
const { workloadCurve, recommendRetention, retentionAdvice, firstYearReviews, recommendNewCards, newCardsForBudget } = ret;
const { FSRS_DEFAULT_W } = await import(pathToFileURL(path.join(ROOT, 'js/fsrs.js')).href);

const results = [];
function check(section, label, cond, detail = '') {
  results.push({ section, ok: !!cond });
  if (!QUIET && !cond) console.log(`  [${section}] ✗ ${label}${detail ? ': ' + detail : ''}`);
}

// ─── RT1: curve structure ──────────────────────────────────────────────
{
  const pts = workloadCurve(null, {});
  check('RT1', 'default grid = 28 points (0.70…0.97)', pts.length === 28 && pts[0].retention === 0.70 && pts[27].retention === 0.97);
  check('RT1', 'retentions strictly ascending', pts.every((p, i) => i === 0 || p.retention > pts[i - 1].retention));
  check('RT1', 'all reviews/yr positive + finite', pts.every((p) => p.reviewsPerYear > 0 && Number.isFinite(p.reviewsPerYear)));
  check('RT1', 'all avg intervals positive + finite', pts.every((p) => p.avgIntervalDays > 0 && Number.isFinite(p.avgIntervalDays)));
  check('RT1', 'custom retention grid honoured', workloadCurve(null, { retentions: [0.8, 0.9] }).length === 2);
}

// ─── RT2: monotonicity (the core tension) ──────────────────────────────
{
  const pts = workloadCurve(null, {});
  check('RT2', 'higher target ⇒ ≥ workload (non-decreasing)', pts.every((p, i) => i === 0 || p.reviewsPerYear >= pts[i - 1].reviewsPerYear - 1e-9));
  check('RT2', 'higher target ⇒ ≤ interval (non-increasing)', pts.every((p, i) => i === 0 || p.avgIntervalDays <= pts[i - 1].avgIntervalDays + 1e-9));
  check('RT2', '0.97 strictly costs more than 0.70', pts[27].reviewsPerYear > pts[0].reviewsPerYear);
}

// ─── RT3: diminishing-returns knee ─────────────────────────────────────
{
  const pts = workloadCurve(null, {});
  const knee = recommendRetention(pts);
  check('RT3', 'knee is one of the grid retentions', pts.some((p) => p.retention === knee));
  check('RT3', 'knee is interior (not an endpoint)', knee !== pts[0].retention && knee !== pts[27].retention);
  check('RT3', 'knee in a sensible band (0.85–0.95)', knee >= 0.85 && knee <= 0.95);
  check('RT3', 'empty ⇒ null', recommendRetention([]) === null);
  check('RT3', '<3 points ⇒ last retention', recommendRetention([{ retention: 0.8, reviewsPerYear: 1 }, { retention: 0.9, reviewsPerYear: 2 }]) === 0.9);
}

// ─── RT4: retentionAdvice bundle ───────────────────────────────────────
{
  const adv = retentionAdvice(null, 0.9);
  check('RT4', 'recommended matches recommendRetention(points)', adv.recommended === recommendRetention(adv.points));
  check('RT4', 'recommendedPoint.retention === recommended', adv.recommendedPoint && adv.recommendedPoint.retention === adv.recommended);
  check('RT4', 'currentPoint is the nearest grid point to 0.90', adv.currentPoint && adv.currentPoint.retention === 0.90);
  const adv2 = retentionAdvice(null, 0.934);
  check('RT4', 'nearest snaps 0.934 → 0.93', adv2.currentPoint.retention === 0.93);
  check('RT4', 'no current target ⇒ currentPoint null', retentionAdvice(null, null).currentPoint === null);
}

// ─── RT5: weights handling + determinism ───────────────────────────────
{
  const def = workloadCurve(FSRS_DEFAULT_W, {});
  const fallback = workloadCurve([1, 2, 3], {});   // invalid length ⇒ defaults
  check('RT5', 'invalid weights fall back to defaults', JSON.stringify(def) === JSON.stringify(fallback));
  const trained = FSRS_DEFAULT_W.map((x, i) => (i === 8 ? x * 1.05 : x));
  const tc = workloadCurve(trained, {});
  check('RT5', 'trained weights ⇒ valid (and different) curve', tc.length === 28 && JSON.stringify(tc) !== JSON.stringify(def));
  check('RT5', 'determinism', JSON.stringify(workloadCurve(null, {})) === JSON.stringify(workloadCurve(null, {})));
  check('RT5', 'grade option accepted (Easy) ⇒ valid curve', workloadCurve(null, { grade: 4 }).every((p) => p.reviewsPerYear > 0));
}

// ─── RT6: new-card budget recommender ──────────────────────────────────
{
  const f90 = firstYearReviews(null, 0.90);
  check('RT6', 'first-year cost positive', f90 > 0 && Number.isFinite(f90));
  check('RT6', 'higher target ⇒ costlier first year', firstYearReviews(null, 0.97) > firstYearReviews(null, 0.80));
  const rec = recommendNewCards(null, 0.90, { budgets: [10, 20, 40] });
  check('RT6', 'one row per budget', rec.rows.length === 3);
  check('RT6', 'reports the first-year cost it used', rec.firstYearReviews === f90);
  check('RT6', 'new/day = round(budget / first-year cost)', rec.rows.every((r) => r.newCardsPerDay === Math.round(r.reviewsPerDay / f90)));
  check('RT6', 'bigger budget ⇒ ≥ new cards/day', rec.rows.every((r, i) => i === 0 || r.newCardsPerDay >= rec.rows[i - 1].newCardsPerDay));
  check('RT6', 'newCardsForBudget matches the table', newCardsForBudget(null, 0.90, 20) === Math.round(20 / f90));
  check('RT6', 'zero / negative budget ⇒ 0 new cards', newCardsForBudget(null, 0.90, 0) === 0 && newCardsForBudget(null, 0.90, -5) === 0);
  check('RT6', 'higher target ⇒ fewer sustainable new cards', newCardsForBudget(null, 0.97, 30) <= newCardsForBudget(null, 0.80, 30));
  check('RT6', 'invalid weights fall back to defaults', firstYearReviews([1, 2, 3], 0.9) === firstYearReviews(null, 0.9));
  check('RT6', 'determinism', JSON.stringify(recommendNewCards(null, 0.9)) === JSON.stringify(recommendNewCards(null, 0.9)));
}

const passed = results.filter((r) => r.ok).length;
console.log(`\nTotal: ${passed}/${results.length}`);
if (passed === results.length) console.log('All checks pass. Target-retention workload model verified.');
process.exit(passed === results.length ? 0 : 1);
