#!/usr/bin/env node
// Harness for the dark/light theme (Phase S11): config defaults, the dark
// palette override in CSS, the no-FOUC head guard, the Settings control, and
// the app applying data-theme.
//
// Usage:  node scripts/verify-theme.mjs [--quiet]
// Exit code: 0 = all pass, 1 = any fail.

import { pathToFileURL, fileURLToPath } from 'node:url';
import { readFileSync } from 'node:fs';
import path from 'node:path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const QUIET = process.argv.includes('--quiet');
const read = (rel) => readFileSync(path.join(ROOT, rel), 'utf8');

const cfg = await import(pathToFileURL(path.join(ROOT, 'data/shared/ai-config.js')).href);
const settingsMod = await import(pathToFileURL(path.join(ROOT, 'js/settings.js')).href);

const results = [];
function check(section, label, cond, detail = '') {
  results.push({ section, ok: !!cond });
  if (!QUIET && !cond) console.log(`  [${section}] ✗ ${label}${detail ? ': ' + detail : ''}`);
}

// ─── T1: theme config ──────────────────────────────────────────────────
check('T1', "DEFAULT_THEME = 'sepia'", cfg.DEFAULT_THEME === 'sepia');
check('T1', "AVAILABLE_THEMES = [sepia, dark]", Array.isArray(cfg.AVAILABLE_THEMES) && cfg.AVAILABLE_THEMES.includes('sepia') && cfg.AVAILABLE_THEMES.includes('dark'));
check('T1', 'defaultSettings theme = sepia', cfg.defaultSettings().appearance.theme === 'sepia');
check('T1', 'mergeWithDefaults preserves a stored dark theme', cfg.mergeWithDefaults({ appearance: { theme: 'dark' } }).appearance.theme === 'dark');

// ─── T2: dark palette in CSS ───────────────────────────────────────────
{
  const css = read('styles.css');
  const block = css.slice(css.indexOf('html[data-theme="dark"]'));
  check('T2', 'has html[data-theme="dark"] block', /html\[data-theme="dark"\]\s*\{/.test(css));
  check('T2', 'dark overrides --bg + --ink', /--bg:\s*#/.test(block) && /--ink:\s*#/.test(block));
  check('T2', 'dark overrides accents (--gold, --azul)', /--gold:\s*#/.test(block) && /--azul:\s*#/.test(block));
  check('T2', 'dark recolours chrome', /--bg-chrome:\s*#/.test(block));
}

// ─── T3: no-FOUC head guard + app wiring ───────────────────────────────
{
  const html = read('index.html');
  check('T3', 'index.html reads saved theme pre-paint', /localStorage\.getItem\(['"]lattice-v3['"]\)/.test(html) && /dataset\.theme/.test(html));
  check('T3', 'guard only accepts known themes', /__t === ['"]dark['"]/.test(html) && /__t === ['"]sepia['"]/.test(html));
  const app = read('js/app.js');
  check('T3', 'app applies data-theme on render', /dataset\.theme\s*=/.test(app) && /AVAILABLE_THEMES\.includes/.test(app));
}

// ─── T4: Settings control ──────────────────────────────────────────────
{
  let html = '';
  function stub() {
    return new Proxy({}, {
      get(t, k) { if (k === 'addEventListener') return () => {}; if (k === 'querySelector' || k === 'querySelectorAll') return () => ({ addEventListener: () => {}, forEach: () => {}, matches: () => false }); return k === 'innerHTML' ? (t.__h || '') : undefined; },
      set(t, k, v) { if (k === 'innerHTML') { t.__h = v; html = v; } return true; },
    });
  }
  settingsMod.renderSettingsModal({ settings: cfg.defaultSettings() }, stub(), {
    onChange: () => {}, onClose: () => {}, onExport: () => {}, onImport: () => {}, onClearAll: () => {},
  });
  check('T4', 'renders an Appearance theme select', /data-setting=["']appearance\.theme["']/.test(html));
  check('T4', 'offers sepia + dark options', /value="sepia"/.test(html) && /value="dark"/.test(html));
  check('T4', 'default selects sepia', /value="sepia"[^>]*selected/.test(html));
  // applySettingPatch wires the nested path
  const patched = settingsMod.applySettingPatch(cfg.defaultSettings(), 'appearance.theme', 'dark');
  check('T4', 'applySettingPatch sets appearance.theme', patched.appearance.theme === 'dark');
}

const passed = results.filter(r => r.ok).length;
console.log(`\nTotal: ${passed}/${results.length}`);
if (passed === results.length) console.log('All checks pass. Dark/light theme wired end-to-end.');
process.exit(passed === results.length ? 0 : 1);
