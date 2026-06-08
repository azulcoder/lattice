import { escapeHTML } from './util.js';
import { DOMAINS } from './domain.js';
import { AVAILABLE_MODELS, AVAILABLE_THEMES } from '../data/shared/ai-config.js';

export function renderSettingsModal(state, root, deps) {
  const { onChange, onClose, onExport, onImport, onClearAll, onOptimizeFsrs, onResetFsrs, onExportReviewCSV, reviewCount = 0 } = deps;
  const s = state.settings;
  const aiEnabled = s.ai.enabled;
  const masterOff = !aiEnabled;
  const trained = Array.isArray(s.review?.fsrsWeights);
  const optimizedAt = s.review?.fsrsOptimizedAt ? String(s.review.fsrsOptimizedAt).slice(0, 10) : null;

  root.innerHTML = `
    <div class="modal-backdrop" data-modal-backdrop>
      <div class="modal" role="dialog" aria-modal="true" aria-labelledby="settings-title">
        <header class="modal-header">
          <h2 id="settings-title">Settings</h2>
          <button class="modal-close" data-modal-close title="Close (Esc)">×</button>
        </header>

        <div class="modal-body">
          <section class="settings-section">
            <h3 class="settings-section-heading">AI Features</h3>

            <div class="settings-row">
              <label class="settings-label" for="ai-enabled">Enable AI features</label>
              <input type="checkbox" id="ai-enabled" class="settings-toggle"
                ${aiEnabled ? 'checked' : ''}
                data-setting="ai.enabled" />
            </div>

            <div class="settings-row settings-row-stack">
              <label class="settings-label" for="ai-apikey">Anthropic API key</label>
              <input type="password" id="ai-apikey" class="settings-input"
                placeholder="sk-ant-..."
                value="${escapeHTML(s.ai.apiKey || '')}"
                data-setting="ai.apiKey" />
              <p class="settings-helper">Stored locally in your browser. Never transmitted except to <code>api.anthropic.com</code> when you explicitly invoke AI features. No telemetry, no analytics, no proxy.</p>
            </div>

            <div class="settings-row settings-row-stack">
              <span class="settings-label">Per-domain AI</span>
              <div class="settings-subgroup ${masterOff ? 'disabled' : ''}">
                ${Object.values(DOMAINS).map((meta) => `
                  <div class="settings-row">
                    <label class="settings-sublabel" for="ai-domain-${meta.id}">
                      <span class="settings-domain-icon" style="color:${meta.accentColor}">${meta.icon}</span>
                      ${escapeHTML(meta.name)}
                    </label>
                    <input type="checkbox" id="ai-domain-${meta.id}" class="settings-toggle"
                      ${s.ai.perDomain?.[meta.id] ? 'checked' : ''}
                      ${masterOff ? 'disabled' : ''}
                      data-setting="ai.perDomain.${meta.id}" />
                  </div>
                `).join('')}
              </div>
            </div>

            <div class="settings-row settings-row-stack">
              <label class="settings-label" for="ai-model">Model</label>
              <select id="ai-model" class="settings-input" data-setting="ai.model">
                ${AVAILABLE_MODELS.map((m) => `
                  <option value="${m.id}" ${s.ai.model === m.id ? 'selected' : ''}>${escapeHTML(m.label)}</option>
                `).join('')}
              </select>
            </div>

            <div class="settings-row settings-row-stack">
              <label class="settings-label" for="ai-budget">Monthly request budget</label>
              <input type="number" id="ai-budget" class="settings-input settings-input-narrow"
                min="0" step="10"
                value="${s.ai.maxRequestsPerMonth}"
                data-setting="ai.maxRequestsPerMonth" />
              <p class="settings-helper">Current month usage: <strong>${s.ai.usageThisMonth?.requests || 0}</strong> requests · <strong>${s.ai.usageThisMonth?.tokens || 0}</strong> tokens. (Counters not yet wired — Phase 1+.)</p>
            </div>
          </section>

          <section class="settings-section">
            <h3 class="settings-section-heading">Appearance</h3>
            <div class="settings-row settings-row-stack">
              <label class="settings-label" for="appearance-theme">Theme</label>
              <select id="appearance-theme" class="settings-input" data-setting="appearance.theme">
                <option value="sepia" ${(s.appearance?.theme || 'sepia') !== 'dark' ? 'selected' : ''}>Sepia (warm light)</option>
                <option value="dark" ${s.appearance?.theme === 'dark' ? 'selected' : ''}>Dark</option>
              </select>
              <p class="settings-helper">Sepia is the warm paper reader (default). Dark recolours the reader to a low-light palette; chrome and accents adapt. Applied instantly and remembered across sessions.</p>
            </div>
          </section>

          <section class="settings-section">
            <h3 class="settings-section-heading">Review scheduler</h3>
            <div class="settings-row settings-row-stack">
              <label class="settings-label" for="review-scheduler">Spaced-repetition algorithm</label>
              <select id="review-scheduler" class="settings-input" data-setting="review.scheduler">
                <option value="sm2" ${s.review?.scheduler !== 'fsrs' ? 'selected' : ''}>SM-2 (default)</option>
                <option value="fsrs" ${s.review?.scheduler === 'fsrs' ? 'selected' : ''}>FSRS-4.5 (modern, adaptive)</option>
              </select>
              <p class="settings-helper">SM-2 is the classic SuperMemo scheduler. FSRS-4.5 models each card's <em>stability</em> and <em>difficulty</em> for more accurate intervals at a target retention (${Math.round((s.review?.requestRetention ?? 0.9) * 100)}%). Switching is reversible and non-destructive — every card keeps its full SM-2 history, so you can toggle back anytime.</p>
            </div>
            <div class="settings-row settings-row-stack">
              <span class="settings-label">FSRS weights</span>
              <div class="settings-data-row">
                <button class="ghost-btn" data-action="optimize-fsrs">Optimize from my review history</button>
                ${trained ? `<button class="ghost-btn" data-action="reset-fsrs">Reset to defaults</button>` : ''}
              </div>
              <p class="settings-helper">${trained
                ? `Using <strong>trained</strong> weights${optimizedAt ? ` (optimized ${optimizedAt})` : ''}, fitted to your own recall. ${reviewCount} reviews logged.`
                : `Using the published default weights. ${reviewCount} reviews logged — once you have 50+ FSRS predictions, training fits the scheduler to your own memory.`}</p>
            </div>
            <div class="settings-row settings-row-stack">
              <label class="settings-inline-check">
                <input type="checkbox" id="review-cross-domain" ${s.review?.crossDomain ? 'checked' : ''} data-setting="review.crossDomain" />
                Review across all domains
              </label>
              <p class="settings-helper">When on, the Review queue mixes due cards from <em>every</em> domain into one session (each card shows its source + domain), instead of just the active domain. Cards are still scheduled and stored per-domain.</p>
            </div>
          </section>

          <section class="settings-section">
            <h3 class="settings-section-heading">Data</h3>
            <div class="settings-row settings-row-stack">
              <div class="settings-data-row">
                <button class="primary-btn" data-action="export">Export all data</button>
                <label class="settings-inline-check">
                  <input type="checkbox" id="export-include-settings" checked data-export-include-settings />
                  Include settings (API key always excluded)
                </label>
              </div>
              <button class="ghost-btn" data-action="import">Import data</button>
              <button class="ghost-btn" data-action="export-reviewlog">Export review log (CSV)</button>
              <button class="ghost-btn ghost-btn-danger" data-action="clear-all">Clear all data…</button>
              <p class="settings-helper">Clearing wipes your SM-2 progress and settings. Legacy v1 backup (if present) is retained.</p>
            </div>
          </section>
        </div>

        <footer class="modal-footer">
          <button class="primary-btn" data-modal-close>Close</button>
        </footer>
      </div>
    </div>
  `;

  // Bind events
  root.querySelector('[data-modal-backdrop]')?.addEventListener('click', (e) => {
    if (e.target.matches('[data-modal-backdrop]')) onClose();
  });
  root.querySelectorAll('[data-modal-close]').forEach((el) => el.addEventListener('click', onClose));

  root.querySelectorAll('[data-setting]').forEach((el) => {
    el.addEventListener('change', () => {
      const path = el.dataset.setting;
      const value = el.type === 'checkbox' ? el.checked
        : el.type === 'number' ? Number(el.value)
        : el.value;
      onChange(path, value);
    });
  });

  root.querySelector('[data-action="export"]')?.addEventListener('click', () => {
    const includeSettings = root.querySelector('[data-export-include-settings]')?.checked ?? true;
    onExport({ includeSettings });
  });
  root.querySelector('[data-action="import"]')?.addEventListener('click', onImport);
  root.querySelector('[data-action="clear-all"]')?.addEventListener('click', onClearAll);
  root.querySelector('[data-action="optimize-fsrs"]')?.addEventListener('click', () => onOptimizeFsrs && onOptimizeFsrs());
  root.querySelector('[data-action="reset-fsrs"]')?.addEventListener('click', () => onResetFsrs && onResetFsrs());
  root.querySelector('[data-action="export-reviewlog"]')?.addEventListener('click', () => onExportReviewCSV && onExportReviewCSV());
}

// Apply a dotted-path patch (e.g. "ai.perDomain.geothermal") into a fresh
// settings object — used by app.js when wiring data-setting → onChange.
export function applySettingPatch(settings, path, value) {
  const parts = path.split('.');
  const next = JSON.parse(JSON.stringify(settings));
  let cursor = next;
  for (let i = 0; i < parts.length - 1; i++) {
    if (cursor[parts[i]] === undefined) cursor[parts[i]] = {};
    cursor = cursor[parts[i]];
  }
  cursor[parts[parts.length - 1]] = value;
  return next;
}
