# RESUME — open this first when you return to Lattice

Last meaningful work: **2026-06-01** (Phase B microstructure expansion 2.0–2.7 — eight modules authored: Avellaneda-Stoikov 2008, Almgren-Chriss 2000, Makarov-Schoar 2020, Aquilina-Budish-O'Neill 2022, and the four textbooks Cartea-Jaimungal-Penalva 2015, Guéant 2016, Kissell 2013, Bouchaud et al. 2018 — each research-fanned + web-verified, bilingual EN+ID, 13 SM-2 cards, 5-reviewer adversarial audit, fixed, committed. **This completes the microstructure domain: all 14 catalog items now have rich content.**).
Last commit: Phase 2.7 — Bouchaud-Bonart-Donier-Gould 2018 (`git log --oneline -5` for exact SHAs).
Working tree: **clean** — everything is committed. Verification: 48 harnesses, **11297 checks**, all green (`node scripts/verify-all.mjs`).

Goal of this file: 5-minute orientation. Read top to bottom, you'll know exactly where to pick up.

---

## What this project is

Static-file multi-domain bilingual SRS learning platform. Uses Wozniak's SuperMemo principles (SM-2 scheduler by default, with an optional FSRS-4.5 engine; atomic-fact cards, Wozniak's 20 rules of knowledge formulation). Three domains: **microstructure** (market microstructure), **geothermal** (reservoir engineering), and **trading** (attributed practitioner edges + quant method). Renders bilingual EN + ID content. Embedded interactive simulators for visual learning.

No build step. No framework. Pure ES modules + KaTeX bundled offline. Runs from `python3 -m http.server 8765`.

---

## Current state — 30-second snapshot

