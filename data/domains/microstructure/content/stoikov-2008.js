export const CONTENT = {
  itemId: 'stoikov-2008',
  estimatedReadMinutes: 40,

  author: {
    fullName: { en: 'Marco Avellaneda & Sasha Stoikov', id: 'Marco Avellaneda & Sasha Stoikov' },
    affiliation: {
      en: 'Avellaneda (1955–2022): Professor of Mathematics and Director of the Division of Financial Mathematics, Courant Institute, New York University. Stoikov: Senior Research Associate, Cornell Financial Engineering Manhattan.',
      id: 'Avellaneda (1955–2022): Professor of Mathematics dan Director of the Division of Financial Mathematics, Courant Institute, New York University. Stoikov: Senior Research Associate, Cornell Financial Engineering Manhattan.'
    },
    tagline: {
      en: 'The first continuous-time, stochastic-control answer to "where should a market maker actually quote?" — optimal bid and ask as a spread around an inventory-skewed reservation price, trading off spread capture against inventory risk.',
      id: 'Jawaban continuous-time stochastic-control pertama buat "di mana market maker harusnya quote?" — optimal bid dan ask sebagai spread di sekitar reservation price yang di-skew sama inventory, nge-trade-off spread capture lawan inventory risk.'
    },
    bio: {
      en: `Marco Avellaneda (1955–2022) was Professor of Mathematics at NYU's Courant Institute and Director of its Division of Financial Mathematics. Born in Argentina, he took his PhD in mathematics at the University of Minnesota (1985) and spent his career at Courant, with industry stints at Banque Indosuez and Morgan Stanley. He is best known for the Uncertain Volatility Model (Avellaneda-Levy-Parás 1995) for option pricing, and for foundational work on statistical arbitrage, correlation trading, and automated market-making. He was RISK Magazine's Quant of the Year in 2010, and co-founded the advisory firm Finance Concepts with Rama Cont and Nicole El Karoui. He passed away in June 2022; the quant community widely mourned him as a teacher and bridge between rigorous mathematics and trading practice.

Sasha Stoikov (see the OFI module, Cont-Kukanov-Stoikov) is a Senior Research Associate at Cornell Financial Engineering Manhattan, with a PhD from the University of Texas and industry HFT experience at Cantor Fitzgerald. His research centers on limit-order-book dynamics and optimal market-making — this 2008 paper with Avellaneda is his most-cited work, and he later co-authored the order-flow-imbalance (OFI) price-impact study (Cont-Kukanov-Stoikov 2014) and introduced the "micro-price".

The 2008 collaboration married Avellaneda's stochastic-control rigor with Stoikov's microstructure focus to produce what is now the canonical optimal-market-making model — short, elegant, and immediately useful to anyone running an automated quoting strategy.`,
      id: `Marco Avellaneda (1955–2022) adalah Professor of Mathematics di Courant Institute NYU dan Director of its Division of Financial Mathematics. Lahir di Argentina, dia ambil PhD matematika di University of Minnesota (1985) dan menghabiskan karirnya di Courant, dengan stint industri di Banque Indosuez dan Morgan Stanley. Dia paling dikenal buat Uncertain Volatility Model (Avellaneda-Levy-Parás 1995) buat option pricing, dan buat kerja foundational di statistical arbitrage, correlation trading, dan automated market-making. Dia Quant of the Year RISK Magazine 2010, dan co-found firma advisory Finance Concepts sama Rama Cont dan Nicole El Karoui. Dia meninggal Juni 2022; komunitas quant luas berduka atas dia sebagai guru dan jembatan antara matematika rigorous dan praktik trading.

Sasha Stoikov (lihat modul OFI, Cont-Kukanov-Stoikov) adalah Senior Research Associate di Cornell Financial Engineering Manhattan, dengan PhD dari University of Texas dan pengalaman HFT industri di Cantor Fitzgerald. Risetnya fokus di dinamika limit-order-book dan optimal market-making — paper 2008 sama Avellaneda ini kerja paling sering disitir-nya, dan dia kemudian co-author studi price-impact order-flow-imbalance (OFI) (Cont-Kukanov-Stoikov 2014) dan ngenalin "micro-price".

Kolaborasi 2008 nikahin rigor stochastic-control Avellaneda sama fokus microstructure Stoikov buat ngehasilin yang sekarang jadi model optimal-market-making kanon — pendek, elegan, dan langsung berguna buat siapa pun yang jalanin automated quoting strategy.`
    },
    focus: {
      en: `How a market maker should set its bid and ask, moment to moment, to maximize expected utility of terminal wealth while controlling inventory risk. The model is a continuous-time stochastic-control problem: the mid-price diffuses, market orders arrive at the MM's quotes with an intensity that decays the further the quote sits from the mid, and the MM holds a risky inventory it would rather not accumulate. Two clean results drop out — a *reservation price* (the MM's inventory-adjusted indifference price) and an *optimal spread* around it — that together prescribe exactly where to quote and how the quotes should skew as inventory builds.`,
      id: `Gimana market maker harusnya set bid dan ask-nya, moment ke moment, buat memaksimalkan expected utility of terminal wealth sambil ngontrol inventory risk. Model-nya continuous-time stochastic-control problem: mid-price berdifusi, market order datang ke quote MM dengan intensity yang decay makin jauh quote dari mid, dan MM nahan inventory berisiko yang sebenernya gak mau diakumulasi. Dua hasil bersih keluar — *reservation price* (indifference price MM yang inventory-adjusted) dan *optimal spread* di sekitarnya — yang bareng nge-prescribe persis di mana quote dan gimana quote harusnya skew pas inventory naik.`
    },
    intellectualLineage: {
      en: `The economic ancestor is **Ho-Stoll (1981)**, which first framed dealer quoting as an inventory-control problem under return uncertainty. Avellaneda-Stoikov brought modern stochastic-control machinery (an HJB equation, exponential/CARA utility) and an explicit order-arrival model to that idea, yielding closed-form-enough quotes. It is the complement to the Glosten-Milgrom line: where GM explains the spread as compensation for *adverse selection* (information risk), Avellaneda-Stoikov explains quoting as management of *inventory risk* (price risk on undesired positions). Both are pillars of why and how spreads exist. Downstream, **Guéant-Lehalle-Fernández-Tapia (2013)** turned the asymptotic AS solution into a fully closed-form one and made the inventory bounds rigorous, and the whole framework is the base layer onto which modern desks bolt toxicity signals (VPIN, OFI) to make the fixed-intensity assumption adaptive.`,
      id: `Ancestor ekonominya **Ho-Stoll (1981)**, yang pertama nge-frame dealer quoting sebagai inventory-control problem di bawah return uncertainty. Avellaneda-Stoikov bawa machinery stochastic-control modern (HJB equation, exponential/CARA utility) dan model order-arrival eksplisit ke ide itu, ngehasilin quote yang cukup closed-form. Dia komplemen ke line Glosten-Milgrom: di mana GM ngejelasin spread sebagai kompensasi *adverse selection* (information risk), Avellaneda-Stoikov ngejelasin quoting sebagai manajemen *inventory risk* (price risk di posisi yang gak diinginkan). Dua-duanya pilar dari kenapa dan gimana spread ada. Downstream, **Guéant-Lehalle-Fernández-Tapia (2013)** ngubah solusi asimtotik AS jadi sepenuhnya closed-form dan bikin inventory bound-nya rigorous, dan seluruh framework-nya jadi base layer tempat desk modern nempelin sinyal toxicity (VPIN, OFI) buat bikin asumsi fixed-intensity-nya adaptif.`
    },
    keyCollaborators: {
      en: `**Each other.** Avellaneda's other landmark is the **Uncertain Volatility Model** (with Arnon Levy and Antonio Parás, 1995). The most important successor is **Olivier Guéant, Charles-Albert Lehalle & Joaquin Fernández-Tapia (2013)**, the closed-form solution of the market-making problem. **Ho & Stoll (1981)** is the inventory-model ancestor. On the practitioner side, the model is the spine of the **Cartea-Jaimungal-Penalva (2015)** textbook treatment and of countless production quoting engines (including the open-source Hummingbot implementation). Stoikov's own later work — order flow imbalance (with Cont and Kukanov, 2014) and the micro-price — closes the loop: the imbalance/toxicity signal that should make an AS quoter widen.`,
      id: `**Satu sama lain.** Landmark lain Avellaneda itu **Uncertain Volatility Model** (sama Arnon Levy dan Antonio Parás, 1995). Successor paling penting itu **Olivier Guéant, Charles-Albert Lehalle & Joaquin Fernández-Tapia (2013)**, solusi closed-form dari market-making problem. **Ho & Stoll (1981)** itu ancestor inventory-model-nya. Di sisi praktisi, model-nya jadi tulang punggung treatment textbook **Cartea-Jaimungal-Penalva (2015)** dan tak terhitung production quoting engine (termasuk implementasi open-source Hummingbot). Kerja Stoikov sendiri kemudian — order flow imbalance (sama Cont dan Kukanov, 2014) dan micro-price — nutup loop: sinyal imbalance/toxicity yang harusnya bikin AS quoter melebar.`
    },
    legacy: {
      en: `Avellaneda-Stoikov is the de facto base layer of modern automated market-making. The two outputs — an inventory-skewed reservation price and a spread that decomposes into an inventory-risk term plus a microstructure term — are how practitioners *think* about quoting, even when their production model is more elaborate. Its assumptions (arithmetic-Brownian mid, exponential order-arrival intensity, CARA utility) are simplifications, and most of the model's evolution has been about relaxing them: closed-form solutions (Guéant et al.), market-impact and adverse-selection extensions, multi-asset and multi-venue versions, and — crucially — making the order-arrival intensity *state-dependent* on real-time toxicity (VPIN/OFI) rather than constant. But the core intuition has proven durable: quote symmetrically around your true (inventory-adjusted) value, widen with risk and horizon, and skew to bleed off inventory. Nearly every "optimal market-making" course, library, or trading-bot tutorial starts here.`,
      id: `Avellaneda-Stoikov itu base layer de facto dari automated market-making modern. Dua output-nya — reservation price yang inventory-skewed dan spread yang terurai jadi inventory-risk term plus microstructure term — itu gimana praktisi *mikirin* quoting, bahkan pas production model mereka lebih rumit. Asumsi-asumsinya (arithmetic-Brownian mid, exponential order-arrival intensity, CARA utility) itu simplifikasi, dan sebagian besar evolusi model-nya tentang nge-relax mereka: solusi closed-form (Guéant dkk.), extension market-impact dan adverse-selection, versi multi-asset dan multi-venue, dan — krusial — bikin order-arrival intensity *state-dependent* ke real-time toxicity (VPIN/OFI) daripada konstan. Tapi intuisi inti-nya terbukti awet: quote simetris di sekitar true value (inventory-adjusted)-mu, melebar sama risk dan horizon, dan skew buat ngebuang inventory. Hampir tiap course, library, atau trading-bot tutorial "optimal market-making" mulai dari sini.`
    },
    keyWorks: [
      { year: 2008, title: 'High-Frequency Trading in a Limit Order Book (this item)', venue: 'Quantitative Finance' },
      { year: 1995, title: 'Pricing and Hedging Derivative Securities in Markets with Uncertain Volatilities (UVM; Avellaneda, Levy & Parás)', venue: 'Applied Mathematical Finance' },
      { year: 2013, title: 'Dealing with the Inventory Risk: A Solution to the Market Making Problem (Guéant, Lehalle & Fernández-Tapia)', venue: 'Mathematics and Financial Economics' },
      { year: 1981, title: 'Optimal Dealer Pricing under Transactions and Return Uncertainty (Ho & Stoll)', venue: 'Journal of Financial Economics' },
    ],
  },

  sections: [
    // ─────────────── 1. motivation ───────────────
    {
      id: 'motivation',
      heading: { en: 'Why this matters', id: 'Kenapa ini penting' },
      body: {
        en: `The previous models in this domain answer *why* spreads exist and *when* flow is dangerous. Glosten-Milgrom: spreads compensate for adverse selection. Kyle: order flow has price impact $\\lambda$. OFI and VPIN: here is how to *measure*, in real time, that flow is turning one-sided and toxic. None of them answers the question a market maker actually faces every microsecond: **given all that, where exactly do I put my bid and my ask right now?**

That question is hard because the MM is caught between two opposing pressures:

- **Quote tight to capture flow.** The closer your quotes are to the mid, the more often they get hit, and the more spread you earn per unit time.
- **Quote wide (and skewed) to control inventory.** Every fill leaves you holding a position. Inventory is *risky*: while you hold it, the price can move against you. A market maker is not trying to take directional bets — it wants to earn the spread and stay flat. So it must avoid accumulating a large one-sided inventory.

Before 2008 there was no usable, continuous-time model that balanced these with the modern stochastic-control toolkit. Ho-Stoll (1981) rigorously framed the inventory problem but predated that machinery and the explicit order-arrival model. Avellaneda and Stoikov (2008) solved it cleanly as a **stochastic-control problem**: write down the MM's wealth and inventory as they evolve, assume the MM maximizes the expected utility of its terminal wealth (with risk aversion that penalizes inventory variance), and solve for the optimal bid and ask.

Two beautifully interpretable objects fall out:

1. A **reservation price** $r(s, q, t)$ — the MM's own inventory-adjusted "fair value," which sits *below* the mid when it is long (it would like to sell) and *above* the mid when it is short.
2. An **optimal spread** to quote around that reservation price, which splits into an *inventory-risk* piece (grows with volatility, risk aversion, and time remaining) and a *market-microstructure* piece (set by how order arrivals respond to quote placement).

The operational payoff is enormous: this is the model that, in some elaborated form, sits behind or informs a large share of automated market-making engines. It tells you not just how wide to quote, but how to lean your quotes to manage the position you are forced to take.`,
        id: `Model-model sebelumnya di domain ini ngejawab *kenapa* spread ada dan *kapan* flow berbahaya. Glosten-Milgrom: spread kompensasi adverse selection. Kyle: order flow punya price impact $\\lambda$. OFI dan VPIN: ini cara *ngukur*, real-time, bahwa flow lagi jadi one-sided dan toxic. Gak ada dari mereka yang ngejawab pertanyaan yang market maker beneran hadapi tiap mikrodetik: **given semua itu, di mana persisnya aku naro bid dan ask-ku sekarang?**

Pertanyaan itu susah karena MM terjepit antara dua tekanan berlawanan:

- **Quote ketat buat nangkep flow.** Makin deket quote-mu ke mid, makin sering ke-hit, dan makin banyak spread yang kamu dapet per unit waktu.
- **Quote lebar (dan di-skew) buat ngontrol inventory.** Tiap fill ninggalin kamu nahan posisi. Inventory itu *berisiko*: selama kamu nahan, harga bisa gerak melawan kamu. Market maker gak coba ambil directional bet — dia mau dapet spread dan tetep flat. Jadi dia harus hindarin akumulasi inventory one-sided yang gede.

Sebelum 2008 gak ada model usable continuous-time yang nyeimbangin ini dengan toolkit stochastic-control modern. Ho-Stoll (1981) udah nge-frame inventory problem-nya secara rigorous tapi mendahului machinery itu dan model order-arrival eksplisit. Avellaneda dan Stoikov (2008) nyelesainnya dengan bersih sebagai **stochastic-control problem**: tulis wealth dan inventory MM saat berevolusi, assume MM memaksimalkan expected utility of terminal wealth-nya (dengan risk aversion yang nge-penalize inventory variance), dan solve buat optimal bid dan ask.

Dua objek yang indah-interpretable keluar:

1. **Reservation price** $r(s, q, t)$ — "fair value" MM yang inventory-adjusted, yang duduk *di bawah* mid pas dia long (dia mau jual) dan *di atas* mid pas dia short.
2. **Optimal spread** buat di-quote di sekitar reservation price itu, yang terbelah jadi potongan *inventory-risk* (tumbuh sama volatility, risk aversion, dan waktu tersisa) dan potongan *market-microstructure* (di-set sama gimana order arrival merespons penempatan quote).

Payoff operasionalnya besar: ini model yang, dalam bentuk yang dielaborasi, ada di balik atau nginformasiin sebagian besar automated market-making engine. Dia kasih tau bukan cuma seberapa lebar quote, tapi gimana nyondongin quote buat ngatur posisi yang terpaksa kamu ambil.`
      }
    },

    // ─────────────── 2. intuition ───────────────
    {
      id: 'intuition',
      heading: { en: 'Intuition', id: 'Intuisi' },
      body: {
        en: `Two ideas carry the whole model.

**1. The reservation price — your value, not the market's.** Suppose the mid is USD 100 and you are flat. Your fair value is USD 100; you would quote symmetrically, say bid USD 99.15 / ask USD 100.85. Now suppose a string of buyers lifts your ask and you are suddenly **long 5 units**. You did not want this position — and while you hold it, you are exposed to a price drop. So *your* indifference value of the asset is now a bit *below* USD 100: you would happily sell at slightly under the mid just to get flat. The model formalizes this as the reservation price

$$r(s, q, t) = s - q\\,\\gamma\\,\\sigma^2 (T - t),$$

which drops below the mid in proportion to your inventory $q$, your risk aversion $\\gamma$, the variance $\\sigma^2$, and the time $T-t$ you are still exposed. Long → reservation below mid → you quote lower (eager to sell, reluctant to buy). Short → reservation above mid → you quote higher. The quotes *lean* to push your inventory back toward zero. This is the single most important practical behaviour the model produces.

**2. The optimal spread — wide enough to be paid, tight enough to trade.** Around the reservation price you post a bid and an ask. How far out? Two forces set it. Quote too tight and you fill constantly but earn almost nothing per trade and pile up inventory; quote too wide and you rarely trade. The model's order-arrival assumption — a market order reaches a quote sitting distance $\\delta$ from the mid with intensity $\\lambda(\\delta) = A e^{-\\kappa\\delta}$ (exponentially less likely the further out you are) — pins down the trade-off. The optimal total spread comes out as

$$\\delta^a + \\delta^b = \\gamma\\sigma^2(T-t) + \\frac{2}{\\gamma}\\ln\\!\\left(1 + \\frac{\\gamma}{\\kappa}\\right).$$

Read the two pieces. The first, $\\gamma\\sigma^2(T-t)$, is an **inventory-risk premium**: quote wider when you are more risk-averse, when the asset is more volatile, and when you have more time left to be caught holding a position (it shrinks to zero at the close $t=T$). The second, $\\frac{2}{\\gamma}\\ln(1+\\gamma/\\kappa)$, is a **microstructure term** set by the order book's liquidity: a denser book (large $\\kappa$, fills cluster near the mid) means you can quote tighter; a thin book (small $\\kappa$) lets you quote wider and still get filled.

Put them together: *center on your inventory-skewed value, then quote a spread that is wide when risk is high and the book is thin, narrow when risk is low and the book is deep.* That is the entire prescription.`,
        id: `Dua ide bawa seluruh model.

**1. Reservation price — value kamu, bukan market.** Misal mid USD 100 dan kamu flat. Fair value kamu USD 100; kamu quote simetris, misal bid USD 99.15 / ask USD 100.85. Sekarang misal serangkaian buyer ngangkat ask-mu dan kamu tiba-tiba **long 5 unit**. Kamu gak mau posisi ini — dan selama kamu nahan, kamu ke-expose ke price drop. Jadi value indifference *kamu* atas aset sekarang sedikit *di bawah* USD 100: kamu dengan senang hati jual di bawah mid dikit cuma buat jadi flat. Model nge-formalize ini sebagai reservation price

$$r(s, q, t) = s - q\\,\\gamma\\,\\sigma^2 (T - t),$$

yang turun di bawah mid proporsional ke inventory $q$, risk aversion $\\gamma$, variance $\\sigma^2$, dan waktu $T-t$ yang masih ke-expose. Long → reservation di bawah mid → kamu quote lebih rendah (semangat jual, enggan beli). Short → reservation di atas mid → kamu quote lebih tinggi. Quote-nya *condong* buat ndorong inventory balik ke nol. Ini behaviour praktis paling penting yang model hasilkan.

**2. Optimal spread — cukup lebar buat dibayar, cukup ketat buat trade.** Di sekitar reservation price kamu pasang bid dan ask. Seberapa jauh? Dua gaya nge-set-nya. Quote terlalu ketat dan kamu fill terus tapi dapet hampir gak ada per trade dan numpuk inventory; quote terlalu lebar dan kamu jarang trade. Asumsi order-arrival model — market order nyampe ke quote yang duduk jarak $\\delta$ dari mid dengan intensity $\\lambda(\\delta) = A e^{-\\kappa\\delta}$ (eksponensial makin gak mungkin makin jauh) — nge-pin trade-off-nya. Optimal total spread keluar sebagai

$$\\delta^a + \\delta^b = \\gamma\\sigma^2(T-t) + \\frac{2}{\\gamma}\\ln\\!\\left(1 + \\frac{\\gamma}{\\kappa}\\right).$$

Baca dua potongnya. Yang pertama, $\\gamma\\sigma^2(T-t)$, itu **inventory-risk premium**: quote lebih lebar pas kamu lebih risk-averse, pas aset lebih volatile, dan pas kamu punya lebih banyak waktu tersisa buat ketangkep nahan posisi (dia menyusut ke nol di close $t=T$). Yang kedua, $\\frac{2}{\\gamma}\\ln(1+\\gamma/\\kappa)$, itu **microstructure term** yang di-set sama liquidity order book: book yang lebih padat (large $\\kappa$, fill ngumpul deket mid) berarti kamu bisa quote lebih ketat; book tipis (small $\\kappa$) ngebolehin kamu quote lebih lebar dan tetep ke-fill.

Gabungin: *center di value inventory-skewed-mu, lalu quote spread yang lebar pas risk tinggi dan book tipis, sempit pas risk rendah dan book dalam.* Itu seluruh resepnya.`
      }
    },

    // ─────────────── 3. formalization ───────────────
    {
      id: 'formalization',
      heading: { en: 'Formal model', id: 'Model formal' },
      body: {
        en: `**Setup.** The mid-price follows an arithmetic Brownian motion:

$$dS_t = \\sigma\\, dW_t.$$

The market maker quotes a bid at $S_t - \\delta^b$ and an ask at $S_t + \\delta^a$. Market sell orders hit the bid and market buy orders lift the ask; the arrival of an order at a quote placed distance $\\delta$ from the mid is a Poisson process with intensity

$$\\lambda(\\delta) = A\\, e^{-\\kappa \\delta}.$$

Each fill changes the inventory $q$ by $\\pm 1$ and the cash by the execution price. The MM has CARA (exponential) utility over terminal wealth at horizon $T$ with risk-aversion $\\gamma$:

$$u(x, s, q, t) = \\max_{\\delta^a, \\delta^b}\\; \\mathbb{E}\\big[-e^{-\\gamma\\,(X_T + q_T S_T)}\\big],$$

where $X$ is cash and $q S$ marks the inventory to the mid. This is a stochastic-control problem; its value function solves a Hamilton-Jacobi-Bellman (HJB) equation.

**Reservation price.** Solving the HJB (via the paper's small-inventory asymptotic expansion, with a linearized order-arrival term) gives the MM's *indifference* price — the value at which it is indifferent between holding its current inventory and not:

$$\\boxed{r(s, q, t) = s - q\\,\\gamma\\,\\sigma^2 (T - t)}$$

It is the mid, shifted against the inventory: long ($q>0$) pushes $r$ below $s$; short ($q<0$) pushes it above. The shift scales with risk aversion, variance, and remaining time.

**Optimal spread.** The MM places its bid and ask symmetrically around $r$, and the optimal total spread is

$$\\boxed{\\delta^a + \\delta^b = \\gamma\\,\\sigma^2 (T - t) \\;+\\; \\frac{2}{\\gamma}\\ln\\!\\left(1 + \\frac{\\gamma}{\\kappa}\\right)}$$

The first term is the inventory-risk premium; the second is the microstructure term from the exponential order-arrival model. Note the spread is centred on $r$, not on $s$ — so the *actual* distances from the mid are asymmetric whenever $q \\neq 0$:

$$\\delta^a = \\underbrace{-q\\,\\gamma\\sigma^2(T-t)}_{\\text{skew}} + \\tfrac{1}{2}(\\delta^a+\\delta^b), \\qquad \\delta^b = \\underbrace{+q\\,\\gamma\\sigma^2(T-t)}_{\\text{skew}} + \\tfrac{1}{2}(\\delta^a+\\delta^b).$$

When long, $\\delta^a$ shrinks (ask closer to mid → sell faster) and $\\delta^b$ grows (bid further → buy slower); the position is bled back toward flat.

**The two regimes.** As $t \\to T$ the inventory-risk term vanishes and the spread collapses to the pure microstructure floor $\\frac{2}{\\gamma}\\ln(1+\\gamma/\\kappa)$ — near the close there is no time left to be hurt by inventory, so quote tight and trade. Early in the session, or in a volatile name, the inventory term dominates and quotes are wide and sharply skewed.

**What it is not.** The model assumes a driftless arithmetic-Brownian mid, a *fixed-parameter* order-arrival intensity — $A$ and $\\kappa$ do not respond to flow, so there is no toxicity or adverse selection — and CARA utility. Those are exactly the assumptions later work relaxes — most importantly, making $\\kappa$/$A$ respond to real-time order-flow toxicity (VPIN, OFI) so the quoter widens when flow turns dangerous.`,
        id: `**Setup.** Mid-price mengikuti arithmetic Brownian motion:

$$dS_t = \\sigma\\, dW_t.$$

Market maker quote bid di $S_t - \\delta^b$ dan ask di $S_t + \\delta^a$. Market sell order ngehit bid dan market buy order ngangkat ask; kedatangan order di quote yang ditempatkan jarak $\\delta$ dari mid itu Poisson process dengan intensity

$$\\lambda(\\delta) = A\\, e^{-\\kappa \\delta}.$$

Tiap fill ngubah inventory $q$ sama $\\pm 1$ dan cash sama execution price. MM punya CARA (exponential) utility atas terminal wealth di horizon $T$ dengan risk-aversion $\\gamma$:

$$u(x, s, q, t) = \\max_{\\delta^a, \\delta^b}\\; \\mathbb{E}\\big[-e^{-\\gamma\\,(X_T + q_T S_T)}\\big],$$

di mana $X$ itu cash dan $q S$ mark inventory ke mid. Ini stochastic-control problem; value function-nya solve Hamilton-Jacobi-Bellman (HJB) equation.

**Reservation price.** Solving HJB (lewat small-inventory asymptotic expansion paper-nya, dengan order-arrival term yang dilinearisasi) ngasih *indifference* price MM — value di mana dia indifferent antara nahan inventory saat ini dan enggak:

$$\\boxed{r(s, q, t) = s - q\\,\\gamma\\,\\sigma^2 (T - t)}$$

Itu mid, di-shift melawan inventory: long ($q>0$) ndorong $r$ di bawah $s$; short ($q<0$) ndorong di atas. Shift-nya scale sama risk aversion, variance, dan waktu tersisa.

**Optimal spread.** MM naro bid dan ask simetris di sekitar $r$, dan optimal total spread-nya

$$\\boxed{\\delta^a + \\delta^b = \\gamma\\,\\sigma^2 (T - t) \\;+\\; \\frac{2}{\\gamma}\\ln\\!\\left(1 + \\frac{\\gamma}{\\kappa}\\right)}$$

Term pertama itu inventory-risk premium; term kedua microstructure term dari exponential order-arrival model. Catat spread-nya di-center di $r$, bukan di $s$ — jadi jarak *aktual* dari mid itu asimetris kapan pun $q \\neq 0$:

$$\\delta^a = \\underbrace{-q\\,\\gamma\\sigma^2(T-t)}_{\\text{skew}} + \\tfrac{1}{2}(\\delta^a+\\delta^b), \\qquad \\delta^b = \\underbrace{+q\\,\\gamma\\sigma^2(T-t)}_{\\text{skew}} + \\tfrac{1}{2}(\\delta^a+\\delta^b).$$

Pas long, $\\delta^a$ menyusut (ask lebih deket mid → jual lebih cepet) dan $\\delta^b$ tumbuh (bid lebih jauh → beli lebih lambat); posisinya dibuang balik ke flat.

**Dua regime.** Pas $t \\to T$ inventory-risk term-nya hilang dan spread collapse ke pure microstructure floor $\\frac{2}{\\gamma}\\ln(1+\\gamma/\\kappa)$ — deket close gak ada waktu tersisa buat ke-hurt sama inventory, jadi quote ketat dan trade. Awal sesi, atau di nama yang volatile, inventory term dominan dan quote lebar dan tajam-skewed.

**Apa yang dia bukan.** Model assume mid arithmetic-Brownian tanpa drift, order-arrival intensity *fixed-parameter* — $A$ dan $\\kappa$ gak merespons flow, jadi gak ada toxicity atau adverse selection — dan CARA utility. Itu persis asumsi yang kerja kemudian relax — paling penting, bikin $\\kappa$/$A$ merespons real-time order-flow toxicity (VPIN, OFI) jadi quoter melebar pas flow jadi berbahaya.`
      }
    },

    // ─────────────── 4. worked-example ───────────────
    {
      id: 'worked-example',
      heading: { en: 'Worked example', id: 'Contoh kerjaan' },
      visualization: {
        id: 'avellaneda-stoikov-simulator',
        component: 'AvellanedaStoikovSim',
        title: {
          en: 'Inventory skew and the optimal spread',
          id: 'Inventory skew dan optimal spread'
        },
        description: {
          en: "The gold line is the reservation price r(q) = s − qγσ²(T−t); the blue lines are the bid and ask quoted symmetrically around it; the dashed line is the mid s. Drag inventory q to slide the marker along the skew — long (q>0) pushes r below the mid (quotes lean to sell), short pushes it above. The whole quote band tilts more steeply as you raise risk aversion γ or time-to-horizon T−t; pull T−t to 0 and the skew flattens and the spread collapses to the microstructure floor (2/γ)ln(1+γ/κ). Defaults reproduce the worked example (s=100, σ=2, γ=0.1, κ=1.5, T−t=1 → spread ≈ 1.69, flat quotes 99.15/100.85).",
          id: "Garis emas itu reservation price r(q) = s − qγσ²(T−t); garis biru itu bid dan ask yang di-quote simetris di sekitarnya; garis putus-putus itu mid s. Geser inventory q buat nggeser marker sepanjang skew — long (q>0) ndorong r di bawah mid (quote condong jual), short ndorong di atas. Seluruh quote band miring lebih tajam pas kamu naikin risk aversion γ atau time-to-horizon T−t; tarik T−t ke 0 dan skew-nya datar dan spread collapse ke microstructure floor (2/γ)ln(1+γ/κ). Default mereproduksi worked example (s=100, σ=2, γ=0.1, κ=1.5, T−t=1 → spread ≈ 1.69, quote flat 99.15/100.85)."
        },
        defaultParams: { s: 100, sigma: 2, gamma: 0.1, kappa: 1.5, timeLeft: 1, q: 5 },
        height: 380,
      },
      body: {
        en: `**Concrete quotes.** (Numbers illustrative; the structure is the point.) Take mid $s = 100$ (USD), volatility $\\sigma = 2$, risk aversion $\\gamma = 0.1$, order-arrival decay $\\kappa = 1.5$, and time-to-horizon $T - t = 1$.

First the two spread pieces:

- inventory-risk term: $\\gamma\\sigma^2(T-t) = 0.1 \\times 4 \\times 1 = 0.40$
- microstructure term: $\\tfrac{2}{\\gamma}\\ln(1+\\tfrac{\\gamma}{\\kappa}) = 20 \\times \\ln(1.0667) = 20 \\times 0.0645 \\approx 1.29$

So the optimal **total spread** is $0.40 + 1.29 = 1.69$, i.e. a half-spread of about $0.845$. The reservation-price skew per unit of inventory is the same $\\gamma\\sigma^2(T-t) = 0.40$.

**Flat ($q = 0$).** Reservation price $r = 100$. Quotes sit symmetrically: ask $= 100 + 0.845 = 100.845$, bid $= 100 - 0.845 = 99.155$ (USD). A textbook two-sided quote around the mid.

**Long 5 units ($q = +5$).** Now $r = 100 - 0.40 \\times 5 = 98.00$ (USD). The quotes recenter on $98$: ask $= 98 + 0.845 = 98.845$, bid $= 98 - 0.845 = 97.155$ (USD). Look what happened — **the ask ($98.845$) is now below the mid ($100$).** The MM is offering to sell *below* the current mid, eager to shed its long position, while its bid ($97.155$) has dropped far below the mid so it is very unlikely to buy more. Both quotes shifted down by the full $2.00$ reservation skew. That asymmetry is the model managing inventory: it accepts a worse price to get flat, because holding 5 long units into a $\\sigma = 2$ world for a full unit of time is a risk it is paid (via $\\gamma$) to avoid.

**As the close approaches.** Re-run with $T - t = 0.1$: the inventory term shrinks to $0.1 \\times 4 \\times 0.1 = 0.04$, the skew per unit to $0.04$, and the total spread to $0.04 + 1.29 = 1.33$. Quotes tighten and de-skew — with little time left, inventory is barely a risk, so the MM reverts to near-symmetric tight quoting to capture spread. At $t = T$ exactly, only the microstructure floor $1.29$ remains.

**The takeaway in one line.** Center on $r = s - q\\gamma\\sigma^2(T-t)$, quote a half-spread of $\\tfrac{1}{2}[\\gamma\\sigma^2(T-t) + \\tfrac{2}{\\gamma}\\ln(1+\\tfrac{\\gamma}{\\kappa})]$ on each side — and the inventory skew does the position management for you, automatically and continuously.`,
        id: `**Quote konkret.** (Angka ilustratif; yang penting strukturnya.) Ambil mid $s = 100$ (USD), volatility $\\sigma = 2$, risk aversion $\\gamma = 0.1$, order-arrival decay $\\kappa = 1.5$, dan time-to-horizon $T - t = 1$.

Pertama dua potong spread:

- inventory-risk term: $\\gamma\\sigma^2(T-t) = 0.1 \\times 4 \\times 1 = 0.40$
- microstructure term: $\\tfrac{2}{\\gamma}\\ln(1+\\tfrac{\\gamma}{\\kappa}) = 20 \\times \\ln(1.0667) = 20 \\times 0.0645 \\approx 1.29$

Jadi optimal **total spread**-nya $0.40 + 1.29 = 1.69$, yaitu half-spread sekitar $0.845$. Reservation-price skew per unit inventory itu sama $\\gamma\\sigma^2(T-t) = 0.40$.

**Flat ($q = 0$).** Reservation price $r = 100$. Quote duduk simetris: ask $= 100 + 0.845 = 100.845$, bid $= 100 - 0.845 = 99.155$ (USD). Two-sided quote textbook di sekitar mid.

**Long 5 unit ($q = +5$).** Sekarang $r = 100 - 0.40 \\times 5 = 98.00$ (USD). Quote-nya recenter di $98$: ask $= 98 + 0.845 = 98.845$, bid $= 98 - 0.845 = 97.155$ (USD). Lihat apa yang terjadi — **ask ($98.845$) sekarang di bawah mid ($100$).** MM nawarin jual *di bawah* mid saat ini, semangat ngebuang posisi long-nya, sementara bid-nya ($97.155$) udah jatuh jauh di bawah mid jadi sangat gak mungkin beli lagi. Kedua quote geser turun sebesar full $2.00$ reservation skew. Asimetri itu model lagi ngatur inventory: dia nerima price lebih buruk buat jadi flat, karena nahan 5 unit long ke dunia $\\sigma = 2$ buat satu unit waktu penuh itu risk yang dia dibayar (via $\\gamma$) buat hindarin.

**Pas close mendekat.** Re-run dengan $T - t = 0.1$: inventory term menyusut ke $0.1 \\times 4 \\times 0.1 = 0.04$, skew per unit ke $0.04$, dan total spread ke $0.04 + 1.29 = 1.33$. Quote mengetat dan de-skew — dengan sedikit waktu tersisa, inventory hampir bukan risk, jadi MM balik ke quoting ketat near-symmetric buat nangkep spread. Di $t = T$ persis, cuma microstructure floor $1.29$ tersisa.

**Takeaway dalam satu baris.** Center di $r = s - q\\gamma\\sigma^2(T-t)$, quote half-spread $\\tfrac{1}{2}[\\gamma\\sigma^2(T-t) + \\tfrac{2}{\\gamma}\\ln(1+\\tfrac{\\gamma}{\\kappa})]$ di tiap sisi — dan inventory skew ngelakuin position management buat kamu, otomatis dan terus-menerus.`
      }
    },

    // ─────────────── 5. applications ───────────────
    {
      id: 'applications',
      heading: { en: 'Applications by audience', id: 'Aplikasi per audience' },
      body: {
        en: `This section walks from the research frontier, through practitioner deployment, down to the operations and risk desk.

### For the advanced researcher

Avellaneda-Stoikov is the base camp from which the optimal-market-making literature climbs. The most important extension is **Guéant-Lehalle-Fernández-Tapia (2013)**, which replaces the AS asymptotic approximation with a genuinely closed-form solution and adds rigorous inventory bounds. Beyond that, the active frontiers all relax one assumption: adding **market impact and adverse selection** so that fills move the mid and informed flow is penalized (connecting back to Kyle and Glosten-Milgrom); making the **order-arrival intensity state-dependent** on real-time toxicity (VPIN/OFI) instead of a constant $A e^{-\\kappa\\delta}$; **multi-asset** market making with correlated inventories; and replacing CARA utility with running-inventory penalties or drawdown constraints. The model is also a natural testbed for reinforcement-learning market makers, which are often benchmarked against the AS closed form.

### For the quant practitioner

This is the model you start from when you build a quoting engine. Practical workflow: (i) estimate $\\sigma$ from recent mid-price returns; (ii) calibrate $A$ and $\\kappa$ from the empirical fill-rate-vs-distance curve of your own quotes (how often do quotes $\\delta$ ticks out actually get hit?); (iii) pick $\\gamma$ as your risk knob — higher $\\gamma$ = wider, more skewed, more inventory-averse quoting. Then quote $r \\pm \\text{half-spread}$ and let the skew manage inventory. Two cautions from the rest of this domain: the fixed-intensity assumption is the weak point — in practice you should **widen (raise the effective spread) when a toxicity gauge like VPIN or OFI spikes**, because the model has no built-in defence against informed flow; and the arithmetic-Brownian, zero-drift mid means you must overlay your own fair-value/alpha signal if you have one. The open-source Hummingbot AS strategy is a faithful, inspectable starting implementation.

### For the operations team / risk

The risk-relevant content is the inventory-control logic and the $\\gamma$ knob. AS makes explicit that a market maker's inventory is a *managed risk*, not an accident: the reservation-price skew is the mechanism that keeps positions mean-reverting toward flat, and $\\gamma$ is the dial that trades P&L (tight symmetric quotes earn more spread) against inventory risk (wide skewed quotes stay flatter). For risk oversight: monitor realized inventory paths against the model's intended mean-reversion; ensure the quoter's effective $\\gamma$ and any hard inventory limits are consistent; and recognize that the model is calm-market calibration — during a toxic or trending episode, the fixed-intensity assumption breaks and inventory can run, which is exactly when the toxicity overlays and hard position limits must take over from the elegant formula.`,
        id: `Section ini jalan dari research frontier, lewat deployment praktisi, sampai turun ke operations dan risk desk.

### Untuk advanced researcher

Avellaneda-Stoikov itu base camp tempat literatur optimal-market-making mendaki. Extension paling penting itu **Guéant-Lehalle-Fernández-Tapia (2013)**, yang ngeganti aproksimasi asimtotik AS sama solusi yang beneran closed-form dan nambah inventory bound rigorous. Di luar itu, frontier aktifnya semua nge-relax satu asumsi: nambah **market impact dan adverse selection** jadi fill gerakin mid dan informed flow di-penalize (nyambung balik ke Kyle dan Glosten-Milgrom); bikin **order-arrival intensity state-dependent** ke real-time toxicity (VPIN/OFI) daripada konstan $A e^{-\\kappa\\delta}$; market making **multi-asset** dengan inventory yang berkorelasi; dan ngeganti CARA utility sama running-inventory penalty atau drawdown constraint. Model-nya juga testbed natural buat reinforcement-learning market maker, yang sering di-benchmark lawan AS closed form.

### Untuk quant practitioner

Ini model yang kamu mulai darinya pas bangun quoting engine. Workflow praktis: (i) estimate $\\sigma$ dari recent mid-price return; (ii) kalibrasi $A$ dan $\\kappa$ dari empirical fill-rate-vs-distance curve quote-mu sendiri (seberapa sering quote $\\delta$ tick keluar beneran ke-hit?); (iii) pilih $\\gamma$ sebagai risk knob-mu — $\\gamma$ lebih tinggi = quoting lebih lebar, lebih skewed, lebih inventory-averse. Lalu quote $r \\pm \\text{half-spread}$ dan biarin skew-nya ngatur inventory. Dua peringatan dari sisa domain ini: asumsi fixed-intensity itu titik lemahnya — in practice kamu harusnya **melebar (naikin effective spread) pas toxicity gauge kayak VPIN atau OFI spike**, karena model gak punya pertahanan built-in terhadap informed flow; dan mid arithmetic-Brownian tanpa-drift berarti kamu harus overlay fair-value/alpha signal-mu sendiri kalau punya. Strategi AS open-source Hummingbot itu starting implementation yang faithful dan bisa diinspeksi.

### Untuk tim operations / risk

Konten yang risk-relevant itu logika inventory-control dan knob $\\gamma$. AS bikin eksplisit bahwa inventory market maker itu *managed risk*, bukan kecelakaan: reservation-price skew itu mekanisme yang nahan posisi mean-reverting ke flat, dan $\\gamma$ itu dial yang nge-trade P&L (quote simetris ketat dapet lebih banyak spread) lawan inventory risk (quote skewed lebar tetep lebih flat). Buat risk oversight: monitor realized inventory path lawan mean-reversion yang model maksudkan; pastiin effective $\\gamma$ quoter dan hard inventory limit apa pun konsisten; dan sadari bahwa model itu kalibrasi calm-market — selama episode toxic atau trending, asumsi fixed-intensity jebol dan inventory bisa lari, yang itu persis pas toxicity overlay dan hard position limit harus ambil alih dari formula yang elegan.`
      }
    },

    // ─────────────── 6. practice ───────────────
    {
      id: 'practice',
      heading: { en: 'Practice', id: 'Latihan' },
      body: {
        en: `**1.** A market maker is **short 3 units** ($q = -3$), with $\\gamma = 0.2$, $\\sigma = 1.5$, $T - t = 1$, mid $s = 50$. Compute the reservation price and say which way the quotes skew.

<details><summary>Answer</summary>
Skew per unit $= \\gamma\\sigma^2(T-t) = 0.2 \\times 2.25 \\times 1 = 0.45$. With $q = -3$: $r = s - q\\gamma\\sigma^2(T-t) = 50 - (-3)(0.45) = 50 + 1.35 = 51.35$. Being short, the reservation price is *above* the mid, so both quotes shift **up** — the MM raises its bid (eager to buy back and cover the short) and its ask (reluctant to sell more). Inventory skew pushes the position back toward flat.
</details>

**2.** Holding $\\gamma$, $\\sigma$, $\\kappa$ fixed, what happens to the optimal spread as $t \\to T$ (the close), and why?

<details><summary>Answer</summary>
The spread is $\\gamma\\sigma^2(T-t) + \\tfrac{2}{\\gamma}\\ln(1+\\gamma/\\kappa)$. As $t \\to T$, the first term $\\gamma\\sigma^2(T-t) \\to 0$, so the spread collapses to the pure microstructure floor $\\tfrac{2}{\\gamma}\\ln(1+\\gamma/\\kappa)$, and the reservation skew $\\to 0$ too. Intuition: with almost no time left, you can't be hurt much by holding inventory, so there is no reason to quote wide or skew — revert to tight, near-symmetric quoting to capture as much spread as possible before the horizon.
</details>

**3.** Two assets are identical except asset B has a much **deeper** order book (larger $\\kappa$). Which gets the tighter spread, and which model term is responsible?

<details><summary>Answer</summary>
Asset B (deeper book, larger $\\kappa$) gets the tighter spread. The responsible term is the microstructure piece $\\tfrac{2}{\\gamma}\\ln(1+\\gamma/\\kappa)$: as $\\kappa$ grows, $\\gamma/\\kappa \\to 0$ and $\\ln(1+\\gamma/\\kappa) \\to 0$, shrinking that term. Economically: in a deep book, orders arrive close to the mid, so you can quote tight and still get filled. The inventory-risk term $\\gamma\\sigma^2(T-t)$ is unaffected by $\\kappa$.
</details>

**4.** Avellaneda-Stoikov assumes a *fixed-parameter* order-arrival intensity $\\lambda(\\delta) = A e^{-\\kappa\\delta}$ ($A$ and $\\kappa$ do not respond to flow) — no adverse selection. Using the OFI/VPIN modules, explain the danger of running AS unmodified, and the standard fix.

<details><summary>Answer</summary>
With fixed intensity parameters, the model treats every fill as equally benign — it has no notion that a burst of one-sided, informed flow (high OFI / high VPIN) means the mid is about to move against the quotes that are getting hit. Run unmodified, an AS quoter will keep posting a normal spread into toxic flow, get adversely selected, and accumulate a losing position right before the price runs — exactly the adverse selection Glosten-Milgrom describes. The standard fix is to make the spread (or the intensity parameters $A$, $\\kappa$) state-dependent on a real-time toxicity gauge: widen quotes and/or pull size when VPIN or OFI spikes, so the quoter defends itself precisely when the fixed-intensity assumption is most wrong.
</details>`,
        id: `**1.** Market maker lagi **short 3 unit** ($q = -3$), dengan $\\gamma = 0.2$, $\\sigma = 1.5$, $T - t = 1$, mid $s = 50$. Hitung reservation price dan bilang ke arah mana quote-nya skew.

<details><summary>Jawaban</summary>
Skew per unit $= \\gamma\\sigma^2(T-t) = 0.2 \\times 2.25 \\times 1 = 0.45$. Dengan $q = -3$: $r = s - q\\gamma\\sigma^2(T-t) = 50 - (-3)(0.45) = 50 + 1.35 = 51.35$. Karena short, reservation price *di atas* mid, jadi kedua quote geser **naik** — MM naikin bid-nya (semangat beli balik buat cover short) dan ask-nya (enggan jual lagi). Inventory skew ndorong posisi balik ke flat.
</details>

**2.** Nahan $\\gamma$, $\\sigma$, $\\kappa$ fixed, apa yang terjadi ke optimal spread pas $t \\to T$ (close), dan kenapa?

<details><summary>Jawaban</summary>
Spread-nya $\\gamma\\sigma^2(T-t) + \\tfrac{2}{\\gamma}\\ln(1+\\gamma/\\kappa)$. Pas $t \\to T$, term pertama $\\gamma\\sigma^2(T-t) \\to 0$, jadi spread collapse ke pure microstructure floor $\\tfrac{2}{\\gamma}\\ln(1+\\gamma/\\kappa)$, dan reservation skew $\\to 0$ juga. Intuisi: dengan hampir gak ada waktu tersisa, kamu gak bisa ke-hurt banyak sama nahan inventory, jadi gak ada alasan quote lebar atau skew — balik ke quoting ketat near-symmetric buat nangkep spread sebanyak mungkin sebelum horizon.
</details>

**3.** Dua aset identik kecuali aset B punya order book yang jauh lebih **dalam** (larger $\\kappa$). Mana yang dapet spread lebih ketat, dan term model mana yang bertanggung jawab?

<details><summary>Jawaban</summary>
Aset B (book lebih dalam, larger $\\kappa$) dapet spread lebih ketat. Term yang bertanggung jawab itu potongan microstructure $\\tfrac{2}{\\gamma}\\ln(1+\\gamma/\\kappa)$: pas $\\kappa$ tumbuh, $\\gamma/\\kappa \\to 0$ dan $\\ln(1+\\gamma/\\kappa) \\to 0$, nyusutin term itu. Secara ekonomi: di book yang dalam, order datang deket mid, jadi kamu bisa quote ketat dan tetep ke-fill. Inventory-risk term $\\gamma\\sigma^2(T-t)$ gak ke-pengaruh sama $\\kappa$.
</details>

**4.** Avellaneda-Stoikov assume order-arrival intensity *fixed-parameter* $\\lambda(\\delta) = A e^{-\\kappa\\delta}$ ($A$ dan $\\kappa$ gak merespons flow) — no adverse selection. Pakai modul OFI/VPIN, jelasin bahaya jalanin AS tanpa modifikasi, dan fix standard-nya.

<details><summary>Jawaban</summary>
Dengan parameter intensity yang tetap, model nganggep tiap fill sama-sama jinak — dia gak punya notion bahwa burst flow one-sided dan informed (OFI tinggi / VPIN tinggi) berarti mid mau gerak melawan quote yang lagi ke-hit. Dijalanin tanpa modifikasi, AS quoter bakal terus posting spread normal ke toxic flow, ke-adverse-select, dan akumulasi posisi yang rugi persis sebelum harga lari — persis adverse selection yang Glosten-Milgrom jelasin. Fix standard-nya bikin spread (atau parameter intensity $A$, $\\kappa$) state-dependent ke real-time toxicity gauge: melebarin quote dan/atau narik size pas VPIN atau OFI spike, jadi quoter bela diri persis pas asumsi fixed-intensity-nya paling salah.
</details>`
      }
    },

    // ─────────────── 7. connections ───────────────
    {
      id: 'connections',
      heading: { en: 'Connections', id: 'Koneksi' },
      body: {
        en: `- **Prereqs**: [Glosten-Milgrom 1985](item:glosten-milgrom-1985) is the complementary pillar — GM explains the spread as adverse-selection compensation (information risk), while Avellaneda-Stoikov explains quoting as inventory-risk management (price risk). Read GM first for the *other* reason spreads exist. [Kyle 1985](item:kyle-1985) supplies the price-impact intuition the model deliberately omits.
- **Builds toward / pairs with**: [Easley-López de Prado-O'Hara 2012](item:easley-lopez-prado-vpin) (VPIN) and [Cont-Kukanov-Stoikov 2014](item:cont-kukanov-stoikov-2014) (OFI) are the toxicity/imbalance signals that fix Avellaneda-Stoikov's biggest weakness — its constant, adverse-selection-free order-arrival intensity. The modern practice is to run an AS-style quoter whose spread widens when VPIN/OFI flag toxic flow. Stoikov co-authored both AS and OFI (Cont-Kukanov-Stoikov 2014), so the inventory model and the order-flow-imbalance signal that should make an AS quoter widen are by the same hand.
- **Related to**: [Hasbrouck 2007](item:hasbrouck-2007) for the empirical estimation of the volatility and fill-rate inputs the model needs.
- **Lineage**: Ho-Stoll (1981) is the inventory-control ancestor; Guéant-Lehalle-Fernández-Tapia (2013) is the closed-form successor.`,
        id: `- **Prereqs**: [Glosten-Milgrom 1985](item:glosten-milgrom-1985) itu pilar komplementer — GM ngejelasin spread sebagai kompensasi adverse-selection (information risk), sementara Avellaneda-Stoikov ngejelasin quoting sebagai inventory-risk management (price risk). Baca GM dulu buat alasan *lain* kenapa spread ada. [Kyle 1985](item:kyle-1985) nyediain intuisi price-impact yang model sengaja lewatin.
- **Builds toward / pairs with**: [Easley-López de Prado-O'Hara 2012](item:easley-lopez-prado-vpin) (VPIN) dan [Cont-Kukanov-Stoikov 2014](item:cont-kukanov-stoikov-2014) (OFI) itu sinyal toxicity/imbalance yang nge-fix kelemahan terbesar Avellaneda-Stoikov — order-arrival intensity yang konstan dan bebas-adverse-selection. Praktik modern itu jalanin quoter ala-AS yang spread-nya melebar pas VPIN/OFI nge-flag toxic flow. Stoikov co-author baik AS maupun OFI (Cont-Kukanov-Stoikov 2014), jadi inventory model dan sinyal order-flow-imbalance yang harusnya bikin AS quoter melebar itu dari tangan yang sama.
- **Related to**: [Hasbrouck 2007](item:hasbrouck-2007) buat estimasi empiris dari input volatility dan fill-rate yang model butuh.
- **Lineage**: Ho-Stoll (1981) itu ancestor inventory-control; Guéant-Lehalle-Fernández-Tapia (2013) itu successor closed-form.`
      }
    },

    // ─────────────── 8. sources ───────────────
    {
      id: 'sources',
      heading: { en: 'Sources', id: 'Sumber' },
      body: {
        en: `- **Avellaneda, M., and Stoikov, S.** (2008). "High-Frequency Trading in a Limit Order Book." *Quantitative Finance*, 8(3), 217-224. The optimal-market-making paper. **(This item.)**
- **Ho, T., and Stoll, H. R.** (1981). "Optimal Dealer Pricing under Transactions and Return Uncertainty." *Journal of Financial Economics*, 9(1), 47-73. The inventory-control ancestor.
- **Guéant, O., Lehalle, C.-A., and Fernández-Tapia, J.** (2013). "Dealing with the Inventory Risk: A Solution to the Market Making Problem." *Mathematics and Financial Economics*, 7(4), 477-507. The closed-form successor with rigorous inventory bounds.
- **Avellaneda, M., Levy, A., and Parás, A.** (1995). "Pricing and Hedging Derivative Securities in Markets with Uncertain Volatilities." *Applied Mathematical Finance*, 2(2), 73-88. Avellaneda's other landmark (the Uncertain Volatility Model).
- **Cartea, Á., Jaimungal, S., and Penalva, J.** (2015). *Algorithmic and High-Frequency Trading*. Cambridge University Press. The textbook treatment that develops Avellaneda-Stoikov and its extensions in full.`,
        id: `- **Avellaneda, M., dan Stoikov, S.** (2008). "High-Frequency Trading in a Limit Order Book." *Quantitative Finance*, 8(3), 217-224. Paper optimal-market-making. **(Item ini.)**
- **Ho, T., dan Stoll, H. R.** (1981). "Optimal Dealer Pricing under Transactions and Return Uncertainty." *Journal of Financial Economics*, 9(1), 47-73. Ancestor inventory-control.
- **Guéant, O., Lehalle, C.-A., dan Fernández-Tapia, J.** (2013). "Dealing with the Inventory Risk: A Solution to the Market Making Problem." *Mathematics and Financial Economics*, 7(4), 477-507. Successor closed-form dengan inventory bound rigorous.
- **Avellaneda, M., Levy, A., dan Parás, A.** (1995). "Pricing and Hedging Derivative Securities in Markets with Uncertain Volatilities." *Applied Mathematical Finance*, 2(2), 73-88. Landmark lain Avellaneda (Uncertain Volatility Model).
- **Cartea, Á., Jaimungal, S., dan Penalva, J.** (2015). *Algorithmic and High-Frequency Trading*. Cambridge University Press. Treatment textbook yang ngembangin Avellaneda-Stoikov dan extension-nya secara penuh.`
      }
    },
  ],

  audio: { enabled: true },

  selfTest: [
    {
      sectionId: 'intuition',
      question: {
        en: 'Why does a market maker who is long inventory quote a reservation price BELOW the mid, and what behaviour does that produce?',
        id: 'Kenapa market maker yang long inventory quote reservation price DI BAWAH mid, dan behaviour apa yang itu hasilkan?'
      },
      prompt: { en: 'Before continuing, try answering:', id: 'Sebelum lanjut, coba jawab:' },
      answer: {
        en: 'Because holding a long position is a risk the MM does not want — while it holds the inventory, a price drop hurts it — so its inventory-adjusted indifference value of the asset is below the current mid: it would rather sell, even slightly cheap, to get flat. Formally r = s − qγσ²(T−t), which for q>0 sits below s. The behaviour: both quotes recenter on r (below the mid), so the ask moves closer to (or even below) the mid — selling becomes easy — while the bid drops well below the mid — buying more becomes unlikely. The asymmetric skew automatically bleeds the long position back toward flat. Short inventory does the mirror image (reservation above mid, quotes skew up).',
        id: 'Karena nahan posisi long itu risk yang MM gak mau — selama dia nahan inventory, price drop nyakitin dia — jadi value indifference inventory-adjusted-nya atas aset di bawah mid saat ini: dia lebih milih jual, bahkan agak murah, buat jadi flat. Formal-nya r = s − qγσ²(T−t), yang buat q>0 duduk di bawah s. Behaviour-nya: kedua quote recenter di r (di bawah mid), jadi ask gerak lebih deket ke (atau bahkan di bawah) mid — jual jadi gampang — sementara bid jatuh jauh di bawah mid — beli lagi jadi gak mungkin. Skew asimetris otomatis ngebuang posisi long balik ke flat. Short inventory ngelakuin mirror image-nya (reservation di atas mid, quote skew naik).'
      }
    },
    {
      sectionId: 'formalization',
      question: {
        en: 'The optimal spread is γσ²(T−t) + (2/γ)ln(1+γ/κ). Name what each of the two terms represents and which parameters drive it.',
        id: 'Optimal spread-nya γσ²(T−t) + (2/γ)ln(1+γ/κ). Sebutin apa yang tiap dari dua term represent dan parameter mana yang nge-drive-nya.'
      },
      prompt: { en: 'Before continuing, try answering:', id: 'Sebelum lanjut, coba jawab:' },
      answer: {
        en: 'First term γσ²(T−t) = the inventory-risk premium: how much extra spread you demand for the risk of holding inventory. It grows with risk aversion γ, variance σ², and the time-to-horizon (T−t) over which you could be caught holding a position; it vanishes at the close. Second term (2/γ)ln(1+γ/κ) = the market-microstructure term, set by the order-arrival model: it reflects how fill probability decays with quote distance (κ) traded off against risk aversion (γ). A denser book (larger κ) shrinks it, allowing tighter quotes; a thinner book (smaller κ) lets you quote wider and still get filled. So spread = inventory-risk premium + liquidity-driven floor.',
        id: 'Term pertama γσ²(T−t) = inventory-risk premium: berapa extra spread yang kamu minta buat risk nahan inventory. Dia tumbuh sama risk aversion γ, variance σ², dan time-to-horizon (T−t) yang kamu bisa ketangkep nahan posisi; dia hilang di close. Term kedua (2/γ)ln(1+γ/κ) = market-microstructure term, di-set sama order-arrival model: dia mencerminkan gimana fill probability decay sama quote distance (κ) di-trade-off lawan risk aversion (γ). Book yang lebih padat (larger κ) nyusutin dia, ngebolehin quote lebih ketat; book lebih tipis (smaller κ) ngebolehin kamu quote lebih lebar dan tetep ke-fill. Jadi spread = inventory-risk premium + floor yang liquidity-driven.'
      }
    },
    {
      sectionId: 'connections',
      question: {
        en: 'How does Avellaneda-Stoikov relate to Glosten-Milgrom — do they compete, and what does each say a spread is "for"?',
        id: 'Gimana Avellaneda-Stoikov berhubungan sama Glosten-Milgrom — apakah mereka bersaing, dan apa yang masing-masing bilang spread itu "buat" apa?'
      },
      prompt: { en: 'Before continuing, try answering:', id: 'Sebelum lanjut, coba jawab:' },
      answer: {
        en: 'They are complementary, not competing — two distinct reasons a spread exists. Glosten-Milgrom says the spread compensates the MM for ADVERSE SELECTION: the risk that the counterparty is informed and the MM is on the losing side of information. Avellaneda-Stoikov says the spread (and the inventory skew) compensates for and manages INVENTORY RISK: the price risk of holding a non-zero position the MM was forced to take. A real market maker faces both at once. Notably, AS deliberately omits adverse selection (its order arrivals are uninformed by assumption) — which is exactly why it is paired in practice with toxicity signals (VPIN/OFI) that reintroduce the Glosten-Milgrom concern.',
        id: 'Mereka komplementer, bukan bersaing — dua alasan berbeda kenapa spread ada. Glosten-Milgrom bilang spread kompensasi MM buat ADVERSE SELECTION: risk bahwa counterparty informed dan MM di sisi kalah dari informasi. Avellaneda-Stoikov bilang spread (dan inventory skew) kompensasi dan ngatur INVENTORY RISK: price risk dari nahan posisi non-zero yang MM terpaksa ambil. Market maker nyata hadapi dua-duanya sekaligus. Notably, AS sengaja ngelewatin adverse selection (order arrival-nya uninformed by assumption) — yang itu persis kenapa dia di-pair in practice sama sinyal toxicity (VPIN/OFI) yang ngenalin balik concern Glosten-Milgrom.'
      }
    },
    {
      sectionId: 'worked-example',
      question: {
        en: 'In the worked example (γ=0.1, σ=2, T−t=1), going from flat to long 5 units moved the ask from 100.845 to 98.845 — below the mid of 100. Is quoting an ask below the mid a mistake? Explain.',
        id: 'Di worked example (γ=0.1, σ=2, T−t=1), dari flat ke long 5 unit ngegerakin ask dari 100.845 ke 98.845 — di bawah mid 100. Apakah quote ask di bawah mid itu kesalahan? Jelasin.'
      },
      prompt: { en: 'Before continuing, try answering:', id: 'Sebelum lanjut, coba jawab:' },
      answer: {
        en: 'No — it is the model working as intended. With q=+5 the reservation price is r = 100 − 0.4×5 = 98, and the quotes center on r, so the ask is 98 + 0.845 = 98.845, below the mid. The MM is deliberately offering to sell below the current mid because it values being flat more than the small price concession it makes: holding 5 long units in a σ=2 market for a full unit of time is a real risk it is paid (through γ) to shed. It accepts a slightly worse sale price to cut inventory risk. (If it had an alpha signal that the price would rise, it would overlay that on the mid — but the base AS model is inventory management, not directional betting.)',
        id: 'Enggak — itu model bekerja sesuai maksud. Dengan q=+5 reservation price-nya r = 100 − 0.4×5 = 98, dan quote center di r, jadi ask-nya 98 + 0.845 = 98.845, di bawah mid. MM sengaja nawarin jual di bawah mid saat ini karena dia ngehargain jadi flat lebih dari konsesi harga kecil yang dia korbanin: nahan 5 unit long di market σ=2 buat satu unit waktu penuh itu risk nyata yang dia dibayar (lewat γ) buat ngebuang. Dia nerima sale price agak lebih buruk buat motong inventory risk. (Kalau dia punya alpha signal bahwa harga bakal naik, dia bakal overlay itu di mid — tapi base AS model itu inventory management, bukan directional betting.)'
      }
    },
  ],
};
