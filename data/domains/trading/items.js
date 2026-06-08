// Trading domain — practitioner edges + quant method, compiled by Az from public
// material and cross-checked against the literature. Two founding items; the
// deep-dive items (dealer flows, event trading, liquidity harvesting, the quant
// curriculum) are the roadmap and will be added as modules are authored.
//
// INTEGRITY POSTURE: these are ATTRIBUTED lessons from public traders/quants,
// not asserted as universal fact. Each module preserves the source's evidence
// tags ([Established] peer-reviewed · [Practitioner] documented by desks ·
// [His] the author's own claim) and carries an educational / not-financial-
// advice disclaimer. Markets change and edges decay.
//
// system_type: CRYPTO | TRADFI | UNIVERSAL (declared in meta.systemTypes).

export const ITEMS = [
  // ─────────────── Framework & Method ───────────────
  {
    id: 'husslin-framework',
    type: 'paper',
    title: 'The @Husslin_ Framework: Positioning, Dealer Flows & the Adversarial Edge',
    authors: ['huss (@Husslin_)'],
    year: 2024,
    phase: 'framework',
    difficulty: 4,
    prereqs: [],
    tags: ['order-flow', 'positioning', 'open-interest', 'dealer-hedging', 'gamma', 'vanna-charm', 'reflexivity', 'event-trading', 'liquidity', 'crypto-perps'],
    system_type: 'UNIVERSAL',
    notes: "Synthesis of @Husslin_'s trading framework (X threads, charts, Steady Lads podcast), cross-checked against the microstructure literature. Trade the plumbing — positioning, dealer hedging, liquidity — not fundamentals. The three questions; asymmetry-not-prediction; reflexivity; regime-first. OI as support/resistance & oscillator; perp premium → MM positioning; dealer gamma/vanna/charm flows (the overnight bid, OPEX); event trading (sell-rumour/buy-news, the pre-event tell); liquidity harvesting. Evidence-tagged; not financial advice. Cross-links to the academic microstructure domain (VPIN/order-flow toxicity, Almgren-Chriss, Kyle)."
  },

  {
    id: 'trading-sources-curriculum',
    type: 'paper',
    title: 'Sources & Curriculum: the Husslin/Insilico literature (theory · fundamental · practical · tips)',
    authors: ['Compiled by Az'],
    year: 2024,
    phase: 'framework',
    difficulty: 3,
    prereqs: ['husslin-framework', 'insilico-method'],
    tags: ['bibliography', 'curriculum', 'literature-survey', 'evidence', 'reading-path', 'four-lenses', 'web-verified'],
    system_type: 'UNIVERSAL',
    notes: "Web-verified literature survey behind both personas, mapped to the trading modules. Reads each claim through FOUR LENSES — theory (why an edge exists) / fundamental (mechanism + what was measured) / practical (how to apply) / tips (decay, regime-dependence, ethics). Pillars verified: VPIN (toxicity rose before the 2010 flash crash), Baltussen 2021 (short-gamma → intraday momentum, 60+ futures 1974-2020), Lucca-Moench 2015 (+49bp/24h ≈80% of annual returns, 1994-2011) THEN Kurov 2021 (drift gone after 2015 — the canonical decay case), Osler (stop-cluster cascades). Plus the quant stack (profile/bars/vol-surface/time-series/viscosity-solutions). A reading path + the [Established]>[Practitioner]>[His] evidence hierarchy. Cross-linked to all 6 trading modules + the micro academic root. Not financial advice."
  },

  // ─────────────── Positioning & Flows (deep-dives) ───────────────
  {
    id: 'husslin-dealer-flows',
    type: 'paper',
    title: 'Dealer-Hedging Flows: Gamma, Vanna, Charm (the signature edge)',
    authors: ['huss (@Husslin_)'],
    year: 2024,
    phase: 'positioning-flows',
    difficulty: 4,
    prereqs: ['husslin-framework'],
    tags: ['dealer-hedging', 'gamma', 'gamma-flip', 'vanna', 'charm', 'opex', 'overnight-bid', 'GEX', 'options', 'interactive-viz'],
    system_type: 'UNIVERSAL',
    notes: "Deep-dive #1 of the @Husslin_ framework: dealer-hedging flows. Greeks read by what they FORCE a short-downside-hedge dealer to do; gamma sets the tape (short γ amplifies, long γ pins) with a gamma-flip level; vanna/charm overnight bid (vol down → index bought) strongest into OPEX, rolling off after. Carries the interactive DealerGammaSim (exact Black-Scholes gamma, real zero-crossing flip; verified by verify-dealer-gamma-sim.mjs). Evidence-tagged (Baltussen 2021, Barbon-Buraschi 2020, Ni 2005, Lou-Polk-Skouras 2019); not financial advice. Cross-linked to husslin-framework + micro Avellaneda-Stoikov/Menkveld/VPIN."
  },

  {
    id: 'husslin-oi-positioning',
    type: 'paper',
    title: 'Open Interest & Positioning: support/resistance, the oscillator, perp premium',
    authors: ['huss (@Husslin_)'],
    year: 2024,
    phase: 'positioning-flows',
    difficulty: 3,
    prereqs: ['husslin-framework'],
    tags: ['open-interest', 'positioning', 'funding', 'perp-premium', 'long-short-ratio', 'liquidations', 'squeeze', 'crypto-perps'],
    system_type: 'CRYPTO',
    notes: "Deep-dive: positioning leg of the @Husslin_ framework. OI as a map of leverage (S/R + oscillator; stop-hunt/fake-out before the real break); funding/perp premium = who pays = the crowded side (negative ⇒ MMs long ⇒ upside-squeeze risk); long-short read as DEVIATION from normal. Worked upside-squeeze example; decision flow; data (Coinglass, Kingfisher/Hyblock). Cross-linked to husslin-framework, husslin-dealer-flows, micro Brunnermeier-Pedersen (funding-liquidity spiral) + VPIN. Evidence-tagged; not financial advice."
  },

  {
    id: 'perp-funding-carry',
    type: 'paper',
    title: 'Perpetual funding, basis & the crypto carry',
    authors: ['Schmeling, M.', 'Schrimpf, A.', 'Todorov, K.'],
    year: 2023,
    phase: 'positioning-flows',
    difficulty: 4,
    prereqs: ['husslin-oi-positioning'],
    tags: ['funding-rate', 'perpetual-swap', 'basis', 'crypto-carry', 'positioning', 'cash-and-carry', 'crypto-perps', 'interactive-viz'],
    system_type: 'CRYPTO',
    notes: "The mechanism beneath the perp-premium positioning read — ESTABLISHED (exchange methodology + academic), trusted refs. Funding F(P) = P + clamp(I−P, −c, c) (BitMEX/Binance/Hyperliquid; I≈0.01%/8h, c≈0.05%): three regimes (flat F=I; rich F=P−c longs pay; cheap F=P+c shorts pay); annualized = F × periods (8h ⇒ 1095×). Three readings: convergence mechanism, positioning signal (sign of F = crowded side; +persistent = flush risk, −persistent = MMs long / upside-squeeze), and carry (cash-and-carry long-spot/short-perp = crypto carry). No-arb perp price = risk-neutral E[spot at random anchoring time] (Ackerer-Hugonnier-Jermann). Carries the interactive FundingRateSim (verified by verify-funding-sim.mjs). Refs: Schmeling-Schrimpf-Todorov 2023 (BIS WP 1087 / Management Science), Ackerer-Hugonnier-Jermann 2024 (NBER 32936 / Math Finance), Fundamentals of Perpetual Futures (arXiv 2212.06888), exchange methodology, Brunnermeier-Pedersen 2009. Cross-linked to husslin-oi-positioning, husslin-framework, husslin-liquidity-harvesting, micro Brunnermeier-Pedersen. Educational, not financial advice."
  },

  // ─────────────── Events & Tactics (deep-dives) ───────────────
  {
    id: 'husslin-event-trading',
    type: 'paper',
    title: 'Event Trading: FOMC/CPI/elections — trading the hedging flow, not the headline',
    authors: ['huss (@Husslin_)'],
    year: 2024,
    phase: 'events-tactics',
    difficulty: 3,
    prereqs: ['husslin-framework'],
    tags: ['event-trading', 'pre-fomc-drift', 'hedging', 'sell-rumour-buy-news', 'IV', 'CME-gap', 'regime-conditional'],
    system_type: 'UNIVERSAL',
    notes: "Deep-dive: scheduled events as HEDGING-FLOW events. Funds over-hedge in (weakness + IV bid), unwind out (relief) — sell-rumour/buy-news. Pre-event TELL: down-into-event = hedged → lean long (~80% per him); up = under-hedged → caution. Execution: position before, close on the announcement; CME reopen/gap for off-hours. REGIME-CONDITIONAL caveat: pre-FOMC drift (Lucca-Moench 2015) faded post-2015 (Kurov 2021). Cross-linked to husslin-framework, dealer-flows, oi-positioning. Evidence-tagged; not financial advice."
  },
  {
    id: 'husslin-liquidity-harvesting',
    type: 'paper',
    title: 'Liquidity Harvesting & Liq-Scalping: thin-book squeezes, stop cascades, liquidation maps',
    authors: ['huss (@Husslin_)'],
    year: 2024,
    phase: 'events-tactics',
    difficulty: 3,
    prereqs: ['husslin-framework'],
    tags: ['liquidity', 'thin-book', 'stop-cascade', 'liquidation-clusters', 'manufactured-prints', 'time-of-day', 'defensive', 'crypto-perps'],
    system_type: 'CRYPTO',
    notes: "Deep-dive: thin books let a big player push price cheaply into thin liquidity, run stop/liquidation cascades, offload into momentum — 'if you don't see the meat, you are the meat.' Setups: weekend/holiday squeeze, liq-scalping (cluster magnet + snap-back), time-of-day windows; the illiquid-regime rule (cut leverage, widen targets, drop technicals). The RESPONSIBLE takeaway is DEFENSIVE (recognise the regime, don't be the harvested stop); not a manipulation guide. Cross-linked to husslin-framework, oi-positioning, event-trading, micro VPIN (toxicity). Evidence: Osler 2003/2005, Harris 2003. Not financial advice."
  },

  // ─────────────── Quant Curriculum ───────────────
  {
    id: 'insilico-method',
    type: 'paper',
    title: 'The @insiliconot Method: Volume Profiles, Participant Archetypes & the Viscosity-Solutions Quant Curriculum',
    authors: ['Insilico (@insiliconot)'],
    year: 2024,
    phase: 'quant',
    difficulty: 4,
    prereqs: [],
    tags: ['volume-profile', 'market-profile', 'POC', 'value-area', 'participant-types', 'non-time-bars', 'viscosity-solutions', 'stochastic-control', 'vol-surface', 'time-series'],
    system_type: 'CRYPTO',
    notes: "Synthesis of @insiliconot's method (a rigorous intraday-BTC quant behind a satirical persona). Read the volume/market profile (POC, value area, high/low-volume nodes); four participant archetypes; non-time (volume/range) bars (López de Prado). The quant curriculum he points to: viscosity solutions / stochastic control (Crandall-Lions, Pham, Almgren-Chriss), vol-surface (Gatheral), financial time series (Tsay). Rigor over hype; specialise; skeptic of marketed order-flow data. Educational, not financial advice. Cross-links to Almgren-Chriss in the microstructure domain."
  },
  {
    id: 'insilico-quant-curriculum',
    type: 'paper',
    title: 'Charts & Quant Curriculum: rebuilding the salad profiles + the rigorous quant',
    authors: ['Insilico (@insiliconot)'],
    year: 2024,
    phase: 'quant',
    difficulty: 5,
    prereqs: ['insilico-method'],
    tags: ['volume-profile', 'POC', 'value-area', 'non-time-bars', 'viscosity-solutions', 'stochastic-control', 'vol-surface', 'time-series', 'curriculum', 'rebuild'],
    system_type: 'CRYPTO',
    notes: "Deep-dive of the @insiliconot method. Part A: read & REBUILD the salad/volume profiles yourself (POC magnet, value area ~70%, HVN acceptance / LVN pockets; reconcile nested ranges by fixing the auction; acceptance vs rejection; non-time bars per López de Prado; TradingView rebuild steps). Part B: the quant curriculum with canonical sources — viscosity solutions / stochastic control (Crandall-Lions, Crandall-Ishii-Lions 1992, Pham, Ngo-Pham, Almgren-Chriss), vol-surface (Gatheral), time series (Tsay). Persona is satire, quant is serious; deepest material (MEGA/Telegram/Medium) not reproduced. Cross-linked to insilico-method, husslin-framework, micro Almgren-Chriss/Kyle/O'Hara. Educational, not financial advice."
  },
  {
    id: 'gatheral-vol-surface',
    type: 'book',
    title: 'The Volatility Surface & SVI: skew, term structure, arbitrage-free smiles',
    authors: ['Gatheral, J.'],
    year: 2006,
    phase: 'quant',
    difficulty: 5,
    prereqs: ['insilico-quant-curriculum'],
    tags: ['volatility-surface', 'SVI', 'implied-volatility', 'skew', 'term-structure', 'arbitrage-free', 'options', 'interactive-viz'],
    system_type: 'UNIVERSAL',
    notes: "The vol-surface pillar of the Insilico quant curriculum — ESTABLISHED academic material (Gatheral), valid references. Raw SVI: w(k) = a + b(ρ(k−m) + √((k−m)²+σ²)) total implied variance, σ_BS = √(w/T); 5 params map to level/wing/skew/shift/curvature; w_min = a+bσ√(1−ρ²) at k*=m−ρσ/√(1−ρ²); wing slopes b(1±ρ); no-arb checks w_min≥0 + Lee bound b(1+|ρ|)≤2 (full = Gatheral-Jacquier g(k)≥0). Carries the interactive VolSurfaceSVISim (verified by verify-vol-surface-sim.mjs). Refs: Gatheral 2006, Gatheral-Jacquier 2014 (Quant Finance 14(1):59-71), Lee 2004, Dupire 1994, Heston 1993. Cross-linked to insilico-quant-curriculum, husslin-dealer-flows (vanna/charm = surface dynamics), trading-sources-curriculum, micro Avellaneda-Stoikov. Educational, not financial advice."
  },
  {
    id: 'gatheral-ssvi-surface',
    type: 'paper',
    title: 'SSVI: the calendar-arbitrage-free full volatility surface',
    authors: ['Gatheral, J.', 'Jacquier, A.'],
    year: 2014,
    phase: 'quant',
    difficulty: 5,
    prereqs: ['gatheral-vol-surface'],
    tags: ['SSVI', 'volatility-surface', 'calendar-arbitrage', 'butterfly-arbitrage', 'term-structure', 'arbitrage-free', 'local-volatility', 'interactive-viz'],
    system_type: 'UNIVERSAL',
    notes: "SSVI (Surface SVI) — the full-surface extension of raw SVI; ESTABLISHED academic material (Gatheral & Jacquier 2014, Quant Finance 14(1):59-71, arXiv:1204.0646). w(k;T) = ½θ(T)(1 + ρφk + √((φk+ρ)²+1−ρ²)) with one ρ, ATM-variance term structure θ(T) (w(0;T)=θ), φ(θ)=ηθ^(−γ). CALENDAR-arb-free ⇔ total-variance slices non-decreasing in T (never cross; needs θ↑); BUTTERFLY-free per slice ⇔ θφ(1+|ρ|)<4 & θφ²(1+|ρ|)≤4. Why it matters: an arb-free surface is required for Dupire local vol (calendar arb → negative forward variance → imaginary local vol). Carries the interactive SSVISurfaceSim (5 slices, crossing detection; verified by verify-ssvi-sim.mjs). Refs: Gatheral-Jacquier 2014, Gatheral 2006, Roper 2010, Lee 2004, Dupire 1994, Corbetta et al 2019/eSSVI. Cross-linked to gatheral-vol-surface, insilico-quant-curriculum, husslin-dealer-flows, trading-sources-curriculum. Educational, not financial advice."
  },

  {
    id: 'options-greeks-payoffs',
    type: 'paper',
    title: 'Options Strategy & the Greeks: payoffs, delta-gamma-theta-vega',
    authors: ['Black, F.', 'Scholes, M.', 'Merton, R. C.'],
    year: 1973,
    phase: 'quant',
    difficulty: 4,
    prereqs: ['husslin-dealer-flows'],
    tags: ['options', 'black-scholes', 'greeks', 'delta', 'gamma', 'theta', 'vega', 'payoff-diagram', 'volatility', 'interactive-viz'],
    system_type: 'UNIVERSAL',
    notes: "The options-pricing FOUNDATION under the dealer-gamma and vol-surface modules — ESTABLISHED academic + practitioner canon. Black-Scholes-Merton price d1=[ln(S/K)+(r+½σ²)τ]/(σ√τ), call=S·N(d1)−K e^{−rτ}N(d2); the Greeks Δ=N(d1) (call), Γ=φ(d1)/(Sσ√τ), ν=Sφ(d1)√τ, Θ; put-call parity C−P=S−K e^{−rτ}. Multi-leg payoff/P&L (expiry intrinsic vs mark-to-model), breakevens, net Greeks for 9 structures (long call/put, straddle/strangle, vertical spreads, iron condor, butterfly, covered call). Carries the interactive OptionsStrategySim (verified by verify-options-sim.mjs — parity + every Greek vs finite-difference). Refs: Black-Scholes 1973 (JPE), Merton 1973 (Bell J. Econ), Hull (Options Futures & Other Derivatives), Natenberg (Option Volatility & Pricing), Taleb (Dynamic Hedging). Cross-linked to husslin-dealer-flows (dealer gamma), gatheral-vol-surface (σ is the input), tradingriot-orderflow-vrp (selling vega), perp-funding-carry. Educational, not financial advice."
  },

  {
    id: 'backtest-overfitting-dsr',
    type: 'paper',
    title: 'Backtest Overfitting & the Deflated Sharpe Ratio',
    authors: ['Bailey, D. H.', 'López de Prado, M.'],
    year: 2014,
    phase: 'quant',
    difficulty: 5,
    prereqs: ['traderxo-expectancy'],
    tags: ['backtesting', 'overfitting', 'deflated-sharpe', 'probabilistic-sharpe', 'multiple-testing', 'sharpe-ratio', 'selection-bias', 'false-discovery', 'interactive-viz'],
    system_type: 'UNIVERSAL',
    notes: "The companion to traderxo-expectancy: expectancy asks 'do you have an edge?', this asks 'is it REAL or fit from trying many strategies?' — ESTABLISHED quant statistics, web-verified refs. If N skill-less strategies are tested, the best Sharpe is inflated; expected max E[max] ≈ √V·[(1−γ)Z⁻¹(1−1/N)+γZ⁻¹(1−1/(Ne))] (Bailey-López de Prado). Sharpe SE σ(ŜR)=√[(1−γ3 ŜR+((γ4−1)/4)ŜR²)/(T−1)] (Lo 2002); Probabilistic Sharpe PSR=Φ[(ŜR−SR*)/σ]; DEFLATED Sharpe = PSR with SR* = the N-trial expected max. Carries the interactive BacktestOverfitSim (luck-threshold curve vs N + DSR + Monte-Carlo p(beaten by luck); verified by verify-backtest-sim.mjs). Refs: Bailey & López de Prado 2014 (J. Portfolio Management, 'The Deflated Sharpe Ratio'); Bailey, Borwein, López de Prado & Zhu 2014 (Notices of the AMS, backtest overfitting); Harvey, Liu & Zhu 2016 (RFS, '...and the Cross-Section of Expected Returns'); Lo 2002 (FAJ, 'The Statistics of Sharpe Ratios'); López de Prado, Advances in Financial Machine Learning. Cross-linked to traderxo-expectancy, insilico-quant-curriculum, jimtalbot-method, micro easley-lopez-prado-vpin. Educational, not financial advice."
  },

  {
    id: 'market-profile-tpo',
    type: 'book',
    title: 'Market Profile (TPO): the auction, value area & day types',
    authors: ['Steidlmayer, J. P.', 'Dalton, J. F.'],
    year: 1984,
    phase: 'quant',
    difficulty: 4,
    prereqs: ['insilico-quant-curriculum'],
    tags: ['market-profile', 'TPO', 'auction-market-theory', 'POC', 'value-area', 'initial-balance', 'day-types', 'single-prints', 'interactive-viz'],
    system_type: 'UNIVERSAL',
    notes: "Steidlmayer's Market Profile / Dalton's reading — ESTABLISHED practitioner canon, distinct from the VOLUME profile in insilico-quant-curriculum: this is TIME at price (TPO letters per 30-min period). Reads: POC (longest TPO row = fairest price), Value Area (central ~70% built outward from POC), Initial Balance (first two periods A+B; range EXTENSION beyond it = other-timeframe participation), single prints / buying-selling tails (rejection), and Dalton's day types (Normal, Normal-Variation, Trend, Neutral, Double-Distribution). Carries the interactive MarketProfileTPOSim (stacked-letter profile + POC/VA/IB/day-type; verified by verify-tpo-sim.mjs). Refs: Steidlmayer & Koy 'Markets and Market Logic' (1986); Dalton, Jones & Dalton 'Mind Over Markets' & 'Markets in Profile'; CBOT 'A Six-Part Study Guide to Market Profile'. Cross-linked to insilico-quant-curriculum (volume profile contrast), luckshury-orderflow, tradingriot-orderflow-vrp, husslin-oi-positioning, micro VPIN. Educational, not financial advice."
  },

  {
    id: 'variance-risk-premium',
    type: 'paper',
    title: 'Variance Risk Premium & Variance Swaps: selling vol, replication & the tail',
    authors: ['Carr, P.', 'Wu, L.'],
    year: 2009,
    phase: 'quant',
    difficulty: 5,
    prereqs: ['gatheral-vol-surface'],
    tags: ['variance-risk-premium', 'variance-swap', 'realized-variance', 'implied-variance', 'log-contract', 'replication', 'model-free-moments', 'short-volatility', 'tail-risk', 'interactive-viz'],
    system_type: 'UNIVERSAL',
    notes: "The variance risk premium — beginner→advanced. ESTABLISHED academic + practitioner canon, web-verified refs. Beginner: realized variance RV=(252/n)Σr² vs implied variance K_var=σ_imp²; implied is systematically RICHER (the VRP = K_var − E[RV]) ⇒ selling vol earns a premium. Intermediate: the variance-swap payoff N_var·(RV−K_var); the SHORT-vol distribution — small premium most of the time, rare large losses (RV right-skewed ⇒ short P&L left-skewed; 'pennies in front of a steamroller'); sizing, tail hedge. Advanced: the DEMETERFI-DERMAN-KAMAL-ZOU log-contract replication (a static 1/K²-weighted strip of OTM options + a dynamic futures hedge); BAKSHI-KAPADIA-MADAN model-free implied moments (variance/skew/kurt) from the same option spanning. Carries the interactive VarianceSwapSim (realized-vol distribution vs strike + VRP/tail; fairVarianceStrike replication; verified by verify-variance-sim.mjs). Refs: Carr & Wu 2009 (RFS 22(3):1311-1341, 'Variance Risk Premiums'); Bollerslev, Tauchen & Zhou 2009 (RFS 22(11):4463-4492); Demeterfi, Derman, Kamal & Zou 1999 (Goldman Sachs QS Notes / J. Derivatives, 'More Than You Ever Wanted to Know About Volatility Swaps'); Bakshi, Kapadia & Madan 2003 (RFS 16(1):101-143). Cross-linked to gatheral-vol-surface, options-greeks-payoffs, tradingriot-orderflow-vrp (he sells the VRP), traderxo-expectancy, backtest-overfitting-dsr. Educational, not financial advice."
  },

  {
    id: 'order-flow-cvd',
    type: 'paper',
    title: 'Order Flow & CVD: cumulative delta, absorption & divergence',
    authors: ['Kyle, A. S.'],
    year: 1985,
    phase: 'positioning-flows',
    difficulty: 4,
    prereqs: ['husslin-oi-positioning'],
    tags: ['order-flow', 'cvd', 'cumulative-delta', 'footprint', 'absorption', 'divergence', 'price-impact', 'kyle-lambda', 'interactive-viz'],
    system_type: 'UNIVERSAL',
    notes: "Order flow read by the practitioners (Luckshury, Tradingriot, Jim Talbot), grounded in Kyle's λ. Each bar has a signed aggressor imbalance δ (buy − sell market volume); CVD = Σδ. Normally price tracks the flow (Δp ≈ λδ); the SIGNAL is the DECOUPLING — a large δ that does NOT move price = a passive participant ABSORBING it; CVD rising into flat/lower price (or falling into flat/higher price) is a CVD DIVERGENCE, a classic reversal tell. Modelled Δpₜ = λ(1−a)δₜ + noise; the OLS slope of Δp on δ recovers the effective impact λ(1−a), and the price-vs-CVD trend ratio flags absorption (bearish if CVD up & absorbed, bullish if CVD down & absorbed). Carries the interactive OrderFlowCVDSim (price vs CVD + divergence; verified by verify-orderflow-sim.mjs). Refs: Kyle 1985 (price impact / λ, in catalog); Easley, López de Prado & O'Hara VPIN (order-flow toxicity, in catalog); Cont-Kukanov-Stoikov (order-flow imbalance, in catalog); practitioner footprint/delta usage. Cross-linked to husslin-oi-positioning, husslin-dealer-flows, luckshury-orderflow, tradingriot-orderflow-vrp, micro Kyle/VPIN/Cont-Kukanov-Stoikov. Educational, not financial advice."
  },

  {
    id: 'portfolio-of-edges',
    type: 'paper',
    title: 'Portfolio of Edges: diversification, correlation & the 1/√ρ ceiling',
    authors: ['Markowitz, H. M.'],
    year: 1952,
    phase: 'quant',
    difficulty: 4,
    prereqs: ['traderxo-expectancy'],
    tags: ['portfolio', 'diversification', 'correlation', 'sharpe-ratio', 'uncorrelated-edges', 'drawdown', 'risk-management', 'interactive-viz'],
    system_type: 'UNIVERSAL',
    notes: "The 'portfolio of uncorrelated, decaying edges' thesis (LiquidityGoblin 'be the bookie'; Tradingriot's uncorrelated book) — ESTABLISHED mean-variance math, web-verified refs. For N equal-weight edges each Sharpe S with pairwise correlation ρ (equicorrelation), portfolio vol σ_p = σ√((1+(N−1)ρ)/N) ⇒ Sharpe multiplies by the DIVERSIFICATION RATIO D(N,ρ) = √(N/(1+(N−1)ρ)), Sharpe_port = S·D. Uncorrelated (ρ=0) ⇒ D=√N (unbounded); as N→∞, D→1/√ρ — CORRELATION, not the number of strategies, sets the ceiling. The same pooling shrinks drawdown. Carries the interactive PortfolioEdgeSim (D-vs-N curve + 1/√ρ ceiling + Monte-Carlo drawdown single-vs-portfolio; verified by verify-portfolio-sim.mjs). Refs: Markowitz 1952 (J. Finance 7(1):77-91, 'Portfolio Selection'); the equal-weight equicorrelation identity; practitioner uncorrelated-book usage. Cross-linked to traderxo-expectancy, backtest-overfitting-dsr, liquidity-goblin-market-making, tradingriot-orderflow-vrp, micro Amihud/Brunnermeier-Pedersen. Educational, not financial advice."
  },

  {
    id: 'stat-arb-pairs',
    type: 'paper',
    title: 'Statistical Arbitrage & Pairs Trading: cointegration, OU & the s-score',
    authors: ['Avellaneda, M.', 'Lee, J.-H.'],
    year: 2010,
    phase: 'quant',
    difficulty: 5,
    prereqs: ['insilico-quant-curriculum'],
    tags: ['statistical-arbitrage', 'pairs-trading', 'cointegration', 'mean-reversion', 'ornstein-uhlenbeck', 's-score', 'z-score', 'half-life', 'interactive-viz'],
    system_type: 'UNIVERSAL',
    notes: "Statistical arbitrage / pairs trading — ESTABLISHED quant strategy, web-verified refs. Two cointegrated legs share a mean-reverting SPREAD. Gatev, Goetzmann & Rouwenhorst (2006) pick pairs by minimum normalised-price distance and trade at a 2σ divergence, closing on convergence; Avellaneda & Lee (2010) model the residual as Ornstein-Uhlenbeck dX=κ(θ−X)dt+σ dW and trade an s-score. Key quantities: mean-reversion speed κ, half-life ln2/κ, equilibrium std σ_eq=σ/√(2κ), z/s-score (X−θ)/σ_eq; the AR(1) coefficient of the spread is e^{−κ dt}. Strategy: long the spread at z≤−entry, short at z≥+entry, exit near the mean — +EV under mean reversion, no edge under a random walk. Carries the interactive PairsTradingSim (OU spread + z-bands + backtest; verified by verify-pairs-sim.mjs). Refs: Avellaneda & Lee 2010 (Quantitative Finance 10(7):761-782, 'Statistical Arbitrage in the U.S. Equities Market'); Gatev, Goetzmann & Rouwenhorst 2006 (Review of Financial Studies 19(3):797-827, 'Pairs Trading'); Engle & Granger 1987 (Econometrica 55(2):251-276, cointegration); Ornstein-Uhlenbeck. Cross-linked to insilico-quant-curriculum, portfolio-of-edges, traderxo-expectancy, backtest-overfitting-dsr, micro Makarov-Schoar (cross-exchange arb)/Kyle. Educational, not financial advice."
  },

  // ─────────────── Practitioner Playbooks (deep-dives compiled from public material) ───────────────
  {
    id: 'traderxo-expectancy',
    type: 'paper',
    title: 'TraderXO — engineering an edge: expectancy, dynamic risk & regime-fit order flow',
    authors: ['TraderXO (@Trader_XO)'],
    year: 2024,
    phase: 'practitioners',
    difficulty: 4,
    prereqs: ['insilico-method'],
    tags: ['expectancy', 'position-sizing', 'kelly', 'risk-of-ruin', 'volatility-regime', 'order-flow', 'journaling', 'process', 'interactive-viz'],
    system_type: 'UNIVERSAL',
    notes: "Compiled from @Trader_XO's public material. Thesis: you don't FIND an edge, you ENGINEER one — positive EXPECTANCY E_R = p·b − (1−p), tied to a volatility regime, protected by dynamic position sizing (add to winners, never to losers), order-flow confirmation at the level, and relentless journaling. Carries the interactive ExpectancySurvivalSim (expectancy + binary Kelly f*=E_R/b + Monte-Carlo risk-of-ruin; verified by verify-expectancy-sim.mjs). Evidence-tagged [Established]/[Practitioner]/[His]; refs Kelly 1956, Thorp 2006, Barber-Odean 2000, Kahneman-Tversky 1979. Cross-linked to insilico-method, jimtalbot-method, tradingriot-orderflow-vrp, micro Almgren-Chriss/Kyle. Educational, not financial advice; not affiliated with or endorsed by @Trader_XO."
  },
  {
    id: 'jimtalbot-method',
    type: 'paper',
    title: 'Jim Talbot — momentum-reset trend trading, order-flow reads & the discipline edge',
    authors: ['Jim Talbot (@jimtalbot)'],
    year: 2024,
    phase: 'practitioners',
    difficulty: 3,
    prereqs: ['husslin-framework'],
    tags: ['regime', 'trend', 'mean-reversion', 'RSI', 'order-flow', 'auction-market-theory', 'hedging', 'expectancy', 'discipline', 'interactive-viz'],
    system_type: 'CRYPTO',
    notes: "Compiled from @jimtalbot's public long-form interviews. Method: name the REGIME first (trend vs chop), run the matching engine (buy 1H RSI resets in an uptrend / fade deviations in chop), overlay discretionary order-flow & auction-level reads for confluence, hedge to stay neutral — and let the real edge be the SYSTEM around it (≈3 fixed setups, journaled for expectancy, screen time, simplicity, self-awareness). 'Mechanical skeleton, discretionary muscle'; 'execution > prediction'; the professional-loser/positive-EV mindset. Carries the interactive ExpectancySurvivalSim (his journaled-expectancy + 'size so a loss doesn't move you'). Evidence-tagged; cross-linked to husslin-framework, traderxo-expectancy, luckshury-orderflow, micro VPIN/Kyle. Educational, not financial advice; not affiliated with or endorsed by @jimtalbot."
  },
  {
    id: 'luckshury-orderflow',
    type: 'paper',
    title: 'Luckshury — order-flow day trading: profile, footprint & session statistics',
    authors: ['Luckshury (@Luckshuryy)'],
    year: 2024,
    phase: 'practitioners',
    difficulty: 3,
    prereqs: ['husslin-oi-positioning'],
    tags: ['order-flow', 'market-profile', 'footprint', 'CVD', 'value-area', 'open-interest', 'liquidations', 'session-statistics', 'reversals', 'interactive-viz'],
    system_type: 'CRYPTO',
    notes: "Compiled from @Luckshuryy's free intraday order-flow curriculum. A five-layer synthesis — Market Profile / Auction Market Theory, footprint & CVD, derivatives positioning (OI/liquidations), Smart-Money structures, and back-tested SESSION STATISTICS — fused into one fixed daily-bias routine for trading reversals (custom UTC sessions: Asia/London/NY/Close). Value/POC/naked-POC, absorption & exhaustion, the OI matrix (trapped/offside), internal resting liquidity. Carries the interactive VolumeProfileSim (POC / value area / HVN-LVN). DISCRETIONARY intraday; session-stat edges are sample-dependent and decay. Cross-linked to husslin-oi-positioning, insilico-quant-curriculum, jimtalbot-method, micro VPIN. Educational, not financial advice; not affiliated with or endorsed by @Luckshuryy."
  },
  {
    id: 'tradingriot-orderflow-vrp',
    type: 'paper',
    title: 'Tradingriot (Adam Bakay) — order-flow foundation to selling the variance risk premium',
    authors: ['Adam Bakay (Tradingriot, @abetrade)'],
    year: 2024,
    phase: 'practitioners',
    difficulty: 4,
    prereqs: ['insilico-method'],
    tags: ['order-flow', 'CVD', 'footprint', 'auction-market-theory', 'market-profile', 'variance-risk-premium', 'options-selling', 'tail-hedge', 'payout-curves', 'interactive-viz'],
    system_type: 'UNIVERSAL',
    notes: "Compiled from Adam Bakay's (Tradingriot) public blog, Q&A and Insilico material. The two-phase arc: he taught order-flow microstructure (delta/CVD absorption, footprint, Auction Market Theory, Market Profile/TPO) for free, then publicly evolved into a SYSTEMATIC trader running ~6-7 uncorrelated strategies whose core is SELLING OPTIONS to harvest the variance risk premium with a mandatory tail hedge. Key mental model: COMBINING PAYOUT CURVES (option-selling = many small wins + rare big loss; momentum = many small losses + rare big win) into a smoother blended equity curve; sustainability as the real edge; read positioning, not lines. Carries the interactive VolSurfaceSVISim (the implied-vol surface the VRP is harvested from). Evidence-tagged; refs Carr-Wu 2009 (VRP), Bollerslev-Tauchen-Zhou 2009, Gatheral 2006, López de Prado. Cross-linked to insilico-method, gatheral-vol-surface, traderxo-expectancy, micro Almgren-Chriss. Educational, not financial advice; not affiliated with or endorsed by Adam Bakay."
  },
  {
    id: 'liquidity-goblin-market-making',
    type: 'paper',
    title: 'LiquidityGoblin — crypto market-making, adverse selection & the edge-decay portfolio',
    authors: ['LiquidityGoblin (@liquiditygoblin)'],
    year: 2024,
    phase: 'practitioners',
    difficulty: 5,
    prereqs: ['husslin-framework'],
    tags: ['market-making', 'adverse-selection', 'mark-outs', 'hft', 'lead-lag', 'edge-decay', 'cash-and-carry', 'variance-premium', 'limits-of-arbitrage', 'interactive-viz'],
    system_type: 'CRYPTO',
    notes: "Compiled from @liquiditygoblin's public material. A crypto prop market-maker/HFT/MEV quant: sell liquidity for a tiny edge at huge turnover, obsessively avoid the informed counterparty via MARK-OUTS (the signature risk metric), and survive on a PORTFOLIO of uncorrelated, decaying edges — 'be the bookie, not the gambler.' Adverse selection, chase-the-uninformed/route-away-from-informed, HFT lead-lag & edge decay, MEV/atomic arb, limits of arbitrage, cash-and-carry & funding carry (the retail-accessible edge), the variance premium, table selection, risk as a PID control system. Carries the interactive FundingRateSim (the cash-and-carry / funding carry he flags as retail-accessible). Most of his core is institutional/infra-dependent — framed honestly. Cross-linked to husslin-framework, perp-funding-carry, husslin-liquidity-harvesting, micro Glosten-Milgrom/O'Hara/VPIN (adverse selection), Brunnermeier-Pedersen. Educational, not financial advice; not affiliated with or endorsed by @liquiditygoblin."
  },
];
