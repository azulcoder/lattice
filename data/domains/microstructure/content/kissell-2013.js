export const CONTENT = {
  itemId: 'kissell-2013',
  estimatedReadMinutes: 34,

  author: {
    fullName: { en: 'Robert Kissell', id: 'Robert Kissell' },
    affiliation: {
      en: 'Founder and President, Kissell Research Group; Professor, School of Business, Molloy University; Adjunct Professor, Gabelli School of Business, Fordham University. Previously in quantitative trading / execution research at UBS, J.P. Morgan, and Instinet.',
      id: 'Founder dan President, Kissell Research Group; Professor, School of Business, Molloy University; Adjunct Professor, Gabelli School of Business, Fordham University. Sebelumnya di quantitative trading / execution research di UBS, J.P. Morgan, dan Instinet.'
    },
    tagline: {
      en: 'The buy-side practitioner\'s handbook of execution — instead of deriving the optimal strategy from a stochastic differential equation, it teaches you to measure trading costs (transaction-cost analysis), estimate market impact from real data (the I-Star model), and choose and benchmark VWAP/TWAP/POV/IS algorithms.',
      id: 'Handbook praktisi buy-side soal eksekusi — daripada nurunin strategi optimal dari persamaan diferensial stokastik, dia ngajarin kamu ngukur biaya trading (transaction-cost analysis), estimasi market impact dari data nyata (model I-Star), dan milih serta nge-benchmark algoritma VWAP/TWAP/POV/IS.'
    },
    bio: {
      en: `Robert Kissell is a quantitative-execution practitioner, not an academic theorist — and the book reflects it. He ran quantitative trading and execution research on the sell side and buy side (UBS, J.P. Morgan, Instinet) before founding the **Kissell Research Group**, a consultancy specializing in transaction-cost analysis and market-impact modelling; he also teaches at Molloy University and Fordham's Gabelli School. He holds a PhD in economics from Fordham and degrees in applied mathematics from Hofstra and Stony Brook.

His signature contribution is the **I-Star market-impact model** (developed with Roberto Malamut), an empirically-estimated, power-function cost model that has become a practitioner standard — it is commercialized through his firm and built into MATLAB's financial toolboxes. He also wrote the earlier practitioner text *Optimal Trading Strategies* (2003, with Morton Glantz) and the 2004 *Finance Research Letters* paper (with Glantz and Malamut) that laid out the estimation framework this book refines.

The defining feature of his work is that it is **about estimating real costs from real data**. Where Cartea-Jaimungal-Penalva and Guéant ask "what is the optimal trading strategy, given a posited impact model?", Kissell asks the prior, operational question: "what does trading actually cost, how do I measure it, and how do I choose an algorithm to manage it?" That makes the book the bridge between the optimal-execution theory and the trading desk.`,
      id: `Robert Kissell itu praktisi quantitative-execution, bukan teoris akademik — dan buku-nya ngerefleksiin itu. Dia ngejalanin quantitative trading dan execution research di sell side dan buy side (UBS, J.P. Morgan, Instinet) sebelum nge-found **Kissell Research Group**, konsultansi yang spesialis di transaction-cost analysis dan market-impact modelling; dia juga ngajar di Molloy University dan Gabelli School-nya Fordham. Dia punya PhD ekonomi dari Fordham dan gelar applied mathematics dari Hofstra dan Stony Brook.

Kontribusi khasnya itu **model market-impact I-Star** (dikembangin sama Roberto Malamut), model biaya power-function yang diestimasi secara empiris yang udah jadi standar praktisi — dia dikomersialin lewat firma-nya dan dibangun ke financial toolbox MATLAB. Dia juga nulis teks praktisi sebelumnya *Optimal Trading Strategies* (2003, sama Morton Glantz) dan paper *Finance Research Letters* 2004 (sama Glantz dan Malamut) yang ngegambarin framework estimasi yang buku ini sempurnain.

Fitur yang ngedefinisiin kerjanya itu bahwa dia **soal ngestimasi biaya nyata dari data nyata**. Di mana Cartea-Jaimungal-Penalva dan Guéant nanya "apa strategi trading optimal, dikasih model impact yang diposit?", Kissell nanya pertanyaan operasional yang lebih dulu: "trading sebenernya biayanya berapa, gimana aku ngukurnya, dan gimana aku milih algoritma buat ngaturnya?" Itu bikin buku-nya jembatan antara teori optimal-execution dan trading desk.`
    },
    focus: {
      en: `What does it actually cost to trade, and how do you manage that cost on a live desk? *The Science of Algorithmic Trading and Portfolio Management* (2013) is a leading practitioner reference for **transaction-cost analysis (TCA)** and cost-aware execution. It unbundles the cost of trading into its components (commissions, spreads, delay, market impact, timing risk, opportunity cost) inside the **implementation-shortfall** framework — paper return minus actual return — so that performance can be measured and attributed across the portfolio manager, trader, broker, and algorithm. Its analytical centerpiece is the **I-Star market-impact model**: an empirically-calibrated power function estimating expected cost (in basis points) from order size, volatility, and the trading rate, split into a permanent and a strategy-dependent temporary component. From there it builds the practitioner's decision framework — the trader's dilemma of impact versus timing risk (the Almgren-Chriss efficient frontier, operationalized), and how to choose among VWAP, TWAP, POV, and implementation-shortfall algorithms to fit an order's objective, alpha, and urgency — and finally how to embed expected trading costs directly into portfolio construction.`,
      id: `Trading sebenernya biayanya berapa, dan gimana kamu ngatur biaya itu di desk live? *The Science of Algorithmic Trading and Portfolio Management* (2013) itu salah satu rujukan praktisi utama buat **transaction-cost analysis (TCA)** dan eksekusi yang cost-aware. Dia nge-unbundle biaya trading jadi komponennya (komisi, spread, delay, market impact, timing risk, opportunity cost) di dalam framework **implementation-shortfall** — paper return dikurang actual return — biar performance bisa diukur dan diatribusiin lintas portfolio manager, trader, broker, dan algoritma. Pusat analitisnya itu **model market-impact I-Star**: power function yang dikalibrasi empiris yang ngestimasi expected cost (dalam basis poin) dari ukuran order, volatility, dan trading rate, dibelah jadi komponen permanen dan komponen temporer yang strategy-dependent. Dari situ dia bangun framework keputusan praktisi — trader's dilemma soal impact lawan timing risk (efficient frontier Almgren-Chriss, dioperasionalin), dan gimana milih antara algoritma VWAP, TWAP, POV, dan implementation-shortfall buat cocok sama objektif, alpha, dan urgency order — dan akhirnya gimana ngetanam expected trading cost langsung ke portfolio construction.`
    },
    intellectualLineage: {
      en: `The book is the practitioner synthesis of the transaction-cost-analysis tradition. **Perold (1988)** defined the *implementation shortfall* — paper return minus actual return — the benchmark that TCA is built around. **Almgren-Chriss (2000)** supplied the *efficient trading frontier* (minimize market impact plus a risk-aversion multiple of timing risk), the cost-versus-risk trade-off the book operationalizes; Kissell explicitly extends it (with Glantz and Malamut, 2004) by adding an alpha/drift term and alternative objectives. The market-impact lineage runs through **Kyle (1985)** (price impact) and the temporary/permanent decomposition. Kissell's own move is methodological: the **I-Star** model is a *top-down* cost-allocation model — estimate the total instantaneous cost of the whole order from a regression on real data, then allocate it across the trade schedule — deliberately contrasted with the *bottom-up*, path-dependent Almgren-Chriss model (whose five parameters Kissell argues are hard to estimate stably). The book is the applied counterpart to the theory texts **Cartea-Jaimungal-Penalva (2015)** and **Guéant (2016)**: they derive the optimal strategy from a posited impact SDE; Kissell estimates the impact from data and operationalizes the decision.`,
      id: `Buku-nya sintesis praktisi dari tradisi transaction-cost-analysis. **Perold (1988)** ngedefinisiin *implementation shortfall* — paper return dikurang actual return — benchmark yang TCA dibangun di sekitarnya. **Almgren-Chriss (2000)** nyediain *efficient trading frontier* (minimize market impact plus kelipatan risk-aversion dari timing risk), trade-off cost-lawan-risk yang buku-nya operasionalin; Kissell eksplisit nge-extend dia (sama Glantz dan Malamut, 2004) dengan nambah term alpha/drift dan objektif alternatif. Garis keturunan market-impact-nya lewat **Kyle (1985)** (price impact) dan dekomposisi temporer/permanen. Langkah Kissell sendiri itu metodologis: model **I-Star** itu model cost-allocation *top-down* — estimasi total instantaneous cost dari seluruh order dari regresi di data nyata, terus alokasiin dia lintas jadwal trade — sengaja dikontraskan sama model Almgren-Chriss yang *bottom-up*, path-dependent (yang lima parameternya Kissell argumenkan susah diestimasi secara stabil). Buku-nya counterpart terapan ke teks teori **Cartea-Jaimungal-Penalva (2015)** dan **Guéant (2016)**: mereka nurunin strategi optimal dari impact SDE yang diposit; Kissell ngestimasi impact dari data dan ngoperasionalin keputusannya.`
    },
    keyCollaborators: {
      en: `**Morton Glantz** is Kissell's longest-standing co-author — *Optimal Trading Strategies* (2003) and *Multi-Asset Risk Modeling* (2013). **Roberto Malamut** is the co-namesake of the **Kissell-Malamut I-Star** model and a contributor to the 2003 book and the 2004 *Finance Research Letters* framework paper. The intellectual antecedents the book builds on are **André Perold** (implementation shortfall), **Robert Almgren and Neil Chriss** (the efficient trading frontier), and **Wayne Wagner**, whom Kissell credits as an originator of transaction-cost analysis. The theory counterparts whose work formalizes what Kissell estimates are **Cartea-Jaimungal-Penalva** and **Olivier Guéant**.`,
      id: `**Morton Glantz** itu co-author Kissell yang paling lama — *Optimal Trading Strategies* (2003) dan *Multi-Asset Risk Modeling* (2013). **Roberto Malamut** itu co-namesake model **Kissell-Malamut I-Star** dan kontributor ke buku 2003 dan paper framework *Finance Research Letters* 2004. Antesedan intelektual yang buku-nya bangun di atasnya itu **André Perold** (implementation shortfall), **Robert Almgren dan Neil Chriss** (efficient trading frontier), dan **Wayne Wagner**, yang Kissell kreditin sebagai pencetus transaction-cost analysis. Counterpart teori yang kerjanya ngeformalin apa yang Kissell estimasi itu **Cartea-Jaimungal-Penalva** dan **Olivier Guéant**.`
    },
    legacy: {
      en: `Kissell's book is a standard buy-side reference for transaction-cost analysis and execution. Its enduring contributions: (1) it operationalized **TCA** — the unbundling of trading cost into measurable components within the implementation-shortfall framework — into a discipline a desk can run pre-trade, intra-trade, and post-trade, and use to hold brokers and algorithms accountable; (2) it popularized the **I-Star** market-impact model, a deliberately *estimable* power-function cost model (impact in basis points as a function of size, volatility, and trading rate) that bridges the gap between academic impact theory and a number a trader can actually compute before sending an order; and (3) it framed algorithm choice as a *decision* — match VWAP/TWAP/POV/IS to the order's objective, alpha, and urgency, rather than by habit — and pushed trading cost upstream into **portfolio construction**, so the optimizer accounts for what a position will cost to build. Its limits are the flip side of its strengths: the I-Star parameters are empirically calibrated and drift across regimes, regions, and market-cap (they are not universal constants), the perm/temp split is weakly identified, and the book is applied rather than rigorous — it estimates and operationalizes rather than proves optimality. Read it alongside **Almgren-Chriss** and **Cartea-Jaimungal-Penalva / Guéant** for the theory it operationalizes, and **Bouchaud et al.** for the empirics of the impact law it calibrates. For "what does trading cost and how do I manage it," this is a first-stop practitioner reference.`,
      id: `Buku Kissell itu rujukan buy-side standar buat transaction-cost analysis dan eksekusi. Kontribusi awetnya: (1) dia ngoperasionalin **TCA** — png-unbundle-an biaya trading jadi komponen yang bisa diukur di dalam framework implementation-shortfall — jadi disiplin yang desk bisa jalanin pre-trade, intra-trade, dan post-trade, dan dipake buat ngeholdin broker dan algoritma akuntabel; (2) dia mempopulerin model market-impact **I-Star**, model biaya power-function yang sengaja *bisa-diestimasi* (impact dalam basis poin sebagai fungsi ukuran, volatility, dan trading rate) yang ngejembatanin gap antara teori impact akademik dan angka yang trader beneran bisa komputasi sebelum ngirim order; dan (3) dia ngeframe pilihan algoritma sebagai *keputusan* — cocokin VWAP/TWAP/POV/IS ke objektif, alpha, dan urgency order, daripada karena kebiasaan — dan ndorong trading cost ke hulu ke **portfolio construction**, biar optimizer-nya ngitung apa yang sebuah posisi bakal biayain buat dibangun. Batasnya itu sisi lain dari kekuatannya: parameter I-Star dikalibrasi empiris dan drift lintas regime, region, dan market-cap (mereka bukan konstanta universal), split perm/temp lemah teridentifikasi, dan buku-nya terapan bukan rigorous — dia ngestimasi dan ngoperasionalin daripada ngebuktiin optimalitas. Baca dia bareng **Almgren-Chriss** dan **Cartea-Jaimungal-Penalva / Guéant** buat teori yang dia operasionalin, dan **Bouchaud et al.** buat empiris hukum impact yang dia kalibrasi. Buat "trading biayanya berapa dan gimana aku ngaturnya," ini rujukan praktisi pertama yang dituju.`
    },
    keyWorks: [
      { year: 2013, title: 'The Science of Algorithmic Trading and Portfolio Management (this item)', venue: 'Academic Press / Elsevier' },
      { year: 2003, title: 'Optimal Trading Strategies: Quantitative Approaches for Managing Market Impact and Trading Risk (Kissell & Glantz)', venue: 'AMACOM' },
      { year: 2004, title: 'A Practical Framework for Estimating Transaction Costs and Developing Optimal Trading Strategies to Achieve Best Execution (Kissell, Glantz & Malamut)', venue: 'Finance Research Letters' },
      { year: 2013, title: 'Multi-Asset Risk Modeling (Glantz & Kissell)', venue: 'Academic Press / Elsevier' },
      { year: 2021, title: 'Algorithmic Trading Methods (2nd edition; successor to this book)', venue: 'Academic Press / Elsevier' },
    ],
  },

  sections: [
    // ─────────────── 1. motivation ───────────────
    {
      id: 'motivation',
      heading: { en: 'Why this matters', id: 'Kenapa ini penting' },
      body: {
        en: `The last two modules — Cartea-Jaimungal-Penalva and Guéant — answer "what is the *optimal* trading strategy, given a posited market-impact model?" with stochastic control and closed-form HJB solutions. This module answers the question that comes *before* that one, and the question a working desk actually asks first: **what does trading actually cost, how do I measure it, and how do I pick an algorithm to manage it?**

Robert Kissell's *The Science of Algorithmic Trading and Portfolio Management* (2013) is a leading practitioner reference for exactly that. It is empirical and applied where the theory texts are mathematical: instead of deriving optimality from a price-impact SDE, it teaches you to **estimate real costs from real trade data** and operationalize the cost-versus-risk decision on a live desk.

Three pillars hold up the book:

- **Transaction-cost analysis (TCA).** Trading is not free, and the cost has many parts — commissions, spreads, delay, market impact, timing risk, opportunity cost. The book unbundles them inside the **implementation-shortfall** framework (paper return minus actual return) so that execution quality can be *measured* and *attributed* to the portfolio manager, the trader, the broker, and the algorithm. You cannot improve what you cannot measure.
- **The I-Star market-impact model.** The analytical core: an empirically-calibrated power function that estimates expected market-impact cost (in basis points) from an order's size, the stock's volatility, and the trading rate — a number you can compute *before* you trade, split into permanent and temporary pieces.
- **The decision framework.** Given a forecast cost and risk, *which algorithm?* The trader's dilemma — trade fast and pay impact, or trade slow and bear timing risk — is the Almgren-Chriss efficient frontier, here turned into a practical procedure for choosing among VWAP, TWAP, POV, and implementation-shortfall strategies to fit an order's objective, alpha, and urgency.

If the theory texts tell you the optimal strategy *exists and has this shape*, Kissell tells you how to *measure the inputs, compute the cost, choose the algorithm, and grade the result*. It is the bridge from the equations to the desk.`,
        id: `Dua modul terakhir — Cartea-Jaimungal-Penalva dan Guéant — ngejawab "apa strategi trading yang *optimal*, dikasih model market-impact yang diposit?" dengan stochastic control dan solusi HJB closed-form. Modul ini ngejawab pertanyaan yang datang *sebelum* itu, dan pertanyaan yang desk yang bekerja beneran tanya duluan: **trading sebenernya biayanya berapa, gimana aku ngukurnya, dan gimana aku milih algoritma buat ngaturnya?**

*The Science of Algorithmic Trading and Portfolio Management* (2013)-nya Robert Kissell itu salah satu rujukan praktisi utama buat persis itu. Dia empiris dan terapan di mana teks teori-nya matematis: daripada nurunin optimalitas dari price-impact SDE, dia ngajarin kamu **ngestimasi biaya nyata dari data trade nyata** dan ngoperasionalin keputusan cost-lawan-risk di desk live.

Tiga pilar nyangga buku-nya:

- **Transaction-cost analysis (TCA).** Trading gak gratis, dan biayanya punya banyak bagian — komisi, spread, delay, market impact, timing risk, opportunity cost. Buku-nya nge-unbundle mereka di dalam framework **implementation-shortfall** (paper return dikurang actual return) biar kualitas eksekusi bisa *diukur* dan *diatribusiin* ke portfolio manager, trader, broker, dan algoritma. Kamu gak bisa ngebaikin apa yang gak bisa kamu ukur.
- **Model market-impact I-Star.** Inti analitisnya: power function yang dikalibrasi empiris yang ngestimasi expected market-impact cost (dalam basis poin) dari ukuran order, volatility saham, dan trading rate — angka yang bisa kamu komputasi *sebelum* kamu trade, dibelah jadi bagian permanen dan temporer.
- **Framework keputusan.** Dikasih forecast cost dan risk, *algoritma yang mana?* Trader's dilemma — trade cepet dan bayar impact, atau trade lambat dan nanggung timing risk — itu efficient frontier Almgren-Chriss, di sini diubah jadi prosedur praktis buat milih antara strategi VWAP, TWAP, POV, dan implementation-shortfall buat cocok sama objektif, alpha, dan urgency order.

Kalau teks teori ngasih tau kamu strategi optimal itu *ada dan punya bentuk ini*, Kissell ngasih tau kamu gimana *ngukur input-nya, ngomputasi cost-nya, milih algoritma-nya, dan ngenilai hasilnya*. Dia jembatan dari persamaan ke desk.`
      }
    },

    // ─────────────── 2. intuition ───────────────
    {
      id: 'intuition',
      heading: { en: 'Intuition', id: 'Intuisi' },
      body: {
        en: `Three practitioner ideas carry the book.

**You cannot manage a cost you cannot measure.** The headline metric is **implementation shortfall**: the gap between the "paper" return of a portfolio that traded instantly and costlessly at the decision price, and the *actual* return after real execution. That gap is the true all-in cost of turning an idea into a position, and the book's first job is to **unbundle** it — into delay cost (price drift between decision and order release), market impact (your own trading moving the price), timing risk (volatility on the unexecuted part), spreads, commissions, and opportunity cost (the profit missed on shares you never filled). The point of unbundling is *attribution*: it lets you say which part of the cost belongs to the portfolio manager's hesitation, which to the trader's strategy, which to the broker's algorithm — and therefore who to hold accountable and what to improve.

**Estimate the cost; don't just posit it.** Almgren-Chriss and the theory texts *assume* an impact model and derive the optimal strategy. Kissell does the opposite: he *estimates* the impact model from real trade data. The **I-Star** model is a power function — expected impact (in basis points) rises with order size (as a fraction of average daily volume), with volatility, and with how fast you trade — whose parameters are fit by regression on actual executions. The philosophy is that a model you can calibrate and compute beats an elegant model whose parameters you cannot pin down. (Kissell's recurring critique of the bottom-up Almgren-Chriss form is precisely that its parameters are hard to estimate stably.)

**Choosing an algorithm is a decision, not a habit.** The trader's dilemma — trade fast and pay market impact, or trade slow and bear timing risk — is the Almgren-Chriss efficient frontier. Kissell turns it into a procedure: pick the benchmark (arrival price, VWAP, close), state the goal (minimize cost, or cost subject to a risk limit), and choose the algorithm that fits. The recurring lesson is that the right algorithm follows from the order's *objective, alpha, and urgency* — not from familiarity with a product name. A clean special case: if you have **no alpha view**, minimizing expected cost means trading as passively as possible across the day, which is essentially a **VWAP** strategy; a strong, urgent alpha pushes you toward front-loaded, arrival-price (implementation-shortfall) trading instead.`,
        id: `Tiga ide praktisi nyangga buku-nya.

**Kamu gak bisa ngatur biaya yang gak bisa kamu ukur.** Metrik headline-nya itu **implementation shortfall**: gap antara return "paper" dari portfolio yang trade instan dan tanpa-biaya di decision price, dan return *aktual* setelah eksekusi nyata. Gap itu biaya all-in sebenarnya dari ngubah ide jadi posisi, dan tugas pertama buku-nya itu **nge-unbundle** dia — jadi delay cost (drift harga antara keputusan dan release order), market impact (trading-mu sendiri nggerakin harga), timing risk (volatility di bagian yang belum dieksekusi), spread, komisi, dan opportunity cost (profit yang kelewat di share yang gak pernah kamu fill). Poin unbundling itu *atribusi*: dia ngebolehin kamu bilang bagian biaya mana yang punya hesitasi portfolio manager, mana yang strategi trader, mana yang algoritma broker — dan karenanya siapa yang dimintai tanggung jawab dan apa yang diperbaiki.

**Estimasi cost-nya; jangan cuma diposit.** Almgren-Chriss dan teks teori *nganggep* model impact dan nurunin strategi optimal. Kissell ngelakuin sebaliknya: dia *ngestimasi* model impact dari data trade nyata. Model **I-Star** itu power function — expected impact (dalam basis poin) naik dengan ukuran order (sebagai fraksi dari average daily volume), dengan volatility, dan dengan seberapa cepet kamu trade — yang parameternya di-fit dengan regresi di eksekusi aktual. Filosofinya itu model yang bisa kamu kalibrasi dan komputasi ngalahin model elegan yang parameternya gak bisa kamu pin down. (Kritik berulang Kissell ke bentuk bottom-up Almgren-Chriss itu persis bahwa parameternya susah diestimasi stabil.)

**Milih algoritma itu keputusan, bukan kebiasaan.** Trader's dilemma — trade cepet dan bayar market impact, atau trade lambat dan nanggung timing risk — itu efficient frontier Almgren-Chriss. Kissell ngubahnya jadi prosedur: pilih benchmark (arrival price, VWAP, close), nyatain goal (minimize cost, atau cost subject ke batas risk), dan pilih algoritma yang cocok. Pelajaran berulangnya itu bahwa algoritma yang bener ngikut dari *objektif, alpha, dan urgency* order — bukan dari familiaritas sama nama produk. Kasus khusus yang bersih: kalau kamu **gak punya pandangan alpha**, ngeminimalin expected cost berarti trading se-pasif mungkin sepanjang hari, yang esensialnya strategi **VWAP**; alpha yang kuat dan urgent ndorong kamu ke trading front-loaded, arrival-price (implementation-shortfall) sebaliknya.`
      }
    },

    // ─────────────── 3. formalization ───────────────
    {
      id: 'formalization',
      heading: { en: 'The model, formalized', id: 'Modelnya, diformalkan' },
      body: {
        en: `**Implementation shortfall (Perold 1988).** The all-in cost is the paper return minus the actual return. The book expands it into attributable pieces — using the *decision* price $P_d$, the *arrival* price $P_0$ (when the order reaches the market), and the *final* price $P_n$: a **delay** component $S(P_0-P_d)$ (drift before trading starts), a **trading** component $\\sum_j s_j(\\bar P - P_0)$ (impact and timing on the executed shares at average fill $\\bar P$), and an **opportunity** component $(S-\\sum_j s_j)(P_n-P_0)$ (the missed move on unexecuted shares), plus fees. This decomposition is what makes execution quality measurable across the PM, trader, broker, and algorithm.

**The I-Star market-impact model (Kissell-Malamut).** The analytical core estimates the **instantaneous impact** $I^*$ — the cost in basis points if the entire order were executed immediately — as a power function:

$$I^* = a_1\\left(\\frac{Q}{\\text{ADV}}\\right)^{a_2}\\sigma^{a_3}\\quad\\text{(bps)},$$

where $Q/\\text{ADV}$ is order size as a fraction of average daily volume, $\\sigma$ is annualized volatility, and $a_1,a_2,a_3$ are fit by nonlinear regression on real executions (representative, illustrative parameter values in the I-Star spirit: $a_1\\approx 708$, $a_2\\approx 0.55$, $a_3\\approx 0.71$ — empirically calibrated, not universal, and other published calibrations differ, e.g. $a_1\\approx 750$, $a_3\\approx 0.9$; $a_2$ is a **concave, sub-linear** power in size that Kissell calibrates empirically and deliberately does NOT pin to $1/2$; the fitted exponent varies by dataset/region, and the √-impact "law" is a *separate* econophysics result (Almgren / Bouchaud), not the I-Star claim). The realized **market impact** then depends on how fast you trade, through the participation rate (POV):

$$\\text{MI} = \\underbrace{b_1\\,I^*\\,\\text{POV}^{a_4}}_{\\text{temporary}} + \\underbrace{(1-b_1)\\,I^*}_{\\text{permanent}}.$$

Here $b_1$ is the **temporary** fraction (the strategy-dependent liquidity premium, which grows with trading speed via $\\text{POV}^{a_4}$, $a_4\\approx 0.5$), and $(1-b_1)$ is the **permanent** fraction (the information cost, independent of how you trade). At $\\text{POV}=100\\%$ the temporary term hits $b_1 I^*$ and total impact equals $I^*$; trading slower (lower POV) reduces impact. Crucially, all of $a_1,a_2,a_3,a_4,b_1$ are *empirically calibrated* — they are not universal constants and drift across market-cap, region, side, and regime.

**The trader's dilemma and the efficient frontier.** Trading slower cuts market impact but raises **timing risk** — exposure to volatility on the not-yet-executed shares, roughly $\\text{TR}\\propto\\sigma\\sqrt{\\text{Size}\\cdot(1-\\text{POV})/\\text{POV}}$. The optimal strategy minimizes $\\text{MI} + \\lambda\\,\\text{TR}$ for a risk-aversion $\\lambda$, tracing the **efficient trading frontier** — exactly the Almgren-Chriss construct, here operationalized with an empirically estimated impact function (and, in Kissell-Glantz-Malamut 2004, extended with an alpha term and objectives such as maximizing the trade's information ratio).`,
        id: `**Implementation shortfall (Perold 1988).** Biaya all-in itu paper return dikurang actual return. Buku-nya ngembanginnya jadi bagian yang bisa diatribusiin — pakai harga *decision* $P_d$, harga *arrival* $P_0$ (pas order nyampe market), dan harga *final* $P_n$: komponen **delay** $S(P_0-P_d)$ (drift sebelum trading mulai), komponen **trading** $\\sum_j s_j(\\bar P - P_0)$ (impact dan timing di share yang dieksekusi di fill rata-rata $\\bar P$), dan komponen **opportunity** $(S-\\sum_j s_j)(P_n-P_0)$ (move yang kelewat di share yang gak dieksekusi), plus fee. Dekomposisi ini yang bikin kualitas eksekusi bisa diukur lintas PM, trader, broker, dan algoritma.

**Model market-impact I-Star (Kissell-Malamut).** Inti analitisnya ngestimasi **instantaneous impact** $I^*$ — biaya dalam basis poin kalau seluruh order dieksekusi langsung — sebagai power function:

$$I^* = a_1\\left(\\frac{Q}{\\text{ADV}}\\right)^{a_2}\\sigma^{a_3}\\quad\\text{(bps)},$$

di mana $Q/\\text{ADV}$ itu ukuran order sebagai fraksi dari average daily volume, $\\sigma$ itu volatility annualized, dan $a_1,a_2,a_3$ di-fit dengan nonlinear regression di eksekusi nyata (nilai parameter representatif dan ilustratif dalam semangat I-Star: $a_1\\approx 708$, $a_2\\approx 0.55$, $a_3\\approx 0.71$ — dikalibrasi empiris, bukan universal, dan kalibrasi terpublikasi lain beda, mis. $a_1\\approx 750$, $a_3\\approx 0.9$; $a_2$ itu power **konkaf, sub-linear** di ukuran yang Kissell kalibrasi empiris dan sengaja TIDAK dipatok ke $1/2$; eksponen yang ter-fit bervariasi lintas dataset/region, dan "hukum" √-impact itu hasil econophysics *terpisah* (Almgren / Bouchaud), bukan klaim I-Star). **Market impact** yang terealisasi terus tergantung seberapa cepet kamu trade, lewat participation rate (POV):

$$\\text{MI} = \\underbrace{b_1\\,I^*\\,\\text{POV}^{a_4}}_{\\text{temporer}} + \\underbrace{(1-b_1)\\,I^*}_{\\text{permanen}}.$$

Di sini $b_1$ itu fraksi **temporer** (premium likuiditas yang strategy-dependent, yang tumbuh dengan kecepatan trading via $\\text{POV}^{a_4}$, $a_4\\approx 0.5$), dan $(1-b_1)$ itu fraksi **permanen** (biaya informasi, independen dari gimana kamu trade). Di $\\text{POV}=100\\%$ term temporer-nya nyampe $b_1 I^*$ dan total impact sama dengan $I^*$; trading lebih lambat (POV lebih rendah) ngurangin impact. Krusial, semua $a_1,a_2,a_3,a_4,b_1$ itu *dikalibrasi empiris* — mereka bukan konstanta universal dan drift lintas market-cap, region, side, dan regime.

**Trader's dilemma dan efficient frontier.** Trading lebih lambat motong market impact tapi naikin **timing risk** — exposure ke volatility di share yang belum dieksekusi, kira-kira $\\text{TR}\\propto\\sigma\\sqrt{\\text{Size}\\cdot(1-\\text{POV})/\\text{POV}}$. Strategi optimal-nya ngeminimalin $\\text{MI} + \\lambda\\,\\text{TR}$ buat risk-aversion $\\lambda$, ngegambar **efficient trading frontier** — persis konstruk Almgren-Chriss, di sini dioperasionalin dengan fungsi impact yang diestimasi empiris (dan, di Kissell-Glantz-Malamut 2004, di-extend dengan term alpha dan objektif kayak ngemaksimalin information ratio trade-nya).`
      }
    },

    // ─────────────── 4. worked-example ───────────────
    {
      id: 'worked-example',
      heading: { en: 'Worked example', id: 'Contoh kerjaan' },
      body: {
        en: `**Estimating the cost of an order with I-Star.** Use a representative, illustrative I-Star parameter set: $a_1=708$, $a_2=0.55$, $a_3=0.71$, $a_4=0.50$, $b_1=0.98$. (These are *empirically calibrated*, not universal — treat them as illustrative estimates in the I-Star spirit; other published calibrations differ.)

**The order.** Buy 200,000 shares of a USD 50 stock with average daily volume ADV = 2,000,000 shares — so the order is **10% of ADV** ($Q/\\text{ADV}=0.10$) — at annualized volatility $\\sigma = 0.30$ (30%), executed at a participation rate $\\text{POV}=0.20$ (20% of volume).

**Step 1 — instantaneous impact $I^*$:**

$$I^* = 708\\,(0.10)^{0.55}\\,(0.30)^{0.71} = 708 \\times 0.2818 \\times 0.4254 \\approx 84.9\\ \\text{bps}.$$

That is the cost *if you slammed the whole order in at once* (POV = 100%).

**Step 2 — split into temporary and permanent via the participation rate:**

- Temporary: $b_1\\,I^*\\,\\text{POV}^{a_4} = 0.98 \\times 84.9 \\times (0.20)^{0.5} = 0.98 \\times 84.9 \\times 0.447 \\approx 37.2$ bps.
- Permanent: $(1-b_1)\\,I^* = 0.02 \\times 84.9 \\approx 1.7$ bps.
- **Market impact** $\\text{MI} \\approx 37.2 + 1.7 = 38.9$ bps.

**Step 3 — convert to money.** $38.9$ bps $= 0.00389$, so $0.00389 \\times \\text{USD }50 \\approx \\text{USD }0.19$ per share, or about **USD 38,900** on the USD 10,000,000 notional. Trading at 20% of volume rather than all at once cut the impact from $\\approx 84.9$ bps to $\\approx 38.9$ bps.

**Step 4 — the speed dial.** Re-running the temporary term at different participation rates shows the trader's dilemma in numbers (same order, MI in bps): POV 5% → ~20; 10% → ~28; 20% → ~39; 40% → ~54; 100% → ~85. Faster trading (higher POV) raises impact along the $\\text{POV}^{0.5}$ curve, while the permanent 1.7 bps stays put. But trading slower raises **timing risk** — so the desk picks the POV (the point on the efficient frontier) that best trades impact against risk for this order's urgency.

The takeaway: I-Star turns "how much will this trade cost?" into a number you compute *before* trading — from estimable inputs (size, volatility, speed) — and shows exactly how that number moves as you change how aggressively you trade.`,
        id: `**Ngestimasi biaya sebuah order dengan I-Star.** Pakai satu set parameter I-Star yang representatif dan ilustratif: $a_1=708$, $a_2=0.55$, $a_3=0.71$, $a_4=0.50$, $b_1=0.98$. (Ini *dikalibrasi empiris*, bukan universal — perlakuin sebagai estimasi ilustratif dalam semangat I-Star; kalibrasi terpublikasi lain beda.)

**Order-nya.** Beli 200.000 share saham USD 50 dengan average daily volume ADV = 2.000.000 share — jadi order-nya **10% dari ADV** ($Q/\\text{ADV}=0.10$) — di volatility annualized $\\sigma = 0.30$ (30%), dieksekusi di participation rate $\\text{POV}=0.20$ (20% dari volume).

**Langkah 1 — instantaneous impact $I^*$:**

$$I^* = 708\\,(0.10)^{0.55}\\,(0.30)^{0.71} = 708 \\times 0.2818 \\times 0.4254 \\approx 84.9\\ \\text{bps}.$$

Itu biaya *kalau kamu hantam seluruh order sekaligus* (POV = 100%).

**Langkah 2 — belah jadi temporer dan permanen via participation rate:**

- Temporer: $b_1\\,I^*\\,\\text{POV}^{a_4} = 0.98 \\times 84.9 \\times (0.20)^{0.5} = 0.98 \\times 84.9 \\times 0.447 \\approx 37.2$ bps.
- Permanen: $(1-b_1)\\,I^* = 0.02 \\times 84.9 \\approx 1.7$ bps.
- **Market impact** $\\text{MI} \\approx 37.2 + 1.7 = 38.9$ bps.

**Langkah 3 — konversi ke uang.** $38.9$ bps $= 0.00389$, jadi $0.00389 \\times \\text{USD }50 \\approx \\text{USD }0.19$ per share, atau sekitar **USD 38.900** di notional USD 10.000.000. Trading di 20% volume daripada semua sekaligus motong impact dari $\\approx 84.9$ bps ke $\\approx 38.9$ bps.

**Langkah 4 — dial kecepatan-nya.** Ngejalanin ulang term temporer di participation rate berbeda nunjukin trader's dilemma dalam angka (order yang sama, MI dalam bps): POV 5% → ~20; 10% → ~28; 20% → ~39; 40% → ~54; 100% → ~85. Trading lebih cepet (POV lebih tinggi) naikin impact sepanjang kurva $\\text{POV}^{0.5}$, sementara 1.7 bps permanen-nya tetep. Tapi trading lebih lambat naikin **timing risk** — jadi desk milih POV (titik di efficient frontier) yang paling baik nuker impact lawan risk buat urgency order ini.

Intinya: I-Star ngubah "trade ini biayanya berapa?" jadi angka yang kamu komputasi *sebelum* trading — dari input yang bisa diestimasi (ukuran, volatility, kecepatan) — dan nunjukin persis gimana angka itu gerak pas kamu ngubah seberapa agresif kamu trade.`
      }
    },

    // ─────────────── 5. applications ───────────────
    {
      id: 'applications',
      heading: { en: 'Applications', id: 'Aplikasi' },
      body: {
        en: `**The TCA loop.** The book's core deliverable is a working transaction-cost-analysis process across three stages: **pre-trade** (forecast the cost and risk of an order with I-Star, and choose a strategy), **intra-trade** (monitor against the forecast and adapt), and **post-trade** (measure realized cost versus benchmarks and grade the execution). This is how a desk demonstrates *best execution* — and how it holds brokers and algorithms accountable with data rather than anecdote.

**Benchmark and algorithm selection.** The book is a practical guide to choosing the right benchmark (arrival price, VWAP, close) and the right algorithm (VWAP, TWAP, POV, implementation shortfall) for an order — driven by its objective, alpha, and urgency. A no-alpha order minimizing cost → VWAP-style passive trading; an urgent, alpha-driven order → arrival-price / implementation-shortfall front-loading. Post-trade, the same benchmarks (VWAP, participation-weighted price, arrival cost) become the scorecard.

**Cost-aware portfolio construction.** The book's second half pushes trading cost *upstream* into the portfolio decision: a Markowitz-style optimizer that ignores what a position costs to build will over-weight illiquid names. Embedding the I-Star cost (and its asymmetry — large positions are expensive to enter *and* exit) directly into the optimization yields portfolios that are actually implementable, and reframes TCA as a source of *incremental alpha* (capacity, liquidation cost, MI factor scores).

**Where it sits.** Reach for **Kissell** when you need to *measure* and *manage* real trading costs and run TCA on a desk; reach for **Cartea-Jaimungal-Penalva** or **Guéant** for the rigorous theory of the optimal strategy it operationalizes, and **Bouchaud et al.** for the empirics of the impact law it calibrates.

**The honest caveats.** The I-Star parameters are *estimated*, not given — they drift across regimes, regions, side, and market-cap, and must be recalibrated; the permanent/temporary split is weakly identified (the data barely pin down $b_1$); and the model tends to over-estimate cost for very large orders. It is an applied handbook: it estimates and operationalizes rather than proving optimality, and (like its peers) it stops at the model, not the trading-system engineering.`,
        id: `**Loop TCA-nya.** Deliverable inti buku-nya itu proses transaction-cost-analysis yang bekerja lintas tiga tahap: **pre-trade** (forecast cost dan risk sebuah order dengan I-Star, dan pilih strategi), **intra-trade** (monitor lawan forecast dan adaptasi), dan **post-trade** (ukur realized cost lawan benchmark dan nilai eksekusinya). Ini gimana desk nunjukin *best execution* — dan gimana dia ngeholdin broker dan algoritma akuntabel dengan data daripada anekdot.

**Pemilihan benchmark dan algoritma.** Buku-nya panduan praktis buat milih benchmark yang bener (arrival price, VWAP, close) dan algoritma yang bener (VWAP, TWAP, POV, implementation shortfall) buat sebuah order — digerakin sama objektif, alpha, dan urgency-nya. Order no-alpha yang ngeminimalin cost → trading pasif gaya-VWAP; order urgent yang alpha-driven → front-loading arrival-price / implementation-shortfall. Post-trade, benchmark yang sama (VWAP, participation-weighted price, arrival cost) jadi scorecard-nya.

**Portfolio construction yang cost-aware.** Separuh kedua buku-nya ndorong trading cost ke *hulu* ke keputusan portfolio: optimizer gaya-Markowitz yang ngabaikan apa yang sebuah posisi biayain buat dibangun bakal over-weight nama illiquid. Ngetanam biaya I-Star (dan asimetrinya — posisi gede mahal buat dimasukin *dan* dikeluarin) langsung ke optimisasi ngehasilin portfolio yang beneran implementable, dan nge-reframe TCA sebagai sumber *incremental alpha* (capacity, liquidation cost, MI factor score).

**Di mana dia duduk.** Raih **Kissell** pas kamu perlu *ngukur* dan *ngatur* trading cost nyata dan ngejalanin TCA di desk; raih **Cartea-Jaimungal-Penalva** atau **Guéant** buat teori rigorous dari strategi optimal yang dia operasionalin, dan **Bouchaud et al.** buat empiris hukum impact yang dia kalibrasi.

**Caveat jujurnya.** Parameter I-Star itu *diestimasi*, bukan dikasih — mereka drift lintas regime, region, side, dan market-cap, dan harus dikalibrasi ulang; split permanen/temporer lemah teridentifikasi (data-nya nyaris gak nge-pin-down $b_1$); dan model-nya cenderung over-estimasi cost buat order yang sangat gede. Dia handbook terapan: dia ngestimasi dan ngoperasionalin daripada ngebuktiin optimalitas, dan (kayak peer-nya) dia berhenti di model, bukan engineering trading-system.`
      }
    },

    // ─────────────── 6. practice ───────────────
    {
      id: 'practice',
      heading: { en: 'Practice', id: 'Latihan' },
      body: {
        en: `**1.** Using the I-Star fit ($a_1=708$, $a_2=0.55$, $a_3=0.71$), estimate the instantaneous impact $I^*$ for an order that is **4% of ADV** ($Q/\\text{ADV}=0.04$) in a stock with annualized volatility $\\sigma=0.40$. (Use $0.04^{0.55}\\approx 0.170$ and $0.40^{0.71}\\approx 0.522$.)

<details><summary>Answer</summary>
$I^* = 708 \\times 0.04^{0.55} \\times 0.40^{0.71} \\approx 708 \\times 0.170 \\times 0.522 \\approx 63$ bps. That is the cost if the whole order were executed instantly; the realized market impact at any sensible participation rate is lower (the temporary part is scaled down by $\\text{POV}^{a_4}<1$). Note the order is smaller (4% vs the worked example's 10% of ADV) but the volatility is higher (40% vs 30%), and the two effects partly offset.
</details>

**2.** For that order, the permanent fraction is $(1-b_1)$ with $b_1=0.98$. Compute the market impact at $\\text{POV}=10\\%$ versus $\\text{POV}=40\\%$ (use $a_4=0.5$, so $0.10^{0.5}\\approx 0.316$ and $0.40^{0.5}\\approx 0.632$), and say what the difference between the two represents.

<details><summary>Answer</summary>
Permanent $=(1-0.98)\\times 63 \\approx 1.3$ bps (the same at any speed). Temporary at POV 10% $=0.98\\times 63\\times 0.316\\approx 19.5$ bps → MI $\\approx 20.8$ bps; at POV 40% $=0.98\\times 63\\times 0.632\\approx 39.0$ bps → MI $\\approx 40.3$ bps. The difference (~19.5 bps) is *purely temporary impact*: the extra liquidity premium you pay for demanding immediacy by trading four times faster. The permanent 1.3 bps — the information content of the trade — is unchanged. This is the trader's dilemma in action: faster execution costs more impact but less timing risk.
</details>

**3.** A quant index fund must rebalance into a basket with **no short-term alpha view** and a tolerance for trading across the whole day. A separate desk has a **strong, time-sensitive signal** that a stock will rise today. Which execution benchmark/algorithm fits each, and why?

<details><summary>Answer</summary>
The index rebalance has no alpha and no urgency, so the goal is simply to minimize expected cost — which means trading as *passively* as possible over the horizon, i.e. a **VWAP** (or scheduled/POV) strategy that follows the day's volume and does not chase price. The alpha desk must capture the move *before it happens*, so timing risk dominates impact: it should trade *aggressively against the arrival price* — an **implementation-shortfall / arrival-price** algorithm that front-loads to reduce exposure to the predicted move, accepting higher market impact to cut timing risk. Same toolkit, opposite ends of the efficient frontier, selected by objective + alpha + urgency.
</details>

**4.** Kissell's I-Star is a "top-down" model; Almgren-Chriss is "bottom-up." Explain the difference and why Kissell argues the top-down approach is more practical.

<details><summary>Answer</summary>
**Bottom-up (Almgren-Chriss):** specify temporary and permanent impact *functions* for each slice of trading, then the cost of the whole order emerges from the chosen sequence of trades — the cost is built up from a path-dependent model with several parameters. **Top-down (I-Star):** first estimate the *total* instantaneous cost $I^*$ of the entire order from a regression on real data, then allocate it across the trade schedule via the participation rate. Kissell's argument for top-down is *estimability*: the bottom-up model's several parameters are hard to identify stably from data, whereas the I-Star power-function form (a handful of regression coefficients on size, volatility, and speed) can be calibrated reliably to real executions and computed before every order. The trade-off: top-down is an empirical cost-allocation rule rather than a derived-optimal trajectory, so it pairs naturally with the Almgren-Chriss frontier for *choosing* the schedule.
</details>`,
        id: `**1.** Pakai fit I-Star ($a_1=708$, $a_2=0.55$, $a_3=0.71$), estimasi instantaneous impact $I^*$ buat order yang **4% dari ADV** ($Q/\\text{ADV}=0.04$) di saham dengan volatility annualized $\\sigma=0.40$. (Pakai $0.04^{0.55}\\approx 0.170$ dan $0.40^{0.71}\\approx 0.522$.)

<details><summary>Jawaban</summary>
$I^* = 708 \\times 0.04^{0.55} \\times 0.40^{0.71} \\approx 708 \\times 0.170 \\times 0.522 \\approx 63$ bps. Itu biaya kalau seluruh order dieksekusi langsung; market impact yang terealisasi di participation rate yang masuk akal lebih rendah (bagian temporer-nya di-scale turun sama $\\text{POV}^{a_4}<1$). Perhatiin order-nya lebih kecil (4% vs 10% dari ADV di worked example) tapi volatility-nya lebih tinggi (40% vs 30%), dan dua efek itu sebagian saling offset.
</details>

**2.** Buat order itu, fraksi permanen-nya $(1-b_1)$ dengan $b_1=0.98$. Komputasi market impact di $\\text{POV}=10\\%$ versus $\\text{POV}=40\\%$ (pakai $a_4=0.5$, jadi $0.10^{0.5}\\approx 0.316$ dan $0.40^{0.5}\\approx 0.632$), dan sebutin apa yang beda antara keduanya representasiin.

<details><summary>Jawaban</summary>
Permanen $=(1-0.98)\\times 63 \\approx 1.3$ bps (sama di kecepatan apa pun). Temporer di POV 10% $=0.98\\times 63\\times 0.316\\approx 19.5$ bps → MI $\\approx 20.8$ bps; di POV 40% $=0.98\\times 63\\times 0.632\\approx 39.0$ bps → MI $\\approx 40.3$ bps. Bedanya (~19.5 bps) itu *murni temporary impact*: premium likuiditas ekstra yang kamu bayar buat nuntut immediacy dengan trading empat kali lebih cepet. 1.3 bps permanen — konten informasi trade-nya — gak berubah. Ini trader's dilemma in action: eksekusi lebih cepet biaya impact lebih banyak tapi timing risk lebih sedikit.
</details>

**3.** Sebuah quant index fund harus rebalance ke basket dengan **tanpa pandangan alpha jangka-pendek** dan toleransi buat trading sepanjang hari. Desk terpisah punya **sinyal yang kuat dan time-sensitive** bahwa sebuah saham bakal naik hari ini. Benchmark/algoritma eksekusi mana yang cocok buat masing-masing, dan kenapa?

<details><summary>Jawaban</summary>
Rebalance index gak punya alpha dan gak urgent, jadi goal-nya cuma ngeminimalin expected cost — yang berarti trading se-*pasif* mungkin sepanjang horizon, yaitu strategi **VWAP** (atau scheduled/POV) yang ngikut volume hari dan gak ngejar harga. Desk alpha harus nangkep move-nya *sebelum dia terjadi*, jadi timing risk dominasi impact: dia harusnya trade *agresif lawan arrival price* — algoritma **implementation-shortfall / arrival-price** yang front-load buat ngurangin exposure ke move yang diprediksi, nerima market impact lebih tinggi buat motong timing risk. Toolkit yang sama, ujung berlawanan dari efficient frontier, dipilih sama objektif + alpha + urgency.
</details>

**4.** I-Star-nya Kissell itu model "top-down"; Almgren-Chriss itu "bottom-up." Jelasin bedanya dan kenapa Kissell argumen pendekatan top-down lebih praktis.

<details><summary>Jawaban</summary>
**Bottom-up (Almgren-Chriss):** nyatain *fungsi* impact temporer dan permanen buat tiap slice trading, terus biaya seluruh order muncul dari urutan trade yang dipilih — biayanya dibangun dari model path-dependent dengan beberapa parameter. **Top-down (I-Star):** pertama estimasi *total* instantaneous cost $I^*$ dari seluruh order dari regresi di data nyata, terus alokasiin dia lintas jadwal trade via participation rate. Argumen Kissell buat top-down itu *estimabilitas*: beberapa parameter model bottom-up susah diidentifikasi stabil dari data, sementara bentuk power-function I-Star (segelintir koefisien regresi di ukuran, volatility, dan kecepatan) bisa dikalibrasi reliabel ke eksekusi nyata dan dikomputasi sebelum tiap order. Trade-off-nya: top-down itu aturan cost-allocation empiris daripada trajectory yang derived-optimal, jadi dia pasangan natural sama frontier Almgren-Chriss buat *milih* jadwalnya.
</details>`
      }
    },

    // ─────────────── 7. connections ───────────────
    {
      id: 'connections',
      heading: { en: 'Connections', id: 'Koneksi' },
      body: {
        en: `- **Operationalizes**: [Almgren-Chriss 2000](item:almgren-chriss-2000) — the efficient trading frontier (impact vs timing risk) and implementation-shortfall idea are the backbone Kissell turns into a desk procedure, with the I-Star model as the estimable alternative to AC's path-dependent impact.
- **Foundations**: [Kyle 1985](item:kyle-1985) supplies the price-impact primitive the I-Star cost models; [Hasbrouck 2007](item:hasbrouck-2007) provides the empirical-microstructure vocabulary (effective spread, price discovery, cost measurement) TCA presupposes.
- **Theory companions**: [Cartea-Jaimungal-Penalva 2015](item:cartea-jaimungal-penalva) and [Guéant 2016](item:gueant-2016) derive, via stochastic control, the optimal strategies Kissell estimates and operationalizes — Kissell is the applied bridge to their theory.
- **Impact empirics**: [Cont-Kukanov-Stoikov 2014](item:cont-kukanov-stoikov-2014) (order-flow imbalance) and [Bouchaud et al. 2018](item:bouchaud-bonart-donier-gould-2018) (the square-root impact law) are the high-frequency / econophysics evidence behind the nonlinear impact curves the I-Star model calibrates.
- **Builds toward**: cost-aware portfolio optimization, multi-asset cost indices, and the machine-learning-augmented second edition (*Algorithmic Trading Methods*, 2021).`,
        id: `- **Ngoperasionalin**: [Almgren-Chriss 2000](item:almgren-chriss-2000) — efficient trading frontier (impact vs timing risk) dan ide implementation-shortfall itu tulang punggung yang Kissell ubah jadi prosedur desk, dengan model I-Star sebagai alternatif yang bisa-diestimasi ke impact path-dependent AC.
- **Fondasi**: [Kyle 1985](item:kyle-1985) nyediain primitif price-impact yang I-Star modelin biayanya; [Hasbrouck 2007](item:hasbrouck-2007) nyediain kosakata empirical-microstructure (effective spread, price discovery, pengukuran cost) yang TCA andalkan.
- **Pendamping teori**: [Cartea-Jaimungal-Penalva 2015](item:cartea-jaimungal-penalva) dan [Guéant 2016](item:gueant-2016) nurunin, via stochastic control, strategi optimal yang Kissell estimasi dan operasionalin — Kissell jembatan terapan ke teori mereka.
- **Empiris impact**: [Cont-Kukanov-Stoikov 2014](item:cont-kukanov-stoikov-2014) (order-flow imbalance) dan [Bouchaud et al. 2018](item:bouchaud-bonart-donier-gould-2018) (hukum impact akar-kuadrat) itu bukti high-frequency / econophysics di balik kurva impact nonlinear yang model I-Star kalibrasi.
- **Builds toward**: portfolio optimization yang cost-aware, multi-asset cost index, dan edisi kedua yang di-augmentasi machine-learning (*Algorithmic Trading Methods*, 2021).`
      }
    },

    // ─────────────── 8. sources ───────────────
    {
      id: 'sources',
      heading: { en: 'Sources', id: 'Sumber' },
      body: {
        en: `- **Kissell, R.** (2013). *The Science of Algorithmic Trading and Portfolio Management*. Academic Press / Elsevier. A leading practitioner reference on TCA, the I-Star market-impact model, and execution-algorithm selection. **(This item.)**
- **Almgren, R., and Chriss, N.** (2000). "Optimal Execution of Portfolio Transactions." *Journal of Risk*, 3(2), 5-39. The efficient trading frontier the book operationalizes.
- **Perold, A. F.** (1988). "The Implementation Shortfall: Paper versus Reality." *The Journal of Portfolio Management*, 14(3), 4-9. The implementation-shortfall benchmark TCA is built around.
- **Kissell, R., and Glantz, M.** (2003). *Optimal Trading Strategies: Quantitative Approaches for Managing Market Impact and Trading Risk*. AMACOM. Kissell's earlier practitioner book and the I-Star precursor.
- **Cartea, Á., Jaimungal, S., and Penalva, J.** (2015). *Algorithmic and High-Frequency Trading*. Cambridge University Press. The theory companion — the rigorous optimal-execution counterpart.`,
        id: `- **Kissell, R.** (2013). *The Science of Algorithmic Trading and Portfolio Management*. Academic Press / Elsevier. Salah satu rujukan praktisi utama soal TCA, model market-impact I-Star, dan pemilihan execution-algorithm. **(Item ini.)**
- **Almgren, R., dan Chriss, N.** (2000). "Optimal Execution of Portfolio Transactions." *Journal of Risk*, 3(2), 5-39. Efficient trading frontier yang buku-nya operasionalin.
- **Perold, A. F.** (1988). "The Implementation Shortfall: Paper versus Reality." *The Journal of Portfolio Management*, 14(3), 4-9. Benchmark implementation-shortfall yang TCA dibangun di sekitarnya.
- **Kissell, R., dan Glantz, M.** (2003). *Optimal Trading Strategies: Quantitative Approaches for Managing Market Impact and Trading Risk*. AMACOM. Buku praktisi Kissell sebelumnya dan prekursor I-Star.
- **Cartea, Á., Jaimungal, S., dan Penalva, J.** (2015). *Algorithmic and High-Frequency Trading*. Cambridge University Press. Pendamping teori — counterpart optimal-execution yang rigorous.`
      }
    },
  ],

  audio: { enabled: true },

  selfTest: [
    {
      sectionId: 'intuition',
      question: {
        en: 'What is implementation shortfall, and why does Kissell unbundle it into separate cost components rather than reporting a single number?',
        id: 'Apa itu implementation shortfall, dan kenapa Kissell nge-unbundle dia jadi komponen biaya terpisah daripada ngelaporin satu angka?'
      },
      prompt: { en: 'Before continuing, try answering:', id: 'Sebelum lanjut, coba jawab:' },
      answer: {
        en: 'Implementation shortfall is the gap between the "paper" return of a portfolio that traded instantly and costlessly at the decision price and the actual return after real execution — the true all-in cost of turning an investment idea into a position. Kissell unbundles it into delay cost, market impact, timing risk, spreads, commissions, and opportunity cost because the components have different owners and different remedies: delay belongs to the portfolio manager (hesitation between decision and order release), market impact and timing risk to the trader/algorithm, commissions to the broker, opportunity cost to unexecuted shares. The point is attribution — you can only measure execution quality, hold the right party accountable, and improve the process if you can see which part of the cost came from where. A single number tells you the cost but not what to fix.',
        id: 'Implementation shortfall itu gap antara return "paper" dari portfolio yang trade instan dan tanpa-biaya di decision price dan return aktual setelah eksekusi nyata — biaya all-in sebenarnya dari ngubah ide investasi jadi posisi. Kissell nge-unbundle dia jadi delay cost, market impact, timing risk, spread, komisi, dan opportunity cost karena komponennya punya pemilik berbeda dan remedy berbeda: delay punya portfolio manager (hesitasi antara keputusan dan release order), market impact dan timing risk punya trader/algoritma, komisi punya broker, opportunity cost punya share yang gak dieksekusi. Poin-nya atribusi — kamu cuma bisa ngukur kualitas eksekusi, ngeholdin pihak yang bener akuntabel, dan ngebaikin proses kalau kamu bisa liat bagian biaya mana datang dari mana. Satu angka ngasih tau kamu biayanya tapi bukan apa yang harus diperbaiki.'
      }
    },
    {
      sectionId: 'formalization',
      question: {
        en: 'In the I-Star model, what does I* represent, and how does the realized market impact MI split into permanent and temporary parts as a function of the participation rate (POV)?',
        id: 'Di model I-Star, apa yang I* representasiin, dan gimana realized market impact MI belah jadi bagian permanen dan temporer sebagai fungsi dari participation rate (POV)?'
      },
      prompt: { en: 'Before continuing, try answering:', id: 'Sebelum lanjut, coba jawab:' },
      answer: {
        en: 'I* is the instantaneous (or "theoretical instantaneous") impact — the expected cost in basis points if the entire order were executed all at once (POV = 100%) — estimated as a power function I* = a1·(Q/ADV)^a2·σ^a3 of order size, volatility, and the parameters fit by regression. The realized market impact is MI = b1·I*·POV^a4 + (1−b1)·I*, where b1 is the TEMPORARY fraction: the first term is the strategy-dependent temporary (liquidity) cost that grows with trading speed via POV^a4, and the second, (1−b1)·I*, is the PERMANENT (information) cost that is independent of how you trade. Trading faster (higher POV) raises only the temporary part; at POV = 100% the temporary term reaches b1·I* and total impact equals I*. So slowing down reduces impact — but raises timing risk, which is the trader\'s dilemma.',
        id: 'I* itu instantaneous (atau "theoretical instantaneous") impact — expected cost dalam basis poin kalau seluruh order dieksekusi sekaligus (POV = 100%) — diestimasi sebagai power function I* = a1·(Q/ADV)^a2·σ^a3 dari ukuran order, volatility, dan parameter yang di-fit dengan regresi. Realized market impact-nya MI = b1·I*·POV^a4 + (1−b1)·I*, di mana b1 itu fraksi TEMPORER: term pertama itu biaya temporer (likuiditas) yang strategy-dependent yang tumbuh dengan kecepatan trading via POV^a4, dan yang kedua, (1−b1)·I*, itu biaya PERMANEN (informasi) yang independen dari gimana kamu trade. Trading lebih cepet (POV lebih tinggi) cuma naikin bagian temporer; di POV = 100% term temporer-nya nyampe b1·I* dan total impact sama dengan I*. Jadi ngelambat ngurangin impact — tapi naikin timing risk, yang itu trader\'s dilemma.'
      }
    },
    {
      sectionId: 'formalization',
      question: {
        en: 'What is the "trader\'s dilemma," and how does it connect Kissell\'s practitioner framework to Almgren-Chriss?',
        id: 'Apa itu "trader\'s dilemma," dan gimana dia ngehubungin framework praktisi Kissell ke Almgren-Chriss?'
      },
      prompt: { en: 'Before continuing, try answering:', id: 'Sebelum lanjut, coba jawab:' },
      answer: {
        en: 'The trader\'s dilemma is the trade-off between market impact and timing risk: trading fast pushes the price against you (more impact) but gets you done quickly (less exposure to volatility), while trading slow reduces impact but leaves the unexecuted position exposed to adverse price moves (more timing risk). You cannot minimize both at once. Kissell formalizes the choice as minimizing MI + λ·TR for a risk-aversion parameter λ, which traces an efficient trading frontier of cost versus risk — and this is exactly the Almgren-Chriss construct. Kissell\'s contribution is to operationalize it: he supplies the empirically estimated I-Star impact function and timing-risk formula that make the frontier computable for a real order, and (with Glantz and Malamut) extends it with an alpha term and objectives like maximizing the trade\'s information ratio. So the practitioner framework and the theory share the same backbone — the frontier — with Kissell estimating the inputs the theory assumes.',
        id: 'Trader\'s dilemma itu trade-off antara market impact dan timing risk: trading cepet ndorong harga melawanmu (impact lebih banyak) tapi nyelesain kamu cepet (exposure ke volatility lebih sedikit), sementara trading lambat ngurangin impact tapi ninggalin posisi yang belum dieksekusi ke-expose ke pergerakan harga adverse (timing risk lebih banyak). Kamu gak bisa ngeminimalin keduanya sekaligus. Kissell ngeformalin pilihannya sebagai ngeminimalin MI + λ·TR buat parameter risk-aversion λ, yang ngegambar efficient trading frontier soal cost lawan risk — dan ini persis konstruk Almgren-Chriss. Kontribusi Kissell itu ngoperasionalin dia: dia nyediain fungsi impact I-Star yang diestimasi empiris dan formula timing-risk yang bikin frontier-nya bisa dikomputasi buat order nyata, dan (sama Glantz dan Malamut) nge-extend dia dengan term alpha dan objektif kayak ngemaksimalin information ratio trade-nya. Jadi framework praktisi dan teori-nya berbagi tulang punggung yang sama — frontier-nya — dengan Kissell ngestimasi input yang teori-nya anggep.'
      }
    },
    {
      sectionId: 'applications',
      question: {
        en: 'What does Kissell\'s practitioner approach add beyond the theory texts (Cartea-Jaimungal-Penalva, Guéant)? Name at least three things.',
        id: 'Apa yang pendekatan praktisi Kissell tambah di luar teks teori (Cartea-Jaimungal-Penalva, Guéant)? Sebutin minimal tiga hal.'
      },
      prompt: { en: 'Before continuing, try answering:', id: 'Sebelum lanjut, coba jawab:' },
      answer: {
        en: '(1) Cost measurement / TCA — it turns trading cost into a measurable, attributable quantity (implementation shortfall unbundled into components) that a desk can compute pre-, intra-, and post-trade, demonstrate best execution with, and use to hold brokers and algorithms accountable. (2) Empirical estimation — instead of positing an impact model and deriving optimality, it estimates the impact model (I-Star) from real trade data, giving a cost number you can actually compute before trading; it teaches calibration, parameter sign/robustness checks, and the limits of estimation. (3) Operational decision-making — it frames algorithm choice (VWAP/TWAP/POV/IS) as a decision driven by objective, alpha, and urgency, and pushes trading cost upstream into portfolio construction so the optimizer accounts for what positions cost to build. In short: the theory texts say what the optimal strategy is; Kissell tells you how to measure the inputs, estimate the cost, choose the algorithm, and grade the result.',
        id: '(1) Pengukuran cost / TCA — dia ngubah trading cost jadi kuantitas yang bisa diukur dan diatribusiin (implementation shortfall di-unbundle jadi komponen) yang desk bisa komputasi pre-, intra-, dan post-trade, dipake nunjukin best execution, dan dipake ngeholdin broker dan algoritma akuntabel. (2) Estimasi empiris — daripada nge-posit model impact dan nurunin optimalitas, dia ngestimasi model impact (I-Star) dari data trade nyata, ngasih angka cost yang beneran bisa kamu komputasi sebelum trading; dia ngajarin kalibrasi, cek tanda/robustness parameter, dan batas estimasi. (3) Pengambilan-keputusan operasional — dia ngeframe pilihan algoritma (VWAP/TWAP/POV/IS) sebagai keputusan yang digerakin objektif, alpha, dan urgency, dan ndorong trading cost ke hulu ke portfolio construction biar optimizer-nya ngitung apa yang posisi biayain buat dibangun. Pendeknya: teks teori bilang strategi optimal-nya apa; Kissell ngasih tau kamu gimana ngukur input-nya, ngestimasi cost-nya, milih algoritma-nya, dan ngenilai hasilnya.'
      }
    },
  ],
};
