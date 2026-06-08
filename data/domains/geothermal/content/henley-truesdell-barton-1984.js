// ─────────────────────────────────────────────────────────────────────────
// ⚠ DRAFT — AWAITING AZ DOMAIN REVIEW (option (b): "I draft, you correct").
// Geothermal content is Az-authored. Schema-valid + renderable, NOT finalized.
// Domain claims flagged inline **⟦TODO-Az: …⟧**.
// Full prep: notes/henley-truesdell-barton-1984-research-prep-2026-06-02.md
//
// OPEN TODO-Az ITEMS (prep §9):
//   A. DRY-STEAM: liquid cation geothermometers (silica, Na-K, Na-K-Ca) need a
//      liquid sample; a vapour-dominated/dry-steam field discharges fumarole GAS,
//      so GAS geothermometry is the dry-steam tool — liquid examples are the
//      general/liquid case, route Darajat to gas geothermometry.
//   B. Scaling chemistry (calcite vs silica) — open Acuna I6 flag lives here.
//   C. Authors: Truesdell d.2014, Barton (PAUL B. Jr., not Philip) d.2021 →
//      accomplishment tense; Henley (Richard) living. DOI unverified.
//   D. Geothermometer CONSTANTS (silica conductive 1309/5.19 vs steam-loss
//      1522/5.75; Giggenbach Na-K 1390/1.75; Na-K-Ca β-switch) — verify vs the
//      volume / standard references before publishing.
//   E. Seed cards deferred until Az signs off.
// ─────────────────────────────────────────────────────────────────────────

