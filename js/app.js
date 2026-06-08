import {
  load, save, seedIfEmpty, detectDrift, refreshDriftedContent,
  addNewSeedCards, getAllCards, getDueCards, getDueCardsAllDomains, stripTransientFields, getUnscheduledCards, updateCard,
  downloadExport, importJSON, updateSettings, clearAllData, appendReview, downloadReviewLogCSV,
} from './storage.js';
import { efAverage } from './sm2.js';
import { isMastered, engineOf, fsrsWeightsOf } from './scheduler.js';
import { qualityToGrade } from './fsrs.js';
import { optimizeWeights } from './fsrs-optimize.js';
import { shuffle, todayLocalISO, daysBetween } from './util.js';
import { createReviewSession, reveal, rate, renderReviewView } from './review.js';
import { renderLibraryView } from './library.js';
import { renderReferenceView } from './reference.js';
import { renderDashboardView } from './dashboard.js';
import { DOMAINS, getActiveDomain, setActiveDomain, loadDomainContent, getMeta } from './domain.js';
import { renderSettingsModal, applySettingPatch } from './settings.js';
import { AVAILABLE_THEMES } from '../data/shared/ai-config.js';
import { shortcutsOverlayHTML } from './shortcuts.js';
import { collectAllCards, searchCards, searchOverlayHTML, searchResultsHTML, moveActiveIndex } from './card-search.js';
import { printDocTitle } from './print.js';
import { CAPABILITIES, isAIEnabledFor } from './ai.js';
import { loadItemContent } from './content.js';
import { setConfidence as setSelfTestConfidence } from './self-test.js';
import { stopAll as stopAllAudio } from './audio.js';

const App = {
  state: null,
  view: 'review',                  // 'review' | 'library' | 'reference'
  session: null,
  selectedItemId: null,
  expandedPhases: new Set(['foundation']),
  // Library multi-select card filter (Phase S18): { states: [...], types: [...] }
  libraryFilter: { states: [], types: [] },
  // Global card search overlay (Phase S21)
  searchOpen: false,
  searchQuery: '',
  referenceSubview: 'glossary',
  referenceSearch: '',
  referenceSelectedSlug: null,
  katex: null,
  // Multi-domain runtime
  domainContent: null,
  allDomainsContent: {},
  domainSwitcherOpen: false,
  // Reservoir system_type filter — only meaningful when active domain
  // declares systemTypes in its meta. 'all' = no filter.
  systemTypeFilter: 'all',
  settingsOpen: false,
  // Rich item content for the currently selected library item — loaded
  // lazily on selection. null when not in detail view or content absent.
  itemContent: null,
};

async function init() {
  App.katex = window.katex;
  App.state = load();
  save(App.state);

  for (const id of Object.keys(DOMAINS)) {
    App.allDomainsContent[id] = await loadDomainContent(id);
  }

  const activeId = getActiveDomain(App.state);
  await activateDomain(activeId, { skipRender: true });

  bindUI();
  bindAIAffordances();
  render();
}

async function activateDomain(id, opts = {}) {
  App.state = setActiveDomain(App.state, id);
  App.domainContent = App.allDomainsContent[id] || (await loadDomainContent(id));
  const { seedCards } = App.domainContent;

  const before = JSON.stringify(App.state);
  App.state = seedIfEmpty(App.state, id, seedCards);
  if (JSON.stringify(App.state) !== before) save(App.state);

  if (seedCards && seedCards.length > 0) {
    const drifted = detectDrift(App.state, id, seedCards);
    if (drifted.length > 0) handleDrift(drifted, id, seedCards);

    const seedResult = addNewSeedCards(App.state, id, seedCards);
    if (seedResult.added > 0) {
      App.state = seedResult.state;
      save(App.state);
      flash(`${seedResult.added} new card${seedResult.added === 1 ? '' : 's'} added to Library (unscheduled — add manually).`);
    }
  }

  App.selectedItemId = null;
  App.itemContent = null;
  App.referenceSelectedSlug = null;
  App.expandedPhases = new Set(App.domainContent.phases.length > 0 ? [App.domainContent.phases[0].id] : []);
  App.systemTypeFilter = 'all';
  App.libraryFilter = { states: [], types: [] };   // card filter is domain-scoped

  buildSession();
  if (!opts.skipRender) render();
}

