#!/usr/bin/env node
// Harness for the keyboard-shortcut registry + help overlay (Phase S12). The
// key integrity check: every key the registry advertises is ACTUALLY handled
// in app.js's handleKeyboard (and the overlay renders them, bilingually).
//
// Usage:  node scripts/verify-shortcuts.mjs [--quiet]
// Exit code: 0 = all pass, 1 = any fail.

import { pathToFileURL, fileURLToPath } from 'node:url';
import { readFileSync } from 'node:fs';
import path from 'node:path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const QUIET = process.argv.includes('--quiet');

const sc = await import(pathToFileURL(path.join(ROOT, 'js/shortcuts.js')).href);
const appSrc = readFileSync(path.join(ROOT, 'js/app.js'), 'utf8');

const results = [];
function check(section, label, cond, detail = '') {
  results.push({ section, ok: !!cond });
  if (!QUIET && !cond) console.log(`  [${section}] ✗ ${label}${detail ? ': ' + detail : ''}`);
}

// ─── K1: registry shape ────────────────────────────────────────────────
check('K1', 'SHORTCUTS is a non-empty array of groups', Array.isArray(sc.SHORTCUTS) && sc.SHORTCUTS.length >= 1);
check('K1', 'each group has a bilingual title + items', sc.SHORTCUTS.every((g) => g.group && g.group.en && g.group.id && Array.isArray(g.items) && g.items.length));
check('K1', 'each item has keys[] + bilingual label', sc.SHORTCUTS.every((g) => g.items.every((it) => Array.isArray(it.keys) && it.keys.length && it.label.en && it.label.id)));

// ─── K2: every advertised key is handled in app.js ─────────────────────
{
  const handler = {
    r: /k === 'r'/, l: /k === 'l'/, g: /k === 'g'/, m: /k === 'm'/, d: /k === 'd'/,
    ' ': /e\.code === 'Space'/, space: /e\.code === 'Space'/,
    ',': /e\.key === ','/, '?': /e\.key === '\?'/, esc: /e\.key === 'Escape'/,
    '/': /e\.key === '\/'/,
  };
  const digits = /\^\[0-5\]\$/.test(appSrc);
  for (const key of sc.advertisedKeys()) {
    if (/^[0-5]$/.test(key)) { check('K2', `digit '${key}' handled (0-5 rating)`, digits); continue; }
    const re = handler[key];
    check('K2', `key '${key}' handled in app.js`, re ? re.test(appSrc) : false);
  }
  check('K2', 'registry advertises the nav keys', ['r', 'l', 'g', 'm', 'd'].every((k) => sc.advertisedKeys().includes(k)));
  check('K2', 'registry advertises ? and esc', sc.advertisedKeys().includes('?') && sc.advertisedKeys().includes('esc'));
}

// ─── K3: app wires the overlay (open/close/render) ─────────────────────
check('K3', 'app opens help on ? and renders it', /App\.helpOpen\s*=\s*true/.test(appSrc) && /renderHelp\(\)/.test(appSrc));
check('K3', 'Esc closes help', /helpOpen[\s\S]{0,80}render\(\)/.test(appSrc));
check('K3', 'help overlay swallows other keys while open', /App\.helpOpen\)\s*\{/.test(appSrc));

// ─── K4: overlay markup (EN + ID) ──────────────────────────────────────
{
  const en = sc.shortcutsOverlayHTML('en');
  const id = sc.shortcutsOverlayHTML('id');
  check('K4', 'renders a dialog with close affordance', /role="dialog"/.test(en) && /data-help-close/.test(en));
  check('K4', 'lists every group title (EN)', sc.SHORTCUTS.every((g) => en.includes(g.group.en)));
  check('K4', 'lists every label (EN)', sc.SHORTCUTS.every((g) => g.items.every((it) => en.includes(it.label.en))));
  check('K4', 'renders <kbd> chips for keys', /<kbd>R<\/kbd>/.test(en) && /<kbd>\?<\/kbd>/.test(en));
  check('K4', 'localises to ID', id.includes('Navigasi') && /Pintasan keyboard|Tutup/.test(id));
}

const passed = results.filter(r => r.ok).length;
console.log(`\nTotal: ${passed}/${results.length}`);
if (passed === results.length) console.log('All checks pass. Shortcut registry matches app.js handlers + overlay renders.');
process.exit(passed === results.length ? 0 : 1);
