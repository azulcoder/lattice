import { escapeHTML } from './util.js';
import { getAllCards } from './storage.js';
import { applySystemTypeFilter } from './library.js';

function pickLang(field, lang) {
  if (!field) return { text: '', fellBack: false };
  if (typeof field === 'string') return { text: field, fellBack: false };  // legacy flat-string fallback
  if (lang === 'en') return { text: field.en || '', fellBack: false };
  const val = (field[lang] || '').trim();
  if (val.length > 0) return { text: val, fellBack: false };
  return { text: field.en || '', fellBack: true };
}

export function renderReferenceView(state, root, deps) {
  const { domainId, glossary: rawGlossary, glossaryCategories, notation: rawNotation, items, domainMeta, systemTypeFilter, subview, searchQuery, selectedSlug, onSubviewChange, onSearch, onGlossarySelect, onBack, katex, aiAvailability, lang } = deps;
  const filteredItems = applySystemTypeFilter(items, systemTypeFilter);
  const filteredItemIds = new Set(filteredItems.map((i) => i.id));
  const glossary = filterGlossaryBySystemType(rawGlossary, systemTypeFilter, filteredItemIds);
  const notation = rawNotation;  // notation rows are author-by-author symbol tables; not item-scoped, so unfiltered

  const subtabsHTML = `
    <div class="ref-subtabs">
      <button class="ref-subtab ${subview === 'glossary' ? 'active' : ''}" data-ref-sub="glossary">Glossary</button>
      <button class="ref-subtab ${subview === 'notation' ? 'active' : ''}" data-ref-sub="notation">Notation</button>
    </div>
  `;

  if (glossary.length === 0 && notation.length === 0) {
    root.innerHTML = `
      <div class="reference-view">
        <div class="library-header">
          <h1>Reference</h1>
          <p class="muted">${escapeHTML(domainMeta ? domainMeta.fullName : 'This domain')} has no glossary or notation reference yet.</p>
        </div>
      </div>
    `;
    return;
  }

  if (subview === 'notation') {
    root.innerHTML = `
      <div class="reference-view">
        <div class="library-header">
          <h1>Reference</h1>
          <p class="muted">Author-by-author notation comparison. Same concept, different symbols across the literature.</p>
        </div>
        ${subtabsHTML}
        ${renderNotationTable(notation)}
      </div>
    `;
    renderFormulas(root, katex);
    bindSubtabs(root, onSubviewChange);
    return;
  }

  // glossary subview
  if (selectedSlug) {
    const term = glossary.find((g) => g.slug === selectedSlug);
    if (!term) return;
    root.innerHTML = `
      <div class="reference-view">
        ${subtabsHTML}
        ${renderGlossaryDetail(term, state, domainId, glossary, items, aiAvailability, lang || 'en')}
      </div>
    `;
    renderFormulas(root, katex);
    bindSubtabs(root, onSubviewChange);
    root.querySelector('[data-ref-back]')?.addEventListener('click', onBack);
    root.querySelectorAll('[data-glossary-link]').forEach((el) => {
      el.addEventListener('click', () => onGlossarySelect(el.dataset.glossaryLink));
    });
    return;
  }

  root.innerHTML = `
    <div class="reference-view">
      <div class="library-header">
        <h1>Reference</h1>
        <p class="muted">${glossary.length} term${glossary.length === 1 ? '' : 's'}${glossaryCategories.length ? ` across ${glossaryCategories.length} categories` : ''}.</p>
      </div>
      ${subtabsHTML}
      <div class="ref-search-row">
        <input type="text" class="ref-search" placeholder="${lang === 'id' ? 'Cari term, alias, definisi…' : 'Search terms, aliases, definitions…'}" value="${escapeHTML(searchQuery || '')}" />
      </div>
      ${renderGlossaryList(glossary, glossaryCategories, searchQuery, lang || 'en')}
    </div>
  `;
  renderFormulas(root, katex);
  bindSubtabs(root, onSubviewChange);
  root.querySelector('.ref-search')?.addEventListener('input', (e) => onSearch(e.target.value));
  root.querySelectorAll('[data-glossary-slug]').forEach((el) => {
    el.addEventListener('click', () => onGlossarySelect(el.dataset.glossarySlug));
  });
}