function buildSession() {
  if (!App.state || !App.domainContent) {
    App.session = createReviewSession([]);
    return;
  }
  const today = todayLocalISO();
  const activeId = getActiveDomain(App.state);
  const crossDomain = !!App.state.settings?.review?.crossDomain && Object.keys(App.allDomainsContent).length > 1;
  // Both paths tag each card with its `_domain` (+ source/domain labels in
  // cross-domain mode) so onRate can write back to the right domain store and
  // the review card can show where a foreign card came from.
  const raw = crossDomain
    ? getDueCardsAllDomains(App.state, today).map(tagCardForReview)
    : getDueCards(App.state, activeId, today).map((c) => ({ ...c, _domain: activeId }));
  App.session = createReviewSession(shuffle(raw));
}

// Attach a resolved source label + domain label to a cross-domain card copy
// (the active-domain path resolves the source title the normal way in review.js).
function tagCardForReview(card) {
  const content = App.allDomainsContent[card._domain];
  const item = content && content.items && content.items.find((i) => i.id === card.itemId);
  const sourceLabel = item ? `${item.authors[0].split(',')[0]} (${item.year})` : card.itemId;
  const domainLabel = (content && content.meta && content.meta.fullName) || card._domain;
  return { ...card, _sourceLabel: sourceLabel, _domainLabel: domainLabel };
}

function bindUI() {
  document.querySelectorAll('[data-view]').forEach((btn) => {
    btn.addEventListener('click', () => switchView(btn.dataset.view));
  });
  document.querySelector('[data-export]')?.addEventListener('click', () => {
    downloadExport(App.state, { itemsByDomain: collectItemsByDomain() });
    flash('Exported.');
  });
  document.querySelector('[data-import]')?.addEventListener('click', () => {
    document.querySelector('#import-file').click();
  });
  document.querySelector('#import-file')?.addEventListener('change', handleImport);
  document.querySelector('[data-settings]')?.addEventListener('click', openSettings);
  document.querySelector('[data-search]')?.addEventListener('click', openSearch);
  document.addEventListener('keydown', handleKeyboard);
  document.addEventListener('click', handleDocumentClickForSwitcher);
}

function renderLanguageToggle() {
  const root = document.querySelector('.lang-toggle');
  if (!root) return;
  const current = App.state.settings?.appearance?.language || 'en';
  root.innerHTML = `
    <button class="lang-pill ${current === 'en' ? 'active' : ''}" data-language="en" aria-pressed="${current === 'en'}">EN</button>
    <button class="lang-pill ${current === 'id' ? 'active' : ''}" data-language="id" aria-pressed="${current === 'id'}">ID</button>
  `;
  root.querySelectorAll('[data-language]').forEach((btn) => {
    btn.addEventListener('click', () => onLanguageChange(btn.dataset.language));
  });
}

function onLanguageChange(lang) {
  if (App.state.settings?.appearance?.language === lang) return;
  App.state = updateSettings(App.state, {
    appearance: { ...(App.state.settings?.appearance || {}), language: lang },
  });
  save(App.state);
  render();
  flash(lang === 'id' ? 'Bahasa diganti ke Indonesia.' : 'Language switched to English.');
}

function collectItemsByDomain() {
  const out = {};
  for (const [id, content] of Object.entries(App.allDomainsContent)) {
    out[id] = content.items;
  }
  return out;
}

function handleImport(event) {
  const file = event.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = async (e) => {
    try {
      const imported = importJSON(e.target.result);
      if (!confirm('Replace current state with imported data? Current progress will be overwritten.')) return;
      App.state = imported;
      save(App.state);
      await activateDomain(getActiveDomain(App.state));
      flash('Imported.');
    } catch (err) {
      alert(`Import failed: ${err.message}`);
    }
  };
  reader.readAsText(file);
  event.target.value = '';
}

