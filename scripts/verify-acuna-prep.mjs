#!/usr/bin/env node
// Persistent verification harness for the Acuña deliverability simulator.
//
// Re-runs every numerical claim from notes/g1-dogfood-prep-*.md Sections A1-A9
// against the live solveAcunaW function in js/viz.js. Plus boundary properties:
// monotonicity (skin), AOF-only-at-S=0-equals-39.65 invariant, and physical
// constraints (W=0 when P_f >= P_rg, non-negative output, etc.).
//
// Usage:
//   node scripts/verify-acuna-prep.mjs                # full run
//   node scripts/verify-acuna-prep.mjs --quiet        # only print summary
//   node scripts/verify-acuna-prep.mjs --section A5   # run only one section
//
// Exit code: 0 = all pass, 1 = any fail.
//
// Maintenance: when js/viz.js solver changes, re-run this script. If failures
// appear, decide whether to (a) update solver to match prep file, or (b) update
// prep file to match new solver. Either way, keep this script in sync as the
// canonical source-of-truth for "what the simulator should do at default params."

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

// ─── Load live solver from viz.js ───────────────────────────────────────
const vizMod = await import(pathToFileURL(path.join(ROOT, 'js/viz.js')).href);
const { solveAcunaW } = vizMod;
if (typeof solveAcunaW !== 'function') {
  console.error('FAIL: solveAcunaW not exported from js/viz.js');
  process.exit(1);
}

// ─── Test infrastructure ────────────────────────────────────────────────
const TOL = 0.05; // default kg/s tolerance for AOF / W claims
const TOL_PCT = 0.5; // tolerance for derived crossover P_f
const results = [];

function check(section, label, expected, actual, tol = TOL) {
  if (sectionFilter && section !== sectionFilter) return;
  const diff = Math.abs(expected - actual);
  const ok = diff <= tol;
  results.push({ section, label, expected, actual, diff, ok });
  if (!QUIET && !ok) {
    console.log(`  [${section}] ✗ ${label}: expected ${expected}, got ${actual.toFixed(3)}, diff ${diff.toFixed(3)}`);
  }
}

function checkBool(section, label, cond, detail = '') {
  if (sectionFilter && section !== sectionFilter) return;
  results.push({ section, label, ok: cond, detail });
  if (!QUIET && !cond) {
    console.log(`  [${section}] ✗ ${label}${detail ? ': ' + detail : ''}`);
  }
}

// ─── Section A1: Baseline curve at default params ───────────────────────
//     P_rg=30, C_WB=1.85, PI=0.45, S=0
{
  const claims = [
    [0, 39.65], [2, 39.54], [4, 39.18], [6, 38.59], [8, 37.76],
    [10, 36.66], [12, 35.29], [14, 33.63], [16, 31.64], [18, 29.29],
    [20, 26.51], [22, 23.24], [24, 19.33], [26, 14.57], [28, 8.53],
  ];
  for (const [pf, w] of claims) {
    check('A1', `P_f=${pf}`, w, solveAcunaW(30, pf, 1.85, 0.45, 0));
  }
  // Monotonicity: W strictly decreasing in P_f
  let mono = true, prev = Infinity;
  for (let pf = 0; pf <= 28; pf += 0.5) {
    const w = solveAcunaW(30, pf, 1.85, 0.45, 0);
    if (w > prev + 1e-6) { mono = false; break; }
    prev = w;
  }
  checkBool('A1', 'baseline curve monotone-decreasing in P_f', mono);
}

// ─── Section A2: AOF sensitivity to P_rg ───────────────────────────────
{
  const claims = [[20, 22.59], [22, 25.91], [25, 30.99], [27, 34.43], [30, 39.65], [32, 43.16], [35, 48.47], [37, 52.03], [40, 57.39]];
  for (const [prg, aof] of claims) {
    check('A2', `P_rg=${prg}`, aof, solveAcunaW(prg, 0, 1.85, 0.45, 0));
  }
  // Monotonicity: AOF increasing in P_rg
  let mono = true, prev = -Infinity;
  for (let prg = 15; prg <= 45; prg += 1) {
    const a = solveAcunaW(prg, 0, 1.85, 0.45, 0);
    if (a < prev - 1e-6) { mono = false; break; }
    prev = a;
  }
  checkBool('A2', 'AOF monotone-increasing in P_rg', mono);
}

