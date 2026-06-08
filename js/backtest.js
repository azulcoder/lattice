// Scheduler backtest (Phase S20): on your *own* review history, which engine
// would have predicted your recall better — FSRS or SM-2?
//
// For every card we replay its ordered review sequence and, at each review
// (after the first, which only initialises state), form a predicted recall
// probability R and compare it to what actually happened (grade ≥ 2 = recalled,
// Again = lapse). We then score both engines with log-loss (proper scoring
// rule; lower = better-calibrated), Brier score, and 0.5-threshold accuracy.
//
//   • FSRS uses its NATIVE retrievability R(t,S) = (1 + FACTOR·t/S)^DECAY,
//     replaying stability/difficulty exactly as fsrs-optimize does (and with
//     the user's trained weights when present).
//   • SM-2 has no native retention curve, so we use the standard exponential
//     proxy R(t) = requestRetention^(t / I): the scheduler targets
//     `requestRetention` at its scheduled interval I, and forgetting decays
//     from there. This is a documented proxy — the backtest is directional,
//     not a claim that SM-2 "believes" these probabilities.
//
// Pure (no storage/DOM) so it is fully unit-testable.

import {
  FSRS_DEFAULT_W, initStability, initDifficulty, nextDifficulty,
  stabilityOnSuccess, stabilityOnLapse, retrievability,
} from './fsrs.js';
import { groupReviews } from './fsrs-optimize.js';
import * as sm2 from './sm2.js';

const EPS = 1e-6;
const clamp01 = (x) => Math.min(1 - EPS, Math.max(EPS, x));

// Inverse of fsrs.qualityToGrade (quality≤2→1, 3→2, 4→3, ≥5→4): pick a
// representative quality per grade that preserves the SM-2 lapse boundary
// (quality < 3 ⇒ lapse). grade 1 → 2 (lapse), 2 → 3, 3 → 4, 4 → 5.
export function gradeToQuality(grade) {
  return grade === 1 ? 2 : grade === 2 ? 3 : grade === 3 ? 4 : 5;
}

// FSRS predicted-recall sequence for one card's ordered reviews.
function fsrsPredictions(reviews, w) {
  const preds = [];
  if (reviews.length < 2) return preds;
  let S = initStability(reviews[0].grade, w);
  let D = initDifficulty(reviews[0].grade, w);
  for (let i = 1; i < reviews.length; i++) {
    const grade = reviews[i].grade;
    const elapsed = Math.max(0, reviews[i].elapsed || 0);
    const R = clamp01(retrievability(elapsed, S));
    preds.push({ R, recalled: grade >= 2 ? 1 : 0 });
    D = nextDifficulty(D, grade, w);
    S = Math.max(0.1, grade === 1 ? stabilityOnLapse(D, S, R, w) : stabilityOnSuccess(D, S, R, grade, w));
  }
  return preds;
}

// SM-2 predicted-recall proxy for one card's ordered reviews.
function sm2Predictions(reviews, requestRetention) {
  const preds = [];
  if (reviews.length < 2) return preds;
  let card = sm2.schedule({ ef: 2.5, interval: 0, repetitions: 0, lapses: 0 }, gradeToQuality(reviews[0].grade), reviews[0].ts);
  for (let i = 1; i < reviews.length; i++) {
    const grade = reviews[i].grade;
    const elapsed = Math.max(0, reviews[i].elapsed || 0);
    const I = Math.max(1, card.interval || 1);
    const R = clamp01(Math.pow(requestRetention, elapsed / I));
    preds.push({ R, recalled: grade >= 2 ? 1 : 0 });
    card = sm2.schedule(card, gradeToQuality(grade), reviews[i].ts);
  }
  return preds;
}

// Score a set of {R, recalled} predictions: mean log-loss, mean Brier, and
// accuracy at the 0.5 threshold.
export function scorePredictions(preds) {
  const n = preds.length;
  if (!n) return { n: 0, logLoss: 0, brier: 0, accuracy: 0 };
  let logloss = 0, brier = 0, correct = 0;
  for (const p of preds) {
    logloss += -(p.recalled * Math.log(p.R) + (1 - p.recalled) * Math.log(1 - p.R));
    brier += (p.R - p.recalled) * (p.R - p.recalled);
    if ((p.R >= 0.5 ? 1 : 0) === p.recalled) correct++;
  }
  return { n, logLoss: logloss / n, brier: brier / n, accuracy: correct / n };
}

// Backtest both engines over a (possibly cross-domain) review log.
//   opts: { weights?: number[17], requestRetention?: number, minPredictions?: number }
// Returns per-engine scores + a winner (by log-loss) once there is enough data.
export function backtestEngines(log, opts = {}) {
  const w = Array.isArray(opts.weights) && opts.weights.length === 17 ? opts.weights : FSRS_DEFAULT_W;
  const requestRetention = opts.requestRetention || 0.9;
  const minPredictions = opts.minPredictions || 20;
  const byCard = groupReviews(log || []);
  const fsrsP = [], sm2P = [];
  for (const reviews of byCard.values()) {
    fsrsP.push(...fsrsPredictions(reviews, w));
    sm2P.push(...sm2Predictions(reviews, requestRetention));
  }
  const fsrs = scorePredictions(fsrsP);
  const sm = scorePredictions(sm2P);
  const n = fsrs.n;                          // equal to sm.n by construction
  const enough = n >= minPredictions;
  let winner = null, margin = 0;
  if (enough) {
    margin = Math.abs(fsrs.logLoss - sm.logLoss);
    winner = margin < 1e-9 ? 'tie' : (fsrs.logLoss < sm.logLoss ? 'fsrs' : 'sm2');
  }
  return {
    n, enough, minPredictions, cards: byCard.size,
    fsrs, sm2: sm, winner, margin,
    requestRetention,
    usedTrainedWeights: Array.isArray(opts.weights) && opts.weights.length === 17 && opts.weights !== FSRS_DEFAULT_W,
  };
}
