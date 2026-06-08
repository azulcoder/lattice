// Print / PDF export of a whole module (Phase S22). Browsers print-to-PDF from
// the live DOM, so the heavy lifting is a print stylesheet (@media print in
// styles.css) that strips chrome and recolours to ink-on-white. This module
// holds the small pure pieces: the document title (which becomes the default
// PDF filename) and a print-only header block injected into the item detail.
// Both are unit-tested; app.js wires the Print button to window.print().

import { escapeHTML } from './util.js';

// Default PDF filename the browser proposes (it uses document.title).
export function printDocTitle(item) {
  const t = (item && (item.title || item.id)) || 'module';
  return `Lattice — ${t}`;
}

// A print-only header shown at the top of the printed module: title, the
// author/year/type line, and a provenance footer. `dateISO` is passed in
// (pure — no clock). Hidden on screen via `.print-only`.
export function printHeaderHTML(item, lang = 'en', dateISO = '') {
  if (!item) return '';
  const authors = Array.isArray(item.authors) ? item.authors.join(', ') : (item.authors || '');
  const bits = [authors, item.year, item.type].filter((x) => x !== undefined && x !== null && String(x).trim() !== '');
  const printedLabel = lang === 'id' ? 'Dicetak dari Lattice' : 'Printed from Lattice';
  const date = dateISO ? ` · ${escapeHTML(String(dateISO).slice(0, 10))}` : '';
  return `
    <div class="print-only print-header">
      <h1 class="print-title">${escapeHTML(item.title || item.id || '')}</h1>
      ${bits.length ? `<div class="print-meta">${escapeHTML(bits.join(' · '))}</div>` : ''}
      <div class="print-provenance">${escapeHTML(printedLabel)}${date}</div>
    </div>`;
}
