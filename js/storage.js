import { hash, todayLocalISO } from './util.js';
import { EF_DEFAULT } from './sm2.js';
import { DOMAINS, DEFAULT_DOMAIN_ID } from './domain.js';
import { defaultSettings, mergeWithDefaults, stripSensitive } from '../data/shared/ai-config.js';

const STORAGE_KEY = 'lattice-v3';
const LEGACY_KEY = 'microstructure-hub:v1';
const SCHEMA_VERSION = 4;

function contentHashFor(card) {
  return hash([card.front, card.back, card.cloze || '', card.latex || ''].join('|'));
}

function freshCardState(seed, today, scheduleNow = true) {
  return {
    ...seed,
    contentHash: contentHashFor(seed),
    ef: EF_DEFAULT,
    interval: 0,
    repetitions: 0,
    nextReview: scheduleNow ? today : null,
    lapses: 0,
    stability: null,        // FSRS state — created lazily on first FSRS review
    difficulty: null,
    lastQuality: null,
    lastReviewed: null,
    createdAt: new Date().toISOString(),
  };
}

function freshDomainState() {
  return { cards: {}, seededAt: null };
}

function freshState() {
  const domains = {};
  for (const id of Object.keys(DOMAINS)) {
    domains[id] = freshDomainState();
  }
  return {
    schemaVersion: SCHEMA_VERSION,
    activeDomain: DEFAULT_DOMAIN_ID,
    domains,
    settings: defaultSettings(),
    reviewLog: [],          // capped append-only log for FSRS weight training (Phase S5)
  };
}

// Append a review event to the (capped) review log used by the FSRS optimiser.
// Entry: { cardId, ts (ISO date), grade (1-4), elapsed (days since prior review) }.
const REVIEW_LOG_CAP = 5000;
export function appendReview(state, entry, cap = REVIEW_LOG_CAP) {
  const log = Array.isArray(state.reviewLog) ? state.reviewLog : [];
  const next = log.length >= cap ? [...log.slice(log.length - cap + 1), entry] : [...log, entry];
  return { ...state, reviewLog: next };
}

