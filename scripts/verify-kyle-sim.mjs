#!/usr/bin/env node
// Theory-matching harness for the Kyle (1985) λ price-impact simulator
// (js/viz.js: kyleEquilibrium + simulateKyle). Mirrors verify-gm-sim /
// verify-roll-sim: assert the analytic equilibrium identities and the
// Monte-Carlo invariants the content module relies on.
//
//   λ = √Σ0/(2σ_u),  β = σ_u/√Σ0 = 1/(2λ),  depth = 1/λ,  Var(p)/Σ0 = 1/2.
//
// Usage:  node scripts/verify-kyle-sim.mjs [--quiet]
// Exit code: 0 = all pass, 1 = any fail.

import { pathToFileURL, fileURLToPath } from 'node:url';
import path from 'node:path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const QUIET = process.argv.includes('--quiet');

const { kyleEquilibrium, simulateKyle } =
  await import(pathToFileURL(path.join(ROOT, 'js/viz.js')).href);

const results = [];
function check(section, label, cond, detail = '') {
  results.push({ section, ok: !!cond });
  if (!QUIET && !cond) console.log(`  [${section}] ✗ ${label}${detail ? ': ' + detail : ''}`);
}
const approx = (a, b, eps = 1e-9) => Math.abs(a - b) <= eps;

// ─── K1: equilibrium identities across a grid ──────────────────────────
for (const sigma0 of [2, 5, 8, 12]) {
  for (const sigmaU of [3, 10, 20]) {
    const { lambda, beta, depth, Sigma0, Sigma1, revealFrac } = kyleEquilibrium({ sigma0, sigmaU });
    check('K1', `λ = √Σ0/(2σ_u) (${sigma0},${sigmaU})`, approx(lambda, sigma0 / (2 * sigmaU)));
    check('K1', `β = σ_u/√Σ0 (${sigma0},${sigmaU})`, approx(beta, sigmaU / sigma0));
    check('K1', `β = 1/(2λ) (${sigma0},${sigmaU})`, approx(beta, 1 / (2 * lambda)));
    check('K1', `λ·β = 1/2 (${sigma0},${sigmaU})`, approx(lambda * beta, 0.5));
    check('K1', `depth = 1/λ (${sigma0},${sigmaU})`, approx(depth, 1 / lambda));
    check('K1', `Σ1 = Σ0/2 (${sigma0},${sigmaU})`, approx(Sigma1, Sigma0 / 2));
    check('K1', `revealFrac = 1/2 (${sigma0},${sigmaU})`, approx(revealFrac, 0.5));
  }
}

// ─── K2: the content module's worked example ───────────────────────────
{
  const { lambda, beta, depth, Sigma1 } = kyleEquilibrium({ sigma0: 5, sigmaU: 10 });
  check('K2', 'worked example λ = 0.25', approx(lambda, 0.25));
  check('K2', 'worked example β = 2', approx(beta, 2));
  check('K2', 'worked example depth = 4', approx(depth, 4));
  check('K2', 'worked example Σ1 = 12.5', approx(Sigma1, 12.5));
}

// ─── K3: comparative statics (monotonicity) ────────────────────────────
{
  const lamLoS0 = kyleEquilibrium({ sigma0: 3, sigmaU: 10 }).lambda;
  const lamHiS0 = kyleEquilibrium({ sigma0: 9, sigmaU: 10 }).lambda;
  check('K3', 'λ increases with σ0 (info asymmetry)', lamHiS0 > lamLoS0);
  const lamLoSu = kyleEquilibrium({ sigma0: 5, sigmaU: 5 }).lambda;
  const lamHiSu = kyleEquilibrium({ sigma0: 5, sigmaU: 20 }).lambda;
  check('K3', 'λ decreases with σ_u (noise cover)', lamHiSu < lamLoSu);
  check('K3', 'depth increases with σ_u', kyleEquilibrium({ sigma0: 5, sigmaU: 20 }).depth > kyleEquilibrium({ sigma0: 5, sigmaU: 5 }).depth);
}

// ─── K4: Monte-Carlo invariants (seeded → deterministic) ───────────────
{
  const cfg = { sigma0: 5, sigmaU: 10, p0: 100, nSamples: 40000, seed: 12345 };
  const sim = simulateKyle(cfg);
  const { lambda } = kyleEquilibrium(cfg);

  check('K4', 'arrays length = nSamples', sim.v.length === cfg.nSamples && sim.p.length === cfg.nSamples && sim.y.length === cfg.nSamples);
  check('K4', 'all prices finite', sim.p.every(Number.isFinite));
  // p = p0 + λy is affine in y → realized slope of p on y equals λ exactly.
  check('K4', 'realized slope(p,y) = λ', approx(sim.slopePonY, lambda, 1e-9), `${sim.slopePonY} vs ${lambda}`);
  // price reveals exactly half the information: slope(p,v) → 1/2, Var(p)/Σ0 → 1/2.
  check('K4', 'realized slope(p,v) ≈ 1/2', approx(sim.slopePonV, 0.5, 0.03), `${sim.slopePonV}`);
  check('K4', 'realized Var(p)/Σ0 ≈ 1/2', approx(sim.revealRealized, 0.5, 0.05), `${sim.revealRealized}`);
}

// ─── K5: determinism ───────────────────────────────────────────────────
{
  const a = simulateKyle({ sigma0: 5, sigmaU: 10, seed: 777, nSamples: 500 });
  const b = simulateKyle({ sigma0: 5, sigmaU: 10, seed: 777, nSamples: 500 });
  let same = a.p.length === b.p.length;
  for (let i = 0; i < a.p.length && same; i++) if (a.p[i] !== b.p[i] || a.y[i] !== b.y[i]) same = false;
  check('K5', 'same seed → identical run', same);
  const c = simulateKyle({ sigma0: 5, sigmaU: 10, seed: 778, nSamples: 500 });
  check('K5', 'different seed → different run', c.p[10] !== a.p[10]);
}

const passed = results.filter(r => r.ok).length;
console.log(`\nTotal: ${passed}/${results.length}`);
if (passed === results.length) console.log('All checks pass. Kyle λ simulator matches the 1985 linear equilibrium.');
process.exit(passed === results.length ? 0 : 1);