function renderGlossaryList(glossary, glossaryCategories, searchQuery, lang) {
  const filtered = filterGlossary(glossary, searchQuery, lang);
  if (filtered.length === 0) {
    return `<p class="muted">${lang === 'id' ? `Tidak ada hasil untuk "${escapeHTML(searchQuery)}".` : `No matches for "${escapeHTML(searchQuery)}".`}</p>`;
  }
  if (!glossaryCategories || glossaryCategories.length === 0) {
    return `
      <div class="glossary-list">
        ${filtered.map((g) => glossaryRowHTML(g, lang)).join('')}
      </div>
    `;
  }
  return glossaryCategories.map((cat) => {
    const inCat = filtered.filter((g) => g.category === cat.id);
    if (inCat.length === 0) return '';
    return `
      <section class="glossary-category">
        <h2 class="glossary-cat-heading">${escapeHTML(cat.label)}</h2>
        <div class="glossary-list">
          ${inCat.map((g) => glossaryRowHTML(g, lang)).join('')}
        </div>
      </section>
    `;
  }).join('');
}

function glossaryRowHTML(g, lang) {
  const termText = pickLang(g.term, lang).text;
  const defText = pickLang(g.definition, lang).text;
  return `
    <article class="glossary-row" data-glossary-slug="${g.slug}">
      <div class="glossary-term">${escapeHTML(termText)}</div>
      <div class="glossary-snippet">${escapeHTML(defText.slice(0, 140))}${defText.length > 140 ? '…' : ''}</div>
    </article>
  `;
}

