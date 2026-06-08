// Trading domain glossary — bilingual key terms from the practitioner edges +
// quant method. Attributed lessons, not financial advice.

export const GLOSSARY_CATEGORIES = [
  { id: 'positioning-flows', label: 'Positioning & dealer flows' },
  { id: 'profile',           label: 'Market / volume profile' },
  { id: 'quant-method',      label: 'Quant method' },
  { id: "options-volatility", label: "Options & volatility" },
  { id: "risk-edge-stats", label: "Risk, sizing & edge statistics" },
  { id: "order-flow-micro", label: "Order flow & microstructure" },
  { id: "stat-arb", label: "Statistical arbitrage & market-making" },
];

export const GLOSSARY = [
  // ─────────────── Positioning & dealer flows ───────────────
  {
    slug: 'forced-flow',
    term: { en: 'Forced flow', id: 'Forced flow' },
    aliases: ['forced transactions'],
    definition: {
      en: "Buying or selling that a participant MUST do regardless of preference — stop-outs, liquidations, dealer hedging, hedge unwinds. Combining positioning with a hypothetical price path reveals it; it is the predictable, tradeable core of the @Husslin_ framework.",
      id: "Beli atau jual yang partisipan HARUS lakuin terlepas dari preferensi — stop-out, likuidasi, dealer hedging, hedge unwind. Ngegabung positioning sama jalur harga hipotetis ngungkapnya; itu inti yang bisa-diprediksi, bisa-ditradekan dari framework @Husslin_.",
    },
    category: 'positioning-flows',
  },
  {
    slug: 'open-interest',
    term: { en: 'Open interest (OI)', id: 'Open interest (OI)' },
    definition: {
      en: "The number of leveraged contracts currently open. Read as structure: OI clusters mark range boundaries (support/resistance) and as an oscillator that builds to an extreme then flushes. Read the deviation from normal, not the level.",
      id: "Jumlah kontrak leverage yang saat ini terbuka. Dibaca sebagai struktur: cluster OI nandain batas range (support/resistance) dan sebagai oscillator yang nambah ke ekstrem terus flush. Baca deviasi dari normal, bukan level-nya.",
    },
    category: 'positioning-flows',
  },
  {
    slug: 'perp-premium',
    term: { en: 'Perpetual premium / funding', id: 'Perp premium / funding' },
    definition: {
      en: "The gap between a perpetual swap's price and spot, tied to the funding rate that anchors them. A persistent NEGATIVE premium implies market makers are net long ⇒ upside-squeeze risk. [Established] Ackerer et al. (2024); Schmeling et al. (2023, BIS).",
      id: "Selisih antara harga perpetual swap dan spot, terikat ke funding rate yang ngejangkar mereka. Premium NEGATIF persisten ngimplikasiin market maker net long ⇒ risiko upside-squeeze. [Established] Ackerer dkk. (2024); Schmeling dkk. (2023, BIS).",
    },
    category: 'positioning-flows',
  },
  {
    slug: 'dealer-gamma',
    term: { en: 'Dealer gamma (short / long)', id: 'Gamma dealer (short / long)' },
    definition: {
      en: "The sign of options dealers' net gamma sets their hedging direction. SHORT gamma ⇒ hedge with price (buy higher, sell lower) ⇒ amplify/trend. LONG gamma ⇒ hedge against price (sell higher, buy lower) ⇒ pin/mean-revert. [Established] Baltussen et al. (2021).",
      id: "Tanda net gamma dealer opsi nyetel arah hedging-nya. SHORT gamma ⇒ hedge searah harga (beli lebih tinggi, jual lebih rendah) ⇒ amplifikasi/trend. LONG gamma ⇒ hedge berlawanan (jual lebih tinggi, beli lebih rendah) ⇒ pin/mean-revert. [Established] Baltussen dkk. (2021).",
    },
    category: 'positioning-flows',
  },
  {
    slug: 'gamma-flip',
    term: { en: 'Gamma flip', id: 'Gamma flip' },
    definition: {
      en: "The price level at which the aggregate dealer book crosses from net-short to net-long gamma (or vice versa). It behaves like a threshold/magnet because the market's character (trend vs pin) changes as price passes through it.",
      id: "Level harga di mana buku dealer agregat nyebrang dari net-short ke net-long gamma (atau sebaliknya). Berperilaku kayak ambang/magnet karena karakter pasar (trend vs pin) berubah pas harga lewat.",
    },
    category: 'positioning-flows',
  },
  {
    slug: 'vanna-charm',
    term: { en: 'Vanna & charm (the overnight bid)', id: 'Vanna & charm (overnight bid)' },
    definition: {
      en: "Second-order option Greeks driving dealer hedging. In the typical short-put regime, falling implied vol (vanna) and the passage of time (charm) both force dealers to BUY the index — a structural overnight/into-OPEX bid. [Established] Ni et al. (2005).",
      id: "Greeks opsi orde-kedua yang ngedorong hedging dealer. Di regime short-put tipikal, implied vol turun (vanna) dan berlalunya waktu (charm) keduanya maksa dealer BELI index — bid struktural overnight/into-OPEX. [Established] Ni dkk. (2005).",
    },
    category: 'positioning-flows',
  },
  {
    slug: 'opex',
    term: { en: 'OPEX (option expiration)', id: 'OPEX (kedaluwarsa opsi)' },
    definition: {
      en: "Monthly/quarterly option expiration. The dealer-hedging bid is strongest into expiry and rolls off afterward, producing post-OPEX 'air pockets'. Pinning to high-OI strikes is documented. [Established] Ni, Pearson & Poteshman (2005).",
      id: "Kedaluwarsa opsi bulanan/kuartalan. Bid dealer-hedging paling kuat menuju expiry dan luruh setelahnya, ngehasilin 'air pocket' pasca-OPEX. Pinning ke strike high-OI terdokumentasi. [Established] Ni, Pearson & Poteshman (2005).",
    },
    category: 'positioning-flows',
  },
  {
    slug: 'reflexivity',
    term: { en: 'Reflexivity', id: 'Reflexivity' },
    definition: {
      en: "The feedback loop in which a price move generates a narrative that recruits more participants, who push the move further. Price makes the story as much as the story makes price. [Established] Soros (1987); Shiller (2019).",
      id: "Loop umpan-balik di mana gerakan harga ngehasilin narasi yang ngerekrut lebih banyak partisipan, yang ndorong gerakan lebih jauh. Harga bikin cerita sebanyak cerita bikin harga. [Established] Soros (1987); Shiller (2019).",
    },
    category: 'positioning-flows',
  },
  {
    slug: 'order-flow-toxicity',
    term: { en: 'Order-flow toxicity (VPIN)', id: 'Order-flow toxicity (VPIN)' },
    definition: {
      en: "The risk that order flow is informed, so a market maker is on the wrong side. 'If you don't see the meat, you are the meat.' Measured by VPIN. [Established] Easley, López de Prado & O'Hara (2012). See the microstructure module.",
      id: "Risiko bahwa order flow itu informed, jadi market maker ada di sisi yang salah. 'Kalau gak liat dagingnya, kamu dagingnya.' Diukur dengan VPIN. [Established] Easley, López de Prado & O'Hara (2012). Liat module microstructure.",
    },
    sources: ['easley-lopez-prado-vpin'],
    category: 'positioning-flows',
  },
  {
    slug: 'liquidity-harvesting',
    term: { en: 'Liquidity harvesting', id: 'Liquidity harvesting' },
    definition: {
      en: "Exploiting thin order books (weekends/holidays/Asia) to push price into thin liquidity, run stop clusters, and print fake levels. The illiquid-regime rule: cut leverage, widen targets, drop technicals. [Established] Osler (2003, 2005).",
      id: "Memanfaatkan buku tipis (akhir pekan/libur/Asia) buat ndorong harga ke likuiditas tipis, ngejalanin cluster stop, dan nge-print level palsu. Aturan regime-tidak-likuid: potong leverage, lebarin target, buang teknikal. [Established] Osler (2003, 2005).",
    },
    category: 'positioning-flows',
  },

  // ─────────────── Market / volume profile ───────────────
  {
    slug: 'volume-profile',
    term: { en: 'Volume / market profile', id: 'Volume / market profile' },
    definition: {
      en: "A histogram of traded volume across PRICE (not time) showing where the market did business — the basis for reading acceptance, rejection, and magnets. [Established] Steidlmayer (1984); Dalton et al. (2007).",
      id: "Histogram volume yang diperdagangkan lintas HARGA (bukan waktu) yang nunjukin di mana pasar berbisnis — basis buat baca acceptance, rejection, dan magnet. [Established] Steidlmayer (1984); Dalton dkk. (2007).",
    },
    category: 'profile',
  },
  {
    slug: 'point-of-control',
    term: { en: 'Point of control (POC)', id: 'Point of control (POC)' },
    definition: {
      en: "The single most-traded price in a volume profile. Acts as a magnet that price tends to return to.",
      id: "Satu harga paling-diperdagangkan di volume profile. Berperan sebagai magnet yang harga cenderung balik ke situ.",
    },
    category: 'profile',
  },
  {
    slug: 'value-area',
    term: { en: 'Value area', id: 'Value area' },
    definition: {
      en: "The price band containing the bulk of traded volume — the market's agreed 'fair' region. Trading inside it is acceptance; leaving it is a commitment/decision.",
      id: "Band harga yang ngandung mayoritas volume diperdagangkan — region 'fair' yang pasar sepakati. Trading di dalamnya itu acceptance; ninggalinnya komitmen/keputusan.",
    },
    category: 'profile',
  },
  {
    slug: 'volume-nodes',
    term: { en: 'High/low-volume nodes (HVN/LVN)', id: 'High/low-volume node (HVN/LVN)' },
    definition: {
      en: "HVN: thick shelves of volume = acceptance zones acting as support/resistance. LVN ('pockets'): thin gaps = rejected prices with little resting volume, so price travels through them FAST — moves accelerate across pockets and stall at the next HVN.",
      id: "HVN: rak volume tebal = zona acceptance sebagai support/resistance. LVN ('pocket'): gap tipis = harga ditolak dengan sedikit volume resting, jadi harga lewat dengan CEPAT — gerakan berakselerasi lintas pocket dan mandek di HVN berikutnya.",
    },
    category: 'profile',
  },
  {
    slug: 'participant-archetypes',
    term: { en: 'Participant archetypes', id: 'Arketipe partisipan' },
    definition: {
      en: "Four trader types with very different size/behaviour: (1) mechanical intraday (gamma-squeeze/VWAP/gap-fill/volume-pocket — biggest, watch most); (2) compounders/never-sell; (3) macro-beta/momentum; (4) low-info YOLO/FOMO (the harvested liquidity). Ask which drives the move, at what size.",
      id: "Empat tipe trader dengan ukuran/perilaku sangat beda: (1) mekanis intraday (gamma-squeeze/VWAP/gap-fill/volume-pocket — terbesar, awasi paling banyak); (2) compounder/never-sell; (3) macro-beta/momentum; (4) low-info YOLO/FOMO (likuiditas yang dipanen). Tanya yang mana ngedorong gerakan, di size berapa.",
    },
    category: 'profile',
  },

  // ─────────────── Quant method ───────────────
  {
    slug: 'non-time-bars',
    term: { en: 'Non-time (information) bars', id: 'Bar non-waktu (informasi)' },
    definition: {
      en: "Bars that close on accumulated volume, range, or activity rather than a fixed clock interval, so each bar carries roughly equal information and returns are closer to i.i.d. [Established] López de Prado (2018) — tick/volume/dollar/imbalance bars.",
      id: "Bar yang nutup pada volume, range, atau aktivitas terakumulasi bukan interval jam tetap, jadi tiap bar bawa informasi kira-kira sama dan return lebih dekat i.i.d. [Established] López de Prado (2018) — bar tick/volume/dollar/imbalance.",
    },
    category: 'quant-method',
  },
  {
    slug: 'viscosity-solutions',
    term: { en: 'Viscosity solutions', id: 'Viscosity solutions' },
    definition: {
      en: "The rigorous (generally non-smooth) solution concept for the Hamilton-Jacobi-Bellman PDEs of stochastic optimal control — the math of choosing the best action over time under uncertainty. Underlies optimal execution, optimal stopping/switching, and pairs trading. [Established] Crandall & Lions (1983); Pham (2009).",
      id: "Konsep solusi rigorous (umumnya non-smooth) buat PDE Hamilton-Jacobi-Bellman dari stochastic optimal control — matematika milih aksi terbaik over time di bawah ketidakpastian. Mendasari eksekusi optimal, optimal stopping/switching, dan pairs trading. [Established] Crandall & Lions (1983); Pham (2009).",
    },
    category: 'quant-method',
  },
  {
    slug: 'optimal-execution',
    term: { en: 'Optimal execution', id: 'Eksekusi optimal' },
    definition: {
      en: "Trading out of a position over time to minimise the trade-off between market impact (trade fast) and risk (trade slow). The canonical model is Almgren-Chriss — also a module in the microstructure domain. [Established] Almgren & Chriss (2001).",
      id: "Nge-trade keluar dari posisi over time buat minimalin trade-off antara market impact (trade cepat) dan risiko (trade lambat). Model kanoniknya Almgren-Chriss — juga module di domain microstructure. [Established] Almgren & Chriss (2001).",
    },
    sources: ['almgren-chriss-2000'],
    category: 'quant-method',
  },
  {
    slug: 'volatility-surface',
    term: { en: 'Volatility surface', id: 'Volatility surface' },
    definition: {
      en: "Implied volatility as a function of strike and maturity — its skew, term structure, and arbitrage-free dynamics. A core object of the quant curriculum. [Established] Gatheral (2006).",
      id: "Implied volatility sebagai fungsi strike dan maturity — skew, term structure, dan dinamika arbitrage-free-nya. Objek inti kurikulum quant. [Established] Gatheral (2006).",
    },
    category: 'quant-method',
  },

  // ─────────────── added: academic + practitioner concepts ───────────────
  {
    slug: 'funding-liquidity-spiral',
    term: { en: 'Funding-liquidity spiral', id: 'Funding-liquidity spiral' },
    definition: {
      en: "The feedback by which margin/funding constraints force deleveraging that moves price, which tightens constraints further — the mechanism behind liquidation cascades and squeezes. [Established] Brunnermeier & Pedersen (2009) (microstructure domain).",
      id: "Umpan-balik di mana kendala margin/funding maksa deleveraging yang nggerakin harga, yang ngetatin kendala lebih lanjut — mekanisme di balik cascade likuidasi dan squeeze. [Established] Brunnermeier & Pedersen (2009) (domain microstructure).",
    },
    sources: ['brunnermeier-pedersen-2009'],
    category: 'positioning-flows',
  },
  {
    slug: 'stop-cascade',
    term: { en: 'Stop cascade', id: 'Stop cascade' },
    definition: {
      en: "Stop-loss orders cluster just beyond round numbers; triggering the first becomes market orders that push price into the next cluster, triggering more — a fast, self-reinforcing run. [Established] Osler (2003, 2005).",
      id: "Order stop-loss ngumpul persis di luar angka bulat; ngetrigger yang pertama jadi market order yang ndorong harga ke cluster berikutnya, ngetrigger lebih — run cepat, self-reinforcing. [Established] Osler (2003, 2005).",
    },
    category: 'positioning-flows',
  },
  {
    slug: 'manufactured-prints',
    term: { en: 'Manufactured prints', id: 'Manufactured prints' },
    definition: {
      en: "In an illiquid window, sized orders fake activity to set a high/low that algos and later traders anchor to and trade against. A reason precise levels in thin books are untrustworthy. [Established] Harris (2003).",
      id: "Di window tidak likuid, order ber-size memalsukan aktivitas buat nyetel high/low yang algo dan trader kemudian jangkar dan trade lawan. Alasan level presisi di buku tipis gak bisa dipercaya. [Established] Harris (2003).",
    },
    category: 'positioning-flows',
  },
  {
    slug: 'pre-fomc-drift',
    term: { en: 'Pre-FOMC drift', id: 'Pre-FOMC drift' },
    definition: {
      en: "Historically large average equity returns in the ~24h before scheduled FOMC meetings. [Established] Lucca & Moench (2015) — but [Regime-dependent] it largely faded after ~2015 (Kurov et al. 2021); trade only as a conditional.",
      id: "Return ekuitas rata-rata besar secara historis di ~24 jam sebelum rapat FOMC terjadwal. [Established] Lucca & Moench (2015) — tapi [Regime-dependent] sebagian besar memudar setelah ~2015 (Kurov dkk. 2021); trade cuma sebagai kondisional.",
    },
    category: 'positioning-flows',
  },
  {
    slug: 'sell-rumour-buy-news',
    term: { en: 'Sell the rumour, buy the news', id: 'Jual rumor, beli berita' },
    definition: {
      en: "Around a scheduled event: weakness in (protective hedges bought, IV bid) and relief out (hedges unwound) — the mechanical signature of the hedging cycle, valid only if the market was actually hedged (the pre-event tell).",
      id: "Di sekitar event terjadwal: lemah masuk (hedge protektif dibeli, IV di-bid) dan relief keluar (hedge di-unwind) — sidik jari mekanis siklus hedging, valid cuma kalau pasar beneran ter-hedge (pre-event tell).",
    },
    category: 'positioning-flows',
  },
  {
    slug: 'reflexivity-narrative',
    term: { en: 'Reflexivity & narrative', id: 'Reflexivity & narasi' },
    definition: {
      en: "A price move generates a story that recruits more participants who push it further. [Established] Soros (1987, The Alchemy of Finance); Shiller (2019, Narrative Economics).",
      id: "Gerakan harga ngehasilin cerita yang ngerekrut lebih banyak partisipan yang ndorong lebih jauh. [Established] Soros (1987, The Alchemy of Finance); Shiller (2019, Narrative Economics).",
    },
    category: 'positioning-flows',
  },
  {
    slug: 'auction-market-theory',
    term: { en: 'Auction Market Theory', id: 'Auction Market Theory' },
    definition: {
      en: "The framework treating a market as a continuous two-sided auction whose volume-at-price distribution reveals value, acceptance and rejection — the basis of Market/Volume Profile. [Established] Steidlmayer (1984); Dalton et al. (2007).",
      id: "Framework yang ngeperlakukan pasar sebagai lelang dua-sisi kontinu yang distribusi volume-di-harga-nya ngungkap value, acceptance dan rejection — basis Market/Volume Profile. [Established] Steidlmayer (1984); Dalton dkk. (2007).",
    },
    category: 'profile',
  },
  {
    slug: 'acceptance-rejection',
    term: { en: 'Acceptance vs rejection', id: 'Acceptance vs rejection' },
    definition: {
      en: "Price spending time and BUILDING volume at a new level = acceptance (the auction is migrating there); a fast wick that builds NO volume = rejection (back toward value/POC). Judged within a fixed timeframe.",
      id: "Harga ngabisin waktu dan NGEBANGUN volume di level baru = acceptance (lelang migrasi ke situ); wick cepat yang ngebangun GAK ada volume = rejection (balik menuju value/POC). Dinilai dalam timeframe tetap.",
    },
    category: 'profile',
  },
  {
    slug: 'nested-ranges',
    term: { en: 'Nested ranges / composite profile', id: 'Nested range / composite profile' },
    definition: {
      en: "Volume profiles nest across timeframes — one range's low is another's mid — so apparent level 'conflicts' are resolved by fixing which auction you are trading (intraday for a scalp, composite for context).",
      id: "Volume profile bersarang lintas timeframe — low satu range itu mid yang lain — jadi 'konflik' level yang keliatan diselesaikan dengan nge-fix lelang mana yang kamu trade (intraday buat scalp, composite buat konteks).",
    },
    category: 'profile',
  },
  {
    slug: 'hjb-equation',
    term: { en: 'Hamilton-Jacobi-Bellman (HJB)', id: 'Hamilton-Jacobi-Bellman (HJB)' },
    definition: {
      en: "The nonlinear PDE characterising the optimal value function in stochastic optimal control; its rigorous (non-smooth) solution is the viscosity solution. Solves optimal execution / stopping / switching. [Established] Crandall & Lions (1983); Pham (2009).",
      id: "PDE nonlinear yang ngarakterisasi value function optimal di stochastic optimal control; solusi rigorous (non-smooth)-nya itu viscosity solution. Nyelesaiin eksekusi / stopping / switching optimal. [Established] Crandall & Lions (1983); Pham (2009).",
    },
    seeAlso: ['viscosity-solutions', 'optimal-execution'],
    category: 'quant-method',
  },
  {
    slug: 'financial-time-series',
    term: { en: 'Financial time series (ARMA/GARCH)', id: 'Financial time series (ARMA/GARCH)' },
    definition: {
      en: "Models for returns and their volatility: ARMA (autocorrelation), GARCH (volatility clustering), cointegration (pairs), regime models — for both signal and risk. [Established] Tsay (2010).",
      id: "Model buat return dan volatilitasnya: ARMA (autokorelasi), GARCH (clustering volatilitas), kointegrasi (pairs), model regime — buat baik sinyal maupun risiko. [Established] Tsay (2010).",
    },
    category: 'quant-method',
  },
  {
    slug: 'square-root-impact',
    term: { en: 'Square-root impact law', id: 'Hukum square-root impact' },
    definition: {
      en: "Empirically, the price impact of executing a metaorder grows roughly with the square root of its size relative to volume — concave, not linear. [Established] Bouchaud et al. (2018) (microstructure domain).",
      id: "Secara empiris, price impact dari ngeksekusi metaorder tumbuh kira-kira sama akar kuadrat ukurannya relatif ke volume — konkaf, bukan linear. [Established] Bouchaud dkk. (2018) (domain microstructure).",
    },
    sources: ['bouchaud-bonart-donier-gould-2018'],
    category: 'quant-method',
  },

  // ─────────────── expanded: comprehensive coverage (T8–T16 + practitioners) ───────────────
  {
    slug: "funding-rate-clamp",
    term: { en: "Funding rate & clamp", id: "Funding rate & clamp" },
    definition: {
      en: "The periodic payment anchoring a perpetual swap to spot: F(P) = P + clamp(I−P, −c, c) with an interest base I (~0.01%/8h) and a premium clamped to ±c (~0.05%). Three regimes follow — flat (F=I), rich (longs pay F=P−c), cheap (shorts pay F=P+c). [Established] exchange methodology; Schmeling, Schrimpf & Todorov (2023).",
      id: "Pembayaran periodik yang ngejangkar perpetual swap ke spot: F(P) = P + clamp(I−P, −c, c) dengan basis bunga I (~0.01%/8j) dan premium yang di-clamp ke ±c (~0.05%). Tiga regime ngikutin — flat (F=I), mahal (long bayar F=P−c), murah (short bayar F=P+c). [Established] metodologi exchange; Schmeling, Schrimpf & Todorov (2023).",
    },
    category: "positioning-flows",
  },
  {
    slug: "annualized-funding",
    term: { en: "Annualized funding", id: "Funding tahunan" },
    definition: {
      en: "The per-period funding rate scaled to a yearly figure by the number of periods — for an 8h interval, F × 1095. Turns a small-looking 0.01%/8h into a material carry (~11%/yr) and makes funding comparable to other yields. [Established] exchange methodology.",
      id: "Funding rate per-periode diskalakan ke angka tahunan lewat jumlah periode — buat interval 8j, F × 1095. Ngubah 0,01%/8j yang keliatan kecil jadi carry material (~11%/thn) dan bikin funding sebanding sama yield lain. [Established] metodologi exchange.",
    },
    category: "positioning-flows",
  },
  {
    slug: "cash-and-carry",
    term: { en: "Cash-and-carry (crypto carry)", id: "Cash-and-carry (crypto carry)" },
    definition: {
      en: "Going long spot and short the perpetual (or future) to collect positive funding/basis while being delta-neutral — the retail-accessible 'crypto carry'. The return is the funding stream; the risk is funding flipping negative and execution/liquidation. [Established] Schmeling et al. (2023); [Practitioner] LiquidityGoblin.",
      id: "Long spot dan short perpetual (atau future) buat manen funding/basis positif sambil delta-netral — 'crypto carry' yang bisa diakses retail. Return-nya aliran funding; risikonya funding balik negatif dan eksekusi/likuidasi. [Established] Schmeling dkk. (2023); [Practitioner] LiquidityGoblin.",
    },
    category: "positioning-flows",
  },
  {
    slug: "basis",
    term: { en: "Basis", id: "Basis" },
    definition: {
      en: "The gap between a derivative's price and spot (future/perp minus spot). Positive basis (contango) rewards the cash-and-carry; its sign and term structure encode who is crowded and the carry on offer. [Established] Schmeling, Schrimpf & Todorov (2023).",
      id: "Selisih antara harga derivatif dan spot (future/perp dikurang spot). Basis positif (contango) ngasih imbalan ke cash-and-carry; tanda dan term structure-nya nyandiin siapa yang crowded dan carry yang ditawarin. [Established] Schmeling, Schrimpf & Todorov (2023).",
    },
    category: "positioning-flows",
  },
  {
    slug: "no-arb-perp-price",
    term: { en: "No-arbitrage perp price", id: "Harga perp tanpa-arbitrase" },
    definition: {
      en: "Under no-arbitrage the perpetual's fair price equals the risk-neutral expectation of spot at a random funding-anchoring time, not simply current spot. Explains why a persistent funding sign reflects positioning rather than mispricing. [Established] Ackerer, Hugonnier & Jermann (2024).",
      id: "Di bawah tanpa-arbitrase harga wajar perpetual sama dengan ekspektasi risk-neutral dari spot pada waktu penjangkaran-funding acak, bukan sekadar spot saat ini. Ngejelasin kenapa tanda funding yang persisten nyerminin positioning bukan salah-harga. [Established] Ackerer, Hugonnier & Jermann (2024).",
    },
    category: "positioning-flows",
  },
  {
    slug: "expectancy",
    term: { en: "Expectancy (E_R)", id: "Expectancy (E_R)" },
    definition: {
      en: "The average profit per unit risked: E_R = p·b − (1−p), where p is win probability and b the reward-to-risk ratio. The single number that decides whether a setup is +EV; you engineer expectancy, you don't find it. [Practitioner] TraderXO; [Established] foundational.",
      id: "Rata-rata profit per unit yang dirisikoin: E_R = p·b − (1−p), dengan p probabilitas menang dan b rasio reward-ke-risk. Satu angka yang nentuin apakah setup itu +EV; expectancy direkayasa, bukan ditemuin. [Practitioner] TraderXO; [Established] fondasional.",
    },
    category: "risk-edge-stats",
  },
  {
    slug: "reward-risk-ratio",
    term: { en: "Reward-to-risk ratio (R)", id: "Rasio reward-ke-risk (R)" },
    definition: {
      en: "The size of the average win divided by the average loss (b in the expectancy formula). It trades off against win rate: a high R lets a low win rate still be profitable, and vice versa.",
      id: "Ukuran rata-rata menang dibagi rata-rata kalah (b di rumus expectancy). Saling tukar sama win rate: R tinggi bikin win rate rendah tetep cuan, dan sebaliknya.",
    },
    category: "risk-edge-stats",
  },
  {
    slug: "breakeven-win-rate",
    term: { en: "Breakeven win rate", id: "Win rate impas" },
    definition: {
      en: "The win probability at which expectancy is exactly zero: p* = 1/(1+b) for a reward-to-risk b. Below it you lose over time, above it you win; it reframes 'is my strategy good?' as a clean threshold. [Practitioner] TraderXO.",
      id: "Probabilitas menang di mana expectancy persis nol: p* = 1/(1+b) buat reward-ke-risk b. Di bawahnya kamu rugi seiring waktu, di atasnya kamu cuan; nge-reframe 'apakah strategiku bagus?' jadi ambang yang bersih. [Practitioner] TraderXO.",
    },
    category: "risk-edge-stats",
  },
  {
    slug: "kelly-fraction",
    term: { en: "Kelly fraction", id: "Fraksi Kelly" },
    definition: {
      en: "The bet size that maximises long-run log-growth: for a binary bet f* = E_R/b (edge over odds). Full Kelly is volatile, so practitioners run a fraction of it; over-betting beyond Kelly lowers growth and raises ruin. [Established] Kelly (1956); Thorp (2006).",
      id: "Ukuran taruhan yang maksimalin pertumbuhan-log jangka panjang: buat taruhan biner f* = E_R/b (edge dibagi odds). Full Kelly itu volatil, jadi praktisi pakai fraksinya; nge-bet di atas Kelly nurunin pertumbuhan dan naikin ruin. [Established] Kelly (1956); Thorp (2006).",
    },
    category: "risk-edge-stats",
  },
  {
    slug: "risk-of-ruin",
    term: { en: "Risk of ruin", id: "Risk of ruin" },
    definition: {
      en: "The probability that a string of losses draws the account down past a threshold before the edge compounds. Driven by bet size, win rate and reward-to-risk; estimated by Monte-Carlo simulating the equity path. [Established] gambler's-ruin; [Practitioner] TraderXO.",
      id: "Probabilitas bahwa rentetan kekalahan narik akun turun melewati ambang sebelum edge ngompon. Didorong sama ukuran taruhan, win rate dan reward-ke-risk; diestimasi lewat Monte-Carlo nyimulasiin jalur ekuitas. [Established] gambler's-ruin; [Practitioner] TraderXO.",
    },
    category: "risk-edge-stats",
  },
  {
    slug: "dynamic-position-sizing",
    term: { en: "Dynamic position sizing", id: "Position sizing dinamis" },
    definition: {
      en: "Varying trade size with conviction and current volatility rather than betting a fixed amount — scale to the regime so a single loss does not move you. [Practitioner] TraderXO; Jim Talbot.",
      id: "Mengubah ukuran trade sesuai keyakinan dan volatilitas saat ini ketimbang bet jumlah tetap — skalakan ke regime biar satu kekalahan gak ngegoyang kamu. [Practitioner] TraderXO; Jim Talbot.",
    },
    category: "risk-edge-stats",
  },
  {
    slug: "add-to-winners",
    term: { en: "Add to winners, never to losers", id: "Tambah ke yang menang, jangan ke yang kalah" },
    definition: {
      en: "Pyramiding into a position only as it confirms (proven thesis, defined risk) and refusing to average down a loser — the asymmetric-sizing discipline that lets winners run while capping mistakes. [Practitioner] TraderXO.",
      id: "Nambah posisi cuma pas dia konfirmasi (tesis terbukti, risiko terdefinisi) dan nolak averaging down posisi rugi — disiplin sizing asimetris yang ngebiarin yang menang lari sambil ngebatasin kesalahan. [Practitioner] TraderXO.",
    },
    category: "risk-edge-stats",
  },
  {
    slug: "volatility-regime",
    term: { en: "Volatility regime", id: "Regime volatilitas" },
    definition: {
      en: "The prevailing level and behaviour of volatility (calm vs expansion) that an edge is conditioned on — a setup that prints in one regime can be noise in another, so you tie expectancy and sizing to the regime. [Practitioner] TraderXO.",
      id: "Level dan perilaku volatilitas yang lagi berlaku (tenang vs ekspansi) yang jadi syarat sebuah edge — setup yang nge-print di satu regime bisa jadi noise di regime lain, jadi expectancy dan sizing diikat ke regime. [Practitioner] TraderXO.",
    },
    category: "risk-edge-stats",
  },
  {
    slug: "statistical-stops",
    term: { en: "Statistical stops", id: "Stop statistik" },
    definition: {
      en: "Placing stops by volatility/structure (e.g. an ATR or volume-node distance) so they sit beyond normal noise, instead of at arbitrary round numbers where stop clusters get hunted. [Practitioner] TraderXO; Osler (2003).",
      id: "Naruh stop berdasarkan volatilitas/struktur (mis. jarak ATR atau volume-node) biar duduk di luar noise normal, bukan di angka bulat sembarang tempat cluster stop diburu. [Practitioner] TraderXO; Osler (2003).",
    },
    category: "risk-edge-stats",
  },
  {
    slug: "trend-vs-chop",
    term: { en: "Trend vs chop regime", id: "Regime trend vs chop" },
    definition: {
      en: "Naming the market state before choosing an engine: a trending market rewards momentum/continuation while a choppy range rewards fading deviations. Mismatching the engine to the regime is the common way an edge inverts. [Practitioner] Jim Talbot.",
      id: "Nyebut keadaan pasar sebelum milih engine: pasar trending ngasih imbalan ke momentum/kontinuasi sementara range choppy ngasih imbalan ke fade deviasi. Nyalahin engine sama regime itu cara umum sebuah edge kebalik. [Practitioner] Jim Talbot.",
    },
    category: "risk-edge-stats",
  },
  {
    slug: "momentum-reset",
    term: { en: "Momentum reset (RSI reset)", id: "Momentum reset (RSI reset)" },
    definition: {
      en: "In an established uptrend, buying the pullback that cools momentum (e.g. a 1H RSI reset to neutral) rather than chasing — entering continuation at a discount once the oscillator unwinds. [Practitioner] Jim Talbot.",
      id: "Di uptrend yang udah terbentuk, beli pullback yang ngedinginin momentum (mis. RSI 1J reset ke netral) ketimbang ngejar — masuk kontinuasi di harga diskon begitu oscillator unwind. [Practitioner] Jim Talbot.",
    },
    category: "risk-edge-stats",
  },
  {
    slug: "hedging-to-pivot",
    term: { en: "Hedging to stay neutral", id: "Hedging buat tetap netral" },
    definition: {
      en: "Using offsetting positions to flatten directional exposure around a level or event so you can wait for clarity without being forced out — staying neutral to keep optionality rather than guessing direction. [Practitioner] Jim Talbot.",
      id: "Pakai posisi penyeimbang buat ngeratain eksposur arah di sekitar level atau event biar bisa nunggu kejelasan tanpa kepaksa keluar — tetap netral buat ngejaga optionality ketimbang nebak arah. [Practitioner] Jim Talbot.",
    },
    category: "risk-edge-stats",
  },
  {
    slug: "footprint",
    term: { en: "Footprint chart", id: "Footprint chart" },
    definition: {
      en: "A bar that shows traded volume split into buy- and sell-side at each price within it, exposing where aggressive buyers met sellers — the raw input for reading absorption, exhaustion and delta. [Practitioner] Luckshury; Tradingriot.",
      id: "Bar yang nunjukin volume diperdagangkan dipisah jadi sisi-beli dan sisi-jual di tiap harga di dalamnya, ngebuka di mana pembeli agresif ketemu penjual — input mentah buat baca absorption, exhaustion dan delta. [Practitioner] Luckshury; Tradingriot.",
    },
    category: "order-flow-micro",
  },
  {
    slug: "cumulative-volume-delta",
    term: { en: "Cumulative volume delta (CVD)", id: "Cumulative volume delta (CVD)" },
    definition: {
      en: "The running sum of each bar's signed aggressor imbalance δ (market-buy minus market-sell volume): CVD = Σδ. Normally price tracks it; the signal is when CVD and price decouple. [Practitioner] Luckshury, Tradingriot, Jim Talbot; grounded in Kyle (1985).",
      id: "Jumlah berjalan dari ketidakseimbangan aggressor bertanda δ tiap bar (volume market-buy dikurang market-sell): CVD = Σδ. Biasanya harga ngikutin; sinyalnya pas CVD dan harga ngepisah. [Practitioner] Luckshury, Tradingriot, Jim Talbot; berbasis Kyle (1985).",
    },
    category: "order-flow-micro",
  },
  {
    slug: "aggressor-imbalance",
    term: { en: "Aggressor imbalance (delta)", id: "Ketidakseimbangan aggressor (delta)" },
    definition: {
      en: "Per bar, the signed difference between market-buy and market-sell volume (δ = buy − sell aggressor volume). Positive δ means buyers crossed the spread more; the building block of CVD and footprint reads. [Practitioner] order-flow desks.",
      id: "Per bar, selisih bertanda antara volume market-buy dan market-sell (δ = volume aggressor beli − jual). δ positif berarti pembeli lebih banyak nyebrang spread; blok bangunan dari baca CVD dan footprint. [Practitioner] meja order-flow.",
    },
    category: "order-flow-micro",
  },
  {
    slug: "lee-ready",
    term: { en: "Lee-Ready trade signing", id: "Penandaan trade Lee-Ready" },
    definition: {
      en: "The standard rule for inferring whether a trade was buyer- or seller-initiated when the aggressor is unlabelled: trades above the mid are buys, below are sells, with a tick test at the mid. Used to build delta/CVD from raw prints. [Established] Lee & Ready (1991).",
      id: "Aturan standar buat nyimpulin apakah sebuah trade diinisiasi pembeli atau penjual pas aggressor-nya gak berlabel: trade di atas mid itu beli, di bawah jual, dengan tick test di mid. Dipakai buat ngebangun delta/CVD dari print mentah. [Established] Lee & Ready (1991).",
    },
    category: "order-flow-micro",
  },
  {
    slug: "absorption",
    term: { en: "Absorption", id: "Absorption" },
    definition: {
      en: "A large aggressive flow that does NOT move price, because a passive participant is filling it with resting limit orders — a sign the aggressor is being soaked up and may be trapped. Modelled as a low effective impact λ(1−a). [Practitioner] order-flow; Kyle (1985).",
      id: "Aliran agresif besar yang TIDAK nggerakin harga, karena partisipan pasif ngisinya pakai limit order resting — tanda aggressor lagi diserap dan mungkin terjebak. Dimodelkan sebagai impact efektif rendah λ(1−a). [Practitioner] order-flow; Kyle (1985).",
    },
    category: "order-flow-micro",
  },
  {
    slug: "exhaustion",
    term: { en: "Exhaustion", id: "Exhaustion" },
    definition: {
      en: "A move running out of aggressive participants — volume and delta fade as price extends, so the last pushers have no follow-through and a reversal becomes likely. The mirror of fresh continuation. [Practitioner] Luckshury, order-flow desks.",
      id: "Gerakan kehabisan partisipan agresif — volume dan delta memudar pas harga ngelar, jadi pendorong terakhir gak punya lanjutan dan reversal jadi mungkin. Cerminan dari kontinuasi segar. [Practitioner] Luckshury, meja order-flow.",
    },
    category: "order-flow-micro",
  },
  {
    slug: "cvd-divergence",
    term: { en: "CVD divergence", id: "Divergensi CVD" },
    definition: {
      en: "CVD rising into flat-or-lower price (or falling into flat-or-higher price): aggressive flow is being absorbed and not rewarded — a classic reversal tell that price and order flow disagree. [Practitioner] Luckshury, Tradingriot.",
      id: "CVD naik ke harga datar-atau-lebih-rendah (atau turun ke harga datar-atau-lebih-tinggi): aliran agresif lagi diserap dan gak dibayar — sidik jari reversal klasik bahwa harga dan order flow gak sepakat. [Practitioner] Luckshury, Tradingriot.",
    },
    category: "order-flow-micro",
  },
  {
    slug: "effective-impact",
    term: { en: "Effective impact λ(1−a)", id: "Impact efektif λ(1−a)" },
    definition: {
      en: "In the absorption model Δp = λ(1−a)δ + noise, the realised price move per unit of signed flow. The OLS slope of price change on δ recovers it; a low value (high absorption a) flags a passive participant soaking the aggressor. [Practitioner] derived from Kyle (1985).",
      id: "Di model absorption Δp = λ(1−a)δ + noise, gerakan harga teralisasi per unit aliran bertanda. Slope OLS dari perubahan harga atas δ ngembaliinnya; nilai rendah (absorption a tinggi) nandain partisipan pasif lagi nyerap aggressor. [Practitioner] diturunkan dari Kyle (1985).",
    },
    category: "order-flow-micro",
  },
  {
    slug: "kyle-lambda",
    term: { en: "Kyle's lambda (price impact)", id: "Lambda Kyle (price impact)" },
    definition: {
      en: "The slope λ linking signed order flow to price change in Kyle's model (Δp = λ·δ): the cost of liquidity / the depth of the market. Higher λ means thinner liquidity and bigger impact per trade. [Established] Kyle (1985).",
      id: "Slope λ yang ngehubungin order flow bertanda ke perubahan harga di model Kyle (Δp = λ·δ): biaya likuiditas / kedalaman pasar. λ lebih tinggi berarti likuiditas lebih tipis dan impact per trade lebih besar. [Established] Kyle (1985).",
    },
    category: "order-flow-micro",
  },
  {
    slug: "naked-poc",
    term: { en: "Naked POC", id: "Naked POC" },
    definition: {
      en: "A prior session's point of control that price has not yet revisited. It acts as an unfinished-business magnet — an untested fair price that often draws price back. [Practitioner] Luckshury; Auction Market Theory.",
      id: "Point of control sesi sebelumnya yang belum dikunjungi lagi sama harga. Berperan sebagai magnet urusan-belum-selesai — harga wajar yang belum diuji yang sering narik harga balik. [Practitioner] Luckshury; Auction Market Theory.",
    },
    category: "profile",
  },
  {
    slug: "single-prints",
    term: { en: "Single prints", id: "Single prints" },
    definition: {
      en: "In a Market Profile, prices touched in only one TPO period — fast, one-sided moves that left little time/volume. They mark rejection and often act as support/resistance when revisited. [Established] Steidlmayer (1984); Dalton et al.",
      id: "Di Market Profile, harga yang disentuh cuma di satu periode TPO — gerakan cepat, satu-sisi yang ninggalin sedikit waktu/volume. Nandain rejection dan sering jadi support/resistance pas dikunjungi lagi. [Established] Steidlmayer (1984); Dalton dkk.",
    },
    category: "profile",
  },
  {
    slug: "fair-value-gap",
    term: { en: "Fair value gap (FVG)", id: "Fair value gap (FVG)" },
    definition: {
      en: "A three-candle imbalance where price moved so fast it left a gap with little two-sided trade — an inefficiency that price often returns to fill. The order-flow analogue of an LVN / single print. [Practitioner] order-flow / smart-money desks.",
      id: "Ketidakseimbangan tiga-candle di mana harga gerak begitu cepat sampai ninggalin gap dengan sedikit perdagangan dua-sisi — inefisiensi yang harga sering balik buat ngisinya. Analog order-flow dari LVN / single print. [Practitioner] meja order-flow / smart-money.",
    },
    category: "profile",
  },
  {
    slug: "initial-balance",
    term: { en: "Initial balance (IB)", id: "Initial balance (IB)" },
    definition: {
      en: "The price range of the session's first two periods (A+B). It frames the day: trade contained within it is balance, while a break beyond it signals other-timeframe participation and a directional day. [Established] Steidlmayer (1984); Dalton et al.",
      id: "Rentang harga dua periode pertama sesi (A+B). Ngebingkai hari: perdagangan yang tertahan di dalamnya itu balance, sementara breakout di luarnya nandain partisipasi other-timeframe dan hari direksional. [Established] Steidlmayer (1984); Dalton dkk.",
    },
    category: "profile",
  },
  {
    slug: "range-extension",
    term: { en: "Range extension", id: "Range extension" },
    definition: {
      en: "Trade that pushes beyond the initial balance, signalling that a longer-timeframe participant has entered and is moving value — the auction's commitment to a direction for the day. [Established] Dalton et al.; Steidlmayer (1984).",
      id: "Perdagangan yang ndorong melampaui initial balance, nandain partisipan timeframe-lebih-panjang udah masuk dan lagi nggerakin value — komitmen lelang ke sebuah arah buat hari itu. [Established] Dalton dkk.; Steidlmayer (1984).",
    },
    category: "profile",
  },
  {
    slug: "buying-selling-tails",
    term: { en: "Buying / selling tails", id: "Buying / selling tails" },
    definition: {
      en: "Single-print extensions at the top or bottom of a profile where aggressive participants rejected price quickly — a selling tail at the high, a buying tail at the low. Strong rejection that tends to hold. [Established] Steidlmayer (1984); Dalton et al.",
      id: "Ekstensi single-print di puncak atau dasar profile tempat partisipan agresif nolak harga dengan cepat — selling tail di high, buying tail di low. Rejection kuat yang cenderung bertahan. [Established] Steidlmayer (1984); Dalton dkk.",
    },
    category: "profile",
  },
  {
    slug: "day-types",
    term: { en: "Day types", id: "Tipe hari" },
    definition: {
      en: "Dalton's taxonomy of how a session's profile develops: Normal, Normal-Variation, Trend, Neutral and Double-Distribution. Classifying the day early sets expectations for range, value migration and whether to fade or follow. [Established] Dalton et al.; Steidlmayer (1984).",
      id: "Taksonomi Dalton tentang gimana profile sesi berkembang: Normal, Normal-Variation, Trend, Neutral dan Double-Distribution. Nge-klasifikasi hari lebih awal nyetel ekspektasi soal range, migrasi value dan apakah harus fade atau follow. [Established] Dalton dkk.; Steidlmayer (1984).",
    },
    category: "profile",
  },
  {
    slug: "other-timeframe",
    term: { en: "Other-timeframe participant", id: "Partisipan other-timeframe" },
    definition: {
      en: "A longer-horizon player (vs the intraday day-timeframe crowd) whose entry shows up as range extension and one-time framing. Spotting when they engage tells you the move has conviction behind it. [Established] Dalton et al.; Steidlmayer (1984).",
      id: "Pemain horizon-lebih-panjang (vs kerumunan day-timeframe intraday) yang masuknya keliatan sebagai range extension dan one-time framing. Ngenalin kapan mereka terlibat ngasih tau gerakan punya keyakinan di belakangnya. [Established] Dalton dkk.; Steidlmayer (1984).",
    },
    category: "profile",
  },
  {
    slug: "one-time-framing",
    term: { en: "One-time framing", id: "One-time framing" },
    definition: {
      en: "A trend signature where each period fails to trade below the prior period's low (uptrend) or above its high (downtrend) — a stair-step that shows an other-timeframe participant steadily moving value one direction. [Established] Dalton et al.",
      id: "Sidik jari trend di mana tiap periode gagal trade di bawah low periode sebelumnya (uptrend) atau di atas high-nya (downtrend) — tangga yang nunjukin partisipan other-timeframe terus nggerakin value satu arah. [Established] Dalton dkk.",
    },
    category: "profile",
  },
  {
    slug: "session-statistics",
    term: { en: "Session statistics", id: "Statistik sesi" },
    definition: {
      en: "Back-tested tendencies of custom UTC sessions (Asia/London/NY/Close) — e.g. how often a session high/low holds or extends — fused into a daily bias. Sample-dependent edges that decay; treat as conditionals. [Practitioner] Luckshury.",
      id: "Kecenderungan ter-backtest dari sesi UTC kustom (Asia/London/NY/Close) — mis. seberapa sering high/low sesi bertahan atau ngelar — digabung jadi bias harian. Edge yang tergantung sampel dan meluruh; perlakukan sebagai kondisional. [Practitioner] Luckshury.",
    },
    category: "order-flow-micro",
  },
  {
    slug: "black-scholes-merton",
    term: { en: "Black-Scholes-Merton model", id: "Model Black-Scholes-Merton" },
    definition: {
      en: "The canonical option-pricing model: call = S·N(d1) − K·e^(−rτ)·N(d2) with d1 = [ln(S/K)+(r+½σ²)τ]/(σ√τ). Its inputs (S, K, τ, r, σ) and Greeks underlie dealer hedging and the vol surface. [Established] Black & Scholes (1973); Merton (1973).",
      id: "Model penetapan-harga opsi kanonik: call = S·N(d1) − K·e^(−rτ)·N(d2) dengan d1 = [ln(S/K)+(r+½σ²)τ]/(σ√τ). Input-nya (S, K, τ, r, σ) dan Greeks-nya mendasari dealer hedging dan vol surface. [Established] Black & Scholes (1973); Merton (1973).",
    },
    category: "options-volatility",
  },
  {
    slug: "option-delta",
    term: { en: "Delta (Δ)", id: "Delta (Δ)" },
    definition: {
      en: "The first derivative of option price with respect to the underlying — for a call Δ = N(d1). It is the hedge ratio (shares per option) and an approximate risk-neutral probability of finishing in the money. [Established] Black-Scholes-Merton (1973).",
      id: "Turunan pertama harga opsi terhadap underlying — buat call Δ = N(d1). Itu hedge ratio (lembar saham per opsi) dan probabilitas risk-neutral approksimasi buat selesai in-the-money. [Established] Black-Scholes-Merton (1973).",
    },
    category: "options-volatility",
  },
  {
    slug: "option-gamma",
    term: { en: "Gamma (Γ)", id: "Gamma (Γ)" },
    definition: {
      en: "The rate of change of delta with the underlying, Γ = φ(d1)/(S·σ·√τ) — the convexity of the option. It is largest at-the-money near expiry and drives the dealer hedging that moves the tape. [Established] Black-Scholes-Merton (1973).",
      id: "Laju perubahan delta terhadap underlying, Γ = φ(d1)/(S·σ·√τ) — konveksitas opsi. Paling besar at-the-money dekat expiry dan ndorong dealer hedging yang nggerakin tape. [Established] Black-Scholes-Merton (1973).",
    },
    category: "options-volatility",
  },
  {
    slug: "option-theta",
    term: { en: "Theta (Θ)", id: "Theta (Θ)" },
    definition: {
      en: "The option's time decay — the value lost per day as expiry approaches, all else equal. It is the rent a long option holder pays and the income an option seller collects. [Established] Black-Scholes-Merton (1973).",
      id: "Peluruhan-waktu opsi — nilai yang hilang per hari pas expiry mendekat, hal lain tetap. Itu sewa yang dibayar pemegang opsi long dan pendapatan yang dipungut penjual opsi. [Established] Black-Scholes-Merton (1973).",
    },
    category: "options-volatility",
  },
  {
    slug: "option-vega",
    term: { en: "Vega (ν)", id: "Vega (ν)" },
    definition: {
      en: "Sensitivity of option price to implied volatility, ν = S·φ(d1)·√τ. Long options are long vega (gain when IV rises); selling vega harvests the variance risk premium but is short the tail. [Established] Black-Scholes-Merton (1973).",
      id: "Sensitivitas harga opsi terhadap implied volatility, ν = S·φ(d1)·√τ. Opsi long itu long vega (untung pas IV naik); jual vega manen variance risk premium tapi short di tail. [Established] Black-Scholes-Merton (1973).",
    },
    category: "options-volatility",
  },
  {
    slug: "put-call-parity",
    term: { en: "Put-call parity", id: "Paritas put-call" },
    definition: {
      en: "The no-arbitrage identity C − P = S − K·e^(−rτ) linking a call, a put, the spot and a bond at the same strike/expiry. It pins relative option prices and lets you synthesise any leg from the others. [Established] Stoll (1969); Black-Scholes-Merton (1973).",
      id: "Identitas tanpa-arbitrase C − P = S − K·e^(−rτ) yang ngehubungin call, put, spot dan obligasi pada strike/expiry yang sama. Nge-pin harga opsi relatif dan ngebiarin kamu nyintesis leg apapun dari yang lain. [Established] Stoll (1969); Black-Scholes-Merton (1973).",
    },
    category: "options-volatility",
  },
  {
    slug: "implied-volatility",
    term: { en: "Implied volatility (IV)", id: "Implied volatility (IV)" },
    definition: {
      en: "The volatility input that makes the Black-Scholes price match the market price of an option — the market's forward-looking vol estimate. Plotting it across strikes/maturities builds the vol surface. [Established] Black-Scholes-Merton (1973); Gatheral (2006).",
      id: "Input volatilitas yang bikin harga Black-Scholes cocok sama harga pasar opsi — estimasi vol pasar yang berorientasi-ke-depan. Nge-plot-nya lintas strike/maturity ngebangun vol surface. [Established] Black-Scholes-Merton (1973); Gatheral (2006).",
    },
    category: "options-volatility",
  },
  {
    slug: "payoff-diagram",
    term: { en: "Payoff diagram", id: "Diagram payoff" },
    definition: {
      en: "A plot of an option position's profit/loss versus underlying price at expiry (intrinsic) or before (mark-to-model), with breakevens. The visual core for designing multi-leg structures. [Established] options practitioner canon (Hull; Natenberg).",
      id: "Plot profit/rugi sebuah posisi opsi terhadap harga underlying saat expiry (intrinsik) atau sebelumnya (mark-to-model), dengan breakeven. Inti visual buat ngedesain struktur multi-leg. [Established] kanon praktisi opsi (Hull; Natenberg).",
    },
    category: "options-volatility",
  },
  {
    slug: "straddle-strangle",
    term: { en: "Straddle / strangle", id: "Straddle / strangle" },
    definition: {
      en: "Long-volatility structures: a straddle buys a call and put at the same strike, a strangle at separated OTM strikes. Both profit from a large move in either direction (long gamma/vega) and bleed theta if the market is quiet. [Established] options canon.",
      id: "Struktur long-volatilitas: straddle beli call dan put di strike yang sama, strangle di strike OTM yang terpisah. Keduanya untung dari gerakan besar ke arah manapun (long gamma/vega) dan bocor theta kalau pasar sepi. [Established] kanon opsi.",
    },
    category: "options-volatility",
  },
  {
    slug: "vertical-spread",
    term: { en: "Vertical spread", id: "Vertical spread" },
    definition: {
      en: "Buying one option and selling another of the same type at a different strike (same expiry) — a directional bet with capped profit and capped loss that cheapens the position and reduces vega/theta exposure. [Established] options canon.",
      id: "Beli satu opsi dan jual satu lagi tipe sama di strike berbeda (expiry sama) — taruhan direksional dengan profit terbatas dan rugi terbatas yang murahin posisi dan ngurangin eksposur vega/theta. [Established] kanon opsi.",
    },
    category: "options-volatility",
  },
  {
    slug: "iron-condor",
    term: { en: "Iron condor", id: "Iron condor" },
    definition: {
      en: "A four-leg, short-volatility structure: sell an OTM put spread and an OTM call spread. It collects premium (positive theta) while price stays inside a range and caps the loss on a big move — a defined-risk way to be short vol. [Established] options canon.",
      id: "Struktur empat-leg, short-volatilitas: jual put spread OTM dan call spread OTM. Mungut premi (theta positif) selama harga tetap di dalam range dan ngebatasin rugi pas gerakan besar — cara risiko-terdefinisi buat short vol. [Established] kanon opsi.",
    },
    category: "options-volatility",
  },
  {
    slug: "butterfly-spread",
    term: { en: "Butterfly spread", id: "Butterfly spread" },
    definition: {
      en: "A three-strike structure (buy 1 low, sell 2 middle, buy 1 high) that pays out most when price pins near the middle strike at expiry — a low-cost, defined-risk bet on a quiet, range-bound market. [Established] options canon.",
      id: "Struktur tiga-strike (beli 1 rendah, jual 2 tengah, beli 1 tinggi) yang bayar paling banyak pas harga pin dekat strike tengah saat expiry — taruhan murah, risiko-terdefinisi pada pasar tenang dan terikat-range. [Established] kanon opsi.",
    },
    category: "options-volatility",
  },
  {
    slug: "backtest-overfitting",
    term: { en: "Backtest overfitting", id: "Overfitting backtest" },
    definition: {
      en: "Mistaking luck for skill because a strategy was selected as the best of many trials on the same data — the in-sample Sharpe is inflated and fails out of sample. The core reason a great backtest can be worthless. [Established] Bailey, Borwein, López de Prado & Zhu (2014).",
      id: "Salah ngira keberuntungan sebagai skill karena sebuah strategi dipilih sebagai yang terbaik dari banyak percobaan di data yang sama — Sharpe in-sample meninggi dan gagal out-of-sample. Alasan inti backtest hebat bisa gak berguna. [Established] Bailey, Borwein, López de Prado & Zhu (2014).",
    },
    category: "risk-edge-stats",
  },
  {
    slug: "multiple-testing",
    term: { en: "Multiple testing", id: "Pengujian berganda" },
    definition: {
      en: "Trying N strategies and keeping the best inflates the expected maximum Sharpe even with zero true skill: E[max] ≈ √V·[(1−γ)Z⁻¹(1−1/N) + γZ⁻¹(1−1/(Ne))]. You must deflate the winner by the number of trials. [Established] Bailey & López de Prado (2014); Harvey, Liu & Zhu (2016).",
      id: "Nyoba N strategi dan nyimpen yang terbaik meninggiin ekspektasi Sharpe maksimum bahkan dengan skill sejati nol: E[max] ≈ √V·[(1−γ)Z⁻¹(1−1/N) + γZ⁻¹(1−1/(Ne))]. Pemenangnya harus di-deflate sama jumlah percobaan. [Established] Bailey & López de Prado (2014); Harvey, Liu & Zhu (2016).",
    },
    category: "risk-edge-stats",
  },
  {
    slug: "deflated-sharpe-ratio",
    term: { en: "Deflated Sharpe Ratio (DSR)", id: "Deflated Sharpe Ratio (DSR)" },
    definition: {
      en: "A Probabilistic Sharpe Ratio benchmarked against the expected-max Sharpe from N trials — the probability the observed Sharpe is real after correcting for selection bias, non-normal returns and track-record length. [Established] Bailey & López de Prado (2014).",
      id: "Probabilistic Sharpe Ratio yang dibandingkan terhadap Sharpe maksimum-yang-diharapkan dari N percobaan — probabilitas bahwa Sharpe teramati itu nyata setelah ngoreksi bias seleksi, return non-normal dan panjang track-record. [Established] Bailey & López de Prado (2014).",
    },
    category: "risk-edge-stats",
  },
  {
    slug: "probabilistic-sharpe-ratio",
    term: { en: "Probabilistic Sharpe Ratio (PSR)", id: "Probabilistic Sharpe Ratio (PSR)" },
    definition: {
      en: "The probability that the true Sharpe exceeds a benchmark SR*, PSR = Φ[(ŜR−SR*)/σ(ŜR)], using the Sharpe standard error that accounts for skew and kurtosis. Turns a point Sharpe into a confidence statement. [Established] Bailey & López de Prado (2012); Lo (2002).",
      id: "Probabilitas bahwa Sharpe sejati melampaui benchmark SR*, PSR = Φ[(ŜR−SR*)/σ(ŜR)], pakai standard error Sharpe yang ngitung skew dan kurtosis. Ngubah Sharpe titik jadi pernyataan keyakinan. [Established] Bailey & López de Prado (2012); Lo (2002).",
    },
    category: "risk-edge-stats",
  },
  {
    slug: "expected-max-sharpe",
    term: { en: "Expected maximum Sharpe", id: "Sharpe maksimum yang diharapkan" },
    definition: {
      en: "The Sharpe you would expect to see from the best of N skill-less strategies purely by chance — the luck threshold a real edge must clear. It grows with N and with strategy-return variance. [Established] Bailey & López de Prado (2014).",
      id: "Sharpe yang kamu harapkan keliatan dari yang terbaik di antara N strategi tanpa-skill murni karena kebetulan — ambang keberuntungan yang harus dilewatin edge nyata. Tumbuh sama N dan sama varians return-strategi. [Established] Bailey & López de Prado (2014).",
    },
    category: "risk-edge-stats",
  },
  {
    slug: "variance-risk-premium",
    term: { en: "Variance risk premium (VRP)", id: "Variance risk premium (VRP)" },
    definition: {
      en: "The systematic gap by which implied variance exceeds expected realised variance, VRP = K_var − E[RV] — investors overpay for protection, so selling volatility earns a premium on average. [Established] Carr & Wu (2009); Bollerslev, Tauchen & Zhou (2009).",
      id: "Selisih sistematis di mana implied variance ngelampauin realized variance yang diharapkan, VRP = K_var − E[RV] — investor bayar lebih buat proteksi, jadi jual volatilitas dapet premi rata-rata. [Established] Carr & Wu (2009); Bollerslev, Tauchen & Zhou (2009).",
    },
    category: "options-volatility",
  },
  {
    slug: "variance-swap",
    term: { en: "Variance swap", id: "Variance swap" },
    definition: {
      en: "A contract paying N_var·(RV − K_var) — realised variance minus the strike — letting you trade volatility directly. Short variance earns the VRP but has a left-skewed payoff: small wins, rare large losses. [Established] Demeterfi, Derman, Kamal & Zou (1999); Carr & Wu (2009).",
      id: "Kontrak yang bayar N_var·(RV − K_var) — realized variance dikurang strike — ngebiarin kamu trade volatilitas langsung. Short variance dapet VRP tapi payoff-nya left-skewed: menang kecil, rugi besar yang jarang. [Established] Demeterfi, Derman, Kamal & Zou (1999); Carr & Wu (2009).",
    },
    category: "options-volatility",
  },
  {
    slug: "realized-vs-implied-variance",
    term: { en: "Realized vs implied variance", id: "Realized vs implied variance" },
    definition: {
      en: "Realized variance RV = (252/n)Σr² measures what volatility actually was; implied variance K_var = σ_imp² is what the option market priced ahead of time. Implied is systematically richer — that gap is the VRP. [Established] Carr & Wu (2009).",
      id: "Realized variance RV = (252/n)Σr² ngukur volatilitas yang sebenarnya terjadi; implied variance K_var = σ_imp² itu yang dihargai pasar opsi di muka. Implied sistematis lebih mahal — selisih itu adalah VRP. [Established] Carr & Wu (2009).",
    },
    category: "options-volatility",
  },
  {
    slug: "log-contract-replication",
    term: { en: "Log contract & Demeterfi replication", id: "Log contract & replikasi Demeterfi" },
    definition: {
      en: "A variance swap is replicated statically by a 1/K²-weighted strip of OTM options (the 'log contract') plus a dynamic futures hedge — the model-free recipe that makes variance tradeable from listed options. [Established] Demeterfi, Derman, Kamal & Zou (1999).",
      id: "Variance swap direplikasi secara statis lewat strip opsi OTM yang dibobot 1/K² ('log contract') plus hedge futures dinamis — resep bebas-model yang bikin variance bisa di-trade dari opsi terdaftar. [Established] Demeterfi, Derman, Kamal & Zou (1999).",
    },
    category: "options-volatility",
  },
  {
    slug: "model-free-implied-moments",
    term: { en: "Model-free implied moments", id: "Momen implied bebas-model" },
    definition: {
      en: "Risk-neutral variance, skew and kurtosis extracted from a cross-section of option prices by the same option-spanning logic — no model assumed. The basis of VIX-style indices and skew/kurtosis indicators. [Established] Bakshi, Kapadia & Madan (2003).",
      id: "Variance, skew dan kurtosis risk-neutral diekstrak dari penampang harga opsi lewat logika spanning-opsi yang sama — tanpa mengasumsikan model. Basis indeks gaya-VIX dan indikator skew/kurtosis. [Established] Bakshi, Kapadia & Madan (2003).",
    },
    category: "options-volatility",
  },
  {
    slug: "vix",
    term: { en: "VIX", id: "VIX" },
    definition: {
      en: "The CBOE volatility index — the model-free implied volatility of ~30-day S&P 500 options, computed from a 1/K²-weighted option strip. The market's headline 'fear gauge' and the reference point for the VRP. [Established] CBOE; Demeterfi et al. (1999).",
      id: "Indeks volatilitas CBOE — implied volatility bebas-model dari opsi S&P 500 ~30 hari, dihitung dari strip opsi yang dibobot 1/K². 'Fear gauge' utama pasar dan titik acuan buat VRP. [Established] CBOE; Demeterfi dkk. (1999).",
    },
    category: "options-volatility",
  },
  {
    slug: "vega-vs-variance-notional",
    term: { en: "Vega-notional vs variance-notional", id: "Vega-notional vs variance-notional" },
    definition: {
      en: "Two ways to size a vol trade: vega-notional measures P&L per vol point (linear in σ), variance-notional measures P&L per variance point (linear in σ²). Variance exposure is convex in vol, which matters for the tail. [Established] Demeterfi et al. (1999).",
      id: "Dua cara nge-size trade vol: vega-notional ngukur P&L per poin vol (linear dalam σ), variance-notional ngukur P&L per poin variance (linear dalam σ²). Eksposur variance itu konveks terhadap vol, yang penting buat tail. [Established] Demeterfi dkk. (1999).",
    },
    category: "options-volatility",
  },
  {
    slug: "diversification-ratio",
    term: { en: "Diversification ratio", id: "Rasio diversifikasi" },
    definition: {
      en: "For N equal-weight edges with pairwise correlation ρ, the Sharpe multiplier D(N,ρ) = √(N/(1+(N−1)ρ)). Uncorrelated edges (ρ=0) give D=√N; the same pooling shrinks drawdown. [Established] Markowitz (1952); equicorrelation identity.",
      id: "Buat N edge bobot-sama dengan korelasi berpasangan ρ, pengali Sharpe D(N,ρ) = √(N/(1+(N−1)ρ)). Edge tak-berkorelasi (ρ=0) ngasih D=√N; pooling yang sama nyusutin drawdown. [Established] Markowitz (1952); identitas equicorrelation.",
    },
    category: "stat-arb",
  },
  {
    slug: "correlation-ceiling",
    term: { en: "1/√ρ correlation ceiling", id: "Plafon korelasi 1/√ρ" },
    definition: {
      en: "As you add more equicorrelated edges, the diversification ratio does not grow without bound — it converges to 1/√ρ. So average correlation, not the number of strategies, sets the ceiling on how much Sharpe diversification can buy. [Established] equicorrelation limit; Markowitz (1952).",
      id: "Pas kamu nambah lebih banyak edge yang berkorelasi-sama, rasio diversifikasi gak tumbuh tanpa batas — konvergen ke 1/√ρ. Jadi korelasi rata-rata, bukan jumlah strategi, yang nyetel plafon seberapa banyak Sharpe yang bisa dibeli diversifikasi. [Established] limit equicorrelation; Markowitz (1952).",
    },
    category: "stat-arb",
  },
  {
    slug: "uncorrelated-edges",
    term: { en: "Portfolio of uncorrelated edges", id: "Portofolio edge tak-berkorelasi" },
    definition: {
      en: "Running many small, decaying, mutually uncorrelated strategies so their combined Sharpe and smoothness exceed any one — 'be the bookie, not the gambler.' The practitioner expression of diversification math. [Practitioner] LiquidityGoblin, Tradingriot.",
      id: "Nge-jalanin banyak strategi kecil, meluruh, saling tak-berkorelasi biar Sharpe gabungan dan kemulusannya melampaui satu manapun — 'jadilah bandar, bukan penjudi.' Ekspresi praktisi dari matematika diversifikasi. [Practitioner] LiquidityGoblin, Tradingriot.",
    },
    category: "stat-arb",
  },
  {
    slug: "fundamental-law-active-management",
    term: { en: "Fundamental law of active management", id: "Hukum fundamental manajemen aktif" },
    definition: {
      en: "Information ratio ≈ IC·√breadth: skill per bet times the square root of the number of independent bets. It is why combining many weakly-predictive, independent edges can beat one strong but lonely signal. [Established] Grinold & Kahn (2000).",
      id: "Information ratio ≈ IC·√breadth: skill per taruhan dikali akar jumlah taruhan independen. Itulah kenapa nggabung banyak edge yang lemah-prediktif tapi independen bisa ngalahin satu sinyal kuat tapi sendirian. [Established] Grinold & Kahn (2000).",
    },
    category: "stat-arb",
  },
  {
    slug: "statistical-arbitrage",
    term: { en: "Statistical arbitrage", id: "Arbitrase statistik" },
    definition: {
      en: "Systematic trading of mean-reverting relative-value relationships between instruments, sized by their statistical deviation rather than a directional view. Pairs trading is the canonical instance. [Established] Avellaneda & Lee (2010).",
      id: "Perdagangan sistematis dari hubungan relative-value yang mean-reverting antar-instrumen, di-size sesuai deviasi statistiknya ketimbang pandangan direksional. Pairs trading itu contoh kanoniknya. [Established] Avellaneda & Lee (2010).",
    },
    category: "stat-arb",
  },
  {
    slug: "pairs-trading",
    term: { en: "Pairs trading", id: "Pairs trading" },
    definition: {
      en: "Trading two co-moving instruments as a spread: long the laggard and short the leader when they diverge ~2σ, closing on convergence. +EV under mean reversion, no edge under a random walk. [Established] Gatev, Goetzmann & Rouwenhorst (2006).",
      id: "Nge-trade dua instrumen yang gerak-bareng sebagai spread: long yang ketinggalan dan short yang memimpin pas mereka divergen ~2σ, nutup pas konvergensi. +EV di bawah mean reversion, gak ada edge di bawah random walk. [Established] Gatev, Goetzmann & Rouwenhorst (2006).",
    },
    category: "stat-arb",
  },
  {
    slug: "cointegration",
    term: { en: "Cointegration", id: "Kointegrasi" },
    definition: {
      en: "A property of two (or more) non-stationary price series whose specific linear combination IS stationary — i.e. a mean-reverting spread exists. The statistical justification for a tradeable pair. [Established] Engle & Granger (1987).",
      id: "Properti dua (atau lebih) deret harga non-stasioner yang kombinasi linear spesifiknya STASIONER — yakni ada spread yang mean-reverting. Justifikasi statistik buat pair yang bisa di-trade. [Established] Engle & Granger (1987).",
    },
    category: "stat-arb",
  },
  {
    slug: "hedge-ratio",
    term: { en: "Hedge ratio", id: "Hedge ratio" },
    definition: {
      en: "The number of units of one leg per unit of the other that makes a pair's spread stationary — the cointegrating coefficient, usually estimated by regression. Wrong hedge ratio, no mean reversion. [Established] Engle & Granger (1987).",
      id: "Jumlah unit satu leg per unit leg lainnya yang bikin spread sebuah pair stasioner — koefisien kointegrasi, biasanya diestimasi lewat regresi. Hedge ratio salah, gak ada mean reversion. [Established] Engle & Granger (1987).",
    },
    category: "stat-arb",
  },
  {
    slug: "ornstein-uhlenbeck",
    term: { en: "Ornstein-Uhlenbeck process", id: "Proses Ornstein-Uhlenbeck" },
    definition: {
      en: "The mean-reverting diffusion dX = κ(θ−X)dt + σ dW used to model a pair's residual spread: it pulls back to θ at speed κ. Its discrete form is an AR(1) with coefficient e^(−κ dt). [Established] Avellaneda & Lee (2010).",
      id: "Difusi mean-reverting dX = κ(θ−X)dt + σ dW yang dipakai buat memodelkan spread residual sebuah pair: dia narik balik ke θ dengan kecepatan κ. Bentuk diskretnya AR(1) dengan koefisien e^(−κ dt). [Established] Avellaneda & Lee (2010).",
    },
    category: "stat-arb",
  },
  {
    slug: "half-life",
    term: { en: "Half-life of mean reversion", id: "Half-life mean reversion" },
    definition: {
      en: "The time for an OU spread to close half its distance to the mean, ln2/κ. It sets the natural holding period and which timeframe a pair is tradeable on. [Established] Avellaneda & Lee (2010).",
      id: "Waktu buat spread OU nutup separuh jaraknya ke mean, ln2/κ. Nyetel periode holding alami dan di timeframe mana sebuah pair bisa di-trade. [Established] Avellaneda & Lee (2010).",
    },
    category: "stat-arb",
  },
  {
    slug: "s-score",
    term: { en: "S-score / z-score", id: "S-score / z-score" },
    definition: {
      en: "The standardised distance of a spread from its equilibrium, (X−θ)/σ_eq with σ_eq = σ/√(2κ) — the trade trigger: short at high positive scores, long at high negative, exit near zero. [Established] Avellaneda & Lee (2010).",
      id: "Jarak terstandarisasi sebuah spread dari ekuilibriumnya, (X−θ)/σ_eq dengan σ_eq = σ/√(2κ) — pemicu trade: short di skor positif tinggi, long di negatif tinggi, exit dekat nol. [Established] Avellaneda & Lee (2010).",
    },
    category: "stat-arb",
  },
  {
    slug: "distance-method",
    term: { en: "Distance method", id: "Metode jarak" },
    definition: {
      en: "The classic pair-selection rule: pick the pairs with the smallest sum of squared deviations between normalised price series, then trade a fixed-σ divergence. Simple and non-parametric. [Established] Gatev, Goetzmann & Rouwenhorst (2006).",
      id: "Aturan pemilihan pair klasik: pilih pair dengan jumlah deviasi kuadrat terkecil antara deret harga ternormalisasi, terus trade divergensi σ-tetap. Sederhana dan non-parametrik. [Established] Gatev, Goetzmann & Rouwenhorst (2006).",
    },
    category: "stat-arb",
  },
  {
    slug: "mean-reversion",
    term: { en: "Mean reversion", id: "Mean reversion" },
    definition: {
      en: "The tendency of a stationary series to be pulled back toward its long-run average — the engine that makes a spread profitable to fade. Absent it (a random walk), there is no statistical edge. [Established] Engle & Granger (1987); Avellaneda & Lee (2010).",
      id: "Kecenderungan deret stasioner ditarik balik menuju rata-rata jangka-panjangnya — mesin yang bikin sebuah spread nguntungin buat di-fade. Tanpa itu (random walk), gak ada edge statistik. [Established] Engle & Granger (1987); Avellaneda & Lee (2010).",
    },
    category: "stat-arb",
  },
  {
    slug: "adf-test",
    term: { en: "ADF test", id: "Uji ADF" },
    definition: {
      en: "The Augmented Dickey-Fuller test for stationarity — used to check whether a candidate spread mean-reverts (reject the unit root) rather than drifting like a random walk. The gatekeeper for a cointegrated pair. [Established] Dickey & Fuller (1979); Engle & Granger (1987).",
      id: "Uji Augmented Dickey-Fuller buat stasioneritas — dipakai buat ngecek apakah kandidat spread mean-reverting (tolak unit root) ketimbang drifting kayak random walk. Penjaga gerbang buat pair yang terkointegrasi. [Established] Dickey & Fuller (1979); Engle & Granger (1987).",
    },
    category: "stat-arb",
  },
  {
    slug: "market-making",
    term: { en: "Market making", id: "Market making" },
    definition: {
      en: "Quoting both bid and ask to earn the spread at high turnover while staying roughly neutral — selling liquidity for a tiny edge per trade. Survival depends on avoiding informed counterparties. [Practitioner] LiquidityGoblin; [Established] Glosten & Milgrom (1985).",
      id: "Ngutip bid dan ask buat dapet spread di turnover tinggi sambil tetep kurang-lebih netral — jual likuiditas buat edge kecil per trade. Bertahan tergantung pada nghindarin counterparty informed. [Practitioner] LiquidityGoblin; [Established] Glosten & Milgrom (1985).",
    },
    category: "stat-arb",
  },
  {
    slug: "adverse-selection",
    term: { en: "Adverse selection", id: "Seleksi merugikan (adverse selection)" },
    definition: {
      en: "The market maker's core risk: the counterparty who hits your quote knows something you don't, so your fills are systematically on the wrong side. The reason quotes must price in informed flow. [Established] Glosten & Milgrom (1985); Kyle (1985).",
      id: "Risiko inti market maker: counterparty yang ngambil quote-mu tau sesuatu yang kamu gak tau, jadi fill-mu sistematis ada di sisi yang salah. Alasan quote harus ngehargain flow informed. [Established] Glosten & Milgrom (1985); Kyle (1985).",
    },
    category: "stat-arb",
  },
  {
    slug: "mark-outs",
    term: { en: "Mark-outs", id: "Mark-outs" },
    definition: {
      en: "The signature MM risk metric: how a fill's price moves in the seconds/minutes after you trade. Consistently bad mark-outs mean you are being adversely selected — picked off by informed flow. [Practitioner] LiquidityGoblin.",
      id: "Metrik risiko MM khas: gimana harga sebuah fill bergerak di detik/menit setelah kamu trade. Mark-out yang konsisten buruk berarti kamu lagi di-adverse-select — diambil sama flow informed. [Practitioner] LiquidityGoblin.",
    },
    category: "stat-arb",
  },
  {
    slug: "hft-lead-lag",
    term: { en: "HFT lead-lag & edge decay", id: "Lead-lag HFT & peluruhan edge" },
    definition: {
      en: "Faster venues/instruments lead slower ones by milliseconds; an HFT edge exploits that lead but decays as competitors close the gap, so edges must be constantly replaced. [Practitioner] LiquidityGoblin; [Established] microstructure latency literature.",
      id: "Venue/instrumen yang lebih cepat memimpin yang lebih lambat dalam milidetik; edge HFT mengeksploitasi lead itu tapi meluruh pas kompetitor nutup gap-nya, jadi edge harus terus diganti. [Practitioner] LiquidityGoblin; [Established] literatur latensi microstructure.",
    },
    category: "stat-arb",
  },
  {
    slug: "edge-decay",
    term: { en: "Edge decay", id: "Peluruhan edge" },
    definition: {
      en: "Every edge erodes as it is discovered, crowded and arbitraged away — so a sustainable operation is a pipeline of replacing decaying edges, not a single permanent secret. [Practitioner] LiquidityGoblin, Tradingriot.",
      id: "Tiap edge tergerus pas ditemuin, di-crowd dan di-arbitrase habis — jadi operasi berkelanjutan itu pipeline penggantian edge yang meluruh, bukan satu rahasia permanen. [Practitioner] LiquidityGoblin, Tradingriot.",
    },
    category: "stat-arb",
  },
  {
    slug: "mev",
    term: { en: "MEV (maximal extractable value)", id: "MEV (maximal extractable value)" },
    definition: {
      en: "Profit a block producer or searcher can extract by reordering, inserting or censoring transactions — on-chain atomic arbitrage and sandwiching. A crypto-native edge that is infra-dependent. [Practitioner] LiquidityGoblin.",
      id: "Profit yang bisa diekstrak produser blok atau searcher lewat nyusun-ulang, nyisipin atau nyensor transaksi — arbitrase atomik on-chain dan sandwiching. Edge asli-kripto yang tergantung infrastruktur. [Practitioner] LiquidityGoblin.",
    },
    category: "stat-arb",
  },
  {
    slug: "limits-of-arbitrage",
    term: { en: "Limits of arbitrage", id: "Batas-batas arbitrase" },
    definition: {
      en: "Mispricings persist because exploiting them needs capital, carries funding and margin risk, and can move against you before converging — so 'free' arbitrage is bounded by real-world frictions. [Established] Shleifer & Vishny (1997).",
      id: "Salah-harga bertahan karena mengeksploitasinya butuh modal, bawa risiko funding dan margin, dan bisa bergerak melawanmu sebelum konvergen — jadi arbitrase 'gratis' dibatasi oleh friksi dunia-nyata. [Established] Shleifer & Vishny (1997).",
    },
    category: "stat-arb",
  },
  {
    slug: "table-selection",
    term: { en: "Table selection", id: "Pemilihan meja" },
    definition: {
      en: "Choosing which markets/venues/counterparties to play in — where you have an informational or structural advantage — instead of competing where you are the weakest player. 'Pick the table where you're not the mark.' [Practitioner] LiquidityGoblin.",
      id: "Milih pasar/venue/counterparty mana buat dimainin — tempat kamu punya keunggulan informasional atau struktural — ketimbang bersaing di tempat kamu pemain terlemah. 'Pilih meja di mana kamu bukan korbannya.' [Practitioner] LiquidityGoblin.",
    },
    category: "stat-arb",
  },
  {
    slug: "combining-payout-curves",
    term: { en: "Combining payout curves", id: "Menggabung kurva payout" },
    definition: {
      en: "Blending strategies with opposite payoff shapes — option-selling (many small wins, rare big loss) with momentum (many small losses, rare big win) — to smooth the combined equity curve. The shape, not just the mean, matters. [Practitioner] Tradingriot.",
      id: "Mencampur strategi dengan bentuk payoff berlawanan — jual-opsi (banyak menang kecil, rugi besar yang jarang) dengan momentum (banyak kalah kecil, menang besar yang jarang) — buat memuluskan kurva ekuitas gabungan. Bentuknya, bukan cuma rata-ratanya, yang penting. [Practitioner] Tradingriot.",
    },
    category: "stat-arb",
  },
  {
    slug: "tail-hedge",
    term: { en: "Tail hedge", id: "Tail hedge" },
    definition: {
      en: "A standing position (e.g. cheap far-OTM options) that pays off in a rare crash, mandatory when selling volatility so the rare large loss does not end the account. The cost of the hedge is the price of survival. [Practitioner] Tradingriot; Taleb.",
      id: "Posisi tetap (mis. opsi far-OTM murah) yang bayar pas crash langka, wajib pas jual volatilitas biar rugi besar yang jarang gak ngabisin akun. Biaya hedge itu harga dari kelangsungan hidup. [Practitioner] Tradingriot; Taleb.",
    },
    category: "options-volatility",
  },
];
