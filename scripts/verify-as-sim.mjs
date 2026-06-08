#!/usr/bin/env node
// Theory-matching harness for the Avellaneda-Stoikov (2008) optimal
// market-making quotes (js/viz.js: asQuotes). Mirrors the other sim
// harnesses: assert the reservation price, the optimal-spread decomposition,
// the inventory skew, and the t→T regime collapse.
//
//   r = s − qγσ²(T−t),  spread = γσ²(T−t) + (2/γ)ln(1+γ/κ),
//   ask = r + spread/2,  bid = r − spread/2.
//
// Usage:  node scripts/verify-as-sim.mjs [--quiet]
// Exit code: 0 = all pass, 1 = any fail.

import { pathToFileURL, fileURLToPath } from 'node:url';
import path from 'node:path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const QUIET = process.argv.includes('--quiet');

const { asQuotes } = await import(pathToFileURL(path.join(ROOT, 'js/viz.js')).href);

const results = [];
function check(section, label, cond, detail = '') {
  results.push({ section, ok: !!cond });
  if (!QUIET && !cond) console.log(`  [${section}] ✗ ${label}${detail ? ': ' + detail : ''}`);
}
const approx = (a, b, eps = 1e-9) => Math.abs(a - b) <= eps;

const WE = { s: 100, sigma: 2, gamma: 0.1, kappa: 1.5, timeLeft: 1 };

// ─── AS1: the module's worked example (flat inventory) ─────────────────
{
  const q0 = asQuotes({ ...WE, q: 0 });
  check('AS1', 'inventory term γσ²(T−t) = 0.4', approx(q0.invTerm, 0.4, 1e-12));
  check('AS1', 'micro term (2/γ)ln(1+γ/κ) ≈ 1.29077', approx(q0.microTerm, (2 / 0.1) * Math.log(1 + 0.1 / 1.5), 1e-12));
  check('AS1', 'total spread ≈ 1.6908', Math.abs(q0.spread - 1.69077) < 1e-3, `${q0.spread}`);
  check('AS1', 'flat bid ≈ 99.15 (content)', Math.abs(q0.bid - 99.155) < 0.01, `${q0.bid}`);
  check('AS1', 'flat ask ≈ 100.85 (content)', Math.abs(q0.ask - 100.845) < 0.01, `${q0.ask}`);
  check('AS1', 'flat: reservation = mid', approx(q0.r, 100, 1e-12));
}

// ─── AS2: inventory skew direction ─────────────────────────────────────
{
  const long = asQuotes({ ...WE, q: 5 });
  const short = asQuotes({ ...WE, q: -5 });
  check('AS2', 'long ⇒ reservation below mid', long.r < WE.s);
  check('AS2', 'short ⇒ reservation above mid', short.r > WE.s);
  check('AS2', 'long pushes ask down vs flat', long.ask < asQuotes({ ...WE, q: 0 }).ask);
  check('AS2', 'short pushes bid up vs flat', short.bid > asQuotes({ ...WE, q: 0 }).bid);
  check('AS2', 'skew symmetric: r(+q)−s = −(r(−q)−s)', approx(long.r - WE.s, -(short.r - WE.s)));
}

// ─── AS3: reservation is linear in q with slope −γσ²(T−t) ──────────────
{
  const slope = WE.gamma * WE.sigma * WE.sigma * WE.timeLeft;
  for (const q of [-10, -3, 0, 4, 12]) {
    const Q = asQuotes({ ...WE, q });
    check('AS3', `r(q=${q}) = s − qγσ²(T−t)`, approx(Q.r, WE.s - q * slope, 1e-9));
  }
}

// ─── AS4: spread is independent of inventory ───────────────────────────
{
  const base = asQuotes({ ...WE, q: 0 }).spread;
  let constant = true;
  for (const q of [-12, -5, 3, 9, 15]) if (!approx(asQuotes({ ...WE, q }).spread, base, 1e-12)) constant = false;
  check('AS4', 'spread independent of q', constant);
}

// ─── AS5: decomposition + symmetry around r ────────────────────────────
{
  const Q = asQuotes({ ...WE, q: 7 });
  check('AS5', 'spread = invTerm + microTerm', approx(Q.spread, Q.invTerm + Q.microTerm, 1e-12));
  check('AS5', 'ask − r = r − bid = spread/2', approx(Q.ask - Q.r, Q.spread / 2) && approx(Q.r - Q.bid, Q.spread / 2));
  check('AS5', 'ask − bid = spread', approx(Q.ask - Q.bid, Q.spread, 1e-12));
}

// ─── AS6: t→T regime — skew vanishes, spread → microstructure floor ────
{
  const atClose = asQuotes({ ...WE, q: 8, timeLeft: 0 });
  check('AS6', 'timeLeft=0 ⇒ invTerm = 0', approx(atClose.invTerm, 0, 1e-12));
  check('AS6', 'timeLeft=0 ⇒ no skew (r = s)', approx(atClose.r, WE.s, 1e-12));
  check('AS6', 'timeLeft=0 ⇒ spread = micro floor', approx(atClose.spread, atClose.microTerm, 1e-12));
  const early = asQuotes({ ...WE, q: 8, timeLeft: 1 });
  check('AS6', 'spread wider early than at close', early.spread > atClose.spread);
}

// ─── AS7: comparative statics of the skew magnitude |r−s| = |q|γσ²(T−t) ─
{
  const sk = (o) => Math.abs(asQuotes({ ...WE, ...o }).r - WE.s);
  check('AS7', 'skew ↑ with |q|', sk({ q: 10 }) > sk({ q: 3 }));
  check('AS7', 'skew ↑ with γ', sk({ q: 5, gamma: 0.3 }) > sk({ q: 5, gamma: 0.05 }));
  check('AS7', 'skew ↑ with σ', sk({ q: 5, sigma: 3 }) > sk({ q: 5, sigma: 1 }));
  check('AS7', 'skew ↑ with time left', sk({ q: 5, timeLeft: 1 }) > sk({ q: 5, timeLeft: 0.2 }));
  check('AS7', 'inventory-risk premium ↑ with σ', asQuotes({ ...WE, q: 0, sigma: 3 }).invTerm > asQuotes({ ...WE, q: 0, sigma: 1 }).invTerm);
}

// ─── AS8: deep-long desperation — ask can fall below the mid ───────────
{
  const veryLong = asQuotes({ ...WE, q: 15 });   // skew 15·0.4=6 ≫ spread/2≈0.845
  check('AS8', 'deep long ⇒ ask below mid (desperate to sell)', veryLong.ask < WE.s);
  const veryShort = asQuotes({ ...WE, q: -15 });
  check('AS8', 'deep short ⇒ bid above mid (desperate to buy)', veryShort.bid > WE.s);
}

const passed = results.filter(r => r.ok).length;
console.log(`\nTotal: ${passed}/${results.length}`);
if (passed === results.length) console.log('All checks pass. Avellaneda-Stoikov simulator matches the 2008 quotes.');
process.exit(passed === results.length ? 0 : 1);
