#!/usr/bin/env node
// Persistent verification harness for the Roll (1984) spread simulator.
//
// Verifies the live simulateRoll function in js/viz.js against the
// theoretical properties of the Roll spread estimator. Because Roll is
// inherently statistical, most checks use Monte Carlo across many seeds
// with loose tolerance — we test E[Roll estimate] → s, not single-sample
// equality.
//
// Coverage:
//   R1: Structural — output shape, q ∈ {-1,+1}, p = m + (s/2)·q identity
//   R2: ρ=0 Roll estimator is approximately unbiased (Monte Carlo)
//   R3: ρ=0 theoretical cov ≈ -(s/2)² (large-n check)
//   R4: ρ > 0 produces downward-biased Roll estimate (informed-trader case)
//   R5: ρ < 0 produces upward-biased Roll estimate (bid-ask bounce reinforced)
//   R6: Larger n produces tighter estimates (variance shrinks with sample size)
//   R7: Determinism (same seed = same result)
//   R8: Boundary behavior (very small s, very small ρ)
//
// Usage:
//   node scripts/verify-roll-sim.mjs
//   node scripts/verify-roll-sim.mjs --quiet
//   node scripts/verify-roll-sim.mjs --section R4
//
// Exit code: 0 = all pass, 1 = any fail.

import { pathToFileURL, fileURLToPath } from 'node:url';
import path from 'node:path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');

const args = process.argv.slice(2);
const QUIET = args.includes('--quiet');
const sectionFilter = (() => {
  const idx = args.indexOf('--section');
  return idx >= 0 ? args[idx + 1] : null;
})();

// ─── Load live Roll sim from viz.js ─────────────────────────────────────
const vizMod = await import(pathToFileURL(path.join(ROOT, 'js/viz.js')).href);
const { simulateRoll, COMPONENTS } = vizMod;
if (typeof simulateRoll !== 'function') {
  console.error('FAIL: simulateRoll not exported from js/viz.js');
  process.exit(1);
}
if (!COMPONENTS?.RollSpreadSim) {
  console.error('FAIL: RollSpreadSim not registered as viz component');
  process.exit(1);
}

// ─── Test infrastructure ────────────────────────────────────────────────
const results = [];

function check(section, label, expected, actual, tol) {
  if (sectionFilter && section !== sectionFilter) return;
  const diff = Math.abs(expected - actual);
  const ok = diff <= tol;
  results.push({ section, label, expected, actual, diff, ok });
  if (!QUIET && !ok) {
    console.log(`  [${section}] ✗ ${label}: expected ${expected}, got ${actual.toFixed(6)}, diff ${diff.toFixed(6)} (tol ${tol})`);
  }
}

function checkBool(section, label, cond, detail = '') {
  if (sectionFilter && section !== sectionFilter) return;
  results.push({ section, label, ok: cond, detail });
  if (!QUIET && !cond) {
    console.log(`  [${section}] ✗ ${label}${detail ? ': ' + detail : ''}`);
  }
}

// Monte Carlo: average Roll estimate across many seeds
function monteCarlo({ s, rho, nSamples, nSeeds }) {
  let sumRoll = 0, sumCov = 0, countFinite = 0;
  for (let seed = 1; seed <= nSeeds; seed++) {
    const r = simulateRoll({ s, rho, nSamples, seed });
    if (isFinite(r.rollEstimate)) {
      sumRoll += r.rollEstimate;
      countFinite++;
    }
    sumCov += r.cov;
  }
  return {
    meanRoll: countFinite > 0 ? sumRoll / countFinite : NaN,
    meanCov: sumCov / nSeeds,
    finiteRate: countFinite / nSeeds,
  };
}

