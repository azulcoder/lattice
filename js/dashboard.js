// Dashboard / knowledge-map view (Phase S4). Two purely-additive, read-only
// surfaces over existing state:
//   1. a progress + retention summary (engine-aware: SM-2 EF avg or FSRS
//      retention — this is the FSRS analytics deferred from S3), and
//   2. a prerequisite DAG "curriculum map" laid out by longest-prereq depth,
//      with each node coloured by its learning state.
//
// Pure layout/stat functions are exported for testing (scripts/verify-dashboard.mjs);
// renderDashboardView() does the SVG/DOM rendering.

import { escapeHTML, todayLocalISO, addDays, daysBetween } from './util.js';
import { getAllCards } from './storage.js';
import { engineOf, isMastered, schedule, fsrsWeightsOf } from './scheduler.js';
import { efAverage } from './sm2.js';
import { retentionAverage, retrievability } from './fsrs.js';
import { backtestEngines } from './backtest.js';
import { retentionAdvice, recommendNewCards, newCardsForBudget } from './retention.js';
import { stripCloze } from './card-search.js';

// Compact node label from an item id: first author token (+ "+" if multiple),
// then the 4-digit year if the id carries one. e.g.
//   kyle-1985 → "Kyle 1985" · glosten-milgrom-1985 → "Glosten+ 1985"
//   easley-lopez-prado-vpin → "Easley+"
export function shortLabel(item) {
  const parts = String(item.id).split('-');
  const yearIdx = parts.findIndex((p) => /^\d{4}$/.test(p));
  const year = yearIdx >= 0 ? parts[yearIdx] : '';
  const nameParts = parts.filter((_, i) => i !== yearIdx);
  const head = nameParts[0] ? nameParts[0][0].toUpperCase() + nameParts[0].slice(1) : item.id;
  const name = nameParts.length > 1 ? `${head}+` : head;
  return year ? `${name} ${year}` : name;
}

// Longest-path level for each item (level 0 = no prereqs). Robust to missing
// prereq ids and to (defensively) cycles — a visited guard bounds recursion.
export function computeLevels(items) {
  const byId = new Map(items.map((i) => [i.id, i]));
  const level = new Map();
  const visiting = new Set();
  function depth(id) {
    if (level.has(id)) return level.get(id);
    const item = byId.get(id);
    if (!item || visiting.has(id)) return 0;       // unknown id or cycle → floor at 0
    visiting.add(id);
    const prereqs = (item.prereqs || []).filter((p) => byId.has(p));
    const d = prereqs.length === 0 ? 0 : 1 + Math.max(...prereqs.map(depth));
    visiting.delete(id);
    level.set(id, d);
    return d;
  }
  for (const i of items) depth(i.id);
  return level;
}

// Progress for one item's cards. States:
//   no-cards · mastered · in-progress · available · locked
export function itemProgress(item, cards, today, engine) {
  const total = cards.length;
  const masteredCards = cards.filter((c) => isMastered(c, engine)).length;
  const reviewed = cards.filter((c) => (c.repetitions || 0) > 0 || (c.lapses || 0) > 0).length;
  const due = cards.filter((c) => c.nextReview && c.nextReview <= today).length;
  let state;
  if (total === 0) state = 'no-cards';
  else if (masteredCards === total) state = 'mastered';
  else if (reviewed > 0) state = 'in-progress';
  else state = 'available';   // availability vs prereqs is resolved in buildGraph
  return { state, total, mastered: masteredCards, reviewed, due };
}

// Build the renderable graph: nodes (with level/row/state) + prereq edges.
// `cardsByItem` maps itemId → card array.
export function buildGraph(items, cardsByItem, today, engine) {
  const level = computeLevels(items);
  const prog = new Map();
  for (const it of items) prog.set(it.id, itemProgress(it, cardsByItem[it.id] || [], today, engine));

  // Resolve availability: an item with no progress is "locked" iff a prereq is
  // not yet mastered. A card-less prereq does not block (you can't master it).
  const masteredSet = new Set([...prog].filter(([, p]) => p.state === 'mastered').map(([id]) => id));
  const byId = new Map(items.map((i) => [i.id, i]));
  for (const it of items) {
    const p = prog.get(it.id);
    if (p.state !== 'available') continue;
    const prereqs = (it.prereqs || []).filter((x) => byId.has(x));
    const blocked = prereqs.some((pid) => {
      const pp = prog.get(pid);
      return pp && pp.state !== 'mastered' && pp.state !== 'no-cards';
    });
    if (blocked) p.state = 'locked';
  }

  // Row assignment: stable order within each level (items.js order).
  const rowCounter = new Map();
  const nodes = items.map((it) => {
    const lv = level.get(it.id) || 0;
    const row = rowCounter.get(lv) || 0;
    rowCounter.set(lv, row + 1);
    return { id: it.id, label: shortLabel(it), phase: it.phase, level: lv, row, ...prog.get(it.id) };
  });
  const edges = [];
  for (const it of items) {
    for (const pid of (it.prereqs || [])) {
      if (byId.has(pid)) edges.push({ from: pid, to: it.id });
    }
  }
  const cols = Math.max(0, ...nodes.map((n) => n.level)) + 1;
  const rows = Math.max(1, ...[...rowCounter.values()]);
  return { nodes, edges, cols, rows };
}

// Aggregate progress + the engine-appropriate headline stat. Per-phase bars
// use the supplied phase order.
export function dashboardSummary(items, allCards, today, engine, phases = []) {
  const cardsByItem = {};
  for (const c of allCards) (cardsByItem[c.itemId] ||= []).push(c);

  const totalCards = allCards.length;
  const mastered = allCards.filter((c) => isMastered(c, engine)).length;
  const due = allCards.filter((c) => c.nextReview && c.nextReview <= today).length;
  const inProgress = allCards.filter((c) => ((c.repetitions || 0) > 0 || (c.lapses || 0) > 0) && !isMastered(c, engine)).length;
  const fresh = allCards.filter((c) => (c.repetitions || 0) === 0 && (c.lapses || 0) === 0).length;

  const statLabel = engine === 'fsrs' ? 'Avg retention' : 'Avg EF';
  const statValue = engine === 'fsrs'
    ? `${(retentionAverage(allCards, today) * 100).toFixed(0)}%`
    : efAverage(allCards).toFixed(2);

  const phaseOrder = phases.length ? phases.map((p) => (typeof p === 'string' ? p : p.id)) : [];
  const phaseSet = phaseOrder.length ? phaseOrder : [...new Set(items.map((i) => i.phase))];
  const perPhase = phaseSet.map((ph) => {
    const ids = new Set(items.filter((i) => i.phase === ph).map((i) => i.id));
    const cards = allCards.filter((c) => ids.has(c.itemId));
    return {
      phase: ph,
      itemCount: ids.size,
      cardCount: cards.length,
      mastered: cards.filter((c) => isMastered(c, engine)).length,
    };
  }).filter((p) => p.itemCount > 0);

  return { totalCards, mastered, due, inProgress, fresh, statLabel, statValue, perPhase };
}

// Review-workload forecast: how many cards come due on each of the next
// `horizon` days. Overdue cards (nextReview < today) all land on day 0.
export function reviewForecast(cards, today, horizon = 21) {
  const bins = [];
  for (let d = 0; d <= horizon; d++) bins.push({ offset: d, date: addDays(today, d), count: 0 });
  let overdue = 0;
  for (const c of cards) {
    if (c.nextReview == null) continue;
    if (c.nextReview < today) { overdue++; bins[0].count++; continue; }
    const off = daysBetween(today, c.nextReview);
    if (off >= 0 && off <= horizon) bins[off].count++;
  }
  return { bins, overdue };
}

