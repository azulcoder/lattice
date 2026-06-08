// Global card search across all domains (Phase S21). A `/`-triggered overlay
// searches every card's front/back (and its source title) in every loaded
// domain, ranks the hits, and lets you jump straight to the source in the
// Library. The matching/ranking/rendering core is pure and unit-tested; app.js
// owns the open/close + navigation wiring.

import { escapeHTML } from './util.js';

// Strip Anki-style cloze markup {{c1::answer::hint}} → answer, for display.
export function stripCloze(s) {
  return String(s || '').replace(/\{\{c\d+::(.*?)(?:::.*?)?\}\}/g, '$1');
}

const norm = (s) => String(s || '').toLowerCase();
const escapeRegex = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

// HTML-safe text with <mark> around each term occurrence (case-insensitive).
export function highlightTerms(text, terms) {
  let html = escapeHTML(String(text || ''));
  for (const t of terms) {
    if (!t) continue;
    const et = escapeHTML(t);
    html = html.replace(new RegExp(escapeRegex(et), 'gi'), (m) => `<mark>${m}</mark>`);
  }
  return html;
}

// Flatten every card in every loaded domain into a searchable record.
//   state.domains[domainId].cards : { cardId: card }
//   itemsByDomain[domainId]       : [{ id, title, ... }]
export function collectAllCards(state, itemsByDomain) {
  const out = [];
  const domains = (state && state.domains) || {};
  for (const domainId of Object.keys(domains)) {
    const cards = (domains[domainId] && domains[domainId].cards) || {};
    const items = (itemsByDomain && itemsByDomain[domainId]) || [];
    const titleOf = new Map(items.map((i) => [i.id, i.title]));
    for (const card of Object.values(cards)) {
      out.push({
        cardId: card.id,
        domainId,
        itemId: card.itemId,
        itemTitle: titleOf.get(card.itemId) || card.itemId,
        front: card.front || '',
        back: card.back || '',
      });
    }
  }
  return out;
}

// Rank cards against a query. AND across terms (every term must appear in
// front+back+title); score weights front > title > back, with a full-phrase
// bonus. Deterministic tie-break. Query under 2 chars returns nothing.
export function searchCards(cards, query, limit = 40) {
  const q = norm(query).trim();
  if (q.length < 2) return [];
  const terms = q.split(/\s+/).filter(Boolean);
  const matches = [];
  for (const c of cards) {
    const front = norm(c.front), back = norm(c.back), title = norm(c.itemTitle);
    if (!terms.every((t) => front.includes(t) || back.includes(t) || title.includes(t))) continue;
    let score = 0;
    for (const t of terms) {
      if (front.includes(t)) score += 3;
      if (title.includes(t)) score += 2;
      if (back.includes(t)) score += 1;
    }
    if (front.includes(q) || back.includes(q)) score += 5;   // contiguous-phrase bonus
    matches.push({ ...c, score });
  }
  matches.sort((a, b) =>
    b.score - a.score ||
    String(a.itemTitle).localeCompare(String(b.itemTitle)) ||
    String(a.cardId).localeCompare(String(b.cardId)));
  return matches.slice(0, limit);
}

// Clamp the keyboard-highlight index after a ↑/↓ move. No wrap (stops at the
// ends); -1 when the list is empty.
export function moveActiveIndex(current, delta, count) {
  if (count <= 0) return -1;
  return Math.max(0, Math.min(count - 1, current + delta));
}

// ─── overlay rendering ──────────────────────────────────────────────────

export function searchResultsHTML(matches, query, lang = 'en', domainLabels = {}, activeIndex = -1) {
  const terms = norm(query).trim().split(/\s+/).filter(Boolean);
  if (norm(query).trim().length < 2) {
    return `<p class="search-hint">${lang === 'id' ? 'Ketik minimal 2 huruf untuk mencari semua kartu…' : 'Type at least 2 characters to search all cards…'}</p>`;
  }
  if (!matches.length) {
    return `<p class="search-hint">${lang === 'id' ? 'Tidak ada kartu yang cocok.' : 'No cards match.'}</p>`;
  }
  const count = `<p class="search-count muted">${matches.length}${matches.length === 40 ? '+' : ''} ${lang === 'id' ? 'hasil' : matches.length === 1 ? 'result' : 'results'}</p>`;
  const rows = matches.map((m, i) => {
    const front = stripCloze(m.front);
    const snippet = front.length > 160 ? front.slice(0, 160) + '…' : front;
    const dom = domainLabels[m.domainId] || m.domainId;
    const isActive = i === activeIndex;
    return `
      <li class="search-result${isActive ? ' search-result-active' : ''}" data-search-go="${escapeHTML(m.itemId)}" data-search-domain="${escapeHTML(m.domainId)}" data-search-index="${i}" role="option" aria-selected="${isActive}" tabindex="0">
        <div class="search-result-top">
          <span class="search-result-title">${highlightTerms(m.itemTitle, terms)}</span>
          <span class="search-result-domain">${escapeHTML(dom)}</span>
        </div>
        <div class="search-result-snippet">${highlightTerms(snippet, terms)}</div>
      </li>`;
  }).join('');
  return `${count}<ul class="search-results-list">${rows}</ul>`;
}

export function searchOverlayHTML(lang = 'en', query = '') {
  const title = lang === 'id' ? 'Cari kartu' : 'Search cards';
  const ph = lang === 'id' ? 'Cari semua kartu di semua domain…' : 'Search all cards across domains…';
  const hint = lang === 'id' ? '↑/↓ pilih · Enter buka · Esc tutup' : '↑/↓ to move · Enter to open · Esc to close';
  return `
    <div class="modal-backdrop" data-search-close>
      <div class="modal search-modal" role="dialog" aria-modal="true" aria-label="${escapeHTML(title)}">
        <header class="modal-header">
          <h2>${escapeHTML(title)}</h2>
          <button class="modal-close" data-search-close title="Close (Esc)">×</button>
        </header>
        <div class="search-input-row">
          <input type="search" class="search-input" data-search-input placeholder="${escapeHTML(ph)}" value="${escapeHTML(query || '')}" autocomplete="off" spellcheck="false" />
        </div>
        <div class="modal-body search-body" data-search-results></div>
        <footer class="modal-footer"><span class="muted">${escapeHTML(hint)}</span></footer>
      </div>
    </div>`;
}
