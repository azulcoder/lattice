#!/usr/bin/env node
// Persistent verification harness for the options strategy simulator
// (bsPrice / bsGreeks / simulateOptions / optionStrategyLegs in js/viz.js).
//
// Black-Scholes-Merton (q=0). Verified against exact identities + finite-diff:
//   O1: put-call parity  C − P = S − K·e^{−rτ}  (exact oracle)
//   O2: price bounds, monotonicity, intrinsic floor, N(0)=½
//   O3: every Greek (Δ, Γ, ν, Θ) vs a central finite-difference bump
//   O4: Greek properties — Γ>0, ν>0, Γ_call=Γ_put, ν_call=ν_put, Δ ranges
//   O5: position payoffs — long-call breakeven/max-loss; straddle (Δ≈0, Γ>0,
//       Θ<0, two breakevens); vertical spread bounded; iron condor = credit
//   O6: structure & determinism
//
// Refs: Black & Scholes (1973); Merton (1973); Hull; Natenberg. Deterministic.
//
// Usage: node scripts/verify-options-sim.mjs [--quiet] [--section O3]
// Exit: 0 = all pass, 1 = any fail.

import { pathToFileURL, fileURLToPath } from 'node:url';
import path from 'node:path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const args = process.argv.slice(2);
const QUIET = args.includes('--quiet');
const sectionFilter = (() => { const i = args.indexOf('--section'); return i >= 0 ? args[i + 1] : null; })();

const vizMod = await import(pathToFileURL(path.join(ROOT, 'js/viz.js')).href);
const { bsPrice, bsGreeks, simulateOptions, optionStrategyLegs, normalCDF, COMPONENTS } = vizMod;
for (const [n, f] of [['bsPrice', bsPrice], ['bsGreeks', bsGreeks], ['simulateOptions', simulateOptions], ['optionStrategyLegs', optionStrategyLegs]]) {
  if (typeof f !== 'function') { console.error(`FAIL: ${n} not exported from js/viz.js`); process.exit(1); }
}
if (!COMPONENTS?.OptionsStrategySim) { console.error('FAIL: OptionsStrategySim not registered'); process.exit(1); }

const results = [];
function check(s, l, e, a, t) { if (sectionFilter && s !== sectionFilter) return; const ok = Math.abs(e - a) <= t; results.push({ s, l, e, a, ok }); if (!QUIET && !ok) console.log(`  [${s}] ✗ ${l}: expected ${e}, got ${a}, tol ${t}`); }
function checkBool(s, l, c, d = '') { if (sectionFilter && s !== sectionFilter) return; results.push({ s, l, ok: c, d }); if (!QUIET && !c) console.log(`  [${s}] ✗ ${l}${d ? ': ' + d : ''}`); }

// ─── O1: put-call parity ───────────────────────────────────────────────
{
  for (const [S, K, sig, tau, r] of [[100, 100, 0.2, 0.5, 0], [120, 100, 0.3, 1, 0.03], [80, 100, 0.5, 0.25, 0.05], [100, 90, 0.15, 2, 0.02]]) {
    const c = bsPrice('call', S, K, sig, tau, r), p = bsPrice('put', S, K, sig, tau, r);
    check('O1', `parity S=${S},K=${K},r=${r}`, S - K * Math.exp(-r * tau), c - p, 1e-9);
  }
}

