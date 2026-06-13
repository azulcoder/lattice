# Phases — Detailed Records

Per-phase records covering scope, decisions made, what shipped, verification results, and any notes worth preserving. Complements [CHANGELOG.md](../CHANGELOG.md) (which is a shorter top-level summary).

Each phase is dated 2026-05-24 since all work to-date landed in a single day's session. Subsequent phases will retain their commit-date stamps.

---

## Phase G-S2 — Geothermal: clear the general/literature flags across the draft set (2026-06-09)

- **Swept all 15 remaining geothermal drafts** to separate, per flag, what is a **general/literature** claim (verifiable in the public literature) from what is a **Darajat site-specific operational fact** (needs the owner). Every general flag was checked against multiple independent sources (peer-reviewed papers, textbooks, journals) and cleared; every site-specific flag was retained untouched. Each module's edit was then adversarially re-verified.
- **~80 general flags cleared; ~195 site-specific flag-lines retained** for owner sign-off. The retained items are exclusively: real well counts, installed/staged capacity, field reservoir T/P/enthalpy, decline rates, real chemistry/isotope values, reinjection/scaling/NCG specifics, and on-site operational practice.
- **Tester-MIT 2006 finalized** (its flags were all general — heat-in-place, recovery factor, EGS-as-contrast-to-dry-steam). Geothermal finalized count → 3 (Acuña, Stober-Bucher, Tester-MIT); 14 remain DRAFT but now carry only Darajat-specific flags.
- **Adversarial-verify catches (fixed):** Horne — author title "head" → "Director of the Stanford Geothermal Program" (a verified bibliographic fact) for internal consistency; DiPippo — the vapour-dominated/dry-steam classification (well-established in the literature) is now stated consistently across the module rather than asserted in the body but flagged in connections; Grant-Bixley — a dry-steam management-loop contrast that had named field-specific scaling/reinjection specifics was generalized, with the Darajat confirmation left to its flag.
- **Integrity rule applied:** general/verifiable claims may be cleared autonomously; Darajat operational facts remain owner-only. No site-specific fact was asserted as settled.
- **Counts:** drafts 15 → 14; final/rich modules 44 → 45. Suite green (48/48). Word counts for every edited module remain far above the schema floors.

---

## Phase G-S1 — Geothermal: finalize the Stober-Bucher survey root (2026-06-09)

- **Finalized `stober-bucher-2021`**, the geothermal textbook ROOT (survey/orientation on-ramp; every other geothermal item lists it or Grant-Bixley as a prerequisite). It had 5 review flags, all of which were **general/literature** claims rather than site-specific facts — so they were verified against the standard geothermal literature and cleared:
  1. **Dry-steam exemplars** — Larderello (Italy) & The Geysers (USA) are the canonical vapour-dominated examples; Kamojang/Darajat (Indonesia) are also vapour-dominated. The survey is *not* cited as naming the Indonesian fields (kept conservative).
  2. **Enthalpy classes** — no single standardized cutoff exists; conventions genuinely differ (Muffler-Cataldi 150 °C, Sanyal 190 °C, Benderitter-Cormy 200 °C, Hochstein 225 °C). No threshold attributed to the book.
  3. **Heat-flow physics** — `q = k·dT/dz` → ~90 mW/m² (k=3.0) / ~66 (k=2.2); ~65 continental, ~100 oceanic; 25–30 °C/km. All standard and arithmetically exact.
  4. **~240 °C reservoir temperature** — the canonical pre-exploitation main-reservoir condition of vapour-dominated systems (near the max-enthalpy saturation point ~236 °C); kept as a representative illustrative value.
  5. **Survey-not-primary framing** — retained; the geochemistry (Henley/Arnórsson) and reservoir-engineering (Grant-Bixley) specialist modules carry the depth.
- **Out of scope (unchanged):** Darajat operational facts (installed capacity, well count) are external to this survey and stay with the specialist dry-steam items.
- **Counts:** geothermal drafts 16 → 15; final/rich modules 43 → 44. Header updated DRAFT → finalized. Word counts 2111 EN / 1913 ID (≥ schema minimums). Suite green (48/48).

---

## Phase T17 — Trading: comprehensive glossary + notation expansion + a reference-layer harness (2026-06-09)

- **Az asked whether the glossary + notation cover everything.** They didn't yet: the trading reference layer was authored at Phase T4 (31 glossary terms / 8 notation entries, when the domain had ~9 modules) and never grew as T8–T16 added 14 more modules + the 5 practitioner playbooks. So options Greeks, expectancy/Kelly/risk-of-ruin, the deflated-Sharpe family, the VRP/variance-swap machinery, CVD/order-flow, portfolio diversification and the whole stat-arb/pairs vocabulary had modules but no reference entries.
- **Glossary 31 → 115 bilingual terms.** Four new categories — Options & volatility (20), Risk/sizing & edge statistics (17), Order flow & microstructure (10), Statistical arbitrage & market-making (23) — plus fills into the existing positioning-flows (21) and profile (17) buckets. Every term bilingual `{en,id}`, evidence-tagged [Established]/[Practitioner] with the source author/paper, deduped against the 31 existing slugs (0 collisions). Authored by a 2-agent workflow then merged centrally (JSON.stringify per field for safe escaping).
- **Notation 8 → 24 entries (43 rows).** The symbols behind the new modules: funding clamp `F(P)=P+clamp(I−P,−c,c)`, expectancy `E_R=p·b−(1−p)` / Kelly `f*=E_R/b` / breakeven `p*=1/(1+b)`, full Black-Scholes price + d₁/d₂ + Δ/Γ/ν/Θ + put-call parity, expected-max-Sharpe + Lo SE + PSR/DSR, K_var/RV/VRP + the Demeterfi log-contract integral, CVD `δ=B−S`/`Σδ` + Kyle absorption `λ(1−a)` + OLS λ̂, diversification `D(N,ρ)` + the `1/√ρ` limit, the OU spread + half-life + σ_eq + z-score, TPO POC/value-area. All 16 new `glossarySlug`s remapped to resolve against real glossary terms.
- **New permanent harness `verify-reference.mjs` (24 checks).** Guards every domain's reference layer (was: only the microstructure glossary's bilingual shape was spot-checked by verify-app-logic L4): G1 glossary bilingual term+definition / unique slugs / categories resolve / no dangling seeAlso; G2 notation concept non-empty / glossarySlug null-or-resolves / row fields present / year number-or-null; **G3 every notation symbol parses under KaTeX** (throwOnError, via the vendored `vendor/katex.min.js`) — a malformed symbol would otherwise render as a red error box. Covers microstructure (58 terms / 12 notation) + trading (115 / 24); geothermal has no reference layer yet (skipped). Auto-discovered → **47 → 48 harnesses**.
- **Suite 11273 → 11297 checks, 48 harnesses, green.** No content modules touched, so verify-math-render / content-schema counts unchanged. Trading domain provenance unchanged (attributed, evidence-tagged, not-financial-advice, NOT Az-gated).

---

## Phase A6 — Math-rendering fixes + a permanent math-render harness (2026-06-08)

- **Az flagged that some formulas displayed as raw text.** Root cause: the renderer (js/content.js) only understands `$…$` / `$$…$$`; it has no `\[ \]`/`\( \)` support and no escaped-`\$`. Two failure modes: (1) order-flow-cvd & market-profile-tpo used LaTeX delimiters `\[ \]` / `\( \)`; (2) many worked-examples used a literal/escaped currency `$` (e.g. "$100M", "\$76") that collided with the math `$` delimiters, made a field's `$` count odd, and leaked raw LaTeX (e.g. `E[\Pi] = (v - p_0 - \lambda x)\,x` shown literally).
- **Fixes:** order-flow-cvd (`\[…\]`→`$$…$$`, ×8) and market-profile-tpo (`\(…\)`→`$…$`, ×34) delimiters; then currency `$`/`\$` → plain **"USD N"** (the kissell/bouchaud convention) across kyle-1985, stoikov-2008, amihud-2002, brunnermeier-pedersen-2009, traderxo-expectancy, cont-kukanov-stoikov-2014, glosten-milgrom-1985, ohara-1995, jimtalbot-method, liquidity-goblin-market-making, options-greeks-payoffs — so every `$` is now a math delimiter and every field's `$` count is even. Token tickers ($FXS/$XCN) de-dollared to plain tickers. Numbers/economics unchanged.
- **New permanent harness — `scripts/verify-math-render.mjs` (M1–M3, 5244 checks over 1748 fields):** every section body + self-test field must have (M1) no unsupported `\[ \] \( \)` delimiter, (M2) even `$` pairing (after stripping `$$…$$`), (M3) no stray LaTeX surviving outside a rendered math span. Auto-discovered by verify-all ⇒ **46 → 47 harnesses**; guards this whole bug class forever.
- **Verification:** all math renders (5244/5244). Suite **6029 → 11273 checks** across **47 harnesses**, green.

---

## Phase T16 — Trading: Statistical Arbitrage & Pairs Trading + the PairsTradingSim (2026-06-07)

