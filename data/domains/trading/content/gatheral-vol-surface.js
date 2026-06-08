// ─────────────────────────────────────────────────────────────────────────
// Trading domain — the volatility surface & Gatheral's raw SVI, the vol-surface
// pillar of the @insiliconot quant curriculum. This is ESTABLISHED academic
// material (attributed to Gatheral), with valid references; carries the
// interactive VolSurfaceSVISim (js/viz.js, verified by
// scripts/verify-vol-surface-sim.mjs). Educational, not financial advice.
// ─────────────────────────────────────────────────────────────────────────

export const CONTENT = {
  itemId: 'gatheral-vol-surface',
  estimatedReadMinutes: 32,

  author: {
    fullName: { en: 'Jim Gatheral', id: 'Jim Gatheral' },
    affiliation: {
      en: 'Presidential Professor of Mathematics, Baruch College (CUNY); previously head of equity quantitative analytics at Merrill Lynch. Author of *The Volatility Surface: A Practitioner\'s Guide* and co-author (with Antoine Jacquier) of the arbitrage-free SVI parameterization.',
      id: 'Presidential Professor of Mathematics, Baruch College (CUNY); sebelumnya kepala equity quantitative analytics di Merrill Lynch. Penulis *The Volatility Surface: A Practitioner\'s Guide* dan ko-penulis (dengan Antoine Jacquier) parameterisasi SVI arbitrage-free.',
    },
    tagline: {
      en: 'Black-Scholes uses one volatility; the market quotes a different implied vol for every strike and maturity. That whole object — the volatility surface — has a shape (smile, skew, term structure) that SVI captures in five interpretable parameters.',
      id: 'Black-Scholes pakai satu volatilitas; pasar ngutip implied vol berbeda buat tiap strike dan maturity. Seluruh objek itu — volatility surface — punya bentuk (smile, skew, term structure) yang SVI tangkep dalam lima parameter yang bisa-diinterpretasi.',
    },
    bio: {
      en: `Jim Gatheral is one of the most influential figures in volatility modelling. His book *The Volatility Surface* (2006) is a standard practitioner reference, and his **SVI** ("stochastic-volatility-inspired") parameterization — refined into an arbitrage-free form with Antoine Jacquier (2014) — is the workhorse for fitting the implied-volatility smile across the industry. SVI is exactly the kind of object the @insiliconot curriculum points to: a compact, calibratable, theory-grounded description of how options are actually priced.

⟦Note: this is established academic/practitioner material, attributed to Gatheral with valid references — not a practitioner hypothesis. As with the rest of the trading domain, it is educational and not financial advice; real calibration and arbitrage-checking are more involved than the teaching simulator.⟧`,
      id: `Jim Gatheral salah satu figur paling berpengaruh di pemodelan volatilitas. Bukunya *The Volatility Surface* (2006) itu referensi praktisi standar, dan parameterisasi **SVI** ("stochastic-volatility-inspired")-nya — dihaluskan jadi bentuk arbitrage-free sama Antoine Jacquier (2014) — itu kuda-beban buat nge-fit smile implied-volatility lintas industri. SVI persis jenis objek yang kurikulum @insiliconot tunjuk: deskripsi yang kompak, bisa-dikalibrasi, ber-dasar-teori soal gimana opsi sebenarnya di-price.

⟦Catatan: ini material akademik/praktisi mapan, diatribusiin ke Gatheral dengan referensi valid — bukan hipotesis praktisi. Kayak sisa domain trading, dia edukatif dan bukan nasihat keuangan; kalibrasi dan pengecekan-arbitrase nyata lebih rumit dari simulator pengajaran.⟧`
    },
    focus: {
      en: `The implied-volatility surface is the function $\\sigma_{BS}(K, \\tau)$ — the Black-Scholes vol that reprices each traded option of strike $K$ and maturity $\\tau$. It is not flat: across strikes it shows a **smile/skew** (equities a downward skew — low strikes priced at higher vol), and across maturities a **term structure**. Gatheral's raw **SVI** models one maturity *slice* in total implied variance $w = \\sigma_{BS}^2\\,\\tau$ as a function of log-forward-moneyness $k$, with five parameters that map directly onto the visual features: level $a$, wing slope $b$, skew $\\rho$, horizontal shift $m$, and ATM curvature $\\sigma$. From those five you can read the ATM vol, the skew, the wing steepness, and check basic no-arbitrage conditions — which is what the embedded simulator lets you do interactively.`,
      id: `Surface implied-volatility itu fungsi $\\sigma_{BS}(K, \\tau)$ — vol Black-Scholes yang nge-reprice tiap opsi yang diperdagangkan dengan strike $K$ dan maturity $\\tau$. Dia gak flat: lintas strike dia nunjukin **smile/skew** (ekuitas skew menurun — strike rendah di-price di vol lebih tinggi), dan lintas maturity **term structure**. **SVI** raw Gatheral memodelkan satu *slice* maturity dalam total implied variance $w = \\sigma_{BS}^2\\,\\tau$ sebagai fungsi log-forward-moneyness $k$, dengan lima parameter yang memetakan langsung ke fitur visual: level $a$, wing slope $b$, skew $\\rho$, shift horizontal $m$, dan kurvatur ATM $\\sigma$. Dari lima itu kamu bisa baca ATM vol, skew, kecuraman wing, dan cek kondisi no-arbitrage dasar — dan itu persis yang simulator tertanam ngebiarin kamu lakuin interaktif.`
    },
    intellectualLineage: {
      en: `The surface itself is the market's repudiation of the constant-volatility assumption in Black-Scholes (1973) — every smile is evidence that returns are not log-normal with constant vol. Two responses define the lineage: **local volatility** (Dupire, 1994), which extracts a unique state-dependent vol from the surface; and **stochastic volatility** (Heston, 1993), which models vol as its own random process. SVI sits between them as a *parameterization* of the observed surface: Gatheral (2004) introduced it, and Gatheral & Jacquier (2014) gave the arbitrage-free conditions. The asymptotic wing behaviour is pinned by **Lee's moment formula** (2004): the large-strike slope of total implied variance cannot exceed 2 without admitting arbitrage.`,
      id: `Surface-nya sendiri itu penolakan pasar terhadap asumsi volatilitas-konstan di Black-Scholes (1973) — tiap smile itu bukti return gak log-normal dengan vol konstan. Dua respons mendefinisiin lineage: **local volatility** (Dupire, 1994), yang ngekstrak vol yang bergantung-state unik dari surface; dan **stochastic volatility** (Heston, 1993), yang memodelkan vol sebagai proses random-nya sendiri. SVI duduk di antara mereka sebagai *parameterisasi* surface yang diobservasi: Gatheral (2004) ngenalinnya, dan Gatheral & Jacquier (2014) ngasih kondisi arbitrage-free-nya. Perilaku wing asimtotik dipaku oleh **moment formula Lee** (2004): slope strike-besar dari total implied variance gak bisa ngelebihin 2 tanpa ngakuin arbitrase.`
    },
    keyCollaborators: {
      en: 'The arbitrage-free SVI work is joint with **Antoine Jacquier** (Imperial College). The surrounding canon: **Bruno Dupire** (local volatility), **Steven Heston** (stochastic volatility), **Roger Lee** (the moment formula), and the volatility-derivatives / VIX literature. SVI calibration is widely implemented (e.g. the Zeliade quasi-explicit calibration note).',
      id: 'Kerja SVI arbitrage-free itu bareng **Antoine Jacquier** (Imperial College). Kanon sekitarnya: **Bruno Dupire** (local volatility), **Steven Heston** (stochastic volatility), **Roger Lee** (moment formula), dan literatur volatility-derivatives / VIX. Kalibrasi SVI diimplementasiin luas (misal catatan kalibrasi quasi-explicit Zeliade).',
    },
    legacy: {
      en: `SVI endures because it is the rare model that is simultaneously parsimonious (five parameters per slice), interpretable (each parameter is a visual feature), and — in the Gatheral-Jacquier form — guaranteed free of static arbitrage. It is the standard way desks summarise and interpolate the smile, the bridge from raw option quotes to a clean surface for pricing and hedging, and a textbook example of how a good parameterization makes a complex object legible.`,
      id: `SVI bertahan karena dia model langka yang sekaligus parsimoni (lima parameter per slice), bisa-diinterpretasi (tiap parameter itu fitur visual), dan — dalam bentuk Gatheral-Jacquier — dijamin bebas arbitrase statis. Dia cara standar desk ngerangkum dan nginterpolasi smile, jembatan dari kuotasi opsi mentah ke surface bersih buat pricing dan hedging, dan contoh textbook gimana parameterisasi yang baik bikin objek kompleks terbaca.`
    },
    keyWorks: [
      { year: 2006, title: 'The Volatility Surface: A Practitioner\'s Guide', venue: 'Wiley (this item)' },
      { year: 2014, title: 'Arbitrage-free SVI volatility surfaces (with A. Jacquier)', venue: 'Quantitative Finance 14(1), 59–71 (arXiv:1204.0646)' },
      { year: 2004, title: 'A parsimonious arbitrage-free implied volatility parameterization (the original SVI)', venue: 'Presentation / Merrill Lynch' },
      { year: 1994, title: 'Pricing with a Smile (Dupire) — local volatility from the surface', venue: 'Risk' },
      { year: 2004, title: 'The Moment Formula for Implied Volatility at Extreme Strikes (Lee) — wing-slope bound ≤ 2', venue: 'Mathematical Finance' },
    ],
  },

  sections: [
    {
      id: 'motivation',
      heading: { en: 'Why this matters', id: 'Kenapa ini penting' },
      body: {
        en: `Black-Scholes prices every option with a *single* volatility. But invert real market prices and you get a *different* implied volatility for every strike and maturity — the market is telling you it does not believe the constant-vol assumption. Plot that implied vol against strike and maturity and you get the **volatility surface**: across strikes it bends into a **smile** or, for equities, a downward **skew** (out-of-the-money puts priced at higher vol — crash insurance is expensive); across maturities it has a **term structure**.

This surface is not a curiosity — it is the central object of options trading. You price and hedge against it; relative-value trades are bets that one part of the surface is rich or cheap versus another; and the dealer flows in the [dealer-hedging deep-dive](item:husslin-dealer-flows) are, quite literally, the *dynamics* of this surface (vanna is sensitivity to a move in the surface's level; charm is its decay in time). To work with it you need a way to *summarise* a messy set of quotes into a clean, arbitrage-free shape — and that is what Gatheral's **SVI** parameterization does, in five interpretable numbers.

⟦Disclaimer: established academic/practitioner material, attributed to Gatheral with valid references — educational, not financial advice. Real surface calibration and arbitrage-checking (the full Gatheral-Jacquier density condition, bid-ask, interpolation) are more involved than the teaching simulator, which shows one raw-SVI slice.⟧`,
        id: `Black-Scholes nge-price tiap opsi dengan *satu* volatilitas. Tapi inversi harga pasar nyata dan kamu dapet implied volatility *berbeda* buat tiap strike dan maturity — pasar lagi ngasih tau kamu dia gak percaya asumsi vol-konstan. Plot implied vol itu lawan strike dan maturity dan kamu dapet **volatility surface**: lintas strike dia nekuk jadi **smile** atau, buat ekuitas, **skew** menurun (put out-of-the-money di-price di vol lebih tinggi — asuransi crash mahal); lintas maturity dia punya **term structure**.

Surface ini bukan keingintahuan — dia objek sentral trading opsi. Kamu price dan hedge lawannya; trade relative-value itu taruhan bahwa satu bagian surface kaya atau murah lawan yang lain; dan dealer flow di [deep-dive dealer-hedging](item:husslin-dealer-flows) itu, secara harfiah, *dinamika* surface ini (vanna itu sensitivitas ke gerakan level surface; charm itu decay-nya dalam waktu). Buat kerja sama dia kamu butuh cara *ngerangkum* set kuotasi yang berantakan jadi bentuk bersih, arbitrage-free — dan itu yang parameterisasi **SVI** Gatheral lakuin, dalam lima angka yang bisa-diinterpretasi.

⟦Disclaimer: material akademik/praktisi mapan, diatribusiin ke Gatheral dengan referensi valid — edukatif, bukan nasihat keuangan. Kalibrasi surface dan pengecekan-arbitrase nyata (kondisi densitas Gatheral-Jacquier penuh, bid-ask, interpolasi) lebih rumit dari simulator pengajaran, yang nunjukin satu slice raw-SVI.⟧`
      }
    },
    {
      id: 'intuition',
      heading: { en: 'Reading the smile: skew, curvature, term structure', id: 'Membaca smile: skew, kurvatur, term structure' },
      body: {
        en: `A single maturity slice of the surface is a curve of implied vol against strike (or log-moneyness $k=\\ln(K/F)$). Three visual features carry the meaning:

- **Level** — how high the whole curve sits (the ATM vol is the anchor). It rises in stressed regimes.
- **Skew (asymmetry)** — equities almost always show a **downward skew**: lower strikes (puts) are priced at higher vol than higher strikes (calls). The economic stories: investors pay up for crash protection, and leverage/volatility feedback means down-moves come with rising vol. A **symmetric smile** (no skew) is the exception.
- **Curvature (the smile)** — how sharply vol turns up in the wings; more curvature means the market prices fatter tails (big moves either way).

Across maturities, the **term structure** of ATM vol is usually upward-sloping in calm markets (more uncertainty further out) and can invert in a crisis (near-term panic).

The beauty of SVI is that its five parameters map *directly* onto these features, so adjusting a slider is the same as reshaping the smile: the level $a$, the wing slope $b$, the skew $\\rho$ (negative = equity down-skew), the horizontal shift $m$, and the ATM curvature $\\sigma$. The next section makes that precise and lets you play with it.`,
        id: `Satu slice maturity dari surface itu kurva implied vol lawan strike (atau log-moneyness $k=\\ln(K/F)$). Tiga fitur visual bawa maknanya:

- **Level** — seberapa tinggi seluruh kurva duduk (ATM vol itu jangkar). Naik di regime tertekan.
- **Skew (asimetri)** — ekuitas hampir selalu nunjukin **skew menurun**: strike lebih rendah (put) di-price di vol lebih tinggi dari strike lebih tinggi (call). Cerita ekonominya: investor bayar mahal buat proteksi crash, dan leverage/volatility feedback berarti down-move datang sama vol naik. **Smile simetris** (tanpa skew) itu pengecualian.
- **Kurvatur (smile-nya)** — seberapa tajam vol nekuk naik di wing; lebih banyak kurvatur berarti pasar nge-price tail lebih gemuk (gerakan besar dua arah).

Lintas maturity, **term structure** ATM vol biasanya menanjak di pasar tenang (lebih banyak ketidakpastian lebih jauh) dan bisa terbalik di krisis (panik jangka-dekat).

Keindahan SVI itu lima parameternya memetakan *langsung* ke fitur ini, jadi nyesuaiin slider itu sama kayak ngebentuk-ulang smile: level $a$, wing slope $b$, skew $\\rho$ (negatif = equity down-skew), shift horizontal $m$, dan kurvatur ATM $\\sigma$. Section berikutnya bikin itu presis dan ngebiarin kamu main sama dia.`
      }
    },
    {
      id: 'formalization',
      heading: { en: 'Raw SVI, formalized', id: 'Raw SVI, diformalkan' },
      visualization: {
        id: 'vol-surface-svi-sim',
        component: 'VolSurfaceSVISim',
        title: {
          en: 'Raw-SVI implied-volatility smile (one maturity slice)',
          id: 'Smile implied-volatility raw-SVI (satu slice maturity)'
        },
        description: {
          en: "Gatheral's raw SVI: total variance w(k) = a + b(ρ(k−m) + √((k−m)²+σ²)), plotted as implied vol σ_BS = √(w/T) vs log-moneyness. a = level, b = wing slope, ρ = skew (negative ⇒ equity down-skew, higher vol at low strikes), m = horizontal shift, σ = ATM curvature, T = maturity. The gold dot is the smile minimum (k* = m − ρσ/√(1−ρ²)); the readout shows the ATM vol, the wing slopes b(1±ρ), and an arbitrage check (w_min ≥ 0 and the Lee bound b(1+|ρ|) ≤ 2). Push b or |ρ| too far and the curve turns red — a likely-arbitrage smile.",
          id: "Raw SVI Gatheral: total variance w(k) = a + b(ρ(k−m) + √((k−m)²+σ²)), diplot sebagai implied vol σ_BS = √(w/T) vs log-moneyness. a = level, b = wing slope, ρ = skew (negatif ⇒ equity down-skew, vol lebih tinggi di strike rendah), m = shift horizontal, σ = kurvatur ATM, T = maturity. Titik emas itu minimum smile (k* = m − ρσ/√(1−ρ²)); readout nunjukin ATM vol, wing slope b(1±ρ), dan cek arbitrase (w_min ≥ 0 dan Lee bound b(1+|ρ|) ≤ 2). Dorong b atau |ρ| terlalu jauh dan kurvanya jadi merah — smile kemungkinan-arbitrase."
        },
        defaultParams: { a: 0.01, b: 0.1, rho: -0.4, m: 0.0, sigma: 0.15, T: 0.25 },
        height: 430,
      },
      body: {
        en: `**Total implied variance.** Work in $w = \\sigma_{BS}^2\\,\\tau$ (total variance) and $k = \\ln(K/F)$ (log-forward-moneyness). Gatheral's **raw SVI** for one maturity slice is
$$w(k) = a + b\\Big(\\rho\\,(k - m) + \\sqrt{(k - m)^2 + \\sigma^2}\\Big),$$
and the implied vol is $\\sigma_{BS}(k) = \\sqrt{w(k)/\\tau}$. The five parameters:
- $a$ — overall **level** of variance.
- $b \\ge 0$ — **slope of the wings** (how fast variance grows out-of-the-money).
- $\\rho \\in (-1,1)$ — **skew/rotation**; $\\rho<0$ tilts the smile down to the right (equity down-skew), $\\rho=0$ is symmetric.
- $m$ — **horizontal shift** of the smile.
- $\\sigma > 0$ — **ATM curvature** (larger $\\sigma$ = smoother, less peaked).

**Exact facts (used by the simulator).** The smile minimum is
$$w_{\\min} = a + b\\,\\sigma\\sqrt{1-\\rho^2}\\quad\\text{at}\\quad k^* = m - \\frac{\\rho\\,\\sigma}{\\sqrt{1-\\rho^2}},$$
and the asymptotic **wing slopes** (in $w$ per unit $k$) are $b(1+\\rho)$ on the right and $b(1-\\rho)$ on the left — so a negative $\\rho$ makes the *left* (low-strike) wing steeper, the equity signature.

**No static arbitrage.** Two checks the simulator flags: (1) **no negative variance**, $w_{\\min} \\ge 0$, i.e. $a + b\\sigma\\sqrt{1-\\rho^2} \\ge 0$; and (2) **Lee's moment bound** on the wings, $b(1+|\\rho|) \\le 2$ (the large-strike slope of total implied variance cannot exceed 2). These are *necessary*; the full Gatheral & Jacquier (2014) condition additionally requires the risk-neutral density $g(k) \\ge 0$ everywhere (no butterfly arbitrage). Push $b$ or $|\\rho|$ past the bound in the simulator and the smile turns red.`,
        id: `**Total implied variance.** Kerja dalam $w = \\sigma_{BS}^2\\,\\tau$ (total variance) dan $k = \\ln(K/F)$ (log-forward-moneyness). **Raw SVI** Gatheral buat satu slice maturity itu
$$w(k) = a + b\\Big(\\rho\\,(k - m) + \\sqrt{(k - m)^2 + \\sigma^2}\\Big),$$
dan implied vol-nya $\\sigma_{BS}(k) = \\sqrt{w(k)/\\tau}$. Lima parameter:
- $a$ — **level** variance keseluruhan.
- $b \\ge 0$ — **slope wing** (seberapa cepat variance tumbuh out-of-the-money).
- $\\rho \\in (-1,1)$ — **skew/rotasi**; $\\rho<0$ memiringin smile turun ke kanan (equity down-skew), $\\rho=0$ simetris.
- $m$ — **shift horizontal** smile.
- $\\sigma > 0$ — **kurvatur ATM** (lebih besar $\\sigma$ = lebih mulus, kurang puncak).

**Fakta eksak (dipakai simulator).** Minimum smile itu
$$w_{\\min} = a + b\\,\\sigma\\sqrt{1-\\rho^2}\\quad\\text{di}\\quad k^* = m - \\frac{\\rho\\,\\sigma}{\\sqrt{1-\\rho^2}},$$
dan **wing slope** asimtotik (dalam $w$ per unit $k$) itu $b(1+\\rho)$ di kanan dan $b(1-\\rho)$ di kiri — jadi $\\rho$ negatif bikin wing *kiri* (strike-rendah) lebih curam, signature ekuitas.

**Tanpa arbitrase statis.** Dua cek yang simulator flag: (1) **tanpa variance negatif**, $w_{\\min} \\ge 0$, yaitu $a + b\\sigma\\sqrt{1-\\rho^2} \\ge 0$; dan (2) **moment bound Lee** di wing, $b(1+|\\rho|) \\le 2$ (slope strike-besar dari total implied variance gak bisa ngelebihin 2). Ini *perlu*; kondisi Gatheral & Jacquier (2014) penuh tambahan butuh densitas risk-neutral $g(k) \\ge 0$ di mana-mana (tanpa butterfly arbitrage). Dorong $b$ atau $|\\rho|$ lewat bound di simulator dan smile-nya jadi merah.`
      }
    },
    {
      id: 'worked-example',
      heading: { en: 'Worked example: shaping an equity smile', id: 'Contoh: ngebentuk smile ekuitas' },
      body: {
        en: `**Build a realistic equity-index slice with the simulator.**

1. **Set the level and maturity.** Start near the defaults ($a=0.01$, $T=0.25$). The ATM vol shown in the readout is $\\sqrt{w(0)/T}$ — adjust $a$ until the ATM vol matches the market (say ~25%).
2. **Tilt the skew.** Set $\\rho<0$ (e.g. $-0.4$). The smile now sits higher on the *left* (low strikes) — the equity down-skew. Watch the readout: the left wing slope $b(1-\\rho)$ is steeper than the right $b(1+\\rho)$, and the gold minimum marker $k^*$ shifts to the *right* (high-strike) side, because the low-strike wing is elevated.
3. **Set the curvature.** Lower $\\sigma$ to sharpen the smile (more curvature, fatter priced tails); raise it to flatten.
4. **Stress the no-arbitrage bound.** Now crank $b$ up (or push $|\\rho|$ toward 1). When $b(1+|\\rho|)$ exceeds 2 the curve turns **red** — the wings are too steep, violating Lee's moment bound, a likely-arbitrage smile. Pull it back into the arbitrage-free region.
5. **Change maturity.** Increase $T$ at fixed parameters: the implied-vol smile drops (the same total variance $w$ spread over more time is a lower annualised vol) — a glimpse of the term structure.

**The read.** Five interpretable numbers reproduce the whole smile, *and* tell you when you have left the no-arbitrage region. That combination — parsimony, interpretability, and an arbitrage check — is why SVI is the industry standard for summarising the surface.

⟦Disclaimer: a teaching slice, not a calibration tool. Real fits use market quotes, bid-ask, and the full density condition; the simulator checks only the two necessary conditions.⟧`,
        id: `**Bangun slice equity-index realistis sama simulator.**

1. **Set level dan maturity.** Mulai deket default ($a=0.01$, $T=0.25$). ATM vol yang ditunjukin di readout itu $\\sqrt{w(0)/T}$ — sesuaiin $a$ sampai ATM vol cocok sama pasar (katakanlah ~25%).
2. **Miringin skew.** Set $\\rho<0$ (misal $-0.4$). Smile-nya sekarang duduk lebih tinggi di *kiri* (strike rendah) — equity down-skew. Awasi readout: wing slope kiri $b(1-\\rho)$ lebih curam dari kanan $b(1+\\rho)$, dan marker minimum emas $k^*$ geser ke sisi *kanan* (strike-tinggi), karena wing strike-rendah terangkat.
3. **Set kurvatur.** Turunin $\\sigma$ buat najemin smile (lebih banyak kurvatur, tail di-price lebih gemuk); naikin buat ngeratain.
4. **Tekan bound no-arbitrage.** Sekarang naikin $b$ (atau dorong $|\\rho|$ menuju 1). Pas $b(1+|\\rho|)$ ngelebihin 2 kurvanya jadi **merah** — wing-nya terlalu curam, ngelanggar moment bound Lee, smile kemungkinan-arbitrase. Tarik balik ke region arbitrage-free.
5. **Ubah maturity.** Naikin $T$ di parameter tetap: smile implied-vol turun (total variance $w$ yang sama disebar over waktu lebih banyak itu annualised vol lebih rendah) — sekilas term structure.

**Bacaannya.** Lima angka yang bisa-diinterpretasi ngereproduksi seluruh smile, *dan* ngasih tau kamu kapan kamu udah ninggalin region no-arbitrage. Kombinasi itu — parsimoni, interpretabilitas, dan cek arbitrase — itu kenapa SVI itu standar industri buat ngerangkum surface.

⟦Disclaimer: slice pengajaran, bukan tool kalibrasi. Fit nyata pakai kuotasi pasar, bid-ask, dan kondisi densitas penuh; simulator cuma ngecek dua kondisi yang perlu.⟧`
      }
    },
    {
      id: 'applications',
      heading: { en: 'Applications', id: 'Aplikasi' },
      body: {
        en: `**Summarise & interpolate.** SVI's first job is to turn a noisy set of option quotes into a clean, smooth, arbitrage-free slice you can read a vol off at *any* strike — essential for pricing options that are not directly quoted and for building a consistent surface across maturities.

**Relative value.** With a fitted surface, you can ask whether a given option is rich or cheap versus the model — the basis of volatility relative-value and dispersion trades. The skew and term structure themselves are tradeable (risk reversals, calendar spreads).

**Local & stochastic vol.** The arbitrage-free surface feeds **Dupire's local volatility** (a unique state-dependent vol that reprices all vanillas) and calibrates **stochastic-vol models** (Heston) for exotics and path-dependent payoffs.

**The dealer-flow link.** ⟦This is where it meets the practitioner side.⟧ The Greeks the [dealer-hedging deep-dive](item:husslin-dealer-flows) trades are *movements along this surface*: **vanna** is $\\partial\\Delta/\\partial\\sigma$ (how the hedge changes as the surface's level moves) and **charm** is $\\partial\\Delta/\\partial t$ (its decay in time). When huss says "falling IV forces dealers to buy," he is describing the surface dropping and the resulting re-hedge. The vol surface is the object; dealer gamma/vanna/charm flows are its dynamics.

**Honest limits.** SVI fits *one slice*; stitching slices into a full surface without **calendar arbitrage** needs the surface-SVI (SSVI) extension. The two checks in the simulator are *necessary, not sufficient* — the full no-butterfly condition is the density $g(k)\\ge0$. And implied vol is the market's *risk-neutral* expectation, not a forecast of realised vol. SVI is a description and an interpolator, not a crystal ball.`,
        id: `**Rangkum & interpolasi.** Tugas pertama SVI itu ngubah set kuotasi opsi yang noisy jadi slice bersih, mulus, arbitrage-free yang kamu bisa baca vol-nya di strike *mana pun* — esensial buat nge-price opsi yang gak dikuotasi langsung dan buat ngebangun surface konsisten lintas maturity.

**Relative value.** Dengan surface yang di-fit, kamu bisa nanya apakah opsi tertentu kaya atau murah lawan model — basis trade volatility relative-value dan dispersion. Skew dan term structure-nya sendiri bisa-ditradekan (risk reversal, calendar spread).

**Local & stochastic vol.** Surface arbitrage-free nyuapin **local volatility Dupire** (vol bergantung-state unik yang nge-reprice semua vanilla) dan ngkalibrasi **model stochastic-vol** (Heston) buat exotic dan payoff path-dependent.

**Link dealer-flow.** ⟦Ini di mana dia ketemu sisi praktisi.⟧ Greeks yang [deep-dive dealer-hedging](item:husslin-dealer-flows) trade itu *gerakan sepanjang surface ini*: **vanna** itu $\\partial\\Delta/\\partial\\sigma$ (gimana hedge berubah pas level surface gerak) dan **charm** itu $\\partial\\Delta/\\partial t$ (decay-nya dalam waktu). Pas huss bilang "IV turun maksa dealer beli," dia ngegambarin surface jatuh dan re-hedge yang dihasilkan. Vol surface itu objeknya; dealer gamma/vanna/charm flow itu dinamikanya.

**Batas jujur.** SVI nge-fit *satu slice*; ngejahit slice jadi surface penuh tanpa **calendar arbitrage** butuh ekstensi surface-SVI (SSVI). Dua cek di simulator itu *perlu, bukan cukup* — kondisi no-butterfly penuh itu densitas $g(k)\\ge0$. Dan implied vol itu ekspektasi *risk-neutral* pasar, bukan forecast vol realisasi. SVI itu deskripsi dan interpolator, bukan bola kristal.`
      }
    },
    {
      id: 'practice',
      heading: { en: 'Practice', id: 'Latihan' },
      body: {
        en: `**1.** What does the existence of a volatility smile/skew tell you about the Black-Scholes assumptions?

<details><summary>Answer</summary>
That they are violated. Black-Scholes assumes a single constant volatility (log-normal returns), which would imply the SAME implied vol at every strike and maturity — a flat surface. The market instead quotes a different implied vol per strike (the smile/skew) and per maturity (term structure), which is direct evidence that returns are not log-normal with constant vol: there are fatter tails and asymmetry (for equities, a downward skew from crash-protection demand and leverage/vol feedback). The implied-vol surface is exactly the market's correction to the flat-vol assumption — and SVI is a way to parameterize that correction.
</details>

**2.** In raw SVI, what does each of a, b, ρ, m, σ control, and which makes the equity down-skew?

<details><summary>Answer</summary>
a = the overall LEVEL of total variance (raises/lowers the whole smile). b = the WING SLOPE (how fast variance grows out-of-the-money; b≥0). ρ = SKEW/rotation (ρ∈(−1,1)); ρ<0 tilts the smile so low strikes have higher vol — the EQUITY DOWN-SKEW — while ρ=0 is symmetric. m = horizontal SHIFT of the smile. σ = ATM CURVATURE (larger σ = smoother/less peaked). So ρ < 0 is what produces the equity down-skew, and the left (low-strike) wing slope b(1−ρ) is then steeper than the right b(1+ρ).
</details>

**3.** The smile minimum is at k* = m − ρσ/√(1−ρ²). For an equity skew (ρ<0), is the minimum left or right of m, and why?

<details><summary>Answer</summary>
To the RIGHT of m (k* > m). With ρ<0, the term −ρσ/√(1−ρ²) is positive, so k* = m + (positive). Intuitively: ρ<0 elevates the LOW-strike (left) wing, so the lowest implied vol sits on the HIGH-strike (right) side. This matches the equity picture — puts (low strikes) are the expensive, high-vol side, so the cheapest vol is up among the calls. (In the simulator, the gold "min" dot sits right of the ATM line when ρ is negative.)
</details>

**4.** Name the two no-arbitrage checks the simulator flags and what each prevents.

<details><summary>Answer</summary>
(1) NO NEGATIVE VARIANCE: w_min = a + bσ√(1−ρ²) ≥ 0 — implied variance can never be negative, so the whole slice must stay non-negative. (2) LEE'S MOMENT BOUND on the wings: b(1+|ρ|) ≤ 2 — the asymptotic slope of total implied variance at extreme strikes cannot exceed 2 without admitting arbitrage (it would imply impossible option prices in the tails). These are NECESSARY conditions; the full Gatheral-Jacquier (2014) arbitrage-free condition additionally requires the risk-neutral density g(k) ≥ 0 everywhere (no butterfly arbitrage). Violating either turns the simulator's smile red.
</details>`,
        id: `**1.** Apa yang keberadaan volatility smile/skew ngasih tau kamu soal asumsi Black-Scholes?

<details><summary>Jawaban</summary>
Bahwa mereka dilanggar. Black-Scholes ngasumsiin satu volatilitas konstan (return log-normal), yang bakal ngimplikasiin implied vol SAMA di tiap strike dan maturity — surface flat. Pasar malah ngutip implied vol berbeda per strike (smile/skew) dan per maturity (term structure), yang itu bukti langsung return gak log-normal dengan vol konstan: ada tail lebih gemuk dan asimetri (buat ekuitas, skew menurun dari permintaan proteksi-crash dan leverage/vol feedback). Surface implied-vol itu persis koreksi pasar terhadap asumsi flat-vol — dan SVI cara buat parameterisasi koreksi itu.
</details>

**2.** Di raw SVI, apa yang masing-masing a, b, ρ, m, σ kontrol, dan yang mana bikin equity down-skew?

<details><summary>Jawaban</summary>
a = LEVEL total variance keseluruhan (naik/turunin seluruh smile). b = WING SLOPE (seberapa cepat variance tumbuh out-of-the-money; b≥0). ρ = SKEW/rotasi (ρ∈(−1,1)); ρ<0 memiringin smile jadi strike rendah punya vol lebih tinggi — EQUITY DOWN-SKEW — sementara ρ=0 simetris. m = SHIFT horizontal smile. σ = KURVATUR ATM (lebih besar σ = lebih mulus/kurang puncak). Jadi ρ < 0 yang ngehasilin equity down-skew, dan wing slope kiri (strike-rendah) b(1−ρ) lalu lebih curam dari kanan b(1+ρ).
</details>

**3.** Minimum smile di k* = m − ρσ/√(1−ρ²). Buat equity skew (ρ<0), apakah minimum-nya kiri atau kanan m, dan kenapa?

<details><summary>Jawaban</summary>
Ke KANAN m (k* > m). Dengan ρ<0, terma −ρσ/√(1−ρ²) positif, jadi k* = m + (positif). Intuitif: ρ<0 ngangkat wing strike-RENDAH (kiri), jadi implied vol terendah duduk di sisi strike-TINGGI (kanan). Ini cocok sama gambaran ekuitas — put (strike rendah) itu sisi mahal, vol-tinggi, jadi vol termurah di atas di antara call. (Di simulator, titik "min" emas duduk kanan garis ATM pas ρ negatif.)
</details>

**4.** Sebutin dua cek no-arbitrage yang simulator flag dan apa yang masing-masing cegah.

<details><summary>Jawaban</summary>
(1) TANPA VARIANCE NEGATIF: w_min = a + bσ√(1−ρ²) ≥ 0 — implied variance gak pernah bisa negatif, jadi seluruh slice harus tetap non-negatif. (2) MOMENT BOUND LEE di wing: b(1+|ρ|) ≤ 2 — slope asimtotik total implied variance di strike ekstrem gak bisa ngelebihin 2 tanpa ngakuin arbitrase (dia bakal ngimplikasiin harga opsi mustahil di tail). Ini kondisi PERLU; kondisi arbitrage-free Gatheral-Jacquier (2014) penuh tambahan butuh densitas risk-neutral g(k) ≥ 0 di mana-mana (tanpa butterfly arbitrage). Ngelanggar salah satu bikin smile simulator merah.
</details>`
      }
    },
    {
      id: 'connections',
      heading: { en: 'Connections', id: 'Koneksi' },
      body: {
        en: `- **The quant curriculum it belongs to**: [@insiliconot quant curriculum](item:insilico-quant-curriculum) — SVI is its vol-surface pillar (this module is the deep-dive, with its own simulator).
- **The dealer-flow dynamics**: [dealer-hedging flows](item:husslin-dealer-flows) — vanna and charm are movements along this surface; dealer hedging IS trading the surface's level and decay.
- **The literature map**: [Sources & Curriculum](item:trading-sources-curriculum) — Gatheral (vol surface), Lee (moment bound), Dupire (local vol) in the broader bibliography.
- **Optimal trading of vol**: [Avellaneda-Stoikov 2008](item:stoikov-2008) — inventory/market-making with volatility, the academic neighbour of pricing off the surface.`,
        id: `- **Kurikulum quant tempatnya**: [kurikulum quant @insiliconot](item:insilico-quant-curriculum) — SVI itu pilar vol-surface-nya (module ini deep-dive-nya, dengan simulatornya sendiri).
- **Dinamika dealer-flow**: [dealer-hedging flows](item:husslin-dealer-flows) — vanna dan charm itu gerakan sepanjang surface ini; hedging dealer ITU nge-trade level dan decay surface.
- **Peta literatur**: [Sources & Curriculum](item:trading-sources-curriculum) — Gatheral (vol surface), Lee (moment bound), Dupire (local vol) di bibliografi lebih luas.
- **Trading optimal vol**: [Avellaneda-Stoikov 2008](item:stoikov-2008) — inventory/market-making dengan volatilitas, tetangga akademik dari pricing off surface.`
      }
    },
    {
      id: 'sources',
      heading: { en: 'Sources', id: 'Sumber' },
      body: {
        en: `Established academic/practitioner references (web-verified); educational, not financial advice.
- **Gatheral, J.** (2006). *The Volatility Surface: A Practitioner's Guide.* Wiley. **(This item.)**
- **Gatheral, J., and Jacquier, A.** (2014). "Arbitrage-free SVI volatility surfaces." *Quantitative Finance* 14(1), 59–71 (arXiv:1204.0646). The raw-SVI formula + arbitrage-free conditions.
- **Gatheral, J.** (2004). "A parsimonious arbitrage-free implied volatility parameterization…" — the original SVI presentation.
- **Lee, R. W.** (2004). "The Moment Formula for Implied Volatility at Extreme Strikes." *Mathematical Finance.* Wing-slope bound ≤ 2.
- **Dupire, B.** (1994). "Pricing with a Smile." *Risk.* Local volatility from the surface.
- **Heston, S.** (1993). "A Closed-Form Solution for Options with Stochastic Volatility." *RFS.*
- **Black, F., and Scholes, M.** (1973). The constant-vol benchmark the surface departs from.
- Implementation: Zeliade Systems, "Quasi-Explicit Calibration of Gatheral's SVI Model."`,
        id: `Referensi akademik/praktisi mapan (terverifikasi-web); edukatif, bukan nasihat keuangan.
- **Gatheral, J.** (2006). *The Volatility Surface: A Practitioner's Guide.* Wiley. **(Item ini.)**
- **Gatheral, J., dan Jacquier, A.** (2014). "Arbitrage-free SVI volatility surfaces." *Quantitative Finance* 14(1), 59–71 (arXiv:1204.0646). Formula raw-SVI + kondisi arbitrage-free.
- **Gatheral, J.** (2004). "A parsimonious arbitrage-free implied volatility parameterization…" — presentasi SVI orisinal.
- **Lee, R. W.** (2004). "The Moment Formula for Implied Volatility at Extreme Strikes." *Mathematical Finance.* Wing-slope bound ≤ 2.
- **Dupire, B.** (1994). "Pricing with a Smile." *Risk.* Local volatility dari surface.
- **Heston, S.** (1993). "A Closed-Form Solution for Options with Stochastic Volatility." *RFS.*
- **Black, F., dan Scholes, M.** (1973). Benchmark vol-konstan yang surface berangkat darinya.
- Implementasi: Zeliade Systems, "Quasi-Explicit Calibration of Gatheral's SVI Model."`
      }
    },
  ],

  audio: { enabled: true },

  selfTest: [
    {
      sectionId: 'intuition',
      question: { en: `What three visual features describe a volatility smile, and what does the equity "down-skew" mean economically?`, id: `Tiga fitur visual apa yang ngegambarin volatility smile, dan apa arti "down-skew" ekuitas secara ekonomi?` },
      prompt: { en: 'Before continuing, try answering:', id: 'Sebelum lanjut, coba jawab:' },
      answer: {
        en: `LEVEL (how high the curve sits — anchored by the ATM vol; rises in stress), SKEW/asymmetry (the left-right tilt), and CURVATURE (how sharply vol turns up in the wings — more curvature prices fatter tails). The equity DOWN-SKEW means low strikes (out-of-the-money puts) are priced at HIGHER implied vol than high strikes (calls): the curve slopes down to the right. Economically, investors pay up for crash/downside protection, and leverage plus the volatility-feedback effect mean that down-moves arrive with rising volatility — so the market charges more for downside insurance. In SVI this is ρ<0, which makes the left wing steeper than the right.`,
        id: `LEVEL (seberapa tinggi kurva duduk — dijangkar ATM vol; naik di stres), SKEW/asimetri (kemiringan kiri-kanan), dan KURVATUR (seberapa tajam vol nekuk naik di wing — lebih banyak kurvatur nge-price tail lebih gemuk). DOWN-SKEW ekuitas berarti strike rendah (put out-of-the-money) di-price di implied vol LEBIH TINGGI dari strike tinggi (call): kurvanya miring turun ke kanan. Secara ekonomi, investor bayar mahal buat proteksi crash/downside, dan leverage plus efek volatility-feedback berarti down-move datang sama volatilitas naik — jadi pasar ngecharge lebih buat asuransi downside. Di SVI ini ρ<0, yang bikin wing kiri lebih curam dari kanan.`
      }
    },
    {
      sectionId: 'formalization',
      question: { en: `Write the raw-SVI formula, name the five parameters, and state the two no-arbitrage checks.`, id: `Tulis formula raw-SVI, sebutin lima parameter, dan nyatain dua cek no-arbitrage.` },
      prompt: { en: 'Before continuing, try answering:', id: 'Sebelum lanjut, coba jawab:' },
      answer: {
        en: `Raw SVI in total variance w = σ_BS²·τ over log-moneyness k: w(k) = a + b(ρ(k−m) + √((k−m)²+σ²)), with σ_BS = √(w/τ). The five parameters: a (variance level), b (wing slope, ≥0), ρ (skew, ∈(−1,1); negative = equity down-skew), m (horizontal shift), σ (ATM curvature, >0). No-arbitrage checks the simulator flags: (1) no negative variance — w_min = a + bσ√(1−ρ²) ≥ 0; and (2) Lee's moment bound on the wings — b(1+|ρ|) ≤ 2 (the extreme-strike slope of total implied variance can't exceed 2). Both are necessary; the full Gatheral-Jacquier (2014) condition also requires the risk-neutral density g(k) ≥ 0 (no butterfly arbitrage).`,
        id: `Raw SVI dalam total variance w = σ_BS²·τ over log-moneyness k: w(k) = a + b(ρ(k−m) + √((k−m)²+σ²)), dengan σ_BS = √(w/τ). Lima parameter: a (level variance), b (wing slope, ≥0), ρ (skew, ∈(−1,1); negatif = equity down-skew), m (shift horizontal), σ (kurvatur ATM, >0). Cek no-arbitrage yang simulator flag: (1) tanpa variance negatif — w_min = a + bσ√(1−ρ²) ≥ 0; dan (2) moment bound Lee di wing — b(1+|ρ|) ≤ 2 (slope strike-ekstrem total implied variance gak bisa ngelebihin 2). Keduanya perlu; kondisi Gatheral-Jacquier (2014) penuh juga butuh densitas risk-neutral g(k) ≥ 0 (tanpa butterfly arbitrage).`
      }
    },
    {
      sectionId: 'applications',
      question: { en: `How does the volatility surface connect to the dealer-hedging flows in the @Husslin_ deep-dive?`, id: `Gimana volatility surface nyambung ke dealer-hedging flows di deep-dive @Husslin_?` },
      prompt: { en: 'Before continuing, try answering:', id: 'Sebelum lanjut, coba jawab:' },
      answer: {
        en: `The dealer Greeks that drive those flows are sensitivities to MOVEMENTS ALONG this surface. Vanna = ∂Δ/∂σ is how a dealer's delta hedge changes when the surface's level (implied vol) moves; charm = ∂Δ/∂t is how it decays as time passes. So when the dealer-flows module says "falling IV forces short-put dealers to buy the index," that is precisely the volatility surface dropping and the resulting vanna re-hedge; the overnight/into-OPEX bid is the surface's level and time dynamics translated into forced flow. In short: the vol surface (and SVI's description of it) is the static object, and dealer gamma/vanna/charm hedging is its dynamics — the academic surface and the practitioner flow are two views of the same thing.`,
        id: `Greeks dealer yang ngedorong flow itu sensitivitas ke GERAKAN SEPANJANG surface ini. Vanna = ∂Δ/∂σ itu gimana delta hedge dealer berubah pas level surface (implied vol) gerak; charm = ∂Δ/∂t itu gimana dia decay seiring waktu berlalu. Jadi pas module dealer-flows bilang "IV turun maksa dealer short-put beli index," itu persis volatility surface jatuh dan re-hedge vanna yang dihasilkan; bid overnight/into-OPEX itu dinamika level dan waktu surface diterjemahin jadi forced flow. Singkatnya: vol surface (dan deskripsi SVI-nya) itu objek statis, dan dealer gamma/vanna/charm hedging itu dinamikanya — surface akademik dan flow praktisi itu dua pandangan hal yang sama.`
      }
    },
  ],
};
