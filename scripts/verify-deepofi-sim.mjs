#!/usr/bin/env node
// Theory-matching harness for the deep (multi-level) OFI simulator
// (js/viz.js: deepOFI). Asserts that aggregating more book levels monotonically
// raises the R² of the ΔP ~ deep-OFI regression toward a ceiling, with the
// depth-weighting and noise comparative statics behaving correctly.
//
// Usage:  node scripts/verify-deepofi-sim.mjs [--quiet]
// Exit code: 0 = all pass, 1 = any fail.

import { pathToFileURL, fileURLToPath } from 'node:url';
import path from 'node:path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const QUIET = process.argv.includes('--quiet');

const { deepOFI } = await import(pathToFileURL(path.join(ROOT, 'js/viz.js')).href);

const results = [];
function check(section, label, cond, detail = '') {
  results.push({ section, ok: !!cond });
  if (!QUIET && !cond) console.log(`  [${section}] ✗ ${label}${detail ? ': ' + detail : ''}`);
}

// ─── E1: structure + weights ───────────────────────────────────────────
{
  const s = deepOFI({ Lmax: 8, decay: 0.6, noise: 0.3, n: 600, seed: 1 });
  check('E1', 'r2ByLevel has one entry per level', s.r2ByLevel.length === 8 && s.r2ByLevel[0].L === 1 && s.r2ByLevel[7].L === 8);
  check('E1', 'weights decay with depth', s.weights.every((w, i) => i === 0 || w < s.weights[i - 1]));
  check('E1', 'all R² in [0,1]', s.r2ByLevel.every((p) => p.r2 >= 0 && p.r2 <= 1));
}

// ─── E2: R² monotonically non-decreasing in L; deep > best-level ───────
{
  const s = deepOFI({ Lmax: 8, decay: 0.6, noise: 0.3, n: 1500, seed: 7 });
  let mono = true;
  for (let i = 1; i < s.r2ByLevel.length; i++) if (s.r2ByLevel[i].r2 < s.r2ByLevel[i - 1].r2 - 1e-9) mono = false;
  check('E2', 'R² non-decreasing as levels are added', mono);
  check('E2', 'deep (L=8) beats best-level (L=1)', s.r2ByLevel[7].r2 > s.r2ByLevel[0].r2 + 0.05, `${s.r2ByLevel[0].r2.toFixed(2)} → ${s.r2ByLevel[7].r2.toFixed(2)}`);
}

// ─── E3: depth-weighting comparative static ────────────────────────────
{
  // higher decay ⇒ deeper levels carry MORE weight ⇒ best-level explains less
  // ⇒ a bigger climb from L=1 to L=Lmax.
  const lo = deepOFI({ Lmax: 8, decay: 0.4, noise: 0.2, n: 1500, seed: 3 });
  const hi = deepOFI({ Lmax: 8, decay: 0.88, noise: 0.2, n: 1500, seed: 3 });
  const gap = (s) => s.r2ByLevel[7].r2 - s.r2ByLevel[0].r2;
  check('E3', 'steeper depth weighting ⇒ bigger L1→Lmax climb', gap(hi) > gap(lo), `gap ${gap(hi).toFixed(2)} vs ${gap(lo).toFixed(2)}`);
  check('E3', 'shallow weighting ⇒ best level already dominates', lo.r2ByLevel[0].r2 > hi.r2ByLevel[0].r2);
}

// ─── E4: noise comparative static + determinism ───────────────────────
{
  const lo = deepOFI({ Lmax: 8, decay: 0.6, noise: 0.1, n: 1500, seed: 9 });
  const hi = deepOFI({ Lmax: 8, decay: 0.6, noise: 0.7, n: 1500, seed: 9 });
  check('E4', 'more noise ⇒ lower deep R²', hi.r2ByLevel[7].r2 < lo.r2ByLevel[7].r2);
  const a = deepOFI({ Lmax: 8, decay: 0.6, noise: 0.3, n: 400, seed: 55 });
  const b = deepOFI({ Lmax: 8, decay: 0.6, noise: 0.3, n: 400, seed: 55 });
  check('E4', 'same seed ⇒ identical R² curve', a.r2ByLevel.every((p, i) => p.r2 === b.r2ByLevel[i].r2));
}

const passed = results.filter(r => r.ok).length;
console.log(`\nTotal: ${passed}/${results.length}`);
if (passed === results.length) console.log('All checks pass. Deep (multi-level) OFI simulator behaves as theory predicts.');
process.exit(passed === results.length ? 0 : 1);
