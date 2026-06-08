#!/usr/bin/env node
// Harness for the FSRS-4.5 scheduler (js/fsrs.js) + the v3→v4 storage
// migration that ships it (js/storage.js). We assert FSRS's DEFINING
// mathematical properties (not one library's exact trained weights) plus the
// scheduler-integration contract, and — most importantly — that the schema
// migration is NON-DESTRUCTIVE (every card's SM-2 history survives intact).
//
// Usage:  node scripts/verify-fsrs.mjs [--quiet]
// Exit code: 0 = all pass, 1 = any fail.

import { pathToFileURL, fileURLToPath } from 'node:url';
import path from 'node:path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const QUIET = process.argv.includes('--quiet');

// localStorage shim so importing storage.js (and exercising migrateV3ToV4) is
// safe under Node — the migration path itself never touches it.
if (typeof globalThis.localStorage === 'undefined') {
  const m = new Map();
  globalThis.localStorage = {
    getItem: (k) => (m.has(k) ? m.get(k) : null),
    setItem: (k, v) => m.set(k, String(v)),
    removeItem: (k) => m.delete(k),
  };
}

const fsrs = await import(pathToFileURL(path.join(ROOT, 'js/fsrs.js')).href);
const { addDays } = await import(pathToFileURL(path.join(ROOT, 'js/util.js')).href);
const { migrateV3ToV4 } = await import(pathToFileURL(path.join(ROOT, 'js/storage.js')).href);

const results = [];
function check(section, label, cond, detail = '') {
  results.push({ section, ok: !!cond });
  if (!QUIET && !cond) console.log(`  [${section}] ✗ ${label}${detail ? ': ' + detail : ''}`);
}
const approx = (a, b, eps = 1e-9) => Math.abs(a - b) <= eps;

// ─── F1: retrievability + interval defining properties ─────────────────
for (const S of [1, 3, 10, 35, 100]) {
  check('F1', `R(t=S, S) = 0.9 (S=${S})`, approx(fsrs.retrievability(S, S), 0.9, 1e-9), `${fsrs.retrievability(S, S)}`);
  check('F1', `R(0,S) = 1 (S=${S})`, approx(fsrs.retrievability(0, S), 1, 1e-12));
  check('F1', `nextInterval(S, 0.9) ≈ S (S=${S})`, fsrs.nextInterval(S, 0.9) === Math.max(1, Math.round(S)));
}
check('F1', 'R decreasing in t', fsrs.retrievability(20, 10) < fsrs.retrievability(5, 10));
check('F1', 'higher retention ⇒ shorter interval', fsrs.nextInterval(50, 0.95) < fsrs.nextInterval(50, 0.9) && fsrs.nextInterval(50, 0.9) < fsrs.nextInterval(50, 0.8));
check('F1', 'FACTOR = 19/81', approx(fsrs.FACTOR, 19 / 81, 1e-9));

// ─── F2: initial stability / difficulty ────────────────────────────────
for (const g of [1, 2, 3, 4]) {
  check('F2', `initStability(${g}) = w[${g - 1}]`, approx(fsrs.initStability(g), fsrs.FSRS_DEFAULT_W[g - 1]));
  const D = fsrs.initDifficulty(g);
  check('F2', `initDifficulty(${g}) in [1,10]`, D >= 1 && D <= 10);
}
check('F2', 'init stability ordered Again<Hard<Good<Easy', fsrs.initStability(1) < fsrs.initStability(2) && fsrs.initStability(2) < fsrs.initStability(3) && fsrs.initStability(3) < fsrs.initStability(4));
check('F2', 'init difficulty: Again harder than Easy', fsrs.initDifficulty(1) > fsrs.initDifficulty(4));

