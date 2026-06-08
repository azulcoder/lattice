export const CONTENT = {
  itemId: 'amihud-2002',
  estimatedReadMinutes: 34,

  author: {
    fullName: { en: 'Yakov Amihud', id: 'Yakov Amihud' },
    affiliation: {
      en: 'Ira Rennert Professor of Finance, New York University Stern School of Business.',
      id: 'Ira Rennert Professor of Finance, New York University Stern School of Business.'
    },
    tagline: {
      en: 'A liquidity yardstick anyone can compute from daily data — average |return| per dollar traded — and the evidence that illiquid stocks must pay investors a premium to be held.',
      id: 'Penggaris liquidity yang siapa pun bisa hitung dari data harian — rata-rata |return| per dolar di-trade — dan bukti bahwa saham illiquid harus bayar investor premium buat dipegang.'
    },
    bio: {
      en: `Yakov Amihud is one of the founding figures of liquidity-based asset pricing. With Haim Mendelson he wrote the 1986 paper "Asset Pricing and the Bid-Ask Spread," which first argued that the cost of trading is priced — investors demand higher gross returns on assets that are expensive to trade, with a clientele structure in which long-horizon investors hold the illiquid assets. This 2002 paper is the empirical capstone of that program: it proposes a simple, widely-computable illiquidity measure and shows it commands a return premium both across stocks and over time.

Amihud's gift is for measures that are *cheap and robust*. Where the theory points to price impact (Kyle's $\\lambda$), which needs intraday quote-and-trade data, he found a proxy needing only daily prices and volume — so it could be computed for thousands of stocks over decades. That practicality is why "the Amihud measure" became one of the most-used liquidity variables in empirical finance.`,
      id: `Yakov Amihud itu salah satu figur pendiri asset pricing berbasis-liquidity. Bareng Haim Mendelson dia nulis paper 1986 "Asset Pricing and the Bid-Ask Spread," yang pertama ngeklaim bahwa biaya trading itu dihargai — investor minta gross return lebih tinggi di aset yang mahal di-trade, dengan struktur clientele di mana investor horizon-panjang megang aset illiquid. Paper 2002 ini puncak empiris dari program itu: dia ngusulin ukuran illiquidity yang sederhana, bisa-dihitung-luas dan nunjukin dia nguasain premium return baik lintas saham maupun over time.

Bakat Amihud itu buat ukuran yang *murah dan robust*. Di mana teori nunjuk ke price impact (λ Kyle), yang butuh data quote-dan-trade intraday, dia nemuin proxy yang cuma butuh harga dan volume harian — jadi dia bisa dihitung buat ribuan saham over dekade. Kepraktisan itu kenapa "ukuran Amihud" jadi salah satu variabel liquidity paling-dipakai di empirical finance.`
    },
    focus: {
      en: `Liquidity is costly, and Amihud's question is whether that cost shows up in *prices*. He proposes a blunt but effective gauge of illiquidity: **ILLIQ**, the average over a period of the daily ratio of a stock's absolute return to its dollar trading volume. Read it as "how far does the price move per dollar traded?" — a rough measure of **price impact**, the same thing Kyle's $\\lambda$ captures, but computable from daily data alone. With it, Amihud documents two effects on NYSE stocks over 1964-1997 (the predictor variables are built from data starting in 1963). **Cross-section:** stocks that are more illiquid (higher ILLIQ) earn higher average returns — an **illiquidity premium**, the compensation investors demand for holding hard-to-trade assets, and part of what the small-firm effect really is. **Time-series:** when *expected* market illiquidity is high, *expected* (ex-ante) excess returns are high — illiquidity is a priced state variable; but an *unexpected* jump in illiquidity *lowers* contemporaneous returns, because a sudden rise in the required illiquidity premium discounts future cash flows more heavily and investors flee to liquid assets ("flight to liquidity"). The paper turned "liquidity is priced" from a clean theory into a measured, replicable fact.`,
      id: `Liquidity itu mahal, dan pertanyaan Amihud itu apakah biaya itu muncul di *harga*. Dia ngusulin alat ukur illiquidity yang tumpul tapi efektif: **ILLIQ**, rata-rata over periode dari rasio harian return absolut sebuah saham ke dollar trading volume-nya. Baca dia sebagai "seberapa jauh harga gerak per dolar di-trade?" — ukuran kasar **price impact**, hal yang sama yang λ Kyle tangkep, tapi bisa dihitung cuma dari data harian. Dengan dia, Amihud ngedokumentasiin dua efek di saham NYSE over 1964-1997 (variabel prediktornya dibangun dari data mulai 1963). **Cross-section:** saham yang lebih illiquid (ILLIQ lebih tinggi) dapet average return lebih tinggi — sebuah **illiquidity premium**, kompensasi yang investor minta buat megang aset susah-di-trade, dan bagian dari apa small-firm effect sebenernya. **Time-series:** pas illiquidity pasar yang *diharapkan* tinggi, excess return (ex-ante) yang *diharapkan* tinggi — illiquidity itu priced state variable; tapi lonjakan illiquidity yang *gak terduga* *nurunin* contemporaneous return, karena kenaikan tiba-tiba di illiquidity premium yang diminta ngediskon future cash flow lebih berat dan investor kabur ke aset liquid ("flight to liquidity"). Paper-nya ngubah "liquidity dihargai" dari teori bersih jadi fakta yang terukur, bisa-direplikasi.`
    },
    intellectualLineage: {
      en: `The direct parent is **Amihud and Mendelson (1986)**, "Asset Pricing and the Bid-Ask Spread," which argued spreads are priced and produced the holding-horizon clientele result — illiquid assets held by long-horizon investors who amortize the trading cost. The measure itself is a daily-data proxy for **Kyle's (1985)** price-impact $\\lambda$, and sits beside other liquidity-as-priced-risk work of its era: **Brennan and Subrahmanyam (1996)** (intraday price-impact measures and returns), **Pástor and Stambaugh (2003)** (a traded liquidity factor), and **Acharya and Pedersen (2005)** (a liquidity-adjusted CAPM). The funding-side mechanism for *why* illiquidity premia spike in crises is **Brunnermeier and Pedersen (2009)**. Downstream, the measure became a workhorse, prompting both heavy use and scrutiny — e.g. studies of *why* the Amihud measure is priced and whether it proxies liquidity per se or other characteristics — and a 2019 "revisit" by Amihud refining the evidence.`,
      id: `Induk langsungnya **Amihud dan Mendelson (1986)**, "Asset Pricing and the Bid-Ask Spread," yang ngeklaim spread dihargai dan ngehasilin hasil clientele holding-horizon — aset illiquid dipegang investor horizon-panjang yang ngamortisasi biaya trading. Ukuran-nya sendiri itu proxy data-harian buat price-impact $\\lambda$ **Kyle (1985)**, dan ada di samping kerja liquidity-sebagai-priced-risk lain di eranya: **Brennan dan Subrahmanyam (1996)** (ukuran price-impact intraday dan return), **Pástor dan Stambaugh (2003)** (traded liquidity factor), dan **Acharya dan Pedersen (2005)** (liquidity-adjusted CAPM). Mekanisme sisi-funding buat *kenapa* illiquidity premia lonjak di krisis itu **Brunnermeier dan Pedersen (2009)**. Hilir, ukuran-nya jadi andalan, ngedorong baik penggunaan berat maupun pengawasan — misal studi *kenapa* ukuran Amihud dihargai dan apakah dia proxy liquidity per se atau karakteristik lain — dan "revisit" 2019 oleh Amihud yang nyempurnain bukti-nya.`
    },
    keyCollaborators: {
      en: `Amihud's defining and lifelong collaboration is with **Haim Mendelson** (Stanford), with whom he built the liquidity-and-asset-pricing program over decades (the 1986 spread paper and many follow-ups). The measure connects him to the broader liquidity-pricing community: **Luboš Pástor and Robert Stambaugh** (liquidity factor), **Viral Acharya and Lasse Pedersen** (liquidity-adjusted CAPM), and **Michael Brennan and Avanidhar Subrahmanyam** (price-impact and returns). The theoretical touchstone behind his price-impact proxy is **Albert Kyle**.`,
      id: `Kolaborasi yang ngedefinisiin dan seumur-hidup Amihud itu sama **Haim Mendelson** (Stanford), yang bareng dia ngebangun program liquidity-dan-asset-pricing over dekade (paper spread 1986 dan banyak lanjutan). Ukuran-nya nyambungin dia ke komunitas liquidity-pricing yang lebih luas: **Luboš Pástor dan Robert Stambaugh** (liquidity factor), **Viral Acharya dan Lasse Pedersen** (liquidity-adjusted CAPM), dan **Michael Brennan dan Avanidhar Subrahmanyam** (price-impact dan return). Tonggak teoritis di balik proxy price-impact-nya itu **Albert Kyle**.`
    },
    legacy: {
      en: `"The Amihud measure" is now one of the most widely used liquidity variables in all of empirical finance, precisely because it is cheap: average $|R|/\\text{DolVol}$ needs only daily price and volume, so it can be built for almost any stock, country, and era where those exist — markets and decades that intraday data cannot reach. Three things give the paper lasting weight. First, a **usable proxy for price impact**: ILLIQ correlates with finer microstructure measures while demanding far less data, which democratized liquidity research. Second, **two robust priced effects**: the cross-sectional illiquidity premium (illiquid stocks earn more) and the time-series result (expected illiquidity raises expected returns; illiquidity shocks lower current prices), which reframed part of the size effect and gave asset pricing a liquidity state variable. Third, it anchored the **liquidity-as-risk** literature that followed (Pástor-Stambaugh factor; Acharya-Pedersen liquidity CAPM; the funding-liquidity crises of Brunnermeier-Pedersen). Its very popularity also invited careful scrutiny of *what* it measures and *why* it is priced — a healthy sign that a measure has become infrastructure. For anyone needing a liquidity control or a tradable illiquidity signal from daily data, ILLIQ is the default.`,
      id: `"Ukuran Amihud" sekarang salah satu variabel liquidity paling-luas-dipakai di seluruh empirical finance, persis karena dia murah: rata-rata $|R|/\\text{DolVol}$ cuma butuh harga dan volume harian, jadi dia bisa dibangun buat hampir tiap saham, negara, dan era di mana itu ada — pasar dan dekade yang data intraday gak bisa jangkau. Tiga hal ngasih paper-nya bobot abadi. Pertama, **proxy yang bisa-dipakai buat price impact**: ILLIQ berkorelasi sama ukuran microstructure lebih halus sambil minta data jauh lebih sedikit, yang ngedemokratisasi riset liquidity. Kedua, **dua efek priced yang robust**: illiquidity premium cross-sectional (saham illiquid dapet lebih) dan hasil time-series (illiquidity yang diharapkan naikin return yang diharapkan; shock illiquidity nurunin harga sekarang), yang nge-reframe bagian size effect dan ngasih asset pricing sebuah liquidity state variable. Ketiga, dia nge-anchor literatur **liquidity-sebagai-risk** yang ngikut (faktor Pástor-Stambaugh; liquidity CAPM Acharya-Pedersen; krisis funding-liquidity Brunnermeier-Pedersen). Popularitasnya sendiri juga ngundang pengawasan hati-hati soal *apa* yang dia ukur dan *kenapa* dia dihargai — tanda sehat bahwa sebuah ukuran udah jadi infrastruktur. Buat siapa pun yang butuh kontrol liquidity atau sinyal illiquidity yang bisa-di-trade dari data harian, ILLIQ itu default.`
    },
    keyWorks: [
      { year: 2002, title: 'Illiquidity and Stock Returns: Cross-Section and Time-Series Effects (this item)', venue: 'Journal of Financial Markets' },
      { year: 1986, title: 'Asset Pricing and the Bid-Ask Spread (Amihud & Mendelson)', venue: 'Journal of Financial Economics' },
      { year: 1991, title: 'Liquidity, Maturity, and the Yields on U.S. Treasury Securities (Amihud & Mendelson)', venue: 'Journal of Finance' },
      { year: 2005, title: 'Liquidity and Asset Prices (Amihud, Mendelson & Pedersen)', venue: 'Foundations and Trends in Finance (survey)' },
      { year: 2019, title: 'Illiquidity and Stock Returns: A Revisit (Amihud)', venue: 'Critical Finance Review' },
    ],
  },

  sections: [
    // ─────────────── 1. motivation ───────────────
    {
      id: 'motivation',
      heading: { en: 'Why this matters', id: 'Kenapa ini penting' },
      body: {
        en: `Two stocks can have identical cash-flow risk and still trade at different prices, because one is harder to *get out of* than the other. Trading costs money — spreads, price impact, delay — and a rational investor who must eventually sell will pay less today for an asset that is expensive to sell later. So illiquidity should depress prices and, equivalently, *raise* expected returns. Amihud and Mendelson made this argument with bid-ask spreads in 1986; this paper makes it operational and tests it at scale.

The obstacle was measurement. The theory points at **price impact** — how much your trading moves the price, Kyle's $\\lambda$ — but estimating $\\lambda$ needs intraday quotes and trades, which for most of history and most of the world simply do not exist. Amihud's move is a proxy you can compute from **daily data alone**:
$$\\text{ILLIQ}_i = \\text{average over days } t \\text{ of } \\frac{|R_{i,t}|}{\\text{DolVol}_{i,t}},$$
the average daily ratio of absolute return to dollar volume. Intuitively it is "the price move per dollar traded" — a rough, cheap measure of price impact. A stock whose price lurches on small volume has a high ILLIQ; a deep, liquid stock that barely moves on large volume has a low one.

With this one variable, Amihud documents two facts on NYSE stocks over 1964-1997 (with 1963 data used to build the first year's variables) that together say *liquidity is priced*:

- **Cross-section.** More illiquid stocks (higher average ILLIQ) earn **higher average returns** — an **illiquidity premium**. Investors must be paid to hold assets that are costly to trade. This also explains part of the famous small-firm effect: small stocks are illiquid, so their extra return is partly an illiquidity premium, not pure size.

- **Time-series.** When *expected* market illiquidity is high, *expected* future excess returns are high (illiquidity is a priced state variable). But an *unexpected* rise in illiquidity **lowers returns right now**: a sudden jump in the required illiquidity premium discounts future cash flows more, and investors flee illiquid for liquid assets — a "flight to liquidity" that knocks down the prices of the very stocks whose illiquidity rose.

The lasting reason the paper matters is not just the result but the **tool**. Because ILLIQ needs only daily prices and volumes, it can be built for thousands of stocks across decades and countries — and it became one of the most-used liquidity measures in finance.`,
        id: `Dua saham bisa punya risiko cash-flow identik dan tetep trade di harga berbeda, karena satu lebih susah *dikeluarin* daripada yang lain. Trading itu makan biaya — spread, price impact, delay — dan investor rasional yang harus akhirnya jual bakal bayar lebih sedikit hari ini buat aset yang mahal dijual nanti. Jadi illiquidity harusnya nekan harga dan, ekuivalen, *naikin* expected return. Amihud dan Mendelson bikin argumen ini dengan bid-ask spread di 1986; paper ini bikin dia operasional dan nge-tes-nya di skala.

Rintangannya itu pengukuran. Teori nunjuk ke **price impact** — seberapa banyak trading kamu gerakin harga, λ Kyle — tapi ngestimasi λ butuh quote dan trade intraday, yang buat kebanyakan sejarah dan kebanyakan dunia sekadar gak ada. Langkah Amihud itu proxy yang bisa kamu hitung dari **data harian aja**:
$$\\text{ILLIQ}_i = \\text{rata-rata over hari } t \\text{ dari } \\frac{|R_{i,t}|}{\\text{DolVol}_{i,t}},$$
rata-rata rasio harian return absolut ke dollar volume. Secara intuitif dia "gerakan harga per dolar di-trade" — ukuran price impact yang kasar, murah. Saham yang harganya nyentak di volume kecil punya ILLIQ tinggi; saham dalem, liquid yang nyaris gak gerak di volume gede punya yang rendah.

Dengan satu variabel ini, Amihud ngedokumentasiin dua fakta di saham NYSE over 1964-1997 (data 1963 dipakai buat bangun variabel tahun pertama) yang bareng bilang *liquidity dihargai*:

- **Cross-section.** Saham lebih illiquid (ILLIQ rata-rata lebih tinggi) dapet **average return lebih tinggi** — sebuah **illiquidity premium**. Investor harus dibayar buat megang aset yang mahal di-trade. Ini juga ngejelasin bagian dari small-firm effect terkenal: saham kecil illiquid, jadi extra return mereka sebagian illiquidity premium, bukan size murni.

- **Time-series.** Pas illiquidity pasar yang *diharapkan* tinggi, excess return masa depan yang *diharapkan* tinggi (illiquidity itu priced state variable). Tapi kenaikan illiquidity yang *gak terduga* **nurunin return sekarang juga**: lonjakan tiba-tiba di illiquidity premium yang diminta ngediskon future cash flow lebih, dan investor kabur dari illiquid ke aset liquid — "flight to liquidity" yang nurunin harga persis saham yang illiquidity-nya naik.

Alasan abadi paper-nya penting itu bukan cuma hasilnya tapi **tool**-nya. Karena ILLIQ cuma butuh harga dan volume harian, dia bisa dibangun buat ribuan saham lintas dekade dan negara — dan dia jadi salah satu ukuran liquidity paling-dipakai di finance.`
      }
    },

    // ─────────────── 2. intuition ───────────────
    {
      id: 'intuition',
      heading: { en: 'Intuition', id: 'Intuisi' },
      body: {
        en: `Why should $|R|/\\text{DolVol}$ measure illiquidity? Kyle tells us the price moves linearly in net order flow, $\\Delta p \\approx \\lambda\\,(\\text{order flow})$, so the *magnitude* of the price move per unit of trading is exactly $\\lambda$ — market impact, the inverse of depth. On a given day, $|R_{i,t}|$ is the size of the price move and $\\text{DolVol}_{i,t}$ is the dollars traded; their ratio is "how much did the price move per dollar?" — a back-of-the-envelope $\\lambda$. Average it over many days to smooth out noise and you have a stable, daily-data estimate of a stock's price impact. It is crude (it ignores the sign and the intraday path, and uses total volume rather than net order flow), but on average it tracks the finer intraday impact measures well — and you can compute it where they are impossible.

Now the asset-pricing logic, in one line: **if trading is costly, the buyer pays less, so the expected return is higher.** Suppose holding a stock means occasionally paying its round-trip trading cost. An investor will only hold it if the gross return compensates for that expected cost. So in equilibrium, more illiquid stocks must offer higher gross expected returns — the **illiquidity premium**. Cross-sectionally, sort stocks by ILLIQ and the illiquid ones earn more, controlling for risk. (And because the premium is *amortized over the holding horizon*, long-horizon investors rationally hold the illiquid assets — the Amihud-Mendelson clientele effect.)

The time-series effect has two faces that look contradictory until you separate *expected* from *unexpected*. **Expected** illiquidity raises **expected** returns: if you know the market will be costly to trade, you demand a bigger premium going forward — a positive relation between expected illiquidity and ex-ante returns. But an **unexpected** spike in illiquidity *lowers* returns *contemporaneously*: the moment the market discovers illiquidity is higher than thought, the required premium jumps, which means future cash flows are discounted more heavily, so prices fall *today*. Capital simultaneously runs from illiquid to liquid assets ("flight to liquidity"), pushing illiquid prices down further. So the same variable predicts high future returns (through its expected level) yet is associated with low current returns (through its surprises) — exactly the pattern of a priced state variable.`,
        id: `Kenapa $|R|/\\text{DolVol}$ harusnya ngukur illiquidity? Kyle ngasih tau kita harga gerak linear di net order flow, $\\Delta p \\approx \\lambda\\,(\\text{order flow})$, jadi *magnitude* gerakan harga per unit trading itu persis $\\lambda$ — market impact, kebalikan depth. Di hari tertentu, $|R_{i,t}|$ itu ukuran gerakan harga dan $\\text{DolVol}_{i,t}$ itu dolar yang di-trade; rasio mereka itu "seberapa banyak harga gerak per dolar?" — λ back-of-the-envelope. Rata-ratain dia over banyak hari buat ngehalusin noise dan kamu punya estimasi data-harian yang stabil dari price impact sebuah saham. Dia kasar (dia ngabaikin tanda dan path intraday, dan pakai total volume bukan net order flow), tapi rata-rata dia ngelacak ukuran impact intraday lebih halus dengan baik — dan kamu bisa ngitungnya di mana mereka gak mungkin.

Sekarang logika asset-pricing-nya, dalam satu baris: **kalau trading mahal, pembeli bayar lebih sedikit, jadi expected return lebih tinggi.** Misal megang saham berarti sesekali bayar biaya trading round-trip-nya. Investor cuma bakal megangnya kalau gross return ngompensasi expected cost itu. Jadi di equilibrium, saham lebih illiquid harus nawarin gross expected return lebih tinggi — **illiquidity premium**. Cross-sectional, sort saham by ILLIQ dan yang illiquid dapet lebih, ngontrol risiko. (Dan karena premium-nya *diamortisasi over holding horizon*, investor horizon-panjang rasional megang aset illiquid — efek clientele Amihud-Mendelson.)

Efek time-series punya dua wajah yang keliatan kontradiktif sampai kamu misahin *diharapkan* dari *gak terduga*. Illiquidity **diharapkan** naikin return **diharapkan**: kalau kamu tau pasar bakal mahal di-trade, kamu minta premium lebih gede ke depan — relasi positif antara expected illiquidity dan ex-ante return. Tapi lonjakan illiquidity yang **gak terduga** *nurunin* return *contemporaneously*: momen pasar nemu illiquidity lebih tinggi dari yang dikira, premium yang diminta loncat, yang berarti future cash flow didiskon lebih berat, jadi harga jatuh *hari ini*. Kapital serentak lari dari illiquid ke aset liquid ("flight to liquidity"), ngedorong harga illiquid lebih turun. Jadi variabel yang sama ngeprediksi return masa depan tinggi (lewat expected level-nya) tapi terkait sama return sekarang rendah (lewat kejutannya) — persis pola sebuah priced state variable.`
      }
    },

    // ─────────────── 3. formalization ───────────────
    {
      id: 'formalization',
      heading: { en: 'The measure and the tests', id: 'Ukuran dan tesnya' },
      body: {
        en: `**The ILLIQ measure.** For stock $i$ over a period (say a year) with $D_i$ trading days,
$$\\text{ILLIQ}_i = \\frac{1}{D_i}\\sum_{t=1}^{D_i}\\frac{|R_{i,t}|}{\\text{DVOL}_{i,t}},$$
where $R_{i,t}$ is the day-$t$ return and $\\text{DVOL}_{i,t}$ is the day-$t$ dollar volume. Units are "return per dollar," so the raw number is tiny; in practice it is scaled (e.g. $\\times 10^{6}$, dollar volume in millions) for readability. It is a daily-data proxy for Kyle's price-impact $\\lambda$ — the average price response to a dollar of trading.

**Cross-sectional test (the illiquidity premium).** Across stocks, regress average returns on ILLIQ together with the usual controls (beta, size, book-to-market, momentum, volatility, dividend yield). The estimated coefficient on ILLIQ is **positive and significant**: more illiquid stocks earn higher risk-adjusted returns. Because small stocks tend to be illiquid, ILLIQ absorbs part of the size effect — the small-firm premium is, in part, an illiquidity premium.

**Time-series test (illiquidity as a state variable).** Aggregate ILLIQ across stocks to get **market illiquidity** $\\text{AILLIQ}_t$. Model expected market illiquidity (e.g. an autoregression), splitting realized illiquidity into an **expected** part and an **unexpected** (shock) part. Then:
- Expected excess market return rises with **expected** illiquidity: $E_{t-1}[R^{e}_{t}]$ increases in $E_{t-1}[\\text{AILLIQ}_t]$ — the ex-ante premium for anticipated illiquidity.
- Contemporaneous excess return falls with **unexpected** illiquidity: a positive illiquidity shock is associated with a *negative* return the same period, because the required premium jumped and prices repriced down.

So illiquidity has the two-signed signature of a priced risk: high *expected* level ⇒ high *future* returns; positive *surprise* ⇒ low *current* returns.

**Why a daily-data proxy at all.** The theoretically clean object is intraday price impact (Kyle $\\lambda$, or Brennan-Subrahmanyam's regression of returns on signed order flow), which needs tick data. ILLIQ trades a little accuracy for enormous coverage: only daily price and volume, available for essentially all stocks and long histories. Empirically it correlates well with the finer measures, which is what justifies it.

**Caveats to keep in mind.** ILLIQ uses *total* volume (not signed net order flow), ignores the intraday path, and is sensitive to how volume is measured (NASDAQ double-counting, very low-volume days). It is a *level* of illiquidity, not a tradable factor by itself (Pástor-Stambaugh later built a traded liquidity factor). And the question of *why* it is priced — pure liquidity, or correlated characteristics/risk — has its own literature; Amihud's 2019 "revisit" reaffirms the core effects with refinements. Use ILLIQ as a robust, cheap *proxy*, mindful that it is a proxy.`,
        id: `**Ukuran ILLIQ.** Buat saham $i$ over periode (misal setahun) dengan $D_i$ hari trading,
$$\\text{ILLIQ}_i = \\frac{1}{D_i}\\sum_{t=1}^{D_i}\\frac{|R_{i,t}|}{\\text{DVOL}_{i,t}},$$
di mana $R_{i,t}$ itu return hari-$t$ dan $\\text{DVOL}_{i,t}$ itu dollar volume hari-$t$. Unitnya "return per dolar," jadi angka mentah-nya kecil banget; dalam praktik dia di-scale (misal $\\times 10^{6}$, dollar volume dalam juta) buat keterbacaan. Dia proxy data-harian buat price-impact $\\lambda$ Kyle — rata-rata respons harga ke satu dolar trading.

**Tes cross-sectional (illiquidity premium).** Lintas saham, regress average return pada ILLIQ bareng kontrol biasa (beta, size, book-to-market, momentum, volatility, dividend yield). Koefisien yang diestimasi pada ILLIQ itu **positif dan signifikan**: saham lebih illiquid dapet risk-adjusted return lebih tinggi. Karena saham kecil cenderung illiquid, ILLIQ nyerap bagian size effect — small-firm premium itu, sebagian, illiquidity premium.

**Tes time-series (illiquidity sebagai state variable).** Agregat ILLIQ lintas saham buat dapet **market illiquidity** $\\text{AILLIQ}_t$. Modelin expected market illiquidity (misal autoregresi), misahin realized illiquidity jadi bagian **diharapkan** dan bagian **gak terduga** (shock). Terus:
- Expected excess market return naik sama illiquidity **diharapkan**: $E_{t-1}[R^{e}_{t}]$ naik di $E_{t-1}[\\text{AILLIQ}_t]$ — premium ex-ante buat illiquidity yang diantisipasi.
- Contemporaneous excess return turun sama illiquidity **gak terduga**: shock illiquidity positif terkait sama return *negatif* di periode yang sama, karena premium yang diminta loncat dan harga reprice turun.

Jadi illiquidity punya tanda-tangan dua-tanda dari priced risk: *expected* level tinggi ⇒ return *masa depan* tinggi; *surprise* positif ⇒ return *sekarang* rendah.

**Kenapa proxy data-harian sama sekali.** Objek yang teoritis bersih itu price impact intraday (λ Kyle, atau regresi Brennan-Subrahmanyam return pada signed order flow), yang butuh tick data. ILLIQ nuker sedikit akurasi buat coverage besar: cuma harga dan volume harian, tersedia buat pada dasarnya semua saham dan sejarah panjang. Secara empiris dia berkorelasi baik sama ukuran lebih halus, yang itu yang ngejustifikasi dia.

**Caveat buat diinget.** ILLIQ pakai *total* volume (bukan signed net order flow), ngabaikin path intraday, dan sensitif ke gimana volume diukur (double-counting NASDAQ, hari volume-sangat-rendah). Dia *level* illiquidity, bukan tradable factor sendiri (Pástor-Stambaugh belakangan ngebangun traded liquidity factor). Dan pertanyaan *kenapa* dia dihargai — liquidity murni, atau karakteristik/risk berkorelasi — punya literatur sendiri; "revisit" 2019 Amihud negesin ulang efek inti dengan penyempurnaan. Pakai ILLIQ sebagai *proxy* yang robust, murah, ingat bahwa dia proxy.`
      }
    },

    // ─────────────── 4. worked-example ───────────────
    {
      id: 'worked-example',
      heading: { en: 'Worked example', id: 'Contoh kerjaan' },
      body: {
        en: `**Computing ILLIQ for two stocks.** Take a few representative trading days for a liquid large-cap "L" and an illiquid small-cap "S." For each day record the absolute return $|R|$ and dollar volume DVOL (in USD millions), and form the daily ratio $|R|/\\text{DVOL}$:

| Day | L: $|R|$ | L: DVOL (USD m) | L: $|R|/\\text{DVOL}$ | S: $|R|$ | S: DVOL (USD m) | S: $|R|/\\text{DVOL}$ |
|---|---|---|---|---|---|---|
| 1 | 0.4% | 500 | 0.0000080 | 2.0% | 2 | 0.0100 |
| 2 | 0.6% | 600 | 0.0000100 | 1.0% | 1 | 0.0100 |
| 3 | 0.5% | 400 | 0.0000125 | 3.0% | 4 | 0.0075 |

Average the daily ratios:
$$\\text{ILLIQ}_L = \\tfrac{1}{3}(8.0+10.0+12.5)\\times 10^{-6} \\approx 1.0\\times 10^{-5},\\qquad \\text{ILLIQ}_S = \\tfrac{1}{3}(0.0100+0.0100+0.0075) \\approx 9.2\\times 10^{-3}.$$
S's ILLIQ is roughly **900× larger** than L's: a dollar of trading moves S's price about three orders of magnitude more than L's. That is exactly the price-impact gap a deep stock and a thin stock should have — captured from daily data alone.

**Reading it as price impact.** ILLIQ$\\approx |R|/\\text{DVOL}$ is a stand-in for Kyle's $\\lambda$: to move S's price 1% you need only about USD 1-2m of one-sided trading, whereas moving L's price 1% takes on the order of USD 1bn. A meta-order or a fund inflow of a given size will therefore cost vastly more in S — and Almgren-Chriss execution costs scale with exactly this impact coefficient.

**The premium and the shock, side by side.** *Cross-section:* across many stocks, the S-type names earn higher average returns than the L-type names with the same beta — the **illiquidity premium**, compensation for that 900× costlier trading. *Time-series:* now suppose a market-wide illiquidity *shock* hits (a crisis: volume collapses, $|R|$ spikes, so ILLIQ jumps unexpectedly). Contemporaneously, prices *fall* — most of all for the already-illiquid S names — as the required illiquidity premium reprices upward and capital flees to the liquid L names. Afterwards, with *expected* illiquidity now high, *expected* returns are high: the illiquid names that survived are priced to deliver a larger forward premium. High expected illiquidity ⇒ high future returns; the illiquidity surprise itself ⇒ the low (negative) current return. One measure, both effects.`,
        id: `**Ngitung ILLIQ buat dua saham.** Ambil beberapa hari trading representatif buat large-cap liquid "L" dan small-cap illiquid "S." Buat tiap hari catat return absolut $|R|$ dan dollar volume DVOL (dalam USD juta), dan bentuk rasio harian $|R|/\\text{DVOL}$:

| Hari | L: $|R|$ | L: DVOL (USD jt) | L: $|R|/\\text{DVOL}$ | S: $|R|$ | S: DVOL (USD jt) | S: $|R|/\\text{DVOL}$ |
|---|---|---|---|---|---|---|
| 1 | 0.4% | 500 | 0.0000080 | 2.0% | 2 | 0.0100 |
| 2 | 0.6% | 600 | 0.0000100 | 1.0% | 1 | 0.0100 |
| 3 | 0.5% | 400 | 0.0000125 | 3.0% | 4 | 0.0075 |

Rata-ratain rasio harian:
$$\\text{ILLIQ}_L = \\tfrac{1}{3}(8.0+10.0+12.5)\\times 10^{-6} \\approx 1.0\\times 10^{-5},\\qquad \\text{ILLIQ}_S = \\tfrac{1}{3}(0.0100+0.0100+0.0075) \\approx 9.2\\times 10^{-3}.$$
ILLIQ S kira-kira **900× lebih gede** dari L: satu dolar trading gerakin harga S sekitar tiga orde besaran lebih dari L. Itu persis gap price-impact yang saham dalem dan saham tipis harusnya punya — ditangkep dari data harian aja.

**Membacanya sebagai price impact.** ILLIQ$\\approx |R|/\\text{DVOL}$ itu pengganti buat λ Kyle: buat gerakin harga S 1% kamu cuma butuh sekitar USD 1-2jt trading satu-sisi, sementara gerakin harga L 1% butuh dalam orde USD 1miliar. Meta-order atau fund inflow ukuran tertentu karenanya bakal makan biaya jauh lebih banyak di S — dan biaya eksekusi Almgren-Chriss nyekala persis sama koefisien impact ini.

**Premium dan shock, berdampingan.** *Cross-section:* lintas banyak saham, nama tipe-S dapet average return lebih tinggi dari nama tipe-L dengan beta yang sama — **illiquidity premium**, kompensasi buat trading 900× lebih mahal itu. *Time-series:* sekarang misal *shock* illiquidity se-pasar nyerang (krisis: volume kolaps, $|R|$ lonjak, jadi ILLIQ loncat gak terduga). Contemporaneously, harga *jatuh* — paling banyak buat nama S yang udah illiquid — pas illiquidity premium yang diminta reprice naik dan kapital kabur ke nama L liquid. Sesudahnya, dengan illiquidity *diharapkan* sekarang tinggi, return *diharapkan* tinggi: nama illiquid yang selamat dihargai buat ngirim forward premium lebih gede. Expected illiquidity tinggi ⇒ return masa depan tinggi; surprise illiquidity-nya sendiri ⇒ return sekarang rendah (negatif). Satu ukuran, kedua efek.`
      }
    },

    // ─────────────── 5. applications ───────────────
    {
      id: 'applications',
      heading: { en: 'Applications', id: 'Aplikasi' },
      body: {
        en: `**A default liquidity control.** Any cross-sectional return study — testing a factor, an anomaly, a signal — needs to rule out that the effect is just an illiquidity premium in disguise. ILLIQ is the standard control because it is computable for the whole sample. Many "anomalies" shrink once you control for illiquidity or restrict to liquid stocks, which is itself a finding.

**A tradable signal, carefully.** Sorting on ILLIQ harvests the illiquidity premium, but the premium lives disproportionately in small, illiquid names where *trading the strategy* incurs exactly the costs the premium compensates. Net of transaction costs the edge is much smaller than gross — a reminder that the illiquidity premium is partly a *liquidity-provision* return you only earn if you can actually bear the illiquidity (long horizon, patient capital).

**Risk management and stress.** Because unexpected illiquidity lowers prices and concentrates in crises, ILLIQ is a useful early-warning and stress variable: a rising market-illiquidity reading flags that the required premium is climbing and that illiquid positions are vulnerable to a flight-to-liquidity repricing — the contemporaneous-negative-return effect. It dovetails with Brunnermeier-Pedersen: funding spirals are *why* market illiquidity spikes, and ILLIQ is *how* you see it in prices.

**Beyond U.S. equities.** ILLIQ's data thrift made it the liquidity measure of choice for international markets, emerging markets, corporate bonds, and historical samples where intraday data are absent — and, increasingly, for **crypto**, where one can compute $|R|/\\text{DVOL}$ per coin per exchange to compare liquidity across thousands of tokens and venues that no tick database covers. The same cross-sectional illiquidity premium and crisis-time illiquidity shocks recur. (The original paper is U.S. equities; the broader applications are extensions.)

**Use it knowing what it is.** ILLIQ is a *rough, daily* price-impact proxy, not a clean structural estimate. Treat large differences as meaningful and small ones with caution; scale it consistently; be alert to volume-measurement quirks; and remember that *why* it carries a premium (liquidity per se vs correlated risk) is a live question. As a cheap, universally-available control or signal, it is hard to beat — as a precise number, treat it as an order of magnitude.`,
        id: `**Kontrol liquidity default.** Tiap studi return cross-sectional — nge-tes faktor, anomali, sinyal — perlu nyingkirin bahwa efeknya cuma illiquidity premium yang nyamar. ILLIQ itu kontrol standar karena dia bisa-dihitung buat seluruh sampel. Banyak "anomali" menyusut begitu kamu ngontrol illiquidity atau ngebatesin ke saham liquid, yang itu sendiri sebuah temuan.

**Sinyal yang bisa-di-trade, hati-hati.** Sorting pada ILLIQ manen illiquidity premium, tapi premium-nya tinggal secara tak proporsional di nama kecil, illiquid di mana *nge-trade strateginya* makan persis biaya yang premium-nya kompensasi. Net dari transaction cost edge-nya jauh lebih kecil dari gross — pengingat bahwa illiquidity premium itu sebagian return *penyediaan-liquidity* yang cuma kamu dapet kalau kamu beneran bisa nanggung illiquidity-nya (horizon panjang, kapital sabar).

**Manajemen risiko dan stress.** Karena illiquidity gak terduga nurunin harga dan terkonsentrasi di krisis, ILLIQ itu variabel early-warning dan stress yang berguna: bacaan market-illiquidity yang naik ngeflag bahwa premium yang diminta lagi naik dan posisi illiquid rentan ke repricing flight-to-liquidity — efek return-negatif-contemporaneous. Dia nyambung sama Brunnermeier-Pedersen: spiral funding itu *kenapa* market illiquidity lonjak, dan ILLIQ itu *gimana* kamu liat dia di harga.

**Di luar equity AS.** Kehematan data ILLIQ bikin dia ukuran liquidity pilihan buat pasar internasional, emerging market, corporate bond, dan sampel historis di mana data intraday gak ada — dan, makin, buat **crypto**, di mana orang bisa ngitung $|R|/\\text{DVOL}$ per koin per exchange buat ngebandingin liquidity lintas ribuan token dan venue yang gak ada tick database-nya. Illiquidity premium cross-sectional yang sama dan shock illiquidity waktu-krisis berulang. (Paper aslinya equity AS; aplikasi lebih luasnya perpanjangan.)

**Pakai dia tau dia apa.** ILLIQ itu proxy price-impact *kasar, harian*, bukan estimasi struktural bersih. Perlakukan perbedaan besar sebagai berarti dan yang kecil dengan hati-hati; scale dia konsisten; waspada quirk pengukuran-volume; dan inget bahwa *kenapa* dia bawa premium (liquidity per se vs risk berkorelasi) itu pertanyaan hidup. Sebagai kontrol atau sinyal yang murah, tersedia-universal, dia susah dikalahin — sebagai angka presisi, perlakukan dia sebagai orde besaran.`
      }
    },

    // ─────────────── 6. practice ───────────────
    {
      id: 'practice',
      heading: { en: 'Practice', id: 'Latihan' },
      body: {
        en: `**1.** Write the ILLIQ formula and explain, term by term, why the ratio $|R|/\\text{DolVol}$ is a sensible proxy for price impact (Kyle's $\\lambda$).

<details><summary>Answer</summary>
$\\text{ILLIQ}_i = \\frac{1}{D_i}\\sum_t |R_{i,t}|/\\text{DVOL}_{i,t}$ — the average daily ratio of absolute return to dollar volume. Kyle says the price move is $\\Delta p \\approx \\lambda \\times$ order flow, so the price *move per unit of trading* is $\\lambda$ itself. On a day, $|R_{i,t}|$ is the size of the price move and $\\text{DVOL}_{i,t}$ is the dollars traded, so $|R|/\\text{DVOL}$ is "how far the price moved per dollar traded" — a back-of-the-envelope $\\lambda$. Averaging over days smooths the noise. It is crude (total volume, not signed net flow; ignores intraday path) but tracks finer impact measures and needs only daily data, which is its whole advantage.
</details>

**2.** Amihud finds returns *increase* with expected illiquidity but *decrease* with unexpected illiquidity. Resolve the apparent contradiction.

<details><summary>Answer</summary>
Split illiquidity into its expected level and its surprises. **Expected** illiquidity is a required-return effect: if investors anticipate the market will be costly to trade, they demand a larger illiquidity premium going forward, so *expected* future returns rise with *expected* illiquidity. **Unexpected** illiquidity is a repricing effect: when the market suddenly learns illiquidity is higher than thought, the required premium jumps, future cash flows are discounted more heavily, and capital flees to liquid assets — so prices fall *contemporaneously*, i.e. current returns are negative. So one is about the ex-ante premium (level → future returns up) and the other about the shock (surprise → current returns down); both are the signature of a priced state variable, not a contradiction.
</details>

**3.** Stock S has ILLIQ ≈ 9×10⁻³ and stock L has ILLIQ ≈ 1×10⁻⁵, both with the same market beta. Qualitatively, which earns the higher average return and why — and what is the catch for an investor trying to harvest that difference?

<details><summary>Answer</summary>
S earns the higher average return: it is far more illiquid (≈900× the price impact), so investors must be paid an **illiquidity premium** to hold it — the compensation for costly trading, controlling for beta. The catch: the premium lives in exactly the names that are expensive to trade, so *implementing* a buy-illiquid strategy incurs the very transaction costs the premium compensates. Net of costs the edge shrinks sharply; you only truly earn it with a long holding horizon and patient capital that can amortize the trading cost (the Amihud-Mendelson clientele logic). The illiquidity premium is partly a return *to bearing illiquidity*, not a free lunch.
</details>

**4.** Why did ILLIQ become so widely used despite being a "crude" measure, and how does it connect to Brunnermeier-Pedersen's funding-liquidity spirals?

<details><summary>Answer</summary>
Because it is *cheap and universal*: $|R|/\\text{DolVol}$ needs only daily price and volume, so it can be computed for thousands of stocks across decades, countries, asset classes, and even crypto — markets where intraday data (needed for Kyle's $\\lambda$ or Brennan-Subrahmanyam) simply do not exist. It correlates well enough with the finer measures to be trusted as a proxy, which democratized liquidity research. The link to Brunnermeier-Pedersen: their model is the *mechanism* — funding constraints and margin/loss spirals — that makes market illiquidity spike in crises; ILLIQ is *how that spike shows up in prices*. Their unexpected-illiquidity-lowers-prices and flight-to-liquidity predictions are exactly Amihud's time-series effect, and the priced illiquidity risk Amihud documents is what a liquidity-adjusted CAPM (Acharya-Pedersen) formalizes.
</details>`,
        id: `**1.** Tulis formula ILLIQ dan jelasin, term per term, kenapa rasio $|R|/\\text{DolVol}$ itu proxy yang masuk akal buat price impact (λ Kyle).

<details><summary>Jawaban</summary>
$\\text{ILLIQ}_i = \\frac{1}{D_i}\\sum_t |R_{i,t}|/\\text{DVOL}_{i,t}$ — rata-rata rasio harian return absolut ke dollar volume. Kyle bilang gerakan harga itu $\\Delta p \\approx \\lambda \\times$ order flow, jadi gerakan harga *per unit trading* itu $\\lambda$ sendiri. Di sebuah hari, $|R_{i,t}|$ itu ukuran gerakan harga dan $\\text{DVOL}_{i,t}$ itu dolar yang di-trade, jadi $|R|/\\text{DVOL}$ itu "seberapa jauh harga gerak per dolar di-trade" — λ back-of-the-envelope. Rata-ratain over hari ngehalusin noise. Dia kasar (total volume, bukan signed net flow; ngabaikin path intraday) tapi ngelacak ukuran impact lebih halus dan cuma butuh data harian, yang itu seluruh keunggulannya.
</details>

**2.** Amihud nemu return *naik* sama expected illiquidity tapi *turun* sama unexpected illiquidity. Selesain kontradiksi yang keliatan itu.

<details><summary>Jawaban</summary>
Pisahin illiquidity jadi expected level-nya dan surprise-nya. Illiquidity **diharapkan** itu efek required-return: kalau investor ngantisipasi pasar bakal mahal di-trade, mereka minta illiquidity premium lebih gede ke depan, jadi return masa depan *diharapkan* naik sama illiquidity *diharapkan*. Illiquidity **gak terduga** itu efek repricing: pas pasar tiba-tiba nyadar illiquidity lebih tinggi dari yang dikira, premium yang diminta loncat, future cash flow didiskon lebih berat, dan kapital kabur ke aset liquid — jadi harga jatuh *contemporaneously*, yaitu return sekarang negatif. Jadi satu soal premium ex-ante (level → return masa depan naik) dan yang lain soal shock (surprise → return sekarang turun); keduanya tanda-tangan priced state variable, bukan kontradiksi.
</details>

**3.** Saham S punya ILLIQ ≈ 9×10⁻³ dan saham L punya ILLIQ ≈ 1×10⁻⁵, keduanya dengan market beta yang sama. Secara kualitatif, mana yang dapet average return lebih tinggi dan kenapa — dan apa catch-nya buat investor yang nyoba manen perbedaan itu?

<details><summary>Jawaban</summary>
S dapet average return lebih tinggi: dia jauh lebih illiquid (≈900× price impact), jadi investor harus dibayar **illiquidity premium** buat megangnya — kompensasi buat trading mahal, ngontrol beta. Catch-nya: premium-nya tinggal di persis nama yang mahal di-trade, jadi *ngimplementasiin* strategi beli-illiquid makan persis transaction cost yang premium-nya kompensasi. Net dari biaya edge-nya menyusut tajam; kamu cuma beneran dapet itu dengan holding horizon panjang dan kapital sabar yang bisa ngamortisasi biaya trading (logika clientele Amihud-Mendelson). Illiquidity premium itu sebagian return *buat nanggung illiquidity*, bukan makan siang gratis.
</details>

**4.** Kenapa ILLIQ jadi sangat luas dipakai walaupun ukuran "kasar," dan gimana dia nyambung ke spiral funding-liquidity Brunnermeier-Pedersen?

<details><summary>Jawaban</summary>
Karena dia *murah dan universal*: $|R|/\\text{DolVol}$ cuma butuh harga dan volume harian, jadi dia bisa dihitung buat ribuan saham lintas dekade, negara, asset class, dan bahkan crypto — pasar di mana data intraday (butuh buat λ Kyle atau Brennan-Subrahmanyam) sekadar gak ada. Dia berkorelasi cukup baik sama ukuran lebih halus buat dipercaya sebagai proxy, yang ngedemokratisasi riset liquidity. Link ke Brunnermeier-Pedersen: model mereka itu *mekanisme* — funding constraint dan margin/loss spiral — yang bikin market illiquidity lonjak di krisis; ILLIQ itu *gimana lonjakan itu muncul di harga*. Prediksi unexpected-illiquidity-nurunin-harga dan flight-to-liquidity mereka itu persis efek time-series Amihud, dan priced illiquidity risk yang Amihud dokumentasiin itu yang liquidity-adjusted CAPM (Acharya-Pedersen) formalin.
</details>`
      }
    },

    // ─────────────── 7. connections ───────────────
    {
      id: 'connections',
      heading: { en: 'Connections', id: 'Koneksi' },
      body: {
        en: `- **What ILLIQ proxies**: [Kyle 1985](item:kyle-1985) price impact $\\lambda$ is the structural object; ILLIQ = $|R|/\\text{DolVol}$ is its daily-data stand-in (price move per dollar traded).
- **Why liquidity is priced in crises**: [Brunnermeier-Pedersen 2009](item:brunnermeier-pedersen-2009) supplies the funding-spiral *mechanism* behind illiquidity shocks; Amihud's unexpected-illiquidity-lowers-prices / flight-to-liquidity results are that mechanism seen in returns.
- **The cost of trading the illiquid**: [Almgren-Chriss 2000](item:almgren-chriss-2000) execution cost scales with the same impact coefficient ILLIQ proxies — the premium is partly compensation for paying it.
- **Where the price is and how noisy**: [Hasbrouck 2007](item:hasbrouck-2007) (efficient price + Roll spread) and [Hasbrouck 1995](item:hasbrouck-1995) (price discovery) frame the prices whose moves enter $|R|$.
- **Toxicity link**: [Easley-López de Prado-O'Hara VPIN](item:easley-lopez-prado-vpin) — order-flow toxicity is one driver of the price impact that high ILLIQ records.`,
        id: `- **Apa yang ILLIQ proxy-kan**: price impact $\\lambda$ [Kyle 1985](item:kyle-1985) itu objek struktural-nya; ILLIQ = $|R|/\\text{DolVol}$ itu pengganti data-hariannya (gerakan harga per dolar di-trade).
- **Kenapa liquidity dihargai di krisis**: [Brunnermeier-Pedersen 2009](item:brunnermeier-pedersen-2009) nyediain *mekanisme* funding-spiral di balik shock illiquidity; hasil unexpected-illiquidity-nurunin-harga / flight-to-liquidity Amihud itu mekanisme itu keliatan di return.
- **Biaya nge-trade yang illiquid**: biaya eksekusi [Almgren-Chriss 2000](item:almgren-chriss-2000) nyekala sama koefisien impact yang sama yang ILLIQ proxy-kan — premium-nya sebagian kompensasi buat bayar itu.
- **Di mana harganya dan seberapa ber-noise**: [Hasbrouck 2007](item:hasbrouck-2007) (efficient price + Roll spread) dan [Hasbrouck 1995](item:hasbrouck-1995) (price discovery) ngeframe harga yang gerakannya masuk ke $|R|$.
- **Link toxicity**: [VPIN Easley-López de Prado-O'Hara](item:easley-lopez-prado-vpin) — toxicity order-flow itu satu driver dari price impact yang ILLIQ tinggi rekam.`
      }
    },

    // ─────────────── 8. sources ───────────────
    {
      id: 'sources',
      heading: { en: 'Sources', id: 'Sumber' },
      body: {
        en: `- **Amihud, Y.** (2002). "Illiquidity and Stock Returns: Cross-Section and Time-Series Effects." *Journal of Financial Markets*, 5(1), 31-56. **(This item.)** The ILLIQ measure and the cross-sectional + time-series illiquidity-premium evidence (NYSE, 1964-1997; variables built from 1963 data).
- **Amihud, Y. and Mendelson, H.** (1986). "Asset Pricing and the Bid-Ask Spread." *Journal of Financial Economics*, 17(2), 223-249. The founding spread-is-priced result and the holding-horizon clientele.
- **Kyle, A. S.** (1985). "Continuous Auctions and Insider Trading." *Econometrica*, 53(6), 1315-1335. The price-impact $\\lambda$ that ILLIQ proxies from daily data.
- **Pástor, L. and Stambaugh, R. F.** (2003). "Liquidity Risk and Expected Stock Returns." *Journal of Political Economy*, 111(3), 642-685. A traded market-liquidity factor.
- **Acharya, V. V. and Pedersen, L. H.** (2005). "Asset Pricing with Liquidity Risk." *Journal of Financial Economics*, 77(2), 375-410. A liquidity-adjusted CAPM in which Amihud-type illiquidity is priced.
- **Amihud, Y.** (2019). "Illiquidity and Stock Returns: A Revisit." *Critical Finance Review*, 8(1-2), 203-221. A modern re-examination reaffirming the effects.`,
        id: `- **Amihud, Y.** (2002). "Illiquidity and Stock Returns: Cross-Section and Time-Series Effects." *Journal of Financial Markets*, 5(1), 31-56. **(Item ini.)** Ukuran ILLIQ dan bukti illiquidity-premium cross-sectional + time-series (NYSE, 1964-1997; variabel dibangun dari data 1963).
- **Amihud, Y. dan Mendelson, H.** (1986). "Asset Pricing and the Bid-Ask Spread." *Journal of Financial Economics*, 17(2), 223-249. Hasil pendiri spread-dihargai dan clientele holding-horizon.
- **Kyle, A. S.** (1985). "Continuous Auctions and Insider Trading." *Econometrica*, 53(6), 1315-1335. Price-impact $\\lambda$ yang ILLIQ proxy-kan dari data harian.
- **Pástor, L. dan Stambaugh, R. F.** (2003). "Liquidity Risk and Expected Stock Returns." *Journal of Political Economy*, 111(3), 642-685. Traded market-liquidity factor.
- **Acharya, V. V. dan Pedersen, L. H.** (2005). "Asset Pricing with Liquidity Risk." *Journal of Financial Economics*, 77(2), 375-410. Liquidity-adjusted CAPM di mana illiquidity tipe-Amihud dihargai.
- **Amihud, Y.** (2019). "Illiquidity and Stock Returns: A Revisit." *Critical Finance Review*, 8(1-2), 203-221. Pemeriksaan-ulang modern yang negesin ulang efeknya.`
      }
    },
  ],

  audio: { enabled: true },

  selfTest: [
    {
      sectionId: 'intuition',
      question: {
        en: 'Why is the daily ratio |return|/dollar-volume a sensible proxy for a stock\'s price impact?',
        id: 'Kenapa rasio harian |return|/dollar-volume itu proxy yang masuk akal buat price impact sebuah saham?'
      },
      prompt: { en: 'Before continuing, try answering:', id: 'Sebelum lanjut, coba jawab:' },
      answer: {
        en: 'Kyle\'s model says the price moves roughly linearly in order flow, Δp ≈ λ × (order flow), so the price move per unit of trading is λ — the impact coefficient. On a given day, |R| is the size of the price move and dollar volume is the amount traded, so |R|/DolVol is "how far the price moved per dollar traded" — a back-of-the-envelope λ. Averaging it over many days smooths out noise and gives a stable estimate of the stock\'s price impact. It is crude — it uses total volume rather than signed net order flow and ignores the intraday path — but it tracks finer intraday impact measures well and, crucially, needs only daily price and volume data.',
        id: 'Model Kyle bilang harga gerak kira-kira linear di order flow, Δp ≈ λ × (order flow), jadi gerakan harga per unit trading itu λ — koefisien impact. Di hari tertentu, |R| itu ukuran gerakan harga dan dollar volume itu jumlah yang di-trade, jadi |R|/DolVol itu "seberapa jauh harga gerak per dolar di-trade" — λ back-of-the-envelope. Rata-ratain over banyak hari ngehalusin noise dan ngasih estimasi stabil dari price impact saham. Dia kasar — dia pakai total volume bukan signed net order flow dan ngabaikin path intraday — tapi dia ngelacak ukuran impact intraday lebih halus dengan baik dan, krusial, cuma butuh data harga dan volume harian.'
      }
    },
    {
      sectionId: 'formalization',
      question: {
        en: 'State the two empirical effects Amihud documents — one cross-sectional, one time-series — and what each says about how liquidity is priced.',
        id: 'Nyatain dua efek empiris yang Amihud dokumentasiin — satu cross-sectional, satu time-series — dan apa yang masing-masing bilang soal gimana liquidity dihargai.'
      },
      prompt: { en: 'Before continuing, try answering:', id: 'Sebelum lanjut, coba jawab:' },
      answer: {
        en: 'Cross-section: more illiquid stocks (higher average ILLIQ) earn higher average returns — the illiquidity premium, the compensation investors require for holding costly-to-trade assets (and part of the small-firm effect). Time-series: aggregate market illiquidity is a priced state variable — when expected market illiquidity is high, expected (ex-ante) excess returns are high; but an unexpected jump in illiquidity lowers contemporaneous returns, because the required premium reprices up (discounting future cash flows more) and capital flees illiquid for liquid assets (flight to liquidity). Together: liquidity is priced both across stocks (the premium) and over time (the state variable).',
        id: 'Cross-section: saham lebih illiquid (ILLIQ rata-rata lebih tinggi) dapet average return lebih tinggi — illiquidity premium, kompensasi yang investor minta buat megang aset mahal-di-trade (dan bagian dari small-firm effect). Time-series: agregat market illiquidity itu priced state variable — pas expected market illiquidity tinggi, excess return (ex-ante) diharapkan tinggi; tapi lonjakan illiquidity gak terduga nurunin contemporaneous return, karena premium yang diminta reprice naik (ngediskon future cash flow lebih) dan kapital kabur dari illiquid ke aset liquid (flight to liquidity). Bareng: liquidity dihargai baik lintas saham (premium) maupun over time (state variable).'
      }
    },
    {
      sectionId: 'applications',
      question: {
        en: 'Why did ILLIQ become one of the most-used liquidity measures, and what is the main caution in interpreting it?',
        id: 'Kenapa ILLIQ jadi salah satu ukuran liquidity paling-dipakai, dan apa kehati-hatian utama dalam nginterpretasiinnya?'
      },
      prompt: { en: 'Before continuing, try answering:', id: 'Sebelum lanjut, coba jawab:' },
      answer: {
        en: 'Because it is cheap and universal: |R|/DolVol needs only daily price and volume, so it can be computed for thousands of stocks across decades, countries, asset classes, and even crypto — markets where the intraday data needed for Kyle\'s λ do not exist — while still correlating well with finer impact measures. That data availability democratized liquidity research and made it the default liquidity control/signal. The caution: it is a rough proxy, not a structural estimate — it uses total (not signed) volume, ignores the intraday path, is sensitive to volume-measurement quirks, and the question of why it carries a premium (pure liquidity vs correlated risk/characteristics) is still debated. Trust large differences and orders of magnitude; treat a precise ILLIQ number with care.',
        id: 'Karena dia murah dan universal: |R|/DolVol cuma butuh harga dan volume harian, jadi dia bisa dihitung buat ribuan saham lintas dekade, negara, asset class, dan bahkan crypto — pasar di mana data intraday yang butuh buat λ Kyle gak ada — sambil tetep berkorelasi baik sama ukuran impact lebih halus. Ketersediaan data itu ngedemokratisasi riset liquidity dan bikin dia kontrol/sinyal liquidity default. Kehati-hatiannya: dia proxy kasar, bukan estimasi struktural — dia pakai total (bukan signed) volume, ngabaikin path intraday, sensitif ke quirk pengukuran-volume, dan pertanyaan kenapa dia bawa premium (liquidity murni vs risk/karakteristik berkorelasi) masih diperdebatin. Percaya perbedaan besar dan orde besaran; perlakukan angka ILLIQ presisi dengan hati-hati.'
      }
    },
  ],
};
