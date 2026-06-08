#!/usr/bin/env node
// Persistent verification harness for the backtest-overfitting simulator
// (normalInv / expectedMaxSharpe / sharpeStdError / probabilisticSharpe /
// simulateBacktestOverfit in js/viz.js).
//
// Bailey & López de Prado (2014), The Deflated Sharpe Ratio; Lo (2002). Checks:
//   B1: normalInv — inverse of normalCDF, monotone, normalInv(0.5)=0
//   B2: expectedMaxSharpe — 0 at N≤1, increasing in N, matches the known
//       expected-max-of-N-Gaussians magnitudes; scales with √varTrials
//   B3: Monte-Carlo cross-check — simulated mean best-of-N noise t-stat ≈
//       expectedMaxSharpe(N,1)
//   B4: sharpeStdError (Lo) + Probabilistic Sharpe Ratio identities
//   B5: Deflated Sharpe Ratio monotonicity (↓ in N, ↑ in T/years, ↑ in Sharpe);
//       p(beaten-by-luck) monotonicity; both in [0,1]
//   B6: structure & determinism
//
// Usage: node scripts/verify-backtest-sim.mjs [--quiet] [--section B2]
// Exit: 0 = all pass, 1 = any fail.

import { pathToFileURL, fileURLToPath } from 'node:url';
import path from 'node:path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const args = process.argv.slice(2);
const QUIET = args.includes('--quiet');
const sectionFilter = (() => { const i = args.indexOf('--section'); return i >= 0 ? args[i + 1] : null; })();

const vizMod = await import(pathToFileURL(path.join(ROOT, 'js/viz.js')).href);
const { normalInv, expectedMaxSharpe, sharpeStdError, probabilisticSharpe, simulateBacktestOverfit, normalCDF, COMPONENTS } = vizMod;
for (const [n, f] of [['normalInv', normalInv], ['expectedMaxSharpe', expectedMaxSharpe], ['sharpeStdError', sharpeStdError], ['probabilisticSharpe', probabilisticSharpe], ['simulateBacktestOverfit', simulateBacktestOverfit]]) {
  if (typeof f !== 'function') { console.error(`FAIL: ${n} not exported from js/viz.js`); process.exit(1); }
}
if (!COMPONENTS?.BacktestOverfitSim) { console.error('FAIL: BacktestOverfitSim not registered'); process.exit(1); }

const results = [];
function check(s, l, e, a, t) { if (sectionFilter && s !== sectionFilter) return; const ok = Math.abs(e - a) <= t; results.push({ s, l, e, a, ok }); if (!QUIET && !ok) console.log(`  [${s}] ✗ ${l}: expected ${e}, got ${a}, tol ${t}`); }
function checkBool(s, l, c, d = '') { if (sectionFilter && s !== sectionFilter) return; results.push({ s, l, ok: c, d }); if (!QUIET && !c) console.log(`  [${s}] ✗ ${l}${d ? ': ' + d : ''}`); }

// ─── B1: normalInv ─────────────────────────────────────────────────────
{
  check('B1', 'normalInv(0.5) = 0', 0, normalInv(0.5), 1e-6);
  for (const z of [-2, -0.5, 0.3, 1, 2.5]) check('B1', `normalInv(normalCDF(${z}))=${z}`, z, normalInv(normalCDF(z)), 1e-3);
  checkBool('B1', 'normalInv monotone increasing', normalInv(0.2) < normalInv(0.5) && normalInv(0.5) < normalInv(0.8));
  check('B1', 'normalInv(0.975) ≈ 1.96', 1.959964, normalInv(0.975), 1e-3);
}

// ─── B2: expectedMaxSharpe ─────────────────────────────────────────────
{
  check('B2', 'N=1 ⇒ 0', 0, expectedMaxSharpe(1, 1), 1e-12);
  checkBool('B2', 'increasing in N', expectedMaxSharpe(10, 1) < expectedMaxSharpe(100, 1) && expectedMaxSharpe(100, 1) < expectedMaxSharpe(1000, 1));
  // known expected-max-of-N standard normals (approx): N=10≈1.54, N=100≈2.51
  checkBool('B2', 'E[max] of 10 ≈ 1.3–1.8', expectedMaxSharpe(10, 1) > 1.3 && expectedMaxSharpe(10, 1) < 1.8);
  checkBool('B2', 'E[max] of 100 ≈ 2.3–2.7', expectedMaxSharpe(100, 1) > 2.3 && expectedMaxSharpe(100, 1) < 2.7);
  // scales with sqrt(varTrials)
  check('B2', 'scales with √varTrials (×4 var ⇒ ×2)', 2 * expectedMaxSharpe(50, 1), expectedMaxSharpe(50, 4), 1e-9);
}

// ─── B3: Monte-Carlo cross-check ───────────────────────────────────────
{
  // mcMaxMean (best-of-N noise t-stat) ≈ expectedMaxSharpe(N, 1)
  const N = 50;
  const sim = simulateBacktestOverfit({ sharpe: 1, nTrials: N, years: 2, mcRuns: 4000, seed: 123 });
  const analytic = expectedMaxSharpe(N, 1);
  checkBool('B3', `MC mean best-of-${N} ≈ analytic E[max] (±12%)`, Math.abs(sim.mcMaxMean - analytic) / analytic < 0.12, `mc=${sim.mcMaxMean.toFixed(3)} vs ${analytic.toFixed(3)}`);
  checkBool('B3', 'MC mean > single-trial mean (~0)', sim.mcMaxMean > 1);
}

