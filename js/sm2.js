import { addDays } from './util.js';

export const EF_DEFAULT = 2.5;
export const EF_MIN = 1.3;

export function schedule(card, quality, today) {
  if (quality < 0 || quality > 5 || !Number.isInteger(quality)) {
    throw new Error(`Invalid quality: ${quality}. Must be integer 0-5.`);
  }

  const next = {
    ...card,
    lastQuality: quality,
    lastReviewed: today,
  };

  if (quality < 3) {
    next.repetitions = 0;
    next.interval = 1;
    next.lapses = (card.lapses || 0) + 1;
    next.nextReview = addDays(today, 1);
    return next;
  }

  const delta = 0.1 - (5 - quality) * (0.08 + (5 - quality) * 0.02);
  next.ef = Math.max(EF_MIN, (card.ef || EF_DEFAULT) + delta);

  const reps = (card.repetitions || 0) + 1;
  let interval;
  if (reps === 1) interval = 1;
  else if (reps === 2) interval = 6;
  else interval = Math.round((card.interval || 1) * next.ef);

  next.repetitions = reps;
  next.interval = interval;
  next.nextReview = addDays(today, interval);
  return next;
}

export function isMastered(card) {
  return (card.repetitions || 0) >= 3 && (card.ef || EF_DEFAULT) >= 2.0;
}

export function cardState(card, today) {
  if (card.nextReview === null) return 'unscheduled';
  if (!card.repetitions || card.repetitions === 0) {
    if (card.lapses > 0) return 'learning';
    return 'new';
  }
  if (isMastered(card)) return 'mastered';
  if (card.nextReview <= today) return 'due';
  return 'learning';
}

export function efAverage(cards) {
  if (cards.length === 0) return EF_DEFAULT;
  const sum = cards.reduce((acc, c) => acc + (c.ef || EF_DEFAULT), 0);
  return sum / cards.length;
}