// Serialize the review log to CSV (RFC-4180 quoting). Header + one row per
// review; empty log ⇒ header only. Used by the Settings → Data export.
export function reviewLogToCSV(log) {
  const esc = (v) => {
    const s = String(v ?? '');
    return /[",\n]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s;
  };
  const rows = (Array.isArray(log) ? log : []).map(
    (r) => [esc(r.cardId), esc(r.ts), esc(r.grade), esc(r.elapsed)].join(',')
  );
  return ['cardId,date,grade,elapsed', ...rows].join('\n');
}

export function downloadReviewLogCSV(state) {
  const blob = new Blob([reviewLogToCSV(state.reviewLog || [])], { type: 'text/csv' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `lattice-reviewlog-${todayLocalISO()}.csv`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

export function migrateLegacyToV3(legacyState) {
  const base = freshState();
  return {
    ...base,
    domains: {
      ...base.domains,
      microstructure: {
        cards: (legacyState && legacyState.cards) || {},
        seededAt: (legacyState && legacyState.seededAt) || null,
      },
    },
  };
}

// v3 → v4: ADDITIVE ONLY. v4 introduces the optional FSRS scheduler
// (js/fsrs.js), selectable via settings.review.scheduler. No card data is
// changed — FSRS state (stability/difficulty) is created lazily on a card's
// first FSRS review — so the migration just bumps the version and backfills
// the new settings namespace. Every card's SM-2 history is preserved intact.
export function migrateV3ToV4(v3state) {
  const scaffolded = ensureAllDomainsScaffolded(v3state);
  return { ...scaffolded, schemaVersion: SCHEMA_VERSION };
}

export function load() {
  const v3raw = localStorage.getItem(STORAGE_KEY);
  if (v3raw) {
    try {
      const parsed = JSON.parse(v3raw);
      if (parsed.schemaVersion === SCHEMA_VERSION) {
        return ensureAllDomainsScaffolded(parsed);
      }
      // Forward-migrate a stored v3 state non-destructively (NEVER fall through
      // to freshState() for a recognized older version — that would wipe data).
      if (parsed.schemaVersion === 3 && parsed.domains) {
        const migrated = migrateV3ToV4(parsed);
        try { localStorage.setItem(STORAGE_KEY, JSON.stringify(migrated)); } catch { /* ignore */ }
        return migrated;
      }
    } catch {
      // fall through
    }
  }

  const legacyRaw = localStorage.getItem(LEGACY_KEY);
  if (legacyRaw) {
    try {
      const legacy = JSON.parse(legacyRaw);
      const migrated = migrateLegacyToV3(legacy);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(migrated));
      // Intentionally retain LEGACY_KEY as a rollback safety net.
      return migrated;
    } catch {
      // fall through
    }
  }

  return freshState();
}

function ensureAllDomainsScaffolded(state) {
  // If new domains were added to DOMAINS registry after this state was written,
  // scaffold them with empty card maps so downstream code doesn't crash.
  // Also merge default settings non-destructively (preserves user values).
  const domains = { ...state.domains };
  let changed = false;
  for (const id of Object.keys(DOMAINS)) {
    if (!domains[id]) {
      domains[id] = freshDomainState();
      changed = true;
    }
  }
  const mergedSettings = mergeWithDefaults(state.settings);
  if (JSON.stringify(mergedSettings) !== JSON.stringify(state.settings)) {
    changed = true;
  }
  const reviewLog = Array.isArray(state.reviewLog) ? state.reviewLog : [];
  if (!Array.isArray(state.reviewLog)) changed = true;
  return changed ? { ...state, domains, settings: mergedSettings, reviewLog } : state;
}

export function save(state) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    return true;
  } catch (e) {
    // QuotaExceededError, or localStorage unavailable (e.g. some private-
    // browsing modes). Swallow so a high-frequency writer like the SM-2 grade
    // handler doesn't throw mid-callback and leave in-memory state ahead of
    // what's persisted. Surface for diagnostics; callers may check the return.
    console.warn('[lattice] save failed — storage full or unavailable:', e);
    return false;
  }
}

// ─── Domain-scoped accessors ───────────────────────────────────────────

function getDomain(state, domainId) {
  if (!state.domains[domainId]) {
    throw new Error(`Domain not initialized: ${domainId}`);
  }
  return state.domains[domainId];
}

export function getAllCards(state, domainId) {
  return Object.values(getDomain(state, domainId).cards);
}

export function getCardsForItem(state, domainId, itemId) {
  return getAllCards(state, domainId).filter((c) => c.itemId === itemId);
}

export function getDueCards(state, domainId, today = todayLocalISO()) {
  return getAllCards(state, domainId).filter((c) => c.nextReview !== null && c.nextReview <= today);
}

// Due cards across EVERY initialised domain (Phase S23 — combined review),
// each returned as a COPY tagged with its `_domain` so the rater can write the
// update back to the right domain store. Pure: never mutates `state`.
export function getDueCardsAllDomains(state, today = todayLocalISO()) {
  const out = [];
  for (const domainId of Object.keys((state && state.domains) || {})) {
    for (const card of getDueCards(state, domainId, today)) {
      out.push({ ...card, _domain: domainId });
    }
  }
  return out;
}

// Drop transient, session-only fields (anything `_`-prefixed, e.g. `_domain`,
// `_sourceLabel`) before a card is persisted — so the combined-review tags
// never leak into stored state.
export function stripTransientFields(card) {
  const clean = {};
  for (const k of Object.keys(card || {})) if (!k.startsWith('_')) clean[k] = card[k];
  return clean;
}

export function getUnscheduledCards(state, domainId) {
  return getAllCards(state, domainId).filter((c) => c.nextReview === null);
}

export function updateCard(state, domainId, card) {
  const domain = getDomain(state, domainId);
  return {
    ...state,
    domains: {
      ...state.domains,
      [domainId]: {
        ...domain,
        cards: { ...domain.cards, [card.id]: card },
      },
    },
  };
}

// ─── Seeding (per-domain) ──────────────────────────────────────────────

export function seedIfEmpty(state, domainId, seedCards, today = todayLocalISO()) {
  const domain = getDomain(state, domainId);
  if (Object.keys(domain.cards).length > 0) return state;
  if (!seedCards || seedCards.length === 0) return state;
  const cards = {};
  for (const seed of seedCards) {
    cards[seed.id] = freshCardState(seed, today, true);
  }
  return {
    ...state,
    domains: {
      ...state.domains,
      [domainId]: { cards, seededAt: new Date().toISOString() },
    },
  };
}

export function addNewSeedCards(state, domainId, seedCards, today = todayLocalISO()) {
  const domain = getDomain(state, domainId);
  const cards = { ...domain.cards };
  let added = 0;
  for (const seed of seedCards || []) {
    if (!cards[seed.id]) {
      cards[seed.id] = freshCardState(seed, today, false);
      added++;
    }
  }
  if (added === 0) return { state, added: 0 };
  return {
    state: {
      ...state,
      domains: { ...state.domains, [domainId]: { ...domain, cards } },
    },
    added,
  };
}

export function detectDrift(state, domainId, seedCards) {
  const domain = getDomain(state, domainId);
  const drifted = [];
  for (const seed of seedCards || []) {
    const live = domain.cards[seed.id];
    if (!live) continue;
    const seedHash = contentHashFor(seed);
    if (live.contentHash !== seedHash) {
      drifted.push({ id: seed.id, live, seed });
    }
  }
  return drifted;
}

export function refreshDriftedContent(state, domainId, driftedIds, seedCards) {
  const domain = getDomain(state, domainId);
  const cards = { ...domain.cards };
  for (const id of driftedIds) {
    const seed = (seedCards || []).find((s) => s.id === id);
    const live = cards[id];
    if (!seed || !live) continue;
    cards[id] = {
      ...live,
      front: seed.front,
      back: seed.back,
      cloze: seed.cloze,
      latex: seed.latex,
      context: seed.context,
      type: seed.type,
      contentHash: contentHashFor(seed),
    };
  }
  return {
    ...state,
    domains: { ...state.domains, [domainId]: { ...domain, cards } },
  };
}

// ─── Settings mutators ─────────────────────────────────────────────────

export function updateSettings(state, patch) {
  const merged = mergeWithDefaults({
    ...state.settings,
    ...patch,
    ai: { ...(state.settings?.ai || {}), ...(patch.ai || {}) },
    appearance: { ...(state.settings?.appearance || {}), ...(patch.appearance || {}) },
  });
  return { ...state, settings: merged };
}

// ─── Export / Import ───────────────────────────────────────────────────

// extras can include { itemsByDomain, includeSettings (default true) }.
// Settings: if includeSettings, included with apiKey stripped to '' (never
// exported). If !includeSettings, omitted entirely.
export function exportJSON(state, extras = {}) {
  const { includeSettings = true, ...passthrough } = extras;
  const exported = { ...state };
  if (includeSettings && state.settings) {
    exported.settings = stripSensitive(state.settings);
  } else {
    delete exported.settings;
  }
  return JSON.stringify({ ...exported, ...passthrough, exportedAt: new Date().toISOString() }, null, 2);
}

export function downloadExport(state, extras = {}) {
  const blob = new Blob([exportJSON(state, extras)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `lattice-export-${todayLocalISO()}.json`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

// Danger zone — clears all state. Used by Settings > Clear all data.
export function clearAllData() {
  localStorage.removeItem(STORAGE_KEY);
  // Note: LEGACY_KEY intentionally NOT cleared, so users still have rollback to v1.
}

export function importJSON(text) {
  const parsed = JSON.parse(text);
  // v4 import
  if (parsed.schemaVersion === SCHEMA_VERSION && parsed.domains) {
    return ensureAllDomainsScaffolded(parsed);
  }
  // v3 export file — forward-migrate non-destructively
  if (parsed.schemaVersion === 3 && parsed.domains) {
    return migrateV3ToV4(parsed);
  }
  // legacy v1 import (single-domain, top-level cards)
  if (parsed.cards && typeof parsed.cards === 'object') {
    return migrateLegacyToV3(parsed);
  }
  throw new Error('Invalid export file: not v3 and not a legacy v1 export');
}