// ─── R1: Structural ─────────────────────────────────────────────────────
{
  const r = simulateRoll({ s: 0.1, rho: 0.0, nSamples: 100, seed: 42 });
  checkBool('R1', 'returns p, dp, q, m, cov, rollEstimate, biasPct',
    'p' in r && 'dp' in r && 'q' in r && 'm' in r && 'cov' in r && 'rollEstimate' in r && 'biasPct' in r);
  checkBool('R1', 'p.length === nSamples', r.p.length === 100);
  checkBool('R1', 'dp.length === nSamples - 1', r.dp.length === 99);
  checkBool('R1', 'q.length === nSamples', r.q.length === 100);
  checkBool('R1', 'm.length === nSamples', r.m.length === 100);

  // q entries are ±1 only
  let qBad = false;
  for (let i = 0; i < r.q.length; i++) if (r.q[i] !== 1 && r.q[i] !== -1) { qBad = true; break; }
  checkBool('R1', 'q ∈ {-1, +1} only', !qBad);

  // p = m + (s/2)·q identity, exactly
  let maxIdentityErr = 0;
  for (let i = 0; i < r.p.length; i++) {
    const expected = r.m[i] + (0.1 / 2) * r.q[i];
    maxIdentityErr = Math.max(maxIdentityErr, Math.abs(r.p[i] - expected));
  }
  checkBool('R1', `p = m + (s/2)·q identity holds exactly (max err ${maxIdentityErr})`,
    maxIdentityErr < 1e-12);

  // m starts at 100 (per code)
  checkBool('R1', 'm[0] = 100 (initial efficient price)', r.m[0] === 100);

  // dp[i] = p[i+1] - p[i]
  let maxDpErr = 0;
  for (let i = 0; i < r.dp.length; i++) {
    maxDpErr = Math.max(maxDpErr, Math.abs(r.dp[i] - (r.p[i + 1] - r.p[i])));
  }
  checkBool('R1', `dp identity holds (max err ${maxDpErr})`, maxDpErr < 1e-12);
}

// ─── R2: ρ=0 Roll estimator approximately unbiased ─────────────────────
{
  const mc = monteCarlo({ s: 0.10, rho: 0.0, nSamples: 2000, nSeeds: 60 });
  check('R2', 'E[Roll estimate] ≈ s at ρ=0, s=0.10', 0.10, mc.meanRoll, 0.01);
  checkBool('R2', `finite rate > 95% at ρ=0 (got ${(mc.finiteRate * 100).toFixed(0)}%)`,
    mc.finiteRate > 0.95);

  // Smaller spread
  const mc2 = monteCarlo({ s: 0.05, rho: 0.0, nSamples: 2000, nSeeds: 60 });
  check('R2', 'E[Roll estimate] ≈ s at ρ=0, s=0.05', 0.05, mc2.meanRoll, 0.005);

  // Larger spread
  const mc3 = monteCarlo({ s: 0.25, rho: 0.0, nSamples: 2000, nSeeds: 60 });
  check('R2', 'E[Roll estimate] ≈ s at ρ=0, s=0.25', 0.25, mc3.meanRoll, 0.025);
}

// ─── R3: ρ=0 theoretical cov ≈ -(s/2)² ──────────────────────────────────
// Roll's theory: at ρ=0, Cov(Δp_t, Δp_{t-1}) = -s²/4 = -(s/2)²
{
  const mc = monteCarlo({ s: 0.10, rho: 0.0, nSamples: 4000, nSeeds: 40 });
  check('R3', 'E[Cov] ≈ -(s/2)² at s=0.10', -(0.10 / 2) * (0.10 / 2), mc.meanCov, 0.0003);

  const mc2 = monteCarlo({ s: 0.20, rho: 0.0, nSamples: 4000, nSeeds: 40 });
  check('R3', 'E[Cov] ≈ -(s/2)² at s=0.20', -(0.20 / 2) * (0.20 / 2), mc2.meanCov, 0.0005);

  // Cov should be negative on average (Roll's central claim)
  checkBool('R3', 'mean cov negative at ρ=0', mc.meanCov < 0);
}

