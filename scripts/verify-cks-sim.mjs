#!/usr/bin/env node
// Theory-matching harness for the Cont-Kukanov-Stoikov (2014) OFI simulator
// (js/viz.js: olsFit + simulateOFI). Asserts the OLS estimator, the linear
// price-impact law ΔP = β·OFI with β = 1/(2D̄), the depth comparative static,
// and the headline OFI-beats-trade-imbalance R² gap.
//
// Usage:  node scripts/verify-cks-sim.mjs [--quiet]
// Exit code: 0 = all pass, 1 = any fail.

import { pathToFileURL, fileURLToPath } from 'node:url';
import path from 'node:path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const QUIET = process.argv.includes('--quiet');

const { olsFit, simulateOFI } = await import(pathToFileURL(path.join(ROOT, 'js/viz.js')).href);

const results = [];
function check(section, label, cond, detail = '') {
  results.push({ section, ok: !!cond });
  if (!QUIET && !cond) console.log(`  [${section}] ✗ ${label}${detail ? ': ' + detail : ''}`);
}
const approx = (a, b, eps = 1e-9) => Math.abs(a - b) <= eps;

// ─── C1: OLS estimator ─────────────────────────────────────────────────
{
  // exact line y = 3x + 2 → slope 3, intercept 2, R² = 1
  const xs = [0, 1, 2, 3, 4], ys = xs.map((x) => 3 * x + 2);
  const f = olsFit(xs, ys);
  check('C1', 'recovers slope', approx(f.slope, 3, 1e-9));
  check('C1', 'recovers intercept', approx(f.intercept, 2, 1e-9));
  check('C1', 'perfect line ⇒ R²=1', approx(f.r2, 1, 1e-9));
  // flat y ⇒ R²=0, slope 0
  const flat = olsFit([1, 2, 3, 4], [5, 5, 5, 5]);
  check('C1', 'flat y ⇒ slope 0', approx(flat.slope, 0));
  check('C1', 'flat y ⇒ R²=0', approx(flat.r2, 0));
  // R² ∈ [0,1] for noisy data
  const noisy = olsFit([1, 2, 3, 4, 5], [1.1, 1.9, 3.2, 3.8, 5.3]);
  check('C1', 'noisy R² in (0,1)', noisy.r2 > 0 && noisy.r2 < 1);
}

// ─── C2: linear price-impact law β = 1/(2D̄), recovered by OLS ──────────
for (const depth of [50, 90, 150]) {
  const sim = simulateOFI({ depth, noise: 0.10, n: 4000, seed: 7 });
  check('C2', `β = 1/(2D̄) (D=${depth})`, approx(sim.beta, 1 / (2 * depth), 1e-12));
  check('C2', `OLS recovers β within 5% (D=${depth})`, Math.abs(sim.fitOFI.slope - sim.beta) / sim.beta < 0.05, `${sim.fitOFI.slope} vs ${sim.beta}`);
}

// ─── C3: depth comparative static (deeper book ⇒ smaller impact) ───────
{
  const thin = simulateOFI({ depth: 40, noise: 0.1, n: 2000, seed: 3 });
  const deep = simulateOFI({ depth: 180, noise: 0.1, n: 2000, seed: 3 });
  check('C3', 'deeper book ⇒ smaller β', deep.beta < thin.beta);
  check('C3', 'deeper book ⇒ larger 1/β (more OFI per tick)', 1 / deep.beta > 1 / thin.beta);
}

// ─── C4: OFI beats trade imbalance (the headline R² gap) ───────────────
for (const seed of [1, 42, 100]) {
  const sim = simulateOFI({ depth: 90, noise: 0.13, n: 1000, seed });
  check('C4', `R²(OFI) > R²(TI) (seed=${seed})`, sim.fitOFI.r2 > sim.fitTI.r2, `${sim.fitOFI.r2.toFixed(2)} vs ${sim.fitTI.r2.toFixed(2)}`);
  check('C4', `R²(OFI) high (seed=${seed})`, sim.fitOFI.r2 > 0.8, `${sim.fitOFI.r2.toFixed(2)}`);
  check('C4', `both slopes positive (seed=${seed})`, sim.fitOFI.slope > 0 && sim.fitTI.slope > 0);
}

// ─── C5: more noise ⇒ lower R²; determinism ────────────────────────────
{
  const lo = simulateOFI({ depth: 90, noise: 0.05, n: 2000, seed: 9 });
  const hi = simulateOFI({ depth: 90, noise: 0.40, n: 2000, seed: 9 });
  check('C5', 'more noise ⇒ lower R²(OFI)', hi.fitOFI.r2 < lo.fitOFI.r2);
  const a = simulateOFI({ depth: 90, noise: 0.13, n: 500, seed: 55 });
  const b = simulateOFI({ depth: 90, noise: 0.13, n: 500, seed: 55 });
  let same = true;
  for (let i = 0; i < 500; i++) if (a.ofi[i] !== b.ofi[i] || a.dP[i] !== b.dP[i]) same = false;
  check('C5', 'same seed ⇒ identical run', same);
  check('C5', 'worked-example default 1/β ≈ 180', Math.round(1 / simulateOFI({ depth: 90, noise: 0.13, seed: 1 }).beta) === 180);
}

const passed = results.filter(r => r.ok).length;
console.log(`\nTotal: ${passed}/${results.length}`);
if (passed === results.length) console.log('All checks pass. CKS OFI simulator matches the 2014 linear price-impact law.');
process.exit(passed === results.length ? 0 : 1);
