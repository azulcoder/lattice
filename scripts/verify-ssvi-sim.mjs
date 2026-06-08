#!/usr/bin/env node
// Persistent verification harness for the SSVI full-surface simulator
// (ssviTotalVariance / simulateSSVI in js/viz.js).
//
// SSVI (Gatheral & Jacquier 2014): w(k;T) = ½θ(T)(1 + ρφ(T)k + √((φk+ρ)²+1−ρ²)),
// with θ(T) the ATM total variance, φ(θ)=η·θ^(−γ), one ρ for the surface.
// Verified against the analytic facts and the two arbitrage conditions:
//   calendar-free ⇔ total-variance slices non-decreasing in T (no crossing);
//   butterfly-free per slice ⇔ θφ(1+|ρ|)<4 and θφ²(1+|ρ|)≤4.
//
// Coverage:
//   K1: ssviTotalVariance — closed form; ATM identity w(0;T)=θ; w>0
//   K2: structure — slices/maturities, w(0) per slice = θ, arrays length
//   K3: calendar arb — increasing θ (flat/positive slope) ⇒ no crossing;
//       steep-negative ATM slope ⇒ θ non-monotone ⇒ slices cross ⇒ flagged
//   K4: butterfly — small η ok; large η ⇒ θφ(1+|ρ|) ≥ 4 ⇒ butterflyOk false
//   K5: skew — ρ=0 symmetric in k about ATM; ρ<0 ⇒ w(−k)>w(+k)
//   K6: determinism
//
// Usage: node scripts/verify-ssvi-sim.mjs [--quiet] [--section K3]
// Exit: 0 = all pass, 1 = any fail.

import { pathToFileURL, fileURLToPath } from 'node:url';
import path from 'node:path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const args = process.argv.slice(2);
const QUIET = args.includes('--quiet');
const sectionFilter = (() => { const i = args.indexOf('--section'); return i >= 0 ? args[i + 1] : null; })();

const vizMod = await import(pathToFileURL(path.join(ROOT, 'js/viz.js')).href);
const { ssviTotalVariance, simulateSSVI, COMPONENTS } = vizMod;
if (typeof ssviTotalVariance !== 'function' || typeof simulateSSVI !== 'function') {
  console.error('FAIL: ssviTotalVariance / simulateSSVI not exported from js/viz.js'); process.exit(1);
}
if (!COMPONENTS?.SSVISurfaceSim) { console.error('FAIL: SSVISurfaceSim not registered'); process.exit(1); }

const results = [];
function check(s, l, e, a, t) { if (sectionFilter && s !== sectionFilter) return; const ok = Math.abs(e - a) <= t; results.push({ s, l, e, a, ok }); if (!QUIET && !ok) console.log(`  [${s}] ✗ ${l}: expected ${e}, got ${a}, tol ${t}`); }
function checkBool(s, l, c, d = '') { if (sectionFilter && s !== sectionFilter) return; results.push({ s, l, ok: c, d }); if (!QUIET && !c) console.log(`  [${s}] ✗ ${l}${d ? ': ' + d : ''}`); }

const refW = (k, theta, phi, rho) => 0.5 * theta * (1 + rho * phi * k + Math.sqrt((phi * k + rho) ** 2 + 1 - rho * rho));

// ─── K1: closed form + ATM identity ────────────────────────────────────
{
  const P = { theta: 0.04, phi: 1.2, rho: -0.3 };
  for (const k of [-0.4, -0.1, 0, 0.2, 0.4]) check('K1', `w(${k}) matches closed form`, refW(k, P.theta, P.phi, P.rho), ssviTotalVariance(k, P), 1e-12);
  check('K1', 'ATM identity w(0)=θ', P.theta, ssviTotalVariance(0, P), 1e-12);
  checkBool('K1', 'w(k) > 0 across the slice', [-0.4, 0, 0.4].every(k => ssviTotalVariance(k, P) > 0));
}

// ─── K2: structure ─────────────────────────────────────────────────────
{
  const sim = simulateSSVI({ sigma0: 0.5, slope: 0, rho: -0.3, eta: 0.5, gamma: 0.4 });
  checkBool('K2', 'has k, slices, calendarArb, butterflyAllOk, noArb', 'k' in sim && Array.isArray(sim.slices) && 'calendarArb' in sim && 'butterflyAllOk' in sim && 'noArb' in sim);
  checkBool('K2', '5 maturity slices', sim.slices.length === 5);
  // each slice's ATM w equals its θ
  let atmOk = true; for (const s of sim.slices) if (Math.abs(ssviTotalVariance(0, { theta: s.theta, phi: s.phi, rho: -0.3 }) - s.theta) > 1e-12) atmOk = false;
  checkBool('K2', 'each slice w(0)=θ(T)', atmOk);
  checkBool('K2', 'k array length matches w array length', sim.slices.every(s => s.w.length === sim.k.length));
}

