// ─────────────────────────────────────────────────────────────────────────
// ⚠ DRAFT — AWAITING AZ DOMAIN REVIEW (option (b): "I draft, you correct").
// Geothermal content is Az-authored (6 yrs Darajat dry-steam operations).
// Schema-valid + renderable for dogfooding, NOT finalized. Every domain claim
// flagged by the research-prep §9 review is marked inline **⟦TODO-Az: …⟧**.
// Full prep: notes/cumming-2009-research-prep-2026-06-02.md
//
// OPEN TODO-Az ITEMS (mirror of prep §9):
//   A. Darajat exploration/MT facts (the ~85-site MT survey 1996-97/2004; clay-cap
//      geometry; relict water>280C -> ~240C vapor narrative; operator chain).
//   B. Author BSc "Toronto" UNVERIFIED -> omitted from rendered bio (MSc UBC kept).
//   C. BPD is LIQUID-specific; dry-steam Darajat is near-isothermal vapor-static.
//   D. Resistive-steam-core signature strength at Darajat (MT is 3D at depth).
//   E. AZ5 producing-well count 49-vs-39 (carried open audit item).
//   F. Cross-scale synthesis (Cumming field-scale conceptual model <-> Acuna
//      well-scale <-> O'Sullivan simulator) — confirm vs Darajat/Star Energy practice.
//   G. Worked-example numbers are ILLUSTRATIVE, not a Darajat estimate.
//   H. Seed cards deferred until Az signs off.
// ─────────────────────────────────────────────────────────────────────────

