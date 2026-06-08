// Shared AI configuration: default settings shape + deep merge helper.
// Defaults applied at load time so existing v3 state without settings
// section gets populated without schema migration.

import { DOMAINS } from '../../js/domain.js';

export const DEFAULT_MODEL = 'claude-sonnet-4-6';
export const AVAILABLE_MODELS = [
  { id: 'claude-opus-4-7',   label: 'Most capable' },
  { id: 'claude-sonnet-4-6', label: 'Balanced (default)' },
  { id: 'claude-haiku-4-5',  label: 'Fastest' },
];

export const DEFAULT_THEME = 'sepia';
export const AVAILABLE_THEMES = ['sepia', 'dark'];   // 'sepia' = warm light reader (default); 'dark' = dark reader

export const DEFAULT_LANGUAGE = 'en';
export const AVAILABLE_LANGUAGES = [
  { id: 'en', label: 'EN', fullName: 'English' },
  { id: 'id', label: 'ID', fullName: 'Bahasa Indonesia' },
];

export const DEFAULT_BUDGET = 200;

export function defaultSettings() {
  const perDomain = {};
  for (const id of Object.keys(DOMAINS)) {
    perDomain[id] = false;
  }
  return {
    ai: {
      enabled: false,
      apiKey: '',
      perDomain,
      model: DEFAULT_MODEL,
      maxRequestsPerMonth: DEFAULT_BUDGET,
      usageThisMonth: { requests: 0, tokens: 0, monthKey: '' },
    },
    appearance: {
      theme: DEFAULT_THEME,
      language: DEFAULT_LANGUAGE,
    },
    // UI state persisted per-feature. selfTestConfidence: { [sectionKey]: rating };
    // authorCardOpenByItem: { [itemId]: bool }. Written by self-test.js / app.js.
    ui: {
      selfTestConfidence: {},
      authorCardOpenByItem: {},
    },
    // Review-scheduler selection. SM-2 is the default; FSRS is opt-in and
    // reversible (see js/scheduler.js / js/fsrs.js).
    review: {
      scheduler: 'sm2',          // 'sm2' | 'fsrs'
      requestRetention: 0.9,     // FSRS target retention (ignored by SM-2)
      fsrsWeights: null,         // trained FSRS weights (Phase S5); null ⇒ published defaults
      fsrsOptimizedAt: null,     // ISO timestamp of the last optimisation run
      crossDomain: false,        // Phase S23: review due cards from ALL domains in one queue
    },
  };
}

// Deep merge defaults into an existing settings object — preserves user
// values, fills missing keys with defaults. Crucially: preserves apiKey
// (never overwrites with empty default if user has set one).
export function mergeWithDefaults(existingSettings) {
  const defaults = defaultSettings();
  if (!existingSettings) return defaults;
  return {
    // Preserve any namespace not explicitly merged below (e.g. `ui`, plus any
    // future top-level key) so a round-trip through mergeWithDefaults is loss-free.
    ...existingSettings,
    ai: {
      ...defaults.ai,
      ...(existingSettings.ai || {}),
      perDomain: {
        ...defaults.ai.perDomain,
        ...((existingSettings.ai && existingSettings.ai.perDomain) || {}),
      },
      usageThisMonth: {
        ...defaults.ai.usageThisMonth,
        ...((existingSettings.ai && existingSettings.ai.usageThisMonth) || {}),
      },
    },
    appearance: {
      ...defaults.appearance,
      ...(existingSettings.appearance || {}),
    },
    ui: {
      ...defaults.ui,
      ...(existingSettings.ui || {}),
    },
    review: {
      ...defaults.review,
      ...(existingSettings.review || {}),
    },
  };
}

// Strip the sensitive apiKey from a settings object — used at export time
// when includeSettings=true but we never want the key in the file.
export function stripSensitive(settings) {
  if (!settings) return settings;
  return {
    ...settings,
    ai: { ...settings.ai, apiKey: '' },
  };
}