// ─── F3: difficulty update (mean-reverting, clamped) ───────────────────
{
  const D = 5;
  check('F3', 'Again raises difficulty', fsrs.nextDifficulty(D, 1) > D);
  check('F3', 'Easy lowers difficulty', fsrs.nextDifficulty(D, 4) < D);
  check('F3', 'difficulty stays in [1,10]', [1, 2, 3, 4].every(g => { const d = fsrs.nextDifficulty(9.8, g); return d >= 1 && d <= 10; }));
  // repeated Again drives D up toward the ceiling
  let d = 5; for (let i = 0; i < 20; i++) d = fsrs.nextDifficulty(d, 1);
  check('F3', 'repeated Again → D near ceiling', d > 9);
}

// ─── F4: stability update (success grows S; grade-ordered; lapse shrinks) ─
{
  const D = 5, S = 10, R = 0.9;
  const sGood = fsrs.stabilityOnSuccess(D, S, R, 3);
  const sHard = fsrs.stabilityOnSuccess(D, S, R, 2);
  const sEasy = fsrs.stabilityOnSuccess(D, S, R, 4);
  check('F4', 'success grows stability', sGood > S);
  check('F4', 'grade-ordered Hard<Good<Easy', sHard < sGood && sGood < sEasy);
  // lower retrievability at review ⇒ bigger stability gain (spacing effect)
  check('F4', 'lower R ⇒ larger stability increase', fsrs.stabilityOnSuccess(D, S, 0.7, 3) > fsrs.stabilityOnSuccess(D, S, 0.95, 3));
  const sLapse = fsrs.stabilityOnLapse(D, S, R);
  check('F4', 'lapse reduces stability below pre-lapse', sLapse < S && sLapse > 0);
}

// ─── F5: quality (0–5) → FSRS grade (1–4) mapping ──────────────────────
check('F5', '0,1,2 → Again(1)', fsrs.qualityToGrade(0) === 1 && fsrs.qualityToGrade(1) === 1 && fsrs.qualityToGrade(2) === 1);
check('F5', '3 → Hard(2)', fsrs.qualityToGrade(3) === 2);
check('F5', '4 → Good(3)', fsrs.qualityToGrade(4) === 3);
check('F5', '5 → Easy(4)', fsrs.qualityToGrade(5) === 4);

// ─── F6: fsrsSchedule integration contract ─────────────────────────────
{
  const T0 = '2026-06-04';
  const fresh = { id: 'c1', ef: 2.5, interval: 0, repetitions: 0, lapses: 0, stability: null, difficulty: null, nextReview: T0, lastReviewed: null, lastQuality: null };

  const good1 = fsrs.fsrsSchedule(fresh, 4, T0);       // first review, Good
  check('F6', 'first review inits stability', good1.stability != null && good1.stability > 0);
  check('F6', 'first review sets difficulty in [1,10]', good1.difficulty >= 1 && good1.difficulty <= 10);
  check('F6', 'interval ≥ 1 and nextReview advanced', good1.interval >= 1 && good1.nextReview > T0);
  check('F6', 'success increments repetitions', good1.repetitions === 1);
  check('F6', 'preserves ef untouched (reversible to SM-2)', good1.ef === 2.5);

  const T1 = addDays(T0, good1.interval);
  const good2 = fsrs.fsrsSchedule(good1, 4, T1);       // second success grows interval
  check('F6', 'second success grows stability + interval', good2.stability > good1.stability && good2.interval > good1.interval);
  check('F6', 'reps increments to 2', good2.repetitions === 2);

  const lapse = fsrs.fsrsSchedule(good2, 1, addDays(T1, good2.interval));  // Again
  check('F6', 'lapse resets repetitions to 0', lapse.repetitions === 0);
  check('F6', 'lapse increments lapses', lapse.lapses === 1);
  check('F6', 'lapse shrinks stability', lapse.stability < good2.stability);
  check('F6', 'invalid quality throws', (() => { try { fsrs.fsrsSchedule(fresh, 7, T0); return false; } catch { return true; } })());
}

