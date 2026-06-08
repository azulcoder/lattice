# Architecture

This document captures the architectural principles, patterns, and decisions that make Lattice scalable. Every future change should respect what's documented here — or explicitly note a deviation in the [CHANGELOG](../CHANGELOG.md).

## 1. System overview

Lattice is a **static-file multi-domain bilingual SRS** (spaced repetition system). No build step, no framework, no runtime server. Runs from any HTTP server (Python `http.server`, VS Code Live Server, etc.). State persists in browser localStorage.

```
~/Code/lattice/
├─ index.html                    # SPA shell
├─ styles.css                    # Sepia reader theme + dark chrome
├─ README.md                     # Comprehensive entry-point doc
├─ RESUME.md                     # Fast-adaptation guide for returning sessions
├─ CHANGELOG.md                  # Phase-by-phase change record
├─ STATUS.md                     # Most recent wake-up status (post-Phase-1.6)
├─ docs/
│  ├─ ARCHITECTURE.md            # This file
│  ├─ PHASES.md                  # Detailed per-phase records
│  └─ INDEX.md                   # Doc directory
├─ vendor/
│  ├─ katex.min.{js,css}         # Math rendering, bundled offline
│  └─ fonts/                     # 20 KaTeX woff2 fonts
├─ js/
│  ├─ util.js                    # Date helpers, hash, shuffle, cloze, escapeHTML
│  ├─ sm2.js                     # SM-2 algorithm (pure function)
│  ├─ domain.js                  # DOMAINS registry, loadDomainContent
│  ├─ storage.js                 # localStorage v3, schema migration
│  ├─ content.js                 # Item content loader + trusted markdown
│  ├─ viz.js                     # COMPONENTS registry + 3 interactive simulators
│  ├─ audio.js                   # Web Speech API single global player
│  ├─ self-test.js               # Self-test card render + confidence persistence
│  ├─ ai.js                      # AI client gating + 4 capability stubs
│  ├─ settings.js                # Settings modal view
│  ├─ review.js                  # SM-2 review session state machine
│  ├─ library.js                 # Phase grouping + item detail rendering
│  ├─ reference.js               # Glossary + notation views
│  └─ app.js                     # Router, view orchestrator, event delegation
├─ data/
│  ├─ shared/
│  │  ├─ ai-config.js            # Default settings shape + helpers
│  │  └─ learning-principles.js  # Cross-domain pedagogy (Phase 1+ stub)
│  └─ domains/
│     ├─ microstructure/
│     │  ├─ meta.js              # Domain identity + phases + systemTypes + aiCapabilities
│     │  ├─ items.js             # 14 items metadata
│     │  ├─ seed-cards.js        # 97 atomic SRS cards (7 items)
│     │  ├─ glossary.js          # 32 bilingual terms
│     │  ├─ notation.js          # 10 symbol comparisons (language-agnostic)
│     │  └─ content/
│     │     ├─ README.md         # Content schema authoring guide
│     │     ├─ hasbrouck-2007.js # Full bilingual content + Roll viz config
│     │     ├─ ohara-1995.js     # Full bilingual content
│     │     ├─ kyle-1985.js      # Full bilingual content
│     │     ├─ glosten-milgrom-1985.js  # Full bilingual content + GM viz config
│     │     ├─ cont-kukanov-stoikov-2014.js  # Full bilingual content (OFI)
│     │     ├─ easley-lopez-prado-vpin.js  # Full bilingual content (VPIN)
│     │     └─ stoikov-2008.js  # Full bilingual content (Avellaneda-Stoikov)
│     └─ geothermal/
│        ├─ meta.js              # 5 phases + 4 systemTypes + aiCapabilities
│        ├─ items.js             # 10 items metadata
│        ├─ seed-cards.js        # 12 draft Acuña SRS cards
│        └─ content/
│           ├─ README.md         # Geothermal authoring guide (ID tone calibration)
│           └─ acuna-2008.js     # Full bilingual content + Acuña viz config
├─ scripts/
│  ├─ README.md                  # Verification harness docs
│  ├─ verify-all.mjs             # Master runner (auto-discovers verify-*.mjs)
│  ├─ verify-acuna-prep.mjs      # 96 checks (Acuña solver)
│  ├─ verify-gm-sim.mjs          # 143 checks (GM Bayesian theory)
│  ├─ verify-roll-sim.mjs        # 30 checks (Roll statistical theory)
│  └─ verify-content-schema.mjs  # 1140 checks (all content modules)
└─ notes/
   └─ g1-dogfood-prep-2026-05-28.md  # Acuña dogfood prep artifact
```

