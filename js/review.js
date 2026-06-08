import { schedule } from './scheduler.js';
import { renderCloze, revealCloze, escapeHTML, todayLocalISO } from './util.js';

const QUALITY_LABELS = [
  { q: 0, label: 'Blackout',    hint: 'Total failure' },
  { q: 1, label: 'Wrong',       hint: 'Could not recall' },
  { q: 2, label: 'Hard-wrong',  hint: 'Wrong, easy after seeing' },
  { q: 3, label: 'Hard',        hint: 'Correct with effort' },
  { q: 4, label: 'Good',        hint: 'Correct, brief hesitation' },
  { q: 5, label: 'Easy',        hint: 'Perfect recall' },
];

export function createReviewSession(queue) {
  return {
    queue: queue.slice(),
    index: 0,
    revealed: false,
    done: queue.length === 0,
    completedCount: 0,
  };
}

export function currentCard(session) {
  return session.queue[session.index];
}

export function reveal(session) {
  return { ...session, revealed: true };
}

export function rate(session, quality, today, onCardUpdate, opts = {}) {
  const card = currentCard(session);
  const updated = schedule(card, quality, today, opts.engine, opts.requestRetention, opts.weights);
  onCardUpdate(updated);
  const nextIndex = session.index + 1;
  const completedCount = session.completedCount + 1;
  if (nextIndex >= session.queue.length) {
    return { ...session, index: nextIndex, revealed: false, done: true, completedCount };
  }
  return { ...session, index: nextIndex, revealed: false, completedCount };
}

function itemTitleFor(card, items) {
  const item = (items || []).find((i) => i.id === card.itemId);
  if (!item) return card.itemId;
  return `${item.authors[0].split(',')[0]} (${item.year})`;
}

export function renderReviewView(session, root, deps) {
  const { katex, onReveal, onRate, onIntroduceNew, dueCount, masteredCount, totalCards, efAvg, items, domainMeta, aiAvailability, domainId } = deps;

  if (session.done && session.queue.length === 0) {
    root.innerHTML = emptyQueueHTML(masteredCount, totalCards, efAvg, domainMeta);
    root.querySelector('[data-introduce-new]')?.addEventListener('click', onIntroduceNew);
    return;
  }

  if (session.done) {
    root.innerHTML = sessionDoneHTML(session.completedCount, masteredCount, totalCards);
    return;
  }

  const card = currentCard(session);
  const remaining = session.queue.length - session.index;
  root.innerHTML = cardHTML(card, session.revealed, remaining, dueCount, masteredCount, totalCards, efAvg, items, domainId, aiAvailability);

  renderFormulas(root, katex);

  if (!session.revealed) {
    root.querySelector('[data-reveal]')?.addEventListener('click', onReveal);
  } else {
    root.querySelectorAll('[data-quality]').forEach((btn) => {
      btn.addEventListener('click', () => onRate(Number(btn.dataset.quality)));
    });
  }
}

function renderFormulas(root, katex) {
  if (!katex) return;
  root.querySelectorAll('[data-latex]').forEach((el) => {
    try {
      katex.render(el.dataset.latex, el, { throwOnError: false, displayMode: true });
    } catch {
      el.textContent = el.dataset.latex;
    }
  });
}

function askClaudeIconBtn(capability, domainId, context, aiAvailability) {
  const availability = aiAvailability?.[capability];
  const ready = availability?.ok === true;
  const tooltip = ready ? `Ask AI (${capability})` : (availability?.message || 'AI unavailable.');
  const ctxJson = JSON.stringify(context || {}).replace(/"/g, '&quot;');
  return `
    <button class="ask-claude-btn ask-claude-icon ${ready ? 'ready' : 'disabled'}"
            data-ai-action="${capability}"
            data-ai-domain="${escapeHTML(domainId || '')}"
            data-ai-context="${ctxJson}"
            title="${escapeHTML(tooltip)}">
      <span class="ai-icon">✦</span>
    </button>
  `;
}

function cardHTML(card, revealed, remaining, dueCount, masteredCount, totalCards, efAvg, items, domainId, aiAvailability) {
  const isCloze = card.type === 'cloze';
  const frontDisplay = isCloze ? renderCloze(card.front) : escapeHTML(card.front);
  const backCloze = isCloze ? revealCloze(card.front) : '';
  const aiBtn = askClaudeIconBtn('explainConcept', domainId,
    { concept: card.front, cardId: card.id, itemId: card.itemId }, aiAvailability);
  return `
    <div class="review-meters">
      <span><strong>${remaining}</strong> remaining</span>
      <span class="dot">·</span>
      <span><strong>${dueCount}</strong> due today</span>
      <span class="dot">·</span>
      <span><strong>${masteredCount} / ${totalCards}</strong> mastered</span>
      <span class="dot">·</span>
      <span>EF avg <strong>${efAvg.toFixed(2)}</strong></span>
    </div>
    <article class="card ${card.type}">
      <div class="card-source-row">
        <div class="card-source">
          ${card._domainLabel ? `<span class="card-domain-badge">${escapeHTML(card._domainLabel)}</span>` : ''}
          ${escapeHTML(card._sourceLabel || itemTitleFor(card, items))} — ${escapeHTML(card.context || '')}
        </div>
        ${aiBtn}
      </div>
      <div class="card-front">${frontDisplay}</div>
      ${revealed ? `
        ${isCloze ? `<div class="card-cloze-revealed">${backCloze}</div>` : ''}
        <div class="card-back">${escapeHTML(card.back)}</div>
        ${card.latex ? `<div class="card-latex" data-latex="${escapeHTML(card.latex)}"></div>` : ''}
        <div class="quality-row">
          ${QUALITY_LABELS.map(({ q, label, hint }) => `
            <button class="quality-btn q-${q}" data-quality="${q}" title="${hint}">
              <span class="q-num">${q}</span>
              <span class="q-label">${label}</span>
            </button>
          `).join('')}
        </div>
      ` : `
        <button class="reveal-btn" data-reveal>Reveal <kbd>Space</kbd></button>
      `}
    </article>
  `;
}

function emptyQueueHTML(masteredCount, totalCards, efAvg, domainMeta) {
  if (totalCards === 0) {
    return `
      <div class="empty-queue">
        <h2>No content yet.</h2>
        <p class="muted">${escapeHTML(domainMeta ? domainMeta.fullName : 'This domain')} has no seed cards yet. Add items + cards to <code>data/domains/${escapeHTML(domainMeta ? domainMeta.id : '...')}/</code> to begin.</p>
      </div>
    `;
  }
  return `
    <div class="empty-queue">
      <h2>No reviews due.</h2>
      <p class="muted">You've worked through today's queue. Next review is tomorrow.</p>
      <div class="empty-stats">
        <div><strong>${masteredCount} / ${totalCards}</strong> mastered</div>
        <div>EF avg <strong>${efAvg.toFixed(2)}</strong></div>
      </div>
      <div class="empty-suggestion">
        <p>Wozniak's spaced-introduction principle: don't dump everything in your queue at once. Introduce a few new cards each day, mixed with reviews.</p>
        <button class="primary-btn" data-introduce-new>Introduce 3 new cards</button>
      </div>
    </div>
  `;
}

function sessionDoneHTML(completedCount, masteredCount, totalCards) {
  return `
    <div class="empty-queue">
      <h2>Session complete.</h2>
      <p class="muted">Reviewed ${completedCount} cards.</p>
      <div class="empty-stats">
        <div><strong>${masteredCount} / ${totalCards}</strong> mastered</div>
      </div>
    </div>
  `;
}
