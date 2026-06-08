# Lattice

A static-file multi-domain bilingual spaced-repetition learning platform, optimized using Piotr Wozniak's SuperMemo principles. No build step, no framework, runs from any HTTP server. Currently covers **market microstructure** and **geothermal reservoir engineering** domains, with bilingual content in English + Indonesian.

> **Returning to this project?** Read [RESUME.md](RESUME.md) first — 5-minute orientation that tells you exactly where you left off and what's next.

---

## Table of contents

- [What this is](#what-this-is)
- [Current state](#current-state)
- [Quick start](#quick-start)
- [Daily use](#daily-use)
- [Domains](#domains)
- [Content modules](#content-modules)
- [Interactive simulators](#interactive-simulators)
- [Verification harnesses](#verification-harnesses)
- [Keyboard shortcuts](#keyboard-shortcuts)
- [Architecture](#architecture)
- [File structure](#file-structure)
- [Persistence + import/export](#persistence--importexport)
- [Bilingual rendering](#bilingual-rendering)
- [Audio narration](#audio-narration)
- [Self-tests](#self-tests)
- [AI features](#ai-features)
- [Adding content](#adding-content)
- [Development workflow](#development-workflow)
- [Documentation map](#documentation-map)

---

## What this is

Not a checklist. Not a notes tracker. An **SRS** (spaced repetition system) with:

- **Pluggable spaced-repetition scheduler** — SM-2 by default, with an optional **FSRS-4.5** engine (toggle in Settings → Review scheduler). Each atomic fact is a card; SM-2 tracks EF / interval / repetitions, FSRS tracks stability / difficulty. Both keep the SM-2 fields, so switching is reversible and non-destructive. FSRS weights can be **trained on your own review history** (Settings → Optimize) — a log-loss optimiser fits the scheduler to your actual recall
- **Multi-domain architecture** — domains are isolated by default with opt-in declarations (system types, AI capabilities); an optional **combined review** mode (Settings → Review) mixes due cards from *every* domain into one queue, each card badged with its source + domain (still scheduled/stored per-domain)
- **Bilingual EN + ID** with per-field fallback (a partially-translated item shows some sections in ID, others in EN)
- **Rich content modules** for canonical references — 8 canonical sections (motivation, intuition, formalization, worked-example, applications, practice, connections, sources) per item, plus author block
- **Interactive simulators** embedded in content sections (Roll spread, Acuña deliverability, Glosten-Milgrom Bayesian, Kyle λ price impact, Almgren-Chriss efficient frontier + execution animation, Avellaneda-Stoikov quotes, Bouchaud √-impact + propagator transient-impact, Cont-Kukanov-Stoikov OFI regression + deep multi-level OFI, VPIN toxicity, O'Hara order-book ladder; lumped-parameter reservoir tank — geothermal; dealer gamma-flip / hedging + volume profile + SVI & SSVI vol-surface + perp funding + expectancy/Kelly survival + options Greeks + backtest overfitting + market-profile TPO + variance-risk-premium + order-flow CVD + portfolio-of-edges + stat-arb pairs — trading)
- **Knowledge map + dashboard** (Map tab) — the prerequisite DAG rendered as a curriculum graph (nodes coloured by your progress: mastered / in-progress / available / locked), plus progress tiles and per-phase bars, with an engine-aware headline stat (avg retention under FSRS, avg EF under SM-2), a 21-day review-workload forecast, an FSRS retention-decay projection, a 16-week review-activity heatmap, a **spaced-repetition what-if projection** (interval growth under a chosen rating pattern, SM-2 vs FSRS side by side), and a **review stats + streak** panel (current/longest daily streak, rolling totals, grade mix, success rate, plus a weekly **recall-trend** sparkline over the last 12 weeks a **per-domain breakdown** table, and a **study-timing** heatmap (which weekdays/hours you review + recall best))
- **Library card filter** — multi-select Status (due / learning / mastered / new / unscheduled) × Type chips that narrow the source list to items holding matching cards (OR within a facet, AND across)
- **Save PNG** on every simulator — a one-click export rasterizes the live SVG (CSS variables inlined, 2× supersampled) to a PNG for slides/notes (`js/viz-export.js`)
- **Scheduler backtest** (Map tab) — replays your *own* review history through both engines and scores predicted-vs-actual recall (log-loss / Brier / accuracy) to show whether FSRS or SM-2 would have called your recall better (`js/backtest.js`)
- **Leech detector** (Map tab) — surfaces chronically-failed cards (lapses ≥ threshold), worst first, with a reformulate-don't-re-drill nudge (Wozniak's rules); click one to open its source (`findLeeches` in `js/dashboard.js`)
- **Target-retention workload curve** (Map tab) — models one card's long-run FSRS review load at every target retention and marks the **diminishing-returns knee** (≈ where raising the target stops being cheap), so "how hard should I study?" gets a data-backed answer rather than a guess (`js/retention.js`)
- **New-cards-per-day recommender** (Map tab) — turns each card's modelled first-year review cost into a "how many new cards can I add?" table per review budget, personalised to your recent pace (`recommendNewCards` in `js/retention.js`)
- **Global card search** (`/` or the 🔍 button) — a ranked, cross-domain search over every card's front/back; ↑/↓ to move, Enter to open, click to jump straight to its source in the Library (`js/card-search.js`)
- **Print / save-as-PDF a module** — a Print button on any source detail strips the chrome, recolours to ink-on-white, expands collapsed sections, and prints the full module (a clean PDF named after the source) via `@media print` (`js/print.js`)
- **Audio narration** via Web Speech API
- **Self-tests** as collapsible cards before reveal-answer
- **Sepia + dark reader themes** (toggle in Settings → Appearance, applied with no flash-of-unstyled) with justified typography, dark chrome navigation, KaTeX math rendering
- **AI-assist infrastructure stub** (settings + gating + 3 Ask AI affordances; zero outbound API calls in current state)
- **Installable PWA** — web app manifest + a service worker (stale-while-revalidate) for full offline use after first load, a custom install prompt and an update-available toast (`js/pwa.js`), plus a responsive layout for mobile

Built bottom-up across ~17 phase commits + 4 infrastructure runs. Each phase ships with a verification script that runs locally before commit.

---

## Current state

**Content (43 rich modules + 16 drafts + catalog of 59 items across 3 domains — 19 microstructure + 17 geothermal + 23 trading; all 59 catalog items now have content modules — microstructure all rich; geothermal Acuña rich + 16 audited drafts; trading = 23 attributed practitioner/quant modules with cards):**

**20 rich modules** (full bilingual content, all 8 sections, ≥13 SRS cards each):

| Module | Domain | Track | Simulator |
|---|---|---|---|
| Hasbrouck 2007 | microstructure | empirical methodology | Roll spread |
| O'Hara 1995 | microstructure | theory synthesis | — |
| Kyle 1985 | microstructure | strategic theory | Kyle λ |
| Glosten-Milgrom 1985 | microstructure | sequential-trade theory | GM Bayesian |
| Cont-Kukanov-Stoikov 2014 | microstructure | empirical (OFI) | OFI regression + deep OFI |
| Easley-López de Prado-O'Hara 2012 | microstructure | empirical (VPIN) | VPIN toxicity |
| Avellaneda-Stoikov 2008 | microstructure | theory (market making) | AS quotes |
| Almgren-Chriss 2000 | microstructure | theory (execution) | Almgren frontier + execution play-through |
| Makarov-Schoar 2020 | microstructure | empirical (crypto arb) | — |
| Aquilina-Budish-O'Neill 2022 | microstructure | empirical (HFT latency) | — |
| Cartea-Jaimungal-Penalva 2015 | microstructure | textbook (stochastic control) | — |
| Guéant 2016 | microstructure | textbook (liquidity) | — |
| Kissell 2013 | microstructure | textbook (TCA / I-Star) | — |
| Bouchaud-Bonart-Donier-Gould 2018 | microstructure | textbook (econophysics) | √-impact + propagator |
| Budish-Cramton-Shim 2015 | microstructure | theory (market design) | — |
| Hasbrouck 1995 | microstructure | empirical (price discovery) | — |
| Brunnermeier-Pedersen 2009 | microstructure | theory (funding liquidity) | — |
| Amihud 2002 | microstructure | empirical (illiquidity premium) | — |
| Menkveld 2013 | microstructure | empirical (HFT market making) | — |
| Acuña 2008 | geothermal | production (dry steam) | Acuña deliverability |

Plus **10 geothermal DRAFT modules** (O'Sullivan, Cumming, Stober-Bucher, Grant-Bixley, DiPippo, Björnsson-Bodvarsson, Henley-Truesdell-Barton, Arnórsson, Tester-MIT, Horne 1995 well-testing/PTA) — schema-valid, every domain claim `⟦TODO-Az⟧`-flagged, awaiting Az sign-off. See [RESUME.md](RESUME.md) for the full annotated list.

**Twenty-seven persistent simulators** in `js/viz.js`, each with full export of helper functions for testability:
- `solveAcunaW` (Acuña deliverability — paper-exact Eq 6 + Eq 8 closed-form)
- `gmAsk`, `gmBid`, `gmPosteriorOnBuy`, `gmPosteriorOnSell`, `simulateGM` (Glosten-Milgrom Bayesian)
- `simulateRoll` (Roll 1984 spread estimator)
- `kyleEquilibrium`, `simulateKyle` (Kyle 1985 λ price impact — linear equilibrium)
- `almgrenKappa`, `almgrenTrajectory`, `almgrenCost`, `almgrenFrontier`, `executionStep` (Almgren-Chriss 2000 efficient frontier + execution play-through)
- `asQuotes` (Avellaneda-Stoikov 2008 reservation price + optimal spread)
- `sqrtImpact` (Bouchaud et al. 2018 square-root law of market impact)
- `olsFit`, `simulateOFI`, `deepOFI` (Cont-Kukanov-Stoikov 2014 OFI → ΔP regression; deep multi-level OFI)
- `normalCDF`, `vpinFromZ`, `simulateVPIN` (Easley-López de Prado-O'Hara 2012 VPIN toxicity)
- `propagatorImpact` (Bouchaud et al. 2018 transient-impact metaorder path — rise/peak/relaxation)
- `makeBook`, `bestAsk`, `bestBid`, `bookMid`, `bookSpread`, `marketBuy`, `marketSell` (O'Hara 1995 limit-order-book ladder — depth → slippage / price impact)

**Verification suite** in `scripts/`:
- 48 harnesses, 11297 total checks, runs in ~0.2s
- Master runner: `node scripts/verify-all.mjs`
- CI-ready exit codes

**Documentation:**
- This README (entry point)
- [RESUME.md](RESUME.md) — fast-adaptation guide for returning sessions
- [CHANGELOG.md](CHANGELOG.md) — phase-by-phase change record
- [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md) — patterns + principles
- [docs/PHASES.md](docs/PHASES.md) — detailed per-phase records
- [docs/INDEX.md](docs/INDEX.md) — directory of all docs
- 3 README files in subdirectories (content authoring guides + scripts)

**Tested across:** macOS Safari, Chrome, Firefox. Desktop-first, but now responsive + installable as an offline PWA, so it's usable on mobile too.

---

## Quick start

```bash
cd ~/Code/lattice
python3 -m http.server 8765
# open http://127.0.0.1:8765
```

Or use the VS Code "Live Server" extension.

**First-load behavior:**
- Seeds the microstructure domain with 188 cards (all 14 modules) and the geothermal domain with 12 draft Acuña cards into your queue today
- Reads any legacy `microstructure-hub:v1` localStorage and migrates non-destructively to `lattice-v3`
- New cards added via seed edits after install land with `nextReview: null` (visible in Library as "Unscheduled") — manually add via `[+ Add to queue]` to preserve Wozniak's spaced-introduction

**Cache-busting note:** ES modules are aggressively cached by browsers. If you edit `js/viz.js` and the browser doesn't pick it up, open DevTools → Network tab → check "Disable cache" → refresh.

---

## Daily use

The home screen is the **Review tab**. It shows:
- Cards due today, shuffled
- Header counts: Due / Mastered / EF average
- For each card: front → Space to reveal → quality buttons 0-5

Quality scale:
- `0` Blackout · `1` Wrong · `2` Hard-wrong · `3` Hard · `4` Good · `5` Easy

After the queue is empty: "Done. Next review in N hours." with breakdown by item.

Switch tabs anytime: `R` Review, `L` Library, `G` Reference, `M` Map. `/` searches all cards. `,` opens Settings. `D` toggles domain. `?` shows the full keyboard-shortcut overlay.

---

## Domains

Each domain is isolated by default — content + cards + glossary + notation are domain-scoped. Cross-domain links are opt-in via explicit declarations.

### Microstructure

Market microstructure foundation. 14 items spanning empirical methodology, theoretical synthesis, strategic theory, and practical execution. All 14 items now have rich bilingual content + 188 seed cards + 32-entry glossary + 10-row notation comparison table.

### Geothermal

Reservoir engineering, well & production, geochemistry, frontier. 10 items across 5 phases (earth-sciences, reservoir, production, geochemistry, frontier). System-type filter UI (Dry Steam / Two-Phase / Liquid / Universal) declared via `meta.js`. Acuña 2008 (dry steam deliverability) has rich content; the other 9 now exist as `⟦TODO-Az⟧`-flagged DRAFT modules (each with a research-prep factsheet) awaiting Az's domain sign-off. Geothermal seed cards are deferred until that sign-off (only 12 draft Acuña cards exist).

Switch via topbar dropdown or `D` shortcut.

---

## Content modules

Each rich content module follows the same 8-section canonical schema:

| Section | Purpose |
|---|---|
| motivation | Why this matters — operational stakes + the problem the paper solves |
| intuition | Conceptual framing in plain language, with key visual / metaphorical anchors |
| formalization | Full mathematical derivation with boxed results |
| worked-example | Numerical walkthrough + interactive simulator (where applicable) |
| applications | Three personas (advanced researcher / quant practitioner / operations team) |
| practice | 4 problems with worked answers in `<details>` blocks |
| connections | Prereqs, builds-toward, related items, theoretical lineage |
| sources | Full citation list |

Plus an **author block** with 8 prose fields (fullName, affiliation, tagline, bio, focus, intellectualLineage, keyCollaborators, legacy) + ≥4 keyWorks.

Plus **4 self-tests** (one per major section) — collapsible cards with question / optional hint / reveal-answer + 3 confidence buttons.

Plus **audio narration toggle** per section.

All text bilingual EN + ID. Per-field fallback: missing ID renders EN with a notice.

See [data/domains/microstructure/content/README.md](data/domains/microstructure/content/README.md) for full schema authoring guide, [data/domains/geothermal/content/README.md](data/domains/geothermal/content/README.md) for geothermal-specific tone calibration.

---

## Interactive simulators

Twenty-seven viz components registered in `js/viz.js` `COMPONENTS` registry. Each is embedded in a content module section (worked-example, intuition, formalization, or applications) via a `visualization` config object. The three subsections below document the earliest three in detail; the full set is listed under **Architecture** above.

### Roll spread simulator (RollSpreadSim)

Embedded in Hasbrouck (2007). Controls: spread `s`, trade-direction autocorrelation `ρ`, sample size `n`. Generates AR(1)-correlated trade directions, computes Roll estimator from sample lag-1 autocovariance, plots Δp time series + bar chart of Roll estimate vs true s with bias annotation.

Visual proof of Practice problem 3: at ρ=0 → Roll matches s; at ρ=0.4 → Roll underestimates by roughly 25–30% (about −32% at the default seed; ~−24% Monte Carlo mean across seeds).

### Acuña deliverability simulator (AcunaDeliverabilitySim)

Embedded in Acuña (2008). Five controls: P_rg (gravity-corrected reservoir pressure), C_WB (wellbore coefficient), PI (productivity index), skin S, diagnostic-mode toggle. Solves Acuña Eq 8 closed-form quadratic at 60 sample points; plots W-vs-P_f curve. Diagnostic mode overlays Scenario A (C_WB × 0.5, wellbore problem) + Scenario B (PI × 0.6, formation problem) with legend showing AOF for each.

Solver implements paper-exact Eq 6 for skin: `PI_eff = PI · (ln(r_e/r_w) - 0.5) / (ln(r_e/r_w) - 0.5 + S)` with S clamped to >= -5.9. ν_rg = 5.0 illustrative constant (documented in code + content).

### Glosten-Milgrom Bayesian simulator (GlostenMilgromBayesianSim)

Embedded in Glosten-Milgrom (1985). Seven controls: α (informed fraction), V_H, V_L, π_0, true state (H or L), nTrades, regenerate. Two-panel SVG: top shows posterior π_t evolution with truth line; bottom shows ask/mid/bid traces with trade-direction triangle markers.

Demonstrates the GM convergence theorem: π_t → 1 (true=H) or → 0 (true=L) almost surely, spread shrinks to 0 as information accumulates.

---

## Verification harnesses

Four scripts in `scripts/` that re-verify the solver/content state. Useful for catching regression after edits.

```bash
# Run all
node scripts/verify-all.mjs              # verbose
node scripts/verify-all.mjs --quiet      # CI-friendly summary

# Individual
node scripts/verify-acuna-prep.mjs       # 96 checks (Acuña solver)
node scripts/verify-gm-sim.mjs           # 143 checks (GM Bayesian theory)
node scripts/verify-roll-sim.mjs         # 30 checks (Roll statistical theory)
node scripts/verify-content-schema.mjs   # 4414 checks (59 content modules: 43 final + 16 drafts)
node scripts/verify-reference.mjs        # 24 checks (glossary + notation, all domains; KaTeX-parses every symbol)

# Filter to one section
node scripts/verify-acuna-prep.mjs --section A5
node scripts/verify-gm-sim.mjs --section B8
```

**Total: 11297 checks across 48 harnesses, ~0.2s.**

Exit code 0 iff all pass. Ready for CI / pre-commit hooks. Auto-extends as new content/sims are added.

Full docs: [scripts/README.md](scripts/README.md).

---

## Keyboard shortcuts

| Key | Action |
|---|---|
| `R` | Review tab |
| `L` | Library tab |
| `G` | Reference tab (glossary + notation) |
| `M` | Map tab (knowledge graph + dashboard) |
| `D` | Toggle domain switcher |
| `/` | Search all cards (cross-domain) |
| `,` | Open Settings modal |
| `?` | Show the keyboard-shortcut overlay |
| `Space` | Reveal answer (during review) |
| `0`–`5` | Rate card quality after reveal |
| `Esc` | Close modal / overlay / domain switcher |

These mirror the single-source registry in `js/shortcuts.js` (the same data the in-app `?` overlay renders); `scripts/verify-shortcuts.mjs` checks every advertised key is actually handled in `js/app.js`.

---

## Architecture

Static-file SPA. ES modules + KaTeX bundled offline. No build, no framework, no CDN, no runtime server (just any HTTP server to serve files).

**Strict acyclic module dependency graph:**

```
util ← sm2 ← domain ← storage ← review / library / reference / content / ai / settings ← app
```

Data modules (`data/domains/*/...`) are leaves imported by `storage` and `content`.

**Critical separations:**

- **Seed vs live:** seed data (in `data/domains/*/seed-cards.js`) is immutable templates. Live SM-2 state lives in localStorage under `lattice-v3`. Drift detected via `contentHash`.
- **Domain isolation:** within-domain cross-references are rich; cross-domain is opt-in only via explicit `meta.js` declarations.
- **Per-field bilingual fallback:** missing ID renders EN + notice. Per-field, not per-page.
- **Privacy:** API key always zeroed in export regardless of `includeSettings`.

See [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md) for full reference.

---

## File structure

```
~/Code/lattice/
├─ index.html                       # SPA shell, KaTeX include, module entry, manifest + SW registration
├─ manifest.json                    # PWA web app manifest (installable)
├─ sw.js                            # service worker — precache shell + stale-while-revalidate (offline)
├─ icon.svg                         # app/maskable icon (lattice mark)
├─ styles.css                       # Sepia theme + dark chrome + responsive (max-width 720/420)
├─ README.md                        # This file
├─ RESUME.md                        # Fast-adaptation guide for returning sessions
├─ CHANGELOG.md                     # Phase-by-phase change record
├─ STATUS.md                        # Most recent wake-up status (post-Phase-1.6)
├─ docs/
│  ├─ ARCHITECTURE.md               # Patterns + principles
│  ├─ PHASES.md                     # Per-phase detailed records
│  └─ INDEX.md                      # Doc directory
├─ vendor/
│  ├─ katex.min.{js,css}            # Math rendering, offline
│  └─ fonts/                        # 20 KaTeX woff2 fonts
├─ js/
│  ├─ util.js                       # Date, hash, shuffle, cloze, escapeHTML
│  ├─ sm2.js                        # SM-2 algorithm (pure function)
│  ├─ fsrs.js                       # FSRS-4.5 scheduler (pure functions) — optional engine
│  ├─ fsrs-optimize.js              # FSRS weight training (log-loss optimiser over review history)
│  ├─ scheduler.js                  # facade: routes to sm2/fsrs per settings
│  ├─ domain.js                     # DOMAINS registry, loadDomainContent
│  ├─ storage.js                    # localStorage (key lattice-v3, schemaVersion 4), v3→v4 + v1 migration
│  ├─ content.js                    # Item content loader + trusted markdown
│  ├─ viz.js                        # COMPONENTS registry + 27 simulators
│  ├─ viz-export.js                 # SVG→PNG export for any simulator (Save PNG button)
│  ├─ dashboard.js                  # Map view: prereq-DAG graph + progress/retention tiles + forecast + SR what-if + backtest
│  ├─ backtest.js                   # Scheduler backtest: replay review log under FSRS vs SM-2, score recall
│  ├─ retention.js                  # Target-retention workload curve + diminishing-returns knee
│  ├─ card-search.js                # Global cross-domain card search (overlay + ranked results)
│  ├─ print.js                      # Print/PDF a module: PDF title + print-only header (see @media print)
│  ├─ pwa.js                        # PWA: SW registration + install prompt + update toast
│  ├─ audio.js                      # Web Speech API single global player
│  ├─ shortcuts.js                  # keyboard-shortcut registry + ? help overlay
│  ├─ self-test.js                  # Self-test card render + confidence persistence
│  ├─ ai.js                         # AI client gating + 4 capability stubs
│  ├─ settings.js                   # Settings modal view
│  ├─ review.js                     # SM-2 review session state machine
│  ├─ library.js                    # Phase grouping + item detail
│  ├─ reference.js                  # Glossary + notation views
│  └─ app.js                        # Router + view orchestrator
├─ data/
│  ├─ shared/
│  │  ├─ ai-config.js               # Default settings + helpers
│  │  └─ learning-principles.js     # Cross-domain pedagogy stub
│  └─ domains/
│     ├─ microstructure/
│     │  ├─ meta.js                 # Domain identity + phases + systemTypes + aiCapabilities
│     │  ├─ items.js                # 14 items metadata
│     │  ├─ seed-cards.js           # 305 atomic SRS cards
│     │  ├─ glossary.js             # 58 bilingual terms (6 categories)
│     │  ├─ notation.js             # 12 symbol comparisons
│     │  └─ content/
│     │     ├─ README.md            # Authoring guide
│     │     ├─ hasbrouck-2007.js    # Full bilingual content + Roll viz
│     │     ├─ ohara-1995.js        # Full bilingual content
│     │     ├─ kyle-1985.js         # Full bilingual content
│     │     └─ glosten-milgrom-1985.js  # Full bilingual content + GM viz
│     └─ geothermal/
│        ├─ meta.js                 # 5 phases + 4 systemTypes + aiCapabilities
│        ├─ items.js                # 10 items metadata
│        └─ content/
│           ├─ README.md            # Geothermal authoring guide (ID tone calibration)
│           └─ acuna-2008.js        # Full bilingual content + Acuña viz
├─ scripts/
│  ├─ README.md                     # Verification harness docs
│  ├─ verify-all.mjs                # Master runner
│  ├─ verify-acuna-prep.mjs         # 96 checks (Acuña solver)
│  ├─ verify-gm-sim.mjs             # 143 checks (GM Bayesian theory)
│  ├─ verify-roll-sim.mjs           # 30 checks (Roll statistical theory)
│  └─ verify-content-schema.mjs     # 1781 checks (all content modules)
└─ notes/
   └─ g1-dogfood-prep-2026-05-28.md # Acuña dogfood prep artifact
```

---

## Persistence + import/export

- **localStorage key:** `lattice-v3`
- **Legacy key:** `microstructure-hub:v1` (read on first load, migrated non-destructively, retained as rollback safety net)
- **Export:** click **Export** in topbar or Settings → Data. Yields a JSON file
- **Export privacy:** API key always zeroed (regardless of `includeSettings` flag)
- **Import:** accepts v4, v3, and legacy v1 exports (v3/v1 forward-migrated non-destructively on import)
- **Review-log CSV:** Settings → Data → *Export review log (CSV)* dumps the captured review history (`cardId, date, grade, elapsed`) for external analysis or FSRS tooling
- **Schema migration:** `schemaVersion` is now **4** (the localStorage *key* stays `lattice-v3`). A stored v3 state is forward-migrated by `migrateV3ToV4` — additive only: it bumps the version and backfills `settings.review`; **no card data is touched** (FSRS state is created lazily on a card's first FSRS review)

**Schema (v4) structure:**

```js
{
  schemaVersion: 4,
  activeDomain: 'microstructure',
  domains: {
    // cards is an OBJECT MAP keyed by card.id (not an array)
    // each card: SM-2 fields {ef, interval, repetitions, lapses, nextReview, ...}
    //          + FSRS fields {stability, difficulty} (null until first FSRS review)
    microstructure: { cards: { [cardId]: {...} }, seededAt: '2026-...' },
    geothermal:     { cards: { [cardId]: {...} }, seededAt: '2026-...' }
  },
  settings: {
    ai: { enabled: false, apiKey: '', perDomain: {...}, model: 'claude-sonnet-4-6',
          maxRequestsPerMonth: 200, usageThisMonth: { requests: 0, tokens: 0, monthKey: '' } },
    appearance: { language: 'en', theme: 'dark' },   // themes: 'dark' | 'light' (sepia is CSS, not a setting value)
    ui: { selfTestConfidence: {...}, authorCardOpenByItem: {...} },
    review: { scheduler: 'sm2', requestRetention: 0.9 }   // 'sm2' | 'fsrs'
  }
}
```

---

## Bilingual rendering

Every translatable field is `{en: '...', id: '...'}`. The `pickLang(field, lang)` helper returns `{text, fellBack}`. If `field[lang]` is missing or empty, returns `field.en` with `fellBack: true` — UI renders a notice "ID belum tersedia — menampilkan English" above the section.

Per-field fallback (not per-page) — a partially-translated item can show some sections in ID and others in EN.

**Code-switching pattern for ID:**
- Technical terms stay English (`wellbore`, `deliverability`, `posterior`, `informed trader`, `bid-ask spread`, etc.)
- Natural Indonesian for connectives, narrative, prose
- Casual register (`kalau`, `tapi`, `pake`, `bisa`) not formal (`jika`, `namun`, `menggunakan`, `dapat`)

See [data/domains/geothermal/content/README.md](data/domains/geothermal/content/README.md) for geothermal-specific tone guide (Indonesian reservoir engineering community code-switches heavily English).

---

## Audio narration

Each section heading has a ▶ button when `content.audio.enabled !== false`. Click → browser TTS reads the section. Implementation in `js/audio.js`:

- Single global player (clicking another button cancels the active utterance)
- Voice selection prefers `id-*` or `en-*` matching current language
- Math (block + inline) replaced with "equation" placeholder when read aloud
- Markdown stripped to plain prose; bullets → period pauses
- Stops automatically on item switch / Library back

Quality varies by OS and installed voices. Indonesian TTS availability is uneven across platforms.

---

## Self-tests

Each content module has up to 4 self-tests, one per major section. Render as collapsible "📝 Try answering before continuing" cards via `js/self-test.js`.

Per self-test:
- Question (bilingual)
- Optional hint (sub-collapsible)
- Reveal-answer button + bilingual answer
- 3 confidence buttons: 🟢 Got it / 🟡 Mostly / 🔴 Need review
- Confidence persisted per-item-per-section to localStorage at `state.settings.ui.selfTestConfidence`

The badge in the summary row updates and persists across reloads.

Self-test schema (in content modules):

```js
selfTest: [
  {
    sectionId: 'intuition',
    question: { en: '...', id: '...' },
    prompt:   { en: 'Before continuing, try answering:', id: 'Sebelum lanjut, coba jawab:' },
    answer:   { en: '...', id: '...' },
    hint:     { en: '...', id: '...' },  // optional
  },
  // ...
]
```

---

## AI features

Phase 0.3 stubbed the infrastructure but ships zero outbound API calls. Real implementation deferred to a future phase.

- Settings modal (⚙ or `,`) holds master toggle, API key (password-masked, localStorage-only), per-domain enable, model selection, monthly budget placeholder
- 3 Ask AI affordances: Library item detail, Review card source row, Reference glossary detail
- Gating: every call returns `{ok, reason, message}` where `reason ∈ {ai_disabled, no_api_key, domain_disabled, capability_unavailable, not_implemented}`
- Privacy: API key never in export (`stripSensitive()` zeroes regardless of `includeSettings`)
- Capability functions have `// FUTURE:` markers for the real impl

When live: trusted markdown rendering, KaTeX, item-link resolution all work as in static content — the AI response renders into the same Reader frame.

---

## Adding content

### New domain

1. Create `data/domains/<id>/meta.js` exporting `META` with `id`, `name`, `fullName`, `description`, `icon`, `accentColor`, `phases[]`, optional `systemTypes[]` + `aiCapabilities{}`
2. Create `data/domains/<id>/items.js` exporting `ITEMS[]`
3. Optionally add `seed-cards.js`, `glossary.js`, `notation.js`, `content/`
4. Register the domain in [js/domain.js](js/domain.js) `DOMAINS` map
5. Reload — domain appears in switcher, state scaffolded automatically

### New cards (existing domain)

Edit `data/domains/<id>/seed-cards.js`. On next page load:
- New cards (`id` not in localStorage) added with `nextReview: null` (visible as "Unscheduled")
- User manually clicks `[+ Add to queue]` to introduce — preserves Wozniak's spaced-introduction

### New rich content for an item

See:
- [data/domains/microstructure/content/README.md](data/domains/microstructure/content/README.md) for schema authoring guide
- [data/domains/geothermal/content/README.md](data/domains/geothermal/content/README.md) for geothermal-specific tone calibration

Schema = 8 canonical sections + author block + selfTest + optional viz. Bilingual everywhere.

After authoring: run `node scripts/verify-content-schema.mjs` to catch structural bugs immediately.

### New simulator

1. Add a `registerComponent('YourSimName', function(host, params, lang) { ... })` block to `js/viz.js`
2. Export helper functions (`yourSimHelper` etc.) for testability
3. Reference from content via `section.visualization = { id, component: 'YourSimName', title, description, defaultParams, height }`
4. Write `scripts/verify-your-sim.mjs` following the pattern of existing harnesses
5. Master runner (`verify-all.mjs`) auto-discovers — no manual registration

---

## Development workflow

Per-phase commit discipline:

1. **Implement** the change
2. **Verify** — write a script (or run an existing harness), confirm all checks pass
3. **Update CHANGELOG** with phase entry
4. **Update docs/PHASES.md** with detailed record
5. **Commit** with verification summary in message

Validation-pause discipline:

After 2-3 consecutive phase commits, default to "dogfood + evaluate" not "what's next?". Authoring velocity is cheap; validation throughput is the bottleneck (your time). Stacking unevaluated surface area = surface for systematic pattern issues to compound undetected.

---

## Documentation map

- **[README.md](README.md)** — this file (comprehensive entry point)
- **[RESUME.md](RESUME.md)** — fast-adaptation guide for returning sessions ⭐ open this first when coming back
- **[CHANGELOG.md](CHANGELOG.md)** — phase-by-phase change record
- **[docs/ARCHITECTURE.md](docs/ARCHITECTURE.md)** — patterns + principles + decisions
- **[docs/PHASES.md](docs/PHASES.md)** — detailed per-phase records (scope, decisions, verification, notes)
- **[docs/INDEX.md](docs/INDEX.md)** — directory of all docs
- **[scripts/README.md](scripts/README.md)** — verification harness docs + maintenance protocol
- **[data/domains/microstructure/content/README.md](data/domains/microstructure/content/README.md)** — content authoring guide
- **[data/domains/geothermal/content/README.md](data/domains/geothermal/content/README.md)** — geothermal authoring guide (ID tone calibration)
- **[notes/g1-dogfood-prep-2026-05-28.md](notes/g1-dogfood-prep-2026-05-28.md)** — Acuña dogfood prep artifact (Sections A-G)

---

## License

Personal use. Content drawn from published academic papers and books — fair-use educational extraction. If you fork: write your own card content.
