// ─────────────────────────────────────────────────────────────────────────
// ⚠ DRAFT — AWAITING AZ DOMAIN REVIEW (option (b): "I draft, you correct").
// Geothermal content is Az-authored (Reservoir & Production Engineer, 6 yrs
// Star Energy Geothermal Darajat — dry-steam). Schema-valid + renderable,
// NOT finalized. Domain claims flagged **⟦TODO-Az: …⟧**.
// Full prep: notes/whiting-ramey-lumped-balance-research-prep-2026-06-07.md
//
// This module carries an INTERACTIVE VISUALIZATION (LumpedReservoirSim,
// registered in js/viz.js, math verified by scripts/verify-lumped-sim.mjs).
// The simulator solves the VERIFIED, FLUID-NEUTRAL lumped mass balance
//   κ dp/dt = −W_p(1−f) + a(p0−p).
// The DRY-STEAM (Whiting-Ramey) steam material/energy balance — vaporisation
// of in-place water as pressure drops, heat mined from the rock — is the
// domain refinement and is ⟦TODO-Az⟧-flagged throughout.
//
// OPEN TODO-Az ITEMS:
//   A. HEADLINE: the dry-steam material/energy balance. The interactive tank
//      uses a simple LIQUID storativity κ and a linear recharge a(p0−p). A
//      vapour-dominated reservoir (Darajat) follows the Whiting-Ramey STEAM
//      balance: as p falls, in-place water boils in the pores and latent heat
//      is drawn from the rock, so "storativity" is really a steam/heat
//      relationship. Confirm the framing — the sim is an intuition tool, not
//      the dry-steam balance itself.
//   B. Real κ, a, recharge character (open vs closed) and reinjection coupling
//      for Darajat; the sim's units are illustrative (pressure in % of initial).
//   C. Worked-example numbers are ILLUSTRATIVE placeholders.
//   D. Whether to anchor on Whiting-Ramey (steam) vs a lumped-parameter paper
//      (Axelsson/Sarak) — drafting choice.
//   E. Seed cards DEFERRED until Az signs off (card-coverage exempt: geothermal
//      domain + DRAFT marker).
// ─────────────────────────────────────────────────────────────────────────

