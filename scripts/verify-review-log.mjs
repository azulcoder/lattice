#!/usr/bin/env node
// Harness for the review-log capture + CSV export (js/storage.js:
// appendReview, reviewLogToCSV). These back the FSRS optimiser's data and the
// Settings → Export review log (CSV) action.
//
// Usage:  node scripts/verify-review-log.mjs [--quiet]
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

const { appendReview, reviewLogToCSV } = await import(pathToFileURL(path.join(ROOT, 'js/storage.js')).href);

const results = [];
function check(section, label, cond, detail = '') {
  results.push({ section, ok: !!cond });
  if (!QUIET && !cond) console.log(`  [${section}] ✗ ${label}${detail ? ': ' + detail : ''}`);
}

// ─── L1: appendReview (append, order, immutability) ────────────────────
{
  let st = { reviewLog: [] };
  st = appendReview(st, { cardId: 'a', ts: '2026-06-01', grade: 3, elapsed: 0 });
  st = appendReview(st, { cardId: 'b', ts: '2026-06-02', grade: 1, elapsed: 2 });
  check('L1', 'appends in order', st.reviewLog.length === 2 && st.reviewLog[0].cardId === 'a' && st.reviewLog[1].cardId === 'b');
  const before = { reviewLog: [{ cardId: 'x' }] };
  const after = appendReview(before, { cardId: 'y' });
  check('L1', 'immutable (returns new array)', before.reviewLog.length === 1 && after.reviewLog.length === 2);
  check('L1', 'tolerates missing reviewLog', appendReview({}, { cardId: 'z' }).reviewLog.length === 1);
}

// ─── L2: cap (keeps the most recent) ───────────────────────────────────
{
  let st = { reviewLog: [] };
  for (let i = 0; i < 6; i++) st = appendReview(st, { cardId: `c${i}` }, 3);
  check('L2', 'caps at the limit', st.reviewLog.length === 3);
  check('L2', 'keeps the most recent entries', st.reviewLog.map((r) => r.cardId).join(',') === 'c3,c4,c5');
}

// ─── L3: reviewLogToCSV (header, rows, order, empty) ───────────────────
{
  check('L3', 'empty log ⇒ header only', reviewLogToCSV([]) === 'cardId,date,grade,elapsed');
  check('L3', 'non-array ⇒ header only', reviewLogToCSV(null) === 'cardId,date,grade,elapsed');
  const csv = reviewLogToCSV([{ cardId: 'kyle-1985-c003', ts: '2026-06-04', grade: 3, elapsed: 5 }]);
  const lines = csv.split('\n');
  check('L3', 'header + one row', lines.length === 2 && lines[0] === 'cardId,date,grade,elapsed');
  check('L3', 'field order cardId,date,grade,elapsed', lines[1] === 'kyle-1985-c003,2026-06-04,3,5');
}

// ─── L4: CSV escaping (RFC-4180) ───────────────────────────────────────
{
  const csv = reviewLogToCSV([
    { cardId: 'has,comma', ts: '2026-06-04', grade: 3, elapsed: 1 },
    { cardId: 'has"quote', ts: '2026-06-05', grade: 4, elapsed: 2 },
  ]);
  const lines = csv.split('\n');
  check('L4', 'comma field is quoted', lines[1].startsWith('"has,comma",'));
  check('L4', 'quote is doubled + wrapped', lines[2].startsWith('"has""quote",'));
  check('L4', 'plain fields unquoted', !lines[1].includes('"2026-06-04"'));
}

const passed = results.filter(r => r.ok).length;
console.log(`\nTotal: ${passed}/${results.length}`);
if (passed === results.length) console.log('All checks pass. Review-log capture + CSV export verified.');
process.exit(passed === results.length ? 0 : 1);