// ─── Section A3: AOF sensitivity to C_WB ───────────────────────────────
{
  const claims = [[0.40, 11.14], [0.70, 18.45], [1.00, 24.95], [1.30, 30.73], [1.60, 35.84], [1.85, 39.65], [2.10, 43.10], [2.40, 46.79]];
  for (const [cwb, aof] of claims) {
    check('A3', `C_WB=${cwb}`, aof, solveAcunaW(30, 0, cwb, 0.45, 0));
  }
  checkBool('A3', 'AOF monotone in C_WB',
    solveAcunaW(30, 0, 0.4, 0.45, 0) < solveAcunaW(30, 0, 1.0, 0.45, 0) &&
    solveAcunaW(30, 0, 1.0, 0.45, 0) < solveAcunaW(30, 0, 1.85, 0.45, 0) &&
    solveAcunaW(30, 0, 1.85, 0.45, 0) < solveAcunaW(30, 0, 2.4, 0.45, 0));
}

// ─── Section A4: AOF sensitivity to PI ─────────────────────────────────
{
  const claims = [[0.15, 22.54], [0.25, 30.98], [0.35, 36.20], [0.45, 39.65], [0.55, 42.08], [0.65, 43.88], [0.75, 45.25], [0.80, 45.83]];
  for (const [pi, aof] of claims) {
    check('A4', `PI=${pi}`, aof, solveAcunaW(30, 0, 1.85, pi, 0));
  }
  // PI asymmetry: degradation more sensitive than improvement
  const baseAOF = solveAcunaW(30, 0, 1.85, 0.45, 0);
  const dropPct = (baseAOF - solveAcunaW(30, 0, 1.85, 0.15, 0)) / baseAOF; // 67% PI drop
  const gainPct = (solveAcunaW(30, 0, 1.85, 0.80, 0) - baseAOF) / baseAOF; // 78% PI gain
  checkBool('A4', 'PI sensitivity asymmetric (drop > gain in absolute %)', dropPct > gainPct);
}

// ─── Section A5: AOF sensitivity to skin (POST-G1.2) ──────────────────
{
  const claims = [
    [-5, 51.48], [-3, 46.30], [-2, 43.94], [-1, 41.73],
    [0, 39.65],
    [1, 37.71], [3, 34.21], [5, 31.16], [8, 27.30], [12, 23.25], [15, 20.83],
  ];
  for (const [s, aof] of claims) {
    check('A5', `S=${s}`, aof, solveAcunaW(30, 0, 1.85, 0.45, s));
  }
  // Negative skin produces enhanced flow
  checkBool('A5', 'Negative skin enhances flow (post-G1.2)',
    solveAcunaW(30, 0, 1.85, 0.45, -3) > solveAcunaW(30, 0, 1.85, 0.45, 0));
  // Monotonicity across full range
  let mono = true, prev = -Infinity;
  for (let s = 15; s >= -5; s -= 0.25) {
    const a = solveAcunaW(30, 0, 1.85, 0.45, s);
    if (a < prev - 1e-6) { mono = false; break; }
    prev = a;
  }
  checkBool('A5', 'skin sensitivity monotone (smaller S = more flow)', mono);
  // Clamping at -5.9
  checkBool('A5', 'S=-100 clamps to S=-5.908 case',
    Math.abs(solveAcunaW(30, 0, 1.85, 0.45, -100) - solveAcunaW(30, 0, 1.85, 0.45, -5.908)) < 0.01);
}

// ─── Section A6: Diagnostic signatures (Scenario A vs B) ──────────────
{
  const claims = [
    [0,  39.65, 23.40, 32.22],
    [5,  38.92, 23.02, 31.55],
    [10, 36.66, 21.84, 29.48],
    [15, 32.67, 19.74, 25.88],
    [20, 26.51, 16.47, 20.42],
    [25, 17.08, 11.31, 12.42],
    [28,  8.53,  6.29,  5.74],
  ];
  for (const [pf, base, a, b] of claims) {
    check('A6', `P_f=${pf} baseline`, base, solveAcunaW(30, pf, 1.85, 0.45, 0));
    check('A6', `P_f=${pf} Scenario A`, a, solveAcunaW(30, pf, 1.85 * 0.5, 0.45, 0));
    check('A6', `P_f=${pf} Scenario B`, b, solveAcunaW(30, pf, 1.85, 0.45 * 0.6, 0));
  }
  // At AOF, A drops more than B in absolute % terms
  const baseAOF = solveAcunaW(30, 0, 1.85, 0.45, 0);
  const aDropAOF = (baseAOF - solveAcunaW(30, 0, 1.85 * 0.5, 0.45, 0)) / baseAOF;
  const bDropAOF = (baseAOF - solveAcunaW(30, 0, 1.85, 0.45 * 0.6, 0)) / baseAOF;
  checkBool('A6', 'At AOF, Scenario A drops more than Scenario B', aDropAOF > bDropAOF);
}