## 2. Module dependency graph

Strictly acyclic. Tighter deps are at the bottom; looser deps depend on them.

```
                    util
                     ↑
                    sm2
                     ↑
                  domain
                     ↑
                 storage
                     ↑
   ┌─────────┬───────┴───────┬─────────┬────────┐
   ↓         ↓               ↓         ↓        ↓
  ai      content        review    library    reference
                              ↑       ↑          ↑
                              └───────┴──────────┘
                                      ↑
                                   settings
                                      ↑
                                     app
```

Data modules (`data/domains/<id>/*.js`) are leaves — imported dynamically via `domain.loadDomainContent(id)`, never statically by view code.

**Rule:** never introduce cycles. If you need cross-module references, prefer event delegation through `app.js` or thread the dependency via function arguments (deps pattern).

## 3. Core architectural patterns

### 3.1 Domain isolation by default

Each knowledge domain is its own graph. Within-domain integration is rich (cross-references, prereq chains, related concepts). Cross-domain integration is **opt-in only** via explicit user action — never automatic.

**Why:** prevents "everything connects to everything" fluff that pollutes scalable knowledge platforms while permitting deep within-domain integration where it adds value.

**Apply:**
- Content modules under `data/domains/<id>/content/<item-id>.js` only reference items within `<id>`
- Cross-domain links would require a new explicit affordance (deferred indefinitely)
- AI features ground in active domain context; cross-domain analogies require future explicit invocation, not auto-suggestion

### 3.2 Domain opt-in via meta.js declarations

Both `systemTypes` (categorical filter) and `aiCapabilities` (AI feature gating) follow the same pattern: domain declares its taxonomy/capabilities in its own `meta.js`. Code reads from `DOMAINS[id].xxx` and renders UI conditionally.

**Why:** no hard-coded `if (domain === 'geothermal')`. New domains are content-only changes; the same code paths handle arbitrary domain taxonomies.

**Examples:**
- `microstructure/meta.js`: no `systemTypes` declared → no filter UI shown
- `geothermal/meta.js`: declares `systemTypes: [DRY_STEAM, TWO_PHASE, LIQUID, UNIVERSAL]` → filter chips appear in `#context-bar`
- Both domains declare `aiCapabilities: {explainConcept, suggestNextItem, findRelatedConcepts, summarizeProgress}` → Ask AI buttons render with full gating logic

### 3.3 Forward-compat field defaults

Every consumer treats missing data as a sensible default, not an error.

**Examples:**
- Items without explicit `system_type` default to `UNIVERSAL` at filter time
- `state.settings` without specific keys merges from `defaultSettings()`
- Content sections without `body[lang]` fall back to `body.en` with notice
- Domains registered without items render empty Library gracefully

**Why:** schema evolution is safe. Adding a field tomorrow doesn't break records from yesterday.

### 3.4 Seed vs live separation

`data/domains/<id>/seed-cards.js` holds **immutable card templates**. Live SM-2 state (with EF, interval, repetitions, nextReview, lapses) lives in localStorage. On first load, seed is copied to live. Subsequent edits to seed-cards.js do not wipe live SM-2 progress — `storage.detectDrift()` compares `contentHash` and offers selective refresh.

**Why:** the user's review progress is sacred. Authoring iteration (refining card wording, adding cards) should never destroy weeks of spaced-repetition state.

### 3.5 Unscheduled cards default for post-launch seeds

When new cards appear in `seed-cards.js` after initial install, they enter localStorage with `nextReview: null` — visible in Library as "Unscheduled" with `[+ Add to queue]` button. They do NOT auto-enter today's review queue.