function handleKeyboard(e) {
  // Esc-priority: close modal/switcher first regardless of focus
  if (e.key === 'Escape') {
    if (App.searchOpen) {
      e.preventDefault();
      App.searchOpen = false;
      render();
      return;
    }
    if (App.helpOpen) {
      e.preventDefault();
      App.helpOpen = false;
      render();
      return;
    }
    if (App.settingsOpen) {
      e.preventDefault();
      closeSettings();
      return;
    }
    if (App.domainSwitcherOpen) {
      e.preventDefault();
      App.domainSwitcherOpen = false;
      render();
      return;
    }
  }

  if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA' || e.target.tagName === 'SELECT') return;
  if (App.settingsOpen) return;  // settings modal swallows other shortcuts
  if (App.searchOpen) return;    // search overlay is modal (Esc handled above; its input handles typing)
  if (App.helpOpen) {            // help overlay: `?` closes it, everything else is swallowed (Esc handled above)
    if (e.key === '?') { e.preventDefault(); App.helpOpen = false; render(); }
    return;
  }

  if (App.view === 'review' && App.session && !App.session.done) {
    if (e.code === 'Space' && !App.session.revealed) {
      e.preventDefault();
      onReveal();
    } else if (App.session.revealed && /^[0-5]$/.test(e.key)) {
      e.preventDefault();
      onRate(Number(e.key));
    }
  }
  if (e.metaKey || e.ctrlKey || e.altKey) return;
  const k = e.key.toLowerCase();
  if (k === 'r') {
    e.preventDefault();
    switchView('review');
  } else if (k === 'l') {
    e.preventDefault();
    switchView('library');
  } else if (k === 'g') {
    e.preventDefault();
    switchView('reference');
  } else if (k === 'm') {
    e.preventDefault();
    switchView('map');
  } else if (k === 'd') {
    e.preventDefault();
    toggleDomainSwitcher();
  } else if (e.key === ',') {
    e.preventDefault();
    openSettings();
  } else if (e.key === '?') {
    e.preventDefault();
    App.helpOpen = true;
    render();
  } else if (e.key === '/') {
    e.preventDefault();
    openSearch();
  }
}

function openSearch() {
  App.searchOpen = true;
  render();
}

function renderHelp() {
  const root = document.querySelector('#help-root');
  if (!root) return;
  if (!App.helpOpen) { root.innerHTML = ''; return; }
  const lang = App.state.settings?.appearance?.language || 'en';
  root.innerHTML = shortcutsOverlayHTML(lang);
  root.querySelectorAll('[data-help-close]').forEach((el) => el.addEventListener('click', (ev) => {
    if (ev.target.matches('[data-help-close]')) { App.helpOpen = false; render(); }
  }));
}

function domainLabelsMap() {
  const out = {};
  for (const [id, content] of Object.entries(App.allDomainsContent)) {
    out[id] = (content.meta && content.meta.fullName) || id;
  }
  return out;
}

