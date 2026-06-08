#!/usr/bin/env node
// Persistent verification harness for the statistical-arbitrage / pairs-trading
// simulator (ouHalfLife / ouEqStd / simulatePairs in js/viz.js).
//
// OU spread dX = κ(θ−X)dt + σ dW; z = (X−θ)/σ_eq, σ_eq = σ/√(2κ); half-life
// ln2/κ; AR(1) coefficient e^{−κ dt}. Avellaneda-Lee s-score / Gatev et al.
// distance-pairs. Checks:
//   S1: ouHalfLife = ln2/κ; ouEqStd = σ/√(2κ) (exact)
//   S2: realized path std ≈ σ_eq (OU equilibrium, LLN)
//   S3: realized AR(1) ≈ e^{−κ dt}; mean ≈ θ
//   S4: the strategy has an EDGE under mean reversion (totalPnl>0, high win rate)
//       and NONE under a (near-)random walk; mean-reverting ≫ random walk
//   S5: higher entry-z ⇒ fewer trades; structure
//   S6: determinism
//
// Refs: Avellaneda & Lee (2010); Gatev, Goetzmann & Rouwenhorst (2006);
// Ornstein-Uhlenbeck. Deterministic.
//
// Usage: node scripts/verify-pairs-sim.mjs [--quiet] [--section S2]
// Exit: 0 = all pass, 1 = any fail.

import { pathToFileURL, fileURLToPath } from 'node:url';
import path from 'node:path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const args = process.argv.slice(2);
const QUIET = args.includes('--quiet');
const sectionFilter = (() => { const i = args.indexOf('--section'); return i >= 0 ? args[i + 1] : null; })();

const vizMod = await import(pathToFileURL(path.join(ROOT, 'js/viz.js')).href);
const { ouHalfLife, ouEqStd, simulatePairs, COMPONENTS } = vizMod;
for (const [n, f] of [['ouHalfLife', ouHalfLife], ['ouEqStd', ouEqStd], ['simulatePairs', simulatePairs]]) {
  if (typeof f !== 'function') { console.error(`FAIL: ${n} not exported from js/viz.js`); process.exit(1); }
}
if (!COMPONENTS?.PairsTradingSim) { console.error('FAIL: PairsTradingSim not registered'); process.exit(1); }

const results = [];
function check(s, l, e, a, t) { if (sectionFilter && s !== sectionFilter) return; const ok = Math.abs(e - a) <= t; results.push({ s, l, e, a, ok }); if (!QUIET && !ok) console.log(`  [${s}] ✗ ${l}: expected ${e}, got ${a}, tol ${t}`); }
function checkBool(s, l, c, d = '') { if (sectionFilter && s !== sectionFilter) return; results.push({ s, l, ok: c, d }); if (!QUIET && !c) console.log(`  [${s}] ✗ ${l}${d ? ': ' + d : ''}`); }

// ─── S1: OU closed forms ───────────────────────────────────────────────
{
  check('S1', 'half-life = ln2/κ (κ=10)', Math.log(2) / 10, ouHalfLife(10), 1e-12);
  check('S1', 'σ_eq = σ/√(2κ) (σ=0.4,κ=8 ⇒ 0.1)', 0.1, ouEqStd(0.4, 8), 1e-12);
  check('S1', 'σ_eq scales (σ=0.5,κ=2 ⇒ 0.25)', 0.25, ouEqStd(0.5, 2), 1e-12);
  checkBool('S1', 'half-life ↓ as κ ↑', ouHalfLife(20) < ouHalfLife(5));
}

// ─── S2: OU equilibrium std ────────────────────────────────────────────
{
  const sim = simulatePairs({ kappa: 8, sigma: 0.4, nSteps: 8000, seed: 1 });
  check('S2', 'realized std ≈ σ_eq (0.1)', 0.1, sim.realizedStd, 0.02);
  check('S2', 'sigEq field = σ/√(2κ)', ouEqStd(0.4, 8), sim.sigEq, 1e-12);
}

// ─── S3: AR(1) + mean ──────────────────────────────────────────────────
{
  const kappa = 8, dt = 1 / 252;
  const sim = simulatePairs({ kappa, sigma: 0.4, nSteps: 8000, seed: 2 });
  check('S3', 'AR(1) ≈ e^{−κ dt}', Math.exp(-kappa * dt), sim.ar1, 0.02);
  check('S3', 'path mean ≈ θ (0)', 0, sim.path.reduce((a, b) => a + b, 0) / sim.path.length, 0.03);
  // slower κ ⇒ higher AR(1) (more persistent)
  const slow = simulatePairs({ kappa: 2, sigma: 0.4, nSteps: 8000, seed: 2 });
  checkBool('S3', 'slower κ ⇒ higher AR(1)', slow.ar1 > sim.ar1);
}