**Why:** preserves Wozniak's spaced-introduction principle across batch content additions. Adding 50 new cards shouldn't dump 50 reviews on the user tomorrow.

**Edge case:** the FIRST seed (when domain has zero cards) does set `nextReview: today` so initial Foundation cards enter the queue normally. Only subsequent additions are unscheduled.

### 3.6 Storage schema v4

```js
{
  schemaVersion: 4,
  activeDomain: 'microstructure',
  domains: {
    // each card carries SM-2 fields {ef, interval, repetitions, lapses, nextReview, …}
    // plus FSRS fields {stability, difficulty} (null until first FSRS review)
    microstructure: { cards: { id: {...} }, seededAt: '2026-05-24T...' },
    geothermal:     { cards: {},            seededAt: null }
  },
  settings: {
    ai: { enabled, apiKey, perDomain, model, maxRequestsPerMonth, usageThisMonth },
    appearance: { theme, language },
    ui: { authorCardOpenByItem: { 'hasbrouck-2007': true } },
    review: { scheduler: 'sm2', requestRetention: 0.9,    // 'sm2' | 'fsrs' (Phase S3)
              fsrsWeights: null, fsrsOptimizedAt: null }  // trained weights, null ⇒ defaults (Phase S5)
  },
  reviewLog: [ { cardId, ts, grade, elapsed } ]           // capped (5000) review history for FSRS training (Phase S5)
}
```

Storage key: `lattice-v3` (the localStorage *key* was kept stable across the v3→v4 schema bump).