function renderSearch() {
  const root = document.querySelector('#search-root');
  if (!root) return;
  if (!App.searchOpen) { root.innerHTML = ''; return; }
  const lang = App.state.settings?.appearance?.language || 'en';
  root.innerHTML = searchOverlayHTML(lang, App.searchQuery);
  const input = root.querySelector('[data-search-input]');
  const resultsBox = root.querySelector('[data-search-results]');
  const labels = domainLabelsMap();
  let matches = [];
  let active = 0;
  const renderResults = () => {
    const all = collectAllCards(App.state, collectItemsByDomain());
    matches = searchCards(all, App.searchQuery, 40);
    if (active > matches.length - 1) active = matches.length - 1;
    if (active < 0) active = 0;
    resultsBox.innerHTML = searchResultsHTML(matches, App.searchQuery, lang, labels, matches.length ? active : -1);
    resultsBox.querySelectorAll('[data-search-go]').forEach((el) => {
      el.addEventListener('click', () => onSearchGo(el.dataset.searchGo, el.dataset.searchDomain));
      el.addEventListener('mousemove', () => { const i = Number(el.dataset.searchIndex); if (i !== active) { active = i; paintActive(); } });
    });
  };
  const paintActive = () => {
    resultsBox.querySelectorAll('[data-search-go]').forEach((el) => {
      const on = Number(el.dataset.searchIndex) === active;
      el.classList.toggle('search-result-active', on);
      el.setAttribute('aria-selected', on);
      if (on) el.scrollIntoView({ block: 'nearest' });
    });
  };
  // Live filter without rebuilding the input (preserves focus/caret).
  input.addEventListener('input', () => { App.searchQuery = input.value; active = 0; renderResults(); });
  // ↑/↓ move the highlight, Enter opens it — all from the search input.
  input.addEventListener('keydown', (ev) => {
    if (ev.key === 'ArrowDown') { ev.preventDefault(); active = moveActiveIndex(active, 1, matches.length); paintActive(); }
    else if (ev.key === 'ArrowUp') { ev.preventDefault(); active = moveActiveIndex(active, -1, matches.length); paintActive(); }
    else if (ev.key === 'Enter') { ev.preventDefault(); const m = matches[active]; if (m) onSearchGo(m.itemId, m.domainId); }
  });
  root.querySelectorAll('[data-search-close]').forEach((el) => el.addEventListener('click', (ev) => {
    if (ev.target.matches('[data-search-close]')) { App.searchOpen = false; render(); }
  }));
  renderResults();
  input.focus();
  input.setSelectionRange(input.value.length, input.value.length);
}

async function onSearchGo(itemId, domainId) {
  App.searchOpen = false;
  if (domainId && domainId !== getActiveDomain(App.state)) {
    await onPickDomain(domainId);   // activates target domain + re-renders
  }
  App.view = 'library';
  onItemSelect(itemId);             // sets selectedItemId, loads content, re-renders
}

function handleDocumentClickForSwitcher(e) {
  if (!App.domainSwitcherOpen) return;
  if (e.target.closest('[data-domain-switcher]') || e.target.closest('[data-domain-option]')) return;
  App.domainSwitcherOpen = false;
  render();
}

function toggleDomainSwitcher() {
  App.domainSwitcherOpen = !App.domainSwitcherOpen;
  render();
}

async function onPickDomain(id) {
  App.domainSwitcherOpen = false;
  if (id === getActiveDomain(App.state)) {
    render();
    return;
  }
  save(App.state);
  await activateDomain(id);
  flash(`Switched to ${DOMAINS[id].name}.`);
}

function switchView(view) {
  App.view = view;
  document.querySelectorAll('[data-view]').forEach((btn) => {
    btn.classList.toggle('active', btn.dataset.view === view);
  });
  if (view === 'library') App.selectedItemId = null;
  if (view === 'reference') App.referenceSelectedSlug = null;
  if (view === 'review') buildSession();
  render();
}

function onReveal() {
  App.session = reveal(App.session);
  render();
}

function onRate(quality) {
  const engine = engineOf(App.state.settings);
  const requestRetention = App.state.settings?.review?.requestRetention;
  const weights = fsrsWeightsOf(App.state.settings);
  const today = todayLocalISO();
  const cur = App.session?.queue?.[App.session.index];   // card being rated (pre-update)
  // The card carries its own domain (combined-review can mix domains); fall
  // back to the active domain for safety.
  const domainId = (cur && cur._domain) || getActiveDomain(App.state);
  App.session = rate(App.session, quality, today, (updated) => {
    App.state = updateCard(App.state, domainId, stripTransientFields(updated));
    // Capture the review for FSRS weight training (engine-agnostic raw data).
    if (cur && cur.id) {
      const elapsed = cur.lastReviewed ? daysBetween(cur.lastReviewed, today) : 0;
      const hour = new Date().getHours();   // local hour-of-day for study-timing analytics (Phase S31)
      App.state = appendReview(App.state, { cardId: cur.id, domain: domainId, ts: today, grade: qualityToGrade(quality), elapsed, hour });
    }
    save(App.state);
  }, { engine, requestRetention, weights });
  render();
}

