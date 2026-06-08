// Optimal-retention workload curve (Phase S28) — the cutting-edge FSRS question:
// *what target retention should you actually pick?*
//
// Target retention is a dial. Turn it up and you review each card before it has
// faded much: you remember more, but intervals are short, each review reinforces
// little (the spacing effect — small 1−R means small stability gain), so you pay
// in review volume. Turn it down and intervals stretch out, but you relapse
// often, every lapse slams stability back down, and short intervals return. Both
// extremes are expensive; the workload-minimising retention sits in between.
//
// This models the long-run review workload of a single representative card at
// each candidate retention, by driving the *real* FSRS dynamics under an
// expected-value recursion (success with prob R, lapse with prob 1−R at the
// moment retrievability hits R — no RNG, so it's pure + deterministic +
// testable). It is a mean-field model, surfaced as guidance, not a guarantee.

import {
  FSRS_DEFAULT_W, initStability, initDifficulty, nextDifficulty,
  stabilityOnSuccess, stabilityOnLapse, nextInterval,
} from './fsrs.js';

const clamp = (x, lo, hi) => Math.min(hi, Math.max(lo, x));

// Expected reviews over `horizon` days for one fresh card maintained at target
// retention r, plus the mean interval it settles into.
function workloadAt(r, w, horizon, grade) {
  let S = initStability(grade, w);
  let D = initDifficulty(grade, w);
  let t = 0, reviews = 0;
  for (let k = 0; k < 100000 && t < horizon; k++) {
    const I = nextInterval(S, r);          // days until retrievability falls to r (≥ 1)
    t += I;
    reviews += 1;
    // expected state update over {success w.p. r, lapse w.p. 1−r} at R = r
    const Ss = stabilityOnSuccess(D, S, r, grade, w);
    const Sl = stabilityOnLapse(D, S, r, w);
    S = Math.max(0.1, r * Ss + (1 - r) * Sl);
    D = clamp(r * nextDifficulty(D, grade, w) + (1 - r) * nextDifficulty(D, 1, w), 1, 10);
  }
  // reviews per *year* (a long horizon makes the per-year figure smooth, not a
  // coarse 3-vs-4 integer), plus the mean interval the card settles into.
  return { reviewsPerYear: +(reviews / (horizon / 365)).toFixed(2), avgIntervalDays: +(horizon / Math.max(1, reviews)).toFixed(2) };
}

// The workload curve over a grid of target retentions.
//   opts: { weights?, horizonDays = 3650, grade = 3, retentions? }
export function workloadCurve(weights, opts = {}) {
  const w = (Array.isArray(weights) && weights.length === 17) ? weights : FSRS_DEFAULT_W;
  const horizon = opts.horizonDays || 3650;
  const grade = opts.grade || 3;
  const retentions = opts.retentions || Array.from({ length: 28 }, (_, i) => +(0.70 + i * 0.01).toFixed(2));
  return retentions.map((r) => {
    const { reviewsPerYear, avgIntervalDays } = workloadAt(r, w, horizon, grade);
    return { retention: r, reviewsPerYear, avgIntervalDays };
  });
}

// Workload falls monotonically as you lower the target (remembering less is
// always less work), so the useful recommendation is not an argmin but the
// *diminishing-returns knee*: the target beyond which workload climbs steeply
// for little extra retention. Found as the point of greatest drop below the
// chord joining the curve's endpoints (the convex elbow / "Kneedle" method).
export function recommendRetention(points) {
  if (!points || !points.length) return null;
  if (points.length < 3) return points[points.length - 1].retention;
  const xs = points.map((p) => p.retention), ys = points.map((p) => p.reviewsPerYear);
  const x0 = xs[0], x1 = xs[xs.length - 1], y0 = ys[0], y1 = ys[ys.length - 1];
  let bestI = 0, bestGap = -Infinity;
  for (let i = 0; i < points.length; i++) {
    const t = (xs[i] - x0) / ((x1 - x0) || 1);
    const chord = y0 + t * (y1 - y0);
    const gap = chord - ys[i];          // positive below the chord (convex region)
    if (gap > bestGap) { bestGap = gap; bestI = i; }
  }
  return xs[bestI];
}

// Reviews a single fresh card incurs in its *first year* at a given target
// retention — the cost of taking on one new card. (workloadAt over a 365-day
// horizon returns exactly this raw count.)
export function firstYearReviews(weights, retention = 0.9, grade = 3) {
  const w = (Array.isArray(weights) && weights.length === 17) ? weights : FSRS_DEFAULT_W;
  return +workloadAt(retention, w, 365, grade).reviewsPerYear.toFixed(2);
}

// Sustainable new cards/day for a given daily review budget. Steady-state
// reasoning: each new card adds ~F reviews over its first year, so with N new
// cards/day the cards-in-their-first-year (~365N of them) generate ~N·F
// reviews/day. Hold that at the budget B ⇒ N ≈ B / F.
export function newCardsForBudget(weights, retention, reviewsPerDay, grade = 3) {
  const F = firstYearReviews(weights, retention, grade);
  if (!(reviewsPerDay > 0) || !(F > 0)) return 0;
  return Math.max(0, Math.round(reviewsPerDay / F));
}

// A small table of {review budget → recommended new cards/day} plus the
// per-card first-year cost the recommendation is built on.
export function recommendNewCards(weights, retention = 0.9, opts = {}) {
  const grade = opts.grade || 3;
  const budgets = opts.budgets || [10, 20, 30, 40, 60];
  const F = firstYearReviews(weights, retention, grade);
  const rows = budgets.map((b) => ({ reviewsPerDay: b, newCardsPerDay: F > 0 ? Math.max(0, Math.round(b / F)) : 0 }));
  return { retention, firstYearReviews: F, rows };
}

// Convenience: curve + recommendation + the point nearest a given current target.
export function retentionAdvice(weights, currentRetention, opts = {}) {
  const points = workloadCurve(weights, opts);
  const recommended = recommendRetention(points);
  const nearest = (target) => points.reduce((a, b) =>
    Math.abs(b.retention - target) < Math.abs(a.retention - target) ? b : a, points[0]);
  return {
    points,
    recommended,
    recommendedPoint: points.find((p) => p.retention === recommended) || null,
    currentPoint: currentRetention != null ? nearest(currentRetention) : null,
  };
}
