// ─────────────────────────────────────────────────────────────────────────
// ⚠ DRAFT — AWAITING AZ DOMAIN REVIEW (option (b): "I draft, you correct").
// Geothermal content is Az-authored (Reservoir & Production Engineer, 6 yrs
// Star Energy Geothermal Darajat — dry-steam). Schema-valid + renderable.
//
// GENERAL claims verified against the literature (2026-06-13): Sanyal's
// author-bio facts (GeothermEx VP Reservoir Engineering 1980, President 1995,
// d. 2019); the Arps (1945, Trans. AIME 160, 228–247) exponential/hyperbolic/
// harmonic decline family and its b-exponent; the Muffler & Cataldi (1978,
// Geothermics 7, 53–89) volumetric stored-heat method; and the Sanyal &
// Sarmiento (2005, GRC Trans. 29) cumulative proven/probable/possible =
// P90 / (P50, median) / P10 reserve-classification structure. The Arps +
// stored-heat + Monte-Carlo + reserve-classification backbone is fluid-neutral
// and verified. Darajat OPERATIONAL facts stay external to the module and
// remain flagged **⟦TODO-Az: …⟧** for the owner.
// Full prep: notes/sanyal-decline-reserves-research-prep-2026-06-06.md
//
// OPEN TODO-Az ITEMS (Darajat-specific; not in public literature):
//   A. HEADLINE: whether/how Arps decline-curve analysis (an empirical oil/gas
//      tool) transfers to a vapour-dominated dry-steam field — where decline
//      is governed by pressure drawdown, reinjection support, and steam-rate /
//      WHP decline. The module teaches the verified standard machinery and
//      flags the geothermal/dry-steam transfer as the teaching point.
//   B. Darajat recovery factor and the volumetric heat-in-place assumptions
//      (the recovery factor is the dominant lever and is field-specific).
//   C. How reinjection support (Axelsson) and Acuña deliverability modify the
//      observed decline.
//   D. Worked-example numbers are ILLUSTRATIVE placeholders — swap for a real
//      Darajat production history.
//   E. Reserve-classification convention actually used at Star Energy.
//   F. Seed cards DEFERRED until Az signs off (card-coverage exempt: geothermal
//      domain + DRAFT marker).
// ─────────────────────────────────────────────────────────────────────────