// Projected average retrievability over the next `horizon` days IF no reviews
// happen (the memory simply decays). FSRS-only — returns null otherwise.
export function retentionForecastCurve(cards, today, horizon, engine) {
  if (engine !== 'fsrs') return null;
  const reviewed = cards.filter((c) => c.stability != null && c.lastReviewed);
  if (reviewed.length === 0) return null;
  const curve = [];
  for (let d = 0; d <= horizon; d++) {
    let sum = 0;
    for (const c of reviewed) sum += retrievability(daysBetween(c.lastReviewed, today) + d, c.stability);
    curve.push({ offset: d, retention: sum / reviewed.length });
  }
  return curve;
}

// Review-activity heatmap: reviews per day over the last `weeks` weeks, as a
// chronological 7-row grid (GitHub-contributions style). Filters to a domain
// when entries carry one; legacy entries (no domain) count for every domain.
export function reviewHeatmap(log, today, weeks = 16, domainId = null) {
  const days = weeks * 7;
  const counts = new Map();
  for (const r of (log || [])) {
    if (!r || !r.ts) continue;
    if (domainId && r.domain && r.domain !== domainId) continue;
    const d = String(r.ts).slice(0, 10);
    counts.set(d, (counts.get(d) || 0) + 1);
  }
  const cells = [];
  let max = 0, total = 0;
  for (let i = days - 1; i >= 0; i--) {
    const date = addDays(today, -i);
    const count = counts.get(date) || 0;
    if (count > max) max = count;
    total += count;
    cells.push({ date, count });
  }
  return { cells, max, total, weeks, days };
}

// Review habit + quality stats over the (cross-domain) review log (Phase S24):
// totals, active days, current/longest daily streak, rolling-window counts, the
// grade distribution, and the success rate (grade ≥ 2 = recalled). Pure.
export function reviewStats(log, today) {
  const byDay = new Map();
  const byGrade = { 1: 0, 2: 0, 3: 0, 4: 0 };
  let total = 0, graded = 0;
  for (const r of (log || [])) {
    if (!r || !r.ts) continue;
    const d = String(r.ts).slice(0, 10);
    byDay.set(d, (byDay.get(d) || 0) + 1);
    total++;
    if (r.grade >= 1 && r.grade <= 4) { byGrade[r.grade]++; graded++; }
  }
  const active = new Set(byDay.keys());
  // longest run of consecutive active days
  const days = [...active].sort();
  let longest = 0, run = 0, prev = null;
  for (const d of days) {
    run = (prev && daysBetween(prev, d) === 1) ? run + 1 : 1;
    if (run > longest) longest = run;
    prev = d;
  }
  // current streak: walk back from today (or yesterday, so an as-yet-unreviewed
  // today doesn't break the streak) until a gap
  let current = 0;
  let anchor = active.has(today) ? today : (active.has(addDays(today, -1)) ? addDays(today, -1) : null);
  while (anchor && active.has(anchor)) { current++; anchor = addDays(anchor, -1); }
  // rolling windows
  let last7 = 0, last30 = 0;
  for (const [d, n] of byDay) {
    if (d > today) continue;
    const back = daysBetween(d, today);
    if (back <= 6) last7 += n;
    if (back <= 29) last30 += n;
  }
  return {
    total, activeDays: active.size, currentStreak: current, longestStreak: longest,
    reviewsToday: byDay.get(today) || 0, last7, last30,
    byGrade, graded, successPct: graded ? (byGrade[2] + byGrade[3] + byGrade[4]) / graded : 0,
  };
}

// Weekly success-rate trend (grade ≥ 2 = recalled) over the last `weeks`,
// oldest → newest. A week with no graded reviews has rate = null (a gap in the
// line). Pure — the data behind the "is my recall improving?" sparkline.
export function retentionTrend(log, today, weeks = 12) {
  const bins = Array.from({ length: weeks }, () => ({ graded: 0, success: 0 }));
  for (const r of (log || [])) {
    if (!r || !r.ts || !(r.grade >= 1 && r.grade <= 4)) continue;
    const d = String(r.ts).slice(0, 10);
    if (d > today) continue;
    const w = Math.floor(daysBetween(d, today) / 7);
    if (w < 0 || w >= weeks) continue;
    bins[w].graded++;
    if (r.grade >= 2) bins[w].success++;
  }
  const points = [];
  for (let w = weeks - 1; w >= 0; w--) {
    const b = bins[w];
    points.push({ weeksAgo: w, weekEnd: addDays(today, -7 * w), graded: b.graded, success: b.success, rate: b.graded ? b.success / b.graded : null });
  }
  const totalGraded = bins.reduce((a, b) => a + b.graded, 0);
  const totalSuccess = bins.reduce((a, b) => a + b.success, 0);
  return { points, weeks, totalGraded, overallRate: totalGraded ? totalSuccess / totalGraded : null };
}

// Study-timing: when (day of week + hour of day) you review, and how well you
// recall then. Day-of-week comes from each entry's date (works on all history);
// hour-of-day comes from the `hour` field captured at review time (newer
// entries only). Pure — derives weekday from the date string, no clock.
export function reviewTimeStats(log) {
  const mk = (k) => Array.from({ length: k }, () => ({ n: 0, graded: 0, success: 0 }));
  const dow = mk(7), hour = mk(24);
  let hasHours = false;
  for (const r of (log || [])) {
    if (!r || !r.ts) continue;
    const isGraded = r.grade >= 1 && r.grade <= 4;
    const recalled = r.grade >= 2 ? 1 : 0;
    const wd = new Date(String(r.ts).slice(0, 10) + 'T00:00:00Z').getUTCDay();   // 0 = Sun
    if (!Number.isNaN(wd)) { dow[wd].n++; if (isGraded) { dow[wd].graded++; dow[wd].success += recalled; } }
    if (typeof r.hour === 'number' && r.hour >= 0 && r.hour <= 23) {
      hasHours = true;
      hour[r.hour].n++; if (isGraded) { hour[r.hour].graded++; hour[r.hour].success += recalled; }
    }
  }
  const rate = (b) => (b.graded ? b.success / b.graded : null);
  return {
    byDow: dow.map((b, i) => ({ dow: i, n: b.n, graded: b.graded, success: b.success, rate: rate(b) })),
    byHour: hour.map((b, i) => ({ hour: i, n: b.n, graded: b.graded, success: b.success, rate: rate(b) })),
    hasHours,
    total: dow.reduce((a, b) => a + b.n, 0),
  };
}

// Per-domain breakdown of the review habit/quality stats. Groups the log by
// `r.domain` (legacy entries with none ⇒ 'untagged'), runs reviewStats over each
// group, and returns rows sorted by volume. Pure.
export function reviewStatsByDomain(log, today) {
  const groups = new Map();
  for (const r of (log || [])) {
    if (!r || !r.ts) continue;
    const d = r.domain || 'untagged';
    if (!groups.has(d)) groups.set(d, []);
    groups.get(d).push(r);
  }
  const rows = [];
  for (const [domainId, entries] of groups) {
    const s = reviewStats(entries, today);
    rows.push({ domainId, total: s.total, last7: s.last7, last30: s.last30, graded: s.graded, successPct: s.successPct, currentStreak: s.currentStreak });
  }
  rows.sort((a, b) => b.total - a.total || String(a.domainId).localeCompare(String(b.domainId)));
  return rows;
}

