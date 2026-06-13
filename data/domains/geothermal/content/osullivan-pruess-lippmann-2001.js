// ─────────────────────────────────────────────────────────────────────────
// ⚠ DRAFT — AWAITING AZ ON DARAJAT-SPECIFIC FACTS ONLY.
// Geothermal content is Az-authored (6 yrs Darajat dry-steam operations).
// The GENERAL claims in this module (governing equations, IFDM/Newton-Raphson
// numerics, EOS-module roles, vapour-dominated vs liquid-dominated physics,
// the four-stage modelling workflow, author/bibliographic facts, and the source
// page ranges) have been VERIFIED against the primary literature — chiefly the
// TOUGH2 User's Guide (LBNL-43134, Appendices A & B), Narasimhan & Witherspoon
// (1976), Pruess & Narasimhan (1985), Allis (WGC 2000) on vapour-dominated
// systems, and standard steam tables for the worked-example enthalpy. Those
// flags have been cleared.
//
// What REMAINS open are Darajat / site-specific operational facts that are not
// in the public literature and are Az's alone to assert. These stay flagged
// inline as **⟦TODO-Az: …⟧** and the module is NOT finalized until Az resolves
// them. Full prep + per-claim verification:
//   notes/osullivan-pruess-lippmann-2001-research-prep-2026-06-01.md
//
// OPEN TODO-Az ITEMS (Darajat-specific only):
//   - How Darajat's resource is actually managed (distributed numerical model
//     vs lumped; the operator's working code; steam-supply forecasting in
//     practice). Prep §9-F.
//   - The dry-steam well-on-deliverability form used in the Darajat field model,
//     and whether near-well non-Darcy (turbulent skin) is included. Prep §9-D/E5.
//   - Whether the deliverability-as-simulator-BC link matches Darajat practice
//     (the general framing is cleared; only the site-practice match is open).
//   - Darajat facts: AZ5 producing-well count (49 vs ~39: producers-only vs
//     total stock?); operator model (TOUGH2/AUTOUGH2/iTOUGH2/commercial);
//     NCG fraction and EOS1-vs-EOS2 choice; single- vs dual-porosity. Prep §9-F.
//   - Seed cards deferred until Az signs off on content.
// ─────────────────────────────────────────────────────────────────────────

