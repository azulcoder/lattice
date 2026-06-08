#!/usr/bin/env node
// Persistent verification harness for the Market Profile (TPO) simulator
// (simulateTPO / detectDoubleDist in js/viz.js).
//
// TPO = time-at-price (letters per 30-min period), distinct from volume profile.
// Checks the exact auction primitives + the day-type response:
//   M1: structure — counts/letters length, letters[r].length == counts[r],
//       total TPOs = sum of per-bracket bin coverage
//   M2: POC = the most-TPO row (longest letter stack)
//   M3: Value Area — contiguous, contains the POC, covers ≥70% of TPOs
//   M4: Initial Balance = the first two periods; range extension ≥ 0 and beyond IB
//   M5: single prints have exactly one TPO; tails are single-print runs at extremes
//   M6: day-type response (strong drift ⇒ Trend; net move grows with |trend|);
//       detectDoubleDist on a hand-built two-distribution profile; determinism
//
// Refs: Steidlmayer & Koy (1986); Dalton, Mind Over Markets. Deterministic.
//
// Usage: node scripts/verify-tpo-sim.mjs [--quiet] [--section M3]
// Exit: 0 = all pass, 1 = any fail.

import { pathToFileURL, fileURLToPath } from 'node:url';
import path from 'node:path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const args = process.argv.slice(2);
const QUIET = args.includes('--quiet');
const sectionFilter = (() => { const i = args.indexOf('--section'); return i >= 0 ? args[i + 1] : null; })();

const vizMod = await import(pathToFileURL(path.join(ROOT, 'js/viz.js')).href);
const { simulateTPO, detectDoubleDist, COMPONENTS } = vizMod;
for (const [n, f] of [['simulateTPO', simulateTPO], ['detectDoubleDist', detectDoubleDist]]) {
  if (typeof f !== 'function') { console.error(`FAIL: ${n} not exported from js/viz.js`); process.exit(1); }
}
if (!COMPONENTS?.MarketProfileTPOSim) { console.error('FAIL: MarketProfileTPOSim not registered'); process.exit(1); }

const results = [];
function check(s, l, e, a, t) { if (sectionFilter && s !== sectionFilter) return; const ok = Math.abs(e - a) <= t; results.push({ s, l, e, a, ok }); if (!QUIET && !ok) console.log(`  [${s}] ✗ ${l}: expected ${e}, got ${a}, tol ${t}`); }
function checkBool(s, l, c, d = '') { if (sectionFilter && s !== sectionFilter) return; results.push({ s, l, ok: c, d }); if (!QUIET && !c) console.log(`  [${s}] ✗ ${l}${d ? ': ' + d : ''}`); }

// ─── M1: structure ─────────────────────────────────────────────────────
{
  const sim = simulateTPO({ trend: 0.5, vol: 0.5, nPeriods: 13, seed: 7, nRows: 40 });
  checkBool('M1', 'counts length = nRows (40)', sim.counts.length === 40 && sim.nRows === 40);
  checkBool('M1', 'letters length = nRows', sim.letters.length === 40);
  let lettersMatch = true; for (let r = 0; r < sim.nRows; r++) if (sim.letters[r].length !== sim.counts[r]) { lettersMatch = false; break; }
  checkBool('M1', 'letters[r].length == counts[r] (one letter per TPO)', lettersMatch);
  const sumCounts = sim.counts.reduce((a, b) => a + b, 0);
  checkBool('M1', 'totalTPO = Σ counts', sim.totalTPO === sumCounts);
  checkBool('M1', 'every TPO letter index in [0, nPeriods)', sim.letters.every((row) => row.every((i) => i >= 0 && i < 13)));
  checkBool('M1', 'counts all ≥ 0', sim.counts.every((c) => c >= 0));
}

// ─── M2: POC ───────────────────────────────────────────────────────────
{
  const sim = simulateTPO({ trend: 0.5, vol: 0.6, nPeriods: 13, seed: 3 });
  const maxC = Math.max(...sim.counts);
  checkBool('M2', 'POC row has the max TPO count', sim.counts[sim.pocIdx] === maxC);
  checkBool('M2', 'POC price within [lo,hi]', sim.pocPrice >= sim.lo && sim.pocPrice <= sim.hi);
}

// ─── M3: Value Area ────────────────────────────────────────────────────
{
  const sim = simulateTPO({ trend: 0.3, vol: 0.5, nPeriods: 14, seed: 11 });
  checkBool('M3', 'VA contiguous & contains POC', sim.vaLoIdx <= sim.pocIdx && sim.pocIdx <= sim.vaHiIdx);
  checkBool('M3', 'VA covers ≥ 70% of TPOs', sim.vaFrac >= 0.70 - 1e-9, `frac=${sim.vaFrac.toFixed(3)}`);
  // VA should be a subset of the full range
  checkBool('M3', 'VA within full range', sim.vaLow >= sim.lo - 1e-9 && sim.vaHigh <= sim.hi + 1e-9);
  // a tighter, balanced profile keeps VA strictly inside the extremes
  const bal = simulateTPO({ trend: 0, vol: 0.5, nPeriods: 16, seed: 5 });
  checkBool('M3', 'balanced day: VA narrower than full range', (bal.vaHiIdx - bal.vaLoIdx) < (bal.nRows - 1));
}