export const CONTENT = {
  itemId: 'henley-truesdell-barton-1984',
  estimatedReadMinutes: 34,

  author: {
    fullName: { en: `R. W. Henley, A. H. Truesdell & P. B. Barton Jr.`, id: `R. W. Henley, A. H. Truesdell & P. B. Barton Jr.` },
    affiliation: {
      en: `Society of Economic Geologists, Reviews in Economic Geology Vol. 1 — Henley (NZ DSIR → Australian National University), Truesdell & Barton (U.S. Geological Survey)`,
      id: `Society of Economic Geologists, Reviews in Economic Geology Vol. 1 — Henley (NZ DSIR → Australian National University), Truesdell & Barton (U.S. Geological Survey)`
    },
    tagline: {
      en: `The monograph that systematized geothermometry — reading a deep reservoir's temperature from the chemistry of the water that comes out of it.`,
      id: `Monograf yang nge-sistematisin geothermometry — membaca temperature reservoir dalam dari kimia air yang keluar darinya.`
    },
    bio: {
      en: `Three authorities on hydrothermal geochemistry wrote this volume. Richard W. Henley is a geochemist who began in New Zealand's DSIR working the active geothermal systems of the Taupo Volcanic Zone (Waiotapu, Broadlands-Ohaaki) and later became an Honorary Professor at the Australian National University; he built the conceptual bridge from active geothermal fields to fossil epithermal ore deposits. Alfred H. Truesdell (1933–2014) was a U.S. Geological Survey geochemist and, with R. O. Fournier, the co-developer of the chemical solute geothermometers — silica, Na-K, and Na-K-Ca — that remain the standard tools for estimating subsurface reservoir temperature; he worked Yellowstone, Cerro Prieto and Larderello and received the GRC Pioneer Award in 2002. Paul B. Barton Jr. (deceased 2021) was a USGS economic geologist and an authority on sulfide phase equilibria and ore genesis, who brought the mineral-stability and ore-deposit side to the volume (J. A. Whitney contributed the magmatic/igneous material). Published as Volume 1 of the Society of Economic Geologists' Reviews in Economic Geology series, it is a teaching reference that bridges geothermal exploration geochemistry and the genesis of hydrothermal ore deposits.`,
      id: `Tiga otoritas geokimia hidrotermal nulis volume ini. Richard W. Henley adalah geochemist yang mulai di DSIR Selandia Baru ngerjain sistem geothermal aktif Taupo Volcanic Zone (Waiotapu, Broadlands-Ohaaki) dan kemudian jadi Honorary Professor di Australian National University; dia bangun jembatan konseptual dari field geothermal aktif ke fossil epithermal ore deposit. Alfred H. Truesdell (1933–2014) adalah geochemist U.S. Geological Survey dan, bersama R. O. Fournier, co-developer chemical solute geothermometer — silica, Na-K, dan Na-K-Ca — yang tetap jadi alat standar buat estimasi temperature reservoir bawah-permukaan; dia ngerjain Yellowstone, Cerro Prieto dan Larderello dan dapet GRC Pioneer Award tahun 2002. Paul B. Barton Jr. (wafat 2021) adalah economic geologist USGS dan otoritas sulfide phase equilibria dan ore genesis, yang bawa sisi mineral-stability dan ore-deposit ke volume (J. A. Whitney nyumbang material magmatic/igneous). Diterbitkan sebagai Volume 1 dari seri Reviews in Economic Geology Society of Economic Geologists, dia salah satu referensi pengajaran yang njembatanin geokimia eksplorasi geothermal dan genesis hydrothermal ore deposit.`
    },
    focus: {
      en: `Fluid-mineral equilibria in hydrothermal systems and, at its practical heart, GEOTHERMOMETRY: inferring the deep reservoir temperature from the chemistry of a sampled spring or well fluid. Solute geothermometers (silica/quartz, Na-K, Na-K-Ca, Mg-corrected), gas geothermometers, aqueous speciation and pH, mineral-saturation indices, and the corrections for boiling/flashing and mixing that make the readings trustworthy.`,
      id: `Fluid-mineral equilibria di sistem hidrotermal dan, di inti praktisnya, GEOTHERMOMETRY: nyimpulin temperature reservoir dalam dari kimia spring atau well fluid yang disampel. Solute geothermometer (silica/quartz, Na-K, Na-K-Ca, Mg-corrected), gas geothermometer, aqueous speciation dan pH, mineral-saturation index, dan koreksi buat boiling/flashing dan mixing yang ngebikin pembacaannya bisa dipercaya.`
    },
    intellectualLineage: {
      en: `Two major geochemical lineages meet here: the New Zealand geothermal-chemistry school (the A. J. Ellis / W. A. J. Mahon Taupo Volcanic Zone tradition) that Henley comes from, and the U.S. Geological Survey aqueous-geochemistry programme where Truesdell and Fournier built the solute geothermometers and Barton developed ore-mineral phase equilibria. The volume fused active-geothermal-system geochemistry with economic-geology ore genesis, and is a direct ancestor of the modern geothermal-geochemistry handbooks.`,
      id: `Dua lineage geokimia besar ketemu di sini: sekolah geothermal-chemistry Selandia Baru (tradisi A. J. Ellis / W. A. J. Mahon Taupo Volcanic Zone) tempat Henley berasal, dan program aqueous-geochemistry U.S. Geological Survey tempat Truesdell dan Fournier bangun solute geothermometer dan Barton ngembangin ore-mineral phase equilibria. Volume ngegabungin geokimia sistem-geothermal-aktif sama economic-geology ore genesis, dan jadi salah satu nenek-moyang langsung handbook geothermal-geochemistry modern.`
    },
    keyCollaborators: {
      en: `**R. O. Fournier** (USGS) — Truesdell's co-developer of the solute geothermometers (the Fournier-Truesdell Na-K-Ca, 1973), the work this volume systematizes. **J. A. Whitney** — contributing author for the magmatic/igneous-fluid material. **Jeffrey Hedenquist** — Henley's collaborator extending geothermal-fluid chemistry into epithermal ore deposits. The broader **Society of Economic Geologists** community for whom the Reviews in Economic Geology series is written.`,
      id: `**R. O. Fournier** (USGS) — co-developer Truesdell buat solute geothermometer (Fournier-Truesdell Na-K-Ca, 1973), kerja yang volume ini sistematisin. **J. A. Whitney** — contributing author buat material magmatic/igneous-fluid. **Jeffrey Hedenquist** — kolaborator Henley yang ngembangin geothermal-fluid chemistry ke epithermal ore deposit. Komunitas **Society of Economic Geologists** yang lebih luas yang seri Reviews in Economic Geology ditulis untuk.`
    },
    legacy: {
      en: `This volume systematized geothermometry for geothermal exploration and tied it to ore-deposit genesis, and the tools it codified — the silica, Na-K and Na-K-Ca geothermometers, the Giggenbach-style maturity screening, the boiling and mixing corrections — remain everyday practice in geothermal geochemistry. Its lasting idea is that a sampled fluid carries a readable record of the conditions it last equilibrated at: temperature from the solute and gas geothermometers, origin and mixing history from the chemistry and (in the modern extensions) the isotopes. It is the geochemistry root behind the conceptual-model temperature anchors used in exploration and behind the modern sampling-and-interpretation handbooks.`,
      id: `Volume ini nge-sistematisin geothermometry buat eksplorasi geothermal dan ngiketnya ke ore-deposit genesis, dan alat yang dia kodifikasi — silica, Na-K dan Na-K-Ca geothermometer, screening maturity ala-Giggenbach, koreksi boiling dan mixing — tetap jadi praktek sehari-hari di geokimia geothermal. Ide yang bertahan-nya bahwa fluid yang disampel bawa record yang bisa dibaca tentang kondisi terakhir dia ber-ekuilibrium: temperature dari solute dan gas geothermometer, origin dan mixing history dari kimia dan (di ekstensi modern) isotop. Dia geochemistry root di balik temperature anchor conceptual-model yang dipake di eksplorasi dan di balik handbook sampling-and-interpretation modern.`
    },
    keyWorks: [
      { year: 1984, title: `Fluid-Mineral Equilibria in Hydrothermal Systems (this item)`, venue: `Reviews in Economic Geology, Vol. 1, Society of Economic Geologists` },
      { year: 1973, title: `An empirical Na-K-Ca geothermometer for natural waters (Fournier & Truesdell)`, venue: `Geochimica et Cosmochimica Acta 37(5), 1255-1275` },
      { year: 1983, title: `Geothermal systems ancient and modern: a geochemical review (Henley & Ellis)`, venue: `Earth-Science Reviews 19(1), 1-50` },
      { year: 1985, title: `Hydrothermal eruptions in the Waiotapu geothermal system, NZ (Hedenquist & Henley)`, venue: `Economic Geology 80, 1640-1668` },
    ],
  },

  sections: [
    // ─────────────── 1. motivation ───────────────
    {
      id: 'motivation',
      heading: { en: 'Why this matters', id: 'Kenapa ini penting' },
      body: {
        en: `You cannot lower a thermometer two kilometres into an unexplored geothermal reservoir, but you can sample what comes out of it — a hot spring, a fumarole, a well discharge — and read the deep temperature from its chemistry. That inference, **geothermometry**, is how exploration estimates reservoir temperature before (and between) expensive wells, and Henley, Truesdell and Barton's 1984 volume is the monograph that systematized it and tied it to the broader interpretation of hydrothermal fluids.

The idea rests on a physical bargain: at depth the fluid equilibrates with the reservoir minerals at the reservoir temperature, and certain of those equilibria are **"frozen in"** — they re-equilibrate so slowly that the fluid still carries the deep signature when it reaches the surface. Measure the right dissolved species and you can invert the temperature. The volume lays out the two families that do this — **silica solubility** (quartz/chalcedony) and **cation-exchange ratios** (Na-K, Na-K-Ca) — plus gas geothermometers, the calculation of pH and mineral saturation, and, crucially, the **corrections** for the things that change a fluid's chemistry on the way up: boiling (steam loss concentrates the solutes) and mixing with shallow water.

For the catalog owner's setting the most important caveat is upfront: the classic solute geothermometers need a **liquid** sample equilibrated with the rock. A **vapour-dominated / dry-steam field discharges mainly fumarole gas**, not a representative deep liquid — so the dry-steam-relevant tool is **gas geothermometry** (CO₂/H₂S/H₂/CH₄ ratios), and the liquid cation geothermometers apply to outflow springs rather than the deep steam reservoir. **⟦TODO-Az: confirm Darajat's actual geothermometry practice — which gas geothermometers, and how the fluid/gas chemistry is interpreted for a vapour-dominated reservoir. Prep §9-A.⟧**`,
        id: `Kamu gak bisa nurunin termometer dua kilometer ke reservoir geothermal yang belum dieksplorasi, tapi kamu bisa nyampel apa yang keluar darinya — hot spring, fumarol, well discharge — dan baca temperature dalam dari kimianya. Inferensi itu, **geothermometry**, gimana eksplorasi nge-estimasi temperature reservoir sebelum (dan di antara) sumur mahal, dan volume 1984 Henley, Truesdell dan Barton itu monograf yang nge-sistematisin-nya dan ngiketnya ke interpretasi hydrothermal fluid yang lebih luas.

Idenya bersandar di tawar-menawar fisik: di kedalaman fluid ber-ekuilibrium sama mineral reservoir di temperature reservoir, dan beberapa equilibria itu **"frozen in"** — mereka re-equilibrate begitu lambat sampai fluid masih bawa signature dalam pas nyampe permukaan. Ukur dissolved species yang benar dan kamu bisa invert temperature-nya. Volume ngejabarin dua family yang ngelakuin ini — **silica solubility** (quartz/chalcedony) dan **cation-exchange ratio** (Na-K, Na-K-Ca) — plus gas geothermometer, perhitungan pH dan mineral saturation, dan, penting, **koreksi** buat hal-hal yang ngubah kimia fluid di perjalanan naik: boiling (steam loss nge-konsentrasiin solute) dan mixing sama air dangkal.

Buat setting owner katalog caveat paling penting di depan: solute geothermometer klasik butuh sampel **liquid** yang ber-ekuilibrium sama rock. Field **vapour-dominated / dry-steam discharge terutama fumarole gas**, bukan deep liquid yang representatif — jadi alat dry-steam-relevant itu **gas geothermometry** (rasio CO₂/H₂S/H₂/CH₄), dan liquid cation geothermometer berlaku buat outflow spring bukan deep steam reservoir. **⟦TODO-Az: konfirmasi praktek geothermometry Darajat yang sebenarnya — gas geothermometer mana, dan gimana fluid/gas chemistry diinterpretasi buat reservoir vapour-dominated. Prep §9-A.⟧**`
      }
    },

    // ─────────────── 2. intuition ───────────────
    {
      id: 'intuition',
      heading: { en: 'Intuition', id: 'Intuisi' },
      body: {
        en: `A geothermometer works because a chemical equilibrium that depends on temperature gets locked at depth and survives the trip to the surface. Three ideas make the practice trustworthy.

**Fast vs slow — and why you use both.** Silica geothermometry tracks quartz solubility, which **re-equilibrates fast**, so it remembers the *shallowest* condition the water last passed through (and is sensitive to boiling and dilution). The Na-K geothermometer tracks alkali-feldspar exchange, which **re-equilibrates slowly**, so it remembers the *deepest, hottest* equilibration and is robust to dilution and boiling because it is a ratio (concentration changes cancel). Run both: if they agree, you have a consistent temperature; if they disagree, the gap itself is diagnostic — typically the slow Na-K records the deep reservoir while the fast silica has reset to a shallower mixing or boiling temperature.

**Maturity — is the water even usable?** Cation geothermometers assume the water reached full equilibrium with the rock. Immature waters (recently heated, or rock-poor) have not, and they give nonsense temperatures. The **Giggenbach Na-K-Mg ternary diagram** screens for this: waters plot as "fully equilibrated," "partially equilibrated/mixed," or "immature," and only the mature ones earn a trusted cation temperature.

**Correct for the trip up.** A fluid's chemistry changes between the reservoir and your sample bottle, and you must correct for it before inverting a temperature. The big one is **boiling**: as the water rises and flashes, steam leaves and the residual liquid's dissolved silica is concentrated — so a boiled sample read with the conductive ("no steam loss") silica equation reads too hot, and you must use the steam-loss equation instead. Mixing with cold shallow water dilutes the solutes; silica-enthalpy mixing models back out the hot end-member. These corrections are the difference between a number and a *reliable* number.

For a vapour-dominated field the whole liquid-geothermometer picture shifts to gas, because the deep liquid never reaches the surface as liquid — the fumaroles carry steam and gas. **⟦TODO-Az: frame the liquid geothermometers as the general/liquid case and route the dry-steam reservoir to gas geothermometry; confirm the Darajat practice. Prep §9-A.⟧**`,
        id: `Geothermometer jalan karena chemical equilibrium yang tergantung temperature ke-lock di kedalaman dan selamat perjalanan ke permukaan. Tiga ide ngebikin prakteknya bisa dipercaya.

**Cepat vs lambat — dan kenapa kamu pake keduanya.** Silica geothermometry nge-track quartz solubility, yang **re-equilibrate cepat**, jadi dia inget kondisi *paling dangkal* yang air terakhir lewatin (dan sensitif ke boiling dan dilution). Na-K geothermometer nge-track alkali-feldspar exchange, yang **re-equilibrate lambat**, jadi dia inget ekuilibrium *terdalam, terpanas* dan robust ke dilution dan boiling karena dia rasio (perubahan konsentrasi cancel). Jalanin keduanya: kalau setuju, kamu punya temperature konsisten; kalau gak setuju, gap-nya sendiri diagnostik — biasanya Na-K yang lambat nge-record deep reservoir sementara silica yang cepat udah reset ke temperature mixing atau boiling lebih dangkal.

**Maturity — apakah air-nya bahkan usable?** Cation geothermometer mengasumsikan air nyampe full equilibrium sama rock. Immature water (baru dipanasin, atau rock-poor) belum, dan mereka ngasih temperature ngaco. **Giggenbach Na-K-Mg ternary diagram** nge-screen ini: air plot sebagai "fully equilibrated," "partially equilibrated/mixed," atau "immature," dan cuma yang mature yang dapet cation temperature yang dipercaya.

**Koreksi buat perjalanan naik.** Kimia fluid berubah antara reservoir dan botol sampel kamu, dan kamu harus koreksi sebelum invert temperature. Yang besar itu **boiling**: pas air naik dan flash, steam pergi dan dissolved silica residual liquid ter-konsentrasi — jadi sampel yang ke-boil dibaca pake silica equation conductive ("no steam loss") kebaca kepanasan, dan kamu harus pake steam-loss equation. Mixing sama air dangkal dingin nge-dilute solute; silica-enthalpy mixing model nge-back-out hot end-member. Koreksi ini bedanya antara angka dan angka yang *reliable*.

Buat field vapour-dominated seluruh gambaran liquid-geothermometer geser ke gas, karena deep liquid gak pernah nyampe permukaan sebagai liquid — fumarol bawa steam dan gas. **⟦TODO-Az: frame liquid geothermometer sebagai kasus general/liquid dan route deep steam reservoir ke gas geothermometry; konfirmasi praktek Darajat. Prep §9-A.⟧**`
      }
    },

    // ─────────────── 3. formalization ───────────────
    {
      id: 'formalization',
      heading: { en: 'The geothermometer equations', id: 'Persamaan geothermometer' },
      body: {
        en: `Every solute geothermometer is an empirical inversion of a temperature-dependent equilibrium constant $K(T) = a_{products}/a_{reactants}$ into a temperature from measured concentrations.

**Silica (quartz).** From quartz solubility; the conductive ("no steam loss") form, with SiO₂ in mg/kg, valid ~25–250 °C:

$$T(^{\\circ}\\mathrm{C}) = \\frac{1309}{5.19 - \\log_{10}[\\mathrm{SiO_2}]} - 273.15$$

If the water boiled, steam separation concentrates the residual silica, so the **maximum-steam-loss** (adiabatic, single-step to 100 °C) form must be used instead:

$$T(^{\\circ}\\mathrm{C}) = \\frac{1522}{5.75 - \\log_{10}[\\mathrm{SiO_2}]} - 273.15$$

(a chalcedony form, $1032/(4.69 - \\log_{10}[\\mathrm{SiO_2}]) - 273.15$, controls at lower temperatures). Silica re-equilibrates fast → sensitive to shallow processes.

**Na-K.** From alkali-feldspar (albite ⇌ K-feldspar) exchange; a ratio, so robust to dilution/boiling; slow to re-equilibrate, so it records the deepest/hottest equilibration. The Giggenbach (1988) calibration:

$$T(^{\\circ}\\mathrm{C}) = \\frac{1390}{1.75 + \\log_{10}(\\mathrm{Na/K})} - 273.15$$

(Fournier 1979 and Truesdell 1976 give alternative constants). Best above ~180–200 °C; unreliable for cool, Ca-rich, or immature waters.

**Na-K-Ca (Fournier & Truesdell 1973).** Adds a Ca term for cooler, Ca-rich waters where plain Na-K fails:

$$T(\\mathrm{K}) = \\frac{1647}{\\log_{10}(\\mathrm{Na/K}) + \\beta\\,[\\log_{10}(\\sqrt{\\mathrm{Ca}}/\\mathrm{Na}) + 2.06] + 2.47}$$

(molality; subtract 273.15 for °C), with $\\beta = 4/3$ when the first pass gives $T < 100\\,^{\\circ}$C and $\\beta = 1/3$ above; a Mg correction is applied afterward for Mg-rich waters.

**Gas geothermometers** use reactive gas ratios (CO₂, H₂S, H₂, CH₄) and are the route when the discharge is steam/gas rather than liquid — the vapour-dominated case. **⟦TODO-Az: verify these constants against the volume / standard references; the conductive-vs-steam-loss choice depends on whether the sampled water boiled. Prep §9-D.⟧**`,
        id: `Tiap solute geothermometer itu inversi empiris dari temperature-dependent equilibrium constant $K(T) = a_{products}/a_{reactants}$ jadi temperature dari konsentrasi terukur.

**Silica (quartz).** Dari quartz solubility; bentuk conductive ("no steam loss"), dengan SiO₂ dalam mg/kg, valid ~25–250 °C:

$$T(^{\\circ}\\mathrm{C}) = \\frac{1309}{5.19 - \\log_{10}[\\mathrm{SiO_2}]} - 273.15$$

Kalau air ke-boil, steam separation nge-konsentrasiin residual silica, jadi bentuk **maximum-steam-loss** (adiabatic, single-step ke 100 °C) harus dipake:

$$T(^{\\circ}\\mathrm{C}) = \\frac{1522}{5.75 - \\log_{10}[\\mathrm{SiO_2}]} - 273.15$$

(bentuk chalcedony, $1032/(4.69 - \\log_{10}[\\mathrm{SiO_2}]) - 273.15$, ngontrol di temperature lebih rendah). Silica re-equilibrate cepat → sensitif ke proses dangkal.

**Na-K.** Dari alkali-feldspar (albite ⇌ K-feldspar) exchange; rasio, jadi robust ke dilution/boiling; lambat re-equilibrate, jadi dia nge-record ekuilibrium terdalam/terpanas. Kalibrasi Giggenbach (1988):

$$T(^{\\circ}\\mathrm{C}) = \\frac{1390}{1.75 + \\log_{10}(\\mathrm{Na/K})} - 273.15$$

(Fournier 1979 dan Truesdell 1976 ngasih konstanta alternatif). Terbaik di atas ~180–200 °C; gak reliable buat air cool, Ca-rich, atau immature.

**Na-K-Ca (Fournier & Truesdell 1973).** Nambah term Ca buat air cooler, Ca-rich tempat Na-K biasa gagal:

$$T(\\mathrm{K}) = \\frac{1647}{\\log_{10}(\\mathrm{Na/K}) + \\beta\\,[\\log_{10}(\\sqrt{\\mathrm{Ca}}/\\mathrm{Na}) + 2.06] + 2.47}$$

(molality; kurangi 273.15 buat °C), dengan $\\beta = 4/3$ pas first pass ngasih $T < 100\\,^{\\circ}$C dan $\\beta = 1/3$ di atasnya; Mg correction diterapin setelahnya buat air Mg-rich.

**Gas geothermometer** pake rasio gas reaktif (CO₂, H₂S, H₂, CH₄) dan itu route pas discharge-nya steam/gas bukan liquid — kasus vapour-dominated. **⟦TODO-Az: verifikasi konstanta ini lawan volume / standard references; pilihan conductive-vs-steam-loss tergantung apakah air yang disampel ke-boil. Prep §9-D.⟧**`
      }
    },

    // ─────────────── 4. worked-example ───────────────
    {
      id: 'worked-example',
      heading: { en: 'Worked example', id: 'Contoh kerjaan' },
      body: {
        en: `**Example 1 — the silica geothermometer.** A neutral-chloride hot spring (un-boiled) carries dissolved silica SiO₂ = 250 mg/kg. Using the conductive quartz equation:

$$T = \\frac{1309}{5.19 - \\log_{10}(250)} - 273.15 = \\frac{1309}{5.19 - 2.398} - 273.15 = \\frac{1309}{2.792} - 273.15 \\approx 196\\,^{\\circ}\\mathrm{C}$$

So the quartz geothermometer puts the reservoir near ~196 °C. *If the spring had visibly boiled*, you would instead use the steam-loss form ($1522/(5.75 - \\log_{10}[\\mathrm{SiO_2}])-273.15$), which returns a lower temperature for the same silica — the conductive equation over-reads a boiled sample because boiling concentrated the silica.

**Example 2 — the Na-K geothermometer, and the cross-check.** The same water has Na/K = 10 (by mass). Using Giggenbach Na-K:

$$T = \\frac{1390}{1.75 + \\log_{10}(10)} - 273.15 = \\frac{1390}{1.75 + 1} - 273.15 = \\frac{1390}{2.75} - 273.15 \\approx 232\\,^{\\circ}\\mathrm{C}$$

Now the diagnostic: silica reads ~196 °C and Na-K ~232 °C — they disagree by ~36 °C. Because Na-K re-equilibrates slowly (deep memory) and silica fast (shallow memory), the most natural reading is that the **deep reservoir is near the Na-K value (~232 °C)** while the silica has partly re-equilibrated to a cooler, shallower condition (mixing or conductive cooling on ascent). The gap is information, not error — but only if the water is "mature" on the Giggenbach Na-K-Mg screen; an immature water would make the Na-K number meaningless. **⟦TODO-Az: these are illustrative liquid-spring numbers; for a dry-steam field the deep reservoir temperature comes from GAS geothermometry, not these liquid cation/silica tools. Confirm the constants and the Darajat practice. Prep §9-A, §9-D.⟧**`,
        id: `**Contoh 1 — silica geothermometer.** Hot spring neutral-chloride (gak ke-boil) bawa dissolved silica SiO₂ = 250 mg/kg. Pake conductive quartz equation:

$$T = \\frac{1309}{5.19 - \\log_{10}(250)} - 273.15 = \\frac{1309}{5.19 - 2.398} - 273.15 = \\frac{1309}{2.792} - 273.15 \\approx 196\\,^{\\circ}\\mathrm{C}$$

Jadi quartz geothermometer naruh reservoir deket ~196 °C. *Kalau spring-nya keliatan ke-boil*, kamu malah pake bentuk steam-loss ($1522/(5.75 - \\log_{10}[\\mathrm{SiO_2}])-273.15$), yang balikin temperature lebih rendah buat silica yang sama — conductive equation over-read sampel yang ke-boil karena boiling nge-konsentrasiin silica.

**Contoh 2 — Na-K geothermometer, dan cross-check.** Air yang sama punya Na/K = 10 (by mass). Pake Giggenbach Na-K:

$$T = \\frac{1390}{1.75 + \\log_{10}(10)} - 273.15 = \\frac{1390}{1.75 + 1} - 273.15 = \\frac{1390}{2.75} - 273.15 \\approx 232\\,^{\\circ}\\mathrm{C}$$

Sekarang diagnostik-nya: silica baca ~196 °C dan Na-K ~232 °C — mereka beda ~36 °C. Karena Na-K re-equilibrate lambat (deep memory) dan silica cepat (shallow memory), bacaan paling natural bahwa **deep reservoir deket nilai Na-K (~232 °C)** sementara silica udah sebagian re-equilibrate ke kondisi lebih dingin, lebih dangkal (mixing atau conductive cooling pas naik). Gap-nya informasi, bukan error — tapi cuma kalau air-nya "mature" di screen Giggenbach Na-K-Mg; air immature bakal bikin angka Na-K gak berarti. **⟦TODO-Az: ini angka liquid-spring ilustratif; buat field dry-steam temperature deep reservoir datang dari GAS geothermometry, bukan liquid cation/silica tool ini. Konfirmasi konstanta dan praktek Darajat. Prep §9-A, §9-D.⟧**`
      }
    },

    // ─────────────── 5. applications ───────────────
    {
      id: 'applications',
      heading: { en: 'Applications by audience', id: 'Aplikasi per audience' },
      body: {
        en: `### For the advanced researcher / geochemist

The frontier beyond single-equilibrium geothermometers is **multicomponent equilibrium** modelling — solving the full aqueous speciation and mineral-saturation state of a fluid (the lineage that runs from this volume to modern codes), and combining solute and gas geothermometers with **stable isotopes** (δD/δ¹⁸O for recharge origin and water-rock exchange; the modern handbooks deepen this). The volume's reach into ore genesis — reading fossil hydrothermal systems as ancient geothermal fields — is the other research thread.

### For the exploration geochemist

This is the operational core: sample springs/fumaroles, run the solute and gas geothermometers, screen maturity on the Giggenbach diagram, correct for boiling and mixing, and report an estimated reservoir temperature that feeds the conceptual model. The geothermometer temperatures are exactly what **anchor the predicted isotherms** in the conceptual-model item — the fixed points the cross-section must honour. **⟦TODO-Az: for Darajat (vapour-dominated), the field-relevant tools are gas geothermometers on fumaroles; the liquid cation geothermometers apply to outflow springs, not the deep steam reservoir. Confirm the practice. Prep §9-A.⟧**

### For the operations / production chemist

The same fluid-mineral equilibria that give a temperature also predict **scaling and corrosion**: which minerals are saturated and will deposit as pressure and temperature drop along the production path. Tracking produced-fluid chemistry over time flags scaling onset, fluid-source changes, and (with tracers/isotopes) injection breakthrough. **⟦TODO-Az: the calcite-vs-silica scaling question for Darajat — what actually deposits, and where (tubulars vs feedzone vs surface lines) — lives here and is the open Acuña I6 flag; confirm. Prep §9-B.⟧**`,
        id: `### Untuk advanced researcher / geochemist

Frontier di luar single-equilibrium geothermometer itu **multicomponent equilibrium** modelling — nge-solve full aqueous speciation dan mineral-saturation state sebuah fluid (lineage yang jalan dari volume ini ke kode modern), dan ngegabungin solute dan gas geothermometer sama **stable isotope** (δD/δ¹⁸O buat recharge origin dan water-rock exchange; handbook modern perdalam ini). Jangkauan volume ke ore genesis — membaca fossil hydrothermal system sebagai field geothermal kuno — itu thread riset lainnya.

### Untuk exploration geochemist

Ini core operasional: sampel spring/fumarol, jalanin solute dan gas geothermometer, screen maturity di Giggenbach diagram, koreksi buat boiling dan mixing, dan report estimated reservoir temperature yang nge-feed conceptual model. Temperature geothermometer itu persis yang **nge-anchor predicted isoterm** di item conceptual-model — fixed point yang cross-section harus honour. **⟦TODO-Az: buat Darajat (vapour-dominated), tool yang field-relevant itu gas geothermometer di fumarol; liquid cation geothermometer berlaku buat outflow spring, bukan deep steam reservoir. Konfirmasi prakteknya. Prep §9-A.⟧**

### Untuk operations / production chemist

Fluid-mineral equilibria yang sama yang ngasih temperature juga memprediksi **scaling dan corrosion**: mineral mana yang saturated dan bakal deposit pas pressure dan temperature turun sepanjang production path. Nge-track produced-fluid chemistry over time nge-flag scaling onset, perubahan fluid-source, dan (sama tracer/isotop) injection breakthrough. **⟦TODO-Az: pertanyaan calcite-vs-silica scaling buat Darajat — apa yang sebenarnya deposit, dan di mana (tubulars vs feedzone vs surface lines) — hidup di sini dan itu open Acuña I6 flag; konfirmasi. Prep §9-B.⟧**`
      }
    },

    // ─────────────── 6. practice ───────────────
    {
      id: 'practice',
      heading: { en: 'Practice', id: 'Latihan' },
      body: {
        en: `**1.** An un-boiled spring has SiO₂ = 400 mg/kg. Estimate the reservoir temperature with the conductive quartz geothermometer, $T = 1309/(5.19 - \\log_{10}[\\mathrm{SiO_2}]) - 273.15$.

<details><summary>Answer</summary>
$\\log_{10}(400) = 2.602$; $5.19 - 2.602 = 2.588$; $1309/2.588 = 505.8$ K; $505.8 - 273.15 \\approx 233\\,^{\\circ}$C. Higher silica → higher inferred temperature (more silica dissolves at higher T), so ~233 °C versus ~196 °C for the 250 mg/kg case. (Assumes equilibrium with quartz, no steam loss, no shallow silica precipitation.)
</details>

**2.** A water gives Na/K = 20. Estimate the temperature with Giggenbach Na-K, and explain why this geothermometer is more robust to boiling and dilution than the silica one.

<details><summary>Answer</summary>
$\\log_{10}(20) = 1.301$; $1.75 + 1.301 = 3.051$; $1390/3.051 = 455.6$ K; $455.6 - 273.15 \\approx 182\\,^{\\circ}$C. It is robust to boiling and dilution because it depends on the *ratio* Na/K: boiling (steam loss) and mixing with dilute water change Na and K by nearly the same factor, so the ratio — and hence the temperature — is largely preserved, whereas the silica geothermometer depends on the absolute SiO₂ concentration, which boiling concentrates and dilution lowers. Na-K also re-equilibrates slowly, so it retains the deep signature.
</details>

**3.** Two samples from the same spring give the same silica concentration, but one has visibly boiled at the surface and one has not. Should you read them with the same equation? What happens if you do?

<details><summary>Answer</summary>
No. The un-boiled sample is read with the conductive ("no steam loss") quartz equation; the boiled sample must be read with the maximum-steam-loss equation ($1522/(5.75 - \\log_{10}[\\mathrm{SiO_2}]) - 273.15$). If you (wrongly) use the conductive equation on the boiled sample, you over-read the temperature: boiling removed steam and concentrated the residual silica, so the same measured SiO₂ corresponds to a *lower* true reservoir temperature than the conductive equation implies. Using the right equation for the sample's history is exactly the kind of boiling correction the volume insists on; the two equations encode the two different paths the silica took to reach the bottle.
</details>

**4.** For one water the silica geothermometer reads 180 °C and Na-K reads 250 °C; for another they agree at ~240 °C. What does each case tell you, and what must you check before trusting the Na-K number?

<details><summary>Answer</summary>
Agreement (~240 °C) is the reassuring case: two independent geothermometers with different kinetics converge, so a single well-equilibrated deep temperature near 240 °C is credible. Disagreement (silica 180, Na-K 250) is itself informative: because Na-K re-equilibrates slowly (remembers the deepest, hottest equilibration) and silica fast (resets to the shallowest condition), the most natural reading is that the deep reservoir is near the Na-K value (~250 °C) and the water then cooled/mixed/re-equilibrated its silica down to ~180 °C on the way up. But before trusting the Na-K number you must check **maturity** on the Giggenbach Na-K-Mg diagram: if the water is "immature" (not fully equilibrated with the rock), the Na-K temperature is meaningless and the disagreement reflects disequilibrium rather than a deep-vs-shallow story. Mature → trust the deep Na-K reading; immature → reject it.
</details>`,
        id: `**1.** Spring yang gak ke-boil punya SiO₂ = 400 mg/kg. Estimasi temperature reservoir pake conductive quartz geothermometer, $T = 1309/(5.19 - \\log_{10}[\\mathrm{SiO_2}]) - 273.15$.

<details><summary>Jawaban</summary>
$\\log_{10}(400) = 2.602$; $5.19 - 2.602 = 2.588$; $1309/2.588 = 505.8$ K; $505.8 - 273.15 \\approx 233\\,^{\\circ}$C. Silica lebih tinggi → temperature yang disimpulkan lebih tinggi (lebih banyak silica larut di T lebih tinggi), jadi ~233 °C versus ~196 °C buat kasus 250 mg/kg. (Mengasumsikan ekuilibrium sama quartz, no steam loss, no shallow silica precipitation.)
</details>

**2.** Air ngasih Na/K = 20. Estimasi temperature pake Giggenbach Na-K, dan jelasin kenapa geothermometer ini lebih robust ke boiling dan dilution daripada yang silica.

<details><summary>Jawaban</summary>
$\\log_{10}(20) = 1.301$; $1.75 + 1.301 = 3.051$; $1390/3.051 = 455.6$ K; $455.6 - 273.15 \\approx 182\\,^{\\circ}$C. Dia robust ke boiling dan dilution karena tergantung *rasio* Na/K: boiling (steam loss) dan mixing sama air dilute ngubah Na dan K dengan faktor hampir sama, jadi rasio — dan karena itu temperature — sebagian besar terjaga, sementara silica geothermometer tergantung konsentrasi SiO₂ absolut, yang boiling konsentrasiin dan dilution turunin. Na-K juga re-equilibrate lambat, jadi dia nahan deep signature.
</details>

**3.** Dua sampel dari spring yang sama ngasih konsentrasi silica yang sama, tapi satu keliatan ke-boil di permukaan dan satu enggak. Haruskah kamu baca mereka pake equation yang sama? Apa yang terjadi kalau iya?

<details><summary>Jawaban</summary>
Enggak. Sampel yang gak ke-boil dibaca pake conductive ("no steam loss") quartz equation; sampel yang ke-boil harus dibaca pake maximum-steam-loss equation ($1522/(5.75 - \\log_{10}[\\mathrm{SiO_2}]) - 273.15$). Kalau kamu (salah) pake conductive equation di sampel yang ke-boil, kamu over-read temperature: boiling ngilangin steam dan konsentrasiin residual silica, jadi SiO₂ terukur yang sama berkorespondensi ke temperature reservoir sebenarnya yang *lebih rendah* dari yang conductive equation implikasikan. Pake equation yang benar buat history sampel itu persis jenis koreksi boiling yang volume bersikeras; dua equation nge-encode dua path berbeda yang silica tempuh buat nyampe botol.
</details>

**4.** Buat satu air silica geothermometer baca 180 °C dan Na-K baca 250 °C; buat satunya mereka setuju di ~240 °C. Apa yang tiap kasus kasih tau kamu, dan apa yang harus kamu cek sebelum mempercayai angka Na-K?

<details><summary>Jawaban</summary>
Kesepakatan (~240 °C) itu kasus yang menenangkan: dua geothermometer independen dengan kinetika berbeda konvergen, jadi single deep temperature yang well-equilibrated deket 240 °C kredibel. Ketidaksepakatan (silica 180, Na-K 250) itu sendiri informatif: karena Na-K re-equilibrate lambat (inget ekuilibrium terdalam, terpanas) dan silica cepat (reset ke kondisi paling dangkal), bacaan paling natural bahwa deep reservoir deket nilai Na-K (~250 °C) dan air lalu cooled/mixed/re-equilibrate silica-nya turun ke ~180 °C pas naik. Tapi sebelum mempercayai angka Na-K kamu harus cek **maturity** di Giggenbach Na-K-Mg diagram: kalau air-nya "immature" (gak fully equilibrated sama rock), temperature Na-K gak berarti dan ketidaksepakatannya mencerminkan disequilibrium daripada cerita deep-vs-shallow. Mature → percaya bacaan deep Na-K; immature → tolak.
</details>`
      }
    },

    // ─────────────── 7. connections ───────────────
    {
      id: 'connections',
      heading: { en: 'Connections', id: 'Koneksi' },
      body: {
        en: `This volume is the geothermal domain's **geochemistry root**.

- **Built on by**: [Arnórsson (ed.) 2000](item:arnorsson-2000) — the modern IAEA sampling-and-interpretation handbook that extends this geothermometry foundation with isotopes and updated calibrations. This volume is its **declared prerequisite**.
- **Anchors**: [Cumming 2009](item:cumming-2009) — geothermometer temperatures (silica, Na-K, gas) are exactly the fixed points that anchor the conceptual model's predicted isotherms; the geochemistry here is what Cumming's workflow consumes.
- **Scaling chemistry for**: [Acuña 2008](item:acuna-2008) and [Grant & Bixley 2011](item:grant-bixley-2011) — the fluid-mineral equilibria here underpin the calcite/silica scaling that degrades wells and wellbores (the open Acuña I6 calcite-vs-silica question). **⟦TODO-Az.⟧**
- **Survey-level on-ramp**: [Stober & Bucher 2021](item:stober-bucher-2021) — the textbook's geochemistry chapter is the gentle introduction; this volume is the depth.`,
        id: `Volume ini **geochemistry root** domain geothermal.

- **Dibangun di atasnya**: [Arnórsson (ed.) 2000](item:arnorsson-2000) — handbook sampling-and-interpretation IAEA modern yang nge-extend geothermometry foundation ini sama isotop dan kalibrasi updated. Volume ini **prerequisite yang dideklarasikan**-nya.
- **Nge-anchor**: [Cumming 2009](item:cumming-2009) — temperature geothermometer (silica, Na-K, gas) itu persis fixed point yang nge-anchor predicted isoterm conceptual model; geokimia di sini yang workflow Cumming konsumsi.
- **Scaling chemistry buat**: [Acuña 2008](item:acuna-2008) dan [Grant & Bixley 2011](item:grant-bixley-2011) — fluid-mineral equilibria di sini ngedasarin calcite/silica scaling yang nge-degrade sumur dan wellbore (open Acuña I6 calcite-vs-silica question). **⟦TODO-Az.⟧**
- **On-ramp survey-level**: [Stober & Bucher 2021](item:stober-bucher-2021) — chapter geokimia textbook itu introduksi yang lembut; volume ini kedalamannya.`
      }
    },

    // ─────────────── 8. sources ───────────────
    {
      id: 'sources',
      heading: { en: 'Sources', id: 'Sumber' },
      body: {
        en: `- **Henley, R. W., Truesdell, A. H., and Barton, P. B. Jr.** (1984). *Fluid-Mineral Equilibria in Hydrothermal Systems*. Reviews in Economic Geology, Vol. 1. Society of Economic Geologists. The systematization of geothermometry and hydrothermal fluid-mineral equilibria. **(This item.)**
- **Fournier, R. O., and Truesdell, A. H.** (1973). "An empirical Na-K-Ca geothermometer for natural waters." *Geochimica et Cosmochimica Acta*, 37(5), 1255-1275. The Na-K-Ca geothermometer this volume presents.
- **Henley, R. W., and Ellis, A. J.** (1983). "Geothermal systems ancient and modern: a geochemical review." *Earth-Science Reviews*, 19(1), 1-50. The companion geochemical review bridging active geothermal systems and ore deposits.`,
        id: `- **Henley, R. W., Truesdell, A. H., dan Barton, P. B. Jr.** (1984). *Fluid-Mineral Equilibria in Hydrothermal Systems*. Reviews in Economic Geology, Vol. 1. Society of Economic Geologists. Sistematisasi geothermometry dan hydrothermal fluid-mineral equilibria. **(Item ini.)**
- **Fournier, R. O., dan Truesdell, A. H.** (1973). "An empirical Na-K-Ca geothermometer for natural waters." *Geochimica et Cosmochimica Acta*, 37(5), 1255-1275. Na-K-Ca geothermometer yang volume ini sajiin.
- **Henley, R. W., dan Ellis, A. J.** (1983). "Geothermal systems ancient and modern: a geochemical review." *Earth-Science Reviews*, 19(1), 1-50. Review geokimia companion yang njembatanin sistem geothermal aktif dan ore deposit.`
      }
    },
  ],

  audio: { enabled: true },

  selfTest: [
    {
      sectionId: 'intuition',
      question: {
        en: 'Cation geothermometers (Na-K, Na-K-Ca) assume the water reached equilibrium with the reservoir rock. Why can an "immature" water give a meaningless temperature, and what does the Giggenbach Na-K-Mg diagram do about it?',
        id: 'Cation geothermometer (Na-K, Na-K-Ca) mengasumsikan air nyampe ekuilibrium sama reservoir rock. Kenapa air "immature" bisa ngasih temperature yang gak berarti, dan apa yang Giggenbach Na-K-Mg diagram lakuin tentang itu?'
      },
      prompt: { en: 'Before continuing, try answering:', id: 'Sebelum lanjut, coba jawab:' },
      answer: {
        en: 'A cation geothermometer inverts a mineral-solution equilibrium into a temperature — but only if that equilibrium was actually attained at depth. An "immature" water (recently heated, short residence time, or rock-poor) has not yet equilibrated with the reservoir minerals, so its Na/K (or Na-K-Ca) ratio does not encode a reservoir temperature at all; feeding it into the equation still returns a number, but the number is meaningless because the assumption behind the geothermometer is violated. The Giggenbach Na-K-Mg ternary diagram screens for exactly this: it plots a water by its Na, K and Mg content into one of three fields — "fully equilibrated" (on the equilibrium curve → a trustworthy cation temperature), "partially equilibrated / mixed" (some re-equilibration or dilution → interpret with caution), or "immature" (not equilibrated → reject the cation temperature). Only waters in the fully-equilibrated field earn a trusted Na-K temperature, so the diagram is the gate you pass a sample through before believing its cation geothermometer at all.',
        id: 'Cation geothermometer nginvert mineral-solution equilibrium jadi temperature — tapi cuma kalau ekuilibrium itu beneran tercapai di kedalaman. Air "immature" (baru dipanasin, residence time pendek, atau rock-poor) belum ber-ekuilibrium sama reservoir mineral, jadi rasio Na/K (atau Na-K-Ca)-nya gak nge-encode temperature reservoir sama sekali; masukin dia ke equation tetap balikin angka, tapi angka-nya gak berarti karena asumsi di balik geothermometer dilanggar. Giggenbach Na-K-Mg ternary diagram nge-screen persis ini: dia plot air by Na, K dan Mg-nya ke salah satu dari tiga field — "fully equilibrated" (di kurva ekuilibrium → cation temperature yang dipercaya), "partially equilibrated / mixed" (ada re-equilibration atau dilution → interpretasi hati-hati), atau "immature" (gak ber-ekuilibrium → tolak cation temperature). Cuma air di field fully-equilibrated yang dapet Na-K temperature yang dipercaya, jadi diagram itu gerbang yang kamu lewatin sampel sebelum mempercayai cation geothermometer-nya sama sekali.'
      }
    },
    {
      sectionId: 'formalization',
      question: {
        en: 'The silica geothermometer has two forms — a "conductive" one (1309/5.19) and a "maximum-steam-loss" one (1522/5.75). What physical process forces the choice, and what error do you make if you pick wrong for a boiled water?',
        id: 'Silica geothermometer punya dua bentuk — "conductive" (1309/5.19) dan "maximum-steam-loss" (1522/5.75). Proses fisik apa yang maksa pilihan-nya, dan error apa yang kamu bikin kalau salah pilih buat air yang ke-boil?'
      },
      prompt: { en: 'Before continuing, try answering:', id: 'Sebelum lanjut, coba jawab:' },
      answer: {
        en: 'The choice is forced by whether the water boiled (lost steam) on its way to the sample point. The conductive form assumes the water cooled without losing steam, so the dissolved silica concentration is the same as at depth (minus what re-equilibrated). The maximum-steam-loss form assumes the water flashed adiabatically to ~100 °C, which removes steam and thereby concentrates the silica in the residual liquid. If you use the conductive equation on a water that actually boiled, you over-read the reservoir temperature: boiling has already raised the measured SiO₂ above what the deep liquid carried, and the conductive equation interprets that elevated silica as a hotter reservoir than is real. The steam-loss equation corrects for the concentration, returning a lower (correct) temperature for the same measured SiO₂. So picking the wrong form on a boiled sample biases the reservoir temperature high — which is why establishing the sample\'s boiling history is part of geothermometry, not an afterthought.',
        id: 'Pilihannya dipaksa oleh apakah air-nya ke-boil (kehilangan steam) di perjalanan ke titik sampel. Bentuk conductive mengasumsikan air cooled tanpa kehilangan steam, jadi konsentrasi dissolved silica sama kayak di kedalaman (dikurang yang re-equilibrate). Bentuk maximum-steam-loss mengasumsikan air flash adiabatik ke ~100 °C, yang ngilangin steam dan dengan demikian konsentrasiin silica di residual liquid. Kalau kamu pake conductive equation di air yang sebenarnya ke-boil, kamu over-read temperature reservoir: boiling udah naikin SiO₂ terukur di atas yang deep liquid bawa, dan conductive equation nginterpretasi silica yang elevated itu sebagai reservoir lebih panas dari yang nyata. Steam-loss equation ngoreksi konsentrasinya, balikin temperature lebih rendah (benar) buat SiO₂ terukur yang sama. Jadi milih bentuk yang salah di sampel yang ke-boil nge-bias temperature reservoir tinggi — itu kenapa nentuin boiling history sampel itu bagian geothermometry, bukan afterthought.'
      }
    },
    {
      sectionId: 'applications',
      question: {
        en: 'The same fluid-mineral equilibria that let you read a reservoir temperature also predict something operationally critical for running a field. What is it, and why does it follow from the same chemistry?',
        id: 'Fluid-mineral equilibria yang sama yang ngebikin kamu bisa baca temperature reservoir juga memprediksi sesuatu yang kritis secara operasional buat menjalankan field. Apa itu, dan kenapa dia ngikutin dari kimia yang sama?'
      },
      prompt: { en: 'Before continuing, try answering:', id: 'Sebelum lanjut, coba jawab:' },
      answer: {
        en: 'Scaling (and corrosion). A geothermometer works because the fluid is at or near equilibrium with reservoir minerals at depth, and the saturation state of those minerals is computed from the same equilibrium chemistry. As the fluid is produced — pressure drops, it boils, it cools along the production path — that saturation state changes, and minerals that were dissolved become supersaturated and deposit: calcite (often near the flash/boiling point, where CO₂ degasses and raises pH), amorphous silica (as a cooling or steam-concentrated water passes saturation), and sulfates. So the mineral-saturation calculation that underpins geothermometry doubles as a scaling predictor — it tells you which minerals will deposit and roughly where along the well and surface path, which drives the choice of inhibitors, operating pressures, and cleanout scheduling; the same chemistry also flags corrosion drivers (chloride, dissolved CO₂/H₂S, low pH). Reading the temperature and predicting the scaling are two outputs of one fluid-mineral-equilibrium model. (For a dry-steam field, exactly which minerals deposit and where — the calcite-vs-silica question — is a field-specific item flagged for the owner.)',
        id: 'Scaling (dan corrosion). Geothermometer jalan karena fluid di atau dekat ekuilibrium sama reservoir mineral di kedalaman, dan saturation state mineral itu dihitung dari equilibrium chemistry yang sama. Pas fluid diproduksi — pressure turun, dia mendidih, dia cooling sepanjang production path — saturation state itu berubah, dan mineral yang tadinya larut jadi supersaturated dan deposit: calcite (sering deket flash/boiling point, di mana CO₂ degas dan naikin pH), amorphous silica (pas air yang cooling atau steam-concentrated lewat saturation), dan sulfat. Jadi perhitungan mineral-saturation yang ngedasarin geothermometry sekaligus jadi scaling predictor — dia ngasih tau mineral mana yang bakal deposit dan kira-kira di mana sepanjang well dan surface path, yang nge-drive pilihan inhibitor, operating pressure, dan cleanout scheduling; kimia yang sama juga nge-flag corrosion driver (chloride, dissolved CO₂/H₂S, low pH). Membaca temperature dan memprediksi scaling itu dua output dari satu fluid-mineral-equilibrium model. (Buat field dry-steam, persis mineral mana yang deposit dan di mana — pertanyaan calcite-vs-silica — itu item field-specific yang di-flag buat owner.)'
      }
    },
    {
      sectionId: 'motivation',
      question: {
        en: 'Why are the classic solute geothermometers (silica, Na-K) not the primary reservoir-temperature tool for a vapour-dominated (dry-steam) field, and what is used instead?',
        id: 'Kenapa solute geothermometer klasik (silica, Na-K) bukan tool temperature-reservoir primer buat field vapour-dominated (dry-steam), dan apa yang dipake sebagai gantinya?'
      },
      prompt: { en: 'Before continuing, try answering:', id: 'Sebelum lanjut, coba jawab:' },
      answer: {
        en: 'The silica and cation (Na-K, Na-K-Ca) geothermometers all require a liquid sample that equilibrated with the reservoir rock — they invert dissolved-solute concentrations in water. A vapour-dominated / dry-steam field, by definition, does not deliver a representative deep liquid to the surface: its discharge is mainly steam and gas (fumaroles), with the immobile liquid held in the rock at depth. There is no deep liquid sample to run a silica or Na-K temperature on (any liquid you sample is shallow outflow or condensate, not the deep reservoir). So the reservoir-temperature tool for a dry-steam field is gas geothermometry — temperature-dependent ratios of reactive gases (CO₂, H₂S, H₂, CH₄) carried by the steam — which reads the deep vapour-zone conditions that the liquid geothermometers cannot reach. The liquid cation/silica geothermometers still have a role, but applied to outflow springs around the field rather than to the deep steam reservoir itself.',
        id: 'Silica dan cation (Na-K, Na-K-Ca) geothermometer semua butuh sampel liquid yang ber-ekuilibrium sama reservoir rock — mereka invert konsentrasi dissolved-solute di air. Field vapour-dominated / dry-steam, by definition, gak deliver deep liquid yang representatif ke permukaan: discharge-nya terutama steam dan gas (fumarol), dengan immobile liquid ditahan di rock di kedalaman. Gak ada deep liquid sample buat jalanin silica atau Na-K temperature (liquid apapun yang kamu sampel itu shallow outflow atau condensate, bukan deep reservoir). Jadi tool temperature-reservoir buat field dry-steam itu gas geothermometry — rasio temperature-dependent gas reaktif (CO₂, H₂S, H₂, CH₄) yang dibawa steam — yang baca kondisi deep vapour-zone yang liquid geothermometer gak bisa capai. Liquid cation/silica geothermometer masih punya peran, tapi diterapin ke outflow spring sekitar field bukan ke deep steam reservoir itu sendiri.'
      }
    },
  ],
};