// Optimize FSRS weights from the captured review history (Settings action).
function onOptimizeFsrs() {
  const res = optimizeWeights(App.state.reviewLog || [], { iterations: 25 });
  if (!res.optimized) {
    flash(`Need more review history to optimize — ${res.predictions} prediction${res.predictions === 1 ? '' : 's'} so far, 50+ needed. Keep reviewing under FSRS.`);
    return;
  }
  App.state = updateSettings(App.state, {
    review: { ...App.state.settings.review, fsrsWeights: res.weights, fsrsOptimizedAt: new Date().toISOString() },
  });
  save(App.state);
  const drop = (1 - res.mean / res.initialMean) * 100;
  flash(`FSRS weights trained on ${res.predictions} reviews — log-loss ${res.initialMean.toFixed(3)} → ${res.mean.toFixed(3)} (${drop >= 0 ? '−' : '+'}${Math.abs(drop).toFixed(1)}%).`);
  render();
}

// Export the captured review log as CSV (Settings → Data action).
function onExportReviewCSV() {
  const n = (App.state.reviewLog || []).length;
  if (n === 0) { flash('No reviews logged yet — review some cards first.'); return; }
  downloadReviewLogCSV(App.state);
  flash(`Exported ${n} review${n === 1 ? '' : 's'} to CSV.`);
}

// Reset FSRS weights to the published defaults.
function onResetFsrs() {
  App.state = updateSettings(App.state, {
    review: { ...App.state.settings.review, fsrsWeights: null, fsrsOptimizedAt: null },
  });
  save(App.state);
  flash('FSRS weights reset to published defaults.');
  render();
}

function onIntroduceNew() {
  const domainId = getActiveDomain(App.state);
  const today = todayLocalISO();
  const unscheduled = getUnscheduledCards(App.state, domainId);
  if (unscheduled.length === 0) {
    flash('No unscheduled cards left — all are in circulation. Browse Library to extend.');
    return;
  }
  const toIntroduce = shuffle(unscheduled).slice(0, 3);
  for (const card of toIntroduce) {
    App.state = updateCard(App.state, domainId, { ...card, nextReview: today });
  }
  save(App.state);
  buildSession();
  render();
  flash(`Introduced ${toIntroduce.length} new card${toIntroduce.length === 1 ? '' : 's'}.`);
}

function onPhaseToggle(phaseId) {
  if (App.expandedPhases.has(phaseId)) App.expandedPhases.delete(phaseId);
  else App.expandedPhases.add(phaseId);
  render();
}

function onCardFilterToggle(group, value) {
  if (group !== 'states' && group !== 'types') return;
  const arr = App.libraryFilter[group] || (App.libraryFilter[group] = []);
  const i = arr.indexOf(value);
  if (i >= 0) arr.splice(i, 1);
  else arr.push(value);
  render();
}

function onCardFilterClear() {
  App.libraryFilter = { states: [], types: [] };
  render();
}

async function onItemSelect(itemId) {
  stopAllAudio();  // cancel any speech from previous item
  App.selectedItemId = itemId;
  App.itemContent = null;  // clear stale content while loading
  render();
  const domainId = getActiveDomain(App.state);
  const content = await loadItemContent(domainId, itemId);
  // Guard against an out-of-order resolution: if the user selected a different
  // item (or went back) while this dynamic import was in flight, drop the stale
  // result so we never render one item's body under another item's header.
  if (App.selectedItemId !== itemId) return;
  App.itemContent = content;
  render();
}

function onLibraryBack() {
  stopAllAudio();
  App.selectedItemId = null;
  App.itemContent = null;
  render();
}

// Print / save-as-PDF the current module. Set document.title so the browser's
// print dialog proposes a sensible PDF filename, then restore it afterwards.
function onPrintModule(itemId) {
  const items = (App.domainContent && App.domainContent.items) || [];
  const item = items.find((i) => i.id === itemId);
  if (!item) return;
  const prev = document.title;
  document.title = printDocTitle(item);
  const restore = () => { document.title = prev; window.removeEventListener('afterprint', restore); };
  window.addEventListener('afterprint', restore);
  window.print();
}

function onCardSchedule(cardId) {
  const domainId = getActiveDomain(App.state);
  const card = App.state.domains[domainId].cards[cardId];
  if (!card) return;
  App.state = updateCard(App.state, domainId, { ...card, nextReview: todayLocalISO() });
  save(App.state);
  flash('Card added to today’s queue.');
  render();
}

