// Notation reference: how different authors symbolize the same underlying concept.
// Use this to translate when reading across papers. Each row is one concept;
// columns are author-source pairs.

export const NOTATION = [
  {
    concept: 'Price impact coefficient',
    glossarySlug: 'kyles-lambda',
    rows: [
      { author: 'Kyle',                year: 1985, symbol: '\\lambda',   notes: 'Linear price impact, normal noise' },
      { author: 'Cont-Kukanov-Stoikov', year: 2014, symbol: '\\beta',     notes: 'OFI regression coefficient' },
      { author: 'Almgren-Chriss',      year: 2000, symbol: '\\eta',       notes: 'Permanent impact rate' },
      { author: 'Almgren-Chriss',      year: 2000, symbol: '\\epsilon',   notes: 'Temporary impact rate' },
      { author: 'Bouchaud et al.',     year: 2018, symbol: 'Y',           notes: 'Square-root law constant' },
      { author: 'Amihud',              year: 2002, symbol: '\\mathrm{ILLIQ}', notes: 'Daily |R|/DolVol proxy for λ' },
    ]
  },
  {
    concept: 'Volatility',
    glossarySlug: null,
    rows: [
      { author: 'Kyle',           year: 1985, symbol: '\\sigma_v',     notes: 'SD of fundamental value V' },
      { author: 'Kyle',           year: 1985, symbol: '\\sigma_u',     notes: 'SD of noise-trader order flow' },
      { author: 'Stoikov',        year: 2008, symbol: '\\sigma',       notes: 'Mid-price Brownian diffusion' },
      { author: 'Almgren-Chriss', year: 2000, symbol: '\\sigma',       notes: 'Arithmetic Brownian volatility of mid' },
      { author: 'Roll',           year: 1984, symbol: '\\sigma_u^2',   notes: 'Variance of efficient price innovations' },
    ]
  },
  {
    concept: 'Spread / half-spread',
    glossarySlug: 'half-spread',
    rows: [
      { author: 'Hasbrouck',          year: 2007, symbol: 's',                notes: 'Quoted spread' },
      { author: 'Hasbrouck',          year: 2007, symbol: 's/2',              notes: 'Quoted half-spread' },
      { author: 'Stoikov',            year: 2008, symbol: '\\delta^a, \\delta^b', notes: 'Bid/ask distance from reservation price' },
      { author: 'Cartea-Jaimungal-P', year: 2015, symbol: '\\delta',          notes: 'Optimal half-spread control' },
      { author: 'Glosten-Milgrom',    year: 1985, symbol: 'a - b',            notes: 'E[V|buy] − E[V|sell]' },
    ]
  },
  {
    concept: 'Inventory / position',
    glossarySlug: 'inventory-risk',
    rows: [
      { author: 'Stoikov',            year: 2008, symbol: 'q',         notes: 'Net inventory (signed)' },
      { author: 'Cartea-Jaimungal-P', year: 2015, symbol: 'Q_t',       notes: 'Position process, continuous-time' },
      { author: 'Stoll',              year: 1978, symbol: 'I',         notes: 'Inventory imbalance' },
      { author: 'Almgren-Chriss',     year: 2000, symbol: 'x_t',       notes: 'Remaining shares to execute' },
    ]
  },
  {
    concept: 'Risk aversion',
    glossarySlug: 'risk-aversion',
    rows: [
      { author: 'Stoikov',            year: 2008, symbol: '\\gamma',     notes: 'CARA coefficient' },
      { author: 'Cartea-Jaimungal-P', year: 2015, symbol: '\\phi',       notes: 'Running inventory penalty' },
      { author: 'Cartea-Jaimungal-P', year: 2015, symbol: '\\alpha',     notes: 'Terminal inventory penalty' },
      { author: 'Almgren-Chriss',     year: 2000, symbol: '\\lambda_R',  notes: 'Trader risk aversion (frontier index)' },
    ]
  },
  {
    concept: 'Order flow / signed volume',
    glossarySlug: 'ofi',
    rows: [
      { author: 'Kyle',                year: 1985, symbol: 'x',         notes: 'Informed trader\'s order size' },
      { author: 'Kyle',                year: 1985, symbol: 'u',         notes: 'Noise trader order flow' },
      { author: 'Kyle',                year: 1985, symbol: 'y = x + u', notes: 'Total order flow observed by MM' },
      { author: 'Cont-Kukanov-Stoikov', year: 2014, symbol: '\\text{OFI}_n', notes: 'Net depth contribution per interval' },
      { author: 'Easley-LdP-O\'Hara',   year: 2012, symbol: 'V^B, V^S',  notes: 'Buy- / sell-side volume in bucket' },
    ]
  },
  {
    concept: 'Probability of informed trading',
    glossarySlug: 'pin',
    rows: [
      { author: "O'Hara",          year: 1995, symbol: '\\mu',        notes: 'Fraction of informed traders (GM model)' },
      { author: 'Easley et al.',   year: 1996, symbol: '\\alpha',     notes: 'Probability of an information event' },
      { author: 'Easley et al.',   year: 1996, symbol: '\\text{PIN}', notes: 'Probability arriving order is informed' },
      { author: 'Easley-LdP-O\'Hara', year: 2012, symbol: '\\text{VPIN}', notes: 'Volume-time version' },
    ]
  },
  {
    concept: 'Time horizon',
    glossarySlug: null,
    rows: [
      { author: 'Stoikov',            year: 2008, symbol: 'T',         notes: 'Trading session end' },
      { author: 'Stoikov',            year: 2008, symbol: 'T - t',     notes: 'Time remaining (shrinks reservation skew)' },
      { author: 'Almgren-Chriss',     year: 2000, symbol: 'T',         notes: 'Execution horizon' },
      { author: 'Cartea-Jaimungal-P', year: 2015, symbol: '\\tau',     notes: 'Time-to-maturity in HJB' },
    ]
  },
  {
    concept: 'Fundamental / efficient price',
    glossarySlug: 'efficient-price',
    rows: [
      { author: 'Kyle',         year: 1985, symbol: 'V',           notes: 'Liquidation value (terminal)' },
      { author: 'Hasbrouck',    year: 2007, symbol: 'm_t',         notes: 'Efficient price at time t' },
      { author: 'Stoikov',      year: 2008, symbol: 'S_t',         notes: 'Mid-price (Brownian)' },
      { author: 'Glosten-Milgrom', year: 1985, symbol: '\\bar{V}, \\underline{V}', notes: 'High/low value states' },
    ]
  },
  {
    concept: 'Mid-price / quote',
    glossarySlug: null,
    rows: [
      { author: 'Hasbrouck',    year: 2007, symbol: 'm_t',           notes: 'Quote midpoint' },
      { author: 'Hasbrouck',    year: 2007, symbol: 'p_t',           notes: 'Transaction price' },
      { author: 'Hasbrouck',    year: 2007, symbol: 'q_t \\in \\{-1, +1\\}', notes: 'Trade direction (sell/buy)' },
      { author: 'Stoikov',      year: 2008, symbol: 'r(s,t)',        notes: 'Reservation price' },
      { author: 'Stoikov',      year: 2008, symbol: 'p^a, p^b',      notes: 'Posted ask / bid' },
    ]
  },
  {
    concept: 'Funding / capital constraint',
    glossarySlug: 'funding-liquidity',
    rows: [
      { author: 'Brunnermeier-Pedersen', year: 2009, symbol: 'W_t',          notes: 'Speculator capital (equity)' },
      { author: 'Brunnermeier-Pedersen', year: 2009, symbol: 'm_t',          notes: 'Margin / haircut per unit position' },
      { author: 'Brunnermeier-Pedersen', year: 2009, symbol: '|x_t|\\le W_t/m_t', notes: 'Position cap (funding constraint)' },
    ]
  },
  {
    concept: 'Price-discovery weights',
    glossarySlug: 'information-share',
    rows: [
      { author: 'Hasbrouck',    year: 1995, symbol: '\\psi',          notes: 'Common-factor (random-walk) weights' },
      { author: 'Hasbrouck',    year: 1995, symbol: '\\alpha',        notes: 'VECM error-correction / adjustment speeds' },
      { author: 'Hasbrouck',    year: 1995, symbol: '\\Omega',        notes: 'Innovation covariance (Cholesky for IS bounds)' },
      { author: 'Gonzalo-Granger', year: 1995, symbol: '\\alpha_\\perp', notes: 'Component share (α-only)' },
    ]
  },
];
