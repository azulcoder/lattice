// Keyboard-shortcut registry + help overlay (Phase S12). The registry is the
// single source of truth; app.js's handleKeyboard implements these keys, and
// scripts/verify-shortcuts.mjs cross-checks that the two agree. Pressing `?`
// toggles the overlay; Esc closes it.

import { escapeHTML } from './util.js';

export const SHORTCUTS = [
  {
    group: { en: 'Navigation', id: 'Navigasi' },
    items: [
      { keys: ['R'], label: { en: 'Review', id: 'Review' } },
      { keys: ['L'], label: { en: 'Library', id: 'Library' } },
      { keys: ['G'], label: { en: 'Reference', id: 'Reference' } },
      { keys: ['M'], label: { en: 'Map / dashboard', id: 'Map / dashboard' } },
      { keys: ['D'], label: { en: 'Switch domain', id: 'Ganti domain' } },
      { keys: ['/'], label: { en: 'Search all cards', id: 'Cari semua kartu' } },
    ],
  },
  {
    group: { en: 'Review', id: 'Review' },
    items: [
      { keys: ['Space'], label: { en: 'Reveal answer', id: 'Tampilkan jawaban' } },
      { keys: ['0', '1', '2', '3', '4', '5'], label: { en: 'Rate card (0 blackout → 5 easy)', id: 'Nilai kartu (0 blackout → 5 easy)' } },
    ],
  },
  {
    group: { en: 'General', id: 'Umum' },
    items: [
      { keys: [','], label: { en: 'Settings', id: 'Pengaturan' } },
      { keys: ['?'], label: { en: 'This shortcuts help', id: 'Bantuan shortcut ini' } },
      { keys: ['Esc'], label: { en: 'Close dialog / overlay', id: 'Tutup dialog / overlay' } },
    ],
  },
];

export function shortcutsOverlayHTML(lang = 'en') {
  const L = (o) => (o && (o[lang] || o.en)) || '';
  const groups = SHORTCUTS.map((g) => `
    <div class="help-group">
      <h3 class="help-group-title">${escapeHTML(L(g.group))}</h3>
      ${g.items.map((it) => `
        <div class="help-row">
          <span class="help-keys">${it.keys.map((k) => `<kbd>${escapeHTML(k)}</kbd>`).join('<span class="help-keysep">/</span>')}</span>
          <span class="help-label">${escapeHTML(L(it.label))}</span>
        </div>`).join('')}
    </div>`).join('');
  const title = lang === 'id' ? 'Pintasan keyboard' : 'Keyboard shortcuts';
  const hint = lang === 'id' ? 'Tekan ? atau Esc buat nutup' : 'Press ? or Esc to close';
  return `
    <div class="modal-backdrop" data-help-close>
      <div class="modal help-modal" role="dialog" aria-modal="true" aria-label="${title}">
        <header class="modal-header">
          <h2>${title}</h2>
          <button class="modal-close" data-help-close title="Close (Esc)">×</button>
        </header>
        <div class="modal-body help-grid">${groups}</div>
        <footer class="modal-footer"><span class="muted">${hint}</span></footer>
      </div>
    </div>`;
}

// All keys the registry advertises (flattened, lower-cased) — used by the
// integrity harness to confirm app.js actually handles each one.
export function advertisedKeys() {
  const out = new Set();
  for (const g of SHORTCUTS) for (const it of g.items) for (const k of it.keys) out.add(k.toLowerCase());
  return [...out];
}