// ─── R4: ρ > 0 produces downward-biased Roll estimate ──────────────────
// Trade-direction autocorrelation (informed-trader-like) attenuates Roll bias.
// E[Roll estimate] < s at ρ > 0.
{
  const mcBase = monteCarlo({ s: 0.10, rho: 0.0, nSamples: 2000, nSeeds: 60 });
  const mcRho2 = monteCarlo({ s: 0.10, rho: 0.2, nSamples: 2000, nSeeds: 60 });
  const mcRho4 = monteCarlo({ s: 0.10, rho: 0.4, nSamples: 2000, nSeeds: 60 });

  // Mean Roll should DECREASE as rho increases (toward zero, eventually NaN)
  checkBool('R4', `ρ=0.2 Roll < ρ=0 Roll (${mcRho2.meanRoll.toFixed(4)} < ${mcBase.meanRoll.toFixed(4)})`,
    mcRho2.meanRoll < mcBase.meanRoll);
  checkBool('R4', `ρ=0.4 Roll < ρ=0.2 Roll (${mcRho4.meanRoll.toFixed(4)} < ${mcRho2.meanRoll.toFixed(4)})`,
    mcRho4.meanRoll < mcRho2.meanRoll);

  // Finite rate falls as ρ rises (cov can become positive)
  checkBool('R4', `finite rate at ρ=0.4 less than at ρ=0 (${mcRho4.finiteRate.toFixed(2)} <= ${mcBase.finiteRate.toFixed(2)})`,
    mcRho4.finiteRate <= mcBase.finiteRate);
}

// ─── R5: ρ < 0 produces upward-biased Roll estimate ────────────────────
// Trade-direction anti-correlation (more bid-ask bouncing than independent)
// amplifies the negative autocovariance, so Roll estimate goes UP.
{
  const mcBase = monteCarlo({ s: 0.10, rho: 0.0, nSamples: 2000, nSeeds: 60 });
  const mcNeg = monteCarlo({ s: 0.10, rho: -0.2, nSamples: 2000, nSeeds: 60 });
  checkBool('R5', `ρ=-0.2 Roll > ρ=0 Roll (${mcNeg.meanRoll.toFixed(4)} > ${mcBase.meanRoll.toFixed(4)})`,
    mcNeg.meanRoll > mcBase.meanRoll);
  // Cov should be more negative
  checkBool('R5', `ρ=-0.2 cov more negative than ρ=0 (${mcNeg.meanCov.toFixed(6)} < ${mcBase.meanCov.toFixed(6)})`,
    mcNeg.meanCov < mcBase.meanCov);
}

// ─── R6: Larger n produces tighter estimates ───────────────────────────
{
  function rollStd({ s, rho, nSamples, nSeeds }) {
    const rolls = [];
    for (let seed = 1; seed <= nSeeds; seed++) {
      const r = simulateRoll({ s, rho, nSamples, seed });
      if (isFinite(r.rollEstimate)) rolls.push(r.rollEstimate);
    }
    const mean = rolls.reduce((a, b) => a + b, 0) / rolls.length;
    const variance = rolls.reduce((a, b) => a + (b - mean) ** 2, 0) / rolls.length;
    return Math.sqrt(variance);
  }
  const stdSmall = rollStd({ s: 0.10, rho: 0.0, nSamples: 500, nSeeds: 40 });
  const stdLarge = rollStd({ s: 0.10, rho: 0.0, nSamples: 4000, nSeeds: 40 });
  checkBool('R6', `std at n=4000 < std at n=500 (${stdLarge.toFixed(4)} < ${stdSmall.toFixed(4)})`,
    stdLarge < stdSmall);
  // Specifically, std should shrink approximately as 1/sqrt(n) — so 4000/500 = 8x → sqrt(8) ≈ 2.83x reduction
  checkBool('R6', `std at n=4000 is < 70% of std at n=500 (consistency with 1/sqrt(n))`,
    stdLarge < stdSmall * 0.7);
}

