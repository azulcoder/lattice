#!/usr/bin/env node
// Harness for the FSRS weight optimiser (js/fsrs-optimize.js). The robust,
// non-brittle claim for a fitter is: on data GENERATED from known weights W*,
// fitting must reduce the mean log-loss below the default-weights baseline
// (moving toward W*'s achievable loss), and it must no-op on sparse data.
//
// Usage:  node scripts/verify-fsrs-optimize.mjs [--quiet]
// Exit code: 0 = all pass, 1 = any fail.

import { pathToFileURL, fileURLToPath } from 'node:url';
import path from 'node:path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const QUIET = process.argv.includes('--quiet');

const opt = await import(pathToFileURL(path.join(ROOT, 'js/fsrs-optimize.js')).href);
const fsrs = await import(pathToFileURL(path.join(ROOT, 'js/fsrs.js')).href);

const results = [];
function check(section, label, cond, detail = '') {
  results.push({ section, ok: !!cond });
  if (!QUIET && !cond) console.log(`  [${section}] ✗ ${label}${detail ? ': ' + detail : ''}`);
}

// tiny deterministic RNG (mulberry32)
function rngFactory(seed) {
  let s = seed >>> 0;
  return () => { s = (s + 0x6D2B79F5) >>> 0; let t = s; t = Math.imul(t ^ (t >>> 15), t | 1); t ^= t + Math.imul(t ^ (t >>> 7), t | 61); return ((t ^ (t >>> 14)) >>> 0) / 4294967296; };
}

// Generate a review log from known weights W*: each card is replayed under W*,
// drawing actual recall ~ Bernoulli(true R) at each scheduled interval.
function syntheticLog(W, { cards, reviewsPerCard, seed }) {
  const rng = rngFactory(seed);
  const log = [];
  for (let c = 0; c < cards; c++) {
    const cardId = `card-${c}`;
    let grade0 = 3;
    log.push({ cardId, ts: '0000', grade: grade0, elapsed: 0 });
    let S = fsrs.initStability(grade0, W);
    let D = fsrs.initDifficulty(grade0, W);
    for (let i = 1; i < reviewsPerCard; i++) {
      const elapsed = fsrs.nextInterval(S, 0.9);
      const Rtrue = fsrs.retrievability(elapsed, S);
      const recalled = rng() < Rtrue;
      const grade = recalled ? 3 : 1;
      log.push({ cardId, ts: String(i).padStart(4, '0'), grade, elapsed });
      D = fsrs.nextDifficulty(D, grade, W);
      S = Math.max(0.1, grade === 1 ? fsrs.stabilityOnLapse(D, S, Rtrue, W) : fsrs.stabilityOnSuccess(D, S, Rtrue, grade, W));
    }
  }
  return log;
}

// ─── O1: log-loss aggregation + first-review-is-init ───────────────────
{
  const W = fsrs.FSRS_DEFAULT_W;
  const reviews = [{ grade: 3 }, { grade: 3, elapsed: 3 }];   // one prediction
  const S0 = fsrs.initStability(3, W);
  const expected = -Math.log(fsrs.retrievability(3, S0));
  const c = opt.cardLogLoss(W, reviews);
  check('O1', 'single-prediction loss = −ln R', Math.abs(c.loss - expected) < 1e-9, `${c.loss} vs ${expected}`);
  check('O1', 'n = reviews − 1 (first is init only)', c.n === 1);
  check('O1', 'single-review card ⇒ no prediction', opt.cardLogLoss(W, [{ grade: 3 }]).n === 0);
  // recall (good) costs less than lapse (again) at the same interval
  const lossGood = opt.cardLogLoss(W, [{ grade: 3 }, { grade: 3, elapsed: 3 }]).loss;
  const lossAgain = opt.cardLogLoss(W, [{ grade: 3 }, { grade: 1, elapsed: 3 }]).loss;
  check('O1', 'recall at short interval cheaper than lapse', lossGood < lossAgain);
}

// ─── O2: groupReviews orders + filters ─────────────────────────────────
{
  const g = opt.groupReviews([
    { cardId: 'a', ts: '0002', grade: 3, elapsed: 5 },
    { cardId: 'a', ts: '0001', grade: 3, elapsed: 2 },
    { cardId: 'b', ts: '0001', grade: 1, elapsed: 1 },
    { cardId: 'a', ts: '0003', grade: 7, elapsed: 9 },   // invalid grade → dropped
    { grade: 3 },                                        // no cardId → dropped
  ]);
  check('O2', 'groups by cardId', g.size === 2 && g.has('a') && g.has('b'));
  check('O2', 'orders within card by ts', g.get('a')[0].ts === '0001' && g.get('a')[1].ts === '0002');
  check('O2', 'drops invalid-grade + cardless rows', g.get('a').length === 2);
}

// ─── O3: optimiser reduces loss on data from known weights ─────────────
{
  // W* clearly different from defaults so the defaults genuinely mispredict.
  const Wstar = fsrs.FSRS_DEFAULT_W.slice();
  Wstar[0] *= 0.5; Wstar[1] *= 0.5; Wstar[2] *= 0.5; Wstar[3] *= 0.5;   // much shorter initial stabilities
  Wstar[8] *= 1.3; Wstar[10] *= 1.2;
  const log = syntheticLog(Wstar, { cards: 250, reviewsPerCard: 7, seed: 20260604 });

  const res = opt.optimizeWeights(log, { iterations: 30 });
  check('O3', 'optimisation ran (enough predictions)', res.optimized === true && res.predictions >= 50);
  check('O3', 'final loss ≤ initial (default) loss', res.mean <= res.initialMean + 1e-12, `${res.mean} vs ${res.initialMean}`);
  check('O3', 'strict improvement when defaults mispredict', res.mean < res.initialMean - 1e-3, `Δ=${(res.initialMean - res.mean).toFixed(4)}`);
  // moved toward the achievable W* loss (not worse than default, not absurdly below truth)
  const grouped = opt.groupReviews(log);
  const wstarMean = opt.totalLogLoss(Wstar, grouped).mean;
  check('O3', 'optimised loss not far below the true-weight loss', res.mean >= wstarMean - 0.05, `opt=${res.mean.toFixed(4)} W*=${wstarMean.toFixed(4)}`);
  check('O3', 'weights stay length-17 + finite', res.weights.length === 17 && res.weights.every(Number.isFinite));
}

// ─── O4: sparse data ⇒ no-op (returns defaults) ────────────────────────
{
  const tiny = syntheticLog(fsrs.FSRS_DEFAULT_W, { cards: 3, reviewsPerCard: 4, seed: 1 });  // ~9 predictions
  const res = opt.optimizeWeights(tiny);
  check('O4', 'sparse log ⇒ optimized=false', res.optimized === false);
  check('O4', 'sparse ⇒ weights unchanged (defaults)', res.weights.every((x, i) => x === fsrs.FSRS_DEFAULT_W[i]));
}

// ─── O5: idempotence-ish — re-optimising already-good data stays ≤ baseline ─
{
  const log = syntheticLog(fsrs.FSRS_DEFAULT_W, { cards: 200, reviewsPerCard: 6, seed: 7 });
  const res = opt.optimizeWeights(log, { iterations: 20 });
  check('O5', 'data from defaults ⇒ optimised loss ≈ baseline (≤)', res.mean <= res.initialMean + 1e-9);
}

const passed = results.filter(r => r.ok).length;
console.log(`\nTotal: ${passed}/${results.length}`);
if (passed === results.length) console.log('All checks pass. FSRS weight optimiser reduces log-loss from review history.');
process.exit(passed === results.length ? 0 : 1);