// Leeches: cards that keep failing (lapses ≥ threshold) — the ones worth
// reformulating rather than re-drilling (Wozniak's minimum-information / atomicity
// rules). Sorted worst-first (most lapses, then hardest by ease/difficulty). Pure.
export const LEECH_THRESHOLD = 4;
export function findLeeches(cards, opts = {}) {
  const threshold = opts.threshold != null ? opts.threshold : LEECH_THRESHOLD;
  return (cards || [])
    .filter((c) => c && (c.lapses || 0) >= threshold)
    .map((c) => ({ id: c.id, itemId: c.itemId, front: c.front || '', lapses: c.lapses || 0, repetitions: c.repetitions || 0, ef: c.ef, difficulty: c.difficulty }))
    .sort((a, b) => b.lapses - a.lapses || (a.ef != null ? a.ef : 9) - (b.ef != null ? b.ef : 9) || String(a.id).localeCompare(String(b.id)));
}

// ─── spaced-repetition "what-if" projection (Phase S17) ─────────────────
//
// Project a single *fresh* card's interval trajectory forward through a chosen
// grade pattern, reviewing exactly on each due date — under either engine.
// Faithful by construction: it drives the real schedule() facade, so SM-2 and
// FSRS lines are the genuine schedulers, not re-implementations. Pedagogical,
// not tied to the user's actual cards — answers "if I always rate X, how do my
// intervals grow, and how do the two engines differ?"

const WHATIF_PRESETS = ['good', 'easy', 'hard', 'alt', 'lapse'];
const WHATIF_LABELS = {
  good: { en: 'Always Good', id: 'Selalu Good' },
  easy: { en: 'Always Easy', id: 'Selalu Easy' },
  hard: { en: 'Always Hard-pass', id: 'Selalu Hard' },
  alt: { en: 'Good / Hard alternating', id: 'Good / Hard gantian' },
  lapse: { en: 'All Good, one lapse', id: 'Semua Good, satu lapse' },
};

// A length-n array of integer qualities (0–5) for a named pattern.
export function whatIfPattern(preset, n) {
  const out = [];
  const mid = Math.floor(n / 2);
  for (let i = 0; i < n; i++) {
    switch (preset) {
      case 'easy': out.push(5); break;                          // always "Easy"
      case 'hard': out.push(3); break;                          // always "Hard" pass
      case 'alt': out.push(i % 2 === 0 ? 4 : 3); break;         // Good / Hard alternating
      case 'lapse': out.push(i === mid ? 1 : 4); break;         // all Good, one lapse mid-way
      case 'good':
      default: out.push(4);                                     // always "Good"
    }
  }
  return out;
}

// One point per review: the resulting interval, the calendar day the review
// lands on (day 0 = first exposure) and the next due day, plus engine-specific
// internals (SM-2 EF / FSRS stability+difficulty) and mastery/lapse flags.
export function whatIfTrajectory(grades, engine, today, requestRetention, weights) {
  let card = engine === 'fsrs'
    ? { stability: null, difficulty: null, interval: 0, repetitions: 0, lapses: 0, ef: 2.5, nextReview: null, lastReviewed: null }
    : { ef: 2.5, interval: 0, repetitions: 0, lapses: 0, nextReview: null, lastReviewed: null };
  let day = 0;
  const points = [];
  for (let i = 0; i < grades.length; i++) {
    const q = grades[i];
    const reviewDate = addDays(today, day);
    card = schedule(card, q, reviewDate, engine, requestRetention, weights);
    const pt = {
      step: i + 1, quality: q, dayOfReview: day, interval: card.interval,
      nextDay: day + card.interval, lapsed: q < 3, mastered: isMastered(card, engine),
    };
    if (engine === 'fsrs') { pt.stability = card.stability; pt.difficulty = card.difficulty; }
    else pt.ef = card.ef;
    points.push(pt);
    day += card.interval;
  }
  return points;
}

// Summary stats for a trajectory: final interval, total calendar span, and the
// review at which the card first reaches "mastered" (null if it never does).
export function whatIfSummary(points) {
  if (!points || !points.length) return { finalInterval: 0, totalDays: 0, masteredAt: null, reviews: 0 };
  const last = points[points.length - 1];
  const m = points.find((p) => p.mastered);
  return { finalInterval: last.interval, totalDays: last.nextDay, masteredAt: m ? m.step : null, reviews: points.length };
}

// ─── rendering ─────────────────────────────────────────────────────────

const STATE_FILL = {
  mastered: 'var(--gold)',
  'in-progress': 'var(--azul)',
  available: 'var(--bg-elev-2, #2a2a2a)',
  locked: 'var(--bg-elev-1)',
  'no-cards': 'var(--bg-elev-1)',
};

