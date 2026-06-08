#!/usr/bin/env node
// Persistent verification harness for the Glosten-Milgrom Bayesian simulator.
//
// Verifies the live GM helpers (gmPosteriorOnBuy, gmPosteriorOnSell, gmAsk,
// gmBid, simulateGM) in js/viz.js against the closed-form theory in the
// Glosten-Milgrom 1985 paper.
//
// Coverage:
//   B1: Posterior formulas (closed-form values at default + boundary params)
//   B2: Quote formulas (ask, bid)
//   B3: Spread formula s = α(V_H - V_L) at π=0.5 + edge regimes
//   B4: Convergence (simulateGM converges to truth across many seeds)
//   B5: Spread shrinkage over trade sequences
//   B6: Determinism (same seed = same result)
//   B7: Boundary behavior (α=0, α=1, π=0, π=1)
//   B8: Martingale property (E[m_{t+1} | F_t] = m_t, sampled)
//
// Usage:
//   node scripts/verify-gm-sim.mjs                  # full run
//   node scripts/verify-gm-sim.mjs --quiet          # only failures + summary
//   node scripts/verify-gm-sim.mjs --section B5     # filter to one section
//
// Exit code: 0 = all pass, 1 = any fail.

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

// ─── Load live GM helpers from viz.js ───────────────────────────────────
const vizMod = await import(pathToFileURL(path.join(ROOT, 'js/viz.js')).href);
const { gmPosteriorOnBuy, gmPosteriorOnSell, gmAsk, gmBid, simulateGM, COMPONENTS } = vizMod;
for (const [name, fn] of Object.entries({ gmPosteriorOnBuy, gmPosteriorOnSell, gmAsk, gmBid, simulateGM })) {
  if (typeof fn !== 'function') {
    console.error(`FAIL: ${name} not exported from js/viz.js`);
    process.exit(1);
  }
}
if (!COMPONENTS?.GlostenMilgromBayesianSim) {
  console.error('FAIL: GlostenMilgromBayesianSim not registered as viz component');
  process.exit(1);
}

// ─── Test infrastructure ────────────────────────────────────────────────
const TOL = 1e-9;
const results = [];

function check(section, label, expected, actual, tol = TOL) {
  if (sectionFilter && section !== sectionFilter) return;
  const diff = Math.abs(expected - actual);
  const ok = diff <= tol;
  results.push({ section, label, expected, actual, diff, ok });
  if (!QUIET && !ok) {
    console.log(`  [${section}] ✗ ${label}: expected ${expected}, got ${actual}, diff ${diff}`);
  }
}

function checkBool(section, label, cond, detail = '') {
  if (sectionFilter && section !== sectionFilter) return;
  results.push({ section, label, ok: cond, detail });
  if (!QUIET && !cond) {
    console.log(`  [${section}] ✗ ${label}${detail ? ': ' + detail : ''}`);
  }
}

