#!/usr/bin/env node
// Theory-matching harness for the Bouchaud propagator (transient-impact)
// simulator (js/viz.js: propagatorImpact). Asserts the metaorder impact path's
// defining shape: concave rise during execution, a peak at the last child
// trade, monotone relaxation afterward, and the β comparative static (longer
// memory ⇒ slower relaxation).
//
// Usage:  node scripts/verify-propagator-sim.mjs [--quiet]
// Exit code: 0 = all pass, 1 = any fail.

import { pathToFileURL, fileURLToPath } from 'node:url';
import path from 'node:path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const QUIET = process.argv.includes('--quiet');

const { propagatorImpact } = await import(pathToFileURL(path.join(ROOT, 'js/viz.js')).href);

const results = [];
function check(section, label, cond, detail = '') {
  results.push({ section, ok: !!cond });
  if (!QUIET && !cond) console.log(`  [${section}] ✗ ${label}${detail ? ': ' + detail : ''}`);
}

// ─── R1: peak at the last child trade ──────────────────────────────────
for (const [beta, N] of [[0.3, 20], [0.5, 25], [0.8, 40]]) {
  const s = propagatorImpact({ beta, N, decayWindow: 2 * N });
  check('R1', `peakIndex = N−1 (β=${beta},N=${N})`, s.peakIndex === N - 1);
  let argmax = 0; for (let t = 1; t < s.I.length; t++) if (s.I[t] > s.I[argmax]) argmax = t;
  check('R1', `I is maximal at N−1 (β=${beta},N=${N})`, argmax === N - 1, `argmax=${argmax}`);
}

// ─── R2: concave rise during execution, monotone relaxation after ──────
{
  const N = 30, s = propagatorImpact({ beta: 0.5, N, decayWindow: 2 * N });
  let rising = true, concave = true;
  for (let t = 1; t <= N - 1; t++) if (s.I[t] <= s.I[t - 1]) rising = false;
  for (let t = 1; t < N - 1; t++) if (s.I[t + 1] - s.I[t] > s.I[t] - s.I[t - 1] + 1e-9) concave = false;  // increments shrink
  check('R2', 'strictly rising during execution', rising);
  check('R2', 'rise is concave (shrinking increments)', concave);
  let falling = true;
  for (let t = N; t <= s.T; t++) if (s.I[t] >= s.I[t - 1]) falling = false;
  check('R2', 'monotone relaxation after the peak', falling);
}

// ─── R3: transient — relaxes below the peak; permanent in (0, peak) ─────
{
  const s = propagatorImpact({ beta: 0.5, N: 25, decayWindow: 50 });
  check('R3', 'impact relaxes below peak', s.permanent < s.peak);
  check('R3', 'residual impact still positive (slow tail)', s.permanent > 0);
  check('R3', 'relaxFrac = permanent/peak in (0,1)', s.relaxFrac > 0 && s.relaxFrac < 1);
  check('R3', 'I(0) = G(0) = 1 (first child impact)', Math.abs(s.I[0] - 1) < 1e-12);
}

// ─── R4: β comparative static (smaller β ⇒ slower relaxation) ──────────
{
  const lowBeta = propagatorImpact({ beta: 0.2, N: 25, decayWindow: 50 });
  const highBeta = propagatorImpact({ beta: 0.8, N: 25, decayWindow: 50 });
  check('R4', 'smaller β ⇒ more of peak remains (higher relaxFrac)', lowBeta.relaxFrac > highBeta.relaxFrac, `${lowBeta.relaxFrac.toFixed(2)} vs ${highBeta.relaxFrac.toFixed(2)}`);
  check('R4', 'smaller β ⇒ higher peak (slower self-decay accumulates more)', lowBeta.peak > highBeta.peak, `${lowBeta.peak.toFixed(2)} vs ${highBeta.peak.toFixed(2)}`);
}

// ─── R5: determinism + length ──────────────────────────────────────────
{
  const a = propagatorImpact({ beta: 0.5, N: 20, decayWindow: 40 });
  const b = propagatorImpact({ beta: 0.5, N: 20, decayWindow: 40 });
  check('R5', 'pure / deterministic', a.peak === b.peak && a.permanent === b.permanent && a.I.length === b.I.length);
  check('R5', 'I length = N + decayWindow + 1', a.I.length === 20 + 40 + 1);
}

const passed = results.filter(r => r.ok).length;
console.log(`\nTotal: ${passed}/${results.length}`);
if (passed === results.length) console.log('All checks pass. Propagator simulator matches the transient-impact metaorder path.');
process.exit(passed === results.length ? 0 : 1);
