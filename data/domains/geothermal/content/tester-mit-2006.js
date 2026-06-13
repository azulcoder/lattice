// ─────────────────────────────────────────────────────────────────────────
// GEOTHERMAL — EGS / FRONTIER item. General claims verified against the
// literature (2026-06-13); the inline owner-review flags have been cleared.
//
// VERIFIED AGAINST SOURCES (multi-source, primary where possible):
//   • Bibliography: MIT/DOE/INL report INL/EXT-06-11746, DOI 10.2172/1220063,
//     18-member panel chaired by Tester (OSTI 1220063; MIT Energy Initiative).
//   • Headline findings: in-place resource base ~13 million EJ; recoverable
//     >200,000 EJ (~2,000× US 2005 primary energy); ~100 GWe US by 2050;
//     ~USD 0.8-1 B over ~15 yr R&D (MIT News; MIT Energy Initiative; UMich
//     Center for Sustainable Systems; Tester et al. 2007 PNAS-indexed paper).
//   • Recovery factor: Sanyal & Butler (2005), GRC Trans. 29, 131-137,
//     ~40% idealized; MIT used a conservative ~2% (Grant 2012; Frontiers 2021).
//   • Author bio: Tester (H.P. Meissner Prof. ChemE, MIT; PhD MIT 1971;
//     Cornell 2009; NAE 2021); Heat Mining (Armstead & Tester, 1987, E.&F.N.
//     Spon, ISBN 9780419122302). (Cornell Chronicle; Cornell/MIT profiles.)
//   • EGS-assist transfer to conventional hydrothermal fields: stimulation /
//     injectivity enhancement on field margins is a real, documented practice
//     (Desert Peak/Ormat; Raft River/Univ. Utah; Patuha, Indonesia) — stated
//     here as a GENERAL claim only.
//
// Darajat operational facts stay EXTERNAL to this module by design: EGS is the
// engineered (petrothermal) CONTRAST to Darajat's natural vapour-dominated
// hydrothermal system, and the module never asserts a Darajat-specific number
// or practice. Whether/how EGS-assist stimulation is appropriate for Darajat's
// own wells and margins remains an Az operational judgement (not asserted here).
// Seed cards remain deferred until Az signs off.
// Full prep: notes/tester-mit-2006-research-prep-2026-06-02.md
// ─────────────────────────────────────────────────────────────────────────

