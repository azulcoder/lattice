#!/usr/bin/env node
// Harness for the SVG → PNG export pipeline (js/viz-export.js, Phase S19):
// the pure string-building core (var-name collection, self-contained SVG
// assembly, filename sanitization) plus an integration pass over a *real*
// rendered simulator SVG (OrderBookSim via the COMPONENTS registry).
//
// Usage:  node scripts/verify-svg-export.mjs [--quiet]
// Exit code: 0 = all pass, 1 = any fail.

import { pathToFileURL, fileURLToPath } from 'node:url';
import path from 'node:path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const QUIET = process.argv.includes('--quiet');

const xp = await import(pathToFileURL(path.join(ROOT, 'js/viz-export.js')).href);
const { collectCssVarNames, inlineSvgVars, svgExportFilename, resolveCssVars, exportSvgToPng, VIZ_CSS_VARS } = xp;
const viz = await import(pathToFileURL(path.join(ROOT, 'js/viz.js')).href);

const results = [];
function check(section, label, cond, detail = '') {
  results.push({ section, ok: !!cond });
  if (!QUIET && !cond) console.log(`  [${section}] ✗ ${label}${detail ? ': ' + detail : ''}`);
}

// ─── X1: collectCssVarNames ────────────────────────────────────────────
{
  const svg = '<svg><rect fill="var(--gold)"/><text fill="var( --ink-mute )"/><rect fill="var(--gold)"/><line stroke="var(--line-soft)"/></svg>';
  const names = collectCssVarNames(svg);
  check('X1', 'distinct, first-appearance order', JSON.stringify(names) === JSON.stringify(['--gold', '--ink-mute', '--line-soft']));
  check('X1', 'dedupes repeats', names.filter((n) => n === '--gold').length === 1);
  check('X1', 'tolerates whitespace inside var()', names.includes('--ink-mute'));
  check('X1', 'no var() ⇒ empty', collectCssVarNames('<svg><rect fill="#000"/></svg>').length === 0);
}

// ─── X2: inlineSvgVars — style injection, used-only ────────────────────
{
  const svg = '<svg viewBox="0 0 10 10" width="100%" class="viz-svg"><rect fill="var(--gold)"/><text fill="var(--ink)">hi</text></svg>';
  const out = inlineSvgVars(svg, { '--gold': '#d4af37', '--ink': '#1b1b1b', '--unused': '#fff' }, { width: 1280, height: 720 });
  check('X2', 'injects a <style> block on svg scope', /<svg[^>]*><style>svg\{/.test(out));
  check('X2', 'defines used var --gold', out.includes('--gold:#d4af37;'));
  check('X2', 'defines used var --ink', out.includes('--ink:#1b1b1b;'));
  check('X2', 'omits unused var --unused', !out.includes('--unused'));
  check('X2', 'sets explicit width/height', /width="1280"/.test(out) && /height="720"/.test(out));
  check('X2', 'strips responsive width="100%"', !/width="100%"/.test(out));
  check('X2', 'preserves original content', out.includes('<rect fill="var(--gold)"/>') && out.includes('>hi</text>'));
  check('X2', 'viewBox preserved', /viewBox="0 0 10 10"/.test(out));
}

// ─── X3: inlineSvgVars — xmlns + edge cases ────────────────────────────
{
  const out = inlineSvgVars('<svg><rect/></svg>', {}, {});
  check('X3', 'adds xmlns when missing', /xmlns="http:\/\/www\.w3\.org\/2000\/svg"/.test(out));
  check('X3', 'no vars ⇒ empty style decls', out.includes('<style>svg{}</style>'));
  const already = inlineSvgVars('<svg xmlns="http://www.w3.org/2000/svg"><rect/></svg>', {}, {});
  check('X3', 'does not duplicate xmlns', (already.match(/xmlns=/g) || []).length === 1);
  check('X3', 'no width/height set when opts omit them', !/<svg[^>]*\swidth=/.test(out));
}

// ─── X4: svgExportFilename ─────────────────────────────────────────────
{
  check('X4', 'plain id', svgExportFilename('kyle-lambda-simulator', 'en') === 'kyle-lambda-simulator.png');
  check('X4', 'id suffix for ID lang', svgExportFilename('order-book-ladder', 'id') === 'order-book-ladder-id.png');
  check('X4', 'empty id ⇒ fallback', svgExportFilename('', 'en') === 'lattice-viz.png');
  check('X4', 'null id ⇒ fallback', svgExportFilename(null, 'en') === 'lattice-viz.png');
  check('X4', 'sanitizes spaces/uppercase/punct', svgExportFilename('Kyle λ Sim!!', 'en') === 'kyle-sim.png');
  check('X4', 'garbage-only id ⇒ fallback', svgExportFilename('!!!', 'en') === 'lattice-viz.png');
}

// ─── X5: browser-only exports present + safe in node ───────────────────
{
  check('X5', 'exportSvgToPng exported', typeof exportSvgToPng === 'function');
  check('X5', 'resolveCssVars exported', typeof resolveCssVars === 'function');
  check('X5', 'VIZ_CSS_VARS has core palette', VIZ_CSS_VARS.includes('--gold') && VIZ_CSS_VARS.includes('--azul') && VIZ_CSS_VARS.includes('--ink'));
  check('X5', 'resolveCssVars returns {} without a DOM', JSON.stringify(resolveCssVars(['--gold'], null)) === '{}');
  check('X5', 'exportSvgToPng(null) resolves false (no throw)', (await exportSvgToPng(null, 'x.png')) === false);
}

// ─── X6: integration over a real rendered simulator SVG ────────────────
{
  // Render OrderBookSim against a capturing stub host and grab its <svg>.
  function capturingEl() {
    let html = '';
    return {
      set innerHTML(v) { html = v; }, get innerHTML() { return html; },
      textContent: '', value: '300',
      addEventListener() {}, querySelector() { return capturingEl(); }, querySelectorAll() { return []; }, style: {},
    };
  }
  const host = { controlsRoot: capturingEl(), canvasRoot: capturingEl(), readoutRoot: capturingEl(), onReset() {} };
  viz.COMPONENTS.OrderBookSim(host, {}, 'en');
  const svgMarkup = host.canvasRoot.innerHTML;
  check('X6', 'component produced an <svg>', /<svg/.test(svgMarkup));
  const names = collectCssVarNames(svgMarkup);
  check('X6', 'real SVG references CSS vars (≥4)', names.length >= 4);
  check('X6', 'includes --gold (mid line)', names.includes('--gold'));
  // Resolve every referenced var to a stub colour, then assemble the export SVG.
  const stubVars = Object.fromEntries(names.map((n) => [n, '#123456']));
  const out = inlineSvgVars(svgMarkup, stubVars, { width: 1280, height: 720 });
  check('X6', 'every referenced var is declared in the style block', names.every((n) => out.includes(`${n}:#123456;`)));
  check('X6', 'export SVG is self-contained (xmlns + style + sized)', /xmlns=/.test(out) && /<style>svg\{/.test(out) && /width="1280"/.test(out));
  check('X6', 'original ladder content survives', out.includes('<rect') && out.includes('</svg>'));
}

const passed = results.filter((r) => r.ok).length;
console.log(`\nTotal: ${passed}/${results.length}`);
if (passed === results.length) console.log('All checks pass. SVG → PNG export pipeline verified.');
process.exit(passed === results.length ? 0 : 1);
