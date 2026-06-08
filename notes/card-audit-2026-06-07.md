# Card-quality audit — 2026-06-07

Multi-agent deep audit of all 417 live cards (31 items: 19 microstructure + 11 trading + 1 geothermal/Acuña). Each correctness finding (factual/formula/cloze) was adversarially re-verified by a second agent. Only **confirmed** findings are listed.

## Executive summary

- Items audited: **31** / 417 cards
- Confirmed findings: **77** — high **4**, medium **27**, low **46**
- By category: duplicate 19, formula 3, factual 16, ambiguous 2, cloze 13, srs-craft 24

Overall: the decks are in strong shape — the vast majority of issues are SRS-craft polish (duplication, cloze tightening) rather than wrong content. Four cards teach something factually false and are fixed immediately (see HIGH); the rest are catalogued here for batch cleanup.

## 🔴 HIGH — teaches something false (fix first) (4)

### ohara-1995 · `ohara-1995-c007` — formula

**Problem:** The LaTeX for the GM ask price weights the two states by the informed fraction mu and (1-mu) in BOTH numerator and denominator. That is mathematically wrong: the Bayesian conditional expectation E[V|buy] must weight the states by the PRIOR on V (theta_0 and 1-theta_0), not by mu. The source module derives exactly this (lines 116, 120) with theta_0 weights. With the card's formula and the textbook's own worked example (mu=0.2, theta_0=0.5, Vbar=100, Vlow=95) the card yields a=96.36, whereas the correct ask is 98.00. The symbol mu is the informed fraction, not P(V=Vbar). This teaches a false derivation.

**Fix:** Replace the latex with the prior-weighted Bayes expression: a = E[V|buy] = [theta_0 P(buy|V=Vbar) Vbar + (1-theta_0) P(buy|V=Vlow) Vlow] / [theta_0 P(buy|V=Vbar) + (1-theta_0) P(buy|V=Vlow)], i.e. \frac{\theta_0 P(\text{buy}\mid V=\bar V)\bar V + (1-\theta_0)P(\text{buy}\mid V=\underline V)\underline V}{\theta_0 P(\text{buy}\mid V=\bar V) + (1-\theta_0)P(\text{buy}\mid V=\underline V)}. Update the back accordingly (weights are the prior on V, with P(buy|state) capturing mu).

### kyle-1985 · `kyle-1985-d003` — factual

**Problem:** The back claims the naive quantity x=(v−p₀)/λ produces 'zero marginal profit, like a price-taker.' That is wrong. At x=(v−p₀)/λ the price is pushed all the way to v, so TOTAL profit is exactly zero, and the MARGINAL profit there is (v−p₀)−2λx = (v−p₀)−2(v−p₀) = −(v−p₀), i.e. strictly NEGATIVE. Zero marginal profit occurs at the OPTIMUM x*=(v−p₀)/(2λ), not at the naive quantity. The card mislabels the naive point as the zero-marginal-profit / price-taker point, which inverts the very logic the card is teaching.

**Fix:** Reword to: 'The naive quantity (v−p₀)/λ would push the price all the way up to v, driving TOTAL profit to zero (and marginal profit negative — she would be overpaying on the last units). Maximizing (v−p₀−λx)x sets MARGINAL profit to zero at x*=(v−p₀)/(2λ) — exactly half — deliberately under-trading to preserve the rent.'

### makarov-schoar-2020 · `makarov-schoar-2020-d002` — factual

**Problem:** The card claims the idiosyncratic, exchange-specific order-flow component is 'largely TRANSITORY and mean-reverts' and is 'venue-specific transitory noise.' This contradicts the paper's central finding (Finding 4 in the source): the idiosyncratic, region-specific order flow is exactly what DRIVES the cross-exchange arbitrage spreads, and those spreads are large and PERSISTENT (hours, days, even weeks) precisely because capital controls prevent arbitrage capital from correcting them. Labeling that component 'transitory / mean-reverting / noise' inverts the paper's point. The source's only 'permanent' statement (Finding 3) is that most of the daily PRICE IMPACT of net order flow is permanent; it never assigns a permanent-vs-transitory structure to the common-vs-idiosyncratic decomposition. The card invents a structure not in the source and at odds with its thesis.