// ─── B1: Posterior formulas at default + boundary params ────────────────
{
  // At π=0.5, α=0.3 (default GM viz params): canonical worked-example values
  check('B1', 'P(V_H | buy) at π=0.5, α=0.3', 0.65, gmPosteriorOnBuy(0.5, 0.3));
  check('B1', 'P(V_H | sell) at π=0.5, α=0.3', 0.35, gmPosteriorOnSell(0.5, 0.3));

  // Sum of P(V_H | buy) and P(V_H | sell) is NOT 1 in general (those are
  // different conditional probabilities given different observations) but at
  // π=0.5 by symmetry they should sum to 1.
  check('B1', 'P(V_H|buy) + P(V_H|sell) = 1 at π=0.5 (symmetry)', 1,
    gmPosteriorOnBuy(0.5, 0.3) + gmPosteriorOnSell(0.5, 0.3));

  // At π=0.5, α=0.5: P(buy) = 0.5·0.75 + 0.5·0.25 = 0.5; posterior buy = 0.75
  check('B1', 'P(V_H | buy) at π=0.5, α=0.5', 0.75, gmPosteriorOnBuy(0.5, 0.5));
  check('B1', 'P(V_H | sell) at π=0.5, α=0.5', 0.25, gmPosteriorOnSell(0.5, 0.5));

  // α=0 boundary: no information transmission, posterior equals prior
  check('B1', 'α=0 buy preserves prior π=0.3', 0.3, gmPosteriorOnBuy(0.3, 0));
  check('B1', 'α=0 sell preserves prior π=0.7', 0.7, gmPosteriorOnSell(0.7, 0));
  check('B1', 'α=0 buy preserves prior π=0.95', 0.95, gmPosteriorOnBuy(0.95, 0));

  // α=1 boundary: full information transmission, posterior is degenerate
  check('B1', 'α=1 buy implies V_H certain', 1, gmPosteriorOnBuy(0.5, 1));
  check('B1', 'α=1 sell implies V_L certain', 0, gmPosteriorOnSell(0.5, 1));

  // π=0 boundary: certain V_L, no update from trades
  check('B1', 'π=0 buy stays at π=0', 0, gmPosteriorOnBuy(0, 0.3));
  check('B1', 'π=0 sell stays at π=0', 0, gmPosteriorOnSell(0, 0.3));

  // π=1 boundary: certain V_H
  check('B1', 'π=1 buy stays at π=1', 1, gmPosteriorOnBuy(1, 0.3));
  check('B1', 'π=1 sell stays at π=1', 1, gmPosteriorOnSell(1, 0.3));

  // Posterior on buy >= prior (buy is bullish signal); posterior on sell <= prior
  for (const pi of [0.1, 0.3, 0.5, 0.7, 0.9]) {
    for (const alpha of [0.1, 0.3, 0.5, 0.7, 0.9]) {
      checkBool('B1', `buy raises posterior at π=${pi}, α=${alpha}`,
        gmPosteriorOnBuy(pi, alpha) >= pi - 1e-9);
      checkBool('B1', `sell lowers posterior at π=${pi}, α=${alpha}`,
        gmPosteriorOnSell(pi, alpha) <= pi + 1e-9);
    }
  }
}

// ─── B2: Quote formulas ─────────────────────────────────────────────────
{
  // Default GM viz: V_H=110, V_L=90, π=0.5, α=0.3 → ask=103, bid=97
  check('B2', 'ask at π=0.5, α=0.3, V=110/90', 103, gmAsk(0.5, 0.3, 110, 90));
  check('B2', 'bid at π=0.5, α=0.3, V=110/90', 97, gmBid(0.5, 0.3, 110, 90));

  // Different V scale — mid = (V_H + V_L)/2 = 45, spread = α·(V_H - V_L) = 3
  check('B2', 'ask at π=0.5, α=0.3, V=50/40', 46.5, gmAsk(0.5, 0.3, 50, 40));
  check('B2', 'bid at π=0.5, α=0.3, V=50/40', 43.5, gmBid(0.5, 0.3, 50, 40));

  // α=0: ask = bid = prior expectation
  check('B2', 'α=0: ask = prior μ at π=0.5', 100, gmAsk(0.5, 0, 110, 90));
  check('B2', 'α=0: bid = prior μ at π=0.5', 100, gmBid(0.5, 0, 110, 90));
  check('B2', 'α=0: ask = prior μ at π=0.3', 96, gmAsk(0.3, 0, 110, 90));
  check('B2', 'α=0: bid = prior μ at π=0.3', 96, gmBid(0.3, 0, 110, 90));

  // α=1: ask = V_H, bid = V_L regardless of π
  for (const pi of [0.1, 0.3, 0.5, 0.7, 0.9]) {
    check('B2', `α=1, π=${pi}: ask = V_H`, 110, gmAsk(pi, 1, 110, 90));
    check('B2', `α=1, π=${pi}: bid = V_L`, 90, gmBid(pi, 1, 110, 90));
  }

  // Ask >= bid always (no arbitrage)
  for (const pi of [0.1, 0.5, 0.9]) {
    for (const alpha of [0.05, 0.3, 0.5, 0.7, 0.95]) {
      checkBool('B2', `ask >= bid at π=${pi}, α=${alpha}`,
        gmAsk(pi, alpha, 110, 90) >= gmBid(pi, alpha, 110, 90) - 1e-9);
    }
  }
}

