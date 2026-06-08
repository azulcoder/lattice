#!/usr/bin/env node
// Persistent verification harness for the raw-SVI volatility-surface simulator
// (sviTotalVariance / simulateVolSurface in js/viz.js).
//
// Raw SVI (Gatheral): w(k) = a + b·(ρ(k−m) + √((k−m)² + σ²)), total implied
// variance; σ_BS(k) = √(w/T). Verified against the exact analytic facts of the
// parameterisation (Gatheral 2006; Gatheral & Jacquier 2014, Quant. Finance
// 14(1):59–71).
//
// Coverage:
//   S1: sviTotalVariance — exact closed form
//   S2: minimum total variance = a + b·σ·√(1−ρ²) at k* = m − ρσ/√(1−ρ²)
//       (matches the grid argmin)
//   S3: wing slopes → b(1+ρ) (right) and b(1−ρ) (left) as |k|→∞
//   S4: skew — ρ=0 ⇒ symmetric about k=m; ρ<0 ⇒ higher variance on the
//       low-strike (left) wing; ρ>0 ⇒ higher on the right
//   S5: IV = √(w/T) positive where w>0; raising T lowers σ_BS at fixed w
//   S6: arbitrage flags — w_min<0 ⇒ arbWMin false; b(1+|ρ|)>2 ⇒ arbWings false
//   S7: structural shape (output arrays, determinism)
//
// Usage: node scripts/verify-vol-surface-sim.mjs [--quiet] [--section S2]
// Exit: 0 = all pass, 1 = any fail.

import { pathToFileURL, fileURLToPath } from 'node:url';
import path from 'node:path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const args = process.argv.slice(2);
const QUIET = args.includes('--quiet');
const sectionFilter = (() => { const i = args.indexOf('--section'); return i >= 0 ? args[i + 1] : null; })();

const vizMod = await import(pathToFileURL(path.join(ROOT, 'js/viz.js')).href);
const { sviTotalVariance, simulateVolSurface, COMPONENTS } = vizMod;
if (typeof sviTotalVariance !== 'function' || typeof simulateVolSurface !== 'function') {
  console.error('FAIL: sviTotalVariance / simulateVolSurface not exported from js/viz.js'); process.exit(1);
}
if (!COMPONENTS?.VolSurfaceSVISim) { console.error('FAIL: VolSurfaceSVISim not registered'); process.exit(1); }

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

const P = { a: 0.01, b: 0.1, rho: -0.4, m: 0.0, sigma: 0.15 };
const refW = (k, { a, b, rho, m, sigma }) => a + b * (rho * (k - m) + Math.sqrt((k - m) ** 2 + sigma * sigma));

// ─── S1: closed form ───────────────────────────────────────────────────
{
  for (const k of [-0.5, -0.1, 0, 0.1, 0.5]) check('S1', `w(${k}) matches closed form`, refW(k, P), sviTotalVariance(k, P), 1e-12);
  checkBool('S1', 'w > 0 for the default arb-free slice', sviTotalVariance(0, P) > 0);
}

// ─── S2: minimum total variance ────────────────────────────────────────
{
  const sim = simulateVolSurface({ ...P, T: 0.25, kMin: -1.2, kMax: 1.2, n: 4001 });
  const wMinFormula = P.a + P.b * P.sigma * Math.sqrt(1 - P.rho * P.rho);
  const kStarFormula = P.m - P.rho * P.sigma / Math.sqrt(1 - P.rho * P.rho);
  check('S2', 'w_min = a + bσ√(1−ρ²)', wMinFormula, sim.wMin, 1e-12);
  check('S2', 'k* = m − ρσ/√(1−ρ²)', kStarFormula, sim.kStar, 1e-12);
  // grid argmin agrees with the formula
  let gi = 0; for (let i = 1; i < sim.w.length; i++) if (sim.w[i] < sim.w[gi]) gi = i;
  check('S2', 'grid argmin w ≈ w_min', wMinFormula, sim.w[gi], 1e-4);
  check('S2', 'grid argmin location ≈ k*', kStarFormula, sim.k[gi], 1e-2);
  // ρ<0 elevates the LOW-strike (left) wing, so the smile MINIMUM shifts to the
  // HIGH-strike (right) side: k* > m.
  checkBool('S2', 'ρ<0 ⇒ k* > m (min on the high-strike side)', sim.kStar > P.m);
}

// ─── S3: wing slopes ───────────────────────────────────────────────────
{
  const sim = simulateVolSurface({ ...P, T: 0.5 });
  // numerical wing slope MAGNITUDES far out in each wing (w grows on both wings;
  // right slope is +b(1+ρ), the left signed slope is −b(1−ρ), so its magnitude is b(1−ρ))
  const wR = (refW(60, P) - refW(40, P)) / 20;        // → b(1+ρ)
  const wLmag = (refW(-60, P) - refW(-40, P)) / 20;   // → b(1−ρ) (magnitude)
  check('S3', 'right wing slope → b(1+ρ)', P.b * (1 + P.rho), wR, 1e-6);
  check('S3', 'left wing slope magnitude → b(1−ρ)', P.b * (1 - P.rho), wLmag, 1e-6);
  check('S3', 'sim.rightSlope = b(1+ρ)', P.b * (1 + P.rho), sim.rightSlope, 1e-12);
  check('S3', 'sim.leftSlope = b(1−ρ)', P.b * (1 - P.rho), sim.leftSlope, 1e-12);
}

