#!/usr/bin/env node
// Persistent verification harness for the perpetual funding-rate simulator
// (fundingRate / simulateFunding in js/viz.js).
//
// Exchange funding rate F(P) = P + clamp(I − P, −c, c), all in percent per
// funding interval. Verified against the exact piecewise structure and the
// positioning/carry logic. Refs: BitMEX/Binance funding methodology;
// Schmeling, Schrimpf & Todorov (2023, BIS WP 1087, "Crypto Carry");
// Ackerer, Hugonnier & Jermann (2024, "Perpetual Futures Pricing").
//
// Coverage:
//   F1: fundingRate — exact closed form vs clamp definition
//   F2: three regimes — flat F=I on P∈[I−c,I+c]; F=P−c for P>I+c; F=P+c for P<I−c
//   F3: continuity & monotonicity — continuous at the kinks; non-decreasing in P
//   F4: annualisation — F × periodsPerYear with periodsPerYear = 365·24/interval
//   F5: who-pays sign & positioning verdict (premium>0 flush, <0 squeeze)
//   F6: structure & determinism
//
// Usage: node scripts/verify-funding-sim.mjs [--quiet] [--section F2]
// Exit: 0 = all pass, 1 = any fail.

import { pathToFileURL, fileURLToPath } from 'node:url';
import path from 'node:path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const args = process.argv.slice(2);
const QUIET = args.includes('--quiet');
const sectionFilter = (() => { const i = args.indexOf('--section'); return i >= 0 ? args[i + 1] : null; })();

const vizMod = await import(pathToFileURL(path.join(ROOT, 'js/viz.js')).href);
const { fundingRate, simulateFunding, COMPONENTS } = vizMod;
if (typeof fundingRate !== 'function' || typeof simulateFunding !== 'function') {
  console.error('FAIL: fundingRate / simulateFunding not exported from js/viz.js'); process.exit(1);
}
if (!COMPONENTS?.FundingRateSim) { console.error('FAIL: FundingRateSim not registered'); process.exit(1); }

const results = [];
function check(s, l, e, a, t) { if (sectionFilter && s !== sectionFilter) return; const ok = Math.abs(e - a) <= t; results.push({ s, l, e, a, ok }); if (!QUIET && !ok) console.log(`  [${s}] ✗ ${l}: expected ${e}, got ${a}, tol ${t}`); }
function checkBool(s, l, c, d = '') { if (sectionFilter && s !== sectionFilter) return; results.push({ s, l, ok: c, d }); if (!QUIET && !c) console.log(`  [${s}] ✗ ${l}${d ? ': ' + d : ''}`); }

const clamp = (x, lo, hi) => Math.max(lo, Math.min(hi, x));
const refF = (P, I, c) => P + clamp(I - P, -c, c);

// ─── F1: closed form ───────────────────────────────────────────────────
{
  const I = 0.01, c = 0.05;
  for (const P of [-0.18, -0.05, 0, 0.01, 0.06, 0.18]) check('F1', `F(${P}) matches clamp def`, refF(P, I, c), fundingRate(P, I, c), 1e-12);
}

// ─── F2: three regimes ─────────────────────────────────────────────────
{
  const I = 0.01, c = 0.05; // kinks at I−c=−0.04 and I+c=0.06
  // Flat band: P in [−0.04, 0.06] ⇒ F = I
  for (const P of [-0.04, -0.01, 0.01, 0.03, 0.06]) check('F2', `flat: F(${P}) = I`, I, fundingRate(P, I, c), 1e-12);
  // Rich wing: P > 0.06 ⇒ F = P − c
  check('F2', 'rich wing F(0.15) = P − c', 0.15 - c, fundingRate(0.15, I, c), 1e-12);
  // Cheap wing: P < −0.04 ⇒ F = P + c
  check('F2', 'cheap wing F(−0.15) = P + c', -0.15 + c, fundingRate(-0.15, I, c), 1e-12);
}

// ─── F3: continuity & monotonicity ─────────────────────────────────────
{
  const I = 0.02, c = 0.04; // kinks at −0.02 and 0.06
  // continuity at kinks
  check('F3', 'continuous at lower kink (P=I−c)', I, fundingRate(I - c, I, c), 1e-12);
  check('F3', 'continuous at upper kink (P=I+c)', I, fundingRate(I + c, I, c), 1e-12);
  // non-decreasing across a sweep
  let mono = true, prev = -Infinity;
  for (let P = -0.2; P <= 0.2 + 1e-9; P += 0.001) { const f = fundingRate(P, I, c); if (f < prev - 1e-12) { mono = false; break; } prev = f; }
  checkBool('F3', 'F(P) non-decreasing in P', mono);
}

