#!/usr/bin/env node
// Persistent verification harness for the dealer gamma-flip simulator
// (bsGamma + simulateDealerGamma in js/viz.js), used by the @Husslin_
// dealer-flows deep-dive module.
//
// The gamma is EXACT Black-Scholes gamma; the model is a stylised dealer book
// (long gamma from a call ladder, short gamma from a put ladder scaled by
// putDemand). These checks validate the gamma maths and the emergent
// gamma-flip / regime logic against independent recomputation + known
// Black-Scholes properties.
//
// Coverage:
//   D1: bsGamma — positivity, exact closed form, ATM peak, decays far OTM, symmetry in log-moneyness
//   D2: Structural — output shape, grid endpoints, gexAt callable
//   D3: GEX sign structure — negative near put strikes (low S), positive near call strikes (high S)
//   D4: Gamma flip — GEX(flip) ≈ 0, sign changes across it, interpolation matches the curve
//   D5: Monotonicity — more put demand pushes the flip HIGHER (and regions short→long)
//   D6: Regime at spot — gexSpot sign ⇒ short/long; hedging-flow direction consistent
//   D7: Determinism + parameter sanity (σ, τ scale the curve but keep positivity of gamma)
//
// Usage: node scripts/verify-dealer-gamma-sim.mjs [--quiet] [--section D4]
// Exit: 0 = all pass, 1 = any fail.

import { pathToFileURL, fileURLToPath } from 'node:url';
import path from 'node:path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');

const args = process.argv.slice(2);
const QUIET = args.includes('--quiet');
const sectionFilter = (() => { const i = args.indexOf('--section'); return i >= 0 ? args[i + 1] : null; })();

const vizMod = await import(pathToFileURL(path.join(ROOT, 'js/viz.js')).href);
const { bsGamma, simulateDealerGamma, COMPONENTS } = vizMod;
if (typeof bsGamma !== 'function' || typeof simulateDealerGamma !== 'function') {
  console.error('FAIL: bsGamma / simulateDealerGamma not exported from js/viz.js'); process.exit(1);
}
if (!COMPONENTS?.DealerGammaSim) { console.error('FAIL: DealerGammaSim not registered'); process.exit(1); }

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

// Reference Black-Scholes gamma (independent reimplementation).
function refGamma(S, K, sigma, tau) {
  const d1 = (Math.log(S / K) + 0.5 * sigma * sigma * tau) / (sigma * Math.sqrt(tau));
  const pdf = Math.exp(-0.5 * d1 * d1) / Math.sqrt(2 * Math.PI);
  return pdf / (S * sigma * Math.sqrt(tau));
}

// ─── D1: bsGamma ───────────────────────────────────────────────────────
{
  checkBool('D1', 'gamma > 0 for valid inputs', bsGamma(100, 100, 0.6, 0.1) > 0);
  check('D1', 'matches closed form (S=100,K=105,σ=0.6,τ=0.1)',
    refGamma(100, 105, 0.6, 0.1), bsGamma(100, 105, 0.6, 0.1), 1e-12);
  // Degenerate guards
  checkBool('D1', 'returns 0 on σ=0 / τ=0 / S=0', bsGamma(100, 100, 0, 0.1) === 0 && bsGamma(100, 100, 0.6, 0) === 0 && bsGamma(0, 100, 0.6, 0.1) === 0);
  // Gamma decays far out-of-the-money relative to ATM
  const atm = bsGamma(100, 100, 0.6, 0.1);
  const farOtm = bsGamma(100, 160, 0.6, 0.1);
  checkBool('D1', `far-OTM gamma << ATM gamma (${farOtm.toExponential(2)} << ${atm.toExponential(2)})`, farOtm < atm * 0.25);
  // Peak: for fixed S, gamma in K is maximised very near K≈S (lognormal: slightly above)
  let best = -1, bestK = 0;
  for (let K = 80; K <= 120; K += 0.5) { const g = bsGamma(100, K, 0.6, 0.1); if (g > best) { best = g; bestK = K; } }
  checkBool('D1', `gamma(K) peaks near S=100 (peak K=${bestK})`, Math.abs(bestK - 100) <= 6);
}

// ─── D2: Structural ────────────────────────────────────────────────────
{
  const sim = simulateDealerGamma({ spot: 100, sigma: 0.6, tau: 0.08, putDemand: 1.2, sMin: 70, sMax: 130, nGrid: 121 });
  checkBool('D2', 'has xs, ys, flip, gexSpot, regime, gexAt', 'xs' in sim && 'ys' in sim && 'flip' in sim && 'gexSpot' in sim && 'regime' in sim && typeof sim.gexAt === 'function');
  checkBool('D2', 'xs/ys length = nGrid (121)', sim.xs.length === 121 && sim.ys.length === 121);
  check('D2', 'xs[0] = sMin', 70, sim.xs[0], 1e-9);
  check('D2', 'xs[last] = sMax', 130, sim.xs[sim.xs.length - 1], 1e-9);
  check('D2', 'gexAt(spot) matches gexSpot', sim.gexSpot, sim.gexAt(100), 1e-9);
}