`migrateV3ToV4()` is **additive only**: it bumps `schemaVersion`, backfills `settings.review`, and leaves every card untouched (FSRS state is created lazily on a card's first FSRS review). `load()` forward-migrates a stored v3 state rather than ever falling through to a wipe.

Legacy key `microstructure-hub:v1` is read on first load and migrated non-destructively via `migrateLegacyToV3()`. Legacy key is **never deleted** — retained as rollback safety net.

### 3.7 Per-field bilingual fallback

Content modules (`hasbrouck-2007.js`) and glossary entries use `{en, id}` objects per field. The `pickLang(field, lang)` helper returns `{text, fellBack}`.

- `lang === 'en'`: returns `field.en`, never falls back
- `lang === 'id'`: returns `field.id` if non-empty, else `field.en` with `fellBack: true`

Render code shows "ID belum tersedia — menampilkan English" notice above any field where `fellBack === true`. Notice is per-field, not page-level — a partially-translated content module can show ID in 5 sections and EN+notice in 3.

### 3.8 Trusted markdown for content

`renderTrustedMarkdown(text)` in `js/content.js` is used ONLY on statically-authored content modules. Allows HTML pass-through for `<details>/<summary>` collapsibles and any other tags. **Do NOT use this function on user input** — content is trusted because it's authored in JS source files committed to the repo.

Supported subset:
- `**bold**`, `*italic*`, `` `code` ``
- `[text](url)` external link, `[text](item:id)` inter-item navigation
- `$inline math$`, `$$block math$$` → KaTeX via post-pass `renderFormulasInContent(root, katex)`
- `- ` line start → bullet list
- `### Heading` (single line) → `<h4 class="item-content-subheading">`
- Blank line → paragraph break
- Pass-through `<details>`, `<summary>`, and other HTML tags

### 3.9 AI affordance click delegation

Single global `document.addEventListener('click')` in `bindAIAffordances()` catches all `[data-ai-action]` buttons. Each button declares `data-ai-action`, `data-ai-domain`, `data-ai-context`. The delegate looks up the capability function and calls `onAskClaude(capability, domainId, context)`.

**Why:** adding an Ask AI affordance to a new view location is a single HTML snippet — no JS wiring per view. Phase 1.4+ (visualizations) and future surfaces inherit this automatically.

### 3.10 Privacy-safe export

`exportJSON(state, extras)` keeps the `apiKey` out of every export. If `includeSettings` is true, the settings block is serialized with `stripSensitive()` applied, which sets `apiKey` to an empty string; if `includeSettings` is false, the settings block is omitted entirely (`delete exported.settings`). In neither path does the key leave the browser.

**Why:** the user can never accidentally export their API key. If they want to migrate browsers, they must manually copy from the Settings UI — explicit human action required for sensitive data movement.

## 4. Aesthetic system

### 4.1 Sepia reader theme (Phase 1.2.5B)

CSS variables at `:root` define the palette. Components reference variables — no hardcoded colors except specific accent rgba values in state badges and quality buttons.

**Palette:**
- Page background: `#f0e6c8` (warm cream paper)
- Raised surfaces (cards, modals): `#faf2dc` (lighter cream)
- Recessed insets (code, math, inputs): `#e6daba` (warmer cream)
- Warm dark text: `#2a2418` (not stark black, easier on eyes)
- Border subtle: `#c9bc97`; border-soft: `#ddd0aa`
- Azul (links, accent): `#2d5d9a` (deeper blue for cream contrast)
- Gold (section headings, brand): `#8a6422` (deeper for cream contrast)
- Green (mastered state): `#4d7a3a`
- Rose (warning, due state, q0-q2): `#a05050`

### 4.2 Chrome (nav) stays dark

Topbar (`.topbar`) uses separate dark palette via `--bg-chrome`, `--ink-chrome`, `--line-chrome`, `--bg-chrome-elev`. Provides hierarchy contrast — navigation vs content. Descendant overrides on `.topbar .X` selectors ensure `.brand-name`, `.tab`, `.ghost-btn`, `.domain-badge` etc. render in chrome palette while same selectors elsewhere render in sepia.

**Domain accent colors** stay inline on the domain badge icon (`#1a8fd6` microstructure, `#c47a3d` geothermal) — pop against dark chrome.

### 4.3 Typography

- Body serif: Fraunces (loaded via Google Fonts)
- UI sans: Inter
- Monospace: JetBrains Mono
- Content body paragraphs:
  - `text-align: justify`
  - `hyphens: auto` (+ `-webkit-hyphens: auto`)
  - `text-rendering: optimizeLegibility`
  - `font-feature-settings: 'kern' 1, 'liga' 1`
- Content area max-width: `80ch` desktop, `100%` below 900px breakpoint
- Section h3: gold serif italic, bottom border
- Subsection h4: italic serif, dotted underline, no gold accent
- Math blocks: warm cream tint, centered, padded

### 4.4 Component aesthetic decisions

- **Author card:** gold left-border (like quoted scholar's note), collapsed by default, persists per-item state
- **Annotation aside (item.notes):** gold left-border, repositioned below content (was prominent in Phase 1.1)
- **Practice collapsibles:** `<details>` elements with `<summary>` styled as small uppercase muted label; opened state shows divider above body
- **Quality buttons (Review):** 6 buttons in grid, gold hover for q3-q5, rose hover for q0-q2
- **State badges:** soft rgba tint backgrounds for new/learning/mastered/due; dashed border for unscheduled

## 5. Schedulers (SM-2 + optional FSRS-4.5)

The review scheduler is **pluggable** (Phase S3). `js/scheduler.js` is a thin facade that routes `schedule` / `cardState` / `isMastered` to one of two engines based on `settings.review.scheduler`:

- **`js/sm2.js`** — the default SM-2 algorithm (below). Card state: EF / interval / repetitions / lapses.
- **`js/fsrs.js`** — an optional, faithful **FSRS-4.5** scheduler (17 published default weights). Card state: *stability* S and *difficulty* D; the next interval is the number of days for predicted retrievability `R(t,S) = (1 + (19/81)·t/S)^(−0.5)` to fall to a target retention (default 90%). The 0–5 quality buttons map to FSRS grades 1–4 (0–2→Again, 3→Hard, 4→Good, 5→Easy). FSRS updates also maintain `repetitions`/`lapses` and leave the SM-2 fields intact, so switching engines in Settings is **reversible and non-destructive**. Verified in `scripts/verify-fsrs.mjs`.

  FSRS weights are **trainable** (Phase S5, `js/fsrs-optimize.js`): every review is appended to a capped `state.reviewLog`, and Settings → Optimize replays each card's history to minimise the log-loss of predicted retrievability against actual recall (coordinate descent over a weight subset). The fitted weights live in `settings.review.fsrsWeights` (null ⇒ published defaults) and thread through `scheduler.schedule`. Verified in `scripts/verify-fsrs-optimize.mjs`.

### 5.1 SM-2 algorithm

Located in `js/sm2.js`. Pure function `schedule(card, quality, today)`. Quality scale 0–5:

| q | Label | Action if q≥3 | Action if q<3 |
|---|---|---|---|
| 5 | Easy | EF += 0.10, advance interval | — |
| 4 | Good | EF unchanged, advance interval | — |
| 3 | Hard | EF -= 0.14, advance interval | — |
| 2 | Hard-wrong | — | reps=0, interval=1, lapses+=1, EF unchanged |
| 1 | Wrong | — | (same as q=2) |
| 0 | Blackout | — | (same as q=2) |

EF formula: `EF' = max(1.3, EF + (0.1 - (5-q)*(0.08 + (5-q)*0.02)))`

Interval progression (when q≥3): rep 1 → 1 day, rep 2 → 6 days, rep n≥3 → `round(prev_interval × EF')`

Mastery: `repetitions >= 3 && ef >= 2.0` (EF gate prevents barely-passing cards from being counted)

**Deviation from canonical SM-2 (deliberate):** on a lapse (q<3) Lattice resets
`repetitions`/interval but does **not** decrement EF — canonical SM-2 would apply
`EF' = EF + (0.1 - (5-q)(0.08+(5-q)·0.02))` on every grade, driving EF down on
failures. This is intentional (kept on owner review 2026-05-30): a chronically-
lapsing card here retains its EF and snaps back to long intervals once it passes,
rather than being ground down. Revisit if long-run pacing on hard cards feels off.

**Known-good behavior (verified):**
- q=5 from new: EF 2.5 → 2.6, interval 0 → 1, nextReview = tomorrow
- q=2 from new: EF unchanged at 2.5, reps stays 0, lapses = 1, interval = 1
- Three q=5 in a row: EF 2.8, interval ≈ 17 days, mastered

## 6. Verification discipline

Verification operates on two layers:

### 6.1 Ephemeral per-phase verification scripts

Each phase commit ships with a one-time verification script written to `/tmp/verify-<phase>.mjs`. The script:
- Uses Node ESM imports against project files
- Stubs `localStorage` with in-memory object where needed
- Asserts schema completeness, behavior correctness, regression safety
- Each check formatted as `[OK] label — detail` or `[FAIL] ...`
- Final summary: `All N checks pass.` or `M of N failed.`
- Script is deleted after verification passes (transient, not committed)
- Verification result summary lands in commit message

**Minimum checks per phase:** ≥10. Substantial phases ship 20–35. Phase 1.7 (Glosten-Milgrom) shipped 78 inline checks.

Note: as of 2026-05-28, some inline verification has been done via `node -e` (instead of writing to `/tmp/`). Either pattern works.

### 6.2 Persistent verification harnesses (in scripts/)

For solver/sim/content-schema verification that needs to remain re-runnable after the phase ships, harnesses live in `scripts/`. As of 2026-06-01, five harnesses cover **1445 total checks** across:

- `verify-acuna-prep.mjs` — 96 checks against Acuña solver from prep-file claims
- `verify-gm-sim.mjs` — 143 checks against GM Bayesian theory (closed-form posterior, quote, spread, martingale, convergence properties)
- `verify-roll-sim.mjs` — 30 checks against Roll statistical theory (Monte Carlo across many seeds)
- `verify-content-schema.mjs` — 1140 checks against canonical content schema (auto-discovers all `data/domains/*/content/*.js`)
- `verify-app-logic.mjs` — 36 checks: settings.ui persistence, stripSensitive, save() resilience, glossary bilingual shape + no dangling seeAlso, and seed-card integrity across domains

Master runner: `node scripts/verify-all.mjs` (~0.2s for full suite). CI-ready exit codes.

**Maintenance protocol:** when `js/viz.js` (solver or sim) changes, re-run the relevant harness. If failures appear, decide whether to:
1. Update solver to match harness expectations (if harness is correct), or
2. Update harness + prep file to match new solver (if change is intentional)

Either way, keep solver, prep file, and harness in sync. The harness is the source-of-truth for "what the simulator should do at default params."

Adding a new harness: write `scripts/verify-<name>.mjs` following existing patterns. Master runner auto-discovers — no manual registration needed.

Full docs: [scripts/README.md](../scripts/README.md).

## 7. Visualization framework

### 7.1 COMPONENTS registry pattern

`js/viz.js` exports `COMPONENTS` as a string-keyed object. Components register via `registerComponent(key, fn)`. Content modules reference components by string name in `section.visualization.component`.

```js
registerComponent('YourSimName', function YourSim(host, params, lang) {
  // host = {controlsRoot, canvasRoot, readoutRoot, params, lang, onReset}
  // params = mutable copy of defaultParams
  // lang = 'en' | 'id'
  // ...render controls, SVG, readout...
});
```

`renderVisualization(root, vizSpec, lang)` in `js/viz.js`:
1. Looks up `COMPONENTS[vizSpec.component]`
2. Creates container with title + description + controls/canvas/readout sub-roots + reset button
3. Calls the component function with host object

### 7.2 Simulator helper export pattern

Every registered simulator that contains non-trivial computation exports its pure helper functions for testability:

- `solveAcunaW(p_rg, p_f, C_WB, PI, skin)` — closed-form Acuña Eq 8 quadratic solution
- `gmAsk(pi, alpha, V_H, V_L)`, `gmBid(pi, alpha, V_H, V_L)`, `gmPosteriorOnBuy(pi, alpha)`, `gmPosteriorOnSell(pi, alpha)`, `simulateGM({alpha, V_H, V_L, pi0, trueState, nTrades, seed})` — GM Bayesian helpers
- `simulateRoll({s, rho, nSamples, seed, sigmaM})` — Roll simulator

**Pattern:** the heavy math lives in standalone functions outside the registered component closure. The component imports/calls these functions. Verification harnesses then test the standalone functions directly.

Benefits:
- Component code is just rendering glue
- Math is independently testable
- Same helpers usable in other contexts (Node scripts, future analytics)
- Forces explicit API design (function signatures are testable contracts)

### 7.3 Visualization config schema

Content modules embed visualizations via `section.visualization`:

```js
visualization: {
  id: 'my-sim',                    // DOM id for the container
  component: 'YourSimName',        // key into COMPONENTS registry
  title:       { en: '...', id: '...' },
  description: { en: '...', id: '...' },
  defaultParams: { /* component-specific */ },
  height: 480                      // px
}
```

The `verify-content-schema.mjs` harness validates:
- `visualization.id` is non-empty string
- `visualization.component` is registered in `COMPONENTS`
- `visualization.title` and `.description` are bilingual
- `visualization.defaultParams` is an object

### 7.4 SVG-only rendering

All visualizations use pure inline SVG — no Canvas, no D3, no Chart.js. Keeps the no-build-step + no-CDN principle intact.

Helpers:
- `makeRng(seed)` — Mulberry32 PRNG (seeded, deterministic, fast)
- `makeGaussian(rng)` — Box-Muller normal sampler from a Mulberry32 stream
- `lerp(value, fromMin, fromMax, toMin, toMax)` — linear interpolation with saturation

### 7.5 Sepia palette compliance for viz

All simulator components use CSS variables (`var(--bg-elev-1)`, `var(--line-soft)`, `var(--ink)`, etc.) so they automatically respect the sepia theme. Curve / line colors:
- Baseline / primary: `var(--gold)` (#8a6422 deeper for cream contrast)
- Secondary: `var(--azul)` (#2d5d9a, used for ask quotes in GM)
- Warning / wellbore problem: `#a05050` (rose, also used for sell quotes in GM, Scenario A in Acuña)
- Alert / formation problem: `#c47a3d` (geothermal accent, used for Scenario B in Acuña)

## 8. Audio + self-test infrastructure

### 8.1 Audio narration (`js/audio.js`)

Web Speech API single global player. State machine: `idle` → `playing(buttonRef)` → `paused(buttonRef)` → `idle`. Clicking a different button cancels the active utterance.

- `speak(text, lang, button)` — speak with voice matching lang preference
- `togglePause(button)` — pause or resume the button's utterance
- `stopAll()` — cancel everything, reset state (called on item switch / library back)
- `markdownToSpeech(text)` — strip markdown, replace block + inline math with "equation" placeholder, normalize bullets to period pauses
- `isAudioAvailable()` — checks `'speechSynthesis' in window`

Section ▶ buttons render only when `content.audio.enabled !== false` (default enabled). If audio is unavailable, buttons render disabled with title attribute explaining why.

Voice selection prefers exact match (`id-ID-*` for Indonesian), then language family (`id-*`), then system default.

### 8.2 Self-tests (`js/self-test.js`)

Self-test schema in content modules:

```js
selfTest: [
  {
    sectionId: 'intuition',
    question: { en: '...', id: '...' },
    prompt:   { en: 'Before continuing, try answering:', id: '...' },
    hint:     { en: '...', id: '...' },    // optional sub-collapsible
    answer:   { en: '...', id: '...' },
  },
  // ...
]
```

Render: `<details>` collapsible with 📝 emoji marker. Inside: question, optional hint sub-collapsible, optional textarea for user's attempt, reveal-answer button. After reveal: full answer + 3-button confidence row (🟢 Got it / 🟡 Mostly / 🔴 Need review).

State: confidence persisted per-item-per-section at `state.settings.ui.selfTestConfidence['<itemId>::<sectionId>'] = { value, ts }`. Badge in summary row shows the latest confidence label (`confidenceLabel(value, lang)`); the stored `ts` is retained but not currently displayed.

Binding: each mounted self-test card wires its own buttons via `bindSelfTestCard(mount, …)`, called once per mount in `library.js` — unlike the AI affordances, which use a single document-level click delegate.

## 9. Deferred decisions / known limitations

- **Light theme**: `state.settings.appearance.theme` field exists but theme dropdown removed from Settings UI. Sepia is the only active theme. Multi-theme infra deferred until user requests it.
- **AI real implementation**: Phase 0.3 stubbed. `js/ai.js` has `// FUTURE:` markers where real Anthropic API calls land. Zero outbound network as of Phase 1.7.
- **Mobile responsive**: max-width breakpoint at 900px adjusts content area to full-width. Other components not specifically tuned for mobile.
- **Multi-user / sync**: single learner, localStorage only. No cloud sync, no multi-device.
- **Anki export**: not implemented. JSON export only. Format adapter would land in a future phase.
- **Card editing UI**: edit `seed-cards.js` directly + reload. Content drift handled by `contentHash`.
- **Third language**: architecture supports it via `AVAILABLE_LANGUAGES` registry, but only EN + ID populated.
- **Notation tables not translated**: symbols are language-agnostic.
- **HTML invalid in markdown block math**: `<p><div class="latex-block">` nesting. Browser auto-handles, KaTeX renders correctly. Cosmetic cleanliness fix attempted (Phase 1.1) but Edit tool encoding issue prevented; non-blocking. Documented in PHASES.md.
- **Geothermal content beyond Acuña 2008**: Az's domain expertise (6 years Star Energy Geothermal Darajat). Not authored autonomously. See feedback memory `feedback_pacing_validation_over_velocity.md`.
- **Real ν_rg in AcunaDeliverabilitySim**: simulator uses illustrative ν_rg=5.0 for educational signature visibility. Real value from steam tables would barely affect PI slider behavior. A future "research mode" toggle (D6 in dogfood prep file) could expose paper-realistic ν_rg as an optional mode.
- **Acuña diagnostic-signature crossover**: Per the G1.2 patch + Acuña Section A7 finding, Scenario A vs B relative-drop crossover happens at P_f ≈ 27 bara (very near P_rg). In operational P_f range (8-18 bara), wellbore-problem effects dominate at both ends. Hedged in worked-example prose.
