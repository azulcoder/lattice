#!/usr/bin/env node
// Persistent verification harness for the lumped-parameter reservoir-pressure
// simulator (simulateLumped in js/viz.js), used by the geothermal
// material-balance / lumped-parameter draft module.
//
// The model is the linear first-order mass balance
//   κ dp/dt = −W_p(1−f) + a·(p0 − p),   net = W_p(1−f)
// with closed-form solution p(t) = p∞ + (p0−p∞)e^(−t/τ), p∞ = p0 − net/a,
// τ = κ/a, and the closed-reservoir (a→0) linear limit p(t) = p0 − (net/κ)t.
//
// These checks validate the LIVE simulateLumped against (a) an independent
// RK4 integration of the ODE and (b) the analytic properties, so the curve
// the learner sees is provably the solution of the stated balance.
//
// Coverage:
//   L1: Structural — output shape, lengths, p[0] = p0, t[0] = 0
//   L2: Analytic curve matches an independent RK4 integration of the ODE
//   L3: Steady state — p∞ = p0 − net/a, and p(t≫τ) → p∞
//   L4: Reinjection support — higher f raises p(t) everywhere and lifts p∞
//   L5: Closed reservoir (a→0) — linear decline slope −net/κ, τ = ∞, not open
//   L6: Zero net withdrawal (f=1 or W_p=0) — pressure stays flat at p0
//   L7: Time constant — p(τ) = p∞ + (p0−p∞)/e  (the 1/e point)
//   L8: Monotonicity / bounds — p non-increasing and within [p∞, p0] for net>0
//
// Usage:
//   node scripts/verify-lumped-sim.mjs
//   node scripts/verify-lumped-sim.mjs --quiet
//   node scripts/verify-lumped-sim.mjs --section L2
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

// ─── Load live sim from viz.js ──────────────────────────────────────────
const vizMod = await import(pathToFileURL(path.join(ROOT, 'js/viz.js')).href);
const { simulateLumped, COMPONENTS } = vizMod;
if (typeof simulateLumped !== 'function') {
  console.error('FAIL: simulateLumped not exported from js/viz.js');
  process.exit(1);
}
if (!COMPONENTS?.LumpedReservoirSim) {
  console.error('FAIL: LumpedReservoirSim not registered as viz component');
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
    console.log(`  [${section}] ✗ ${label}: expected ${expected}, got ${actual}, diff ${diff} (tol ${tol})`);
  }
}

function checkBool(section, label, cond, detail = '') {
  if (sectionFilter && section !== sectionFilter) return;
  results.push({ section, label, ok: cond, detail });
  if (!QUIET && !cond) {
    console.log(`  [${section}] ✗ ${label}${detail ? ': ' + detail : ''}`);
  }
}

// Independent RK4 integration of dp/dt = (−net + a(p0−p))/κ over [0, years].
function rk4Curve({ Wp, f, a, kappa, p0 = 100, years = 40, sub = 8000 }) {
  const net = Wp * (1 - f);
  const dpdt = (p) => (-net + a * (p0 - p)) / kappa;
  const h = years / sub;
  let p = p0;
  let tEnd = 0;
  for (let i = 0; i < sub; i++) {
    const k1 = dpdt(p);
    const k2 = dpdt(p + 0.5 * h * k1);
    const k3 = dpdt(p + 0.5 * h * k2);
    const k4 = dpdt(p + h * k3);
    p += (h / 6) * (k1 + 2 * k2 + 2 * k3 + k4);
    tEnd += h;
  }
  return p; // pressure at t = years
}

// ─── L1: Structural ─────────────────────────────────────────────────────
{
  const s = simulateLumped({ Wp: 50, f: 0.3, a: 1, kappa: 30, nSteps: 200 });
  checkBool('L1', 'returns t, p, net, tau, pInf, open, stabilises, p0',
    't' in s && 'p' in s && 'net' in s && 'tau' in s && 'pInf' in s && 'open' in s && 'stabilises' in s && 'p0' in s);
  checkBool('L1', 't.length === nSteps+1', s.t.length === 201);
  checkBool('L1', 'p.length === nSteps+1', s.p.length === 201);
  checkBool('L1', 't[0] === 0', s.t[0] === 0);
  check('L1', 'p[0] === p0 (=100)', 100, s.p[0], 1e-9);
  check('L1', 'net = Wp(1−f) = 50·0.7 = 35', 35, s.net, 1e-9);
  checkBool('L1', 'open flag true when a>0', s.open === true);
}

