import { cardState, isMastered, engineOf } from './scheduler.js';
import { escapeHTML, todayLocalISO } from './util.js';
import { getCardsForItem, getAllCards } from './storage.js';
import { renderTrustedMarkdown, renderFormulasInContent, estimateReadingTime } from './content.js';
import { renderVisualization } from './viz.js';
import { speak, togglePause, isPlayingButton, isAudioAvailable, markdownToSpeech } from './audio.js';
import { renderSelfTestCard, bindSelfTestCard, getConfidence } from './self-test.js';
import { printHeaderHTML } from './print.js';

export function renderLibraryView(state, root, deps) {
  const { domainId, items, phases, selectedItemId, expandedPhases, onPhaseToggle, onItemSelect, onCardSchedule, onBack, domainMeta, systemTypeFilter, aiAvailability, itemContent, katex, onAuthorCardToggle, authorCardOpenByItem, lang, onSelfTestRate, libraryFilter, onCardFilterToggle, onCardFilterClear, onPrintModule } = deps;
  const today = todayLocalISO();
  const filteredItems = applySystemTypeFilter(items, systemTypeFilter);

  if (selectedItemId) {
    // Detail view shows the item regardless of current filter — user explicitly clicked it.
    const item = items.find((i) => i.id === selectedItemId);
    if (!item) return;
    const authorCardOpen = !!(authorCardOpenByItem && authorCardOpenByItem[selectedItemId]);
    const engine = engineOf(state.settings);
    root.innerHTML = itemDetailHTML(item, getCardsForItem(state, domainId, item.id), today, items, domainId, aiAvailability, itemContent, authorCardOpen, lang || 'en', engine);
    root.querySelector('[data-back]')?.addEventListener('click', onBack);
    root.querySelector('[data-print-module]')?.addEventListener('click', () => onPrintModule && onPrintModule(selectedItemId));
    root.querySelectorAll('[data-schedule-card]').forEach((btn) => {
      btn.addEventListener('click', () => onCardSchedule(btn.dataset.scheduleCard));
    });
    // Render KaTeX in content sections
    renderFormulasInContent(root, katex);
    // Mount any embedded visualizations
    root.querySelectorAll('[data-viz-mount]').forEach((mount) => {
      const sectionId = mount.dataset.vizMount;
      const section = itemContent?.sections?.find((s) => s.id === sectionId);
      if (!section || !section.visualization) return;
      renderVisualization(mount, section.visualization, lang || 'en');
    });
    // Bind audio play buttons
    root.querySelectorAll('[data-audio-section]').forEach((btn) => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const sectionId = btn.dataset.audioSection;
        const section = itemContent?.sections?.find((s) => s.id === sectionId);
        if (!section) return;
        // Toggle behavior: if this button is currently playing, pause/resume.
        // Otherwise speak fresh.
        if (isPlayingButton(btn)) {
          togglePause(btn);
        } else {
          const bodyText = (section.body && (section.body[lang || 'en'] || section.body.en)) || '';
          const heading = (section.heading && (section.heading[lang || 'en'] || section.heading.en)) || section.id;
          const fullText = `${heading}. ${markdownToSpeech(bodyText)}`;
          speak(fullText, lang || 'en', btn);
        }
      });
    });
    // Mount self-test cards
    root.querySelectorAll('[data-self-test-mount]').forEach((mount) => {
      const sectionId = mount.dataset.selfTestMount;
      const entries = (itemContent?.selfTest || []).filter((e) => e.sectionId === sectionId);
      if (entries.length === 0) return;
      const cards = entries.map((entry) => {
        const key = `${itemContent.itemId}::${entry.sectionId}`;
        const current = getConfidence(state, key);
        return renderSelfTestCard(entry, itemContent.itemId, lang || 'en', current);
      }).join('');
      mount.innerHTML = cards;
      bindSelfTestCard(mount, onSelfTestRate || (() => {}));
    });
    // Bind item-link clicks (inter-item navigation)
    root.querySelectorAll('[data-item-link]').forEach((a) => {
      a.addEventListener('click', (e) => {
        e.preventDefault();
        onItemSelect(a.dataset.itemLink);
      });
    });
    // Author card toggle persistence
    const authorDetails = root.querySelector('[data-author-card]');
    if (authorDetails && onAuthorCardToggle) {
      authorDetails.addEventListener('toggle', () => {
        onAuthorCardToggle(selectedItemId, authorDetails.open);
      });
    }
    return;
  }

  const engine = engineOf(state.settings);
  const cardsByItem = groupCardsByItem(getAllCards(state, domainId));
  const filter = libraryFilter || { states: [], types: [] };
  const states = availableStates(filteredItems, cardsByItem, today, engine);
  const types = availableTypes(filteredItems);
  const cardFiltered = applyCardFilter(filteredItems, cardsByItem, filter, today, engine);

  root.innerHTML = phaseListHTML(state, domainId, cardFiltered, phases, expandedPhases, today, domainMeta, items.length !== filteredItems.length, systemTypeFilter, {
    filterBar: filterBarHTML(states, types, filter),
    filterActive: filterIsActive(filter),
    shown: cardFiltered.length,
    total: filteredItems.length,
  });
  root.querySelectorAll('[data-phase-toggle]').forEach((el) => {
    el.addEventListener('click', () => onPhaseToggle(el.dataset.phaseToggle));
  });
  root.querySelectorAll('[data-filter-group]').forEach((el) => {
    el.addEventListener('click', () => onCardFilterToggle && onCardFilterToggle(el.dataset.filterGroup, el.dataset.filterValue));
  });
  root.querySelector('[data-filter-clear]')?.addEventListener('click', () => onCardFilterClear && onCardFilterClear());
  root.querySelectorAll('[data-item-id]').forEach((el) => {
    el.addEventListener('click', (e) => {
      if (e.target.closest('button')) return;
      onItemSelect(el.dataset.itemId);
    });
  });
}