export const CONTENT = {
  itemId: 'sanyal-2005',
  estimatedReadMinutes: 36,

  author: {
    fullName: { en: 'Subir K. Sanyal', id: 'Subir K. Sanyal' },
    affiliation: {
      en: 'Reservoir engineer; President of GeothermEx, Inc. (joined 1980 as VP of Reservoir Engineering). Conducted reservoir studies across most US geothermal fields and many international ones; a leading authority on geothermal resource capacity, reserves estimation, and sustainability.',
      id: 'Reservoir engineer; Presiden GeothermEx, Inc. (gabung 1980 sebagai VP Reservoir Engineering). Ngelakuin studi reservoir lintas mayoritas field geothermal AS dan banyak yang internasional; otoritas terkemuka di kapasitas resource geothermal, estimasi cadangan, dan keberlanjutan.'
    },
    tagline: {
      en: 'Two questions decide whether a geothermal field is a business: how much energy is in the ground (reserves), and how fast will the wells fade (decline). Sanyal made both quantitative and probabilistic — heat-in-place with uncertainty, decline curves with an economic limit, reserves booked as proven/probable/possible.',
      id: 'Dua pertanyaan nentuin apakah field geothermal itu bisnis: berapa banyak energi di dalam tanah (cadangan), dan seberapa cepat sumur-sumurnya memudar (decline). Sanyal bikin keduanya kuantitatif dan probabilistik — heat-in-place dengan ketidakpastian, decline curve dengan batas ekonomis, cadangan dibukukan sebagai proven/probable/possible.'
    },
    bio: {
      en: `Subir Sanyal spent his career at GeothermEx turning geothermal resource assessment from qualitative promise into bankable numbers. His work spans the **volumetric "stored-heat" estimate** (how much thermal energy a reservoir holds, and what fraction is recoverable as electricity), the **Monte-Carlo treatment** that turns the large uncertainties in area, thickness, temperature, and recovery factor into a probability distribution of megawatt capacity, and the **reserve-classification** language (proven / probable / possible) that lets a geothermal project be financed like any other energy asset. He also worked extensively on **decline analysis** and on the sustainability and renewability of geothermal capacity. (Sanyal joined GeothermEx in 1980 as VP of Reservoir Engineering and became President in 1995; he died in 2019.)`,
      id: `Subir Sanyal ngabisin karirnya di GeothermEx ngubah penilaian resource geothermal dari janji kualitatif jadi angka yang bisa dibiayai. Karyanya ngerentang **estimasi "stored-heat" volumetrik** (berapa banyak energi termal yang reservoir simpen, dan fraksi mana yang bisa di-recover jadi listrik), **perlakuan Monte-Carlo** yang ngubah ketidakpastian besar di area, ketebalan, temperatur, dan recovery factor jadi distribusi probabilitas kapasitas megawatt, dan bahasa **klasifikasi cadangan** (proven / probable / possible) yang ngebiarin proyek geothermal dibiayai kayak aset energi lain. Dia juga kerja ekstensif soal **analisis decline** dan soal keberlanjutan dan keterbaruan kapasitas geothermal. (Sanyal gabung GeothermEx tahun 1980 sebagai VP Reservoir Engineering dan jadi Presiden tahun 1995; dia wafat tahun 2019.)`
    },
    focus: {
      en: `A geothermal field is an energy asset, and two numbers decide its value. **Reserves**: how much recoverable energy is in the ground — estimated by the **volumetric "stored-heat" method**, which multiplies the reservoir's rock+fluid heat capacity by its volume and the temperature above a cutoff to get the heat in place, then applies a **recovery factor** and conversion efficiency to get an electrical capacity (megawatts for a project lifetime). Because area, thickness, temperature, and especially the recovery factor are all uncertain, the honest estimate is a **probability distribution** (Monte-Carlo), read as **P90 / P50 / P10** — which Sanyal & Sarmiento map to **proven / probable / possible** reserves. **Decline**: how fast the wells fade — described by **Arps decline curves** (exponential, hyperbolic, harmonic, set by a decline exponent $b$), fitted to production history and extrapolated to an economic limit to forecast remaining reserves and field life. ⟦TODO-Az: the geothermal transfer is your call. Arps was built for oil and gas; geothermal decline is often driven by *pressure* drawdown and *reinjection support*, and in a vapour-dominated DRY-STEAM field like Darajat by steam-rate and wellhead-pressure decline — whether a clean Arps $b$-factor applies, and what the recovery factor is for dry steam, are domain judgements. This module teaches the standard machinery and flags the transfer.⟧`,
      id: `Field geothermal itu aset energi, dan dua angka nentuin nilainya. **Cadangan**: berapa banyak energi yang bisa di-recover di dalam tanah — diestimasi dengan **metode "stored-heat" volumetrik**, yang ngali heat capacity batuan+fluida reservoir sama volumenya dan temperatur di atas cutoff buat dapet heat in place, terus nerapin **recovery factor** dan efisiensi konversi buat dapet kapasitas listrik (megawatt buat masa hidup proyek). Karena area, ketebalan, temperatur, dan terutama recovery factor semua gak pasti, estimasi yang jujur itu **distribusi probabilitas** (Monte-Carlo), dibaca sebagai **P90 / P50 / P10** — yang Sanyal & Sarmiento petakan ke cadangan **proven / probable / possible**. **Decline**: seberapa cepat sumur memudar — digambarkan oleh **decline curve Arps** (eksponensial, hiperbolik, harmonik, diset oleh decline exponent $b$), di-fit ke production history dan diekstrapolasi ke batas ekonomis buat ngeforecast cadangan tersisa dan umur field. ⟦TODO-Az: transfer geothermal-nya keputusan kamu. Arps dibangun buat oil dan gas; decline geothermal sering didorong oleh drawdown *pressure* dan *reinjection support*, dan di field DRY-STEAM vapour-dominated kayak Darajat oleh decline steam-rate dan wellhead-pressure — apakah Arps $b$-factor bersih berlaku, dan berapa recovery factor buat dry steam, itu pertimbangan domain. Module ini ngajarin mesin standar dan ngeflag transfer-nya.⟧`
    },
    intellectualLineage: {
      en: `The decline half descends directly from **J. J. Arps (1945)**, who catalogued the empirical rate–time decline of oil wells into the exponential / hyperbolic / harmonic family parameterised by the decline exponent $b$ — still the workhorse of production forecasting. The reserves half descends from the **USGS volumetric "stored-heat" method (Muffler & Cataldi, 1978)**, the regional resource-assessment framework that treats the reservoir as a heat reservoir and applies a recovery factor. Sanyal's contribution was to wrap both in **probabilistic (Monte-Carlo) estimation** and **financial-grade reserve classification**, making geothermal resources comparable to oil-and-gas reserves for investment. ⟦TODO-Az: the geothermal-specific lineage — Grant & Bixley's lumped-parameter and decline treatment (in this catalog), Acuña's dry-steam deliverability decomposition (in this catalog), and the reinjection literature (Axelsson) that changes the decline. Confirm which to foreground.⟧`,
      id: `Paruh decline turun langsung dari **J. J. Arps (1945)**, yang ngatalogin decline rate–time empiris sumur minyak ke keluarga eksponensial / hiperbolik / harmonik yang diparameterisasi oleh decline exponent $b$ — masih jadi kuda-beban forecasting produksi. Paruh cadangan turun dari **metode "stored-heat" volumetrik USGS (Muffler & Cataldi, 1978)**, framework penilaian-resource regional yang ngeperlakukan reservoir sebagai reservoir panas dan nerapin recovery factor. Kontribusi Sanyal itu mbungkus keduanya dalam **estimasi probabilistik (Monte-Carlo)** dan **klasifikasi cadangan kelas-finansial**, bikin resource geothermal sebanding dengan cadangan oil-and-gas buat investasi. ⟦TODO-Az: lineage spesifik-geothermal — perlakuan lumped-parameter dan decline Grant & Bixley (di katalog ini), dekomposisi deliverability dry-steam Acuña (di katalog ini), dan literatur reinjeksi (Axelsson) yang ngubah decline. Konfirmasi yang mana yang dimajuin.⟧`
    },
    keyCollaborators: {
      en: `Sanyal's milieu is the GeothermEx consulting practice and the Stanford Geothermal Workshop / Geothermal Resources Council community. The recurring co-author in the reserves work is **Zosimo (James) Sarmiento**; the methodological neighbours are the USGS resource-assessment lineage (**Muffler**, **Cataldi**, **Brook**) and the petroleum decline tradition (**Arps**). ⟦TODO-Az: confirm/adjust, and whether an Indonesian/Star Energy capacity or reserves study belongs here.⟧`,
      id: `Lingkungan Sanyal itu praktik konsultasi GeothermEx dan komunitas Stanford Geothermal Workshop / Geothermal Resources Council. Co-author berulang di kerja cadangan itu **Zosimo (James) Sarmiento**; tetangga metodologisnya itu garis keturunan penilaian-resource USGS (**Muffler**, **Cataldi**, **Brook**) dan tradisi decline petroleum (**Arps**). ⟦TODO-Az: konfirmasi/sesuaikan, dan apakah studi kapasitas atau cadangan Indonesia/Star Energy masuk di sini.⟧`
    },
    legacy: {
      en: `Sanyal's lasting contribution is that geothermal can be *booked* — a developer can state, with stated confidence, how many megawatts a field will deliver for how long, and a bank can lend against it. That requires both halves: a reserves estimate that is honest about uncertainty (a distribution, not a single number) and a decline forecast that says when output will fall below the economic limit. ⟦TODO-Az: the lasting value FOR DARAJAT is what this draft cannot settle without you — the dry-steam recovery factor, whether and how Arps decline applies to a reinjection-supported vapour-dominated field, and how Darajat's reserves are actually booked and its decline actually forecast. Treat the module as the verified method (Arps + stored-heat + Monte-Carlo + reserve classification) plus a flagged adaptation checklist for your field.⟧`,
      id: `Kontribusi abadi Sanyal itu bahwa geothermal bisa *dibukukan* — developer bisa nyatain, dengan kepercayaan yang dinyatakan, berapa megawatt yang field bakal deliver buat berapa lama, dan bank bisa minjemin lawan itu. Itu butuh kedua paruh: estimasi cadangan yang jujur soal ketidakpastian (distribusi, bukan angka tunggal) dan forecast decline yang bilang kapan output bakal jatuh di bawah batas ekonomis. ⟦TODO-Az: nilai abadi BUAT DARAJAT itu yang draft ini gak bisa selesaikan tanpa kamu — recovery factor dry-steam, apakah dan gimana decline Arps berlaku buat field vapour-dominated yang disokong-reinjeksi, dan gimana cadangan Darajat sebenarnya dibukukan dan decline-nya sebenarnya diforecast. Perlakukan module sebagai metode terverifikasi (Arps + stored-heat + Monte-Carlo + klasifikasi cadangan) plus checklist adaptasi yang di-flag buat field kamu.⟧`
    },
    keyWorks: [
      { year: 2005, title: 'Booking Geothermal Energy Reserves (Sanyal & Sarmiento) — proven/probable/possible classification (anchor)', venue: 'Geothermal Resources Council Transactions 29' },
      { year: 2005, title: 'Sustainability and Renewability of Geothermal Power Capacity', venue: 'Proc. World Geothermal Congress' },
      { year: 1945, title: 'Analysis of Decline Curves (Arps) — the exponential/hyperbolic/harmonic family', venue: 'Trans. AIME 160' },
      { year: 1978, title: 'Methods for Regional Assessment of Geothermal Resources (Muffler & Cataldi) — the volumetric stored-heat method', venue: 'Geothermics 7, 53–89' },
      { year: 2011, title: 'Geothermal Reservoir Engineering (Grant & Bixley) — decline & lumped-parameter chapters (in this catalog)', venue: 'Elsevier' },
    ],
  },

  sections: [
    // ─────────────── 1. motivation ───────────────
    {
      id: 'motivation',
      heading: { en: 'Why this matters', id: 'Kenapa ini penting' },
      body: {
        en: `Before anyone builds a power plant on a geothermal field, two questions have to be answered with money on the line: **how much energy is down there**, and **how fast will the wells fade**? The first is a **reserves** question, the second a **decline** question, and together they decide the plant size, the number of wells, the financing, and the project's life.

**Reserves — the stored-heat estimate.** A geothermal reservoir is a hot rock body. The energy it holds is, to first order, its volume times its rock+fluid heat capacity times the temperature above a useful cutoff:
- multiply area × thickness × heat capacity × (reservoir temperature − reference temperature) to get the **heat in place**;
- multiply by a **recovery factor** (the fraction you can actually extract — far less than 100%) and a conversion efficiency to get **recoverable electrical energy**;
- divide by the planned plant life to get a **megawatt capacity**.

**The honest version is probabilistic.** Area, thickness, temperature, and especially the recovery factor are genuinely uncertain early on. So you do not report one number — you treat each input as a distribution, run **Monte-Carlo**, and report the capacity as **P90 / P50 / P10** (the 90%, 50%, 10% exceedance values). Sanyal & Sarmiento map these to **proven / probable / possible** reserves, the language that lets a geothermal field be financed like an oil field.

**Decline — the Arps curves.** Once wells produce, their output falls over time as pressure draws down. **Decline-curve analysis** (Arps, 1945) fits that fall to one of three shapes — exponential, hyperbolic, or harmonic, set by a single **decline exponent $b$** — and extrapolates to an economic limit, forecasting remaining reserves and field life from production history alone.

⟦TODO-Az: this is where geothermal departs from the oil-and-gas textbook, and it is your territory. Arps decline was built for hydrocarbon wells; geothermal decline is frequently governed by reservoir *pressure* drawdown and by *reinjection support* (which can flatten the curve), and in a vapour-dominated DRY-STEAM field like Darajat by *steam-rate* and *wellhead-pressure* decline rather than a liquid-rate Arps fit. The recovery factor for dry steam is its own field-specific question and is the single biggest lever in the reserves estimate. The module teaches the standard method and flags these adaptations for your sign-off.⟧`,
        id: `Sebelum siapa pun ngebangun power plant di field geothermal, dua pertanyaan harus dijawab dengan uang dipertaruhkan: **berapa banyak energi di bawah sana**, dan **seberapa cepat sumur-sumurnya bakal memudar**? Yang pertama pertanyaan **cadangan**, yang kedua pertanyaan **decline**, dan bareng-bareng mereka nentuin ukuran plant, jumlah sumur, pembiayaan, dan umur proyek.

**Cadangan — estimasi stored-heat.** Reservoir geothermal itu badan batuan panas. Energi yang dia simpen itu, ke orde pertama, volumenya kali heat capacity batuan+fluida-nya kali temperatur di atas cutoff yang berguna:
- kali area × ketebalan × heat capacity × (temperatur reservoir − temperatur referensi) buat dapet **heat in place**;
- kali **recovery factor** (fraksi yang bisa kamu beneran ekstrak — jauh kurang dari 100%) dan efisiensi konversi buat dapet **energi listrik yang bisa di-recover**;
- bagi sama umur plant yang direncanakan buat dapet **kapasitas megawatt**.

**Versi jujurnya probabilistik.** Area, ketebalan, temperatur, dan terutama recovery factor itu beneran gak pasti di awal. Jadi kamu gak ngelaporin satu angka — kamu ngeperlakukan tiap input sebagai distribusi, jalanin **Monte-Carlo**, dan ngelaporin kapasitasnya sebagai **P90 / P50 / P10** (nilai exceedance 90%, 50%, 10%). Sanyal & Sarmiento memetakan ini ke cadangan **proven / probable / possible**, bahasa yang ngebiarin field geothermal dibiayai kayak field minyak.

**Decline — kurva Arps.** Begitu sumur produksi, output-nya jatuh over time seiring pressure drawdown. **Decline-curve analysis** (Arps, 1945) nge-fit jatuhan itu ke salah satu dari tiga bentuk — eksponensial, hiperbolik, atau harmonik, diset oleh satu **decline exponent $b$** — dan ngekstrapolasi ke batas ekonomis, ngeforecast cadangan tersisa dan umur field dari production history aja.

⟦TODO-Az: ini di mana geothermal berangkat dari textbook oil-and-gas, dan ini teritori kamu. Decline Arps dibangun buat sumur hidrokarbon; decline geothermal sering diatur oleh drawdown *pressure* reservoir dan oleh *reinjection support* (yang bisa ngeratain kurva), dan di field DRY-STEAM vapour-dominated kayak Darajat oleh decline *steam-rate* dan *wellhead-pressure* bukan fit Arps liquid-rate. Recovery factor buat dry steam itu pertanyaan spesifik-field tersendiri dan jadi lever paling besar di estimasi cadangan. Module ngajarin metode standar dan ngeflag adaptasi ini buat sign-off kamu.⟧`
      }
    },

    // ─────────────── 2. intuition ───────────────
    {
      id: 'intuition',
      heading: { en: 'Intuition', id: 'Intuisi' },
      body: {
        en: `Two simple pictures carry this topic.

**Reserves = a hot bathtub with a leaky drain.** Imagine the reservoir as a tub of hot rock. The total heat it holds is just how big it is times how hot it is (above the temperature you can no longer use). But you cannot get all of it out — fluid only sweeps part of the rock, some heat stays stranded, and the power cycle is far from perfect. So the *recoverable* energy is the heat in place times a **recovery factor** that is small and uncertain. That single uncertain fraction dominates the estimate, which is why you do not quote one number — you quote a *range*. Run the calculation thousands of times with each input drawn from its plausible range (Monte-Carlo) and you get a distribution: the conservative P90 you can promise (proven), the middle P50 you expect (probable), the optimistic P10 you might get (possible).

**Decline = watching the tank empty.** When a well produces, its rate falls. The shape of the fall tells you the story. If it falls by a constant *percentage* each year (say 10% of whatever is left), that is **exponential** decline — a straight line on a log-rate plot, the most pessimistic and the simplest. If the percentage decline itself eases off over time, the curve is **hyperbolic** (most real wells) or, in the gentlest limit, **harmonic**. One number — the **decline exponent $b$** (0 for exponential, up to 1 for harmonic) — sets the shape. Fit the past, extend the curve to the rate at which the well is no longer worth running (the economic limit), and the area under it is the remaining reserve; where it crosses the limit is the field's life.

The two pictures meet: the volumetric estimate says what *could* be recovered; the decline curve, fitted to real production, says what *is being* recovered and when it will run out. Early in a field's life you lean on volumetrics; as production history accumulates, decline analysis takes over as the more trustworthy forecast.

⟦TODO-Az: the dry-steam intuition needs your hand. In a vapour-dominated field the "tank emptying" is really a *pressure* and *steam-rate* decline, often held up by reinjection; the Arps shapes are an empirical description that may or may not map cleanly onto the underlying steam-cap physics. Please confirm how the decline of a dry-steam well like Darajat's is actually read before this becomes a teaching point.⟧`,
        id: `Dua gambaran simpel ngebawa topik ini.

**Cadangan = bak mandi panas dengan saluran bocor.** Bayangin reservoir sebagai bak batuan panas. Total panas yang dia simpen itu cuma seberapa besar dia kali seberapa panas dia (di atas temperatur yang gak bisa kamu pakai lagi). Tapi kamu gak bisa ngambil semuanya — fluida cuma nyapu sebagian batuan, sebagian panas tetap terlantar, dan power cycle-nya jauh dari sempurna. Jadi energi yang *bisa di-recover* itu heat in place kali **recovery factor** yang kecil dan gak pasti. Satu fraksi gak-pasti itu mendominasi estimasi, makanya kamu gak ngutip satu angka — kamu ngutip *rentang*. Jalanin perhitungan ribuan kali dengan tiap input ditarik dari rentang masuk-akalnya (Monte-Carlo) dan kamu dapet distribusi: P90 konservatif yang bisa kamu janjiin (proven), P50 tengah yang kamu harapin (probable), P10 optimis yang mungkin kamu dapet (possible).

**Decline = ngeliat tangki kosong.** Pas sumur produksi, rate-nya jatuh. Bentuk jatuhannya ngasih tau ceritanya. Kalau dia jatuh sebesar *persentase* konstan tiap tahun (katakanlah 10% dari apa pun yang tersisa), itu decline **eksponensial** — garis lurus di plot log-rate, paling pesimis dan paling simpel. Kalau persentase decline-nya sendiri mereda over time, kurvanya **hiperbolik** (mayoritas sumur nyata) atau, di limit paling lembut, **harmonik**. Satu angka — **decline exponent $b$** (0 buat eksponensial, sampai 1 buat harmonik) — nyetel bentuknya. Fit masa lalu, perpanjang kurva ke rate di mana sumur udah gak layak dijalankan (batas ekonomis), dan area di bawahnya itu cadangan tersisa; di mana dia ngelewatin batas itu umur field-nya.

Dua gambaran ketemu: estimasi volumetrik bilang apa yang *bisa* di-recover; decline curve, di-fit ke produksi nyata, bilang apa yang *sedang* di-recover dan kapan dia bakal habis. Di awal umur field kamu nyandar ke volumetrik; seiring production history nambah, analisis decline ngambil alih sebagai forecast yang lebih bisa dipercaya.

⟦TODO-Az: intuisi dry-steam butuh tangan kamu. Di field vapour-dominated "tangki kosong" itu sebenarnya decline *pressure* dan *steam-rate*, sering ditahan oleh reinjeksi; bentuk Arps itu deskripsi empiris yang mungkin atau mungkin gak memetakan dengan bersih ke fisika steam-cap yang mendasari. Tolong konfirmasi gimana decline sumur dry-steam kayak Darajat sebenarnya dibaca sebelum ini jadi teaching point.⟧`
      }
    },

    // ─────────────── 3. formalization ───────────────
    {
      id: 'formalization',
      heading: { en: 'The method, formalized', id: 'Metodenya, diformalkan' },
      body: {
        en: `**Arps decline curves.** The empirical rate–time decline is the family
$$q(t) \\;=\\; \\frac{q_i}{\\left(1 + b\\,D_i\\,t\\right)^{1/b}},$$
with $q_i$ the initial rate, $D_i$ the initial decline rate, and $b$ the **decline exponent**:
- **$b = 0$ — exponential**: $q = q_i e^{-D t}$; cumulative production $N_p = (q_i - q)/D$. Constant fractional decline; the most conservative, a straight line on a log-rate-vs-time plot.
- **$0 < b < 1$ — hyperbolic**: the fractional decline rate itself decreases with time; most real wells.
- **$b = 1$ — harmonic**: $q = q_i/(1 + D_i t)$; the slowest decline.

The **Estimated Ultimate Recovery (EUR)** is the integral of $q(t)$ from start to the **economic limit rate** $q_{\\text{lim}}$ (the rate below which operating costs exceed revenue); the time to reach $q_{\\text{lim}}$ is the field/well life. Fitting historical production picks $q_i$, $D_i$, $b$.

**Volumetric "stored-heat" reserves.** The heat in place is
$$Q_{\\text{HIP}} \\;=\\; (\\rho c)_{\\text{res}}\\;V\\;\\bigl(T_{\\text{res}} - T_{\\text{ref}}\\bigr),\\qquad V = A\\,h,$$
with $(\\rho c)_{\\text{res}}$ the volumetric heat capacity of rock+fluid, $A$ area, $h$ thickness, $T_{\\text{ref}}$ a cutoff temperature. The recoverable **electrical capacity** is
$$P \\;\\approx\\; \\frac{Q_{\\text{HIP}}\\;R_f\\;\\eta_{\\text{conv}}}{L\\;f},$$
with $R_f$ the **recovery factor**, $\\eta_{\\text{conv}}$ the conversion efficiency, $L$ the plant life, $f$ the capacity factor. ⟦TODO-Az: the constants, the exact $R_f$ definition, and the dry-steam efficiency are yours — I have kept it schematic.⟧

**Monte-Carlo and reserve classification.** Treat $A, h, T_{\\text{res}}, R_f$ (and others) as probability distributions; sample them many times; the output is a distribution of $P$. Read off **P90, P50, P10** (exceedance probabilities). In SPE/PRMS style the booked categories are **cumulative**: Sanyal & Sarmiento book **proved = P90**, **proved + probable = P50**, **proved + probable + possible = P10** — so probable and possible are the *increments* added on top of proved, not standalone tranches. The everyday shorthand "proven/probable/possible = P90/P50/P10" lines the percentiles up correctly but compresses this cumulative structure; the result is a confidence-graded statement of capacity. ⟦TODO-Az: confirm the reserve-classification convention actually used at Star Energy.⟧

⟦TODO-Az: the geothermal/dry-steam formalization needs your correction.
  1. **Does Arps transfer?** Geothermal decline is driven by pressure drawdown and modulated by reinjection; a fitted Arps $b$ is a description, not a mechanism. For dry steam the decline variable may be steam mass-rate or wellhead pressure, not a liquid rate. Confirm what is fitted and how it is read.
  2. **Recovery factor for dry steam.** $R_f$ dominates the reserves estimate and is field-specific for a vapour-dominated reservoir — set the Darajat value/range.
  3. **Reinjection coupling.** Reinjection support (Axelsson) flattens decline and adds mass; thermal breakthrough can steepen enthalpy decline. The decline forecast and the reinjection scheme are coupled.
  4. **Deliverability link.** Acuña decomposes a dry-steam well's deliverability into wellbore and reservoir parts; decline-curve analysis sits on top of that decomposition.
The Arps + stored-heat + Monte-Carlo machinery above is the verified, fluid-neutral backbone.⟧`,
        id: `**Decline curve Arps.** Decline rate–time empiris itu keluarga
$$q(t) \\;=\\; \\frac{q_i}{\\left(1 + b\\,D_i\\,t\\right)^{1/b}},$$
dengan $q_i$ rate awal, $D_i$ decline rate awal, dan $b$ **decline exponent**:
- **$b = 0$ — eksponensial**: $q = q_i e^{-D t}$; produksi kumulatif $N_p = (q_i - q)/D$. Decline fraksional konstan; paling konservatif, garis lurus di plot log-rate-vs-waktu.
- **$0 < b < 1$ — hiperbolik**: decline rate fraksional sendiri berkurang sama waktu; mayoritas sumur nyata.
- **$b = 1$ — harmonik**: $q = q_i/(1 + D_i t)$; decline paling lambat.

**Estimated Ultimate Recovery (EUR)** itu integral $q(t)$ dari awal sampai **economic limit rate** $q_{\\text{lim}}$ (rate di bawah mana biaya operasi ngelebihin pendapatan); waktu buat nyampe $q_{\\text{lim}}$ itu umur field/sumur. Nge-fit production history milih $q_i$, $D_i$, $b$.

**Cadangan "stored-heat" volumetrik.** Heat in place itu
$$Q_{\\text{HIP}} \\;=\\; (\\rho c)_{\\text{res}}\\;V\\;\\bigl(T_{\\text{res}} - T_{\\text{ref}}\\bigr),\\qquad V = A\\,h,$$
dengan $(\\rho c)_{\\text{res}}$ heat capacity volumetrik batuan+fluida, $A$ area, $h$ ketebalan, $T_{\\text{ref}}$ temperatur cutoff. **Kapasitas listrik** yang bisa di-recover itu
$$P \\;\\approx\\; \\frac{Q_{\\text{HIP}}\\;R_f\\;\\eta_{\\text{conv}}}{L\\;f},$$
dengan $R_f$ **recovery factor**, $\\eta_{\\text{conv}}$ efisiensi konversi, $L$ umur plant, $f$ capacity factor. ⟦TODO-Az: konstantanya, definisi $R_f$ persis, dan efisiensi dry-steam itu punya kamu — aku ngejaganya skematis.⟧

**Monte-Carlo dan klasifikasi cadangan.** Perlakukan $A, h, T_{\\text{res}}, R_f$ (dan lainnya) sebagai distribusi probabilitas; sampel mereka banyak kali; output-nya distribusi $P$. Baca **P90, P50, P10** (probabilitas exceedance). Dalam gaya SPE/PRMS kategori yang dibukukan itu **kumulatif**: Sanyal & Sarmiento ngebukukan **proved = P90**, **proved + probable = P50**, **proved + probable + possible = P10** — jadi probable dan possible itu *increment* yang ditambah di atas proved, bukan tranche berdiri-sendiri. Singkatan sehari-hari "proven/probable/possible = P90/P50/P10" ngebarisin persentilnya dengan benar tapi ngompres struktur kumulatif ini; hasilnya pernyataan kapasitas yang ber-grade-kepercayaan. ⟦TODO-Az: konfirmasi konvensi klasifikasi cadangan yang sebenarnya dipakai di Star Energy.⟧

⟦TODO-Az: formalisasi geothermal/dry-steam butuh koreksi kamu.
  1. **Apakah Arps transfer?** Decline geothermal didorong oleh pressure drawdown dan dimodulasi oleh reinjeksi; $b$ Arps yang di-fit itu deskripsi, bukan mekanisme. Buat dry steam variabel decline-nya mungkin steam mass-rate atau wellhead pressure, bukan liquid rate. Konfirmasi apa yang di-fit dan gimana dibaca.
  2. **Recovery factor buat dry steam.** $R_f$ mendominasi estimasi cadangan dan spesifik-field buat reservoir vapour-dominated — set nilai/rentang Darajat.
  3. **Coupling reinjeksi.** Reinjection support (Axelsson) ngeratain decline dan nambah massa; thermal breakthrough bisa ngecuramin enthalpy decline. Forecast decline dan skema reinjeksi itu ter-couple.
  4. **Link deliverability.** Acuña ngedekomposisi deliverability sumur dry-steam jadi bagian wellbore dan reservoir; decline-curve analysis duduk di atas dekomposisi itu.
Mesin Arps + stored-heat + Monte-Carlo di atas itu backbone terverifikasi, netral-fluida.⟧`
      }
    },

    // ─────────────── 4. worked-example ───────────────
    {
      id: 'worked-example',
      heading: { en: 'Worked example', id: 'Contoh kerjaan' },
      body: {
        en: `**A reserves estimate and a decline forecast, side by side (illustrative numbers).** ⟦TODO-Az: every number is a placeholder to show the *procedure* — the Darajat area, temperature, recovery factor, and decline history are yours; do not teach these figures as Darajat values.⟧

**Part A — volumetric reserves.** You have early exploration data: a probable reservoir area, a thickness, a temperature, and a literature range for the recovery factor.
1. **Heat in place.** $Q_{\\text{HIP}} = (\\rho c)_{\\text{res}}\\,A\\,h\\,(T_{\\text{res}}-T_{\\text{ref}})$ — multiply the volume, the heat capacity, and the usable temperature span.
2. **Recoverable capacity.** Multiply by the recovery factor $R_f$ and conversion efficiency, divide by plant life — get megawatts.
3. **Make it a distribution.** Because $A, h, T_{\\text{res}}, R_f$ are uncertain, draw each from its range and repeat thousands of times (Monte-Carlo). Read **P90 / P50 / P10**: e.g. "P90 = X MW (proven), P50 = Y MW (probable), P10 = Z MW (possible)." The plant is typically sized near the conservative end so it is not starved.

**Part B — decline forecast.** Years later the field has a production history.
1. **Plot** rate vs time (log-rate is convenient).
2. **Fit Arps.** Choose $b$: a straight log-rate line ⇒ exponential ($b=0$); a curve that flattens ⇒ hyperbolic ($0<b<1$). Read $q_i$, $D_i$.
3. **Extrapolate to the economic limit** $q_{\\text{lim}}$: the time to reach it is the remaining field life; the area between now and then is the remaining reserve.
4. **Cross-check** against the volumetric estimate — if the decline-implied recovery is wildly different from the volumetric P50, something (the recovery factor, the area, or the decline fit) needs revisiting.

**The read.** Volumetrics size the plant before there is production; decline analysis governs once production data exist, and the two should converge as the field matures. ⟦TODO-Az: the Darajat version diverges — for dry steam the decline is in steam-rate / WHP and is reinjection-supported, and the recovery factor is the dominant, field-specific uncertainty. A real worked example should use Darajat exploration and production data; I have kept this fluid-neutral and flagged it.⟧`,
        id: `**Estimasi cadangan dan forecast decline, berdampingan (angka ilustratif).** ⟦TODO-Az: tiap angka placeholder buat nunjukin *prosedur*-nya — area, temperatur, recovery factor, dan decline history Darajat itu punya kamu; jangan ngajarin angka-angka ini sebagai nilai Darajat.⟧

**Bagian A — cadangan volumetrik.** Kamu punya data eksplorasi awal: area reservoir yang probable, ketebalan, temperatur, dan rentang literatur buat recovery factor.
1. **Heat in place.** $Q_{\\text{HIP}} = (\\rho c)_{\\text{res}}\\,A\\,h\\,(T_{\\text{res}}-T_{\\text{ref}})$ — kali volumenya, heat capacity-nya, dan rentang temperatur yang bisa dipakai.
2. **Kapasitas yang bisa di-recover.** Kali recovery factor $R_f$ dan efisiensi konversi, bagi sama umur plant — dapet megawatt.
3. **Bikin jadi distribusi.** Karena $A, h, T_{\\text{res}}, R_f$ gak pasti, tarik masing-masing dari rentangnya dan ulangi ribuan kali (Monte-Carlo). Baca **P90 / P50 / P10**: misal "P90 = X MW (proven), P50 = Y MW (probable), P10 = Z MW (possible)." Plant biasanya diukur dekat ujung konservatif jadi dia gak kelaparan.

**Bagian B — forecast decline.** Bertahun kemudian field punya production history.
1. **Plot** rate vs waktu (log-rate praktis).
2. **Fit Arps.** Pilih $b$: garis log-rate lurus ⇒ eksponensial ($b=0$); kurva yang ngerata ⇒ hiperbolik ($0<b<1$). Baca $q_i$, $D_i$.
3. **Ekstrapolasi ke economic limit** $q_{\\text{lim}}$: waktu buat nyampenya itu umur field tersisa; area antara sekarang dan saat itu itu cadangan tersisa.
4. **Cross-check** lawan estimasi volumetrik — kalau recovery yang diimplikasikan decline beda jauh dari P50 volumetrik, sesuatu (recovery factor, area, atau fit decline) perlu ditinjau ulang.

**Bacaannya.** Volumetrik ngukur plant sebelum ada produksi; analisis decline ngatur begitu data produksi ada, dan keduanya harusnya konvergen seiring field matang. ⟦TODO-Az: versi Darajat menyimpang — buat dry steam decline-nya di steam-rate / WHP dan disokong-reinjeksi, dan recovery factor itu ketidakpastian dominan, spesifik-field. Worked example nyata harusnya pakai data eksplorasi dan produksi Darajat; aku ngejaga ini netral-fluida dan nge-flag-nya.⟧`
      }
    },

    // ─────────────── 5. applications ───────────────
    {
      id: 'applications',
      heading: { en: 'Applications', id: 'Aplikasi' },
      body: {
        en: `**What reserves + decline decide.** Together they set the project: the **plant size** (the conservative reserve, P90, sets what you dare build), the **drilling program** (how many wells the capacity needs), the **financing** (banks lend against booked reserves), and the **field life** (decline says when output drops below the economic limit). They are the bridge from subsurface physics to a balance sheet.

**Over field life.** Early on, with no production, the **volumetric/Monte-Carlo** estimate is all you have, and the recovery factor uncertainty makes the range wide. As wells produce, **decline analysis** progressively takes over — the actual production tells you more than the early geology — and the reserve estimate is repeatedly updated and (ideally) narrows. Make-up drilling, re-entries, and reinjection are all decisions read off the decline trend.

**The reinjection coupling.** ⟦TODO-Az: decline and reinjection are not separable — reinjection support (Axelsson) flattens the decline curve and extends life, while a thermal breakthrough steepens the enthalpy decline. For Darajat the reserves/decline picture and the reinjection scheme are one coupled management problem; please set how they interact in your field.⟧

**The dry-steam payoff.** ⟦TODO-Az: in a vapour-dominated field the reserves estimate hinges on the dry-steam recovery factor and the decline is read in steam-rate / wellhead pressure, with Acuña's wellbore-vs-reservoir decomposition underneath. These are the points a Darajat reservoir/production engineer would foreground; please set the emphasis.⟧

**The honest limits.** A volumetric estimate is only as good as its recovery factor — the least-known and most influential input. A decline fit is an *extrapolation* of past behaviour; a change in operating strategy (more reinjection, new wells, different drawdown) breaks the trend it was fitted to. Both are forecasting tools to be revised as data arrive, and both sit alongside — not instead of — the field-scale numerical simulation (O'Sullivan-Pruess-Lippmann) that models the physics directly.`,
        id: `**Apa yang cadangan + decline putusin.** Bareng-bareng mereka nyetel proyek: **ukuran plant** (cadangan konservatif, P90, nyetel apa yang berani kamu bangun), **program pengeboran** (berapa sumur yang kapasitasnya butuh), **pembiayaan** (bank minjemin lawan cadangan yang dibukukan), dan **umur field** (decline bilang kapan output jatuh di bawah batas ekonomis). Mereka jembatan dari fisika bawah-permukaan ke neraca.

**Sepanjang umur field.** Di awal, tanpa produksi, estimasi **volumetrik/Monte-Carlo** itu semua yang kamu punya, dan ketidakpastian recovery factor bikin rentangnya lebar. Seiring sumur produksi, **analisis decline** progresif ngambil alih — produksi sebenarnya ngasih tau kamu lebih dari geologi awal — dan estimasi cadangan berulang diupdate dan (idealnya) nyempit. Make-up drilling, re-entry, dan reinjeksi semua keputusan yang dibaca dari tren decline.

**Coupling reinjeksi.** ⟦TODO-Az: decline dan reinjeksi gak bisa dipisah — reinjection support (Axelsson) ngeratain decline curve dan manjangin umur, sementara thermal breakthrough ngecuramin enthalpy decline. Buat Darajat gambaran cadangan/decline dan skema reinjeksi itu satu masalah manajemen ter-couple; tolong set gimana mereka berinteraksi di field kamu.⟧

**Payoff dry-steam.** ⟦TODO-Az: di field vapour-dominated estimasi cadangan bergantung pada recovery factor dry-steam dan decline-nya dibaca di steam-rate / wellhead pressure, dengan dekomposisi wellbore-vs-reservoir Acuña di bawahnya. Ini poin yang reservoir/production engineer Darajat bakal majuin; tolong set penekanannya.⟧

**Batas yang jujur.** Estimasi volumetrik cuma sebagus recovery factor-nya — input yang paling-gak-diketahui dan paling berpengaruh. Fit decline itu *ekstrapolasi* perilaku masa lalu; perubahan strategi operasi (reinjeksi lebih banyak, sumur baru, drawdown berbeda) ngerusak tren yang dia di-fit ke situ. Keduanya tool forecasting yang harus direvisi seiring data tiba, dan keduanya duduk berdampingan — bukan menggantikan — simulasi numerik skala-field (O'Sullivan-Pruess-Lippmann) yang ngemodelin fisikanya langsung.`
      }
    },

    // ─────────────── 6. practice ───────────────
    {
      id: 'practice',
      heading: { en: 'Practice', id: 'Latihan' },
      body: {
        en: `⟦TODO-Az: these items exercise the verified decline/reserves backbone; answers stay fluid-neutral and flag where the dry-steam specifics enter. Replace with Darajat items when you finalize.⟧

**1.** Why is a geothermal reserve reported as P90 / P50 / P10 rather than a single number, and what do the three correspond to?

<details><summary>Answer</summary>
Because the inputs to the volumetric (stored-heat) estimate — area, thickness, temperature, and especially the recovery factor — are genuinely uncertain at the time of estimation, so a single number would imply false precision. Instead each input is treated as a probability distribution and the calculation is run many times (Monte-Carlo), producing a distribution of capacity. P90 / P50 / P10 are the values exceeded with 90% / 50% / 10% probability: the conservative P90 you can confidently promise, the median P50 you expect, the optimistic P10 upside. Sanyal & Sarmiento book these as PROVEN / PROBABLE / POSSIBLE reserves — a confidence-graded, financeable statement. ⟦TODO-Az: the dry-steam recovery factor is the dominant uncertainty and is field-specific for Darajat.⟧
</details>

**2.** What does the decline exponent b distinguish, and which value is the most conservative forecast?

<details><summary>Answer</summary>
b sets the SHAPE of the Arps rate–time decline. b = 0 is EXPONENTIAL decline (constant fractional decline rate; a straight line on a log-rate plot) — the most conservative (fastest-emptying) forecast. 0 < b < 1 is HYPERBOLIC (the fractional decline rate itself eases over time; most real wells), and b = 1 is HARMONIC (the gentlest, slowest decline). Choosing a larger b forecasts more remaining reserves and a longer life, so an honest forecast does not over-fit b to optimistic early data. ⟦TODO-Az: whether a clean Arps b applies to a reinjection-supported dry-steam field, fitted in steam-rate/WHP, is your call.⟧
</details>

**3.** Early in a field's life you rely on volumetrics; later on you rely on decline analysis. Why the switch, and what should happen as the field matures?

<details><summary>Answer</summary>
Early on there is no production history, so the only way to estimate reserves is the volumetric stored-heat method — but its recovery-factor uncertainty makes the range wide. Once wells have produced for years, the actual decline trend carries direct information about how much is recoverable and how fast it is being depleted, so decline analysis becomes the more trustworthy forecast. As the field matures the two should CONVERGE: if the decline-implied recovery and the volumetric P50 disagree badly, an assumption (recovery factor, reservoir area, or the decline fit) needs revisiting. They are complementary tools at different stages. ⟦TODO-Az: confirm how Darajat reconciles volumetric and decline estimates.⟧
</details>

**4.** Why can a decline-curve forecast be broken by a change in field operations, and what does that imply for using it?

<details><summary>Answer</summary>
Because a decline curve is an EXTRAPOLATION of past behaviour under the conditions that produced it. It assumes the future looks like the fitted past. Change the operating strategy — start or increase reinjection (which adds mass and pressure support, flattening the curve), drill make-up wells, alter drawdown — and the underlying behaviour changes, so the old fit no longer applies. The implication: a decline forecast must be re-fitted whenever operations change, and it should be cross-checked against the physics-based numerical simulation rather than trusted as a fixed law. ⟦TODO-Az: reinjection support (Axelsson) is exactly such an operational lever at Darajat — link the decline forecast to the reinjection scheme.⟧
</details>`,
        id: `⟦TODO-Az: item ini ngelatih backbone decline/cadangan terverifikasi; jawaban tetap netral-fluida dan nge-flag di mana spesifik dry-steam masuk. Ganti dengan item Darajat pas kamu finalisasi.⟧

**1.** Kenapa cadangan geothermal dilaporin sebagai P90 / P50 / P10 bukan satu angka, dan ketiganya berkorespondensi ke apa?

<details><summary>Jawaban</summary>
Karena input ke estimasi volumetrik (stored-heat) — area, ketebalan, temperatur, dan terutama recovery factor — beneran gak pasti pada saat estimasi, jadi satu angka bakal ngimplikasiin presisi palsu. Sebagai gantinya tiap input diperlakukan sebagai distribusi probabilitas dan perhitungannya dijalankan banyak kali (Monte-Carlo), ngehasilin distribusi kapasitas. P90 / P50 / P10 itu nilai yang dilampaui dengan probabilitas 90% / 50% / 10%: P90 konservatif yang bisa kamu janjiin dengan yakin, P50 median yang kamu harapin, P10 upside optimis. Sanyal & Sarmiento ngebukukan ini sebagai cadangan PROVEN / PROBABLE / POSSIBLE — pernyataan ber-grade-kepercayaan, bisa-dibiayai. ⟦TODO-Az: recovery factor dry-steam itu ketidakpastian dominan dan spesifik-field buat Darajat.⟧
</details>

**2.** Apa yang decline exponent b bedain, dan nilai mana yang forecast paling konservatif?

<details><summary>Jawaban</summary>
b nyetel BENTUK decline rate–time Arps. b = 0 itu decline EKSPONENSIAL (decline rate fraksional konstan; garis lurus di plot log-rate) — forecast paling konservatif (paling-cepat-kosong). 0 < b < 1 itu HIPERBOLIK (decline rate fraksional sendiri mereda over time; mayoritas sumur nyata), dan b = 1 itu HARMONIK (paling lembut, decline paling lambat). Milih b lebih besar ngeforecast cadangan tersisa lebih banyak dan umur lebih panjang, jadi forecast jujur gak over-fit b ke data awal yang optimis. ⟦TODO-Az: apakah b Arps bersih berlaku buat field dry-steam yang disokong-reinjeksi, di-fit di steam-rate/WHP, itu keputusan kamu.⟧
</details>

**3.** Di awal umur field kamu nyandar ke volumetrik; nanti kamu nyandar ke analisis decline. Kenapa beralih, dan apa yang harusnya terjadi seiring field matang?

<details><summary>Jawaban</summary>
Di awal gak ada production history, jadi satu-satunya cara ngestimasi cadangan itu metode stored-heat volumetrik — tapi ketidakpastian recovery-factor-nya bikin rentangnya lebar. Begitu sumur udah produksi bertahun, tren decline sebenarnya bawa informasi langsung soal berapa banyak yang bisa di-recover dan seberapa cepat dia di-deplesi, jadi analisis decline jadi forecast yang lebih bisa dipercaya. Seiring field matang keduanya harusnya KONVERGEN: kalau recovery yang diimplikasikan decline dan P50 volumetrik gak sepakat parah, sebuah asumsi (recovery factor, area reservoir, atau fit decline) perlu ditinjau ulang. Mereka tool komplementer di tahap berbeda. ⟦TODO-Az: konfirmasi gimana Darajat ngerekonsiliasi estimasi volumetrik dan decline.⟧
</details>

**4.** Kenapa forecast decline-curve bisa dirusak oleh perubahan operasi field, dan apa implikasinya buat make-nya?

<details><summary>Jawaban</summary>
Karena decline curve itu EKSTRAPOLASI perilaku masa lalu di bawah kondisi yang ngehasilinnya. Dia ngasumsiin masa depan keliatan kayak masa lalu yang di-fit. Ubah strategi operasi — mulai atau nambah reinjeksi (yang nambah massa dan pressure support, ngeratain kurva), bor sumur make-up, ngubah drawdown — dan perilaku yang mendasari berubah, jadi fit lama gak berlaku lagi. Implikasinya: forecast decline harus di-fit ulang kapan pun operasi berubah, dan dia harus di-cross-check lawan simulasi numerik berbasis-fisika bukan dipercaya sebagai hukum tetap. ⟦TODO-Az: reinjection support (Axelsson) itu persis lever operasional kayak gitu di Darajat — link forecast decline ke skema reinjeksi.⟧
</details>`
      }
    },

    // ─────────────── 7. connections ───────────────
    {
      id: 'connections',
      heading: { en: 'Connections', id: 'Koneksi' },
      body: {
        en: `- **Reservoir engineering home**: [Grant & Bixley 2011](item:grant-bixley-2011) covers decline curves and lumped-parameter models; this module focuses the decline + reserves story and adds the probabilistic/booking layer.
- **Dry-steam deliverability**: ⟦TODO-Az⟧ [Acuña 2008](item:acuna-2008) decomposes a dry-steam well's deliverability into wellbore and reservoir parts — decline-curve analysis of the well's output sits on top of that decomposition.
- **Reinjection coupling**: ⟦TODO-Az⟧ [Axelsson 2010](item:axelsson-2010) — reinjection support flattens decline and extends life; thermal breakthrough steepens enthalpy decline. Reserves/decline and reinjection are one coupled problem.
- **Well-scale data**: ⟦TODO-Az⟧ [Horne 1995](item:horne-1995) — PTA supplies kh/skin per well; reserves/decline aggregate the field. Local property → field forecast.
- **Field-scale model**: [O'Sullivan-Pruess-Lippmann 2001](item:osullivan-pruess-lippmann-2001) (TOUGH2) is the physics-based forecast that decline/volumetric estimates cross-check against.
- **Resource frontier**: ⟦TODO-Az⟧ [Tester et al. 2006](item:tester-mit-2006) applies the same stored-heat + recovery-factor logic to the EGS resource base.`,
        id: `- **Rumah reservoir engineering**: [Grant & Bixley 2011](item:grant-bixley-2011) ngebahas decline curve dan model lumped-parameter; module ini ngefokusin cerita decline + cadangan dan nambah layer probabilistik/booking.
- **Deliverability dry-steam**: ⟦TODO-Az⟧ [Acuña 2008](item:acuna-2008) ngedekomposisi deliverability sumur dry-steam jadi bagian wellbore dan reservoir — decline-curve analysis output sumur duduk di atas dekomposisi itu.
- **Coupling reinjeksi**: ⟦TODO-Az⟧ [Axelsson 2010](item:axelsson-2010) — reinjection support ngeratain decline dan manjangin umur; thermal breakthrough ngecuramin enthalpy decline. Cadangan/decline dan reinjeksi itu satu masalah ter-couple.
- **Data skala-sumur**: ⟦TODO-Az⟧ [Horne 1995](item:horne-1995) — PTA nyuplai kh/skin per sumur; cadangan/decline ngagregat field. Properti lokal → forecast field.
- **Model skala-field**: [O'Sullivan-Pruess-Lippmann 2001](item:osullivan-pruess-lippmann-2001) (TOUGH2) itu forecast berbasis-fisika yang estimasi decline/volumetrik di-cross-check ke situ.
- **Frontier resource**: ⟦TODO-Az⟧ [Tester et al. 2006](item:tester-mit-2006) nerapin logika stored-heat + recovery-factor yang sama ke basis resource EGS.`
      }
    },

    // ─────────────── 8. sources ───────────────
    {
      id: 'sources',
      heading: { en: 'Sources', id: 'Sumber' },
      body: {
        en: `⟦TODO-Az: verify editions, exact citations, and which sources you want canonical for the geothermal framing, before finalizing.⟧
- **Sanyal, S. K., and Sarmiento, Z.** (2005). "Booking Geothermal Energy Reserves." *Geothermal Resources Council Transactions* 29. **(Anchor.)** Proven/probable/possible classification.
- **Sanyal, S. K.** (2005). "Sustainability and Renewability of Geothermal Power Capacity." *Proc. World Geothermal Congress.*
- **Arps, J. J.** (1945). "Analysis of Decline Curves." *Trans. AIME* 160, 228–247. The exponential/hyperbolic/harmonic family.
- **Muffler, P., and Cataldi, R.** (1978). "Methods for Regional Assessment of Geothermal Resources." *Geothermics* 7, 53–89. The volumetric stored-heat method.
- **Grant, M. A., and Bixley, P. F.** (2011). *Geothermal Reservoir Engineering*, 2nd ed. Elsevier. Decline + lumped-parameter (in this catalog). ⟦TODO-Az⟧`,
        id: `⟦TODO-Az: verifikasi edisi, citation persis, dan sumber mana yang kamu mau kanonik buat framing geothermal, sebelum finalisasi.⟧
- **Sanyal, S. K., dan Sarmiento, Z.** (2005). "Booking Geothermal Energy Reserves." *Geothermal Resources Council Transactions* 29. **(Anchor.)** Klasifikasi proven/probable/possible.
- **Sanyal, S. K.** (2005). "Sustainability and Renewability of Geothermal Power Capacity." *Proc. World Geothermal Congress.*
- **Arps, J. J.** (1945). "Analysis of Decline Curves." *Trans. AIME* 160, 228–247. Keluarga eksponensial/hiperbolik/harmonik.
- **Muffler, P., dan Cataldi, R.** (1978). "Methods for Regional Assessment of Geothermal Resources." *Geothermics* 7, 53–89. Metode stored-heat volumetrik.
- **Grant, M. A., dan Bixley, P. F.** (2011). *Geothermal Reservoir Engineering*, ed. ke-2. Elsevier. Decline + lumped-parameter (di katalog ini). ⟦TODO-Az⟧`
      }
    },
  ],

  audio: { enabled: true },

  selfTest: [
    {
      sectionId: 'motivation',
      question: {
        en: 'A geothermal project needs two subsurface numbers before it is financed. What are they, and which method estimates each?',
        id: 'Proyek geothermal butuh dua angka bawah-permukaan sebelum dibiayai. Apa aja, dan metode mana yang ngestimasi masing-masing?'
      },
      prompt: { en: 'Before continuing, try answering:', id: 'Sebelum lanjut, coba jawab:' },
      answer: {
        en: 'RESERVES — how much recoverable energy is in the ground — estimated by the VOLUMETRIC "stored-heat" method: heat in place = rock+fluid heat capacity × volume (area×thickness) × (reservoir − reference temperature), times a recovery factor and conversion efficiency to get a megawatt capacity, reported probabilistically (Monte-Carlo → P90/P50/P10 = proven/probable/possible). And DECLINE — how fast the wells fade — estimated by Arps DECLINE-CURVE analysis (exponential/hyperbolic/harmonic, set by the exponent b), fitted to production history and extrapolated to an economic limit for remaining reserves and field life. Reserves size the plant before production; decline governs once data exist. ⟦TODO-Az: dry-steam recovery factor and whether Arps transfers are your calls.⟧',
        id: 'CADANGAN — berapa banyak energi yang bisa di-recover di dalam tanah — diestimasi dengan metode VOLUMETRIK "stored-heat": heat in place = heat capacity batuan+fluida × volume (area×ketebalan) × (temperatur reservoir − referensi), kali recovery factor dan efisiensi konversi buat dapet kapasitas megawatt, dilaporin secara probabilistik (Monte-Carlo → P90/P50/P10 = proven/probable/possible). Dan DECLINE — seberapa cepat sumur memudar — diestimasi dengan analisis DECLINE-CURVE Arps (eksponensial/hiperbolik/harmonik, diset oleh exponent b), di-fit ke production history dan diekstrapolasi ke batas ekonomis buat cadangan tersisa dan umur field. Cadangan ngukur plant sebelum produksi; decline ngatur begitu data ada. ⟦TODO-Az: recovery factor dry-steam dan apakah Arps transfer itu keputusan kamu.⟧'
      }
    },
    {
      sectionId: 'formalization',
      question: {
        en: 'In the volumetric reserves estimate, which single input dominates the uncertainty, and why does that push you to a probabilistic (Monte-Carlo) answer?',
        id: 'Di estimasi cadangan volumetrik, input tunggal mana yang mendominasi ketidakpastian, dan kenapa itu ngedorong kamu ke jawaban probabilistik (Monte-Carlo)?'
      },
      prompt: { en: 'Before continuing, try answering:', id: 'Sebelum lanjut, coba jawab:' },
      answer: {
        en: 'The RECOVERY FACTOR — the fraction of the heat in place that can actually be extracted as useful energy. It is small, poorly known early on, and depends on reservoir sweep, permeability structure, and the power cycle; for a dry-steam field it is field-specific. Because this dominant input (alongside area, thickness, and temperature) is genuinely uncertain, a single deterministic estimate would be false precision. Treating each input as a distribution and running Monte-Carlo propagates the uncertainty honestly into a distribution of capacity, from which P90/P50/P10 (proven/probable/possible) are read — telling you not just the expected capacity but how confident you can be. ⟦TODO-Az: set the Darajat dry-steam recovery-factor range.⟧',
        id: 'RECOVERY FACTOR — fraksi heat in place yang beneran bisa diekstrak sebagai energi berguna. Dia kecil, kurang diketahui di awal, dan bergantung pada sweep reservoir, struktur permeabilitas, dan power cycle; buat field dry-steam dia spesifik-field. Karena input dominan ini (di samping area, ketebalan, dan temperatur) beneran gak pasti, satu estimasi deterministik bakal presisi palsu. Ngeperlakukan tiap input sebagai distribusi dan njalanin Monte-Carlo ngepropagasi ketidakpastian dengan jujur jadi distribusi kapasitas, dari mana P90/P50/P10 (proven/probable/possible) dibaca — ngasih tau kamu bukan cuma kapasitas yang diharapkan tapi seberapa yakin kamu bisa. ⟦TODO-Az: set rentang recovery-factor dry-steam Darajat.⟧'
      }
    },
    {
      sectionId: 'applications',
      question: {
        en: 'Why must a decline-curve forecast be treated as provisional rather than a fixed law, especially in a reinjection-managed field?',
        id: 'Kenapa forecast decline-curve harus diperlakukan sebagai sementara bukan hukum tetap, terutama di field yang dikelola-reinjeksi?'
      },
      prompt: { en: 'Before continuing, try answering:', id: 'Sebelum lanjut, coba jawab:' },
      answer: {
        en: 'Because a decline curve is an empirical EXTRAPOLATION of past production under the operating conditions that produced it — it assumes the future resembles the fitted past. Operations change that: starting or increasing REINJECTION adds mass and pressure support, flattening the decline and extending life; a thermal breakthrough steepens the enthalpy decline; make-up wells or altered drawdown shift the trend. In a reinjection-managed field the decline is actively coupled to a management lever, so any forecast is conditional on the reinjection scheme staying as assumed. The practice: re-fit the decline whenever operations change, and cross-check it against the physics-based numerical simulation rather than trusting a single fitted b forever. ⟦TODO-Az: link the Darajat decline forecast explicitly to its reinjection scheme (Axelsson).⟧',
        id: 'Karena decline curve itu EKSTRAPOLASI empiris produksi masa lalu di bawah kondisi operasi yang ngehasilinnya — dia ngasumsiin masa depan menyerupai masa lalu yang di-fit. Operasi ngubah itu: mulai atau nambah REINJEKSI nambah massa dan pressure support, ngeratain decline dan manjangin umur; thermal breakthrough ngecuramin enthalpy decline; sumur make-up atau drawdown yang diubah ngegeser tren. Di field yang dikelola-reinjeksi decline-nya aktif ter-couple ke lever manajemen, jadi forecast apa pun itu kondisional pada skema reinjeksi tetap kayak yang diasumsikan. Praktiknya: fit-ulang decline kapan pun operasi berubah, dan cross-check lawan simulasi numerik berbasis-fisika bukan mercayain satu b yang di-fit selamanya. ⟦TODO-Az: link forecast decline Darajat eksplisit ke skema reinjeksinya (Axelsson).⟧'
      }
    },
  ],
};
