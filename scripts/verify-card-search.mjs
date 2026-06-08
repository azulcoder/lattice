#!/usr/bin/env node
// Harness for the global card search (js/card-search.js, Phase S21): cloze
// stripping, HTML-safe term highlighting, cross-domain card collection, the
// ranked AND-search, and the overlay/result rendering.
//
// Usage:  node scripts/verify-card-search.mjs [--quiet]
// Exit code: 0 = all pass, 1 = any fail.

import { pathToFileURL, fileURLToPath } from 'node:url';
import path from 'node:path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const QUIET = process.argv.includes('--quiet');

const cs = await import(pathToFileURL(path.join(ROOT, 'js/card-search.js')).href);
const { stripCloze, highlightTerms, collectAllCards, searchCards, searchResultsHTML, searchOverlayHTML, moveActiveIndex } = cs;

const results = [];
function check(section, label, cond, detail = '') {
  results.push({ section, ok: !!cond });
  if (!QUIET && !cond) console.log(`  [${section}] ✗ ${label}${detail ? ': ' + detail : ''}`);
}

// fixtures
const state = {
  domains: {
    micro: {
      cards: {
        m1: { id: 'm1', itemId: 'kyle-1985', front: 'What is Kyle lambda price impact', back: 'lambda is the slope of the price-impact line' },
        m2: { id: 'm2', itemId: 'kyle-1985', front: 'noise traders', back: 'uninformed flow provides cover' },
        m3: { id: 'm3', itemId: 'ghost-item', front: 'orphan card', back: 'no item title' },
        xss: { id: 'xss', itemId: 'kyle-1985', front: '<img src=x onerror=alert(1)> img-tag', back: 'b' },
      },
    },
    geo: {
      cards: {
        g1: { id: 'g1', itemId: 'acuna-2008', front: 'deliverability curve', back: 'W vs Pf relationship' },
      },
    },
  },
};
const itemsByDomain = {
  micro: [{ id: 'kyle-1985', title: 'Kyle 1985' }],
  geo: [{ id: 'acuna-2008', title: 'Acuña 2008' }],
};
const labels = { micro: 'Microstructure', geo: 'Geothermal' };

// ─── CS1: stripCloze ───────────────────────────────────────────────────
check('CS1', 'basic cloze → answer', stripCloze('the {{c1::bid-ask bounce}} induces') === 'the bid-ask bounce induces');
check('CS1', 'cloze with hint → answer only', stripCloze('{{c2::answer::hint}}') === 'answer');
check('CS1', 'multiple clozes', stripCloze('{{c1::a}} and {{c2::b}}') === 'a and b');
check('CS1', 'no cloze passes through', stripCloze('plain text') === 'plain text');

// ─── CS2: highlightTerms ───────────────────────────────────────────────
check('CS2', 'wraps term in <mark> (case-insensitive)', highlightTerms('Kyle lambda', ['kyle']) === '<mark>Kyle</mark> lambda');
check('CS2', 'multiple terms', /<mark>Kyle<\/mark>.*<mark>lambda<\/mark>/.test(highlightTerms('Kyle lambda', ['kyle', 'lambda'])));
check('CS2', 'no terms ⇒ escaped passthrough', highlightTerms('a < b', []) === 'a &lt; b');
{
  const h = highlightTerms('<img src=x> img', ['img']);
  check('CS2', 'escapes HTML (no raw <img tag; < → &lt;)', !h.includes('<img') && h.includes('&lt;'));
  check('CS2', 'still highlights the safe term', h.includes('<mark>img</mark>'));
}

// ─── CS3: collectAllCards ──────────────────────────────────────────────
{
  const all = collectAllCards(state, itemsByDomain);
  check('CS3', 'flattens every card across domains', all.length === 5);
  check('CS3', 'attaches item title', all.find((c) => c.cardId === 'm1').itemTitle === 'Kyle 1985');
  check('CS3', 'attaches domainId', all.find((c) => c.cardId === 'g1').domainId === 'geo');
  check('CS3', 'missing title ⇒ falls back to itemId', all.find((c) => c.cardId === 'm3').itemTitle === 'ghost-item');
  check('CS3', 'empty state ⇒ []', collectAllCards({ domains: {} }, {}).length === 0);
}

