# Changelog

All notable changes to Lattice are documented here. Format inspired by [Keep a Changelog](https://keepachangelog.com/).

Each entry: phase identifier · commit short SHA · ISO date · headline. Sub-phases (e.g. 1.2.5A, 1.2.5B) split for bisectability when content and aesthetic concerns are separable.

---

## Phase T17 — Trading: comprehensive glossary + notation expansion + a reference-layer harness

**2026-06-09**

Az asked whether the glossary/notation cover everything. The trading reference layer was built at T4 (31 terms / 8 notation entries) and lagged the 23 modules added through T16.

- Glossary **31 → 115 bilingual terms** across **7 categories** (added: Options & volatility, Risk/sizing & edge statistics, Order flow & microstructure, Statistical arbitrage & market-making). All evidence-tagged [Established]/[Practitioner], deduped against existing slugs (0 collisions).
- Notation **8 → 24 author-by-author symbol entries** (43 rows): funding clamp, expectancy/Kelly/breakeven, full Black-Scholes Greeks + parity, expected-max-Sharpe / PSR / DSR, VRP / Demeterfi log-contract, CVD / Kyle-λ, diversification 1/√ρ, OU pairs, TPO POC/VA.
- New permanent harness **verify-reference.mjs** (24 checks): bilingual glossary, unique slugs, categories + notation glossarySlugs resolve, and every notation symbol parses under KaTeX (via vendored katex). 47 → 48 harnesses.
- Suite **11273 → 11297 checks, 48 harnesses**, green.

---

## Phase A6 — Math-rendering fixes + a permanent math-render harness

**2026-06-08**

Az noticed some formulas rendering as raw text. The renderer only supports `$…$`/`$$…$$` (no `\[ \]`/`\( \)`, no escaped `\$`).

- Fixed unsupported LaTeX delimiters: order-flow-cvd (`\[…\]`→`$$`, ×8), market-profile-tpo (`\(…\)`→`$`, ×34).
- Fixed currency-`$` vs math-`$` collisions (odd `$` parity → leaked LaTeX) by writing currency as "USD N" across 11 modules; de-dollared $FXS/$XCN tickers. Numbers unchanged.
- New permanent harness verify-math-render.mjs (5244 checks / 1748 fields): no bad delimiters, even `$` pairing, no stray LaTeX outside math spans. 46 → 47 harnesses.
- Suite 6029 → 11273 checks, 47 harnesses, green. All math renders.

---

## Phase T16 — Trading: Statistical Arbitrage & Pairs Trading + the PairsTradingSim

**2026-06-07**

Statistical arbitrage / pairs trading — the last roadmap viz. Established quant strategy, web-verified refs; not financial advice.

- **`PairsTradingSim`** (27th viz): ouHalfLife/ouEqStd; simulatePairs simulates an OU spread dX=κ(θ−X)dt+σ dW, z-score (X−θ)/σ_eq, and backtests the band strategy (long z≤−entry, short z≥+entry, exit near mean) → path, trades, P&L, win rate, Sharpe, max-DD, half-life, realized std≈σ_eq & AR(1)≈e^{−κdt}. Component: spread path + θ line + ±entry/±exit bands + trade markers.
- **`verify-pairs-sim.mjs`** (20 checks): OU closed forms; std≈σ_eq; AR(1)≈e^{−κdt}; edge under mean reversion vs none under random walk (8-seed average); entry-z trade frequency; determinism. 45 → 46 harnesses.
- **`stat-arb-pairs`** module (quant, prereq insilico-quant-curriculum): rich bilingual (4107 EN / 3557 ID), +16 cards (5 formula / 4 cloze / 7 basic). Cointegration vs correlation, Engle-Granger hedge ratio + ADF, Gatev distance + 2σ rule, OU + half-life + s-score, the trade + why mean reversion is required, risks. Web-verified refs: Avellaneda & Lee 2010 (QF 10(7):761-782), Gatev-Goetzmann-Rouwenhorst 2006 (RFS 19(3):797-827), Engle & Granger 1987 (Econometrica 55(2):251-276), Do & Faff 2010, Uhlenbeck-Ornstein 1930. Cross-linked to portfolio-of-edges / backtest-overfitting-dsr / traderxo-expectancy / Makarov-Schoar.
- **Verification:** content-schema 58 → 59 modules (4339 → 4414 checks); card-coverage 41 → 42; trading now 23 items, 309 cards, 13 sims. Suite 5930 → 6026 checks, 46 harnesses, green. 27 simulators. All vetted trading-roadmap visualizations now built.

---

## Phase T15 — Trading: Portfolio of Edges & the 1/√ρ ceiling + the PortfolioEdgeSim

**2026-06-07**

The "portfolio of uncorrelated, decaying edges" thesis made precise. Established mean-variance math, web-verified refs; not financial advice.

- **`PortfolioEdgeSim`** (26th viz): diversificationRatio(N,ρ)=√(N/(1+(N−1)ρ)); simulatePortfolio → analytic portfolio Sharpe = S·D, the 1/√ρ ceiling, and a Monte-Carlo of N equicorrelated strategies (realized Sharpe, realized corr, median max-DD blend vs single). Component: D-vs-N curve + ρ=0 √N reference + 1/√ρ ceiling line.
- **`verify-portfolio-sim.mjs`** (24 checks): D(N,ρ) identity; 1/√ρ asymptote; portSharpe=S·D + monotonicity; MC realized Sharpe ≈ analytic; one-factor realized corr ≈ ρ; drawdown shrinks; determinism. 44 → 45 harnesses.
- **`portfolio-of-edges`** module (quant, prereq traderxo-expectancy): rich bilingual (3407 EN / 2966 ID), +14 cards (4 formula / 3 cloze / 7 basic). Why pooling raises Sharpe, the ρ=0 √N vs 1/√ρ-ceiling regimes, drawdown shrinkage, caveats (edges decay, correlations→1 in a crisis). Web-verified refs: Markowitz 1952 (J. Finance 7(1):77-91), Grinold & Kahn, Brunnermeier-Pedersen 2009 (RFS 22(6):2201-2238), Sharpe 1964. Cross-linked to traderxo-expectancy / backtest-overfitting-dsr / liquidity-goblin-market-making / tradingriot-orderflow-vrp.
- **Verification:** content-schema 57 → 58 modules (4264 → 4339 checks); card-coverage 40 → 41; trading now 22 items, 293 cards, 12 sims. Suite 5830 → 5930 checks, 45 harnesses, green. 26 simulators.

---

## Phase A2 — Correctness audit (11 trading sims) + canonical value-area fix

**2026-06-07**

Adversarial correctness audit (Az asked to verify the whole thing): 11 agents independently re-derived each trading simulator's core formula from its cited reference and checked the implementation, the harness oracle independence, and the module prose. Result: 10 correct, 1 minor-issues, 0 needs-fix, 0 critical.

- **Finding:** `valueArea` (used by VolumeProfileSim + MarketProfileTPOSim) implemented a simplified single-row variant but its comment claimed the "standard Market-Profile value area." The canonical Steidlmayer/Dalton rule compares the SUM of the two rows above vs the two below the POC and annexes BOTH of the larger pair.
- **Fix:** rewrote valueArea to the canonical two-row rule; updated verify-volume-profile-sim.mjs V2 (loI=1, hiI=5, 21/23); realigned the volume-profile + TPO module prose (EN+ID) and 4 seed cards (dropping the now-stale "~70-71%" claims). Both sims now match the cited Dalton reference.
- **Verification:** suite 5829 → 5830 checks, 44 harnesses, green. The other 10 simulators were confirmed already correct with independent oracles.

---

## Phase T14 — Trading: Order Flow & CVD + the OrderFlowCVDSim

**2026-06-07**

Order flow / cumulative volume delta — absorption & divergence, grounded in Kyle's λ. Established + practitioner reads, web-verified refs; not financial advice.

- **`OrderFlowCVDSim`** (25th viz): simulateOrderFlow (δ aggressor imbalance, CVD=Σδ, Δp=λ(1−a)δ+noise) → λ̂ ≈ λ(1−a), corr, effective impact, verdict confirmed/absorption/choppy + bearish/bullish side; linSlope. Component: price vs CVD with a DIVERGENCE badge.
- **`verify-orderflow-sim.mjs`** (26 checks): linSlope; λ̂ ≈ λ(1−a) + monotone; confirm vs absorption/divergence + side; corr falls with absorption; CVD=cumsum(δ); determinism. 43 → 44 harnesses.
- **`order-flow-cvd`** module (positioning-flows, prereq husslin-oi-positioning): rich bilingual (3563 EN / 3190 ID), +20 cards (3 formula / 3 cloze / 14 basic). Lee-Ready signing, CVD vs resting liquidity, absorption + CVD divergence reversal tell, feed-dependence caveat. Web-verified refs: Kyle 1985 (Econometrica 53(6):1315-1335), Lee & Ready 1991 (JF 46(2):733-746), Easley-LdP-O'Hara 2012 (RFS 25(5):1457-1493), Cont-Kukanov-Stoikov 2014 (J. Fin. Econometrics 12(1):47-88), Bouchaud et al. 2018. Cross-linked to husslin-oi-positioning / luckshury-orderflow / market-profile-tpo / Kyle.
- **Verification:** content-schema 56 → 57 modules (4189 → 4264 checks); card-coverage 39 → 40; trading now 21 items, 279 cards, 11 sims. Suite 5727 → 5829 checks, 44 harnesses, green. 25 simulators.

---

## Phase T13 — Trading: Variance Risk Premium & variance swaps + the VarianceSwapSim

**2026-06-07**

The variance risk premium, beginner→advanced + application. Established canon, web-verified refs; not financial advice.

- **`VarianceSwapSim`** (24th viz): simulateVarianceSwap (Monte-Carlo realised variance ± vol-spike jumps vs strike K_var=σ_imp²) → VRP, win rate, worst, CVaR, P&L skew, Sharpe; fairVarianceStrike (Demeterfi 1/K² log-contract replication, reusing bsPrice); sampleSkew. Component: realised-vol distribution vs the strike (short wins left / loses right; right tail = rare large losses).
- **`verify-variance-sim.mjs`** (28 checks): E[RV]≈σ²; VRP identity; short-vol asymmetry; jumps fatten the tail; Demeterfi recovers flat vol + skew uplift; determinism. 42 → 43 harnesses.
- **`variance-risk-premium`** module (quant, prereq gatheral-vol-surface): rich bilingual (3412 EN / 2950 ID), beginner→advanced, +20 cards (6 formula / 5 cloze / 9 basic); prose numbers cross-checked vs the sim. Web-verified refs: Carr & Wu 2009 (RFS 22(3):1311-1341), Bollerslev-Tauchen-Zhou 2009 (RFS 22(11):4463-4492), Demeterfi-Derman-Kamal-Zou 1999 (Goldman QS / J. Derivatives 6(4):9-32), Bakshi-Kapadia-Madan 2003 (RFS 16(1):101-143). Cross-linked to gatheral-vol-surface / options-greeks-payoffs / tradingriot-orderflow-vrp / backtest-overfitting-dsr / traderxo-expectancy.
- **Verification:** content-schema 55 → 56 modules (4114 → 4189 checks); card-coverage 38 → 39; trading now 20 items, 259 cards, 10 sims. Suite 5623 → 5727 checks, 43 harnesses, green. 24 simulators.

---

## Phase T12 — Trading: Market Profile (TPO) + the MarketProfileTPOSim

**2026-06-07**

Steidlmayer's Market Profile / Dalton's reading — TIME at price (TPO letters), distinct from the volume profile. Established canon, web-verified refs; not financial advice.

- **`MarketProfileTPOSim`** (23rd viz): simulateTPO (lettered auction → 40-row letter profile) computing POC, Value Area (70%, reusing valueArea), Initial Balance (A+B), range extension, single prints/tails, and the five Dalton day types; detectDoubleDist (single-print valley). Component renders stacked A,B,C… letters per price row + IB bracket; reads out POC/VA/IB/extension/tails/day type.
- **`verify-tpo-sim.mjs`** (28 checks): structure; POC=max row; VA contiguous+contains POC+≥70%; IB=first two periods + extension identities; single prints/tails; day-type response; detectDoubleDist; determinism. 41 → 42 harnesses.
- **`market-profile-tpo`** module (quant, prereq insilico-quant-curriculum): rich bilingual (3207 EN / 2754 ID), +16 cards (13 basic / 3 cloze); TIME-vs-VOLUME contrast, five day types, trading reads; worked example matches the sim. Web-verified refs: Steidlmayer & Koy 1986; Dalton (Mind Over Markets 1990 / Markets in Profile 2007); CBOT study guide; Steidlmayer & Hawkins 2003. Cross-linked to insilico-quant-curriculum / luckshury / tradingriot / husslin-oi.
- **Verification:** content-schema 54 → 55 modules (4037 → 4114 checks); card-coverage 37 → 38; trading now 19 items, 239 cards, 9 sims. Suite 5517 → 5623 checks, 42 harnesses, green. 23 simulators.

---

## Phase T11 — Trading: Backtest Overfitting & the Deflated Sharpe Ratio + the BacktestOverfitSim

**2026-06-07**

The rigorous companion to the expectancy module — "is the edge real, or fit from trying many strategies?" Established quant statistics, web-verified refs; not financial advice.

- **`BacktestOverfitSim`** (22nd viz): normalInv (inverse normal CDF), expectedMaxSharpe (Bailey-López de Prado), sharpeStdError (Lo 2002), probabilisticSharpe, simulateBacktestOverfit (Deflated Sharpe Ratio + luck-threshold curve vs N + breakeven N + Monte-Carlo p(beaten by luck); verdict skill/inconclusive/overfit). Component: observed-Sharpe / N-trials / years; the luck threshold vs N against the observed Sharpe.
- **`verify-backtest-sim.mjs`** (35 checks): normalInv inverts normalCDF; expectedMaxSharpe magnitudes + scaling; MC ≈ analytic E[max]; PSR identities; DSR monotonic incl. the headline overfit/skill cases; determinism. 40 → 41 harnesses.
- **`backtest-overfitting-dsr`** module (quant, prereq traderxo-expectancy): rich bilingual (3575 EN / 3190 ID), +18 cards (4 formula / 2 cloze / 12 basic); worked example cross-checked vs the live sim. Web-verified refs: Bailey & López de Prado 2014 (JPM 40(5):94-107), Bailey-Borwein-LdP-Zhu 2014 (Notices AMS 61(5):458-471), Harvey-Liu-Zhu 2016 (RFS 29(1):5-68), Lo 2002 (FAJ 58(4):36-52), López de Prado 2018. Cross-linked to traderxo-expectancy / insilico-quant-curriculum / jimtalbot-method / VPIN.
- **Verification:** content-schema 53 → 54 modules (3962 → 4037 checks); card-coverage 36 → 37; trading now 18 items, 223 cards, 8 sims. Suite 5406 → 5517 checks, 41 harnesses, green. 22 simulators.

---

## Phase T10 — Trading: Options Strategy & the Greeks + the OptionsStrategySim

**2026-06-07**

The options-pricing foundation under the dealer-gamma and vol-surface modules — BSM price + the full Greeks + multi-leg payoff. Established canon, web-verified refs; not financial advice.

- **`OptionsStrategySim`** (21st viz): bsPrice/bsGreeks (Black-Scholes-Merton, reusing normalCDF), simulateOptions (multi-leg payoff: expiry intrinsic vs mark-to-model, net Δ/Γ/ν/Θ, breakevens, max P/L), optionStrategyLegs (9 presets). Component: strategy select + spot/IV/DTE; expiry vs now P&L, breakevens, net Greeks.
- **`verify-options-sim.mjs`** (49 checks): put-call parity (exact); every Greek vs finite-difference; Greek properties; position payoffs (long call, straddle, vertical, iron condor); determinism. 39 → 40 harnesses.
- **`options-greeks-payoffs`** module (quant, prereq husslin-dealer-flows): rich bilingual (2764 EN / 2416 ID), 8 sections, +14 cards (4 formula / 2 cloze / 8 basic). Greeks by what they expose; each structure's Greek signature. Web-verified refs: Black-Scholes 1973 (JPE 81:637-654), Merton 1973 (Bell J. Econ 4:141-183), Hull 10e, Natenberg 2e, Taleb 1997. Cross-linked to dealer-flows / vol-surface / tradingriot-VRP / funding.
- **Verification:** content-schema 52 → 53 modules (3887 → 3962 checks); card-coverage 35 → 36; trading now 17 items, 205 cards, 7 sims. Suite 5281 → 5406 checks, 40 harnesses, green. 21 simulators.

---

## Phase T9 — Trading: 5 Practitioner Playbooks + the ExpectancySurvivalSim

**2026-06-07**

Five new practitioner sources (TraderXO, Jim Talbot, Luckshury, Tradingriot/Adam Bakay, LiquidityGoblin) compiled from public material into a new `practitioners` phase, plus the best new visualization and supporting references. Educational, not financial advice; not affiliated with the named traders.

- **`ExpectancySurvivalSim`** (20th viz): the first sim modelling the TRADER'S account, not the market. E_R = p·b−(1−p), profit factor, breakeven p*=1/(1+b), binary Kelly f*=E_R/b, log-growth g(f); seeded Monte-Carlo equity fan + drawdown + risk-of-ruin + over-bet flag. Teaches "you don't need to be right" and that over-betting a +EV edge still ruins you. Embedded in traderxo-expectancy + jimtalbot-method.
- **`verify-expectancy-sim.mjs`** (36 checks): expectancy identities; Kelly maximises log-growth; LLN; drawdown/ruin monotonic in risk; −EV ⇒ ruin→1; determinism. 38 → 39 harnesses.
- **5 rich bilingual modules** + **91 seed cards** (≥15/module): traderxo-expectancy, jimtalbot-method, luckshury-orderflow, tradingriot-orderflow-vrp, liquidity-goblin-market-making — each embedding a fitting sim (ExpectancySurvivalSim ×2, VolumeProfileSim, VolSurfaceSVISim, FundingRateSim), evidence-tagged, with not-financial-advice + not-affiliated disclaimers, cross-linked across the catalog.
- **References:** Kelly 1956, Thorp 2006, Barber-Odean 2000, Kahneman-Tversky 1979, Carr-Wu 2009, Bollerslev-Tauchen-Zhou 2009, Glosten-Milgrom 1985, Avellaneda-Stoikov 2008, López de Prado, Gatheral 2006.
- **Verification:** content-schema 47 → 52 modules (3505 → 3887 checks); card-coverage 30 → 35; trading now 16 items, 191 cards, 6 sims. Suite 4858 → 5281 checks, 39 harnesses, green. 20 simulators.

---

## Phase B2 — Service worker: network-first so shipped fixes actually land

**2026-06-07**

After B1, micro/trading items still wouldn't open even after a hard refresh.

- **Root cause:** sw.js used stale-while-revalidate (`cached || network`); the buggy pre-B1 library.js was cached, so every reload served it stale and only revalidated in the background — the fix wouldn't appear until the second reload, and a hard refresh doesn't bypass the SW's cache-first answer.
- **Fix:** network-first fetch handler — try network, refresh cache on success (offline still works), fall back to cache only when offline. CACHE bumped v1 → v2 so the stale cache is purged on upgrade.
- **Guard:** verify-pwa.mjs P3 still checks cache.put + cache.match (both used). Suite unchanged at 4858 checks, 38 harnesses, green.

---

## Phase B1 — Bugfix: Library item-detail crash on every item with cards

**2026-06-07**

Clicking a microstructure or trading item did nothing — the detail page never opened (geothermal was fine).

- **Root cause:** `itemDetailHTML` (js/library.js) used an out-of-scope `engine` in the card-list branch — a latent bug since Phase S3 (FSRS) added the `engine` arg to `cardSummaryHTML`. It threw `ReferenceError: engine is not defined` mid-`innerHTML`, aborting the render; only items with ≥1 card hit that branch, so geothermal (no cards) was immune.
- **Fix:** compute `engine = engineOf(state.settings)` in the detail branch and pass it into `itemDetailHTML` (defaults to `'sm2'`).
- **Guard:** verify-app-logic.mjs L6 (+14 checks) renders `itemDetailHTML` headless for a card-bearing item in micro + trading under sm2 & fsrs; fails against the pre-fix code, passes after.
- **Verification:** app-logic 43 → 57; suite 4844 → 4858 checks, 38 harnesses, green.

---

## Phase T8 — Trading: perpetual funding / basis / crypto-carry + the funding simulator

**2026-06-07**

A fifth trading visualization — the perpetual funding mechanism, a crypto-native model serving the practitioner positioning side. Trusted references; educational, not financial advice.

- **`FundingRateSim`** (19th viz component): the exchange funding rate F(P) = P + clamp(I−P, −c, c) (BitMEX/Binance/Hyperliquid) vs perp premium, all %/interval. Flat F=I band + two slope-1 wings (longs pay / shorts pay); reports annualised funding (F × periods/yr), who pays, and the squeeze/flush verdict. Sliders: premium, interest, clamp, interval. Pure exported fundingRate/simulateFunding.
- **`scripts/verify-funding-sim.mjs`** (31 checks): closed form; three regimes (flat F=I; rich F=P−c; cheap F=P+c); continuity + monotonicity; annualisation (8h ⇒ 1095×); who-pays + verdict; determinism. Auto-discovered ⇒ 37 → 38 harnesses.
- **`perp-funding-carry.js`** (phase positioning-flows): rich bilingual, 8 sections (viz in formalization), author block, 3 self-tests, 8 cards. Funding as convergence mechanism + positioning signal (sign = crowded side) + cash-and-carry ("crypto carry"). Trusted refs: Schmeling-Schrimpf-Todorov 2023 (BIS WP 1087 / Management Science); Ackerer-Hugonnier-Jermann 2024 (NBER 32936 / Math. Finance); Fundamentals of Perpetual Futures (arXiv 2212.06888); exchange methodology; Brunnermeier-Pedersen 2009. Cross-linked to husslin-oi-positioning/framework/liquidity-harvesting.
- **Verification:** content-schema 46 → 47 modules (3429 → 3505 checks); card-coverage enforced 29 → 30; trading now 11 items, 100 cards, 5 simulators. Suite 4736 → 4844 checks, 38 harnesses, green. 19 simulators.

---

## Phase T7 — Trading: SSVI full-surface (calendar-arbitrage-free) + the SSVI simulator

**2026-06-07**

The fourth trading visualization — SSVI, the calendar-arbitrage-free full-surface extension of raw SVI. Established academic material (Gatheral & Jacquier), web-verified references; educational, not financial advice.

- **`SSVISurfaceSim`** (18th viz component): five maturity slices of SSVI total variance w(k;T)=½θ(T)(1+ρφk+√((φk+ρ)²+1−ρ²)), θ(T)=σ_ATM²·T, φ(θ)=η·θ^(−γ), one ρ. Detects calendar arbitrage (a later slice below an earlier one ⇒ red + names the maturities) and flags per-slice butterfly violations (θφ(1+|ρ|)<4, θφ²(1+|ρ|)≤4). Sliders: base ATM vol, ATM slope, ρ, η, γ. Pure exported ssviTotalVariance/simulateSSVI.
- **`scripts/verify-ssvi-sim.mjs`** (21 checks): closed form + ATM identity w(0;T)=θ; calendar detection (flat/positive ⇒ none; steep-negative ⇒ flagged); butterfly flags vs the inequalities; skew/symmetry; determinism. Auto-discovered ⇒ 36 → 37 harnesses.
- **`gatheral-ssvi-surface.js`** (phase quant): rich bilingual, 8 sections (viz in formalization), author block, 3 self-tests, 8 cards. Slices-must-not-cross; the SSVI formula + calendar & butterfly conditions; manufacture/remove-an-arbitrage worked example; why an arb-free surface is required for Dupire local vol. Refs: Gatheral-Jacquier 2014; Gatheral 2006; Roper 2010; Lee 2004; Dupire 1994; Corbetta et al 2019/eSSVI.
- **Verification:** content-schema 45 → 46 modules (3354 → 3429 checks); card-coverage enforced 28 → 29; trading now 10 items, 92 cards, 4 simulators. Suite 4639 → 4736 checks, 37 harnesses, green. 18 simulators.

---

## Phase T6 — Trading: volatility surface & Gatheral SVI + the SVI simulator

**2026-06-07**

The third trading visualization — a fully-referenced module on the volatility surface (the Insilico quant curriculum's vol-surface pillar). Established academic material (Gatheral), web-verified references; educational, not financial advice.

- **`VolSurfaceSVISim`** (17th viz component): Gatheral's raw SVI w(k) = a + b(ρ(k−m) + √((k−m)²+σ²)) in total implied variance, drawn as the implied-vol smile σ_BS=√(w/T) vs log-moneyness. Sliders a/b/ρ/m/σ/T; readout shows ATM vol, the minimum k*=m−ρσ/√(1−ρ²), wing slopes b(1±ρ), and a live no-arbitrage check (w_min≥0 + Lee bound b(1+|ρ|)≤2 — red on violation). Pure exported sviTotalVariance/simulateVolSurface.
- **`scripts/verify-vol-surface-sim.mjs`** (28 checks): closed form; w_min + k* vs analytic + grid argmin; wing slopes; skew/symmetry; IV=√(w/T) + T-scaling; arbitrage flags; structure/determinism. Auto-discovered ⇒ 35 → 36 harnesses.
- **`gatheral-vol-surface.js`** (phase quant): rich bilingual, 8 sections (viz in formalization), author block, 3 self-tests, 8 cards (incl. a formula card). Smile reading, raw-SVI formalization + no-arbitrage, and the surface↔vanna/charm dealer-flow link. Refs: Gatheral 2006; Gatheral-Jacquier 2014 (Quant. Finance 14(1):59–71); Gatheral 2004; Lee 2004; Dupire 1994; Heston 1993.
- **Verification:** content-schema 44 → 45 modules (3279 → 3354 checks); card-coverage enforced 27 → 28; trading now 9 items, 84 cards, 3 simulators. Suite 4535 → 4639 checks, 36 harnesses, green. 17 simulators.

---

## Phase T5 — Trading: web-researched Sources & Curriculum survey (theory/fundamental/practical/tips)

**2026-06-07**

The "research the whole related literature" deliverable — a web-verified survey behind both personas, reading every claim through four lenses (theory/fundamental/practical/tips). Attributed; not financial advice.

- Web-verified pillars: VPIN (toxicity rose before the 2010 flash crash); Baltussen et al. 2021 (short-gamma → intraday momentum, 60+ futures 1974–2020); Lucca-Moench 2015 (+49bp/24h ≈80% of annual returns) then Kurov 2021 (gone after 2015 — the canonical decay case); Osler (stop-cluster gappy cascades).
- **`trading-sources-curriculum.js`** (phase framework): rich bilingual, 8 sections, author block, 3 self-tests, 8 cards. Maps the full literature to the framework + the Insilico quant stack, a 6-step reading path, and the [Established]>[Practitioner]>[His] evidence hierarchy. Cross-linked to all 6 other trading modules + the micro academic root.
- **Verification:** content-schema 43 → 44 modules (3198 → 3279 checks); card-coverage enforced 26 → 27; trading now 8 items, 76 cards. Suite 4453 → 4535 checks, 35 harnesses, green. Trading domain: 8 modules, 76 cards, 31-term glossary, notation table, 2 simulators (gamma-flip + volume-profile), 1 literature survey.

---

## Phase T4 — Trading reference layer: volume-profile simulator + notation + glossary expansion

**2026-06-07**

The trading domain's reference layer plus the requested SECOND visualization. No new modules; deepens the existing ones.

- **`VolumeProfileSim`** (16th viz component): builds a volume profile from a synthetic auction, derives POC (argmax), the 70% value area (expand-to-larger-neighbour from the POC), and HVN/LVN nodes; horizontal histogram with POC line + value-area bracket. Sliders trend↔balanced / volatility / bars + Regenerate. Embedded in insilico-quant-curriculum. Pure exported simulateVolumeProfile/buildProfile/valueArea.
- **`scripts/verify-volume-profile-sim.mjs`** (19 checks): volume conservation, the value-area algorithm, POC=argmax, HVN/LVN thresholds, determinism, trend>balanced range. Auto-discovered ⇒ 34 → 35 harnesses.
- **`data/domains/trading/notation.js`** (new): 8 concepts (GEX/Γ, gamma flip, vanna/charm, perp funding, VPIN, Kyle λ + √-impact, POC/VA, HJB/viscosity + Almgren-Chriss).
- **Glossary** 19 → 31 terms (funding-liquidity spiral, stop cascade, manufactured prints, pre-FOMC drift, sell-rumour-buy-news, reflexivity, Auction Market Theory, acceptance/rejection, nested ranges, HJB, ARMA/GARCH, √-impact law).
- **Verification:** content-schema 3192 → 3198 checks; trading 68 cards; card-coverage 26/26. Suite 4428 → 4453 checks, 35 harnesses, green. 16 simulators.

---

## Phase T3 — Trading deep-dives: OI/positioning, event trading, liquidity harvesting + Insilico quant curriculum

**2026-06-07**

Completes the trading-deepening batch — the three remaining @Husslin_ deep-dives + the @insiliconot quant-curriculum deep-dive (the gamma-flip sim shipped in T2). Attributed / evidence-tagged / not financial advice; all rich modules with cards; authored together so they cross-link.

- **husslin-oi-positioning** (positioning-flows): OI as a leverage map (S/R + oscillator), funding/perp-premium = the crowded side, long-short as a deviation from normal, the upside-squeeze worked example. Cross-linked to framework/dealer-flows + micro Brunnermeier-Pedersen/VPIN.
- **husslin-event-trading** (events-tactics): events as hedging-flow events, the pre-event tell, close-on-announcement / CME gap, and the regime-conditional caveat (pre-FOMC drift faded post-2015, Kurov 2021).
- **husslin-liquidity-harvesting** (events-tactics): thin-book squeezes, stop cascades (Osler), liquidation-cluster magnets, manufactured prints (Harris), the illiquid-regime rule — framed DEFENSIVELY (not a manipulation guide); "you are the meat" = toxicity (VPIN).
- **insilico-quant-curriculum** (quant): rebuild the salad/volume profiles (POC/value-area/HVN/LVN, nested-range resolution, acceptance/rejection, non-time bars) + the viscosity-solutions / stochastic-control curriculum + Gatheral + Tsay. Cross-linked to insilico-method + micro Almgren-Chriss/Kyle/O'Hara.
- **Verification:** content-schema 39 → 43 modules (2919 → 3192 checks); card-coverage enforced 22 → 26 (all trading, ≥8 cards each); trading now 66 cards. Suite 4151 → 4428 checks, 34 harnesses, green. Trading domain: 7 items, 1 simulator (gamma-flip), 19-term glossary.

---

## Phase T2 — Trading deep-dive + viz: dealer-hedging flows & the gamma-flip simulator

**2026-06-07**

First of the trading-deepening batch: the @Husslin_ dealer-flows deep-dive (his signature edge) WITH an interactive gamma-flip simulator (the requested "best visualization"). Attributed / evidence-tagged / not financial advice; a normal rich module with cards.

- **`DealerGammaSim`** (15th viz component): net dealer gamma exposure from EXACT Black-Scholes gamma over a call ladder (long γ) + put ladder (short γ, scaled by put demand); finds the gamma flip (bisection-refined zero crossing), shades short-γ-amplify vs long-γ-pin, shows hedging-flow direction at spot. Sliders: spot, σ, τ, put demand. Stylised mechanism model.
- **`scripts/verify-dealer-gamma-sim.mjs`** (21 checks): bsGamma vs independent closed form + BS properties, GEX sign structure, flip (GEX(flip)≈0 + sign change), monotonicity (put demand ⇒ higher flip), regime/determinism. Auto-discovered ⇒ suite 33 → 34 harnesses.
- **`husslin-dealer-flows.js`** (phase positioning-flows): rich bilingual, 8 sections (viz in formalization), author block, 3 self-tests, 10 cards. Greeks-by-what-they-force; gamma sets the tape + the flip; the vanna/charm overnight bid into OPEX and the post-OPEX air-pocket. Cross-linked to husslin-framework + micro Avellaneda-Stoikov/Menkveld/VPIN. Evidence: Baltussen 2021, Barbon-Buraschi 2020, Ni 2005, Lou-Polk-Skouras 2019.
- **Verification:** content-schema 38 → 39 modules (2845 → 2919 checks); card-coverage enforced 21 → 22; suite 4055 → 4151 checks, 34 harnesses, green.

---

## Phase T1 — New domain: Trading (attributed practitioner edges + quant method)

**2026-06-07**

A **third domain**, `trading`, on Az's go to "make a new section for trading / lessons learned from Husslin and Insilico" — built from a bilingual handbook pack Az compiled and cross-checked against the microstructure literature. These are **attributed lessons** (evidence-tagged [Established]/[Practitioner]/[His]), **not financial advice** and not asserted as universal fact; because they are attributed rather than domain-expert-gated, the modules are normal rich modules WITH seed cards.

- New `data/domains/trading/`: `meta.js` (📈, accent #7c4dff; phases framework/positioning-flows/events-tactics/quant; systemTypes CRYPTO/TRADFI/UNIVERSAL), `items.js` (2), `content/` (2 modules), `seed-cards.js` (24), `glossary.js` (19 terms). Registered in `js/domain.js` + `verify-app-logic.mjs`; added to `verify-card-coverage.mjs` ENFORCED_DOMAINS.
- **`husslin-framework`** (@Husslin_): positioning & forced flow, the three questions, dealer gamma/vanna/charm (the overnight bid, OPEX), event trading, liquidity harvesting — cross-linked to micro VPIN/Kyle/Bouchaud/Brunnermeier-Pedersen/Menkveld. **`insilico-method`** (@insiliconot): volume profiles (POC/value area/HVN/LVN), participant archetypes, non-time bars, the viscosity-solutions quant curriculum — cross-linked to Almgren-Chriss/Kyle/O'Hara. Both rich, bilingual, 8 sections + author block + 3 self-tests.
- **Cross-domain `item:` links proven** (content-schema S7 resolves globally): trading modules link into the academic microstructure modules they cite.
- **Verification:** content-schema 36 → 38 modules (2704 → 2845 checks); card-coverage enforced 19 → 21 modules (trading clears ≥8/module); app-logic validates 24 new card ids. Suite **3905 → 4055 checks**, 33 harnesses, green.
- Deferred to next: geothermal viz retrofit (Arps/Horner/tracer); Husslin deep-dives; Insilico quant deep-dive; trading notation.

---

## Phase G16 — Geothermal DRAFT + interactive viz: Whiting & Ramey (material balance / lumped-parameter modelling)

**2026-06-07**

New geothermal-DRAFT topic on Az's "more topics with the best visualization" go — and the **first geothermal DRAFT to ship with an interactive simulator** (only the rich Acuña module had one before). Same discipline as the existing fifteen: schema-valid, every domain claim ⟦TODO-Az⟧-flagged, **no seed cards**, `AWAITING AZ DOMAIN REVIEW` — finalization is Az's alone.

- Anchored on Whiting & Ramey (1969) JPT 21(7), 893–900 — the paper that first applied petroleum material/energy balance to geothermal (Wairakei; Ramey = Stanford reservoir engineering, the Horne lineage). Web-verified.
- **`LumpedReservoirSim`** (14th viz component, js/viz.js): solves the verified, fluid-neutral lumped mass balance κ dp/dt = −Wₚ(1−f) + a(p₀−p) — sliders for production, reinjection fraction, recharge, storativity; pressure-vs-time curve with the p∞ asymptote, a dashed no-reinjection reference, and an open/closed (sustainable/mined) readout. Pure exported `simulateLumped()`.
- **`scripts/verify-lumped-sim.mjs`** (30 checks): validates the live solver against an independent RK4 integration of the ODE + analytic properties (steady state, reinjection monotonicity, closed→linear limit, 1/e time-constant point). Auto-discovered → suite **32 → 33 harnesses**.
- Full bilingual (EN + ID), 8 sections (viz in *intuition*), author block, 3 self-tests; `items.js` entry (`whiting-ramey-1969`, phase `reservoir`, prereq Grant-Bixley). The HEADLINE dry-steam adaptation (Whiting-Ramey is a STEAM material/energy balance — pore-water boiling, heat mined from rock; the liquid tank is an intuition scaffold) and the Darajat κ/a/reinjection specifics are all ⟦TODO-Az⟧-flagged.
- **Verification:** content-schema 36 modules (2626 → 2704 checks, S6 resolves the new component); card-coverage exempts the draft, microstructure still 19/19; geothermal catalog 16 → 17 items (Acuña rich + 16 drafts). Suite **3797 → 3905 checks** across **33 harnesses**, green. No live cards.

---

## Phase G15 — Geothermal DRAFT: Gallup (scaling, corrosion & production chemistry)

**2026-06-07**

Second of two new geothermal-DRAFT topics on Az's "more geothermal drafts" go (paired with G14 drilling) — filling the production-chemistry (flow-assurance) gap. Same discipline as the existing fourteen: schema-valid, every domain claim ⟦TODO-Az⟧-flagged, **no seed cards**, marked `AWAITING AZ DOMAIN REVIEW` — finalization is Az's alone.

- Anchored on Darrell L. Gallup (Unocal/Chevron/Thermochem; inventor of the pH-mod silica-control process), *Production engineering in geothermal technology: A review* (Geothermics 38, 326–334, 2009). The **verified, general backbone** — silica scaling (cooling + flashing → polymerisation; controls: stay above saturation, residence time, pH-modification, inhibitors), calcite at the flash point (CO₂ loss → CaCO₃; downhole inhibitor capillary), corrosion (H₂S/CO₂/chloride/low-pH/O₂ ingress; materials, inhibitors, oxygen exclusion), and NCG/H₂S abatement — is taught directly; the **HEADLINE dry-steam shift** (steam + NCG not brine → condensate chemistry + H₂S/NCG abatement + line corrosion dominate) plus reinjection coupling and exact constants are all ⟦TODO-Az⟧-flagged, with a header OPEN-TODO list and a research-prep factsheet.
- Full bilingual (EN + ID), 8 sections, author block, 3 self-tests; `items.js` entry (`gallup-2009`, phase `geochemistry`, prereq Henley-Truesdell-Barton). Web-verified.
- **Verification:** content-schema now covers **35 modules** (2554 → 2626 checks); card-coverage exempts the draft, microstructure enforced still 19/19; geothermal catalog 15 → 16 items (Acuña rich + 15 drafts). Suite **3725 → 3797 checks** (32 harnesses), green. No live cards. Backlog awaiting Az is now 15 drafts.

---

## Phase G14 — Geothermal DRAFT: Finger & Blankenship (drilling & well completion)

**2026-06-07**

New geothermal-DRAFT topic on Az's fresh "more geothermal drafts" go (beyond the four-topic menu) — filling the drilling / well-construction gap. Same discipline as the existing thirteen: schema-valid, every domain claim ⟦TODO-Az⟧-flagged, **no seed cards**, marked `AWAITING AZ DOMAIN REVIEW` — finalization is Az's alone.

- Anchored on the Sandia *Handbook of Best Practices for Geothermal Drilling* (Finger & Blankenship, SAND2010-6048). The **verified, general backbone** — telescoping cemented casing strings + production liner; casing design under thermal cycling (σ ~ E·α·ΔT); the lost-circulation spectrum (LCM → aerated/water → blind drilling); directional/pad targeting of fracture-feedzone structure; high-T logging; drilling as ⅓–½ of project capital — is taught directly; the **dry-steam/Darajat practice** (blind drilling under-pressured steam zones, large-bore deliverability completions, H₂S, casing/cement & feedzone targeting) is all ⟦TODO-Az⟧-flagged, with a header OPEN-TODO list and a research-prep factsheet.
- Full bilingual (EN + ID), 8 sections, author block, 3 self-tests; `items.js` entry (`finger-blankenship-2010`, phase `production`, prereq Grant-Bixley). Web-verified.
- **Verification:** content-schema now covers **34 modules** (2483 → 2554 checks); card-coverage exempts the draft, microstructure enforced still 19/19; geothermal catalog 14 → 15 items (Acuña rich + 14 drafts). Suite **3654 → 3725 checks** (32 harnesses), green. No live cards.

---

## Phase G13 — Geothermal DRAFT: Giggenbach (production geochemistry / geothermometry)

**2026-06-06**

The 4th and final topic of Az's "continue other three geothermal topics" go (completing the four-topic menu: PTA, reinjection/tracer, decline/reserves, production geochemistry). Same discipline as the existing twelve: schema-valid, every domain claim ⟦TODO-Az⟧-flagged, **no seed cards**, marked `AWAITING AZ DOMAIN REVIEW` — finalization is Az's alone.

- Anchored on Werner F. Giggenbach (DSIR, New Zealand; the Na-K-Mg geoindicators, GCA 1988). The **verified, fluid-neutral backbone** — solute geothermometers (silica, Na-K, K-Mg), the Na-K-Mg ternary diagram as an equilibrium VALIDITY test (fully equilibrated / partial / immature), gas geothermometry (CO₂-H₂S-H₂-CH₄), and silica/calcite scaling prediction — is taught directly; the **HEADLINE dry-steam adaptation** (no liquid at a vapour-dominated wellhead → gas geothermometry + steam/condensate chemistry carry reservoir-T and monitoring), plus exact calibration constants, sampling, and NCG/H₂S specifics, are all ⟦TODO-Az⟧-flagged, with a header OPEN-TODO list and a research-prep factsheet.
- Full bilingual (EN + ID), 8 sections, author block, 3 self-tests; `items.js` entry (`giggenbach-1988`, phase `geochemistry`, prereq Henley-Truesdell-Barton). Web-researched.
- **Verification:** content-schema now covers **33 modules** (2412 → 2483 checks); card-coverage exempts the draft (geothermal + DRAFT marker), microstructure enforced still 19/19; geothermal catalog 13 → 14 items (Acuña rich + 13 drafts). Suite **3583 → 3654 checks** (32 harnesses), green. No live cards. Closes the four-topic geothermal-DRAFT menu; the backlog awaiting Az is now 13 drafts.

---

## Phase G12 — Geothermal DRAFT: Sanyal (decline-curve analysis & reserves)

**2026-06-06**

Continuing the geothermal-DRAFTs track on Az's explicit "continue other three geothermal topics" go (3rd of four menu topics). Same discipline as the existing eleven: schema-valid, every domain claim ⟦TODO-Az⟧-flagged, **no seed cards**, marked `AWAITING AZ DOMAIN REVIEW` — finalization is Az's alone.

- Anchored on Subir K. Sanyal (GeothermEx). The **verified, fluid-neutral backbone** — Arps rate–time decline (exponential/hyperbolic/harmonic, set by the exponent b) → EUR; the volumetric stored-heat estimate (heat in place × recovery factor × conversion efficiency → MW capacity); Monte-Carlo → P90/P50/P10 booked as proven/probable/possible (Sanyal-Sarmiento) — is taught directly; the **geothermal/Darajat-specific adaptations** (whether Arps transfers to a pressure/reinjection-governed dry-steam decline in steam-rate/WHP, the dry-steam recovery factor, the reinjection coupling, the Acuña deliverability link) are all ⟦TODO-Az⟧-flagged, with a header OPEN-TODO list and a research-prep factsheet.
- Full bilingual (EN + ID), 8 sections, author block, 3 self-tests; `items.js` entry (`sanyal-2005`, phase `production`, prereq Grant-Bixley). Web-researched.
- **Verification:** content-schema now covers **32 modules** (2341 → 2412 checks); card-coverage exempts the draft (geothermal + DRAFT marker), microstructure enforced still 19/19; geothermal catalog 12 → 13 items (Acuña rich + 12 drafts). Suite **3512 → 3583 checks** (32 harnesses), green. No live cards.

---

## Phase G11 — Geothermal DRAFT: Axelsson (reinjection & tracer testing)

**2026-06-06**

Continuing the geothermal-DRAFTs track on Az's explicit "continue other three geothermal topics" go (2nd of four menu topics, after Horne PTA). Same discipline as the existing ten: schema-valid, every domain claim ⟦TODO-Az⟧-flagged, **no seed cards**, marked `AWAITING AZ DOMAIN REVIEW` — finalization is Az's alone.

- Anchored on Gudni Axelsson (ÍSOR / UNU-GTP). The **verified, fluid-neutral backbone** — reinjection as disposal + pressure support + heat sweep, thermal breakthrough as the governing hazard, tracer return curves interpreted via flow-channel advection–dispersion + moment analysis (recovered fraction, mean residence time → swept volume), and the thermal front lagging the fluid front by the retardation factor to predict cooling — is taught directly; the **geothermal/Darajat-specific adaptations** (dry-steam peripheral/condensate reinjection & quenching, two-phase tracer partitioning, the numeric retardation factor, injector siting) are all ⟦TODO-Az⟧-flagged, with a header OPEN-TODO list and a research-prep factsheet.
- Full bilingual (EN + ID), 8 sections, author block, 3 self-tests; `items.js` entry (`axelsson-2010`, phase `reservoir`, prereq Grant-Bixley). Web-researched.
- **Verification:** content-schema now covers **31 modules** (2271 → 2341 checks); card-coverage exempts the draft (geothermal + DRAFT marker), microstructure enforced still 19/19; geothermal catalog 11 → 12 items (Acuña rich + 11 drafts). Suite **3442 → 3512 checks** (32 harnesses), green. No live cards.

---

## Phase G10 — Geothermal DRAFT: Horne 1995 (well testing / pressure-transient analysis)

**2026-06-06**

The geothermal-DRAFTs track, on Az's explicit "geothermal" go and topic choice (**well testing & PTA**). A new geothermal catalog item, drafted to the same discipline as the existing nine: schema-valid, every domain claim ⟦TODO-Az⟧-flagged, **no seed cards**, marked `AWAITING AZ DOMAIN REVIEW` — finalization is Az's alone.

- Anchored on Roland Horne's *Modern Well Test Analysis* (the standard PTA text; Horne heads the Stanford Geothermal Program). The **verified, fluid-neutral PTA backbone** — diffusivity equation, line-source semilog slope → kh, Horner buildup → kh + p*, skin, wellbore storage, the Bourdet pressure-derivative regime diagnosis — is taught directly; the **geothermal/Darajat-specific adaptations** (two-phase near-well Horner segments, dry-steam compressible/pseudo-pressure analysis, fracture/feedzone & fractal flow, cold-water injection/fall-off thermal correction, the Acuña deliverability link) are all ⟦TODO-Az⟧-flagged, with a header OPEN-TODO list and a research-prep factsheet.
- Full bilingual (EN + ID), 8 sections, author block, 3 self-tests; `items.js` entry (`horne-1995`, phase `production`, prereq Grant-Bixley). Web-researched.
- **Verification:** content-schema now covers **30 modules** (2200 → 2271 checks); card-coverage exempts the draft (geothermal + DRAFT marker), microstructure enforced still 19/19; geothermal catalog 10 → 11 items (Acuña rich + 10 drafts). Suite **3371 → 3442 checks** (32 harnesses), green. No live cards — nothing enters the Review queue until Az signs off.

---

## Phase D3 — Deepening: the five new C-modules

**2026-06-06**

Completes deepening across the *entire* microstructure domain: **+13 advanced cards** on the five new modules (C1-C5), so all 19 modules now carry 14-19 cards.

- **Budish-Cramton-Shim 2015** (+3): the arms race as constant-sum rent dissipation; FBA vs speed bumps; why FBA needs discrete time *and* uniform pricing.
- **Hasbrouck 1995** (+2): the impulse-response function vs the static information share; the asynchronous-quote bias.
- **Brunnermeier-Pedersen 2009** (+3): pro-cyclical leverage (Adrian-Shin); multiple equilibria / self-fulfilling crises; calm-time risk understates the tail.
- **Amihud 2002** (+2): the ILLIQ scaling/units caveat; impact (ILLIQ) vs spread measures.
- **Menkveld 2013** (+3): the Hendershott-Jones-Menkveld market-quality companion; no-affirmative-obligation fragility; quoted vs realized spread.
- **Verification:** SEED_CARDS 292 → 305 (52 deepening cards total across D1-D3). Suite unchanged at **3371 checks (32 harnesses)**, green. All 19 microstructure modules deepened.

---

## Phase D2 — Deepening: the remaining older modules

**2026-06-06**

Completes the deepen track across all 14 original microstructure modules: **+10 advanced cards** on the six D1 missed.

- **Cont-Kukanov-Stoikov** (+2): why OFI's R² beats signed trade volume; OFI as a contemporaneous price-formation relation, not a tradable forecast.
- **Makarov-Schoar 2020** (+2): price-level inefficiency (capital controls) coexisting with return-efficiency; the common/idiosyncratic order-flow split.
- **Aquilina-Budish-O'Neill 2022** (+2): the race-detection window methodology; ~22% of volume in ~0.043 s of the day.
- **Cartea-Jaimungal-Penalva 2015** (+2): "strategy not schedule" as feedback control; the unifying HJB template.
- **Guéant 2016** (+1): the GLFT closed form + inventory bound.
- **Kissell 2013** (+1): the pre-/in-/post-trade TCA loop.
- **Verification:** SEED_CARDS 282 → 292 (39 deepening cards total). Suite unchanged at **3371 checks (32 harnesses)**, green.

---

## Phase D1 — Deepening existing modules with advanced cards

**2026-06-06**

The "deepen existing modules" track. Because the content schema fixes each module at exactly 8 sections, deepening means more **SRS cards** — which is the spaced-repetition payload anyway. Added **+29 advanced, second-order cards** to nine core modules, each grounded in already-verified module content and covering results the original card sets skipped.

- **Kyle 1985** (+5): expected insider profit (Σ₀/4λ = ½σ_u√Σ₀); why noise traders are essential; the half-quantity from internalizing impact; λ as price-impact = 1/depth = adverse selection; the dynamic continuous-auction model.
- **Glosten-Milgrom 1985** (+4): regret-free zero-profit quotes; the lemons-market breakdown; the bid-ask-bounce → Roll link; per-trade Bayesian impact vs Kyle's λ.
- **Almgren-Chriss 2000** (+4): the closed-form sinh trajectory + half-life; permanent-impact schedule-independence (½γX²); implementation shortfall; the efficient-frontier endpoints.
- **Avellaneda-Stoikov 2008** (+4): reservation-price skew; the ABM + Poisson-arrival assumptions; Menkveld 2013 as empirical confirmation; the two spread terms.
- **Hasbrouck 2007** (+3): p = m + s decomposition; the VAR impulse-response trade-information measure; the variance-ratio efficiency metric.
- **O'Hara 1995** (+3): the information-based paradigm; adverse-selection vs inventory spread sources; why the spread narrows as the market learns.
- **VPIN** (+3): the 2010 Flash Crash application + caveat; toxicity → maker withdrawal → liquidity-induced volatility; real-time VPIN vs PIN's MLE.
- **Bouchaud et al. 2018** (+3): the metaorder impact path (concave rise, ~2/3-of-peak relaxation); latent liquidity; the square-root law's universality.
- **Verification:** all card ids unique, itemIds valid, formula cards carry LaTeX; SEED_CARDS 253 → 282. Suite unchanged at **3371 checks (32 harnesses)**, green.

---

## Phase R1 — Reference-layer expansion: glossary + notation

**2026-06-06**

The "reference layer" track of the content-expansion program: grow the cross-domain **glossary** and **notation** reference so the vocabulary introduced by the five new modules (C1-C5) is searchable and cross-linked from the Reference tab.

- **Glossary: +26 bilingual terms (32 → 58)** in two new categories — **Market design & HFT** (continuous limit order book, frequent batch auction, latency arbitrage, stale-quote sniping, speed bump, MEV, maker-taker pricing, new market maker, positioning loss, cross-market) and **Liquidity & funding** (market vs funding liquidity, liquidity/loss/margin spirals, margin-haircut, flight to quality, limits of arbitrage, Amihud illiquidity/ILLIQ, illiquidity premium, priced liquidity risk) — plus price-discovery terms (price discovery, information share, cointegration, VECM, common factor). Each has a bilingual term + definition, aliases, optional formula, see-also cross-links, and source modules.
- **Notation: 10 → 12 concept tables** — Amihud's ILLIQ added as a daily proxy under "Price impact coefficient," plus "Funding / capital constraint" (Brunnermeier-Pedersen W, m, |x|≤W/m) and "Price-discovery weights" (Hasbrouck ψ, α, Ω; Gonzalo-Granger component share).
- **Verification:** unique slugs, every entry bilingual; suite unchanged at **3371 checks (32 harnesses)**, green (glossary/notation are reference data; verify-app-logic L4 confirms the bilingual shape).

---

## Phase C5 — New microstructure module: Menkveld 2013 (HFT & the new market makers)

**2026-06-06**

Fifth content-expansion module: Albert Menkveld, **"High Frequency Trading and the New Market Makers"** (JFM 2013) — a rare look *inside one identified HFT's book*, showing the modern HFT is, at bottom, a market maker. It is the empirical portrait of Avellaneda-Stoikov and the maker-side counterpart to the latency-arbitrage/sniper papers (C1 Budish-Cramton-Shim, Aquilina-Budish-O'Neill).

- Full bilingual (EN + ID) module: 8 sections, author block (8 fields + 5 keyWorks), 3 self-tests, **13 SRS cards**. It teaches the post-MiFID Chi-X-vs-Euronext natural experiment; the three behaviours that classify the HFT as a market maker (two-sided passive provision, mean-reverting inventory flat by close, ~1,397 trades/stock/day); the **P&L decomposition** — gross €0.88/trade = +€1.55 spread (net of fees) − €0.68 positioning loss, i.e. *spread minus adverse selection*, the Glosten-Milgrom / Avellaneda-Stoikov tradeoff measured in a real book; why the thin margin signals competition not extraction; the **cross-market** fee/depth strategy (≈64% participation on the low-fee entrant to earn the spread, ≈8% on the deep incumbent to offload) that bootstrapped the new venue's liquidity; and the reconciliation with the sniper papers (same technology, two roles). Web-verified (every euro figure, the participation rates, the trade count).
- Catalog entry (`menkveld-2013`, phase **empirical**, prereq Avellaneda-Stoikov 2008) + 13 seed cards.
- **Verification:** content-schema now covers **29 modules** (2127 → 2200 checks); card-coverage 19/19; SEED_CARDS 240 → 253; micro catalog 18 → 19 items (20 rich modules). Suite **3297 → 3371 checks** (32 harnesses), green.

---

## Phase C4 — New microstructure module: Amihud 2002 (illiquidity & stock returns)

**2026-06-06**

Fourth content-expansion module: Yakov Amihud, **"Illiquidity and Stock Returns"** (JFM 2002) — the **ILLIQ** measure and the **illiquidity premium**, the bridge from microstructure to asset pricing (and the companion to C3's funding liquidity).

- Full bilingual (EN + ID) module: 8 sections, author block (8 fields + 5 keyWorks), 3 self-tests, **13 SRS cards**. It teaches ILLIQ = average daily |return|/dollar-volume as a cheap daily-data proxy for Kyle's price-impact λ; the cross-sectional **illiquidity premium** (illiquid stocks earn higher returns; part of the small-firm effect); the time-series result (expected illiquidity raises expected returns, while *unexpected* illiquidity lowers current prices through repricing + flight to liquidity — the two-signed signature of a priced state variable); why its data thrift (daily, not intraday) made it one of the most-used liquidity measures; and its caveats (total-not-signed volume, a proxy not a structural estimate, the "why is it priced" debate). Web-verified (citation, the ILLIQ definition, both effects, the 1963-1997 NYSE sample).
- Catalog entry (`amihud-2002`, phase **empirical**, prereq Kyle 1985) + 13 seed cards.
- **Verification:** content-schema now covers **28 modules** (2056 → 2127 checks); card-coverage 18/18; SEED_CARDS 227 → 240; micro catalog 17 → 18 items (19 rich modules). Suite **3225 → 3297 checks** (32 harnesses), green.

---

## Phase C3 — New microstructure module: Brunnermeier-Pedersen 2009 (market & funding liquidity)

**2026-06-06**

Third content-expansion module: Brunnermeier & Pedersen, **"Market Liquidity and Funding Liquidity"** (RFS 2009) — the **liquidity-spirals** paper, and the standard lens for funding-driven crises (LTCM, 2008, 2020 dash-for-cash, 2022 gilts).

- Full bilingual (EN + ID) module: 8 sections, author block (8 fields + 5 keyWorks), 3 self-tests, **13 SRS cards**. It teaches the two liquidities (trading an asset vs financing a position) and the loop between them; the funding constraint |x| ≤ W/m; the **loss spiral** (losses → forced deleveraging → more losses, scaling with leverage) and the **margin spiral** (a price drop raises volatility → lenders raise margins → deleveraging *with no further loss* → more illiquidity — "destabilizing margins"); the non-linearity that makes liquidity *fragile* (sudden dry-ups); the five stylized facts (dry-up, commonality, volatility-link, flight to quality, market comovement); and why a lender of last resort easing *funding* restores *market* liquidity. Crypto auto-liquidation cascades flagged as the module's extension.
- A note on rigor: the originally-planned C3 (Kyle-Obizhaeva invariance) was **deferred** because its scaling exponents could not be verified from the available (image-only) PDFs; rather than risk stating wrong formulas, it was replaced with this cleanly-verifiable module.
- Catalog entry (`brunnermeier-pedersen-2009`, phase **theory**, prereq Kyle 1985) + 13 seed cards.
- **Verification:** content-schema now covers **27 modules** (1986 → 2056 checks); card-coverage 17/17; SEED_CARDS 214 → 227; micro catalog 16 → 17 items (18 rich modules). Suite **3154 → 3225 checks** (32 harnesses), green.

---

## Phase C2 — New microstructure module: Hasbrouck 1995 (price discovery / information share)

**2026-06-06**

Second content-expansion module: Joel Hasbrouck's **"One Security, Many Markets: Determining the Contributions to Price Discovery"** (JF 1995) — the measurement primitive for *where a price is discovered* when one security trades in many venues. Companion to the Hasbrouck 2007 textbook already in the catalog.

- Full bilingual (EN + ID) module: 8 sections, author block (8 fields + 5 keyWorks), 3 self-tests, **13 SRS cards**. It teaches cointegrated venue prices sharing one unobservable efficient price; the VECM (the α adjustment-speeds tell you who *leads* vs *error-corrects*); the common-factor weights ψ and the efficient-price innovation Δm = ψ·ε; the **information share** (a venue's fraction of that innovation variance); the honest **identification caveat** — when innovations are contemporaneously correlated the share is not point-identified, so you report Cholesky-ordering upper/lower bounds whose width *is* the correlation; the headline that **price discovery ≠ volume** (NYSE median ~92.7% for the Dow); and the Gonzalo-Granger component-share alternative. Web-verified (citation, the 92.7% figure, the bounds method).
- Catalog entry (`hasbrouck-1995`, phase **empirical**, prereq Hasbrouck 2007) + 13 seed cards. No new simulator.
- **Verification:** content-schema now covers **26 modules** (1914 → 1986 checks); card-coverage 16/16; SEED_CARDS 201 → 214; micro catalog 15 → 16 items (17 rich modules). Suite **3081 → 3154 checks** (32 harnesses), green.

---

## Phase C1 — New microstructure module: Budish-Cramton-Shim 2015 (frequent batch auctions)

**2026-06-06**

First module of a user-requested **content-expansion** program (an explicit "go" to add new advanced microstructure papers). Adds the landmark market-design paper **"The High-Frequency Trading Arms Race: Frequent Batch Auctions as a Market Design Response"** (QJE 2015) — the **theory parent** of the Aquilina-Budish-O'Neill 2022 empirical module already in the catalog, closing the conspicuous gap on the HFT/market-design arc.

- Full bilingual (EN + ID) module: all 8 canonical sections, the 8-field author block + 5 keyWorks, 3 self-tests, and **13 SRS cards**. It teaches the continuous-limit-order-book flaw (continuous time + serial processing → a winner-take-all sniping race), correlation breakdown (ES–SPY correlation ≈ 1 at human scale, → ~0 at millisecond scale), the arms-race signature (median ES–SPY arbitrage duration fell ~97 ms → ~7 ms over 2005–2011 while frequency/profit held roughly constant — the prize never shrank), a positive bid-ask spread *with no private information* (mechanical adverse selection), the prisoner's-dilemma rent dissipation, and the frequent-batch-auction fix (discrete time + uniform-price clearing). Facts web-verified; dollar magnitudes attributed to the in-repo Aquilina companion rather than asserting unverified BCS figures.
- Catalog entry (`budish-cramton-shim-2015`, phase **theory**, prereqs Glosten-Milgrom + O'Hara) + 13 seed cards. No new simulator yet.
- **Verification:** content-schema now covers **25 modules** (1841 → 1914 checks); card-coverage 15/15; SEED_CARDS 188 → 201; microstructure catalog 14 → 15 items (16 rich modules). Suite **3007 → 3081 checks** (32 harnesses), green.

---

## Phase S31 — Study-timing heatmap (day & hour)

**2026-06-06**

Shows **when** you study and when you recall best — a day-of-week strip and an hour-of-day strip on the Map tab.

- The review log stored date-only timestamps, so day-of-week is recoverable for your whole history but hour-of-day wasn't recorded. From now on `onRate` captures the local hour (`new Date().getHours()`) on each entry, so the hour strip fills in going forward while the weekday strip works on all history.
- A Mon-first 7-cell weekday strip + a 24-cell hour strip (or a "fills in going forward" note until there are timestamped reviews), each cell shaded by review volume with "N reviews · X% recall" on hover — so you can see both *when you show up* and *when you actually remember*.
- Pure `reviewTimeStats(log)` in `js/dashboard.js`: weekday via `getUTCDay` on the date string (deterministic — no `Date.now()`), hour from the numeric `hour` field, per-bucket `{ n, graded, success, rate }` + a `hasHours` flag (volume counts all entries; rate over graded only). `studyTimingPanelHTML` renders it; `.timing-*` styling.
- **Harness:** extended `scripts/verify-review-stats.mjs` (39 → 51, RS9): bucket shapes, same-weekday-a-week-apart bucketing, weekday/hour recall rates, ungraded-as-volume-not-rate, in-range hour capture, `hasHours`, totals, determinism, and a source check that `onRate` writes the captured hour.
- **Verification:** suite **2993 → 3007 checks** (32 harnesses; +12 stats, +2 render), green.

---

## Phase S30 — New-cards-per-day recommender

**2026-06-06**

Turns the S28 workload model into the answer every SRS user actually needs: **how many new cards can I add per day without my review pile snowballing?**

- The cost of a new card is its **first-year review count** `F` (the S28 recursion over 365 days). In steady state, adding `N` new cards/day puts ~365N cards in their first year generating ~`N·F` reviews/day, so a budget of `B` reviews/day supports `N ≈ B / F` new cards/day. At the default weights and a 90% target, `F ≈ 5`, so ~20 reviews/day ⇒ ~4 new cards/day — right in line with conventional advice, derived rather than guessed.
- A Map-dashboard table maps review budgets (10–60/day) to new-cards/day, highlights the row nearest your recent pace (last-30-day average), and gives a personalised number. Because higher target retention makes each card costlier, it composes with the retention curve directly above it: push retention up and the sustainable new-card rate drops.
- Pure `firstYearReviews`, `newCardsForBudget`, `recommendNewCards` in `js/retention.js`; `newCardsPanelHTML` in `js/dashboard.js`; `.newcard-*` styling.
- **Harness:** extended `scripts/verify-retention.mjs` (22 → 33, RT6): first-year cost positivity + monotonicity, table shape, the `round(budget/F)` formula, budget-monotonicity, `newCardsForBudget` agreement, zero/negative budget → 0, higher-target ⇒ fewer cards, invalid-weights fallback, determinism. The dashboard render test asserts the panel present.
- **Verification:** suite **2980 → 2993 checks** (32 harnesses; +11 retention, +2 render), green.

---

## Phase S29 — Leech detector

**2026-06-06**

Surfaces your **leeches** — the cards that keep failing — so you can do the thing that actually fixes them: **reformulate, not re-drill**. A card you've lapsed on five times isn't a memory problem, it's a *formulation* problem (Wozniak's minimum-information rule).

- A Map-dashboard panel lists cards with `lapses ≥ 4`, worst-first (most lapses; ties broken by lower ease = harder), each showing the lapse count, a front snippet (cloze stripped), and its source — click to open that source in the Library. Only appears when you have leeches; capped at the 12 worst with an overflow note.
- Pure `findLeeches(cards, { threshold })` + exported `LEECH_THRESHOLD` (4) in `js/dashboard.js`; `leechPanelHTML` reuses the prereq-graph's `[data-node-item]` click-through; `.leech-*` styling.
- **Harness:** extended `scripts/verify-dashboard.mjs` (48 → 56, D10): default threshold filtering, worst-first ordering, lapse-tie-by-ease, field carry-through, custom threshold, no-leech/empty/null safety, the `LEECH_THRESHOLD` export.
- **Verification:** suite **2972 → 2980 checks** (32 harnesses; +8), green.

---

## Phase S28 — Target-retention workload curve ("how hard should you study?")

**2026-06-06**

The most advanced thing an FSRS app can tell you, made visible: **what target retention should you actually pick?** Target retention is a dial — turn it up and you remember more but review far more (intervals shrink, and reviewing before much forgetting means each review reinforces little — the spacing effect); turn it down and you relapse constantly. This Map-dashboard panel models the tradeoff and marks the efficient operating point.

- For each target retention from 70–97%, it drives the **real FSRS dynamics** forward over a 10-year horizon under an expected-value recursion (at each review, fired when retrievability hits the target, the state updates as `r·success + (1−r)·lapse`) — no randomness, so it's deterministic and unit-tested. It reports reviews/year and mean interval per retention.
- Workload always falls as you lower the target (remembering less is less work), so a naive "minimum" would just say "study less" — useless. Instead it reports the **diminishing-returns knee** (the convex elbow): the target beyond which review load climbs steeply for little retention gain — ≈ **91%** on the published weights, lining up with FSRS's ~90% rule of thumb. The chart marks the sweet spot and your current target, and the readout quantifies the cost of pushing higher ("~N× the reviews to reach 97%").
- New pure `js/retention.js`: `workloadCurve`, `recommendRetention` (Kneedle elbow), `retentionAdvice`. Rendered by `retentionPanelHTML` + `workloadCurveSVG` (area + line with sweet-spot / now markers) in `js/dashboard.js`, using your active (trained) FSRS weights.
- **Harness:** new `scripts/verify-retention.mjs` (22 checks): curve structure/grid, monotonicity both ways, strict 0.97 > 0.70 cost, the knee (grid member, interior, 85–95% band, empty/short fallbacks), the advice bundle (recommendation consistency, nearest-current snapping), weights handling (invalid→defaults, trained≠default, grade option), determinism. The dashboard render test asserts the panel is present.
- **Verification:** suite **2948 → 2972 checks** (**31 → 32 harnesses**; +22 retention, +2 render), green.

---

## Phase S27 — Per-domain stat breakdowns

**2026-06-06**

The review-stats panel was a single cross-domain aggregate; this adds a **By-domain** table so the numbers split out per domain — useful once you're studying more than one.

- One row per domain (reviews · last 7 · success% · current streak), sorted by volume; legacy entries logged before reviews carried a domain tag bucket under "untagged". The table only appears when more than one domain has reviews.
- Pure `reviewStatsByDomain(log, today)` in `js/dashboard.js` groups the log by `r.domain` and reuses `reviewStats` per group; `statsPanelHTML` renders it with domain display names threaded from `app.js`'s `domainLabelsMap()`; `.stats-domain-table` styling.
- **Harness:** extended `scripts/verify-review-stats.mjs` (31 → 39, RS8): one row per domain + untagged bucket, volume sort, per-domain success/streak, totals reconcile with the overall, empty ⇒ no rows, determinism.
- **Verification:** suite **2940 → 2948 checks** (31 harnesses; +8), green.

---

## Phase S26 — Recall-trend sparkline

**2026-06-06**

The review-stats panel gains a **weekly recall-trend line** — your success rate (grade ≥ 2) over the last 12 weeks — so "am I actually getting better?" has a picture, not just a single all-time number.

- Each week is a point; consecutive weeks join into a line and weeks with no graded reviews are left as gaps (not plotted as zero, which would lie); a gold dashed line marks the overall rate, with 50/75/100% gridlines. Oldest week on the left, this week on the right.
- Pure `retentionTrend(log, today, weeks = 12)` in `js/dashboard.js` (weekly bins, each `{ graded, success, rate|null }`, plus `overallRate`/`totalGraded`) + an internal `retentionTrendSVG`; rendered inside the stats panel only when there are graded reviews.
- **Harness:** extended `scripts/verify-review-stats.mjs` (21 → 31, RS7): bin count + ordering, empty ⇒ all-null, correct per-week rates, empty-week gaps, overall = Σsuccess/Σgraded, out-of-window exclusion, ungraded/future ignored, determinism.
- **Verification:** suite **2930 → 2940 checks** (31 harnesses; +10), green.

---

## Phase S25 — Keyboard navigation in the search overlay

**2026-06-06**

The `/` global-search overlay is now fully keyboard-drivable: **↑/↓** move a highlighted result and **Enter** opens it — all without leaving the input.

- The first hit is highlighted on each query change; ↑/↓ move the highlight (clamped at the ends) and scroll it into view; Enter opens the highlighted card; moving the mouse over a result also makes it active, so pointer and keyboard stay in sync. The footer hint now reads "↑/↓ to move · Enter to open · Esc to close".
- Pure `moveActiveIndex(current, delta, count)` in `js/card-search.js` (clamp, no wrap, `-1` when empty) + an `activeIndex` parameter on `searchResultsHTML` (`.search-result-active` + `aria-selected` + `data-search-index`); `renderSearch` in `app.js` tracks/repaints the active index; `.search-result-active` styling.
- **Harness:** extended `scripts/verify-card-search.mjs` (33 → 40, CS7): `moveActiveIndex` clamping + empty/single-result edge cases, and the active-row rendering.
- **Verification:** suite **2923 → 2930 checks** (31 harnesses; +7), green.

---

## Phase S24 — Review stats + streak

**2026-06-05**

A read-only Map-dashboard panel that surfaces review **habit** and **quality** across all domains — the motivational complement to the activity heatmap.

- A **current / longest daily streak** headline (the current streak carries through an as-yet-unreviewed today, so it only breaks on a genuinely missed day), a row of tiles (reviews today / last 7 / last 30 / total / active days / **success rate**), and an **Again·Hard·Good·Easy** grade-distribution bar with a legend. Success rate = fraction of graded reviews recalled (grade ≥ 2).
- Pure `reviewStats(log, today)` in `js/dashboard.js` (totals, grade counts, success rate, current/longest streak via a consecutive-day walk, rolling 7/30-day windows that exclude future-dated entries) + an internal `statsPanelHTML`; a new `dashboard-stats` section before the heatmap; `.stats-*` / `.grade-*` styling.
- **Harness:** new `scripts/verify-review-stats.mjs` (21 checks): empty/robust handling, totals + grade distribution + success rate, current streak (consecutive run, yesterday carry-over, gap break, stale → 0, same-day dedup), longest streak (historical run / isolated day / all-consecutive), rolling windows (7/30 boundaries, future excluded), and determinism. The dashboard render test now also asserts the stats panel is present.
- **Verification:** suite **2900 → 2923 checks** (**30 → 31 harnesses**; +21 stats, +2 render), green.

---

## Phase S23 — Combined cross-domain review

**2026-06-05**

An opt-in review mode (Settings → Review → **"Review across all domains"**) that mixes due cards from *every* domain into one queue, so you can clear all of today's reviews in a single pass instead of switching domains.

- Off by default. When on (and more than one domain is loaded), the Review queue pulls due cards across domains and each card shows a small **domain badge** + its source. Cards stay scheduled and stored per-domain: every queue card is tagged with its `_domain`, `onRate` writes the update back to that card's own domain store, and transient `_`-prefixed fields are stripped before persisting — so the combined-review tags never leak into stored state. Toggling the setting rebuilds the queue immediately, and the "due today" meter reflects the combined count.
- Pure helpers in `js/storage.js`: `getDueCardsAllDomains` (tagged copies, no mutation of state) and `stripTransientFields`. `crossDomain: false` added to the review defaults. Wiring in `app.js` (`buildSession`/`tagCardForReview`, domain-aware `onRate`, live rebuild on toggle), the checkbox in `settings.js`, the source/domain badge in `review.js`, and `.card-domain-badge` styling.
- **Harness:** new `scripts/verify-cross-domain.mjs` (16 checks): `getDueCardsAllDomains` (gathers across domains, excludes future/unscheduled, `_domain` tagging, count = sum of per-domain due), purity (no mutation, fresh copies, empty-state safety), `stripTransientFields` (drops `_`-fields, keeps real ones, no mutation, null-safe), and the `review.crossDomain` setting (default false, merge preserves a stored true / fills when absent / coexists with the scheduler choice).
- **Verification:** suite **2884 → 2900 checks** (**29 → 30 harnesses**; +16), green.

---

## Phase S22 — Print / save-as-PDF a module

**2026-06-04**

A **Print** button on any source detail turns the on-screen module into a clean, chrome-free document — print it, or "save as PDF" for a handout/annotation copy.

- Browsers print from the live DOM, so the feature is a print stylesheet plus two small pure helpers. The `@media print` block recolours the theme variables to ink-on-white, hides every bit of app chrome (topbar, tabs, actions, language toggle, the back / Ask-AI / audio / schedule buttons, the simulator controls + footer, overlays), prints only the active view, reveals a print-only header, force-expands collapsed `<details>` (author cards), keeps sections/figures from splitting across pages, and sets an `@page` margin. `onPrintModule` sets `document.title` so the PDF is named "Lattice — <source>", calls `window.print()`, and restores the title on `afterprint`.
- New pure `js/print.js`: `printDocTitle` (the PDF filename) and `printHeaderHTML` (title + author·year·type + a "Printed from Lattice · date" line, HTML-escaped, date passed in). `library.js` injects the header + a `print-hide` Print button and wires it to `onPrintModule`; `app.js` implements the handler.
- **Harness:** new `scripts/verify-print.mjs` (30 checks): `printDocTitle` (title / id-fallback / generic), `printHeaderHTML` (block, metadata line, provenance + date slice, ID localisation, empty item, HTML-escaping), the `@media print` rules (screen-hide `.print-only`, white/ink recolour, chrome + affordance + overlay hiding, print-only reveal + `<details>` expansion, active-view-only, break-inside avoidance, `@page` margin), and the end-to-end wiring in both `library.js` and `app.js`.
- **Verification:** suite **2854 → 2884 checks** (**28 → 29 harnesses**; +30), green.

---

## Phase S21 — Global card search across domains

**2026-06-04**

A `/`-triggered (or 🔍-button) overlay that searches **every card in every loaded domain** at once — the first cross-domain affordance, since the Library and Map are scoped to the active domain. Type a query, get a ranked list, click a hit to land on its source in the Library (switching domains if needed).

- Ranked AND-search: every term must appear (front + back + source title); score weights front > title > back with a contiguous-phrase bonus; deterministic tie-break; capped at 40. Matched terms are highlighted with **HTML-safe `<mark>`** (escape-then-mark, so a card's own text can never inject markup), and cloze markup is stripped from the snippet.
- New pure `js/card-search.js`: `stripCloze`, `highlightTerms`, `collectAllCards`, `searchCards`, `searchOverlayHTML`, `searchResultsHTML`. Wired in `app.js` (`renderSearch` does a live, focus-preserving results update; `onSearchGo` activates the target domain then opens the item); `#search-root` + a 🔍 topbar button in `index.html`; `/` added to the shortcut registry, with Esc-close and modal key-swallow in `handleKeyboard`; `.search-*` styling.
- **Harness:** new `scripts/verify-card-search.mjs` (33 checks): cloze stripping, highlighting (case-insensitive, multi-term, HTML-escaping / no tag injection), cross-domain collection (flatten + title attach + fallback), ranked AND-search (find, front-beats-title-only, AND semantics, no-match, limit, determinism, min length), result rendering (hints, per-result jump target, count, domain label, highlight, snippet escaping), and the overlay (input, preserved value, ID localisation). `verify-shortcuts.mjs` now also asserts `/` is handled in `app.js`.
- **Verification:** suite **2820 → 2854 checks** (**27 → 28 harnesses**; +33 search, +1 shortcuts), green.

---

## Phase S20 — Scheduler backtest: FSRS vs SM-2 on your own recall

**2026-06-04**

A read-only Map-dashboard panel that turns the FSRS-vs-SM-2 question into an empirical one answered with **your own data**: it replays every card's real review history through both engines and scores how well each *predicted* your recall.

- For each card, after the first review (which only initialises state), it forms a predicted recall probability R at the review's elapsed interval and compares it to the outcome (grade ≥ 2 = recalled). Both engines are scored by **log-loss** (the verdict metric — a proper scoring rule), **Brier**, and 0.5-threshold **accuracy**. FSRS uses its native retrievability, replaying stability/difficulty exactly as the optimiser does and honouring trained weights; SM-2 — which has no native retention curve — uses the standard exponential proxy R(t) = requestRetention^(t/interval). The panel is explicit that the SM-2 side is a directional proxy, not a literal claim.
- Below 20 predictions it shows a "log N more reviews" hint; at/above it shows a two-row comparison (winner highlighted) and a one-line verdict ("FSRS predicted your recall better — lower log-loss by …").
- New pure `js/backtest.js`: `gradeToQuality` (inverse of `qualityToGrade`, preserving the lapse boundary), `scorePredictions`, and `backtestEngines` (reuses `groupReviews` from `fsrs-optimize.js`; equal prediction counts per engine by construction). Rendered over the **full cross-domain** review log; `.backtest-*` styling.
- **Harness:** new `scripts/verify-backtest.mjs` (29 checks): `gradeToQuality` boundary, `scorePredictions` (confident-correct → ~0 loss, confident-wrong → large, R=0.5 → ln2 / Brier 0.25), insufficient-data gating, structure (equal n, n = reviews − cards, metric ranges, winner/margin consistency), determinism, the trained-weights flag, and a **synthetic FSRS-generated log on which FSRS scores no worse than the SM-2 proxy** — the backtest analogue of the optimiser's synthetic-recovery test. The dashboard render test (whatif W9) now also asserts the panel is present.
- **Verification:** suite **2789 → 2820 checks** (**26 → 27 harnesses**; +29 backtest, +2 render), green.

---

## Phase S19 — SVG → PNG export of any simulator

**2026-06-04**

Every simulator gains a **Save PNG** button — one click rasterizes its live SVG to a downloadable PNG for slides, notes, or reports. Because it lives in the shared viz-container chrome, all **13** `viz.js` simulators get it at once.

- The catch: simulator colours are CSS variables (`fill="var(--gold)"`, …) that resolve on the page but disappear when an SVG is rasterized off-page in isolation. So the export first makes the SVG **self-contained** — it scans the markup for the `var(--…)` names actually used, resolves them against the live computed style, injects a `<style>` re-declaring exactly those on the `<svg>` scope, sets explicit (2× supersampled) pixel dimensions and an `xmlns` — then paints it onto a canvas over an opaque backdrop and downloads `canvas.toBlob`.
- New `js/viz-export.js`: a **pure, unit-tested core** (`collectCssVarNames`, `inlineSvgVars`, `svgExportFilename`) plus browser-only `resolveCssVars` / `exportSvgToPng` (no-throw — returns `false` on any failure, so a click never explodes). Wired into `renderVisualization`; `.viz-export-btn` styling + footer gap.
- **Harness:** new `scripts/verify-svg-export.mjs` (33 checks): var-name collection (distinct, first-appearance, whitespace-tolerant), `inlineSvgVars` (used-only declarations, width/height replacement incl. stripping `width="100%"`, xmlns add/no-dup, content preservation), `svgExportFilename` (sanitization / fallback / ID-lang suffix), browser-fn presence + node-safety, and an **integration pass over a real rendered OrderBookSim SVG** — every referenced variable ends up declared in the assembled, self-contained export string.
- **Verification:** suite **2756 → 2789 checks** (**25 → 26 harnesses**; +33), green.

---

## Phase S18 — Multi-select card filtering in the Library

**2026-06-04**

The Library source list gains a **two-facet, multi-select filter** — chips for **Status** (card-state) and **Type** (item type) above the phase list.

- An item matches if it holds **≥1 card in any selected state** *and* its **type is among the selected types**. Selections OR within a facet and AND across facets; an empty facet imposes no constraint. Only card-states that actually occur get a chip (no dead chips), and the Type facet only appears when more than one type is present.
- Under an active filter the phase list auto-expands so matches are visible, empty phases drop out, and the header switches to "Showing X of Y sources". An empty result still renders the chip bar plus a **Clear** affordance, so you can never filter yourself into a dead end.
- Pure, engine-aware functions in `js/library.js`: `availableStates`, `availableTypes`, `filterIsActive`, `itemMatchesFilter`, `applyCardFilter` (`cardState` drives the status facet, so it respects SM-2 vs FSRS). State + handlers (`App.libraryFilter`, `onCardFilterToggle`, `onCardFilterClear`) in `app.js`, reset on domain switch alongside the system-type filter; `.library-filter` styling.
- **Harness:** new `scripts/verify-library-filter.mjs` (25 checks): facet derivation (distinct/sorted types, present-only states in canonical order), `filterIsActive`, the type and status facets (incl. OR-within), AND-across-facets, empty-facet = no constraint, `applyCardFilter` (inactive → all, combinations, no-match → empty), and a stub-DOM render (chip bar present, mastered chip active, "Showing 1 of 3", matching item shown / non-matching hidden, empty-result still shows the chip bar + clear).
- **Verification:** suite **2731 → 2756 checks** (**24 → 25 harnesses**; +25), green.

---

## Phase S17 — Spaced-repetition what-if projection

**2026-06-04**

An interactive panel in the Map dashboard that projects one **fresh card's interval trajectory** forward under a chosen rating pattern — **SM-2 vs FSRS side by side**. Answers the question every SRS user eventually asks: *if I always rate this Good (or Easy, or scrape a Hard pass), how fast do my intervals actually grow — and how differently do the two engines treat me?*

- Review # on x, next interval on a **log scale** (reference lines at 1d / 1w / 1mo / 3mo / 1y; a lapse is a rose ✗), SM-2 (azul) and FSRS (gold) overlaid. Controls: rating pattern (Always Good / Always Easy / Always Hard-pass / Good-Hard alternating / All-Good-with-one-lapse), number of reviews, and FSRS target retention. The readout reports each engine's final interval, total calendar span, and the review at which the card reaches three-week mastery.
- **Faithful, not a mock:** the projection drives the real `schedule()` facade and reviews exactly on each due date, so both curves are the genuine schedulers — you can watch FSRS's curve tighten as you raise target retention, and watch a single lapse collapse SM-2 back to a 1-day interval (reps reset) while FSRS only dents stability.
- Pure functions in `js/dashboard.js`: `whatIfPattern`, `whatIfTrajectory`, `whatIfSummary` (plus internal `whatIfSVG` + `wireWhatIf`); panel before the prerequisite map; `.whatif-controls` styling.
- **Harness:** new `scripts/verify-whatif-sim.mjs` (45 checks): preset shapes, the SM-2 1→6→15 ladder + cumulative-day math + mastery-at-review-3, FSRS positivity / strictly-growing stability / difficulty bounds, lapse reset on both engines, target-retention monotonicity (higher retention ⇒ shorter intervals), Easy ≥ Good, summary stats, determinism, and a stub-DOM render of the whole dashboard (EN + ID) confirming the chart draws an `<svg>` with no NaN and a populated readout.
- **Verification:** suite **2686 → 2731 checks** (**23 → 24 harnesses**; +45), green. Simulator count stays **13** — this is a dashboard analytic, not a `viz.js` component.

---

## Phase S16 — Interactive order-book ladder simulator

**2026-06-04**

The 13th simulator — and **O'Hara 1995's first** (its intuition section had no viz). A live **limit-order-book ladder**: the microstructure object itself, made tangible.

- Resting bid (green) / ask (red) depth stacked at discrete price levels, the touch highlighted, mid drawn as a gold dashed line. **Market BUY** walks *up* the asks and **Market SELL** walks *down* the bids, consuming one level at a time and filling at progressively worse prices — the readout reports the new touch/spread/mid plus last fill quantity, average price, and **slippage**. A bigger order digs deeper and slips more (convex impact); **Replenish** rebuilds the book.
- This is the mechanism beneath every impact model in the domain: **Kyle's λ is the slope of this walk; CKS's depth is its inverse.** A thin book ⇒ steep λ; a deep book absorbs flow with little drift. The MM quoting the spread is exactly the agent posting this depth against adverse selection.
- Pure model in `js/viz.js`: `makeBook` (seeded depth profile), `bestAsk`/`bestBid`/`bookMid`/`bookSpread`, and non-mutating `marketBuy`/`marketSell` returning `{book, filled, avgPrice, slippage}`. `OrderBookSim` component + a `visualization` block on the `ohara-1995` intuition section.
- **Harness:** new `scripts/verify-orderbook-sim.mjs` (31 checks): book construction/price-ordering, touch/mid/spread, buy-walks-up & sell-walks-down with slippage identities and touch movement, purity (original book unmutated), convex impact (bigger ⇒ ≥ slippage), depth conservation (fill capped at total depth; drained side ⇒ null touch/mid/spread), determinism, and a Proxy-stub render smoke-test (EN + ID, including the reset path).
- **Verification:** suite **2649 → 2686 checks** (**22 → 23 harnesses**; +31 order-book, +6 content-schema from the new viz block), green. Simulators **12 → 13**.

---

## Phase S15 — Per-domain review-activity heatmap

**2026-06-04**

The Map dashboard gains a **GitHub-contributions-style heatmap** of review activity — one cell per day over the last 16 weeks, darker = more reviews — filtered to the current domain.

- Review-log entries now carry a `domain` tag (added in `app.onRate`); the heatmap filters by it, while legacy entries (logged before this phase, no domain) still count for every domain.
- Pure `reviewHeatmap(log, today, weeks, domainId)` in `js/dashboard.js` (bins by date into a chronological `weeks×7` grid with max/total); `heatmapSVG` renders quartile-bucketed gold cells (with per-cell date/count `<title>` tooltips) + a less→more legend.
- **Harness:** extended `scripts/verify-dashboard.mjs` (42 → 48 checks, D9): grid size = weeks×7, today is the last cell, same-day reviews accumulate, the domain filter (current-domain + legacy counted, other-domain excluded), out-of-window exclusion, and the no-filter total. Render smoke-tested (heatmap + legend cells, no NaN).
- **Verification:** suite **2643 → 2649 checks** (22 harnesses), green.

This completes the five "out of the box" directions (dark theme, `?` overlay, deep OFI, execution animation, review heatmap) — the platform-depth track now spans S1–S15.

---

## Phase S14 — Almgren-Chriss execution animation

**2026-06-04**

A 12th simulator and Almgren-Chriss's second viz (in *applications*): an animated **play-through** of the optimal liquidation, so the schedule isn't just a static curve but something you watch execute.

- **Play** drains the position interval by interval along the closed-form trajectory — gold bars executed, faint blue pending, a playhead marking the current step — with a live readout of shares sold, % done, remaining inventory, and the trade this interval. A **step scrubber** lets you inspect any moment, and the urgency κ slider reshapes the schedule (front-loaded vs flat TWAP) in place.
- Pure `executionStep(x, k)` (state at step k: remaining / traded-this-interval / cumulative sold / fraction done) over the existing `almgrenTrajectory`; the play/scrub loop is a guarded `setInterval`.
- **Harness** `scripts/verify-almgren-exec-sim.mjs` (9 checks): boundary states (step 0 = full/none-sold, step N = empty/all-sold, out-of-range clamps); cumulative-sold monotone + `traded[k] = x[k-1]−x[k]` + `fracDone` identity; urgency front-loading (κ>0 sells >50% in the first half; κ=0 ≈ 50% at half-way; bigger first-interval trade).
- **Verification:** suite **21 → 22 harnesses**, **2628 → 2643 checks**, green. Simulators 11 → 12.

---

## Phase S13 — Deep (multi-level) OFI simulator

**2026-06-04**

An 11th simulator and CKS's second viz (in its *applications* section): the modern **deep-OFI** extension of the base order-flow-imbalance law.

- The base law regresses ΔP on imbalance at the *best* quotes; later work (Cont et al.) aggregates a depth-weighted OFI across the first L book levels. `DeepOfiSim` shows R² climbing from the best-level value toward a ceiling as you include more levels — gold bar = current L. Sliders for levels-included L, depth-weighting decay, and noise.
- Pure `deepOFI` (reuses `olsFit`): weights decay by `decay` per level; ΔP depends on all Lmax levels + noise; R²(L) is the fit using only the first L levels.
- **Harness** `scripts/verify-deepofi-sim.mjs` (9 checks): structure + decaying weights; R² monotone non-decreasing in L and deep > best-level; the depth-weighting comparative static (steeper weighting ⇒ bigger L1→Lmax climb, shallow ⇒ best-level dominates); noise lowers R²; determinism.
- **Verification:** suite **20 → 21 harnesses**, **2613 → 2628 checks**, green. Simulators 10 → 11.

---

## Phase S12 — Keyboard-shortcut help overlay (`?`)

**2026-06-04**

Press **`?`** anywhere to bring up a shortcut cheat-sheet; Esc (or `?` again) closes it.

- **`js/shortcuts.js`** is the single source of truth — a grouped, bilingual registry (`SHORTCUTS`) + a pure `shortcutsOverlayHTML(lang)` renderer + `advertisedKeys()`. The README table and the in-app overlay both derive from it.
- `js/app.js` `handleKeyboard` opens the overlay on `?`, swallows other keys while it's open (Esc closes, handled at Esc-priority), and `renderHelp()` mounts it into `#help-root`. Styled `.help-grid` (responsive to one column on mobile).
- **Harness** `scripts/verify-shortcuts.mjs` (28 checks) — the integrity guarantee: **every key the registry advertises is actually handled in app.js** (R/L/G/M/D, Space, 0–5, `,`, `?`, Esc — matched against the real handler patterns), the registry shape is bilingual, the overlay renders every group/label with `<kbd>` chips, and it localises to ID.
- **Verification:** suite **19 → 20 harnesses**, **2585 → 2613 checks**, green.

---

## Phase S11 — Dark theme (the dead `appearance.theme` setting goes live)

**2026-06-04**

`settings.appearance.theme` existed since Phase 0 but was never applied. It now drives a real **dark reader theme** alongside the default sepia.

- **`html[data-theme="dark"]`** in `styles.css` overrides the reader palette (bg/ink/lines), the accents (gold/azul recoloured for contrast on dark), and the chrome — so the whole UI flips coherently, not just the page.
- `defaultSettings` theme is now `'sepia'` (the warm default); `AVAILABLE_THEMES = ['sepia','dark']`. `js/app.js` applies `document.documentElement.dataset.theme` on every render (validated, fallback sepia), and a tiny **no-FOUC** `<head>` script reads the saved theme from `lattice-v3` before first paint so there's no flash. Settings → **Appearance** gains a theme select (`data-setting="appearance.theme"`, routed through the existing patch path → instant + persisted).
- **Harness** `scripts/verify-theme.mjs` (15 checks): config defaults + `mergeWithDefaults` preserving a stored dark theme; the CSS dark block overriding bg/ink/accents/chrome; the no-FOUC guard + app applying `data-theme`; the Settings control (sepia+dark options, default sepia, `applySettingPatch` wiring).
- **Verification:** suite **18 → 19 harnesses**, **2570 → 2585 checks**, green.

---

## Phase S10 — PWA install prompt + update toast

**2026-06-04**

The PWA now has proper lifecycle UX, and service-worker registration moves into a dedicated `js/pwa.js`.

- **Install prompt:** captures `beforeinstallprompt` (preventing the default mini-infobar), stashes it, and shows a small **Install** toast that calls `prompt()` on click; hidden on `appinstalled`.
- **Update toast:** when the SW reaches `installed` while a controller already exists (or `reg.waiting` is present), a **"New version available — Reload"** toast appears; clicking it posts `{type:'SKIP_WAITING'}` to the waiting worker, and a one-shot `controllerchange` handler reloads into the new version. `sw.js` gained the matching `message` → `skipWaiting()` handler.
- Toast markup is a pure, exported, bilingual `pwaToastHTML(kind, lang)`; the event wiring self-initialises on import (guarded by a `window` check, so Node import is a no-op). The index.html inline SW registration is replaced by `<script type="module" src="js/pwa.js">`. Toast styled (`.pwa-toast`, fixed bottom-centre).
- **Harness:** extended `scripts/verify-pwa.mjs` (31 → 41 checks, P6): index loads `js/pwa.js`; pwa.js registers the SW (guarded), captures install/appinstalled, detects updates, posts SKIP_WAITING + reloads on controllerchange, self-init guarded; `sw.js` honours SKIP_WAITING; the install/update/dismiss toast markup (+ ID localisation).
- **Verification:** suite **2560 → 2570 checks** (18 harnesses), green.

This completes the four net-new directions (propagator sim, dashboard forecast, review-log CSV, PWA install/update). The platform-depth track now spans S1–S10.

---

## Phase S9 — Review-log CSV export

**2026-06-04**

The captured review history (Phase S5's `state.reviewLog`) is now exportable as **CSV** — Settings → Data → *Export review log (CSV)* — for external analysis, spreadsheets, or third-party FSRS tooling.

- Pure `reviewLogToCSV(log)` in `js/storage.js` (RFC-4180 quoting: header `cardId,date,grade,elapsed`; empty log ⇒ header only) + `downloadReviewLogCSV(state)` (blob download, mirrors `downloadExport`). Wired to a Settings button (`onExportReviewCSV`, with an empty-log guard).
- **Harness** `scripts/verify-review-log.mjs` (12 checks): `appendReview` append/order/immutability + cap (keeps the most recent) — previously untested — and `reviewLogToCSV` (header-only on empty/non-array, field order, comma/quote escaping). Settings render confirmed to include the button.
- **Verification:** suite **17 → 18 harnesses**, **2548 → 2560 checks**, green.

---

## Phase S8 — Dashboard review-forecast + FSRS retention projection

**2026-06-04**

The Map dashboard gains a **forecast panel**: a 21-day bar chart of how many cards come due each day (overdue cards counted on day 0 / "now"), and — under FSRS — an overlaid gold line projecting your **average retention decay if you stopped reviewing** (computed from each card's stability). This is the FSRS analytics the S3 note deferred.

- Pure functions added to `js/dashboard.js`: `reviewForecast(cards, today, horizon)` (workload bins, engine-agnostic, uses `nextReview`) and `retentionForecastCurve(cards, today, horizon, engine)` (FSRS-only; `retrievability(elapsed + d, stability)` averaged per future day; null for SM-2 / no-data). `forecastSVG` renders bars + the optional retention line.
- **Harness:** extended `scripts/verify-dashboard.mjs` (33 → 42 checks): forecast binning (overdue + due-today on day 0, cards land on their due-day bin, beyond-horizon + unscheduled excluded) and the retention curve (null for SM-2 and for no-FSRS-data; monotone decay; all values in (0,1]). Render smoke-tested both engines (FSRS shows the retention line).
- **Verification:** suite **2539 → 2548 checks** (17 harnesses, unchanged — extends the existing dashboard harness), green.

---

## Phase S7 — Bouchaud propagator (transient-impact) simulator

**2026-06-04**

A 10th simulator — and the first module to carry **two** visualizations. Bouchaud's *formalization* section now mounts a `PropagatorSim` alongside the worked-example's √-impact sim, covering the module's *other* headline result: transient impact.

- Price is the sum of past trades, each with a decaying propagator G(ℓ) ~ (1+ℓ)^(−β). A metaorder of N same-sign child trades traces the canonical **rise → peak → relaxation** path: concave growth during execution, a peak at the last child, then decay as old impacts fade. Smaller β = longer memory = slower relaxation, more of the peak retained. Sliders for β and metaorder length N.
- Pure `propagatorImpact` exported from `js/viz.js`. The renderer already mounts a visualization on any section that declares one, and the schema validator (S6) checks every section's viz — so the second sim needed no framework change.
- **Harness** `scripts/verify-propagator-sim.mjs` (17 checks): peak at the last child trade; concave rise (shrinking increments); monotone relaxation after the peak; transient decay (permanent < peak, residual > 0); β comparative static (smaller β ⇒ higher peak *and* slower relaxation); G(0)=1; determinism. Render smoke-tested (EN+ID).
- **Verification:** suite **16 → 17 harnesses**, **2516 → 2539 checks**, green. Simulators 9 → 10.

---

## Phase S6 — Mobile / PWA polish (installable + offline)

**2026-06-04**

Lattice is now an **installable, offline-capable PWA** with a responsive layout — closing the long-standing "desktop-only, mobile not optimized" caveat. Purely additive (no app-logic change).

- **`manifest.json`** — web app manifest (name, standalone display, `./` scope, theme `#1a1614` / background `#f0e6c8`, maskable SVG icon) → installable to a home screen.
- **`icon.svg`** — a lattice-mark app/maskable icon (no binary asset; buildless).
- **`sw.js`** — service worker: precache the app shell at install, then **stale-while-revalidate** every same-origin GET (JS/data modules + vendor cache on first online load, so subsequent visits work fully offline). GET-only + same-origin guard (never touches `api.anthropic.com`); old caches cleaned on activate; `skipWaiting`/`clients.claim`. Registered from index.html, guarded + non-fatal.
- **Responsive CSS** — `@media (max-width: 720px)` (topbar wraps, tabs scroll + keyboard hints hidden, viz controls stack, dashboard tiles reflow, 44px tap targets, wide tables/SVGs scroll) and a `420px` small-phone breakpoint.
- **index.html** — theme-color + apple-mobile metas, manifest + SVG icon + apple-touch-icon links, SW registration.
- **Harness** `scripts/verify-pwa.mjs` (31 checks): manifest validity + required fields; the icon; the SW (versioned cache, install precache, activate cleanup, fetch/respondWith, SWR via cache.put/match, GET + same-origin guard, every precached shell file exists on disk); index.html wiring (manifest link, theme-color, icon, guarded SW registration); and the responsive media queries.
- **Verification:** suite **15 → 16 harnesses**, **2485 → 2516 checks**, green.

---

## Phase S5 — FSRS weight training from your own review history

**2026-06-04**

FSRS can now be **fitted to your actual recall** instead of running on the published default weights — the standard FSRS optimisation, done locally.

- **Review-log capture** (additive to storage): every review appends `{cardId, ts, grade, elapsed}` to a capped (5,000) `state.reviewLog`. Engine-agnostic raw data; backfilled by the v3→v4 scaffolder; no schema bump.
- **Optimiser** `js/fsrs-optimize.js` (pure): replays each card's ordered review sequence under candidate weights, predicts retrievability at each review, and minimises the **log-loss** against actual recall (grade ≥ 2). Coordinate descent over a tractable, well-conditioned subset — initial stabilities w[0..3], growth/decay w[8..10], post-lapse w[11] — holding the rest at defaults. No-ops (returns defaults) under ~50 predictions.
- **Wiring:** trained weights live in `settings.review.fsrsWeights` (null ⇒ defaults) and flow through `scheduler.schedule → fsrsSchedule`; Settings → Review scheduler gains **Optimize from my review history** + **Reset to defaults**, with a status line (trained vs default, review count). `daysBetween` added to util; `appendReview` to storage.
- **Harness** `scripts/verify-fsrs-optimize.mjs` (15 checks): log-loss aggregation (first review is init-only; recall cheaper than lapse), `groupReviews` ordering/filtering, and the core claim — on data **generated from known weights W***, the optimiser drives mean log-loss strictly below the default baseline toward W*'s achievable loss; sparse data is a no-op; weights stay length-17 + finite. End-to-end smoke: trained weights change the scheduled interval; Settings renders the optimise UI.
- **Verification:** suite **14 → 15 harnesses**, **2470 → 2485 checks**, green. Default behaviour unchanged (weights null ⇒ published defaults) until a user opts in.

---

## Phase S2.5 + S2.6 — CKS (OFI) and VPIN simulators (the two deferred empirical sims)

**2026-06-04**

Completes the microstructure simulator set — the two empirical-toxicity sims left optional after S2 now ship, bringing the catalog to **9 simulators** (every microstructure module with a computable empirical/quantitative core now has one).

- **CKS / OFI** (`CksOfiSim` in `cont-kukanov-stoikov-2014`): a two-panel regression — order-flow imbalance → ΔP (tight, high-R², slope β = 1/(2D̄)) beside the same ΔP against trade imbalance (noisy, low-R²). Dragging depth flattens the OFI line; the R² gap is the paper's headline. Pure `olsFit` + `simulateOFI`. Harness `verify-cks-sim.mjs` (26 checks): OLS estimator, β = 1/(2D̄) recovered by OLS within 5%, depth comparative static, the OFI-beats-TI R² gap across seeds, noise→R² monotonicity, determinism, worked-example 1/β ≈ 180.
- **VPIN** (`VpinSim` in `easley-lopez-prado-vpin`): per-volume-bucket buy/sell imbalance bars from bulk volume classification (V^B = V·Φ(z)) + a 0–1 toxicity gauge; VPIN = mean |2Φ(z)−1|, rising into the red as flow turns one-sided. Pure `normalCDF` + `vpinFromZ` + `simulateVPIN`. Harness `verify-vpin-sim.mjs` (22 checks): the normal-CDF classifier, VPIN definition/bounds (flat→0, one-sided→1), the module's worked example (z = +1.0/−0.5/+0.2 → VPIN ≈ 0.408), the toxicity comparative static + monotone sweep, determinism.
- Both render smoke-tested (stub host, EN+ID, no NaN).
- **Verification:** suite **12 → 14 harnesses**, **2410 → 2470 checks**, green. Simulators 7 → 9.

---

## Phase S4 — Knowledge-map + progress/retention dashboard

**2026-06-04**

A new **Map** tab (`M`) — a purely-additive, read-only fourth view (`js/dashboard.js`) that answers the long-standing "is there a dashboard?" question and folds in the FSRS retention analytics deferred from S3.

- **Prerequisite curriculum graph** — the catalog's `prereqs` DAG laid out by longest-prereq depth (SVG, no libraries), arrows pointing from a prerequisite to what it unlocks. Each node is coloured by learning state: **mastered / in-progress / available / locked / no-cards**. "Locked" = a prerequisite isn't mastered yet (a card-less prereq doesn't block). Click a node to open it in the Library.
- **Progress + retention tiles** — Due today / Mastered / In-progress / Not-started, plus an **engine-aware headline stat**: average retention (FSRS) or average EF (SM-2). Per-phase mastery bars.
- **Pure functions** (`shortLabel`, `computeLevels`, `itemProgress`, `buildGraph`, `dashboardSummary`) exported for testing; cycle/missing-id robust.
- **Wiring** — index.html tab + `#map-view`; app.js keyboard `M`, render dispatch, and a node-click → Library handler.
- **Harness** `scripts/verify-dashboard.mjs` (33 checks): label formatting; DAG levels on the real microstructure catalog + cycle/missing-id robustness; the five progress states; graph availability (locked vs available, card-less prereq doesn't block); and the engine-aware summary (SM-2 EF vs FSRS retention %). Render smoke-tested (stub host, both engines, 14 nodes, no NaN).
- **Verification:** suite **11 → 12 harnesses**, **2377 → 2410 checks**, green.

This completes the S1–S4 platform-depth track (card-coverage lock → 4 simulators → FSRS engine → knowledge-map/dashboard).

---

## Phase S3 — Optional FSRS-4.5 scheduler (SM-2 stays the default)

**2026-06-04**

The review engine is now **pluggable**. SM-2 remains the default and is untouched; a modern **FSRS-4.5** scheduler is selectable via **Settings → Review scheduler**, and the switch is fully reversible and non-destructive — both engines keep every SM-2 field on each card, so toggling never loses state.

- **`js/fsrs.js`** — faithful FSRS-4.5 (17 published default weights). Each card is modelled by *stability* S and *difficulty* D; the next interval is chosen so predicted retrievability hits a target retention (default 90%). The 0–5 quality buttons map to FSRS grades (0–2→Again, 3→Hard, 4→Good, 5→Easy). Pure functions exported for testing.
- **`js/scheduler.js`** — a thin facade routing `schedule` / `cardState` / `isMastered` to SM-2 or FSRS per `settings.review.scheduler`.
- **Storage v3 → v4** — `schemaVersion` 3→4 (the localStorage *key* stays `lattice-v3`). `migrateV3ToV4` is **additive only**: bumps the version and backfills `settings.review`; **no card data changes** (FSRS state is created lazily on first FSRS review). `load()` now forward-migrates a stored v3 state instead of ever falling through to a data-wipe; `importJSON` accepts v4/v3/v1.
- **Wiring** — review.js (`rate` routes via the facade with the active engine + retention), app.js (mastered count + `onRate`), library.js (card classification + an FSRS S/D metric line). Settings gains a Review-scheduler select.
- **Harness** `scripts/verify-fsrs.mjs` (66 checks): FSRS defining properties (R(S,S)=0.9; interval≈S at r=0.9; grade-ordered stability; mean-reverting clamped difficulty; lapse shrinks stability; quality→grade map), the scheduler-integration contract, card-state/mastery, retention average, and — critically — the **non-destructive v3→v4 migration** (card preserved byte-for-byte, SM-2 history intact, settings backfilled, apiKey/theme preserved, other domains scaffolded).
- **Verification:** suite **10 → 11 harnesses**, **2311 → 2377 checks**, green. The default engine is unchanged (`sm2`), so existing review state + behaviour are untouched until a user opts in.
- **Known scope:** the review header still shows the SM-2 "EF avg" stat; a proper FSRS retention/forecast dashboard lands in S4.

---

## Phase S2.4 — Bouchaud et al. (2018) square-root impact simulator

**2026-06-04**

A 7th simulator, for the square-root law of market impact — completing the four priority S2 simulators (Kyle, Almgren-Chriss, Avellaneda-Stoikov, Bouchaud). The `bouchaud-bonart-donier-gould-2018` worked-example now carries a `SqrtImpactSim` visualization: the concave law **I = Yσ√(Q/V)** (blue) against the linear (Kyle) impact you'd extrapolate from the current order (dashed), with markers at the participation ratio φ and 2φ illustrating the headline **I(2φ)/I(φ) = √2** — doubling the order raises impact by ~41%, not 100%. Sliders for φ = Q/V, prefactor Y, and daily volatility σ.

- **Pure function** `sqrtImpact` (exported from `js/viz.js`).
- **Harness** `scripts/verify-bouchaud-sim.mjs` (25 checks): the module's worked example (Q/V=0.10, σ=2%, Y=0.5 → I≈0.316%); the √-scaling (×2 size → ×√2, ×4 → ×2, ÷4 → ×½); concavity (midpoint above chord; falling marginal impact); dependence only on the participation ratio Q/V (not price level); monotone + linear in Y and σ; the concave-vs-linear contrast (√-law below linear for large orders, above for small, coincident at the calibration point); and the "√2 not 2" doubling fact. Render smoke-tested (stub host, EN+ID).
- **Verification:** suite **9 → 10 harnesses**, **2280 → 2311 checks**, green. Simulators 6 → 7.

Note: CKS (OFI) and VPIN simulators remain optional/not-built — the four priority model-rich simulators are done; those two are more sequential/empirical and lower-yield as interactive viz.

---

## Phase S2.3 — Avellaneda-Stoikov (2008) optimal-quotes simulator

**2026-06-04**

A 6th simulator, for optimal market making. The `stoikov-2008` worked-example now carries an `AvellanedaStoikovSim` visualization: a quote-skew-vs-inventory plot where the gold line is the reservation price **r(q) = s − qγσ²(T−t)**, the blue lines are the bid/ask quoted symmetrically around it, and the dashed line is the mid. Drag inventory q to slide the marker along the skew; raise γ or T−t to tilt the band more steeply; pull T−t→0 to watch the skew flatten and the spread collapse to the microstructure floor (2/γ)ln(1+γ/κ).

- **Pure function** `asQuotes` (exported from `js/viz.js`): reservation price, the two spread pieces, bid/ask.
- **Harness** `scripts/verify-as-sim.mjs` (31 checks): the module's worked example (γσ²(T−t)=0.4, micro term ≈1.291, spread ≈1.691, flat quotes 99.15/100.85); skew direction (long ⇒ r below mid; short ⇒ above) and symmetry; reservation linear in q; spread independent of q; decomposition + symmetry around r; the t→T regime (skew vanishes, spread → micro floor); skew comparative statics (↑ with |q|, γ, σ, time); deep-inventory desperation (ask below mid when very long). Render smoke-tested (stub host, EN+ID).
- **Verification:** suite **8 → 9 harnesses**, **2243 → 2280 checks**, green. Simulators 5 → 6.

---

## Phase S2.2 — Almgren-Chriss (2000) efficient-frontier simulator

**2026-06-04**

A 5th simulator, for optimal execution. The `almgren-chriss-2000` worked-example section now carries an `AlmgrenFrontierSim` two-panel visualization: drag the urgency **κ = √(λσ²/η)** and the **efficient frontier** (top, expected-cost vs variance, convex) and the **holdings trajectory** x(t) = X·sinh(κ(T−t))/sinh(κT) (bottom, against the dashed κ=0 TWAP reference) move together. κ=0 is the straight-line min-cost/max-variance liquidation; raising κ front-loads — lower variance, higher impact — sliding up-left along the frontier. Raising σ stretches the variance axis.

- **Pure functions** (exported from `js/viz.js`): `almgrenKappa`, `almgrenTrajectory`, `almgrenCost` (E = ½γX² + ε Σ|n| + (η/τ)Σn²; V = σ²τ Σ x²), `almgrenFrontier` (sweeps κ).
- **Harness** `scripts/verify-almgren-sim.mjs` (33 checks): trajectory boundaries; the κ→0 linear (TWAP) limit; the module's worked example (κ=0.5, X=100k, T=5, N=5 → x₁≈59,946, x₄≈8,613, n₁≈40,054); monotone liquidation; κ = √(λσ²/η) scaling; the mean-variance trade-off (κ↑ ⇒ V↓, E↑); frontier convexity (dE/dV non-decreasing); front-loading below the TWAP line; the risk-neutral min-cost/max-variance corner. Render smoke-tested (stub host, both languages, no NaN/Infinity).
- **Verification:** suite **7 → 8 harnesses**, **2198 → 2243 checks**, green. Simulators 4 → 5.

---

## Phase S2.1 — Kyle (1985) λ price-impact simulator

**2026-06-03**

First simulator of the depth track (S2) — a 4th interactive viz, for the iconic Kyle's-λ result. The worked-example section of `kyle-1985.js` now carries a `KyleLambdaSim` visualization: the price-impact line **p = p₀ + λy** pivoting as you drag value uncertainty σ₀ = √Σ₀ and noise-trader volume σ_u, with the ±1σ order-flow band, realized-flow dots landing on the line, and a live readout of λ, β, depth, and the Var(p)/Σ₀ invariant.

- **Pure functions** (exported from `js/viz.js` for testability, matching the Acuña/GM/Roll pattern): `kyleEquilibrium({sigma0, sigmaU})` → {λ, β, depth, Σ0, Σ1, revealFrac}; `simulateKyle(...)` → seeded Monte-Carlo of (v, y, p) plus realized regression diagnostics. Equilibrium: λ = √Σ₀/(2σ_u), β = σ_u/√Σ₀ = 1/(2λ), depth = 1/λ, Var(p)/Σ₀ = ½.
- **Harness** `scripts/verify-kyle-sim.mjs` (98 checks): equilibrium identities across a σ₀×σ_u grid; the module's worked example (σ₀=5, σ_u=10 → λ=0.25, β=2, depth=4, Σ₁=12.5); comparative statics (λ↑ in σ₀, λ↓ in σ_u, depth↑ in σ_u); Monte-Carlo invariants (realized slope(p,y)=λ exactly; slope(p,v)≈½; Var(p)/Σ₀≈½) on a 40k-draw seeded run; determinism. Render smoke-tested against a stub host (8.1 KB SVG, no NaN, both languages).
- **Verification:** suite **6 → 7 harnesses**, **2100 → 2198 checks** (+98), green. Simulators 3 → 4.

---

## Phase S1 — SRS card-coverage harness (coverage was already complete)

**2026-06-03**

Set out to fill a *suspected* card-coverage gap. A grep over `seed-cards.js` (pattern matched only the hand-formatted Hasbrouck/O'Hara block) suggested only 2 of 14 microstructure modules had seed cards. **A direct `import` of `SEED_CARDS` showed coverage was already COMPLETE** — 188 microstructure cards across all 14 modules (13-15 each) + 12 Acuña cards in geothermal. So **no cards were authored** (a card-authoring workflow was launched on the false premise, then stopped once the import corrected it). Lesson reinforced: for "does X exist in the data?", import/parse beats grep.

What shipped is the **coverage gate** the suite was missing: `scripts/verify-card-coverage.mjs`. `verify-app-logic` L5 checks card *integrity* but explicitly allows a domain to have zero cards; this harness adds the *coverage* invariant — every finalized (non-DRAFT) microstructure module must carry ≥ 8 seed cards. The geothermal domain is **exempt** (cards are Az-gated / deferred until sign-off), as is any module flagged `AWAITING AZ DOMAIN REVIEW`. Passes 14/14 today, locking the coverage claim the RESUME makes so it can't silently regress.

- **Verification:** suite **5 → 6 harnesses**, **2086 → 2100 checks** (+14 coverage checks), green. No content/card change.

---

## Phase G9-draft — Tester et al. / MIT 2006 (The Future of Geothermal Energy — EGS) — **DRAFT module, awaiting Az domain review** · *completes autonomous geothermal drafting*

**2026-06-03**

Ninth and **final** geothermal DRAFT (option b) — the EGS / frontier item, and the one that closes the "complete all geothermal" run. The 2006 MIT/DOE/INL assessment of **Enhanced (Engineered) Geothermal Systems**: engineer permeability into hot, low-permeability rock by hydraulic stimulation and circulate injected water — *petrothermal* geothermal. Schema-valid, every domain/operational claim **⟦TODO-Az⟧**-flagged; the report's own published figures are attributed to the report.

- **Framing (the key one for Az):** EGS is the engineered **CONTRAST** to Darajat's natural vapour-dominated dry-steam hydrothermal system — **NOT Darajat's category**. The module makes Darajat the contrast (natural field already has heat+fluid+permeability) and flags the danger of conflating the two.
- **Research prep** (committed 3d5d3ae): report INL/EXT-06-11746; chair **Jefferson W. Tester** (MIT → Cornell, living, NAE 2021), 18-member panel. **Verify catch: in-place resource base ~13 MILLION EJ** (the seed's "~13,000 EJ" was REFUTED); recoverable >200,000 EJ (~2,000× US 2005 primary energy ~100 EJ/yr); ~100 GWe US by 2050; ~USD 0.8-1 B / 15 yr R&D.
- **Content** (`geothermal/tester-mit-2006.js`): the petrothermal vs hydrothermal concept (three ingredients — heat/fluid/permeability — nature supplies all three in a hydrothermal field; EGS engineers two); heat-in-place `Q = ρ_r·C_r·V·(T_r − T_0)` (resource base) and recovery factor `Q_rec = R_g·ρ_r·C_r·V_active·(T_r,i − T_r,a)`; thermal drawdown; learning-curve economics; induced seismicity. Worked example: a 1 km³ block at ΔT=150 K → 0.405 EJ in place, ~0.008-0.081 EJ recoverable (R_g 2-20%), scaling to the report's continental figures. 4 self-tests, Group-A citations.
- **Mechanical audit (5 reviewers):** parity intact (one malformed ID word `disitusasiin` → `ditempatkan`); arithmetic independently reconfirmed by node recompute + a programmatic KaTeX brace/`$`-balance check across all 50 math spans (the math reviewer agent stalled twice — an infra issue with that task slot — so the mechanical math check stands as the authoritative arithmetic verification). Fixes: the recurring self-test classes again — selfTest[0] narrowed to headline-numbers recall + the "resource is not the constraint" conclusion (de-duplicating it from practice Q4's R&D-gating answer); selfTest[3]'s "danger of conflating EGS with a hydrothermal field" grounded by adding the conflation-risk sentence to the applications body where its sectionId points. Plus 3 "landmark" superlatives + 1 "credible" endorsement hedged, and a living-author past-perfect ("had carried" → "carried … and has worked") fixed. Citations clean (the *Heat Mining* author-order is already TODO-Az-hedged).
- **Seed cards deferred**. content-schema 23 → 24 modules (1709 → 1781 checks); suite total **2086 checks**, green. **9th and final draft**.

Geothermal: 1 rich + **9 drafts** + 0 catalog-only. **All 10 geothermal catalog items now have content modules**, and all 9 non-Acuña items have both a research-prep factsheet and an audited DRAFT — autonomous geothermal drafting is complete. Remaining geothermal work is the owner-only validation track (Az clears the ⟦TODO-Az⟧ flags and signs off the 9 drafts).

---

## Phase G8-draft — Arnórsson (ed.) 2000 (Isotopic and Chemical Techniques in Geothermal Exploration, Development and Use) — **DRAFT module, awaiting Az domain review**

**2026-06-02**

Eighth geothermal DRAFT (option b) — the **IAEA isotope-and-geochemistry field manual**, the practical companion that extends the Henley-Truesdell-Barton geochemistry root with **stable-isotope tracers** (δD/δ¹⁸O), the **tritium** age clock, and standardized sampling/QA. Schema-valid, every domain claim **⟦TODO-Az⟧**-flagged. Dry-steam framing carried throughout: a vapour-dominated field samples steam/condensate/gas (not a deep liquid), so the deep-fluid reconstruction and gas geochemistry are the field-relevant side.

- **Research prep** (committed d2e81b6): IAEA STI/PUB/1086 (x + 351 pp, 2000); editor **Stefán Arnórsson** (Univ. Iceland, WATCH speciation program; life status unconfirmed → neutral tense), co-principal author **Franco D'Amore** (verifier corrected the seed's "Ármannsson"). GMWL via Craig 1961 (Science 133(3465), 1702-1703).
- **Content** (`geothermal/arnorsson-2000.js`): δ-notation on VSMOW; Global Meteoric Water Line δD = 8·δ¹⁸O + 10; the **oxygen-18 shift** (δD conserved through water-rock exchange because rock has little hydrogen, so it fingerprints recharge while δ¹⁸O records reservoir processing); altitude effect; tritium decay (half-life 12.32 yr); wet-steam deep-fluid reconstruction. Worked example δD=−60/δ¹⁸O=−5 → meteoric δ¹⁸O=−8.75, shift +3.75 ‰. 4 self-tests, Group-A citations.
- **Mechanical audit (5 reviewers):** parity CLEAN, all isotope arithmetic reconfirmed (−8.75/+3.75; practice −11.25/+4.25; ~1 km elevation). Fixes: the recurring two classes again — three self-tests re-aimed (formalization → δ-notation/VSMOW meaning, removing an intuition-only "below-left" clause and an unsupported kinetic-evaporation cause; worked-example → interpret the +3.75/−8.75 result + the two QA checks instead of re-deriving practice-1's arithmetic; applications → the life-cycle exploration-vs-monitoring role instead of a dry-steam reconstruction assertion that was un-flagged and whose support lived in formalization) — plus tritium half-life standardized to 12.32 yr throughout, 2 bio superlatives hedged, and a keyWorks "&"→"and" connector.
- **Seed cards deferred**. content-schema 22 → 23 modules (1638 → 1709 checks); suite total **2014 checks**, green. **8th draft**.

Geothermal: 1 rich + **8 drafts** + 1 catalog-only (Tester-MIT). Only the EGS frontier item (Tester-MIT 2006) remains — its research-prep factsheet is also committed this phase.

---

## Phase G7-draft — Henley, Truesdell & Barton 1984 (Fluid-Mineral Equilibria in Hydrothermal Systems) — **DRAFT module, awaiting Az domain review**

**2026-06-02**

Seventh geothermal DRAFT (option b). The **hydrothermal-geochemistry root** — the monograph that systematized **geothermometry** (reading deep reservoir temperature from sampled fluid chemistry). Schema-valid, every domain claim **⟦TODO-Az⟧**-flagged. Dry-steam framing carried throughout: classic *liquid* solute geothermometers (silica, Na-K) need a liquid sample, so a vapour-dominated field routes to **gas geothermometry**.

- **Research prep** (committed 74cfd8b): authored monograph, Reviews in Economic Geology Vol. 1, SEG 1984, 267 pp; Richard W. Henley (ANU, living), Alfred H. Truesdell (USGS geothermometry pioneer w/ Fournier, **d. 2014**), **Paul** B. Barton Jr. (USGS, **d. 2021** — verifier corrected the seed's "Philip").
- **Content** (`geothermal/henley-truesdell-barton-1984.js`): the silica/quartz geothermometer (`T = 1309/(5.19 − log[SiO₂]) − 273.15` conductive vs `1522/5.75` steam-loss), Giggenbach Na-K (`1390/(1.75 + log(Na/K)) − 273.15`), Na-K-Ca (Fournier-Truesdell), gas geothermometers, boiling/mixing corrections, Giggenbach Na-K-Mg maturity screen. Worked examples: silica (SiO₂=250 → ~196 °C) and Na-K (Na/K=10 → ~232 °C) with the deep-vs-shallow disagreement diagnostic. 4 self-tests, Group-A citations.
- **Mechanical audit (5 reviewers):** parity tight, **all geothermometer arithmetic independently reconfirmed** (196/232/233/182 °C). The self-test set had the worst clustering yet — three near-duplicated the practice problems and one (dry-steam/gas) was answerable only from another section — so it was **restructured**: selfTest re-aimed to maturity (intuition), scaling-from-the-same-equilibria (applications), and the dry-steam→gas-geothermometry self-test re-anchored to motivation where its support lives; plus citation (1985 Hedenquist-Henley pages), 2 superlative hedges, and an ID heading word-order fix.
- **Seed cards deferred**. content-schema 21 → 22 modules (1567 → 1638 checks); suite total **1943 checks**, green. **7th draft**.

Geothermal: 1 rich + **7 drafts** + 2 catalog-only (Arnórsson, Tester-MIT). Arnórsson-2000 research-prep also committed (d2e81b6).

---

## Phase G6-draft — Björnsson & Bodvarsson 1990 (Survey of Geothermal Reservoir Properties) — **DRAFT module, awaiting Az domain review**

**2026-06-02**

Sixth geothermal DRAFT in the "complete all geothermal" run (option b). The empirical **reservoir-property** reference — the yardstick against which an assumed or history-matched permeability/porosity/temperature is sanity-checked. Schema-valid, every domain claim **⟦TODO-Az⟧**-flagged. Written deliberately about the **method** (kh is what a well test actually measures; surveyed ranges are the prior/sanity-check), because the paper's own property tables could not be recovered (full text 403'd) — so every specific numeric range is flagged as secondary-literature illustrative.

- **Research prep** (committed af8365c): biblio verified (Geothermics 19(1):17-27, 1990, DOI 10.1016/0375-6505(90)90063-H); authors G. S. Bodvarsson (LBNL, b.1952 **d.2006**, son of Gunnar — disambiguated) + Grímur Björnsson (Iceland ISOR/Warm Arctic, living).
- **Content** (`geothermal/bjornsson-bodvarsson-1990.js`): kh/transmissivity (you measure the product, not k and h; `1 D ≈ 9.87×10⁻¹³ m²`; ~10 D·m commercial rule of thumb); productivity linear in kh (`PI = 2πkh/[μ(ln(r_e/r_w)+s)]`); fracture-controlled permeability spanning ~2 orders of magnitude; ranges as priors/sanity-checks. Worked examples: sanity-check a fitted kh ≈ 40 D·m (plausible) and the PI∝kh productivity ratio (60/6 = 10), with the dry-steam compressible-inflow caveat. 4 self-tests.
- **Mechanical audit (5 reviewers):** parity + math CLEAN, citations CLEAN. Fixes — re-aimed selfTest[2] off a duplicate of practice-4 (both the 0.2-D·m failing case) onto the 40-D·m *passing* case that the worked-example body actually develops (also closing a cross-section support gap); de-duplicated selfTest[0]/practice-1; aligned an ID porosity range; hedged 2 superlatives; fixed a garbled bio parenthetical.
- **Seed cards deferred**. content-schema 20 → 21 modules (1497 → 1567 checks); suite total **1872 checks**, green (mechanical schema validity only). **6th draft**.

Geothermal: 1 rich + **6 drafts** + 3 catalog-only (Henley-Truesdell-Barton, Arnórsson, Tester-MIT). Henley-Truesdell-Barton research-prep also committed (74cfd8b).

---

## Phase G5-draft — DiPippo 2016 (Geothermal Power Plants) — **DRAFT module, awaiting Az domain review**

**2026-06-02**

Fifth geothermal DRAFT in the "complete all geothermal" run (option b). The surface/**utilization** track — an independent catalog root (the power plant), complementary to the subsurface items. Schema-valid + renderable, NOT finalized; every domain claim flagged **⟦TODO-Az: …⟧**. Anchored on **Ch. 7, Dry-Steam Power Plants** for Darajat relevance: the reservoir delivers turbine-ready steam, so the cycle is the simplest of all (no separator, no brine, no working fluid) — with non-condensable-gas removal as the chief complication.

- **Research prep** (committed 5452cb5, `notes/dipippo-2016-research-prep-2026-06-02.md`): verified sole author Ronald DiPippo (UMass Dartmouth, living), 4th ed. 2016, Butterworth-Heinemann/Elsevier, ISBN 978-0-08-100879-9. Verifier caught the **1st-ed ISBN 9780750686204 as refuted** (it's the 2nd ed) and the DOI as uncertain — neither asserted in the module.
- **Content** (`geothermal/dipippo-2016.js`): cycle taxonomy (resource state → dry-steam/flash/binary); dry-steam thermodynamics (turbine work `w=η_t(h₁−h₂ₛ)`, condenser vacuum, NCG parasitic, `SSC=ṁ/W_net`); flash fraction; exergy/utilization efficiency. **Worked example computed from steam tables** (8 bar → 0.10 bar, η_t=0.82 → w≈540 kJ/kg, 27 MW for 50 kg/s, SSC≈6.7 kg/kWh) + a single-flash contrast (x≈0.18, flagged liquid-only). 4 self-tests, Group-A citations. Cross-refs frame it as downstream of Acuña/Grant-Bixley/Cumming/O'Sullivan (supply → conversion).
- **Mechanical audit (5 reviewers; domain facts OUT OF SCOPE):** parity CLEAN, **all thermo/arithmetic independently reconfirmed** against steam tables, citations CLEAN. Fixes: η_u notation (dropped redundant `−e₀`); re-anchored selfTest[2] (vacuum/NCG) to formalization where its support lives + grounded the quality formula in that section + dropped an out-of-section Baumann clause; hedged 4 "the standard …" superlatives about a living author; "cheapest"→"typically lowest-cost"; added a TODO-Az on the Darajat vapour-dominated classification.
- **Seed cards deferred** until Az signs off.
- **Verification**: content-schema 19 → 20 modules (1426 → 1497 checks); suite total **1802 checks**, 5 harnesses, green (mechanical schema validity only). Finalized rich modules stay at 15; **5th draft**.

Geothermal: 1 rich (Acuña) + **5 drafts** (O'Sullivan, Cumming, Stober-Bucher, Grant-Bixley, DiPippo) + 4 catalog-only (Bjornsson-Bodvarsson, Henley-Truesdell-Barton, Arnórsson, Tester-MIT). Bjornsson-Bodvarsson research-prep also committed (af8365c).

---

## Phase G4-draft — Stober & Bucher 2021 + Grant & Bixley 2011 (geothermal survey root + reservoir-engineering backbone) — **DRAFT modules, awaiting Az domain review**

**2026-06-02**

Two more geothermal DRAFTs in the "complete all geothermal" run (option b, "I draft, you correct"). Both schema-valid + renderable, NOT finalized — every domain-technical claim flagged inline **⟦TODO-Az: …⟧** with DRAFT headers. Committed together to keep the module-count doc-sync clean.

- **Stober & Bucher 2021** (`geothermal/stober-bucher-2021.js`) — the geothermal domain's **survey-textbook ROOT**, authored in survey/orientation format. Covers the value chain from thermal structure of the Earth → resource classification → shallow/deep systems → power conversion → geochemistry. Key concepts (Fourier heat flow `q=-k dT/dz`, conduction-vs-convection via Péclet/Rayleigh, Darcy/transmissivity, hydrothermal-vs-petrothermal/EGS, enthalpy classes, GSHP/COP, quartz geothermometer). Three dry-steam-safe worked examples (heat-flow density 90 mW/m²; T(4km)=132 °C; resource-class placement of a dry-steam field). Research prep committed `c3f3ccd`; bibliography verified verbatim from the publisher front-matter (Springer 2nd ed. 2021, DOI 10.1007/978-3-030-71685-1). Mechanical audit (parity + math CLEAN): 5 fixes — re-anchored a self-test to the section that supports it (applications→connections), added a missing pub-year, normalized a publisher string, hedged the Indonesian-fields naming + "simplest cycle" superlative.
- **Grant & Bixley 2011** (`geothermal/grant-bixley-2011.js`) — the **reservoir-engineering backbone**, built around the dry-steam-vs-liquid teaching contrast: the book distills *liquid-dominated* New Zealand (Wairakei) practice, so its two-phase output machinery (James lip-pressure) and liquid-drawdown decline are framed explicitly as the liquid methods that Acuña specializes for dry steam. Core models: boiling-point-for-depth, the one-box lumped model + exponential decline (`W=W₀e^{−at}`, `a=b/S_M`, cumulative `=S_M(P_i−P_whp)` → "more wells = faster, not more"), PI/II well testing. Research prep committed `5181559` (note the corrected 1982 third author **Ian G. Donaldson**). Mechanical audit (parity CLEAN, math clean bar one rounding nit): fixes — re-aimed selfTest[2] off a duplicate of practice-4 (lip-pressure) onto the numeric decline computation (and split selfTest[1] to a derivation so the two don't overlap), added a TODO-Az marker to the selfTest[3] dry-steam-divergence restatement, hedged 4 superlatives ("the standard reference" → "one of/widely regarded as"), 17→17.3 yr rounding.
- **Seed cards deferred** for both until Az signs off.
- **Verification**: content-schema 17 → 19 modules (1283 → 1426 checks); suite total **1731 checks**, 5 harnesses, green (mechanical schema validity only). Finalized rich modules stay at 15; these are the **3rd and 4th drafts**.

Geothermal: 1 rich (Acuña) + **4 drafts** (O'Sullivan, Cumming, Stober-Bucher, Grant-Bixley) + 5 catalog-only (DiPippo, Bjornsson-Bodvarsson, Henley-Truesdell-Barton, Arnórsson, Tester-MIT).

---

## Phase G3-draft — Cumming 2009 (geothermal conceptual models from surface exploration) — **DRAFT module, awaiting Az domain review**

**2026-06-02**

Third geothermal content module under the "I draft, you correct" path (part of the "complete all geothermal" run). **DRAFT, not finalized** — every domain-technical claim flagged inline **⟦TODO-Az: …⟧** with a DRAFT header. Cumming's 2009 Stanford paper is the canonical argument for **conceptual-model targeting**: target a geothermal well against an integrated, physically coherent natural-state isotherm cross-section, not a single non-unique geophysical anomaly. It is the surface-exploration front-end *upstream* of O'Sullivan's numerical simulator.

- **Research prep** (committed d242304, `notes/cumming-2009-research-prep-2026-06-02.md`): the first research workflow hung overnight (2 agents stalled); recovered 3 completed agents from the journal + re-ran the rest with anti-stall guardrails. Bibliography verified VERBATIM from the primary Stanford PDF (SGP-TR-187, 34th Workshop, Feb 9-11 2009, sole author William Cumming).
- **Content** (`geothermal/cumming-2009.js`): 8-section template, bilingual EN+ID, no viz block. The five data streams (MT clay-cap, geothermometry, BPD, isotherm-spacing→permeability, integration, gradient/slim holes); the clay-cap resistivity model (smectite <10 Ω·m cap over resistive core; base = smectite-illite transition); and the **lognormal power-density × area Monte Carlo** capacity method. Two dry-steam-safe worked examples: read a clay-cap cross-section to pick the well target (rejecting a graphitic-schist decoy), and a lognormal capacity estimate ($A_{50}=\sqrt{8\times20}\approx12.6$ km², $D_{50}=\sqrt{6\times22}\approx11.5$ MWe/km², $P_{50}\approx145$ MWe; median = product of medians, but the P10-P90 band combines in quadrature, not by multiplying extremes). 4 self-tests, 4 Group-A citations. Author William Cumming verified living/active (MSc Geophysics UBC; the unverified "BSc Toronto" omitted).
- **Mechanical audit (5 reviewers; domain facts OUT OF SCOPE → Az):** math dimension fully CLEAN (all arithmetic + the three lognormal facts independently reconfirmed). 6 mechanical/style fixes: ID "gak mungkin" (impossible) → "kecil kemungkinan" (the EN was "unlikely" — a reversed probabilistic claim); two legacy superlatives hedged ("one of the standard references", "widely taken as"); a TODO-Az marker added to the practice-Q3 BPD-swap answer to match the body; keyWorks title aligned with the sources entry; tagline "right object" → "object". Self-test/practice overlaps judged genuinely distinct (explain-vs-compute) and left as-is.
- **Seed cards deferred** until Az signs off.
- **Verification**: content-schema 16 → 17 modules (1212 → 1283 checks); suite total **1588 checks**, 5 harnesses, green (mechanical schema validity only). Finalized rich modules stay at 15; this is the **2nd draft** (with O'Sullivan).

Geothermal: 1 rich (Acuña) + **2 drafts** (O'Sullivan, Cumming) + 7 catalog-only.

---

## Phase G2-draft — O'Sullivan-Pruess-Lippmann 2001 (geothermal reservoir simulation) — **DRAFT module, awaiting Az domain review**

**2026-06-01**

Second geothermal content module, authored under the explicit "I draft, you correct" path (option b) Az sanctioned for geothermal. **This is a DRAFT, not a finalized rich module** — every domain-technical claim flagged by the research-prep §9 review is marked inline as **⟦TODO-Az: …⟧**, and the file carries a DRAFT header listing all open items. Az (6 yrs Darajat dry-steam operations) must clear each before it is final. The 2001 *Geothermics* review is the canonical "state of the art" survey of geothermal reservoir simulation — the distributed-parameter (TOUGH2) tier that sits on top of Grant-Bixley's lumped/analytical methods, and the field-scale model into which an Acuña-style per-well deliverability relation feeds as a source-term boundary condition.

- **Research prep** (committed b0d917a, `notes/osullivan-pruess-lippmann-2001-research-prep-2026-06-01.md`): 5-agent web-verified fan-out + adversarial fact-recheck. Bibliography confirmed against **two independent authoritative sources** (Crossref DOI registry + OSTI/LBNL): *Geothermics* 30(4), 395-429, 2001, DOI 10.1016/S0375-6505(01)00005-0, LBNL-44699.
- **Content** (`geothermal/osullivan-pruess-lippmann-2001.js`): full 8-section template, bilingual EN + ID, no new simulator (viz block omitted — no unregistered component). The integral mass/energy balance, multiphase Darcy + heat flux, IFDM + upstream weighting + Newton-Raphson, EOS modules, and the iTOUGH2 weighted-least-squares inverse-modelling apparatus (all sourced to the TOUGH2/iTOUGH2 primary docs). Two dry-steam-safe worked examples: a single-block natural-state mass+energy balance (279 MW convective vs 2 MW conductive → conduction <1% of budget) and a well-as-source-term coupled to a pressure-squared deliverability law (P 30→26 bar = 13% drop → q 40→28.8 kg/s = 28% drop, the compressible signature; cross-linked to Acuña). 4 self-tests (intuition / formalization / worked-example / applications), 6 Group-A citations.
- **Author web-verified**: O'Sullivan (Auckland; AUTOUGH2/Waiwera; Ramey 2011 — living/active, verified) + Pruess (LBNL; TOUGH/TOUGH2/MINC/iTOUGH2 creator — **life status UNRESOLVED, bio written in accomplishment-tense, flagged**) + Lippmann (LBNL; Cerro Prieto — **deceased Sept 10 2018, verified**).
- **Mechanical audit (5 reviewers: parity / math / self-tests / citations / overclaim — domain facts explicitly OUT OF SCOPE, left to Az):** math dimension fully clean (all arithmetic independently recomputed). 11 mechanical/style fixes applied: ID bio "ngasal-in"→"mencetuskan" (meaning drift); NAE past-tense→event-tense (avoids deceased implication for Pruess + EN/ID parity); attributed "most widely used code"; scoped "only tool"→"resolves all of this spatially"; hedged tagline + self-test dry-steam claim out of finalization; grounded the self-test answers' conventional-FD and linear-PI references in the body; deconflicted self-test 4 (was a near-duplicate of practice 4 → re-aimed to the operations "divergence-is-the-signal" point); standardized LBNL report styling; softened "definitive"/"canonical" source descriptors.
- **Seed cards deferred** until Az signs off on content (no geothermal cards added — unverified-content claims must not enter the SR rotation).
- **Verification**: content-schema 15 → 16 modules (1140 → 1212 checks); suite total **1517 checks**, 5 harnesses, green. (Mechanical schema validity only — domain correctness is Az's review, tracked by the TODO-Az markers.)

Geothermal: 1 rich (Acuña) + **1 draft** (O'Sullivan) + 8 catalog-only. Finalized rich modules across both domains stay at 15; this draft is counted separately until Az clears it.

---

## Phase 2.7 — Bouchaud-Bonart-Donier-Gould 2018 (Trades, Quotes and Prices) textbook content + audit — **microstructure domain complete**

**2026-06-01**

Tenth Phase B module, fourth and final textbook — and the module that **completes the microstructure domain** (all 14 catalog items now have rich bilingual content). Bouchaud, Bonart, Donier & Gould's *Trades, Quotes and Prices* is the **econophysics / empirical** capstone — the fourth lens on microstructure after economic theory (Kyle/Glosten-Milgrom), optimization (Almgren-Chriss/CJP/Guéant), and practice (Kissell). Its two headline findings are surprises the data forced and the textbook models get wrong: market impact is a concave **square-root law**, not linear (overturning Kyle's linear-impact baseline empirically); and order flow has **long memory** yet prices stay diffusive (the "diffusivity puzzle"), resolved by the **propagator** (transient impact). Full template, bilingual EN + ID, 4 self-tests, Group A citations, a square-root-impact worked example (no new simulator). Research-fanned and web-verified, then the same 5-reviewer adversarial audit before commit.

- **Content** (`bouchaud-bonart-donier-gould-2018.js`): the 9-part empirical arc (stylized facts → LOB statistics/models → long-memory order flow → price impact → propagator → adverse selection/spread → latent liquidity → practical consequences); the **square-root law** $I = Y\sigma\sqrt{Q/V}$ (concave, schedule-near-independent, vs Kyle's linear $\Delta p=\lambda Q$; mechanism = the V-shaped latent / locally-linear order book); the **propagator** $p_t=\sum G(t-t')\varepsilon_{t'}f(v_{t'})$ with the diffusivity condition $\beta=(1-\gamma)/2$ ($\gamma\approx0.5\Rightarrow\beta\approx0.25$). Worked example uses the same order as the AC/Kissell modules (200k of a USD 50 stock, 10% of ADV, σ=2%): $I\approx0.316\%\approx32$ bps, same order of magnitude as Kissell's I-Star (~39 bps); doubling the order raises impact only ×√2 (vs Kyle ×2).
- **Authors web-verified**: Jean-Philippe Bouchaud (CFM Chairman/Chief Scientist; founder of econophysics; PhD on spin-polarized quantum gases under Claire Lhuillier — *not* spin glasses) + Bonart (UCL), Donier (CFM; → Neural Concept, not Kyutai), Gould (CFM-Imperial/Oxford; → Sonalytic/Spotify, not CommerzBank). All 5 citations verified (the book; Kyle 1985; Tóth et al. 2011 *PRX* 1(2) 021006; Bouchaud-Gefen-Potters-Wyart 2004 *QF* 4(2) 176-190; CJP 2015).
- **13 Bouchaud seed cards** appended (`microstructure/seed-cards.js`, 175 → 188).
- **Audit outcome (facts / math / self-tests / parity dimensions all CLEAN — all square-root arithmetic recomputed, all 3 bio corrections honored, all 5 reviewers returned):** 3 fixes — hedged "**the** reference synthesis" → "a standard reference synthesis" (legacy + card c001, the now-standard superlative hedge), and led the P4 practice answer with its no-arbitrage punchline rather than re-deriving ST1's mechanism. The "overturns Kyle" framing was confirmed fair (aimed at the linear-impact *assumption*; Kyle honored as foundational).
- **Verification**: content-schema 15 modules (1065 → 1140 checks); suite total **1445 checks**, 5 harnesses, green.

Microstructure rich modules: 13 → 14 (15 total across both domains). Catalog-only: 10 → 9. **Microstructure domain is now 100% rich content** — the only remaining catalog-only items are the 9 geothermal items, which stay Az-only.

---

## Phase 2.6 — Kissell 2013 (The Science of Algorithmic Trading and Portfolio Management) textbook content + audit

**2026-06-01**

Ninth Phase B module, third textbook — the **practitioner** counterweight to the two theory texts. Where Cartea-Jaimungal-Penalva and Guéant *derive* the optimal strategy from a posited impact SDE, Robert Kissell's book asks the operational questions a buy-side desk faces first: how do you **measure** trading cost (transaction-cost analysis), **estimate** market impact from real data (the I-Star model), and **choose/benchmark** an execution algorithm? Full template, bilingual EN + ID, 4 self-tests, Group A citations, a numerical I-Star worked example (no new simulator). Research-fanned (the I-Star agent read the full book PDF) and web-verified, then the same 5-reviewer adversarial audit before commit.

- **Content** (`kissell-2013.js`): the three pillars — TCA (unbundling the implementation shortfall, paper minus actual return, into delay / impact / timing-risk / opportunity components for *attribution*); the **I-Star market-impact model** ($I^* = a_1(Q/\text{ADV})^{a_2}\sigma^{a_3}$ in bps; $\text{MI} = b_1 I^*\,\text{POV}^{a_4} + (1-b_1)I^*$, with $b_1$ the *temporary* fraction); and the decision framework (the trader's dilemma = the Almgren-Chriss efficient frontier, operationalized; choose VWAP/TWAP/POV/IS by objective, alpha, and urgency — no-alpha collapses to VWAP). Worked example: buy 200k of a USD 50 stock (10% ADV, σ=30%, POV=20%) → I*≈84.9 bps → MI≈38.9 bps ≈ USD 38,900 on USD 10M, with a POV ladder showing impact rising with speed.
- **Author web-verified**: Robert Kissell (Kissell Research Group; Molloy / Fordham; PhD Economics Fordham; ex-UBS/JP Morgan/Citigroup/Instinet — Morgan Stanley is a misattribution and was kept out). I-Star = the Kissell-Malamut model. All 5 citations verified (the book; Almgren-Chriss 2000; Perold 1988 *JPM* 14(3) 4-9; Kissell-Glantz 2003 *Optimal Trading Strategies*; CJP 2015).
- **13 Kissell seed cards** appended (`microstructure/seed-cards.js`, 162 → 175).
- **Audit outcome (facts / math / self-tests / parity dimensions all CLEAN — every I-Star number independently recomputed and matched, and $b_1$=temporary labeling verified everywhere):** before the audit, caught and fixed an ESM apostrophe-escape bug (`\\'`→`\'`, which `node --check` missed but the module loader flagged) and corrected the practice arithmetic ($I^*\approx 63$ bps, not 60.6); the audit then folded in 7 fixes — hedged five categorical "**the** practitioner reference" superlatives → "a leading…" (matching the CJP/Guéant precedent), tightened a "head of … at three banks" credential to the verified phrasing, and reordered the Multi-Asset Risk Modeling keyWork to its published Glantz-first author order.
- **Verification**: content-schema 14 modules (991 → 1065 checks); suite total **1370 checks**, 5 harnesses, green.

Microstructure rich modules: 12 → 13 (14 total across both domains). Catalog-only: 11 → 10. Geothermal expansion remains Az-only.

---

## Phase 2.5 — Guéant 2016 (The Financial Mathematics of Market Liquidity) textbook content + audit

**2026-06-01**

Eighth Phase B module, second textbook — Olivier Guéant's rigorous, closed-form-seeking liquidity text. Its distinctive contribution: it takes the **Avellaneda-Stoikov** market-making problem (which AS solved only *asymptotically*) and, via Guéant-Lehalle-Fernández-Tapia, turns it into an essentially closed-form one — an exponential change of variables linearizes the coupled HJB system into linear ODEs (a matrix exponential), giving explicit optimal quotes and a provable inventory bound. The deeper-math complement to Cartea-Jaimungal-Penalva. Full template, bilingual EN + ID, 4 self-tests, Group A citations, equation-rich (no new simulator). Research-fanned and web-verified, then the same 5-reviewer adversarial audit before commit.

- **Content** (`gueant-2016.js`): the book's four parts (microstructure intro; optimal liquidation; **liquidity in pricing models** — block trades, options-under-impact, share buy-backs, the bridge most texts skip; market making); the two "choose the right structure and the hard problem collapses" reductions — CARA + arithmetic price ⇒ optimal execution becomes deterministic (sinh Almgren-Chriss curve), and the GLFT exponential ansatz ⇒ the market-making HJB becomes linear ODEs $v'(t)=Mv(t)$, $v(t)=e^{-M(T-t)}\mathbf 1$. Worked example computes the GLFT closed-form quotes (GLFT Fig.1 params): microstructure floor $\tfrac1\gamma\ln(1+\gamma/k)\approx 3.28$ ticks, spread $\approx 6.63$, per-unit inventory skew $\approx 0.068$ tick.
- **Author web-verified**: Olivier Guéant (Université Paris Cité; Paris 1 Panthéon-Sorbonne when the book appeared; PhD Paris-Dauphine under Pierre-Louis Lions, among the first mean-field-games theses). All 5 citations verified (the book; GLFT 2013 *MAFE* 7(4) 477-507; Avellaneda-Stoikov 2008; Almgren-Chriss 2000; Cartea-Jaimungal-Penalva 2015). Two facts confirmed clean by the audit: current affiliation framed correctly (Paris Cité vs Paris 1) and the PhD at Dauphine (not the Diderot HDR).
- **13 Guéant seed cards** appended (`microstructure/seed-cards.js`, 149 → 162).
- **Audit outcome (facts / math / parity dimensions all CLEAN — the GLFT arithmetic was independently re-derived via a full 61×61 matrix solve and matched to 2 decimals).** Two reviewers initially dropped on a tool-call failure and were **re-run** — and the re-run caught a real authoring defect: a practice answer + card c009 had the microstructure floor's comparative statics **backwards** (it is *decreasing* in γ, with *no* σ or A dependence — the risk compensation lives in the inventory skew, not the floor). Fixed, plus 5 superlative-hedging fixes ("the mathematically deepest" → "among the most…" across motivation/legacy/bio/card c001, matching the CJP "one of the standard texts" precedent; tagline "genuinely closed-form" → "essentially closed-form") and a self-test/practice de-duplication.
- **Verification**: content-schema 13 modules (917 → 991 checks); suite total **1296 checks**, 5 harnesses, green.

Microstructure rich modules: 11 → 12 (13 total across both domains). Catalog-only: 12 → 11. Geothermal expansion remains Az-only.

---

## Phase 2.4 — Cartea-Jaimungal-Penalva 2015 (Algorithmic and High-Frequency Trading) textbook content + audit

**2026-06-01**

Seventh Phase B module and the **first textbook** (survey/orientation format). Cartea, Jaimungal & Penalva's *Algorithmic and High-Frequency Trading* (Cambridge, 2015) is the graduate text that unified algorithmic trading under one **stochastic-control recipe** — write the controlled dynamics, derive the Hamilton-Jacobi-Bellman (HJB) equation, read off a feedback strategy — recovering optimal execution (Almgren-Chriss) and market making (Avellaneda-Stoikov) as special cases. The module ties the whole microstructure track together: it shows the papers already in the catalog are instances of one framework. Full template, bilingual EN + ID, 4 self-tests, Group A citations, equation-rich (no new simulator). Research-fanned and web-verified, then the same 5-reviewer adversarial audit before commit.

- **Content** (`cartea-jaimungal-penalva.js`): the book's 3-part structure (microstructure + empirical facts; the stochastic-control toolkit; the trading models); "strategy, not schedule" (feedback control vs fixed schedule); the four-step recipe (dynamics → objective → HJB → verification); the two control types (continuous trading-*rate* for execution vs point-process posting-*depth* for market making). Worked example "**one recipe, two problems**": the HJB recovering the Almgren-Chriss sinh trajectory (reusing the verified `100k→59,946→…→0`, γ=√(φσ²/k), φ→0 → TWAP) and the market-making depths $\delta^{\pm*}=1/\kappa+\text{skew}$ — explicitly tying to the AC and AS modules.
- **Authors web-verified**: Cartea (Oxford; Director of the Oxford-Man Institute; UCL at the time), Jaimungal (Toronto), Penalva (UC3M). All 5 citations verified (the book; Almgren-Chriss 2000; Avellaneda-Stoikov 2008; Guéant-Lehalle-Fernández-Tapia 2013 *MAFE* 7(4) 477-507; Guéant 2016 Chapman & Hall/CRC). **Two known bio traps avoided** (both checked clean by the audit): Cartea is *not* credited with founding the Oxford Algorithmic Trading Programme (only the Oxford-Man Institute), and Jaimungal is described as an *Associate* Editor of SIAM J. Financial Mathematics and *past Chair* (2017-2019) of SIAG/FME — not EiC, not Bachelier president.
- **13 CJP seed cards** appended (`microstructure/seed-cards.js`, 136 → 149).
- **Audit outcome (facts / math / parity dimensions all CLEAN — the reused AC numbers were verified to match the existing Almgren-Chriss module exactly, and KaTeX/`$`-safety confirmed across all math spans):** 3 fixes folded in — grounded "dark pools" by adding it to the applications Part III menu (it was cited in a self-test/card but absent from the body; it is a genuine Ch.7/Ch.9 topic); softened the legacy "**the** standard graduate text" superlative → "**one of the** standard…"; and fixed cloze card c004 "every" → "almost every" to match the corpus's hedged framing.
- **Verification**: content-schema 12 modules (842 → 917 checks); suite total **1222 checks**, 5 harnesses, green.

Microstructure rich modules: 10 → 11 (12 total across both domains). Catalog-only: 13 → 12. Geothermal expansion remains Az-only.

---

## Phase 2.3 — Aquilina-Budish-O'Neill 2022 (HFT latency arbitrage) content + audit

**2026-06-01**

Sixth Phase B module — the *within-venue, speed-constrained* counterpart to Makarov-Schoar's *cross-venue, capital-constrained* arbitrage. Aquilina-Budish-O'Neill use London Stock Exchange **message data** (which capture *failed* orders, so both winners and losers of a speed race are visible) to give the first direct measurement of latency-arbitrage "races." The lesson: the HFT speed race is an artifact of the **continuous limit order book** (which processes messages serially), not a law of nature — and a market-design change (frequent batch auctions) removes it. Full template, bilingual EN (2569 words) + ID (2321), 4 self-tests, Group A citations, numerical worked example (no new simulator). Research-fanned and web-verified, then the same 5-reviewer adversarial audit before commit.

- **Content** (`aquilina-budish-oneill-2022.js`): latency arbitrage as *mechanical, public-signal* adverse selection (distinct from Kyle's private-information kind); the four-part race definition and message-data measurement innovation; the scale (avg FTSE 100 symbol ~537 races/day, ~71,000/day across the FTSE 350, mean duration 79 μs, mode 5-10 μs, ~22% of FTSE 100 volume, won by a take ~90% of the time, top-6 firms win ~82%); the latency-arbitrage **tax** (0.42 bps all / 0.53 bps non-race, ~£60M/yr UK, ~USD 5bn/yr global); the negative in-race realized spread (−1.83 bps) → ~1/3 of the effective spread → ~17% cost-of-liquidity reduction ($0.53/3.17$); and the frequent-batch-auction fix. Worked example aggregates the ~£2 per-race prize to the annual figure.
- **Authors web-verified**: Aquilina (BIS; FCA at the time of the study), Budish (Paul G. McDermott Professor, Chicago Booth; NBER; lead author of the 2015 frequent-batch-auctions theory this paper tests), O'Neill (UNSW; FCA at the time). All 5 citations verified (ABO 2022 *QJE* 137(1) 493-564; Budish-Cramton-Shim 2015 *QJE* 130(4) 1547-1621; Kyle 1985 *Econometrica* 53(6) 1315-1335; Foucault-Kozhan-Tham 2017 *RFS* 30(4) 1053-1094; Biais-Foucault-Moinas 2015 *JFE* 116(2) 292-313).
- **13 ABO seed cards** appended (`microstructure/seed-cards.js`, 123 → 136).
- **Audit outcome (facts / math / parity dimensions all CLEAN — every number recomputed and matched, including the £35M↔£60M back-of-envelope reconciliation and the 0.53/3.17≈17% identity):** 6 fixes folded in — **rewrote all 4 practice problems** (they had been 1:1 conceptual duplicates of the self-tests) into computational/reasoning/comparative items per house style (practice = work, self-tests = concept); **reframed the crypto/MEV link as the module's analogy** (the paper is equities-only) in legacy/applications/connections/self-test/card c012; added the **FTSE 100 qualifier** to the 22%-of-volume figure in focus + legacy; and softened "every major exchange" → "nearly every."
- **Verification**: content-schema 11 modules (770 → 842 checks); suite total **1147 checks**, 5 harnesses, green.

Microstructure rich modules: 9 → 10 (11 total across both domains). Catalog-only: 14 → 13. Geothermal expansion remains Az-only.

---

## Phase 2.2 — Makarov-Schoar 2020 (crypto cross-exchange arbitrage) content + audit

**2026-06-01**

Fifth Phase B module and the **first of the crypto phase** — Makarov-Schoar's study of the law of one price in cryptocurrency markets. The bridge from classical equity microstructure into crypto: bitcoin is identical and transferable in minutes, the ideal test case for no-arbitrage, yet its price diverged across countries by up to 40% for weeks. The lesson — the binding constraint is moving *fiat* across borders, not moving bitcoin — makes the limits-of-arbitrage tradition (Shleifer-Vishny, Gromb-Vayanos) concrete. Full template, bilingual EN (2569 words) + ID (2321), 4 self-tests, Group A citations, numerical worked example (no new simulator). Research-fanned and web-verified, then the same 5-reviewer adversarial audit before commit.

- **Content** (`makarov-schoar-2020.js`): the law of one price as the cleanest no-arbitrage test (bitcoin is byte-for-byte identical across venues); the kimchi premium (Korea-US daily-average >15% for two months, peak ~40%; Japan ~10%, Europe ~3%; within-country <1%); the within-crypto test (ETH/BTC gapped only ~3% while USD/BTC gapped >20%) that isolates fiat capital controls as the cause; the order-flow decomposition $V_{i,t}=\beta_i F_t + u_{i,t}$ (common factor drives ~80% of returns, idiosyncratic component drives the cross-exchange gaps); price impact (~9% per 10,000-BTC net buy at 5-min); and the capital-control-index association (slope ~0.29). Worked example computes the kimchi-premium arbitrage P&L and the fiat-rail wall that strands it.
- **Authors web-verified**: Igor Makarov (LSE Associate Professor of Finance; PhD MIT Sloan 2006; prior LBS) and Antoinette Schoar (MIT Sloan, Stewart C. Myers-Horn chair; PhD Chicago 2000; Executive Editor of the *Journal of Finance*; 2003 Brattle Prize). All 5 citations verified (MS 2020 *JFE* 135(2) 293-319; Shleifer-Vishny 1997 *JF* 52(1) 35-55; Gromb-Vayanos 2002 *JFE* 66(2-3) 361-407; Kyle 1985 *Econometrica* 53(6) 1315-1335; Griffin-Shams 2020 *JF* 75(4) 1913-1964).
- **13 MS seed cards** appended (`microstructure/seed-cards.js`, 110 → 123).
- **Audit outcome (facts / math / parity dimensions all CLEAN):** 6 fixes folded in — softened the "cleanest natural experiment… ever observed" superlative and the bio's "first systematic map" priority claim; **hedged the Griffin-Shams Tether result** (a genuinely contested finding, disputed by Tether/Bitfinex) in Sources + keyCollaborators to match house style for contested claims; harmonized two flat causal phrasings ("pinned the cause" / "the cause is") to the paper's interpretive register; softened a practice answer's "pins… the paper's central claim"; and **recast self-test 3** from a telegraphed/redundant order-flow-decomposition question onto the untested price-impact (Kyle-λ-for-crypto) result, broadening self-test coverage.
- **Verification**: content-schema 10 modules (698 → 770 checks); suite total **1075 checks**, 5 harnesses, green.

Microstructure rich modules: 8 → 9 (10 total across both domains). Catalog-only: 15 → 14. Geothermal expansion remains Az-only.

---

## Phase 2.1 — Almgren-Chriss 2000 (optimal execution) content + audit

**2026-06-01**

Fourth Phase B module — the **Almgren-Chriss** optimal-execution model, the *taker-side* counterpart to Avellaneda-Stoikov's maker-side market making: AS optimizes where the market maker quotes against inventory risk; AC optimizes how the liquidity taker schedules a large order against impact and timing risk — the two sides of the same trade. This closes the microstructure execution arc (GM→Kyle→OFI→VPIN→AS↔AC). Full template, bilingual EN (2569 words) + ID (2321), 4 self-tests, Group A citations, numerical worked example (no new simulator). Web-verified, then the same 5-reviewer adversarial audit before commit.

- **Content** (`almgren-chriss-2000.js`): optimal execution as a mean-variance optimization over the *whole trading trajectory*; permanent ($g(v)=\gamma v$ → schedule-independent $\tfrac12\gamma X^2$) vs temporary ($h(v)=\varepsilon\,\text{sgn}+\eta v$) impact; the urgency parameter $\kappa=\sqrt{\lambda\sigma^2/\eta}$; the closed-form holdings trajectory $x(t)=X\sinh(\kappa(T-t))/\sinh(\kappa T)$ (→ the straight-line TWAP as $\kappa\to0$, front-loaded as $\kappa$ grows); the *efficient frontier* of execution; and the productization as arrival-price / IS / VWAP / TWAP. Worked example ($X$=100k, $T$=5, $\kappa$=0.5 → 100k/59946/35194/19424/8613/0) recomputed independently.
- **Authors web-verified**: Almgren (assistant prof Chicago → tenured assoc. prof Toronto → BofA "Instinct" adaptive-execution algo → co-founded Quantitative Brokers 2008, Chief Scientist; Princeton) and Chriss (PhD/BS math Chicago, Langlands program; *Black-Scholes and Beyond*; Morgan Stanley/GSAM/SAC; founded Hutchin Hill). All 5 citations verified (AC 2000 *Journal of Risk* 3(2) 5-39; Kyle 1985 *Econometrica* 53(6) 1315-1335; Bertsimas-Lo 1998 *JFM* 1(1) 1-50; Gatheral 2010 *QF* 10(7) 749-759; Obizhaeva-Wang 2013 *JFM* 16(1) 1-32).
- **13 AC seed cards** appended (`microstructure/seed-cards.js`, 97 → 110).
- **Audit outcome (math dimension clean; 5 fixes folded in pre-commit):** corrected Almgren's University of Chicago rank — he was an *assistant* professor of mathematics there, not "a mathematics professor" (tenure was only at Toronto); softened the tagline's categorical "the model behind *every* execution algorithm" (the body itself frames AS as the *other* side, and VWAP/POV/SOR algos are not AC-derived); hedged a flat "VWAP/TWAP are special cases" in the Motivation section to match the careful "VWAP ≈ AC re-benchmarked to a volume curve" treatment used everywhere else in the module; sharpened "linear, convex impact" → the per-interval *cost* is convex while the impact *function* is linear (in two answers); changed seed card c004's strict `=` between the discrete objective and its continuous limit to a `cont. limit` arrow. **One audit flag rejected after web-verification:** the BofA "Instinct" algorithm name is accurate (confirmed via Tech Monitor / Wikipedia — not a conflation with "Instinet"). Math, citations, and EN/ID parity audited clean.
- **Verification**: content-schema 9 modules (627 → 698 checks); suite total **1003 checks**, 5 harnesses, green.

Microstructure rich modules: 7 → 8 (9 total across both domains). Catalog-only: 16 → 15. Geothermal expansion remains Az-only.

---

## Phase 2.0 — Avellaneda-Stoikov 2008 (optimal market making) content + audit

**2026-05-31**

Third Phase B module — the **Avellaneda-Stoikov** optimal-market-making model, the capstone of the GM→Kyle→OFI→VPIN arc: those modules explain *why* spreads exist, *how* flow moves price, and *when* flow is toxic; AS answers *where the market maker should actually quote*. Full template, bilingual EN (2739) + ID (2418), 4 self-tests, Group A citations, numerical worked example (no new simulator). Web-verified, then the same 5-reviewer adversarial audit before commit.

- **Content** (`stoikov-2008.js`): market making as stochastic control; the inventory-skewed reservation price $r = s - q\gamma\sigma^2(T-t)$; the optimal spread $\gamma\sigma^2(T-t) + (2/\gamma)\ln(1+\gamma/\kappa)$ (inventory-risk term + microstructure term); $\lambda(\delta)=Ae^{-\kappa\delta}$ order arrival; and the inventory-skew behaviour (worked example: long 5 → quotes recenter on r = 98, the ask falls below the mid to shed inventory). Honest about limits (fixed-parameter intensity = no adverse selection → pair with VPIN/OFI) and place vs Ho-Stoll / Guéant et al.
- **Authors web-verified**: Avellaneda (NYU Courant; Uncertain Volatility Model; 2010 Quant of the Year; 1955–2022) and Stoikov (Cornell FE Manhattan). All 5 citations verified.
- **13 AS seed cards** appended (microstructure 84 → 97).
- **Audit fixes folded in (pre-commit):** corrected a real factual error — I had credited **Stoikov as a VPIN co-author** (he is not; VPIN is Easley-López de Prado-O'Hara — Stoikov's work is OFI/Cont-Kukanov-Stoikov + the micro-price), in the bio, keyCollaborators, and a self-contradicting connections bullet; sharpened "constant" order-arrival intensity → "fixed-parameter" (the intensity varies with δ; its *parameters* are state-independent); retagged a self-test from formalization → connections; hedged "first rigorous" (vs Ho-Stoll) and "essentially every engine"; fixed a "half-tick" magnitude slip and the approximation-regime label. Math, citations, and EN/ID parity audited clean.
- **Verification**: content-schema 8 modules (556 → 627 checks); suite total **932 checks**, 5 harnesses, green.

Microstructure rich modules: 6 → 7 (8 total across both domains). Catalog-only: 17 → 16. Geothermal expansion remains Az-only.

---

## Phase 1.9 — Easley-López de Prado-O'Hara 2012 (VPIN) content + audit

**2026-05-31**

Second Phase B module: **VPIN** (Volume-Synchronized PIN), completing the GM→PIN→VPIN order-flow-toxicity arc and pairing with CKS's OFI. Full template, bilingual EN (2665 words) + ID (2390), 4 self-tests, Group A citations, numerical worked example (no new simulator). All facts web-verified, then the module went through the **same 5-reviewer adversarial audit as CKS before this commit** — findings already folded in.

- **Content** (`easley-lopez-prado-vpin.js`): order-flow toxicity; the volume clock (equal-volume buckets vs calendar time); bulk volume classification $V^B = V\,Z(\Delta P/\sigma)$; $\text{VPIN} = \sum|V^S-V^B|/(nV) \in [0,1]$; the PIN connection; and — given equal weight — both the 2012 flash-crash claim AND the **Andersen-Bondarenko (2014) critique** (VPIN is mechanically correlated with volume/volatility; it peaked *after*, not before, the crash) plus the authors' published Comment. Worked example computes VPIN ≈ 0.41 from three buckets via the normal CDF (recomputed).
- **Authors web-verified**: Easley (Cornell, Henry Scarborough Professor, PhD Northwestern 1979), López de Prado (ADIA Global Head of Quant R&D + Cornell; *Advances in Financial Machine Learning* 2018), O'Hara (Cornell Johnson).
- **13 VPIN seed cards** appended (`microstructure/seed-cards.js`, 71 → 84).
- **Audit fixes folded in (pre-commit):** removed a false attribution of a Student-$t$ CDF to the 2012 paper (it uses only the standard normal; the $t$ variant is later work); corrected the VPIN→PIN derivation from an exact `=` to the approximate `≈` the authors actually use; fixed a Practice-Q2 arithmetic slip (8000×0.933 = 7464, not 7467) + a worked-table off-by-one; hedged the tagline's contested flash-crash claim; added the ELO Comment (2014) to Sources + a line of its substance so the AB critique is not presented one-sidedly. facts/citations and EN/ID parity audited clean.
- **Verification**: content-schema now covers 7 modules (485 → 556 checks); suite total **861 checks**, 5 harnesses, all green.

Microstructure rich modules: 5 → 6 (7 total across both domains). Catalog-only: 18 → 17. Geothermal expansion remains Az-only.

---

## Phase 1.8.1 — CKS module audit fixes

**2026-05-31**

Ran the same adversarial 5-reviewer audit on the new 1.8 module that caught the GM martingale error earlier. Facts, citations, EN/ID parity, and all self-test/practice numbers verified **clean**. Six substantive issues found and fixed — all in the worked example or conceptual framing, the kind self-review misses:

- **Worked-example arithmetic/labels:** "two of the four events were not trades" → **three** (only the market buy is a trade), "half" → two-thirds; "$1/\hat\beta \approx 180$ *is* the depth" → it is *proportional* to depth ($1/\hat\beta = 2\bar D$ in the stylized model), not equal; Takeaway "divide by the impact coefficient" → **multiply** by $\hat\beta$; "interval 3 has the largest TI" → corrected (interval 5's is larger).
- **Slope formula:** $\hat\beta \approx c/(2\bar D)$ "with $c$ of order one" double-counted the ½ and mis-stated the magnitude → now presents the paper's two forms cleanly: parameter-free stylized $\hat\beta = 1/(2\bar D)$ and empirical $\hat\beta = c/(A\bar D)$ with calibrated $c$ well below 1.
- **Overclaim (same failure mode as the GM martingale):** "cancellations are the most frequent event of all" is *not* established by the paper → hedged to the paper-supported fact (quote updates outnumber trades ≈40:1), across all content spots + seed cards.
- **Hedges:** square-root-law framing softened to the heuristic scaling argument the authors caution about; "OFI is the empirical realization of Kyle's λ" → "generalization/analogue" (OFI counts all touch events, not just signed trades).
- Propagated every fix into the 13 CKS seed cards (and repaired an apostrophe-loss in one card). Suite still **790/790** green.

Lesson reaffirmed: independent adversarial review catches confident-but-wrong claims that fact-checking + self-review do not.

---

## Phase 1.8 — Cont-Kukanov-Stoikov 2014 content (OFI / order-flow imbalance)

**2026-05-31**

First **Phase B** (expansion) module — the natural next microstructure item, already referenced as "builds toward" from Kyle and GM. Authored to the full template (author block, 8 canonical sections, 4 self-tests, audio, Group A citations), bilingual EN (2828 words) + ID (2551). No new simulator — a self-contained numerical worked example, matching Kyle's pattern. Every public fact was **web-verified before writing** (no repeat of the bio errors A.1 caught).

- **Content** (`data/domains/microstructure/content/cont-kukanov-stoikov-2014.js`): OFI as the signed count of all best-quote events (limit orders, cancellations, market orders); the per-event contribution $e_n$; the linear law $\Delta P = \beta\,\text{OFI} + \epsilon$ with $\beta \propto 1/\text{depth}$; why trade volume is the noisy competitor (cancellations dominate at HF); reconciliation of the empirical square-root law; explicit lineage to Kyle's $\lambda$. The worked example computes OFI = +100 over a 4-event sequence (two of them non-trades) and fits a 5-interval OLS: $\hat\beta \approx 0.0055$ ticks/unit, $1/\hat\beta \approx 180$ (the effective depth), $R^2 \approx 0.97$, against a deliberately noisy trade-imbalance column — all recomputed and verified.
- **Author block** (all web-verified): Cont (Oxford Statutory Professor of Mathematical Finance since 2018, prev. Imperial/Columbia; Bachelier Prize 2010; SIAM Fellow), Kukanov (Columbia IEOR PhD 2013 under Cont; now Headlands Technologies), Stoikov (Cornell Financial Engineering Manhattan; Avellaneda-Stoikov 2008).
- **Seed cards**: 13 CKS cards appended to `microstructure/seed-cards.js` (58 → **71**), grounded strictly in the module.
- **Verification**: content-schema now covers 6 modules (414 → 485 checks); suite total **790 checks**, 5 harnesses, all green.

Microstructure rich modules: 4 → 5 (6 total across both domains). Catalog-only: 19 → 18. Geothermal expansion (Grant-Bixley etc.) remains Az-only per the standing domain-expertise boundary.

---

## Audit Phase A.3 — SM-2 seed cards (Kyle + GM authored, Acuña drafted)

**2026-05-31**

Closes the audit's biggest definition-of-done gap (completeness C1/C2): for an SM-2 platform, three of the five rich modules had **zero** review cards, and the geothermal domain had no `seed-cards.js` at all — its Review tab could never surface a due card. Per owner decision **DC4**:

- **Kyle 1985 (14) + Glosten-Milgrom 1985 (14)** appended to `data/domains/microstructure/seed-cards.js` (30 → **58**). Authored autonomously from the committed content modules — every card grounded in module text, no new facts introduced. The GM martingale card teaches μ_t (not the quote midpoint), consistent with the A.1 correction; the Kyle x* card frames it as the expected-profit maximizer.
- **Acuña 2008 (12 DRAFT cards)** in a new `data/domains/geothermal/seed-cards.js`, wired automatically via `loadDomainContent`'s `tryImport`. Marked **DRAFT** pending Az's review of the operational framings; sticks to what the module states (no Darajat-specific numbers invented). Geothermal Review tab now seeds 12 cards.
- **Harness:** `verify-app-logic.mjs` gained an L5 block validating seed-card integrity across both domains — globally-unique ids, `itemId` resolves to a real item, valid `type`, non-empty front/back, cloze span present in `front`, formula carries `latex` (14 checks).

Card mix across the 40 new cards: 24 basic / 8 formula / 8 cloze. Suite: **5 harnesses, 719 checks**, all green. The 19 catalog-only items remain a deliberate reading roadmap.

---

## Audit Phase A.2 — Citation normalization, doc-staleness, polish

**2026-05-30**

Second audit batch (inconsistencies + polish; builds on A.1). No behavior change to the simulators or SM-2 scheduling — owner decisions DC2/DC3 kept the verified code and fixed the surrounding labels/docs instead.

**Citation normalization (DC1 → Group A):** GM + Acuña sources sections converted to the majority format — comma before volume, ASCII hyphen page ranges, no "pp.", initials spaced ("L. R."), and the `[THIS ITEM]`/`[ITEM INI]` marker replaced by a consistent **(This item.)** annotation. O'Hara's GM-1985 entry was aligned so the Glosten-Milgrom (1985) paper is now cited **identically** wherever it appears (previously three different forms).

**Documentation staleness:**
- **RESUME.md** — removed the stale "What's uncommitted" section + the stale last-commit/date header (tree is clean; suite is 5 harnesses / 705 checks).
- **STATUS.md** — added a HISTORICAL banner pointing to RESUME (its "no geothermal content / no Phase 1.7" claims were long superseded).
- **README.md** — settings-schema block corrected to the real `ai-config` shape (`enabled` / `maxRequestsPerMonth` / `usageThisMonth`, theme `'dark'`, cards as an object map, the `ui` namespace).
- **docs/ARCHITECTURE.md** — self-test binding (per-card via `bindSelfTestCard`, not document-level delegation); badge shows the confidence label (no timestamp); §3.10 export-privacy reworded for the `includeSettings=false` path; added a "deliberate deviation from canonical SM-2" note for the no-EF-penalty-on-lapse behavior (**DC2** — kept).
- **docs/PHASES.md** — corrected the stale "~40%" Roll-bias figure.
- **glossary.js** — removed the orphan `'stoll-model'` `seeAlso` reference (no such entry exists).

**DC3 (Roll slider):** relabeled "Latent-flow persistence ρ" (EN + ID) with an arcsine note in the viz description — the slider drives the *latent* AR(1), and the realized trade-sign autocorrelation is (2/π)·arcsin(ρ), so ŝ = s·|1−ρ| doesn't reproduce on screen. Simulator code unchanged (already verified correct).

**Polish + harness integrity:** removed a dead no-op ternary (`review.js`); replaced the S8 always-`true` placeholder with a real per-item id assertion; rewrote three R8 finite-or-NaN tautologies into real bias-direction/output-shape assertions; dropped a `+0.05` slack in B4 that let the asserted relation be violated. New `verify-app-logic.mjs` also gained a dangling-`seeAlso` guard.

Suite: 5 harnesses, all green.

---

## Audit Phase A.1 — Critical fixes (blockers + defects) + regression harness

**2026-05-30**

A 12-dimension multi-agent audit (read-only) over the whole project surfaced **48 real findings** — including taught-wrong content and runtime bugs the 683-check suite did not cover. Full deduplicated worklist: [notes/audit-findings-2026-05-30.md](notes/audit-findings-2026-05-30.md). (The auto-verify stage of the audit workflow dropped ~31 findings to StructuredOutput failures; they were recovered from the run journal, so the headline numbers in-run under-counted.) This entry lands the **blockers + defects**; citation normalization, doc-staleness, polish, and seed-card gaps follow in A.2+. Disputed public facts were web-verified before editing.

**Content blockers/defects (all 5 modules, EN + ID):**
- **GM martingale taught wrong [BLOCKER]** — the quote midpoint $(a_t+b_t)/2$ was stated to be a martingale; it is not off $\pi=0.5$. Corrected to $\mu_t = \pi_t V_H+(1-\pi_t)V_L$ (which the GM simulator + its own B8 check already treat as the martingale), in §3, the worked example, and self-test #2. Fixed the worked-example mid "100→103" (actual midpoint 102.75; 103 is $\mu_1$). Added a notation note ($\alpha$=informed fraction vs $\mu_t$=value expectation).
- **GM bio** — Glosten's chair corrected to "S. Sloan Colt Professor of Banking and International Finance (Emeritus)"; removed the false "AFA president (1999)" claim (1999 was Hans Stoll); PhD year 1981→1980.
- **Hasbrouck [BLOCKER]** — worked example applied Roll's estimator to *mid-price* changes; Roll needs *transaction-price* changes (bid-ask bounce). Title → "Professor of Business Administration".
- **Kyle** — $x^*{=}16$ reframed as the *expected*-profit maximizer (the realized $u{=}{-}3$ curve peaks at 17.5); marginal profit "$(v-p)-\lambda$" → "$(v-p)-\lambda x$"; "naive" benchmark de-collided; Kyle-Obizhaeva *Econometrica* 2011→2016; "served on the Brady Commission" → staff member.
- **O'Hara** — self-test #3 numbers realigned to the $\mu{=}0.2$ worked example (0.6/0.692/0.771, not the $\mu{=}0.1$ practice numbers); flagged $\mu$ as arrival-rate vs fraction in the PIN extension; "Microstructure in the Machine Age" marked as an RFS 2021 article, not a book.
- **Acuña** — diagnostic crossover $p_f{\approx}27$→22 bara (27 exceeded $p_{rg}{=}26$, impossible); practice #3 reframed (a uniform proportional drop in $C_{WB}$ and $PI$ yields **exactly** 20%, not "<20%"); affiliation split to match the bio (Chevron Geothermal 2005–2012, Chevron Technology 2012–2022); "silica scaling" → calcite (CaCO₃) per Hernawan-Situmorang 2013; 1995 title restored "...to the Study of...".

**Code blockers/defects:**
- **`mergeWithDefaults` dropped `settings.ui` [BLOCKER]** (`data/shared/ai-config.js`) — self-test confidence and author-card open-state were wiped on every load and every settings change. Now preserves `ui` (and any future namespace) and is idempotent; `ui` added to `defaultSettings()`.
- **Glossary detail crash [BLOCKER]** (`js/reference.js`) — `findRelatedCards` called `.toLowerCase()` on the bilingual `term.term` object (TypeError, broke the whole detail view) and See-also chips rendered `[object Object]`. Both now resolve the language form.
- **`save()` unguarded** (`js/storage.js`) — wrapped `setItem` in try/catch so a quota/unavailable error returns `false` instead of throwing mid SM-2 grade write.
- **`onItemSelect` async race** (`js/app.js`) — guard discards a stale dynamic-import result so one item's body can't render under another's header.
- **audio voice warm-up** (`js/audio.js`) — cache voices + listen for `voiceschanged` so the first narration honors the id-*/en-* preference (Chromium returns `[]` on first `getVoices()`).

**Verification:** new `scripts/verify-app-logic.mjs` (21 checks: settings.ui round-trip/idempotence, stripSensitive, save() resilience, glossary bilingual shape) + guarded the S4 word-count step against a missing body (uncaught TypeError → graceful skip). Full suite now **5 harnesses, 704 checks, all green**.

---

## Docs Audit — Adversarial factual-accuracy audit + fixes

**2026-05-29**

Ran a 6-dimension adversarial audit workflow over the freshly-rewritten documentation and the 5 content modules: a finder agent per dimension, then an independent skeptic per finding (default-to-reject) before any finding became a fix. 23 candidate findings → **20 confirmed real, 3 correctly rejected** as intentional design (optional `visualization` field, O'Hara affiliation byte-identity with no translatable connectors, Kyle ID formalization condensation per the ~65%-length authoring guideline). 19 of 20 confirmed findings fixed; 1 deferred for the user's judgment.

**HIGH severity fixes:**
- **Acuña worked-example output table had wrong interior values** (`data/domains/geothermal/content/acuna-2008.js`, both EN + ID tables) — stated W@8=36.7, W@12=34.4, W@18=29.2, but the live `solveAcunaW` at the documented defaults returns 37.8, 35.3, 29.3. The prose literally tells the reader to "use the interactive simulator to confirm," so the table was self-contradicting against the live component. Corrected to solver-exact values (39.7 / 37.8 / 35.3 / 29.3). AOF row (39.7) was already correct
- **README content-table word counts** — Hasbrouck was stated 1735/1170 (a stale Phase-1.3 figure); actual section-body totals are 2010/1829. Acuña was 3530/3221; actual 3583/3261 (the figure drifted after G1.2 edits). The other three rows (O'Hara, Kyle, GM) were correct, confirming the columns are genuine section-body counts

**MEDIUM severity fixes:**
- **Acuña "five years later" scenarios claimed "each producing approximately a 25% production drop"** — false. At the stated parameters the two scenarios produce *asymmetric* AOF drops (~38% for Scenario A, ~21% for Scenario B vs the pressure-declined p_rg=26 baseline). Rewrote the clause (EN + ID) to state the asymmetry explicitly — which is actually the diagnostic payoff the section is built around. (Note for review: an alternative fix is to re-tune the scenario parameters so both yield ~25%; the asymmetric-prose fix was chosen because it strengthens the diagnostic message)
- **Item count "23 catalog items"** — inconsistent with the actual set (14 microstructure + 10 geothermal = 24 total, 5 with rich content → 19 catalog-only). README "current state" → "catalog of 24 items"; RESUME → "19 catalog-only items (24 total)"
- **CHANGELOG anchor for the G1.2 skin bug** pointed at `js/viz.js#L351-L363` (the Eq-8 comment block) instead of the actual `solveAcunaW` skin code → corrected to `L375-L382`
- **docs/INDEX.md "10 markdown docs"** → 11 (off-by-one; INDEX's own tables list all 11)
- **Glosten-Milgrom applications section** was the sole content module missing the shared audience-funnel intro paragraph → added a GM-appropriate intro (EN + ID) matching the sibling pattern, keeping GM's intentional operations/risk third audience

**LOW severity fixes:**
- **Suite timing "~0.45s"** overstated ~2× at five doc locations (RESUME ×2, README ×2, ARCHITECTURE ×1) → corrected to "~0.2s" (measured 0.19–0.22s across runs). Also fixed a CHANGELOG claim that the Roll Monte Carlo "adds ~10s to the master run" (off by ~100×; the whole suite is ~0.2s)
- **README Roll-bias claim "~40%"** → "roughly 25–30% (about −32% at the default seed; ~−24% Monte Carlo mean)" — re-derived from the live `simulateRoll`
- **GM worked-example bid "around 100.4"** → exactly 100.0 (by the model's symmetry, P(V_H|sell) from π=0.65,α=0.3 is exactly 0.5, so the bid returns to the original mid). Added the one-line symmetry explanation. The ask "around 105.6" was tightened to 105.5 (actual 105.50)
- **docs/INDEX.md §3.9-3.10 link** text claimed a two-section span but the anchor only targeted 3.9 → split into two explicit anchors
- **Acuña ID formal connector** "oleh karena itu" → casual "jadi" (per the documented geothermal ID register; it was the only formal-register violation across all 5 modules)

**Deferred for user judgment (1):**
- **Citation formatting inconsistency** (D4-03/D4-04) — GM + Acuña use `*Venue* V(I), pp. A–B.` with en-dash + "pp." prefix; Hasbrouck/O'Hara/Kyle use `*Venue*, V(I), A-B.` with ASCII hyphen, no "pp." The same GM 1985 paper is even cited two different ways (in O'Hara vs in GM itself). Plus an inconsistent "[THIS ITEM]" source marker. Low severity, large mechanical edit surface across content files — left for a dedicated normalization pass rather than bundled into this audit

**Process note:** content edits to GM and Acuña changed their own word counts (GM 4009→4071/3728, Acuña 3583→3626/3298), so the README "current state" table was updated a second time to the post-edit values. Historical CHANGELOG/PHASES word-count entries were left at their per-phase values (proper changelog discipline — document corrections in a new entry, don't rewrite history). Re-ran the full suite after all edits: **683/683 checks still pass**, content-schema harness confirms no structural breakage.

---

## Docs Rehab — Comprehensive documentation refresh

**2026-05-29**

Major documentation refresh to reflect post-Phase-1.7 + post-G1.2 + post-infra-runs state. Goal: when Az returns to the project after a break, he can adapt quickly without re-deriving project state from git log.

**New:**
- `RESUME.md` (top-level) — fast-adaptation guide. 5-minute orientation snapshot covering: current state, what's uncommitted, what's pending Az's irreducible input, quick commands, time-budget paths (15 min / 90 min / 1 day / 1 week), key decisions to remember, common workflow patterns
- `docs/INDEX.md` — directory of all documentation. Map of every doc file with "when to read" guidance, plus "where to find specific things" reverse lookup table

**Rewritten:**
- `README.md` — comprehensive entry-point doc. Was outdated ("Currently at Phase 1.3", listed only Hasbrouck rich content, no mention of viz framework / audio / self-tests / verification harnesses). Now reflects: 5 rich content modules, 3 simulators with their helper exports, 4 verification harnesses (683 checks), all infrastructure, full file structure, daily-use guide, simulator descriptions, keyboard shortcuts, bilingual rendering, audio narration, self-tests, AI features, adding-content guide, development workflow, full documentation map

**Updated:**
- `docs/ARCHITECTURE.md`:
  - Section 1: file structure tree refreshed (added scripts/, notes/, RESUME.md, INDEX.md, all new content modules and js files)
  - Section 6: split into 6.1 ephemeral per-phase scripts vs 6.2 persistent harnesses; references the 683-check suite
  - Section 7 (NEW): Visualization framework architecture — COMPONENTS registry, helper export pattern, viz config schema, SVG-only rendering, sepia palette compliance
  - Section 8 (NEW): Audio + self-test infrastructure
  - Section 9 (renamed): Deferred decisions — updated to current state, added Acuña-specific items (ν_rg illustrative constant, diagnostic-signature crossover)

**Unchanged (still current):**
- `CHANGELOG.md` — preserves all phase entries
- `docs/PHASES.md` — preserves all detailed per-phase records
- `scripts/README.md` — preserves verification harness docs
- `data/domains/*/content/README.md` — preserves authoring guides
- `notes/g1-dogfood-prep-2026-05-28.md` — preserves Acuña dogfood prep artifact

**Rationale:** every doc that someone might open after a break is now current. The total doc surface (10 markdown files + 6 memory files) is mapped in `docs/INDEX.md`. The "what's next" answer is in `RESUME.md`. Architecture decisions are in `docs/ARCHITECTURE.md`. Phase history is in `docs/PHASES.md`. Authoring guides are in domain content/README.md files. Verification protocol is in `scripts/README.md`. Cross-references are bidirectional throughout.

The intent: anyone returning to the project opens `RESUME.md` → 5 minutes later is fully oriented and knows exactly what to do.

---

## Infra Post-1.7C — Content schema verification harness (all 5 modules)

**2026-05-28**

Fourth verification harness, covering structural integrity of every content module across both domains. Complements the three simulator harnesses (Acuña / GM / Roll) which test math/sim behavior; this one tests content schema.

**Added:**
- `scripts/verify-content-schema.mjs` — content schema harness. Auto-discovers `data/domains/*/content/*.js` and runs **414 checks** across:
  - S1 (5): itemId resolves in domain items.js
  - S2 (30): required top-level fields (estimatedReadMinutes, audio, sections, author, selfTest)
  - S3 (71): author block — 8 prose fields bilingual + keyWorks (≥4 with year/title/venue)
  - S4 (135): all 8 canonical sections + bilingual headings/bodies + word count thresholds (≥1500 EN, ≥1000 ID per module)
  - S5 (90): selfTest entries well-formed + bilingual + spans ≥3 distinct sections
  - S6 (18): viz component references resolve to registered components in js/viz.js
  - S7 (17): `item:` cross-references in body text resolve to real item ids
  - S8 (48): items.js prereqs resolve (cross-domain prereqs allowed) + no duplicate ids

**Coverage:** all 5 current content modules (hasbrouck-2007, ohara-1995, kyle-1985, glosten-milgrom-1985, acuna-2008). Auto-extends to new modules without harness modification.

**Total verification suite:**
- `verify-acuna-prep.mjs`: 96 checks (Acuña solver)
- `verify-content-schema.mjs`: 414 checks (content schema, all modules)
- `verify-gm-sim.mjs`: 143 checks (GM Bayesian sim)
- `verify-roll-sim.mjs`: 30 checks (Roll spread sim)
- **Master: 683 total checks across 4 harnesses, runs in ~0.2s**

```bash
node scripts/verify-all.mjs --quiet
# === Master: 4/4 scripts pass ===
```

**Why this matters:** content schema bugs (missing bilingual fields, broken cross-references, unregistered viz components) are easy to introduce during authoring and hard to catch by hand. The harness catches them at edit time rather than at user-facing render time. Anything that breaks the schema surfaces immediately.

---

## Infra Post-1.7B — Roll spread simulator verification harness (complete sim parity)

**2026-05-28**

Final infrastructure parity step: Roll (1984) spread simulator now has the same persistent verification coverage Acuña and GM got in prior infra commits. All three simulators (Acuña deliverability, GM Bayesian, Roll spread) now have re-runnable test harnesses.

**Refactored:**
- Extracted simulation logic from inline component into `simulateRoll({ s, rho, nSamples, seed, sigmaM })` function in `js/viz.js`. Returns `{p, dp, q, m, cov, rollEstimate, biasPct}`. Same pattern established by `solveAcunaW` and `simulateGM`. Roll component now calls the extracted function — visual behavior unchanged
- `simulateRoll` added to viz.js exports for testability

**Added:**
- `scripts/verify-roll-sim.mjs` — Roll harness. **30 checks** across:
  - R1 (9): Structural — output shape, q ∈ {-1,+1}, p = m + (s/2)·q identity, dp identity
  - R2 (4): Roll estimator approximately unbiased at ρ=0 (Monte Carlo across 3 spread values × 60 seeds × 2000 samples)
  - R3 (3): Theoretical Cov(Δp_t, Δp_{t-1}) ≈ -(s/2)² at ρ=0 — Roll's central theoretical claim
  - R4 (3): ρ > 0 produces downward-biased Roll estimate (informed-trader-like autocorrelation attenuates the negative cov)
  - R5 (2): ρ < 0 produces upward-biased Roll estimate (anti-correlated trades reinforce bid-ask bounce)
  - R6 (2): Variance shrinks with sample size (approximately 1/√n)
  - R7 (3): Determinism + different seeds diverge
  - R8 (4): Boundary behavior (small s, s=0, |ρ| near slider edges)

**Total verification coverage:**
- `verify-acuna-prep.mjs`: 96 checks
- `verify-gm-sim.mjs`: 143 checks
- `verify-roll-sim.mjs`: 30 checks
- **Master: 269 total checks across 3 simulators**

```bash
node scripts/verify-all.mjs --quiet
# === Master: 3/3 scripts pass ===
```

Statistical-test note: Roll is inherently random, so unlike Acuña (deterministic closed-form) or GM (deterministic Bayesian updates), the Roll harness uses Monte Carlo with loose tolerance — `E[Roll estimate] ≈ s` not exact equality. The 60-seed × 2000-sample Monte Carlo runs are the dominant cost of the Roll harness (~0.1s) but the full suite still completes in ~0.2s.

---

## Infra Post-1.7 — Persistent Glosten-Milgrom verification harness + master runner

**2026-05-28**

Infrastructure parity: GM simulator now has the same persistent verification coverage Acuña got in the prior infra commit. Plus a master runner.

**Added:**
- `scripts/verify-gm-sim.mjs` — persistent harness verifying GM helpers (`gmAsk`, `gmBid`, `gmPosteriorOnBuy`, `gmPosteriorOnSell`, `simulateGM`) against closed-form theory from the 1985 paper. **143 checks** across:
  - B1 (64): Posterior formulas at default + α/π boundaries + Bayesian directional sanity
  - B2 (33): Quote formulas + α=0/α=1 boundaries + no-arbitrage (ask ≥ bid across param grid)
  - B3 (26): Spread formula s = α(V_H - V_L) + boundary regimes + spread maximal at π=0.5
  - B4 (3): Convergence to truth (mean across 30 seeds × 300 trades) + higher α converges faster
  - B5 (3): Spread shrinkage over trade sequence
  - B6 (2): Determinism + different seeds diverge
  - B7 (4): Boundary behavior (π=0/1 absorbing, α=0/1 instant)
  - B8 (8): Martingale property E[μ_{t+1} | F_t] = μ_t — corrected to test the actual GM martingale (μ_t = π_t·V_H + (1-π_t)·V_L), NOT the (ask+bid)/2 mid. The (a+b)/2 mid equals μ_t only at π=0.5 by symmetry; B8 explicitly tests both the martingale AND the (a+b)/2 ≠ μ asymmetry as a sanity check on the model
- `scripts/verify-all.mjs` — master runner. Auto-discovers and runs every `verify-*.mjs` script. Forwards `--quiet` to each. Exit code 0 iff all scripts pass
- `scripts/README.md` updated with full coverage docs + maintenance protocol

**Verification:** 96 + 143 = 239 total checks across both simulators. Master runner shows 2/2 scripts pass.

**Bugs caught during authoring:** initial test authoring contained two of my own arithmetic / theoretical errors that the verification surfaced:
- B2: at V_H=50, V_L=40, π=0.5, α=0.3, I expected ask=51.5/bid=48.5 (wrong) — actual is ask=46.5/bid=43.5. The solver was right; my expected values were wrong arithmetic.
- B8: I initially tested martingale property on (ask+bid)/2 mid, which is NOT a martingale in general. Corrected to test the true GM martingale (posterior expectation μ_t = π_t·V_H + (1-π_t)·V_L). Lesson preserved in B8 with an explicit asymmetry test.

Catching authoring bugs in test code is exactly what persistent verification is for. Better here than in production solver.

**Usage:**
```bash
node scripts/verify-all.mjs          # all 239 checks
node scripts/verify-gm-sim.mjs       # GM only
node scripts/verify-acuna-prep.mjs --section A5  # filter to one section
```

---

## Infra G1.2-post — Persistent Acuña verification harness + prep file post-fix updates

**2026-05-28**

Pure infrastructure work, no functional change. Replaces the ephemeral `node -e` inline verification pattern with a re-runnable script committed to the repo.

**Added:**
- `scripts/verify-acuna-prep.mjs` — persistent verification harness. 96 numerical checks across the live solver vs every claim in [notes/g1-dogfood-prep-2026-05-28.md](notes/g1-dogfood-prep-2026-05-28.md) Sections A1-A9. Includes baseline curve monotonicity, parameter sensitivity (P_rg / C_WB / PI / skin), Scenario A vs B diagnostic signatures, A7 crossover P_f recompute, edge case + NaN-resistance sweep (243-point parameter grid), Wayang Windu sanity benchmark
- `scripts/README.md` — directory README explaining the script + maintenance protocol
- Supports `--quiet` (only print failures) and `--section <name>` (filter to one section) flags
- Proper exit codes: 0 all pass / 1 any fail. Ready for CI / pre-commit hooks if needed

**Updated:**
- `notes/g1-dogfood-prep-2026-05-28.md` — Section A5 replaced with post-G1.2 verified table (added "regime" column for operational interpretation, documented what changed). Section A8 updated with post-fix edge case values. Section D1 + D2 marked ✅ FIXED in commit f24dace. Section G reference summary updated. Header version-stamped v2 with verification note

**Verification:** 96/96 checks pass against live solver. Run `node scripts/verify-acuna-prep.mjs` anytime to confirm solver still matches the prep file claims.

**Rationale:** the prep file is now the source-of-truth for "what the simulator should do at default params" and the harness keeps it auditable across future patches. Anything that breaks A1-A9 will surface immediately via the script rather than requiring fresh inline verification.

---

## Phase G1.2 — Acuña solver bug fix + worked-example diagnostic hedge

**2026-05-28**

Two objective findings from the G1 dogfood preparation artifact applied. Both derived programmatically (not from Az's tacit knowledge — those evaluations remain Az's domain). No structural rewrite, single-commit patch.

**Fixed:**
- **Negative skin bug in `solveAcunaW`** ([js/viz.js:375-382](js/viz.js#L375-L382)) — pre-G1.2 implementation used `PI_eff = PI / (1 + Math.max(0, skin) / Math.log(1000))`, which (a) was a simplified approximation rather than the paper's exact Eq 6, and (b) silently clamped S<0 to S=0, preventing the slider from modeling stimulated wells. Post-G1.2 uses the exact Acuña Eq 6: `PI_eff = PI * (ln(r_e/r_w) - 0.5) / (ln(r_e/r_w) - 0.5 + S)` with S clamped to >= -(skinDenom - 0.5) ≈ -5.9 to prevent PI_eff blow-up at extreme stimulation. Verified: S=-3 now gives AOF +16.8% (was 0% pre-fix), monotonicity holds across S in [-5, 15], S=0 still matches baseline 39.65 kg/s exactly
- **Worked-example diagnostic-signature claim hedge** in `data/domains/geothermal/content/acuna-2008.js` — added paragraph (EN + ID) acknowledging that with the illustrative ν_rg=5 constant, the Scenario-A-vs-Scenario-B relative-drop crossover happens at p_f ≈ 27 bara (very near p_rg=30), meaning in the operational p_f range of 8-18 bara, wellbore-problem effects dominate at both ends of the curve. The diagnostic distinction is real but its operational visibility is sharpest when deliverability tests span up to the high-p_f tail near p_rg. Lesson for practitioners: test design matters — moderate-throttle-only sample points may underestimate formation-side decline

**Background:**
G1.2 was triggered by Az's "perfect, no mistakes" directive after committing Phase 1.7 and starting his Acuña dogfood. The two fixes here came from `notes/g1-dogfood-prep-2026-05-28.md` Section A (programmatic solver characterization) and Section D1/D2 (concrete patch list). The preparation artifact identified the skin bug from A5 sensitivity table and the crossover finding from A7. Both are objective programmatic findings that don't require Az's tacit Darajat knowledge to validate.

**Bilingual discipline preserved:**
Both fixes applied to EN + ID layers in parallel. Word counts: 3583 EN + 3261 ID (was 3472 + 3167 post-G1.1) — additional hedge prose added ~111 EN + 94 ID words.

**Regression clean:**
22 behavioral checks pass. Prior content (Hasbrouck, O'Hara, Kyle, GM) still loads. Acuña solver baseline curve at S=0 unchanged (P_f=0 → 39.65, P_f=8 → 37.76, P_f=18 → 29.29). GM sim still converges. All three viz components (Roll, Acuña, GM) registered.

**Az's PARTIAL evaluation items remain open:**
- Acuña dogfood with real Darajat well data (operational intuition match) — still requires Az's tacit knowledge
- ID layer native-quality review of full body text — still requires Az's native judgment
- Self-test pedagogical evaluation (ST1-ST4) — Az still needs to take each one honestly
- The notes/g1-dogfood-prep-2026-05-28.md artifact remains the canonical scaffold for the eventual dogfood

---

## Phase 1.7 — Glosten-Milgrom 1985 content + Bayesian-update simulator

**2026-05-27**

Fourth template-quality content item. Completes the 1985 theoretical-foundation pairing alongside Kyle 1985 (Glosten-Milgrom = sequential trade with Bayesian-MM, Kyle = batch auction with strategic insider — pedagogically complementary). Quality gate: 78/78 verification pass.

**Added:**
- `data/domains/microstructure/content/glosten-milgrom-1985.js` — Glosten & Milgrom (1985 JFE) "Bid, Ask and Transaction Prices in a Specialist Market with Heterogeneously Informed Traders" full content. 4009 EN words + 3673 ID words across 8 canonical sections
- Author block: 8 prose fields populated EN + ID for both co-authors. Lawrence Glosten — Columbia Business School Berner Professor of Finance (joined 1989, past AFA president 1999), Northwestern Kellogg PhD 1981. Paul Milgrom — Stanford economics (joined 1987), Stanford PhD 1979 under Robert Wilson, Nobel laureate 2020 (jointly with Wilson) for auction theory. The 1985 collaboration was when both were at Northwestern Kellogg in their early careers
- 4 keyWorks: Glosten-Milgrom 1985 JFE (this item), Glosten-Harris 1988 JFE (empirical spread decomposition companion), Milgrom-Stokey 1982 JET (no-trade theorem), Glosten 1994 JF (electronic LOB)
- Formalization section: full Bayesian derivation. Quote formulas as conditional expectations. Posterior update rules (buy: `π(1+α)/[π(1+α)+(1-π)(1-α)]`, sell symmetric). Closed-form spread `s = α(V_H - V_L) · [4π(1-π)/...]` showing spread is maximal at π=0.5 and vanishes at the boundaries. Martingale property of mid-prices. Convergence to truth almost surely. Akerlof market-breakdown analog at α=1
- Worked example with embedded `GlostenMilgromBayesianSim`: numerical run from V_H=110, V_L=90, π_0=0.5, α=0.3 producing opening ask=103, bid=97, spread=6 (matches paper Eq exactly: α(V_H-V_L) = 0.3·20 = 6). Walk-through of belief evolution under buy/sell sequences
- Applications: 3 personas with audience-tailored treatment. Advanced researcher: PIN/VPIN lineage (Easley-O'Hara 1992 → EKOP 1996 → VPIN 2012), Madhavan-Richardson-Roomans 1997 combined decomposition, Glosten 1994 electronic LOB. Quant practitioner: liquidity-provider Bayesian quote intuition for HFT inventory algorithms, liquidity-taker information rent + child-order leakage. Operations/risk: spread P&L as information rent (not free intermediation revenue), gross-vs-net decomposition, capital-allocation argument
- Practice: 4 problems — quote computation, belief evolution under 3 buys at two α values, market-breakdown proof at α=1, same-opening-spread different-convergence-rate comparison
- 4 self-tests: spread-vanishing two-mechanism puzzle (α→0 vs π→{0,1}), martingale-vs-direction apparent contradiction, simulator paradox at high α, market-maker desk capital-allocation scenario based on observed P&L decomposition
- Audio enabled, 6 inter-item links (O'Hara 1995 prereq + Kyle 1985 sibling + builds-toward PIN/VPIN/Glosten-Harris/MRR/Glosten 1994 + related-to Hasbrouck + Akerlof predecessor + Milgrom-Stokey adjacent)
- `js/viz.js` — `GlostenMilgromBayesianSim` component. Seven controls: α slider (0.05-0.95), V_H/V_L sliders, π_0 slider, true state dropdown (H/L), nTrades slider (10-100), regenerate button advancing seed. Two-panel SVG render: top panel shows posterior π_t evolution with dashed truth line; bottom panel shows ask/mid/bid traces with trade-direction triangle markers (blue for buy, red for sell). Legend + readouts (opening spread, final spread, final π)
- Helper exports for testing: `gmPosteriorOnBuy`, `gmPosteriorOnSell`, `gmAsk`, `gmBid`, `simulateGM` — all callable for verification

**Math sanity confirmed:**
- π posterior at default params (π=0.5, α=0.3): 0.65 on buy / 0.35 on sell — matches paper
- Quotes at V_H=110, V_L=90, π=0.5, α=0.3: ask=103, bid=97, spread=6 — matches paper Eq exactly
- α=1 limit: ask=V_H, bid=V_L regardless of π — market-breakdown condition confirmed
- α=0 limit: ask=bid=prior expectation — no information asymmetry confirmed
- Convergence at 200 trades (true=H, α=0.3, seed=42): π → 1.000, spread → 0.000 — almost-sure convergence theorem confirmed empirically
- Mirror at true=L: π → 0.000 — symmetric convergence confirmed
- Determinism: same seed produces identical pi/ask/bid traces — verified

**Four template items complete (Hasbrouck + O'Hara + Kyle + Glosten-Milgrom).** 1985 theoretical-foundation pair (Kyle + GM) now both have rich content. PIN/VPIN extensions and Cont-Kukanov-Stoikov OFI are the next natural candidates per roadmap.

**Verification:** 78 acceptance checks pass — schema completeness (8 sections, bilingual everywhere, 8 author fields + 4 keyWorks), word counts (4009 EN ≥ 2000, 3673 ID ≥ 1500), formalization content (Bayes + Akerlof + martingale references, spread formula present), viz component registration + helper exports, math sanity at default + boundary parameters (α∈{0, 0.3, 1}), convergence properties (true=H/L both converge after 200 trades), determinism, ID layer tone calibration ("kalau", "tapi", "pake" present + English technical terms preserved), regression on prior content (Hasbrouck, O'Hara, Kyle, Acuña 2008 all still load + Acuña solver still works).

---

## Phase G1.1 — Acuña content technical-review fixes (Az review)

**2026-05-25**

Patch applying expert review feedback from Az on Phase G1 content. Five localized fixes, no scope change. Math rigor + operational-claim hedging.

**Fixed:**
- **Gravity correction notation in formalization** (medium-high): replaced shorthand `p_wfg = p_wf - ρgH/2` with paper's explicit form `p_wfg = p_wf - (CgH/2)(p_wf + p_f)`. The `(p_wf + p_f)/2` factor is the average column pressure, which combined with `ρ ≈ Cp` gives the average column density — mathematically precise rather than leaving ρ ambiguous. Added the worked numerical check `CgH = (5.017×10⁻⁶)(9.806)(2000) ≈ 0.098` inline
- **15% drift threshold operational claim** (medium): three occurrences in applications + operations team paragraph + self-test #4 hedged from specific "15%" to "field-tuned thresholds in the 10–20% over 90 days range, with the specific cutoff calibrated against the field's measurement noise floor and the operations team's investigation capacity". Removes unverifiable authority-without-substance
- **70–80% post-cleanout C_WB recovery claim** (medium): two occurrences hedged. In worked-example: "expected post-cleanout C_WB recovery dependent on scaling type and intervention method — acid stimulation often achieves near-baseline recovery for solution-removable deposits like calcite; mechanical cleanout effectiveness varies more". In operations team: "successful job defined by the field's own pre-intervention target — typically a meaningful fraction of the baseline gap closed, with the specific number agreed upfront between RE and operations"
- **"Upper tubulars" → "production tubulars"** (minor): scaling location depends on field conditions and downhole video diagnosis; removed presupposition. Two occurrences (worked-example Scenario A + Practice problem 2)
- **C_WB √2 footnote direction sharpening** (minor): replaced ambiguous "differs by factor √2" with explicit ratio `C_WB^(2010) = C_WB^(2008) / √2` — i.e., the 2010 form is smaller by factor √2

**Reasoning preserved:**
- All fixes were single-line edits localized to specific passages — no structural rewrite
- ID layer updated in parallel with EN for each fix (parallel-bilingual discipline)
- Word counts now 3472 EN + 3167 ID (was 3351 + 3055) — both still well above thresholds (≥1500 EN, ≥1000 ID)
- Regression: all prior content (Hasbrouck, O'Hara, Kyle), geothermal items.js, and viz.js solver still load identically. Solver baseline AOF still 39.65 kg/s

**Az's PARTIAL evaluations carried forward as open:**
- ID layer quality across full content (requires Az to toggle and spot-check formalization/intuition/practice sections)
- Simulator UX validation (slider responsiveness, diagnostic mode visual clarity, edge cases — requires browser interaction)
- Star Energy Darajat-specific operational practice accuracy (the hedged thresholds in G1.1 may still benefit from Az's tacit-knowledge correction once he reviews)

These remain Az's domain by design.

---

## Phase G1 — Acuña 2008 dry steam deliverability content + simulator

**2026-05-24**

First geothermal domain content item, authored from primary sources (user provided Acuña-Pasaribu 2010 paper text directly). Quality gate: 121/121 verification pass. Marks geothermal domain's transition from items-only catalog to template-quality rich content with interactive visualization.

**Added:**
- `data/domains/geothermal/content/README.md` — geothermal-specific authoring guide. Tone calibration for Indonesian reservoir engineering register (technical terms stay English; "kalau" not "jika", "tapi" not "namun", "pake" not "menggunakan"). Three-persona framing adapted: advanced researcher (R&D engineer) / quant practitioner (field reservoir engineer) / retail (operations team). Math notation tips for `bara`, `kg/s`, gravity-corrected pressure conventions
- `data/domains/geothermal/content/acuna-2008.js` — Acuña (2008 GRC) "A New Understanding of Deliverability of Dry Steam Wells" full content. 3351 EN words + 3055 ID words across 8 canonical sections
- Author block: 8 prose fields populated EN + ID. Bio verified — J. Acuna Consulting Houston (2022–), formerly Chevron Geothermal and Power 2005–2012 + Chevron Technology Company 2012–2022 unconventional. USC PhD 1993 with Y.C. Yortsos on fractal networks of fractures. Field training at Miravalles, Costa Rica (1984–1988) before doctoral work
- 4 keyWorks: Acuña-Yortsos 1995 fractal fractures WRR, Acuña 2008 GRC Best Paper, Acuña-Stimac 2008 Awibengkok Geothermics, Acuña-Pasaribu 2010 WGC Bali decline analysis
- Formalization section: full derivation of Acuña's deliverability framework. Wellbore equation $W = C_{WB} \sqrt{p_{wfg}^2 - p_f^2}$. Reservoir equation $W = (PI/\nu_{rg})(p_{rg}^2 - p_{wfg}^2)$. Combined implicit form, then closed-form quadratic solution $W = (-B + \sqrt{B^2 + 4 C_{WB}^2 (p_{rg}^2 - p_f^2)})/2$ where $B = C_{WB}^2 \nu_{rg}/PI$. Notes 2010 paper's $C_{WB}$ definition differs from 2008 by $\sqrt{2}$ factor; 2010 form is canonical
- Worked example with embedded `AcunaDeliverabilitySim`: Darajat-typical well, default $p_{rg}=30$ bara, $C_{WB}=1.85$ kg/(s·bar), $PI=0.45$, $S=0$. Output curve table (AOF=39.7 kg/s, $W$@8=36.7, $W$@12=34.4, $W$@18=29.2). Scenario A ($C_{WB} \times 0.5$, wellbore problem) vs Scenario B ($PI \times 0.6$, formation problem) walked through with operational decision-tree implications
- Applications: 3 personas with geothermal-specific treatment. Advanced researcher: Acuña-Pasaribu 2010 time-series extension, TOUGH2/iTOUGH2 simulator calibration, PTA complementarity, fractal-aware RTA. Field reservoir engineer: monthly Acuña-fit workflow, scaling cross-reference with sample catcher, workover capex allocation. Operations team: dashboard surveillance, post-workover success measurement, fleet-level steam-supply integration
- Practice: 4 problems — wellbore-equation arithmetic, attribution between $p_{rg}$ vs $C_{WB}$ vs $PI$ drift, sub-additivity proof, regression exercise on real production data
- 4 self-tests: high-flow vs low-flow signatures (intuition), square-root derivation from compressible-flow physics (formalization), cross-evidence beyond production data (worked-example), 49-well surveillance pipeline design (applications)
- Audio enabled, 5 inter-item links (Grant-Bixley 2011 prereq; O'Sullivan-Pruess-Lippmann 2001 simulator context; future Acuña-Pasaribu 2010, Hernawan-Situmorang 2013, Acuña-Stimac 2008)
- `data/domains/geothermal/items.js` — `acuna-2008` entry added with `phase: 'production'`, `system_type: 'DRY_STEAM'`, prereqs `['grant-bixley-2011']`, GRC Best Paper Award 2008 notation, Indonesian + Philippine field application context
- `js/viz.js` — `AcunaDeliverabilitySim` component. Five controls: $p_{rg}$ (15–40 bara), $C_{WB}$ (0.4–2.5 kg/s·bar), $PI$ (0.15–0.80 normalized), `skin` (-3 to 15), diagnostic mode checkbox. SVG renders $W$-vs-$P_f$ curve from closed-form Eq 8 (no iteration). Diagnostic mode overlays baseline + Scenario A (red, $C_{WB} \times 0.5$) + Scenario B (orange, $PI \times 0.6$) with legend showing AOF for each. Kinematic viscosity $\nu_{rg} = 5.0$ illustrative constant chosen for visible signatures
- `solveAcunaW(p_rg, p_f, C_WB, PI, skin)` exported for testing — closed-form quadratic solver

**Domain-expert framing:** content frames operational claims conservatively. "Common practice at Indonesian dry steam fields" rather than asserting specific Darajat workflows from general knowledge. Cites published application papers (Hernawan-Situmorang 2013 Wayang Windu, Acuña-Stimac 2008 Awibengkok) rather than confidential field-specific practice. Numerical examples plausible for Indonesian dry steam (reservoir pressure 20–35 bara, wellhead 8–18 bara, mass flow 30–80 kg/s per well).

**First geothermal item — Az's domain.** All other geothermal items (Stober-Bucher, Cumming, Grant-Bixley, O'Sullivan-Pruess-Lippmann, DiPippo, Bjornsson-Bodvarsson, Henley-Truesdell-Barton, Arnorsson, Tester-MIT) remain catalog-only entries. Az is the Reservoir & Production Engineer at Star Energy Geothermal Darajat — geothermal content scaling will be co-authored or Az-authored, not autonomous.

**Verification:** 121 acceptance checks pass — item schema, content schema (8 sections, bilingual everywhere), author block completeness (8 fields + ≥4 keyWorks), word counts (3351 EN ≥ 1500, 3055 ID ≥ 1000), self-test structure (4 entries spanning 4 distinct sections), viz component registration, solver sanity (AOF 30–45 kg/s at default; A drops 41% > B drops 19% at AOF; A relative drop SHRINKS at high $p_f$ while B relative drop GROWS — diagnostic signature mathematically confirmed), ID layer tone calibration ("kalau", "tapi", "pake" present + English technical terms preserved), regression on prior microstructure content (Hasbrouck, O'Hara, Kyle still load).

---

## Phase 1.6 — Kyle 1985 content

**2026-05-24**

Third template item authored. Quality gate: 29/29 verification pass.

**Added:**
- `data/domains/microstructure/content/kyle-1985.js` — Kyle (1985) "Continuous Auctions and Insider Trading" full content
- 2521 EN words + 2211 ID words across 8 canonical sections
- 8 author prose fields populated EN + ID; 4 keyWorks (Kyle 1985 Econometrica + Kyle 1989 + Campbell-Kyle 1993 + Kyle-Obizhaeva 2011)
- Author bio verified via UMD Smith School faculty page fetch: PhD University of Chicago Economics 1981, Distinguished University Professor + Charles E. Smith Chair in Finance at Maryland (since 2006), Brady Commission 1987, SEC/CFTC/DOJ consulting
- Formalization section: full Kyle 1985 single-period derivation. Three-step structure — insider optimization given λ → MM optimization given β → fixed-point solve. Closed-form result $\lambda = \sqrt{\Sigma_0}/(2\sigma_u)$, $\beta = \sigma_u/\sqrt{\Sigma_0}$, market depth $D = 1/\lambda$. Information leakage ratio (half) derived
- Worked example: numerical Kyle equilibrium with $p_0 = 100$, $\Sigma_0 = 25$, $\sigma_u = 10$, $v = 108$, $u = -3$ — walk-through to insider's $76 realized profit. Two sanity checks (naive vs over-trade) showing strategic equilibrium is the precise top of the profit curve
- Applications: 3 personas with persona-specific Kyle treatment. Advanced researcher: Back 1992 continuous-time, Foster-Viswanathan multi-insider, Kyle-Obizhaeva invariance. Quant practitioner: λ estimation across crypto perpetuals, regime detection, market-impact calibration for execution algorithms. Retail: stealth liquidity intuition
- Practice: 4 problems including λ computation, σ_u sensitivity, naive-vs-optimal trading explanation, half-variance leakage + Foster-Viswanathan extension
- 4 self-tests targeting Kyle-specific intuitions: optimal trade is half naive; trace λ formula meaning; counterintuitive σ_u sensitivity; cross-asset λ regime signal design
- 5 inter-item links (O'Hara, Glosten-Milgrom, Hasbrouck, Cont-Kukanov-Stoikov, VPIN)

**Phase 1.6 is the third template item** — three template-quality content pieces complete (Hasbrouck, O'Hara, Kyle). Pattern is now battle-tested across empirical methodology (Hasbrouck), theoretical synthesis (O'Hara), and strategic theory (Kyle). Subsequent content authoring can follow this template.

**Verification:** 29 acceptance checks pass — schema completeness, math content (lambda formula, boxed result), word counts (2521 EN), bilingual completeness, persona ordering, inter-item links, practice + self-test structure, audio enabled, regression on Hasbrouck + O'Hara.

---

## Phase 1.5 — Audio narration + self-test infrastructure

**2026-05-24**

Two UX-enhancement infra pieces shipped together. Quality gate: 31/31 verification pass.

**Added:**
- `js/audio.js` — Web Speech API wrapper with single global player. `speak(text, lang, button)`, `togglePause(button)`, `stopAll()`, `isPlayingButton(button)`, `markdownToSpeech(text)`, `isAudioAvailable()`
- Voice selection: prefers voices matching language (en or id), falls back to system default
- Math (block + inline) replaced with "equation" placeholder when read aloud
- Markdown stripping: bold/italic/code/links → plain text; bullets → period pauses; HTML pass-through tags preserved as visible text
- Section audio play button (▶ / ⏸ / ⏹) rendered next to each h3 heading when `content.audio.enabled !== false`
- Stops audio on item switch / Library back
- `js/self-test.js` — self-test card schema + render + bind helpers. `renderSelfTestCard(entry, itemId, lang, currentConfidence)`, `bindSelfTestCard(root, onRate)`, `getConfidence(state, key)`, `setConfidence(state, key, value)`
- Confidence storage: `state.settings.ui.selfTestConfidence` keyed by `<itemId>::<sectionId>` with `{value, ts}`
- 3 confidence levels: `got-it` (green) / `mostly` (gold) / `need-review` (rose)
- Self-test card UI: collapsible <details>, optional hint sub-collapsible, optional textarea for attempt, reveal-answer button, post-reveal answer + confidence row
- Schema extension: `CONTENT.selfTest = [{sectionId, question{en,id}, prompt{en,id}, hint{en,id}, answer{en,id}}]`
- 4 self-test entries authored for Hasbrouck (intuition, formalization, worked-example, applications) — EN + ID
- 4 self-test entries authored for O'Hara (intuition, formalization, worked-example, applications) — EN + ID
- `.section-audio-btn`, `.self-test-card`, `.self-test-summary`, `.self-test-body`, `.self-test-question`, `.self-test-hint`, `.self-test-textarea`, `.self-test-reveal-btn`, `.self-test-answer`, `.self-test-confidence-row`, `.self-test-conf-btn`, `.self-test-conf-badge` styling — sepia palette respected

**Privacy:**
- Audio is browser TTS only — no recording, no upload, zero outbound network
- Confidence ratings stored in localStorage only

**Architectural pattern:** both new modules are opt-in via content schema fields (`audio.enabled`, `selfTest[]`). Items without selfTest entries render normally; items with audio disabled don't show play buttons.

**Verification:** 31 acceptance checks pass — module exports, TTS markdown stripping (5 transformations), self-test render structure (EN + ID labels), confidence round-trip, Hasbrouck + O'Hara self-test completeness (bilingual question + answer per entry), audio enabled, regression on prior viz + content.

---

## Phase 1.4 — Visualization infrastructure + Roll simulator + O'Hara content

**2026-05-24**

End-to-end autonomous execution. Quality gate: 27/27 verification pass.

**Added:**
- `js/viz.js` — visualization framework with `COMPONENTS` registry, `registerComponent()`, `renderVisualization()`, helper utilities (`makeRng` seeded Mulberry32, `makeGaussian` Box-Muller from RNG, `lerp`)
- `RollSpreadSim` component — interactive SVG simulator with 3 controls (s, ρ, n samples) + regenerate seed button. Generates AR(1) trade direction series, computes synthetic prices, sample lag-1 autocovariance, Roll estimate. Side-by-side bar chart shows Roll vs true s with bias percentage annotation. Visual proof of Practice problem 3 (Roll underestimates under positive autocorrelation).
- Schema extension: `section.visualization` field (component name + bilingual title + description + defaultParams + height)
- Viz mount + render integration in `js/library.js` after each section's content body
- `.viz-container`, `.viz-controls`, `.viz-canvas`, `.viz-readout`, `.viz-control-row`, `.viz-control-value`, `.viz-regen-btn`, `.viz-reset-btn`, `.viz-svg`, `.viz-error` styling — sepia palette, mobile breakpoint
- O'Hara (1995) full content authored: 2079 words EN + 1847 words ID across 8 canonical sections, 8 author prose fields, 5 keyWorks
- Roll simulator embedded in Hasbrouck worked-example section

**Author bio verification:** O'Hara bio verified via Cornell SC Johnson faculty page fetch. PhD Northwestern Kellogg 1979, Robert W. Purcell Professor at Cornell Johnson, past president of AFA + Western FA + Financial Management Association, executive editor Review of Financial Studies, books include *Market Microstructure Theory* (1995), *High Frequency Trading* (2013), *Something for Nothing* (2016).

**O'Hara content focus:** information-asymmetry theoretical scaffolding as complement to Hasbrouck's empirical lens. Glosten-Milgrom Bayesian quote update derivation, PIN extension. Worked example with explicit Bayesian update walkthrough. Applications section: theoretical extensions (HF + crypto + fragmented markets) for advanced, PIN/VPIN deployment + cross-asset for quant, "every trade is a signal" intuition for retail.

**Architectural pattern:** visualizations are component-name references in content schema, not inline JS — same opt-in pattern as `systemTypes` and `aiCapabilities`. Components register themselves in `viz.js`. Adding a new viz: register component + add `section.visualization` config in content module. No view changes needed.

**Verification:** 27 Phase 1.4 acceptance checks pass. Math content preserved across both languages (KaTeX language-agnostic). Persona ordering convention preserved (advanced → quant → retail).

---

## Phase 1.3 — Bilingual EN/ID toggle + Hasbrouck ID layer + glossary bilingual

**`72a0311` · 2026-05-24**

End-to-end bilingual support shipped.

**Added:**
- `EN | ID` language toggle pills in topbar chrome (between domain switcher and view tabs)
- `state.settings.appearance.language` persistence with `en` default
- `AVAILABLE_LANGUAGES` + `DEFAULT_LANGUAGE` in `data/shared/ai-config.js`
- `pickLang(field, lang)` helper in library.js + reference.js returning `{text, fellBack}`
- Per-field fallback notice: "ID belum tersedia — menampilkan English" rendered above sections/fields when `field[lang]` is empty
- Hasbrouck content full ID layer (1170 prose words across 8 sections + 8 author fields)
- Glossary bilingual migration: schema `{term, definition}` → `{term: {en,id}, definition: {en,id}}` for all 32 microstructure terms
- Indonesian summary labels for practice answer collapsibles ("Jawaban" instead of "Answer")

**Changed:**
- `js/library.js` `renderItemContentHTML` + `renderAuthorCardHTML` thread `lang` parameter
- `js/reference.js` glossary list, detail, and search filter all lang-aware
- `js/app.js` `render()` computes current `lang`, threads to view deps; `renderLanguageToggle()` added

**Preserved:**
- Math formulas (KaTeX language-agnostic, unchanged across translation)
- `[text](item:id)` inter-item links
- `<details>/<summary>` markdown structure
- `### subsection` markers in applications section
- All Phase 0/1.1/1.2/1.2.5 functionality

**Authoring tone:** conversational Indonesian with code-switching to English for technical vocabulary (efficient price, bid-ask bounce, martingale, autocovariance, informed trader, etc.). Casual register markers: "tapi" not "tetapi", "jadi" not "oleh karena itu", "kalau" not "jika".

**Verification:** 29 Phase 1.3 checks + 18 regression = 47/47 pass.

---

## Phase 1.2.5 — Content revisions + sepia reader theme

Split into two commits for bisectability (content vs aesthetic separable).

### Phase 1.2.5B — Sepia reader theme + justified typography

**`e112c8a` · 2026-05-24**

**Changed:**
- Dark theme replaced with sepia/cream reader aesthetic
- Page bg `#f0e6c8` (warm cream paper), raised surfaces `#faf2dc`, insets `#e6daba`
- Warm dark text `#2a2418` (not stark black)
- Deeper accent colors tuned for cream contrast: azul `#2d5d9a`, gold `#8a6422`, green `#4d7a3a`, rose `#a05050`
- Topbar/nav chrome stays DARK via separate `--bg-chrome`, `--ink-chrome`, `--line-chrome` variables
- Content body paragraphs: `text-align: justify`, `hyphens: auto` (+ webkit), kerning + ligatures via `font-feature-settings`
- Content max-width `80ch` desktop, `100%` below 900px breakpoint
- All hardcoded dark-theme rgba values migrated to sepia equivalents (state badges, quality buttons, links, danger button)
- Domain switcher dropdown shadow softened to warm-dark rgba

**Removed:**
- Theme dropdown from Settings modal (sepia is the only theme; `state.settings.appearance.theme` field retained as forward-compat placeholder)

**Verification:** 35 Commit B checks + 16 regression pass.

### Phase 1.2.5A — Hasbrouck content revisions

**`02e2c28` · 2026-05-24**

**Added:**
- `author.tagline.en` — 1-line teaser shown in collapsed author card
- Applications section intro paragraph explaining reverse-funnel structure
- Crypto-specific quant paragraph (VWAP/TWAP/BTC/IHSG/SOL/cross-asset/transaction-cost terms)
- 4 "why this step?" annotations in formalization (martingale, p_t decomposition, first differences, lag-1 rationale)
- `.author-card-tagline` styling (italic serif gold)

**Changed:**
- Applications subsection order reversed: advanced → quant → retail (aspirational entry)
- Formalization expanded 280 → 595 words with step-by-step annotations
- Reading time bumped 32 → 38 min

**Verification:** 23 Commit A checks pass.

---

## Phase 1.2 — Content enrichment (author bio + applications + expanded formalization)

**`2367048` · 2026-05-24**

Addressed Phase 1.1 evaluation gaps.

**Added:**
- `CONTENT.author` object with 8 prose fields (fullName, affiliation, bio, focus, intellectualLineage, keyCollaborators, legacy, plus future tagline) + `keyWorks` array
- Collapsible author card UI (`<details>`) rendered above content sections, persists per-item open/closed state in `localStorage.settings.ui.authorCardOpenByItem`
- New canonical section `applications` between worked-example and practice (3 persona subsections: retail, quant, advanced)
- Markdown `###` → `<h4 class="item-content-subheading">` support (single-line, no multi-line block)
- `.author-card`, `.author-keywork`, `.item-content-subheading` styling

**Changed:**
- Canonical section list bumped 7 → 8 (added 'applications')
- Hasbrouck content total 2106 words (1735 sections + 371 author block)
- Reading time bumped 25 → 32 min
- `js/library.js` renders `authorCardHTML` + `itemDetailHTML` accepts `itemContent` for author block

**Bio verified via NYU Stern faculty page fetch:** PhD UPenn Wharton (corrected from prior MIT misrecollection), Kenneth G. Langone Professor, joined NYU 1983, editorial roles JFE + JFM, regulator consulting NYSE/AMEX/Nasdaq-OMX/NY Fed/SEC/CFTC.

**Verification:** 28 acceptance checks pass.

---

## Phase 1.1 — Item content infrastructure + Hasbrouck Ch 1-3

**`73bc753` · 2026-05-24**

First content depth template shipped.

**Added:**
- `data/domains/microstructure/content/` directory
- `data/domains/microstructure/content/hasbrouck-2007.js` — first content module (7 sections, 1161 words)
- `data/domains/microstructure/content/README.md` — content authoring guide
- `js/content.js` — `loadItemContent()`, `renderTrustedMarkdown()`, `renderFormulasInContent()`, `estimateReadingTime()`
- Trusted markdown subset: `**bold**`, `*italic*`, `` `code` ``, `[text](url)`, `[text](item:item-id)`, `$inline math$`, `$$block math$$`, `- ` bullets, blank-line paragraphs, pass-through `<details>`/`<summary>`
- Item-link click delegation (calls `onItemSelect` for inter-item navigation)
- `App.itemContent` state piece (loaded lazily on item select)
- Reading time chip in item detail meta row

**Schema:**
- `CONTENT.sections[]`: each has `id`, `heading: {en,id}`, `body: {en,id}` (bilingual-ready from day 1; ID layer empty until Phase 1.3)
- 7 canonical sections: motivation → intuition → formalization → worked-example → practice → connections → sources
- `audio: {}` + `selfTest: []` forward-compat stubs

**Content correction flagged:** Spec said Practice #3 asks about Roll's *overestimate*; corrected to *underestimate* (mathematically correct: positive autocorrelation in trade direction shrinks |Cov|, smaller spread estimate).

**Verification:** 27 acceptance checks pass.

---

## Phase 0.3 — AI infrastructure stub

**`7f5cb4b` · 2026-05-24**

End-to-end AI feature scaffolding with zero outbound API calls.

**Added:**
- `data/shared/ai-config.js` — `defaultSettings()`, `mergeWithDefaults()`, `stripSensitive()`, `AVAILABLE_MODELS`, `AVAILABLE_THEMES`
- `js/ai.js` — `isAIEnabledFor()` gating + 4 capability functions (`explainConcept`, `suggestNextItem`, `findRelatedConcepts`, `summarizeProgress`) returning `{ok, reason, message}`
- `js/settings.js` — `renderSettingsModal()` with master toggle, API key (password-masked), per-domain toggles, model selection, monthly budget placeholder, data section (export/import/clear)
- `state.settings` schema: `{ai: {enabled, apiKey, perDomain, model, ...}, appearance: {theme}, ui: {...}}`
- `aiCapabilities` field in both domain `meta.js` files (opt-in per-domain capability declaration)
- Ask AI affordances in 3 locations: Library item detail headrow, Review card source row, Reference glossary detail headrow
- `[data-ai-action]` global click delegation in `bindAIAffordances()`
- `,` keyboard shortcut to open Settings modal; Esc closes modal (priority over other Esc handlers)
- `clearAllData()` storage function (preserves legacy key as rollback safety)

**Privacy:**
- API key never in export (`stripSensitive()` zeroes regardless of `includeSettings` flag)
- Zero outbound network in Phase 0.3 (real implementation deferred)

**Verification:** 20 AI-stub checks + 16 regression = 36/36 pass.

---

## Phase 0.2b — system_type schema for filtering

**`a43c22e` · 2026-05-24**

Schema gap fix flagged during Phase 0.2 evaluation.

**Added:**
- `system_type` field on items: `DRY_STEAM | TWO_PHASE | LIQUID | UNIVERSAL`
- `meta.systemTypes` array (domain opt-in: declare classification vocabulary; absent = no filter UI)
- All 9 geothermal items tagged `UNIVERSAL` (general references)
- `applySystemTypeFilter()` exported from library.js, used by glossary filter via source-item lookup
- Filter chip row in `#context-bar` (sticky below topbar, visible only when domain has `systemTypes` AND view is Library or Reference)
- Strict matching semantics (selecting `DRY_STEAM` excludes `UNIVERSAL`)

**Forward compat:** items without explicit `system_type` default to `UNIVERSAL` at filter time. Microstructure items remain untouched (no `systemTypes` declared → no filter UI).

**Verification:** 17 system_type checks + 12 regression = 29/29 pass.

---

## Phase 0.2 — Geothermal stub structure

**`2d6d8c5` · 2026-05-24**

**Added:**
- 5 geothermal phases (earth-sciences, reservoir, production, geochemistry, frontier)
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
- Each item: prereqs (partial DAG), 3-7 inline tags, difficulty 2-4, descriptive notes
- No cards/glossary/notation authored (reading-driven workflow defers content to Phase 1+)

**Verification:** 16 acceptance checks pass.

---

## Phase 0.1 — Multi-domain platform foundation (Lattice v3)

**`36de745` · 2026-05-24**

App renamed from "Microstructure Hub" to "Lattice". Multi-domain architecture established.

**Added:**
- `js/domain.js` — `DOMAINS` registry, `loadDomainContent()` lazy import, `getActiveDomain()` / `setActiveDomain()`
- `data/domains/microstructure/meta.js` — domain identity with phases array (renamed `label` → `name`)
- `data/domains/geothermal/{meta,items}.js` — empty stub (phases populated in 0.2)
- `data/shared/learning-principles.js` — cross-domain pedagogy placeholder
- Domain switcher UI in topbar (badge + dropdown, keyboard `D`)
- `state.settings.ui.authorCardOpenByItem` for future per-item UI persistence

**Changed:**
- Project directory renamed `~/Code/microstructure-hub` → `~/Code/lattice`
- Storage schema v1 → v3: `{schemaVersion: 3, activeDomain, domains: {id: {cards, seededAt}}, settings}`
- Legacy localStorage key `microstructure-hub:v1` read non-destructively, migrated to `lattice-v3`, retained as rollback safety
- Data files (items, seed-cards, glossary, notation) moved under `data/domains/microstructure/`
- All view modules refactored: items/phases/glossary/notation received via deps (no module-level imports)
- Storage accessors take explicit `domainId` parameter

**Verification:** 18 acceptance checks pass.

---

## Pre-Phase 0 — Microstructure Hub foundations

These commits established the SRS core before multi-domain refactor.

### `30a2900` Reference view (glossary + notation) + unscheduled card state

- Glossary view with 32 atomic terms, category grouping, fuzzy search, see-also chips
- Notation reference: 10 concept rows comparing how Kyle/Stoikov/Almgren-Chriss/Cont-Kukanov-Stoikov/Bouchaud use different symbols
- Post-launch seed cards default to `nextReview: null` (visible as "Unscheduled" in Library, manual add to queue)
- "Introduce 3 new cards" button pulls from unscheduled pool

### `6354ab6` Include items metadata + exportedAt in JSON export

Items metadata bundled into JSON exports for self-contained backup.

### `7ba0a0a` Initial Wozniak-optimized scaffold

Initial scaffold of single-domain "Microstructure Hub":
- 5 phases (Foundation → Theory → Empirical → Crypto → Practical)
- 14 items metadata
- 30 atomic seed cards (Hasbrouck Ch 1-3 + O'Hara Ch 1-2)
- SM-2 algorithm pure function (verified)
- localStorage persistence with content-hash drift detection
- Editorial/research-journal aesthetic (Fraunces serif + Inter sans + JetBrains Mono)
- KaTeX bundled offline (20 woff2 fonts)
- 6-button SM-2 quality scale (pure Wozniak, not Anki collapse)
