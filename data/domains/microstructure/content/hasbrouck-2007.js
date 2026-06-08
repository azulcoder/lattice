export const CONTENT = {
  itemId: 'hasbrouck-2007',
  estimatedReadMinutes: 38,

  // Author frontmatter. Rendered as collapsible card above sections.
  // Bilingual fields populated Phase 1.3; en filled now.
  author: {
    fullName: { en: 'Joel Hasbrouck', id: 'Joel Hasbrouck' },
    affiliation: {
      en: 'Kenneth G. Langone Professor of Business Administration and Professor of Finance, NYU Stern School of Business (joined 1983)',
      id: 'Kenneth G. Langone Professor of Business Administration dan Professor of Finance, NYU Stern School of Business (gabung sejak 1983)'
    },
    tagline: {
      en: 'Pioneer of empirical market microstructure — taught a generation how to separate signal from noise in trade data.',
      id: 'Pionir empirical market microstructure — ngajarin satu generasi gimana misahin signal dari noise di trade data.'
    },
    bio: {
      en: `Joel Hasbrouck is one of the founding figures of empirical market microstructure as a quantitative discipline. He has been at NYU Stern since 1983, and through more than four decades has shaped how academics and practitioners measure liquidity, decompose order flow, and quantify price discovery across linked venues. His writing tends to favor patient explanation over flourish — the 2007 textbook is a case in point — and his methodological contributions (especially VAR-based decomposition of trade impact) have become standard tooling in modern market microstructure research and applied execution work.`,
      id: `Joel Hasbrouck salah satu founding figure di empirical market microstructure sebagai disiplin kuantitatif. Dia di NYU Stern sejak 1983, dan lebih dari empat dekade udah ngebentuk gimana akademisi dan praktisi ngukur liquidity, decompose order flow, dan kuantifikasi price discovery lintas venue. Gaya nulisnya cenderung patient explanation daripada flourish — textbook 2007-nya jadi contoh. Kontribusi metodologis-nya (terutama VAR-based decomposition of trade impact) udah jadi standard tooling di research microstructure modern dan kerja eksekusi terapan.`
    },
    focus: {
      en: `Hasbrouck's research centers on the analysis, design, and regulation of trading mechanisms for securities. Recurring themes: separating the efficient (information-driven) component of price from microstructure noise, quantifying how informed trading transmits into observed prices, and measuring relative contributions to price discovery when the same security trades in multiple markets simultaneously.`,
      id: `Riset Hasbrouck berputar di analisis, design, dan regulasi mekanisme trading securities. Tema yang berulang: misahin komponen efficient (information-driven) dari microstructure noise, kuantifikasi gimana informed trading nyebar ke observed price, dan ngukur kontribusi relatif ke price discovery kalau security yang sama trade di banyak market bersamaan.`
    },
    intellectualLineage: {
      en: `PhD in Finance from the Wharton School, University of Pennsylvania. Hasbrouck belongs to the first generation of microstructure researchers who took the foundational theoretical models of the late 1970s and 1980s (Glosten-Milgrom, Kyle, Stoll, Garman) and built rigorous empirical methodology around them. Where the theorists asked "what should we observe under model X?", Hasbrouck's research program asked the operational follow-up: "given observed trade and quote data, how do we estimate the latent components the theory predicts?"`,
      id: `PhD Finance dari Wharton School, University of Pennsylvania. Hasbrouck termasuk generasi pertama peneliti microstructure yang ngambil model teoritis foundational dari akhir 1970-an dan 1980-an (Glosten-Milgrom, Kyle, Stoll, Garman) dan bangun metodologi empiris yang ketat di atasnya. Kalau theorist nanya "apa yang harusnya kita observe di bawah model X?", program riset Hasbrouck nanyain follow-up operasionalnya: "given data trade dan quote yang kita punya, gimana kita estimate komponen laten yang teori-nya prediksi?"`
    },
    keyCollaborators: {
      en: `Hasbrouck shares the founding-generation peer group with **Maureen O'Hara** (Cornell), **Larry Glosten** (Columbia), and **Ananth Madhavan** (later BlackRock), all of whom he overlaps with extensively in editorial work, conference circuits, and the broader empirical-microstructure research program. Direct co-authorship has been broad rather than concentrated — his pattern is single-author papers with deep methodological contribution, rather than long-running joint research streams.`,
      id: `Hasbrouck satu peer group dengan **Maureen O'Hara** (Cornell), **Larry Glosten** (Columbia), dan **Ananth Madhavan** (kemudian BlackRock) — generasi founder microstructure yang dia overlap intensif lewat kerja editorial, conference circuit, dan program riset empirical-microstructure yang lebih luas. Co-authorship langsungnya broad tapi gak terkonsentrasi — pattern-nya lebih ke single-author paper yang punya kontribusi metodologis dalam, bukan joint research stream panjang.`
    },
    legacy: {
      en: `The methodological discipline visible across his work — start from a theoretical decomposition, build an econometric estimator, validate on real data, then refine — is what makes his work durable. The information-share methodology (Hasbrouck 1995) is still the default benchmark for cross-venue price discovery studies thirty years later. The 2007 textbook taught a generation how to think about empirical microstructure as a coherent quantitative subject rather than a collection of stylized facts. Reading Hasbrouck is reading the operating manual.`,
      id: `Disiplin metodologis yang kelihatan di semua kerjanya — mulai dari decomposition teoritis, bangun econometric estimator, validate di real data, terus refine — itu yang bikin kerjanya tahan lama. Information-share methodology (Hasbrouck 1995) masih default benchmark buat studi price discovery lintas venue 30 tahun kemudian. Textbook 2007 ngajarin satu generasi gimana mikir empirical microstructure sebagai subject kuantitatif yang koheren, bukan kumpulan stylized fact aja. Baca Hasbrouck itu kayak baca operating manual.`
    },
    keyWorks: [
      { year: 1991, title: 'Measuring the Information Content of Stock Trades', venue: 'Journal of Finance' },
      { year: 1995, title: 'One Security, Many Markets: Determining the Contributions to Price Discovery', venue: 'Journal of Finance' },
      { year: 2007, title: 'Empirical Market Microstructure (this item)', venue: 'Oxford University Press' },
      { year: 2009, title: 'Trading Costs and Returns for U.S. Equities: Estimating Effective Costs from Daily Data', venue: 'Journal of Finance' },
    ],
  },

  sections: [
    // ─────────────── 1. motivation ───────────────
    {
      id: 'motivation',
      heading: { en: 'Why this matters', id: 'Kenapa ini penting' },
      body: {
        en: `In market microstructure we draw a sharp line between two prices that look alike but behave differently: the **efficient price** — what a fully informed observer would call the asset's expected value given all public information — and the **observed transaction price**, the print you actually see on the tape.

These diverge because trades happen at quotes (bid or ask), not at the midpoint. The act of trading itself injects noise: bid-ask bounce, latency, tick discreteness, inventory effects. As a result, observed price series exhibit serial correlation that has nothing to do with fundamentals.

Failing to model this gap leads to real-money errors. Realized volatility estimators inflate. HFT signals fire on bounce-driven mean reversion that isn't there. Execution algorithms over-cross the spread to chase phantom moves. Roll's contribution was to give us a clean way to back out the spread from price series alone — isolating microstructure noise from fundamental movement.`,
        id: `Di market microstructure kita kasih garis tegas antara dua harga yang keliatan sama tapi behave-nya beda: **efficient price** — yaitu expected value dari asset menurut observer yang punya semua public information — dan **observed transaction price**, yaitu print yang muncul di tape.

Keduanya beda karena trade kejadian di quote (bid atau ask), bukan di midpoint. Tindakan trading itu sendiri masukin noise: bid-ask bounce, latency, tick discreteness, inventory effects. Akibatnya, observed price series punya serial correlation yang gak ada hubungannya sama fundamental.

Gak modelin gap ini bisa bikin error mahal. Realized volatility estimator-nya inflate. Sinyal HFT firing di mean reversion yang sebenernya cuma bounce. Algoritma eksekusi over-cross spread ngejar move yang gak nyata. Kontribusi Roll: kasih cara bersih buat back out spread dari price series doang — misahin microstructure noise dari fundamental movement.`
      }
    },

    // ─────────────── 2. intuition ───────────────
    {
      id: 'intuition',
      heading: { en: 'Intuition', id: 'Intuisi' },
      body: {
        en: `Picture a stock trading peacefully, no news. The "true" value drifts slowly — smooth, hard to see directly. What you observe instead is a strobe-light snapshot at each trade: the actual print lands at either bid or ask, depending on whether the trade was buyer- or seller-initiated.

If buys and sells alternate roughly randomly, the prints zig-zag around the midpoint by half the spread. Charted over time, you see a series of small reversals on top of the underlying drift. This is the **bid-ask bounce**, and it makes observed prices look like they mean-revert from minute to minute even when the true value isn't moving.

The mean-reversion magnitude tells you something useful: it's directly proportional to the spread. A wide market = big bounce. A tight market = small bounce. If you can measure how much the price tends to flip direction from one trade to the next, you can back out the spread without ever needing to see the quotes — just the trade prints. That's the trick Roll exploited.`,
        id: `Bayangin satu stock lagi trade tenang, gak ada news. "True" value-nya drift pelan — smooth, susah keliatan langsung. Yang kamu observe malah strobe-light snapshot tiap trade: print aktualnya landing di bid atau ask, tergantung trade-nya buyer- atau seller-initiated.

Kalau buy sama sell ganti-gantian random-ish, print-nya zig-zag muter midpoint sebesar setengah spread. Di-plot over time, kamu lihat series reversal kecil-kecil di atas underlying drift. Ini **bid-ask bounce**, dan ini yang bikin observed price kelihatan mean-revert dari menit ke menit padahal true value-nya gak gerak.

Magnitude mean-reversion-nya kasih info penting: dia proporsional langsung sama spread. Market lebar = bounce gede. Market ketat = bounce kecil. Kalau kamu bisa ngukur seberapa sering price flip arah dari satu trade ke berikutnya, kamu bisa back out spread tanpa perlu liat quote — cukup trade print aja. Itu trick yang Roll pakai.`
      }
    },

    // ─────────────── 3. formalization (expanded) ───────────────
    {
      id: 'formalization',
      heading: { en: 'Formal model', id: 'Model formal' },
      body: {
        en: `We need a baseline for what "no information" looks like — a price process that already reflects everything publicly known, so that any future moves are pure innovation. The cleanest mathematical primitive for this is a **martingale**: a process whose best forecast tomorrow is today's value, conditional on what's known now.

Let $m_t$ denote the **efficient price** at time $t$. Model it as a martingale:

$$\\mathbb{E}[m_{t+1} \\mid \\mathcal{F}_t] = m_t$$

where $\\mathcal{F}_t$ is the public information set available at time $t$. This is the model's first commitment: the efficient price has no predictable component. Any innovation $\\Delta m_t = m_t - m_{t-1}$ is uncorrelated with all past public information — in particular, uncorrelated with past trade directions.

Now we add the bridge between the unobserved efficient price and what we actually see printed on the tape. Decompose the observed transaction price:

$$p_t = m_t + \\frac{s}{2} q_t$$

The interpretation is mechanical. $s$ is the (constant) bid-ask spread. $q_t \\in \\{-1, +1\\}$ is the trade-direction indicator: $+1$ when the trade hits the ask (buyer-initiated), $-1$ when it hits the bid (seller-initiated). So $p_t$ equals the unobserved efficient price shifted by exactly half the spread in the direction of the trade. A buyer pays $m + s/2$; a seller receives $m - s/2$. This step is where the spread enters the data.

The third commitment is the Roll assumption: $q_t$ is i.i.d. with $\\mathbb{E}[q_t] = 0$ and $\\text{Var}(q_t) = 1$. Symmetric, no memory. (This is the assumption that real-world data breaks, and which Practice problem 3 examines.)

Why first differences and not levels? Because we want stationarity — levels of $p_t$ drift over time as the efficient price evolves, but their changes (returns) are roughly stable in distribution, which makes covariance computations meaningful. Take first differences:

$$\\Delta p_t = \\Delta m_t + \\frac{s}{2}(q_t - q_{t-1})$$

We pick lag-1 autocovariance specifically (not lag-2 or higher) because Roll's mechanism only generates one-step autocorrelation — the trade direction at time $t$ affects price at $t$ via the $(s/2) q_t$ shift, but it doesn't affect prices at $t-2$ or earlier directly. The bid-ask bounce is a single-step phenomenon, so that's where the signal lives. Compute it:

$$\\text{Cov}(\\Delta p_t, \\Delta p_{t-1}) = \\text{Cov}\\Big(\\Delta m_t + \\tfrac{s}{2}(q_t - q_{t-1}),\\ \\Delta m_{t-1} + \\tfrac{s}{2}(q_{t-1} - q_{t-2})\\Big)$$

There are four covariance terms when you distribute. Three of them are zero:

- $\\text{Cov}(\\Delta m_t, \\Delta m_{t-1}) = 0$ — by the martingale property, consecutive efficient-price innovations are uncorrelated.
- $\\text{Cov}(\\Delta m_t, q_{t-1} - q_{t-2}) = 0$ — $\\Delta m_t$ is uncorrelated with all past public information, which includes past trade signs.
- $\\text{Cov}(q_t - q_{t-1}, \\Delta m_{t-1}) = 0$ — same logic, $\\Delta m_{t-1}$ is uncorrelated with future trade signs $q_t$ (and with $q_{t-1}$ under the Roll assumption that trade direction is exogenous).

Only the pure trade-direction term survives:

$$\\text{Cov}(\\Delta p_t, \\Delta p_{t-1}) = \\left(\\frac{s}{2}\\right)^2 \\mathbb{E}[(q_t - q_{t-1})(q_{t-1} - q_{t-2})]$$

Now expand the product inside the expectation. There are four sub-products; under iid $q$ with $\\mathbb{E}[q^2] = 1$ and $\\mathbb{E}[q_t q_{t-k}] = 0$ for $k \\neq 0$, only one survives:

- $\\mathbb{E}[q_t q_{t-1}] = 0$
- $\\mathbb{E}[q_t q_{t-2}] = 0$
- $\\mathbb{E}[-q_{t-1}^2] = -1$ ← the surviving term
- $\\mathbb{E}[q_{t-1} q_{t-2}] = 0$

So:

$$\\text{Cov}(\\Delta p_t, \\Delta p_{t-1}) = -\\left(\\frac{s}{2}\\right)^2$$

Solving for $s$ gives Roll's estimator:

$$\\boxed{s = 2\\sqrt{-\\text{Cov}(\\Delta p_t, \\Delta p_{t-1})}}$$

The formula is well-defined only when the autocovariance is negative — which, under the iid assumption, it always is. If you compute a positive autocovariance from real data, the model has failed: trades aren't independent, or there's no spread to extract from the bounce.`,
        id: `Kita butuh baseline buat "no information" — sebuah price process yang udah reflect semua public info, jadi future moves murni innovation. Primitif matematika paling bersih buat ini: **martingale** — process yang best forecast besok-nya = nilai hari ini, conditional ke yang udah diketahui sekarang.

Misalkan $m_t$ menandakan **efficient price** pada waktu $t$. Model sebagai martingale:

$$\\mathbb{E}[m_{t+1} \\mid \\mathcal{F}_t] = m_t$$

dimana $\\mathcal{F}_t$ itu set public information yang tersedia di waktu $t$. Ini commitment pertama model: efficient price gak punya komponen yang predictable. Innovation apa pun $\\Delta m_t = m_t - m_{t-1}$ uncorrelated sama semua past public information — termasuk past trade direction.

Sekarang kita kasih bridge antara unobserved efficient price dan apa yang muncul di tape. Decompose observed transaction price:

$$p_t = m_t + \\frac{s}{2} q_t$$

Interpretasinya mekanis. $s$ itu (constant) bid-ask spread. $q_t \\in \\{-1, +1\\}$ trade-direction indicator: $+1$ kalau trade kena ask (buyer-initiated), $-1$ kalau kena bid (seller-initiated). Jadi $p_t$ sama dengan unobserved efficient price yang di-shift exactly setengah spread di arah trade. Buyer bayar $m + s/2$; seller terima $m - s/2$. Step inilah tempat spread masuk ke data.

Commitment ketiga: Roll assumption — $q_t$ itu i.i.d. dengan $\\mathbb{E}[q_t] = 0$ dan $\\text{Var}(q_t) = 1$. Simetris, no memory. (Ini asumsi yang real-world data biasanya langgar, dan yang Practice problem 3 ngebahas.)

Kenapa first difference, bukan level? Karena kita mau stationarity — level $p_t$ drift over time karena efficient price evolve, tapi perubahan-nya (return) roughly stable di distribusi, jadi covariance computation jadi meaningful. Ambil first difference:

$$\\Delta p_t = \\Delta m_t + \\frac{s}{2}(q_t - q_{t-1})$$

Kita pilih lag-1 autocovariance specifically (bukan lag-2 atau lebih tinggi) karena mekanisme Roll cuma generate one-step autocorrelation — trade direction di waktu $t$ ngaruh ke price di $t$ via shift $(s/2) q_t$, tapi gak ngaruh langsung ke price di $t-2$ atau sebelumnya. Bid-ask bounce itu phenomenon one-step, jadi disitu sinyalnya. Hitung:

$$\\text{Cov}(\\Delta p_t, \\Delta p_{t-1}) = \\text{Cov}\\Big(\\Delta m_t + \\tfrac{s}{2}(q_t - q_{t-1}),\\ \\Delta m_{t-1} + \\tfrac{s}{2}(q_{t-1} - q_{t-2})\\Big)$$

Ada empat covariance term kalau di-distribute. Tiga di antaranya nol:

- $\\text{Cov}(\\Delta m_t, \\Delta m_{t-1}) = 0$ — by martingale property, consecutive efficient-price innovation uncorrelated.
- $\\text{Cov}(\\Delta m_t, q_{t-1} - q_{t-2}) = 0$ — $\\Delta m_t$ uncorrelated sama semua past public info, termasuk past trade sign.
- $\\text{Cov}(q_t - q_{t-1}, \\Delta m_{t-1}) = 0$ — logika sama, $\\Delta m_{t-1}$ uncorrelated sama future trade sign $q_t$ (dan sama $q_{t-1}$ di bawah Roll assumption bahwa trade direction itu exogenous).

Cuma pure trade-direction term yang survive:

$$\\text{Cov}(\\Delta p_t, \\Delta p_{t-1}) = \\left(\\frac{s}{2}\\right)^2 \\mathbb{E}[(q_t - q_{t-1})(q_{t-1} - q_{t-2})]$$

Sekarang expand product di dalam expectation. Ada empat sub-product; di bawah iid $q$ dengan $\\mathbb{E}[q^2] = 1$ dan $\\mathbb{E}[q_t q_{t-k}] = 0$ untuk $k \\neq 0$, cuma satu yang survive:

- $\\mathbb{E}[q_t q_{t-1}] = 0$
- $\\mathbb{E}[q_t q_{t-2}] = 0$
- $\\mathbb{E}[-q_{t-1}^2] = -1$ ← term yang survive
- $\\mathbb{E}[q_{t-1} q_{t-2}] = 0$

Jadi:

$$\\text{Cov}(\\Delta p_t, \\Delta p_{t-1}) = -\\left(\\frac{s}{2}\\right)^2$$

Solving buat $s$ ngasih Roll's estimator:

$$\\boxed{s = 2\\sqrt{-\\text{Cov}(\\Delta p_t, \\Delta p_{t-1})}}$$

Formula well-defined cuma kalau autocovariance-nya negatif — yang di bawah iid assumption, selalu begitu. Kalau kamu hitung autocovariance positif dari real data, model-nya failed: trade gak independen, atau gak ada spread buat di-extract dari bounce.`
      }
    },

    // ─────────────── 4. worked-example ───────────────
    {
      id: 'worked-example',
      heading: { en: 'Worked example', id: 'Contoh kerjaan' },
      visualization: {
        id: 'roll-spread-simulator',
        component: 'RollSpreadSim',
        title: {
          en: "Roll's spread under controlled order flow",
          id: "Roll's spread di bawah order flow yang terkontrol"
        },
        description: {
          en: "Adjust spread and the latent-flow persistence ρ to see how Roll's estimator behaves under iid vs persistent order flow. Note: ρ sets the *latent* AR(1) persistence — the realized trade-sign autocorrelation is (2/π)·arcsin(ρ), so the on-screen bias is milder than s·|1−ρ| would suggest (e.g. ρ=0.4 → about a ~26% underestimate on average, not 40%). Watch the bias grow as ρ rises — the visual proof of Practice problem 3.",
          id: "Geser spread sama persistensi latent-flow ρ buat lihat gimana Roll's estimator behave di bawah iid vs order flow yang persistent. Catat: ρ nge-set persistensi AR(1) *laten* — autocorrelation trade-sign yang realized itu (2/π)·arcsin(ρ), jadi bias di layar lebih mild dari yang s·|1−ρ| suggest (misal ρ=0.4 → underestimate sekitar ~26% rata-rata, bukan 40%). Perhatikan bias-nya naik pas ρ naik — bukti visual dari Practice problem 3."
        },
        defaultParams: { s: 0.10, rho: 0.0, nSamples: 1000, seed: 12345 },
        height: 380,
      },
      body: {
        en: `Take 1-minute transaction-price (trade-print) changes for BTC/USDT on Binance over a representative one-hour window. (Numbers below are illustrative — the calculation is what matters.) Roll's estimator works on trade prices, not midquotes: the bid-ask bounce that drives the negative autocovariance lives in the trade prints, not in the mid.

Suppose the sample lag-1 autocovariance is $\\widehat{\\text{Cov}}(\\Delta p_t, \\Delta p_{t-1}) = -3.2 \\times 10^{-3} \\ \\text{USD}^2$.

Apply Roll's estimator:

$$\\hat{s} = 2\\sqrt{3.2 \\times 10^{-3}} \\approx 2 \\times 0.0566 \\approx 0.113 \\ \\text{USD}$$

So Roll attributes about **11.3 cents** of spread to this market at this resolution.

For cross-check, the directly observable mean quoted spread (ask minus bid, averaged across the window) would typically come in around $0.10$ to $0.15$ — Roll's estimate is in the right ballpark.

When the numbers diverge sharply, that's diagnostic. It tells you the iid-direction assumption is violated. Crypto venues often have positively autocorrelated order flow (institutional orders sliced across minutes, momentum following), which biases Roll downward — see Practice problem 3.`,
        id: `Ambil 1-menit transaction-price (trade-print) change buat BTC/USDT di Binance over satu-jam window representatif. (Angka di bawah ilustratif — yang penting calculation-nya.) Roll's estimator jalan di trade price, bukan midquote: bid-ask bounce yang nyetir negative autocovariance itu ada di trade print, bukan di mid.

Misalkan sample lag-1 autocovariance: $\\widehat{\\text{Cov}}(\\Delta p_t, \\Delta p_{t-1}) = -3.2 \\times 10^{-3} \\ \\text{USD}^2$.

Apply Roll's estimator:

$$\\hat{s} = 2\\sqrt{3.2 \\times 10^{-3}} \\approx 2 \\times 0.0566 \\approx 0.113 \\ \\text{USD}$$

Jadi Roll attribute sekitar **11.3 cents** spread buat market ini di resolusi tersebut.

Cross-check: mean quoted spread yang langsung di-observe (ask minus bid, di-average sepanjang window) biasanya muncul di sekitar $0.10$-$0.15$ — Roll's estimate-nya di range yang bener.

Kalau angkanya divergen tajam, itu diagnostic. Tells us iid-direction assumption-nya dilanggar. Crypto venue sering punya positively autocorrelated order flow (institutional order di-slice antar menit, momentum following), yang bias Roll ke bawah — lihat Practice problem 3.`
      }
    },

    // ─────────────── 5. applications (NEW) ───────────────
    {
      id: 'applications',
      heading: { en: 'Applications by audience', id: 'Aplikasi per audience' },
      body: {
        en: `This section walks from where the research frontier is moving, through practitioner-level deployment, down to the trading desk. Pick whichever entry point matches your current need.

### For the advanced researcher

Roll is the entry point to the broader project of decomposing observed price into [efficient price + microstructure noise]. Hasbrouck's own subsequent work — information share for cross-venue price discovery (1995), VAR-based decomposition of trade impact into permanent and transitory components (1991) — extends this decomposition to multi-venue and multi-frequency settings. The larger research agenda: separate fundamental from frictional components of returns so you can test efficient-markets hypotheses with realistic noise structures, study price discovery across linked markets (cash vs futures, lit vs dark, primary vs ATS), or build latent-price filters for HFT research at sub-second timescales where bid-ask bounce dominates observed return variance.

### For the quant practitioner

Realistic backtests need transaction-cost models. Roll lets you estimate effective spread from historical print data even when you don't have full quote data — useful for market-data corners where quotes are sparse, missing, or unreliable. Cross-check Roll versus directly observed spread: large gaps signal order-flow autocorrelation, which is a marker of informed flow or institutional crowding. Practical uses: sizing execution costs in strategy P&L attribution, detecting regimes where adverse selection dominates and Roll diverges from quoted spread, calibrating market-impact models before deploying live capital, and constructing realistic fills in event-driven backtests where quote-level data is unavailable.

For specific practitioner workflows — calibrating VWAP/TWAP execution algorithms across timeframes by re-estimating effective spread per regime; detecting regime shifts in BTC or IHSG order flow microstructure where Roll-vs-quoted gap widens systematically; building synthetic effective spread for exotic crypto pairs where Level-2 data is sparse or unreliable; cross-asset comparison for relative liquidity assessment (is SOL really 3x more expensive to trade than BTC after accounting for typical trade size?); using Roll-vs-quoted gap as a real-time filter to identify "informed flow active" windows for passive market-making strategies to avoid; and incorporating Roll-derived spreads into transaction-cost modeling in backtests where historical order book reconstruction is incomplete.

### For the retail trader

Bid-ask bounce explains why your "1.5% gain" on a small-cap stock might be illusory — half of that move could just be the round-trip from bid to ask. When the spread is 30 bps and you buy at the ask and sell at the bid, you start 60 bps in the hole before the "true" price has moved at all. Roll's estimator gives you a back-of-envelope way to gauge a market's effective spread from price prints alone, useful when assessing whether an asset is cheap to trade, or whether your fill-price drift is bounce noise versus real movement. The takeaway: at small position sizes you are paying the bid-ask cost twice on each round-trip — and on illiquid names, that's often larger than the alpha you think you're capturing.`,
        id: `Section ini jalan dari mana research frontier lagi bergerak, lewat practitioner-level deployment, sampai turun ke trading desk. Pilih entry point yang match sama kebutuhan kamu sekarang.

### Untuk advanced researcher

Roll itu entry point ke project lebih luas: decompose observed price jadi [efficient price + microstructure noise]. Kerja Hasbrouck setelahnya — information share buat cross-venue price discovery (1995), VAR-based decomposition trade impact jadi komponen permanent dan transitory (1991) — extend decomposition ini ke setting multi-venue dan multi-frequency. Research agenda yang lebih besar: misahin komponen fundamental dari frictional di return, biar kamu bisa test efficient-markets hypothesis dengan noise structure realistis, study price discovery lintas linked market (cash vs futures, lit vs dark, primary vs ATS), atau bangun latent-price filter buat HFT research di sub-second timescale dimana bid-ask bounce dominate observed return variance.

### Untuk quant practitioner

Backtest realistis butuh transaction-cost model. Roll ngebolehin kamu estimate effective spread dari historical print data bahkan ketika kamu gak punya full quote data — berguna buat market-data corner yang quote-nya sparse, missing, atau unreliable. Cross-check Roll vs directly observed spread: gap besar nge-signal order-flow autocorrelation, marker informed flow atau institutional crowding. Use case praktis: sizing execution cost di P&L attribution strategy, deteksi regime yang adverse selection dominate dan Roll diverge dari quoted spread, kalibrasi market-impact model sebelum deploy live capital, dan construct realistic fill di event-driven backtest yang quote-level data-nya gak ada.

Buat workflow practitioner specific — kalibrasi VWAP/TWAP execution algorithm lintas timeframe dengan re-estimate effective spread per regime; deteksi regime shift di BTC atau IHSG order flow microstructure dimana Roll-vs-quoted gap melebar sistematis; bangun synthetic effective spread buat exotic crypto pair yang Level-2 data-nya sparse atau unreliable; cross-asset comparison buat relative liquidity assessment (apa SOL beneran 3x lebih mahal di-trade daripada BTC setelah akun typical trade size?); pakai Roll-vs-quoted gap sebagai real-time filter buat identify "informed flow active" window yang passive market-making strategy mestinya avoid; dan incorporate Roll-derived spread ke transaction-cost modeling di backtest yang historical order book reconstruction-nya incomplete.

### Untuk retail trader

Bid-ask bounce ngejelasin kenapa "1.5% gain" kamu di small-cap stock bisa illusory — setengah dari move itu mungkin cuma round-trip dari bid ke ask. Kalau spread-nya 30 bps dan kamu beli di ask trus jual di bid, kamu start 60 bps di posisi minus sebelum "true" price gerak sama sekali. Roll's estimator kasih cara back-of-envelope buat gauge effective spread market dari price print doang — berguna kalau lagi assess apakah satu asset murah buat di-trade, atau apakah fill-price drift kamu itu bounce noise vs real movement. Take-away-nya: di position size kecil kamu bayar bid-ask cost dua kali tiap round-trip — dan di illiquid name, itu sering lebih besar dari alpha yang kamu kira lagi capture.`
      }
    },

    // ─────────────── 6. practice ───────────────
    {
      id: 'practice',
      heading: { en: 'Practice', id: 'Latihan' },
      body: {
        en: `**1.** Given $\\widehat{\\text{Cov}}(\\Delta p_t, \\Delta p_{t-1}) = -2.5 \\times 10^{-6} \\ \\text{USD}^2$, compute Roll's implied spread.

<details><summary>Answer</summary>
$\\hat{s} = 2\\sqrt{2.5 \\times 10^{-6}} = 2 \\times 1.58 \\times 10^{-3} \\approx 0.00316 \\ \\text{USD}$, or about 0.32 cents.
</details>

**2.** Roll's model assumes trade direction is i.i.d. Name two real-world mechanisms that violate this.

<details><summary>Answer</summary>
(a) **Order splitting** — large institutional parents are sliced into many child orders by execution algorithms (VWAP, POV), creating short-run autocorrelation in trade direction on the same side. (b) **Information-driven persistence** — when a trader has private information about value, they trade in the same direction repeatedly until the information is incorporated into price or they're done. Glosten-Milgrom-style adverse selection naturally generates positive autocorrelation in $q_t$.
</details>

**3.** Show that when trade direction has positive autocorrelation $\\rho > 0$ at lag 1, Roll's estimator **underestimates** the true spread.

<details><summary>Answer</summary>
Under positive autocorrelation, the variance of $q_t - q_{t-1}$ decreases, so the magnitude of $\\text{Cov}(\\Delta p_t, \\Delta p_{t-1})$ shrinks. Plugging a smaller absolute value into $2\\sqrt{|\\text{Cov}|}$ yields a smaller spread estimate.

More precisely: under $\\text{Corr}(q_t, q_{t-1}) = \\rho$, the formula generalizes to $\\hat{s}_{\\text{Roll}} = s \\cdot |1 - \\rho|$, which is less than $s$ whenever $0 < \\rho < 1$. Real-world markets generally have $\\rho > 0$ (institutional flow, informed trading), so Roll tends to underestimate quoted spread in practice.
</details>

**4.** Implement Roll's estimator on 10-minute resampled prints from BTC/USDT, ETH/USDT, and SOL/USDT over the same week. Compare. Which asset shows the biggest Roll-vs-quoted-spread gap, and why?

<details><summary>Answer (sketch)</summary>
Open-ended — work this on your own data. Look for assets where Roll significantly underestimates the quoted spread: that's a signal of order-flow autocorrelation, often a marker of institutional flow concentration or directional informed trading. Smaller-cap altcoins typically show larger gaps than BTC.
</details>`,
        id: `**1.** Given $\\widehat{\\text{Cov}}(\\Delta p_t, \\Delta p_{t-1}) = -2.5 \\times 10^{-6} \\ \\text{USD}^2$, hitung Roll's implied spread.

<details><summary>Jawaban</summary>
$\\hat{s} = 2\\sqrt{2.5 \\times 10^{-6}} = 2 \\times 1.58 \\times 10^{-3} \\approx 0.00316 \\ \\text{USD}$, atau sekitar 0.32 cents.
</details>

**2.** Roll's model assume trade direction itu i.i.d. Sebutin dua mekanisme real-world yang langgar ini.

<details><summary>Jawaban</summary>
(a) **Order splitting** — institutional parent order besar di-slice jadi banyak child order sama algoritma eksekusi (VWAP, POV), bikin short-run autocorrelation di trade direction sisi yang sama. (b) **Information-driven persistence** — kalau trader punya private information tentang value, dia trade di arah yang sama berulang-ulang sampai info-nya kebawa ke price atau dia kelar. Glosten-Milgrom-style adverse selection naturally generate positive autocorrelation di $q_t$.
</details>

**3.** Tunjukin kalau trade direction punya positive autocorrelation $\\rho > 0$ di lag 1, Roll's estimator **underestimate** true spread.

<details><summary>Jawaban</summary>
Di bawah positive autocorrelation, variance dari $q_t - q_{t-1}$ berkurang, jadi magnitude $\\text{Cov}(\\Delta p_t, \\Delta p_{t-1})$ ngecil. Plug nilai absolute yang lebih kecil ke $2\\sqrt{|\\text{Cov}|}$ ngasih spread estimate yang lebih kecil.

Lebih tepatnya: di bawah $\\text{Corr}(q_t, q_{t-1}) = \\rho$, formula-nya generalize jadi $\\hat{s}_{\\text{Roll}} = s \\cdot |1 - \\rho|$, yang lebih kecil dari $s$ tiap kali $0 < \\rho < 1$. Real-world market umumnya punya $\\rho > 0$ (institutional flow, informed trading), jadi Roll cenderung underestimate quoted spread di praktiknya.
</details>

**4.** Implement Roll's estimator di 10-menit resampled print dari BTC/USDT, ETH/USDT, dan SOL/USDT over the same week. Bandingin. Asset mana yang nunjukin gap Roll-vs-quoted-spread paling gede, dan kenapa?

<details><summary>Jawaban (sketch)</summary>
Open-ended — kerjain di data kamu sendiri. Cari asset yang Roll-nya significantly underestimate quoted spread: itu signal order-flow autocorrelation, sering marker dari institutional flow concentration atau directional informed trading. Smaller-cap altcoin biasanya nunjukin gap yang lebih besar daripada BTC.
</details>`
      }
    },

    // ─────────────── 7. connections ───────────────
    {
      id: 'connections',
      heading: { en: 'Connections', id: 'Koneksi' },
      body: {
        en: `- **Prereqs**: none — Hasbrouck Ch 1-3 is the foundation entry point for everything else in this domain.
- **Builds toward**: [Glosten-Milgrom 1985](item:glosten-milgrom-1985) formalizes how informed trading creates the spread Roll measures. [Cont-Kukanov-Stoikov 2014](item:cont-kukanov-stoikov-2014) replaces trade-based autocorrelation with order book event flow (OFI), tightening R² at high frequency. [Easley-López de Prado-O'Hara 2012](item:easley-lopez-prado-vpin) introduces VPIN as a refined order flow toxicity measure that subsumes Roll-style bounce decomposition.
- **Related cards**: 15 cards from these chapters are in your Foundation review queue. They cover efficient price definition, the bid-ask bounce mechanism, Roll derivation steps, and bid-ask decomposition components. Filter by item in the cards list below.`,
        id: `- **Prereqs**: gak ada — Hasbrouck Ch 1-3 itu foundation entry point buat semua yang lain di domain ini.
- **Builds toward**: [Glosten-Milgrom 1985](item:glosten-milgrom-1985) formalize gimana informed trading nge-create spread yang Roll ukur. [Cont-Kukanov-Stoikov 2014](item:cont-kukanov-stoikov-2014) ganti trade-based autocorrelation dengan order book event flow (OFI), tighten R² di high frequency. [Easley-López de Prado-O'Hara 2012](item:easley-lopez-prado-vpin) ngenalin VPIN sebagai refined order flow toxicity measure yang subsume Roll-style bounce decomposition.
- **Related cards**: 15 cards dari chapter ini ada di review queue Foundation kamu. Cover-nya: efficient price definition, mekanisme bid-ask bounce, Roll derivation step, dan bid-ask decomposition component. Filter by item di card list bawah.`
      }
    },

    // ─────────────── 8. sources ───────────────
    {
      id: 'sources',
      heading: { en: 'Sources', id: 'Sumber' },
      body: {
        en: `- **Hasbrouck, J.** (2007). *Empirical Market Microstructure: The Institutions, Economics, and Econometrics of Securities Trading.* Oxford University Press. Chapters 1-3 are the primary basis for this content.
- **Roll, R.** (1984). "A Simple Implicit Measure of the Effective Bid-Ask Spread in an Efficient Market." *Journal of Finance*, 39(4), 1127-1139. The original paper introducing the spread estimator.
- **Madhavan, A.** (2000). "Market Microstructure: A Survey." *Journal of Financial Markets*, 3(3), 205-258. A broader survey contextualizing Roll's place in the microstructure literature.`,
        id: `- **Hasbrouck, J.** (2007). *Empirical Market Microstructure: The Institutions, Economics, and Econometrics of Securities Trading.* Oxford University Press. Chapter 1-3 jadi basis utama konten ini.
- **Roll, R.** (1984). "A Simple Implicit Measure of the Effective Bid-Ask Spread in an Efficient Market." *Journal of Finance*, 39(4), 1127-1139. Paper original yang ngenalin spread estimator.
- **Madhavan, A.** (2000). "Market Microstructure: A Survey." *Journal of Financial Markets*, 3(3), 205-258. Survey lebih luas yang ngasih konteks tempat Roll di literature microstructure.`
      }
    },
  ],

  audio: { enabled: true },

  selfTest: [
    {
      sectionId: 'intuition',
      question: {
        en: 'Why does bid-ask bounce create negative serial correlation in observed transaction prices, even when the efficient price follows a random walk?',
        id: 'Kenapa bid-ask bounce bikin negative serial correlation di observed transaction price, padahal efficient price-nya random walk?'
      },
      prompt: {
        en: 'Before continuing, try answering:',
        id: 'Sebelum lanjut, coba jawab:'
      },
      answer: {
        en: 'Trades alternate between bid and ask depending on direction. When a buy follows a sell, the observed print jumps by approximately the spread; when a sell follows a buy, it jumps back. The efficient price provides no autocorrelation (martingale), but the (s/2)·qₜ shift produces a regular zig-zag pattern. Computing the autocovariance of Δpₜ captures exactly this zig-zag, yielding Cov(Δpₜ, Δpₜ₋₁) = −(s/2)².',
        id: 'Trade ganti-gantian antara bid dan ask tergantung arah. Pas buy ikuti sell, observed print loncat sekitar spread; pas sell ikuti buy, loncat balik. Efficient price gak kasih autocorrelation (martingale), tapi shift (s/2)·qₜ ngehasilin pola zig-zag teratur. Hitung autocovariance Δpₜ capture exactly zig-zag ini, ngasih Cov(Δpₜ, Δpₜ₋₁) = −(s/2)².'
      }
    },
    {
      sectionId: 'formalization',
      question: {
        en: 'In the Roll derivation, the lag-1 autocovariance has four covariance terms when distributed. Three vanish. Walk through which three and why.',
        id: 'Di derivation Roll, lag-1 autocovariance punya empat covariance term pas di-distribute. Tiga lenyap. Walk through yang tiga dan kenapa.'
      },
      prompt: {
        en: 'Before continuing, try answering:',
        id: 'Sebelum lanjut, coba jawab:'
      },
      answer: {
        en: '(1) Cov(Δmₜ, Δmₜ₋₁) = 0 because the efficient price is a martingale — consecutive innovations are uncorrelated by definition. (2) Cov(Δmₜ, qₜ₋₁ − qₜ₋₂) = 0 because Δmₜ is uncorrelated with all past public information, including past trade signs. (3) Cov(qₜ − qₜ₋₁, Δmₜ₋₁) = 0 by the same reasoning — Δmₜ₋₁ is uncorrelated with future trade signs qₜ (and with qₜ₋₁ under the Roll assumption that trade direction is exogenous). Only the pure trade-direction term Cov(qₜ − qₜ₋₁, qₜ₋₁ − qₜ₋₂) survives.',
        id: '(1) Cov(Δmₜ, Δmₜ₋₁) = 0 karena efficient price itu martingale — consecutive innovation uncorrelated by definition. (2) Cov(Δmₜ, qₜ₋₁ − qₜ₋₂) = 0 karena Δmₜ uncorrelated sama semua past public info, termasuk past trade sign. (3) Cov(qₜ − qₜ₋₁, Δmₜ₋₁) = 0 reasoning sama — Δmₜ₋₁ uncorrelated sama future trade sign qₜ (dan sama qₜ₋₁ di bawah Roll assumption trade direction itu exogenous). Cuma pure trade-direction term Cov(qₜ − qₜ₋₁, qₜ₋₁ − qₜ₋₂) yang survive.'
      }
    },
    {
      sectionId: 'worked-example',
      question: {
        en: 'You observe a market where Roll\'s estimate is 5 cents but the directly observed quoted spread is 12 cents. What does this gap suggest, and what would you check next?',
        id: 'Kamu observe market dimana Roll\'s estimate-nya 5 cents tapi quoted spread yang langsung di-observe 12 cents. Apa yang gap ini suggest, dan apa yang kamu cek selanjutnya?'
      },
      prompt: {
        en: 'Before continuing, try answering:',
        id: 'Sebelum lanjut, coba jawab:'
      },
      answer: {
        en: 'Roll significantly underestimating relative to quoted spread is the signature of positive trade-direction autocorrelation. The iid assumption is violated — order flow is persistent in one direction. Most common causes: institutional order splitting (VWAP/POV slicing creates same-side child orders), or informed trading where someone with private info keeps buying (or selling) until information is incorporated. Next checks: (1) estimate the actual lag-1 autocorrelation of qₜ; if positive, the gap is mechanical and the formula s·|1−ρ| should reconcile. (2) Examine trade size distribution — large average size suggests institutional flow. (3) Check timing — if the gap widens during specific windows (open/close, news), that pattern itself tells you something about who is active.',
        id: 'Roll significantly underestimate relative ke quoted spread itu signature positive trade-direction autocorrelation. Asumsi iid dilanggar — order flow persistent di satu arah. Penyebab paling umum: institutional order splitting (VWAP/POV slicing bikin same-side child order), atau informed trading dimana yang punya private info terus buy (atau sell) sampai info-nya kebawa. Cek selanjutnya: (1) estimate actual lag-1 autocorrelation qₜ; kalau positif, gap itu mekanis dan formula s·|1−ρ| harusnya reconcile. (2) Lihat distribusi trade size — average besar suggest institutional flow. (3) Cek timing — kalau gap melebar di window spesifik (open/close, news), pattern itu sendiri ngasih tau siapa yang aktif.'
      }
    },
    {
      sectionId: 'applications',
      question: {
        en: 'How would you operationalize the Roll-vs-quoted-spread gap as a real-time regime filter for a passive market-making strategy?',
        id: 'Gimana kamu operasionalin Roll-vs-quoted-spread gap sebagai real-time regime filter buat passive market-making strategy?'
      },
      prompt: {
        en: 'Before continuing, try answering:',
        id: 'Sebelum lanjut, coba jawab:'
      },
      answer: {
        en: 'Compute Roll estimate on a rolling window of trade prints (e.g., 5-min, 30-min, 1-hour). Compute observed quoted spread average on the same window. The gap (quoted − Roll) is the "informed flow indicator". When the gap exceeds historical 90th percentile for that asset+timeframe, flag as "informed regime" — back off passive market-making (widen quotes, reduce size, or step out entirely). The intuition: when informed traders are active, your passive quotes get hit disproportionately on the wrong side. Practical refinements: use VPIN in parallel (Easley-LdP-O\'Hara 2012 — already in your Library), combine into composite toxicity score, and calibrate threshold per asset class since baseline autocorrelation varies (BTC vs alt-coins vs equity).',
        id: 'Hitung Roll estimate di rolling window trade print (misalnya 5-min, 30-min, 1-jam). Hitung observed quoted spread rata-rata di window yang sama. Gap (quoted − Roll) itu "informed flow indicator". Pas gap exceed historical 90th percentile buat asset+timeframe itu, flag sebagai "informed regime" — back off passive market-making (lebarin quote, kurangin size, atau step out total). Intuisi: pas informed trader aktif, passive quote kamu kena hit disproporsional di sisi yang salah. Refinement praktis: pake VPIN paralel (Easley-LdP-O\'Hara 2012 — udah di Library kamu), gabungin jadi composite toxicity score, dan kalibrasi threshold per asset class karena baseline autocorrelation beda-beda (BTC vs alt-coin vs equity).'
      }
    },
  ],
};
