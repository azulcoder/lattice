// Visualization framework for embedded interactive viz in content sections.
//
// Schema (set on section.visualization in content modules):
//   {
//     id: 'roll-spread-simulator',
//     component: 'RollSpreadSim',          // key into COMPONENTS registry
//     title: { en, id },
//     description: { en, id },
//     defaultParams: { ... },               // component-specific
//     height: 400                           // px
//   }
//
// Component contract: each registered component is a function
//   (root: HTMLElement, params: object, lang: 'en'|'id') -> void
// It owns rendering controls + SVG inside `root`. Pure SVG (no D3 / Chart.js)
// for portability — keeps the no-build-step + no-CDN principle intact.
//
// Params are exploratory and live only in DOM/closure state, not localStorage.

import { escapeHTML } from './util.js';
import { exportSvgToPng, svgExportFilename } from './viz-export.js';

// ─── Registry ──────────────────────────────────────────────────────────

export const COMPONENTS = {};

export function registerComponent(key, fn) {
  COMPONENTS[key] = fn;
}

// ─── Container rendering ───────────────────────────────────────────────

// Renders the viz container (title, description, mount point, reset button)
// and delegates inner rendering to the registered component.
export function renderVisualization(root, vizSpec, lang) {
  if (!vizSpec || !vizSpec.component) return;
  const comp = COMPONENTS[vizSpec.component];
  if (!comp) {
    root.innerHTML = `<div class="viz-error">Component not registered: ${escapeHTML(vizSpec.component)}</div>`;
    return;
  }
  const title = (vizSpec.title && vizSpec.title[lang]) || (vizSpec.title && vizSpec.title.en) || '';
  const description = (vizSpec.description && vizSpec.description[lang]) || (vizSpec.description && vizSpec.description.en) || '';
  const defaults = vizSpec.defaultParams || {};
  const height = vizSpec.height || 400;

  root.innerHTML = `
    <div class="viz-container" data-viz-id="${escapeHTML(vizSpec.id || '')}">
      ${title ? `<h4 class="viz-title">${escapeHTML(title)}</h4>` : ''}
      ${description ? `<p class="viz-description">${escapeHTML(description)}</p>` : ''}
      <div class="viz-controls"></div>
      <div class="viz-canvas" style="min-height: ${height}px"></div>
      <div class="viz-readout"></div>
      <div class="viz-footer">
        <button class="viz-export-btn" type="button" title="${lang === 'id' ? 'Simpan gambar PNG untuk slide' : 'Save a PNG image for slides'}">${lang === 'id' ? 'Simpan PNG' : 'Save PNG'}</button>
        <button class="viz-reset-btn" type="button">${lang === 'id' ? 'Reset' : 'Reset to defaults'}</button>
      </div>
    </div>
  `;

  const params = { ...defaults };
  let resetHandler = null;

  // Component receives a "host" object so it can mount controls and canvas
  // separately, expose a re-render hook, and register reset behavior.
  const host = {
    controlsRoot: root.querySelector('.viz-controls'),
    canvasRoot:   root.querySelector('.viz-canvas'),
    readoutRoot:  root.querySelector('.viz-readout'),
    params,
    lang,
    onReset: (fn) => { resetHandler = fn; },
  };

  comp(host, params, lang);

  root.querySelector('.viz-reset-btn')?.addEventListener('click', () => {
    Object.assign(params, defaults);
    if (resetHandler) resetHandler();
  });

  root.querySelector('.viz-export-btn')?.addEventListener('click', () => {
    const svg = root.querySelector('.viz-canvas svg');
    if (svg) exportSvgToPng(svg, svgExportFilename(vizSpec.id, lang));
  });
}

// ─── Helpers for components ────────────────────────────────────────────

// Seeded PRNG so identical params yield identical visualizations.
// Mulberry32: tiny, fast, good distribution for this use case.
export function makeRng(seed) {
  let s = seed >>> 0;
  return function rng() {
    s = (s + 0x6D2B79F5) >>> 0;
    let t = s;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

// Box-Muller transform for standard normal samples from a Mulberry32 stream.
export function makeGaussian(rng) {
  let cached = null;
  return function gauss() {
    if (cached !== null) {
      const v = cached;
      cached = null;
      return v;
    }
    let u = 0, v = 0;
    while (u === 0) u = rng();
    while (v === 0) v = rng();
    const mag = Math.sqrt(-2.0 * Math.log(u));
    cached = mag * Math.sin(2.0 * Math.PI * v);
    return mag * Math.cos(2.0 * Math.PI * v);
  };
}

// Linearly map a value from one range to another. Saturates at the bounds.
export function lerp(value, fromMin, fromMax, toMin, toMax) {
  const t = Math.max(0, Math.min(1, (value - fromMin) / (fromMax - fromMin)));
  return toMin + t * (toMax - toMin);
}

// ─── Roll's spread interactive simulator ───────────────────────────────
//
// Simulation logic extracted from the component so it's testable in isolation
// (matches the pattern used for Acuña + GM solvers/helpers).
//
//   simulateRoll({ s, rho, nSamples, seed, sigmaM = 0.005 })
//     → { p, dp, q, m, cov, rollEstimate, biasPct }
//
// where:
//   p           = observed (transaction) prices, length nSamples
//   dp          = first differences of p, length nSamples - 1
//   q           = trade direction ±1 series with AR(1)-like autocorrelation
//   m           = efficient price random walk, length nSamples
//   cov         = sample lag-1 autocovariance of dp
//   rollEstimate = 2·sqrt(-cov) if cov < 0, else NaN
//   biasPct     = ((rollEstimate - s) / s) · 100, or null if cov ≥ 0

function simulateRoll({ s, rho, nSamples, seed, sigmaM = 0.005 }) {
  const rng = makeRng(seed);
  const gauss = makeGaussian(rng);

  // AR(1) latent z series; sign(z) gives trade direction with correlation ~ rho
  const sigmaNoise = Math.sqrt(Math.max(0.0001, 1 - rho * rho));
  const z = new Float64Array(nSamples);
  z[0] = gauss();
  for (let i = 1; i < nSamples; i++) z[i] = rho * z[i - 1] + sigmaNoise * gauss();
  const q = new Int8Array(nSamples);
  for (let i = 0; i < nSamples; i++) q[i] = z[i] >= 0 ? 1 : -1;

  // Efficient price random walk
  const m = new Float64Array(nSamples);
  m[0] = 100;
  for (let i = 1; i < nSamples; i++) m[i] = m[i - 1] + sigmaM * gauss();

  // Observed (transaction) price
  const p = new Float64Array(nSamples);
  for (let i = 0; i < nSamples; i++) p[i] = m[i] + (s / 2) * q[i];

  // First differences
  const dp = new Float64Array(nSamples - 1);
  for (let i = 1; i < nSamples; i++) dp[i - 1] = p[i] - p[i - 1];

  // Sample lag-1 autocovariance of dp
  let mean = 0;
  for (let i = 0; i < dp.length; i++) mean += dp[i];
  mean /= dp.length;
  let cov = 0;
  for (let i = 1; i < dp.length; i++) cov += (dp[i] - mean) * (dp[i - 1] - mean);
  cov /= (dp.length - 1);

  const rollEstimate = cov < 0 ? 2 * Math.sqrt(-cov) : NaN;
  const biasPct = isFinite(rollEstimate) ? ((rollEstimate - s) / s) * 100 : null;

  return { p, dp, q, m, cov, rollEstimate, biasPct };
}

registerComponent('RollSpreadSim', function RollSpreadSim(host, params, lang) {
  const W = 640;
  const H = 360;
  const M = { top: 24, right: 16, bottom: 30, left: 56 };

  const labels = lang === 'id' ? {
    spread: 'Spread $s$',
    rho:    'Persistensi latent-flow $\\rho$ (lag-1)',
    nTrades: 'Jumlah trade',
    regenerate: 'Regenerate (seed baru)',
    rollEstimate: 'Roll estimate',
    trueSpread:   'True spread',
    bias:         'Bias',
    samplePrices: 'Sampel observed price (acak)',
    yLabel:       'Δp',
  } : {
    spread: 'Spread $s$',
    rho:    'Latent-flow persistence $\\rho$ (lag 1)',
    nTrades: 'Number of trades',
    regenerate: 'Regenerate (new seed)',
    rollEstimate: 'Roll estimate',
    trueSpread:   'True spread',
    bias:         'Bias',
    samplePrices: 'Sample observed prices',
    yLabel:       'Δp',
  };

  // ── Controls ──────────────────────────────────────────────────────
  host.controlsRoot.innerHTML = `
    <div class="viz-control-row">
      <label class="viz-control-label" for="viz-roll-s">${labels.spread}</label>
      <input type="range" id="viz-roll-s" min="0.01" max="0.50" step="0.01" value="${params.s}" />
      <span class="viz-control-value" data-viz-show="s">${params.s.toFixed(2)}</span>
    </div>
    <div class="viz-control-row">
      <label class="viz-control-label" for="viz-roll-rho">${labels.rho}</label>
      <input type="range" id="viz-roll-rho" min="-0.3" max="0.7" step="0.05" value="${params.rho}" />
      <span class="viz-control-value" data-viz-show="rho">${params.rho.toFixed(2)}</span>
    </div>
    <div class="viz-control-row">
      <label class="viz-control-label" for="viz-roll-n">${labels.nTrades}</label>
      <input type="range" id="viz-roll-n" min="100" max="5000" step="100" value="${params.nSamples}" />
      <span class="viz-control-value" data-viz-show="n">${params.nSamples}</span>
    </div>
    <div class="viz-control-row">
      <button type="button" class="viz-regen-btn">${labels.regenerate}</button>
    </div>
  `;

  let seed = params.seed || 12345;

  function draw() {
    const s = params.s;
    const rho = params.rho;
    const n = params.nSamples;

    // Run extracted simulation (see simulateRoll above)
    const { dp, cov, rollEstimate: rollHat, biasPct } = simulateRoll({
      s, rho, nSamples: n, seed,
    });

    // ── SVG render ─────────────────────────────────────────────────
    const plotW = W - M.left - M.right;
    const plotH = H - M.top - M.bottom;
    const showN = Math.min(200, dp.length);
    const stride = Math.max(1, Math.floor(dp.length / showN));
    const pts = [];
    for (let i = 0; i < dp.length; i += stride) pts.push({ i, v: dp[i] });
    const maxAbs = pts.reduce((a, p) => Math.max(a, Math.abs(p.v)), 0.05);
    const x = (i) => M.left + (i / pts.length) * plotW;
    const y = (v) => M.top + (1 - (v + maxAbs) / (2 * maxAbs)) * plotH;

    const linePath = pts.map((p, i) => `${i === 0 ? 'M' : 'L'} ${x(i).toFixed(1)} ${y(p.v).toFixed(1)}`).join(' ');

    // Bar chart of Roll vs s (right side bar comparison).
    const barX0 = W - 130;
    const barTopY = M.top + 8;
    const barH = plotH - 30;
    const maxBar = Math.max(s, isFinite(rollHat) ? rollHat : 0, 0.01);
    const sBarH    = (s / maxBar) * barH;
    const rollBarH = isFinite(rollHat) ? (rollHat / maxBar) * barH : 0;

    const sgnBias = biasPct === null ? '' : (biasPct >= 0 ? '+' : '');
    const biasText = biasPct === null
      ? (lang === 'id' ? 'cov positif — model gagal' : 'positive cov — model fails')
      : `${sgnBias}${biasPct.toFixed(1)}%`;
    const biasColor = biasPct === null ? '#a05050' : (Math.abs(biasPct) < 8 ? '#4d7a3a' : '#a05050');

    host.canvasRoot.innerHTML = `
      <svg viewBox="0 0 ${W} ${H}" width="100%" preserveAspectRatio="xMidYMid meet" class="viz-svg">
        <!-- background -->
        <rect x="0" y="0" width="${W}" height="${H}" fill="var(--bg-elev-1)" />

        <!-- Δp axis -->
        <line x1="${M.left}" y1="${M.top}" x2="${M.left}" y2="${M.top + plotH}" stroke="var(--line)" />
        <line x1="${M.left}" y1="${M.top + plotH}" x2="${M.left + plotW - 140}" y2="${M.top + plotH}" stroke="var(--line)" />
        <line x1="${M.left}" y1="${M.top + plotH / 2}" x2="${M.left + plotW - 140}" y2="${M.top + plotH / 2}" stroke="var(--line-soft)" stroke-dasharray="2 2" />

        <!-- Δp axis labels -->
        <text x="${M.left - 8}" y="${M.top + 6}" text-anchor="end" font-size="10" fill="var(--ink-mute)">+${maxAbs.toFixed(3)}</text>
        <text x="${M.left - 8}" y="${M.top + plotH + 4}" text-anchor="end" font-size="10" fill="var(--ink-mute)">−${maxAbs.toFixed(3)}</text>
        <text x="${M.left - 8}" y="${M.top + plotH / 2 + 4}" text-anchor="end" font-size="10" fill="var(--ink-mute)">0</text>
        <text x="${M.left + (plotW - 140) / 2}" y="${M.top + plotH + 22}" text-anchor="middle" font-size="11" fill="var(--ink-mute)">trade index (subsampled)</text>
        <text x="${M.left - 38}" y="${M.top + plotH / 2}" text-anchor="middle" font-size="11" fill="var(--ink-mute)" transform="rotate(-90 ${M.left - 38} ${M.top + plotH / 2})">${labels.yLabel}</text>

        <!-- Δp series -->
        <path d="${linePath}" fill="none" stroke="var(--azul)" stroke-width="1.2" opacity="0.85" />

        <!-- Bar chart -->
        <text x="${barX0}" y="${barTopY - 4}" font-size="11" fill="var(--ink-mute)">${labels.rollEstimate}  vs  ${labels.trueSpread}</text>
        <rect x="${barX0}" y="${barTopY + barH - sBarH}" width="44" height="${sBarH}" fill="var(--gold)" opacity="0.85" />
        <text x="${barX0 + 22}" y="${barTopY + barH + 14}" text-anchor="middle" font-size="10" fill="var(--ink-mute)">s = ${s.toFixed(3)}</text>
        <rect x="${barX0 + 58}" y="${barTopY + barH - rollBarH}" width="44" height="${rollBarH}" fill="var(--azul)" opacity="0.85" />
        <text x="${barX0 + 80}" y="${barTopY + barH + 14}" text-anchor="middle" font-size="10" fill="var(--ink-mute)">ŝ = ${isFinite(rollHat) ? rollHat.toFixed(3) : '—'}</text>

        <!-- Bias annotation -->
        <text x="${barX0 + 50}" y="${barTopY + barH + 30}" text-anchor="middle" font-size="11" fill="${biasColor}" font-weight="500">${labels.bias}: ${biasText}</text>
      </svg>
    `;

    host.readoutRoot.innerHTML = `
      <div class="viz-readout-row">
        <span><strong>Cov(Δpₜ, Δpₜ₋₁)</strong> = ${cov.toFixed(6)} USD²</span>
        <span class="dot">·</span>
        <span><strong>ŝ</strong> = ${isFinite(rollHat) ? rollHat.toFixed(4) : '—'} USD</span>
        <span class="dot">·</span>
        <span><strong>s</strong> = ${s.toFixed(4)} USD</span>
      </div>
    `;
  }

  // ── Bind controls ──────────────────────────────────────────────────
  const sInput = host.controlsRoot.querySelector('#viz-roll-s');
  const rhoInput = host.controlsRoot.querySelector('#viz-roll-rho');
  const nInput = host.controlsRoot.querySelector('#viz-roll-n');
  const regenBtn = host.controlsRoot.querySelector('.viz-regen-btn');
  const sShow = host.controlsRoot.querySelector('[data-viz-show="s"]');
  const rhoShow = host.controlsRoot.querySelector('[data-viz-show="rho"]');
  const nShow = host.controlsRoot.querySelector('[data-viz-show="n"]');

  sInput.addEventListener('input', () => {
    params.s = parseFloat(sInput.value);
    sShow.textContent = params.s.toFixed(2);
    draw();
  });
  rhoInput.addEventListener('input', () => {
    params.rho = parseFloat(rhoInput.value);
    rhoShow.textContent = params.rho.toFixed(2);
    draw();
  });
  nInput.addEventListener('input', () => {
    params.nSamples = parseInt(nInput.value, 10);
    nShow.textContent = params.nSamples;
    draw();
  });
  regenBtn.addEventListener('click', () => {
    seed = (seed * 1664525 + 1013904223) >>> 0;
    draw();
  });

  host.onReset(() => {
    sInput.value = params.s;
    rhoInput.value = params.rho;
    nInput.value = params.nSamples;
    sShow.textContent = params.s.toFixed(2);
    rhoShow.textContent = params.rho.toFixed(2);
    nShow.textContent = params.nSamples;
    seed = 12345;
    draw();
  });

  draw();
});

// ─── Acuña deliverability sensitivity simulator ────────────────────────
//
// Implements Acuña-Pasaribu (2010) Eq 8 — the explicit (quadratic) form of
// the combined wellbore + reservoir deliverability equation:
//
//   W^2 + B·W − C_WB^2 · (p_rg^2 − p_f^2) = 0     where B = C_WB^2 · ν_rg / PI
//
// Solving for the positive root:
//
//   W = (−B + √(B^2 + 4·C_WB^2·(p_rg^2 − p_f^2))) / 2
//
// Diagnostic mode overlays three curves: baseline (current params),
// scenario A (C_WB × 0.5 — wellbore problem signature visible at high
// flow / low p_f end), scenario B (PI × 0.6 — formation problem
// signature visible at low flow / high p_f end). Visually distinct
// signatures are the educational payoff.
//
// Kinematic viscosity ν_rg held at illustrative constant for simplicity
// (real value varies with reservoir pressure/temperature).
// Skin enters per Acuña paper Eq 6: PI_eff = PI · (ln(r_e/r_w) - 0.5) /
// (ln(r_e/r_w) - 0.5 + S) with r_e/r_w = 1000. Negative skin (stimulated
// well) produces PI_eff > PI; positive skin (damaged well) produces
// PI_eff < PI. Skin clamped to S > -(skinDenom - 0.5) ≈ -5.9 to prevent
// PI_eff blow-up at extreme stimulation.

function solveAcunaW(p_rg, p_f, C_WB, PI, skin) {
  // ν_rg illustrative constant — chosen so PI and C_WB both produce
  // visible signatures across the P_f range. Real ν_rg depends on
  // reservoir steam state; this constant is for diagnostic teaching.
  const nu_rg = 5.0;
  const skinDenom = Math.log(1000) - 0.5;  // ≈ 6.408, baseline Eq 6 denominator
  const skinClamped = Math.max(skin, -(skinDenom - 0.5));  // prevent PI_eff blow-up
  const PI_eff = PI * skinDenom / (skinDenom + skinClamped);
  if (PI_eff <= 0) return 0;
  if (p_rg <= p_f) return 0;
  const B = (C_WB * C_WB * nu_rg) / PI_eff;
  const discriminant = B * B + 4 * C_WB * C_WB * (p_rg * p_rg - p_f * p_f);
  if (discriminant < 0) return 0;
  return (-B + Math.sqrt(discriminant)) / 2;
}

registerComponent('AcunaDeliverabilitySim', function AcunaDeliverabilitySim(host, params, lang) {
  const W = 640;
  const H = 380;
  const M = { top: 28, right: 130, bottom: 38, left: 56 };

  const labels = lang === 'id' ? {
    pRg:        'Reservoir pressure P_rg (gravity-corrected)',
    cWb:        'Wellbore coefficient C_WB (kg/s·bar)',
    pi:         'Productivity index PI',
    skin:       'Skin S (dimensionless)',
    diagnostic: 'Diagnostic mode (overlay baseline vs scenarios)',
    reset:      'Reset',
    baseline:   'Baseline',
    scenarioA:  'A — wellbore problem (C_WB ×0.5)',
    scenarioB:  'B — formation problem (PI ×0.6)',
    aof:        'AOF (P_f = 0)',
    pfAxis:     'Wellhead pressure P_f (bara)',
    wAxis:      'Mass flow W (kg/s)',
  } : {
    pRg:        'Reservoir pressure P_rg (gravity-corrected)',
    cWb:        'Wellbore coefficient C_WB (kg/s·bar)',
    pi:         'Productivity index PI',
    skin:       'Skin S (dimensionless)',
    diagnostic: 'Diagnostic mode (overlay baseline vs scenarios)',
    reset:      'Reset',
    baseline:   'Baseline',
    scenarioA:  'A — wellbore problem (C_WB ×0.5)',
    scenarioB:  'B — formation problem (PI ×0.6)',
    aof:        'AOF (P_f = 0)',
    pfAxis:     'Wellhead pressure P_f (bara)',
    wAxis:      'Mass flow W (kg/s)',
  };

  host.controlsRoot.innerHTML = `
    <div class="viz-control-row">
      <label class="viz-control-label" for="viz-acuna-prg">${labels.pRg}</label>
      <input type="range" id="viz-acuna-prg" min="15" max="40" step="0.5" value="${params.P_rg}" />
      <span class="viz-control-value" data-viz-show="prg">${params.P_rg.toFixed(1)} bara</span>
    </div>
    <div class="viz-control-row">
      <label class="viz-control-label" for="viz-acuna-cwb">${labels.cWb}</label>
      <input type="range" id="viz-acuna-cwb" min="0.4" max="2.5" step="0.05" value="${params.C_WB}" />
      <span class="viz-control-value" data-viz-show="cwb">${params.C_WB.toFixed(2)}</span>
    </div>
    <div class="viz-control-row">
      <label class="viz-control-label" for="viz-acuna-pi">${labels.pi}</label>
      <input type="range" id="viz-acuna-pi" min="0.15" max="0.80" step="0.01" value="${params.PI}" />
      <span class="viz-control-value" data-viz-show="pi">${params.PI.toFixed(2)}</span>
    </div>
    <div class="viz-control-row">
      <label class="viz-control-label" for="viz-acuna-skin">${labels.skin}</label>
      <input type="range" id="viz-acuna-skin" min="-3" max="15" step="0.5" value="${params.skin}" />
      <span class="viz-control-value" data-viz-show="skin">${params.skin.toFixed(1)}</span>
    </div>
    <div class="viz-control-row">
      <label class="viz-control-label" for="viz-acuna-diag">${labels.diagnostic}</label>
      <input type="checkbox" id="viz-acuna-diag" ${params.diagnosticMode ? 'checked' : ''} />
      <span class="viz-control-value"></span>
    </div>
  `;

  function curvePoints(p_rg, C_WB, PI, skin) {
    const pts = [];
    const N = 60;
    const pMax = p_rg * 0.98;  // approach but not exceed reservoir pressure
    for (let i = 0; i <= N; i++) {
      const p_f = (i / N) * pMax;
      const w = solveAcunaW(p_rg, p_f, C_WB, PI, skin);
      pts.push({ p_f, w });
    }
    return pts;
  }

  function draw() {
    const baseline = curvePoints(params.P_rg, params.C_WB, params.PI, params.skin);
    const diag = params.diagnosticMode;
    const scenarioA = diag ? curvePoints(params.P_rg, params.C_WB * 0.5, params.PI, params.skin) : null;
    const scenarioB = diag ? curvePoints(params.P_rg, params.C_WB, params.PI * 0.6, params.skin) : null;

    const allCurves = [baseline, scenarioA, scenarioB].filter(Boolean);
    const wMax = Math.max(...allCurves.flatMap((c) => c.map((p) => p.w)), 1);
    const pfMax = params.P_rg;

    const plotW = W - M.left - M.right;
    const plotH = H - M.top - M.bottom;
    const x = (p_f) => M.left + (p_f / pfMax) * plotW;
    const y = (w) => M.top + (1 - w / wMax) * plotH;

    const toPath = (pts) => pts.map((p, i) => `${i === 0 ? 'M' : 'L'} ${x(p.p_f).toFixed(1)} ${y(p.w).toFixed(1)}`).join(' ');

    const baselineAOF = baseline[0]?.w || 0;
    const scenarioAAOF = scenarioA?.[0]?.w || 0;
    const scenarioBAOF = scenarioB?.[0]?.w || 0;

    // Y axis ticks (every ~10 kg/s)
    const yTickInterval = wMax > 100 ? 20 : 10;
    const yTicks = [];
    for (let v = 0; v <= wMax; v += yTickInterval) yTicks.push(v);
    // X axis ticks (every ~5 bara)
    const xTickInterval = 5;
    const xTicks = [];
    for (let v = 0; v <= pfMax; v += xTickInterval) xTicks.push(v);

    const legendY = M.top + 4;
    const legendX = W - M.right + 10;

    host.canvasRoot.innerHTML = `
      <svg viewBox="0 0 ${W} ${H}" width="100%" preserveAspectRatio="xMidYMid meet" class="viz-svg">
        <rect x="0" y="0" width="${W}" height="${H}" fill="var(--bg-elev-1)" />

        <!-- gridlines -->
        ${yTicks.map((v) => `<line x1="${M.left}" y1="${y(v).toFixed(1)}" x2="${(M.left + plotW).toFixed(1)}" y2="${y(v).toFixed(1)}" stroke="var(--line-soft)" stroke-dasharray="2 2" />`).join('')}

        <!-- axes -->
        <line x1="${M.left}" y1="${M.top}" x2="${M.left}" y2="${M.top + plotH}" stroke="var(--line)" />
        <line x1="${M.left}" y1="${M.top + plotH}" x2="${(M.left + plotW).toFixed(1)}" y2="${M.top + plotH}" stroke="var(--line)" />

        <!-- y-axis ticks + labels -->
        ${yTicks.map((v) => `<text x="${M.left - 6}" y="${(y(v) + 3).toFixed(1)}" text-anchor="end" font-size="10" fill="var(--ink-mute)">${v}</text>`).join('')}

        <!-- x-axis ticks + labels -->
        ${xTicks.map((v) => `<text x="${x(v).toFixed(1)}" y="${M.top + plotH + 14}" text-anchor="middle" font-size="10" fill="var(--ink-mute)">${v}</text>`).join('')}

        <!-- axis titles -->
        <text x="${M.left + plotW / 2}" y="${M.top + plotH + 30}" text-anchor="middle" font-size="11" fill="var(--ink-mute)">${labels.pfAxis}</text>
        <text x="${M.left - 42}" y="${M.top + plotH / 2}" text-anchor="middle" font-size="11" fill="var(--ink-mute)" transform="rotate(-90 ${M.left - 42} ${M.top + plotH / 2})">${labels.wAxis}</text>

        <!-- curves -->
        ${diag && scenarioA ? `<path d="${toPath(scenarioA)}" fill="none" stroke="#a05050" stroke-width="1.4" opacity="0.85" />` : ''}
        ${diag && scenarioB ? `<path d="${toPath(scenarioB)}" fill="none" stroke="#c47a3d" stroke-width="1.4" opacity="0.85" />` : ''}
        <path d="${toPath(baseline)}" fill="none" stroke="var(--gold)" stroke-width="2" />

        <!-- legend / readout -->
        <g transform="translate(${legendX}, ${legendY})">
          <rect x="0" y="0" width="${W - legendX - 8}" height="${diag ? 90 : 50}" fill="var(--bg-elev-2)" stroke="var(--line-soft)" rx="4" />
          <line x1="6" y1="14" x2="22" y2="14" stroke="var(--gold)" stroke-width="2"/>
          <text x="26" y="17" font-size="10" fill="var(--ink)">${labels.baseline}</text>
          <text x="26" y="29" font-size="9.5" fill="var(--gold)" font-family="var(--mono)">AOF: ${baselineAOF.toFixed(1)} kg/s</text>
          ${diag ? `
            <line x1="6" y1="44" x2="22" y2="44" stroke="#a05050" stroke-width="1.4"/>
            <text x="26" y="47" font-size="9" fill="var(--ink-mute)">${labels.scenarioA}</text>
            <text x="26" y="58" font-size="9" fill="#a05050" font-family="var(--mono)">AOF: ${scenarioAAOF.toFixed(1)} kg/s</text>
            <line x1="6" y1="72" x2="22" y2="72" stroke="#c47a3d" stroke-width="1.4"/>
            <text x="26" y="75" font-size="9" fill="var(--ink-mute)">${labels.scenarioB}</text>
            <text x="26" y="86" font-size="9" fill="#c47a3d" font-family="var(--mono)">AOF: ${scenarioBAOF.toFixed(1)} kg/s</text>
          ` : ''}
        </g>
      </svg>
    `;

    host.readoutRoot.innerHTML = `
      <div class="viz-readout-row">
        <span><strong>${labels.aof}</strong> = ${baselineAOF.toFixed(2)} kg/s</span>
        <span class="dot">·</span>
        <span><strong>P_rg</strong> = ${params.P_rg.toFixed(1)}</span>
        <span class="dot">·</span>
        <span><strong>C_WB</strong> = ${params.C_WB.toFixed(2)}</span>
        <span class="dot">·</span>
        <span><strong>PI</strong> = ${params.PI.toFixed(2)}</span>
        <span class="dot">·</span>
        <span><strong>S</strong> = ${params.skin.toFixed(1)}</span>
      </div>
    `;
  }

  // Bind controls
  const prgInput = host.controlsRoot.querySelector('#viz-acuna-prg');
  const cwbInput = host.controlsRoot.querySelector('#viz-acuna-cwb');
  const piInput = host.controlsRoot.querySelector('#viz-acuna-pi');
  const skinInput = host.controlsRoot.querySelector('#viz-acuna-skin');
  const diagInput = host.controlsRoot.querySelector('#viz-acuna-diag');

  prgInput.addEventListener('input', () => {
    params.P_rg = parseFloat(prgInput.value);
    host.controlsRoot.querySelector('[data-viz-show="prg"]').textContent = `${params.P_rg.toFixed(1)} bara`;
    draw();
  });
  cwbInput.addEventListener('input', () => {
    params.C_WB = parseFloat(cwbInput.value);
    host.controlsRoot.querySelector('[data-viz-show="cwb"]').textContent = params.C_WB.toFixed(2);
    draw();
  });
  piInput.addEventListener('input', () => {
    params.PI = parseFloat(piInput.value);
    host.controlsRoot.querySelector('[data-viz-show="pi"]').textContent = params.PI.toFixed(2);
    draw();
  });
  skinInput.addEventListener('input', () => {
    params.skin = parseFloat(skinInput.value);
    host.controlsRoot.querySelector('[data-viz-show="skin"]').textContent = params.skin.toFixed(1);
    draw();
  });
  diagInput.addEventListener('change', () => {
    params.diagnosticMode = diagInput.checked;
    draw();
  });

  host.onReset(() => {
    prgInput.value = params.P_rg;
    cwbInput.value = params.C_WB;
    piInput.value = params.PI;
    skinInput.value = params.skin;
    diagInput.checked = params.diagnosticMode;
    host.controlsRoot.querySelector('[data-viz-show="prg"]').textContent = `${params.P_rg.toFixed(1)} bara`;
    host.controlsRoot.querySelector('[data-viz-show="cwb"]').textContent = params.C_WB.toFixed(2);
    host.controlsRoot.querySelector('[data-viz-show="pi"]').textContent = params.PI.toFixed(2);
    host.controlsRoot.querySelector('[data-viz-show="skin"]').textContent = params.skin.toFixed(1);
    draw();
  });

  draw();
});

// Export solver for testing / external use
export { solveAcunaW, simulateRoll };

// ─── Glosten-Milgrom 1985 Bayesian-update simulator ────────────────────
//
// Sequential trade arrival, competitive risk-neutral MM, two-state V.
// Each step: (1) compute quotes a_t, b_t from π_t; (2) draw a trader
// (informed with probability α); (3) trade direction is deterministic
// for informed (buy iff V = V_H), 50/50 for uninformed; (4) MM observes
// direction, updates posterior via Bayes.
//
// Bayesian update under buy:  π' = π(1+α) / [π(1+α) + (1-π)(1-α)]
// Bayesian update under sell: π' = π(1-α) / [π(1-α) + (1-π)(1+α)]
//
// Quote formulas:
//   P(V_H | buy)  = π(1+α) / [π(1+α) + (1-π)(1-α)]
//   P(V_H | sell) = π(1-α) / [π(1-α) + (1-π)(1+α)]
//   ask  = P(V_H | buy)  · V_H + (1 - P(V_H | buy))  · V_L
//   bid  = P(V_H | sell) · V_H + (1 - P(V_H | sell)) · V_L

function gmPosteriorOnBuy(pi, alpha) {
  const num = pi * (1 + alpha);
  const den = pi * (1 + alpha) + (1 - pi) * (1 - alpha);
  return den > 0 ? num / den : pi;
}
function gmPosteriorOnSell(pi, alpha) {
  const num = pi * (1 - alpha);
  const den = pi * (1 - alpha) + (1 - pi) * (1 + alpha);
  return den > 0 ? num / den : pi;
}
function gmAsk(pi, alpha, V_H, V_L) {
  const p = gmPosteriorOnBuy(pi, alpha);
  return p * V_H + (1 - p) * V_L;
}
function gmBid(pi, alpha, V_H, V_L) {
  const p = gmPosteriorOnSell(pi, alpha);
  return p * V_H + (1 - p) * V_L;
}

// Simulate a sequence of N trades given true state and α, returning arrays of
// (pi_t, ask_t, bid_t, mid_t, trade_t) of length N+1 (initial state then N trades).
function simulateGM({ alpha, V_H, V_L, pi0, trueState, nTrades, seed }) {
  const rng = makeRng(seed);
  const pi = [pi0];
  const ask = [gmAsk(pi0, alpha, V_H, V_L)];
  const bid = [gmBid(pi0, alpha, V_H, V_L)];
  const mid = [(ask[0] + bid[0]) / 2];
  const trades = [null]; // first slot has no trade

  for (let i = 0; i < nTrades; i++) {
    const piCur = pi[pi.length - 1];
    const informed = rng() < alpha;
    let direction;
    if (informed) {
      direction = trueState === 'H' ? 'buy' : 'sell';
    } else {
      direction = rng() < 0.5 ? 'buy' : 'sell';
    }
    const piNext = direction === 'buy' ? gmPosteriorOnBuy(piCur, alpha) : gmPosteriorOnSell(piCur, alpha);
    pi.push(piNext);
    ask.push(gmAsk(piNext, alpha, V_H, V_L));
    bid.push(gmBid(piNext, alpha, V_H, V_L));
    mid.push((ask[ask.length - 1] + bid[bid.length - 1]) / 2);
    trades.push(direction);
  }
  return { pi, ask, bid, mid, trades };
}

registerComponent('GlostenMilgromBayesianSim', function GlostenMilgromBayesianSim(host, params, lang) {
  const W = 680;
  const H = 460;
  const M = { top: 28, right: 110, bottom: 36, left: 56 };

  const labels = lang === 'id' ? {
    alpha:     'Informed fraction $\\alpha$',
    V_H:       '$V_H$ (high value)',
    V_L:       '$V_L$ (low value)',
    pi0:       'Prior $\\pi_0 = P(V = V_H)$',
    trueState: 'True state',
    nTrades:   'Jumlah trade',
    regenerate: 'Regenerate',
    truthH:    'V = V_H',
    truthL:    'V = V_L',
    posterior: 'Posterior $\\pi_t$',
    quote:     'Quote (bid/mid/ask)',
    tradeIdx:  'Indeks trade',
    valueAxis: 'Nilai',
    openSpread: 'Spread awal',
    finalSpread: 'Spread akhir',
    finalPi:   '$\\pi$ akhir',
  } : {
    alpha:     'Informed fraction $\\alpha$',
    V_H:       '$V_H$ (high value)',
    V_L:       '$V_L$ (low value)',
    pi0:       'Prior $\\pi_0 = P(V = V_H)$',
    trueState: 'True state',
    nTrades:   'Number of trades',
    regenerate: 'Regenerate',
    truthH:    'V = V_H',
    truthL:    'V = V_L',
    posterior: 'Posterior $\\pi_t$',
    quote:     'Quote (bid/mid/ask)',
    tradeIdx:  'Trade index',
    valueAxis: 'Value',
    openSpread: 'Opening spread',
    finalSpread: 'Final spread',
    finalPi:   'Final $\\pi$',
  };

  host.controlsRoot.innerHTML = `
    <div class="viz-control-row">
      <label class="viz-control-label" for="viz-gm-alpha">${labels.alpha}</label>
      <input type="range" id="viz-gm-alpha" min="0.05" max="0.95" step="0.05" value="${params.alpha}" />
      <span class="viz-control-value" data-viz-show="alpha">${params.alpha.toFixed(2)}</span>
    </div>
    <div class="viz-control-row">
      <label class="viz-control-label" for="viz-gm-vh">${labels.V_H}</label>
      <input type="range" id="viz-gm-vh" min="100" max="150" step="1" value="${params.V_H}" />
      <span class="viz-control-value" data-viz-show="vh">${params.V_H.toFixed(0)}</span>
    </div>
    <div class="viz-control-row">
      <label class="viz-control-label" for="viz-gm-vl">${labels.V_L}</label>
      <input type="range" id="viz-gm-vl" min="50" max="100" step="1" value="${params.V_L}" />
      <span class="viz-control-value" data-viz-show="vl">${params.V_L.toFixed(0)}</span>
    </div>
    <div class="viz-control-row">
      <label class="viz-control-label" for="viz-gm-pi0">${labels.pi0}</label>
      <input type="range" id="viz-gm-pi0" min="0.05" max="0.95" step="0.05" value="${params.pi0}" />
      <span class="viz-control-value" data-viz-show="pi0">${params.pi0.toFixed(2)}</span>
    </div>
    <div class="viz-control-row">
      <label class="viz-control-label" for="viz-gm-truestate">${labels.trueState}</label>
      <select id="viz-gm-truestate">
        <option value="H" ${params.trueState === 'H' ? 'selected' : ''}>${labels.truthH}</option>
        <option value="L" ${params.trueState === 'L' ? 'selected' : ''}>${labels.truthL}</option>
      </select>
      <span class="viz-control-value"></span>
    </div>
    <div class="viz-control-row">
      <label class="viz-control-label" for="viz-gm-ntrades">${labels.nTrades}</label>
      <input type="range" id="viz-gm-ntrades" min="10" max="100" step="5" value="${params.nTrades}" />
      <span class="viz-control-value" data-viz-show="ntrades">${params.nTrades}</span>
    </div>
    <div class="viz-control-row">
      <label class="viz-control-label"></label>
      <button type="button" id="viz-gm-regen" class="viz-secondary-btn">${labels.regenerate}</button>
      <span class="viz-control-value" data-viz-show="seed">seed=${params.seed}</span>
    </div>
  `;

  function draw() {
    // Guard against V_L >= V_H (degenerate y-axis). Clamp AND sync the slider +
    // readout so the on-screen V_L can't disagree with the value used in the sim.
    if (params.V_L >= params.V_H) {
      params.V_L = params.V_H - 1;
      const vlIn = host.controlsRoot.querySelector('#viz-gm-vl');
      if (vlIn) vlIn.value = params.V_L;
      const vlShow = host.controlsRoot.querySelector('[data-viz-show="vl"]');
      if (vlShow) vlShow.textContent = params.V_L.toFixed(0);
    }
    const sim = simulateGM(params);
    const N = sim.pi.length;
    const plotW = W - M.left - M.right;
    const plotHTop = (H - M.top - M.bottom - 24) / 2;
    const plotHBot = plotHTop;
    const yOffsetBot = M.top + plotHTop + 24;

    // Top panel (π_t)
    const xTop = (i) => M.left + (i / Math.max(1, N - 1)) * plotW;
    const yTop = (p) => M.top + (1 - p) * plotHTop;

    // Bottom panel (quotes)
    const yMin = params.V_L - 2;
    const yMax = params.V_H + 2;
    const xBot = (i) => M.left + (i / Math.max(1, N - 1)) * plotW;
    const yBot = (v) => yOffsetBot + (1 - (v - yMin) / (yMax - yMin)) * plotHBot;

    const piPath = sim.pi.map((p, i) => `${i === 0 ? 'M' : 'L'} ${xTop(i).toFixed(1)} ${yTop(p).toFixed(1)}`).join(' ');
    const askPath = sim.ask.map((v, i) => `${i === 0 ? 'M' : 'L'} ${xBot(i).toFixed(1)} ${yBot(v).toFixed(1)}`).join(' ');
    const bidPath = sim.bid.map((v, i) => `${i === 0 ? 'M' : 'L'} ${xBot(i).toFixed(1)} ${yBot(v).toFixed(1)}`).join(' ');
    const midPath = sim.mid.map((v, i) => `${i === 0 ? 'M' : 'L'} ${xBot(i).toFixed(1)} ${yBot(v).toFixed(1)}`).join(' ');

    // Truth line in top panel
    const truthY = params.trueState === 'H' ? yTop(1) : yTop(0);

    // Trade markers (small triangles) along the bottom panel at the mid trace
    const tradeMarkers = sim.trades.map((t, i) => {
      if (!t) return '';
      const x = xBot(i).toFixed(1);
      const y = yBot(sim.mid[i]);
      if (t === 'buy') {
        return `<polygon points="${x},${(y - 4).toFixed(1)} ${(+x - 3).toFixed(1)},${(y + 2).toFixed(1)} ${(+x + 3).toFixed(1)},${(y + 2).toFixed(1)}" fill="#4a9eff" opacity="0.55" />`;
      } else {
        return `<polygon points="${x},${(y + 4).toFixed(1)} ${(+x - 3).toFixed(1)},${(y - 2).toFixed(1)} ${(+x + 3).toFixed(1)},${(y - 2).toFixed(1)}" fill="#a05050" opacity="0.55" />`;
      }
    }).join('');

    // Y-axis ticks
    const yTicksTop = [0, 0.25, 0.5, 0.75, 1.0];
    const yTicksBot = [];
    const range = yMax - yMin;
    const step = range > 30 ? 10 : range > 15 ? 5 : 2;
    for (let v = Math.ceil(yMin / step) * step; v <= yMax; v += step) yTicksBot.push(v);

    // X-axis ticks
    const xTickStep = Math.max(5, Math.ceil(params.nTrades / 10));
    const xTicks = [];
    for (let i = 0; i <= params.nTrades; i += xTickStep) xTicks.push(i);

    const openSpread = sim.ask[0] - sim.bid[0];
    const finalSpread = sim.ask[N - 1] - sim.bid[N - 1];
    const finalPi = sim.pi[N - 1];

    host.canvasRoot.innerHTML = `
      <svg viewBox="0 0 ${W} ${H}" width="100%" preserveAspectRatio="xMidYMid meet" class="viz-svg">
        <rect x="0" y="0" width="${W}" height="${H}" fill="var(--bg-elev-1)" />

        <!-- Top panel: π_t -->
        ${yTicksTop.map((v) => `<line x1="${M.left}" y1="${yTop(v).toFixed(1)}" x2="${(M.left + plotW).toFixed(1)}" y2="${yTop(v).toFixed(1)}" stroke="var(--line-soft)" stroke-dasharray="2 2" />`).join('')}
        <line x1="${M.left}" y1="${M.top}" x2="${M.left}" y2="${(M.top + plotHTop).toFixed(1)}" stroke="var(--line)" />
        <line x1="${M.left}" y1="${(M.top + plotHTop).toFixed(1)}" x2="${(M.left + plotW).toFixed(1)}" y2="${(M.top + plotHTop).toFixed(1)}" stroke="var(--line)" />
        ${yTicksTop.map((v) => `<text x="${M.left - 6}" y="${(yTop(v) + 3).toFixed(1)}" text-anchor="end" font-size="10" fill="var(--ink-mute)">${v.toFixed(2)}</text>`).join('')}
        <line x1="${M.left}" y1="${truthY.toFixed(1)}" x2="${(M.left + plotW).toFixed(1)}" y2="${truthY.toFixed(1)}" stroke="#8a8060" stroke-width="1" stroke-dasharray="6 3" opacity="0.7" />
        <text x="${(M.left + plotW + 4).toFixed(1)}" y="${(truthY + 3).toFixed(1)}" font-size="10" fill="#8a8060">truth=${params.trueState === 'H' ? '1' : '0'}</text>
        <path d="${piPath}" fill="none" stroke="var(--gold)" stroke-width="2" />
        <text x="${M.left + plotW / 2}" y="${M.top - 8}" text-anchor="middle" font-size="11" fill="var(--ink)">${labels.posterior}</text>

        <!-- Bottom panel: quotes -->
        ${yTicksBot.map((v) => `<line x1="${M.left}" y1="${yBot(v).toFixed(1)}" x2="${(M.left + plotW).toFixed(1)}" y2="${yBot(v).toFixed(1)}" stroke="var(--line-soft)" stroke-dasharray="2 2" />`).join('')}
        <line x1="${M.left}" y1="${yOffsetBot}" x2="${M.left}" y2="${(yOffsetBot + plotHBot).toFixed(1)}" stroke="var(--line)" />
        <line x1="${M.left}" y1="${(yOffsetBot + plotHBot).toFixed(1)}" x2="${(M.left + plotW).toFixed(1)}" y2="${(yOffsetBot + plotHBot).toFixed(1)}" stroke="var(--line)" />
        ${yTicksBot.map((v) => `<text x="${M.left - 6}" y="${(yBot(v) + 3).toFixed(1)}" text-anchor="end" font-size="10" fill="var(--ink-mute)">${v}</text>`).join('')}
        ${xTicks.map((v) => `<text x="${xBot(v).toFixed(1)}" y="${(yOffsetBot + plotHBot + 14).toFixed(1)}" text-anchor="middle" font-size="10" fill="var(--ink-mute)">${v}</text>`).join('')}
        <path d="${askPath}" fill="none" stroke="#4a9eff" stroke-width="1.4" />
        <path d="${bidPath}" fill="none" stroke="#a05050" stroke-width="1.4" />
        <path d="${midPath}" fill="none" stroke="var(--gold)" stroke-width="1.8" />
        ${tradeMarkers}
        <text x="${M.left + plotW / 2}" y="${(yOffsetBot - 8).toFixed(1)}" text-anchor="middle" font-size="11" fill="var(--ink)">${labels.quote}</text>
        <text x="${M.left + plotW / 2}" y="${(yOffsetBot + plotHBot + 28).toFixed(1)}" text-anchor="middle" font-size="11" fill="var(--ink-mute)">${labels.tradeIdx}</text>

        <!-- Legend -->
        <g transform="translate(${(W - M.right + 10).toFixed(1)}, ${(yOffsetBot + 4).toFixed(1)})">
          <rect x="0" y="0" width="${(W - (W - M.right + 10) - 8).toFixed(1)}" height="64" fill="var(--bg-elev-2)" stroke="var(--line-soft)" rx="4" />
          <line x1="6" y1="14" x2="22" y2="14" stroke="#4a9eff" stroke-width="1.4"/>
          <text x="26" y="17" font-size="10" fill="var(--ink)">ask</text>
          <line x1="6" y1="30" x2="22" y2="30" stroke="var(--gold)" stroke-width="1.8"/>
          <text x="26" y="33" font-size="10" fill="var(--ink)">mid</text>
          <line x1="6" y1="46" x2="22" y2="46" stroke="#a05050" stroke-width="1.4"/>
          <text x="26" y="49" font-size="10" fill="var(--ink)">bid</text>
        </g>
      </svg>
    `;

    host.readoutRoot.innerHTML = `
      <div class="viz-readout-row">
        <span><strong>${labels.openSpread}</strong> = ${openSpread.toFixed(2)}</span>
        <span class="dot">·</span>
        <span><strong>${labels.finalSpread}</strong> = ${finalSpread.toFixed(2)}</span>
        <span class="dot">·</span>
        <span><strong>${labels.finalPi}</strong> = ${finalPi.toFixed(3)}</span>
        <span class="dot">·</span>
        <span><strong>truth</strong> = ${params.trueState}</span>
      </div>
    `;
  }

  const alphaIn = host.controlsRoot.querySelector('#viz-gm-alpha');
  const vhIn    = host.controlsRoot.querySelector('#viz-gm-vh');
  const vlIn    = host.controlsRoot.querySelector('#viz-gm-vl');
  const pi0In   = host.controlsRoot.querySelector('#viz-gm-pi0');
  const trueIn  = host.controlsRoot.querySelector('#viz-gm-truestate');
  const nIn     = host.controlsRoot.querySelector('#viz-gm-ntrades');
  const regenBtn = host.controlsRoot.querySelector('#viz-gm-regen');

  alphaIn.addEventListener('input', () => {
    params.alpha = parseFloat(alphaIn.value);
    host.controlsRoot.querySelector('[data-viz-show="alpha"]').textContent = params.alpha.toFixed(2);
    draw();
  });
  vhIn.addEventListener('input', () => {
    params.V_H = parseFloat(vhIn.value);
    host.controlsRoot.querySelector('[data-viz-show="vh"]').textContent = params.V_H.toFixed(0);
    draw();
  });
  vlIn.addEventListener('input', () => {
    params.V_L = parseFloat(vlIn.value);
    host.controlsRoot.querySelector('[data-viz-show="vl"]').textContent = params.V_L.toFixed(0);
    draw();
  });
  pi0In.addEventListener('input', () => {
    params.pi0 = parseFloat(pi0In.value);
    host.controlsRoot.querySelector('[data-viz-show="pi0"]').textContent = params.pi0.toFixed(2);
    draw();
  });
  trueIn.addEventListener('change', () => {
    params.trueState = trueIn.value;
    draw();
  });
  nIn.addEventListener('input', () => {
    params.nTrades = parseInt(nIn.value, 10);
    host.controlsRoot.querySelector('[data-viz-show="ntrades"]').textContent = params.nTrades;
    draw();
  });
  regenBtn.addEventListener('click', () => {
    params.seed = (params.seed + 1) >>> 0;
    host.controlsRoot.querySelector('[data-viz-show="seed"]').textContent = `seed=${params.seed}`;
    draw();
  });

  host.onReset(() => {
    alphaIn.value = params.alpha;
    vhIn.value = params.V_H;
    vlIn.value = params.V_L;
    pi0In.value = params.pi0;
    trueIn.value = params.trueState;
    nIn.value = params.nTrades;
    host.controlsRoot.querySelector('[data-viz-show="alpha"]').textContent = params.alpha.toFixed(2);
    host.controlsRoot.querySelector('[data-viz-show="vh"]').textContent = params.V_H.toFixed(0);
    host.controlsRoot.querySelector('[data-viz-show="vl"]').textContent = params.V_L.toFixed(0);
    host.controlsRoot.querySelector('[data-viz-show="pi0"]').textContent = params.pi0.toFixed(2);
    host.controlsRoot.querySelector('[data-viz-show="ntrades"]').textContent = params.nTrades;
    host.controlsRoot.querySelector('[data-viz-show="seed"]').textContent = `seed=${params.seed}`;
    draw();
  });

  draw();
});

// Export GM helpers for testing / external use
export { gmPosteriorOnBuy, gmPosteriorOnSell, gmAsk, gmBid, simulateGM };

// ─── Kyle's lambda price-impact simulator ──────────────────────────────
//
// Kyle (1985) single-auction linear equilibrium. The insider observes
// v ~ N(p0, Σ0); noise traders submit u ~ N(0, σ_u²); the MM sees only the
// total flow y = x + u and prices linearly p = p0 + λy. Equilibrium:
//
//   λ = √Σ0 / (2 σ_u)      price impact per unit of order flow (the line's slope)
//   β = σ_u / √Σ0 = 1/(2λ) insider trading intensity, x = β(v − p0)
//   depth D = 1/λ          order flow needed to move price one unit
//   Var(p)/Σ0 = 1/2        exactly half the private information is revealed
//
// σ0 below is the prior STANDARD deviation √Σ0 (the intuitive knob).
// Extracted as pure functions so the equilibrium + Monte-Carlo are testable
// in isolation (matches the Acuña / GM / Roll pattern).

function kyleEquilibrium({ sigma0, sigmaU }) {
  const lambda = sigma0 / (2 * sigmaU);
  const beta = sigmaU / sigma0;             // = 1/(2λ)
  const depth = 1 / lambda;
  const Sigma0 = sigma0 * sigma0;
  const Sigma1 = Sigma0 / 2;                // posterior variance after the auction
  return { lambda, beta, depth, Sigma0, Sigma1, revealFrac: 0.5 };
}

function simulateKyle({ sigma0, sigmaU, p0 = 100, nSamples = 240, seed = 12345 }) {
  const { lambda, beta } = kyleEquilibrium({ sigma0, sigmaU });
  const rng = makeRng(seed);
  const gauss = makeGaussian(rng);
  const v = new Float64Array(nSamples);
  const y = new Float64Array(nSamples);
  const p = new Float64Array(nSamples);
  for (let i = 0; i < nSamples; i++) {
    const vi = p0 + sigma0 * gauss();
    const ui = sigmaU * gauss();
    const xi = beta * (vi - p0);
    const yi = xi + ui;
    v[i] = vi; y[i] = yi; p[i] = p0 + lambda * yi;
  }
  const mean = (a) => { let s = 0; for (let i = 0; i < a.length; i++) s += a[i]; return s / a.length; };
  const slope = (xa, ya) => {
    const mx = mean(xa), my = mean(ya);
    let sxy = 0, sxx = 0;
    for (let i = 0; i < xa.length; i++) { const dx = xa[i] - mx; sxy += dx * (ya[i] - my); sxx += dx * dx; }
    return sxy / sxx;
  };
  const slopePonY = slope(y, p);            // = λ exactly (p is affine in y)
  const slopePonV = slope(v, p);            // ≈ 1/2 (price reveals half the info)
  const mp = mean(p);
  let varP = 0; for (let i = 0; i < p.length; i++) { const d = p[i] - mp; varP += d * d; }
  varP /= p.length;
  const revealRealized = varP / (sigma0 * sigma0);
  return { v, y, p, lambda, beta, slopePonY, slopePonV, revealRealized };
}

registerComponent('KyleLambdaSim', function KyleLambdaSim(host, params, lang) {
  const W = 640;
  const H = 360;
  const M = { top: 28, right: 152, bottom: 40, left: 60 };

  const labels = lang === 'id' ? {
    sigma0: 'Ketidakpastian nilai $\\sigma_0=\\sqrt{\\Sigma_0}$',
    sigmaU: 'Volume noise-trader $\\sigma_u$',
    regenerate: 'Regenerate (seed baru)',
    flow: 'Order flow  y = x + u',
    price: 'Harga  p',
    lambdaLbl: 'price impact λ',
    depthLbl: 'depth = 1/λ',
    betaLbl: 'intensitas β',
    revealLbl: 'Var(p)/Σ₀',
    band: '±1σ aliran order',
  } : {
    sigma0: 'Value uncertainty $\\sigma_0=\\sqrt{\\Sigma_0}$',
    sigmaU: 'Noise-trader volume $\\sigma_u$',
    regenerate: 'Regenerate (new seed)',
    flow: 'Order flow  y = x + u',
    price: 'Price  p',
    lambdaLbl: 'price impact λ',
    depthLbl: 'depth = 1/λ',
    betaLbl: 'insider intensity β',
    revealLbl: 'Var(p)/Σ₀',
    band: '±1σ order flow',
  };

  host.controlsRoot.innerHTML = `
    <div class="viz-control-row">
      <label class="viz-control-label" for="viz-kyle-s0">${labels.sigma0}</label>
      <input type="range" id="viz-kyle-s0" min="1" max="15" step="0.5" value="${params.sigma0}" />
      <span class="viz-control-value" data-viz-show="s0">${params.sigma0.toFixed(1)}</span>
    </div>
    <div class="viz-control-row">
      <label class="viz-control-label" for="viz-kyle-su">${labels.sigmaU}</label>
      <input type="range" id="viz-kyle-su" min="2" max="25" step="0.5" value="${params.sigmaU}" />
      <span class="viz-control-value" data-viz-show="su">${params.sigmaU.toFixed(1)}</span>
    </div>
    <div class="viz-control-row">
      <button type="button" class="viz-regen-btn">${labels.regenerate}</button>
    </div>
  `;

  let seed = params.seed || 12345;

  function draw() {
    const sigma0 = params.sigma0;
    const sigmaU = params.sigmaU;
    const p0 = params.p0 || 100;
    const { lambda, beta, depth } = kyleEquilibrium({ sigma0, sigmaU });
    const sim = simulateKyle({ sigma0, sigmaU, p0, nSamples: 240, seed });

    const sigmaY = Math.SQRT2 * sigmaU;       // std of equilibrium order flow y
    const yMax = 3.2 * sigmaY;
    const plotW = W - M.left - M.right;
    const plotH = H - M.top - M.bottom;
    const xS = (yv) => M.left + ((yv + yMax) / (2 * yMax)) * plotW;
    const pMin = p0 - lambda * yMax;
    const pMax = p0 + lambda * yMax;
    const yS = (pv) => M.top + (1 - (pv - pMin) / (pMax - pMin)) * plotH;

    const x0 = xS(0), yMid = yS(p0);
    const bandX1 = xS(-sigmaY), bandX2 = xS(sigmaY);

    const dots = [];
    for (let i = 0; i < sim.y.length; i += 3) {
      const yy = sim.y[i];
      if (yy < -yMax || yy > yMax) continue;
      dots.push(`<circle cx="${xS(yy).toFixed(1)}" cy="${yS(sim.p[i]).toFixed(1)}" r="2.1" fill="var(--azul)" opacity="0.4" />`);
    }

    // Legend column (right margin)
    const lx = W - M.right + 12;
    let ly = M.top + 10;
    const row = (lbl, val, color) => {
      const out = `<text x="${lx}" y="${ly}" font-size="10" fill="var(--ink-mute)">${lbl}</text>` +
                  `<text x="${lx}" y="${ly + 14}" font-size="13" fill="${color}" font-weight="600">${val}</text>`;
      ly += 40;
      return out;
    };

    host.canvasRoot.innerHTML = `
      <svg viewBox="0 0 ${W} ${H}" width="100%" preserveAspectRatio="xMidYMid meet" class="viz-svg">
        <rect x="0" y="0" width="${W}" height="${H}" fill="var(--bg-elev-1)" />

        <!-- order-flow ±1σ band -->
        <rect x="${bandX1.toFixed(1)}" y="${M.top}" width="${(bandX2 - bandX1).toFixed(1)}" height="${plotH}" fill="var(--gold)" opacity="0.10" />

        <!-- axes -->
        <line x1="${M.left}" y1="${M.top}" x2="${M.left}" y2="${M.top + plotH}" stroke="var(--line)" />
        <line x1="${M.left}" y1="${yMid.toFixed(1)}" x2="${M.left + plotW}" y2="${yMid.toFixed(1)}" stroke="var(--line-soft)" stroke-dasharray="2 2" />
        <line x1="${x0.toFixed(1)}" y1="${M.top}" x2="${x0.toFixed(1)}" y2="${M.top + plotH}" stroke="var(--line-soft)" stroke-dasharray="2 2" />

        <!-- axis labels -->
        <text x="${M.left - 8}" y="${yS(pMax) + 4}" text-anchor="end" font-size="10" fill="var(--ink-mute)">${pMax.toFixed(1)}</text>
        <text x="${M.left - 8}" y="${yMid + 4}" text-anchor="end" font-size="10" fill="var(--ink-mute)">${p0.toFixed(0)}</text>
        <text x="${M.left - 8}" y="${yS(pMin) - 1}" text-anchor="end" font-size="10" fill="var(--ink-mute)">${pMin.toFixed(1)}</text>
        <text x="${(M.left + plotW / 2).toFixed(1)}" y="${M.top + plotH + 26}" text-anchor="middle" font-size="11" fill="var(--ink-mute)">${labels.flow}</text>
        <text x="${x0.toFixed(1)}" y="${M.top + plotH + 14}" text-anchor="middle" font-size="9" fill="var(--ink-mute)">0</text>
        <text x="${M.left - 44}" y="${(M.top + plotH / 2).toFixed(1)}" text-anchor="middle" font-size="11" fill="var(--ink-mute)" transform="rotate(-90 ${M.left - 44} ${(M.top + plotH / 2).toFixed(1)})">${labels.price}</text>
        <text x="${(bandX2 + 4).toFixed(1)}" y="${M.top + 12}" font-size="9" fill="var(--ink-mute)">${labels.band}</text>

        <!-- realized flow on the line -->
        ${dots.join('')}

        <!-- price-impact line p = p0 + λy -->
        <line x1="${xS(-yMax).toFixed(1)}" y1="${yS(pMin).toFixed(1)}" x2="${xS(yMax).toFixed(1)}" y2="${yS(pMax).toFixed(1)}" stroke="var(--gold)" stroke-width="2.4" />
        <text x="${xS(0.55 * yMax).toFixed(1)}" y="${(yS(p0 + lambda * 0.55 * yMax) - 8).toFixed(1)}" font-size="11" fill="var(--gold)" font-weight="600">slope = λ</text>

        <!-- legend -->
        ${row(labels.lambdaLbl, lambda.toFixed(4), 'var(--gold)')}
        ${row(labels.depthLbl, depth.toFixed(3), 'var(--azul)')}
        ${row(labels.betaLbl, beta.toFixed(3), 'var(--ink)')}
        ${row(labels.revealLbl, sim.revealRealized.toFixed(3), 'var(--ink)')}
      </svg>
    `;

    host.readoutRoot.innerHTML = `
      <div class="viz-readout-row">
        <span><strong>λ</strong> = √Σ₀/(2σ_u) = ${lambda.toFixed(4)}</span>
        <span class="dot">·</span>
        <span><strong>β</strong> = σ_u/√Σ₀ = ${beta.toFixed(3)}</span>
        <span class="dot">·</span>
        <span><strong>depth</strong> = ${depth.toFixed(3)}</span>
        <span class="dot">·</span>
        <span><strong>Var(p)/Σ₀</strong> ≈ ${sim.revealRealized.toFixed(3)} (theory ½)</span>
      </div>
    `;
  }

  const s0Input = host.controlsRoot.querySelector('#viz-kyle-s0');
  const suInput = host.controlsRoot.querySelector('#viz-kyle-su');
  const regenBtn = host.controlsRoot.querySelector('.viz-regen-btn');
  const s0Show = host.controlsRoot.querySelector('[data-viz-show="s0"]');
  const suShow = host.controlsRoot.querySelector('[data-viz-show="su"]');

  s0Input.addEventListener('input', () => {
    params.sigma0 = parseFloat(s0Input.value);
    s0Show.textContent = params.sigma0.toFixed(1);
    draw();
  });
  suInput.addEventListener('input', () => {
    params.sigmaU = parseFloat(suInput.value);
    suShow.textContent = params.sigmaU.toFixed(1);
    draw();
  });
  regenBtn.addEventListener('click', () => {
    seed = (seed * 1664525 + 1013904223) >>> 0;
    draw();
  });

  host.onReset(() => {
    s0Input.value = params.sigma0;
    suInput.value = params.sigmaU;
    s0Show.textContent = params.sigma0.toFixed(1);
    suShow.textContent = params.sigmaU.toFixed(1);
    seed = params.seed || 12345;
    draw();
  });

  draw();
});

// Export Kyle helpers for testing / external use
export { kyleEquilibrium, simulateKyle };

// ─── Almgren-Chriss efficient-frontier simulator ───────────────────────
//
// Almgren & Chriss (2000) optimal liquidation of X units over horizon T in
// N intervals of τ = T/N. Holdings trajectory x_0=X … x_N=0; trade n_k =
// x_{k-1} − x_k. With linear permanent (γ) + temporary (ε,η) impact and
// volatility σ:
//
//   E[cost] = ½γX² + ε Σ|n_k| + (η/τ) Σ n_k²      Var[cost] = σ² τ Σ x_k²
//
// Minimizing E + λ·Var gives the urgency κ = √(λσ²/η) and the closed-form
//   x(t) = X · sinh(κ(T−t)) / sinh(κT)            (→ linear X(1−t/T) as κ→0)
//
// Sweeping κ traces the convex efficient frontier in (Var, E) space. Pure
// functions extracted for testability (Acuña/GM/Roll/Kyle pattern).

function almgrenKappa({ lambda, sigma, eta }) {
  return Math.sqrt((lambda * sigma * sigma) / eta);
}

function almgrenTrajectory({ X, T, N, kappa }) {
  const tau = T / N;
  const x = new Float64Array(N + 1);
  const sinhKT = Math.sinh(kappa * T);
  for (let k = 0; k <= N; k++) {
    const t = k * tau;
    x[k] = kappa < 1e-9
      ? X * (1 - t / T)                              // κ→0 limit: straight-line TWAP
      : X * Math.sinh(kappa * (T - t)) / sinhKT;
  }
  x[N] = 0;
  const n = new Float64Array(N);
  for (let k = 1; k <= N; k++) n[k - 1] = x[k - 1] - x[k];
  return { x, n, tau };
}

function almgrenCost({ X, T, N, kappa, sigma, eta, gamma = 0, epsilon = 0 }) {
  const { x, n, tau } = almgrenTrajectory({ X, T, N, kappa });
  let sumN2 = 0, sumAbsN = 0;
  for (let i = 0; i < n.length; i++) { sumN2 += n[i] * n[i]; sumAbsN += Math.abs(n[i]); }
  let sumX2 = 0;
  for (let k = 1; k <= N; k++) sumX2 += x[k] * x[k];   // Σ_{k=1}^N x_k² (x_N=0)
  const E = 0.5 * gamma * X * X + epsilon * sumAbsN + (eta / tau) * sumN2;
  const V = sigma * sigma * tau * sumX2;
  return { E, V, x, n };
}

function almgrenFrontier({ X, T, N, sigma, eta, gamma = 0, epsilon = 0, kappaMax = 1.5, steps = 60 }) {
  const pts = [];
  for (let i = 0; i <= steps; i++) {
    const kappa = (i / steps) * kappaMax;
    const { E, V } = almgrenCost({ X, T, N, kappa, sigma, eta, gamma, epsilon });
    pts.push({ kappa, E, V });
  }
  return pts;
}

registerComponent('AlmgrenFrontierSim', function AlmgrenFrontierSim(host, params, lang) {
  const W = 640;
  const H = 420;
  const M = { top: 22, right: 18, bottom: 34, left: 64 };

  const labels = lang === 'id' ? {
    kappa: 'Urgency $\\kappa$ (risk aversion / vol)',
    sigma: 'Volatility $\\sigma$',
    frontierTitle: 'Efficient frontier',
    trajTitle: 'Holdings trajectory',
    varX: 'Variance  V = σ²τ Σ xₖ²',
    costY: 'E[cost]',
    timeX: 'waktu t',
    holdY: 'holdings x',
    twap: 'TWAP (κ=0)',
  } : {
    kappa: 'Urgency $\\kappa$ (risk aversion / vol)',
    sigma: 'Volatility $\\sigma$',
    frontierTitle: 'Efficient frontier',
    trajTitle: 'Holdings trajectory',
    varX: 'Variance  V = σ²τ Σ xₖ²',
    costY: 'E[cost]',
    timeX: 'time t',
    holdY: 'holdings x',
    twap: 'TWAP (κ=0)',
  };

  host.controlsRoot.innerHTML = `
    <div class="viz-control-row">
      <label class="viz-control-label" for="viz-ac-k">${labels.kappa}</label>
      <input type="range" id="viz-ac-k" min="0" max="1.2" step="0.05" value="${params.kappa}" />
      <span class="viz-control-value" data-viz-show="k">${params.kappa.toFixed(2)}</span>
    </div>
    <div class="viz-control-row">
      <label class="viz-control-label" for="viz-ac-sg">${labels.sigma}</label>
      <input type="range" id="viz-ac-sg" min="0.10" max="0.60" step="0.02" value="${params.sigma}" />
      <span class="viz-control-value" data-viz-show="sg">${params.sigma.toFixed(2)}</span>
    </div>
  `;

  function draw() {
    const X = params.X || 100000;
    const T = params.T || 5;
    const N = params.N || 20;
    const eta = params.eta || 1e-6;
    const kappa = params.kappa;
    const sigma = params.sigma;

    const frontier = almgrenFrontier({ X, T, N, sigma, eta, kappaMax: 1.5, steps: 60 });
    const cur = almgrenCost({ X, T, N, kappa, sigma, eta });
    const lambdaImplied = (kappa * kappa * eta) / (sigma * sigma);

    const plotW = W - M.left - M.right;
    const gap = 34;
    const panelH = (H - M.top - M.bottom - gap) / 2;
    const topY = M.top;
    const botY = M.top + panelH + gap;

    // ── top panel: efficient frontier (E vs V) ──
    const Vmax = Math.max(...frontier.map(p => p.V)) * 1.05 || 1;
    const Emax = Math.max(...frontier.map(p => p.E)) * 1.05 || 1;
    const fx = (v) => M.left + (v / Vmax) * plotW;
    const fy = (e) => topY + (1 - e / Emax) * panelH;
    const frontierPath = frontier.map((p, i) => `${i === 0 ? 'M' : 'L'} ${fx(p.V).toFixed(1)} ${fy(p.E).toFixed(1)}`).join(' ');
    const curFx = fx(cur.V), curFy = fy(cur.E);

    // ── bottom panel: holdings trajectory ──
    const tx = (t) => M.left + (t / T) * plotW;
    const hy = (xv) => botY + (1 - xv / X) * panelH;
    const trajPath = Array.from(cur.x).map((xv, k) => `${k === 0 ? 'M' : 'L'} ${tx(k * (T / N)).toFixed(1)} ${hy(xv).toFixed(1)}`).join(' ');
    const linRef = `M ${tx(0).toFixed(1)} ${hy(X).toFixed(1)} L ${tx(T).toFixed(1)} ${hy(0).toFixed(1)}`;
    const trajDots = Array.from(cur.x).filter((_, k) => k % 2 === 0)
      .map((xv, j) => { const k = j * 2; return `<circle cx="${tx(k * (T / N)).toFixed(1)}" cy="${hy(xv).toFixed(1)}" r="2.1" fill="var(--gold)" />`; }).join('');

    host.canvasRoot.innerHTML = `
      <svg viewBox="0 0 ${W} ${H}" width="100%" preserveAspectRatio="xMidYMid meet" class="viz-svg">
        <rect x="0" y="0" width="${W}" height="${H}" fill="var(--bg-elev-1)" />

        <!-- top: frontier -->
        <text x="${M.left}" y="${topY - 6}" font-size="11" fill="var(--ink-mute)">${labels.frontierTitle}</text>
        <line x1="${M.left}" y1="${topY}" x2="${M.left}" y2="${topY + panelH}" stroke="var(--line)" />
        <line x1="${M.left}" y1="${topY + panelH}" x2="${M.left + plotW}" y2="${topY + panelH}" stroke="var(--line)" />
        <path d="${frontierPath}" fill="none" stroke="var(--azul)" stroke-width="2" />
        <line x1="${M.left}" y1="${curFy.toFixed(1)}" x2="${curFx.toFixed(1)}" y2="${curFy.toFixed(1)}" stroke="var(--line-soft)" stroke-dasharray="2 2" />
        <line x1="${curFx.toFixed(1)}" y1="${curFy.toFixed(1)}" x2="${curFx.toFixed(1)}" y2="${topY + panelH}" stroke="var(--line-soft)" stroke-dasharray="2 2" />
        <circle cx="${curFx.toFixed(1)}" cy="${curFy.toFixed(1)}" r="4.5" fill="var(--gold)" stroke="var(--bg-elev-1)" stroke-width="1" />
        <text x="${(M.left + plotW / 2).toFixed(1)}" y="${topY + panelH + 24}" text-anchor="middle" font-size="10" fill="var(--ink-mute)">${labels.varX}</text>
        <text x="${M.left - 6}" y="${topY + 8}" text-anchor="end" font-size="9" fill="var(--ink-mute)">${labels.costY}</text>
        <text x="${(curFx + 8).toFixed(1)}" y="${(curFy - 6).toFixed(1)}" font-size="10" fill="var(--gold)" font-weight="600">κ=${kappa.toFixed(2)}</text>

        <!-- bottom: trajectory -->
        <text x="${M.left}" y="${botY - 6}" font-size="11" fill="var(--ink-mute)">${labels.trajTitle}</text>
        <line x1="${M.left}" y1="${botY}" x2="${M.left}" y2="${botY + panelH}" stroke="var(--line)" />
        <line x1="${M.left}" y1="${botY + panelH}" x2="${M.left + plotW}" y2="${botY + panelH}" stroke="var(--line)" />
        <path d="${linRef}" fill="none" stroke="var(--ink-mute)" stroke-width="1" stroke-dasharray="4 3" opacity="0.6" />
        <path d="${trajPath}" fill="none" stroke="var(--gold)" stroke-width="2" />
        ${trajDots}
        <text x="${M.left - 6}" y="${botY + 8}" text-anchor="end" font-size="9" fill="var(--ink-mute)">X</text>
        <text x="${M.left - 6}" y="${botY + panelH}" text-anchor="end" font-size="9" fill="var(--ink-mute)">0</text>
        <text x="${(M.left + plotW / 2).toFixed(1)}" y="${botY + panelH + 24}" text-anchor="middle" font-size="10" fill="var(--ink-mute)">${labels.timeX}</text>
        <text x="${(M.left + plotW - 4).toFixed(1)}" y="${(botY + 14).toFixed(1)}" text-anchor="end" font-size="9" fill="var(--ink-mute)">${labels.twap}</text>
      </svg>
    `;

    host.readoutRoot.innerHTML = `
      <div class="viz-readout-row">
        <span><strong>κ</strong> = ${kappa.toFixed(3)}</span>
        <span class="dot">·</span>
        <span><strong>implied λ</strong> = κ²η/σ² = ${lambdaImplied.toExponential(2)}</span>
        <span class="dot">·</span>
        <span><strong>E[cost]</strong> = ${cur.E.toExponential(3)}</span>
        <span class="dot">·</span>
        <span><strong>Var</strong> = ${cur.V.toExponential(3)}</span>
      </div>
    `;
  }

  const kIn = host.controlsRoot.querySelector('#viz-ac-k');
  const sgIn = host.controlsRoot.querySelector('#viz-ac-sg');
  const kShow = host.controlsRoot.querySelector('[data-viz-show="k"]');
  const sgShow = host.controlsRoot.querySelector('[data-viz-show="sg"]');

  kIn.addEventListener('input', () => {
    params.kappa = parseFloat(kIn.value);
    kShow.textContent = params.kappa.toFixed(2);
    draw();
  });
  sgIn.addEventListener('input', () => {
    params.sigma = parseFloat(sgIn.value);
    sgShow.textContent = params.sigma.toFixed(2);
    draw();
  });

  host.onReset(() => {
    kIn.value = params.kappa;
    sgIn.value = params.sigma;
    kShow.textContent = params.kappa.toFixed(2);
    sgShow.textContent = params.sigma.toFixed(2);
    draw();
  });

  draw();
});

// Export Almgren-Chriss helpers for testing / external use
export { almgrenKappa, almgrenTrajectory, almgrenCost, almgrenFrontier };

// ─── Avellaneda-Stoikov optimal market-making quotes ───────────────────
//
// Avellaneda & Stoikov (2008). A market maker quotes around an
// inventory-skewed reservation price; the optimal spread splits into an
// inventory-risk term and a microstructure term:
//
//   r(s,q,t)      = s − q γ σ² (T−t)                          (reservation)
//   δᵃ + δᵇ       = γ σ² (T−t) + (2/γ) ln(1 + γ/κ)            (total spread)
//   ask = r + spread/2,  bid = r − spread/2   (symmetric around r)
//
// As (T−t)→0 the inventory term vanishes and the spread collapses to the
// microstructure floor (2/γ)ln(1+γ/κ) with r→s (no skew). Pure function for
// testability (Acuña/GM/Roll/Kyle/Almgren pattern).

function asQuotes({ s, q, gamma, sigma, kappa, timeLeft }) {
  const invTerm = gamma * sigma * sigma * timeLeft;       // γσ²(T−t)
  const microTerm = (2 / gamma) * Math.log(1 + gamma / kappa);
  const spread = invTerm + microTerm;                     // δᵃ + δᵇ
  const r = s - q * invTerm;                              // reservation price
  const ask = r + spread / 2;
  const bid = r - spread / 2;
  return { r, ask, bid, spread, invTerm, microTerm, deltaA: ask - s, deltaB: s - bid };
}

registerComponent('AvellanedaStoikovSim', function AvellanedaStoikovSim(host, params, lang) {
  const W = 640;
  const H = 380;
  const M = { top: 24, right: 122, bottom: 38, left: 60 };

  const labels = lang === 'id' ? {
    q: 'Inventory $q$',
    gamma: 'Risk aversion $\\gamma$',
    timeLeft: 'Waktu tersisa $T-t$',
    invX: 'inventory q',
    priceY: 'harga',
    mid: 'mid s', res: 'reservation r(q)', ask: 'ask', bid: 'bid',
    spreadL: 'spread δᵃ+δᵇ', invL: 'inv-risk γσ²(T−t)', microL: 'microstructure', rL: 'r @ q',
  } : {
    q: 'Inventory $q$',
    gamma: 'Risk aversion $\\gamma$',
    timeLeft: 'Time-to-horizon $T-t$',
    invX: 'inventory q',
    priceY: 'price',
    mid: 'mid s', res: 'reservation r(q)', ask: 'ask', bid: 'bid',
    spreadL: 'spread δᵃ+δᵇ', invL: 'inv-risk γσ²(T−t)', microL: 'microstructure', rL: 'r @ q',
  };

  host.controlsRoot.innerHTML = `
    <div class="viz-control-row">
      <label class="viz-control-label" for="viz-as-q">${labels.q}</label>
      <input type="range" id="viz-as-q" min="-15" max="15" step="1" value="${params.q}" />
      <span class="viz-control-value" data-viz-show="q">${params.q}</span>
    </div>
    <div class="viz-control-row">
      <label class="viz-control-label" for="viz-as-g">${labels.gamma}</label>
      <input type="range" id="viz-as-g" min="0.02" max="0.40" step="0.02" value="${params.gamma}" />
      <span class="viz-control-value" data-viz-show="g">${params.gamma.toFixed(2)}</span>
    </div>
    <div class="viz-control-row">
      <label class="viz-control-label" for="viz-as-t">${labels.timeLeft}</label>
      <input type="range" id="viz-as-t" min="0" max="1" step="0.05" value="${params.timeLeft}" />
      <span class="viz-control-value" data-viz-show="t">${params.timeLeft.toFixed(2)}</span>
    </div>
  `;

  function draw() {
    const s = params.s || 100;
    const sigma = params.sigma || 2;
    const kappa = params.kappa || 1.5;
    const gamma = params.gamma;
    const timeLeft = params.timeLeft;
    const q = params.q;
    const Qmax = 15;

    const cur = asQuotes({ s, q, gamma, sigma, kappa, timeLeft });
    const ends = [-Qmax, Qmax].map(qq => asQuotes({ s, q: qq, gamma, sigma, kappa, timeLeft }));

    const plotW = W - M.left - M.right;
    const plotH = H - M.top - M.bottom;
    const yHi = Math.max(s, ends[0].ask, ends[1].ask) + 0.5;
    const yLo = Math.min(s, ends[0].bid, ends[1].bid) - 0.5;
    const xS = (qq) => M.left + ((qq + Qmax) / (2 * Qmax)) * plotW;
    const yS = (p) => M.top + (1 - (p - yLo) / (yHi - yLo)) * plotH;

    const lineAcross = (fn, color, width, dash = '') => {
      const a = asQuotes({ s, q: -Qmax, gamma, sigma, kappa, timeLeft });
      const b = asQuotes({ s, q: Qmax, gamma, sigma, kappa, timeLeft });
      return `<line x1="${xS(-Qmax).toFixed(1)}" y1="${yS(fn(a)).toFixed(1)}" x2="${xS(Qmax).toFixed(1)}" y2="${yS(fn(b)).toFixed(1)}" stroke="${color}" stroke-width="${width}" ${dash ? `stroke-dasharray="${dash}"` : ''} />`;
    };

    const cx = xS(q);
    host.canvasRoot.innerHTML = `
      <svg viewBox="0 0 ${W} ${H}" width="100%" preserveAspectRatio="xMidYMid meet" class="viz-svg">
        <rect x="0" y="0" width="${W}" height="${H}" fill="var(--bg-elev-1)" />

        <!-- axes -->
        <line x1="${M.left}" y1="${M.top}" x2="${M.left}" y2="${M.top + plotH}" stroke="var(--line)" />
        <line x1="${xS(0).toFixed(1)}" y1="${M.top}" x2="${xS(0).toFixed(1)}" y2="${M.top + plotH}" stroke="var(--line-soft)" stroke-dasharray="2 2" />
        <text x="${xS(0).toFixed(1)}" y="${M.top + plotH + 13}" text-anchor="middle" font-size="9" fill="var(--ink-mute)">0</text>
        <text x="${(M.left + plotW / 2).toFixed(1)}" y="${M.top + plotH + 26}" text-anchor="middle" font-size="11" fill="var(--ink-mute)">${labels.invX}</text>
        <text x="${M.left - 44}" y="${(M.top + plotH / 2).toFixed(1)}" text-anchor="middle" font-size="11" fill="var(--ink-mute)" transform="rotate(-90 ${M.left - 44} ${(M.top + plotH / 2).toFixed(1)})">${labels.priceY}</text>

        <!-- spread band between bid and ask across q -->
        <path d="M ${xS(-Qmax).toFixed(1)} ${yS(ends[0].ask).toFixed(1)} L ${xS(Qmax).toFixed(1)} ${yS(ends[1].ask).toFixed(1)} L ${xS(Qmax).toFixed(1)} ${yS(ends[1].bid).toFixed(1)} L ${xS(-Qmax).toFixed(1)} ${yS(ends[0].bid).toFixed(1)} Z" fill="var(--gold)" opacity="0.10" />

        <!-- mid (flat), reservation, ask, bid -->
        ${lineAcross(() => s, 'var(--ink-mute)', 1, '4 3')}
        ${lineAcross(a => a.ask, 'var(--azul)', 1.8)}
        ${lineAcross(a => a.bid, 'var(--azul)', 1.8)}
        ${lineAcross(a => a.r, 'var(--gold)', 2)}

        <!-- current-q marker -->
        <line x1="${cx.toFixed(1)}" y1="${M.top}" x2="${cx.toFixed(1)}" y2="${M.top + plotH}" stroke="var(--ink-mute)" stroke-width="1" opacity="0.5" />
        <circle cx="${cx.toFixed(1)}" cy="${yS(cur.ask).toFixed(1)}" r="3.2" fill="var(--azul)" />
        <circle cx="${cx.toFixed(1)}" cy="${yS(cur.bid).toFixed(1)}" r="3.2" fill="var(--azul)" />
        <circle cx="${cx.toFixed(1)}" cy="${yS(cur.r).toFixed(1)}" r="3.2" fill="var(--gold)" />

        <!-- right-margin labels -->
        <text x="${(M.left + plotW + 6)}" y="${yS(ends[1].ask).toFixed(1)}" font-size="10" fill="var(--azul)">${labels.ask}</text>
        <text x="${(M.left + plotW + 6)}" y="${yS(ends[1].r).toFixed(1)}" font-size="10" fill="var(--gold)">${labels.res}</text>
        <text x="${(M.left + plotW + 6)}" y="${yS(ends[1].bid).toFixed(1)}" font-size="10" fill="var(--azul)">${labels.bid}</text>
        <text x="${(M.left + plotW + 6)}" y="${yS(s).toFixed(1)}" font-size="10" fill="var(--ink-mute)">${labels.mid}</text>
      </svg>
    `;

    host.readoutRoot.innerHTML = `
      <div class="viz-readout-row">
        <span><strong>${labels.spreadL}</strong> = ${cur.spread.toFixed(3)}</span>
        <span class="dot">·</span>
        <span>${labels.invL} = ${cur.invTerm.toFixed(3)}</span>
        <span class="dot">·</span>
        <span>${labels.microL} = ${cur.microTerm.toFixed(3)}</span>
        <span class="dot">·</span>
        <span><strong>${labels.rL}=${q}</strong> = ${cur.r.toFixed(3)} (bid ${cur.bid.toFixed(2)} / ask ${cur.ask.toFixed(2)})</span>
      </div>
    `;
  }

  const qIn = host.controlsRoot.querySelector('#viz-as-q');
  const gIn = host.controlsRoot.querySelector('#viz-as-g');
  const tIn = host.controlsRoot.querySelector('#viz-as-t');
  const qShow = host.controlsRoot.querySelector('[data-viz-show="q"]');
  const gShow = host.controlsRoot.querySelector('[data-viz-show="g"]');
  const tShow = host.controlsRoot.querySelector('[data-viz-show="t"]');

  qIn.addEventListener('input', () => { params.q = parseInt(qIn.value, 10); qShow.textContent = params.q; draw(); });
  gIn.addEventListener('input', () => { params.gamma = parseFloat(gIn.value); gShow.textContent = params.gamma.toFixed(2); draw(); });
  tIn.addEventListener('input', () => { params.timeLeft = parseFloat(tIn.value); tShow.textContent = params.timeLeft.toFixed(2); draw(); });

  host.onReset(() => {
    qIn.value = params.q; gIn.value = params.gamma; tIn.value = params.timeLeft;
    qShow.textContent = params.q; gShow.textContent = params.gamma.toFixed(2); tShow.textContent = params.timeLeft.toFixed(2);
    draw();
  });

  draw();
});

// Export Avellaneda-Stoikov helper for testing / external use
export { asQuotes };

// ─── Bouchaud square-root law of market impact ─────────────────────────
//
// Bouchaud-Bonart-Donier-Gould (2018). The expected impact of a metaorder
// of total size Q is the concave square-root law
//
//   I(Q) = Y σ √(Q/V)
//
// with σ the daily volatility, V the average daily volume, Y ~ O(1)
// (empirically ≈ 0.5–1). Impact depends only on the participation ratio
// φ = Q/V (and σ), is concave (exponent ½), and overturns Kyle's linear
// impact. Doubling the order raises impact by √2 ≈ 1.41, not 2.

function sqrtImpact({ Y, sigma, phi }) {
  return Y * sigma * Math.sqrt(phi);                  // φ = Q/V participation ratio
}

registerComponent('SqrtImpactSim', function SqrtImpactSim(host, params, lang) {
  const W = 640;
  const H = 360;
  const M = { top: 24, right: 18, bottom: 40, left: 64 };

  const labels = lang === 'id' ? {
    phi: 'Participation $\\varphi = Q/V$',
    Y: 'Prefaktor $Y$',
    sigma: 'Volatility harian $\\sigma$',
    xlab: 'participation ratio  Q/V',
    ylab: 'impact I',
    sqrtL: '√-law  I = Yσ√(Q/V)',
    linL: 'linear (Kyle) ref',
  } : {
    phi: 'Participation $\\varphi = Q/V$',
    Y: 'Prefactor $Y$',
    sigma: 'Daily volatility $\\sigma$',
    xlab: 'participation ratio  Q/V',
    ylab: 'impact I',
    sqrtL: '√-law  I = Yσ√(Q/V)',
    linL: 'linear (Kyle) ref',
  };

  host.controlsRoot.innerHTML = `
    <div class="viz-control-row">
      <label class="viz-control-label" for="viz-sq-p">${labels.phi}</label>
      <input type="range" id="viz-sq-p" min="0.01" max="0.40" step="0.01" value="${params.phi}" />
      <span class="viz-control-value" data-viz-show="p">${params.phi.toFixed(2)}</span>
    </div>
    <div class="viz-control-row">
      <label class="viz-control-label" for="viz-sq-y">${labels.Y}</label>
      <input type="range" id="viz-sq-y" min="0.3" max="1.0" step="0.05" value="${params.Y}" />
      <span class="viz-control-value" data-viz-show="y">${params.Y.toFixed(2)}</span>
    </div>
    <div class="viz-control-row">
      <label class="viz-control-label" for="viz-sq-s">${labels.sigma}</label>
      <input type="range" id="viz-sq-s" min="0.005" max="0.050" step="0.005" value="${params.sigma}" />
      <span class="viz-control-value" data-viz-show="s">${(params.sigma * 100).toFixed(1)}%</span>
    </div>
  `;

  function draw() {
    const Y = params.Y;
    const sigma = params.sigma;
    const phi = params.phi;
    const phiMax = 0.45;

    const plotW = W - M.left - M.right;
    const plotH = H - M.top - M.bottom;
    const Imax = sqrtImpact({ Y, sigma, phi: phiMax }) * 1.05;
    const xS = (p) => M.left + (p / phiMax) * plotW;
    const yS = (v) => M.top + (1 - v / Imax) * plotH;

    // sqrt curve
    const STEPS = 80;
    let curve = '';
    for (let i = 0; i <= STEPS; i++) {
      const p = (i / STEPS) * phiMax;
      curve += `${i === 0 ? 'M' : 'L'} ${xS(p).toFixed(1)} ${yS(sqrtImpact({ Y, sigma, phi: p })).toFixed(1)} `;
    }
    // linear reference through origin, calibrated to the √-curve at the current φ
    const Icur = sqrtImpact({ Y, sigma, phi });
    const slope = Icur / phi;
    const linEnd = slope * phiMax;
    const phi2 = Math.min(2 * phi, phiMax);
    const I2 = sqrtImpact({ Y, sigma, phi: phi2 });
    const ratio = I2 / Icur;

    host.canvasRoot.innerHTML = `
      <svg viewBox="0 0 ${W} ${H}" width="100%" preserveAspectRatio="xMidYMid meet" class="viz-svg">
        <rect x="0" y="0" width="${W}" height="${H}" fill="var(--bg-elev-1)" />
        <line x1="${M.left}" y1="${M.top}" x2="${M.left}" y2="${M.top + plotH}" stroke="var(--line)" />
        <line x1="${M.left}" y1="${M.top + plotH}" x2="${M.left + plotW}" y2="${M.top + plotH}" stroke="var(--line)" />

        <!-- linear (Kyle) reference -->
        <line x1="${xS(0).toFixed(1)}" y1="${yS(0).toFixed(1)}" x2="${xS(phiMax).toFixed(1)}" y2="${yS(linEnd).toFixed(1)}" stroke="var(--ink-mute)" stroke-width="1.2" stroke-dasharray="4 3" opacity="0.7" />

        <!-- square-root law -->
        <path d="${curve}" fill="none" stroke="var(--azul)" stroke-width="2.2" />

        <!-- markers at φ and 2φ -->
        <line x1="${xS(phi).toFixed(1)}" y1="${yS(0).toFixed(1)}" x2="${xS(phi).toFixed(1)}" y2="${yS(Icur).toFixed(1)}" stroke="var(--line-soft)" stroke-dasharray="2 2" />
        <circle cx="${xS(phi).toFixed(1)}" cy="${yS(Icur).toFixed(1)}" r="4" fill="var(--gold)" />
        <circle cx="${xS(phi2).toFixed(1)}" cy="${yS(I2).toFixed(1)}" r="3.2" fill="var(--azul)" />
        <text x="${xS(phi).toFixed(1)}" y="${(yS(Icur) - 8).toFixed(1)}" text-anchor="middle" font-size="10" fill="var(--gold)" font-weight="600">φ</text>
        <text x="${xS(phi2).toFixed(1)}" y="${(yS(I2) - 8).toFixed(1)}" text-anchor="middle" font-size="10" fill="var(--azul)">2φ</text>

        <!-- labels -->
        <text x="${(M.left + plotW / 2).toFixed(1)}" y="${M.top + plotH + 28}" text-anchor="middle" font-size="11" fill="var(--ink-mute)">${labels.xlab}</text>
        <text x="${M.left - 46}" y="${(M.top + plotH / 2).toFixed(1)}" text-anchor="middle" font-size="11" fill="var(--ink-mute)" transform="rotate(-90 ${M.left - 46} ${(M.top + plotH / 2).toFixed(1)})">${labels.ylab}</text>
        <text x="${(M.left + plotW - 4).toFixed(1)}" y="${(M.top + 14).toFixed(1)}" text-anchor="end" font-size="10" fill="var(--azul)">${labels.sqrtL}</text>
        <text x="${(M.left + plotW - 4).toFixed(1)}" y="${(M.top + 28).toFixed(1)}" text-anchor="end" font-size="10" fill="var(--ink-mute)">${labels.linL}</text>
      </svg>
    `;

    host.readoutRoot.innerHTML = `
      <div class="viz-readout-row">
        <span><strong>I(φ=${phi.toFixed(2)})</strong> = ${(Icur * 100).toFixed(3)}% (${(Icur * 10000).toFixed(1)} bps)</span>
        <span class="dot">·</span>
        <span><strong>I(2φ)/I(φ)</strong> = ${ratio.toFixed(3)} ≈ √2</span>
        <span class="dot">·</span>
        <span>concave: doubling size raises impact by ~${((ratio - 1) * 100).toFixed(0)}%, not 100%</span>
      </div>
    `;
  }

  const pIn = host.controlsRoot.querySelector('#viz-sq-p');
  const yIn = host.controlsRoot.querySelector('#viz-sq-y');
  const sIn = host.controlsRoot.querySelector('#viz-sq-s');
  const pShow = host.controlsRoot.querySelector('[data-viz-show="p"]');
  const yShow = host.controlsRoot.querySelector('[data-viz-show="y"]');
  const sShow = host.controlsRoot.querySelector('[data-viz-show="s"]');

  pIn.addEventListener('input', () => { params.phi = parseFloat(pIn.value); pShow.textContent = params.phi.toFixed(2); draw(); });
  yIn.addEventListener('input', () => { params.Y = parseFloat(yIn.value); yShow.textContent = params.Y.toFixed(2); draw(); });
  sIn.addEventListener('input', () => { params.sigma = parseFloat(sIn.value); sShow.textContent = (params.sigma * 100).toFixed(1) + '%'; draw(); });

  host.onReset(() => {
    pIn.value = params.phi; yIn.value = params.Y; sIn.value = params.sigma;
    pShow.textContent = params.phi.toFixed(2); yShow.textContent = params.Y.toFixed(2); sShow.textContent = (params.sigma * 100).toFixed(1) + '%';
    draw();
  });

  draw();
});

// Export Bouchaud helper for testing / external use
export { sqrtImpact };

// ─── Cont-Kukanov-Stoikov order-flow-imbalance (OFI) regression ─────────
//
// Cont, Kukanov & Stoikov (2014). The mid-price change over an interval is a
// LINEAR function of order-flow imbalance: ΔP = β·OFI + ε, with the slope
// inversely proportional to depth (parameter-free stylized model: β = 1/(2D̄),
// so 1/β = 2D̄). The headline is the contrast with trade imbalance (TI): TI
// omits the limit-order/cancellation events that dominate at high frequency,
// so regressing ΔP on TI gives a far noisier, lower-R² fit. Pure functions
// for testability.

// Ordinary least squares: returns slope, intercept, and R².
export function olsFit(xs, ys) {
  const n = xs.length;
  if (n < 2) return { slope: 0, intercept: 0, r2: 0 };
  let mx = 0, my = 0;
  for (let i = 0; i < n; i++) { mx += xs[i]; my += ys[i]; }
  mx /= n; my /= n;
  let sxy = 0, sxx = 0, syy = 0;
  for (let i = 0; i < n; i++) {
    const dx = xs[i] - mx, dy = ys[i] - my;
    sxy += dx * dy; sxx += dx * dx; syy += dy * dy;
  }
  const slope = sxx === 0 ? 0 : sxy / sxx;
  const intercept = my - slope * mx;
  const r2 = (sxx === 0 || syy === 0) ? 0 : (sxy * sxy) / (sxx * syy);
  return { slope, intercept, r2 };
}

function simulateOFI({ depth, noise, n = 120, seed = 12345, sigmaOFI = 100 }) {
  const beta = 1 / (2 * depth);            // β = 1/(2D̄)
  const rng = makeRng(seed);
  const gauss = makeGaussian(rng);
  const ofi = new Float64Array(n);
  const dP = new Float64Array(n);
  const ti = new Float64Array(n);          // trade imbalance: noisy partial view of OFI
  for (let i = 0; i < n; i++) {
    const o = sigmaOFI * gauss();
    ofi[i] = o;
    dP[i] = beta * o + noise * gauss();
    ti[i] = 0.5 * o + sigmaOFI * gauss();   // trades are a fraction of all touch events + heavy noise
  }
  const fitOFI = olsFit(Array.from(ofi), Array.from(dP));
  const fitTI = olsFit(Array.from(ti), Array.from(dP));
  return { ofi, dP, ti, beta, fitOFI, fitTI, sigmaOFI };
}

registerComponent('CksOfiSim', function CksOfiSim(host, params, lang) {
  const W = 640, H = 360, M = { top: 22, bottom: 38, gap: 30 };

  const labels = lang === 'id' ? {
    depth: 'Depth di touch $\\bar{D}$',
    noise: 'Noise $\\sigma_\\epsilon$ (tick)',
    ofiTitle: 'OFI → ΔP (variabel yang bener)',
    tiTitle: 'Trade imbalance → ΔP',
    regen: 'Regenerate',
  } : {
    depth: 'Depth at touch $\\bar{D}$',
    noise: 'Noise $\\sigma_\\epsilon$ (ticks)',
    ofiTitle: 'OFI → ΔP (the right variable)',
    tiTitle: 'Trade imbalance → ΔP',
    regen: 'Regenerate',
  };

  host.controlsRoot.innerHTML = `
    <div class="viz-control-row">
      <label class="viz-control-label" for="viz-cks-d">${labels.depth}</label>
      <input type="range" id="viz-cks-d" min="30" max="200" step="5" value="${params.depth}" />
      <span class="viz-control-value" data-viz-show="d">${params.depth}</span>
    </div>
    <div class="viz-control-row">
      <label class="viz-control-label" for="viz-cks-n">${labels.noise}</label>
      <input type="range" id="viz-cks-n" min="0.02" max="0.60" step="0.02" value="${params.noise}" />
      <span class="viz-control-value" data-viz-show="n">${params.noise.toFixed(2)}</span>
    </div>
    <div class="viz-control-row"><button type="button" class="viz-regen-btn">${labels.regen}</button></div>
  `;

  let seed = params.seed || 12345;

  function panel(xs, ys, fit, x0, title) {
    const panelW = (W - 2 * M.gap) / 2;
    const plotH = H - M.top - M.bottom;
    let xMax = 1, yMax = 1;
    for (let i = 0; i < xs.length; i++) { xMax = Math.max(xMax, Math.abs(xs[i])); yMax = Math.max(yMax, Math.abs(ys[i])); }
    const sx = (x) => x0 + (x / xMax + 1) / 2 * panelW;
    const sy = (y) => M.top + (1 - (y / yMax + 1) / 2) * plotH;
    const dots = [];
    for (let i = 0; i < xs.length; i++) dots.push(`<circle cx="${sx(xs[i]).toFixed(1)}" cy="${sy(ys[i]).toFixed(1)}" r="1.8" fill="var(--azul)" opacity="0.5" />`);
    const lx1 = -xMax, lx2 = xMax;
    const line = `<line x1="${sx(lx1).toFixed(1)}" y1="${sy(fit.slope * lx1 + fit.intercept).toFixed(1)}" x2="${sx(lx2).toFixed(1)}" y2="${sy(fit.slope * lx2 + fit.intercept).toFixed(1)}" stroke="var(--gold)" stroke-width="2" />`;
    return `
      <text x="${(x0 + panelW / 2).toFixed(1)}" y="${M.top - 7}" text-anchor="middle" font-size="10.5" fill="var(--ink-mute)">${title}</text>
      <line x1="${x0}" y1="${sy(0).toFixed(1)}" x2="${(x0 + panelW).toFixed(1)}" y2="${sy(0).toFixed(1)}" stroke="var(--line-soft)" stroke-dasharray="2 2" />
      <line x1="${sx(0).toFixed(1)}" y1="${M.top}" x2="${sx(0).toFixed(1)}" y2="${M.top + plotH}" stroke="var(--line-soft)" stroke-dasharray="2 2" />
      ${dots.join('')}
      ${line}
      <text x="${(x0 + 6)}" y="${M.top + 14}" font-size="11" fill="var(--gold)" font-weight="600">R² = ${fit.r2.toFixed(2)}</text>`;
  }

  function draw() {
    const sim = simulateOFI({ depth: params.depth, noise: params.noise, n: 140, seed });
    const panelW = (W - 2 * M.gap) / 2;
    host.canvasRoot.innerHTML = `
      <svg viewBox="0 0 ${W} ${H}" width="100%" preserveAspectRatio="xMidYMid meet" class="viz-svg">
        <rect x="0" y="0" width="${W}" height="${H}" fill="var(--bg-elev-1)" />
        ${panel(Array.from(sim.ofi), Array.from(sim.dP), sim.fitOFI, M.gap / 2, labels.ofiTitle)}
        ${panel(Array.from(sim.ti), Array.from(sim.dP), sim.fitTI, M.gap / 2 + panelW + M.gap, labels.tiTitle)}
        <text x="${W / 2}" y="${H - 8}" text-anchor="middle" font-size="10" fill="var(--ink-mute)">x-axis: imbalance · y-axis: ΔP (ticks)</text>
      </svg>`;
    host.readoutRoot.innerHTML = `
      <div class="viz-readout-row">
        <span><strong>β = 1/(2D̄)</strong> = ${sim.beta.toFixed(4)}</span>
        <span class="dot">·</span>
        <span><strong>1/β</strong> ≈ ${Math.round(1 / sim.beta)} OFI per tick</span>
        <span class="dot">·</span>
        <span><strong>R²(OFI)</strong> = ${sim.fitOFI.r2.toFixed(2)} vs <strong>R²(TI)</strong> = ${sim.fitTI.r2.toFixed(2)}</span>
      </div>`;
  }

  const dIn = host.controlsRoot.querySelector('#viz-cks-d');
  const nIn = host.controlsRoot.querySelector('#viz-cks-n');
  const regen = host.controlsRoot.querySelector('.viz-regen-btn');
  const dShow = host.controlsRoot.querySelector('[data-viz-show="d"]');
  const nShow = host.controlsRoot.querySelector('[data-viz-show="n"]');
  dIn.addEventListener('input', () => { params.depth = parseInt(dIn.value, 10); dShow.textContent = params.depth; draw(); });
  nIn.addEventListener('input', () => { params.noise = parseFloat(nIn.value); nShow.textContent = params.noise.toFixed(2); draw(); });
  regen.addEventListener('click', () => { seed = (seed * 1664525 + 1013904223) >>> 0; draw(); });
  host.onReset(() => { dIn.value = params.depth; nIn.value = params.noise; dShow.textContent = params.depth; nShow.textContent = params.noise.toFixed(2); seed = params.seed || 12345; draw(); });
  draw();
});

// Export CKS helpers for testing / external use
export { simulateOFI };

// ─── Easley-López de Prado-O'Hara VPIN (order-flow toxicity) ───────────
//
// VPIN (Easley, López de Prado & O'Hara, 2012) on the volume clock. Each
// equal-volume bucket τ is split into buy/sell by bulk volume classification
// from its standardized price change z_τ:
//   V^B = V·Φ(z),  V^S = V − V^B,  |V^S − V^B| = V·|2Φ(z) − 1|
// VPIN = mean over n buckets of |V^S − V^B| / V ∈ [0,1]. A flat bucket (z=0,
// Φ=½) contributes 0; one-sided (toxic) flow drives it toward 1.

// Standard normal CDF via the Abramowitz-Stegun erf approximation (~1.5e-7).
export function normalCDF(z) {
  const sign = z < 0 ? -1 : 1;
  const x = Math.abs(z) / Math.SQRT2;
  const t = 1 / (1 + 0.3275911 * x);
  const y = 1 - (((((1.061405429 * t - 1.453152027) * t) + 1.421413741) * t - 0.284496736) * t + 0.254829592) * t * Math.exp(-x * x);
  return 0.5 * (1 + sign * y);
}

// VPIN from an array of standardized bucket returns z (= mean |2Φ(z)−1|).
export function vpinFromZ(zs) {
  if (zs.length === 0) return 0;
  let s = 0;
  for (const z of zs) s += Math.abs(2 * normalCDF(z) - 1);
  return s / zs.length;
}

function simulateVPIN({ toxicity, noise, n = 40, seed = 12345 }) {
  const rng = makeRng(seed);
  const gauss = makeGaussian(rng);
  const z = new Float64Array(n);
  const buyFrac = new Float64Array(n);
  const imbalance = new Float64Array(n);
  for (let i = 0; i < n; i++) {
    const zi = toxicity + noise * gauss();      // toxicity = systematic one-sided pressure (in σ units)
    z[i] = zi;
    buyFrac[i] = normalCDF(zi);
    imbalance[i] = Math.abs(2 * buyFrac[i] - 1);
  }
  let vp = 0; for (let i = 0; i < n; i++) vp += imbalance[i];
  return { z, buyFrac, imbalance, vpin: vp / n };
}

registerComponent('VpinSim', function VpinSim(host, params, lang) {
  const W = 640, H = 360, M = { top: 22, right: 16, bottom: 56, left: 40 };

  const labels = lang === 'id' ? {
    tox: 'Toxicity (tekanan one-sided, σ)',
    noise: 'Noise antar-bucket',
    regen: 'Regenerate',
    buckets: 'volume buckets (buy ▲ / sell ▼ imbalance)',
    gauge: 'VPIN', balanced: 'balanced', toxic: 'toxic',
  } : {
    tox: 'Toxicity (one-sided pressure, σ)',
    noise: 'Between-bucket noise',
    regen: 'Regenerate',
    buckets: 'volume buckets (buy ▲ / sell ▼ imbalance)',
    gauge: 'VPIN', balanced: 'balanced', toxic: 'toxic',
  };

  host.controlsRoot.innerHTML = `
    <div class="viz-control-row">
      <label class="viz-control-label" for="viz-vpin-t">${labels.tox}</label>
      <input type="range" id="viz-vpin-t" min="0" max="2.5" step="0.1" value="${params.toxicity}" />
      <span class="viz-control-value" data-viz-show="t">${params.toxicity.toFixed(1)}</span>
    </div>
    <div class="viz-control-row">
      <label class="viz-control-label" for="viz-vpin-n">${labels.noise}</label>
      <input type="range" id="viz-vpin-n" min="0.1" max="1.5" step="0.1" value="${params.noise}" />
      <span class="viz-control-value" data-viz-show="n">${params.noise.toFixed(1)}</span>
    </div>
    <div class="viz-control-row"><button type="button" class="viz-regen-btn">${labels.regen}</button></div>
  `;

  let seed = params.seed || 12345;

  function draw() {
    const sim = simulateVPIN({ toxicity: params.toxicity, noise: params.noise, n: 40, seed });
    const n = sim.buyFrac.length;
    const plotW = W - M.left - M.right;
    const barsH = 200;
    const midY = M.top + barsH / 2;
    const bw = plotW / n;
    const bars = [];
    for (let i = 0; i < n; i++) {
      const dev = sim.buyFrac[i] - 0.5;          // + buy-heavy, − sell-heavy
      const h = Math.abs(dev) * barsH;            // dev∈[-0.5,0.5] → up to barsH/2
      const x = M.left + i * bw + 1;
      const y = dev >= 0 ? midY - h : midY;
      const fill = dev >= 0 ? 'var(--gold)' : 'var(--azul)';
      bars.push(`<rect x="${x.toFixed(1)}" y="${y.toFixed(1)}" width="${(bw - 2).toFixed(1)}" height="${h.toFixed(1)}" fill="${fill}" opacity="0.8" />`);
    }
    // VPIN gauge (0..1) below the bars
    const gY = M.top + barsH + 26, gX = M.left, gW = plotW;
    const fillW = sim.vpin * gW;
    const vColor = sim.vpin > 0.7 ? 'var(--rose)' : sim.vpin > 0.4 ? 'var(--gold)' : 'var(--azul)';

    host.canvasRoot.innerHTML = `
      <svg viewBox="0 0 ${W} ${H}" width="100%" preserveAspectRatio="xMidYMid meet" class="viz-svg">
        <rect x="0" y="0" width="${W}" height="${H}" fill="var(--bg-elev-1)" />
        <line x1="${M.left}" y1="${midY}" x2="${M.left + plotW}" y2="${midY}" stroke="var(--line)" />
        ${bars.join('')}
        <text x="${M.left + plotW / 2}" y="${M.top + barsH + 14}" text-anchor="middle" font-size="10" fill="var(--ink-mute)">${labels.buckets}</text>

        <!-- VPIN gauge -->
        <rect x="${gX}" y="${gY}" width="${gW}" height="14" rx="7" fill="var(--bg-elev-2, #2a2a2a)" stroke="var(--line)" />
        <rect x="${gX}" y="${gY}" width="${fillW.toFixed(1)}" height="14" rx="7" fill="${vColor}" />
        <text x="${gX}" y="${gY + 30}" font-size="10" fill="var(--ink-mute)">0 · ${labels.balanced}</text>
        <text x="${gX + gW}" y="${gY + 30}" text-anchor="end" font-size="10" fill="var(--ink-mute)">${labels.toxic} · 1</text>
        <text x="${(gX + fillW).toFixed(1)}" y="${gY - 5}" text-anchor="middle" font-size="12" font-weight="700" fill="${vColor}">${labels.gauge} = ${sim.vpin.toFixed(3)}</text>
      </svg>`;
    host.readoutRoot.innerHTML = `
      <div class="viz-readout-row">
        <span><strong>VPIN</strong> = ${sim.vpin.toFixed(3)}</span>
        <span class="dot">·</span>
        <span>mean buy fraction = ${(Array.from(sim.buyFrac).reduce((a, b) => a + b, 0) / n).toFixed(2)}</span>
        <span class="dot">·</span>
        <span>${sim.vpin > 0.7 ? 'one-sided → toxic (MMs widen/withdraw)' : sim.vpin > 0.4 ? 'leaning one way' : 'balanced two-way flow'}</span>
      </div>`;
  }

  const tIn = host.controlsRoot.querySelector('#viz-vpin-t');
  const nIn = host.controlsRoot.querySelector('#viz-vpin-n');
  const regen = host.controlsRoot.querySelector('.viz-regen-btn');
  const tShow = host.controlsRoot.querySelector('[data-viz-show="t"]');
  const nShow = host.controlsRoot.querySelector('[data-viz-show="n"]');
  tIn.addEventListener('input', () => { params.toxicity = parseFloat(tIn.value); tShow.textContent = params.toxicity.toFixed(1); draw(); });
  nIn.addEventListener('input', () => { params.noise = parseFloat(nIn.value); nShow.textContent = params.noise.toFixed(1); draw(); });
  regen.addEventListener('click', () => { seed = (seed * 1664525 + 1013904223) >>> 0; draw(); });
  host.onReset(() => { tIn.value = params.toxicity; nIn.value = params.noise; tShow.textContent = params.toxicity.toFixed(1); nShow.textContent = params.noise.toFixed(1); seed = params.seed || 12345; draw(); });
  draw();
});

// Export VPIN helpers for testing / external use
export { simulateVPIN };

// ─── Bouchaud propagator (transient-impact) — metaorder impact path ─────
//
// In the propagator model the price is the sum of past trades, each with a
// DECAYING impact G(ℓ) ~ (1+ℓ)^(−β). A metaorder (N same-sign child trades)
// therefore traces the famous concave RISE during execution, a PEAK at the
// last child, then a RELAXATION as old impacts decay — impact is transient,
// not permanent. Smaller β = longer memory = slower relaxation. Pure function.

function propagatorImpact({ beta, N, decayWindow }) {
  const G = (l) => Math.pow(1 + l, -beta);          // propagator kernel, G(0)=1
  const T = N + decayWindow;
  const I = new Float64Array(T + 1);
  for (let t = 0; t <= T; t++) {
    const sMax = Math.min(t, N - 1);                // child trades fire at s = 0..N-1 (sign +1)
    let sum = 0;
    for (let s = 0; s <= sMax; s++) sum += G(t - s);
    I[t] = sum;
  }
  const peakIndex = N - 1;
  const peak = I[peakIndex];
  const permanent = I[T];
  return { I, peak, permanent, peakIndex, T, relaxFrac: peak > 0 ? permanent / peak : 0 };
}

registerComponent('PropagatorSim', function PropagatorSim(host, params, lang) {
  const W = 640, H = 340, M = { top: 22, right: 16, bottom: 38, left: 50 };

  const labels = lang === 'id' ? {
    beta: 'Decay propagator $\\beta$',
    N: 'Panjang metaorder $N$ (trade)',
    xlab: 'waktu (trade)', ylab: 'impact I(t)',
    exec: 'eksekusi', relax: 'relaksasi',
  } : {
    beta: 'Propagator decay $\\beta$',
    N: 'Metaorder length $N$ (trades)',
    xlab: 'time (trades)', ylab: 'impact I(t)',
    exec: 'execution', relax: 'relaxation',
  };

  host.controlsRoot.innerHTML = `
    <div class="viz-control-row">
      <label class="viz-control-label" for="viz-prop-b">${labels.beta}</label>
      <input type="range" id="viz-prop-b" min="0.1" max="0.9" step="0.05" value="${params.beta}" />
      <span class="viz-control-value" data-viz-show="b">${params.beta.toFixed(2)}</span>
    </div>
    <div class="viz-control-row">
      <label class="viz-control-label" for="viz-prop-n">${labels.N}</label>
      <input type="range" id="viz-prop-n" min="5" max="60" step="1" value="${params.N}" />
      <span class="viz-control-value" data-viz-show="n">${params.N}</span>
    </div>
  `;

  function draw() {
    const N = params.N;
    const sim = propagatorImpact({ beta: params.beta, N, decayWindow: 2 * N });
    const T = sim.T;
    const plotW = W - M.left - M.right, plotH = H - M.top - M.bottom;
    const yMax = sim.peak * 1.08 || 1;
    const sx = (t) => M.left + (t / T) * plotW;
    const sy = (v) => M.top + (1 - v / yMax) * plotH;
    const xExecEnd = sx(N - 1);

    let pathD = '';
    for (let t = 0; t <= T; t++) pathD += `${t === 0 ? 'M' : 'L'} ${sx(t).toFixed(1)} ${sy(sim.I[t]).toFixed(1)} `;

    host.canvasRoot.innerHTML = `
      <svg viewBox="0 0 ${W} ${H}" width="100%" preserveAspectRatio="xMidYMid meet" class="viz-svg">
        <rect x="0" y="0" width="${W}" height="${H}" fill="var(--bg-elev-1)" />
        <!-- execution region shaded -->
        <rect x="${M.left}" y="${M.top}" width="${(xExecEnd - M.left).toFixed(1)}" height="${plotH}" fill="var(--gold)" opacity="0.08" />
        <line x1="${M.left}" y1="${M.top + plotH}" x2="${M.left + plotW}" y2="${M.top + plotH}" stroke="var(--line)" />
        <line x1="${M.left}" y1="${M.top}" x2="${M.left}" y2="${M.top + plotH}" stroke="var(--line)" />
        <!-- permanent (relaxation asymptote so far) guide -->
        <line x1="${M.left}" y1="${sy(sim.permanent).toFixed(1)}" x2="${M.left + plotW}" y2="${sy(sim.permanent).toFixed(1)}" stroke="var(--line-soft)" stroke-dasharray="3 3" />
        <!-- impact path -->
        <path d="${pathD}" fill="none" stroke="var(--azul)" stroke-width="2.2" />
        <!-- peak marker -->
        <circle cx="${xExecEnd.toFixed(1)}" cy="${sy(sim.peak).toFixed(1)}" r="4" fill="var(--gold)" />
        <line x1="${xExecEnd.toFixed(1)}" y1="${M.top}" x2="${xExecEnd.toFixed(1)}" y2="${M.top + plotH}" stroke="var(--ink-mute)" stroke-dasharray="2 2" opacity="0.4" />
        <text x="${(M.left + (xExecEnd - M.left) / 2).toFixed(1)}" y="${M.top + 12}" text-anchor="middle" font-size="10" fill="var(--ink-mute)">${labels.exec}</text>
        <text x="${((xExecEnd + M.left + plotW) / 2).toFixed(1)}" y="${M.top + 12}" text-anchor="middle" font-size="10" fill="var(--ink-mute)">${labels.relax}</text>
        <text x="${(xExecEnd + 6).toFixed(1)}" y="${(sy(sim.peak) - 6).toFixed(1)}" font-size="10" fill="var(--gold)" font-weight="600">peak</text>
        <text x="${(M.left + plotW / 2).toFixed(1)}" y="${M.top + plotH + 26}" text-anchor="middle" font-size="11" fill="var(--ink-mute)">${labels.xlab}</text>
        <text x="${M.left - 34}" y="${(M.top + plotH / 2).toFixed(1)}" text-anchor="middle" font-size="11" fill="var(--ink-mute)" transform="rotate(-90 ${M.left - 34} ${(M.top + plotH / 2).toFixed(1)})">${labels.ylab}</text>
      </svg>`;
    host.readoutRoot.innerHTML = `
      <div class="viz-readout-row">
        <span><strong>peak impact</strong> = ${sim.peak.toFixed(2)} (at end of execution)</span>
        <span class="dot">·</span>
        <span><strong>after 2N</strong> = ${sim.permanent.toFixed(2)} (${(sim.relaxFrac * 100).toFixed(0)}% of peak remains)</span>
        <span class="dot">·</span>
        <span>impact is transient — smaller β relaxes slower</span>
      </div>`;
  }

  const bIn = host.controlsRoot.querySelector('#viz-prop-b');
  const nIn = host.controlsRoot.querySelector('#viz-prop-n');
  const bShow = host.controlsRoot.querySelector('[data-viz-show="b"]');
  const nShow = host.controlsRoot.querySelector('[data-viz-show="n"]');
  bIn.addEventListener('input', () => { params.beta = parseFloat(bIn.value); bShow.textContent = params.beta.toFixed(2); draw(); });
  nIn.addEventListener('input', () => { params.N = parseInt(nIn.value, 10); nShow.textContent = params.N; draw(); });
  host.onReset(() => { bIn.value = params.beta; nIn.value = params.N; bShow.textContent = params.beta.toFixed(2); nShow.textContent = params.N; draw(); });
  draw();
});

// Export propagator helper for testing / external use
export { propagatorImpact };

// ─── Deep (multi-level) OFI — how many book levels to aggregate ─────────
//
// The CKS OFI law uses imbalance at the *best* quotes. Later work (Cont et
// al.) extends it to DEEP OFI: a depth-weighted sum across the first L price
// levels. Here the true mid-move depends on all Lmax levels with weights that
// decay by `decay` per level; regressing ΔP on the deep-OFI built from only
// the first L levels shows R² climbing from the best-level value toward the
// ceiling as L grows — more of the book explains more of the move.

function deepOFI({ Lmax = 8, decay = 0.6, noise = 0.3, n = 500, seed = 12345, sigmaOFI = 100 }) {
  const w = [];
  for (let l = 0; l < Lmax; l++) w.push(Math.pow(decay, l));
  const rng = makeRng(seed);
  const g = makeGaussian(rng);
  const ofi = [];
  for (let l = 0; l < Lmax; l++) ofi.push(new Float64Array(n));
  const dP = new Float64Array(n);
  for (let i = 0; i < n; i++) {
    let s = 0;
    for (let l = 0; l < Lmax; l++) { const o = sigmaOFI * g(); ofi[l][i] = o; s += w[l] * o; }
    dP[i] = s + noise * sigmaOFI * g();
  }
  const r2ByLevel = [];
  for (let L = 1; L <= Lmax; L++) {
    const x = new Float64Array(n);
    for (let i = 0; i < n; i++) { let s = 0; for (let l = 0; l < L; l++) s += w[l] * ofi[l][i]; x[i] = s; }
    r2ByLevel.push({ L, r2: olsFit(Array.from(x), Array.from(dP)).r2 });
  }
  return { r2ByLevel, weights: w, Lmax };
}

registerComponent('DeepOfiSim', function DeepOfiSim(host, params, lang) {
  const W = 640, H = 320, M = { top: 22, right: 16, bottom: 40, left: 46 };
  const LMAX = 8;

  const labels = lang === 'id' ? {
    L: 'Level book disertakan $L$', decay: 'Bobot kedalaman (decay/level)', noise: 'Noise',
    xlab: 'jumlah level diagregasi (L)', ylab: 'R²',
  } : {
    L: 'Book levels included $L$', decay: 'Depth weighting (decay/level)', noise: 'Noise',
    xlab: 'levels aggregated (L)', ylab: 'R²',
  };

  host.controlsRoot.innerHTML = `
    <div class="viz-control-row">
      <label class="viz-control-label" for="viz-deep-l">${labels.L}</label>
      <input type="range" id="viz-deep-l" min="1" max="${LMAX}" step="1" value="${params.L}" />
      <span class="viz-control-value" data-viz-show="l">${params.L}</span>
    </div>
    <div class="viz-control-row">
      <label class="viz-control-label" for="viz-deep-d">${labels.decay}</label>
      <input type="range" id="viz-deep-d" min="0.3" max="0.92" step="0.02" value="${params.decay}" />
      <span class="viz-control-value" data-viz-show="d">${params.decay.toFixed(2)}</span>
    </div>
    <div class="viz-control-row">
      <label class="viz-control-label" for="viz-deep-n">${labels.noise}</label>
      <input type="range" id="viz-deep-n" min="0.05" max="0.8" step="0.05" value="${params.noise}" />
      <span class="viz-control-value" data-viz-show="n">${params.noise.toFixed(2)}</span>
    </div>
  `;

  function draw() {
    const sim = deepOFI({ Lmax: LMAX, decay: params.decay, noise: params.noise, n: 600, seed: 4242 });
    const plotW = W - M.left - M.right, plotH = H - M.top - M.bottom;
    const bw = plotW / LMAX;
    const yS = (r) => M.top + (1 - r) * plotH;
    const bars = sim.r2ByLevel.map((p) => {
      const x = M.left + (p.L - 1) * bw + 3;
      const h = p.r2 * plotH;
      const cur = p.L === params.L;
      return `<rect x="${x.toFixed(1)}" y="${yS(p.r2).toFixed(1)}" width="${(bw - 6).toFixed(1)}" height="${h.toFixed(1)}" fill="${cur ? 'var(--gold)' : 'var(--azul)'}" opacity="${cur ? 0.95 : 0.55}" />
        <text x="${(x + (bw - 6) / 2).toFixed(1)}" y="${(yS(p.r2) - 4).toFixed(1)}" text-anchor="middle" font-size="9" fill="var(--ink-mute)">${p.r2.toFixed(2)}</text>
        <text x="${(x + (bw - 6) / 2).toFixed(1)}" y="${M.top + plotH + 14}" text-anchor="middle" font-size="9" fill="var(--ink-mute)">${p.L}</text>`;
    }).join('');
    const r1 = sim.r2ByLevel[0].r2, rL = sim.r2ByLevel[params.L - 1].r2, rMax = sim.r2ByLevel[LMAX - 1].r2;
    host.canvasRoot.innerHTML = `
      <svg viewBox="0 0 ${W} ${H}" width="100%" preserveAspectRatio="xMidYMid meet" class="viz-svg">
        <rect x="0" y="0" width="${W}" height="${H}" fill="var(--bg-elev-1)" />
        <line x1="${M.left}" y1="${M.top + plotH}" x2="${M.left + plotW}" y2="${M.top + plotH}" stroke="var(--line)" />
        <line x1="${M.left}" y1="${yS(1).toFixed(1)}" x2="${M.left + plotW}" y2="${yS(1).toFixed(1)}" stroke="var(--line-soft)" stroke-dasharray="2 2" />
        <text x="${M.left - 6}" y="${yS(1) + 3}" text-anchor="end" font-size="9" fill="var(--ink-mute)">1.0</text>
        <text x="${M.left - 6}" y="${yS(0.5) + 3}" text-anchor="end" font-size="9" fill="var(--ink-mute)">0.5</text>
        ${bars}
        <text x="${(M.left + plotW / 2).toFixed(1)}" y="${M.top + plotH + 30}" text-anchor="middle" font-size="11" fill="var(--ink-mute)">${labels.xlab}</text>
      </svg>`;
    host.readoutRoot.innerHTML = `
      <div class="viz-readout-row">
        <span><strong>best-level R²</strong> (L=1) = ${r1.toFixed(3)}</span>
        <span class="dot">·</span>
        <span><strong>R²(L=${params.L})</strong> = ${rL.toFixed(3)}</span>
        <span class="dot">·</span>
        <span><strong>deep R²</strong> (L=${LMAX}) = ${rMax.toFixed(3)} — extra levels explain +${((rMax - r1) * 100).toFixed(0)} pts</span>
      </div>`;
  }

  const lIn = host.controlsRoot.querySelector('#viz-deep-l');
  const dIn = host.controlsRoot.querySelector('#viz-deep-d');
  const nIn = host.controlsRoot.querySelector('#viz-deep-n');
  const lShow = host.controlsRoot.querySelector('[data-viz-show="l"]');
  const dShow = host.controlsRoot.querySelector('[data-viz-show="d"]');
  const nShow = host.controlsRoot.querySelector('[data-viz-show="n"]');
  lIn.addEventListener('input', () => { params.L = parseInt(lIn.value, 10); lShow.textContent = params.L; draw(); });
  dIn.addEventListener('input', () => { params.decay = parseFloat(dIn.value); dShow.textContent = params.decay.toFixed(2); draw(); });
  nIn.addEventListener('input', () => { params.noise = parseFloat(nIn.value); nShow.textContent = params.noise.toFixed(2); draw(); });
  host.onReset(() => { lIn.value = params.L; dIn.value = params.decay; nIn.value = params.noise; lShow.textContent = params.L; dShow.textContent = params.decay.toFixed(2); nShow.textContent = params.noise.toFixed(2); draw(); });
  draw();
});

// Export deep-OFI helper for testing / external use
export { deepOFI };

// ─── Almgren-Chriss execution animation — play through the schedule ─────
//
// A time-stepped view of the optimal liquidation: holdings x_k drain interval
// by interval. executionStep() is the pure state at step k (remaining, the
// trade entering this step, cumulative sold); the component animates k with a
// play/scrub control over the closed-form trajectory (reuses almgrenTrajectory).

function executionStep(x, k) {
  const N = x.length - 1;
  const X = x[0];
  const kk = Math.max(0, Math.min(N, k));
  const remaining = x[kk];
  const traded = kk === 0 ? 0 : x[kk - 1] - x[kk];
  const soldSoFar = X - remaining;
  return { step: kk, N, remaining, traded, soldSoFar, fracDone: X > 0 ? soldSoFar / X : 0 };
}

registerComponent('AlmgrenExecutionSim', function AlmgrenExecutionSim(host, params, lang) {
  const W = 640, H = 320, M = { top: 22, right: 16, bottom: 40, left: 52 };
  const N = params.N || 20, T = params.T || 5, X = params.X || 100000;

  const labels = lang === 'id' ? {
    kappa: 'Urgency $\\kappa$', play: '▶ Play', pause: '⏸ Pause', step: 'Langkah',
    xlab: 'interval', ylab: 'holdings tersisa',
  } : {
    kappa: 'Urgency $\\kappa$', play: '▶ Play', pause: '⏸ Pause', step: 'Step',
    xlab: 'interval', ylab: 'holdings remaining',
  };

  host.controlsRoot.innerHTML = `
    <div class="viz-control-row">
      <label class="viz-control-label" for="viz-axe-k">${labels.kappa}</label>
      <input type="range" id="viz-axe-k" min="0" max="1.2" step="0.05" value="${params.kappa}" />
      <span class="viz-control-value" data-viz-show="k">${params.kappa.toFixed(2)}</span>
    </div>
    <div class="viz-control-row">
      <label class="viz-control-label" for="viz-axe-s">${labels.step}</label>
      <input type="range" id="viz-axe-s" min="0" max="${N}" step="1" value="0" />
      <button type="button" class="viz-regen-btn" data-axe-play>${labels.play}</button>
    </div>
  `;

  let step = 0, timer = null;
  const sIn = host.controlsRoot.querySelector('#viz-axe-s');
  const kIn = host.controlsRoot.querySelector('#viz-axe-k');
  const playBtn = host.controlsRoot.querySelector('[data-axe-play]');
  const kShow = host.controlsRoot.querySelector('[data-viz-show="k"]');

  function trajectory() { return almgrenTrajectory({ X, T, N, kappa: params.kappa }).x; }

  function draw() {
    const x = trajectory();
    const st = executionStep(x, step);
    const plotW = W - M.left - M.right, plotH = H - M.top - M.bottom;
    const bw = plotW / N;
    const yS = (v) => M.top + (1 - v / X) * plotH;
    const bars = [];
    for (let k = 1; k <= N; k++) {
      const xpos = M.left + (k - 1) * bw + 1;
      const top = yS(x[k]);
      const executed = k <= st.step;
      bars.push(`<rect x="${xpos.toFixed(1)}" y="${top.toFixed(1)}" width="${(bw - 2).toFixed(1)}" height="${(M.top + plotH - top).toFixed(1)}" fill="${executed ? 'var(--gold)' : 'var(--azul)'}" opacity="${executed ? 0.85 : 0.3}" />`);
    }
    const headX = M.left + st.step * bw;
    host.canvasRoot.innerHTML = `
      <svg viewBox="0 0 ${W} ${H}" width="100%" preserveAspectRatio="xMidYMid meet" class="viz-svg">
        <rect x="0" y="0" width="${W}" height="${H}" fill="var(--bg-elev-1)" />
        <line x1="${M.left}" y1="${M.top + plotH}" x2="${M.left + plotW}" y2="${M.top + plotH}" stroke="var(--line)" />
        ${bars.join('')}
        <line x1="${headX.toFixed(1)}" y1="${M.top}" x2="${headX.toFixed(1)}" y2="${M.top + plotH}" stroke="var(--ink-mute)" stroke-dasharray="2 2" opacity="0.6" />
        <text x="${M.left - 6}" y="${yS(X) + 4}" text-anchor="end" font-size="9" fill="var(--ink-mute)">${(X / 1000)}k</text>
        <text x="${M.left - 6}" y="${(M.top + plotH).toFixed(1)}" text-anchor="end" font-size="9" fill="var(--ink-mute)">0</text>
        <text x="${(M.left + plotW / 2).toFixed(1)}" y="${M.top + plotH + 28}" text-anchor="middle" font-size="11" fill="var(--ink-mute)">${labels.xlab}</text>
        <text x="${M.left - 38}" y="${(M.top + plotH / 2).toFixed(1)}" text-anchor="middle" font-size="11" fill="var(--ink-mute)" transform="rotate(-90 ${M.left - 38} ${(M.top + plotH / 2).toFixed(1)})">${labels.ylab}</text>
      </svg>`;
    host.readoutRoot.innerHTML = `
      <div class="viz-readout-row">
        <span><strong>step</strong> ${st.step}/${N}</span>
        <span class="dot">·</span>
        <span><strong>sold</strong> ${Math.round(st.soldSoFar).toLocaleString()} (${(st.fracDone * 100).toFixed(0)}%)</span>
        <span class="dot">·</span>
        <span><strong>remaining</strong> ${Math.round(st.remaining).toLocaleString()}</span>
        <span class="dot">·</span>
        <span>this interval: ${Math.round(st.traded).toLocaleString()}</span>
      </div>`;
  }

  function stop() { if (timer) { clearInterval(timer); timer = null; playBtn.textContent = labels.play; } }
  function play() {
    if (timer) { stop(); return; }
    if (step >= N) step = 0;
    playBtn.textContent = labels.pause;
    timer = setInterval(() => {
      step = Math.min(N, step + 1);
      sIn.value = step;
      draw();
      if (step >= N) stop();
    }, 220);
  }

  kIn.addEventListener('input', () => { params.kappa = parseFloat(kIn.value); kShow.textContent = params.kappa.toFixed(2); draw(); });
  sIn.addEventListener('input', () => { stop(); step = parseInt(sIn.value, 10); draw(); });
  playBtn.addEventListener('click', play);
  host.onReset(() => { stop(); step = 0; sIn.value = 0; kIn.value = params.kappa; kShow.textContent = params.kappa.toFixed(2); draw(); });
  draw();
});

// Export execution-step helper for testing / external use
export { executionStep };

// ─── Interactive limit-order-book ladder ───────────────────────────────
//
// The canonical microstructure object: resting bid/ask depth at price levels.
// A market order walks the book — consuming liquidity level by level, paying
// progressively worse prices (slippage) and moving the touch. This makes
// depth → price-impact (Kyle's λ, CKS's 1/depth) visible and tangible. Pure
// functions; the component fires market orders + replenishes interactively.

function makeBook({ mid = 100, tick = 0.05, levels = 8, depth = 200, seed = 12345 }) {
  const rng = makeRng(seed);
  const asks = [], bids = [];
  for (let i = 1; i <= levels; i++) {
    asks.push({ price: +(mid + i * tick).toFixed(2), size: Math.round(depth * (0.5 + i * 0.15) * (0.7 + 0.6 * rng())) });
    bids.push({ price: +(mid - i * tick).toFixed(2), size: Math.round(depth * (0.5 + i * 0.15) * (0.7 + 0.6 * rng())) });
  }
  return { asks, bids, tick };   // asks ascending price; bids descending price
}

function bestAsk(book) { const l = book.asks.find((x) => x.size > 0); return l ? l.price : null; }
function bestBid(book) { const l = book.bids.find((x) => x.size > 0); return l ? l.price : null; }
function bookMid(book) { const a = bestAsk(book), b = bestBid(book); return (a != null && b != null) ? +((a + b) / 2).toFixed(4) : null; }
function bookSpread(book) { const a = bestAsk(book), b = bestBid(book); return (a != null && b != null) ? +(a - b).toFixed(4) : null; }

function walk(levels, q) {       // consume q from `levels` in order; returns new levels + fill stats
  const out = levels.map((l) => ({ ...l }));
  let rem = q, cost = 0, filled = 0;
  for (const l of out) { if (rem <= 0) break; const take = Math.min(l.size, rem); l.size -= take; rem -= take; cost += take * l.price; filled += take; }
  return { levels: out, filled, avgPrice: filled > 0 ? +(cost / filled).toFixed(4) : null };
}

function marketBuy(book, q) {
  const ba = bestAsk(book);
  const r = walk(book.asks, q);
  return { book: { ...book, asks: r.levels }, filled: r.filled, avgPrice: r.avgPrice, slippage: r.avgPrice != null && ba != null ? +(r.avgPrice - ba).toFixed(4) : null };
}
function marketSell(book, q) {
  const bb = bestBid(book);
  const r = walk(book.bids, q);
  return { book: { ...book, bids: r.levels }, filled: r.filled, avgPrice: r.avgPrice, slippage: r.avgPrice != null && bb != null ? +(bb - r.avgPrice).toFixed(4) : null };
}

registerComponent('OrderBookSim', function OrderBookSim(host, params, lang) {
  const W = 640, H = 360, M = { top: 16, bottom: 16 };

  const labels = lang === 'id' ? {
    qty: 'Ukuran market order', buy: 'Market BUY ▲', sell: 'Market SELL ▼', reset: 'Replenish',
    bidsz: 'bid', asksz: 'ask',
  } : {
    qty: 'Market-order size', buy: 'Market BUY ▲', sell: 'Market SELL ▼', reset: 'Replenish',
    bidsz: 'bid', asksz: 'ask',
  };

  host.controlsRoot.innerHTML = `
    <div class="viz-control-row">
      <label class="viz-control-label" for="viz-lob-q">${labels.qty}</label>
      <input type="range" id="viz-lob-q" min="50" max="900" step="50" value="${params.qty || 300}" />
      <span class="viz-control-value" data-viz-show="q">${params.qty || 300}</span>
    </div>
    <div class="viz-control-row">
      <button type="button" class="viz-regen-btn" data-lob="buy">${labels.buy}</button>
      <button type="button" class="viz-regen-btn" data-lob="sell">${labels.sell}</button>
      <button type="button" class="viz-regen-btn" data-lob="reset">${labels.reset}</button>
    </div>
  `;

  const fresh = () => makeBook({ mid: params.mid || 100, tick: params.tick || 0.05, levels: params.levels || 8, depth: params.depth || 200, seed: params.seed || 12345 });
  let book = fresh();
  let last = null;   // last fill {side, filled, avgPrice, slippage}
  const qIn = host.controlsRoot.querySelector('#viz-lob-q');
  const qShow = host.controlsRoot.querySelector('[data-viz-show="q"]');

  function draw() {
    const tick = book.tick;
    const ask = bestAsk(book), bid = bestBid(book), mid = bookMid(book), spr = bookSpread(book);
    const rows = [...book.asks.slice().reverse(), ...book.bids];   // asks high→low on top, then bids
    const maxSz = Math.max(1, ...book.asks.map((l) => l.size), ...book.bids.map((l) => l.size));
    const rowH = (H - M.top - M.bottom) / rows.length;
    const cx = W / 2, barMax = W / 2 - 70;
    const isAsk = (i) => i < book.asks.length;
    const bars = rows.map((l, i) => {
      const y = M.top + i * rowH;
      const ask_ = isAsk(i);
      const w = (l.size / maxSz) * barMax;
      const color = ask_ ? 'var(--rose)' : 'var(--green)';
      const x = ask_ ? cx + 60 : cx - 60 - w;
      const isTouch = (ask_ && l.price === ask) || (!ask_ && l.price === bid);
      return `
        <rect x="${x.toFixed(1)}" y="${(y + 2).toFixed(1)}" width="${Math.max(0, w).toFixed(1)}" height="${(rowH - 4).toFixed(1)}" fill="${color}" opacity="${l.size > 0 ? (isTouch ? 0.85 : 0.45) : 0.08}" />
        <text x="${cx}" y="${(y + rowH / 2 + 3).toFixed(1)}" text-anchor="middle" font-size="10" font-family="var(--mono)" fill="${isTouch ? 'var(--ink)' : 'var(--ink-mute)'}" font-weight="${isTouch ? 700 : 400}">${l.price.toFixed(2)}</text>
        <text x="${ask_ ? (cx + 56) : (cx - 56)}" y="${(y + rowH / 2 + 3).toFixed(1)}" text-anchor="${ask_ ? 'start' : 'end'}" font-size="9" fill="var(--ink-faint)">${l.size}</text>`;
    }).join('');
    const midY = M.top + book.asks.length * rowH;
    host.canvasRoot.innerHTML = `
      <svg viewBox="0 0 ${W} ${H}" width="100%" preserveAspectRatio="xMidYMid meet" class="viz-svg">
        <rect x="0" y="0" width="${W}" height="${H}" fill="var(--bg-elev-1)" />
        <line x1="40" y1="${midY.toFixed(1)}" x2="${W - 40}" y2="${midY.toFixed(1)}" stroke="var(--gold)" stroke-width="1.5" stroke-dasharray="4 3" />
        ${bars}
      </svg>`;
    host.readoutRoot.innerHTML = `
      <div class="viz-readout-row">
        <span><strong>bid</strong> ${bid != null ? bid.toFixed(2) : '—'} · <strong>ask</strong> ${ask != null ? ask.toFixed(2) : '—'}</span>
        <span class="dot">·</span>
        <span><strong>spread</strong> ${spr != null ? spr.toFixed(2) : '—'} · <strong>mid</strong> ${mid != null ? mid.toFixed(3) : '—'}</span>
        ${last ? `<span class="dot">·</span><span>last ${last.side}: ${last.filled} @ ${last.avgPrice != null ? last.avgPrice.toFixed(3) : '—'}, slippage ${last.slippage != null ? last.slippage.toFixed(3) : '—'}</span>` : ''}
      </div>`;
  }

  function order(side) {
    const q = parseInt(qIn.value, 10);
    const res = side === 'buy' ? marketBuy(book, q) : marketSell(book, q);
    book = res.book;
    last = { side: side === 'buy' ? 'BUY' : 'SELL', filled: res.filled, avgPrice: res.avgPrice, slippage: res.slippage };
    draw();
  }
  host.controlsRoot.querySelector('[data-lob="buy"]').addEventListener('click', () => order('buy'));
  host.controlsRoot.querySelector('[data-lob="sell"]').addEventListener('click', () => order('sell'));
  host.controlsRoot.querySelector('[data-lob="reset"]').addEventListener('click', () => { book = fresh(); last = null; draw(); });
  qIn.addEventListener('input', () => { qShow.textContent = qIn.value; });
  host.onReset(() => { book = fresh(); last = null; qIn.value = params.qty || 300; qShow.textContent = params.qty || 300; draw(); });
  draw();
});

// Export order-book helpers for testing / external use
export { makeBook, bestAsk, bestBid, bookMid, bookSpread, marketBuy, marketSell };

// ─── Lumped-parameter reservoir-pressure simulator ─────────────────────
//
// A single-tank ("lumped-parameter") material balance for average reservoir
// pressure p(t), the simplest defensible model of how production draws a
// geothermal reservoir down and how recharge + reinjection support it. This
// is the verified, FLUID-NEUTRAL backbone; the dry-steam (Whiting-Ramey)
// steam material/energy balance is a domain refinement flagged in the module.
//
//   κ dp/dt = −W_p(1−f) + a·(p0 − p)
//
//   W_p   production (gross withdrawal) rate   [illustrative units]
//   f     reinjection fraction (0..1): W_inj = f·W_p
//   a     recharge / leakage coefficient: natural inflow = a·(p0−p)
//   κ     storativity ("tank size"): pressure drop per unit net withdrawal
//   net = W_p(1−f)                            net mass extraction
//
// Closed-form solution (a > 0):
//   p∞ = p0 − net/a                          steady-state pressure
//   τ  = κ/a                                  time constant
//   p(t) = p∞ + (p0 − p∞)·e^(−t/τ)  =  p0 − (net/a)(1 − e^(−t/τ))
// Closed reservoir (a → 0): linear decline p(t) = p0 − (net/κ)·t.
//
// Extracted as a pure function so it is testable in isolation
// (matches the simulateRoll / solveAcunaW pattern). Verified by
// scripts/verify-lumped-sim.mjs against an independent RK4 integration.

function simulateLumped({ Wp, f, a, kappa, p0 = 100, years = 40, nSteps = 200 }) {
  const net = Wp * (1 - f);                 // net withdrawal = production − reinjection
  const open = a > 1e-9;
  const tau = open ? kappa / a : Infinity;  // time constant
  const pInf = open ? p0 - net / a : -Infinity; // steady-state pressure (may be < 0 ⇒ unsustainable)
  const t = new Float64Array(nSteps + 1);
  const p = new Float64Array(nSteps + 1);
  for (let i = 0; i <= nSteps; i++) {
    const ti = (i / nSteps) * years;
    t[i] = ti;
    p[i] = open
      ? pInf + (p0 - pInf) * Math.exp(-ti / tau)   // exponential approach to p∞
      : p0 - (net / kappa) * ti;                    // closed reservoir: linear decline
  }
  // "Stabilises" iff there is recharge and the steady state sits above a depletion floor.
  const stabilises = open && pInf > 0;
  return { t, p, net, tau, pInf, open, stabilises, p0 };
}

registerComponent('LumpedReservoirSim', function LumpedReservoirSim(host, params, lang) {
  const W = 640, H = 380;
  const M = { top: 24, right: 124, bottom: 38, left: 52 };
  const YEARS = 40;

  const labels = lang === 'id' ? {
    Wp: 'Laju produksi $W_p$',
    f: 'Fraksi reinjeksi $f$',
    a: 'Koefisien recharge $a$',
    kappa: 'Storativity $\\kappa$ (ukuran tangki)',
    xlabel: 'Waktu (tahun)',
    ylabel: 'Tekanan reservoir (% awal)',
    curve: 'Dengan reinjeksi',
    refCurve: 'Tanpa reinjeksi ($f=0$)',
    asymptote: 'Steady-state $p_\\infty$',
    pinf: 'Tekanan steady-state',
    tau: 'Konstanta waktu',
    netw: 'Penarikan netto',
    regimeOpen: 'STABIL — recharge+reinjeksi nyeimbangin penarikan',
    regimeClosed: 'MENURUN — reservoir tertutup (tanpa recharge), tak-berkelanjutan',
    regimeDeplete: 'TAK-BERKELANJUTAN — penarikan ngelebihin recharge, tekanan ke nol',
    yr: 'thn',
  } : {
    Wp: 'Production rate $W_p$',
    f: 'Reinjection fraction $f$',
    a: 'Recharge coefficient $a$',
    kappa: 'Storativity $\\kappa$ (tank size)',
    xlabel: 'Time (years)',
    ylabel: 'Reservoir pressure (% of initial)',
    curve: 'With reinjection',
    refCurve: 'No reinjection ($f=0$)',
    asymptote: 'Steady-state $p_\\infty$',
    pinf: 'Steady-state pressure',
    tau: 'Time constant',
    netw: 'Net withdrawal',
    regimeOpen: 'SUSTAINABLE — recharge + reinjection balance withdrawal',
    regimeClosed: 'DECLINING — closed reservoir (no recharge), unsustainable',
    regimeDeplete: 'UNSUSTAINABLE — withdrawal exceeds recharge, pressure → zero',
    yr: 'yr',
  };

  // ── Controls ──────────────────────────────────────────────────────
  host.controlsRoot.innerHTML = `
    <div class="viz-control-row">
      <label class="viz-control-label" for="viz-lump-wp">${labels.Wp}</label>
      <input type="range" id="viz-lump-wp" min="0" max="100" step="5" value="${params.Wp}" />
      <span class="viz-control-value" data-viz-show="wp">${params.Wp}</span>
    </div>
    <div class="viz-control-row">
      <label class="viz-control-label" for="viz-lump-f">${labels.f}</label>
      <input type="range" id="viz-lump-f" min="0" max="1" step="0.05" value="${params.f}" />
      <span class="viz-control-value" data-viz-show="f">${params.f.toFixed(2)}</span>
    </div>
    <div class="viz-control-row">
      <label class="viz-control-label" for="viz-lump-a">${labels.a}</label>
      <input type="range" id="viz-lump-a" min="0" max="5" step="0.25" value="${params.a}" />
      <span class="viz-control-value" data-viz-show="a">${params.a.toFixed(2)}</span>
    </div>
    <div class="viz-control-row">
      <label class="viz-control-label" for="viz-lump-k">${labels.kappa}</label>
      <input type="range" id="viz-lump-k" min="5" max="100" step="5" value="${params.kappa}" />
      <span class="viz-control-value" data-viz-show="k">${params.kappa}</span>
    </div>
  `;

  const plotW = W - M.left - M.right;
  const plotH = H - M.top - M.bottom;
  const xAt = (ti) => M.left + (ti / YEARS) * plotW;
  const yAt = (pv) => M.top + (1 - Math.max(0, Math.min(100, pv)) / 100) * plotH;

  function pathFor(sim) {
    let d = '';
    for (let i = 0; i < sim.t.length; i++) {
      d += `${i === 0 ? 'M' : 'L'} ${xAt(sim.t[i]).toFixed(1)} ${yAt(sim.p[i]).toFixed(1)} `;
    }
    return d.trim();
  }

  function draw() {
    const { Wp, f, a, kappa } = params;
    const sim = simulateLumped({ Wp, f, a, kappa, years: YEARS });
    const ref = simulateLumped({ Wp, f: 0, a, kappa, years: YEARS }); // no-reinjection reference

    const regime = !sim.open ? labels.regimeClosed
      : (sim.stabilises ? labels.regimeOpen : labels.regimeDeplete);
    const regimeColor = (sim.open && sim.stabilises) ? '#4d7a3a' : '#a05050';

    const showAsymptote = sim.open && sim.pInf > 0 && sim.pInf < 100;

    // y gridlines at 0,25,50,75,100
    let grid = '';
    for (const gv of [0, 25, 50, 75, 100]) {
      grid += `<line x1="${M.left}" y1="${yAt(gv)}" x2="${M.left + plotW}" y2="${yAt(gv)}" stroke="var(--line-soft)" stroke-dasharray="2 2" />`;
      grid += `<text x="${M.left - 6}" y="${yAt(gv) + 3}" text-anchor="end" font-size="10" fill="var(--ink-mute)">${gv}</text>`;
    }
    // x ticks every 10 yr
    let xticks = '';
    for (let yr = 0; yr <= YEARS; yr += 10) {
      xticks += `<text x="${xAt(yr)}" y="${M.top + plotH + 16}" text-anchor="middle" font-size="10" fill="var(--ink-mute)">${yr}</text>`;
    }

    host.canvasRoot.innerHTML = `
      <svg viewBox="0 0 ${W} ${H}" width="100%" preserveAspectRatio="xMidYMid meet" class="viz-svg">
        <rect x="0" y="0" width="${W}" height="${H}" fill="var(--bg-elev-1)" />
        ${grid}
        <line x1="${M.left}" y1="${M.top}" x2="${M.left}" y2="${M.top + plotH}" stroke="var(--line)" />
        <line x1="${M.left}" y1="${M.top + plotH}" x2="${M.left + plotW}" y2="${M.top + plotH}" stroke="var(--line)" />
        ${xticks}
        <text x="${M.left + plotW / 2}" y="${M.top + plotH + 32}" text-anchor="middle" font-size="11" fill="var(--ink-mute)">${labels.xlabel}</text>
        <text x="${M.left - 36}" y="${M.top + plotH / 2}" text-anchor="middle" font-size="11" fill="var(--ink-mute)" transform="rotate(-90 ${M.left - 36} ${M.top + plotH / 2})">${labels.ylabel}</text>

        ${showAsymptote ? `<line x1="${M.left}" y1="${yAt(sim.pInf)}" x2="${M.left + plotW}" y2="${yAt(sim.pInf)}" stroke="var(--gold)" stroke-width="1" stroke-dasharray="5 3" opacity="0.9" />` : ''}

        <!-- no-reinjection reference -->
        <path d="${pathFor(ref)}" fill="none" stroke="var(--ink-mute)" stroke-width="1.2" stroke-dasharray="4 3" opacity="0.7" />
        <!-- with-reinjection main curve -->
        <path d="${pathFor(sim)}" fill="none" stroke="var(--azul)" stroke-width="2" />

        <!-- legend -->
        <g transform="translate(${M.left + plotW + 10}, ${M.top + 6})" font-size="10" fill="var(--ink-mute)">
          <line x1="0" y1="0" x2="18" y2="0" stroke="var(--azul)" stroke-width="2" /><text x="22" y="3">${labels.curve}</text>
          <line x1="0" y1="16" x2="18" y2="16" stroke="var(--ink-mute)" stroke-width="1.2" stroke-dasharray="4 3" /><text x="22" y="19">${labels.refCurve}</text>
          ${showAsymptote ? `<line x1="0" y1="32" x2="18" y2="32" stroke="var(--gold)" stroke-width="1" stroke-dasharray="5 3" /><text x="22" y="35">${labels.asymptote}</text>` : ''}
        </g>
      </svg>
    `;

    const pinfText = sim.open
      ? (sim.pInf > 0 ? `${sim.pInf.toFixed(1)}%` : `≤ 0 (${lang === 'id' ? 'deplesi' : 'depletes'})`)
      : (lang === 'id' ? '— (tertutup)' : '— (closed)');
    const tauText = sim.open ? `${sim.tau.toFixed(1)} ${labels.yr}` : '∞';

    host.readoutRoot.innerHTML = `
      <div class="viz-readout-row">
        <span><strong>${labels.pinf}</strong> = ${pinfText}</span>
        <span class="dot">·</span>
        <span><strong>${labels.tau}</strong> = ${tauText}</span>
        <span class="dot">·</span>
        <span><strong>${labels.netw}</strong> = ${sim.net.toFixed(1)}</span>
      </div>
      <div class="viz-readout-row" style="color:${regimeColor};font-weight:500;">${regime}</div>
    `;
  }

  // ── Bind controls ──────────────────────────────────────────────────
  const wpIn = host.controlsRoot.querySelector('#viz-lump-wp');
  const fIn = host.controlsRoot.querySelector('#viz-lump-f');
  const aIn = host.controlsRoot.querySelector('#viz-lump-a');
  const kIn = host.controlsRoot.querySelector('#viz-lump-k');
  const wpShow = host.controlsRoot.querySelector('[data-viz-show="wp"]');
  const fShow = host.controlsRoot.querySelector('[data-viz-show="f"]');
  const aShow = host.controlsRoot.querySelector('[data-viz-show="a"]');
  const kShow = host.controlsRoot.querySelector('[data-viz-show="k"]');

  wpIn.addEventListener('input', () => { params.Wp = parseFloat(wpIn.value); wpShow.textContent = params.Wp; draw(); });
  fIn.addEventListener('input', () => { params.f = parseFloat(fIn.value); fShow.textContent = params.f.toFixed(2); draw(); });
  aIn.addEventListener('input', () => { params.a = parseFloat(aIn.value); aShow.textContent = params.a.toFixed(2); draw(); });
  kIn.addEventListener('input', () => { params.kappa = parseFloat(kIn.value); kShow.textContent = params.kappa; draw(); });

  host.onReset(() => {
    wpIn.value = params.Wp; fIn.value = params.f; aIn.value = params.a; kIn.value = params.kappa;
    wpShow.textContent = params.Wp; fShow.textContent = params.f.toFixed(2);
    aShow.textContent = params.a.toFixed(2); kShow.textContent = params.kappa;
    draw();
  });

  draw();
});

// Export lumped-reservoir solver for testing / external use
export { simulateLumped };

// ─── Dealer gamma-flip / hedging-flow simulator ────────────────────────
//
// Stylised but internally exact model of options-dealer gamma exposure (GEX)
// across spot, and the gamma-flip level where dealer hedging switches from
// AMPLIFYING (short gamma: buy higher / sell lower) to PINNING (long gamma:
// sell higher / buy lower). Used by the @Husslin_ dealer-flows deep-dive.
//
// The gamma is EXACT Black-Scholes gamma (zero rates/divs):
//   Γ(S,K,σ,τ) = φ(d1) / (S·σ·√τ),  d1 = [ln(S/K) + ½σ²τ] / (σ√τ)
// Dealers are taken to be LONG gamma from a call ladder (upper strikes) and
// SHORT gamma from a customer put ladder (lower strikes, scaled by putDemand
// — the protective-put skew). Net notional GEX(S) = Σ w_i·Γ(S,K_i)·S². Because
// each strike's gamma peaks near S≈K, put (negative) gamma dominates at low
// spot and call (positive) gamma at high spot, so GEX crosses zero — the
// GAMMA FLIP. More put demand pushes the short-gamma region (and the flip) up.
//
// This is an ILLUSTRATIVE model of the MECHANISM (sign of gamma → hedging
// direction), not real dealer-positioning data. Verified by
// scripts/verify-dealer-gamma-sim.mjs (exact gamma + flip + monotonicity).

function bsGamma(S, K, sigma, tau) {
  if (S <= 0 || K <= 0 || sigma <= 0 || tau <= 0) return 0;
  const d1 = (Math.log(S / K) + 0.5 * sigma * sigma * tau) / (sigma * Math.sqrt(tau));
  const pdf = Math.exp(-0.5 * d1 * d1) / Math.sqrt(2 * Math.PI);
  return pdf / (S * sigma * Math.sqrt(tau));
}

function simulateDealerGamma({ spot, sigma, tau, putDemand, sMin = 70, sMax = 130, nGrid = 121 }) {
  const callStrikes = [100, 105, 110, 115]; // dealers long gamma (customers short calls / dealers long)
  const putStrikes = [85, 90, 95, 100];     // dealers short gamma (customers buy protective puts)
  const gexAt = (S) => {
    let g = 0;
    for (const K of callStrikes) g += 1 * bsGamma(S, K, sigma, tau) * S * S;
    for (const K of putStrikes) g += -putDemand * bsGamma(S, K, sigma, tau) * S * S;
    return g;
  };
  const xs = new Float64Array(nGrid);
  const ys = new Float64Array(nGrid);
  for (let i = 0; i < nGrid; i++) {
    const S = sMin + (sMax - sMin) * i / (nGrid - 1);
    xs[i] = S;
    ys[i] = gexAt(S);
  }
  // Gamma flip = first sign change of GEX(S), bracketed on the grid then
  // refined by bisection so the reported level is accurate (GEX(flip) ≈ 0).
  let flip = null;
  for (let i = 1; i < nGrid; i++) {
    if ((ys[i - 1] <= 0 && ys[i] > 0) || (ys[i - 1] >= 0 && ys[i] < 0)) {
      let a = xs[i - 1], b = xs[i], fa = ys[i - 1];
      for (let k = 0; k < 60; k++) {
        const m = 0.5 * (a + b), fm = gexAt(m);
        if (fm === 0) { a = b = m; break; }
        if ((fa <= 0 && fm > 0) || (fa >= 0 && fm < 0)) { b = m; } else { a = m; fa = fm; }
      }
      flip = 0.5 * (a + b);
      break;
    }
  }
  const gexSpot = gexAt(spot);
  const regime = gexSpot < 0 ? 'short' : 'long'; // short γ = amplify; long γ = pin
  return { xs, ys, flip, gexSpot, regime, gexAt, callStrikes, putStrikes };
}

registerComponent('DealerGammaSim', function DealerGammaSim(host, params, lang) {
  const W = 640, H = 380;
  const M = { top: 24, right: 132, bottom: 38, left: 56 };
  const S_MIN = 70, S_MAX = 130;

  const labels = lang === 'id' ? {
    spot: 'Spot $S$ (index = 100)',
    sigma: 'Implied vol $\\sigma$',
    tau: 'Waktu ke expiry $\\tau$ (thn)',
    put: 'Permintaan put (skew)',
    x: 'Spot',
    y: 'Net dealer GEX (gamma)',
    flip: 'Gamma flip',
    short: 'SHORT γ — dealer AMPLIFIKASI (beli naik / jual turun)',
    long: 'LONG γ — dealer PIN (jual naik / beli turun)',
    regimeShort: 'Di spot: SHORT gamma → hedging ngamplifikasi gerakan (momentum/trend)',
    regimeLong: 'Di spot: LONG gamma → hedging nge-pin harga (mean-revert/range)',
    flowUp: 'Untuk +Δspot, dealer harus',
    buy: 'BELI', sell: 'JUAL',
  } : {
    spot: 'Spot $S$ (index = 100)',
    sigma: 'Implied vol $\\sigma$',
    tau: 'Time to expiry $\\tau$ (yr)',
    put: 'Put demand (skew)',
    x: 'Spot',
    y: 'Net dealer GEX (gamma)',
    flip: 'Gamma flip',
    short: 'SHORT γ — dealers AMPLIFY (buy higher / sell lower)',
    long: 'LONG γ — dealers PIN (sell higher / buy lower)',
    regimeShort: 'At spot: SHORT gamma → hedging amplifies moves (momentum/trend)',
    regimeLong: 'At spot: LONG gamma → hedging pins price (mean-revert/range)',
    flowUp: 'For a +Δspot, dealers must',
    buy: 'BUY', sell: 'SELL',
  };

  host.controlsRoot.innerHTML = `
    <div class="viz-control-row">
      <label class="viz-control-label" for="viz-gex-s">${labels.spot}</label>
      <input type="range" id="viz-gex-s" min="${S_MIN}" max="${S_MAX}" step="1" value="${params.spot}" />
      <span class="viz-control-value" data-viz-show="s">${params.spot}</span>
    </div>
    <div class="viz-control-row">
      <label class="viz-control-label" for="viz-gex-sig">${labels.sigma}</label>
      <input type="range" id="viz-gex-sig" min="0.2" max="1.5" step="0.05" value="${params.sigma}" />
      <span class="viz-control-value" data-viz-show="sig">${params.sigma.toFixed(2)}</span>
    </div>
    <div class="viz-control-row">
      <label class="viz-control-label" for="viz-gex-tau">${labels.tau}</label>
      <input type="range" id="viz-gex-tau" min="0.02" max="0.5" step="0.02" value="${params.tau}" />
      <span class="viz-control-value" data-viz-show="tau">${params.tau.toFixed(2)}</span>
    </div>
    <div class="viz-control-row">
      <label class="viz-control-label" for="viz-gex-pd">${labels.put}</label>
      <input type="range" id="viz-gex-pd" min="0.4" max="2" step="0.1" value="${params.putDemand}" />
      <span class="viz-control-value" data-viz-show="pd">${params.putDemand.toFixed(1)}</span>
    </div>
  `;

  const plotW = W - M.left - M.right;
  const plotH = H - M.top - M.bottom;
  const xAt = (S) => M.left + ((S - S_MIN) / (S_MAX - S_MIN)) * plotW;

  function draw() {
    const { spot, sigma, tau, putDemand } = params;
    const sim = simulateDealerGamma({ spot, sigma, tau, putDemand, sMin: S_MIN, sMax: S_MAX });
    let maxAbs = 1e-9;
    for (let i = 0; i < sim.ys.length; i++) maxAbs = Math.max(maxAbs, Math.abs(sim.ys[i]));
    const yAt = (g) => M.top + (1 - (g + maxAbs) / (2 * maxAbs)) * plotH;
    const yZero = yAt(0);

    let curve = '';
    for (let i = 0; i < sim.xs.length; i++) {
      curve += `${i === 0 ? 'M' : 'L'} ${xAt(sim.xs[i]).toFixed(1)} ${yAt(sim.ys[i]).toFixed(1)} `;
    }
    const flipX = sim.flip != null ? xAt(sim.flip) : null;
    const regime = sim.regime;
    const regimeText = regime === 'short' ? labels.regimeShort : labels.regimeLong;
    const regimeColor = regime === 'short' ? '#a05050' : '#4d7a3a';
    const flowDir = regime === 'short' ? labels.buy : labels.sell; // +Δspot: short γ → buy; long γ → sell

    // shaded regions split at the flip
    const shortFill = 'rgba(160,80,80,0.10)', longFill = 'rgba(77,122,58,0.10)';
    let regions = '';
    if (flipX != null) {
      // left of flip = short γ (GEX<0 there given our skew), right = long γ
      regions += `<rect x="${M.left}" y="${M.top}" width="${(flipX - M.left).toFixed(1)}" height="${plotH}" fill="${shortFill}" />`;
      regions += `<rect x="${flipX.toFixed(1)}" y="${M.top}" width="${(M.left + plotW - flipX).toFixed(1)}" height="${plotH}" fill="${longFill}" />`;
    }

    host.canvasRoot.innerHTML = `
      <svg viewBox="0 0 ${W} ${H}" width="100%" preserveAspectRatio="xMidYMid meet" class="viz-svg">
        <rect x="0" y="0" width="${W}" height="${H}" fill="var(--bg-elev-1)" />
        ${regions}
        <!-- zero line -->
        <line x1="${M.left}" y1="${yZero.toFixed(1)}" x2="${M.left + plotW}" y2="${yZero.toFixed(1)}" stroke="var(--line)" stroke-dasharray="3 2" />
        <text x="${M.left - 6}" y="${(yZero + 3).toFixed(1)}" text-anchor="end" font-size="10" fill="var(--ink-mute)">0</text>
        <!-- axes -->
        <line x1="${M.left}" y1="${M.top}" x2="${M.left}" y2="${M.top + plotH}" stroke="var(--line)" />
        <line x1="${M.left}" y1="${M.top + plotH}" x2="${M.left + plotW}" y2="${M.top + plotH}" stroke="var(--line)" />
        ${[80, 90, 100, 110, 120].map(v => `<text x="${xAt(v).toFixed(1)}" y="${M.top + plotH + 16}" text-anchor="middle" font-size="10" fill="var(--ink-mute)">${v}</text>`).join('')}
        <text x="${M.left + plotW / 2}" y="${M.top + plotH + 32}" text-anchor="middle" font-size="11" fill="var(--ink-mute)">${labels.x}</text>
        <text x="${M.left - 40}" y="${M.top + plotH / 2}" text-anchor="middle" font-size="11" fill="var(--ink-mute)" transform="rotate(-90 ${M.left - 40} ${M.top + plotH / 2})">${labels.y}</text>

        <!-- GEX curve -->
        <path d="${curve}" fill="none" stroke="var(--azul)" stroke-width="2" />

        <!-- gamma flip -->
        ${flipX != null ? `<line x1="${flipX.toFixed(1)}" y1="${M.top}" x2="${flipX.toFixed(1)}" y2="${M.top + plotH}" stroke="var(--gold)" stroke-width="1.5" stroke-dasharray="5 3" />
        <text x="${flipX.toFixed(1)}" y="${M.top - 6}" text-anchor="middle" font-size="10" fill="var(--gold)">${labels.flip} ${sim.flip.toFixed(1)}</text>` : ''}

        <!-- current spot -->
        <line x1="${xAt(spot).toFixed(1)}" y1="${M.top}" x2="${xAt(spot).toFixed(1)}" y2="${M.top + plotH}" stroke="${regimeColor}" stroke-width="1.5" />
        <circle cx="${xAt(spot).toFixed(1)}" cy="${yAt(sim.gexSpot).toFixed(1)}" r="3.5" fill="${regimeColor}" />

        <!-- legend -->
        <g transform="translate(${M.left + plotW + 8}, ${M.top + 6})" font-size="9" fill="var(--ink-mute)">
          <rect x="0" y="-4" width="10" height="10" fill="${shortFill}" stroke="#a05050" stroke-width="0.5"/><text x="14" y="4">short γ</text>
          <rect x="0" y="12" width="10" height="10" fill="${longFill}" stroke="#4d7a3a" stroke-width="0.5"/><text x="14" y="20">long γ</text>
        </g>
      </svg>
    `;

    host.readoutRoot.innerHTML = `
      <div class="viz-readout-row">
        <span><strong>${labels.flip}</strong> = ${sim.flip != null ? sim.flip.toFixed(1) : '—'}</span>
        <span class="dot">·</span>
        <span>${labels.flowUp} <strong style="color:${regimeColor}">${flowDir}</strong></span>
      </div>
      <div class="viz-readout-row" style="color:${regimeColor};font-weight:500;">${regimeText}</div>
    `;
  }

  const sIn = host.controlsRoot.querySelector('#viz-gex-s');
  const sigIn = host.controlsRoot.querySelector('#viz-gex-sig');
  const tauIn = host.controlsRoot.querySelector('#viz-gex-tau');
  const pdIn = host.controlsRoot.querySelector('#viz-gex-pd');
  const sShow = host.controlsRoot.querySelector('[data-viz-show="s"]');
  const sigShow = host.controlsRoot.querySelector('[data-viz-show="sig"]');
  const tauShow = host.controlsRoot.querySelector('[data-viz-show="tau"]');
  const pdShow = host.controlsRoot.querySelector('[data-viz-show="pd"]');

  sIn.addEventListener('input', () => { params.spot = parseFloat(sIn.value); sShow.textContent = params.spot; draw(); });
  sigIn.addEventListener('input', () => { params.sigma = parseFloat(sigIn.value); sigShow.textContent = params.sigma.toFixed(2); draw(); });
  tauIn.addEventListener('input', () => { params.tau = parseFloat(tauIn.value); tauShow.textContent = params.tau.toFixed(2); draw(); });
  pdIn.addEventListener('input', () => { params.putDemand = parseFloat(pdIn.value); pdShow.textContent = params.putDemand.toFixed(1); draw(); });

  host.onReset(() => {
    sIn.value = params.spot; sigIn.value = params.sigma; tauIn.value = params.tau; pdIn.value = params.putDemand;
    sShow.textContent = params.spot; sigShow.textContent = params.sigma.toFixed(2);
    tauShow.textContent = params.tau.toFixed(2); pdShow.textContent = params.putDemand.toFixed(1);
    draw();
  });

  draw();
});

// Export dealer-gamma solver for testing / external use
export { bsGamma, simulateDealerGamma };

// ─── Volume-profile (market-profile) simulator ─────────────────────────
//
// Builds a volume profile from a synthetic intraday auction, then derives the
// market-profile reading objects used by the @insiliconot modules: the POC
// (point of control — the most-traded price, a magnet), the 70% VALUE AREA
// (built by the standard "expand to the larger neighbour" rule from the POC),
// and the high/low-volume nodes (HVN acceptance shelves / LVN "pockets").
//
// The price path is a seeded mean-reverting / trending walk; volume is one
// unit per bar, so the profile is the time-at-price distribution (a TPO-style
// profile). A low "trend" gives a balanced day (central fat POC); a high
// "trend" gives a migrating / elongated profile. Pure, deterministic given the
// seed — verified by scripts/verify-volume-profile-sim.mjs.

function buildProfile(prices, nBins, lo, hi) {
  const bins = new Float64Array(nBins);
  const w = (hi - lo) / nBins;
  for (let i = 0; i < prices.length; i++) {
    let b = Math.floor((prices[i] - lo) / w);
    if (b < 0) b = 0; else if (b >= nBins) b = nBins - 1;
    bins[b] += 1; // one unit of volume/time per bar
  }
  return { bins, lo, w, nBins };
}

// Canonical Steidlmayer/Dalton value area (the TPO-count rule, Dalton "Markets
// in Profile" 2007): start at the POC, then each step compare the SUM of the two
// rows ABOVE the current band with the SUM of the two rows BELOW, and annex BOTH
// rows of the larger side; repeat until cumulative ≥ fraction·total. (Rows are
// added whole, so coverage typically lands a little above the target.) Edges add
// the single remaining row. Used by both the volume profile and the TPO profile.
function valueArea(bins, pocIdx, fraction) {
  const n = bins.length;
  let total = 0;
  for (let i = 0; i < n; i++) total += bins[i];
  let loI = pocIdx, hiI = pocIdx, acc = bins[pocIdx];
  const target = fraction * total;
  while (acc < target && (loI > 0 || hiI < n - 1)) {
    // sum of up to two rows above the band / below the band
    const above = hiI < n - 1 ? bins[hiI + 1] + (hiI + 2 <= n - 1 ? bins[hiI + 2] : 0) : -Infinity;
    const below = loI > 0 ? bins[loI - 1] + (loI - 2 >= 0 ? bins[loI - 2] : 0) : -Infinity;
    if (above === -Infinity && below === -Infinity) break;
    if (above >= below) {
      hiI += 1; acc += bins[hiI];
      if (hiI < n - 1) { hiI += 1; acc += bins[hiI]; }     // annex the pair
    } else {
      loI -= 1; acc += bins[loI];
      if (loI > 0) { loI -= 1; acc += bins[loI]; }
    }
  }
  return { loI, hiI, acc, total, fracCovered: total > 0 ? acc / total : 0 };
}

function simulateVolumeProfile({ trend, vol, nBars, seed, nBins = 40, fraction = 0.7 }) {
  const rng = makeRng(seed);
  const gauss = makeGaussian(rng);
  const anchor = 100;
  const drift = trend * 0.06;          // per-bar migration when trending
  const meanRev = (1 - trend) * 0.04;  // pull back to anchor when balanced
  const prices = new Float64Array(nBars);
  let p = anchor;
  for (let i = 0; i < nBars; i++) {
    p += drift + vol * gauss() - meanRev * (p - anchor);
    prices[i] = p;
  }
  let lo = Infinity, hi = -Infinity;
  for (let i = 0; i < nBars; i++) { if (prices[i] < lo) lo = prices[i]; if (prices[i] > hi) hi = prices[i]; }
  const pad = Math.max(0.5, (hi - lo) * 0.04);
  lo -= pad; hi += pad;
  const prof = buildProfile(prices, nBins, lo, hi);
  // POC = highest-volume bin
  let pocIdx = 0;
  for (let i = 1; i < nBins; i++) if (prof.bins[i] > prof.bins[pocIdx]) pocIdx = i;
  const va = valueArea(prof.bins, pocIdx, fraction);
  // HVN / LVN classification relative to the mean non-empty bin
  let nonEmpty = 0, vsum = 0;
  for (let i = 0; i < nBins; i++) if (prof.bins[i] > 0) { nonEmpty++; vsum += prof.bins[i]; }
  const mean = nonEmpty > 0 ? vsum / nonEmpty : 0;
  const nodes = [];
  for (let i = 0; i < nBins; i++) {
    let kind = 'mid';
    if (prof.bins[i] >= 1.5 * mean) kind = 'HVN';
    else if (prof.bins[i] > 0 && prof.bins[i] <= 0.5 * mean) kind = 'LVN';
    nodes.push(kind);
  }
  const priceAt = (idx) => lo + (idx + 0.5) * prof.w;
  return { bins: prof.bins, lo, hi, w: prof.w, nBins, pocIdx, pocPrice: priceAt(pocIdx), va, vaLoPrice: priceAt(va.loI), vaHiPrice: priceAt(va.hiI), nodes, mean, priceAt, nBars };
}

registerComponent('VolumeProfileSim', function VolumeProfileSim(host, params, lang) {
  const W = 640, H = 400;
  const M = { top: 20, right: 150, bottom: 34, left: 52 };

  const labels = lang === 'id' ? {
    trend: 'Hari trend ↔ balanced',
    vol: 'Volatilitas',
    nBars: 'Jumlah bar',
    regen: 'Regenerate (seed baru)',
    poc: 'POC', va: 'Value area (70%)', hvn: 'HVN', lvn: 'LVN (pocket)',
    x: 'Volume / waktu di harga', y: 'Harga',
  } : {
    trend: 'Trend day ↔ balanced',
    vol: 'Volatility',
    nBars: 'Number of bars',
    regen: 'Regenerate (new seed)',
    poc: 'POC', va: 'Value area (70%)', hvn: 'HVN', lvn: 'LVN (pocket)',
    x: 'Volume / time at price', y: 'Price',
  };

  host.controlsRoot.innerHTML = `
    <div class="viz-control-row">
      <label class="viz-control-label" for="viz-vp-trend">${labels.trend}</label>
      <input type="range" id="viz-vp-trend" min="0" max="1" step="0.05" value="${params.trend}" />
      <span class="viz-control-value" data-viz-show="trend">${params.trend.toFixed(2)}</span>
    </div>
    <div class="viz-control-row">
      <label class="viz-control-label" for="viz-vp-vol">${labels.vol}</label>
      <input type="range" id="viz-vp-vol" min="0.1" max="1.5" step="0.05" value="${params.vol}" />
      <span class="viz-control-value" data-viz-show="vol">${params.vol.toFixed(2)}</span>
    </div>
    <div class="viz-control-row">
      <label class="viz-control-label" for="viz-vp-n">${labels.nBars}</label>
      <input type="range" id="viz-vp-n" min="80" max="500" step="20" value="${params.nBars}" />
      <span class="viz-control-value" data-viz-show="n">${params.nBars}</span>
    </div>
    <div class="viz-control-row"><button type="button" class="viz-regen-btn">${labels.regen}</button></div>
  `;

  let seed = params.seed || 7;
  const plotW = W - M.left - M.right;
  const plotH = H - M.top - M.bottom;

  function draw() {
    const sim = simulateVolumeProfile({ trend: params.trend, vol: params.vol, nBars: params.nBars, seed });
    let maxBin = 1e-9;
    for (let i = 0; i < sim.bins.length; i++) maxBin = Math.max(maxBin, sim.bins[i]);
    const yAt = (idx) => M.top + (1 - (idx + 0.5) / sim.nBins) * plotH; // high price at top
    const barH = plotH / sim.nBins * 0.86;
    const xLen = (v) => (v / maxBin) * plotW;

    let bars = '';
    for (let i = 0; i < sim.nBins; i++) {
      if (sim.bins[i] <= 0) continue;
      const inVA = i >= sim.va.loI && i <= sim.va.hiI;
      const isPOC = i === sim.pocIdx;
      const fill = isPOC ? 'var(--gold)' : (sim.nodes[i] === 'HVN' ? '#4d7a3a' : (sim.nodes[i] === 'LVN' ? '#a05050' : 'var(--azul)'));
      const opacity = inVA ? 0.9 : 0.45;
      const len = xLen(sim.bins[i]);
      const y = yAt(i) - barH / 2;
      bars += `<rect x="${M.left}" y="${y.toFixed(1)}" width="${len.toFixed(1)}" height="${barH.toFixed(1)}" fill="${fill}" opacity="${opacity}" />`;
    }

    // value-area bracket on the price axis
    const vaTop = yAt(sim.va.hiI) - barH / 2, vaBot = yAt(sim.va.loI) + barH / 2;
    const pocY = yAt(sim.pocIdx);

    host.canvasRoot.innerHTML = `
      <svg viewBox="0 0 ${W} ${H}" width="100%" preserveAspectRatio="xMidYMid meet" class="viz-svg">
        <rect x="0" y="0" width="${W}" height="${H}" fill="var(--bg-elev-1)" />
        <line x1="${M.left}" y1="${M.top}" x2="${M.left}" y2="${M.top + plotH}" stroke="var(--line)" />
        <!-- price ticks -->
        ${[0, 0.25, 0.5, 0.75, 1].map(f => { const idx = (sim.nBins - 1) * f; const yy = yAt(idx); return `<text x="${M.left - 6}" y="${(yy + 3).toFixed(1)}" text-anchor="end" font-size="9" fill="var(--ink-mute)">${sim.priceAt(idx).toFixed(1)}</text>`; }).join('')}
        ${bars}
        <!-- value area bracket -->
        <line x1="${M.left + plotW + 6}" y1="${vaTop.toFixed(1)}" x2="${M.left + plotW + 6}" y2="${vaBot.toFixed(1)}" stroke="var(--ink-mute)" stroke-width="1" />
        <text x="${M.left + plotW + 10}" y="${((vaTop + vaBot) / 2).toFixed(1)}" font-size="9" fill="var(--ink-mute)">${labels.va}</text>
        <!-- POC marker -->
        <line x1="${M.left}" y1="${pocY.toFixed(1)}" x2="${M.left + plotW}" y2="${pocY.toFixed(1)}" stroke="var(--gold)" stroke-width="1" stroke-dasharray="4 3" />
        <text x="${M.left + plotW - 2}" y="${(pocY - 3).toFixed(1)}" text-anchor="end" font-size="9" fill="var(--gold)">${labels.poc} ${sim.pocPrice.toFixed(1)}</text>
        <text x="${M.left + plotW / 2}" y="${M.top + plotH + 26}" text-anchor="middle" font-size="11" fill="var(--ink-mute)">${labels.x}</text>
        <text x="${M.left - 38}" y="${M.top + plotH / 2}" text-anchor="middle" font-size="11" fill="var(--ink-mute)" transform="rotate(-90 ${M.left - 38} ${M.top + plotH / 2})">${labels.y}</text>
        <!-- legend -->
        <g transform="translate(${M.left + plotW + 6}, ${M.top + plotH - 44})" font-size="9" fill="var(--ink-mute)">
          <rect x="0" y="-4" width="9" height="9" fill="var(--gold)"/><text x="13" y="4">${labels.poc}</text>
          <rect x="0" y="10" width="9" height="9" fill="#4d7a3a"/><text x="13" y="18">${labels.hvn}</text>
          <rect x="0" y="24" width="9" height="9" fill="#a05050"/><text x="13" y="32">${labels.lvn}</text>
        </g>
      </svg>
    `;

    host.readoutRoot.innerHTML = `
      <div class="viz-readout-row">
        <span><strong>${labels.poc}</strong> = ${sim.pocPrice.toFixed(1)}</span>
        <span class="dot">·</span>
        <span><strong>${labels.va}</strong> ${sim.vaLoPrice.toFixed(1)}–${sim.vaHiPrice.toFixed(1)} (${(sim.va.fracCovered * 100).toFixed(0)}%)</span>
      </div>
    `;
  }

  const trendIn = host.controlsRoot.querySelector('#viz-vp-trend');
  const volIn = host.controlsRoot.querySelector('#viz-vp-vol');
  const nIn = host.controlsRoot.querySelector('#viz-vp-n');
  const regen = host.controlsRoot.querySelector('.viz-regen-btn');
  const tShow = host.controlsRoot.querySelector('[data-viz-show="trend"]');
  const vShow = host.controlsRoot.querySelector('[data-viz-show="vol"]');
  const nShow = host.controlsRoot.querySelector('[data-viz-show="n"]');

  trendIn.addEventListener('input', () => { params.trend = parseFloat(trendIn.value); tShow.textContent = params.trend.toFixed(2); draw(); });
  volIn.addEventListener('input', () => { params.vol = parseFloat(volIn.value); vShow.textContent = params.vol.toFixed(2); draw(); });
  nIn.addEventListener('input', () => { params.nBars = parseInt(nIn.value, 10); nShow.textContent = params.nBars; draw(); });
  regen.addEventListener('click', () => { seed = (seed * 1664525 + 1013904223) >>> 0; draw(); });

  host.onReset(() => {
    trendIn.value = params.trend; volIn.value = params.vol; nIn.value = params.nBars;
    tShow.textContent = params.trend.toFixed(2); vShow.textContent = params.vol.toFixed(2); nShow.textContent = params.nBars;
    seed = params.seed || 7; draw();
  });

  draw();
});

// Export volume-profile helpers for testing / external use
export { simulateVolumeProfile, buildProfile, valueArea };

// ─── Volatility-surface (raw-SVI) simulator ────────────────────────────
//
// Gatheral's RAW SVI parameterisation of one maturity slice of the implied-
// volatility surface, in total implied variance w = σ_BS²·T as a function of
// log-forward-moneyness k:
//
//   w(k) = a + b·( ρ(k − m) + √((k − m)² + σ²) )
//
//   a  level of variance         b  slope of the wings (b ≥ 0)
//   ρ  skew / rotation (|ρ|<1)    m  horizontal shift     σ  ATM curvature (σ>0)
//
// Implied vol σ_BS(k) = √(w(k)/T). Exact, verifiable facts used below:
//   • minimum total variance  w_min = a + b·σ·√(1−ρ²)  at k* = m − ρσ/√(1−ρ²)
//   • asymptotic wing slopes (in w per k):  right b(1+ρ) · left b(1−ρ)
//   • symmetric about k=m  ⇔  ρ = 0
// No-static-arbitrage checks shown: w_min ≥ 0 (no negative variance) and the
// Lee (2004) moment bound on the large-k slope, b(1+|ρ|) ≤ 2 (a necessary
// butterfly condition; the full Gatheral-Jacquier 2014 g(k)≥0 density test is
// stricter). Ref: Gatheral (2006); Gatheral & Jacquier (2014), Quant. Finance
// 14(1):59–71. Verified by scripts/verify-vol-surface-sim.mjs.

function sviTotalVariance(k, { a, b, rho, m, sigma }) {
  const u = k - m;
  return a + b * (rho * u + Math.sqrt(u * u + sigma * sigma));
}

function simulateVolSurface({ a, b, rho, m, sigma, T, kMin = -0.6, kMax = 0.6, n = 121 }) {
  const p = { a, b, rho, m, sigma };
  const k = new Float64Array(n), w = new Float64Array(n), iv = new Float64Array(n);
  for (let i = 0; i < n; i++) {
    const ki = kMin + (kMax - kMin) * i / (n - 1);
    k[i] = ki;
    const wi = sviTotalVariance(ki, p);
    w[i] = wi;
    iv[i] = wi > 0 && T > 0 ? Math.sqrt(wi / T) : 0;
  }
  const root = Math.sqrt(Math.max(0, 1 - rho * rho));
  const kStar = root > 0 ? m - rho * sigma / root : m;
  const wMin = a + b * sigma * root;             // minimum total variance
  const ivMin = wMin > 0 && T > 0 ? Math.sqrt(wMin / T) : 0;
  const atmW = sviTotalVariance(0, p);
  const atmIv = atmW > 0 && T > 0 ? Math.sqrt(atmW / T) : 0;
  const rightSlope = b * (1 + rho);              // w-slope as k→+∞
  const leftSlope = b * (1 - rho);               // w-slope as k→−∞
  const arbWMin = wMin >= 0;
  const arbWings = b * (1 + Math.abs(rho)) <= 2;  // Lee moment bound (necessary)
  const noArb = arbWMin && arbWings;
  return { k, w, iv, kStar, wMin, ivMin, atmW, atmIv, rightSlope, leftSlope, arbWMin, arbWings, noArb, T };
}

registerComponent('VolSurfaceSVISim', function VolSurfaceSVISim(host, params, lang) {
  const W = 640, H = 390;
  const M = { top: 22, right: 130, bottom: 38, left: 52 };
  const K_MIN = -0.6, K_MAX = 0.6;

  const labels = lang === 'id' ? {
    a: 'a — level variance', b: 'b — slope wing', rho: 'ρ — skew', m: 'm — shift', sigma: 'σ — kurvatur ATM', T: 'T — maturity (thn)',
    x: 'Log-moneyness k = ln(K/F)', y: 'Implied vol σ_BS (%)',
    atm: 'ATM vol', skew: 'Skew (ρ)', wings: 'Slope wing L/R', arbOk: 'Arbitrage-free ✓ (cek w_min≥0 & b(1+|ρ|)≤2)', arbBad: 'KEMUNGKINAN ARBITRASE ✗', minv: 'Min vol',
  } : {
    a: 'a — variance level', b: 'b — wing slope', rho: 'ρ — skew', m: 'm — shift', sigma: 'σ — ATM curvature', T: 'T — maturity (yr)',
    x: 'Log-moneyness k = ln(K/F)', y: 'Implied vol σ_BS (%)',
    atm: 'ATM vol', skew: 'Skew (ρ)', wings: 'Wing slope L/R', arbOk: 'Arbitrage-free ✓ (w_min≥0 & b(1+|ρ|)≤2)', arbBad: 'LIKELY ARBITRAGE ✗', minv: 'Min vol',
  };

  host.controlsRoot.innerHTML = `
    <div class="viz-control-row"><label class="viz-control-label" for="viz-svi-a">${labels.a}</label><input type="range" id="viz-svi-a" min="0" max="0.04" step="0.002" value="${params.a}" /><span class="viz-control-value" data-viz-show="a">${params.a.toFixed(3)}</span></div>
    <div class="viz-control-row"><label class="viz-control-label" for="viz-svi-b">${labels.b}</label><input type="range" id="viz-svi-b" min="0" max="0.5" step="0.01" value="${params.b}" /><span class="viz-control-value" data-viz-show="b">${params.b.toFixed(2)}</span></div>
    <div class="viz-control-row"><label class="viz-control-label" for="viz-svi-rho">${labels.rho}</label><input type="range" id="viz-svi-rho" min="-0.95" max="0.95" step="0.05" value="${params.rho}" /><span class="viz-control-value" data-viz-show="rho">${params.rho.toFixed(2)}</span></div>
    <div class="viz-control-row"><label class="viz-control-label" for="viz-svi-m">${labels.m}</label><input type="range" id="viz-svi-m" min="-0.2" max="0.2" step="0.01" value="${params.m}" /><span class="viz-control-value" data-viz-show="m">${params.m.toFixed(2)}</span></div>
    <div class="viz-control-row"><label class="viz-control-label" for="viz-svi-sig">${labels.sigma}</label><input type="range" id="viz-svi-sig" min="0.02" max="0.4" step="0.01" value="${params.sigma}" /><span class="viz-control-value" data-viz-show="sig">${params.sigma.toFixed(2)}</span></div>
    <div class="viz-control-row"><label class="viz-control-label" for="viz-svi-T">${labels.T}</label><input type="range" id="viz-svi-T" min="0.05" max="1" step="0.05" value="${params.T}" /><span class="viz-control-value" data-viz-show="T">${params.T.toFixed(2)}</span></div>
  `;

  const plotW = W - M.left - M.right, plotH = H - M.top - M.bottom;
  const xAt = (k) => M.left + ((k - K_MIN) / (K_MAX - K_MIN)) * plotW;

  function draw() {
    const sim = simulateVolSurface({ a: params.a, b: params.b, rho: params.rho, m: params.m, sigma: params.sigma, T: params.T, kMin: K_MIN, kMax: K_MAX });
    let ivMax = 1e-9, ivLo = Infinity;
    for (let i = 0; i < sim.iv.length; i++) { ivMax = Math.max(ivMax, sim.iv[i]); ivLo = Math.min(ivLo, sim.iv[i]); }
    const yTop = ivMax * 1.1, yBot = Math.max(0, ivLo * 0.85);
    const yAt = (v) => M.top + (1 - (v - yBot) / (yTop - yBot)) * plotH;

    let curve = '';
    for (let i = 0; i < sim.k.length; i++) curve += `${i === 0 ? 'M' : 'L'} ${xAt(sim.k[i]).toFixed(1)} ${yAt(sim.iv[i]).toFixed(1)} `;
    const curveColor = sim.noArb ? 'var(--azul)' : '#a05050';

    // y gridlines (vol %)
    let grid = '';
    for (let g = 0; g <= 4; g++) {
      const v = yBot + (yTop - yBot) * g / 4;
      grid += `<line x1="${M.left}" y1="${yAt(v).toFixed(1)}" x2="${M.left + plotW}" y2="${yAt(v).toFixed(1)}" stroke="var(--line-soft)" stroke-dasharray="2 2" />`;
      grid += `<text x="${M.left - 6}" y="${(yAt(v) + 3).toFixed(1)}" text-anchor="end" font-size="9" fill="var(--ink-mute)">${(v * 100).toFixed(0)}</text>`;
    }
    let xt = '';
    for (const kv of [-0.4, -0.2, 0, 0.2, 0.4]) xt += `<text x="${xAt(kv).toFixed(1)}" y="${M.top + plotH + 15}" text-anchor="middle" font-size="9" fill="var(--ink-mute)">${kv.toFixed(1)}</text>`;

    host.canvasRoot.innerHTML = `
      <svg viewBox="0 0 ${W} ${H}" width="100%" preserveAspectRatio="xMidYMid meet" class="viz-svg">
        <rect x="0" y="0" width="${W}" height="${H}" fill="var(--bg-elev-1)" />
        ${grid}
        <line x1="${M.left}" y1="${M.top}" x2="${M.left}" y2="${M.top + plotH}" stroke="var(--line)" />
        <line x1="${M.left}" y1="${M.top + plotH}" x2="${M.left + plotW}" y2="${M.top + plotH}" stroke="var(--line)" />
        ${xt}
        <!-- ATM (k=0) -->
        <line x1="${xAt(0).toFixed(1)}" y1="${M.top}" x2="${xAt(0).toFixed(1)}" y2="${M.top + plotH}" stroke="var(--ink-mute)" stroke-dasharray="3 3" opacity="0.6" />
        <text x="${(xAt(0) + 3).toFixed(1)}" y="${M.top + 10}" font-size="9" fill="var(--ink-mute)">ATM</text>
        <!-- smile -->
        <path d="${curve}" fill="none" stroke="${curveColor}" stroke-width="2" />
        <!-- min-vol marker -->
        ${sim.kStar > K_MIN && sim.kStar < K_MAX ? `<circle cx="${xAt(sim.kStar).toFixed(1)}" cy="${yAt(sim.ivMin).toFixed(1)}" r="3" fill="var(--gold)" /><text x="${xAt(sim.kStar).toFixed(1)}" y="${(yAt(sim.ivMin) + 14).toFixed(1)}" text-anchor="middle" font-size="8" fill="var(--gold)">min</text>` : ''}
        <text x="${M.left + plotW / 2}" y="${M.top + plotH + 30}" text-anchor="middle" font-size="11" fill="var(--ink-mute)">${labels.x}</text>
        <text x="${M.left - 38}" y="${M.top + plotH / 2}" text-anchor="middle" font-size="11" fill="var(--ink-mute)" transform="rotate(-90 ${M.left - 38} ${M.top + plotH / 2})">${labels.y}</text>
        <!-- skew arrow annotation -->
        <g transform="translate(${M.left + plotW + 8}, ${M.top + 8})" font-size="9" fill="var(--ink-mute)">
          <text x="0" y="0">${labels.skew}: ${params.rho.toFixed(2)}</text>
          <text x="0" y="14">${params.rho < -0.05 ? (lang === 'id' ? 'puts > calls (equity)' : 'puts > calls (equity)') : (params.rho > 0.05 ? (lang === 'id' ? 'calls > puts' : 'calls > puts') : (lang === 'id' ? 'simetris' : 'symmetric'))}</text>
        </g>
      </svg>
    `;

    const arbColor = sim.noArb ? '#4d7a3a' : '#a05050';
    host.readoutRoot.innerHTML = `
      <div class="viz-readout-row">
        <span><strong>${labels.atm}</strong> = ${(sim.atmIv * 100).toFixed(1)}%</span>
        <span class="dot">·</span>
        <span><strong>${labels.minv}</strong> = ${(sim.ivMin * 100).toFixed(1)}% @ k=${sim.kStar.toFixed(2)}</span>
        <span class="dot">·</span>
        <span><strong>${labels.wings}</strong> = ${sim.leftSlope.toFixed(2)}/${sim.rightSlope.toFixed(2)}</span>
      </div>
      <div class="viz-readout-row" style="color:${arbColor};font-weight:500;">${sim.noArb ? labels.arbOk : labels.arbBad}</div>
    `;
  }

  const ids = [['a', 'a', 3], ['b', 'b', 2], ['rho', 'rho', 2], ['m', 'm', 2], ['sig', 'sigma', 2], ['T', 'T', 2]];
  const map = { a: 'viz-svi-a', b: 'viz-svi-b', rho: 'viz-svi-rho', m: 'viz-svi-m', sig: 'viz-svi-sig', T: 'viz-svi-T' };
  const el = {};
  for (const key of Object.keys(map)) el[key] = host.controlsRoot.querySelector('#' + map[key]);
  el.a.addEventListener('input', () => { params.a = parseFloat(el.a.value); host.controlsRoot.querySelector('[data-viz-show="a"]').textContent = params.a.toFixed(3); draw(); });
  el.b.addEventListener('input', () => { params.b = parseFloat(el.b.value); host.controlsRoot.querySelector('[data-viz-show="b"]').textContent = params.b.toFixed(2); draw(); });
  el.rho.addEventListener('input', () => { params.rho = parseFloat(el.rho.value); host.controlsRoot.querySelector('[data-viz-show="rho"]').textContent = params.rho.toFixed(2); draw(); });
  el.m.addEventListener('input', () => { params.m = parseFloat(el.m.value); host.controlsRoot.querySelector('[data-viz-show="m"]').textContent = params.m.toFixed(2); draw(); });
  el.sig.addEventListener('input', () => { params.sigma = parseFloat(el.sig.value); host.controlsRoot.querySelector('[data-viz-show="sig"]').textContent = params.sigma.toFixed(2); draw(); });
  el.T.addEventListener('input', () => { params.T = parseFloat(el.T.value); host.controlsRoot.querySelector('[data-viz-show="T"]').textContent = params.T.toFixed(2); draw(); });

  host.onReset(() => {
    el.a.value = params.a; el.b.value = params.b; el.rho.value = params.rho; el.m.value = params.m; el.sig.value = params.sigma; el.T.value = params.T;
    host.controlsRoot.querySelector('[data-viz-show="a"]').textContent = params.a.toFixed(3);
    host.controlsRoot.querySelector('[data-viz-show="b"]').textContent = params.b.toFixed(2);
    host.controlsRoot.querySelector('[data-viz-show="rho"]').textContent = params.rho.toFixed(2);
    host.controlsRoot.querySelector('[data-viz-show="m"]').textContent = params.m.toFixed(2);
    host.controlsRoot.querySelector('[data-viz-show="sig"]').textContent = params.sigma.toFixed(2);
    host.controlsRoot.querySelector('[data-viz-show="T"]').textContent = params.T.toFixed(2);
    draw();
  });

  draw();
});

// Export raw-SVI vol-surface helpers for testing / external use
export { sviTotalVariance, simulateVolSurface };

// ─── SSVI full-surface (calendar-arbitrage) simulator ──────────────────
//
// Gatheral & Jacquier's SURFACE SVI (SSVI): one ρ for the whole surface, an
// ATM-total-variance term structure θ(T), and a smile function φ(θ):
//
//   w(k;T) = ½·θ(T)·( 1 + ρ·φ(T)·k + √( (φ(T)k + ρ)² + 1 − ρ² ) )
//
// so w(0;T) = θ(T) (ATM total variance) exactly. Here φ(θ) = η·θ^(−γ).
// CALENDAR-arbitrage-free ⇔ the total-variance slices never cross, i.e.
// T ↦ w(k;T) is non-decreasing for every k (requires θ(T) non-decreasing).
// BUTTERFLY-free per slice ⇔ θφ(1+|ρ|) < 4 and θφ²(1+|ρ|) ≤ 4.
// Ref: Gatheral & Jacquier (2014), Quant. Finance 14(1):59–71 (arXiv:1204.0646).
// Verified by scripts/verify-ssvi-sim.mjs.

function ssviTotalVariance(k, { theta, phi, rho }) {
  return 0.5 * theta * (1 + rho * phi * k + Math.sqrt((phi * k + rho) ** 2 + 1 - rho * rho));
}

function simulateSSVI({ sigma0, slope, rho, eta, gamma, maturities = [0.08, 0.25, 0.5, 1, 2], kMin = -0.5, kMax = 0.5, n = 81 }) {
  const k = new Float64Array(n);
  for (let i = 0; i < n; i++) k[i] = kMin + (kMax - kMin) * i / (n - 1);
  const slices = maturities.map((T) => {
    const sigatm = Math.max(0.02, sigma0 + slope * (T - 0.5));
    const theta = sigatm * sigatm * T;             // ATM total variance
    const phi = eta * Math.pow(theta, -gamma);
    const w = new Float64Array(n);
    for (let i = 0; i < n; i++) w[i] = ssviTotalVariance(k[i], { theta, phi, rho });
    const bflyA = theta * phi * (1 + Math.abs(rho));        // must be < 4
    const bflyB = theta * phi * phi * (1 + Math.abs(rho));  // must be ≤ 4
    const butterflyOk = bflyA < 4 && bflyB <= 4;
    return { T, sigatm, theta, phi, w, bflyA, bflyB, butterflyOk };
  });
  let thetaMono = true;
  for (let i = 1; i < slices.length; i++) if (slices[i].theta < slices[i - 1].theta - 1e-12) thetaMono = false;
  // Calendar arbitrage = a later slice dips below an earlier one at some k.
  let calendarArb = false, crossPair = null;
  for (let i = 1; i < slices.length && !calendarArb; i++) {
    for (let j = 0; j < n; j++) {
      if (slices[i].w[j] < slices[i - 1].w[j] - 1e-9) { calendarArb = true; crossPair = [slices[i - 1].T, slices[i].T]; break; }
    }
  }
  const butterflyAllOk = slices.every((s) => s.butterflyOk);
  const noArb = !calendarArb && butterflyAllOk;
  return { k, slices, thetaMono, calendarArb, crossPair, butterflyAllOk, noArb };
}

registerComponent('SSVISurfaceSim', function SSVISurfaceSim(host, params, lang) {
  const W = 640, H = 390;
  const M = { top: 20, right: 120, bottom: 38, left: 56 };
  const K_MIN = -0.5, K_MAX = 0.5;

  const labels = lang === 'id' ? {
    s0: 'σ₀ — ATM vol dasar', slope: 'Slope term-structure ATM', rho: 'ρ — skew (1 utk surface)', eta: 'η — amplitudo smile', gamma: 'γ — decay smile vs maturity',
    x: 'Log-moneyness k', y: 'Total variance w(k,T)',
    calOk: 'Bebas calendar-arb ✓ (slice gak nyilang)', calBad: 'CALENDAR ARBITRAGE ✗ — slice nyilang',
    bflyOk: 'butterfly ok', bflyBad: 'butterfly ✗',
  } : {
    s0: 'σ₀ — base ATM vol', slope: 'ATM term-structure slope', rho: 'ρ — skew (one for surface)', eta: 'η — smile amplitude', gamma: 'γ — smile decay vs maturity',
    x: 'Log-moneyness k', y: 'Total variance w(k,T)',
    calOk: 'Calendar-arbitrage-free ✓ (slices do not cross)', calBad: 'CALENDAR ARBITRAGE ✗ — slices cross',
    bflyOk: 'butterfly ok', bflyBad: 'butterfly ✗',
  };

  host.controlsRoot.innerHTML = `
    <div class="viz-control-row"><label class="viz-control-label" for="viz-ss-s0">${labels.s0}</label><input type="range" id="viz-ss-s0" min="0.1" max="1.2" step="0.05" value="${params.sigma0}" /><span class="viz-control-value" data-viz-show="s0">${params.sigma0.toFixed(2)}</span></div>
    <div class="viz-control-row"><label class="viz-control-label" for="viz-ss-slope">${labels.slope}</label><input type="range" id="viz-ss-slope" min="-0.5" max="0.5" step="0.05" value="${params.slope}" /><span class="viz-control-value" data-viz-show="slope">${params.slope.toFixed(2)}</span></div>
    <div class="viz-control-row"><label class="viz-control-label" for="viz-ss-rho">${labels.rho}</label><input type="range" id="viz-ss-rho" min="-0.9" max="0.9" step="0.05" value="${params.rho}" /><span class="viz-control-value" data-viz-show="rho">${params.rho.toFixed(2)}</span></div>
    <div class="viz-control-row"><label class="viz-control-label" for="viz-ss-eta">${labels.eta}</label><input type="range" id="viz-ss-eta" min="0.1" max="5" step="0.1" value="${params.eta}" /><span class="viz-control-value" data-viz-show="eta">${params.eta.toFixed(1)}</span></div>
    <div class="viz-control-row"><label class="viz-control-label" for="viz-ss-gam">${labels.gamma}</label><input type="range" id="viz-ss-gam" min="0" max="1" step="0.05" value="${params.gamma}" /><span class="viz-control-value" data-viz-show="gam">${params.gamma.toFixed(2)}</span></div>
  `;

  const plotW = W - M.left - M.right, plotH = H - M.top - M.bottom;
  const xAt = (k) => M.left + ((k - K_MIN) / (K_MAX - K_MIN)) * plotW;
  // maturity colours: short=light azul → long=gold
  const sliceColor = (i, nS, arb) => arb ? '#a05050' : `hsl(${210 - (210 - 45) * i / (nS - 1)}, 60%, ${55 - 10 * i / (nS - 1)}%)`;

  function draw() {
    const sim = simulateSSVI({ sigma0: params.sigma0, slope: params.slope, rho: params.rho, eta: params.eta, gamma: params.gamma, kMin: K_MIN, kMax: K_MAX });
    let wMax = 1e-9; for (const s of sim.slices) for (let i = 0; i < s.w.length; i++) wMax = Math.max(wMax, s.w[i]);
    const yAt = (w) => M.top + (1 - w / (wMax * 1.08)) * plotH;

    let curves = '', legend = '';
    sim.slices.forEach((s, i) => {
      let d = '';
      for (let j = 0; j < sim.k.length; j++) d += `${j === 0 ? 'M' : 'L'} ${xAt(sim.k[j]).toFixed(1)} ${yAt(s.w[j]).toFixed(1)} `;
      const col = sliceColor(i, sim.slices.length, sim.calendarArb);
      curves += `<path d="${d}" fill="none" stroke="${col}" stroke-width="1.8" opacity="0.9" />`;
      const ly = M.top + 4 + i * 13;
      legend += `<line x1="${M.left + plotW + 8}" y1="${ly}" x2="${M.left + plotW + 20}" y2="${ly}" stroke="${col}" stroke-width="2" /><text x="${M.left + plotW + 23}" y="${ly + 3}" font-size="8" fill="var(--ink-mute)">T=${s.T}${s.butterflyOk ? '' : ' ⚠'}</text>`;
    });

    let grid = '';
    for (let g = 0; g <= 4; g++) {
      const w = wMax * 1.08 * g / 4;
      grid += `<line x1="${M.left}" y1="${yAt(w).toFixed(1)}" x2="${M.left + plotW}" y2="${yAt(w).toFixed(1)}" stroke="var(--line-soft)" stroke-dasharray="2 2" /><text x="${M.left - 6}" y="${(yAt(w) + 3).toFixed(1)}" text-anchor="end" font-size="9" fill="var(--ink-mute)">${w.toFixed(3)}</text>`;
    }
    let xt = ''; for (const kv of [-0.4, -0.2, 0, 0.2, 0.4]) xt += `<text x="${xAt(kv).toFixed(1)}" y="${M.top + plotH + 15}" text-anchor="middle" font-size="9" fill="var(--ink-mute)">${kv.toFixed(1)}</text>`;

    host.canvasRoot.innerHTML = `
      <svg viewBox="0 0 ${W} ${H}" width="100%" preserveAspectRatio="xMidYMid meet" class="viz-svg">
        <rect x="0" y="0" width="${W}" height="${H}" fill="var(--bg-elev-1)" />
        ${grid}
        <line x1="${M.left}" y1="${M.top}" x2="${M.left}" y2="${M.top + plotH}" stroke="var(--line)" />
        <line x1="${M.left}" y1="${M.top + plotH}" x2="${M.left + plotW}" y2="${M.top + plotH}" stroke="var(--line)" />
        ${xt}
        <line x1="${xAt(0).toFixed(1)}" y1="${M.top}" x2="${xAt(0).toFixed(1)}" y2="${M.top + plotH}" stroke="var(--ink-mute)" stroke-dasharray="3 3" opacity="0.5" />
        <text x="${(xAt(0) + 3).toFixed(1)}" y="${M.top + 9}" font-size="8" fill="var(--ink-mute)">ATM (w=θ)</text>
        ${curves}
        ${legend}
        <text x="${M.left + plotW / 2}" y="${M.top + plotH + 30}" text-anchor="middle" font-size="11" fill="var(--ink-mute)">${labels.x}</text>
        <text x="${M.left - 40}" y="${M.top + plotH / 2}" text-anchor="middle" font-size="11" fill="var(--ink-mute)" transform="rotate(-90 ${M.left - 40} ${M.top + plotH / 2})">${labels.y}</text>
      </svg>
    `;

    const calColor = sim.calendarArb ? '#a05050' : '#4d7a3a';
    const calText = sim.calendarArb ? `${labels.calBad} (T=${sim.crossPair[0]}↔${sim.crossPair[1]})` : labels.calOk;
    const bfly = sim.butterflyAllOk ? labels.bflyOk : labels.bflyBad;
    host.readoutRoot.innerHTML = `
      <div class="viz-readout-row" style="color:${calColor};font-weight:500;">${calText}</div>
      <div class="viz-readout-row"><span>${sim.slices.length} maturity slices · θ ${sim.thetaMono ? '↑ monotone' : 'NON-monotone'} · ${bfly}</span></div>
    `;
  }

  const map = { s0: 'viz-ss-s0', slope: 'viz-ss-slope', rho: 'viz-ss-rho', eta: 'viz-ss-eta', gam: 'viz-ss-gam' };
  const el = {}; for (const key of Object.keys(map)) el[key] = host.controlsRoot.querySelector('#' + map[key]);
  el.s0.addEventListener('input', () => { params.sigma0 = parseFloat(el.s0.value); host.controlsRoot.querySelector('[data-viz-show="s0"]').textContent = params.sigma0.toFixed(2); draw(); });
  el.slope.addEventListener('input', () => { params.slope = parseFloat(el.slope.value); host.controlsRoot.querySelector('[data-viz-show="slope"]').textContent = params.slope.toFixed(2); draw(); });
  el.rho.addEventListener('input', () => { params.rho = parseFloat(el.rho.value); host.controlsRoot.querySelector('[data-viz-show="rho"]').textContent = params.rho.toFixed(2); draw(); });
  el.eta.addEventListener('input', () => { params.eta = parseFloat(el.eta.value); host.controlsRoot.querySelector('[data-viz-show="eta"]').textContent = params.eta.toFixed(1); draw(); });
  el.gam.addEventListener('input', () => { params.gamma = parseFloat(el.gam.value); host.controlsRoot.querySelector('[data-viz-show="gam"]').textContent = params.gamma.toFixed(2); draw(); });

  host.onReset(() => {
    el.s0.value = params.sigma0; el.slope.value = params.slope; el.rho.value = params.rho; el.eta.value = params.eta; el.gam.value = params.gamma;
    host.controlsRoot.querySelector('[data-viz-show="s0"]').textContent = params.sigma0.toFixed(2);
    host.controlsRoot.querySelector('[data-viz-show="slope"]').textContent = params.slope.toFixed(2);
    host.controlsRoot.querySelector('[data-viz-show="rho"]').textContent = params.rho.toFixed(2);
    host.controlsRoot.querySelector('[data-viz-show="eta"]').textContent = params.eta.toFixed(1);
    host.controlsRoot.querySelector('[data-viz-show="gam"]').textContent = params.gamma.toFixed(2);
    draw();
  });

  draw();
});

// Export SSVI helpers for testing / external use
export { ssviTotalVariance, simulateSSVI };

// ─── Perpetual funding-rate / basis simulator ──────────────────────────
//
// A perpetual swap has no expiry; a periodic FUNDING payment between longs and
// shorts anchors it to spot. The standard exchange funding rate (BitMEX /
// Binance / Hyperliquid) as a function of the premium index P (= perp vs spot)
// and the interest rate I, with a ±c clamp:
//
//   F(P) = P + clamp(I − P, −c, c)
//
// Three regimes (continuous, non-decreasing in P): F = I (flat) for the small-
// premium band P ∈ [I−c, I+c]; F = P − c for a rich premium (P > I+c, longs
// pay ≈ the premium); F = P + c for a discount (P < I−c). Annualised funding =
// F × (periods/yr). The SIGN of F = who pays = the crowded side (Husslin's perp-
// premium read), and the cash-and-carry (long spot / short perp) earns +F when
// the premium is positive (the "crypto carry"). Refs: exchange funding
// methodology; Schmeling, Schrimpf & Todorov (2023, BIS WP 1087, "Crypto
// Carry"); Ackerer, Hugonnier & Jermann (2024, "Perpetual Futures Pricing").
// All values in PERCENT per funding interval. Verified by
// scripts/verify-funding-sim.mjs.

function fundingRate(premium, interest, clampC) {
  const x = interest - premium;
  const clamped = Math.max(-clampC, Math.min(clampC, x));
  return premium + clamped;
}

function simulateFunding({ premium, interest, clampC, intervalHours, pMin = -0.2, pMax = 0.2, n = 121 }) {
  const periodsPerYear = (365 * 24) / intervalHours;
  const curve = [];
  for (let i = 0; i < n; i++) {
    const P = pMin + (pMax - pMin) * i / (n - 1);
    curve.push({ P, F: fundingRate(P, interest, clampC) });
  }
  const F = fundingRate(premium, interest, clampC);
  const annualized = F * periodsPerYear;            // percent / year
  const kinkLo = interest - clampC, kinkHi = interest + clampC;
  const region = premium < kinkLo ? 'cheapWing' : (premium > kinkHi ? 'richWing' : 'flat');
  const whoPays = F > 1e-12 ? 'longs' : (F < -1e-12 ? 'shorts' : 'neutral');
  // Positioning read: persistent positive premium = crowded longs (flush risk);
  // persistent negative = MMs net long / shorts pay (upside-squeeze risk).
  const verdict = premium > 1e-9 ? 'flush' : (premium < -1e-9 ? 'squeeze' : 'balanced');
  return { curve, F, annualized, periodsPerYear, kinkLo, kinkHi, region, whoPays, verdict, premium, interest, clampC };
}

registerComponent('FundingRateSim', function FundingRateSim(host, params, lang) {
  const W = 640, H = 380;
  const M = { top: 22, right: 124, bottom: 38, left: 56 };
  const P_MIN = -0.2, P_MAX = 0.2;

  const labels = lang === 'id' ? {
    prem: 'Premium perp P (%/interval)', int: 'Interest I (%)', clamp: 'Clamp c (%)', iv: 'Interval (jam)',
    x: 'Premium perp P (%)', y: 'Funding rate F (%/interval)',
    ann: 'Funding tahunan', pays: 'Yang bayar', longs: 'LONG bayar short', shorts: 'SHORT bayar long', neutral: 'netral',
    flush: 'Long ramai → risiko FLUSH', squeeze: 'MM net long / short bayar → risiko SQUEEZE (upside)', balanced: 'Seimbang',
    carry: 'Cash-and-carry (long spot / short perp) dapet +F saat premium>0',
  } : {
    prem: 'Perp premium P (%/interval)', int: 'Interest I (%)', clamp: 'Clamp c (%)', iv: 'Interval (hours)',
    x: 'Perp premium P (%)', y: 'Funding rate F (%/interval)',
    ann: 'Annualised funding', pays: 'Who pays', longs: 'LONGS pay shorts', shorts: 'SHORTS pay longs', neutral: 'neutral',
    flush: 'Crowded longs → FLUSH risk', squeeze: 'MMs net long / shorts pay → SQUEEZE risk (upside)', balanced: 'Balanced',
    carry: 'Cash-and-carry (long spot / short perp) earns +F when premium>0',
  };

  host.controlsRoot.innerHTML = `
    <div class="viz-control-row"><label class="viz-control-label" for="viz-fund-p">${labels.prem}</label><input type="range" id="viz-fund-p" min="-0.2" max="0.2" step="0.005" value="${params.premium}" /><span class="viz-control-value" data-viz-show="p">${params.premium.toFixed(3)}</span></div>
    <div class="viz-control-row"><label class="viz-control-label" for="viz-fund-i">${labels.int}</label><input type="range" id="viz-fund-i" min="0" max="0.05" step="0.005" value="${params.interest}" /><span class="viz-control-value" data-viz-show="i">${params.interest.toFixed(3)}</span></div>
    <div class="viz-control-row"><label class="viz-control-label" for="viz-fund-c">${labels.clamp}</label><input type="range" id="viz-fund-c" min="0.01" max="0.1" step="0.005" value="${params.clampC}" /><span class="viz-control-value" data-viz-show="c">${params.clampC.toFixed(3)}</span></div>
    <div class="viz-control-row"><label class="viz-control-label" for="viz-fund-iv">${labels.iv}</label><input type="range" id="viz-fund-iv" min="1" max="24" step="1" value="${params.intervalHours}" /><span class="viz-control-value" data-viz-show="iv">${params.intervalHours}</span></div>
  `;

  const plotW = W - M.left - M.right, plotH = H - M.top - M.bottom;
  const xAt = (P) => M.left + ((P - P_MIN) / (P_MAX - P_MIN)) * plotW;

  function draw() {
    const sim = simulateFunding({ premium: params.premium, interest: params.interest, clampC: params.clampC, intervalHours: params.intervalHours, pMin: P_MIN, pMax: P_MAX });
    let fLo = Infinity, fHi = -Infinity;
    for (const pt of sim.curve) { fLo = Math.min(fLo, pt.F); fHi = Math.max(fHi, pt.F); }
    const pad = (fHi - fLo) * 0.12 || 0.02;
    fLo -= pad; fHi += pad;
    const yAt = (F) => M.top + (1 - (F - fLo) / (fHi - fLo)) * plotH;
    const yZero = yAt(0);

    let curve = '';
    sim.curve.forEach((pt, i) => { curve += `${i === 0 ? 'M' : 'L'} ${xAt(pt.P).toFixed(1)} ${yAt(pt.F).toFixed(1)} `; });

    const fColor = sim.F > 0 ? '#a05050' : (sim.F < 0 ? '#4d7a3a' : 'var(--ink-mute)');
    let xt = ''; for (const pv of [-0.1, 0, 0.1]) xt += `<text x="${xAt(pv).toFixed(1)}" y="${M.top + plotH + 15}" text-anchor="middle" font-size="9" fill="var(--ink-mute)">${pv.toFixed(2)}</text>`;

    host.canvasRoot.innerHTML = `
      <svg viewBox="0 0 ${W} ${H}" width="100%" preserveAspectRatio="xMidYMid meet" class="viz-svg">
        <rect x="0" y="0" width="${W}" height="${H}" fill="var(--bg-elev-1)" />
        <!-- zero funding line -->
        ${yZero > M.top && yZero < M.top + plotH ? `<line x1="${M.left}" y1="${yZero.toFixed(1)}" x2="${M.left + plotW}" y2="${yZero.toFixed(1)}" stroke="var(--line)" stroke-dasharray="3 2" /><text x="${M.left - 6}" y="${(yZero + 3).toFixed(1)}" text-anchor="end" font-size="9" fill="var(--ink-mute)">0</text>` : ''}
        <line x1="${M.left}" y1="${M.top}" x2="${M.left}" y2="${M.top + plotH}" stroke="var(--line)" />
        <line x1="${M.left}" y1="${M.top + plotH}" x2="${M.left + plotW}" y2="${M.top + plotH}" stroke="var(--line)" />
        ${xt}
        <!-- clamp kinks (flat band edges) -->
        <line x1="${xAt(sim.kinkLo).toFixed(1)}" y1="${M.top}" x2="${xAt(sim.kinkLo).toFixed(1)}" y2="${M.top + plotH}" stroke="var(--gold)" stroke-dasharray="4 3" opacity="0.6" />
        <line x1="${xAt(sim.kinkHi).toFixed(1)}" y1="${M.top}" x2="${xAt(sim.kinkHi).toFixed(1)}" y2="${M.top + plotH}" stroke="var(--gold)" stroke-dasharray="4 3" opacity="0.6" />
        <text x="${xAt((sim.kinkLo + sim.kinkHi) / 2).toFixed(1)}" y="${M.top + 10}" text-anchor="middle" font-size="8" fill="var(--gold)">F = I (flat)</text>
        <!-- funding curve -->
        <path d="${curve}" fill="none" stroke="var(--azul)" stroke-width="2" />
        <!-- current premium marker -->
        <line x1="${xAt(sim.premium).toFixed(1)}" y1="${M.top}" x2="${xAt(sim.premium).toFixed(1)}" y2="${M.top + plotH}" stroke="${fColor}" stroke-width="1.5" />
        <circle cx="${xAt(sim.premium).toFixed(1)}" cy="${yAt(sim.F).toFixed(1)}" r="3.5" fill="${fColor}" />
        <text x="${M.left + plotW / 2}" y="${M.top + plotH + 30}" text-anchor="middle" font-size="11" fill="var(--ink-mute)">${labels.x}</text>
        <text x="${M.left - 40}" y="${M.top + plotH / 2}" text-anchor="middle" font-size="11" fill="var(--ink-mute)" transform="rotate(-90 ${M.left - 40} ${M.top + plotH / 2})">${labels.y}</text>
        <!-- who-pays annotation -->
        <g transform="translate(${M.left + plotW + 8}, ${M.top + 8})" font-size="9" fill="var(--ink-mute)">
          <text x="0" y="0">F = ${sim.F.toFixed(3)}%</text>
          <text x="0" y="14" fill="${fColor}">${sim.whoPays === 'longs' ? labels.longs : (sim.whoPays === 'shorts' ? labels.shorts : labels.neutral)}</text>
        </g>
      </svg>
    `;

    const vColor = sim.verdict === 'flush' ? '#a05050' : (sim.verdict === 'squeeze' ? '#4d7a3a' : 'var(--ink-mute)');
    const vText = sim.verdict === 'flush' ? labels.flush : (sim.verdict === 'squeeze' ? labels.squeeze : labels.balanced);
    host.readoutRoot.innerHTML = `
      <div class="viz-readout-row">
        <span><strong>F</strong> = ${sim.F.toFixed(3)}%/interval</span>
        <span class="dot">·</span>
        <span><strong>${labels.ann}</strong> = ${sim.annualized.toFixed(1)}%/yr (${sim.periodsPerYear.toFixed(0)}×)</span>
      </div>
      <div class="viz-readout-row" style="color:${vColor};font-weight:500;">${vText}</div>
      <div class="viz-readout-row" style="font-size:0.85em;">${labels.carry}</div>
    `;
  }

  const map = { p: 'viz-fund-p', i: 'viz-fund-i', c: 'viz-fund-c', iv: 'viz-fund-iv' };
  const el = {}; for (const key of Object.keys(map)) el[key] = host.controlsRoot.querySelector('#' + map[key]);
  el.p.addEventListener('input', () => { params.premium = parseFloat(el.p.value); host.controlsRoot.querySelector('[data-viz-show="p"]').textContent = params.premium.toFixed(3); draw(); });
  el.i.addEventListener('input', () => { params.interest = parseFloat(el.i.value); host.controlsRoot.querySelector('[data-viz-show="i"]').textContent = params.interest.toFixed(3); draw(); });
  el.c.addEventListener('input', () => { params.clampC = parseFloat(el.c.value); host.controlsRoot.querySelector('[data-viz-show="c"]').textContent = params.clampC.toFixed(3); draw(); });
  el.iv.addEventListener('input', () => { params.intervalHours = parseFloat(el.iv.value); host.controlsRoot.querySelector('[data-viz-show="iv"]').textContent = params.intervalHours; draw(); });

  host.onReset(() => {
    el.p.value = params.premium; el.i.value = params.interest; el.c.value = params.clampC; el.iv.value = params.intervalHours;
    host.controlsRoot.querySelector('[data-viz-show="p"]').textContent = params.premium.toFixed(3);
    host.controlsRoot.querySelector('[data-viz-show="i"]').textContent = params.interest.toFixed(3);
    host.controlsRoot.querySelector('[data-viz-show="c"]').textContent = params.clampC.toFixed(3);
    host.controlsRoot.querySelector('[data-viz-show="iv"]').textContent = params.intervalHours;
    draw();
  });

  draw();
});

// Export perpetual-funding helpers for testing / external use
export { fundingRate, simulateFunding };

// ─── Expectancy & dynamic-sizing survival lab ──────────────────────────
//
// The first sim that models the TRADER'S OWN ACCOUNT rather than the market.
// The convergent thesis of three of the sourced practitioners (TraderXO: "you
// don't find an edge, you ENGINEER one — expectancy IS the edge"; Jim Talbot:
// "the system, not the setup — size so a loss doesn't move you"; Tradingriot:
// combining payout curves into a survivable equity curve).
//
// A strategy is a binary bet: win with probability p for +b R (reward:risk
// b = avgWin/avgLoss, loss normalised to 1R), else −1 R. The per-trade
// EXPECTANCY in R is the exact identity
//
//   E_R = p·b − (1 − p)
//
// with profit factor PF = p·b / (1−p) and breakeven win rate p* = 1/(1+b)
// (so a 35% win rate with b=2 is +EV — the "you don't need to be right" lesson;
// cf. Barber & Odean 2000 on overconfidence, Kahneman-Tversky 1979 on loss
// aversion). Sizing turns expectancy into a PATH: bet a fixed fraction r of
// equity each trade, win ⇒ ×(1+r·b), loss ⇒ ×(1−r). The expected log-growth
// per trade is g(r) = p·ln(1+r·b) + (1−p)·ln(1−r), maximised at the binary
// Kelly fraction f* = E_R / b (Kelly 1956; Thorp 2006). Over-betting a
// positive-EV edge (r ≫ f*) drives growth negative and ruin → 1 — the lesson
// mean-expectancy alone hides. Seeded Monte-Carlo (makeRng/makeGaussian) gives
// the equity fan, drawdown distribution and empirical risk-of-ruin.
// Verified by scripts/verify-expectancy-sim.mjs.

function expectancyStats(p, b) {
  const eR = p * b - (1 - p);                       // expectancy in R per trade
  const pf = (1 - p) > 1e-12 ? (p * b) / (1 - p) : Infinity;  // profit factor
  const breakeven = 1 / (1 + b);                    // win rate making E_R = 0
  const kelly = b > 1e-12 ? eR / b : 0;             // optimal fixed fraction (binary Kelly)
  return { eR, pf, breakeven, kelly };
}

// Expected log-growth per trade for a fixed-fraction bet (the Kelly objective).
function logGrowthRate(p, b, f) {
  if (f <= 0) return 0;                             // no bet → flat
  if (f >= 1) return -Infinity;                     // a single loss wipes out
  return p * Math.log(1 + f * b) + (1 - p) * Math.log(1 - f);
}

function pctile(sorted, q) {
  if (!sorted.length) return NaN;
  const idx = q * (sorted.length - 1);
  const lo = Math.floor(idx), hi = Math.ceil(idx);
  if (lo === hi) return sorted[lo];
  return sorted[lo] + (sorted[hi] - sorted[lo]) * (idx - lo);
}

function simulateExpectancy({ p, b, riskPct, nTrades = 100, nRuns = 400, seed = 12345, ruinFloor = 0.5 }) {
  const stats = expectancyStats(p, b);
  const r = riskPct;
  const rng = makeRng(seed);
  const paths = [];
  const terminals = [], mdds = [];
  let ruinCount = 0, rSum = 0, rN = 0;
  for (let run = 0; run < nRuns; run++) {
    let eq = 1, peak = 1, maxDD = 0, ruined = false;
    const path = [eq];
    for (let t = 0; t < nTrades; t++) {
      const win = rng() < p;
      rSum += win ? b : -1; rN++;                   // R-multiple stream (for LLN oracle)
      eq *= win ? (1 + r * b) : (1 - r);
      if (eq > peak) peak = eq;
      const dd = (peak - eq) / peak;
      if (dd > maxDD) maxDD = dd;
      if (eq <= ruinFloor) ruined = true;
      path.push(eq);
    }
    paths.push(path);
    terminals.push(eq);
    mdds.push(maxDD);
    if (ruined) ruinCount++;
  }
  const bands = [];
  for (let t = 0; t <= nTrades; t++) {
    const col = paths.map((pa) => pa[t]).sort((a, c) => a - c);
    bands.push({ t, p10: pctile(col, 0.10), p50: pctile(col, 0.50), p90: pctile(col, 0.90) });
  }
  const sortedT = [...terminals].sort((a, c) => a - c);
  const sortedDD = [...mdds].sort((a, c) => a - c);
  return {
    ...stats,
    riskPct: r, nTrades, nRuns, ruinFloor,
    bands,
    meanR: rN ? rSum / rN : 0,
    medianTerminal: pctile(sortedT, 0.5),
    p10Terminal: pctile(sortedT, 0.10),
    p90Terminal: pctile(sortedT, 0.90),
    medianMDD: pctile(sortedDD, 0.5),
    worstMDD: sortedDD[sortedDD.length - 1],
    riskOfRuin: ruinCount / nRuns,
    overbet: stats.kelly > 0 && r > 2 * stats.kelly,
  };
}

registerComponent('ExpectancySurvivalSim', function ExpectancySurvivalSim(host, params, lang) {
  const W = 640, H = 400;
  const M = { top: 20, right: 16, bottom: 40, left: 56 };

  const labels = lang === 'id' ? {
    p: 'Win rate p', b: 'Reward:risk b (avgWin/avgLoss, R)', risk: 'Risiko per trade r (%)', n: 'Jumlah trade',
    x: 'Trade ke-', y: 'Ekuitas (×modal awal, skala log)',
    eR: 'Expectancy', pf: 'Profit factor', be: 'Win rate impas p*', kelly: 'Kelly f*',
    med: 'Median akhir', mdd: 'Max drawdown (median / terburuk)', ror: 'Risk of ruin',
    fan: 'Pita P10–P90 dari 400 simulasi', overbet: '⚠ OVER-BET: r > 2·Kelly — edge positif pun bisa bangkrut',
    posEV: 'Edge POSITIF (+EV)', negEV: 'Edge NEGATIF (−EV) — bangkrut hanya soal waktu',
  } : {
    p: 'Win rate p', b: 'Reward:risk b (avgWin/avgLoss, R)', risk: 'Risk per trade r (%)', n: 'Number of trades',
    x: 'Trade #', y: 'Equity (× starting capital, log scale)',
    eR: 'Expectancy', pf: 'Profit factor', be: 'Breakeven win rate p*', kelly: 'Kelly f*',
    med: 'Median terminal', mdd: 'Max drawdown (median / worst)', ror: 'Risk of ruin',
    fan: 'P10–P90 band over 400 simulations', overbet: '⚠ OVER-BET: r > 2·Kelly — even a +EV edge can ruin you',
    posEV: 'POSITIVE edge (+EV)', negEV: 'NEGATIVE edge (−EV) — ruin is only a matter of time',
  };

  host.controlsRoot.innerHTML = `
    <div class="viz-control-row"><label class="viz-control-label" for="viz-exp-p">${labels.p}</label><input type="range" id="viz-exp-p" min="0.2" max="0.8" step="0.01" value="${params.p}" /><span class="viz-control-value" data-viz-show="p">${params.p.toFixed(2)}</span></div>
    <div class="viz-control-row"><label class="viz-control-label" for="viz-exp-b">${labels.b}</label><input type="range" id="viz-exp-b" min="0.3" max="5" step="0.1" value="${params.b}" /><span class="viz-control-value" data-viz-show="b">${params.b.toFixed(1)}</span></div>
    <div class="viz-control-row"><label class="viz-control-label" for="viz-exp-r">${labels.risk}</label><input type="range" id="viz-exp-r" min="0.5" max="10" step="0.5" value="${(params.riskPct * 100)}" /><span class="viz-control-value" data-viz-show="r">${(params.riskPct * 100).toFixed(1)}%</span></div>
    <div class="viz-control-row"><label class="viz-control-label" for="viz-exp-n">${labels.n}</label><input type="range" id="viz-exp-n" min="30" max="500" step="10" value="${params.nTrades}" /><span class="viz-control-value" data-viz-show="n">${params.nTrades}</span></div>
  `;

  const plotW = W - M.left - M.right, plotH = H - M.top - M.bottom;

  function draw() {
    const sim = simulateExpectancy({ p: params.p, b: params.b, riskPct: params.riskPct, nTrades: params.nTrades, nRuns: 400, seed: 20260607 });
    let lo = Infinity, hi = -Infinity;
    for (const bd of sim.bands) { lo = Math.min(lo, bd.p10); hi = Math.max(hi, bd.p90); }
    lo = Math.min(lo, sim.ruinFloor) * 0.9; hi = hi * 1.1;
    lo = Math.max(lo, 1e-3);
    const lLo = Math.log(lo), lHi = Math.log(hi);
    const xAt = (t) => M.left + (t / sim.nTrades) * plotW;
    const yAt = (eq) => M.top + (1 - (Math.log(Math.max(eq, 1e-6)) - lLo) / (lHi - lLo)) * plotH;

    let top = '', bot = '';
    sim.bands.forEach((bd, i) => { top += `${i === 0 ? 'M' : 'L'} ${xAt(bd.t).toFixed(1)} ${yAt(bd.p90).toFixed(1)} `; });
    for (let i = sim.bands.length - 1; i >= 0; i--) { const bd = sim.bands[i]; bot += `L ${xAt(bd.t).toFixed(1)} ${yAt(bd.p10).toFixed(1)} `; }
    let median = '';
    sim.bands.forEach((bd, i) => { median += `${i === 0 ? 'M' : 'L'} ${xAt(bd.t).toFixed(1)} ${yAt(bd.p50).toFixed(1)} `; });

    const evColor = sim.eR > 1e-9 ? '#4d7a3a' : (sim.eR < -1e-9 ? '#a05050' : 'var(--ink-mute)');
    const y1 = yAt(1), yRuin = yAt(sim.ruinFloor);
    // y gridlines at powers nearby
    let yt = '';
    for (const v of [0.5, 1, 2, 4, 8]) { if (v >= lo && v <= hi) { const yy = yAt(v); yt += `<line x1="${M.left}" y1="${yy.toFixed(1)}" x2="${M.left + plotW}" y2="${yy.toFixed(1)}" stroke="var(--line)" stroke-dasharray="2 3" opacity="0.5" /><text x="${M.left - 6}" y="${(yy + 3).toFixed(1)}" text-anchor="end" font-size="9" fill="var(--ink-mute)">${v}×</text>`; } }

    host.canvasRoot.innerHTML = `
      <svg viewBox="0 0 ${W} ${H}" width="100%" preserveAspectRatio="xMidYMid meet" class="viz-svg">
        <rect x="0" y="0" width="${W}" height="${H}" fill="var(--bg-elev-1)" />
        ${yt}
        <line x1="${M.left}" y1="${y1.toFixed(1)}" x2="${M.left + plotW}" y2="${y1.toFixed(1)}" stroke="var(--line)" /><text x="${M.left + 2}" y="${(y1 - 3).toFixed(1)}" font-size="8" fill="var(--ink-mute)">breakeven 1×</text>
        ${yRuin > M.top && yRuin < M.top + plotH ? `<line x1="${M.left}" y1="${yRuin.toFixed(1)}" x2="${M.left + plotW}" y2="${yRuin.toFixed(1)}" stroke="#a05050" stroke-dasharray="4 3" opacity="0.7" /><text x="${M.left + plotW}" y="${(yRuin - 3).toFixed(1)}" text-anchor="end" font-size="8" fill="#a05050">ruin floor ${sim.ruinFloor}×</text>` : ''}
        <path d="${top} ${bot} Z" fill="${evColor}" opacity="0.16" stroke="none" />
        <path d="${median}" fill="none" stroke="${evColor}" stroke-width="2" />
        <line x1="${M.left}" y1="${M.top}" x2="${M.left}" y2="${M.top + plotH}" stroke="var(--line)" />
        <line x1="${M.left}" y1="${M.top + plotH}" x2="${M.left + plotW}" y2="${M.top + plotH}" stroke="var(--line)" />
        <text x="${M.left + plotW / 2}" y="${M.top + plotH + 28}" text-anchor="middle" font-size="11" fill="var(--ink-mute)">${labels.x}</text>
        <text x="${M.left - 42}" y="${M.top + plotH / 2}" text-anchor="middle" font-size="11" fill="var(--ink-mute)" transform="rotate(-90 ${M.left - 42} ${M.top + plotH / 2})">${labels.y}</text>
        <text x="${M.left + plotW}" y="${M.top + 10}" text-anchor="end" font-size="8" fill="var(--ink-mute)">${labels.fan}</text>
      </svg>
    `;

    const overbetHTML = sim.overbet ? `<div class="viz-readout-row" style="color:#a05050;font-weight:600;">${labels.overbet}</div>` : '';
    host.readoutRoot.innerHTML = `
      <div class="viz-readout-row" style="color:${evColor};font-weight:600;">${sim.eR >= 0 ? labels.posEV : labels.negEV}</div>
      <div class="viz-readout-row">
        <span><strong>${labels.eR}</strong> = ${sim.eR.toFixed(3)}R</span><span class="dot">·</span>
        <span><strong>${labels.pf}</strong> = ${isFinite(sim.pf) ? sim.pf.toFixed(2) : '∞'}</span><span class="dot">·</span>
        <span><strong>${labels.be}</strong> = ${(sim.breakeven * 100).toFixed(0)}%</span><span class="dot">·</span>
        <span><strong>${labels.kelly}</strong> = ${(sim.kelly * 100).toFixed(1)}%</span>
      </div>
      <div class="viz-readout-row">
        <span><strong>${labels.med}</strong> = ${sim.medianTerminal.toFixed(2)}×</span><span class="dot">·</span>
        <span><strong>${labels.mdd}</strong> = ${(sim.medianMDD * 100).toFixed(0)}% / ${(sim.worstMDD * 100).toFixed(0)}%</span><span class="dot">·</span>
        <span><strong>${labels.ror}</strong> = ${(sim.riskOfRuin * 100).toFixed(1)}%</span>
      </div>
      ${overbetHTML}
    `;
  }

  const map = { p: 'viz-exp-p', b: 'viz-exp-b', r: 'viz-exp-r', n: 'viz-exp-n' };
  const el = {}; for (const key of Object.keys(map)) el[key] = host.controlsRoot.querySelector('#' + map[key]);
  el.p.addEventListener('input', () => { params.p = parseFloat(el.p.value); host.controlsRoot.querySelector('[data-viz-show="p"]').textContent = params.p.toFixed(2); draw(); });
  el.b.addEventListener('input', () => { params.b = parseFloat(el.b.value); host.controlsRoot.querySelector('[data-viz-show="b"]').textContent = params.b.toFixed(1); draw(); });
  el.r.addEventListener('input', () => { params.riskPct = parseFloat(el.r.value) / 100; host.controlsRoot.querySelector('[data-viz-show="r"]').textContent = (params.riskPct * 100).toFixed(1) + '%'; draw(); });
  el.n.addEventListener('input', () => { params.nTrades = parseInt(el.n.value, 10); host.controlsRoot.querySelector('[data-viz-show="n"]').textContent = params.nTrades; draw(); });

  host.onReset(() => {
    el.p.value = params.p; el.b.value = params.b; el.r.value = params.riskPct * 100; el.n.value = params.nTrades;
    host.controlsRoot.querySelector('[data-viz-show="p"]').textContent = params.p.toFixed(2);
    host.controlsRoot.querySelector('[data-viz-show="b"]').textContent = params.b.toFixed(1);
    host.controlsRoot.querySelector('[data-viz-show="r"]').textContent = (params.riskPct * 100).toFixed(1) + '%';
    host.controlsRoot.querySelector('[data-viz-show="n"]').textContent = params.nTrades;
    draw();
  });

  draw();
});

// Export expectancy/survival helpers for testing / external use
export { expectancyStats, logGrowthRate, simulateExpectancy };

// ─── Options strategy: payoff + the Greeks (Black-Scholes) ──────────────
//
// The options-pricing foundation under the dealer-gamma and vol-surface sims:
// Black-Scholes-Merton price + the full first/second-order Greeks, and the
// payoff/P&L of an arbitrary multi-leg position. With S spot, K strike, σ vol,
// τ time-to-expiry (years), r rate (q=0):
//   d1 = [ln(S/K) + (r + ½σ²)τ] / (σ√τ),   d2 = d1 − σ√τ
//   call = S·N(d1) − K e^{−rτ} N(d2),   put = K e^{−rτ} N(−d2) − S·N(−d1)
//   Δ_call = N(d1), Δ_put = N(d1)−1;  Γ = φ(d1)/(Sσ√τ);  ν = S φ(d1)√τ;
//   Θ_call = −Sφ(d1)σ/(2√τ) − rK e^{−rτ}N(d2)   (per year)
// Put-call parity C − P = S − K e^{−rτ} is the exact verification oracle, and
// every Greek is cross-checked against a finite-difference bump. A position is
// a list of legs {kind: 'call'|'put'|'stock', strike, qty} (qty<0 = short);
// payoff-at-expiry uses intrinsic value, the "now" curve marks-to-model at τ.
// Refs: Black & Scholes (1973); Merton (1973); Hull, *Options, Futures & Other
// Derivatives*; Natenberg, *Option Volatility & Pricing*; Taleb, *Dynamic
// Hedging*. Verified by scripts/verify-options-sim.mjs.

function npdf(x) { return Math.exp(-0.5 * x * x) / Math.sqrt(2 * Math.PI); }

function bsPrice(kind, S, K, sigma, tau, r = 0) {
  if (kind === 'stock') return S;
  if (tau <= 0 || sigma <= 0) return kind === 'call' ? Math.max(S - K, 0) : Math.max(K - S, 0);
  const srt = sigma * Math.sqrt(tau);
  const d1 = (Math.log(S / K) + (r + 0.5 * sigma * sigma) * tau) / srt;
  const d2 = d1 - srt;
  const disc = Math.exp(-r * tau);
  if (kind === 'call') return S * normalCDF(d1) - K * disc * normalCDF(d2);
  return K * disc * normalCDF(-d2) - S * normalCDF(-d1);
}

// Per-leg Greeks (per 1 unit, qty=+1). vega per 1.00 vol; theta per year.
function bsGreeks(kind, S, K, sigma, tau, r = 0) {
  if (kind === 'stock') return { price: S, delta: 1, gamma: 0, vega: 0, theta: 0 };
  const price = bsPrice(kind, S, K, sigma, tau, r);
  if (tau <= 0 || sigma <= 0) {
    const delta = kind === 'call' ? (S > K ? 1 : 0) : (S < K ? -1 : 0);
    return { price, delta, gamma: 0, vega: 0, theta: 0 };
  }
  const srt = sigma * Math.sqrt(tau);
  const d1 = (Math.log(S / K) + (r + 0.5 * sigma * sigma) * tau) / srt;
  const d2 = d1 - srt;
  const disc = Math.exp(-r * tau);
  const pdf = npdf(d1);
  const gamma = pdf / (S * srt);
  const vega = S * pdf * Math.sqrt(tau);
  let delta, theta;
  if (kind === 'call') {
    delta = normalCDF(d1);
    theta = -(S * pdf * sigma) / (2 * Math.sqrt(tau)) - r * K * disc * normalCDF(d2);
  } else {
    delta = normalCDF(d1) - 1;
    theta = -(S * pdf * sigma) / (2 * Math.sqrt(tau)) + r * K * disc * normalCDF(-d2);
  }
  return { price, delta, gamma, vega, theta };
}

function legIntrinsic(leg, S) {
  if (leg.kind === 'stock') return S;
  return leg.kind === 'call' ? Math.max(S - leg.strike, 0) : Math.max(leg.strike - S, 0);
}

function simulateOptions({ legs, S, sigma, tau, r = 0, sMin, sMax, n = 121 }) {
  sMin = sMin != null ? sMin : S * 0.6;
  sMax = sMax != null ? sMax : S * 1.4;
  // entry cost (net debit>0 / credit<0) + net Greeks at current spot
  let cost = 0, delta = 0, gamma = 0, vega = 0, theta = 0;
  for (const leg of legs) {
    const g = bsGreeks(leg.kind, S, leg.strike, sigma, tau, r);
    cost += leg.qty * g.price;
    delta += leg.qty * g.delta;
    gamma += leg.qty * g.gamma;
    vega += leg.qty * g.vega;
    theta += leg.qty * g.theta;
  }
  const curve = [];
  let maxProfit = -Infinity, maxLoss = Infinity;
  for (let i = 0; i < n; i++) {
    const ST = sMin + (sMax - sMin) * i / (n - 1);
    let expVal = 0, nowVal = 0;
    for (const leg of legs) {
      expVal += leg.qty * legIntrinsic(leg, ST);
      nowVal += leg.qty * bsPrice(leg.kind, ST, leg.strike, sigma, tau, r);
    }
    const expiryPnl = expVal - cost;   // P&L at expiry
    const nowPnl = nowVal - cost;      // mark-to-model P&L at current tau
    curve.push({ S: ST, expiry: expiryPnl, now: nowPnl });
    if (expiryPnl > maxProfit) maxProfit = expiryPnl;
    if (expiryPnl < maxLoss) maxLoss = expiryPnl;
  }
  // breakevens: sign changes of the expiry P&L across the grid (linear interp)
  const breakevens = [];
  for (let i = 1; i < curve.length; i++) {
    const a = curve[i - 1].expiry, b = curve[i].expiry;
    if ((a < 0 && b >= 0) || (a > 0 && b <= 0)) {
      const t = a / (a - b);
      breakevens.push(curve[i - 1].S + t * (curve[i].S - curve[i - 1].S));
    }
  }
  return { curve, cost, delta, gamma, vega, theta, breakevens, maxProfit, maxLoss, sMin, sMax, S, sigma, tau };
}

// Build the legs for a named strategy around spot S (qty<0 = short).
function optionStrategyLegs(strategy, S) {
  const atm = Math.max(1, Math.round(S / 5) * 5);
  const w = Math.max(1, Math.round(0.05 * S / 5) * 5) || 5;
  switch (strategy) {
    case 'long-call': return [{ kind: 'call', strike: atm, qty: 1 }];
    case 'long-put': return [{ kind: 'put', strike: atm, qty: 1 }];
    case 'straddle': return [{ kind: 'call', strike: atm, qty: 1 }, { kind: 'put', strike: atm, qty: 1 }];
    case 'strangle': return [{ kind: 'call', strike: atm + w, qty: 1 }, { kind: 'put', strike: atm - w, qty: 1 }];
    case 'bull-call-spread': return [{ kind: 'call', strike: atm, qty: 1 }, { kind: 'call', strike: atm + w, qty: -1 }];
    case 'bear-put-spread': return [{ kind: 'put', strike: atm, qty: 1 }, { kind: 'put', strike: atm - w, qty: -1 }];
    case 'covered-call': return [{ kind: 'stock', strike: 0, qty: 1 }, { kind: 'call', strike: atm + w, qty: -1 }];
    case 'iron-condor': return [
      { kind: 'put', strike: atm - w, qty: -1 }, { kind: 'put', strike: atm - 2 * w, qty: 1 },
      { kind: 'call', strike: atm + w, qty: -1 }, { kind: 'call', strike: atm + 2 * w, qty: 1 }];
    case 'call-butterfly': return [
      { kind: 'call', strike: atm - w, qty: 1 }, { kind: 'call', strike: atm, qty: -2 }, { kind: 'call', strike: atm + w, qty: 1 }];
    default: return [{ kind: 'call', strike: atm, qty: 1 }];
  }
}

registerComponent('OptionsStrategySim', function OptionsStrategySim(host, params, lang) {
  const W = 640, H = 400;
  const M = { top: 20, right: 16, bottom: 40, left: 58 };

  const STRATS = ['long-call', 'long-put', 'straddle', 'strangle', 'bull-call-spread', 'bear-put-spread', 'iron-condor', 'call-butterfly', 'covered-call'];
  const stratLabel = lang === 'id' ? {
    'long-call': 'Long call', 'long-put': 'Long put', 'straddle': 'Straddle (beli vol)', 'strangle': 'Strangle (beli vol)',
    'bull-call-spread': 'Bull call spread', 'bear-put-spread': 'Bear put spread', 'iron-condor': 'Iron condor (jual vol)',
    'call-butterfly': 'Call butterfly', 'covered-call': 'Covered call',
  } : {
    'long-call': 'Long call', 'long-put': 'Long put', 'straddle': 'Straddle (long vol)', 'strangle': 'Strangle (long vol)',
    'bull-call-spread': 'Bull call spread', 'bear-put-spread': 'Bear put spread', 'iron-condor': 'Iron condor (short vol)',
    'call-butterfly': 'Call butterfly', 'covered-call': 'Covered call',
  };
  const labels = lang === 'id' ? {
    strat: 'Strategi', S: 'Spot S', iv: 'IV σ (%)', dte: 'Hari ke expiry',
    x: 'Harga underlying saat expiry', y: 'P&L posisi',
    expiry: 'P&L saat expiry', now: 'P&L sekarang (mark-to-model)', be: 'Breakeven',
    cost: 'Biaya masuk', debit: 'debit (bayar)', credit: 'credit (terima)',
    mp: 'Max profit', ml: 'Max loss', net: 'Greeks net', perday: '/hari',
  } : {
    strat: 'Strategy', S: 'Spot S', iv: 'IV σ (%)', dte: 'Days to expiry',
    x: 'Underlying price at expiry', y: 'Position P&L',
    expiry: 'P&L at expiry', now: 'P&L now (mark-to-model)', be: 'Breakeven',
    cost: 'Entry cost', debit: 'debit (paid)', credit: 'credit (received)',
    mp: 'Max profit', ml: 'Max loss', net: 'Net Greeks', perday: '/day',
  };

  host.controlsRoot.innerHTML = `
    <div class="viz-control-row"><label class="viz-control-label" for="viz-opt-strat">${labels.strat}</label><select id="viz-opt-strat" class="viz-select">${STRATS.map((s) => `<option value="${s}"${s === params.strategy ? ' selected' : ''}>${stratLabel[s]}</option>`).join('')}</select></div>
    <div class="viz-control-row"><label class="viz-control-label" for="viz-opt-s">${labels.S}</label><input type="range" id="viz-opt-s" min="50" max="150" step="1" value="${params.S}" /><span class="viz-control-value" data-viz-show="s">${params.S}</span></div>
    <div class="viz-control-row"><label class="viz-control-label" for="viz-opt-iv">${labels.iv}</label><input type="range" id="viz-opt-iv" min="5" max="120" step="1" value="${(params.sigma * 100)}" /><span class="viz-control-value" data-viz-show="iv">${(params.sigma * 100).toFixed(0)}</span></div>
    <div class="viz-control-row"><label class="viz-control-label" for="viz-opt-dte">${labels.dte}</label><input type="range" id="viz-opt-dte" min="1" max="180" step="1" value="${params.dte}" /><span class="viz-control-value" data-viz-show="dte">${params.dte}</span></div>
  `;

  const plotW = W - M.left - M.right, plotH = H - M.top - M.bottom;

  function draw() {
    const S = params.S, sigma = params.sigma, tau = params.dte / 365;
    const legs = optionStrategyLegs(params.strategy, S);
    const sim = simulateOptions({ legs, S, sigma, tau, sMin: S * 0.6, sMax: S * 1.4 });
    let lo = Infinity, hi = -Infinity;
    for (const pt of sim.curve) { lo = Math.min(lo, pt.expiry, pt.now); hi = Math.max(hi, pt.expiry, pt.now); }
    const pad = (hi - lo) * 0.1 || 1; lo -= pad; hi += pad;
    const xAt = (s) => M.left + ((s - sim.sMin) / (sim.sMax - sim.sMin)) * plotW;
    const yAt = (v) => M.top + (1 - (v - lo) / (hi - lo)) * plotH;
    const y0 = yAt(0);

    // profit/loss shaded fill under the expiry curve, split at zero
    let expPath = '', nowPath = '';
    sim.curve.forEach((pt, i) => { expPath += `${i === 0 ? 'M' : 'L'} ${xAt(pt.S).toFixed(1)} ${yAt(pt.expiry).toFixed(1)} `; });
    sim.curve.forEach((pt, i) => { nowPath += `${i === 0 ? 'M' : 'L'} ${xAt(pt.S).toFixed(1)} ${yAt(pt.now).toFixed(1)} `; });

    let beMarks = '';
    for (const be of sim.breakevens) beMarks += `<line x1="${xAt(be).toFixed(1)}" y1="${M.top}" x2="${xAt(be).toFixed(1)}" y2="${M.top + plotH}" stroke="var(--gold)" stroke-dasharray="3 3" opacity="0.7" /><text x="${xAt(be).toFixed(1)}" y="${M.top + plotH + 22}" text-anchor="middle" font-size="8" fill="var(--gold)">${be.toFixed(0)}</text>`;
    let xt = ''; for (const f of [0.7, 0.85, 1, 1.15, 1.3]) { const sv = S * f; xt += `<text x="${xAt(sv).toFixed(1)}" y="${M.top + plotH + 13}" text-anchor="middle" font-size="9" fill="var(--ink-mute)">${sv.toFixed(0)}</text>`; }

    host.canvasRoot.innerHTML = `
      <svg viewBox="0 0 ${W} ${H}" width="100%" preserveAspectRatio="xMidYMid meet" class="viz-svg">
        <rect x="0" y="0" width="${W}" height="${H}" fill="var(--bg-elev-1)" />
        ${y0 > M.top && y0 < M.top + plotH ? `<line x1="${M.left}" y1="${y0.toFixed(1)}" x2="${M.left + plotW}" y2="${y0.toFixed(1)}" stroke="var(--line)" /><text x="${M.left - 6}" y="${(y0 + 3).toFixed(1)}" text-anchor="end" font-size="9" fill="var(--ink-mute)">0</text>` : ''}
        ${beMarks}
        <line x1="${xAt(S).toFixed(1)}" y1="${M.top}" x2="${xAt(S).toFixed(1)}" y2="${M.top + plotH}" stroke="var(--ink-mute)" stroke-dasharray="2 2" opacity="0.6" /><text x="${xAt(S).toFixed(1)}" y="${M.top + 9}" text-anchor="middle" font-size="8" fill="var(--ink-mute)">S</text>
        <path d="${nowPath}" fill="none" stroke="var(--azul)" stroke-width="1.5" stroke-dasharray="5 3" opacity="0.85" />
        <path d="${expPath}" fill="none" stroke="var(--gold)" stroke-width="2" />
        <line x1="${M.left}" y1="${M.top}" x2="${M.left}" y2="${M.top + plotH}" stroke="var(--line)" />
        <line x1="${M.left}" y1="${M.top + plotH}" x2="${M.left + plotW}" y2="${M.top + plotH}" stroke="var(--line)" />
        ${xt}
        <text x="${M.left + plotW / 2}" y="${M.top + plotH + 32}" text-anchor="middle" font-size="11" fill="var(--ink-mute)">${labels.x}</text>
        <text x="${M.left - 44}" y="${M.top + plotH / 2}" text-anchor="middle" font-size="11" fill="var(--ink-mute)" transform="rotate(-90 ${M.left - 44} ${M.top + plotH / 2})">${labels.y}</text>
        <g transform="translate(${M.left + 8}, ${M.top + 10})" font-size="9">
          <line x1="0" y1="-3" x2="14" y2="-3" stroke="var(--gold)" stroke-width="2" /><text x="18" y="0" fill="var(--ink-mute)">${labels.expiry}</text>
          <line x1="0" y1="9" x2="14" y2="9" stroke="var(--azul)" stroke-width="1.5" stroke-dasharray="5 3" /><text x="18" y="12" fill="var(--ink-mute)">${labels.now}</text>
        </g>
      </svg>
    `;

    const costTxt = sim.cost >= 0 ? `${sim.cost.toFixed(2)} ${labels.debit}` : `${(-sim.cost).toFixed(2)} ${labels.credit}`;
    const mp = isFinite(sim.maxProfit) ? sim.maxProfit.toFixed(2) : '∞';
    const ml = isFinite(sim.maxLoss) ? sim.maxLoss.toFixed(2) : '∞';
    host.readoutRoot.innerHTML = `
      <div class="viz-readout-row">
        <span><strong>${labels.cost}</strong> = ${costTxt}</span><span class="dot">·</span>
        <span><strong>${labels.mp}</strong> = ${mp}</span><span class="dot">·</span>
        <span><strong>${labels.ml}</strong> = ${ml}</span><span class="dot">·</span>
        <span><strong>${labels.be}</strong> = ${sim.breakevens.length ? sim.breakevens.map((b) => b.toFixed(1)).join(', ') : '—'}</span>
      </div>
      <div class="viz-readout-row">
        <strong>${labels.net}:</strong>
        <span>Δ ${sim.delta.toFixed(3)}</span><span class="dot">·</span>
        <span>Γ ${sim.gamma.toFixed(4)}</span><span class="dot">·</span>
        <span>ν ${(sim.vega / 100).toFixed(3)}/1%</span><span class="dot">·</span>
        <span>Θ ${(sim.theta / 365).toFixed(3)}${labels.perday}</span>
      </div>
    `;
  }

  const sel = host.controlsRoot.querySelector('#viz-opt-strat');
  const elS = host.controlsRoot.querySelector('#viz-opt-s');
  const elIV = host.controlsRoot.querySelector('#viz-opt-iv');
  const elDte = host.controlsRoot.querySelector('#viz-opt-dte');
  sel.addEventListener('change', () => { params.strategy = sel.value; draw(); });
  elS.addEventListener('input', () => { params.S = parseFloat(elS.value); host.controlsRoot.querySelector('[data-viz-show="s"]').textContent = params.S; draw(); });
  elIV.addEventListener('input', () => { params.sigma = parseFloat(elIV.value) / 100; host.controlsRoot.querySelector('[data-viz-show="iv"]').textContent = (params.sigma * 100).toFixed(0); draw(); });
  elDte.addEventListener('input', () => { params.dte = parseInt(elDte.value, 10); host.controlsRoot.querySelector('[data-viz-show="dte"]').textContent = params.dte; draw(); });

  host.onReset(() => {
    sel.value = params.strategy; elS.value = params.S; elIV.value = params.sigma * 100; elDte.value = params.dte;
    host.controlsRoot.querySelector('[data-viz-show="s"]').textContent = params.S;
    host.controlsRoot.querySelector('[data-viz-show="iv"]').textContent = (params.sigma * 100).toFixed(0);
    host.controlsRoot.querySelector('[data-viz-show="dte"]').textContent = params.dte;
    draw();
  });

  draw();
});

// Export options helpers for testing / external use
export { bsPrice, bsGreeks, simulateOptions, optionStrategyLegs };

// ─── Backtest overfitting / the Deflated Sharpe Ratio ───────────────────
//
// The companion to ExpectancySurvivalSim: that one asks "do you have an edge?",
// this one asks "is the edge REAL, or did you fit noise by trying many
// strategies?" (Bailey & López de Prado 2014, *The Deflated Sharpe Ratio*;
// Harvey, Liu & Zhu 2016). If you test N strategies that ALL have zero true
// skill, the BEST observed Sharpe is inflated by selection. The expected maximum
// of N independent trials (in Sharpe units) is
//   E[max] ≈ √V · [ (1−γ)·Z⁻¹(1 − 1/N) + γ·Z⁻¹(1 − 1/(N·e)) ]
// (γ = Euler-Mascheroni, Z⁻¹ = inverse normal CDF, V = variance of the trial
// Sharpes). The estimated Sharpe itself has standard error (Lo 2002; with skew
// γ3, kurtosis γ4)   σ(ŜR) = √[(1 − γ3·ŜR + ((γ4−1)/4)·ŜR²)/(T−1)].
// The Probabilistic Sharpe Ratio is PSR(SR*) = Φ[(ŜR − SR*)/σ(ŜR)], and the
// DEFLATED Sharpe Ratio sets the benchmark SR* to the expected max under N
// trials — the probability the strategy is genuinely skilled after deflating for
// the search. Verified by scripts/verify-backtest-sim.mjs.

const EULER_GAMMA = 0.5772156649015329;

// Inverse standard normal CDF (Acklam's rational approximation, ~1e-9).
function normalInv(p) {
  if (p <= 0) return -Infinity;
  if (p >= 1) return Infinity;
  const a = [-3.969683028665376e1, 2.209460984245205e2, -2.759285104469687e2, 1.383577518672690e2, -3.066479806614716e1, 2.506628277459239e0];
  const b = [-5.447609879822406e1, 1.615858368580409e2, -1.556989798598866e2, 6.680131188771972e1, -1.328068155288572e1];
  const c = [-7.784894002430293e-3, -3.223964580411365e-1, -2.400758277161838e0, -2.549732539343734e0, 4.374664141464968e0, 2.938163982698783e0];
  const d = [7.784695709041462e-3, 3.224671290700398e-1, 2.445134137142996e0, 3.754408661907416e0];
  const plow = 0.02425, phigh = 1 - plow;
  let q, r;
  if (p < plow) { q = Math.sqrt(-2 * Math.log(p)); return (((((c[0] * q + c[1]) * q + c[2]) * q + c[3]) * q + c[4]) * q + c[5]) / ((((d[0] * q + d[1]) * q + d[2]) * q + d[3]) * q + 1); }
  if (p <= phigh) { q = p - 0.5; r = q * q; return (((((a[0] * r + a[1]) * r + a[2]) * r + a[3]) * r + a[4]) * r + a[5]) * q / (((((b[0] * r + b[1]) * r + b[2]) * r + b[3]) * r + b[4]) * r + 1); }
  q = Math.sqrt(-2 * Math.log(1 - p)); return -(((((c[0] * q + c[1]) * q + c[2]) * q + c[3]) * q + c[4]) * q + c[5]) / ((((d[0] * q + d[1]) * q + d[2]) * q + d[3]) * q + 1);
}

// Expected maximum of nTrials independent trials, in Sharpe units (√varTrials scale).
function expectedMaxSharpe(nTrials, varTrials) {
  if (nTrials <= 1) return 0;
  const sd = Math.sqrt(Math.max(varTrials, 0));
  const z1 = normalInv(1 - 1 / nTrials);
  const z2 = normalInv(1 - 1 / (nTrials * Math.E));
  return sd * ((1 - EULER_GAMMA) * z1 + EULER_GAMMA * z2);
}

// Standard error of an estimated Sharpe over T observations (Lo 2002).
function sharpeStdError(sr, T, skew = 0, kurt = 3) {
  return Math.sqrt(Math.max((1 - skew * sr + ((kurt - 1) / 4) * sr * sr) / (T - 1), 1e-12));
}

// Probabilistic Sharpe Ratio: P(true SR > benchmark) given the estimate.
function probabilisticSharpe(sr, benchmark, T, skew = 0, kurt = 3) {
  return normalCDF((sr - benchmark) / sharpeStdError(sr, T, skew, kurt));
}

function simulateBacktestOverfit({ sharpe, nTrials, years, freq = 252, skew = 0, kurt = 3, mcRuns = 400, seed = 20260607 }) {
  const T = Math.max(2, Math.round(years * freq));
  const srObs = sharpe / Math.sqrt(freq);          // per-observation Sharpe
  const varTrials = 1 / (T - 1);                    // null variance of a Sharpe estimate
  const srStar = expectedMaxSharpe(nTrials, varTrials);          // per-obs luck threshold
  const srStarAnn = srStar * Math.sqrt(freq);
  const se = sharpeStdError(srObs, T, skew, kurt) * Math.sqrt(freq);  // annualised SE
  const dsrVal = probabilisticSharpe(srObs, srStar, T, skew, kurt);   // Deflated Sharpe Ratio
  // expected-max-Sharpe (annualised) vs N — the rising "luck threshold"
  const curve = [];
  const Nmax = 5000, nPts = 48;
  for (let i = 0; i < nPts; i++) {
    const N = Math.round(Math.pow(10, (Math.log10(Nmax)) * i / (nPts - 1)));
    const NN = Math.max(1, N);
    curve.push({ N: NN, expMaxAnn: expectedMaxSharpe(NN, varTrials) * Math.sqrt(freq) });
  }
  // breakeven N: where the luck threshold first reaches the observed Sharpe
  let breakevenN = null;
  for (const pt of curve) { if (pt.expMaxAnn >= sharpe) { breakevenN = pt.N; break; } }
  // Monte-Carlo in t-stat units: best of N pure-noise strategies vs observed t.
  // Under the null a sample Sharpe's t-stat (ŜR·√T) is ~ standard normal, so
  // each trial draws one N(0,1) and we take the max of nTrials — fast & valid.
  const observedT = sharpe * Math.sqrt(years);     // observed t-stat = SR_ann·√years
  const rng = makeRng(seed); const gauss = makeGaussian(rng);
  let beat = 0, sumMax = 0;
  for (let e = 0; e < mcRuns; e++) {
    let maxT = -Infinity;
    for (let n = 0; n < nTrials; n++) { const z = gauss(); if (z > maxT) maxT = z; }
    sumMax += maxT;
    if (maxT >= observedT) beat++;
  }
  const pLuck = beat / mcRuns;                      // P(best-of-N noise ≥ your result)
  const mcMaxMean = sumMax / mcRuns;               // ≈ expectedMaxSharpe(N,1)
  const verdict = dsrVal > 0.95 ? 'skill' : (dsrVal >= 0.5 ? 'inconclusive' : 'overfit');
  return { srStar, srStarAnn, se, dsr: dsrVal, observedT, pLuck, mcMaxMean, curve, breakevenN, verdict, T, srObs, sharpe, nTrials, years };
}

registerComponent('BacktestOverfitSim', function BacktestOverfitSim(host, params, lang) {
  const W = 640, H = 400;
  const M = { top: 20, right: 16, bottom: 40, left: 54 };

  const labels = lang === 'id' ? {
    sr: 'Sharpe teramati (tahunan)', n: 'Jumlah strategi dicoba N', yr: 'Panjang sampel (tahun)',
    x: 'Jumlah strategi dicoba N (skala log)', y: 'Sharpe tahunan',
    threshold: 'Ambang "keberuntungan": E[max Sharpe] dari N strategi tanpa edge',
    obs: 'Sharpe teramati', dsr: 'Deflated Sharpe Ratio', srstar: 'Ambang luck @N', se: 'SE Sharpe',
    pluck: 'Noise terbaik dari N mengalahkanmu', be: 'Impas pada ~N',
    skill: '✓ Bukti SKILL (DSR > 95%)', inconc: '~ Belum konklusif', overfit: '✗ Kemungkinan OVERFIT — keberuntungan menjelaskannya',
  } : {
    sr: 'Observed Sharpe (annual)', n: 'Strategies tried N', yr: 'Sample length (years)',
    x: 'Number of strategies tried N (log scale)', y: 'Annual Sharpe',
    threshold: '"Luck" threshold: E[max Sharpe] of N skill-less strategies',
    obs: 'Observed Sharpe', dsr: 'Deflated Sharpe Ratio', srstar: 'Luck threshold @N', se: 'Sharpe SE',
    pluck: 'Best of N noise beats you', be: 'Breaks even at ~N',
    skill: '✓ Evidence of SKILL (DSR > 95%)', inconc: '~ Inconclusive', overfit: '✗ Likely OVERFIT — luck explains it',
  };

  host.controlsRoot.innerHTML = `
    <div class="viz-control-row"><label class="viz-control-label" for="viz-bo-sr">${labels.sr}</label><input type="range" id="viz-bo-sr" min="0" max="4" step="0.05" value="${params.sharpe}" /><span class="viz-control-value" data-viz-show="sr">${params.sharpe.toFixed(2)}</span></div>
    <div class="viz-control-row"><label class="viz-control-label" for="viz-bo-n">${labels.n}</label><input type="range" id="viz-bo-n" min="1" max="1000" step="1" value="${params.nTrials}" /><span class="viz-control-value" data-viz-show="n">${params.nTrials}</span></div>
    <div class="viz-control-row"><label class="viz-control-label" for="viz-bo-yr">${labels.yr}</label><input type="range" id="viz-bo-yr" min="0.5" max="10" step="0.5" value="${params.years}" /><span class="viz-control-value" data-viz-show="yr">${params.years}</span></div>
  `;

  const plotW = W - M.left - M.right, plotH = H - M.top - M.bottom;
  const logNmax = Math.log10(5000);

  function draw() {
    const sim = simulateBacktestOverfit({ sharpe: params.sharpe, nTrials: params.nTrials, years: params.years, mcRuns: 300 });
    let hi = Math.max(params.sharpe, sim.curve[sim.curve.length - 1].expMaxAnn) * 1.15 || 1;
    const xAt = (N) => M.left + (Math.log10(Math.max(N, 1)) / logNmax) * plotW;
    const yAt = (v) => M.top + (1 - v / hi) * plotH;

    let thr = '';
    sim.curve.forEach((pt, i) => { thr += `${i === 0 ? 'M' : 'L'} ${xAt(pt.N).toFixed(1)} ${yAt(pt.expMaxAnn).toFixed(1)} `; });
    const yObs = yAt(params.sharpe);
    const curN = Math.max(1, params.nTrials);
    const col = sim.verdict === 'skill' ? '#4d7a3a' : (sim.verdict === 'overfit' ? '#a05050' : 'var(--gold)');
    let xt = ''; for (const N of [1, 10, 100, 1000, 5000]) xt += `<text x="${xAt(N).toFixed(1)}" y="${M.top + plotH + 13}" text-anchor="middle" font-size="9" fill="var(--ink-mute)">${N}</text>`;
    let yt = ''; for (let v = 0; v <= hi; v += (hi > 3 ? 1 : 0.5)) { const yy = yAt(v); yt += `<line x1="${M.left}" y1="${yy.toFixed(1)}" x2="${M.left + plotW}" y2="${yy.toFixed(1)}" stroke="var(--line)" stroke-dasharray="2 3" opacity="0.4" /><text x="${M.left - 6}" y="${(yy + 3).toFixed(1)}" text-anchor="end" font-size="9" fill="var(--ink-mute)">${v.toFixed(1)}</text>`; }

    host.canvasRoot.innerHTML = `
      <svg viewBox="0 0 ${W} ${H}" width="100%" preserveAspectRatio="xMidYMid meet" class="viz-svg">
        <rect x="0" y="0" width="${W}" height="${H}" fill="var(--bg-elev-1)" />
        ${yt}
        <line x1="${M.left}" y1="${yObs.toFixed(1)}" x2="${M.left + plotW}" y2="${yObs.toFixed(1)}" stroke="var(--azul)" stroke-width="1.5" /><text x="${M.left + plotW}" y="${(yObs - 4).toFixed(1)}" text-anchor="end" font-size="9" fill="var(--azul)">${labels.obs} ${params.sharpe.toFixed(2)}</text>
        <path d="${thr}" fill="none" stroke="${col}" stroke-width="2" />
        <line x1="${xAt(curN).toFixed(1)}" y1="${M.top}" x2="${xAt(curN).toFixed(1)}" y2="${M.top + plotH}" stroke="var(--ink-mute)" stroke-dasharray="2 2" opacity="0.6" />
        <circle cx="${xAt(curN).toFixed(1)}" cy="${yAt(sim.srStarAnn).toFixed(1)}" r="3.5" fill="${col}" />
        <line x1="${M.left}" y1="${M.top}" x2="${M.left}" y2="${M.top + plotH}" stroke="var(--line)" />
        <line x1="${M.left}" y1="${M.top + plotH}" x2="${M.left + plotW}" y2="${M.top + plotH}" stroke="var(--line)" />
        ${xt}
        <text x="${M.left + plotW / 2}" y="${M.top + plotH + 32}" text-anchor="middle" font-size="11" fill="var(--ink-mute)">${labels.x}</text>
        <text x="${M.left - 40}" y="${M.top + plotH / 2}" text-anchor="middle" font-size="11" fill="var(--ink-mute)" transform="rotate(-90 ${M.left - 40} ${M.top + plotH / 2})">${labels.y}</text>
        <text x="${M.left + 8}" y="${M.top + 12}" font-size="8" fill="${col}">${labels.threshold}</text>
      </svg>
    `;

    const vtxt = sim.verdict === 'skill' ? labels.skill : (sim.verdict === 'overfit' ? labels.overfit : labels.inconc);
    host.readoutRoot.innerHTML = `
      <div class="viz-readout-row" style="color:${col};font-weight:600;">${vtxt}</div>
      <div class="viz-readout-row">
        <span><strong>${labels.dsr}</strong> = ${(sim.dsr * 100).toFixed(1)}%</span><span class="dot">·</span>
        <span><strong>${labels.srstar}</strong> = ${sim.srStarAnn.toFixed(2)}</span><span class="dot">·</span>
        <span><strong>${labels.se}</strong> = ±${sim.se.toFixed(2)}</span>
      </div>
      <div class="viz-readout-row">
        <span><strong>${labels.pluck}</strong> = ${(sim.pLuck * 100).toFixed(0)}%</span>${sim.breakevenN ? `<span class="dot">·</span><span>${labels.be} ${sim.breakevenN}</span>` : ''}
      </div>
    `;
  }

  const elSr = host.controlsRoot.querySelector('#viz-bo-sr');
  const elN = host.controlsRoot.querySelector('#viz-bo-n');
  const elYr = host.controlsRoot.querySelector('#viz-bo-yr');
  elSr.addEventListener('input', () => { params.sharpe = parseFloat(elSr.value); host.controlsRoot.querySelector('[data-viz-show="sr"]').textContent = params.sharpe.toFixed(2); draw(); });
  elN.addEventListener('input', () => { params.nTrials = parseInt(elN.value, 10); host.controlsRoot.querySelector('[data-viz-show="n"]').textContent = params.nTrials; draw(); });
  elYr.addEventListener('input', () => { params.years = parseFloat(elYr.value); host.controlsRoot.querySelector('[data-viz-show="yr"]').textContent = params.years; draw(); });

  host.onReset(() => {
    elSr.value = params.sharpe; elN.value = params.nTrials; elYr.value = params.years;
    host.controlsRoot.querySelector('[data-viz-show="sr"]').textContent = params.sharpe.toFixed(2);
    host.controlsRoot.querySelector('[data-viz-show="n"]').textContent = params.nTrials;
    host.controlsRoot.querySelector('[data-viz-show="yr"]').textContent = params.years;
    draw();
  });

  draw();
});

// Export backtest-overfitting helpers for testing / external use
export { normalInv, expectedMaxSharpe, sharpeStdError, probabilisticSharpe, simulateBacktestOverfit };

// ─── Market Profile (TPO) — time-at-price, not volume-at-price ──────────
//
// Steidlmayer's Market Profile / Dalton's reading of it. The day is split into
// 30-minute periods lettered A, B, C, …; each price a period trades at earns one
// TPO (time-price-opportunity) letter, so the profile is a histogram of TIME at
// each price (distinct from the VolumeProfileSim, which is VOLUME at price).
// From the letter stack we read the auction:
//   • POC  — the price with the most TPOs (longest row): fairest price / magnet.
//   • Value Area — the central ~70% of TPOs (built outward from the POC).
//   • Initial Balance (IB) — the range of the first two periods (A+B); range
//     EXTENSION beyond it signals other-timeframe (directional) participation.
//   • Single prints / tails — one-TPO rows; a tail at an extreme = aggressive
//     rejection; a single-print valley between two fat areas = a double
//     distribution.
//   • Day type (Dalton): Normal, Normal-Variation, Trend, Neutral,
//     Double-Distribution — read from IB width, range extension and shape.
// Refs: Steidlmayer & Koy, *Markets and Market Logic* (1986); Dalton, Jones &
// Dalton, *Mind Over Markets* and *Markets in Profile*; CBOT, *A Six-Part Study
// Guide to Market Profile*. Verified by scripts/verify-tpo-sim.mjs.

function detectDoubleDist(counts) {
  const n = counts.length; let max = 0; for (const c of counts) if (c > max) max = c;
  if (max < 3) return false;
  for (let r = 1; r < n - 1; r++) {
    if (counts[r] <= 1) {
      let below = 0, above = 0;
      for (let i = 0; i < r; i++) if (counts[i] > below) below = counts[i];
      for (let i = r + 1; i < n; i++) if (counts[i] > above) above = counts[i];
      if (below >= 0.6 * max && above >= 0.6 * max) return true;
    }
  }
  return false;
}

function simulateTPO({ trend = 1, vol = 0.5, nPeriods = 13, seed = 7, nRows = 40 }) {
  nPeriods = Math.max(3, Math.min(26, Math.round(nPeriods)));
  const rng = makeRng(seed); const gauss = makeGaussian(rng);
  const halfBase = 2 + vol * 7;       // bracket half-width (price units)
  const step = 1 + vol * 4;           // inter-period center step noise
  const brackets = [];
  let center = 0;
  for (let i = 0; i < nPeriods; i++) {
    if (i > 0) center += trend + gauss() * step;
    const half = halfBase * (0.75 + 0.5 * Math.abs(gauss()));
    brackets.push({ lo: center - half, hi: center + half, letter: i });
  }
  let lo = Infinity, hi = -Infinity;
  for (const b of brackets) { if (b.lo < lo) lo = b.lo; if (b.hi > hi) hi = b.hi; }
  if (hi - lo < 1e-9) hi = lo + 1;
  const binW = (hi - lo) / nRows;
  const counts = new Array(nRows).fill(0);
  const letters = Array.from({ length: nRows }, () => []);
  for (const b of brackets) {
    for (let r = 0; r < nRows; r++) {
      const binLo = lo + r * binW, binHi = binLo + binW;
      if (b.lo <= binHi && b.hi >= binLo) { counts[r] += 1; letters[r].push(b.letter); }
    }
  }
  const binPrice = (r) => lo + (r + 0.5) * binW;
  // POC = most TPOs; tie → closest to the middle of the range
  let maxC = 0; for (const c of counts) if (c > maxC) maxC = c;
  let pocIdx = 0; const mid = (nRows - 1) / 2; let bestDist = Infinity;
  for (let r = 0; r < nRows; r++) if (counts[r] === maxC) { const d = Math.abs(r - mid); if (d < bestDist) { bestDist = d; pocIdx = r; } }
  const va = valueArea(counts, pocIdx, 0.7);
  const ibHi = Math.max(brackets[0].hi, brackets[1].hi);
  const ibLo = Math.min(brackets[0].lo, brackets[1].lo);
  const extUp = Math.max(0, hi - ibHi);
  const extDown = Math.max(0, ibLo - lo);
  const singlePrints = []; for (let r = 0; r < nRows; r++) if (counts[r] === 1) singlePrints.push(r);
  let sellTail = 0; for (let r = nRows - 1; r >= 0 && counts[r] === 1; r--) sellTail++;
  let buyTail = 0; for (let r = 0; r < nRows && counts[r] === 1; r++) buyTail++;
  const netMove = center;             // last center − first (=0)
  const totalRange = hi - lo;
  const ibRange = ibHi - ibLo;
  let dayType;
  if (Math.abs(netMove) > 0.55 * totalRange && (extUp < 0.05 * totalRange || extDown < 0.05 * totalRange)) dayType = 'trend';
  else if (detectDoubleDist(counts)) dayType = 'double-distribution';
  else if (extUp > 0.12 * ibRange && extDown > 0.12 * ibRange) dayType = 'neutral';
  else if (ibRange >= 0.82 * totalRange) dayType = 'normal';
  else dayType = 'normal-variation';
  return {
    counts, letters, nRows, lo, hi, binW,
    pocIdx, pocPrice: binPrice(pocIdx),
    vaLoIdx: va.loI, vaHiIdx: va.hiI, vaLow: binPrice(va.loI), vaHigh: binPrice(va.hiI), vaFrac: va.fracCovered, totalTPO: va.total,
    ibLow: ibLo, ibHigh: ibHi, ibRange, extUp, extDown, totalRange, netMove,
    singlePrints, buyTail, sellTail, dayType, binPriceFn: binPrice,
  };
}

registerComponent('MarketProfileTPOSim', function MarketProfileTPOSim(host, params, lang) {
  const W = 640, H = 420;
  const M = { top: 18, right: 150, bottom: 24, left: 50 };

  const dayLabel = lang === 'id' ? {
    'trend': 'Trend Day (1 arah, IB kecil)', 'normal': 'Normal Day (IB ≈ seluruh range)',
    'normal-variation': 'Normal Variation Day (extension 1 sisi)', 'neutral': 'Neutral Day (extension 2 sisi)',
    'double-distribution': 'Double-Distribution Day (2 value area)',
  } : {
    'trend': 'Trend Day (one-way, small IB)', 'normal': 'Normal Day (IB ≈ whole range)',
    'normal-variation': 'Normal Variation Day (one-side extension)', 'neutral': 'Neutral Day (both-side extension)',
    'double-distribution': 'Double-Distribution Day (two value areas)',
  };
  const labels = lang === 'id' ? {
    trend: 'Karakter hari (seimbang ↔ trend)', vol: 'Lebar range', np: 'Jumlah periode (huruf)',
    poc: 'POC', va: 'Value area (70%)', ib: 'Initial balance', ext: 'Range extension', tails: 'Tail (beli/jual)', type: 'Tipe hari',
  } : {
    trend: 'Day character (balance ↔ trend)', vol: 'Range width', np: 'Periods (letters)',
    poc: 'POC', va: 'Value area (70%)', ib: 'Initial balance', ext: 'Range extension', tails: 'Tails (buy/sell)', type: 'Day type',
  };

  host.controlsRoot.innerHTML = `
    <div class="viz-control-row"><label class="viz-control-label" for="viz-tpo-tr">${labels.trend}</label><input type="range" id="viz-tpo-tr" min="-8" max="8" step="0.5" value="${params.trend}" /><span class="viz-control-value" data-viz-show="tr">${params.trend}</span></div>
    <div class="viz-control-row"><label class="viz-control-label" for="viz-tpo-vol">${labels.vol}</label><input type="range" id="viz-tpo-vol" min="0.1" max="1" step="0.05" value="${params.vol}" /><span class="viz-control-value" data-viz-show="vol">${params.vol.toFixed(2)}</span></div>
    <div class="viz-control-row"><label class="viz-control-label" for="viz-tpo-np">${labels.np}</label><input type="range" id="viz-tpo-np" min="6" max="26" step="1" value="${params.nPeriods}" /><span class="viz-control-value" data-viz-show="np">${params.nPeriods}</span></div>
  `;

  const plotW = W - M.left - M.right, plotH = H - M.top - M.bottom;

  function draw() {
    const sim = simulateTPO({ trend: params.trend, vol: params.vol, nPeriods: params.nPeriods, seed: 7, nRows: 40 });
    const rowH = plotH / sim.nRows;
    const yAt = (r) => M.top + (sim.nRows - 1 - r) * rowH;       // r=0 (low) at bottom
    const maxC = Math.max(...sim.counts);
    const fs = Math.max(4, Math.min(9, rowH - 0.5));
    const letterW = Math.max(5, fs * 0.72);

    let rows = '';
    for (let r = 0; r < sim.nRows; r++) {
      const y = yAt(r), cy = y + rowH - 1.5;
      const inVA = r >= sim.vaLoIdx && r <= sim.vaHiIdx;
      const isPOC = r === sim.pocIdx;
      if (inVA) rows += `<rect x="${M.left}" y="${y.toFixed(1)}" width="${plotW}" height="${rowH.toFixed(2)}" fill="var(--azul)" opacity="0.07" />`;
      if (isPOC) rows += `<rect x="${M.left}" y="${y.toFixed(1)}" width="${plotW}" height="${rowH.toFixed(2)}" fill="var(--gold)" opacity="0.18" />`;
      const letterStr = sim.letters[r].map((i) => String.fromCharCode(65 + i)).join('');
      const col = isPOC ? 'var(--gold)' : (sim.counts[r] === 1 ? '#a05050' : 'var(--ink)');
      // render letters across the row
      let lstr = '';
      for (let k = 0; k < letterStr.length; k++) lstr += `<text x="${(M.left + 4 + k * letterW).toFixed(1)}" y="${cy.toFixed(1)}" font-size="${fs.toFixed(1)}" font-family="monospace" fill="${col}">${letterStr[k]}</text>`;
      rows += lstr;
    }

    // axes / markers
    const yIBhi = M.top + (1 - (sim.ibHigh - sim.lo) / (sim.hi - sim.lo)) * plotH;
    const yIBlo = M.top + (1 - (sim.ibLow - sim.lo) / (sim.hi - sim.lo)) * plotH;
    let priceTicks = '';
    for (const f of [0, 0.25, 0.5, 0.75, 1]) { const pr = sim.lo + f * (sim.hi - sim.lo); const yy = M.top + (1 - f) * plotH; priceTicks += `<text x="${M.left - 5}" y="${(yy + 3).toFixed(1)}" text-anchor="end" font-size="8" fill="var(--ink-mute)">${pr.toFixed(0)}</text>`; }

    host.canvasRoot.innerHTML = `
      <svg viewBox="0 0 ${W} ${H}" width="100%" preserveAspectRatio="xMidYMid meet" class="viz-svg">
        <rect x="0" y="0" width="${W}" height="${H}" fill="var(--bg-elev-1)" />
        ${rows}
        ${priceTicks}
        <line x1="${M.left}" y1="${M.top}" x2="${M.left}" y2="${M.top + plotH}" stroke="var(--line)" />
        <!-- IB bracket on the far left -->
        <line x1="${M.left - 16}" y1="${yIBhi.toFixed(1)}" x2="${M.left - 16}" y2="${yIBlo.toFixed(1)}" stroke="#4d7a3a" stroke-width="2" />
        <line x1="${M.left - 19}" y1="${yIBhi.toFixed(1)}" x2="${M.left - 13}" y2="${yIBhi.toFixed(1)}" stroke="#4d7a3a" stroke-width="2" />
        <line x1="${M.left - 19}" y1="${yIBlo.toFixed(1)}" x2="${M.left - 13}" y2="${yIBlo.toFixed(1)}" stroke="#4d7a3a" stroke-width="2" />
        <text x="${M.left - 16}" y="${(M.top + plotH + 14)}" text-anchor="middle" font-size="8" fill="#4d7a3a">IB</text>
        <!-- right-side annotations -->
        <g transform="translate(${M.left + plotW + 10}, ${M.top + 6})" font-size="9" fill="var(--ink-mute)">
          <rect x="-2" y="-4" width="10" height="6" fill="var(--gold)" opacity="0.5" /><text x="12" y="1">${labels.poc} ${sim.pocPrice.toFixed(0)}</text>
          <rect x="-2" y="10" width="10" height="6" fill="var(--azul)" opacity="0.4" /><text x="12" y="15">${labels.va} ${sim.vaLow.toFixed(0)}–${sim.vaHigh.toFixed(0)}</text>
          <text x="0" y="30">${labels.ib} ${sim.ibLow.toFixed(0)}–${sim.ibHigh.toFixed(0)}</text>
          <text x="0" y="44">${labels.ext}: ↑${sim.extUp.toFixed(0)} ↓${sim.extDown.toFixed(0)}</text>
          <text x="0" y="58" fill="#a05050">${labels.tails}: ${sim.buyTail}/${sim.sellTail}</text>
        </g>
      </svg>
    `;

    const dcol = sim.dayType === 'trend' ? 'var(--azul)' : (sim.dayType === 'double-distribution' ? '#7c4dff' : (sim.dayType === 'neutral' ? 'var(--ink-mute)' : 'var(--gold)'));
    host.readoutRoot.innerHTML = `
      <div class="viz-readout-row" style="color:${dcol};font-weight:600;">${labels.type}: ${dayLabel[sim.dayType]}</div>
      <div class="viz-readout-row">
        <span><strong>${labels.poc}</strong> ${sim.pocPrice.toFixed(1)}</span><span class="dot">·</span>
        <span><strong>${labels.va}</strong> ${sim.vaLow.toFixed(1)}–${sim.vaHigh.toFixed(1)} (${(sim.vaFrac * 100).toFixed(0)}%)</span><span class="dot">·</span>
        <span><strong>${labels.ib}</strong> ${sim.ibLow.toFixed(1)}–${sim.ibHigh.toFixed(1)}</span>
      </div>
    `;
  }

  const elTr = host.controlsRoot.querySelector('#viz-tpo-tr');
  const elVol = host.controlsRoot.querySelector('#viz-tpo-vol');
  const elNp = host.controlsRoot.querySelector('#viz-tpo-np');
  elTr.addEventListener('input', () => { params.trend = parseFloat(elTr.value); host.controlsRoot.querySelector('[data-viz-show="tr"]').textContent = params.trend; draw(); });
  elVol.addEventListener('input', () => { params.vol = parseFloat(elVol.value); host.controlsRoot.querySelector('[data-viz-show="vol"]').textContent = params.vol.toFixed(2); draw(); });
  elNp.addEventListener('input', () => { params.nPeriods = parseInt(elNp.value, 10); host.controlsRoot.querySelector('[data-viz-show="np"]').textContent = params.nPeriods; draw(); });

  host.onReset(() => {
    elTr.value = params.trend; elVol.value = params.vol; elNp.value = params.nPeriods;
    host.controlsRoot.querySelector('[data-viz-show="tr"]').textContent = params.trend;
    host.controlsRoot.querySelector('[data-viz-show="vol"]').textContent = params.vol.toFixed(2);
    host.controlsRoot.querySelector('[data-viz-show="np"]').textContent = params.nPeriods;
    draw();
  });

  draw();
});

// Export Market Profile (TPO) helpers for testing / external use
export { simulateTPO, detectDoubleDist };

// ─── Variance Risk Premium / variance swaps ─────────────────────────────
//
// Implied variance (priced from options) is systematically RICHER than the
// variance the market subsequently realises — the Variance Risk Premium (Carr &
// Wu 2009; Bollerslev, Tauchen & Zhou 2009). A variance swap pays
//   N_var · (RV − K_var),   RV = (252/n)·Σ rₜ²,  K_var = σ_imp²,
// so SELLING variance (short the swap) collects K_var − RV: a small premium most
// of the time, with rare large losses when volatility spikes (RV is right-
// skewed ⇒ the short P&L is left-skewed — "pennies in front of a steamroller").
// The fair strike is model-free: a variance swap replicates a LOG CONTRACT — a
// static portfolio of OTM options weighted 1/K² plus a dynamic futures hedge
// (Demeterfi, Derman, Kamal & Zou 1999); the same 1/K² spanning gives the
// model-free implied moments of Bakshi, Kapadia & Madan (2003). Verified by
// scripts/verify-variance-sim.mjs.

function sampleSkew(xs) {
  const n = xs.length; if (n < 3) return 0;
  let m = 0; for (const x of xs) m += x; m /= n;
  let s2 = 0, s3 = 0; for (const x of xs) { const d = x - m; s2 += d * d; s3 += d * d * d; }
  const sd = Math.sqrt(s2 / n);
  return sd > 0 ? (s3 / n) / (sd * sd * sd) : 0;
}

function simulateVarianceSwap({ impliedVol, realizedVol, days = 63, nRuns = 1500, jumpsPerYear = 0, jumpSize = 0.08, seed = 20260607, nDaysPerYear = 252 }) {
  const Kvar = impliedVol * impliedVol;
  const n = Math.max(2, Math.round(days));
  const T = n / nDaysPerYear;
  const dt = 1 / nDaysPerYear;
  const sigStep = realizedVol * Math.sqrt(dt);
  const jumpP = Math.max(0, jumpsPerYear) * dt;          // per-day jump probability
  const rng = makeRng(seed); const gauss = makeGaussian(rng);
  const pnls = [], rvs = []; let rvSum = 0;
  for (let run = 0; run < nRuns; run++) {
    let sumsq = 0;
    for (let t = 0; t < n; t++) {
      let r = gauss() * sigStep;
      if (jumpP > 0 && rng() < jumpP) r += -jumpSize;     // downward vol-spike jump
      sumsq += r * r;
    }
    const RV = (nDaysPerYear / n) * sumsq;                // annualised realised variance
    rvSum += RV; rvs.push(RV); pnls.push(Kvar - RV);      // short variance-swap payoff (per unit var notional)
  }
  const ERV = rvSum / nRuns;
  const vrp = Kvar - ERV;
  let mean = 0; for (const p of pnls) mean += p; mean /= nRuns;
  let sd = 0; for (const p of pnls) sd += (p - mean) * (p - mean); sd = Math.sqrt(sd / nRuns);
  const sorted = [...pnls].sort((a, b) => a - b);
  const worst = sorted[0];
  const k5 = Math.max(1, Math.floor(0.05 * nRuns)); let cs = 0; for (let i = 0; i < k5; i++) cs += sorted[i];
  const cvar = cs / k5;
  let losses = 0; for (const p of pnls) if (p < 0) losses++;
  const pLoss = losses / nRuns;
  return {
    Kvar, ERV, vrp, strikeVol: impliedVol, eRealVol: Math.sqrt(Math.max(ERV, 0)),
    mean, sd, worst, cvar, pLoss, winRate: 1 - pLoss, median: sorted[Math.floor(0.5 * (nRuns - 1))],
    skew: sampleSkew(pnls), sharpe: sd > 0 ? mean / sd : 0, pnls, rvs, n, T, jumpsPerYear,
  };
}

// Fair variance-swap strike via the Demeterfi-Derman-Kamal-Zou log-contract
// replication: a 1/K²-weighted strip of OTM options. Reuses bsPrice.
function fairVarianceStrike({ S0 = 100, r = 0, T = 0.25, atmVol = 0.2, skew = 0, kMinFrac = 0.2, kMaxFrac = 3, nStrikes = 300 }) {
  const F = S0 * Math.exp(r * T);
  const Sstar = F;
  const kMin = kMinFrac * S0, kMax = kMaxFrac * S0;
  const dK = (kMax - kMin) / (nStrikes - 1);
  let sum = 0;
  for (let i = 0; i < nStrikes; i++) {
    const K = kMin + i * dK;
    if (K <= 0) continue;
    const vol = Math.max(0.01, atmVol + skew * Math.log(K / F));   // skew: linear in log-moneyness
    const price = bsPrice(K <= Sstar ? 'put' : 'call', S0, K, vol, T, r);
    sum += (dK / (K * K)) * price;
  }
  const bracket = r * T - (S0 * Math.exp(r * T) / Sstar - 1) - Math.log(Sstar / S0);  // ≈ 0 when S*=F
  const varFair = (2 / T) * bracket + Math.exp(r * T) * (2 / T) * sum;
  return { varFair, volFair: Math.sqrt(Math.max(varFair, 0)), atmVol, skew };
}

registerComponent('VarianceSwapSim', function VarianceSwapSim(host, params, lang) {
  const W = 640, H = 400;
  const M = { top: 20, right: 16, bottom: 40, left: 50 };

  const labels = lang === 'id' ? {
    iv: 'Implied vol σ (strike swap) %', rv: 'Realized vol (asli) %', dte: 'Horizon (hari)', jp: 'Lonjakan vol / tahun',
    x: 'Realized volatility σ_RV (%)', y: 'Frekuensi',
    strike: 'Strike σ', erv: 'E[σ_RV]', vrp: 'VRP', win: 'Win rate (short)', mean: 'Mean P&L', ploss: 'P(rugi)',
    worst: 'Terburuk', cvar: 'CVaR 5%', skew: 'Skew P&L', shp: 'Sharpe', varpts: 'var-pts',
    note: 'Short menang kalau realized < strike (kiri). Ekor kanan (lonjakan vol) = kerugian besar langka.',
  } : {
    iv: 'Implied vol σ (swap strike) %', rv: 'Realized vol (true) %', dte: 'Horizon (days)', jp: 'Vol spikes / year',
    x: 'Realized volatility σ_RV (%)', y: 'Frequency',
    strike: 'Strike σ', erv: 'E[σ_RV]', vrp: 'VRP', win: 'Win rate (short)', mean: 'Mean P&L', ploss: 'P(loss)',
    worst: 'Worst', cvar: 'CVaR 5%', skew: 'P&L skew', shp: 'Sharpe', varpts: 'var-pts',
    note: 'The short wins when realized < strike (left). The right tail (vol spikes) = rare large losses.',
  };

  host.controlsRoot.innerHTML = `
    <div class="viz-control-row"><label class="viz-control-label" for="viz-vrp-iv">${labels.iv}</label><input type="range" id="viz-vrp-iv" min="5" max="120" step="1" value="${(params.impliedVol * 100)}" /><span class="viz-control-value" data-viz-show="iv">${(params.impliedVol * 100).toFixed(0)}</span></div>
    <div class="viz-control-row"><label class="viz-control-label" for="viz-vrp-rv">${labels.rv}</label><input type="range" id="viz-vrp-rv" min="5" max="120" step="1" value="${(params.realizedVol * 100)}" /><span class="viz-control-value" data-viz-show="rv">${(params.realizedVol * 100).toFixed(0)}</span></div>
    <div class="viz-control-row"><label class="viz-control-label" for="viz-vrp-d">${labels.dte}</label><input type="range" id="viz-vrp-d" min="5" max="252" step="1" value="${params.days}" /><span class="viz-control-value" data-viz-show="d">${params.days}</span></div>
    <div class="viz-control-row"><label class="viz-control-label" for="viz-vrp-j">${labels.jp}</label><input type="range" id="viz-vrp-j" min="0" max="4" step="0.5" value="${params.jumpsPerYear}" /><span class="viz-control-value" data-viz-show="j">${params.jumpsPerYear}</span></div>
  `;

  const plotW = W - M.left - M.right, plotH = H - M.top - M.bottom;

  function draw() {
    const sim = simulateVarianceSwap({ impliedVol: params.impliedVol, realizedVol: params.realizedVol, days: params.days, jumpsPerYear: params.jumpsPerYear, nRuns: 1500 });
    const vols = sim.rvs.map((v) => Math.sqrt(Math.max(v, 0)));
    let lo = Math.min(...vols), hi = Math.max(...vols, params.impliedVol);
    lo = Math.max(0, lo * 0.95); hi = hi * 1.02 || 1;
    const nBins = 34;
    const bins = new Array(nBins).fill(0);
    for (const v of vols) { let b = Math.floor((v - lo) / (hi - lo) * nBins); b = Math.max(0, Math.min(nBins - 1, b)); bins[b]++; }
    const maxB = Math.max(...bins);
    const xAt = (v) => M.left + (v - lo) / (hi - lo) * plotW;
    const binW = plotW / nBins;
    const strikeX = xAt(params.impliedVol);

    let bars = '';
    for (let b = 0; b < nBins; b++) {
      const v0 = lo + (b + 0.5) / nBins * (hi - lo);
      const h = (bins[b] / maxB) * plotH;
      const x = M.left + b * binW, y = M.top + plotH - h;
      const col = v0 <= params.impliedVol ? '#4d7a3a' : '#a05050';   // short wins left of strike
      bars += `<rect x="${x.toFixed(1)}" y="${y.toFixed(1)}" width="${(binW - 0.6).toFixed(1)}" height="${h.toFixed(1)}" fill="${col}" opacity="0.7" />`;
    }
    let xt = ''; for (const f of [lo, lo + (hi - lo) * 0.5, hi]) xt += `<text x="${xAt(f).toFixed(1)}" y="${M.top + plotH + 14}" text-anchor="middle" font-size="9" fill="var(--ink-mute)">${(f * 100).toFixed(0)}%</text>`;

    host.canvasRoot.innerHTML = `
      <svg viewBox="0 0 ${W} ${H}" width="100%" preserveAspectRatio="xMidYMid meet" class="viz-svg">
        <rect x="0" y="0" width="${W}" height="${H}" fill="var(--bg-elev-1)" />
        ${bars}
        <line x1="${strikeX.toFixed(1)}" y1="${M.top}" x2="${strikeX.toFixed(1)}" y2="${M.top + plotH}" stroke="var(--gold)" stroke-width="2" /><text x="${strikeX.toFixed(1)}" y="${M.top - 6}" text-anchor="middle" font-size="9" fill="var(--gold)">${labels.strike} ${(params.impliedVol * 100).toFixed(0)}%</text>
        <line x1="${xAt(sim.eRealVol).toFixed(1)}" y1="${M.top}" x2="${xAt(sim.eRealVol).toFixed(1)}" y2="${M.top + plotH}" stroke="var(--azul)" stroke-dasharray="3 3" /><text x="${xAt(sim.eRealVol).toFixed(1)}" y="${M.top + 9}" text-anchor="middle" font-size="8" fill="var(--azul)">${labels.erv}</text>
        <line x1="${M.left}" y1="${M.top + plotH}" x2="${M.left + plotW}" y2="${M.top + plotH}" stroke="var(--line)" />
        ${xt}
        <text x="${M.left + plotW / 2}" y="${M.top + plotH + 30}" text-anchor="middle" font-size="11" fill="var(--ink-mute)">${labels.x}</text>
      </svg>
    `;

    const vp = (x) => (x * 10000).toFixed(0);   // variance points (σ² × 1e4)
    const vrpCol = sim.vrp > 0 ? '#4d7a3a' : '#a05050';
    host.readoutRoot.innerHTML = `
      <div class="viz-readout-row" style="color:${vrpCol};font-weight:600;">${labels.vrp} = ${vp(sim.vrp)} ${labels.varpts} (σ ${(sim.strikeVol * 100).toFixed(0)}% vs E[σ_RV] ${(sim.eRealVol * 100).toFixed(0)}%)</div>
      <div class="viz-readout-row">
        <span><strong>${labels.win}</strong> ${(sim.winRate * 100).toFixed(0)}%</span><span class="dot">·</span>
        <span><strong>${labels.mean}</strong> ${vp(sim.mean)}</span><span class="dot">·</span>
        <span><strong>${labels.worst}</strong> ${vp(sim.worst)}</span><span class="dot">·</span>
        <span><strong>${labels.cvar}</strong> ${vp(sim.cvar)}</span>
      </div>
      <div class="viz-readout-row">
        <span><strong>${labels.skew}</strong> ${sim.skew.toFixed(2)}</span><span class="dot">·</span>
        <span><strong>${labels.shp}</strong> ${sim.sharpe.toFixed(2)}</span><span class="dot">·</span>
        <span style="font-size:0.85em;">${labels.note}</span>
      </div>
    `;
  }

  const elIv = host.controlsRoot.querySelector('#viz-vrp-iv');
  const elRv = host.controlsRoot.querySelector('#viz-vrp-rv');
  const elD = host.controlsRoot.querySelector('#viz-vrp-d');
  const elJ = host.controlsRoot.querySelector('#viz-vrp-j');
  elIv.addEventListener('input', () => { params.impliedVol = parseFloat(elIv.value) / 100; host.controlsRoot.querySelector('[data-viz-show="iv"]').textContent = (params.impliedVol * 100).toFixed(0); draw(); });
  elRv.addEventListener('input', () => { params.realizedVol = parseFloat(elRv.value) / 100; host.controlsRoot.querySelector('[data-viz-show="rv"]').textContent = (params.realizedVol * 100).toFixed(0); draw(); });
  elD.addEventListener('input', () => { params.days = parseInt(elD.value, 10); host.controlsRoot.querySelector('[data-viz-show="d"]').textContent = params.days; draw(); });
  elJ.addEventListener('input', () => { params.jumpsPerYear = parseFloat(elJ.value); host.controlsRoot.querySelector('[data-viz-show="j"]').textContent = params.jumpsPerYear; draw(); });

  host.onReset(() => {
    elIv.value = params.impliedVol * 100; elRv.value = params.realizedVol * 100; elD.value = params.days; elJ.value = params.jumpsPerYear;
    host.controlsRoot.querySelector('[data-viz-show="iv"]').textContent = (params.impliedVol * 100).toFixed(0);
    host.controlsRoot.querySelector('[data-viz-show="rv"]').textContent = (params.realizedVol * 100).toFixed(0);
    host.controlsRoot.querySelector('[data-viz-show="d"]').textContent = params.days;
    host.controlsRoot.querySelector('[data-viz-show="j"]').textContent = params.jumpsPerYear;
    draw();
  });

  draw();
});

// Export variance-swap / VRP helpers for testing / external use
export { simulateVarianceSwap, fairVarianceStrike, sampleSkew };

// ─── Order flow: cumulative volume delta (CVD), absorption & divergence ──
//
// Order flow read by the practitioners (Luckshury, Tradingriot, Jim Talbot) and
// grounded in Kyle's λ (price moves in the net order flow). Each bar has a
// signed aggressor imbalance δ (buy − sell market volume); cumulative volume
// delta CVD = Σδ. Normally price tracks the flow: Δp ≈ λ·δ. The signal is when
// they DECOUPLE — a large δ that does NOT move price means a passive participant
// is ABSORBING it; CVD rising into a flat/lower price (or falling into a
// flat/higher price) is a CVD DIVERGENCE, a classic reversal tell. We model
// Δpₜ = λ(1−a)·δₜ + noise (a = absorption ∈ [0,1]); the OLS slope of Δp on δ
// recovers the effective impact λ(1−a), and the price-vs-CVD trend ratio flags
// absorption. Refs: Kyle 1985 (λ); Easley-López de Prado-O'Hara VPIN (order-flow
// toxicity); practitioner CVD/absorption usage. Verified by
// scripts/verify-orderflow-sim.mjs.

function linSlope(ys) {
  const n = ys.length; if (n < 2) return 0;
  const xbar = (n - 1) / 2; let ybar = 0; for (const y of ys) ybar += y; ybar /= n;
  let num = 0, den = 0;
  for (let i = 0; i < n; i++) { const dx = i - xbar; num += dx * (ys[i] - ybar); den += dx * dx; }
  return den > 0 ? num / den : 0;
}

function simulateOrderFlow({ lambda = 1.5, flowTrend = 0.3, absorption = 0, noise = 0.5, nBars = 80, seed = 20260607 }) {
  const rng = makeRng(seed); const gauss = makeGaussian(rng);
  const delta = [], dPrice = [], price = [], cvd = [];
  let p = 0, c = 0, flow = 0;
  for (let i = 0; i < nBars; i++) {
    flow = 0.6 * flow + flowTrend + gauss();           // AR(1) aggressor imbalance δ
    const impact = lambda * (1 - absorption) * flow + gauss() * noise;  // Kyle-λ impact + micro noise
    p += impact; c += flow;
    delta.push(flow); dPrice.push(impact); price.push(p); cvd.push(c);
  }
  // OLS slope of Δprice on δ = effective impact λ(1−a)
  let dm = 0, im = 0; for (let i = 0; i < nBars; i++) { dm += delta[i]; im += dPrice[i]; } dm /= nBars; im /= nBars;
  let cov = 0, vd = 0, vp = 0;
  for (let i = 0; i < nBars; i++) { const a = delta[i] - dm, b = dPrice[i] - im; cov += a * b; vd += a * a; vp += b * b; }
  const lambdaHat = vd > 0 ? cov / vd : 0;
  const corr = (vd > 0 && vp > 0) ? cov / Math.sqrt(vd * vp) : 0;
  const priceTrend = linSlope(price);
  const cvdTrend = linSlope(cvd);
  const effImpact = Math.abs(cvdTrend) > 1e-9 ? priceTrend / cvdTrend : 0;   // price per unit CVD
  const flowStrong = Math.abs(cvdTrend) > 0.05;
  let verdict;
  if (!flowStrong) verdict = 'choppy';
  else if (Math.abs(effImpact) < 0.4 * lambda) verdict = 'absorption';        // flow absorbed → divergence
  else verdict = 'confirmed';
  const divergence = verdict === 'absorption';
  const absorptionSide = divergence ? (cvdTrend > 0 ? 'bearish' : 'bullish') : 'none';
  return { delta, dPrice, price, cvd, lambdaHat, corr, priceTrend, cvdTrend, effImpact, netCvd: c, verdict, divergence, absorptionSide, nBars, lambda, absorption };
}

registerComponent('OrderFlowCVDSim', function OrderFlowCVDSim(host, params, lang) {
  const W = 640, H = 400;
  const M = { top: 20, right: 50, bottom: 40, left: 50 };

  const labels = lang === 'id' ? {
    flow: 'Aggressor imbalance (tren δ)', lam: 'Impact λ (Kyle)', abs: 'Absorption a', noise: 'Noise mikro',
    x: 'Bar', price: 'Harga', cvd: 'CVD (Σδ)',
    net: 'Net CVD', lh: 'λ efektif (OLS)', cr: 'corr(Δp, δ)', eff: 'Impact efektif',
    confirmed: '✓ Flow KONFIRMASI harga (sehat)', absb: '✗ ABSORPTION / divergence — sisi atas absorbed, risiko turun',
    absl: '✗ ABSORPTION / divergence — sisi bawah absorbed, risiko naik', choppy: '~ Choppy (tak ada tren flow jelas)',
  } : {
    flow: 'Aggressor imbalance (δ trend)', lam: 'Impact λ (Kyle)', abs: 'Absorption a', noise: 'Micro noise',
    x: 'Bar', price: 'Price', cvd: 'CVD (Σδ)',
    net: 'Net CVD', lh: 'effective λ (OLS)', cr: 'corr(Δp, δ)', eff: 'effective impact',
    confirmed: '✓ Flow CONFIRMS price (healthy)', absb: '✗ ABSORPTION / divergence — upside absorbed, downside risk',
    absl: '✗ ABSORPTION / divergence — downside absorbed, upside risk', choppy: '~ Choppy (no clear flow trend)',
  };

  host.controlsRoot.innerHTML = `
    <div class="viz-control-row"><label class="viz-control-label" for="viz-of-f">${labels.flow}</label><input type="range" id="viz-of-f" min="-0.6" max="0.6" step="0.05" value="${params.flowTrend}" /><span class="viz-control-value" data-viz-show="f">${params.flowTrend}</span></div>
    <div class="viz-control-row"><label class="viz-control-label" for="viz-of-l">${labels.lam}</label><input type="range" id="viz-of-l" min="0.2" max="3" step="0.1" value="${params.lambda}" /><span class="viz-control-value" data-viz-show="l">${params.lambda.toFixed(1)}</span></div>
    <div class="viz-control-row"><label class="viz-control-label" for="viz-of-a">${labels.abs}</label><input type="range" id="viz-of-a" min="0" max="1" step="0.05" value="${params.absorption}" /><span class="viz-control-value" data-viz-show="a">${params.absorption.toFixed(2)}</span></div>
    <div class="viz-control-row"><label class="viz-control-label" for="viz-of-n">${labels.noise}</label><input type="range" id="viz-of-n" min="0" max="1.5" step="0.05" value="${params.noise}" /><span class="viz-control-value" data-viz-show="n">${params.noise.toFixed(2)}</span></div>
  `;

  const plotW = W - M.left - M.right, plotH = H - M.top - M.bottom;

  function draw() {
    const sim = simulateOrderFlow({ lambda: params.lambda, flowTrend: params.flowTrend, absorption: params.absorption, noise: params.noise, nBars: 80, seed: 20260607 });
    const norm = (arr) => { let lo = Math.min(...arr), hi = Math.max(...arr); if (hi - lo < 1e-9) hi = lo + 1; return arr.map((v) => (v - lo) / (hi - lo)); };
    const pN = norm(sim.price), cN = norm(sim.cvd);
    const xAt = (i) => M.left + (i / (sim.nBars - 1)) * plotW;
    const yAt = (v) => M.top + (1 - v) * plotH;
    const pathOf = (arr) => arr.map((v, i) => `${i === 0 ? 'M' : 'L'} ${xAt(i).toFixed(1)} ${yAt(v).toFixed(1)}`).join(' ');

    const dcol = sim.verdict === 'confirmed' ? '#4d7a3a' : (sim.verdict === 'absorption' ? '#a05050' : 'var(--ink-mute)');
    host.canvasRoot.innerHTML = `
      <svg viewBox="0 0 ${W} ${H}" width="100%" preserveAspectRatio="xMidYMid meet" class="viz-svg">
        <rect x="0" y="0" width="${W}" height="${H}" fill="var(--bg-elev-1)" />
        <line x1="${M.left}" y1="${M.top}" x2="${M.left}" y2="${M.top + plotH}" stroke="var(--line)" />
        <line x1="${M.left}" y1="${M.top + plotH}" x2="${M.left + plotW}" y2="${M.top + plotH}" stroke="var(--line)" />
        <path d="${pathOf(pN)}" fill="none" stroke="var(--azul)" stroke-width="2" />
        <path d="${pathOf(cN)}" fill="none" stroke="var(--gold)" stroke-width="2" stroke-dasharray="5 3" />
        <text x="${M.left + plotW / 2}" y="${M.top + plotH + 30}" text-anchor="middle" font-size="11" fill="var(--ink-mute)">${labels.x}</text>
        <g transform="translate(${M.left + 8}, ${M.top + 10})" font-size="9">
          <line x1="0" y1="-3" x2="14" y2="-3" stroke="var(--azul)" stroke-width="2" /><text x="18" y="0" fill="var(--ink-mute)">${labels.price}</text>
          <line x1="0" y1="9" x2="14" y2="9" stroke="var(--gold)" stroke-width="2" stroke-dasharray="5 3" /><text x="18" y="12" fill="var(--ink-mute)">${labels.cvd}</text>
        </g>
        ${sim.divergence ? `<text x="${M.left + plotW - 4}" y="${M.top + 12}" text-anchor="end" font-size="11" font-weight="bold" fill="#a05050">DIVERGENCE</text>` : ''}
      </svg>
    `;

    const vtxt = sim.verdict === 'confirmed' ? labels.confirmed : (sim.verdict === 'choppy' ? labels.choppy : (sim.absorptionSide === 'bearish' ? labels.absb : labels.absl));
    host.readoutRoot.innerHTML = `
      <div class="viz-readout-row" style="color:${dcol};font-weight:600;">${vtxt}</div>
      <div class="viz-readout-row">
        <span><strong>${labels.net}</strong> ${sim.netCvd.toFixed(1)}</span><span class="dot">·</span>
        <span><strong>${labels.lh}</strong> ${sim.lambdaHat.toFixed(2)} (= λ·(1−a) ≈ ${(sim.lambda * (1 - sim.absorption)).toFixed(2)})</span><span class="dot">·</span>
        <span><strong>${labels.cr}</strong> ${sim.corr.toFixed(2)}</span>
      </div>
      <div class="viz-readout-row">
        <span><strong>${labels.eff}</strong> ${sim.effImpact.toFixed(2)}</span><span class="dot">·</span>
        <span style="font-size:0.85em;">${lang === 'id' ? 'CVD naik + harga tak ikut = penjual pasif menyerap (bearish), dan sebaliknya.' : 'CVD up + price not following = a passive seller is absorbing (bearish), and vice versa.'}</span>
      </div>
    `;
  }

  const elF = host.controlsRoot.querySelector('#viz-of-f');
  const elL = host.controlsRoot.querySelector('#viz-of-l');
  const elA = host.controlsRoot.querySelector('#viz-of-a');
  const elN = host.controlsRoot.querySelector('#viz-of-n');
  elF.addEventListener('input', () => { params.flowTrend = parseFloat(elF.value); host.controlsRoot.querySelector('[data-viz-show="f"]').textContent = params.flowTrend; draw(); });
  elL.addEventListener('input', () => { params.lambda = parseFloat(elL.value); host.controlsRoot.querySelector('[data-viz-show="l"]').textContent = params.lambda.toFixed(1); draw(); });
  elA.addEventListener('input', () => { params.absorption = parseFloat(elA.value); host.controlsRoot.querySelector('[data-viz-show="a"]').textContent = params.absorption.toFixed(2); draw(); });
  elN.addEventListener('input', () => { params.noise = parseFloat(elN.value); host.controlsRoot.querySelector('[data-viz-show="n"]').textContent = params.noise.toFixed(2); draw(); });

  host.onReset(() => {
    elF.value = params.flowTrend; elL.value = params.lambda; elA.value = params.absorption; elN.value = params.noise;
    host.controlsRoot.querySelector('[data-viz-show="f"]').textContent = params.flowTrend;
    host.controlsRoot.querySelector('[data-viz-show="l"]').textContent = params.lambda.toFixed(1);
    host.controlsRoot.querySelector('[data-viz-show="a"]').textContent = params.absorption.toFixed(2);
    host.controlsRoot.querySelector('[data-viz-show="n"]').textContent = params.noise.toFixed(2);
    draw();
  });

  draw();
});

// Export order-flow / CVD helpers for testing / external use
export { simulateOrderFlow, linSlope };

// ─── Portfolio of edges: diversification & correlation ──────────────────
//
// The "be the bookie / run a portfolio of uncorrelated, decaying edges" thesis
// (LiquidityGoblin) and Tradingriot's "uncorrelated book". For N equal-weight
// strategies each with Sharpe S and pairwise correlation ρ (equicorrelation),
// the portfolio's volatility is σ_p = σ·√((1+(N−1)ρ)/N), so the SHARPE multiplies
// by the diversification ratio
//   D(N,ρ) = √( N / (1 + (N−1)ρ) ),   Sharpe_port = S·D(N,ρ).
// Uncorrelated edges (ρ=0) give D=√N (unbounded); as N→∞ the ratio is capped at
// D→1/√ρ — correlation, not the number of strategies, sets the ceiling. The same
// pooling shrinks drawdown. Equicorrelated returns are generated with a one-
// factor model zᵢ = √ρ·c + √(1−ρ)·eᵢ. Refs: Markowitz (1952) mean-variance
// diversification; the equal-weight equicorrelation identity. Verified by
// scripts/verify-portfolio-sim.mjs.

function diversificationRatio(nEdges, rho) {
  const N = Math.max(1, nEdges);
  return Math.sqrt(N / (1 + (N - 1) * rho));
}

function median(sortedOrUnsorted) {
  const a = [...sortedOrUnsorted].sort((x, y) => x - y);
  if (!a.length) return 0;
  const m = Math.floor(a.length / 2);
  return a.length % 2 ? a[m] : (a[m - 1] + a[m]) / 2;
}

function simulatePortfolio({ nEdges, sharpe, rho, volAnnual = 0.5, nPeriods = 252, nRuns = 200, seed = 20260607, nDaysPerYear = 252 }) {
  const N = Math.max(1, Math.round(nEdges));
  rho = Math.max(0, Math.min(0.99, rho));
  const divRatio = diversificationRatio(N, rho);
  const portSharpe = sharpe * divRatio;
  const portVol = volAnnual * Math.sqrt((1 + (N - 1) * rho) / N);
  const asymptote = rho > 1e-9 ? 1 / Math.sqrt(rho) : Infinity;
  const curve = [];
  for (let n = 1; n <= 50; n++) curve.push({ n, mult: diversificationRatio(n, rho) });

  const dt = 1 / nDaysPerYear;
  const sp = volAnnual * Math.sqrt(dt);          // per-period vol
  const mp = sharpe * volAnnual * dt;            // per-period mean (annual Sharpe = sharpe)
  const rng = makeRng(seed); const gauss = makeGaussian(rng);
  const sR = Math.sqrt(rho), sC = Math.sqrt(1 - rho);
  const ddPort = [], ddSingle = [];
  let retSum = 0, ret2Sum = 0, retN = 0;
  let cCov = 0, cV0 = 0, cV1 = 0;
  for (let run = 0; run < nRuns; run++) {
    let eqP = 1, peakP = 1, dP = 0, eqS = 1, peakS = 1, dS = 0;
    for (let t = 0; t < nPeriods; t++) {
      const common = gauss();
      let sum = 0, r0 = 0, r1 = 0;
      for (let i = 0; i < N; i++) {
        const z = sR * common + sC * gauss();
        const r = mp + sp * z;
        sum += r;
        if (i === 0) r0 = r; else if (i === 1) r1 = r;
      }
      const rPort = sum / N;
      retSum += rPort; ret2Sum += rPort * rPort; retN++;
      if (N >= 2) { cCov += r0 * r1; cV0 += r0 * r0; cV1 += r1 * r1; }
      eqP *= (1 + rPort); if (eqP > peakP) peakP = eqP; dP = Math.max(dP, (peakP - eqP) / peakP);
      eqS *= (1 + r0); if (eqS > peakS) peakS = eqS; dS = Math.max(dS, (peakS - eqS) / peakS);
    }
    ddPort.push(dP); ddSingle.push(dS);
  }
  const m = retSum / retN, v = ret2Sum / retN - m * m;
  const realizedPortSharpe = v > 0 ? (m / Math.sqrt(v)) * Math.sqrt(nDaysPerYear) : 0;
  const realizedCorr = (N >= 2 && cV0 > 0 && cV1 > 0) ? cCov / Math.sqrt(cV0 * cV1) : 0;
  return {
    N, rho, sharpe, divRatio, portSharpe, portVol, asymptote, curve,
    realizedPortSharpe, realizedCorr,
    medianDDport: median(ddPort), medianDDsingle: median(ddSingle),
  };
}

registerComponent('PortfolioEdgeSim', function PortfolioEdgeSim(host, params, lang) {
  const W = 640, H = 400;
  const M = { top: 20, right: 16, bottom: 40, left: 52 };

  const labels = lang === 'id' ? {
    n: 'Jumlah edge N', s: 'Sharpe per-edge', r: 'Korelasi ρ', vol: 'Vol per-edge (%/th)',
    x: 'Jumlah edge N', y: 'Pengali diversifikasi D = Sharpe_port / Sharpe',
    ps: 'Sharpe portfolio', dr: 'Pengali D @N', ceil: 'Plafon (1/√ρ)', dd: 'Median max-DD (1 edge → portfolio)', rc: 'Korelasi terukur',
    note: 'Edge tak berkorelasi (ρ=0) ⇒ D=√N (tak terbatas); korelasi membatasi di 1/√ρ — bukan jumlah strategi.',
  } : {
    n: 'Number of edges N', s: 'Per-edge Sharpe', r: 'Correlation ρ', vol: 'Per-edge vol (%/yr)',
    x: 'Number of edges N', y: 'Diversification multiplier D = Sharpe_port / Sharpe',
    ps: 'Portfolio Sharpe', dr: 'Multiplier D @N', ceil: 'Ceiling (1/√ρ)', dd: 'Median max-DD (1 edge → portfolio)', rc: 'Realized corr',
    note: 'Uncorrelated edges (ρ=0) ⇒ D=√N (unbounded); correlation caps it at 1/√ρ — not the count of strategies.',
  };

  host.controlsRoot.innerHTML = `
    <div class="viz-control-row"><label class="viz-control-label" for="viz-pe-n">${labels.n}</label><input type="range" id="viz-pe-n" min="1" max="30" step="1" value="${params.nEdges}" /><span class="viz-control-value" data-viz-show="n">${params.nEdges}</span></div>
    <div class="viz-control-row"><label class="viz-control-label" for="viz-pe-s">${labels.s}</label><input type="range" id="viz-pe-s" min="0.3" max="2" step="0.05" value="${params.sharpe}" /><span class="viz-control-value" data-viz-show="s">${params.sharpe.toFixed(2)}</span></div>
    <div class="viz-control-row"><label class="viz-control-label" for="viz-pe-r">${labels.r}</label><input type="range" id="viz-pe-r" min="0" max="0.95" step="0.05" value="${params.rho}" /><span class="viz-control-value" data-viz-show="r">${params.rho.toFixed(2)}</span></div>
    <div class="viz-control-row"><label class="viz-control-label" for="viz-pe-v">${labels.vol}</label><input type="range" id="viz-pe-v" min="10" max="80" step="5" value="${(params.volAnnual * 100)}" /><span class="viz-control-value" data-viz-show="v">${(params.volAnnual * 100).toFixed(0)}</span></div>
  `;

  const plotW = W - M.left - M.right, plotH = H - M.top - M.bottom;

  function draw() {
    const sim = simulatePortfolio({ nEdges: params.nEdges, sharpe: params.sharpe, rho: params.rho, volAnnual: params.volAnnual, nPeriods: 252, nRuns: 120 });
    const ref0 = []; for (let n = 1; n <= 50; n++) ref0.push({ n, mult: diversificationRatio(n, 0) });
    let yMax = Math.max(sim.curve[sim.curve.length - 1].mult, params.rho > 0 ? sim.asymptote : 0, 2);
    yMax = Math.min(yMax, Math.sqrt(50)) * 1.08;
    const xAt = (n) => M.left + ((n - 1) / 49) * plotW;
    const yAt = (d) => M.top + (1 - (d - 1) / (yMax - 1)) * plotH;
    const pathOf = (arr) => arr.map((p, i) => `${i === 0 ? 'M' : 'L'} ${xAt(p.n).toFixed(1)} ${yAt(p.mult).toFixed(1)}`).join(' ');

    let yt = ''; for (let d = 1; d <= yMax; d += 1) { const yy = yAt(d); yt += `<line x1="${M.left}" y1="${yy.toFixed(1)}" x2="${M.left + plotW}" y2="${yy.toFixed(1)}" stroke="var(--line)" stroke-dasharray="2 3" opacity="0.4" /><text x="${M.left - 6}" y="${(yy + 3).toFixed(1)}" text-anchor="end" font-size="9" fill="var(--ink-mute)">${d}×</text>`; }
    let xt = ''; for (const n of [1, 10, 20, 30, 40, 50]) xt += `<text x="${xAt(n).toFixed(1)}" y="${M.top + plotH + 14}" text-anchor="middle" font-size="9" fill="var(--ink-mute)">${n}</text>`;
    const asymLine = (params.rho > 1e-9 && sim.asymptote <= yMax) ? `<line x1="${M.left}" y1="${yAt(sim.asymptote).toFixed(1)}" x2="${M.left + plotW}" y2="${yAt(sim.asymptote).toFixed(1)}" stroke="#a05050" stroke-dasharray="5 3" opacity="0.8" /><text x="${M.left + plotW}" y="${(yAt(sim.asymptote) - 4).toFixed(1)}" text-anchor="end" font-size="8" fill="#a05050">${labels.ceil} = ${sim.asymptote.toFixed(2)}×</text>` : '';
    const curN = Math.min(50, params.nEdges);

    host.canvasRoot.innerHTML = `
      <svg viewBox="0 0 ${W} ${H}" width="100%" preserveAspectRatio="xMidYMid meet" class="viz-svg">
        <rect x="0" y="0" width="${W}" height="${H}" fill="var(--bg-elev-1)" />
        ${yt}
        <path d="${pathOf(ref0)}" fill="none" stroke="var(--ink-mute)" stroke-width="1" stroke-dasharray="2 3" opacity="0.5" /><text x="${xAt(46).toFixed(1)}" y="${(yAt(diversificationRatio(46, 0)) - 3).toFixed(1)}" font-size="8" fill="var(--ink-mute)">ρ=0: √N</text>
        ${asymLine}
        <path d="${pathOf(sim.curve)}" fill="none" stroke="var(--azul)" stroke-width="2" />
        <circle cx="${xAt(curN).toFixed(1)}" cy="${yAt(sim.divRatio).toFixed(1)}" r="3.5" fill="var(--gold)" />
        <line x1="${M.left}" y1="${M.top}" x2="${M.left}" y2="${M.top + plotH}" stroke="var(--line)" />
        <line x1="${M.left}" y1="${M.top + plotH}" x2="${M.left + plotW}" y2="${M.top + plotH}" stroke="var(--line)" />
        ${xt}
        <text x="${M.left + plotW / 2}" y="${M.top + plotH + 30}" text-anchor="middle" font-size="11" fill="var(--ink-mute)">${labels.x}</text>
        <text x="${M.left - 40}" y="${M.top + plotH / 2}" text-anchor="middle" font-size="10" fill="var(--ink-mute)" transform="rotate(-90 ${M.left - 40} ${M.top + plotH / 2})">${labels.y}</text>
      </svg>
    `;

    const ceilTxt = isFinite(sim.asymptote) ? sim.asymptote.toFixed(2) + '×' : '∞ (√N)';
    host.readoutRoot.innerHTML = `
      <div class="viz-readout-row" style="font-weight:600;color:var(--azul);">${labels.ps} = ${sim.portSharpe.toFixed(2)} (${labels.dr} = ${sim.divRatio.toFixed(2)}×, ${labels.ceil} = ${ceilTxt})</div>
      <div class="viz-readout-row">
        <span><strong>${labels.dd}</strong> ${(sim.medianDDsingle * 100).toFixed(0)}% → ${(sim.medianDDport * 100).toFixed(0)}%</span><span class="dot">·</span>
        <span><strong>${labels.rc}</strong> ${sim.realizedCorr.toFixed(2)}</span>
      </div>
      <div class="viz-readout-row" style="font-size:0.85em;">${labels.note}</div>
    `;
  }

  const elN = host.controlsRoot.querySelector('#viz-pe-n');
  const elS = host.controlsRoot.querySelector('#viz-pe-s');
  const elR = host.controlsRoot.querySelector('#viz-pe-r');
  const elV = host.controlsRoot.querySelector('#viz-pe-v');
  elN.addEventListener('input', () => { params.nEdges = parseInt(elN.value, 10); host.controlsRoot.querySelector('[data-viz-show="n"]').textContent = params.nEdges; draw(); });
  elS.addEventListener('input', () => { params.sharpe = parseFloat(elS.value); host.controlsRoot.querySelector('[data-viz-show="s"]').textContent = params.sharpe.toFixed(2); draw(); });
  elR.addEventListener('input', () => { params.rho = parseFloat(elR.value); host.controlsRoot.querySelector('[data-viz-show="r"]').textContent = params.rho.toFixed(2); draw(); });
  elV.addEventListener('input', () => { params.volAnnual = parseFloat(elV.value) / 100; host.controlsRoot.querySelector('[data-viz-show="v"]').textContent = (params.volAnnual * 100).toFixed(0); draw(); });

  host.onReset(() => {
    elN.value = params.nEdges; elS.value = params.sharpe; elR.value = params.rho; elV.value = params.volAnnual * 100;
    host.controlsRoot.querySelector('[data-viz-show="n"]').textContent = params.nEdges;
    host.controlsRoot.querySelector('[data-viz-show="s"]').textContent = params.sharpe.toFixed(2);
    host.controlsRoot.querySelector('[data-viz-show="r"]').textContent = params.rho.toFixed(2);
    host.controlsRoot.querySelector('[data-viz-show="v"]').textContent = (params.volAnnual * 100).toFixed(0);
    draw();
  });

  draw();
});

// Export portfolio-of-edges helpers for testing / external use
export { diversificationRatio, simulatePortfolio };

// ─── Statistical arbitrage / pairs trading (OU mean reversion) ──────────
//
// Two cointegrated legs share a mean-reverting SPREAD. Gatev, Goetzmann &
// Rouwenhorst (2006) pick pairs by minimum normalised-price distance and trade
// at a 2σ divergence, closing on convergence; Avellaneda & Lee (2008/2010) model
// the residual as an Ornstein-Uhlenbeck process and trade an s-score. The OU
// spread X obeys dX = κ(θ−X)dt + σ dW: mean-reversion speed κ, half-life
// ln2/κ, equilibrium std σ_eq = σ/√(2κ). The z- (s-) score is (X−θ)/σ_eq; the
// strategy goes LONG the spread when z ≤ −entry (betting it rises to θ), SHORT
// when z ≥ +entry, and exits near the mean (|z| ≤ exit). Mean reversion makes
// this +EV; a random walk (κ→0) has no edge. Verified by
// scripts/verify-pairs-sim.mjs.

function ouHalfLife(kappa) { return kappa > 0 ? Math.log(2) / kappa : Infinity; }
function ouEqStd(sigma, kappa) { return kappa > 0 ? sigma / Math.sqrt(2 * kappa) : Infinity; }

function simulatePairs({ kappa, sigma, entryZ = 2, exitZ = 0.5, stopZ = 4, nSteps = 504, seed = 20260607, nDaysPerYear = 252, theta = 0 }) {
  kappa = Math.max(0, kappa);
  const dt = 1 / nDaysPerYear;
  const sigEqRaw = ouEqStd(sigma, kappa);
  const eqStd = (isFinite(sigEqRaw) && sigEqRaw > 0) ? sigEqRaw : sigma * Math.sqrt(nSteps * dt); // RW fallback scale
  const rng = makeRng(seed); const gauss = makeGaussian(rng);
  const path = []; let x = theta;
  for (let t = 0; t < nSteps; t++) { x += kappa * (theta - x) * dt + sigma * Math.sqrt(dt) * gauss(); path.push(x); }
  const z = path.map((v) => (v - theta) / eqStd);
  let pos = 0, entryPrice = 0; const trades = [], events = [];
  let equity = 0, peak = 0, maxDD = 0; const stepPnls = [];
  for (let t = 0; t < nSteps; t++) {
    if (t > 0) { const d = pos * (path[t] - path[t - 1]); equity += d; stepPnls.push(d); if (equity > peak) peak = equity; if (peak - equity > maxDD) maxDD = peak - equity; }
    const zz = z[t];
    if (pos === 0) {
      if (zz <= -entryZ) { pos = 1; entryPrice = path[t]; events.push({ t, type: 'enter', side: 'long' }); }
      else if (zz >= entryZ) { pos = -1; entryPrice = path[t]; events.push({ t, type: 'enter', side: 'short' }); }
    } else if (pos === 1) {
      if (zz >= -exitZ || zz <= -stopZ) { const pnl = path[t] - entryPrice; trades.push(pnl); events.push({ t, type: 'exit', side: 'long', pnl }); pos = 0; }
    } else {
      if (zz <= exitZ || zz >= stopZ) { const pnl = entryPrice - path[t]; trades.push(pnl); events.push({ t, type: 'exit', side: 'short', pnl }); pos = 0; }
    }
  }
  if (pos !== 0) { const pnl = pos === 1 ? path[nSteps - 1] - entryPrice : entryPrice - path[nSteps - 1]; trades.push(pnl); }
  const totalPnl = trades.reduce((a, b) => a + b, 0);
  const wins = trades.filter((p) => p > 0).length;
  const winRate = trades.length ? wins / trades.length : 0;
  const m = stepPnls.length ? stepPnls.reduce((a, b) => a + b, 0) / stepPnls.length : 0;
  let v = 0; for (const p of stepPnls) v += (p - m) * (p - m); v = stepPnls.length ? v / stepPnls.length : 0;
  const sharpe = v > 0 ? (m / Math.sqrt(v)) * Math.sqrt(nDaysPerYear) : 0;
  // OU diagnostics
  const meanX = path.reduce((a, b) => a + b, 0) / nSteps;
  let s2 = 0; for (const p of path) s2 += (p - meanX) * (p - meanX);
  const realizedStd = Math.sqrt(s2 / nSteps);
  let c1 = 0; for (let t = 1; t < nSteps; t++) c1 += (path[t] - meanX) * (path[t - 1] - meanX);
  const ar1 = s2 > 0 ? c1 / s2 : 0;
  return { path, z, events, trades, totalPnl, totalPnlZ: totalPnl / eqStd, winRate, nTrades: trades.length, sharpe, maxDD, halfLife: ouHalfLife(kappa), halfLifeDays: ouHalfLife(kappa) * nDaysPerYear, sigEq: eqStd, realizedStd, ar1, kappa, sigma, entryZ, exitZ, theta };
}

registerComponent('PairsTradingSim', function PairsTradingSim(host, params, lang) {
  const W = 640, H = 400;
  const M = { top: 18, right: 16, bottom: 38, left: 44 };

  const labels = lang === 'id' ? {
    k: 'Kecepatan mean-reversion κ (/th)', s: 'Vol spread σ', e: 'Entry z', x2: 'Exit z',
    x: 'Waktu (hari)', y: 'Spread',
    hl: 'Half-life', eq: 'σ_eq', nt: 'Jumlah trade', wr: 'Win rate', pnl: 'Total P&L (satuan z)', shp: 'Sharpe', dd: 'Max DD',
    note: 'Masuk saat spread ekstrem (≥ entry z), keluar dekat mean. Mean-reversion = edge; random walk = tak ada edge.',
  } : {
    k: 'Mean-reversion speed κ (/yr)', s: 'Spread vol σ', e: 'Entry z', x2: 'Exit z',
    x: 'Time (days)', y: 'Spread',
    hl: 'Half-life', eq: 'σ_eq', nt: 'Trades', wr: 'Win rate', pnl: 'Total P&L (z-units)', shp: 'Sharpe', dd: 'Max DD',
    note: 'Enter at spread extremes (≥ entry z), exit near the mean. Mean reversion = edge; a random walk has none.',
  };

  host.controlsRoot.innerHTML = `
    <div class="viz-control-row"><label class="viz-control-label" for="viz-pt-k">${labels.k}</label><input type="range" id="viz-pt-k" min="1" max="30" step="1" value="${params.kappa}" /><span class="viz-control-value" data-viz-show="k">${params.kappa}</span></div>
    <div class="viz-control-row"><label class="viz-control-label" for="viz-pt-s">${labels.s}</label><input type="range" id="viz-pt-s" min="0.1" max="1" step="0.05" value="${params.sigma}" /><span class="viz-control-value" data-viz-show="s">${params.sigma.toFixed(2)}</span></div>
    <div class="viz-control-row"><label class="viz-control-label" for="viz-pt-e">${labels.e}</label><input type="range" id="viz-pt-e" min="1" max="3" step="0.1" value="${params.entryZ}" /><span class="viz-control-value" data-viz-show="e">${params.entryZ.toFixed(1)}</span></div>
    <div class="viz-control-row"><label class="viz-control-label" for="viz-pt-x">${labels.x2}</label><input type="range" id="viz-pt-x" min="0" max="1.5" step="0.1" value="${params.exitZ}" /><span class="viz-control-value" data-viz-show="x">${params.exitZ.toFixed(1)}</span></div>
  `;

  const plotW = W - M.left - M.right, plotH = H - M.top - M.bottom;

  function draw() {
    const sim = simulatePairs({ kappa: params.kappa, sigma: params.sigma, entryZ: params.entryZ, exitZ: params.exitZ, nSteps: 504, seed: 20260607 });
    let lo = Infinity, hi = -Infinity; for (const v of sim.path) { if (v < lo) lo = v; if (v > hi) hi = v; }
    const band = params.entryZ * sim.sigEq; lo = Math.min(lo, -band * 1.1); hi = Math.max(hi, band * 1.1);
    const xAt = (t) => M.left + (t / (sim.path.length - 1)) * plotW;
    const yAt = (v) => M.top + (1 - (v - lo) / (hi - lo)) * plotH;
    const pathStr = sim.path.map((v, i) => `${i === 0 ? 'M' : 'L'} ${xAt(i).toFixed(1)} ${yAt(v).toFixed(1)}`).join(' ');
    const yMean = yAt(sim.theta);
    const bandLine = (zlev, col, dash) => {
      const yp = yAt(zlev * sim.sigEq), ym = yAt(-zlev * sim.sigEq);
      return `<line x1="${M.left}" y1="${yp.toFixed(1)}" x2="${M.left + plotW}" y2="${yp.toFixed(1)}" stroke="${col}" stroke-dasharray="${dash}" opacity="0.7" /><line x1="${M.left}" y1="${ym.toFixed(1)}" x2="${M.left + plotW}" y2="${ym.toFixed(1)}" stroke="${col}" stroke-dasharray="${dash}" opacity="0.7" />`;
    };
    let marks = '';
    for (const ev of sim.events) {
      const col = ev.type === 'enter' ? '#4d7a3a' : 'var(--gold)';
      marks += `<circle cx="${xAt(ev.t).toFixed(1)}" cy="${yAt(sim.path[ev.t]).toFixed(1)}" r="${ev.type === 'enter' ? 3 : 2.4}" fill="${col}" opacity="0.9" />`;
    }

    host.canvasRoot.innerHTML = `
      <svg viewBox="0 0 ${W} ${H}" width="100%" preserveAspectRatio="xMidYMid meet" class="viz-svg">
        <rect x="0" y="0" width="${W}" height="${H}" fill="var(--bg-elev-1)" />
        <line x1="${M.left}" y1="${yMean.toFixed(1)}" x2="${M.left + plotW}" y2="${yMean.toFixed(1)}" stroke="var(--ink-mute)" stroke-dasharray="2 2" opacity="0.6" /><text x="${M.left + 2}" y="${(yMean - 3).toFixed(1)}" font-size="8" fill="var(--ink-mute)">θ (mean)</text>
        ${bandLine(params.entryZ, '#a05050', '5 3')}
        ${bandLine(params.exitZ, 'var(--azul)', '2 3')}
        <text x="${M.left + plotW}" y="${(yAt(params.entryZ * sim.sigEq) - 3).toFixed(1)}" text-anchor="end" font-size="8" fill="#a05050">±${params.entryZ.toFixed(1)}σ entry</text>
        <path d="${pathStr}" fill="none" stroke="var(--ink)" stroke-width="1.3" />
        ${marks}
        <line x1="${M.left}" y1="${M.top}" x2="${M.left}" y2="${M.top + plotH}" stroke="var(--line)" />
        <line x1="${M.left}" y1="${M.top + plotH}" x2="${M.left + plotW}" y2="${M.top + plotH}" stroke="var(--line)" />
        <text x="${M.left + plotW / 2}" y="${M.top + plotH + 30}" text-anchor="middle" font-size="11" fill="var(--ink-mute)">${labels.x}</text>
      </svg>
    `;

    const pnlCol = sim.totalPnl > 0 ? '#4d7a3a' : '#a05050';
    host.readoutRoot.innerHTML = `
      <div class="viz-readout-row">
        <span><strong>${labels.hl}</strong> ${sim.halfLifeDays.toFixed(0)}d</span><span class="dot">·</span>
        <span><strong>${labels.eq}</strong> ${sim.sigEq.toFixed(3)}</span><span class="dot">·</span>
        <span><strong>${labels.nt}</strong> ${sim.nTrades}</span><span class="dot">·</span>
        <span><strong>${labels.wr}</strong> ${(sim.winRate * 100).toFixed(0)}%</span>
      </div>
      <div class="viz-readout-row">
        <span style="color:${pnlCol};font-weight:600;"><strong>${labels.pnl}</strong> ${sim.totalPnlZ.toFixed(1)}</span><span class="dot">·</span>
        <span><strong>${labels.shp}</strong> ${sim.sharpe.toFixed(2)}</span><span class="dot">·</span>
        <span><strong>${labels.dd}</strong> ${(sim.maxDD / sim.sigEq).toFixed(1)}z</span>
      </div>
      <div class="viz-readout-row" style="font-size:0.85em;">${labels.note}</div>
    `;
  }

  const elK = host.controlsRoot.querySelector('#viz-pt-k');
  const elS = host.controlsRoot.querySelector('#viz-pt-s');
  const elE = host.controlsRoot.querySelector('#viz-pt-e');
  const elX = host.controlsRoot.querySelector('#viz-pt-x');
  elK.addEventListener('input', () => { params.kappa = parseFloat(elK.value); host.controlsRoot.querySelector('[data-viz-show="k"]').textContent = params.kappa; draw(); });
  elS.addEventListener('input', () => { params.sigma = parseFloat(elS.value); host.controlsRoot.querySelector('[data-viz-show="s"]').textContent = params.sigma.toFixed(2); draw(); });
  elE.addEventListener('input', () => { params.entryZ = parseFloat(elE.value); host.controlsRoot.querySelector('[data-viz-show="e"]').textContent = params.entryZ.toFixed(1); draw(); });
  elX.addEventListener('input', () => { params.exitZ = parseFloat(elX.value); host.controlsRoot.querySelector('[data-viz-show="x"]').textContent = params.exitZ.toFixed(1); draw(); });

  host.onReset(() => {
    elK.value = params.kappa; elS.value = params.sigma; elE.value = params.entryZ; elX.value = params.exitZ;
    host.controlsRoot.querySelector('[data-viz-show="k"]').textContent = params.kappa;
    host.controlsRoot.querySelector('[data-viz-show="s"]').textContent = params.sigma.toFixed(2);
    host.controlsRoot.querySelector('[data-viz-show="e"]').textContent = params.entryZ.toFixed(1);
    host.controlsRoot.querySelector('[data-viz-show="x"]').textContent = params.exitZ.toFixed(1);
    draw();
  });

  draw();
});

// Export pairs-trading / OU helpers for testing / external use
export { ouHalfLife, ouEqStd, simulatePairs };