export function renderDashboardView(state, root, deps) {
  const { domainId, items = [], phases = [], domainMeta, lang, domainLabels = {} } = deps;
  const today = deps.today || todayLocalISO();
  const engine = engineOf(state.settings);
  const allCards = getAllCards(state, domainId);
  const sum = dashboardSummary(items, allCards, today, engine, phases);
  const graph = buildGraph(items, groupBy(allCards, 'itemId'), today, engine);
  const HORIZON = 21;
  const forecast = reviewForecast(allCards, today, HORIZON);
  const retCurve = retentionForecastCurve(allCards, today, HORIZON, engine);
  const heatmap = reviewHeatmap(state.reviewLog || [], today, 16, domainId);
  const stats = reviewStats(state.reviewLog || [], today);   // cross-domain habit/quality readout
  const trend = retentionTrend(state.reviewLog || [], today, 12);   // weekly success-rate sparkline
  const timing = reviewTimeStats(state.reviewLog || []);   // study day-of-week + hour-of-day
  const byDomain = reviewStatsByDomain(state.reviewLog || [], today);   // per-domain breakdown
  const rr0 = (state.settings && state.settings.review && state.settings.review.requestRetention) || 0.9;
  // Scheduler backtest uses the FULL cross-domain review log + the user's active
  // FSRS weights (trained if present) — scheduler quality is a global property.
  const backtest = backtestEngines(state.reviewLog || [], { weights: fsrsWeightsOf(state.settings), requestRetention: rr0, minPredictions: 20 });
  // Modelled review-workload-vs-target-retention curve (pure FSRS dynamics).
  const retAdvice = retentionAdvice(fsrsWeightsOf(state.settings), rr0);
  const leeches = findLeeches(allCards);   // chronically-failed cards in this domain
  // New-card budget: from each card's modelled first-year cost + recent pace.
  const newCardRec = recommendNewCards(fsrsWeightsOf(state.settings), rr0);
  const avgReviewsPerDay = stats.last30 ? Math.round(stats.last30 / 30) : null;
  const personalNewCards = avgReviewsPerDay ? newCardsForBudget(fsrsWeightsOf(state.settings), rr0, avgReviewsPerDay) : null;

  const phaseLabel = (id) => {
    const p = phases.find((x) => (typeof x === 'string' ? x : x.id) === id);
    return (p && typeof p === 'object' && (p.label || p.name)) || id;
  };

  const tiles = [
    { k: 'Due today', v: sum.due, cls: 'due' },
    { k: 'Mastered', v: sum.mastered, cls: 'mastered' },
    { k: 'In progress', v: sum.inProgress, cls: 'in-progress' },
    { k: 'Not started', v: sum.fresh, cls: 'new' },
    { k: sum.statLabel, v: sum.statValue, cls: 'stat' },
  ];

  root.innerHTML = `
    <div class="dashboard">
      <header class="dashboard-header">
        <h1>${escapeHTML((domainMeta && domainMeta.fullName) || 'Dashboard')}</h1>
        <p class="muted">${sum.totalCards} cards · scheduler: <strong>${engine === 'fsrs' ? 'FSRS-4.5' : 'SM-2'}</strong></p>
      </header>

      <div class="dashboard-tiles">
        ${tiles.map((t) => `
          <div class="dash-tile dash-tile-${t.cls}">
            <div class="dash-tile-value">${t.v}</div>
            <div class="dash-tile-label">${escapeHTML(t.k)}</div>
          </div>`).join('')}
      </div>

      ${sum.perPhase.length ? `
      <section class="dashboard-phases">
        <h2 class="dashboard-subhead">Progress by phase</h2>
        ${sum.perPhase.map((p) => {
          const pct = p.cardCount ? Math.round((p.mastered / p.cardCount) * 100) : 0;
          return `
            <div class="phase-bar-row">
              <span class="phase-bar-label">${escapeHTML(phaseLabel(p.phase))}</span>
              <div class="phase-bar-track"><div class="phase-bar-fill" style="width:${pct}%"></div></div>
              <span class="phase-bar-meta">${p.mastered}/${p.cardCount || '—'}${p.cardCount ? '' : ' (no cards)'}</span>
            </div>`;
        }).join('')}
      </section>` : ''}

      <section class="dashboard-forecast">
        <h2 class="dashboard-subhead">Review forecast — next ${HORIZON} days</h2>
        <p class="muted dashboard-graph-help">Cards coming due each day (overdue cards counted on day 0).${retCurve ? ' The gold line is your projected average retention if you stopped reviewing — FSRS-only.' : ''}</p>
        ${forecastSVG(forecast, retCurve, HORIZON)}
      </section>

      <section class="dashboard-stats">
        <h2 class="dashboard-subhead">Review stats — all domains</h2>
        ${statsPanelHTML(stats, trend, lang, byDomain, domainLabels)}
      </section>

      <section class="dashboard-heatmap">
        <h2 class="dashboard-subhead">Review activity — last 16 weeks</h2>
        <p class="muted dashboard-graph-help">${heatmap.total} review${heatmap.total === 1 ? '' : 's'} logged in this domain. Each cell is a day; darker = more reviews. Start reviewing to fill it in.</p>
        ${heatmapSVG(heatmap)}
      </section>

      <section class="dashboard-whatif">
        <h2 class="dashboard-subhead">What-if: interval growth — SM-2 vs FSRS</h2>
        <p class="muted dashboard-graph-help">Project one fresh card forward under a chosen rating pattern, reviewing exactly on each due date. The y-axis is the next interval (log scale; ✗ marks a lapse). See how the two engines diverge — and how FSRS's target retention reshapes its curve.</p>
        <div class="whatif-controls">
          <label>Pattern
            <select data-whatif="preset">
              ${WHATIF_PRESETS.map((p) => `<option value="${p}"${p === 'good' ? ' selected' : ''}>${WHATIF_LABELS[p][lang === 'id' ? 'id' : 'en']}</option>`).join('')}
            </select>
          </label>
          <label>Reviews <input type="range" data-whatif="n" min="4" max="14" step="1" value="9" /> <span data-whatif-show="n">9</span></label>
          <label>FSRS target retention <input type="range" data-whatif="rr" min="0.80" max="0.97" step="0.01" value="${rr0.toFixed(2)}" /> <span data-whatif-show="rr">${Math.round(rr0 * 100)}%</span></label>
        </div>
        <div class="whatif-legend graph-legend">
          <span class="legend-item"><span class="legend-swatch" style="background:var(--azul)"></span>SM-2</span>
          <span class="legend-item"><span class="legend-swatch" style="background:var(--gold)"></span>FSRS-4.5</span>
          <span class="legend-item"><span class="legend-swatch" style="background:var(--rose)"></span>lapse</span>
        </div>
        <div data-whatif-chart></div>
        <p class="muted" data-whatif-readout></p>
      </section>

      <section class="dashboard-backtest">
        <h2 class="dashboard-subhead">Scheduler backtest — FSRS vs SM-2 on your recall</h2>
        ${backtestPanelHTML(backtest)}
      </section>

      <section class="dashboard-retention">
        <h2 class="dashboard-subhead">Target-retention workload — how hard should you study?</h2>
        ${retentionPanelHTML(retAdvice, rr0, lang)}
      </section>

      <section class="dashboard-newcards">
        <h2 class="dashboard-subhead">New cards per day — how many can you sustain?</h2>
        ${newCardsPanelHTML(newCardRec, rr0, avgReviewsPerDay, personalNewCards, lang)}
      </section>

      ${leeches.length ? `
      <section class="dashboard-leeches">
        <h2 class="dashboard-subhead">Leeches — cards worth reformulating (${leeches.length})</h2>
        ${leechPanelHTML(leeches, items, lang)}
      </section>` : ''}

      <section class="dashboard-timing">
        <h2 class="dashboard-subhead">When you study — day & hour</h2>
        ${studyTimingPanelHTML(timing, lang)}
      </section>

      <section class="dashboard-graph">
        <h2 class="dashboard-subhead">Prerequisite map</h2>
        <p class="muted dashboard-graph-help">Each node is a source; arrows point from a prerequisite to what it unlocks. Colour shows your progress. Click a node to open it in the Library.</p>
        ${graphSVG(graph, lang)}
        <div class="graph-legend">
          ${[['mastered', 'mastered'], ['in-progress', 'in progress'], ['available', 'available'], ['locked', 'locked'], ['no-cards', 'no cards yet']]
            .map(([s, lbl]) => `<span class="legend-item"><span class="legend-swatch" style="background:${STATE_FILL[s]}"></span>${lbl}</span>`).join('')}
        </div>
      </section>
    </div>
  `;

  root.querySelectorAll('[data-node-item]').forEach((el) => {
    el.addEventListener('click', () => deps.onNodeClick && deps.onNodeClick(el.dataset.nodeItem));
  });

  wireWhatIf(root, today, fsrsWeightsOf(state.settings), lang);
}

function groupBy(arr, key) {
  const out = {};
  for (const x of arr) (out[x[key]] ||= []).push(x);
  return out;
}

function heatmapSVG(hm) {
  const cell = 13, gap = 3, rows = 7, cols = hm.weeks;
  const M = { top: 6, left: 6, right: 6, bottom: 22 };
  const W = M.left + cols * (cell + gap) + M.right + 60;   // + room for the legend
  const H = M.top + rows * (cell + gap) + M.bottom;
  // intensity buckets (0 = empty, then quartiles of max)
  const level = (c) => {
    if (c <= 0) return 0;
    if (hm.max <= 1) return 4;
    const q = c / hm.max;
    return q > 0.75 ? 4 : q > 0.5 ? 3 : q > 0.25 ? 2 : 1;
  };
  const fill = ['var(--bg-elev-2, #2a2a2a)', 'var(--gold-soft)', 'rgba(138,100,34,0.45)', 'rgba(138,100,34,0.72)', 'var(--gold)'];
  const rects = hm.cells.map((c, i) => {
    const col = Math.floor(i / rows), row = i % rows;
    const x = M.left + col * (cell + gap), y = M.top + row * (cell + gap);
    return `<rect x="${x}" y="${y}" width="${cell}" height="${cell}" rx="2" fill="${fill[level(c.count)]}" stroke="var(--line-soft)" stroke-width="0.5"><title>${c.date}: ${c.count}</title></rect>`;
  }).join('');
  // legend (less → more)
  const lx = M.left + cols * (cell + gap) + 10, ly = M.top + 4;
  const legend = `<text x="${lx}" y="${ly + 10}" font-size="9" fill="var(--ink-mute)">less</text>` +
    [0, 1, 2, 3, 4].map((l, j) => `<rect x="${lx + 26 + j * (cell + 2)}" y="${ly}" width="${cell}" height="${cell}" rx="2" fill="${fill[l]}" stroke="var(--line-soft)" stroke-width="0.5" />`).join('') +
    `<text x="${lx + 26 + 5 * (cell + 2) + 2}" y="${ly + 10}" font-size="9" fill="var(--ink-mute)">more</text>`;
  return `
    <svg viewBox="0 0 ${W} ${H}" width="100%" preserveAspectRatio="xMinYMid meet" class="viz-svg" style="max-width:${W}px">
      <rect x="0" y="0" width="${W}" height="${H}" fill="var(--bg-elev-1)" />
      ${rects}
      ${legend}
    </svg>`;
}

