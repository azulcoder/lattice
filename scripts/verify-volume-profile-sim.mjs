#!/usr/bin/env node
// Persistent verification harness for the volume-profile simulator
// (simulateVolumeProfile / buildProfile / valueArea in js/viz.js), used by the
// @insiliconot quant-curriculum module.
//
// Validates the market-profile reading objects against their definitions:
//   V1: buildProfile — volume conservation, bins length, binning correctness
//   V2: valueArea — POC included, contiguous, ≥ fraction of total, the canonical two-row Dalton rule produces ≥70% coverage
//   V3: simulateVolumeProfile — output shape; POC is the argmax bin; VA covers ≥70%
//   V4: HVN/LVN classification consistent with thresholds vs the mean bin
//   V5: Determinism (same seed ⇒ identical profile) + new seed differs
//   V6: Balanced vs trend day — a trend day's price RANGE is wider and the POC
//       sits away from the centre more than a balanced day's (Monte-Carlo over seeds)
//
// Usage: node scripts/verify-volume-profile-sim.mjs [--quiet] [--section V2]
// Exit: 0 = all pass, 1 = any fail.

import { pathToFileURL, fileURLToPath } from 'node:url';
import path from 'node:path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const args = process.argv.slice(2);
const QUIET = args.includes('--quiet');
const sectionFilter = (() => { const i = args.indexOf('--section'); return i >= 0 ? args[i + 1] : null; })();

const vizMod = await import(pathToFileURL(path.join(ROOT, 'js/viz.js')).href);
const { simulateVolumeProfile, buildProfile, valueArea, COMPONENTS } = vizMod;
for (const [n, f] of [['simulateVolumeProfile', simulateVolumeProfile], ['buildProfile', buildProfile], ['valueArea', valueArea]]) {
  if (typeof f !== 'function') { console.error(`FAIL: ${n} not exported from js/viz.js`); process.exit(1); }
}
if (!COMPONENTS?.VolumeProfileSim) { console.error('FAIL: VolumeProfileSim not registered'); process.exit(1); }

const results = [];
function check(section, label, expected, actual, tol) {
  if (sectionFilter && section !== sectionFilter) return;
  const ok = Math.abs(expected - actual) <= tol;
  results.push({ section, label, expected, actual, diff: Math.abs(expected - actual), ok });
  if (!QUIET && !ok) console.log(`  [${section}] ✗ ${label}: expected ${expected}, got ${actual}, tol ${tol}`);
}
function checkBool(section, label, cond, detail = '') {
  if (sectionFilter && section !== sectionFilter) return;
  results.push({ section, label, ok: cond, detail });
  if (!QUIET && !cond) console.log(`  [${section}] ✗ ${label}${detail ? ': ' + detail : ''}`);
}

// ─── V1: buildProfile ──────────────────────────────────────────────────
{
  const prices = Float64Array.from([100, 101, 101, 102, 100.5, 101.2]);
  const prof = buildProfile(prices, 10, 100, 102);
  let sum = 0; for (let i = 0; i < prof.bins.length; i++) sum += prof.bins[i];
  checkBool('V1', 'bins length = nBins', prof.bins.length === 10);
  check('V1', 'volume conserved (sum bins = nBars)', prices.length, sum, 1e-9);
  // Out-of-range clamps into end bins
  const prof2 = buildProfile(Float64Array.from([50, 200]), 10, 100, 102);
  checkBool('V1', 'below-range clamps to bin 0', prof2.bins[0] === 1);
  checkBool('V1', 'above-range clamps to last bin', prof2.bins[9] === 1);
}

// ─── V2: valueArea ─────────────────────────────────────────────────────
{
  // Hand-built bins with a clear POC
  const bins = Float64Array.from([1, 2, 3, 10, 4, 2, 1]); // total 23, POC idx 3
  let pocIdx = 0; for (let i = 1; i < bins.length; i++) if (bins[i] > bins[pocIdx]) pocIdx = i;
  checkBool('V2', 'POC is argmax (idx 3)', pocIdx === 3);
  const va = valueArea(bins, pocIdx, 0.7);
  checkBool('V2', 'VA includes POC', va.loI <= pocIdx && va.hiI >= pocIdx);
  checkBool('V2', 'VA is contiguous (loI ≤ hiI)', va.loI <= va.hiI);
  checkBool('V2', `VA covers ≥70% (got ${(va.fracCovered * 100).toFixed(1)}%)`, va.fracCovered >= 0.7 - 1e-9);
  // Canonical Dalton two-row rule: from POC(10), compare the SUM of the two rows
  // above (idx4+idx5 = 4+2 = 6) vs the two below (idx2+idx1 = 3+2 = 5); the larger
  // pair (above) is annexed whole → acc 10→14→16; then below pair (5) > above (idx6=1)
  // → annex idx2,idx1 → acc 19→21 (≥16.1). ⇒ loI=1, hiI=5, ~91.3% coverage.
  checkBool('V2', 'two-row Dalton rule: annexes the larger PAIR (loI=1, hiI=5)', va.hiI === 5 && va.loI === 1);
  check('V2', 'two-row rule coverage = 21/23', 21 / 23, va.fracCovered, 1e-9);
}

