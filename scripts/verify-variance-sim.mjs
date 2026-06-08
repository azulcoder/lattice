#!/usr/bin/env node
// Persistent verification harness for the variance-risk-premium / variance-swap
// simulator (simulateVarianceSwap / fairVarianceStrike / sampleSkew in viz.js).
//
// Carr & Wu (2009); Bollerslev, Tauchen & Zhou (2009); Demeterfi, Derman, Kamal
// & Zou (1999); Bakshi, Kapadia & Madan (2003). Checks:
//   V1: realised variance is unbiased — E[RV] ≈ σ_real² (LLN)
//   V2: VRP = K_var − E[RV] = σ_imp² − σ_real²; mean short P&L ≈ VRP
//   V3: short-vol asymmetry — P&L skew < 0 (RV is right-skewed); win rate high
//       when σ_real ≪ σ_imp; P(loss) rises as σ_real → and beyond σ_imp
//   V4: vol-spike jumps fatten the left tail — worse worst/CVaR, higher P(loss),
//       more negative skew
//   V5: Demeterfi replication — flat skew recovers σ_atm²; a (negative) skew
//       lifts the fair variance above the ATM level
//   V6: sampleSkew sign/zero; determinism & structure
//
// Usage: node scripts/verify-variance-sim.mjs [--quiet] [--section V2]
// Exit: 0 = all pass, 1 = any fail.

import { pathToFileURL, fileURLToPath } from 'node:url';
import path from 'node:path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const args = process.argv.slice(2);
const QUIET = args.includes('--quiet');
const sectionFilter = (() => { const i = args.indexOf('--section'); return i >= 0 ? args[i + 1] : null; })();

const vizMod = await import(pathToFileURL(path.join(ROOT, 'js/viz.js')).href);
const { simulateVarianceSwap, fairVarianceStrike, sampleSkew, COMPONENTS } = vizMod;
for (const [n, f] of [['simulateVarianceSwap', simulateVarianceSwap], ['fairVarianceStrike', fairVarianceStrike], ['sampleSkew', sampleSkew]]) {
  if (typeof f !== 'function') { console.error(`FAIL: ${n} not exported from js/viz.js`); process.exit(1); }
}
if (!COMPONENTS?.VarianceSwapSim) { console.error('FAIL: VarianceSwapSim not registered'); process.exit(1); }

const results = [];
function check(s, l, e, a, t) { if (sectionFilter && s !== sectionFilter) return; const ok = Math.abs(e - a) <= t; results.push({ s, l, e, a, ok }); if (!QUIET && !ok) console.log(`  [${s}] ✗ ${l}: expected ${e}, got ${a}, tol ${t}`); }
function checkBool(s, l, c, d = '') { if (sectionFilter && s !== sectionFilter) return; results.push({ s, l, ok: c, d }); if (!QUIET && !c) console.log(`  [${s}] ✗ ${l}${d ? ': ' + d : ''}`); }

// ─── V1: realised variance unbiased ────────────────────────────────────
{
  const sim = simulateVarianceSwap({ impliedVol: 0.5, realizedVol: 0.4, days: 126, nRuns: 4000, seed: 1 });
  check('V1', 'E[RV] ≈ σ_real² (0.16)', 0.16, sim.ERV, 0.01);
  check('V1', 'E[σ_RV] ≈ σ_real (0.40)', 0.40, sim.eRealVol, 0.02);
}

// ─── V2: VRP + mean P&L ────────────────────────────────────────────────
{
  const sim = simulateVarianceSwap({ impliedVol: 0.6, realizedVol: 0.5, days: 126, nRuns: 5000, seed: 2 });
  check('V2', 'K_var = σ_imp² (0.36)', 0.36, sim.Kvar, 1e-12);
  // VRP = 0.36 − 0.25 = 0.11
  check('V2', 'VRP = σ_imp² − σ_real² ≈ 0.11', 0.11, sim.vrp, 0.01);
  check('V2', 'mean short P&L ≈ VRP', sim.vrp, sim.mean, 1e-9);
  checkBool('V2', 'positive VRP ⇒ mean P&L > 0', sim.mean > 0);
  // zero VRP when implied = realized
  const flat = simulateVarianceSwap({ impliedVol: 0.5, realizedVol: 0.5, days: 126, nRuns: 5000, seed: 3 });
  check('V2', 'σ_imp = σ_real ⇒ VRP ≈ 0', 0, flat.vrp, 0.01);
}

// ─── V3: short-vol asymmetry ───────────────────────────────────────────
{
  const sim = simulateVarianceSwap({ impliedVol: 0.5, realizedVol: 0.5, days: 63, nRuns: 6000, seed: 4 });
  checkBool('V3', 'P&L skew < 0 (rare large losses)', sim.skew < 0, `skew=${sim.skew.toFixed(3)}`);
  const cheapRV = simulateVarianceSwap({ impliedVol: 0.6, realizedVol: 0.3, days: 63, nRuns: 4000, seed: 5 });
  checkBool('V3', 'σ_real ≪ σ_imp ⇒ high win rate (>0.9)', cheapRV.winRate > 0.9, `win=${cheapRV.winRate.toFixed(2)}`);
  const richRV = simulateVarianceSwap({ impliedVol: 0.3, realizedVol: 0.6, days: 63, nRuns: 4000, seed: 6 });
  checkBool('V3', 'σ_real ≫ σ_imp ⇒ P(loss) high (>0.9)', richRV.pLoss > 0.9, `pLoss=${richRV.pLoss.toFixed(2)}`);
  checkBool('V3', 'P(loss) rises with σ_real', richRV.pLoss > cheapRV.pLoss);
  checkBool('V3', 'winRate + P(loss) = 1', Math.abs(sim.winRate + sim.pLoss - 1) < 1e-9);
}