**Content (43 rich modules + 16 drafts; 59 items total = 19 microstructure + 17 geothermal + 23 trading — all catalog items now have content modules):**
- ✅ Hasbrouck 2007 (microstructure, empirical methodology) — full bilingual content + Roll spread simulator
- ✅ O'Hara 1995 (microstructure, theoretical synthesis) — full bilingual content
- ✅ Kyle 1985 (microstructure, strategic theory) — full bilingual content
- ✅ Glosten-Milgrom 1985 (microstructure, sequential trade theory) — full bilingual content + GM Bayesian simulator
- ✅ Cont-Kukanov-Stoikov 2014 (microstructure, OFI / order-flow imbalance) — full bilingual content
- ✅ Easley-López de Prado-O'Hara 2012 (microstructure, VPIN / order-flow toxicity) — full bilingual content
- ✅ Avellaneda-Stoikov 2008 (microstructure, optimal market making) — full bilingual content
- ✅ Almgren-Chriss 2000 (microstructure, optimal execution) — full bilingual content
- ✅ Makarov-Schoar 2020 (microstructure, crypto cross-exchange arbitrage) — full bilingual content
- ✅ Aquilina-Budish-O'Neill 2022 (microstructure, HFT latency arbitrage) — full bilingual content
- ✅ Cartea-Jaimungal-Penalva 2015 (microstructure, algo-trading textbook / stochastic control) — full bilingual content
- ✅ Guéant 2016 (microstructure, market-liquidity textbook / closed-form execution & market making) — full bilingual content
- ✅ Kissell 2013 (microstructure, practitioner TCA / I-Star market-impact textbook) — full bilingual content
- ✅ Bouchaud-Bonart-Donier-Gould 2018 (microstructure, econophysics / square-root impact & propagator textbook) — full bilingual content
- ✅ Budish-Cramton-Shim 2015 (microstructure, market design / frequent batch auctions) — full bilingual content (Phase C1; theory parent of Aquilina-Budish-O'Neill, bridges to crypto MEV)
- ✅ Hasbrouck 1995 (microstructure, price discovery / information share) — full bilingual content (Phase C2; the "who leads?" VECM tool, NYSE ~92.7% IS, discovery ≠ volume)
- ✅ Brunnermeier-Pedersen 2009 (microstructure, funding liquidity / liquidity spirals) — full bilingual content (Phase C3; market↔funding feedback, loss + margin spirals, crisis lens)
- ✅ Amihud 2002 (microstructure, illiquidity premium / ILLIQ) — full bilingual content (Phase C4; |R|/DolVol price-impact proxy, cross-section + time-series liquidity pricing)
- ✅ Menkveld 2013 (microstructure, HFT market making) — full bilingual content (Phase C5; one HFT's book: €0.88/trade = €1.55 spread − €0.68 positioning; cross-market Chi-X/Euronext)
- ✅ Acuña 2008 (geothermal, dry steam deliverability) — full bilingual content + Acuña deliverability simulator
- 🟡 O'Sullivan-Pruess-Lippmann 2001 (geothermal, reservoir simulation / TOUGH2) — **DRAFT** module, schema-valid, awaiting Az domain review (every domain claim flagged ⟦TODO-Az⟧; seed cards deferred). Prep + draft committed.
- 🟡 Cumming 2009 (geothermal, conceptual models / MT clay-cap) — **DRAFT** module, schema-valid, awaiting Az domain review (every domain claim flagged ⟦TODO-Az⟧; seed cards deferred). Prep + draft committed.
- 🟡 Stober & Bucher 2021 (geothermal, survey-textbook root) — **DRAFT** module (survey format), schema-valid, awaiting Az review (⟦TODO-Az⟧ flags; seed cards deferred). Prep + draft committed.
- 🟡 Grant & Bixley 2011 (geothermal, reservoir engineering backbone) — **DRAFT** module, schema-valid, awaiting Az review (dry-steam-vs-liquid teaching contrast; ⟦TODO-Az⟧ flags; seed cards deferred). Prep + draft committed.
- 🟡 DiPippo 2016 (geothermal, power plants / utilization) — **DRAFT** module, schema-valid, awaiting Az review (dry-steam cycle anchored; ⟦TODO-Az⟧ flags; seed cards deferred). Prep + draft committed.
- 🟡 Björnsson & Bodvarsson 1990 (geothermal, reservoir-property survey) — **DRAFT** module, schema-valid, awaiting Az review (kh-as-sanity-check; ⟦TODO-Az⟧ flags incl. un-recovered property ranges; seed cards deferred). Prep + draft committed.
- 🟡 Henley, Truesdell & Barton 1984 (geothermal, geochemistry root / geothermometry) — **DRAFT** module, schema-valid, awaiting Az review (silica/Na-K geothermometers; dry-steam→gas-geothermometry flag; ⟦TODO-Az⟧ flags; seed cards deferred). Prep + draft committed.
- 🟡 Arnórsson 2000 (geothermal, IAEA isotope/geochemistry field manual) — **DRAFT** module, schema-valid, awaiting Az review (δD/δ¹⁸O recharge tracing, oxygen-18 shift, tritium clock; dry-steam→steam/condensate-sampling flag; ⟦TODO-Az⟧ flags incl. editor life status; seed cards deferred). Prep + draft committed.
- 🟡 Tester / MIT 2006 (geothermal, EGS / frontier — petrothermal) — **DRAFT** module, schema-valid, awaiting Az review (heat-in-place + recovery factor; EGS as the engineered CONTRAST to Darajat's natural dry-steam, NOT Darajat's category; ⟦TODO-Az⟧ flags; seed cards deferred). Prep + draft committed.
- 🟡 Horne 1995 (geothermal, well testing / pressure-transient analysis — **NEW 2026-06-06** under Az's "geothermal" go) — **DRAFT** module, schema-valid, awaiting Az review (PTA backbone Theis/Horner/derivative → kh/skin/p* is verified & fluid-neutral; dry-steam pseudo-pressure, two-phase near-well, fracture/feedzone, injection-test thermal correction, Acuña-deliverability link all ⟦TODO-Az⟧-flagged; seed cards deferred). Prep `notes/horne-1995-research-prep-2026-06-06.md` + draft committed.
- 🟡 Axelsson 2010 (geothermal, reinjection & tracer testing — **NEW 2026-06-06** under Az's "continue other three geothermal topics" go) — **DRAFT** module, schema-valid, awaiting Az review (reinjection = disposal + pressure support + heat sweep; thermal-breakthrough hazard; tracer flow-channel / moment interpretation; thermal-front retardation predicting cooling — all verified & fluid-neutral; dry-steam peripheral/condensate reinjection, two-phase tracer partitioning, numeric R_th, injector siting all ⟦TODO-Az⟧-flagged; seed cards deferred). Prep `notes/axelsson-reinjection-tracer-research-prep-2026-06-06.md` + draft committed.
- 🟡 Sanyal 2005 (geothermal, decline-curve analysis & reserves estimation — **NEW 2026-06-06** under Az's "continue other three geothermal topics" go) — **DRAFT** module, schema-valid, awaiting Az review (Arps decline exponential/hyperbolic/harmonic via exponent b → EUR; volumetric stored-heat × recovery factor → MW; Monte-Carlo → P90/P50/P10 = proven/probable/possible — all verified & fluid-neutral; whether Arps transfers to pressure/reinjection-governed dry-steam decline, the dry-steam recovery factor, reinjection coupling, and the Acuña deliverability link all ⟦TODO-Az⟧-flagged; seed cards deferred). Prep `notes/sanyal-decline-reserves-research-prep-2026-06-06.md` + draft committed.
- 🟡 Giggenbach 1988 (geothermal, production geochemistry / geothermometry — **NEW 2026-06-06** under Az's "continue other three geothermal topics" go) — **DRAFT** module, schema-valid, awaiting Az review (solute geothermometers silica & Na-K = 1390/(1.75+log Na/K)−273, the Na-K-Mg ternary diagram as an equilibrium VALIDITY test, gas geothermometry, scaling prediction — all verified & fluid-neutral; HEADLINE dry-steam flag: solute geothermometers need a liquid sample — Darajat produces steam+NCG, so reservoir-T & monitoring lean on gas geothermometry + steam/condensate chemistry; exact constants, sampling, NCG/H₂S all ⟦TODO-Az⟧-flagged; seed cards deferred). Prep `notes/giggenbach-production-geochemistry-research-prep-2026-06-06.md` + draft committed.
- 🟡 Finger-Blankenship 2010 (geothermal, drilling & well completion — **NEW 2026-06-07** under Az's "more geothermal drafts" go) — **DRAFT** module, schema-valid, awaiting Az review (telescoping cemented casing strings + production liner; casing design under thermal cycling σ~EαΔT; lost-circulation spectrum incl. blind drilling; directional/pad feedzone targeting; high-T logging; drilling = ⅓–½ of capital — all verified & general; dry-steam Darajat specifics — blind drilling under-pressured steam, large-bore deliverability completions, H₂S, casing/cement & feedzone targeting — all ⟦TODO-Az⟧-flagged; seed cards deferred). Prep `notes/finger-blankenship-drilling-research-prep-2026-06-07.md` + draft committed.
- 🟡 Gallup 2009 (geothermal, scaling, corrosion & production chemistry — **NEW 2026-06-07** under Az's "more geothermal drafts" go) — **DRAFT** module, schema-valid, awaiting Az review (silica scaling via cooling+flashing→polymerisation, calcite at the flash point, corrosion by H₂S/CO₂/chloride/O₂, NCG/H₂S abatement, controls pH-mod/inhibitors/materials/O₂-exclusion — all verified & general; HEADLINE dry-steam shift: steam+NCG not brine → condensate chemistry + H₂S/NCG abatement + line corrosion dominate, all ⟦TODO-Az⟧-flagged; seed cards deferred). Prep `notes/gallup-scaling-corrosion-research-prep-2026-06-07.md` + draft committed.
- 🟡 Whiting-Ramey 1969 (geothermal, material/energy balance & lumped-parameter reservoir modelling — **NEW 2026-06-07** under Az's "more topics with the best visualization" go) — **DRAFT** module, schema-valid, awaiting Az review, and the **first geothermal DRAFT with an interactive simulator**: the lumped tank κ·dp/dt = −Wₚ(1−f)+a(p₀−p) → p∞, τ, open-stabilises-vs-closed-linear-decline, reinjection lift — all verified (LumpedReservoirSim in js/viz.js; math checked vs RK4 by verify-lumped-sim.mjs, 30 checks, harness 32→33). HEADLINE dry-steam flag: Whiting-Ramey is a STEAM material/energy balance (pore-water boiling + heat mined from rock) — the liquid tank is an intuition scaffold; Darajat steam/heat balance, κ/a values, reinjection-decline coupling all ⟦TODO-Az⟧-flagged; seed cards deferred). Prep `notes/whiting-ramey-lumped-balance-research-prep-2026-06-07.md` + draft committed.
- ✅ **Microstructure domain COMPLETE** — all 19 microstructure catalog items now have rich bilingual content (13 papers + 4 textbooks + the 2 earliest, across the GM→Kyle→…→Amihud→Menkveld arc)
- ✅ **NEW `trading` domain (2026-06-07)** — a 3rd domain: attributed practitioner/quant lessons compiled by Az from public material and cross-checked against the literature, evidence-tagged ([Established]/[Practitioner]/[His]), NOT financial advice. 23 rich bilingual modules + 309 cards + a 115-term glossary (7 categories) + a 24-entry notation table + 13 interactive simulators (gamma-flip + volume-profile + SVI + SSVI vol-surface + perp funding + expectancy/Kelly survival + options Greeks + backtest overfitting/DSR + market-profile TPO + variance-risk-premium + order-flow CVD + portfolio-of-edges + stat-arb pairs) + a web-verified Sources & Curriculum survey (incl. 4 Husslin deep-dives — dealer flows w/ the DealerGammaSim gamma-flip sim, OI/positioning, event trading, liquidity harvesting — + the Insilico quant-curriculum deep-dive w/ the VolumeProfileSim POC/value-area sim): **@Husslin_ framework** (positioning/OI, dealer gamma-vanna-charm flows, event trading, liquidity harvesting — cross-linked to micro VPIN/Kyle/Bouchaud/Brunnermeier-Pedersen/Menkveld) and **@insiliconot method** (volume profiles, participant archetypes, non-time bars, the viscosity-solutions quant curriculum — cross-linked to Almgren-Chriss). Cards enforced (≥8/module). Source: the Husslin/Insilico handbook pack. **Plus 5 Practitioner Playbooks (Phase T9, 2026-06-07)** compiled from public material — TraderXO (expectancy/Kelly, carrying the new ExpectancySurvivalSim), Jim Talbot (regime/momentum-reset/discipline), Luckshury (order-flow profile + session stats), Tradingriot/Adam Bakay (order-flow → variance-risk-premium), LiquidityGoblin (market-making/adverse-selection) — each evidence-tagged, educational/not-financial-advice, not affiliated with the named traders.
- ✅ **All 17 geothermal catalog items now have content modules** — Acuña rich + 16 audited DRAFTs (incl. Horne 1995 well-testing/PTA, Axelsson 2010 reinjection/tracer, Sanyal 2005 decline/reserves, Giggenbach 1988 production geochemistry, Finger-Blankenship 2010 drilling & completion, Gallup 2009 scaling/corrosion & production chemistry, and Whiting-Ramey 1969 material-balance/lumped modelling — the first DRAFT with an interactive simulator, added 2026-06-06/07 under Az's "geothermal" / "continue" / "more topics + visualization" gos; every domain claim ⟦TODO-Az⟧-flagged; awaiting Az sign-off / flag-clearing). Remaining geothermal work is the owner-only validation track below.

**Simulators (13 in `js/viz.js`):**
- `RollSpreadSim` — Hasbrouck Worked Example (Roll 1984 spread estimator)
- `GlostenMilgromBayesianSim` — GM Worked Example (Bayesian posterior + bid/ask/mid evolution)
- `AcunaDeliverabilitySim` — Acuña Worked Example (deliverability curve + diagnostic mode A vs B)
- `KyleLambdaSim` — Kyle Worked Example (price-impact line p=p₀+λy; λ=√Σ₀/(2σ_u), depth=1/λ, ½-revealed invariant)
- `AlmgrenFrontierSim` — Almgren-Chriss Worked Example (efficient frontier + holdings trajectory; κ=√(λσ²/η))
- `AlmgrenExecutionSim` — Almgren-Chriss *applications* (2nd viz) — animated play-through of the liquidation schedule (executionStep)
- `AvellanedaStoikovSim` — Avellaneda-Stoikov Worked Example (inventory-skewed reservation price + optimal spread vs q)
- `SqrtImpactSim` — Bouchaud Worked Example (square-root impact law I=Yσ√(Q/V) vs linear; √2-not-2 doubling)
- `CksOfiSim` — Cont-Kukanov-Stoikov Worked Example (OFI→ΔP regression, β=1/(2D̄), high R² vs noisy trade imbalance)
- `DeepOfiSim` — Cont-Kukanov-Stoikov *applications* (2nd viz) — deep multi-level OFI: R² climbs as more book levels are aggregated
- `VpinSim` — VPIN Worked Example (volume-bucket buy/sell imbalance bars + toxicity gauge; VPIN=mean|2Φ(z)−1|)
- `PropagatorSim` — Bouchaud *formalization* section (2nd viz) — transient-impact metaorder path: rise → peak → relaxation under G(ℓ)~(1+ℓ)^(−β)
- `OrderBookSim` — O'Hara *intuition* section (its 1st viz) — interactive limit-order-book ladder: market orders walk the book, depth → slippage / price impact (Kyle λ is the slope, CKS depth its inverse)

(Plus a 14th interactive sim that lives in the Map dashboard, not `js/viz.js`: the **SR what-if projection** — `whatIfTrajectory`/`whatIfSVG` in `js/dashboard.js`, Phase S17.)

**Library (Phase S18):** multi-select card filter — Status chips (due/learning/mastered/new/unscheduled, only those present) × Type chips, OR within a facet and AND across; pure `itemMatchesFilter`/`applyCardFilter` in `js/library.js`.

**Save PNG (Phase S19):** every simulator footer has a Save-PNG button — rasterizes the live SVG (CSS vars inlined onto a self-contained SVG, 2× supersampled) to a downloadable PNG for slides. Pure core (`collectCssVarNames`/`inlineSvgVars`/`svgExportFilename`) + browser `exportSvgToPng` in `js/viz-export.js`, wired in `renderVisualization`.

**Scheduler backtest (Phase S20):** Map-dashboard panel that replays your real review log through BOTH engines and scores predicted-vs-actual recall (log-loss/Brier/accuracy) → which engine called your recall better. FSRS uses native retrievability (+ trained weights); SM-2 uses a documented exponential proxy R=requestRetention^(t/interval). Pure `backtestEngines`/`scorePredictions` in `js/backtest.js` (reuses `groupReviews` from fsrs-optimize). Needs ≥20 predictions.

**Global card search (Phase S21):** `/` (or the 🔍 topbar button) opens a cross-domain search overlay over every card's front/back; ranked AND-search (front>title>back + phrase bonus), HTML-safe `<mark>` highlights, click a hit to jump to its source in the Library (switches domain if needed). Pure `collectAllCards`/`searchCards`/`searchOverlayHTML`/`searchResultsHTML` in `js/card-search.js`; overlay wired in `app.js` (`renderSearch`/`onSearchGo`), `#search-root` in index.html, `/` in the shortcuts registry.

**Print / PDF a module (Phase S22):** a Print button on any source detail (`onPrintModule` sets `document.title` → PDF filename, calls `window.print()`) + a print-only header; an `@media print` block in styles.css strips chrome, recolours theme vars to ink-on-white, expands `<details>`, prints only the active view. Pure `printDocTitle`/`printHeaderHTML` in `js/print.js`.

**Combined cross-domain review (Phase S23):** Settings → Review → "Review across all domains" (`settings.review.crossDomain`, default off) makes `buildSession` pull due cards from EVERY domain into one queue, each tagged `_domain`/`_sourceLabel`/`_domainLabel` (review card shows a domain badge). `onRate` writes back to the card's own `_domain` and strips `_`-fields before persisting. Pure `getDueCardsAllDomains`/`stripTransientFields` in `js/storage.js`. Toggling rebuilds the session live.

**Review stats + streak (Phase S24):** Map-dashboard panel (cross-domain) — current/longest daily streak (streak carries through an as-yet-unreviewed today), reviews today / last-7 / last-30 / total / active-days tiles, success rate (grade ≥ 2), and an Again/Hard/Good/Easy grade-distribution bar. Pure `reviewStats(log, today)` in `js/dashboard.js`.

**Search keyboard nav (Phase S25):** in the `/` search overlay, ↑/↓ move a highlighted result (mousemove also sets it), Enter opens it. Pure `moveActiveIndex(current, delta, count)` (clamp, no wrap) + `searchResultsHTML(..., activeIndex)` highlight in `js/card-search.js`; wired in `renderSearch` (app.js).

**Recall-trend sparkline (Phase S26):** stats panel gains a weekly success-rate line over the last 12 weeks (grade ≥ 2 = recalled; weeks with no graded reviews are gaps; gold dashed line = overall). Pure `retentionTrend(log, today, weeks)` + `retentionTrendSVG` in `js/dashboard.js`.

**Per-domain stats (Phase S27):** stats panel gains a By-domain table (reviews / last-7 / success% / streak per domain; legacy entries → 'untagged'; shown only when >1 domain has reviews). Pure `reviewStatsByDomain(log, today)` in `js/dashboard.js` (groups by `r.domain`, runs `reviewStats` per group); domain labels threaded via `domainLabels` dep from app.js `domainLabelsMap()`.

**Study-timing heatmap (Phase S31):** Map-dashboard panel — a Mon-first weekday strip (from each entry's date, so all history) + an hour-of-day strip (from a `hour` field now captured in `onRate` via `new Date().getHours()`, newer entries only), cells shaded by volume with recall% in the tooltip. Pure `reviewTimeStats(log)` in `js/dashboard.js` (weekday via `getUTCDay` on the date string — no clock; `hasHours` flag). Legacy entries show in the weekday strip; hour strip fills in going forward.

**New-cards/day recommender (Phase S30):** Map-dashboard panel — each card's modelled first-year review cost F (from the S28 FSRS model) ⇒ sustainable new cards/day ≈ budget ÷ F; shows a budget→new/day table, highlights the row nearest your recent pace (last30/30), and gives a personalised number. Pure `firstYearReviews`/`recommendNewCards`/`newCardsForBudget` in `js/retention.js`.

**Leech detector (Phase S29):** Map-dashboard panel listing chronically-failed cards (lapses ≥ `LEECH_THRESHOLD`=4), worst-first (lapses desc, then lower ease), each linking to its source via the graph's `[data-node-item]` click-through; copy nudges reformulate-don't-re-drill (Wozniak). Pure `findLeeches(cards, {threshold})` in `js/dashboard.js`; shown only when leeches exist (per active domain).

**Target-retention workload curve (Phase S28):** Map-dashboard panel modelling one card's long-run FSRS review load at each target retention (expected-value recursion over the real FSRS dynamics — pure, no RNG). Workload falls monotonically as you lower the target, so it marks the *diminishing-returns knee* (Kneedle elbow) as the "sweet spot" (≈ 91% on default weights), plus what raising the target would cost. Pure `workloadCurve`/`recommendRetention`/`retentionAdvice` in `js/retention.js`; rendered by `retentionPanelHTML`/`workloadCurveSVG` in `js/dashboard.js`.

**Views (4 tabs):** Review `R` · Library `L` · Reference `G` · **Map `M`** (Phase S4: prereq-DAG curriculum graph + progress/retention dashboard + 21-day review-workload forecast, FSRS retention-decay projection, 16-week review-activity heatmap & an interactive SR what-if projection (interval growth SM-2 vs FSRS under a chosen rating pattern, Phase S17), in `js/dashboard.js`).

**Infrastructure (in `scripts/`):**
- 48 persistent verification harnesses, **11297 total checks**, runs in ~0.2s
- `verify-all.mjs` master runner — `node scripts/verify-all.mjs --quiet`
- All 48 pass green

---

## What's uncommitted in working tree

Working tree is **clean** — run `git status` to confirm. Everything through the
audit Phase A commits is in history. The verification suite (now 48 harnesses,
11297 checks) and all content/code fixes are committed.

Tracked in [notes/audit-findings-2026-05-30.md](notes/audit-findings-2026-05-30.md):
all 48 audit findings (blockers, defects, inconsistencies, citation normalization,
polish) are **fixed and committed**, and SM-2 seed cards now cover all 15 rich
modules (geothermal Review tab seeds 12 draft Acuña cards). The one cosmetic nit
that used to sit here (GM V_L slider readout sync) is **fixed** — `js/viz.js` clamps
`V_L < V_H` and syncs both the slider value and the readout (viz.js:757-763). **No
autonomous work remains.** What's left is the irreducible owner track below (dogfood,
native-ID review, self-test honesty), reviewing the DRAFT Acuña cards, and signing
off the 9 geothermal DRAFTs (clearing their ⟦TODO-Az⟧ flags).

---

## What's pending YOUR input (irreducible)

These three items came out of Phase G1.2 + the Acuña dogfood preparation. None can be done without your tacit knowledge. They are listed in [notes/g1-dogfood-prep-2026-05-28.md](notes/g1-dogfood-prep-2026-05-28.md) Section F.

### 1. Acuña real-data dogfood (highest leverage)

Open browser to http://127.0.0.1:8765, navigate to Acuña 2008 → Worked Example. Use the simulator with parameters approximating a **real Darajat well you know the performance pattern of**. Specifically:

- Compare baseline curve at your well's `p_rg` against your operational intuition
- Toggle diagnostic mode + check if Scenario A vs B signatures match observed degradation patterns
- Note edge cases where the simulator surprises you

Output: confidence signal whether geothermal pattern scales to G2 (Grant-Bixley etc.) or needs refinement.

Full 90-min plan in [notes/g1-dogfood-prep-2026-05-28.md](notes/g1-dogfood-prep-2026-05-28.md) Section F + Sections A1-A9 for parameter sweep tables.

### 2. ID layer native review

Toggle browser to ID, read each content module's body sections at normal pace. Flag passages that feel translated-from-English rather than native Indonesian.

The [notes/g1-dogfood-prep-2026-05-28.md](notes/g1-dogfood-prep-2026-05-28.md) Section B has pre-flagged specific suspicious passages in the Acuña content (B1-B8). For the other content modules — the 13 further microstructure modules, plus the 9 geothermal DRAFTs as part of their Az sign-off — no pre-audit exists yet (this section predates the Phase B expansion, when only 5 modules existed); your native judgment is the first pass.

Output: G1.2.1 patch list (ID-only revisions) or "ID register is good enough, proceed."

### 3. Self-test honesty pass

For each of the 4 self-tests per content module (now ~96 across the 24 modules — the 9 geothermal sets are DRAFT and fold into Az sign-off; this plan predates the expansion's "= 20 total"): read the question, write a 2-sentence response on paper WITHOUT looking at the answer, then reveal and rate. Tracks whether the self-tests actually probe understanding or are trivially answerable from context.

[notes/g1-dogfood-prep-2026-05-28.md](notes/g1-dogfood-prep-2026-05-28.md) Section C has pedagogical pre-evaluation for the 4 Acuña self-tests.

Output: List of self-tests to revise + confidence that the pattern produces useful learning checks.

---

## What's NOT urgent (don't do autonomously)

Per the project's working principles (validation over velocity; geothermal is Az-only):

- **Don't author *new* catalog items autonomously.** Default to validation-pause after dense building. The existing catalog is fully built (Phase 1.8 Cont-Kukanov-Stoikov, Phase G2 Grant-Bixley and the rest all landed; all 59 items have content modules); adding a *new* catalog item needs an explicit "go" from the maintainer.
- **Don't finalize geothermal items autonomously.** That's Az's domain expertise — 6 years Darajat operational experience. The 9 non-Acuña geothermal items now exist as ⟦TODO-Az⟧-flagged **DRAFT** modules (each with a research-prep factsheet) — the sanctioned "I draft, Az corrects" mode — but they are NOT final: Az clears the flags and signs off, and no new geothermal item or final domain-fact assertion is authored without Az. Co-author or Az-author only.

---

## Quick commands

```bash
# Start local server
cd ~/Code/lattice && python3 -m http.server 8765
# then open http://127.0.0.1:8765

# Run all verification (11297 checks, ~0.2s)
cd ~/Code/lattice && node scripts/verify-all.mjs

# Quiet mode (for CI / quick sanity)
cd ~/Code/lattice && node scripts/verify-all.mjs --quiet

# Single harness
node scripts/verify-acuna-prep.mjs
node scripts/verify-gm-sim.mjs
node scripts/verify-roll-sim.mjs
node scripts/verify-content-schema.mjs

# Filter to one section within a harness
node scripts/verify-acuna-prep.mjs --section A5
node scripts/verify-gm-sim.mjs --section B8

# Recent commit history
git log --oneline -10

# Current uncommitted state
git status
```

---

## Documentation index

| Doc | What it is |
|---|---|
| [README.md](README.md) | Comprehensive entry-point doc with full state, features, file structure, how to extend |
| [RESUME.md](RESUME.md) | This file — fast-adaptation snapshot |
| [CHANGELOG.md](CHANGELOG.md) | Phase-by-phase change record (G1 → G1.2 → Phase 1.7 → infra runs) |
| [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md) | Patterns, principles, architectural decisions (module dep graph, data model, etc.) |
| [docs/PHASES.md](docs/PHASES.md) | Detailed per-phase records (scope, decisions, verification, notes) |
| [docs/INDEX.md](docs/INDEX.md) | Directory of all docs (where to find what) |
| [scripts/README.md](scripts/README.md) | Verification harness docs + maintenance protocol |
| [data/domains/microstructure/content/README.md](data/domains/microstructure/content/README.md) | Microstructure content authoring guide |
| [data/domains/geothermal/content/README.md](data/domains/geothermal/content/README.md) | Geothermal content authoring guide (tone calibration for ID register) |
| [notes/g1-dogfood-prep-2026-05-28.md](notes/g1-dogfood-prep-2026-05-28.md) | Acuña dogfood prep artifact (Sections A-G, your scaffold for evaluation) |

---

## If you have 15 minutes

Run `node scripts/verify-all.mjs` — confirm 11273/11273 pass. If anything fails, the harness will tell you exactly which check broke. Start the server, open the browser, navigate to one content module, scroll through. Five minutes later you've reconfirmed the build state.

## If you have 90 minutes

Run the Acuña dogfood per [notes/g1-dogfood-prep-2026-05-28.md](notes/g1-dogfood-prep-2026-05-28.md). Section F lists what's irreducibly yours; Section A gives you the parameter-sweep tables to compare against the simulator.

## If you have a day

Do all three irreducible items (dogfood + ID review + self-tests) for Acuña. Produce a `notes/g1-dogfood-findings-<date>.md` file with your conclusions. That informs the scale-or-refine decision per Section E of the prep file.

## If you have a week

Above + ID review across the microstructure modules and the 16 geothermal DRAFTs + sign off (or send back) those DRAFTs by clearing their ⟦TODO-Az⟧ flags. (Phase 1.8 Cont-Kukanov-Stoikov and Phase G2 Grant-Bixley are both long done — the autonomous build is complete: all 19 microstructure modules are rich, and all 17 geothermal items now have content modules. The week-long task is now validation, not building.)

---

## Key decisions you might forget

- **Storage schemaVersion is 4** (localStorage key is still `lattice-v3` — only the internal version bumped). The v3→v4 migration (adds the optional FSRS scheduler; `js/storage.js:migrateV3ToV4`) and the legacy-v1 (`microstructure-hub:v1`) migration are both **non-destructive** — every card keeps its full history. Don't delete v1.
- **Review scheduler is pluggable** — `js/scheduler.js` routes to SM-2 (`js/sm2.js`, default) or FSRS-4.5 (`js/fsrs.js`) per `settings.review.scheduler`. Both engines keep the SM-2 fields on every card, so toggling in Settings is reversible.
- **FSRS weights are trainable** (Phase S5) — every review is appended to a capped `state.reviewLog`; Settings → Optimize runs `js/fsrs-optimize.js` (log-loss coordinate descent) to fit `settings.review.fsrsWeights` to your own recall (50+ predictions needed; Reset reverts to defaults). The log is exportable as CSV via Settings → Data (`reviewLogToCSV`).
- **Installable offline PWA** (Phase S6) — `manifest.json` + `sw.js` (precache shell + stale-while-revalidate; registered from index.html, non-fatal if unsupported). A custom install prompt + update-available toast live in `js/pwa.js` (which also owns SW registration). Responsive `@media` at 720/420px. Bump the `sw.js` `CACHE` name to force-refresh cached assets on release.
- **Pure SM-2 6-button quality scale (0-5)**, not Anki's 3-button collapse.
- **Sepia palette + dark chrome.** Body bg `#f0e6c8`, content cards `#faf2dc`. Chrome (topbar) stays dark via `--bg-chrome`.
- **Per-field bilingual fallback.** Missing ID layer falls back to EN with notice "ID belum tersedia — menampilkan English". Per-field, not per-page.
- **Wozniak reading-driven authoring.** Don't bulk-generate cards from general knowledge — author from actual reading. Cards have `nextReview: null` if added after initial install (user adds to queue manually).
- **`AcunaDeliverabilitySim` uses illustrative `ν_rg = 5.0`** (not real physical value). Documented in code + content. Real value would make PI slider barely affect curves; illustrative chosen for educational visibility.
- **GM `(ask+bid)/2` mid is NOT a martingale.** Only `μ_t = π·V_H + (1-π)·V_L` is. They coincide at π=0.5 by symmetry only. Documented in `scripts/verify-gm-sim.mjs` Section B8.
- **API key never in export.** `stripSensitive()` zeroes it regardless of `includeSettings` flag.

---

## Working conventions on this project

Default conventions the maintainer should follow:
- Validation-pause after dense building (default to "dogfood + evaluate" not "what's next?")
- No autonomous geothermal authoring beyond Acuña 2008
- Doc maintenance per phase (CHANGELOG + PHASES updated alongside code)
- Verification gate before commit
- Explicit stop-rules after commits

Decisions that need explicit sign-off before proceeding:
- Authoring a *new* catalog item, or *finalizing* any geothermal DRAFT (durable boundary; needs an explicit "go" — the existing 24-item catalog is fully built, and the 16 geothermal DRAFTs await Az sign-off, not autonomous finalization)
- Major architectural changes (data model, storage schema, framework introduction)
- Anything that changes the established working pattern (Wozniak SRS pacing, reading-driven discipline, etc.)