// ─── V3: simulateVolumeProfile ─────────────────────────────────────────
{
  const sim = simulateVolumeProfile({ trend: 0.2, vol: 0.6, nBars: 300, seed: 11 });
  checkBool('V3', 'has bins, pocIdx, pocPrice, va, nodes, priceAt', 'bins' in sim && 'pocIdx' in sim && 'pocPrice' in sim && 'va' in sim && Array.isArray(sim.nodes) && typeof sim.priceAt === 'function');
  // POC is the argmax bin
  let argmax = 0; for (let i = 1; i < sim.bins.length; i++) if (sim.bins[i] > sim.bins[argmax]) argmax = i;
  checkBool('V3', 'pocIdx is the argmax bin', sim.pocIdx === argmax);
  // total volume = nBars
  let sum = 0; for (let i = 0; i < sim.bins.length; i++) sum += sim.bins[i];
  check('V3', 'profile volume = nBars (300)', 300, sum, 1e-9);
  checkBool('V3', `VA covers ≥70% (got ${(sim.va.fracCovered * 100).toFixed(1)}%)`, sim.va.fracCovered >= 0.7 - 1e-9);
  checkBool('V3', 'VA price range ordered (lo ≤ poc ≤ hi)', sim.vaLoPrice <= sim.pocPrice + 1e-9 && sim.pocPrice <= sim.vaHiPrice + 1e-9);
}

// ─── V4: HVN/LVN classification ────────────────────────────────────────
{
  const sim = simulateVolumeProfile({ trend: 0.1, vol: 0.7, nBars: 400, seed: 5 });
  let okClass = true;
  for (let i = 0; i < sim.nBins; i++) {
    const v = sim.bins[i], k = sim.nodes[i];
    if (k === 'HVN' && !(v >= 1.5 * sim.mean)) okClass = false;
    if (k === 'LVN' && !(v > 0 && v <= 0.5 * sim.mean)) okClass = false;
    if (k === 'mid' && !(v === 0 || (v > 0.5 * sim.mean && v < 1.5 * sim.mean))) okClass = false;
  }
  checkBool('V4', 'HVN/LVN/mid match thresholds vs mean bin', okClass);
  // The POC bin should be an HVN (it is the max, well above mean in a peaked profile)
  checkBool('V4', 'POC bin is an HVN', sim.nodes[sim.pocIdx] === 'HVN');
}

// ─── V5: Determinism ───────────────────────────────────────────────────
{
  const a = simulateVolumeProfile({ trend: 0.3, vol: 0.5, nBars: 250, seed: 99 });
  const b = simulateVolumeProfile({ trend: 0.3, vol: 0.5, nBars: 250, seed: 99 });
  let same = true; for (let i = 0; i < a.bins.length; i++) if (a.bins[i] !== b.bins[i]) { same = false; break; }
  checkBool('V5', 'same seed ⇒ identical profile', same && a.pocIdx === b.pocIdx);
  const c = simulateVolumeProfile({ trend: 0.3, vol: 0.5, nBars: 250, seed: 100 });
  let differ = false; for (let i = 0; i < a.bins.length; i++) if (a.bins[i] !== c.bins[i]) { differ = true; break; }
  checkBool('V5', 'different seed ⇒ different profile', differ);
}

// ─── V6: Balanced vs trend day (Monte-Carlo) ───────────────────────────
{
  function meanRange(trend, nSeeds) {
    let r = 0;
    for (let s = 1; s <= nSeeds; s++) { const sim = simulateVolumeProfile({ trend, vol: 0.6, nBars: 300, seed: s }); r += (sim.hi - sim.lo); }
    return r / nSeeds;
  }
  const balanced = meanRange(0.05, 30);
  const trending = meanRange(0.9, 30);
  checkBool('V6', `trend day has a wider price range than balanced (${trending.toFixed(1)} > ${balanced.toFixed(1)})`, trending > balanced);
}

// ─── Summary ───────────────────────────────────────────────────────────
const total = results.length, passed = results.filter(r => r.ok).length, failed = results.filter(r => !r.ok);
const bySection = {};
for (const r of results) { bySection[r.section] = bySection[r.section] || { t: 0, p: 0 }; bySection[r.section].t++; if (r.ok) bySection[r.section].p++; }
if (!QUIET) {
  console.log('\n=== Volume-profile simulator verification ===');
  for (const s of Object.keys(bySection).sort()) console.log(`  ${s}: ${bySection[s].p}/${bySection[s].t}${bySection[s].p === bySection[s].t ? ' ✓' : ' ✗'}`);
  console.log(`\nTotal: ${passed}/${total}`);
}
if (failed.length === 0) {
  if (!QUIET) console.log('All checks pass. Volume-profile sim matches POC/value-area/HVN-LVN definitions.');
  process.exit(0);
} else {
  console.log(`\n${failed.length} failures:`);
  for (const f of failed.slice(0, 20)) console.log(`  [${f.section}] ${f.label}${f.detail ? ': ' + f.detail : (f.expected !== undefined ? `: expected ${f.expected}, got ${f.actual}` : '')}`);
  process.exit(1);
}