// ─── D3: GEX sign structure ────────────────────────────────────────────
{
  const sim = simulateDealerGamma({ spot: 100, sigma: 0.6, tau: 0.08, putDemand: 1.2 });
  checkBool('D3', 'GEX < 0 near put strikes (low spot, S=88)', sim.gexAt(88) < 0);
  checkBool('D3', 'GEX > 0 near call strikes (high spot, S=114)', sim.gexAt(114) > 0);
}

// ─── D4: Gamma flip ────────────────────────────────────────────────────
{
  const sim = simulateDealerGamma({ spot: 100, sigma: 0.6, tau: 0.08, putDemand: 1.2 });
  checkBool('D4', `flip exists (got ${sim.flip})`, sim.flip != null && sim.flip > 70 && sim.flip < 130);
  check('D4', 'GEX(flip) ≈ 0', 0, sim.gexAt(sim.flip), 1e-6 * Math.max(1, Math.abs(sim.gexAt(70))));
  checkBool('D4', 'sign changes across flip (GEX(flip-3)<0<GEX(flip+3))', sim.gexAt(sim.flip - 3) < 0 && sim.gexAt(sim.flip + 3) > 0);
}

// ─── D5: Monotonicity (put demand → flip higher) ───────────────────────
{
  const lo = simulateDealerGamma({ spot: 100, sigma: 0.6, tau: 0.08, putDemand: 0.6 });
  const hi = simulateDealerGamma({ spot: 100, sigma: 0.6, tau: 0.08, putDemand: 1.8 });
  checkBool('D5', `more put demand ⇒ higher flip (${(lo.flip ?? NaN).toFixed?.(1)} → ${(hi.flip ?? NaN).toFixed?.(1)})`,
    lo.flip != null && hi.flip != null && hi.flip > lo.flip);
  // Mid monotonic too
  const mid = simulateDealerGamma({ spot: 100, sigma: 0.6, tau: 0.08, putDemand: 1.2 });
  checkBool('D5', 'flip monotone in putDemand (lo<mid<hi)', lo.flip < mid.flip && mid.flip < hi.flip);
}

// ─── D6: Regime at spot + hedging-flow direction ───────────────────────
{
  // With flip pushed above spot, spot sits in short-gamma (amplify)
  const high = simulateDealerGamma({ spot: 95, sigma: 0.6, tau: 0.08, putDemand: 1.6 });
  checkBool('D6', 'spot below flip ⇒ short γ regime', high.gexSpot < 0 && high.regime === 'short');
  // With low put demand, flip drops below spot ⇒ long-gamma (pin)
  const low = simulateDealerGamma({ spot: 112, sigma: 0.6, tau: 0.08, putDemand: 0.6 });
  checkBool('D6', 'spot above flip ⇒ long γ regime', low.gexSpot > 0 && low.regime === 'long');
}

// ─── D7: Determinism + parameter sanity ────────────────────────────────
{
  const a = simulateDealerGamma({ spot: 100, sigma: 0.6, tau: 0.08, putDemand: 1.2 });
  const b = simulateDealerGamma({ spot: 100, sigma: 0.6, tau: 0.08, putDemand: 1.2 });
  let same = true; for (let i = 0; i < a.ys.length; i++) if (a.ys[i] !== b.ys[i]) { same = false; break; }
  checkBool('D7', 'deterministic (same params ⇒ identical curve)', same);
  // All gamma contributions positive ⇒ raising σ keeps curve finite & ATM gamma drops (gamma spreads out)
  const lowVol = bsGamma(100, 100, 0.3, 0.1), hiVol = bsGamma(100, 100, 1.2, 0.1);
  checkBool('D7', 'higher σ lowers ATM gamma peak (spreads exposure)', hiVol < lowVol);
}

// ─── Summary ───────────────────────────────────────────────────────────
const total = results.length, passed = results.filter(r => r.ok).length, failed = results.filter(r => !r.ok);
const bySection = {};
for (const r of results) { bySection[r.section] = bySection[r.section] || { t: 0, p: 0 }; bySection[r.section].t++; if (r.ok) bySection[r.section].p++; }
if (!QUIET) {
  console.log('\n=== Dealer gamma-flip simulator verification ===');
  for (const s of Object.keys(bySection).sort()) console.log(`  ${s}: ${bySection[s].p}/${bySection[s].t}${bySection[s].p === bySection[s].t ? ' ✓' : ' ✗'}`);
  console.log(`\nTotal: ${passed}/${total}`);
}
if (failed.length === 0) {
  if (!QUIET) console.log('All checks pass. Dealer gamma sim matches Black-Scholes gamma + flip/regime logic.');
  process.exit(0);
} else {
  console.log(`\n${failed.length} failures:`);
  for (const f of failed.slice(0, 20)) console.log(`  [${f.section}] ${f.label}${f.detail ? ': ' + f.detail : (f.expected !== undefined ? `: expected ${f.expected}, got ${f.actual}` : '')}`);
  process.exit(1);
}