**Fix:** Reframe to match the source. Back: 'Signed order flow splits into a COMMON (market-wide) component and an EXCHANGE-SPECIFIC (idiosyncratic) component. The common component carries information and drives bitcoin's common return — and the price impact of net order flow is largely PERMANENT (Finding 3: most of the daily impact persists). The idiosyncratic, region-specific component drives the cross-exchange arbitrage spreads; far from being transitory noise, these deviations PERSIST for hours-to-weeks because capital controls keep arbitrage capital from closing them. Returns are global; the persistent local deviations are what the limits-of-arbitrage friction sustains.' Drop the 'transitory / mean-reverts' characterization of the idiosyncratic component.

### husslin-framework · `husslin-framework-c003` — cloze

**Problem:** The cloze deletes the wrong word and so corrupts the actual slogan. The source's adversarial slogan, used verbatim in five places, is 'if you don't see the meat, you are the MEAT.' The card renders it as 'if you don't see the meat, you are the {{c1::liquidity}}' — which (a) is not the real saying, (b) makes the front nonsensical (it reuses 'meat' in the visible setup but then expects a different word), and (c) trains a false version of a memorable, well-known practitioner quote. The genuinely testable atom is the punchline word 'meat', not 'liquidity'. ('liquidity' is the explanatory gloss the source gives in the next sentence, not the slogan itself.)

