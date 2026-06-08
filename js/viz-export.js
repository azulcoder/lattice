// SVG → PNG export for any simulator (Phase S19).
//
// Every simulator renders a pure `<svg class="viz-svg">` whose colours are CSS
// custom properties (fill="var(--gold)" etc.). Those resolve on the page, but a
// raster of the SVG happens *off-page* in an isolated context where the page's
// CSS — and thus the variables — don't exist. So before rasterizing we make the
// SVG self-contained: explicit pixel width/height + a `<style>` block that
// re-declares the referenced variables on the <svg> scope, where descendants
// inherit them.
//
// The string-building core (collectCssVarNames / inlineSvgVars /
// svgExportFilename) is pure and unit-tested; exportSvgToPng / resolveCssVars
// touch the DOM and run only in the browser.

// The palette a simulator might reference — used as the resolve set when an
// element has no inline var() (defensive; normally we resolve only what's used).
export const VIZ_CSS_VARS = [
  '--bg', '--bg-elev-1', '--bg-elev-2', '--bg-chrome',
  '--ink', '--ink-mute', '--ink-faint',
  '--line', '--line-soft',
  '--gold', '--gold-soft', '--azul', '--azul-soft', '--rose', '--green',
  '--mono', '--sans',
];

// Distinct CSS custom-property names referenced via var(--x) in an SVG string,
// in first-appearance order.
export function collectCssVarNames(svgString) {
  const names = [];
  const seen = new Set();
  const re = /var\(\s*(--[a-zA-Z0-9_-]+)/g;
  let m;
  while ((m = re.exec(svgString)) !== null) {
    if (!seen.has(m[1])) { seen.add(m[1]); names.push(m[1]); }
  }
  return names;
}

// Make an SVG string self-contained: inject a <style> defining the referenced
// variables (only those present in varsMap), ensure an xmlns, and set explicit
// width/height (replacing any responsive width="100%"). Pure: string → string.
export function inlineSvgVars(svgString, varsMap, opts = {}) {
  const { width, height } = opts;
  const used = collectCssVarNames(svgString);
  const decls = used
    .filter((n) => varsMap && varsMap[n] != null && String(varsMap[n]).trim() !== '')
    .map((n) => `${n}:${String(varsMap[n]).trim()};`)
    .join('');
  const styleEl = `<style>svg{${decls}}</style>`;

  let out = String(svgString);
  if (!/\bxmlns=/.test(out)) {
    out = out.replace(/<svg\b/, '<svg xmlns="http://www.w3.org/2000/svg"');
  }
  if (width && height) {
    out = out.replace(/<svg\b([^>]*)>/, (full, attrs) => {
      const cleaned = attrs.replace(/\swidth="[^"]*"/g, '').replace(/\sheight="[^"]*"/g, '');
      return `<svg${cleaned} width="${width}" height="${height}">`;
    });
  }
  // inject the style block as the first child of <svg>
  out = out.replace(/(<svg\b[^>]*>)/, `$1${styleEl}`);
  return out;
}

// A safe PNG filename from a viz id (+ optional lang suffix).
export function svgExportFilename(vizId, lang) {
  let base = String(vizId || '')
    .replace(/[^a-z0-9-]+/gi, '-')
    .replace(/^-+|-+$/g, '')
    .toLowerCase();
  if (!base) base = 'lattice-viz';
  const suffix = lang === 'id' ? '-id' : '';
  return `${base}${suffix}.png`;
}

// ─── Browser-only rasterization ─────────────────────────────────────────

// Resolve the given custom-property names against an element's computed style.
export function resolveCssVars(names, el) {
  const target = el || (typeof document !== 'undefined' ? document.documentElement : null);
  if (!target || typeof getComputedStyle === 'undefined') return {};
  const cs = getComputedStyle(target);
  const map = {};
  for (const n of names) {
    const v = cs.getPropertyValue(n).trim();
    if (v) map[n] = v;
  }
  return map;
}

function loadImage(url) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = reject;
    img.src = url;
  });
}

function triggerDownload(blob, filename) {
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
}

// Rasterize a live <svg> element to a PNG and trigger a download. scale ≥1
// supersamples for crisp slides. Resolves false on failure (never throws to
// the click handler).
export async function exportSvgToPng(svgEl, filename, opts = {}) {
  if (!svgEl || typeof document === 'undefined') return false;
  const scale = opts.scale || 2;
  const vb = svgEl.viewBox && svgEl.viewBox.baseVal;
  const w = (vb && vb.width) || svgEl.clientWidth || 640;
  const h = (vb && vb.height) || svgEl.clientHeight || 360;
  const markup = svgEl.outerHTML;
  const names = collectCssVarNames(markup);
  const vars = resolveCssVars(names.length ? names : VIZ_CSS_VARS, svgEl);
  const svgString = inlineSvgVars(markup, vars, { width: Math.round(w * scale), height: Math.round(h * scale) });
  const blob = new Blob([svgString], { type: 'image/svg+xml;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  try {
    const img = await loadImage(url);
    const canvas = document.createElement('canvas');
    canvas.width = Math.round(w * scale);
    canvas.height = Math.round(h * scale);
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = vars['--bg-elev-1'] || vars['--bg'] || '#ffffff';   // opaque backdrop (PNG would be transparent otherwise)
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    await new Promise((resolve) => canvas.toBlob((b) => {
      if (b) triggerDownload(b, filename);
      resolve();
    }, 'image/png'));
    return true;
  } catch (e) {
    return false;
  } finally {
    URL.revokeObjectURL(url);
  }
}