function onAuthorCardToggle(itemId, isOpen) {
  const ui = { ...(App.state.settings?.ui || {}) };
  const byItem = { ...(ui.authorCardOpenByItem || {}) };
  byItem[itemId] = !!isOpen;
  App.state = updateSettings(App.state, { ui: { ...ui, authorCardOpenByItem: byItem } });
  save(App.state);
  // No re-render — <details> handles the visual toggle natively
}

function onSelfTestRate(key, value) {
  App.state = setSelfTestConfidence(App.state, key, value);
  save(App.state);
  // No re-render — visual active state already updated in the card
}

function handleDrift(drifted, domainId, seedCards) {
  const ids = drifted.map((d) => d.id);
  const msg = `${drifted.length} card${drifted.length === 1 ? '' : 's'} in ${DOMAINS[domainId].name} have updated content in the seed file. Refresh content (keeps your SM-2 progress)?`;
  if (confirm(msg)) {
    App.state = refreshDriftedContent(App.state, domainId, ids, seedCards);
    save(App.state);
    flash('Content refreshed.');
  }
}

function renderBrandHeader() {
  const activeId = getActiveDomain(App.state);
  const meta = getMeta(activeId);
  const brandEl = document.querySelector('.brand');
  if (!brandEl || !meta) return;
  brandEl.innerHTML = `
    <span class="brand-name">Lattice</span>
    <span class="brand-divider">·</span>
    <button class="domain-badge" data-domain-switcher title="Switch domain (D)">
      <span class="domain-icon" style="color: ${meta.accentColor}">${meta.icon}</span>
      <span class="domain-name">${meta.name}</span>
      <span class="domain-chevron">${App.domainSwitcherOpen ? '▲' : '▼'}</span>
    </button>
    ${App.domainSwitcherOpen ? renderDomainSwitcherDropdown(activeId) : ''}
  `;
  brandEl.querySelector('[data-domain-switcher]')?.addEventListener('click', (e) => {
    e.stopPropagation();
    toggleDomainSwitcher();
  });
  brandEl.querySelectorAll('[data-domain-option]').forEach((el) => {
    el.addEventListener('click', () => onPickDomain(el.dataset.domainOption));
  });
}

function renderDomainSwitcherDropdown(activeId) {
  const items = Object.values(DOMAINS).map((meta) => `
    <button class="domain-option ${meta.id === activeId ? 'active' : ''}" data-domain-option="${meta.id}">
      <span class="domain-option-icon" style="color: ${meta.accentColor}">${meta.icon}</span>
      <span class="domain-option-text">
        <span class="domain-option-name">${meta.name}</span>
        <span class="domain-option-desc">${meta.description}</span>
      </span>
      ${meta.id === activeId ? '<span class="domain-option-check">✓</span>' : ''}
    </button>
  `).join('');
  return `<div class="domain-switcher-dropdown">${items}</div>`;
}

function applyTheme(settings) {
  const t = settings && settings.appearance && settings.appearance.theme;
  document.documentElement.dataset.theme = AVAILABLE_THEMES.includes(t) ? t : 'sepia';
}

