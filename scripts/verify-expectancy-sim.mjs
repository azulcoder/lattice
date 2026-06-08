#!/usr/bin/env node
// Persistent verification harness for the expectancy / dynamic-sizing survival
// simulator (expectancyStats / logGrowthRate / simulateExpectancy in js/viz.js).
//
// A strategy is a binary bet: win w.p. p for +b R, else −1 R. Verified against
// the exact analytic identities and independent oracles:
//   E1: expectancy identity E_R = p·b − (1−p); PF; breakeven p*=1/(1+b); Kelly f*=E_R/b
//   E2: log-growth g(f)=p·ln(1+f·b)+(1−p)·ln(1−f) is maximised at the Kelly f*,
//       and over-betting (f ≈ 2·f*) drives growth below the Kelly growth / negative
//   E3: law of large numbers — the simulated mean R-multiple ≈ E_R
//   E4: monotonicity — higher risk fraction ⇒ higher max-drawdown & risk-of-ruin;
//       determinism (same seed ⇒ identical fan)
//   E5: a negative-EV edge ⇒ risk-of-ruin → 1; the over-bet flag fires correctly
//   E6: structure — band length, percentile ordering, breakeven yields E_R≈0
//
// Refs: Kelly (1956); Thorp (2006, "The Kelly Capital Growth Criterion");
// Barber & Odean (2000); Kahneman & Tversky (1979). All checks deterministic.
//
// Usage: node scripts/verify-expectancy-sim.mjs [--quiet] [--section E2]
// Exit: 0 = all pass, 1 = any fail.

import { pathToFileURL, fileURLToPath } from 'node:url';
import path from 'node:path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const args = process.argv.slice(2);
const QUIET = args.includes('--quiet');
const sectionFilter = (() => { const i = args.indexOf('--section'); return i >= 0 ? args[i + 1] : null; })();

const vizMod = await import(pathToFileURL(path.join(ROOT, 'js/viz.js')).href);
const { expectancyStats, logGrowthRate, simulateExpectancy, COMPONENTS } = vizMod;
for (const [n, f] of [['expectancyStats', expectancyStats], ['logGrowthRate', logGrowthRate], ['simulateExpectancy', simulateExpectancy]]) {
  if (typeof f !== 'function') { console.error(`FAIL: ${n} not exported from js/viz.js`); process.exit(1); }
}
if (!COMPONENTS?.ExpectancySurvivalSim) { console.error('FAIL: ExpectancySurvivalSim not registered'); process.exit(1); }

const results = [];
function check(s, l, e, a, t) { if (sectionFilter && s !== sectionFilter) return; const ok = Math.abs(e - a) <= t; results.push({ s, l, e, a, ok }); if (!QUIET && !ok) console.log(`  [${s}] ✗ ${l}: expected ${e}, got ${a}, tol ${t}`); }
function checkBool(s, l, c, d = '') { if (sectionFilter && s !== sectionFilter) return; results.push({ s, l, ok: c, d }); if (!QUIET && !c) console.log(`  [${s}] ✗ ${l}${d ? ': ' + d : ''}`); }

// ─── E1: expectancy identities ─────────────────────────────────────────
{
  const a = expectancyStats(0.6, 2);
  check('E1', 'E_R(0.6,2)=0.8', 0.8, a.eR, 1e-12);
  check('E1', 'PF(0.6,2)=3', 3, a.pf, 1e-12);
  check('E1', 'breakeven(b=2)=1/3', 1 / 3, a.breakeven, 1e-12);
  check('E1', 'Kelly(0.6,2)=0.4', 0.4, a.kelly, 1e-12);
  const z = expectancyStats(0.5, 1);
  check('E1', 'E_R(0.5,1)=0 (coin flip 1:1)', 0, z.eR, 1e-12);
  check('E1', 'Kelly(0.5,1)=0', 0, z.kelly, 1e-12);
  check('E1', 'PF(0.5,1)=1', 1, z.pf, 1e-12);
  // The headline lesson: 35% win rate at b=2 is still +EV (p > breakeven 1/3).
  const low = expectancyStats(0.35, 2);
  checkBool('E1', '35% WR @ b=2 is +EV (E_R>0)', low.eR > 0, `E_R=${low.eR}`);
  checkBool('E1', '35% WR > breakeven win rate', 0.35 > low.breakeven);
  // A 60% win rate with bad R:R (b=0.4) is NEGATIVE-EV.
  const trap = expectancyStats(0.6, 0.4);
  checkBool('E1', '60% WR @ b=0.4 is −EV (E_R<0)', trap.eR < 0, `E_R=${trap.eR}`);
}

