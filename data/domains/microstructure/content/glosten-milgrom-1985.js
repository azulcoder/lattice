export const CONTENT = {
  itemId: 'glosten-milgrom-1985',
  estimatedReadMinutes: 41,

  author: {
    fullName: { en: 'Lawrence R. Glosten & Paul R. Milgrom', id: 'Lawrence R. Glosten & Paul R. Milgrom' },
    affiliation: {
      en: 'Glosten: S. Sloan Colt Professor of Banking and International Finance, Columbia Business School (joined 1989; now Emeritus). Milgrom: Shirley R. and Leonard W. Ely Jr. Professor of Humanities and Sciences, Department of Economics, Stanford University (since 1987). Nobel laureate in Economic Sciences 2020 (with Robert Wilson) for auction theory.',
      id: 'Glosten: S. Sloan Colt Professor of Banking and International Finance, Columbia Business School (join 1989; sekarang Emeritus). Milgrom: Shirley R. and Leonard W. Ely Jr. Professor of Humanities and Sciences, Department of Economics, Stanford University (sejak 1987). Nobel laureate Economic Sciences 2020 (sama Robert Wilson) buat auction theory.'
    },
    tagline: {
      en: 'The two-author paper that gave microstructure its adverse-selection foundation — spreads emerge from informed-trading risk, not just inventory or order-processing cost.',
      id: 'Paper dua-author yang ngasih microstructure foundation adverse-selection-nya — spread muncul dari informed-trading risk, bukan cuma inventory atau order-processing cost.'
    },
    bio: {
      en: `Lawrence Glosten received his PhD in Managerial Economics and Decision Sciences from Northwestern Kellogg in 1980 and joined Columbia Business School in 1989 after positions at Northwestern and Princeton. He has served as a director of the NASD's economic advisory board and the FINRA economic advisory committee. His work spans the theoretical decomposition of bid-ask spreads, limit-order-book microstructure, and the design of trading mechanisms.

Paul Milgrom is one of the most influential economists of the past forty years — Nobel laureate 2020 (jointly with Robert Wilson) for "improvements to auction theory and inventions of new auction formats." He took his PhD at Stanford in 1979 under Robert Wilson, joined Stanford economics in 1987 after time at Northwestern Kellogg (where he overlapped with Glosten and co-authored this 1985 paper) and Yale. He is best known outside microstructure for designing the FCC spectrum auctions in the 1990s and the 2017 Incentive Auction that reallocated broadcast spectrum to mobile use. Within microstructure, this single 1985 collaboration with Glosten is among his most-cited works — the no-trade theorem (Milgrom & Stokey 1982) is another foundational contribution that often gets paired with the 1985 paper.

The 1985 paper itself was the product of two early-career theorists at Kellogg, both of whom went on to broader and more famous bodies of work — but the paper's influence on microstructure has only grown. Forty years later, every textbook treatment of adverse selection in market making starts from the Glosten-Milgrom model.`,
      id: `Lawrence Glosten dapet PhD Managerial Economics and Decision Sciences dari Northwestern Kellogg tahun 1980 dan join Columbia Business School tahun 1989 setelah posisi di Northwestern dan Princeton. Dia udah jadi director di NASD economic advisory board dan FINRA economic advisory committee. Kerja dia span dekomposisi teoritis bid-ask spread, limit-order-book microstructure, dan design trading mechanism.

Paul Milgrom salah satu ekonom paling influential 40 tahun terakhir — Nobel laureate 2020 (bareng Robert Wilson) buat "improvements to auction theory and inventions of new auction formats." Dia ambil PhD di Stanford tahun 1979 di bawah Robert Wilson, join Stanford economics tahun 1987 setelah waktu di Northwestern Kellogg (di mana dia overlap sama Glosten dan co-author paper 1985 ini) dan Yale. Di luar microstructure dia paling dikenal karena design FCC spectrum auctions di 1990an dan Incentive Auction 2017 yang reallocate broadcast spectrum ke mobile use. Dalam microstructure, single collaboration 1985 ini sama Glosten itu salah satu yang paling sering disitir — no-trade theorem (Milgrom & Stokey 1982) kontribusi foundational lain yang sering di-pair sama paper 1985 ini.

Paper 1985 itu sendiri produk dari dua teoris early-career di Kellogg, yang dua-duanya kemudian punya body of work yang lebih luas dan lebih terkenal — tapi influence paper ini di microstructure malah cuma makin gede. Empat puluh tahun kemudian, setiap textbook treatment of adverse selection in market making mulai dari Glosten-Milgrom model.`
    },
    focus: {
      en: `Sequential-trade model with one informed trader (knows fundamental value V), one uninformed (liquidity) trader, and a competitive risk-neutral market maker. Bid and ask quotes are conditional expectations of V given the type of order arriving. Spread arises *purely* from adverse-selection cost — the MM loses to informed traders on average but recoups via the spread paid by uninformed traders. Methodological commitments: Bayesian conditioning as the central inference mechanism, competitive zero-profit market making as the equilibrium discipline, sequential arrival rather than batch as in Kyle. The paper's title belies its theoretical depth — it's not just about specialist markets, it's about the informational role of trading itself.`,
      id: `Sequential-trade model dengan satu informed trader (tau fundamental value V), satu uninformed (liquidity) trader, dan competitive risk-neutral market maker. Bid dan ask quote itu conditional expectation V given tipe order yang dateng. Spread muncul *murni* dari adverse-selection cost — MM rugi ke informed trader on average tapi balik modal lewat spread yang dibayar uninformed trader. Komitmen metodologis: Bayesian conditioning sebagai mekanisme inferensi sentral, competitive zero-profit market making sebagai disiplin ekuilibrium, sequential arrival daripada batch kayak di Kyle. Title paper-nya menipu — bukan cuma tentang specialist market, tapi tentang peran informational dari trading itu sendiri.`
    },
    intellectualLineage: {
      en: `Direct lineage: Akerlof's 1970 "Market for Lemons" applied to financial markets. Akerlof showed that in markets with asymmetric information about quality, the high-quality goods leave the market and only lemons trade. Glosten-Milgrom is the financial-market analog: the market maker is the buyer of unknown quality (he doesn't know if you're informed), and in extreme cases (high information asymmetry) the market shuts down — no quotes can break even. The paper sits between Akerlof's static setup and Kyle's strategic-trader setup. Where Kyle has one big informed trade hidden in noise, Glosten-Milgrom has many small trades where each individual reveals partial information through Bayesian updating. Both models are 1985 and both are foundational; they are pedagogically complementary rather than competing.`,
      id: `Lineage langsung: "Market for Lemons" Akerlof 1970 applied ke financial market. Akerlof nunjukin bahwa di market dengan asymmetric information tentang quality, barang quality tinggi keluar market dan cuma lemon yang trade. Glosten-Milgrom itu analog financial-market-nya: market maker itu buyer of unknown quality (dia gak tau kamu informed atau enggak), dan di extreme case (information asymmetry tinggi) market-nya shut down — no quote bisa break even. Paper ini berada di antara setup statis Akerlof dan setup strategic-trader Kyle. Di mana Kyle punya satu informed trade gede yang ditutup noise, Glosten-Milgrom punya banyak trade kecil yang masing-masing reveal partial info via Bayesian update. Kedua model 1985 dan dua-duanya foundational; mereka komplementer secara pedagogis, bukan competing.`
    },
    keyCollaborators: {
      en: `**Each other in this paper** — both at Northwestern Kellogg in the early 1980s. Notable Glosten work outside this paper: Glosten & Harris 1988 (econometric decomposition of spread into adverse selection + transitory components, the empirical companion to the 1985 theory), Glosten 1994 (electronic limit-order book microstructure as a Walrasian auction). Notable Milgrom work outside this paper: Milgrom & Stokey 1982 (no-trade theorem — if all traders are rational and have common prior, no trade should occur on information alone), Milgrom-Weber 1982 (auction theory revelation principle), and the post-1990 auction design work that won the Nobel. The 1985 collaboration sits at the intersection of Glosten's microstructure interests and Milgrom's information-theoretic mechanism design — neither author returned to dedicated microstructure work as intensively afterwards.`,
      id: `**Satu sama lain di paper ini** — dua-duanya di Northwestern Kellogg early 1980s. Kerja Glosten notable di luar paper ini: Glosten & Harris 1988 (dekomposisi ekonometrik spread jadi komponen adverse selection + transitory, companion empiris dari teori 1985), Glosten 1994 (electronic limit-order book microstructure sebagai Walrasian auction). Kerja Milgrom notable di luar paper ini: Milgrom & Stokey 1982 (no-trade theorem — kalau semua trader rational dan common prior, no trade harusnya occur on information alone), Milgrom-Weber 1982 (auction theory revelation principle), dan kerja auction design post-1990 yang menang Nobel. Collaboration 1985 itu duduk di intersection antara minat microstructure Glosten dan information-theoretic mechanism design Milgrom — gak ada author yang balik ke kerja microstructure intensif kayak gitu lagi setelahnya.`
    },
    legacy: {
      en: `The Glosten-Milgrom framework supplies the conceptual vocabulary that every empirical spread decomposition uses today. **Adverse selection cost** vs **order processing cost** vs **inventory cost** — those three categories trace back to this paper and its 1988 econometric companion. Easley-O'Hara 1992 extended Glosten-Milgrom to the explicit information-event-probability framework that became PIN (probability of informed trading). Easley et al. 2012 then extended that to VPIN (volume-synchronized PIN), used in flash-crash analysis. Modern HFT microstructure inherits the Bayesian-MM framing wholesale: every reference to "informed flow" or "toxicity" or "adverse selection" in execution algorithms is — at root — a Glosten-Milgrom concept. The paper's enduring lesson: in financial markets, spreads are *information rents*, not just intermediation fees.`,
      id: `Framework Glosten-Milgrom nge-supply vocabulary konseptual yang dipake setiap empirical spread decomposition sekarang. **Adverse selection cost** vs **order processing cost** vs **inventory cost** — ketiga kategori itu trace balik ke paper ini dan companion ekonometrik-nya tahun 1988. Easley-O'Hara 1992 extend Glosten-Milgrom ke framework probabilitas information-event eksplisit yang jadi PIN (probability of informed trading). Easley et al. 2012 terus extend itu ke VPIN (volume-synchronized PIN), dipake di analisis flash-crash. Modern HFT microstructure inherit Bayesian-MM framing wholesale: setiap reference ke "informed flow" atau "toxicity" atau "adverse selection" di execution algorithm — di akar — itu konsep Glosten-Milgrom. Pelajaran abadi paper ini: di financial market, spread itu *information rents*, bukan cuma intermediation fee.`
    },
    keyWorks: [
      { year: 1985, title: 'Bid, Ask and Transaction Prices in a Specialist Market with Heterogeneously Informed Traders (this item)', venue: 'Journal of Financial Economics' },
      { year: 1988, title: 'Estimating the Components of the Bid/Ask Spread (Glosten with Harris)', venue: 'Journal of Financial Economics' },
      { year: 1982, title: 'No-Trade Theorem (Milgrom with Stokey)', venue: 'Journal of Economic Theory' },
      { year: 1994, title: 'Is the Electronic Open Limit Order Book Inevitable? (Glosten solo)', venue: 'Journal of Finance' },
    ],
  },

  sections: [
    // ─────────────── 1. motivation ───────────────
    {
      id: 'motivation',
      heading: { en: 'Why this matters', id: 'Kenapa ini penting' },
      body: {
        en: `Imagine you are a market maker. Someone walks up to your quote and buys 100 shares at the ask. A second person, immediately after, walks up and sells 100 at the bid. The two trades net zero in inventory terms — yet you have not made zero money on them. Why?

The Glosten-Milgrom answer is that the *information content* of the two trades is not symmetric to you. If the buyer happens to know something you don't — say, an earnings beat that hasn't yet been priced in — your sale was a losing trade. The same is true symmetrically for the sell. Even if the next trade is "random" in some sense, the act of trading carries information. A market maker who ignores this loses systematically to informed counterparts.

The Roll (1984) model attributed the bid-ask spread entirely to a non-informational source: trade direction alternates randomly, and the spread mechanically induces negative serial correlation in transaction prices. That model was tractable and yielded a clean estimator, but it treated the spread as a fee for nothing — pure compensation for the bid-ask "bounce" with no information content. Empirical work in the early 1980s consistently rejected the pure-Roll model: spreads were larger than the model predicted given observed price volatility.

Glosten and Milgrom (1985) supplied the missing piece. They built a model in which:
- Some traders know the fundamental value $V$ (informed traders)
- Others don't, and trade for liquidity reasons (uninformed traders)
- The market maker doesn't know who is informed
- The MM quotes prices that are conditional expectations: ask = $E[V \\mid \\text{buy order}]$, bid = $E[V \\mid \\text{sell order}]$
- The spread $\\text{ask} - \\text{bid}$ is therefore the *information rent* the MM charges to break even against informed traders

This single insight reorganized the field. Spread decomposition became a research industry. Modern PIN, VPIN, market-impact models — all trace back to this paper. For a practitioner today, the operational consequence is direct: if you are providing liquidity, you must charge a spread sufficient to compensate for the probability that your counterpart is informed. If you are taking liquidity, you should think about whether the spread you are paying is information rent or pure execution cost. The two have completely different optimization implications.`,
        id: `Bayangin kamu market maker. Seseorang dateng ke quote kamu dan beli 100 share di ask. Orang kedua, langsung setelahnya, dateng dan jual 100 di bid. Dua trade itu net zero secara inventory — tapi kamu gak break even di uangnya. Kenapa?

Jawaban Glosten-Milgrom: *information content* dari dua trade itu gak simetris ke kamu. Kalau si buyer kebetulan tau sesuatu yang kamu gak tau — misalnya earnings beat yang belum priced in — penjualan kamu itu losing trade. Hal yang sama berlaku simetris buat sell side. Bahkan kalau trade berikutnya "random" dalam suatu pengertian, tindakan trading itu sendiri bawa information. Market maker yang ignore ini bakal rugi sistematis ke counterpart yang informed.

Model Roll (1984) atribusi seluruh bid-ask spread ke source non-informational: trade direction alternate random, dan spread mekanikal nge-induce negative serial correlation di transaction price. Model itu tractable dan ngasilin estimator yang bersih, tapi dia treat spread sebagai fee buat nothing — pure compensation buat bid-ask "bounce" tanpa information content. Empirical work early 1980s konsisten reject pure-Roll model: spread lebih gede dari yang model prediksi given observed price volatility.

Glosten dan Milgrom (1985) nge-supply missing piece-nya. Mereka build model di mana:
- Beberapa trader tau fundamental value $V$ (informed trader)
- Yang lain enggak, dan trade buat alasan liquidity (uninformed trader)
- Market maker gak tau siapa yang informed
- MM quote price yang itu conditional expectation: ask = $E[V \\mid \\text{buy order}]$, bid = $E[V \\mid \\text{sell order}]$
- Spread $\\text{ask} - \\text{bid}$ itu jadinya *information rent* yang MM charge buat break even melawan informed trader

Single insight ini reorganize field-nya. Spread decomposition jadi research industry. Modern PIN, VPIN, market-impact model — semua trace balik ke paper ini. Buat praktisi sekarang, konsekuensi operationalnya langsung: kalau kamu provide liquidity, kamu harus charge spread cukup buat compensate probability counterpart kamu informed. Kalau kamu take liquidity, kamu harus mikir apakah spread yang kamu bayar itu information rent atau pure execution cost. Dua-duanya punya implikasi optimisasi yang completely different.`
      }
    },

    // ─────────────── 2. intuition ───────────────
    {
      id: 'intuition',
      heading: { en: 'Intuition', id: 'Intuisi' },
      body: {
        en: `Picture the market maker's state of mind. Before any trades, she has a prior belief about the fundamental value: a probability distribution over $V$. To keep it concrete, assume $V$ takes one of two values, $V_H$ (high) or $V_L$ (low), with prior probability $\\pi$ that $V = V_H$. The MM's prior estimate of $V$ is $\\pi V_H + (1 - \\pi) V_L$.

Now a trade arrives. The buyer wants to buy at the ask. Who could this buyer be?

Case 1: an *informed* trader. She knows $V$. If $V = V_H$, she buys (because $V_H$ exceeds the ask if the MM hasn't already set a wide enough spread). If $V = V_L$, she sells (and would not have shown up at the ask). So conditional on observing a buy, an informed trader is much more likely to be present if $V = V_H$ than if $V = V_L$.

Case 2: an *uninformed* (liquidity) trader. She trades for reasons unrelated to $V$ — portfolio rebalancing, retirement withdrawal, anything. Conditional on her arriving, she is equally likely to buy or sell regardless of the true value $V$.

Suppose the MM faces a mix: fraction $\\alpha$ of traders are informed, fraction $1 - \\alpha$ are uninformed. Then *conditional on observing a buy*, the MM updates her belief via Bayes:

$$P(V = V_H \\mid \\text{buy}) = \\frac{P(\\text{buy} \\mid V_H) \\cdot \\pi}{P(\\text{buy})}$$

Since informed traders always buy when $V = V_H$ and uninformed traders buy half the time regardless:
- $P(\\text{buy} \\mid V_H) = \\alpha \\cdot 1 + (1 - \\alpha) \\cdot \\tfrac{1}{2}$
- $P(\\text{buy} \\mid V_L) = \\alpha \\cdot 0 + (1 - \\alpha) \\cdot \\tfrac{1}{2}$

The posterior $P(V = V_H \\mid \\text{buy})$ is strictly larger than the prior $\\pi$ whenever $\\alpha > 0$. *Trading itself transmits information.*

The MM's optimal ask price is therefore $\\text{ask} = E[V \\mid \\text{buy}] = P(V_H \\mid \\text{buy}) \\cdot V_H + P(V_L \\mid \\text{buy}) \\cdot V_L$. By the same argument, $\\text{bid} = E[V \\mid \\text{sell}] < $ prior $ < \\text{ask}$.

**The spread is the gap between two conditional expectations.** It is what the MM expects to lose to informed traders, scaled by the relative frequency of informed and uninformed. When $\\alpha \\to 0$ (no information asymmetry), the spread collapses. When $\\alpha \\to 1$ (everyone is informed), every uninformed trader is selected against by the informed; the market collapses — no quote can break even. This is the financial-market analog of Akerlof's lemons.

A second key prediction: **prices converge to fundamental value via trading.** Each trade is a noisy signal of $V$. The posterior $P(V_H \\mid \\text{history of trades})$ converges to $0$ or $1$ as the trade count grows, and the spread converges to zero. Trading itself is the mechanism of price discovery — not an obstacle to it, not noise around it, but the literal mechanism by which information enters prices. This is the deepest conceptual contribution of the paper.`,
        id: `Bayangin state of mind market maker. Sebelum ada trade, dia punya prior belief tentang fundamental value: distribusi probabilitas over $V$. Biar konkret, assume $V$ ambil salah satu dari dua nilai, $V_H$ (high) atau $V_L$ (low), dengan prior probabilitas $\\pi$ bahwa $V = V_H$. Estimate prior MM untuk $V$ itu $\\pi V_H + (1 - \\pi) V_L$.

Sekarang ada trade dateng. Buyer mau beli di ask. Siapa buyer ini?

Case 1: trader *informed*. Dia tau $V$. Kalau $V = V_H$, dia beli (karena $V_H$ lebih tinggi dari ask kalau MM belum set spread cukup wide). Kalau $V = V_L$, dia jual (dan gak akan muncul di ask). Jadi conditional on observing buy, informed trader much more likely present kalau $V = V_H$ daripada $V = V_L$.

Case 2: trader *uninformed* (liquidity). Dia trade buat alasan yang gak related sama $V$ — portfolio rebalancing, retirement withdrawal, apapun. Conditional on dia dateng, dia equally likely buy atau sell regardless of true value $V$.

Suppose MM hadapi mix: fraction $\\alpha$ trader itu informed, fraction $1 - \\alpha$ itu uninformed. Maka *conditional on observing buy*, MM update belief lewat Bayes:

$$P(V = V_H \\mid \\text{buy}) = \\frac{P(\\text{buy} \\mid V_H) \\cdot \\pi}{P(\\text{buy})}$$

Karena informed trader selalu beli pas $V = V_H$ dan uninformed trader beli setengah waktu regardless:
- $P(\\text{buy} \\mid V_H) = \\alpha \\cdot 1 + (1 - \\alpha) \\cdot \\tfrac{1}{2}$
- $P(\\text{buy} \\mid V_L) = \\alpha \\cdot 0 + (1 - \\alpha) \\cdot \\tfrac{1}{2}$

Posterior $P(V = V_H \\mid \\text{buy})$ strictly lebih gede dari prior $\\pi$ kalau $\\alpha > 0$. *Trading itu sendiri transmit information.*

Optimal ask price MM jadinya $\\text{ask} = E[V \\mid \\text{buy}] = P(V_H \\mid \\text{buy}) \\cdot V_H + P(V_L \\mid \\text{buy}) \\cdot V_L$. Sama argumen, $\\text{bid} = E[V \\mid \\text{sell}] < $ prior $ < \\text{ask}$.

**Spread itu gap antara dua conditional expectation.** Itu apa yang MM expect rugi ke informed trader, scaled sama frequency relatif informed dan uninformed. Pas $\\alpha \\to 0$ (no information asymmetry), spread collapse. Pas $\\alpha \\to 1$ (semuanya informed), setiap uninformed trader di-selected against sama informed; market collapse — gak ada quote yang bisa break even. Ini financial-market analog dari lemon-nya Akerlof.

Prediksi kunci kedua: **price converge ke fundamental value via trading.** Setiap trade itu noisy signal of $V$. Posterior $P(V_H \\mid \\text{history of trades})$ converge ke $0$ atau $1$ pas trade count grow, dan spread converge ke nol. Trading itu sendiri mekanisme price discovery — bukan obstacle, bukan noise di sekitarnya, tapi literally mekanisme via mana information masuk ke price. Ini kontribusi konseptual paling dalam dari paper ini.`
      }
    },

    // ─────────────── 3. formalization ───────────────
    {
      id: 'formalization',
      heading: { en: 'Formal model', id: 'Model formal' },
      body: {
        en: `**Setup.** A single asset with fundamental value $V$, which takes value $V_H$ with probability $\\pi_0$ and $V_L$ with probability $1 - \\pi_0$ (with $V_H > V_L$). Trades arrive sequentially, one at a time. Before each trade, a trader is drawn from the population: with probability $\\alpha$ the trader is *informed* (knows $V$); with probability $1 - \\alpha$ the trader is *uninformed* and trades 50/50 in either direction regardless of $V$. The market maker is risk-neutral, competitive (zero expected profit per trade), and faces the trade.

*Notation note: this module writes the informed-trader fraction as $\\alpha$ and the MM's posterior expected value as $\\mu_t$. The project's notation table and the O'Hara module use $\\mu$ for the informed fraction instead; here $\\mu_t$ always denotes the value expectation $\\pi_t V_H + (1-\\pi_t)V_L$, never a fraction.*

Let $\\pi_t = P(V = V_H \\mid \\mathcal{F}_t)$ denote the MM's posterior at time $t$, given the trade history $\\mathcal{F}_t$. Initially $\\pi_0 \\in (0, 1)$.

**Quote derivation.** The MM must quote prices *before* observing the trade direction. The ask is the price at which she breaks even *conditional on the trade being a buy*. By Bayes' rule:

$$P(\\text{buy} \\mid V_H) = \\alpha + \\tfrac{1}{2}(1 - \\alpha) = \\tfrac{1 + \\alpha}{2}$$
$$P(\\text{buy} \\mid V_L) = 0 + \\tfrac{1}{2}(1 - \\alpha) = \\tfrac{1 - \\alpha}{2}$$
$$P(\\text{buy}) = \\pi_t \\cdot \\tfrac{1 + \\alpha}{2} + (1 - \\pi_t) \\cdot \\tfrac{1 - \\alpha}{2}$$

The posterior given a buy:

$$P(V_H \\mid \\text{buy}) = \\frac{\\pi_t \\cdot \\tfrac{1 + \\alpha}{2}}{\\pi_t \\cdot \\tfrac{1 + \\alpha}{2} + (1 - \\pi_t) \\cdot \\tfrac{1 - \\alpha}{2}} = \\frac{\\pi_t (1 + \\alpha)}{\\pi_t (1 + \\alpha) + (1 - \\pi_t)(1 - \\alpha)}$$

The ask, by zero-profit competition:

$$\\boxed{a_t = E[V \\mid \\text{buy at } t] = P(V_H \\mid \\text{buy}) \\cdot V_H + (1 - P(V_H \\mid \\text{buy})) \\cdot V_L}$$

Similarly the bid is the expectation conditional on a sell:

$$\\boxed{b_t = E[V \\mid \\text{sell at } t] = P(V_H \\mid \\text{sell}) \\cdot V_H + (1 - P(V_H \\mid \\text{sell})) \\cdot V_L}$$

where $P(V_H \\mid \\text{sell})$ is symmetric.

**The spread.** Let $\\mu_t = \\pi_t V_H + (1 - \\pi_t) V_L$ be the prior expectation. After some algebra:

$$\\boxed{s_t = a_t - b_t = \\alpha \\cdot (V_H - V_L) \\cdot \\frac{4 \\pi_t (1 - \\pi_t)}{[\\pi_t (1 + \\alpha) + (1 - \\pi_t)(1 - \\alpha)][(1 - \\pi_t)(1 + \\alpha) + \\pi_t (1 - \\alpha)]}}$$

The spread scales linearly with $\\alpha$ (informed-trader fraction) and with $V_H - V_L$ (fundamental uncertainty). It is maximal when $\\pi_t = \\tfrac{1}{2}$ (maximum uncertainty about $V$) and vanishes when $\\pi_t \\to 0$ or $\\pi_t \\to 1$ (MM is certain about $V$, no adverse-selection risk).

**Belief update after the trade.** Once the MM observes the trade (buy or sell), the posterior becomes the prior for the next round:

$$\\pi_{t+1} = \\begin{cases} P(V_H \\mid \\text{buy at } t) & \\text{if trade was a buy} \\\\ P(V_H \\mid \\text{sell at } t) & \\text{if trade was a sell} \\end{cases}$$

**Martingale property.** The MM's posterior expected value $\\mu_t = \\pi_t V_H + (1 - \\pi_t) V_L$ forms a martingale: $E[\\mu_{t+1} \\mid \\mathcal{F}_t] = \\mu_t$. The MM cannot predict the direction of the next move in her valuation from observed trades — it impounds all available information. (The quote midpoint $\\tfrac{a_t + b_t}{2}$ coincides with $\\mu_t$ only at $\\pi_t = \\tfrac{1}{2}$, by symmetry; away from that point the midpoint departs slightly from $\\mu_t$, so it is $\\mu_t$ — not the raw midpoint — that is the martingale.)

**Convergence.** As the number of trades grows, $\\pi_t$ converges almost surely to $0$ or $1$ — i.e., to the true value of the indicator $\\mathbf{1}[V = V_H]$. The spread $s_t$ correspondingly converges to zero. Trading transmits information into prices until prices fully reveal the truth.

**Market breakdown (Akerlof analog).** If $\\alpha = 1$ — every trader is informed — the MM faces certain loss on any trade. To break even on a buy requires $a_t = V_H$, on a sell requires $b_t = V_L$, so the spread equals the entire fundamental uncertainty $V_H - V_L$. With wider quotes the informed trader simply doesn't trade. The market shuts down. Adverse selection sufficient to halt trade entirely is the financial-market expression of Akerlof's lemons collapse.`,
        id: `**Setup.** Single asset dengan fundamental value $V$, yang ambil nilai $V_H$ dengan probabilitas $\\pi_0$ dan $V_L$ dengan probabilitas $1 - \\pi_0$ (dengan $V_H > V_L$). Trade dateng sekuensial, satu per satu. Sebelum tiap trade, satu trader di-draw dari populasi: dengan probabilitas $\\alpha$ trader-nya *informed* (tau $V$); dengan probabilitas $1 - \\alpha$ trader-nya *uninformed* dan trade 50/50 ke direction manapun regardless of $V$. Market maker risk-neutral, competitive (zero expected profit per trade), dan hadapi trade.

*Catatan notasi: modul ini nulis informed-trader fraction sebagai $\\alpha$ dan posterior expected value MM sebagai $\\mu_t$. Notation table proyek dan modul O'Hara pakai $\\mu$ buat informed fraction; di sini $\\mu_t$ selalu berarti value expectation $\\pi_t V_H + (1-\\pi_t)V_L$, bukan fraction.*

Let $\\pi_t = P(V = V_H \\mid \\mathcal{F}_t)$ denote posterior MM pada waktu $t$, given trade history $\\mathcal{F}_t$. Initially $\\pi_0 \\in (0, 1)$.

**Derivasi quote.** MM harus quote price *sebelum* observe trade direction. Ask itu price di mana dia break even *conditional on trade adalah buy*. Lewat Bayes' rule:

$$P(\\text{buy} \\mid V_H) = \\alpha + \\tfrac{1}{2}(1 - \\alpha) = \\tfrac{1 + \\alpha}{2}$$
$$P(\\text{buy} \\mid V_L) = 0 + \\tfrac{1}{2}(1 - \\alpha) = \\tfrac{1 - \\alpha}{2}$$
$$P(\\text{buy}) = \\pi_t \\cdot \\tfrac{1 + \\alpha}{2} + (1 - \\pi_t) \\cdot \\tfrac{1 - \\alpha}{2}$$

Posterior given buy:

$$P(V_H \\mid \\text{buy}) = \\frac{\\pi_t \\cdot \\tfrac{1 + \\alpha}{2}}{\\pi_t \\cdot \\tfrac{1 + \\alpha}{2} + (1 - \\pi_t) \\cdot \\tfrac{1 - \\alpha}{2}} = \\frac{\\pi_t (1 + \\alpha)}{\\pi_t (1 + \\alpha) + (1 - \\pi_t)(1 - \\alpha)}$$

Ask, by zero-profit competition:

$$\\boxed{a_t = E[V \\mid \\text{buy at } t] = P(V_H \\mid \\text{buy}) \\cdot V_H + (1 - P(V_H \\mid \\text{buy})) \\cdot V_L}$$

Sama-sama bid itu expectation conditional on sell:

$$\\boxed{b_t = E[V \\mid \\text{sell at } t] = P(V_H \\mid \\text{sell}) \\cdot V_H + (1 - P(V_H \\mid \\text{sell})) \\cdot V_L}$$

di mana $P(V_H \\mid \\text{sell})$ simetris.

**Spread.** Let $\\mu_t = \\pi_t V_H + (1 - \\pi_t) V_L$ jadi prior expectation. Setelah beberapa aljabar:

$$\\boxed{s_t = a_t - b_t = \\alpha \\cdot (V_H - V_L) \\cdot \\frac{4 \\pi_t (1 - \\pi_t)}{[\\pi_t (1 + \\alpha) + (1 - \\pi_t)(1 - \\alpha)][(1 - \\pi_t)(1 + \\alpha) + \\pi_t (1 - \\alpha)]}}$$

Spread scale linear sama $\\alpha$ (informed-trader fraction) dan sama $V_H - V_L$ (fundamental uncertainty). Dia maksimal pas $\\pi_t = \\tfrac{1}{2}$ (maximum uncertainty tentang $V$) dan vanish pas $\\pi_t \\to 0$ atau $\\pi_t \\to 1$ (MM yakin tentang $V$, no adverse-selection risk).

**Belief update setelah trade.** Begitu MM observe trade (buy atau sell), posterior jadi prior buat round berikutnya:

$$\\pi_{t+1} = \\begin{cases} P(V_H \\mid \\text{buy at } t) & \\text{kalau trade-nya buy} \\\\ P(V_H \\mid \\text{sell at } t) & \\text{kalau trade-nya sell} \\end{cases}$$

**Martingale property.** Posterior expected value MM $\\mu_t = \\pi_t V_H + (1 - \\pi_t) V_L$ membentuk martingale: $E[\\mu_{t+1} \\mid \\mathcal{F}_t] = \\mu_t$. MM gak bisa predict arah pergerakan valuation-nya berikutnya dari observed trade — itu impound semua available information. (Quote midpoint $\\tfrac{a_t + b_t}{2}$ coincide sama $\\mu_t$ cuma pas $\\pi_t = \\tfrac{1}{2}$, lewat simetri; di luar titik itu midpoint menyimpang sedikit dari $\\mu_t$, jadi yang martingale itu $\\mu_t$ — bukan raw midpoint.)

**Convergence.** Pas jumlah trade tumbuh, $\\pi_t$ converge almost surely ke $0$ atau $1$ — yaitu ke true value of indicator $\\mathbf{1}[V = V_H]$. Spread $s_t$ correspondingly converge ke nol. Trading transmit information ke price sampai price fully reveal truth.

**Market breakdown (analog Akerlof).** Kalau $\\alpha = 1$ — semua trader informed — MM hadapi certain loss di trade apapun. Buat break even on buy butuh $a_t = V_H$, on sell butuh $b_t = V_L$, jadi spread sama dengan seluruh fundamental uncertainty $V_H - V_L$. Dengan quote yang lebih wide, informed trader simply gak trade. Market shut down. Adverse selection yang cukup buat halt trade entirely itu ekspresi financial-market dari lemon collapse Akerlof.`
      }
    },

    // ─────────────── 4. worked-example ───────────────
    {
      id: 'worked-example',
      heading: { en: 'Worked example', id: 'Contoh kerjaan' },
      visualization: {
        id: 'glosten-milgrom-bayesian-sim',
        component: 'GlostenMilgromBayesianSim',
        title: {
          en: 'Bayesian belief and spread evolution under sequential trades',
          id: 'Evolusi belief Bayesian dan spread di bawah sequential trade'
        },
        description: {
          en: 'Set the informed-trader fraction α, fundamental high/low values, and the true state. Run a stream of simulated trades. Watch the MM\'s posterior probability of V_H evolve and the spread shrink as information accumulates. Adjust α to see how higher information asymmetry produces wider initial spreads but the same eventual convergence.',
          id: 'Set informed-trader fraction α, fundamental high/low value, dan true state. Run stream of simulated trade. Lihat posterior probability V_H di MM evolve dan spread shrink pas information akumulasi. Adjust α buat lihat gimana information asymmetry yang lebih tinggi ngehasilin spread awal yang lebih wide tapi convergence eventual yang sama.'
        },
        defaultParams: { alpha: 0.3, V_H: 110, V_L: 90, pi0: 0.5, trueState: 'H', nTrades: 50, seed: 42 },
        height: 480,
      },
      body: {
        en: `**Concrete numerical run.** Take $V_H = 110$, $V_L = 90$, $\\pi_0 = 0.5$, $\\alpha = 0.3$. The true value is $V_H$ (we know this from outside; the MM does not). Initial expected value $\\mu_0 = 0.5 \\cdot 110 + 0.5 \\cdot 90 = 100$.

Compute the opening quotes by applying the formulas above:

$$P(\\text{buy} \\mid V_H) = \\tfrac{1 + 0.3}{2} = 0.65, \\qquad P(\\text{buy} \\mid V_L) = \\tfrac{1 - 0.3}{2} = 0.35$$
$$P(\\text{buy}) = 0.5 \\cdot 0.65 + 0.5 \\cdot 0.35 = 0.5$$
$$P(V_H \\mid \\text{buy}) = \\frac{0.5 \\cdot 0.65}{0.5} = 0.65$$

So the ask is $E[V \\mid \\text{buy}] = 0.65 \\cdot 110 + 0.35 \\cdot 90 = 71.5 + 31.5 = 103.0$. By symmetry, the bid is $0.35 \\cdot 110 + 0.65 \\cdot 90 = 38.5 + 58.5 = 97.0$. The opening spread is $103 - 97 = 6$, which is $\\alpha \\cdot (V_H - V_L) = 0.3 \\cdot 20 = 6$ at $\\pi_0 = 0.5$. Mid is $100$, matching $\\mu_0$.

**First trade arrives — it is a buy.** This is partial confirmation that $V = V_H$. The MM's posterior updates from $\\pi_0 = 0.5$ to $\\pi_1 = 0.65$. Now $\\mu_1 = 0.65 \\cdot 110 + 0.35 \\cdot 90 = 103$ — the MM's expected value jumps from $100$ to $103$. New quotes are computed from the new posterior; the new ask is somewhere around $105.5$ and the new bid is exactly $100.0$ (by the model's symmetry, a buy from $\\pi = 0.5$ lifts the posterior to $0.65$, but the conditional-on-sell posterior from there returns to $0.5$, so the bid lands back at the original mid). The actual quote midpoint is therefore $(105.5 + 100.0)/2 = 102.75$, a touch below $\\mu_1 = 103$ because bid and ask are built from different (post-sell vs post-buy) posteriors. The spread is still close to $6$ but narrowing as $\\pi$ moves toward $1$.

**Sequence of buys reinforces.** If the next trade is also a buy, $\\pi_2 \\approx 0.78$, and $\\mu_2 \\approx 105.6$. Quotes shift up again, spread narrows further. After perhaps 8–12 buys (depending on the random arrivals of informed vs uninformed), $\\pi$ approaches $0.95$ and the spread is reduced to roughly $1$. The MM is now nearly certain that $V = V_H$.

**A sell intervenes.** A liquidity-driven sell can arrive even when $V = V_H$ — uninformed traders sell with probability $\\tfrac{1}{2}$ regardless. This sell pushes $\\pi$ back down slightly (perhaps from $0.95$ to $0.88$), widens the spread temporarily, then subsequent buys recover. The path of $\\pi_t$ is a martingale (so the MM's valuation $\\mu_t$ has no predictable drift) but with eventual almost-sure convergence to the true state. Random walks toward truth — that's the mental image.

**Use the simulator below.** Drag $\\alpha$ from $0.3$ down to $0.1$ and watch the opening spread compress from $6$ to $2$ — the MM faces less information asymmetry, so charges less. Drag $\\alpha$ up to $0.6$ and the opening spread expands to $12$. At $\\alpha = 0.95$, the spread is essentially the full range $V_H - V_L = 20$ — the market is on the verge of breakdown. Set the true state to $V_L$ and observe that $\\pi_t$ converges toward $0$ rather than $1$, with the mid drifting downward. This is the same model from the same MM perspective — she just doesn't know which way it will go.

**Why these numbers matter.** The simulator's purpose is not to predict any specific spread in any specific market; it is to make the *mechanism* of price discovery visible. The spread you see is the MM's information rent. The convergence you watch is information flowing into prices via trades. The temporary widenings on adverse trades are exactly what happens at market open after news, when MMs widen spreads until they can re-anchor their posterior.`,
        id: `**Numerical run konkret.** Ambil $V_H = 110$, $V_L = 90$, $\\pi_0 = 0.5$, $\\alpha = 0.3$. True value-nya $V_H$ (kita tau ini dari luar; MM enggak). Initial expected value $\\mu_0 = 0.5 \\cdot 110 + 0.5 \\cdot 90 = 100$.

Compute opening quote dengan apply formula di atas:

$$P(\\text{buy} \\mid V_H) = \\tfrac{1 + 0.3}{2} = 0.65, \\qquad P(\\text{buy} \\mid V_L) = \\tfrac{1 - 0.3}{2} = 0.35$$
$$P(\\text{buy}) = 0.5 \\cdot 0.65 + 0.5 \\cdot 0.35 = 0.5$$
$$P(V_H \\mid \\text{buy}) = \\frac{0.5 \\cdot 0.65}{0.5} = 0.65$$

Jadi ask itu $E[V \\mid \\text{buy}] = 0.65 \\cdot 110 + 0.35 \\cdot 90 = 71.5 + 31.5 = 103.0$. Lewat simetri, bid itu $0.35 \\cdot 110 + 0.65 \\cdot 90 = 38.5 + 58.5 = 97.0$. Opening spread itu $103 - 97 = 6$, yang itu $\\alpha \\cdot (V_H - V_L) = 0.3 \\cdot 20 = 6$ pas $\\pi_0 = 0.5$. Mid-nya $100$, match $\\mu_0$.

**Trade pertama dateng — itu buy.** Ini partial confirmation bahwa $V = V_H$. Posterior MM update dari $\\pi_0 = 0.5$ jadi $\\pi_1 = 0.65$. Sekarang $\\mu_1 = 0.65 \\cdot 110 + 0.35 \\cdot 90 = 103$ — expected value MM jump dari $100$ ke $103$. Quote baru di-compute dari posterior baru; ask baru sekitar $105.5$ dan bid baru persis $100.0$ (lewat simetri model, buy dari $\\pi = 0.5$ angkat posterior ke $0.65$, tapi posterior conditional-on-sell dari situ balik ke $0.5$, jadi bid mendarat balik di mid awal). Jadi quote midpoint sebenarnya $(105.5 + 100.0)/2 = 102.75$, sedikit di bawah $\\mu_1 = 103$ karena bid dan ask dibangun dari posterior yang beda (post-sell vs post-buy). Spread masih sekitar $6$ tapi narrowing pas $\\pi$ gerak ke $1$.

**Sequence of buy nge-reinforce.** Kalau trade berikutnya juga buy, $\\pi_2 \\approx 0.78$, dan $\\mu_2 \\approx 105.6$. Quote shift naik lagi, spread narrow lebih lanjut. Setelah mungkin 8–12 buy (tergantung random arrival of informed vs uninformed), $\\pi$ approach $0.95$ dan spread reduced jadi sekitar $1$. MM sekarang hampir yakin bahwa $V = V_H$.

**Sell muncul di tengah.** Liquidity-driven sell bisa dateng even pas $V = V_H$ — uninformed trader sell dengan probabilitas $\\tfrac{1}{2}$ regardless. Sell ini push $\\pi$ balik turun dikit (mungkin dari $0.95$ ke $0.88$), widen spread sementara, terus buy berikutnya recover. Path $\\pi_t$ itu martingale (jadi valuation MM $\\mu_t$ gak punya predictable drift) tapi dengan eventual almost-sure convergence ke true state. Random walk toward truth — itu mental image-nya.

**Pake simulator di bawah.** Drag $\\alpha$ dari $0.3$ turun ke $0.1$ dan lihat opening spread compress dari $6$ ke $2$ — MM hadapi information asymmetry yang less, jadi charge less. Drag $\\alpha$ naik ke $0.6$ dan opening spread expand ke $12$. Pas $\\alpha = 0.95$, spread basically full range $V_H - V_L = 20$ — market di tepi breakdown. Set true state ke $V_L$ dan observe bahwa $\\pi_t$ converge ke $0$ daripada $1$, dengan mid drifting downward. Ini model sama dari perspektif MM yang sama — dia cuma gak tau mau ke arah mana.

**Kenapa nilai ini matter.** Tujuan simulator bukan buat predict specific spread di specific market manapun; tapi buat bikin *mekanisme* price discovery visible. Spread yang kamu lihat itu information rent MM. Convergence yang kamu watch itu information flowing ke price lewat trade. Widening sementara pas adverse trade itu persis apa yang terjadi pas market open setelah news, pas MM widen spread sampai mereka bisa re-anchor posterior mereka.`
      }
    },

    // ─────────────── 5. applications ───────────────
    {
      id: 'applications',
      heading: { en: 'Applications by audience', id: 'Aplikasi per audience' },
      body: {
        en: `This section walks from where the research frontier is moving, through practitioner-level deployment, down to the operations and risk desk. Pick whichever entry point matches your current need.

### For the advanced researcher

The Glosten-Milgrom framework supports several productive extensions. The most direct is **Easley-O'Hara 1992**, which introduces the probability of an information event $\\alpha$ as a structural parameter rather than an unobservable. Days are characterized by whether an information event occurred (probability $\\alpha$) and if so whether good or bad news (probability $\\delta$). The MM's filtering problem then becomes inference about both $V$ *and* whether an information event is in progress. PIN (probability of informed trading) is the equilibrium quantity that emerges. The Easley-Kiefer-O'Hara-Paperman 1996 estimator extracts PIN from daily buy/sell imbalances and has been used in hundreds of empirical studies.

**Easley et al. 2012 (VPIN)** further extends to a high-frequency setting where the information arrival rate $\\mu$ varies in real time, and the empirical analog uses *volume-synchronized* time buckets rather than calendar time. The VPIN metric was used in flash-crash post-mortems but has been controversial empirically — some studies find it predicts toxicity, others find specification issues. The methodological lesson is more important than any specific empirical finding: Glosten-Milgrom-style information-event models scale up cleanly to high-frequency data once you switch the time axis.

A complementary thread is **Madhavan-Richardson-Roomans 1997**, which combines Glosten-Milgrom-style adverse selection with inventory effects from Ho-Stoll 1981. The combined model decomposes spreads into adverse selection + inventory + order-processing components, and the empirical companion estimates the three components from trade data. This is the canonical "spread decomposition" empirical exercise that any microstructure researcher has done at some point.

For LOB modeling, **Glosten 1994** is the natural sequel — it extends the framework to electronic limit-order books where multiple price levels exist simultaneously. Each price level on the book is a competitive ask from a different liquidity supplier, and the Walrasian equilibrium gives the full price ladder. Modern electronic-market microstructure inherits this framework.

### For the quant practitioner

If you trade, you are either providing liquidity or taking it. In both cases, the Glosten-Milgrom mental model is the right one for thinking about why spreads are what they are.

**Liquidity providers (market makers, high-frequency firms running passive strategies):** Your spreads should reflect (a) the probability that your counterpart is informed (call this $\\alpha$), and (b) the magnitude of mispricing if they are ($V_H - V_L$, or its time-varying analog). When trading is asymmetrically flowing in one direction (sustained buy pressure), the Bayesian update gives you a quantitative reason to widen the spread on that side — your prior is shifting and the cost of being wrong is rising. Conversely, after balanced two-way flow, you can tighten. Many HFT inventory-management algorithms can be read as approximations to the Glosten-Milgrom optimal quote with regularization for risk aversion and inventory limits.

**Liquidity takers (anyone consuming the spread for execution):** Your trades transmit information whether you intend to or not. The MM updates her posterior based on your direction. Two operational consequences. First, if you split a large parent order into many child orders ("VWAP-style" execution), each child reveals partial information; the cumulative price impact reflects the MM's updated posterior. Second, if you happen to be uninformed (you trade for portfolio rebalancing, not on alpha), you are paying information rent to the MM that *other* informed traders should pay. There is no easy fix — you cannot credibly signal "I am uninformed" in a competitive market — but timing your trades to coincide with high uninformed-flow periods (market open, end of day, post-news settling) reduces the marginal information-rent you pay.

For crypto and FX practitioners, the framework applies with the substitution that "informed" means "has any private information edge" — whether that's a node-level mempool view, a private API feed, or just faster reaction to public news. The two-cohort structure (informed vs uninformed) is a tractable simplification of what is in reality a continuum of edge.

### For the operations team / risk

For a trading desk's risk team, the most useful Glosten-Milgrom insight is that **spread cost is not transaction cost — it is information rent.** When your firm provides liquidity and books spread P&L, that P&L is not free intermediation revenue; it is compensation for information losses you will incur over time. A firm that books spread P&L without accounting for adverse-selection drawdown will systematically appear profitable in good periods and lose much more than expected in bad ones (high information-flow events).

In practical reporting, your spread P&L should be decomposed into: (i) gross spread captured (volume × half-spread); (ii) adverse selection (the post-trade price drift against your position); and (iii) inventory P&L (movement of held positions). The Glosten-Milgrom literature tells you what to expect: (i) and (ii) should net out roughly at equilibrium, with the residual being your fee for intermediation. If (i) - (ii) is large and positive over a long horizon, you are either (a) very good at selecting flow, (b) operating in an inefficient market, or (c) about to be selected against more aggressively. None of these are stable steady states.`,
        id: `Section ini jalan dari mana research frontier lagi bergerak, lewat practitioner-level deployment, sampai turun ke operations dan risk desk. Pilih entry point yang match sama kebutuhan kamu sekarang.

### Untuk advanced researcher

Framework Glosten-Milgrom support beberapa extension yang produktif. Yang paling langsung itu **Easley-O'Hara 1992**, yang introduce probabilitas information event $\\alpha$ sebagai parameter struktural daripada unobservable. Hari di-karakteristik sama apakah information event terjadi (probabilitas $\\alpha$) dan kalau iya apakah good atau bad news (probabilitas $\\delta$). Filtering problem MM jadi inferensi tentang $V$ *dan* apakah information event lagi berjalan. PIN (probability of informed trading) itu equilibrium quantity yang muncul. Estimator Easley-Kiefer-O'Hara-Paperman 1996 extract PIN dari daily buy/sell imbalance dan udah dipake di ratusan empirical study.

**Easley et al. 2012 (VPIN)** lebih lanjut extend ke high-frequency setting di mana information arrival rate $\\mu$ vary in real time, dan analog empirisnya pake *volume-synchronized* time bucket daripada calendar time. Metrik VPIN dipake di post-mortem flash-crash tapi udah controversial secara empiris — beberapa studi nemu dia predict toxicity, yang lain nemu specification issue. Pelajaran metodologis lebih penting dari empirical finding manapun: model information-event Glosten-Milgrom-style scale up clean ke high-frequency data begitu kamu switch time axis-nya.

Thread komplementer itu **Madhavan-Richardson-Roomans 1997**, yang combine adverse selection Glosten-Milgrom-style sama inventory effect dari Ho-Stoll 1981. Model gabungan decompose spread jadi komponen adverse selection + inventory + order-processing, dan companion empiris-nya estimate ketiga komponen dari trade data. Ini "spread decomposition" empirical exercise kanonikal yang setiap microstructure researcher udah pernah lakuin di suatu titik.

Buat LOB modeling, **Glosten 1994** itu sequel natural — dia extend framework ke electronic limit-order book di mana multiple price level exist simultaneously. Setiap price level di book itu competitive ask dari liquidity supplier yang beda, dan Walrasian equilibrium ngasih full price ladder. Modern electronic-market microstructure inherit framework ini.

### Untuk quant practitioner

Kalau kamu trade, kamu either provide liquidity atau take liquidity. Di kedua case, mental model Glosten-Milgrom itu yang bener buat mikir kenapa spread itu kayak gitu.

**Liquidity provider (market maker, firm HFT yang jalanin passive strategy):** Spread kamu harusnya reflect (a) probabilitas counterpart kamu itu informed (sebut ini $\\alpha$), dan (b) magnitude mispricing kalau mereka emang informed ($V_H - V_L$, atau analog yang time-varying-nya). Pas trading asimetris flow ke satu direction (sustained buy pressure), Bayesian update kasih kamu reason kuantitatif buat widen spread di sisi itu — prior kamu lagi shifting dan cost of being wrong lagi naik. Sebaliknya, setelah balanced two-way flow, kamu bisa tighten. Banyak HFT inventory-management algorithm bisa di-read sebagai approximation ke optimal quote Glosten-Milgrom dengan regularisasi buat risk aversion dan inventory limit.

**Liquidity taker (siapa aja yang consume spread buat execution):** Trade kamu transmit information whether you intend it or not. MM update posterior dia based on direction kamu. Dua operational consequence. Pertama, kalau kamu split parent order yang gede jadi banyak child order ("VWAP-style" execution), tiap child reveal partial information; cumulative price impact reflect updated posterior MM. Kedua, kalau kamu kebetulan uninformed (kamu trade buat portfolio rebalancing, bukan on alpha), kamu lagi bayar information rent ke MM yang *informed trader lain* harusnya bayar. Gak ada easy fix — kamu gak bisa credibly signal "saya uninformed" di competitive market — tapi timing trade kamu pas periode high uninformed-flow (market open, end of day, post-news settling) reduce information-rent marginal yang kamu bayar.

Buat praktisi crypto dan FX, framework apply dengan substitusi bahwa "informed" berarti "punya private information edge apapun" — entah itu node-level mempool view, private API feed, atau cuma reaksi lebih cepat ke public news. Two-cohort structure (informed vs uninformed) itu simplifikasi tractable dari yang sebenernya continuum of edge.

### Untuk operations team / risk

Buat tim risk trading desk, insight Glosten-Milgrom yang paling useful itu bahwa **spread cost itu bukan transaction cost — itu information rent.** Pas firm kamu provide liquidity dan book spread P&L, P&L itu bukan free intermediation revenue; itu compensation buat information loss yang kamu bakal incur over time. Firm yang book spread P&L tanpa account for adverse-selection drawdown akan sistematis appear profitable di periode bagus dan rugi much more than expected di periode buruk (high information-flow event).

Di reporting praktis, spread P&L kamu harusnya di-decompose jadi: (i) gross spread captured (volume × half-spread); (ii) adverse selection (post-trade price drift against position kamu); dan (iii) inventory P&L (gerakan position yang di-hold). Literature Glosten-Milgrom kasih tau kamu apa yang di-expect: (i) dan (ii) harusnya net out roughly at equilibrium, dengan residual jadi fee kamu buat intermediation. Kalau (i) - (ii) gede dan positif over long horizon, kamu either (a) very good at selecting flow, (b) operating di inefficient market, atau (c) about to be selected against more aggressively. Gak ada di sini yang stable steady state.`
      }
    },

    // ─────────────── 6. practice ───────────────
    {
      id: 'practice',
      heading: { en: 'Practice', id: 'Latihan' },
      body: {
        en: `**1.** Given $V_H = 110$, $V_L = 90$, $\\pi_0 = 0.5$, $\\alpha = 0.4$, compute the opening ask and bid prices.

<details><summary>Answer</summary>
$P(\\text{buy} \\mid V_H) = (1 + 0.4)/2 = 0.7$, $P(\\text{buy} \\mid V_L) = (1 - 0.4)/2 = 0.3$. $P(\\text{buy}) = 0.5 \\cdot 0.7 + 0.5 \\cdot 0.3 = 0.5$. $P(V_H \\mid \\text{buy}) = (0.5 \\cdot 0.7)/0.5 = 0.7$. Ask $= 0.7 \\cdot 110 + 0.3 \\cdot 90 = 77 + 27 = 104$. By symmetry, $P(V_H \\mid \\text{sell}) = 0.3$, bid $= 0.3 \\cdot 110 + 0.7 \\cdot 90 = 33 + 63 = 96$. Spread $= 104 - 96 = 8 = \\alpha \\cdot (V_H - V_L) = 0.4 \\cdot 20$.
</details>

**2.** A sequence of 3 buys in a row arrives. Starting from $\\pi_0 = 0.5$, $\\alpha = 0.3$, compute $\\pi_1$, $\\pi_2$, $\\pi_3$. Compare to what would happen with $\\alpha = 0.1$ (less informed flow).

<details><summary>Answer</summary>
Using the update rule $\\pi_{t+1} = \\frac{\\pi_t (1 + \\alpha)}{\\pi_t (1 + \\alpha) + (1 - \\pi_t)(1 - \\alpha)}$ for a buy:

At $\\alpha = 0.3$:
- $\\pi_1 = 0.5 \\cdot 1.3 / (0.5 \\cdot 1.3 + 0.5 \\cdot 0.7) = 0.65/1.0 = 0.65$
- $\\pi_2 = 0.65 \\cdot 1.3 / (0.65 \\cdot 1.3 + 0.35 \\cdot 0.7) = 0.845/(0.845 + 0.245) = 0.845/1.09 \\approx 0.775$
- $\\pi_3 \\approx 0.775 \\cdot 1.3/(0.775 \\cdot 1.3 + 0.225 \\cdot 0.7) = 1.0075/(1.0075 + 0.1575) = 1.0075/1.165 \\approx 0.865$

At $\\alpha = 0.1$:
- $\\pi_1 = 0.5 \\cdot 1.1/(0.5 \\cdot 1.1 + 0.5 \\cdot 0.9) = 0.55/1.0 = 0.55$
- $\\pi_2 = 0.55 \\cdot 1.1/(0.55 \\cdot 1.1 + 0.45 \\cdot 0.9) = 0.605/(0.605 + 0.405) \\approx 0.599$
- $\\pi_3 \\approx 0.647$

At $\\alpha = 0.1$ the same 3 buys produce a much smaller belief update than at $\\alpha = 0.3$. Less informed flow $\\Rightarrow$ each trade is less informative $\\Rightarrow$ slower convergence to the truth. The trade-off: lower $\\alpha$ means lower spreads (information rent is smaller) but slower price discovery.
</details>

**3.** Show that when $\\alpha = 1$, the spread equals $V_H - V_L$ regardless of $\\pi_t$. Explain why this is the market-breakdown condition.

<details><summary>Answer</summary>
With $\\alpha = 1$: $P(\\text{buy} \\mid V_H) = 1$, $P(\\text{buy} \\mid V_L) = 0$. Then $P(V_H \\mid \\text{buy}) = 1$ and $P(V_H \\mid \\text{sell}) = 0$. So ask $= V_H$ and bid $= V_L$, regardless of $\\pi_t$. The spread is the entire fundamental uncertainty range.

Why this is a breakdown: the MM is now charging the full information uncertainty as spread. If she charges less, informed traders take it (she loses certain $V_H - $ ask, or bid $- V_L$). If she charges this much, no informed trader trades — but no uninformed trader trades either (the spread is wider than any reasonable execution cost they're willing to pay). Trade volume goes to zero. The market exists in name only — quotes are posted but no trade clears. This is the Akerlof lemons collapse in financial form: extreme adverse selection drives non-trade to be the equilibrium outcome.
</details>

**4.** Two thought-experiment setups produce the same opening spread but evolve differently after 100 trades. (a) Stock A: $V_H = 110$, $V_L = 90$, $\\alpha = 0.2$. (b) Stock B: $V_H = 105$, $V_L = 95$, $\\alpha = 0.4$. Both have $\\pi_0 = 0.5$. Compute the opening spreads. Then describe qualitatively: after 100 trades, which stock has a tighter spread? Which converges to the true value faster (in number of trades)?

<details><summary>Answer</summary>
Stock A opening spread $= 0.2 \\cdot 20 = 4$. Stock B opening spread $= 0.4 \\cdot 10 = 4$. Same opening spread.

After 100 trades, Stock B converges to the truth faster — each trade carries more information ($\\alpha = 0.4$ vs $\\alpha = 0.2$). So $\\pi_t$ for Stock B is closer to 0 or 1 after 100 trades, and its spread is smaller. Stock A still has substantial uncertainty after 100 trades (more dispersion in $\\pi_t$) and a relatively larger spread.

The deeper observation: the *opening* spread reflects $\\alpha \\cdot (V_H - V_L)$, but the *convergence rate* depends on $\\alpha$ alone. Two stocks with the same opening spread but different $\\alpha$ have different long-run dynamics. Equally important: a measurement of $\\alpha$ from trade data (which PIN attempts) is a different observable than the spread itself.
</details>`,
        id: `**1.** Given $V_H = 110$, $V_L = 90$, $\\pi_0 = 0.5$, $\\alpha = 0.4$, compute opening ask dan bid price.

<details><summary>Jawaban</summary>
$P(\\text{buy} \\mid V_H) = (1 + 0.4)/2 = 0.7$, $P(\\text{buy} \\mid V_L) = (1 - 0.4)/2 = 0.3$. $P(\\text{buy}) = 0.5 \\cdot 0.7 + 0.5 \\cdot 0.3 = 0.5$. $P(V_H \\mid \\text{buy}) = (0.5 \\cdot 0.7)/0.5 = 0.7$. Ask $= 0.7 \\cdot 110 + 0.3 \\cdot 90 = 77 + 27 = 104$. Lewat simetri, $P(V_H \\mid \\text{sell}) = 0.3$, bid $= 0.3 \\cdot 110 + 0.7 \\cdot 90 = 33 + 63 = 96$. Spread $= 104 - 96 = 8 = \\alpha \\cdot (V_H - V_L) = 0.4 \\cdot 20$.
</details>

**2.** Sequence 3 buy berturut-turut dateng. Mulai dari $\\pi_0 = 0.5$, $\\alpha = 0.3$, compute $\\pi_1$, $\\pi_2$, $\\pi_3$. Bandingin sama yang akan terjadi pas $\\alpha = 0.1$ (less informed flow).

<details><summary>Jawaban</summary>
Pake update rule $\\pi_{t+1} = \\frac{\\pi_t (1 + \\alpha)}{\\pi_t (1 + \\alpha) + (1 - \\pi_t)(1 - \\alpha)}$ buat buy:

Di $\\alpha = 0.3$:
- $\\pi_1 = 0.5 \\cdot 1.3 / (0.5 \\cdot 1.3 + 0.5 \\cdot 0.7) = 0.65/1.0 = 0.65$
- $\\pi_2 = 0.65 \\cdot 1.3 / (0.65 \\cdot 1.3 + 0.35 \\cdot 0.7) = 0.845/(0.845 + 0.245) = 0.845/1.09 \\approx 0.775$
- $\\pi_3 \\approx 0.775 \\cdot 1.3/(0.775 \\cdot 1.3 + 0.225 \\cdot 0.7) = 1.0075/(1.0075 + 0.1575) = 1.0075/1.165 \\approx 0.865$

Di $\\alpha = 0.1$:
- $\\pi_1 = 0.5 \\cdot 1.1/(0.5 \\cdot 1.1 + 0.5 \\cdot 0.9) = 0.55/1.0 = 0.55$
- $\\pi_2 = 0.55 \\cdot 1.1/(0.55 \\cdot 1.1 + 0.45 \\cdot 0.9) = 0.605/(0.605 + 0.405) \\approx 0.599$
- $\\pi_3 \\approx 0.647$

Di $\\alpha = 0.1$ tiga buy yang sama ngehasilin belief update yang much smaller dari di $\\alpha = 0.3$. Less informed flow $\\Rightarrow$ tiap trade less informative $\\Rightarrow$ slower convergence ke truth. Trade-off-nya: $\\alpha$ lebih rendah berarti spread lebih rendah (information rent lebih kecil) tapi price discovery lebih lambat.
</details>

**3.** Tunjukin pas $\\alpha = 1$, spread sama dengan $V_H - V_L$ regardless of $\\pi_t$. Jelasin kenapa ini market-breakdown condition.

<details><summary>Jawaban</summary>
Dengan $\\alpha = 1$: $P(\\text{buy} \\mid V_H) = 1$, $P(\\text{buy} \\mid V_L) = 0$. Maka $P(V_H \\mid \\text{buy}) = 1$ dan $P(V_H \\mid \\text{sell}) = 0$. Jadi ask $= V_H$ dan bid $= V_L$, regardless of $\\pi_t$. Spread itu seluruh fundamental uncertainty range.

Kenapa ini breakdown: MM sekarang charge full information uncertainty as spread. Kalau dia charge less, informed trader take it (dia rugi certain $V_H - $ ask, atau bid $- V_L$). Kalau dia charge segini, gak ada informed trader yang trade — tapi gak ada uninformed trader yang trade juga (spread lebih wide dari execution cost reasonable apa pun yang mereka willing bayar). Trade volume goes to zero. Market exist in name only — quote di-post tapi gak ada trade yang clear. Ini Akerlof lemons collapse dalam bentuk financial: extreme adverse selection drive non-trade jadi equilibrium outcome.
</details>

**4.** Dua thought-experiment setup ngehasilin opening spread yang sama tapi evolve beda setelah 100 trade. (a) Stock A: $V_H = 110$, $V_L = 90$, $\\alpha = 0.2$. (b) Stock B: $V_H = 105$, $V_L = 95$, $\\alpha = 0.4$. Dua-duanya punya $\\pi_0 = 0.5$. Compute opening spread. Terus deskripsikan secara kualitatif: setelah 100 trade, stock mana yang spread-nya lebih tight? Mana yang converge ke true value lebih cepat (in number of trade)?

<details><summary>Jawaban</summary>
Stock A opening spread $= 0.2 \\cdot 20 = 4$. Stock B opening spread $= 0.4 \\cdot 10 = 4$. Same opening spread.

Setelah 100 trade, Stock B converge ke truth lebih cepat — tiap trade carry more information ($\\alpha = 0.4$ vs $\\alpha = 0.2$). Jadi $\\pi_t$ buat Stock B lebih deket ke 0 atau 1 setelah 100 trade, dan spread-nya lebih kecil. Stock A masih punya substantial uncertainty setelah 100 trade (lebih banyak dispersion di $\\pi_t$) dan spread relatif lebih gede.

Observasi yang lebih dalam: *opening* spread reflect $\\alpha \\cdot (V_H - V_L)$, tapi *convergence rate* tergantung di $\\alpha$ doang. Dua stock dengan same opening spread tapi $\\alpha$ beda punya long-run dynamic yang beda. Equally important: measurement $\\alpha$ dari trade data (yang PIN coba lakukan) itu observable yang beda dari spread itu sendiri.
</details>`
      }
    },

    // ─────────────── 7. connections ───────────────
    {
      id: 'connections',
      heading: { en: 'Connections', id: 'Koneksi' },
      body: {
        en: `- **Prereqs**: [O'Hara 1995](item:ohara-1995) provides the textbook synthesis that contextualizes Glosten-Milgrom within the broader sequential-trade theory tradition. [Kyle 1985](item:kyle-1985) is the strategic-trader counterpart from the same year — pedagogically complementary: where Kyle has one big informed trade hidden in noise (batch auction), Glosten-Milgrom has many small trades each revealing partial information (sequential).
- **Builds toward**: Easley-O'Hara 1992 (probability of information event structural model — PIN), Easley-Kiefer-O'Hara-Paperman 1996 (PIN estimator), Easley-López-de-Prado-O'Hara 2012 (VPIN — high-frequency volume-synchronized PIN, used in flash-crash analysis). Glosten-Harris 1988 is the direct empirical companion. Madhavan-Richardson-Roomans 1997 combines GM with inventory effects.
- **Related to**: [Hasbrouck 2007](item:hasbrouck-2007) for the empirical methodology that uses the Glosten-Milgrom adverse-selection concept as a primitive. The trade-direction classification problem in Hasbrouck (Lee-Ready and successors) presupposes the Glosten-Milgrom-style two-sided quote structure. Roll 1984 is the predecessor model that Glosten-Milgrom explicitly improves upon by adding information content to the spread.
- **Theoretical lineage**: Akerlof 1970 "Market for Lemons" — Glosten-Milgrom is the financial-markets analog. The market-breakdown condition at $\\alpha = 1$ is the same phenomenon in different setting.
- **Adjacent**: Milgrom-Stokey 1982 no-trade theorem — a more general result that if all traders share a common prior and information is purely private, no trade should occur on information alone. Glosten-Milgrom assumes uninformed traders trade for *non-informational* reasons (liquidity needs), which makes trade possible.`,
        id: `- **Prereqs**: [O'Hara 1995](item:ohara-1995) ngasih textbook synthesis yang nge-contextualize Glosten-Milgrom dalam tradisi sequential-trade theory yang lebih luas. [Kyle 1985](item:kyle-1985) itu counterpart strategic-trader dari tahun yang sama — komplementer secara pedagogis: di mana Kyle punya satu informed trade gede yang ditutup noise (batch auction), Glosten-Milgrom punya banyak trade kecil yang masing-masing reveal partial information (sequential).
- **Builds toward**: Easley-O'Hara 1992 (probability of information event structural model — PIN), Easley-Kiefer-O'Hara-Paperman 1996 (PIN estimator), Easley-López-de-Prado-O'Hara 2012 (VPIN — high-frequency volume-synchronized PIN, dipake di analisis flash-crash). Glosten-Harris 1988 itu companion empiris langsung. Madhavan-Richardson-Roomans 1997 combine GM sama inventory effect.
- **Related to**: [Hasbrouck 2007](item:hasbrouck-2007) buat metodologi empiris yang pake konsep adverse-selection Glosten-Milgrom sebagai primitive. Trade-direction classification problem di Hasbrouck (Lee-Ready dan successor) presuppose struktur two-sided quote Glosten-Milgrom-style. Roll 1984 itu predecessor model yang Glosten-Milgrom explicitly improve dengan tambahin information content ke spread.
- **Theoretical lineage**: Akerlof 1970 "Market for Lemons" — Glosten-Milgrom itu analog financial-markets-nya. Market-breakdown condition pas $\\alpha = 1$ itu fenomena yang sama dalam setting yang beda.
- **Adjacent**: No-trade theorem Milgrom-Stokey 1982 — hasil yang lebih general bahwa kalau semua trader share common prior dan information itu purely private, no trade harusnya occur on information alone. Glosten-Milgrom assume uninformed trader trade buat reason *non-informational* (liquidity need), yang bikin trade jadi possible.`
      }
    },

    // ─────────────── 8. sources ───────────────
    {
      id: 'sources',
      heading: { en: 'Sources', id: 'Sumber' },
      body: {
        en: `- **Glosten, L. R., and Milgrom, P. R.** (1985). "Bid, Ask and Transaction Prices in a Specialist Market with Heterogeneously Informed Traders." *Journal of Financial Economics*, 14(1), 71-100. The foundational sequential-trade model. **(This item.)**
- **Akerlof, G. A.** (1970). "The Market for 'Lemons': Quality Uncertainty and the Market Mechanism." *Quarterly Journal of Economics*, 84(3), 488-500. The intellectual predecessor — adverse selection in markets with asymmetric quality information.
- **Milgrom, P. R., and Stokey, N.** (1982). "Information, Trade and Common Knowledge." *Journal of Economic Theory*, 26(1), 17-27. The no-trade theorem that contextualizes Glosten-Milgrom's reliance on uninformed liquidity-driven trade.
- **Glosten, L. R., and Harris, L. E.** (1988). "Estimating the Components of the Bid/Ask Spread." *Journal of Financial Economics*, 21(1), 123-142. The empirical companion that uses the 1985 framework to decompose observed spreads.
- **Easley, D., and O'Hara, M.** (1992). "Time and the Process of Security Price Adjustment." *Journal of Finance*, 47(2), 577-605. The PIN structural model extending Glosten-Milgrom with information events.
- **Easley, D., Kiefer, N. M., O'Hara, M., and Paperman, J. B.** (1996). "Liquidity, Information, and Infrequently Traded Stocks." *Journal of Finance*, 51(4), 1405-1436. The canonical PIN estimator paper.
- **Easley, D., López de Prado, M. M., and O'Hara, M.** (2012). "Flow Toxicity and Liquidity in a High-Frequency World." *Review of Financial Studies*, 25(5), 1457-1493. VPIN — volume-synchronized PIN for high-frequency settings.
- **O'Hara, M.** (1995). *Market Microstructure Theory*. Blackwell. Chapters 3 and 4 provide the canonical textbook treatment integrating Glosten-Milgrom with Kyle and other foundational models.`,
        id: `- **Glosten, L. R., dan Milgrom, P. R.** (1985). "Bid, Ask and Transaction Prices in a Specialist Market with Heterogeneously Informed Traders." *Journal of Financial Economics*, 14(1), 71-100. Foundational sequential-trade model. **(Item ini.)**
- **Akerlof, G. A.** (1970). "The Market for 'Lemons': Quality Uncertainty and the Market Mechanism." *Quarterly Journal of Economics*, 84(3), 488-500. Predecessor intelektual — adverse selection di market dengan asymmetric quality information.
- **Milgrom, P. R., dan Stokey, N.** (1982). "Information, Trade and Common Knowledge." *Journal of Economic Theory*, 26(1), 17-27. No-trade theorem yang nge-contextualize ketergantungan Glosten-Milgrom di uninformed liquidity-driven trade.
- **Glosten, L. R., dan Harris, L. E.** (1988). "Estimating the Components of the Bid/Ask Spread." *Journal of Financial Economics*, 21(1), 123-142. Companion empiris yang pake framework 1985 buat decompose observed spread.
- **Easley, D., dan O'Hara, M.** (1992). "Time and the Process of Security Price Adjustment." *Journal of Finance*, 47(2), 577-605. PIN structural model yang extend Glosten-Milgrom sama information event.
- **Easley, D., Kiefer, N. M., O'Hara, M., dan Paperman, J. B.** (1996). "Liquidity, Information, and Infrequently Traded Stocks." *Journal of Finance*, 51(4), 1405-1436. Paper PIN estimator kanonikal.
- **Easley, D., López de Prado, M. M., dan O'Hara, M.** (2012). "Flow Toxicity and Liquidity in a High-Frequency World." *Review of Financial Studies*, 25(5), 1457-1493. VPIN — volume-synchronized PIN buat high-frequency setting.
- **O'Hara, M.** (1995). *Market Microstructure Theory*. Blackwell. Chapter 3 dan 4 ngasih canonical textbook treatment yang integrate Glosten-Milgrom sama Kyle dan model foundational lain.`
      }
    },
  ],

  audio: { enabled: true },

  selfTest: [
    {
      sectionId: 'intuition',
      question: {
        en: 'Why does the bid-ask spread vanish when α → 0 (no informed traders) but also vanish when π → 0 or π → 1 (MM is certain about V)?',
        id: 'Kenapa bid-ask spread vanish pas α → 0 (no informed trader) tapi juga vanish pas π → 0 atau π → 1 (MM certain tentang V)?'
      },
      prompt: { en: 'Before continuing, try answering:', id: 'Sebelum lanjut, coba jawab:' },
      answer: {
        en: 'Two different mechanisms, both consistent with the same formula. When α → 0, no trader is informed, so the MM has no adverse-selection risk to compensate for — every trade is equally likely to be a liquidity-driven buy or sell regardless of V. The information content of a trade is zero, so the posterior given a buy equals the posterior given a sell equals the prior. Ask = bid = prior expectation. When π → 0 or 1, the MM is already certain about V — she knows the answer. The adverse-selection risk no longer exists because there is nothing the informed trader knows that she doesn\'t. So even though α > 0, the spread vanishes because the uncertainty (V_H - V_L weighted by π(1-π)) is gone. The formula s = α(V_H - V_L) · [function of π] captures both: the α factor kills the spread when no one is informed, and the π(1-π) factor in the bracket kills the spread when the MM has no uncertainty to be exploited.',
        id: 'Dua mekanisme yang beda, dua-duanya konsisten sama formula yang sama. Pas α → 0, gak ada trader yang informed, jadi MM gak punya adverse-selection risk buat compensate — setiap trade equally likely jadi liquidity-driven buy atau sell regardless of V. Information content trade itu nol, jadi posterior given buy sama dengan posterior given sell sama dengan prior. Ask = bid = prior expectation. Pas π → 0 atau 1, MM udah certain tentang V — dia tau jawabannya. Adverse-selection risk gak ada lagi karena gak ada hal yang informed trader tau yang dia gak tau. Jadi meskipun α > 0, spread vanish karena uncertainty-nya (V_H - V_L weighted by π(1-π)) udah hilang. Formula s = α(V_H - V_L) · [fungsi π] capture dua-duanya: factor α matiin spread pas gak ada yang informed, dan factor π(1-π) di bracket matiin spread pas MM gak punya uncertainty buat di-exploit.'
      }
    },
    {
      sectionId: 'formalization',
      question: {
        en: 'After a buy, π_{t+1} > π_t. After a sell, π_{t+1} < π_t. Yet the MM\'s valuation μ_t = π_t·V_H + (1−π_t)·V_L is supposed to be a martingale. How can this be consistent — doesn\'t each trade push μ_t in the trade direction?',
        id: 'Setelah buy, π_{t+1} > π_t. Setelah sell, π_{t+1} < π_t. Tapi valuation MM μ_t = π_t·V_H + (1−π_t)·V_L katanya itu martingale. Gimana ini konsisten — bukannya tiap trade push μ_t ke direction trade-nya?'
      },
      prompt: { en: 'Before continuing, try answering:', id: 'Sebelum lanjut, coba jawab:' },
      answer: {
        en: 'The martingale property is over the MM\'s information set *before* the trade arrives, and it holds for μ_t = π_t·V_H + (1−π_t)·V_L (the MM\'s posterior expected value) — not for the raw quote midpoint. Before the next trade, the MM does not know whether it will be a buy or a sell. The probability of a buy and a sell are NOT 50/50 — they are weighted by the posterior π_t. Specifically, P(buy) = π_t(1+α)/2 + (1-π_t)(1-α)/2 and P(sell) = 1 - P(buy). Conditional on a buy, the posterior moves up (μ_t moves up). Conditional on a sell, the posterior moves down (μ_t moves down). The *expectation* of μ_{t+1} given the information at time t is: P(buy) · μ_{t+1}^{buy} + P(sell) · μ_{t+1}^{sell}. Working through the algebra (which is the core of the martingale proof), this equals μ_t exactly. (Equivalently: π_t itself is a martingale, and μ_t is linear in π_t.) The trick: when V_H is the truth, buys are *more likely*, so the larger π_t-given-buy weight balances the smaller π_t-given-sell weight in expectation. The MM cannot predict the next move in her valuation from her own quotes — that\'s the no-arbitrage property of competitive market making. One caution: the quote midpoint (a_t+b_t)/2 tracks μ_t but equals it exactly only at π_t = 1/2, so it is μ_t — not the raw midpoint — that is the exact martingale.',
        id: 'Properti martingale itu over information set MM *sebelum* trade dateng, dan dia berlaku buat μ_t = π_t·V_H + (1−π_t)·V_L (posterior expected value MM) — bukan buat raw quote midpoint. Sebelum trade berikutnya, MM gak tau apakah dia buy atau sell. Probabilitas buy dan sell BUKAN 50/50 — mereka di-weight sama posterior π_t. Specifically, P(buy) = π_t(1+α)/2 + (1-π_t)(1-α)/2 dan P(sell) = 1 - P(buy). Conditional on buy, posterior gerak naik (μ_t gerak naik). Conditional on sell, posterior gerak turun (μ_t gerak turun). *Expectation* dari μ_{t+1} given information at time t itu: P(buy) · μ_{t+1}^{buy} + P(sell) · μ_{t+1}^{sell}. Ngeliat aljabarnya (yang itu inti dari martingale proof), ini sama dengan μ_t persis. (Ekuivalen: π_t sendiri itu martingale, dan μ_t linear di π_t.) Trick-nya: pas V_H itu truth, buy lebih likely, jadi bobot π_t-given-buy yang lebih gede ngeseimbangin bobot π_t-given-sell yang lebih kecil in expectation. MM gak bisa predict pergerakan valuation-nya berikutnya dari quote dia sendiri — itu properti no-arbitrage dari competitive market making. Satu catatan: quote midpoint (a_t+b_t)/2 nge-track μ_t tapi sama persis cuma pas π_t = 1/2, jadi yang martingale persis itu μ_t — bukan raw midpoint.'
      }
    },
    {
      sectionId: 'worked-example',
      question: {
        en: 'In the simulator, compare α = 0.3 with α = 0.7. Both the spread AND the speed at which the posterior π converges to the true state change. Which way does each move, and why is there no contradiction?',
        id: 'Di simulator, bandingkan α = 0.3 dengan α = 0.7. Baik spread MAUPUN kecepatan posterior π konvergen ke true state berubah. Ke arah mana masing-masing bergerak, dan kenapa tidak ada kontradiksi?'
      },
      prompt: { en: 'Before continuing, try answering:', id: 'Sebelum lanjut, coba jawab:' },
      answer: {
        en: 'Both effects come from the same cause — at higher α a larger share of trades is informed — and they reinforce, not oppose, each other. (1) The spread WIDENS: the MM faces more adverse selection per trade and must quote wider (the GM spread scales with α). (2) Convergence gets FASTER: each trade is more informative, since given V_H a buy is much more likely than a sell (P(buy|V_H) = (1+α)/2 = 0.85 at α = 0.7 vs 0.65 at α = 0.3), so the Bayesian posterior π moves toward the true state in fewer trades. There is no paradox: more information per trade means the price DISCOVERS fair value faster, and the wider spread is exactly the price the uninformed pay for that faster discovery. In the limit α → 1 every trade reveals the state, π snaps to certainty almost immediately, and the spread is at its widest. (So if a run ever *looks* slower at α = 0.7, that is ordinary path-to-path noise in a single seed — averaged over runs, higher α converges monotonically faster.)',
        id: 'Kedua efek berasal dari sebab yang sama — pada α lebih tinggi, porsi trade yang informed lebih besar — dan mereka saling memperkuat, bukan berlawanan. (1) Spread MELEBAR: MM menghadapi adverse selection lebih besar per trade dan harus quote lebih lebar (spread GM membesar dengan α). (2) Konvergensi makin CEPAT: tiap trade lebih informatif, karena given V_H sebuah buy jauh lebih mungkin daripada sell (P(buy|V_H) = (1+α)/2 = 0.85 di α = 0.7 vs 0.65 di α = 0.3), sehingga posterior Bayesian π bergerak ke true state dalam lebih sedikit trade. Tidak ada paradoks: lebih banyak informasi per trade berarti harga MENEMUKAN nilai wajar lebih cepat, dan spread yang lebih lebar persis harga yang dibayar pihak uninformed untuk penemuan yang lebih cepat itu. Pada limit α → 1 tiap trade mengungkap state, π langsung ke kepastian hampir seketika, dan spread paling lebar. (Jadi kalau suatu run *terlihat* lebih lambat di α = 0.7, itu sekadar noise antar-path pada satu seed — dirata-rata lintas run, α lebih tinggi konvergen monoton lebih cepat.)'
      }
    },
    {
      sectionId: 'applications',
      question: {
        en: 'You manage a market-making desk. Over the past 30 days, gross spread P&L is +USD 2M, but the adverse-selection drift (post-trade price drift against your position) is +USD 1.8M, leaving net intermediation profit of USD 200k. Your firm is considering doubling the desk\'s capital allocation. Use the Glosten-Milgrom framework to argue whether this is a good idea.',
        id: 'Kamu manage market-making desk. Selama 30 hari terakhir, gross spread P&L itu +USD 2M, tapi adverse-selection drift (post-trade price drift against position kamu) itu +USD 1.8M, leaving net intermediation profit USD 200k. Firm kamu lagi mempertimbangkan double-in alokasi kapital desk. Pake framework Glosten-Milgrom buat argue apakah ini ide bagus.'
      },
      prompt: { en: 'Before continuing, try answering:', id: 'Sebelum lanjut, coba jawab:' },
      answer: {
        en: 'The data shows the desk is operating at near-equilibrium: gross spread captured (USD 2M) is almost entirely offset by adverse-selection losses (USD 1.8M), so net intermediation profit (USD 200k) is the residual after paying information rent. This is consistent with the Glosten-Milgrom prediction that in a competitive market, spread P&L should approximately equal adverse-selection cost — the residual is the MM\'s fee for intermediation services.\n\nDoubling capital allocation is risky for several reasons. First, the 90% offset suggests the desk is operating near competitive equilibrium; scaling will not produce 2× the residual P&L unless the desk has unique informational edge that justifies it. Second, larger position sizes will face MORE adverse selection per dollar — when the desk shows larger size, informed counterparts will more aggressively target it (the desk\'s flow becomes more attractive prey). The adverse-selection drift will scale faster than the spread P&L. Third, if the market regime shifts to higher information asymmetry (e.g., during a news event), the desk\'s spread P&L will not compensate for the increased adverse-selection drift, and the desk could swing to losses faster than at half the size.\n\nA sound argument for the firm would be: scale only if there is evidence of unique edge (e.g., better signal quality, faster reaction, structural privilege in flow) that justifies a non-equilibrium return. If the desk is operating at the competitive level — which the numbers suggest — doubling capital will not double profits but will increase tail risk. The Glosten-Milgrom framework predicts equilibrium spread P&L = equilibrium adverse-selection cost, with the residual being the fee for intermediation services. Once you are at the residual, scaling capital is not a free lunch.',
        id: 'Data nunjukin desk itu operating near-equilibrium: gross spread captured (USD 2M) hampir seluruhnya di-offset sama adverse-selection loss (USD 1.8M), jadi net intermediation profit (USD 200k) itu residual setelah bayar information rent. Ini konsisten sama prediksi Glosten-Milgrom bahwa di competitive market, spread P&L harusnya approximately equal adverse-selection cost — residual-nya itu fee MM buat intermediation services.\n\nDouble alokasi kapital itu risky buat beberapa alasan. Pertama, offset 90% suggest desk-nya operating dekat competitive equilibrium; scaling gak akan ngehasilin 2× residual P&L kecuali desk punya unique informational edge yang justify itu. Kedua, position size yang lebih gede akan hadapin LEBIH banyak adverse selection per dollar — pas desk tampilin size yang lebih gede, informed counterpart akan lebih aggressively target dia (flow desk-nya jadi prey yang lebih attractive). Adverse-selection drift akan scale faster dari spread P&L. Ketiga, kalau market regime shift ke information asymmetry yang lebih tinggi (misalnya pas news event), spread P&L desk gak akan compensate adverse-selection drift yang naik, dan desk bisa swing ke loss lebih cepat dari di setengah size-nya.\n\nArgument yang sound buat firm itu: scale doang kalau ada evidence of unique edge (misalnya signal quality lebih bagus, reaction lebih cepat, structural privilege di flow) yang justify non-equilibrium return. Kalau desk-nya operating di competitive level — yang angka-nya suggest — double kapital gak akan double profit tapi akan naikin tail risk. Framework Glosten-Milgrom predict equilibrium spread P&L = equilibrium adverse-selection cost, dengan residual jadi fee buat intermediation services. Begitu kamu di residual, scaling kapital bukan free lunch.'
      }
    },
  ],
};