function render() {
  applyTheme(App.state.settings);
  renderBrandHeader();
  renderLanguageToggle();
  renderContextBar();
  renderSettings();
  renderHelp();
  renderSearch();
  document.querySelectorAll('.view').forEach((el) => el.classList.remove('active'));
  const domainId = getActiveDomain(App.state);
  const content = App.domainContent || { items: [], phases: [], glossary: [], glossaryCategories: [], notation: [], seedCards: [], meta: getMeta(domainId) };
  const lang = App.state.settings?.appearance?.language || 'en';
  // Compute AI availability per capability for the active domain — passed
  // into view deps so each view can render buttons with correct enabled state.
  const aiAvailability = {
    explainConcept: isAIEnabledFor(App.state, domainId, 'explainConcept'),
    suggestNextItem: isAIEnabledFor(App.state, domainId, 'suggestNextItem'),
    findRelatedConcepts: isAIEnabledFor(App.state, domainId, 'findRelatedConcepts'),
    summarizeProgress: isAIEnabledFor(App.state, domainId, 'summarizeProgress'),
  };

  if (App.view === 'review') {
    const root = document.querySelector('#review-view');
    root.classList.add('active');
    const allCards = getAllCards(App.state, domainId);
    const engine = engineOf(App.state.settings);
    const masteredCount = allCards.filter((c) => isMastered(c, engine)).length;
    renderReviewView(App.session, root, {
      katex: App.katex,
      onReveal,
      onRate,
      onIntroduceNew,
      dueCount: (App.state.settings?.review?.crossDomain && Object.keys(App.allDomainsContent).length > 1)
        ? getDueCardsAllDomains(App.state).length
        : getDueCards(App.state, domainId).length,
      masteredCount,
      totalCards: allCards.length,
      efAvg: efAverage(allCards),
      items: content.items,
      domainMeta: content.meta,
      aiAvailability,
      domainId,
    });
  } else if (App.view === 'library') {
    const root = document.querySelector('#library-view');
    root.classList.add('active');
    renderLibraryView(App.state, root, {
      domainId,
      items: content.items,
      phases: content.phases,
      domainMeta: content.meta,
      systemTypeFilter: App.systemTypeFilter,
      selectedItemId: App.selectedItemId,
      expandedPhases: App.expandedPhases,
      onPhaseToggle,
      onItemSelect,
      onCardSchedule,
      onBack: onLibraryBack,
      onPrintModule,
      libraryFilter: App.libraryFilter,
      onCardFilterToggle,
      onCardFilterClear,
      aiAvailability,
      itemContent: App.itemContent,
      katex: App.katex,
      onAuthorCardToggle,
      authorCardOpenByItem: App.state.settings?.ui?.authorCardOpenByItem || {},
      lang,
      onSelfTestRate,
    });
  } else if (App.view === 'reference') {
    const root = document.querySelector('#reference-view');
    root.classList.add('active');
    renderReferenceView(App.state, root, {
      domainId,
      glossary: content.glossary,
      glossaryCategories: content.glossaryCategories,
      notation: content.notation,
      items: content.items,
      domainMeta: content.meta,
      systemTypeFilter: App.systemTypeFilter,
      subview: App.referenceSubview,
      searchQuery: App.referenceSearch,
      selectedSlug: App.referenceSelectedSlug,
      onSubviewChange: onReferenceSubviewChange,
      onSearch: onReferenceSearch,
      onGlossarySelect,
      onBack: onReferenceBack,
      katex: App.katex,
      aiAvailability,
      lang,
    });
  } else if (App.view === 'map') {
    const root = document.querySelector('#map-view');
    root.classList.add('active');
    renderDashboardView(App.state, root, {
      domainId,
      items: content.items,
      phases: content.phases,
      domainMeta: content.meta,
      domainLabels: domainLabelsMap(),
      onNodeClick: onMapNodeClick,
      lang,
      today: todayLocalISO(),
    });
  }
}

function onMapNodeClick(itemId) {
  switchView('library');
  onItemSelect(itemId);
}

function renderContextBar() {
  const bar = document.querySelector('#context-bar');
  if (!bar) return;
  const meta = App.domainContent?.meta;
  const systemTypes = meta?.systemTypes;
  const showFilter = systemTypes && systemTypes.length > 0 && (App.view === 'library' || App.view === 'reference');
  if (!showFilter) {
    bar.innerHTML = '';
    bar.classList.remove('show');
    return;
  }
  const chips = [
    { id: 'all', label: 'All' },
    ...systemTypes,
  ];
  bar.innerHTML = `
    <div class="context-bar-inner">
      <span class="context-label">System type:</span>
      <div class="filter-chip-row">
        ${chips.map((c) => `
          <button class="filter-chip ${App.systemTypeFilter === c.id ? 'active' : ''}" data-system-type="${c.id}">
            ${c.label}
          </button>
        `).join('')}
      </div>
    </div>
  `;
  bar.classList.add('show');
  bar.querySelectorAll('[data-system-type]').forEach((btn) => {
    btn.addEventListener('click', () => onPickSystemType(btn.dataset.systemType));
  });
}

