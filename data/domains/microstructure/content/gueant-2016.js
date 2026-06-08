export const CONTENT = {
  itemId: 'gueant-2016',
  estimatedReadMinutes: 40,

  author: {
    fullName: { en: 'Olivier Guéant', id: 'Olivier Guéant' },
    affiliation: {
      en: 'Professor of Applied Mathematics, Université Paris Cité (Professor at Université Paris 1 Panthéon-Sorbonne when the book appeared); Adjunct Professor of Quantitative Finance, ENSAE — Institut Polytechnique de Paris.',
      id: 'Professor of Applied Mathematics di Université Paris Cité (dia Professor di Université Paris 1 Panthéon-Sorbonne pas buku ini terbit); Adjunct Professor of Quantitative Finance di ENSAE — Institut Polytechnique de Paris.'
    },
    tagline: {
      en: 'The rigorous companion text on market liquidity — it takes the Avellaneda-Stoikov market-making problem, which had only an asymptotic answer, and turns it into an essentially closed-form one: a single change of variables linearizes the HJB system into linear ODEs, giving explicit optimal quotes and a provable bound on inventory.',
      id: 'Teks pendamping yang rigorous soal market liquidity — dia ngambil problem market-making Avellaneda-Stoikov, yang cuma punya jawaban asimtotik, dan ngubahnya jadi yang esensialnya closed-form: satu change of variables nge-linearisasi sistem HJB jadi ODE linear, ngasih quote optimal eksplisit dan batas inventory yang bisa dibuktikan.'
    },
    bio: {
      en: `Olivier Guéant is a French applied mathematician who brought the heavy machinery of stochastic control and partial differential equations to bear on market liquidity. He is a Professor of Applied Mathematics at Université Paris Cité (he was at Université Paris 1 Panthéon-Sorbonne when this book appeared) and an Adjunct Professor of Quantitative Finance at ENSAE. He came up through the École Normale Supérieure and took his PhD at Université Paris-Dauphine under **Pierre-Louis Lions** (a Fields Medalist), with **Jean-Michel Lasry** — and his thesis was one of the very first on **mean field games**, the Lasry-Lions theory of large populations of interacting optimizers. He even co-founded a data-science company, MFG Labs, named after that theory.

He carried the mean-field-games / optimal-control toolkit into finance, where his defining contribution is with **Charles-Albert Lehalle and Joaquin Fernández-Tapia**: their 2013 paper "Dealing with the inventory risk" produced the first essentially closed-form solution to the Avellaneda-Stoikov market-making problem, and their 2012 paper did the analogous work for optimal liquidation with limit orders. His more recent work pushes the same problems into multi-asset, corporate-bond, and reinforcement-learning settings.

This 2016 book is the rigorous, systematic statement of that program. Where Cartea-Jaimungal-Penalva is the broad unifying textbook, Guéant's is the one that pushes hardest on the mathematics of liquidity — and on actually solving the models, in closed form where possible and with carefully chosen numerical methods where not.`,
      id: `Olivier Guéant itu matematikawan terapan Prancis yang ngebawa mesin berat stochastic control dan persamaan diferensial parsial buat ngegarap market liquidity. Dia Professor of Applied Mathematics di Université Paris Cité (dia di Université Paris 1 Panthéon-Sorbonne pas buku ini terbit) dan Adjunct Professor of Quantitative Finance di ENSAE. Dia naik lewat École Normale Supérieure dan ngambil PhD-nya di Université Paris-Dauphine di bawah **Pierre-Louis Lions** (peraih Fields Medal), sama **Jean-Michel Lasry** — dan tesisnya salah satu yang paling pertama soal **mean field games**, teori Lasry-Lions soal populasi besar optimizer yang saling berinteraksi. Dia bahkan co-found perusahaan data-science, MFG Labs, dinamain dari teori itu.

Dia ngebawa toolkit mean-field-games / optimal-control ke finance, di mana kontribusi yang ngedefinisiin dia itu sama **Charles-Albert Lehalle dan Joaquin Fernández-Tapia**: paper 2013 mereka "Dealing with the inventory risk" ngehasilin solusi closed-form pertama yang esensial buat problem market-making Avellaneda-Stoikov, dan paper 2012 mereka ngerjain kerja analog buat optimal liquidation dengan limit order. Kerjanya yang lebih baru ndorong problem yang sama ke setting multi-asset, corporate-bond, dan reinforcement-learning.

Buku 2016 ini pernyataan rigorous dan sistematis dari program itu. Di mana Cartea-Jaimungal-Penalva itu textbook pemersatu yang luas, punya Guéant itu yang ndorong paling keras soal matematika liquidity — dan soal beneran nyelesain model-nya, dalam closed form kalau bisa dan dengan metode numerik yang dipilih hati-hati kalau enggak.`
    },
    focus: {
      en: `What is the mathematically rigorous way to model and solve liquidity problems — and can you actually get explicit answers? *The Financial Mathematics of Market Liquidity* treats execution costs and market impact as a first-class modeling object and runs them through the full apparatus of continuous-time stochastic control. It is organized in four parts: an introduction to market microstructure; **optimal liquidation** (the Almgren-Chriss framework generalized, with benchmarks like Implementation Shortfall, Target Close, POV and VWAP, and extensions to portfolios); **liquidity in pricing models** (block-trade pricing, option hedging under impact, and share buy-backs — showing the same liquidity machinery prices derivatives and corporate transactions); and **market making** (from Avellaneda-Stoikov to the Guéant-Lehalle-Fernández-Tapia closed-form solution and multi-asset extensions). The signature is the pursuit of *explicit* solutions: a CARA-utility structure collapses the optimal-execution problem to a deterministic calculus-of-variations problem with a closed-form trading curve, and an exponential change of variables linearizes the market-making HJB system into linear ODEs solvable as a matrix exponential. Two appendices supply the utility theory and convex analysis the book leans on.`,
      id: `Apa cara yang rigorous secara matematis buat ngemodelin dan nyelesain problem liquidity — dan apakah kamu beneran bisa dapet jawaban eksplisit? *The Financial Mathematics of Market Liquidity* memperlakukan execution cost dan market impact sebagai objek pemodelan first-class dan ngejalaninnya lewat aparatus penuh stochastic control continuous-time. Dia diorganisir dalam empat bagian: pengantar ke market microstructure; **optimal liquidation** (framework Almgren-Chriss yang digeneralisasi, dengan benchmark kayak Implementation Shortfall, Target Close, POV dan VWAP, dan ekstensi ke portfolio); **liquidity in pricing models** (block-trade pricing, option hedging di bawah impact, dan share buy-back — nunjukin mesin liquidity yang sama ngehargai derivatif dan transaksi korporat); dan **market making** (dari Avellaneda-Stoikov ke solusi closed-form Guéant-Lehalle-Fernández-Tapia dan ekstensi multi-asset). Tanda khasnya itu pengejaran solusi *eksplisit*: struktur CARA-utility ngolapsin problem optimal-execution jadi problem calculus-of-variations deterministik dengan trading curve closed-form, dan exponential change of variables nge-linearisasi sistem HJB market-making jadi ODE linear yang bisa diselesaiin sebagai matrix exponential. Dua appendix nyediain teori utility dan convex analysis yang buku-nya andalin.`
    },
    intellectualLineage: {
      en: `The book sits at the confluence of two traditions. The **control / PDE** tradition is the Lasry-Lions school of mean field games and viscosity solutions — Guéant's doctoral lineage — which supplies the rigorous treatment of Hamilton-Jacobi-Bellman equations and the verification machinery. The **microstructure / liquidity** tradition is the line from **Almgren-Chriss (2000)** on optimal execution and **Avellaneda-Stoikov (2008)** on inventory-aware market making. Guéant's distinctive move is technical: where Avellaneda-Stoikov solved their market-making HJB only *asymptotically* (a small-inventory expansion), Guéant-Lehalle-Fernández-Tapia (2013) found the *exact* structure — an exponential change of variables that linearizes the coupled HJB system into a tractable set of linear ODEs, with the long-horizon answer governed by the smallest eigenvalue of a tridiagonal matrix. The same impulse runs through the execution half: a CARA / arithmetic-price structure lets a Girsanov-style argument collapse the stochastic problem to a deterministic one. The book is thus the rigorous, closed-form-seeking counterpart to **Cartea-Jaimungal-Penalva (2015)**: same stochastic-control worldview, but pushed harder toward provable, computable solutions and extended into derivative pricing under liquidity.`,
      id: `Buku-nya duduk di pertemuan dua tradisi. Tradisi **control / PDE** itu sekolah Lasry-Lions soal mean field games dan viscosity solution — garis keturunan doktoral Guéant — yang nyediain perlakuan rigorous persamaan Hamilton-Jacobi-Bellman dan mesin verification-nya. Tradisi **microstructure / liquidity** itu garis dari **Almgren-Chriss (2000)** soal optimal execution dan **Avellaneda-Stoikov (2008)** soal market making yang inventory-aware. Langkah khas Guéant itu teknis: di mana Avellaneda-Stoikov nyelesain HJB market-making mereka cuma secara *asimtotik* (ekspansi small-inventory), Guéant-Lehalle-Fernández-Tapia (2013) nemu struktur *eksak*-nya — exponential change of variables yang nge-linearisasi sistem HJB yang coupled jadi himpunan ODE linear yang tractable, dengan jawaban long-horizon-nya diatur sama eigenvalue terkecil dari matriks tridiagonal. Impuls yang sama jalan di separuh execution: struktur CARA / arithmetic-price ngebolehin argumen ala-Girsanov ngolapsin problem stochastic jadi deterministik. Buku-nya karenanya counterpart yang rigorous dan pencari-closed-form ke **Cartea-Jaimungal-Penalva (2015)**: worldview stochastic-control yang sama, tapi didorong lebih keras menuju solusi yang bisa dibuktikan dan dikomputasi, dan di-extend ke derivative pricing di bawah liquidity.`
    },
    keyCollaborators: {
      en: `**Charles-Albert Lehalle and Joaquin Fernández-Tapia** are the defining collaborators — the two foundational papers (2012 optimal liquidation with limit orders, 2013 the closed-form market-making solution) are joint work, and Lehalle is himself a leading execution researcher and practitioner. Guéant's doctoral mentors **Jean-Michel Lasry and Pierre-Louis Lions** are the other pillar — co-authors on the founding mean-field-games work and the source of his PDE/control lineage. More recent collaborators (e.g. **Iuliia Manziuk** on deep reinforcement learning for corporate-bond market making) mark his move toward learning-based methods. The intellectual antecedents the book builds on are **Robert Almgren and Neil Chriss** (execution) and **Marco Avellaneda and Sasha Stoikov** (market making).`,
      id: `**Charles-Albert Lehalle dan Joaquin Fernández-Tapia** itu kolaborator yang ngedefinisiin — dua paper fondasi (2012 optimal liquidation dengan limit order, 2013 solusi market-making closed-form) itu kerja bareng, dan Lehalle sendiri peneliti dan praktisi execution terkemuka. Mentor doktoral Guéant **Jean-Michel Lasry dan Pierre-Louis Lions** itu pilar yang lain — co-author di kerja mean-field-games yang fondasional dan sumber garis keturunan PDE/control-nya. Kolaborator yang lebih baru (misal **Iuliia Manziuk** soal deep reinforcement learning buat market making corporate-bond) nandain pergeserannya menuju metode berbasis-learning. Antesedan intelektual yang buku-nya bangun di atasnya itu **Robert Almgren dan Neil Chriss** (execution) dan **Marco Avellaneda dan Sasha Stoikov** (market making).`
    },
    legacy: {
      en: `Among the modern liquidity textbooks, Guéant's is the one practitioners and researchers reach for when they need the mathematics done *properly* and, where possible, *explicitly*. Its enduring contributions: (1) it is the canonical reference for the **Guéant-Lehalle-Fernández-Tapia** market-making solution — the result that turned Avellaneda-Stoikov from an approximation into computable, closed-form quotes with a provable inventory bound; (2) it shows liquidity is **one framework across three problems** — execution, derivative pricing/hedging under impact, and market making all run on the same control-theoretic engine, which is why the middle part on block trades, options, and buy-backs matters; and (3) it is a genuinely *solvable* treatment — the CARA-to-deterministic reduction and the HJB-to-linear-ODE linearization mean the models yield trading curves and quote formulas you can actually compute, not just characterize. Its limits are the price of that rigor: it is mathematically demanding (real stochastic control, convex analysis, and PDE), it leans on convenient structure (CARA utility, arithmetic prices, exponential fill intensities) to get its closed forms, and like its peers it is silent on the systems and regulatory side. It is best read alongside **Cartea-Jaimungal-Penalva** for breadth, **Bouchaud et al.** for the empirics of impact, and **Kissell** for the practitioner's benchmarks. When you want optimal trading and quoting worked out rigorously and computed explicitly, this is a natural reference.`,
      id: `Di antara textbook liquidity modern, punya Guéant itu yang praktisi dan peneliti raih pas mereka butuh matematikanya dikerjain dengan *benar* dan, kalau bisa, secara *eksplisit*. Kontribusi awetnya: (1) dia rujukan kanonik buat solusi market-making **Guéant-Lehalle-Fernández-Tapia** — hasil yang ngubah Avellaneda-Stoikov dari aproksimasi jadi quote closed-form yang bisa dikomputasi dengan batas inventory yang bisa dibuktikan; (2) dia nunjukin liquidity itu **satu framework lintas tiga problem** — execution, derivative pricing/hedging di bawah impact, dan market making semua jalan di mesin control-theoretic yang sama, yang itu kenapa bagian tengah soal block trade, opsi, dan buy-back penting; dan (3) dia perlakuan yang beneran *bisa diselesaiin* — reduksi CARA-ke-deterministik dan linearisasi HJB-ke-ODE-linear berarti model-nya ngehasilin trading curve dan formula quote yang beneran bisa kamu komputasi, bukan cuma dikarakterisasi. Batasnya itu harga dari rigor itu: dia berat secara matematis (stochastic control beneran, convex analysis, dan PDE), dia ngandelin struktur yang nyaman (CARA utility, arithmetic price, exponential fill intensity) buat dapet closed form-nya, dan kayak peer-nya dia diam soal sisi sistem dan regulasi. Dia paling baik dibaca bareng **Cartea-Jaimungal-Penalva** buat keluasan, **Bouchaud et al.** buat empiris impact, dan **Kissell** buat benchmark praktisi. Pas kamu mau optimal trading dan quoting dikerjain rigorous dan dikomputasi eksplisit, ini rujukan yang natural.`
    },
    keyWorks: [
      { year: 2016, title: 'The Financial Mathematics of Market Liquidity: From Optimal Execution to Market Making (this item)', venue: 'Chapman & Hall/CRC' },
      { year: 2013, title: 'Dealing with the Inventory Risk: A Solution to the Market Making Problem (Guéant, Lehalle & Fernández-Tapia)', venue: 'Mathematics and Financial Economics' },
      { year: 2012, title: 'Optimal Portfolio Liquidation with Limit Orders (Guéant, Lehalle & Fernández-Tapia)', venue: 'SIAM Journal on Financial Mathematics' },
      { year: 2011, title: 'Mean Field Games and Applications (Guéant, Lasry & Lions)', venue: 'Paris-Princeton Lectures on Mathematical Finance 2010, Springer' },
      { year: 2017, title: 'Optimal Market Making', venue: 'Applied Mathematical Finance' },
    ],
  },

  sections: [
    // ─────────────── 1. motivation ───────────────
    {
      id: 'motivation',
      heading: { en: 'Why this matters', id: 'Kenapa ini penting' },
      body: {
        en: `Two modules ago you met Avellaneda-Stoikov: a market maker quotes a bid and an ask around an inventory-skewed reservation price, and the optimal quotes come from a Hamilton-Jacobi-Bellman (HJB) equation. But there is a catch in that paper that is easy to miss — **Avellaneda and Stoikov did not actually solve their HJB exactly.** They solved it *asymptotically*, with a small-inventory approximation. The exact, closed-form answer came later. This book is where that answer lives.

Olivier Guéant's *The Financial Mathematics of Market Liquidity* (2016) is among the most rigorous and mathematically demanding of the modern liquidity texts. Its companion, Cartea-Jaimungal-Penalva, is the broad unifier — *here is one stochastic-control recipe for all of trading.* Guéant's book is the specialist's complement: *here is how to actually solve these problems, in closed form where the structure allows, and with the right numerical method where it does not.*

The book's organizing claim is that **market liquidity is one mathematical object that shows up in three places**:

- **Optimal execution** — how to liquidate or acquire a large position (the Almgren-Chriss framework, generalized and made rigorous, with VWAP/POV/Target-Close benchmarks).
- **Liquidity in pricing** — once trading has a cost and an impact, *derivatives and corporate transactions must be repriced*: block trades carry a risk-liquidity premium, options must be hedged accounting for impact, and share buy-backs become optimal-control problems. This is the bridge most other books skip.
- **Market making** — quoting bid and ask to earn the spread while managing inventory (Avellaneda-Stoikov, *closed* by Guéant-Lehalle-Fernández-Tapia, and extended to many assets).

The reason to study it is the combination of **rigor and explicitness**. Guéant does not stop at "the value function satisfies an HJB equation." He finds the structure — a CARA utility here, an exponential change of variables there — that turns the HJB into something you can *solve*: a deterministic trading curve, or a system of linear ODEs whose answer is a single matrix exponential. That is the difference between a model you can admire and a model you can compute.`,
        id: `Dua modul lalu kamu ketemu Avellaneda-Stoikov: market maker quote bid dan ask di sekitar reservation price yang inventory-skewed, dan quote optimal-nya datang dari persamaan Hamilton-Jacobi-Bellman (HJB). Tapi ada catch di paper itu yang gampang kelewat — **Avellaneda dan Stoikov sebenernya gak nyelesain HJB mereka secara eksak.** Mereka nyelesainnya secara *asimtotik*, dengan aproksimasi small-inventory. Jawaban eksak, closed-form-nya datang kemudian. Buku ini tempat jawaban itu tinggal.

*The Financial Mathematics of Market Liquidity* (2016)-nya Olivier Guéant itu termasuk yang paling rigorous dan paling menuntut secara matematis dari teks liquidity modern. Pendampingnya, Cartea-Jaimungal-Penalva, itu pemersatu yang luas — *ini satu resep stochastic-control buat semua trading.* Buku Guéant itu pelengkap spesialisnya: *ini gimana beneran nyelesain problem-problem ini, dalam closed form kalau strukturnya ngebolehin, dan dengan metode numerik yang tepat kalau enggak.*

Klaim pengorganisasi buku-nya itu bahwa **market liquidity itu satu objek matematis yang muncul di tiga tempat**:

- **Optimal execution** — gimana liquidate atau acquire posisi gede (framework Almgren-Chriss, digeneralisasi dan dibikin rigorous, dengan benchmark VWAP/POV/Target-Close).
- **Liquidity in pricing** — begitu trading punya biaya dan impact, *derivatif dan transaksi korporat harus dihargai-ulang*: block trade bawa risk-liquidity premium, opsi harus di-hedge memperhitungkan impact, dan share buy-back jadi problem optimal-control. Ini jembatan yang kebanyakan buku lain lewatin.
- **Market making** — quote bid dan ask buat dapet spread sambil ngatur inventory (Avellaneda-Stoikov, *ditutup* sama Guéant-Lehalle-Fernández-Tapia, dan di-extend ke banyak aset).

Alasan buat ngestudi dia itu kombinasi **rigor dan eksplisitas**. Guéant gak berhenti di "value function memenuhi persamaan HJB." Dia nemu strukturnya — CARA utility di sini, exponential change of variables di sana — yang ngubah HJB jadi sesuatu yang bisa kamu *selesain*: trading curve deterministik, atau sistem ODE linear yang jawabannya satu matrix exponential. Itu beda antara model yang bisa kamu kagumi dan model yang bisa kamu komputasi.`
      }
    },

    // ─────────────── 2. intuition ───────────────
    {
      id: 'intuition',
      heading: { en: 'Intuition', id: 'Intuisi' },
      body: {
        en: `The recurring idea is: **choose the right structure and a hard control problem collapses into something solvable.** Guéant does this twice, once on each side of the book.

**Execution: stochastic becomes deterministic.** The optimal-liquidation problem is, on its face, a stochastic control problem — the price is random, so the value function lives over (time, cash, inventory, price). But if the trader has **CARA (exponential) utility** and the price is **arithmetic** (Bachelier) Brownian motion, a Girsanov-style argument shows something remarkable: *no random trading strategy beats the best deterministic one.* The randomness factors out. What remains is a plain calculus-of-variations problem — choose the trading curve $q(t)$ that minimizes a trade-off between execution cost and a running variance penalty $\\tfrac12\\gamma\\sigma^2 q(t)^2$. For the classic quadratic cost this has a closed-form solution: the same hyperbolic-sine liquidation curve as Almgren-Chriss. The lesson is that the apparent stochasticity was a mirage created by the wrong coordinates.

**Market making: a tangled PDE system becomes linear ODEs.** The market maker's problem looks worse: the value function depends on (time, cash, inventory, price), and because inventory jumps $\\pm 1$ on each fill, you get a *coupled system* of HJB equations, one per inventory level, linked through neighbours. Avellaneda-Stoikov could only approximate it. Guéant-Lehalle-Fernández-Tapia found the magic substitution: write the value function as $-e^{-\\gamma(x+qs)}$ times a power of a function $v_q(t)$, and the cash, price, and exponential all **cancel exactly**. The coupled nonlinear HJB system becomes a *linear* system of ordinary differential equations in the $v_q$'s — which is to say, a matrix exponential. Being able to write $v(t) = e^{-M(T-t)}\\mathbf{1}$ for a simple tridiagonal matrix $M$ is the whole game: optimal quotes for every inventory level, exactly, from one piece of linear algebra.

**Why inventory stays bounded.** The same solution explains *why* the market maker never accumulates a wild position: as inventory grows, the optimal quotes skew ever harder against it (the ask tightens and the bid backs off when you are long), so the controlled inventory is mean-reverting. Its long-run distribution is approximately Gaussian, with a width set by the model parameters — a *provable* bound on how far the position wanders. Rigor is not decoration here; it is what lets Guéant say exactly how well the strategy controls risk.`,
        id: `Ide yang berulang itu: **pilih struktur yang tepat dan problem control yang susah kolaps jadi sesuatu yang bisa diselesaiin.** Guéant ngelakuin ini dua kali, sekali di tiap sisi buku.

**Execution: stochastic jadi deterministik.** Problem optimal-liquidation itu, sepintas, problem stochastic control — harganya random, jadi value function-nya tinggal over (waktu, cash, inventory, harga). Tapi kalau trader-nya punya **CARA (exponential) utility** dan harganya **arithmetic** (Bachelier) Brownian motion, argumen ala-Girsanov nunjukin sesuatu yang luar biasa: *gak ada strategi trading random yang ngalahin yang deterministik terbaik.* Randomness-nya kefaktor keluar. Yang tersisa itu problem calculus-of-variations biasa — pilih trading curve $q(t)$ yang ngeminimalin trade-off antara execution cost dan running variance penalty $\\tfrac12\\gamma\\sigma^2 q(t)^2$. Buat quadratic cost klasik ini punya solusi closed-form: trading curve hyperbolic-sine yang sama kayak Almgren-Chriss. Pelajarannya, stochastisitas yang kelihatan itu fatamorgana yang diciptain sama koordinat yang salah.

**Market making: sistem PDE yang ruwet jadi ODE linear.** Problem market maker kelihatan lebih buruk: value function-nya tergantung (waktu, cash, inventory, harga), dan karena inventory loncat $\\pm 1$ tiap fill, kamu dapet *sistem coupled* persamaan HJB, satu per level inventory, tersambung lewat tetangga. Avellaneda-Stoikov cuma bisa ngaproksimasi. Guéant-Lehalle-Fernández-Tapia nemu substitusi ajaibnya: tulis value function sebagai $-e^{-\\gamma(x+qs)}$ kali pangkat dari fungsi $v_q(t)$, dan cash, harga, dan exponential-nya semua **batal eksak**. Sistem HJB nonlinear yang coupled jadi sistem persamaan diferensial biasa yang *linear* di $v_q$-nya — yang artinya, matrix exponential. Bisa nulis $v(t) = e^{-M(T-t)}\\mathbf{1}$ buat matriks tridiagonal sederhana $M$ itu seluruh permainannya: quote optimal buat tiap level inventory, eksak, dari satu potong linear algebra.

**Kenapa inventory tetep terbatas.** Solusi yang sama jelasin *kenapa* market maker gak pernah ngumpulin posisi liar: pas inventory tumbuh, quote optimal-nya nge-skew makin keras melawannya (ask ngetat dan bid mundur pas kamu long), jadi inventory yang dikontrol itu mean-reverting. Distribusi jangka-panjangnya kira-kira Gaussian, dengan lebar di-set sama parameter model — batas yang *bisa dibuktikan* soal seberapa jauh posisi mengembara. Rigor bukan hiasan di sini; dia yang ngebolehin Guéant bilang persis seberapa baik strateginya ngontrol risk.`
      }
    },

    // ─────────────── 3. formalization ───────────────
    {
      id: 'formalization',
      heading: { en: 'The closed-form market maker, formalized', id: 'Market maker closed-form, diformalkan' },
      body: {
        en: `**The model (Guéant-Lehalle-Fernández-Tapia).** The reference price is arithmetic Brownian motion, $dS_t = \\sigma\\, dW_t$. The market maker posts a bid at depth $\\delta^b$ below and an ask at depth $\\delta^a$ above $S_t$. Market orders arrive as Poisson processes whose intensity *decays exponentially* in the quoted depth, $\\lambda(\\delta) = A\\,e^{-k\\delta}$ — quote tight and you fill often but earn little; quote wide and you earn more per fill but fill rarely. Inventory $q_t$ jumps by $\\pm 1$ on each fill and is capped at a hard limit $Q$ (a risk bound that also keeps the system finite). The maker maximizes CARA utility of terminal wealth with risk aversion $\\gamma$.

**The HJB system.** Because each fill moves inventory to a neighbouring level, the value function satisfies a *coupled* system of HJB equations — one per inventory level $q$, linked to $q\\pm 1$. This is what Avellaneda-Stoikov could only solve asymptotically.

**The linearization.** Guéant's substitution is to write the value function as

$$u(t,x,q,s) = -e^{-\\gamma(x+qs)}\\,v_q(t)^{-\\gamma/k}.$$

The cash $x$, price $s$, and exponential cancel exactly, the two suprema over $\\delta^b,\\delta^a$ are solved by first-order conditions, and what remains is a **linear** ODE system in the positive functions $v_q(t)$:

$$v_q'(t) = \\alpha\\, q^2\\, v_q(t) - \\eta\\,\\big(v_{q-1}(t) + v_{q+1}(t)\\big), \\qquad \\alpha = \\tfrac{k}{2}\\gamma\\sigma^2, \\quad \\eta = A\\Big(1+\\tfrac{\\gamma}{k}\\Big)^{-(1+k/\\gamma)},$$

with terminal condition $v_q(T)=1$. Stacking the $v_q$ into a vector, this is $v'(t) = M\\,v(t)$ for a symmetric **tridiagonal** matrix $M$ (diagonal $\\alpha q^2$, off-diagonals $-\\eta$), whose solution is a single matrix exponential, $v(t) = e^{-M(T-t)}\\mathbf{1}$.

**The optimal quotes.** The first-order conditions give explicit depths:

$$\\delta^{b*}(t,q) = \\frac{1}{k}\\ln\\frac{v_q(t)}{v_{q+1}(t)} + \\frac{1}{\\gamma}\\ln\\!\\Big(1+\\frac{\\gamma}{k}\\Big), \\qquad \\delta^{a*}(t,q) = \\frac{1}{k}\\ln\\frac{v_q(t)}{v_{q-1}(t)} + \\frac{1}{\\gamma}\\ln\\!\\Big(1+\\frac{\\gamma}{k}\\Big).$$

Each quote is a **microstructure floor** $\\tfrac{1}{\\gamma}\\ln(1+\\gamma/k)$ — the edge demanded for immediacy, set by liquidity and risk aversion — plus an **inventory-skew** term (the log ratio of neighbouring $v_q$'s) that mean-reverts the position toward zero.

**The long-horizon limit and the inventory bound.** As $T\\to\\infty$ the $v_q$-ratios converge to the ratios of $f^0$, the eigenvector of the *smallest eigenvalue* of $M$; a Gaussian approximation gives $f^0_q \\propto e^{-\\frac12\\sqrt{\\alpha/\\eta}\\,q^2}$. So the stationary inventory distribution is approximately Gaussian — the provable confinement: the position stays within a few multiples of $(\\eta/\\alpha)^{1/4}$, tighter when risk aversion, volatility, or the decay $k$ are large.

**The execution side, for contrast.** The same closed-form instinct runs through Part II: with CARA utility and an arithmetic price, optimal liquidation reduces to a deterministic problem minimizing $\\int_0^T[\\,V L(\\dot q/V) + \\tfrac12\\gamma\\sigma^2 q^2\\,]dt$, and for quadratic cost the optimal trading curve is the hyperbolic-sine Almgren-Chriss trajectory $q^*(t) = q_0\\,\\sinh(\\omega(T-t))/\\sinh(\\omega T)$ with $\\omega = \\sqrt{\\gamma\\sigma^2 V/(2\\eta_{\\text{exec}})}$.`,
        id: `**Model-nya (Guéant-Lehalle-Fernández-Tapia).** Reference price-nya arithmetic Brownian motion, $dS_t = \\sigma\\, dW_t$. Market maker naruh bid di depth $\\delta^b$ di bawah dan ask di depth $\\delta^a$ di atas $S_t$. Market order datang sebagai proses Poisson yang intensitasnya *meluruh eksponensial* di depth yang di-quote, $\\lambda(\\delta) = A\\,e^{-k\\delta}$ — quote ketat dan kamu sering fill tapi dapet sedikit; quote lebar dan kamu dapet lebih per fill tapi jarang fill. Inventory $q_t$ loncat $\\pm 1$ tiap fill dan di-cap di batas keras $Q$ (batas risk yang juga ngejaga sistemnya finite). Maker ngemaksimalin CARA utility dari wealth terminal dengan risk aversion $\\gamma$.

**Sistem HJB-nya.** Karena tiap fill mindahin inventory ke level tetangga, value function memenuhi sistem persamaan HJB yang *coupled* — satu per level inventory $q$, tersambung ke $q\\pm 1$. Ini yang Avellaneda-Stoikov cuma bisa selesaiin secara asimtotik.

**Linearisasinya.** Substitusi Guéant itu nulis value function sebagai

$$u(t,x,q,s) = -e^{-\\gamma(x+qs)}\\,v_q(t)^{-\\gamma/k}.$$

Cash $x$, harga $s$, dan exponential-nya batal eksak, dua supremum over $\\delta^b,\\delta^a$ diselesaiin sama first-order condition, dan yang tersisa itu sistem ODE **linear** di fungsi positif $v_q(t)$:

$$v_q'(t) = \\alpha\\, q^2\\, v_q(t) - \\eta\\,\\big(v_{q-1}(t) + v_{q+1}(t)\\big), \\qquad \\alpha = \\tfrac{k}{2}\\gamma\\sigma^2, \\quad \\eta = A\\Big(1+\\tfrac{\\gamma}{k}\\Big)^{-(1+k/\\gamma)},$$

dengan terminal condition $v_q(T)=1$. Numpuk $v_q$ jadi vektor, ini $v'(t) = M\\,v(t)$ buat matriks **tridiagonal** simetris $M$ (diagonal $\\alpha q^2$, off-diagonal $-\\eta$), yang solusinya satu matrix exponential, $v(t) = e^{-M(T-t)}\\mathbf{1}$.

**Quote optimal-nya.** First-order condition ngasih depth eksplisit:

$$\\delta^{b*}(t,q) = \\frac{1}{k}\\ln\\frac{v_q(t)}{v_{q+1}(t)} + \\frac{1}{\\gamma}\\ln\\!\\Big(1+\\frac{\\gamma}{k}\\Big), \\qquad \\delta^{a*}(t,q) = \\frac{1}{k}\\ln\\frac{v_q(t)}{v_{q-1}(t)} + \\frac{1}{\\gamma}\\ln\\!\\Big(1+\\frac{\\gamma}{k}\\Big).$$

Tiap quote itu **microstructure floor** $\\tfrac{1}{\\gamma}\\ln(1+\\gamma/k)$ — edge yang diminta buat immediacy, di-set sama liquidity dan risk aversion — plus term **inventory-skew** (log rasio $v_q$ tetangga) yang nge-mean-revert posisi menuju nol.

**Limit long-horizon dan batas inventory.** Pas $T\\to\\infty$ rasio $v_q$-nya konvergen ke rasio $f^0$, eigenvector dari *eigenvalue terkecil* dari $M$; aproksimasi Gaussian ngasih $f^0_q \\propto e^{-\\frac12\\sqrt{\\alpha/\\eta}\\,q^2}$. Jadi distribusi inventory stasioner kira-kira Gaussian — konfinemen yang bisa dibuktikan: posisi tetep dalam beberapa kelipatan $(\\eta/\\alpha)^{1/4}$, lebih ketat pas risk aversion, volatility, atau decay $k$ gede.

**Sisi execution, buat kontras.** Insting closed-form yang sama jalan di Part II: dengan CARA utility dan arithmetic price, optimal liquidation tereduksi jadi problem deterministik yang ngeminimalin $\\int_0^T[\\,V L(\\dot q/V) + \\tfrac12\\gamma\\sigma^2 q^2\\,]dt$, dan buat quadratic cost trading curve optimal-nya itu trajectory hyperbolic-sine Almgren-Chriss $q^*(t) = q_0\\,\\sinh(\\omega(T-t))/\\sinh(\\omega T)$ dengan $\\omega = \\sqrt{\\gamma\\sigma^2 V/(2\\eta_{\\text{exec}})}$.`
      }
    },

    // ─────────────── 4. worked-example ───────────────
    {
      id: 'worked-example',
      heading: { en: 'Worked example', id: 'Contoh kerjaan' },
      body: {
        en: `**Computing the optimal quotes.** Take the illustrative parameters from the Guéant-Lehalle-Fernández-Tapia paper (prices in *ticks*, time in seconds): volatility $\\sigma = 0.3$, fill base-rate $A = 0.9$/s, depth-decay $k = 0.3$/tick, risk aversion $\\gamma = 0.01$/tick, horizon $T = 600$ s, inventory cap $Q = 30$.

**Step 1 — the constants.** $\\alpha = \\tfrac{k}{2}\\gamma\\sigma^2 = \\tfrac{0.3}{2}(0.01)(0.09) = 1.35\\times 10^{-4}$, and $\\eta = A(1+\\gamma/k)^{-(1+k/\\gamma)} = 0.9\\,(1.0333)^{-31} \\approx 0.326$.

**Step 2 — solve the linear system.** Build the $61\\times 61$ tridiagonal matrix $M$ (diagonal $\\alpha q^2$ for $q=-30,\\dots,30$; off-diagonals $-\\eta$) and compute $v(t) = e^{-M(T-t)}\\mathbf{1}$. (For the long-horizon policy, use the eigenvector of the smallest eigenvalue of $M$ in place of the $v$-ratios — or the Gaussian closed form.)

**Step 3 — read off the quotes.** The microstructure floor is $\\tfrac{1}{\\gamma}\\ln(1+\\gamma/k) = 100\\ln(1.0333) \\approx 3.28$ ticks. At flat inventory ($q=0$), symmetry gives equal depths of about **3.31 ticks** on each side, so the **quoted spread is ≈ 6.63 ticks** — and it is nearly flat across inventory levels (the spread is set by liquidity and risk; inventory moves the *skew*, not the width).

**Step 4 — the inventory skew.** The per-unit skew is about $\\tfrac{1}{k}\\sqrt{\\alpha/\\eta} \\approx 0.068$ tick per unit of inventory. So when the maker is **long one unit** ($q=+1$): the ask depth tightens to $\\delta^a \\approx 3.25$ (the ask price drops toward the mid — sell the excess) and the bid depth widens to $\\delta^b \\approx 3.38$ (the bid price drops away — stop buying). Both quoted prices move **down**, exactly the Avellaneda-Stoikov inventory behaviour — but here the numbers come from an *exact* linear-algebra solution, not an approximation. At $q=+2$ the skew doubles ($\\delta^a \\approx 3.18$, $\\delta^b \\approx 3.45$); when short, the picture mirrors.

**The takeaway.** Avellaneda-Stoikov told you the *shape* — quote around an inventory-skewed reservation price. Guéant gives you the *exact quotes for every inventory level from one matrix exponential*, plus the guarantee that the resulting inventory is confined to an approximately-Gaussian band. That is the step from "I know what the strategy looks like" to "I can compute it and bound its risk." (Numbers illustrative, from the GLFT parameters; the exact matrix solution, the smallest-eigenvalue eigenvector, and the Gaussian approximation agree to a few decimals.)`,
        id: `**Ngomputasi quote optimal.** Ambil parameter ilustratif dari paper Guéant-Lehalle-Fernández-Tapia (harga dalam *tick*, waktu dalam detik): volatility $\\sigma = 0.3$, fill base-rate $A = 0.9$/s, depth-decay $k = 0.3$/tick, risk aversion $\\gamma = 0.01$/tick, horizon $T = 600$ s, inventory cap $Q = 30$.

**Langkah 1 — konstanta-nya.** $\\alpha = \\tfrac{k}{2}\\gamma\\sigma^2 = \\tfrac{0.3}{2}(0.01)(0.09) = 1.35\\times 10^{-4}$, dan $\\eta = A(1+\\gamma/k)^{-(1+k/\\gamma)} = 0.9\\,(1.0333)^{-31} \\approx 0.326$.

**Langkah 2 — selesaiin sistem linear-nya.** Bangun matriks tridiagonal $61\\times 61$ $M$ (diagonal $\\alpha q^2$ buat $q=-30,\\dots,30$; off-diagonal $-\\eta$) dan komputasi $v(t) = e^{-M(T-t)}\\mathbf{1}$. (Buat policy long-horizon, pakai eigenvector dari eigenvalue terkecil dari $M$ sebagai ganti rasio $v$ — atau Gaussian closed form-nya.)

**Langkah 3 — baca quote-nya.** Microstructure floor-nya $\\tfrac{1}{\\gamma}\\ln(1+\\gamma/k) = 100\\ln(1.0333) \\approx 3.28$ tick. Di inventory flat ($q=0$), simetri ngasih depth sama sekitar **3.31 tick** di tiap sisi, jadi **quoted spread ≈ 6.63 tick** — dan dia nyaris flat lintas level inventory (spread di-set sama liquidity dan risk; inventory nggerakin *skew*-nya, bukan lebarnya).

**Langkah 4 — inventory skew-nya.** Skew per-unit-nya sekitar $\\tfrac{1}{k}\\sqrt{\\alpha/\\eta} \\approx 0.068$ tick per unit inventory. Jadi pas maker **long satu unit** ($q=+1$): depth ask ngetat ke $\\delta^a \\approx 3.25$ (harga ask turun menuju mid — jual kelebihan) dan depth bid melebar ke $\\delta^b \\approx 3.38$ (harga bid turun menjauh — berhenti beli). Kedua harga yang di-quote gerak **turun**, persis behaviour inventory Avellaneda-Stoikov — tapi di sini angkanya datang dari solusi linear-algebra *eksak*, bukan aproksimasi. Di $q=+2$ skew-nya dua kali lipat ($\\delta^a \\approx 3.18$, $\\delta^b \\approx 3.45$); pas short, gambarnya cermin.

**Intinya.** Avellaneda-Stoikov ngasih tau kamu *bentuk*-nya — quote di sekitar reservation price yang inventory-skewed. Guéant ngasih kamu *quote eksak buat tiap level inventory dari satu matrix exponential*, plus jaminan bahwa inventory yang dihasilin terkonfinasi ke pita yang kira-kira Gaussian. Itu langkah dari "aku tau strateginya kelihatan gimana" ke "aku bisa komputasi dia dan ngebatasin risk-nya." (Angka ilustratif, dari parameter GLFT; solusi matriks eksak, eigenvector eigenvalue-terkecil, dan aproksimasi Gaussian cocok sampai beberapa desimal.)`
      }
    },

    // ─────────────── 5. applications ───────────────
    {
      id: 'applications',
      heading: { en: 'Applications', id: 'Aplikasi' },
      body: {
        en: `**Who should read it, and what you can build.**

**Computable market making.** The headline deliverable is a market-making engine whose optimal quotes you can actually *compute* for every inventory level — build the tridiagonal matrix, take a matrix exponential, read off the depths. The book (and Guéant's "Optimal Market Making") generalizes this to arbitrary fill-intensity shapes, to a running-inventory-penalty objective (the same one Cartea-Jaimungal-Penalva use), and to **multi-asset** market making, which is the realistic case for an options or corporate-bond desk holding correlated risk.

**Liquidity-aware pricing.** The middle of the book is what most treatments omit: once trading is costly, the price of a **block trade** carries a risk-liquidity premium (Guéant derives a closed-form block price), an **option** must be hedged accounting for the impact of the hedging trades (a nonlinear pricing PDE), and a **share buy-back** (accelerated share repurchase) becomes an optimal-execution-with-optionality problem. If you price or risk-manage anything that has to be *traded into existence*, this is the framework.

**Rigorous execution.** For optimal execution it is the careful reference: the generalized Almgren-Chriss with proper benchmarks (Implementation Shortfall, Target Close, POV, VWAP), participation constraints, multi-asset portfolios, and the numerical methods (shooting, Newton, convex duality) to solve them when closed forms run out.

**Where it sits.** Reach for **Guéant** when you want the mathematics done rigorously and, ideally, solved explicitly — the closed-form quotes, the provable inventory bound, the liquidity-in-pricing bridge. Reach for **Cartea-Jaimungal-Penalva** for the broader unifying picture and empirical grounding, **Bouchaud et al.** for the empirics of impact, and **Kissell** for the practitioner's benchmark mechanics.

**The honest caveats.** The closed forms are bought with structure: CARA utility, arithmetic (not geometric) prices, exponential fill intensities. These are excellent modelling choices that keep the problem solvable, but a practitioner must check they fit the instrument. The book is mathematically demanding — it genuinely requires stochastic control, convex analysis, and PDE — and, like its peers, it stops at the model: the systems, latency, and regulatory layers of a live desk are out of scope.`,
        id: `**Siapa yang harus baca, dan apa yang bisa kamu bangun.**

**Market making yang bisa dikomputasi.** Deliverable headline-nya itu market-making engine yang quote optimal-nya beneran bisa kamu *komputasi* buat tiap level inventory — bangun matriks tridiagonal, ambil matrix exponential, baca depth-nya. Buku-nya (dan "Optimal Market Making"-nya Guéant) nggeneralisasi ini ke bentuk fill-intensity sembarang, ke objektif running-inventory-penalty (yang sama yang Cartea-Jaimungal-Penalva pakai), dan ke market making **multi-asset**, yang itu kasus realistis buat desk opsi atau corporate-bond yang nahan risk berkorelasi.

**Pricing yang liquidity-aware.** Bagian tengah buku-nya itu yang kebanyakan perlakuan lewatin: begitu trading mahal, harga **block trade** bawa risk-liquidity premium (Guéant nurunin block price closed-form), **opsi** harus di-hedge memperhitungkan impact dari trade hedging-nya (PDE pricing nonlinear), dan **share buy-back** (accelerated share repurchase) jadi problem optimal-execution-dengan-optionality. Kalau kamu ngehargai atau ngerisk-manage apa pun yang harus *di-trade jadi ada*, ini framework-nya.

**Execution yang rigorous.** Buat optimal execution dia rujukan yang hati-hati: Almgren-Chriss yang digeneralisasi dengan benchmark yang benar (Implementation Shortfall, Target Close, POV, VWAP), participation constraint, portfolio multi-asset, dan metode numerik (shooting, Newton, convex duality) buat nyelesainnya pas closed form habis.

**Di mana dia duduk.** Raih **Guéant** pas kamu mau matematikanya dikerjain rigorous dan, idealnya, diselesaiin eksplisit — quote closed-form, batas inventory yang bisa dibuktikan, jembatan liquidity-in-pricing. Raih **Cartea-Jaimungal-Penalva** buat gambaran pemersatu yang lebih luas dan landasan empiris, **Bouchaud et al.** buat empiris impact, dan **Kissell** buat mekanik benchmark praktisi.

**Caveat jujurnya.** Closed form-nya dibeli sama struktur: CARA utility, harga arithmetic (bukan geometric), exponential fill intensity. Ini pilihan pemodelan yang bagus yang ngejaga problem-nya solvable, tapi praktisi harus ngecek mereka cocok sama instrumennya. Buku-nya berat secara matematis — dia beneran butuh stochastic control, convex analysis, dan PDE — dan, kayak peer-nya, dia berhenti di model: lapisan sistem, latency, dan regulasi dari desk live itu di luar scope.`
      }
    },

    // ─────────────── 6. practice ───────────────
    {
      id: 'practice',
      heading: { en: 'Practice', id: 'Latihan' },
      body: {
        en: `**1.** In the Guéant-Lehalle-Fernández-Tapia quotes, the inventory-independent part is the "microstructure floor" $\\tfrac{1}{\\gamma}\\ln(1+\\gamma/k)$. Compute it for risk aversion $\\gamma = 0.01$/tick and depth-decay $k = 0.3$/tick, and say in words what it represents and which way it moves as the maker becomes more risk-averse.

<details><summary>Answer</summary>
$\\tfrac{1}{\\gamma}\\ln(1+\\gamma/k) = \\tfrac{1}{0.01}\\ln(1+0.01/0.3) = 100\\ln(1.0333) \\approx 3.28$ ticks. It is the symmetric half-spread — the edge the maker demands purely for providing immediacy, before any inventory consideration — and it depends only on the depth-decay $k$ and the risk aversion $\\gamma$ (not on volatility or the fill rate $A$). It is in fact *decreasing* in $\\gamma$: it falls from its risk-neutral maximum of $1/k$ (as $\\gamma\\to 0$) toward 0 as $\\gamma$ grows — a more risk-averse maker takes a *smaller* inventory-independent markup, because its compensation for bearing inventory risk lives in the inventory *skew* and the tighter inventory band, not in this floor. Twice the floor is $\\approx 6.6$ ticks; the exact flat-inventory spread is marginally wider ($\\approx 6.63$ ticks, as in the worked example), since the $q=0$ depth adds a small symmetric correction beyond the floor.
</details>

**2.** Using the worked-example per-unit skew of about 0.068 tick per unit of inventory and the flat-inventory depth of ≈ 3.31 ticks, give the approximate bid and ask depths when the maker is long two units ($q=+2$), and explain which way the *quoted prices* move and why.

<details><summary>Answer</summary>
The skew shifts the ask in and the bid out by about $0.068\\times 2 \\approx 0.14$ tick: $\\delta^a \\approx 3.31 - 0.14 \\approx 3.18$ ticks and $\\delta^b \\approx 3.31 + 0.14 \\approx 3.45$ ticks. Because the ask *price* is $S+\\delta^a$ and the bid *price* is $S-\\delta^b$, a smaller $\\delta^a$ and larger $\\delta^b$ push **both quoted prices down**: the ask gets keener (sell the long faster) and the bid gets shyer (stop accumulating). This mean-reverts inventory toward zero — the Avellaneda-Stoikov behaviour, now from an exact solution. When short, the prices move up by the same logic.
</details>

**3.** Avellaneda-Stoikov and Guéant-Lehalle-Fernández-Tapia model the *same* market-making problem. What, computationally, is the difference between how each one solves it, and why does Guéant's matter?

<details><summary>Answer</summary>
Avellaneda-Stoikov solve the coupled HJB system only *asymptotically* — a small-inventory / approximate expansion that gives the reservation-price-and-spread intuition but not exact quotes. Guéant-Lehalle-Fernández-Tapia find an *exact* solution: the exponential change of variables (see the formalization) linearizes the system into linear ODEs solved by a single matrix exponential, with optimal depths read directly from ratios of the resulting $v_q$'s. It matters because exactness buys you two things AS could not: optimal quotes you can *compute* for every inventory level, and a *provable* characterization of the inventory's stationary (approximately Gaussian) distribution — a guarantee on how well the strategy controls risk.
</details>

**4.** The book's middle part argues that "liquidity" belongs in option pricing and block-trade pricing, not just in execution. Why does adding execution cost / market impact change the price of a derivative or a block, relative to the frictionless answer?

<details><summary>Answer</summary>
Frictionless pricing assumes you can trade any quantity at the quoted price with no cost or impact. Once trading is costly and moves the price, *acquiring or unwinding the position itself has a cost that depends on size, urgency, and volatility* — so the fair value must include it. A **block trade** is worth less than (size × mid) to the buyer because liquidating it would incur impact: Guéant derives a closed-form risk-liquidity premium subtracted from the mark-to-mid value. An **option** can no longer be hedged costlessly — the hedging trades have impact, so the replication cost (and thus the price) rises, giving a nonlinear pricing PDE. A **share buy-back** is an execution problem with optionality. In each case the same liquidity machinery that solves optimal execution re-prices the instrument, which is why it is one framework, not three.
</details>`,
        id: `**1.** Di quote Guéant-Lehalle-Fernández-Tapia, bagian yang inventory-independent itu "microstructure floor" $\\tfrac{1}{\\gamma}\\ln(1+\\gamma/k)$. Komputasi dia buat risk aversion $\\gamma = 0.01$/tick dan depth-decay $k = 0.3$/tick, dan sebutin dengan kata-kata apa yang dia representasiin dan ke arah mana dia gerak pas maker jadi lebih risk-averse.

<details><summary>Jawaban</summary>
$\\tfrac{1}{\\gamma}\\ln(1+\\gamma/k) = \\tfrac{1}{0.01}\\ln(1+0.01/0.3) = 100\\ln(1.0333) \\approx 3.28$ tick. Itu half-spread simetris — edge yang maker minta murni buat nyediain immediacy, sebelum pertimbangan inventory apa pun — dan dia cuma tergantung depth-decay $k$ dan risk aversion $\\gamma$ (bukan volatility atau fill rate $A$). Dia justru *menurun* di $\\gamma$: dia jatuh dari maksimum risk-neutral-nya $1/k$ (pas $\\gamma\\to 0$) menuju 0 pas $\\gamma$ tumbuh — maker yang lebih risk-averse ngambil markup inventory-independent yang *lebih kecil*, karena kompensasinya buat nanggung inventory risk tinggal di inventory *skew* dan pita inventory yang lebih ketat, bukan di floor ini. Dua kali floor itu $\\approx 6.6$ tick; spread inventory-flat yang eksak sedikit lebih lebar ($\\approx 6.63$ tick, kayak di worked example), karena depth $q=0$ nambahin koreksi simetris kecil di atas floor.
</details>

**2.** Pakai skew per-unit dari worked-example sekitar 0.068 tick per unit inventory dan depth inventory-flat ≈ 3.31 tick, kasih depth bid dan ask aproksimat pas maker long dua unit ($q=+2$), dan jelasin ke arah mana *harga yang di-quote* gerak dan kenapa.

<details><summary>Jawaban</summary>
Skew-nya nggeser ask masuk dan bid keluar sekitar $0.068\\times 2 \\approx 0.14$ tick: $\\delta^a \\approx 3.31 - 0.14 \\approx 3.18$ tick dan $\\delta^b \\approx 3.31 + 0.14 \\approx 3.45$ tick. Karena harga *ask* itu $S+\\delta^a$ dan harga *bid* itu $S-\\delta^b$, $\\delta^a$ lebih kecil dan $\\delta^b$ lebih gede ndorong **kedua harga yang di-quote turun**: ask jadi lebih agresif (jual long lebih cepet) dan bid jadi lebih malu (berhenti ngumpulin). Ini nge-mean-revert inventory menuju nol — behaviour Avellaneda-Stoikov, sekarang dari solusi eksak. Pas short, harganya gerak naik dengan logika yang sama.
</details>

**3.** Avellaneda-Stoikov dan Guéant-Lehalle-Fernández-Tapia ngemodelin problem market-making yang *sama*. Apa, secara komputasional, beda antara gimana masing-masing nyelesainnya, dan kenapa punya Guéant penting?

<details><summary>Jawaban</summary>
Avellaneda-Stoikov nyelesain sistem HJB yang coupled cuma secara *asimtotik* — ekspansi small-inventory / aproksimat yang ngasih intuisi reservation-price-dan-spread tapi bukan quote eksak. Guéant-Lehalle-Fernández-Tapia nemu solusi *eksak*: exponential change of variables (liat formalization) nge-linearisasi sistemnya jadi ODE linear yang diselesaiin sama satu matrix exponential, dengan depth optimal dibaca langsung dari rasio $v_q$ yang dihasilin. Dia penting karena eksaktitas ngebeliin kamu dua hal yang AS gak bisa: quote optimal yang bisa kamu *komputasi* buat tiap level inventory, dan karakterisasi yang *bisa dibuktikan* dari distribusi inventory stasioner (kira-kira Gaussian) — jaminan soal seberapa baik strateginya ngontrol risk.
</details>

**4.** Bagian tengah buku-nya ngeklaim "liquidity" itu masuk ke option pricing dan block-trade pricing, bukan cuma execution. Kenapa nambah execution cost / market impact ngubah harga derivatif atau block, relatif ke jawaban frictionless?

<details><summary>Jawaban</summary>
Pricing frictionless nganggep kamu bisa trade kuantitas apa pun di harga yang di-quote tanpa biaya atau impact. Begitu trading mahal dan nggerakin harga, *acquire atau unwind posisinya sendiri punya biaya yang tergantung size, urgency, dan volatility* — jadi fair value-nya harus masukin dia. **Block trade** bernilai kurang dari (size × mid) buat pembeli karena liquidate dia bakal kena impact: Guéant nurunin risk-liquidity premium closed-form yang dikurangin dari nilai mark-to-mid. **Opsi** gak bisa lagi di-hedge tanpa biaya — trade hedging-nya punya impact, jadi biaya replikasi (dan karenanya harga) naik, ngasih PDE pricing nonlinear. **Share buy-back** itu problem execution dengan optionality. Di tiap kasus mesin liquidity yang sama yang nyelesain optimal execution ngehargai-ulang instrumennya, yang itu kenapa dia satu framework, bukan tiga.
</details>`
      }
    },

    // ─────────────── 7. connections ───────────────
    {
      id: 'connections',
      heading: { en: 'Connections', id: 'Koneksi' },
      body: {
        en: `- **Closes**: [Avellaneda-Stoikov 2008](item:stoikov-2008) — Guéant-Lehalle-Fernández-Tapia turn its asymptotically-solved market-making HJB into an exact, closed-form one (linear ODEs / a matrix exponential), with a provable inventory bound.
- **Builds on**: [Almgren-Chriss 2000](item:almgren-chriss-2000) — the optimal-execution foundation that the book generalizes (CARA reduction, benchmarks, portfolios) in Part II. [Kyle 1985](item:kyle-1985) supplies the linear price-impact primitive behind the impact functions.
- **Companion text**: [Cartea-Jaimungal-Penalva 2015](item:cartea-jaimungal-penalva) — the same stochastic-control worldview; CJP is the broad unifier and empirically grounded, Guéant is the deeper, closed-form-seeking, pricing-extended treatment.
- **Empirics & practice**: [Bouchaud-Bonart-Donier-Gould 2018](item:bouchaud-bonart-donier-gould-2018) for the empirical impact law the models assume; [Kissell 2013](item:kissell-2013) for the practitioner's VWAP/TWAP/POV benchmark mechanics; [Cont-Kukanov-Stoikov 2014](item:cont-kukanov-stoikov-2014) for the order-flow signals these strategies react to.
- **Builds toward**: multi-asset and corporate-bond market making, and reinforcement-learning approaches to execution and quoting (Guéant's own later direction).`,
        id: `- **Nutup**: [Avellaneda-Stoikov 2008](item:stoikov-2008) — Guéant-Lehalle-Fernández-Tapia ngubah HJB market-making-nya yang diselesaiin-asimtotik jadi yang eksak, closed-form (ODE linear / matrix exponential), dengan batas inventory yang bisa dibuktikan.
- **Bangun di atas**: [Almgren-Chriss 2000](item:almgren-chriss-2000) — fondasi optimal-execution yang buku-nya generalisasi (reduksi CARA, benchmark, portfolio) di Part II. [Kyle 1985](item:kyle-1985) nyediain primitif linear price-impact di balik fungsi impact-nya.
- **Teks pendamping**: [Cartea-Jaimungal-Penalva 2015](item:cartea-jaimungal-penalva) — worldview stochastic-control yang sama; CJP pemersatu yang luas dan berlandaskan empiris, Guéant perlakuan yang lebih dalam, pencari-closed-form, dan di-extend-ke-pricing.
- **Empiris & praktik**: [Bouchaud-Bonart-Donier-Gould 2018](item:bouchaud-bonart-donier-gould-2018) buat hukum impact empiris yang model-nya anggep; [Kissell 2013](item:kissell-2013) buat mekanik benchmark VWAP/TWAP/POV praktisi; [Cont-Kukanov-Stoikov 2014](item:cont-kukanov-stoikov-2014) buat sinyal order-flow yang strategi ini bereaksi ke-nya.
- **Bangun menuju**: market making multi-asset dan corporate-bond, dan pendekatan reinforcement-learning ke execution dan quoting (arah Guéant sendiri kemudian).`
      }
    },

    // ─────────────── 8. sources ───────────────
    {
      id: 'sources',
      heading: { en: 'Sources', id: 'Sumber' },
      body: {
        en: `- **Guéant, O.** (2016). *The Financial Mathematics of Market Liquidity: From Optimal Execution to Market Making*. Chapman & Hall/CRC (Financial Mathematics Series). The rigorous, closed-form-seeking liquidity textbook. **(This item.)**
- **Guéant, O., Lehalle, C.-A., and Fernández-Tapia, J.** (2013). "Dealing with the Inventory Risk: A Solution to the Market Making Problem." *Mathematics and Financial Economics*, 7(4), 477-507. The closed-form market-making result — the heart of Part IV.
- **Avellaneda, M., and Stoikov, S.** (2008). "High-Frequency Trading in a Limit Order Book." *Quantitative Finance*, 8(3), 217-224. The market-making problem the book closes.
- **Almgren, R., and Chriss, N.** (2000). "Optimal Execution of Portfolio Transactions." *Journal of Risk*, 3(2), 5-39. The optimal-execution foundation the book generalizes (Part II).
- **Cartea, Á., Jaimungal, S., and Penalva, J.** (2015). *Algorithmic and High-Frequency Trading*. Cambridge University Press. The companion stochastic-control textbook — read alongside for breadth.`,
        id: `- **Guéant, O.** (2016). *The Financial Mathematics of Market Liquidity: From Optimal Execution to Market Making*. Chapman & Hall/CRC (Financial Mathematics Series). Textbook liquidity yang rigorous dan pencari-closed-form. **(Item ini.)**
- **Guéant, O., Lehalle, C.-A., dan Fernández-Tapia, J.** (2013). "Dealing with the Inventory Risk: A Solution to the Market Making Problem." *Mathematics and Financial Economics*, 7(4), 477-507. Hasil market-making closed-form — jantung Part IV.
- **Avellaneda, M., dan Stoikov, S.** (2008). "High-Frequency Trading in a Limit Order Book." *Quantitative Finance*, 8(3), 217-224. Problem market-making yang buku-nya tutup.
- **Almgren, R., dan Chriss, N.** (2000). "Optimal Execution of Portfolio Transactions." *Journal of Risk*, 3(2), 5-39. Fondasi optimal-execution yang buku-nya generalisasi (Part II).
- **Cartea, Á., Jaimungal, S., dan Penalva, J.** (2015). *Algorithmic and High-Frequency Trading*. Cambridge University Press. Textbook stochastic-control pendamping — dibaca bareng buat keluasan.`
      }
    },
  ],

  audio: { enabled: true },

  selfTest: [
    {
      sectionId: 'intuition',
      question: {
        en: 'Optimal liquidation looks like a stochastic control problem, but Guéant reduces it to a deterministic one. What two modelling assumptions make that reduction possible, and what is the intuition?',
        id: 'Optimal liquidation kelihatan kayak problem stochastic control, tapi Guéant ngereduksi dia jadi deterministik. Dua asumsi pemodelan apa yang bikin reduksi itu mungkin, dan apa intuisinya?'
      },
      prompt: { en: 'Before continuing, try answering:', id: 'Sebelum lanjut, coba jawab:' },
      answer: {
        en: 'CARA (exponential) utility and an arithmetic (Bachelier) price process. With those two, a Girsanov-style argument shows that no random (state-contingent) trading strategy can beat the best deterministic schedule — the price randomness factors out of the optimization. So the stochastic control problem collapses to a deterministic calculus-of-variations problem: choose the trading curve q(t) minimizing execution cost plus a running variance penalty ½γσ²q². The intuition is that the apparent need to react to price moves was an artifact of the coordinates; with CARA + arithmetic prices, the optimal *plan* does not depend on the path the price happens to take, and for quadratic cost it is the closed-form hyperbolic-sine (Almgren-Chriss) trajectory.',
        id: 'CARA (exponential) utility dan proses harga arithmetic (Bachelier). Dengan dua itu, argumen ala-Girsanov nunjukin gak ada strategi trading random (state-contingent) yang bisa ngalahin jadwal deterministik terbaik — randomness harganya kefaktor keluar dari optimisasi. Jadi problem stochastic control-nya kolaps jadi problem calculus-of-variations deterministik: pilih trading curve q(t) yang ngeminimalin execution cost plus running variance penalty ½γσ²q². Intuisinya, kebutuhan yang kelihatan buat bereaksi ke pergerakan harga itu artefak dari koordinat; dengan CARA + harga arithmetic, *rencana* optimal-nya gak tergantung path yang harganya kebetulan ambil, dan buat quadratic cost dia trajectory hyperbolic-sine (Almgren-Chriss) closed-form.'
      }
    },
    {
      sectionId: 'formalization',
      question: {
        en: 'Avellaneda-Stoikov could only solve their market-making HJB asymptotically. What is the change of variables that lets Guéant-Lehalle-Fernández-Tapia solve it exactly, and what does the problem reduce to?',
        id: 'Avellaneda-Stoikov cuma bisa nyelesain HJB market-making mereka secara asimtotik. Apa change of variables yang ngebolehin Guéant-Lehalle-Fernández-Tapia nyelesainnya eksak, dan problem-nya tereduksi jadi apa?'
      },
      prompt: { en: 'Before continuing, try answering:', id: 'Sebelum lanjut, coba jawab:' },
      answer: {
        en: 'Write the value function as u(t,x,q,s) = −exp(−γ(x+qs)) · v_q(t)^(−γ/k). Substituting into the coupled HJB system makes the cash x, price s, and exponential cancel exactly, and the two suprema over the bid/ask depths are solved in closed form by first-order conditions. What remains is a *linear* system of ODEs in the functions v_q(t): v_q′ = αq²v_q − η(v_{q−1}+v_{q+1}), with α=(k/2)γσ² and η=A(1+γ/k)^(−(1+k/γ)) and terminal condition v_q(T)=1. Stacked into a vector this is v′(t)=Mv(t) for a symmetric tridiagonal matrix M, so the solution is a single matrix exponential v(t)=exp(−M(T−t))·1, and the optimal depths are read off as log-ratios of neighbouring v_q. The hard coupled nonlinear PDE system becomes finite-dimensional linear algebra.',
        id: 'Tulis value function sebagai u(t,x,q,s) = −exp(−γ(x+qs)) · v_q(t)^(−γ/k). Substitusi ke sistem HJB yang coupled bikin cash x, harga s, dan exponential-nya batal eksak, dan dua supremum over depth bid/ask diselesaiin closed form sama first-order condition. Yang tersisa itu sistem ODE *linear* di fungsi v_q(t): v_q′ = αq²v_q − η(v_{q−1}+v_{q+1}), dengan α=(k/2)γσ² dan η=A(1+γ/k)^(−(1+k/γ)) dan terminal condition v_q(T)=1. Ditumpuk jadi vektor ini v′(t)=Mv(t) buat matriks tridiagonal simetris M, jadi solusinya satu matrix exponential v(t)=exp(−M(T−t))·1, dan depth optimal-nya dibaca sebagai log-rasio v_q tetangga. Sistem PDE nonlinear coupled yang susah jadi linear algebra berdimensi-hingga.'
      }
    },
    {
      sectionId: 'formalization',
      question: {
        en: 'Guéant proves the optimal market-making strategy keeps inventory bounded. By what two mechanisms, and what shape does the long-run inventory distribution take?',
        id: 'Guéant ngebuktiin strategi market-making optimal-nya ngejaga inventory terbatas. Lewat dua mekanisme apa, dan bentuk apa yang distribusi inventory jangka-panjang ambil?'
      },
      prompt: { en: 'Before continuing, try answering:', id: 'Sebelum lanjut, coba jawab:' },
      answer: {
        en: 'First, a hard cap Q: the maker stops quoting on the side that would worsen inventory at q=±Q, which both enforces a risk limit and keeps the ODE system finite (2Q+1 equations). Second, an endogenous, soft confinement: the optimal quotes skew more and more aggressively against the position as |q| grows (when long, the ask tightens and the bid backs off), so the controlled inventory is mean-reverting toward zero. Its long-run (stationary) distribution is approximately Gaussian — given by the eigenvector of the smallest eigenvalue of the tridiagonal matrix M, with a Gaussian approximation f⁰_q ∝ exp(−½√(α/η)q²). So the position stays within a few multiples of (η/α)^(1/4), tighter when risk aversion, volatility, or the depth-decay k are larger. That is the provable bound on inventory.',
        id: 'Pertama, cap keras Q: maker berhenti quote di sisi yang bakal mperburuk inventory di q=±Q, yang sekaligus nge-enforce batas risk dan ngejaga sistem ODE-nya finite (2Q+1 persamaan). Kedua, konfinemen endogen yang lunak: quote optimal-nya nge-skew makin agresif melawan posisi pas |q| tumbuh (pas long, ask ngetat dan bid mundur), jadi inventory yang dikontrol itu mean-reverting menuju nol. Distribusi jangka-panjang (stasioner)-nya kira-kira Gaussian — dikasih sama eigenvector dari eigenvalue terkecil matriks tridiagonal M, dengan aproksimasi Gaussian f⁰_q ∝ exp(−½√(α/η)q²). Jadi posisi tetep dalam beberapa kelipatan (η/α)^(1/4), lebih ketat pas risk aversion, volatility, atau depth-decay k lebih gede. Itu batas inventory yang bisa dibuktikan.'
      }
    },
    {
      sectionId: 'applications',
      question: {
        en: 'How does Guéant (2016) differ from its companion Cartea-Jaimungal-Penalva (2015)? Give the main contrast and one thing Guéant covers that the others largely do not.',
        id: 'Gimana Guéant (2016) beda dari pendampingnya Cartea-Jaimungal-Penalva (2015)? Kasih kontras utamanya dan satu hal yang Guéant cover yang lain sebagian besar enggak.'
      },
      prompt: { en: 'Before continuing, try answering:', id: 'Sebelum lanjut, coba jawab:' },
      answer: {
        en: 'Both share the stochastic-control worldview, but CJP is the broad unifier — it shows execution, market making, VWAP, pairs trading, and order-imbalance strategies are one HJB recipe, and it is empirically grounded with datasets and code. Guéant is the deeper, more rigorous, closed-form-seeking specialist: it pushes hardest on actually *solving* the models (the CARA-to-deterministic reduction; the exact GLFT linearization of the market-making HJB into linear ODEs with a provable inventory bound). The thing Guéant covers that the others largely skip is *liquidity in pricing* — block-trade pricing with a risk-liquidity premium, option hedging under market impact (a nonlinear pricing PDE), and share buy-backs — showing the same liquidity machinery reprices derivatives and corporate transactions, not just execution and quoting.',
        id: 'Keduanya berbagi worldview stochastic-control, tapi CJP pemersatu yang luas — dia nunjukin execution, market making, VWAP, pairs trading, dan strategi order-imbalance itu satu resep HJB, dan dia berlandaskan empiris dengan dataset dan kode. Guéant spesialis yang lebih dalam, lebih rigorous, pencari-closed-form: dia ndorong paling keras soal beneran *nyelesain* model-nya (reduksi CARA-ke-deterministik; linearisasi GLFT eksak dari HJB market-making jadi ODE linear dengan batas inventory yang bisa dibuktikan). Hal yang Guéant cover yang lain sebagian besar lewatin itu *liquidity in pricing* — block-trade pricing dengan risk-liquidity premium, option hedging di bawah market impact (PDE pricing nonlinear), dan share buy-back — nunjukin mesin liquidity yang sama ngehargai-ulang derivatif dan transaksi korporat, bukan cuma execution dan quoting.'
      }
    },
  ],
};
