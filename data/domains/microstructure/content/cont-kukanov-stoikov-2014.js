export const CONTENT = {
  itemId: 'cont-kukanov-stoikov-2014',
  estimatedReadMinutes: 40,

  author: {
    fullName: { en: 'Rama Cont, Arseniy Kukanov & Sasha Stoikov', id: 'Rama Cont, Arseniy Kukanov & Sasha Stoikov' },
    affiliation: {
      en: 'Cont: Statutory Professor of Mathematical Finance, University of Oxford (since 2018; previously Chair of Mathematical Finance, Imperial College London, and Columbia University). Kukanov: quantitative researcher, Headlands Technologies (PhD, Columbia IEOR, 2013). Stoikov: Senior Research Associate, Cornell Financial Engineering Manhattan.',
      id: 'Cont: Statutory Professor of Mathematical Finance, University of Oxford (sejak 2018; sebelumnya Chair of Mathematical Finance di Imperial College London, dan Columbia University). Kukanov: quantitative researcher di Headlands Technologies (PhD, Columbia IEOR, 2013). Stoikov: Senior Research Associate, Cornell Financial Engineering Manhattan.'
    },
    tagline: {
      en: 'The paper that made Kyle\'s price impact measurable in the modern order book — order flow imbalance (OFI) linearly predicts short-horizon price moves, with a slope set by depth.',
      id: 'Paper yang bikin price impact-nya Kyle bisa diukur di order book modern — order flow imbalance (OFI) memprediksi pergerakan harga jangka pendek secara linear, dengan slope yang ditentukan depth.'
    },
    bio: {
      en: `Rama Cont is the Statutory Professor of Mathematical Finance at Oxford (and professorial fellow of St Hugh's College), arriving in 2018 after the Chair of Mathematical Finance at Imperial College London and earlier positions at Columbia and École Polytechnique/CNRS. He took his doctorate at Université Paris-Sud and is known for pathwise stochastic analysis and mathematical models of systemic risk; he won the Louis Bachelier Prize (French Academy of Sciences) in 2010 and was elected a SIAM Fellow in 2017.

Arseniy Kukanov completed his PhD at Columbia's IEOR department in 2013 with the dissertation "Stochastic Models of Limit Order Markets," supervised in this line of work by Cont. His thesis proposed a stylized order-book model predicting a linear relation between price changes and order-flow imbalance — the theoretical spine of this paper. He is now a quantitative researcher at Headlands Technologies.

Sasha Stoikov is a Senior Research Associate at Cornell Financial Engineering Manhattan, with a BS from MIT, an MS in mathematics from Wisconsin–Madison, and a PhD from the University of Texas. He is best known for the Avellaneda–Stoikov (2008) market-making model — the canonical inventory-aware quoting framework — and has worked across industry HFT (Cantor Fitzgerald) and taught at Courant and Columbia. His research centers on limit-order-book dynamics and optimal market making.

The 2014 collaboration sits exactly at the seam between Stoikov's market-making and order-book-dynamics work, Cont's stochastic modeling of limit-order markets (with Stoikov and Talreja, 2010), and Kukanov's thesis — a theory paper made empirical on NYSE data.`,
      id: `Rama Cont adalah Statutory Professor of Mathematical Finance di Oxford (dan professorial fellow St Hugh's College), masuk 2018 setelah Chair of Mathematical Finance di Imperial College London dan posisi sebelumnya di Columbia dan École Polytechnique/CNRS. Dia ambil doctorate di Université Paris-Sud dan dikenal buat pathwise stochastic analysis dan model matematis systemic risk; dia menang Louis Bachelier Prize (French Academy of Sciences) tahun 2010 dan jadi SIAM Fellow tahun 2017.

Arseniy Kukanov nyelesain PhD di departemen IEOR Columbia tahun 2013 dengan disertasi "Stochastic Models of Limit Order Markets," di-supervise di line kerja ini sama Cont. Tesisnya ngajuin model order-book yang stylized yang memprediksi relasi linear antara price change dan order-flow imbalance — tulang teoritis paper ini. Sekarang dia quantitative researcher di Headlands Technologies.

Sasha Stoikov adalah Senior Research Associate di Cornell Financial Engineering Manhattan, dengan BS dari MIT, MS matematika dari Wisconsin–Madison, dan PhD dari University of Texas. Dia paling dikenal buat model market-making Avellaneda–Stoikov (2008) — framework quoting kanon yang inventory-aware — dan udah kerja di industri HFT (Cantor Fitzgerald) serta ngajar di Courant dan Columbia. Risetnya fokus di dinamika limit-order-book dan optimal market making.

Kolaborasi 2014 ini duduk persis di jahitan antara kerja market-making dan order-book-dynamics Stoikov, stochastic modeling limit-order market Cont (sama Stoikov dan Talreja, 2010), dan tesis Kukanov — paper teori yang dibikin empiris di data NYSE.`
    },
    focus: {
      en: `Empirical price impact at high frequency: which order-book events move prices, and by how much. The central object is order flow imbalance (OFI) — a signed count of all events at the best bid and ask (limit orders, cancellations, market orders) — which they show is linearly related to the contemporaneous mid-price change, with a slope inversely proportional to market depth. Methodologically: aggregate the *right* state variable (queue changes at the touch) rather than trades alone, and the noisy, dispute-ridden price-impact literature snaps into a clean, stable linear law.`,
      id: `Price impact empiris di high frequency: event order-book mana yang gerakin harga, dan seberapa banyak. Objek sentralnya order flow imbalance (OFI) — signed count dari semua event di best bid dan ask (limit order, cancellation, market order) — yang mereka tunjukin berelasi linear sama perubahan mid-price kontemporer, dengan slope yang inversely proportional ke market depth. Secara metodologis: agregat variabel state yang *bener* (perubahan queue di touch) daripada cuma trade, dan literatur price-impact yang noisy dan penuh debat langsung jadi hukum linear yang bersih dan stabil.`
    },
    intellectualLineage: {
      en: `Direct descendant of Kyle (1985). Kyle gave us λ — the price impact of net order flow — but as a latent equilibrium quantity inferred from a model, not something you read off a tape. The empirical literature that tried to estimate price impact from *trades* (signed volume, trade imbalance) found noisy, unstable relationships and the puzzling "square-root law" of impact versus volume. Cont–Kukanov–Stoikov resolve the tension by changing the state variable: price is moved by changes in supply and demand at the touch — and trades are only one of three event types that change them (limit orders and cancellations are the others, and at high frequency these non-trade events dominate — quote updates run roughly 40-to-1 against trades in the paper's data). Aggregate all of them into OFI and the relationship to price becomes linear and high-R². The lineage also runs through Cont–Stoikov–Talreja (2010), whose stochastic order-book model motivates why queue dynamics, not trade prints, are the right primitive.`,
      id: `Keturunan langsung Kyle (1985). Kyle ngasih kita λ — price impact dari net order flow — tapi sebagai latent equilibrium quantity yang di-infer dari model, bukan sesuatu yang kamu baca dari tape. Literatur empiris yang coba estimate price impact dari *trade* (signed volume, trade imbalance) nemu relasi yang noisy dan gak stabil plus "square-root law" impact-vs-volume yang membingungkan. Cont–Kukanov–Stoikov nyelesain tension-nya dengan ganti variabel state: harga digerakin sama perubahan supply dan demand di touch — dan trade cuma satu dari tiga tipe event yang ngubah mereka (limit order dan cancellation yang lain, dan di high frequency non-trade event ini yang dominan — quote update kira-kira 40-banding-1 lawan trade di data paper). Agregat semuanya jadi OFI dan relasi ke harga jadi linear dan high-R². Lineage-nya juga lewat Cont–Stoikov–Talreja (2010), yang model order-book stochastic-nya nge-motivate kenapa queue dynamics, bukan trade print, itu primitive yang bener.`
    },
    keyCollaborators: {
      en: `**Each other**, plus the surrounding order-book program. Stoikov with **Marco Avellaneda** (Courant) for the 2008 market-making model that every HFT quoting desk still references. Cont with **Sasha Stoikov and Rishi Talreja** for the 2010 *Operations Research* stochastic order-book model. Kukanov's Columbia dissertation (2013) is the theoretical companion to this paper. Cont's later work (with **Mihai Cucuringu** and co-authors) extends OFI to multiple book levels and cross-asset settings, and OFI has since become a standard feature in both academic HFT studies and production trading signals.`,
      id: `**Satu sama lain**, plus program order-book di sekitarnya. Stoikov sama **Marco Avellaneda** (Courant) buat model market-making 2008 yang masih direferensi setiap HFT quoting desk. Cont sama **Sasha Stoikov dan Rishi Talreja** buat model order-book stochastic 2010 di *Operations Research*. Disertasi Columbia Kukanov (2013) itu companion teoritis paper ini. Kerja Cont kemudian (sama **Mihai Cucuringu** dkk.) extend OFI ke multiple book level dan setting cross-asset, dan OFI sejak itu jadi fitur standard baik di studi HFT akademis maupun trading signal produksi.`
    },
    legacy: {
      en: `OFI is now a staple of high-frequency microstructure — a default feature in price-prediction models, execution-cost analysis, and market-making logic, and the empirical handle that makes Kyle's λ measurable on real data. The paper reframed "price impact" away from trades and toward the full order-flow process at the touch, which is the modern view. Its constructions have been extended to multi-level (deep) OFI, to cross-asset and cross-venue OFI, and into machine-learning pipelines that use OFI features for short-horizon alpha. Even regulators use it: order-flow-imbalance analyses now appear in studies of Treasury-market price moves. The enduring lesson is methodological — measure the variable the mechanism actually depends on, and noisy empirics become clean laws.`,
      id: `OFI sekarang staple high-frequency microstructure — fitur default di model prediksi harga, analisis execution-cost, dan logika market-making, dan handle empiris yang bikin λ-nya Kyle bisa diukur di data nyata. Paper ini nge-reframe "price impact" menjauh dari trade dan menuju proses order-flow penuh di touch, yang itu pandangan modern. Konstruksinya udah di-extend ke multi-level (deep) OFI, ke OFI cross-asset dan cross-venue, dan masuk ke pipeline machine-learning yang pake fitur OFI buat short-horizon alpha. Bahkan regulator pake: analisis order-flow-imbalance sekarang muncul di studi pergerakan harga Treasury market. Pelajaran abadinya metodologis — ukur variabel yang mekanismenya beneran bergantung padanya, dan empirics yang noisy jadi hukum yang bersih.`
    },
    keyWorks: [
      { year: 2014, title: 'The Price Impact of Order Book Events (this item)', venue: 'Journal of Financial Econometrics' },
      { year: 2008, title: 'High-Frequency Trading in a Limit Order Book (Avellaneda & Stoikov)', venue: 'Quantitative Finance' },
      { year: 2010, title: 'A Stochastic Model for Order Book Dynamics (Cont, Stoikov & Talreja)', venue: 'Operations Research' },
      { year: 2013, title: 'Stochastic Models of Limit Order Markets (Kukanov, PhD dissertation)', venue: 'Columbia University' },
    ],
  },

  sections: [
    // ─────────────── 1. motivation ───────────────
    {
      id: 'motivation',
      heading: { en: 'Why this matters', id: 'Kenapa ini penting' },
      body: {
        en: `Kyle (1985) gave the field its most-cited number: $\\lambda$, the price impact of order flow. But Kyle's $\\lambda$ is a *theoretical* object — an equilibrium slope inside a model with one strategic insider and Gaussian noise. If you sit at a real trading desk with a live order book, you cannot read $\\lambda$ off the screen. So a whole empirical literature grew up trying to estimate price impact from what *is* observable — trades. The results were frustrating: regressing price changes on signed trade volume gives noisy, unstable coefficients, and a strange "square-root law" (impact grows like $\\sqrt{\\text{volume}}$) that no simple model cleanly explained.

Cont, Kukanov, and Stoikov (2014) ask a sharper question: what actually moves the price over a few seconds? Not trades alone. The price at the touch moves when **supply and demand at the best bid and ask change** — and that happens through *three* kinds of events:

- **Market orders** consume liquidity at the touch (a market buy eats the ask);
- **Limit orders** add liquidity at the touch (a new bid order deepens demand);
- **Cancellations** remove resting liquidity (a pulled ask order thins supply).

Trades (market orders) are only one of the three. At high frequency, **non-trade events vastly outnumber trades** — in the authors' NYSE data, quote updates (limit-order arrivals and cancellations) outnumber trades roughly 40 to 1 — so any impact measure built only on trades is ignoring most of what is happening to the book. That is exactly why trade-volume regressions are noisy.

Their fix is to aggregate the *right* variable. Define **order flow imbalance (OFI)**: a signed running count of every event at the best quotes — plus for anything that raises demand or removes supply, minus for anything that raises supply or removes demand. They show, on NYSE TAQ data for 50 stocks, that the mid-price change over an interval is a **linear** function of OFI over that interval, with a slope that is **inversely proportional to market depth**, and the fit is tight and stable across stocks and across time scales. The messy trade-volume picture, by contrast, stays noisy.

For a practitioner the payoff is direct: OFI is computable in real time from a level-1/level-2 feed, it is the empirical counterpart of Kyle's $\\lambda$ — generalized from signed trades to all order-book events at the touch — and its slope tells you the current impact regime. If you provide or take liquidity, OFI is the state variable to watch.`,
        id: `Kyle (1985) ngasih field-nya angka yang paling sering disitir: $\\lambda$, price impact dari order flow. Tapi $\\lambda$-nya Kyle itu objek *teoritis* — equilibrium slope di dalam model dengan satu strategic insider dan Gaussian noise. Kalau kamu duduk di trading desk nyata dengan order book live, kamu gak bisa baca $\\lambda$ dari layar. Jadi tumbuh satu literatur empiris yang coba estimate price impact dari yang *bisa* diobservasi — trade. Hasilnya frustrating: regress price change ke signed trade volume ngasih koefisien yang noisy dan gak stabil, plus "square-root law" yang aneh (impact tumbuh kayak $\\sqrt{\\text{volume}}$) yang gak ada model sederhana yang jelasin dengan bersih.

Cont, Kukanov, dan Stoikov (2014) nanya pertanyaan yang lebih tajam: apa sebenernya yang gerakin harga dalam beberapa detik? Bukan trade doang. Harga di touch gerak pas **supply dan demand di best bid dan ask berubah** — dan itu terjadi lewat *tiga* macam event:

- **Market order** ngonsumsi liquidity di touch (market buy makan ask);
- **Limit order** nambah liquidity di touch (bid order baru nge-deepen demand);
- **Cancellation** nyabut resting liquidity (ask order yang ditarik nipisin supply).

Trade (market order) cuma satu dari tiga. Di high frequency, **non-trade event jauh lebih banyak dari trade** — di data NYSE para author, quote update (limit-order arrival dan cancellation) outnumber trade kira-kira 40 banding 1 — jadi ukuran impact apa pun yang dibangun cuma dari trade itu ngabaikan sebagian besar dari apa yang terjadi ke book. Itu persis kenapa regresi trade-volume noisy.

Fix mereka: agregat variabel yang *bener*. Definisi **order flow imbalance (OFI)**: signed running count dari setiap event di best quote — plus buat apa pun yang naikin demand atau nyabut supply, minus buat apa pun yang naikin supply atau nyabut demand. Mereka tunjukin, di data NYSE TAQ buat 50 saham, bahwa perubahan mid-price over satu interval itu fungsi **linear** dari OFI over interval itu, dengan slope yang **inversely proportional ke market depth**, dan fit-nya ketat serta stabil lintas saham dan lintas time scale. Gambaran trade-volume yang berantakan, sebaliknya, tetep noisy.

Buat praktisi payoff-nya langsung: OFI bisa dihitung real-time dari feed level-1/level-2, dia counterpart empiris dari $\\lambda$-nya Kyle — di-generalize dari signed trade ke semua order-book event di touch — dan slope-nya kasih tau impact regime saat ini. Kalau kamu provide atau take liquidity, OFI itu variabel state yang harus diperhatiin.`
      }
    },

    // ─────────────── 2. intuition ───────────────
    {
      id: 'intuition',
      heading: { en: 'Intuition', id: 'Intuisi' },
      body: {
        en: `Picture only the **top of the book**: the best bid (price $P^b$, queue size $q^b$) and the best ask (price $P^a$, queue size $q^a$). The mid-price is $(P^b + P^a)/2$. Forget everything deeper for a moment — Cont–Kukanov–Stoikov's empirical claim is that the touch carries most of the short-horizon information.

Now ask: what would push the mid up? Anything that strengthens demand or weakens supply *at the touch*:

- someone adds a limit buy at the bid (demand up → pressure up);
- someone cancels an ask (supply down → pressure up);
- a market buy eats into the ask, and if it clears the level the ask price ticks up (supply consumed → pressure up).

And symmetrically for downward pressure (add an ask, cancel a bid, market sell). **OFI is just the bookkeeping that adds all of these with the right sign.** Every event gets a $+$ if it is net-demand-increasing at the touch and a $-$ if it is net-supply-increasing; the running total over an interval is the imbalance that the market had to absorb.

Two pieces of intuition make the result memorable.

**First — trades are not special.** A market order and a limit order and a cancellation are interchangeable as far as the touch is concerned: each is just a $\\pm$ change in the queues. A measure that counts only trades is blind to the limit orders and cancellations that, at high frequency, do most of the moving. That is the whole reason OFI beats trade imbalance.

**Second — depth sets the exchange rate.** The same OFI moves a *thin* book more than a *deep* book, because in a deep book there is more resting size to absorb the imbalance before the price has to move. So the slope linking OFI to price change is roughly $1/\\text{depth}$. This is the empirical echo of Kyle: more liquidity (here, more depth) means smaller $\\lambda$. It also helps explain the square-root puzzle — much of the apparent nonlinearity in trade-volume impact is an artifact of aggregating the wrong variable (the precise volume-scaling argument is a heuristic the authors caution about, not a robust law).

The mental image: the order book is a tug-of-war at the touch, OFI is the net pull this interval, and depth is how heavy the rope is. Price moves by (net pull) / (rope weight).`,
        id: `Bayangin cuma **top of the book**: best bid (harga $P^b$, ukuran queue $q^b$) dan best ask (harga $P^a$, ukuran queue $q^a$). Mid-price itu $(P^b + P^a)/2$. Lupain dulu semua yang lebih dalam — klaim empiris Cont–Kukanov–Stoikov itu touch bawa sebagian besar informasi jangka pendek.

Sekarang nanya: apa yang bakal push mid naik? Apa pun yang nguatin demand atau ngelemahin supply *di touch*:

- seseorang nambah limit buy di bid (demand naik → tekanan naik);
- seseorang cancel ask (supply turun → tekanan naik);
- market buy makan ask, dan kalau ngabisin level-nya ask price tick naik (supply dikonsumsi → tekanan naik).

Dan simetris buat tekanan turun (nambah ask, cancel bid, market sell). **OFI itu cuma pembukuan yang nambahin semua ini dengan tanda yang bener.** Tiap event dapet $+$ kalau dia net-demand-increasing di touch dan $-$ kalau net-supply-increasing; running total over satu interval itu imbalance yang harus diserap market.

Dua potong intuisi bikin hasilnya gampang diinget.

**Pertama — trade itu gak spesial.** Market order dan limit order dan cancellation itu interchangeable sejauh menyangkut touch: masing-masing cuma perubahan $\\pm$ di queue. Ukuran yang ngitung cuma trade itu buta ke limit order dan cancellation yang, di high frequency, ngelakuin sebagian besar gerakan. Itu seluruh alasan OFI ngalahin trade imbalance.

**Kedua — depth nge-set kurs-nya.** OFI yang sama gerakin book yang *tipis* lebih banyak daripada book yang *dalam*, karena di book yang dalam ada lebih banyak resting size buat nyerap imbalance sebelum harga harus gerak. Jadi slope yang ngehubungin OFI ke price change kira-kira $1/\\text{depth}$. Ini gema empiris dari Kyle: lebih banyak liquidity (di sini, lebih banyak depth) berarti $\\lambda$ lebih kecil. Ini juga bantu jelasin puzzle square-root — sebagian besar nonlinearity yang keliatan di trade-volume impact itu artifact dari nge-agregat variabel yang salah (argument volume-scaling persisnya itu heuristik yang author kasih warning, bukan hukum robust).

Mental image-nya: order book itu tarik tambang di touch, OFI itu net pull interval ini, dan depth itu seberapa berat talinya. Harga gerak sebesar (net pull) / (berat tali).`
      }
    },

    // ─────────────── 3. formalization ───────────────
    {
      id: 'formalization',
      heading: { en: 'Formal model', id: 'Model formal' },
      body: {
        en: `**State at the touch.** Index order-book events by $n$. After event $n$ the best quotes are $(P_n^b, q_n^b)$ on the bid and $(P_n^a, q_n^a)$ on the ask. We only need how these change from event $n-1$ to event $n$.

**The OFI contribution of a single event.** Define

$$e_n = q_n^{b}\\,\\mathbb{1}_{P_n^{b} \\ge P_{n-1}^{b}} - q_{n-1}^{b}\\,\\mathbb{1}_{P_n^{b} \\le P_{n-1}^{b}} - q_n^{a}\\,\\mathbb{1}_{P_n^{a} \\le P_{n-1}^{a}} + q_{n-1}^{a}\\,\\mathbb{1}_{P_n^{a} \\ge P_{n-1}^{a}}$$

Read it piece by piece. On the **bid** side: if the bid price did not fall ($P_n^b \\ge P_{n-1}^b$) the new bid size $q_n^b$ counts positively (demand added); if it did not rise ($P_n^b \\le P_{n-1}^b$) the old bid size $q_{n-1}^b$ counts negatively (demand removed). On the **ask** side the signs flip: added ask size is $-$ (supply up, pressure down) and removed ask size is $+$ (supply gone, pressure up). When the price is unchanged on a side, the two indicators both fire and the term collapses to the *change in queue size*, e.g. $q_n^b - q_{n-1}^b$ on the bid. Price ticks contribute the whole displaced queue. This one expression handles limit orders, cancellations, and market orders uniformly.

**Order flow imbalance over an interval.** Sum the contributions of all events in $[t_{k-1}, t_k]$:

$$\\boxed{\\text{OFI}_k = \\sum_{n = N(t_{k-1})+1}^{N(t_k)} e_n}$$

where $N(t)$ is the number of events up to time $t$.

**The linear price-impact law.** Let $\\Delta P_k$ be the change in the mid-price over interval $k$, measured in ticks. The paper's central empirical result is

$$\\boxed{\\Delta P_k = \\hat{\\beta}\\,\\text{OFI}_k + \\epsilon_k}, \\qquad \\hat{\\beta} \\propto \\frac{1}{\\bar{D}}$$

estimated by ordinary least squares. The slope $\\hat{\\beta}$ is positive, the fit has high $R^2$, and $\\hat{\\beta}$ is **inversely proportional to the average depth** $\\bar{D}$ at the touch. The paper's parameter-free stylized model pins this down as $\\hat{\\beta} = 1/(2\\bar{D})$; its empirical specification is $\\hat{\\beta} = c/(A\\,\\bar{D})$, where the calibrated $c$ comes out *well below* one (a fraction of unity, roughly half or less across stocks) because the *effective* depth that resists price moves is larger than the visible size at the touch. Either way: a deep book gives a small price-impact coefficient, a thin book a large one.

**Why this beats trade imbalance.** The natural trade-only competitor is trade imbalance $\\text{TI}_k$ (signed traded volume). Regressing $\\Delta P_k$ on $\\text{TI}_k$ gives a positive slope too, but a far noisier fit with a lower, less stable $R^2$, because $\\text{TI}$ omits the limit-order and cancellation events that also move the touch. The OFI relationship is stable across stocks, robust to intraday seasonality, and stable across the choice of interval length.

**Reconciling the square-root law.** The aggregate impact of *trading volume* over longer windows empirically scales like $\\sqrt{V}$. Under the linear OFI law, that apparent nonlinearity emerges from how OFI and traded volume accumulate and from depth scaling — i.e. the square-root law shows up as an *apparent* consequence of a linear law in the right variable, via a CLT-style scaling argument the authors present but caution is noisy and assumption-dependent (they do not recommend using the volume form directly) — not a separate primitive.`,
        id: `**State di touch.** Index event order-book pakai $n$. Setelah event $n$ best quote-nya $(P_n^b, q_n^b)$ di bid dan $(P_n^a, q_n^a)$ di ask. Kita cuma butuh gimana ini berubah dari event $n-1$ ke event $n$.

**Kontribusi OFI dari satu event.** Definisi

$$e_n = q_n^{b}\\,\\mathbb{1}_{P_n^{b} \\ge P_{n-1}^{b}} - q_{n-1}^{b}\\,\\mathbb{1}_{P_n^{b} \\le P_{n-1}^{b}} - q_n^{a}\\,\\mathbb{1}_{P_n^{a} \\le P_{n-1}^{a}} + q_{n-1}^{a}\\,\\mathbb{1}_{P_n^{a} \\ge P_{n-1}^{a}}$$

Baca potong demi potong. Di sisi **bid**: kalau bid price gak turun ($P_n^b \\ge P_{n-1}^b$) ukuran bid baru $q_n^b$ ngitung positif (demand ditambah); kalau gak naik ($P_n^b \\le P_{n-1}^b$) ukuran bid lama $q_{n-1}^b$ ngitung negatif (demand dicabut). Di sisi **ask** tandanya kebalik: ask size yang ditambah itu $-$ (supply naik, tekanan turun) dan ask size yang dicabut itu $+$ (supply ilang, tekanan naik). Pas harga gak berubah di satu sisi, dua indikator nyala dan term-nya collapse jadi *perubahan ukuran queue*, misal $q_n^b - q_{n-1}^b$ di bid. Price tick nyumbang seluruh queue yang tergeser. Satu ekspresi ini nge-handle limit order, cancellation, dan market order secara seragam.

**Order flow imbalance over satu interval.** Jumlahin kontribusi semua event di $[t_{k-1}, t_k]$:

$$\\boxed{\\text{OFI}_k = \\sum_{n = N(t_{k-1})+1}^{N(t_k)} e_n}$$

di mana $N(t)$ jumlah event sampai waktu $t$.

**Hukum price-impact linear.** Misal $\\Delta P_k$ perubahan mid-price over interval $k$, diukur dalam tick. Hasil empiris sentral paper ini:

$$\\boxed{\\Delta P_k = \\hat{\\beta}\\,\\text{OFI}_k + \\epsilon_k}, \\qquad \\hat{\\beta} \\propto \\frac{1}{\\bar{D}}$$

di-estimate pakai ordinary least squares. Slope $\\hat{\\beta}$ positif, fit-nya high $R^2$, dan $\\hat{\\beta}$ **inversely proportional ke average depth** $\\bar{D}$ di touch. Stylized model parameter-free paper-nya nge-pin ini jadi $\\hat{\\beta} = 1/(2\\bar{D})$; spesifikasi empirisnya $\\hat{\\beta} = c/(A\\,\\bar{D})$, di mana $c$ yang dikalibrasi keluar *jauh di bawah* satu (sebagian kecil dari satu, kira-kira setengah atau kurang lintas saham) karena *effective* depth yang nahan price move lebih gede dari ukuran yang keliatan di touch. Either way: book dalam → price-impact coefficient kecil, book tipis → besar.

**Kenapa ini ngalahin trade imbalance.** Kompetitor trade-only yang natural itu trade imbalance $\\text{TI}_k$ (signed traded volume). Regress $\\Delta P_k$ ke $\\text{TI}_k$ ngasih slope positif juga, tapi fit jauh lebih noisy dengan $R^2$ lebih rendah dan kurang stabil, karena $\\text{TI}$ ngilangin event limit-order dan cancellation yang juga gerakin touch. Relasi OFI stabil lintas saham, robust ke seasonality intraday, dan stabil lintas pilihan panjang interval.

**Mendamaikan square-root law.** Impact agregat dari *trading volume* over window lebih panjang secara empiris scale kayak $\\sqrt{V}$. Di bawah hukum OFI linear, nonlinearity yang keliatan itu muncul dari gimana OFI dan traded volume berakumulasi dan dari depth scaling — yaitu square-root law muncul sebagai konsekuensi *apparent* dari hukum linear di variabel yang bener, lewat scaling argument ala-CLT yang author tampilin tapi mereka warning noisy dan tergantung asumsi (mereka gak nyaranin pakai bentuk volume-nya langsung) — bukan primitive terpisah.`
      }
    },

    // ─────────────── 4. worked-example ───────────────
    {
      id: 'worked-example',
      heading: { en: 'Worked example', id: 'Contoh kerjaan' },
      visualization: {
        id: 'cks-ofi-simulator',
        component: 'CksOfiSim',
        title: {
          en: 'OFI vs trade imbalance: the right variable',
          id: 'OFI vs trade imbalance: variabel yang bener'
        },
        description: {
          en: "Both panels regress the same mid-price change ΔP. Left: against order-flow imbalance (OFI) — a tight, high-R² line whose slope is the price impact β = 1/(2D̄). Right: against trade imbalance (TI) — the same data, but TI omits the limit-order and cancellation events that do most of the moving, so the fit is far noisier and lower-R². That gap is the paper's headline. Raise the depth D̄ to flatten the OFI line (deeper book ⇒ smaller impact; 1/β ≈ 2D̄ OFI per tick); raise the noise to loosen both fits. Defaults give 1/β ≈ 180, echoing the worked example.",
          id: "Kedua panel me-regress perubahan mid-price ΔP yang sama. Kiri: lawan order-flow imbalance (OFI) — garis ketat, high-R² yang slope-nya price impact β = 1/(2D̄). Kanan: lawan trade imbalance (TI) — data yang sama, tapi TI ngilangin event limit-order dan cancellation yang ngelakuin sebagian besar gerakan, jadi fit-nya jauh lebih noisy dan R²-nya lebih rendah. Gap itu headline paper-nya. Naikin depth D̄ buat ngedatarin garis OFI (book lebih dalam ⇒ impact lebih kecil; 1/β ≈ 2D̄ OFI per tick); naikin noise buat nge-loosen kedua fit. Default ngasih 1/β ≈ 180, menggema worked example."
        },
        defaultParams: { depth: 90, noise: 0.13, seed: 12345 },
        height: 360,
      },
      body: {
        en: `**Part 1 — compute OFI for one interval.** (Numbers illustrative; the bookkeeping is the point.) Start with the touch at bid $100.00 \\times 500$ and ask $100.01 \\times 400$ (prices in USD, tick = USD 0.01). Four events arrive, none of them changing the best *price* (only the *sizes* at the touch), so each $e_n$ collapses to a queue change:

1. **Limit buy 200 added at the bid:** bid size $500 \\to 700$. Bid unchanged price ⇒ $e_1 = q_n^b - q_{n-1}^b = 700 - 500 = +200$ (demand up).
2. **Market buy 300 lifts the ask:** ask size $400 \\to 100$. Ask side, price unchanged ⇒ $e_2 = -q_n^a + q_{n-1}^a = -100 + 400 = +300$ (supply consumed → upward pressure).
3. **Cancel 150 from the bid:** bid size $700 \\to 550$ ⇒ $e_3 = 550 - 700 = -150$ (demand removed).
4. **Limit sell 250 added at the ask:** ask size $100 \\to 350$ ⇒ $e_4 = -350 + 100 = -250$ (supply up → downward pressure).

$$\\text{OFI} = 200 + 300 - 150 - 250 = +100.$$

Net demand pressure of $+100$ units this interval. Notice that **three of the four events were not trades** — two limit orders and a cancellation — yet they carry two-thirds of the bookkeeping (the only trade is the market buy, event 2). A trade-only measure would have logged just event 2's 300 shares and mis-stated the pressure.

**Part 2 — fit the linear law.** Take five consecutive intervals with their $\\text{OFI}_k$ and mid-price change $\\Delta P_k$ (in ticks), plus the trade-imbalance column $\\text{TI}_k$ (signed shares) for contrast:

| interval | OFI | ΔP (ticks) | TI (signed shares) |
|---|---|---|---|
| 1 | −400 | −2 | +100 |
| 2 | −150 | −1 | −50 |
| 3 | +100 | +1 | +300 |
| 4 | +250 | +1 | −100 |
| 5 | +500 | +3 | +400 |

Regress $\\Delta P$ on OFI. With $\\bar{\\text{OFI}} = 60$ and $\\overline{\\Delta P} = 0.4$, the slope is

$$\\hat{\\beta} = \\frac{\\sum (\\text{OFI}_k - \\bar{\\text{OFI}})(\\Delta P_k - \\overline{\\Delta P})}{\\sum (\\text{OFI}_k - \\bar{\\text{OFI}})^2} = \\frac{2680}{487000} \\approx 0.0055 \\ \\text{ticks per unit OFI},$$

with $R^2 \\approx 0.97$. So it takes about **180 units of net OFI to move the mid by one tick** — and that inverse slope $1/\\hat{\\beta} \\approx 180$ is *proportional to* the book's depth (in the parameter-free stylized model $1/\\hat{\\beta} = 2\\bar{D}$, and larger still in practice): a deeper book needs more OFI per tick. Now look at the $\\text{TI}$ column against the same $\\Delta P$: it does not line up (interval 4 has negative trade imbalance but a positive price move; interval 3 has a large TI of $+300$ yet only a one-tick move, and interval 5's even larger $+400$ aligns only loosely). Trade imbalance is the noisy predictor; OFI is the clean one — exactly the paper's headline.

**Takeaway.** The same arithmetic the desk runs in microseconds: accumulate $e_n$ across the interval, multiply by the impact coefficient $\\hat{\\beta}$ (equivalently, divide by $1/\\hat{\\beta} \\approx 180$), and you have a model-free, real-time estimate of where the mid is being pushed — Kyle's $\\lambda$, finally readable off the tape.`,
        id: `**Bagian 1 — hitung OFI buat satu interval.** (Angka ilustratif; yang penting pembukuannya.) Mulai dengan touch di bid $100.00 \\times 500$ dan ask $100.01 \\times 400$ (harga dalam USD, tick = USD 0.01). Empat event dateng, gak ada yang ngubah best *price* (cuma *ukuran* di touch), jadi tiap $e_n$ collapse jadi perubahan queue:

1. **Limit buy 200 ditambah di bid:** bid size $500 \\to 700$. Bid price gak berubah ⇒ $e_1 = q_n^b - q_{n-1}^b = 700 - 500 = +200$ (demand naik).
2. **Market buy 300 ngangkat ask:** ask size $400 \\to 100$. Sisi ask, price gak berubah ⇒ $e_2 = -q_n^a + q_{n-1}^a = -100 + 400 = +300$ (supply dikonsumsi → tekanan naik).
3. **Cancel 150 dari bid:** bid size $700 \\to 550$ ⇒ $e_3 = 550 - 700 = -150$ (demand dicabut).
4. **Limit sell 250 ditambah di ask:** ask size $100 \\to 350$ ⇒ $e_4 = -350 + 100 = -250$ (supply naik → tekanan turun).

$$\\text{OFI} = 200 + 300 - 150 - 250 = +100.$$

Net demand pressure $+100$ unit interval ini. Perhatiin bahwa **tiga dari empat event itu bukan trade** — dua limit order dan satu cancellation — tapi mereka bawa dua-pertiga pembukuan (satu-satunya trade itu market buy, event 2). Ukuran trade-only cuma bakal nyatet 300 share event 2 dan salah nyatain tekanannya.

**Bagian 2 — fit hukum linear-nya.** Ambil lima interval berturut dengan $\\text{OFI}_k$ dan perubahan mid-price $\\Delta P_k$ (dalam tick), plus kolom trade-imbalance $\\text{TI}_k$ (signed shares) buat perbandingan:

| interval | OFI | ΔP (tick) | TI (signed shares) |
|---|---|---|---|
| 1 | −400 | −2 | +100 |
| 2 | −150 | −1 | −50 |
| 3 | +100 | +1 | +300 |
| 4 | +250 | +1 | −100 |
| 5 | +500 | +3 | +400 |

Regress $\\Delta P$ ke OFI. Dengan $\\bar{\\text{OFI}} = 60$ dan $\\overline{\\Delta P} = 0.4$, slope-nya

$$\\hat{\\beta} = \\frac{\\sum (\\text{OFI}_k - \\bar{\\text{OFI}})(\\Delta P_k - \\overline{\\Delta P})}{\\sum (\\text{OFI}_k - \\bar{\\text{OFI}})^2} = \\frac{2680}{487000} \\approx 0.0055 \\ \\text{tick per unit OFI},$$

dengan $R^2 \\approx 0.97$. Jadi butuh sekitar **180 unit net OFI buat gerakin mid satu tick** — dan inverse slope $1/\\hat{\\beta} \\approx 180$ itu *proporsional ke* depth book (di stylized model parameter-free, $1/\\hat{\\beta} = 2\\bar{D}$, dan lebih besar lagi in practice): book yang lebih dalam butuh lebih banyak OFI per tick. Sekarang lihat kolom $\\text{TI}$ lawan $\\Delta P$ yang sama: dia gak nyambung (interval 4 trade imbalance negatif tapi price move positif; interval 3 TI gede $+300$ tapi cuma move satu tick, dan interval 5 yang TI-nya lebih gede $+400$ nyambungnya longgar). Trade imbalance itu prediktor yang noisy; OFI yang bersih — persis headline paper-nya.

**Takeaway.** Aritmetika yang sama yang desk jalanin dalam mikrodetik: akumulasi $e_n$ across interval, kali sama impact coefficient $\\hat{\\beta}$ (ekuivalen, bagi sama $1/\\hat{\\beta} \\approx 180$), dan kamu punya estimasi model-free real-time ke mana mid lagi di-push — $\\lambda$-nya Kyle, akhirnya bisa dibaca dari tape.`
      }
    },

    // ─────────────── 5. applications ───────────────
    {
      id: 'applications',
      heading: { en: 'Applications by audience', id: 'Aplikasi per audience' },
      visualization: {
        id: 'deep-ofi-simulator',
        component: 'DeepOfiSim',
        title: {
          en: 'Deep OFI: how many book levels to aggregate',
          id: 'Deep OFI: berapa level book diagregasi'
        },
        description: {
          en: "The base law uses imbalance at the best quotes (L=1). Later work aggregates a depth-weighted OFI across the first L levels. Each bar is the R² of regressing ΔP on the deep-OFI built from L levels — gold is your current L. R² climbs from the best-level value toward a ceiling as you add levels (diminishing returns, since deeper weights decay). Raise the depth weighting to make deeper levels matter more (best-level R² drops, the climb steepens); raise noise to lower the whole curve.",
          id: "Hukum dasar pakai imbalance di best quote (L=1). Kerja kemudian ngagregasi deep-OFI yang depth-weighted across L level pertama. Tiap bar itu R² dari regress ΔP ke deep-OFI yang dibangun dari L level — emas itu L saat ini. R² naik dari nilai best-level menuju ceiling pas kamu nambah level (diminishing returns, karena bobot lebih dalam meluruh). Naikin depth weighting biar level lebih dalam lebih matter (R² best-level turun, tanjakan makin curam); naikin noise buat nurunin seluruh kurva."
        },
        defaultParams: { L: 1, decay: 0.6, noise: 0.3 },
        height: 320,
      },
      body: {
        en: `This section walks from the research frontier, through practitioner deployment, down to the operations and risk desk. Pick whichever entry point matches your need.

### For the advanced researcher

OFI reframed price impact as a property of the *order-flow process at the touch*, and the natural extensions all push on the simplifications. **Multi-level (deep) OFI** computes the imbalance not just at the best quote but across the first several price levels, then combines them (Cont and co-authors, and a substantial follow-on literature) — useful when liquidity sits behind the touch. **Cross-asset and cross-venue OFI** aggregate imbalance across related instruments or fragmented venues; order-flow-imbalance analyses now appear even in studies of U.S. Treasury-market price moves. And OFI is a workhorse *feature* in machine-learning microstructure: deep-learning models for short-horizon return prediction routinely take multi-level OFI as input. The open research questions are about nonlinearity at extremes, the decay/permanence of OFI impact, and how the linear law degrades during stress.

### For the quant practitioner

If you trade at high frequency, OFI is a state variable you should be computing continuously from your L1/L2 feed. Three uses. **Prediction:** $\\hat{\\beta}\\cdot\\text{OFI}$ over the last few hundred milliseconds is a short-horizon forecast of the next mid move — a building block for taking/aggressive logic. **Execution:** schedule child orders against OFI — front-loading into supportive OFI and pausing into adverse OFI reduces slippage relative to a fixed schedule. **Market making:** an Avellaneda–Stoikov-style quoter should skew or widen when OFI runs persistently against the side it is resting on, because sustained one-sided OFI is precisely the signal that the mid is about to move through your quote. The inverse-depth scaling is itself actionable: when depth halves, the same OFI moves you twice as far, so size and aggression should fall.

For crypto, OFI ports directly to perpetual and spot LOBs (Binance, Coinbase, OKX level-2 feeds) — the construction is identical, and because crypto books are cancellation-heavy and fragmented across venues, OFI's advantage over trade-based measures is, if anything, larger.

### For the operations team / risk

For a risk desk the most useful reading is that **OFI is a real-time pressure gauge**, not a P&L line. Sustained one-sided OFI means the book is being leaned on in one direction — a microstructure analogue of building order-flow toxicity, and a leading indicator that quoted prices are about to move. Practical monitoring: track per-symbol cumulative OFI and its slope against price; flag symbols where OFI and price are diverging (price not yet moved but pressure accumulating) or where the OFI→price coefficient has jumped (a depth/regime shift). In fragmented markets, watch cross-venue OFI so you are not blind to pressure building on a venue you are not quoting. None of this requires a model of *why* the flow is informed — OFI measures the pressure directly.`,
        id: `Section ini jalan dari research frontier, lewat deployment praktisi, sampai turun ke operations dan risk desk. Pilih entry point yang match sama kebutuhanmu.

### Untuk advanced researcher

OFI nge-reframe price impact jadi properti *proses order-flow di touch*, dan extension naturalnya semua ndorong di simplifikasinya. **Multi-level (deep) OFI** ngitung imbalance bukan cuma di best quote tapi across beberapa price level pertama, lalu nge-combine mereka (Cont dkk., dan literatur follow-on yang substansial) — berguna pas liquidity duduk di belakang touch. **OFI cross-asset dan cross-venue** nge-agregat imbalance lintas instrumen terkait atau venue terfragmentasi; analisis order-flow-imbalance sekarang muncul bahkan di studi pergerakan harga Treasury market US. Dan OFI itu *fitur* workhorse di machine-learning microstructure: model deep-learning buat prediksi return short-horizon rutin ngambil multi-level OFI sebagai input. Pertanyaan riset terbuka soal nonlinearity di ekstrem, decay/permanence dari impact OFI, dan gimana hukum linear-nya degrade pas stress.

### Untuk quant practitioner

Kalau kamu trade di high frequency, OFI itu variabel state yang harusnya kamu hitung terus-menerus dari feed L1/L2-mu. Tiga kegunaan. **Prediksi:** $\\hat{\\beta}\\cdot\\text{OFI}$ over beberapa ratus milidetik terakhir itu forecast short-horizon dari next mid move — building block buat logika taking/aggressive. **Eksekusi:** jadwalin child order lawan OFI — front-load ke OFI yang supportif dan pause ke OFI yang adverse ngurangin slippage relatif ke jadwal fixed. **Market making:** quoter ala Avellaneda–Stoikov harusnya skew atau widen pas OFI jalan persisten lawan sisi tempat dia resting, karena OFI satu-sisi yang sustained itu persis sinyal bahwa mid mau gerak nembus quote-mu. Inverse-depth scaling-nya sendiri actionable: pas depth setengah, OFI yang sama gerakin kamu dua kali lebih jauh, jadi size dan aggression harusnya turun.

Buat crypto, OFI port langsung ke LOB perpetual dan spot (feed level-2 Binance, Coinbase, OKX) — konstruksinya identik, dan karena book crypto itu cancellation-heavy dan terfragmentasi lintas venue, keunggulan OFI atas ukuran trade-based itu, kalau ada, malah lebih besar.

### Untuk tim operations / risk

Buat risk desk bacaan paling berguna itu **OFI adalah pressure gauge real-time**, bukan baris P&L. OFI satu-sisi yang sustained berarti book lagi disandarin ke satu arah — analog microstructure dari toxicity order-flow yang lagi naik, dan leading indicator bahwa quoted price mau gerak. Monitoring praktis: track cumulative OFI per-simbol dan slope-nya lawan harga; flag simbol di mana OFI dan harga divergen (harga belum gerak tapi tekanan berakumulasi) atau di mana koefisien OFI→harga lompat (depth/regime shift). Di market terfragmentasi, perhatiin OFI cross-venue biar kamu gak buta ke tekanan yang naik di venue yang gak kamu quote. Gak ada dari ini yang butuh model *kenapa* flow-nya informed — OFI ngukur tekanannya langsung.`
      }
    },

    // ─────────────── 6. practice ───────────────
    {
      id: 'practice',
      heading: { en: 'Practice', id: 'Latihan' },
      body: {
        en: `**1.** At the touch the bid is $50.00 \\times 800$. A trader cancels 300 of the resting bid (price unchanged, size $800 \\to 500$). What is this event's OFI contribution $e_n$, and which way does it push the mid?

<details><summary>Answer</summary>
Bid price unchanged, so $e_n = q_n^b - q_{n-1}^b = 500 - 800 = -300$. Demand was removed at the touch, so it pushes the mid **down**. (A cancellation — not a trade — moving the price is exactly the effect trade-only measures miss.)
</details>

**2.** Over one interval you observe: a +400 limit buy added at the bid, a market sell of 250 hitting the bid (bid size falls 250, price unchanged), and a +150 cancellation on the ask (ask size falls 150, price unchanged). Compute OFI.

<details><summary>Answer</summary>
Event 1 (bid +400): $+400$. Event 2 (market sell, bid size $-250$, price unchanged): $q_n^b - q_{n-1}^b = -250$. Event 3 (ask cancel, ask size $-150$, price unchanged): $-q_n^a + q_{n-1}^a = +150$ (supply removed → upward pressure). OFI $= 400 - 250 + 150 = +300$. Net upward pressure.
</details>

**3.** Two stocks see the same OFI of $+1000$ this interval. Stock A has average depth $\\bar{D} \\approx 2000$ shares at the touch; stock B has $\\bar{D} \\approx 200$. Which mid moves more, and by roughly how much more?

<details><summary>Answer</summary>
Since $\\hat{\\beta} \\propto 1/\\bar{D}$, the impact coefficient is about $10\\times$ larger for the thin stock B ($\\bar{D}$ is $10\\times$ smaller). The same $+1000$ OFI moves stock B's mid roughly **ten times** as far as stock A's. Depth is the exchange rate between OFI and price — this is Kyle's "more liquidity → smaller $\\lambda$" made measurable.
</details>

**4.** A colleague regresses 10-second mid-price changes on signed *trade volume* and gets an $R^2$ of 0.15; you regress on OFI over the same intervals and get 0.65. Give the one-sentence microstructure reason, and name the two event types the trade regression ignored.

<details><summary>Answer</summary>
Trades are only one of the three event types that move the touch, so trade volume omits most of the relevant order flow — at high frequency the **limit orders** and **cancellations** at the best quotes do much of the moving, and OFI counts all three on the same footing, which is why its fit is far tighter.
</details>`,
        id: `**1.** Di touch bid-nya $50.00 \\times 800$. Seorang trader cancel 300 dari resting bid (price gak berubah, size $800 \\to 500$). Berapa kontribusi OFI $e_n$ event ini, dan ke arah mana dia push mid?

<details><summary>Jawaban</summary>
Bid price gak berubah, jadi $e_n = q_n^b - q_{n-1}^b = 500 - 800 = -300$. Demand dicabut di touch, jadi dia push mid **turun**. (Cancellation — bukan trade — yang gerakin harga itu persis efek yang dilewatin ukuran trade-only.)
</details>

**2.** Over satu interval kamu observe: limit buy +400 ditambah di bid, market sell 250 ngehit bid (bid size turun 250, price gak berubah), dan cancellation +150 di ask (ask size turun 150, price gak berubah). Hitung OFI.

<details><summary>Jawaban</summary>
Event 1 (bid +400): $+400$. Event 2 (market sell, bid size $-250$, price gak berubah): $q_n^b - q_{n-1}^b = -250$. Event 3 (ask cancel, ask size $-150$, price gak berubah): $-q_n^a + q_{n-1}^a = +150$ (supply dicabut → tekanan naik). OFI $= 400 - 250 + 150 = +300$. Net tekanan naik.
</details>

**3.** Dua saham lihat OFI yang sama $+1000$ interval ini. Saham A punya average depth $\\bar{D} \\approx 2000$ shares di touch; saham B punya $\\bar{D} \\approx 200$. Mid mana yang gerak lebih banyak, dan kira-kira lebih banyak berapa?

<details><summary>Jawaban</summary>
Karena $\\hat{\\beta} \\propto 1/\\bar{D}$, impact coefficient-nya sekitar $10\\times$ lebih besar buat saham tipis B ($\\bar{D}$-nya $10\\times$ lebih kecil). OFI $+1000$ yang sama gerakin mid saham B kira-kira **sepuluh kali** sejauh saham A. Depth itu kurs antara OFI dan harga — ini "more liquidity → $\\lambda$ lebih kecil"-nya Kyle yang dibikin bisa diukur.
</details>

**4.** Seorang kolega regress 10-detik perubahan mid-price ke signed *trade volume* dan dapet $R^2$ 0.15; kamu regress ke OFI over interval yang sama dan dapet 0.65. Kasih alasan microstructure satu kalimat, dan sebutin dua tipe event yang regresi trade-nya abaikan.

<details><summary>Jawaban</summary>
Trade cuma satu dari tiga tipe event yang gerakin touch, jadi trade volume ngilangin sebagian besar order flow yang relevan — di high frequency **limit order** dan **cancellation** di best quote ngelakuin sebagian besar gerakan, dan OFI ngitung ketiganya di pijakan yang sama, makanya fit-nya jauh lebih ketat.
</details>`
      }
    },

    // ─────────────── 7. connections ───────────────
    {
      id: 'connections',
      heading: { en: 'Connections', id: 'Koneksi' },
      body: {
        en: `- **Prereqs**: [Kyle 1985](item:kyle-1985) is the direct parent — OFI generalizes Kyle's $\\lambda$ from signed trades to all touch events, with depth playing the role of the inverse impact coefficient. [Hasbrouck 2007](item:hasbrouck-2007) supplies the empirical-microstructure toolkit (trade-sign classification, VAR price discovery) that this paper's methodology sits alongside.
- **Related to**: [Glosten-Milgrom 1985](item:glosten-milgrom-1985) and [O'Hara 1995](item:ohara-1995) explain *why* order flow moves price (adverse selection): OFI measures the pressure, GM explains its information content. The two views are complementary — OFI is the "what," adverse selection is the "why."
- **Builds toward**: multi-level (deep) OFI and machine-learning return prediction; cross-venue OFI for fragmented markets; OFI-aware execution and Avellaneda–Stoikov-style market making. [Easley-López de Prado-O'Hara 2012](item:easley-lopez-prado-vpin) (VPIN) is a complementary high-frequency toxicity measure built on volume rather than book events.
- **Methodological lineage**: Cont, Stoikov & Talreja 2010 (stochastic order-book dynamics) and Kukanov's 2013 dissertation provide the theoretical model from which the linear OFI law is derived; Avellaneda & Stoikov 2008 is the market-making counterpart that consumes such signals.`,
        id: `- **Prereqs**: [Kyle 1985](item:kyle-1985) itu parent langsung — OFI nge-generalize $\\lambda$-nya Kyle dari signed trade ke semua touch event, dengan depth memainkan peran inverse impact coefficient. [Hasbrouck 2007](item:hasbrouck-2007) nyediain toolkit empirical-microstructure (klasifikasi trade-sign, VAR price discovery) yang metodologi paper ini duduk berdampingan.
- **Related to**: [Glosten-Milgrom 1985](item:glosten-milgrom-1985) dan [O'Hara 1995](item:ohara-1995) ngejelasin *kenapa* order flow gerakin harga (adverse selection): OFI ngukur tekanannya, GM ngejelasin information content-nya. Dua pandangan ini komplementer — OFI itu "apa"-nya, adverse selection itu "kenapa"-nya.
- **Builds toward**: multi-level (deep) OFI dan prediksi return machine-learning; OFI cross-venue buat market terfragmentasi; eksekusi OFI-aware dan market making ala Avellaneda–Stoikov. [Easley-López de Prado-O'Hara 2012](item:easley-lopez-prado-vpin) (VPIN) itu ukuran toxicity high-frequency komplementer yang dibangun di volume daripada book event.
- **Lineage metodologis**: Cont, Stoikov & Talreja 2010 (dinamika order-book stochastic) dan disertasi Kukanov 2013 nyediain model teoritis tempat hukum OFI linear diturunkan; Avellaneda & Stoikov 2008 itu counterpart market-making yang mengonsumsi sinyal seperti itu.`
      }
    },

    // ─────────────── 8. sources ───────────────
    {
      id: 'sources',
      heading: { en: 'Sources', id: 'Sumber' },
      body: {
        en: `- **Cont, R., Kukanov, A., and Stoikov, S.** (2014). "The Price Impact of Order Book Events." *Journal of Financial Econometrics*, 12(1), 47-88. The foundational OFI paper, empirical on NYSE TAQ data for 50 stocks. **(This item.)**
- **Kyle, A. S.** (1985). "Continuous Auctions and Insider Trading." *Econometrica*, 53(6), 1315-1335. The theoretical parent — $\\lambda$ as the price impact of order flow.
- **Avellaneda, M., and Stoikov, S.** (2008). "High-Frequency Trading in a Limit Order Book." *Quantitative Finance*, 8(3), 217-224. The canonical inventory-aware market-making model that consumes OFI-style signals.
- **Cont, R., Stoikov, S., and Talreja, R.** (2010). "A Stochastic Model for Order Book Dynamics." *Operations Research*, 58(3), 549-563. The order-book model motivating queue dynamics as the right primitive.
- **Kukanov, A.** (2013). *Stochastic Models of Limit Order Markets*. PhD dissertation, Columbia University. The theoretical companion deriving the linear price–OFI relation.`,
        id: `- **Cont, R., Kukanov, A., dan Stoikov, S.** (2014). "The Price Impact of Order Book Events." *Journal of Financial Econometrics*, 12(1), 47-88. Paper OFI foundational, empiris di data NYSE TAQ buat 50 saham. **(Item ini.)**
- **Kyle, A. S.** (1985). "Continuous Auctions and Insider Trading." *Econometrica*, 53(6), 1315-1335. Parent teoritis — $\\lambda$ sebagai price impact dari order flow.
- **Avellaneda, M., dan Stoikov, S.** (2008). "High-Frequency Trading in a Limit Order Book." *Quantitative Finance*, 8(3), 217-224. Model market-making inventory-aware kanon yang mengonsumsi sinyal ala OFI.
- **Cont, R., Stoikov, S., dan Talreja, R.** (2010). "A Stochastic Model for Order Book Dynamics." *Operations Research*, 58(3), 549-563. Model order-book yang nge-motivate queue dynamics sebagai primitive yang bener.
- **Kukanov, A.** (2013). *Stochastic Models of Limit Order Markets*. Disertasi PhD, Columbia University. Companion teoritis yang nurunin relasi linear price–OFI.`
      }
    },
  ],

  audio: { enabled: true },

  selfTest: [
    {
      sectionId: 'motivation',
      question: {
        en: 'Why is a price-impact measure built only on trades (signed trade volume) noisy, while OFI is clean — even though both are trying to measure the same thing?',
        id: 'Kenapa ukuran price-impact yang dibangun cuma dari trade (signed trade volume) itu noisy, sementara OFI bersih — padahal dua-duanya coba ngukur hal yang sama?'
      },
      prompt: { en: 'Before continuing, try answering:', id: 'Sebelum lanjut, coba jawab:' },
      answer: {
        en: 'Because trades are only one of three event types that change supply and demand at the touch. Limit orders add liquidity and cancellations remove it, and at high frequency these non-trade events vastly outnumber trades (≈40:1 quote-updates-to-trades in the authors\' NYSE data). A trade-only measure is blind to those, so it omits most of the order flow that actually moves the mid — hence the noise. OFI counts market orders, limit orders, and cancellations on the same signed footing, capturing the full pressure at the touch, which is why its relation to price change is linear and high-R².',
        id: 'Karena trade cuma satu dari tiga tipe event yang ngubah supply dan demand di touch. Limit order nambah liquidity dan cancellation nyabutnya, dan di high frequency non-trade event ini jauh lebih banyak dari trade (≈40:1 quote-update-ke-trade di data paper). Ukuran trade-only buta ke itu, jadi dia ngilangin sebagian besar order flow yang sebenernya gerakin mid — makanya noisy. OFI ngitung market order, limit order, dan cancellation di pijakan signed yang sama, nangkep tekanan penuh di touch, makanya relasinya ke price change linear dan high-R².'
      }
    },
    {
      sectionId: 'formalization',
      question: {
        en: 'When the best price on a side does not change, the OFI contribution e_n collapses to a simple expression. What is it on the bid side, and why does a price tick instead contribute the whole displaced queue?',
        id: 'Pas best price di satu sisi gak berubah, kontribusi OFI e_n collapse jadi ekspresi sederhana. Apa itu di sisi bid, dan kenapa price tick malah nyumbang seluruh queue yang tergeser?'
      },
      prompt: { en: 'Before continuing, try answering:', id: 'Sebelum lanjut, coba jawab:' },
      answer: {
        en: 'With the bid price unchanged, both indicators (P_n ≥ P_{n-1} and P_n ≤ P_{n-1}) fire, so the bid terms reduce to q_n^b − q_{n-1}^b — just the change in queue size at the bid. When the price ticks instead (say the bid moves up), only one indicator fires on each of the old/new sizes, so the contribution is the full new queue (demand appeared at a higher price) or the full old queue (demand vanished from the old level) — the entire displaced size counts, because a price move is a much bigger change in supply/demand than a size adjustment at a fixed level.',
        id: 'Dengan bid price gak berubah, dua indikator (P_n ≥ P_{n-1} dan P_n ≤ P_{n-1}) nyala, jadi term bid reduce jadi q_n^b − q_{n-1}^b — cuma perubahan ukuran queue di bid. Pas price malah tick (misal bid naik), cuma satu indikator nyala di masing-masing ukuran lama/baru, jadi kontribusinya seluruh queue baru (demand muncul di harga lebih tinggi) atau seluruh queue lama (demand ilang dari level lama) — seluruh ukuran yang tergeser ngitung, karena price move itu perubahan supply/demand yang jauh lebih besar dari penyesuaian ukuran di level fixed.'
      }
    },
    {
      sectionId: 'formalization',
      question: {
        en: 'The OFI→price slope β̂ is inversely proportional to depth (in the parameter-free stylized model, β̂ = 1/(2·D̄)). Connect this explicitly to Kyle\'s λ, and explain how it helps reconcile the empirical square-root law of volume impact.',
        id: 'Slope OFI→harga β̂ inversely proportional ke depth (di stylized model parameter-free, β̂ = 1/(2·D̄)). Hubungin ini eksplisit ke λ-nya Kyle, dan jelasin gimana dia bantu mendamaikan square-root law empiris dari volume impact.'
      },
      prompt: { en: 'Before continuing, try answering:', id: 'Sebelum lanjut, coba jawab:' },
      answer: {
        en: 'β̂ is the empirical analogue of Kyle\'s λ: both are the price moved per unit of (net) order flow, and both fall as liquidity rises — Kyle\'s λ ∝ 1/σ_u-style depth, OFI\'s β̂ ∝ 1/D̄. The difference is that λ is inferred from a model while β̂ is read off a regression on observable book events. The square-root law (aggregate impact ∝ √volume) then need not be a separate primitive: under a linear law in OFI, the apparent √-shape in volume-impact emerges from how OFI and traded volume accumulate over longer windows and from depth scaling. So a clean linear law in the right variable (OFI) reproduces the messy nonlinear law in the wrong variable (volume).',
        id: 'β̂ itu analog empiris dari λ-nya Kyle: dua-duanya harga yang digerakin per unit (net) order flow, dan dua-duanya turun pas liquidity naik — λ-nya Kyle ∝ depth ala 1/σ_u, β̂-nya OFI ∝ 1/D̄. Bedanya λ di-infer dari model sementara β̂ dibaca dari regresi di book event yang observable. Square-root law (impact agregat ∝ √volume) lalu gak perlu jadi primitive terpisah: di bawah hukum linear di OFI, bentuk √ yang keliatan di volume-impact muncul dari gimana OFI dan traded volume berakumulasi over window lebih panjang dan dari depth scaling. Jadi hukum linear yang bersih di variabel yang bener (OFI) mereproduksi hukum nonlinear yang berantakan di variabel yang salah (volume).'
      }
    },
    {
      sectionId: 'applications',
      question: {
        en: 'You run a passive market-making strategy resting on the bid. Over the last second, OFI has been strongly and persistently negative. Using the OFI framework, what is happening and what should you do?',
        id: 'Kamu jalanin strategi market-making pasif yang resting di bid. Over detik terakhir, OFI udah kuat dan persisten negatif. Pakai framework OFI, apa yang lagi terjadi dan kamu harus ngapain?'
      },
      prompt: { en: 'Before continuing, try answering:', id: 'Sebelum lanjut, coba jawab:' },
      answer: {
        en: 'Persistently negative OFI means demand is being withdrawn and/or supply added at the touch — net downward pressure — and the linear law says the mid is about to move down by roughly β̂·OFI. Resting passively on the bid, you are likely to be filled right before the price drops (adverse selection): you buy, then the mid falls through you. The response is to skew your quotes down (lower your bid, widen on the bid side) or pull size on the bid until OFI neutralizes, and only re-tighten once the imbalance abates. If depth is also thinning, β̂ rises, so the expected adverse move per unit OFI is larger — cut size more aggressively. OFI gives you a quantitative, model-free early warning that your resting bid is about to be run over.',
        id: 'OFI yang persisten negatif berarti demand lagi ditarik dan/atau supply ditambah di touch — net tekanan turun — dan hukum linear bilang mid mau gerak turun kira-kira sebesar β̂·OFI. Resting pasif di bid, kamu kemungkinan di-fill persis sebelum harga jatuh (adverse selection): kamu beli, terus mid jatuh nembus kamu. Responnya skew quote turun (turunin bid, widen di sisi bid) atau tarik size di bid sampai OFI netral, dan baru re-tighten begitu imbalance-nya reda. Kalau depth juga nipis, β̂ naik, jadi expected adverse move per unit OFI lebih besar — potong size lebih agresif. OFI ngasih kamu early warning kuantitatif dan model-free bahwa resting bid-mu mau dilindas.'
      }
    },
  ],
};
