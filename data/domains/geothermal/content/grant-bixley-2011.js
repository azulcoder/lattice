// ─────────────────────────────────────────────────────────────────────────
// ⚠ DRAFT — AWAITING AZ DOMAIN REVIEW (option (b): "I draft, you correct").
// Geothermal content is Az-authored (6 yrs Darajat dry-steam operations).
// Schema-valid + renderable, NOT finalized. Domain claims flagged **⟦TODO-Az: …⟧**.
// Full prep: notes/grant-bixley-2011-research-prep-2026-06-01.md
//
// OPEN TODO-Az ITEMS (prep §9):
//   A. HEADLINE: Grant-Bixley is liquid-/two-phase-centric (Wairakei). The
//      two-phase output machinery (James lip-pressure, separator calorimetry) and
//      liquid drawdown are NOT the dry-steam workflow → point to Acuña. Frame as
//      the module's teaching point, not a hidden error.
//   B. Decline-rate symbol: a = b/S_M dimensionally (1/time); the book's Ch 13.2.1
//      text may use a different symbol convention — verify before teaching.
//   C. James lip-pressure constant (184 kg/s vs 663 t/h form) is unit-dependent.
//   D. Dry-steam inflow is compressible/pressure-squared + often non-Darcy
//      (turbulent skin), vs the book's pressure-linear liquid PI; C_WB √2 (AZ5).
//   E. Steam-cap / dry-out decline, condensate reinjection, calcite-vs-silica,
//      NCG — all dry-steam specifics absent from this liquid-field book.
//   F. AZ5 producing-well count 49-vs-39.
//   G. Seed cards deferred until Az signs off.
// ─────────────────────────────────────────────────────────────────────────