// ─── CS4: searchCards ──────────────────────────────────────────────────
{
  const all = collectAllCards(state, itemsByDomain);
  check('CS4', '< 2 chars ⇒ no results', searchCards(all, 'k').length === 0 && searchCards(all, '').length === 0);
  const lambda = searchCards(all, 'lambda');
  check('CS4', 'finds the lambda card', lambda.length === 1 && lambda[0].cardId === 'm1');
  const kyle = searchCards(all, 'kyle');
  check('CS4', 'front+title match outranks title-only', kyle[0].cardId === 'm1' && kyle.some((m) => m.cardId === 'm2') && kyle.findIndex((m) => m.cardId === 'm1') < kyle.findIndex((m) => m.cardId === 'm2'));
  const both = searchCards(all, 'kyle noise');
  check('CS4', 'AND across terms (kyle noise ⇒ only m2)', both.length === 1 && both[0].cardId === 'm2');
  check('CS4', 'no match ⇒ []', searchCards(all, 'zzzzz').length === 0);
  check('CS4', 'respects limit', searchCards(all, 'a', 2).length <= 2);
  check('CS4', 'deterministic', JSON.stringify(searchCards(all, 'kyle')) === JSON.stringify(searchCards(all, 'kyle')));
}

// ─── CS5: searchResultsHTML ────────────────────────────────────────────
{
  check('CS5', 'short query ⇒ hint', /at least 2/.test(searchResultsHTML([], 'k', 'en', labels)));
  check('CS5', 'enough query but no matches ⇒ no-match hint', /No cards match/.test(searchResultsHTML([], 'zzzzz', 'en', labels)));
  const all = collectAllCards(state, itemsByDomain);
  const html = searchResultsHTML(searchCards(all, 'kyle'), 'kyle', 'en', labels);
  check('CS5', 'renders a go-target per result', /data-search-go="kyle-1985"/.test(html) && /data-search-domain="micro"/.test(html));
  check('CS5', 'shows the result count', /result/.test(html));
  check('CS5', 'maps domain label', html.includes('Microstructure'));
  check('CS5', 'highlights the query term', /<mark>Kyle<\/mark>/.test(html));
  const xssHtml = searchResultsHTML(searchCards(all, 'img'), 'img', 'en', labels);
  check('CS5', 'result snippet escapes HTML (no raw <img tag)', !xssHtml.includes('<img') && xssHtml.includes('&lt;'));
}

// ─── CS7: keyboard navigation (moveActiveIndex + active highlight) ─────
{
  check('CS7', 'down moves toward the end, clamps at last', moveActiveIndex(0, 1, 3) === 1 && moveActiveIndex(2, 1, 3) === 2);
  check('CS7', 'up moves toward the start, clamps at 0', moveActiveIndex(2, -1, 3) === 1 && moveActiveIndex(0, -1, 3) === 0);
  check('CS7', 'empty list ⇒ -1', moveActiveIndex(0, 1, 0) === -1 && moveActiveIndex(0, -1, 0) === -1);
  check('CS7', 'single result clamps both ways', moveActiveIndex(0, 1, 1) === 0 && moveActiveIndex(0, -1, 1) === 0);
  const all = collectAllCards(state, itemsByDomain);
  const html = searchResultsHTML(searchCards(all, 'kyle'), 'kyle', 'en', labels, 0);
  check('CS7', 'activeIndex marks the row (class + aria-selected)', /search-result-active/.test(html) && /aria-selected="true"/.test(html));
  check('CS7', 'each result carries its index', /data-search-index="0"/.test(html));
  check('CS7', 'activeIndex -1 ⇒ no active row', !/search-result-active/.test(searchResultsHTML(searchCards(all, 'kyle'), 'kyle', 'en', labels, -1)));
}

// ─── CS6: searchOverlayHTML ────────────────────────────────────────────
{
  const en = searchOverlayHTML('en', 'lambda');
  check('CS6', 'has the search input', /data-search-input/.test(en) && /type="search"/.test(en));
  check('CS6', 'preserves the current query in value', /value="lambda"/.test(en));
  check('CS6', 'EN title', en.includes('Search cards'));
  check('CS6', 'close affordance', /data-search-close/.test(en));
  check('CS6', 'localises to ID', /Cari kartu/.test(searchOverlayHTML('id', '')));
}

const passed = results.filter((r) => r.ok).length;
console.log(`\nTotal: ${passed}/${results.length}`);
if (passed === results.length) console.log('All checks pass. Global card search (collect + rank + render) verified.');
process.exit(passed === results.length ? 0 : 1);
