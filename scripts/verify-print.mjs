#!/usr/bin/env node
// Harness for the print / PDF-a-module feature (Phase S22): the pure pieces in
// js/print.js (PDF title + print-only header), plus structural checks that the
// @media print block in styles.css strips chrome / recolours to ink-on-white
// and that library.js + app.js wire the Print button end-to-end. (CSS isn't
// executable, so — like verify-theme / verify-pwa — we assert on source.)
//
// Usage:  node scripts/verify-print.mjs [--quiet]
// Exit code: 0 = all pass, 1 = any fail.

import { pathToFileURL, fileURLToPath } from 'node:url';
import path from 'node:path';
import { readFileSync } from 'node:fs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const QUIET = process.argv.includes('--quiet');
const read = (rel) => readFileSync(path.join(ROOT, rel), 'utf8');

const print = await import(pathToFileURL(path.join(ROOT, 'js/print.js')).href);
const { printDocTitle, printHeaderHTML } = print;

const results = [];
function check(section, label, cond, detail = '') {
  results.push({ section, ok: !!cond });
  if (!QUIET && !cond) console.log(`  [${section}] ✗ ${label}${detail ? ': ' + detail : ''}`);
}

// ─── PR1: printDocTitle ────────────────────────────────────────────────
check('PR1', 'uses item title', printDocTitle({ title: 'Kyle 1985', id: 'kyle-1985' }) === 'Lattice — Kyle 1985');
check('PR1', 'falls back to id', printDocTitle({ id: 'kyle-1985' }) === 'Lattice — kyle-1985');
check('PR1', 'null item ⇒ generic', printDocTitle(null) === 'Lattice — module');

// ─── PR2: printHeaderHTML ──────────────────────────────────────────────
{
  const item = { title: 'Kyle 1985', authors: ['Kyle, A.'], year: 1985, type: 'paper', id: 'kyle-1985' };
  const h = printHeaderHTML(item, 'en', '2026-06-04T00:00:00');
  check('PR2', 'is the print-only header block', /class="print-only print-header"/.test(h));
  check('PR2', 'shows the title', h.includes('Kyle 1985'));
  check('PR2', 'shows author · year · type', h.includes('Kyle, A.') && h.includes('1985') && h.includes('paper'));
  check('PR2', 'provenance line + date (date sliced to 10)', h.includes('Printed from Lattice') && h.includes('2026-06-04') && !h.includes('T00:00:00'));
  check('PR2', 'localises provenance to ID', printHeaderHTML(item, 'id', '').includes('Dicetak dari Lattice'));
  check('PR2', 'empty item ⇒ empty string', printHeaderHTML(null) === '');
  const esc = printHeaderHTML({ title: '<b>x</b>', authors: ['A & B'], year: 2020, type: 'paper' }, 'en', '');
  check('PR2', 'escapes HTML in title/authors', !esc.includes('<b>x</b>') && esc.includes('&lt;b&gt;') && esc.includes('A &amp; B'));
}

// ─── PR3: @media print stylesheet ──────────────────────────────────────
{
  const css = read('styles.css');
  check('PR3', 'screen hides .print-only', /\.print-only\s*\{\s*display:\s*none/.test(css));
  check('PR3', 'has an @media print block', /@media print\s*\{/.test(css));
  const block = css.slice(css.indexOf('@media print'));
  check('PR3', 'recolours to white bg + dark ink', /--bg:\s*#fff/.test(block) && /--ink:\s*#111/.test(block) && /background:\s*#fff\s*!important/.test(block));
  check('PR3', 'hides the topbar + tabs + actions', /\.topbar\b/.test(block) && /\.view-tabs\b/.test(block) && /\.topbar-actions\b/.test(block));
  check('PR3', 'hides interactive affordances', /\.viz-controls\b/.test(block) && /\.viz-footer\b/.test(block) && /\.ask-claude-btn\b/.test(block) && /\.print-hide\b/.test(block) && /\.schedule-btn\b/.test(block));
  check('PR3', 'hides the back button + overlays', /\.back-btn\b/.test(block) && /\.modal-backdrop\b/.test(block) && /#search-root\b/.test(block));
  check('PR3', 'reveals print-only + expands <details>', /\.print-only\s*\{\s*display:\s*block\s*!important/.test(block) && /details > :not\(summary\)\s*\{\s*display:\s*block/.test(block));
  check('PR3', 'only prints the active view', /\.view:not\(\.active\)\s*\{\s*display:\s*none/.test(block));
  check('PR3', 'avoids awkward page breaks in sections', /\.item-content-section[^{]*\{\s*break-inside:\s*avoid/.test(block));
  check('PR3', 'sets a @page margin', /@page\s*\{\s*margin:/.test(block));
}

// ─── PR4: library.js wires the button + header ─────────────────────────
{
  const lib = read('js/library.js');
  check('PR4', "imports printHeaderHTML from print.js", /import\s*\{\s*printHeaderHTML\s*\}\s*from\s*'\.\/print\.js'/.test(lib));
  check('PR4', 'injects the print header in item detail', /printHeaderHTML\(item, lang, today\)/.test(lib));
  check('PR4', 'renders a Print button (data-print-module, print-hide)', /data-print-module/.test(lib) && /print-btn print-hide/.test(lib));
  check('PR4', 'wires the button to onPrintModule', /\[data-print-module\]'\)\?\.addEventListener\('click',\s*\(\)\s*=>\s*onPrintModule/.test(lib));
  check('PR4', 'destructures onPrintModule from deps', /onPrintModule\s*\}\s*=\s*deps/.test(lib));
}

// ─── PR5: app.js print handler ─────────────────────────────────────────
{
  const app = read('js/app.js');
  check('PR5', 'imports printDocTitle', /import\s*\{\s*printDocTitle\s*\}\s*from\s*'\.\/print\.js'/.test(app));
  check('PR5', 'onPrintModule sets document.title via printDocTitle', /document\.title\s*=\s*printDocTitle\(item\)/.test(app));
  check('PR5', 'calls window.print()', /window\.print\(\)/.test(app));
  check('PR5', 'restores the previous title afterprint', /afterprint/.test(app));
  check('PR5', 'passes onPrintModule into the library deps', /onPrintModule,/.test(app));
}

const passed = results.filter((r) => r.ok).length;
console.log(`\nTotal: ${passed}/${results.length}`);
if (passed === results.length) console.log('All checks pass. Print / PDF module export verified.');
process.exit(passed === results.length ? 0 : 1);