// ─── B3: Spread formula s = α(V_H - V_L) at π=0.5 + edge regimes ───────
{
  for (const alpha of [0.1, 0.2, 0.3, 0.5, 0.7, 0.9]) {
    const spread = gmAsk(0.5, alpha, 110, 90) - gmBid(0.5, alpha, 110, 90);
    check('B3', `spread at π=0.5 = α·(V_H-V_L) at α=${alpha}`, alpha * 20, spread);
  }

  // At α=1, spread = full V range regardless of π (market breakdown)
  for (const pi of [0.1, 0.3, 0.5, 0.7, 0.9]) {
    check('B3', `spread at α=1, π=${pi} = V_H - V_L`, 20,
      gmAsk(pi, 1, 110, 90) - gmBid(pi, 1, 110, 90));
  }

  // At α=0, spread = 0 regardless of π
  for (const pi of [0.1, 0.3, 0.5, 0.7, 0.9]) {
    check('B3', `spread at α=0, π=${pi} = 0`, 0,
      gmAsk(pi, 0, 110, 90) - gmBid(pi, 0, 110, 90));
  }

  // Spread vanishes as π → 0 or 1 (MM certain about V)
  checkBool('B3', 'spread at π=0.01 small',
    (gmAsk(0.01, 0.3, 110, 90) - gmBid(0.01, 0.3, 110, 90)) < 0.5);
  checkBool('B3', 'spread at π=0.99 small',
    (gmAsk(0.99, 0.3, 110, 90) - gmBid(0.99, 0.3, 110, 90)) < 0.5);

  // Spread maximal at π=0.5 (most uncertainty)
  const sAt05 = gmAsk(0.5, 0.3, 110, 90) - gmBid(0.5, 0.3, 110, 90);
  for (const pi of [0.1, 0.2, 0.3, 0.4, 0.6, 0.7, 0.8, 0.9]) {
    const s = gmAsk(pi, 0.3, 110, 90) - gmBid(pi, 0.3, 110, 90);
    checkBool('B3', `spread at π=${pi} ≤ spread at π=0.5 (max at uncertainty)`, s <= sAt05 + 1e-9);
  }
}

// ─── B4: Convergence to truth ───────────────────────────────────────────
{
  // Run many seeds at default params, true=H, large nTrades; mean final π
  // should be very close to 1.
  const N = 30;  // seeds
  let sumPiH = 0, sumPiL = 0;
  for (let seed = 1; seed <= N; seed++) {
    const sH = simulateGM({ alpha: 0.3, V_H: 110, V_L: 90, pi0: 0.5, trueState: 'H', nTrades: 300, seed });
    const sL = simulateGM({ alpha: 0.3, V_H: 110, V_L: 90, pi0: 0.5, trueState: 'L', nTrades: 300, seed });
    sumPiH += sH.pi[sH.pi.length - 1];
    sumPiL += sL.pi[sL.pi.length - 1];
  }
  const meanFinalPiH = sumPiH / N;
  const meanFinalPiL = sumPiL / N;
  checkBool('B4', `mean final π → 1 when true=H (got ${meanFinalPiH.toFixed(3)})`, meanFinalPiH > 0.99);
  checkBool('B4', `mean final π → 0 when true=L (got ${meanFinalPiL.toFixed(3)})`, meanFinalPiL < 0.01);

  // Faster convergence at higher α (more informative trades)
  const lowAlpha = simulateGM({ alpha: 0.1, V_H: 110, V_L: 90, pi0: 0.5, trueState: 'H', nTrades: 100, seed: 1 });
  const highAlpha = simulateGM({ alpha: 0.7, V_H: 110, V_L: 90, pi0: 0.5, trueState: 'H', nTrades: 100, seed: 1 });
  checkBool('B4', 'higher α converges faster (at same nTrades, π_final strictly closer to truth)',
    Math.abs(1 - highAlpha.pi[100]) < Math.abs(1 - lowAlpha.pi[100]));
}

