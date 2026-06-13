// ─────────────────────────────────────────────────────────────────────────
// ⚠ DRAFT — AWAITING AZ DOMAIN REVIEW (option (b): "I draft, you correct").
// Geothermal content is Az-authored (Reservoir & Production Engineer, 6 yrs
// Star Energy Geothermal Darajat — dry-steam). Schema-valid + renderable,
// NOT finalized. Remaining domain claims flagged **⟦TODO-Az: …⟧**.
// Full prep: notes/axelsson-reinjection-tracer-research-prep-2026-06-06.md
//
// VERIFIED AGAINST THE LITERATURE (flags cleared): the bibliography (Axelsson
// 2010 Geothermics 39(4) 283–291 anchor; Axelsson/Björnsson/Montalvo 2005 WGC
// tracer interpretation; Axelsson et al. 2001 Geothermics 30(6) 697–725
// Laugaland; Shook 2001 Geothermics 30(6) 573–589; Grant & Bixley 2011 2nd ed.,
// Academic Press/Elsevier), Axelsson's bio/affiliation (ÍSOR, UNU-GTP/GRÓ-GTP),
// and the fluid-neutral physics backbone (advection–dispersion + flow-channel
// model, recovered mass fraction, mean residence time → swept pore volume, and
// the thermal-retardation relationship that makes tracer breakthrough an early
// warning of thermal breakthrough). The cross-reference TODOs were resolved.
//
// REMAINING TODO-Az ITEMS (Darajat operational facts — external to this module):
//   A. HEADLINE: confirm DRY-STEAM (Darajat) reinjection practice vs the
//      liquid-dominated textbook picture — peripheral / condensate injection,
//      quenching risk, and how injectors connect (or don't) to the steam zone.
//      The module teaches the standard (liquid-dominated) reinjection + tracer
//      story and flags the dry-steam adaptation as the teaching point.
//   B. Tracer selection and the conservative-tracer assumption under two-phase /
//      flashing / condensing conditions (phase partitioning).
//   C. Numeric thermal-retardation factor and breakthrough-time estimate for
//      Darajat rock (ρc, porosity) — the R_th expression is the standard
//      verified form; the Darajat numeric value stays symbolic.
//   D. Worked-example numbers are ILLUSTRATIVE placeholders — swap for a real
//      Darajat tracer test if desired.
//   E. Editorial: the anchoring choice (Axelsson vs Grant & Bixley /
//      Stefánsson / a Darajat study) and which sources to foreground.
//   F. Seed cards DEFERRED until Az signs off (card-coverage exempt: geothermal
//      domain + DRAFT marker).
// ─────────────────────────────────────────────────────────────────────────

