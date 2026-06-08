#!/usr/bin/env node
// Theory-matching harness for the Almgren-Chriss (2000) efficient-frontier
// simulator (js/viz.js: almgrenKappa / almgrenTrajectory / almgrenCost /
// almgrenFrontier). Mirrors verify-kyle-sim / verify-gm-sim: assert the
// closed-form trajectory, its limits, the module's worked example, the
// mean-variance trade-off, and convexity of the frontier.
//
//   κ = √(λσ²/η),  x(t) = X·sinh(κ(T−t))/sinh(κT)  (→ X(1−t/T) as κ→0)
//   E = ½γX² + ε Σ|n| + (η/τ)Σn²,  V = σ²τ Σ x_k².
//
// Usage:  node scripts/verify-almgren-sim.mjs [--quiet]
// Exit code: 0 = all pass, 1 = any fail.

import { pathToFileURL, fileURLToPath } from 'node:url';
import path from 'node:path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const QUIET = process.argv.includes('--quiet');

const { almgrenKappa, almgrenTrajectory, almgrenCost, almgrenFrontier } =
  await import(pathToFileURL(path.join(ROOT, 'js/viz.js')).href);

const results = [];
function check(section, label, cond, detail = '') {
  results.push({ section, ok: !!cond });
  if (!QUIET && !cond) console.log(`  [${section}] ✗ ${label}${detail ? ': ' + detail : ''}`);
}
const approx = (a, b, eps = 1e-9) => Math.abs(a - b) <= eps;

// ─── A1: trajectory boundary conditions ────────────────────────────────
for (const kappa of [0, 0.2, 0.5, 1.0]) {
  const { x } = almgrenTrajectory({ X: 100000, T: 5, N: 20, kappa });
  check('A1', `x_0 = X (κ=${kappa})`, approx(x[0], 100000, 1e-6));
  check('A1', `x_N = 0 (κ=${kappa})`, approx(x[20], 0, 1e-6));
}

// ─── A2: κ→0 limit is the straight-line TWAP ───────────────────────────
{
  const N = 20, X = 100000, T = 5;
  const { x } = almgrenTrajectory({ X, T, N, kappa: 0 });
  let ok = true;
  for (let k = 0; k <= N; k++) if (!approx(x[k], X * (1 - k / N), 1e-6)) ok = false;
  check('A2', 'κ=0 → linear x_k = X(1−k/N)', ok);
}

// ─── A3: the module's worked example (X=1e5, T=5, N=5, κ=0.5) ───────────
{
  const { x, n } = almgrenTrajectory({ X: 100000, T: 5, N: 5, kappa: 0.5 });
  check('A3', 'x_1 ≈ 59,946 (content)', Math.abs(x[1] - 59946) <= 1.5, `${x[1].toFixed(1)}`);
  check('A3', 'x_4 ≈ 8,613 (content)', Math.abs(x[4] - 8613) <= 1.5, `${x[4].toFixed(1)}`);
  check('A3', 'n_1 ≈ 40,054 (content)', Math.abs(n[0] - 40054) <= 1.5, `${n[0].toFixed(1)}`);
  check('A3', 'front-loads: n_1 > n_5', n[0] > n[4]);
}

// ─── A4: monotone liquidation (holdings ↓, trades ≥ 0) ─────────────────
for (const kappa of [0, 0.3, 0.7, 1.2]) {
  const { x, n } = almgrenTrajectory({ X: 100000, T: 5, N: 20, kappa });
  let mono = true, nonneg = true;
  for (let k = 1; k <= 20; k++) if (x[k] > x[k - 1] + 1e-6) mono = false;
  for (let i = 0; i < n.length; i++) if (n[i] < -1e-6) nonneg = false;
  check('A4', `holdings non-increasing (κ=${kappa})`, mono);
  check('A4', `trades n_k ≥ 0 (κ=${kappa})`, nonneg);
}