export const CONTENT = {
  itemId: 'cumming-2009',
  estimatedReadMinutes: 34,

  author: {
    fullName: { en: `William "Bill" Cumming`, id: `William "Bill" Cumming` },
    affiliation: {
      en: `Cumming Geoscience, Santa Rosa, California (independent consultant; formerly ~20 years at Unocal, its geothermal division absorbed into Chevron in 2005)`,
      id: `Cumming Geoscience, Santa Rosa, California (konsultan independen; sebelumnya ~20 tahun di Unocal, divisi geothermal-nya diserap Chevron tahun 2005)`
    },
    tagline: {
      en: `The geophysicist who argued that the conceptual model — not any single anomaly — is the object to target a geothermal well against.`,
      id: `Geophysicist yang berargumen bahwa conceptual model — bukan anomali tunggal apapun — adalah objek buat nge-target sumur geothermal.`
    },
    bio: {
      en: `William Cumming is a geothermal exploration geophysicist who has spent a career arguing that you should drill against an integrated picture, not a single bright anomaly. After an MSc in geophysics from the University of British Columbia (1974-77), he spent roughly twenty years at Unocal's geothermal division — rising from geophysicist to chief geoscientist with worldwide responsibilities including the Geysers, Salton Sea, and the Philippine fields Bulalo and Tiwi — before the division passed to Chevron in 2005. Since founding Cumming Geoscience around 2000 he has consulted on 40-plus geothermal fields and roughly 150 prospects across the Americas, Southeast Asia, Europe, Africa, Iceland, Turkey and New Zealand, and has taught the conceptual-model method widely (the UN University geothermal training programme in Iceland, GRC short courses, the Auckland Geothermal Institute). The Geothermal Resources Council recognized him with a Special Achievement Award in 2013, and he remains professionally active.`,
      id: `William Cumming adalah geophysicist eksplorasi geothermal yang sepanjang karir berargumen bahwa kamu harus ngebor lawan gambaran terintegrasi, bukan satu anomali terang. Setelah MSc geofisika dari University of British Columbia (1974-77), dia menghabiskan kira-kira dua puluh tahun di divisi geothermal Unocal — naik dari geophysicist ke chief geoscientist dengan tanggung jawab worldwide termasuk the Geysers, Salton Sea, dan field Filipina Bulalo dan Tiwi — sebelum divisi itu pindah ke Chevron tahun 2005. Sejak mendirikan Cumming Geoscience sekitar 2000 dia jadi konsultan di 40+ field geothermal dan kira-kira 150 prospect across Amerika, Asia Tenggara, Eropa, Afrika, Islandia, Turki dan Selandia Baru, dan ngajarin metode conceptual-model secara luas (program pelatihan geothermal UN University di Islandia, GRC short course, Auckland Geothermal Institute). Geothermal Resources Council ngasih dia Special Achievement Award tahun 2013, dan dia masih aktif secara profesional.`
    },
    focus: {
      en: `Magnetotelluric (MT) resistivity geophysics for geothermal exploration, and its integration with geochemistry, geology, hydrology and structure into a resource conceptual model used to target wells and estimate resource capacity. Recurring signature: distrust of single-method anomalies (a low-resistivity zone is non-unique — it can be a clay cap, a saline aquifer, or graphitic schist), and a probabilistic treatment of capacity (the lognormal power-density method).`,
      id: `Geofisika resistivity magnetotelluric (MT) buat eksplorasi geothermal, dan integrasinya sama geokimia, geologi, hidrologi dan struktur jadi resource conceptual model yang dipake buat nge-target sumur dan estimasi kapasitas sumber daya. Signature berulang: gak percaya anomali metode-tunggal (zona low-resistivity itu non-unik — bisa clay cap, aquifer salin, atau graphitic schist), dan treatment probabilistik buat kapasitas (metode lognormal power-density).`
    },
    intellectualLineage: {
      en: `Trained as a geophysicist at UBC in the 1970s, his real formation was the roughly two decades inside Unocal's geothermal geoscience organization — a major industrial school of integrated exploration practice forged on real Philippine, Indonesian and US projects. His MT work is closely tied to collaboration with the magnetotelluric inversion specialist Randall Mackie. His conceptual-model philosophy sits squarely in the industry community of the Geothermal Resources Council, the Stanford Geothermal Workshop, and the Auckland Geothermal Institute, where the integrated-geoscience tradition is taught and debated.`,
      id: `Dilatih sebagai geophysicist di UBC tahun 1970-an, pembentukan sebenarnya itu kira-kira dua dekade di dalam organisasi geoscience geothermal Unocal — sekolah industrial besar buat praktek eksplorasi terintegrasi yang ditempa di proyek nyata Filipina, Indonesia dan AS. Kerja MT-nya erat terkait kolaborasi sama spesialis inversi magnetotelluric Randall Mackie. Filosofi conceptual-model-nya duduk persis di komunitas industri Geothermal Resources Council, Stanford Geothermal Workshop, dan Auckland Geothermal Institute, tempat tradisi integrated-geoscience diajarin dan diperdebatin.`
    },
    keyCollaborators: {
      en: `**Randall Mackie** — magnetotelluric inversion specialist, co-author of the 2010 Glass Mountain resistivity-imaging paper (1D/2D/3D MT inversion + TDEM static-shift correction). **Terry Powell** — co-author on geothermal water and gas geochemistry spreadsheets (2010), the practical geothermometry toolkit. More broadly the **Geothermal Resources Council** and **Stanford Geothermal Workshop** communities, and the **UN University / GRÓ** geothermal training programme in Iceland where he has lectured.`,
      id: `**Randall Mackie** — spesialis inversi magnetotelluric, co-author paper resistivity-imaging Glass Mountain 2010 (inversi MT 1D/2D/3D + koreksi static-shift TDEM). **Terry Powell** — co-author spreadsheet geokimia air dan gas geothermal (2010), toolkit geothermometry praktis. Lebih luas komunitas **Geothermal Resources Council** dan **Stanford Geothermal Workshop**, dan program pelatihan geothermal **UN University / GRÓ** di Islandia tempat dia ngajar.`
    },
    legacy: {
      en: `Cumming's 2009 Stanford paper became one of the standard references for how an exploration team should reason: build a resource conceptual model — a predicted natural-state temperature cross-section consistent with all the data — and target wells to test that model rather than to chase a single geophysical anomaly. The clay-cap resistivity model he popularized (a conductive smectite cap imaged by MT over a more resistive reservoir) is now widely taken as the default mental picture for high-temperature exploration, and his lognormal power-density method is a widely used early-stage capacity-estimation tool. The deeper legacy is a discipline: integrate every dataset, distrust the non-unique anomaly, and make each well a test of the model so that the program learns.`,
      id: `Paper Stanford 2009 Cumming jadi salah satu referensi standar buat gimana tim eksplorasi harus bernalar: bangun resource conceptual model — predicted natural-state temperature cross-section yang konsisten sama semua data — dan target sumur buat nguji model itu daripada ngejar satu anomali geofisika. Clay-cap resistivity model yang dia populerin (smectite cap konduktif yang di-image MT di atas reservoir yang lebih resistif) sekarang banyak dijadikan gambaran mental default buat eksplorasi high-temperature, dan metode lognormal power-density-nya jadi alat estimasi kapasitas early-stage yang dipake luas. Legacy yang lebih dalam itu disiplin: integrasiin tiap dataset, gak percaya anomali non-unik, dan bikin tiap sumur jadi tes model biar program-nya belajar.`
    },
    keyWorks: [
      { year: 2009, title: `Geothermal Resource Conceptual Models Using Surface Exploration Data (this item)`, venue: `Proc. 34th Workshop on Geothermal Reservoir Engineering, Stanford University, SGP-TR-187` },
      { year: 2010, title: `Resistivity Imaging of Geothermal Resources Using 1D, 2D and 3D MT Inversion and TDEM Static Shift Correction Illustrated by a Glass Mountain Case History (with Mackie)`, venue: `Proc. World Geothermal Congress 2010, Bali` },
      { year: 2016, title: `Geophysics and Resource Conceptual Models in Geothermal Exploration and Development (in DiPippo, ed.)`, venue: `Geothermal Power Generation: Developments and Innovation, Woodhead/Elsevier, 33-75` },
      { year: 2016, title: `Resource Capacity Estimation Using Lognormal Power Density from Producing Fields and Area from Resource Conceptual Models; Advantages, Pitfalls and Remedies`, venue: `Proc. 41st Workshop on Geothermal Reservoir Engineering, Stanford University, SGP-TR-209` },
    ],
  },

  sections: [
    // ─────────────── 1. motivation ───────────────
    {
      id: 'motivation',
      heading: { en: 'Why this matters', id: 'Kenapa ini penting' },
      body: {
        en: `An exploration geothermal well costs millions of dollars and takes weeks to drill, and most of what determines its success is decided before the rig arrives: where to put it. Get the location wrong and you spend that money proving the resource is somewhere else. So the central question of geothermal exploration is brutally practical — against *what* do you target the well?

Cumming's 2009 paper answers that question by rejecting two tempting shortcuts. The first is **anomaly hunting**: find the biggest single anomaly — the strongest resistivity low, the hottest spring, the largest gravity high — and drill it. The second is **anomaly stacking**: overlay several anomaly maps and drill where they coincide. Both fail for the same reason: individual geophysical anomalies are *non-unique*. A low-resistivity zone can be a geothermal clay cap, but it can equally be a barren clay-rich valley fill, a saline aquifer, or graphitic schist. A magnetic low can be hydrothermal alteration, or just a sediment-filled basin. Drilling an anomaly means betting that one interpretation is right without testing it.

The alternative Cumming argues for is to target the well against a **resource conceptual model** — an integrated, physically coherent picture of the system whose core is a predicted natural-state temperature pattern, drawn in cross-section. A well sited to test that predicted temperature pattern is *directly testable*: it either finds the predicted temperatures and permeability or it doesn't, and either way the result updates the model. That makes exploration a learning process rather than a sequence of bets.

For a high-temperature field — the vapour-dominated, dry-steam class that includes the kind of system this catalog's owner works — the conceptual model is also what feeds everything downstream: the numerical reservoir simulator is built to honour it, and the early capacity and risk estimates that justify the whole investment come out of it. **⟦TODO-Az: confirm how Darajat itself was explored and conceptualized — the MT surveys, the clay-cap mapping, and how the operator's working conceptual model is maintained today. Prep §9-D.⟧**`,
        id: `Sumur eksplorasi geothermal biayanya jutaan dolar dan butuh berminggu buat dibor, dan sebagian besar yang nentuin sukses-nya diputuskan sebelum rig datang: di mana naruhnya. Salah lokasi dan kamu habisin duit itu buat ngebuktiin sumber dayanya ada di tempat lain. Jadi pertanyaan sentral eksplorasi geothermal itu brutal-praktis — lawan *apa* kamu nge-target sumurnya?

Paper 2009 Cumming jawab pertanyaan itu dengan nolak dua shortcut yang menggoda. Pertama **anomaly hunting**: cari anomali tunggal terbesar — resistivity low terkuat, mata air terpanas, gravity high terbesar — dan bor itu. Kedua **anomaly stacking**: tumpuk beberapa peta anomali dan bor di tempat mereka berimpit. Dua-duanya gagal karena alasan sama: anomali geofisika individual itu *non-unik*. Zona low-resistivity bisa clay cap geothermal, tapi bisa juga clay-rich valley fill yang barren, aquifer salin, atau graphitic schist. Magnetic low bisa alterasi hidrotermal, atau cuma basin terisi sedimen. Ngebor anomali berarti bertaruh bahwa satu interpretasi benar tanpa nguji-nya.

Alternatif yang Cumming argumenin itu nge-target sumur lawan **resource conceptual model** — gambaran sistem yang terintegrasi dan koheren secara fisik yang inti-nya predicted natural-state temperature pattern, digambar dalam cross-section. Sumur yang ditaruh buat nguji predicted temperature pattern itu *directly testable*: dia entah nemu temperature dan permeability yang diprediksi atau enggak, dan apapun hasilnya nge-update model. Itu bikin eksplorasi jadi proses belajar daripada urutan taruhan.

Buat field high-temperature — kelas vapour-dominated, dry-steam yang termasuk jenis sistem yang owner katalog ini kerjain — conceptual model juga yang ngasih makan semua di hilir: numerical reservoir simulator dibangun buat honour-in dia, dan estimasi kapasitas dan risiko awal yang ngejustifikasi seluruh investasi keluar darinya. **⟦TODO-Az: konfirmasi gimana Darajat sendiri dieksplorasi dan dikonseptualisasi — survei MT, pemetaan clay-cap, dan gimana conceptual model kerja operator dijaga hari ini. Prep §9-D.⟧**`
      }
    },

    // ─────────────── 2. intuition ───────────────
    {
      id: 'intuition',
      heading: { en: 'Intuition', id: 'Intuisi' },
      body: {
        en: `Picture the deliverable as a single annotated cross-section: a slice through the earth with predicted temperature contours (isotherms) drawn on it, tied to maps of the surface manifestations and the data. The whole craft is getting those isotherms right, because temperature, pressure and permeability are what govern a reservoir, and the isotherm pattern in section view encodes all three.

The key reading trick is **isotherm spacing**. Where isotherms are widely spaced — nearly the same temperature over a large depth range — heat is being carried by *convection*, which means fluid is moving, which means the rock is permeable: that is your drillable target (an upflow, or a lateral outflow). Where isotherms are closely spaced — temperature climbing steeply with depth — heat is moving by *conduction* through rock that fluid cannot penetrate: that is a low-permeability zone, classically the clay cap that seals the system.

That clay cap is also what the main geophysical tool sees. Magnetotellurics (MT) images electrical resistivity, and the cap shows up as a distinctive low-resistivity layer (below ~10 Ω·m) because the cool tops of geothermal systems alter to smectite clay, which is very conductive. Crucially, resistivity tracks the *alteration mineralogy*, not today's temperature, so the base of the conductive cap marks the smectite-to-illite transition (around 180-220 °C) — a fossil isotherm. The upflow sits beneath the structural high, the thinnest point, of that draped conductive cap.

To anchor the isotherms quantitatively, Cumming uses chemistry: gas geothermometers on fumaroles and cation geothermometers (sodium-potassium and the like) on neutral-chloride hot springs estimate the deep reservoir temperature, and that temperature is pinned to a depth. The conceptual model is then whatever isotherm pattern simultaneously honours the resistivity cap, the geothermometry, the geology, the structure and the hydrology — and a well is placed to test it.

A caution worth stating up front, because most published examples are liquid systems: the picture above (chloride-spring geothermometry, a boiling liquid upflow) is the liquid-dominated case. **⟦TODO-Az: for a vapour-dominated / dry-steam field the deep zone is near-isothermal and vapour-static rather than tracking a boiling-liquid profile, the diagnostic fluids are dominated by fumarole gas, and beneath the conductive cap the steam-filled reservoir reads as comparatively resistive — review the dry-steam-vs-liquid contrasts before finalizing this section. Prep §9-C, §9-D.⟧**`,
        id: `Bayangin deliverable-nya sebagai satu cross-section yang dianotasi: irisan melalui bumi dengan predicted temperature contour (isoterm) digambar di atasnya, terikat ke peta manifestasi permukaan dan data. Seluruh keahlian-nya itu bikin isoterm itu benar, karena temperature, pressure dan permeability yang nge-govern reservoir, dan pola isoterm dalam section view nge-encode ketiganya.

Trik baca kuncinya itu **spasi isoterm**. Di mana isoterm berspasi lebar — hampir suhu sama di rentang kedalaman besar — panas dibawa *konveksi*, yang berarti fluid bergerak, yang berarti rock-nya permeabel: itu target drillable kamu (upflow, atau lateral outflow). Di mana isoterm berspasi rapat — suhu naik tajam dengan kedalaman — panas bergerak lewat *konduksi* melalui rock yang fluid gak bisa tembus: itu zona low-permeability, klasiknya clay cap yang nge-seal sistem.

Clay cap itu juga yang alat geofisika utama lihat. Magnetotellurics (MT) nge-image resistivity listrik, dan cap-nya muncul sebagai lapisan low-resistivity yang khas (di bawah ~10 Ω·m) karena puncak dingin sistem geothermal teralterasi jadi smectite clay, yang sangat konduktif. Penting, resistivity ngikutin *mineralogi alterasi*, bukan suhu hari ini, jadi dasar cap konduktif nandain transisi smectite-ke-illite (sekitar 180-220 °C) — isoterm fosil. Upflow duduk di bawah structural high, titik tertipis, dari cap konduktif yang ter-drape itu.

Buat nge-anchor isoterm secara kuantitatif, Cumming pake kimia: gas geothermometer di fumarol dan cation geothermometer (natrium-kalium dan sejenisnya) di mata air panas neutral-chloride nge-estimasi suhu reservoir dalam, dan suhu itu di-pin ke kedalaman. Conceptual model-nya kemudian apapun pola isoterm yang sekaligus honour resistivity cap, geothermometry, geologi, struktur dan hidrologi — dan sumur ditaruh buat nguji-nya.

Satu peringatan yang worth dinyatakan di depan, karena sebagian besar contoh yang dipublikasi itu sistem liquid: gambaran di atas (geothermometry chloride-spring, boiling liquid upflow) itu kasus liquid-dominated. **⟦TODO-Az: buat field vapour-dominated / dry-steam, zona dalam itu near-isothermal dan vapour-static daripada ngikutin profil boiling-liquid, fluid diagnostik didominasi fumarole gas, dan di bawah cap konduktif reservoir terisi-steam terbaca comparatively resistif — review kontras dry-steam-vs-liquid sebelum finalisasi section ini. Prep §9-C, §9-D.⟧**`
      }
    },

    // ─────────────── 3. formalization ───────────────
    {
      id: 'formalization',
      heading: { en: 'The method, made explicit', id: 'Metode, dibikin eksplisit' },
      body: {
        en: `Cumming's paper is interpretive, not equation-driven, so "formalization" here means the explicit rules of the method plus the one piece of real arithmetic it leads to — the capacity estimate.

**The five data streams and what each constrains.**
1. *MT/AMT resistivity* — images the conductive smectite clay cap (below ~10 Ω·m, with a core below ~5 Ω·m); the cap base maps the smectite-illite alteration transition. Non-unique on its own.
2. *Geothermometry* — fumarole gas and chloride-spring cation/silica geothermometers fix deep reservoir temperatures the isotherms must honour; flag steam-heated or mixed springs that read low.
3. *Geology and structure* — heat source, host rock, and the faults that control permeability.
4. *Hydrology and surface manifestations* — recharge, water table, fumaroles, sinter, alteration mapping.
5. *Direct temperature* — gradient and slim holes give the only pre-drilling subsurface temperatures; a reversal (hot shallow, cool deep) diagnoses a lateral outflow, a near-isothermal profile a permeable convective target.

**The interpretive rule.** Read permeability from isotherm spacing — wide spacing means convective/permeable, close spacing means conductive/impermeable — and accept only the isotherm pattern that is simultaneously consistent with all five streams. For liquid systems the upper bound on the upflow temperature profile is the boiling-point-for-depth curve. **⟦TODO-Az: replace boiling-point-for-depth with the near-isothermal vapour-static profile for the dry-steam Darajat case. Prep §9-C.⟧**

**The capacity estimate (Cumming's companion method).** Early-stage resource capacity is treated as the product of two independent quantities, each represented as a lognormal distribution: the resource **area** $A$ (km², from the footprint of the conceptual model) and the **power density** $D$ (MWe/km², from a database of analog producing fields). The capacity is

$$P = A \\times D$$

Because the product of independent lognormals is itself lognormal, and the median of a lognormal is unaffected by the spread, the **median capacity is exactly the product of the medians**:

$$P_{50} = A_{50} \\times D_{50}$$

The spread, however, does *not* multiply. In log-space the variances add, so the uncertainty combines in quadrature — the capacity's P10-to-P90 band is *narrower* than you would get by multiplying the individual P10s and P90s. That non-intuitive narrowing is the whole point: it stops you from either over- or under-stating the risk. A separate **probability of exploration success** (does the resource even exist — heat, fluid, permeability, seal?) is kept apart from the size distribution and multiplied in only at the end, to rank prospects.`,
        id: `Paper Cumming itu interpretif, bukan equation-driven, jadi "formalisasi" di sini berarti aturan eksplisit metode-nya plus satu bagian aritmetika nyata yang dia tuju — estimasi kapasitas.

**Lima aliran data dan apa yang masing-masing constrain.**
1. *Resistivity MT/AMT* — nge-image smectite clay cap konduktif (di bawah ~10 Ω·m, dengan core di bawah ~5 Ω·m); dasar cap nandain transisi alterasi smectite-illite. Non-unik sendirian.
2. *Geothermometry* — gas fumarol dan cation/silica geothermometer chloride-spring nge-fix suhu reservoir dalam yang isoterm harus honour; flag mata air steam-heated atau mixed yang terbaca rendah.
3. *Geologi dan struktur* — heat source, host rock, dan fault yang ngontrol permeability.
4. *Hidrologi dan manifestasi permukaan* — recharge, water table, fumarol, sinter, pemetaan alterasi.
5. *Suhu langsung* — gradient dan slim hole ngasih satu-satunya suhu bawah-permukaan pra-pengeboran; reversal (panas dangkal, dingin dalam) ngediagnosa lateral outflow, profil near-isothermal target konvektif permeabel.

**Aturan interpretif.** Baca permeability dari spasi isoterm — spasi lebar berarti konvektif/permeabel, spasi rapat berarti konduktif/impermeabel — dan terima cuma pola isoterm yang sekaligus konsisten sama kelima aliran. Buat sistem liquid batas atas profil suhu upflow itu kurva boiling-point-for-depth. **⟦TODO-Az: ganti boiling-point-for-depth dengan profil near-isothermal vapour-static buat kasus dry-steam Darajat. Prep §9-C.⟧**

**Estimasi kapasitas (metode companion Cumming).** Kapasitas sumber daya early-stage diperlakuin sebagai produk dua kuantitas independen, masing-masing direpresentasiin sebagai distribusi lognormal: **area** sumber daya $A$ (km², dari footprint conceptual model) dan **power density** $D$ (MWe/km², dari database field produksi analog). Kapasitas-nya

$$P = A \\times D$$

Karena produk lognormal independen itu sendiri lognormal, dan median lognormal gak terpengaruh spread-nya, **median kapasitas persis produk dari median**:

$$P_{50} = A_{50} \\times D_{50}$$

Spread-nya, tapi, *gak* mengalikan. Di log-space variance bertambah, jadi ketidakpastian bergabung secara quadrature — band P10-ke-P90 kapasitas *lebih sempit* dari yang kamu dapet kalau ngaliin P10 dan P90 individual. Penyempitan non-intuitif itu seluruh poin-nya: dia ngehentiin kamu dari over- atau under-stating risiko. **Probability of exploration success** terpisah (apakah sumber dayanya bahkan ada — heat, fluid, permeability, seal?) dijaga terpisah dari distribusi ukuran dan dikaliin cuma di akhir, buat me-ranking prospect.`
      }
    },

    // ─────────────── 4. worked-example ───────────────
    {
      id: 'worked-example',
      heading: { en: 'Worked example', id: 'Contoh kerjaan' },
      body: {
        en: `Two examples, both dry-steam-applicable. **⟦TODO-Az: numbers are ILLUSTRATIVE teaching values, not a Darajat estimate. Prep §9-G.⟧**

**Example 1 — read the clay-cap cross-section and pick the target.** You are handed an MT resistivity section: a draped low-resistivity layer (below ~5-10 Ω·m) that is thinnest and highest in the centre, beneath a cluster of fumaroles, and dips down on the eastern flank toward a line of chloride springs. Below the cap the rock is more resistive.

Reasoning: the thinnest, highest point of the conductive cap, under the fumaroles, marks the **upflow** — site the well to penetrate the cap base there into the resistive reservoir below. The eastern limb where the cap dips toward the springs is the **lateral outflow** — drilling it would find a temperature reversal, not the hot upflow. Now a decoy is added: a second low-resistivity body to the west. The geology map shows it sits in graphitic Paleozoic schist with no associated alteration or thermal manifestation — a classic non-unique resistivity low. Reject it: the conductive layer there is graphite, not a clay cap. The conceptual model, not the resistivity map alone, makes the call.

**Example 2 — a lognormal power-density capacity estimate.** From the conceptual model the resource area is bracketed at $A_{90} = 8$ km² and $A_{10} = 20$ km²; for a lognormal the median is the geometric mean, $A_{50} = \\sqrt{8 \\times 20} \\approx 12.6$ km². From a database of dry-steam analog fields the power density is bracketed at $D_{90} = 6$ and $D_{10} = 22$ MWe/km², so $D_{50} = \\sqrt{6 \\times 22} \\approx 11.5$ MWe/km².

The median capacity is the product of the medians:

$$P_{50} = A_{50} \\times D_{50} \\approx 12.6 \\times 11.5 \\approx 145 \\text{ MWe}$$

Notice what you must *not* do: multiplying the individual extremes ($8 \\times 6 = 48$ up to $20 \\times 22 = 440$ MWe) gives a 48-440 band that badly overstates the uncertainty, because it pretends area and power density both hit their low ends together and both hit their high ends together. They are independent, so in log-space their spreads add in quadrature and the true P10-P90 band is substantially narrower than 48-440. Finally, multiply by a probability of exploration success — say 0.6 if heat, fluid, permeability and seal are all reasonably likely — to get a risked capacity (~87 MWe here) for ranking against other prospects. **⟦TODO-Az: use a power density calibrated to dry-steam analogs (Larderello, The Geysers, Kamojang, Darajat), not a generic value. Prep §9-G.⟧**`,
        id: `Dua contoh, dua-duanya dry-steam-applicable. **⟦TODO-Az: angka itu nilai pengajaran ILUSTRATIF, bukan estimasi Darajat. Prep §9-G.⟧**

**Contoh 1 — baca cross-section clay-cap dan pilih target.** Kamu dikasih section resistivity MT: lapisan low-resistivity ter-drape (di bawah ~5-10 Ω·m) yang paling tipis dan tertinggi di tengah, di bawah klaster fumarol, dan menukik turun di flank timur menuju barisan chloride spring. Di bawah cap rock-nya lebih resistif.

Penalaran: titik tertipis, tertinggi dari cap konduktif, di bawah fumarol, nandain **upflow** — taruh sumur buat nembus dasar cap di situ ke reservoir resistif di bawah. Limb timur tempat cap menukik menuju mata air itu **lateral outflow** — ngebor itu bakal nemu temperature reversal, bukan upflow panas. Sekarang decoy ditambah: badan low-resistivity kedua di barat. Peta geologi nunjukin dia duduk di graphitic Paleozoic schist tanpa alterasi atau manifestasi termal terkait — resistivity low non-unik klasik. Tolak dia: lapisan konduktif di situ itu grafit, bukan clay cap. Conceptual model, bukan peta resistivity sendirian, yang bikin keputusan.

**Contoh 2 — estimasi kapasitas lognormal power-density.** Dari conceptual model area sumber daya di-bracket di $A_{90} = 8$ km² dan $A_{10} = 20$ km²; buat lognormal median itu geometric mean, $A_{50} = \\sqrt{8 \\times 20} \\approx 12.6$ km². Dari database field analog dry-steam power density di-bracket di $D_{90} = 6$ dan $D_{10} = 22$ MWe/km², jadi $D_{50} = \\sqrt{6 \\times 22} \\approx 11.5$ MWe/km².

Median kapasitas itu produk dari median:

$$P_{50} = A_{50} \\times D_{50} \\approx 12.6 \\times 11.5 \\approx 145 \\text{ MWe}$$

Perhatiin apa yang *gak* boleh kamu lakuin: ngaliin extreme individual ($8 \\times 6 = 48$ sampai $20 \\times 22 = 440$ MWe) ngasih band 48-440 yang parah nge-overstate ketidakpastian, karena dia pura-pura area dan power density dua-duanya nge-hit low end bareng dan dua-duanya nge-hit high end bareng. Mereka independen, jadi di log-space spread-nya bertambah quadrature dan band P10-P90 sebenarnya jauh lebih sempit dari 48-440. Akhirnya, kaliin sama probability of exploration success — misalnya 0.6 kalau heat, fluid, permeability dan seal semua cukup mungkin — buat dapet risked capacity (~87 MWe di sini) buat ranking lawan prospect lain. **⟦TODO-Az: pake power density yang dikalibrasi ke analog dry-steam (Larderello, The Geysers, Kamojang, Darajat), bukan nilai generik. Prep §9-G.⟧**`
      }
    },

    // ─────────────── 5. applications ───────────────
    {
      id: 'applications',
      heading: { en: 'Applications by audience', id: 'Aplikasi per audience' },
      body: {
        en: `### For the advanced researcher / geophysicist

The frontier is making the resistivity interpretation less non-unique and more three-dimensional. Modern practice replaces 1D MT soundings with 2D and 3D MT inversion (Cumming's own 2010 Glass Mountain paper, with Mackie) and corrects near-surface distortion with TDEM static-shift surveys. Joint and constrained inversion — tying resistivity to temperature, to gravity, to the conceptual model itself — is the active research direction, as is propagating interpretation uncertainty into the capacity estimate rather than reporting a single number. **⟦TODO-Az: the Darajat MT dataset (reportedly ~85 sites, 1996-97 and 2004, 3D inversion) is the concrete local example here — confirm the survey details and which inversion the operator relies on. Prep §9-D.⟧**

### For the exploration / reservoir engineer

This is the operational core: assemble the five data streams into a predicted natural-state temperature cross-section, target wells to test the predicted isotherms (a slim or temperature-gradient hole first to confirm the thermal regime cheaply, then a directional production well placed to cut the upflow and the controlling structures), and update the model with every result. The conceptual model also hands directly to the next tier: it is the design input the numerical reservoir simulator is built to honour. **⟦TODO-Az: this hand-off to the simulator (and the relation to well-scale deliverability) is a cross-scale synthesis — see the connections section and confirm it matches Darajat/Star Energy practice. Prep §9-E, §9-F.⟧**

### For management / resource assessment

Before committing exploration and drilling budgets, the conceptual model produces the two things a capital decision needs: a capacity estimate (the lognormal power-density distribution) and an explicit, separated probability of exploration success. Reporting capacity as a P90/P50/P10 range rather than a single number — and keeping "does it exist?" apart from "how big is it?" — is what lets a portfolio of prospects be ranked and risked consistently. The discipline's payoff is that each well drilled either confirms the model (de-risking the capacity) or revises it (re-ranking the prospect), so the assessment improves rather than just accumulating.`,
        id: `### Untuk advanced researcher / geophysicist

Frontier-nya itu bikin interpretasi resistivity kurang non-unik dan lebih tiga-dimensi. Praktek modern ngeganti 1D MT sounding dengan inversi MT 2D dan 3D (paper Glass Mountain 2010 Cumming sendiri, sama Mackie) dan ngoreksi distorsi dekat-permukaan dengan survei static-shift TDEM. Joint dan constrained inversion — ngiket resistivity ke temperature, ke gravity, ke conceptual model itu sendiri — itu arah riset aktif, begitu juga ngepropagasi ketidakpastian interpretasi ke estimasi kapasitas daripada nge-report satu angka. **⟦TODO-Az: dataset MT Darajat (dilaporkan ~85 site, 1996-97 dan 2004, inversi 3D) itu contoh lokal konkret di sini — konfirmasi detail survei dan inversi mana yang operator andelin. Prep §9-D.⟧**

### Untuk exploration / reservoir engineer

Ini core operasional: rakit kelima aliran data jadi predicted natural-state temperature cross-section, target sumur buat nguji predicted isoterm (slim atau temperature-gradient hole dulu buat konfirmasi rezim termal murah, terus directional production well ditaruh buat motong upflow dan struktur pengontrol), dan update model dengan tiap hasil. Conceptual model juga nyerahin langsung ke tier berikutnya: dia design input yang numerical reservoir simulator dibangun buat honour. **⟦TODO-Az: hand-off ke simulator ini (dan relasi ke well-scale deliverability) itu sintesis cross-scale — lihat section connections dan konfirmasi cocok sama praktek Darajat/Star Energy. Prep §9-E, §9-F.⟧**

### Untuk manajemen / resource assessment

Sebelum nge-commit budget eksplorasi dan pengeboran, conceptual model ngehasilin dua hal yang keputusan kapital butuh: estimasi kapasitas (distribusi lognormal power-density) dan probability of exploration success yang eksplisit dan terpisah. Nge-report kapasitas sebagai range P90/P50/P10 daripada satu angka — dan njaga "apakah dia ada?" terpisah dari "seberapa besar dia?" — itu yang ngebikin portofolio prospect bisa di-ranking dan di-risk secara konsisten. Payoff disiplin-nya itu tiap sumur yang dibor entah konfirmasi model (nge-de-risk kapasitas) atau revisi-nya (re-ranking prospect), jadi assessment-nya membaik daripada cuma nambah.`
      }
    },

    // ─────────────── 6. practice ───────────────
    {
      id: 'practice',
      heading: { en: 'Practice', id: 'Latihan' },
      body: {
        en: `**1.** On a predicted natural-state cross-section you see two regions: one where the 200, 240 and 260 °C isotherms are bunched within a 200 m depth interval, and one where the same three isotherms are spread across 1500 m. Which region is the permeable target and which is the cap or a tight zone, and why?

<details><summary>Answer</summary>
The widely spaced region (three isotherms over 1500 m, a gentle gradient) is the permeable target: nearly uniform temperature over a large depth range means heat is being homogenized by convecting fluid, which requires permeability. The bunched region (three isotherms in 200 m, a steep gradient) is conductive — heat moving through rock the fluid cannot penetrate — i.e. a low-permeability zone such as the clay cap. The rule is: wide isotherm spacing = convective/permeable; close spacing = conductive/impermeable.
</details>

**2.** Two separate MT surveys each find a strong below-5 Ω·m conductor. One underlies a field of fumaroles and acid-altered ground on a young volcano; the other underlies a flat sediment-filled valley with no thermal features. Why is it a mistake to treat these as equally promising targets, and what does Cumming's method do instead?

<details><summary>Answer</summary>
Low resistivity is non-unique. The conductor under the fumaroles/alteration is plausibly a smectite clay cap over a geothermal upflow; the one under the barren valley is far more likely clay-rich sediment, saline groundwater, or graphitic rock — the same MT signature with no resource beneath it. Anomaly hunting treats the two equally because it looks only at the resistivity. Cumming's method refuses to target either on resistivity alone: it builds a conceptual model integrating geology, structure, geochemistry, hydrology and surface manifestations, and only the volcano case yields a coherent model (heat source, alteration consistent with a cap, geothermometry) — so only it becomes a target. The valley conductor is rejected as a non-unique anomaly.
</details>

**3.** Cumming anchors isotherms using chloride-spring cation geothermometry and the boiling-point-for-depth curve. Why does this standard liquid-system workflow need modification for a vapour-dominated (dry-steam) field, and what replaces each piece?

<details><summary>Answer (with the dry-steam caveat)</summary>
Both pieces assume a boiling *liquid* system. Cation geothermometers (Na-K, Na-K-Ca) need a liquid sample equilibrated with reservoir rock; a vapour-dominated field discharges mainly steam and gas at the surface, so the diagnostic chemistry shifts to fumarole *gas* geothermometers. The boiling-point-for-depth curve is the temperature-depth profile of a hydrostatic boiling liquid column; a vapour-dominated reservoir is instead near-isothermal and vapour-static (small vertical temperature and pressure gradients, pressure near the saturation curve), so that near-isothermal vapour-static profile replaces the BPD curve as the thermal anchor. The conceptual-model logic (read permeability from isotherm spacing, integrate all data) is unchanged; the liquid-specific anchors are swapped for vapour-dominated ones. **⟦TODO-Az: the BPD→near-isothermal/vapour-static swap and the fumarole-gas-geothermometry shift for dry steam — confirm against Darajat field data before finalizing. Prep §9-C.⟧**
</details>

**4.** A prospect's conceptual model brackets the resource area at P90 = 10 km² and P10 = 40 km², and analog dry-steam fields give a power density of P90 = 8 and P10 = 18 MWe/km². Estimate the P50 capacity, and explain why you should not report the range as 80 to 720 MWe.

<details><summary>Answer</summary>
Treat area and power density as independent lognormals. Each median is the geometric mean of its P90 and P10: area $A_{50} = \\sqrt{10 \\times 40} = \\sqrt{400} = 20$ km²; power density $D_{50} = \\sqrt{8 \\times 18} = \\sqrt{144} = 12$ MWe/km². The median capacity is the product of the medians, $P_{50} = 20 \\times 12 = 240$ MWe. The naive range 80 (= 10×8) to 720 (= 40×18) MWe is wrong because it assumes area and power density hit their low extremes together and their high extremes together — i.e. perfect correlation. They are independent, so in log-space their uncertainties add in quadrature and the true P10-P90 capacity band is substantially narrower than 80-720. Reporting the multiplied-extremes range overstates the uncertainty and is precisely the pitfall the lognormal method exists to avoid.
</details>`,
        id: `**1.** Di predicted natural-state cross-section kamu lihat dua region: satu di mana isoterm 200, 240 dan 260 °C berdesakan dalam interval kedalaman 200 m, dan satu di mana tiga isoterm yang sama tersebar across 1500 m. Region mana target permeabel dan mana cap atau zona ketat, dan kenapa?

<details><summary>Jawaban</summary>
Region berspasi lebar (tiga isoterm over 1500 m, gradient landai) itu target permeabel: suhu hampir seragam di rentang kedalaman besar berarti panas dihomogenkan fluid konvektif, yang butuh permeability. Region berdesakan (tiga isoterm dalam 200 m, gradient tajam) itu konduktif — panas bergerak lewat rock yang fluid gak bisa tembus — yaitu zona low-permeability seperti clay cap. Aturannya: spasi isoterm lebar = konvektif/permeabel; spasi rapat = konduktif/impermeabel.
</details>

**2.** Dua survei MT terpisah masing-masing nemu konduktor kuat di bawah-5 Ω·m. Satu di bawah field fumarol dan tanah acid-altered di gunung api muda; satunya di bawah valley datar terisi-sedimen tanpa fitur termal. Kenapa salah memperlakukan ini sebagai target yang sama menjanjikan, dan apa yang metode Cumming lakuin sebagai gantinya?

<details><summary>Jawaban</summary>
Low resistivity itu non-unik. Konduktor di bawah fumarol/alterasi itu plausibel smectite clay cap di atas upflow geothermal; yang di bawah valley barren jauh lebih mungkin sedimen clay-rich, groundwater salin, atau rock grafit — signature MT yang sama tanpa sumber daya di bawahnya. Anomaly hunting memperlakukan keduanya sama karena cuma lihat resistivity. Metode Cumming nolak nge-target salah satunya dari resistivity sendirian: dia bangun conceptual model ngintegrasiin geologi, struktur, geokimia, hidrologi dan manifestasi permukaan, dan cuma kasus gunung api yang ngehasilin model koheren (heat source, alterasi konsisten sama cap, geothermometry) — jadi cuma itu yang jadi target. Konduktor valley ditolak sebagai anomali non-unik.
</details>

**3.** Cumming nge-anchor isoterm pake cation geothermometry chloride-spring dan kurva boiling-point-for-depth. Kenapa workflow sistem-liquid standar ini butuh modifikasi buat field vapour-dominated (dry-steam), dan apa yang ngeganti tiap bagian?

<details><summary>Jawaban (dengan caveat dry-steam)</summary>
Dua bagian mengasumsikan sistem *liquid* yang mendidih. Cation geothermometer (Na-K, Na-K-Ca) butuh sampel liquid yang ter-ekuilibrasi sama reservoir rock; field vapour-dominated nge-discharge terutama steam dan gas di permukaan, jadi kimia diagnostik geser ke fumarole *gas* geothermometer. Kurva boiling-point-for-depth itu profil temperature-depth dari kolom liquid mendidih hidrostatik; reservoir vapour-dominated malah near-isothermal dan vapour-static (gradient suhu dan pressure vertikal kecil, pressure dekat kurva saturasi), jadi profil near-isothermal vapour-static itu ngeganti kurva BPD sebagai anchor termal. Logika conceptual-model (baca permeability dari spasi isoterm, integrasiin semua data) gak berubah; anchor liquid-specific ditukar sama yang vapour-dominated. **⟦TODO-Az: swap BPD→near-isothermal/vapour-static dan shift ke fumarole-gas-geothermometry buat dry steam — konfirmasi lawan data field Darajat sebelum finalisasi. Prep §9-C.⟧**
</details>

**4.** Conceptual model sebuah prospect nge-bracket area sumber daya di P90 = 10 km² dan P10 = 40 km², dan field analog dry-steam ngasih power density P90 = 8 dan P10 = 18 MWe/km². Estimasi kapasitas P50, dan jelasin kenapa kamu gak boleh nge-report range-nya sebagai 80 sampai 720 MWe.

<details><summary>Jawaban</summary>
Perlakukan area dan power density sebagai lognormal independen. Tiap median itu geometric mean dari P90 dan P10-nya: area $A_{50} = \\sqrt{10 \\times 40} = \\sqrt{400} = 20$ km²; power density $D_{50} = \\sqrt{8 \\times 18} = \\sqrt{144} = 12$ MWe/km². Median kapasitas itu produk dari median, $P_{50} = 20 \\times 12 = 240$ MWe. Range naif 80 (= 10×8) sampai 720 (= 40×18) MWe itu salah karena dia mengasumsikan area dan power density nge-hit low extreme bareng dan high extreme bareng — yaitu korelasi sempurna. Mereka independen, jadi di log-space ketidakpastiannya bertambah quadrature dan band kapasitas P10-P90 sebenarnya jauh lebih sempit dari 80-720. Nge-report range multiplied-extremes nge-overstate ketidakpastian dan itu persis pitfall yang metode lognormal ada buat menghindari.
</details>`
      }
    },

    // ─────────────── 7. connections ───────────────
    {
      id: 'connections',
      heading: { en: 'Connections', id: 'Koneksi' },
      body: {
        en: `- **Prereq**: [Stober & Bucher 2021](item:stober-bucher-2021) — the survey textbook that supplies the foundations (geothermal systems, heat transport, hydrology, alteration mineralogy, the boiling-point-for-depth curve) this method assumes. Read it first.
- **Upstream of**: [O'Sullivan-Pruess-Lippmann 2001](item:osullivan-pruess-lippmann-2001) — the conceptual model (predicted natural-state isotherms, clay-cap geometry, upflow/outflow) is the design input the numerical reservoir simulator's grid and natural-state calibration target are built to honour. Cumming sits at the front of the modelling workflow; the simulator is the next tier.
- **Related (different scale)**: [Acuña 2008](item:acuna-2008) — Cumming works at field/exploration scale (where is the resource, how hot and permeable, before drilling); Acuña works at single-well scale (how much a completed well delivers and why it declines, via $C_{WB}$ and $PI$). The conceptual model predicts where Acuña-style productive feedzones should be found. **⟦TODO-Az: cross-scale synthesis — confirm vs Darajat practice. Prep §9-E.⟧**
- **Downstream**: [Grant & Bixley 2011](item:grant-bixley-2011) — once wells confirm the conceptual model, reservoir engineering (well testing, lumped models, decline analysis) takes over; Grant & Bixley also formalize the conceptual-modelling step Cumming operationalizes for the pre-drilling surface stage.
- **Downstream (further)**: [DiPippo 2016](item:dipippo-2016) — utilization; the conceptual model's predicted temperature class sets the viable power cycle (for a dry-steam field, steam direct to turbine).`,
        id: `- **Prereq**: [Stober & Bucher 2021](item:stober-bucher-2021) — textbook survey yang nyediain fondasi (sistem geothermal, heat transport, hidrologi, mineralogi alterasi, kurva boiling-point-for-depth) yang metode ini asumsikan. Baca dulu.
- **Upstream dari**: [O'Sullivan-Pruess-Lippmann 2001](item:osullivan-pruess-lippmann-2001) — conceptual model (predicted natural-state isoterm, geometri clay-cap, upflow/outflow) itu design input yang grid numerical reservoir simulator dan natural-state calibration target dibangun buat honour. Cumming duduk di depan workflow modelling; simulator itu tier berikutnya.
- **Related (skala beda)**: [Acuña 2008](item:acuna-2008) — Cumming kerja di skala field/eksplorasi (di mana sumber dayanya, seberapa panas dan permeabel, sebelum ngebor); Acuña kerja di skala single-well (seberapa banyak sumur selesai deliver dan kenapa dia decline, via $C_{WB}$ dan $PI$). Conceptual model memprediksi di mana feedzone produktif ala-Acuña harusnya ditemukan. **⟦TODO-Az: sintesis cross-scale — konfirmasi vs praktek Darajat. Prep §9-E.⟧**
- **Downstream**: [Grant & Bixley 2011](item:grant-bixley-2011) — begitu sumur konfirmasi conceptual model, reservoir engineering (well testing, lumped model, decline analysis) ngambil alih; Grant & Bixley juga nge-formalisasi langkah conceptual-modelling yang Cumming operasionalisasi buat tahap permukaan pra-pengeboran.
- **Downstream (lebih jauh)**: [DiPippo 2016](item:dipippo-2016) — utilisasi; kelas suhu yang diprediksi conceptual model nge-set power cycle yang viable (buat field dry-steam, steam langsung ke turbine).`
      }
    },

    // ─────────────── 8. sources ───────────────
    {
      id: 'sources',
      heading: { en: 'Sources', id: 'Sumber' },
      body: {
        en: `- **Cumming, W.** (2009). "Geothermal Resource Conceptual Models Using Surface Exploration Data." *Proceedings, 34th Workshop on Geothermal Reservoir Engineering, Stanford University*, SGP-TR-187. The conceptual-model targeting argument and the clay-cap resistivity model. **(This item.)**
- **Cumming, W.** (2016). "Geophysics and Resource Conceptual Models in Geothermal Exploration and Development." In R. DiPippo (ed.), *Geothermal Power Generation: Developments and Innovation*, 33-75. Woodhead Publishing / Elsevier. The expanded book-chapter treatment of the same method.
- **Cumming, W., and Mackie, R.** (2010). "Resistivity Imaging of Geothermal Resources Using 1D, 2D and 3D MT Inversion and TDEM Static Shift Correction Illustrated by a Glass Mountain Case History." *Proceedings, World Geothermal Congress 2010*, Bali, Indonesia. The MT-inversion and static-shift methodology behind the resistivity interpretation.
- **Cumming, W.** (2016). "Resource Capacity Estimation Using Lognormal Power Density from Producing Fields and Area from Resource Conceptual Models; Advantages, Pitfalls and Remedies." *Proceedings, 41st Workshop on Geothermal Reservoir Engineering, Stanford University*, SGP-TR-209. The lognormal power-density capacity method used in the worked example.`,
        id: `- **Cumming, W.** (2009). "Geothermal Resource Conceptual Models Using Surface Exploration Data." *Proceedings, 34th Workshop on Geothermal Reservoir Engineering, Stanford University*, SGP-TR-187. Argumen conceptual-model targeting dan clay-cap resistivity model. **(Item ini.)**
- **Cumming, W.** (2016). "Geophysics and Resource Conceptual Models in Geothermal Exploration and Development." Dalam R. DiPippo (ed.), *Geothermal Power Generation: Developments and Innovation*, 33-75. Woodhead Publishing / Elsevier. Treatment book-chapter yang diperluas dari metode yang sama.
- **Cumming, W., dan Mackie, R.** (2010). "Resistivity Imaging of Geothermal Resources Using 1D, 2D and 3D MT Inversion and TDEM Static Shift Correction Illustrated by a Glass Mountain Case History." *Proceedings, World Geothermal Congress 2010*, Bali, Indonesia. Metodologi inversi-MT dan static-shift di balik interpretasi resistivity.
- **Cumming, W.** (2016). "Resource Capacity Estimation Using Lognormal Power Density from Producing Fields and Area from Resource Conceptual Models; Advantages, Pitfalls and Remedies." *Proceedings, 41st Workshop on Geothermal Reservoir Engineering, Stanford University*, SGP-TR-209. Metode kapasitas lognormal power-density yang dipake di worked example.`
      }
    },
  ],

  audio: { enabled: true },

  selfTest: [
    {
      sectionId: 'motivation',
      question: {
        en: 'Cumming rejects "anomaly hunting" and "anomaly stacking" in favour of targeting a conceptual model. What is the single property of geophysical anomalies that makes the first two approaches unreliable, and why does conceptual-model targeting escape it?',
        id: 'Cumming nolak "anomaly hunting" dan "anomaly stacking" demi nge-target conceptual model. Apa properti tunggal dari anomali geofisika yang bikin dua pendekatan pertama gak reliabel, dan kenapa conceptual-model targeting lolos darinya?'
      },
      prompt: { en: 'Before continuing, try answering:', id: 'Sebelum lanjut, coba jawab:' },
      answer: {
        en: 'Non-uniqueness: a given geophysical anomaly does not have a unique cause. A low-resistivity zone can be a geothermal clay cap, but equally clay-rich valley fill, saline groundwater, or graphitic schist; a magnetic low can be alteration or just a sediment basin. Anomaly hunting (drill the biggest single anomaly) and anomaly stacking (drill where anomalies coincide) both implicitly assume the geothermal interpretation is the right one, without testing it — so they are betting on a non-unique signal. Conceptual-model targeting escapes this because it requires the interpretation to be simultaneously consistent with all the data (geology, structure, geochemistry, hydrology, temperature), and the well is placed to test a predicted physical quantity (the isotherm pattern). A well that tests a prediction is directly falsifiable: it confirms or revises the model either way, so a non-unique anomaly alone never drives the decision.',
        id: 'Non-uniqueness: anomali geofisika tertentu gak punya penyebab unik. Zona low-resistivity bisa clay cap geothermal, tapi sama-sama bisa clay-rich valley fill, groundwater salin, atau graphitic schist; magnetic low bisa alterasi atau cuma basin sedimen. Anomaly hunting (bor anomali tunggal terbesar) dan anomaly stacking (bor di tempat anomali berimpit) dua-duanya implisit mengasumsikan interpretasi geothermal yang benar, tanpa nguji-nya — jadi mereka bertaruh di sinyal non-unik. Conceptual-model targeting lolos dari ini karena dia nuntut interpretasi konsisten sekaligus sama semua data (geologi, struktur, geokimia, hidrologi, temperature), dan sumur ditaruh buat nguji kuantitas fisik yang diprediksi (pola isoterm). Sumur yang nguji prediksi itu directly falsifiable: dia konfirmasi atau revisi model apapun caranya, jadi anomali non-unik sendirian gak pernah nge-drive keputusan.'
      }
    },
    {
      sectionId: 'intuition',
      question: {
        en: 'Why does the BASE of the MT-imaged low-resistivity clay cap correspond to a roughly fixed temperature (around 180-220 °C) regardless of the present-day thermal state, and what does that let an interpreter infer?',
        id: 'Kenapa DASAR clay cap low-resistivity yang di-image MT berkorespondensi ke suhu yang kira-kira tetap (sekitar 180-220 °C) terlepas dari kondisi termal hari ini, dan apa yang itu ngebikin interpreter bisa infer?'
      },
      prompt: { en: 'Before continuing, try answering:', id: 'Sebelum lanjut, coba jawab:' },
      answer: {
        en: 'Resistivity in a geothermal system is controlled mainly by clay alteration mineralogy, not directly by present temperature. The cool, shallow part of the system alters to smectite, which is very conductive (below ~10 Ω·m); at higher temperatures smectite converts to illite/chlorite, which is more resistive. That smectite-to-illite transition happens over a fairly fixed temperature window (~180-220 °C). So the base of the conductive cap marks where the rock has passed through that transition — it is effectively a fossil isotherm. The interpreter can therefore read the cap base as an approximate temperature surface and use its geometry (its structural high, where it is thinnest) to locate the upflow beneath it. The caveat: because the mineralogy records the alteration history, the cap can lag the present thermal state (a relict cap over a now-cooler or now-hotter system), so it constrains but does not by itself fix the current temperature.',
        id: 'Resistivity di sistem geothermal dikontrol terutama oleh mineralogi alterasi clay, bukan langsung oleh suhu sekarang. Bagian dangkal dingin sistem teralterasi jadi smectite, yang sangat konduktif (di bawah ~10 Ω·m); di suhu lebih tinggi smectite berubah jadi illite/chlorite, yang lebih resistif. Transisi smectite-ke-illite itu terjadi di window suhu yang cukup tetap (~180-220 °C). Jadi dasar cap konduktif nandain di mana rock udah lewat transisi itu — dia efektif isoterm fosil. Interpreter karena itu bisa baca dasar cap sebagai permukaan suhu approximate dan pake geometri-nya (structural high-nya, di mana paling tipis) buat ngelokasiin upflow di bawahnya. Caveat-nya: karena mineralogi nge-record sejarah alterasi, cap bisa nge-lag kondisi termal sekarang (cap relict di atas sistem yang sekarang lebih dingin atau lebih panas), jadi dia constrain tapi gak dengan sendirinya nge-fix suhu sekarang.'
      }
    },
    {
      sectionId: 'worked-example',
      question: {
        en: 'In the lognormal capacity method, the median capacity equals the product of the median area and median power density, but the P10-P90 range does NOT equal the product of the individual P10s and P90s. Explain both facts.',
        id: 'Di metode kapasitas lognormal, median kapasitas sama dengan produk median area dan median power density, tapi range P10-P90 TIDAK sama dengan produk P10 dan P90 individual. Jelasin kedua fakta.'
      },
      prompt: { en: 'Before continuing, try answering:', id: 'Sebelum lanjut, coba jawab:' },
      answer: {
        en: 'Capacity = area × power density, both modelled as independent lognormals. Taking logarithms turns the product into a sum: ln(capacity) = ln(area) + ln(power density). For a lognormal the median is exp(mean-of-the-log), and the mean of a sum is the sum of the means, so the median of the product is exp(mean ln-area + mean ln-density) = (median area)×(median density). Hence P50(capacity) = A50 × D50 exactly. The range behaves differently because in log-space the variances add (for independent variables), so the standard deviation of ln(capacity) is the quadrature sum sqrt(σ_A² + σ_D²), not σ_A + σ_D. Multiplying the individual P90s together and the individual P10s together would instead assume area and power density are perfectly correlated — both low at once, both high at once — which inflates the spread. Because they are independent, it is unlikely both hit their extremes simultaneously, so the true P10-P90 capacity band is narrower than the product-of-extremes range.',
        id: 'Kapasitas = area × power density, dua-duanya dimodelkan sebagai lognormal independen. Ngambil logaritma ngubah produk jadi penjumlahan: ln(kapasitas) = ln(area) + ln(power density). Buat lognormal median itu exp(mean-dari-log), dan mean penjumlahan itu jumlah mean, jadi median produk itu exp(mean ln-area + mean ln-density) = (median area)×(median density). Karena itu P50(kapasitas) = A50 × D50 persis. Range berperilaku beda karena di log-space variance bertambah (buat variabel independen), jadi standard deviation ln(kapasitas) itu jumlah quadrature sqrt(σ_A² + σ_D²), bukan σ_A + σ_D. Ngaliin P90 individual bareng dan P10 individual bareng malah mengasumsikan area dan power density berkorelasi sempurna — dua-duanya rendah sekaligus, dua-duanya tinggi sekaligus — yang nge-inflate spread. Karena mereka independen, kecil kemungkinan dua-duanya nge-hit extreme bersamaan, jadi band kapasitas P10-P90 sebenarnya lebih sempit dari range product-of-extremes.'
      }
    },
    {
      sectionId: 'applications',
      question: {
        en: 'Cumming insists that resource capacity be reported as a P90/P50/P10 range AND that a separate "probability of exploration success" be kept apart from it. Why separate these two, rather than folding the chance of failure into one expected-capacity number?',
        id: 'Cumming bersikeras kapasitas sumber daya di-report sebagai range P90/P50/P10 DAN bahwa "probability of exploration success" terpisah dijaga terpisah darinya. Kenapa misahin keduanya, daripada nge-fold peluang gagal jadi satu angka expected-capacity?'
      },
      prompt: { en: 'Before continuing, try answering:', id: 'Sebelum lanjut, coba jawab:' },
      answer: {
        en: 'They answer two different questions that carry different information for a decision. The P90/P50/P10 capacity distribution answers "if the resource exists, how big is it, and how uncertain is that size?" The probability of exploration success answers "does the resource exist at all — are heat, fluid, permeability and a seal actually present?" Folding them into a single expected value (capacity × probability) destroys information: a 200 MWe resource with a 50% chance of existing and a 100 MWe sure thing can produce the same 100 MWe expectation, yet they are completely different investment propositions (different downside, different value of an early cheap test). Keeping them separate lets a portfolio be ranked on both axes — size and chance — and lets management target the cheapest data (often a slim hole confirming temperature) at whichever risk dominates a given prospect. It also keeps the geoscience (the size distribution from the conceptual model) honest and distinct from the existence risk, rather than blurring them into one number that hides which one is driving the decision.',
        id: 'Mereka jawab dua pertanyaan beda yang bawa informasi beda buat keputusan. Distribusi kapasitas P90/P50/P10 jawab "kalau sumber dayanya ada, seberapa besar dia, dan seberapa tidak pasti ukuran itu?" Probability of exploration success jawab "apakah sumber dayanya ada sama sekali — apakah heat, fluid, permeability dan seal beneran ada?" Nge-fold mereka jadi satu expected value (kapasitas × probability) ngancurin informasi: sumber daya 200 MWe dengan 50% peluang ada dan 100 MWe yang pasti bisa ngehasilin ekspektasi 100 MWe yang sama, padahal mereka proposisi investasi yang sama sekali beda (downside beda, nilai tes murah awal beda). Njaga mereka terpisah ngebikin portofolio bisa di-ranking di dua axis — ukuran dan peluang — dan ngebikin manajemen nge-target data termurah (sering slim hole yang konfirmasi temperature) di risiko mana yang dominan buat prospect tertentu. Dia juga njaga geoscience (distribusi ukuran dari conceptual model) jujur dan distinct dari existence risk, daripada ngaburin mereka jadi satu angka yang nyembunyiin mana yang nge-drive keputusan.'
      }
    },
  ],
};
