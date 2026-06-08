export const CONTENT = {
  itemId: 'cartea-jaimungal-penalva',
  estimatedReadMinutes: 40,

  author: {
    fullName: { en: 'Álvaro Cartea, Sebastian Jaimungal & José Penalva', id: 'Álvaro Cartea, Sebastian Jaimungal & José Penalva' },
    affiliation: {
      en: 'Cartea: Professor of Mathematical Finance, University of Oxford, and Director of the Oxford-Man Institute of Quantitative Finance (Reader at UCL when the book was written). Jaimungal: Professor, Department of Statistical Sciences, University of Toronto. Penalva: Associate Professor of Finance, Universidad Carlos III de Madrid.',
      id: 'Cartea: Professor of Mathematical Finance, University of Oxford, dan Director Oxford-Man Institute of Quantitative Finance (Reader di UCL pas buku ini ditulis). Jaimungal: Professor, Department of Statistical Sciences, University of Toronto. Penalva: Associate Professor of Finance, Universidad Carlos III de Madrid.'
    },
    tagline: {
      en: 'The graduate textbook that unified algorithmic trading under one stochastic-control recipe — write the dynamics, derive the HJB equation, read off a feedback strategy — recovering optimal execution, market making, VWAP targeting, and statistical arbitrage as special cases.',
      id: 'Textbook graduate yang nyatuin algorithmic trading di bawah satu resep stochastic-control — tulis dinamikanya, turunin persamaan HJB, baca strategi feedback-nya — ngerecover optimal execution, market making, VWAP targeting, dan statistical arbitrage sebagai kasus khusus.'
    },
    bio: {
      en: `Three complementary backgrounds produced the book. **Álvaro Cartea** is a mathematical finance professor at the University of Oxford and Director of the Oxford-Man Institute of Quantitative Finance (he was a Reader at UCL when the book was written); he did his doctorate under Sam Howison at Oxford and works on algorithmic trading, market microstructure, stochastic control, and energy markets, and edits *Applied Mathematical Finance*. **Sebastian Jaimungal** is a professor in the Department of Statistical Sciences at the University of Toronto whose work spans stochastic control, reinforcement learning in finance, and algorithmic trading; he is an associate editor of the *SIAM Journal on Financial Mathematics* and a past chair (2017-2019) of the SIAM Activity Group on Financial Mathematics & Engineering. Cartea and Jaimungal are long-standing collaborators whose series of papers on optimal execution and market making is the backbone of the book. **José Penalva** is a finance professor at the Universidad Carlos III de Madrid working in information economics, market microstructure, and insurance; he supplies the economic-microstructure grounding (his work includes an *Econometrica* paper on information in auctions and studies of HFT and market quality).

The mix is the point: a stochastic-control theorist, a probabilist/quant, and a microstructure economist. The book's preface describes it as the first to combine sophisticated mathematical modelling, the empirical facts of high-frequency data, and financial economics in one place — taking a reader from how an exchange matches orders to the research frontier of optimal trading.`,
      id: `Tiga latar belakang yang saling melengkapi ngehasilin buku ini. **Álvaro Cartea** itu profesor mathematical finance di University of Oxford dan Director Oxford-Man Institute of Quantitative Finance (dia Reader di UCL pas buku ini ditulis); dia ngerjain doktoratnya di bawah Sam Howison di Oxford dan kerja soal algorithmic trading, market microstructure, stochastic control, dan energy markets, serta ngedit *Applied Mathematical Finance*. **Sebastian Jaimungal** itu profesor di Department of Statistical Sciences di University of Toronto yang kerjanya nyakup stochastic control, reinforcement learning di finance, dan algorithmic trading; dia associate editor *SIAM Journal on Financial Mathematics* dan mantan chair (2017-2019) SIAM Activity Group on Financial Mathematics & Engineering. Cartea dan Jaimungal kolaborator lama yang seri paper-nya soal optimal execution dan market making jadi tulang punggung buku ini. **José Penalva** itu profesor finance di Universidad Carlos III de Madrid yang kerja di information economics, market microstructure, dan asuransi; dia nyediain landasan ekonomi-microstructure-nya (kerjanya termasuk paper *Econometrica* soal informasi di lelang dan studi soal HFT dan kualitas pasar).

Campurannya itu intinya: seorang teoris stochastic-control, seorang probabilist/quant, dan seorang ekonom microstructure. Preface buku-nya ngedeskripsiin dia sebagai yang pertama nyatuin pemodelan matematis canggih, fakta empiris data high-frequency, dan financial economics dalam satu tempat — ngebawa pembaca dari gimana exchange nyocokin order sampai ke frontier riset optimal trading.`
    },
    focus: {
      en: `How do you turn "buy or sell this position well" into a problem you can actually solve, mathematically, against a realistic picture of how markets work? *Algorithmic and High-Frequency Trading* answers this for the whole family of algorithmic-trading problems — executing large orders, making markets, targeting VWAP or a volume schedule, trading pairs and baskets, and reacting to order-flow signals — by casting each as a continuous-time **stochastic optimal control** problem and solving it with the same machinery: the Dynamic Programming Principle, the Hamilton-Jacobi-Bellman (HJB) equation, and verification. Part I lays out market microstructure and the empirical stylized facts of high-frequency data; Part II develops the control toolkit from scratch (assuming only basic continuous-time finance); Part III applies it to one trading problem after another, frequently in closed form, and consistently incorporating inventory risk, adverse selection, and short-term predictive signals. It is the text that took the scattered foundational papers — Almgren-Chriss on execution, Avellaneda-Stoikov on market making — and showed they are special cases of one framework.`,
      id: `Gimana kamu ngubah "beli atau jual posisi ini dengan baik" jadi problem yang beneran bisa kamu selesain, secara matematis, lawan gambaran realistis gimana pasar bekerja? *Algorithmic and High-Frequency Trading* ngejawab ini buat seluruh keluarga problem algorithmic-trading — ngeksekusi order gede, bikin market, nargetin VWAP atau jadwal volume, ngetrade pair dan basket, dan bereaksi ke sinyal order-flow — dengan nge-cast tiap-tiap-nya sebagai problem **stochastic optimal control** continuous-time dan nyelesainnya dengan mesin yang sama: Dynamic Programming Principle, persamaan Hamilton-Jacobi-Bellman (HJB), dan verification. Part I ngegelar market microstructure dan fakta empiris terstilisasi dari data high-frequency; Part II ngembangin toolkit control-nya dari nol (nganggep cuma basic continuous-time finance); Part III nerapinnya ke satu problem trading demi satu, sering dalam closed form, dan konsisten masukin inventory risk, adverse selection, dan sinyal prediktif jangka-pendek. Ini teks yang ngambil paper-paper fondasi yang tersebar — Almgren-Chriss soal eksekusi, Avellaneda-Stoikov soal market making — dan nunjukin mereka kasus khusus dari satu framework.`
    },
    intellectualLineage: {
      en: `The book is the textbook synthesis of two foundational papers and a methodology. From **Almgren-Chriss (2000)** it takes optimal execution — but reframes the heuristic mean-variance schedule as the solution of a genuine stochastic-control problem. From **Avellaneda-Stoikov (2008)** it takes inventory-aware market making, and connects it to the closed-form solution of **Guéant-Lehalle-Fernández-Tapia (2013)**. The unifying methodology — continuous-time stochastic optimal control via the HJB equation — descends from Merton's portfolio problem and the broader applied-probability tradition; Cartea's lineage runs through Sam Howison and the Oxford mathematical-finance school, Jaimungal's through applied probability and stochastic control. The microstructure foundations (price impact, adverse selection, the bid-ask spread decomposition) trace to **Kyle (1985)** and Glosten-Milgrom. What is new is not any single model but the *unification*: showing that execution, market making, VWAP targeting, pairs trading, and order-imbalance strategies are all the same kind of object — an agent optimizing a value function — differing only in the state, the control, and the penalties.`,
      id: `Buku ini sintesis textbook dari dua paper fondasi dan sebuah metodologi. Dari **Almgren-Chriss (2000)** dia ngambil optimal execution — tapi nge-reframe jadwal mean-variance heuristik itu sebagai solusi dari problem stochastic-control yang sebenarnya. Dari **Avellaneda-Stoikov (2008)** dia ngambil market making yang inventory-aware, dan ngehubunginnya ke solusi closed-form **Guéant-Lehalle-Fernández-Tapia (2013)**. Metodologi pemersatunya — stochastic optimal control continuous-time lewat persamaan HJB — turun dari problem portfolio Merton dan tradisi applied-probability yang lebih luas; garis keturunan Cartea lewat Sam Howison dan sekolah mathematical-finance Oxford, Jaimungal lewat applied probability dan stochastic control. Fondasi microstructure-nya (price impact, adverse selection, dekomposisi bid-ask spread) nelusur ke **Kyle (1985)** dan Glosten-Milgrom. Yang baru itu bukan satu model tunggal tapi *unifikasi*-nya: nunjukin bahwa execution, market making, VWAP targeting, pairs trading, dan strategi order-imbalance itu semua objek jenis yang sama — agen yang ngoptimasi value function — beda cuma di state, control, dan penalty-nya.`
    },
    keyCollaborators: {
      en: `**Each other**: Cartea and Jaimungal are the core long-running pair, with Penalva supplying the microstructure economics. Beyond the book, Cartea and Jaimungal co-author with **Jason Ricci** ("Buy Low, Sell High," a SIGEST-awarded execution paper), **Ryan Donnelly** (model uncertainty in market making), **Leandro Sánchez-Betancourt** and **Fayçal Drissi** (more recent execution/market-making and DeFi work), and **Mihai Cucuringu** (machine-learning methods). The intellectual antecedents the book leans on most are **Robert Almgren and Neil Chriss** (execution), **Marco Avellaneda and Sasha Stoikov** (market making), **Olivier Guéant, Charles-Albert Lehalle and Joaquin Fernández-Tapia** (the closed-form market-making solution), and **Albert Kyle** (price impact). Cartea's earlier work with **Sam Howison** (his doctoral advisor) is in option pricing and energy markets.`,
      id: `**Satu sama lain**: Cartea dan Jaimungal pasangan inti yang lama berjalan, dengan Penalva nyediain ekonomi microstructure-nya. Di luar buku, Cartea dan Jaimungal co-author sama **Jason Ricci** ("Buy Low, Sell High," paper eksekusi yang dapet penghargaan SIGEST), **Ryan Donnelly** (model uncertainty di market making), **Leandro Sánchez-Betancourt** dan **Fayçal Drissi** (kerja execution/market-making dan DeFi yang lebih baru), dan **Mihai Cucuringu** (metode machine-learning). Antesedan intelektual yang buku ini paling andalin itu **Robert Almgren dan Neil Chriss** (eksekusi), **Marco Avellaneda dan Sasha Stoikov** (market making), **Olivier Guéant, Charles-Albert Lehalle dan Joaquin Fernández-Tapia** (solusi market-making closed-form), dan **Albert Kyle** (price impact). Kerja Cartea yang lebih awal sama **Sam Howison** (advisor doktoralnya) di option pricing dan energy markets.`
    },
    legacy: {
      en: `*Algorithmic and High-Frequency Trading* became one of the standard graduate texts and references for the mathematical approach to trading. Its durable contributions: (1) it **unified** a fragmented literature — once you see execution, market making, VWAP, and pairs trading as one stochastic-control template, the field becomes learnable rather than a pile of separate models; (2) it made optimal execution a *strategy*, not a schedule — the HJB solution is a feedback control that reacts to realized inventory and price, the conceptual upgrade over the original Almgren-Chriss recipe; and (3) it is genuinely usable — it pairs each model with the empirical stylized facts that justify it and ships datasets and MATLAB code (via algorithmic-trading.org), so the models can be calibrated and simulated, not just admired. Its limits are deliberate: it largely assumes linear (or simple) price impact, leaves the systems/latency engineering and regulation to others, and is mathematically demanding (continuous-time control is a real prerequisite). The companion texts pick up where it draws the line — **Guéant (2016)** goes deeper on the liquidity mathematics, **Bouchaud et al. (2018)** on the empirical/econophysics of impact, **Kissell (2013)** on practitioner benchmarks. But for "how do I pose and solve a trading problem," this is the source.`,
      id: `*Algorithmic and High-Frequency Trading* jadi salah satu teks graduate dan rujukan standar buat pendekatan matematis ke trading. Kontribusi awetnya: (1) dia **nyatuin** literatur yang terfragmentasi — begitu kamu liat execution, market making, VWAP, dan pairs trading sebagai satu template stochastic-control, field-nya jadi bisa dipelajari daripada tumpukan model terpisah; (2) dia bikin optimal execution jadi *strategi*, bukan jadwal — solusi HJB-nya itu feedback control yang bereaksi ke inventory dan harga yang terealisasi, peningkatan konseptual atas resep Almgren-Chriss asli; dan (3) dia beneran usable — dia masangin tiap model sama fakta empiris terstilisasi yang ngejustifikasi-nya dan ngirim dataset serta kode MATLAB (lewat algorithmic-trading.org), jadi model-nya bisa dikalibrasi dan disimulasi, bukan cuma dikagumi. Batasnya disengaja: dia sebagian besar nganggep price impact linear (atau sederhana), ninggalin engineering sistem/latency dan regulasi ke yang lain, dan secara matematis berat (continuous-time control itu prereq beneran). Teks pendamping ngelanjutin dari tempat dia narik garis — **Guéant (2016)** lebih dalam soal matematika likuiditas, **Bouchaud et al. (2018)** soal empiris/econophysics impact, **Kissell (2013)** soal benchmark praktisi. Tapi buat "gimana aku ngajuin dan nyelesain problem trading," ini sumbernya.`
    },
    keyWorks: [
      { year: 2015, title: 'Algorithmic and High-Frequency Trading (this item)', venue: 'Cambridge University Press' },
      { year: 2014, title: 'Buy Low, Sell High: A High-Frequency Trading Perspective (Cartea, Jaimungal & Ricci)', venue: 'SIAM Journal on Financial Mathematics' },
      { year: 2012, title: 'Where is the Value in High Frequency Trading? (Cartea & Penalva)', venue: 'Quarterly Journal of Finance' },
      { year: 2010, title: 'Signal Orderings Based on Dispersion and the Supply of Private Information in Auctions (Ganuza & Penalva)', venue: 'Econometrica' },
      { year: 2005, title: 'Pricing in Electricity Markets: A Mean Reverting Jump Diffusion Model with Seasonality (Cartea & Figueroa)', venue: 'Applied Mathematical Finance' },
    ],
  },

  sections: [
    // ─────────────── 1. motivation ───────────────
    {
      id: 'motivation',
      heading: { en: 'Why this matters', id: 'Kenapa ini penting' },
      body: {
        en: `By this point in the track you have met the foundational trading models one at a time: Almgren-Chriss for **executing** a large order, Avellaneda-Stoikov for **making markets**, Cont-Kukanov-Stoikov for reading **order flow**. Each is a self-contained paper with its own notation and its own trick. The natural next question is: *is there one way to think about all of them?*

That is exactly what Cartea, Jaimungal and Penalva's *Algorithmic and High-Frequency Trading* (2015) provides. It is the graduate textbook that put algorithmic trading on a single mathematical footing — **continuous-time stochastic optimal control**. The claim it makes good on is that almost every algorithmic-trading problem has the same shape:

> an agent controls something (how fast to trade, where to quote, when to enter a pair), faces random price dynamics and random order arrivals, and wants to maximize an objective (final wealth, minus penalties for inventory risk and for ending with a position). Solve the resulting **Hamilton-Jacobi-Bellman (HJB)** equation and you get the optimal strategy.

Pose the problem, derive the HJB, solve it (often in closed form), read off a **feedback strategy** — a rule that says what to do given the current time, inventory, and price. Do this once and you have the recipe; the rest of the book is turning the crank on one trading problem after another.

Two things make the book matter beyond elegance. First, it is **grounded**: Part I is a careful tour of how electronic markets actually work and the empirical stylized facts of high-frequency data (fat tails, intraday volume curves, the autocorrelation of signed trades, price impact), so the models are calibrated to reality rather than invented. Second, it is **complete enough to use**: it develops the control machinery from scratch (Part II) and ships datasets and MATLAB code, so the models can be simulated and calibrated. It is, in short, the book that turns "trading strategy" from a collection of clever papers into a *subject*.`,
        id: `Sampai titik ini di track-nya kamu udah ketemu model trading fondasi satu per satu: Almgren-Chriss buat **ngeksekusi** order gede, Avellaneda-Stoikov buat **bikin market**, Cont-Kukanov-Stoikov buat baca **order flow**. Masing-masing paper yang self-contained dengan notasi sendiri dan trik sendiri. Pertanyaan natural berikutnya: *apakah ada satu cara mikirin semuanya?*

Itu persis yang *Algorithmic and High-Frequency Trading* (2015)-nya Cartea, Jaimungal dan Penalva sediain. Ini textbook graduate yang naruh algorithmic trading di atas satu pijakan matematis — **stochastic optimal control continuous-time**. Klaim yang dia tepatin itu bahwa hampir tiap problem algorithmic-trading punya bentuk yang sama:

> seorang agen ngontrol sesuatu (seberapa cepet trade, di mana quote, kapan masuk pair), hadapi dinamika harga random dan kedatangan order random, dan pengen ngemaksimalin objektif (wealth akhir, dikurang penalty buat inventory risk dan buat ngakhirin dengan posisi). Selesaiin persamaan **Hamilton-Jacobi-Bellman (HJB)** yang dihasilin dan kamu dapet strategi optimal.

Ajuin problem-nya, turunin HJB, selesaiin (sering dalam closed form), baca **strategi feedback**-nya — aturan yang bilang apa yang harus dilakuin dikasih waktu, inventory, dan harga saat ini. Lakuin ini sekali dan kamu punya resepnya; sisa buku-nya muter engkol di satu problem trading demi satu.

Dua hal bikin buku-nya penting di luar keanggunan. Pertama, dia **berlandaskan**: Part I itu tur hati-hati soal gimana pasar elektronik beneran bekerja dan fakta empiris terstilisasi dari data high-frequency (fat tail, kurva volume intraday, autokorelasi signed trade, price impact), jadi model-nya dikalibrasi ke realitas daripada dikarang. Kedua, dia **cukup lengkap buat dipake**: dia ngembangin mesin control-nya dari nol (Part II) dan ngirim dataset serta kode MATLAB, jadi model-nya bisa disimulasi dan dikalibrasi. Pendeknya, ini buku yang ngubah "trading strategy" dari kumpulan paper pinter jadi sebuah *subjek*.`
      }
    },

    // ─────────────── 2. intuition ───────────────
    {
      id: 'intuition',
      heading: { en: 'Intuition', id: 'Intuisi' },
      body: {
        en: `The single idea worth carrying away is **strategy, not schedule**.

Almgren-Chriss, in its original form, hands you a *schedule*: before you start, it tells you how many shares to sell in each interval. But markets are random — by interval three, the price has moved and your fills have not been exactly what you planned. A schedule cannot adapt. What you really want is a *rule*: "given that it is now time $t$ and I still hold $q$ shares, trade at this rate." That rule is a **feedback control**, and producing feedback controls is exactly what stochastic optimal control does.

Here is the mental picture. Define a **value function** $H(t, \\cdot)$ = the best objective you can still achieve from now to the end, given your current state (time, cash, inventory, price). Two truths pin it down:

- **Bellman's principle**: the best strategy over the whole horizon must also be the best strategy over the next instant *plus* the best strategy from there on. So acting optimally for a tiny moment $dt$ and then continuing optimally cannot beat acting optimally throughout — they are equal.
- Pushing that equality to the limit $dt \\to 0$ turns it into a differential equation for $H$ — the **HJB equation** — with a $\\sup$ (or $\\max$) inside it over the control. Solving the $\\sup$ tells you the optimal action *as a function of the state*.

That is the whole trick, and its payoff is generality. Change what the agent **controls** and you change the problem:

- control the **trading rate** $\\nu_t$ → optimal *execution* (recovers Almgren-Chriss);
- control the **quote depths** $\\delta^\\pm$ (which set how fast your limit orders fill) → *market making* (recovers Avellaneda-Stoikov);
- control **entry/exit times** of a mean-reverting spread → *pairs trading*.

Same value function, same HJB, same verification step — different state and control. Once you internalize that, the book stops being twelve chapters and becomes one method applied twelve times. And because the answer is always a feedback rule, the resulting strategies are *reactive*: they speed up or slow down, skew quotes, or bail out of a position as the realized state demands.`,
        id: `Satu ide yang layak dibawa pulang itu **strategi, bukan jadwal**.

Almgren-Chriss, dalam bentuk aslinya, ngasih kamu *jadwal*: sebelum kamu mulai, dia bilang berapa share dijual di tiap interval. Tapi pasar itu random — pas interval tiga, harganya udah gerak dan fill-mu gak persis seperti yang kamu rencanain. Jadwal gak bisa beradaptasi. Yang kamu beneran mau itu *aturan*: "dikasih sekarang waktu $t$ dan aku masih pegang $q$ share, trade di rate ini." Aturan itu **feedback control**, dan ngehasilin feedback control itu persis yang stochastic optimal control lakuin.

Ini gambaran mentalnya. Definisiin **value function** $H(t, \\cdot)$ = objektif terbaik yang masih bisa kamu capai dari sekarang sampai akhir, dikasih state saat ini (waktu, cash, inventory, harga). Dua kebenaran ngancingin dia:

- **Prinsip Bellman**: strategi terbaik over seluruh horizon harus juga strategi terbaik over instan berikutnya *plus* strategi terbaik dari situ seterusnya. Jadi bertindak optimal buat momen kecil $dt$ terus lanjut optimal gak bisa ngalahin bertindak optimal sepanjang waktu — mereka sama.
- Ndorong kesamaan itu ke limit $dt \\to 0$ ngubahnya jadi persamaan diferensial buat $H$ — **persamaan HJB** — dengan $\\sup$ (atau $\\max$) di dalamnya over control. Nyelesaiin $\\sup$-nya ngasih tau kamu aksi optimal *sebagai fungsi dari state*.

Itu seluruh triknya, dan hasilnya itu generalitas. Ubah apa yang agen **kontrol** dan kamu ngubah problem-nya:

- kontrol **trading rate** $\\nu_t$ → *execution* optimal (ngerecover Almgren-Chriss);
- kontrol **quote depth** $\\delta^\\pm$ (yang nentuin seberapa cepet limit order-mu kepenuhan) → *market making* (ngerecover Avellaneda-Stoikov);
- kontrol **waktu masuk/keluar** dari spread mean-reverting → *pairs trading*.

Value function sama, HJB sama, langkah verification sama — state dan control beda. Begitu kamu internalisasi itu, buku-nya berhenti jadi dua belas bab dan jadi satu metode yang diterapin dua belas kali. Dan karena jawabannya selalu aturan feedback, strategi yang dihasilin itu *reaktif*: mereka mempercepat atau memperlambat, nge-skew quote, atau kabur dari posisi sesuai tuntutan state yang terealisasi.`
      }
    },

    // ─────────────── 3. formalization ───────────────
    {
      id: 'formalization',
      heading: { en: 'The recipe, formalized', id: 'Resepnya, diformalkan' },
      body: {
        en: `**The state and the control.** An agent's situation is a state — time $t$, cash $X_t$, inventory $Q_t$, midprice $S_t$ — that evolves through controlled stochastic differential equations. The agent chooses a **control** $u_t$ to maximize an objective of the form

$$\\mathbb{E}\\Big[\\, X_T + Q_T\\big(S_T - \\ell(Q_T)\\big) \\;-\\; \\phi\\!\\int_0^T \\sigma^2 Q_s^2\\, ds \\,\\Big],$$

i.e. terminal cash, plus the inventory marked out at a liquidation penalty $\\ell$, minus a **running inventory penalty** $\\phi\\sigma^2 Q_s^2$ that charges you for holding a risky position. The coefficient $\\phi$ is the book's risk-aversion / urgency knob.

**The value function and the HJB.** Let $H(t,x,q,S)$ be the best achievable value of the objective from state $(x,q,S)$ at time $t$. The Dynamic Programming Principle says $H$ satisfies a **Hamilton-Jacobi-Bellman equation**: the time-derivative plus the generator of the uncontrolled dynamics, plus a $\\sup$ over the control of the terms it affects, equals zero — with terminal condition $H(T,x,q,S) = x + q\\big(S-\\ell(q)\\big)$. A **verification theorem** then confirms the candidate solution is the true value function and the maximizer is the optimal control.

**Two kinds of control — the book's organizing distinction.**

*Continuous-rate control (diffusion).* In execution you choose a trading **rate** $\\nu_t$, so $dQ_t = -\\nu_t\\,dt$ and trading costs are quadratic in the rate (temporary impact $k\\nu$). The control enters the HJB as $\\sup_\\nu\\{\\nu(S - k\\nu)\\partial_x H - \\nu\\,\\partial_q H\\}$ — a smooth maximization solved by setting the derivative to zero. With ansatz $H = x + qS + h(t,q)$, this collapses to an ODE for $h$ and yields the optimal speed $\\nu^*(t,q)$, which is **linear in inventory**: $\\nu^*(t,q) = \\gamma\\coth\\big(\\gamma(T-t)+\\zeta\\big)\\,q$ with $\\gamma = \\sqrt{\\phi\\sigma^2/k}$. The remaining-inventory path is the hyperbolic-sine Almgren-Chriss trajectory; as $\\phi \\to 0$ it straightens into TWAP.

*Point-process control (jumps).* In market making you choose **quote depths** $\\delta^\\pm$, and your limit orders fill via Poisson arrivals whose intensity decays with depth, $\\lambda^0 e^{-\\kappa\\delta}$. Inventory jumps $\\pm 1$ on each fill. The control now enters inside the Poisson generator: $\\sup_{\\delta^\\pm}\\lambda^0 e^{-\\kappa\\delta^\\pm}\\,[\\Delta^\\pm H]$. Solving gives optimal depths of the form $\\delta^{\\pm*}(t,q) = \\tfrac{1}{\\kappa} + \\big[h(t,q) - h(t,q\\mp 1)\\big]$ — a symmetric **half-spread $1/\\kappa$** plus an **inventory skew** that shifts quotes to mean-revert inventory toward zero.

That contrast — a smooth rate vs. a jump-intensity depth — is the technical heart of the book: the same DPP/HJB/verification recipe handles both, and almost every Part III model is one of these two control types (plus optimal stopping for the entry/exit timing of statistical arbitrage).`,
        id: `**State dan control.** Situasi seorang agen itu sebuah state — waktu $t$, cash $X_t$, inventory $Q_t$, midprice $S_t$ — yang berkembang lewat persamaan diferensial stochastic yang dikontrol. Agen milih **control** $u_t$ buat ngemaksimalin objektif berbentuk

$$\\mathbb{E}\\Big[\\, X_T + Q_T\\big(S_T - \\ell(Q_T)\\big) \\;-\\; \\phi\\!\\int_0^T \\sigma^2 Q_s^2\\, ds \\,\\Big],$$

yaitu cash terminal, plus inventory yang di-mark out di penalty likuidasi $\\ell$, dikurang **running inventory penalty** $\\phi\\sigma^2 Q_s^2$ yang nagih kamu buat nahan posisi berisiko. Koefisien $\\phi$ itu knob risk-aversion / urgency buku-nya.

**Value function dan HJB.** Misal $H(t,x,q,S)$ itu nilai terbaik yang bisa dicapai dari objektif dari state $(x,q,S)$ di waktu $t$. Dynamic Programming Principle bilang $H$ memenuhi **persamaan Hamilton-Jacobi-Bellman**: turunan-waktu plus generator dari dinamika yang gak dikontrol, plus $\\sup$ over control dari term yang dia pengaruhi, sama dengan nol — dengan terminal condition $H(T,x,q,S) = x + q\\big(S-\\ell(q)\\big)$. **Verification theorem** terus ngonfirmasi solusi kandidatnya itu value function yang bener dan maximizer-nya control optimal.

**Dua jenis control — distingsi pengorganisasi buku-nya.**

*Continuous-rate control (diffusion).* Di execution kamu milih **rate** trading $\\nu_t$, jadi $dQ_t = -\\nu_t\\,dt$ dan biaya trading kuadratik di rate (temporary impact $k\\nu$). Control-nya masuk ke HJB sebagai $\\sup_\\nu\\{\\nu(S - k\\nu)\\partial_x H - \\nu\\,\\partial_q H\\}$ — maksimisasi mulus yang diselesaiin dengan nyetel turunan ke nol. Dengan ansatz $H = x + qS + h(t,q)$, ini kolaps jadi ODE buat $h$ dan ngehasilin speed optimal $\\nu^*(t,q)$, yang **linear di inventory**: $\\nu^*(t,q) = \\gamma\\coth\\big(\\gamma(T-t)+\\zeta\\big)\\,q$ dengan $\\gamma = \\sqrt{\\phi\\sigma^2/k}$. Path sisa-inventory-nya itu trajectory hyperbolic-sine Almgren-Chriss; pas $\\phi \\to 0$ dia ngelurus jadi TWAP.

*Point-process control (jumps).* Di market making kamu milih **quote depth** $\\delta^\\pm$, dan limit order-mu kepenuhan lewat kedatangan Poisson yang intensitasnya meluruh sama depth, $\\lambda^0 e^{-\\kappa\\delta}$. Inventory loncat $\\pm 1$ tiap fill. Control-nya sekarang masuk di dalam generator Poisson: $\\sup_{\\delta^\\pm}\\lambda^0 e^{-\\kappa\\delta^\\pm}\\,[\\Delta^\\pm H]$. Nyelesaiin-nya ngasih depth optimal berbentuk $\\delta^{\\pm*}(t,q) = \\tfrac{1}{\\kappa} + \\big[h(t,q) - h(t,q\\mp 1)\\big]$ — **half-spread $1/\\kappa$** simetris plus **inventory skew** yang nggeser quote buat nge-mean-revert inventory menuju nol.

Kontras itu — rate mulus vs. depth jump-intensity — itu jantung teknis buku-nya: resep DPP/HJB/verification yang sama nanganin keduanya, dan hampir tiap model Part III itu salah satu dari dua jenis control ini (plus optimal stopping buat timing masuk/keluar statistical arbitrage).`
      }
    },

    // ─────────────── 4. worked-example ───────────────
    {
      id: 'worked-example',
      heading: { en: 'Worked example', id: 'Contoh kerjaan' },
      body: {
        en: `**One recipe, two problems.** The fastest way to feel the book's unity is to run the same four steps — (1) write the controlled dynamics, (2) write the objective, (3) derive the HJB, (4) solve and read off the feedback control — on the two flagship problems, and watch the *only* difference be the control.

**Problem A — optimal execution (Chapter 6).** Liquidate $N$ shares over $[0,T]$. Control: the trading rate $\\nu_t$, with $dQ_t=-\\nu_t\\,dt$; temporary impact makes you trade at $S_t-k\\nu_t$. Objective: terminal cash minus the running inventory penalty $\\phi\\sigma^2 Q^2$. The HJB's $\\sup_\\nu$ is smooth; the ansatz $H=x+qS+h(t,q)$ gives a feedback speed linear in inventory and the **hyperbolic-sine liquidation trajectory** with urgency $\\gamma=\\sqrt{\\phi\\sigma^2/k}$. This is *exactly* the Almgren-Chriss result from that module: with $\\gamma=0.5$ and $N=100{,}000$ over $T=5$, the optimal holdings are $100{,}000 \\to 59{,}946 \\to 35{,}194 \\to 19{,}424 \\to 8{,}613 \\to 0$ — front-loaded selling — and as $\\phi\\to 0$ they straighten to the TWAP line $100{,}000/80{,}000/60{,}000/40{,}000/20{,}000/0$. The book's contribution is not the numbers; it is that they fall out of a control problem as a *strategy* $\\nu^*(t,Q_t)$ that re-optimizes off realized inventory.

**Problem B — market making (Chapter 10).** Quote a bid at depth $\\delta^-$ below mid and an ask at depth $\\delta^+$ above. Control: the depths $\\delta^\\pm$; fills are Poisson with intensity $\\lambda^0 e^{-\\kappa\\delta}$, so inventory jumps $\\pm 1$. Same objective shape (terminal cash, running inventory penalty). Now the HJB's $\\sup$ sits *inside* a Poisson term, and the same ansatz yields optimal depths

$$\\delta^{\\pm*}(t,q) = \\frac{1}{\\kappa} + \\big[h(t,q)-h(t,q\\mp 1)\\big].$$

The first piece, $1/\\kappa$, is a symmetric half-spread (how much edge you demand for immediacy). The second piece is the **inventory skew**: when you are long ($q>0$) it pushes *both* quotes down — your ask gets keener (sell the excess) and your bid gets shyer (stop buying) — which is precisely the Avellaneda-Stoikov behaviour from that module, where holding +5 recenters the quotes below the mid. As volatility, risk aversion $\\phi$, or time-to-close grow, the half-spread widens and the skew steepens.

**The punchline.** Two of the most important results in trading — the Almgren-Chriss execution trajectory and the Avellaneda-Stoikov quoting rule — are the *same* HJB recipe with the control swapped from a continuous rate to a jump-intensity depth. That is the book in one example. (Constants such as the exact placement of $k$, $\\kappa$, and the sign of the skew follow the book's own normalization; the structure above is what generalizes.)`,
        id: `**Satu resep, dua problem.** Cara tercepat ngerasain kesatuan buku-nya itu ngejalanin empat langkah yang sama — (1) tulis dinamika yang dikontrol, (2) tulis objektif, (3) turunin HJB, (4) selesaiin dan baca feedback control-nya — di dua problem unggulan, dan liat *satu-satunya* beda itu control-nya.

**Problem A — optimal execution (Bab 6).** Liquidate $N$ share over $[0,T]$. Control: rate trading $\\nu_t$, dengan $dQ_t=-\\nu_t\\,dt$; temporary impact bikin kamu trade di $S_t-k\\nu_t$. Objektif: cash terminal dikurang running inventory penalty $\\phi\\sigma^2 Q^2$. $\\sup_\\nu$ di HJB-nya mulus; ansatz $H=x+qS+h(t,q)$ ngasih feedback speed linear di inventory dan **trajectory liquidation hyperbolic-sine** dengan urgency $\\gamma=\\sqrt{\\phi\\sigma^2/k}$. Ini *persis* hasil Almgren-Chriss dari modul itu: dengan $\\gamma=0.5$ dan $N=100{,}000$ over $T=5$, holdings optimal-nya $100{,}000 \\to 59{,}946 \\to 35{,}194 \\to 19{,}424 \\to 8{,}613 \\to 0$ — jual front-loaded — dan pas $\\phi\\to 0$ mereka ngelurus ke garis TWAP $100{,}000/80{,}000/60{,}000/40{,}000/20{,}000/0$. Kontribusi buku-nya bukan angkanya; tapi bahwa mereka jatuh keluar dari problem control sebagai *strategi* $\\nu^*(t,Q_t)$ yang nge-re-optimasi dari inventory yang terealisasi.

**Problem B — market making (Bab 10).** Quote bid di depth $\\delta^-$ di bawah mid dan ask di depth $\\delta^+$ di atas. Control: depth $\\delta^\\pm$; fill itu Poisson dengan intensitas $\\lambda^0 e^{-\\kappa\\delta}$, jadi inventory loncat $\\pm 1$. Bentuk objektif sama (cash terminal, running inventory penalty). Sekarang $\\sup$ di HJB-nya duduk *di dalam* term Poisson, dan ansatz yang sama ngehasilin depth optimal

$$\\delta^{\\pm*}(t,q) = \\frac{1}{\\kappa} + \\big[h(t,q)-h(t,q\\mp 1)\\big].$$

Potongan pertama, $1/\\kappa$, itu half-spread simetris (seberapa banyak edge yang kamu minta buat immediacy). Potongan kedua itu **inventory skew**: pas kamu long ($q>0$) dia ndorong *kedua* quote turun — ask-mu jadi lebih agresif (jual kelebihan) dan bid-mu jadi lebih malu (berhenti beli) — yang persis behaviour Avellaneda-Stoikov dari modul itu, di mana nahan +5 nge-recenter quote di bawah mid. Pas volatility, risk aversion $\\phi$, atau time-to-close tumbuh, half-spread-nya melebar dan skew-nya makin curam.

**Punchline-nya.** Dua hasil paling penting di trading — trajectory eksekusi Almgren-Chriss dan aturan quoting Avellaneda-Stoikov — itu resep HJB yang *sama* dengan control ditukar dari rate continuous ke depth jump-intensity. Itu buku-nya dalam satu contoh. (Konstanta kayak penempatan persis $k$, $\\kappa$, dan tanda skew-nya ngikut normalisasi buku-nya sendiri; struktur di atas yang nggeneralisasi.)`
      }
    },

    // ─────────────── 5. applications ───────────────
    {
      id: 'applications',
      heading: { en: 'Applications', id: 'Aplikasi' },
      body: {
        en: `**Who should read it, and what you can build with it.**

**It is the reference for posing a trading problem.** If you need to design an execution algorithm, a market-making engine, a VWAP/POV tracker, or a stat-arb strategy *and you want it to be optimal in a defensible sense*, this is the book that shows you how to write it as a control problem and solve it. The Part III menu — optimal execution (continuous, with limit/market orders, and across lit and dark venues), targeting volume (VWAP, POV), market making (with adverse selection and short-term alpha), pairs trading, and order-imbalance strategies — is essentially the menu of bread-and-butter quant-execution work.

**It pairs models with code and data.** The companion site ships datasets and MATLAB implementations, so the models are calibratable and simulatable. The practical loop the book supports is: read the empirical chapters to know what the data look like, pick the matching model, calibrate its parameters ($\\sigma$, impact $k$, fill-intensity $\\kappa$, risk aversion $\\phi$), simulate, and stress-test.

**It teaches you to read newer work.** Once you have the HJB recipe, the research literature on optimal trading (model uncertainty, reinforcement-learning execution, multi-asset and signal-driven strategies) becomes readable — most of it is "the book's problem, plus one more feature."

**Where it sits among the companions.** Reach for **Guéant (2016)** when you want the deepest, most rigorous liquidity mathematics and the closed-form market-making theory; **Bouchaud, Bonart, Donier & Gould (2018)** when you want the empirical/econophysics of price impact (the square-root law, order-book dynamics); **Kissell (2013)** when you want the practitioner's view of VWAP/TWAP/POV benchmarks and transaction-cost analysis. Cartea-Jaimungal-Penalva is the one that gives you the *unifying method*.

**The honest caveats.** It assumes you will learn (or know) continuous-time stochastic control — it is genuinely a graduate text. Its impact models are mostly linear/simple, so the most aggressive size or the most illiquid names need the extensions the book points to. And it deliberately ignores the systems, latency, and regulatory engineering that a live trading operation also requires. It tells you the *optimal strategy*; turning that into a production system is a separate craft.`,
        id: `**Siapa yang harus baca, dan apa yang bisa kamu bangun dengannya.**

**Dia rujukan buat ngajuin problem trading.** Kalau kamu perlu ngedesain execution algorithm, market-making engine, VWAP/POV tracker, atau strategi stat-arb *dan kamu mau dia optimal dalam arti yang bisa dipertahankan*, ini buku yang nunjukin kamu gimana nulisnya sebagai problem control dan nyelesainnya. Menu Part III-nya — optimal execution (continuous, dengan limit/market order, dan lintas venue lit dan dark), targeting volume (VWAP, POV), market making (dengan adverse selection dan short-term alpha), pairs trading, dan strategi order-imbalance — itu pada dasarnya menu kerja quant-execution roti-dan-mentega.

**Dia masangin model sama kode dan data.** Situs pendampingnya ngirim dataset dan implementasi MATLAB, jadi model-nya calibratable dan simulatable. Loop praktis yang buku-nya dukung itu: baca bab empiris buat tau gimana data-nya kelihatan, pilih model yang cocok, kalibrasi parameternya ($\\sigma$, impact $k$, fill-intensity $\\kappa$, risk aversion $\\phi$), simulasi, dan stress-test.

**Dia ngajarin kamu baca kerja yang lebih baru.** Begitu kamu punya resep HJB, literatur riset soal optimal trading (model uncertainty, eksekusi reinforcement-learning, strategi multi-asset dan signal-driven) jadi bisa dibaca — sebagian besarnya itu "problem buku-nya, plus satu fitur lagi."

**Di mana dia duduk di antara pendampingnya.** Raih **Guéant (2016)** pas kamu mau matematika likuiditas terdalam dan paling rigorous serta teori market-making closed-form; **Bouchaud, Bonart, Donier & Gould (2018)** pas kamu mau empiris/econophysics price impact (hukum akar-kuadrat, dinamika order-book); **Kissell (2013)** pas kamu mau pandangan praktisi soal benchmark VWAP/TWAP/POV dan transaction-cost analysis. Cartea-Jaimungal-Penalva itu yang ngasih kamu *metode pemersatu*.

**Caveat jujurnya.** Dia nganggep kamu bakal belajar (atau tau) stochastic control continuous-time — dia beneran teks graduate. Model impact-nya sebagian besar linear/sederhana, jadi size paling agresif atau nama paling illiquid butuh ekstensi yang buku-nya tunjuk. Dan dia sengaja ngabaikan engineering sistem, latency, dan regulasi yang operasi trading live juga butuhin. Dia ngasih tau kamu *strategi optimal*-nya; ngubah itu jadi sistem produksi itu kerajinan terpisah.`
      }
    },

    // ─────────────── 6. practice ───────────────
    {
      id: 'practice',
      heading: { en: 'Practice', id: 'Latihan' },
      body: {
        en: `**1.** A market maker uses the book's Chapter 10 model and quotes optimal depths $\\delta^{\\pm*}(t,q) = 1/\\kappa + \\text{(inventory skew)}$. If the fill-intensity decay is $\\kappa = 20$ (in units of 1/price), what is the symmetric half-spread, and — when the maker is *long* five units ($q=+5$) — which way do both quotes move, and why?

<details><summary>Answer</summary>
The symmetric half-spread is $1/\\kappa = 1/20 = 0.05$ in price units — the edge the maker charges for immediacy, set purely by how fast fills decay with depth. When long $q=+5$, the inventory-skew term shifts **both** quotes **down**: the ask moves closer to the mid (so the maker sells the unwanted long faster) and the bid also moves down (so the maker is less likely to buy even more). Equivalently, the maker quotes around a *reservation price* below the mid. The skew exists to mean-revert inventory toward zero — exactly the Avellaneda-Stoikov behaviour. It steepens as volatility, risk aversion $\\phi$, or time-to-horizon grow.
</details>

**2.** Execution uses a continuous-rate control and market making uses a point-process (depth) control. Show *where* each control enters the HJB equation, and explain why the two problems need different control types.

<details><summary>Answer</summary>
In execution the control is the trading rate $\\nu$, which appears in a **smooth** term $\\sup_\\nu\\{\\nu(S-k\\nu)\\partial_x H - \\nu\\partial_q H\\}$ — quadratic in $\\nu$ (because temporary impact $k\\nu$ makes cost grow with the square of the rate), solved by setting the derivative to zero. In market making you cannot choose *when* a trade happens — fills arrive randomly — so the control is the **depth** $\\delta$, which modulates a Poisson arrival intensity $\\lambda^0 e^{-\\kappa\\delta}$; the optimization sits *inside* the jump term, $\\sup_\\delta \\lambda^0 e^{-\\kappa\\delta}[\\Delta H]$. The difference is physical: a liquidator can dial a continuous trading speed, while a market maker can only set prices and wait for stochastic fills — so one problem is controlled through a diffusion (rate), the other through a point process (intensity). The book's achievement is that the same DPP/HJB/verification recipe handles both.
</details>

**3.** The execution chapters add a short-term **alpha** signal $\\alpha_t$ (a predicted drift) to the midprice during a liquidation. Qualitatively, how should the optimal selling speed change when $\\alpha_t > 0$ (the price is predicted to rise), versus the no-signal Almgren-Chriss baseline?

<details><summary>Answer</summary>
The optimal speed becomes the Almgren-Chriss feedback rule **plus** an alpha-driven term. If you are selling and $\\alpha_t > 0$ — the price is predicted to rise — you should *slow down* relative to the AC baseline, holding inventory a little longer to sell into the anticipated higher price (the signal partly offsets the urgency to reduce inventory risk). If $\\alpha_t < 0$ (price predicted to fall), you should *speed up* and sell sooner. The signal does not replace the AC trajectory; it tilts it, trading some inventory-risk reduction against the predicted price move. The same HJB simply carries the extra $\\alpha$ term through to the optimal control.
</details>

**4.** You have four texts on the shelf: Cartea-Jaimungal-Penalva (2015), Guéant (2016), Bouchaud et al. (2018), and Kissell (2013). For each of these tasks, which do you open first — (a) deriving the optimal quotes for a new market-making problem from an HJB; (b) calibrating a realistic price-impact function from trade data; (c) explaining VWAP/TWAP/POV benchmarks to a buy-side execution desk?

<details><summary>Answer</summary>
(a) **Cartea-Jaimungal-Penalva** (or **Guéant 2016** for the deepest, most rigorous closed-form market-making mathematics) — both are built on the stochastic-control/HJB method; CJP for the unified recipe, Guéant when you need the heavier liquidity-math machinery. (b) **Bouchaud, Bonart, Donier & Gould (2018)** — it is the empirical/econophysics reference for price impact, including the square-root impact law and order-book dynamics, i.e. what impact actually looks like in data. (c) **Kissell (2013)** — the practitioner reference for execution benchmarks (VWAP/TWAP/POV) and transaction-cost analysis, pitched at the trading desk rather than the theorem. The point: CJP gives the *method*, Guéant the *depth*, Bouchaud the *empirics*, Kissell the *practice*.
</details>`,
        id: `**1.** Seorang market maker pakai model Bab 10 buku-nya dan quote depth optimal $\\delta^{\\pm*}(t,q) = 1/\\kappa + \\text{(inventory skew)}$. Kalau peluruhan fill-intensity-nya $\\kappa = 20$ (dalam unit 1/harga), berapa half-spread simetrisnya, dan — pas maker *long* lima unit ($q=+5$) — ke arah mana kedua quote gerak, dan kenapa?

<details><summary>Jawaban</summary>
Half-spread simetrisnya $1/\\kappa = 1/20 = 0.05$ dalam unit harga — edge yang maker tagih buat immediacy, ditentuin murni sama seberapa cepet fill meluruh sama depth. Pas long $q=+5$, term inventory-skew nggeser **kedua** quote **turun**: ask gerak lebih deket ke mid (jadi maker jual long yang gak diinginin lebih cepet) dan bid juga gerak turun (jadi maker lebih kecil kemungkinan beli lebih banyak lagi). Setara, maker quote di sekitar *reservation price* di bawah mid. Skew-nya ada buat nge-mean-revert inventory menuju nol — persis behaviour Avellaneda-Stoikov. Dia makin curam pas volatility, risk aversion $\\phi$, atau time-to-horizon tumbuh.
</details>

**2.** Execution pakai control continuous-rate dan market making pakai control point-process (depth). Tunjukin *di mana* tiap control masuk ke persamaan HJB, dan jelasin kenapa dua problem-nya butuh jenis control yang beda.

<details><summary>Jawaban</summary>
Di execution control-nya itu rate trading $\\nu$, yang muncul di term **mulus** $\\sup_\\nu\\{\\nu(S-k\\nu)\\partial_x H - \\nu\\partial_q H\\}$ — kuadratik di $\\nu$ (karena temporary impact $k\\nu$ bikin biaya tumbuh dengan kuadrat rate), diselesaiin dengan nyetel turunan ke nol. Di market making kamu gak bisa milih *kapan* trade terjadi — fill datang random — jadi control-nya itu **depth** $\\delta$, yang ngemodulasi intensitas kedatangan Poisson $\\lambda^0 e^{-\\kappa\\delta}$; optimisasinya duduk *di dalam* term jump, $\\sup_\\delta \\lambda^0 e^{-\\kappa\\delta}[\\Delta H]$. Bedanya fisik: seorang liquidator bisa nyetel speed trading continuous, sementara market maker cuma bisa nyetel harga dan nunggu fill stochastic — jadi satu problem dikontrol lewat diffusion (rate), yang lain lewat point process (intensitas). Pencapaian buku-nya itu bahwa resep DPP/HJB/verification yang sama nanganin keduanya.
</details>

**3.** Bab-bab eksekusi nambah sinyal **alpha** jangka-pendek $\\alpha_t$ (drift yang diprediksi) ke midprice selama liquidation. Secara kualitatif, gimana speed jual optimal harus berubah pas $\\alpha_t > 0$ (harga diprediksi naik), versus baseline Almgren-Chriss tanpa-sinyal?

<details><summary>Jawaban</summary>
Speed optimal-nya jadi aturan feedback Almgren-Chriss **plus** term yang digerakin alpha. Kalau kamu jual dan $\\alpha_t > 0$ — harga diprediksi naik — kamu harusnya *melambat* relatif ke baseline AC, nahan inventory sedikit lebih lama buat jual ke harga lebih tinggi yang diantisipasi (sinyalnya sebagian ngimbangin urgensi buat ngurangin inventory risk). Kalau $\\alpha_t < 0$ (harga diprediksi turun), kamu harusnya *mempercepat* dan jual lebih cepet. Sinyalnya gak ngeganti trajectory AC; dia ngemiringinnya, nuker sebagian pengurangan inventory-risk lawan pergerakan harga yang diprediksi. HJB yang sama cuma ngebawa term $\\alpha$ ekstra itu sampai ke control optimal.
</details>

**4.** Kamu punya empat teks di rak: Cartea-Jaimungal-Penalva (2015), Guéant (2016), Bouchaud et al. (2018), dan Kissell (2013). Buat tiap tugas ini, mana yang kamu buka dulu — (a) nurunin quote optimal buat problem market-making baru dari HJB; (b) ngalibrasi fungsi price-impact realistis dari data trade; (c) ngejelasin benchmark VWAP/TWAP/POV ke execution desk buy-side?

<details><summary>Jawaban</summary>
(a) **Cartea-Jaimungal-Penalva** (atau **Guéant 2016** buat matematika market-making closed-form terdalam dan paling rigorous) — keduanya dibangun di atas metode stochastic-control/HJB; CJP buat resep terpadu, Guéant pas kamu butuh mesin liquidity-math yang lebih berat. (b) **Bouchaud, Bonart, Donier & Gould (2018)** — itu rujukan empiris/econophysics buat price impact, termasuk hukum impact akar-kuadrat dan dinamika order-book, yaitu gimana impact beneran kelihatan di data. (c) **Kissell (2013)** — rujukan praktisi buat benchmark eksekusi (VWAP/TWAP/POV) dan transaction-cost analysis, dilempar ke trading desk daripada ke teorema. Intinya: CJP ngasih *metode*, Guéant *kedalaman*, Bouchaud *empiris*, Kissell *praktik*.
</details>`
      }
    },

    // ─────────────── 7. connections ───────────────
    {
      id: 'connections',
      heading: { en: 'Connections', id: 'Koneksi' },
      body: {
        en: `- **Recovers**: [Avellaneda-Stoikov 2008](item:stoikov-2008) (the market-making problem, Ch.10 — the catalog lists this book's prereq as exactly this paper) and [Almgren-Chriss 2000](item:almgren-chriss-2000) (the execution trajectory, Ch.6) — both become special cases of the one HJB recipe.
- **Foundations**: [Kyle 1985](item:kyle-1985) supplies the price-impact $\\lambda$ and the informed/uninformed split the book's impact and adverse-selection models inherit; [Glosten-Milgrom 1985](item:glosten-milgrom-1985) supplies the bid-ask spread decomposition (the spread as compensation for trading against possibly-informed counterparties) that underpins Part I's adverse-selection treatment; [Hasbrouck 2007](item:hasbrouck-2007) supplies the empirical vocabulary (efficient price, spreads, price discovery) Part I builds on.
- **Signals**: [Cont-Kukanov-Stoikov 2014](item:cont-kukanov-stoikov-2014) (OFI) is the kind of short-term-alpha / order-imbalance signal the book folds into execution and market making (Ch.10, Ch.12).
- **Companions**: [Guéant 2016](item:gueant-2016) — the deeper, more rigorous liquidity-mathematics counterpart; [Bouchaud-Bonart-Donier-Gould 2018](item:bouchaud-bonart-donier-gould-2018) — the empirical/econophysics of price impact; [Kissell 2013](item:kissell-2013) — the practitioner's execution-benchmark reference.
- **Builds toward**: model-uncertainty / robust control, reinforcement-learning execution and market making, and multi-asset/signal-driven strategies — the active research frontier, most of which is "this book's problem, plus one feature."`,
        id: `- **Ngerecover**: [Avellaneda-Stoikov 2008](item:stoikov-2008) (problem market-making, Bab 10 — katalog ngelist prereq buku ini persis paper ini) dan [Almgren-Chriss 2000](item:almgren-chriss-2000) (trajectory eksekusi, Bab 6) — keduanya jadi kasus khusus dari satu resep HJB.
- **Fondasi**: [Kyle 1985](item:kyle-1985) nyediain price-impact $\\lambda$ dan pemisahan informed/uninformed yang model impact dan adverse-selection buku-nya warisi; [Glosten-Milgrom 1985](item:glosten-milgrom-1985) nyediain dekomposisi bid-ask spread (spread sebagai kompensasi buat trading lawan counterparty yang mungkin-informed) yang ngedasarin perlakuan adverse-selection Part I; [Hasbrouck 2007](item:hasbrouck-2007) nyediain kosakata empiris (efficient price, spread, price discovery) yang Part I bangun di atasnya.
- **Sinyal**: [Cont-Kukanov-Stoikov 2014](item:cont-kukanov-stoikov-2014) (OFI) itu jenis sinyal short-term-alpha / order-imbalance yang buku-nya lipat ke execution dan market making (Bab 10, Bab 12).
- **Pendamping**: [Guéant 2016](item:gueant-2016) — counterpart matematika-likuiditas yang lebih dalam dan rigorous; [Bouchaud-Bonart-Donier-Gould 2018](item:bouchaud-bonart-donier-gould-2018) — empiris/econophysics price impact; [Kissell 2013](item:kissell-2013) — rujukan benchmark-eksekusi praktisi.
- **Builds toward**: model-uncertainty / robust control, eksekusi dan market making reinforcement-learning, dan strategi multi-asset/signal-driven — frontier riset aktif, yang sebagian besarnya itu "problem buku ini, plus satu fitur."`
      }
    },

    // ─────────────── 8. sources ───────────────
    {
      id: 'sources',
      heading: { en: 'Sources', id: 'Sumber' },
      body: {
        en: `- **Cartea, Á., Jaimungal, S., and Penalva, J.** (2015). *Algorithmic and High-Frequency Trading*. Cambridge University Press (Mathematics, Finance and Risk series). The unified stochastic-control textbook of algorithmic trading. **(This item.)**
- **Almgren, R., and Chriss, N.** (2000). "Optimal Execution of Portfolio Transactions." *Journal of Risk*, 3(2), 5-39. The execution result the book reframes as a control problem (Ch.6).
- **Avellaneda, M., and Stoikov, S.** (2008). "High-Frequency Trading in a Limit Order Book." *Quantitative Finance*, 8(3), 217-224. The inventory-aware market-making model the book extends (Ch.10).
- **Guéant, O., Lehalle, C.-A., and Fernández-Tapia, J.** (2013). "Dealing with the Inventory Risk: A Solution to the Market Making Problem." *Mathematics and Financial Economics*, 7(4), 477-507. The closed-form market-making solution complementing the book's Ch.10.
- **Guéant, O.** (2016). *The Financial Mathematics of Market Liquidity: From Optimal Execution to Market Making*. Chapman & Hall/CRC. The companion graduate text — the deeper liquidity-mathematics treatment.`,
        id: `- **Cartea, Á., Jaimungal, S., dan Penalva, J.** (2015). *Algorithmic and High-Frequency Trading*. Cambridge University Press (seri Mathematics, Finance and Risk). Textbook stochastic-control terpadu soal algorithmic trading. **(Item ini.)**
- **Almgren, R., dan Chriss, N.** (2000). "Optimal Execution of Portfolio Transactions." *Journal of Risk*, 3(2), 5-39. Hasil eksekusi yang buku-nya reframe jadi problem control (Bab 6).
- **Avellaneda, M., dan Stoikov, S.** (2008). "High-Frequency Trading in a Limit Order Book." *Quantitative Finance*, 8(3), 217-224. Model market-making inventory-aware yang buku-nya extend (Bab 10).
- **Guéant, O., Lehalle, C.-A., dan Fernández-Tapia, J.** (2013). "Dealing with the Inventory Risk: A Solution to the Market Making Problem." *Mathematics and Financial Economics*, 7(4), 477-507. Solusi market-making closed-form yang ngelengkapin Bab 10 buku-nya.
- **Guéant, O.** (2016). *The Financial Mathematics of Market Liquidity: From Optimal Execution to Market Making*. Chapman & Hall/CRC. Teks graduate pendamping — perlakuan matematika-likuiditas yang lebih dalam.`
      }
    },
  ],

  audio: { enabled: true },

  selfTest: [
    {
      sectionId: 'intuition',
      question: {
        en: 'The book frames optimal execution as a "strategy, not a schedule." What is the difference, and why is a feedback control from a stochastic-control problem better than the original Almgren-Chriss schedule?',
        id: 'Buku-nya nge-frame optimal execution sebagai "strategi, bukan jadwal." Apa bedanya, dan kenapa feedback control dari problem stochastic-control lebih baik daripada jadwal Almgren-Chriss asli?'
      },
      prompt: { en: 'Before continuing, try answering:', id: 'Sebelum lanjut, coba jawab:' },
      answer: {
        en: 'A schedule is fixed in advance: it says how much to trade in each interval before any uncertainty resolves, and it cannot adapt when the price moves or fills differ from plan. A feedback control (strategy) is a rule that maps the *current* state — time, remaining inventory, price — to the action to take now, so it re-optimizes continuously off what has actually happened. The HJB solution to the control problem is exactly such a rule, e.g. trade at speed proportional to remaining inventory. It is better because markets are stochastic: the strategy reacts to realized inventory and price (speeding up, slowing down, skewing), whereas the original schedule is optimal only on average and drifts off-target as randomness accumulates.',
        id: 'Jadwal itu tetap di muka: dia bilang berapa banyak trade di tiap interval sebelum ketidakpastian apa pun terselesaikan, dan dia gak bisa beradaptasi pas harga gerak atau fill beda dari rencana. Feedback control (strategi) itu aturan yang ngepetain state *saat ini* — waktu, sisa inventory, harga — ke aksi yang diambil sekarang, jadi dia nge-re-optimasi terus-menerus dari apa yang beneran terjadi. Solusi HJB ke problem control itu persis aturan begitu, misal trade di speed proporsional ke sisa inventory. Dia lebih baik karena pasar itu stochastic: strateginya bereaksi ke inventory dan harga yang terealisasi (mempercepat, melambat, nge-skew), sementara jadwal asli optimal cuma rata-rata dan menyimpang dari target pas randomness berakumulasi.'
      }
    },
    {
      sectionId: 'formalization',
      question: {
        en: 'State the book\'s four-step recipe for solving any trading problem, naming the role of the Dynamic Programming Principle, the HJB equation, and the verification theorem.',
        id: 'Sebutin resep empat-langkah buku-nya buat nyelesain problem trading apa pun, sebutin peran Dynamic Programming Principle, persamaan HJB, dan verification theorem.'
      },
      prompt: { en: 'Before continuing, try answering:', id: 'Sebelum lanjut, coba jawab:' },
      answer: {
        en: '(1) Write the controlled dynamics — the SDEs for the state (cash, inventory, price) as functions of the control. (2) Write the objective — terminal wealth, plus a terminal-inventory penalty, minus a running inventory-risk penalty. (3) Derive the HJB equation: the Dynamic Programming Principle (Bellman: optimal over the whole horizon = optimal over the next instant plus optimal thereafter) gives, in the continuous limit, a differential equation for the value function with a sup/max over the control inside it; solving that inner sup gives the candidate optimal control as a function of the state. (4) Apply the verification theorem to confirm the candidate value function and control are genuinely optimal. The DPP produces the equation, the HJB *is* the equation, and verification certifies the solution.',
        id: '(1) Tulis dinamika yang dikontrol — SDE buat state (cash, inventory, harga) sebagai fungsi dari control. (2) Tulis objektif — wealth terminal, plus penalty terminal-inventory, dikurang penalty running inventory-risk. (3) Turunin persamaan HJB: Dynamic Programming Principle (Bellman: optimal over seluruh horizon = optimal over instan berikutnya plus optimal sesudahnya) ngasih, dalam limit continuous, persamaan diferensial buat value function dengan sup/max over control di dalamnya; nyelesaiin sup dalam itu ngasih kandidat control optimal sebagai fungsi dari state. (4) Terapin verification theorem buat ngonfirmasi kandidat value function dan control-nya beneran optimal. DPP ngehasilin persamaannya, HJB *itu* persamaannya, dan verification nyertifikasi solusinya.'
      }
    },
    {
      sectionId: 'formalization',
      question: {
        en: 'How does the book recover the Almgren-Chriss liquidation trajectory from an HJB, and what is the role of the coefficient φ? What schedule do you get as φ → 0?',
        id: 'Gimana buku-nya ngerecover trajectory liquidation Almgren-Chriss dari HJB, dan apa peran koefisien φ? Jadwal apa yang kamu dapet pas φ → 0?'
      },
      prompt: { en: 'Before continuing, try answering:', id: 'Sebelum lanjut, coba jawab:' },
      answer: {
        en: 'You set up the liquidation as a control problem with trading rate ν, temporary impact k, and a running inventory penalty φσ²Q². The HJB with the ansatz H = x + qS + h(t,q) reduces to an ODE whose solution gives an optimal speed linear in remaining inventory, producing the hyperbolic-sine (sinh) trajectory with urgency γ = √(φσ²/k) — exactly the Almgren-Chriss shape. φ is the risk-aversion / urgency knob: it prices how much you dislike holding inventory through volatility. Large φ means a high γ and front-loaded selling (cut exposure fast); as φ → 0 the urgency γ → 0 and the trajectory straightens into the constant-rate TWAP line. So Almgren-Chriss is the φ-parametrized family of solutions to one control problem, with TWAP as its risk-neutral limit.',
        id: 'Kamu nyetel liquidation sebagai problem control dengan rate trading ν, temporary impact k, dan running inventory penalty φσ²Q². HJB dengan ansatz H = x + qS + h(t,q) tereduksi jadi ODE yang solusinya ngasih speed optimal linear di sisa inventory, ngehasilin trajectory hyperbolic-sine (sinh) dengan urgency γ = √(φσ²/k) — persis bentuk Almgren-Chriss. φ itu knob risk-aversion / urgency: dia ngehargai seberapa kamu gak suka nahan inventory lewat volatility. φ gede berarti γ tinggi dan jual front-loaded (potong exposure cepet); pas φ → 0 urgency γ → 0 dan trajectory-nya ngelurus jadi garis TWAP constant-rate. Jadi Almgren-Chriss itu keluarga solusi ter-parametrisasi-φ dari satu problem control, dengan TWAP sebagai limit risk-neutral-nya.'
      }
    },
    {
      sectionId: 'applications',
      question: {
        en: 'What does Cartea-Jaimungal-Penalva add beyond the standalone Almgren-Chriss and Avellaneda-Stoikov papers? Name at least three things.',
        id: 'Apa yang Cartea-Jaimungal-Penalva tambah di luar paper Almgren-Chriss dan Avellaneda-Stoikov yang berdiri sendiri? Sebutin minimal tiga hal.'
      },
      prompt: { en: 'Before continuing, try answering:', id: 'Sebelum lanjut, coba jawab:' },
      answer: {
        en: '(1) Unification — it shows execution, market making, VWAP/POV targeting, pairs trading, and order-imbalance strategies are all the *same* stochastic-control problem (one DPP/HJB/verification recipe), differing only in state, control, and penalties, so the field becomes a method rather than a list of models. (2) The control reframing — it turns Almgren-Chriss from a fixed schedule into a feedback strategy that reacts to realized inventory and price, and connects Avellaneda-Stoikov to its closed-form solution. (3) Empirical grounding and usability — Part I documents the stylized facts of high-frequency data that justify the modelling choices, and the book ships datasets and MATLAB code so the models can be calibrated and simulated. (Also: systematic extensions — adverse selection, short-term-alpha signals, limit-vs-market orders, and dark pools — built on the common framework.)',
        id: '(1) Unifikasi — dia nunjukin execution, market making, VWAP/POV targeting, pairs trading, dan strategi order-imbalance itu semua problem stochastic-control yang *sama* (satu resep DPP/HJB/verification), beda cuma di state, control, dan penalty, jadi field-nya jadi metode daripada daftar model. (2) Reframing control — dia ngubah Almgren-Chriss dari jadwal tetap jadi strategi feedback yang bereaksi ke inventory dan harga terealisasi, dan ngehubungin Avellaneda-Stoikov ke solusi closed-form-nya. (3) Landasan empiris dan usability — Part I ngedokumentasiin fakta terstilisasi data high-frequency yang ngejustifikasi pilihan pemodelan, dan buku-nya ngirim dataset dan kode MATLAB jadi model-nya bisa dikalibrasi dan disimulasi. (Juga: ekstensi sistematis — adverse selection, sinyal short-term-alpha, limit-vs-market order, dan dark pool — dibangun di atas framework bersama.)'
      }
    },
  ],
};