export const CONTENT = {
  itemId: 'tester-mit-2006',
  estimatedReadMinutes: 30,

  author: {
    fullName: { en: `Jefferson W. Tester (panel chair) — MIT EGS assessment`, id: `Jefferson W. Tester (ketua panel) — asesmen EGS MIT` },
    affiliation: {
      en: `Massachusetts Institute of Technology — for the U.S. Department of Energy / Idaho National Laboratory (an 18-member interdisciplinary panel)`,
      id: `Massachusetts Institute of Technology — untuk U.S. Department of Energy / Idaho National Laboratory (panel interdisipliner 18 anggota)`
    },
    tagline: {
      en: `The widely-cited 2006 assessment that argued geothermal could be recast from a niche hydrothermal resource into a potentially nationwide one — IF the heat locked in hot dry rock can be engineered into a reservoir.`,
      id: `Asesmen 2006 yang banyak dikutip yang berargumen geothermal bisa di-recast dari resource hydrothermal niche jadi yang berpotensi nasional — KALAU panas yang terkunci di hot dry rock bisa di-engineer jadi reservoir.`
    },
    bio: {
      en: `This is the 2006 MIT-led panel report on Enhanced Geothermal Systems (EGS), prepared for the U.S. Department of Energy and published through Idaho National Laboratory. The 18-member interdisciplinary panel was chaired by Jefferson W. Tester, then the H. P. Meissner Professor of Chemical Engineering at MIT (and a former director of the MIT Energy Laboratory; PhD MIT, 1971). Tester carried the U.S. hot-dry-rock (HDR) tradition — the Los Alamos Fenton Hill experiments of the 1970s-80s — forward into a modern framework, co-authoring the early HDR synthesis *Heat Mining* (with H. C. H. Armstead), and has worked broadly in energy-systems engineering and techno-economics; he later moved to Cornell (2009) to lead its Earth Source Heat project and was elected to the U.S. National Academy of Engineering (2021). The report's central move is conceptual: where conventional geothermal needs heat, water and natural permeability to occur together (a hydrothermal field), EGS proposes to supply the water and *engineer* the permeability into otherwise-tight hot rock — turning the vast conductive heat resource beneath the continent, not just the rare naturally-permeable pockets, into a candidate energy source.`,
      id: `Ini laporan panel 2006 yang dipimpin MIT tentang Enhanced Geothermal Systems (EGS), disiapkan untuk U.S. Department of Energy dan diterbitkan lewat Idaho National Laboratory. Panel interdisipliner 18 anggota diketuai Jefferson W. Tester, waktu itu H. P. Meissner Professor of Chemical Engineering di MIT (dan mantan direktur MIT Energy Laboratory; PhD MIT, 1971). Tester ngebawa tradisi hot-dry-rock (HDR) AS — eksperimen Los Alamos Fenton Hill tahun 1970-80-an — maju ke framework modern, co-authoring sintesis HDR awal *Heat Mining* (dengan H. C. H. Armstead) dan kerja luas di energy-systems engineering dan techno-economics; dia kemudian pindah ke Cornell (2009) buat mimpin proyek Earth Source Heat-nya dan terpilih ke U.S. National Academy of Engineering (2021). Langkah sentral laporan-nya konseptual: di mana geothermal konvensional butuh panas, air dan natural permeability terjadi bareng (field hydrothermal), EGS ngusulin nyediain air-nya dan *meng-engineer* permeability-nya ke hot rock yang sebaliknya tight — ngubah resource panas konduktif yang luas di bawah benua, bukan cuma kantong naturally-permeable yang langka, jadi kandidat sumber energi.`
    },
    focus: {
      en: `The case for EGS as a major potential U.S. energy resource: the petrothermal concept (engineer a reservoir in hot, low-permeability rock by hydraulic stimulation, then circulate injected water), the size of the resource (heat-in-place to ~10 km depth, and the much smaller but still enormous recoverable fraction), the cost and learning-curve economics, the environmental considerations (chiefly induced seismicity), and the R&D priorities needed to make it competitive. It is the modern *frontier* of geothermal — the engineered counterpart to the natural hydrothermal systems the rest of this catalog studies.`,
      id: `Argumen buat EGS sebagai potensi resource energi AS yang major: konsep petrothermal (engineer reservoir di hot rock low-permeability lewat hydraulic stimulation, lalu sirkulasiin air yang di-inject), ukuran resource-nya (heat-in-place sampai kedalaman ~10 km, dan fraksi recoverable yang jauh lebih kecil tapi tetap enorm), ekonomi cost dan learning-curve, pertimbangan environmental (terutama induced seismicity), dan prioritas R&D yang dibutuhin buat ngebikin-nya kompetitif. Ini *frontier* modern geothermal — counterpart engineered dari sistem hydrothermal natural yang dipelajari sisa katalog ini.`
    },
    intellectualLineage: {
      en: `The U.S. hot-dry-rock program — the Los Alamos Fenton Hill field experiments (1970s-80s) that first tried to mine heat from impermeable granite — reframed and scaled up under the modern label "EGS," joined to MIT's energy-systems and techno-economic-assessment tradition. On the reservoir side it extends conventional geothermal reservoir engineering (Grant & Bixley) to *engineered* reservoirs, where permeability and the working fluid are created rather than found.`,
      id: `Program hot-dry-rock AS — eksperimen lapangan Los Alamos Fenton Hill (1970-80-an) yang pertama nyoba nambang panas dari granite impermeable — di-reframe dan di-scale-up di bawah label modern "EGS," digabung sama tradisi energy-systems dan techno-economic-assessment MIT. Di sisi reservoir dia nge-extend reservoir engineering geothermal konvensional (Grant & Bixley) ke reservoir *engineered*, di mana permeability dan working fluid dibikin bukan ditemukan.`
    },
    keyCollaborators: {
      en: `The **18-member MIT panel**, including **Brian J. Anderson** and **Anthony S. Batchelor** among the named co-authors; the report's **U.S. DOE / INL** sponsors. Intellectually, **H. C. H. Armstead** (the *Heat Mining* HDR collaboration) and the **Sanyal & Butler (2005)** recovery-factor analysis the report draws on.`,
      id: `**Panel MIT 18 anggota**, termasuk **Brian J. Anderson** dan **Anthony S. Batchelor** di antara co-author yang disebut; sponsor **U.S. DOE / INL** laporan-nya. Secara intelektual, **H. C. H. Armstead** (kolaborasi HDR *Heat Mining*) dan analisis recovery-factor **Sanyal & Butler (2005)** yang laporan-nya pakai.`
    },
    legacy: {
      en: `The report reframed geothermal in the U.S. policy and research imagination: it defined the modern scope of "EGS," put a very large (and much-debated) number on the recoverable resource, built the cost and supply-curve models that later programs argued over, and set an R&D agenda — drilling-cost reduction, reservoir creation and stimulation, and induced-seismicity management — that still organizes the field. It predates the Basel (2006) and Pohang (2017) stimulation-induced earthquakes that later made induced seismicity the defining social and technical risk for EGS, so its treatment of that risk is the pre-cautionary-case baseline.`,
      id: `Laporan-nya nge-reframe geothermal di imajinasi policy dan riset AS: dia mendefinisikan scope modern "EGS," naruh angka yang sangat besar (dan banyak diperdebatkan) di recoverable resource, bangun model cost dan supply-curve yang program-program kemudian perdebatkan, dan nge-set agenda R&D — pengurangan drilling-cost, reservoir creation dan stimulation, dan manajemen induced-seismicity — yang masih ngorganisir field-nya. Dia mendahului gempa yang diinduksi stimulasi Basel (2006) dan Pohang (2017) yang kemudian ngebikin induced seismicity jadi risiko sosial dan teknis yang mendefinisikan EGS, jadi treatment-nya atas risiko itu adalah baseline pra-cautionary-case.`
    },
    keyWorks: [
      { year: 2006, title: `The Future of Geothermal Energy: Impact of Enhanced Geothermal Systems (EGS) on the United States in the 21st Century (panel chair; this item)`, venue: `Massachusetts Institute of Technology / U.S. DOE / Idaho National Laboratory, report INL/EXT-06-11746` },
      { year: 1987, title: `Heat Mining: A New Source of Energy (with H. C. H. Armstead) — the hot-dry-rock precursor to EGS`, venue: `E. & F. N. Spon, London` },
      { year: 2005, title: `Sustainable Energy: Choosing Among Options (with Drake, Driscoll, Golay and Peters)`, venue: `MIT Press, Cambridge MA` },
      { year: 1997, title: `Thermodynamics and Its Applications, 3rd ed. (with Michael Modell)`, venue: `Prentice Hall, Upper Saddle River NJ` },
    ],
  },

  sections: [
    // ─────────────── 1. motivation ───────────────
    {
      id: 'motivation',
      heading: { en: 'Why this matters', id: 'Kenapa ini penting' },
      body: {
        en: `Every other item in this catalog studies a *natural* geothermal system: a place where heat, water and permeable rock happen to occur together, so a well drilled into it produces a hot fluid you can use. Darajat is the vapour-dominated end-member of that natural class. But such places are rare — they sit on volcanic and tectonic hotspots — which has always made geothermal a niche resource, large where it exists but confined to a few favoured spots.

The 2006 MIT-led panel, chaired by Jefferson Tester, asked a different question. Heat is *everywhere* if you drill deep enough: the conductive temperature gradient means hot rock underlies the entire continent, not just the volcanic provinces. What stops you from using it is that the deep rock is usually **tight** — it has the heat but not the permeability or the water to carry that heat to a well. So what if you **engineer** the missing ingredients: fracture the hot rock to create permeability (hydraulic stimulation), and inject your own water to circulate through it and pick up the heat? That is an **Enhanced (or Engineered) Geothermal System** — EGS, also called *petrothermal* geothermal, in contrast to the natural *hydrothermal* systems.

The report's headline is what gave it its outsized influence. Assessing the U.S., the panel estimated the **heat stored in place** to ~10 km depth at on the order of **13 million EJ** — a number so large it is almost meaningless on its own. The point is the *recoverable* fraction: even on conservative assumptions, the panel put the recoverable EGS resource at **more than 200,000 EJ**, roughly **2,000 times** total U.S. annual primary energy use (~100 EJ/yr). On that basis it projected that EGS could supply on the order of **100 GWe** of competitive base-load U.S. capacity **by 2050**, given a sustained R&D investment it sized at roughly **USD 0.8-1 billion over ~15 years** — small next to the prize. The resource, in other words, is not the constraint; engineering and cost are.`,
        id: `Setiap item lain di katalog ini mempelajari sistem geothermal *natural*: tempat di mana panas, air dan rock permeable kebetulan terjadi bareng, jadi sumur yang dibor ke situ ngeproduksi hot fluid yang bisa kamu pakai. Darajat itu end-member vapour-dominated dari kelas natural itu. Tapi tempat begitu langka — mereka duduk di hotspot vulkanik dan tektonik — yang selalu ngebikin geothermal jadi resource niche, besar di mana dia ada tapi terbatas ke beberapa tempat favoured.

Panel pimpinan MIT 2006, diketuai Jefferson Tester, nanya pertanyaan berbeda. Panas itu *di mana-mana* kalau kamu ngebor cukup dalam: gradien temperature konduktif berarti hot rock ada di bawah seluruh benua, bukan cuma provinsi vulkanik. Yang nahan kamu pakai itu adalah deep rock biasanya **tight** — dia punya panas-nya tapi bukan permeability atau air buat ngebawa panas itu ke sumur. Jadi gimana kalau kamu **engineer** ingredient yang hilang: nge-fracture hot rock buat bikin permeability (hydraulic stimulation), dan inject air kamu sendiri buat sirkulasi lewatnya dan ngambil panas? Itu **Enhanced (atau Engineered) Geothermal System** — EGS, juga disebut geothermal *petrothermal*, kontras sama sistem *hydrothermal* natural.

Headline laporan-nya yang ngasih dia pengaruh besar. Nge-asses AS, panel ngestimasi **panas yang tersimpan in-place** sampai kedalaman ~10 km di orde **13 juta EJ** — angka yang begitu besar sampai hampir gak bermakna sendiri. Poin-nya itu fraksi *recoverable*: bahkan dengan asumsi konservatif, panel naruh recoverable EGS resource di **lebih dari 200,000 EJ**, kira-kira **2,000 kali** total pemakaian primary energy tahunan AS (~100 EJ/thn). Atas dasar itu dia memproyeksikan EGS bisa nyediain orde **100 GWe** kapasitas base-load AS yang kompetitif **pada 2050**, dengan investasi R&D berkelanjutan yang dia ukur kira-kira **USD 0.8-1 miliar selama ~15 tahun** — kecil dibanding hadiahnya. Resource-nya, dengan kata lain, bukan constraint-nya; engineering dan cost yang constraint.`
      }
    },

    // ─────────────── 2. intuition ───────────────
    {
      id: 'intuition',
      heading: { en: 'Intuition', id: 'Intuisi' },
      body: {
        en: `A working geothermal system needs three things together: **heat**, a **fluid** to carry it, and **permeability** for that fluid to move through. A natural hydrothermal field — Darajat, say — is the lucky case where geology supplied all three: a magmatic heat source, meteoric water, and fractured/permeable rock, all in one place. You drill in and the reservoir is already plumbed.

EGS is what you do when nature supplied only the heat. Picture drilling into a hot, intact granite — plenty of stored heat, but tight: no connected pore space, no fluid moving. EGS makes the other two ingredients itself. It **injects water** (the fluid), and it **engineers permeability** by pumping that water in at high pressure to open and shear the rock's existing fractures — *hydraulic stimulation* — creating a connected fracture network between an injection well and one or more production wells. Cold water goes down the injector, sweeps heat from the fracture faces, and comes up the producer hot. You have built a reservoir where there wasn't one.

Two intuitions explain the report's numbers. **Why the resource is so huge:** the heat-in-place scales with the *whole* hot rock volume you can reach, not just the rare naturally-permeable pockets — so once you can engineer permeability anywhere, the resource base is essentially the conductive heat of the accessible crust, which is colossal. **Why the recoverable part is far smaller:** you only sweep the rock your fracture network actually contacts, you can only extract heat down to some abandonment temperature (not to ambient), and the swept rock cools over the project's life — *thermal drawdown* — so a single engineered reservoir gives up only a fraction of its heat before it must be re-drilled or retired. The gap between ~13 million EJ in place and >200,000 EJ recoverable is exactly that recovery fraction.

The catch — and the reason the report is about R&D, not just resource — is that creating and sustaining the fracture network is hard, deep drilling is expensive, and high-pressure stimulation can trigger felt earthquakes (*induced seismicity*).`,
        id: `Sistem geothermal yang berfungsi butuh tiga hal bareng: **panas**, **fluid** buat ngebawanya, dan **permeability** buat fluid itu bergerak lewatnya. Field hydrothermal natural — Darajat, misalnya — itu kasus beruntung di mana geologi nyediain ketiganya: sumber panas magmatik, air meteoric, dan rock fractured/permeable, semua di satu tempat. Kamu ngebor masuk dan reservoir-nya udah plumbed.

EGS itu yang kamu lakuin pas nature cuma nyediain panas-nya. Bayangin ngebor ke granite yang panas, utuh — banyak panas tersimpan, tapi tight: gak ada connected pore space, gak ada fluid bergerak. EGS bikin dua ingredient lainnya sendiri. Dia **inject air** (fluid-nya), dan dia **engineer permeability** dengan mompa air itu masuk di tekanan tinggi buat ngebuka dan nge-shear fracture rock yang udah ada — *hydraulic stimulation* — bikin connected fracture network antara injection well dan satu atau lebih production well. Air dingin turun lewat injector, nyapu panas dari muka fracture, dan naik lewat producer dalam keadaan panas. Kamu udah bangun reservoir di mana tadinya gak ada.

Dua intuisi ngejelasin angka laporan-nya. **Kenapa resource-nya begitu besar:** heat-in-place scale sama *seluruh* volume hot rock yang bisa kamu capai, bukan cuma kantong naturally-permeable yang langka — jadi begitu kamu bisa engineer permeability di mana saja, resource base-nya pada dasarnya panas konduktif dari kerak yang accessible, yang kolosal. **Kenapa bagian recoverable jauh lebih kecil:** kamu cuma nyapu rock yang fracture network kamu beneran kontak, kamu cuma bisa ngambil panas sampai temperature abandonment tertentu (bukan sampai ambient), dan rock yang tersapu mendingin sepanjang umur proyek — *thermal drawdown* — jadi satu engineered reservoir cuma ngasih sebagian panas-nya sebelum harus di-re-drill atau dipensiunkan. Gap antara ~13 juta EJ in-place dan >200,000 EJ recoverable itu persis fraksi recovery itu.

Catch-nya — dan alasan laporan-nya tentang R&D, bukan cuma resource — itu bikin dan ngejaga fracture network itu susah, deep drilling mahal, dan high-pressure stimulation bisa nge-trigger gempa yang kerasa (*induced seismicity*).`
      }
    },

    // ─────────────── 3. formalization ───────────────
    {
      id: 'formalization',
      heading: { en: 'The resource arithmetic', id: 'Aritmetika resource' },
      body: {
        en: `The report's resource estimate rests on a volumetric **stored-heat** (heat-in-place) calculation. The thermal energy held in a rock volume above a reference temperature is its sensible heat:

$$Q = \\rho_r\\,C_r\\,V\\,(T_r - T_0)$$

where $\\rho_r$ is rock density, $C_r$ its specific heat, $V$ the rock volume, $T_r$ the rock temperature, and $T_0$ a reference (e.g. mean surface or rejection temperature). Summed over the accessible volume of the crust to ~10 km, this is the **resource base** — the ~13 million EJ figure for the U.S. It is an upper bound on what physics makes available, not what you can produce.

The **recoverable** energy is much smaller, captured by a dimensionless **recovery factor** $R_g$:

$$Q_{rec} = R_g\\,\\rho_r\\,C_r\\,V_{active}\\,(T_{r,i} - T_{r,a})$$

over the *active* (swept) volume, and only down from the initial rock temperature $T_{r,i}$ to an **abandonment temperature** $T_{r,a}$ below which the fluid is too cool to use. The recovery factor bundles the fraction of rock the engineered fracture network actually sweeps and how completely it is cooled. Idealized stimulated-volume models (Sanyal & Butler, 2005) suggested $R_g$ could reach ~40%, but the panel deliberately used **conservative values (roughly 2-20%)** for its headline recoverable estimate — which is why >200,000 EJ recoverable sits so far below the ~13 million EJ base (an effective recovery of order ~1%).

(Units: 1 EJ = $10^{18}$ J. The same volumetric logic underlies any geothermal resource estimate; what is distinctive about EGS is that $V_{active}$ is *created* by stimulation rather than inherited from natural permeability, and that it shrinks in usable temperature over time as the reservoir undergoes thermal drawdown.)`,
        id: `Estimasi resource laporan-nya bersandar pada kalkulasi **stored-heat** (heat-in-place) volumetrik. Energi termal yang ditahan di volume rock di atas temperature referensi itu sensible heat-nya:

$$Q = \\rho_r\\,C_r\\,V\\,(T_r - T_0)$$

di mana $\\rho_r$ itu densitas rock, $C_r$ specific heat-nya, $V$ volume rock, $T_r$ temperature rock, dan $T_0$ referensi (mis. permukaan rata-rata atau temperature rejection). Dijumlahin atas volume kerak yang accessible sampai ~10 km, ini **resource base** — figur ~13 juta EJ buat AS. Dia upper bound atas apa yang fisika sediain, bukan apa yang bisa kamu produksi.

Energi **recoverable** jauh lebih kecil, ditangkap sama **recovery factor** $R_g$ tak-berdimensi:

$$Q_{rec} = R_g\\,\\rho_r\\,C_r\\,V_{active}\\,(T_{r,i} - T_{r,a})$$

atas volume *active* (tersapu), dan cuma turun dari temperature rock awal $T_{r,i}$ ke **abandonment temperature** $T_{r,a}$ yang di bawahnya fluid terlalu dingin buat dipakai. Recovery factor ngebundel fraksi rock yang engineered fracture network beneran sapu dan seberapa lengkap dia didinginkan. Model stimulated-volume yang diidealkan (Sanyal & Butler, 2005) nyaranin $R_g$ bisa nyampe ~40%, tapi panel sengaja pakai **nilai konservatif (kira-kira 2-20%)** buat estimasi recoverable headline-nya — itu kenapa >200,000 EJ recoverable duduk jauh di bawah base ~13 juta EJ (recovery efektif orde ~1%).

(Unit: 1 EJ = $10^{18}$ J. Logika volumetrik yang sama mendasari estimasi resource geothermal apapun; yang khas dari EGS itu $V_{active}$-nya *dibikin* lewat stimulation bukan diwarisi dari natural permeability, dan dia menyusut dalam usable temperature seiring waktu pas reservoir ngalamin thermal drawdown.)`
      }
    },

    // ─────────────── 4. worked-example ───────────────
    {
      id: 'worked-example',
      heading: { en: 'Worked example', id: 'Contoh kerjaan' },
      body: {
        en: `**Heat-in-place, and why the recoverable part is small.** Take a single 1 km³ block of hot granite at $T_r = 200$ °C, against a reference $T_0 = 50$ °C, so $\\Delta T = 150$ K. Use illustrative rock properties $\\rho_r = 2700$ kg/m³ and $C_r = 1000$ J/(kg·K), and $V = 1\\ \\text{km}^3 = 10^9\\ \\text{m}^3$. The stored heat is

$$Q = \\rho_r\\,C_r\\,V\\,\\Delta T = 2700 \\times 1000 \\times 10^{9} \\times 150 = 4.05\\times10^{17}\\ \\text{J} \\approx 0.41\\ \\text{EJ}.$$

That is the heat *in place* in the block. Now apply the recovery factor. At the conservative end, $R_g = 2\\%$ gives $Q_{rec} \\approx 0.008$ EJ; at the optimistic end, $R_g = 20\\%$ gives $Q_{rec} \\approx 0.081$ EJ. A tenfold spread, and even the optimistic case extracts only a fifth of the block's heat.

Now scale up. The report's ~13 million EJ in place is essentially this calculation summed over the whole accessible U.S. crust to 10 km; its >200,000 EJ recoverable is that base times the conservative recovery fraction (~1-2% effective). And >200,000 EJ measured against U.S. annual primary energy use of ~100 EJ/yr is the ~2,000× headline. So the structure of the argument is: an astronomically large base, multiplied by a deliberately small recovery factor, *still* leaves a recoverable resource thousands of times annual demand. The resource is genuinely not the limiting factor — which is precisely why the report's recommendations are about drilling cost, reservoir creation, and R&D, not about whether the heat is there.`,
        id: `**Heat-in-place, dan kenapa bagian recoverable kecil.** Ambil satu blok 1 km³ hot granite di $T_r = 200$ °C, terhadap referensi $T_0 = 50$ °C, jadi $\\Delta T = 150$ K. Pakai properti rock ilustratif $\\rho_r = 2700$ kg/m³ dan $C_r = 1000$ J/(kg·K), dan $V = 1\\ \\text{km}^3 = 10^9\\ \\text{m}^3$. Stored heat-nya

$$Q = \\rho_r\\,C_r\\,V\\,\\Delta T = 2700 \\times 1000 \\times 10^{9} \\times 150 = 4.05\\times10^{17}\\ \\text{J} \\approx 0.41\\ \\text{EJ}.$$

Itu panas *in place* di blok-nya. Sekarang terapin recovery factor. Di ujung konservatif, $R_g = 2\\%$ ngasih $Q_{rec} \\approx 0.008$ EJ; di ujung optimis, $R_g = 20\\%$ ngasih $Q_{rec} \\approx 0.081$ EJ. Spread sepuluh kali lipat, dan bahkan kasus optimis cuma ngambil seperlima panas blok-nya.

Sekarang scale up. ~13 juta EJ in-place laporan-nya pada dasarnya kalkulasi ini dijumlahin atas seluruh kerak AS yang accessible sampai 10 km; >200,000 EJ recoverable-nya itu base itu kali fraksi recovery konservatif (~1-2% efektif). Dan >200,000 EJ diukur terhadap pemakaian primary energy tahunan AS ~100 EJ/thn itu headline ~2,000×. Jadi struktur argumen-nya: base yang astronomis besar, dikali recovery factor yang sengaja kecil, *tetap* ninggalin recoverable resource ribuan kali demand tahunan. Resource-nya beneran bukan faktor pembatas — yang persis kenapa rekomendasi laporan-nya tentang drilling cost, reservoir creation, dan R&D, bukan tentang apakah panas-nya ada.`
      }
    },

    // ─────────────── 5. applications ───────────────
    {
      id: 'applications',
      heading: { en: 'Applications by audience', id: 'Aplikasi per audience' },
      body: {
        en: `### For the technologist / reservoir researcher

EGS is an R&D program, and the report is its agenda. The hard problems are: **drilling cost** (deep wells in hard, hot rock dominate the economics, so cost-per-metre reduction is the biggest lever); **reservoir creation** (stimulating a fracture network with enough heat-exchange area and the right flow impedance, and keeping injector and producer hydraulically connected without short-circuiting); **thermal-drawdown modelling and tracer-tested connectivity** (predicting reservoir life and sweep); and **induced-seismicity management** (stimulation perturbs stress and can trigger felt events). These are the variables a reservoir engineer would model with the same tools used for natural fields, now applied to an engineered one.

### For the developer / energy-policy reader

The report's deliverable for this audience is the **supply curve and learning-curve argument**: levelized cost falls as cumulative deployment grows and the technology moves down a learning curve, so a bounded, front-loaded R&D investment (~USD 0.8-1 B over ~15 yr) can carry EGS to competitiveness and ~100 GWe of U.S. base-load by 2050. Because EGS does not need a hydrothermal anomaly, plants can in principle be sited near demand, changing the geography of where geothermal power can be built.

### For the operator of a *natural* (hydrothermal) field

Even though Darajat is not an EGS field, the EGS toolbox is relevant at the margins of a conventional field: the same **stimulation and injectivity-enhancement** techniques can be used to recover an underperforming well or to develop the tight, hot edges of an existing reservoir — an "EGS-assist" to a hydrothermal operation rather than a standalone EGS. Conversely, the conventional reservoir-engineering discipline (well testing, decline analysis, reinjection management) is exactly what an engineered reservoir also needs. The danger lies in *conflating* the two: because a natural hydrothermal field already has all three ingredients in place, treating it as if it were EGS — engineered permeability, the conductive crust as the resource base, the induced-seismicity and thermal-drawdown risks of an artificial fracture network — would mis-state both its resource and its operating risks.`,
        id: `### Untuk technologist / reservoir researcher

EGS itu program R&D, dan laporan-nya agenda-nya. Masalah sulit-nya: **drilling cost** (sumur dalam di rock keras, panas mendominasi ekonomi-nya, jadi pengurangan cost-per-meter itu lever terbesar); **reservoir creation** (nge-stimulasi fracture network dengan heat-exchange area cukup dan flow impedance yang tepat, dan ngejaga injector dan producer terhubung hidraulik tanpa short-circuit); **pemodelan thermal-drawdown dan connectivity yang di-tracer-test** (memprediksi umur reservoir dan sweep); dan **manajemen induced-seismicity** (stimulation ngeganggu stress dan bisa nge-trigger event yang kerasa). Ini variabel yang reservoir engineer bakal model dengan tool yang sama yang dipakai buat field natural, sekarang diterapin ke yang engineered.

### Untuk developer / pembaca energy-policy

Deliverable laporan-nya buat audience ini itu **argumen supply-curve dan learning-curve**: levelized cost turun seiring cumulative deployment tumbuh dan teknologi-nya bergerak turun learning curve, jadi investasi R&D yang bounded, front-loaded (~USD 0.8-1 B selama ~15 thn) bisa ngebawa EGS ke kompetitif dan ~100 GWe base-load AS pada 2050. Karena EGS gak butuh anomali hydrothermal, plant bisa pada prinsipnya ditempatkan dekat demand, ngubah geografi di mana geothermal power bisa dibangun.

### Untuk operator field *natural* (hydrothermal)

Walaupun Darajat bukan field EGS, toolbox EGS relevan di margin field konvensional: teknik **stimulation dan injectivity-enhancement** yang sama bisa dipakai buat ngerecover sumur underperforming atau buat ngembangin tepi reservoir yang tight, panas dari reservoir yang udah ada — "EGS-assist" ke operasi hydrothermal bukan EGS standalone. Sebaliknya, disiplin reservoir-engineering konvensional (well testing, decline analysis, manajemen reinjection) itu persis yang engineered reservoir juga butuh. Bahaya-nya ada di *nyampur-adukin* keduanya: karena field hydrothermal natural udah punya ketiga ingredient di tempat, memperlakukan-nya seolah dia EGS — engineered permeability, kerak konduktif sebagai resource base, risiko induced-seismicity dan thermal-drawdown dari fracture network buatan — bakal mis-state baik resource maupun risiko operasi-nya.`
      }
    },

    // ─────────────── 6. practice ───────────────
    {
      id: 'practice',
      heading: { en: 'Practice', id: 'Latihan' },
      body: {
        en: `**1.** A 2 km³ block of hot rock is at 230 °C against a 50 °C reference (ΔT = 180 K). Using ρ_r = 2700 kg/m³ and C_r = 1000 J/(kg·K), compute the heat in place, and the recoverable energy at a recovery factor R_g = 15%.

<details><summary>Answer</summary>
V = 2 km³ = 2×10⁹ m³. Heat in place: Q = ρ_r·C_r·V·ΔT = 2700 × 1000 × 2×10⁹ × 180 = 9.72×10¹⁷ J ≈ 0.97 EJ. Recoverable: Q_rec = R_g·Q = 0.15 × 0.97 ≈ 0.146 EJ. (Same volumetric logic as the worked example, just a larger block, hotter rock, and a mid-range recovery factor.)
</details>

**2.** EGS is called *petrothermal* and contrasted with *hydrothermal*. Of the three ingredients a producing geothermal system needs — heat, fluid, permeability — which does a natural hydrothermal field (e.g. Darajat) get from nature, and which does EGS have to engineer? Why does that distinction make the EGS resource potentially so much larger?

<details><summary>Answer</summary>
A natural hydrothermal field gets all three from nature: a heat source, in-situ water, and naturally permeable/fractured rock, co-located. EGS gets only the heat from nature; it engineers the other two — it injects the fluid and creates permeability by hydraulic stimulation of tight hot rock. That is why the resource is potentially far larger: hydrothermal systems are confined to the rare places where all three coincide (volcanic/tectonic settings), whereas hot rock — the heat alone — underlies essentially the whole continent at depth. Once permeability and fluid can be supplied anywhere, the resource base becomes the conductive heat of the accessible crust rather than just the naturally-plumbed pockets.
</details>

**3.** The report's recoverable estimate (>200,000 EJ) is far smaller than the heat in place (~13 million EJ) — an effective recovery of order ~1%. Name the physical reasons the recoverable fraction is so small.

<details><summary>Answer</summary>
Three main reasons, all in the recovery-factor term Q_rec = R_g·ρ_r·C_r·V_active·(T_r,i − T_r,a): (1) **only the swept volume counts** — you extract heat only from the rock your engineered fracture network actually contacts (V_active), not the whole block, and a stimulated network touches a fraction of the rock; (2) **you stop at an abandonment temperature** — heat is usable only from the initial temperature down to T_r,a (the fluid becomes too cool to run a plant well before the rock reaches ambient), so you never harvest the full ΔT; and (3) **thermal drawdown** — as the swept rock gives up heat the produced temperature declines over the reservoir's life, so a given engineered reservoir is retired (or re-drilled) having released only part of its heat. Together these make a recovery factor of a few to ~20% realistic, and the panel chose the conservative end.
</details>

**4.** The report frames EGS deployment as gated by R&D and cost rather than by the resource. Given that the heat is "already there," why does it nonetheless hinge its ~100 GWe-by-2050 projection on a sustained R&D investment?

<details><summary>Answer</summary>
Because the heat being present is necessary but not sufficient — turning it into competitive power requires solving the engineering and cost problems that R&D targets. Deep drilling in hard, hot rock is the dominant cost and must come down (cost-per-metre); reservoirs must be reliably *created* (a connected, high-heat-exchange-area fracture network with manageable flow impedance and sustained injector-producer connectivity); thermal drawdown and induced seismicity must be predicted and managed. The report's economic argument is a learning curve: levelized cost falls as cumulative deployment grows, so a bounded, front-loaded public R&D investment (~USD 0.8-1 B over ~15 yr) is what carries the technology down that curve to competitiveness — without it, the resource stays stranded behind cost. The 100-GWe-by-2050 figure is explicitly conditional on that investment.
</details>`,
        id: `**1.** Blok 2 km³ hot rock di 230 °C terhadap referensi 50 °C (ΔT = 180 K). Pakai ρ_r = 2700 kg/m³ dan C_r = 1000 J/(kg·K), hitung heat in place, dan energi recoverable di recovery factor R_g = 15%.

<details><summary>Jawaban</summary>
V = 2 km³ = 2×10⁹ m³. Heat in place: Q = ρ_r·C_r·V·ΔT = 2700 × 1000 × 2×10⁹ × 180 = 9.72×10¹⁷ J ≈ 0.97 EJ. Recoverable: Q_rec = R_g·Q = 0.15 × 0.97 ≈ 0.146 EJ. (Logika volumetrik yang sama kayak worked example, cuma blok lebih besar, rock lebih panas, dan recovery factor mid-range.)
</details>

**2.** EGS disebut *petrothermal* dan dikontraskan dengan *hydrothermal*. Dari tiga ingredient yang sistem geothermal produktif butuh — panas, fluid, permeability — mana yang field hydrothermal natural (mis. Darajat) dapat dari nature, dan mana yang EGS harus engineer? Kenapa distinction itu ngebikin EGS resource berpotensi jauh lebih besar?

<details><summary>Jawaban</summary>
Field hydrothermal natural dapat ketiganya dari nature: sumber panas, air in-situ, dan rock yang naturally permeable/fractured, co-located. EGS cuma dapat panas-nya dari nature; dia engineer dua lainnya — dia inject fluid-nya dan bikin permeability lewat hydraulic stimulation hot rock yang tight. Itu kenapa resource-nya berpotensi jauh lebih besar: sistem hydrothermal terbatas ke tempat langka di mana ketiganya coincide (setting vulkanik/tektonik), sedangkan hot rock — panas-nya sendiri — ada di bawah pada dasarnya seluruh benua di kedalaman. Begitu permeability dan fluid bisa disediain di mana saja, resource base jadi panas konduktif kerak yang accessible bukan cuma kantong yang naturally-plumbed.
</details>

**3.** Estimasi recoverable laporan-nya (>200,000 EJ) jauh lebih kecil dari heat in place (~13 juta EJ) — recovery efektif orde ~1%. Sebutin alasan fisik kenapa fraksi recoverable begitu kecil.

<details><summary>Jawaban</summary>
Tiga alasan utama, semua di term recovery-factor Q_rec = R_g·ρ_r·C_r·V_active·(T_r,i − T_r,a): (1) **cuma swept volume yang dihitung** — kamu ngambil panas cuma dari rock yang engineered fracture network kamu beneran kontak (V_active), bukan seluruh blok, dan stimulated network nyentuh sebagian rock; (2) **kamu berhenti di abandonment temperature** — panas usable cuma dari temperature awal turun ke T_r,a (fluid jadi terlalu dingin buat jalanin plant jauh sebelum rock nyampe ambient), jadi kamu gak pernah manen ΔT penuh; dan (3) **thermal drawdown** — pas rock yang tersapu ngasih panas-nya, produced temperature turun sepanjang umur reservoir, jadi engineered reservoir tertentu dipensiunkan (atau di-re-drill) setelah ngelepas cuma sebagian panas-nya. Bareng ini ngebikin recovery factor beberapa sampai ~20% realistik, dan panel milih ujung konservatif.
</details>

**4.** Laporan-nya nge-frame deployment EGS sebagai di-gate sama R&D dan cost bukan sama resource. Mengingat panas-nya "udah di sana," kenapa dia tetap ngegantungin proyeksi ~100 GWe-pada-2050-nya pada investasi R&D berkelanjutan?

<details><summary>Jawaban</summary>
Karena panas-nya ada itu perlu tapi gak cukup — ngubahnya jadi power kompetitif butuh nyelesaiin masalah engineering dan cost yang R&D targetin. Deep drilling di rock keras, panas itu cost dominan dan harus turun (cost-per-meter); reservoir harus reliabel *dibikin* (fracture network terhubung, high-heat-exchange-area dengan flow impedance manageable dan injector-producer connectivity berkelanjutan); thermal drawdown dan induced seismicity harus diprediksi dan dimanaje. Argumen ekonomi laporan-nya itu learning curve: levelized cost turun seiring cumulative deployment tumbuh, jadi investasi R&D publik yang bounded, front-loaded (~USD 0.8-1 B selama ~15 thn) yang ngebawa teknologi-nya turun curve itu ke kompetitif — tanpa-nya, resource-nya tetap stranded di balik cost. Figur 100-GWe-pada-2050 itu eksplisit kondisional atas investasi itu.
</details>`
      }
    },

    // ─────────────── 7. connections ───────────────
    {
      id: 'connections',
      heading: { en: 'Connections', id: 'Koneksi' },
      body: {
        en: `- **Prereq**: [Grant & Bixley 2011](item:grant-bixley-2011) — conventional geothermal reservoir engineering (well testing, decline, reinjection, sweep). EGS applies this discipline to a reservoir that is *engineered* rather than found; read it first.
- **Contrast (the natural end-member)**: [Acuña 2008](item:acuna-2008), [O'Sullivan-Pruess-Lippmann 2001](item:osullivan-pruess-lippmann-2001) and [Cumming 2009](item:cumming-2009) — these treat *natural* hydrothermal systems (a vapour-dominated field, its simulation, its conceptual model). EGS is the engineered counterpart: same physics of heat and flow, but permeability and fluid are created, not inherited.
- **Survey-level on-ramp**: [Stober & Bucher 2021](item:stober-bucher-2021) — the textbook's EGS/petrothermal chapter is the gentle survey introduction to this assessment.
- **Downstream (surface conversion)**: [DiPippo 2016](item:dipippo-2016) — once EGS produces a hot fluid, the same power-plant/utilization engineering converts it; DiPippo covers EGS plants alongside hydrothermal ones.`,
        id: `- **Prereq**: [Grant & Bixley 2011](item:grant-bixley-2011) — reservoir engineering geothermal konvensional (well testing, decline, reinjection, sweep). EGS nerapin disiplin ini ke reservoir yang *engineered* bukan ditemukan; baca dulu.
- **Kontras (end-member natural)**: [Acuña 2008](item:acuna-2008), [O'Sullivan-Pruess-Lippmann 2001](item:osullivan-pruess-lippmann-2001) dan [Cumming 2009](item:cumming-2009) — ini ngebahas sistem hydrothermal *natural* (field vapour-dominated, simulasi-nya, conceptual model-nya). EGS itu counterpart engineered: fisika panas dan flow yang sama, tapi permeability dan fluid dibikin, bukan diwarisi.
- **On-ramp level-survey**: [Stober & Bucher 2021](item:stober-bucher-2021) — chapter EGS/petrothermal textbook itu introduksi survey yang lembut ke asesmen ini.
- **Downstream (konversi permukaan)**: [DiPippo 2016](item:dipippo-2016) — begitu EGS ngeproduksi hot fluid, engineering power-plant/utilization yang sama ngonversi-nya; DiPippo ngebahas plant EGS bareng yang hydrothermal.`
      }
    },

    // ─────────────── 8. sources ───────────────
    {
      id: 'sources',
      heading: { en: 'Sources', id: 'Sumber' },
      body: {
        en: `- **Tester, J. W., et al.** (2006). *The Future of Geothermal Energy: Impact of Enhanced Geothermal Systems (EGS) on the United States in the 21st Century*. Massachusetts Institute of Technology / U.S. Department of Energy / Idaho National Laboratory, report INL/EXT-06-11746. The 18-member-panel EGS assessment. **(This item.)**
- **Grant, M. A., and Bixley, P. F.** (2011). *Geothermal Reservoir Engineering*, 2nd ed. Academic Press / Elsevier. The conventional reservoir-engineering foundation EGS extends (the declared prerequisite).
- **Sanyal, S. K., and Butler, S. J.** (2005). "An analysis of power generation prospects from enhanced geothermal systems." *Geothermal Resources Council Transactions*, 29, 131-137. The recovery-factor analysis the report draws on.
- **Armstead, H. C. H., and Tester, J. W.** (1987). *Heat Mining: A New Source of Energy*. E. & F. N. Spon, London. The hot-dry-rock precursor that frames the EGS concept.`,
        id: `- **Tester, J. W., et al.** (2006). *The Future of Geothermal Energy: Impact of Enhanced Geothermal Systems (EGS) on the United States in the 21st Century*. Massachusetts Institute of Technology / U.S. Department of Energy / Idaho National Laboratory, report INL/EXT-06-11746. Asesmen EGS panel-18-anggota. **(Item ini.)**
- **Grant, M. A., dan Bixley, P. F.** (2011). *Geothermal Reservoir Engineering*, edisi ke-2. Academic Press / Elsevier. Fondasi reservoir-engineering konvensional yang EGS extend (prerequisite yang dideklarasikan).
- **Sanyal, S. K., dan Butler, S. J.** (2005). "An analysis of power generation prospects from enhanced geothermal systems." *Geothermal Resources Council Transactions*, 29, 131-137. Analisis recovery-factor yang laporan-nya pakai.
- **Armstead, H. C. H., dan Tester, J. W.** (1987). *Heat Mining: A New Source of Energy*. E. & F. N. Spon, London. Precursor hot-dry-rock yang nge-frame konsep EGS.`
      }
    },
  ],

  audio: { enabled: true },

  selfTest: [
    {
      sectionId: 'motivation',
      question: {
        en: 'State the report\'s headline numbers for the U.S. EGS resource — the heat in place, the recoverable amount, how that recoverable figure compares to U.S. annual energy use, the deployment projection, and the R&D investment it called for. What single conclusion did the report draw from the gap between the in-place and recoverable numbers?',
        id: 'Sebutin angka headline laporan-nya buat EGS resource AS — panas in-place, jumlah recoverable, gimana figur recoverable itu dibanding pemakaian energi tahunan AS, proyeksi deployment, dan investasi R&D yang dia minta. Kesimpulan tunggal apa yang laporan-nya tarik dari gap antara angka in-place dan recoverable?'
      },
      prompt: { en: 'Before continuing, try answering:', id: 'Sebelum lanjut, coba jawab:' },
      answer: {
        en: 'The headline numbers, all from the motivation section: the heat stored *in place* beneath the U.S. to ~10 km is on the order of 13 million EJ; the *recoverable* EGS resource, on conservative assumptions, is more than 200,000 EJ — roughly 2,000 times U.S. annual primary energy use (~100 EJ/yr); the report projected EGS could supply on the order of 100 GWe of competitive U.S. base-load capacity by 2050; and it sized the needed R&D investment at roughly USD 0.8-1 billion over about 15 years. The single conclusion it drew from the gap between the astronomically large in-place figure and the (still enormous) recoverable one is that **the resource is not the binding constraint — engineering and cost are**. Even after discounting the huge in-place base by a deliberately conservative recovery fraction, the recoverable resource is still thousands of times annual demand, so the report frames the challenge as making the heat economically extractable rather than finding enough heat.',
        id: 'Angka headline-nya, semua dari section motivation: panas yang tersimpan *in place* di bawah AS sampai ~10 km di orde 13 juta EJ; EGS resource *recoverable*, dengan asumsi konservatif, lebih dari 200,000 EJ — kira-kira 2,000 kali pemakaian primary energy tahunan AS (~100 EJ/thn); laporan-nya memproyeksikan EGS bisa nyediain orde 100 GWe kapasitas base-load AS kompetitif pada 2050; dan dia ngukur investasi R&D yang dibutuhin kira-kira USD 0.8-1 miliar selama sekitar 15 tahun. Kesimpulan tunggal yang dia tarik dari gap antara figur in-place yang astronomis besar dan yang recoverable (yang tetap enorm) itu bahwa **resource-nya bukan constraint yang mengikat — engineering dan cost yang mengikat**. Bahkan setelah ngediskon base in-place yang besar dengan fraksi recovery yang sengaja konservatif, recoverable resource-nya tetap ribuan kali demand tahunan, jadi laporan-nya nge-frame tantangan-nya sebagai ngebikin panas-nya bisa diekstrak secara ekonomis bukan nyari cukup panas.'
      }
    },
    {
      sectionId: 'formalization',
      question: {
        en: 'The resource arithmetic uses Q = ρ_r·C_r·V·(T_r − T_0) for the resource base and a recovery factor R_g for what is recoverable. Explain what each factor in the heat-in-place formula represents, and why this volumetric estimate gives the resource BASE rather than the recoverable reserve.',
        id: 'Aritmetika resource pakai Q = ρ_r·C_r·V·(T_r − T_0) buat resource base dan recovery factor R_g buat yang recoverable. Jelasin apa yang tiap faktor di formula heat-in-place wakilin, dan kenapa estimasi volumetrik ini ngasih resource BASE bukan recoverable reserve.'
      },
      prompt: { en: 'Before continuing, try answering:', id: 'Sebelum lanjut, coba jawab:' },
      answer: {
        en: 'The formula is the sensible heat of a rock volume above a reference temperature. ρ_r (rock density) times C_r (specific heat) is the heat capacity per unit volume — how much energy the rock stores per degree; V is the rock volume considered (for the report, the accessible crust to ~10 km); and (T_r − T_0) is the temperature of the rock above a reference T_0 (such as the surface or heat-rejection temperature), i.e. the available temperature drop. Multiplied out, Q is the total thermal energy physically contained in that rock relative to the reference. It gives the resource BASE, not the reserve, because it counts ALL the heat in the volume as if it could be fully extracted — but in practice you only sweep the rock your fracture network contacts, you can only cool it down to an abandonment temperature (not to T_0), and the reservoir suffers thermal drawdown over its life. The recovery factor R_g is exactly the dimensionless bridge from base to recoverable: Q_rec = R_g·Q_active applied over the swept volume and the usable temperature interval, and the report deliberately used a conservative R_g (~2-20%), which is why the recoverable figure is orders of magnitude below the in-place base.',
        id: 'Formula-nya itu sensible heat dari volume rock di atas temperature referensi. ρ_r (densitas rock) kali C_r (specific heat) itu heat capacity per satuan volume — berapa energi rock simpan per derajat; V volume rock yang dipertimbangkan (buat laporan, kerak accessible sampai ~10 km); dan (T_r − T_0) temperature rock di atas referensi T_0 (kayak permukaan atau temperature heat-rejection), yaitu temperature drop yang tersedia. Dikali, Q itu total energi termal yang secara fisik terkandung di rock itu relatif ke referensi. Dia ngasih resource BASE, bukan reserve, karena dia ngitung SEMUA panas di volume seolah bisa diekstrak penuh — tapi praktiknya kamu cuma nyapu rock yang fracture network kamu kontak, kamu cuma bisa ngedinginin sampai abandonment temperature (bukan sampai T_0), dan reservoir ngalamin thermal drawdown sepanjang umur-nya. Recovery factor R_g itu persis jembatan tak-berdimensi dari base ke recoverable: Q_rec = R_g·Q_active diterapin atas swept volume dan interval temperature usable, dan laporan-nya sengaja pakai R_g konservatif (~2-20%), itu kenapa figur recoverable orde-orde di bawah in-place base.'
      }
    },
    {
      sectionId: 'worked-example',
      question: {
        en: 'A 1 km³ block of 200 °C rock holds about 0.4 EJ in place, of which only ~0.008-0.08 EJ is recoverable (R_g = 2-20%). Yet the report\'s nationwide recoverable resource (>200,000 EJ) is still ~2,000× annual U.S. demand. Explain how a small recovery factor and an enormous base combine to produce that conclusion.',
        id: 'Blok 1 km³ rock 200 °C nahan sekitar 0.4 EJ in-place, yang cuma ~0.008-0.08 EJ recoverable (R_g = 2-20%). Tapi recoverable resource nasional laporan-nya (>200,000 EJ) tetap ~2,000× demand tahunan AS. Jelasin gimana recovery factor kecil dan base enorm bergabung ngehasilin kesimpulan itu.'
      },
      prompt: { en: 'Before continuing, try answering:', id: 'Sebelum lanjut, coba jawab:' },
      answer: {
        en: 'The argument is multiplicative: an astronomically large resource base multiplied by a deliberately small recovery factor still leaves an enormous recoverable resource. The single 1 km³ block shows the per-block scale — ~0.4 EJ in place, a few percent of which is recoverable. The report\'s ~13 million EJ in place is essentially that volumetric calculation summed over the whole accessible U.S. crust to ~10 km, and its >200,000 EJ recoverable is that base times the conservative recovery fraction (an effective ~1-2%). The key point is the size of the base: because hot rock underlies essentially the entire continent (heat is everywhere at depth, unlike the rare naturally-permeable hydrothermal pockets), the base is so large that even ~1% of it dwarfs demand — >200,000 EJ against ~100 EJ/yr of U.S. primary energy is the ~2,000× headline. So the conclusion does not depend on an optimistic recovery factor; it survives a conservative one precisely because the base is continental in scale. That is why the report treats engineering and cost — not resource size — as the binding constraint.',
        id: 'Argumen-nya multiplikatif: resource base yang astronomis besar dikali recovery factor yang sengaja kecil tetap ninggalin recoverable resource enorm. Satu blok 1 km³ nunjukin skala per-blok — ~0.4 EJ in-place, beberapa persen yang recoverable. ~13 juta EJ in-place laporan-nya pada dasarnya kalkulasi volumetrik itu dijumlahin atas seluruh kerak AS accessible sampai ~10 km, dan >200,000 EJ recoverable-nya itu base itu kali fraksi recovery konservatif (efektif ~1-2%). Poin kuncinya ukuran base-nya: karena hot rock ada di bawah pada dasarnya seluruh benua (panas di mana-mana di kedalaman, beda dari kantong hydrothermal naturally-permeable yang langka), base-nya begitu besar sampai bahkan ~1%-nya ngalahin demand — >200,000 EJ lawan ~100 EJ/thn primary energy AS itu headline ~2,000×. Jadi kesimpulan-nya gak gantung pada recovery factor optimis; dia selamat dengan yang konservatif persis karena base-nya skala kontinental. Itu kenapa laporan-nya memperlakukan engineering dan cost — bukan ukuran resource — sebagai constraint yang mengikat.'
      }
    },
    {
      sectionId: 'applications',
      question: {
        en: 'Darajat is a natural vapour-dominated field, not an EGS project. So why is the EGS toolbox still relevant to the operator of a conventional hydrothermal field, and what is the danger in conflating the two?',
        id: 'Darajat itu field vapour-dominated natural, bukan proyek EGS. Jadi kenapa toolbox EGS tetap relevan ke operator field hydrothermal konvensional, dan apa bahaya nyampur-adukin keduanya?'
      },
      prompt: { en: 'Before continuing, try answering:', id: 'Sebelum lanjut, coba jawab:' },
      answer: {
        en: 'The EGS toolbox is relevant at the margins of a conventional field even though the field as a whole is hydrothermal, not petrothermal. The same stimulation and injectivity-enhancement techniques EGS was built around can be used to recover an underperforming well or to develop the tight, hot edges of an existing reservoir — an "EGS-assist" to a hydrothermal operation rather than a standalone EGS. And the traffic runs both ways: an engineered reservoir needs exactly the conventional reservoir-engineering discipline (well testing, decline analysis, reinjection management) that a hydrothermal operator already practises. The danger in conflating them is conceptual and practical: a natural hydrothermal field already has all three ingredients (heat, fluid, permeability) co-located, so its resource, deliverability and decline behaviour are governed by the natural reservoir — treating it as if it were EGS (where permeability and fluid are engineered, the resource base is the conductive crust, and induced seismicity and thermal drawdown of an artificial fracture network dominate) would mis-state both the resource and the operating risks. EGS is the engineered frontier; the natural field is the inherited reservoir, and the analysis tools overlap without the categories being the same.',
        id: 'Toolbox EGS relevan di margin field konvensional walaupun field-nya secara keseluruhan hydrothermal, bukan petrothermal. Teknik stimulation dan injectivity-enhancement yang sama yang EGS dibangun di sekitarnya bisa dipakai buat ngerecover sumur underperforming atau ngembangin tepi reservoir yang tight, panas — "EGS-assist" ke operasi hydrothermal bukan EGS standalone. Dan lalu-lintas-nya dua arah: engineered reservoir butuh persis disiplin reservoir-engineering konvensional (well testing, decline analysis, manajemen reinjection) yang operator hydrothermal udah praktekin. Bahaya nyampur-adukin-nya itu konseptual dan praktis: field hydrothermal natural udah punya ketiga ingredient (panas, fluid, permeability) co-located, jadi resource, deliverability dan perilaku decline-nya diatur sama reservoir natural — memperlakukan-nya seolah dia EGS (di mana permeability dan fluid di-engineer, resource base-nya kerak konduktif, dan induced seismicity serta thermal drawdown fracture network buatan mendominasi) bakal mis-state baik resource maupun risiko operasi. EGS itu frontier engineered; field natural itu reservoir yang diwarisi, dan tool analisis-nya overlap tanpa kategori-nya sama.'
      }
    },
  ],
};
