// Glossary of recurring market-microstructure terms.
// Each entry: slug (URL-safe id), term (bilingual), aliases (alt names for
// search), definition (bilingual), formulaLatex (optional), seeAlso (other
// slugs), sources (item ids). Cross-link to cards is computed at runtime.
//
// Bilingual schema (Phase 1.3): term + definition are {en,id} objects.
// Term often stays the same in both languages (technical vocabulary
// preserved in English even in Indonesian sentences). Definition ID is
// conversational reference-style — concise, technical terms in English.

export const GLOSSARY = [
  // ─── Core spread anatomy ───
  {
    slug: 'efficient-price',
    term: { en: 'Efficient price', id: 'Efficient price' },
    aliases: ['fundamental value', 'true price'],
    definition: {
      en: "The expected fundamental value conditional on all public information at time t. Distinct from observed transaction price (which contains microstructure noise from spread, inventory, discreteness). Theoretical anchor for measuring trading costs.",
      id: "Expected fundamental value asset conditional ke semua public information di waktu t. Beda dari observed transaction price (yang punya microstructure noise dari spread, inventory, diskret tick). Jadi anchor teoritis buat ukur trading cost."
    },
    seeAlso: ['bid-ask-spread', 'realized-spread', 'effective-spread'],
    sources: ['hasbrouck-2007', 'ohara-1995'],
    category: 'spread-anatomy'
  },
  {
    slug: 'bid-ask-spread',
    term: { en: 'Bid-ask spread', id: 'Bid-ask spread' },
    aliases: ['quoted spread', 'spread'],
    definition: {
      en: "Difference between the best ask and best bid price. Decomposes into three components: order-processing cost, adverse-selection cost, and inventory-holding cost.",
      id: "Selisih antara best ask sama best bid. Pecah jadi tiga komponen: order-processing cost, adverse-selection cost, dan inventory-holding cost."
    },
    formulaLatex: 's = p^{ask} - p^{bid}',
    seeAlso: ['half-spread', 'effective-spread', 'order-processing-cost', 'adverse-selection-cost', 'inventory-cost'],
    sources: ['hasbrouck-2007', 'ohara-1995'],
    category: 'spread-anatomy'
  },
  {
    slug: 'half-spread',
    term: { en: 'Half-spread', id: 'Half-spread' },
    aliases: ['quoted half-spread'],
    definition: {
      en: "Half of the bid-ask spread, i.e., the distance from quote midpoint to either bid or ask. In Avellaneda-Stoikov, the optimal half-spread is the central control variable for the market maker.",
      id: "Setengah dari bid-ask spread — jarak dari quote midpoint ke bid atau ask. Di Avellaneda-Stoikov, optimal half-spread itu control variable utama market maker."
    },
    formulaLatex: '\\delta = s/2 = (p^{ask} - p^{bid})/2',
    seeAlso: ['bid-ask-spread', 'reservation-price'],
    sources: ['stoikov-2008', 'cartea-jaimungal-penalva'],
    category: 'spread-anatomy'
  },
  {
    slug: 'effective-spread',
    term: { en: 'Effective spread', id: 'Effective spread' },
    aliases: ['paid spread'],
    definition: {
      en: "Twice the absolute difference between trade price and contemporaneous quote midpoint. Captures actual paid cost — useful when trades occur inside the quoted spread.",
      id: "Dua kali absolute selisih antara trade price dan quote midpoint pada waktu yang sama. Ngukur biaya aktual yang dibayar — penting buat kasus dimana trade kejadian di dalam quoted spread."
    },
    formulaLatex: '\\text{ES}_t = 2 q_t (p_t - m_t)',
    seeAlso: ['realized-spread', 'bid-ask-spread', 'efficient-price'],
    sources: ['hasbrouck-2007'],
    category: 'spread-anatomy'
  },
  {
    slug: 'realized-spread',
    term: { en: 'Realized spread', id: 'Realized spread' },
    aliases: [],
    definition: {
      en: "Twice the signed difference between trade price and quote midpoint observed Δ minutes after the trade (typically 5 minutes). Measures the market maker's gross trading revenue net of adverse-selection price movement.",
      id: "Dua kali signed selisih antara trade price dan quote midpoint yang diukur Δ menit setelah trade (biasanya 5 menit). Ngukur gross revenue market maker setelah dikurangi adverse-selection price movement."
    },
    formulaLatex: '\\text{RS}_t = 2 q_t (p_t - m_{t+\\Delta})',
    seeAlso: ['effective-spread', 'adverse-selection-cost'],
    sources: ['hasbrouck-2007'],
    category: 'spread-anatomy'
  },
  {
    slug: 'bid-ask-bounce',
    term: { en: 'Bid-ask bounce', id: 'Bid-ask bounce' },
    aliases: [],
    definition: {
      en: "Negative first-order serial correlation in transaction prices caused by trades alternating between bid and ask, even when the efficient price follows a random walk. Exploited by Roll (1984) to back out the spread.",
      id: "Negatif first-order autocorrelation di transaction price karena trade berganti-ganti antara bid dan ask, padahal efficient price-nya random walk. Roll (1984) pakai ini buat back out spread dari trade data."
    },
    seeAlso: ['rolls-spread-estimator', 'efficient-price'],
    sources: ['hasbrouck-2007'],
    category: 'spread-anatomy'
  },
  {
    slug: 'order-processing-cost',
    term: { en: 'Order-processing cost', id: 'Order-processing cost' },
    aliases: ['op cost'],
    definition: {
      en: "Spread component compensating market makers for the operational cost of providing liquidity: exchange fees, technology, capital. Persistent even in fully informationless trading.",
      id: "Komponen spread yang nutupin biaya operasional market maker buat nyediain liquidity: exchange fees, tech, kapital. Tetap ada bahkan kalau trading-nya informationless."
    },
    seeAlso: ['bid-ask-spread', 'adverse-selection-cost', 'inventory-cost'],
    sources: ['hasbrouck-2007'],
    category: 'spread-anatomy'
  },
  {
    slug: 'adverse-selection-cost',
    term: { en: 'Adverse-selection cost', id: 'Adverse-selection cost' },
    aliases: ['information cost'],
    definition: {
      en: "Spread component compensating market makers for systematic losses to informed traders. Even risk-neutral, zero-inventory-cost MMs charge a positive spread because the order flow includes counterparties with private information.",
      id: "Komponen spread buat nutupin loss sistematis market maker ke informed trader. MM yang risk-neutral pun tetap charge spread karena order flow pasti ada counterparty yang punya private information."
    },
    seeAlso: ['glosten-milgrom-update', 'pin', 'vpin', 'bagehot-insight'],
    sources: ['glosten-milgrom-1985', 'ohara-1995'],
    category: 'spread-anatomy'
  },
  {
    slug: 'inventory-cost',
    term: { en: 'Inventory-holding cost', id: 'Inventory-holding cost' },
    aliases: ['inventory risk cost'],
    definition: {
      en: "Spread component compensating market makers for price risk on undesired inventory acquired by absorbing order flow. Scales with risk aversion × volatility² × expected time-to-unwind.",
      id: "Komponen spread buat ngebayar price risk yang MM tanggung karena nyerap order flow. Scale-nya = risk aversion × volatility² × expected time buat unwind posisi."
    },
    seeAlso: ['inventory-risk', 'risk-aversion', 'reservation-price'],
    sources: ['ohara-1995', 'stoikov-2008'],
    category: 'spread-anatomy'
  },

  // ─── Information theory ───
  {
    slug: 'kyles-lambda',
    term: { en: "Kyle's lambda (λ)", id: "Kyle's lambda (λ)" },
    aliases: ['lambda', 'price impact coefficient', 'Kyle lambda'],
    definition: {
      en: "The equilibrium coefficient relating signed order flow to price impact in Kyle (1985). Under normal noise + normal information, λ = σ_v / (2σ_u). Inversely related to market depth; the single most-cited price-impact construct in microstructure.",
      id: "Koefisien equilibrium yang relate signed order flow ke price impact di Kyle (1985). Di normal noise + normal info: λ = σ_v / (2σ_u). Berbanding terbalik dengan market depth. Konstruk price-impact paling sering disitir di microstructure literature."
    },
    formulaLatex: '\\lambda = \\frac{\\sigma_v}{2\\sigma_u}',
    seeAlso: ['market-depth', 'adverse-selection-cost', 'ofi', 'square-root-impact'],
    sources: ['kyle-1985'],
    category: 'information-theory'
  },
  {
    slug: 'pin',
    term: { en: 'PIN (Probability of Informed-based trading)', id: 'PIN (Probability of Informed Trading)' },
    aliases: ['probability of informed trading'],
    definition: {
      en: "Unconditional probability that an arriving order is from an informed (rather than liquidity) trader. Estimated from rates of informed-event days and trader arrival intensities. Higher PIN → wider spreads.",
      id: "Unconditional probability bahwa order yang masuk berasal dari informed trader (bukan liquidity trader). Diestimasi dari rate event-day informed dan intensitas arrival trader. PIN tinggi → spread lebar."
    },
    formulaLatex: '\\text{PIN} = \\frac{\\alpha \\mu}{\\alpha \\mu + \\epsilon_b + \\epsilon_s}',
    seeAlso: ['vpin', 'adverse-selection-cost', 'glosten-milgrom-update'],
    sources: ['ohara-1995'],
    category: 'information-theory'
  },
  {
    slug: 'vpin',
    term: { en: 'VPIN (Volume-synchronized PIN)', id: 'VPIN (Volume-synchronized PIN)' },
    aliases: ['volume-synchronized probability of informed trading', 'flow toxicity'],
    definition: {
      en: "A volume-time variant of PIN proposed by Easley, López de Prado & O'Hara (2012). Measures order-flow imbalance over equal-volume buckets as a proxy for flow toxicity. Originally validated against Flash Crash dynamics; later fit-quality questioned.",
      id: "Varian PIN yang pakai volume-time, diusulkan Easley, López de Prado & O'Hara (2012). Ngukur order-flow imbalance per bucket equal-volume sebagai proxy flow toxicity. Awalnya divalidate sama Flash Crash dynamics; quality fit-nya kemudian dipertanyakan."
    },
    formulaLatex: '\\text{VPIN} = \\frac{\\sum_{\\tau} |V^B_\\tau - V^S_\\tau|}{\\sum_\\tau V_\\tau}',
    seeAlso: ['pin', 'ofi', 'adverse-selection-cost'],
    sources: ['easley-lopez-prado-vpin'],
    category: 'information-theory'
  },
  {
    slug: 'sequential-trade-model',
    term: { en: 'Sequential trade model', id: 'Sequential trade model' },
    aliases: ['sequential-trade framework'],
    definition: {
      en: "A market-microstructure model class (Glosten-Milgrom 1985 archetype) where orders arrive one at a time and the market maker updates quotes continuously via Bayesian inference. Contrast batch-trade (Kyle).",
      id: "Kelas model microstructure (archetype-nya Glosten-Milgrom 1985) dimana order datang satu-satu dan market maker update quote terus-menerus pakai Bayesian inference. Kontras dengan batch-trade (Kyle)."
    },
    seeAlso: ['batch-trade-model', 'glosten-milgrom-update', 'bayesian-update'],
    sources: ['glosten-milgrom-1985', 'ohara-1995'],
    category: 'information-theory'
  },
  {
    slug: 'batch-trade-model',
    term: { en: 'Batch trade model', id: 'Batch trade model' },
    aliases: ['batch auction model'],
    definition: {
      en: "A model class (Kyle 1985 archetype) where orders aggregate within a window and clear at a single price set by a competitive auctioneer. Contrast sequential-trade.",
      id: "Kelas model (archetype-nya Kyle 1985) dimana order di-aggregate dalam window dan clear di satu harga yang di-set oleh competitive auctioneer. Kontras dengan sequential-trade."
    },
    seeAlso: ['sequential-trade-model', 'kyles-lambda'],
    sources: ['kyle-1985', 'ohara-1995'],
    category: 'information-theory'
  },
  {
    slug: 'glosten-milgrom-update',
    term: { en: 'Glosten-Milgrom Bayesian quote update', id: 'Glosten-Milgrom Bayesian quote update' },
    aliases: ['GM update', 'GM model'],
    definition: {
      en: "Sequential-trade model where the risk-neutral competitive MM sets ask = E[V | buy] and bid = E[V | sell]. Spread is pure adverse-selection cost under this framework. Quotes converge to true V as trading proceeds.",
      id: "Sequential-trade model dimana MM risk-neutral competitive set ask = E[V | buy] dan bid = E[V | sell]. Di framework ini, spread itu pure adverse-selection cost. Quote-nya converge ke true V seiring trading berjalan."
    },
    seeAlso: ['adverse-selection-cost', 'sequential-trade-model', 'bayesian-update'],
    sources: ['glosten-milgrom-1985'],
    category: 'information-theory'
  },
  {
    slug: 'bayesian-update',
    term: { en: 'Bayesian quote update', id: 'Bayesian quote update' },
    aliases: ['posterior update'],
    definition: {
      en: "The mechanism by which a market maker revises their belief about fundamental value V after observing an order. Prior + likelihood of buy/sell given V → posterior on V → new quotes.",
      id: "Mekanisme market maker revisi belief mereka tentang fundamental value V setelah lihat order. Prior + likelihood buy/sell given V → posterior V → quote baru."
    },
    seeAlso: ['glosten-milgrom-update', 'sequential-trade-model'],
    sources: ['glosten-milgrom-1985'],
    category: 'information-theory'
  },
  {
    slug: 'bagehot-insight',
    term: { en: 'Bagehot insight', id: 'Bagehot insight' },
    aliases: ['Bagehot 1971'],
    definition: {
      en: "Core observation that market makers lose money to informed traders and recoup it from uninformed (liquidity) traders. The spread is the price uninformed traders pay to subsidize MM losses against the informed.",
      id: "Observasi inti: market maker rugi ke informed trader dan dapat balik duitnya dari uninformed (liquidity) trader. Spread itu harga yang dibayar uninformed trader buat subsidi loss MM ke informed."
    },
    seeAlso: ['adverse-selection-cost', 'glosten-milgrom-update'],
    sources: ['ohara-1995'],
    category: 'information-theory'
  },

  // ─── Empirical methods ───
  {
    slug: 'ofi',
    term: { en: 'Order Flow Imbalance (OFI)', id: 'Order Flow Imbalance (OFI)' },
    aliases: ['OFI', 'order book imbalance'],
    definition: {
      en: "Net contribution of bid/ask order book events to depth changes. Tighter R² for short-horizon price changes than trade-based measures. Cornerstone empirical construct in high-frequency microstructure (Cont, Kukanov & Stoikov 2014).",
      id: "Net kontribusi event order book (bid/ask) ke perubahan depth. R² lebih ketat untuk short-horizon price change dibandingin measure berbasis trade. Konstruk empiris andalan di high-frequency microstructure (Cont, Kukanov & Stoikov 2014)."
    },
    formulaLatex: '\\text{OFI}_n = \\sum_{i \\in [t_{n-1}, t_n]} e_i, \\quad e_i = \\Delta q^B_i \\mathbf{1}_{ask-} - \\Delta q^A_i \\mathbf{1}_{bid+}',
    seeAlso: ['kyles-lambda', 'vpin', 'square-root-impact'],
    sources: ['cont-kukanov-stoikov-2014'],
    category: 'empirical-methods'
  },
  {
    slug: 'lee-ready',
    term: { en: 'Lee-Ready algorithm', id: 'Lee-Ready algorithm' },
    aliases: ['LR algorithm', 'trade classification'],
    definition: {
      en: "Algorithm for classifying trades as buyer-initiated or seller-initiated when side is not reported. Compares trade price to prevailing quote midpoint; uses tick rule when at midpoint.",
      id: "Algoritma buat klasifikasi trade jadi buyer-initiated atau seller-initiated kalau side-nya gak di-report. Bandingin trade price ke quote midpoint; pakai tick rule kalau persis di midpoint."
    },
    seeAlso: ['tick-rule', 'efficient-price'],
    sources: ['hasbrouck-2007'],
    category: 'empirical-methods'
  },
  {
    slug: 'tick-rule',
    term: { en: 'Tick rule', id: 'Tick rule' },
    aliases: [],
    definition: {
      en: "Trade classification heuristic: trade is a buy if price > prior trade price, sell if <. Crude but useful as fallback when quotes are stale or trades occur at midpoint.",
      id: "Heuristik klasifikasi trade: trade dianggap buy kalau price > prior trade, sell kalau <. Kasar, tapi berguna sebagai fallback kalau quote-nya stale atau trade kejadian di midpoint."
    },
    seeAlso: ['lee-ready'],
    sources: ['hasbrouck-2007'],
    category: 'empirical-methods'
  },
  {
    slug: 'rolls-spread-estimator',
    term: { en: "Roll's spread estimator", id: "Roll's spread estimator" },
    aliases: ['Roll estimator', 'Roll 1984'],
    definition: {
      en: "Indirect spread estimator: s = 2√(−Cov(Δpₜ, Δpₜ₋₁)). Valid only when autocovariance is negative. Assumes serially independent trade direction; tends to underestimate true spread.",
      id: "Indirect estimator spread: s = 2√(−Cov(Δpₜ, Δpₜ₋₁)). Valid hanya kalau autocovariance-nya negatif. Asumsi trade direction iid; cenderung underestimate true spread di real market."
    },
    formulaLatex: 's = 2\\sqrt{-\\text{Cov}(\\Delta p_t, \\Delta p_{t-1})}',
    seeAlso: ['bid-ask-bounce', 'effective-spread'],
    sources: ['hasbrouck-2007'],
    category: 'empirical-methods'
  },
  {
    slug: 'square-root-impact',
    term: { en: 'Square-root impact law', id: 'Square-root impact law' },
    aliases: ['square-root law', 'square-root market impact'],
    definition: {
      en: "Empirical regularity that price impact of a metaorder scales as the square root of its size divided by daily volume. Robust across asset classes; theoretically reconciled with Kyle's lambda via latent order book models.",
      id: "Regularitas empiris: price impact dari metaorder scale-nya akar dari ukuran order dibagi daily volume. Robust lintas asset class; teoritis nyambung ke Kyle's lambda lewat latent order book model."
    },
    formulaLatex: '\\Delta p \\approx Y \\sigma \\sqrt{Q/V}',
    seeAlso: ['kyles-lambda', 'ofi', 'almgren-chriss'],
    sources: ['bouchaud-bonart-donier-gould-2018'],
    category: 'empirical-methods'
  },

  // ─── Execution / market making ───
  {
    slug: 'implementation-shortfall',
    term: { en: 'Implementation shortfall', id: 'Implementation shortfall' },
    aliases: ['IS', 'execution shortfall'],
    definition: {
      en: "Difference between the decision price (when trade was decided) and the average execution price, including opportunity cost of unexecuted shares. The canonical execution-cost metric, popularized by Almgren-Chriss (2000).",
      id: "Selisih antara decision price (saat keputusan trade dibuat) dan rata-rata execution price, termasuk opportunity cost dari shares yang gak ke-execute. Metric biaya eksekusi paling kanon — dipopulerin Almgren-Chriss (2000)."
    },
    formulaLatex: '\\text{IS} = (X_0 - X_T)(p_0) - \\sum_n p_n \\Delta X_n',
    seeAlso: ['almgren-chriss', 'vwap', 'twap'],
    sources: ['almgren-chriss-2000', 'kissell-2013'],
    category: 'execution'
  },
  {
    slug: 'reservation-price',
    term: { en: 'Reservation price', id: 'Reservation price' },
    aliases: ['indifference price', 'Avellaneda-Stoikov reservation'],
    definition: {
      en: "In Avellaneda-Stoikov, the indifference price at which the MM is neutral between holding inventory vs trading. Skews away from mid-price as inventory grows: r = s − q·γ·σ²·(T−t).",
      id: "Di Avellaneda-Stoikov, indifference price tempat MM netral antara nahan inventory vs trading. Geser dari mid-price seiring inventory tumbuh: r = s − q·γ·σ²·(T−t)."
    },
    formulaLatex: 'r(s,t) = s - q\\gamma\\sigma^2(T-t)',
    seeAlso: ['half-spread', 'inventory-risk', 'risk-aversion', 'hjb'],
    sources: ['stoikov-2008', 'cartea-jaimungal-penalva'],
    category: 'execution'
  },
  {
    slug: 'hjb',
    term: { en: 'Hamilton-Jacobi-Bellman (HJB) equation', id: 'Hamilton-Jacobi-Bellman (HJB) equation' },
    aliases: ['HJB', 'Bellman equation'],
    definition: {
      en: "A partial differential equation characterizing the optimal value function in continuous-time stochastic control. Used in Avellaneda-Stoikov and Cartea-Jaimungal-Penalva to derive optimal MM quoting policies under inventory and execution risk.",
      id: "PDE yang nge-karakteristik value function optimal di continuous-time stochastic control. Dipake Avellaneda-Stoikov dan Cartea-Jaimungal-Penalva buat turunin policy quoting MM yang optimal di bawah inventory dan execution risk."
    },
    seeAlso: ['reservation-price', 'risk-aversion'],
    sources: ['stoikov-2008', 'cartea-jaimungal-penalva', 'gueant-2016'],
    category: 'execution'
  },
  {
    slug: 'risk-aversion',
    term: { en: 'Risk aversion (γ)', id: 'Risk aversion (γ)' },
    aliases: ['gamma', 'CARA parameter'],
    definition: {
      en: "A scalar parameter in MM utility functions controlling sensitivity to inventory variance. Higher γ → tighter inventory bounds, wider spreads, faster mean-reversion to neutral. CARA (constant absolute risk aversion) is standard in Stoikov-class models.",
      id: "Parameter skalar di utility function MM yang nge-kontrol sensitivitas ke inventory variance. γ tinggi → bound inventory ketat, spread lebar, mean-reversion ke neutral lebih cepat. CARA (constant absolute risk aversion) standar di model Stoikov-class."
    },
    formulaLatex: 'U(w) = -\\exp(-\\gamma w)',
    seeAlso: ['reservation-price', 'inventory-cost', 'inventory-risk'],
    sources: ['stoikov-2008', 'ohara-1995'],
    category: 'execution'
  },
  {
    slug: 'inventory-risk',
    term: { en: 'Inventory risk', id: 'Inventory risk' },
    aliases: ['position risk'],
    definition: {
      en: "Price risk on non-zero positions acquired by the MM through order-flow absorption. Quantified as σ²·q²·time-to-unwind under Gaussian innovations. Primary driver of inventory-cost spread component.",
      id: "Price risk pada posisi non-zero yang MM ambil dari nyerap order flow. Dikuantifikasi sebagai σ²·q²·waktu-buat-unwind di bawah Gaussian innovation. Penggerak utama komponen inventory-cost di spread."
    },
    seeAlso: ['inventory-cost', 'risk-aversion', 'reservation-price'],
    sources: ['ohara-1995', 'stoikov-2008'],
    category: 'execution'
  },
  {
    slug: 'market-depth',
    term: { en: 'Market depth', id: 'Market depth' },
    aliases: ['liquidity depth', '1/λ'],
    definition: {
      en: "Inverse of price impact — how much volume the market absorbs per unit of price movement. In Kyle (1985) equals 1/λ. Determined empirically from limit order book or impact regressions.",
      id: "Kebalikan price impact — berapa volume yang market serap per satu unit price movement. Di Kyle (1985) = 1/λ. Dihitung empiris dari limit order book atau regresi impact."
    },
    formulaLatex: 'D = 1/\\lambda',
    seeAlso: ['kyles-lambda', 'ofi', 'square-root-impact'],
    sources: ['kyle-1985', 'bouchaud-bonart-donier-gould-2018'],
    category: 'execution'
  },
  {
    slug: 'vwap',
    term: { en: 'VWAP (Volume-Weighted Average Price)', id: 'VWAP (Volume-Weighted Average Price)' },
    aliases: ['volume-weighted average'],
    definition: {
      en: "Average price weighted by trading volume over a window: VWAP = Σ(pᵢ·vᵢ) / Σvᵢ. Used as execution benchmark and as algorithmic execution target (slice the order to match historical volume curve).",
      id: "Rata-rata harga ditimbang volume trading dalam suatu window: VWAP = Σ(pᵢ·vᵢ) / Σvᵢ. Dipake sebagai execution benchmark dan target algorithmic execution (slice order biar nge-match historical volume curve)."
    },
    formulaLatex: '\\text{VWAP} = \\frac{\\sum_i p_i v_i}{\\sum_i v_i}',
    seeAlso: ['twap', 'pov', 'implementation-shortfall'],
    sources: ['kissell-2013'],
    category: 'execution'
  },
  {
    slug: 'twap',
    term: { en: 'TWAP (Time-Weighted Average Price)', id: 'TWAP (Time-Weighted Average Price)' },
    aliases: ['time-weighted average'],
    definition: {
      en: "Average price weighted by time (uniform across the execution window). Simpler than VWAP; appropriate when volume profile is unstable or for very short orders.",
      id: "Rata-rata harga ditimbang waktu (uniform sepanjang execution window). Lebih sederhana daripada VWAP; cocok kalau volume profile-nya gak stabil atau buat order yang sangat pendek."
    },
    seeAlso: ['vwap', 'pov', 'implementation-shortfall'],
    sources: ['kissell-2013'],
    category: 'execution'
  },
  {
    slug: 'pov',
    term: { en: 'POV (Percentage of Volume)', id: 'POV (Percentage of Volume)' },
    aliases: ['participation rate algorithm'],
    definition: {
      en: "Execution algorithm that targets a fixed fraction of contemporaneous market volume. Self-adjusts to liquidity: trades more in high-volume periods, less in low. Trades off urgency against impact.",
      id: "Algoritma eksekusi yang target ke fraksi tetap dari market volume real-time. Auto-adjust ke liquidity: trade lebih banyak di high-volume, lebih dikit di low. Trade-off antara urgency dan impact."
    },
    seeAlso: ['vwap', 'twap', 'implementation-shortfall', 'almgren-chriss'],
    sources: ['kissell-2013'],
    category: 'execution'
  },
  {
    slug: 'almgren-chriss',
    term: { en: 'Almgren-Chriss frontier', id: 'Almgren-Chriss frontier' },
    aliases: ['AC frontier', 'efficient trading frontier'],
    definition: {
      en: "Mean-variance frontier of execution strategies trading off expected cost (from market impact) against execution variance. Each point on the frontier is optimal for one risk aversion level. Risk-neutral trader follows the linear minimum-cost path.",
      id: "Mean-variance frontier dari strategi eksekusi yang trade-off antara expected cost (market impact) sama variance eksekusi. Tiap titik di frontier optimal buat satu level risk aversion. Trader risk-neutral ikutin path linear minimum-cost."
    },
    formulaLatex: '\\min_{x(\\cdot)} \\mathbb{E}[C] + \\lambda_R \\text{Var}[C]',
    seeAlso: ['implementation-shortfall', 'square-root-impact', 'risk-aversion'],
    sources: ['almgren-chriss-2000'],
    category: 'execution'
  },

  // ─── Price discovery (Hasbrouck 1995) ───
  {
    slug: 'price-discovery',
    term: { en: 'Price discovery', id: 'Price discovery' },
    aliases: ['where the price is set', 'who leads'],
    definition: {
      en: "The process by which new information is impounded into prices. When one security trades on many venues, price discovery asks WHICH venue's quotes move first — and it is distinct from trading volume (a venue can be high-volume but a price follower).",
      id: "Proses informasi baru diserap ke harga. Pas satu sekuritas trade di banyak venue, price discovery nanya venue MANA yang quote-nya gerak duluan — dan dia beda dari trading volume (venue bisa high-volume tapi cuma follower harga)."
    },
    seeAlso: ['information-share', 'efficient-price', 'cointegration'],
    sources: ['hasbrouck-1995'],
    category: 'empirical-methods'
  },
  {
    slug: 'information-share',
    term: { en: 'Information share', id: 'Information share' },
    aliases: ['Hasbrouck information share', 'IS'],
    definition: {
      en: "A venue's fraction of the variance of the common efficient-price innovation (Hasbrouck 1995). Computed from a VECM via the common-factor weights ψ and innovation covariance Ω. When innovations are contemporaneously correlated it is not point-identified, so report Cholesky-ordering upper/lower bounds.",
      id: "Fraksi sebuah venue dari varians inovasi efficient-price bersama (Hasbrouck 1995). Dihitung dari VECM lewat common-factor weights ψ dan innovation covariance Ω. Pas inovasi contemporaneously correlated dia gak point-identified, jadi laporin bound atas/bawah urutan Cholesky."
    },
    formulaLatex: '\\mathrm{IS}_j = \\frac{\\psi_j^2\\,\\Omega_{jj}}{\\psi\\,\\Omega\\,\\psi^{\\prime}}',
    seeAlso: ['price-discovery', 'common-factor', 'vecm', 'efficient-price'],
    sources: ['hasbrouck-1995'],
    category: 'empirical-methods'
  },
  {
    slug: 'cointegration',
    term: { en: 'Cointegration', id: 'Cointegration' },
    aliases: ['error correction', 'common trend'],
    definition: {
      en: "Several nonstationary I(1) price series whose pairwise differences are stationary I(0): they share one common stochastic trend (the efficient price) and never permanently separate. The statistical basis (Engle-Granger 1987) for measuring price discovery across venues.",
      id: "Beberapa price series nonstationary I(1) yang selisih berpasangannya stationary I(0): mereka bagi satu common stochastic trend (efficient price) dan gak pernah permanen berpisah. Basis statistik (Engle-Granger 1987) buat ngukur price discovery lintas venue."
    },
    seeAlso: ['vecm', 'common-factor', 'price-discovery'],
    sources: ['hasbrouck-1995'],
    category: 'empirical-methods'
  },
  {
    slug: 'vecm',
    term: { en: 'Vector error correction model (VECM)', id: 'Vector error correction model (VECM)' },
    aliases: ['error correction model', 'VECM'],
    definition: {
      en: "The dynamic model for a cointegrated price system: Δp = α(β′p) + ΣΓΔp + ε. The adjustment-speed matrix α says which venue moves to close price gaps (α≈0 ⇒ leader; large α ⇒ follower); its moving-average form yields the common-factor weights used in the information share.",
      id: "Model dinamis buat sistem harga cointegrated: Δp = α(β′p) + ΣΓΔp + ε. Matriks adjustment-speed α bilang venue mana yang gerak buat nutup gap harga (α≈0 ⇒ leader; α besar ⇒ follower); bentuk moving-average-nya ngehasilin common-factor weights yang dipakai di information share."
    },
    formulaLatex: '\\Delta p_t = \\alpha\\,\\beta^{\\prime} p_{t-1} + \\textstyle\\sum_k \\Gamma_k \\Delta p_{t-k} + \\varepsilon_t',
    seeAlso: ['cointegration', 'information-share', 'common-factor'],
    sources: ['hasbrouck-1995'],
    category: 'empirical-methods'
  },
  {
    slug: 'common-factor',
    term: { en: 'Common factor / random-walk decomposition', id: 'Common factor / random-walk decomposition' },
    aliases: ['common trend', 'permanent component', 'Stock-Watson decomposition'],
    definition: {
      en: "Writing observed prices as one permanent random-walk component (the efficient price) plus stationary transitory noise. The common-factor weight row ψ extracts the permanent part of each instant's shocks; the Gonzalo-Granger component share is the α-only alternative to weighting by ψ and Ω.",
      id: "Nulis harga teramati sebagai satu komponen permanen random-walk (efficient price) plus transitory noise stationary. Baris common-factor weight ψ ngekstrak bagian permanen dari shock tiap instan; component share Gonzalo-Granger itu alternatif α-saja buat nimbang dengan ψ dan Ω."
    },
    seeAlso: ['information-share', 'efficient-price', 'vecm'],
    sources: ['hasbrouck-1995'],
    category: 'empirical-methods'
  },

  // ─── Market design & HFT (Budish-Cramton-Shim, Aquilina, Menkveld) ───
  {
    slug: 'continuous-limit-order-book',
    term: { en: 'Continuous limit order book (CLOB)', id: 'Continuous limit order book (CLOB)' },
    aliases: ['CLOB', 'continuous double auction'],
    definition: {
      en: "The near-universal exchange design: orders rest in a book and incoming messages are processed SERIALLY, one at a time, in continuous time, with price-time priority. Budish-Cramton-Shim argue this serial-processing-in-continuous-time is the flaw that manufactures the HFT speed race.",
      id: "Desain exchange yang hampir universal: order beristirahat di book dan message masuk diproses SERIAL, satu per satu, di continuous time, dengan price-time priority. Budish-Cramton-Shim ngeklaim proses-serial-di-continuous-time ini cacat yang ngebikin HFT speed race."
    },
    seeAlso: ['frequent-batch-auction', 'latency-arbitrage', 'stale-quote-sniping', 'market-depth'],
    sources: ['budish-cramton-shim-2015', 'ohara-1995'],
    category: 'market-design'
  },
  {
    slug: 'frequent-batch-auction',
    term: { en: 'Frequent batch auction (FBA)', id: 'Frequent batch auction (FBA)' },
    aliases: ['batch auction', 'uniform-price call auction'],
    definition: {
      en: "Budish-Cramton-Shim's market-design fix: slice time into short discrete intervals, batch all orders arriving within one as simultaneous (no time priority inside a batch), and clear them at a single uniform price. A nanosecond head start wins nothing within a batch, so the speed race collapses and competition shifts to price.",
      id: "Fix market-design Budish-Cramton-Shim: iris waktu jadi interval diskrit pendek, batch semua order yang datang dalam satu sebagai simultan (gak ada time priority dalam batch), dan clear di satu harga uniform. Head start nanodetik gak menang apa-apa dalam batch, jadi speed race kolaps dan kompetisi geser ke harga."
    },
    seeAlso: ['continuous-limit-order-book', 'latency-arbitrage', 'speed-bump'],
    sources: ['budish-cramton-shim-2015'],
    category: 'market-design'
  },
  {
    slug: 'latency-arbitrage',
    term: { en: 'Latency arbitrage', id: 'Latency arbitrage' },
    aliases: ['speed race', 'HFT arms race'],
    definition: {
      en: "Profiting from acting on PUBLIC information a few nanoseconds faster than others — a mechanical, adverse-selection rent with no private information (contrast Kyle). Aquilina-Budish-O'Neill measure its 'tax' at ~0.5 bps of trading (~a third of the effective spread, ~USD 5bn/yr globally).",
      id: "Profit dari bertindak di informasi PUBLIK beberapa nanodetik lebih cepet dari yang lain — rent adverse-selection mekanis tanpa informasi privat (kontras Kyle). Aquilina-Budish-O'Neill ngukur 'pajak'-nya di ~0.5 bps trading (~sepertiga effective spread, ~USD 5miliar/tahun global)."
    },
    seeAlso: ['stale-quote-sniping', 'continuous-limit-order-book', 'frequent-batch-auction', 'adverse-selection-cost'],
    sources: ['budish-cramton-shim-2015', 'aquilina-budish-oneill-2022'],
    category: 'market-design'
  },
  {
    slug: 'stale-quote-sniping',
    term: { en: 'Stale-quote sniping', id: 'Stale-quote sniping' },
    aliases: ['sniping', 'picking off'],
    definition: {
      en: "When a public signal moves fair value, a maker's resting quote is briefly stale; fast 'snipers' race to pick it off (buy/sell at the old price) before the maker can cancel. Serial processing makes it winner-take-all over nanoseconds. The maker is sniped MECHANICALLY (for being slow), not for being less informed.",
      id: "Pas sinyal publik gerakin fair value, resting quote maker sebentar stale; 'sniper' cepet balapan buat metiknya (beli/jual di harga lama) sebelum maker bisa cancel. Proses serial bikin dia winner-take-all over nanodetik. Maker disnipe MEKANIS (karena lambat), bukan karena kurang berinformasi."
    },
    seeAlso: ['latency-arbitrage', 'positioning-loss', 'new-market-maker'],
    sources: ['budish-cramton-shim-2015', 'aquilina-budish-oneill-2022'],
    category: 'market-design'
  },
  {
    slug: 'speed-bump',
    term: { en: 'Speed bump', id: 'Speed bump' },
    aliases: ['intentional delay', 'IEX 350μs delay'],
    definition: {
      en: "A small deliberate delay an exchange imposes on (some) orders to blunt the latency-arbitrage race — e.g. IEX's 350-microsecond delay, randomized delays, or asymmetric delays that slow snipers but not the maker's cancels. A relative of the frequent batch auction.",
      id: "Delay kecil disengaja yang exchange kenain ke (sebagian) order buat numpulin race latency-arbitrage — misal delay 350-mikrodetik IEX, randomized delay, atau asymmetric delay yang ngelambatin sniper tapi gak cancel-nya maker. Kerabat frequent batch auction."
    },
    seeAlso: ['frequent-batch-auction', 'latency-arbitrage'],
    sources: ['budish-cramton-shim-2015', 'aquilina-budish-oneill-2022'],
    category: 'market-design'
  },
  {
    slug: 'mev',
    term: { en: 'Maximal extractable value (MEV)', id: 'Maximal extractable value (MEV)' },
    aliases: ['miner extractable value', 'MEV'],
    definition: {
      en: "The on-chain analogue of latency-arbitrage sniping: a block proposer/builder can reorder, insert, or 'sandwich' transactions within a block to extract value (e.g. front-run a swap). The same stale-quote economics, played in the mempool and block — and the motivation for batch-auction / fair-ordering designs in DeFi.",
      id: "Analog on-chain dari sniping latency-arbitrage: block proposer/builder bisa ngurutin ulang, nyisipin, atau nge-'sandwich' transaksi dalam block buat ngekstrak value (misal front-run swap). Ekonomi stale-quote yang sama, dimainin di mempool dan block — dan motivasi buat desain batch-auction / fair-ordering di DeFi."
    },
    seeAlso: ['latency-arbitrage', 'frequent-batch-auction', 'stale-quote-sniping'],
    sources: ['budish-cramton-shim-2015', 'aquilina-budish-oneill-2022'],
    category: 'market-design'
  },
  {
    slug: 'maker-taker',
    term: { en: 'Maker-taker pricing', id: 'Maker-taker pricing' },
    aliases: ['maker rebate', 'taker fee', 'fee schedule'],
    definition: {
      en: "An exchange fee model that pays a rebate to liquidity 'makers' (resting limit orders) and charges 'takers' (marketable orders) a fee. Low fees / maker rebates make passive market making profitable enough to seed a venue's book — central to how new venues (Menkveld's Chi-X) attract HFT liquidity.",
      id: "Model fee exchange yang bayar rebate ke 'maker' liquidity (resting limit order) dan nagih 'taker' (marketable order) fee. Fee rendah / maker rebate bikin passive market making cukup profitable buat ngebenih book venue — sentral buat gimana venue baru (Chi-X-nya Menkveld) narik liquidity HFT."
    },
    seeAlso: ['new-market-maker', 'continuous-limit-order-book', 'cross-market'],
    sources: ['menkveld-2013'],
    category: 'market-design'
  },
  {
    slug: 'new-market-maker',
    term: { en: 'New market maker (HFT)', id: 'New market maker (HFT)' },
    aliases: ['HFT market maker', 'electronic market maker'],
    definition: {
      en: "A high-frequency trader that functions as a modern market maker — two-sided passive quoting, earning the spread, mean-reverting inventory (flat by close) — but with NO affirmative obligation to do so (unlike old designated specialists). Menkveld 2013: one such HFT netted ~€0.88/trade (€1.55 spread − €0.68 positioning).",
      id: "High-frequency trader yang berfungsi sebagai market maker modern — passive quoting dua-sisi, dapet spread, inventory mean-reverting (flat di close) — tapi TANPA kewajiban afirmatif (beda dari designated specialist lama). Menkveld 2013: satu HFT kayak gitu dapet bersih ~€0.88/trade (€1.55 spread − €0.68 positioning)."
    },
    seeAlso: ['positioning-loss', 'cross-market', 'reservation-price', 'inventory-risk', 'maker-taker'],
    sources: ['menkveld-2013', 'stoikov-2008'],
    category: 'market-design'
  },
  {
    slug: 'positioning-loss',
    term: { en: 'Positioning loss', id: 'Positioning loss' },
    aliases: ['adverse-selection loss', 'inventory loss'],
    definition: {
      en: "The component of a market maker's P&L lost when a passive fill leaves it holding inventory the price then moves against (informed counterparty, or paying to flatten). In Menkveld 2013, ≈ −€0.68/trade against +€1.55 of spread P&L — the empirical face of adverse selection / inventory cost.",
      id: "Komponen P&L market maker yang hilang pas passive fill ninggalin dia megang inventory yang harga terus gerak lawan (counterparty berinformasi, atau bayar buat flatten). Di Menkveld 2013, ≈ −€0.68/trade lawan +€1.55 spread P&L — wajah empiris adverse selection / inventory cost."
    },
    seeAlso: ['adverse-selection-cost', 'inventory-cost', 'new-market-maker', 'stale-quote-sniping'],
    sources: ['menkveld-2013'],
    category: 'market-design'
  },
  {
    slug: 'cross-market',
    term: { en: 'Cross-market (cross-venue) strategy', id: 'Strategi cross-market (cross-venue)' },
    aliases: ['cross-venue', 'fragmentation'],
    definition: {
      en: "Trading the same security across multiple venues to exploit their different strengths. Menkveld's HFT earns the spread on the LOW-FEE entrant (Chi-X, ~64% participation) and offloads inventory on the DEEP incumbent (Euronext, ~8%) — quote where cheap, flatten where deep. HFTs are the connective tissue of fragmented markets.",
      id: "Nge-trade sekuritas yang sama lintas banyak venue buat ngeksploitasi kekuatan beda mereka. HFT Menkveld dapet spread di entrant FEE-RENDAH (Chi-X, ~64% partisipasi) dan ngeluarin inventory di incumbent DALEM (Euronext, ~8%) — quote di mana murah, flatten di mana dalem. HFT itu jaringan penghubung pasar terfragmentasi."
    },
    seeAlso: ['new-market-maker', 'maker-taker', 'price-discovery'],
    sources: ['menkveld-2013', 'makarov-schoar-2020'],
    category: 'market-design'
  },

  // ─── Liquidity & funding (Brunnermeier-Pedersen, Amihud) ───
  {
    slug: 'market-liquidity',
    term: { en: 'Market liquidity', id: 'Market liquidity' },
    aliases: ['asset liquidity', 'trading liquidity'],
    definition: {
      en: "A property of an ASSET: how cheaply and quickly you can trade it without moving the price — tight spread, depth, resilience. Kyle's depth 1/λ is one measure. Brunnermeier-Pedersen make it endogenous to the liquidity provider's funding.",
      id: "Properti sebuah ASET: seberapa murah dan cepet kamu bisa trade dia tanpa gerakin harga — spread ketat, depth, resilience. Depth Kyle 1/λ itu satu ukuran. Brunnermeier-Pedersen bikin dia endogen ke funding penyedia liquidity."
    },
    seeAlso: ['funding-liquidity', 'market-depth', 'kyles-lambda', 'amihud-illiquidity'],
    sources: ['brunnermeier-pedersen-2009'],
    category: 'liquidity-funding'
  },
  {
    slug: 'funding-liquidity',
    term: { en: 'Funding liquidity', id: 'Funding liquidity' },
    aliases: ['financing liquidity'],
    definition: {
      en: "A property of a TRADER: how easily speculators who provide market liquidity can FINANCE their positions — a function of their capital and the margins/haircuts lenders demand (position ≤ capital/margin). Easy funding ⇒ liquid markets. The two liquidities reinforce each other.",
      id: "Properti sebuah TRADER: seberapa gampang spekulator yang nyediain market liquidity bisa NGEDANAIN posisi mereka — fungsi kapital mereka dan margin/haircut yang lender minta (posisi ≤ kapital/margin). Funding gampang ⇒ pasar liquid. Dua liquidity saling nguatin."
    },
    formulaLatex: '|x_t| \\le \\frac{W_t}{m_t}',
    seeAlso: ['market-liquidity', 'liquidity-spiral', 'margin-haircut', 'limits-of-arbitrage'],
    sources: ['brunnermeier-pedersen-2009'],
    category: 'liquidity-funding'
  },
  {
    slug: 'liquidity-spiral',
    term: { en: 'Liquidity spiral', id: 'Liquidity spiral' },
    aliases: ['liquidity feedback loop'],
    definition: {
      en: "The self-reinforcing collapse of market and funding liquidity (Brunnermeier-Pedersen): a shock that makes one tighter makes the other tighter, and so on. Comprises the loss spiral and the margin spiral. Non-linear — liquidity is fragile and can dry up suddenly once a funding constraint binds.",
      id: "Kolaps yang nguatin-diri dari market dan funding liquidity (Brunnermeier-Pedersen): shock yang bikin satu lebih ketat bikin yang lain lebih ketat, dan seterusnya. Terdiri dari loss spiral dan margin spiral. Non-linear — liquidity itu rapuh dan bisa ngering tiba-tiba begitu funding constraint mengikat."
    },
    seeAlso: ['loss-spiral', 'margin-spiral', 'funding-liquidity', 'flight-to-quality'],
    sources: ['brunnermeier-pedersen-2009'],
    category: 'liquidity-funding'
  },
  {
    slug: 'loss-spiral',
    term: { en: 'Loss spiral', id: 'Loss spiral' },
    aliases: ['leverage spiral'],
    definition: {
      en: "Amplification via leverage: a price drop destroys a levered speculator's equity, and with position capped at capital/margin, smaller equity forces selling into the falling market, destroying more equity. Losses → forced deleveraging → more losses. Scales with leverage.",
      id: "Amplifikasi lewat leverage: penurunan harga ngancurin equity spekulator ber-leverage, dan dengan posisi di-cap di kapital/margin, equity lebih kecil maksa jualan ke pasar yang jatuh, ngancurin lebih banyak equity. Rugi → deleveraging paksa → lebih banyak rugi. Nyekala sama leverage."
    },
    seeAlso: ['margin-spiral', 'liquidity-spiral', 'funding-liquidity'],
    sources: ['brunnermeier-pedersen-2009'],
    category: 'liquidity-funding'
  },
  {
    slug: 'margin-spiral',
    term: { en: 'Margin spiral', id: 'Margin spiral' },
    aliases: ['destabilizing margins', 'haircut spiral'],
    definition: {
      en: "A price drop raises volatility, so lenders raise margins/haircuts; a higher margin shrinks the allowed position (capital/margin) even with no new loss, forcing deleveraging, which raises volatility and margins again. 'Destabilizing margins' — funding tightens exactly when the trader needs it. Scales with margin sensitivity to volatility.",
      id: "Penurunan harga naikin volatility, jadi lender naikin margin/haircut; margin lebih tinggi nyusutin posisi yang diizinin (kapital/margin) bahkan tanpa rugi baru, maksa deleveraging, yang naikin volatility dan margin lagi. 'Destabilizing margins' — funding mengetat persis pas trader butuh. Nyekala sama sensitivitas margin ke volatility."
    },
    seeAlso: ['loss-spiral', 'margin-haircut', 'liquidity-spiral'],
    sources: ['brunnermeier-pedersen-2009'],
    category: 'liquidity-funding'
  },
  {
    slug: 'margin-haircut',
    term: { en: 'Margin / haircut', id: 'Margin / haircut' },
    aliases: ['initial margin', 'haircut', 'collateral discount'],
    definition: {
      en: "The capital a trader must post per dollar of collateralized position (10% margin ⇒ $1 supports $10). Lenders raise it with the collateral's volatility and illiquidity (e.g. value-at-risk rules). Pro-cyclical margins are the engine of the margin spiral.",
      id: "Kapital yang trader harus naruh per dolar posisi ber-collateral (margin 10% ⇒ $1 nyokong $10). Lender naikin dia sama volatility dan illiquidity collateral (misal aturan value-at-risk). Margin pro-cyclical itu mesin margin spiral."
    },
    seeAlso: ['margin-spiral', 'funding-liquidity', 'loss-spiral'],
    sources: ['brunnermeier-pedersen-2009'],
    category: 'liquidity-funding'
  },
  {
    slug: 'flight-to-quality',
    term: { en: 'Flight to quality / liquidity', id: 'Flight to quality / liquidity' },
    aliases: ['flight to safety', 'flight to liquidity'],
    definition: {
      en: "When funding tightens, constrained intermediaries dump HIGH-MARGIN, ILLIQUID assets first (they tie up the most capital) and retreat to low-margin safe ones — so risky/illiquid assets crater while safe assets hold, and capital flees to quality. Also the contemporaneous price drop from an unexpected illiquidity shock (Amihud).",
      id: "Pas funding mengetat, intermediary terkendala buang aset MARGIN-TINGGI, ILLIQUID duluan (mereka ngiket kapital paling banyak) dan mundur ke yang margin-rendah aman — jadi aset berisiko/illiquid jeblok sementara yang aman bertahan, dan kapital kabur ke kualitas. Juga penurunan harga contemporaneous dari shock illiquidity gak terduga (Amihud)."
    },
    seeAlso: ['liquidity-spiral', 'funding-liquidity', 'illiquidity-premium'],
    sources: ['brunnermeier-pedersen-2009', 'amihud-2002'],
    category: 'liquidity-funding'
  },
  {
    slug: 'limits-of-arbitrage',
    term: { en: 'Limits of arbitrage', id: 'Limits of arbitrage' },
    aliases: ['constrained arbitrage', 'Shleifer-Vishny'],
    definition: {
      en: "The idea (Shleifer-Vishny 1997; Gromb-Vayanos) that arbitrageurs with outside capital can be forced to liquidate exactly when mispricings are largest, so prices need not converge. The intellectual parent of funding-liquidity spirals and a reason cross-venue gaps (Makarov-Schoar) can persist.",
      id: "Ide (Shleifer-Vishny 1997; Gromb-Vayanos) bahwa arbitrageur dengan kapital luar bisa dipaksa likuidasi persis pas mispricing paling gede, jadi harga gak harus konvergen. Induk intelektual funding-liquidity spiral dan alasan gap cross-venue (Makarov-Schoar) bisa bertahan."
    },
    seeAlso: ['funding-liquidity', 'liquidity-spiral', 'cross-market'],
    sources: ['brunnermeier-pedersen-2009', 'makarov-schoar-2020'],
    category: 'liquidity-funding'
  },
  {
    slug: 'amihud-illiquidity',
    term: { en: 'Amihud illiquidity (ILLIQ)', id: 'Amihud illiquidity (ILLIQ)' },
    aliases: ['ILLIQ', 'price impact proxy'],
    definition: {
      en: "Amihud's (2002) liquidity gauge: the average daily ratio of absolute return to dollar volume — 'price move per dollar traded,' a cheap daily-data proxy for Kyle's λ. Needs only daily price + volume (vs intraday for λ), so it is one of the most-used liquidity measures.",
      id: "Alat ukur liquidity Amihud (2002): rata-rata rasio harian return absolut ke dollar volume — 'gerakan harga per dolar di-trade,' proxy data-harian murah buat λ Kyle. Cuma butuh harga + volume harian (vs intraday buat λ), jadi salah satu ukuran liquidity paling-dipakai."
    },
    formulaLatex: '\\mathrm{ILLIQ}_i = \\frac{1}{D_i}\\sum_t \\frac{|R_{i,t}|}{\\mathrm{DVOL}_{i,t}}',
    seeAlso: ['illiquidity-premium', 'kyles-lambda', 'liquidity-risk', 'market-liquidity'],
    sources: ['amihud-2002'],
    category: 'liquidity-funding'
  },
  {
    slug: 'illiquidity-premium',
    term: { en: 'Illiquidity premium', id: 'Illiquidity premium' },
    aliases: ['liquidity premium'],
    definition: {
      en: "The higher expected return investors demand to hold costly-to-trade assets (Amihud 2002; Amihud-Mendelson 1986). More illiquid stocks (higher ILLIQ) earn higher average returns; the premium is amortized over the holding horizon, so long-horizon investors hold the illiquid assets (clientele effect).",
      id: "Expected return lebih tinggi yang investor minta buat megang aset mahal-di-trade (Amihud 2002; Amihud-Mendelson 1986). Saham lebih illiquid (ILLIQ lebih tinggi) dapet average return lebih tinggi; premium-nya diamortisasi over holding horizon, jadi investor horizon-panjang megang aset illiquid (clientele effect)."
    },
    seeAlso: ['amihud-illiquidity', 'liquidity-risk', 'flight-to-quality'],
    sources: ['amihud-2002'],
    category: 'liquidity-funding'
  },
  {
    slug: 'liquidity-risk',
    term: { en: 'Liquidity risk (priced)', id: 'Liquidity risk (priced)' },
    aliases: ['liquidity-adjusted CAPM', 'Pástor-Stambaugh factor'],
    definition: {
      en: "Liquidity as a priced state variable: because liquidity dries up in bad states (high marginal utility), assets that lose the most liquidity then are riskier and command a premium (Acharya-Pedersen liquidity-adjusted CAPM; Pástor-Stambaugh factor). In Amihud's time series, expected illiquidity raises expected returns while illiquidity shocks lower current prices.",
      id: "Liquidity sebagai priced state variable: karena liquidity ngering di keadaan buruk (marginal utility tinggi), aset yang kehilangan paling banyak liquidity saat itu lebih berisiko dan nguasain premium (liquidity-adjusted CAPM Acharya-Pedersen; faktor Pástor-Stambaugh). Di time series Amihud, expected illiquidity naikin expected return sementara shock illiquidity nurunin harga sekarang."
    },
    seeAlso: ['illiquidity-premium', 'amihud-illiquidity', 'funding-liquidity'],
    sources: ['amihud-2002', 'brunnermeier-pedersen-2009'],
    category: 'liquidity-funding'
  },
];

export const GLOSSARY_CATEGORIES = [
  { id: 'spread-anatomy',      label: 'Spread anatomy' },
  { id: 'information-theory',  label: 'Information & theory' },
  { id: 'empirical-methods',   label: 'Empirical methods' },
  { id: 'execution',           label: 'Execution & market making' },
  { id: 'market-design',       label: 'Market design & HFT' },
  { id: 'liquidity-funding',   label: 'Liquidity & funding' },
];