// ─── B4: Sharpe SE + PSR ───────────────────────────────────────────────
{
  const T = 1001;
  check('B4', 'σ(SR=0,T) = √(1/(T−1))', Math.sqrt(1 / (T - 1)), sharpeStdError(0, T), 1e-12);
  checkBool('B4', 'σ increases with |SR| (normal)', sharpeStdError(2, T) > sharpeStdError(0, T));
  // PSR(SR* = SR) = 0.5 (observed equals benchmark)
  check('B4', 'PSR(benchmark=observed) = 0.5', 0.5, probabilisticSharpe(0.1, 0.1, T), 1e-9);
  checkBool('B4', 'PSR increases as observed SR rises', probabilisticSharpe(0.15, 0.05, T) > probabilisticSharpe(0.08, 0.05, T));
  checkBool('B4', 'PSR(strong, 0, T) high (>0.99)', probabilisticSharpe(0.2, 0, 1001) > 0.99);
  checkBool('B4', 'PSR < 0.5 when observed below benchmark', probabilisticSharpe(0.02, 0.1, T) < 0.5);
}

// ─── B5: Deflated Sharpe monotonicity ──────────────────────────────────
{
  const base = { sharpe: 2, nTrials: 50, years: 3, mcRuns: 200 };
  const dsr = (o) => simulateBacktestOverfit({ ...base, ...o }).dsr;
  checkBool('B5', 'DSR ↓ as trials N ↑', dsr({ nTrials: 1000 }) < dsr({ nTrials: 5 }));
  checkBool('B5', 'DSR ↑ as sample years ↑', dsr({ years: 8 }) > dsr({ years: 1 }));
  checkBool('B5', 'DSR ↑ as observed Sharpe ↑', dsr({ sharpe: 3 }) > dsr({ sharpe: 1 }));
  const s = simulateBacktestOverfit(base);
  checkBool('B5', 'DSR ∈ [0,1]', s.dsr >= 0 && s.dsr <= 1);
  // p(beaten by luck) monotonicity + range
  const pl = (o) => simulateBacktestOverfit({ ...base, ...o, mcRuns: 1500, seed: 7 }).pLuck;
  checkBool('B5', 'p(luck) ↑ as N ↑', pl({ nTrials: 1000 }) >= pl({ nTrials: 5 }));
  checkBool('B5', 'p(luck) ↓ as Sharpe ↑', pl({ sharpe: 3 }) <= pl({ sharpe: 1 }));
  checkBool('B5', 'p(luck) ∈ [0,1]', s.pLuck >= 0 && s.pLuck <= 1);
  // the headline lesson: a high Sharpe from many trials on short data is overfit
  checkBool('B5', 'high Sharpe + many trials + short data ⇒ DSR < 0.5', simulateBacktestOverfit({ sharpe: 1.5, nTrials: 1000, years: 1, mcRuns: 200 }).dsr < 0.5);
  // and a strong Sharpe on long data with few trials ⇒ skill
  checkBool('B5', 'strong Sharpe + few trials + long data ⇒ DSR > 0.95', simulateBacktestOverfit({ sharpe: 2.5, nTrials: 2, years: 8, mcRuns: 200 }).dsr > 0.95);
}

// ─── B6: structure & determinism ───────────────────────────────────────
{
  const a = simulateBacktestOverfit({ sharpe: 2, nTrials: 100, years: 3, mcRuns: 300, seed: 42 });
  checkBool('B6', 'has srStarAnn, dsr, se, pLuck, curve, verdict, breakevenN', ['srStarAnn', 'dsr', 'se', 'pLuck', 'curve', 'verdict', 'mcMaxMean'].every((k) => k in a));
  checkBool('B6', 'curve rises in N', a.curve[a.curve.length - 1].expMaxAnn > a.curve[1].expMaxAnn);
  checkBool('B6', 'verdict ∈ {skill,inconclusive,overfit}', ['skill', 'inconclusive', 'overfit'].includes(a.verdict));
  const b = simulateBacktestOverfit({ sharpe: 2, nTrials: 100, years: 3, mcRuns: 300, seed: 42 });
  checkBool('B6', 'deterministic (same seed ⇒ same pLuck)', a.pLuck === b.pLuck);
  check('B6', 'observed t-stat = SR·√years', 2 * Math.sqrt(3), a.observedT, 1e-9);
}

// ─── Summary ───────────────────────────────────────────────────────────
const total = results.length, passed = results.filter((r) => r.ok).length, failed = results.filter((r) => !r.ok);
const bySection = {};
for (const r of results) { bySection[r.s] = bySection[r.s] || { t: 0, p: 0 }; bySection[r.s].t++; if (r.ok) bySection[r.s].p++; }
if (!QUIET) {
  console.log('\n=== Backtest-overfitting / Deflated Sharpe verification ===');
  for (const s of Object.keys(bySection).sort()) console.log(`  ${s}: ${bySection[s].p}/${bySection[s].t}${bySection[s].p === bySection[s].t ? ' ✓' : ' ✗'}`);
  console.log(`\nTotal: ${passed}/${total}`);
}
if (failed.length === 0) {
  if (!QUIET) console.log('All checks pass. Backtest-overfitting sim matches the Deflated Sharpe Ratio math + MC.');
  process.exit(0);
} else {
  console.log(`\n${failed.length} failures:`);
  for (const f of failed.slice(0, 25)) console.log(`  [${f.s}] ${f.l}${f.d ? ': ' + f.d : (f.e !== undefined ? `: expected ${f.e}, got ${f.a}` : '')}`);
  process.exit(1);
}
