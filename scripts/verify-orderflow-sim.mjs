#!/usr/bin/env node
// Persistent verification harness for the order-flow / CVD simulator
// (simulateOrderFlow / linSlope in js/viz.js).
//
// Δpₜ = λ(1−a)·δₜ + noise; CVD = Σδ. Checks the order-flow primitives:
//   O1: linSlope — recovers a known linear slope; flat ⇒ 0
//   O2: OLS effective impact λ̂ ≈ λ(1−a) (Kyle-λ recovered from Δp on δ);
//       monotone decreasing in absorption
//   O3: no absorption ⇒ flow CONFIRMS price (high corr, verdict 'confirmed',
//       no divergence); net CVD sign tracks the flow trend
//   O4: heavy absorption ⇒ DIVERGENCE (verdict 'absorption', low corr,
//       effImpact ≪ λ), with the right bearish/bullish side
//   O5: corr(Δp, δ) decreases as absorption rises; flat flow ⇒ 'choppy'
//   O6: structure & determinism
//
// Refs: Kyle 1985 (λ); Easley-López de Prado-O'Hara (VPIN). Deterministic.
//
// Usage: node scripts/verify-orderflow-sim.mjs [--quiet] [--section O2]
// Exit: 0 = all pass, 1 = any fail.

import { pathToFileURL, fileURLToPath } from 'node:url';
import path from 'node:path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const args = process.argv.slice(2);
const QUIET = args.includes('--quiet');
const sectionFilter = (() => { const i = args.indexOf('--section'); return i >= 0 ? args[i + 1] : null; })();

const vizMod = await import(pathToFileURL(path.join(ROOT, 'js/viz.js')).href);
const { simulateOrderFlow, linSlope, COMPONENTS } = vizMod;
for (const [n, f] of [['simulateOrderFlow', simulateOrderFlow], ['linSlope', linSlope]]) {
  if (typeof f !== 'function') { console.error(`FAIL: ${n} not exported from js/viz.js`); process.exit(1); }
}
if (!COMPONENTS?.OrderFlowCVDSim) { console.error('FAIL: OrderFlowCVDSim not registered'); process.exit(1); }

const results = [];
function check(s, l, e, a, t) { if (sectionFilter && s !== sectionFilter) return; const ok = Math.abs(e - a) <= t; results.push({ s, l, e, a, ok }); if (!QUIET && !ok) console.log(`  [${s}] ✗ ${l}: expected ${e}, got ${a}, tol ${t}`); }
function checkBool(s, l, c, d = '') { if (sectionFilter && s !== sectionFilter) return; results.push({ s, l, ok: c, d }); if (!QUIET && !c) console.log(`  [${s}] ✗ ${l}${d ? ': ' + d : ''}`); }

// ─── O1: linSlope ──────────────────────────────────────────────────────
{
  check('O1', 'slope of 0,2,4,6 = 2', 2, linSlope([0, 2, 4, 6]), 1e-9);
  check('O1', 'slope of flat = 0', 0, linSlope([5, 5, 5, 5]), 1e-9);
  check('O1', 'slope of decreasing = −1', -1, linSlope([3, 2, 1, 0]), 1e-9);
}

// ─── O2: effective impact λ̂ ≈ λ(1−a) ───────────────────────────────────
{
  for (const a of [0, 0.3, 0.6, 0.9]) {
    const sim = simulateOrderFlow({ lambda: 2, flowTrend: 0.3, absorption: a, noise: 0.3, nBars: 600, seed: 1 });
    check('O2', `λ̂ ≈ λ(1−a) at a=${a}`, 2 * (1 - a), sim.lambdaHat, 0.2);
  }
  const lo = simulateOrderFlow({ lambda: 2, flowTrend: 0.3, absorption: 0.1, noise: 0.3, nBars: 400, seed: 2 });
  const hi = simulateOrderFlow({ lambda: 2, flowTrend: 0.3, absorption: 0.8, noise: 0.3, nBars: 400, seed: 2 });
  checkBool('O2', 'λ̂ decreases with absorption', hi.lambdaHat < lo.lambdaHat);
}

// ─── O3: no absorption ⇒ flow confirms price ───────────────────────────
{
  const sim = simulateOrderFlow({ lambda: 1.5, flowTrend: 0.3, absorption: 0, noise: 0.4, nBars: 80, seed: 4 });
  checkBool('O3', 'verdict = confirmed', sim.verdict === 'confirmed', `got ${sim.verdict}`);
  checkBool('O3', 'no divergence', sim.divergence === false);
  checkBool('O3', 'high corr(Δp, δ) (>0.6)', sim.corr > 0.6, `corr=${sim.corr.toFixed(2)}`);
  checkBool('O3', 'net CVD > 0 for positive flow trend', sim.netCvd > 0);
  const down = simulateOrderFlow({ lambda: 1.5, flowTrend: -0.3, absorption: 0, noise: 0.4, nBars: 80, seed: 4 });
  checkBool('O3', 'net CVD < 0 for negative flow trend', down.netCvd < 0);
}

