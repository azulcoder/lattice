// ─────────────────────────────────────────────────────────────────────────
// Trading domain — SSVI (Surface SVI): the calendar-arbitrage-free full-surface
// extension of raw SVI. ESTABLISHED academic material (Gatheral & Jacquier),
// web-verified references; carries the interactive SSVISurfaceSim (js/viz.js,
// verified by scripts/verify-ssvi-sim.mjs). Educational, not financial advice.
// ─────────────────────────────────────────────────────────────────────────

export const CONTENT = {
  itemId: 'gatheral-ssvi-surface',
  estimatedReadMinutes: 30,

  author: {
    fullName: { en: 'Jim Gatheral & Antoine Jacquier', id: 'Jim Gatheral & Antoine Jacquier' },
    affiliation: {
      en: 'Gatheral (Baruch College, ex-Merrill Lynch) and Jacquier (Imperial College London). Their 2014 paper introduced SSVI — the surface extension of SVI with tractable conditions that preclude both calendar-spread and butterfly arbitrage.',
      id: 'Gatheral (Baruch College, eks-Merrill Lynch) dan Jacquier (Imperial College London). Paper 2014 mereka ngenalin SSVI — ekstensi surface dari SVI dengan kondisi traktabel yang nyegah baik calendar-spread maupun butterfly arbitrage.',
    },
    tagline: {
      en: 'Raw SVI fits one maturity slice; a desk needs the whole surface. SSVI stitches the slices with one ρ and an ATM-variance term structure θ(T) — and gives the conditions that keep the surface free of calendar AND butterfly arbitrage.',
      id: 'Raw SVI nge-fit satu slice maturity; desk butuh seluruh surface. SSVI ngejahit slice dengan satu ρ dan term structure ATM-variance θ(T) — dan ngasih kondisi yang ngejaga surface bebas calendar DAN butterfly arbitrage.',
    },
    bio: {
      en: `Raw SVI (the previous module) is a per-maturity fit; calibrate each maturity independently and the slices can *cross* in total variance, which is a **calendar-spread arbitrage** — a longer-dated option worth less total variance than a shorter-dated one, i.e. free money. SSVI ("Surface SVI", Gatheral & Jacquier, 2014) solves this by parameterizing the *whole* surface coherently: a single correlation ρ, the ATM-total-variance term structure θ(T), and a smile function φ(θ). They prove tractable conditions that guarantee no calendar-spread arbitrage (slices never cross) and no butterfly arbitrage (each slice has a valid risk-neutral density).

⟦Note: established academic material, attributed to Gatheral & Jacquier with valid references. Educational, not financial advice; production calibration (and the eSSVI generalisation with a maturity-dependent ρ) is more involved than the teaching simulator.⟧`,
      id: `Raw SVI (module sebelumnya) itu fit per-maturity; kalibrasi tiap maturity independen dan slice-nya bisa *nyilang* di total variance, yang itu **calendar-spread arbitrage** — opsi berjatuh-tempo-lebih-panjang bernilai total variance lebih sedikit dari yang lebih-pendek, yaitu uang gratis. SSVI ("Surface SVI", Gatheral & Jacquier, 2014) nyelesaiin ini dengan memparameterisasi *seluruh* surface secara koheren: satu korelasi ρ, term structure ATM-total-variance θ(T), dan fungsi smile φ(θ). Mereka ngebuktiin kondisi traktabel yang ngejamin tanpa calendar-spread arbitrage (slice gak pernah nyilang) dan tanpa butterfly arbitrage (tiap slice punya densitas risk-neutral valid).

⟦Catatan: material akademik mapan, diatribusiin ke Gatheral & Jacquier dengan referensi valid. Edukatif, bukan nasihat keuangan; kalibrasi produksi (dan generalisasi eSSVI dengan ρ bergantung-maturity) lebih rumit dari simulator pengajaran.⟧`
    },
    focus: {
      en: `SSVI writes one maturity slice of total implied variance as
$$w(k;T) = \\tfrac{1}{2}\\,\\theta(T)\\Big(1 + \\rho\\,\\varphi(\\theta)\\,k + \\sqrt{(\\varphi(\\theta)k + \\rho)^2 + 1 - \\rho^2}\\Big),$$
where $\\theta(T)$ is the **ATM total variance** at maturity $T$ (so $w(0;T)=\\theta(T)$), $\\rho$ is one skew shared by the surface, and $\\varphi(\\theta)$ is a smile function (here $\\varphi=\\eta\\,\\theta^{-\\gamma}$). The two arbitrage conditions are the whole point: **no calendar-spread arbitrage** requires the total-variance slices to be non-decreasing in $T$ at every strike (they never cross — which in turn needs $\\theta(T)$ non-decreasing); **no butterfly arbitrage** per slice requires $\\theta\\varphi(1+|\\rho|)<4$ and $\\theta\\varphi^2(1+|\\rho|)\\le4$. The simulator shows the five-slice surface and flags either violation.`,
      id: `SSVI nulis satu slice maturity dari total implied variance sebagai
$$w(k;T) = \\tfrac{1}{2}\\,\\theta(T)\\Big(1 + \\rho\\,\\varphi(\\theta)\\,k + \\sqrt{(\\varphi(\\theta)k + \\rho)^2 + 1 - \\rho^2}\\Big),$$
dengan $\\theta(T)$ itu **ATM total variance** di maturity $T$ (jadi $w(0;T)=\\theta(T)$), $\\rho$ itu satu skew yang dibagi surface, dan $\\varphi(\\theta)$ fungsi smile (di sini $\\varphi=\\eta\\,\\theta^{-\\gamma}$). Dua kondisi arbitrase itu poin utamanya: **tanpa calendar-spread arbitrage** butuh slice total-variance non-decreasing di $T$ di tiap strike (gak pernah nyilang — yang itu butuh $\\theta(T)$ non-decreasing); **tanpa butterfly arbitrage** per slice butuh $\\theta\\varphi(1+|\\rho|)<4$ dan $\\theta\\varphi^2(1+|\\rho|)\\le4$. Simulator nunjukin surface lima-slice dan ngeflag salah satu pelanggaran.`
    },
    intellectualLineage: {
      en: `SSVI is the surface-level resolution of the two static-arbitrage problems that raw SVI only handled slice-by-slice. The **calendar-spread** condition is the surface analogue of the classic result that total implied variance must be non-decreasing in maturity (no negative forward variance). The **butterfly** condition is the surface analogue of the per-slice density condition $g(k)\\ge0$ from the raw-SVI paper, and the wing behaviour is still bounded by **Lee's moment formula**. Later work generalises SSVI: **eSSVI** (Hendriks & Martini) lets $\\rho$ vary with maturity, and Corbetta et al. give robust calibration / arbitrage-free interpolation of SSVI slices.`,
      id: `SSVI itu resolusi level-surface dari dua masalah arbitrase-statis yang raw SVI cuma tangani slice-demi-slice. Kondisi **calendar-spread** itu analog surface dari hasil klasik bahwa total implied variance harus non-decreasing di maturity (tanpa forward variance negatif). Kondisi **butterfly** itu analog surface dari kondisi densitas per-slice $g(k)\\ge0$ dari paper raw-SVI, dan perilaku wing masih dibatasi **moment formula Lee**. Kerja kemudian ngegeneralisasi SSVI: **eSSVI** (Hendriks & Martini) ngebiarin $\\rho$ bervariasi sama maturity, dan Corbetta dkk. ngasih kalibrasi robust / interpolasi arbitrage-free dari slice SSVI.`
    },
    keyCollaborators: {
      en: 'The SSVI work is the Gatheral-Jacquier collaboration directly; the surrounding canon includes Roper (arbitrage-free conditions for implied vol), Lee (moment formula), the eSSVI authors (Hendriks & Martini), and Corbetta, Cohort, Laachir & Martini (robust SSVI calibration). The Zeliade calibration notes are a common practitioner implementation reference.',
      id: 'Kerja SSVI itu kolaborasi Gatheral-Jacquier langsung; kanon sekitarnya termasuk Roper (kondisi arbitrage-free buat implied vol), Lee (moment formula), penulis eSSVI (Hendriks & Martini), dan Corbetta, Cohort, Laachir & Martini (kalibrasi SSVI robust). Catatan kalibrasi Zeliade itu referensi implementasi praktisi umum.',
    },
    legacy: {
      en: `SSVI is the standard way to fit a *whole* implied-volatility surface that is guaranteed free of static arbitrage — the property a surface must have before it can be safely used to price anything (a surface with calendar arbitrage produces negative forward variance, and Dupire local volatility extracted from it is imaginary). It turns a pile of option quotes across strikes and maturities into one coherent, interpolatable, no-arbitrage object, and remains the workhorse (with its eSSVI generalisation) on options desks.`,
      id: `SSVI itu cara standar nge-fit *seluruh* implied-volatility surface yang dijamin bebas arbitrase statis — properti yang surface harus punya sebelum bisa dipakai dengan aman buat nge-price apa pun (surface dengan calendar arbitrage ngehasilin forward variance negatif, dan local volatility Dupire yang diekstrak darinya imajiner). Dia ngubah tumpukan kuotasi opsi lintas strike dan maturity jadi satu objek koheren, bisa-diinterpolasi, no-arbitrage, dan tetap kuda-beban (dengan generalisasi eSSVI-nya) di desk opsi.`
    },
    keyWorks: [
      { year: 2014, title: 'Arbitrage-free SVI volatility surfaces (Gatheral & Jacquier) — introduces SSVI + the calendar & butterfly conditions', venue: 'Quantitative Finance 14(1), 59–71 (arXiv:1204.0646) (this item)' },
      { year: 2006, title: 'The Volatility Surface (Gatheral) — the surrounding theory', venue: 'Wiley' },
      { year: 2010, title: 'Arbitrage-free conditions for the implied volatility surface (Roper)', venue: 'working paper' },
      { year: 2019, title: 'Robust calibration and arbitrage-free interpolation of SSVI slices (Corbetta et al.)', venue: 'arXiv:1804.04924' },
      { year: 2004, title: 'The Moment Formula for Implied Volatility at Extreme Strikes (Lee)', venue: 'Mathematical Finance' },
    ],
  },

  sections: [
    {
      id: 'motivation',
      heading: { en: 'Why this matters', id: 'Kenapa ini penting' },
      body: {
        en: `Raw SVI (the previous module) fits **one maturity slice** at a time. But a desk needs the *whole* surface — every strike and every maturity — and if you simply calibrate each maturity independently, the slices can **cross in total variance**. That crossing is not a cosmetic glitch: it is a **calendar-spread arbitrage**. Total implied variance must be non-decreasing in maturity (a longer-dated option contains *more* accumulated uncertainty); if a longer slice dips below a shorter one at some strike, you could buy the long-dated and sell the short-dated option and lock in a riskless profit. A surface with calendar arbitrage also breaks everything downstream — Dupire's local volatility extracted from it would have *negative* forward variance (imaginary vol).

**SSVI** (Surface SVI, Gatheral & Jacquier 2014) fixes this by parameterizing the entire surface coherently — one skew $\\rho$, the ATM-variance term structure $\\theta(T)$, and a smile function $\\varphi(\\theta)$ — and by giving *tractable conditions* that guarantee the surface is free of **both** calendar-spread arbitrage (slices never cross) **and** butterfly arbitrage (each slice has a valid risk-neutral density). The simulator below lets you build the five-slice surface and watch it flag either violation.

⟦Disclaimer: established academic material, attributed to Gatheral & Jacquier with valid references — educational, not financial advice. Real calibration (and the eSSVI generalisation with maturity-dependent ρ) is more involved; the simulator demonstrates the conditions, it is not a production calibrator.⟧`,
        id: `Raw SVI (module sebelumnya) nge-fit **satu slice maturity** sekali. Tapi desk butuh *seluruh* surface — tiap strike dan tiap maturity — dan kalau kamu cuma ngkalibrasi tiap maturity independen, slice-nya bisa **nyilang di total variance**. Persilangan itu bukan glitch kosmetik: dia **calendar-spread arbitrage**. Total implied variance harus non-decreasing di maturity (opsi berjatuh-tempo-lebih-panjang ngandung *lebih* banyak ketidakpastian terakumulasi); kalau slice lebih panjang turun di bawah yang lebih pendek di suatu strike, kamu bisa beli yang long-dated dan jual yang short-dated dan ngunci profit tanpa-risiko. Surface dengan calendar arbitrage juga ngerusak semua di hilir — local volatility Dupire yang diekstrak darinya bakal punya forward variance *negatif* (vol imajiner).

**SSVI** (Surface SVI, Gatheral & Jacquier 2014) ngebenerin ini dengan memparameterisasi seluruh surface secara koheren — satu skew $\\rho$, term structure ATM-variance $\\theta(T)$, dan fungsi smile $\\varphi(\\theta)$ — dan dengan ngasih *kondisi traktabel* yang ngejamin surface bebas dari **kedua** calendar-spread arbitrage (slice gak pernah nyilang) **dan** butterfly arbitrage (tiap slice punya densitas risk-neutral valid). Simulator di bawah ngebiarin kamu bangun surface lima-slice dan liat dia ngeflag salah satu pelanggaran.

⟦Disclaimer: material akademik mapan, diatribusiin ke Gatheral & Jacquier dengan referensi valid — edukatif, bukan nasihat keuangan. Kalibrasi nyata (dan generalisasi eSSVI dengan ρ bergantung-maturity) lebih rumit; simulator ngedemoin kondisinya, dia bukan kalibrator produksi.⟧`
      }
    },
    {
      id: 'intuition',
      heading: { en: 'Slices that must not cross', id: 'Slice yang gak boleh nyilang' },
      body: {
        en: `The cleanest way to see the surface is as a stack of **total-variance** slices, one per maturity, plotted against log-moneyness $k$. Two pictures carry the no-arbitrage intuition:

- **Calendar (across maturities).** Time only adds uncertainty: by maturity $T_2 > T_1$ the market has accumulated *at least* as much total variance at every strike, so the slice for $T_2$ must sit **on or above** the slice for $T_1$ — everywhere. The slices are nested and **never cross**. If they cross, a calendar-spread arbitrage exists. A necessary piece is that the **ATM total variance** $\\theta(T)$ is itself non-decreasing — if ATM vol falls fast enough with maturity that $\\theta$ *decreases*, the ATM points alone already cross.
- **Butterfly (within a slice).** Each slice must correspond to a valid probability density of the terminal price — no negative probabilities. This bounds how steep and curved a single smile can be (the $\\theta\\varphi(1+|\\rho|)<4$ condition); push the smile amplitude too far and the implied density goes negative.

SSVI builds the surface so both hold by construction *if* you respect its conditions, using just three ingredients: one **ρ** (the surface skew), the **θ(T)** term structure (the ATM-variance backbone), and a **φ(θ)** that makes smiles flatten as maturity grows. Adjusting those in the simulator either keeps the slices nested (green) or tips them into crossing (red).`,
        id: `Cara paling bersih ngeliat surface itu sebagai tumpukan slice **total-variance**, satu per maturity, diplot lawan log-moneyness $k$. Dua gambaran bawa intuisi no-arbitrage:

- **Calendar (lintas maturity).** Waktu cuma nambah ketidakpastian: pada maturity $T_2 > T_1$ pasar udah ngumpulin *paling tidak* total variance sebanyak itu di tiap strike, jadi slice buat $T_2$ harus duduk **di atas atau sama dengan** slice buat $T_1$ — di mana-mana. Slice-nya bersarang dan **gak pernah nyilang**. Kalau nyilang, calendar-spread arbitrage ada. Bagian yang perlu itu **ATM total variance** $\\theta(T)$ sendiri non-decreasing — kalau ATM vol jatuh cukup cepat sama maturity sampai $\\theta$ *turun*, titik ATM aja udah nyilang.
- **Butterfly (dalam satu slice).** Tiap slice harus berkorespondensi ke densitas probabilitas valid dari harga terminal — tanpa probabilitas negatif. Ini ngebatasin seberapa curam dan melengkung satu smile bisa (kondisi $\\theta\\varphi(1+|\\rho|)<4$); dorong amplitudo smile terlalu jauh dan densitas terimplikasi jadi negatif.

SSVI ngebangun surface supaya keduanya berlaku by construction *kalau* kamu hormatin kondisinya, pakai cuma tiga bahan: satu **ρ** (skew surface), term structure **θ(T)** (backbone ATM-variance), dan **φ(θ)** yang bikin smile ngerata seiring maturity tumbuh. Nyesuaiin itu di simulator entah ngejaga slice bersarang (hijau) atau ngejungkalin mereka ke persilangan (merah).`
      }
    },
    {
      id: 'formalization',
      heading: { en: 'SSVI, formalized', id: 'SSVI, diformalkan' },
      visualization: {
        id: 'ssvi-surface-sim',
        component: 'SSVISurfaceSim',
        title: {
          en: 'SSVI surface: total-variance slices & calendar arbitrage',
          id: 'Surface SSVI: slice total-variance & calendar arbitrage'
        },
        description: {
          en: "Five maturity slices of SSVI total variance w(k;T) = ½θ(T)(1 + ρφk + √((φk+ρ)²+1−ρ²)), with θ(T) = σ_ATM(T)²·T and φ(θ)=η·θ^(−γ). Calendar-arbitrage-free ⇔ the slices are nested and never cross (green). Make the ATM term-structure slope steeply negative so long-dated ATM variance collapses below short-dated, and the slices cross — calendar arbitrage (red). Push η up and a slice violates the butterfly bound θφ(1+|ρ|)<4 (⚠ in the legend). ρ is one skew shared by the whole surface.",
          id: "Lima slice maturity dari total variance SSVI w(k;T) = ½θ(T)(1 + ρφk + √((φk+ρ)²+1−ρ²)), dengan θ(T) = σ_ATM(T)²·T dan φ(θ)=η·θ^(−γ). Bebas calendar-arbitrage ⇔ slice bersarang dan gak pernah nyilang (hijau). Bikin slope term-structure ATM curam-negatif sampai ATM variance long-dated kolaps di bawah short-dated, dan slice nyilang — calendar arbitrage (merah). Dorong η naik dan slice ngelanggar butterfly bound θφ(1+|ρ|)<4 (⚠ di legend). ρ itu satu skew yang dibagi seluruh surface."
        },
        defaultParams: { sigma0: 0.5, slope: 0.0, rho: -0.3, eta: 0.5, gamma: 0.4 },
        height: 430,
      },
      body: {
        en: `**The SSVI slice.** For maturity $T$, total implied variance $w=\\sigma_{BS}^2 T$ as a function of log-moneyness $k$:
$$w(k;T) = \\tfrac{1}{2}\\,\\theta(T)\\Big(1 + \\rho\\,\\varphi(\\theta)\\,k + \\sqrt{(\\varphi(\\theta)k + \\rho)^2 + 1 - \\rho^2}\\Big).$$
At $k=0$ the square root is $\\sqrt{\\rho^2+1-\\rho^2}=1$, so $w(0;T)=\\theta(T)$ — the parameter $\\theta(T)$ *is* the ATM total variance. The three ingredients: a single $\\rho\\in(-1,1)$ (surface skew), the term structure $\\theta(T)$, and the smile function $\\varphi(\\theta)$ (the simulator uses $\\varphi=\\eta\\,\\theta^{-\\gamma}$, so smiles flatten with maturity).

**No calendar-spread arbitrage.** The surface is free of calendar arbitrage iff $T\\mapsto w(k;T)$ is non-decreasing for every $k$ — the total-variance slices do not cross. A necessary condition is $\\partial_T\\theta(T)\\ge0$ (the ATM term structure rises); the full Gatheral-Jacquier condition adds a monotonicity bound on $\\theta\\,\\varphi(\\theta)$.

**No butterfly arbitrage (per slice).** Each slice corresponds to a non-negative risk-neutral density iff
$$\\theta\\,\\varphi\\,(1+|\\rho|) < 4 \\qquad\\text{and}\\qquad \\theta\\,\\varphi^2\\,(1+|\\rho|) \\le 4.$$

**What the simulator does.** It computes five maturity slices, draws them in total variance, and checks both conditions directly: it detects whether any later slice dips below an earlier one (calendar arbitrage — turns the curves red and names the crossing maturities), and flags any slice that breaks the butterfly inequalities (⚠ in the legend). With a flat or rising ATM term structure and a modest $\\eta$, the slices stay nested and arbitrage-free; a steeply *falling* ATM slope collapses long-dated $\\theta$ and forces a crossing.`,
        id: `**Slice SSVI.** Buat maturity $T$, total implied variance $w=\\sigma_{BS}^2 T$ sebagai fungsi log-moneyness $k$:
$$w(k;T) = \\tfrac{1}{2}\\,\\theta(T)\\Big(1 + \\rho\\,\\varphi(\\theta)\\,k + \\sqrt{(\\varphi(\\theta)k + \\rho)^2 + 1 - \\rho^2}\\Big).$$
Di $k=0$ akar kuadratnya $\\sqrt{\\rho^2+1-\\rho^2}=1$, jadi $w(0;T)=\\theta(T)$ — parameter $\\theta(T)$ *itu* ATM total variance. Tiga bahan: satu $\\rho\\in(-1,1)$ (skew surface), term structure $\\theta(T)$, dan fungsi smile $\\varphi(\\theta)$ (simulator pakai $\\varphi=\\eta\\,\\theta^{-\\gamma}$, jadi smile ngerata sama maturity).

**Tanpa calendar-spread arbitrage.** Surface bebas calendar arbitrage kalau $T\\mapsto w(k;T)$ non-decreasing buat tiap $k$ — slice total-variance gak nyilang. Kondisi perlu itu $\\partial_T\\theta(T)\\ge0$ (term structure ATM naik); kondisi Gatheral-Jacquier penuh nambah bound monotonisitas pada $\\theta\\,\\varphi(\\theta)$.

**Tanpa butterfly arbitrage (per slice).** Tiap slice berkorespondensi ke densitas risk-neutral non-negatif kalau
$$\\theta\\,\\varphi\\,(1+|\\rho|) < 4 \\qquad\\text{dan}\\qquad \\theta\\,\\varphi^2\\,(1+|\\rho|) \\le 4.$$

**Apa yang simulator lakuin.** Dia ngitung lima slice maturity, ngegambar mereka dalam total variance, dan ngecek kedua kondisi langsung: dia ngedeteksi apakah ada slice lebih-akhir yang turun di bawah yang lebih-awal (calendar arbitrage — bikin kurva merah dan nyebutin maturity yang nyilang), dan ngeflag slice mana pun yang ngelanggar ketidaksamaan butterfly (⚠ di legend). Dengan term structure ATM flat atau naik dan $\\eta$ modest, slice tetap bersarang dan bebas-arbitrase; slope ATM yang *jatuh* curam ngolaps $\\theta$ long-dated dan maksa persilangan.`
      }
    },
    {
      id: 'worked-example',
      heading: { en: 'Worked example: manufacture (and remove) an arbitrage', id: 'Contoh: bikin (dan hapus) arbitrase' },
      body: {
        en: `**Use the simulator to see both arbitrages appear and vanish.**

1. **Start arbitrage-free.** With the defaults (flat ATM term structure, $\\rho=-0.3$, modest $\\eta$), the five total-variance slices are **nested** — each longer maturity sits above the shorter ones at every strike. The readout is green ("calendar-arbitrage-free"), θ is monotone, butterfly ok. This is a usable surface.
2. **Manufacture calendar arbitrage.** Drag the ATM **term-structure slope** sharply negative. Now the long-dated ATM vol collapses, so the long-dated $\\theta$ falls *below* a shorter-dated $\\theta$ — the ATM points cross, the slices cross, and the readout turns **red** naming the offending maturity pair. Economically: a 2-year option would carry less total variance than a 6-month one — buy the long, sell the short, riskless profit. This is exactly what SSVI's calendar condition forbids.
3. **Remove it.** Bring the slope back toward zero (or positive). $\\theta(T)$ becomes non-decreasing again, the slices un-cross, and the surface is calendar-arbitrage-free once more.
4. **Manufacture butterfly arbitrage.** Now push the smile amplitude $\\eta$ up (and $|\\rho|$). On the slice where $\\theta\\varphi(1+|\\rho|)$ exceeds 4, the legend shows ⚠ — that slice's implied risk-neutral density has gone negative (a butterfly spread with negative price). Pull $\\eta$ back under the bound to restore it.

**The read.** Two independent no-arbitrage conditions — one *across* maturities (calendar), one *within* a maturity (butterfly) — and SSVI gives a parameterization where you can check and enforce both. That is why it is the standard for fitting a *whole* surface, not just a slice.

⟦Disclaimer: a teaching surface, not a calibrator. Real desks fit θ(T) and φ to market quotes and use the full Gatheral-Jacquier / eSSVI conditions; the simulator checks the headline conditions only.⟧`,
        id: `**Pakai simulator buat liat kedua arbitrase muncul dan hilang.**

1. **Mulai bebas-arbitrase.** Dengan default (term structure ATM flat, $\\rho=-0.3$, $\\eta$ modest), lima slice total-variance **bersarang** — tiap maturity lebih panjang duduk di atas yang lebih pendek di tiap strike. Readout hijau ("bebas calendar-arbitrage"), θ monotone, butterfly ok. Ini surface yang bisa-dipakai.
2. **Bikin calendar arbitrage.** Geser **slope term-structure** ATM tajam negatif. Sekarang ATM vol long-dated kolaps, jadi $\\theta$ long-dated jatuh *di bawah* $\\theta$ short-dated — titik ATM nyilang, slice nyilang, dan readout jadi **merah** nyebutin pasangan maturity yang bermasalah. Secara ekonomi: opsi 2-tahun bakal bawa total variance lebih sedikit dari yang 6-bulan — beli yang panjang, jual yang pendek, profit tanpa-risiko. Ini persis yang kondisi calendar SSVI larang.
3. **Hapus dia.** Bawa slope balik menuju nol (atau positif). $\\theta(T)$ jadi non-decreasing lagi, slice un-cross, dan surface bebas calendar-arbitrage sekali lagi.
4. **Bikin butterfly arbitrage.** Sekarang dorong amplitudo smile $\\eta$ naik (dan $|\\rho|$). Di slice di mana $\\theta\\varphi(1+|\\rho|)$ ngelebihin 4, legend nunjukin ⚠ — densitas risk-neutral terimplikasi slice itu udah jadi negatif (butterfly spread dengan harga negatif). Tarik $\\eta$ balik di bawah bound buat mulihinnya.

**Bacaannya.** Dua kondisi no-arbitrage independen — satu *lintas* maturity (calendar), satu *dalam* maturity (butterfly) — dan SSVI ngasih parameterisasi di mana kamu bisa ngecek dan nge-enforce keduanya. Itu kenapa dia standar buat nge-fit *seluruh* surface, bukan cuma slice.

⟦Disclaimer: surface pengajaran, bukan kalibrator. Desk nyata nge-fit θ(T) dan φ ke kuotasi pasar dan pakai kondisi Gatheral-Jacquier / eSSVI penuh; simulator cuma ngecek kondisi headline.⟧`
      }
    },
    {
      id: 'applications',
      heading: { en: 'Applications', id: 'Aplikasi' },
      body: {
        en: `**One coherent, no-arbitrage surface.** SSVI's job is to turn option quotes across *all* strikes and maturities into a single surface you can interpolate anywhere — and, crucially, one that is provably free of static arbitrage. That is the prerequisite for almost everything else: you cannot trust a price, a hedge, or a local-vol model built on an arbitrageable surface.

**Local volatility needs it.** Dupire's local volatility is computed from derivatives of the surface; a calendar arbitrage makes the implied **forward variance negative**, so the local variance is negative and the local vol is imaginary. An SSVI surface, calendar-arbitrage-free by construction, is exactly what you feed Dupire to get a consistent local-vol model for exotics and path-dependent payoffs.

**Term structure of vol = the θ backbone.** The ATM-variance term structure $\\theta(T)$ is the SSVI surface's spine, and it is the same object the practitioner side reads as the **vol term structure** — calm markets slope it up, crises invert it. Dealer hedging across maturities (the vanna/charm flows of the [dealer-hedging deep-dive](item:husslin-dealer-flows)) is hedging *the whole surface*, not one slice.

**Generalisations.** Basic SSVI uses one ρ for the surface; **eSSVI** (Hendriks & Martini) lets ρ vary with maturity for better fits while keeping arbitrage-free conditions, and Corbetta et al. give robust calibration / arbitrage-free interpolation between slices.

**Honest limits.** The simulator checks the *headline* conditions (slice crossing; the butterfly inequality); a production fit uses the full Gatheral-Jacquier theorem (including the φ-monotonicity bound), real bid-ask quotes, and a chosen φ form. And, as always, the surface is the market's risk-neutral expectation — a description and an interpolator, not a forecast of realised volatility.`,
        id: `**Satu surface koheren, no-arbitrage.** Tugas SSVI itu ngubah kuotasi opsi lintas *semua* strike dan maturity jadi satu surface yang kamu bisa interpolasi di mana pun — dan, krusial, satu yang terbukti bebas arbitrase statis. Itu prasyarat buat hampir semua lainnya: kamu gak bisa percaya harga, hedge, atau model local-vol yang dibangun di surface yang bisa-diarbitrase.

**Local volatility butuh dia.** Local volatility Dupire dihitung dari turunan surface; calendar arbitrage bikin **forward variance terimplikasi negatif**, jadi local variance negatif dan local vol imajiner. Surface SSVI, bebas calendar-arbitrage by construction, itu persis yang kamu kasih ke Dupire buat dapet model local-vol konsisten buat exotic dan payoff path-dependent.

**Term structure vol = backbone θ.** Term structure ATM-variance $\\theta(T)$ itu tulang punggung surface SSVI, dan dia objek yang sama yang sisi praktisi baca sebagai **vol term structure** — pasar tenang nyondongin naik, krisis ngebalikinnya. Dealer hedging lintas maturity (flow vanna/charm dari [deep-dive dealer-hedging](item:husslin-dealer-flows)) itu nge-hedge *seluruh surface*, bukan satu slice.

**Generalisasi.** SSVI dasar pakai satu ρ buat surface; **eSSVI** (Hendriks & Martini) ngebiarin ρ bervariasi sama maturity buat fit lebih baik sambil ngejaga kondisi arbitrage-free, dan Corbetta dkk. ngasih kalibrasi robust / interpolasi arbitrage-free antar slice.

**Batas jujur.** Simulator ngecek kondisi *headline* (persilangan slice; ketidaksamaan butterfly); fit produksi pakai teorema Gatheral-Jacquier penuh (termasuk bound φ-monotonisitas), kuotasi bid-ask nyata, dan bentuk φ yang dipilih. Dan, kayak biasa, surface itu ekspektasi risk-neutral pasar — deskripsi dan interpolator, bukan forecast volatilitas realisasi.`
      }
    },
    {
      id: 'practice',
      heading: { en: 'Practice', id: 'Latihan' },
      body: {
        en: `**1.** What is a calendar-spread arbitrage in terms of total-variance slices, and why must total variance be non-decreasing in maturity?

<details><summary>Answer</summary>
A calendar-spread arbitrage exists when the total-variance slices CROSS — i.e. a longer-dated slice w(k;T₂) dips below a shorter-dated one w(k;T₁) at some strike, with T₂>T₁. Total implied variance must be non-decreasing in maturity because time only ADDS uncertainty: by the later maturity the underlying has had at least as much opportunity to move, so accumulated variance can't be smaller. If a longer option had less total variance, you could buy it and sell the shorter one (a calendar spread) for a riskless profit. So the calendar-arbitrage-free condition is exactly: T↦w(k;T) non-decreasing for every k (slices nested, never crossing), which requires the ATM term structure θ(T) itself to be non-decreasing.
</details>

**2.** In SSVI, why is the parameter θ(T) equal to the ATM total variance?

<details><summary>Answer</summary>
Because at k=0 the SSVI formula collapses: w(0;T) = ½θ(1 + ρφ·0 + √((0+ρ)²+1−ρ²)) = ½θ(1 + √(ρ²+1−ρ²)) = ½θ(1+1) = θ. The square-root term becomes √(ρ²+1−ρ²)=√1=1 regardless of ρ and φ, so the at-the-money total variance is exactly θ(T). That is why θ(T) is called the ATM-total-variance term structure — it is the SSVI surface's backbone, and the (necessary) calendar condition ∂_T θ ≥ 0 is a condition directly on it.
</details>

**3.** State the butterfly no-arbitrage conditions for an SSVI slice and what they prevent.

<details><summary>Answer</summary>
A slice is butterfly-arbitrage-free iff θφ(1+|ρ|) < 4 AND θφ²(1+|ρ|) ≤ 4 (with φ=φ(θ)). They prevent the implied risk-neutral DENSITY from going negative: too steep/curved a smile implies a butterfly spread (long the wings, short twice the middle) with a negative price, i.e. a negative probability — impossible. So these bounds cap the smile's amplitude and skew relative to its level. In the simulator, pushing η (and |ρ|) past the bound on some slice flags it with ⚠ — that slice no longer corresponds to a valid probability distribution. (These are the per-slice analogue of the raw-SVI density condition g(k) ≥ 0.)
</details>

**4.** Why can't you build a Dupire local-volatility model from a surface that has calendar arbitrage?

<details><summary>Answer</summary>
Because Dupire's local variance is essentially a ratio whose numerator is the maturity-derivative of total variance (the forward variance). If the surface has calendar arbitrage, total variance is DECREASING in maturity somewhere — so the forward variance is NEGATIVE there, and the local variance is negative, making the local volatility the square root of a negative number (imaginary). A negative forward variance is economically nonsensical (variance can't be negative). So an arbitrage-free surface is a hard prerequisite for local vol — which is a major reason SSVI exists: it guarantees the calendar-arbitrage-free property that Dupire requires, turning raw quotes into a surface you can actually differentiate.
</details>`,
        id: `**1.** Apa itu calendar-spread arbitrage dalam terma slice total-variance, dan kenapa total variance harus non-decreasing di maturity?

<details><summary>Jawaban</summary>
Calendar-spread arbitrage ada pas slice total-variance NYILANG — yaitu slice lebih-panjang w(k;T₂) turun di bawah yang lebih-pendek w(k;T₁) di suatu strike, dengan T₂>T₁. Total implied variance harus non-decreasing di maturity karena waktu cuma NAMBAH ketidakpastian: pada maturity lebih akhir underlying udah punya paling tidak kesempatan sebanyak itu buat gerak, jadi variance terakumulasi gak bisa lebih kecil. Kalau opsi lebih panjang punya total variance lebih sedikit, kamu bisa beli dia dan jual yang lebih pendek (calendar spread) buat profit tanpa-risiko. Jadi kondisi bebas-calendar-arbitrage itu persis: T↦w(k;T) non-decreasing buat tiap k (slice bersarang, gak pernah nyilang), yang butuh term structure ATM θ(T) sendiri non-decreasing.
</details>

**2.** Di SSVI, kenapa parameter θ(T) sama dengan ATM total variance?

<details><summary>Jawaban</summary>
Karena di k=0 formula SSVI kolaps: w(0;T) = ½θ(1 + ρφ·0 + √((0+ρ)²+1−ρ²)) = ½θ(1 + √(ρ²+1−ρ²)) = ½θ(1+1) = θ. Terma akar-kuadrat jadi √(ρ²+1−ρ²)=√1=1 terlepas dari ρ dan φ, jadi total variance at-the-money persis θ(T). Itu kenapa θ(T) disebut term structure ATM-total-variance — dia backbone surface SSVI, dan kondisi calendar (perlu) ∂_T θ ≥ 0 itu kondisi langsung padanya.
</details>

**3.** Nyatain kondisi no-arbitrage butterfly buat slice SSVI dan apa yang mereka cegah.

<details><summary>Jawaban</summary>
Slice bebas-butterfly-arbitrage kalau θφ(1+|ρ|) < 4 DAN θφ²(1+|ρ|) ≤ 4 (dengan φ=φ(θ)). Mereka nyegah DENSITAS risk-neutral terimplikasi jadi negatif: smile yang terlalu curam/melengkung ngimplikasiin butterfly spread (long wing, short dua kali tengah) dengan harga negatif, yaitu probabilitas negatif — mustahil. Jadi bound ini ngecap amplitudo dan skew smile relatif ke level-nya. Di simulator, ndorong η (dan |ρ|) lewat bound di suatu slice ngeflag dia dengan ⚠ — slice itu gak lagi berkorespondensi ke distribusi probabilitas valid. (Ini analog per-slice dari kondisi densitas raw-SVI g(k) ≥ 0.)
</details>

**4.** Kenapa kamu gak bisa bangun model local-volatility Dupire dari surface yang punya calendar arbitrage?

<details><summary>Jawaban</summary>
Karena local variance Dupire esensial rasio yang numerator-nya turunan-maturity dari total variance (forward variance). Kalau surface punya calendar arbitrage, total variance MENURUN di maturity di suatu tempat — jadi forward variance NEGATIF di situ, dan local variance negatif, bikin local volatility akar kuadrat dari angka negatif (imajiner). Forward variance negatif itu gak masuk akal secara ekonomi (variance gak bisa negatif). Jadi surface bebas-arbitrase itu prasyarat keras buat local vol — yang itu alasan besar SSVI ada: dia ngejamin properti bebas-calendar-arbitrage yang Dupire butuh, ngubah kuotasi mentah jadi surface yang kamu beneran bisa diferensiasi.
</details>`
      }
    },
    {
      id: 'connections',
      heading: { en: 'Connections', id: 'Koneksi' },
      body: {
        en: `- **The single-slice version**: [raw SVI / the volatility surface](item:gatheral-vol-surface) — SSVI is the surface extension; read it first.
- **The quant curriculum**: [@insiliconot quant curriculum](item:insilico-quant-curriculum) — the vol-surface pillar; SSVI is the arbitrage-free full-surface form.
- **Surface dynamics = dealer flows**: [dealer-hedging flows](item:husslin-dealer-flows) — vanna/charm hedge across the *whole* surface; the θ(T) backbone is the vol term structure desks watch.
- **The literature map**: [Sources & Curriculum](item:trading-sources-curriculum) — Gatheral, Lee, Dupire in the broader bibliography.`,
        id: `- **Versi slice-tunggal**: [raw SVI / volatility surface](item:gatheral-vol-surface) — SSVI itu ekstensi surface; baca dulu.
- **Kurikulum quant**: [kurikulum quant @insiliconot](item:insilico-quant-curriculum) — pilar vol-surface; SSVI itu bentuk full-surface bebas-arbitrase.
- **Dinamika surface = dealer flows**: [dealer-hedging flows](item:husslin-dealer-flows) — vanna/charm hedge lintas *seluruh* surface; backbone θ(T) itu vol term structure yang desk awasi.
- **Peta literatur**: [Sources & Curriculum](item:trading-sources-curriculum) — Gatheral, Lee, Dupire di bibliografi lebih luas.`
      }
    },
    {
      id: 'sources',
      heading: { en: 'Sources', id: 'Sumber' },
      body: {
        en: `Established academic references (web-verified); educational, not financial advice.
- **Gatheral, J., and Jacquier, A.** (2014). "Arbitrage-free SVI volatility surfaces." *Quantitative Finance* 14(1), 59–71 (arXiv:1204.0646). **(This item.)** Introduces SSVI; the calendar (slices non-decreasing in T) and butterfly (θφ(1+|ρ|)<4, θφ²(1+|ρ|)≤4) conditions.
- **Gatheral, J.** (2006). *The Volatility Surface: A Practitioner's Guide.* Wiley.
- **Roper, M.** (2010). "Arbitrage-free implied volatility surfaces." Working paper — the static no-arbitrage conditions.
- **Lee, R. W.** (2004). "The Moment Formula for Implied Volatility at Extreme Strikes." *Mathematical Finance.* Wing-slope bound.
- **Dupire, B.** (1994). "Pricing with a Smile." *Risk.* Local vol — why an arbitrage-free surface is required.
- **Corbetta, Cohort, Laachir & Martini** (2019). "Robust calibration and arbitrage-free interpolation of SSVI slices." arXiv:1804.04924. + **eSSVI** (Hendriks & Martini) — maturity-dependent ρ.`,
        id: `Referensi akademik mapan (terverifikasi-web); edukatif, bukan nasihat keuangan.
- **Gatheral, J., dan Jacquier, A.** (2014). "Arbitrage-free SVI volatility surfaces." *Quantitative Finance* 14(1), 59–71 (arXiv:1204.0646). **(Item ini.)** Ngenalin SSVI; kondisi calendar (slice non-decreasing di T) dan butterfly (θφ(1+|ρ|)<4, θφ²(1+|ρ|)≤4).
- **Gatheral, J.** (2006). *The Volatility Surface: A Practitioner's Guide.* Wiley.
- **Roper, M.** (2010). "Arbitrage-free implied volatility surfaces." Working paper — kondisi no-arbitrage statis.
- **Lee, R. W.** (2004). "The Moment Formula for Implied Volatility at Extreme Strikes." *Mathematical Finance.* Wing-slope bound.
- **Dupire, B.** (1994). "Pricing with a Smile." *Risk.* Local vol — kenapa surface bebas-arbitrase dibutuhin.
- **Corbetta, Cohort, Laachir & Martini** (2019). "Robust calibration and arbitrage-free interpolation of SSVI slices." arXiv:1804.04924. + **eSSVI** (Hendriks & Martini) — ρ bergantung-maturity.`
      }
    },
  ],

  audio: { enabled: true },

  selfTest: [
    {
      sectionId: 'intuition',
      question: { en: `Why must total-variance slices be nested (never crossing) across maturities, and what arbitrage appears if they cross?`, id: `Kenapa slice total-variance harus bersarang (gak pernah nyilang) lintas maturity, dan arbitrase apa yang muncul kalau mereka nyilang?` },
      prompt: { en: 'Before continuing, try answering:', id: 'Sebelum lanjut, coba jawab:' },
      answer: {
        en: `Because time only accumulates uncertainty: by a later maturity T₂ > T₁ the underlying has had at least as much opportunity to move, so total implied variance at every strike must be at least as large — the T₂ slice sits on or above the T₁ slice everywhere (nested). If a longer-dated slice CROSSES below a shorter-dated one at some strike, the longer option carries LESS total variance than the shorter, which is a CALENDAR-SPREAD ARBITRAGE: buy the long-dated, sell the short-dated option, and lock in a riskless profit. A necessary condition is that the ATM total variance θ(T) is itself non-decreasing — if ATM vol falls fast enough with maturity that θ decreases, the ATM points alone already cross. SSVI's calendar condition is exactly T↦w(k;T) non-decreasing for all k.`,
        id: `Karena waktu cuma ngumpulin ketidakpastian: pada maturity lebih akhir T₂ > T₁ underlying udah punya paling tidak kesempatan sebanyak itu buat gerak, jadi total implied variance di tiap strike harus paling tidak sebesar itu — slice T₂ duduk di atas atau sama dengan slice T₁ di mana-mana (bersarang). Kalau slice lebih-panjang NYILANG di bawah yang lebih-pendek di suatu strike, opsi lebih panjang bawa total variance LEBIH SEDIKIT dari yang lebih pendek, yang itu CALENDAR-SPREAD ARBITRAGE: beli yang long-dated, jual yang short-dated, dan kunci profit tanpa-risiko. Kondisi perlu itu ATM total variance θ(T) sendiri non-decreasing — kalau ATM vol jatuh cukup cepat sama maturity sampai θ turun, titik ATM aja udah nyilang. Kondisi calendar SSVI itu persis T↦w(k;T) non-decreasing buat semua k.`
      }
    },
    {
      sectionId: 'formalization',
      question: { en: `Write the SSVI slice formula, show why w(0;T)=θ(T), and state both arbitrage conditions.`, id: `Tulis formula slice SSVI, tunjukin kenapa w(0;T)=θ(T), dan nyatain kedua kondisi arbitrase.` },
      prompt: { en: 'Before continuing, try answering:', id: 'Sebelum lanjut, coba jawab:' },
      answer: {
        en: `SSVI: w(k;T) = ½θ(T)(1 + ρφ(θ)k + √((φ(θ)k+ρ)² + 1−ρ²)), with θ(T) the ATM total variance, ρ a single surface skew, φ(θ) the smile function. At k=0: the square root is √(ρ²+1−ρ²)=√1=1, so w(0;T) = ½θ(1+1) = θ(T) — the ATM total variance, for any ρ, φ. Conditions: (1) NO CALENDAR ARBITRAGE — T↦w(k;T) non-decreasing for every k (slices don't cross; necessarily ∂_Tθ ≥ 0, plus a θφ-monotonicity bound). (2) NO BUTTERFLY ARBITRAGE per slice — θφ(1+|ρ|) < 4 and θφ²(1+|ρ|) ≤ 4 (the implied risk-neutral density stays non-negative). Respect both and the whole surface is free of static arbitrage.`,
        id: `SSVI: w(k;T) = ½θ(T)(1 + ρφ(θ)k + √((φ(θ)k+ρ)² + 1−ρ²)), dengan θ(T) ATM total variance, ρ satu skew surface, φ(θ) fungsi smile. Di k=0: akar kuadratnya √(ρ²+1−ρ²)=√1=1, jadi w(0;T) = ½θ(1+1) = θ(T) — ATM total variance, buat ρ, φ apa pun. Kondisi: (1) TANPA CALENDAR ARBITRAGE — T↦w(k;T) non-decreasing buat tiap k (slice gak nyilang; perlu ∂_Tθ ≥ 0, plus bound θφ-monotonisitas). (2) TANPA BUTTERFLY ARBITRAGE per slice — θφ(1+|ρ|) < 4 dan θφ²(1+|ρ|) ≤ 4 (densitas risk-neutral terimplikasi tetap non-negatif). Hormatin keduanya dan seluruh surface bebas arbitrase statis.`
      }
    },
    {
      sectionId: 'applications',
      question: { en: `Why is a calendar-arbitrage-free surface a hard prerequisite for Dupire local volatility?`, id: `Kenapa surface bebas-calendar-arbitrage itu prasyarat keras buat local volatility Dupire?` },
      prompt: { en: 'Before continuing, try answering:', id: 'Sebelum lanjut, coba jawab:' },
      answer: {
        en: `Because Dupire's local variance is built from the maturity-derivative of total variance — the forward variance — in its numerator. If the surface has calendar arbitrage, total variance is DECREASING in maturity somewhere, so the forward variance is NEGATIVE there; the local variance is then negative and the local volatility is the square root of a negative number, i.e. imaginary. A negative forward variance is economically impossible (variance is non-negative). So you cannot extract a valid local-vol model from an arbitrageable surface — and that is a central reason SSVI exists: by guaranteeing total variance is non-decreasing in maturity (no calendar arbitrage), it produces exactly the kind of surface Dupire can be differentiated on to give a consistent local-vol model for exotics and path-dependent pricing.`,
        id: `Karena local variance Dupire dibangun dari turunan-maturity dari total variance — forward variance — di numerator-nya. Kalau surface punya calendar arbitrage, total variance MENURUN di maturity di suatu tempat, jadi forward variance NEGATIF di situ; local variance lalu negatif dan local volatility itu akar kuadrat dari angka negatif, yaitu imajiner. Forward variance negatif itu mustahil secara ekonomi (variance non-negatif). Jadi kamu gak bisa ngekstrak model local-vol valid dari surface yang bisa-diarbitrase — dan itu alasan sentral SSVI ada: dengan ngejamin total variance non-decreasing di maturity (tanpa calendar arbitrage), dia ngehasilin persis jenis surface yang Dupire bisa didiferensiasi padanya buat ngasih model local-vol konsisten buat exotic dan pricing path-dependent.`
      }
    },
  ],
};
