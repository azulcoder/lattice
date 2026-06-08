// FSRS-4.5 scheduler (Free Spaced Repetition Scheduler) — an optional, more
// modern alternative to SM-2 (js/sm2.js). Selected per-user via
// settings.review.scheduler ('sm2' | 'fsrs'); SM-2 remains the default and is
// never removed, so toggling is reversible and existing review state is safe.
//
// FSRS models each card with two latent variables instead of SM-2's
// EF/interval/repetitions:
//   • stability  S — days for retrievability to fall from 100% to 90%
//   • difficulty D — intrinsic hardness, clamped to [1, 10]
// The next interval is chosen so the card is reviewed when its predicted
// retrievability hits a target (requestRetention, default 0.90).
//
// This is a faithful FSRS-4.5 implementation (17 weights) with the published
// default parameters. We verify the *defining mathematical properties* in
// scripts/verify-fsrs.mjs (R(S,S)=0.9, interval≈S at r=0.9, monotonicities,
// lapse behaviour) rather than hard-coding one library's exact trained
// weights — the algorithm is correct by construction, not by coincidence.

import { addDays } from './util.js';

// Published FSRS-4.5 default parameters (w[0..16]).
export const FSRS_DEFAULT_W = [
  0.4197, 1.1869, 3.0412, 15.2441, 7.1434, 0.6477, 1.0007, 0.0674,
  1.6597, 0.1712, 1.1178, 2.0225, 0.0904, 0.3025, 2.1214, 0.2498, 2.9466,
];

export const DECAY = -0.5;
// FACTOR chosen so that R(t=S, S) = 0.9 exactly: FACTOR = 0.9^(1/DECAY) − 1 = 19/81.
export const FACTOR = Math.pow(0.9, 1 / DECAY) - 1;
export const DEFAULT_RETENTION = 0.9;

const clamp = (x, lo, hi) => Math.min(hi, Math.max(lo, x));

// Retrievability after `t` days at stability `S`.
export function retrievability(t, S) {
  if (S <= 0) return 0;
  return Math.pow(1 + FACTOR * (t / S), DECAY);
}

// Interval (days) that drives retrievability down to the requested retention.
export function nextInterval(S, requestRetention = DEFAULT_RETENTION) {
  const ivl = (S / FACTOR) * (Math.pow(requestRetention, 1 / DECAY) - 1);
  return Math.max(1, Math.round(ivl));
}

// grade ∈ {1:Again, 2:Hard, 3:Good, 4:Easy}
export function initStability(grade, w = FSRS_DEFAULT_W) {
  return Math.max(w[grade - 1], 0.1);
}

export function initDifficulty(grade, w = FSRS_DEFAULT_W) {
  return clamp(w[4] - Math.exp(w[5] * (grade - 1)) + 1, 1, 10);
}

export function nextDifficulty(D, grade, w = FSRS_DEFAULT_W) {
  const delta = D - w[6] * (grade - 3);                 // Again raises D, Easy lowers it
  const meanReverted = w[7] * initDifficulty(4, w) + (1 - w[7]) * delta;  // revert toward the Easy anchor
  return clamp(meanReverted, 1, 10);
}

export function stabilityOnSuccess(D, S, R, grade, w = FSRS_DEFAULT_W) {
  const hardPenalty = grade === 2 ? w[15] : 1;
  const easyBonus = grade === 4 ? w[16] : 1;
  const inc = Math.exp(w[8]) * (11 - D) * Math.pow(S, -w[9]) *
    (Math.exp(w[10] * (1 - R)) - 1) * hardPenalty * easyBonus;
  return S * (1 + inc);
}

export function stabilityOnLapse(D, S, R, w = FSRS_DEFAULT_W) {
  return w[11] * Math.pow(D, -w[12]) * (Math.pow(S + 1, w[13]) - 1) * Math.exp(w[14] * (1 - R));
}

// Map the platform's 0–5 SM-2 quality buttons onto FSRS grades 1–4.
//   0,1,2 → Again(1) · 3 → Hard(2) · 4 → Good(3) · 5 → Easy(4)
export function qualityToGrade(quality) {
  if (quality <= 2) return 1;
  if (quality === 3) return 2;
  if (quality === 4) return 3;
  return 4;
}

function daysBetween(fromISO, toISO) {
  if (!fromISO) return 0;
  const a = Date.parse(fromISO.slice(0, 10) + 'T00:00:00Z');
  const b = Date.parse(toISO.slice(0, 10) + 'T00:00:00Z');
  if (Number.isNaN(a) || Number.isNaN(b)) return 0;
  return Math.max(0, Math.round((b - a) / 86400000));
}

// Schedule a card by its review quality. Mirrors sm2.schedule()'s contract:
// returns a NEW card object, preserving every SM-2 field (ef/interval/
// repetitions/lapses) so the engine toggle is reversible, and adding/updating
// the FSRS state (stability/difficulty). `repetitions`/`lapses` are kept in
// sync so cardState classification keeps working.
export function fsrsSchedule(card, quality, today, requestRetention = DEFAULT_RETENTION, w = FSRS_DEFAULT_W) {
  if (quality < 0 || quality > 5 || !Number.isInteger(quality)) {
    throw new Error(`Invalid quality: ${quality}. Must be integer 0-5.`);
  }
  const grade = qualityToGrade(quality);
  const firstFsrsReview = card.stability == null || !card.lastReviewed;

  let S, D;
  if (firstFsrsReview) {
    S = initStability(grade, w);
    D = initDifficulty(grade, w);
  } else {
    const t = daysBetween(card.lastReviewed, today);
    const R = retrievability(t, card.stability);
    D = nextDifficulty(card.difficulty != null ? card.difficulty : initDifficulty(3, w), grade, w);
    S = grade === 1
      ? stabilityOnLapse(D, card.stability, R, w)
      : stabilityOnSuccess(D, card.stability, R, grade, w);
  }
  S = Math.max(0.1, S);

  const interval = nextInterval(S, requestRetention);
  const lapsed = grade === 1;
  return {
    ...card,
    stability: S,
    difficulty: D,
    interval,
    nextReview: addDays(today, interval),
    lastQuality: quality,
    lastReviewed: today,
    repetitions: lapsed ? 0 : (card.repetitions || 0) + 1,
    lapses: (card.lapses || 0) + (lapsed ? 1 : 0),
  };
}

// A card is "mastered" once its scheduled interval reaches three weeks —
// engine-agnostic and comparable to the SM-2 notion (reps≥3 → multi-week).
export function fsrsIsMastered(card) {
  return (card.interval || 0) >= 21;
}

export function fsrsCardState(card, today) {
  if (card.nextReview === null) return 'unscheduled';
  if (card.stability == null || !card.lastReviewed) {
    return (card.lapses || 0) > 0 ? 'learning' : 'new';
  }
  if (fsrsIsMastered(card)) return 'mastered';
  if (card.nextReview <= today) return 'due';
  return 'learning';
}

// Average current retrievability across a set of cards (the FSRS analogue of
// SM-2's EF average — used by the review header / dashboard).
export function retentionAverage(cards, today) {
  const reviewed = cards.filter((c) => c.stability != null && c.lastReviewed);
  if (reviewed.length === 0) return 1;
  const sum = reviewed.reduce((acc, c) => acc + retrievability(daysBetween(c.lastReviewed, today), c.stability), 0);
  return sum / reviewed.length;
}
