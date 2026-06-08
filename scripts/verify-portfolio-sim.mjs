#!/usr/bin/env node
// Persistent verification harness for the portfolio-of-edges / correlation
// simulator (diversificationRatio / simulatePortfolio in js/viz.js).
//
// Equal-weight equicorrelation: D(N,ρ) = √(N/(1+(N−1)ρ)), Sharpe_port = S·D,
// ceiling D→1/√ρ as N→∞ (Markowitz mean-variance diversification). Checks:
//   P1: diversificationRatio — exact at ρ=0 (√N), ρ=1 (1), N=1 (1); monotone
//   P2: the 1/√ρ asymptote — D(large N, ρ) ≈ 1/√ρ
//   P3: portSharpe = S·D; monotone (↑ in N, ↓ in ρ)
//   P4: Monte-Carlo realized portfolio Sharpe ≈ analytic (LLN)
//   P5: the one-factor generator's realized correlation ≈ ρ
//   P6: diversification shrinks drawdown (portfolio median max-DD < single);
//       structure & determinism
//
// Refs: Markowitz (1952). Deterministic.
//
// Usage: node scripts/verify-portfolio-sim.mjs [--quiet] [--section P2]
// Exit: 0 = all pass, 1 = any fail.

import { pathToFileURL, fileURLToPath } from 'node:url';
import path from 'node:path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const args = process.argv.slice(2);
const QUIET = args.includes('--quiet');
const sectionFilter = (() => { const i = args.indexOf('--section'); return i >= 0 ? args[i + 1] : null; })();

const vizMod = await import(pathToFileURL(path.join(ROOT, 'js/viz.js')).href);
const { diversificationRatio, simulatePortfolio, COMPONENTS } = vizMod;
for (const [n, f] of [['diversificationRatio', diversificationRatio], ['simulatePortfolio', simulatePortfolio]]) {
  if (typeof f !== 'function') { console.error(`FAIL: ${n} not exported from js/viz.js`); process.exit(1); }
}
if (!COMPONENTS?.PortfolioEdgeSim) { console.error('FAIL: PortfolioEdgeSim not registered'); process.exit(1); }

const results = [];
function check(s, l, e, a, t) { if (sectionFilter && s !== sectionFilter) return; const ok = Math.abs(e - a) <= t; results.push({ s, l, e, a, ok }); if (!QUIET && !ok) console.log(`  [${s}] ✗ ${l}: expected ${e}, got ${a}, tol ${t}`); }
function checkBool(s, l, c, d = '') { if (sectionFilter && s !== sectionFilter) return; results.push({ s, l, ok: c, d }); if (!QUIET && !c) console.log(`  [${s}] ✗ ${l}${d ? ': ' + d : ''}`); }

// ─── P1: diversificationRatio identity ─────────────────────────────────
{
  check('P1', 'N=1 ⇒ 1', 1, diversificationRatio(1, 0.3), 1e-12);
  check('P1', 'ρ=0 ⇒ √N (N=4 ⇒ 2)', 2, diversificationRatio(4, 0), 1e-12);
  check('P1', 'ρ=0 ⇒ √N (N=9 ⇒ 3)', 3, diversificationRatio(9, 0), 1e-12);
  check('P1', 'ρ=1 ⇒ 1 (no diversification)', 1, diversificationRatio(10, 1), 1e-12);
  // exact formula spot-check: N=4, ρ=0.5 ⇒ √(4/(1+1.5)) = √1.6
  check('P1', 'N=4,ρ=0.5 ⇒ √1.6', Math.sqrt(1.6), diversificationRatio(4, 0.5), 1e-12);
  checkBool('P1', 'increasing in N', diversificationRatio(2, 0.3) < diversificationRatio(10, 0.3) && diversificationRatio(10, 0.3) < diversificationRatio(30, 0.3));
  checkBool('P1', 'decreasing in ρ', diversificationRatio(10, 0.1) > diversificationRatio(10, 0.5) && diversificationRatio(10, 0.5) > diversificationRatio(10, 0.9));
}

// ─── P2: 1/√ρ asymptote ─────────────────────────────────────────────────
{
  check('P2', 'D(1e6, 0.25) ≈ 1/√0.25 = 2', 2, diversificationRatio(1e6, 0.25), 1e-2);
  check('P2', 'D(1e6, 0.04) ≈ 1/√0.04 = 5', 5, diversificationRatio(1e6, 0.04), 2e-2);
  checkBool('P2', 'finite ceiling for ρ>0 (D always < 1/√ρ)', diversificationRatio(1e9, 0.25) <= 2 + 1e-6);
}