// ─── B5: Spread shrinkage over trade sequence ───────────────────────────
{
  // At true state, spread shrinks toward 0 over many trades
  const sim = simulateGM({ alpha: 0.3, V_H: 110, V_L: 90, pi0: 0.5, trueState: 'H', nTrades: 200, seed: 42 });
  const openSpread = sim.ask[0] - sim.bid[0];
  const finalSpread = sim.ask[sim.ask.length - 1] - sim.bid[sim.bid.length - 1];
  checkBool('B5', `open spread = α·(V_H-V_L) = 6 at default (got ${openSpread.toFixed(3)})`,
    Math.abs(openSpread - 6) < 1e-6);
  checkBool('B5', `final spread < open spread (got ${finalSpread.toFixed(3)} < ${openSpread})`,
    finalSpread < openSpread);
  checkBool('B5', `final spread small at 200 trades (got ${finalSpread.toFixed(3)} < 1)`,
    finalSpread < 1.0);
}

// ─── B6: Determinism (same seed = same result) ──────────────────────────
{
  const a = simulateGM({ alpha: 0.4, V_H: 110, V_L: 90, pi0: 0.5, trueState: 'H', nTrades: 50, seed: 7 });
  const b = simulateGM({ alpha: 0.4, V_H: 110, V_L: 90, pi0: 0.5, trueState: 'H', nTrades: 50, seed: 7 });
  let allMatch = true;
  for (let i = 0; i <= 50; i++) {
    if (a.pi[i] !== b.pi[i] || a.ask[i] !== b.ask[i] || a.bid[i] !== b.bid[i]) {
      allMatch = false;
      break;
    }
    if (i > 0 && a.trades[i] !== b.trades[i]) { allMatch = false; break; }
  }
  checkBool('B6', 'seeded simulation deterministic (51 timesteps, all 4 series)', allMatch);

  // Different seeds produce different results
  const c = simulateGM({ alpha: 0.4, V_H: 110, V_L: 90, pi0: 0.5, trueState: 'H', nTrades: 50, seed: 8 });
  checkBool('B6', 'different seeds produce different results',
    a.pi[50] !== c.pi[50] || a.trades.some((t, i) => t !== c.trades[i]));
}

// ─── B7: Boundary behavior ──────────────────────────────────────────────
{
  // π=0: stays at 0 regardless of trades
  const sim0 = simulateGM({ alpha: 0.3, V_H: 110, V_L: 90, pi0: 0.0, trueState: 'L', nTrades: 20, seed: 1 });
  checkBool('B7', 'π=0 stays at 0 across 20 trades', sim0.pi.every(p => p === 0));

  // π=1: stays at 1
  const sim1 = simulateGM({ alpha: 0.3, V_H: 110, V_L: 90, pi0: 1.0, trueState: 'H', nTrades: 20, seed: 1 });
  checkBool('B7', 'π=1 stays at 1 across 20 trades', sim1.pi.every(p => p === 1));

  // α=0: no learning, mid stays at prior expectation
  const sim_a0 = simulateGM({ alpha: 0, V_H: 110, V_L: 90, pi0: 0.5, trueState: 'H', nTrades: 30, seed: 1 });
  const midPrior = 100;
  checkBool('B7', 'α=0: mid stays at prior expectation across trades',
    sim_a0.mid.every(m => Math.abs(m - midPrior) < 1e-9));

  // α=1 with true=H: posterior should jump to 1 instantly on first buy
  const sim_a1 = simulateGM({ alpha: 1, V_H: 110, V_L: 90, pi0: 0.5, trueState: 'H', nTrades: 5, seed: 1 });
  // At α=1, informed trader always buys (V=V_H), uninformed never exists
  // So first trade is always buy, π jumps to 1
  checkBool('B7', 'α=1, true=H: π converges to 1 in 1 step',
    sim_a1.pi[1] === 1 && sim_a1.trades[1] === 'buy');
}

