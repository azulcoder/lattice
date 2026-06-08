#!/usr/bin/env node
// Theory-matching harness for the VPIN simulator (js/viz.js: normalCDF /
// vpinFromZ / simulateVPIN), per Easley-López de Prado-O'Hara (2012).
// Asserts the normal-CDF classifier, the VPIN definition + bounds, the
// module's worked example, and the toxicity comparative static.
//
// Usage:  node scripts/verify-vpin-sim.mjs [--quiet]
// Exit code: 0 = all pass, 1 = any fail.

import { pathToFileURL, fileURLToPath } from 'node:url';
import path from 'node:path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const QUIET = process.argv.includes('--quiet');

const { normalCDF, vpinFromZ, simulateVPIN } = await import(pathToFileURL(path.join(ROOT, 'js/viz.js')).href);

const results = [];
function check(section, label, cond, detail = '') {
  results.push({ section, ok: !!cond });
  if (!QUIET && !cond) console.log(`  [${section}] ✗ ${label}${detail ? ': ' + detail : ''}`);
}
const approx = (a, b, eps = 1e-9) => Math.abs(a - b) <= eps;

// ─── V1: standard normal CDF (bulk volume classifier) ──────────────────
check('V1', 'Φ(0) = 0.5', approx(normalCDF(0), 0.5, 1e-7));
check('V1', 'Φ(1) ≈ 0.8413', Math.abs(normalCDF(1) - 0.8413447) < 1e-4);
check('V1', 'Φ(-1) ≈ 0.1587', Math.abs(normalCDF(-1) - 0.1586553) < 1e-4);
check('V1', 'Φ(1.96) ≈ 0.975', Math.abs(normalCDF(1.96) - 0.975) < 1e-3);
check('V1', 'symmetry Φ(-z)+Φ(z)=1', approx(normalCDF(-0.7) + normalCDF(0.7), 1, 1e-6));
check('V1', 'monotone increasing', normalCDF(0.5) > normalCDF(0) && normalCDF(2) > normalCDF(0.5));
check('V1', 'bounds in (0,1)', normalCDF(-6) >= 0 && normalCDF(-6) < 0.001 && normalCDF(6) > 0.999 && normalCDF(6) <= 1);

// ─── V2: VPIN definition + bounds ──────────────────────────────────────
check('V2', 'flat buckets (z=0) ⇒ VPIN ≈ 0', approx(vpinFromZ([0, 0, 0]), 0, 1e-4));  // erf approx carries ~1e-7
check('V2', 'one-sided (huge z) ⇒ VPIN → 1', vpinFromZ([8, 8, 8]) > 0.999);
check('V2', 'symmetric ±z ⇒ same |imbalance| (VPIN > 0)', approx(vpinFromZ([1.5]), vpinFromZ([-1.5]), 1e-9) && vpinFromZ([1.5]) > 0);
check('V2', 'VPIN ∈ [0,1]', [vpinFromZ([0.1, -2, 3]), vpinFromZ([0]), vpinFromZ([-5, 5])].every((v) => v >= 0 && v <= 1));

// ─── V3: the module's worked example (z = +1.0, -0.5, +0.2) ────────────
{
  const vpin = vpinFromZ([1.0, -0.5, 0.2]);
  check('V3', 'worked-example VPIN ≈ 0.408', Math.abs(vpin - 0.408) < 2e-3, `${vpin}`);
  // per-bucket buy volumes for V = 10,000
  check('V3', 'V^B(z=1.0) ≈ 8413', Math.abs(10000 * normalCDF(1.0) - 8413) < 2);
  check('V3', 'V^B(z=-0.5) ≈ 3085', Math.abs(10000 * normalCDF(-0.5) - 3085) < 2);
}

// ─── V4: toxicity comparative static (seeded simulation) ───────────────
{
  const balanced = simulateVPIN({ toxicity: 0, noise: 0.3, n: 400, seed: 7 });
  const toxic = simulateVPIN({ toxicity: 2.2, noise: 0.3, n: 400, seed: 7 });
  check('V4', 'higher toxicity ⇒ higher VPIN', toxic.vpin > balanced.vpin);
  check('V4', 'toxic flow VPIN high (>0.8)', toxic.vpin > 0.8, `${toxic.vpin.toFixed(3)}`);
  check('V4', 'low-toxicity, low-noise VPIN low (<0.35)', balanced.vpin < 0.35, `${balanced.vpin.toFixed(3)}`);
  // monotone across a toxicity sweep
  let prev = -1, mono = true;
  for (const t of [0, 0.5, 1.0, 1.5, 2.0, 2.5]) {
    const v = simulateVPIN({ toxicity: t, noise: 0.2, n: 600, seed: 3 }).vpin;
    if (v < prev - 0.02) mono = false;
    prev = v;
  }
  check('V4', 'VPIN monotone increasing in toxicity', mono);
  check('V4', 'buy fraction → 1 under strong buy toxicity', simulateVPIN({ toxicity: 3, noise: 0.2, n: 200, seed: 1 }).buyFrac.every((f) => f > 0.5));
}

// ─── V5: determinism + structure ───────────────────────────────────────
{
  const a = simulateVPIN({ toxicity: 0.5, noise: 0.8, n: 40, seed: 99 });
  const b = simulateVPIN({ toxicity: 0.5, noise: 0.8, n: 40, seed: 99 });
  let same = a.vpin === b.vpin;
  for (let i = 0; i < 40 && same; i++) if (a.z[i] !== b.z[i]) same = false;
  check('V5', 'same seed ⇒ identical run', same);
  check('V5', 'arrays length = n', a.z.length === 40 && a.buyFrac.length === 40 && a.imbalance.length === 40);
  check('V5', 'imbalance = |2·buyFrac − 1|', a.imbalance.every((im, i) => Math.abs(im - Math.abs(2 * a.buyFrac[i] - 1)) < 1e-12));
}

const passed = results.filter(r => r.ok).length;
console.log(`\nTotal: ${passed}/${results.length}`);
if (passed === results.length) console.log('All checks pass. VPIN simulator matches the 2012 volume-clock toxicity metric.');
process.exit(passed === results.length ? 0 : 1);