function forecastSVG(forecast, retCurve, horizon) {
  const W = 640, H = 220, M = { top: 16, right: 38, bottom: 30, left: 38 };
  const plotW = W - M.left - M.right, plotH = H - M.top - M.bottom;
  const bins = forecast.bins;
  const maxCount = Math.max(1, ...bins.map((b) => b.count));
  const bw = plotW / bins.length;
  const bars = bins.map((b, i) => {
    const h = (b.count / maxCount) * plotH;
    const x = M.left + i * bw + 1;
    const fill = i === 0 ? 'var(--gold)' : 'var(--azul)';   // day 0 = overdue + due today
    return `<rect x="${x.toFixed(1)}" y="${(M.top + plotH - h).toFixed(1)}" width="${(bw - 2).toFixed(1)}" height="${h.toFixed(1)}" fill="${fill}" opacity="0.8" />`;
  }).join('');
  const xTicks = [0, 7, 14, 21].filter((d) => d <= horizon).map((d) => {
    const x = M.left + (d + 0.5) * bw;
    return `<text x="${x.toFixed(1)}" y="${M.top + plotH + 18}" text-anchor="middle" font-size="9" fill="var(--ink-mute)">${d === 0 ? 'now' : '+' + d + 'd'}</text>`;
  }).join('');
  let retLine = '';
  if (retCurve) {
    const ry = (r) => M.top + (1 - r) * plotH;           // retention 0..1 on full height
    const pts = retCurve.map((p, i) => `${i === 0 ? 'M' : 'L'} ${(M.left + (p.offset + 0.5) * bw).toFixed(1)} ${ry(p.retention).toFixed(1)}`).join(' ');
    retLine = `
      <path d="${pts}" fill="none" stroke="var(--gold)" stroke-width="2" />
      <text x="${W - M.right + 3}" y="${ry(1).toFixed(1) + 4}" font-size="9" fill="var(--ink-mute)">100%</text>
      <text x="${W - M.right + 3}" y="${ry(0.5).toFixed(1)}" font-size="9" fill="var(--ink-mute)">50%</text>`;
  }
  return `
    <svg viewBox="0 0 ${W} ${H}" width="100%" preserveAspectRatio="xMidYMid meet" class="viz-svg">
      <rect x="0" y="0" width="${W}" height="${H}" fill="var(--bg-elev-1)" />
      <line x1="${M.left}" y1="${M.top + plotH}" x2="${M.left + plotW}" y2="${M.top + plotH}" stroke="var(--line)" />
      ${bars}
      ${retLine}
      ${xTicks}
      <text x="${M.left}" y="${M.top + 8}" font-size="9" fill="var(--ink-mute)">${maxCount} due</text>
    </svg>`;
}

// Interval-growth chart for the what-if projection: review # on x, interval on
// a log10 y axis (reference lines at 1d/1w/1mo/3mo/1y). SM-2 (azul) and FSRS
// (gold) overlaid; lapses drawn as rose ✗.
function whatIfSVG(sm2pts, fsrspts, lang) {
  const W = 640, H = 280, M = { top: 16, right: 46, bottom: 32, left: 16 };
  const plotW = W - M.left - M.right, plotH = H - M.top - M.bottom;
  const n = Math.max(sm2pts.length, fsrspts.length, 1);
  const maxI = Math.max(30, ...[...sm2pts, ...fsrspts].map((p) => p.interval));
  const logMax = Math.log10(maxI) || 1;
  const yOf = (iv) => M.top + plotH - (Math.log10(Math.max(1, iv)) / logMax) * plotH;
  const xOf = (step) => M.left + (n === 1 ? plotW / 2 : ((step - 1) / (n - 1)) * plotW);
  const refLines = [1, 7, 30, 90, 365].filter((d) => d <= maxI * 1.05).map((d) => {
    const y = yOf(d), lbl = d === 1 ? '1d' : d === 7 ? '1w' : d === 30 ? '1mo' : d === 90 ? '3mo' : '1y';
    return `<line x1="${M.left}" y1="${y.toFixed(1)}" x2="${(M.left + plotW).toFixed(1)}" y2="${y.toFixed(1)}" stroke="var(--line-soft)" stroke-width="0.5" stroke-dasharray="2 3" />
      <text x="${(M.left + plotW + 4).toFixed(1)}" y="${(y + 3).toFixed(1)}" font-size="9" fill="var(--ink-mute)">${lbl}</text>`;
  }).join('');
  const xTicks = Array.from({ length: n }, (_, i) => i + 1)
    .filter((s) => n <= 8 || s === 1 || s % 2 === 0 || s === n)
    .map((s) => `<text x="${xOf(s).toFixed(1)}" y="${(M.top + plotH + 16).toFixed(1)}" text-anchor="middle" font-size="9" fill="var(--ink-mute)">${s}</text>`).join('');
  const series = (pts, color) => {
    if (!pts.length) return '';
    const path = pts.map((p, i) => `${i === 0 ? 'M' : 'L'} ${xOf(p.step).toFixed(1)} ${yOf(p.interval).toFixed(1)}`).join(' ');
    const dots = pts.map((p) => {
      const x = xOf(p.step), y = yOf(p.interval);
      return p.lapsed
        ? `<path d="M ${(x - 3).toFixed(1)} ${(y - 3).toFixed(1)} l 6 6 M ${(x + 3).toFixed(1)} ${(y - 3).toFixed(1)} l -6 6" stroke="var(--rose)" stroke-width="1.5" />`
        : `<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="3" fill="${color}" />`;
    }).join('');
    return `<path d="${path}" fill="none" stroke="${color}" stroke-width="2" />${dots}`;
  };
  const xlabel = lang === 'id' ? 'review ke-' : 'review #';
  return `
    <svg viewBox="0 0 ${W} ${H}" width="100%" preserveAspectRatio="xMidYMid meet" class="viz-svg">
      <rect x="0" y="0" width="${W}" height="${H}" fill="var(--bg-elev-1)" />
      ${refLines}
      ${series(sm2pts, 'var(--azul)')}
      ${series(fsrspts, 'var(--gold)')}
      ${xTicks}
      <text x="${(M.left + plotW / 2).toFixed(1)}" y="${(H - 5).toFixed(1)}" text-anchor="middle" font-size="9" fill="var(--ink-mute)">${xlabel}</text>
    </svg>`;
}