// ─── B8: Martingale property — E[μ_{t+1} | F_t] = μ_t ─────────────────
// In GM the martingale is the posterior expectation of V, μ_t = π_t·V_H +
// (1-π_t)·V_L (the MM's best estimate of fundamental value given information
// at time t). The (ask+bid)/2 "mid" is NOT generally a martingale — it
// coincides with μ_t only at π=0.5 by symmetry, but diverges elsewhere
// because (posterior_buy + posterior_sell)/2 ≠ π in general.
{
  for (const [pi, alpha] of [[0.3, 0.2], [0.5, 0.3], [0.7, 0.4], [0.4, 0.6], [0.1, 0.9], [0.9, 0.1]]) {
    const VH = 110, VL = 90;
    const muT = pi * VH + (1 - pi) * VL;
    const pBuy = pi * (1 + alpha) / 2 + (1 - pi) * (1 - alpha) / 2;
    const pSell = 1 - pBuy;
    const piAfterBuy = gmPosteriorOnBuy(pi, alpha);
    const piAfterSell = gmPosteriorOnSell(pi, alpha);
    const muAfterBuy = piAfterBuy * VH + (1 - piAfterBuy) * VL;
    const muAfterSell = piAfterSell * VH + (1 - piAfterSell) * VL;
    const expectedNextMu = pBuy * muAfterBuy + pSell * muAfterSell;
    check('B8', `martingale E[μ_{t+1}|F_t] = μ_t at π=${pi}, α=${alpha}`,
      muT, expectedNextMu, 1e-9);
  }

  // Verify that (ask+bid)/2 mid equals μ_t at π=0.5 (symmetry) but NOT
  // necessarily elsewhere. This is a useful sanity check on the model itself.
  const VH = 110, VL = 90;
  const mid05 = (gmAsk(0.5, 0.3, VH, VL) + gmBid(0.5, 0.3, VH, VL)) / 2;
  const mu05 = 0.5 * VH + 0.5 * VL;
  check('B8', '(a+b)/2 = μ at π=0.5 (symmetry)', mu05, mid05, 1e-9);
  // At π=0.3, the (a+b)/2 mid differs from μ_t — this is a feature, not a bug
  const mid03 = (gmAsk(0.3, 0.3, VH, VL) + gmBid(0.3, 0.3, VH, VL)) / 2;
  const mu03 = 0.3 * VH + 0.7 * VL;
  checkBool('B8', '(a+b)/2 ≠ μ at π=0.3 (asymmetric posteriors)',
    Math.abs(mid03 - mu03) > 0.01, `mid=${mid03.toFixed(3)}, μ=${mu03.toFixed(3)}`);
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
  console.log('\n=== Glosten-Milgrom simulator verification ===');
  for (const sec of Object.keys(bySection).sort()) {
    const s = bySection[sec];
    console.log(`  ${sec}: ${s.passed}/${s.total}${s.passed === s.total ? ' ✓' : ' ✗'}`);
  }
  console.log(`\nTotal: ${passed}/${total}`);
}

if (failed.length === 0) {
  if (!QUIET) console.log('All checks pass. GM simulator matches paper theory.');
  process.exit(0);
} else {
  console.log(`\n${failed.length} failures:`);
  for (const f of failed.slice(0, 20)) {
    if (f.expected !== undefined) {
      console.log(`  [${f.section}] ${f.label}: expected ${f.expected}, got ${f.actual}, diff ${f.diff}`);
    } else {
      console.log(`  [${f.section}] ${f.label}${f.detail ? ': ' + f.detail : ''}`);
    }
  }
  if (failed.length > 20) console.log(`  ... and ${failed.length - 20} more`);
  process.exit(1);
}
