// Scheduler facade — routes scheduling + card classification to the engine
// selected in settings.review.scheduler ('sm2' | 'fsrs'). SM-2 is the default
// and is never removed; FSRS is opt-in and reversible (both engines keep the
// SM-2 fields on each card, so toggling back and forth never loses state).

import * as sm2 from './sm2.js';
import * as fsrs from './fsrs.js';

export const DEFAULT_ENGINE = 'sm2';

// Read the active engine from a settings object, defensively.
export function engineOf(settings) {
  return settings && settings.review && settings.review.scheduler === 'fsrs' ? 'fsrs' : 'sm2';
}

export function schedule(card, quality, today, engine = DEFAULT_ENGINE, requestRetention, weights) {
  return engine === 'fsrs'
    ? fsrs.fsrsSchedule(card, quality, today, requestRetention ?? fsrs.DEFAULT_RETENTION, weights || fsrs.FSRS_DEFAULT_W)
    : sm2.schedule(card, quality, today);
}

// Active FSRS weights from settings (trained weights if present, else defaults).
export function fsrsWeightsOf(settings) {
  const w = settings && settings.review && settings.review.fsrsWeights;
  return Array.isArray(w) && w.length === 17 ? w : fsrs.FSRS_DEFAULT_W;
}

export function cardState(card, today, engine = DEFAULT_ENGINE) {
  return engine === 'fsrs' ? fsrs.fsrsCardState(card, today) : sm2.cardState(card, today);
}

export function isMastered(card, engine = DEFAULT_ENGINE) {
  return engine === 'fsrs' ? fsrs.fsrsIsMastered(card) : sm2.isMastered(card);
}