// Wire the interactive what-if panel: recompute both trajectories on any
// control change and re-render the chart + readout in place.
function wireWhatIf(root, today, weights, lang) {
  const presetSel = root.querySelector('[data-whatif="preset"]');
  const nIn = root.querySelector('[data-whatif="n"]');
  const rrIn = root.querySelector('[data-whatif="rr"]');
  const nShow = root.querySelector('[data-whatif-show="n"]');
  const rrShow = root.querySelector('[data-whatif-show="rr"]');
  const chart = root.querySelector('[data-whatif-chart]');
  const readout = root.querySelector('[data-whatif-readout]');
  if (!presetSel || !chart) return;
  const masteredTxt = (s) => s.masteredAt ? `${lang === 'id' ? 'mastery di review' : 'mastery at review'} ${s.masteredAt}` : (lang === 'id' ? 'belum mastery' : 'no mastery');
  const render = () => {
    const preset = presetSel.value, n = parseInt(nIn.value, 10), rr = parseFloat(rrIn.value);
    nShow.textContent = n;
    rrShow.textContent = Math.round(rr * 100) + '%';
    const grades = whatIfPattern(preset, n);
    const sm2pts = whatIfTrajectory(grades, 'sm2', today);
    const fsrspts = whatIfTrajectory(grades, 'fsrs', today, rr, weights);
    chart.innerHTML = whatIfSVG(sm2pts, fsrspts, lang);
    const s = whatIfSummary(sm2pts), f = whatIfSummary(fsrspts);
    readout.innerHTML = `<strong style="color:var(--azul)">SM-2</strong> ${lang === 'id' ? 'interval akhir' : 'final interval'} ${s.finalInterval}d · ${masteredTxt(s)} · <strong style="color:var(--gold)">FSRS</strong> ${f.finalInterval}d · ${masteredTxt(f)} · ${lang === 'id' ? 'rentang' : 'span'} ${Math.max(s.totalDays, f.totalDays)}d`;
  };
  presetSel.addEventListener('change', render);
  nIn.addEventListener('input', render);
  rrIn.addEventListener('input', render);
  render();
}

// Read-only verdict panel for the scheduler backtest. Shows a "need more data"
// hint below the threshold; otherwise a two-row comparison + a one-line verdict.
function backtestPanelHTML(bt) {
  if (!bt.enough) {
    const need = bt.minPredictions - bt.n;
    return `<p class="muted dashboard-graph-help">Log ${need} more review${need === 1 ? '' : 's'} (with a repeat of an already-seen card) to compare engines — we replay each card's history and score predicted vs actual recall. So far: ${bt.n}/${bt.minPredictions} prediction${bt.n === 1 ? '' : 's'} across ${bt.cards} card${bt.cards === 1 ? '' : 's'}.</p>`;
  }
  const pct = (x) => `${(x * 100).toFixed(1)}%`;
  const ll = (x) => x.toFixed(3);
  const winFsrs = bt.winner === 'fsrs', winSm2 = bt.winner === 'sm2';
  const row = (label, sc, isWin) => `
    <div class="backtest-row${isWin ? ' backtest-win' : ''}">
      <span class="backtest-engine">${label}${isWin ? ' ✓' : ''}</span>
      <span class="backtest-metric"><strong>${ll(sc.logLoss)}</strong> log-loss</span>
      <span class="backtest-metric">${pct(sc.accuracy)} acc</span>
      <span class="backtest-metric">${sc.brier.toFixed(3)} brier</span>
    </div>`;
  const verdict = bt.margin < 0.01
    ? `The two engines predicted your recall <strong>about equally well</strong>`
    : `<strong>${winFsrs ? 'FSRS' : 'SM-2'}</strong> predicted your recall <strong>better</strong> (lower log-loss by ${ll(bt.margin)})`;
  return `
    <p class="muted dashboard-graph-help">Replayed your last <strong>${bt.n}</strong> prediction${bt.n === 1 ? '' : 's'} across <strong>${bt.cards}</strong> card${bt.cards === 1 ? '' : 's'} (all domains). Lower log-loss = better-calibrated. ${verdict}.</p>
    <div class="backtest-table">
      ${row(`FSRS-4.5${bt.usedTrainedWeights ? ' (trained)' : ''}`, bt.fsrs, winFsrs)}
      ${row('SM-2', bt.sm2, winSm2)}
    </div>
    <p class="muted backtest-note">SM-2 has no native retention curve; its probabilities use the standard exponential proxy R = ${bt.requestRetention.toFixed(2)}<sup>t/interval</sup>, so this is a directional diagnostic, not a head-to-head SM-2 claim.</p>`;
}

// Read-only review habit/quality panel: streak headline, a row of stat tiles,
// and a grade-distribution bar (Again / Hard / Good / Easy).
function retentionTrendSVG(trend, lang) {
  const W = 640, H = 150, M = { top: 14, right: 44, bottom: 22, left: 16 };
  const plotW = W - M.left - M.right, plotH = H - M.top - M.bottom;
  const n = trend.points.length;
  const xOf = (i) => M.left + (n <= 1 ? plotW / 2 : (i / (n - 1)) * plotW);
  const yOf = (r) => M.top + (1 - r) * plotH;
  const grid = [0.5, 0.75, 1].map((r) => `
    <line x1="${M.left}" y1="${yOf(r).toFixed(1)}" x2="${(M.left + plotW).toFixed(1)}" y2="${yOf(r).toFixed(1)}" stroke="var(--line-soft)" stroke-width="0.5" stroke-dasharray="2 3" />
    <text x="${(M.left + plotW + 4).toFixed(1)}" y="${(yOf(r) + 3).toFixed(1)}" font-size="9" fill="var(--ink-mute)">${Math.round(r * 100)}%</text>`).join('');
  const overall = trend.overallRate != null
    ? `<line x1="${M.left}" y1="${yOf(trend.overallRate).toFixed(1)}" x2="${(M.left + plotW).toFixed(1)}" y2="${yOf(trend.overallRate).toFixed(1)}" stroke="var(--gold)" stroke-width="1" stroke-dasharray="4 3" opacity="0.75" />` : '';
  let path = '', started = false;
  const dots = [];
  trend.points.forEach((p, i) => {
    if (p.rate == null) { started = false; return; }
    const x = xOf(i), y = yOf(p.rate);
    path += `${started ? 'L' : 'M'} ${x.toFixed(1)} ${y.toFixed(1)} `;
    started = true;
    dots.push(`<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="2.5" fill="var(--azul)"><title>${p.weekEnd}: ${Math.round(p.rate * 100)}% of ${p.graded}</title></circle>`);
  });
  const line = path ? `<path d="${path.trim()}" fill="none" stroke="var(--azul)" stroke-width="2" />` : '';
  const xlabel = lang === 'id' ? 'minggu (lama → baru)' : 'week (old → new)';
  return `
    <svg viewBox="0 0 ${W} ${H}" width="100%" preserveAspectRatio="xMidYMid meet" class="viz-svg">
      <rect x="0" y="0" width="${W}" height="${H}" fill="var(--bg-elev-1)" />
      ${grid}${overall}${line}${dots.join('')}
      <text x="${(M.left + plotW / 2).toFixed(1)}" y="${(H - 4).toFixed(1)}" text-anchor="middle" font-size="9" fill="var(--ink-mute)">${xlabel}</text>
    </svg>`;
}