// ─── L2: Analytic curve matches independent RK4 ─────────────────────────
{
  const cases = [
    { Wp: 50, f: 0.3, a: 1.0, kappa: 30 },
    { Wp: 80, f: 0.0, a: 2.5, kappa: 50 },
    { Wp: 30, f: 0.6, a: 0.5, kappa: 15 },
    { Wp: 100, f: 0.5, a: 4.0, kappa: 80 },
  ];
  for (const c of cases) {
    const sim = simulateLumped({ ...c, years: 40, nSteps: 200 });
    const pEndAnalytic = sim.p[sim.p.length - 1];
    const pEndRk4 = rk4Curve({ ...c, years: 40 });
    check('L2', `analytic p(40) ≈ RK4 p(40)  [Wp=${c.Wp},f=${c.f},a=${c.a},κ=${c.kappa}]`,
      pEndRk4, pEndAnalytic, 1e-3);
  }
}

// ─── L3: Steady state ───────────────────────────────────────────────────
{
  const c = { Wp: 50, f: 0.3, a: 1.0, kappa: 30 };
  const sim = simulateLumped({ ...c });
  check('L3', 'p∞ = p0 − net/a = 100 − 35/1 = 65', 65, sim.pInf, 1e-9);

  // Run far beyond τ (=30): p(t) → p∞
  const long = simulateLumped({ ...c, years: 400, nSteps: 400 });
  check('L3', 'p(t≫τ) → p∞ (last point ≈ 65)', 65, long.p[long.p.length - 1], 1e-2);

  // Another: full reinjection-free, strong recharge
  const c2 = { Wp: 80, f: 0, a: 4, kappa: 20 };
  const sim2 = simulateLumped({ ...c2 });
  check('L3', 'p∞ = 100 − 80/4 = 80', 80, sim2.pInf, 1e-9);
}

// ─── L4: Reinjection support raises pressure ────────────────────────────
{
  const base = { Wp: 60, a: 1.0, kappa: 30, years: 40, nSteps: 200 };
  const f0 = simulateLumped({ ...base, f: 0.0 });
  const f3 = simulateLumped({ ...base, f: 0.3 });
  const f6 = simulateLumped({ ...base, f: 0.6 });

  // p∞ rises with f
  checkBool('L4', `p∞ rises with f (${f0.pInf.toFixed(1)} < ${f3.pInf.toFixed(1)} < ${f6.pInf.toFixed(1)})`,
    f0.pInf < f3.pInf && f3.pInf < f6.pInf);

  // p(t) higher at EVERY interior time for higher f
  let everywhereHigher = true;
  for (let i = 1; i < f0.p.length; i++) {
    if (!(f3.p[i] > f0.p[i] - 1e-9 && f6.p[i] > f3.p[i] - 1e-9)) { everywhereHigher = false; break; }
  }
  checkBool('L4', 'p_f=0.6(t) ≥ p_f=0.3(t) ≥ p_f=0(t) for all t', everywhereHigher);

  // Exact: p∞(f) = 100 − Wp(1−f)/a
  check('L4', 'p∞(f=0.3) = 100 − 60·0.7/1 = 58', 58, f3.pInf, 1e-9);
}

// ─── L5: Closed reservoir (a→0) is linear ───────────────────────────────
{
  const c = { Wp: 50, f: 0.2, a: 0, kappa: 25, years: 40, nSteps: 200 };
  const sim = simulateLumped({ ...c });
  checkBool('L5', 'open === false when a=0', sim.open === false);
  checkBool('L5', 'τ = Infinity when a=0', sim.tau === Infinity);
  checkBool('L5', 'stabilises === false (closed reservoir)', sim.stabilises === false);
  // net = 50·0.8 = 40; slope = −net/κ = −40/25 = −1.6 per year → p(40) = 100 − 64 = 36
  const slope = (sim.p[sim.p.length - 1] - sim.p[0]) / (sim.t[sim.t.length - 1] - sim.t[0]);
  check('L5', 'linear slope = −net/κ = −1.6 %/yr', -1.6, slope, 1e-6);
  check('L5', 'p(40) = 100 − 1.6·40 = 36', 36, sim.p[sim.p.length - 1], 1e-6);
  // Linearity: midpoint equals average of endpoints
  const mid = sim.p[100];
  check('L5', 'curve is linear (midpoint = mean of endpoints)',
    (sim.p[0] + sim.p[sim.p.length - 1]) / 2, mid, 1e-6);
}