export const CONTENT = {
  itemId: 'whiting-ramey-1969',
  estimatedReadMinutes: 34,

  author: {
    fullName: { en: 'Robert L. Whiting & Henry J. Ramey Jr.', id: 'Robert L. Whiting & Henry J. Ramey Jr.' },
    affiliation: {
      en: 'Petroleum/reservoir engineers — Whiting at Texas A&M, Ramey later the defining figure of reservoir engineering at Stanford (and head of the petroleum/geothermal reservoir program that Roland Horne would inherit). Their 1969 paper first carried petroleum material- and energy-balance reservoir engineering into geothermal.',
      id: 'Petroleum/reservoir engineer — Whiting di Texas A&M, Ramey kemudian figur penentu reservoir engineering di Stanford (dan kepala program reservoir petroleum/geothermal yang Roland Horne bakal warisi). Paper 1969 mereka pertama kali ngebawa reservoir engineering material- dan energy-balance petroleum ke geothermal.'
    },
    tagline: {
      en: 'A single well test reads the rock near one well; a material balance reads the whole reservoir as one tank. Account for everything that comes out, everything that flows or is injected back in, and the average pressure tells you how the field will behave for decades — and whether it is sustainable.',
      id: 'Satu well test baca batuan deket satu sumur; material balance baca seluruh reservoir sebagai satu tangki. Hitung semua yang keluar, semua yang ngalir atau diinjeksi balik, dan tekanan rata-rata ngasih tau kamu gimana field bakal berperilaku berdekade — dan apakah dia berkelanjutan.'
    },
    bio: {
      en: `Henry J. Ramey Jr. is one of the towering figures of reservoir engineering; at Stanford he built the program that ties petroleum and geothermal reservoir analysis together — the same lineage from which Roland Horne (well-test analysis, already in this catalog) comes. With Robert Whiting he published, in 1969, the paper that first applied the petroleum engineer's **material and energy balance** to a geothermal field, demonstrating it on **Wairakei** (New Zealand). The move was conceptually decisive: treat the reservoir as a single control volume ("lumped"), write down conservation of mass and energy for the fluid (and, crucially for steam, the heat stored in the rock), and you can match a field's production-and-pressure history and forecast its future — without resolving the spatial detail.

⟦TODO-Az: bio/affiliation are from public record (incl. life status); confirm before finalizing. Anchoring a lumped-parameter / material-balance module on Whiting-Ramey is a deliberate choice — it is the geothermal *origin* of the method and is specifically a STEAM balance, which matters for Darajat. Tell me if you would rather anchor on a modern lumped-parameter modelling paper (Axelsson 1989; Sarak et al. 2003) or on Grant & Bixley's lumped-model chapters.⟧`,
      id: `Henry J. Ramey Jr. salah satu figur menjulang reservoir engineering; di Stanford dia ngebangun program yang ngiket analisis reservoir petroleum dan geothermal bareng — garis keturunan yang sama dari mana Roland Horne (well-test analysis, udah di katalog ini) datang. Sama Robert Whiting dia nerbitin, di 1969, paper yang pertama nerapin **material dan energy balance** petroleum engineer ke field geothermal, ngedemoin di **Wairakei** (Selandia Baru). Langkahnya konseptual menentukan: perlakukan reservoir sebagai satu control volume ("lumped"), tulis konservasi massa dan energi buat fluida (dan, krusial buat steam, panas yang tersimpan di batuan), dan kamu bisa nyocokin sejarah produksi-dan-tekanan field dan ngeforecast masa depannya — tanpa nyelesaiin detail spasial.

⟦TODO-Az: bio/afiliasi dari public record (termasuk status hidup); konfirmasi sebelum finalisasi. Nge-anchor module lumped-parameter / material-balance ke Whiting-Ramey itu pilihan disengaja — dia *asal* geothermal dari metode itu dan khusus balance STEAM, yang penting buat Darajat. Bilang kalau kamu lebih mau nge-anchor ke paper pemodelan lumped-parameter modern (Axelsson 1989; Sarak dkk. 2003) atau ke bab lumped-model Grant & Bixley.⟧`
    },
    focus: {
      en: `A well test (Horne) is a microscope on one well; a **material balance** is a wide-angle lens on the entire reservoir. The idea is conservation: treat the reservoir as one well-mixed tank, and over any period the change in what it holds equals what came in minus what went out. Track the **average reservoir pressure** as the single state variable, and three flows govern it — **production** (mass withdrawn), **reinjection** (mass returned), and **natural recharge** (inflow from the surrounding aquifer, which grows as the reservoir is drawn down). The simplest honest model is a **lumped-parameter** balance: a first-order differential equation whose solution says whether the field stabilises at a new steady pressure (recharge and reinjection eventually balance production — sustainable) or declines without bound (a closed reservoir being mined — unsustainable). Fit the model to history (history-matching) and it forecasts decades ahead. ⟦TODO-Az: the dry-steam point is the headline. Whiting & Ramey's balance is a STEAM material/energy balance: in a vapour-dominated field like Darajat, as pressure drops the water held in the pores BOILS, drawing latent heat from the rock, so the reservoir "gives up" mass and energy through vaporisation rather than simple liquid expansion. The interactive tank below uses a simple liquid storativity to build intuition; the real Darajat balance is the steam/heat version, and that framing is yours to confirm.⟧`,
      id: `Well test (Horne) itu mikroskop pada satu sumur; **material balance** itu lensa wide-angle pada seluruh reservoir. Idenya konservasi: perlakukan reservoir sebagai satu tangki yang tercampur-baik, dan over periode apa pun perubahan apa yang dia tahan sama dengan apa yang masuk minus apa yang keluar. Lacak **tekanan reservoir rata-rata** sebagai satu variabel state, dan tiga aliran ngaturnya — **produksi** (massa ditarik), **reinjeksi** (massa dibalikin), dan **recharge alami** (inflow dari akuifer sekitar, yang tumbuh seiring reservoir ditarik). Model jujur paling simpel itu balance **lumped-parameter**: persamaan diferensial orde-pertama yang solusinya bilang apakah field stabil di tekanan steady baru (recharge dan reinjeksi akhirnya nyeimbangin produksi — berkelanjutan) atau menurun tanpa batas (reservoir tertutup yang ditambang — tak-berkelanjutan). Fit model ke sejarah (history-matching) dan dia ngeforecast berdekade ke depan. ⟦TODO-Az: poin dry-steam itu headline. Balance Whiting & Ramey itu material/energy balance STEAM: di field vapour-dominated kayak Darajat, seiring tekanan turun air yang ditahan di pori-pori MENDIDIH, narik latent heat dari batuan, jadi reservoir "ngasih" massa dan energi lewat vaporisasi bukan ekspansi liquid simpel. Tangki interaktif di bawah pakai storativity liquid simpel buat ngebangun intuisi; balance Darajat sebenarnya itu versi steam/heat, dan framing itu punya kamu buat konfirmasi.⟧`
    },
    intellectualLineage: {
      en: `The method is the geothermal descendant of the **petroleum material balance** (Schilthuis, 1936; the Havlena-Odeh straight-line method): conserve mass in a reservoir tank and infer the drive mechanism and reserves from production and pressure. **Whiting & Ramey (1969)** extended it to geothermal by adding the **energy balance** and the thermodynamics of boiling water and steam — essential because a geothermal reservoir mines *heat from rock*, not just fluid. The **lumped-parameter** modelling tradition (one or a few tanks connected by conductances) grew from this — formalised for geothermal by **Axelsson** and others — as the simple, fast counterpart to full numerical simulation. ⟦TODO-Az: the geothermal lineage to foreground — Grant & Bixley's lumped models (in this catalog), Axelsson's lumped-parameter pressure-response modelling, and the link forward to distributed numerical simulation (O'Sullivan-Pruess-Lippmann). Confirm.⟧`,
      id: `Metodenya keturunan geothermal dari **material balance petroleum** (Schilthuis, 1936; metode straight-line Havlena-Odeh): konservasi massa di tangki reservoir dan simpulin mekanisme drive dan cadangan dari produksi dan tekanan. **Whiting & Ramey (1969)** ngeperluas dia ke geothermal dengan nambah **energy balance** dan termodinamika air mendidih dan steam — esensial karena reservoir geothermal nambang *panas dari batuan*, bukan cuma fluida. Tradisi pemodelan **lumped-parameter** (satu atau beberapa tangki yang dihubung konduktansi) tumbuh dari ini — diformalin buat geothermal sama **Axelsson** dan lainnya — sebagai counterpart yang simpel, cepat buat simulasi numerik penuh. ⟦TODO-Az: lineage geothermal buat dimajuin — lumped model Grant & Bixley (di katalog ini), pemodelan pressure-response lumped-parameter Axelsson, dan link maju ke simulasi numerik terdistribusi (O'Sullivan-Pruess-Lippmann). Konfirmasi.⟧`
    },
    keyCollaborators: {
      en: `Ramey's milieu is the Stanford reservoir-engineering school (and the petroleum-to-geothermal bridge that Roland Horne later led); Whiting's is the Texas A&M petroleum-engineering tradition. The methodological neighbours are the petroleum material-balance authors (**Schilthuis**, **Havlena & Odeh**) on one side and the geothermal lumped-parameter/simulation community (**Grant**, **Axelsson**, **Pruess**) on the other. ⟦TODO-Az: confirm/adjust, and whether a Wairakei or Indonesian field-balance study belongs here.⟧`,
      id: `Lingkungan Ramey itu sekolah reservoir-engineering Stanford (dan jembatan petroleum-ke-geothermal yang Roland Horne kemudian pimpin); Whiting itu tradisi petroleum-engineering Texas A&M. Tetangga metodologisnya itu penulis material-balance petroleum (**Schilthuis**, **Havlena & Odeh**) di satu sisi dan komunitas lumped-parameter/simulasi geothermal (**Grant**, **Axelsson**, **Pruess**) di sisi lain. ⟦TODO-Az: konfirmasi/sesuaikan, dan apakah studi field-balance Wairakei atau Indonesia masuk di sini.⟧`
    },
    legacy: {
      en: `The material balance is the cheapest forecast that still respects physics: with nothing but production and pressure history it tells an operator whether a field is being mined or sustained, how reinjection changes that, and roughly how much is left — the questions on which investment and field management turn. It remains the first model built for a new field and the sanity check on every later, more elaborate one. ⟦TODO-Az: the lasting value FOR DARAJAT is the dry-steam balance this draft cannot finalize — how the steam/heat material-energy balance (vaporisation of pore water, heat from rock) actually governs Darajat's pressure decline and how reinjection figures in it. Treat the module as the verified lumped-balance method and intuition (with a verified interactive solver) plus a flagged dry-steam checklist for your field; the simple liquid tank is the teaching scaffold, not the Darajat model.⟧`,
      id: `Material balance itu forecast termurah yang masih ngehormatin fisika: cuma dengan sejarah produksi dan tekanan dia ngasih tau operator apakah field lagi ditambang atau dipertahankan, gimana reinjeksi ngubah itu, dan kira-kira berapa yang tersisa — pertanyaan yang investasi dan manajemen field bergantung padanya. Dia tetap model pertama yang dibangun buat field baru dan sanity check buat tiap yang lebih rumit setelahnya. ⟦TODO-Az: nilai abadi BUAT DARAJAT itu balance dry-steam yang draft ini gak bisa finalin — gimana material-energy balance steam/heat (vaporisasi air pori, panas dari batuan) sebenarnya ngatur penurunan tekanan Darajat dan gimana reinjeksi berperan di dalamnya. Perlakukan module sebagai metode lumped-balance terverifikasi dan intuisi (dengan solver interaktif terverifikasi) plus checklist dry-steam yang di-flag buat field kamu; tangki liquid simpel itu scaffold pengajaran, bukan model Darajat.⟧`
    },
    keyWorks: [
      { year: 1969, title: 'Application of Material and Energy Balances to Geothermal Steam Production (this item) — demonstrated on Wairakei', venue: 'Journal of Petroleum Technology 21(7), 893–900' },
      { year: 1936, title: 'Active Oil and Reservoir Energy (Schilthuis) — the petroleum material balance this descends from', venue: 'Trans. AIME' },
      { year: 2011, title: 'Geothermal Reservoir Engineering (Grant & Bixley) — lumped-parameter models (in this catalog)', venue: 'Elsevier' },
      { year: 1989, title: 'Simulation of pressure response data from geothermal reservoirs by lumped parameter models (Axelsson)', venue: 'Proc. Stanford Geothermal Workshop ⟦TODO-Az: confirm⟧' },
      { year: 2001, title: 'State of the Art of Geothermal Reservoir Simulation (O\'Sullivan-Pruess-Lippmann) — the distributed counterpart (in this catalog)', venue: 'Geothermics' },
    ],
  },

  sections: [
    // ─────────────── 1. motivation ───────────────
    {
      id: 'motivation',
      heading: { en: 'Why this matters', id: 'Kenapa ini penting' },
      body: {
        en: `A well test tells you about the rock around one well. But an operator has to answer a bigger question: what will the **whole field** do over thirty years? Will the pressure stabilise, or keep falling until the wells die? How much can be produced sustainably? Will reinjection save it? Those are **reservoir-scale** questions, and the cheapest tool that still respects physics is the **material balance**.

The idea is conservation, applied to the reservoir as a single tank. Over any interval, the change in what the reservoir holds equals what entered minus what left. Three flows matter:

- **Production** — mass (steam/water) withdrawn through the wells; this drains the tank.
- **Reinjection** — spent fluid returned to the ground; this partly refills it.
- **Natural recharge** — inflow from the surrounding rock and aquifer, which *increases* as the reservoir pressure is drawn down (a bigger pressure difference pulls in more).

Track one number — the **average reservoir pressure** — and the balance becomes a simple differential equation. Its solution answers the sustainability question directly: if recharge and reinjection can grow to match production, the pressure settles at a new **steady state** and the field is sustainable; if the reservoir is effectively **closed**, the pressure declines without limit and the field is being mined. This is the first model built for any new field, and it remains the sanity check on every more elaborate simulation that follows.

⟦TODO-Az: the dry-steam point is the headline of this whole module, and it is your territory. Whiting & Ramey wrote a **steam** material/energy balance, and a vapour-dominated reservoir like Darajat does not behave like a simple liquid tank. As the pressure drops, water held in the pore space **boils**, and the latent heat for that boiling is drawn from the **hot rock** — so the reservoir releases mass and energy by *vaporisation*, mining heat from the rock matrix, not merely by fluid expansion. The relationship between "how much you can take" and "how far pressure falls" is therefore a steam-and-heat thermodynamic one, not the simple storativity in the interactive tank below. Please confirm/correct this framing — the tank is a teaching scaffold for the intuition, not the Darajat balance itself.⟧`,
        id: `Well test ngasih tau kamu soal batuan di sekitar satu sumur. Tapi operator harus ngejawab pertanyaan lebih besar: apa yang **seluruh field** bakal lakuin over tiga puluh tahun? Apakah tekanannya bakal stabil, atau terus jatuh sampai sumurnya mati? Berapa yang bisa diproduksi secara berkelanjutan? Apakah reinjeksi bakal nyelametin dia? Itu pertanyaan **skala-reservoir**, dan tool termurah yang masih ngehormatin fisika itu **material balance**.

Idenya konservasi, diterapin ke reservoir sebagai satu tangki. Over interval apa pun, perubahan apa yang reservoir tahan sama dengan apa yang masuk minus apa yang keluar. Tiga aliran penting:

- **Produksi** — massa (steam/air) ditarik lewat sumur; ini ngedrain tangki.
- **Reinjeksi** — fluida bekas dibalikin ke tanah; ini sebagian ngisi-ulang dia.
- **Recharge alami** — inflow dari batuan dan akuifer sekitar, yang *naik* seiring tekanan reservoir ditarik (beda tekanan lebih besar narik lebih banyak).

Lacak satu angka — **tekanan reservoir rata-rata** — dan balance-nya jadi persamaan diferensial simpel. Solusinya ngejawab pertanyaan keberlanjutan langsung: kalau recharge dan reinjeksi bisa tumbuh buat nyamain produksi, tekanannya settle di **steady state** baru dan field-nya berkelanjutan; kalau reservoir-nya efektif **tertutup**, tekanannya menurun tanpa batas dan field-nya lagi ditambang. Ini model pertama yang dibangun buat field baru mana pun, dan dia tetap sanity check buat tiap simulasi lebih rumit yang ngikut.

⟦TODO-Az: poin dry-steam itu headline seluruh module ini, dan dia teritori kamu. Whiting & Ramey nulis material/energy balance **steam**, dan reservoir vapour-dominated kayak Darajat gak berperilaku kayak tangki liquid simpel. Seiring tekanan turun, air yang ditahan di pore space **mendidih**, dan latent heat buat boiling itu ditarik dari **batuan panas** — jadi reservoir ngelepas massa dan energi lewat *vaporisasi*, nambang panas dari matriks batuan, bukan sekadar lewat ekspansi fluida. Hubungan antara "berapa yang bisa kamu ambil" dan "seberapa jauh tekanan jatuh" karena itu hubungan termodinamika steam-dan-panas, bukan storativity simpel di tangki interaktif di bawah. Tolong konfirmasi/koreksi framing ini — tangkinya scaffold pengajaran buat intuisi, bukan balance Darajat sendiri.⟧`
      }
    },

    // ─────────────── 2. intuition ───────────────
    {
      id: 'intuition',
      heading: { en: 'Intuition', id: 'Intuisi' },
      visualization: {
        id: 'lumped-reservoir-sim',
        component: 'LumpedReservoirSim',
        title: {
          en: 'Lumped-parameter reservoir pressure: production, recharge & reinjection',
          id: 'Tekanan reservoir lumped-parameter: produksi, recharge & reinjeksi'
        },
        description: {
          en: 'The tank model κ·dp/dt = −Wₚ(1−f) + a(p₀−p). Raise production Wₚ and pressure falls; raise the reinjection fraction f or the recharge coefficient a and the curve lifts toward a sustainable steady state p∞ = p₀ − Wₚ(1−f)/a. Set a = 0 (closed reservoir) and pressure declines linearly forever. The dashed line is the same field with NO reinjection — the gap is what reinjection buys. (Pressure in % of initial; units illustrative — the dry-steam balance is ⟦TODO-Az⟧.)',
          id: 'Model tangki κ·dp/dt = −Wₚ(1−f) + a(p₀−p). Naikin produksi Wₚ dan tekanan jatuh; naikin fraksi reinjeksi f atau koefisien recharge a dan kurvanya naik menuju steady state berkelanjutan p∞ = p₀ − Wₚ(1−f)/a. Set a = 0 (reservoir tertutup) dan tekanan menurun linear selamanya. Garis putus-putus itu field yang sama TANPA reinjeksi — gap-nya itu apa yang reinjeksi beli. (Tekanan dalam % awal; unit ilustratif — balance dry-steam itu ⟦TODO-Az⟧.)'
        },
        defaultParams: { Wp: 50, f: 0.3, a: 1.0, kappa: 30 },
        height: 420,
      },
      body: {
        en: `Picture the reservoir as a tank of pressure. Production opens a tap at the bottom — the level (pressure) falls. Two things refill it: **natural recharge** seeping in from the surrounding rock (and the harder you draw the tank down, the faster it seeps — the inflow is proportional to the drawdown), and **reinjection**, where you pump some fraction of what you produced back in at the top.

Play with the simulator above and three regimes appear:

- **Sustainable (open) reservoir.** With enough recharge, the inflow rises as pressure falls until it *matches* the net withdrawal. The pressure then stops falling and settles at a **steady state** $p_\\infty$. The field can run indefinitely at that production rate.
- **Closed reservoir.** Set the recharge coefficient to zero. Now nothing refills the tank except reinjection, and the pressure falls in a **straight line** forever — the field is being mined, and its life is just however long until the pressure is too low to produce.
- **Reinjection support.** The dashed curve is the same field with no reinjection. Turning reinjection up lifts the whole pressure history and raises the sustainable steady state — visibly buying field life. This is the quantitative version of why reinjection (the Axelsson topic) matters.

The single most important reading is **the slope, and where the curve is heading**: a curve flattening toward a steady state above the economic pressure is a healthy, sustainable field; a curve still falling steeply, or heading for zero, is a warning. The whole point of the lumped balance is that you can see this future from only the production and pressure you have already measured.

⟦TODO-Az: the tank is honest about liquid storage but it is a *scaffold*. In a dry-steam reservoir the "tank" gives up pressure by boiling pore water and mining heat from the rock, so the relationship between withdrawal and pressure drop is set by steam thermodynamics, not the single liquid storativity κ the slider controls. Use the picture for the intuition — production drains, recharge and reinjection support, closed vs open — but the Darajat numbers and the steam/heat balance are yours.⟧`,
        id: `Bayangin reservoir sebagai tangki tekanan. Produksi buka keran di bawah — levelnya (tekanan) jatuh. Dua hal ngisi-ulangnya: **recharge alami** yang merembes masuk dari batuan sekitar (dan makin keras kamu narik tangki turun, makin cepat dia merembes — inflow-nya proporsional ke drawdown), dan **reinjeksi**, di mana kamu mompa sebagian dari apa yang kamu produksi balik di atas.

Main sama simulator di atas dan tiga regime muncul:

- **Reservoir berkelanjutan (terbuka).** Dengan recharge cukup, inflow naik seiring tekanan jatuh sampai dia *nyamain* penarikan netto. Tekanannya lalu berhenti jatuh dan settle di **steady state** $p_\\infty$. Field-nya bisa jalan tanpa batas di laju produksi itu.
- **Reservoir tertutup.** Set koefisien recharge ke nol. Sekarang gak ada yang ngisi-ulang tangki kecuali reinjeksi, dan tekanannya jatuh dalam **garis lurus** selamanya — field-nya lagi ditambang, dan umurnya cuma selama sampai tekanannya terlalu rendah buat produksi.
- **Support reinjeksi.** Kurva putus-putus itu field yang sama tanpa reinjeksi. Naikin reinjeksi ngangkat seluruh sejarah tekanan dan naikin steady state berkelanjutan — keliatan beli umur field. Ini versi kuantitatif kenapa reinjeksi (topik Axelsson) penting.

Bacaan paling penting itu **slope-nya, dan ke mana kurvanya menuju**: kurva yang ngerata menuju steady state di atas tekanan ekonomis itu field yang sehat, berkelanjutan; kurva yang masih jatuh curam, atau menuju nol, itu peringatan. Seluruh poin lumped balance itu kamu bisa liat masa depan ini cuma dari produksi dan tekanan yang udah kamu ukur.

⟦TODO-Az: tangkinya jujur soal penyimpanan liquid tapi dia *scaffold*. Di reservoir dry-steam "tangki"-nya ngasih tekanan lewat ngeboilin air pori dan nambang panas dari batuan, jadi hubungan antara penarikan dan penurunan tekanan diset sama termodinamika steam, bukan satu storativity liquid κ yang slider kontrol. Pakai gambarannya buat intuisi — produksi ngedrain, recharge dan reinjeksi nyokong, tertutup vs terbuka — tapi angka Darajat dan balance steam/heat itu punya kamu.⟧`
      }
    },

    // ─────────────── 3. formalization ───────────────
    {
      id: 'formalization',
      heading: { en: 'The balance, formalized', id: 'Balance-nya, diformalkan' },
      body: {
        en: `**The lumped mass balance.** Treat the reservoir as one tank with average pressure $p(t)$. Let $W_p$ be the gross production rate, $f$ the fraction reinjected (so reinjection is $f\\,W_p$ and **net withdrawal** is $W_p(1-f)$), and let natural recharge be proportional to drawdown, $a\\,(p_0 - p)$, with $p_0$ the initial pressure and $a$ a recharge/leakage coefficient. Conservation of mass, written in pressure terms with a **storativity** $\\kappa$ (the mass the tank releases per unit pressure drop), gives a first-order linear ODE:
$$\\kappa\\,\\frac{\\mathrm{d}p}{\\mathrm{d}t} \\;=\\; -\\,W_p(1-f) \\;+\\; a\\,(p_0 - p).$$

**Closed-form solution.** This integrates exactly. The **steady state** (set $\\mathrm{d}p/\\mathrm{d}t=0$) and **time constant** are
$$p_\\infty \\;=\\; p_0 - \\frac{W_p(1-f)}{a}, \\qquad \\tau \\;=\\; \\frac{\\kappa}{a},$$
and the pressure history is the exponential approach
$$p(t) \\;=\\; p_\\infty + (p_0 - p_\\infty)\\,e^{-t/\\tau} \\;=\\; p_0 - \\frac{W_p(1-f)}{a}\\bigl(1 - e^{-t/\\tau}\\bigr).$$
(The interactive simulator plots exactly this solution; an independent Runge-Kutta integration of the ODE confirms it — see the verification harness.) Two regimes fall straight out:
- **Open reservoir ($a>0$):** pressure decays toward $p_\\infty$ with time constant $\\tau$. Sustainable iff $p_\\infty$ stays above the economic pressure.
- **Closed reservoir ($a\\to0$):** the recharge term vanishes and the solution becomes the **linear decline** $p(t) = p_0 - \\frac{W_p(1-f)}{\\kappa}\\,t$ — unsustainable; the field is simply being emptied.

**Reinjection as a lever.** Increasing $f$ reduces the net withdrawal $W_p(1-f)$, which raises $p_\\infty$ and flattens the whole curve — the model makes precise how much pressure support a given reinjection fraction buys.

**History-matching and forecasting.** In practice you do the inverse problem: measure $p(t)$ and the production/reinjection history, fit $a$ and $\\kappa$ (and the recharge model) so the solution matches the past, then run it forward to forecast. One or a few tanks connected by conductances (a multi-tank lumped model) capture more structure when one tank is too crude.

⟦TODO-Az: the dry-steam formalization is squarely your domain.
  1. **Steam material/energy balance (Whiting-Ramey).** In a vapour-dominated reservoir the state is not a simple liquid pressure with a constant storativity; it is a coupled mass-AND-energy balance in which pore water boils as pressure falls and latent heat is supplied by the rock. The effective "$\\kappa$" is really a steam/heat relationship and is strongly state-dependent. The ODE above is the liquid-intuition scaffold; the Darajat balance is the steam version.
  2. **Recharge character.** Whether Darajat is better modelled as open (strong recharge) or closed, and the form of the recharge term, are field judgements.
  3. **Coupling to reinjection and decline.** How $f$, the decline curve (Sanyal), and the reinjection scheme (Axelsson) are combined for Darajat.
The mass-balance ODE, its closed-form solution, $p_\\infty$, $\\tau$, and the open/closed regimes above are the verified, fluid-neutral backbone.⟧`,
        id: `**Mass balance lumped.** Perlakukan reservoir sebagai satu tangki dengan tekanan rata-rata $p(t)$. Misal $W_p$ laju produksi gross, $f$ fraksi yang direinjeksi (jadi reinjeksi itu $f\\,W_p$ dan **penarikan netto** itu $W_p(1-f)$), dan misal recharge alami proporsional ke drawdown, $a\\,(p_0 - p)$, dengan $p_0$ tekanan awal dan $a$ koefisien recharge/leakage. Konservasi massa, ditulis dalam terma tekanan dengan **storativity** $\\kappa$ (massa yang tangki lepas per unit penurunan tekanan), ngasih ODE linear orde-pertama:
$$\\kappa\\,\\frac{\\mathrm{d}p}{\\mathrm{d}t} \\;=\\; -\\,W_p(1-f) \\;+\\; a\\,(p_0 - p).$$

**Solusi closed-form.** Ini terintegrasi persis. **Steady state** (set $\\mathrm{d}p/\\mathrm{d}t=0$) dan **time constant**-nya
$$p_\\infty \\;=\\; p_0 - \\frac{W_p(1-f)}{a}, \\qquad \\tau \\;=\\; \\frac{\\kappa}{a},$$
dan sejarah tekanannya itu pendekatan eksponensial
$$p(t) \\;=\\; p_\\infty + (p_0 - p_\\infty)\\,e^{-t/\\tau} \\;=\\; p_0 - \\frac{W_p(1-f)}{a}\\bigl(1 - e^{-t/\\tau}\\bigr).$$
(Simulator interaktif ngeplot persis solusi ini; integrasi Runge-Kutta independen dari ODE-nya ngonfirmasinya — liat harness verifikasi.) Dua regime keluar langsung:
- **Reservoir terbuka ($a>0$):** tekanan meluruh menuju $p_\\infty$ dengan time constant $\\tau$. Berkelanjutan kalau $p_\\infty$ tetap di atas tekanan ekonomis.
- **Reservoir tertutup ($a\\to0$):** terma recharge hilang dan solusinya jadi **penurunan linear** $p(t) = p_0 - \\frac{W_p(1-f)}{\\kappa}\\,t$ — tak-berkelanjutan; field-nya cuma lagi dikosongin.

**Reinjeksi sebagai lever.** Naikin $f$ ngurangin penarikan netto $W_p(1-f)$, yang naikin $p_\\infty$ dan ngeratain seluruh kurva — model bikin presis berapa pressure support yang fraksi reinjeksi tertentu beli.

**History-matching dan forecasting.** Dalam praktik kamu ngerjain masalah invers: ukur $p(t)$ dan sejarah produksi/reinjeksi, fit $a$ dan $\\kappa$ (dan model recharge) supaya solusinya nyocokin masa lalu, terus jalanin maju buat forecast. Satu atau beberapa tangki yang dihubung konduktansi (lumped model multi-tangki) nangkep lebih banyak struktur pas satu tangki terlalu kasar.

⟦TODO-Az: formalisasi dry-steam itu persis domain kamu.
  1. **Material/energy balance steam (Whiting-Ramey).** Di reservoir vapour-dominated state-nya bukan tekanan liquid simpel dengan storativity konstan; dia balance mass-DAN-energy ter-couple di mana air pori mendidih seiring tekanan turun dan latent heat disuplai batuan. "$\\kappa$" efektif-nya itu sebenarnya hubungan steam/heat dan kuat bergantung-state. ODE di atas itu scaffold intuisi-liquid; balance Darajat itu versi steam.
  2. **Karakter recharge.** Apakah Darajat lebih baik dimodelkan terbuka (recharge kuat) atau tertutup, dan bentuk terma recharge-nya, itu pertimbangan field.
  3. **Coupling ke reinjeksi dan decline.** Gimana $f$, decline curve (Sanyal), dan skema reinjeksi (Axelsson) digabung buat Darajat.
ODE mass-balance, solusi closed-form-nya, $p_\\infty$, $\\tau$, dan regime terbuka/tertutup di atas itu backbone terverifikasi, netral-fluida.⟧`
      }
    },

    // ─────────────── 4. worked-example ───────────────
    {
      id: 'worked-example',
      heading: { en: 'Worked example', id: 'Contoh kerjaan' },
      body: {
        en: `**Reading the tank, with numbers (illustrative).** ⟦TODO-Az: every number is a placeholder to show the *logic* — the Darajat storativity, recharge, and the dry-steam balance are yours; do not teach these as Darajat values. Pressure is in % of initial.⟧

Take the simulator defaults: net-of-reinjection withdrawal set by $W_p = 50$, reinjection fraction $f = 0.3$, recharge $a = 1.0$, storativity $\\kappa = 30$.

1. **Net withdrawal.** $W_p(1-f) = 50 \\times 0.7 = 35$.
2. **Steady state.** $p_\\infty = p_0 - \\dfrac{W_p(1-f)}{a} = 100 - \\dfrac{35}{1.0} = 65\\%$. The field stabilises at 65% of initial pressure — sustainable if that is above the economic limit.
3. **Time constant.** $\\tau = \\kappa/a = 30/1.0 = 30$ years — the pressure is most of the way to $p_\\infty$ after about $\\tau$, and within $1/e$ of the remaining drop exactly at $t=\\tau$.
4. **Turn off recharge ($a\\to0$).** Now $p_\\infty$ disappears; the decline is linear at $W_p(1-f)/\\kappa = 35/30 \\approx 1.17\\%$ per year, reaching the economic limit in a finite, countable number of years. The field is being mined.
5. **Crank up reinjection ($f: 0.3\\to0.6$).** Net withdrawal drops to $50\\times0.4 = 20$, so $p_\\infty$ rises to $100 - 20 = 80\\%$ — reinjection bought 15 percentage points of sustainable pressure (the gap you see between the solid and dashed curves).

**The read.** Two numbers — $p_\\infty$ (does it stabilise above the economic pressure?) and $\\tau$ (how fast does it get there?) — summarise the field's fate, and both come from history you have already measured. That is the power of the material balance: a decades-long forecast from a tank and three flows.

⟦TODO-Az: the Darajat version replaces the liquid storativity with the steam/heat balance, so the *numbers* change even though the logic (net withdrawal vs recharge + reinjection → stabilise or mine) holds. A real worked example should use a Darajat history-match; I have kept this on the verified liquid scaffold and flagged it.⟧`,
        id: `**Membaca tangki, dengan angka (ilustratif).** ⟦TODO-Az: tiap angka placeholder buat nunjukin *logika*-nya — storativity, recharge Darajat, dan balance dry-steam itu punya kamu; jangan ngajarin ini sebagai nilai Darajat. Tekanan dalam % awal.⟧

Ambil default simulator: penarikan-netto-reinjeksi diset sama $W_p = 50$, fraksi reinjeksi $f = 0.3$, recharge $a = 1.0$, storativity $\\kappa = 30$.

1. **Penarikan netto.** $W_p(1-f) = 50 \\times 0.7 = 35$.
2. **Steady state.** $p_\\infty = p_0 - \\dfrac{W_p(1-f)}{a} = 100 - \\dfrac{35}{1.0} = 65\\%$. Field stabil di 65% tekanan awal — berkelanjutan kalau itu di atas batas ekonomis.
3. **Time constant.** $\\tau = \\kappa/a = 30/1.0 = 30$ tahun — tekanannya udah sebagian besar menuju $p_\\infty$ setelah sekitar $\\tau$, dan dalam $1/e$ dari sisa penurunan persis di $t=\\tau$.
4. **Matiin recharge ($a\\to0$).** Sekarang $p_\\infty$ hilang; penurunannya linear di $W_p(1-f)/\\kappa = 35/30 \\approx 1.17\\%$ per tahun, nyampe batas ekonomis dalam jumlah tahun yang terbatas, bisa-dihitung. Field-nya lagi ditambang.
5. **Naikin reinjeksi ($f: 0.3\\to0.6$).** Penarikan netto turun ke $50\\times0.4 = 20$, jadi $p_\\infty$ naik ke $100 - 20 = 80\\%$ — reinjeksi beli 15 poin persentase tekanan berkelanjutan (gap yang kamu liat antara kurva solid dan putus-putus).

**Bacaannya.** Dua angka — $p_\\infty$ (apakah dia stabil di atas tekanan ekonomis?) dan $\\tau$ (seberapa cepat dia nyampe situ?) — ngerangkum nasib field, dan keduanya datang dari sejarah yang udah kamu ukur. Itu kekuatan material balance: forecast berdekade dari satu tangki dan tiga aliran.

⟦TODO-Az: versi Darajat ngeganti storativity liquid dengan balance steam/heat, jadi *angka*-nya berubah walau logikanya (penarikan netto vs recharge + reinjeksi → stabil atau tambang) berlaku. Worked example nyata harusnya pakai history-match Darajat; aku ngejaga ini di scaffold liquid terverifikasi dan nge-flag-nya.⟧`
      }
    },

    // ─────────────── 5. applications ───────────────
    {
      id: 'applications',
      heading: { en: 'Applications', id: 'Aplikasi' },
      body: {
        en: `**What the material balance decides.** It is the first quantitative answer to the questions that size a project: the **sustainable production rate** (the rate whose $p_\\infty$ stays above the economic pressure), the **field life**, the **value of reinjection** (how much pressure support a given $f$ buys), and a first **reserves** estimate to cross-check against the volumetric and decline methods (Sanyal). It is cheap enough to run on day one and to update continuously.

**History-matching, then forecasting.** The workhorse use is inverse: fit the recharge and storativity so the model reproduces the measured pressure-and-production history, then trust the fitted model to forecast. A good match builds confidence; a poor one says the single-tank picture is too simple and a multi-tank or distributed model is needed.

**Where it sits among the other tools.** ⟦TODO-Az: the lumped balance is the bridge between the well-scale and the field-scale. Well tests (Horne) and deliverability (Acuña) describe single wells; the decline curve (Sanyal) describes aggregate production; the material balance ties production, reinjection, and *average pressure* together for the whole reservoir; and the distributed numerical simulation (O'Sullivan-Pruess-Lippmann) resolves the spatial detail the lumped model averages over. The lumped model is the fast, transparent first cut that the expensive simulator must remain consistent with. Confirm how Darajat chains these.⟧

**The dry-steam payoff.** ⟦TODO-Az: for Darajat the material balance is specifically a steam/heat balance, so its forecasts hinge on the vaporisation-and-rock-heat thermodynamics, and reinjection enters both the mass balance and the cooling question (Axelsson). These are the points a Darajat reservoir engineer would foreground; please set the emphasis.⟧

**The honest limits.** A single tank assumes the reservoir is well-mixed at one pressure — false in detail (pressure varies across a real field), so the lumped model is a deliberately coarse average. It cannot tell you *where* pressure is low or *which* wells will cool; for that you need the distributed simulation. Its strength is exactly its coarseness: a transparent, fast, physics-respecting forecast you can build and interrogate by hand, and against which the elaborate models are sanity-checked.`,
        id: `**Apa yang material balance putusin.** Dia jawaban kuantitatif pertama buat pertanyaan yang ngukur proyek: **laju produksi berkelanjutan** (laju yang $p_\\infty$-nya tetap di atas tekanan ekonomis), **umur field**, **nilai reinjeksi** (berapa pressure support yang $f$ tertentu beli), dan estimasi **cadangan** pertama buat cross-check lawan metode volumetrik dan decline (Sanyal). Dia cukup murah buat dijalanin di hari pertama dan diupdate terus-menerus.

**History-matching, lalu forecasting.** Penggunaan utamanya invers: fit recharge dan storativity supaya model ngereproduksi sejarah tekanan-dan-produksi terukur, terus percaya model yang di-fit buat forecast. Match bagus ngebangun kepercayaan; yang buruk bilang gambaran satu-tangki terlalu simpel dan model multi-tangki atau terdistribusi dibutuhin.

**Di mana dia duduk antara tool lain.** ⟦TODO-Az: lumped balance itu jembatan antara skala-sumur dan skala-field. Well test (Horne) dan deliverability (Acuña) ngegambarin sumur tunggal; decline curve (Sanyal) ngegambarin produksi agregat; material balance ngiket produksi, reinjeksi, dan *tekanan rata-rata* bareng buat seluruh reservoir; dan simulasi numerik terdistribusi (O'Sullivan-Pruess-Lippmann) nyelesaiin detail spasial yang lumped model rata-ratain. Lumped model itu potongan-pertama yang cepat, transparan yang simulator mahal harus tetap konsisten dengannya. Konfirmasi gimana Darajat ngerangkai ini.⟧

**Payoff dry-steam.** ⟦TODO-Az: buat Darajat material balance itu khusus balance steam/heat, jadi forecast-nya bergantung pada termodinamika vaporisasi-dan-panas-batuan, dan reinjeksi masuk baik ke mass balance maupun pertanyaan pendinginan (Axelsson). Ini poin yang reservoir engineer Darajat bakal majuin; tolong set penekanannya.⟧

**Batas yang jujur.** Satu tangki ngasumsiin reservoir tercampur-baik di satu tekanan — salah dalam detail (tekanan bervariasi lintas field nyata), jadi lumped model itu rata-rata yang sengaja kasar. Dia gak bisa ngasih tau kamu *di mana* tekanan rendah atau *sumur mana* yang bakal mendingin; buat itu kamu butuh simulasi terdistribusi. Kekuatannya persis kekasaranya: forecast yang transparan, cepat, ngehormatin-fisika yang bisa kamu bangun dan interogasi dengan tangan, dan lawan mana model rumit di-sanity-check.`
      }
    },

    // ─────────────── 6. practice ───────────────
    {
      id: 'practice',
      heading: { en: 'Practice', id: 'Latihan' },
      body: {
        en: `⟦TODO-Az: these items exercise the verified lumped-balance backbone; answers stay fluid-neutral and flag where the dry-steam steam/heat balance enters. Replace with Darajat items when you finalize.⟧

**1.** In the lumped balance, what distinguishes a "sustainable" field from one that is being "mined", in terms of the equation?

<details><summary>Answer</summary>
It is whether the recharge term can grow to balance the net withdrawal. With recharge a(p0 − p), as pressure p falls the inflow rises; if a is large enough, the inflow eventually equals the net withdrawal Wp(1−f) and the pressure settles at a finite steady state p∞ = p0 − Wp(1−f)/a above the economic limit — sustainable. If a is zero (closed reservoir) the recharge term vanishes, nothing balances the withdrawal, and the pressure declines linearly without bound — the field is simply being emptied (mined). So sustainability is the existence of a steady state p∞ above the economic pressure; mining is the closed (a → 0) linear-decline case. Reinjection (raising f) helps by shrinking the net withdrawal. ⟦TODO-Az: for dry steam the balance is the steam/heat version, but the sustainable-vs-mined distinction carries over.⟧
</details>

**2.** Why does raising the reinjection fraction f lift the whole pressure curve, and what exactly does it change in the steady state?

<details><summary>Answer</summary>
Because reinjection returns mass to the tank, reducing the NET withdrawal from Wp to Wp(1−f). Everything the field has to make up through recharge is smaller, so at every time the pressure is higher, and the steady state rises: p∞ = p0 − Wp(1−f)/a increases as f increases. At full reinjection (f = 1) the net withdrawal is zero and the pressure never falls at all. So f does not change the time constant τ = κ/a (how fast equilibrium is reached) but it raises the level p∞ that equilibrium sits at — it buys sustainable pressure. The gap between the solid (with reinjection) and dashed (no reinjection) curves in the simulator is exactly this effect. ⟦TODO-Az: confirm Darajat reinjection fraction and its coupling.⟧
</details>

**3.** The simulator and a separate Runge-Kutta integration of the ODE produce the same curve. Why is having two independent computations agree worth checking?

<details><summary>Answer</summary>
Because it separates two things that can each be wrong: the DERIVATION (does the closed-form solution p(t) = p∞ + (p0 − p∞)e^(−t/τ) actually solve the stated ODE κ dp/dt = −Wp(1−f) + a(p0−p)?) and the IMPLEMENTATION (does the code compute that formula correctly?). The closed-form is plotted by the simulator; an independent numerical RK4 integration of the differential equation makes no use of the closed-form, so if the two agree to tight tolerance across many parameter sets, both the algebra and the code are corroborated. A learner is then seeing a curve that provably is the solution of the mass balance, not just a plausible-looking line — which is the standard the whole content base holds itself to. ⟦TODO-Az: the verified object is the LIQUID scaffold; the dry-steam balance is still yours.⟧
</details>

**4.** Why is a single-tank material balance a complement to, not a replacement for, a distributed numerical simulation?

<details><summary>Answer</summary>
Because the single tank deliberately assumes the whole reservoir sits at ONE average pressure — it cannot represent where pressure is low, which wells will cool, or how a flashing front moves, since it has averaged all spatial structure away. A distributed numerical simulation (the TOUGH2 lineage) resolves that spatial detail across many grid blocks and wells. The lumped balance is the fast, transparent, hand-checkable first cut: it gives the field-wide pressure trend, the sustainability verdict, and a reserves cross-check cheaply and on day one, and it serves as the sanity check the expensive simulator must remain consistent with. The two operate at different resolutions and are strongest used together. ⟦TODO-Az: confirm the Darajat chain lumped balance → distributed model.⟧
</details>`,
        id: `⟦TODO-Az: item ini ngelatih backbone lumped-balance terverifikasi; jawaban tetap netral-fluida dan nge-flag di mana balance steam/heat dry-steam masuk. Ganti dengan item Darajat pas kamu finalisasi.⟧

**1.** Di lumped balance, apa yang ngebedain field "berkelanjutan" dari yang lagi "ditambang", dalam terma persamaan?

<details><summary>Jawaban</summary>
Itu apakah terma recharge bisa tumbuh buat nyeimbangin penarikan netto. Dengan recharge a(p0 − p), seiring tekanan p jatuh inflow-nya naik; kalau a cukup besar, inflow-nya akhirnya nyamain penarikan netto Wp(1−f) dan tekanannya settle di steady state terbatas p∞ = p0 − Wp(1−f)/a di atas batas ekonomis — berkelanjutan. Kalau a nol (reservoir tertutup) terma recharge-nya hilang, gak ada yang nyeimbangin penarikan, dan tekanannya menurun linear tanpa batas — field-nya cuma lagi dikosongin (ditambang). Jadi keberlanjutan itu keberadaan steady state p∞ di atas tekanan ekonomis; penambangan itu kasus tertutup (a → 0) penurunan-linear. Reinjeksi (naikin f) bantu dengan ngecilin penarikan netto. ⟦TODO-Az: buat dry steam balance-nya versi steam/heat, tapi distingsi berkelanjutan-vs-ditambang terbawa.⟧
</details>

**2.** Kenapa naikin fraksi reinjeksi f ngangkat seluruh kurva tekanan, dan apa persisnya yang dia ubah di steady state?

<details><summary>Jawaban</summary>
Karena reinjeksi ngebalikin massa ke tangki, ngurangin penarikan NETTO dari Wp ke Wp(1−f). Semua yang field harus ganti lewat recharge jadi lebih kecil, jadi di tiap waktu tekanannya lebih tinggi, dan steady state-nya naik: p∞ = p0 − Wp(1−f)/a naik seiring f naik. Di reinjeksi penuh (f = 1) penarikan netto-nya nol dan tekanannya gak pernah jatuh sama sekali. Jadi f gak ngubah time constant τ = κ/a (seberapa cepat ekuilibrium dicapai) tapi dia naikin level p∞ tempat ekuilibrium duduk — dia beli tekanan berkelanjutan. Gap antara kurva solid (dengan reinjeksi) dan putus-putus (tanpa reinjeksi) di simulator itu persis efek ini. ⟦TODO-Az: konfirmasi fraksi reinjeksi Darajat dan coupling-nya.⟧
</details>

**3.** Simulator dan integrasi Runge-Kutta terpisah dari ODE ngehasilin kurva yang sama. Kenapa punya dua komputasi independen yang sepakat itu layak dicek?

<details><summary>Jawaban</summary>
Karena dia misahin dua hal yang masing-masing bisa salah: DERIVASI (apakah solusi closed-form p(t) = p∞ + (p0 − p∞)e^(−t/τ) beneran nyelesaiin ODE yang dinyatakan κ dp/dt = −Wp(1−f) + a(p0−p)?) dan IMPLEMENTASI (apakah kode-nya ngitung formula itu dengan benar?). Closed-form-nya diplot simulator; integrasi numerik RK4 independen dari persamaan diferensial-nya gak pakai closed-form sama sekali, jadi kalau keduanya sepakat di toleransi ketat lintas banyak set parameter, baik aljabar maupun kode-nya terkorroborasi. Learner lalu ngeliat kurva yang terbukti itu solusi mass balance, bukan cuma garis yang keliatan masuk-akal — yang itu standar yang seluruh basis konten pegang ke dirinya. ⟦TODO-Az: objek terverifikasi itu scaffold LIQUID; balance dry-steam masih punya kamu.⟧
</details>

**4.** Kenapa material balance satu-tangki itu pelengkap, bukan pengganti, simulasi numerik terdistribusi?

<details><summary>Jawaban</summary>
Karena satu tangki sengaja ngasumsiin seluruh reservoir duduk di SATU tekanan rata-rata — dia gak bisa ngerepresentasiin di mana tekanan rendah, sumur mana yang bakal mendingin, atau gimana flashing front gerak, karena dia udah ngerata-ratain semua struktur spasial. Simulasi numerik terdistribusi (garis keturunan TOUGH2) nyelesaiin detail spasial itu lintas banyak grid block dan sumur. Lumped balance itu potongan-pertama yang cepat, transparan, bisa-dicek-tangan: dia ngasih tren tekanan field-wide, vonis keberlanjutan, dan cross-check cadangan dengan murah dan di hari pertama, dan dia jadi sanity check yang simulator mahal harus tetap konsisten dengannya. Keduanya beroperasi di resolusi berbeda dan paling kuat dipakai bareng. ⟦TODO-Az: konfirmasi rantai Darajat lumped balance → model terdistribusi.⟧
</details>`
      }
    },

    // ─────────────── 7. connections ───────────────
    {
      id: 'connections',
      heading: { en: 'Connections', id: 'Koneksi' },
      body: {
        en: `- **Reservoir engineering home**: [Grant & Bixley 2011](item:grant-bixley-2011) covers lumped-parameter models and material balance; this module focuses the method and adds the verified interactive solver.
- **Production-side view of decline**: ⟦TODO-Az⟧ [Sanyal 2005](item:sanyal-2005) — the decline curve describes aggregate production falling; the material balance explains it through reservoir pressure, recharge, and reinjection. Two views of the same depletion.
- **Reinjection lever**: ⟦TODO-Az⟧ [Axelsson 2010](item:axelsson-2010) — the reinjection fraction f in the balance is exactly the support reinjection provides; the tracer-derived connections decide how effective it is.
- **Well-scale inputs**: ⟦TODO-Az⟧ [Horne 1995](item:horne-1995) (PTA — and the Ramey→Horne Stanford lineage) and [Acuña 2008](item:acuna-2008) (deliverability) describe single wells the field-wide balance aggregates.
- **Distributed counterpart**: [O'Sullivan-Pruess-Lippmann 2001](item:osullivan-pruess-lippmann-2001) — the numerical simulation that resolves the spatial detail this lumped model averages over; the two must stay consistent.
- **What is being balanced**: [DiPippo 2016](item:dipippo-2016) — the steam/heat the reservoir gives up is what the surface plant converts to power.`,
        id: `- **Rumah reservoir engineering**: [Grant & Bixley 2011](item:grant-bixley-2011) ngebahas lumped-parameter model dan material balance; module ini ngefokusin metode-nya dan nambah solver interaktif terverifikasi.
- **Pandangan sisi-produksi dari decline**: ⟦TODO-Az⟧ [Sanyal 2005](item:sanyal-2005) — decline curve ngegambarin produksi agregat jatuh; material balance ngejelasinnya lewat tekanan reservoir, recharge, dan reinjeksi. Dua pandangan deplesi yang sama.
- **Lever reinjeksi**: ⟦TODO-Az⟧ [Axelsson 2010](item:axelsson-2010) — fraksi reinjeksi f di balance itu persis support yang reinjeksi sediain; koneksi turunan-tracer nentuin seberapa efektif dia.
- **Input skala-sumur**: ⟦TODO-Az⟧ [Horne 1995](item:horne-1995) (PTA — dan garis keturunan Stanford Ramey→Horne) dan [Acuña 2008](item:acuna-2008) (deliverability) ngegambarin sumur tunggal yang balance field-wide agregatin.
- **Counterpart terdistribusi**: [O'Sullivan-Pruess-Lippmann 2001](item:osullivan-pruess-lippmann-2001) — simulasi numerik yang nyelesaiin detail spasial yang lumped model ini rata-ratain; keduanya harus tetap konsisten.
- **Apa yang di-balance**: [DiPippo 2016](item:dipippo-2016) — steam/heat yang reservoir kasih itu yang surface plant konversi jadi listrik.`
      }
    },

    // ─────────────── 8. sources ───────────────
    {
      id: 'sources',
      heading: { en: 'Sources', id: 'Sumber' },
      body: {
        en: `⟦TODO-Az: verify exact citations and which sources you want canonical for the dry-steam balance, before finalizing.⟧
- **Whiting, R. L., and Ramey, H. J. Jr.** (1969). "Application of Material and Energy Balances to Geothermal Steam Production." *Journal of Petroleum Technology* 21(7), 893–900. **(This item.)** Demonstrated on Wairakei.
- **Schilthuis, R. J.** (1936). "Active Oil and Reservoir Energy." *Trans. AIME.* The petroleum material balance this descends from.
- **Grant, M. A., and Bixley, P. F.** (2011). *Geothermal Reservoir Engineering*, 2nd ed. Elsevier. Lumped-parameter models (in this catalog). ⟦TODO-Az⟧
- **Axelsson, G.** (1989). "Simulation of pressure response data from geothermal reservoirs by lumped parameter models." *Proc. Stanford Geothermal Workshop.* ⟦TODO-Az: confirm.⟧
- **O'Sullivan, M. J., Pruess, K., and Lippmann, M. J.** (2001). "State of the Art of Geothermal Reservoir Simulation." *Geothermics.* The distributed counterpart (in this catalog).`,
        id: `⟦TODO-Az: verifikasi citation persis dan sumber mana yang kamu mau kanonik buat balance dry-steam, sebelum finalisasi.⟧
- **Whiting, R. L., dan Ramey, H. J. Jr.** (1969). "Application of Material and Energy Balances to Geothermal Steam Production." *Journal of Petroleum Technology* 21(7), 893–900. **(Item ini.)** Didemoin di Wairakei.
- **Schilthuis, R. J.** (1936). "Active Oil and Reservoir Energy." *Trans. AIME.* Material balance petroleum yang ini turun darinya.
- **Grant, M. A., dan Bixley, P. F.** (2011). *Geothermal Reservoir Engineering*, ed. ke-2. Elsevier. Lumped-parameter model (di katalog ini). ⟦TODO-Az⟧
- **Axelsson, G.** (1989). "Simulation of pressure response data from geothermal reservoirs by lumped parameter models." *Proc. Stanford Geothermal Workshop.* ⟦TODO-Az: konfirmasi.⟧
- **O'Sullivan, M. J., Pruess, K., dan Lippmann, M. J.** (2001). "State of the Art of Geothermal Reservoir Simulation." *Geothermics.* Counterpart terdistribusi (di katalog ini).`
      }
    },
  ],

  audio: { enabled: true },

  selfTest: [
    {
      sectionId: 'intuition',
      question: {
        en: 'In the lumped tank model, what determines whether the pressure settles at a steady state or declines forever, and where does reinjection enter?',
        id: 'Di model tangki lumped, apa yang nentuin apakah tekanan settle di steady state atau menurun selamanya, dan di mana reinjeksi masuk?'
      },
      prompt: { en: 'Before continuing, try answering:', id: 'Sebelum lanjut, coba jawab:' },
      answer: {
        en: 'The recharge coefficient a decides it. Recharge inflow is a(p0 − p), which grows as pressure falls; if a is greater than zero, the inflow eventually rises to match the net withdrawal and the pressure settles at the steady state p∞ = p0 − Wp(1−f)/a. If a = 0 (a closed reservoir) nothing balances the withdrawal and the pressure falls linearly forever, so the field is being mined. Reinjection enters through the fraction f: it returns mass, cutting the net withdrawal from Wp to Wp(1−f), which raises p∞ and lifts the whole pressure curve without changing the time constant τ = κ/a. So an open reservoir with strong reinjection is the sustainable case; a closed reservoir with little reinjection is the mined case. ⟦TODO-Az: the dry-steam balance replaces the liquid storativity but the open-vs-closed logic carries over.⟧',
        id: 'Koefisien recharge a yang nentuin. Inflow recharge itu a(p0 − p), yang tumbuh seiring tekanan jatuh; kalau a lebih besar dari nol, inflow-nya akhirnya naik buat nyamain penarikan netto dan tekanannya settle di steady state p∞ = p0 − Wp(1−f)/a. Kalau a = 0 (reservoir tertutup) gak ada yang nyeimbangin penarikan dan tekanannya jatuh linear selamanya, jadi field-nya lagi ditambang. Reinjeksi masuk lewat fraksi f: dia ngebalikin massa, motong penarikan netto dari Wp ke Wp(1−f), yang naikin p∞ dan ngangkat seluruh kurva tekanan tanpa ngubah time constant τ = κ/a. Jadi reservoir terbuka dengan reinjeksi kuat itu kasus berkelanjutan; reservoir tertutup dengan reinjeksi sedikit itu kasus ditambang. ⟦TODO-Az: balance dry-steam ngeganti storativity liquid tapi logika terbuka-vs-tertutup terbawa.⟧'
      }
    },
    {
      sectionId: 'formalization',
      question: {
        en: 'The simulator plots a closed-form solution, yet a separate Runge-Kutta integration is run to check it. What two distinct kinds of error does that agreement rule out?',
        id: 'Simulator ngeplot solusi closed-form, tapi integrasi Runge-Kutta terpisah dijalanin buat ngeceknya. Dua jenis error berbeda apa yang kesepakatan itu nyingkirin?'
      },
      prompt: { en: 'Before continuing, try answering:', id: 'Sebelum lanjut, coba jawab:' },
      answer: {
        en: 'It rules out (1) a DERIVATION error and (2) an IMPLEMENTATION error. The derivation error would be that the closed-form p(t) = p∞ + (p0 − p∞)e^(−t/τ) is not actually the solution of the stated balance κ dp/dt = −Wp(1−f) + a(p0−p) — bad algebra. The implementation error would be that the code computing the closed-form has a bug, even if the formula is right. The Runge-Kutta integrator steps the differential equation directly and never touches the closed-form, so it is an independent path to the same answer; when the two match to tight tolerance across many parameter sets, both the algebra and the code are corroborated. The learner is then guaranteed to be looking at the genuine solution of the mass balance. ⟦TODO-Az: this verifies the liquid scaffold, not the dry-steam balance.⟧',
        id: 'Dia nyingkirin (1) error DERIVASI dan (2) error IMPLEMENTASI. Error derivasi-nya bakal bahwa closed-form p(t) = p∞ + (p0 − p∞)e^(−t/τ) sebenarnya bukan solusi dari balance yang dinyatakan κ dp/dt = −Wp(1−f) + a(p0−p) — aljabar buruk. Error implementasi-nya bakal bahwa kode yang ngitung closed-form punya bug, walau formulanya benar. Integrator Runge-Kutta nge-step persamaan diferensial-nya langsung dan gak pernah nyentuh closed-form, jadi dia jalur independen ke jawaban yang sama; pas keduanya cocok di toleransi ketat lintas banyak set parameter, baik aljabar maupun kode-nya terkorroborasi. Learner lalu dijamin ngeliat solusi asli dari mass balance. ⟦TODO-Az: ini ngeverifikasi scaffold liquid, bukan balance dry-steam.⟧'
      }
    },
    {
      sectionId: 'applications',
      question: {
        en: 'Why is a single-tank material balance kept around even after a full distributed simulation exists?',
        id: 'Kenapa material balance satu-tangki tetap dipertahankan bahkan setelah simulasi terdistribusi penuh ada?'
      },
      prompt: { en: 'Before continuing, try answering:', id: 'Sebelum lanjut, coba jawab:' },
      answer: {
        en: 'Because it is the cheap, transparent, physics-respecting sanity check the elaborate model must stay consistent with. The single tank averages the whole reservoir to one pressure, so it cannot say where pressure is low or which wells cool — but that coarseness is its virtue: it can be built and interrogated by hand on day one, gives the field-wide pressure trend, the sustainable-rate and field-life verdict, and a reserves cross-check, all almost for free, and it updates continuously as new data arrive. A distributed simulation that disagrees with a well-matched material balance on the gross mass/energy budget is suspect. So the two are kept together: the lumped balance for fast, global, checkable answers and confidence; the distributed model for the spatial detail (where, which wells) the lumped one cannot resolve. ⟦TODO-Az: confirm how Darajat uses the lumped balance alongside its numerical model.⟧',
        id: 'Karena dia sanity check yang murah, transparan, ngehormatin-fisika yang model rumit harus tetap konsisten dengannya. Satu tangki ngerata-ratain seluruh reservoir ke satu tekanan, jadi dia gak bisa bilang di mana tekanan rendah atau sumur mana yang mendingin — tapi kekasaran itu kebajikannya: dia bisa dibangun dan diinterogasi dengan tangan di hari pertama, ngasih tren tekanan field-wide, vonis laju-berkelanjutan dan umur-field, dan cross-check cadangan, semua hampir gratis, dan dia update terus-menerus seiring data baru tiba. Simulasi terdistribusi yang gak sepakat sama material balance yang ter-match-baik soal budget mass/energy gross itu mencurigakan. Jadi keduanya dipertahankan bareng: lumped balance buat jawaban yang cepat, global, bisa-dicek dan kepercayaan; model terdistribusi buat detail spasial (di mana, sumur mana) yang lumped gak bisa nyelesaiin. ⟦TODO-Az: konfirmasi gimana Darajat pakai lumped balance di samping model numeriknya.⟧'
      }
    },
  ],
};