**Fix:** Restore the real quote and cloze its punchline: front = "Adversarial premise: 'if you don't see the meat, you are the {{c1::meat}}' — the academic form is order-flow toxicity ({{c2::VPIN}})." Keep the back explaining that on every move someone supplies the liquidity the other side takes, formalised as VPIN (Easley, López de Prado & O'Hara, 2012).

## 🟡 MEDIUM (27)

**hasbrouck-2007**
- `hasbrouck-2007-c015` [duplicate] c015 ('Express the effective spread in formula form' -> ES = 2*q_t*(p_t - m_t)) tests the same atom as c013 ('Define the effective spread' -> 2*|p_t - m_t|). The two forms are mathematically identical for correctly-signed trades (q_t*(p_t - → _Fix:_ Differentiate the two cards. Keep c013 as the conceptual definition (what the effective spread measures: actual cost paid relative to the midpoint, capturing price improvement/dis-improvement vs the quoted spread). Repurpose c015 to test so

**ohara-1995**
- `ohara-1995-c008` [factual] PIN is expanded as 'Probability of Informed-based trading', which is a garbled acronym. PIN stands for 'Probability of INformed trading' (Easley-Kiefer-O'Hara-Paperman 1996), as the source module states verbatim ('Probability of Informed Tr → _Fix:_ Change the first line of the back to: 'Probability of INformed trading - the unconditional probability that an arriving order is from an informed (rather than liquidity) trader.' Keep the rest.

**glosten-milgrom-1985**
- `glosten-milgrom-1985-c004` [ambiguous] The card teaches 'alpha = fraction of informed traders' with no notation caveat. The source module itself explicitly warns (formalization section, notation note) that the project's notation table and the sibling O'Hara module use the symbol → _Fix:_ Add a disambiguating note to the back, e.g.: 'The fraction of traders who are informed (knows V). Note: this module uses alpha for the informed fraction; the project notation table and the O'Hara module use mu for the same quantity, and her

**stoikov-2008**
- `stoikov-2008-d003` [factual] Not supported by the source module — Menkveld (2013) appears nowhere in stoikov-2008.js (no mention of Menkveld, the €1.55/€0.68/€0.88 figures, or any empirical HFT confirmation). The card imports an external study and presents specific num → _Fix:_ Either remove this card (it tests material outside the authoritative module), or, if cross-paper enrichment is intended, attribute it clearly and fix the arithmetic: state gross spread ≈ +€1.55/trade and positioning/adverse-selection loss ≈
- `stoikov-2008-d001` [duplicate] Duplicates c002. Both cards test the exact same atom — the Avellaneda-Stoikov reservation price r = s − qγσ²(T−t) — as 'formula' cards with the same LaTeX. c002 prompts 'State the reservation (indifference) price'; d001 prompts 'State how t → _Fix:_ Drop d001 (or merge its richer back-text — the explicit 'shrinks to zero at the close' intuition — into c002). If d001 is kept, fix its LaTeX signature to r(s,q,t) = s - q\gamma\sigma^2(T-t) to match the source.
- `stoikov-2008-d004` [duplicate] Substantially duplicates c004 and c005. c004 states the optimal-spread formula and names the two terms; c005 asks what the two terms represent and what drives each; d004 again states the same formula AND asks which term depends on the order → _Fix:_ Keep c004 (formula card) and c005 (interpretation card); drop d004. If d004 is retained for the 'which term depends on what' angle, relabel its LaTeX left-hand side from 'δ' to 'δ^a + δ^b' to match the source's total-spread notation and avo

**cartea-jaimungal-penalva**
- `cartea-jaimungal-penalva-d001` [duplicate] d001 ('What does "strategy, not schedule" mean as a control-theory statement?') tests the same atom as c006 ('What is the "strategy, not schedule" upgrade the book makes to Almgren-Chriss?'). Both ask for the feedback-control-vs-fixed-sched → _Fix:_ Drop one card, or differentiate by narrowing scope. Keep c006 as the conceptual 'what is the upgrade' card and re-cast d001 to test a distinct sub-point, e.g. front: 'When is a feedback control strictly more valuable than a fixed Almgren-Ch
- `cartea-jaimungal-penalva-d002` [duplicate] d002 ('What single stochastic-control template does the book apply to nearly every trading problem?') restates the four-step recipe already covered by c005 (state/dynamics -> objective -> HJB via DPP -> solve + verify) and the unification c → _Fix:_ Remove d002, or re-target it to an atom not already tested. Since the state/control pairs are the genuinely memorable detail, recast as a mapping card, e.g. front: 'In the book's common template, what plays the role of the CONTROL in (a) op

**cont-kukanov-stoikov-2014**
- `cont-kukanov-stoikov-2014-d002` [factual] The card's contemporaneous-vs-forecast framing is correct and valuable, but its categorical claim 'you cannot trade it for profit just by observing it' / 'not a standalone alpha signal' overstates and contradicts the source's own applicatio → _Fix:_ Soften the back to separate the two ideas: 'The CKS regression is CONTEMPORANEOUS — OFI over an interval explains the price change over the SAME interval (price formation), not the next interval. So the headline result is an impact/price-fo
- `cont-kukanov-stoikov-2014-d001` [duplicate] d001 ('Why does OFI explain short-horizon price changes with much higher R² than signed trade volume?') tests the exact same atom as c003 ('Why is signed trade volume a noisy predictor of short-horizon price changes, while OFI is clean?').  → _Fix:_ Drop d001, or re-aim it at a distinct atom. c003 already owns the 'why OFI beats trade volume' atom. If keeping a second card here, repurpose d001 to test a non-overlapping point, e.g. the magnitude/stability claims unique to it (R² often >

**easley-lopez-prado-vpin**
- `easley-lopez-prado-vpin-c011` [cloze] The cloze deletes the word 'absolute', but the front already displays the notation '|V^S − V^B|' — the absolute-value bars give the answer away. A learner reads the bars and recalls 'absolute' from the notation rather than from understandin → _Fix:_ Either remove the notation from the front and cloze it as prose, e.g. 'VPIN sums the {{c1::absolute}} value of each bucket's order imbalance, so a strong-up bucket and a strong-down bucket both register as toxic.' Or keep the notation but m

**almgren-chriss-2000**
- `almgren-chriss-2000-d001` [duplicate] d001 duplicates c007: both have essentially the same front ('State the [closed-form] Almgren-Chriss optimal holdings trajectory') and the byte-identical latex field x(t)=X·sinh(κ(T−t))/sinh(κT). They test the same atom (the trajectory formu → _Fix:_ Merge into one card. Keep c007 as the formula-recall card and either delete d001 or repurpose its 'shape/limits' content into a distinct conceptual card whose front does NOT ask to state the formula (e.g. a cloze on the limiting behavior: '

**aquilina-budish-oneill-2022**
- `aquilina-budish-oneill-2022-c010` [duplicate] c010 (cloze) and c009 (formula) test the identical retrievable atom — the ~17% cost-of-liquidity saving and that it is the ratio of the non-race tax to the effective spread. c009's back already states 'About 17% — it is the ratio of the non → _Fix:_ Keep c009 (formula) as the canonical 17% card since it carries the derivation 0.53/3.17, and either drop c010 or re-aim its cloze at a non-overlapping atom — e.g. cloze the mechanism rather than the number: 'Eliminating latency arbitrage wo

**kissell-2013**
- `kissell-2013-c012` [duplicate] This card ('what does Kissell add beyond the theory texts?') tests essentially the same atom as c001 ('what is the book and its stance?') and overlaps the three pillars in c002. All three resolve to the same triad: measure cost (TCA), estim → _Fix:_ Drop c012, or sharpen it to a distinct contrast it alone tests — e.g. front: 'Kissell vs the theory texts (CJP/Guéant): what is the single methodological inversion?' back: 'They POSIT an impact model and DERIVE the optimal strategy; Kissell

**gueant-2016**
- `gueant-2016-d001` [factual] The back concludes the GLFT change-of-variables result is 'Exact, multi-asset, and inventory-bounded where AS was approximate.' Calling the core GLFT linearization itself 'multi-asset' is an overclaim: the original Guéant-Lehalle-Fernández- → _Fix:_ Drop 'multi-asset' from the closing line, e.g. end with: 'Exact and inventory-bounded where AS was approximate (multi-asset versions come later, as extensions).'

**budish-cramton-shim-2015**
- `budish-cramton-shim-2015-d001` [duplicate] d001 ('Why is the HFT arms race a constant-sum game with negative social value?') and c006 ('Why is the HFT speed race a prisoner's dilemma / rent-dissipation equilibrium?') test essentially the same atom. Both answers assert: total speed s → _Fix:_ Differentiate the two so each tests a distinct atom. Keep c006 as the 'prisoner's dilemma' card (individual incentive: each firm must race given others race). Re-aim d001 at the strictly quantitative welfare-accounting atom and drop the pri

**brunnermeier-pedersen-2009**
- `brunnermeier-pedersen-2009-c008` [srs-craft] List-dump / enumeration card: 'List the five empirical features...' asks for a 5-item set in one back, which violates Wozniak's rules against enumerations and sets. Five-item recall in a single card grades poorly and decays fast; the items  → _Fix:_ Break into atomic prompts, ideally cloze deletions over a stable enumerated scaffold, e.g. 'The model explains five liquidity facts: sudden dry-ups, {{c1::commonality}}, link to {{c2::volatility}}, {{c3::flight to quality}}, and {{c4::comov

**amihud-2002**
- `amihud-2002-c010` [srs-craft] Classic 'list dump' card: front explicitly asks to 'List three practical caveats', and the back enumerates three loosely-related items plus a closing maxim. Enumeration cards are hard to grade consistently (recalling 2 of 3 is neither pass  → _Fix:_ Replace with separate atomic cards, e.g. (1) 'Why is ILLIQ a rough proxy, not a structural lambda?' -> 'It uses TOTAL volume (not signed net order flow) and ignores the intraday path.' (2) 'What volume-measurement quirks distort ILLIQ?' -> 

**menkveld-2013**
- `menkveld-2013-c007` [duplicate] c007 ('Why does the HFT earn the spread on the entrant but flatten on the incumbent — the fee/depth logic?') tests essentially the same atom already answered inside c006. The c006 back explicitly states the fee/depth logic ('Logic: earn the → _Fix:_ Disambiguate the two: narrow c006 to the descriptive facts only (cross-market split + the ~64.4% Chi-X / ~8.1% Euronext participation rates, roughly half of trades on each in absolute count), dropping the 'Logic:' sentence, and let c007 exc

**husslin-framework**
- `husslin-framework-c006` [factual] Misattribution / wrong evidence tag. The card cites only '[Established] Ni et al. (2005)' for the vanna/charm overnight bid. Ni, Pearson & Poteshman (2005) is specifically about OPEX pinning (stock-price clustering at expiration), NOT the o → _Fix:_ Fix the citations to match the source: '[Established] Lou, Polk & Skouras (2019) on overnight vs intraday returns; OPEX pinning per Ni et al. (2005); [Practitioner] the specific ~2am-ET timing.' Do not present the 2am timing as [Established

**trading-sources-curriculum**
- `trading-sources-curriculum-c008` [ambiguous] Front/back scope mismatch plus open-ended list dump. The front asks for the path 'from "read the auction" to the optimal-control math', but the back actually begins with step (1) Foundations — Harris/O'Hara/Kyle, which PRECEDES 'read the au → _Fix:_ Align the prompt to the full path and/or split the dump. Either reword the front to 'List the rough 6-step reading path of the trading-sources survey, in order' (so step 1 Foundations is in scope), or break into smaller cloze/sequence cards

**husslin-dealer-flows**
- `husslin-dealer-flows-c002` [cloze] The front contains TWO cloze deletions (c1 'buy higher / sell lower' and c2 'sell higher / buy lower'), but the card's 'cloze' metadata field declares only c1. This is a real metadata inconsistency (c2 is undeclared). Additionally, the two  → _Fix:_ Either (a) update the 'cloze' field to reflect both deletions, or preferably (b) split into two single-cloze cards so each direction is tested independently, e.g. Card A: 'SHORT gamma ⇒ dealers {{c1::buy higher / sell lower}} (amplify)'; Ca

**insilico-method**
- `insilico-method-c008` [factual] The front asks to 'Name the four pillars... with a canonical source for each,' but (a) the source module's study plan (section 'applications') is an ordered list of FIVE steps — profile, bars, vol surface, time series, AND stochastic contro → _Fix:_ Either reframe to match the source ('The @insiliconot study plan has FIVE ordered stages — name them.' back: 1 profile (Steidlmayer/Dalton) -> 2 non-time bars (Lopez de Prado) -> 3 vol surface (Gatheral) -> 4 time series (Tsay) -> 5 stochas
- `insilico-method-c005` [srs-craft] List-dump plus a compound question: the front asks both to enumerate all four participant archetypes AND which to watch most, and the back additionally tacks on the 'operative question.' That is roughly six atoms in one card (four archetype → _Fix:_ Split. Keep one focused card for the high-value atom: 'Of the four participant archetypes, which has the biggest size and is most mechanical (the one to watch most)?' -> Mechanical intraday (gamma-squeeze / VWAP / gap-fill / volume-pocket t

**insilico-quant-curriculum**
- `insilico-quant-curriculum-c005` [srs-craft] List-dump / enumeration card: the front asks to 'Name the quant-curriculum pillars and a canonical source for each', and the back is a 6-item set (profile, non-time bars, vol surface, time series, stochastic control, market mechanics) each  → _Fix:_ Split into atomic pairs, ideally cloze, e.g. 'Canonical source for the volatility surface in the curriculum => Gatheral (2006)'; 'Canonical source for financial time series => Tsay (2010)'; 'Canonical text for non-time / information-driven 
- `insilico-quant-curriculum-c008` [srs-craft] List-dump card: 'What are the honest limits of this method/curriculum?' has a back enumerating three independent limits (descriptive-not-predictor; graduate-level/multi-year; deepest material not reproduced). Three unrelated atoms in one an → _Fix:_ Split into three atomic cards: (1) 'Why is volume-profile reading not a predictor? => it is DESCRIPTIVE — describes where trade happened; acceptance/rejection is judgement, not a signal'; (2) 'How hard/long is the quant curriculum? => genui

**gatheral-vol-surface**
- `gatheral-vol-surface-c003` [srs-craft] This is a five-part list-dump in a single answer (the role of a, b, ρ, m, σ) PLUS a sixth sub-question ('which gives the equity down-skew') PLUS the wing-slope corollary. Wozniak rule 4/5: it tests too many atoms at once, so a single lapse  → _Fix:_ Split into focused cards. Keep ONE card on the parameter-to-feature map but trim the wing-slope tail (covered by c006), e.g. front 'In raw SVI, name what a, b, ρ, m, σ each control.' Then a separate minimal card for the testable hook: front

## ⚪ LOW — craft polish (46)

- **ohara-1995**: `ohara-1995-c002` (factual), `ohara-1995-c011` (duplicate)
- **kyle-1985**: `kyle-1985-c003` (factual), `kyle-1985-c011` (duplicate)
- **glosten-milgrom-1985**: `glosten-milgrom-1985-c014` (cloze), `glosten-milgrom-1985-d002` (duplicate)
- **stoikov-2008**: `stoikov-2008-c001` (srs-craft)
- **cont-kukanov-stoikov-2014**: `cont-kukanov-stoikov-2014-c007` (duplicate)
- **easley-lopez-prado-vpin**: `easley-lopez-prado-vpin-c010` (srs-craft)
- **almgren-chriss-2000**: `almgren-chriss-2000-d001` (factual), `almgren-chriss-2000-c011` (cloze)
- **aquilina-budish-oneill-2022**: `aquilina-budish-oneill-2022-c002` (srs-craft)
- **kissell-2013**: `kissell-2013-c002` (srs-craft), `kissell-2013-c008` (srs-craft), `kissell-2013-c003` (factual), `kissell-2013-c013` (srs-craft)
- **gueant-2016**: `gueant-2016-d001` (duplicate), `gueant-2016-c011` (factual), `gueant-2016-c010` (factual), `gueant-2016-c008` (formula)
- **bouchaud-bonart-donier-gould-2018**: `bouchaud-2018-c002` (srs-craft), `bouchaud-2018-c013` (duplicate)
- **budish-cramton-shim-2015**: `budish-cramton-shim-2015-c011` (srs-craft)
- **brunnermeier-pedersen-2009**: `brunnermeier-pedersen-2009-c011` (srs-craft), `brunnermeier-pedersen-2009-c012` (srs-craft), `brunnermeier-pedersen-2009-d003` (duplicate)
- **amihud-2002**: `amihud-2002-c009` (srs-craft)
- **menkveld-2013**: `menkveld-2013-c002` (formula), `menkveld-2013-d003` (factual), `menkveld-2013-c012` (duplicate)
- **husslin-dealer-flows**: `husslin-dealer-flows-c009` (cloze), `husslin-dealer-flows-c010` (srs-craft)
- **husslin-oi-positioning**: `husslin-oi-positioning-c008` (srs-craft)
- **husslin-event-trading**: `husslin-event-trading-c004` (srs-craft), `husslin-event-trading-c002` (cloze), `husslin-event-trading-c003` (srs-craft)
- **husslin-liquidity-harvesting**: `husslin-liquidity-harvesting-c008` (srs-craft), `husslin-liquidity-harvesting-c003` (cloze)
- **insilico-method**: `insilico-method-c007` (factual)
- **insilico-quant-curriculum**: `insilico-quant-curriculum-c003` (cloze)
- **gatheral-vol-surface**: `gatheral-vol-surface-c006` (cloze), `gatheral-vol-surface-c004` (srs-craft)
- **gatheral-ssvi-surface**: `gatheral-ssvi-surface-c007` (cloze), `gatheral-ssvi-surface-c008` (srs-craft)
- **acuna-2008**: `acuna-2008-c008` (cloze), `acuna-2008-c009` (cloze)

## Per-item notes

- **hasbrouck-2007** (1 findings): High-quality, factually accurate deck; only issue is a duplicated effective-spread definition across two cards.
- **ohara-1995** (4 findings): Mostly sound theory cards; one materially wrong formula (c007) and a garbled PIN acronym (c008), plus minor craft/interference issues.
- **kyle-1985** (3 findings): Strong, mathematically accurate deck; one conceptual error in a deepening card and a couple of minor craft/wording issues.
- **glosten-milgrom-1985** (3 findings): Strong, factually accurate deck — formulas (posterior, spread, Roll) verified mathematically; only minor SRS-craft and cross-module interference polish needed.
- **stoikov-2008** (4 findings): Mostly accurate, well-crafted cards faithful to the source; main issues are duplication of the two flagship formulas and one unsupported externally-sourced (Menkveld) card with a minor numeric inconsistency.
- **cartea-jaimungal-penalva** (2 findings): Factually and mathematically sound throughout; the only real issues are two "Deepening" cards that duplicate atoms already tested earlier.
- **cont-kukanov-stoikov-2014** (3 findings): Strong, accurate deck — formulas and numbers verified against source; main issues are one clear duplicate pair (c003/d001) and an overclaim in d002 that contradicts the source's own predictive-use framing.
- **easley-lopez-prado-vpin** (2 findings): Strong, accurate deck — formulas and attributions are correct vs. source and field; only minor SRS-craft polish needed.
- **almgren-chriss-2000** (3 findings): High-quality, faithful card set; all core formulas correct, only a duplicate trajectory pair and two minor craft/precision issues.
- **makarov-schoar-2020** (1 findings): High-quality, accurate set; numbers and formulas match the source. One card (d002) overstates an unsupported permanent/transitory split that contradicts the paper's persistence finding.
- **aquilina-budish-oneill-2022** (2 findings): High-fidelity deck — every numeric/factual claim matches the source and the field; only minor SRS-craft issues (one duplicate atom, one answer-scope creep).
- **kissell-2013** (5 findings): Strong, accurate deck — numerics verified, formulas correct; main issues are a few over-long list-dump answers and one near-duplicate pair (c001/c012).
- **gueant-2016** (5 findings): Strong, source-faithful deck; formulas and worked-example numerics all verified correct. A few overclaims (multi-asset, VWAP) and one composite/duplicate card.
- **bouchaud-bonart-donier-gould-2018** (2 findings): Strong, accurate deck — formulas and the square-root/propagator/diffusivity-condition values all check out against source and the field; only minor SRS-craft polish (one list-dump, one near-duplicate).
- **budish-cramton-shim-2015** (2 findings): Factually sound, well-aligned with the source and the field; the only real issues are SRS-craft overlap between two "rent-dissipation" cards and a couple of mild two-part fronts.
- **hasbrouck-1995** (0 findings): Accurate, well-crafted deck that faithfully tracks the source and the established price-discovery literature; no real problems found.
- **brunnermeier-pedersen-2009** (4 findings): Factually accurate, well-aligned with source and field knowledge; only SRS-craft issues (a couple of list-dump cards and minor interference).
- **amihud-2002** (2 findings): Strong, factually accurate deck faithful to the source and to the field; only two minor SRS-craft issues (one compound question, one list-dump).
- **menkveld-2013** (4 findings): Strong, faithful card set — content is accurate vs source and field; only minor SRS-craft overlaps and one LaTeX rounding/precision nit.
- **husslin-framework** (2 findings): Strong, faithful card set; one corrupted quote (high) and one citation/evidence-tag misattribution (medium), rest sound.
- **trading-sources-curriculum** (1 findings): Strong, source-faithful deck; one card has a front/back scope mismatch and is an open-ended list dump.
- **husslin-dealer-flows** (3 findings): High-quality, factually accurate deck that faithfully tracks the source; only a cloze-metadata mismatch and minor craft polish.
- **husslin-oi-positioning** (1 findings): Accurate, faithful to source and to established funding/positioning mechanics; one minor wording redundancy.
- **perp-funding-carry** (0 findings): Tight, accurate deck: funding mechanism, formula, regimes, positioning, carry, and worked numerics all match the source and established field knowledge; formulas and arithmetic verified correct.
- **husslin-event-trading** (3 findings): Factually accurate and well-aligned with the source; only minor SRS-craft polish needed (one scope-creep answer, mild interference, a 2-part question).
- **husslin-liquidity-harvesting** (2 findings): Factually accurate and well-aligned with the source; only minor SRS-craft polish on two cards.
- **insilico-method** (3 findings): Accurate, well-attributed deck faithful to the source; main issues are SRS list-dump craft and one "four pillars" framing that mismatches the source's five-step plan.
- **insilico-quant-curriculum** (3 findings): Factually sound and well-aligned with the source; the main weaknesses are two list-dump enumeration cards and one minor multi-item cloze.
- **gatheral-vol-surface** (3 findings): Factually accurate and well-aligned with the source; the only issues are SRS-craft (multi-part list-dump answers and one cloze-field inconsistency), not correctness.
- **gatheral-ssvi-surface** (2 findings): Strong, faithful card set: formulas and arbitrage conditions are correct and match Gatheral-Jacquier; only minor cloze-craft and list-dump polish items.
- **acuna-2008** (2 findings): Strong, accurate deck: all formulas and values verified against source and reproduce numerically; only minor SRS-craft polish on two long multi-descriptor cloze spans.