// ─── O4: heavy absorption ⇒ divergence ─────────────────────────────────
{
  const bear = simulateOrderFlow({ lambda: 1.5, flowTrend: 0.35, absorption: 0.9, noise: 0.4, nBars: 80, seed: 5 });
  checkBool('O4', 'verdict = absorption', bear.verdict === 'absorption', `got ${bear.verdict}`);
  checkBool('O4', 'divergence flagged', bear.divergence === true);
  checkBool('O4', 'effImpact ≪ λ', Math.abs(bear.effImpact) < 0.4 * bear.lambda);
  checkBool('O4', 'CVD up + absorbed ⇒ bearish side', bear.absorptionSide === 'bearish');
  const bull = simulateOrderFlow({ lambda: 1.5, flowTrend: -0.35, absorption: 0.9, noise: 0.4, nBars: 80, seed: 5 });
  checkBool('O4', 'CVD down + absorbed ⇒ bullish side', bull.absorptionSide === 'bullish');
}

// ─── O5: corr falls with absorption; flat flow ⇒ choppy ────────────────
{
  const lo = simulateOrderFlow({ lambda: 1.5, flowTrend: 0.3, absorption: 0.0, noise: 0.5, nBars: 200, seed: 6 });
  const hi = simulateOrderFlow({ lambda: 1.5, flowTrend: 0.3, absorption: 0.95, noise: 0.5, nBars: 200, seed: 6 });
  checkBool('O5', 'corr(Δp,δ) decreases as absorption rises', hi.corr < lo.corr);
  const flat = simulateOrderFlow({ lambda: 1.5, flowTrend: 0, absorption: 0, noise: 0.5, nBars: 80, seed: 7 });
  checkBool('O5', 'flat flow trend ⇒ choppy or non-divergent', flat.verdict === 'choppy' || !flat.divergence);
}

// ─── O6: structure & determinism ───────────────────────────────────────
{
  const a = simulateOrderFlow({ lambda: 1.5, flowTrend: 0.3, absorption: 0.5, noise: 0.5, nBars: 80, seed: 9 });
  checkBool('O6', 'arrays length = nBars', a.price.length === 80 && a.cvd.length === 80 && a.delta.length === 80);
  checkBool('O6', 'has lambdaHat, corr, effImpact, verdict, divergence, netCvd', ['lambdaHat', 'corr', 'effImpact', 'verdict', 'divergence', 'netCvd', 'absorptionSide'].every((k) => k in a));
  checkBool('O6', 'CVD is cumulative sum of delta', Math.abs(a.cvd[a.cvd.length - 1] - a.delta.reduce((x, y) => x + y, 0)) < 1e-9);
  checkBool('O6', "verdict ∈ {confirmed,absorption,choppy}", ['confirmed', 'absorption', 'choppy'].includes(a.verdict));
  const b = simulateOrderFlow({ lambda: 1.5, flowTrend: 0.3, absorption: 0.5, noise: 0.5, nBars: 80, seed: 9 });
  checkBool('O6', 'deterministic (same seed ⇒ same CVD)', a.cvd.join(',') === b.cvd.join(','));
  checkBool('O6', 'different seed ⇒ different path', simulateOrderFlow({ lambda: 1.5, flowTrend: 0.3, absorption: 0.5, noise: 0.5, nBars: 80, seed: 1 }).cvd.join(',') !== a.cvd.join(','));
}

// ─── Summary ───────────────────────────────────────────────────────────
const total = results.length, passed = results.filter((r) => r.ok).length, failed = results.filter((r) => !r.ok);
const bySection = {};
for (const r of results) { bySection[r.s] = bySection[r.s] || { t: 0, p: 0 }; bySection[r.s].t++; if (r.ok) bySection[r.s].p++; }
if (!QUIET) {
  console.log('\n=== Order-flow / CVD simulator verification ===');
  for (const s of Object.keys(bySection).sort()) console.log(`  ${s}: ${bySection[s].p}/${bySection[s].t}${bySection[s].p === bySection[s].t ? ' ✓' : ' ✗'}`);
  console.log(`\nTotal: ${passed}/${total}`);
}
if (failed.length === 0) {
  if (!QUIET) console.log('All checks pass. Order-flow sim matches the Kyle-λ impact + CVD absorption/divergence logic.');
  process.exit(0);
} else {
  console.log(`\n${failed.length} failures:`);
  for (const f of failed.slice(0, 25)) console.log(`  [${f.s}] ${f.l}${f.d ? ': ' + f.d : (f.e !== undefined ? `: expected ${f.e}, got ${f.a}` : '')}`);
  process.exit(1);
}