// ─── S4: skew / symmetry ───────────────────────────────────────────────
{
  const sym = { a: 0.01, b: 0.1, rho: 0, m: 0.05, sigma: 0.15 };
  // symmetric about k = m when ρ=0: w(m−x) = w(m+x)
  let maxAsym = 0; for (const x of [0.1, 0.2, 0.3]) maxAsym = Math.max(maxAsym, Math.abs(refW(sym.m - x, sym) - refW(sym.m + x, sym)));
  check('S4', 'ρ=0 ⇒ symmetric about k=m', 0, maxAsym, 1e-12);
  // ρ<0 ⇒ left (low-strike) variance higher than right at symmetric offsets about m
  const neg = { a: 0.01, b: 0.1, rho: -0.5, m: 0, sigma: 0.15 };
  checkBool('S4', 'ρ<0 ⇒ w(−0.3) > w(+0.3) (equity-style down-skew)', refW(-0.3, neg) > refW(0.3, neg));
  const pos = { ...neg, rho: 0.5 };
  checkBool('S4', 'ρ>0 ⇒ w(+0.3) > w(−0.3)', refW(0.3, pos) > refW(-0.3, pos));
}

// ─── S5: IV = √(w/T) and T scaling ─────────────────────────────────────
{
  const s1 = simulateVolSurface({ ...P, T: 0.25 });
  const s2 = simulateVolSurface({ ...P, T: 1.0 });
  check('S5', 'atmIv = √(atmW/T) at T=0.25', Math.sqrt(s1.atmW / 0.25), s1.atmIv, 1e-9);
  checkBool('S5', 'all IV ≥ 0', Array.from(s1.iv).every(v => v >= 0));
  // same w, larger T ⇒ smaller implied vol (w/T smaller)
  checkBool('S5', 'larger T lowers σ_BS at fixed w (ATM)', s2.atmIv < s1.atmIv);
  check('S5', 'atmW is T-independent (same params)', s1.atmW, s2.atmW, 1e-12);
}

// ─── S6: arbitrage flags ───────────────────────────────────────────────
{
  // Negative-variance case: large negative a ⇒ w_min < 0
  const bad1 = simulateVolSurface({ a: -0.05, b: 0.1, rho: -0.3, m: 0, sigma: 0.1, T: 0.25 });
  checkBool('S6', 'w_min<0 ⇒ arbWMin false & noArb false', bad1.wMin < 0 && bad1.arbWMin === false && bad1.noArb === false);
  // Steep wings: b(1+|ρ|) > 2 ⇒ arbWings false
  const bad2 = simulateVolSurface({ a: 0.01, b: 1.6, rho: 0.5, m: 0, sigma: 0.1, T: 0.25 });
  checkBool('S6', 'b(1+|ρ|)>2 ⇒ arbWings false & noArb false', (1.6 * 1.5 > 2) && bad2.arbWings === false && bad2.noArb === false);
  // Healthy slice ⇒ noArb true
  const ok = simulateVolSurface({ ...P, T: 0.25 });
  checkBool('S6', 'default slice is flagged arbitrage-free', ok.noArb === true && ok.arbWMin && ok.arbWings);
}

// ─── S7: structure & determinism ───────────────────────────────────────
{
  const a = simulateVolSurface({ ...P, T: 0.3, n: 121 });
  const b = simulateVolSurface({ ...P, T: 0.3, n: 121 });
  checkBool('S7', 'has k, w, iv, kStar, wMin, atmIv, slopes, flags', 'k' in a && 'w' in a && 'iv' in a && 'kStar' in a && 'wMin' in a && 'atmIv' in a && 'rightSlope' in a && 'noArb' in a);
  checkBool('S7', 'arrays length = n (121)', a.k.length === 121 && a.w.length === 121 && a.iv.length === 121);
  let same = true; for (let i = 0; i < a.w.length; i++) if (a.w[i] !== b.w[i] || a.iv[i] !== b.iv[i]) { same = false; break; }
  checkBool('S7', 'deterministic (same params ⇒ identical slice)', same);
}

// ─── Summary ───────────────────────────────────────────────────────────
const total = results.length, passed = results.filter(r => r.ok).length, failed = results.filter(r => !r.ok);
const bySection = {};
for (const r of results) { bySection[r.section] = bySection[r.section] || { t: 0, p: 0 }; bySection[r.section].t++; if (r.ok) bySection[r.section].p++; }
if (!QUIET) {
  console.log('\n=== Raw-SVI volatility-surface simulator verification ===');
  for (const s of Object.keys(bySection).sort()) console.log(`  ${s}: ${bySection[s].p}/${bySection[s].t}${bySection[s].p === bySection[s].t ? ' ✓' : ' ✗'}`);
  console.log(`\nTotal: ${passed}/${total}`);
}
if (failed.length === 0) {
  if (!QUIET) console.log('All checks pass. SVI sim matches the Gatheral raw-SVI analytic facts.');
  process.exit(0);
} else {
  console.log(`\n${failed.length} failures:`);
  for (const f of failed.slice(0, 20)) console.log(`  [${f.section}] ${f.label}${f.detail ? ': ' + f.detail : (f.expected !== undefined ? `: expected ${f.expected}, got ${f.actual}` : '')}`);
  process.exit(1);
}