// ─── E2: Kelly maximises log-growth ────────────────────────────────────
{
  for (const [p, b] of [[0.6, 2], [0.55, 1.5], [0.4, 3]]) {
    const { kelly } = expectancyStats(p, b);
    // grid-search argmax of g(f)
    let bestF = 0, bestG = -Infinity;
    for (let f = 0.001; f < 0.999; f += 0.001) { const g = logGrowthRate(p, b, f); if (g > bestG) { bestG = g; bestF = f; } }
    check('E2', `argmax g(f) ≈ Kelly for p=${p},b=${b}`, kelly, bestF, 0.01);
    checkBool('E2', `g(Kelly)>0 for +EV p=${p},b=${b}`, logGrowthRate(p, b, kelly) > 0);
    // over-betting at 2·Kelly grows slower than Kelly (and here turns negative)
    checkBool('E2', `g(2·Kelly) < g(Kelly) for p=${p},b=${b}`, logGrowthRate(p, b, 2 * kelly) < logGrowthRate(p, b, kelly));
  }
  // half-Kelly also grows slower than full Kelly (concavity)
  const { kelly } = expectancyStats(0.6, 2);
  checkBool('E2', 'g(½·Kelly) < g(Kelly)', logGrowthRate(0.6, 2, kelly / 2) < logGrowthRate(0.6, 2, kelly));
  check('E2', 'g(0)=0 (no bet, no growth)', 0, logGrowthRate(0.6, 2, 0), 1e-12);
}

// ─── E3: LLN — mean R-multiple ≈ E_R ───────────────────────────────────
{
  const sim = simulateExpectancy({ p: 0.6, b: 2, riskPct: 0.02, nTrades: 500, nRuns: 400, seed: 7 });
  check('E3', 'mean R-multiple ≈ E_R (0.8)', 0.8, sim.meanR, 0.05);
  const sim2 = simulateExpectancy({ p: 0.45, b: 1, riskPct: 0.02, nTrades: 500, nRuns: 400, seed: 9 });
  check('E3', 'mean R ≈ E_R (−0.1) for p=0.45,b=1', -0.1, sim2.meanR, 0.05);
}

// ─── E4: monotonicity in risk fraction + determinism ───────────────────
{
  const lowR = simulateExpectancy({ p: 0.55, b: 1.5, riskPct: 0.02, nTrades: 200, nRuns: 400, seed: 42 });
  const hiR = simulateExpectancy({ p: 0.55, b: 1.5, riskPct: 0.08, nTrades: 200, nRuns: 400, seed: 42 });
  checkBool('E4', 'higher risk ⇒ higher median max-drawdown', hiR.medianMDD > lowR.medianMDD, `${lowR.medianMDD} → ${hiR.medianMDD}`);
  checkBool('E4', 'higher risk ⇒ risk-of-ruin non-decreasing', hiR.riskOfRuin >= lowR.riskOfRuin);
  // determinism
  const a = simulateExpectancy({ p: 0.6, b: 2, riskPct: 0.03, nTrades: 120, nRuns: 200, seed: 99 });
  const c = simulateExpectancy({ p: 0.6, b: 2, riskPct: 0.03, nTrades: 120, nRuns: 200, seed: 99 });
  let same = true;
  for (let i = 0; i < a.bands.length; i++) if (a.bands[i].p50 !== c.bands[i].p50 || a.bands[i].p10 !== c.bands[i].p10) { same = false; break; }
  checkBool('E4', 'deterministic (same seed ⇒ identical fan)', same);
  // Terminal wealth is order-independent (a product over win/loss counts), so its
  // median is seed-stable; max-drawdown IS path-dependent, so it varies by seed.
  checkBool('E4', 'different seed ⇒ different path (worst drawdown differs)', simulateExpectancy({ p: 0.6, b: 2, riskPct: 0.03, nTrades: 120, nRuns: 200, seed: 1 }).worstMDD !== a.worstMDD);
}