// ─── L6: Zero net withdrawal stays flat ─────────────────────────────────
{
  const full = simulateLumped({ Wp: 70, f: 1.0, a: 1.0, kappa: 30, years: 40, nSteps: 200 }); // net=0
  let flat1 = true;
  for (let i = 0; i < full.p.length; i++) if (Math.abs(full.p[i] - 100) > 1e-9) { flat1 = false; break; }
  checkBool('L6', 'f=1 (full reinjection) ⇒ net=0 ⇒ p ≡ p0', flat1 && full.net === 0);

  const noProd = simulateLumped({ Wp: 0, f: 0.3, a: 1.0, kappa: 30, years: 40, nSteps: 200 });
  let flat2 = true;
  for (let i = 0; i < noProd.p.length; i++) if (Math.abs(noProd.p[i] - 100) > 1e-9) { flat2 = false; break; }
  checkBool('L6', 'Wp=0 (no production) ⇒ p ≡ p0', flat2 && noProd.net === 0);
}

// ─── L7: Time constant (1/e point) ──────────────────────────────────────
{
  const c = { Wp: 50, f: 0.3, a: 1.0, kappa: 30 }; // τ = 30, p∞ = 65
  const sim = simulateLumped({ ...c, years: c.kappa / c.a, nSteps: 1 }); // sample exactly at t = τ
  const pAtTau = sim.p[sim.p.length - 1];
  const expected = sim.pInf + (sim.p0 - sim.pInf) / Math.E; // 65 + 35/e
  check('L7', 'p(τ) = p∞ + (p0−p∞)/e', expected, pAtTau, 1e-9);
  check('L7', 'τ = κ/a = 30', 30, sim.tau, 1e-9);
}

// ─── L8: Monotonicity & bounds (net > 0) ────────────────────────────────
{
  const sim = simulateLumped({ Wp: 50, f: 0.3, a: 1.0, kappa: 30, years: 40, nSteps: 200 });
  let mono = true, bounded = true;
  for (let i = 1; i < sim.p.length; i++) {
    if (sim.p[i] > sim.p[i - 1] + 1e-9) { mono = false; break; }
  }
  for (let i = 0; i < sim.p.length; i++) {
    if (sim.p[i] > sim.p0 + 1e-9 || sim.p[i] < sim.pInf - 1e-9) { bounded = false; break; }
  }
  checkBool('L8', 'p(t) non-increasing for net>0', mono);
  checkBool('L8', 'p∞ ≤ p(t) ≤ p0 for all t', bounded);
  // Determinism
  const a = simulateLumped({ Wp: 42, f: 0.25, a: 1.3, kappa: 28 });
  const b = simulateLumped({ Wp: 42, f: 0.25, a: 1.3, kappa: 28 });
  let same = true;
  for (let i = 0; i < a.p.length; i++) if (a.p[i] !== b.p[i]) { same = false; break; }
  checkBool('L8', 'deterministic (same params ⇒ identical curve)', same);
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
  console.log('\n=== Lumped-parameter reservoir simulator verification ===');
  for (const sec of Object.keys(bySection).sort()) {
    const s = bySection[sec];
    console.log(`  ${sec}: ${s.passed}/${s.total}${s.passed === s.total ? ' ✓' : ' ✗'}`);
  }
  console.log(`\nTotal: ${passed}/${total}`);
}

if (failed.length === 0) {
  if (!QUIET) console.log('All checks pass. Lumped-parameter sim matches the ODE solution + analytic properties.');
  process.exit(0);
} else {
  console.log(`\n${failed.length} failures:`);
  for (const f of failed.slice(0, 20)) {
    if (f.expected !== undefined) {
      console.log(`  [${f.section}] ${f.label}: expected ${f.expected}, got ${f.actual}, diff ${f.diff}`);
    } else {
      console.log(`  [${f.section}] ${f.label}${f.detail ? ': ' + f.detail : ''}`);
    }
  }
  process.exit(1);
}