// ─── Section A7: Crossover P_f recompute ──────────────────────────────
{
  let crossover = null;
  for (let pf = 0; pf <= 29.5; pf += 0.01) {
    const base = solveAcunaW(30, pf, 1.85, 0.45, 0);
    const a = solveAcunaW(30, pf, 1.85 * 0.5, 0.45, 0);
    const b = solveAcunaW(30, pf, 1.85, 0.45 * 0.6, 0);
    if (base > 0 && (base - b) / base > (base - a) / base) {
      crossover = pf;
      break;
    }
  }
  check('A7', 'crossover P_f', 26.90, crossover, TOL_PCT);
  checkBool('A7', 'crossover exists (B eventually dominates A at high P_f)', crossover !== null);
  checkBool('A7', 'crossover is near P_rg (operational claim)', crossover !== null && crossover > 25);
}

// ─── Section A8: Edge cases ───────────────────────────────────────────
{
  check('A8', 'C_WB=0.4 P_f=0', 11.14, solveAcunaW(30, 0, 0.4, 0.45, 0));
  check('A8', 'PI=0.15 P_f=0', 22.54, solveAcunaW(30, 0, 1.85, 0.15, 0));
  check('A8', 'S=15 P_f=0 (post-G1.2)', 20.83, solveAcunaW(30, 0, 1.85, 0.45, 15));
  check('A8', 'S=-3 P_f=0 (post-G1.2)', 46.30, solveAcunaW(30, 0, 1.85, 0.45, -3));
  check('A8', 'S=-10 (clamped)', 54.04, solveAcunaW(30, 0, 1.85, 0.45, -10));
  check('A8', 'P_rg=15, P_f=20 (above res)', 0, solveAcunaW(15, 20, 1.85, 0.45, 0));
  check('A8', 'all zeros', 0, solveAcunaW(0, 0, 0, 0, 0));
  check('A8', 'negative P_rg', 0, solveAcunaW(-5, 0, 1.85, 0.45, 0));
  checkBool('A8', 'P_rg=15 P_f=14.999 produces small positive W',
    solveAcunaW(15, 14.999, 1.85, 0.45, 0) > 0 && solveAcunaW(15, 14.999, 1.85, 0.45, 0) < 0.01);
  // No NaN/infinity for any sane input
  const sanity = [];
  for (const prg of [10, 30, 60]) for (const pf of [0, 15, 50]) for (const cwb of [0.1, 1, 5])
    for (const pi of [0.1, 0.5, 2]) for (const s of [-5, 0, 20]) {
      const w = solveAcunaW(prg, pf, cwb, pi, s);
      if (!isFinite(w) || w < 0) sanity.push({ prg, pf, cwb, pi, s, w });
    }
  checkBool('A8', 'no NaN/infinity/negative across 243-point param sweep',
    sanity.length === 0, sanity.length > 0 ? `${sanity.length} bad outputs (e.g., ${JSON.stringify(sanity[0])})` : '');
}

// ─── Section A9: Wayang Windu sanity ──────────────────────────────────
{
  check('A9', 'pre-workover C_WB=2.174', 44.05, solveAcunaW(30, 0, 2.174, 0.45, 0));
  check('A9', 'post-workover C_WB=1.665', 36.87, solveAcunaW(30, 0, 1.665, 0.45, 0));
  // Predicted reduction ~16% for the documented 23.4% C_WB drop
  const pre = solveAcunaW(30, 0, 2.174, 0.45, 0);
  const post = solveAcunaW(30, 0, 1.665, 0.45, 0);
  const reductionPct = (1 - post / pre) * 100;
  checkBool('A9', 'AOF reduction 15-18% (less than C_WB drop due to concavity)',
    reductionPct >= 15 && reductionPct <= 18, `actual ${reductionPct.toFixed(1)}%`);
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
  console.log('\n=== Acuña simulator verification ===');
  for (const sec of Object.keys(bySection).sort()) {
    const s = bySection[sec];
    console.log(`  ${sec}: ${s.passed}/${s.total}${s.passed === s.total ? ' ✓' : ' ✗'}`);
  }
  console.log(`\nTotal: ${passed}/${total}`);
}

if (failed.length === 0) {
  if (!QUIET) console.log('All checks pass. Solver matches prep file claims.');
  process.exit(0);
} else {
  console.log(`\n${failed.length} failures:`);
  for (const f of failed.slice(0, 20)) {
    if (f.expected !== undefined) {
      console.log(`  [${f.section}] ${f.label}: expected ${f.expected}, got ${f.actual?.toFixed(3)}, diff ${f.diff?.toFixed(3)}`);
    } else {
      console.log(`  [${f.section}] ${f.label}${f.detail ? ': ' + f.detail : ''}`);
    }
  }
  if (failed.length > 20) console.log(`  ... and ${failed.length - 20} more`);
  process.exit(1);
}
