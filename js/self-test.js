// Self-test infrastructure: "try answering before continuing" cards rendered
// after sections that have matching selfTest entries in CONTENT.selfTest[].
//
// Schema (in CONTENT module):
//   selfTest: [
//     {
//       sectionId: 'intuition',
//       question: { en: '...', id: '...' },
//       prompt:   { en: 'Before continuing, try answering:', id: 'Sebelum lanjut, coba jawab:' },
//       hint:     { en: '...', id: '...' },   // optional
//       answer:   { en: '...', id: '...' }
//     },
//     ...
//   ]
//
// Confidence ratings stored in state.settings.ui.selfTestConfidence as
//   { '<itemId>::<sectionId>': { value: 'got-it'|'mostly'|'need-review', ts: ISO } }

import { escapeHTML } from './util.js';
import { renderTrustedMarkdown } from './content.js';

const CONFIDENCE_LEVELS = [
  { id: 'got-it',       en: 'Got it',        id: 'Paham' },
  { id: 'mostly',       en: 'Mostly',        id: 'Lumayan' },
  { id: 'need-review',  en: 'Need review',   id: 'Perlu review' },
];

function pickLang(field, lang) {
  if (!field) return '';
  if (typeof field === 'string') return field;
  if (lang === 'en') return field.en || '';
  return (field[lang] && field[lang].trim()) || field.en || '';
}

// Render a single self-test card for a given entry.
export function renderSelfTestCard(entry, itemId, lang, currentConfidence) {
  const question = pickLang(entry.question, lang);
  const prompt = pickLang(entry.prompt, lang) || (lang === 'id' ? 'Sebelum lanjut, coba jawab:' : 'Before continuing, try answering:');
  const hint = pickLang(entry.hint, lang);
  const answer = pickLang(entry.answer, lang);
  const key = `${itemId}::${entry.sectionId}`;
  const labels = lang === 'id' ? {
    revealAnswer: 'Tampilkan jawaban',
    youAnswered: 'Jawaban kamu (opsional)',
    answerLabel: 'Reference answer',
    confidencePrompt: 'Seberapa yakin?',
    close: 'Tutup',
  } : {
    revealAnswer: 'Reveal answer',
    youAnswered: 'Your attempt (optional)',
    answerLabel: 'Reference answer',
    confidencePrompt: 'How confident?',
    close: 'Close',
  };

  return `
    <details class="self-test-card" data-self-test-key="${escapeHTML(key)}">
      <summary class="self-test-summary">
        <span class="self-test-icon">📝</span>
        <span class="self-test-prompt">${escapeHTML(prompt)}</span>
        ${currentConfidence ? `<span class="self-test-conf-badge conf-${currentConfidence.value}">${escapeHTML(confidenceLabel(currentConfidence.value, lang))}</span>` : ''}
      </summary>
      <div class="self-test-body">
        <div class="self-test-question">${renderTrustedMarkdown(question)}</div>
        ${hint ? `<details class="self-test-hint"><summary>${lang === 'id' ? 'Hint' : 'Hint'}</summary><div>${renderTrustedMarkdown(hint)}</div></details>` : ''}
        <textarea class="self-test-textarea" placeholder="${escapeHTML(labels.youAnswered)}" rows="3"></textarea>
        <button class="self-test-reveal-btn" type="button" data-self-test-action="reveal">${escapeHTML(labels.revealAnswer)}</button>
        <div class="self-test-answer" style="display:none">
          <h5 class="self-test-answer-label">${escapeHTML(labels.answerLabel)}</h5>
          <div class="self-test-answer-body">${renderTrustedMarkdown(answer)}</div>
          <div class="self-test-confidence-row">
            <span class="self-test-confidence-prompt">${escapeHTML(labels.confidencePrompt)}</span>
            ${CONFIDENCE_LEVELS.map((c) => `
              <button class="self-test-conf-btn conf-${c.id} ${currentConfidence?.value === c.id ? 'active' : ''}"
                      type="button"
                      data-self-test-action="rate"
                      data-self-test-value="${c.id}">${escapeHTML(c[lang] || c.en)}</button>
            `).join('')}
          </div>
        </div>
      </div>
    </details>
  `;
}

function confidenceLabel(value, lang) {
  const c = CONFIDENCE_LEVELS.find((x) => x.id === value);
  if (!c) return value;
  return c[lang] || c.en;
}

// Bind interactions on a rendered self-test card. Pass mount root + onRate callback.
export function bindSelfTestCard(rootElement, onRate) {
  rootElement.querySelectorAll('[data-self-test-action="reveal"]').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const card = btn.closest('.self-test-card');
      const answer = card?.querySelector('.self-test-answer');
      if (answer) answer.style.display = 'block';
      btn.style.display = 'none';
    });
  });
  rootElement.querySelectorAll('[data-self-test-action="rate"]').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const card = btn.closest('.self-test-card');
      const key = card?.dataset.selfTestKey;
      const value = btn.dataset.selfTestValue;
      if (!key || !value) return;
      // Update visual active state
      card.querySelectorAll('.self-test-conf-btn').forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');
      onRate(key, value);
    });
  });
}

// Storage helpers for confidence ratings.
export function getConfidence(state, key) {
  const map = state?.settings?.ui?.selfTestConfidence || {};
  return map[key] || null;
}

export function setConfidence(state, key, value) {
  const ui = { ...(state.settings?.ui || {}) };
  const map = { ...(ui.selfTestConfidence || {}) };
  map[key] = { value, ts: new Date().toISOString() };
  return {
    ...state,
    settings: {
      ...state.settings,
      ui: { ...ui, selfTestConfidence: map },
    },
  };
}
