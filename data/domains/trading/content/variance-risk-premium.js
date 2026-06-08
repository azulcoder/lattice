// ─────────────────────────────────────────────────────────────────────────
// Trading domain — the VARIANCE RISK PREMIUM & VARIANCE SWAPS. Implied
// variance (priced from options) is systematically RICHER than the variance
// that subsequently realises; the gap VRP = K_var − E[RV] is the fear /
// insurance premium that sellers of volatility are paid to bear crash risk.
// Beginner→advanced: realised vs implied variance; the variance-swap payoff
// N_var·(RV − K_var) and the LEFT-skewed short-vol P&L ("pennies in front of
// a steamroller"); the model-free DEMETERFI-DERMAN-KAMAL-ZOU log-contract
// replication (a 1/K²-weighted strip of OTM options + a dynamic futures
// hedge); BAKSHI-KAPADIA-MADAN model-free implied moments; the VIX as a
// discretised variance-swap rate. Carries the interactive VarianceSwapSim
// (js/viz.js, verified by scripts/verify-variance-sim.mjs). ESTABLISHED
// academic + practitioner canon, web-verified refs. Educational, not
// financial advice.
// ─────────────────────────────────────────────────────────────────────────

export const CONTENT = {
  itemId: 'variance-risk-premium',
  estimatedReadMinutes: 32,

  author: {
    fullName: { en: 'Carr, Wu, Demeterfi-Derman-Kamal-Zou & Bakshi-Kapadia-Madan (the variance-premium canon)', id: 'Carr, Wu, Demeterfi-Derman-Kamal-Zou & Bakshi-Kapadia-Madan (kanon variance-premium)' },
    affiliation: {
      en: 'Peter Carr (NYU / Morgan Stanley) and Liuren Wu (Baruch College, CUNY) measured the variance risk premium across indices and single names in "Variance Risk Premiums" (Review of Financial Studies, 2009). Tim Bollerslev, George Tauchen and Hao Zhou (Duke / Federal Reserve Board) tied the premium to expected returns in "Expected Stock Returns and Variance Risk Premia" (RFS, 2009). Kresimir Demeterfi, Emanuel Derman, Michael Kamal and Joseph Zou (Goldman Sachs Quantitative Strategies) wrote the practitioner bible on the replication, "More Than You Ever Wanted to Know About Volatility Swaps" (1999). Gurdip Bakshi, Nikunj Kapadia and Dilip Madan (Maryland / UMass) gave the model-free implied moments in "Stock Return Characteristics, Skew Laws..." (RFS, 2003).',
      id: 'Peter Carr (NYU / Morgan Stanley) dan Liuren Wu (Baruch College, CUNY) ngukur variance risk premium lintas indeks dan saham tunggal di "Variance Risk Premiums" (Review of Financial Studies, 2009). Tim Bollerslev, George Tauchen dan Hao Zhou (Duke / Federal Reserve Board) ngikat premium itu ke expected return di "Expected Stock Returns and Variance Risk Premia" (RFS, 2009). Kresimir Demeterfi, Emanuel Derman, Michael Kamal dan Joseph Zou (Goldman Sachs Quantitative Strategies) nulis kitab praktisi soal replikasinya, "More Than You Ever Wanted to Know About Volatility Swaps" (1999). Gurdip Bakshi, Nikunj Kapadia dan Dilip Madan (Maryland / UMass) ngasih momen-implisit bebas-model di "Stock Return Characteristics, Skew Laws..." (RFS, 2003).',
    },
    tagline: {
      en: 'The volatility the market PRICES into options is systematically higher than the volatility that actually HAPPENS. That persistent gap — the variance risk premium — is the fee the market pays for crash insurance, and the reason selling volatility is a real, but dangerous, edge.',
      id: 'Volatilitas yang pasar HARGAI ke dalam opsi sistematis lebih tinggi dari volatilitas yang BENAR-BENAR terjadi. Jarak yang bertahan itu — variance risk premium — itu ongkos yang pasar bayar buat asuransi crash, dan alasan kenapa jualan volatilitas itu edge yang nyata, tapi berbahaya.',
    },
    bio: {
      en: `Two prices for the same thing point in different directions. The market quotes options whose implied variance — the variance you would lock in via a **variance swap** — runs persistently *above* the variance the underlying then realises. Carr & Wu (2009) measured this gap across five indices and 35 stocks and found it large, negative for the buyer of variance, and stubbornly persistent: the **variance risk premium** (VRP). Bollerslev, Tauchen & Zhou (2009) showed the same gap *predicts* future equity returns. The economic story is insurance: long-variance positions pay off precisely in crashes, so risk-averse investors overpay for them, and whoever **sells** variance is paid to warehouse that crash risk.

The machinery that makes this tradeable is the **variance swap**, and the deep result — Demeterfi, Derman, Kamal & Zou (1999) — is that a variance swap is *model-free*: it equals a **log contract**, replicable by a static strip of out-of-the-money options weighted $1/K^2$ plus a dynamic futures hedge. The same option-spanning yields the model-free implied **moments** (variance, skew, kurtosis) of Bakshi, Kapadia & Madan (2003), and the **VIX** is exactly a discretised 30-day variance-swap rate. This module builds the whole arc, beginner to advanced, and embeds a simulator of the short-vol P&L — its high win rate, its small premium, and its rare large losses.

⟦Note: established academic and practitioner material (Carr-Wu; Bollerslev-Tauchen-Zhou; Demeterfi-Derman-Kamal-Zou; Bakshi-Kapadia-Madan), web-verified. Educational, not financial advice. Selling volatility carries genuine tail risk; the embedded sim is a teaching idealization, not a trading model.⟧`,
      id: `Dua harga buat hal yang sama nunjuk ke arah beda. Pasar ngutip opsi yang implied variance-nya — variance yang bakal kamu kunci lewat **variance swap** — jalan terus-menerus *di atas* variance yang underlying-nya kemudian realisasiin. Carr & Wu (2009) ngukur jarak ini lintas lima indeks dan 35 saham dan nemu dia besar, negatif buat pembeli variance, dan keras-kepala bertahan: **variance risk premium** (VRP). Bollerslev, Tauchen & Zhou (2009) nunjukin jarak yang sama *memprediksi* return ekuitas masa depan. Cerita ekonominya itu asuransi: posisi long-variance bayar persis pas crash, jadi investor yang risk-averse overpay buatnya, dan siapa pun yang **jual** variance dibayar buat nampung risiko crash itu.

Mesin yang bikin ini bisa-ditradingkan itu **variance swap**, dan hasil terdalamnya — Demeterfi, Derman, Kamal & Zou (1999) — itu variance swap bersifat *bebas-model*: dia setara **log contract**, bisa-direplikasi lewat strip statis opsi out-of-the-money berbobot $1/K^2$ plus hedge futures dinamis. Spanning opsi yang sama ngasih **momen** implisit bebas-model (variance, skew, kurtosis) Bakshi, Kapadia & Madan (2003), dan **VIX** itu persis variance-swap rate 30-hari yang didiskretisasi. Module ini ngebangun seluruh busur itu, pemula ke lanjutan, dan nyematin simulator P&L short-vol — win rate-nya yang tinggi, premium-nya yang kecil, dan rugi besar-nya yang langka.

⟦Catatan: materi akademik dan praktisi mapan (Carr-Wu; Bollerslev-Tauchen-Zhou; Demeterfi-Derman-Kamal-Zou; Bakshi-Kapadia-Madan), terverifikasi-web. Edukatif, bukan nasihat keuangan. Jualan volatilitas bawa tail risk asli; sim yang disematkan itu idealization pengajaran, bukan model trading.⟧`
    },
    focus: {
      en: `**Realised variance** over $n$ daily returns is $RV=\\frac{252}{n}\\sum_{t=1}^{n}\\left(\\ln\\frac{S_t}{S_{t-1}}\\right)^2$ (annualised); **implied/risk-neutral variance** is the variance-swap strike $K_{var}=\\sigma_{imp}^2$. The **variance risk premium** is $\\text{VRP}=K_{var}-\\mathbb{E}^{\\mathbb P}[RV]$ — positive because $\\sigma_{imp}>\\sigma_{realised}$ on average. A **variance swap** pays the holder $N_{var}\\,(RV-K_{var})$ at expiry, where the **variance notional** relates to a vega notional by $N_{var}=N_{vega}/(2\\,\\sigma_{imp})$. The fair strike is **model-free**: $\\sigma_{fair}^2\\approx\\frac{2e^{rT}}{T}\\sum_K\\frac{\\Delta K}{K^2}\\,O(K)$, a $1/K^2$-weighted strip of OTM option prices $O(K)$ plus a forward-correction term — the Demeterfi-Derman-Kamal-Zou log-contract replication. Negative skew lifts $\\sigma_{fair}^2$ **above** the at-the-money $\\sigma_{ATM}^2$. The same spanning yields the Bakshi-Kapadia-Madan model-free moments and the discretised **VIX**. The short-variance P&L is $K_{var}-RV$ per unit variance notional: a high win rate, a small mean premium, and — because $RV$ is right-skewed — a **left-skewed** payoff with rare large losses.`,
      id: `**Realised variance** atas $n$ return harian itu $RV=\\frac{252}{n}\\sum_{t=1}^{n}\\left(\\ln\\frac{S_t}{S_{t-1}}\\right)^2$ (disetahunkan); **implied/risk-neutral variance** itu strike variance-swap $K_{var}=\\sigma_{imp}^2$. **Variance risk premium** itu $\\text{VRP}=K_{var}-\\mathbb{E}^{\\mathbb P}[RV]$ — positif karena $\\sigma_{imp}>\\sigma_{realised}$ rata-rata. **Variance swap** bayar pemegangnya $N_{var}\\,(RV-K_{var})$ saat expiry, di mana **variance notional** terhubung ke vega notional lewat $N_{var}=N_{vega}/(2\\,\\sigma_{imp})$. Strike wajarnya **bebas-model**: $\\sigma_{fair}^2\\approx\\frac{2e^{rT}}{T}\\sum_K\\frac{\\Delta K}{K^2}\\,O(K)$, strip berbobot $1/K^2$ atas harga opsi OTM $O(K)$ plus suku koreksi-forward — replikasi log-contract Demeterfi-Derman-Kamal-Zou. Skew negatif ngangkat $\\sigma_{fair}^2$ **di atas** $\\sigma_{ATM}^2$ at-the-money. Spanning yang sama ngasih momen bebas-model Bakshi-Kapadia-Madan dan **VIX** yang didiskretisasi. P&L short-variance itu $K_{var}-RV$ per unit variance notional: win rate tinggi, premium mean kecil, dan — karena $RV$ right-skewed — payoff **left-skewed** dengan rugi besar langka.`
    },
    intellectualLineage: {
      en: `The replication idea descends from the Breeden-Litzenberger (1978) insight that a strip of options spans state prices, and from Neuberger's **log contract** (1994), which showed that the payoff $-2\\ln(S_T/S_0)$ has constant dollar gamma and so accrues realised variance when delta-hedged. Demeterfi, Derman, Kamal & Zou (1999) turned that into the practitioner recipe — the $1/K^2$ option strip — and into the design of the variance swap itself; the CBOE adopted essentially this construction for the modern **VIX** (2003). Carr & Wu (2009) made the premium an empirical object: synthesize the variance-swap rate from options, subtract realised variance, and measure the gap. Bollerslev, Tauchen & Zhou (2009) connected it to the equity premium and a long-run-risk / time-varying economic-uncertainty story. Bakshi, Kapadia & Madan (2003) generalized the spanning beyond variance to the full risk-neutral skew and kurtosis. The practitioner branch — Taleb's tail-risk discipline, and traders who harvest the VRP with a mandatory tail hedge — is where the math meets sizing and survival.`,
      id: `Ide replikasi turun dari wawasan Breeden-Litzenberger (1978) bahwa strip opsi nge-span state price, dan dari **log contract** Neuberger (1994), yang nunjukin payoff $-2\\ln(S_T/S_0)$ punya dollar gamma konstan jadi ngakumulasi realised variance pas di-delta-hedge. Demeterfi, Derman, Kamal & Zou (1999) ngubah itu jadi resep praktisi — strip opsi $1/K^2$ — dan jadi desain variance swap itu sendiri; CBOE mengadopsi pada dasarnya konstruksi ini buat **VIX** modern (2003). Carr & Wu (2009) bikin premium-nya jadi objek empiris: sintesis variance-swap rate dari opsi, kurangi realised variance, ukur jaraknya. Bollerslev, Tauchen & Zhou (2009) ngubungin dia ke premium ekuitas dan cerita long-run-risk / ketidakpastian-ekonomi yang berubah-waktu. Bakshi, Kapadia & Madan (2003) ngegeneralisasi spanning melampaui variance ke skew dan kurtosis risk-neutral penuh. Cabang praktisi — disiplin tail-risk Taleb, dan trader yang manen VRP dengan tail hedge wajib — itu tempat matematika ketemu sizing dan kelangsungan-hidup.`
    },
    keyCollaborators: {
      en: 'Peter Carr and Liuren Wu were the long-running quant-finance pair behind the empirical VRP measurement. Tim Bollerslev, George Tauchen and Hao Zhou are the econometrics trio linking VRP to predictable returns. Emanuel Derman led the Goldman Sachs Quantitative Strategies group with Kresimir Demeterfi, Michael Kamal and Joseph Zou on the replication note. Gurdip Bakshi, Nikunj Kapadia and Dilip Madan extended the spanning to higher moments. Upstream sit Breeden-Litzenberger (state-price spanning) and Anthony Neuberger (the log contract); downstream, the CBOE VIX methodology and the practitioner vol-selling community.',
      id: 'Peter Carr dan Liuren Wu itu pasangan quant-finance yang lama di balik pengukuran VRP empiris. Tim Bollerslev, George Tauchen dan Hao Zhou itu trio ekonometrika yang ngubungin VRP ke return yang bisa-diprediksi. Emanuel Derman mimpin grup Goldman Sachs Quantitative Strategies bareng Kresimir Demeterfi, Michael Kamal dan Joseph Zou di catatan replikasi. Gurdip Bakshi, Nikunj Kapadia dan Dilip Madan ngembangin spanning ke momen lebih tinggi. Hulu ada Breeden-Litzenberger (spanning state-price) dan Anthony Neuberger (log contract); hilir, metodologi CBOE VIX dan komunitas praktisi penjual-vol.',
    },
    legacy: {
      en: `The variance risk premium reframed an old market truism — "implied vol is rich" — as a measurable, replicable, tradeable risk premium with a clean economic interpretation (the price of crash insurance). It gave the world a *model-free* way to price and hedge variance, which is why the VIX exists in the form it does and why "long vol" and "short vol" are now first-class portfolio building blocks. Its deepest lesson is a warning as much as an edge: the premium is real and persistent, but it is earned by **selling insurance**, so its P&L is structurally left-skewed — many small gains, rare devastating losses. Every serious practitioner pairs the harvest with a mandatory tail hedge, small sizing, and respect for regime. The same spanning that prices variance also delivers the market's implied skew and kurtosis, making the option surface a readable forecast of the whole risk-neutral distribution.`,
      id: `Variance risk premium membingkai-ulang truisme pasar lama — "implied vol itu mahal" — jadi premium risiko yang terukur, bisa-direplikasi, bisa-ditradingkan dengan interpretasi ekonomi yang bersih (harga asuransi crash). Dia ngasih dunia cara *bebas-model* buat nge-price dan nge-hedge variance, yang itu kenapa VIX ada dalam bentuk yang ada dan kenapa "long vol" dan "short vol" sekarang jadi blok-bangunan portofolio kelas-satu. Pelajaran terdalamnya itu peringatan sebanyak edge: premium-nya nyata dan bertahan, tapi dia diraih dengan **jualan asuransi**, jadi P&L-nya struktural left-skewed — banyak gain kecil, rugi menghancurkan langka. Tiap praktisi serius masangkan panennya dengan tail hedge wajib, sizing kecil, dan hormat ke rezim. Spanning yang sama yang nge-price variance juga ngirim skew dan kurtosis implied pasar, bikin permukaan opsi jadi forecast yang terbaca atas seluruh distribusi risk-neutral.`
    },
    keyWorks: [
      { year: 2009, title: 'Variance Risk Premiums (Carr & Wu) — synthesizing the variance-swap rate from options and measuring the premium across indices and single names', venue: 'Review of Financial Studies, 22(3), 1311–1341' },
      { year: 2009, title: 'Expected Stock Returns and Variance Risk Premia (Bollerslev, Tauchen & Zhou) — the VRP as a predictor of aggregate equity returns', venue: 'Review of Financial Studies, 22(11), 4463–4492' },
      { year: 1999, title: 'More Than You Ever Wanted to Know About Volatility Swaps (Demeterfi, Derman, Kamal & Zou) — the log-contract replication and the 1/K² option strip', venue: 'Goldman Sachs Quantitative Strategies Research Notes (also "A Guide to Volatility and Variance Swaps," Journal of Derivatives, 6(4), 9–32)' },
      { year: 2003, title: 'Stock Return Characteristics, Skew Laws, and the Differential Pricing of Individual Equity Options (Bakshi, Kapadia & Madan) — model-free implied variance, skew, and kurtosis from the option spanning', venue: 'Review of Financial Studies, 16(1), 101–143' },
    ],
  },

  sections: [
    {
      id: 'motivation',
      heading: { en: 'Why this matters', id: 'Kenapa ini penting' },
      body: {
        en: `There are two completely different ways to talk about how much a stock moves, and the gap between them is one of the most reliable edges in markets.

The first is **realised volatility** — what *actually happened*. Take the daily log-returns $r_t=\\ln(S_t/S_{t-1})$ over the last $n$ days, square them, sum them, and annualise: the **realised variance** is $RV=\\frac{252}{n}\\sum_t r_t^2$, and its square root is realised volatility. It is a fact about the past tape, computed after the fact.

The second is **implied volatility** — what the *options market is pricing in* about the future. Every option carries a $\\sigma$ that you can read off its price (invert Black-Scholes), and you can bundle a whole strip of options into a single number, the **variance-swap strike** $K_{var}=\\sigma_{imp}^2$: the level of future variance the market will let you lock in *today*.

Here is the punchline, documented by Carr & Wu (2009) across indices and dozens of single stocks: **implied variance is systematically higher than the variance that subsequently realises.** Option buyers, on average, overpay; option sellers, on average, get paid. The persistent difference is the **variance risk premium**:
$$\\text{VRP}=K_{var}-\\mathbb{E}[RV]>0.$$

Why would this gap survive? Because long-volatility positions are **crash insurance**. They pay off exactly when everything else in your portfolio is on fire — during the 2008 and 2020 selloffs, vol exploded. Risk-averse investors will overpay for that protection, just as you overpay (in expectation) for home insurance, and whoever **sells** the protection is compensated for warehousing the crash risk. Bollerslev, Tauchen & Zhou (2009) showed the same VRP even *predicts* future equity returns: when the premium is high, fear is high, and expected returns are high.

This is why "selling volatility" is a real strategy and not a free lunch. The seller collects the premium most of the time and absorbs the rare, large losses. The rest of this module makes that precise: the **variance swap** that packages the trade, the **left-skewed P&L** of the short side (with the embedded simulator), the **model-free replication** that lets you build a variance swap out of ordinary options, and the **application** — how a disciplined trader harvests the VRP with a mandatory tail hedge.

⟦Disclaimer: established academic + practitioner canon (Carr-Wu; Bollerslev-Tauchen-Zhou; Demeterfi-Derman-Kamal-Zou; Bakshi-Kapadia-Madan), web-verified — educational, not financial advice.⟧`,
        id: `Ada dua cara yang sepenuhnya beda buat ngomongin seberapa banyak saham gerak, dan jarak antara keduanya itu salah satu edge paling andal di pasar.

Yang pertama itu **realised volatility** — apa yang *benar-benar terjadi*. Ambil log-return harian $r_t=\\ln(S_t/S_{t-1})$ atas $n$ hari terakhir, kuadratin, jumlahin, dan setahunkan: **realised variance**-nya $RV=\\frac{252}{n}\\sum_t r_t^2$, dan akar-kuadratnya itu realised volatility. Dia fakta soal tape masa lalu, dihitung setelah fakta.

Yang kedua itu **implied volatility** — apa yang *pasar opsi hargai* soal masa depan. Tiap opsi bawa $\\sigma$ yang bisa kamu baca dari harganya (inversiin Black-Scholes), dan kamu bisa bundel seluruh strip opsi jadi satu angka, **strike variance-swap** $K_{var}=\\sigma_{imp}^2$: level variance masa depan yang pasar bakal biarin kamu kunci *hari ini*.

Ini intinya, didokumentasiin Carr & Wu (2009) lintas indeks dan puluhan saham tunggal: **implied variance sistematis lebih tinggi dari variance yang kemudian realisasi.** Pembeli opsi, rata-rata, overpay; penjual opsi, rata-rata, dibayar. Selisih yang bertahan itu **variance risk premium**:
$$\\text{VRP}=K_{var}-\\mathbb{E}[RV]>0.$$

Kenapa jarak ini bisa bertahan? Karena posisi long-volatility itu **asuransi crash**. Mereka bayar persis pas semua hal lain di portofoliomu kebakaran — pas selloff 2008 dan 2020, vol meledak. Investor risk-averse bakal overpay buat proteksi itu, persis kayak kamu overpay (dalam ekspektasi) buat asuransi rumah, dan siapa pun yang **jual** proteksinya dikompensasi buat nampung risiko crash-nya. Bollerslev, Tauchen & Zhou (2009) nunjukin VRP yang sama bahkan *memprediksi* return ekuitas masa depan: pas premium tinggi, takut tinggi, dan expected return tinggi.

Ini kenapa "jualan volatilitas" itu strategi nyata dan bukan makan siang gratis. Penjual ngumpulin premium sebagian besar waktu dan nyerap rugi besar yang langka. Sisa module ini bikin itu persis: **variance swap** yang ngemas trade-nya, **P&L left-skewed** sisi short (dengan simulator yang disematkan), **replikasi bebas-model** yang ngebiarin kamu bangun variance swap dari opsi biasa, dan **aplikasi**-nya — gimana trader berdisiplin manen VRP dengan tail hedge wajib.

⟦Disclaimer: kanon akademik + praktisi mapan (Carr-Wu; Bollerslev-Tauchen-Zhou; Demeterfi-Derman-Kamal-Zou; Bakshi-Kapadia-Madan), terverifikasi-web — edukatif, bukan nasihat keuangan.⟧`
      }
    },
    {
      id: 'intuition',
      heading: { en: 'The fear premium, felt', id: 'Premium ketakutan, dirasakan' },
      body: {
        en: `Picture two numbers on a screen. The first is the **strike** the variance swap will give you — say, an implied vol of 60%. The second is what the stock actually *does* over the next quarter — say, it realises 50%. If you **sold** the variance (you are short the swap), you keep the difference. Most quarters, you win, because implied sits above realised. That is the **fear premium**: you are the one selling insurance, and the buyer is paying you to take the crash risk off their hands.

But feel the *shape* of that bet, because the shape is the whole story.

- **Realised variance cannot go below zero, and it has no ceiling.** A quiet quarter pins $RV$ near a small number; a crash sends it through the roof. So the distribution of $RV$ is **right-skewed** — a long tail of large values. (Vol clusters and spikes; it does not gently drift.)
- **Your short-vol P&L is $K_{var}-RV$.** Flip a right-skewed thing and you get a **left-skewed** payoff: most outcomes are a small win (you collected the premium), but the left tail holds rare, large losses (the quarter vol exploded).
- This is the **"pennies in front of a steamroller"** picture. High win rate, small average gain, occasional catastrophic loss. The mean can be positive *and* the strategy can still ruin you if you size it as though the losses cannot happen.

Three knobs change the shape, and you can feel each one in the embedded simulator:

1. **The gap (implied minus realised).** Widen it and the average premium grows — the whole P&L distribution shifts right and your win rate climbs toward certainty. This is the VRP you are harvesting.
2. **The horizon.** Over a longer window $RV$ averages out more (the law of large numbers), so its distribution tightens around its mean — fewer wild quarters, but also less chance of a lucky low-realised windfall.
3. **Jumps — vol spikes.** This is the dangerous knob. A few large downward jumps per year barely move the *median* outcome but **fatten the right tail of $RV$** dramatically — which is exactly the left tail of your short P&L. The win rate can still look great while your worst case and your conditional loss (CVaR) get much worse. That single fact is why a naive short-vol book looks like a money machine right up until it isn't.

The intuition to carry forward: **selling variance pays you the fear premium, but you are paid because you are short the tail.** The edge is real (Carr-Wu), but it is an insurance edge, and insurers who do not respect the tail go bankrupt.`,
        id: `Bayangin dua angka di layar. Yang pertama itu **strike** yang variance swap bakal kasih kamu — misalnya, implied vol 60%. Yang kedua itu apa yang saham benar-benar *lakukan* kuartal depan — misalnya, dia realisasi 50%. Kalau kamu **jual** variance-nya (kamu short swap-nya), kamu simpan selisihnya. Sebagian besar kuartal, kamu menang, karena implied duduk di atas realised. Itu **premium ketakutan**: kamu yang jualan asuransi, dan pembeli bayar kamu buat ngambil risiko crash dari tangannya.

Tapi rasain *bentuk* taruhan itu, karena bentuknya itu seluruh ceritanya.

- **Realised variance gak bisa di bawah nol, dan gak punya langit-langit.** Kuartal tenang nge-pin $RV$ dekat angka kecil; crash ngirim dia menembus atap. Jadi distribusi $RV$ itu **right-skewed** — ekor panjang nilai-nilai besar. (Vol nge-cluster dan melonjak; dia gak hanyut lembut.)
- **P&L short-vol-mu itu $K_{var}-RV$.** Balik hal yang right-skewed dan kamu dapet payoff **left-skewed**: sebagian besar hasil itu win kecil (kamu ngumpulin premium), tapi ekor kiri nahan rugi besar yang langka (kuartal vol meledak).
- Ini gambar **"pennies in front of a steamroller"** (recehan di depan mesin penggilas). Win rate tinggi, gain rata-rata kecil, rugi katastrofik sesekali. Mean bisa positif *dan* strategi-nya masih bisa ngancurin kamu kalau kamu size-nya seolah rugi-nya gak bisa terjadi.

Tiga kenop ngubah bentuknya, dan kamu bisa ngerasain tiap satu di simulator yang disematkan:

1. **Jaraknya (implied dikurangi realised).** Lebarin dan premium rata-rata tumbuh — seluruh distribusi P&L geser ke kanan dan win rate-mu naik menuju kepastian. Ini VRP yang kamu panen.
2. **Horizon-nya.** Atas jendela lebih panjang $RV$ rata-rata lebih (hukum bilangan besar), jadi distribusinya ngerapet sekitar mean-nya — lebih sedikit kuartal liar, tapi juga lebih sedikit peluang rezeki low-realised yang beruntung.
3. **Lompatan — vol spike.** Ini kenop berbahaya. Beberapa lompatan turun besar per tahun nyaris gak gerakin hasil *median* tapi **menggemukkan ekor kanan $RV$** secara dramatis — yang itu persis ekor kiri P&L short-mu. Win rate masih bisa keliatan bagus sementara worst case-mu dan rugi bersyaratmu (CVaR) jadi jauh lebih buruk. Fakta tunggal itu kenapa buku short-vol naif keliatan kayak mesin uang persis sampai dia bukan.

Intuisi yang dibawa ke depan: **jualan variance bayar kamu premium ketakutan, tapi kamu dibayar karena kamu short tail.** Edge-nya nyata (Carr-Wu), tapi dia edge asuransi, dan penjamin yang gak hormat ke tail bangkrut.`
      }
    },
    {
      id: 'formalization',
      heading: { en: 'Variance swaps, formalized', id: 'Variance swap, diformalkan' },
      visualization: {
        id: 'variance-risk-premium-viz',
        component: 'VarianceSwapSim',
        title: {
          en: 'The short-variance P&L: premium, win rate, and the rare-loss tail',
          id: 'P&L short-variance: premium, win rate, dan ekor rugi langka'
        },
        description: {
          en: "Each run simulates n daily returns and computes annualised realised variance RV = (252/n)·Σr²; the histogram is the distribution of realised VOLATILITY √RV across many simulated quarters. The gold vertical is the variance-swap STRIKE (implied vol); the blue dashed line is E[√RV]. Green bars (left of the strike) are quarters where the SHORT wins — realised came in below the strike; red bars (right of the strike) are losses. The gap between the strike and E[√RV] is the VARIANCE RISK PREMIUM (the readout reports VRP in variance points = σ²×10000). Because RV cannot go negative but can spike without limit, its distribution is right-skewed, so the short P&L (Kvar − RV) is LEFT-skewed: the readout shows a high win rate, a small positive mean, but a deeply negative WORST and CVaR-5%, and a negative P&L skew. Crank 'vol spikes / year' up: the median barely moves but the right tail of RV — the rare-large-loss tail of the short — fattens sharply, the worst case and CVaR blow out, and the Sharpe falls. That is the steamroller.",
          id: "Tiap run nyimulasiin n return harian dan ngitung realised variance disetahunkan RV = (252/n)·Σr²; histogram-nya itu distribusi VOLATILITAS terealisasi √RV lintas banyak kuartal tersimulasi. Garis emas vertikal itu STRIKE variance-swap (implied vol); garis biru putus-putus itu E[√RV]. Batang hijau (kiri dari strike) itu kuartal di mana SHORT menang — realised masuk di bawah strike; batang merah (kanan dari strike) itu rugi. Jarak antara strike dan E[√RV] itu VARIANCE RISK PREMIUM (readout ngelaporin VRP dalam variance point = σ²×10000). Karena RV gak bisa negatif tapi bisa melonjak tanpa batas, distribusinya right-skewed, jadi P&L short (Kvar − RV) itu LEFT-skewed: readout nunjukin win rate tinggi, mean positif kecil, tapi WORST dan CVaR-5% yang dalam-negatif, dan skew P&L negatif. Naikin 'vol spikes / year': median nyaris gak gerak tapi ekor kanan RV — ekor rugi-besar-langka si short — menggemuk tajam, worst case dan CVaR meledak, dan Sharpe turun. Itu mesin penggilasnya."
        },
        defaultParams: { impliedVol: 0.6, realizedVol: 0.5, days: 63, jumpsPerYear: 1 },
        height: 440,
      },
      body: {
        en: `**Realised variance.** Over $n$ daily log-returns $r_t=\\ln(S_t/S_{t-1})$,
$$RV=\\frac{252}{n}\\sum_{t=1}^{n}r_t^2,$$
the annualised realised variance (the simulator uses exactly this, with 252 trading days per year). **[Established]**

**The variance swap.** A variance swap pays, at expiry,
$$\\text{payoff}=N_{var}\\,(RV-K_{var}),\\qquad K_{var}=\\sigma_{imp}^2,$$
where $K_{var}$ is the **strike** (squared implied vol) fixed at inception and $N_{var}$ is the **variance notional** (dollars per variance point). The *long* receives $RV-K_{var}$; the **short** receives $K_{var}-RV$ — a small premium when realised undershoots, a large loss when realised overshoots. Variance, not volatility, is the natural underlying because it is **additive in time and replicable** (a volatility swap, paying $\\sqrt{RV}-K_{vol}$, is not — it carries a convexity correction).

**Vega vs variance notional.** Traders think in vega (P&L per vol point), so the two notionals are linked by differentiating $\\sigma^2$:
$$N_{var}=\\frac{N_{vega}}{2\\,\\sigma_{imp}}.$$
Near the strike a variance swap behaves like a vega-notional vol position; far from it, the squared payoff makes the variance swap *convex* in vol — which is precisely why its fair strike sits above the at-the-money vol (the skew lift below).

**The variance risk premium.** Under the real-world measure $\\mathbb P$,
$$\\text{VRP}=K_{var}-\\mathbb{E}^{\\mathbb P}[RV]=\\sigma_{imp}^2-\\mathbb{E}[\\sigma_{realised}^2]>0$$
on average (Carr & Wu 2009). The simulator's readout reports this directly as **VRP in variance points** ($\\sigma^2\\times10^4$), alongside the strike vol and $\\mathbb E[\\sigma_{RV}]$.

**The short-vol P&L distribution.** Per unit variance notional the short P&L is $K_{var}-RV$. Because $RV\\ge0$ with an unbounded right tail, the short payoff is **left-skewed**. With the simulator defaults — implied 60%, realised 50%, $n=63$ days ($T=0.25$ yr), 1 vol-spike/year — you should read approximately: **VRP ≈ 1030 var-points** (strike 60% vs $\\mathbb E[\\sigma_{RV}]$ ≈ 51%), a **win rate ≈ 97%**, a small positive **mean**, but a **worst ≈ −940 var-points**, a negative **CVaR-5%**, a **P&L skew ≈ −0.4 to −0.5**, and a **Sharpe ≈ 2.2**. Push *vol spikes/year* to 4 and the right tail of $RV$ fattens: the worst case roughly doubles (to ≈ −1500 var-points), CVaR turns sharply negative (≈ −480), skew drops to ≈ −0.55, and Sharpe falls to ≈ 1.5 — the win rate barely moves. That is the steamroller, made numerical.

**Model-free fair strike (preview, detailed in Applications).** The strike is not a forecast plucked from a model; it is *replicable*. A variance swap equals a **log contract**, hedged by a static strip of OTM options weighted $1/K^2$ plus a dynamic futures position (Demeterfi-Derman-Kamal-Zou 1999):
$$\\sigma_{fair}^2\\approx\\frac{2\\,e^{rT}}{T}\\sum_K\\frac{\\Delta K}{K^2}\\,O(K),$$
with $O(K)$ the price of the OTM option at strike $K$. The $1/K^2$ weighting is the key result; negative skew lifts $\\sigma_{fair}^2$ above $\\sigma_{ATM}^2$.`,
        id: `**Realised variance.** Atas $n$ log-return harian $r_t=\\ln(S_t/S_{t-1})$,
$$RV=\\frac{252}{n}\\sum_{t=1}^{n}r_t^2,$$
realised variance disetahunkan (simulator pakai persis ini, dengan 252 hari dagang per tahun). **[Established]**

**Variance swap.** Variance swap bayar, saat expiry,
$$\\text{payoff}=N_{var}\\,(RV-K_{var}),\\qquad K_{var}=\\sigma_{imp}^2,$$
di mana $K_{var}$ itu **strike** (implied vol dikuadratkan) yang difiksasi saat inisiasi dan $N_{var}$ itu **variance notional** (dolar per variance point). Si *long* nerima $RV-K_{var}$; si **short** nerima $K_{var}-RV$ — premium kecil pas realised meleset di bawah, rugi besar pas realised meleset di atas. Variance, bukan volatilitas, itu underlying alami karena dia **aditif dalam waktu dan bisa-direplikasi** (volatility swap, bayar $\\sqrt{RV}-K_{vol}$, bukan — dia bawa koreksi konveksitas).

**Vega vs variance notional.** Trader mikir dalam vega (P&L per vol point), jadi dua notional terhubung lewat nurunin $\\sigma^2$:
$$N_{var}=\\frac{N_{vega}}{2\\,\\sigma_{imp}}.$$
Dekat strike variance swap berperilaku kayak posisi vol vega-notional; jauh darinya, payoff yang dikuadratkan bikin variance swap *konveks* dalam vol — yang persis kenapa strike wajarnya duduk di atas vol at-the-money (lift skew di bawah).

**Variance risk premium.** Di bawah ukuran dunia-nyata $\\mathbb P$,
$$\\text{VRP}=K_{var}-\\mathbb{E}^{\\mathbb P}[RV]=\\sigma_{imp}^2-\\mathbb{E}[\\sigma_{realised}^2]>0$$
rata-rata (Carr & Wu 2009). Readout simulator ngelaporin ini langsung sebagai **VRP dalam variance point** ($\\sigma^2\\times10^4$), bareng strike vol dan $\\mathbb E[\\sigma_{RV}]$.

**Distribusi P&L short-vol.** Per unit variance notional P&L short itu $K_{var}-RV$. Karena $RV\\ge0$ dengan ekor kanan tak-terbatas, payoff short itu **left-skewed**. Dengan default simulator — implied 60%, realised 50%, $n=63$ hari ($T=0.25$ thn), 1 vol-spike/tahun — kamu mestinya baca kira-kira: **VRP ≈ 1030 var-point** (strike 60% vs $\\mathbb E[\\sigma_{RV}]$ ≈ 51%), **win rate ≈ 97%**, **mean** positif kecil, tapi **worst ≈ −940 var-point**, **CVaR-5%** negatif, **skew P&L ≈ −0.4 sampai −0.5**, dan **Sharpe ≈ 2.2**. Dorong *vol spikes/tahun* ke 4 dan ekor kanan $RV$ menggemuk: worst case kira-kira dua-kali-lipat (ke ≈ −1500 var-point), CVaR berbalik tajam-negatif (≈ −480), skew turun ke ≈ −0.55, dan Sharpe turun ke ≈ 1.5 — win rate nyaris gak gerak. Itu mesin penggilas, dibikin numerik.

**Strike wajar bebas-model (pratinjau, detail di Aplikasi).** Strike-nya bukan forecast yang dicomot dari model; dia *bisa-direplikasi*. Variance swap setara **log contract**, di-hedge lewat strip statis opsi OTM berbobot $1/K^2$ plus posisi futures dinamis (Demeterfi-Derman-Kamal-Zou 1999):
$$\\sigma_{fair}^2\\approx\\frac{2\\,e^{rT}}{T}\\sum_K\\frac{\\Delta K}{K^2}\\,O(K),$$
dengan $O(K)$ itu harga opsi OTM di strike $K$. Bobot $1/K^2$ itu hasil kuncinya; skew negatif ngangkat $\\sigma_{fair}^2$ di atas $\\sigma_{ATM}^2$.`
      }
    },
    {
      id: 'worked-example',
      heading: { en: 'Worked example: reading the short-vol sim', id: 'Contoh: membaca sim short-vol' },
      body: {
        en: `Take the simulator defaults: implied vol $\\sigma_{imp}=60\\%$, true realised vol $\\sigma_{real}=50\\%$, horizon $n=63$ trading days ($T=63/252=0.25$ yr), and 1 downward vol-spike per year. You are **short** one unit of variance notional.

**1. The strike and the premium.** The strike is $K_{var}=\\sigma_{imp}^2=0.60^2=0.36$, i.e. **3600 variance points** (the sim reports variance in $\\sigma^2\\times10^4$). The simulator draws 1500 quarters, each $RV=\\frac{252}{63}\\sum_{t=1}^{63}r_t^2$ with $r_t$ drawn at 50% annualised vol plus occasional jumps. The mean realised comes out near $\\mathbb E[RV]\\approx0.257$ ($\\mathbb E[\\sigma_{RV}]\\approx51\\%$ — a touch above the 50% input because the downward jumps add variance). The **VRP** the readout shows is $K_{var}-\\mathbb E[RV]\\approx0.36-0.257\\approx0.103$, i.e. **≈ 1030 variance points** — the average premium you earn for being short.

**2. The win rate and the shape.** Because the strike (60%) sits well above where realised typically lands (≈ 50–51%), the **short wins ≈ 97% of quarters** — the green bars (left of the gold strike line) dominate the histogram. The **mean P&L ≈ +1030 var-points**, and the **Sharpe ≈ 2.2** looks spectacular. But look at the tails the readout prints: the **worst single quarter ≈ −940 var-points** (a quarter where realised vol blew past the strike), and the **P&L skew ≈ −0.45** — confirming the payoff is left-skewed exactly as predicted. The histogram is green and bunched on the left with a thin red right tail of realised-vol outcomes; that thin right tail *is* your loss tail.

**3. Turn on the steamroller.** Drag *vol spikes / year* from 1 up to 4. Watch what does — and does not — change:
- The **win rate barely moves** (≈ 92%): most quarters still see realised below the strike.
- The **worst case roughly doubles**, to ≈ −1500 variance points: the rare quarters now include violent vol explosions.
- **CVaR-5%** (the average of the worst 5% of quarters) swings sharply negative, to ≈ −480 var-points — your *conditional* loss, the thing that actually bankrupts a short-vol book, has more than blown out.
- **Skew falls** to ≈ −0.55 and **Sharpe drops** to ≈ 1.5.

The lesson is brutal and exact: **the metric that looks safest (win rate) is the one that barely reacts to tail risk, while the metrics that matter for survival (worst, CVaR, skew) deteriorate fast.** A trader who sizes by win rate is sizing by the one number that lies.

**4. Widen the premium.** Now set realised down to 40% (implied still 60%). The whole histogram shifts left, away from the strike: the VRP jumps to ≈ 2000 var-points, the win rate approaches 100%, and the Sharpe climbs — this is the "rich vol regime" where short-vol prints money. The danger is that you become convinced the steamroller is not real, right up until realised gaps above implied in a single week. **Same edge, same structural left tail; only the regime changed.**

⟦Disclaimer: illustrative Monte-Carlo numbers from the teaching simulator (1500 runs, fixed seed); they will vary slightly and are not a trading model. Real variance swaps have caps, term structure, and basis; not a recommendation.⟧`,
        id: `Ambil default simulator: implied vol $\\sigma_{imp}=60\\%$, realised vol asli $\\sigma_{real}=50\\%$, horizon $n=63$ hari dagang ($T=63/252=0.25$ thn), dan 1 vol-spike turun per tahun. Kamu **short** satu unit variance notional.

**1. Strike dan premium.** Strike-nya $K_{var}=\\sigma_{imp}^2=0.60^2=0.36$, yaitu **3600 variance point** (sim ngelaporin variance dalam $\\sigma^2\\times10^4$). Simulator nggambar 1500 kuartal, tiap $RV=\\frac{252}{63}\\sum_{t=1}^{63}r_t^2$ dengan $r_t$ diundi di vol 50% disetahunkan plus lompatan sesekali. Mean realised keluar dekat $\\mathbb E[RV]\\approx0.257$ ($\\mathbb E[\\sigma_{RV}]\\approx51\\%$ — sedikit di atas input 50% karena lompatan turun nambah variance). **VRP** yang readout tunjukin itu $K_{var}-\\mathbb E[RV]\\approx0.36-0.257\\approx0.103$, yaitu **≈ 1030 variance point** — premium rata-rata yang kamu dapet buat jadi short.

**2. Win rate dan bentuknya.** Karena strike (60%) duduk jauh di atas tempat realised biasanya mendarat (≈ 50–51%), **short menang ≈ 97% kuartal** — batang hijau (kiri dari garis strike emas) mendominasi histogram. **Mean P&L ≈ +1030 var-point**, dan **Sharpe ≈ 2.2** keliatan spektakuler. Tapi lihat ekor yang readout cetak: **kuartal tunggal terburuk ≈ −940 var-point** (kuartal di mana realised vol meledak melewati strike), dan **skew P&L ≈ −0.45** — ngonfirmasi payoff-nya left-skewed persis seperti diprediksi. Histogram-nya hijau dan ngumpul di kiri dengan ekor kanan merah tipis hasil realised-vol; ekor kanan tipis itu *itulah* ekor rugimu.

**3. Nyalain mesin penggilas.** Seret *vol spikes / year* dari 1 naik ke 4. Lihat apa yang berubah — dan tidak:
- **Win rate nyaris gak gerak** (≈ 92%): sebagian besar kuartal masih lihat realised di bawah strike.
- **Worst case kira-kira dua-kali-lipat**, ke ≈ −1500 variance point: kuartal langka sekarang termasuk ledakan vol ganas.
- **CVaR-5%** (rata-rata 5% kuartal terburuk) berayun tajam-negatif, ke ≈ −480 var-point — rugi *bersyarat*-mu, hal yang sebenarnya membangkrutkan buku short-vol, lebih dari meledak.
- **Skew turun** ke ≈ −0.55 dan **Sharpe jatuh** ke ≈ 1.5.

Pelajarannya brutal dan persis: **metrik yang keliatan paling aman (win rate) itu yang nyaris gak bereaksi ke tail risk, sementara metrik yang penting buat kelangsungan-hidup (worst, CVaR, skew) memburuk cepat.** Trader yang size pakai win rate itu size pakai satu angka yang bohong.

**4. Lebarin premium-nya.** Sekarang set realised turun ke 40% (implied tetap 60%). Seluruh histogram geser ke kiri, menjauh dari strike: VRP melonjak ke ≈ 2000 var-point, win rate mendekati 100%, dan Sharpe naik — ini "rezim vol mahal" tempat short-vol nyetak uang. Bahayanya itu kamu jadi yakin mesin penggilas-nya gak nyata, persis sampai realised gap di atas implied dalam satu minggu. **Edge sama, ekor kiri struktural sama; cuma rezimnya yang berubah.**

⟦Disclaimer: angka Monte-Carlo ilustratif dari simulator pengajaran (1500 run, seed tetap); mereka bakal sedikit bervariasi dan bukan model trading. Variance swap nyata punya cap, term structure, dan basis; bukan rekomendasi.⟧`
      }
    },
    {
      id: 'applications',
      heading: { en: 'Applications', id: 'Aplikasi' },
      body: {
        en: `**The model-free replication (advanced).** The reason a variance swap is not just a bet but an *instrument* is that you can build one out of ordinary options. Demeterfi, Derman, Kamal & Zou (1999) showed that the realised variance of a delta-hedged position equals the payoff of a **log contract** $-\\frac{2}{T}\\ln(S_T/S_0)$, and that this log payoff is replicated by a **static strip of out-of-the-money options weighted $1/K^2$** plus a dynamic futures (forward) hedge. The fair strike is
$$\\sigma_{fair}^2\\approx\\frac{2\\,e^{rT}}{T}\\sum_K\\frac{\\Delta K}{K^2}\\,O(K),$$
where $O(K)$ is the price of the OTM put (for $K<F$) or call (for $K>F$) at strike $K$, and a small forward-correction term handles the difference between the reference $S^\\ast$ and the forward $F$. The **$1/K^2$ weighting** is the headline result: low strikes (crash protection) get enormous weight, which is *why* a variance swap is so sensitive to the put wing — and why **negative skew lifts the fair strike above the at-the-money** $\\sigma_{ATM}^2$. The embedded \`fairVarianceStrike\` helper makes this concrete: with a flat surface it returns ≈ $\\sigma_{ATM}$ (e.g. 20% → 20.0%), but add a downward skew and it lifts (20% ATM with skew → ≈ 20.9%). The market does *not* charge you $\\sigma_{ATM}^2$ for a variance swap; it charges you the $1/K^2$-weighted strip, which the skew makes richer.

**Model-free implied moments.** The exact same spanning generalizes beyond variance. Bakshi, Kapadia & Madan (2003) showed that $1/K^2$-, and analogously weighted, strips of OTM options recover the entire **risk-neutral variance, skewness, and kurtosis** of the return distribution — model-free, straight off the option surface. This is why the option market is a *forecast of the whole shape* of returns, not just their spread. And the **VIX** is precisely this: a discretised, $1/K^2$-weighted, 30-day variance-swap rate published as an index. When you read "the VIX is 18," you are reading a variance-swap strike.

**Harvesting the VRP (the trade).** The application is to **sell** variance to collect the premium: short variance/volatility swaps, or — for those without swap access — short strangles or iron condors, delta-hedged. The seller earns implied-minus-realised most of the time, exactly the [order-flow VRP harvest](item:tradingriot-orderflow-vrp) a systematic trader runs. But because the P&L is structurally left-skewed (the sim's whole point), three disciplines are non-negotiable: (1) a **mandatory tail hedge** — own cheap, far-OTM puts so the steamroller has a floor; (2) **small sizing** — size for the CVaR and the worst case, never the win rate; (3) **regime and decay awareness** — the premium fattens and thins with the vol regime, and a crowded short-vol trade decays. It is a real edge — but, like every backtested edge, you must ask whether it is genuine or [overfit](item:backtest-overfitting-dsr) and whether your live [expectancy](item:traderxo-expectancy) survives the path, because a left-skewed strategy can show a beautiful Sharpe for years and still ruin you in one quarter.

**Where the strike comes from.** The $\\sigma$ you sell is read off the [implied-volatility surface](item:gatheral-vol-surface) — and since the variance-swap strike is a $1/K^2$ integral over that surface, the *skew and wings* of the surface, not just its ATM level, set the price you receive. That ties this module directly to the surface modules: an arbitrage-free, well-calibrated surface is the input to an honest variance-swap quote.`,
        id: `**Replikasi bebas-model (lanjutan).** Alasan variance swap bukan cuma taruhan tapi *instrumen* itu kamu bisa bangun satu dari opsi biasa. Demeterfi, Derman, Kamal & Zou (1999) nunjukin realised variance posisi yang di-delta-hedge setara payoff **log contract** $-\\frac{2}{T}\\ln(S_T/S_0)$, dan payoff log ini direplikasi lewat **strip statis opsi out-of-the-money berbobot $1/K^2$** plus hedge futures (forward) dinamis. Strike wajarnya
$$\\sigma_{fair}^2\\approx\\frac{2\\,e^{rT}}{T}\\sum_K\\frac{\\Delta K}{K^2}\\,O(K),$$
di mana $O(K)$ itu harga put OTM (buat $K<F$) atau call (buat $K>F$) di strike $K$, dan suku koreksi-forward kecil nangani selisih antara referensi $S^\\ast$ dan forward $F$. **Bobot $1/K^2$** itu hasil utamanya: strike rendah (proteksi crash) dapet bobot raksasa, yang itu *kenapa* variance swap begitu sensitif ke put wing — dan kenapa **skew negatif ngangkat strike wajar di atas at-the-money** $\\sigma_{ATM}^2$. Helper \`fairVarianceStrike\` yang disematkan bikin ini konkret: dengan permukaan datar dia balikin ≈ $\\sigma_{ATM}$ (misalnya 20% → 20.0%), tapi tambah skew turun dan dia ngangkat (20% ATM dengan skew → ≈ 20.9%). Pasar *gak* nge-charge kamu $\\sigma_{ATM}^2$ buat variance swap; dia nge-charge kamu strip berbobot $1/K^2$, yang skew bikin lebih mahal.

**Momen implied bebas-model.** Spanning yang persis sama ngegeneralisasi melampaui variance. Bakshi, Kapadia & Madan (2003) nunjukin strip opsi OTM berbobot $1/K^2$ — dan yang dibobot analog — ngerecover seluruh **variance, skewness, dan kurtosis risk-neutral** distribusi return — bebas-model, langsung dari permukaan opsi. Ini kenapa pasar opsi itu *forecast atas seluruh bentuk* return, bukan cuma sebarannya. Dan **VIX** itu persis ini: variance-swap rate 30-hari berbobot $1/K^2$ yang didiskretisasi diterbitkan sebagai indeks. Pas kamu baca "VIX-nya 18," kamu baca strike variance-swap.

**Manen VRP (trade-nya).** Aplikasinya itu **jual** variance buat ngumpulin premium: short variance/volatility swap, atau — buat yang tanpa akses swap — short strangle atau iron condor, di-delta-hedge. Penjual dapet implied-dikurangi-realised sebagian besar waktu, persis [panen VRP order-flow](item:tradingriot-orderflow-vrp) yang trader sistematis jalanin. Tapi karena P&L-nya struktural left-skewed (inti seluruh sim-nya), tiga disiplin gak-bisa-ditawar: (1) **tail hedge wajib** — punya put murah jauh-OTM biar mesin penggilas-nya punya lantai; (2) **sizing kecil** — size buat CVaR dan worst case, jangan pernah win rate; (3) **kesadaran rezim dan decay** — premium menggemuk dan menipis dengan rezim vol, dan trade short-vol yang ramai akan decay. Dia edge nyata — tapi, kayak tiap edge yang di-backtest, kamu harus tanya apakah dia asli atau [overfit](item:backtest-overfitting-dsr) dan apakah [expectancy](item:traderxo-expectancy) live-mu bertahan di jalur, karena strategi left-skewed bisa nunjukin Sharpe cantik bertahun-tahun dan masih ngancurin kamu dalam satu kuartal.

**Dari mana strike-nya berasal.** $\\sigma$ yang kamu jual dibaca dari [permukaan implied-volatility](item:gatheral-vol-surface) — dan karena strike variance-swap itu integral $1/K^2$ atas permukaan itu, *skew dan wing* permukaan-nya, bukan cuma level ATM-nya, yang nyetel harga yang kamu terima. Itu ngiket module ini langsung ke module permukaan: permukaan bebas-arbitrase yang terkalibrasi-baik itu input ke kuotasi variance-swap yang jujur.`
      }
    },
    {
      id: 'practice',
      heading: { en: 'Practice', id: 'Latihan' },
      body: {
        en: `**1.** Define realised variance, the variance-swap strike, and the variance risk premium. Why is the VRP usually positive, and what is the economic reason?

<details><summary>Answer</summary>
REALISED VARIANCE over n daily log-returns is RV = (252/n)·Σ r_t², annualised — a backward-looking fact about how much the underlying actually moved. The VARIANCE-SWAP STRIKE is K_var = σ_imp², the level of future variance the options market lets you lock in today (squared implied vol). The VARIANCE RISK PREMIUM is VRP = K_var − E[RV] = σ_imp² − E[σ_realised²]. It is usually POSITIVE because implied variance sits systematically above what subsequently realises (Carr & Wu 2009). The economic reason is INSURANCE: long-variance positions pay off precisely in crashes, when the rest of a portfolio is losing, so risk-averse investors overpay for that protection, and sellers of variance are compensated for warehousing crash risk. Bollerslev, Tauchen & Zhou (2009) further showed the VRP predicts future equity returns — high premium (high fear) predicts high returns.
</details>

**2.** A variance swap pays N_var·(RV − K_var). Explain the short side's P&L distribution: its win rate, its mean, and its skew. Why "pennies in front of a steamroller"?

<details><summary>Answer</summary>
The SHORT receives K_var − RV per unit variance notional. Because realised variance cannot go below zero but can spike without an upper bound, RV is RIGHT-SKEWED. The short payoff K_var − RV is therefore LEFT-SKEWED: most quarters realised undershoots the strike, so the short collects a small premium and the WIN RATE is high (≈ 97% at the sim defaults). The MEAN is a small positive number (the VRP). But the LEFT TAIL holds rare, large losses — quarters when volatility explodes past the strike. That is "pennies in front of a steamroller": many small gains, occasional catastrophic loss. The danger is that the mean and win rate look great while the worst case and CVaR are devastating; sizing by the win rate ignores the very tail that defines the risk.
</details>

**3.** In the simulator at implied 60%, realised 50%, 63 days, contrast 1 vol-spike/year vs 4. Which readouts move a lot, which barely move, and what is the lesson for position sizing?

<details><summary>Answer</summary>
Going from 1 to 4 vol-spikes/year: the WIN RATE barely moves (≈ 97% → ≈ 92%) and the VRP only modestly shrinks (≈ 1030 → ≈ 830 var-points), because most quarters still realise below the strike. But the TAIL metrics deteriorate sharply: the WORST roughly doubles (≈ −940 → ≈ −1500 var-points), CVaR-5% swings from mildly to deeply negative (≈ −70 → ≈ −480), the P&L SKEW falls (≈ −0.45 → ≈ −0.55), and the SHARPE drops (≈ 2.2 → ≈ 1.5). LESSON: the metric that looks safest (win rate) is the one least sensitive to tail risk, while the survival metrics (worst, CVaR, skew) react strongly. Size for the CVaR and worst case, never the win rate — and carry a tail hedge.
</details>

**4.** State the Demeterfi-Derman-Kamal-Zou fair variance strike and explain the 1/K² weighting. Why does skew lift the strike above σ_ATM², and how does this connect to the VIX and to model-free implied moments?

<details><summary>Answer</summary>
A variance swap equals a LOG CONTRACT, replicated by a STATIC STRIP OF OTM OPTIONS weighted 1/K² plus a dynamic futures hedge: σ²_fair ≈ (2·e^(rT)/T)·Σ (ΔK/K²)·O(K), with O(K) the OTM option price at strike K (put below the forward, call above) and a small forward-correction term. The 1/K² WEIGHTING means low strikes — deep-OTM puts, i.e. crash protection — receive enormous weight, so the strike is dominated by the put wing. Because the surface has NEGATIVE SKEW (OTM puts richer than calls), this 1/K²-weighted strip is more expensive than the ATM option alone, so σ²_fair sits ABOVE σ_ATM². The VIX is exactly this construction discretised over a 30-day horizon — a published variance-swap rate. The SAME option spanning, generalized (Bakshi-Kapadia-Madan 2003), recovers the model-free risk-neutral variance, skewness, and kurtosis, making the option surface a forecast of the entire risk-neutral distribution.
</details>`,
        id: `**1.** Definisikan realised variance, strike variance-swap, dan variance risk premium. Kenapa VRP biasanya positif, dan apa alasan ekonominya?

<details><summary>Jawaban</summary>
REALISED VARIANCE atas n log-return harian itu RV = (252/n)·Σ r_t², disetahunkan — fakta menengok-belakang soal seberapa banyak underlying-nya benar-benar gerak. STRIKE VARIANCE-SWAP itu K_var = σ_imp², level variance masa depan yang pasar opsi biarin kamu kunci hari ini (implied vol dikuadratkan). VARIANCE RISK PREMIUM itu VRP = K_var − E[RV] = σ_imp² − E[σ_realised²]. Dia biasanya POSITIF karena implied variance duduk sistematis di atas yang kemudian realisasi (Carr & Wu 2009). Alasan ekonominya itu ASURANSI: posisi long-variance bayar persis pas crash, pas sisa portofolio rugi, jadi investor risk-averse overpay buat proteksi itu, dan penjual variance dikompensasi buat nampung risiko crash. Bollerslev, Tauchen & Zhou (2009) lebih jauh nunjukin VRP memprediksi return ekuitas masa depan — premium tinggi (takut tinggi) memprediksi return tinggi.
</details>

**2.** Variance swap bayar N_var·(RV − K_var). Jelasin distribusi P&L sisi short: win rate-nya, mean-nya, dan skew-nya. Kenapa "pennies in front of a steamroller"?

<details><summary>Jawaban</summary>
Si SHORT nerima K_var − RV per unit variance notional. Karena realised variance gak bisa di bawah nol tapi bisa melonjak tanpa batas atas, RV itu RIGHT-SKEWED. Payoff short K_var − RV karenanya LEFT-SKEWED: sebagian besar kuartal realised meleset di bawah strike, jadi short ngumpulin premium kecil dan WIN RATE-nya tinggi (≈ 97% di default sim). MEAN-nya angka positif kecil (VRP). Tapi EKOR KIRI nahan rugi besar langka — kuartal pas volatilitas meledak melewati strike. Itu "pennies in front of a steamroller": banyak gain kecil, rugi katastrofik sesekali. Bahayanya mean dan win rate keliatan bagus sementara worst case dan CVaR menghancurkan; size pakai win rate ngabaikan tail yang justru ndefinisiin risikonya.
</details>

**3.** Di simulator pada implied 60%, realised 50%, 63 hari, kontraskan 1 vol-spike/tahun vs 4. Readout mana yang gerak banyak, mana yang nyaris gak gerak, dan apa pelajarannya buat position sizing?

<details><summary>Jawaban</summary>
Naik dari 1 ke 4 vol-spike/tahun: WIN RATE nyaris gak gerak (≈ 97% → ≈ 92%) dan VRP cuma menyusut sedikit (≈ 1030 → ≈ 830 var-point), karena sebagian besar kuartal masih realisasi di bawah strike. Tapi metrik EKOR memburuk tajam: WORST kira-kira dua-kali-lipat (≈ −940 → ≈ −1500 var-point), CVaR-5% berayun dari sedikit ke dalam-negatif (≈ −70 → ≈ −480), SKEW P&L turun (≈ −0.45 → ≈ −0.55), dan SHARPE jatuh (≈ 2.2 → ≈ 1.5). PELAJARAN: metrik yang keliatan paling aman (win rate) itu yang paling gak sensitif ke tail risk, sementara metrik kelangsungan-hidup (worst, CVaR, skew) bereaksi kuat. Size buat CVaR dan worst case, jangan pernah win rate — dan bawa tail hedge.
</details>

**4.** Nyatain strike variance wajar Demeterfi-Derman-Kamal-Zou dan jelasin bobot 1/K². Kenapa skew ngangkat strike di atas σ_ATM², dan gimana ini terhubung ke VIX dan ke momen implied bebas-model?

<details><summary>Jawaban</summary>
Variance swap setara LOG CONTRACT, direplikasi lewat STRIP STATIS OPSI OTM berbobot 1/K² plus hedge futures dinamis: σ²_fair ≈ (2·e^(rT)/T)·Σ (ΔK/K²)·O(K), dengan O(K) harga opsi OTM di strike K (put di bawah forward, call di atas) dan suku koreksi-forward kecil. Bobot 1/K² berarti strike rendah — put deep-OTM, yaitu proteksi crash — nerima bobot raksasa, jadi strike-nya didominasi put wing. Karena permukaannya punya SKEW NEGATIF (put OTM lebih mahal dari call), strip berbobot 1/K² ini lebih mahal dari opsi ATM saja, jadi σ²_fair duduk DI ATAS σ_ATM². VIX itu persis konstruksi ini didiskretisasi atas horizon 30-hari — variance-swap rate yang diterbitkan. Spanning opsi yang SAMA, digeneralisasi (Bakshi-Kapadia-Madan 2003), ngerecover variance, skewness, dan kurtosis risk-neutral bebas-model, bikin permukaan opsi jadi forecast atas seluruh distribusi risk-neutral.
</details>`
      }
    },
    {
      id: 'connections',
      heading: { en: 'Connections', id: 'Koneksi' },
      body: {
        en: `- **Where the strike comes from**: [the implied-volatility surface](item:gatheral-vol-surface) — the variance-swap strike is a $1/K^2$-weighted integral over the whole surface, so the *skew and wings*, not just the ATM level, set the price. An arbitrage-free, well-calibrated surface is the input to an honest variance-swap quote, and the skew is exactly what lifts the strike above $\\sigma_{ATM}^2$.
- **The pricing layer beneath**: [options, the Greeks, and payoffs](item:options-greeks-payoffs) — a variance swap is built from a static strip of OTM options plus a dynamic delta hedge; the $1/K^2$ strip and the log contract are *Greeks engineering*. The short-vol structures (strangles, condors) that proxy a short variance swap are exactly the short-gamma / short-vega / positive-theta positions from that module.
- **Harvesting it in practice**: [order flow & the variance risk premium](item:tradingriot-orderflow-vrp) — the systematic trader who *sells* options to collect the VRP, combining the left-skewed short-vol payout curve with a mandatory tail hedge and uncorrelated strategies. This module is the *why*; that one is the *how he runs it*.
- **Is the edge real or fit?**: [backtest overfitting & the deflated Sharpe](item:backtest-overfitting-dsr) and [expectancy & survival](item:traderxo-expectancy) — a left-skewed strategy can show a beautiful Sharpe for years and still ruin you in one quarter, so you must ask whether the VRP edge is genuine and whether your live expectancy survives the path.`,
        id: `- **Dari mana strike-nya berasal**: [permukaan implied-volatility](item:gatheral-vol-surface) — strike variance-swap itu integral berbobot $1/K^2$ atas seluruh permukaan, jadi *skew dan wing*, bukan cuma level ATM, yang nyetel harga. Permukaan bebas-arbitrase yang terkalibrasi-baik itu input ke kuotasi variance-swap yang jujur, dan skew-nya persis yang ngangkat strike di atas $\\sigma_{ATM}^2$.
- **Lapisan pricing di bawah**: [opsi, Greeks, dan payoff](item:options-greeks-payoffs) — variance swap dibangun dari strip statis opsi OTM plus delta hedge dinamis; strip $1/K^2$ dan log contract itu *rekayasa Greeks*. Struktur short-vol (strangle, condor) yang mem-proxy short variance swap itu persis posisi short-gamma / short-vega / positif-theta dari module itu.
- **Manen-nya dalam praktik**: [order flow & variance risk premium](item:tradingriot-orderflow-vrp) — trader sistematis yang *jual* opsi buat ngumpulin VRP, ngegabungin kurva payout short-vol yang left-skewed dengan tail hedge wajib dan strategi tak-berkorelasi. Module ini *kenapa*-nya; yang itu *gimana dia jalanin*-nya.
- **Edge-nya nyata atau fit?**: [backtest overfitting & deflated Sharpe](item:backtest-overfitting-dsr) dan [expectancy & kelangsungan-hidup](item:traderxo-expectancy) — strategi left-skewed bisa nunjukin Sharpe cantik bertahun-tahun dan masih ngancurin kamu dalam satu kuartal, jadi kamu harus tanya apakah edge VRP-nya asli dan apakah expectancy live-mu bertahan di jalur.`
      }
    },
    {
      id: 'sources',
      heading: { en: 'Sources', id: 'Sumber' },
      body: {
        en: `Established academic and practitioner canon (web-verified); educational, not financial advice.
- **Carr, P., and Wu, L.** (2009). "Variance Risk Premiums." *Review of Financial Studies*, 22(3), 1311–1341. Synthesizes the variance-swap rate from options and measures the premium across indices and single names. **[Established]**
- **Bollerslev, T., Tauchen, G., and Zhou, H.** (2009). "Expected Stock Returns and Variance Risk Premia." *Review of Financial Studies*, 22(11), 4463–4492. The VRP predicts aggregate equity returns. **[Established]**
- **Demeterfi, K., Derman, E., Kamal, M., and Zou, J.** (1999). "More Than You Ever Wanted to Know About Volatility Swaps." *Goldman Sachs Quantitative Strategies Research Notes* (also published as "A Guide to Volatility and Variance Swaps," *Journal of Derivatives*, 6(4), 9–32). The log-contract replication and the $1/K^2$ option strip. **[Established/Practitioner]**
- **Bakshi, G., Kapadia, N., and Madan, D.** (2003). "Stock Return Characteristics, Skew Laws, and the Differential Pricing of Individual Equity Options." *Review of Financial Studies*, 16(1), 101–143. Model-free risk-neutral variance, skewness, and kurtosis from the option spanning. **[Established]**
- Background: Neuberger, A. (1994), the log contract; Breeden, D., and Litzenberger, R. (1978), state-price spanning by option strips; the CBOE VIX White Paper (the discretised 30-day variance-swap rate). **[Established]**
- The interactive **VarianceSwapSim** (\`js/viz.js\`) implements $RV=(252/n)\\sum r_t^2$, the short payoff $K_{var}-RV$, the VRP and tail readouts, and the \`fairVarianceStrike\` log-contract replication; it is verified by \`scripts/verify-variance-sim.mjs\`. **[Practitioner]**

⟦Educational, not financial advice. Selling volatility/variance carries genuine, structurally left-skewed tail risk: a high win rate and an attractive Sharpe can coexist with rare, ruinous losses. Nothing here is a recommendation to trade; size for the tail and the CVaR, not the win rate, and treat the embedded simulator as a teaching idealization, not a trading model.⟧`,
        id: `Kanon akademik dan praktisi mapan (terverifikasi-web); edukatif, bukan nasihat keuangan.
- **Carr, P., dan Wu, L.** (2009). "Variance Risk Premiums." *Review of Financial Studies*, 22(3), 1311–1341. Mensintesis variance-swap rate dari opsi dan ngukur premium lintas indeks dan saham tunggal. **[Established]**
- **Bollerslev, T., Tauchen, G., dan Zhou, H.** (2009). "Expected Stock Returns and Variance Risk Premia." *Review of Financial Studies*, 22(11), 4463–4492. VRP memprediksi return ekuitas agregat. **[Established]**
- **Demeterfi, K., Derman, E., Kamal, M., dan Zou, J.** (1999). "More Than You Ever Wanted to Know About Volatility Swaps." *Goldman Sachs Quantitative Strategies Research Notes* (juga diterbitkan sebagai "A Guide to Volatility and Variance Swaps," *Journal of Derivatives*, 6(4), 9–32). Replikasi log-contract dan strip opsi $1/K^2$. **[Established/Practitioner]**
- **Bakshi, G., Kapadia, N., dan Madan, D.** (2003). "Stock Return Characteristics, Skew Laws, and the Differential Pricing of Individual Equity Options." *Review of Financial Studies*, 16(1), 101–143. Variance, skewness, dan kurtosis risk-neutral bebas-model dari spanning opsi. **[Established]**
- Latar: Neuberger, A. (1994), log contract; Breeden, D., dan Litzenberger, R. (1978), spanning state-price oleh strip opsi; CBOE VIX White Paper (variance-swap rate 30-hari yang didiskretisasi). **[Established]**
- **VarianceSwapSim** interaktif (\`js/viz.js\`) ngimplementasiin $RV=(252/n)\\sum r_t^2$, payoff short $K_{var}-RV$, readout VRP dan tail, dan replikasi log-contract \`fairVarianceStrike\`; diverifikasi oleh \`scripts/verify-variance-sim.mjs\`. **[Practitioner]**

⟦Edukatif, bukan nasihat keuangan. Jualan volatilitas/variance bawa tail risk asli yang struktural left-skewed: win rate tinggi dan Sharpe menarik bisa berdampingan dengan rugi langka yang menghancurkan. Gak ada di sini yang jadi rekomendasi buat trading; size buat tail dan CVaR, bukan win rate, dan perlakukan simulator yang disematkan sebagai idealization pengajaran, bukan model trading.⟧`
      }
    },
  ],

  audio: { enabled: true },

  selfTest: [
    {
      sectionId: 'motivation',
      question: { en: `What is the variance risk premium, and why does it persist?`, id: `Apa itu variance risk premium, dan kenapa dia bertahan?` },
      prompt: { en: 'Before continuing, try answering:', id: 'Sebelum lanjut, coba jawab:' },
      answer: {
        en: `The VARIANCE RISK PREMIUM is VRP = K_var − E[RV] = σ_imp² − E[σ_realised²]: the gap between implied variance (the variance-swap strike priced from options) and the variance the underlying subsequently realises. It is usually POSITIVE — implied sits systematically above realised (Carr & Wu 2009). It PERSISTS because long-variance positions are crash insurance: they pay off exactly when the rest of a portfolio is losing (2008, 2020), so risk-averse investors overpay for that protection, and whoever SELLS variance is compensated for warehousing crash risk. It is not an arbitrage — it is a genuine risk premium, the price of insurance — which is why it survives and why selling volatility is a real but dangerous edge. Bollerslev, Tauchen & Zhou (2009) further showed the VRP predicts future equity returns: high premium (high fear) forecasts high returns.`,
        id: `VARIANCE RISK PREMIUM itu VRP = K_var − E[RV] = σ_imp² − E[σ_realised²]: jarak antara implied variance (strike variance-swap yang diharga dari opsi) dan variance yang underlying-nya kemudian realisasi. Dia biasanya POSITIF — implied duduk sistematis di atas realised (Carr & Wu 2009). Dia BERTAHAN karena posisi long-variance itu asuransi crash: mereka bayar persis pas sisa portofolio rugi (2008, 2020), jadi investor risk-averse overpay buat proteksi itu, dan siapa pun yang JUAL variance dikompensasi buat nampung risiko crash. Dia bukan arbitrase — dia premium risiko asli, harga asuransi — yang itu kenapa dia bertahan dan kenapa jualan volatilitas itu edge nyata tapi berbahaya. Bollerslev, Tauchen & Zhou (2009) lebih jauh nunjukin VRP memprediksi return ekuitas masa depan: premium tinggi (takut tinggi) memprediksi return tinggi.`
      }
    },
    {
      sectionId: 'formalization',
      question: { en: `Write the realised variance and the short variance-swap payoff, and explain why the short P&L is left-skewed.`, id: `Tulis realised variance dan payoff short variance-swap, dan jelasin kenapa P&L short-nya left-skewed.` },
      prompt: { en: 'Before continuing, try answering:', id: 'Sebelum lanjut, coba jawab:' },
      answer: {
        en: `Realised variance over n daily log-returns: RV = (252/n)·Σ r_t² (annualised, 252 trading days). A variance swap pays N_var·(RV − K_var) with strike K_var = σ_imp², so the SHORT receives K_var − RV per unit variance notional. The short P&L is LEFT-SKEWED because RV is bounded below by zero but has an unbounded right tail — a quiet quarter pins RV low, but a crash sends it through the roof (vol clusters and spikes). Flipping a right-skewed quantity (RV) gives a left-skewed payoff (K_var − RV): most quarters are a small win (you collected the premium, high win rate), but the left tail holds rare, large losses when realised explodes past the strike. In the simulator at implied 60% / realised 50% / 63 days, the short shows a ≈ 97% win rate and a small positive mean but a deeply negative worst and CVaR and a P&L skew near −0.45 — "pennies in front of a steamroller."`,
        id: `Realised variance atas n log-return harian: RV = (252/n)·Σ r_t² (disetahunkan, 252 hari dagang). Variance swap bayar N_var·(RV − K_var) dengan strike K_var = σ_imp², jadi si SHORT nerima K_var − RV per unit variance notional. P&L short itu LEFT-SKEWED karena RV dibatasi bawah oleh nol tapi punya ekor kanan tak-terbatas — kuartal tenang nge-pin RV rendah, tapi crash ngirim dia menembus atap (vol nge-cluster dan melonjak). Membalik kuantitas right-skewed (RV) ngasih payoff left-skewed (K_var − RV): sebagian besar kuartal itu win kecil (kamu ngumpulin premium, win rate tinggi), tapi ekor kiri nahan rugi besar langka pas realised meledak melewati strike. Di simulator pada implied 60% / realised 50% / 63 hari, short nunjukin win rate ≈ 97% dan mean positif kecil tapi worst dan CVaR yang dalam-negatif dan skew P&L dekat −0.45 — "pennies in front of a steamroller."`
      }
    },
    {
      sectionId: 'applications',
      question: { en: `Explain the Demeterfi-Derman-Kamal-Zou replication: the log contract, the 1/K² strip, and why skew lifts the strike. How does the VIX relate?`, id: `Jelasin replikasi Demeterfi-Derman-Kamal-Zou: log contract, strip 1/K², dan kenapa skew ngangkat strike. Gimana VIX terhubung?` },
      prompt: { en: 'Before continuing, try answering:', id: 'Sebelum lanjut, coba jawab:' },
      answer: {
        en: `A variance swap is MODEL-FREE: the realised variance of a delta-hedged position equals the payoff of a LOG CONTRACT (−2/T·ln(S_T/S_0)), which is replicated by a STATIC STRIP OF OTM OPTIONS weighted 1/K² plus a dynamic futures hedge (Demeterfi-Derman-Kamal-Zou 1999). The fair strike is σ²_fair ≈ (2·e^(rT)/T)·Σ (ΔK/K²)·O(K), with O(K) the OTM option price at K (put below the forward, call above). The 1/K² WEIGHTING gives low strikes — deep-OTM puts, i.e. crash protection — enormous weight, so the strike is dominated by the put wing. Because the surface carries NEGATIVE SKEW (OTM puts richer than calls), the 1/K²-weighted strip costs more than the ATM option alone, so σ²_fair sits ABOVE σ_ATM². The VIX is exactly this construction discretised over a 30-day horizon — a published variance-swap rate. And the same spanning, generalized (Bakshi-Kapadia-Madan 2003), recovers the model-free risk-neutral variance, skew, and kurtosis.`,
        id: `Variance swap itu BEBAS-MODEL: realised variance posisi yang di-delta-hedge setara payoff LOG CONTRACT (−2/T·ln(S_T/S_0)), yang direplikasi lewat STRIP STATIS OPSI OTM berbobot 1/K² plus hedge futures dinamis (Demeterfi-Derman-Kamal-Zou 1999). Strike wajarnya σ²_fair ≈ (2·e^(rT)/T)·Σ (ΔK/K²)·O(K), dengan O(K) harga opsi OTM di K (put di bawah forward, call di atas). Bobot 1/K² ngasih strike rendah — put deep-OTM, yaitu proteksi crash — bobot raksasa, jadi strike-nya didominasi put wing. Karena permukaannya bawa SKEW NEGATIF (put OTM lebih mahal dari call), strip berbobot 1/K² biaya-nya lebih dari opsi ATM saja, jadi σ²_fair duduk DI ATAS σ_ATM². VIX itu persis konstruksi ini didiskretisasi atas horizon 30-hari — variance-swap rate yang diterbitkan. Dan spanning yang sama, digeneralisasi (Bakshi-Kapadia-Madan 2003), ngerecover variance, skew, dan kurtosis risk-neutral bebas-model.`
      }
    },
  ],
};