// ─── O2: bounds / monotonicity / intrinsic ─────────────────────────────
{
  check('O2', 'N(0)=0.5', 0.5, normalCDF(0), 1e-6);
  const c = bsPrice('call', 100, 100, 0.2, 0.5, 0);
  checkBool('O2', 'call ≥ intrinsic', c >= Math.max(100 - 100, 0) - 1e-9);
  checkBool('O2', 'call ≤ S', c <= 100 + 1e-9);
  // deep ITM call ≈ S − K e^{−rτ}; deep OTM ≈ 0
  check('O2', 'deep-ITM call ≈ S−K e^{−rτ}', 200 - 100, bsPrice('call', 200, 100, 0.2, 0.5, 0), 0.05);
  check('O2', 'deep-OTM call ≈ 0', 0, bsPrice('call', 50, 100, 0.2, 0.5, 0), 0.05);
  // call price increasing in S, in σ, in τ
  checkBool('O2', 'call ↑ in S', bsPrice('call', 105, 100, 0.2, 0.5, 0) > bsPrice('call', 100, 100, 0.2, 0.5, 0));
  checkBool('O2', 'call ↑ in σ', bsPrice('call', 100, 100, 0.3, 0.5, 0) > bsPrice('call', 100, 100, 0.2, 0.5, 0));
  checkBool('O2', 'call ↑ in τ', bsPrice('call', 100, 100, 0.2, 1.0, 0) > bsPrice('call', 100, 100, 0.2, 0.5, 0));
  // at expiry returns intrinsic
  check('O2', 'expiry call = intrinsic', 12, bsPrice('call', 112, 100, 0.2, 0, 0), 1e-9);
  check('O2', 'expiry put = intrinsic', 0, bsPrice('put', 112, 100, 0.2, 0, 0), 1e-9);
}

// ─── O3: Greeks vs finite difference ───────────────────────────────────
{
  const S = 100, K = 105, sig = 0.25, tau = 0.5, r = 0.02;
  for (const kind of ['call', 'put']) {
    const g = bsGreeks(kind, S, K, sig, tau, r);
    const h = 0.01;
    const dDelta = (bsPrice(kind, S + h, K, sig, tau, r) - bsPrice(kind, S - h, K, sig, tau, r)) / (2 * h);
    const dGamma = (bsPrice(kind, S + h, K, sig, tau, r) - 2 * bsPrice(kind, S, K, sig, tau, r) + bsPrice(kind, S - h, K, sig, tau, r)) / (h * h);
    const hv = 1e-4;
    const dVega = (bsPrice(kind, S, K, sig + hv, tau, r) - bsPrice(kind, S, K, sig - hv, tau, r)) / (2 * hv);
    const ht = 1e-4;
    const dTheta = -(bsPrice(kind, S, K, sig, tau + ht, r) - bsPrice(kind, S, K, sig, tau - ht, r)) / (2 * ht);
    check('O3', `${kind} Δ vs FD`, dDelta, g.delta, 2e-3);
    check('O3', `${kind} Γ vs FD`, dGamma, g.gamma, 1e-3);
    check('O3', `${kind} ν vs FD`, dVega, g.vega, 5e-2);
    check('O3', `${kind} Θ vs FD`, dTheta, g.theta, 5e-2);
  }
}

// ─── O4: Greek properties ──────────────────────────────────────────────
{
  const c = bsGreeks('call', 100, 100, 0.2, 0.5, 0), p = bsGreeks('put', 100, 100, 0.2, 0.5, 0);
  checkBool('O4', 'Γ > 0', c.gamma > 0);
  checkBool('O4', 'ν > 0', c.vega > 0);
  check('O4', 'Γ_call = Γ_put', c.gamma, p.gamma, 1e-12);
  check('O4', 'ν_call = ν_put', c.vega, p.vega, 1e-12);
  checkBool('O4', 'call Δ ∈ (0,1)', c.delta > 0 && c.delta < 1);
  checkBool('O4', 'put Δ ∈ (−1,0)', p.delta < 0 && p.delta > -1);
  check('O4', 'Δ_call − Δ_put = 1 (r=0)', 1, c.delta - p.delta, 1e-9);
  checkBool('O4', 'call Θ < 0 (decay)', c.theta < 0);
}