// ─── R7: Determinism ───────────────────────────────────────────────────
{
  const a = simulateRoll({ s: 0.1, rho: 0.2, nSamples: 500, seed: 7 });
  const b = simulateRoll({ s: 0.1, rho: 0.2, nSamples: 500, seed: 7 });
  let allMatch = true;
  for (let i = 0; i < a.p.length; i++) {
    if (a.p[i] !== b.p[i] || a.m[i] !== b.m[i] || a.q[i] !== b.q[i]) {
      allMatch = false;
      break;
    }
  }
  checkBool('R7', 'same seed produces identical p, m, q traces', allMatch);
  checkBool('R7', 'same seed produces identical rollEstimate',
    a.rollEstimate === b.rollEstimate || (!isFinite(a.rollEstimate) && !isFinite(b.rollEstimate)));

  // Different seeds produce different results
  const c = simulateRoll({ s: 0.1, rho: 0.2, nSamples: 500, seed: 8 });
  let anyDiffer = false;
  for (let i = 0; i < a.p.length; i++) if (a.p[i] !== c.p[i]) { anyDiffer = true; break; }
  checkBool('R7', 'different seeds produce different prices', anyDiffer);
}

// ─── R8: Boundary behavior ─────────────────────────────────────────────
{
  // Very small s — assert the real output shape (the old check accepted even
  // `undefined` via isNaN; this catches a sim that returns malformed output).
  const small = simulateRoll({ s: 0.01, rho: 0.0, nSamples: 4000, seed: 1 });
  checkBool('R8', `very small s=0.01: well-formed output (est=${small.rollEstimate})`,
    typeof small.rollEstimate === 'number' && small.p.length === 4000 && small.q.every(v => v === 1 || v === -1));

  // s=0 (no spread): Roll estimate should typically be NaN (cov >= 0) or near zero
  const zero = simulateRoll({ s: 0.0, rho: 0.0, nSamples: 2000, seed: 1 });
  checkBool('R8', `s=0 produces NaN Roll or near-zero (got ${zero.rollEstimate})`,
    isNaN(zero.rollEstimate) || zero.rollEstimate < 0.01);

  // Positive ρ UNDER-estimates the true spread (documented bias direction;
  // deterministic at this seed — a real assertion, not a finite-or-NaN tautology).
  const rhoHigh = simulateRoll({ s: 0.10, rho: 0.65, nSamples: 2000, seed: 1 });
  checkBool('R8', `ρ=0.65 underestimates true s=0.10 (got ${rhoHigh.rollEstimate.toFixed(4)})`,
    Number.isFinite(rhoHigh.rollEstimate) && rhoHigh.rollEstimate < 0.10);

  // Negative ρ OVER-estimates the true spread (mirror direction)
  const rhoLow = simulateRoll({ s: 0.10, rho: -0.3, nSamples: 2000, seed: 1 });
  checkBool('R8', `ρ=-0.3 overestimates true s=0.10 (got ${rhoLow.rollEstimate.toFixed(4)})`,
    Number.isFinite(rhoLow.rollEstimate) && rhoLow.rollEstimate > 0.10);
}

// ─── Summary ───────────────────────────────────────────────────────────
const total = results.length;
const passed = results.filter(r => r.ok).length;
const failed = results.filter(r => !r.ok);

const bySection = {};
for (const r of results) {
  bySection[r.section] = bySection[r.section] || { total: 0, passed: 0 };
  bySection[r.section].total += 1;
  if (r.ok) bySection[r.section].passed += 1;
}

if (!QUIET) {
  console.log('\n=== Roll spread simulator verification ===');
  for (const sec of Object.keys(bySection).sort()) {
    const s = bySection[sec];
    console.log(`  ${sec}: ${s.passed}/${s.total}${s.passed === s.total ? ' ✓' : ' ✗'}`);
  }
  console.log(`\nTotal: ${passed}/${total}`);
}

if (failed.length === 0) {
  if (!QUIET) console.log('All checks pass. Roll simulator matches theory + statistical properties.');
  process.exit(0);
} else {
  console.log(`\n${failed.length} failures:`);
  for (const f of failed.slice(0, 20)) {
    if (f.expected !== undefined) {
      console.log(`  [${f.section}] ${f.label}: expected ${f.expected}, got ${f.actual?.toFixed(6)}, diff ${f.diff?.toFixed(6)}`);
    } else {
      console.log(`  [${f.section}] ${f.label}${f.detail ? ': ' + f.detail : ''}`);
    }
  }
  if (failed.length > 20) console.log(`  ... and ${failed.length - 20} more`);
  process.exit(1);
}