const TIMING_FILL = ['var(--bg-elev-2, #2a2a2a)', 'var(--gold-soft)', 'rgba(138,100,34,0.45)', 'rgba(138,100,34,0.72)', 'var(--gold)'];
const DOW_LABELS = { en: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'], id: ['Min', 'Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab'] };

function timingCellHTML(b, maxN, label) {
  const intensity = maxN > 0 ? b.n / maxN : 0;
  const lvl = b.n === 0 ? 0 : intensity > 0.75 ? 4 : intensity > 0.5 ? 3 : intensity > 0.25 ? 2 : 1;
  const rate = b.rate != null ? `${Math.round(b.rate * 100)}% recall` : 'no graded reviews';
  return `<div class="timing-cell" style="background:${TIMING_FILL[lvl]}"><span class="timing-cell-label">${escapeHTML(label)}</span><title>${escapeHTML(label)}: ${b.n} review${b.n === 1 ? '' : 's'} · ${rate}</title></div>`;
}

// Read-only study-timing panel: a weekday strip (all history) + an hour-of-day
// strip (timestamped reviews only), each cell shaded by volume, recall in tip.
function studyTimingPanelHTML(timing, lang) {
  if (!timing.total) {
    return `<p class="muted dashboard-graph-help">No reviews logged yet — your best study days and hours will appear here once you start rating cards.</p>`;
  }
  const dl = DOW_LABELS[lang === 'id' ? 'id' : 'en'];
  const order = [1, 2, 3, 4, 5, 6, 0];   // Mon-first
  const maxDow = Math.max(1, ...timing.byDow.map((b) => b.n));
  const dowCells = order.map((i) => timingCellHTML(timing.byDow[i], maxDow, dl[i])).join('');
  let hourBlock = '';
  if (timing.hasHours) {
    const maxHour = Math.max(1, ...timing.byHour.map((b) => b.n));
    const hourCells = timing.byHour.map((b) => timingCellHTML(b, maxHour, String(b.hour))).join('');
    hourBlock = `
      <p class="timing-sub muted">${lang === 'id' ? 'Jam (lokal)' : 'Hour of day (local)'}</p>
      <div class="timing-strip timing-hours">${hourCells}</div>`;
  } else {
    hourBlock = `<p class="timing-sub muted">${lang === 'id' ? 'Pola jam akan muncul untuk review baru (waktu mulai direkam).' : 'Hour-of-day pattern appears for new reviews (timestamps are now recorded).'}</p>`;
  }
  return `
    <p class="muted dashboard-graph-help">Darker = more reviews; hover a cell for its recall rate. Spot when you actually study — and when you recall best.</p>
    <p class="timing-sub muted">${lang === 'id' ? 'Hari' : 'Day of week'}</p>
    <div class="timing-strip timing-days">${dowCells}</div>
    ${hourBlock}`;
}

// Read-only review habit/quality panel: streak headline, a row of stat tiles,
// and a grade-distribution bar (Again / Hard / Good / Easy).
function statsPanelHTML(stats, trend, lang, byDomain = [], domainLabels = {}) {
  if (!stats.total) {
    return `<p class="muted dashboard-graph-help">No reviews logged yet. Rate some cards and your streak, totals, and grade mix will show here.</p>`;
  }
  const tiles = [
    { k: 'Reviews today', v: stats.reviewsToday },
    { k: 'Last 7 days', v: stats.last7 },
    { k: 'Last 30 days', v: stats.last30 },
    { k: 'Total reviews', v: stats.total },
    { k: 'Active days', v: stats.activeDays },
    { k: 'Success rate', v: `${Math.round(stats.successPct * 100)}%` },
  ];
  const GRADES = [
    { g: 1, label: 'Again', cls: 'again' }, { g: 2, label: 'Hard', cls: 'hard' },
    { g: 3, label: 'Good', cls: 'good' }, { g: 4, label: 'Easy', cls: 'easy' },
  ];
  const denom = stats.graded || 1;
  const segs = GRADES.map(({ g, label, cls }) => {
    const n = stats.byGrade[g] || 0;
    const pct = (n / denom) * 100;
    return n > 0 ? `<div class="grade-seg grade-${cls}" style="width:${pct.toFixed(1)}%"><title>${label}: ${n} (${Math.round(pct)}%)</title></div>` : '';
  }).join('');
  const legend = GRADES.map(({ g, label, cls }) => `<span class="grade-legend-item"><span class="grade-swatch grade-${cls}"></span>${label} ${stats.byGrade[g] || 0}</span>`).join('');
  return `
    <p class="stats-streak">🔥 <strong>${stats.currentStreak}</strong>-day streak${stats.currentStreak > 0 ? '' : ' — review today to start one'} · longest <strong>${stats.longestStreak}</strong></p>
    <div class="stats-tiles">
      ${tiles.map((t) => `<div class="stats-tile"><div class="stats-tile-value">${t.v}</div><div class="stats-tile-label">${escapeHTML(t.k)}</div></div>`).join('')}
    </div>
    ${stats.graded ? `
      <div class="grade-bar" role="img" aria-label="Grade distribution">${segs}</div>
      <div class="grade-legend">${legend}</div>` : ''}
    ${trend && trend.totalGraded > 0 ? `
      <h3 class="stats-trend-head">Recall trend — weekly success rate${trend.overallRate != null ? ` <span class="muted">(overall ${Math.round(trend.overallRate * 100)}%, gold line)</span>` : ''}</h3>
      ${retentionTrendSVG(trend, lang)}` : ''}
    ${byDomain.length > 1 ? `
      <h3 class="stats-trend-head">By domain</h3>
      <table class="stats-domain-table">
        <thead><tr><th>Domain</th><th>Reviews</th><th>Last 7</th><th>Success</th><th>Streak</th></tr></thead>
        <tbody>
          ${byDomain.map((r) => `
            <tr>
              <td>${escapeHTML(domainLabels[r.domainId] || r.domainId)}</td>
              <td>${r.total}</td>
              <td>${r.last7}</td>
              <td>${r.graded ? Math.round(r.successPct * 100) + '%' : '—'}</td>
              <td>${r.currentStreak ? '🔥 ' + r.currentStreak : '—'}</td>
            </tr>`).join('')}
        </tbody>
      </table>` : ''}`;
}

// Leech list: each chronically-failed card with its lapse count, linking to the
// source (reuses the graph's [data-node-item] click-through). Worst first.
function leechPanelHTML(leeches, items, lang) {
  const titleOf = (itemId) => {
    const it = (items || []).find((i) => i.id === itemId);
    return it ? shortLabel(it) : itemId;
  };
  const rows = leeches.slice(0, 12).map((c) => {
    const front = stripCloze(c.front);
    const snippet = front.length > 90 ? front.slice(0, 90) + '…' : front;
    return `
      <li class="leech-row" data-node-item="${escapeHTML(c.itemId)}" role="button" tabindex="0">
        <span class="leech-count" title="${c.lapses} lapses">✗${c.lapses}</span>
        <span class="leech-front">${escapeHTML(snippet)}</span>
        <span class="leech-source">${escapeHTML(titleOf(c.itemId))}</span>
      </li>`;
  }).join('');
  return `
    <p class="muted dashboard-graph-help">These cards keep lapsing. Per Wozniak's rules, the fix is usually to <strong>reformulate, not re-drill</strong>: split into atomic facts, avoid sets/enumerations, add a memorable cue. Click one to open its source.${leeches.length > 12 ? ` Showing the 12 worst of ${leeches.length}.` : ''}</p>
    <ul class="leech-list">${rows}</ul>`;
}

function workloadCurveSVG(advice, currentR, lang) {
  const W = 640, H = 200, M = { top: 16, right: 16, bottom: 30, left: 46 };
  const plotW = W - M.left - M.right, plotH = H - M.top - M.bottom;
  const pts = advice.points;
  const rMin = pts[0].retention, rMax = pts[pts.length - 1].retention;
  const yMax = Math.max(0.001, ...pts.map((p) => p.reviewsPerYear)) * 1.1;
  const xOf = (r) => M.left + ((r - rMin) / ((rMax - rMin) || 1)) * plotW;
  const yOf = (v) => M.top + plotH - (v / yMax) * plotH;
  const line = pts.map((p, i) => `${i === 0 ? 'M' : 'L'} ${xOf(p.retention).toFixed(1)} ${yOf(p.reviewsPerYear).toFixed(1)}`).join(' ');
  const area = `${line} L ${xOf(rMax).toFixed(1)} ${(M.top + plotH).toFixed(1)} L ${xOf(rMin).toFixed(1)} ${(M.top + plotH).toFixed(1)} Z`;
  const xticks = [0.70, 0.80, 0.90, 0.97].filter((r) => r >= rMin && r <= rMax).map((r) =>
    `<text x="${xOf(r).toFixed(1)}" y="${(M.top + plotH + 16).toFixed(1)}" text-anchor="middle" font-size="9" fill="var(--ink-mute)">${Math.round(r * 100)}%</text>`).join('');
  const vline = (r, color, label) => {
    if (r == null) return '';
    const x = xOf(Math.max(rMin, Math.min(rMax, r)));
    return `<line x1="${x.toFixed(1)}" y1="${M.top}" x2="${x.toFixed(1)}" y2="${(M.top + plotH).toFixed(1)}" stroke="${color}" stroke-width="1.5" stroke-dasharray="4 3" />
      <text x="${x.toFixed(1)}" y="${(M.top + 9).toFixed(1)}" text-anchor="middle" font-size="9" fill="${color}">${label}</text>`;
  };
  return `
    <svg viewBox="0 0 ${W} ${H}" width="100%" preserveAspectRatio="xMidYMid meet" class="viz-svg">
      <rect x="0" y="0" width="${W}" height="${H}" fill="var(--bg-elev-1)" />
      <path d="${area}" fill="var(--azul-soft)" opacity="0.5" />
      <path d="${line}" fill="none" stroke="var(--azul)" stroke-width="2" />
      ${vline(advice.recommended, 'var(--gold)', lang === 'id' ? 'sweet spot' : 'sweet spot')}
      ${vline(currentR, 'var(--rose)', lang === 'id' ? 'sekarang' : 'now')}
      ${xticks}
      <text x="${M.left}" y="${(M.top + 8).toFixed(1)}" font-size="9" fill="var(--ink-mute)">reviews/yr</text>
      <text x="${(M.left + plotW / 2).toFixed(1)}" y="${(H - 4).toFixed(1)}" text-anchor="middle" font-size="9" fill="var(--ink-mute)">${lang === 'id' ? 'target retention' : 'target retention'}</text>
    </svg>`;
}

// Read-only panel: the workload-vs-target-retention curve + the diminishing-
// returns "sweet spot" and what moving the target would cost.
function retentionPanelHTML(advice, currentR, lang) {
  const rec = advice.recommended, recPt = advice.recommendedPoint, cur = advice.currentPoint;
  const top = advice.points[advice.points.length - 1];
  const mult = cur && cur.reviewsPerYear > 0 ? (top.reviewsPerYear / cur.reviewsPerYear) : null;
  return `
    <p class="muted dashboard-graph-help">
      A model of one card's long-run review load under FSRS at each target retention (using your active weights). Workload always falls as you lower the target — but so does how much you remember — so the useful mark is the <strong>diminishing-returns knee</strong>: raising the target is cheap below it, steep above it.
      ${rec != null ? `Modelled sweet spot ≈ <strong>${Math.round(rec * 100)}%</strong> (≈ ${recPt.reviewsPerYear.toFixed(1)} reviews/yr per card).` : ''}
      ${cur ? ` Your current target is <strong>${Math.round(currentR * 100)}%</strong> (≈ ${cur.reviewsPerYear.toFixed(1)} reviews/yr).` : ''}
      ${mult && mult > 1.05 ? ` Pushing to ${Math.round(top.retention * 100)}% would cost about <strong>${mult.toFixed(1)}×</strong> as many reviews.` : ''}
    </p>
    ${workloadCurveSVG(advice, currentR, lang)}`;
}

// Read-only panel: per-card first-year cost ⇒ how many new cards/day each
// review-budget level sustains, with the row nearest the user's recent pace
// highlighted.
function newCardsPanelHTML(rec, currentR, avgPerDay, personalNew, lang) {
  const F = rec.firstYearReviews;
  const nearestBudget = avgPerDay != null
    ? rec.rows.reduce((a, b) => Math.abs(b.reviewsPerDay - avgPerDay) < Math.abs(a.reviewsPerDay - avgPerDay) ? b : a, rec.rows[0]).reviewsPerDay
    : null;
  const rows = rec.rows.map((r) => `
    <tr class="${r.reviewsPerDay === nearestBudget ? 'newcard-row-active' : ''}">
      <td>${r.reviewsPerDay}/day</td>
      <td>${r.newCardsPerDay}</td>
    </tr>`).join('');
  return `
    <p class="muted dashboard-graph-help">
      At a <strong>${Math.round(currentR * 100)}%</strong> target, one new card costs about <strong>${F}</strong> reviews in its first year. Since daily load settles near (new cards/day) × that cost, you can sustain roughly (budget ÷ ${F}) new cards a day.
      ${avgPerDay != null ? ` You've averaged about <strong>${avgPerDay}</strong> reviews/day lately — that supports introducing roughly <strong>${personalNew}</strong> new card${personalNew === 1 ? '' : 's'} a day.` : ' Start reviewing and this will personalise to your recent pace.'}
    </p>
    <table class="stats-domain-table newcard-table">
      <thead><tr><th>Review budget</th><th>New cards/day</th></tr></thead>
      <tbody>${rows}</tbody>
    </table>`;
}

function graphSVG(graph, lang) {
  const COL_W = 168, ROW_H = 58, NODE_W = 132, NODE_H = 34;
  const M = { top: 16, left: 16, right: 16, bottom: 16 };
  const W = M.left + graph.cols * COL_W + M.right;
  const H = M.top + graph.rows * ROW_H + M.bottom;
  const pos = new Map();
  for (const n of graph.nodes) {
    pos.set(n.id, { x: M.left + n.level * COL_W + 6, y: M.top + n.row * ROW_H });
  }
  const edgePaths = graph.edges.map((e) => {
    const a = pos.get(e.from), b = pos.get(e.to);
    if (!a || !b) return '';
    const x1 = a.x + NODE_W, y1 = a.y + NODE_H / 2;
    const x2 = b.x, y2 = b.y + NODE_H / 2;
    const mx = (x1 + x2) / 2;
    return `<path d="M ${x1} ${y1} C ${mx} ${y1}, ${mx} ${y2}, ${x2} ${y2}" fill="none" stroke="var(--line)" stroke-width="1.2" opacity="0.6" marker-end="url(#dash-arrow)" />`;
  }).join('');

  const nodeRects = graph.nodes.map((n) => {
    const p = pos.get(n.id);
    const fill = STATE_FILL[n.state] || 'var(--bg-elev-1)';
    const textFill = (n.state === 'mastered' || n.state === 'in-progress') ? 'var(--bg, #14110d)' : 'var(--ink)';
    const dash = n.state === 'locked' ? ' stroke-dasharray="3 2"' : '';
    const meta = n.total ? `${n.mastered}/${n.total}` : '';
    return `
      <g class="graph-node" data-node-item="${escapeHTML(n.id)}" style="cursor:pointer">
        <rect x="${p.x}" y="${p.y}" width="${NODE_W}" height="${NODE_H}" rx="6"
              fill="${fill}" stroke="var(--line)"${dash} />
        <text x="${p.x + 8}" y="${p.y + 15}" font-size="11" font-weight="600" fill="${textFill}">${escapeHTML(n.label)}</text>
        ${meta ? `<text x="${p.x + 8}" y="${p.y + 27}" font-size="9" fill="${textFill}" opacity="0.8">${meta}</text>` : ''}
      </g>`;
  }).join('');

  return `
    <svg viewBox="0 0 ${W} ${H}" width="100%" preserveAspectRatio="xMidYMin meet" class="viz-svg graph-svg">
      <defs>
        <marker id="dash-arrow" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 0 L 8 4 L 0 8 z" fill="var(--line)" opacity="0.7" />
        </marker>
      </defs>
      ${edgePaths}
      ${nodeRects}
    </svg>
  `;
}