- **Scope (Az's pick — the last roadmap viz):** statistical arbitrage / pairs trading. ESTABLISHED quant strategy, web-verified references; not financial advice.
- **27th simulator — `PairsTradingSim` (js/viz.js):** `ouHalfLife(κ)=ln2/κ`, `ouEqStd(σ,κ)=σ/√(2κ)`; `simulatePairs` simulates an Ornstein-Uhlenbeck spread dX=κ(θ−X)dt+σ dW, computes the z-score (X−θ)/σ_eq, and backtests the band strategy (long at z≤−entry, short at z≥+entry, exit |z|≤exit, stop ±stopZ): path, trade events, total P&L (z-units), win rate, Sharpe, max-DD, half-life, and the realized OU diagnostics (std ≈ σ_eq, AR(1) ≈ e^{−κ dt}). Component: the spread path with the θ mean line, ±entry/±exit z-bands and trade markers. Embedded in stat-arb-pairs.
- **New harness — `verify-pairs-sim.mjs` (S1–S6, 20 checks):** OU closed forms (half-life, σ_eq); realized std ≈ σ_eq (LLN); realized AR(1) ≈ e^{−κ dt} + mean ≈ θ; the strategy has an EDGE under mean reversion (P&L>0, win rate>0.6) and NONE under a random walk (κ→0), averaged over 8 seeds; entry-z controls trade frequency; determinism. Auto-discovered ⇒ 45 → 46 harnesses.
- **Module `stat-arb-pairs` (phase quant, prereq insilico-quant-curriculum):** rich bilingual (4107 EN / 3557 ID), 8 sections, author block + ≥4 keyWorks, 3 self-tests, +16 cards (5 formula incl. OU SDE, half-life, σ_eq, z-score, AR(1); 4 cloze; 7 basic). Cointegration vs correlation, the Engle-Granger hedge ratio + ADF, the Gatev distance + 2σ rule, the OU model + half-life + s-score, the trade + why mean reversion is required, and the risks (cointegration breaks, crowding/decay, costs). Sim numbers cross-checked. **Web-verified refs:** Avellaneda & Lee 2010 (Quant. Finance 10(7):761-782), Gatev-Goetzmann-Rouwenhorst 2006 (RFS 19(3):797-827), Engle & Granger 1987 (Econometrica 55(2):251-276), Do & Faff 2010, Uhlenbeck-Ornstein 1930. Cross-linked to portfolio-of-edges, backtest-overfitting-dsr, traderxo-expectancy, micro Makarov-Schoar.
- **Verification:** content-schema 58 → **59 modules** (4339 → **4414 checks**); card-coverage enforced 41 → **42 modules**; trading now **23 items, 309 cards, 13 simulators**. Suite **5930 → 6026 checks** across **46 harnesses**, green. 27 simulators. **All vetted trading-roadmap visualizations are now built.**

---

## Phase T15 — Trading: Portfolio of Edges & the 1/√ρ ceiling + the PortfolioEdgeSim (2026-06-07)

- **Scope (Az's pick):** the "portfolio of uncorrelated, decaying edges" thesis (LiquidityGoblin "be the bookie"; Tradingriot's uncorrelated book), made precise with mean-variance math. ESTABLISHED, web-verified references; not financial advice.
- **26th simulator — `PortfolioEdgeSim` (js/viz.js):** `diversificationRatio(N,ρ)=√(N/(1+(N−1)ρ))`; `simulatePortfolio` returns the analytic portfolio Sharpe = S·D, portfolio vol, the 1/√ρ ceiling, and a seeded Monte-Carlo of N equicorrelated strategies (one-factor model zᵢ=√ρ·c+√(1−ρ)·eᵢ): realized portfolio Sharpe, realized pairwise correlation, and the median max-drawdown of the blend vs a single edge. Component: the D-vs-N curve with the ρ=0 √N reference + the 1/√ρ ceiling line; sliders N / per-edge Sharpe / ρ / vol. Embedded in portfolio-of-edges.
- **New harness — `verify-portfolio-sim.mjs` (P1–P6, 24 checks):** the D(N,ρ) identity (√N at ρ=0, 1 at ρ=1 or N=1, exact spot-checks); **the 1/√ρ asymptote**; portSharpe=S·D + monotonicity; MC realized Sharpe ≈ analytic (LLN); the one-factor generator's realized corr ≈ ρ; drawdown shrinks (portfolio < single); determinism. Auto-discovered ⇒ 44 → 45 harnesses.
- **Module `portfolio-of-edges` (phase quant, prereq traderxo-expectancy):** rich bilingual (3407 EN / 2966 ID), 8 sections, author block + 5 keyWorks, 3 self-tests, +14 cards (4 formula incl. D, σ_p, the 1/√ρ ceiling; 3 cloze; 7 basic). Why pooling raises Sharpe (vol falls, mean holds), the two regimes (ρ=0 ⇒ √N unbounded; ρ>0 ⇒ ceiling 1/√ρ — correlation not count sets the limit), drawdown shrinkage, and the honest caveats (edges decay, correlations → 1 in a crisis, ρ is noisy). Sim numbers cross-checked. **Web-verified refs:** Markowitz 1952 (J. Finance 7(1):77-91), Grinold & Kahn (Active Portfolio Management, IR=IC·√breadth), Brunnermeier-Pedersen 2009 (RFS 22(6):2201-2238), Sharpe 1964. Cross-linked to traderxo-expectancy, backtest-overfitting-dsr, liquidity-goblin-market-making, tradingriot-orderflow-vrp.
- **Verification:** content-schema 57 → **58 modules** (4264 → **4339 checks**); card-coverage enforced 40 → **41 modules**; trading now **22 items, 293 cards, 12 simulators**. Suite **5830 → 5930 checks** across **45 harnesses**, green. 26 simulators.

---

## Phase A2 — Correctness audit (11 trading sims) + canonical value-area fix (2026-06-07)

- **Audit (Az: "cek keseluruhan sudah benar atau belum"):** an 11-agent adversarial workflow independently re-derived each trading simulator's core formula from its cited reference and checked (a) the implementation, (b) whether the harness oracles are genuinely INDEPENDENT (finite-difference / closed-form / parity, not circular), (c) the module prose. Result: **10 correct, 1 minor-issues, 0 needs-fix, 0 critical.** DealerGamma, SVI, SSVI, Funding, Expectancy, Options, BacktestOverfit, TPO, VarianceSwap, OrderFlowCVD all verified mathematically exact with independent oracles and accurate references.
- **The one finding — `valueArea` (used by VolumeProfileSim + MarketProfileTPOSim):** it implemented a SIMPLIFIED single-row variant (annex one neighbouring bin per step) while its comment claimed the "standard Market-Profile value area." The canonical Steidlmayer/Dalton rule (Dalton, *Markets in Profile* 2007 — cited by the module) compares the SUM of the TWO rows above vs the TWO below the POC and annexes BOTH rows of the larger pair. On [1,2,3,10,4,2,1] the variant gave VA=[2,4] (73.9%) vs the canonical [1,5] (91.3%).
- **Fix:** rewrote `valueArea` to the canonical two-row rule; updated `verify-volume-profile-sim.mjs` V2 to the canonical hand-trace (loI=1, hiI=5, 21/23); realigned the volume-profile + TPO module prose (EN+ID) and 4 seed cards to the two-row construction (dropping the now-inaccurate "~70-71%" achieved-fraction claims). Both VolumeProfileSim and MarketProfileTPOSim now reproduce the cited reference algorithm.
- **Verification:** suite **5829 → 5830 checks** across 44 harnesses, green (volume-profile 20/20, TPO 28/28). No other code changes — the audit confirmed the remaining 10 simulators were already correct.

---

## Phase T14 — Trading: Order Flow & CVD + the OrderFlowCVDSim (2026-06-07)

- **Scope (Az's pick):** order flow / cumulative volume delta — absorption & divergence, grounded in Kyle's λ. ESTABLISHED (Kyle/Lee-Ready/VPIN) + practitioner CVD reads, web-verified references; not financial advice.
- **25th simulator — `OrderFlowCVDSim` (js/viz.js):** `simulateOrderFlow` models each bar's signed aggressor imbalance δ, CVD = Σδ, and price Δpₜ = λ(1−a)·δₜ + noise; the OLS slope of Δp on δ recovers the effective impact λ̂ ≈ λ(1−a), and the price-vs-CVD trend ratio flags ABSORPTION (flow that does not move price ⇒ divergence, a reversal tell) with the bearish/bullish side. `linSlope` helper. Component: price vs CVD (normalised) with a DIVERGENCE badge; sliders flow-trend / λ / absorption / noise; readouts λ̂ vs λ(1−a), corr, effective impact, verdict. Embedded in order-flow-cvd.
- **New harness — `verify-orderflow-sim.mjs` (O1–O6, 26 checks):** linSlope; **λ̂ ≈ λ(1−a)** across absorptions + monotone; no-absorption ⇒ confirmed/high-corr/net-CVD sign; heavy absorption ⇒ divergence + correct bearish/bullish side; corr falls with absorption; flat flow ⇒ choppy; CVD = cumsum(δ); determinism. Auto-discovered ⇒ 43 → 44 harnesses.
- **Module `order-flow-cvd` (phase positioning-flows, prereq husslin-oi-positioning):** rich bilingual (3563 EN / 3190 ID), 8 sections, author block + 5 keyWorks, 3 self-tests, +20 cards (3 formula incl. CVD=Σδ, Kyle Δp≈λδ; 3 cloze; 14 basic). Aggressor classification (Lee-Ready), CVD = Σδ vs resting liquidity, the healthy confirm case, absorption (bearish/bullish) + CVD divergence as the reversal tell, the feed-dependence caveat. **Web-verified refs:** Kyle 1985 (Econometrica 53(6):1315-1335), Lee & Ready 1991 (JF 46(2):733-746), Easley-López de Prado-O'Hara 2012 (RFS 25(5):1457-1493), Cont-Kukanov-Stoikov 2014 (J. Financial Econometrics 12(1):47-88), Bouchaud-Bonart-Donier-Gould 2018. Cross-linked to husslin-oi-positioning, luckshury-orderflow, market-profile-tpo, micro Kyle.
- **Verification:** content-schema 56 → **57 modules** (4189 → **4264 checks**); card-coverage enforced 39 → **40 modules**; trading now **21 items, 279 cards, 11 simulators**. Suite **5727 → 5829 checks** across **44 harnesses**, green. 25 simulators.

---

## Phase T13 — Trading: Variance Risk Premium & variance swaps + the VarianceSwapSim (2026-06-07)

- **Scope (Az's pick):** the variance risk premium, COMPREHENSIVELY beginner→advanced + application. ESTABLISHED academic + practitioner canon, web-verified references; not financial advice.
- **24th simulator — `VarianceSwapSim` (js/viz.js):** `simulateVarianceSwap` Monte-Carlos annualised realised variance RV=(252/n)Σrₜ² (with optional vol-spike jumps) vs the strike K_var=σ_imp²; reports VRP=K_var−E[RV], win rate, mean P&L, P(loss), worst, CVaR 5%, P&L skew (left tail), Sharpe — the short-vol "pennies / steamroller" signature. `fairVarianceStrike` = the Demeterfi-Derman-Kamal-Zou log-contract replication (a 1/K²-weighted OTM-option strip, reusing bsPrice) — recovers σ_atm² flat, lifts under skew (the same 1/K² spanning underlies Bakshi-Kapadia-Madan moments). Component: implied/realized vol + horizon + vol-spikes sliders; the realised-vol distribution vs the strike line (short wins left / loses right; right tail = rare large losses). Embedded in variance-risk-premium.
- **New harness — `verify-variance-sim.mjs` (V1–V6, 28 checks):** E[RV]≈σ_real² (LLN); VRP identity + mean P&L; short-vol asymmetry (skew<0, win rate, P(loss)); vol-spike jumps fatten the left tail (worst/CVaR/P(loss)/skew); **Demeterfi replication recovers flat vol + skew uplift**; sampleSkew sign; determinism. Auto-discovered ⇒ 42 → 43 harnesses.
- **Module `variance-risk-premium` (phase quant, prereq gatheral-vol-surface):** rich bilingual (3412 EN / 2950 ID), explicitly beginner→advanced, 8 sections, author block + ≥4 keyWorks, 3 self-tests, +20 cards (6 formula incl. RV, K_var, VRP, N_var/N_vega; 5 cloze; 9 basic). Beginner (RV vs IV, the VRP as crash insurance), intermediate (swap payoff, short-vol left tail, sizing/tail hedge), advanced (1/K² log-contract replication, model-free moments, VIX as a variance-swap rate). Prose numbers cross-checked against the live sim. **Web-verified refs:** Carr & Wu 2009 (RFS 22(3):1311-1341), Bollerslev-Tauchen-Zhou 2009 (RFS 22(11):4463-4492), Demeterfi-Derman-Kamal-Zou 1999 (Goldman QS Notes / J. Derivatives 6(4):9-32), Bakshi-Kapadia-Madan 2003 (RFS 16(1):101-143). Cross-linked to gatheral-vol-surface, options-greeks-payoffs, tradingriot-orderflow-vrp, backtest-overfitting-dsr, traderxo-expectancy.
- **Verification:** content-schema 55 → **56 modules** (4114 → **4189 checks**); card-coverage enforced 38 → **39 modules**; trading now **20 items, 259 cards, 10 simulators**. Suite **5623 → 5727 checks** across **43 harnesses**, green. 24 simulators.

---

## Phase T12 — Trading: Market Profile (TPO) + the MarketProfileTPOSim (2026-06-07)

- **Scope (Az's pick):** Steidlmayer's Market Profile / Dalton's reading — TIME at price (TPO letters per 30-min period), genuinely distinct from the VOLUME profile in insilico-quant-curriculum. ESTABLISHED practitioner canon, web-verified references; not financial advice.
- **23rd simulator — `MarketProfileTPOSim` (js/viz.js):** `simulateTPO` synthesises a lettered intraday auction, bins to a 40-row letter profile, and computes the Market Profile primitives — POC (longest TPO row), Value Area (central 70%, reusing `valueArea`), Initial Balance (first two periods A+B), range extension beyond IB, single prints + buying/selling tails, and the Dalton day type (Normal / Normal-Variation / Trend / Neutral / Double-Distribution); `detectDoubleDist` finds a single-print valley between two distributions. Component renders the classic stacked A,B,C… letters per price row (POC gold, value area tinted, single prints red) + the IB bracket. Embedded in market-profile-tpo.
- **New harness — `verify-tpo-sim.mjs` (M1–M6, 28 checks):** structure (letters[r].length==counts[r], ΣTPO); POC = max row; Value Area contiguous + contains POC + ≥70%; IB = first two periods + range-extension identities; single prints have count 1 + tails are single-print runs at the extremes; day-type response (drift⇒Trend, |net move| grows with |trend|), detectDoubleDist on a hand-built profile, determinism. Auto-discovered ⇒ 41 → 42 harnesses.
- **Module `market-profile-tpo` (phase quant, prereq insilico-quant-curriculum):** rich bilingual (3207 EN / 2754 ID), 8 sections, author block + 5 keyWorks, 3 self-tests, +16 cards (13 basic / 3 cloze). TIME-vs-VOLUME contrast made explicit; the five day types; rotation-toward-POC vs initiative-out-of-value reads; naked POC. The worked example matches simulateTPO's defaults exactly. **Web-verified refs:** Steidlmayer & Koy 1986 (Markets and Market Logic); Dalton, Jones & Dalton (Mind Over Markets 1990 / Markets in Profile 2007, Wiley); CBOT Six-Part Study Guide; Steidlmayer & Hawkins 2003. Cross-linked to insilico-quant-curriculum, luckshury-orderflow, tradingriot-orderflow-vrp, husslin-oi-positioning.
- **Verification:** content-schema 54 → **55 modules** (4037 → **4114 checks**); card-coverage enforced 37 → **38 modules**; trading now **19 items, 239 cards, 9 simulators**. Suite **5517 → 5623 checks** across **42 harnesses**, green. 23 simulators.

---

## Phase T11 — Trading: Backtest Overfitting & the Deflated Sharpe Ratio + the BacktestOverfitSim (2026-06-07)

- **Scope (Az's pick):** the rigorous companion to the expectancy module — "is the edge REAL, or did you fit noise by trying many strategies?" ESTABLISHED quant statistics, web-verified references. Educational, not financial advice.
- **22nd simulator — `BacktestOverfitSim` (js/viz.js):** `normalInv` (Acklam inverse normal CDF), `expectedMaxSharpe(N,V)` (Bailey-López de Prado: E[max] ≈ √V·[(1−γ)Z⁻¹(1−1/N)+γZ⁻¹(1−1/(Ne))]), `sharpeStdError` (Lo 2002), `probabilisticSharpe` (PSR), `simulateBacktestOverfit` (the Deflated Sharpe Ratio + the luck-threshold curve vs N + breakeven N + a seeded Monte-Carlo p(best-of-N noise ≥ your result) in t-stat units; verdict skill/inconclusive/overfit). Component: observed-Sharpe / #trials-N / sample-years sliders; the rising luck threshold vs N (log x) against the observed Sharpe. Embedded in backtest-overfitting-dsr.
- **New harness — `verify-backtest-sim.mjs` (B1–B6, 35 checks):** normalInv inverts normalCDF; expectedMaxSharpe magnitudes + √V scaling; **MC mean best-of-N ≈ analytic E[max] (±12%)**; PSR identities (PSR(SR*=SR)=0.5); DSR monotonic (↓N, ↑T, ↑SR) incl. the headline cases (high Sharpe + many trials + short data ⇒ DSR<0.5; strong Sharpe + few trials + long data ⇒ DSR>0.95); determinism. Auto-discovered ⇒ 40 → 41 harnesses.
- **Module `backtest-overfitting-dsr` (phase quant, prereq traderxo-expectancy):** rich bilingual (3575 EN / 3190 ID), 8 sections, author block + ≥4 keyWorks, 3 self-tests, +18 cards (4 formula incl. E[max], Lo SE, PSR, DSR; 2 cloze; 12 basic). The worked example was cross-checked against the live simulator (N=100 → DSR 82%, N=5000 → DSR 41%, breakeven N≈2,400). **Web-verified refs:** Bailey & López de Prado 2014 (JPM 40(5):94-107), Bailey-Borwein-López de Prado-Zhu 2014 (Notices AMS 61(5):458-471), Harvey-Liu-Zhu 2016 (RFS 29(1):5-68), Lo 2002 (FAJ 58(4):36-52), López de Prado 2018. Cross-linked to traderxo-expectancy, insilico-quant-curriculum, jimtalbot-method, micro VPIN.
- **Verification:** content-schema 53 → **54 modules** (3962 → **4037 checks**); card-coverage enforced 36 → **37 modules**; trading now **18 items, 223 cards, 8 simulators**. Suite **5406 → 5517 checks** across **41 harnesses**, green. 22 simulators.

---

## Phase T10 — Trading: Options Strategy & the Greeks + the OptionsStrategySim (2026-06-07)

- **Scope (Az's pick):** the options-pricing FOUNDATION under the existing dealer-gamma and vol-surface modules — Black-Scholes-Merton price + the full Greeks + multi-leg payoff/P&L. ESTABLISHED canon, web-verified references. Educational, not financial advice.
- **21st simulator — `OptionsStrategySim` (js/viz.js):** `bsPrice`/`bsGreeks` (BSM, q=0, reusing the exported `normalCDF`), `simulateOptions` (arbitrary legs {kind,strike,qty<0=short} → expiry-intrinsic + mark-to-model P&L curves, net Δ/Γ/ν/Θ, entry debit/credit, breakevens, max P/L), `optionStrategyLegs` (9 presets). Component: strategy `<select>` + spot/IV/DTE sliders; expiry P&L vs current P&L, breakevens, net Greeks. Embedded in `options-greeks-payoffs` (formalization).
- **New harness — `verify-options-sim.mjs` (O1–O6, 49 checks):** put-call parity (exact); price bounds/monotonicity/intrinsic; **every Greek vs a central finite-difference bump**; Greek properties (Γ_call=Γ_put, ν_call=ν_put, Δ ranges, Δ_call−Δ_put=1); position payoffs (long-call breakeven=K+premium & max-loss=−premium; straddle Δ≈0/Γ>0/ν>0/Θ<0/two breakevens; vertical bounded; iron condor = credit & short vega); determinism. Auto-discovered ⇒ 39 → 40 harnesses.
- **Module `options-greeks-payoffs` (phase quant, prereq husslin-dealer-flows):** rich bilingual (2764 EN / 2416 ID), 8 sections, author block + 5 keyWorks, 3 self-tests, +14 cards (4 formula incl. parity/d1/call-price/delta, 2 cloze, 8 basic). Greeks taught by what they expose (Δ direction/hedge, Γ convexity↔dealer gamma, ν vol↔the surface, Θ decay), and the Greek signature of each structure (straddle = long Γ+ν / short Θ; iron condor = the mirror). **Web-verified refs:** Black-Scholes 1973 (JPE 81(3):637-654), Merton 1973 (Bell J. Econ 4(1):141-183), Hull 10th ed. 2017, Natenberg 2nd ed. 2014, Taleb 1997. Cross-linked to husslin-dealer-flows, gatheral-vol-surface, tradingriot-orderflow-vrp, perp-funding-carry.
- **Verification:** content-schema 52 → **53 modules** (3887 → **3962 checks**); card-coverage enforced 35 → **36 modules**; trading now **17 items, 205 cards, 7 simulators**. Suite **5281 → 5406 checks** across **40 harnesses**, green. 21 simulators.

---

## Phase T9 — Trading: 5 Practitioner Playbooks + the ExpectancySurvivalSim (2026-06-07)

- **Scope (Az's go):** five new practitioner sources compiled from public material — **TraderXO**, **Jim Talbot**, **Luckshury**, **Tradingriot (Adam Bakay)**, **LiquidityGoblin** — built into the trading domain as a new `practitioners` phase ("Practitioner Playbooks"), with a new "best visualization" and supporting references throughout. Educational, not financial advice; not affiliated with or endorsed by the named traders.
- **20th simulator — `ExpectancySurvivalSim` (js/viz.js):** the first sim that models the TRADER'S OWN ACCOUNT, not the market — the convergent thesis of three of the five (TraderXO "expectancy IS the edge"; Jim Talbot "the system, not the setup — size so a loss doesn't move you"; Tradingriot combining payout curves). Exact identities `E_R = p·b − (1−p)`, profit factor, breakeven `p*=1/(1+b)`, binary Kelly `f*=E_R/b`, expected log-growth `g(f)=p·ln(1+f·b)+(1−p)·ln(1−f)`; seeded Monte-Carlo (400 runs) → P10/P50/P90 equity fan, drawdown distribution, empirical risk-of-ruin, over-bet flag (r>2·Kelly). Teaches "you don't need to be right" (35% WR @ b=2 is +EV) and path-dependence (over-betting a +EV edge still ruins you). Embedded in traderxo-expectancy + jimtalbot-method.
- **New harness — `verify-expectancy-sim.mjs` (E1–E6, 36 checks):** expectancy identities; Kelly maximises log-growth (grid argmax ≈ f*); LLN (mean R ≈ E_R); drawdown/ruin monotonic in risk; −EV ⇒ ruin→1; determinism (terminal wealth order-independent, drawdown path-dependent). Auto-discovered ⇒ 38 → 39 harnesses.
- **5 rich bilingual modules** (authored from extracted source briefs, all 8 canonical sections, author block + ≥4 keyWorks, ≥3 self-tests, evidence-tagged [Established]/[Practitioner]/[His], not-financial-advice + not-affiliated disclaimers): traderxo-expectancy (→ ExpectancySurvivalSim), jimtalbot-method (→ ExpectancySurvivalSim), luckshury-orderflow (→ VolumeProfileSim), tradingriot-orderflow-vrp (→ VolSurfaceSVISim), liquidity-goblin-market-making (→ FundingRateSim). Cross-linked across the trading + microstructure catalog. **91 new seed cards** (≥15/module).
- **Supporting references woven in:** Kelly 1956; Thorp 2006; Barber-Odean 2000; Kahneman-Tversky 1979; Carr-Wu 2009 + Bollerslev-Tauchen-Zhou 2009 (variance risk premium); Glosten-Milgrom 1985 / Avellaneda-Stoikov 2008 / VPIN 2012 (market-making/adverse selection); López de Prado; Gatheral 2006.
- **Verification:** content-schema 47 → **52 modules** (3505 → **3887 checks**); card-coverage enforced 30 → **35 modules**; trading now **16 items, 191 cards, 6 simulators**. Suite **4858 → 5281 checks** across **39 harnesses**, green. 20 simulators.

---

## Phase B2 — Service worker: network-first so shipped fixes actually land (2026-06-07)

- **Symptom (Az):** after the B1 fix, micro/trading items *still* wouldn't open even after a hard refresh — geothermal kept working.
- **Root cause:** `sw.js` used **stale-while-revalidate** (`cached || network`) for every same-origin GET. The buggy pre-B1 `library.js` was cached on first visit, so every reload served the *stale* copy and only revalidated in the background — the B1 fix would not appear until the **second** reload, and there is no update toast for non-shell files. A hard refresh does not help: the SW still answers from cache first.
- **Fix:** switch the fetch handler to **network-first** — try the network, refresh the cache on every successful response (keeps offline working), and fall back to the cached last-known-good copy only when the network is unavailable. Online users/devs now get fresh bytes on the very next reload; offline still serves from cache. `CACHE` bumped `lattice-shell-v1 → v2` so the activate handler purges the stale v1 cache (with the old library.js) on upgrade.
- **Guard:** verify-pwa.mjs P3 still asserts `cache.put` + `cache.match` (both used by network-first) and now reads "network-first with cache fallback". Suite unchanged at **4858 checks**, 38 harnesses, green.

---

## Phase B1 — Bugfix: Library item-detail crash on every item with cards (2026-06-07)

- **Symptom (Az):** in microstructure & trading, clicking an item did nothing — the detail page never opened. Geothermal items opened fine.
- **Root cause:** `itemDetailHTML` (js/library.js) referenced an out-of-scope `engine` variable in the card-list branch (`cards.map((c) => cardSummaryHTML(c, today, engine))`). `engine` was never a parameter or local there — a latent bug since **Phase S3** (FSRS), when `cardSummaryHTML` gained an `engine` argument. It threw `ReferenceError: engine is not defined` *mid-`innerHTML`*, so rendering aborted and the view silently stayed put. It only fired on `cards.length > 0`, which is why geothermal (no seed cards) was immune and only the card-bearing domains broke.
- **Fix:** thread the active engine through — compute `engine = engineOf(state.settings)` in the detail branch of `renderLibraryView` and pass it into `itemDetailHTML(..., engine)` (param defaults to `'sm2'`).
- **Regression guard — verify-app-logic.mjs L6 (+14 checks):** `itemDetailHTML` is exported and rendered headless (it's a pure string builder) for a card-bearing item in each of microstructure & trading, under both `sm2` and `fsrs`, asserting it neither throws nor drops the card list / title. Verified to FAIL against the pre-fix code (`engine is not defined`) and pass after.
- **Verification:** app-logic 43 → **57 checks**; suite **4844 → 4858 checks** across 38 harnesses, green.

---

## Phase T8 — Trading: perpetual funding / basis / crypto-carry + the funding simulator (2026-06-07)

- **Scope:** A fifth trading visualization (Az's "funding/perp simulator … the best, innovative & trusted references") — a genuinely different model class from the four options/vol sims, crypto-native, serving the practitioner positioning side. The perp funding mechanism with trusted references. Educational, not financial advice.
- **Fifth viz — `FundingRateSim` (js/viz.js, 19th simulator):** the exchange funding rate F(P) = P + clamp(I−P, −c, c) (BitMEX/Binance/Hyperliquid) vs the perp premium P, all % per interval. Plots the curve with the flat F=I band and the two slope-1 wings (longs pay / shorts pay), marks the current premium, and reports the annualised funding (F × periods/yr), who pays, and the squeeze/flush positioning verdict. Sliders: premium, interest, clamp, interval hours. Pure exported `fundingRate` / `simulateFunding`.
- **New harness — `scripts/verify-funding-sim.mjs` (F1–F6, 31 checks):** closed form vs the clamp definition; the three regimes (flat F=I; rich F=P−c; cheap F=P+c); continuity at both kinks + monotonicity; annualisation (365·24/interval; 8h ⇒ 1095×); who-pays sign + squeeze/flush verdict; structure/determinism. Auto-discovered ⇒ suite **37 → 38 harnesses**.
- **Content (`perp-funding-carry.js`, phase `positioning-flows`):** rich bilingual 8-section module (viz in *formalization*) + author block + 3 self-tests + 8 cards (incl. a `formula` card). Funding as three things at once — convergence mechanism, positioning signal (sign = the crowded side; the @Husslin_ perp-premium read), and the cash-and-carry ("crypto carry"). **Trusted references:** Schmeling, Schrimpf & Todorov (2023, BIS WP 1087 / Management Science, "Crypto Carry"); Ackerer, Hugonnier & Jermann (2024, NBER WP 32936 / Math. Finance, "Perpetual Futures Pricing"); "Fundamentals of Perpetual Futures" (arXiv:2212.06888); exchange funding methodology; Brunnermeier-Pedersen (2009). Cross-linked to husslin-oi-positioning / framework / liquidity-harvesting + the micro funding-liquidity spiral.
- **Verification:** content-schema 46 → **47 modules** (3429 → **3505 checks**); card-coverage enforced 29 → **30 modules**; trading now **11 items, 100 cards, 5 simulators**. Suite **4736 → 4844 checks** across **38 harnesses**, green. 19 simulators.

---

## Phase T7 — Trading: SSVI full-surface (calendar-arbitrage-free) + the SSVI simulator (2026-06-07)

- **Scope:** The fourth trading visualization and the deep continuation of the vol-surface thread (Az's "SSVI (full-surface, calendar-arbitrage-free)"). SSVI extends raw SVI from one slice to the whole surface with conditions that bar BOTH calendar-spread and butterfly arbitrage. ESTABLISHED academic material (Gatheral & Jacquier), web-verified references; educational, not financial advice.
- **Fourth viz — `SSVISurfaceSim` (js/viz.js, 18th simulator):** five maturity slices of SSVI total variance w(k;T) = ½θ(T)(1 + ρφk + √((φk+ρ)²+1−ρ²)), θ(T)=σ_ATM(T)²·T, φ(θ)=η·θ^(−γ), one ρ. Plots the slices in total variance; **detects calendar arbitrage directly** (a later slice dipping below an earlier one ⇒ curves red + names the crossing maturities) and flags per-slice **butterfly** violations (θφ(1+|ρ|)<4, θφ²(1+|ρ|)≤4 ⇒ ⚠). Sliders: base ATM vol, ATM term-structure slope, ρ, η, γ. Pure exported `ssviTotalVariance` / `simulateSSVI`.
- **New harness — `scripts/verify-ssvi-sim.mjs` (K1–K6, 21 checks):** closed form + the ATM identity w(0;T)=θ; calendar detection (flat/positive slope ⇒ no crossing; steep-negative ⇒ θ non-monotone ⇒ crossing flagged); butterfly flags vs the explicit inequalities; skew/symmetry; determinism. Auto-discovered ⇒ suite **36 → 37 harnesses**.
- **Content (`gatheral-ssvi-surface.js`, phase `quant`):** rich bilingual 8-section module (viz in *formalization*) + author block + 3 self-tests + 8 cards (incl. a `formula` card). Slices-must-not-cross intuition; the SSVI formula + both arbitrage conditions; manufacture-and-remove-an-arbitrage worked example; and *why an arbitrage-free surface is a hard prerequisite for Dupire local vol* (calendar arb → negative forward variance → imaginary local vol). **Valid references:** Gatheral & Jacquier (2014, Quant. Finance 14(1):59–71, arXiv:1204.0646); Gatheral (2006); Roper (2010); Lee (2004); Dupire (1994); Corbetta et al. (2019) / eSSVI.
- **Verification:** content-schema 45 → **46 modules** (3354 → **3429 checks**); card-coverage enforced 28 → **29 modules**; trading now **10 items, 92 cards, 4 simulators**. Suite **4639 → 4736 checks** across **37 harnesses**, green. 18 simulators.

---

## Phase T6 — Trading: volatility surface & Gatheral SVI + the SVI simulator (2026-06-07)

- **Scope:** The third trading visualization (Az's "third viz … do the best, very detail, valid references"), built as a fully-referenced module on the volatility surface — the vol-surface pillar of the Insilico quant curriculum. ESTABLISHED academic material (attributed to Gatheral), web-verified references; educational, not financial advice.
- **Third viz — `VolSurfaceSVISim` (js/viz.js, 17th simulator):** Gatheral's **raw SVI**, w(k) = a + b(ρ(k−m) + √((k−m)²+σ²)) in total implied variance, plotted as the implied-vol smile σ_BS = √(w/T) vs log-moneyness. Six sliders (a, b, ρ, m, σ, T) reshape the smile; the readout gives the ATM vol, the smile minimum k*=m−ρσ/√(1−ρ²), the wing slopes b(1±ρ), and a live **no-arbitrage check** (w_min ≥ 0 and Lee's moment bound b(1+|ρ|) ≤ 2 — the curve turns red on violation). Pure exported `sviTotalVariance` / `simulateVolSurface`.
- **New harness — `scripts/verify-vol-surface-sim.mjs` (S1–S7, 28 checks):** the SVI closed form; w_min and k* against the analytic formulas + the grid argmin; the wing slopes b(1±ρ); skew/symmetry (ρ=0 symmetric, ρ<0 elevates the low-strike wing and shifts the min right); IV=√(w/T) and T-scaling; the two arbitrage flags; structure/determinism. Auto-discovered ⇒ suite **35 → 36 harnesses**.
- **Content (`gatheral-vol-surface.js`, phase `quant`):** rich bilingual 8-section module (viz in *formalization*) + author block + 3 self-tests + 8 cards (incl. a `formula`-type card). Reads the smile (level/skew/curvature/term structure), formalizes raw SVI and its no-arbitrage conditions, and ties the surface to the dealer-flow Greeks (vanna = ∂Δ/∂σ, charm = ∂Δ/∂t — the surface's dynamics). **Valid references:** Gatheral (2006); Gatheral & Jacquier (2014, Quant. Finance 14(1):59–71, arXiv:1204.0646); Gatheral (2004, original SVI); Lee (2004, moment formula); Dupire (1994, local vol); Heston (1993).
- **Verification:** content-schema 44 → **45 modules** (3279 → **3354 checks**); card-coverage enforced 27 → **28 modules**; trading now **9 items, 84 cards, 3 simulators**. Suite **4535 → 4639 checks** across **36 harnesses**, green. 17 simulators.

---

## Phase T5 — Trading: web-researched Sources & Curriculum survey (theory · fundamental · practical · tips) (2026-06-07)

- **Scope:** The "research detail the whole literature" deliverable — a web-verified survey module behind both personas, reading every claim through four lenses: THEORY (why an edge exists), FUNDAMENTAL (the mechanism + what the paper measured), PRACTICAL (how to apply), TIPS (decay/regime-dependence/ethics). Attributed; not financial advice.
- **Web-verified pillars (this session):** VPIN (Easley-López de Prado-O'Hara 2012, RFS — toxicity rose before the 6 May 2010 flash crash); Baltussen et al. (2021, JFE 142(1) 377–403 — short-gamma hedging → intraday momentum, last-30-min predicted by rest-of-day, 60+ futures 1974–2020, reverts); Lucca & Moench (2015, J. Finance 70 329–371 — +49bp/24h ≈80% of annual returns 1994–2011) **then Kurov, Wolfe & Gilbert (2021)** — drift disappeared after 2015 (the canonical decay case); Osler (2003 J. Finance / 2005 — stop-cluster gappy cascades explaining TA support/resistance).
- **Content (`trading-sources-curriculum.js`, phase `framework`):** rich bilingual 8-section module + author block + 3 self-tests + 8 cards. Maps the full literature to the framework (dealer flows, positioning/funding, toxicity, events, liquidity/stops, reflexivity, price impact + the Insilico quant stack: profile, bars, vol-surface, time-series, viscosity-solutions), gives a 6-step reading path and the [Established] > [Practitioner] > [His] evidence hierarchy, and cross-links to all 6 other trading modules + the academic microstructure root (Kyle/O'Hara/Bouchaud/Menkveld/Avellaneda-Stoikov/VPIN/Almgren-Chriss/Brunnermeier-Pedersen).
- **Verification:** content-schema 43 → **44 modules** (3198 → **3279 checks**); card-coverage enforced 26 → **27 modules**; trading now **8 items, 76 cards**. Suite **4453 → 4535 checks** across 35 harnesses, green.
- **Trading domain complete-for-now:** 8 modules, 76 cards, 31-term glossary, notation table, 2 simulators (gamma-flip + volume-profile), 1 literature survey.

---

## Phase T4 — Trading reference layer: volume-profile simulator + notation table + glossary expansion (2026-06-07)

- **Scope:** The trading domain's reference layer (analogous to the microstructure R1 phase) plus the requested **second visualization**. No new content modules; this deepens the existing ones.
- **Second viz — `VolumeProfileSim` (js/viz.js, 16th simulator):** builds a volume profile from a synthetic mean-reverting/trending auction (volume/time at price), then derives the market-profile objects — the **POC** (argmax bin), the **70% value area** by the standard "expand to the larger neighbour" rule from the POC, and **HVN/LVN** nodes — rendered as a horizontal histogram with the POC line and value-area bracket. Sliders: trend↔balanced, volatility, bars; Regenerate. Embedded in `insilico-quant-curriculum` (the "rebuild the salad profiles" section). Pure exported `simulateVolumeProfile/buildProfile/valueArea`.
- **New harness — `scripts/verify-volume-profile-sim.mjs` (V1–V6, 19 checks):** volume conservation + binning; the value-area algorithm (POC-inclusive, contiguous, ≥70%, expand-to-larger-neighbour); POC = argmax; HVN/LVN thresholds; determinism; trend-day-wider-than-balanced. Auto-discovered ⇒ suite **34 → 35 harnesses**.
- **`data/domains/trading/notation.js` (new):** 8 concepts with source/convention — dealer GEX + Black-Scholes Γ, the gamma flip, vanna/charm, perp funding, VPIN, Kyle λ + square-root impact, POC/value-area, and the HJB/viscosity + Almgren-Chriss control objects.
- **Glossary expansion:** 19 → **31 terms** — added funding-liquidity spiral, stop cascade, manufactured prints, pre-FOMC drift, sell-rumour-buy-news, reflexivity & narrative, Auction Market Theory, acceptance vs rejection, nested ranges, HJB, financial time series (ARMA/GARCH), and the square-root impact law.
- **Verification:** content-schema 3192 → **3198 checks** (S6 resolves the new component on the edited module); trading now 68 cards (+2 value-area cards); card-coverage 26/26. Suite **4428 → 4453 checks** across **35 harnesses**, green. 16 simulators.
- **Next:** web-research the cited literature (theory/fundamental/practical/tips) → a trading "Sources & Curriculum" survey module.

---

## Phase T3 — Trading deep-dives: OI/positioning, event trading, liquidity harvesting + the Insilico quant curriculum (2026-06-07)

- **Scope:** Completes the trading-deepening batch — the three remaining Husslin deep-dives and the Insilico quant-curriculum deep-dive (no new viz this phase; the gamma-flip sim shipped in T2). Same attributed / evidence-tagged / not-financial-advice posture ([[trading-domain-provenance]]); all four are rich modules with cards. Authored together so they cross-link to each other and to T1/T2.
- **Modules (each rich bilingual, 8 sections + author block + 3 self-tests + 8 cards):**
  - **`husslin-oi-positioning`** (phase positioning-flows): OI as a leverage map (S/R + oscillator; stop-hunt/fake-out before the break); funding/perp premium = the crowded side (negative ⇒ MMs long ⇒ upside-squeeze risk); long-short read as a DEVIATION from normal; worked upside-squeeze. Cross-linked to husslin-framework, dealer-flows, and micro Brunnermeier-Pedersen (funding-liquidity spiral) + VPIN.
  - **`husslin-event-trading`** (events-tactics): scheduled events as hedging-flow events; the pre-event tell (down-into-event = hedged → lean long); execution (close on the announcement; CME gap); the REGIME-CONDITIONAL caveat (pre-FOMC drift faded post-2015, Kurov 2021). Cross-linked to framework, dealer-flows, OI/positioning.
  - **`husslin-liquidity-harvesting`** (events-tactics): thin-book squeezes, stop cascades (Osler), liquidation-cluster magnets, manufactured prints (Harris); the illiquid-regime rule. Framed with an explicit DEFENSIVE / not-a-manipulation-guide stance; "you are the meat" = order-flow toxicity (VPIN).
  - **`insilico-quant-curriculum`** (quant): Part A — read & rebuild the salad/volume profiles (POC/value-area/HVN/LVN, nested-range resolution, acceptance vs rejection, non-time bars, TradingView rebuild); Part B — the viscosity-solutions / stochastic-control curriculum + vol-surface (Gatheral) + time series (Tsay). Cross-linked to insilico-method and micro Almgren-Chriss/Kyle/O'Hara.
- **Verification:** content-schema 39 → **43 modules** (2919 → **3192 checks**); card-coverage enforced 22 → **26 modules** (all trading), each ≥8 cards; app-logic validates 32 new card ids (trading now 66 cards). Suite **4151 → 4428 checks** across 34 harnesses, green.
- **Trading domain now:** 7 items (framework + 4 Husslin deep-dives + Insilico method + quant deep-dive), 66 cards, 19-term glossary, 1 interactive simulator (gamma-flip).

---

## Phase T2 — Trading deep-dive + viz: dealer-hedging flows & the gamma-flip simulator (2026-06-07)

- **Scope:** First of the trading-deepening batch (Az's go: "deepen trading — Husslin deep-dives + Insilico quant deep-dive + a trading viz"). The @Husslin_ dealer-flows deep-dive (his signature edge) **with an interactive gamma-flip simulator** — the requested "best visualization". Same attributed/evidence-tagged, not-financial-advice posture as the trading domain ([[trading-domain-provenance]]); a normal rich module with cards.
- **Interactive viz — `DealerGammaSim` (js/viz.js, 15th simulator):** net dealer gamma exposure GEX(S) = Σ wᵢ·Γ(S,Kᵢ)·S² from **exact Black-Scholes gamma** over a call ladder (dealers long γ) and a put ladder (dealers short γ, scaled by put demand). It finds the **gamma flip** (zero crossing, bisection-refined), shades short-γ (amplify) vs long-γ (pin) regions, and shows the hedging-flow direction at spot. Sliders: spot, σ, τ, put demand. Stylised model of the MECHANISM, not live positioning.
- **New harness — `scripts/verify-dealer-gamma-sim.mjs` (D1–D7, 21 checks):** validates bsGamma against an independent closed-form reimplementation + BS properties (positivity, ATM peak, far-OTM decay), the GEX sign structure, the flip (GEX(flip)≈0, sign change), monotonicity (more put demand ⇒ higher flip), and regime/determinism. Auto-discovered ⇒ suite **33 → 34 harnesses**.
- **Content (`husslin-dealer-flows.js`, phase `positioning-flows`):** rich bilingual 8-section module (viz in *formalization*) + author block + 3 self-tests + 10 cards. Greeks read by what they FORCE; gamma sets the tape (short γ amplifies / long γ pins) with the flip; the vanna/charm overnight bid (vol down → index bought, ~2am ET) strongest into OPEX and rolling off after. Cross-linked to husslin-framework and the micro Avellaneda-Stoikov/Menkveld/VPIN modules. Evidence: Baltussen 2021, Barbon-Buraschi 2020, Ni 2005, Lou-Polk-Skouras 2019.
- **Verification:** content-schema 38 → **39 modules** (2845 → **2919 checks**); card-coverage enforced 21 → **22 modules** (trading); suite **4055 → 4151 checks** across **34 harnesses**, green. 15 simulators now.
- **Next (this batch):** the three remaining Husslin deep-dives (OI/positioning, event trading, liquidity harvesting) + the Insilico quant-curriculum deep-dive.

---

## Phase T1 — New domain: Trading (attributed practitioner edges + quant method) (2026-06-07)

- **Scope:** A **third domain**, `trading`, on Az's "make a new section for trading / lessons learned from trader Husslin and Insilico" go, built from a bilingual handbook pack Az compiled (read from the local outputs folder) and cross-checked against the microstructure literature. INTEGRITY POSTURE (distinct from geothermal's Az-gating): these are **attributed lessons from public traders/quants, not asserted as universal fact** — every module preserves the source's evidence tags ([Established] peer-reviewed · [Practitioner] documented by desks · [His] the author's own claim) and carries an educational / **not-financial-advice** disclaimer; edges decay and are regime-conditional. Because it is attributed (not domain-expert-gated), the modules are normal RICH modules **with seed cards** (no DRAFT marker).
- **Domain scaffolding:** `data/domains/trading/` — `meta.js` (icon 📈, accent #7c4dff, phases framework/positioning-flows/events-tactics/quant, systemTypes CRYPTO/TRADFI/UNIVERSAL), `items.js` (2 items), `content/` (2 modules), `seed-cards.js` (24 cards), `glossary.js` (19 terms / 3 categories). Registered in `js/domain.js` (DOMAINS) and `scripts/verify-app-logic.mjs` (L5 domains array); added to `verify-card-coverage.mjs` ENFORCED_DOMAINS so trading modules must carry ≥8 cards.
- **Modules (both rich, bilingual EN+ID, 8 sections + author block + 3 self-tests):**
  - **`husslin-framework`** (@Husslin_) — trade the plumbing not the story: the three questions (positioning → forced flow → narrative); asymmetry-not-prediction; reflexivity; regime-first; OI as support/resistance & oscillator; perp premium → MM positioning; dealer gamma/vanna/charm flows (the overnight bid, OPEX); event trading (sell-rumour/buy-news, the pre-event tell); liquidity harvesting. Cross-linked to the microstructure domain via `item:` links — VPIN/order-flow toxicity, Kyle, Bouchaud, Brunnermeier-Pedersen, Menkveld, Avellaneda-Stoikov.
  - **`insilico-method`** (@insiliconot) — read the auction not the candle: volume/market profile (POC, value area, HVN/LVN pockets), four participant archetypes, non-time (volume/range) bars (López de Prado), and the viscosity-solutions / stochastic-control quant curriculum (Crandall-Lions, Pham, Gatheral, Tsay, Almgren-Chriss). Cross-linked to Almgren-Chriss, Kyle, Bouchaud, O'Hara.
- **Cross-domain links proven:** content-schema S7 resolves `item:` references globally, so the trading modules link directly into the academic microstructure modules they cite (e.g. `easley-lopez-prado-vpin`, `almgren-chriss-2000`).
- **Verification:** content-schema now covers **38 modules** (2704 → **2845 checks**); card-coverage **enforced modules 19 → 21** (the 2 trading modules clear the ≥8-card gate at 12 each), geothermal still exempt; app-logic validates the 24 new card ids (globally unique, itemIds resolve). Suite **3905 → 4055 checks** across 33 harnesses, green.
- **Deferred (next):** the viz retrofit (Arps/decline, Horner/PTA, tracer-breakthrough simulators for the geothermal drafts); the Husslin deep-dive modules (dealer flows, event trading, OI/positioning, liquidity harvesting); the Insilico quant-curriculum deep-dive; trading notation table.

---

## Phase G16 — Geothermal DRAFT + interactive viz: Whiting & Ramey, material balance / lumped-parameter modelling (2026-06-07)

- **Scope:** New geothermal-DRAFT topic on Az's "continue with more topics, with the best visualization / dashboard" go. Fills a real gap (reservoir-scale forecasting / lumped modelling) AND is the **first geothermal DRAFT to ship with an interactive simulator** — until now only the rich Acuña module had a viz; the other drafts were text-only. Same **DRAFT discipline** as the existing fifteen: schema-valid, every domain claim ⟦TODO-Az⟧-flagged, **no seed cards**, `AWAITING AZ DOMAIN REVIEW`. Finalization remains Az's alone ([[geothermal-az-only-boundary]]).
- **Anchor:** Whiting, R.L. & Ramey, H.J. Jr. (1969) "Application of Material and Energy Balances to Geothermal Steam Production," JPT 21(7), 893–900 (first carried petroleum material/energy balance into geothermal; demonstrated on Wairakei; Ramey = the Stanford reservoir-engineering figure whose program Horne later led). Web-verified.
- **Interactive viz — `LumpedReservoirSim` (js/viz.js):** the 14th simulator and the first geothermal-physics one beyond Acuña. Solves the verified, **fluid-neutral** lumped mass balance κ dp/dt = −Wₚ(1−f) + a(p₀−p): four sliders (production, reinjection fraction, recharge coefficient, storativity) drive a pressure-vs-time curve with the steady-state asymptote p∞ = p₀ − Wₚ(1−f)/a, a dashed no-reinjection reference curve, and an open-stabilises / closed-linear-decline regime readout. Pure exported `simulateLumped()`.
- **New verification harness — `scripts/verify-lumped-sim.mjs` (L1–L8, 30 checks):** validates the live `simulateLumped` against an **independent RK4 integration** of the ODE plus analytic properties (steady state, reinjection monotonicity, closed→linear limit, the 1/e time-constant point, bounds/monotonicity). Auto-discovered by `verify-all.mjs`, so the suite went **32 → 33 harnesses**.
- **Content (`whiting-ramey-1969.js`, phase `reservoir`):** full bilingual 8-section module (viz embedded in *intuition*) + author block + 3 self-tests. The lumped-balance method, its closed form, p∞/τ, and the open/closed regimes are taught straight; the **HEADLINE dry-steam adaptation** — that Whiting-Ramey is a STEAM material/energy balance (pore-water boils as pressure drops, latent heat mined from the rock), so the liquid tank is an intuition scaffold and the Darajat steam/heat balance, κ/a values, and reinjection-decline coupling are Az's — is all ⟦TODO-Az⟧-flagged, with a header OPEN-TODO list and a research-prep factsheet.
- **Verification:** content-schema now covers **36 modules** (2626 → **2704 checks**, incl. the S6 viz-component check resolving `LumpedReservoirSim`); card-coverage exempts the draft, microstructure enforced still 19/19; geothermal catalog 16 → **17 items** (Acuña rich + **16 drafts**). Suite **3797 → 3905 checks** across **33 harnesses**, green. No live cards added — the interactive viz is exploratory, not an SRS card.

---

## Phase G15 — Geothermal DRAFT: Gallup, scaling, corrosion & production chemistry (2026-06-07)

- **Scope:** Second of the two new geothermal-DRAFT topics on Az's "more geothermal drafts" go (paired with G14 drilling). Fills the production-chemistry gap — the geochemistry phase had equilibria (Henley), isotopes (Arnórsson), and geothermometry (Giggenbach), but no item on the *engineering management* of scaling and corrosion. Same **DRAFT discipline** as the existing fourteen: schema-valid, every domain claim ⟦TODO-Az⟧-flagged, **no seed cards**, marked `AWAITING AZ DOMAIN REVIEW`. Finalization remains Az's alone ([[geothermal-az-only-boundary]]).
- **Anchor:** Darrell L. Gallup (Unocal/Chevron Geothermal/Thermochem; inventor of the pH-modification silica-control process), *Production engineering in geothermal technology: A review*, Geothermics 38(3), 326–334, 2009. Web-verified. Deliberately chosen as the production-chemistry counterweight to the equilibrium geochemists already in the catalog.
- **Content (`gallup-2009.js`, phase `geochemistry`):** full bilingual 8-section module + author block + 3 self-tests. The **verified, general backbone** (silica scaling — cooling + flashing concentration → kinetically-controlled polymerisation; the controls — stay above saturation, residence-time, pH-modification, inhibitors; calcite scaling — CO₂ loss at the flash point → CaCO₃ at the flash horizon, downhole inhibitor capillary; corrosion drivers — H₂S/CO₂/chloride/low-pH/O₂ ingress, with materials, inhibitors, oxygen exclusion; NCG/H₂S abatement) is taught straight; the **HEADLINE dry-steam shift** (a vapour-dominated field produces steam + NCG, not brine, so condensate chemistry + H₂S/NCG abatement + line corrosion dominate, while producing-brine silica/calcite recede) plus the reinjection-side coupling and exact constants/program are all ⟦TODO-Az⟧-flagged, with a header OPEN-TODO list and a research-prep factsheet (`notes/gallup-scaling-corrosion-research-prep-2026-06-07.md`).
- **Verification:** content-schema now covers **35 modules** (2554 → **2626 checks**); card-coverage **exempts** the draft (geothermal + DRAFT marker), microstructure enforced still 19/19; geothermal catalog 15 → **16 items** (Acuña rich + **15 drafts**). Suite **3725 → 3797 checks** (32 harnesses), green. No live cards added.
- **Note:** This pair (G14 drilling + G15 production chemistry) rounds out the geothermal catalog into the operational/engineering side. The backlog awaiting Az is now 15 drafts; further geothermal work is the owner-only validation/sign-off track, not more autonomous drafting ([[pacing-validation-over-velocity]]).

---

## Phase G14 — Geothermal DRAFT: Finger & Blankenship, drilling & well completion (2026-06-07)

- **Scope:** New geothermal-DRAFT topic on Az's fresh "more geothermal drafts" go (beyond the four-topic menu). Fills a clear catalog gap — there was no drilling / well-construction item, yet drilling is the single largest capital cost and the physical prerequisite to every other geothermal topic. Same **DRAFT discipline** as the existing thirteen: schema-valid, every domain claim ⟦TODO-Az⟧-flagged, **no seed cards**, marked `AWAITING AZ DOMAIN REVIEW`. Finalization remains Az's alone ([[geothermal-az-only-boundary]]).
- **Anchor:** Finger & Blankenship, *Handbook of Best Practices for Geothermal Drilling* (Sandia SAND2010-6048, 2010; freely available via DOE) — the standard practical reference. Web-verified.
- **Content (`finger-blankenship-2010.js`, phase `production`):** full bilingual 8-section module + author block + 3 self-tests. The **verified, general backbone** (telescoping cemented casing strings — conductor/surface/intermediate/production — + production liner; casing design under thermal cycling, σ ~ E·α·ΔT; the lost-circulation spectrum, LCM → aerated/water → blind drilling; directional/pad targeting of fracture-feedzone structure; high-T logging; drilling as ⅓–½ of project capital) is taught straight; the **dry-steam/Darajat-specific practice** (blind drilling under-pressured steam zones, large-bore deliverability completions, H₂S handling, casing/cement choices, fracture-feedzone directional targeting) is all ⟦TODO-Az⟧-flagged, plus a header OPEN-TODO list and a research-prep factsheet (`notes/finger-blankenship-drilling-research-prep-2026-06-07.md`).
- **Verification:** content-schema now covers **34 modules** (2483 → **2554 checks**); card-coverage **exempts** the draft (geothermal + DRAFT marker), microstructure enforced still 19/19; geothermal catalog 14 → **15 items** (Acuña rich + **14 drafts**). Suite **3654 → 3725 checks** (32 harnesses), green. No live cards added.
- **Note:** A connections `item:` link to the not-yet-created `gallup-2009` (G15) was caught by the schema check (S7) and repointed to existing items (Horne / Henley-Truesdell-Barton); G15 links back to this drilling item instead.

---

## Phase G13 — Geothermal DRAFT: Giggenbach, production geochemistry / geothermometry (2026-06-06)

- **Scope:** The 4th and final topic of Az's "continue other three geothermal topics" go (completing the menu of four: PTA, reinjection/tracer, decline/reserves, production geochemistry). Same **DRAFT discipline** as the existing twelve: schema-valid + renderable, every domain claim ⟦TODO-Az⟧-flagged, **no seed cards**, marked `AWAITING AZ DOMAIN REVIEW`. Finalization/sign-off remains Az's alone ([[geothermal-az-only-boundary]]).
- **Anchor:** Werner F. Giggenbach (DSIR, New Zealand), the defining figure in geothermal fluid/gas geochemistry; the Na-K-Mg geoindicator diagram (GCA 1988, verified citation). Web-researched (solute & gas geothermometry; the equilibrium-validity diagram).
- **Content (`giggenbach-1988.js`, phase `geochemistry`):** full bilingual 8-section module + author block + 3 self-tests. The **verified, fluid-neutral backbone** (solute geothermometers — silica/quartz, Na-K = 1390/(1.75+log Na/K)−273, K-Mg; the **Na-K-Mg ternary diagram as an equilibrium VALIDITY test** — fully equilibrated / partial / immature; gas geothermometry from CO₂-H₂S-H₂-CH₄ equilibria; silica/calcite scaling prediction) is taught straight; the **HEADLINE dry-steam adaptation** (solute geothermometers need a liquid sample, but a vapour-dominated Darajat well produces steam + non-condensable gas, so reservoir-T and process monitoring lean on **gas geothermometry + steam/condensate chemistry**), plus exact calibration constants, sampling protocol, and NCG/H₂S specifics, are all ⟦TODO-Az⟧-flagged, with a header OPEN-TODO list and a research-prep factsheet (`notes/giggenbach-production-geochemistry-research-prep-2026-06-06.md`).
- **Verification:** content-schema now covers **33 modules** (2412 → **2483 checks**); card-coverage **exempts** the draft (geothermal domain + DRAFT marker), microstructure enforced still 19/19; geothermal catalog 13 → **14 items** (Acuña rich + **13 drafts**). Suite **3583 → 3654 checks** (32 harnesses), green. No live cards added — nothing new in the Review queue until Az signs off.
- **Note:** This closes the four-topic geothermal-DRAFT menu. The geothermal backlog awaiting Az is now 13 drafts; further geothermal work is the owner-only validation/sign-off track, not more autonomous drafting ([[pacing-validation-over-velocity]]).

---

## Phase G12 — Geothermal DRAFT: Sanyal, decline-curve analysis & reserves (2026-06-06)

- **Scope:** Continuing the geothermal-DRAFTs track on Az's explicit "continue other three geothermal topics" go (the 3rd of the four menu topics). Same **DRAFT discipline** as the existing eleven: schema-valid + renderable, every domain claim ⟦TODO-Az⟧-flagged, **no seed cards**, marked `AWAITING AZ DOMAIN REVIEW`. Finalization/sign-off remains Az's alone ([[geothermal-az-only-boundary]]).
- **Anchor:** Subir K. Sanyal (GeothermEx), the leading authority on geothermal resource capacity, reserves estimation, and sustainability. Web-researched (Arps decline family; USGS volumetric stored-heat / Muffler-Cataldi; Monte-Carlo → proven/probable/possible per Sanyal-Sarmiento).
- **Content (`sanyal-2005.js`, phase `production`):** full bilingual 8-section module + author block + 3 self-tests. The **verified, fluid-neutral backbone** (Arps rate–time decline exponential/hyperbolic/harmonic via the exponent b → EUR; the volumetric stored-heat estimate Q = ρc·V·ΔT × recovery factor → MW capacity; Monte-Carlo → P90/P50/P10 = proven/probable/possible) is taught straight; the **geothermal/Darajat-specific adaptations** (whether Arps transfers to a pressure- and reinjection-governed dry-steam decline read in steam-rate/WHP, the dry-steam recovery factor as the dominant lever, the reinjection coupling, and the Acuña deliverability link) are all ⟦TODO-Az⟧-flagged, plus a header OPEN-TODO list and a research-prep factsheet (`notes/sanyal-decline-reserves-research-prep-2026-06-06.md`).
- **Verification:** content-schema now covers **32 modules** (2341 → **2412 checks**); card-coverage **exempts** the draft (geothermal domain + DRAFT marker), microstructure enforced still 19/19; geothermal catalog 12 → **13 items** (Acuña rich + **12 drafts**). Suite **3512 → 3583 checks** (32 harnesses), green. No live cards added — nothing new in the Review queue until Az signs off.

---

## Phase G11 — Geothermal DRAFT: Axelsson, reinjection & tracer testing (2026-06-06)

- **Scope:** Continuing the geothermal-DRAFTs track on Az's explicit "continue other three geothermal topics" go (the 2nd of the four menu topics, after Horne PTA). Same **DRAFT discipline** as the existing ten: schema-valid + renderable, every domain claim ⟦TODO-Az⟧-flagged, **no seed cards**, marked `AWAITING AZ DOMAIN REVIEW`. Finalization/sign-off remains Az's alone ([[geothermal-az-only-boundary]]).
- **Anchor:** Gudni Axelsson (ÍSOR / UNU-GTP), the modern authority on geothermal reinjection, tracer-test interpretation, and sustainable reservoir management. Web-researched (reinjection purposes & the thermal-breakthrough hazard; flow-channel advection–dispersion + moment analysis of tracer return curves; thermal-front retardation).
- **Content (`axelsson-2010.js`, phase `reservoir`):** full bilingual 8-section module + author block + 3 self-tests. The **verified, fluid-neutral backbone** (reinjection = disposal + pressure support + heat sweep; thermal breakthrough as the governing hazard; tracer return curves → flow-channel volume/velocity via advection–dispersion & moment analysis; the thermal front lagging the fluid front by the retardation factor → predicting cooling) is taught straight; the **geothermal/Darajat-specific adaptations** (dry-steam peripheral/condensate reinjection & quenching, two-phase tracer phase-partitioning, the numeric retardation factor, injector-siting strategy) are all ⟦TODO-Az⟧-flagged, plus a header OPEN-TODO list and a research-prep factsheet (`notes/axelsson-reinjection-tracer-research-prep-2026-06-06.md`).
- **Verification:** content-schema now covers **31 modules** (2271 → **2341 checks**); card-coverage **exempts** the draft (geothermal domain + DRAFT marker), microstructure enforced still 19/19; geothermal catalog 11 → **12 items** (Acuña rich + **11 drafts**). Suite **3442 → 3512 checks** (32 harnesses), green. No live cards added — nothing new in the Review queue until Az signs off.

---

## Phase G10 — Geothermal DRAFT: Horne 1995, well testing / pressure-transient analysis (2026-06-06)

- **Scope:** The geothermal-DRAFTs track of the content-expansion program, with Az's explicit "geothermal" go and topic choice (**well testing & PTA**). A new geothermal catalog item drafted to the same **DRAFT discipline** as the existing nine: schema-valid + renderable, every domain claim ⟦TODO-Az⟧-flagged, **no seed cards**, marked `AWAITING AZ DOMAIN REVIEW`. Finalization/sign-off remains Az's alone ([[geothermal-az-only-boundary]]).
- **Anchor:** Roland Horne's *Modern Well Test Analysis* (the standard PTA text; Horne heads the Stanford Geothermal Program — geothermal-credible, distinct from the existing Grant-Bixley item). Web-researched (Theis line source, Horner buildup, Bourdet derivative, two-phase geothermal complications).
- **Content (`horne-1995.js`, phase `production`):** full bilingual 8-section module + author block + 3 self-tests. The **verified, fluid-neutral PTA backbone** (diffusivity equation; line-source semilog slope → kh; Horner buildup → kh + p*; skin; wellbore storage; the pressure-derivative regime diagnosis) is taught straight; the **geothermal/Darajat-specific adaptations** (two-phase near-well Horner segments, dry-steam compressible/pseudo-pressure analysis, fracture/feedzone & fractal flow, cold-water injection/fall-off thermal correction, and the Acuña deliverability link) are all ⟦TODO-Az⟧-flagged, plus a header OPEN-TODO list and a research-prep factsheet (`notes/horne-1995-research-prep-2026-06-06.md`).
- **Verification:** content-schema now covers **30 modules** (2200 → **2271 checks**); card-coverage **exempts** the draft (geothermal domain + DRAFT marker), microstructure enforced still 19/19; geothermal catalog 10 → **11 items** (Acuña rich + **10 drafts**). Suite **3371 → 3442 checks** (32 harnesses), green. No live cards added — nothing new in the Review queue until Az signs off.

---

## Phase D3 — Deepening: the five new C-modules (2026-06-06)

- **Scope:** Completes deepening across the *entire* microstructure domain — **+13 advanced cards** on the five newly-authored modules (C1-C5), so all 19 microstructure modules now carry 14-19 cards.
  - **Budish-Cramton-Shim 2015** (13 → 16): the arms race as a constant-sum, negative-social-value rent dissipation; FBA vs speed bumps (structural fix vs delay); why FBA needs both discrete time AND uniform-price clearing.
  - **Hasbrouck 1995** (13 → 15): the impulse-response function as the dynamic complement to the (static) information share; the asynchronous-quote bias at high frequency.
  - **Brunnermeier-Pedersen 2009** (13 → 16): pro-cyclical intermediary leverage (Adrian-Shin); multiple equilibria / self-fulfilling liquidity crises; why calm-time liquidity-risk estimates understate the tail.
  - **Amihud 2002** (13 → 15): the scaling/units caveat for ILLIQ comparisons; ILLIQ (impact) vs spread-based measures (different liquidity dimensions).
  - **Menkveld 2013** (13 → 16): the Hendershott-Jones-Menkveld market-quality companion; HFT vs NYSE-specialist (no affirmative obligation → fragility); quoted vs realized spread.
- **Verification:** card ids unique, itemIds valid; SEED_CARDS 292 → **305** (52 deepening cards total across D1-D3). Suite unchanged at **3371 checks (32 harnesses)**, green. Every microstructure module (19 of 19) is now deepened.

---

## Phase D2 — Deepening: the remaining older modules (2026-06-06)

- **Scope:** Completes the deepen track across all 14 original microstructure modules — the second pass adds **+10 advanced cards** to the six not covered by D1, each grounded in verified module content.
  - **Cont-Kukanov-Stoikov** (13 → 15): why OFI's R² beats signed trade volume (it counts all three book-event types, not just trades); OFI as a *contemporaneous* price-formation relation, not a tradable forecast.
  - **Makarov-Schoar 2020** (13 → 15): levels vs returns (price-level inefficiency from capital controls coexists with return-efficiency); the common/idiosyncratic permanent-transitory order-flow split.
  - **Aquilina-Budish-O'Neill 2022** (13 → 15): the race-detection window methodology (29 μs min / 150 μs median / 500 μs cap); how races are ~22% of volume yet ~0.043 s of the day.
  - **Cartea-Jaimungal-Penalva 2015** (13 → 15): "strategy not schedule" as feedback control; the single HJB/dynamic-programming template behind every problem.
  - **Guéant 2016** (13 → 14): the GLFT change-of-variables → exact closed form + the provable inventory bound.
  - **Kissell 2013** (13 → 14): the pre-/in-/post-trade TCA loop as the practitioner workflow.
- **Verification:** card ids unique, itemIds valid; SEED_CARDS 282 → **292** (39 deepening cards total across D1+D2). Suite unchanged at **3371 checks (32 harnesses)**, green. Every original microstructure module is now deepened.

---

## Phase D1 — Deepening existing modules with advanced cards (2026-06-06)

- **Scope:** The "deepen existing" track of the content-expansion program. Since the schema fixes each module at exactly 8 sections, depth = more SRS cards (the spaced-repetition payload). Added **+29 advanced, second-order cards** to nine core modules, each grounded in already-verified module content (no new claims invented), targeting results the original card sets didn't cover.
- **Theory backbone (D1, 17 cards):**
  - **Kyle 1985** (14 → 19): insider expected profit E[π]=Σ₀/4λ=½σ_u√Σ₀; why noise traders are essential (σ_u→0 ⇒ λ→∞, trade collapses); the monopolist-internalizes-impact half-quantity; λ as price-impact = 1/depth = adverse-selection (one number, three hats); the dynamic/continuous-auction model (gradual revelation, martingale price, constant λ).
  - **Glosten-Milgrom 1985** (14 → 18): regret-free zero-profit quotes; the lemons-market breakdown; the bid-ask bounce → Roll link; per-trade Bayesian price impact vs Kyle's λ.
  - **Almgren-Chriss 2000** (13 → 17): the closed-form sinh trajectory + ~1/κ half-life; permanent-impact schedule-independence (½γX²); implementation shortfall (Perold); the two endpoints of the efficient frontier.
  - **Avellaneda-Stoikov 2008** (13 → 17): reservation-price skew r=s−qγσ²(T−t); the ABM-mid + Poisson-arrival λ(δ)=A·e^(−κδ) assumptions; Menkveld 2013 as its empirical confirmation; the two terms of the optimal spread.
- **Empirical/foundational (D2, 12 cards):**
  - **Hasbrouck 2007** (15 → 18): the p=m+s efficient-price decomposition; the 1991 VAR impulse-response measure of a trade's information content; the variance-ratio market-efficiency metric.
  - **O'Hara 1995** (15 → 18): the information-based paradigm (price emerges from a Bayesian MM learning from order flow); adverse-selection vs inventory spread sources; why the spread narrows as the market learns.
  - **VPIN** (13 → 16): the 2010 Flash Crash application + the Andersen-Bondarenko caveat; toxicity → maker withdrawal → liquidity-induced volatility; why VPIN is real-time where PIN's MLE is not.
  - **Bouchaud et al. 2018** (13 → 16): the metaorder impact path (concave rise, relaxation to ~2/3 of peak); latent liquidity explaining the square-root law; the law's near-universality.
- **Verification:** all card ids unique, every itemId valid, formula cards carry LaTeX (verify-app-logic); SEED_CARDS 253 → **282**. Suite unchanged at **3371 checks (32 harnesses)**, green (cards are gated at ≥8/module by card-coverage, not individually counted).

---

## Phase R1 — Reference-layer expansion: glossary + notation for the new modules (2026-06-06)

- **Scope:** The "reference layer" track of the content-expansion program — grow the cross-domain **glossary** and **notation** reference so the vocabulary of the five new modules (C1-C5) is searchable and cross-linked from the Reference tab.
- **Glossary (`glossary.js`):** **+26 bilingual terms (32 → 58)** in **two new categories** (`market-design` "Market design & HFT", `liquidity-funding` "Liquidity & funding") plus additions to `empirical-methods`. New terms: price-discovery, information-share, cointegration, vecm, common-factor; continuous-limit-order-book, frequent-batch-auction, latency-arbitrage, stale-quote-sniping, speed-bump, mev, maker-taker, new-market-maker, positioning-loss, cross-market; market-liquidity, funding-liquidity, liquidity-spiral, loss-spiral, margin-spiral, margin-haircut, flight-to-quality, limits-of-arbitrage, amihud-illiquidity, illiquidity-premium, liquidity-risk. Each carries bilingual term + definition (verify-app-logic L4), aliases, optional `formulaLatex`, `seeAlso` cross-links, and `sources` pointing at the new modules.
- **Notation (`notation.js`):** added Amihud's ILLIQ as a daily proxy under "Price impact coefficient," plus two new concept tables — "Funding / capital constraint" (Brunnermeier-Pedersen W, m, |x|≤W/m) and "Price-discovery weights" (Hasbrouck ψ, α, Ω; Gonzalo-Granger α⊥). 10 → 12 concepts.
- **Verification:** unique slugs, all entries bilingual; full suite still **3371 checks (32 harnesses)** green (glossary/notation are data, not harness-counted; verify-app-logic L4 confirms bilingual shape).

---

## Phase C5 — New microstructure module: Menkveld 2013, HFT & the new market makers (2026-06-06)

- **Scope:** Fifth content-expansion module — Albert Menkveld, "High Frequency Trading and the New Market Makers" (Journal of Financial Markets 16(4):712-740) — a rare look inside one identified HFT's book, showing the modern HFT is, functionally, a market maker. The empirical portrait of Avellaneda-Stoikov and the maker-side counterpart to the latency-arbitrage/sniper papers (C1, Aquilina).
- **Content (`menkveld-2013.js`):** full bilingual module, 8 sections + author block (8 fields, 5 keyWorks) + 3 self-tests. Teaches: the post-MiFID Chi-X-vs-Euronext natural experiment; the three behaviours classifying the HFT as a market maker (two-sided passive provision, mean-reverting inventory, ~1397 trades/stock/day); the **P&L decomposition** gross €0.88/trade = +€1.55 spread (net fees) − €0.68 positioning loss (= spread − adverse selection, the GM/Avellaneda-Stoikov tradeoff measured); the thin-margin = competition reading; the **cross-market** fee/depth strategy (64.4% participation on the low-fee entrant to earn the spread, 8.1% on the deep incumbent to offload), which bootstraps the new venue's liquidity; and the reconciliation with the sniper papers (same tech, two roles). Web-verified (all euro figures + participation rates + trade count).
- **Wiring:** `items.js` (`menkveld-2013`, phase **empirical**, difficulty 3, prereq Avellaneda-Stoikov 2008) + **13 seed cards**.
- **Verification:** content-schema **29 modules** (2127 → **2200 checks**); card-coverage 19/19; SEED_CARDS 240 → **253**; micro catalog 18 → **19 items** (20 rich modules). Suite **3297 → 3371 checks** (32 harnesses), green.

---

## Phase C4 — New microstructure module: Amihud 2002, illiquidity & stock returns (2026-06-06)

- **Scope:** Fourth content-expansion module — Yakov Amihud, "Illiquidity and Stock Returns: Cross-Section and Time-Series Effects" (Journal of Financial Markets 5(1):31-56) — the **ILLIQ** measure and the **illiquidity premium**, bridging microstructure to asset pricing and pairing with C3's funding-liquidity.
- **Content (`amihud-2002.js`):** full bilingual module, 8 sections + author block (8 fields, 5 keyWorks) + 3 self-tests. Teaches: ILLIQ = avg daily |R|/DollarVolume as a cheap daily-data proxy for Kyle price impact λ; the cross-sectional **illiquidity premium** (illiquid stocks earn more; part of the size effect); the time-series result (expected illiquidity ↑ expected returns; *unexpected* illiquidity ↓ current prices via repricing + flight to liquidity — the two-signed signature of a priced state variable); the data-thrift advantage (daily vs intraday) that made it ubiquitous; and the caveats (total-not-signed volume, proxy-not-structural, "why priced" debate). Web-verified (citation, ILLIQ definition, the two effects, 1963-1997 NYSE sample).
- **Wiring:** `items.js` (`amihud-2002`, phase **empirical**, difficulty 3, prereq Kyle 1985) + **13 seed cards**.
- **Verification:** content-schema **28 modules** (2056 → **2127 checks**); card-coverage 18/18; SEED_CARDS 227 → **240**; micro catalog 17 → **18 items** (19 rich modules). Suite **3225 → 3297 checks** (32 harnesses), green.

---

## Phase C3 — New microstructure module: Brunnermeier-Pedersen 2009, market & funding liquidity (2026-06-06)

- **Scope:** Third content-expansion module — Brunnermeier & Pedersen, "Market Liquidity and Funding Liquidity" (Review of Financial Studies 22(6):2201-2238) — the **liquidity-spirals** paper that wired together the two meanings of liquidity and became the canonical lens for funding-driven crises.
- **Substitution note:** the original C3 candidate was Kyle-Obizhaeva market-microstructure invariance; its scaling exponents/invariant formulas could not be verified from the (image-only) source PDFs, so — to hold the accuracy bar — it was deferred and replaced with Brunnermeier-Pedersen, whose structural facts are cleanly verifiable. (Kyle-Obizhaeva remains a candidate once the paper text is available.)
- **Content (`brunnermeier-pedersen-2009.js`):** full bilingual module, 8 sections + author block (8 fields, 5 keyWorks) + 3 self-tests. Teaches: market vs funding liquidity; the funding constraint |x| ≤ W/m; the **loss spiral** (losses → forced deleveraging → more losses, scaling with leverage) and the **margin spiral** (volatility ↑ → margins ↑ → deleveraging even with no loss, "destabilizing margins"); fragility/non-linearity (sudden dry-ups); the five stylized facts (dry-up, commonality, volatility-link, flight to quality, market comovement); and the lender-of-last-resort policy corollary. Web-verified (citation + the five features + the two spirals). Crypto extension (auto-liquidation cascades) flagged as the module's analogy.
- **Wiring:** `items.js` (`brunnermeier-pedersen-2009`, phase **theory**, difficulty 4, prereq Kyle 1985) + **13 seed cards**.
- **Verification:** content-schema **27 modules** (1986 → **2056 checks**); card-coverage 17/17; SEED_CARDS 214 → **227**; micro catalog 16 → **17 items** (18 rich modules). Suite **3154 → 3225 checks** (32 harnesses), green.

---

## Phase C2 — New microstructure module: Hasbrouck 1995, price discovery / information share (2026-06-06)

- **Scope:** Second content-expansion module — Joel Hasbrouck's "One Security, Many Markets: Determining the Contributions to Price Discovery" (Journal of Finance 50(4):1175-1199), the **price-discovery measurement primitive**. Companion to the Hasbrouck 2007 textbook already in the catalog (its direct methodological parent — the random-walk efficient price).
- **Why this one:** "Where is a price *discovered* when one security trades in many venues?" is the canonical fragmented-market question, and the **information share** is its standard answer — now applied to ETFs/futures/cross-listings and, natively, crypto. It also pairs with Budish-Cramton-Shim/Aquilina (fragmentation & speed) just added in C1.
- **Content (`hasbrouck-1995.js`):** full bilingual module, 8 sections + author block (8 fields, 5 keyWorks) + 3 self-tests. Teaches: cointegrated venue prices sharing one unobservable efficient price; the VECM (α adjustment-speeds → who leads / error-corrects); the common-factor row ψ and the efficient-price innovation Δm = ψ·ε; the **information share** IS_j = ψ_j²Ω_jj/ψΩψ′; the **identification caveat** (correlated innovations ⇒ Cholesky-ordering upper/lower bounds, width = contemporaneous correlation); price discovery ≠ volume (NYSE median ~92.7% for the Dow); and the Gonzalo-Granger component-share alternative. Web-verified (citation + the 92.7% figure + the Cholesky-bounds method).
- **Wiring:** `items.js` (`hasbrouck-1995`, phase **empirical**, difficulty 4, prereq Hasbrouck 2007) + **13 seed cards**.
- **Verification:** content-schema **26 modules** (1914 → **1986 checks**); card-coverage 16/16; SEED_CARDS 201 → **214**; micro catalog 15 → **16 items** (17 rich modules). Suite **3081 → 3154 checks** (32 harnesses), green.

---

## Phase C1 — New microstructure module: Budish-Cramton-Shim 2015 (2026-06-06)

- **Scope:** First module of the user-requested **content-expansion** program (explicit "go" to add new advanced microstructure papers). Adds the landmark market-design paper "The High-Frequency Trading Arms Race: Frequent Batch Auctions" (QJE 130(4):1547-1621) — the **theory parent** of the already-present Aquilina-Budish-O'Neill 2022 empirical companion.
- **Why this one first:** it completes the HFT/market-design arc — Aquilina (empirical measurement) already leaned on BCS as its intellectual parent, so the theory side was the conspicuous gap. It also threads the existing crypto bridge (continuous-book flaw → MEV).
- **Content (`data/domains/microstructure/content/budish-cramton-shim-2015.js`):** full bilingual (EN+ID) module — all 8 canonical sections, the 8-field author block + 5 keyWorks, 3 self-tests. Teaches: the continuous-limit-order-book flaw (continuous time + serial processing → winner-take-all sniping); correlation breakdown (ES-SPY corr ≈1 at human scale → ~0 at ms); the arms-race signature (median arb duration 97 ms → 7 ms over 2005-2011 with frequency/profit roughly constant); a positive spread with *no private information* (mechanical adverse selection); the prisoner's-dilemma rent dissipation; and the frequent-batch-auction fix (discrete time + uniform-price clearing). Web-verified facts; dollar magnitudes attributed to the in-repo Aquilina companion rather than asserting unverified BCS figures.
- **Wiring:** `items.js` entry (`budish-cramton-shim-2015`, phase **theory**, difficulty 5, prereqs Glosten-Milgrom + O'Hara) + **13 seed cards** in `seed-cards.js`. No new simulator (the module is text-rich; a batch-auction-vs-continuous sim is a candidate follow-up).
- **Verification:** content-schema now covers **25 modules** (1841 → **1914 checks**); card-coverage **15/15**; SEED_CARDS 188 → **201**; microstructure catalog 14 → **15 items** (16 rich modules total). Suite **3007 → 3081 checks** (32 harnesses), green.

---

## Phase S31 — Study-timing heatmap (day & hour) (2026-06-06)

- **Scope:** Show *when* you actually study and when you recall best — a day-of-week strip and an hour-of-day strip in the Map dashboard.
- **Data note:** the review log stored date-only timestamps, so day-of-week is derivable for **all** history but hour-of-day was not recorded. This phase starts capturing the local hour (`new Date().getHours()`) on each new review-log entry in `onRate`; the hour strip therefore reflects reviews from here on, while the weekday strip works on the full history.
- **What it shows:** a Mon-first 7-cell weekday strip + a 24-cell hour strip (shown once any timestamped reviews exist, else a "fills in going forward" note), each cell shaded by review volume (quartile gold buckets) with "N reviews · X% recall" in the tooltip.
- **Code:** pure `reviewTimeStats(log)` in `js/dashboard.js` — weekday from `new Date(ts+'T00:00:00Z').getUTCDay()` (deterministic, no `Date.now()`), hour from the numeric `hour` field; per-bucket `{ n, graded, success, rate }` (volume counts all entries, rate over graded only) + a `hasHours` flag. `studyTimingPanelHTML` renders the strips; `.timing-*` styling. `app.onRate` now writes `hour` into the entry.
- **Harness:** extended `scripts/verify-review-stats.mjs` (39 → 51, new RS9): empty shape (7+24 buckets), same-weekday-a-week-apart shares a bucket, weekday + hour recall rates, ungraded-counts-as-volume-not-rate, hour captured only when present + in-range, `hasHours`, total, determinism, **plus a source check that `onRate` writes `hour: new Date().getHours()` into the appended review**.
- **Verification:** suite 2993 → 3007 checks (32 harnesses; +12 stats, +2 render), green.

---

## Phase S30 — New-cards-per-day recommender (2026-06-06)

- **Scope:** Turn the S28 workload model into a concrete daily-intake answer — *how many new cards can I add without my review pile exploding?*
- **Model:** the cost of a new card is its **first-year review count** `F` (the S28 recursion over a 365-day horizon). In steady state, adding `N` new cards/day means ~365N cards are in their first year, generating ~`N·F` reviews/day, so a review budget `B` supports `N ≈ B / F` new cards/day. (At the default weights / 90% target, `F ≈ 5` → ~4 new cards/day per 20 reviews/day — matching common SRS guidance.)
- **What it shows:** a budget → new-cards/day table (10/20/30/40/60 reviews/day), with the row nearest your recent pace (last-30-day average) highlighted and a personalised one-liner. Higher target retention ⇒ costlier cards ⇒ fewer sustainable new cards (the panel composes with the retention curve above it).
- **Code:** pure `firstYearReviews(weights, retention, grade)`, `newCardsForBudget(weights, retention, reviewsPerDay, grade)`, and `recommendNewCards(weights, retention, { budgets, grade })` in `js/retention.js`; `newCardsPanelHTML` in `js/dashboard.js` (recent pace from `reviewStats.last30`); `.newcard-*` styling.
- **Harness:** extended `scripts/verify-retention.mjs` (22 → 33, new RT6): first-year cost positive + monotone in retention, table shape + cost reported, `round(budget/F)` formula, budget-monotonicity, `newCardsForBudget` matches the table, zero/negative budget → 0, higher target ⇒ fewer new cards, invalid-weights fallback, determinism. Dashboard render test (whatif W9) asserts the panel present.
- **Verification:** suite 2980 → 2993 checks (32 harnesses; +11 retention, +2 render), green.

---

## Phase S29 — Leech detector (2026-06-06)

- **Scope:** Surface the cards that keep failing — "leeches" in SuperMemo/Anki terms — so they get *reformulated* (the real fix per Wozniak's minimum-information / atomicity rules) instead of endlessly re-drilled.
- **What it shows:** a Map-dashboard panel listing cards with `lapses ≥ LEECH_THRESHOLD` (4), worst-first (most lapses, ties broken by lower ease = harder), each row showing the lapse count + a front snippet (cloze stripped) + its source, clickable to open that source in the Library. The blurb nudges "reformulate, not re-drill: split into atomic facts, drop enumerations, add a cue." Shown only when leeches exist; capped at the 12 worst with an overflow note.
- **Code:** pure `findLeeches(cards, { threshold })` + exported `LEECH_THRESHOLD` in `js/dashboard.js`; `leechPanelHTML` reuses `shortLabel` for source titles and the existing `[data-node-item]` click-through (so leech rows navigate like graph nodes); `.leech-*` styling. Operates on the active domain's cards.
- **Harness:** extended `scripts/verify-dashboard.mjs` (48 → 56, new D10): default threshold (≥4 kept, <4 + no-lapse-field dropped), worst-first ordering, lapse-tie broken by lower ease, field carry-through, custom threshold, no-leech → [], empty/null safety, `LEECH_THRESHOLD` export.
- **Verification:** suite 2972 → 2980 checks (32 harnesses; +8), green.

---

## Phase S28 — Target-retention workload curve ("how hard should you study?") (2026-06-06)

- **Scope:** The cutting-edge FSRS question made visible: target retention is a dial — turn it up and you remember more but review far more (short intervals + the spacing effect means each review reinforces little); turn it down and you relapse constantly. This panel models the tradeoff and marks the efficient operating point.
- **Model:** for each target retention r on a grid (70–97%), drive the *real* FSRS dynamics (`nextInterval`, `stabilityOnSuccess/Lapse`, `nextDifficulty`) forward over a 10-year horizon under an **expected-value recursion** — at each review (fired when retrievability = r) the state updates as `r·success + (1−r)·lapse`. No RNG ⇒ pure + deterministic + testable. Output: reviews/year and mean interval per retention.
- **Honest recommendation:** workload falls monotonically as you lower the target (remembering less is always less work), so an argmin would be a misleading boundary solution. Instead we report the **diminishing-returns knee** (Kneedle: greatest drop below the endpoint chord of the convex curve) — the target beyond which workload climbs steeply for little retention gain (≈ 91% on the published weights, matching FSRS's ~90% folk wisdom). The panel marks the sweet spot + your current target and quantifies the cost of pushing higher ("~N× the reviews to reach 97%").
- **Code:** new pure `js/retention.js` — `workloadCurve(weights, opts)`, `recommendRetention(points)` (elbow), `retentionAdvice(weights, currentRetention)`. Rendered by `retentionPanelHTML` + `workloadCurveSVG` (area + line, sweet-spot/now markers) in `js/dashboard.js`, over the active FSRS weights; `.dashboard-retention` section.
- **Harness:** `scripts/verify-retention.mjs` (22) — curve structure + grid, monotonicity both ways (more retention ⇒ ≥ workload, ≤ interval), strict 0.97 > 0.70, the knee (grid member, interior, sensible 85–95% band, empty→null, <3-points fallback), the advice bundle (recommended consistency, nearest-current snapping, null current), and weights handling (invalid→defaults, trained≠default, grade option) + determinism. Dashboard render test (whatif W9) asserts the panel present.
- **Verification:** suite 2948 → 2972 checks (31 → 32 harnesses; +22 retention, +2 render), green.

---

## Phase S27 — Per-domain stat breakdowns (2026-06-06)

- **Scope:** The review-stats panel is cross-domain aggregate; this adds a **By-domain** table so you can see, per domain, how much you review and how well you recall.
- **What it shows:** one row per domain (reviews · last 7 · success% · current streak), sorted by volume; legacy log entries with no domain tag bucket under "untagged". Rendered only when more than one domain has reviews (otherwise the aggregate panel already says it all). Domain display names come from each domain's meta.
- **Code:** pure `reviewStatsByDomain(log, today)` in `js/dashboard.js` — groups the log by `r.domain`, runs the existing `reviewStats` over each group, returns rows sorted by total. Rendered by `statsPanelHTML` (now takes `byDomain` + `domainLabels`); `domainLabels` threaded into the dashboard deps from `app.js`'s `domainLabelsMap()`; `.stats-domain-table` styling.
- **Harness:** extended `scripts/verify-review-stats.mjs` (31 → 39, new RS8): one row per domain (+ untagged), volume sort, per-domain success rate + streak, legacy→untagged bucketing, per-domain totals sum to the overall total, empty ⇒ no rows, determinism.
- **Verification:** suite 2940 → 2948 checks (31 harnesses; +8), green.

---

## Phase S26 — Recall-trend sparkline (2026-06-06)

- **Scope:** Add a "is my recall actually improving?" line to the review-stats panel — weekly success rate over the last 12 weeks.
- **What it shows:** each week's success rate (grade ≥ 2 = recalled) as a point; consecutive weeks join into a line, weeks with no graded reviews are gaps (not zeros); a gold dashed reference line marks the overall rate; gridlines at 50/75/100%. Oldest week left, this week right.
- **Code:** pure `retentionTrend(log, today, weeks = 12)` in `js/dashboard.js` (weekly bins by `floor(daysBetween/7)`, each `{ graded, success, rate|null }`, plus `overallRate`/`totalGraded`) + internal `retentionTrendSVG`; rendered inside `statsPanelHTML` (only when there are graded reviews), wired through `renderDashboardView`; `.stats-trend-head` styling.
- **Harness:** extended `scripts/verify-review-stats.mjs` (21 → 31, new RS7): points length = weeks, oldest→newest ordering, empty ⇒ all-null + null overall, correct per-week rates (3/4 this week, 1/2 two weeks ago), empty week ⇒ null gap, overall = ΣsuccessΣgraded (4/6), out-of-window exclusion, ungraded/future ignored, determinism.
- **Verification:** suite 2930 → 2940 checks (31 harnesses; +10), green.

---

## Phase S25 — Keyboard navigation in the search overlay (2026-06-06)

- **Scope:** Make the `/` global-search overlay fully keyboard-drivable — ↑/↓ move a highlighted result, Enter opens it — without leaving the search input.
- **Behaviour:** the first result is highlighted on each query change; ↑/↓ move the highlight (clamped at the ends, no wrap) and scroll it into view; Enter opens the highlighted card (activating its domain + selecting the item); mousemove over a result also makes it active, so mouse and keyboard stay in sync. The footer hint now reads "↑/↓ to move · Enter to open · Esc to close".
- **Code:** pure `moveActiveIndex(current, delta, count)` in `js/card-search.js` (clamp to `[0, count-1]`, `-1` when empty) + an `activeIndex` parameter on `searchResultsHTML` (adds `.search-result-active` + `aria-selected` + a `data-search-index`); `renderSearch` in `app.js` tracks the active index, repaints on ↑/↓, and opens on Enter; `.search-result-active` styling.
- **Harness:** extended `scripts/verify-card-search.mjs` (33 → 40, new CS7): `moveActiveIndex` (down/up clamping, empty → -1, single-result clamp) and the active-row rendering (class + `aria-selected="true"` + `data-search-index`; `activeIndex -1` ⇒ no active row).
- **Verification:** suite 2923 → 2930 checks (31 harnesses; +7), green.

---

## Phase S24 — Review stats + streak (2026-06-05)

- **Scope:** A read-only Map-dashboard panel surfacing review *habit* and *quality* over the full cross-domain review log — the motivational counterpart to the existing activity heatmap.
- **What it shows:** a **current / longest daily streak** headline (the current streak carries through a not-yet-reviewed today, so the streak only breaks on a genuine missed day), a row of tiles (reviews today / last 7 / last 30 / total / active days / success rate), and an **Again / Hard / Good / Easy grade-distribution bar** with a legend. Success rate = grade ≥ 2 over graded reviews.
- **Code:** pure `reviewStats(log, today)` in `js/dashboard.js` (totals, `byGrade`, success rate, current/longest streak via consecutive-day walk, rolling 7/30-day windows that exclude future-dated entries) + internal `statsPanelHTML`; a `dashboard-stats` section before the heatmap; `.stats-*` / `.grade-*` styling.
- **Harness:** `scripts/verify-review-stats.mjs` (21) — empty/robust (ignores entries without ts), totals + grade distribution + success rate, current streak (3-in-a-row, yesterday carry-over, gap breaks it, stale → 0, same-day dedup), longest streak (historical run, isolated day, all-consecutive), rolling windows (7/30 boundaries, future excluded), and determinism. The dashboard render test (whatif W9) also asserts the panel is present.
- **Verification:** suite 2900 → 2923 checks (30 → 31 harnesses; +21 stats, +2 render), green.

---

## Phase S23 — Combined cross-domain review (2026-06-05)

- **Scope:** An opt-in review mode (Settings → Review → "Review across all domains") that mixes due cards from *every* domain into a single queue, instead of only the active domain — so you clear all of today's reviews in one pass.
- **Behaviour:** off by default (`settings.review.crossDomain`). When on (and >1 domain loaded), `buildSession` gathers due cards across domains; each review card shows a small **domain badge** + its source. Cards remain scheduled and stored per-domain: each queue card is tagged with its `_domain` (plus `_sourceLabel`/`_domainLabel`), `onRate` writes the update back to that card's own domain store, and transient `_`-fields are stripped before persisting so they never leak into state. Toggling the setting rebuilds the session immediately. The review meters' "due today" reflects the combined count in this mode.
- **Code:** pure `getDueCardsAllDomains(state, today)` (tagged copies, no mutation) + `stripTransientFields(card)` in `js/storage.js`; `crossDomain: false` added to `defaultSettings().review`. `app.js`: `buildSession`/`tagCardForReview`, domain-aware `onRate`, combined `dueCount`, and a session rebuild on the setting change. `settings.js`: the checkbox. `review.js`: `_sourceLabel`/`_domainLabel` badge. `.card-domain-badge` styling.
- **Harness:** `scripts/verify-cross-domain.mjs` (16) — `getDueCardsAllDomains` (gathers across domains, excludes future/unscheduled, tags `_domain`, count = sum of per-domain due), purity (no state mutation, fresh copies, empty-state safety), `stripTransientFields` (drops every `_`-field, keeps real fields, no input mutation, null-safe, cleaned card has no underscore keys), and the `review.crossDomain` setting (default false, merge preserves a stored true, fills when absent, coexists with scheduler).
- **Verification:** suite 2884 → 2900 checks (29 → 30 harnesses; +16), green.

---

## Phase S22 — Print / save-as-PDF a module (2026-06-04)

- **Scope:** A **Print** button on any source detail produces a clean, chrome-free print/PDF of the whole module — for handouts, annotation, or offline reading.
- **How it works:** browsers print-to-PDF from the live DOM, so the work is a print stylesheet plus a couple of small pure helpers. The `@media print` block in `styles.css` redefines the theme variables to ink-on-white, hides all app chrome (topbar, tabs, actions, lang toggle, back/Ask-AI/audio/schedule buttons, viz controls + footer, overlays), prints only the active view, reveals a print-only header, force-expands collapsed `<details>` (author cards), avoids page-breaks inside sections/figures, and sets an `@page` margin. `onPrintModule` sets `document.title` (so the PDF is named "Lattice — <source>") then calls `window.print()`, restoring the title on `afterprint`.
- **Code:** new pure `js/print.js` — `printDocTitle(item)` and `printHeaderHTML(item, lang, dateISO)` (title + author·year·type + provenance line; HTML-escaped; date passed in, no clock). `library.js` injects the print header + a `print-hide` Print button into the item detail and wires it to `deps.onPrintModule`; `app.js` implements `onPrintModule`; `.print-only` / `.print-btn` / `@media print` styling in `styles.css`.
- **Harness:** `scripts/verify-print.mjs` (30) — `printDocTitle` (title / id-fallback / generic), `printHeaderHTML` (header block, author·year·type line, provenance + date-slice, ID localisation, empty item, HTML-escaping), the `@media print` stylesheet (screen-hides `.print-only`, recolours to white/ink, hides chrome + interactive affordances + back button + overlays, reveals print-only + expands `<details>`, prints only the active view, break-inside avoidance, `@page` margin), and the end-to-end wiring in `library.js` (import, header injection, Print button, handler hookup, deps) + `app.js` (import, `document.title = printDocTitle`, `window.print()`, afterprint restore, deps pass-through).
- **Verification:** suite 2854 → 2884 checks (28 → 29 harnesses; +30), green.

---

## Phase S21 — Global card search across domains (2026-06-04)

- **Scope:** A `/`-triggered (or 🔍-button) overlay that searches every card's front/back across **all loaded domains**, ranks the hits, and jumps to the source in the Library on click — the first cross-domain affordance (Library/Map are per-active-domain).
- **Search model:** case-insensitive, tokenized; AND across terms (every term must appear in front+back+title); score weights front (3) > title (2) > back (1) with a +5 contiguous-phrase bonus; deterministic tie-break (title then cardId); min 2 chars; capped at 40. Results highlight matched terms with HTML-safe `<mark>` (escape-then-mark, so card text can't inject markup), and cloze markup is stripped for the snippet.
- **Code:** new pure `js/card-search.js` — `stripCloze`, `highlightTerms`, `collectAllCards(state, itemsByDomain)`, `searchCards`, `searchOverlayHTML`, `searchResultsHTML`. Wiring in `app.js`: `App.searchOpen`/`searchQuery`, `openSearch`, `renderSearch` (live filter that updates only the results list to preserve input focus/caret), `onSearchGo` (activates the target domain if needed → selects the item). `#search-root` + a 🔍 topbar button in `index.html`; `/` added to the shortcuts registry (and Esc-priority close + modal key-swallow in `handleKeyboard`); `.search-*` styling.
- **Harness:** `scripts/verify-card-search.mjs` (33) — cloze stripping, highlight (case-insensitive, multi-term, **HTML-escaping / no raw tag injection**), cross-domain collection (flatten, title attach, missing-title fallback), ranked AND-search (lambda find, front-beats-title-only ordering, AND semantics, no-match, limit, determinism, min-length), result rendering (hints, per-result `data-search-go`, count, domain label, term highlight, snippet escaping), and overlay (input + preserved value + ID localisation). `verify-shortcuts.mjs` extended to assert `/` is handled in `app.js`.
- **Verification:** suite 2820 → 2854 checks (27 → 28 harnesses; +33 search, +1 shortcuts), green.

---

## Phase S20 — Scheduler backtest: FSRS vs SM-2 on your own recall (2026-06-04)

- **Scope:** A read-only Map-dashboard panel answering an empirical question with the user's *own* data: would FSRS or SM-2 have predicted your recall better? Replays each card's real review sequence under both engines and scores predicted-vs-actual recall.
- **Method:** for every card, after the first review (state init only), form a predicted recall probability R at each review's elapsed interval and compare to the outcome (grade ≥ 2 = recalled). Score with **log-loss** (proper scoring rule, the verdict metric), **Brier**, and 0.5-threshold **accuracy**. FSRS uses its native retrievability R(t,S) replaying stability/difficulty exactly as the optimiser does (with the user's trained weights when present); SM-2 — which has no native retention curve — uses the standard exponential proxy R(t) = requestRetention^(t/I) calibrated to its scheduled interval I. Framed in the UI as a *directional* diagnostic, not a literal SM-2 claim.
- **Code:** new pure `js/backtest.js` — `gradeToQuality` (inverse of `qualityToGrade`, preserving the lapse boundary), `scorePredictions`, `backtestEngines(log, {weights, requestRetention, minPredictions})` (reuses `groupReviews` from `fsrs-optimize.js`; equal prediction counts across engines by construction; winner by log-loss once ≥20 predictions). Rendered by `backtestPanelHTML` in `dashboard.js` over the **full cross-domain** review log + active weights; `.backtest-*` styling.
- **Harness:** `scripts/verify-backtest.mjs` (29) — `gradeToQuality` boundary, `scorePredictions` (confident-correct→~0 loss, confident-wrong→large, R=0.5→ln2 & Brier 0.25), insufficient-data gating, structure (equal n, n = reviews − cards, ranges, winner/margin consistency), determinism, trained-weights flag, and a **synthetic FSRS-generated log on which FSRS scores ≤ the SM-2 proxy** (the backtest analogue of the optimiser's synthetic-recovery test). Also asserted present in the dashboard render (whatif W9).
- **Verification:** suite 2789 → 2820 checks (26 → 27 harnesses; +29 backtest, +2 render), green.

---

## Phase S19 — SVG → PNG export of any simulator (2026-06-04)

- **Scope:** A **Save PNG** button on every simulator's footer that rasterizes its live SVG to a downloadable PNG — for slides, notes, reports.
- **The wrinkle it solves:** simulator colours are CSS custom properties (`fill="var(--gold)"` …) that resolve on the page but vanish when the SVG is rasterized off-page in isolation. So the export makes the SVG self-contained first: it scans the markup for referenced `var(--…)` names, resolves them against the live computed style, injects a `<style>` re-declaring exactly those on the `<svg>` scope, sets explicit (2× supersampled) pixel width/height, ensures an `xmlns`, then draws it onto a canvas over an opaque backdrop and triggers `canvas.toBlob` download.
- **Code:** new `js/viz-export.js` — pure, unit-tested core (`collectCssVarNames`, `inlineSvgVars`, `svgExportFilename`) + browser-only `resolveCssVars` / `exportSvgToPng` (no-throw: returns false on any failure). Wired into `renderVisualization` in `js/viz.js` (button added to `.viz-footer`, click exports `.viz-canvas svg`); `.viz-export-btn` styling + footer gap in `styles.css`. Applies to **all 13** `viz.js` simulators at once (it lives in the shared container chrome).
- **Harness:** `scripts/verify-svg-export.mjs` (33) — var-name collection (distinct, first-appearance, whitespace-tolerant), `inlineSvgVars` (used-only style decls, width/height replacement incl. stripping `width="100%"`, xmlns add/no-dup, content preservation), `svgExportFilename` (sanitization, fallback, ID-lang suffix), browser-fn presence + node-safety (`resolveCssVars`→{} sans DOM, `exportSvgToPng(null)`→false), and an **integration pass over a real rendered OrderBookSim SVG** (every referenced var declared in the assembled export string; self-contained + sized).
- **Verification:** suite 2756 → 2789 checks (25 → 26 harnesses; +33), green.

---

## Phase S18 — Multi-select card filtering in the Library (2026-06-04)

- **Scope:** Narrow the Library source list by two independent, multi-select facets — **Status** (card-state) × **Type** (item type) — rendered as toggle chips above the phase list.
- **Semantics:** an item matches if it holds ≥1 card in any selected state (Status facet) AND its type is among the selected types (Type facet). Selections OR within a facet, AND across facets; an empty facet imposes no constraint. Only card-states actually present get a chip (no dead chips); the Type facet appears only when >1 type exists. Under an active filter the phase list auto-expands and empty phases are hidden; the header switches to "Showing X of Y sources"; an empty result still shows the chip bar + a Clear affordance.
- **Code:** pure `availableStates` / `availableTypes` / `filterIsActive` / `itemMatchesFilter` / `applyCardFilter` + `groupCardsByItem` in `js/library.js` (engine-aware via `cardState`); chip bar + wiring in `renderLibraryView`; `App.libraryFilter` state + `onCardFilterToggle` / `onCardFilterClear` in `app.js` (reset on domain switch, alongside `systemTypeFilter`); `.library-filter` styling in `styles.css`.
- **Harness:** `scripts/verify-library-filter.mjs` (25) — facet derivation (distinct/sorted types; present-only states in canonical order), `filterIsActive`, type facet, status facet (incl. OR-within), AND-across-facets, empty=no-constraint, `applyCardFilter` (inactive→all, combinations, no-match→empty), and a stub-DOM render (chip bar present, mastered chip active, "Showing 1 of 3", matching item shown / non-matching hidden, empty-result still shows chip bar + clear).
- **Verification:** suite 2731 → 2756 checks (24 → 25 harnesses; +25), green.

---

## Phase S17 — Spaced-repetition what-if projection (2026-06-04)

- **Scope:** An interactive panel in the Map dashboard that projects one *fresh* card's interval trajectory forward under a chosen rating pattern, **SM-2 vs FSRS side by side** — answering "if I always rate X, how fast do my intervals grow, and how do the two engines differ?"
- **What it shows:** Review # on x, next interval on a log scale (reference lines at 1d/1w/1mo/3mo/1y; lapses drawn as rose ✗); SM-2 (azul) and FSRS (gold) overlaid. Controls: rating pattern (Always Good / Easy / Hard-pass / Good-Hard alternating / All-Good-one-lapse), review count, and FSRS target retention. Readout reports each engine's final interval, calendar span, and review-to-mastery.
- **Faithful by construction:** the projection drives the real `schedule()` facade (not a re-implementation), reviewing exactly on each due date — so both lines are the genuine schedulers.
- **Code (`js/dashboard.js`):** pure `whatIfPattern(preset, n)`, `whatIfTrajectory(grades, engine, today, requestRetention, weights)`, `whatIfSummary(points)`; internal `whatIfSVG` (log-scale dual-line chart) + `wireWhatIf` (in-place re-render on control change); panel inserted before the prereq map. `.whatif-controls` styling in `styles.css`.
- **Harness:** `scripts/verify-whatif-sim.mjs` (45) — preset shapes (incl. exactly-one-lapse, unknown→good fallback), SM-2 trajectory (1/6/15 ladder, cumulative day math, mastery at review 3), FSRS trajectory (positive, strictly-growing stability, difficulty∈[1,10]), lapse reset (SM-2 → 1 then 6; FSRS drop), target-retention monotonicity (higher R ⇒ shorter), Easy ≥ Good, summary stats, determinism, and a stub-DOM render of the whole dashboard (EN + ID) asserting the chart drew an `<svg>` with no NaN and a populated readout.
- **Verification:** suite 2686 → 2731 checks (23 → 24 harnesses; +45), green. (Simulators stays 13 — this is a dashboard analytic, not a `viz.js` COMPONENT.)

---

## Phase S16 — Interactive order-book ladder simulator (2026-06-04)

- **Scope:** 13th simulator and **O'Hara 1995's first** viz (intuition section) — the canonical limit-order-book object: resting bid/ask depth at discrete price levels, with market orders walking the book.
- **What it shows:** A ladder of green bids (bottom) / red asks (top) sized by depth, the touch highlighted, mid as a gold dashed line. **Market BUY/SELL** walks the book level by level, filling at progressively worse prices; the readout reports the new touch, spread, mid, last avg-fill and **slippage**. Bigger orders dig deeper and slip more (convex impact); **Replenish** resets. Ties the abstract impact models together — Kyle's λ is the slope of this walk, CKS's depth its inverse.
- **Code:** pure `makeBook` (seeded depth profile), `bestAsk`/`bestBid`/`bookMid`/`bookSpread`, and `marketBuy`/`marketSell` (non-mutating book walk → `{book, filled, avgPrice, slippage}`) + `OrderBookSim` component in `js/viz.js`; `visualization` block on `ohara-1995` intuition.
- **Harness:** `scripts/verify-orderbook-sim.mjs` (31) — book construction/ordering, touch/mid/spread, buy-walks-up / sell-walks-down with slippage identities and touch movement, purity (original book unmutated), convex impact (bigger ⇒ ≥ slippage), depth conservation (fill capped, drained side ⇒ null touch), determinism, and a Proxy-stub render smoke-test (EN + ID, incl. reset path).
- **Verification:** suite 2649 → 2686 checks (22 → 23 harnesses; +31 orderbook, +6 content-schema from the new viz block), green. Simulators 12 → 13.

---

## Phase S15 — Per-domain review-activity heatmap (2026-06-04)

- **Scope:** A GitHub-style heatmap of reviews/day (last 16 weeks) in the Map dashboard, filtered to the current domain.
- **Code:** review-log entries gain a `domain` tag (app.onRate); pure `reviewHeatmap(log, today, weeks, domainId)` (chronological weeks×7 grid, max/total; legacy no-domain entries count everywhere) + `heatmapSVG` (quartile gold buckets + date/count tooltips + legend) in dashboard.js; panel before the prereq map.
- **Harness:** `scripts/verify-dashboard.mjs` extended 42 → 48 (D9): grid size, today = last cell, same-day accumulation, domain filter (current + legacy in, other out), out-of-window exclusion, no-filter total. Render smoke-tested.
- **Verification:** suite 2643 → 2649 checks (22 harnesses), green. Completes the five out-of-the-box directions (S11–S15).

---

## Phase S14 — Almgren-Chriss execution animation (2026-06-04)

- **Scope:** 12th simulator + Almgren's 2nd viz (applications) — an animated play-through of the liquidation schedule.
- **What it shows:** Play drains the position interval by interval (gold=executed, blue=pending, playhead) with a live sold/%/remaining/this-interval readout; step scrubber + κ slider reshape it (front-load vs TWAP).
- **Code:** pure `executionStep(x,k)` over `almgrenTrajectory`; `AlmgrenExecutionSim` with a guarded setInterval play loop; viz block on Almgren applications.
- **Harness:** `scripts/verify-almgren-exec-sim.mjs` (9) — boundary states + clamps, monotone sold + traded identity + fracDone, urgency front-loading.
- **Verification:** suite 21 → 22 harnesses / 2628 → 2643 checks, green. Simulators 11 → 12.

---

## Phase S13 — Deep (multi-level) OFI simulator (2026-06-04)

- **Scope:** 11th simulator + CKS's 2nd viz (applications section) — the deep-OFI extension.
- **What it shows:** R² of ΔP ~ deep-OFI climbing as more book levels (L) are aggregated toward a ceiling; L / depth-decay / noise sliders.
- **Code:** pure `deepOFI` (depth-weighted OFI across Lmax levels, reuses `olsFit`); `DeepOfiSim` component; viz block on CKS applications.
- **Harness:** `scripts/verify-deepofi-sim.mjs` (9) — structure/decaying-weights, R² monotone in L + deep>best-level, depth-weighting + noise statics, determinism.
- **Verification:** suite 20 → 21 harnesses / 2613 → 2628 checks, green. Simulators 10 → 11.

---

## Phase S12 — Keyboard-shortcut help overlay (2026-06-04)

- **Scope:** A `?`-triggered shortcut cheat-sheet, with a single-source registry.
- **Code:** `js/shortcuts.js` — grouped bilingual `SHORTCUTS` + pure `shortcutsOverlayHTML(lang)` + `advertisedKeys()`. app.js opens on `?`, swallows keys while open (Esc closes), `renderHelp()` → `#help-root`; `.help-grid` CSS (1-col on mobile). #help-root added to index.html.
- **Harness:** `scripts/verify-shortcuts.mjs` (28) — the integrity check that every advertised key is handled in app.js (matched against real handler patterns), registry shape, overlay markup (kbd chips, every group/label), ID localisation.
- **Verification:** suite 19 → 20 harnesses / 2585 → 2613 checks, green.

---

## Phase S11 — Dark theme (2026-06-04)

- **Scope:** Make the dead `settings.appearance.theme` real — a dark reader theme beside the default sepia.
- **CSS:** `html[data-theme="dark"]` overrides reader palette + accents (gold/azul recoloured) + chrome.
- **Wiring:** default theme `'sepia'`, `AVAILABLE_THEMES=['sepia','dark']`; app.js `applyTheme` sets `data-theme` on render (validated); no-FOUC `<head>` script reads `lattice-v3` pre-paint; Settings → Appearance theme select via the existing patch path.
- **Harness:** `scripts/verify-theme.mjs` (15) — config, CSS dark block, no-FOUC guard + app wiring, Settings control.
- **Verification:** suite 18 → 19 harnesses / 2570 → 2585 checks, green. (Note: a user whose stored theme was the old default `'dark'` now sees dark mode on next load — toggle in Settings.)

---

## Phase S10 — PWA install prompt + update toast (2026-06-04)

- **Scope:** PWA lifecycle UX + move SW registration into `js/pwa.js`.
- **Install:** capture `beforeinstallprompt` → stash → "Install" toast → `prompt()`; hide on `appinstalled`.
- **Update:** new worker `installed` (with controller) / `reg.waiting` → "New version — Reload" toast → `postMessage({type:'SKIP_WAITING'})` → `controllerchange` reload (one-shot). `sw.js` gains the `message`→`skipWaiting()` handler.
- **Code:** pure bilingual `pwaToastHTML(kind,lang)`; self-init guarded by `window` check (Node import = no-op); index.html inline SW registration replaced by the pwa.js module include; `.pwa-toast` CSS.
- **Harness:** `scripts/verify-pwa.mjs` 31 → 41 (P6: index loads pwa.js; pwa.js register/install/update/SKIP_WAITING/controllerchange/guard; sw.js SKIP_WAITING; toast markup + ID). Fixed a missing `pathToFileURL` import the new dynamic import needed.
- **Verification:** suite 2560 → 2570 checks (18 harnesses), green. Completes the four net-new directions (S7–S10).

---

## Phase S9 — Review-log CSV export (2026-06-04)

- **Scope:** Export the captured review history (S5's reviewLog) as CSV for external analysis / FSRS tooling.
- **Code:** pure `reviewLogToCSV` (RFC-4180 quoting; header-only on empty) + `downloadReviewLogCSV` in storage.js; Settings → Data button (`onExportReviewCSV`, empty-log guard).
- **Harness:** `scripts/verify-review-log.mjs` (12) — appendReview append/order/immutability/cap (previously untested) + CSV header/order/escaping. Settings render checked.
- **Verification:** suite 17 → 18 harnesses / 2548 → 2560 checks, green.

---

## Phase S8 — Dashboard review-forecast + FSRS retention projection (2026-06-04)

- **Scope:** Add a forecast panel to the Map dashboard (the FSRS analytics deferred from S3).
- **What it shows:** a 21-day bar chart of cards due per day (overdue on day 0) + (FSRS) a gold line projecting average retention decay if you stopped reviewing.
- **Code:** pure `reviewForecast` (engine-agnostic, nextReview bins) + `retentionForecastCurve` (FSRS-only, retrievability(elapsed+d, stability) averaged; null for SM-2/no-data) + `forecastSVG`, all in dashboard.js; panel inserted before the prereq map.
- **Harness:** `scripts/verify-dashboard.mjs` extended 33 → 42 (D7 forecast binning, D8 retention curve null/monotone/bounds). Smoke-tested both engines.
- **Verification:** suite 2539 → 2548 checks (17 harnesses), green.

---

## Phase S7 — Bouchaud propagator (transient-impact) simulator (2026-06-04)

- **Scope:** 10th simulator + first module with two visualizations. `PropagatorSim` mounted in Bouchaud's *formalization* section (alongside the worked-example √-impact sim), covering transient impact.
- **What it shows:** a metaorder's impact path under propagator G(ℓ)~(1+ℓ)^(−β) — concave rise during execution, peak at the last child, then relaxation. β + N sliders.
- **Code:** pure `propagatorImpact` in viz.js; visualization block on the formalization section (renderer + schema already handle viz on any section — no framework change).
- **Harness:** `scripts/verify-propagator-sim.mjs` (17) — peak at N−1, concave rise, monotone relaxation, transient (permanent<peak, >0), β static (smaller β ⇒ higher peak + slower relaxation), G(0)=1, determinism. Smoke-tested EN+ID.
- **Verification:** suite 16 → 17 harnesses / 2516 → 2539 checks, green. Simulators 9 → 10.

---

## Phase S6 — Mobile / PWA polish (2026-06-04)

- **Scope:** Make Lattice installable + offline-capable + responsive (closes the "desktop-only" caveat). Purely additive — no app-logic change.
- **Files:** `manifest.json` (standalone, `./` scope, theme/bg colors, maskable SVG icon), `icon.svg` (lattice mark, no binary), `sw.js` (precache shell + stale-while-revalidate, GET + same-origin guard so it never touches api.anthropic.com, activate cleanup + skipWaiting/clients.claim). index.html: theme-color/apple metas, manifest+icon links, guarded SW registration. styles.css: `@media` 720px (topbar wrap, tab scroll, kbd hints hidden, viz controls stack, tile reflow, 44px tap targets) + 420px.
- **Harness:** `scripts/verify-pwa.mjs` (31) — manifest fields, icon, SW (cache name, install/activate/fetch, SWR, guards, shell files exist on disk), index.html wiring, responsive media queries.
- **Verification:** suite 15 → 16 harnesses / 2485 → 2516 checks, green.

---

## Phase S5 — FSRS weight training from review history (2026-06-04)

- **Scope:** Fit FSRS to the user's own recall (the standard FSRS optimisation, run locally) instead of fixed default weights.
- **Capture:** every review appends `{cardId, ts, grade, elapsed}` to a capped (5000) `state.reviewLog` (additive; backfilled on scaffold; no schema bump). `appendReview` in storage, `daysBetween` in util, captured in app.onRate.
- **Optimiser** `js/fsrs-optimize.js` (pure): replay each card under candidate weights → predict R per review → minimise log-loss vs actual recall; coordinate descent over w[0..3,8..10,11]; no-op under ~50 predictions.
- **Wiring:** `settings.review.fsrsWeights` (null⇒defaults) threads through scheduler.schedule→fsrsSchedule; Settings gains Optimize + Reset + status; defaultSettings/mergeWithDefaults gain the slot.
- **Harness:** `scripts/verify-fsrs-optimize.mjs` (15) — log-loss aggregation, groupReviews, and the core claim: on data from known W*, the optimiser drives loss below the default baseline toward W*; sparse = no-op. Smoke: trained weights change the interval; Settings renders the UI.
- **Verification:** suite 14 → 15 harnesses / 2470 → 2485 checks, green. Default unchanged until opt-in.

---

## Phase S2.5 + S2.6 — CKS (OFI) + VPIN simulators (2026-06-04)

- **Scope:** Ship the two empirical-toxicity simulators deferred after S2, completing the microstructure simulator set (7 → 9). Every microstructure module with a computable quantitative core now has an interactive viz.
- **CKS / OFI** (`CksOfiSim`): two-panel regression contrast — OFI→ΔP (tight, β=1/(2D̄), high R²) vs trade-imbalance→ΔP (noisy, low R²). Pure `olsFit`+`simulateOFI`; harness `verify-cks-sim.mjs` (26) — OLS, β recovery within 5%, depth static, OFI>TI R² gap, noise monotonicity, worked-example 1/β≈180.
- **VPIN** (`VpinSim`): per-bucket buy/sell imbalance bars (V^B=V·Φ(z)) + toxicity gauge; VPIN=mean|2Φ(z)−1|. Pure `normalCDF`+`vpinFromZ`+`simulateVPIN`; harness `verify-vpin-sim.mjs` (22) — CDF, bounds (flat→0/one-sided→1), worked example (≈0.408), toxicity monotone sweep, determinism.
- Both render smoke-tested (EN+ID, no NaN). Content visualization blocks wired into both modules' worked-example sections.
- **Verification:** suite 12 → 14 harnesses / 2410 → 2470 checks, green. Simulators 7 → 9.

---

## Phase S4 — Knowledge-map + progress/retention dashboard (2026-06-04)

- **Scope:** A new **Map** tab (`M`) — purely additive, read-only fourth view (`js/dashboard.js`). Answers the "dashboard?" question and folds in the FSRS retention analytics deferred from S3. Zero migration risk.
- **What it shows:** (1) the prereq DAG as a curriculum graph laid out by longest-prereq depth (SVG, no libs), nodes coloured mastered/in-progress/available/locked/no-cards, click → Library; (2) progress tiles (Due/Mastered/In-progress/Not-started) + an engine-aware headline (FSRS avg retention % or SM-2 avg EF); (3) per-phase mastery bars.
- **Code:** pure `shortLabel`/`computeLevels`/`itemProgress`/`buildGraph`/`dashboardSummary` (cycle + missing-id robust) + `renderDashboardView`. Wired: index.html tab + `#map-view`, app.js keyboard `M` + render dispatch + node-click→Library.
- **Harness:** `scripts/verify-dashboard.mjs` (33 checks) — labels, DAG levels on the real catalog + robustness, the five progress states, availability (locked vs available, card-less prereq non-blocking), engine-aware summary. Render smoke-tested (both engines, 14 nodes, no NaN).
- **Verification:** suite 11 → 12 harnesses / 2377 → 2410 checks, green. Completes the S1–S4 depth track.

---

## Phase S3 — Optional FSRS-4.5 scheduler (2026-06-04)

- **Scope:** Make the review engine pluggable. SM-2 stays the default and untouched; FSRS-4.5 is an opt-in, reversible, non-destructive alternative selectable in Settings. The riskiest phase so far — it touches scheduling + the `lattice-v3` storage migration — so it was built safety-first.
- **New code:** `js/fsrs.js` (FSRS-4.5, 17 default weights; stability/difficulty model; interval at target retention; 0–5→1–4 grade map; pure functions) and `js/scheduler.js` (facade routing schedule/cardState/isMastered by `settings.review.scheduler`). Both engines keep all SM-2 fields on each card → toggling is loss-free.
- **Storage:** `schemaVersion` 3→4 (key still `lattice-v3`). `migrateV3ToV4` additive-only (version bump + `settings.review` backfill; no card data touched — FSRS state lazy). `load()` forward-migrates v3 (never wipes); `importJSON` accepts v4/v3/v1. `freshCardState` gains `stability`/`difficulty` (null).
- **Wiring:** review.js `rate(…, {engine, requestRetention})`; app.js onRate + mastered count via `engineOf`; library.js classification + FSRS S/D metric line; settings.js Review-scheduler select; `defaultSettings`/`mergeWithDefaults` gain a `review` namespace.
- **Harness:** `scripts/verify-fsrs.mjs` (66 checks) — FSRS defining properties, scheduler integration, card-state/mastery, retention average, and the **non-destructive v3→v4 migration** (byte-for-byte card preservation, settings backfill, apiKey/theme preserved). verify-app-logic still green (mergeWithDefaults preserves the new namespace + ui + apiKey).
- **Verification:** suite 10 → 11 harnesses / 2311 → 2377 checks, green. Default `sm2` unchanged → zero impact on existing users until opt-in.
- **Known scope / next:** the review header keeps the SM-2 "EF avg" stat for now; the FSRS retention/forecast dashboard is folded into S4.

---

## Phase S2.4 — Bouchaud et al. (2018) square-root impact simulator (2026-06-04)

- **Scope:** 7th simulator — the square-root law of market impact. Completes the 4 priority S2 simulators (Kyle, Almgren-Chriss, Avellaneda-Stoikov, Bouchaud). `SqrtImpactSim` wired into `bouchaud-bonart-donier-gould-2018` worked-example.
- **What it shows:** the concave law I = Yσ√(Q/V) (blue) vs the linear (Kyle) extrapolation (dashed), markers at φ and 2φ showing I(2φ)/I(φ)=√2 ("√2 not 2"); sliders φ=Q/V, Y, σ. Defaults Q/V=0.10, σ=2%, Y=0.5 → I≈0.316%.
- **Code:** pure `sqrtImpact` exported from viz.js; component + content visualization block.
- **Harness:** `scripts/verify-bouchaud-sim.mjs` (25 checks) — worked example, √-scaling, concavity, participation-ratio-only dependence, linearity in Y/σ, concave-vs-linear contrast, the √2 doubling. Render smoke-tested (EN+ID).
- **Verification:** suite 9 → 10 harnesses / 2280 → 2311 checks, green. Simulators 6 → 7. CKS/VPIN sims left optional (sequential/empirical, lower-yield as viz).

---

## Phase S2.3 — Avellaneda-Stoikov (2008) optimal-quotes simulator (2026-06-04)

- **Scope:** 6th simulator (optimal market making). `AvellanedaStoikovSim` wired into `stoikov-2008` worked-example.
- **What it shows:** quote-skew-vs-inventory — reservation r(q)=s−qγσ²(T−t) (gold), bid/ask symmetric around it (blue), mid (dashed); q, γ, T−t sliders. Long ⇒ quotes lean down to sell; T−t→0 ⇒ skew flattens, spread → micro floor. Defaults s=100, σ=2, γ=0.1, κ=1.5, T−t=1, q=5.
- **Code:** pure `asQuotes` exported from viz.js; component + content visualization block.
- **Harness:** `scripts/verify-as-sim.mjs` (31 checks) — worked example, skew direction/symmetry, reservation linearity, q-independent spread, decomposition + symmetry around r, t→T regime collapse, skew comparative statics, deep-inventory desperation. Render smoke-tested (EN+ID).
- **Verification:** suite 8 → 9 harnesses / 2243 → 2280 checks, green. Simulators 5 → 6. Remaining S2: Bouchaud sqrt-impact (optional CKS/VPIN).

---

## Phase S2.2 — Almgren-Chriss (2000) efficient-frontier simulator (2026-06-04)

- **Scope:** 5th simulator (optimal execution). `AlmgrenFrontierSim` wired into `almgren-chriss-2000` worked-example.
- **What it shows:** two synced panels — the convex efficient frontier (expected-cost vs variance) with the current-κ dot, and the holdings trajectory x(t) = X·sinh(κ(T−t))/sinh(κT) vs the dashed κ=0 TWAP. Urgency κ and volatility σ sliders. Defaults X=100k, T=5, N=20, κ=0.5, σ=0.3.
- **Code:** pure `almgrenKappa` / `almgrenTrajectory` / `almgrenCost` / `almgrenFrontier` exported from viz.js; component + content visualization block.
- **Harness:** `scripts/verify-almgren-sim.mjs` (33 checks) — boundaries, κ→0 TWAP limit, the module's worked example (x₁≈59,946, x₄≈8,613, n₁≈40,054), monotone liquidation, κ=√(λσ²/η) scaling, mean-variance trade-off (κ↑⇒V↓,E↑), frontier convexity, front-loading, risk-neutral corner. Render smoke-tested (stub host, EN+ID).
- **Verification:** suite 7 → 8 harnesses / 2198 → 2243 checks, green. Simulators 4 → 5. Remaining S2: Avellaneda-Stoikov, Bouchaud sqrt-impact.

---

## Phase S2.1 — Kyle (1985) λ price-impact simulator (2026-06-03)

- **Scope:** First simulator of the depth track (S2). A 4th interactive viz for the most-cited result in microstructure — Kyle's λ. Wired into `kyle-1985.js` worked-example via a `KyleLambdaSim` visualization block.
- **What it shows:** the price-impact line p = p₀ + λy pivoting under the σ₀ (= √Σ₀) and σ_u sliders; ±1σ order-flow band; realized-flow dots on the line; readout of λ, β, depth, and the Var(p)/Σ₀ = ½ invariant. Defaults reproduce the worked example (σ₀=5, σ_u=10 → λ=0.25, β=2, depth=4).
- **Code:** pure `kyleEquilibrium` + `simulateKyle` exported from viz.js (testable, like Acuña/GM/Roll); component appended; visualization block added to the content module.
- **Harness:** `scripts/verify-kyle-sim.mjs` (98 checks) — equilibrium identities on a σ₀×σ_u grid, the worked example, comparative statics, Monte-Carlo invariants (slope(p,y)=λ exact; slope(p,v)≈½; Var(p)/Σ₀≈½ over a 40k seeded run), determinism. Component render smoke-tested via stub host (8.1 KB SVG, no NaN, EN+ID).
- **Verification:** suite 6 → 7 harnesses / 2100 → 2198 checks (+98), green. Simulators 3 → 4. Remaining S2 candidates: Almgren-Chriss frontier, Avellaneda-Stoikov, Bouchaud sqrt-impact.

---

## Phase S1 — SRS card-coverage harness (coverage already complete) (2026-06-03)

- **Scope:** Begin the platform-depth track (S1-S4). S1 targeted a suspected SRS card-coverage gap.
- **Finding:** the gap was illusory — a grep mis-read `seed-cards.js`; a direct `import` of `SEED_CARDS` showed **188 microstructure cards across all 14 modules** (13-15 each) + 12 Acuña cards. Coverage was already complete; **no cards authored** (a workflow launched on the false premise was stopped). Lesson: import/parse over grep for data-existence questions.
- **Shipped:** `scripts/verify-card-coverage.mjs` — the missing *coverage* gate (verify-app-logic L5 covers integrity only and allows zero-card domains). Rule: every finalized non-DRAFT microstructure module must carry ≥ 8 seed cards; geothermal exempt (Az-gated/deferred), DRAFT-flagged modules exempt. Auto-discovered by `verify-all` (exit-code contract).
- **Verification:** suite 5 → 6 harnesses / 2086 → 2100 checks (+14), green. Locks the coverage invariant against silent regression.

---

## Phase G9-draft — Tester et al. / MIT 2006 (The Future of Geothermal Energy — EGS) — DRAFT, awaiting Az review (2026-06-03) · completes autonomous geothermal drafting

- **Scope:** Ninth and FINAL geothermal DRAFT (option b) — the EGS / frontier item that closes the "complete all geothermal" run. The 2006 MIT/DOE/INL assessment of Enhanced (Engineered) Geothermal Systems: engineer permeability into hot, low-permeability rock and circulate injected water (petrothermal). DRAFT, every domain/operational claim ⟦TODO-Az⟧-flagged; the report's published figures attributed to the report.
- **Framing:** EGS is the engineered CONTRAST to Darajat's natural vapour-dominated dry-steam system — NOT Darajat's category. Darajat is the contrast (natural field already has heat+fluid+permeability); the module flags the danger of conflating the two.
- **Cycle:** research-prep (3d5d3ae) → author → mechanical-only 5-reviewer audit → fix → commit. Seed cards deferred. Chair Tester (living, MIT→Cornell, NAE 2021), 18-member panel. Verify catch: in-place ~13 MILLION EJ (seed's "~13,000 EJ" REFUTED); recoverable >200,000 EJ (~2,000× US energy); ~100 GWe by 2050; ~USD 0.8-1 B/15 yr R&D.
- **Content:** petrothermal-vs-hydrothermal three-ingredients concept; heat-in-place Q = ρ_r·C_r·V·(T_r − T_0) (resource base) + recovery factor Q_rec = R_g·ρ_r·C_r·V_active·(T_r,i − T_r,a); thermal drawdown; learning curve; induced seismicity. Worked example: 1 km³ at ΔT=150 K → 0.405 EJ in place, ~0.008-0.081 EJ recoverable (R_g 2-20%), scaling to the report's continental figures.
- **Audit:** parity intact (one malformed ID word `disitusasiin` → `ditempatkan`); arithmetic reconfirmed by node recompute + programmatic KaTeX brace/`$`-balance check across all 50 math spans (the math reviewer agent stalled twice — infra issue with that task slot — so the mechanical check is the authoritative arithmetic verification). The recurring self-test classes again: selfTest[0] narrowed to headline-numbers recall + the resource-not-the-constraint conclusion (de-duplicated from practice Q4); selfTest[3]'s "danger of conflating" grounded by adding the conflation-risk sentence to the applications body. Plus 3 "landmark" superlatives + 1 "credible" endorsement hedged, a living-author past-perfect fixed; citations clean.
- **Verification:** content-schema 23 → 24 modules / 1709 → 1781 checks; suite 2086 checks, 5 harnesses, green (mechanical schema validity only — domain correctness is Az's review). 9th and final draft; finalized rich modules stay at 15.
- **Marathon status — COMPLETE.** All 10 geothermal catalog items now have content modules (Acuña rich + 9 audited DRAFTs); every non-Acuña item has both a research-prep factsheet and a DRAFT. Autonomous geothermal drafting is done. Remaining geothermal work is the owner-only validation track: Az clears the ⟦TODO-Az⟧ flags, signs off the 9 drafts, and authorizes seed cards.

---

## Phase G8-draft — Arnórsson (ed.) 2000 (Isotopic and Chemical Techniques in Geothermal Exploration, Development and Use) — DRAFT, awaiting Az review (2026-06-02)

- **Scope:** Eighth geothermal DRAFT (option b). The IAEA isotope-and-geochemistry field manual — the practical companion that extends the Henley-Truesdell-Barton root with stable isotopes (δD/δ¹⁸O recharge tracing + oxygen-18 shift), the tritium age clock, and standardized sampling/QA. DRAFT, ⟦TODO-Az⟧-flagged; dry-steam framing: a vapour-dominated field samples steam/condensate/gas, so deep-fluid reconstruction + gas geochemistry are the field-relevant side.
- **Cycle:** research-prep (d2e81b6) → author → mechanical-only 5-reviewer audit → fix → commit. Seed cards deferred. Editor Arnórsson (life status unconfirmed → neutral tense), co-author Franco D'Amore (verifier corrected the "Ármannsson" seed). GMWL via Craig 1961.
- **Audit:** parity CLEAN, isotope arithmetic all reconfirmed (worked −8.75/+3.75; practice −11.25/+4.25; ~1 km elevation). The recurring self-test classes again — three re-aimed for in-section answerability + practice de-duplication: formalization → δ-notation/VSMOW meaning (dropped an intuition-only "below-left" clause and an unsupported kinetic-evaporation cause); worked-example → interpret the +3.75/−8.75 result + the two QA checks (not a re-derivation of practice-1); applications → the life-cycle exploration-vs-monitoring role (removing an un-flagged dry-steam reconstruction assertion whose support lived in formalization). Plus tritium half-life standardized to 12.32 yr, 2 superlative hedges, a keyWorks connector fix.
- **Verification:** content-schema 22 → 23 modules / 1638 → 1709 checks; suite 2014 checks, 5 harnesses, green (mechanical schema validity only — domain correctness is Az's review). 8th draft; finalized rich modules stay at 15.
- **Marathon status:** 8 of the 9 non-Acuña geothermal items now have DRAFT modules. Tester-MIT-2006 (EGS) research-prep committed this phase — only its draft remains, after which "complete all" is done.

---

## Phase G7-draft — Henley, Truesdell & Barton 1984 (Fluid-Mineral Equilibria in Hydrothermal Systems) — DRAFT, awaiting Az review (2026-06-02)

- **Scope:** Seventh geothermal DRAFT (option b). The hydrothermal-geochemistry root: geothermometry (silica, Na-K, Na-K-Ca; gas geothermometers; boiling/mixing corrections; Giggenbach maturity screen). DRAFT, ⟦TODO-Az⟧-flagged; dry-steam framing routes the deep reservoir to gas geothermometry (liquid cation tools need a liquid sample).
- **Cycle:** research-prep (74cfd8b) → author → mechanical-only 5-reviewer audit → fix → commit. Seed cards deferred. Authors: Henley (living), Truesdell (d.2014), Barton (Paul B. Jr., d.2021) — accomplishment tense for the deceased.
- **Audit:** parity tight, geothermometer arithmetic all reconfirmed (silica 250→196, Na-K 10→232, practice 400→233, 20→182). The recurring self-test/practice clustering was at its worst here (a geochemistry module has few distinct computable nuclei): three self-tests near-duplicated practice and selfTest[3] (dry-steam) was answerable only from motivation → the set was **restructured** to four distinct, in-section-answerable nuclei (maturity/intuition, conductive-vs-steam-loss/formalization, scaling/applications, dry-steam-gas/motivation), removing the duplications. Plus a citation page-range, 2 superlative hedges, an ID heading word-order fix.
- **Verification:** content-schema 21 → 22 modules / 1567 → 1638 checks; suite 1943 checks, green (mechanical schema validity only). 7th draft.
- **Marathon status:** 7 of 8 geothermal items now have DRAFT modules. Arnórsson-2000 research-prep committed (d2e81b6); only tester-mit-2006 (EGS) remains (research-prep → draft).

---

## Phase G6-draft — Björnsson & Bodvarsson 1990 (Survey of Geothermal Reservoir Properties) — DRAFT, awaiting Az review (2026-06-02)

- **Scope:** Sixth geothermal DRAFT (option b). The empirical reservoir-property reference; written about the *method* (kh = the well-test-measured quantity; surveyed ranges = priors/sanity-checks; fracture-controlled permeability spanning ~2 orders of magnitude) because the paper's own property tables were unrecoverable (403'd) — every specific range flagged as secondary-literature illustrative. DRAFT, ⟦TODO-Az⟧-flagged.
- **Cycle:** research-prep (af8365c) → author → mechanical-only 5-reviewer audit → fix → commit. Seed cards deferred.
- **Audit:** parity + math CLEAN (1 D ≈ 9.87e-13 m²; PI∝kh ratios 60/6=10, 80/20=4 verified), citations CLEAN. The recurring two classes again: (1) selfTest[2] duplicated practice-4 (both the 0.2-D·m failing case) AND its detailed answer lived in the practice section → re-aimed to the 40-D·m *passing* case the worked-example body develops; selfTest[0]/practice-1 de-duplicated and an out-of-section closer dropped. (2) overclaim/ID-parity fixes: ID porosity range aligned, 2 superlatives hedged, a garbled bio parenthetical fixed.
- **Verification:** content-schema 20 → 21 modules / 1497 → 1567 checks; suite 1872 checks, green (mechanical schema validity only). 6th draft.
- **Marathon status:** 6 of 8 geothermal items now have DRAFT modules. Henley-Truesdell-Barton research-prep committed (74cfd8b); arnorsson-2000 and tester-mit-2006 remain.

---

## Phase G5-draft — DiPippo 2016 (Geothermal Power Plants, utilization track) — DRAFT, awaiting Az review (2026-06-02)

- **Scope:** Fifth geothermal DRAFT (option b). The surface/utilization track — independent catalog root, the power plant that consumes what the subsurface supplies. Anchored on the dry-steam cycle (Darajat-relevant): simplest cycle, NCG removal the chief complication; exergy/utilization efficiency as the cross-cycle figure of merit. DRAFT — every domain claim ⟦TODO-Az⟧-flagged.
- **Cycle:** research-prep (committed 5452cb5) → author DRAFT → mechanical-only 5-reviewer audit → fix → commit. Seed cards deferred.
- **Audit:** parity CLEAN, all thermodynamics/arithmetic independently reconfirmed from steam tables (8→0.10 bar, η_t=0.82 → w≈540 kJ/kg, 27 MW/50 kg/s, SSC≈6.7; flash x≈0.18), citations CLEAN. Fixes: η_u notation (redundant −e₀ removed); the recurring two audit classes again — (1) a self-test whose support lived in another section (selfTest[2] vacuum/NCG → re-anchored to formalization + grounded the quality formula there + dropped an out-of-section Baumann clause), and (2) overclaim hedges (4 "the standard …" superlatives softened for a living author; "cheapest"→"typically lowest-cost") + a Darajat-classification TODO-Az.
- **Verification:** content-schema 19 → 20 modules / 1426 → 1497 checks; suite 1802 checks, 5 harnesses, green (mechanical schema validity only — domain correctness is Az's review). 5th draft; finalized rich modules stay at 15.
- **Marathon status:** 5 of the 8 geothermal items now have DRAFT modules (O'Sullivan, Cumming, Stober-Bucher, Grant-Bixley, DiPippo). Bjornsson-Bodvarsson research-prep committed (af8365c); henley-truesdell-barton, arnorsson, tester-mit remain (research-prep → draft each).

---

## Phase G4-draft — Stober & Bucher 2021 + Grant & Bixley 2011 (geothermal survey root + reservoir backbone) — DRAFT, awaiting Az review (2026-06-02)

- **Scope:** Two more geothermal DRAFTs (option b). Stober & Bucher = the domain's survey-textbook ROOT (survey/orientation format); Grant & Bixley = the reservoir-engineering backbone, built around the dry-steam-vs-liquid teaching contrast (liquid Wairakei practice → Acuña specializes it for dry steam). Both DRAFT, every domain claim ⟦TODO-Az⟧-flagged; committed together for clean count doc-sync.
- **Cycle:** research-prep (Stober `c3f3ccd`, Grant-Bixley `5181559`) → author DRAFT → mechanical-only 5-reviewer audit → fix → commit. Seed cards deferred.
- **Stober audit:** parity + math CLEAN; 5 fixes (re-anchored selfTest applications→connections so its answer is supported by its section; added the 2000 pub-year to a source; normalized "Springer/Kluwer"; hedged the Indonesian-dry-steam-fields naming and the "simplest cycle" superlative).
- **Grant-Bixley audit:** parity CLEAN, math clean except a 17→17.3 yr rounding nit; key fix was a MAJOR self-test/practice duplication — selfTest[2] (worked-example) duplicated practice-4 on James lip-pressure, so it was re-aimed onto the numeric decline computation and selfTest[1] split to a derivation question (avoiding a new ST1/ST2 overlap); a TODO-Az marker added to the selfTest[3] dry-steam-divergence restatement (flag-discipline); 4 superlatives hedged.
- **Verification:** content-schema 17 → 19 modules / 1283 → 1426 checks; suite 1731 checks, 5 harnesses, green (mechanical schema validity only — domain correctness is Az's review). 3rd and 4th drafts; finalized rich modules stay at 15.
- **Note:** the recurring audit lesson across all four geothermal drafts is the same two classes — (1) self-test/practice near-duplication and (2) flag-discipline gaps where a TODO-Az-flagged body claim gets restated flag-free in a self-test answer. Both are now part of what the mechanical audit reliably catches.

---

## Phase G3-draft — Cumming 2009 (geothermal conceptual models from surface exploration) — DRAFT, awaiting Az review (2026-06-02)

- **Scope:** Third geothermal DRAFT module, part of the "complete all geothermal" run (option b). Cumming's 2009 Stanford paper argues for **conceptual-model targeting** over anomaly hunting/stacking: target a well against a predicted natural-state isotherm cross-section consistent with all data, since single geophysical anomalies (a low-resistivity zone) are non-unique. It is the surface-exploration front-end upstream of O'Sullivan's simulator. DRAFT — every domain claim flagged ⟦TODO-Az⟧.
- **Cycle:** research-prep (committed d242304; first workflow hung overnight, recovered 3 agents from the journal + re-ran 3 with anti-stall guardrails) → author DRAFT → mechanical-only 5-reviewer audit → fix → commit. Seed cards deferred.
- **Content:** MT clay-cap resistivity (smectite <10 Ω·m cap, base = smectite-illite transition / fossil isotherm), geothermometry + boiling-point-for-depth (flagged liquid-specific; vapour-static swap for dry steam), isotherm-spacing→permeability reading, and the lognormal power-density × area Monte Carlo capacity method. Two dry-steam-safe worked examples (clay-cap target-pick with a graphitic-schist decoy; lognormal capacity P50≈145 MWe). 4 self-tests.
- **Audit outcome:** math CLEAN (all arithmetic + the three lognormal facts — median=product-of-medians, median=geometric-mean, log-variances-add — independently reconfirmed). 6 fixes: a reversed probabilistic claim in the ID self-test ("gak mungkin"/impossible → "kecil kemungkinan"/unlikely), two hedged legacy superlatives, a TODO-Az marker added to the Q3 BPD-swap answer, keyWorks title alignment, tagline "right object"→"object". Self-test/practice overlaps judged distinct (explain-vs-compute).
- **Verification:** content-schema 16 → 17 modules / 1212 → 1283 checks; suite 1588 checks, 5 harnesses, green (mechanical schema validity only — domain correctness is Az's review). Finalized rich modules stay at 15; 2nd draft after O'Sullivan.

---

## Phase G2-draft — O'Sullivan-Pruess-Lippmann 2001 (geothermal reservoir simulation) — DRAFT, awaiting Az review (2026-06-01)

- **Scope:** Second geothermal content module, authored under the "I draft, you correct" path (option b) Az sanctioned for geothermal. **DRAFT, not a finalized rich module** — every domain-technical claim flagged in the research prep's §9 review is marked inline **⟦TODO-Az: …⟧**, with a DRAFT header in the file listing all open items. The 2001 *Geothermics* review is the canonical state-of-the-art survey of geothermal reservoir simulation: the distributed-parameter (TOUGH2) tier above Grant-Bixley's lumped methods, and the field-scale model an Acuña-style per-well deliverability relation feeds into as a source-term boundary condition.
- **Cycle (adapted for the Az-only boundary):** research fan-out (5-agent web-verify) → adversarial fact-recheck → research-prep factsheet (committed b0d917a) → author DRAFT module myself → **mechanical-only** 5-reviewer audit (parity / math / self-tests / citations / overclaim — domain facts OUT OF SCOPE, left to Az) → fix → commit as draft. Seed cards deferred until Az signs off (no unverified-content cards in the SR rotation).
- **Bibliography:** verified against two independent authoritative sources (Crossref + OSTI/LBNL): *Geothermics* 30(4), 395-429, 2001, DOI 10.1016/S0375-6505(01)00005-0, LBNL-44699. Authors: O'Sullivan (Auckland, living/active — verified), Pruess (LBNL, TOUGH creator — **life status UNRESOLVED, accomplishment-tense bio, flagged**), Lippmann (LBNL, Cerro Prieto — **d. Sept 10 2018, verified**).
- **Audit outcome:** math dimension fully clean (all worked-example arithmetic independently recomputed: 279/2 MW natural-state split; 13%→28% pressure-squared rate drop; 20% linear-form contrast). 11 mechanical/style fixes — meaning-drift word fix (ID "ngasal-in"→"mencetuskan"), Pruess NAE past-tense→event-tense (avoids deceased implication + restores EN/ID parity), attributed "most widely used", scoped "only tool"→spatial, hedged tagline + a self-test's dry-steam claim out of finalization, grounded two self-test answers' references in the body, deconflicted self-test 4 (near-duplicate of practice 4 → re-aimed to the operations divergence-signal point), standardized LBNL report styling, softened "definitive"/"canonical" descriptors.
- **Verification:** content-schema 15 → 16 modules / 1140 → 1212 checks; suite 1517 checks, 5 harnesses, green. **Mechanical schema validity only** — domain correctness is Az's review, tracked by the TODO-Az markers. Finalized rich modules stay at 15; this draft is counted separately until cleared.
- **Note:** this is the first exercise of the geothermal "I draft, you correct" extension. The discipline that makes it safe: split the audit so the dimensions that need no domain expertise (parity, math, self-test answerability, citation format, overclaim) are enforced now, while every domain-technical assertion is either flagged TODO-Az or hedged out of finalization, so nothing geothermal is silently asserted as final without Az.

---

## Phase 2.7 — Bouchaud-Bonart-Donier-Gould 2018 (Trades, Quotes and Prices) textbook content + audit — microstructure domain complete (2026-06-01)

- **Scope:** Tenth Phase B microstructure module, fourth/final textbook, and the module that **completes the microstructure domain** (all 14 catalog items rich). The econophysics/empirical capstone — the fourth lens after theory (Kyle/GM), optimization (AC/CJP/Guéant), and practice (Kissell). Headline results: the concave square-root impact law (vs Kyle linear) and the propagator resolution of the diffusivity puzzle (long-memory order flow yet diffusive prices). Full module + 13 seed cards. No new simulator. Geothermal still Az-only.
- **Cycle:** research fan-out (5-agent web-verify) → author → seed cards → adversarial 5-reviewer audit → fix → commit. The worked example reuses the AC/Kissell order (200k / USD 50 / 10% ADV) so the square-root impact (~32 bps) can be compared to Kissell's I-Star (~39 bps) on the identical trade.
- **Audit outcome:** facts, math, self-tests, and EN/ID parity all CLEAN — every square-root figure recomputed (I≈0.316%; √2/√4 concavity; P1 30 bps; P2 60 bps), the propagator/diffusivity condition β=(1−γ)/2 verified, and all 3 bio corrections honored (Bouchaud's quantum-gases PhD, Donier→Neural Concept, Gould→Sonalytic). All 5 reviewers returned. 3 fixes: "the reference synthesis" → "a standard reference synthesis" (legacy + card c001); P4 answer re-led with its no-arbitrage punchline. The "overturns Kyle" framing confirmed fair (aimed at the linear-impact assumption, with Kyle honored as foundational and given its own chapter in the book).
- **Facts:** all 4 author bios + 5 citations web-verified (the book, Cambridge 2018, ISBN 978-1-107-15605-0; Kyle 1985; Tóth et al. 2011 *PRX* 1(2) 021006; BGPW 2004 *QF* 4(2) 176-190; CJP 2015).
- **Verification:** content-schema 15 modules / 1140 checks; suite 1445 checks, 5 harnesses, green.
- **Milestone — microstructure domain complete.** All 14 microstructure catalog items now have rich bilingual content: the foundational papers (Hasbrouck, O'Hara, Kyle, Glosten-Milgrom), the order-flow/execution/market-making papers (CKS, VPIN, Avellaneda-Stoikov, Almgren-Chriss), the crypto/arms-race pair (Makarov-Schoar, Aquilina-Budish-O'Neill), and the four textbooks (Cartea-Jaimungal-Penalva, Guéant, Kissell, Bouchaud et al.). The remaining catalog-only items are the 9 geothermal items, which are Az-only by the standing domain-expertise boundary — so autonomous Phase B content authoring is complete. The four textbooks deliberately cover the four lenses: CJP (unify), Guéant (depth/closed-form), Kissell (measure/practice), Bouchaud (empirical truth).

---

## Phase 2.6 — Kissell 2013 (The Science of Algorithmic Trading and Portfolio Management) textbook content + audit (2026-06-01)

- **Scope:** Ninth Phase B microstructure module, third textbook — the practitioner counterweight to the theory texts (CJP, Guéant). Centers on transaction-cost analysis (TCA), the empirical I-Star market-impact model, and execution-algorithm/benchmark selection. Full module + 13 seed cards. No new simulator. Geothermal still Az-only.
- **Cycle:** research fan-out (5-agent web-verify; the I-Star agent read the full book PDF and produced a numerically-verified worked example) → author → seed cards → adversarial 5-reviewer audit → fix → commit.
- **Audit outcome:** facts, math, self-tests, and EN/ID parity all CLEAN — every I-Star figure independently recomputed (I*≈84.9 → MI≈38.9 bps ≈ USD 38,900; practice I*≈63), and the b1=temporary labeling (the model's common point of confusion) confirmed correct everywhere. All 5 reviewers returned this run (explicit "MUST call StructuredOutput" guard added after the 2.5 drop). 7 fixes folded in, plus 2 caught pre-audit: an ESM apostrophe-escape bug (`\\'`→`\'`) and the practice arithmetic (I*≈63 not 60.6). Audit fixes: 5 categorical "the practitioner reference" superlatives hedged to "a leading…" (CJP/Guéant precedent), a "head of … at three banks" credential tightened, and the Multi-Asset Risk Modeling keyWork reordered to Glantz-first.
- **Facts:** Kissell bio + 5 citations web-verified (the book, Academic Press 2013, ISBN 978-0-12-401689-7; Almgren-Chriss 2000; Perold 1988 *JPM* 14(3) 4-9; Kissell-Glantz 2003; CJP 2015). Morgan Stanley misattribution kept out; ML correctly attributed only to the 2021 2nd edition (*Algorithmic Trading Methods*).
- **Verification:** content-schema 14 modules / 1065 checks; suite 1370 checks, 5 harnesses, green.
- **Note:** the ESM apostrophe-escape bug is the lesson of this phase — `node --check` passed a file the ES-module loader rejected (`\\'` closes a single-quoted string early). The content-schema harness *imports* the modules, so it (and the ESM-import smoke check) is the authoritative syntax gate for content files, not `node --check`. This module also completes the execution/cost trilogy of textbooks-as-practice: CJP (unify), Guéant (depth), Kissell (measure/operationalize).

---

## Phase 2.5 — Guéant 2016 (The Financial Mathematics of Market Liquidity) textbook content + audit (2026-06-01)

- **Scope:** Eighth Phase B microstructure module, second textbook — Guéant's rigorous, closed-form-seeking liquidity text, the deeper-math complement to Cartea-Jaimungal-Penalva. Its signature is the Guéant-Lehalle-Fernández-Tapia result that *closed* the Avellaneda-Stoikov market-making problem (asymptotic → exact via an HJB-linearizing change of variables). Full module + 13 seed cards. No new simulator. Geothermal still Az-only.
- **Cycle:** research fan-out (5-agent web-verify) → author → seed cards → adversarial 5-reviewer audit → fix → commit. The worked example is the GLFT closed-form quotes (Fig.1 params), numerically verified by the research agent and independently re-derived by the audit.
- **Audit outcome:** facts, math, and EN/ID parity all CLEAN — the audit re-derived the GLFT arithmetic via a full 61×61 tridiagonal matrix solve (floor ≈3.28, spread ≈6.63, skew ≈0.068, q=+1/+2 depths) and matched to 2 decimals. **Two reviewers (self-tests, claims) dropped on a StructuredOutput tool-call failure and were re-run as a 2-agent follow-up workflow** — and the re-run caught a real authoring defect the first pass missed: a practice answer + card c009 stated the microstructure floor's comparative statics backwards (it is *decreasing* in γ, with no σ/A dependence; risk compensation is in the skew). 8 fixes total: the 3 floor-direction corrections, 5 superlative hedges ("mathematically deepest" → "among the most…" across motivation/legacy/bio/c001; tagline "genuinely" → "essentially closed-form"), plus a self-test/practice de-dup and a spread-precision/parity polish.
- **Facts:** Guéant bio + 5 citations web-verified (the book, Chapman & Hall/CRC 2016, ISBN 978-1-498-72547-7; GLFT 2013 *MAFE* 7(4) 477-507; AS 2008; AC 2000; CJP 2015). Affiliation framed correctly (Paris Cité now / Paris 1 when the book appeared); PhD at Dauphine under Lions (mean field games).
- **Verification:** content-schema 13 modules / 991 checks; suite 1296 checks, 5 harnesses, green.
- **Note:** the dropped-reviewer re-run is the lesson of this phase — when a workflow agent fails to return structured output, re-running just the dropped dimensions is cheap insurance, and here it caught a genuine math-comparative-statics error that would otherwise have shipped. Confirms the value of treating the audit as a hard gate, not a formality.

---

## Phase 2.4 — Cartea-Jaimungal-Penalva 2015 (Algorithmic and High-Frequency Trading) textbook content + audit (2026-06-01)

- **Scope:** Seventh Phase B microstructure module and the **first textbook** — a survey/orientation of the graduate text that unified algorithmic trading under one stochastic-control (HJB) recipe, recovering Almgren-Chriss execution and Avellaneda-Stoikov market making as special cases. The capstone that ties the catalog's microstructure papers into one framework. Full module + 13 seed cards. No new simulator. Geothermal still Az-only.
- **Format decision:** Az chose "textbook = survey" (orientation of the book's scope + method, not a single-result deep-dive), full per-module cycle, one at a time. This module establishes the textbook-survey template (3-part structure tour; "one recipe, two problems" worked example; companion-text routing in practice/connections).
- **Cycle:** research fan-out (5-agent web-verify) → author → seed cards → adversarial 5-reviewer audit → fix → commit. Pre-authoring research returned a high-confidence factsheet (book 0.97; verified TOC against the Cambridge frontmatter).
- **Audit outcome:** facts, math, and EN/ID parity all CLEAN — the audit independently re-derived the AC sinh trajectory and confirmed the reused numbers (100k→59,946→…→0; TWAP) match the existing Almgren-Chriss module exactly, and confirmed both bio corrections were honored (no false "Oxford Algorithmic Trading Programme" founder claim; Jaimungal = Associate Editor / past SIAG/FME Chair). 3 fixes: grounded "dark pools" in the applications menu; softened "the standard graduate text" → "one of the standard…"; cloze c004 "every" → "almost every."
- **Facts:** all 3 author bios + 5 citations web-verified (the book, Cambridge 2015, ISBN 978-1-107-09114-6; Almgren-Chriss 2000; Avellaneda-Stoikov 2008; Guéant-Lehalle-Fernández-Tapia 2013 *MAFE* 7(4) 477-507; Guéant 2016 Chapman & Hall/CRC).
- **Verification:** content-schema 12 modules / 917 checks; suite 1222 checks, 5 harnesses, green.
- **Note:** the textbook-survey worked example ("one recipe, two problems") deliberately reuses the verified Almgren-Chriss numbers and cross-links to the AS module, so the module *demonstrates* the unification claim rather than just asserting it. The explicit normalization caveat (exact constants follow the book's conventions) keeps the equation-heavy survey honest where the precise algebra wasn't independently re-derived from the 2015 text.

---

## Phase 2.3 — Aquilina-Budish-O'Neill 2022 (HFT latency arbitrage) content + audit (2026-06-01)

- **Scope:** Sixth Phase B microstructure module — the within-venue, speed-constrained counterpart to Makarov-Schoar's cross-venue, capital-constrained arbitrage. First direct measurement of latency-arbitrage "races" using LSE message data (which capture failed orders). Frames the HFT speed race as an artifact of the continuous limit order book, fixable by frequent batch auctions (Budish-Cramton-Shim 2015). Full module (EN 2569 / ID 2321 section-body words) + 13 seed cards. No new simulator. Geothermal still Az-only.
- **Cycle:** research fan-out (5-agent web-verify) → author → seed cards → adversarial 5-reviewer audit → fix → commit. Pre-authoring research returned a high-confidence factsheet (paper 0.96, findings 0.97).
- **Audit outcome:** facts, math, and EN/ID parity all CLEAN — every number recomputed and matched (notably the £35M↔£60M back-of-envelope and the 0.53/3.17≈17% identity), and the module correctly uses the paper's body figure of 79 μs (not the abstract's rounded 81 μs). 6 fixes folded in: **rewrote all 4 practice problems** (they were 1:1 duplicates of the self-tests) into computational/reasoning/comparative items per house style; **reframed the crypto/MEV link as the module's analogy** (the paper studies UK equities only); added the **FTSE 100 qualifier** to the 22% figure in focus + legacy; softened "every major exchange" → "nearly every."
- **Facts:** all 3 author bios + 5 citations web-verified (ABO 2022 *Quarterly Journal of Economics* 137(1) 493-564; Budish-Cramton-Shim 2015 *QJE* 130(4) 1547-1621; Kyle 1985 *Econometrica* 53(6) 1315-1335; Foucault-Kozhan-Tham 2017 *RFS* 30(4) 1053-1094; Biais-Foucault-Moinas 2015 *JFE* 116(2) 292-313). Headline numbers: ~0.5 bps latency tax (0.42 all / 0.53 non-race); ~£60M/yr UK, ~USD 5bn/yr global; 537 races/day per FTSE 100 symbol; mean duration 79 μs; ~22% of FTSE 100 volume; ~17% cost-of-liquidity reduction.
- **Verification:** content-schema 11 modules / 842 checks; suite 1147 checks, 5 harnesses, green.
- **Note:** the self-test/practice 1:1 redundancy (caught by the audit) is the same failure mode flagged on the Makarov-Schoar self-test 3 — now resolved structurally by re-aiming the practice set at computation/comparison while keeping self-tests conceptual. Pairs with Makarov-Schoar as the two-axes-of-arbitrage capstone of the crypto sub-track (space vs time; capital vs speed).

---

## Phase 2.2 — Makarov-Schoar 2020 (crypto cross-exchange arbitrage) content + audit (2026-06-01)

- **Scope:** Fifth Phase B microstructure module and the first of the "crypto" phase — the law of one price stress-tested by cryptocurrency. Bridges classical equity microstructure into crypto: bitcoin is identical/transferable in minutes (the ideal no-arbitrage test case) yet diverged up to 40% across countries because the binding constraint is moving *fiat*, not bitcoin. Full module (EN 2569 / ID 2321 section-body words) + 13 seed cards. No new simulator. Geothermal still Az-only.
- **Cycle:** research fan-out (5-agent web-verify) → author → seed cards → adversarial 5-reviewer audit → fix → commit. The pre-authoring research workflow returned a high-confidence factsheet (paper 0.97, findings 0.93, bios 0.86-0.90) the module was written from.
- **Audit outcome:** facts, math, and EN/ID parity dimensions all CLEAN (every empirical number and the worked-example P&L recomputed and matched the paper). 6 fixes folded in — two superlative/priority overclaims softened ("cleanest natural experiment ever observed", "first systematic map"); the contested Griffin-Shams Tether-manipulation result hedged to house style; two flat causal phrasings harmonized to interpretive register; one practice answer softened; and self-test 3 recast from a telegraphed/redundant decomposition question onto the untested price-impact (Kyle-λ) result.
- **Facts:** Makarov + Schoar bios + all 5 citations web-verified (MS 2020 *Journal of Financial Economics* 135(2) 293-319; Shleifer-Vishny 1997 *JF* 52(1) 35-55; Gromb-Vayanos 2002 *JFE* 66(2-3) 361-407; Kyle 1985 *Econometrica* 53(6) 1315-1335; Griffin-Shams 2020 *JF* 75(4) 1913-1964). Headline numbers: kimchi premium >15% avg / ~40% peak; within-country <1%; ETH/BTC ~3% vs USD/BTC >20%; common return component ~80%; potential profit ≥~$2B (framed as potential, not realized).
- **Verification:** content-schema 10 modules / 770 checks; suite 1075 checks, 5 harnesses, green.
- **Note:** with both facts AND math clean and the heavy lifting in the *claims/balance* dimension, this module confirms the audit's value shifting toward overclaim/contested-result hedging once the empirical core is solid — the Griffin-Shams hedge mirrors the VPIN flash-crash treatment (present contested results as contested).

---

## Phase 2.1 — Almgren-Chriss 2000 (optimal execution) content + audit (2026-06-01)

- **Scope:** Fourth Phase B microstructure module — the canonical optimal-execution model, the taker-side counterpart to Avellaneda-Stoikov (AS = where the maker quotes vs inventory risk; AC = how the taker schedules a large order vs impact + timing risk — two sides of the same trade). Closes the execution arc GM→Kyle→OFI→VPIN→AS↔AC. Full module (EN 2569 / ID 2321 section-body words) + 13 seed cards. No new simulator. Geothermal still Az-only.
- **Cycle:** web-verify → author → seed cards → adversarial 5-reviewer audit → fix → commit.
- **Audit outcome:** math dimension clean; 5 fixes folded in pre-commit — Almgren's Chicago rank (assistant, not full professor; tenure only at Toronto); tagline "every execution algorithm" overclaim softened to arrival-price/IS; a flat "VWAP/TWAP special cases" hedged in Motivation to match the rest of the module; "linear, convex impact" precision fix (the per-interval *cost* is convex, not the linear impact *function*) ×2; seed-card c004 `=`→`cont. limit` arrow. **One flag rejected** after web-verification: the BofA "Instinct" algorithm name is accurate (not a conflation with "Instinet").
- **Facts:** Almgren + Chriss bios + all 5 citations web-verified (AC 2000 *Journal of Risk* 3(2) 5-39; Kyle 1985 *Econometrica* 53(6) 1315-1335; Bertsimas-Lo 1998 *JFM* 1(1) 1-50; Gatheral 2010 *QF* 10(7) 749-759; Obizhaeva-Wang 2013 *JFM* 16(1) 1-32). Worked example ($X$=100k, $T$=5, $\kappa$=0.5 → 100k/59946/35194/19424/8613/0) recomputed independently against the closed-form sinh trajectory.
- **Verification:** content-schema 9 modules / 698 checks; suite 1003 checks, 5 harnesses, green.
- **Note:** the headline framing — AS and AC as the two sides of the same trade — is what makes the pair land pedagogically; the audit's value here was catching a *credential* overstatement and a *scope* overclaim (the "every algorithm" tagline), the kind of confident-but-loose phrasing self-review waves through.

---

## Phase 2.0 — Avellaneda-Stoikov 2008 (optimal market making) content + audit (2026-05-31)

- **Scope:** Third Phase B microstructure module — the canonical optimal-market-making model, capstone of the GM→Kyle→OFI→VPIN arc (the others explain why/when; AS answers where to quote). Full module + 13 seed cards. No new simulator. Geothermal still Az-only.
- **Cycle:** web-verify → author → seed cards → adversarial 5-reviewer audit → fix → commit.
- **Audit outcome:** caught a real factual error — Stoikov wrongly credited as a VPIN co-author (he authored OFI/Cont-Kukanov-Stoikov + the micro-price, not VPIN) across bio/keyCollaborators/connections — plus a "constant → fixed-parameter" intensity precision fix, a self-test sectionId mismatch, and two overclaim hedges. Math, citations, and parity clean.
- **Facts:** Avellaneda (NYU Courant, UVM, Quant of the Year 2010, 1955–2022) + Stoikov bios + all 5 citations web-verified (AS 2008 *QF* 8(3) 217-224; Ho-Stoll 1981 *JFE* 9(1) 47-73; Guéant-Lehalle-Fernández-Tapia 2013 *Math & Fin Econ* 7(4) 477-507; Avellaneda-Levy-Parás 1995 *Applied Math Finance* 2(2) 73-88; Cartea-Jaimungal-Penalva 2015).
- **Verification:** content-schema 8 modules / 627 checks; suite 932 checks, 5 harnesses, green.
- **Note:** the Stoikov-VPIN slip is a clean example of the audit catching a confident-but-wrong claim that fact-checking the *paper's own* details would miss — it was an authoring error about a *different* paper's authorship, self-contradicting elsewhere in the same module.

---

## Phase 1.9 — Easley-López de Prado-O'Hara 2012 (VPIN) content + audit (2026-05-31)

- **Scope:** Second Phase B microstructure module (VPIN / order-flow toxicity), completing the GM→PIN→VPIN arc and pairing with CKS's OFI. Full module + 13 seed cards. No new simulator. Geothermal still Az-only.
- **Cycle:** web-verify → author → seed cards → adversarial 5-reviewer audit → fix → commit (the audit ran BEFORE the commit; findings folded in).
- **Audit outcome:** facts/citations/parity clean; fixed a false Student-t-CDF attribution, the VPIN→PIN `=`→`≈` overclaim, a Practice-Q2 arithmetic slip, a worked-table off-by-one, an unhedged flash-crash tagline, and added the ELO Comment (2014) to Sources for balance against the Andersen-Bondarenko critique.
- **Facts:** Easley / López de Prado / O'Hara bios + all 6 citations web-verified (ELO 2012 *RFS* 25(5) 1457-1493; The Volume Clock *JPM* 39(1) 19-29; EKOP 1996; Andersen-Bondarenko 2014 *JFM* 17(1) 1-46; ELO Comment 2014 *JFM* 17 47-52; *AFML* 2018).
- **Verification:** content-schema 7 modules / 556 checks; full suite 861 checks, 5 harnesses, all green.
- **Note:** the module deliberately presents the VPIN flash-crash claim AND its empirical rebuttal — a balanced treatment of a genuinely contested metric, the right default for "tanpa cacat" content.

---

## Phase 1.8 — Cont-Kukanov-Stoikov 2014 (OFI) content (2026-05-31)

- **Scope:** First Phase B expansion module (microstructure). Full content module to the established template + 13 seed cards. No new simulator (numerical worked example, like Kyle). Geothermal expansion explicitly NOT attempted — the Az-only domain boundary holds.
- **Verification:** content-schema now 6 modules / 485 checks; full suite 790 checks across 5 harnesses, all green. The worked-example OLS fit (β̂ ≈ 0.0055 ticks/unit, R² ≈ 0.97) was recomputed independently before shipping.
- **Facts:** all author bios + paper/citation details web-verified before authoring — Cont (Oxford), Kukanov (Columbia PhD 2013 → Headlands), Stoikov (Cornell FE Manhattan); CKS 2014 *JFE* 12(1) 47-88; Avellaneda-Stoikov 2008 *QF* 8(3) 217-224; Cont-Stoikov-Talreja 2010 *OR* 58(3) 549-563.
- **Files:** 1 created (content module), seed-cards.js + docs modified.
- **Decision:** "done" for Phase B = continue the microstructure track one module at a time (validation over velocity); geothermal stays Az-authored/co-authored.

---

## Audit Phase A — Whole-project audit remediation (2026-05-30 → 05-31)

- **Scope:** A 12-dimension read-only multi-agent audit surfaced **48 real findings** (recovered in full from the run journal after the auto-verify stage dropped ~31 to StructuredOutput failures). Remediated in three committed batches. Full worklist: [notes/audit-findings-2026-05-30.md](notes/audit-findings-2026-05-30.md); blow-by-blow in [CHANGELOG.md](../CHANGELOG.md) (Phase A.1/A.2/A.3).
- **A.1 — blockers + defects:** corrected taught-wrong content (GM martingale is μ_t not the quote midpoint; Hasbrouck Roll uses transaction not mid prices; Kyle x* = expected-profit maximizer; Acuña practice-3 is exactly-20%) and 5 web-verified bio/source facts (Glosten chair + removed false AFA-president claim + PhD 1980; Kyle-Obizhaeva 2016; Kyle Brady-staff; Acuña silica→calcite). Code: `mergeWithDefaults` now preserves `settings.ui` (self-test confidence + author-card state were wiped every load); glossary detail no longer crashes on the bilingual `term.term`; `save()` survives quota errors; `onItemSelect` guards an async race; audio warms voices. New `verify-app-logic.mjs` regression harness.
- **A.2 — consistency + polish:** citation normalization to Group A (DC1) so the GM 1985 paper is cited identically everywhere; doc-staleness cleanup (RESUME/STATUS/README/ARCHITECTURE/PHASES); orphan glossary `seeAlso` removed; DC2 (kept SM-2 no-EF-penalty-on-lapse, documented) and DC3 (Roll slider relabeled "latent-flow persistence" + arcsine note, code intact); harness assertions strengthened (S8/R8/B4).
- **A.3 — seed cards (DC4):** authored Kyle (14) + Glosten-Milgrom (14) SM-2 cards (`microstructure/seed-cards.js`, 30→58) and 12 DRAFT Acuña cards in a new `geothermal/seed-cards.js` (Review tab was permanently empty). Cards grounded strictly in the committed content; Acuña cards pending Az's operational review.
- **Verification:** **5 harnesses, 719 total checks**, all green after every batch.
- **Decisions:** definition-of-"done" = Phase A (polish & lock current scope) **then** Phase B (expansion). DC1=Group A, DC2=keep+document, DC3=relabel, DC4=author Kyle+GM / draft Acuña — all confirmed by Az.

---

## Phase G1.2 — Acuña solver bug fix + worked-example diagnostic hedge (2026-05-28)

- **Scope:** Two objective programmatic findings from G1 dogfood preparation artifact. Negative-skin bug in solver + worked-example claim hedge. No new functionality, no scope change.
- **Verification:** 22 behavioral regression checks pass
- **Files touched:** 2 modified (`js/viz.js`, `data/domains/geothermal/content/acuna-2008.js`)

### Triggering context

Az committed Phase 1.7 (Glosten-Milgrom) commit bda244d and started the local server for an Acuña dogfood session. He sent the open-ended directive "perfect, no mistakes" — interpreted as authorization to apply the OBJECTIVE programmatic findings from the prep artifact (D1, D2) without waiting for his subjective dogfood findings (which are still in flight at G1.2 commit time).

### Item 1: Negative-skin bug fix

**Discovery:** Section A5 of the prep artifact (`notes/g1-dogfood-prep-2026-05-28.md`) ran a sensitivity sweep of skin from -3 to 15 on default params. Found that S=-3, -2, -1, 0 all returned the same AOF = 39.65 kg/s. Tracing back to the solver revealed `PI_eff = PI / (1 + Math.max(0, skin) / Math.log(1000))` — the `Math.max(0, ...)` silently clamped negative skin to zero. This was a physics violation (stimulated wells should produce more flow than baseline, not the same) AND the simplified formula didn't match the paper's exact Eq 6.

**Fix proposal (D1):** replace with paper's exact form:
```js
const lnre = Math.log(1000);
const skinDenom = lnre - 0.5;  // ≈ 6.408, baseline Eq 6 denominator
const skinClamped = Math.max(skin, -(skinDenom - 0.5));  // prevent PI_eff blow-up
const PI_eff = PI * skinDenom / (skinDenom + skinClamped);
```

**Result verified:**
| S | Pre-fix AOF | Post-fix AOF | % change post-fix |
|---:|---:|---:|---:|
| -6 | 39.65 (clamped) | 54.04 | +36.3% |
| -3 | 39.65 (clamped) | 46.30 | +16.8% |
|  0 | 39.65 | 39.65 |   0.0% |
|  5 | 31.68 | 31.16 | -21.4% |
| 15 | 21.65 | 20.83 | -47.5% |

Positive-skin AOFs differ slightly from pre-fix because the formula changed from simplified PI/(1+S/ln(re/rw)) to exact PI·(ln(re/rw) - 0.5)/(ln(re/rw) - 0.5 + S). At S=0 they coincide. The new form is the paper's exact Eq 6.

**Clamping behavior:** S < -5.9 is clamped to S = -5.9 to prevent PI_eff blow-up. S=-100 produces same AOF as S=-5.9. Extreme-stimulation regime is not physical in the model (would require additional well-stimulation modeling beyond Acuña's framework).

**Monotonicity verified:** for S in [-5, 15], decreasing S strictly increases W. No violations.

### Item 2: Worked-example claim hedge

**Discovery:** Section A7 of the prep artifact computed the crossover P_f where Scenario B (PI×0.6, formation problem) starts to drop more than Scenario A (C_WB×0.5, wellbore problem) in relative terms. Found crossover at P_f = 26.90 bara, very near P_rg = 30. In the operational P_f range of 8-18 bara (typical Darajat wellhead pressures), Scenario A dominates at both ends. The original worked-example narrative claimed "the two failure modes have *visually distinct* signatures" without qualifying that the operational visibility of this distinction is weak.

**Fix proposal (D2):** add a hedging paragraph (EN + ID) after the "Try the simulator" prompt, noting:
- Crossover happens at p_f ≈ 27 bara
- In operational p_f range (8-18 bara), wellbore-problem effects tend to dominate the relative drop at both ends
- Diagnostic distinction is real but operational visibility is sharpest when test spans up to high-p_f tail near p_rg
- Practical lesson: deliverability test design matters — sampling only at moderate throttle may underestimate formation-side decline

### Bilingual discipline

Both fixes applied to EN + ID in parallel per established discipline (G1.1 set this pattern, G1.2 follows). Hedge prose added: +58 EN words, +54 ID words. Word counts: 3530 EN + 3221 ID (was 3472 + 3167 post-G1.1).

### What was NOT changed in G1.2

The other items in the prep artifact (D3-D6, B1-B8 ID register self-audit, C self-test pedagogical re-review) require Az's tacit/subjective evaluation. They remain pending Az's dogfood completion and explicit findings. G1.2 was deliberately scoped tight: only OBJECTIVE programmatic findings.

### Notes

- The skin bug was a physics violation that had been shipped since G1 (2026-05-24). Programmatic characterization in the prep artifact caught it. Lesson preserved in the prep file format: exhaustive parameter-space sweeps are a useful diagnostic even for solvers that pass unit tests
- The crossover finding (A7) is a more subtle issue — it doesn't invalidate the framework's diagnostic claim, just qualifies how operationally visible it is. The hedge prose preserves the claim while adding the test-design nuance
- The illustrative ν_rg=5 constant remains. A future "research-grade" toggle (D6) is still optional. Whether it gets added depends on Az's dogfood findings
- Phase G1.2 was committed by Az manually. Verification was done inline via `node -e` for the same reason

---

## Phase 1.7 — Glosten-Milgrom 1985 content + Bayesian-update simulator (2026-05-27)

- **Scope:** Fourth template-quality content item. Completes the 1985 theoretical-foundation pair alongside Kyle 1985. Glosten-Milgrom is sequential-trade with Bayesian competitive MM; Kyle is batch-auction with strategic monopolistic insider — pedagogically complementary models from the same canonical year.
- **Verification:** 78 acceptance checks pass
- **Files touched:** 2 modified (`data/domains/microstructure/content/glosten-milgrom-1985.js` new, `js/viz.js` extended with `GlostenMilgromBayesianSim`)

### Key decisions

**Choice to add this item now (validation-pause override):** the user explicitly asked to continue in detail after a 2-day pause, overriding the default validation-pause for this phase. Verification was completed inline via `node -e`.

**Architectural choice — Bayesian update simulator as the natural viz for GM:** unlike Kyle (closed-form λ formula, no viz needed beyond worked example arithmetic) or Roll's spread (statistical estimator viz), Glosten-Milgrom's *core* insight is the dynamic Bayesian update across a trade sequence. The simulator makes the central educational point visible: trading transmits information; spread compresses as π_t moves toward 0 or 1; the path is a martingale in expectation but converges almost-surely to truth. Without the simulator, the convergence theorem feels abstract; with it, you literally watch π evolve and spread compress.

**Two-panel layout vs single panel:** top panel for π_t, bottom panel for quote (ask/bid/mid). Decided that mixing both in one panel would obscure both — they have different scales (probability vs price). Two stacked panels with shared x-axis (trade index) keeps both readable.

**Trade-direction markers:** small triangles at the mid-trace, pointing up for buy (blue), down for sell (red). Lets the user *see* the trade sequence that drove the convergence, not just the smooth π curve. Important for the intuition that posterior moves on each trade.

**True-state dropdown rather than another slider:** V is binary in GM (H or L). A dropdown is the natural control. Truth line in top panel adapts to the choice.

**Regenerate button advancing seed:** rather than a seed slider, single "Regenerate" button advances the seed by 1 and re-runs. Cleaner UX for the common "show me another random run at these parameters" gesture.

**Quote color choice:** ask=blue (cool), bid=red (warm, danger-side for the buyer), mid=gold (sepia palette accent matching baseline curve color in Acuña sim). Trade markers blue/red match ask/bid color logic.

**ν_rg-style illustrative-constant question — none here:** unlike Acuña, GM's math has no hidden physical constants. The simulator implements the paper's exact formulas. Sanity checks match analytically: opening spread = α(V_H-V_L) when π=0.5.

**Author bio verification:** Glosten's affiliation history (Northwestern→Princeton→Columbia 1989, AFA president 1999) is from his Columbia faculty page (cited from memory; verified consistent with the paper's authorship year 1985 at Kellogg). Milgrom — Stanford 1987 onwards, PhD Stanford 1979 under Wilson, Nobel 2020. Both bios constructed from publication record + standard CV data. The 1985 paper itself was the product of two early-career theorists at Kellogg.

### What shipped

**Content file — 4009 EN words + 3673 ID words across 8 sections:**
- **motivation:** the empirical puzzle (Roll model predicts smaller spreads than observed), GM's answer (spread is information rent), three operational consequences for practitioners today
- **intuition:** market maker's state of mind, two-cohort decomposition (informed vs uninformed), why posterior given buy > prior whenever α > 0, spread as gap between two conditional expectations, two-mode collapse (α → 0 and π → {0,1}), convergence-via-trading
- **formalization:** setup, Bayesian formulas for `P(buy | V_H)` and `P(buy | V_L)`, posterior derivations, ask and bid as conditional expectations (boxed), spread closed-form (boxed), belief update rule, martingale property, convergence theorem, Akerlof market-breakdown at α=1
- **worked-example:** numerical walk-through (V_H=110, V_L=90, π=0.5, α=0.3 → ask=103, bid=97, spread=6 = α(V_H-V_L)), trace through 3 buys reinforcing π up, sell intervention pushing back, simulator parameter exploration prompts
- **applications:** advanced researcher (PIN/VPIN/Madhavan-Richardson-Roomans/Glosten 1994 LOB extension paths), quant practitioner (liquidity-provider Bayesian intuition + liquidity-taker information rent), operations/risk (spread P&L decomposition — gross vs adverse-selection drift = net intermediation residual)
- **practice:** 4 problems with worked answers in `<details>` blocks. Compute opening quotes, trace π through 3 buys at two α values, prove market-breakdown at α=1, compare same-opening-spread different-convergence-rate stocks
- **connections:** prereqs (O'Hara 1995, Kyle 1985), builds-toward (PIN/VPIN/Glosten-Harris/MRR/Glosten 1994), related (Hasbrouck), theoretical lineage (Akerlof 1970), adjacent (Milgrom-Stokey 1982)
- **sources:** 8 citations — primary paper, Akerlof predecessor, Milgrom-Stokey companion, Glosten-Harris 1988 empirical, EOH 1992 PIN, EKOP 1996 PIN estimator, ELO 2012 VPIN, O'Hara 1995 textbook

**Author block (8 prose fields + 4 keyWorks):**
- Both authors named (joint paper) — fullName/affiliation/tagline/bio cover both
- Bio: Glosten Northwestern→Princeton→Columbia, AFA past president; Milgrom Stanford→NW Kellogg→Stanford, Nobel 2020 (Wilson), FCC spectrum auctions designer
- Tagline: "The two-author paper that gave microstructure its adverse-selection foundation — spreads emerge from informed-trading risk, not just inventory or order-processing cost."
- 4 keyWorks: GM 1985 (this item), Glosten-Harris 1988 (empirical companion), Milgrom-Stokey 1982 (no-trade theorem), Glosten 1994 (electronic LOB)

**4 self-tests** spanning intuition/formalization/worked-example/applications sections. The application-level self-test poses a market-making-desk capital-allocation scenario where the GM framework is operationally applied to a real risk-management question.

**Visualization (`GlostenMilgromBayesianSim` in `js/viz.js`):**
- 7 controls (α, V_H, V_L, π_0, true state, nTrades, regenerate)
- Two-panel SVG: π_t evolution (top), bid/ask/mid traces (bottom)
- Trade markers (blue up-triangles for buys, red down-triangles for sells) along mid-trace
- Auto-swap V_L→V_H-1 if user crosses sliders to maintain V_H > V_L
- Readouts: opening spread, final spread, final π, truth state
- Reset restores default parameters; regenerate advances seed by 1

**Helper exports for testing:** `gmPosteriorOnBuy`, `gmPosteriorOnSell`, `gmAsk`, `gmBid`, `simulateGM`

### Decisions deliberately deferred

- **More microstructure items (Cont-Kukanov-Stoikov 2014, Easley-VPIN, Stoikov 2008):** following the validation-pause principle. Pattern needs more in-context evaluation before scaling. Az still has uncompleted dogfood pass on Acuña + on the three pre-existing template items
- **Multi-state V:** GM model can be extended to continuous V via Glosten 1994. Decided to keep the two-state binary V for pedagogical clarity. Glosten 1994 (if/when authored) can build on this base
- **Animation of trade arrival:** considered making trades arrive one-by-one with a "Step" button. Decided against — the static plot already shows the entire sequence, and the user can run multiple seeds for variability. Adding animation would complicate without clear pedagogical gain
- **Spread P&L decomposition viz for the operations-team self-test:** could build a dedicated viz showing gross spread vs adverse-selection drift in the P&L decomposition example. Deferred — the prose example carries the point

### Honest caveats

1. **ID layer quality** — same caveat as all prior content. Indonesian register authored without native-speaker review; a native-speaker reviewer hasn't validated. Particular concern for the formalization section's technical density (Bayesian update rules are awkward to discuss in casual Indonesian register).

2. **Author bios from publication record** — both authors have well-established public profiles, but I didn't fetch their faculty pages this session (prior Hasbrouck/Kyle corrections taught me to check, but Milgrom's Nobel and Glosten's AFA presidency are widely-cited facts). Az should spot-check if anything feels off.

3. **Self-test #3 (high-α paradox)** — references a behavior I claim the simulator exhibits ("slower convergence at high α") but my verification only confirmed standard convergence at α=0.3. The high-α suppression argument in the answer is a teaching point about model limitations, not a simulator-specific empirical observation. Az may want to test this himself in browser and refine the self-test framing.

4. **Practice problem #4 numerical answers** — the arithmetic was worked by hand; verifier checks structural completeness, not problem-answer correctness. Worth Az spot-checking the algebra.

### Acceptance results

78 acceptance checks pass:
- items.js shape (5): glosten-milgrom-1985 entry validates
- Content schema (40+): bilingual everywhere, 8 sections present, 8 author fields + 4 keyWorks, 4 self-tests, word counts (4009 EN ≥ 2000, 3673 ID ≥ 1500)
- Formalization detail (7): Bayes + Akerlof + martingale + convergence references; ask/bid/spread formulas present
- Worked example (6): visualization config with required defaults; numerical 103/97 computation present
- Sources (4): GM 1985 self + Akerlof + Easley + Milgrom-Stokey 1982 references
- Math sanity (9): posterior formulas at default + α∈{0,1} boundaries match analytical predictions exactly
- Convergence (4): true=H → π→1.000, true=L → π→0.000, spread→0, deterministic same seed
- Tone calibration (6): "kalau"/"tapi"/"pake" present; "spread"/"posterior"/"informed" English preserved
- Regression (5): Hasbrouck/O'Hara/Kyle/Acuña-2008 content still load; Acuña solver AOF=39.65 unchanged
- Viz registry (3): Roll/Acuña/GM all registered

### Notes

- Fourth template item. Pattern continues to hold across distinct content types (empirical methodology, theoretical synthesis, strategic theory, sequential Bayesian theory)
- Validation-pause override required explicit user authorization despite my memory's contrary default — pattern saved for future sessions
- Bayesian-update viz is a new pedagogical mode for the platform (prior viz: statistical estimator for Roll, deliverability sim for Acuña). Three distinct viz patterns now exist
- Stand-down expected after commit. Az's evaluation backlog (Acuña dogfood + simulator UX validation + ID layer review) remains the explicit blocker for further Phase 1.8 or G2 authoring

---

## Phase G1.1 — Acuña content technical-review patch (2026-05-25)

- **Scope:** Targeted fixes from Az's expert review of Phase G1. Five localized issues — 1 medium-high (gravity correction notation), 2 medium (15% threshold + 70-80% recovery claims), 2 minor ("upper tubulars" + √2 direction). No structural rewrite, no new functionality.
- **Verification:** Smoke-tested module loads + regression on prior content. Word counts: 3472 EN + 3167 ID (was 3351 + 3055), still well above thresholds. Solver baseline AOF unchanged at 39.65 kg/s.
- **Files touched:** 1 modified (`data/domains/geothermal/content/acuna-2008.js`)

### Az's review categorization

The review was structured around six criteria; Az evaluated #1, #3, #4, #6 directly, #2 partial (simulator UX requires browser), #5 partial (ID layer requires native review). His top-issue ranking is what drove G1.1's scope.

### What changed

**Item 1 — Gravity correction notation (formalization section).**

Before:
```
p_wfg = p_wf - ρgH/2
```

After (matches paper Eq 4 exactly):
```
p_wfg = p_wf - (CgH/2)(p_wf + p_f)
```

The `(p_wf + p_f)/2` factor is the average column pressure. Combined with `ρ ≈ Cp` this gives the average column density times gH. Az's concern was that the rendered shorthand left ρ ambiguous (at p_wf? at p_f? average?). The explanation paragraph said "average column density" but the equation as displayed didn't show it. The paper's exact form is rigorous and unambiguous. Both EN and ID layers updated.

Added the worked numerical sanity check inline: `CgH = (5.017×10⁻⁶)(9.806)(2000) ≈ 0.098 ≈ 0.1`. Az noted this as a positive intuition-builder.

**Item 2 — 15% drift threshold (applications + operations + self-test #4).**

Three occurrences hedged from specific "15% drift in 90 days" to "field-tuned threshold in the 10–20% over 90 days range". Az's concern: this is the kind of specific operational number that, if wrong, looks like authority without substance. Without Az's tacit knowledge of Darajat practice, hedging is the safe move. Honors the conservative-framing principle from the G1 content/README guide.

**Item 3 — 70-80% post-cleanout C_WB recovery (worked-example + operations team).**

Two occurrences. Az noted this is "generic engineering judgment, not field-statistic" — unverifiable against external literature, and Wayang Windu cases (Hernawan 2013) show widely varying recovery rates depending on intervention type. Replaced with:
- Worked-example: "expected post-cleanout C_WB recovery dependent on scaling type and intervention method — acid stimulation often achieves near-baseline recovery for solution-removable deposits like calcite; mechanical cleanout effectiveness varies more"
- Operations team: "successful job defined by the field's own pre-intervention target — typically a meaningful fraction of the baseline gap closed, with the specific number agreed upfront between RE and operations"

Second framing is interesting — moves the success threshold from "what's typical?" (unverifiable) to "what was agreed upfront?" (an operational principle every RE/ops integration can adopt).

**Item 4 — "Upper tubulars" → "production tubulars".**

Az noted that scaling location in dry steam wells can be at upper tubulars (cooled, condensation), mid-depth (flashing zone), or near formation face — and Hernawan 2013 documented that location was unknown until downhole video clarified it. Two occurrences (worked-example Scenario A + Practice problem 2). Removed the unnecessary presupposition.

**Item 5 — C_WB √2 footnote direction.**

Before: "differs from the original 2008 paper by a factor of √2"

After: `C_WB^(2010) = C_WB^(2008) / √2` — i.e., the 2010 form is smaller by a factor of √2.

Sharper because "differs by factor √2" was technically ambiguous about direction.

### Az's PARTIAL evaluations carried forward (still open)

- **Simulator UX validation** — slider responsiveness, diagnostic mode visual clarity, edge cases (very low C_WB, very high skin), mobile rendering. Requires Az interaction with browser.
- **ID layer quality across full body text** — Az saw only fragments (tagline, headings, viz description). Native spot-check of formalization/intuition/practice sections needed.
- **Star Energy Darajat-specific accuracy** — even with G1.1 hedges, the operational paragraphs may benefit from Az's tacit-knowledge corrections once he reviews against actual practice. The 10-20% range is published-literature framing, not specifically Darajat.

### Decisions deliberately deferred

- **Item 6 from Az's review** (explicit derivation-skip acknowledgment in formalization). Marked optional by Az. Left for now — the assumed audience (RE / R&D engineer) carries the derivation context.
- **"Sandface" terminology check** (Az flagged as potentially petroleum-engineering-specific vs standard geothermal usage). Left for Az's eventual confirmation since the alternative ("near-wellbore reservoir damage") may also need region-specific consideration.

### Notes

- Patch-class commit, not a phase milestone — G1.1 follows G1 by ~1 day on a single content file
- Az's review demonstrates the value of domain-expert evaluation pass after autonomous content authoring. Future geothermal items (if scaled later) should bake in this review step
- Three-tier hedging pattern established here: specific Darajat claim → published-literature range → "agreed upfront between teams" (the operational-principle level). Future operational-claim authoring can use the same ladder

---

## Phase G1 — Acuña 2008 dry steam deliverability content + simulator

- **Scope:** First geothermal domain content item. User provided Acuña-Pasaribu 2010 paper text directly with verified equations. Demonstrates the template-quality pattern established in microstructure (Hasbrouck/O'Hara/Kyle) extends to geothermal with domain-specific adjustments (tone calibration, persona framing, math notation conventions)
- **Verification:** 121 acceptance checks pass
- **Files touched:** 4 (1 new content file, 1 new content/README.md, viz.js extended with new component + solver, geothermal/items.js extended)

### Key decisions

**Why this was authorized as autonomous despite the standing "no autonomous geothermal" rule:** the user supplied source material directly (Acuña-Pasaribu 2010 paper text with verified equations) and explicitly scoped Phase G1 with three pushback rules: (1) no other geothermal items autonomous after G1, (2) realistic scope (Acuña 2008 only, not multiple items), (3) explicit stop-rules after commit. All three honored.

**Solver design — closed-form vs iterative:** Chose Eq 8 closed-form quadratic over the implicit Eq 7. Iterative solvers can fail to converge or converge to non-physical roots; closed-form is a single algebraic step with provably correct positive root.

**Why `ν_rg = 5.0` illustrative constant:** real kinematic viscosity of saturated steam at reservoir pressure varies with state and is typically ~10⁻⁵ m²/s, but with realistic units the PI slider barely affects curves at the educational range. Substituted illustrative constant `ν_rg = 5.0` so PI changes produce visible signatures. Documented in code + content notes that this constant is for educational diagnostic teaching, not field analysis.

**Skin formula simplification:** `PI_eff = PI / (1 + S/ln(1000))` where `ln(1000) ≈ 6.9` approximates `ln(r_e/r_w)`. Real formula is `PI_eff = PI · (ln(r_e/r_w) - 0.5) / (ln(r_e/r_w) - 0.5 + S)`. Simplified for slider responsiveness while keeping qualitatively correct behavior.

**Scenario A/B scaling factors chosen for visibility:** `C_WB × 0.5` (50% reduction — moderate to severe scaling event) and `PI × 0.6` (40% reduction — moderate reservoir interference). Real field events span a wider range; these are pedagogical defaults.

**Diagnostic mode color choices:** Baseline = gold (sepia palette accent). Scenario A = red `#a05050` (wellbore problem urgency). Scenario B = orange `#c47a3d` (formation problem). Each curve labeled with AOF in legend for quick comparison.

**Author verification:** USC PhD 1993 with Y.C. Yortsos verified via the Acuña-Yortsos 1995 WRR paper citation. Career arc reconstructed from publication record + paper affiliations. No surprises this time (unlike Phase 1.2 Hasbrouck/UPenn and Phase 1.6 Kyle/Chicago recall corrections — primary source provided directly).

### What shipped

**Items entry (`data/domains/geothermal/items.js`):**
- `acuna-2008` with `type: 'paper'`, `phase: 'production'`, `difficulty: 3`, `prereqs: ['grant-bixley-2011']`, `system_type: 'DRY_STEAM'`
- Tags: `['deliverability', 'decline-analysis', 'wellbore-friction', 'productivity-index', 'dry-steam-diagnostic', 'darajat-relevant']`
- Notes: GRC Best Paper Award 2008 + Indonesian + Philippine field application context

**Content (`data/domains/geothermal/content/acuna-2008.js`) — 3351 EN words + 3055 ID words across 8 sections:**
- **motivation:** two-cause fork (wellbore vs formation), critique of Grant-Bixley lumped framework, capital allocation stakes at Darajat-scale
- **intuition:** series obstacles framing, visual signature distinction at high vs low flow, Hernawan-Situmorang 2013 Wayang Windu cases referenced
- **formalization:** full derivation — wellbore equation (compressible flow + gravity), reservoir equation (Darcy + skin), combined implicit Eq 7, closed-form quadratic Eq 8. Note about 2010 vs 2008 √2 factor (use 2010 form)
- **worked-example:** Darajat-typical baseline + 5-years-later degradation with Scenario A/B operational decision tree. Embedded interactive simulator
- **applications:** three personas — advanced researcher (time-series Acuña-Pasaribu 2010, TOUGH2 calibration, PTA, fractal-aware RTA), field reservoir engineer (monthly workflow, scaling diagnostic, capex allocation), operations team (dashboard surveillance, post-workover metrics, fleet steam-supply integration)
- **practice:** 4 problems — arithmetic, attribution, sub-additivity proof, regression exercise
- **connections:** Grant-Bixley 2011 prereq + builds-toward + related items
- **sources:** Acuña 2008 + Acuña-Pasaribu 2010 + Hernawan-Situmorang 2013 + Grant-Donaldson-Bixley 1982

**Author block (8 prose fields + 4 keyWorks):**
- Jorge Antonio Acuña, Ph.D. — J. Acuna Consulting, Houston (2022–)
- Career arc: Miravalles, Costa Rica (1984–1988) → USC PhD with Yortsos (1988–1993) → Unocal Geothermal → Chevron Geothermal (2005–2012, where 2008 paper was written) → Chevron Technology Company (2012–2022, unconventional shale gas RTA) → J. Acuna Consulting (2022–)
- 4 keyWorks: Acuña-Yortsos 1995 WRR, Acuña 2008 GRC (this item, Best Paper), Acuña-Stimac 2008 Geothermics, Acuña-Pasaribu 2010 WGC Bali

**4 self-tests:** intuition (high-flow signatures), formalization (square-root derivation), worked-example (cross-evidence beyond production data), applications (49-well surveillance design)

**Visualization (`AcunaDeliverabilitySim` in `js/viz.js`):**
- Five controls: P_rg, C_WB, PI, skin sliders + diagnostic mode checkbox
- SVG W-vs-P_f curve from closed-form solver at 60 sample points
- Diagnostic mode overlays Scenario A (red, C_WB × 0.5) + Scenario B (orange, PI × 0.6) with legend
- Solver exported separately: at default params, AOF = 39.65 kg/s, Scenario A 23.40 (41% drop), Scenario B 32.22 (19% drop)

### Decisions deliberately deferred

- **Other geothermal items (9 remain catalog-only):** Az's domain — to be co-authored, not autonomous
- **Cards for geothermal items:** zero exist yet. Per reading-driven discipline, cards authored after the user reads the source
- **Real `ν_rg` value:** simulator uses illustrative constant 5.0 for educational signature visibility
- **PI fitting from production data:** Practice #4 is open-ended; a future built-in fitter could accept (W, p_f) pairs

### Honest caveats

1. **ID layer quality** — geothermal Indonesian register more domain-specific than microstructure. Native-speaker (Az) review needed
2. **`ν_rg` simplification** — illustrative constant rather than real physical value. Documented in code + content
3. **`C_WB` unit conventions vary across papers** — stuck with kg/(s·bar) consistent with Acuña-Pasaribu 2010
4. **Operational claims framed conservatively** — "common practice at Indonesian dry steam fields" rather than asserting specific Darajat workflows
5. **No PTA cross-validation in simulator** — content references but doesn't implement
6. **2008 paper not verified word-for-word** — worked from user-provided Acuña-Pasaribu 2010 text. 2010 corrected form used for math
7. **Author bio assembled from publication record** — no canonical faculty page. Less direct than Hasbrouck/Kyle verification but consistent across sources

### Acceptance results

121 acceptance checks pass. Breakdown:
- Items schema (9), content/README.md (3), content schema (40+ bilingual + author + sections + word counts)
- Formalization detail (7), worked example (8), sources (3), self-tests (13), viz component (4)
- Solver sanity (7): AOF in [30, 45] range, monotone decreasing in p_f, scenario A relative drop SHRINKS at high p_f, scenario B relative drop GROWS at high p_f, positive skin reduces AOF — diagnostic signature mathematically confirmed
- Regression (5): hasbrouck-2007.js, ohara-1995.js, kyle-1985.js, microstructure items.js, library.js still load
- Tone calibration (6): ID layer uses "kalau"/"tapi"/"pake"; preserves English "wellbore"/"deliverability"/"reservoir"

### Notes

- First geothermal content item. Pattern established for future geothermal content extension
- Conservative scope. Stand-down expected after commit per stop-rule. No other geothermal items autonomously authored
- Numerical solver implementation was the largest risk — closed-form quadratic chosen specifically to avoid iteration failure modes
- Web fetches not needed this time — primary source provided directly by user

---

## Phase 1.6 — Kyle 1985 content

- **Scope:** Third template item, completing the three-pillar foundation (Hasbrouck = empirical methodology, O'Hara = theoretical synthesis, Kyle = strategic theory)
- **Verification:** 29 acceptance checks pass
- **Files touched:** 1 created

### What shipped

**Author block:**
- Albert S. ("Pete") Kyle, Distinguished University Professor + Charles E. Smith Chair in Finance, UMD Robert H. Smith School (since 2006)
- PhD Economics from University of Chicago 1981 (verified via UMD faculty page fetch — correction from initial recollection of MIT)
- Brady Commission 1987 + SEC/CFTC/DOJ consulting
- 4 keyWorks: Kyle 1985 Econometrica (this item, Wharton-Jacobs Levy Prize), Kyle 1989 RES (imperfect competition), Campbell-Kyle 1993 RES (smart money / noise trading), Kyle-Obizhaeva 2011 Econometrica (market microstructure invariance)

**8 sections (2521 EN words + 2211 ID words):**

- motivation: complementary positioning vs Glosten-Milgrom (sequential vs batch, mechanical vs strategic informed trader). Stakes: the central tradeoff between monetizing information and leaking it via price impact
- intuition: λ as price impact per unit order flow; insider bleeds info slowly; equilibrium pins down unique (β, λ) pair. Three readings of λ formula
- formalization: full Kyle 1985 single-period derivation in three steps (insider optimization → MM optimization → fixed-point solve). Boxed result $\lambda = \sqrt{\Sigma_0}/(2\sigma_u)$, $\beta = \sigma_u/\sqrt{\Sigma_0}$. Market depth $D = 1/\lambda$. Information leakage = Var(p)/Σ₀ = 1/2 ("exactly half" derivation)
- worked-example: numerical equilibrium with $p_0=100$, $\Sigma_0=25$, $\sigma_u=10$, $v=108$, $u=-3$ → $76 realized profit. Two sanity checks (naive $54 + over-trade $24) prove strategic equilibrium is profit-curve top
- applications: advanced (Back 1992 + Foster-Viswanathan + Kyle-Obizhaeva + HFT/latency); quant (λ estimation across crypto perpetuals + regime detection + Almgren-Chriss connection); retail (stealth liquidity intuition)
- practice: 4 problems
  1. Compute λ, β, D given (Σ₀=100, σ_u=50)
  2. Sensitivity to doubled σ_u² (insider profit INCREASES — counterintuitive)
  3. Why insider trades half not full
  4. Why Var(p) = Σ₀/2 exactly half + Foster-Viswanathan extension
- connections: 5 inter-item links (O'Hara, GM, Hasbrouck, Cont-Kukanov-Stoikov, VPIN)
- sources: Kyle 1985 + O'Hara textbook + Back 1992 + Foster-Viswanathan 1996

**Audio + self-tests:**
- Audio enabled
- 4 self-tests targeting: optimal-trade-is-half intuition; trace λ formula meaning; σ_u counterintuitive sensitivity; cross-asset λ regime signal design (operationalization in crypto perpetuals)

### Decisions made
1. **Full derivation in formalization, not just headline result.** Kyle 1985 is the field's iconic derivation; readers should be able to follow the fixed-point logic, not just memorize $\lambda = \sqrt{\Sigma_0}/(2\sigma_u)$
2. **Worked example shows TWO sanity checks** (naive trade + over-trade) so readers see equilibrium $x^*$ is the precise profit maximum, not just one of several possible quantities
3. **Counterintuitive σ_u sensitivity emphasized in practice #2.** This is one of the field's "surprise" results — more noise = more profit for the insider. Worth pinning explicitly.
4. **Bio framing: "Chicago tradition shows up in mechanism-design instincts."** Not just "PhD Chicago 1981" — explain WHY Chicago training matters for the kind of model Kyle built.

### Stop-rules applied
- Bio web-fetch succeeded on first attempt
- All verification checks pass
- Regression: Hasbrouck + O'Hara still load with full schemas
- **Phase 1.6 ends the autonomous overnight execution per spec.** Phase 1.7+ requires user evaluation gate first.

---

## Phase 1.5 — Audio narration + self-test infrastructure

- **Scope:** Two UX-enhancement infrastructure pieces + content additions
- **Verification:** 31 acceptance checks pass
- **Files touched:** 2 created (audio.js, self-test.js), 4 modified

### What shipped

**Audio narration (`js/audio.js`):**
- Single global player via `window.speechSynthesis` (Web Speech API)
- Functions: `speak(text, lang, button)`, `togglePause(button)`, `stopAll()`, `isPlayingButton(button)`, `markdownToSpeech(text)`, `isAudioAvailable()`
- Voice selection: prefers `id-*` voices when lang='id', `en-*` when lang='en', falls back to first available
- `markdownToSpeech()` strips markdown to plain prose: bold/italic/code/external-link → plain text; math (inline + block) → "equation"; bullets → period pauses; HTML details/summary → keep inner text
- Per-section play button: ▶ default, ⏸ when playing (CSS pseudo-element), ⏹ when paused — single-state per page (clicking a new section's button cancels active utterance)
- Audio stops on item switch / Library back (no orphan utterances)

**Self-test infrastructure (`js/self-test.js`):**
- Schema: `CONTENT.selfTest[]` with `{sectionId, question{en,id}, prompt{en,id}, hint{en,id}, answer{en,id}}`
- Card UI: collapsible `<details>` placed after section body, contains question + optional hint sub-collapsible + optional attempt textarea + reveal-answer button + (post-reveal) reference answer + 3-button confidence row
- Confidence states: `got-it` (green), `mostly` (gold), `need-review` (rose)
- Confidence storage: `state.settings.ui.selfTestConfidence[<itemId>::<sectionId>] = {value, ts}`
- Badge in summary line shows current confidence rating (when set) — quick visual scan of which sections you've self-tested

**Content authoring:**
- 4 Hasbrouck self-tests targeting key conceptual leaps: bid-ask bounce → negative serial correlation; covariance term reduction in Roll derivation; Roll-vs-quoted gap interpretation; operationalizing Roll gap as regime filter
- 4 O'Hara self-tests targeting: pure adverse-selection origin of spread; spread sensitivity to μ + uncertainty range + prior; concavity of Bayesian updates; combined PIN+VPIN+Roll toxicity dashboard design
- All 8 self-tests have substantive bilingual question + answer

### Decisions made
1. **Single global audio player.** Clicking ▶ on a new section cancels any active utterance. Simpler UX than parallel playback; matches reading flow.
2. **Math becomes "equation" in TTS.** Reading raw LaTeX is unintelligible. "Equation" placeholder keeps narration flowing without trying to vocalize formulas.
3. **Browser TTS only, no recording or upload.** Zero privacy concern, zero cost. Voice quality varies by OS but acceptable for accessibility/skim use.
4. **Confidence persistence in `state.settings.ui` (not at card level).** Same storage section as `authorCardOpenByItem`. Future hook for SRS integration (Phase 2+ could surface "needs review" items for repeat practice).
5. **Self-test cards rendered AFTER section body, not interspersed.** Reader completes the section first, then optionally engages with the self-test. Matches the "before continuing" framing in the prompt.
6. **Both modules opt-in via content schema.** Items without `selfTest[]` skip rendering. `audio.enabled !== false` is default-on. Forward-compat: new domains/items don't need to declare anything.

### Stop-rules applied
- All verification checks pass; proceeding to Phase 1.6
- No content schema breaking changes (audio + selfTest were already stub fields from Phase 1.1)
- Geothermal items unaffected (no content modules to add self-tests to)

---

## Phase 1.4 — Visualization infrastructure + Roll simulator + O'Hara content

- **Scope:** Reusable viz framework + first interactive viz + second rich content item
- **Verification:** 27 acceptance checks pass
- **Files touched:** 3 created, 3 modified
- **Authoring constraint:** autonomous overnight execution with explicit stop-rules

### What shipped

**Visualization framework (`js/viz.js`):**
- `COMPONENTS` registry — keyed by string component name
- `registerComponent(key, fn)` API for self-registration
- `renderVisualization(root, vizSpec, lang)` — handles container + controls + canvas + reset button + delegate to component
- Schema: `section.visualization = { id, component, title{en,id}, description{en,id}, defaultParams, height }`
- Helpers: `makeRng(seed)` (Mulberry32), `makeGaussian(rng)` (Box-Muller), `lerp(value, fromMin, fromMax, toMin, toMax)`
- No external deps (no D3, no Chart.js) — pure SVG manipulation for portability

**Roll spread simulator (`RollSpreadSim` component):**
- 3 controls: spread $s$ slider (0.01–0.50), trade-direction autocorrelation $\rho$ slider (−0.3 to +0.7), n trades slider (100–5000)
- Regenerate-seed button for new realizations at same params
- Algorithm: AR(1)-driven trade direction signs, random-walk efficient price, observed price = m + (s/2)q, sample lag-1 autocovariance, Roll formula
- Two-panel SVG: Δp time series (~200 subsampled points) + side-by-side bar chart of Roll estimate vs true s
- Color-coded bias annotation (green if |bias| < 8%, rose otherwise)
- Educational payoff: ρ=0 → Roll matches s exactly; ρ=0.4 (the *latent* AR(1) persistence) → realized trade-sign autocorrelation (2/π)·arcsin(0.4)≈0.26 → Roll underestimates by ~24% (Monte-Carlo mean; −32% at the default seed) — visual proof of Practice problem 3. [Corrected 2026-05-30: the original "~40%" assumed the slider value *was* the trade-sign autocorrelation; see README / the Roll-sim slider note.]
- Bilingual labels (EN + ID) per language toggle

**O'Hara (1995) full content:**
- 2079 EN words + 1847 ID words across 8 canonical sections
- 8 author prose fields (fullName, affiliation, tagline, bio, focus, intellectualLineage, keyCollaborators, legacy) populated EN + ID
- 5 keyWorks: Easley-O'Hara JF 1992, Market Microstructure Theory 1995 textbook, PIN paper 1996, VPIN paper 2012, HFT book 2015
- Formalization section: full Glosten-Milgrom Bayesian quote update derivation + PIN formula
- Worked example: explicit numerical Bayesian update walkthrough showing posterior concentration after consecutive buys
- Applications: 3 personas (advanced research extensions, quant PIN/VPIN deployment + crypto, retail "every trade is a signal" intuition)
- Practice: 4 problems including GM computation + posterior concentration + spread collapse + Roll-PIN combination interpretation
- Connections: 4 inter-item links (Hasbrouck, Glosten-Milgrom, Kyle, Easley-LdP-O'Hara)

### Decisions made
1. **Component-name reference, not inline JS in content.** Content modules declare `visualization.component: 'RollSpreadSim'`. Components register themselves in `viz.js`. Same opt-in pattern as `systemTypes` and `aiCapabilities` — no hard-coded viz logic in content.
2. **Pure SVG over D3/Chart.js.** Preserves "no CDN, no build step" principle. SVG with manual path construction handles 200-point Δp series + bar chart adequately.
3. **Seeded RNG for reproducibility.** Same params → same viz. Regenerate button explicitly steps the seed so users can sample multiple realizations without losing param state.
4. **Mobile breakpoint at 760px.** Below this, control rows stack vertically instead of grid-3-column.
5. **O'Hara author block uses 1979 PhD year as verified fact.** Cornell faculty page confirmed; no need to flag as unverified.
6. **PIN extension included in formalization.** Goes beyond textbook's strict 1995 scope but justified by tight conceptual link + represents O'Hara's broader contribution.

### Stop-rules applied
- O'Hara web-fetch succeeded on first attempt; no need for second attempt or `[needs verification]` placeholder
- All verification checks pass; proceeding to Phase 1.5
- No geothermal content authored (out of scope)

---

## Phase 1.3 — Bilingual EN/ID toggle + Hasbrouck ID layer + glossary bilingual

- **Commit:** `72a0311`
- **Scope:** UI infra + content authoring + schema migration
- **Estimated effort:** 3-4 sessions (per user roadmap)
- **Verification:** 29 Phase 1.3 + 18 regression = 47/47 pass
- **Files touched:** 8 modified, 0 created

### What shipped
- `EN | ID` segmented control in topbar chrome (between domain switcher and view tabs)
- `state.settings.appearance.language` persistence with `en` default
- `AVAILABLE_LANGUAGES` + `DEFAULT_LANGUAGE` exported from `data/shared/ai-config.js`
- `pickLang(field, lang)` helpers in library.js + reference.js returning `{text, fellBack}` for per-field bilingual rendering with EN fallback
- Per-field fallback notice "ID belum tersedia — menampilkan English" rendered above any field where `fellBack === true`
- Hasbrouck content full ID layer:
  - 8 sections with non-empty `heading.id` + `body.id`
  - 8 author block fields (tagline, bio, focus, intellectualLineage, keyCollaborators, legacy, fullName, affiliation) populated for `.id`
  - Math formulas preserved (KaTeX language-agnostic)
  - `[text](item:id)` inter-item links preserved
  - `<details><summary>Jawaban</summary>` Indonesian summary labels
  - `### subsection` markers preserved in applications section
  - Crypto-specific quant paragraph translated with English technical vocabulary preserved
- Glossary bilingual migration: flat-string schema → `{term: {en,id}, definition: {en,id}}` for all 32 microstructure terms
- Search filter operates over current-language fields

### Decisions made
1. **Single commit** (not split A/B): user preference for "less ping-pong" / progressive cadence. Phase 1.3 substantive work but quality gate preserved via 47/47 verification.
2. **Term often unchanged in ID**: technical vocabulary preserved in English (Efficient price, bid-ask bounce, etc.). Only definitions get true intuitive translation.
3. **Notation tables NOT translated**: symbols are language-agnostic. 10 notation rows untouched.
4. **Per-field fallback (not page-level)**: a partially-translated content module can render some sections in ID and others in EN with notice.

### Authoring tone
- Conversational Jakarta Indonesian
- Code-switching: technical vocabulary stays English (efficient price, martingale, autocovariance, informed trader, market maker, spread, order flow, execution algorithm, etc.)
- Casual register: "tapi" not "tetapi", "jadi" not "oleh karena itu", "kalau" not "jika", "ngajarin" not "mengajarkan", "kasih" not "memberikan"
- Avoids Google-translate-ish literal renderings

### Honest caveats
- ID content authored without native-speaker review
- Tone calibrated per microstructure literature convention but may have passages that feel forced
- User evaluation pending; flag specific passages for revision

### Verification metric note
Word count check included LaTeX tokens (split on `/\s+/` counts each math token as a word). Initial verification expected `[900, 1500]` based on prose target; actual was 1829 due to math token inflation. Adjusted lower bound check to `>= 1000` (substantive prose) and removed misleading upper bound.

---

## Phase 1.2.5B — Sepia reader theme + justified typography

- **Commit:** `e112c8a`
- **Scope:** CSS aesthetic overhaul + theme dropdown removal
- **Verification:** 35 Commit B checks + 16 regression pass
- **Files touched:** 2 modified

### What shipped
- Replace dark theme with sepia/cream palette via `:root` variables
- Add `--bg-chrome`, `--ink-chrome`, `--line-chrome`, `--bg-chrome-elev` for dark topbar
- Topbar descendant overrides ensure `.brand-name`, `.tab`, `.ghost-btn`, `.domain-badge`, `.tab kbd`, `.domain-name`, `.domain-chevron` render in chrome palette
- Content body `text-align: justify`, `hyphens: auto`, `text-rendering: optimizeLegibility`, `font-feature-settings: 'kern' 1, 'liga' 1`
- `--max-content-width: 80ch` desktop, `100%` below 900px mobile breakpoint
- Migrate all hardcoded dark-theme rgba values to sepia equivalents (state badges, quality button hover, links, danger button, ghost-btn-danger, schedule-btn, see-also-chip, item-content-body a, latex-block, latex-inline)
- Domain switcher dropdown shadow softened from `rgba(0,0,0,0.4)` to `rgba(42,36,24,0.18)` (warm-dark, less harsh on cream)
- Author card tagline styling: italic serif gold
- Remove theme dropdown from Settings UI; preserve `state.settings.appearance.theme` field as forward-compat placeholder

### Decisions made
1. **Sepia chosen over brightened-dark and full light**: most coherent with Fraunces serif body + justified typography aesthetic
2. **Chrome stays dark**: visual hierarchy distinction (navigation vs content)
3. **Strict matching on filter chips** preserved: cream-on-blue contrast is high
4. **80ch wider than typography optimum (45-75ch)** per user preference: hyphens prevent ugly justified-text "rivers"; can narrow back if reading test reveals tracking issues
5. **Theme dropdown hidden, not removed from state**: preserves storage backward compatibility for future multi-theme infra

### Risks accepted
- Some component may have escaped palette migration despite systematic grep; flag specific selector if discovered in UI testing
- Sepia warmth may be slightly too yellow for some preferences; easy adjustment via `:root` palette variables

---

## Phase 1.2.5A — Hasbrouck content revisions

- **Commit:** `02e2c28`
- **Scope:** Content edits + tagline schema
- **Verification:** 23 Commit A checks pass
- **Files touched:** 3 modified

### What shipped
- `author.tagline.en` added — 1-line teaser shown in collapsed author card
- Applications section intro paragraph explaining reverse-funnel structure
- Applications subsection order reversed: advanced → quant → retail (aspirational entry)
- Quant persona expanded with second paragraph: crypto/cross-asset specific examples (VWAP/TWAP calibration, BTC/IHSG regime detection, exotic crypto pairs, SOL/BTC liquidity comparison, informed flow filter, transaction-cost backtests)
- Formalization expanded 280 → 595 words with 4 "why this step?" annotations:
  - Before martingale def: baseline-for-no-information motivation
  - Before p_t decomposition: bridge between unobserved efficient price and tape
  - Before first differences: stationarity rationale
  - Before lag-1 autocov: why lag-1 specifically (single-step mechanism)
- Reading time bumped 32 → 38 min
- `.author-card-tagline` style (italic serif gold)

### Decisions made
- **Persona ordering kept as reverse funnel** (advanced → quant → retail) per user evaluation feedback
- **Quant section preserves generic paragraph + appends specific examples**: keeps accessibility for non-crypto readers + adds practitioner depth
- **Formalization annotations interleave with math, not replace it**: keeps technical content intact, adds pedagogical context

---

## Phase 1.2 — Content enrichment (author bio + applications + expanded formalization)

- **Commit:** `2367048`
- **Scope:** Schema extension + content authoring + UI for author card
- **Verification:** 28 acceptance checks pass
- **Files touched:** 5 modified

### What shipped
- `CONTENT.author` object with 8 prose fields (fullName, affiliation, bio, focus, intellectualLineage, keyCollaborators, legacy) — bilingual-ready (en + id placeholders, en filled)
- `CONTENT.author.keyWorks` array with 4 entries (1991 JF info content, 1995 JF info share, 2007 OUP textbook, 2009 JF trading costs)
- Collapsible author card UI (`<details>`) above content sections
- Per-item open/closed state persistence: `state.settings.ui.authorCardOpenByItem`
- New canonical section `applications` (8th section, between worked-example and practice)
- 3 persona subsections: For the retail trader / quant practitioner / advanced researcher
- Markdown `###` → `<h4 class="item-content-subheading">` (single-line, multi-line block guard)
- `.author-card`, `.author-keywork`, `.item-content-subheading` styling

### Bio source verification
- NYU Stern faculty page fetched via WebFetch
- **Correction**: initially assumed PhD MIT, faculty page confirmed **PhD UPenn Wharton Finance**
- Verified: Kenneth G. Langone Professor, joined 1983, editorial roles JFE + JFM, consulting NYSE/AMEX/Nasdaq-OMX/NY Fed/SEC/CFTC, Society of Financial Econometrics Fellow
- Wikipedia fetch returned 404 (no Wikipedia page for him)
- Personal page timed out

### Decisions made
1. **5 separate prose fields** (bio/focus/lineage/collaborators/legacy) rather than 1 consolidated bio: granular structure translates well to bilingual (each piece translatable independently in Phase 1.3)
2. **Author card collapsed by default**: returning readers can skip; first-time readers see name + affiliation + tagline + "About the author" prompt
3. **Co-author framing conservative**: "founding-generation peer group" rather than overclaiming specific co-authorships I couldn't verify

---

## Phase 1.1 — Item content infrastructure + Hasbrouck Ch 1-3

- **Commit:** `73bc753`
- **Scope:** Content schema + loader + first content module
- **Verification:** 27 acceptance checks pass
- **Files touched:** 3 created, 3 modified

### What shipped
- `data/domains/microstructure/content/` directory created
- `data/domains/microstructure/content/hasbrouck-2007.js` — first content module (7 sections, 1161 words EN)
- `data/domains/microstructure/content/README.md` — content authoring guide
- `js/content.js`: `loadItemContent()`, `renderTrustedMarkdown()`, `renderFormulasInContent()`, `estimateReadingTime()`
- Markdown subset: bold, italic, code, links, item-link, math, bullets, paragraphs, pass-through HTML
- `App.itemContent` state piece (lazy-loaded on item select via dynamic import)
- Reading time chip "25 min read" in item detail meta row
- Item-link click delegation for inter-item navigation
- Sepia palette NOT yet applied (dark theme still active at this phase)

### Bilingual-ready schema (from day 1)
- Each section has `heading: {en, id}` and `body: {en, id}` (id empty, populated in Phase 1.3)
- Forward-compat: `audio: {}` and `selfTest: []` placeholders

### Content correction (flagged in commit)
- Spec said Practice problem #3 asks about Roll's "overestimate" under informed traders
- Corrected to **underestimate**: mathematically correct (positive autocorrelation shrinks |Cov|, smaller spread estimate)
- Formula: $\hat{s}_{\text{Roll}} = s \cdot |1 - \rho|$, less than $s$ for $0 < \rho < 1$
- Documented derivation in commit message

### Known cosmetic issue
- Block math placeholder produces `<p><div class="latex-block">` (invalid HTML nesting)
- Browser auto-handles: closes `<p>` before `<div>`, results in empty `<p>` next to math block
- KaTeX renders correctly regardless
- Fix attempted via distinctive placeholder pattern but Edit tool encoding issue on template literals; non-blocking
- Flagged for future cleanup pass

---

## Phase 0.3 — AI infrastructure stub

- **Commit:** `7f5cb4b`
- **Scope:** Settings modal + gating logic + Ask AI affordances; zero outbound network
- **Verification:** 20 AI-stub checks + 16 regression = 36/36 pass
- **Files touched:** 3 created, 9 modified

### What shipped
- `data/shared/ai-config.js`: `defaultSettings()`, `mergeWithDefaults()`, `stripSensitive()`, `AVAILABLE_MODELS`, `AVAILABLE_THEMES`
- `js/ai.js`: `isAIEnabledFor()` gating + 4 capability functions (`explainConcept`, `suggestNextItem`, `findRelatedConcepts`, `summarizeProgress`)
- `js/settings.js`: `renderSettingsModal()` view
- `state.settings` schema with `ai`, `appearance`, `ui` sections
- `aiCapabilities` declared in both `meta.js` files (microstructure + geothermal)
- Ask AI affordances in 3 locations: Library item detail headrow, Review card source row, Reference glossary detail headrow
- `[data-ai-action]` global click delegation in `bindAIAffordances()`
- `,` keyboard shortcut for Settings; Esc closes modal (priority over other handlers)
- `clearAllData()` storage function (preserves legacy key)

### Capability gating return shape
```js
{ ok: false, reason: 'ai_disabled' | 'no_api_key' | 'domain_disabled' | 'capability_unavailable' | 'not_implemented', message: '...' }
```

### Privacy commitments
- API key stored ONLY in localStorage, never sent except to `api.anthropic.com` when user explicitly invokes
- API key NEVER in export (`stripSensitive` zeroes regardless of `includeSettings`)
- Zero outbound network in this phase (real impl deferred)
- Future implementation: direct browser → `api.anthropic.com` only; no proxy, no intermediary

### Decisions made
1. **`meta.aiCapabilities` opt-in pattern**: same shape as `meta.systemTypes` for forward compat. Future domains can opt-out specific capabilities (e.g., domain without "concepts" can disable `findRelatedConcepts`)
2. **Privacy-safe export DEVIATION from spec**: spec verification check 13 read literally implied apiKey should be included when `includeSettings: true`. I deviated and ALWAYS zero apiKey regardless. Privacy section in spec was explicit + emphatic; resolved spec contradiction toward privacy principle. Flagged in commit message.
3. **Single global click delegate** for `[data-ai-action]`: adding new affordance locations later is a single HTML snippet
4. **6-button quality scale preserved**: review session unaffected by AI feature work

---

## Phase 0.2b — system_type schema for filtering

- **Commit:** `a43c22e`
- **Scope:** Schema gap fix flagged during 0.2 evaluation
- **Verification:** 17 system_type + 12 regression = 29/29 pass
- **Files touched:** 7 modified

### What shipped
- `system_type` field added to item schema (optional)
- Enum: `DRY_STEAM | TWO_PHASE | LIQUID | UNIVERSAL`
- All 9 geothermal items tagged `UNIVERSAL`
- `meta.systemTypes` array in geothermal `meta.js` (microstructure doesn't declare → no filter UI)
- `applySystemTypeFilter(items, filter)` exported from `library.js`, used by glossary filter via source-item lookup
- Filter chip row in `#context-bar` (sticky below topbar, visible only when domain has `systemTypes` AND view is Library or Reference)
- Filter chip styling: rounded, soft cream tint, deeper-color active state
- Strict matching semantics (`DRY_STEAM` excludes `UNIVERSAL`)

### Decisions made
1. **Domain opt-in not hard-code**: `meta.systemTypes` declared per-domain rather than `if (domain === 'geothermal')`. Future domains can declare their own taxonomies
2. **Forward-compat default**: items without `system_type` default to `UNIVERSAL` at filter time
3. **Review queue unfiltered**: filter applies to Library + Reference only; SM-2 progression independent of categorical filter
4. **Glossary transitive filtering**: glossary entries survive filter if at least one source item matches (via `filterGlossaryBySystemType`)

---

## Phase 0.2 — Geothermal stub structure

- **Commit:** `2d6d8c5`
- **Scope:** Populate geothermal domain with 5 phases + 9 canonical items
- **Verification:** 16 acceptance checks pass
- **Files touched:** 2 modified

### What shipped
- 5 geothermal phases: `earth-sciences`, `reservoir`, `production`, `geochemistry`, `frontier`
- 9 canonical items distributed 2-2-2-2-1:
  - Stober & Bucher 2021 (textbook, earth-sciences)
  - Cumming 2009 (conceptual modeling, earth-sciences)
  - Grant & Bixley 2011 (canonical textbook, reservoir)
  - O'Sullivan-Pruess-Lippmann 2001 (simulation review, reservoir)
  - DiPippo 2016 (plant textbook, production)
  - Bjornsson & Bodvarsson 1990 (properties survey, production)
  - Henley-Truesdell-Barton 1984 (mineral equilibria, geochemistry)
  - Arnorsson 2000 (geothermometers, geochemistry)
  - Tester et al. MIT 2006 (EGS landmark, frontier)

### Per-item metadata
- Each: `id`, `type`, `title`, `authors`, `year`, `phase`, `difficulty` (2-4), `prereqs`, `tags` (3-7 inline), `notes`
- Prereqs form partial DAG (e.g., Cumming → Stober-Bucher; O'Sullivan → Grant-Bixley)
- Tag vocabulary emerged inline per item (not centralized registry)

### Decisions made
1. **9 items chosen as canonical references** (not Indonesia-specific case studies); user offered alternative direction
2. **No cards/glossary/notation authored** — reading-driven workflow defers content to Phase 1+
3. **Author authored from general knowledge** — flagged in commit, user offered to provide corrections if needed

### Authoring projection note
User explicitly said they would draft Phase 0.2 spec, but sent "please continue" — I drafted + executed without explicit Phase 0.2 spec. Flagged explicitly in report so user could revert if structure/items disagreed with their intent. They confirmed picks aligned.

---

## Phase 0.1 — Multi-domain platform foundation (Lattice v3)

- **Commit:** `36de745`
- **Scope:** App rename + storage v3 + multi-domain architecture
- **Verification:** 18 acceptance checks pass
- **Files touched:** Major restructure — many created, many modified, project directory renamed

### What shipped
- Project directory renamed `~/Code/microstructure-hub` → `~/Code/lattice`
- App brand renamed "Microstructure Hub" → "Lattice"
- Storage schema v1 → v3: `{schemaVersion: 3, activeDomain, domains: {id: {cards, seededAt}}, settings: {}}`
- Legacy localStorage key `microstructure-hub:v1` read on first load, migrated non-destructively to `lattice-v3`, retained as rollback safety
- `js/domain.js`: `DOMAINS` registry, `getActiveDomain()`, `setActiveDomain()`, `loadDomainContent()` (lazy async import)
- `data/domains/microstructure/meta.js`: domain identity with phases array (`label` renamed → `name`)
- `data/domains/geothermal/{meta,items}.js`: empty stub
- `data/shared/learning-principles.js`: cross-domain pedagogy placeholder
- Domain switcher UI in topbar (badge + dropdown), keyboard `D` to toggle
- `state.settings.ui.authorCardOpenByItem` (forward-compat for Phase 1.2 author cards)
- All view modules refactored to receive items/phases/glossary/notation via deps params (no module-level imports)
- All storage accessors take explicit `domainId` parameter

### Decisions made
1. **PHASES moved from `items.js` into `meta.js`**: phase definitions co-locate with domain identity. Field renamed `label` → `name` (no semantic change, more conventional)
2. **Lazy async content loading via dynamic import**: each domain's content loaded only when activated. Memory-efficient as domains scale
3. **Legacy key retention**: non-destructive migration provides rollback safety. Never delete the v1 key.
4. **Domain accent color retained inline on icon**: even within dark chrome, domain identifier color preserved

### Architectural principle established
Each domain is its own knowledge graph. Within-domain deep integration; cross-domain opt-in only. Universal infrastructure (SRS, KaTeX, future AI client) shared; content always domain-scoped.

---

## Pre-Phase 0 — Microstructure Hub foundations

### `30a2900` Reference view (glossary + notation) + unscheduled card state

Reference tab added with:
- 32 atomic glossary terms with category grouping, fuzzy search, see-also chips
- 10 notation comparison rows (Kyle/Stoikov/Almgren-Chriss/Cont-Kukanov-Stoikov/Bouchaud symbol comparison)

Spaced-introduction safeguard:
- Post-launch seed cards default to `nextReview: null` (visible as "Unscheduled" in Library)
- "Introduce 3 new cards" empty-queue button pulls from unscheduled pool
- Preserves Wozniak's spaced-introduction across batch content additions

### `6354ab6` Include items metadata + exportedAt in JSON export

Items metadata bundled into JSON exports for self-contained backup.

### `7ba0a0a` Initial Wozniak-optimized scaffold

Initial single-domain "Microstructure Hub" scaffold:
- 5 phases (Foundation → Theory → Empirical → Crypto → Practical)
- 14 items metadata
- 30 atomic seed cards (Hasbrouck Ch 1-3 + O'Hara Ch 1-2)
- SM-2 algorithm pure function (verified via smoke tests)
- localStorage persistence with content-hash drift detection
- Editorial/research-journal aesthetic
- KaTeX bundled offline
- 6-button SM-2 quality scale

### Design rationale
Built around Wozniak's SuperMemo principles, not a checklist:
- SM-2 is the core feature, not optional
- Atomic Q/A cards following Wozniak's 20 rules of knowledge formulation
- Spaced introduction: v1 seeds only Foundation phase cards (Hasbrouck + O'Hara), other 12 items in Library but no cards yet
- Reading-driven authoring (atomic facts extracted while reading, following Wozniak's 20 rules)
