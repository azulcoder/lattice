#!/usr/bin/env node
// Theory-matching harness for the Bouchaud-Bonart-Donier-Gould (2018)
// square-root impact law (js/viz.js: sqrtImpact). Asserts the law, its
// √-scaling, concavity, participation-ratio dependence, and the worked
// example, plus the concave-vs-linear contrast with Kyle.
//
//   I(Q) = Y σ √(Q/V),  φ = Q/V.
//
// Usage:  node scripts/verify-bouchaud-sim.mjs [--quiet]
// Exit code: 0 = all pass, 1 = any fail.

import { pathToFileURL, fileURLToPath } from 'node:url';
import path from 'node:path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const QUIET = process.argv.includes('--quiet');

const { sqrtImpact } = await import(pathToFileURL(path.join(ROOT, 'js/viz.js')).href);

const results = [];
function check(section, label, cond, detail = '') {
  results.push({ section, ok: !!cond });
  if (!QUIET && !cond) console.log(`  [${section}] ✗ ${label}${detail ? ': ' + detail : ''}`);
}
const approx = (a, b, eps = 1e-9) => Math.abs(a - b) <= eps;
const SQRT2 = Math.SQRT2;

// ─── B1: the module's worked example ───────────────────────────────────
{
  const I = sqrtImpact({ Y: 0.5, sigma: 0.02, phi: 0.10 });   // Q/V=0.10, σ=2%, Y=0.5
  check('B1', 'I = Yσ√(Q/V) = 0.5·0.02·√0.1', approx(I, 0.5 * 0.02 * Math.sqrt(0.10), 1e-12));
  check('B1', 'worked example I ≈ 0.3162% (0.003162)', Math.abs(I - 0.00316228) < 1e-6, `${I}`);
}

// ─── B2: square-root scaling ───────────────────────────────────────────
for (const phi of [0.02, 0.1, 0.25]) {
  const base = sqrtImpact({ Y: 0.5, sigma: 0.02, phi });
  check('B2', `I(2φ)/I(φ) = √2 (φ=${phi})`, approx(sqrtImpact({ Y: 0.5, sigma: 0.02, phi: 2 * phi }) / base, SQRT2));
  check('B2', `I(4φ)/I(φ) = 2 (φ=${phi})`, approx(sqrtImpact({ Y: 0.5, sigma: 0.02, phi: 4 * phi }) / base, 2));
  check('B2', `I(φ/4)/I(φ) = 1/2 (φ=${phi})`, approx(sqrtImpact({ Y: 0.5, sigma: 0.02, phi: phi / 4 }) / base, 0.5));
}

// ─── B3: concavity (exponent ½ < 1) ────────────────────────────────────
{
  const Y = 0.5, sigma = 0.02;
  // midpoint test: I((a+b)/2) > (I(a)+I(b))/2 for a concave function
  const a = 0.05, b = 0.35;
  const mid = sqrtImpact({ Y, sigma, phi: (a + b) / 2 });
  const chord = (sqrtImpact({ Y, sigma, phi: a }) + sqrtImpact({ Y, sigma, phi: b })) / 2;
  check('B3', 'concave: I(mid) > chord midpoint', mid > chord, `${mid} vs ${chord}`);
  // marginal impact decreasing: ΔI over equal Δφ shrinks as φ grows
  const d1 = sqrtImpact({ Y, sigma, phi: 0.11 }) - sqrtImpact({ Y, sigma, phi: 0.10 });
  const d2 = sqrtImpact({ Y, sigma, phi: 0.31 }) - sqrtImpact({ Y, sigma, phi: 0.30 });
  check('B3', 'marginal impact falls with size', d2 < d1 && d2 > 0);
}

// ─── B4: depends only on participation ratio φ = Q/V (not on level) ────
{
  const Y = 0.5, sigma = 0.02;
  const fromQV = (Q, V) => sqrtImpact({ Y, sigma, phi: Q / V });
  check('B4', 'same φ ⇒ same impact (200k/2M = 400k/4M)', approx(fromQV(200000, 2000000), fromQV(400000, 4000000)));
  check('B4', 'same φ ⇒ same impact (small vs large name)', approx(fromQV(1000, 10000), fromQV(1e7, 1e8)));
}

// ─── B5: monotone increasing in φ, Y, σ ────────────────────────────────
{
  check('B5', 'I ↑ with φ', sqrtImpact({ Y: 0.5, sigma: 0.02, phi: 0.3 }) > sqrtImpact({ Y: 0.5, sigma: 0.02, phi: 0.1 }));
  check('B5', 'I ↑ with Y', sqrtImpact({ Y: 1.0, sigma: 0.02, phi: 0.1 }) > sqrtImpact({ Y: 0.5, sigma: 0.02, phi: 0.1 }));
  check('B5', 'I ↑ with σ', sqrtImpact({ Y: 0.5, sigma: 0.04, phi: 0.1 }) > sqrtImpact({ Y: 0.5, sigma: 0.02, phi: 0.1 }));
  check('B5', 'I linear in σ', approx(sqrtImpact({ Y: 0.5, sigma: 0.04, phi: 0.1 }), 2 * sqrtImpact({ Y: 0.5, sigma: 0.02, phi: 0.1 })));
  check('B5', 'I linear in Y', approx(sqrtImpact({ Y: 1.0, sigma: 0.02, phi: 0.1 }), 2 * sqrtImpact({ Y: 0.5, sigma: 0.02, phi: 0.1 })));
}

// ─── B6: concave vs linear (Kyle) — calibrate linear at φ_ref ──────────
{
  const Y = 0.5, sigma = 0.02, phiRef = 0.10;
  const Iref = sqrtImpact({ Y, sigma, phi: phiRef });
  const linSlope = Iref / phiRef;                       // linear matched at φ_ref
  const linear = (phi) => linSlope * phi;
  // for φ > φ_ref the √-law is BELOW linear (large orders cheaper per share)
  check('B6', 'φ>φ_ref: √-law below linear (concave cheaper)', sqrtImpact({ Y, sigma, phi: 0.30 }) < linear(0.30));
  // for φ < φ_ref the √-law is ABOVE linear (small orders relatively pricier)
  check('B6', 'φ<φ_ref: √-law above linear', sqrtImpact({ Y, sigma, phi: 0.03 }) > linear(0.03));
  check('B6', 'they coincide at φ_ref', approx(sqrtImpact({ Y, sigma, phi: phiRef }), linear(phiRef)));
}

// ─── B7: the headline "√2 not 2" doubling fact ─────────────────────────
{
  const base = sqrtImpact({ Y: 0.5, sigma: 0.02, phi: 0.10 });
  const dbl = sqrtImpact({ Y: 0.5, sigma: 0.02, phi: 0.20 });
  check('B7', 'doubling order ⇒ impact ×√2 (~41% more)', approx(dbl / base, SQRT2) && Math.abs((dbl / base - 1) - 0.4142) < 1e-3);
  check('B7', 'I(0) = 0 (no order, no impact)', approx(sqrtImpact({ Y: 0.5, sigma: 0.02, phi: 0 }), 0));
}

const passed = results.filter(r => r.ok).length;
console.log(`\nTotal: ${passed}/${results.length}`);
if (passed === results.length) console.log('All checks pass. Square-root impact law matches Bouchaud et al. (2018).');
process.exit(passed === results.length ? 0 : 1);