// ─── P3: portSharpe = S·D + monotonicity ────────────────────────────────
{
  const sim = simulatePortfolio({ nEdges: 6, sharpe: 0.8, rho: 0.2, nRuns: 1 });
  check('P3', 'portSharpe = S·D', 0.8 * diversificationRatio(6, 0.2), sim.portSharpe, 1e-12);
  check('P3', 'divRatio matches helper', diversificationRatio(6, 0.2), sim.divRatio, 1e-12);
  checkBool('P3', 'portSharpe ↑ with N', simulatePortfolio({ nEdges: 20, sharpe: 1, rho: 0.2, nRuns: 1 }).portSharpe > simulatePortfolio({ nEdges: 3, sharpe: 1, rho: 0.2, nRuns: 1 }).portSharpe);
  checkBool('P3', 'portSharpe ↓ with ρ', simulatePortfolio({ nEdges: 10, sharpe: 1, rho: 0.1, nRuns: 1 }).portSharpe > simulatePortfolio({ nEdges: 10, sharpe: 1, rho: 0.8, nRuns: 1 }).portSharpe);
  check('P3', 'asymptote = 1/√ρ', 1 / Math.sqrt(0.2), simulatePortfolio({ nEdges: 6, sharpe: 1, rho: 0.2, nRuns: 1 }).asymptote, 1e-9);
}

// ─── P4: Monte-Carlo realized Sharpe ≈ analytic ────────────────────────
{
  const sim = simulatePortfolio({ nEdges: 8, sharpe: 1, rho: 0.3, volAnnual: 0.5, nPeriods: 252, nRuns: 600, seed: 3 });
  checkBool('P4', 'realized portfolio Sharpe ≈ analytic (±20%)', Math.abs(sim.realizedPortSharpe - sim.portSharpe) / sim.portSharpe < 0.2, `real=${sim.realizedPortSharpe.toFixed(2)} vs ${sim.portSharpe.toFixed(2)}`);
  // a single edge (N=1) realises ≈ the input Sharpe
  const one = simulatePortfolio({ nEdges: 1, sharpe: 1, rho: 0, volAnnual: 0.5, nPeriods: 252, nRuns: 800, seed: 5 });
  checkBool('P4', 'N=1 realises ≈ input Sharpe (±20%)', Math.abs(one.realizedPortSharpe - 1) < 0.2, `real=${one.realizedPortSharpe.toFixed(2)}`);
}

// ─── P5: one-factor realized correlation ≈ ρ ───────────────────────────
{
  for (const rho of [0.0, 0.3, 0.7]) {
    const sim = simulatePortfolio({ nEdges: 2, sharpe: 0.5, rho, volAnnual: 0.5, nPeriods: 252, nRuns: 400, seed: 9 });
    check('P5', `realized corr ≈ ρ=${rho}`, rho, sim.realizedCorr, 0.06);
  }
}

// ─── P6: drawdown shrinks; structure & determinism ─────────────────────
{
  const sim = simulatePortfolio({ nEdges: 10, sharpe: 0.6, rho: 0.2, volAnnual: 0.6, nPeriods: 252, nRuns: 300, seed: 7 });
  checkBool('P6', 'portfolio median max-DD < single edge', sim.medianDDport < sim.medianDDsingle, `${(sim.medianDDport * 100).toFixed(0)}% vs ${(sim.medianDDsingle * 100).toFixed(0)}%`);
  checkBool('P6', 'has divRatio, portSharpe, asymptote, curve, realizedCorr', ['divRatio', 'portSharpe', 'asymptote', 'curve', 'realizedCorr', 'medianDDport', 'medianDDsingle'].every((k) => k in sim));
  checkBool('P6', 'curve length 50, monotone in n', sim.curve.length === 50 && sim.curve[49].mult > sim.curve[0].mult);
  const a = simulatePortfolio({ nEdges: 8, sharpe: 1, rho: 0.3, nPeriods: 100, nRuns: 100, seed: 42 });
  const b = simulatePortfolio({ nEdges: 8, sharpe: 1, rho: 0.3, nPeriods: 100, nRuns: 100, seed: 42 });
  checkBool('P6', 'deterministic (same seed ⇒ same realized Sharpe)', a.realizedPortSharpe === b.realizedPortSharpe);
}

// ─── Summary ───────────────────────────────────────────────────────────
const total = results.length, passed = results.filter((r) => r.ok).length, failed = results.filter((r) => !r.ok);
const bySection = {};
for (const r of results) { bySection[r.s] = bySection[r.s] || { t: 0, p: 0 }; bySection[r.s].t++; if (r.ok) bySection[r.s].p++; }
if (!QUIET) {
  console.log('\n=== Portfolio-of-edges / correlation verification ===');
  for (const s of Object.keys(bySection).sort()) console.log(`  ${s}: ${bySection[s].p}/${bySection[s].t}${bySection[s].p === bySection[s].t ? ' ✓' : ' ✗'}`);
  console.log(`\nTotal: ${passed}/${total}`);
}
if (failed.length === 0) {
  if (!QUIET) console.log('All checks pass. Portfolio sim matches the diversification identity + 1/√ρ ceiling + MC.');
  process.exit(0);
} else {
  console.log(`\n${failed.length} failures:`);
  for (const f of failed.slice(0, 25)) console.log(`  [${f.s}] ${f.l}${f.d ? ': ' + f.d : (f.e !== undefined ? `: expected ${f.e}, got ${f.a}` : '')}`);
  process.exit(1);
}