function onPickSystemType(id) {
  App.systemTypeFilter = id;
  // Reset selection state so user lands on filtered list, not stale detail view
  App.selectedItemId = null;
  App.referenceSelectedSlug = null;
  render();
}

// ─── Settings ──────────────────────────────────────────────────────────

function openSettings() {
  App.settingsOpen = true;
  renderSettings();
}

function closeSettings() {
  App.settingsOpen = false;
  renderSettings();
}

function onSettingChange(path, value) {
  App.state = { ...App.state, settings: applySettingPatch(App.state.settings, path, value) };
  // Run through updateSettings to enforce merge-with-defaults invariants
  App.state = updateSettings(App.state, App.state.settings);
  save(App.state);
  // Changing the review scope/engine reshapes the queue — rebuild it so the
  // change takes effect immediately rather than next time Review is opened.
  if (path === 'review.crossDomain' || path === 'review.scheduler') {
    buildSession();
    render();
  }
  renderSettings();  // re-render to reflect dependent disabled states
}

function onExportFromSettings(opts) {
  downloadExport(App.state, {
    itemsByDomain: collectItemsByDomain(),
    includeSettings: opts.includeSettings,
  });
  flash('Exported.');
}

function onImportFromSettings() {
  document.querySelector('#import-file')?.click();
}

function onClearAllFromSettings() {
  if (!confirm('Clear ALL data? This wipes SM-2 progress and settings. Legacy v1 backup (if any) is retained as fallback.')) return;
  if (!confirm('Really clear? This cannot be undone unless you have an export file.')) return;
  clearAllData();
  flash('All data cleared. Reloading…');
  setTimeout(() => location.reload(), 800);
}

function renderSettings() {
  const root = document.querySelector('#settings-root');
  if (!root) return;
  if (!App.settingsOpen) {
    root.innerHTML = '';
    return;
  }
  renderSettingsModal(App.state, root, {
    onChange: onSettingChange,
    onClose: closeSettings,
    onExport: onExportFromSettings,
    onImport: onImportFromSettings,
    onClearAll: onClearAllFromSettings,
    onOptimizeFsrs,
    onResetFsrs,
    onExportReviewCSV,
    reviewCount: (App.state.reviewLog || []).length,
  });
}

// ─── AI affordance click handler ───────────────────────────────────────

async function onAskClaude(capability, domainId, context) {
  if (!CAPABILITIES[capability]) {
    flash(`Unknown capability: ${capability}`);
    return;
  }
  const result = await CAPABILITIES[capability]({ ...context, domainId, state: App.state });
  flash(result.message || (result.ok ? 'AI response received.' : `Unavailable: ${result.reason}`));
}

// Global click delegation for [data-ai-action] buttons placed in view HTML.
function bindAIAffordances() {
  document.addEventListener('click', (e) => {
    const btn = e.target.closest('[data-ai-action]');
    if (!btn) return;
    e.preventDefault();
    const capability = btn.dataset.aiAction;
    const domainId = btn.dataset.aiDomain || getActiveDomain(App.state);
    const ctxRaw = btn.dataset.aiContext || '{}';
    let context = {};
    try { context = JSON.parse(ctxRaw); } catch {}
    onAskClaude(capability, domainId, context);
  });
}

function onReferenceSubviewChange(sub) {
  App.referenceSubview = sub;
  App.referenceSelectedSlug = null;
  render();
}

function onReferenceSearch(q) {
  App.referenceSearch = q;
  render();
}

function onGlossarySelect(slug) {
  App.referenceSelectedSlug = slug;
  render();
}

function onReferenceBack() {
  App.referenceSelectedSlug = null;
  render();
}

function flash(msg) {
  const flashEl = document.querySelector('#flash');
  if (!flashEl) return;
  flashEl.textContent = msg;
  flashEl.classList.add('show');
  clearTimeout(flash._t);
  flash._t = setTimeout(() => flashEl.classList.remove('show'), 2400);
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
