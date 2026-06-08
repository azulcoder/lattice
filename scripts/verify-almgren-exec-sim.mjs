#!/usr/bin/env node
// Harness for the Almgren-Chriss execution-animation stepper (js/viz.js:
// executionStep over almgrenTrajectory). The animation itself is browser-only;
// here we verify the pure per-step state that drives it.
//
// Usage:  node scripts/verify-almgren-exec-sim.mjs [--quiet]
// Exit code: 0 = all pass, 1 = any fail.

import { pathToFileURL, fileURLToPath } from 'node:url';
import path from 'node:path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const QUIET = process.argv.includes('--quiet');

const { executionStep, almgrenTrajectory } = await import(pathToFileURL(path.join(ROOT, 'js/viz.js')).href);

const results = [];
function check(section, label, cond, detail = '') {
  results.push({ section, ok: !!cond });
  if (!QUIET && !cond) console.log(`  [${section}] ✗ ${label}${detail ? ': ' + detail : ''}`);
}
const approx = (a, b, eps = 1e-9) => Math.abs(a - b) <= eps;

const X = 100000, T = 5, N = 20;
const traj = (kappa) => almgrenTrajectory({ X, T, N, kappa }).x;

// ─── X1: boundary states ───────────────────────────────────────────────
{
  const x = traj(0.5);
  const s0 = executionStep(x, 0);
  check('X1', 'step 0: full inventory, nothing sold', approx(s0.remaining, X) && approx(s0.soldSoFar, 0) && s0.traded === 0 && approx(s0.fracDone, 0));
  const sN = executionStep(x, N);
  check('X1', 'step N: empty, fully sold', approx(sN.remaining, 0, 1e-6) && approx(sN.soldSoFar, X, 1e-6) && approx(sN.fracDone, 1, 1e-9));
  check('X1', 'clamps out-of-range step', executionStep(x, 999).step === N && executionStep(x, -5).step === 0);
}

// ─── X2: monotone sell-down + traded = Δholdings ───────────────────────
{
  const x = traj(0.5);
  let monoSold = true, tradeOk = true;
  let prevSold = -1;
  for (let k = 0; k <= N; k++) {
    const s = executionStep(x, k);
    if (s.soldSoFar < prevSold - 1e-6) monoSold = false;
    prevSold = s.soldSoFar;
    if (k >= 1 && !approx(s.traded, x[k - 1] - x[k], 1e-6)) tradeOk = false;
  }
  check('X2', 'cumulative sold is monotonically non-decreasing', monoSold);
  check('X2', 'traded[k] = x[k-1] − x[k]', tradeOk);
  check('X2', 'fracDone = soldSoFar / X', approx(executionStep(x, 7).fracDone, executionStep(x, 7).soldSoFar / X));
}

// ─── X3: urgency front-loads (κ>0 sells more early than late) ──────────
{
  const front = traj(0.9);
  const firstHalf = executionStep(front, N / 2).soldSoFar;
  check('X3', 'κ>0 sells >50% in the first half (front-loaded)', firstHalf > 0.5 * X, `${(firstHalf / X * 100).toFixed(0)}%`);
  const flat = traj(0);
  check('X3', 'κ=0 (TWAP) sells ~50% at the half-way step', Math.abs(executionStep(flat, N / 2).soldSoFar - 0.5 * X) < 0.02 * X);
  check('X3', 'κ>0 first interval trade > κ=0 first interval trade', executionStep(front, 1).traded > executionStep(flat, 1).traded);
}

const passed = results.filter(r => r.ok).length;
console.log(`\nTotal: ${passed}/${results.length}`);
if (passed === results.length) console.log('All checks pass. Almgren execution stepper matches the trajectory.');
process.exit(passed === results.length ? 0 : 1);
