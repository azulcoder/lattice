#!/usr/bin/env node
// Harness for combined cross-domain review (Phase S23): the pure due-card
// gathering across domains (with per-card `_domain` tagging + no state
// mutation), the transient-field strip used before persisting, and the new
// `review.crossDomain` setting default / merge behaviour.
//
// Usage:  node scripts/verify-cross-domain.mjs [--quiet]
// Exit code: 0 = all pass, 1 = any fail.

import { pathToFileURL, fileURLToPath } from 'node:url';
import path from 'node:path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const QUIET = process.argv.includes('--quiet');

if (typeof globalThis.localStorage === 'undefined') {
  const m = new Map();
  globalThis.localStorage = { getItem: (k) => (m.has(k) ? m.get(k) : null), setItem: (k, v) => m.set(k, String(v)), removeItem: (k) => m.delete(k) };
}

const storage = await import(pathToFileURL(path.join(ROOT, 'js/storage.js')).href);
const { getDueCards, getDueCardsAllDomains, stripTransientFields } = storage;
const cfg = await import(pathToFileURL(path.join(ROOT, 'data/shared/ai-config.js')).href);

const results = [];
function check(section, label, cond, detail = '') {
  results.push({ section, ok: !!cond });
  if (!QUIET && !cond) console.log(`  [${section}] ✗ ${label}${detail ? ': ' + detail : ''}`);
}
const TODAY = '2026-06-05';

// Two-domain fixture: each domain has one due, one future, one unscheduled card.
function freshState() {
  return {
    domains: {
      micro: {
        cards: {
          m_due: { id: 'm_due', itemId: 'kyle-1985', nextReview: '2026-06-01', interval: 6 },
          m_fut: { id: 'm_fut', itemId: 'kyle-1985', nextReview: '2026-07-01', interval: 30 },
          m_new: { id: 'm_new', itemId: 'kyle-1985', nextReview: null, interval: 0 },
        },
      },
      geo: {
        cards: {
          g_due: { id: 'g_due', itemId: 'acuna-2008', nextReview: TODAY, interval: 3 },
          g_fut: { id: 'g_fut', itemId: 'acuna-2008', nextReview: '2026-08-01', interval: 60 },
        },
      },
    },
  };
}

// ─── X1: getDueCardsAllDomains gathers + tags ──────────────────────────
{
  const state = freshState();
  const due = getDueCardsAllDomains(state, TODAY);
  const ids = due.map((c) => c.id).sort();
  check('X1', 'gathers due cards from every domain', JSON.stringify(ids) === JSON.stringify(['g_due', 'm_due']));
  check('X1', 'excludes future + unscheduled cards', !due.some((c) => c.id === 'm_fut' || c.id === 'g_fut' || c.id === 'm_new'));
  check('X1', 'tags each card with its _domain', due.find((c) => c.id === 'm_due')._domain === 'micro' && due.find((c) => c.id === 'g_due')._domain === 'geo');
  check('X1', 'count = sum of per-domain due', due.length === getDueCards(state, 'micro', TODAY).length + getDueCards(state, 'geo', TODAY).length);
}

// ─── X2: purity — no mutation, returns copies ──────────────────────────
{
  const state = freshState();
  const due = getDueCardsAllDomains(state, TODAY);
  check('X2', 'stored cards are not mutated (no _domain leak)', state.domains.micro.cards.m_due._domain === undefined && state.domains.geo.cards.g_due._domain === undefined);
  check('X2', 'returned cards are fresh copies, not references', due.every((c) => {
    const stored = state.domains[c._domain].cards[c.id];
    return c !== stored;
  }));
  check('X2', 'empty/absent domains ⇒ []', getDueCardsAllDomains({ domains: {} }, TODAY).length === 0 && getDueCardsAllDomains({}, TODAY).length === 0);
}

// ─── X3: stripTransientFields ──────────────────────────────────────────
{
  const tagged = { id: 'x', itemId: 'i', interval: 6, nextReview: TODAY, _domain: 'micro', _sourceLabel: 'Kyle (1985)', _domainLabel: 'Microstructure' };
  const clean = stripTransientFields(tagged);
  check('X3', 'drops every _-prefixed field', clean._domain === undefined && clean._sourceLabel === undefined && clean._domainLabel === undefined);
  check('X3', 'keeps the real card fields', clean.id === 'x' && clean.itemId === 'i' && clean.interval === 6 && clean.nextReview === TODAY);
  check('X3', 'does not mutate the input', tagged._domain === 'micro');
  check('X3', 'null-safe', JSON.stringify(stripTransientFields(null)) === '{}' && JSON.stringify(stripTransientFields(undefined)) === '{}');
  // The round-trip an onRate write performs: a tagged card cleaned for storage.
  check('X3', 'cleaned card has no underscore keys', Object.keys(clean).every((k) => !k.startsWith('_')));
}

// ─── X4: the review.crossDomain setting ────────────────────────────────
{
  check('X4', 'default crossDomain is false', cfg.defaultSettings().review.crossDomain === false);
  check('X4', 'mergeWithDefaults preserves a stored true', cfg.mergeWithDefaults({ review: { crossDomain: true } }).review.crossDomain === true);
  check('X4', 'mergeWithDefaults fills crossDomain when absent', cfg.mergeWithDefaults({ review: { scheduler: 'fsrs' } }).review.crossDomain === false);
  check('X4', 'crossDomain coexists with other review settings', (() => {
    const m = cfg.mergeWithDefaults({ review: { crossDomain: true, scheduler: 'fsrs' } }).review;
    return m.crossDomain === true && m.scheduler === 'fsrs';
  })());
}

const passed = results.filter((r) => r.ok).length;
console.log(`\nTotal: ${passed}/${results.length}`);
if (passed === results.length) console.log('All checks pass. Combined cross-domain review (gather + tag + strip + setting) verified.');
process.exit(passed === results.length ? 0 : 1);