// ─── F7: card-state classification + mastery ───────────────────────────
{
  const today = '2026-06-04';
  check('F7', 'null nextReview ⇒ unscheduled', fsrs.fsrsCardState({ nextReview: null }, today) === 'unscheduled');
  check('F7', 'never-reviewed ⇒ new', fsrs.fsrsCardState({ nextReview: today, stability: null, lastReviewed: null, lapses: 0 }, today) === 'new');
  check('F7', 'interval ≥ 21 ⇒ mastered', fsrs.fsrsIsMastered({ interval: 30 }) && !fsrs.fsrsIsMastered({ interval: 10 }));
  check('F7', 'reviewed, long interval, future due ⇒ mastered', fsrs.fsrsCardState({ nextReview: addDays(today, 30), stability: 40, lastReviewed: today, interval: 40 }, today) === 'mastered');
  check('F7', 'reviewed, short interval, due now ⇒ due', fsrs.fsrsCardState({ nextReview: today, stability: 2, lastReviewed: '2026-06-02', interval: 2 }, today) === 'due');
}

// ─── F8: retention average ─────────────────────────────────────────────
{
  const today = '2026-06-14';
  const cards = [
    { stability: 10, lastReviewed: today },          // t=0 → R=1
    { stability: 10, lastReviewed: '2026-06-04' },   // t=10=S → R=0.9
    { stability: null, lastReviewed: null },         // unreviewed → ignored
  ];
  const avg = fsrs.retentionAverage(cards, today);
  check('F8', 'retentionAverage ignores unreviewed + averages R', approx(avg, (1 + 0.9) / 2, 1e-6), `${avg}`);
  check('F8', 'empty set ⇒ 1', fsrs.retentionAverage([], today) === 1);
}

// ─── F9: NON-DESTRUCTIVE v3 → v4 migration (the safety-critical test) ───
{
  const card = {
    id: 'hasbrouck-2007-c001', itemId: 'hasbrouck-2007', front: 'Q', back: 'A',
    ef: 2.36, interval: 18, repetitions: 4, lapses: 2, nextReview: '2026-07-01',
    lastQuality: 4, lastReviewed: '2026-06-13', createdAt: '2026-05-01T00:00:00.000Z',
  };
  const v3 = {
    schemaVersion: 3,
    activeDomain: 'microstructure',
    domains: {
      microstructure: { cards: { 'hasbrouck-2007-c001': card }, seededAt: '2026-05-01' },
    },
    settings: { ai: { enabled: true, apiKey: 'sk-secret' }, appearance: { theme: 'dark' } },
  };
  const v4 = migrateV3ToV4(v3);
  const mc = v4.domains.microstructure.cards['hasbrouck-2007-c001'];

  check('F9', 'schemaVersion bumped to 4', v4.schemaVersion === 4);
  check('F9', 'card object preserved byte-for-byte', JSON.stringify(mc) === JSON.stringify(card));
  check('F9', 'SM-2 history intact (ef/int/reps/lapses/nextReview)', mc.ef === 2.36 && mc.interval === 18 && mc.repetitions === 4 && mc.lapses === 2 && mc.nextReview === '2026-07-01');
  check('F9', 'seededAt preserved', v4.domains.microstructure.seededAt === '2026-05-01');
  check('F9', 'review settings backfilled (default sm2)', v4.settings.review && v4.settings.review.scheduler === 'sm2');
  check('F9', 'existing settings preserved (apiKey, theme)', v4.settings.ai.apiKey === 'sk-secret' && v4.settings.appearance.theme === 'dark');
  check('F9', 'other domains scaffolded (geothermal)', !!v4.domains.geothermal && typeof v4.domains.geothermal.cards === 'object');
  // idempotent on a v4 already-migrated state's cards (re-running keeps cards)
  const v4again = migrateV3ToV4({ ...v3, schemaVersion: 3 });
  check('F9', 'migration deterministic for cards', JSON.stringify(v4again.domains.microstructure.cards) === JSON.stringify(v4.domains.microstructure.cards));
}

const passed = results.filter(r => r.ok).length;
console.log(`\nTotal: ${passed}/${results.length}`);
if (passed === results.length) console.log('All checks pass. FSRS-4.5 scheduler + non-destructive v3→v4 migration verified.');
process.exit(passed === results.length ? 0 : 1);
