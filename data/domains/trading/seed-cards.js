// Trading domain seed cards — atomic Q/A following Wozniak's 20 rules.
// Attributed practitioner lessons; evidence tags preserved. Not financial advice.
// SM-2 state added by storage.js on seeding — never hardcode dates.

export const SEED_CARDS = [
  // ─────────────── @Husslin_ framework ───────────────
  {
    id: 'husslin-framework-c001', itemId: 'husslin-framework', type: 'basic',
    front: "The @Husslin_ framework asks three questions before a trade. What are they, in order?",
    back: "(1) Where is everyone positioned? (OI, perp premium/funding, long-short deviations, options). (2) What are they forced to do if price moves? (stops, liquidations, dealer hedging, hedge unwinds). (3) What narrative will justify the move and pull in more flow? (reflexivity).",
    context: 'Intuition — the three questions'
  },
  {
    id: 'husslin-framework-c002', itemId: 'husslin-framework', type: 'basic',
    front: "Why is question 2 ('what are they forced to do?') the step that actually creates an edge?",
    back: "Positioning is a static snapshot; combined with a price path it reveals FORCED FLOW — who must buy or sell regardless of preference (trapped longs liquidating, short-gamma dealers buying higher). Forced behaviour is predictable in a way opinion-driven flow is not.",
    context: 'Intuition'
  },
  {
    id: 'husslin-framework-c003', itemId: 'husslin-framework', type: 'cloze',
    front: "Adversarial premise: 'if you don't see the meat, you are the {{c1::meat}}' — the academic form is order-flow toxicity ({{c2::VPIN}}).",
    cloze: '{{c1::meat}}',
    back: "On every move someone supplies the liquidity another takes. Formalised as order-flow toxicity / VPIN — Easley, López de Prado & O'Hara (2012). [Established]",
    context: 'Motivation'
  },
  {
    id: 'husslin-framework-c004', itemId: 'husslin-framework', type: 'basic',
    front: "How do SHORT-gamma dealers hedge, and what does it do to the tape?",
    back: "They hedge in the SAME direction as price — buy as it rises, sell as it falls — which AMPLIFIES moves (adds momentum/trend, can cause cascades). Long-gamma dealers do the opposite: sell strength, buy weakness, PINNING price (mean reversion). [Established] Baltussen et al. (2021).",
    context: 'Formalization — dealer gamma'
  },
  {
    id: 'husslin-framework-c005', itemId: 'husslin-framework', type: 'cloze',
    front: "The price where the dealer book crosses from net-short to net-long gamma is the {{c1::gamma flip}} — it acts like a threshold/magnet.",
    cloze: '{{c1::gamma flip}}',
    back: "Gamma flip. Below it dealers are typically short gamma (amplify/trend); above it long gamma (pin/mean-revert) — or vice versa depending on the book. Market character changes as price crosses it.",
    context: 'Formalization'
  },
  {
    id: 'husslin-framework-c006', itemId: 'husslin-framework', type: 'basic',
    front: "What are vanna and charm, and why do they create an 'overnight bid' in the typical short-put dealer regime?",
    back: "In the short-put regime, FALLING implied vol (vanna) and the PASSAGE of time (charm) both force dealers to BUY the index to stay hedged — a structural overnight/into-OPEX bid (practitioner timing: ES bought ~2am ET as London front-runs; sold when vol rises). Strongest into monthly/quarterly OPEX, rolling off after. [Established] Ni et al. (2005).",
    context: 'Formalization — vanna/charm'
  },
  {
    id: 'husslin-framework-c007', itemId: 'husslin-framework', type: 'basic',
    front: "What does a persistent NEGATIVE perpetual premium (negative funding) imply about market-maker positioning, and the resulting risk?",
    back: "It implies market makers are net LONG, which loads UPSIDE-squeeze risk. Read the deviation from normal, not the level. [Established] funding mechanics — Ackerer et al. (2024); Schmeling, Schrimpf & Todorov (2023, BIS).",
    context: 'Formalization — perp premium'
  },
  {
    id: 'husslin-framework-c008', itemId: 'husslin-framework', type: 'basic',
    front: "In 'sell the rumour, buy the news', what is the pre-event TELL and the resulting lean?",
    back: "DOWN into the event ⇒ the market is hedged ⇒ the hedge unwinds afterward (relief rally) ⇒ lean LONG, entered before the announcement, closed on it. UP into the event ⇒ under-hedged/fragile ⇒ caution. Regime-dependent: pre-FOMC drift (Lucca-Moench 2015) faded post-2015 (Kurov 2021).",
    context: 'Worked example — event trade'
  },
  {
    id: 'husslin-framework-c009', itemId: 'husslin-framework', type: 'basic',
    front: "What is 'liquidity harvesting' and the illiquid-regime rule?",
    back: "Thin books (weekend/holiday/Asia) let large players push price into thin liquidity, run stops, and print fake levels — e.g. a recurring Saturday ~10-10:30am ET squeeze. The rule when liquidity is thin: CUT leverage, WIDEN targets, DROP the technicals (precise levels get manufactured and swept). [Established] Osler (2003, 2005).",
    context: 'Applications — microstructure tactics'
  },
  {
    id: 'husslin-framework-c010', itemId: 'husslin-framework', type: 'basic',
    front: "Why classify the REGIME before applying any setup?",
    back: "The same setup has OPPOSITE expected value in different regimes: fading positioning extremes is correct in a range but ruinous in a trend. So classify bull/bear and volatility supplied/demanded first; only then choose a tactic. He flips bullish at LOWS that reset positioning, not at highs.",
    context: 'Motivation — regime first'
  },
  {
    id: 'husslin-framework-c011', itemId: 'husslin-framework', type: 'basic',
    front: "What is the @Husslin_ trade architecture (two books)?",
    back: "A long-horizon SPOT BAG (held through cycles, lightly touched) plus a TRADING BOOK that hedges it. Style: largely delta-neutral (selling vol/options), directional bets mostly counter-trend on low timeframes and trend-following on high timeframes — so the bag rides the HTF uptrend while short-term trades hedge it.",
    context: 'Applications — trade architecture'
  },
  {
    id: 'husslin-framework-c012', itemId: 'husslin-framework', type: 'basic',
    front: "Why does the practitioner framework PAIR with rather than replace the academic microstructure modules?",
    back: "They answer different questions: the academic work (VPIN, Kyle impact, square-root law, funding spirals) explains WHY an edge exists and HOW MUCH flow moves price; the framework is a real-time decision procedure for WHETHER to take a trade now and at what size. Theory for the why; framework for the whether-now. Claims are evidence-tagged so you know what rests on established results.",
    context: 'Applications'
  },

  // ─────────────── @Husslin_ dealer-flows deep-dive ───────────────
  {
    id: 'husslin-dealer-flows-c001', itemId: 'husslin-dealer-flows', type: 'basic',
    front: "Why is a chunk of index flow from option dealers PREDICTABLE rather than discretionary?",
    back: "Dealers must continuously re-hedge the options they hold to stay neutral; the DIRECTION of that hedging is set by the Greeks (gamma/vanna/charm) and its TIMING by the expiry calendar and session — so it is mechanical and forecastable. The edge is front-running this forced flow, not predicting price.",
    context: 'Motivation'
  },
  {
    id: 'husslin-dealer-flows-c002', itemId: 'husslin-dealer-flows', type: 'cloze',
    front: "Read by what it forces: SHORT gamma ⇒ dealers {{c1::buy higher / sell lower}} (amplify); LONG gamma ⇒ {{c2::sell higher / buy lower}} (pin).",
    cloze: '{{c1::buy higher / sell lower}}',
    back: "Short gamma forces hedging WITH price (amplify/trend); long gamma forces hedging AGAINST price (pin/mean-revert). [Established] Baltussen et al. (2021).",
    context: 'Intuition / Formalization'
  },
  {
    id: 'husslin-dealer-flows-c003', itemId: 'husslin-dealer-flows', type: 'basic',
    front: "In the short-downside-hedge regime, what do vanna and charm each force the dealer to do?",
    back: "VANNA (delta vs IV): falling IV shrinks the short puts' delta → dealers BUY the underlying (rising IV → sell). CHARM (delta vs time): time decay of the downside puts → dealers BUY to re-hedge, strongest into expiry. Shortcut: calm + falling vol + time passing ⇒ dealers buy.",
    context: 'Intuition'
  },
  {
    id: 'husslin-dealer-flows-c004', itemId: 'husslin-dealer-flows', type: 'basic',
    front: "What is the gamma flip, and what regime is each side of it?",
    back: "The spot level where net dealer gamma crosses zero. ABOVE it: dealers long gamma → pinning / mean reversion (range-trade). BELOW it: dealers short gamma → amplification / trends & air-pockets (momentum-trade, respect downside). Knowing the level is half the battle.",
    context: 'Formalization'
  },
  {
    id: 'husslin-dealer-flows-c005', itemId: 'husslin-dealer-flows', type: 'basic',
    front: "In the DealerGammaSim model GEX(S)=Σ w_i·Γ(S,K_i)·S², why does a flip exist and why does more put demand raise it?",
    back: "Black-Scholes gamma Γ(S,K) peaks at S≈K, so short-gamma puts (lower strikes) dominate at low spot (GEX<0) and long-gamma calls (upper strikes) at high spot (GEX>0) — forcing a zero crossing. Scaling up put demand extends the negative (short-gamma) region upward, pushing the zero crossing (flip) to a higher spot.",
    context: 'Formalization — simulator'
  },
  {
    id: 'husslin-dealer-flows-c006', itemId: 'husslin-dealer-flows', type: 'basic',
    front: "Describe the vanna/charm 'overnight bid' and the practitioner timing.",
    back: "Falling IV (vanna) + time decay (charm) of customers' downside puts force the short dealers to buy the index. The rebalancing clusters into the cash close and NY morning and is front-run overnight — [Practitioner] ES bought from ~2am ET (London) when vol falls; sold when vol rises.",
    context: 'Worked example'
  },
  {
    id: 'husslin-dealer-flows-c007', itemId: 'husslin-dealer-flows', type: 'basic',
    front: "Why is the supportive bid strongest INTO monthly OPEX and why does it fade AFTER?",
    back: "Into the 3rd-Friday expiry, the charm/vanna hedging of the soon-to-expire options is largest, so the mechanical bid peaks. After expiry that block of options is gone, so the bid disappears — the post-OPEX 'air pocket' where supportive flows roll off. [Established] Ni et al. (2005).",
    context: 'Worked example'
  },
  {
    id: 'husslin-dealer-flows-c008', itemId: 'husslin-dealer-flows', type: 'basic',
    front: "Why treat the gamma-flip level as a probabilistic regime indicator, not a precise line?",
    back: "Dealer positioning is ESTIMATED, not observed: the GEX curve depends on assumptions about which options dealers hold and the OI per strike, and models/vendors disagree on level and sign; IV and time decay reshape it continuously. So the flip is a best-estimate boundary (likely pin above / amplify below), to be combined with the positioning read and sized for being wrong.",
    context: 'Applications'
  },
  {
    id: 'husslin-dealer-flows-c009', itemId: 'husslin-dealer-flows', type: 'cloze',
    front: "Overnight and intraday are {{c1::distinct, systematically different}} return regimes — the canvas the vanna/charm bid paints on.",
    cloze: '{{c1::distinct, systematically different}}',
    back: "[Established] Lou, Polk & Skouras (2019), 'A Tug of War: Overnight Versus Intraday Expected Returns.'",
    context: 'Intellectual lineage / sources'
  },
  {
    id: 'husslin-dealer-flows-c010', itemId: 'husslin-dealer-flows', type: 'basic',
    front: "How do you trade above vs below the gamma flip?",
    back: "ABOVE (long-gamma/pinning): expect mean reversion & suppressed vol → fade intraday extremes back toward the pin, modest targets. BELOW (short-gamma/amplifying): expect momentum & air-pockets → trade with the move and respect the downside (dealer selling into a drop self-reinforces). A rising VIX removes the bid and, below the flip, turns it into a sell.",
    context: 'Applications'
  },

  // ─────────────── @Husslin_ OI & positioning deep-dive ───────────────
  {
    id: 'husslin-oi-positioning-c001', itemId: 'husslin-oi-positioning', type: 'basic',
    front: "Open interest longs and shorts are equal in count — so why does OI tell you about squeeze direction?",
    back: "Because counts equal but behaviour differs: one side is the leveraged 'market-order' crowd that chases price and will be FORCED to cover or be liquidated against it. OI is the fuel gauge; you pair it with funding (which side pays = crowded) and the long-short deviation (how lopsided) to read which way it ignites.",
    context: 'Intuition'
  },
  {
    id: 'husslin-oi-positioning-c002', itemId: 'husslin-oi-positioning', type: 'cloze',
    front: "huss's rule: read the {{c1::deviation from normal}}, not the absolute level, of a positioning metric.",
    cloze: '{{c1::deviation from normal}}',
    back: "'Normal' differs by market/venue/regime, so a one-sided DEVIATION (not a fixed threshold) is what marks crowding / squeeze fuel. Use a moving baseline.",
    context: 'Motivation / intuition'
  },
  {
    id: 'husslin-oi-positioning-c003', itemId: 'husslin-oi-positioning', type: 'basic',
    front: "What does a persistent NEGATIVE perp premium imply, and a rich POSITIVE one?",
    back: "Negative ⇒ shorts pay, market makers net long ⇒ UPSIDE-squeeze risk (don't chase the short). Rich positive ⇒ crowded leveraged longs ⇒ FLUSH risk (don't chase the long). [Established] funding mechanics: Ackerer 2024; Schmeling 2023 (BIS).",
    context: 'Formalization'
  },
  {
    id: 'husslin-oi-positioning-c004', itemId: 'husslin-oi-positioning', type: 'basic',
    front: "Describe the two OI setups: as support/resistance and as an oscillator.",
    back: "S/R: after a volatile move the range forms where OI clusters (defended levels + liquidation fuel); a stop-hunt/fake-out to one side usually precedes the real break. OSCILLATOR: inside an OI band leverage builds to an extreme then flushes — treat band extremes like overbought/oversold for positioning, fade them when range-bound.",
    context: 'Formalization'
  },
  {
    id: 'husslin-oi-positioning-c005', itemId: 'husslin-oi-positioning', type: 'basic',
    front: "Crowded shorts + negative funding + OI clustered under resistance, price ranging. Setup and plan?",
    back: "Upside-squeeze setup. Expect a fake-out LOWER (trip late longs / wipe OI) then a squeeze UP into the OI/liquidation cluster above. Plan: bid the range low/fake-out, target the cluster, scale out. Invalidate if OI keeps building against you and funding flips richly positive (longs become the crowd → flush).",
    context: 'Worked example'
  },
  {
    id: 'husslin-oi-positioning-c006', itemId: 'husslin-oi-positioning', type: 'basic',
    front: "Why is aggregate vs per-exchange OI divergence worth watching?",
    back: "Aggregate OI shows the whole market; per-exchange OI (a retail-heavy venue) shows where the crowded, fragile leverage concentrates. A build-up isolated to one retail venue is more squeeze-prone than the same number spread across venues.",
    context: 'Intuition'
  },
  {
    id: 'husslin-oi-positioning-c007', itemId: 'husslin-oi-positioning', type: 'basic',
    front: "How do positioning squeezes relate to the academic funding-liquidity literature?",
    back: "They ARE the funding-liquidity spiral of Brunnermeier-Pedersen (2009): margin/funding constraints force deleveraging that moves price, which tightens constraints further. Positioning data (OI, funding, long-short deviation) is the practitioner's real-time read on where that spiral is loaded.",
    context: 'Applications / connections'
  },
  {
    id: 'husslin-oi-positioning-c008', itemId: 'husslin-oi-positioning', type: 'basic',
    front: "Why is positioning a probabilistic map, not a timing signal?",
    back: "OI/funding are venue-dependent and noisy, 'normal' drifts (needs a moving baseline), and crowding can persist far longer than expected; a clear setup can be invalidated by genuine spot-driven flow. So positioning locates the FUEL and TRIGGERS, but you still need a trigger and risk control for timing.",
    context: 'Applications'
  },

  // ─────────────── @Husslin_ event-trading deep-dive ───────────────
  {
    id: 'husslin-event-trading-c001', itemId: 'husslin-event-trading', type: 'basic',
    front: "Why are scheduled events called 'hedging-flow events, not fundamental ones'?",
    back: "The tradeable flow is the HEDGING and its unwind, not the headline: big holders buy protection into the event (price down + IV bid) and unwind after (relief rally). Most of the event is already priced by the hedging; the un-priced, tradeable part is the unwind — 'sell the rumour, buy the news.'",
    context: 'Motivation / intuition'
  },
  {
    id: 'husslin-event-trading-c002', itemId: 'husslin-event-trading', type: 'cloze',
    front: "The pre-event tell: DOWN into the event ⇒ {{c1::hedged / priced-in}} ⇒ lean long; UP into it ⇒ under-hedged / fragile ⇒ caution.",
    cloze: '{{c1::hedged / priced-in}}',
    back: "Down-drift (esp. with an IV bid) ⇒ hedged ⇒ the relief rally on the unwind favours a long. Up-drift ⇒ under-hedged, downside unprotected ⇒ caution or fade. He estimates down→long works ~80% [His].",
    context: 'Formalization'
  },
  {
    id: 'husslin-event-trading-c003', itemId: 'husslin-event-trading', type: 'basic',
    front: "What is the execution rule and where does off-hours repricing show up?",
    back: "Be positioned BEFORE the event and 'always close post-announcement' — take the relief, don't hold for more. For events that hit while CME futures are closed, the real institutional repricing shows up at the CME reopen / gap.",
    context: 'Formalization'
  },
  {
    id: 'husslin-event-trading-c004', itemId: 'husslin-event-trading', type: 'basic',
    front: "Two situations that invalidate the 'lean long into a hedged event' trade?",
    back: "(1) A genuine data SHOCK — the hedging-unwind thesis is void; stand aside. (2) The market actually RALLIED into the event (up-drift, under-hedged) — no protective flow to unwind, downside unprotected; don't take it. Plus discipline: always close on the announcement.",
    context: 'Formalization / practice'
  },
  {
    id: 'husslin-event-trading-c005', itemId: 'husslin-event-trading', type: 'basic',
    front: "Why must event trading be treated as regime-conditional, not a reliable seasonal?",
    back: "Its flagship form, the pre-FOMC drift (Lucca & Moench 2015), largely FADED after ~2015 (Kurov et al. 2021) once well known/arbitraged. So trade only the conditional version (confirmed by down-drift + IV bid), size for failure, abandon on a shock, and journal — a decayed seasonal traded as a constant becomes a loss.",
    context: 'Applications'
  },
  {
    id: 'husslin-event-trading-c006', itemId: 'husslin-event-trading', type: 'basic',
    front: "What confirms that the market is actually hedged into an event?",
    back: "A rising IV bid into the event confirms protective hedging; funding/positioning cooling confirms de-risking. Down price drift PLUS a rising IV bid is a strong hedged read — vs an up-drift with flat/falling IV (under-hedged).",
    context: 'Formalization'
  },
  {
    id: 'husslin-event-trading-c007', itemId: 'husslin-event-trading', type: 'basic',
    front: "How does event trading connect to dealer-hedging flows?",
    back: "The pre-event protective-put buying and IV bid ARE the same dealer Greeks (vanna/charm + protective-put demand) from the dealer-flows deep-dive; the relief is the unwind of that hedging. Event trading is dealer-flow analysis focused on a scheduled catalyst.",
    context: 'Connections'
  },
  {
    id: 'husslin-event-trading-c008', itemId: 'husslin-event-trading', type: 'basic',
    front: "Why not take the '~80%' hit rate at face value?",
    back: "It's a PRACTITIONER ESTIMATE, not a measured out-of-sample statistic; it predates the documented decay of the pre-FOMC drift and depends on the conditional setup being present. Treat it as a prior to validate in your own journal, confirm the tell each time, and size for being wrong.",
    context: 'Applications'
  },

  // ─────────────── @Husslin_ liquidity-harvesting deep-dive ───────────────
  {
    id: 'husslin-liquidity-harvesting-c001', itemId: 'husslin-liquidity-harvesting', type: 'basic',
    front: "Why is a large move in a thin book 'information-poor', and what do you read instead of the candle?",
    back: "In a thin book the same size moves price much further, so a big move may be a cheap, engineered push to harvest stops/liquidations rather than genuine repricing — the candle can't tell which. Read the REGIME (is the book thin?) and the GEOMETRY (where are stop/liquidation clusters, is OI building, which side is crowded). If you can't locate the geometry, assume you're the meat.",
    context: 'Intuition'
  },
  {
    id: 'husslin-liquidity-harvesting-c002', itemId: 'husslin-liquidity-harvesting', type: 'basic',
    front: "Describe the stop-clustering cascade and the liquidation-cluster-as-magnet effect.",
    back: "Stops cluster just beyond round numbers; triggering the first becomes market orders that push price into the next cluster, triggering more — a self-reinforcing CASCADE (Osler 2003/2005). Stacked leverage at a price is a pool of forced orders; filling them is profitable for hunters, so price GRAVITATES to the cluster like a magnet.",
    context: 'Intuition / formalization'
  },
  {
    id: 'husslin-liquidity-harvesting-c003', itemId: 'husslin-liquidity-harvesting', type: 'cloze',
    front: "The illiquid-regime rule: when it's thin, reduce {{c1::leverage}}, widen targets, and drop the technicals.",
    cloze: '{{c1::leverage}}',
    back: "A thin book degrades price's information content: outcomes are wider/adversarial (cut leverage), precise levels get manufactured and swept (widen targets, don't trust technicals). Don't confuse a big thin-book move with strength/weakness.",
    context: 'Formalization'
  },
  {
    id: 'husslin-liquidity-harvesting-c004', itemId: 'husslin-liquidity-harvesting', type: 'basic',
    front: "What are 'manufactured prints' and when are they set?",
    back: "In an illiquid window (often before an event), sized perps fake activity to set a high/low that algos and later traders anchor to and trade against — then the mover distributes spot into them. [Established] Harris (2003). It's why precise levels in thin windows are untrustworthy.",
    context: 'Intuition'
  },
  {
    id: 'husslin-liquidity-harvesting-c005', itemId: 'husslin-liquidity-harvesting', type: 'basic',
    front: "Saturday morning, thin book, liquidation cluster ~2% above, OI building, slightly negative funding. Read and plan?",
    back: "Harvest geometry: cheap to push price up into the cluster, run the crowded shorts' liquidations, then fade. Plan (a) ride the squeeze early and exit INTO the cluster (don't chase the last leg), or (b) defensive default — don't leave obvious stops in the thin window. Expect mean reversion after; invalidate if real SPOT flow (not just perps) is driving.",
    context: 'Worked example'
  },
  {
    id: 'husslin-liquidity-harvesting-c006', itemId: 'husslin-liquidity-harvesting', type: 'basic',
    front: "Why is the DEFENSIVE read the responsible takeaway here?",
    back: "The offensive read (pushing thin books, manufactured prints) shades into describing market manipulation — not a responsible or generalisable lesson. The defensive read protects everyone: recognise the thin-book regime, don't leave obvious stops, cut leverage, widen targets, and don't treat an engineered move as information.",
    context: 'Applications'
  },
  {
    id: 'husslin-liquidity-harvesting-c007', itemId: 'husslin-liquidity-harvesting', type: 'basic',
    front: "'If you don't see the meat, you are the meat' — what academic concept is this?",
    back: "Order-flow TOXICITY: on any move someone supplies the liquidity that informed/aggressive flow harvests; the probability you're on the wrong side of informed flow is formalised as VPIN (Easley, López de Prado & O'Hara, 2012). The defensive discipline minimises the chance your stops are the toxic flow's exit liquidity.",
    context: 'Practice / connections'
  },
  {
    id: 'husslin-liquidity-harvesting-c008', itemId: 'husslin-liquidity-harvesting', type: 'basic',
    front: "Which time-of-day / session observations does he flag, and how should you treat them?",
    back: "[Practitioner] a near-weekly Saturday ~10:00–10:30am ET ~2% squeeze; ~2am ET (London front-running dealer flows); ~7:30am ET often good for local bottoms when thin; fade outsized Asia-session moves. Treat these as practitioner observations that can DECAY — journal them, don't trade them as laws.",
    context: 'Formalization'
  },

  // ─────────────── Perpetual funding, basis & carry ───────────────
  {
    id: 'perp-funding-carry-c001', itemId: 'perp-funding-carry', type: 'basic',
    front: "A perpetual swap has no expiry. What replaces the maturity-driven convergence of a dated future?",
    back: "The FUNDING RATE — a payment between longs and shorts each interval (usually 8h). Perp rich (premium>0) ⇒ funding positive ⇒ LONGS PAY SHORTS, discouraging longs and pulling the perp down to spot; perp cheap ⇒ funding negative ⇒ SHORTS PAY LONGS, pushing it up. The off-side always pays, continuously anchoring the perp to spot. (No-arb price = risk-neutral E[spot at a random anchoring time], Ackerer-Hugonnier-Jermann.)",
    context: 'Motivation / intuition'
  },
  {
    id: 'perp-funding-carry-c002', itemId: 'perp-funding-carry', type: 'formula',
    front: "Write the exchange funding-rate formula.",
    latex: 'F(P) = P + \\mathrm{clamp}(I - P,\\ -c,\\ c),\\quad \\mathrm{clamp}(x,-c,c)=\\max(-c,\\min(c,x))',
    back: "P = premium index (perp vs spot), I = interest (~0.01%/8h), c = clamp (~0.05%) — BitMEX/Binance/Hyperliquid, all % per interval. Annualized = F × (365·24/interval hours), e.g. 1095× for 8h.",
    context: 'Formalization'
  },
  {
    id: 'perp-funding-carry-c003', itemId: 'perp-funding-carry', type: 'basic',
    front: "Describe the three regimes of F(P) = P + clamp(I−P, −c, c).",
    back: "(1) SMALL premium P∈[I−c, I+c]: clamp inactive ⇒ F = P + (I−P) = I (flat, funding = the interest rate). (2) RICH P > I+c: clamp binds at −c ⇒ F = P − c (longs pay ≈ the premium). (3) CHEAP P < I−c: clamp binds at +c ⇒ F = P + c (shorts pay). Continuous (F=I at both kinks) and non-decreasing in P.",
    context: 'Formalization'
  },
  {
    id: 'perp-funding-carry-c004', itemId: 'perp-funding-carry', type: 'basic',
    front: "How does funding read as a positioning signal (the Husslin perp-premium edge)?",
    back: "The SIGN of F = the crowded side. Persistent POSITIVE (longs pay) ⇒ crowded longs paying to hold ⇒ FLUSH risk. Persistent NEGATIVE (shorts pay, so market makers are net long) ⇒ upside-SQUEEZE risk (a move up forces shorts to cover). The magnitude (annualized) is how strongly the crowd is paying.",
    context: 'Intuition / applications'
  },
  {
    id: 'perp-funding-carry-c005', itemId: 'perp-funding-carry', type: 'basic',
    front: "What is the 'crypto carry', and how does it relate to convergence?",
    back: "The cash-and-carry: long spot + short perp is market-neutral and COLLECTS the funding when the premium is positive (Schmeling-Schrimpf-Todorov, 'Crypto Carry'). That arbitrage flow is itself the force pulling the perp back toward spot. At extremes funding annualizes to tens of %, and the build-up/collapse of the crowded carry drives crypto boom-bust.",
    context: 'Intuition / applications'
  },
  {
    id: 'perp-funding-carry-c006', itemId: 'perp-funding-carry', type: 'basic',
    front: "Funding on an 8h venue is +0.07%/interval. Annualized carry, who pays, positioning read?",
    back: "Annualized = 0.07% × 1095 ≈ 77%/yr. F>0 ⇒ LONGS PAY SHORTS ⇒ crowded longs paying ~77%/yr to hold ⇒ FLUSH risk. The cash-and-carry (long spot / short perp) collects that ~77% market-neutral, and that arb drags the perp back toward spot.",
    context: 'Worked example'
  },
  {
    id: 'perp-funding-carry-c007', itemId: 'perp-funding-carry', type: 'cloze',
    front: "Persistent NEGATIVE funding means shorts pay and {{c1::market makers are net long}} — the @Husslin_ read for upside-squeeze risk.",
    cloze: '{{c1::market makers are net long}}',
    back: "Negative funding ⇒ shorts pay longs ⇒ MMs net long collecting it ⇒ crowded shorts, upside-squeeze risk (a move up forces them to cover).",
    context: 'Intuition'
  },
  {
    id: 'perp-funding-carry-c008', itemId: 'perp-funding-carry', type: 'basic',
    front: "Why is funding a risk-neutral/positioning gauge not a forecast, and what is the danger in a crowded carry?",
    back: "Funding prices the CURRENT premium/crowding (the fee the off-side pays to hold; the convergence force) — high positive funding doesn't predict a fall, it says longs are crowded NOW. The crowded-carry danger: long-spot/short-perp looks like free market-neutral yield, but it's one-sided, so when conditions turn the carry collapses and forced deleveraging (the Brunnermeier-Pedersen funding-liquidity spiral) runs against the crowd — boom-bust. Size for the unwind; combine with liquidity & the framework.",
    context: 'Applications'
  },

  // ─────────────── @insiliconot method ───────────────
  {
    id: 'insilico-method-c001', itemId: 'insilico-method', type: 'basic',
    front: "In a volume profile, what is the POC (point of control) and how does it behave?",
    back: "The single most-traded price in the profile. It behaves like a MAGNET — price tends to return to it. [Established] Steidlmayer (1984); Dalton et al. (2007).",
    context: 'Intuition — profile'
  },
  {
    id: 'insilico-method-c002', itemId: 'insilico-method', type: 'basic',
    front: "What is the 'value area' in a volume profile?",
    back: "The price band containing the bulk of traded volume — the market's agreed 'fair' region. Trading inside it is acceptance; leaving it is a decision/commitment.",
    context: 'Intuition'
  },
  {
    id: 'insilico-method-c003', itemId: 'insilico-method', type: 'cloze',
    front: "Thick shelves of volume are {{c1::high-volume nodes}} (acceptance / support-resistance); thin gaps are {{c2::low-volume nodes}} or 'pockets' that price travels through fast.",
    cloze: '{{c1::high-volume nodes}}',
    back: "HVN = acceptance zones acting as S/R. LVN ('pockets') = rejected prices; little resting volume, so moves ACCELERATE across them and stall at the next HVN.",
    context: 'Intuition'
  },
  {
    id: 'insilico-method-c004', itemId: 'insilico-method', type: 'basic',
    front: "Why do low-volume 'pockets' (LVN) matter for how price moves?",
    back: "Because little volume rests there to transact against, so price travels through a pocket FAST — moves accelerate across pockets and decelerate at the next high-volume node. Pockets are where breakouts gain speed.",
    context: 'Intuition'
  },
  {
    id: 'insilico-method-c005', itemId: 'insilico-method', type: 'basic',
    front: "What are the four participant archetypes, and which to watch most?",
    back: "(1) Mechanical intraday (gamma-squeeze/VWAP/gap-fill/volume-pocket) — biggest size, most mechanical: WATCH MOST. (2) Compounders / never-sell — slow base. (3) Macro-beta / momentum. (4) Low-info YOLO/FOMO — the harvested liquidity. Operative question: which is driving the move, at what size?",
    context: 'Intuition — participants'
  },
  {
    id: 'insilico-method-c006', itemId: 'insilico-method', type: 'basic',
    front: "Why close bars on volume/range rather than on a fixed clock interval?",
    back: "Clock bars over-sample quiet periods and under-sample bursts. Volume/range/activity bars make each bar carry roughly EQUAL INFORMATION, so returns are closer to i.i.d. and statistically cleaner for any model built on top. [Established] López de Prado (2018), information-driven bars.",
    context: 'Formalization — non-time bars'
  },
  {
    id: 'insilico-method-c007', itemId: 'insilico-method', type: 'basic',
    front: "What are 'viscosity solutions' and how do they connect to trading?",
    back: "The rigorous (generally non-smooth) solution concept for the Hamilton-Jacobi-Bellman PDEs of STOCHASTIC OPTIMAL CONTROL — choosing the best action over time under uncertainty (Crandall & Lions, 1983). In trading they underlie optimal EXECUTION (Almgren-Chriss), optimal STOPPING/SWITCHING and pairs trading (Pham; Ngo & Pham). The 'action' side built on control theory, not heuristics.",
    context: 'Formalization — quant curriculum'
  },
  {
    id: 'insilico-method-c008', itemId: 'insilico-method', type: 'basic',
    front: "Name the four pillars of the quant curriculum @insiliconot points to (plus the stochastic-control track), with a canonical source for each.",
    back: "(1) Volume/market profile — Steidlmayer (1984), Dalton et al. (2007). (2) Non-time bars / ML — López de Prado (2018). (3) Volatility surface — Gatheral (2006). (4) Financial time series — Tsay (2010). Plus stochastic control / viscosity solutions — Pham (2009), Crandall-Lions (1983), Almgren-Chriss (2001).",
    context: 'Applications — study path'
  },
  {
    id: 'insilico-method-c009', itemId: 'insilico-method', type: 'basic',
    front: "What does the optimal-execution part of the curriculum connect to in the academic microstructure domain?",
    back: "Almgren & Chriss (2001), optimal execution of portfolio transactions — which is itself a module in the microstructure domain. It is literally on the viscosity-solutions / stochastic-control reading list.",
    context: 'Formalization / Connections'
  },
  {
    id: 'insilico-method-c010', itemId: 'insilico-method', type: 'basic',
    front: "Summarise the @insiliconot epistemic discipline (the method beyond the math).",
    back: "Specialise to one instrument and one timeframe (intraday BTC, no altcoins); read where trade actually happened (the profile), not where indicators say it should; distrust marketed/derived 'order-flow' data and easy-answer signals; build the action side on real optimal-control math. Rigor is partly WHAT YOU REFUSE TO USE.",
    context: 'Applications — discipline'
  },
  {
    id: 'insilico-method-c011', itemId: 'insilico-method', type: 'cloze',
    front: "The satirical 'very poor & very stupid' persona is, by his own account, a {{c1::filter}} — it screens out low-effort followers who want easy signals.",
    cloze: '{{c1::filter}}',
    back: "Filter. Separate the satire (packaging) from the substance (method + canonical sources). Treat the public material as a MAP to study, not a turnkey system.",
    context: 'Practice'
  },
  {
    id: 'insilico-method-c012', itemId: 'insilico-method', type: 'basic',
    front: "How do the @Husslin_ framework and the @insiliconot method divide the labour?",
    back: "Husslin reads POSITIONING and forced flow (OI, perp premium, dealer hedging) to decide WHEN an asymmetric trade exists and ride the narrative. Insilico reads the AUCTION (volume profile, participant archetypes) for structure and builds the ACTION (when/how aggressively to act) on stochastic optimal control. Husslin = when; Insilico = how-to-act.",
    context: 'Connections'
  },

  // ─────────────── @insiliconot charts & quant-curriculum deep-dive ───────────────
  {
    id: 'insilico-quant-curriculum-c001', itemId: 'insilico-quant-curriculum', type: 'basic',
    front: "People ask how to reconcile 'conflicting' support/resistance from different volume profiles. What is the resolution?",
    back: "There's no conflict once you fix WHICH auction/timeframe you're trading. Profiles NEST across scales (one range's low is another's mid), so levels only seem to conflict if you blend scales. Read the intraday profile for a scalp, the composite for context; within that fixed scale the levels are consistent.",
    context: 'Intuition'
  },
  {
    id: 'insilico-quant-curriculum-c002', itemId: 'insilico-quant-curriculum', type: 'basic',
    front: "In a volume profile, distinguish acceptance from rejection.",
    back: "ACCEPTANCE: price spends time and BUILDS VOLUME at a new level — the auction is migrating there (treat as a new fair area). REJECTION: a fast wick that builds NO volume — price is pushed back toward value/POC. Acceptance vs rejection is judged within a fixed timeframe.",
    context: 'Intuition'
  },
  {
    id: 'insilico-quant-curriculum-c003', itemId: 'insilico-quant-curriculum', type: 'cloze',
    front: "Close bars on a condition — a set amount of {{c1::volume / range / ticks}} — not on the clock, so each bar carries roughly equal information.",
    cloze: '{{c1::volume / range / ticks}}',
    back: "Information-driven (non-time) bars. Time bars over-sample dead periods and under-sample bursts; activity-based bars give returns closer to normal with less heteroskedasticity. [Established] López de Prado (2018).",
    context: 'Formalization'
  },
  {
    id: 'insilico-quant-curriculum-c004', itemId: 'insilico-quant-curriculum', type: 'basic',
    front: "What are viscosity solutions and which trading problems do they solve?",
    back: "The rigorous (non-smooth) solution concept for the Hamilton-Jacobi-Bellman PDEs of STOCHASTIC OPTIMAL CONTROL — the optimal action as a function of state (Crandall & Lions 1983; Crandall-Ishii-Lions 1992). Trading: optimal EXECUTION (Almgren-Chriss 2001), optimal STOPPING (when to exit), optimal SWITCHING / pairs-trading bands (Ngo & Pham; Pham 2009).",
    context: 'Formalization'
  },
  {
    id: 'insilico-quant-curriculum-c005', itemId: 'insilico-quant-curriculum', type: 'basic',
    front: "Name the quant-curriculum pillars and a canonical source for each.",
    back: "Profile / auction — Steidlmayer (1984), Dalton (2007). Non-time bars / ML — López de Prado (2018). Volatility surface — Gatheral (2006). Financial time series — Tsay (2010). Stochastic control / viscosity solutions — Crandall-Lions (1983), Pham (2009), Almgren-Chriss (2001). Market mechanics — Harris (2003).",
    context: 'Applications'
  },
  {
    id: 'insilico-quant-curriculum-c006', itemId: 'insilico-quant-curriculum', type: 'basic',
    front: "How do non-time bars and viscosity solutions express the SAME underlying value?",
    back: "Both say: sample and decide by the underlying PROCESS, not by convenience. Non-time bars sample by activity/information (not the clock); viscosity solutions decide the optimal action by the state dynamics (not a fixed indicator/heuristic). Read the auction, sample it right, act optimally.",
    context: 'Formalization'
  },
  {
    id: 'insilico-quant-curriculum-c007', itemId: 'insilico-quant-curriculum', type: 'basic',
    front: "How does the quant curriculum connect to the academic microstructure domain?",
    back: "Directly: Almgren-Chriss optimal execution — a module in the microstructure domain — is literally on the viscosity-solutions reading list, and the profile/impact ideas are the practitioner face of Kyle's price impact (why pockets move price fast) and O'Hara's microstructure theory. Two ends of one body of knowledge.",
    context: 'Connections'
  },
  {
    id: 'insilico-quant-curriculum-c008', itemId: 'insilico-quant-curriculum', type: 'basic',
    front: "What are the honest limits of this method/curriculum?",
    back: "(1) Volume-profile reading is DESCRIPTIVE, not a predictor — acceptance/rejection is judgement, not a signal. (2) The quant is genuinely graduate-level (PDEs, stochastic calculus), a multi-year path not a shortcut. (3) The deepest material (MEGA/Telegram/Medium) isn't reproduced — this is a map to the method and sources, not the territory.",
    context: 'Applications'
  },
  {
    id: 'insilico-quant-curriculum-c009', itemId: 'insilico-quant-curriculum', type: 'basic',
    front: "How is the 70% value area constructed from the POC? (As in the VolumeProfileSim.)",
    back: "Start at the POC (the highest-volume bin). Each step compare the SUM of the two bins ABOVE the current band with the SUM of the two BELOW, and annex the LARGER PAIR (both rows), until cumulative volume reaches ~70% of the total — Dalton's canonical two-row TPO-count rule. The result is a contiguous band containing the POC — the market's agreed 'fair' region.",
    context: 'Intuition — simulator'
  },
  {
    id: 'insilico-quant-curriculum-c010', itemId: 'insilico-quant-curriculum', type: 'basic',
    front: "In the volume profile, how do a balanced day and a trend day differ in shape?",
    back: "A BALANCED (mean-reverting) day builds a single fat, central POC with a tight value area — price kept returning to fair. A TREND day migrates, giving an elongated or double-distribution profile with a wider range and the POC shifted toward where price spent time at the new level (acceptance/migration). The shape itself classifies the session.",
    context: 'Intuition — simulator'
  },

  // ─────────────── Trading Sources & Curriculum ───────────────
  {
    id: 'trading-sources-curriculum-c001', itemId: 'trading-sources-curriculum', type: 'basic',
    front: "What are the four lenses for reading a trading claim, and what does each protect against?",
    back: "THEORY (why should the edge exist — mechanism/equilibrium; guards vs trading a causeless correlation). FUNDAMENTAL (the underlying object + what the paper measured; guards vs vague, data-free claims). PRACTICAL (signal/data/execution; guards vs 'interesting but un-actionable'). TIPS & TRAPS (decay, regime-dependence, estimation noise, ethics; guards vs trading a dead or regime-flipped edge as permanent — the costliest error).",
    context: 'Intuition'
  },
  {
    id: 'trading-sources-curriculum-c002', itemId: 'trading-sources-curriculum', type: 'basic',
    front: "Why is the pre-FOMC drift the canonical 'decay' case?",
    back: "Lucca & Moench (2015) documented +49bp in the 24h before FOMC (≈80% of the annual equity premium, 1994–2011) — clearing theory/fundamental/practical lenses. But Kurov et al. (2021) found it essentially DISAPPEARED after 2015 (arbitraged once known; uncertainty fell). The lesson: a documented edge can be dead by the time you read it — always apply the tips/decay lens.",
    context: 'Worked example'
  },
  {
    id: 'trading-sources-curriculum-c003', itemId: 'trading-sources-curriculum', type: 'basic',
    front: "What did the VPIN paper (Easley, López de Prado & O'Hara 2012) actually establish?",
    back: "That order flow is 'toxic' when it adversely selects market makers, and that VPIN estimates this from volume-imbalance in volume-time (no unobservable-parameter estimation). Crucially, VPIN ROSE in the hours before the 6 May 2010 flash crash as liquidity providers withdrew — making it an ex-ante risk gauge. It is a probability, not a price.",
    context: 'Formalization'
  },
  {
    id: 'trading-sources-curriculum-c004', itemId: 'trading-sources-curriculum', type: 'basic',
    front: "What did Baltussen et al. (2021) measure about dealer gamma and intraday momentum?",
    back: "Across 60+ futures (equities/bonds/commodities/FX), 1974–2020, the last-30-minutes return is positively predicted by the rest-of-day return (and reverts over the next days) — linked to hedging short gamma (options MMs + leveraged ETFs), which forces trading in the direction of price. Strong, broad, [Established] — but intraday-only and positioning is estimated.",
    context: 'Formalization'
  },
  {
    id: 'trading-sources-curriculum-c005', itemId: 'trading-sources-curriculum', type: 'cloze',
    front: "Osler (2003/2005) showed stop & take-profit orders {{c1::cluster at round numbers}}, producing gappy cascades that explain technical support/resistance and breakout momentum.",
    cloze: '{{c1::cluster at round numbers}}',
    back: "Clustering at round numbers → stop-loss-induced 'gappy' price cascades. A microstructural explanation for why trends reverse at predictable levels and gain momentum once those levels break.",
    context: 'Formalization'
  },
  {
    id: 'trading-sources-curriculum-c006', itemId: 'trading-sources-curriculum', type: 'basic',
    front: "Run 'short-gamma dealers create intraday momentum' through the four lenses (briefly).",
    back: "THEORY: a short-gamma hedger trades with price to stay delta-neutral → mechanical momentum. FUNDAMENTAL: Baltussen et al. (2021), 60+ futures 1974–2020, last-30-min predicted by rest-of-day. PRACTICAL: trade with the move into the close in a short-gamma regime; watch the gamma-flip sim. TIPS: reverts over days, positioning estimated, sign flips above the flip — size for it.",
    context: 'Intuition'
  },
  {
    id: 'trading-sources-curriculum-c007', itemId: 'trading-sources-curriculum', type: 'basic',
    front: "Give the honest evidence hierarchy [Established] > [Practitioner] > [His] with an example of each.",
    back: "[Established]: peer-reviewed mechanism + measured evidence (e.g. VPIN; dealer-gamma intraday momentum) — strongest, still regime/venue-dependent. [Practitioner]: documented by desks, not rigorously OOS-tested (e.g. the ~2am-ET overnight bid, the Saturday squeeze). [His]: one trader's own estimate (e.g. the '~80%' event hit rate). Scale conviction and size down the hierarchy; never let a [His] number pose as a measured statistic.",
    context: 'Applications'
  },
  {
    id: 'trading-sources-curriculum-c008', itemId: 'trading-sources-curriculum', type: 'basic',
    front: "What is the rough reading path from 'read the auction' to the optimal-control math?",
    back: "(1) Foundations — Harris (mechanics), O'Hara, Kyle. (2) Read the auction — Steidlmayer/Dalton (volume profile). (3) Sample correctly — López de Prado (non-time bars). (4) Forced flows — VPIN, Baltussen/Barbon-Buraschi/Ni/Lou (dealer hedging), Brunnermeier-Pedersen/Schmeling (funding), Osler (stops), Lucca-Moench+Kurov (events). (5) Reflexivity — Soros/Shiller. (6) Quant action — Gatheral (vol surface), Tsay (time series), Crandall-Lions/Pham/Almgren-Chriss (control/execution).",
    context: 'Applications'
  },

  // ─────────────── Gatheral volatility surface & SVI ───────────────
  {
    id: 'gatheral-vol-surface-c001', itemId: 'gatheral-vol-surface', type: 'basic',
    front: "What does the existence of a volatility smile/skew prove about Black-Scholes?",
    back: "That its constant-volatility (log-normal) assumption is violated. A single constant vol would imply the SAME implied vol at every strike/maturity — a flat surface. The market instead quotes a different implied vol per strike (smile/skew) and per maturity (term structure), evidence of fatter tails and asymmetry. The implied-vol surface is the market's correction to flat vol.",
    context: 'Motivation / Practice'
  },
  {
    id: 'gatheral-vol-surface-c002', itemId: 'gatheral-vol-surface', type: 'formula',
    front: "Write Gatheral's raw-SVI total-variance formula.",
    latex: 'w(k) = a + b\\left(\\rho(k-m) + \\sqrt{(k-m)^2 + \\sigma^2}\\right)',
    back: "Raw SVI for one maturity slice: total implied variance w = σ_BS²·τ as a function of log-forward-moneyness k. Implied vol σ_BS(k) = √(w(k)/τ). Five params: a (level), b (wing slope ≥0), ρ (skew, |ρ|<1), m (shift), σ (ATM curvature >0). [Gatheral 2006; Gatheral-Jacquier 2014]",
    context: 'Formalization'
  },
  {
    id: 'gatheral-vol-surface-c003', itemId: 'gatheral-vol-surface', type: 'basic',
    front: "In raw SVI, what does each of a, b, ρ, m, σ control, and which gives the equity down-skew?",
    back: "a = overall variance LEVEL; b = WING SLOPE (≥0); ρ = SKEW/rotation (∈(−1,1)); m = horizontal SHIFT; σ = ATM CURVATURE (>0, larger = smoother). ρ<0 produces the EQUITY DOWN-SKEW (low strikes priced at higher vol); ρ=0 is symmetric. With ρ<0 the left (low-strike) wing slope b(1−ρ) is steeper than the right b(1+ρ).",
    context: 'Formalization'
  },
  {
    id: 'gatheral-vol-surface-c004', itemId: 'gatheral-vol-surface', type: 'basic',
    front: "Where is the SVI smile minimum, and for an equity skew (ρ<0) is it left or right of m?",
    back: "w_min = a + bσ√(1−ρ²) at k* = m − ρσ/√(1−ρ²). For ρ<0 the term −ρσ/√(1−ρ²) is positive, so k* > m — the minimum sits on the HIGH-strike (right) side, because ρ<0 elevates the low-strike (left) wing. Cheapest vol is up among the calls; puts are the expensive side.",
    context: 'Formalization / Practice'
  },
  {
    id: 'gatheral-vol-surface-c005', itemId: 'gatheral-vol-surface', type: 'basic',
    front: "What are the two no-arbitrage checks the SVI simulator flags?",
    back: "(1) NO NEGATIVE VARIANCE: w_min = a + bσ√(1−ρ²) ≥ 0. (2) LEE'S MOMENT BOUND on the wings: b(1+|ρ|) ≤ 2 — the extreme-strike slope of total implied variance can't exceed 2 without arbitrage. Both are NECESSARY; the full Gatheral-Jacquier (2014) condition also requires the risk-neutral density g(k) ≥ 0 (no butterfly arbitrage). Violations turn the smile red.",
    context: 'Formalization / Practice'
  },
  {
    id: 'gatheral-vol-surface-c006', itemId: 'gatheral-vol-surface', type: 'cloze',
    front: "The asymptotic wing slopes of SVI total variance are {{c1::b(1+ρ)}} on the right and {{c2::b(1−ρ)}} on the left.",
    cloze: '{{c1::b(1+ρ)}}',
    back: "Right wing → b(1+ρ); left wing magnitude → b(1−ρ). Lee's moment formula caps the steeper one: b(1+|ρ|) ≤ 2.",
    context: 'Formalization'
  },
  {
    id: 'gatheral-vol-surface-c007', itemId: 'gatheral-vol-surface', type: 'basic',
    front: "How does the volatility surface connect to dealer vanna/charm hedging?",
    back: "The dealer Greeks are sensitivities to MOVEMENTS ALONG the surface: vanna = ∂Δ/∂σ (delta hedge changes as the surface's level/IV moves) and charm = ∂Δ/∂t (its decay in time). 'Falling IV forces short-put dealers to buy' is the surface dropping + the vanna re-hedge. The surface is the static object; gamma/vanna/charm flows are its dynamics.",
    context: 'Applications / Connections'
  },
  {
    id: 'gatheral-vol-surface-c008', itemId: 'gatheral-vol-surface', type: 'basic',
    front: "Why is SVI the industry-standard smile parameterization, and what are its honest limits?",
    back: "It is simultaneously parsimonious (5 params/slice), interpretable (each param is a visual feature), and — in the Gatheral-Jacquier form — guaranteed free of static arbitrage. Limits: it fits ONE slice (full surfaces need SSVI to avoid calendar arbitrage); the two basic checks are necessary not sufficient (full = density g(k)≥0); and implied vol is a risk-neutral expectation, not a forecast of realised vol.",
    context: 'Applications'
  },

  // ─────────────── SSVI: calendar-arbitrage-free full surface ───────────────
  {
    id: 'gatheral-ssvi-surface-c001', itemId: 'gatheral-ssvi-surface', type: 'basic',
    front: "Why does fitting each maturity slice independently with raw SVI risk a calendar-spread arbitrage?",
    back: "Because independent per-slice fits can let the total-variance slices CROSS — a longer-dated slice dipping below a shorter-dated one at some strike. Total variance must be non-decreasing in maturity (time only adds uncertainty), so a crossing means a longer option carries less total variance than a shorter one: buy the long, sell the short, riskless profit. SSVI parameterizes the WHOLE surface coherently to prevent this.",
    context: 'Motivation'
  },
  {
    id: 'gatheral-ssvi-surface-c002', itemId: 'gatheral-ssvi-surface', type: 'formula',
    front: "Write the SSVI total-variance slice and the ATM identity.",
    latex: 'w(k;T) = \\tfrac{1}{2}\\theta(T)\\left(1 + \\rho\\varphi k + \\sqrt{(\\varphi k + \\rho)^2 + 1 - \\rho^2}\\right),\\quad w(0;T)=\\theta(T)',
    back: "SSVI (Gatheral-Jacquier 2014): one ρ for the surface, ATM-total-variance term structure θ(T), smile function φ(θ)=η·θ^(−γ). At k=0 the root is √(ρ²+1−ρ²)=1, so w(0;T)=θ(T) — θ IS the ATM total variance.",
    context: 'Formalization'
  },
  {
    id: 'gatheral-ssvi-surface-c003', itemId: 'gatheral-ssvi-surface', type: 'basic',
    front: "State the SSVI calendar-spread arbitrage-free condition.",
    back: "The total-variance slices must be NON-DECREASING in maturity at every strike: T ↦ w(k;T) non-decreasing for all k (slices nested, never crossing). A necessary part is that the ATM total variance θ(T) is itself non-decreasing (∂_Tθ ≥ 0); the full Gatheral-Jacquier condition adds a monotonicity bound on θφ(θ).",
    context: 'Formalization'
  },
  {
    id: 'gatheral-ssvi-surface-c004', itemId: 'gatheral-ssvi-surface', type: 'basic',
    front: "State the SSVI per-slice butterfly arbitrage-free conditions and what they prevent.",
    back: "θφ(1+|ρ|) < 4 AND θφ²(1+|ρ|) ≤ 4 (with φ=φ(θ)). They keep each slice's implied risk-neutral DENSITY non-negative — too steep/curved a smile would imply a butterfly spread with negative price (negative probability). The surface analogue of the raw-SVI density condition g(k) ≥ 0.",
    context: 'Formalization'
  },
  {
    id: 'gatheral-ssvi-surface-c005', itemId: 'gatheral-ssvi-surface', type: 'basic',
    front: "In the SSVI simulator, how do you manufacture a calendar arbitrage, and how do you remove it?",
    back: "Drag the ATM term-structure SLOPE steeply NEGATIVE: long-dated ATM vol collapses, so long-dated θ falls below shorter-dated θ — the ATM points (and the slices) cross, flagged red. Remove it by bringing the slope back toward zero/positive, so θ(T) is non-decreasing again and the slices un-cross. (Pushing η too high instead breaks the butterfly bound on a slice — the ⚠.)",
    context: 'Worked example'
  },
  {
    id: 'gatheral-ssvi-surface-c006', itemId: 'gatheral-ssvi-surface', type: 'basic',
    front: "Why is a calendar-arbitrage-free surface a hard prerequisite for Dupire local volatility?",
    back: "Dupire's local variance has the maturity-derivative of total variance (forward variance) in its numerator. Calendar arbitrage means total variance DECREASES in maturity somewhere → forward variance NEGATIVE → local variance negative → local vol imaginary (√ of a negative). Variance can't be negative, so you need an arb-free surface first — a central reason SSVI exists.",
    context: 'Applications / Practice'
  },
  {
    id: 'gatheral-ssvi-surface-c007', itemId: 'gatheral-ssvi-surface', type: 'cloze',
    front: "In SSVI the parameter {{c1::θ(T)}} is the ATM total-variance term structure — the surface's backbone — and the calendar condition ∂_T{{c1::θ}} ≥ 0 is a condition directly on it.",
    cloze: '{{c1::θ(T)}}',
    back: "θ(T) = ATM total variance (w(0;T)=θ(T)). Its non-decreasing term structure is the necessary calendar-arbitrage condition.",
    context: 'Formalization'
  },
  {
    id: 'gatheral-ssvi-surface-c008', itemId: 'gatheral-ssvi-surface', type: 'basic',
    front: "How does basic SSVI relate to raw SVI and to eSSVI?",
    back: "Raw SVI fits ONE maturity slice (5 free params per slice); SSVI ties the whole SURFACE together with one ρ, the θ(T) term structure, and a smile function φ(θ), adding tractable conditions that bar calendar AND butterfly arbitrage. eSSVI (Hendriks & Martini) generalises SSVI by letting ρ vary with maturity for better fits while keeping arbitrage-free conditions; Corbetta et al. give robust calibration/interpolation. [Gatheral-Jacquier 2014]",
    context: 'Applications'
  },
  // ─────────────── Practitioner Playbooks (TraderXO · Jim Talbot · Luckshury · Tradingriot · LiquidityGoblin) ───────────────
  {
    id: "traderxo-expectancy-c001", itemId: "traderxo-expectancy", type: "basic",
    front: "In @Trader_XO's framing, what IS an edge (and how do you obtain it)?",
    back: "An edge is not a chart pattern but a single measurable number: a positive expectancy per trade. You don't FIND it, you ENGINEER it [His] through a repeatable, validated loop. [Established]",
    context: "Motivation"
  },
  {
    id: "traderxo-expectancy-c002", itemId: "traderxo-expectancy", type: "formula",
    front: "Write @Trader_XO's per-trade expectancy formula in R units (p = win rate, b = reward-to-risk).",
    back: "This is XO's verbatim '(win rate x avg win) - (loss rate x avg loss)' written cleanly in R units. The edge condition is simply E_R > 0. [Established]",
    latex: "E_R = p\\cdot b - (1-p)",
    context: "Formalization"
  },
  {
    id: "traderxo-expectancy-c003", itemId: "traderxo-expectancy", type: "formula",
    front: "Write the breakeven win rate p* in terms of the reward-to-risk ratio b.",
    back: "Found by setting E_R = 0 and solving for p. So at b=1 you need 50%, at b=2 ~33%, at b=3 25%. This is why a 25-40% win rate can be highly profitable when b is large enough that p > p*. [Practitioner]",
    latex: "p^* = \\frac{1}{1+b}",
    context: "Formalization"
  },
  {
    id: "traderxo-expectancy-c004", itemId: "traderxo-expectancy", type: "formula",
    front: "Write the binary Kelly fraction f* (growth-optimal capital to risk) in terms of expectancy E_R and odds b.",
    back: "Edge divided by odds (Kelly 1956). Kelly is the CEILING that maximises long-run log-growth but is brutally volatile, so XO deliberately bets only a small fraction of it. [Established]",
    latex: "f^* = \\frac{E_R}{b}",
    context: "Formalization"
  },
  {
    id: "traderxo-expectancy-c005", itemId: "traderxo-expectancy", type: "cloze",
    front: "At b = 3 (winners three times the size of losers), the breakeven win rate is {{c1::25%}}, so a 35% win rate is positive expectancy.",
    back: "From p* = 1/(1+b) = 1/4 = 25%. Since 35% > 25%, the low-win-rate edge is solidly positive. This is the formal basis for 'stop obsessing over being right.'",
    cloze: "{{c1::25%}}",
    context: "Intuition"
  },
  {
    id: "traderxo-expectancy-c006", itemId: "traderxo-expectancy", type: "basic",
    front: "In the worked example, Strategy B has a 60% win rate but b = 0.5 (small profits, losers run to 1R). What is its expectancy and why?",
    back: "E_R = 0.60 x 0.5 - 0.40 = -0.10R per trade, so it is NEGATIVE and bleeds out. Its breakeven win rate is p* = 1/1.5 = 66.7%, and 60% < 66.7%. Feeling like a winner 6 of 10 times is not an edge. [Practitioner]",
    context: "Worked example"
  },
  {
    id: "traderxo-expectancy-c007", itemId: "traderxo-expectancy", type: "basic",
    front: "What is @Trader_XO's DYNAMIC response when a trade goes against him, versus the textbook static stop?",
    back: "Textbook: one entry, one stop, one target, so a loss is a full -1R. Dynamic: CUT risk while keeping some exposure (a 'half-hour loss' of, say, -0.4R instead of -1R), shrinking the realised average loss and raising expectancy. [His]",
    context: "Worked example"
  },
  {
    id: "traderxo-expectancy-c008", itemId: "traderxo-expectancy", type: "basic",
    front: "How does @Trader_XO 'add to winners' (the mechanics), and from whom is it borrowed?",
    back: "Borrowed from Tom Hougaard: add to a winning position in small increments at STATIC risk (e.g. 0.5%) while trailing the stop up, so earlier lots buffer the adds. It is the opposite of scaling out toward a target. [Practitioner]",
    context: "Applications"
  },
  {
    id: "traderxo-expectancy-c009", itemId: "traderxo-expectancy", type: "basic",
    front: "Why is 'adding to winners' NOT the same as 'averaging down'?",
    back: "Adding to winners is base-building INTO strength with a defined invalidation (the double/treble bottom) and a trailing stop. Averaging down (DCA) adds to a LOSING position with no defined invalidation and 'leaves you underwater for months until you puke the position.' Same direction, opposite risk profile.",
    context: "Worked example"
  },
  {
    id: "traderxo-expectancy-c010", itemId: "traderxo-expectancy", type: "basic",
    front: "@Trader_XO classifies the market via ATR into five volatility environments. Name them.",
    back: "TREND (go-with, add to winners), RANGE (fade extremes back to value), BREAKOUT (position the retest), ROTATION (value-area to value-area), and MEAN-REVERSION (VWAP/band stretch reverts). [Practitioner]",
    context: "Applications"
  },
  {
    id: "traderxo-expectancy-c011", itemId: "traderxo-expectancy", type: "cloze",
    front: "@Trader_XO names the {{c1::cardinal error}} as deploying a strategy in the wrong volatility environment (e.g. a VWAP mean-reversion play that dies when vol flips to trend).",
    back: "Expectancy flips across regimes because p and b are not properties of the setup alone, they depend on the market state, so regime classification is a precondition for a valid expectancy estimate. [Practitioner]",
    cloze: "{{c1::cardinal error}}",
    context: "Intuition"
  },
  {
    id: "traderxo-expectancy-c012", itemId: "traderxo-expectancy", type: "basic",
    front: "In @Trader_XO's order flow, what does ABSORPTION signal and how does he act on it?",
    back: "Heavy AGGRESSIVE buying that ISN'T moving price ('if there's so much aggressive buying, why isn't price going up?') means a large passive participant is absorbing the flow. It is a FADE signal as price rolls over. He never trades the level on touch, only the reaction. [Practitioner]",
    context: "Applications"
  },
  {
    id: "traderxo-expectancy-c013", itemId: "traderxo-expectancy", type: "basic",
    front: "In @Trader_XO's order flow, what is EXHAUSTION and what distinguishes it from a real breakout?",
    back: "At a range tail, per-price traded volume TAPERS (forced covering, no follow-through), so the move is out of fuel and the extreme is a fade. A REAL breakout instead shows EXPANDING aggression. [Practitioner]",
    context: "Applications"
  },
  {
    id: "traderxo-expectancy-c014", itemId: "traderxo-expectancy", type: "basic",
    front: "What is @Trader_XO's 'risk manager first' loss-streak arithmetic across per-trade risk levels?",
    back: "Six losses in a row cost roughly: -3% at 0.5% risk ('doesn't feel so bad'), -6% at 1%, -12% at 2%; with poor discipline 'you'll lose 30% in weeks.' Small risk keeps drawdowns survivable so the positive expectancy can compound.",
    context: "Intuition"
  },
  {
    id: "traderxo-expectancy-c015", itemId: "traderxo-expectancy", type: "basic",
    front: "Why can over-betting ruin a trader even with a POSITIVE expectancy?",
    back: "Expectancy is only an AVERAGE; you live a PATH that contains losing streaks. Risking too large a fraction (roughly r > 2.f*) lets a normal streak draw the account down so far it can't recover, turning a +EV edge into near-certain ruin.",
    context: "Formalization"
  },
  {
    id: "traderxo-expectancy-c016", itemId: "traderxo-expectancy", type: "basic",
    front: "Why does @Trader_XO use 'statistical stops' rather than discretionary ones like 'above this high'?",
    back: "A discretionary stop is un-replicable and can't be back-tested. A statistical stop (e.g. at X% of the day's ATR range, Wilder 1978) is applied identically across 100 trades so p and b stay stable and E_R is meaningful. [Practitioner]",
    context: "Formalization"
  },
  {
    id: "traderxo-expectancy-c017", itemId: "traderxo-expectancy", type: "basic",
    front: "What does @Trader_XO's '5-minute test' assert?",
    back: "If you can't explain a strategy in five minutes, you don't have one. It is his blunt filter that pairs with the demand to validate expectancy before risking money ('you can't scale up randomness').",
    context: "Motivation"
  },
  {
    id: "traderxo-expectancy-c018", itemId: "traderxo-expectancy", type: "basic",
    front: "What is the honest limit @Trader_XO attaches to his self-reported '100% win-rate month'?",
    back: "It was only 3 trades, which proves SELECTIVITY, not a durable edge. The track-record figures (max drawdown < 7.5%, 60%+ growth over ~9 months) are his unaudited PrimeXBT screenshots, presented as self-reported only. [His]",
    context: "Applications / Cautions"
  },
  {
    id: "jimtalbot-method-c001", itemId: "jimtalbot-method", type: "basic",
    front: "In Talbot's method, what is the very FIRST decision you make, before choosing any setup?",
    back: "Name/classify the REGIME: decide whether the market is trending or chopping. The regime then decides which engine you are allowed to run. [Practitioner]",
    context: "Regime first"
  },
  {
    id: "jimtalbot-method-c002", itemId: "jimtalbot-method", type: "basic",
    front: "Talbot names the \"cardinal error\" that bleeds most retail accounts. What is it?",
    back: "The strategy-regime mismatch: running a trend setup in a range (or a mean-reversion setup in a trend) instead of matching the engine to the regime. [Practitioner]",
    context: "Regime first"
  },
  {
    id: "jimtalbot-method-c003", itemId: "jimtalbot-method", type: "cloze",
    front: "Reading RSI for regime: an uptrend shows RSI making higher highs above {{c1::70}} together with higher lows; a non-trend shows RSI oscillating around its midpoint while price ranges.",
    back: "RSI higher highs above 70 with higher lows = uptrend; RSI chopping its midpoint while price ranges = non-trend. [Practitioner]",
    cloze: "{{c1::70}}",
    context: "Regime first"
  },
  {
    id: "jimtalbot-method-c004", itemId: "jimtalbot-method", type: "basic",
    front: "What is Engine A (the momentum-reset trade), and why does Talbot say it works in a confirmed uptrend?",
    back: "In a confirmed uptrend, buy each time the 1H RSI resets toward ~30, because each reset tends to print a HIGHER LOW (\"you're buying the momentum resets\"). [His]",
    context: "Two engines"
  },
  {
    id: "jimtalbot-method-c005", itemId: "jimtalbot-method", type: "basic",
    front: "What is the filter for Engine A (the momentum-reset)?",
    back: "The 100 EMA plus RSI, both on the 1H timeframe. The trend filter is what makes the \"little drawdown\" possible; the same rule bleeds in a downtrend. [His]",
    context: "Two engines"
  },
  {
    id: "jimtalbot-method-c006", itemId: "jimtalbot-method", type: "basic",
    front: "Exactly when do you INVALIDATE Engine A (the momentum-reset)?",
    back: "When RSI prints a lower low and then a lower high — that signals the trend is breaking, so you stand down rather than keep buying resets. [His]",
    context: "Two engines"
  },
  {
    id: "jimtalbot-method-c007", itemId: "jimtalbot-method", type: "basic",
    front: "Talbot's crucial reframe of a moving average (used in Engine B / mean reversion): what IS an MA, and what is it NOT?",
    back: "An MA is AVERAGE PRICE, not support/resistance. A down-turning MA is a lower-timeframe downtrend, an up-turning MA an uptrend; use it as an entry inside a trend, never as a \"magic level.\" [Practitioner]",
    context: "Two engines"
  },
  {
    id: "jimtalbot-method-c008", itemId: "jimtalbot-method", type: "basic",
    front: "Why does Talbot say a bearish RSI divergence can actually be BULLISH?",
    back: "If it takes LESS strength to push price higher (a lack of sell pressure), that is strength, not weakness. So he does not mechanically short every divergence; he confirms on the lower timeframe first. [His]",
    context: "Two engines"
  },
  {
    id: "jimtalbot-method-c009", itemId: "jimtalbot-method", type: "basic",
    front: "What is \"passive absorption,\" and why does heavy longs unwinding while price HOLDS read as bullish?",
    back: "Large resting limit orders soak up aggressive flow so price holds despite heavy unwinding. Over-leveraged longs being forced out while price holds means strong hands are absorbing the supply (the weak side is gone) = bullish. Only readable on aggressive moves; a discretionary, screen-time skill. [His]/[Established]",
    context: "Order flow"
  },
  {
    id: "jimtalbot-method-c010", itemId: "jimtalbot-method", type: "formula",
    front: "Write Talbot's expectancy formula E_R in terms of win rate p and reward:risk b.",
    back: "Average P&L per trade across a setup's distribution; a setup is worth running only when E_R > 0. b is average win / average loss in R-multiples.",
    latex: "E_R = p\\cdot b - (1-p)",
    context: "Formalization"
  },
  {
    id: "jimtalbot-method-c011", itemId: "jimtalbot-method", type: "formula",
    front: "What is the breakeven win rate (the minimum p for which a setup has positive expectancy)?",
    back: "Setting E_R = p·b − (1−p) > 0 gives this threshold; above it the setup is worth running. Higher b (e.g. from \"scale out half at target\") lowers the win rate you need.",
    latex: "p > \\frac{1}{1+b}",
    context: "Formalization"
  },
  {
    id: "jimtalbot-method-c012", itemId: "jimtalbot-method", type: "formula",
    front: "Write the binary Kelly fraction f* that Talbot's sizing relates to.",
    back: "The growth-optimal risk fraction for a binary payoff. Betting a fraction of Kelly grows slowly but smoothly; beyond about 2f* even a genuinely +EV edge can ruin you because losses compound multiplicatively.",
    latex: "f^* = \\frac{E_R}{b} = \\frac{p(1+b)-1}{b}",
    context: "Formalization"
  },
  {
    id: "jimtalbot-method-c013", itemId: "jimtalbot-method", type: "cloze",
    front: "Talbot's sizing rule is \"size so a loss {{c1::doesn't move you}}\"; his practical test is that if a loss makes you angry, you are risking more than you're comfortable with.",
    back: "Mathematically this means betting a fraction of Kelly. Scale down until a loss is a non-event, then scale up with data. [His]",
    cloze: "{{c1::doesn't move you}}",
    context: "Formalization"
  },
  {
    id: "jimtalbot-method-c014", itemId: "jimtalbot-method", type: "basic",
    front: "What did journaling once reveal about Talbot's own trading, and how did he fix it?",
    back: "It revealed he was \"entering too early,\" so he added 15 minutes to his timing and expectancy improved — the journal proved \"I was right, I just entered early.\" (Journal every trade to learn each setup's expectancy.) [Practitioner]",
    context: "Formalization"
  },
  {
    id: "jimtalbot-method-c015", itemId: "jimtalbot-method", type: "basic",
    front: "What is Talbot's \"professional loser\" mindset?",
    back: "\"I go into every trade with the expectancy of a loss; I care about poor trades, not losing trades.\" A losing trade inside a +EV process is just a sample from the distribution — with positive EV you \"just keep clicking.\" [His]",
    context: "Formalization"
  },
  {
    id: "jimtalbot-method-c016", itemId: "jimtalbot-method", type: "basic",
    front: "What is \"hedging to pivot,\" and why does Talbot expect most of those hedges to fail first?",
    back: "At a logical exhaustion (e.g. a daily/weekly bearish divergence) he favours shorts to hedge his spot stack. He expects several hedges to fail first (small paper-cut losses); the one that hits lets him pivot bearish from a point of strength and rotate into a swing short. [His]",
    context: "Worked example"
  },
  {
    id: "jimtalbot-method-c017", itemId: "jimtalbot-method", type: "basic",
    front: "In Auction Market Theory as Talbot uses it, what is the POC (Point of Control)?",
    back: "The price with the most traded volume = fair value; a magnet around which price balances. Price tests above/below the value area to discover whether fair value should shift (acceptance vs rejection). [Practitioner]",
    context: "Applications"
  },
  {
    id: "jimtalbot-method-c018", itemId: "jimtalbot-method", type: "basic",
    front: "What is an \"air pocket,\" and how does it produce the \"Sunday squeeze\"?",
    back: "An air pocket is a price gap between levels with little resting liquidity; once the first stop triggers, price cascades through the void to the next level. Over thin weekend books, price runs obvious stop clusters at equal highs/lows — the \"Sunday squeeze\" — which Talbot fades. [Established]",
    context: "Worked example"
  },
  {
    id: "jimtalbot-method-c019", itemId: "jimtalbot-method", type: "basic",
    front: "Talbot's CME-below-spot (negative basis) idea: what status does the module explicitly give it?",
    back: "An explicitly UNTESTED hypothesis he flagged wanting to backtest — never treat it as an edge, only as a backtest idea. [His]",
    context: "Applications / cautions"
  },
  {
    id: "jimtalbot-method-c020", itemId: "jimtalbot-method", type: "basic",
    front: "Per Talbot, which is the easy part of trading and which is the hard part?",
    back: "\"Predicting price is the easiest part of trading; executing your plan is the hardest.\" Most traders fail on execution and risk management, not analysis. [His]",
    context: "Legacy"
  },
  {
    id: "luckshury-orderflow-c001", itemId: "luckshury-orderflow", type: "basic",
    front: "What is @Luckshuryy's signature edge / distinctive posture?",
    back: "A statistics-and-transparency posture applied mainly to reversals: he back-tests \"high-hit-rate\" levels and publishes the numbers, anchored on WHERE and WHEN a reversal is most likely. [His]",
    context: "Signature edge"
  },
  {
    id: "luckshury-orderflow-c002", itemId: "luckshury-orderflow", type: "basic",
    front: "What are the five layers @Luckshuryy fuses into one fixed daily routine?",
    back: "(1) Auction Market Theory / Market Profile, (2) order flow / footprint & CVD, (3) derivatives positioning (open interest & liquidations), (4) Smart-Money Concepts / ICT structures, (5) statistics + a repeatable routine. [His]",
    context: "Five-layer synthesis"
  },
  {
    id: "luckshury-orderflow-c003", itemId: "luckshury-orderflow", type: "cloze",
    front: "In his vocabulary cross-walk, a fair value gap is the same inefficiency as a Market-Profile {{c1::single print}}, and liquidity is just resting {{c2::stop clusters}}.",
    back: "He cross-walks trendy ICT/SMC terms back to their roots: FVG = single print, liquidity = resting stop clusters. [Practitioner]",
    cloze: "{{c1::single print}}",
    context: "Cross-walk"
  },
  {
    id: "luckshury-orderflow-c004", itemId: "luckshury-orderflow", type: "basic",
    front: "What is a naked POC, and how does @Luckshuryy treat it?",
    back: "A Point of Control (most-traded price) that has not yet been revisited; it acts as a magnet because unfinished auctions tend to be revisited. [Established]",
    context: "Auction objects"
  },
  {
    id: "luckshury-orderflow-c005", itemId: "luckshury-orderflow", type: "formula",
    front: "How is the Point of Control (POC) defined formally from a volume profile V(p)?",
    back: "The POC is the price with the most traded volume — the argmax of the volume-at-price function V(p). [Established]",
    latex: "p^{*} = \\arg\\max_{p} V(p)",
    context: "Formalization"
  },
  {
    id: "luckshury-orderflow-c006", itemId: "luckshury-orderflow", type: "basic",
    front: "How is the value area (VA) constructed from a volume profile?",
    back: "It is the contiguous band around the POC containing ~70% of total volume: grow outward from the POC, each step adding the heavier of the two row-PAIRS (the two prices above vs the two below), until the band holds at least 70% of total volume — Dalton's canonical two-row rule. Its edges (VAH/VAL) are acceptance boundaries. [Established]",
    context: "Formalization"
  },
  {
    id: "luckshury-orderflow-c007", itemId: "luckshury-orderflow", type: "basic",
    front: "How does @Luckshuryy define one-time framing for an uptrend, and why does it matter to him?",
    back: "An uptrend holds when every candle's low stays at or above the prior candle's low (no candle violates the prior low); a downtrend holds when each high stays at or below the prior high. On the daily this is his single strongest standalone bias — \"no need to fight a strong trend.\" [His]",
    context: "One-time framing"
  },
  {
    id: "luckshury-orderflow-c008", itemId: "luckshury-orderflow", type: "basic",
    front: "Why does @Luckshuryy read absorption from the footprint rather than the resting order book — and what is the honest caveat?",
    back: "The resting limit-order book can be pulled or spoofed; a footprint records only executed market orders per price cluster (what actually transacted), so \"they don't lie.\" Caveat: footprints are harder to fake, not impossible — large players can still mislead via icebergs/aggressive flow. [Practitioner]",
    context: "Order flow"
  },
  {
    id: "luckshury-orderflow-c009", itemId: "luckshury-orderflow", type: "cloze",
    front: "Absorption is read as high market-order aggression (high |delta|) with price barely moving ({{c1::Δp ≈ 0}}), meaning resting limits are soaking up the aggression — a reversal tell.",
    back: "Heavy delta with no price movement signals resting limits absorbing the aggression; often paired with a CVD-vs-price divergence. [Established, via VPIN]",
    cloze: "{{c1::Δp ≈ 0}}",
    context: "Absorption"
  },
  {
    id: "luckshury-orderflow-c010", itemId: "luckshury-orderflow", type: "basic",
    front: "What is a CVD-vs-price divergence between two pivots, and what does it flag?",
    back: "When price makes a new extreme but CVD (cumulative delta) does not, the move is weak and likely reversing — aggression is not following price. [Established, via VPIN order-flow toxicity]",
    context: "Order flow"
  },
  {
    id: "luckshury-orderflow-c011", itemId: "luckshury-orderflow", type: "basic",
    front: "State @Luckshuryy's three back-tested session statistics on his custom UTC windows.",
    back: "London makes the daily high or low only ~12% of days (lowest of all sessions); New York takes out a London extreme ~88-92% of days; NY makes BOTH the daily high and low ~38% of days. [His]",
    context: "Session statistics"
  },
  {
    id: "luckshury-orderflow-c012", itemId: "luckshury-orderflow", type: "basic",
    front: "Why does @Luckshuryy treat the New-York-sweeps-London figure as ~88-92% rather than a single number?",
    back: "Two of his articles report the London-break rate as 87.6% and 92%, so it should be treated as a range, not a point — and like all his percentages, re-verified (\"don't trust, verify\"). [His]",
    context: "Session statistics"
  },
  {
    id: "luckshury-orderflow-c013", itemId: "luckshury-orderflow", type: "basic",
    front: "Given his session stats, what is @Luckshuryy's timing routine and key sweep window?",
    back: "Pre-mark points of interest in London, generally WAIT for New York, and watch ~12:10-12:30 UTC (especially ~12:20) for a sweep of a London extreme — \"timing can matter more than your strategy.\" [His]",
    context: "Routine / timing"
  },
  {
    id: "luckshury-orderflow-c014", itemId: "luckshury-orderflow", type: "basic",
    front: "What are @Luckshuryy's four custom UTC session windows?",
    back: "Asia 00:00-06:00, London 06:00-12:00, New York 12:00-20:00, Close 20:00-00:00. These underpin all of his session statistics. [His]",
    context: "Custom sessions"
  },
  {
    id: "luckshury-orderflow-c015", itemId: "luckshury-orderflow", type: "basic",
    front: "What are the four readings of @Luckshuryy's open-interest matrix (price-direction × OI-direction)?",
    back: "Price up + OI up = new longs; price up + OI down = shorts squeezed; price down + OI up = new shorts; price down + OI down = longs squeezed. [Practitioner]",
    context: "OI matrix"
  },
  {
    id: "luckshury-orderflow-c016", itemId: "luckshury-orderflow", type: "basic",
    front: "How does the OI matrix explain @Luckshuryy's \"fade the breakout\"?",
    back: "New positions piling into a minor counter-trend bounce during a freefall (price up + OI up = new longs) are instantly offside and forced to close, adding fuel back in the trend's direction — so you fade the breakout rather than chase it. [Practitioner]",
    context: "Worked example / trigger"
  },
  {
    id: "luckshury-orderflow-c017", itemId: "luckshury-orderflow", type: "basic",
    front: "What is @Luckshuryy's rule for trading a liquidation flush?",
    back: "Trade back toward the wick for at least a 50% fill, with the stop just above where the new shorts began entering. [His]",
    context: "Worked example / risk"
  },
  {
    id: "luckshury-orderflow-c018", itemId: "luckshury-orderflow", type: "basic",
    front: "What is the \"internal resting liquidity\" that @Luckshuryy calls his overlooked edge?",
    back: "The higher-lows / lower-highs sitting INSIDE the major pivots (not just the obvious external highs/lows); his best trades come from these, which \"most people overlook.\" [His]",
    context: "Internal liquidity"
  },
  {
    id: "luckshury-orderflow-c019", itemId: "luckshury-orderflow", type: "basic",
    front: "In the VolumeProfileSim, what is the difference between a High-Volume Node (HVN) and a Low-Volume Node (LVN)?",
    back: "An HVN (green) is a chunky peak in V(p) — a price the market ACCEPTED (tends to pause/consolidate). An LVN (red pocket) is a thin trough — a price the market REJECTED and raced through, i.e. a single print / fair value gap that tends to get filled. [Established]",
    context: "Visualization"
  },
  {
    id: "luckshury-orderflow-c020", itemId: "luckshury-orderflow", type: "basic",
    front: "Per the module's cautions, how should a learner regard @Luckshuryy's session percentages?",
    back: "As his own self-reported backtests on his own instruments and custom UTC windows — to be re-verified on the learner's own market/timeframe, never treated as universal facts; sample-dependent edges decay. This is discretionary intraday trading where most attempters lose.",
    context: "Cautions"
  },
  {
    id: "tradingriot-orderflow-vrp-c001", itemId: "tradingriot-orderflow-vrp", type: "basic",
    front: "In Bakay's order-flow framing, what do limit orders represent, and what do market orders represent?",
    back: "Limit orders = LIQUIDITY (passive, resting; the \"heavier hand\" big players use to avoid slippage). Market orders = DELTA (aggressive, the \"weaker hand,\" but required for price to move). [Established]",
    context: "Order flow"
  },
  {
    id: "tradingriot-orderflow-vrp-c002", itemId: "tradingriot-orderflow-vrp", type: "basic",
    front: "Why do only market orders (not limit orders) move price in order flow?",
    back: "Price only ticks when aggressive market orders exceed the resting limit liquidity at a price (\"to go up you lift the offer; to go down you hit the bid\"). Until filled, a limit order is just an advertisement that can be pulled or spoofed in seconds, so it does not itself move price. [Established]",
    context: "Order flow"
  },
  {
    id: "tradingriot-orderflow-vrp-c003", itemId: "tradingriot-orderflow-vrp", type: "basic",
    front: "What is absorption divergence (Bakay's favourite reversal tell)?",
    back: "CVD makes a NEW EXTREME but PRICE does NOT — aggressive market orders are being eaten/absorbed by passive limit orders, so a strong hand is soaking up the flow, signalling a reversal. It is the opposite of a regular divergence (price new extreme, CVD doesn't). [His]",
    context: "CVD / absorption"
  },
  {
    id: "tradingriot-orderflow-vrp-c004", itemId: "tradingriot-orderflow-vrp", type: "cloze",
    front: "Bakay's golden rule for order-flow divergences: only use them {{c1::at key levels}}, never \"in the middle of nowhere.\"",
    back: "Absorption/regular divergences are only high-probability at key levels (value-area edge, naked POC, prior S/R). [His]",
    cloze: "{{c1::at key levels}}",
    context: "CVD / absorption"
  },
  {
    id: "tradingriot-orderflow-vrp-c005", itemId: "tradingriot-orderflow-vrp", type: "basic",
    front: "In Auction Market Theory, what is the value area and what fraction of volume defines it?",
    back: "The value area is the price range where ~68% (1 standard deviation) of volume traded — the market's \"fair value.\" The POC (most-traded price) within it acts as a magnet, and a naked/untested POC is strongest. [Practitioner]",
    context: "Auction Market Theory"
  },
  {
    id: "tradingriot-orderflow-vrp-c006", itemId: "tradingriot-orderflow-vrp", type: "cloze",
    front: "Auction Market Theory: markets are balanced (ranging) ~{{c1::80%}} of the time and imbalanced (trending) ~{{c2::20%}} of the time.",
    back: "Markets spend roughly 80% of the time balanced/ranging and 20% imbalanced/trending — the basis for a daily bias (fade extremes back to value vs trade the trend). [Practitioner]",
    cloze: "{{c1::80%}}",
    context: "Auction Market Theory"
  },
  {
    id: "tradingriot-orderflow-vrp-c007", itemId: "tradingriot-orderflow-vrp", type: "formula",
    front: "Write the variance risk premium (VRP) that Bakay sells, in terms of implied and realized variance.",
    back: "The variance risk premium is implied (risk-neutral) variance minus the variance that subsequently realizes, which is positive on average — implied vol is more often than not richer than realized, so the seller of variance is paid a premium for bearing variance/jump risk (Carr & Wu 2009; Bollerslev, Tauchen & Zhou 2009). [Established]",
    latex: "\\mathrm{VRP} \\approx \\sigma_{\\text{IV}}^2 - \\sigma_{\\text{RV}}^2 > 0 \\ \\text{(on average)}",
    context: "Formalization"
  },
  {
    id: "tradingriot-orderflow-vrp-c008", itemId: "tradingriot-orderflow-vrp", type: "basic",
    front: "Which evidence tier is the claim \"IV tends to exceed RV\" versus Bakay's claim that VRP should be ~80-90% of a mature book?",
    back: "That implied vol is systematically richer than realized (the VRP) is [Established] (Carr & Wu 2009; Bollerslev, Tauchen & Zhou 2009). The ~80-90%-short-vol sizing is [His] — a personal allocation, not a theorem.",
    context: "Formalization / cautions"
  },
  {
    id: "tradingriot-orderflow-vrp-c009", itemId: "tradingriot-orderflow-vrp", type: "basic",
    front: "How does Bakay typically express selling the variance risk premium (structures and DTE)?",
    back: "Sell neutral structures — ~30-DTE straddles (same-strike call+put) or strangles (OTM call+put) — betting price stays roughly the same so the options decay (theta favours the seller). Around earnings he sells ~1-DTE because IV >> the realized move. He prefers ETFs over single names for less headline risk. [His]",
    context: "Formalization"
  },
  {
    id: "tradingriot-orderflow-vrp-c010", itemId: "tradingriot-orderflow-vrp", type: "basic",
    front: "Why is the 5-delta tail hedge mandatory when selling vol, and what does it do?",
    back: "A short strangle's at-expiry P&L is bounded above by the premium but unbounded below as price moves far — selling vol is \"definitely NOT a free trade.\" Buying cheap ~5-delta options (≈5% chance of finishing ITM) far in the wings clips the wings, turning a ruinous tail into a bounded loss so a large move doesn't \"completely roll you over.\" [His]",
    context: "Tail hedge"
  },
  {
    id: "tradingriot-orderflow-vrp-c011", itemId: "tradingriot-orderflow-vrp", type: "basic",
    front: "What is the \"combining payout curves\" idea, and why does Bakay run both an option-selling book and a momentum book?",
    back: "Option-selling = many small wins, rare big loss (concave). Momentum/trend-following = many small losses, rare big win (convex). Running both blends the equity curve so it is smoother and psychologically survivable: in calm regimes the option book pays the bills; in a vol blow-up (its bad day) the momentum/tail side delivers the rare convex payoff. [His]",
    context: "Portfolio / payout curves"
  },
  {
    id: "tradingriot-orderflow-vrp-c012", itemId: "tradingriot-orderflow-vrp", type: "basic",
    front: "State Dalton's 80% rule and the caveat Bakay attaches to it.",
    back: "If price opens OUTSIDE the prior day's value area and then accepts back INSIDE for two 30-min TPO periods, there is ~80% probability it rotates to the OTHER side of the value area. Caveat: it is a probabilistic tendency, not a law — Bakay insists it must be backtested, not traded blindly. [Practitioner]",
    context: "Applications / Market Profile"
  },
  {
    id: "tradingriot-orderflow-vrp-c013", itemId: "tradingriot-orderflow-vrp", type: "basic",
    front: "In the worked short-vol example, what is the order of operations relative to selling the strangle, and why?",
    back: "Buy the cheap 5-delta tail hedge FIRST — before being short any vol — then sell the ~30-DTE strangle. The hedge is non-negotiable because selling vol is \"definitely NOT a free trade\"; buying it first ensures max loss is bounded against a sudden gap. [His]",
    context: "Worked example"
  },
  {
    id: "tradingriot-orderflow-vrp-c014", itemId: "tradingriot-orderflow-vrp", type: "basic",
    front: "What does the module's SVI vol-surface visualization teach about what Bakay sells against?",
    back: "The implied-vol smile/surface (SVI-parameterised, in total variance vs log-moneyness) is the object he harvests: the whole curve typically sits ABOVE subsequently realized vol (the VRP), and put-rich skew (ρ<0, \"fear\") is read on a percentile basis. The far wings show why a 5-delta tail hedge is cheap insurance against the rare big move.",
    context: "Visualization"
  },
  {
    id: "tradingriot-orderflow-vrp-c015", itemId: "tradingriot-orderflow-vrp", type: "cloze",
    front: "Bakay no longer day-trades his famous intraday tools — in his words, {{c1::\"I'm washed... I don't look below the daily timeframe.\"}}",
    back: "The order-flow / footprint / Auction Market Theory material is taught as his FOUNDATION (how markets move), not his current method. After burnout he rebuilt around a daily-timeframe, evidence-backed edge. [His]",
    cloze: "{{c1::\"I'm washed... I don't look below the daily timeframe.\"}}",
    context: "Two-phase arc / cautions"
  },
  {
    id: "liquidity-goblin-market-making-c001", itemId: "liquidity-goblin-market-making", type: "basic",
    front: "In @liquiditygoblin's market-making frame, where does a maker's P&L come from (he does NOT predict direction)?",
    back: "From selling liquidity for a tiny edge and earning it on volume: P&L is approximately (edge per trade) x (turnover). He quotes a bid slightly below fair value and an ask slightly above (the \"used-car dealer\" / \"be the bookie, not the gambler\"), capturing the spread and turning over capital to make it a business. [Practitioner]",
    context: "Motivation"
  },
  {
    id: "liquidity-goblin-market-making-c002", itemId: "liquidity-goblin-market-making", type: "formula",
    front: "Write the formula for a market-maker's approximate P&L in the \"be the bookie\" engine.",
    back: "P&L is roughly the edge captured per trade multiplied by how much you trade. This is why @liquiditygoblin obsesses over turnover (3-4x allocated capital per day) rather than direction: a few basis points of edge compounds into a real business. [Practitioner]",
    latex: "\\text{P\\&L} \\approx (\\text{edge per trade}) \\times (\\text{turnover})",
    context: "Motivation"
  },
  {
    id: "liquidity-goblin-market-making-c003", itemId: "liquidity-goblin-market-making", type: "cloze",
    front: "@liquiditygoblin targets a turnover of {{c1::3-4x}} his allocated capital per day (e.g. a $1M book trading ~$4M/day).",
    back: "3-4x. A $1M book trading roughly $4M/day. High turnover is what turns a tiny per-trade edge into a real business. [Practitioner]",
    cloze: "{{c1::3-4x}}",
    context: "Motivation"
  },
  {
    id: "liquidity-goblin-market-making-c004", itemId: "liquidity-goblin-market-making", type: "basic",
    front: "What single risk can make a positive-spread market-making book bleed, and what question does it correspond to?",
    back: "Adverse selection: the counterparty taking your quote may be informed (knows something you don't), buying just before a rise and selling just before a fall, so you systematically lose on those toxic fills. The running question is \"does he know something we don't?\" If too much flow is toxic, the spread no longer covers the losses. [Established]",
    context: "Motivation"
  },
  {
    id: "liquidity-goblin-market-making-c005", itemId: "liquidity-goblin-market-making", type: "basic",
    front: "Per Glosten-Milgrom, why does the bid-below / ask-above spread exist at all?",
    back: "It IS the adverse-selection premium. Because a fraction of incoming orders are informed, a competitive maker must set the ask above and the bid below expected value so the gains from uninformed/benign traders cover the losses to informed ones. The spread exists precisely so benign flow pays for the toxic flow. [Established]",
    context: "Formalization"
  },
  {
    id: "liquidity-goblin-market-making-c006", itemId: "liquidity-goblin-market-making", type: "basic",
    front: "What is a mark-out, @liquiditygoblin's signature toxicity metric?",
    back: "Taking each fill price and comparing it to the mid at later horizons (5s, 10s, 1min, 5min, end-of-day) to see whether the flow moved against you. A flat or positive curve = benign flow (keep quoting); a sharply adverse curve = toxic/informed flow (stop quoting that token, or hunt the faster info source the counterparty saw). It is the desk-level version of VPIN flow-toxicity. [Practitioner]",
    context: "Intuition / Formalization"
  },
  {
    id: "liquidity-goblin-market-making-c007", itemId: "liquidity-goblin-market-making", type: "formula",
    front: "Write the mark-out formula MO(tau) for a fill at price p_0 on side d (+1 buy, -1 sell), and state what MO < 0 means.",
    back: "m is the mid tau later (5s/10s/1m/5m/EOD). MO < 0 means the market moved against your fill, i.e. toxic/informed flow; a flat or positive curve is benign flow. [Practitioner]",
    latex: "\\text{MO}(\\tau) = d\\,\\big(m_{t+\\tau} - p_0\\big)",
    context: "Formalization"
  },
  {
    id: "liquidity-goblin-market-making-c008", itemId: "liquidity-goblin-market-making", type: "formula",
    front: "Write the Avellaneda-Stoikov reservation price r used for inventory-aware quoting (mid s, inventory q, risk aversion gamma, volatility sigma, horizon T-t).",
    back: "When the maker is long (q>0) the reservation price drops below the mid, skewing quotes down to offload the unwanted inventory; when short (q<0) it rises above the mid. The maker centres bid/ask around r, not the raw mid. [Established]",
    latex: "r = s - q\\,\\gamma\\,\\sigma^2 (T-t)",
    context: "Formalization"
  },
  {
    id: "liquidity-goblin-market-making-c009", itemId: "liquidity-goblin-market-making", type: "basic",
    front: "In @liquiditygoblin's \"chase the uninformed\" view, are crypto perps more or less toxic than spot, and what about options flow?",
    back: "Perps are LESS toxic than spot (full of leverage-driven degenerate gamblers). Options flow is MORE institutional and toxic (RFQ/OTC, ex-TradFi desks, miner hedging). The game is to transact against weaker/less-informed counterparties and route away from the more-informed. [Practitioner]",
    context: "Focus / Intuition"
  },
  {
    id: "liquidity-goblin-market-making-c010", itemId: "liquidity-goblin-market-making", type: "formula",
    front: "Write the perpetual funding rate F(P) used in the FundingRateSim (premium P, interest I, clamp c).",
    back: "Three regimes: F = I (flat band) for a small premium; F = P - c when the perp is rich (longs pay shorts); F = P + c when it is cheap (shorts pay). The sim plots F(P) so you read off annualised funding and who pays. [His]",
    latex: "F(P) = P + \\mathrm{clamp}(I - P,\\ -c,\\ c)",
    context: "Formalization / Viz"
  },
  {
    id: "liquidity-goblin-market-making-c011", itemId: "liquidity-goblin-market-making", type: "basic",
    front: "How is the cash-and-carry funding trade built, and what is @liquiditygoblin's ATOM example yield?",
    back: "Hold spot (earning staking/lending yield) and SHORT the perp against it to collect funding while staying delta-neutral. His ATOM example: ~20% staking + 11-20% funding, roughly 28% market-neutral (DeFi loops reached 30-40%). This is his one retail-accessible edge. [His]",
    context: "Worked example / Viz"
  },
  {
    id: "liquidity-goblin-market-making-c012", itemId: "liquidity-goblin-market-making", type: "basic",
    front: "What is @liquiditygoblin's gate for whether a funding carry is worth entering?",
    back: "The round-trip entry/exit on the liquid leg costs ~20-30bps (about one week of yield), so the carry only pays if it PERSISTS more than a week. Transient extreme prints ($FXS ~390% APR, $XCN ~190%) are gone (and tiny-capacity) before you recoup entry cost. It is not free: de-peg, liquidation, smart-contract/bridge, counterparty and funding-reversal risk. [His]",
    context: "Worked example"
  },
  {
    id: "liquidity-goblin-market-making-c013", itemId: "liquidity-goblin-market-making", type: "cloze",
    front: "@liquiditygoblin's simplest HFT signal: every print above ~$50k on the leading venue is followed by ~{{c1::20bps}} on laggard venues within seconds, but a week later the same trigger may give only ~{{c2::5bps}} (below cost).",
    back: "~20bps initially, decaying to ~5bps a week later. This is edge decay: he continuously renews, combines weak signals, and only fires when expected move > transaction cost. [His]",
    cloze: "{{c1::20bps}}",
    context: "Applications"
  },
  {
    id: "liquidity-goblin-market-making-c014", itemId: "liquidity-goblin-market-making", type: "basic",
    front: "What does \"our trading systems are basically a PID controller\" mean operationally for @liquiditygoblin?",
    back: "Quote width, size and aggressiveness must be continuously re-tuned toward a target because the market regime drifts; left untouched 2-3 weeks, every edge decays to roughly zero P&L. Trading is maintenance, not set-and-forget. Because you can only tell a dead edge from variance via P&L, you run a portfolio of uncorrelated strategies (not just assets). [His]",
    context: "Applications"
  },
  {
    id: "liquidity-goblin-market-making-c015", itemId: "liquidity-goblin-market-making", type: "basic",
    front: "What is \"do the good leg,\" @liquiditygoblin's evolution of atomic arbitrage, and why was it needed?",
    back: "Instead of always closing both legs atomically, take only the favourable leg and exit the other later on a deep liquid venue (e.g. Binance for ~3-5bps vs ~20bps atomic), keeping roughly twice the edge but carrying brief inventory/price risk you must be able to hedge. Needed because on-chain priority-gas auctions now bid ~95-96% of an atomic arb's profit to the validator. [His]",
    context: "Applications"
  },
  {
    id: "liquidity-goblin-market-making-c016", itemId: "liquidity-goblin-market-making", type: "basic",
    front: "What is @liquiditygoblin's limits-of-arbitrage cautionary tale (Kraken/Binance), and the operational rule it implies?",
    back: "A token looked mispriced between Kraken and Binance, but the venues settled on different chains (Ethereum mainnet vs BNB-Chain), so the same token was non-redeemable across them; the \"free\" arb couldn't be closed. Rule: never do one leg of a liquid-market arb blindly; first find the hidden friction (withdrawal limits, bridges, non-redeemability) that explains why the gap is still open. This is Shleifer-Vishny made operational. [Established]",
    context: "Applications"
  },
  {
    id: "liquidity-goblin-market-making-c017", itemId: "liquidity-goblin-market-making", type: "basic",
    front: "In options, what is the variance risk premium @liquiditygoblin profits from, and roughly what is the delta-hedged long-gamma P&L?",
    back: "The gap between the implied vol you pay for an option and the vol you realise delta-hedging it (implied is systematically richer than realised). Delta-hedged long-gamma P&L is approximately realised vol minus implied vol; long gamma, you gamma-scalp by buying dips and selling rips in the cheap liquid underlying. [Established]",
    context: "Applications"
  },
  {
    id: "liquidity-goblin-market-making-c018", itemId: "liquidity-goblin-market-making", type: "basic",
    front: "What honest limit does @liquiditygoblin place on his own method, including his most-quoted closing realism?",
    back: "Most of his core (automated MM, HFT, MEV, cross-exchange arb) is institutional and NOT retail-replicable; the retail-accessible pieces are not safe. His realism: most crypto fortunes were just being long ETH/BTC, trading for a living is a job ~99.9% of attempters fail at, and you should be skeptical of all shared \"alpha,\" including this module. [His]",
    context: "Legacy / Applications"
  },
  // ─────────────── Options strategy & the Greeks ───────────────
  {
    id: "options-greeks-payoffs-c001", itemId: "options-greeks-payoffs", type: "formula",
    front: "State the put-call parity relation (same strike K, same expiry, rate r, time-to-expiry tau).",
    back: "A long call minus a short put with the same strike and expiry replicates a forward: long the stock, short K bonds, paying S_T - K in every state at expiry. So by no-arbitrage their present values must be equal. This holds with NO assumption about the dynamics of S or about sigma, which is why it is model-free and serves as the exact verification oracle in scripts/verify-options-sim.mjs. [Established]",
    latex: "C - P = S - K e^{-r\\tau}",
    context: "options-greeks-payoffs / formalization — put-call parity"
  },
  {
    id: "options-greeks-payoffs-c002", itemId: "options-greeks-payoffs", type: "formula",
    front: "Write the Black-Scholes price of a European call (spot S, strike K, rate r, time-to-expiry tau, q=0).",
    back: "N(.) is the standard normal CDF. N(d2) reads as the risk-neutral probability the call finishes in-the-money, and N(d1) is the call's delta. The price is forced by replication cost (no-arbitrage), which is why the stock's expected return never appears. [Established]",
    latex: "C = S\\,N(d_1) - K e^{-r\\tau} N(d_2)",
    context: "options-greeks-payoffs / formalization — BS call price"
  },
  {
    id: "options-greeks-payoffs-c003", itemId: "options-greeks-payoffs", type: "formula",
    front: "Give the Black-Scholes formula for d1 (spot S, strike K, vol sigma, rate r, time-to-expiry tau).",
    back: "d2 is then obtained as d2 = d1 - sigma*sqrt(tau). At the money with r=0, ln(S/K)=0 so d1 = (1/2) sigma sqrt(tau) and d2 = -(1/2) sigma sqrt(tau). [Established]",
    latex: "d_1 = \\frac{\\ln(S/K) + \\left(r + \\tfrac12\\sigma^2\\right)\\tau}{\\sigma\\sqrt{\\tau}}",
    context: "options-greeks-payoffs / formalization — d1"
  },
  {
    id: "options-greeks-payoffs-c004", itemId: "options-greeks-payoffs", type: "formula",
    front: "Express the Black-Scholes call delta, and how put delta relates to it.",
    back: "Delta is the directional exposure (change in option value per $1 move in spot) and equivalently the hedge ratio: hold -Delta shares to neutralize direction. Delta_call - Delta_put = 1, which is put-call parity differentiated. A call's delta runs 0 to 1, a put's -1 to 0, and both are about +/-0.5 at the money. [Established]",
    latex: "\\Delta_{\\text{call}} = N(d_1), \\qquad \\Delta_{\\text{put}} = N(d_1) - 1",
    context: "options-greeks-payoffs / formalization — delta"
  },
  {
    id: "options-greeks-payoffs-c005", itemId: "options-greeks-payoffs", type: "basic",
    front: "What does gamma (Gamma) measure, and where (in spot and time) is it largest?",
    back: "Gamma is the rate of change of delta as spot moves (the second derivative of price with respect to spot, i.e. convexity). It is largest at-the-money and as expiry approaches — gamma 'lights up' near expiry (as tau -> 0). For a given strike, gamma is identical for the call and the put. [Established]",
    context: "options-greeks-payoffs / intuition + formalization — gamma"
  },
  {
    id: "options-greeks-payoffs-c006", itemId: "options-greeks-payoffs", type: "basic",
    front: "What does it mean to be long gamma, and why does long gamma always come with negative theta?",
    back: "Long gamma (you own options) means delta grows as the stock rises and shrinks as it falls, so re-hedging systematically buys low and sells high — you profit from realized movement. There is no free lunch: that convexity was bought with premium that decays each day, so long gamma ALWAYS pairs with negative theta (you bleed time). Short gamma is the mirror — you earn theta but are hurt by large moves. [Established]",
    context: "options-greeks-payoffs / intuition — long gamma / short theta trade-off"
  },
  {
    id: "options-greeks-payoffs-c007", itemId: "options-greeks-payoffs", type: "basic",
    front: "What does vega measure, and what is the sign of vega for a long option?",
    back: "Vega measures how much an option gains if implied volatility rises one point. A long option is long vega: it profits if the market starts pricing bigger moves, even before the stock moves at all. Vega (and gamma) are identical for a call and put of the same strike, both peaking at-the-money. Vega is the bridge to the implied-volatility surface that supplies sigma. [Established]",
    context: "options-greeks-payoffs / intuition — vega"
  },
  {
    id: "options-greeks-payoffs-c008", itemId: "options-greeks-payoffs", type: "cloze",
    front: "Theta is the option Greek for time decay: each quiet day a long option {{c1::loses}} value (Theta < 0) while a short option earns it.",
    back: "Options are wasting assets: held long they bleed time value (Theta < 0); held short they earn theta. This is the mirror of the gamma trade-off — you pay time to rent convexity, or earn time by selling it. [Established]",
    cloze: "{{c1::loses}}",
    context: "options-greeks-payoffs / intuition — theta decay"
  },
  {
    id: "options-greeks-payoffs-c009", itemId: "options-greeks-payoffs", type: "basic",
    front: "What is the net-Greek signature of a long ATM straddle, and which side of volatility does it take?",
    back: "A long straddle (long one call + long one put at the same ATM strike) is near delta-neutral and is LONG gamma, LONG vega, SHORT theta. It is the buy-volatility trade: it profits from a large move in either direction or a rise in IV, and bleeds time value if the stock sits still. [Established]",
    context: "options-greeks-payoffs / worked-example — straddle"
  },
  {
    id: "options-greeks-payoffs-c010", itemId: "options-greeks-payoffs", type: "basic",
    front: "What is the net-Greek signature of an iron condor, and which side of volatility does it take?",
    back: "An iron condor (short the inner put+call, long the outer put+call) is the straddle inverted: SHORT vega, SHORT gamma, POSITIVE theta. It is the sell-volatility, defined-risk trade, profiting from a quiet, range-bound tape and falling IV. It is taken in as a credit (the max profit) with loss capped at wing width minus the credit. [Established]",
    context: "options-greeks-payoffs / worked-example — iron condor"
  },
  {
    id: "options-greeks-payoffs-c011", itemId: "options-greeks-payoffs", type: "basic",
    front: "A long call is bought for premium c on strike K. Where is its breakeven at expiry?",
    back: "Breakeven is at K + c: the underlying must rise above the strike by enough to recover the premium paid. More generally a position's breakevens are where the expiry P&L (intrinsic value minus entry cost) crosses zero. For an ATM straddle the two breakevens sit at roughly strike +/- total premium. [Established]",
    context: "options-greeks-payoffs / worked-example + formalization — breakeven of a long call"
  },
  {
    id: "options-greeks-payoffs-c012", itemId: "options-greeks-payoffs", type: "cloze",
    front: "At expiry an option is worth only its {{c1::intrinsic value}}; before expiry it is worth the BSM mark-to-model, and the gap between the two curves is time value decaying away.",
    back: "Intrinsic value is max(S_T - K, 0) for a call and max(K - S_T, 0) for a put. The expiry P&L is the sum of leg intrinsics minus the entry cost; the simulator's vertical gap between the now-curve and the expiry kinks is exactly the time value that will bleed off (theta). [Established]",
    cloze: "{{c1::intrinsic value}}",
    context: "options-greeks-payoffs / formalization — payoff vs P&L"
  },
  {
    id: "options-greeks-payoffs-c013", itemId: "options-greeks-payoffs", type: "basic",
    front: "In the OptionsStrategySim, what happens to the dashed 'now' curve when you slide days-to-expiry down, and what lesson does it teach?",
    back: "The now-curve collapses onto the V-shaped expiry kinks — the time value (the vertical gap from the expiry P&L) bleeds away. This visualizes theta decay: a long position (e.g. a straddle) loses its time value as expiry approaches. Sliding IV (sigma) up instead lifts the now-curve, showing long-vega gains. [Established]",
    context: "options-greeks-payoffs / visualization — the sim's lesson"
  },
  {
    id: "options-greeks-payoffs-c014", itemId: "options-greeks-payoffs", type: "basic",
    front: "Name three Black-Scholes-Merton assumptions that real markets violate, and why this makes the Greeks 'local'.",
    back: "(1) Constant volatility — real sigma is stochastic and smiles across strike/maturity. (2) No jumps / continuous paths — real prices gap on news. (3) Frictionless continuous hedging — real hedging pays bid-ask and is discrete (the basic form also ignores dividends and early exercise). The Greeks are local because they are first/second-order derivatives (a Taylor expansion around current spot/vol): accurate for small moves, increasingly wrong for large ones where higher-order terms and the tails dominate. [Established]",
    context: "options-greeks-payoffs / applications + practice — model limits"
  },
  // ─────────────── Backtest overfitting & the Deflated Sharpe Ratio ───────────────
  {
    id: "backtest-overfitting-dsr-c001", itemId: "backtest-overfitting-dsr", type: "basic",
    front: "In quantitative trading, what is \"backtest overfitting\" (a.k.a. multiple testing / data-snooping)?",
    back: "Reporting the BEST of many tested strategies as if it had been chosen in advance. Because each skill-less strategy's sample Sharpe is a noisy estimate scattered around its true value, keeping the maximum of N of them samples the right tail rather than a random strategy, so the winner's Sharpe looks impressive purely from selection bias.",
    context: "Trading > backtest-overfitting-dsr > Why this matters / Intuition. [Established]"
  },
  {
    id: "backtest-overfitting-dsr-c002", itemId: "backtest-overfitting-dsr", type: "basic",
    front: "Why does testing N skill-less strategies and reporting the best one produce an inflated Sharpe ratio even with zero true skill?",
    back: "Each skill-less strategy has a TRUE Sharpe of zero, but its SAMPLE Sharpe over a finite record is a noisy draw scattered around zero. Taking the maximum of N such draws pulls the result into the right tail, and that upward pull grows with N (roughly like sqrt(2*ln N)). So the winner reflects selection bias, not edge.",
    context: "Trading > backtest-overfitting-dsr > Intuition (the luckiest of many coin-flippers). [Established]"
  },
  {
    id: "backtest-overfitting-dsr-c003", itemId: "backtest-overfitting-dsr", type: "formula",
    front: "Give the expected-maximum Sharpe (the \"luck threshold\" E[max_N]) of N skill-less trials used by the Deflated Sharpe Ratio.",
    back: "It is the Sharpe you should EXPECT from the best of N skill-less searches, where V = 1/(T-1) is the null variance of one Sharpe estimate, gamma is the Euler-Mascheroni constant, Z^{-1} is the inverse standard-normal CDF, and e is Euler's number. The threshold rises with N (more trials, higher bar) and shrinks with sample length T (via V). Bailey & Lopez de Prado (2014).",
    latex: "E[\\max_N] \\approx \\sqrt{V}\\,\\Big[(1-\\gamma)\\,Z^{-1}\\!\\big(1-\\tfrac{1}{N}\\big) + \\gamma\\,Z^{-1}\\!\\big(1-\\tfrac{1}{N e}\\big)\\Big]",
    context: "Trading > backtest-overfitting-dsr > Formalization, step 2. [Established]"
  },
  {
    id: "backtest-overfitting-dsr-c004", itemId: "backtest-overfitting-dsr", type: "basic",
    front: "In the expected-maximum Sharpe formula E[max_N], what are the two main drivers of the luck threshold, and which way does each push it?",
    back: "(1) N, the number of trials: the threshold RISES with N (more strategies tried, higher bar to clear). (2) V = 1/(T-1), the null variance of a single Sharpe estimate, i.e. sample length: a larger sample (bigger T) shrinks sqrt(V) and lowers the threshold, while a shorter sample raises it.",
    context: "Trading > backtest-overfitting-dsr > Formalization, step 2. [Established]"
  },
  {
    id: "backtest-overfitting-dsr-c005", itemId: "backtest-overfitting-dsr", type: "formula",
    front: "Write Lo's (2002) per-observation standard error of an estimated Sharpe ratio, in terms of skewness gamma_3 and kurtosis gamma_4.",
    back: "The Sharpe is an ESTIMATE with sampling noise. It shrinks with sample length T (the only term that grows the denominator), and is inflated by negative skew (gamma_3 < 0 makes the -gamma_3*SR term positive) and high kurtosis gamma_4. For Gaussian returns (gamma_3=0, gamma_4=3) it collapses toward sqrt((1 + 0.5*SR^2)/(T-1)).",
    latex: "\\sigma(\\hat{SR}) = \\sqrt{\\frac{1 - \\gamma_3\\,\\hat{SR} + \\frac{\\gamma_4-1}{4}\\,\\hat{SR}^2}{T-1}}",
    context: "Trading > backtest-overfitting-dsr > Formalization, step 1 (Lo 2002). [Established]"
  },
  {
    id: "backtest-overfitting-dsr-c006", itemId: "backtest-overfitting-dsr", type: "basic",
    front: "How does the Sharpe ratio's standard error (Lo 2002) change as the sample length T increases?",
    back: "It SHRINKS: T appears only in the denominator (T-1), so a longer record gives a less noisy Sharpe estimate. This is why a high Sharpe measured over 1 year is far less trustworthy than the same Sharpe over 10 years.",
    context: "Trading > backtest-overfitting-dsr > Intuition / Formalization (Lo 2002). [Established]"
  },
  {
    id: "backtest-overfitting-dsr-c007", itemId: "backtest-overfitting-dsr", type: "formula",
    front: "State the Probabilistic Sharpe Ratio (PSR) for a benchmark SR*.",
    back: "Phi is the standard-normal CDF. The PSR is the probability that the TRUE Sharpe exceeds the benchmark SR*, given the noisy estimate SR-hat and its standard error sigma(SR-hat). Against a benchmark of zero it just asks 'is the Sharpe better than nothing?'; the Deflated Sharpe Ratio replaces SR* with the N-trial expected maximum.",
    latex: "\\mathrm{PSR}(SR^\\*) = \\Phi\\!\\left[\\frac{\\hat{SR} - SR^\\*}{\\sigma(\\hat{SR})}\\right]",
    context: "Trading > backtest-overfitting-dsr > Formalization, step 3. [Established]"
  },
  {
    id: "backtest-overfitting-dsr-c008", itemId: "backtest-overfitting-dsr", type: "formula",
    front: "Define the Deflated Sharpe Ratio (DSR) in terms of the PSR and the luck threshold.",
    back: "The DSR is the Probabilistic Sharpe Ratio with the benchmark set to the N-trial expected maximum Sharpe E[max_N]. Read it as the probability the strategy is genuinely skilled AFTER deflating for the search: the goalpost is not 'better than zero' but 'better than the best fluke from N tries.' A common rule treats DSR > 0.95 as evidence of skill. Bailey & Lopez de Prado (2014).",
    latex: "\\mathrm{DSR} = \\mathrm{PSR}\\big(SR^\\* = E[\\max_N]\\big) = \\Phi\\!\\left[\\frac{\\hat{SR} - E[\\max_N]}{\\sigma(\\hat{SR})}\\right]",
    context: "Trading > backtest-overfitting-dsr > Formalization, step 4. [Established]"
  },
  {
    id: "backtest-overfitting-dsr-c009", itemId: "backtest-overfitting-dsr", type: "basic",
    front: "Holding the observed Sharpe fixed, what happens to the Deflated Sharpe Ratio as the number of trials N grows, and why?",
    back: "The DSR FALLS. The benchmark SR* = E[max_N] climbs toward (and eventually past) the observed Sharpe, so the gap (SR-hat - SR*) shrinks and Phi of it decreases. Past the breakeven N, luck alone explains the result and the DSR drops below 0.5 (likely overfit).",
    context: "Trading > backtest-overfitting-dsr > Formalization / Practice Q2. [Established]"
  },
  {
    id: "backtest-overfitting-dsr-c010", itemId: "backtest-overfitting-dsr", type: "basic",
    front: "What is the \"breakeven N\" in the Deflated Sharpe Ratio framework?",
    back: "The smallest number of trials N at which the luck threshold E[max_N] first reaches your observed Sharpe. Beyond it, pure search alone is expected to produce that Sharpe, so the backtest stops being evidence and the verdict flips toward likely OVERFIT.",
    context: "Trading > backtest-overfitting-dsr > Formalization, step 5 / Worked example. [Established]"
  },
  {
    id: "backtest-overfitting-dsr-c011", itemId: "backtest-overfitting-dsr", type: "cloze",
    front: "In the worked example (observed annual Sharpe 2, N=100, 3-year daily sample, Gaussian), the DSR comes out to about {{c1::82%}}, which is below the conventional 0.95 bar, so the verdict is inconclusive.",
    back: "DSR = Phi[(0.126 - 0.0922)/0.0365] = Phi[0.93] = ~0.82. A 'Sharpe 2' that felt like a slam dunk is, once deflated for just 100 trials, only about 82% likely to be genuine skill, falling short of the ~0.95 bar.",
    cloze: "{{c1::82%}}",
    context: "Trading > backtest-overfitting-dsr > Worked example, step 4."
  },
  {
    id: "backtest-overfitting-dsr-c012", itemId: "backtest-overfitting-dsr", type: "basic",
    front: "What single piece of information must always be reported for a backtest's Sharpe to be assessable for overfitting, and what did the authors call hiding it?",
    back: "The number of trials N (every parameter sweep, indicator tested and discarded, and variant). Without N you cannot compute the luck threshold or the DSR. Bailey, Borwein, Lopez de Prado & Zhu (2014) called failing to report N 'pseudo-mathematics and financial charlatanism' (Notices of the AMS).",
    context: "Trading > backtest-overfitting-dsr > Why this matters / Applications. [Established]"
  },
  {
    id: "backtest-overfitting-dsr-c013", itemId: "backtest-overfitting-dsr", type: "basic",
    front: "What does combinatorial purged cross-validation (CPCV) do that ordinary k-fold cross-validation fails to do for time-series backtests?",
    back: "Standard k-fold leaks information because adjacent observations overlap in time. CPCV PURGES training observations that overlap the test set (and EMBARGOES a buffer after it), then forms MANY train/test splits to yield a distribution of out-of-sample Sharpes rather than a single number. It also feeds the Probability of Backtest Overfitting (PBO). Lopez de Prado (2018).",
    context: "Trading > backtest-overfitting-dsr > Applications. [Established]"
  },
  {
    id: "backtest-overfitting-dsr-c014", itemId: "backtest-overfitting-dsr", type: "basic",
    front: "What is the fingerprint of overfitting that walk-forward analysis exposes?",
    back: "A walk-forward (out-of-sample) Sharpe far below the in-sample Sharpe. Walk-forward repeatedly fits on a trailing window and tests on the next, stepping forward through time, mimicking live deployment so the future is never used to fit the past; strategies whose 'edge' was a single lucky regime collapse.",
    context: "Trading > backtest-overfitting-dsr > Applications. [Established]"
  },
  {
    id: "backtest-overfitting-dsr-c015", itemId: "backtest-overfitting-dsr", type: "basic",
    front: "Why do negative skew and high kurtosis make a high Sharpe LESS trustworthy, and which strategy profile typically has them?",
    back: "They INFLATE Lo's (2002) Sharpe standard error: with positive SR-hat the -gamma_3*SR term becomes positive under negative skew, and the ((gamma_4-1)/4)*SR^2 term grows with high kurtosis. So the estimate is noisier than naive 1/sqrt(T) suggests. The classic profile is option-selling / 'picking up pennies in front of a steamroller' (variance-risk-premium harvesting): many small gains, rare large losses.",
    context: "Trading > backtest-overfitting-dsr > Practice Q5 / Applications. [Established]"
  },
  {
    id: "backtest-overfitting-dsr-c016", itemId: "backtest-overfitting-dsr", type: "cloze",
    front: "For factor-style research with hundreds of candidates, Harvey, Liu & Zhu (2016) argued the usual t>2 significance bar is far too lenient and a real factor should clear roughly {{c1::t > 3}}.",
    back: "Because hundreds of factors were tested (multiple testing), the standard t>2 hurdle inflates false discoveries. The principle generalizes: the more you search, the higher the significance bar must climb.",
    cloze: "{{c1::t > 3}}",
    context: "Trading > backtest-overfitting-dsr > Why this matters / Applications (Harvey-Liu-Zhu 2016)."
  },
  {
    id: "backtest-overfitting-dsr-c017", itemId: "backtest-overfitting-dsr", type: "basic",
    front: "How does the backtest-overfitting / DSR module relate to the expectancy framework module?",
    back: "Expectancy asks 'do you HAVE an edge?' (is E_R = p*b - (1-p) > 0). This module asks the adversarial sequel: 'is that edge REAL, or did you fit noise by trying many strategies?' A positive expectancy found by searching is not an edge until it survives deflation (DSR, out-of-sample holdout, walk-forward). Expectancy is necessary; surviving deflation makes it credible.",
    context: "Trading > backtest-overfitting-dsr > Why this matters / Connections. [Established]"
  },
  {
    id: "backtest-overfitting-dsr-c018", itemId: "backtest-overfitting-dsr", type: "basic",
    front: "What is the \"minimum backtest length\" idea, and how does it relate to the luck threshold?",
    back: "It is the flip side of the luck threshold: for a target Sharpe and a given N, there is a minimum sample length below which ANY high Sharpe is uninformative. Short records simply cannot support strong claims, so you must demand more history or lower your confidence. Lopez de Prado (2018).",
    context: "Trading > backtest-overfitting-dsr > Applications. [Established]"
  },
  // ─────────────── Market Profile (TPO) ───────────────
  {
    id: "market-profile-tpo-c001", itemId: "market-profile-tpo", type: "basic",
    front: "In a Market Profile (TPO) profile, what does the length of a row measure?",
    back: "TIME at price — the number of 30-minute periods that traded at that price (one TPO letter per period), NOT the volume traded there.",
    context: "[Established] TPO = time-price-opportunity. The session is split into 30-minute periods lettered A, B, C, …; each price a period trades at earns exactly one letter. itemId market-profile-tpo."
  },
  {
    id: "market-profile-tpo-c002", itemId: "market-profile-tpo", type: "basic",
    front: "How does a TPO (time) profile differ from a volume profile, even though both report a \"POC\" and a \"value area\"?",
    back: "A TPO profile counts TIME at price (number of 30-minute periods that visited each price); a volume profile counts VOLUME at price (contracts/shares traded there). A price visited by many periods on thin trade is a long TPO row but a short volume row — the two can disagree.",
    context: "[Established] The original Steidlmayer tool is the TIME profile; the volume-at-price profile is a separate, later tool. They share vocabulary but measure different things."
  },
  {
    id: "market-profile-tpo-c003", itemId: "market-profile-tpo", type: "basic",
    front: "What is the Point of Control (POC) in a Market Profile, and how does it behave?",
    back: "The POC is the longest row — the price touched by the most periods, hence the most TPOs. It is the day's time-weighted \"fairest\" price and acts as a magnet: price tends to rotate back to it.",
    context: "[Established] Formally POC = argmax_r c_r over row counts c_r; ties resolve to the row nearest the centre of the range. itemId market-profile-tpo."
  },
  {
    id: "market-profile-tpo-c004", itemId: "market-profile-tpo", type: "cloze",
    front: "The Value Area is the band of prices holding the central {{c1::~70%}} of all TPOs — the range the market accepted as fair.",
    back: "~70%",
    cloze: "{{c1::~70%}}",
    context: "[Established] The value-area 70% rule. Because whole row-pairs are annexed (Dalton's two-row rule), the captured fraction usually lands above 70%."
  },
  {
    id: "market-profile-tpo-c005", itemId: "market-profile-tpo", type: "basic",
    front: "How is the value area built outward from the POC?",
    back: "Start at the POC row, then repeatedly compare the SUM of the two rows ABOVE the current band with the SUM of the two rows BELOW, and annex the LARGER PAIR (both rows), accumulating counts, until the band holds ≥ 70% of all TPOs — Dalton's canonical two-row rule.",
    context: "[Established] Because whole row-pairs are added (Dalton's two-row rule), the captured fraction usually lands above 70%. itemId market-profile-tpo."
  },
  {
    id: "market-profile-tpo-c006", itemId: "market-profile-tpo", type: "cloze",
    front: "The Initial Balance (IB) is the price range of the {{c1::first two periods, A + B}} — the first hour.",
    back: "first two periods, A + B",
    cloze: "{{c1::first two periods, A + B}}",
    context: "[Established] The IB is the opening \"balance point\" struck before the slower, wider other-timeframe participants commit. Formally IB = [min(loA,loB), max(hiA,hiB)]."
  },
  {
    id: "market-profile-tpo-c007", itemId: "market-profile-tpo", type: "basic",
    front: "In Market Profile, what is range extension and what does it signal?",
    back: "Range extension is any trade that prints beyond the Initial Balance later in the day. It is the footprint of the other-timeframe participant — a longer-horizon buyer or seller with directional conviction pushing the auction out of its opening balance.",
    context: "[Established] extUp = max(0, high − IBhigh), extDown = max(0, IBlow − low). Strong one-sided extension = the other timeframe took directional control."
  },
  {
    id: "market-profile-tpo-c008", itemId: "market-profile-tpo", type: "basic",
    front: "What is a single print in a Market Profile?",
    back: "A row with exactly one TPO — a price only one 30-minute period touched, i.e. a fast, \"unauctioned\" move the market passed through quickly.",
    context: "[Established] Formally any row with c_r = 1. A run of single prints at an extreme forms a tail. itemId market-profile-tpo."
  },
  {
    id: "market-profile-tpo-c009", itemId: "market-profile-tpo", type: "basic",
    front: "What is a tail in a Market Profile, and what is the difference between a buying tail and a selling tail?",
    back: "A tail is a run of single prints at an extreme of the profile. A buying tail sits at the LOW (aggressive buyers rejected the cheap prices); a selling tail sits at the HIGH (aggressive sellers rejected the expensive prices). Tails are excess — strong evidence the auction was rejected there.",
    context: "[Established] Tails mark the extreme as meaningful support/resistance. itemId market-profile-tpo."
  },
  {
    id: "market-profile-tpo-c010", itemId: "market-profile-tpo", type: "basic",
    front: "What distinguishes a Trend day from a Normal day in Market Profile?",
    back: "A Trend day shows a strong net directional move with essentially one-sided extension — a long buying or selling tail and a profile that elongates rather than balances. A Normal day has a WIDE IB (the first hour set most of the day's range) with little extension — a textbook bell.",
    context: "[Practitioner] Two of the five day types read from IB width, extension and shape. itemId market-profile-tpo."
  },
  {
    id: "market-profile-tpo-c011", itemId: "market-profile-tpo", type: "basic",
    front: "In Market Profile day types, what distinguishes a Neutral day from a Normal-Variation day?",
    back: "A Neutral day has extension on BOTH sides — buyers and sellers each probed beyond the IB, leaving a balanced, two-sided day (often closing back in the middle). A Normal-Variation day has moderate ONE-sided extension — the IB held one side while the other timeframe stretched the range out the other.",
    context: "[Practitioner] Two of the five day types. itemId market-profile-tpo."
  },
  {
    id: "market-profile-tpo-c012", itemId: "market-profile-tpo", type: "basic",
    front: "What is a Double-Distribution day in Market Profile?",
    back: "A day with two fat value clusters separated by a single-print valley — the auction built value, migrated quickly through the thin middle, and built a second distribution.",
    context: "[Practitioner] The fifth day type. A single-print valley between two fat areas is its signature. itemId market-profile-tpo."
  },
  {
    id: "market-profile-tpo-c013", itemId: "market-profile-tpo", type: "basic",
    front: "On a balanced day (Normal/Neutral/quiet range), what is the responsive Market Profile trade?",
    back: "Fade the value-area edges back toward the POC: buy near the value-area low, sell near the value-area high, target the POC — betting the auction stays in balance and rotates (POC = magnet, value-area edges = fences).",
    context: "[Practitioner] Rotation inside value. The risk: a value-area edge that breaks with acceptance (time + trade beyond it) is the start of a migration, and the fade is wrong."
  },
  {
    id: "market-profile-tpo-c014", itemId: "market-profile-tpo", type: "basic",
    front: "On a trend day with range extension out of value, how should you trade, and why not fade it?",
    back: "Trade WITH the extension (initiative): in an initiative-up auction, buy responsive pullbacks toward developing value rather than shorting the highs. You don't fade because the other timeframe is in control and value migrates in that direction all day — fading a trend day is the classic way to get run over.",
    context: "[Practitioner] Initiative out of value vs rotation toward the POC. itemId market-profile-tpo."
  },
  {
    id: "market-profile-tpo-c015", itemId: "market-profile-tpo", type: "cloze",
    front: "The hinge between rotation and initiative trades is acceptance vs rejection: price trading beyond a reference and spending time there, building TPOs = {{c1::acceptance}} (go with it); a single-print tail with no follow-through = rejection.",
    back: "acceptance",
    cloze: "{{c1::acceptance}}",
    context: "[Established] Acceptance = value migrating, go with it; rejection = fade, expect a return toward value. itemId market-profile-tpo."
  },
  {
    id: "market-profile-tpo-c016", itemId: "market-profile-tpo", type: "basic",
    front: "What is a naked (virgin) POC, and why do traders watch it?",
    back: "A naked POC is a prior session's Point of Control that price has not traded back to since. As an untested fairest price it acts as a strong magnet and a high-probability target; once price trades back through it, it is no longer \"naked.\"",
    context: "[Practitioner] The same magnet logic applies to un-revisited single-print gaps. It is a probabilistic reference, not a guarantee. itemId market-profile-tpo."
  },
  // ─────────────── Variance Risk Premium & variance swaps ───────────────
  {
    id: "variance-risk-premium-c001", itemId: "variance-risk-premium", type: "basic",
    front: "What is realised volatility (as opposed to implied volatility)?",
    back: "Realised volatility is what actually happened: the annualised square root of realised variance, computed after the fact from the underlying's past daily log-returns. It is a fact about the historical tape, in contrast to implied volatility, which is what the options market prices in about the future.",
    context: "Trading domain, variance-risk-premium module. Beginner. [Established]"
  },
  {
    id: "variance-risk-premium-c002", itemId: "variance-risk-premium", type: "formula",
    front: "Write the formula for annualised realised variance (RV) over n daily log-returns r_t = ln(S_t / S_{t-1}).",
    back: "RV is the sum of squared daily log-returns, scaled by 252/n to annualise (252 trading days per year). It is backward-looking and computed from the actual price path; the embedded VarianceSwapSim uses exactly this definition.",
    latex: "RV = \\frac{252}{n}\\sum_{t=1}^{n} r_t^2, \\qquad r_t = \\ln\\frac{S_t}{S_{t-1}}",
    context: "Trading domain, variance-risk-premium module. Beginner/Intermediate. [Established]"
  },
  {
    id: "variance-risk-premium-c003", itemId: "variance-risk-premium", type: "formula",
    front: "How does the variance-swap strike K_var relate to the implied volatility sigma_imp?",
    back: "The variance-swap strike is the squared implied volatility. It is the level of future variance the options market lets you lock in today, fixed at inception of the swap.",
    latex: "K_{var} = \\sigma_{imp}^2",
    context: "Trading domain, variance-risk-premium module. Beginner. [Established]"
  },
  {
    id: "variance-risk-premium-c004", itemId: "variance-risk-premium", type: "cloze",
    front: "The variance risk premium exists because long-variance positions are {{c1::crash insurance}}: they pay off precisely when the rest of a portfolio is losing, so risk-averse investors overpay for that protection.",
    back: "Long-volatility positions pay off exactly during selloffs (e.g. 2008, 2020), when other assets fall. Risk-averse investors overpay for that protection just as one overpays for home insurance, and whoever sells variance is compensated for warehousing the crash risk. This is why the VRP is a genuine risk premium, not an arbitrage.",
    cloze: "{{c1::crash insurance}}",
    context: "Trading domain, variance-risk-premium module. Beginner/Intermediate. [Established]"
  },
  {
    id: "variance-risk-premium-c005", itemId: "variance-risk-premium", type: "formula",
    front: "Write the definition of the variance risk premium (VRP) and state its usual sign.",
    back: "The VRP is the variance-swap strike (risk-neutral / implied variance) minus the real-world expected realised variance. It is usually positive because implied variance sits systematically above the variance that subsequently realises (Carr & Wu 2009). E^P denotes expectation under the real-world measure P.",
    latex: "\\text{VRP} = K_{var} - \\mathbb{E}^{\\mathbb{P}}[RV] = \\sigma_{imp}^2 - \\mathbb{E}[\\sigma_{realised}^2] > 0",
    context: "Trading domain, variance-risk-premium module. Intermediate. [Established]"
  },
  {
    id: "variance-risk-premium-c006", itemId: "variance-risk-premium", type: "basic",
    front: "Empirically, what did Carr & Wu (2009) establish about the variance risk premium?",
    back: "By synthesizing the variance-swap rate from options and subtracting realised variance across five indices and 35 single stocks, Carr & Wu (2009) found the VRP to be large, negative for the buyer of variance, and stubbornly persistent: implied variance is systematically richer than realised variance.",
    context: "Trading domain, variance-risk-premium module. Intermediate. [Established]"
  },
  {
    id: "variance-risk-premium-c007", itemId: "variance-risk-premium", type: "basic",
    front: "What did Bollerslev, Tauchen & Zhou (2009) show about the variance risk premium beyond its existence?",
    back: "They showed the VRP predicts future aggregate equity returns: when the premium is high (fear is high), expected returns are high. This links the VRP to the equity premium and a time-varying economic-uncertainty / long-run-risk story.",
    context: "Trading domain, variance-risk-premium module. Intermediate/Advanced. [Established]"
  },
  {
    id: "variance-risk-premium-c008", itemId: "variance-risk-premium", type: "formula",
    front: "What is the payoff of a variance swap at expiry, and what does the short side receive per unit variance notional?",
    back: "The long receives RV - K_var times the variance notional N_var. The short therefore receives K_var - RV per unit variance notional: a small premium when realised undershoots the strike, a large loss when realised overshoots it.",
    latex: "\\text{payoff}_{long} = N_{var}\\,(RV - K_{var}), \\qquad \\text{payoff}_{short} = N_{var}\\,(K_{var} - RV)",
    context: "Trading domain, variance-risk-premium module. Intermediate. [Established]"
  },
  {
    id: "variance-risk-premium-c009", itemId: "variance-risk-premium", type: "basic",
    front: "Why is variance, rather than volatility, the natural underlying for these swaps?",
    back: "Variance is additive in time and exactly replicable from a static strip of options plus a dynamic hedge. A volatility swap, paying sqrt(RV) - K_vol, is not cleanly replicable: it carries a convexity correction, so variance is the cleaner, model-free building block.",
    context: "Trading domain, variance-risk-premium module. Advanced. [Established]"
  },
  {
    id: "variance-risk-premium-c010", itemId: "variance-risk-premium", type: "formula",
    front: "How is the variance notional N_var related to the vega notional N_vega?",
    back: "Differentiating sigma^2 with respect to sigma gives 2*sigma, so the variance notional equals the vega notional divided by 2*sigma_imp. Near the strike a variance swap behaves like a vega-notional vol position; far from it the squared payoff makes it convex in vol.",
    latex: "N_{var} = \\frac{N_{vega}}{2\\,\\sigma_{imp}}",
    context: "Trading domain, variance-risk-premium module. Advanced. [Practitioner]"
  },
  {
    id: "variance-risk-premium-c011", itemId: "variance-risk-premium", type: "cloze",
    front: "Realised variance cannot fall below zero but has no upper ceiling, so its distribution is {{c1::right-skewed}}; flipping it, the short variance-swap P&L (K_var - RV) is therefore left-skewed.",
    back: "A quiet quarter pins RV near a small number; a crash sends it through the roof (vol clusters and spikes). Because RV has a long right tail, the short payoff K_var - RV has a long left tail: many small wins, rare large losses.",
    cloze: "{{c1::right-skewed}}",
    context: "Trading domain, variance-risk-premium module. Intermediate. [Established]"
  },
  {
    id: "variance-risk-premium-c012", itemId: "variance-risk-premium", type: "basic",
    front: "What does the phrase 'pennies in front of a steamroller' describe about the short-vol P&L?",
    back: "It captures the left-skewed short-variance payoff: a high win rate, a small average gain (the collected premium), and an occasional catastrophic loss. The mean can be positive and the strategy can still ruin you if you size it as though the tail losses cannot happen.",
    context: "Trading domain, variance-risk-premium module. Intermediate. [Practitioner]"
  },
  {
    id: "variance-risk-premium-c013", itemId: "variance-risk-premium", type: "basic",
    front: "In the short-vol simulator, when you raise vol spikes per year from 1 to 4, which readout barely moves and which deteriorate sharply, and what is the sizing lesson?",
    back: "The win rate barely moves (about 97% to 92%). The tail metrics deteriorate sharply: worst roughly doubles (about -940 to -1500 var-points), CVaR-5% swings from mildly to deeply negative (about -70 to -480), P&L skew falls (about -0.45 to -0.55), and Sharpe drops (about 2.2 to 1.5). Lesson: the safest-looking metric (win rate) is least sensitive to tail risk; size for the CVaR and worst case, never the win rate, and carry a tail hedge.",
    context: "Trading domain, variance-risk-premium module. Advanced. [Practitioner]"
  },
  {
    id: "variance-risk-premium-c014", itemId: "variance-risk-premium", type: "cloze",
    front: "A variance swap is model-free because the realised variance of a delta-hedged position equals the payoff of a {{c1::log contract}}, which has constant dollar gamma.",
    back: "Neuberger (1994) showed the payoff -2*ln(S_T/S_0) has constant dollar gamma, so a delta-hedged log contract accrues realised variance. Demeterfi-Derman-Kamal-Zou (1999) turned this into the practitioner recipe: replicate the log contract with a static 1/K^2 strip of OTM options plus a dynamic futures hedge.",
    cloze: "{{c1::log contract}}",
    context: "Trading domain, variance-risk-premium module. Advanced. [Established]"
  },
  {
    id: "variance-risk-premium-c015", itemId: "variance-risk-premium", type: "formula",
    front: "Write the Demeterfi-Derman-Kamal-Zou model-free fair variance strike from a 1/K^2-weighted strip of OTM options.",
    back: "The fair variance is approximately a 1/K^2-weighted sum of OTM option prices O(K) (puts below the forward, calls above), scaled by 2*e^(rT)/T, plus a small forward-correction term. The 1/K^2 weighting gives deep-OTM puts (crash protection) enormous weight, so the strike is dominated by the put wing.",
    latex: "\\sigma_{fair}^2 \\approx \\frac{2\\,e^{rT}}{T}\\sum_K \\frac{\\Delta K}{K^2}\\,O(K)",
    context: "Trading domain, variance-risk-premium module. Advanced. [Established/Practitioner]"
  },
  {
    id: "variance-risk-premium-c016", itemId: "variance-risk-premium", type: "cloze",
    front: "Because the option surface carries negative skew (OTM puts richer than calls), the 1/K^2-weighted strip costs more than the ATM option alone, so the fair variance strike sits {{c1::above}} sigma_ATM squared.",
    back: "The 1/K^2 weighting concentrates value on low strikes (deep-OTM puts). With a downward skew those puts are rich, so the strip is more expensive than the ATM option. The embedded fairVarianceStrike helper makes this concrete: a flat 20% surface returns about 20.0%, but adding a downward skew lifts it to about 20.9%. The market does not charge you sigma_ATM^2 for a variance swap.",
    cloze: "{{c1::above}}",
    context: "Trading domain, variance-risk-premium module. Advanced. [Established]"
  },
  {
    id: "variance-risk-premium-c017", itemId: "variance-risk-premium", type: "basic",
    front: "What did Bakshi, Kapadia & Madan (2003) recover from the option spanning, and why does it matter?",
    back: "Using 1/K^2- and analogously-weighted strips of OTM options, they recover the entire model-free risk-neutral variance, skewness, and kurtosis of the return distribution, straight off the option surface. It matters because it makes the option market a forecast of the whole shape of the risk-neutral distribution, not just its spread.",
    context: "Trading domain, variance-risk-premium module. Advanced. [Established]"
  },
  {
    id: "variance-risk-premium-c018", itemId: "variance-risk-premium", type: "cloze",
    front: "The VIX is exactly a discretised, 1/K^2-weighted, {{c1::30-day}} variance-swap rate published as an index; reading 'the VIX is 18' is reading a variance-swap strike.",
    back: "The CBOE adopted essentially the Demeterfi-Derman-Kamal-Zou construction for the modern VIX (2003): the same 1/K^2 strip of OTM options, discretised over a 30-day horizon and published as an index. The VIX is therefore a model-free, option-derived implied volatility, i.e. a variance-swap rate.",
    cloze: "{{c1::30-day}}",
    context: "Trading domain, variance-risk-premium module. Intermediate/Advanced. [Established]"
  },
  {
    id: "variance-risk-premium-c019", itemId: "variance-risk-premium", type: "basic",
    front: "What three disciplines does the module call non-negotiable when harvesting the VRP by selling variance?",
    back: "(1) A mandatory tail hedge: own cheap far-OTM puts so the steamroller has a floor. (2) Small sizing: size for the CVaR and worst case, never the win rate. (3) Regime and decay awareness: the premium fattens and thins with the vol regime, and a crowded short-vol trade decays.",
    context: "Trading domain, variance-risk-premium module. Advanced. [Practitioner]"
  },
  {
    id: "variance-risk-premium-c020", itemId: "variance-risk-premium", type: "basic",
    front: "Where does the sigma you sell in a variance swap come from, and why do the skew and wings of the surface matter, not just the ATM level?",
    back: "The sigma is read off the implied-volatility surface. Because the variance-swap strike is a 1/K^2-weighted integral over the whole surface, the skew and wings (not just the ATM level) set the price you receive. An arbitrage-free, well-calibrated surface is the input to an honest variance-swap quote.",
    context: "Trading domain, variance-risk-premium module. Advanced. [Established]"
  },
  // ─────────────── Order flow & CVD ───────────────
  {
    id: "order-flow-cvd-c001", itemId: "order-flow-cvd", type: "basic",
    front: "In order flow, which order is the \"aggressor,\" and what does it pay for?",
    back: "The incoming MARKET order is the aggressor: it is the one demanding immediacy and paying the spread, while the resting limit order it hits is passive. [Practitioner]",
    context: "order-flow-cvd — aggressor classification. The aggressor demands immediacy; the resting limit order provides liquidity."
  },
  {
    id: "order-flow-cvd-c002", itemId: "order-flow-cvd", type: "basic",
    front: "How is a market BUY classified in delta, and what does it do to the order book?",
    back: "A market BUY LIFTS THE OFFER (trades at the ask, removing resting sell liquidity) and counts as +volume in delta. [Practitioner]",
    context: "order-flow-cvd — aggressor classification. Mirror: a market SELL hits the bid and counts as -volume."
  },
  {
    id: "order-flow-cvd-c003", itemId: "order-flow-cvd", type: "cloze",
    front: "To sign trades from the tape, the {{c1::Lee & Ready (1991)}} rule: price above the quote midpoint = buyer-initiated, below = seller-initiated, with the tick test as tie-breaker.",
    back: "Lee & Ready (1991) — the quote rule (above midpoint = buy, below = sell) plus the tick test at the midpoint. This is the operational basis of every delta and CVD series. [Established]",
    cloze: "{{c1::Lee & Ready (1991)}}",
    context: "order-flow-cvd — trade-sign classification. You cannot read 'buy'/'sell' flags off the tape, so the side is inferred."
  },
  {
    id: "order-flow-cvd-c004", itemId: "order-flow-cvd", type: "basic",
    front: "Under the Lee & Ready tick test (used when a trade prints exactly at the quote midpoint), how is the trade signed?",
    back: "By comparison to the last different price: higher than the last different price = buy, lower = sell. [Established]",
    context: "order-flow-cvd — trade-sign classification. The tick test is the tie-breaker when the quote rule is indeterminate (trade at the midpoint)."
  },
  {
    id: "order-flow-cvd-c005", itemId: "order-flow-cvd", type: "formula",
    front: "Write the definition of cumulative volume delta (CVD) in terms of the per-bar signed aggressor imbalance δ.",
    back: "CVD is the running sum of per-bar delta, where each bar's delta is buyer-initiated minus seller-initiated volume. [Practitioner]",
    latex: "\\delta_t = B_t - S_t, \\qquad \\mathrm{CVD}(t) = \\sum_{\\tau \\le t} \\delta_\\tau",
    context: "order-flow-cvd — CVD as a running sum of signed flow. δ_t = B_t − S_t with B,S the buyer/seller-initiated volume in bar t."
  },
  {
    id: "order-flow-cvd-c006", itemId: "order-flow-cvd", type: "basic",
    front: "CVD is the running sum of which kind of volume, and what does it deliberately NOT track?",
    back: "CVD is the flow of AGGRESSORS (market orders) — buyer-initiated minus seller-initiated volume summed over bars. It does NOT track resting liquidity (the limit orders sitting in the book). That distinction is the whole game. [Practitioner]",
    context: "order-flow-cvd — what CVD is and is not. Absorption is precisely passive resting size soaking up aggressive flow, which CVD cannot see directly."
  },
  {
    id: "order-flow-cvd-c007", itemId: "order-flow-cvd", type: "formula",
    front: "State Kyle's (1985) linear price-impact law relating a bar's price change to the net aggressor order flow δ.",
    back: "The per-bar price change is approximately proportional to the signed aggressor imbalance, with proportionality constant λ, the price-impact coefficient. [Established]",
    latex: "\\Delta p_t \\approx \\lambda \\cdot \\delta_t",
    context: "order-flow-cvd — Kyle's λ as the spine of CVD reads. Cont, Kukanov & Stoikov (2014) confirm this linearity empirically at short horizons."
  },
  {
    id: "order-flow-cvd-c008", itemId: "order-flow-cvd", type: "cloze",
    front: "In Kyle's price-impact law, λ equals the {{c1::inverse of market depth}}, so a deep, liquid market has a small λ and a thin market has a large λ.",
    back: "The inverse of market depth. A deep/liquid book means flow barely moves price (small λ); a thin book means flow moves price a lot (large λ). [Established]",
    cloze: "{{c1::inverse of market depth}}",
    context: "order-flow-cvd — interpreting the price-impact coefficient λ."
  },
  {
    id: "order-flow-cvd-c009", itemId: "order-flow-cvd", type: "basic",
    front: "In the HEALTHY order-flow case, what is the relationship between aggressive flow, CVD, and price?",
    back: "Flow CONFIRMS the move: δ is positive, CVD is rising, and price rises with it (Δp ≈ λ·δ). Buyers are aggressive AND rewarded; the effective impact λ̂ ≈ λ. [Established mechanism / Practitioner read]",
    context: "order-flow-cvd — the confirmation case. This is the simulator's 'confirmed' verdict, contrasted with absorption."
  },
  {
    id: "order-flow-cvd-c010", itemId: "order-flow-cvd", type: "basic",
    front: "In the absorption read, what is happening when heavy aggressive BUYING (δ large, CVD climbing) fails to move price up?",
    back: "A large PASSIVE seller is parked on the offer, refilling it as fast as buyers consume it and absorbing the flow. The buyers spend and get nothing; this is BEARISH — when the aggressors exhaust, the passive seller's inventory pushes price down. [Practitioner]",
    context: "order-flow-cvd — absorption (flow not moving price). The mirror (aggressive selling that fails to drop price = passive buyer absorbing) is bullish."
  },
  {
    id: "order-flow-cvd-c011", itemId: "order-flow-cvd", type: "basic",
    front: "Relentless aggressive SELLING (δ negative, CVD falling) that fails to push price down signals what, and which way?",
    back: "A large PASSIVE buyer is absorbing the selling — this is BULLISH. The bearish push is failing and the risk is to the upside. [Practitioner]",
    context: "order-flow-cvd — the bullish mirror of absorption. The chart shows price making a new low while CVD makes a higher low."
  },
  {
    id: "order-flow-cvd-c012", itemId: "order-flow-cvd", type: "basic",
    front: "What chart pattern is a BEARISH CVD divergence, and what does it warn about?",
    back: "Price prints a NEW HIGH while CVD prints a LOWER high — buyers tried harder for less price. It warns the upside is being absorbed (effective λ collapsing), so the move is exhausted and the risk is to the downside. [Practitioner]",
    context: "order-flow-cvd — CVD divergence as a reversal tell. Mirror: price new low + CVD higher low = bullish divergence."
  },
  {
    id: "order-flow-cvd-c013", itemId: "order-flow-cvd", type: "cloze",
    front: "A BULLISH CVD divergence appears when price prints a {{c1::new low while CVD prints a higher low}} — sellers tried harder for less price.",
    back: "a new low while CVD prints a higher low. A passive buyer is absorbing the selling; the risk is to the upside. [Practitioner]",
    cloze: "{{c1::new low while CVD prints a higher low}}",
    context: "order-flow-cvd — the bullish CVD divergence signature (mirror of the bearish case: price new high, CVD lower high)."
  },
  {
    id: "order-flow-cvd-c014", itemId: "order-flow-cvd", type: "formula",
    front: "In the absorption model with fraction a soaked up by passive size, write the per-bar price change in terms of λ, a, δ, and noise.",
    back: "Of the flow δ that arrives, a fraction a produces no price impact, leaving only (1−a) to move price; ε is micro-noise. CVD still accumulates the FULL flow Σδ, so as a → 1 price flattens while CVD keeps climbing (divergence). [Established mechanism]",
    latex: "\\Delta p_t = \\lambda(1-a)\\,\\delta_t + \\varepsilon_t",
    context: "order-flow-cvd — the absorption model Δp_t = λ(1−a)·δ_t + ε. a ∈ [0,1] is the fraction of flow absorbed."
  },
  {
    id: "order-flow-cvd-c015", itemId: "order-flow-cvd", type: "basic",
    front: "In the absorption model, what does the OLS slope λ̂ of Δp regressed on δ recover, and how does absorption affect it?",
    back: "λ̂ = Cov(Δp,δ)/Var(δ) recovers the EFFECTIVE impact, λ̂ ≈ λ(1−a). A healthy trend has λ̂ ≈ λ; heavy absorption drives λ̂ toward 0. [Established mechanism]",
    context: "order-flow-cvd — recovering effective impact. With λ = 1.5: a = 0 gives λ̂ ≈ 1.5; a = 0.8 gives λ̂ ≈ 0.30."
  },
  {
    id: "order-flow-cvd-c016", itemId: "order-flow-cvd", type: "basic",
    front: "On the OrderFlowCVDSim with λ = 1.5 and absorption a = 0.8, what effective impact results and which verdict does it trigger?",
    back: "Both the per-bar OLS slope λ̂ and the price-vs-CVD trend ratio (the sim's 'effective impact') estimate λ(1−a) = 1.5 × 0.2 = 0.30. The VERDICT is driven by the effective-impact ratio: 0.30 < the 0.4·λ = 0.6 threshold, so it is ABSORPTION (a divergence) — bearish if CVD is rising into a stalling price, bullish if falling. [Practitioner]",
    context: "order-flow-cvd — simulator verdict thresholds. The verdict uses effImpact = priceTrend/cvdTrend (≈ λ(1−a)); λ̂ is the per-bar OLS slope estimating the same quantity. At a = 0 both ≈ 1.5 (confirmed)."
  },
  {
    id: "order-flow-cvd-c017", itemId: "order-flow-cvd", type: "basic",
    front: "Why does a near-zero flowTrend make the simulator report \"choppy\" regardless of the absorption setting a?",
    back: "With flowTrend ≈ 0 there is no net aggressor direction, so |cvdTrend| ≤ 0.05 (no clear flow trend) and the verdict is CHOPPY whatever a is. There is no flow to absorb, so absorption/divergence is meaningless — only read divergence when a flow trend actually exists. [Practitioner]",
    context: "order-flow-cvd — the choppy verdict. Absorption/divergence is only meaningful when there is a directional flow trend to be absorbed."
  },
  {
    id: "order-flow-cvd-c018", itemId: "order-flow-cvd", type: "basic",
    front: "Why is CVD best read AT A MARKED LEVEL rather than at random points?",
    back: "Flow read at a random point is noise; flow read at a decision level (value-area edge/VAH/VAL, POC, prior swing high/low, S-R zone) is information. Mark the price of interest FIRST, then let CVD tell you what the flow is doing there. [Practitioner]",
    context: "order-flow-cvd — application discipline. A with-flow break at a level = initiative (trade with it); an absorption divergence at a level = fade."
  },
  {
    id: "order-flow-cvd-c019", itemId: "order-flow-cvd", type: "basic",
    front: "As an application, what trade does an absorption divergence at a resistance level set up, and why?",
    back: "It sets up a FADE (a short / countertrend trade). Price pushes to a new high at/just beyond resistance but CVD makes a lower high — heavy buying with no follow-through, λ̂ collapsing — meaning a passive seller is absorbing the initiative, the move is exhausted, and the risk is to the downside. [Practitioner]",
    context: "order-flow-cvd — absorption at a level = fade. Mirror at support: price new low + CVD higher low = fade the breakdown to the upside."
  },
  {
    id: "order-flow-cvd-c020", itemId: "order-flow-cvd", type: "basic",
    front: "Give the main reason CVD is feed-dependent, and why it stays tagged [Practitioner] rather than [Established].",
    back: "CVD is VENUE- and FEED-DEPENDENT: spot vs perpetuals, exchange A vs B, and aggregated vs single-venue feeds produce DIFFERENT CVD lines, so a divergence on one feed may not exist on another. Combined with imperfect trade-signing (a guess at the midpoint), icebergs/hidden liquidity, and sample-dependent decay, a divergence is only a PROBABILISTIC tell — hence [Practitioner], leaning on the [Established] λ mechanism beneath. Backtest first.",
    context: "order-flow-cvd — caveats. The price-impact spine (Kyle/VPIN/Cont-Kukanov-Stoikov) is [Established]; footprint/CVD reads are [Practitioner] heuristics."
  },
  // ─────────────── Portfolio of edges & diversification ───────────────
  {
    id: "portfolio-of-edges-c001", itemId: "portfolio-of-edges", type: "basic",
    front: "In an equal-weight book of edges, why does pooling many edges raise the Sharpe ratio? [Established]",
    back: "Pooling preserves the mean return (the portfolio's expected return is just the average of the parts) while shrinking the volatility. Since Sharpe = mean / volatility, holding the mean fixed while cutting the volatility raises the Sharpe.",
    context: "Markowitz mean-variance: the diversification benefit comes from volatility falling while the mean is held constant. itemId portfolio-of-edges."
  },
  {
    id: "portfolio-of-edges-c002", itemId: "portfolio-of-edges", type: "basic",
    front: "For an equal-weight book of identical edges, the diversification benefit only appears if the edges are uncorrelated. Why? [Established]",
    back: "Portfolio variance adds the per-edge variances plus a cross-term for every pair. When edges are uncorrelated those cross-terms vanish, so the individual swings cancel and noise averages away. When correlated, the cross-terms survive and the noise does not cancel (a thousand bets on the same coin is one big bet in disguise).",
    context: "The diversification payoff lives entirely in the off-diagonal cross-terms of the covariance matrix. itemId portfolio-of-edges."
  },
  {
    id: "portfolio-of-edges-c003", itemId: "portfolio-of-edges", type: "formula",
    front: "Diversification ratio D for an equal-weight book of N edges, each volatility sigma, pairwise correlation rho [Established]",
    back: "D(N,rho) = sigma / sigma_p = sqrt( N / (1 + (N-1)rho) ). It is the factor by which the book's Sharpe exceeds a single edge's: Sharpe_port = S*D.",
    latex: "D(N,\\rho)=\\dfrac{\\sigma}{\\sigma_p}=\\sqrt{\\dfrac{N}{1+(N-1)\\rho}}",
    context: "Standard one-factor (equicorrelation) specialisation of Markowitz's covariance matrix. itemId portfolio-of-edges."
  },
  {
    id: "portfolio-of-edges-c004", itemId: "portfolio-of-edges", type: "formula",
    front: "Portfolio volatility of an equal-weight book of N edges, each volatility sigma, pairwise correlation rho [Established]",
    back: "sigma_p = sigma * sqrt( (1 + (N-1)rho) / N ). It comes from variance = (sigma^2/N)(1 + (N-1)rho).",
    latex: "\\sigma_p=\\sigma\\sqrt{\\dfrac{1+(N-1)\\rho}{N}}",
    context: "Equal-weight equicorrelation identity; square it to get the variance with N own-terms and N(N-1) cross-terms. itemId portfolio-of-edges."
  },
  {
    id: "portfolio-of-edges-c005", itemId: "portfolio-of-edges", type: "cloze",
    front: "When edges are perfectly uncorrelated (rho = 0), the diversification ratio reduces to {{c1::sqrt(N)}}, which grows without bound. [Established]",
    back: "D = sqrt(N). The cross-terms vanish, so each added edge cuts variance by a full 1/N factor and the Sharpe grows without any ceiling — the free lunch of true independence.",
    cloze: "{{c1::sqrt(N)}}",
    context: "rho=0 regime. Four uncorrelated edges double the Sharpe; nine triple it. itemId portfolio-of-edges."
  },
  {
    id: "portfolio-of-edges-c006", itemId: "portfolio-of-edges", type: "cloze",
    front: "With any positive correlation, as N goes to infinity the diversification ratio is capped at {{c1::1/sqrt(rho)}}. [Established]",
    back: "D -> 1/sqrt(rho). As N grows, N/(1+(N-1)rho) -> 1/rho, so D approaches 1/sqrt(rho) and never passes it.",
    cloze: "{{c1::1/sqrt(rho)}}",
    context: "The ceiling regime. Correlation, not the number of strategies, sets the limit. itemId portfolio-of-edges."
  },
  {
    id: "portfolio-of-edges-c007", itemId: "portfolio-of-edges", type: "formula",
    front: "As N goes to infinity with positive pairwise correlation rho, what is the limiting (ceiling) value of the diversification ratio? [Established]",
    back: "D -> 1/sqrt(rho). The shared factor cannot be diversified away, so the Sharpe cannot exceed S/sqrt(rho) no matter how many correlated clones are added.",
    latex: "\\lim_{N\\to\\infty}D(N,\\rho)=\\dfrac{1}{\\sqrt{\\rho}}",
    context: "The hard ceiling. At rho=0.2 the cap is about 2.24x; at rho=0.5 about 1.41x. itemId portfolio-of-edges."
  },
  {
    id: "portfolio-of-edges-c008", itemId: "portfolio-of-edges", type: "basic",
    front: "What is the core practical lesson of the 1/sqrt(rho) ceiling for building a book of edges? [Practitioner]",
    back: "Correlation, not the number of strategies, sets the limit. Adding more of the same correlated edge barely helps once you near 1/sqrt(rho); the entire payoff of diversification comes from finding edges that are genuinely uncorrelated. Chase orthogonality, not headcount.",
    context: "The 20th correlated copy of a trade adds almost nothing; a 2nd uncorrelated edge adds a lot. itemId portfolio-of-edges."
  },
  {
    id: "portfolio-of-edges-c009", itemId: "portfolio-of-edges", type: "basic",
    front: "For N=6 edges each Sharpe 0.8 with pairwise correlation rho=0.2, compute the diversification ratio D and the portfolio Sharpe. [Established]",
    back: "D = sqrt(6/(1+5*0.2)) = sqrt(6/2) = sqrt(3) ~ 1.73. Sharpe_port = 0.8 * 1.73 ~ 1.39, against a ceiling of 1/sqrt(0.2) ~ 2.24.",
    context: "The PortfolioEdgeSim default parameters. Six edges already capture ~77% of the achievable benefit. itemId portfolio-of-edges."
  },
  {
    id: "portfolio-of-edges-c010", itemId: "portfolio-of-edges", type: "basic",
    front: "Besides raising the Sharpe, what other survival benefit does pooling uncorrelated edges provide? [Established]",
    back: "The same volatility compression shrinks the path: the median maximum-drawdown (and risk-of-ruin) falls from a single edge to the pooled book. The diversified book survives drawdowns that would have shaken a trader out of one strategy.",
    context: "Drawdown shrinks alongside volatility; ties back to expectancy and risk-of-ruin. itemId portfolio-of-edges."
  },
  {
    id: "portfolio-of-edges-c011", itemId: "portfolio-of-edges", type: "cloze",
    front: "In a funding-liquidity crisis, forced deleveraging makes correlations jump toward {{c1::1}}, so the 1/sqrt(rho) ceiling collapses and diversification fails when it is needed most. [Established]",
    back: "Correlations jump toward 1 (the liquidity spiral, Brunnermeier & Pedersen 2009). As rho -> 1, the ceiling 1/sqrt(rho) -> 1 and D -> 1, so a diversified book behaves like a single leveraged bet.",
    cloze: "{{c1::1}}",
    context: "The crisis caveat: stress-test with crisis correlations, not historical averages. itemId portfolio-of-edges."
  },
  {
    id: "portfolio-of-edges-c012", itemId: "portfolio-of-edges", type: "basic",
    front: "Name three honest caveats that undermine the clean diversification math in practice. [Established/Practitioner]",
    back: "(1) Edges decay over time (crowding, regime change, overfit backtests). (2) Correlations rise toward 1 in a crisis, collapsing the diversification benefit. (3) Estimated rho is noisy and drifts over time (and equal weighting is a simplification).",
    context: "The reasons real books are riskier than the formula suggests; educational, not financial advice. itemId portfolio-of-edges."
  },
  {
    id: "portfolio-of-edges-c013", itemId: "portfolio-of-edges", type: "formula",
    front: "State Grinold & Kahn's fundamental law of active management (the alpha-side cousin of the sqrt(N) diversification engine). [Established]",
    back: "IR = IC * sqrt(breadth): the information ratio equals skill (the information coefficient) times the square root of the number of independent bets. It is the same sqrt(N) engine viewed from the alpha side.",
    latex: "\\mathrm{IR}=\\mathrm{IC}\\cdot\\sqrt{\\mathrm{breadth}}",
    context: "breadth = number of INDEPENDENT bets per year; doubling skill doubles IR, but you need 4x the breadth to do the same. itemId portfolio-of-edges."
  },
  {
    id: "portfolio-of-edges-c014", itemId: "portfolio-of-edges", type: "basic",
    front: "In Grinold & Kahn's law IR = IC * sqrt(breadth), why is 'independent' the load-bearing word, and how does that mirror Markowitz? [Established]",
    back: "Only independent bets add genuine breadth, so correlated bets do not raise IR — just as correlated edges do not raise the diversification ratio D past 1/sqrt(rho). Both results compound your edge at rate sqrt(N) only when the bets/edges are genuinely independent.",
    context: "The shared moral: a crisis that collapses rho -> 1 destroys both effective breadth and diversification at once. itemId portfolio-of-edges."
  },
  // ─────────────── Statistical arbitrage & pairs trading ───────────────
  {
    id: "stat-arb-pairs-c001", itemId: "stat-arb-pairs", type: "basic",
    front: "In statistical arbitrage, why is it possible to have a reliable edge in a SPREAD between two assets even though each individual price is essentially a random walk? [Established]",
    back: "Each price is individually I(1) (non-stationary, a unit root, unforecastable direction), but a specific linear combination of the two — the spread — can be I(0), stationary: it has a fixed mean it keeps reverting to. You trade the mean-reverting relationship, not the unforecastable level. This is cointegration.",
    context: "itemId stat-arb-pairs; section 'motivation'/'intuition'. The core thesis: trade the relationship, not the levels."
  },
  {
    id: "stat-arb-pairs-c002", itemId: "stat-arb-pairs", type: "cloze",
    front: "{{c1::Correlation}} measures whether two series move together day to day (co-movement of their changes) and says nothing about the level of the gap, whereas {{c2::cointegration}} means a specific linear combination of two I(1) series is stationary and reverts to a constant mean. [Established]",
    back: "Two stocks can be highly correlated yet drift apart forever; only cointegration tethers the spread so it reverts. A pairs trade needs cointegration, not mere correlation.",
    cloze: "{{c1::Correlation}}",
    context: "itemId stat-arb-pairs; section 'intuition'. The single most important distinction in the module."
  },
  {
    id: "stat-arb-pairs-c003", itemId: "stat-arb-pairs", type: "cloze",
    front: "A pairs trade is a bet that the spread reverts to its mean, so it requires {{c1::cointegration}} (genuine reversion); built on correlation alone, the legs jiggle in sync while the spread quietly trends away from you — betting against a trend. [Established]",
    back: "Correlation describes co-movement of changes, not the level of the gap. Without cointegration there is nothing pulling the spread back, so fading a divergence is just fading a trend.",
    cloze: "{{c1::cointegration}}",
    context: "itemId stat-arb-pairs; section 'intuition'. Why correlation alone is a trap."
  },
  {
    id: "stat-arb-pairs-c004", itemId: "stat-arb-pairs", type: "basic",
    front: "In the Engle-Granger two-step procedure, what is the hedge ratio beta and how is it obtained for a cointegrated pair? [Established]",
    back: "Beta is the coefficient in the cointegrating regression P^A_t = alpha + beta*P^B_t + S_t, estimated by OLS. It is the number of units of leg B per unit of leg A that makes the spread S_t = P^A_t - beta*P^B_t stationary. Step two runs an augmented Dickey-Fuller (ADF) test on the residual S_t; rejecting the unit-root null confirms cointegration.",
    context: "itemId stat-arb-pairs; section 'formalization'. The cointegrating regression and ADF test."
  },
  {
    id: "stat-arb-pairs-c005", itemId: "stat-arb-pairs", type: "formula",
    front: "Write the Ornstein-Uhlenbeck stochastic differential equation used to model the cointegration residual (the spread), naming each parameter. [Established]",
    back: "dX = kappa(theta - X)dt + sigma*dW, where theta is the long-run mean, kappa > 0 the mean-reversion speed, sigma the instantaneous volatility, and dW a Brownian increment. The drift kappa(theta - X) always points back toward theta, so the further X strays the harder it is pulled home.",
    latex: "dX = \\kappa(\\theta - X)\\,dt + \\sigma\\,dW",
    context: "itemId stat-arb-pairs; section 'formalization'. Avellaneda-Lee (2010) fit this to equity residuals; Uhlenbeck-Ornstein (1930)."
  },
  {
    id: "stat-arb-pairs-c006", itemId: "stat-arb-pairs", type: "formula",
    front: "For an OU process with mean-reversion speed kappa, write the half-life of a deviation, and explain why the half-life is the key tradeability check. [Established]",
    back: "t_(1/2) = ln2 / kappa. It is how long a deviation takes to decay halfway back to the mean. If it is too long (kappa small), you are holding a quasi-random-walk for months and the reversion is indistinguishable from an untradeable drift; short enough, and a deviation snaps back on a horizon you can hold and finance. Avellaneda-Lee explicitly filter pairs by half-life.",
    latex: "t_{1/2} = \\frac{\\ln 2}{\\kappa}",
    context: "itemId stat-arb-pairs; section 'formalization'. The single most important tradeability check."
  },
  {
    id: "stat-arb-pairs-c007", itemId: "stat-arb-pairs", type: "formula",
    front: "For the OU process dX = kappa(theta - X)dt + sigma*dW, write the equilibrium (stationary) standard deviation of X. [Established]",
    back: "sigma_eq = sigma / sqrt(2*kappa). This is the standard deviation of the OU process at rest — the natural width of the spread. The z-bands are drawn at multiples of it (e.g. entry at 2*sigma_eq), and the z-score normalises the current deviation by it.",
    latex: "\\sigma_{eq} = \\frac{\\sigma}{\\sqrt{2\\kappa}}",
    context: "itemId stat-arb-pairs; section 'formalization'. The stationary spread of X used to normalise deviations."
  },
  {
    id: "stat-arb-pairs-c008", itemId: "stat-arb-pairs", type: "formula",
    front: "Write the z-score (Avellaneda-Lee's s-score) used to normalise the current spread deviation, in terms of X, theta, and the equilibrium std. [Established]",
    back: "z = (X - theta) / sigma_eq, where theta is the long-run mean and sigma_eq = sigma/sqrt(2*kappa) the equilibrium standard deviation. It expresses how many equilibrium standard deviations the spread currently sits from its mean, which drives the entry/exit rule.",
    latex: "z = \\frac{X - \\theta}{\\sigma_{eq}}",
    context: "itemId stat-arb-pairs; section 'formalization'. The s-score traded by Avellaneda-Lee."
  },
  {
    id: "stat-arb-pairs-c009", itemId: "stat-arb-pairs", type: "formula",
    front: "When an OU process is sampled discretely at interval delta-t, it is exactly an AR(1) process; write its autoregressive coefficient phi in terms of kappa, and the boundary that marks no mean reversion. [Established]",
    back: "phi = e^(-kappa*delta_t), so kappa = -ln(phi)/delta_t. Mean reversion requires 0 < phi < 1; phi = 1 is the unit-root / random-walk boundary with no reversion. As kappa -> 0, phi -> 1 and the spread becomes a random walk, so the edge vanishes.",
    latex: "\\phi = e^{-\\kappa\\,\\Delta t}",
    context: "itemId stat-arb-pairs; section 'formalization'. The discrete (AR(1)) face of the OU process."
  },
  {
    id: "stat-arb-pairs-c010", itemId: "stat-arb-pairs", type: "cloze",
    front: "The pairs trade rule on the z-score is: enter LONG the spread when z <= -z_entry (spread unusually low), enter SHORT when z >= +z_entry (unusually high), and {{c1::exit when |z| <= z_exit}} (the spread has reverted toward its mean). [Established]",
    back: "You fade the extreme deviation and close as it returns home. Avellaneda-Lee's canonical s-score thresholds are open around +/-1.25 and close around +/-0.5 to +/-0.75; the module's simulator defaults to entry z = 2, exit z = 0.5, plus a wide protective stop.",
    cloze: "{{c1::exit when |z| <= z_exit}}",
    context: "itemId stat-arb-pairs; section 'formalization'. Enter at the extreme, exit at the mean."
  },
  {
    id: "stat-arb-pairs-c011", itemId: "stat-arb-pairs", type: "basic",
    front: "Why is the pairs-trade expectancy positive ONLY when the spread genuinely mean-reverts, and what happens to the edge as kappa -> 0? [Established]",
    back: "A long opened at z = -2 is, in expectation, pulled toward z = 0, earning about 2*sigma_eq — but only because the drift pulls the spread home. As kappa -> 0, phi -> 1, the half-life -> infinity, and the spread becomes a random walk with no expected reversion, so the edge vanishes. The edge is the mean reversion, not the trading bands: an identical 2-sigma band does nothing on a random walk.",
    context: "itemId stat-arb-pairs; sections 'formalization'/'worked-example'. The central lesson made numerical."
  },
  {
    id: "stat-arb-pairs-c012", itemId: "stat-arb-pairs", type: "basic",
    front: "Describe the Gatev-Goetzmann-Rouwenhorst (2006) distance method for pairs trading, including the 2-sigma rule. [Established]",
    back: "Non-parametric, no regression. Over a 12-month formation period, normalise each stock's price to a cumulative-return index starting at 1, and pick the pairs with the smallest sum of squared distances between the two normalised series. Then over a 6-month trading period, open when the normalised spread diverges by 2 standard deviations of its formation-period spread (long the loser, short the winner) and close when it converges back (the series cross). Earned roughly 11% annualised, market-neutral, over 1962-2002.",
    context: "itemId stat-arb-pairs; section 'applications'. The canonical distance method and 2-sigma rule."
  },
  {
    id: "stat-arb-pairs-c013", itemId: "stat-arb-pairs", type: "basic",
    front: "What is the defining risk of statistical arbitrage / pairs trading, and what is the required defence? [Established]",
    back: "The defining risk is that cointegration BREAKS: a structural change (merger, regulatory shift, fraud, broken business model, changed cost structure) can permanently re-rate one leg, turning the mean-reverting spread into a one-way slope, so the leg you shorted keeps running and the position bleeds without bound. The defence is a hard stop (the wide z-stop), because 'the spread always comes back' is false — it does not always come back.",
    context: "itemId stat-arb-pairs; section 'applications'. The risk where the strategy lives or dies."
  },
  {
    id: "stat-arb-pairs-c014", itemId: "stat-arb-pairs", type: "cloze",
    front: "Do & Faff (2010) documented that the simple distance method's profitability {{c1::declined markedly after ~2002}} as the trade became crowded and markets grew more efficient. [Established]",
    back: "This is the crowding/decay risk: an edge that everyone runs gets arbitraged thin. The lesson is to treat it as a portfolio of decaying edges, not a perpetual machine.",
    cloze: "{{c1::declined markedly after ~2002}}",
    context: "itemId stat-arb-pairs; section 'applications'. Crowding and decay."
  },
  {
    id: "stat-arb-pairs-c015", itemId: "stat-arb-pairs", type: "basic",
    front: "Why do transaction costs and short-borrow especially threaten pairs-trading profits, and what about scanning many tickers for cointegration? [Established]",
    back: "Pairs profits are small per trade, so transaction costs, the bid-ask on BOTH legs, the borrow cost to short the rich leg (which can spike or go hard-to-borrow), and financing on the long leg can swallow the thin edge — the cleaner the spread, the thinner the margin, the more costs matter. Separately, scanning thousands of tickers will turn up spuriously 'cointegrated' pairs that are pure in-sample coincidence and fail out-of-sample, so you must demand an economic rationale and deflate in-sample stats for the number of pairs searched.",
    context: "itemId stat-arb-pairs; section 'applications'. Costs/borrow and data-mining spurious pairs."
  },
  {
    id: "stat-arb-pairs-c016", itemId: "stat-arb-pairs", type: "basic",
    front: "How does the Avellaneda-Lee OU/s-score method differ from the distance method, and what filter do they apply? [Established]",
    back: "It is the parametric upgrade: estimate a hedge ratio (regress one leg, or a basket/sector ETF, on the other), take the residual, fit OU parameters (kappa, theta, sigma) — in practice via the AR(1) phi = e^(-kappa*delta_t) — and trade the s-score s = (X - theta)/sigma_eq with canonical thresholds (open ~ +/-1.25, close ~ +/-0.5-0.75). They filter by half-life, discarding residuals whose reversion is too slow. It scales from single pairs to PCA/ETF residuals across dozens to hundreds of names.",
    context: "itemId stat-arb-pairs; section 'applications'. The parametric upgrade and the half-life filter."
  },
];