// ─── A5: urgency κ = √(λσ²/η) ──────────────────────────────────────────
for (const [lambda, sigma, eta] of [[1e-6, 0.3, 1e-6], [4e-6, 0.3, 1e-6], [1e-6, 0.6, 1e-6]]) {
  check('A5', `κ = √(λσ²/η) (${lambda},${sigma},${eta})`,
    approx(almgrenKappa({ lambda, sigma, eta }), Math.sqrt(lambda * sigma * sigma / eta)));
}
// doubling σ at fixed λ,η doubles κ; quadrupling λ doubles κ
check('A5', 'κ ∝ σ', approx(almgrenKappa({ lambda: 1e-6, sigma: 0.6, eta: 1e-6 }),
  2 * almgrenKappa({ lambda: 1e-6, sigma: 0.3, eta: 1e-6 })));
check('A5', 'κ ∝ √λ', approx(almgrenKappa({ lambda: 4e-6, sigma: 0.3, eta: 1e-6 }),
  2 * almgrenKappa({ lambda: 1e-6, sigma: 0.3, eta: 1e-6 })));

// ─── A6: mean-variance trade-off (κ↑ ⇒ V↓, E↑) ─────────────────────────
{
  const base = { X: 100000, T: 5, N: 20, sigma: 0.3, eta: 1e-6 };
  let vDown = true, eUp = true;
  let prev = almgrenCost({ ...base, kappa: 0 });
  for (const kappa of [0.1, 0.3, 0.5, 0.8, 1.2]) {
    const c = almgrenCost({ ...base, kappa });
    if (c.V >= prev.V) vDown = false;
    if (c.E <= prev.E) eUp = false;
    prev = c;
  }
  check('A6', 'V strictly decreases as κ rises', vDown);
  check('A6', 'E strictly increases as κ rises', eUp);
}

// ─── A7: efficient frontier is convex (slopes dE/dV non-decreasing) ────
{
  const pts = almgrenFrontier({ X: 100000, T: 5, N: 20, sigma: 0.3, eta: 1e-6, kappaMax: 1.5, steps: 60 })
    .slice()
    .sort((a, b) => a.V - b.V);          // ascending variance
  let convex = true;
  let prevSlope = -Infinity;
  for (let i = 1; i < pts.length; i++) {
    const dV = pts[i].V - pts[i - 1].V;
    if (dV <= 0) continue;
    const slope = (pts[i].E - pts[i - 1].E) / dV;   // negative, increasing toward 0 if convex
    if (slope < prevSlope - 1e-6) convex = false;
    prevSlope = slope;
  }
  check('A7', 'frontier convex (dE/dV non-decreasing in V)', convex);
  check('A7', 'frontier decreasing (higher V ⇒ lower E)', pts[0].E > pts[pts.length - 1].E);
}

// ─── A8: front-loading — interior holdings below the TWAP line ─────────
{
  const N = 20, X = 100000, T = 5;
  const { x } = almgrenTrajectory({ X, T, N, kappa: 0.5 });
  let below = true;
  for (let k = 1; k < N; k++) if (x[k] >= X * (1 - k / N) - 1e-6) below = false;
  check('A8', 'κ>0 holdings below TWAP at all interior points', below);
}

// ─── A9: risk-neutral (κ=0) is min-cost / max-variance corner ──────────
{
  const base = { X: 100000, T: 5, N: 20, sigma: 0.3, eta: 1e-6 };
  const rn = almgrenCost({ ...base, kappa: 0 });
  const pts = almgrenFrontier({ ...base, kappaMax: 1.5, steps: 40 });
  check('A9', 'κ=0 has the lowest E on the frontier', pts.every(p => p.E >= rn.E - 1e-6));
  check('A9', 'κ=0 has the highest V on the frontier', pts.every(p => p.V <= rn.V + 1e-6));
}

const passed = results.filter(r => r.ok).length;
console.log(`\nTotal: ${passed}/${results.length}`);
if (passed === results.length) console.log('All checks pass. Almgren-Chriss simulator matches the 2000 mean-variance frontier.');
process.exit(passed === results.length ? 0 : 1);
