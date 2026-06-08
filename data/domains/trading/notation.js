// Trading domain notation — the symbols/objects used across the practitioner
// edges + quant method, with the source author/convention for each.
// Attributed lessons; not financial advice.

export const NOTATION = [
  {
    concept: 'Dealer gamma exposure (GEX)',
    glossarySlug: 'dealer-gamma',
    rows: [
      { author: 'practitioner / Baltussen et al.', year: 2021, symbol: '\\mathrm{GEX}(S)=\\sum_i w_i\\,\\Gamma(S,K_i)\\,S^2', notes: 'Net dealer gamma across spot; sign sets hedging direction (short γ amplify, long γ pin).' },
      { author: 'Black-Scholes', year: 1973, symbol: '\\Gamma=\\dfrac{\\varphi(d_1)}{S\\,\\sigma\\sqrt{\\tau}}', notes: 'Option gamma; peaks near S≈K. φ = standard normal pdf.' },
    ],
  },
  {
    concept: 'Gamma flip',
    glossarySlug: 'gamma-flip',
    rows: [
      { author: 'practitioner', year: 2024, symbol: 'S^\\ast:\\ \\mathrm{GEX}(S^\\ast)=0', notes: 'Spot where net dealer gamma crosses zero — above: pin; below: amplify.' },
    ],
  },
  {
    concept: 'Second-order Greeks (vanna, charm)',
    glossarySlug: 'vanna-charm',
    rows: [
      { author: 'options theory', year: null, symbol: '\\text{vanna}=\\dfrac{\\partial\\Delta}{\\partial\\sigma}', notes: 'Δ sensitivity to IV; falling IV ⇒ short-put dealers buy.' },
      { author: 'options theory', year: null, symbol: '\\text{charm}=\\dfrac{\\partial\\Delta}{\\partial t}', notes: 'Δ sensitivity to time; decay ⇒ short-put dealers buy, strongest into expiry.' },
    ],
  },
  {
    concept: 'Perpetual funding / premium',
    glossarySlug: 'perp-premium',
    rows: [
      { author: 'Schmeling et al. (BIS)', year: 2023, symbol: 'f\\ \\propto\\ (P_{\\text{perp}}-P_{\\text{spot}})', notes: 'Funding anchors perp to spot; persistent negative ⇒ MMs long ⇒ upside-squeeze risk.' },
    ],
  },
  {
    concept: 'Order-flow toxicity (VPIN)',
    glossarySlug: 'order-flow-toxicity',
    rows: [
      { author: 'Easley, López de Prado & O\'Hara', year: 2012, symbol: '\\mathrm{VPIN}=\\dfrac{\\sum|V^{\\text{buy}}-V^{\\text{sell}}|}{\\sum V}', notes: 'Volume-synchronised probability of informed trading; "are you the meat?" formalised. (Micro domain module.)' },
    ],
  },
  {
    concept: 'Price impact (Kyle λ)',
    glossarySlug: null,
    rows: [
      { author: 'Kyle', year: 1985, symbol: '\\Delta p=\\lambda\\,Q', notes: 'Linear price impact of (forced) order flow Q. (Micro domain module.)' },
      { author: 'Bouchaud et al.', year: 2018, symbol: '\\Delta p\\ \\propto\\ \\sigma\\sqrt{Q/V}', notes: 'Square-root impact law — concave in size. (Micro domain module.)' },
    ],
  },
  {
    concept: 'Volume profile (POC / value area)',
    glossarySlug: 'point-of-control',
    rows: [
      { author: 'Steidlmayer / Dalton', year: 1984, symbol: '\\mathrm{POC}=\\arg\\max_p V(p)', notes: 'Most-traded price (magnet). Value area ≈ central 70% of volume by the expand-to-larger-neighbour rule.' },
    ],
  },
  {
    concept: 'Stochastic optimal control (HJB / viscosity)',
    glossarySlug: 'viscosity-solutions',
    rows: [
      { author: 'Crandall & Lions; Pham', year: 1983, symbol: '\\partial_t V+\\sup_a\\{\\mathcal{L}^a V+f\\}=0', notes: 'Hamilton-Jacobi-Bellman PDE; viscosity solution = optimal action V(state). Execution / stopping / switching.' },
      { author: 'Almgren & Chriss', year: 2001, symbol: '\\min\\ \\mathbb{E}[\\text{cost}]+\\lambda\\,\\mathrm{Var}[\\text{cost}]', notes: 'Optimal execution: impact vs risk trade-off. (Micro domain module.)' },
    ],
  },
  {
    concept: "Perpetual funding rate",
    glossarySlug: "funding-rate-clamp",
    rows: [
      { author: "exchange methodology (BitMEX / Binance / Hyperliquid)", year: null, symbol: "F(P)=P+\\operatorname{clamp}(I-P,\\,-c,\\,c)", notes: "Funding = premium P plus interest I clamped to ±c. Three regimes: flat (F=I), rich (F=P−c, longs pay), cheap (F=P+c, shorts pay)." },
      { author: "exchange methodology", year: null, symbol: "F_{\\text{ann}}=F\\times m", notes: "Annualized funding = per-period F times settlements/year m (8h ⇒ m=1095). Sign of F flags the crowded side." },
    ],
  },
  {
    concept: "Trade expectancy",
    glossarySlug: "expectancy",
    rows: [
      { author: "TraderXO (@Trader_XO)", year: 2024, symbol: "E_R=p\\,b-(1-p)", notes: "Per-unit-risk expectancy: win prob p, reward:risk b. Positive E_R = an engineered edge; the quantity to maximise, not win rate." },
    ],
  },
  {
    concept: "Kelly fraction (binary bet)",
    glossarySlug: "kelly-fraction",
    rows: [
      { author: "Kelly; Thorp", year: 1956, symbol: "f^\\ast=\\dfrac{E_R}{b}=\\dfrac{p\\,b-(1-p)}{b}", notes: "Growth-optimal fraction of capital to risk on a binary bet with reward:risk b. Practitioners trade a fractional Kelly to cut variance." },
    ],
  },
  {
    concept: "Breakeven win rate",
    glossarySlug: "breakeven-win-rate",
    rows: [
      { author: "TraderXO (@Trader_XO)", year: 2024, symbol: "p^\\ast=\\dfrac{1}{1+b}", notes: "Win rate that makes E_R=0 for reward:risk b. Edge requires p>p*; larger b ⇒ lower hurdle." },
    ],
  },
  {
    concept: "Black-Scholes-Merton price",
    glossarySlug: "black-scholes-merton",
    rows: [
      { author: "Black, Scholes & Merton", year: 1973, symbol: "C=S\\,N(d_1)-K e^{-r\\tau}N(d_2)", notes: "European call price; put by parity. N = standard normal CDF, τ = time to expiry, r = rate." },
      { author: "Black, Scholes & Merton", year: 1973, symbol: "d_1=\\dfrac{\\ln(S/K)+(r+\\tfrac12\\sigma^2)\\tau}{\\sigma\\sqrt{\\tau}}", notes: "Standardised log-moneyness adjusted for drift and variance; the core argument of the pricing formula." },
      { author: "Black, Scholes & Merton", year: 1973, symbol: "d_2=d_1-\\sigma\\sqrt{\\tau}", notes: "Second pricing argument; N(d2) = risk-neutral prob the call finishes in the money." },
    ],
  },
  {
    concept: "Option Greeks (delta, gamma, vega, theta)",
    glossarySlug: "option-gamma",
    rows: [
      { author: "Black-Scholes", year: 1973, symbol: "\\Delta=N(d_1)", notes: "Call delta: ∂price/∂S, the spot hedge ratio (put delta = N(d1)−1)." },
      { author: "Black-Scholes", year: 1973, symbol: "\\Gamma=\\dfrac{\\varphi(d_1)}{S\\,\\sigma\\sqrt{\\tau}}", notes: "Gamma: ∂Δ/∂S, curvature of the hedge; peaks near S≈K and into expiry. φ = normal pdf." },
      { author: "Black-Scholes", year: 1973, symbol: "\\nu=S\\,\\varphi(d_1)\\sqrt{\\tau}", notes: "Vega: ∂price/∂σ, sensitivity to implied vol; what a vol seller is short." },
      { author: "Black-Scholes", year: 1973, symbol: "\\Theta=-\\dfrac{S\\,\\varphi(d_1)\\,\\sigma}{2\\sqrt{\\tau}}-rK e^{-r\\tau}N(d_2)", notes: "Theta: ∂price/∂t, time decay (call); the carry a long-option holder pays." },
    ],
  },
  {
    concept: "Put-call parity",
    glossarySlug: "put-call-parity",
    rows: [
      { author: "Stoll; options theory", year: 1969, symbol: "C-P=S-K e^{-r\\tau}", notes: "Model-free no-arbitrage link between a European call and put at the same strike/expiry; pins synthetic forwards." },
    ],
  },
  {
    concept: "Expected maximum Sharpe (multiple testing)",
    glossarySlug: "expected-max-sharpe",
    rows: [
      { author: "Bailey & López de Prado", year: 2014, symbol: "\\mathbb{E}[\\max_N]\\approx\\sqrt{V}\\left[(1-\\gamma)Z^{-1}\\!\\left(1-\\tfrac1N\\right)+\\gamma Z^{-1}\\!\\left(1-\\tfrac{1}{Ne}\\right)\\right]", notes: "Expected best Sharpe from N skill-less trials (V = variance of trial Sharpes, γ = Euler-Mascheroni, Z⁻¹ = normal quantile). The luck benchmark." },
    ],
  },
  {
    concept: "Sharpe ratio standard error (Lo)",
    glossarySlug: "probabilistic-sharpe-ratio",
    rows: [
      { author: "Lo", year: 2002, symbol: "\\sigma(\\widehat{SR})=\\sqrt{\\dfrac{1-\\gamma_3\\,\\widehat{SR}+\\tfrac{\\gamma_4-1}{4}\\,\\widehat{SR}^2}{T-1}}", notes: "Estimation error of an observed Sharpe over T returns, corrected for skew γ3 and kurtosis γ4 (fatter/skewed tails widen it)." },
    ],
  },
  {
    concept: "Probabilistic & Deflated Sharpe Ratio",
    glossarySlug: "deflated-sharpe-ratio",
    rows: [
      { author: "Bailey & López de Prado", year: 2014, symbol: "\\text{PSR}=\\Phi\\!\\left[\\dfrac{(\\widehat{SR}-SR^\\ast)}{\\sigma(\\widehat{SR})}\\right]", notes: "Probability the true Sharpe exceeds a benchmark SR*; DSR sets SR* to the N-trial expected max, deflating for selection bias." },
    ],
  },
  {
    concept: "Implied / realized variance & the variance risk premium",
    glossarySlug: "variance-risk-premium",
    rows: [
      { author: "Carr & Wu", year: 2009, symbol: "K_{\\text{var}}=\\sigma_{\\text{imp}}^2", notes: "Fair variance-swap strike = squared implied vol; what the seller receives." },
      { author: "Carr & Wu", year: 2009, symbol: "RV=\\dfrac{252}{n}\\sum_{i=1}^{n} r_i^2", notes: "Annualized realized variance from n daily log returns; what the seller pays." },
      { author: "Carr & Wu", year: 2009, symbol: "\\text{VRP}=K_{\\text{var}}-\\mathbb{E}[RV]", notes: "Variance risk premium; systematically positive (implied richer than realized) ⇒ selling vol earns a premium." },
    ],
  },
  {
    concept: "Variance-swap log-contract replication",
    glossarySlug: "log-contract-replication",
    rows: [
      { author: "Demeterfi, Derman, Kamal & Zou", year: 1999, symbol: "K_{\\text{var}}=\\dfrac{2}{T}\\!\\left(\\int_0^{F}\\!\\dfrac{P(K)}{K^2}dK+\\int_{F}^{\\infty}\\!\\dfrac{C(K)}{K^2}dK\\right)e^{rT}", notes: "Model-free fair variance from a 1/K²-weighted strip of OTM options plus a dynamic futures hedge (the log contract)." },
    ],
  },
  {
    concept: "Cumulative volume delta (CVD)",
    glossarySlug: "cumulative-volume-delta",
    rows: [
      { author: "order-flow practitioners", year: null, symbol: "\\delta_t=B_t-S_t,\\quad \\mathrm{CVD}_t=\\sum_{i\\le t}\\delta_i", notes: "Bar aggressor imbalance δ (buy − sell market volume); CVD = its running sum, the order-flow tape." },
      { author: "Kyle (impact)", year: 1985, symbol: "\\Delta p_t\\approx\\lambda(1-a)\\,\\delta_t", notes: "Modelled price move per unit flow; absorption coefficient a∈[0,1] dampens impact — high a = passive absorption (divergence tell)." },
      { author: "Kyle (OLS estimator)", year: 1985, symbol: "\\hat{\\lambda}=\\dfrac{\\operatorname{Cov}(\\Delta p,\\delta)}{\\operatorname{Var}(\\delta)}", notes: "Effective price impact recovered as the regression slope of price change on signed flow." },
    ],
  },
  {
    concept: "Diversification ratio & the 1/√ρ ceiling",
    glossarySlug: "diversification-ratio",
    rows: [
      { author: "Markowitz (equicorrelation identity)", year: 1952, symbol: "D(N,\\rho)=\\sqrt{\\dfrac{N}{1+(N-1)\\rho}}", notes: "Sharpe multiplier for N equal-weight edges with pairwise correlation ρ; Sharpe_port = S·D." },
      { author: "Markowitz", year: 1952, symbol: "\\lim_{N\\to\\infty}D(N,\\rho)=\\dfrac{1}{\\sqrt{\\rho}}", notes: "Correlation, not strategy count, sets the ceiling: as N→∞ the benefit saturates at 1/√ρ (ρ=0 ⇒ unbounded √N)." },
    ],
  },
  {
    concept: "Ornstein-Uhlenbeck spread (pairs trading)",
    glossarySlug: "ornstein-uhlenbeck",
    rows: [
      { author: "Avellaneda & Lee", year: 2010, symbol: "dX_t=\\kappa(\\theta-X_t)\\,dt+\\sigma\\,dW_t", notes: "Mean-reverting residual spread: reversion speed κ, long-run mean θ, volatility σ. The model behind stat-arb." },
      { author: "Avellaneda & Lee", year: 2010, symbol: "t_{1/2}=\\dfrac{\\ln 2}{\\kappa}", notes: "Half-life of mean reversion; how long a divergence takes to decay halfway — sets the holding horizon." },
      { author: "Avellaneda & Lee", year: 2010, symbol: "\\sigma_{\\text{eq}}=\\dfrac{\\sigma}{\\sqrt{2\\kappa}}", notes: "Stationary (equilibrium) std of the OU spread; the natural scale for the z-score bands." },
      { author: "Avellaneda & Lee", year: 2010, symbol: "z=\\dfrac{X_t-\\theta}{\\sigma_{\\text{eq}}}", notes: "z/s-score of the spread; enter long at z≤−entry, short at z≥+entry, exit near the mean." },
    ],
  },
  {
    concept: "Market Profile (TPO) point of control & value area",
    glossarySlug: "point-of-control",
    rows: [
      { author: "Steidlmayer & Dalton", year: 1984, symbol: "\\mathrm{POC}=\\arg\\max_{p}\\,\\mathrm{TPO}(p)", notes: "Price with the longest TPO row (time-at-price) = the fairest/most-accepted price, an auction magnet." },
      { author: "Steidlmayer & Dalton", year: 1984, symbol: "\\mathrm{VA}:\\ \\sum_{p\\in\\mathrm{VA}}\\mathrm{TPO}(p)\\approx 0.70\\sum_p \\mathrm{TPO}(p)", notes: "Value area = central ~70% of TPO count built outward from the POC by the larger-neighbour rule." },
    ],
  },
];
