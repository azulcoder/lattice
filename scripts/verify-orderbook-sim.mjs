#!/usr/bin/env node
// Harness for the interactive limit-order-book ladder model (js/viz.js):
// book construction, best-bid/ask/mid/spread, and market-order walks
// (price impact, slippage, depth consumption, conservation, symmetry,
// determinism). Plus a render smoke-test of the OrderBookSim component
// against a stub host in both EN and ID.
//
// Usage:  node scripts/verify-orderbook-sim.mjs [--quiet]
// Exit code: 0 = all pass, 1 = any fail.

import { pathToFileURL, fileURLToPath } from 'node:url';
import path from 'node:path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const QUIET = process.argv.includes('--quiet');

const viz = await import(pathToFileURL(path.join(ROOT, 'js/viz.js')).href);
const { makeBook, bestAsk, bestBid, bookMid, bookSpread, marketBuy, marketSell } = viz;

const results = [];
function check(section, label, cond, detail = '') {
  results.push({ section, ok: !!cond });
  if (!QUIET && !cond) console.log(`  [${section}] ✗ ${label}${detail ? ': ' + detail : ''}`);
}

// ─── O1: book construction ─────────────────────────────────────────────
{
  const b = makeBook({ mid: 100, tick: 0.05, levels: 8, depth: 200, seed: 7 });
  check('O1', '8 ask levels, 8 bid levels', b.asks.length === 8 && b.bids.length === 8);
  check('O1', 'asks ascending in price', b.asks.every((l, i) => i === 0 || l.price > b.asks[i - 1].price));
  check('O1', 'bids descending in price', b.bids.every((l, i) => i === 0 || l.price < b.bids[i - 1].price));
  check('O1', 'all sizes positive', b.asks.every((l) => l.size > 0) && b.bids.every((l) => l.size > 0));
  check('O1', 'tick preserved', b.tick === 0.05);
  check('O1', 'best ask = mid + tick', b.asks[0].price === 100.05);
  check('O1', 'best bid = mid - tick', b.bids[0].price === 99.95);
}

// ─── O2: touch / mid / spread ──────────────────────────────────────────
{
  const b = makeBook({ mid: 100, tick: 0.05, levels: 8, depth: 200, seed: 7 });
  check('O2', 'bestAsk = first ask price', bestAsk(b) === b.asks[0].price);
  check('O2', 'bestBid = first bid price', bestBid(b) === b.bids[0].price);
  check('O2', 'mid = (ask+bid)/2', bookMid(b) === 100);
  check('O2', 'spread = ask - bid', bookSpread(b) === 0.1);
  check('O2', 'ask > bid (no crossed book)', bestAsk(b) > bestBid(b));
}

// ─── O3: market buy walks asks upward ──────────────────────────────────
{
  const b = makeBook({ mid: 100, tick: 0.05, levels: 8, depth: 200, seed: 7 });
  const ba0 = bestAsk(b);
  const q = b.asks[0].size + 10;   // enough to clear level-0 and dig into level-1
  const r = marketBuy(b, q);
  check('O3', 'filled = requested (within depth)', r.filled === q);
  check('O3', 'avgPrice ≥ initial best ask', r.avgPrice >= ba0);
  check('O3', 'slippage = avg - bestAsk ≥ 0', r.slippage >= 0 && Math.abs(r.slippage - (r.avgPrice - ba0)) < 1e-9);
  check('O3', 'best ask moved up after clearing level 0', bestAsk(r.book) > ba0);
  check('O3', 'original book unmutated (pure)', b.asks[0].size === makeBook({ mid: 100, tick: 0.05, levels: 8, depth: 200, seed: 7 }).asks[0].size);
}

// ─── O4: market sell walks bids downward ───────────────────────────────
{
  const b = makeBook({ mid: 100, tick: 0.05, levels: 8, depth: 200, seed: 7 });
  const bb0 = bestBid(b);
  const q = b.bids[0].size + 10;
  const r = marketSell(b, q);
  check('O4', 'filled = requested (within depth)', r.filled === q);
  check('O4', 'avgPrice ≤ initial best bid', r.avgPrice <= bb0);
  check('O4', 'slippage = bestBid - avg ≥ 0', r.slippage >= 0 && Math.abs(r.slippage - (bb0 - r.avgPrice)) < 1e-9);
  check('O4', 'best bid moved down after clearing level 0', bestBid(r.book) < bb0);
}

// ─── O5: bigger orders pay more slippage (convex impact) ───────────────
{
  const b = makeBook({ mid: 100, tick: 0.05, levels: 8, depth: 200, seed: 7 });
  const small = marketBuy(b, b.asks[0].size + 5);
  const big = marketBuy(b, b.asks[0].size + b.asks[1].size + b.asks[2].size + 5);
  check('O5', 'bigger buy ⇒ ≥ slippage', big.slippage >= small.slippage);
  check('O5', 'bigger buy ⇒ ≥ avg price', big.avgPrice >= small.avgPrice);
}

// ─── O6: conservation — cannot fill beyond available depth ─────────────
{
  const b = makeBook({ mid: 100, tick: 0.05, levels: 8, depth: 200, seed: 7 });
  const totalAsk = b.asks.reduce((a, l) => a + l.size, 0);
  const r = marketBuy(b, totalAsk + 10000);
  check('O6', 'filled capped at total depth', r.filled === totalAsk);
  check('O6', 'book fully drained ⇒ no best ask', bestAsk(r.book) === null);
  check('O6', 'spread/mid null when one side empty', bookMid(r.book) === null && bookSpread(r.book) === null);
}

// ─── O7: determinism (same seed ⇒ identical book) ──────────────────────
{
  const a = makeBook({ mid: 100, tick: 0.05, levels: 8, depth: 200, seed: 99 });
  const b = makeBook({ mid: 100, tick: 0.05, levels: 8, depth: 200, seed: 99 });
  const c = makeBook({ mid: 100, tick: 0.05, levels: 8, depth: 200, seed: 100 });
  check('O7', 'same seed ⇒ identical sizes', a.asks.every((l, i) => l.size === b.asks[i].size));
  check('O7', 'different seed ⇒ different sizes', a.asks.some((l, i) => l.size !== c.asks[i].size));
}

// ─── O8: render smoke-test (Proxy stub host, EN + ID) ──────────────────
{
  function stubEl() {
    const self = new Proxy(function () {}, {
      get(_, prop) {
        if (prop === 'value') return '300';
        if (prop === 'innerHTML' || prop === 'textContent') return '';
        if (prop === 'addEventListener') return () => {};
        if (prop === 'querySelector') return () => stubEl();
        if (prop === 'querySelectorAll') return () => [];
        if (prop === 'style') return {};
        return () => self;
      },
      set() { return true; },
      apply() { return self; },
    });
    return self;
  }
  const comp = viz.COMPONENTS.OrderBookSim;
  check('O8', 'OrderBookSim registered', typeof comp === 'function');
  for (const lang of ['en', 'id']) {
    let captured = null, threw = null;
    try {
      const host = { controlsRoot: stubEl(), canvasRoot: stubEl(), readoutRoot: stubEl(), onReset(fn) { captured = fn; } };
      comp(host, {}, lang);
      if (captured) captured();   // exercise the reset path too
    } catch (e) { threw = e; }
    check('O8', `renders without throwing (${lang})`, threw === null, threw ? threw.message : '');
  }
}

const passed = results.filter((r) => r.ok).length;
console.log(`\nTotal: ${passed}/${results.length}`);
if (passed === results.length) console.log('All checks pass. Order-book ladder model + render verified.');
process.exit(passed === results.length ? 0 : 1);