// ─── F4: annualisation ─────────────────────────────────────────────────
{
  const sim = simulateFunding({ premium: 0.05, interest: 0.01, clampC: 0.05, intervalHours: 8 });
  check('F4', 'periodsPerYear = 365·24/8 = 1095', 1095, sim.periodsPerYear, 1e-9);
  check('F4', 'annualized = F × periodsPerYear', sim.F * 1095, sim.annualized, 1e-9);
  // F(0.05) with I=0.01,c=0.05: 0.05 in flat band [−0.04,0.06] ⇒ F=I=0.01 ⇒ annualized ≈ 10.95%
  check('F4', 'F(0.05)=I=0.01 (flat band)', 0.01, sim.F, 1e-12);
  check('F4', 'annualized ≈ 10.95%', 10.95, sim.annualized, 1e-6);
  // a 4h interval doubles periods
  const sim4 = simulateFunding({ premium: 0.05, interest: 0.01, clampC: 0.05, intervalHours: 4 });
  check('F4', '4h interval ⇒ 2190 periods/yr', 2190, sim4.periodsPerYear, 1e-9);
}

// ─── F5: who-pays & verdict ────────────────────────────────────────────
{
  const rich = simulateFunding({ premium: 0.12, interest: 0.01, clampC: 0.05, intervalHours: 8 }); // F=0.07>0
  checkBool('F5', 'rich premium ⇒ F>0, longs pay, flush verdict', rich.F > 0 && rich.whoPays === 'longs' && rich.verdict === 'flush');
  const cheap = simulateFunding({ premium: -0.12, interest: 0.01, clampC: 0.05, intervalHours: 8 }); // F=−0.07<0
  checkBool('F5', 'discount ⇒ F<0, shorts pay, squeeze verdict', cheap.F < 0 && cheap.whoPays === 'shorts' && cheap.verdict === 'squeeze');
  // region labels
  checkBool('F5', 'region label flat for small premium', simulateFunding({ premium: 0.0, interest: 0.01, clampC: 0.05, intervalHours: 8 }).region === 'flat');
  checkBool('F5', 'region label richWing for large premium', rich.region === 'richWing');
  checkBool('F5', 'region label cheapWing for large discount', cheap.region === 'cheapWing');
}

// ─── F6: structure & determinism ───────────────────────────────────────
{
  const a = simulateFunding({ premium: 0.03, interest: 0.01, clampC: 0.05, intervalHours: 8, n: 121 });
  checkBool('F6', 'has curve, F, annualized, kinks, region, whoPays, verdict', Array.isArray(a.curve) && 'F' in a && 'annualized' in a && 'kinkLo' in a && 'region' in a && 'whoPays' in a && 'verdict' in a);
  checkBool('F6', 'curve length = n (121)', a.curve.length === 121);
  check('F6', 'kinkLo = I − c', 0.01 - 0.05, a.kinkLo, 1e-12);
  check('F6', 'kinkHi = I + c', 0.01 + 0.05, a.kinkHi, 1e-12);
  const b = simulateFunding({ premium: 0.03, interest: 0.01, clampC: 0.05, intervalHours: 8, n: 121 });
  let same = true; for (let i = 0; i < a.curve.length; i++) if (a.curve[i].F !== b.curve[i].F) { same = false; break; }
  checkBool('F6', 'deterministic (same params ⇒ identical curve)', same);
}

// ─── Summary ───────────────────────────────────────────────────────────
const total = results.length, passed = results.filter(r => r.ok).length, failed = results.filter(r => !r.ok);
const bySection = {};
for (const r of results) { bySection[r.s] = bySection[r.s] || { t: 0, p: 0 }; bySection[r.s].t++; if (r.ok) bySection[r.s].p++; }
if (!QUIET) {
  console.log('\n=== Perpetual funding-rate simulator verification ===');
  for (const s of Object.keys(bySection).sort()) console.log(`  ${s}: ${bySection[s].p}/${bySection[s].t}${bySection[s].p === bySection[s].t ? ' ✓' : ' ✗'}`);
  console.log(`\nTotal: ${passed}/${total}`);
}
if (failed.length === 0) {
  if (!QUIET) console.log('All checks pass. Funding sim matches the exchange funding formula + carry/positioning logic.');
  process.exit(0);
} else {
  console.log(`\n${failed.length} failures:`);
  for (const f of failed.slice(0, 20)) console.log(`  [${f.s}] ${f.l}${f.d ? ': ' + f.d : (f.e !== undefined ? `: expected ${f.e}, got ${f.a}` : '')}`);
  process.exit(1);
}