export const CONTENT = {
  itemId: 'axelsson-2010',
  estimatedReadMinutes: 36,

  author: {
    fullName: { en: 'Gudni Axelsson', id: 'Gudni Axelsson' },
    affiliation: {
      en: 'Geothermal reservoir physicist; Iceland GeoSurvey (ÍSOR) and the United Nations University Geothermal Training Programme (UNU-GTP / GRÓ-GTP). A leading authority on geothermal reinjection, tracer-test interpretation, and sustainable reservoir management.',
      id: 'Reservoir physicist geothermal; Iceland GeoSurvey (ÍSOR) dan United Nations University Geothermal Training Programme (UNU-GTP / GRÓ-GTP). Otoritas terkemuka di reinjeksi geothermal, interpretasi tracer-test, dan manajemen reservoir berkelanjutan.'
    },
    tagline: {
      en: 'Reinjection is how a geothermal field stays alive: put the spent fluid back to support pressure and sweep heat from the rock — without letting the cold front reach the producers. Tracer testing is how you measure the underground connections that decide whether that works.',
      id: 'Reinjeksi itu gimana field geothermal tetap hidup: balikin fluida bekas buat nyokong pressure dan nyapu panas dari batuan — tanpa ngebiarin cold front nyampe sumur produksi. Tracer testing itu gimana kamu ngukur koneksi bawah-tanah yang nentuin apakah itu berhasil.'
    },
    bio: {
      en: `Gudni Axelsson built much of the modern practice of managing geothermal reservoirs *during* utilization — the long-horizon questions of how hard a field can be produced, how reinjection should be designed, and how to detect cooling before it hurts. Working from Iceland (ÍSOR) and teaching generations of engineers through the UN University Geothermal Training Programme, his work on **tracer-test interpretation** (fitting injector-to-producer return curves with flow-channel models) and on **reinjection and injection-induced cooling** (the Laugaland field is a classic case) became reference methodology worldwide.

⟦TODO-Az: bio/affiliation are from public record; confirm before finalizing. Anchoring this reinjection-and-tracer module on Axelsson is a drafting choice — tell me if you would rather anchor on Grant & Bixley's reinjection chapter, on Stefánsson/Bödvarsson, or on a specific Darajat/Star Energy reinjection study.⟧`,
      id: `Gudni Axelsson ngebangun banyak dari praktik modern ngelola reservoir geothermal *selama* utilisasi — pertanyaan horizon-panjang soal seberapa keras field bisa diproduksi, gimana reinjeksi harus didesain, dan gimana ngedeteksi pendinginan sebelum dia ngerusak. Kerja dari Islandia (ÍSOR) dan ngajar generasi engineer lewat UN University Geothermal Training Programme, karyanya soal **interpretasi tracer-test** (nge-fit return curve injektor-ke-produser dengan model flow-channel) dan soal **reinjeksi dan pendinginan induksi-injeksi** (field Laugaland itu kasus klasik) jadi metodologi rujukan di seluruh dunia.

⟦TODO-Az: bio/afiliasi dari public record; konfirmasi sebelum finalisasi. Nge-anchor module reinjeksi-dan-tracer ini ke Axelsson itu pilihan drafting — bilang kalau kamu lebih mau nge-anchor ke bab reinjeksi Grant & Bixley, ke Stefánsson/Bödvarsson, atau ke studi reinjeksi Darajat/Star Energy spesifik.⟧`
    },
    focus: {
      en: `Reinjection returns the spent geothermal fluid — separated brine and condensate — to the reservoir instead of dumping it at surface. It does three jobs at once: it **disposes** of fluid that is environmentally unacceptable to discharge (arsenic, boron, H₂S, silica); it **supports reservoir pressure** against the drawdown that production causes; and it **sweeps heat** out of the rock, which stores far more thermal energy than the circulating fluid ever could. The single hazard that governs the whole design is **thermal breakthrough**: the injected fluid is cooler than the reservoir, and if it travels too directly to a producer it cools that well and erodes its output. The job is to win pressure support and heat recovery while keeping the cold front away from the producers for the life of the project. **Tracer testing** is the measurement that makes this quantitative: inject a conservative chemical tracer at an injector, watch it arrive at the surrounding producers, and read the underground flow paths from the return curves. ⟦TODO-Az: for a vapour-dominated DRY-STEAM field like Darajat the reinjection picture is materially different from the liquid-dominated textbook one — injection is typically more peripheral/condensate, the link to the steam zone and the risk of quenching are field-specific, and tracer behaviour under flashing/condensing conditions is its own problem. This module teaches the standard liquid-dominated method and flags the dry-steam adaptation for your sign-off.⟧`,
      id: `Reinjeksi ngebalikin fluida geothermal bekas — brine dan kondensat yang udah dipisah — ke reservoir alih-alih buang di permukaan. Dia ngerjain tiga hal sekaligus: dia **buang** fluida yang gak bisa diterima lingkungan buat didischarge (arsenik, boron, H₂S, silika); dia **nyokong reservoir pressure** lawan drawdown yang produksi sebabkan; dan dia **nyapu panas** keluar dari batuan, yang nyimpen energi termal jauh lebih banyak dari fluida yang bersirkulasi. Satu bahaya yang ngatur seluruh desain itu **thermal breakthrough**: fluida yang diinjeksi lebih dingin dari reservoir, dan kalau dia gerak terlalu langsung ke produser dia ngedinginin sumur itu dan ngerusak output-nya. Tugasnya menangin pressure support dan recovery panas sambil ngejauhin cold front dari produser sepanjang umur proyek. **Tracer testing** itu pengukuran yang bikin ini kuantitatif: injeksi tracer kimia konservatif di injektor, liat dia nyampe di produser sekitarnya, dan baca jalur flow bawah-tanah dari return curve-nya. ⟦TODO-Az: buat field DRY-STEAM vapour-dominated kayak Darajat gambaran reinjeksinya beda secara material dari yang liquid-dominated textbook — injeksi biasanya lebih peripheral/kondensat, link ke steam zone dan risiko quenching itu spesifik-field, dan perilaku tracer di kondisi flashing/condensing itu masalah tersendiri. Module ini ngajarin metode liquid-dominated standar dan ngeflag adaptasi dry-steam buat sign-off kamu.⟧`
    },
    intellectualLineage: {
      en: `The reinjection idea descends from the realization at fields like **Wairakei** and **The Geysers** that producing fluid without returning it draws reservoir pressure down — and that the rock, not the fluid, is the heat reservoir, so sweeping it with reinjected fluid recovers far more energy. The tracer-test method is the geothermal application of **conservative-tracer hydrology**: a slug injected at one point and monitored at others, interpreted with advection–dispersion and flow-channel models. Axelsson's contribution was to make tracer-return interpretation quantitative and routine for reservoir management, and to tie it to **injection-induced cooling** prediction. ⟦TODO-Az: the geothermal-specific lineage you may want emphasized — Bödvarsson and Pruess on injection modelling, Grant & Bixley's reinjection treatment (in this catalog), and Shook on deriving thermal-breakthrough time from tracer data. Confirm which to foreground.⟧`,
      id: `Ide reinjeksi turun dari kesadaran di field kayak **Wairakei** dan **The Geysers** bahwa produksi fluida tanpa ngebalikinnya narik reservoir pressure turun — dan bahwa batuannya, bukan fluidanya, itu reservoir panas, jadi nyapunya dengan fluida reinjeksi nge-recover energi jauh lebih banyak. Metode tracer-test itu aplikasi geothermal dari **hidrologi tracer konservatif**: slug yang diinjeksi di satu titik dan dimonitor di titik lain, diinterpretasi dengan model advection–dispersion dan flow-channel. Kontribusi Axelsson itu bikin interpretasi tracer-return kuantitatif dan rutin buat manajemen reservoir, dan ngiketnya ke prediksi **pendinginan induksi-injeksi**. ⟦TODO-Az: lineage spesifik-geothermal yang mungkin kamu mau ditekankan — Bödvarsson dan Pruess soal pemodelan injeksi, perlakuan reinjeksi Grant & Bixley (di katalog ini), dan Shook soal nurunin waktu thermal-breakthrough dari data tracer. Konfirmasi yang mana yang dimajuin.⟧`
    },
    keyCollaborators: {
      en: `Axelsson's milieu is the Icelandic reservoir-physics community (ÍSOR) and the UNU-GTP teaching network, through which his methods reached engineers across Asia, Africa, and Latin America. Recurring names in his tracer/reinjection work include **Grímur Björnsson** and the ÍSOR group, with methodological neighbours **Karsten Pruess** and **Gudmundur Bödvarsson** (injection modelling) and **Michael Shook** (tracer-to-thermal-breakthrough). ⟦TODO-Az: confirm/adjust the collaborator emphasis, and whether a Star Energy / Indonesian reinjection reference belongs here.⟧`,
      id: `Lingkungan Axelsson itu komunitas reservoir-physics Islandia (ÍSOR) dan jaringan pengajaran UNU-GTP, lewat mana metodenya nyampe engineer lintas Asia, Afrika, dan Amerika Latin. Nama yang berulang di kerja tracer/reinjeksinya termasuk **Grímur Björnsson** dan grup ÍSOR, dengan tetangga metodologis **Karsten Pruess** dan **Gudmundur Bödvarsson** (pemodelan injeksi) dan **Michael Shook** (tracer-ke-thermal-breakthrough). ⟦TODO-Az: konfirmasi/sesuaikan penekanan kolaborator, dan apakah referensi reinjeksi Star Energy / Indonesia masuk di sini.⟧`
    },
    legacy: {
      en: `Reinjection turned geothermal from a fluid-mining operation into a managed, more nearly renewable one: by returning the spent water you dispose of it safely, you hold pressure up, and you keep extracting heat from rock that would otherwise be stranded. Tracer testing is the diagnostic that lets you do this with eyes open — it maps the actual underground connections and, crucially, predicts *when* cold will arrive so injectors can be sited and managed accordingly. ⟦TODO-Az: the lasting value FOR DARAJAT is precisely what this draft cannot settle without you — how a vapour-dominated dry-steam field manages reinjection (where the condensate goes, how to avoid quenching the steam zone, what tracer strategy is meaningful when the working fluid is steam). Treat the module as the verified method plus a flagged adaptation checklist for your field, not a finished geothermal teaching unit.⟧`,
      id: `Reinjeksi ngubah geothermal dari operasi penambangan-fluida jadi operasi terkelola yang lebih mendekati terbarukan: dengan ngebalikin air bekas kamu buang dia dengan aman, kamu nahan pressure, dan kamu terus ngekstrak panas dari batuan yang kalau gak gitu bakal terlantar. Tracer testing itu diagnostik yang ngebiarin kamu ngelakuin ini dengan mata terbuka — dia memetakan koneksi bawah-tanah sebenarnya dan, krusial, ngeprediksi *kapan* dingin bakal tiba jadi injektor bisa disitkan dan dikelola sesuai. ⟦TODO-Az: nilai abadi BUAT DARAJAT itu persis yang draft ini gak bisa selesaikan tanpa kamu — gimana field dry-steam vapour-dominated ngelola reinjeksi (ke mana kondensat pergi, gimana ngehindarin quenching steam zone, strategi tracer apa yang bermakna pas working fluid-nya steam). Perlakukan module sebagai metode terverifikasi plus checklist adaptasi yang di-flag buat field kamu, bukan unit pengajaran geothermal yang jadi.⟧`
    },
    keyWorks: [
      { year: 2010, title: 'Sustainable geothermal utilization — Case histories; definitions; research issues and modelling', venue: 'Geothermics 39(4), 283–291 (anchor)' },
      { year: 2005, title: 'Quantitative Interpretation of Tracer Test Data (Axelsson, Björnsson, Montalvo)', venue: 'Proc. World Geothermal Congress' },
      { year: 2001, title: 'Analysis of tracer test data, and injection-induced cooling, in the Laugaland geothermal field, N-Iceland', venue: 'Geothermics' },
      { year: 2011, title: 'Geothermal Reservoir Engineering (Grant & Bixley) — reinjection chapter (in this catalog)', venue: 'Elsevier' },
    ],
  },

  sections: [
    // ─────────────── 1. motivation ───────────────
    {
      id: 'motivation',
      heading: { en: 'Why this matters', id: 'Kenapa ini penting' },
      body: {
        en: `Produce a geothermal field and two things happen underground: the pressure falls (you are taking mass out faster than nature replaces it), and you generate a stream of hot, chemically loaded spent fluid at surface that you cannot simply throw away. **Reinjection** — pumping the spent fluid back into the reservoir — answers both at once, and does a third thing besides:

- **Disposal.** Separated brine and condensate carry arsenic, boron, H₂S, and dissolved silica. Surface discharge is environmentally unacceptable; reinjection puts the fluid back where it came from.
- **Pressure support.** Returning mass to the reservoir slows or halts the pressure drawdown that production causes, sustaining well deliverability and extending field life.
- **Heat sweep.** The rock holds far more heat than the fluid in its pores. Reinjected fluid, flowing through the rock toward the producers, picks up heat that fluid alone would leave behind — turning a fraction of the *rock's* stored energy into recoverable resource.

But reinjection has one governing hazard: **thermal breakthrough**. The injected fluid is colder than the reservoir. If it finds too direct a path to a producing well, it arrives and *cools that well*, dropping its enthalpy and output — sometimes ruining it. Every reinjection scheme lives on this trade-off: enough connection to support pressure and sweep heat, but not so direct a connection that cold arrives within the project's lifetime.

You cannot see those underground connections. **Tracer testing** measures them: release a known, conservative chemical tracer at an injection well, then sample the produced fluid at the surrounding wells and watch the tracer arrive. The shape, timing, and recovered fraction of each well's **tracer return curve** reveal how strongly — and how fast — each injector is connected to each producer, and from that you can predict when (and whether) the cold front will follow.

⟦TODO-Az: this is where geothermal sub-types diverge and Darajat is your call. The whole picture above is the LIQUID-DOMINATED one. In a vapour-dominated DRY-STEAM field (Darajat) reinjection is typically more peripheral and is condensate-dominated; the connection between injectors and the producing steam zone, and the risk of quenching that zone, are field-specific judgements; and a tracer that is "conservative" in liquid may partition between liquid and vapour when it flashes or condenses. Please confirm/correct the dry-steam framing — the module teaches the liquid-dominated standard and flags it.⟧`,
        id: `Produksi field geothermal dan dua hal terjadi di bawah tanah: pressure-nya jatuh (kamu ngambil massa keluar lebih cepat dari yang alam ganti), dan kamu ngehasilin aliran fluida bekas yang panas, bermuatan kimia di permukaan yang gak bisa kamu buang gitu aja. **Reinjeksi** — mompa fluida bekas balik ke reservoir — ngejawab keduanya sekaligus, dan ngerjain hal ketiga juga:

- **Pembuangan.** Brine dan kondensat yang dipisah bawa arsenik, boron, H₂S, dan silika terlarut. Discharge permukaan gak bisa diterima lingkungan; reinjeksi ngebalikin fluida ke tempat asalnya.
- **Pressure support.** Ngebalikin massa ke reservoir ngelambatin atau nahan pressure drawdown yang produksi sebabkan, nyokong deliverability sumur dan manjangin umur field.
- **Sapuan panas.** Batuan nyimpen panas jauh lebih banyak dari fluida di pori-porinya. Fluida reinjeksi, ngalir lewat batuan menuju produser, ngambil panas yang fluida sendiri bakal tinggalin — ngubah sebagian energi tersimpan *batuan* jadi resource yang bisa di-recover.

Tapi reinjeksi punya satu bahaya yang ngatur: **thermal breakthrough**. Fluida yang diinjeksi lebih dingin dari reservoir. Kalau dia nemu jalur terlalu langsung ke sumur produksi, dia tiba dan *ngedinginin sumur itu*, nurunin enthalpy dan output-nya — kadang ngerusaknya. Tiap skema reinjeksi hidup di trade-off ini: koneksi cukup buat nyokong pressure dan nyapu panas, tapi koneksi gak terlalu langsung sampe dingin tiba dalam masa hidup proyek.

Kamu gak bisa liat koneksi bawah-tanah itu. **Tracer testing** ngukurnya: lepas tracer kimia konservatif yang diketahui di sumur injeksi, terus sampel fluida yang diproduksi di sumur sekitarnya dan liat tracer-nya tiba. Bentuk, timing, dan fraksi ter-recover dari tiap **tracer return curve** sumur ngungkap seberapa kuat — dan seberapa cepat — tiap injektor terhubung ke tiap produser, dan dari situ kamu bisa ngeprediksi kapan (dan apakah) cold front bakal ngikut.

⟦TODO-Az: ini di mana sub-tipe geothermal menyimpang dan Darajat itu keputusan kamu. Seluruh gambaran di atas itu yang LIQUID-DOMINATED. Di field DRY-STEAM vapour-dominated (Darajat) reinjeksi biasanya lebih peripheral dan didominasi-kondensat; koneksi antara injektor dan steam zone yang berproduksi, dan risiko quenching zona itu, itu pertimbangan spesifik-field; dan tracer yang "konservatif" di liquid bisa partisi antara liquid dan vapour pas dia flash atau kondensasi. Tolong konfirmasi/koreksi framing dry-steam — module ngajarin standar liquid-dominated dan ngeflag-nya.⟧`
      }
    },

    // ─────────────── 2. intuition ───────────────
    {
      id: 'intuition',
      heading: { en: 'Intuition', id: 'Intuisi' },
      body: {
        en: `Think of the reservoir as a sponge full of hot water, and production as squeezing it: the sponge deflates (pressure drops). Reinjection is pouring water back in at the edges to keep it plump — but the water you pour back is cooler, and you do not want it to reach the part you are squeezing too soon, or you will be squeezing out lukewarm water.

Here is the key intuition that makes reinjection *work* rather than merely *not fail*: **the cold travels slower than the water.** When you inject, two fronts move out from the injector. A **fluid (pressure/chemical) front** moves at the flow velocity — fast. A **thermal (cooling) front** moves much slower, because the cold fluid must chill the *rock* it passes, and the rock has a large heat capacity. So the rock acts like a thermal flywheel: it absorbs the cold and keeps the produced fluid hot long after the injected water itself has arrived. This lag — the thermal front trailing the fluid front by a factor of several — is exactly the safety margin reinjection exploits, and exactly what a tracer test measures.

A **tracer** rides the *fluid* front. Inject a slug of a conservative tracer (something that flows with the water but does not react, sorb, or decay), then watch it appear at the producers. If it shows up fast and strong at a particular well, that injector–producer pair is tightly connected by a short, fast channel — good for pressure support, but a thermal-breakthrough risk to watch. If it shows up late, smeared out, and weak, the connection is long and diffuse — pressure support with little cooling threat. A tracer that never appears means no direct connection at all.

Because the tracer front is the *fast* one, tracer breakthrough is an **early warning**: cold will follow along the same path, but slower, by a knowable factor. A tracer that breaks through in weeks can correspond to thermal breakthrough years or decades away — and the tracer return curve gives you the numbers (channel volume, flow velocity) to estimate that thermal arrival before it happens.

⟦TODO-Az: the dry-steam wrinkle for Darajat — when the working fluid is steam and the injectate is liquid condensate, the "cold front travels slower" picture still holds thermally, but the near-injector process involves the liquid boiling/the steam condensing, and a liquid tracer and a vapour tracer sample different things. The clean liquid-on-liquid intuition above needs your adaptation; please confirm before it becomes a teaching point.⟧`,
        id: `Bayangin reservoir sebagai spons penuh air panas, dan produksi sebagai meresnya: spons-nya kempes (pressure jatuh). Reinjeksi itu nuangin air balik di tepinya buat ngejaga dia tetap gembung — tapi air yang kamu tuang balik lebih dingin, dan kamu gak mau dia nyampe bagian yang kamu peras terlalu cepat, atau kamu bakal meres air suam-suam kuku.

Ini intuisi kunci yang bikin reinjeksi *berhasil* bukan sekadar *gak gagal*: **dingin gerak lebih lambat dari air.** Pas kamu injeksi, dua front gerak keluar dari injektor. **Fluid front (pressure/kimia)** gerak di kecepatan flow — cepat. **Thermal front (pendinginan)** gerak jauh lebih lambat, karena fluida dingin harus ngedinginin *batuan* yang dia lewati, dan batuan punya heat capacity besar. Jadi batuan bertindak kayak flywheel termal: dia nyerap dingin dan ngejaga fluida yang diproduksi tetap panas lama setelah air yang diinjeksi sendiri tiba. Lag ini — thermal front ketinggalan dari fluid front sebesar faktor beberapa kali — itu persis margin keamanan yang reinjeksi manfaatkan, dan persis yang tracer test ukur.

**Tracer** naik di *fluid* front. Injeksi slug tracer konservatif (sesuatu yang ngalir sama air tapi gak bereaksi, nyerap, atau meluruh), terus liat dia muncul di produser. Kalau dia muncul cepat dan kuat di sumur tertentu, pasangan injektor–produser itu terhubung erat oleh channel pendek, cepat — bagus buat pressure support, tapi risiko thermal-breakthrough yang harus diawasi. Kalau dia muncul telat, melebar, dan lemah, koneksinya panjang dan menyebar — pressure support dengan ancaman pendinginan kecil. Tracer yang gak pernah muncul berarti gak ada koneksi langsung sama sekali.

Karena tracer front itu yang *cepat*, tracer breakthrough itu **peringatan dini**: dingin bakal ngikut jalur yang sama, tapi lebih lambat, dengan faktor yang bisa diketahui. Tracer yang breakthrough dalam minggu bisa berkorespondensi dengan thermal breakthrough bertahun atau berdekade lagi — dan tracer return curve ngasih kamu angka (volume channel, kecepatan flow) buat ngestimasi kedatangan termal itu sebelum terjadi.

⟦TODO-Az: lipatan dry-steam buat Darajat — pas working fluid-nya steam dan injektat-nya kondensat liquid, gambaran "cold front gerak lebih lambat" masih berlaku secara termal, tapi proses near-injektor melibatkan liquid mendidih/steam mengkondensasi, dan tracer liquid dan tracer vapour nyampel hal berbeda. Intuisi liquid-on-liquid bersih di atas butuh adaptasi kamu; tolong konfirmasi sebelum dia jadi teaching point.⟧`
      }
    },

    // ─────────────── 3. formalization ───────────────
    {
      id: 'formalization',
      heading: { en: 'The method, formalized', id: 'Metodenya, diformalkan' },
      body: {
        en: `**The flow-channel / advection–dispersion model.** Tracer transport along an injector–producer connection is modelled as one-dimensional flow in an idealized channel: the tracer is carried by **advection** (at the mean flow velocity) and spread by **dispersion** (mechanical mixing + diffusion). For a slug of mass $M$ injected into a channel carrying flow $Q$, the produced tracer concentration $C(t)$ rises, peaks, and falls — the **tracer return curve**. Fitting an advection–dispersion solution to that curve returns the channel's **pore (flow) volume** $V_p$, the mean flow velocity, and a dispersion coefficient. Real fields are fit as a *superposition of several channels* (fast and slow paths) because connections are rarely single tubes.

**Moment analysis (model-light reading of the curve).** Two robust numbers come straight from the curve without committing to a model:
- **Recovered mass fraction** $= \\dfrac{\\int Q\\,C(t)\\,\\mathrm{d}t}{M}$ — the share of injected tracer that reached this producer; a direct measure of connection strength.
- **Mean residence time** $\\bar t = \\dfrac{\\int t\\,C(t)\\,\\mathrm{d}t}{\\int C(t)\\,\\mathrm{d}t}$ (the first moment) — with the flow rate, this fixes the swept pore volume $V_p \\approx Q\\,\\bar t$ along the connection.

**From tracer to thermal breakthrough — the key step.** A conservative tracer travels at the fluid velocity; the cooling front travels slower by the **thermal retardation factor**, because heat is exchanged with the rock. Schematically
$$\\frac{v_{\\text{fluid}}}{v_{\\text{thermal}}} \\;=\\; R_{th}\\;\\approx\\; \\frac{(\\rho c)_{\\text{rock+fluid}}}{\\phi\\,(\\rho c)_{\\text{fluid}}},$$
so the **thermal breakthrough time** $\\approx R_{th}\\times$ (the fluid/tracer transit time), with $R_{th}$ commonly several-fold (porosity $\\phi$ small, rock heat capacity large). The tracer test measures the transit time and swept volume; the rock properties supply $R_{th}$; together they *predict the cooling* before it happens. ⟦TODO-Az: the exact $R_{th}$ expression and a Darajat value (porosity, rock $\\rho c$) are yours to set — I have written it schematically.⟧

**Reinjection design variables.** Given the connections a tracer test reveals, the levers are: injector **placement** (peripheral vs in-field), **distance/offset** from producers, injection **rate and temperature**, and which connections to favour or avoid. The objective is maximum pressure support and heat sweep subject to thermal breakthrough staying beyond the planning horizon.

⟦TODO-Az: the geothermal/dry-steam formalization needs your correction.
  1. **Two-phase / flashing tracer transport.** When the fluid flashes, a tracer can partition between liquid and vapour; "conservative" must be checked per tracer and per phase. The clean single-phase advection–dispersion fit may need a two-phase treatment.
  2. **Dry-steam (Darajat).** With a steam reservoir and liquid condensate injection, the relevant transport, the meaning of a tracer test, and the quenching risk differ from the liquid-dominated case — confirm the right framing.
  3. **Retardation factor.** Insert the Darajat rock properties and the exact $R_{th}$ you use.
The advection–dispersion + moment machinery above is the verified, fluid-neutral backbone.⟧`,
        id: `**Model flow-channel / advection–dispersion.** Transport tracer sepanjang koneksi injektor–produser dimodelkan sebagai flow satu-dimensi di channel ideal: tracer dibawa oleh **adveksi** (di kecepatan flow rata-rata) dan disebar oleh **dispersi** (pencampuran mekanis + difusi). Buat slug massa $M$ yang diinjeksi ke channel yang bawa flow $Q$, konsentrasi tracer yang diproduksi $C(t)$ naik, puncak, dan turun — **tracer return curve**. Nge-fit solusi advection–dispersion ke kurva itu ngembaliin **pore (flow) volume** channel $V_p$, kecepatan flow rata-rata, dan koefisien dispersi. Field nyata di-fit sebagai *superposisi beberapa channel* (jalur cepat dan lambat) karena koneksi jarang tabung tunggal.

**Analisis momen (pembacaan kurva ringan-model).** Dua angka robust datang langsung dari kurva tanpa komit ke model:
- **Fraksi massa ter-recover** $= \\dfrac{\\int Q\\,C(t)\\,\\mathrm{d}t}{M}$ — bagian tracer yang diinjeksi yang nyampe produser ini; ukuran langsung kekuatan koneksi.
- **Mean residence time** $\\bar t = \\dfrac{\\int t\\,C(t)\\,\\mathrm{d}t}{\\int C(t)\\,\\mathrm{d}t}$ (momen pertama) — dengan flow rate, ini ngepasin swept pore volume $V_p \\approx Q\\,\\bar t$ sepanjang koneksi.

**Dari tracer ke thermal breakthrough — langkah kunci.** Tracer konservatif gerak di kecepatan fluida; cooling front gerak lebih lambat sebesar **thermal retardation factor**, karena panas dipertukarkan dengan batuan. Secara skematis
$$\\frac{v_{\\text{fluida}}}{v_{\\text{termal}}} \\;=\\; R_{th}\\;\\approx\\; \\frac{(\\rho c)_{\\text{batuan+fluida}}}{\\phi\\,(\\rho c)_{\\text{fluida}}},$$
jadi **waktu thermal breakthrough** $\\approx R_{th}\\times$ (waktu transit fluida/tracer), dengan $R_{th}$ umumnya beberapa kali lipat (porositas $\\phi$ kecil, heat capacity batuan besar). Tracer test ngukur waktu transit dan swept volume; properti batuan nyuplai $R_{th}$; bareng-bareng mereka *ngeprediksi pendinginan* sebelum terjadi. ⟦TODO-Az: ekspresi $R_{th}$ persis dan nilai Darajat (porositas, $\\rho c$ batuan) itu punya kamu buat nyetel — aku nulisnya skematis.⟧

**Variabel desain reinjeksi.** Diberi koneksi yang tracer test ungkap, lever-nya: **penempatan** injektor (peripheral vs in-field), **jarak/offset** dari produser, **rate dan temperatur** injeksi, dan koneksi mana yang difavoritkan atau dihindari. Objektifnya pressure support dan sapuan panas maksimum dengan syarat thermal breakthrough tetap di luar horizon perencanaan.

⟦TODO-Az: formalisasi geothermal/dry-steam butuh koreksi kamu.
  1. **Transport tracer two-phase / flashing.** Pas fluida flash, tracer bisa partisi antara liquid dan vapour; "konservatif" harus dicek per tracer dan per fase. Fit advection–dispersion single-phase yang bersih mungkin butuh perlakuan two-phase.
  2. **Dry-steam (Darajat).** Dengan reservoir steam dan injeksi kondensat liquid, transport yang relevan, makna tracer test, dan risiko quenching beda dari kasus liquid-dominated — konfirmasi framing yang benar.
  3. **Retardation factor.** Masukin properti batuan Darajat dan $R_{th}$ persis yang kamu pakai.
Mesin advection–dispersion + momen di atas itu backbone terverifikasi, netral-fluida.⟧`
      }
    },

    // ─────────────── 4. worked-example ───────────────
    {
      id: 'worked-example',
      heading: { en: 'Worked example', id: 'Contoh kerjaan' },
      body: {
        en: `**A tracer test, read end to end (illustrative numbers).** ⟦TODO-Az: every number is a placeholder to show the *procedure* — replace with a Darajat dataset and the correct rock properties; do not teach these figures as Darajat values.⟧

You inject a slug of conservative tracer at injector I-1 and sample three nearby producers P-A, P-B, P-C over the following months.

1. **P-A** returns the tracer **fast** (peak in a few weeks), **strong** (high recovered fraction), and **sharp** (little smearing). Reading: a short, high-velocity, low-volume channel directly connects I-1→P-A.
2. **P-B** returns it **late**, **broad**, and **weak**. Reading: a long, diffuse, large-volume connection — gentle.
3. **P-C** returns **nothing**. Reading: no significant direct connection.

**Quantify P-A.** From the return curve, the **recovered mass fraction** (∫QC dt / M) measures how much of I-1's injectate reaches P-A. The **mean residence time** $\\bar t$ (first moment) with the flow rate gives the swept pore volume $V_p \\approx Q\\bar t$ and the fluid transit velocity.

**Predict the cooling.** The tracer (fluid) front reached P-A in, say, a few weeks. The *thermal* front is slower by the retardation factor $R_{th}$ (rock heat capacity ÷ fluid heat capacity, scaled by porosity) — commonly several-fold — so the **thermal breakthrough** at P-A is estimated at $R_{th}\\times$(transit time): months to years, not weeks. That number is the decision: if it is comfortably beyond the field's planning horizon, the I-1→P-A connection is a *benefit* (pressure support, heat sweep); if it is short, I-1 must be moved, throttled, or its temperature managed to protect P-A.

**The design read.** The same test tells you to *keep* injecting at I-1 to support P-B (long, safe connection) while *watching or relocating* with respect to P-A (fast connection, nearer-term cooling). That split — which connections help and which threaten — is the decision value of a tracer test.

⟦TODO-Az: the Darajat version diverges here — for dry-steam, the tracer choice (liquid vs vapour-partitioning), the meaning of "recovered fraction" when phase changes occur, and the quenching risk to the steam zone all need your treatment. A real worked example should use a Darajat tracer test with measured rock properties; I have kept this fluid-neutral and flagged it.⟧`,
        id: `**Tracer test, dibaca ujung ke ujung (angka ilustratif).** ⟦TODO-Az: tiap angka placeholder buat nunjukin *prosedur*-nya — ganti dengan dataset Darajat dan properti batuan yang benar; jangan ngajarin angka-angka ini sebagai nilai Darajat.⟧

Kamu injeksi slug tracer konservatif di injektor I-1 dan sampel tiga produser dekat P-A, P-B, P-C selama bulan-bulan berikutnya.

1. **P-A** ngembaliin tracer **cepat** (puncak dalam beberapa minggu), **kuat** (recovered fraction tinggi), dan **tajam** (sedikit melebar). Bacaan: channel pendek, kecepatan-tinggi, volume-rendah langsung nyambungin I-1→P-A.
2. **P-B** ngembaliin dia **telat**, **lebar**, dan **lemah**. Bacaan: koneksi panjang, menyebar, volume-besar — lembut.
3. **P-C** ngembaliin **nihil**. Bacaan: gak ada koneksi langsung signifikan.

**Kuantifikasi P-A.** Dari return curve, **recovered mass fraction** (∫QC dt / M) ngukur seberapa banyak injektat I-1 nyampe P-A. **Mean residence time** $\\bar t$ (momen pertama) dengan flow rate ngasih swept pore volume $V_p \\approx Q\\bar t$ dan kecepatan transit fluida.

**Prediksi pendinginan.** Tracer (fluid) front nyampe P-A dalam, katakanlah, beberapa minggu. Front *termal* lebih lambat sebesar retardation factor $R_{th}$ (heat capacity batuan ÷ heat capacity fluida, di-scale porositas) — umumnya beberapa kali lipat — jadi **thermal breakthrough** di P-A diestimasi di $R_{th}\\times$(waktu transit): bulan sampai tahun, bukan minggu. Angka itu keputusannya: kalau dia nyaman di luar horizon perencanaan field, koneksi I-1→P-A itu *manfaat* (pressure support, sapuan panas); kalau dia pendek, I-1 harus dipindah, di-throttle, atau temperaturnya dikelola buat ngelindungin P-A.

**Bacaan desain.** Tes yang sama ngasih tau kamu buat *terus* injeksi di I-1 buat nyokong P-B (koneksi panjang, aman) sambil *ngawasin atau relokasi* terhadap P-A (koneksi cepat, pendinginan jangka-lebih-dekat). Pemisahan itu — koneksi mana yang bantu dan mana yang ngancam — itu nilai keputusan tracer test.

⟦TODO-Az: versi Darajat menyimpang di sini — buat dry-steam, pilihan tracer (liquid vs vapour-partitioning), makna "recovered fraction" pas perubahan fase terjadi, dan risiko quenching ke steam zone semua butuh perlakuan kamu. Worked example nyata harusnya pakai tracer test Darajat dengan properti batuan terukur; aku ngejaga ini netral-fluida dan nge-flag-nya.⟧`
      }
    },

    // ─────────────── 5. applications ───────────────
    {
      id: 'applications',
      heading: { en: 'Applications', id: 'Aplikasi' },
      body: {
        en: `**What reinjection + tracer testing decides.** Together they set the field's sustainable production strategy: how much fluid can be produced (reinjection support sets the pressure-limited ceiling), where to put injectors (tracer-mapped connections), and how long the field can run before cooling forces a change. The recovered-fraction and breakthrough-time numbers from a tracer test feed directly into the reinjection design and into the field-scale simulation that forecasts decades ahead.

**Monitoring over field life.** Reinjection and tracer testing are not one-time. As production redistributes pressure, connections change; periodic tracer tests update the connection map, and chemical/enthalpy monitoring of producers watches for the *actual* arrival of injected fluid (a falling enthalpy or a chemical signature of the injectate). The tracer prediction is checked against reality and the scheme adjusted.

**The sustainability frame.** ⟦TODO-Az: Axelsson's larger point — a geothermal field managed with good reinjection is far closer to renewable than one mined without it, because you keep pressure up and sweep heat from rock. For Darajat, the sustainable-production argument and the actual reinjection scheme are yours to state; please set how reinjection figures in Darajat's long-term management.⟧

**The dry-steam payoff and caveats.** ⟦TODO-Az: in a vapour-dominated field the calculus differs — reinjection is often peripheral condensate, the benefit/threat balance to the steam zone is specific, and tracer interpretation must handle phase change. These are the points a Darajat reservoir engineer would foreground; please set the emphasis.⟧

**The honest limits.** A tracer test sees the connections *that exist at the time of the test* between the *wells tested*; new wells and evolving pressure can change the picture, and the flow-channel model is an idealization of complex fracture networks. It is a powerful, direct measurement of connectivity, but like PTA it complements rather than replaces the field-scale numerical model (TOUGH2 lineage, O'Sullivan-Pruess-Lippmann) that integrates the whole reservoir over time.`,
        id: `**Apa yang reinjeksi + tracer testing putusin.** Bareng-bareng mereka nyetel strategi produksi berkelanjutan field: berapa banyak fluida bisa diproduksi (support reinjeksi nyetel ceiling yang dibatasi-pressure), di mana naruh injektor (koneksi yang dipetakan-tracer), dan berapa lama field bisa jalan sebelum pendinginan maksa perubahan. Angka recovered-fraction dan breakthrough-time dari tracer test masuk langsung ke desain reinjeksi dan ke simulasi skala-field yang ngeforecast berdekade ke depan.

**Monitoring sepanjang umur field.** Reinjeksi dan tracer testing bukan sekali. Seiring produksi ngeredistribusi pressure, koneksi berubah; tracer test berkala ngeupdate peta koneksi, dan monitoring kimia/enthalpy produser ngawasin kedatangan *sebenarnya* fluida yang diinjeksi (enthalpy yang turun atau tanda kimia injektat). Prediksi tracer dicek lawan realita dan skemanya disesuaikan.

**Frame keberlanjutan.** ⟦TODO-Az: poin lebih besar Axelsson — field geothermal yang dikelola dengan reinjeksi bagus jauh lebih dekat ke terbarukan dari yang ditambang tanpanya, karena kamu nahan pressure dan nyapu panas dari batuan. Buat Darajat, argumen produksi-berkelanjutan dan skema reinjeksi sebenarnya itu punya kamu buat nyatain; tolong set gimana reinjeksi berperan di manajemen jangka-panjang Darajat.⟧

**Payoff dan caveat dry-steam.** ⟦TODO-Az: di field vapour-dominated kalkulusnya beda — reinjeksi sering kondensat peripheral, keseimbangan manfaat/ancaman ke steam zone itu spesifik, dan interpretasi tracer harus nangani perubahan fase. Ini poin yang reservoir engineer Darajat bakal majuin; tolong set penekanannya.⟧

**Batas yang jujur.** Tracer test ngeliat koneksi *yang ada pada saat tes* antara *sumur yang dites*; sumur baru dan pressure yang berkembang bisa ngubah gambarannya, dan model flow-channel itu idealisasi dari jaringan fracture kompleks. Dia pengukuran konektivitas yang kuat, langsung, tapi kayak PTA dia ngelengkapi bukan ngganti model numerik skala-field (garis keturunan TOUGH2, O'Sullivan-Pruess-Lippmann) yang ngintegrasi seluruh reservoir over time.`
      }
    },

    // ─────────────── 6. practice ───────────────
    {
      id: 'practice',
      heading: { en: 'Practice', id: 'Latihan' },
      body: {
        en: `⟦TODO-Az: these items exercise the verified reinjection/tracer backbone; answers stay fluid-neutral and flag where the dry-steam specifics enter. Replace with Darajat items when you finalize.⟧

**1.** Reinjection is sometimes described as having three motives. What are they, and which one is non-negotiable?

<details><summary>Answer</summary>
(1) DISPOSAL of environmentally unacceptable spent fluid (arsenic, boron, H₂S, silica) — this is the non-negotiable one; the fluid cannot simply be discharged at surface. (2) PRESSURE SUPPORT — returning mass slows the production-driven pressure drawdown, sustaining deliverability. (3) HEAT SWEEP / enhanced recovery — flowing reinjected fluid through the rock recovers heat the fluid alone would leave behind, since the rock stores far more heat than the pore fluid. ⟦TODO-Az: for Darajat dry-steam, state how reinjection is actually used (peripheral condensate?) and what dominates.⟧
</details>

**2.** Why does a tracer break through to a producer much sooner than the cooling does, and why is that useful?

<details><summary>Answer</summary>
A conservative tracer rides the FLUID front, which moves at the flow velocity. The THERMAL (cooling) front moves slower by the thermal retardation factor R_th, because the cold fluid must continuously chill the rock it passes and the rock has a large heat capacity (R_th ≈ total rock+fluid heat capacity ÷ porosity×fluid heat capacity — commonly several-fold). So tracer breakthrough precedes thermal breakthrough by that factor. This is useful precisely because it is an EARLY WARNING: the tracer transit time and swept volume, multiplied by R_th, predict when cooling will arrive — years before it does — so injectors can be sited or managed to keep thermal breakthrough beyond the planning horizon. ⟦TODO-Az: insert the Darajat R_th and rock properties.⟧
</details>

**3.** Two producers return the same injector's tracer: P-A fast/strong/sharp, P-B late/weak/broad. What does each connection mean for reinjection management?

<details><summary>Answer</summary>
P-A has a short, fast, low-volume direct channel to the injector: strong pressure support, but a near-term thermal-breakthrough RISK — this connection must be watched, and the injector may need relocating/throttling/temperature management to protect P-A. P-B has a long, diffuse, large-volume connection: it provides pressure support with little cooling threat — a safe, beneficial connection to keep using. The test thus splits connections into "help" vs "threaten," which is the core reinjection-design decision. ⟦TODO-Az: confirm how this maps onto Darajat injector siting.⟧
</details>

**4.** What does the recovered mass fraction of a tracer tell you, and what does a near-zero return mean?

<details><summary>Answer</summary>
The recovered mass fraction (∫QC dt ÷ injected mass) is the share of the injected tracer that reaches a given producer — a direct measure of how strongly that injector is connected to that producer. A high fraction means a strong, well-swept connection; a low fraction means weak connectivity; a near-ZERO return means no significant direct flow path between the two — the injector is not (currently) supporting or threatening that well via a direct channel. Combined with mean residence time it also yields the swept pore volume of the connection. ⟦TODO-Az: under two-phase/flashing conditions the conservative-tracer assumption behind "recovered fraction" must be checked — verify for Darajat.⟧
</details>`,
        id: `⟦TODO-Az: item ini ngelatih backbone reinjeksi/tracer terverifikasi; jawaban tetap netral-fluida dan nge-flag di mana spesifik dry-steam masuk. Ganti dengan item Darajat pas kamu finalisasi.⟧

**1.** Reinjeksi kadang digambarkan punya tiga motif. Apa aja, dan yang mana yang gak bisa ditawar?

<details><summary>Jawaban</summary>
(1) PEMBUANGAN fluida bekas yang gak bisa diterima lingkungan (arsenik, boron, H₂S, silika) — ini yang gak bisa ditawar; fluidanya gak bisa gitu aja didischarge di permukaan. (2) PRESSURE SUPPORT — ngebalikin massa ngelambatin pressure drawdown yang didorong-produksi, nyokong deliverability. (3) SAPUAN PANAS / enhanced recovery — ngalirin fluida reinjeksi lewat batuan nge-recover panas yang fluida sendiri bakal tinggalin, karena batuan nyimpen panas jauh lebih banyak dari fluida pori. ⟦TODO-Az: buat dry-steam Darajat, nyatain gimana reinjeksi sebenarnya dipakai (kondensat peripheral?) dan apa yang dominan.⟧
</details>

**2.** Kenapa tracer breakthrough ke produser jauh lebih cepat dari pendinginan, dan kenapa itu berguna?

<details><summary>Jawaban</summary>
Tracer konservatif naik di FLUID front, yang gerak di kecepatan flow. THERMAL (cooling) front gerak lebih lambat sebesar thermal retardation factor R_th, karena fluida dingin harus terus-menerus ngedinginin batuan yang dia lewati dan batuan punya heat capacity besar (R_th ≈ heat capacity batuan+fluida total ÷ porositas×heat capacity fluida — umumnya beberapa kali lipat). Jadi tracer breakthrough mendahului thermal breakthrough sebesar faktor itu. Ini berguna persis karena dia PERINGATAN DINI: waktu transit tracer dan swept volume, dikali R_th, ngeprediksi kapan pendinginan bakal tiba — bertahun sebelum terjadi — jadi injektor bisa disitkan atau dikelola buat ngejaga thermal breakthrough di luar horizon perencanaan. ⟦TODO-Az: masukin R_th Darajat dan properti batuan.⟧
</details>

**3.** Dua produser ngembaliin tracer injektor yang sama: P-A cepat/kuat/tajam, P-B telat/lemah/lebar. Apa arti tiap koneksi buat manajemen reinjeksi?

<details><summary>Jawaban</summary>
P-A punya channel langsung pendek, cepat, volume-rendah ke injektor: pressure support kuat, tapi RISIKO thermal-breakthrough jangka-dekat — koneksi ini harus diawasi, dan injektor mungkin perlu direlokasi/di-throttle/dikelola temperatur buat ngelindungin P-A. P-B punya koneksi panjang, menyebar, volume-besar: dia nyediain pressure support dengan ancaman pendinginan kecil — koneksi aman, bermanfaat buat terus dipakai. Tes dengan demikian misahin koneksi jadi "bantu" vs "ancam," yang itu keputusan inti desain-reinjeksi. ⟦TODO-Az: konfirmasi gimana ini memetakan ke siting injektor Darajat.⟧
</details>

**4.** Apa yang recovered mass fraction tracer ngasih tau kamu, dan apa arti return mendekati-nol?

<details><summary>Jawaban</summary>
Recovered mass fraction (∫QC dt ÷ massa diinjeksi) itu bagian tracer yang diinjeksi yang nyampe produser tertentu — ukuran langsung seberapa kuat injektor itu terhubung ke produser itu. Fraksi tinggi berarti koneksi kuat, ter-sweep baik; fraksi rendah berarti konektivitas lemah; return mendekati-NOL berarti gak ada jalur flow langsung signifikan antara keduanya — injektor (saat ini) gak nyokong atau ngancam sumur itu lewat channel langsung. Digabung dengan mean residence time dia juga ngasih swept pore volume koneksi. ⟦TODO-Az: di kondisi two-phase/flashing asumsi tracer-konservatif di balik "recovered fraction" harus dicek — verifikasi buat Darajat.⟧
</details>`
      }
    },

    // ─────────────── 7. connections ───────────────
    {
      id: 'connections',
      heading: { en: 'Connections', id: 'Koneksi' },
      body: {
        en: `- **Reservoir engineering home**: [Grant & Bixley 2011](item:grant-bixley-2011) covers reinjection and injection testing in its reservoir-management chapters; this module focuses the reinjection + tracer story.
- **Well-test sibling**: [Horne 1995](item:horne-1995) — PTA reads the rock around *one* well; a tracer test reads the connection *between* an injector and a producer. Injection/fall-off tests use PTA machinery on a reinjector.
- **Field-scale model**: [O'Sullivan-Pruess-Lippmann 2001](item:osullivan-pruess-lippmann-2001) (TOUGH2) ingests tracer-derived connections and reinjection schemes to forecast pressure and temperature over decades.
- **Chemistry of the injectate**: [Arnórsson 2000](item:arnorsson-2000) / [Henley-Truesdell-Barton 1984](item:henley-truesdell-barton-1984) — silica/calcite in spent fluid drives scaling in injectors and surface lines, and chemical/isotopic signatures help detect injected fluid arriving at producers.
- **Sustainability framing**: [Tester et al. 2006](item:tester-mit-2006) and the broader resource picture — reinjection is central to whether a field is managed as renewable.`,
        id: `- **Rumah reservoir engineering**: [Grant & Bixley 2011](item:grant-bixley-2011) ngebahas reinjeksi dan injection testing di bab manajemen-reservoir-nya; module ini ngefokusin cerita reinjeksi + tracer.
- **Saudara well-test**: [Horne 1995](item:horne-1995) — PTA baca batuan di sekitar *satu* sumur; tracer test baca koneksi *antara* injektor dan produser. Injection/fall-off test pakai mesin PTA pada reinjektor.
- **Model skala-field**: [O'Sullivan-Pruess-Lippmann 2001](item:osullivan-pruess-lippmann-2001) (TOUGH2) nyerap koneksi turunan-tracer dan skema reinjeksi buat ngeforecast pressure dan temperatur over berdekade.
- **Kimia injektat**: [Arnórsson 2000](item:arnorsson-2000) / [Henley-Truesdell-Barton 1984](item:henley-truesdell-barton-1984) — silika/kalsit di fluida bekas ngedorong scaling di injektor dan jalur permukaan, dan tanda kimia/isotopik bantu ngedeteksi fluida yang diinjeksi tiba di produser.
- **Framing keberlanjutan**: [Tester et al. 2006](item:tester-mit-2006) dan gambaran resource lebih luas — reinjeksi sentral buat apakah field dikelola sebagai terbarukan.`
      }
    },

    // ─────────────── 8. sources ───────────────
    {
      id: 'sources',
      heading: { en: 'Sources', id: 'Sumber' },
      body: {
        en: `- **Axelsson, G.** (2010). "Sustainable geothermal utilization — Case histories; definitions; research issues and modelling." *Geothermics* 39(4), 283–291. (Anchor.)
- **Axelsson, G., Björnsson, G., Montalvo, F.** (2005). "Quantitative Interpretation of Tracer Test Data." *Proc. World Geothermal Congress 2005*, Antalya, 12 pp. The flow-channel interpretation method (TRINV inversion).
- **Axelsson, G., Flóvenz, Ó. G., Hauksdóttir, S., Hjartarson, A., Liu, J.** (2001). "Analysis of tracer test data, and injection-induced cooling, in the Laugaland geothermal field, N-Iceland." *Geothermics* 30(6), 697–725. Classic reinjection-cooling case.
- **Shook, G. M.** (2001). "Predicting thermal breakthrough in heterogeneous media from tracer tests." *Geothermics* 30(6), 573–589. Derives the thermal-breakthrough curve from the tracer return curve via the tracer–heat transport analogy.
- **Grant, M. A., and Bixley, P. F.** (2011). *Geothermal Reservoir Engineering*, 2nd ed. Academic Press / Elsevier. Reinjection + injection testing (in this catalog).`,
        id: `- **Axelsson, G.** (2010). "Sustainable geothermal utilization — Case histories; definitions; research issues and modelling." *Geothermics* 39(4), 283–291. (Anchor.)
- **Axelsson, G., Björnsson, G., Montalvo, F.** (2005). "Quantitative Interpretation of Tracer Test Data." *Proc. World Geothermal Congress 2005*, Antalya, 12 hlm. Metode interpretasi flow-channel (inversi TRINV).
- **Axelsson, G., Flóvenz, Ó. G., Hauksdóttir, S., Hjartarson, A., Liu, J.** (2001). "Analysis of tracer test data, and injection-induced cooling, in the Laugaland geothermal field, N-Iceland." *Geothermics* 30(6), 697–725. Kasus reinjeksi-pendinginan klasik.
- **Shook, G. M.** (2001). "Predicting thermal breakthrough in heterogeneous media from tracer tests." *Geothermics* 30(6), 573–589. Nurunin kurva thermal-breakthrough dari tracer return curve lewat analogi transport tracer–panas.
- **Grant, M. A., dan Bixley, P. F.** (2011). *Geothermal Reservoir Engineering*, ed. ke-2. Academic Press / Elsevier. Reinjeksi + injection testing (di katalog ini).`
      }
    },
  ],

  audio: { enabled: true },

  selfTest: [
    {
      sectionId: 'motivation',
      question: {
        en: 'Reinjection serves three purposes but is governed by one hazard. Name the purposes and the hazard, and explain the trade-off between them.',
        id: 'Reinjeksi ngelayani tiga tujuan tapi diatur oleh satu bahaya. Sebutin tujuan-tujuannya dan bahayanya, dan jelasin trade-off di antara mereka.'
      },
      prompt: { en: 'Before continuing, try answering:', id: 'Sebelum lanjut, coba jawab:' },
      answer: {
        en: 'Purposes: (1) DISPOSAL of environmentally unacceptable spent fluid (As, B, H₂S, silica); (2) PRESSURE SUPPORT against production drawdown; (3) HEAT SWEEP — recovering stored heat from the rock, which holds far more than the fluid. The governing hazard is THERMAL BREAKTHROUGH: the injected fluid is colder than the reservoir, so if it reaches a producer it cools that well and cuts its output. The trade-off: you want enough hydraulic connection between injector and producers to support pressure and sweep heat, but NOT so direct a connection that the cold front arrives within the project lifetime. Reinjection design is the management of exactly this tension. ⟦TODO-Az: dry-steam Darajat reinjection (peripheral condensate, steam-zone quenching) is your adaptation.⟧',
        id: 'Tujuan: (1) PEMBUANGAN fluida bekas yang gak bisa diterima lingkungan (As, B, H₂S, silika); (2) PRESSURE SUPPORT lawan drawdown produksi; (3) SAPUAN PANAS — nge-recover panas tersimpan dari batuan, yang nyimpen jauh lebih banyak dari fluida. Bahaya yang ngatur itu THERMAL BREAKTHROUGH: fluida yang diinjeksi lebih dingin dari reservoir, jadi kalau dia nyampe produser dia ngedinginin sumur itu dan motong output-nya. Trade-off-nya: kamu mau koneksi hidrolik cukup antara injektor dan produser buat nyokong pressure dan nyapu panas, tapi JANGAN koneksi terlalu langsung sampe cold front tiba dalam masa hidup proyek. Desain reinjeksi itu manajemen tepat dari ketegangan ini. ⟦TODO-Az: reinjeksi dry-steam Darajat (kondensat peripheral, quenching steam-zone) itu adaptasi kamu.⟧'
      }
    },
    {
      sectionId: 'formalization',
      question: {
        en: 'A tracer breaks through to a producer in a few weeks. Why is the thermal breakthrough not also in a few weeks, and how do you estimate when it will be?',
        id: 'Tracer breakthrough ke produser dalam beberapa minggu. Kenapa thermal breakthrough gak juga dalam beberapa minggu, dan gimana kamu ngestimasi kapan dia bakal terjadi?'
      },
      prompt: { en: 'Before continuing, try answering:', id: 'Sebelum lanjut, coba jawab:' },
      answer: {
        en: 'Because the tracer and the heat travel at different speeds. The conservative tracer rides the FLUID front at the flow velocity. The COOLING (thermal) front is retarded: as cold fluid advances it must chill the rock matrix it passes, and the rock has a large heat capacity, so the thermal front lags by the retardation factor R_th ≈ (rock+fluid heat capacity)/(porosity × fluid heat capacity), commonly several-fold. So thermal breakthrough time ≈ R_th × (tracer transit time): a few weeks of tracer transit can mean months-to-years before cooling. You estimate it by reading the fluid transit time and swept volume from the tracer return curve, then multiplying by R_th from the rock properties — predicting the cooling before it happens. ⟦TODO-Az: insert the Darajat R_th / rock ρc and porosity.⟧',
        id: 'Karena tracer dan panas gerak di kecepatan berbeda. Tracer konservatif naik di FLUID front di kecepatan flow. COOLING (thermal) front di-retard: pas fluida dingin maju dia harus ngedinginin matriks batuan yang dia lewati, dan batuan punya heat capacity besar, jadi thermal front ketinggalan sebesar retardation factor R_th ≈ (heat capacity batuan+fluida)/(porositas × heat capacity fluida), umumnya beberapa kali lipat. Jadi waktu thermal breakthrough ≈ R_th × (waktu transit tracer): beberapa minggu transit tracer bisa berarti bulan-sampai-tahun sebelum pendinginan. Kamu ngestimasinya dengan baca waktu transit fluida dan swept volume dari tracer return curve, terus ngali R_th dari properti batuan — ngeprediksi pendinginan sebelum terjadi. ⟦TODO-Az: masukin R_th / ρc batuan dan porositas Darajat.⟧'
      }
    },
    {
      sectionId: 'applications',
      question: {
        en: 'Why is a tracer test, like a well test, a complement to rather than a replacement for a field-scale reservoir simulation?',
        id: 'Kenapa tracer test, kayak well test, itu pelengkap bukan pengganti simulasi reservoir skala-field?'
      },
      prompt: { en: 'Before continuing, try answering:', id: 'Sebelum lanjut, coba jawab:' },
      answer: {
        en: 'Because it measures something specific and local in time. A tracer test reveals the connections that exist AT THE TIME OF THE TEST between the SPECIFIC wells tested, interpreted through an idealized flow-channel model of what are really complex fracture networks. It is a direct, hard measurement of injector→producer connectivity and a quantitative breakthrough predictor — but new wells, evolving pressure, and changing flow paths can alter the picture, and it does not by itself integrate the whole field over decades. The field-scale simulation (TOUGH2 lineage) does that integration; the tracer test supplies calibrated connection data that constrain and validate the model. Local measurement + global integrator — the same division of labour as PTA and simulation. ⟦TODO-Az: confirm how Darajat chains tracer tests → reinjection design → numerical model.⟧',
        id: 'Karena dia ngukur sesuatu yang spesifik dan lokal dalam waktu. Tracer test ngungkap koneksi yang ada PADA SAAT TES antara sumur SPESIFIK yang dites, diinterpretasi lewat model flow-channel ideal dari yang sebenarnya jaringan fracture kompleks. Dia pengukuran langsung, keras dari konektivitas injektor→produser dan prediktor breakthrough kuantitatif — tapi sumur baru, pressure yang berkembang, dan jalur flow yang berubah bisa ngubah gambarannya, dan dia sendiri gak ngintegrasi seluruh field over berdekade. Simulasi skala-field (garis keturunan TOUGH2) ngelakuin integrasi itu; tracer test nyuplai data koneksi terkalibrasi yang ngebatasi dan memvalidasi model. Pengukuran lokal + integrator global — pembagian kerja yang sama kayak PTA dan simulasi. ⟦TODO-Az: konfirmasi gimana Darajat ngerangkai tracer test → desain reinjeksi → model numerik.⟧'
      }
    },
  ],
};