// ─── M4: Initial Balance + range extension ─────────────────────────────
{
  const sim = simulateTPO({ trend: 1.5, vol: 0.5, nPeriods: 13, seed: 9 });
  checkBool('M4', 'IB high ≤ day high, IB low ≥ day low', sim.ibHigh <= sim.hi + 1e-9 && sim.ibLow >= sim.lo - 1e-9);
  checkBool('M4', 'range extension up = max(0, hi − IBhigh)', Math.abs(sim.extUp - Math.max(0, sim.hi - sim.ibHigh)) < 1e-9);
  checkBool('M4', 'range extension down = max(0, IBlow − lo)', Math.abs(sim.extDown - Math.max(0, sim.ibLow - sim.lo)) < 1e-9);
  checkBool('M4', 'extensions ≥ 0', sim.extUp >= 0 && sim.extDown >= 0);
  checkBool('M4', 'IB range ≤ total range', sim.ibRange <= sim.totalRange + 1e-9);
}

// ─── M5: single prints & tails ─────────────────────────────────────────
{
  const sim = simulateTPO({ trend: 3, vol: 0.4, nPeriods: 13, seed: 2 });   // trendy ⇒ single prints likely
  checkBool('M5', 'every single print has count == 1', sim.singlePrints.every((r) => sim.counts[r] === 1));
  // buy tail = leading single-print run from the bottom
  let bt = 0; for (let r = 0; r < sim.nRows && sim.counts[r] === 1; r++) bt++;
  let st = 0; for (let r = sim.nRows - 1; r >= 0 && sim.counts[r] === 1; r--) st++;
  checkBool('M5', 'buyTail = bottom single-print run', sim.buyTail === bt);
  checkBool('M5', 'sellTail = top single-print run', sim.sellTail === st);
}

// ─── M6: day type + double-dist + determinism ──────────────────────────
{
  const trendy = simulateTPO({ trend: 8, vol: 0.35, nPeriods: 13, seed: 4 });
  checkBool('M6', 'strong drift ⇒ Trend day', trendy.dayType === 'trend', `got ${trendy.dayType}`);
  const flat = simulateTPO({ trend: 0, vol: 0.5, nPeriods: 13, seed: 4 });
  checkBool('M6', 'no drift ⇒ not a Trend day', flat.dayType !== 'trend', `got ${flat.dayType}`);
  checkBool('M6', '|net move| grows with |trend|', Math.abs(trendy.netMove) > Math.abs(flat.netMove));
  checkBool('M6', 'dayType is one of the five', ['trend', 'normal', 'normal-variation', 'neutral', 'double-distribution'].includes(trendy.dayType));
  // detectDoubleDist on a hand-built two-peak profile with a single-print valley
  checkBool('M6', 'detectDoubleDist: two peaks + valley ⇒ true', detectDoubleDist([5, 6, 5, 1, 1, 5, 6, 5]) === true);
  checkBool('M6', 'detectDoubleDist: single bell ⇒ false', detectDoubleDist([1, 3, 6, 8, 6, 3, 1]) === false);
  // determinism
  const a = simulateTPO({ trend: 1, vol: 0.5, nPeriods: 13, seed: 42 });
  const b = simulateTPO({ trend: 1, vol: 0.5, nPeriods: 13, seed: 42 });
  checkBool('M6', 'deterministic (same seed ⇒ identical counts)', a.counts.join(',') === b.counts.join(','));
  checkBool('M6', 'different seed ⇒ different profile', simulateTPO({ trend: 1, vol: 0.5, nPeriods: 13, seed: 1 }).counts.join(',') !== a.counts.join(','));
}

// ─── Summary ───────────────────────────────────────────────────────────
const total = results.length, passed = results.filter((r) => r.ok).length, failed = results.filter((r) => !r.ok);
const bySection = {};
for (const r of results) { bySection[r.s] = bySection[r.s] || { t: 0, p: 0 }; bySection[r.s].t++; if (r.ok) bySection[r.s].p++; }
if (!QUIET) {
  console.log('\n=== Market Profile (TPO) simulator verification ===');
  for (const s of Object.keys(bySection).sort()) console.log(`  ${s}: ${bySection[s].p}/${bySection[s].t}${bySection[s].p === bySection[s].t ? ' ✓' : ' ✗'}`);
  console.log(`\nTotal: ${passed}/${total}`);
}
if (failed.length === 0) {
  if (!QUIET) console.log('All checks pass. TPO sim matches the Market Profile auction primitives + day-type logic.');
  process.exit(0);
} else {
  console.log(`\n${failed.length} failures:`);
  for (const f of failed.slice(0, 25)) console.log(`  [${f.s}] ${f.l}${f.d ? ': ' + f.d : (f.e !== undefined ? `: expected ${f.e}, got ${f.a}` : '')}`);
  process.exit(1);
}