function renderGlossaryDetail(term, state, domainId, glossary, items, aiAvailability, lang) {
  const sourceItems = (term.sources || []).map((id) => items.find((i) => i.id === id)).filter(Boolean);
  const seeAlsoTerms = (term.seeAlso || []).map((slug) => glossary.find((g) => g.slug === slug)).filter(Boolean);
  const relatedCards = findRelatedCards(state, domainId, term);
  const termText = pickLang(term.term, lang).text;
  const defPick = pickLang(term.definition, lang);
  const availability = aiAvailability?.explainConcept;
  const ready = availability?.ok === true;
  const tooltip = ready ? `Ask AI about ${termText}` : (availability?.message || 'AI unavailable.');
  const ctxJson = JSON.stringify({ concept: termText, slug: term.slug }).replace(/"/g, '&quot;');
  const aiBtn = `
    <button class="ask-claude-btn ${ready ? 'ready' : 'disabled'}"
            data-ai-action="explainConcept"
            data-ai-domain="${escapeHTML(domainId)}"
            data-ai-context="${ctxJson}"
            title="${escapeHTML(tooltip)}">
      <span class="ai-icon">✦</span>
      <span class="ai-label">Ask AI</span>
    </button>
  `;

  return `
    <div class="glossary-detail">
      <button class="back-btn" data-ref-back>← Reference</button>
      <div class="glossary-detail-headrow">
        <h1 class="glossary-detail-term">${escapeHTML(termText)}</h1>
        ${aiBtn}
      </div>
      ${(term.aliases || []).length ? `<p class="glossary-aliases">${term.aliases.map((a) => `<span class="alias-chip">${escapeHTML(a)}</span>`).join('')}</p>` : ''}
      ${defPick.fellBack ? langFallbackNotice(lang) : ''}
      <p class="glossary-definition">${escapeHTML(defPick.text)}</p>
      ${term.formulaLatex ? `<div class="glossary-formula" data-latex="${escapeHTML(term.formulaLatex)}"></div>` : ''}

      ${seeAlsoTerms.length ? `
        <h3 class="glossary-section-heading">See also</h3>
        <div class="see-also-row">
          ${seeAlsoTerms.map((t) => `<button class="see-also-chip" data-glossary-link="${t.slug}">${escapeHTML(pickLang(t.term, lang).text)}</button>`).join('')}
        </div>
      ` : ''}

      ${sourceItems.length ? `
        <h3 class="glossary-section-heading">Primary sources</h3>
        <div class="source-list">
          ${sourceItems.map((it) => `
            <div class="source-row">
              <span class="source-title">${escapeHTML(it.title)}</span>
              <span class="muted"> — ${escapeHTML(it.authors[0])}${it.authors.length > 1 ? ' et al.' : ''} (${it.year})</span>
            </div>
          `).join('')}
        </div>
      ` : ''}

      ${relatedCards.length ? `
        <h3 class="glossary-section-heading">Related cards (${relatedCards.length})</h3>
        <div class="related-cards-list">
          ${relatedCards.map((c) => `
            <div class="related-card-row">
              <span class="related-card-front">${escapeHTML(c.front.slice(0, 120))}${c.front.length > 120 ? '…' : ''}</span>
              <span class="muted">${escapeHTML(c.itemId)}</span>
            </div>
          `).join('')}
        </div>
      ` : ''}
    </div>
  `;
}

function renderNotationTable(notation) {
  return `
    <div class="notation-table">
      ${notation.map((row) => `
        <section class="notation-row-block">
          <h3 class="notation-concept">${escapeHTML(row.concept)}</h3>
          <table class="notation-symbol-table">
            <thead>
              <tr>
                <th>Author</th>
                <th>Year</th>
                <th>Symbol</th>
                <th>Context</th>
              </tr>
            </thead>
            <tbody>
              ${row.rows.map((r) => `
                <tr>
                  <td class="nt-author">${escapeHTML(r.author)}</td>
                  <td class="nt-year">${r.year}</td>
                  <td class="nt-symbol" data-latex="${escapeHTML(r.symbol)}"></td>
                  <td class="nt-notes muted">${escapeHTML(r.notes)}</td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </section>
      `).join('')}
    </div>
  `;
}

function filterGlossary(glossary, query, lang) {
  if (!query || query.trim() === '') return glossary;
  const q = query.toLowerCase().trim();
  return glossary.filter((g) => {
    const termText = pickLang(g.term, lang).text.toLowerCase();
    const defText = pickLang(g.definition, lang).text.toLowerCase();
    if (termText.includes(q)) return true;
    if (defText.includes(q)) return true;
    if ((g.aliases || []).some((a) => a.toLowerCase().includes(q))) return true;
    return false;
  });
}

function langFallbackNotice(lang) {
  if (lang === 'id') return '<div class="lang-fallback-notice">ID belum tersedia — menampilkan English</div>';
  return '';
}

function filterGlossaryBySystemType(glossary, filter, filteredItemIds) {
  if (!filter || filter === 'all') return glossary;
  // A glossary entry survives the filter if at least one of its source items
  // matches the system_type filter (i.e. is in filteredItemIds).
  return glossary.filter((g) => {
    const sources = g.sources || [];
    if (sources.length === 0) return true;  // entries with no source pass through
    return sources.some((id) => filteredItemIds.has(id));
  });
}

function findRelatedCards(state, domainId, term) {
  const sourceItemIds = new Set(term.sources || []);
  // term.term is bilingual { en, id } (since Phase 1.3) but may be a legacy
  // flat string. Match card text against both language forms + aliases.
  const termField = term.term;
  const termStrings = (typeof termField === 'string'
    ? [termField]
    : [termField && termField.en, termField && termField.id]);
  const needles = [...termStrings, ...(term.aliases || [])]
    .filter(Boolean)
    .map((s) => s.toLowerCase());
  return getAllCards(state, domainId).filter((c) => {
    if (!sourceItemIds.has(c.itemId)) return false;
    const haystack = (c.front + ' ' + (c.back || '')).toLowerCase();
    return needles.some((n) => haystack.includes(n));
  }).slice(0, 8);
}

function renderFormulas(root, katex) {
  if (!katex) return;
  root.querySelectorAll('[data-latex]').forEach((el) => {
    try {
      katex.render(el.dataset.latex, el, { throwOnError: false, displayMode: false });
    } catch {
      el.textContent = el.dataset.latex;
    }
  });
}

function bindSubtabs(root, onSubviewChange) {
  root.querySelectorAll('[data-ref-sub]').forEach((btn) => {
    btn.addEventListener('click', () => onSubviewChange(btn.dataset.refSub));
  });
}