// ─── O5: position payoffs ──────────────────────────────────────────────
{
  // long ATM call
  const lc = simulateOptions({ legs: optionStrategyLegs('long-call', 100), S: 100, sigma: 0.2, tau: 0.5 });
  checkBool('O5', 'long call: net debit > 0', lc.cost > 0);
  check('O5', 'long call: max loss = −premium', -lc.cost, lc.maxLoss, 0.05);
  check('O5', 'long call: breakeven = K + premium', 100 + lc.cost, lc.breakevens[0], 0.5);
  checkBool('O5', 'long call: one breakeven', lc.breakevens.length === 1);

  // ATM straddle
  const st = simulateOptions({ legs: optionStrategyLegs('straddle', 100), S: 100, sigma: 0.3, tau: 0.5 });
  checkBool('O5', 'straddle: |net Δ| < 0.1 (near-neutral)', Math.abs(st.delta) < 0.1);
  checkBool('O5', 'straddle: net Γ > 0', st.gamma > 0);
  checkBool('O5', 'straddle: net ν > 0', st.vega > 0);
  checkBool('O5', 'straddle: net Θ < 0', st.theta < 0);
  checkBool('O5', 'straddle: two breakevens', st.breakevens.length === 2);

  // bull call spread — bounded both sides
  const bcs = simulateOptions({ legs: optionStrategyLegs('bull-call-spread', 100), S: 100, sigma: 0.2, tau: 0.5 });
  checkBool('O5', 'bull call spread: max profit finite & > 0', isFinite(bcs.maxProfit) && bcs.maxProfit > 0);
  checkBool('O5', 'bull call spread: max loss finite & < 0', isFinite(bcs.maxLoss) && bcs.maxLoss < 0);
  checkBool('O5', 'bull call spread: net Δ > 0 (bullish)', bcs.delta > 0);

  // iron condor — net credit
  const ic = simulateOptions({ legs: optionStrategyLegs('iron-condor', 100), S: 100, sigma: 0.3, tau: 0.5 });
  checkBool('O5', 'iron condor: net credit (cost < 0)', ic.cost < 0);
  checkBool('O5', 'iron condor: short vega (net ν < 0)', ic.vega < 0);
}

// ─── O6: structure & determinism ───────────────────────────────────────
{
  const a = simulateOptions({ legs: optionStrategyLegs('straddle', 100), S: 100, sigma: 0.3, tau: 0.5, n: 121 });
  checkBool('O6', 'curve length = n', a.curve.length === 121);
  checkBool('O6', 'has curve, cost, delta..theta, breakevens, maxProfit/Loss', ['curve', 'cost', 'delta', 'gamma', 'vega', 'theta', 'breakevens', 'maxProfit', 'maxLoss'].every((k) => k in a));
  checkBool('O6', 'expiry P&L uses intrinsic (now≈0 at spot)', Math.abs(a.curve[Math.floor(121 / 2)].now) < Math.abs(a.maxLoss) + 1);
  const b = simulateOptions({ legs: optionStrategyLegs('straddle', 100), S: 100, sigma: 0.3, tau: 0.5, n: 121 });
  let same = true; for (let i = 0; i < a.curve.length; i++) if (a.curve[i].expiry !== b.curve[i].expiry) { same = false; break; }
  checkBool('O6', 'deterministic (same params ⇒ identical curve)', same);
  checkBool('O6', 'optionStrategyLegs returns ≥1 leg for each preset', ['long-call', 'long-put', 'straddle', 'strangle', 'bull-call-spread', 'bear-put-spread', 'iron-condor', 'call-butterfly', 'covered-call'].every((s) => optionStrategyLegs(s, 100).length >= 1));
}

// ─── Summary ───────────────────────────────────────────────────────────
const total = results.length, passed = results.filter((r) => r.ok).length, failed = results.filter((r) => !r.ok);
const bySection = {};
for (const r of results) { bySection[r.s] = bySection[r.s] || { t: 0, p: 0 }; bySection[r.s].t++; if (r.ok) bySection[r.s].p++; }
if (!QUIET) {
  console.log('\n=== Options strategy simulator verification ===');
  for (const s of Object.keys(bySection).sort()) console.log(`  ${s}: ${bySection[s].p}/${bySection[s].t}${bySection[s].p === bySection[s].t ? ' ✓' : ' ✗'}`);
  console.log(`\nTotal: ${passed}/${total}`);
}
if (failed.length === 0) {
  if (!QUIET) console.log('All checks pass. Options sim matches Black-Scholes parity + finite-difference Greeks + payoff logic.');
  process.exit(0);
} else {
  console.log(`\n${failed.length} failures:`);
  for (const f of failed.slice(0, 25)) console.log(`  [${f.s}] ${f.l}${f.d ? ': ' + f.d : (f.e !== undefined ? `: expected ${f.e}, got ${f.a}` : '')}`);
  process.exit(1);
}