// ─── E5: negative-EV ruin + over-bet flag ──────────────────────────────
{
  const neg = simulateExpectancy({ p: 0.35, b: 1, riskPct: 0.05, nTrades: 400, nRuns: 400, seed: 5, ruinFloor: 0.5 });
  checkBool('E5', '−EV edge ⇒ risk-of-ruin high (>0.8)', neg.riskOfRuin > 0.8, `ror=${neg.riskOfRuin}`);
  checkBool('E5', '−EV edge ⇒ median terminal < 1', neg.medianTerminal < 1);
  // over-bet flag: Kelly(0.6,2)=0.4, so r=0.85 (>2·0.4=0.8) is over-betting; r=0.3 is not
  checkBool('E5', 'over-bet flag fires when r>2·Kelly', simulateExpectancy({ p: 0.6, b: 2, riskPct: 0.85, nTrades: 50, nRuns: 50, seed: 3 }).overbet === true);
  checkBool('E5', 'over-bet flag off when r<2·Kelly', simulateExpectancy({ p: 0.6, b: 2, riskPct: 0.3, nTrades: 50, nRuns: 50, seed: 3 }).overbet === false);
}

// ─── E6: structure ─────────────────────────────────────────────────────
{
  const sim = simulateExpectancy({ p: 0.6, b: 2, riskPct: 0.02, nTrades: 100, nRuns: 300, seed: 11 });
  checkBool('E6', 'bands length = nTrades+1', sim.bands.length === 101);
  let ordered = true;
  for (const bd of sim.bands) if (!(bd.p10 <= bd.p50 + 1e-9 && bd.p50 <= bd.p90 + 1e-9)) { ordered = false; break; }
  checkBool('E6', 'percentiles ordered p10≤p50≤p90 at every t', ordered);
  check('E6', 'equity starts at 1 (band[0])', 1, sim.bands[0].p50, 1e-12);
  checkBool('E6', 'has eR, pf, breakeven, kelly, riskOfRuin, bands', ['eR', 'pf', 'breakeven', 'kelly', 'riskOfRuin', 'bands', 'medianTerminal', 'worstMDD'].every((k) => k in sim));
  // breakeven win rate yields E_R≈0
  const be = expectancyStats(1 / 3, 2);
  check('E6', 'p=breakeven ⇒ E_R≈0', 0, be.eR, 1e-12);
}

// ─── Summary ───────────────────────────────────────────────────────────
const total = results.length, passed = results.filter((r) => r.ok).length, failed = results.filter((r) => !r.ok);
const bySection = {};
for (const r of results) { bySection[r.s] = bySection[r.s] || { t: 0, p: 0 }; bySection[r.s].t++; if (r.ok) bySection[r.s].p++; }
if (!QUIET) {
  console.log('\n=== Expectancy / survival simulator verification ===');
  for (const s of Object.keys(bySection).sort()) console.log(`  ${s}: ${bySection[s].p}/${bySection[s].t}${bySection[s].p === bySection[s].t ? ' ✓' : ' ✗'}`);
  console.log(`\nTotal: ${passed}/${total}`);
}
if (failed.length === 0) {
  if (!QUIET) console.log('All checks pass. Expectancy sim matches the analytic identities + Kelly/ruin oracles.');
  process.exit(0);
} else {
  console.log(`\n${failed.length} failures:`);
  for (const f of failed.slice(0, 20)) console.log(`  [${f.s}] ${f.l}${f.d ? ': ' + f.d : (f.e !== undefined ? `: expected ${f.e}, got ${f.a}` : '')}`);
  process.exit(1);
}