function phaseListHTML(state, domainId, items, phases, expandedPhases, today, domainMeta, isFiltered, systemTypeFilter, filterOpts = {}) {
  const { filterBar = '', filterActive = false, shown = items.length, total = items.length } = filterOpts;
  // An empty list from a *card* filter still shows the chip bar so the user can
  // adjust/clear it; an empty list from no/system filter shows the seed hint.
  if (items.length === 0 && !filterActive) {
    return `
      <div class="library-header">
        <h1>Library</h1>
        <p class="muted">${isFiltered
          ? `No items match system_type "${escapeHTML(systemTypeFilter)}" in ${escapeHTML(domainMeta?.fullName || 'this domain')}.`
          : `${escapeHTML(domainMeta ? domainMeta.fullName : 'This domain')} has no items yet. Populate <code>data/domains/${escapeHTML(domainId)}/items.js</code> and <code>meta.js</code> to seed.`}</p>
      </div>
    `;
  }
  const engine = engineOf(state.settings);
  const countLine = filterActive
    ? `Showing ${shown} of ${total} source${total === 1 ? '' : 's'}${isFiltered ? ` · filtered by ${escapeHTML(systemTypeFilter)}` : ''}.`
    : `${items.length} source${items.length === 1 ? '' : 's'} across ${phases.length} phase${phases.length === 1 ? '' : 's'}${isFiltered ? ` · filtered by ${escapeHTML(systemTypeFilter)}` : ''}.`;
  return `
    <div class="library-header">
      <h1>Library</h1>
      <p class="muted">${countLine}</p>
    </div>
    ${filterBar}
    ${items.length === 0 ? `<p class="muted library-no-match">No cards match the selected filters. <button type="button" class="filter-clear" data-filter-clear>Clear filters</button></p>` : ''}
    ${phases.map((phase) => {
      const phaseItems = items.filter((i) => i.phase === phase.id);
      if (filterActive && phaseItems.length === 0) return '';   // hide empty phases under an active filter
      const expanded = expandedPhases.has(phase.id) || filterActive;   // auto-expand to reveal matches
      const phaseStats = computePhaseStats(state, domainId, items, phase.id, today);
      return `
        <section class="phase ${expanded ? 'expanded' : 'collapsed'}">
          <header class="phase-header" data-phase-toggle="${phase.id}">
            <h2>${phase.order}. ${escapeHTML(phase.name)}</h2>
            <span class="phase-stats">${phaseStats.cardCount} cards · ${phaseStats.dueCount} due · ${phaseStats.masteredCount} mastered${phaseStats.unscheduledCount ? ` · ${phaseStats.unscheduledCount} unscheduled` : ''}</span>
            <span class="phase-chevron">${expanded ? '–' : '+'}</span>
          </header>
          ${expanded ? `
            <div class="phase-items">
              ${phaseItems.map((item) => itemRowHTML(item, getCardsForItem(state, domainId, item.id), today)).join('')}
            </div>
          ` : ''}
        </section>
      `;
    }).join('')}
  `;
}