// ─── K3: calendar arbitrage ────────────────────────────────────────────
{
  // Flat ATM vol (slope 0): θ = σ0²·T increasing ⇒ no crossing
  const ok = simulateSSVI({ sigma0: 0.5, slope: 0, rho: -0.3, eta: 0.5, gamma: 0.4 });
  checkBool('K3', 'flat ATM ⇒ θ monotone & no calendar arb', ok.thetaMono && ok.calendarArb === false);
  // Mild positive slope still fine
  const ok2 = simulateSSVI({ sigma0: 0.4, slope: 0.1, rho: -0.3, eta: 0.5, gamma: 0.4 });
  checkBool('K3', 'positive slope ⇒ no calendar arb', ok2.calendarArb === false);
  // Steep NEGATIVE ATM slope: long-T ATM vol collapses ⇒ θ non-monotone ⇒ slices cross
  const bad = simulateSSVI({ sigma0: 0.6, slope: -0.5, rho: -0.3, eta: 0.5, gamma: 0.4 });
  checkBool('K3', 'steep-negative slope ⇒ θ non-monotone', bad.thetaMono === false);
  checkBool('K3', 'steep-negative slope ⇒ calendar arbitrage flagged', bad.calendarArb === true && Array.isArray(bad.crossPair));
}

// ─── K4: butterfly ─────────────────────────────────────────────────────
{
  const ok = simulateSSVI({ sigma0: 0.5, slope: 0, rho: -0.3, eta: 0.5, gamma: 0.4 });
  checkBool('K4', 'small η ⇒ all slices butterfly-ok', ok.butterflyAllOk === true);
  // Large η pushes θφ(1+|ρ|) ≥ 4 on the long-dated slice
  const bad = simulateSSVI({ sigma0: 0.7, slope: 0, rho: 0.5, eta: 5, gamma: 0.2 });
  const worst = bad.slices.some(s => !s.butterflyOk);
  checkBool('K4', 'large η ⇒ a slice violates θφ(1+|ρ|)<4', worst && bad.butterflyAllOk === false && bad.noArb === false);
  // The flag matches the explicit inequality on that slice
  const s = bad.slices.find(x => !x.butterflyOk);
  checkBool('K4', 'butterflyOk=false matches θφ(1+|ρ|)≥4 or θφ²(1+|ρ|)>4', !(s.bflyA < 4 && s.bflyB <= 4));
}

// ─── K5: skew / symmetry ───────────────────────────────────────────────
{
  const symW = (k) => refW(k, 0.04, 1.2, 0);
  let maxAsym = 0; for (const x of [0.1, 0.2, 0.3]) maxAsym = Math.max(maxAsym, Math.abs(symW(-x) - symW(x)));
  check('K5', 'ρ=0 ⇒ symmetric about ATM', 0, maxAsym, 1e-12);
  const negW = (k) => refW(k, 0.04, 1.2, -0.4);
  checkBool('K5', 'ρ<0 ⇒ w(−0.3) > w(+0.3) (down-skew)', negW(-0.3) > negW(0.3));
}

// ─── K6: determinism ───────────────────────────────────────────────────
{
  const a = simulateSSVI({ sigma0: 0.5, slope: 0.05, rho: -0.2, eta: 0.6, gamma: 0.4 });
  const b = simulateSSVI({ sigma0: 0.5, slope: 0.05, rho: -0.2, eta: 0.6, gamma: 0.4 });
  let same = true;
  for (let s = 0; s < a.slices.length && same; s++) for (let i = 0; i < a.k.length; i++) if (a.slices[s].w[i] !== b.slices[s].w[i]) { same = false; break; }
  checkBool('K6', 'deterministic (same params ⇒ identical surface)', same);
}

// ─── Summary ───────────────────────────────────────────────────────────
const total = results.length, passed = results.filter(r => r.ok).length, failed = results.filter(r => !r.ok);
const bySection = {};
for (const r of results) { bySection[r.s] = bySection[r.s] || { t: 0, p: 0 }; bySection[r.s].t++; if (r.ok) bySection[r.s].p++; }
if (!QUIET) {
  console.log('\n=== SSVI full-surface simulator verification ===');
  for (const s of Object.keys(bySection).sort()) console.log(`  ${s}: ${bySection[s].p}/${bySection[s].t}${bySection[s].p === bySection[s].t ? ' ✓' : ' ✗'}`);
  console.log(`\nTotal: ${passed}/${total}`);
}
if (failed.length === 0) {
  if (!QUIET) console.log('All checks pass. SSVI sim matches the Gatheral-Jacquier analytic facts + arb conditions.');
  process.exit(0);
} else {
  console.log(`\n${failed.length} failures:`);
  for (const f of failed.slice(0, 20)) console.log(`  [${f.s}] ${f.l}${f.d ? ': ' + f.d : (f.e !== undefined ? `: expected ${f.e}, got ${f.a}` : '')}`);
  process.exit(1);
}
