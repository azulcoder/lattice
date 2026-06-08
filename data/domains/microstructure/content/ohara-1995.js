export const CONTENT = {
  itemId: 'ohara-1995',
  estimatedReadMinutes: 36,

  author: {
    fullName: { en: "Maureen O'Hara", id: "Maureen O'Hara" },
    affiliation: {
      en: "Robert W. Purcell Professor of Management, Samuel Curtis Johnson Graduate School of Management, Cornell SC Johnson College of Business",
      id: "Robert W. Purcell Professor of Management, Samuel Curtis Johnson Graduate School of Management, Cornell SC Johnson College of Business"
    },
    tagline: {
      en: "Theorist of information-driven price formation — the textbook everyone returns to.",
      id: "Theorist information-driven price formation — textbook yang semua orang balik baca."
    },
    bio: {
      en: `Maureen O'Hara is the leading theoretical economist of market microstructure for her generation. She has been at Cornell's Johnson School since 1979, and her 1995 textbook *Market Microstructure Theory* is the canonical synthesis of the theoretical literature that emerged in the 1980s. Beyond the textbook, she co-authored the foundational PIN (Probability of Informed Trading) framework with Easley, Kiefer, and Paperman, and more recently developed VPIN with Easley and López de Prado as a refined toxicity measure. Her work consistently asks: given that markets aggregate dispersed private information, what should we expect prices and spreads to look like in equilibrium?`,
      id: `Maureen O'Hara adalah ekonom teoritis utama market microstructure di generasinya. Dia di Cornell Johnson School sejak 1979, dan textbook 1995-nya *Market Microstructure Theory* jadi sintesis kanon dari literature teoritis yang muncul di 1980-an. Selain textbook, dia co-author framework PIN (Probability of Informed Trading) bareng Easley, Kiefer, dan Paperman, terus lebih recent develop VPIN bareng Easley dan López de Prado sebagai refined toxicity measure. Kerja dia konsisten nanyain: kalau market aggregate dispersed private information, apa yang harusnya kita expect dari price dan spread di equilibrium?`
    },
    focus: {
      en: `Market microstructure (theoretical and empirical), banking and financial intermediaries, the law and finance interface, and more recently blockchain and cryptomarkets. Recurring themes: how private information transmits into prices, how market mechanisms shape liquidity, and how regulation should respond to evolving market structure.`,
      id: `Market microstructure (teoritis dan empiris), banking dan financial intermediaries, interface law dan finance, dan lebih recent blockchain dan cryptomarkets. Tema yang berulang: gimana private information nyebar ke price, gimana market mechanism nge-shape liquidity, dan gimana regulasi harus respond ke evolving market structure.`
    },
    intellectualLineage: {
      en: `PhD from Northwestern's Kellogg School of Management (1979). O'Hara belongs to the founding cohort of microstructure theorists who in the early 1980s built rigorous game-theoretic models of trading. Where Hasbrouck pushed the empirical methodology, O'Hara built and extended the theoretical scaffolding — the canonical Glosten-Milgrom sequential trade model, the Kyle batch auction, and later refinements like PIN are all in her direct intellectual orbit.`,
      id: `PhD dari Kellogg School of Management, Northwestern University (1979). O'Hara termasuk founding cohort theorist microstructure yang di awal 1980-an bangun model game-theoretic trading yang ketat. Kalau Hasbrouck dorong sisi metodologi empiris, O'Hara bangun dan extend scaffold-nya teoritis — Glosten-Milgrom sequential trade model yang kanon, Kyle batch auction, dan refinement lanjutan kayak PIN semua di orbit intelektual langsung dia.`
    },
    keyCollaborators: {
      en: `Long-running collaboration with **David Easley** (Cornell) — the Easley-O'Hara papers are foundational. With **Nicholas Kiefer** and **Joseph Paperman** developed the original PIN estimator (1996). With **Marcos López de Prado** developed VPIN (2012) as a high-frequency refinement. Editorial leadership at Review of Financial Studies and past president of three major societies (American Finance Association, Western Finance Association, Financial Management Association) put her at the center of the field's institutional life.`,
      id: `Kolaborasi panjang dengan **David Easley** (Cornell) — paper-paper Easley-O'Hara jadi fondasi. Dengan **Nicholas Kiefer** dan **Joseph Paperman** develop original PIN estimator (1996). Dengan **Marcos López de Prado** develop VPIN (2012) sebagai refinement high-frequency. Editorial leadership di Review of Financial Studies dan past president tiga society besar (AFA, Western FA, FMA) bikin dia di tengah institutional life field ini.`
    },
    legacy: {
      en: `The 1995 textbook organized two decades of theoretical microstructure into a coherent quantitative subject — students who read it can move through the literature without getting lost in idiosyncratic notation. The PIN model gave empiricists a workhorse for measuring informed trading; VPIN extended that into the high-frequency era. Her career is the case study for how theory and empirical work productively co-evolve: she keeps building models, then tools, then extending the tools as data and markets change.`,
      id: `Textbook 1995 nge-organize dua dekade teoritis microstructure jadi subject kuantitatif yang koheren — student yang baca bisa lanjut ke literature tanpa nyasar di notasi idiosynkratik. PIN model kasih empiricist workhorse buat ngukur informed trading; VPIN extend itu ke era high-frequency. Karir dia case study soal gimana theory dan empirical work co-evolve produktif: dia bangun model, terus bangun tools, terus extend tools-nya seiring data dan market berubah.`
    },
    keyWorks: [
      { year: 1992, title: 'Time and the Process of Security Price Adjustment', venue: 'Journal of Finance (with Easley)' },
      { year: 1995, title: 'Market Microstructure Theory (this item)', venue: 'Blackwell' },
      { year: 1996, title: 'Liquidity, Information, and Infrequently Traded Stocks (PIN)', venue: 'Journal of Finance (with Easley, Kiefer, Paperman)' },
      { year: 2012, title: 'Flow Toxicity and Liquidity in a High-Frequency World (VPIN)', venue: 'Review of Financial Studies (with Easley, López de Prado)' },
      { year: 2015, title: 'High Frequency Trading: New Realities for Traders, Markets, and Regulators', venue: 'Risk Books' },
    ],
  },

  sections: [
    // ─────────────── 1. motivation ───────────────
    {
      id: 'motivation',
      heading: { en: 'Why this matters', id: 'Kenapa ini penting' },
      body: {
        en: `If Hasbrouck (2007) is the empirical operating manual, O'Hara (1995) is the theoretical map. The textbook organizes two decades of theoretical microstructure — inventory models, information models, sequential-trade and batch-auction frameworks — into a coherent quantitative subject.

The motivating question is older than the empirical work: why does the bid-ask spread exist at all in a competitive market? Three answers compete and ultimately compose: market makers face order-processing costs, they hold risky inventory, and they face adverse selection from informed counterparties. O'Hara's textbook walks the reader through the formal models that produce each of these spread components from first principles.

This matters because empirical estimators only make sense as approximations to underlying theoretical quantities. Roll's estimator backs out spread under iid trade direction — but iid is a theoretical claim that you should be able to relax, and theory tells you how. PIN measures informed trading proportion — but the estimator only makes sense given a model of how informed trade arrives. Without the theoretical scaffolding, empirical work becomes a collection of stylized facts in search of a story.`,
        id: `Kalau Hasbrouck (2007) itu operating manual empiris, O'Hara (1995) itu peta teoritis. Textbook ini nge-organize dua dekade teoritis microstructure — inventory model, information model, sequential-trade dan batch-auction framework — jadi subject kuantitatif yang koheren.

Pertanyaan motivating-nya lebih tua dari kerja empiris: kenapa bid-ask spread eksis di market kompetitif? Tiga jawaban bersaing dan akhirnya compose: market maker hadapi order-processing cost, mereka tahan risky inventory, dan mereka hadapi adverse selection dari informed counterparty. Textbook O'Hara walk reader lewat model formal yang ngehasilin tiap komponen spread dari first principle.

Ini penting karena empirical estimator cuma make sense sebagai aproximasi ke theoretical quantity yang underlying. Roll's estimator back out spread di bawah iid trade direction — tapi iid itu klaim teoritis yang harusnya bisa di-relax, dan theory yang ngasih tau gimana. PIN ngukur informed trading proportion — tapi estimator-nya cuma make sense given model gimana informed trade arrive. Tanpa scaffold teoritis, empirical work jadi koleksi stylized fact yang nyari story.`
      }
    },

    // ─────────────── 2. intuition ───────────────
    {
      id: 'intuition',
      heading: { en: 'Intuition', id: 'Intuisi' },
      visualization: {
        id: 'order-book-ladder',
        component: 'OrderBookSim',
        title: {
          en: 'Order-book ladder: depth, the touch, and price impact',
          id: 'Order-book ladder: depth, touch, dan price impact'
        },
        description: {
          en: "The microstructure object itself: resting bid (green) and ask (red) depth stacked at discrete price levels, with the best bid/ask — the *touch* — straddling the mid (gold dashed line). Fire a **Market BUY** and watch it walk *up* the asks, eating one level at a time: you fill at progressively worse prices, so your average fill sits above the touch — that gap is **slippage**. A bigger order digs deeper and slips more (convex impact); replenish to reset. This is the mechanism behind every impact model in this domain — Kyle's λ is the slope of this walk, and CKS's depth is its inverse. A thin book (few units per level) means a steep λ; a deep book absorbs flow with little drift. The MM quoting the spread is exactly the agent who *posts* this depth in compensation for adverse selection.",
          id: "Objek microstructure-nya sendiri: resting bid (hijau) dan ask (merah) depth ditumpuk di level harga diskrit, dengan best bid/ask — si *touch* — mengapit mid (garis putus-putus emas). Tembak **Market BUY** dan lihat dia jalan *naik* lewat asks, makan satu level tiap kali: kamu fill di harga makin jelek, jadi average fill kamu di atas touch — gap itu **slippage**. Order lebih besar gali lebih dalam dan slip lebih banyak (convex impact); replenish buat reset. Ini mekanisme di balik tiap impact model di domain ini — λ Kyle itu slope dari walk ini, dan depth CKS kebalikannya. Book tipis (sedikit unit per level) berarti λ curam; book dalam serap flow dengan drift kecil. MM yang quote spread persis agent yang *posting* depth ini sebagai kompensasi adverse selection."
        },
        defaultParams: { mid: 100, tick: 0.05, levels: 8, depth: 200, qty: 300, seed: 12345 },
        height: 380,
      },
      body: {
        en: `The central concept is **information asymmetry**. Picture a market maker quoting bid and ask for an asset whose true value V is uncertain. Two types of traders arrive: *informed traders* who know V (or have a noisy signal) and *liquidity traders* who trade for reasons unrelated to V — portfolio rebalancing, tax planning, simple impatience.

The MM cannot tell who is who. But here's the asymmetry: a buy order is more likely from an informed trader who has learned V is high. A sell order is more likely from one who has learned V is low. So each order is an information signal — noisy, but informative.

A risk-neutral competitive MM responds by setting ask = E[V | buy order arrived] and bid = E[V | sell order arrived]. These conditional expectations diverge from the prior because buys and sells carry different information. The spread *is* this divergence. Even with zero inventory cost and zero operational cost, a spread emerges purely from the informational asymmetry.

This is the **Glosten-Milgrom insight**, formalized in their 1985 paper and woven through O'Hara's textbook. The richer the information asymmetry (higher fraction of informed traders, sharper informed signals), the wider the spread. As trading proceeds, the MM's posterior on V tightens and the spread can narrow — markets aggregate dispersed information through the trading mechanism itself.`,
        id: `Konsep sentralnya **information asymmetry**. Bayangin market maker quote bid sama ask buat asset yang true value V-nya uncertain. Dua tipe trader datang: *informed trader* yang tau V (atau punya noisy signal) dan *liquidity trader* yang trade karena alasan gak related sama V — rebalancing portfolio, tax planning, simply impatient.

MM gak bisa bedain siapa siapa. Tapi ini asymmetry-nya: buy order lebih mungkin dari informed trader yang udah tau V tinggi. Sell order lebih mungkin dari yang udah tau V rendah. Jadi tiap order itu information signal — noisy, tapi informative.

MM risk-neutral kompetitif respond dengan set ask = E[V | buy order datang] dan bid = E[V | sell order datang]. Conditional expectation ini divergen dari prior karena buy dan sell bawa info beda. Spread *itu* divergence ini. Bahkan dengan zero inventory cost dan zero operational cost, spread muncul murni dari information asymmetry.

Ini **Glosten-Milgrom insight**, di-formalize di paper 1985 mereka dan weave ke textbook O'Hara. Makin kaya information asymmetry-nya (fraksi informed trader lebih tinggi, signal informed lebih tajam), makin lebar spread. Seiring trading berjalan, posterior MM di V mengetat dan spread bisa nyempit — market aggregate dispersed information lewat trading mechanism itu sendiri.`
      }
    },

    // ─────────────── 3. formalization ───────────────
    {
      id: 'formalization',
      heading: { en: 'Formal model', id: 'Model formal' },
      body: {
        en: `Start with the simplest **Glosten-Milgrom setup**. The asset has unknown value $V \\in \\{\\bar{V}, \\underline{V}\\}$ with $\\bar{V} > \\underline{V}$. The MM's prior is $P(V = \\bar{V}) = \\theta_0$.

Two trader types arrive: informed (fraction $\\mu$) and uninformed (fraction $1 - \\mu$). Informed traders know $V$ exactly and trade in the value-correct direction (buy when $V = \\bar{V}$, sell when $V = \\underline{V}$). Uninformed traders buy or sell with equal probability, independent of $V$.

Compute $P(\\text{buy} \\mid V = \\bar{V})$:

$$P(\\text{buy} \\mid V = \\bar{V}) = \\mu \\cdot 1 + (1 - \\mu) \\cdot \\tfrac{1}{2} = \\tfrac{1 + \\mu}{2}$$

Similarly $P(\\text{buy} \\mid V = \\underline{V}) = (1 - \\mu)/2$.

By Bayes' rule, after observing a buy order:

$$P(V = \\bar{V} \\mid \\text{buy}) = \\frac{\\theta_0 \\cdot (1+\\mu)/2}{\\theta_0 \\cdot (1+\\mu)/2 + (1-\\theta_0)(1-\\mu)/2} = \\frac{\\theta_0(1+\\mu)}{\\theta_0(1+\\mu) + (1-\\theta_0)(1-\\mu)}$$

The ask price is the expected value conditional on a buy:

$$a = P(V = \\bar{V} \\mid \\text{buy}) \\cdot \\bar{V} + P(V = \\underline{V} \\mid \\text{buy}) \\cdot \\underline{V}$$

By symmetric reasoning, the bid is $b = E[V \\mid \\text{sell}]$, which weights $\\bar{V}$ and $\\underline{V}$ in the opposite direction.

The **spread** is then $s = a - b$. Through algebra (carried out in O'Hara Ch. 3 and Glosten-Milgrom 1985):

$$s = \\mu \\cdot (\\bar{V} - \\underline{V}) \\cdot \\frac{4 \\theta_0 (1 - \\theta_0)}{[\\theta_0(1+\\mu) + (1-\\theta_0)(1-\\mu)] \\cdot [\\theta_0(1-\\mu) + (1-\\theta_0)(1+\\mu)]}$$

Three readings of this formula:

1. **Spread is proportional to** $\\mu$ — more informed traders, wider spread. At $\\mu = 0$, $s = 0$ (no information asymmetry, no spread).
2. **Spread is proportional to** $\\bar{V} - \\underline{V}$ — the gap between possible values. Higher uncertainty about V means wider spread.
3. **Spread depends on the prior** $\\theta_0$ — maximal when $\\theta_0 = 1/2$ (MM most uncertain), shrinks toward 0 as the prior becomes very confident either way.

This is the entire spread under risk-neutral competition with zero inventory and processing costs: it is pure adverse-selection cost.

**PIN extension.** Easley-Kiefer-O'Hara-Paperman (1996) generalize this by modeling event-day arrival: with probability $\\alpha$, an information event occurs and informed trades arrive at rate $\\mu$; otherwise only uninformed buys at rate $\\epsilon_b$ and sells at rate $\\epsilon_s$. (Note the symbol reuse: here $\\mu$ is an order *arrival rate* — a Poisson intensity, like $\\epsilon_b, \\epsilon_s$ — not the informed *fraction* it denoted in the GM spread formula above.) PIN is then:

$$\\text{PIN} = \\frac{\\alpha \\mu}{\\alpha \\mu + \\epsilon_b + \\epsilon_s}$$

— the unconditional probability that an arriving order is informed. Estimable from trade data via maximum likelihood, no quote data needed.`,
        id: `Mulai dari **Glosten-Milgrom setup** paling sederhana. Asset punya unknown value $V \\in \\{\\bar{V}, \\underline{V}\\}$ dengan $\\bar{V} > \\underline{V}$. Prior MM-nya $P(V = \\bar{V}) = \\theta_0$.

Dua tipe trader datang: informed (fraksi $\\mu$) dan uninformed (fraksi $1 - \\mu$). Informed trader tau $V$ exactly dan trade di arah value-correct (buy kalau $V = \\bar{V}$, sell kalau $V = \\underline{V}$). Uninformed trader buy atau sell dengan equal probability, independent dari $V$.

Hitung $P(\\text{buy} \\mid V = \\bar{V})$:

$$P(\\text{buy} \\mid V = \\bar{V}) = \\mu \\cdot 1 + (1 - \\mu) \\cdot \\tfrac{1}{2} = \\tfrac{1 + \\mu}{2}$$

Mirip, $P(\\text{buy} \\mid V = \\underline{V}) = (1 - \\mu)/2$.

Pakai Bayes' rule, setelah observe buy order:

$$P(V = \\bar{V} \\mid \\text{buy}) = \\frac{\\theta_0(1+\\mu)}{\\theta_0(1+\\mu) + (1-\\theta_0)(1-\\mu)}$$

Ask price = expected value conditional ke buy:

$$a = P(V = \\bar{V} \\mid \\text{buy}) \\cdot \\bar{V} + P(V = \\underline{V} \\mid \\text{buy}) \\cdot \\underline{V}$$

Lewat reasoning simetris, bid = $b = E[V \\mid \\text{sell}]$, yang weight $\\bar{V}$ dan $\\underline{V}$ di arah berlawanan.

**Spread**-nya $s = a - b$. Lewat aljabar (dikerjain di O'Hara Ch. 3 dan Glosten-Milgrom 1985):

$$s = \\mu \\cdot (\\bar{V} - \\underline{V}) \\cdot \\frac{4 \\theta_0 (1 - \\theta_0)}{[\\theta_0(1+\\mu) + (1-\\theta_0)(1-\\mu)] \\cdot [\\theta_0(1-\\mu) + (1-\\theta_0)(1+\\mu)]}$$

Tiga bacaan formula ini:

1. **Spread proporsional ke** $\\mu$ — makin banyak informed trader, makin lebar spread. Di $\\mu = 0$, $s = 0$ (gak ada info asymmetry, gak ada spread).
2. **Spread proporsional ke** $\\bar{V} - \\underline{V}$ — gap antara nilai possible. Uncertainty V lebih tinggi → spread lebih lebar.
3. **Spread tergantung prior** $\\theta_0$ — maksimal pas $\\theta_0 = 1/2$ (MM paling uncertain), ngecil ke 0 pas prior jadi very confident salah satu arah.

Ini total spread di bawah risk-neutral competition dengan zero inventory dan processing cost: murni adverse-selection cost.

**PIN extension.** Easley-Kiefer-O'Hara-Paperman (1996) generalize ini dengan model event-day arrival: dengan probability $\\alpha$, information event terjadi dan informed trade datang di rate $\\mu$; kalau gak, cuma uninformed buy di rate $\\epsilon_b$ dan sell di rate $\\epsilon_s$. (Catat reuse simbol: di sini $\\mu$ itu *arrival rate* order — Poisson intensity, kayak $\\epsilon_b, \\epsilon_s$ — bukan *fraksi* informed kayak di formula spread GM di atas.) PIN-nya:

$$\\text{PIN} = \\frac{\\alpha \\mu}{\\alpha \\mu + \\epsilon_b + \\epsilon_s}$$

— unconditional probability bahwa order yang datang itu informed. Bisa di-estimate dari trade data lewat maximum likelihood, gak butuh quote data.`
      }
    },

    // ─────────────── 4. worked-example ───────────────
    {
      id: 'worked-example',
      heading: { en: 'Worked example', id: 'Contoh kerjaan' },
      body: {
        en: `Suppose $\\bar{V} = 100$, $\\underline{V} = 95$ (USD), $\\theta_0 = 0.5$ (the MM is maximally uncertain), and $\\mu = 0.2$ (20% of traders are informed).

Compute $P(\\text{buy} \\mid V = \\bar{V}) = (1 + 0.2)/2 = 0.6$.
Compute $P(\\text{buy} \\mid V = \\underline{V}) = (1 - 0.2)/2 = 0.4$.

Bayes update after observing a buy:

$$P(V = \\bar{V} \\mid \\text{buy}) = \\frac{0.5 \\cdot 0.6}{0.5 \\cdot 0.6 + 0.5 \\cdot 0.4} = \\frac{0.30}{0.50} = 0.6$$

Ask price:

$$a = 0.6 \\cdot 100 + 0.4 \\cdot 95 = 60 + 38 = 98.00$$

By symmetric reasoning, $b = 97.00$. So $s = 1.00$ (USD).

Note the structure: the MM's prior gives expected value $0.5 \\cdot 100 + 0.5 \\cdot 95 = 97.50$ (USD). The ask sits 50 cents above; the bid sits 50 cents below. Symmetric around the prior expected value when $\\theta_0 = 0.5$.

Now suppose three buys arrive in a row, no sells. After each buy, $\\theta$ updates upward. After three buys: $\\theta \\approx 0.77$. The MM's quote shifts up — both ask and bid rise. The spread also adjusts because the posterior is no longer balanced. By the time enough buys have arrived to push $\\theta$ near 1, the MM is essentially certain $V = \\bar{V}$ and the spread collapses toward zero (no information left to extract). Markets aggregate information through trading.`,
        id: `Misalkan $\\bar{V} = 100$, $\\underline{V} = 95$ (USD), $\\theta_0 = 0.5$ (MM maximally uncertain), dan $\\mu = 0.2$ (20% trader itu informed).

Hitung $P(\\text{buy} \\mid V = \\bar{V}) = (1 + 0.2)/2 = 0.6$.
Hitung $P(\\text{buy} \\mid V = \\underline{V}) = (1 - 0.2)/2 = 0.4$.

Bayes update setelah observe buy:

$$P(V = \\bar{V} \\mid \\text{buy}) = \\frac{0.5 \\cdot 0.6}{0.5 \\cdot 0.6 + 0.5 \\cdot 0.4} = \\frac{0.30}{0.50} = 0.6$$

Ask price:

$$a = 0.6 \\cdot 100 + 0.4 \\cdot 95 = 98.00$$ (USD)

Lewat reasoning simetris, $b = 97.00$ (USD). Jadi $s = 1.00$ (USD).

Perhatiin struktur-nya: prior MM kasih expected value $0.5 \\cdot 100 + 0.5 \\cdot 95 = 97.50$ (USD). Ask berada 50 cents di atas; bid 50 cents di bawah. Simetris di sekitar prior expected value pas $\\theta_0 = 0.5$.

Sekarang misalkan tiga buy datang berturut-turut, gak ada sell. Setelah tiap buy, $\\theta$ update naik. Setelah tiga buy: $\\theta \\approx 0.77$. Quote MM geser naik — ask dan bid keduanya naik. Spread juga adjust karena posterior gak lagi balanced. Pas cukup banyak buy yang masuk buat push $\\theta$ deket 1, MM essentially yakin $V = \\bar{V}$ dan spread collapse ke nol (gak ada info lagi buat di-extract). Market aggregate information lewat trading.`
      }
    },

    // ─────────────── 5. applications ───────────────
    {
      id: 'applications',
      heading: { en: 'Applications by audience', id: 'Aplikasi per audience' },
      body: {
        en: `This section walks from where the research frontier is moving, through practitioner-level deployment, down to the trading desk. Pick whichever entry point matches your current need.

### For the advanced researcher

O'Hara's theoretical scaffolding is the lens through which empirical results acquire meaning. Recent extensions: theoretical microstructure of fragmented markets (lit vs dark, primary vs ATS), limit order books as endogenous outcomes of strategic agent behavior, and the microstructure of cryptomarkets where the conventional MM/insider/noise-trader taxonomy needs revising. O'Hara herself has worked extensively on the latter — "Microstructure in the Machine Age" (*Review of Financial Studies*, 2021) explicitly addresses how high-frequency trading and machine-learning agents complicate the classical models. The agenda: build models flexible enough to admit modern market reality without losing the analytical clarity of the 1985 archetypes.

### For the quant practitioner

PIN and VPIN are direct outgrowths of the textbook's theoretical apparatus. Use cases: detecting regime shifts where adverse-selection costs spike (informed flow arriving); calibrating execution algorithms to back off when toxicity indicators flash; building flow-toxicity dashboards across an asset universe to surface anomalous regimes for monitoring. Beyond PIN/VPIN, the Bayesian-quote-update framework justifies why naive quote-following strategies underperform: when you take liquidity, you are by construction more likely to be the informed counterparty, and the market maker has already priced that in. Knowing the model lets you size your own informational edge against the implicit cost.

For cross-asset and crypto applications specifically — PIN estimation across BTC/ETH/SOL surfaces toxicity ranking that often diverges from naive volume-based liquidity ranking; small-cap altcoins frequently have high PIN despite tight quoted spreads, because the spread is being maintained by aggressive uninformed-trader subsidies; VPIN as a real-time filter for market-making strategies (back off when VPIN spikes) translates directly from equity microstructure to crypto perpetuals.

### For the retail trader

The intuition that matters: every trade you place against a market maker is a signal. The MM's quote already reflects the average information content of past order flow. If you have no edge, you are by construction the uninformed trader paying the spread — that's how the market works. The spread is not a "fee" added to your trade; it is the price of opacity. Markets with wider spreads (small caps, illiquid hours, post-news periods) are wider because the MM is more uncertain — which usually means you should be more uncertain too. If you don't have a specific reason to think you have an informational edge, the safer interpretation of a wide spread is "I shouldn't be trading this right now."`,
        id: `Section ini jalan dari mana research frontier lagi bergerak, lewat practitioner-level deployment, sampai turun ke trading desk. Pilih entry point yang match sama kebutuhan kamu sekarang.

### Untuk advanced researcher

Scaffold teoritis O'Hara adalah lens yang bikin empirical result acquire meaning. Extension recent: theoretical microstructure dari market terfragmentasi (lit vs dark, primary vs ATS), limit order book sebagai endogenous outcome dari strategic agent behavior, dan microstructure cryptomarket yang taxonomy konvensional MM/insider/noise-trader-nya perlu di-revise. O'Hara sendiri kerja banyak di yang terakhir — "Microstructure in the Machine Age" (*Review of Financial Studies*, 2021) explicitly address gimana high-frequency trading dan ML agent complicate model klasik. Agenda-nya: bangun model yang fleksibel cukup buat admit modern market reality tanpa kehilangan analytical clarity dari archetype 1985.

### Untuk quant practitioner

PIN dan VPIN itu direct outgrowth dari apparatus teoritis textbook ini. Use case: deteksi regime shift dimana adverse-selection cost spike (informed flow datang); kalibrasi execution algorithm buat back off pas toxicity indicator flash; bangun flow-toxicity dashboard lintas asset universe buat surface anomalous regime buat monitoring. Selain PIN/VPIN, framework Bayesian-quote-update justify kenapa strategi naive quote-following underperform: pas kamu take liquidity, by construction kamu lebih mungkin jadi informed counterparty, dan MM udah price itu in. Tahu model-nya bikin kamu bisa size informational edge kamu sendiri melawan implicit cost.

Buat cross-asset dan crypto specifically — PIN estimation lintas BTC/ETH/SOL surface toxicity ranking yang sering divergen dari naive volume-based liquidity ranking; small-cap altcoin sering punya PIN tinggi meskipun quoted spread ketat, karena spread-nya di-maintain oleh aggressive uninformed-trader subsidy; VPIN sebagai real-time filter buat market-making strategy (back off pas VPIN spike) translate langsung dari equity microstructure ke crypto perpetual.

### Untuk retail trader

Intuisi yang penting: tiap trade yang kamu place lawan market maker itu signal. Quote MM udah reflect average information content dari past order flow. Kalau kamu gak punya edge, by construction kamu uninformed trader yang bayar spread — gitu cara market kerja. Spread bukan "fee" yang ditambahin ke trade kamu; itu price of opacity. Market dengan spread lebih lebar (small cap, illiquid hour, post-news period) lebih lebar karena MM-nya lebih uncertain — yang biasanya berarti kamu juga harusnya lebih uncertain. Kalau gak punya alasan spesifik buat berpikir kamu punya informational edge, interpretasi yang lebih aman dari wide spread adalah "gue gak harusnya trade ini sekarang."`
      }
    },

    // ─────────────── 6. practice ───────────────
    {
      id: 'practice',
      heading: { en: 'Practice', id: 'Latihan' },
      body: {
        en: `**1.** In the Glosten-Milgrom setup with $\\bar{V} = 110$, $\\underline{V} = 100$, $\\theta_0 = 0.5$, and $\\mu = 0.1$, compute the ask, bid, and spread.

<details><summary>Answer</summary>
$P(\\text{buy} \\mid \\bar{V}) = (1+0.1)/2 = 0.55$. $P(\\text{buy} \\mid \\underline{V}) = 0.45$.
$P(\\bar{V} \\mid \\text{buy}) = (0.5 \\cdot 0.55)/(0.5 \\cdot 0.55 + 0.5 \\cdot 0.45) = 0.55$.
$a = 0.55 \\cdot 110 + 0.45 \\cdot 100 = 60.5 + 45 = 105.50$.
By symmetry, $b = 104.50$. Spread $s = 1.00$.
</details>

**2.** In the same setup, suppose three buys arrive in a row with no sells in between. Walk through how $\\theta$ updates after each buy.

<details><summary>Answer</summary>
After buy 1: $\\theta_1 = 0.55$ (from problem 1).
After buy 2: $P(\\text{buy} \\mid \\bar{V}, \\theta_1)$ has the same form but with updated prior. $\\theta_2 = (0.55 \\cdot 0.55)/(0.55 \\cdot 0.55 + 0.45 \\cdot 0.45) = 0.3025 / 0.5050 \\approx 0.599$.
After buy 3: $\\theta_3 = (0.599 \\cdot 0.55)/(0.599 \\cdot 0.55 + 0.401 \\cdot 0.45) \\approx 0.645$.
Each buy shifts the posterior toward $\\bar{V}$ but with diminishing impact — the posterior is becoming concentrated and additional signals matter less. This is the concavity property: price impact decreases per consecutive buy.
</details>

**3.** Why does the spread collapse as $\\theta \\to 1$ in the GM model? What does this mean operationally?

<details><summary>Answer</summary>
As $\\theta \\to 1$, the MM becomes essentially certain $V = \\bar{V}$. There is no more information to extract from trades — additional buys would just confirm what the MM already knows. The conditional expectations $E[V | \\text{buy}]$ and $E[V | \\text{sell}]$ both converge to $\\bar{V}$, so the spread $a - b \\to 0$. Operationally: in this idealized model, markets aggregate dispersed information through trading and the spread is a measure of how much information remains to be aggregated. In real markets, spreads don't collapse to zero (inventory costs, op costs, new uncertainty arriving) but the principle holds: spreads tighten as information uncertainty resolves.
</details>

**4.** Suppose you observe a stock where Roll's spread estimator gives 2 cents but the quoted spread is 8 cents. PIN is estimated at 0.35 (high). What does the gap suggest, and how would you use this in a trading decision?

<details><summary>Answer (sketch)</summary>
The gap suggests strong positive autocorrelation in trade direction (Roll underestimates true spread when order flow is autocorrelated). High PIN (0.35) is consistent — when informed traders are active, they trade persistently in one direction, generating exactly this autocorrelation pattern. Combined interpretation: this market currently has informed flow active. Trading implications: (a) if you're a market maker, widen quotes or step back; (b) if you're providing liquidity passively, accept that your fill probability is biased toward being the adversely-selected side; (c) if you're trying to execute a large order, slice it more aggressively to avoid telegraphing direction. The Roll-vs-quoted gap combined with PIN is essentially a toxicity indicator.
</details>`,
        id: `**1.** Di Glosten-Milgrom setup dengan $\\bar{V} = 110$, $\\underline{V} = 100$, $\\theta_0 = 0.5$, dan $\\mu = 0.1$, hitung ask, bid, dan spread.

<details><summary>Jawaban</summary>
$P(\\text{buy} \\mid \\bar{V}) = (1+0.1)/2 = 0.55$. $P(\\text{buy} \\mid \\underline{V}) = 0.45$.
$P(\\bar{V} \\mid \\text{buy}) = (0.5 \\cdot 0.55)/(0.5 \\cdot 0.55 + 0.5 \\cdot 0.45) = 0.55$.
$a = 0.55 \\cdot 110 + 0.45 \\cdot 100 = 105.50$. By symmetry, $b = 104.50$. Spread $s = 1.00$.
</details>

**2.** Di setup yang sama, misalkan tiga buy datang berturut-turut tanpa sell di antaranya. Walk through gimana $\\theta$ update setelah tiap buy.

<details><summary>Jawaban</summary>
Setelah buy 1: $\\theta_1 = 0.55$.
Setelah buy 2: $\\theta_2 = (0.55 \\cdot 0.55)/(0.55 \\cdot 0.55 + 0.45 \\cdot 0.45) \\approx 0.599$.
Setelah buy 3: $\\theta_3 \\approx 0.645$.
Tiap buy geser posterior ke arah $\\bar{V}$ tapi dengan dampak yang makin berkurang — posterior jadi makin terkonsentrasi dan signal tambahan matter lebih sedikit. Ini concavity property: price impact decrease per buy berturut-turut.
</details>

**3.** Kenapa spread collapse pas $\\theta \\to 1$ di GM model? Apa artinya secara operasional?

<details><summary>Jawaban</summary>
Pas $\\theta \\to 1$, MM essentially yakin $V = \\bar{V}$. Gak ada lagi info buat di-extract dari trade. Conditional expectation $E[V | \\text{buy}]$ dan $E[V | \\text{sell}]$ keduanya converge ke $\\bar{V}$, jadi spread $a - b \\to 0$. Secara operasional: di idealized model ini, market aggregate dispersed information lewat trading dan spread itu measure dari berapa banyak info yang masih harus di-aggregate. Di real market, spread gak collapse ke nol (inventory cost, op cost, new uncertainty datang) tapi principle-nya tetap: spread mengetat pas information uncertainty resolve.
</details>

**4.** Misalkan kamu observe stock dimana Roll's spread estimator kasih 2 cents tapi quoted spread 8 cents. PIN di-estimate 0.35 (tinggi). Apa yang gap ini suggest, dan gimana kamu pakai ini di trading decision?

<details><summary>Jawaban (sketch)</summary>
Gap-nya suggest positive autocorrelation kuat di trade direction (Roll underestimate true spread pas order flow autocorrelated). PIN tinggi (0.35) konsisten — pas informed trader aktif, mereka trade persistent di satu arah, generate exactly pattern autocorrelation ini. Interpretasi gabungan: market ini lagi punya informed flow aktif. Trading implication: (a) kalau kamu market maker, lebarin quote atau step back; (b) kalau kamu provide liquidity passive, terima bahwa fill probability kamu bias ke arah adversely-selected side; (c) kalau kamu execute order besar, slice lebih aggressive biar gak telegraph arah. Roll-vs-quoted gap dikombinasi PIN essentially toxicity indicator.
</details>`
      }
    },

    // ─────────────── 7. connections ───────────────
    {
      id: 'connections',
      heading: { en: 'Connections', id: 'Koneksi' },
      body: {
        en: `- **Prereqs**: [Hasbrouck 2007](item:hasbrouck-2007) provides the empirical companion vocabulary (efficient price, bid-ask bounce, Roll estimator) that this theoretical text builds on. Read concurrently if possible.
- **Builds toward**: [Glosten-Milgrom 1985](item:glosten-milgrom-1985) is the foundational sequential-trade paper this textbook formalizes in depth. [Kyle 1985](item:kyle-1985) is the batch-auction counterpart with strategic informed trading and continuous market clearing. [Easley-López de Prado-O'Hara 2012](item:easley-lopez-prado-vpin) extends PIN into the high-frequency era as VPIN.
- **Related cards**: 15 cards from Foundation phase cover GM Bayesian updating, the spread decomposition into the three components (order processing, inventory, adverse selection), and the PIN setup. Filter by item in the cards list below.`,
        id: `- **Prereqs**: [Hasbrouck 2007](item:hasbrouck-2007) ngasih vocabulary empiris companion (efficient price, bid-ask bounce, Roll estimator) yang text teoritis ini build on. Baca paralel kalau bisa.
- **Builds toward**: [Glosten-Milgrom 1985](item:glosten-milgrom-1985) itu paper foundational sequential-trade yang textbook ini formalize secara dalam. [Kyle 1985](item:kyle-1985) itu batch-auction counterpart dengan strategic informed trading dan continuous market clearing. [Easley-López de Prado-O'Hara 2012](item:easley-lopez-prado-vpin) extend PIN ke high-frequency era sebagai VPIN.
- **Related cards**: 15 cards dari Foundation phase cover GM Bayesian updating, spread decomposition ke tiga komponen (order processing, inventory, adverse selection), dan PIN setup. Filter by item di card list bawah.`
      }
    },

    // ─────────────── 8. sources ───────────────
    {
      id: 'sources',
      heading: { en: 'Sources', id: 'Sumber' },
      body: {
        en: `- **O'Hara, M.** (1995). *Market Microstructure Theory.* Blackwell. The primary text this content summarizes. Chapters 3-4 (information models) are the most directly relevant to the formalization here.
- **Glosten, L. R., and Milgrom, P. R.** (1985). "Bid, Ask and Transaction Prices in a Specialist Market with Heterogeneously Informed Traders." *Journal of Financial Economics*, 14(1), 71-100. The foundational sequential-trade paper.
- **Easley, D., Kiefer, N. M., O'Hara, M., and Paperman, J. B.** (1996). "Liquidity, Information, and Infrequently Traded Stocks." *Journal of Finance*, 51(4), 1405-1436. The original PIN paper.`,
        id: `- **O'Hara, M.** (1995). *Market Microstructure Theory.* Blackwell. Text utama yang konten ini summarize. Chapter 3-4 (information model) paling direct relevan ke formalization di sini.
- **Glosten, L. R., dan Milgrom, P. R.** (1985). "Bid, Ask and Transaction Prices in a Specialist Market with Heterogeneously Informed Traders." *Journal of Financial Economics*, 14(1), 71-100. Paper foundational sequential-trade.
- **Easley, D., Kiefer, N. M., O'Hara, M., dan Paperman, J. B.** (1996). "Liquidity, Information, and Infrequently Traded Stocks." *Journal of Finance*, 51(4), 1405-1436. Paper PIN original.`
      }
    },
  ],

  audio: { enabled: true },

  selfTest: [
    {
      sectionId: 'intuition',
      question: {
        en: 'In Glosten-Milgrom, even a risk-neutral market maker with zero inventory costs charges a positive bid-ask spread. Where does the spread come from in that case?',
        id: 'Di Glosten-Milgrom, market maker yang risk-neutral dan zero inventory cost pun tetep charge positive bid-ask spread. Spread-nya dari mana di kasus itu?'
      },
      prompt: {
        en: 'Before continuing, try answering:',
        id: 'Sebelum lanjut, coba jawab:'
      },
      answer: {
        en: 'Pure adverse-selection cost. Even risk-neutral and even with zero operational costs, the MM cannot distinguish informed from uninformed counterparties ex-ante. A buy order is more likely from someone who knows V is high; a sell order from someone who knows V is low. So the MM\'s conditional expected value differs depending on order direction: E[V | buy] > E[V | sell]. Setting ask = E[V | buy] and bid = E[V | sell] gives a spread = E[V | buy] − E[V | sell] > 0. The uninformed pay this spread to subsidize the MM\'s losses against the informed.',
        id: 'Murni adverse-selection cost. Bahkan risk-neutral dan bahkan dengan zero operational cost, MM gak bisa bedain informed dari uninformed counterparty ex-ante. Buy order lebih mungkin dari yang tau V tinggi; sell order dari yang tau V rendah. Jadi conditional expected value MM beda tergantung arah order: E[V | buy] > E[V | sell]. Set ask = E[V | buy] dan bid = E[V | sell] ngasih spread = E[V | buy] − E[V | sell] > 0. Uninformed bayar spread ini buat subsidi loss MM ke informed.'
      }
    },
    {
      sectionId: 'formalization',
      question: {
        en: 'In the GM spread formula, three factors determine spread magnitude: μ (fraction of informed traders), V̄ − V̲ (uncertainty range), and θ₀ (prior on V). How does the spread vary with each, and why is θ₀ maximizing at 1/2?',
        id: 'Di formula spread GM, ada tiga faktor yang ngatur magnitude spread: μ (fraksi informed trader), V̄ − V̲ (range uncertainty), dan θ₀ (prior on V). Spread berubah gimana sama tiap faktor, dan kenapa θ₀ maximizing di 1/2?'
      },
      prompt: {
        en: 'Before continuing, try answering:',
        id: 'Sebelum lanjut, coba jawab:'
      },
      answer: {
        en: 'Spread is increasing in μ — more informed traders means each trade carries more information signal, larger Bayesian update, wider spread. Spread is increasing in V̄ − V̲ — bigger possible value gap means each unit of information has bigger price implication. Spread peaks at θ₀ = 1/2 because that\'s where the MM is maximally uncertain about V; the information value of each trade is highest there. As θ₀ → 0 or θ₀ → 1, the MM is already nearly certain of V (or that V is the other state), so additional trade signals are less informative — Bayesian updates are smaller, spread tightens. This is also why spreads tend to be tight in well-known stocks (low information uncertainty, prior is tight) and wider in new IPOs or news events (high uncertainty, prior is closer to 1/2).',
        id: 'Spread naik di μ — informed trader lebih banyak berarti tiap trade bawa signal info lebih besar, Bayesian update lebih besar, spread lebih lebar. Spread naik di V̄ − V̲ — gap nilai possible lebih besar berarti tiap unit info implikasi harga lebih besar. Spread puncaknya di θ₀ = 1/2 karena disitu MM paling uncertain tentang V; nilai informasi tiap trade tertinggi disitu. Pas θ₀ → 0 atau θ₀ → 1, MM udah hampir yakin V (atau yakin V state yang lain), jadi signal trade tambahan kurang informatif — Bayesian update lebih kecil, spread mengetat. Ini juga kenapa spread cenderung ketat di stock terkenal (info uncertainty rendah, prior ketat) dan lebih lebar di IPO baru atau news event (uncertainty tinggi, prior deket 1/2).'
      }
    },
    {
      sectionId: 'worked-example',
      question: {
        en: 'In the GM walkthrough (μ = 0.2), after three consecutive buys the posterior θ rises from 0.5 to ~0.77. Why does the update slow down with each successive buy (concavity of price impact)?',
        id: 'Di GM walkthrough (μ = 0.2), setelah tiga buy berturut-turut posterior θ naik dari 0.5 ke ~0.77. Kenapa update-nya melambat tiap buy berikutnya (concavity of price impact)?'
      },
      prompt: {
        en: 'Before continuing, try answering:',
        id: 'Sebelum lanjut, coba jawab:'
      },
      answer: {
        en: 'Each buy is Bayesian evidence for V = V̄. With μ = 0.2: after the first buy, posterior moves from 0.5 to 0.6. After the second, from 0.6 to ~0.692 — a smaller jump; the third reaches ~0.771, smaller still. The mechanism: the posterior is bounded between 0 and 1, and each update by Bayes\' rule has diminishing marginal effect as the posterior concentrates. Mathematically, the log-odds form makes this clear: each buy adds a constant log-likelihood ratio log(P(buy|V̄)/P(buy|V̲)) to log-odds, but the resulting probability change shrinks as we move toward the boundaries. Operationally: in real markets this produces concave price impact curves — the first informed trade in a series moves price the most, subsequent trades less so.',
        id: 'Tiap buy itu Bayesian evidence buat V = V̄. Dengan μ = 0.2: setelah buy pertama, posterior gerak dari 0.5 ke 0.6. Setelah kedua, dari 0.6 ke ~0.692 — lompatan lebih kecil; yang ketiga capai ~0.771, lebih kecil lagi. Mekanisme: posterior bounded antara 0 dan 1, dan tiap update by Bayes\' rule punya diminishing marginal effect seiring posterior terkonsentrasi. Secara matematis, log-odds form bikin ini jelas: tiap buy nambah constant log-likelihood ratio log(P(buy|V̄)/P(buy|V̲)) ke log-odds, tapi perubahan probability yang dihasilkan ngecil pas kita gerak ke boundary. Operasional: di real market ini ngehasilin concave price impact curve — informed trade pertama di series gerak price paling banyak, trade berikutnya lebih sedikit.'
      }
    },
    {
      sectionId: 'applications',
      question: {
        en: 'You\'re building a real-time toxicity dashboard combining PIN/VPIN with Roll-vs-quoted-spread gap. What signal pattern would lead you to back off from passive market-making, and how would you size that response?',
        id: 'Kamu lagi bangun real-time toxicity dashboard yang gabungin PIN/VPIN sama Roll-vs-quoted-spread gap. Pattern signal apa yang bikin kamu back off dari passive market-making, dan gimana kamu size response-nya?'
      },
      prompt: {
        en: 'Before continuing, try answering:',
        id: 'Sebelum lanjut, coba jawab:'
      },
      answer: {
        en: 'Combine three indicators: (1) VPIN above its 80th percentile for this asset+window, (2) Roll-vs-quoted-spread gap above 90th percentile (Roll significantly under), (3) recent trade-size distribution skewed toward large orders. All three flashing simultaneously is the strongest "informed regime" signal — informed flow is active. Response sizing: start with a continuous response, not binary cutoff. Multiply your default quoted spread by a factor f(toxicity) that goes from 1.0 at baseline to ~3.0 at extreme regime. Reduce quoted size by similar factor. Below severe threshold, you\'re still in the market but pricing the toxicity in. Above some hard threshold (e.g., 99th percentile composite), step out entirely for a cooldown window (say 5 minutes), then re-evaluate. The goal: avoid being the systematically-wrong counterparty during informed bursts, but don\'t lose the steady-state spread capture that pays the bills.',
        id: 'Gabungin tiga indikator: (1) VPIN di atas 80th percentile-nya buat asset+window ini, (2) Roll-vs-quoted-spread gap di atas 90th percentile (Roll significantly under), (3) recent trade-size distribution skew ke order besar. Tiga-tiganya nyala bareng itu signal "informed regime" paling kuat — informed flow lagi aktif. Sizing response: mulai dengan continuous response, bukan binary cutoff. Kali default quoted spread kamu sama factor f(toxicity) yang gerak dari 1.0 di baseline ke ~3.0 di extreme regime. Kurangin quoted size sama factor mirip. Di bawah severe threshold, kamu masih di market tapi price toxicity-nya in. Di atas hard threshold (misalnya 99th percentile composite), step out total buat cooldown window (misalnya 5 menit), terus re-evaluate. Tujuannya: hindari jadi systematically-wrong counterparty selama informed burst, tapi jangan kehilangan steady-state spread capture yang bayar bills.'
      }
    },
  ],
};