export const CONTENT = {
  itemId: 'grant-bixley-2011',
  estimatedReadMinutes: 36,

  author: {
    fullName: { en: `Malcolm A. Grant & Paul F. Bixley`, id: `Malcolm A. Grant & Paul F. Bixley` },
    affiliation: {
      en: `New Zealand geothermal practice — Grant: MAGAK (independent consultant, Auckland); Bixley: Contact Energy / Wairakei`,
      id: `Praktik geothermal Selandia Baru — Grant: MAGAK (konsultan independen, Auckland); Bixley: Contact Energy / Wairakei`
    },
    tagline: {
      en: `Four decades of New Zealand reservoir practice — above all Wairakei — distilled into one of the standard references on how a geothermal field behaves and how to manage it.`,
      id: `Empat dekade praktik reservoir Selandia Baru — terutama Wairakei — disuling jadi salah satu referensi standar tentang gimana field geothermal berperilaku dan gimana mengelolanya.`
    },
    bio: {
      en: `This textbook pairs a mathematician-modeller with a hands-on field engineer, and the combination is the book's character. Malcolm A. Grant took a PhD in applied mathematics at MIT and joined New Zealand's DSIR for geothermal work in the early 1970s, later serving as DSIR Geothermal Coordinator and then in New Zealand science management (the Meteorological Service, then chief executive of NIWA) before becoming an independent geothermal consultant in 1994, trading as MAGAK; he has been involved in the assessment or development of on the order of 76 fields across 14 countries. Paul F. Bixley is a practitioner reservoir engineer (BSc Hons, Victoria University of Wellington) who spent more than forty years on New Zealand's Wairakei field — through the Ministry of Works era and its corporatized successor Contact Energy — specializing in well testing, field-performance monitoring and data interpretation, with overseas consultancy across Asia, the Pacific Rim and Africa. The first edition (1982) had a third author, Ian G. Donaldson; the 2011 second edition is Grant & Bixley, expanded by roughly 100 pages (EGS, well stimulation, modern simulation data preparation).`,
      id: `Textbook ini masangin seorang mathematician-modeller sama seorang field engineer praktis, dan kombinasi itu karakter buku-nya. Malcolm A. Grant ngambil PhD applied mathematics di MIT dan gabung DSIR Selandia Baru buat kerja geothermal awal 1970-an, kemudian jadi DSIR Geothermal Coordinator lalu di manajemen sains Selandia Baru (Meteorological Service, lalu chief executive NIWA) sebelum jadi konsultan geothermal independen tahun 1994, trading sebagai MAGAK; dia terlibat dalam asesmen atau pengembangan kira-kira 76 field across 14 negara. Paul F. Bixley adalah reservoir engineer praktisi (BSc Hons, Victoria University of Wellington) yang menghabiskan lebih dari empat puluh tahun di field Wairakei Selandia Baru — lewat era Ministry of Works dan penerus terkorporasinya Contact Energy — spesialis di well testing, monitoring field-performance dan interpretasi data, dengan konsultansi luar negeri across Asia, Pacific Rim dan Afrika. Edisi pertama (1982) punya penulis ketiga, Ian G. Donaldson; edisi kedua 2011 adalah Grant & Bixley, diperluas kira-kira 100 halaman (EGS, well stimulation, persiapan data simulasi modern).`
    },
    focus: {
      en: `How a geothermal reservoir behaves under exploitation and how to manage it: system concepts (boiling-point-for-depth, two-phase zones, storage), well testing (completion/injection tests, pressure-transient analysis, output/discharge testing), lumped-parameter and decline modelling, conceptual and numerical modelling, and long-term field management (reinjection, tracer testing, subsidence, sustainability). The treatment is empirical and field-driven — it teaches by case study and cautionary lesson, grounded in New Zealand's liquid-dominated fields.`,
      id: `Gimana reservoir geothermal berperilaku di bawah eksploitasi dan gimana mengelolanya: konsep sistem (boiling-point-for-depth, two-phase zone, storage), well testing (completion/injection test, pressure-transient analysis, output/discharge testing), lumped-parameter dan decline modelling, conceptual dan numerical modelling, dan field management jangka panjang (reinjection, tracer testing, subsidence, sustainability). Treatment-nya empiris dan field-driven — dia ngajar lewat case study dan cautionary lesson, grounded di field liquid-dominated Selandia Baru.`
    },
    intellectualLineage: {
      en: `The New Zealand geothermal-engineering tradition centered on Wairakei (electricity since 1958, the first large liquid-dominated field developed) and the DSIR / Ministry of Works / Contact Energy lineage. Grant brings the applied-mathematics and numerical-modelling strand (MIT, DSIR modelling of Wairakei); Bixley the four-decade hands-on well-testing-and-monitoring strand. The book sits alongside the Stanford and LBNL traditions but is distinctively the *practitioner's* reference — written from operating real fields, not from theory first.`,
      id: `Tradisi geothermal-engineering Selandia Baru yang berpusat di Wairakei (listrik sejak 1958, field liquid-dominated besar pertama yang dikembangkan) dan lineage DSIR / Ministry of Works / Contact Energy. Grant bawa untai applied-mathematics dan numerical-modelling (MIT, modelling DSIR buat Wairakei); Bixley untai well-testing-dan-monitoring praktis empat-dekade. Buku ini duduk di samping tradisi Stanford dan LBNL tapi khas jadi referensi *praktisi* — ditulis dari mengoperasikan field nyata, bukan dari teori dulu.`
    },
    keyCollaborators: {
      en: `**Ian G. Donaldson** — third author of the 1982 first edition (dropped for the 2011 second edition). The broader **New Zealand geothermal group** at DSIR, the Ministry of Works and Development, and Contact Energy at Wairakei and Ohaaki. The book's worldwide case studies (The Geysers, Salak/Awibengkok, Svartsengi, Balçova-Narlıdere, Palinpinon, Mak-Ban) reflect the international consulting network both authors worked within.`,
      id: `**Ian G. Donaldson** — penulis ketiga edisi pertama 1982 (di-drop buat edisi kedua 2011). **Grup geothermal Selandia Baru** yang lebih luas di DSIR, Ministry of Works and Development, dan Contact Energy di Wairakei dan Ohaaki. Case study worldwide buku (The Geysers, Salak/Awibengkok, Svartsengi, Balçova-Narlıdere, Palinpinon, Mak-Ban) mencerminkan jaringan konsultansi internasional yang kedua penulis kerjain.`
    },
    legacy: {
      en: `Grant & Bixley is widely regarded as the standard reservoir-engineering reference for geothermal — the practitioner's backbone between the broad survey textbooks and the specialized literature on simulation, deliverability and geochemistry. Its lumped-parameter and decline methods, its treatment of well testing and the boiling-point-for-depth curve, and its case-study-driven field-management chapters are taught in most geothermal reservoir-engineering courses. Because it distills *liquid-dominated* New Zealand practice, it is also the natural reference against which dry-steam and other special cases are contrasted — the book gives you the general machinery, and the specialized items (such as dry-steam deliverability) show where that machinery must be adapted.`,
      id: `Grant & Bixley luas dianggap sebagai referensi reservoir-engineering standar buat geothermal — tulang punggung praktisi antara textbook survey luas dan literatur spesialis tentang simulation, deliverability dan geokimia. Metode lumped-parameter dan decline-nya, treatment-nya tentang well testing dan kurva boiling-point-for-depth, dan bab field-management case-study-driven-nya diajarin di sebagian besar course reservoir engineering geothermal. Karena dia nyuling praktik Selandia Baru *liquid-dominated*, dia juga jadi referensi natural yang dry-steam dan special case lain dikontraskan terhadapnya — buku ngasih kamu mesin umum, dan item spesialis (seperti dry-steam deliverability) nunjukin di mana mesin itu harus diadaptasi.`
    },
    keyWorks: [
      { year: 2011, title: `Geothermal Reservoir Engineering, 2nd ed. (this item)`, venue: `Academic Press / Elsevier (DOI 10.1016/C2010-0-64792-4)` },
      { year: 1982, title: `Geothermal Reservoir Engineering, 1st ed. (Grant, Donaldson & Bixley)`, venue: `Academic Press, New York` },
      { year: 1983, title: `Casing performance and reservoir cooling, Wairakei (Bixley)`, venue: `New Zealand geothermal field studies` },
      { year: 1989, title: `Lumped-parameter / LUMPFIT reservoir-response modelling (Axelsson; the formalism the book teaches)`, venue: `UNU Geothermal Training Programme lineage` },
    ],
  },

  sections: [
    // ─────────────── 1. motivation ───────────────
    {
      id: 'motivation',
      heading: { en: 'Why this matters', id: 'Kenapa ini penting' },
      body: {
        en: `Between the broad survey of geothermal energy and the specialized literature on numerical simulation or fluid geochemistry sits a practitioner's question: this field is producing — how will it behave over thirty years, and what should we do about it? Grant & Bixley is the reference that answers it. It is reservoir engineering in the petroleum sense, adapted to the peculiarities of hot water and steam in fractured volcanic rock: measure the wells, build a model that reproduces the field's history, and use it to forecast decline and guide management decisions (more wells, reinjection, how hard to run the field).

The book's authority is that it is written from operating real fields, above all New Zealand's **Wairakei** — the first large liquid-dominated field developed for power (since 1958), whose multi-decade history of pressure decline, in-situ boiling, a growing steam zone, subsidence and eventual reinjection is the worked example behind much of the text. That grounding is also the book's one essential caveat for this catalog's owner: Wairakei and Bixley's forty years are **liquid-dominated** practice. The general machinery — lumped models, decline analysis, well testing, conceptual modelling — transfers to any field; but the specific two-phase output-testing methods and the liquid-drawdown picture of decline do *not* describe a dry-steam field the same way.

That tension is the point of reading this module rather than a flaw to hide. Grant & Bixley gives you the conceptual backbone every geothermal reservoir engineer needs; the dry-steam specializations live in the companion items (above all the deliverability framework for dry-steam wells). The skill is knowing which parts of the backbone apply unchanged to a vapour-dominated field and which must be swapped. **⟦TODO-Az: this whole liquid-vs-dry-steam framing is the module's spine and needs your sign-off — decide how prominently to foreground it and confirm each contrast below against Darajat. Prep §9.1.⟧**`,
        id: `Antara survey luas energi geothermal dan literatur spesialis tentang numerical simulation atau geokimia fluid ada pertanyaan praktisi: field ini lagi produksi — gimana dia bakal berperilaku selama tiga puluh tahun, dan apa yang harus kita lakuin? Grant & Bixley itu referensi yang menjawabnya. Ini reservoir engineering dalam arti petroleum, diadaptasi ke kekhasan hot water dan steam di fractured volcanic rock: ukur sumur, bangun model yang mereproduksi history field, dan pake dia buat forecast decline dan nge-guide keputusan manajemen (lebih banyak sumur, reinjection, seberapa keras menjalankan field).

Otoritas buku itu bahwa dia ditulis dari mengoperasikan field nyata, terutama **Wairakei** Selandia Baru — field liquid-dominated besar pertama yang dikembangkan buat power (sejak 1958), yang history multi-dekade-nya tentang pressure decline, in-situ boiling, steam zone yang tumbuh, subsidence dan akhirnya reinjection itu worked example di balik banyak teks. Grounding itu juga satu caveat esensial buku buat owner katalog ini: Wairakei dan empat puluh tahun Bixley itu praktik **liquid-dominated**. Mesin umum — lumped model, decline analysis, well testing, conceptual modelling — transfer ke field manapun; tapi metode output-testing two-phase spesifik dan gambaran liquid-drawdown tentang decline *gak* ngedeskripsiin field dry-steam dengan cara yang sama.

Tension itu poin baca module ini bukan cacat yang disembunyiin. Grant & Bixley ngasih kamu tulang punggung konseptual yang tiap reservoir engineer geothermal butuh; spesialisasi dry-steam hidup di item companion (terutama framework deliverability buat dry-steam well). Skill-nya itu tahu bagian mana dari tulang punggung yang berlaku tanpa berubah ke field vapour-dominated dan mana yang harus ditukar. **⟦TODO-Az: seluruh framing liquid-vs-dry-steam ini tulang punggung module dan butuh sign-off kamu — putuskan seberapa prominent nge-foreground dia dan konfirmasi tiap kontras di bawah lawan Darajat. Prep §9.1.⟧**`
      }
    },

    // ─────────────── 2. intuition ───────────────
    {
      id: 'intuition',
      heading: { en: 'Intuition', id: 'Intuisi' },
      body: {
        en: `Three ideas carry most of the book.

**The boiling-point-for-depth (BPD) curve.** In a column of pure water at boiling conditions, pressure increases with depth as the weight of the column, and temperature follows the saturation curve for that pressure. That defines the maximum temperature attainable at any depth in a boiling hydrostatic system. Its power is diagnostic: plot a well's measured temperature-and-pressure profile against the BPD curve, and the *deviations* tell you what is happening — a profile on the BPD curve means a boiling upflow; cooler than BPD means conductive cap or downflow or lateral outflow; the shape localizes feed zones and two-phase zones.

**Storage, and why two-phase changes everything.** The mass storage coefficient is how much mass the reservoir gives up per unit of pressure drop. For single-phase liquid it is tiny — water is nearly incompressible — so pressure falls fast as you produce. But once the reservoir starts to boil, a small pressure drop flashes a large mass of water to steam, so the two-phase storage coefficient is enormous. That is why a liquid field's pressure decline *slows* once boiling begins: the growing two-phase zone buffers it. This single fact — huge two-phase storativity versus tiny single-phase storativity — shapes how every liquid-dominated field declines.

**Models as RC networks.** The tractable workhorse is the lumped-parameter model: treat the reservoir as a few well-mixed tanks (capacitors = storage) connected by permeable links (resistors), driven by production and recharge — exactly an electrical RC network. Fit two or three tanks to the pressure-and-production history and you get closed-form drawdown forecasts. The standard trick is to run a **closed** model (the reservoir is isolated → pessimistic, maximum drawdown) and an **open** model (the deepest tank is tied to an infinite constant-pressure source → optimistic, minimum drawdown); the two **bracket** the real long-term behaviour. It needs only data you already collect — pressure monitoring and production rates.

For a dry-steam field, the BPD curve and the liquid storage picture both shift. **⟦TODO-Az: in a vapour-dominated field steam is the pressure-controlling phase with immobile water held in the rock; the deep profile is near-isothermal/vapour-static rather than tracking the liquid BPD curve, storativity and decline behave differently (the field can dry out centrally rather than simply drawing down), and "rising enthalpy" decline symptoms differ. Review and adapt this section for Darajat. Prep §9.4.⟧**`,
        id: `Tiga ide bawa sebagian besar buku.

**Kurva boiling-point-for-depth (BPD).** Di kolom air murni pada kondisi mendidih, pressure naik dengan kedalaman sebagai berat kolom, dan suhu ngikutin kurva saturasi buat pressure itu. Itu ngedefinisiin suhu maksimum yang bisa dicapai di kedalaman apapun di sistem boiling hidrostatik. Power-nya diagnostik: plot profil temperature-dan-pressure terukur sebuah sumur lawan kurva BPD, dan *deviasi*-nya ngasih tau apa yang terjadi — profil di kurva BPD berarti boiling upflow; lebih dingin dari BPD berarti conductive cap atau downflow atau lateral outflow; bentuknya nge-lokasi feed zone dan two-phase zone.

**Storage, dan kenapa two-phase ngubah semuanya.** Mass storage coefficient itu seberapa banyak massa yang reservoir lepas per unit pressure drop. Buat single-phase liquid dia kecil — air hampir incompressible — jadi pressure jatuh cepat pas kamu produksi. Tapi begitu reservoir mulai mendidih, pressure drop kecil nge-flash massa air besar jadi steam, jadi two-phase storage coefficient itu enormous. Itu kenapa pressure decline field liquid *melambat* begitu boiling mulai: two-phase zone yang tumbuh nge-buffer dia. Fakta tunggal ini — two-phase storativity besar versus single-phase storativity kecil — ngebentuk gimana tiap field liquid-dominated decline.

**Model sebagai RC network.** Workhorse yang tractable itu lumped-parameter model: perlakukan reservoir sebagai beberapa tank well-mixed (capacitor = storage) yang terhubung sama link permeabel (resistor), di-drive sama produksi dan recharge — persis electrical RC network. Fit dua atau tiga tank ke history pressure-dan-produksi dan kamu dapet forecast drawdown closed-form. Trik standar-nya jalanin model **closed** (reservoir terisolasi → pesimistik, drawdown maksimum) dan model **open** (tank terdalam terikat ke infinite constant-pressure source → optimistik, drawdown minimum); keduanya **bracket** perilaku jangka-panjang nyata. Dia cuma butuh data yang kamu udah kumpulin — pressure monitoring dan production rate.

Buat field dry-steam, kurva BPD dan gambaran liquid storage dua-duanya geser. **⟦TODO-Az: di field vapour-dominated steam itu fase yang ngontrol pressure dengan immobile water ditahan di rock; profil dalam itu near-isothermal/vapour-static daripada ngikutin kurva BPD liquid, storativity dan decline berperilaku beda (field bisa dry out di tengah daripada cuma draw down), dan gejala decline "rising enthalpy" beda. Review dan adaptasi section ini buat Darajat. Prep §9.4.⟧**`
      }
    },

    // ─────────────── 3. formalization ───────────────
    {
      id: 'formalization',
      heading: { en: 'The core models', id: 'Model inti' },
      body: {
        en: `**Boiling-point-for-depth.** In a hydrostatic boiling pure-water column the pressure gradient is set by the local saturated-density and gravity while temperature is pinned to the saturation curve:

$$\\frac{dP}{dz} = \\rho\\big(T_{sat}(P)\\big)\\,g, \\qquad T = T_{sat}(P)$$

Integrating gives the BPD curve $T_{BPD}(z)$ — the diagnostic baseline a measured profile is read against.

**One-box lumped model + decline.** Treat the reservoir as a single well-mixed tank. Conservation of mass with storage coefficient $S_M$ (mass per unit pressure drop), production $W$, and recharge $W_r$:

$$S_M\\,\\frac{dP}{dt} + W - W_r = 0$$

Close the well with a deliverability rule $W = b\\,(P - P_{whp})$ (flow proportional to drawdown above operating wellhead pressure) and, in the simplest closed case (negligible recharge), the pressure — and hence the rate — decays exponentially:

$$W(t) = W_0\\,e^{-a t}, \\qquad a = \\frac{b}{S_M}$$

The decline constant $a$ has units of inverse time; the half-flow time is $\\ln 2 / a$. **⟦TODO-Az: a = b/S_M is the dimensionally-correct rate; verify the exact symbol convention in the book's §13.2.1 before teaching it. Prep §9.B.⟧** The cumulative mass recoverable is the area under the curve,

$$\\int_0^\\infty W\\,dt = \\frac{W_0}{a} = S_M\\,(P_i - P_{whp})$$

— fixed by the storage and the available drawdown, *not* by how many wells you drill. The **open** variant ties the tank to a constant-pressure source (recharge $W_r = \\sigma(P_{src}-P)$), which floors the decline; running the closed and open models brackets the forecast.

**Well testing.** Two cold-and-hot diagnostics anchor everything: the **injectivity index** $II = \\Delta(\\text{rate})/\\Delta P$ from stepped injection, and the **productivity index** $PI = W/(P_e - P_{wf})$ from discharge, which for radial Darcy flow is

$$PI = \\frac{2\\pi k h\\,\\rho}{\\mu\\,[\\ln(r_e/r_w) + s]}$$

with skin $s$ ($s>0$ damage, $s<0$ stimulation). Ideally $PI = II$; comparing them is a standard diagnostic. Pressure-transient analysis (Theis line-source, Horner) extracts transmissivity $kh/\\mu$, storativity and skin. **⟦TODO-Az: the radial-Darcy PI is the liquid form; dry-steam inflow is compressible (pressure-squared, gas-pipeline-like) and often non-Darcy (turbulent skin) — the Acuña C_WB/PI framework is the dry-steam replacement. Prep §9.3.⟧**`,
        id: `**Boiling-point-for-depth.** Di kolom air-murni mendidih hidrostatik gradient pressure di-set sama saturated-density lokal dan gravity sementara suhu di-pin ke kurva saturasi:

$$\\frac{dP}{dz} = \\rho\\big(T_{sat}(P)\\big)\\,g, \\qquad T = T_{sat}(P)$$

Integrasi ngasih kurva BPD $T_{BPD}(z)$ — baseline diagnostik yang profil terukur dibaca terhadapnya.

**One-box lumped model + decline.** Perlakukan reservoir sebagai satu tank well-mixed. Konservasi massa dengan storage coefficient $S_M$ (massa per unit pressure drop), produksi $W$, dan recharge $W_r$:

$$S_M\\,\\frac{dP}{dt} + W - W_r = 0$$

Tutup sumur dengan aturan deliverability $W = b\\,(P - P_{whp})$ (flow proporsional ke drawdown di atas operating wellhead pressure) dan, di kasus closed paling sederhana (recharge diabaikan), pressure — dan karena itu rate — meluruh eksponensial:

$$W(t) = W_0\\,e^{-a t}, \\qquad a = \\frac{b}{S_M}$$

Konstanta decline $a$ punya unit inverse time; waktu half-flow itu $\\ln 2 / a$. **⟦TODO-Az: a = b/S_M itu rate yang dimensionally-benar; verifikasi konvensi simbol persis di §13.2.1 buku sebelum ngajarinnya. Prep §9.B.⟧** Massa kumulatif yang recoverable itu area di bawah kurva,

$$\\int_0^\\infty W\\,dt = \\frac{W_0}{a} = S_M\\,(P_i - P_{whp})$$

— ditetapkan oleh storage dan drawdown yang tersedia, *bukan* oleh berapa banyak sumur yang kamu bor. Varian **open** ngiket tank ke constant-pressure source (recharge $W_r = \\sigma(P_{src}-P)$), yang nge-floor decline-nya; jalanin model closed dan open nge-bracket forecast.

**Well testing.** Dua diagnostik cold-and-hot nge-anchor semuanya: **injectivity index** $II = \\Delta(\\text{rate})/\\Delta P$ dari stepped injection, dan **productivity index** $PI = W/(P_e - P_{wf})$ dari discharge, yang buat radial Darcy flow itu

$$PI = \\frac{2\\pi k h\\,\\rho}{\\mu\\,[\\ln(r_e/r_w) + s]}$$

dengan skin $s$ ($s>0$ damage, $s<0$ stimulation). Idealnya $PI = II$; ngebandingin mereka diagnostik standar. Pressure-transient analysis (Theis line-source, Horner) nge-ekstrak transmissivity $kh/\\mu$, storativity dan skin. **⟦TODO-Az: radial-Darcy PI itu bentuk liquid; dry-steam inflow compressible (pressure-squared, gas-pipeline-like) dan sering non-Darcy (turbulent skin) — framework Acuña C_WB/PI itu pengganti dry-steam-nya. Prep §9.3.⟧**`
      }
    },

    // ─────────────── 4. worked-example ───────────────
    {
      id: 'worked-example',
      heading: { en: 'Worked example', id: 'Contoh kerjaan' },
      body: {
        en: `**Example 1 — exponential decline and the "more wells = faster, not more" lesson (dry-steam-safe).** Take the one-box closed model with negligible recharge. With an initial field rate $W_0 = 400$ kg/s and a decline constant $a = 0.04\\ \\text{yr}^{-1}$, the rate follows $W(t) = 400\\,e^{-0.04 t}$. The half-flow time is $\\ln 2 / a = 0.693/0.04 \\approx 17.3$ years, and the characteristic timescale is $1/a = 25$ years. The cumulative recoverable mass is the area under the curve, $W_0/a = 400/0.04 = 10{,}000$ kg/s·yr — equivalently $S_M\\,(P_i - P_{whp})$.

Now drill a second identical well's worth of deliverability: the total deliverability coefficient $b$ doubles, so $a = b/S_M$ doubles to $0.08\\ \\text{yr}^{-1}$. The field now starts at a higher rate but the half-flow time halves to ~8.7 years — and the cumulative $W_0/a$ is *unchanged*, because the recoverable mass is fixed by storage and the available drawdown, not by the well count. **More wells produce the resource faster, not more.** That single result reframes how you think about make-up drilling: it accelerates cash flow and depletion together, and the area under the decline curve is the real budget.

**Example 2 — why output testing differs for dry steam (the teaching contrast).** For a *liquid or two-phase* well, a single measurement is not enough: the discharge is a steam-water mixture, so you need both the mass flow *and* the enthalpy (the steam fraction). Grant & Bixley's standard field method is the **James lip-pressure** test — measure the critical (lip) pressure at the end of a horizontal discharge pipe and combine with a separator/weir to get mass flow and enthalpy:

$$\\dot m = \\frac{184\\,P_{lip}^{0.96}\\,A}{H_t^{1.102}}$$

(the $1.102$ enthalpy exponent is well attested; **⟦TODO-Az: the leading constant is unit-system-dependent — 184 for the kg/s form vs 663 for the t/h form; confirm against the exact units before teaching. Prep §9.C.⟧**).

A **dry-steam** well is different. It discharges single-phase saturated (or superheated) steam, whose enthalpy is essentially fixed by pressure — so there is no steam fraction to measure, and output testing collapses to a single-phase throttle / critical-flow / orifice curve. That is exactly the regime the dry-steam deliverability framework (the Acuña $C_{WB}/PI$ decomposition) is built for. **⟦TODO-Az: do NOT present James lip-pressure as the Darajat workflow — frame it as the liquid/two-phase method and point to the dry-steam deliverability item. Confirm the actual Darajat output-test procedure. Prep §9.1, §9.2.⟧**`,
        id: `**Contoh 1 — exponential decline dan pelajaran "lebih banyak sumur = lebih cepat, bukan lebih banyak" (dry-steam-safe).** Ambil model one-box closed dengan recharge diabaikan. Dengan rate field awal $W_0 = 400$ kg/s dan konstanta decline $a = 0.04\\ \\text{yr}^{-1}$, rate-nya ngikutin $W(t) = 400\\,e^{-0.04 t}$. Waktu half-flow itu $\\ln 2 / a = 0.693/0.04 \\approx 17.3$ tahun, dan timescale karakteristik $1/a = 25$ tahun. Massa kumulatif recoverable itu area di bawah kurva, $W_0/a = 400/0.04 = 10{,}000$ kg/s·yr — ekuivalen $S_M\\,(P_i - P_{whp})$.

Sekarang bor deliverability senilai sumur identik kedua: total deliverability coefficient $b$ dobel, jadi $a = b/S_M$ dobel ke $0.08\\ \\text{yr}^{-1}$. Field sekarang mulai di rate lebih tinggi tapi waktu half-flow setengah ke ~8.7 tahun — dan kumulatif $W_0/a$ *gak berubah*, karena massa recoverable ditetapkan oleh storage dan drawdown yang tersedia, bukan oleh well count. **Lebih banyak sumur memproduksi sumber daya lebih cepat, bukan lebih banyak.** Hasil tunggal itu nge-reframe gimana kamu mikir tentang make-up drilling: dia mempercepat cash flow dan depletion bareng, dan area di bawah kurva decline itu budget yang sebenarnya.

**Contoh 2 — kenapa output testing beda buat dry steam (kontras pengajaran).** Buat sumur *liquid atau two-phase*, satu pengukuran gak cukup: discharge-nya campuran steam-water, jadi kamu butuh baik mass flow *maupun* enthalpy (steam fraction). Metode field standar Grant & Bixley itu tes **James lip-pressure** — ukur critical (lip) pressure di ujung pipa discharge horizontal dan gabungin sama separator/weir buat dapet mass flow dan enthalpy:

$$\\dot m = \\frac{184\\,P_{lip}^{0.96}\\,A}{H_t^{1.102}}$$

(exponent enthalpy $1.102$ well-attested; **⟦TODO-Az: konstanta depan unit-system-dependent — 184 buat bentuk kg/s vs 663 buat bentuk t/h; konfirmasi lawan unit persis sebelum ngajar. Prep §9.C.⟧**).

Sumur **dry-steam** beda. Dia nge-discharge single-phase saturated (atau superheated) steam, yang enthalpy-nya pada dasarnya ditetapkan oleh pressure — jadi gak ada steam fraction buat diukur, dan output testing kolaps jadi kurva single-phase throttle / critical-flow / orifice. Itu persis regime yang framework deliverability dry-steam (dekomposisi Acuña $C_{WB}/PI$) dibangun. **⟦TODO-Az: JANGAN sajiin James lip-pressure sebagai workflow Darajat — frame dia sebagai metode liquid/two-phase dan tunjuk ke item deliverability dry-steam. Konfirmasi prosedur output-test Darajat yang sebenarnya. Prep §9.1, §9.2.⟧**`
      }
    },

    // ─────────────── 5. applications ───────────────
    {
      id: 'applications',
      heading: { en: 'Applications by audience', id: 'Aplikasi per audience' },
      body: {
        en: `### For the advanced researcher

The book's forward edge (expanded in the 2nd edition) points to EGS / well stimulation and to better data preparation for numerical simulation — which is where the lumped/analytical methods hand off to full distributed models. The open research themes it frames are reinjection management (thermal breakthrough vs pressure support), subsidence prediction from poroelastic compaction, and tracer-test interpretation for connectivity — each a place where the book's empirical method invites a more rigorous model.

### For the reservoir engineer

This is the operational core and the reason the book exists: measure wells (completion, injection, pressure-transient, and output tests), build a lumped or conceptual model that matches the field's pressure-and-production history, bracket the long-term drawdown with the open/closed pair, and update as monitoring data arrive. Decline analysis sets make-up-well and run-rate decisions; reinjection, tracer testing and subsidence monitoring are the management levers. For a dry-steam field, take the backbone but swap the dry-steam-specific pieces: output testing (single-phase, not lip-pressure), the inflow regime (compressible/non-Darcy), and the decline picture (steam-cap growth and central dry-out rather than simple liquid drawdown). **⟦TODO-Az: supply the real Darajat numbers and procedures — static reservoir-pressure range, observed decline rate, output-test method, reinjection (condensate, deep placement), and the open AZ5 producing-well count (the catalog elsewhere says 49; public sources suggest ~39). Prep §9.2-9.8.⟧**

### For field management

The book is, in effect, a manual for running a field sustainably: balance extraction against recharge, use the open/closed bracket to size the resource conservatively, place reinjection to support pressure and dispose of waste without cooling the producers, and monitor pressure/enthalpy/chemistry/subsidence to catch problems early. The cross-cutting message is that the model and the monitoring are one loop — the model forecasts, the monitoring tests the forecast, and the divergence is the signal to re-manage. For Darajat the levers differ in detail (condensate reinjection rather than brine; calcite-front rather than deep-silica scaling; non-condensable-gas handling), but the management loop is the same. **⟦TODO-Az: confirm the Darajat reinjection fraction/placement, what actually scales and where (calcite vs silica), and whether NCG belongs in the deliverability discussion. Prep §9.5-9.7.⟧**`,
        id: `### Untuk advanced researcher

Tepi depan buku (diperluas di edisi kedua) nunjuk ke EGS / well stimulation dan ke persiapan data yang lebih baik buat numerical simulation — di mana metode lumped/analitik nyerahin ke full distributed model. Tema riset terbuka yang dia frame itu manajemen reinjection (thermal breakthrough vs pressure support), prediksi subsidence dari poroelastic compaction, dan interpretasi tracer-test buat connectivity — masing-masing tempat di mana metode empiris buku ngundang model yang lebih rigor.

### Untuk reservoir engineer

Ini core operasional dan alasan buku ini ada: ukur sumur (completion, injection, pressure-transient, dan output test), bangun lumped atau conceptual model yang match history pressure-dan-produksi field, bracket drawdown jangka-panjang dengan pasangan open/closed, dan update pas monitoring data datang. Decline analysis nge-set keputusan make-up-well dan run-rate; reinjection, tracer testing dan subsidence monitoring itu tuas manajemen. Buat field dry-steam, ambil tulang punggung-nya tapi tukar bagian dry-steam-spesifik: output testing (single-phase, bukan lip-pressure), regime inflow (compressible/non-Darcy), dan gambaran decline (pertumbuhan steam-cap dan central dry-out daripada simple liquid drawdown). **⟦TODO-Az: sediain angka dan prosedur Darajat nyata — rentang static reservoir-pressure, decline rate teramati, metode output-test, reinjection (condensate, penempatan dalam), dan producing-well count AZ5 yang terbuka (katalog di tempat lain bilang 49; sumber publik suggest ~39). Prep §9.2-9.8.⟧**

### Untuk field management

Buku ini, efektifnya, manual buat menjalankan field secara sustainable: seimbangkan ekstraksi lawan recharge, pake bracket open/closed buat nge-size sumber daya konservatif, taruh reinjection buat dukung pressure dan buang waste tanpa nge-cooling producer, dan monitor pressure/enthalpy/chemistry/subsidence buat nangkep masalah awal. Pesan lintas-bidang-nya bahwa model dan monitoring itu satu loop — model forecast, monitoring nguji forecast, dan divergensi itu sinyal buat re-manage. Buat Darajat tuas-nya beda dalam detail (condensate reinjection daripada brine; calcite-front daripada deep-silica scaling; penanganan non-condensable-gas), tapi management loop-nya sama. **⟦TODO-Az: konfirmasi fraksi/penempatan reinjection Darajat, apa yang sebenarnya scaling dan di mana (calcite vs silica), dan apakah NCG masuk diskusi deliverability. Prep §9.5-9.7.⟧**`
      }
    },

    // ─────────────── 6. practice ───────────────
    {
      id: 'practice',
      heading: { en: 'Practice', id: 'Latihan' },
      body: {
        en: `**1.** A one-box closed field declines as $W = W_0 e^{-at}$ with $W_0 = 300$ kg/s and $a = 0.05\\ \\text{yr}^{-1}$. Find the half-flow time and the cumulative recoverable mass (in kg/s·yr), and state what physically sets that cumulative.

<details><summary>Answer</summary>
Half-flow time $= \\ln 2 / a = 0.693/0.05 \\approx 13.9$ years. Cumulative $= W_0/a = 300/0.05 = 6{,}000$ kg/s·yr. Physically the cumulative equals $S_M(P_i - P_{whp})$ — the mass storage coefficient times the available pressure drawdown. It is fixed by how much mass the reservoir holds per unit pressure and how far you can draw the pressure down, NOT by the production rate or the number of wells.
</details>

**2.** Two identical fields differ only in storage: field X is single-phase liquid (small $S_M$), field Y has begun boiling and developed a large two-phase zone (large $S_M$). Both produce at the same initial rate. Compare their pressure-decline behaviour and explain the mechanism.

<details><summary>Answer</summary>
Field X declines fast: with small $S_M$, the decline constant $a = b/S_M$ is large, so pressure and rate fall quickly. Field Y declines slowly: its large two-phase $S_M$ makes $a$ small, buffering the decline. Mechanism: in the two-phase field a small pressure drop flashes a large mass of water to steam, releasing far more mass per unit $\\Delta P$ than the nearly-incompressible single-phase liquid can. This is why liquid-dominated fields characteristically *slow* their decline once in-situ boiling begins and a steam zone grows — the boiling itself supplies the storage. (For a vapour-dominated field this buffering is absent in the same form; see the dry-steam caveats.)
</details>

**3.** A well's measured temperature profile lies exactly on the boiling-point-for-depth curve down to 800 m, then bends to cooler-than-BPD below. Interpret both segments.

<details><summary>Answer</summary>
The upper segment on the BPD curve indicates a boiling, vertically-upflowing column — the well is in a boiling zone where temperature tracks the saturation curve for the hydrostatic pressure. The bend to cooler-than-BPD below 800 m indicates that the deeper section is NOT a boiling upflow: it is cooler than a boiling column would be, consistent with conductive conditions, a downflow, or cooler lateral inflow at depth (e.g. recharge entering from the side). The depth of the bend marks the base of the boiling/upflow zone and helps locate where feed is entering. The BPD curve works as a diagnostic precisely because departures from it carry physical meaning.
</details>

**4.** Why is the James lip-pressure test the standard output measurement for a liquid/two-phase well, but the wrong tool for a dry-steam well — and what replaces it?

<details><summary>Answer</summary>
A liquid/two-phase well discharges a steam-water mixture, so characterizing its output needs two numbers — the total mass flow and the enthalpy (equivalently the steam fraction). The James lip-pressure method (with a separator/weir) is the field-practical way to get both from a flowing discharge. A dry-steam well discharges single-phase saturated or superheated steam, whose enthalpy is essentially fixed by its pressure; there is no steam fraction to determine, so the two-number problem collapses to a single-phase deliverability measurement — a throttle / critical-flow / orifice curve of mass flow versus wellhead pressure. The dry-steam replacement is therefore a single-phase deliverability framework (the $C_{WB}$/$PI$ decomposition for dry-steam wells), not lip-pressure calorimetry. Using lip-pressure on a dry-steam well would be solving a problem the well does not have.
</details>`,
        id: `**1.** Sebuah field one-box closed decline sebagai $W = W_0 e^{-at}$ dengan $W_0 = 300$ kg/s dan $a = 0.05\\ \\text{yr}^{-1}$. Cari waktu half-flow dan massa kumulatif recoverable (dalam kg/s·yr), dan nyatain apa yang secara fisik nge-set kumulatif itu.

<details><summary>Jawaban</summary>
Waktu half-flow $= \\ln 2 / a = 0.693/0.05 \\approx 13.9$ tahun. Kumulatif $= W_0/a = 300/0.05 = 6{,}000$ kg/s·yr. Secara fisik kumulatif sama dengan $S_M(P_i - P_{whp})$ — mass storage coefficient dikali drawdown pressure yang tersedia. Dia ditetapkan oleh seberapa banyak massa yang reservoir tahan per unit pressure dan seberapa jauh kamu bisa narik pressure turun, BUKAN oleh production rate atau jumlah sumur.
</details>

**2.** Dua field identik beda cuma di storage: field X single-phase liquid (S_M kecil), field Y udah mulai mendidih dan ngembangin two-phase zone besar (S_M besar). Keduanya produksi di initial rate sama. Bandingin perilaku pressure-decline mereka dan jelasin mekanismenya.

<details><summary>Jawaban</summary>
Field X decline cepat: dengan $S_M$ kecil, konstanta decline $a = b/S_M$ besar, jadi pressure dan rate jatuh cepat. Field Y decline lambat: $S_M$ two-phase besar-nya bikin $a$ kecil, nge-buffer decline. Mekanisme: di field two-phase pressure drop kecil nge-flash massa air besar jadi steam, ngelepas massa jauh lebih banyak per unit $\\Delta P$ daripada yang single-phase liquid yang hampir-incompressible bisa. Ini kenapa field liquid-dominated khas *ngelambatin* decline mereka begitu in-situ boiling mulai dan steam zone tumbuh — boiling-nya sendiri nyediain storage. (Buat field vapour-dominated buffering ini absen dalam bentuk yang sama; lihat caveat dry-steam.)
</details>

**3.** Profil suhu terukur sebuah sumur terletak persis di kurva boiling-point-for-depth sampai 800 m, lalu nekuk ke lebih-dingin-dari-BPD di bawahnya. Interpretasi kedua segmen.

<details><summary>Jawaban</summary>
Segmen atas di kurva BPD ngindikasiin kolom boiling yang upflow vertikal — sumur ada di boiling zone di mana suhu ngikutin kurva saturasi buat pressure hidrostatik. Tekukan ke lebih-dingin-dari-BPD di bawah 800 m ngindikasiin bahwa section lebih dalam BUKAN boiling upflow: dia lebih dingin dari yang kolom boiling bakal, konsisten sama kondisi konduktif, downflow, atau cooler lateral inflow di kedalaman (misalnya recharge masuk dari samping). Kedalaman tekukan nandain dasar boiling/upflow zone dan bantu nge-lokasi di mana feed masuk. Kurva BPD jalan sebagai diagnostik persis karena penyimpangan darinya bawa physical meaning.
</details>

**4.** Kenapa tes James lip-pressure itu pengukuran output standar buat sumur liquid/two-phase, tapi tool yang salah buat sumur dry-steam — dan apa yang ngeganti dia?

<details><summary>Jawaban</summary>
Sumur liquid/two-phase nge-discharge campuran steam-water, jadi ngarakterisasi output-nya butuh dua angka — total mass flow dan enthalpy (ekuivalen steam fraction). Metode James lip-pressure (dengan separator/weir) itu cara field-practical buat dapet keduanya dari discharge yang ngalir. Sumur dry-steam nge-discharge single-phase saturated atau superheated steam, yang enthalpy-nya pada dasarnya ditetapkan oleh pressure-nya; gak ada steam fraction buat ditentuin, jadi masalah dua-angka kolaps jadi pengukuran deliverability single-phase — kurva throttle / critical-flow / orifice mass flow versus wellhead pressure. Pengganti dry-steam karena itu framework deliverability single-phase (dekomposisi $C_{WB}$/$PI$ buat dry-steam well), bukan kalorimetri lip-pressure. Pake lip-pressure di sumur dry-steam itu nyelesain masalah yang sumur-nya gak punya.
</details>`
      }
    },

    // ─────────────── 7. connections ───────────────
    {
      id: 'connections',
      heading: { en: 'Connections', id: 'Koneksi' },
      body: {
        en: `- **Prereq**: [Stober & Bucher 2021](item:stober-bucher-2021) — the survey textbook supplying the systems/heat-transport/hydrology/geochemistry foundations this reservoir-engineering reference assumes.
- **Specialized by (the key dry-steam cross-link)**: [Acuña 2008](item:acuna-2008) — the dry-steam deliverability framework ($C_{WB}$ wellbore + $PI$ reservoir) that replaces this book's liquid/two-phase output-testing and pressure-linear inflow for a vapour-dominated field. The key cross-reference for a Darajat reading: where Grant & Bixley is liquid-centric, Acuña is the dry-steam specialization.
- **Numerical-simulation companion**: [O'Sullivan-Pruess-Lippmann 2001](item:osullivan-pruess-lippmann-2001) — the distributed-parameter (TOUGH2) next step beyond this book's lumped/analytical models.
- **Upstream conceptual model**: [Cumming 2009](item:cumming-2009) — pre-drilling conceptual-model building feeds the reservoir model this book then engineers.
- **Property inputs**: [Bjornsson & Bodvarsson 1990](item:bjornsson-bodvarsson-1990) — empirical permeability/porosity/temperature ranges for sanity-checking the model assumptions here.
- **EGS frontier**: [Tester (MIT) 2006](item:tester-mit-2006) — the enhanced-geothermal direction the 2nd-edition additions point toward.`,
        id: `- **Prereq**: [Stober & Bucher 2021](item:stober-bucher-2021) — textbook survey yang nyediain fondasi sistem/heat-transport/hidrologi/geokimia yang referensi reservoir-engineering ini asumsikan.
- **Dispesialisasi oleh (cross-link dry-steam kunci)**: [Acuña 2008](item:acuna-2008) — framework deliverability dry-steam ($C_{WB}$ wellbore + $PI$ reservoir) yang ngeganti output-testing liquid/two-phase dan inflow pressure-linear buku ini buat field vapour-dominated. Cross-reference kunci buat baca Darajat: di mana Grant & Bixley liquid-centric, Acuña itu spesialisasi dry-steam.
- **Companion numerical-simulation**: [O'Sullivan-Pruess-Lippmann 2001](item:osullivan-pruess-lippmann-2001) — langkah distributed-parameter (TOUGH2) berikutnya di luar lumped/analitik model buku ini.
- **Conceptual model upstream**: [Cumming 2009](item:cumming-2009) — conceptual-model building pra-pengeboran nge-feed reservoir model yang buku ini kemudian engineer.
- **Property input**: [Bjornsson & Bodvarsson 1990](item:bjornsson-bodvarsson-1990) — range permeability/porosity/temperature empiris buat sanity-check asumsi model di sini.
- **Frontier EGS**: [Tester (MIT) 2006](item:tester-mit-2006) — arah enhanced-geothermal yang tambahan edisi-kedua nunjuk.`
      }
    },

    // ─────────────── 8. sources ───────────────
    {
      id: 'sources',
      heading: { en: 'Sources', id: 'Sumber' },
      body: {
        en: `- **Grant, M. A., and Bixley, P. F.** (2011). *Geothermal Reservoir Engineering*, 2nd ed. Academic Press / Elsevier. DOI 10.1016/C2010-0-64792-4. A standard reservoir-engineering reference. **(This item.)**
- **Grant, M. A., Donaldson, I. G., and Bixley, P. F.** (1982). *Geothermal Reservoir Engineering*, 1st ed. Academic Press, New York. The first-edition predecessor this updates (note the third author, Ian G. Donaldson, dropped for the 2nd ed.).
- **Acuña, J. A.** (2008). "A New Understanding of Deliverability of Dry Steam Wells." *Geothermal Resources Council Transactions*, 32, 431-434. The dry-steam deliverability specialization of this book's decline/PI methods.
- **O'Sullivan, M. J., Pruess, K., and Lippmann, M. J.** (2001). "State of the art of geothermal reservoir simulation." *Geothermics*, 30(4), 395-429. The numerical-simulation step beyond the book's lumped/analytical methods.
- **Bjornsson, G., and Bodvarsson, G. S.** (1990). "A Survey of Geothermal Reservoir Properties." *Geothermics*, 19(1), 17-27. Empirical property ranges for sanity-checking model assumptions.`,
        id: `- **Grant, M. A., dan Bixley, P. F.** (2011). *Geothermal Reservoir Engineering*, 2nd ed. Academic Press / Elsevier. DOI 10.1016/C2010-0-64792-4. Salah satu referensi reservoir-engineering standar. **(Item ini.)**
- **Grant, M. A., Donaldson, I. G., dan Bixley, P. F.** (1982). *Geothermal Reservoir Engineering*, 1st ed. Academic Press, New York. Predecessor edisi-pertama yang ini update (catat penulis ketiga, Ian G. Donaldson, di-drop buat edisi ke-2).
- **Acuña, J. A.** (2008). "A New Understanding of Deliverability of Dry Steam Wells." *Geothermal Resources Council Transactions*, 32, 431-434. Spesialisasi deliverability dry-steam dari metode decline/PI buku ini.
- **O'Sullivan, M. J., Pruess, K., dan Lippmann, M. J.** (2001). "State of the art of geothermal reservoir simulation." *Geothermics*, 30(4), 395-429. Langkah numerical-simulation di luar metode lumped/analitik buku.
- **Bjornsson, G., dan Bodvarsson, G. S.** (1990). "A Survey of Geothermal Reservoir Properties." *Geothermics*, 19(1), 17-27. Range property empiris buat sanity-check asumsi model.`
      }
    },
  ],

  audio: { enabled: true },

  selfTest: [
    {
      sectionId: 'intuition',
      question: {
        en: 'Why does the mass storage coefficient become so much larger once a liquid-dominated reservoir begins to boil, and how does that change the shape of its pressure-decline curve?',
        id: 'Kenapa mass storage coefficient jadi jauh lebih besar begitu reservoir liquid-dominated mulai mendidih, dan gimana itu ngubah bentuk kurva pressure-decline-nya?'
      },
      prompt: { en: 'Before continuing, try answering:', id: 'Sebelum lanjut, coba jawab:' },
      answer: {
        en: 'The storage coefficient is the mass released per unit pressure drop. Single-phase liquid water is nearly incompressible, so a pressure drop releases very little mass — storage is small. Once the reservoir boils, a small pressure drop flashes a large mass of liquid into steam (the latent-heat-driven phase change converts stored water into produced mass), so the two-phase storage coefficient is far larger. The effect on the decline curve: with the larger storage, the decline constant a = b/S_M becomes smaller, so the pressure (and the production rate) falls more slowly. Concretely, a liquid field declining steeply will *slow its decline* once in-situ boiling starts and a two-phase/steam zone grows — the boiling buffers the pressure. That self-buffering is a signature of liquid-dominated decline (and is exactly the behaviour that does not carry over unchanged to a vapour-dominated field).',
        id: 'Storage coefficient itu massa yang dilepas per unit pressure drop. Single-phase liquid water hampir incompressible, jadi pressure drop ngelepas massa sangat sedikit — storage kecil. Begitu reservoir mendidih, pressure drop kecil nge-flash massa liquid besar jadi steam (phase change yang di-drive latent-heat ngubah stored water jadi produced mass), jadi two-phase storage coefficient jauh lebih besar. Efek ke kurva decline: dengan storage lebih besar, konstanta decline a = b/S_M jadi lebih kecil, jadi pressure (dan production rate) jatuh lebih lambat. Konkretnya, field liquid yang decline tajam bakal *ngelambatin decline-nya* begitu in-situ boiling mulai dan two-phase/steam zone tumbuh — boiling-nya nge-buffer pressure. Self-buffering itu signature decline liquid-dominated (dan persis perilaku yang gak ke-carry over tanpa berubah ke field vapour-dominated).'
      }
    },
    {
      sectionId: 'formalization',
      question: {
        en: 'Derive why the one-box closed model (negligible recharge) gives exponential decline W = W_0 e^(−at), starting from the mass balance and the deliverability rule, and explain what the decline constant a = b/S_M represents and why its units are inverse time.',
        id: 'Turunkan kenapa model one-box closed (recharge diabaikan) ngasih exponential decline W = W_0 e^(−at), mulai dari mass balance dan aturan deliverability, dan jelasin apa yang konstanta decline a = b/S_M wakilin dan kenapa unit-nya inverse time.'
      },
      prompt: { en: 'Before continuing, try answering:', id: 'Sebelum lanjut, coba jawab:' },
      answer: {
        en: 'Start from the one-box mass balance with negligible recharge, S_M dP/dt + W = 0, and close the well with the deliverability rule W = b(P − P_whp). Writing p = P − P_whp (so dp/dt = dP/dt) gives S_M dp/dt = −W = −b·p, i.e. dp/dt = −(b/S_M)·p — a first-order linear ODE whose solution is p(t) = p_0 e^(−(b/S_M)t). Since W = b·p, the rate inherits the same exponential: W(t) = W_0 e^(−at) with a = b/S_M. Physically a is the ratio of how readily the reservoir gives up flow (the deliverability b — mass per unit time per unit pressure) to how much mass it stores per unit pressure (the storage S_M): a high-deliverability well draining a small store declines fast (large a), a gentle well on a large store declines slowly (small a). Dimensionally b is (kg/s)/Pa and S_M is kg/Pa, so a = b/S_M has units (kg/s/Pa)/(kg/Pa) = 1/s — an inverse time, exactly what an exponential-decay constant must be. (The characteristic timescale is 1/a; the half-flow time is ln2/a.)',
        id: 'Mulai dari one-box mass balance dengan recharge diabaikan, S_M dP/dt + W = 0, dan tutup sumur dengan aturan deliverability W = b(P − P_whp). Nulis p = P − P_whp (jadi dp/dt = dP/dt) ngasih S_M dp/dt = −W = −b·p, yaitu dp/dt = −(b/S_M)·p — ODE linear orde-pertama yang solusinya p(t) = p_0 e^(−(b/S_M)t). Karena W = b·p, rate-nya mewarisi exponential yang sama: W(t) = W_0 e^(−at) dengan a = b/S_M. Secara fisik a itu rasio seberapa gampang reservoir ngelepas flow (deliverability b — massa per unit waktu per unit pressure) ke seberapa banyak massa yang dia simpen per unit pressure (storage S_M): sumur high-deliverability yang nguras store kecil decline cepat (a besar), sumur lembut di store besar decline lambat (a kecil). Secara dimensional b itu (kg/s)/Pa dan S_M itu kg/Pa, jadi a = b/S_M punya unit (kg/s/Pa)/(kg/Pa) = 1/s — inverse time, persis yang konstanta exponential-decay harus. (Timescale karakteristik 1/a; waktu half-flow ln2/a.)'
      }
    },
    {
      sectionId: 'worked-example',
      question: {
        en: 'A one-box field declines as W = W_0 e^(−at) with W_0 = 400 kg/s and a = 0.04 yr⁻¹. Compute the half-flow time and the cumulative recoverable mass. Then a second identical well doubles the deliverability b — state what happens to the initial rate, the decline constant, the half-flow time, and the cumulative, and give the practical lesson for make-up drilling.',
        id: 'Sebuah field one-box decline sebagai W = W_0 e^(−at) dengan W_0 = 400 kg/s dan a = 0.04 yr⁻¹. Hitung waktu half-flow dan massa kumulatif recoverable. Lalu sumur identik kedua nge-dobel deliverability b — nyatain apa yang terjadi ke initial rate, konstanta decline, waktu half-flow, dan kumulatif, dan kasih pelajaran praktis buat make-up drilling.'
      },
      prompt: { en: 'Before continuing, try answering:', id: 'Sebelum lanjut, coba jawab:' },
      answer: {
        en: 'Half-flow time = ln2/a = 0.693/0.04 ≈ 17.3 years, and the characteristic timescale is 1/a = 25 years. Cumulative recoverable = W_0/a = 400/0.04 = 10,000 kg/s·yr (equivalently S_M(P_i − P_whp)). A second identical well doubles the deliverability b, so a = b/S_M doubles to 0.08 yr⁻¹: the half-flow time halves to ≈ 8.7 years, and the initial rate doubles (W_0 ∝ b, to ~800 kg/s). But the cumulative is unchanged — 800/0.08 = 10,000 kg/s·yr — because the recoverable mass is fixed by the storage and the available pressure drawdown, not by the well count. The practical lesson: make-up drilling produces the same total resource faster, not more. It raises the rate and shortens the field life together, accelerating cash flow and depletion in step; the area under the decline curve is the real budget, set by storage and drawdown.',
        id: 'Waktu half-flow = ln2/a = 0.693/0.04 ≈ 17.3 tahun, dan timescale karakteristik 1/a = 25 tahun. Kumulatif recoverable = W_0/a = 400/0.04 = 10,000 kg/s·yr (ekuivalen S_M(P_i − P_whp)). Sumur identik kedua nge-dobel deliverability b, jadi a = b/S_M dobel ke 0.08 yr⁻¹: waktu half-flow setengah ke ≈ 8.7 tahun, dan initial rate dobel (W_0 ∝ b, ke ~800 kg/s). Tapi kumulatif gak berubah — 800/0.08 = 10,000 kg/s·yr — karena massa recoverable ditetapkan oleh storage dan pressure drawdown yang tersedia, bukan oleh well count. Pelajaran praktis: make-up drilling memproduksi total sumber daya yang sama lebih cepat, bukan lebih banyak. Dia naikin rate dan mendekkin umur field bareng, mempercepat cash flow dan depletion seiring; area di bawah kurva decline itu budget yang sebenarnya, ditetapkan oleh storage dan drawdown.'
      }
    },
    {
      sectionId: 'applications',
      question: {
        en: 'Grant & Bixley distill liquid-dominated New Zealand practice. For a dry-steam field like Darajat, name three specific places where the book\'s standard methods must be swapped for dry-steam ones, and what replaces each.',
        id: 'Grant & Bixley nyuling praktik liquid-dominated Selandia Baru. Buat field dry-steam kayak Darajat, sebutkan tiga tempat spesifik di mana metode standar buku harus ditukar sama yang dry-steam, dan apa yang ngeganti masing-masing.'
      },
      prompt: { en: 'Before continuing, try answering:', id: 'Sebelum lanjut, coba jawab:' },
      answer: {
        en: '(1) Output/discharge testing: the book\'s two-phase James lip-pressure + separator calorimetry (needed because a liquid/two-phase discharge requires both mass flow and enthalpy) is replaced by a single-phase deliverability measurement — a throttle/critical-flow curve, the C_WB/PI dry-steam framework — because dry steam\'s enthalpy is fixed by pressure. (2) Inflow / well deliverability: the book\'s pressure-linear radial-Darcy PI is replaced by a compressible, pressure-squared (gas-pipeline-like) inflow relation that is often non-Darcy (turbulent skin), reflecting that the produced phase is compressible vapour rather than nearly-incompressible liquid. (3) The decline / storage picture: instead of liquid drawdown that self-buffers once in-situ boiling starts (large two-phase storativity, rising-enthalpy symptom), a vapour-dominated field has steam as the pressure-controlling phase with immobile water in the rock, so decline involves steam-cap behaviour and possible central dry-out rather than simple liquid drawdown. (Further swaps the owner would confirm: condensate-dominated reinjection rather than brine; calcite-front rather than deep-silica scaling; and non-condensable-gas handling.) The unifying point: the lumped/decline/conceptual-modelling backbone transfers, but the fluid-state-specific methods must be adapted to single-phase compressible steam. ⟦TODO-Az: the dry-steam divergences restated here (output testing, compressible/non-Darcy inflow, steam-cap/dry-out, condensate/calcite/NCG) are your open review items — confirm against Darajat before finalizing; see the body-section TODOs.⟧',
        id: '(1) Output/discharge testing: James lip-pressure + separator calorimetry two-phase buku (perlu karena discharge liquid/two-phase butuh baik mass flow maupun enthalpy) diganti sama pengukuran deliverability single-phase — kurva throttle/critical-flow, framework dry-steam C_WB/PI — karena enthalpy dry steam ditetapkan oleh pressure. (2) Inflow / well deliverability: PI radial-Darcy pressure-linear buku diganti sama relasi inflow compressible, pressure-squared (gas-pipeline-like) yang sering non-Darcy (turbulent skin), mencerminkan bahwa produced phase itu compressible vapour daripada liquid yang hampir-incompressible. (3) Gambaran decline / storage: daripada liquid drawdown yang self-buffer begitu in-situ boiling mulai (two-phase storativity besar, gejala rising-enthalpy), field vapour-dominated punya steam sebagai fase yang ngontrol pressure dengan immobile water di rock, jadi decline melibatkan perilaku steam-cap dan kemungkinan central dry-out daripada simple liquid drawdown. (Swap lanjutan yang owner bakal konfirmasi: reinjection condensate-dominated daripada brine; calcite-front daripada deep-silica scaling; dan penanganan non-condensable-gas.) Poin pemersatu: tulang punggung lumped/decline/conceptual-modelling transfer, tapi metode fluid-state-spesifik harus diadaptasi ke single-phase compressible steam. ⟦TODO-Az: divergensi dry-steam yang dinyatakan ulang di sini (output testing, inflow compressible/non-Darcy, steam-cap/dry-out, condensate/calcite/NCG) itu item review terbuka kamu — konfirmasi lawan Darajat sebelum finalisasi; lihat TODO section body.⟧'
      }
    },
  ],
};