// ─── V4: jumps fatten the left tail ────────────────────────────────────
{
  const noJ = simulateVarianceSwap({ impliedVol: 0.5, realizedVol: 0.45, days: 63, nRuns: 4000, jumpsPerYear: 0, seed: 7 });
  const withJ = simulateVarianceSwap({ impliedVol: 0.5, realizedVol: 0.45, days: 63, nRuns: 4000, jumpsPerYear: 3, jumpSize: 0.1, seed: 7 });
  checkBool('V4', 'jumps ⇒ worse worst-case loss', withJ.worst < noJ.worst);
  checkBool('V4', 'jumps ⇒ worse CVaR 5%', withJ.cvar < noJ.cvar);
  checkBool('V4', 'jumps ⇒ higher P(loss)', withJ.pLoss >= noJ.pLoss);
  checkBool('V4', 'jumps ⇒ more negative skew', withJ.skew < noJ.skew);
  checkBool('V4', 'jumps raise E[RV] (vol of vol)', withJ.ERV > noJ.ERV);
}

// ─── V5: Demeterfi replication ─────────────────────────────────────────
{
  const flat = fairVarianceStrike({ S0: 100, r: 0, T: 0.5, atmVol: 0.2, skew: 0 });
  check('V5', 'flat skew ⇒ fair vol ≈ ATM (0.20)', 0.20, flat.volFair, 0.02);
  const flat30 = fairVarianceStrike({ S0: 100, r: 0, T: 0.5, atmVol: 0.3, skew: 0 });
  check('V5', 'flat skew ⇒ fair vol ≈ ATM (0.30)', 0.30, flat30.volFair, 0.025);
  const skewed = fairVarianceStrike({ S0: 100, r: 0, T: 0.5, atmVol: 0.2, skew: -0.4 });
  checkBool('V5', 'negative skew lifts fair variance above ATM²', skewed.varFair > flat.varFair, `${skewed.varFair.toFixed(4)} vs ${flat.varFair.toFixed(4)}`);
  checkBool('V5', 'fair variance > 0', flat.varFair > 0 && skewed.varFair > 0);
  // with a positive rate the replication still recovers ATM for flat skew
  const withR = fairVarianceStrike({ S0: 100, r: 0.03, T: 0.5, atmVol: 0.25, skew: 0 });
  check('V5', 'flat skew + r>0 ⇒ fair vol ≈ ATM (0.25)', 0.25, withR.volFair, 0.03);
}

// ─── V6: sampleSkew + structure/determinism ────────────────────────────
{
  check('V6', 'sampleSkew(symmetric) ≈ 0', 0, sampleSkew([-2, -1, 0, 1, 2]), 1e-9);
  checkBool('V6', 'sampleSkew(right-tailed) > 0', sampleSkew([0, 0, 0, 0, 10]) > 0);
  checkBool('V6', 'sampleSkew(left-tailed) < 0', sampleSkew([-10, 0, 0, 0, 0]) < 0);
  const a = simulateVarianceSwap({ impliedVol: 0.5, realizedVol: 0.4, days: 63, nRuns: 1000, seed: 42 });
  const b = simulateVarianceSwap({ impliedVol: 0.5, realizedVol: 0.4, days: 63, nRuns: 1000, seed: 42 });
  checkBool('V6', 'deterministic (same seed ⇒ same mean)', a.mean === b.mean);
  checkBool('V6', 'has Kvar, vrp, winRate, worst, cvar, skew, sharpe', ['Kvar', 'vrp', 'winRate', 'worst', 'cvar', 'skew', 'sharpe', 'rvs', 'pnls'].every((k) => k in a));
  checkBool('V6', 'rvs length = nRuns', a.rvs.length === 1000);
}

// ─── Summary ───────────────────────────────────────────────────────────
const total = results.length, passed = results.filter((r) => r.ok).length, failed = results.filter((r) => !r.ok);
const bySection = {};
for (const r of results) { bySection[r.s] = bySection[r.s] || { t: 0, p: 0 }; bySection[r.s].t++; if (r.ok) bySection[r.s].p++; }
if (!QUIET) {
  console.log('\n=== Variance-risk-premium / variance-swap verification ===');
  for (const s of Object.keys(bySection).sort()) console.log(`  ${s}: ${bySection[s].p}/${bySection[s].t}${bySection[s].p === bySection[s].t ? ' ✓' : ' ✗'}`);
  console.log(`\nTotal: ${passed}/${total}`);
}
if (failed.length === 0) {
  if (!QUIET) console.log('All checks pass. Variance sim matches the VRP identities + Demeterfi replication.');
  process.exit(0);
} else {
  console.log(`\n${failed.length} failures:`);
  for (const f of failed.slice(0, 25)) console.log(`  [${f.s}] ${f.l}${f.d ? ': ' + f.d : (f.e !== undefined ? `: expected ${f.e}, got ${f.a}` : '')}`);
  process.exit(1);
}