// ─── S4: edge under mean reversion, none under random walk ──────────────
{
  const mr = simulatePairs({ kappa: 14, sigma: 0.4, entryZ: 2, exitZ: 0.5, nSteps: 1260, seed: 3 });
  const rw = simulatePairs({ kappa: 0.2, sigma: 0.4, entryZ: 2, exitZ: 0.5, nSteps: 1260, seed: 3 });
  checkBool('S4', 'mean-reverting: total P&L > 0', mr.totalPnl > 0, `pnl=${mr.totalPnlZ.toFixed(2)}z`);
  checkBool('S4', 'mean-reverting: win rate high (>0.6)', mr.winRate > 0.6, `wr=${mr.winRate.toFixed(2)}`);
  checkBool('S4', 'mean-reverting P&L ≫ random walk', mr.totalPnl > rw.totalPnl);
  checkBool('S4', 'mean-reverting trades back to the mean (Sharpe > 0)', mr.sharpe > 0);
  // average across several seeds: the edge is systematic, not luck
  let mrSum = 0, rwSum = 0;
  for (let s = 1; s <= 8; s++) { mrSum += simulatePairs({ kappa: 14, sigma: 0.4, nSteps: 1260, seed: s }).totalPnlZ; rwSum += simulatePairs({ kappa: 0.2, sigma: 0.4, nSteps: 1260, seed: s }).totalPnlZ; }
  checkBool('S4', 'mean P&L (8 seeds) positive & > random walk', mrSum / 8 > 0 && mrSum > rwSum, `mr=${(mrSum / 8).toFixed(2)} rw=${(rwSum / 8).toFixed(2)}`);
}

// ─── S5: entry-z controls trade frequency; structure ───────────────────
{
  const tight = simulatePairs({ kappa: 12, sigma: 0.4, entryZ: 1.2, exitZ: 0.3, nSteps: 1260, seed: 4 });
  const wide = simulatePairs({ kappa: 12, sigma: 0.4, entryZ: 2.8, exitZ: 0.3, nSteps: 1260, seed: 4 });
  checkBool('S5', 'lower entry-z ⇒ more trades', tight.nTrades > wide.nTrades, `${tight.nTrades} vs ${wide.nTrades}`);
  const sim = simulatePairs({ kappa: 10, sigma: 0.4, nSteps: 504, seed: 5 });
  checkBool('S5', 'has path, z, events, trades, totalPnl, winRate, sharpe, halfLife', ['path', 'z', 'events', 'trades', 'totalPnl', 'winRate', 'sharpe', 'halfLife', 'sigEq', 'ar1'].every((k) => k in sim));
  checkBool('S5', 'path length = nSteps', sim.path.length === 504);
  checkBool('S5', 'every trade has a defined P&L number', sim.trades.every((p) => typeof p === 'number' && isFinite(p)));
}

// ─── S6: determinism ───────────────────────────────────────────────────
{
  const a = simulatePairs({ kappa: 10, sigma: 0.4, nSteps: 504, seed: 42 });
  const b = simulatePairs({ kappa: 10, sigma: 0.4, nSteps: 504, seed: 42 });
  checkBool('S6', 'same seed ⇒ identical total P&L', a.totalPnl === b.totalPnl);
  checkBool('S6', 'different seed ⇒ different path', simulatePairs({ kappa: 10, sigma: 0.4, nSteps: 504, seed: 1 }).path.join(',') !== a.path.join(','));
}

// ─── Summary ───────────────────────────────────────────────────────────
const total = results.length, passed = results.filter((r) => r.ok).length, failed = results.filter((r) => !r.ok);
const bySection = {};
for (const r of results) { bySection[r.s] = bySection[r.s] || { t: 0, p: 0 }; bySection[r.s].t++; if (r.ok) bySection[r.s].p++; }
if (!QUIET) {
  console.log('\n=== Pairs-trading / statistical-arbitrage verification ===');
  for (const s of Object.keys(bySection).sort()) console.log(`  ${s}: ${bySection[s].p}/${bySection[s].t}${bySection[s].p === bySection[s].t ? ' ✓' : ' ✗'}`);
  console.log(`\nTotal: ${passed}/${total}`);
}
if (failed.length === 0) {
  if (!QUIET) console.log('All checks pass. Pairs sim matches OU mean-reversion identities + the trading edge logic.');
  process.exit(0);
} else {
  console.log(`\n${failed.length} failures:`);
  for (const f of failed.slice(0, 25)) console.log(`  [${f.s}] ${f.l}${f.d ? ': ' + f.d : (f.e !== undefined ? `: expected ${f.e}, got ${f.a}` : '')}`);
  process.exit(1);
}