export const CONTENT = {
  itemId: 'osullivan-pruess-lippmann-2001',
  estimatedReadMinutes: 38,

  author: {
    fullName: {
      en: `Michael J. O'Sullivan, Karsten Pruess & Marcelo J. Lippmann`,
      id: `Michael J. O'Sullivan, Karsten Pruess & Marcelo J. Lippmann`
    },
    affiliation: {
      en: `University of Auckland (O'Sullivan) and Lawrence Berkeley National Laboratory (Pruess, Lippmann)`,
      id: `University of Auckland (O'Sullivan) dan Lawrence Berkeley National Laboratory (Pruess, Lippmann)`
    },
    tagline: {
      en: `The 2001 survey that marked geothermal reservoir simulation's arrival as routine engineering — anchored on the TOUGH2 code family that became a de-facto standard for the field.`,
      id: `Survey 2001 yang nandain geothermal reservoir simulation udah jadi rekayasa rutin — berdiri di atas keluarga kode TOUGH2 yang jadi standard de-facto di bidang ini.`
    },
    bio: {
      en: `Three authors with complementary roles wrote this state-of-the-art review. Michael J. O'Sullivan, an applied mathematician at the University of Auckland (BE/BSc/ME Auckland, PhD Applied Mechanics Caltech 1968), built one of the world's leading academic geothermal-simulation groups — decades of modelling Wairakei and Ohaaki, the AUTOUGH2 variant of TOUGH2, and later the open-source Waiwera simulator; he received the Henry J. Ramey Jr. award in 2011. Karsten Pruess, of Lawrence Berkeley National Laboratory, created and led the TOUGH / TOUGH2 / iTOUGH2 simulator family — widely regarded as the most widely used code for non-isothermal multiphase flow in porous and fractured media — originated the MINC method for fractured rock, and pioneered CO₂ as an EGS working fluid; he was elected to the National Academy of Engineering and received the TOUGH Lifetime Achievement Award (2012). Marcelo J. Lippmann, also of LBNL, managed the laboratory's geothermal program and was a long-serving editor of *Geothermics*, best known for decades of work on the Cerro Prieto field in Mexico; he died in Berkeley in September 2018. Their paper is less a research contribution than a consolidation: a snapshot of a field that had just become routine.`,
      id: `Tiga penulis dengan peran komplementer nulis review state-of-the-art ini. Michael J. O'Sullivan, applied mathematician di University of Auckland (BE/BSc/ME Auckland, PhD Applied Mechanics Caltech 1968), bangun salah satu grup akademik geothermal-simulation terdepan di dunia — puluhan tahun modelling Wairakei dan Ohaaki, varian AUTOUGH2 dari TOUGH2, dan kemudian simulator open-source Waiwera; dia dapet Henry J. Ramey Jr. award tahun 2011. Karsten Pruess, dari Lawrence Berkeley National Laboratory, bikin dan mimpin keluarga simulator TOUGH / TOUGH2 / iTOUGH2 — kode yang dianggap paling banyak dipakai buat non-isothermal multiphase flow di porous dan fractured media — mencetuskan MINC method buat fractured rock, dan pelopori CO₂ sebagai working fluid EGS; dia terpilih sebagai anggota National Academy of Engineering dan dapet TOUGH Lifetime Achievement Award (2012). Marcelo J. Lippmann, juga dari LBNL, ngelola program geothermal lab itu dan editor *Geothermics* yang lama menjabat, paling dikenal buat puluhan tahun kerja di field Cerro Prieto, Mexico; dia wafat di Berkeley September 2018. Paper mereka bukan kontribusi riset baru tapi konsolidasi: potret bidang yang baru aja jadi rutin.`
    },
    focus: {
      en: `Numerical simulation of geothermal reservoirs: the coupled mass-and-energy balance of multiphase fluid and heat flow in porous and fractured rock, the equation-of-state thermodynamics of water/steam, and the workflow — conceptual model, natural-state calibration, production history matching, future-performance prediction — that turns field data into a forecasting tool. The recurring signature across these authors' work: the integral finite difference discretization and the modular TOUGH2 architecture that separates the flow solver from interchangeable thermodynamics.`,
      id: `Simulasi numerik reservoir geothermal: balance mass-dan-energy yang coupled buat multiphase fluid dan heat flow di porous dan fractured rock, termodinamika equation-of-state air/steam, dan workflow — conceptual model, natural-state calibration, production history matching, future-performance prediction — yang ngubah field data jadi alat forecasting. Signature berulang di kerja para penulis ini: diskretisasi integral finite difference dan arsitektur modular TOUGH2 yang misahin flow solver dari termodinamika yang bisa ditukar.`
    },
    intellectualLineage: {
      en: `Two of the three dominant academic geothermal-simulation lineages meet in this paper. O'Sullivan carries the Auckland applied-mathematics tradition (Caltech doctorate, fluid mechanics) into a New-Zealand school that trained a generation of modellers and produced AUTOUGH2 and Waiwera. Pruess built the LBNL subsurface-simulation school — the SHAFT/MULKOM → TOUGH → TOUGH2 code lineage — that propagated through Finsterle (iTOUGH2), Oldenburg (CO₂ storage), Moridis (gas hydrates), and Xu (TOUGHREACT). Lippmann's lineage runs through UC Berkeley geological engineering and LBNL's geothermal program, tied to the Cerro Prieto modelling tradition. The third great lineage, Stanford's, is the implicit interlocutor: the 1980 Stanford code-comparison study is the event this review treats as the field's coming of age.`,
      id: `Dua dari tiga lineage akademik geothermal-simulation dominan ketemu di paper ini. O'Sullivan bawa tradisi applied-mathematics Auckland (doktorat Caltech, fluid mechanics) ke sekolah New-Zealand yang ngelatih satu generasi modeller dan ngehasilin AUTOUGH2 dan Waiwera. Pruess bangun sekolah subsurface-simulation LBNL — lineage kode SHAFT/MULKOM → TOUGH → TOUGH2 — yang nyebar lewat Finsterle (iTOUGH2), Oldenburg (CO₂ storage), Moridis (gas hydrates), dan Xu (TOUGHREACT). Lineage Lippmann lewat geological engineering UC Berkeley dan program geothermal LBNL, terikat ke tradisi modelling Cerro Prieto. Lineage besar ketiga, Stanford, jadi interlocutor implisit: studi code-comparison Stanford 1980 itu peristiwa yang review ini anggap sebagai kedewasaan bidang ini.`
    },
    keyCollaborators: {
      en: `**Stefan Finsterle** (LBNL) — co-developer with Pruess of iTOUGH2, the inverse-modelling/automatic-history-matching companion to TOUGH2. **T. N. Narasimhan** and **P. A. Witherspoon** (LBNL/Berkeley) — originators of the integral finite difference method the codes rest on. **Curtis Oldenburg** and **George Moridis** (LBNL) — co-authors of the TOUGH2 User's Guide and extenders of the code to CO₂ storage and gas hydrates. **G. S. Bodvarsson** — Lippmann's collaborator on Cerro Prieto heat-and-mass-transport modelling. **A. Yeh** and **W. Mannington** — O'Sullivan's co-authors on the long-running Wairakei model.`,
      id: `**Stefan Finsterle** (LBNL) — co-developer bareng Pruess buat iTOUGH2, companion inverse-modelling/automatic-history-matching dari TOUGH2. **T. N. Narasimhan** dan **P. A. Witherspoon** (LBNL/Berkeley) — pencetus integral finite difference method yang jadi fondasi kode-kode itu. **Curtis Oldenburg** dan **George Moridis** (LBNL) — co-author TOUGH2 User's Guide dan yang ngembangin kode ke CO₂ storage dan gas hydrates. **G. S. Bodvarsson** — kolaborator Lippmann di modelling heat-and-mass-transport Cerro Prieto. **A. Yeh** dan **W. Mannington** — co-author O'Sullivan di model Wairakei yang berjalan lama.`
    },
    legacy: {
      en: `This review is the canonical "state of the art" citation for geothermal reservoir simulation at the turn of the century, and its central claim held: by 2001 numerical modelling had moved from a controversial specialty to standard practice, applied to more than 100 fields worldwide with three-dimensional meshes of thousands of blocks used as a matter of course. TOUGH2 became — and substantially remains — the de-facto standard simulator, with descendants (AUTOUGH2, iTOUGH2, TOUGHREACT, TOUGH3) and inverse-modelling-by-default now ordinary. The methods the authors describe also crossed domains: the same code family underpins nuclear-waste isolation (Yucca Mountain), vadose-zone hydrology, gas-hydrate production, and geologic CO₂ sequestration. For a working reservoir engineer the lasting message is the workflow itself — conceptual model, natural state, history match, predict — which remains the spine of field-scale resource management.`,
      id: `Review ini sitasi "state of the art" kanonik buat geothermal reservoir simulation di pergantian abad, dan klaim sentralnya bener: pada 2001 numerical modelling udah pindah dari spesialisasi kontroversial ke praktek standar, dipakai di lebih dari 100 field di dunia dengan mesh tiga-dimensi ribuan blok yang dipakai rutin. TOUGH2 jadi — dan sebagian besar tetap — simulator standard de-facto, dengan keturunan (AUTOUGH2, iTOUGH2, TOUGHREACT, TOUGH3) dan inverse-modelling-by-default yang sekarang biasa. Metode yang penulis jelasin juga lintas domain: keluarga kode yang sama jadi fondasi nuclear-waste isolation (Yucca Mountain), vadose-zone hydrology, produksi gas-hydrate, dan geologic CO₂ sequestration. Buat reservoir engineer praktisi, pesan yang bertahan itu workflow-nya sendiri — conceptual model, natural state, history match, predict — yang tetap jadi tulang punggung manajemen sumber daya skala field.`
    },
    keyWorks: [
      { year: 2001, title: `State of the art of geothermal reservoir simulation (this item)`, venue: `Geothermics 30(4), 395-429` },
      { year: 1999, title: `TOUGH2 User's Guide, Version 2 (Pruess, Oldenburg, Moridis)`, venue: `Lawrence Berkeley National Laboratory Report LBNL-43134` },
      { year: 1985, title: `A practical method for modeling fluid and heat flow in fractured porous media — the MINC method (Pruess, Narasimhan)`, venue: `Society of Petroleum Engineers Journal 25(1), 14-26` },
      { year: 1995, title: `Automatic history matching of geothermal field performance (Finsterle, Pruess)`, venue: `Proc. 17th NZ Geothermal Workshop, 193-198` },
      { year: 2009, title: `A history of numerical modelling of the Wairakei geothermal field (O'Sullivan, Yeh, Mannington)`, venue: `Geothermics 38(1), 155-168` },
    ],
  },

  sections: [
    // ─────────────── 1. motivation ───────────────
    {
      id: 'motivation',
      heading: { en: 'Why this matters', id: 'Kenapa ini penting' },
      body: {
        en: `A lumped or analytical reservoir model — the kind Grant and Bixley systematize — answers a tank-sized question: given pressure and production history, how much more can the field deliver, and for how long? It gives you a bracketed forecast. What it cannot tell you is *where*. Where in the field will pressure draw down fastest? Where will a boiling front or a dry-out zone advance? Where should the next make-up well go, and how will it interfere with its neighbours? Those questions are spatial, and answering them requires a model that resolves the reservoir in three dimensions.

That is what numerical reservoir simulation does: it divides the reservoir into thousands of blocks, each carrying its own pressure, temperature, and phase state, and solves the coupled flow of mass and heat between them through time. O'Sullivan, Pruess, and Lippmann's 2001 review is the field's stocktaking of that capability. Its thesis is historical as much as technical: by 2000, geothermal simulation had crossed from a controversial research specialty into routine engineering practice — applied to more than 100 fields worldwide, with three-dimensional meshes of thousands of blocks run as a matter of course, and TOUGH2 established as the de-facto standard code.

For a dry-steam field, the stakes are concrete. The power plant needs a steam-supply forecast that holds over years, not a nameplate number. Make-up well drilling is the largest recurring capital line, and siting it well — into a zone that still has deliverability, away from wells it would cannibalize — depends on a spatial picture of where the resource still is. Injection (where it is allowed) has to be placed so it supports pressure without prematurely cooling producers. A history-matched numerical model is the only tool that resolves all of this spatially in one forecast.

**⟦TODO-Az: confirm how Darajat's resource is actually managed — whether the operator runs a full distributed numerical model (TOUGH2 / AUTOUGH2 / iTOUGH2 or a commercial code), lumped models, or both, and how steam-supply forecasting is done in practice. Prep §9-F.⟧**`,
        id: `Model reservoir lumped atau analitik — jenis yang Grant dan Bixley sistematisin — jawab pertanyaan seukuran tangki: given pressure dan production history, berapa banyak lagi field bisa deliver, dan berapa lama? Dia kasih forecast yang ke-bracket. Yang dia gak bisa kasih tau itu *di mana*. Di mana di field pressure bakal draw down paling cepet? Di mana boiling front atau dry-out zone bakal maju? Di mana make-up well berikutnya harus ditaruh, dan gimana dia bakal interfere sama tetangganya? Pertanyaan-pertanyaan itu spasial, dan jawabnya butuh model yang resolve reservoir dalam tiga dimensi.

Itu yang numerical reservoir simulation lakuin: dia bagi reservoir jadi ribuan blok, masing-masing bawa pressure, temperature, dan phase state sendiri, dan solve coupled flow mass dan heat di antaranya sepanjang waktu. Review 2001 O'Sullivan, Pruess, dan Lippmann itu stocktaking bidang ini atas kemampuan tersebut. Tesisnya historis sekaligus teknis: pada 2000, geothermal simulation udah nyebrang dari spesialisasi riset kontroversial ke praktek rekayasa rutin — dipakai di lebih dari 100 field di dunia, dengan mesh tiga-dimensi ribuan blok yang dijalanin rutin, dan TOUGH2 mapan sebagai kode standard de-facto.

Buat dry-steam field, stake-nya konkret. Power plant butuh steam-supply forecast yang bertahan bertahun-tahun, bukan angka nameplate. Drilling make-up well itu lini kapital berulang terbesar, dan nyiting-nya dengan baik — ke zona yang masih punya deliverability, jauh dari well yang bakal dia kanibal — tergantung gambaran spasial di mana sumber daya masih ada. Injection (di mana diizinin) harus ditaruh biar dukung pressure tanpa prematurely cooling producer. Model numerik yang history-matched itu satu-satunya alat yang resolve semua ini secara spasial dalam satu forecast.

**⟦TODO-Az: konfirmasi gimana sumber daya Darajat sebenarnya dikelola — apakah operator jalanin full distributed numerical model (TOUGH2 / AUTOUGH2 / iTOUGH2 atau kode komersial), lumped model, atau dua-duanya, dan gimana steam-supply forecasting dilakuin in practice. Prep §9-F.⟧**`
      }
    },

    // ─────────────── 2. intuition ───────────────
    {
      id: 'intuition',
      heading: { en: 'Intuition', id: 'Intuisi' },
      body: {
        en: `Picture the reservoir cut into a grid of blocks. Each block is a small accounting unit that stores two things: **mass** (water as liquid and/or steam, held in the pore space) and **energy** (heat, stored mostly in the rock matrix, partly in the fluid). Blocks exchange mass with their neighbours by pressure-driven flow (Darcy's law, one term per phase) and exchange heat both by that flowing fluid carrying its enthalpy and by conduction through the rock. Write the bookkeeping rule for every block — *what accumulates inside equals what flows across the faces plus what any well injects or extracts* — and you have the simulator. Everything else is thermodynamics and arithmetic at scale.

The workflow that turns this machinery into a field tool has four stages, and the review organizes itself around them:

1. **Conceptual model.** Before any grid, the modeller synthesizes geology, well logs, downhole temperature and pressure profiles, fluid chemistry, and geophysics into a qualitative picture: the reservoir's extent and boundaries, the deep upflow zone feeding it, the permeability structure, and the natural phase distribution (liquid, two-phase, or a vapour-dominated steam zone).

2. **Natural state.** Run the model to a steady pre-exploitation state — the reservoir as it sat for millennia before the first well — and tune permeabilities and the deep heat-and-mass inflow until the simulated temperatures and pressures match what the first wells measured. This fixes the starting condition.

3. **History matching.** Impose the actual production (and injection) history as sources and sinks, and adjust parameters until the model reproduces what the field actually did — pressure decline, changes in produced enthalpy, flow rates over years.

4. **Prediction.** With a calibrated model, run forward under proposed development scenarios to forecast pressure, dry-out, sustainable generation, and resource life.

The intuition for a dry-steam field is worth stating carefully, because the published simulation literature is dominated by liquid and two-phase fields. In a liquid-dominated field, exploitation draws pressure down until water boils in place, a two-phase zone grows, and produced enthalpy rises — that enthalpy rise is the classic diagnostic. A vapour-dominated (dry-steam) field largely sits *past* that transition: the mobile phase is already steam, storativity is low, so pressure tends to fall more directly with mass withdrawal, and the modelling concerns shift to steam-zone stability, central dry-out, and condensation/recharge at the margins.`,
        id: `Bayangin reservoir dipotong jadi grid blok. Tiap blok itu unit akunting kecil yang nyimpen dua hal: **massa** (air sebagai liquid dan/atau steam, ditahan di pore space) dan **energi** (panas, disimpen sebagian besar di rock matrix, sebagian di fluid). Blok tukeran massa sama tetangganya lewat pressure-driven flow (hukum Darcy, satu term per fase) dan tukeran panas baik lewat fluid yang ngalir bawa enthalpy-nya maupun lewat konduksi lewat rock. Tulis aturan pembukuan buat tiap blok — *yang ke-akumulasi di dalam sama dengan yang ngalir lewat muka ditambah yang well inject atau extract* — dan kamu punya simulator-nya. Sisanya termodinamika dan aritmetika dalam skala besar.

Workflow yang ngubah mesin ini jadi alat field punya empat tahap, dan review-nya ngatur dirinya di sekitar itu:

1. **Conceptual model.** Sebelum grid apapun, modeller nyintesis geologi, well log, profil temperature dan pressure downhole, kimia fluid, dan geofisika jadi gambaran kualitatif: extent dan boundary reservoir, deep upflow zone yang ngasih makan, struktur permeability, dan distribusi fase natural (liquid, two-phase, atau vapour-dominated steam zone).

2. **Natural state.** Jalanin model ke steady pre-exploitation state — reservoir seperti dia duduk ribuan tahun sebelum well pertama — dan tune permeability dan deep heat-and-mass inflow sampai temperature dan pressure simulasi match sama yang well pertama ukur. Ini ngunci kondisi awal.

3. **History matching.** Terapin production (dan injection) history aktual sebagai source dan sink, dan adjust parameter sampai model reproduce apa yang field beneran lakuin — pressure decline, perubahan produced enthalpy, flow rate sepanjang tahun.

4. **Prediction.** Dengan model yang calibrated, jalanin maju di bawah skenario development yang diusulin buat forecast pressure, dry-out, sustainable generation, dan umur sumber daya.

Intuisi buat dry-steam field worth dinyatakan hati-hati, karena literatur simulasi yang dipublikasi didominasi field liquid dan two-phase. Di field liquid-dominated, eksploitasi narik pressure turun sampai air mendidih in place, two-phase zone tumbuh, dan produced enthalpy naik — enthalpy rise itu diagnostik klasik. Field vapour-dominated (dry-steam) sebagian besar duduk *lewat* transisi itu: fase mobile-nya udah steam, storativity rendah, jadi pressure cenderung turun lebih langsung sama mass withdrawal, dan concern modelling-nya geser ke stabilitas steam-zone, central dry-out, dan condensation/recharge di margin.`
      }
    },

    // ─────────────── 3. formalization ───────────────
    {
      id: 'formalization',
      heading: { en: 'The governing equations', id: 'Persamaan pengatur' },
      body: {
        en: `The TOUGH2 lineage these authors built writes its conservation laws in **integral form** over an arbitrary block $V_n$ — and that choice is the whole reason the discretization is so flexible. For each component $\\kappa$ (the mass components — water, and optionally a non-condensible gas such as CO₂ — plus one more index for heat), the rule is: the rate of change of what is accumulated in the block equals the net flux across its surface $\\Gamma_n$ plus any source or sink inside it.

$$\\frac{d}{dt}\\int_{V_n} M^{\\kappa}\\,dV = \\int_{\\Gamma_n} \\mathbf{F}^{\\kappa}\\cdot\\mathbf{n}\\,d\\Gamma + \\int_{V_n} q^{\\kappa}\\,dV$$

The **mass accumulation** in a block sums, over the fluid phases $\\beta$ (liquid, vapour), the porosity times each phase's saturation, density, and mass fraction of the component:

$$M^{\\kappa} = \\phi \\sum_{\\beta} S_{\\beta}\\,\\rho_{\\beta}\\,X^{\\kappa}_{\\beta}$$

Because one water component lives in *both* the liquid and the vapour phase, this single term is what couples boiling and condensation into the bookkeeping. The **energy accumulation** is dominated by the rock, not the fluid:

$$M^{h} = (1-\\phi)\\,\\rho_R C_R T + \\phi \\sum_{\\beta} S_{\\beta}\\,\\rho_{\\beta}\\,u_{\\beta}$$

— the first term is heat held in the rock matrix, and in a geothermal reservoir it dwarfs the fluid term. **Flow** is a multiphase extension of Darcy's law, one flux per phase, driven by the pressure gradient minus gravity and scaled by the phase mobility (relative permeability over viscosity):

$$\\mathbf{F}_{\\beta} = -k\\,\\frac{k_{r,\\beta}\\,\\rho_{\\beta}}{\\mu_{\\beta}}\\left(\\nabla P_{\\beta} - \\rho_{\\beta}\\,\\mathbf{g}\\right)$$

and **heat** moves both by conduction (Fourier's law) and by each flowing phase carrying its specific enthalpy $h_{\\beta}$:

$$\\mathbf{F}^{h} = -\\lambda\\,\\nabla T + \\sum_{\\beta} h_{\\beta}\\,\\mathbf{F}_{\\beta}$$

The latent heat of steam rides inside $h_{\\beta}$, which is why a vapour phase transports so much energy per unit mass.

**Numerically**, four choices define the method. (1) The **integral finite difference method** (Narasimhan and Witherspoon, 1976) discretizes the integral form directly, so a block needs only its volume, its interface areas with neighbours, the nodal distances, and a gravity projection — no global coordinate system, hence arbitrary irregular 3-D grids at no penalty, and on a regular grid the method reduces exactly to conventional finite differences, so the geometric flexibility costs nothing in accuracy. (2) **Upstream weighting** of the mobility at each interface (with harmonic weighting of absolute permeability), combined with (3) **fully implicit** time stepping, is what keeps the scheme stable when a phase appears or disappears (boiling, dry-out). (4) The result is a large set of coupled non-linear algebraic equations solved each timestep by **Newton-Raphson**, with the set of primary variables per block *switched* according to its phase state. Around this core sits a modular **equation-of-state** layer: EOS1 for pure water/steam (the standard geothermal choice), EOS2 for water + CO₂, EWASG for water + salt + gas. Fractured rock is handled by the **MINC** method (Pruess and Narasimhan, 1985) as a geometric preprocessing of the mesh.`,
        id: `Lineage TOUGH2 yang penulis ini bangun nulis hukum konservasinya dalam **bentuk integral** atas blok sembarang $V_n$ — dan pilihan itu seluruh alasan kenapa diskretisasinya begitu fleksibel. Buat tiap komponen $\\kappa$ (komponen massa — air, dan opsional gas non-condensible seperti CO₂ — plus satu indeks lagi buat panas), aturannya: laju perubahan yang ke-akumulasi di blok sama dengan net flux lewat permukaannya $\\Gamma_n$ plus source atau sink apapun di dalamnya.

$$\\frac{d}{dt}\\int_{V_n} M^{\\kappa}\\,dV = \\int_{\\Gamma_n} \\mathbf{F}^{\\kappa}\\cdot\\mathbf{n}\\,d\\Gamma + \\int_{V_n} q^{\\kappa}\\,dV$$

**Mass accumulation** di blok nge-sum, atas fase fluid $\\beta$ (liquid, vapour), porosity dikali saturation, density, dan mass fraction komponennya tiap fase:

$$M^{\\kappa} = \\phi \\sum_{\\beta} S_{\\beta}\\,\\rho_{\\beta}\\,X^{\\kappa}_{\\beta}$$

Karena satu komponen air hidup di *kedua* fase liquid dan vapour, term tunggal ini yang nge-couple boiling dan condensation ke pembukuan. **Energy accumulation** didominasi rock, bukan fluid:

$$M^{h} = (1-\\phi)\\,\\rho_R C_R T + \\phi \\sum_{\\beta} S_{\\beta}\\,\\rho_{\\beta}\\,u_{\\beta}$$

— term pertama itu panas yang ditahan di rock matrix, dan di reservoir geothermal dia jauh lebih besar dari term fluid. **Flow** itu ekstensi multiphase dari hukum Darcy, satu flux per fase, di-drive sama pressure gradient dikurang gravity dan di-scale sama phase mobility (relative permeability dibagi viscosity):

$$\\mathbf{F}_{\\beta} = -k\\,\\frac{k_{r,\\beta}\\,\\rho_{\\beta}}{\\mu_{\\beta}}\\left(\\nabla P_{\\beta} - \\rho_{\\beta}\\,\\mathbf{g}\\right)$$

dan **heat** gerak baik lewat konduksi (hukum Fourier) maupun lewat tiap fase yang ngalir bawa specific enthalpy-nya $h_{\\beta}$:

$$\\mathbf{F}^{h} = -\\lambda\\,\\nabla T + \\sum_{\\beta} h_{\\beta}\\,\\mathbf{F}_{\\beta}$$

Latent heat steam naik di dalam $h_{\\beta}$, itu kenapa fase vapour transport energi segitu banyak per unit massa.

**Secara numerik**, empat pilihan ngedefinisiin metodenya. (1) **Integral finite difference method** (Narasimhan dan Witherspoon, 1976) diskretisasi bentuk integral langsung, jadi blok cuma butuh volume-nya, interface area sama tetangga, jarak nodal, dan proyeksi gravity — gak ada global coordinate system, makanya grid 3-D irregular sembarang tanpa penalty, dan di grid reguler metodenya tereduksi persis ke finite difference konvensional, jadi fleksibilitas geometris gak ngorbanin akurasi. (2) **Upstream weighting** mobility di tiap interface (dengan harmonic weighting absolute permeability), dikombinasi sama (3) time stepping **fully implicit**, itu yang njaga skema tetap stabil pas fase muncul atau hilang (boiling, dry-out). (4) Hasilnya set besar persamaan aljabar non-linear coupled yang di-solve tiap timestep sama **Newton-Raphson**, dengan set primary variable per blok di-*switch* sesuai phase state-nya. Di sekitar core ini ada layer **equation-of-state** modular: EOS1 buat pure water/steam (pilihan geothermal standar), EOS2 buat water + CO₂, EWASG buat water + salt + gas. Fractured rock di-handle sama **MINC** method (Pruess dan Narasimhan, 1985) sebagai preprocessing geometris dari mesh.`
      }
    },

    // ─────────────── 4. worked-example ───────────────
    {
      id: 'worked-example',
      heading: { en: 'Worked example', id: 'Contoh kerjaan' },
      body: {
        en: `Two small calculations make the machinery concrete. Both are deliberately dry-steam-safe, and all numbers below are illustrative teaching values — physically realistic but not a calibration of any particular field.

**Example 1 — a single-block natural state.** Collapse the whole reservoir to one well-mixed block at steady state. Steady means nothing accumulates, so the two balance laws become simple equalities. Mass: the deep upflow $q_{in}$ equals the discharge $q_{out}$. Energy: the deep heat input $Q_{in}$ equals the enthalpy carried out by that discharge plus conduction lost through the caprock,

$$Q_{in} = q_{out}\\,h_{out} + \\lambda\\,A\\,\\frac{\\Delta T}{\\Delta z}$$

Take a steam discharge $q_{out} = 100$ kg/s at a dry-steam enthalpy $h_{out} \\approx 2790$ kJ/kg, a caprock area $A = 10\\ \\text{km}^2 = 10^7\\ \\text{m}^2$, conductivity $\\lambda \\approx 2\\ \\text{W/m·K}$, and a caprock gradient $\\Delta T/\\Delta z \\approx 0.1\\ \\text{K/m}$. The convective term is $100 \\times 2790 = 279\\ \\text{MW}$; the conductive loss is $2 \\times 10^7 \\times 0.1 = 2\\ \\text{MW}$. So the deep heat input needed to sustain this natural state is about $281$ MW — and the lesson is in the ratio: conduction through the caprock is under 1% of the budget. Geothermal natural states are *convection-dominated*, which is exactly why a model must resolve where the hot fluid goes, not just how heat diffuses.

**Example 2 — a well as a source term, coupled to deliverability.** A producing well is not a fixed extraction rate in the simulator; it is a sink $q$ in the block's mass balance whose size depends on the block pressure $P$ that the simulator is solving for. For a dry-steam well the inflow is compressible, so the natural form is pressure-squared (the same structure as the Acuña wellbore relation):

$$q = C\\left(P^2 - P_{wb}^2\\right)$$

against a fixed flowing bottomhole pressure $P_{wb}$. Take $C = 0.05$ and $P_{wb} = 10$ bar. At an early block pressure $P = 30$ bar, $q = 0.05\\,(900 - 100) = 40$ kg/s. Years later the block has drawn down to $P = 26$ bar, and $q = 0.05\\,(676 - 100) = 28.8$ kg/s. A 13% pressure drop produces a 28% rate drop — the compressible, pressure-squared signature. (A linear, liquid-style law $q = PI\\,(P - P_{wb})$ would give only a 20% drop for the same pressure change; the dry-steam well declines faster.) The point is the *coupling*: the simulator does not prescribe the falling rate; it falls out of the model because the block pressure and the well draw on each other every timestep. This is precisely the boundary condition that the Acuña $(C_{WB}, PI)$ decomposition parameterizes per well.

**⟦TODO-Az: confirm the dry-steam well-on-deliverability form actually used in the Darajat field model, and whether near-well non-Darcy (turbulent skin) effects are included — prep §9-D, §9-E(5).⟧**`,
        id: `Dua perhitungan kecil bikin mesinnya konkret. Dua-duanya sengaja dry-steam-safe, dan semua angka di bawah itu nilai pengajaran ilustratif — realistis secara fisik tapi bukan kalibrasi field tertentu manapun.

**Contoh 1 — natural state satu blok.** Runtuhin seluruh reservoir jadi satu blok well-mixed di steady state. Steady berarti gak ada yang ke-akumulasi, jadi dua hukum balance jadi kesamaan sederhana. Mass: deep upflow $q_{in}$ sama dengan discharge $q_{out}$. Energy: deep heat input $Q_{in}$ sama dengan enthalpy yang dibawa keluar sama discharge itu plus konduksi yang hilang lewat caprock,

$$Q_{in} = q_{out}\\,h_{out} + \\lambda\\,A\\,\\frac{\\Delta T}{\\Delta z}$$

Ambil steam discharge $q_{out} = 100$ kg/s di dry-steam enthalpy $h_{out} \\approx 2790$ kJ/kg, caprock area $A = 10\\ \\text{km}^2 = 10^7\\ \\text{m}^2$, conductivity $\\lambda \\approx 2\\ \\text{W/m·K}$, dan gradient caprock $\\Delta T/\\Delta z \\approx 0.1\\ \\text{K/m}$. Term konvektif itu $100 \\times 2790 = 279\\ \\text{MW}$; conductive loss-nya $2 \\times 10^7 \\times 0.1 = 2\\ \\text{MW}$. Jadi deep heat input yang dibutuhin buat sustain natural state ini sekitar $281$ MW — dan pelajarannya ada di rasio: konduksi lewat caprock di bawah 1% dari budget. Natural state geothermal itu *convection-dominated*, persis kenapa model harus resolve ke mana hot fluid pergi, bukan cuma gimana panas berdifusi.

**Contoh 2 — well sebagai source term, coupled ke deliverability.** Producing well itu bukan fixed extraction rate di simulator; dia sink $q$ di mass balance blok yang besarnya tergantung block pressure $P$ yang simulator lagi solve. Buat dry-steam well inflow-nya compressible, jadi bentuk naturalnya pressure-squared (struktur sama kayak relasi wellbore Acuña):

$$q = C\\left(P^2 - P_{wb}^2\\right)$$

terhadap flowing bottomhole pressure $P_{wb}$ yang fixed. Ambil $C = 0.05$ dan $P_{wb} = 10$ bar. Di block pressure awal $P = 30$ bar, $q = 0.05\\,(900 - 100) = 40$ kg/s. Bertahun kemudian blok udah draw down ke $P = 26$ bar, dan $q = 0.05\\,(676 - 100) = 28.8$ kg/s. Pressure drop 13% ngehasilin rate drop 28% — signature compressible, pressure-squared. (Hukum linear ala-liquid $q = PI\\,(P - P_{wb})$ cuma bakal ngasih drop 20% buat perubahan pressure yang sama; dry-steam well decline lebih cepet.) Poinnya itu *coupling*-nya: simulator gak nge-prescribe rate yang turun; dia jatuh keluar dari model karena block pressure dan well saling tarik tiap timestep. Ini persis boundary condition yang dekomposisi Acuña $(C_{WB}, PI)$ parameterize per well.

**⟦TODO-Az: konfirmasi bentuk well-on-deliverability dry-steam yang sebenarnya dipakai di model field Darajat, dan apakah efek non-Darcy near-well (turbulent skin) di-include — prep §9-D, §9-E(5).⟧**`
      }
    },

    // ─────────────── 5. applications ───────────────
    {
      id: 'applications',
      heading: { en: 'Applications by audience', id: 'Aplikasi per audience' },
      body: {
        en: `### For the advanced researcher / R&D engineer

The frontier the review points toward is **inverse modelling**. iTOUGH2 (Finsterle and Pruess) reframes history matching as a formal estimation problem: choose model parameters — block permeabilities, the deep inflow, relative-permeability parameters — to minimize a weighted least-squares objective $S = \\sum_i (z^*_i - z_i)^2/\\sigma_i^2$ between observed and computed quantities (pressures, temperatures, flowing enthalpies). The weights $\\sigma_i$ are what put pressure, temperature, and enthalpy data on a common footing; the Levenberg-Marquardt minimization then returns not just a best fit but a parameter covariance — uncertainties and correlations — that can be propagated onto the forecast. That turns "the model predicts X" into "the model predicts X ± Y," which is the form a sustainability decision actually needs. Beyond calibration, the review's forward-looking sections point to coupling: reactive transport (TOUGHREACT, for scaling and fluid-rock interaction), geomechanics (subsidence, induced seismicity), and supercritical/very-deep resources.

### For the field reservoir engineer

This is the operational core: build a conceptual model, grid it, calibrate a natural state, history-match the production record, then predict. The recurring temptation the review implicitly warns against is over-fitting — a model with thousands of blocks has more than enough freedom to match any history while predicting badly, which is exactly why the inverse-modelling machinery emphasizes parameter uncertainty and parsimony. The deliverable that matters is a forecast of field-wide steam supply and the spatial map of where deliverability remains — the inputs to make-up well siting and injection placement.

A natural link runs to the Acuña deliverability framework. **⟦TODO-Az: this connection is a synthesis — the 2001 review predates Acuña 2008 and does not cite it; present it as how deliverability relations serve as well boundary conditions generally, and confirm it matches Darajat practice — prep §9-D.⟧** The idea: rather than letting the simulator's optimizer freely tune near-well parameters, you can pin them with an independently-measured productivity index $PI$ from a deliverability or pressure-transient test. The existing [Acuña 2008](item:acuna-2008) module describes exactly this use, citing Star Energy and Pertamina practice at Wayang Windu and Kamojang.

### For the operations team

The model is the engine behind the rolling steam-supply forecast. Each producing well's predicted rate at its planned wellhead pressure is summed across the field and checked against power-plant demand and turbine availability; the forecast updates as monitoring data refine the calibration. Practically, that means the operations team's daily surveillance — wellhead pressures, flow rates, produced enthalpies — is not just bookkeeping; it is the stream of observations that keeps the field model honest. When the model and the measurements diverge, that divergence is itself the signal: the conceptual model is missing something (a new boiling zone, a recharge boundary, interference from a recent well), and it is time to re-calibrate.

**⟦TODO-Az: confirm the Darajat-specific facts the prep could not close — the producing-well count (module text elsewhere says 49; public sources suggest ~39: producers-only vs total stock? — AZ5), the operator's working simulator, the NCG fraction and whether it forces EOS2 over EOS1, and single- vs dual-porosity — prep §9-F.⟧**`,
        id: `### Untuk advanced researcher / R&D engineer

Frontier yang review ini tunjuk itu **inverse modelling**. iTOUGH2 (Finsterle dan Pruess) nge-reframe history matching jadi masalah estimasi formal: pilih parameter model — block permeability, deep inflow, parameter relative-permeability — buat minimize objective weighted least-squares $S = \\sum_i (z^*_i - z_i)^2/\\sigma_i^2$ antara kuantitas observed dan computed (pressure, temperature, flowing enthalpy). Weight $\\sigma_i$ itu yang naruh data pressure, temperature, dan enthalpy di pijakan yang sama; minimisasi Levenberg-Marquardt terus balikin bukan cuma best fit tapi parameter covariance — uncertainty dan korelasi — yang bisa dipropagasi ke forecast. Itu ngubah "model prediksi X" jadi "model prediksi X ± Y", yang itu bentuk yang keputusan sustainability beneran butuh. Selain kalibrasi, section forward-looking review-nya nunjuk ke coupling: reactive transport (TOUGHREACT, buat scaling dan fluid-rock interaction), geomechanics (subsidence, induced seismicity), dan sumber daya supercritical/sangat-dalam.

### Untuk field reservoir engineer

Ini core operasional: bangun conceptual model, grid-in, calibrate natural state, history-match record produksi, terus predict. Godaan berulang yang review ini implisit ngingetin itu over-fitting — model dengan ribuan blok punya lebih dari cukup kebebasan buat match history apapun sambil prediksi jelek, persis kenapa mesin inverse-modelling nekanin parameter uncertainty dan parsimony. Deliverable yang penting itu forecast steam supply field-wide dan peta spasial di mana deliverability masih ada — input buat make-up well siting dan injection placement.

Link natural jalan ke framework deliverability Acuña. **⟦TODO-Az: koneksi ini sintesis — review 2001 mendahului Acuña 2008 dan gak nyitir dia; sajiin sebagai gimana relasi deliverability jadi boundary condition well secara umum, dan konfirmasi cocok sama praktek Darajat — prep §9-D.⟧** Idenya: daripada biarin optimizer simulator bebas tune parameter near-well, kamu bisa pin mereka pake productivity index $PI$ yang diukur independent dari deliverability atau pressure-transient test. Module [Acuña 2008](item:acuna-2008) yang udah ada ngejelasin persis penggunaan ini, nyitir praktek Star Energy dan Pertamina di Wayang Windu dan Kamojang.

### Untuk operations team

Model itu mesin di balik rolling steam-supply forecast. Predicted rate tiap producing well di wellhead pressure rencananya di-sum across field dan dicek lawan power-plant demand dan turbine availability; forecast-nya update pas monitoring data ngehalusin kalibrasi. Praktis, itu berarti daily surveillance operations team — wellhead pressure, flow rate, produced enthalpy — bukan cuma pembukuan; itu aliran observasi yang njaga model field tetap jujur. Pas model dan measurement divergen, divergensi itu sendiri sinyalnya: conceptual model-nya kehilangan sesuatu (boiling zone baru, recharge boundary, interferensi dari well baru), dan saatnya re-calibrate.

**⟦TODO-Az: konfirmasi fakta spesifik-Darajat yang prep gak bisa tutup — jumlah producing well (teks module di tempat lain bilang 49; sumber publik suggest ~39: producer-only vs total stock? — AZ5), simulator kerja operator, fraksi NCG dan apakah dia maksa EOS2 di atas EOS1, dan single- vs dual-porosity — prep §9-F.⟧**`
      }
    },

    // ─────────────── 6. practice ───────────────
    {
      id: 'practice',
      heading: { en: 'Practice', id: 'Latihan' },
      body: {
        en: `**1.** In the integral mass-balance, name the three quantities a single block contributes to the bookkeeping, and state in one line what physically sets each.

<details><summary>Answer</summary>
(i) The *accumulation* $M^{\\kappa}$ — what is stored — set by porosity, phase saturations, densities, and component mass fractions. (ii) The *flux* $\\mathbf{F}^{\\kappa}$ across each interface — set by the multiphase Darcy law (pressure gradient, gravity, phase mobility) for mass, plus conduction for heat. (iii) The *source/sink* $q^{\\kappa}$ — set by any well producing from or injecting into the block. The simulator enforces accumulation-rate = net flux + source for every block, every timestep.
</details>

**2.** Why does the energy balance in a geothermal reservoir treat the rock heat term $(1-\\phi)\\rho_R C_R T$ as dominant, and what practical consequence does that have for how long a field can produce?

<details><summary>Answer</summary>
The rock matrix occupies most of the volume ($1-\\phi$ with porosity often 0.05–0.15) and has substantial heat capacity, so it stores far more thermal energy than the fluid in the pores. Consequently most of the heat a field produces over its life is *mined from the rock*, with the fluid acting as the carrier that sweeps it out. The practical consequence: a field's thermal lifetime is governed by how effectively recharge and reinjection re-sweep heat from rock that the produced fluid has not yet contacted — which is a spatial question a distributed model is built to answer, and a lumped model cannot.
</details>

**3.** A simulator uses 100% upstream weighting of mobility (relative permeability) at block interfaces, with fully implicit time stepping. What failure is this combination protecting against?

<details><summary>Answer</summary>
Phase appearance/disappearance — boiling and dry-out. When a steam (or liquid) phase appears or vanishes in a block between timesteps, a centred or explicit scheme would demand impractically tiny timesteps for stability and can produce oscillations or non-physical results at the moving phase front. Taking the mobility from the upstream block and solving implicitly makes the scheme unconditionally stable through those transitions, so the simulator can take large timesteps across years of production history without the phase front destabilizing it.
</details>

**4.** A field model with several thousand blocks reproduces 20 years of pressure history almost perfectly, yet its 10-year forecast is later badly wrong. Give the most likely methodological cause and the safeguard the review's inverse-modelling tools provide.

<details><summary>Answer</summary>
Over-fitting. A model with thousands of adjustable parameters has far more freedom than the history constrains, so it can match the past by tuning parameters to values that carry no predictive content (a good fit, a bad model). The safeguard from iTOUGH2-style inverse modelling: it returns a *parameter covariance* — which parameters the data actually constrain and which are unidentifiable — plus uncertainty propagated onto the forecast. That exposes when a confident-looking history match rests on poorly-determined parameters, pushing the modeller toward parsimony (fewer, better-constrained parameters) and toward reporting forecasts as ranges rather than single lines.
</details>`,
        id: `**1.** Di integral mass-balance, sebutin tiga kuantitas yang satu blok kontribusiin ke pembukuan, dan nyatain dalam satu baris apa yang secara fisik nge-set masing-masing.

<details><summary>Jawaban</summary>
(i) *Accumulation* $M^{\\kappa}$ — yang disimpen — di-set sama porosity, phase saturation, density, dan component mass fraction. (ii) *Flux* $\\mathbf{F}^{\\kappa}$ lewat tiap interface — di-set sama multiphase Darcy law (pressure gradient, gravity, phase mobility) buat mass, plus konduksi buat heat. (iii) *Source/sink* $q^{\\kappa}$ — di-set sama well apapun yang produksi dari atau inject ke blok. Simulator nge-enforce accumulation-rate = net flux + source buat tiap blok, tiap timestep.
</details>

**2.** Kenapa energy balance di reservoir geothermal nganggep rock heat term $(1-\\phi)\\rho_R C_R T$ dominan, dan konsekuensi praktis apa yang itu punya buat berapa lama field bisa produksi?

<details><summary>Jawaban</summary>
Rock matrix nempatin sebagian besar volume ($1-\\phi$ dengan porosity sering 0.05–0.15) dan punya heat capacity substansial, jadi dia nyimpen energi termal jauh lebih banyak dari fluid di pori. Konsekuensinya sebagian besar panas yang field produksi sepanjang umurnya itu *ditambang dari rock*, dengan fluid bertindak sebagai carrier yang nyapunya keluar. Konsekuensi praktis: thermal lifetime field diatur sama seberapa efektif recharge dan reinjection nyapu ulang panas dari rock yang produced fluid belum sentuh — itu pertanyaan spasial yang model distributed dibangun buat jawab, dan model lumped gak bisa.
</details>

**3.** Simulator pake 100% upstream weighting mobility (relative permeability) di block interface, dengan time stepping fully implicit. Kegagalan apa yang kombinasi ini lindungin?

<details><summary>Jawaban</summary>
Phase appearance/disappearance — boiling dan dry-out. Pas fase steam (atau liquid) muncul atau hilang di blok antar timestep, skema centred atau explicit bakal nuntut timestep kecil gak praktis buat stabilitas dan bisa ngehasilin osilasi atau hasil non-fisik di moving phase front. Ngambil mobility dari blok upstream dan solve implicit bikin skema unconditionally stable lewat transisi itu, jadi simulator bisa ambil timestep besar across bertahun production history tanpa phase front nge-destabilize-nya.
</details>

**4.** Model field dengan beberapa ribu blok reproduce 20 tahun pressure history hampir sempurna, tapi forecast 10-tahun-nya kemudian salah parah. Kasih penyebab metodologis paling mungkin dan safeguard yang alat inverse-modelling review ini sediain.

<details><summary>Jawaban</summary>
Over-fitting. Model dengan ribuan parameter adjustable punya jauh lebih banyak kebebasan dari yang history constrain, jadi dia bisa match masa lalu dengan nge-tune parameter ke nilai yang gak bawa konten prediktif (fit bagus, model jelek). Safeguard dari inverse modelling ala-iTOUGH2: dia balikin *parameter covariance* — parameter mana yang data beneran constrain dan mana yang unidentifiable — plus uncertainty yang dipropagasi ke forecast. Itu nge-expose pas history match yang keliatan confident bersandar di parameter yang ditentuin buruk, ndorong modeller ke parsimony (parameter lebih sedikit, lebih ter-constrain) dan ke nge-report forecast sebagai range bukan garis tunggal.
</details>`
      }
    },

    // ─────────────── 7. connections ───────────────
    {
      id: 'connections',
      heading: { en: 'Connections', id: 'Koneksi' },
      body: {
        en: `- **Prereq**: [Grant & Bixley 2011](item:grant-bixley-2011) is the lumped/analytical tier — tank and box models that need only pressure and production history and return bracketed forecasts. This item is the distributed-parameter tier that sits on top: full three-dimensional numerical simulation that resolves spatial heterogeneity, phase fronts, and natural state at the cost of far more data and calibration. Read Grant-Bixley first for the analytical foundation; the numerical model is the natural next step when "where" matters.
- **Related to**: [Acuña 2008](item:acuna-2008) supplies the per-well deliverability relation $(C_{WB}, PI)$ that serves as a production-well boundary condition (source term) inside a field simulator. The link is reciprocal — the Acuña module points here for the simulator context. (This connection is a cross-domain synthesis: deliverability relations are how production wells enter a simulator as source terms in general; the 2001 review predates Acuña 2008 and does not cite it.)
- **Upstream of this**: [Cumming 2009](item:cumming-2009) — the surface-exploration conceptual model (resistivity, geochemistry, geology) is the qualitative picture a numerical mesh is built to honour; it is the front end of the modelling workflow.
- **Downstream of this**: [DiPippo 2016](item:dipippo-2016) — the power-plant thermodynamics consume the mass and enthalpy this model forecasts; for a dry-steam field the steam goes directly to the turbine.
- **Property inputs / sanity bounds**: [Bjornsson & Bodvarsson 1990](item:bjornsson-bodvarsson-1990) — empirical permeability, porosity, and temperature ranges across world fields give the prior bounds for the rock properties assigned to grid blocks and for sanity-checking history-matched estimates.`,
        id: `- **Prereq**: [Grant & Bixley 2011](item:grant-bixley-2011) itu tier lumped/analitik — model tank dan box yang cuma butuh pressure dan production history dan balikin forecast yang ke-bracket. Item ini tier distributed-parameter yang duduk di atasnya: full simulasi numerik tiga-dimensi yang resolve heterogenitas spasial, phase front, dan natural state dengan ongkos data dan kalibrasi jauh lebih banyak. Baca Grant-Bixley dulu buat fondasi analitik; model numerik itu langkah natural berikutnya pas "di mana" penting.
- **Related to**: [Acuña 2008](item:acuna-2008) nyediain relasi deliverability per-well $(C_{WB}, PI)$ yang jadi boundary condition production-well (source term) di dalam field simulator. Link-nya resiprokal — module Acuña nunjuk ke sini buat konteks simulator. (Koneksi ini sintesis cross-domain: relasi deliverability itu cara producing well masuk ke simulator sebagai source term secara umum; review 2001 mendahului Acuña 2008 dan gak nyitir dia.)
- **Upstream dari ini**: [Cumming 2009](item:cumming-2009) — conceptual model surface-exploration (resistivity, geochemistry, geologi) itu gambaran kualitatif yang numerical mesh dibangun buat honour; itu front end dari workflow modelling.
- **Downstream dari ini**: [DiPippo 2016](item:dipippo-2016) — termodinamika power-plant ngonsumsi mass dan enthalpy yang model ini forecast; buat dry-steam field steam-nya langsung ke turbine.
- **Property input / sanity bound**: [Bjornsson & Bodvarsson 1990](item:bjornsson-bodvarsson-1990) — range permeability, porosity, dan temperature empiris across field dunia kasih prior bound buat rock property yang di-assign ke grid block dan buat sanity-check estimasi history-matched.`
      }
    },

    // ─────────────── 8. sources ───────────────
    {
      id: 'sources',
      heading: { en: 'Sources', id: 'Sumber' },
      body: {
        en: `- **O'Sullivan, M. J., Pruess, K., and Lippmann, M. J.** (2001). "State of the art of geothermal reservoir simulation." *Geothermics*, 30(4), 395-429. The canonical state-of-the-art survey; also issued as Lawrence Berkeley National Laboratory Report LBNL-44699. **(This item.)**
- **Pruess, K., Oldenburg, C. M., and Moridis, G. J.** (1999). "TOUGH2 User's Guide, Version 2." *Lawrence Berkeley National Laboratory Report LBNL-43134*. The standard manual for the integral finite difference method, EOS modules, and the Newton-Raphson solution used here.
- **Pruess, K., and Narasimhan, T. N.** (1985). "A practical method for modeling fluid and heat flow in fractured porous media." *Society of Petroleum Engineers Journal*, 25(1), 14-26. The MINC method for fractured rock.
- **Finsterle, S., and Pruess, K.** (1995). "Automatic history matching of geothermal field performance." *Proceedings of the 17th New Zealand Geothermal Workshop*, 193-198. A representative iTOUGH2 inverse-modelling application to a geothermal field.
- **Narasimhan, T. N., and Witherspoon, P. A.** (1976). "An integrated finite difference method for analyzing fluid flow in porous media." *Water Resources Research*, 12(1), 57-64. The discretization the TOUGH family rests on.
- **O'Sullivan, M. J.** (1985). "Geothermal reservoir simulation." *International Journal of Energy Research*, 9(3), 319-332. The lead author's earlier single-author review — direct precursor to this paper.`,
        id: `- **O'Sullivan, M. J., Pruess, K., dan Lippmann, M. J.** (2001). "State of the art of geothermal reservoir simulation." *Geothermics*, 30(4), 395-429. Survey state-of-the-art kanonik; juga diterbitkan sebagai Laporan Lawrence Berkeley National Laboratory LBNL-44699. **(Item ini.)**
- **Pruess, K., Oldenburg, C. M., dan Moridis, G. J.** (1999). "TOUGH2 User's Guide, Version 2." *Lawrence Berkeley National Laboratory Report LBNL-43134*. Manual standar buat integral finite difference method, EOS module, dan solusi Newton-Raphson yang dipake di sini.
- **Pruess, K., dan Narasimhan, T. N.** (1985). "A practical method for modeling fluid and heat flow in fractured porous media." *Society of Petroleum Engineers Journal*, 25(1), 14-26. MINC method buat fractured rock.
- **Finsterle, S., dan Pruess, K.** (1995). "Automatic history matching of geothermal field performance." *Proceedings of the 17th New Zealand Geothermal Workshop*, 193-198. Aplikasi inverse-modelling iTOUGH2 representatif ke field geothermal.
- **Narasimhan, T. N., dan Witherspoon, P. A.** (1976). "An integrated finite difference method for analyzing fluid flow in porous media." *Water Resources Research*, 12(1), 57-64. Diskretisasi yang keluarga TOUGH bersandar.
- **O'Sullivan, M. J.** (1985). "Geothermal reservoir simulation." *International Journal of Energy Research*, 9(3), 319-332. Review single-author lebih awal dari lead author — precursor langsung ke paper ini.`
      }
    },
  ],

  audio: { enabled: true },

  selfTest: [
    {
      sectionId: 'intuition',
      question: {
        en: 'Name the four stages of the geothermal reservoir-modelling workflow in order, and state in one phrase what each stage produces or calibrates against.',
        id: 'Sebutin empat tahap workflow reservoir-modelling geothermal secara berurutan, dan nyatain dalam satu frasa apa yang tiap tahap hasilin atau calibrate terhadap.'
      },
      prompt: { en: 'Before continuing, try answering:', id: 'Sebelum lanjut, coba jawab:' },
      answer: {
        en: '(1) Conceptual model — synthesize geology, well logs, downhole T/P, chemistry, and geophysics into a qualitative picture of extent, boundaries, upflow, permeability structure, and phase distribution. (2) Natural state — run to steady pre-exploitation state and calibrate against the undisturbed temperature and pressure profiles the first wells measured. (3) History matching — impose the real production/injection record and calibrate against observed pressure decline, produced enthalpy, and flow rates. (4) Prediction — with the calibrated model, run forward under development scenarios to forecast pressure, dry-out, sustainable generation, and resource life. Each later stage depends on the calibration fixed by the earlier ones.',
        id: '(1) Conceptual model — nyintesis geologi, well log, T/P downhole, kimia, dan geofisika jadi gambaran kualitatif extent, boundary, upflow, struktur permeability, dan distribusi fase. (2) Natural state — jalanin ke steady pre-exploitation state dan calibrate terhadap profil temperature dan pressure undisturbed yang well pertama ukur. (3) History matching — terapin record produksi/injeksi nyata dan calibrate terhadap pressure decline, produced enthalpy, dan flow rate yang diamati. (4) Prediction — dengan model calibrated, jalanin maju di bawah skenario development buat forecast pressure, dry-out, sustainable generation, dan umur sumber daya. Tiap tahap belakangan tergantung kalibrasi yang ditetapin tahap sebelumnya.'
      }
    },
    {
      sectionId: 'formalization',
      question: {
        en: 'What property of writing the conservation laws in integral form (rather than as PDEs) gives the integral finite difference method its flexibility on irregular 3-D grids?',
        id: 'Properti apa dari nulis hukum konservasi dalam bentuk integral (bukan sebagai PDE) yang ngasih integral finite difference method fleksibilitasnya di grid 3-D irregular?'
      },
      prompt: { en: 'Before continuing, try answering:', id: 'Sebelum lanjut, coba jawab:' },
      answer: {
        en: 'Because the balance is written as an integral over an arbitrary block — accumulation in the volume equals flux across its bounding surface plus internal sources — the discretization never refers to a global coordinate system. A block is characterized only by its volume, the interface areas it shares with neighbours, the distances between nodal points, and a gravity projection. None of those quantities require the blocks to be arranged on a regular Cartesian lattice, so the same method applies to arbitrary irregular 1-, 2-, or 3-D meshes; on a regular grid it reduces exactly to conventional finite differences, so the geometric flexibility costs nothing in accuracy.',
        id: 'Karena balance-nya ditulis sebagai integral atas blok sembarang — accumulation di volume sama dengan flux lewat permukaan pembatasnya plus source internal — diskretisasinya gak pernah ngerujuk ke global coordinate system. Blok dikarakterisasi cuma sama volume-nya, interface area yang dia bagi sama tetangga, jarak antar titik nodal, dan proyeksi gravity. Gak satupun kuantitas itu nuntut blok diatur di lattice Cartesian reguler, jadi metode yang sama berlaku ke mesh 1-, 2-, atau 3-D irregular sembarang; di grid reguler dia tereduksi persis ke finite difference konvensional, jadi fleksibilitas geometris gak ngorbanin akurasi.'
      }
    },
    {
      sectionId: 'worked-example',
      question: {
        en: 'In the worked example, a dry-steam well modelled as q = C(P² − P_wb²) shows a 28% rate drop for only a 13% pressure drop. Why is the rate drop more than double the pressure drop, and what would the linear (liquid) form give instead?',
        id: 'Di worked example, dry-steam well yang dimodelkan sebagai q = C(P² − P_wb²) nunjukin rate drop 28% buat pressure drop cuma 13%. Kenapa rate drop-nya lebih dari dua kali pressure drop, dan bentuk linear (liquid) bakal ngasih apa?'
      },
      prompt: { en: 'Before continuing, try answering:', id: 'Sebelum lanjut, coba jawab:' },
      answer: {
        en: 'The compressible (pressure-squared) form makes rate depend on the difference of squared pressures, P² − P_wb², not on P − P_wb. Dropping P from 30 to 26 bar changes P² from 900 to 676, and against the fixed P_wb² = 100 the driving term falls from 800 to 576 — a 28% drop, amplified relative to the 13% pressure drop because the squared term is more sensitive near the operating range. A linear (liquid/incompressible) form q = PI(P − P_wb) would give (26−10)/(30−10) = 16/20, only a 20% drop. The dry-steam well declines faster for the same pressure loss — which is why dry-steam deliverability is commonly written with a pressure-squared structure (as in the Acuña relation) rather than the linear PI form.',
        id: 'Bentuk compressible (pressure-squared) bikin rate tergantung selisih pressure kuadrat, P² − P_wb², bukan P − P_wb. Nurunin P dari 30 ke 26 bar ngubah P² dari 900 ke 676, dan lawan P_wb² = 100 yang fixed driving term-nya turun dari 800 ke 576 — drop 28%, ter-amplifikasi relatif ke pressure drop 13% karena term kuadrat lebih sensitif deket operating range. Bentuk linear (liquid/incompressible) q = PI(P − P_wb) bakal ngasih (26−10)/(30−10) = 16/20, cuma drop 20%. Dry-steam well decline lebih cepet buat pressure loss yang sama — kenapa dry-steam deliverability umumnya ditulis dengan struktur pressure-squared (kayak di relasi Acuña) ketimbang bentuk linear PI.'
      }
    },
    {
      sectionId: 'applications',
      question: {
        en: `A field model keeps diverging from the operations team's daily measurements — predicted pressures and enthalpies no longer match what the wells report. Why is that divergence treated as a signal to act rather than just model error, and what does it call for?`,
        id: `Model field terus divergen dari measurement harian operations team — pressure dan enthalpy yang diprediksi gak lagi match sama yang well laporin. Kenapa divergensi itu diperlakuin sebagai sinyal buat bertindak bukan cuma model error, dan dia nuntut apa?`
      },
      prompt: { en: 'Before continuing, try answering:', id: 'Sebelum lanjut, coba jawab:' },
      answer: {
        en: `A calibrated model encodes the current conceptual understanding of the reservoir, so when daily measurements (wellhead pressures, flow rates, produced enthalpies) consistently depart from it, the most informative reading is not that the arithmetic is wrong but that the conceptual model is missing something real — a newly developed boiling zone, a recharge boundary that has begun to matter, or interference from a recently drilled well. The pattern of the divergence (which wells, which quantity, since when) helps localize what is missing. What it calls for is re-calibration: returning to the conceptual-model, natural-state, and history-matching stages to incorporate the new behaviour, rather than forcing the stale model forward. This is why the operations team's surveillance stream is not mere bookkeeping — it is the running test that keeps the field model honest, and the divergence is the trigger to update it.`,
        id: `Model yang calibrated nge-encode pemahaman konseptual reservoir saat ini, jadi pas measurement harian (wellhead pressure, flow rate, produced enthalpy) konsisten menyimpang darinya, bacaan paling informatif bukan bahwa aritmetikanya salah tapi bahwa conceptual model-nya kehilangan sesuatu yang nyata — boiling zone yang baru berkembang, recharge boundary yang mulai berpengaruh, atau interferensi dari well yang baru di-drill. Pola divergensinya (well mana, kuantitas mana, sejak kapan) bantu ngelokalisir apa yang hilang. Yang dia nuntut itu re-calibration: balik ke tahap conceptual-model, natural-state, dan history-matching buat masukin behaviour baru itu, bukan maksa model basi maju. Ini kenapa surveillance stream operations team bukan cuma pembukuan — itu tes berjalan yang njaga model field tetap jujur, dan divergensi itu trigger buat update-nya.`
      }
    },
  ],
};