function itemRowHTML(item, cards, today) {
  const total = cards.length;
  const dueCount = cards.filter((c) => c.nextReview !== null && c.nextReview <= today).length;
  const unscheduledCount = cards.filter((c) => c.nextReview === null).length;
  const masteredCount = cards.filter(isMastered).length;
  const diffDots = '●'.repeat(item.difficulty) + '○'.repeat(5 - item.difficulty);
  return `
    <article class="item-row" data-item-id="${item.id}">
      <div class="item-main">
        <div class="item-title">${escapeHTML(item.title)}</div>
        <div class="item-meta">
          <span class="item-authors">${escapeHTML(item.authors.join(', '))}</span>
          <span class="dot">·</span>
          <span>${item.year}</span>
          <span class="dot">·</span>
          <span class="item-type">${item.type}</span>
        </div>
      </div>
      <div class="item-side">
        <div class="diff-dots" title="Difficulty ${item.difficulty}/5">${diffDots}</div>
        ${total > 0
          ? `<div class="item-progress">${masteredCount} / ${total} mastered · ${dueCount} due${unscheduledCount ? ` · ${unscheduledCount} unscheduled` : ''}</div>`
          : `<div class="item-progress muted">No cards yet</div>`}
      </div>
    </article>
  `;
}

function askClaudeButton(capability, domainId, context, aiAvailability, label = 'Ask AI') {
  const availability = aiAvailability?.[capability];
  const ready = availability?.ok === true;
  const tooltip = ready ? `Ask AI about this (${capability})` : (availability?.message || 'AI unavailable.');
  const ctxJson = JSON.stringify(context || {}).replace(/"/g, '&quot;');
  return `
    <button class="ask-claude-btn ${ready ? 'ready' : 'disabled'}"
            data-ai-action="${capability}"
            data-ai-domain="${escapeHTML(domainId)}"
            data-ai-context="${ctxJson}"
            title="${escapeHTML(tooltip)}">
      <span class="ai-icon">✦</span>
      <span class="ai-label">${escapeHTML(label)}</span>
    </button>
  `;
}

function itemDetailHTML(item, cards, today, items, domainId, aiAvailability, itemContent, authorCardOpen, lang, engine = 'sm2') {
  const diffDots = '●'.repeat(item.difficulty) + '○'.repeat(5 - item.difficulty);
  const prereqLine = (item.prereqs && item.prereqs.length)
    ? `<div class="prereqs">Prereqs: ${item.prereqs.map((id) => {
        const p = items.find((i) => i.id === id);
        return p ? `<span class="prereq-chip">${escapeHTML(p.authors[0].split(',')[0])} ${p.year}</span>` : id;
      }).join(' ')}</div>`
    : '';

  const aiButton = askClaudeButton('explainConcept', domainId,
    { concept: item.title, itemId: item.id }, aiAvailability, 'Ask AI about this');

  const readMinutes = estimateReadingTime(itemContent);
  const readChip = readMinutes
    ? `<span class="dot">·</span><span class="read-time">${readMinutes} min read</span>`
    : '';

  const authorCardHTML = itemContent && itemContent.author ? renderAuthorCardHTML(itemContent.author, authorCardOpen, lang) : '';
  const contentHTML = itemContent ? renderItemContentHTML(itemContent, lang) : '';

  return `
    <div class="item-detail">
      ${printHeaderHTML(item, lang, today)}
      <button class="back-btn" data-back>← Library</button>
      <div class="item-detail-headrow">
        <h1 class="item-detail-title">${escapeHTML(item.title)}</h1>
        <div class="item-detail-actions">
          <button class="print-btn print-hide" type="button" data-print-module title="${lang === 'id' ? 'Cetak / simpan PDF' : 'Print / save as PDF'}">${lang === 'id' ? 'Cetak' : 'Print'}</button>
          ${aiButton}
        </div>
      </div>
      <div class="item-detail-meta">
        <span>${escapeHTML(item.authors.join(', '))}</span>
        <span class="dot">·</span>
        <span>${item.year}</span>
        <span class="dot">·</span>
        <span class="item-type">${item.type}</span>
        <span class="dot">·</span>
        <span class="diff-dots" title="Difficulty ${item.difficulty}/5">${diffDots}</span>
        ${readChip}
      </div>
      ${prereqLine}
      <div class="item-tags">${(item.tags || []).map((t) => `<span class="tag">${escapeHTML(t)}</span>`).join('')}</div>

      ${authorCardHTML}

      ${contentHTML}

      ${item.notes ? `<aside class="item-notes-aside"><span class="aside-label">Annotation</span><p>${escapeHTML(item.notes)}</p></aside>` : ''}

      <h2 class="cards-heading">Cards (${cards.length})</h2>
      ${cards.length === 0 ? `
        <div class="no-cards-yet">
          <p class="muted">No cards seeded for this item yet.</p>
          <p>Read the source first, then extract atomic facts following Wozniak's 20 rules. Edit <code>data/domains/&lt;domain&gt;/seed-cards.js</code> to add cards.</p>
        </div>
      ` : `
        <div class="card-list">
          ${cards.map((c) => cardSummaryHTML(c, today, engine)).join('')}
        </div>
      `}
    </div>
  `;
}

function pickLang(field, lang) {
  // field shape: { en: string, id: string }
  // Returns { text, fellBack } — fellBack=true means lang!='en' but field[lang] was empty so we used .en
  if (!field) return { text: '', fellBack: false };
  if (lang === 'en') return { text: field.en || '', fellBack: false };
  const val = (field[lang] || '').trim();
  if (val.length > 0) return { text: field[lang], fellBack: false };
  return { text: field.en || '', fellBack: true };
}

function langFallbackNotice(lang) {
  if (lang === 'id') return '<div class="lang-fallback-notice">ID belum tersedia — menampilkan English</div>';
  return '';
}

function renderItemContentHTML(content, lang) {
  if (!content || !Array.isArray(content.sections) || content.sections.length === 0) return '';
  const audioOn = (content.audio && content.audio.enabled !== false);
  const selfTestBySection = new Set((content.selfTest || []).map((e) => e.sectionId));
  return `
    <div class="item-content">
      ${content.sections.map((s) => {
        const headingPick = pickLang(s.heading, lang);
        const bodyPick = pickLang(s.body, lang);
        const vizMount = s.visualization ? `<div class="viz-mount" data-viz-mount="${escapeHTML(s.id)}"></div>` : '';
        const audioBtn = audioOn ? `<button class="section-audio-btn" data-audio-section="${escapeHTML(s.id)}" type="button" title="${lang === 'id' ? 'Dengarkan' : 'Listen'}">▶</button>` : '';
        const selfTestMount = selfTestBySection.has(s.id) ? `<div class="self-test-mount" data-self-test-mount="${escapeHTML(s.id)}"></div>` : '';
        return `
          <section class="item-content-section" id="section-${escapeHTML(s.id)}">
            <div class="item-content-heading-row">
              <h3 class="item-content-heading">${escapeHTML(headingPick.text || s.id)}</h3>
              ${audioBtn}
            </div>
            ${bodyPick.fellBack ? langFallbackNotice(lang) : ''}
            <div class="item-content-body">${renderTrustedMarkdown(bodyPick.text)}</div>
            ${vizMount}
            ${selfTestMount}
          </section>
        `;
      }).join('')}
    </div>
  `;
}

function renderAuthorCardHTML(author, isOpen, lang) {
  if (!author) return '';
  const fullName = pickLang(author.fullName, lang).text;
  const affiliation = pickLang(author.affiliation, lang).text;
  const tagline = pickLang(author.tagline, lang).text;
  const prose = ['bio', 'focus', 'intellectualLineage', 'keyCollaborators', 'legacy']
    .map((key) => {
      const pick = pickLang(author[key], lang);
      if (!pick.text || !pick.text.trim()) return '';
      const fellBackHTML = pick.fellBack ? langFallbackNotice(lang) : '';
      return `<div class="author-prose-block" data-author-field="${key}">${fellBackHTML}${renderTrustedMarkdown(pick.text)}</div>`;
    })
    .join('');
  const keyWorks = (author.keyWorks || []).map((w) => `
    <li class="author-keywork">
      <span class="author-keywork-year">${w.year}</span>
      <span class="author-keywork-title">${escapeHTML(w.title)}</span>
      <span class="author-keywork-venue muted">${escapeHTML(w.venue)}</span>
    </li>
  `).join('');
  return `
    <details class="author-card" data-author-card ${isOpen ? 'open' : ''}>
      <summary class="author-card-summary">
        <div class="author-card-identity">
          <span class="author-card-name">${escapeHTML(fullName)}</span>
          <span class="author-card-affiliation">${escapeHTML(affiliation)}</span>
          ${tagline ? `<span class="author-card-tagline">${escapeHTML(tagline)}</span>` : ''}
        </div>
        <span class="author-card-toggle-hint">About the author</span>
      </summary>
      <div class="author-card-body">
        ${prose}
        ${keyWorks ? `
          <div class="author-keyworks-section">
            <h5 class="author-keyworks-heading">Key works</h5>
            <ul class="author-keyworks-list">${keyWorks}</ul>
          </div>
        ` : ''}
      </div>
    </details>
  `;
}

function cardSummaryHTML(card, today, engine = 'sm2') {
  const state = cardState(card, today, engine);
  const canAddToQueue = state === 'unscheduled' || (state === 'new' && card.repetitions === 0 && card.lapses === 0);
  const stateBadge = `<span class="state-badge state-${state}">${state}</span>`;
  const lapseTail = card.lapses ? ` · ${card.lapses} lapses` : '';
  const metrics = engine === 'fsrs' && card.stability != null
    ? `S ${card.stability.toFixed(1)}d · D ${(card.difficulty || 0).toFixed(1)} · int ${card.interval}d · reps ${card.repetitions}${lapseTail}`
    : `EF ${(card.ef || 2.5).toFixed(2)} · int ${card.interval}d · reps ${card.repetitions}${lapseTail}`;
  return `
    <article class="card-summary">
      <div class="card-summary-front">${escapeHTML(card.front.slice(0, 140))}${card.front.length > 140 ? '…' : ''}</div>
      <div class="card-summary-meta">
        ${stateBadge}
        <span class="muted">${metrics}</span>
        ${canAddToQueue ? `<button class="schedule-btn" data-schedule-card="${card.id}">+ Add to queue</button>` : ''}
      </div>
    </article>
  `;
}

function computePhaseStats(state, domainId, items, phaseId, today) {
  const engine = engineOf(state.settings);
  const itemIds = new Set(items.filter((i) => i.phase === phaseId).map((i) => i.id));
  const cards = getAllCards(state, domainId).filter((c) => itemIds.has(c.itemId));
  return {
    cardCount: cards.length,
    dueCount: cards.filter((c) => c.nextReview !== null && c.nextReview <= today).length,
    masteredCount: cards.filter((c) => isMastered(c, engine)).length,
    unscheduledCount: cards.filter((c) => c.nextReview === null).length,
  };
}

export function applySystemTypeFilter(items, filter) {
  if (!filter || filter === 'all') return items;
  // Items without an explicit system_type default to UNIVERSAL for forward compat.
  return items.filter((i) => (i.system_type || 'UNIVERSAL') === filter);
}

// ─── Multi-select card filtering (Phase S18) ────────────────────────────
//
// Filter the Library item list by two independent, multi-select facets:
//   • Status — an item matches if it has ≥1 card in any selected card-state.
//   • Type   — an item matches if its item.type is among the selected types.
// Selections OR within a facet, AND across facets; an empty facet imposes no
// constraint. Pure + engine-aware (card-state depends on the active engine).

export const CARD_STATES = ['due', 'learning', 'mastered', 'new', 'unscheduled'];

function groupCardsByItem(cards) {
  const out = {};
  for (const c of cards) (out[c.itemId] ||= []).push(c);
  return out;
}

// Which card-states actually occur among these items' cards (so we never show
// a chip that would match nothing). Returned in canonical CARD_STATES order.
export function availableStates(items, cardsByItem, today, engine) {
  const present = new Set();
  for (const it of items) {
    for (const c of (cardsByItem[it.id] || [])) present.add(cardState(c, today, engine));
  }
  return CARD_STATES.filter((s) => present.has(s));
}

// Distinct item types present, sorted — the Type-facet chips.
export function availableTypes(items) {
  return [...new Set(items.map((i) => i.type).filter(Boolean))].sort();
}

export function filterIsActive(filter) {
  return !!(filter && (((filter.states || []).length) || ((filter.types || []).length)));
}

export function itemMatchesFilter(item, cards, filter, today, engine) {
  const states = (filter && filter.states) || [];
  const types = (filter && filter.types) || [];
  if (types.length && !types.includes(item.type)) return false;
  if (states.length && !cards.some((c) => states.includes(cardState(c, today, engine)))) return false;
  return true;
}

export function applyCardFilter(items, cardsByItem, filter, today, engine) {
  if (!filterIsActive(filter)) return items;
  return items.filter((it) => itemMatchesFilter(it, cardsByItem[it.id] || [], filter, today, engine));
}

function filterBarHTML(states, types, filter) {
  const isOn = (group, v) => ((filter && filter[group]) || []).includes(v);
  const chip = (group, v, label) =>
    `<button type="button" class="filter-chip${isOn(group, v) ? ' active' : ''}" data-filter-group="${group}" data-filter-value="${escapeHTML(v)}" aria-pressed="${isOn(group, v)}">${escapeHTML(label)}</button>`;
  const statusGroup = states.length
    ? `<div class="filter-group"><span class="filter-label">Status</span>${states.map((s) => chip('states', s, s)).join('')}</div>` : '';
  const typeGroup = types.length > 1
    ? `<div class="filter-group"><span class="filter-label">Type</span>${types.map((t) => chip('types', t, t)).join('')}</div>` : '';
  if (!statusGroup && !typeGroup) return '';
  const clear = filterIsActive(filter) ? `<button type="button" class="filter-clear" data-filter-clear>Clear</button>` : '';
  return `<div class="library-filter">${statusGroup}${typeGroup}${clear}</div>`;
}

export { askClaudeButton, groupCardsByItem, itemDetailHTML };
