// ─────────────────────────────────────────────────────────────────────────
// ⚠ DRAFT — AWAITING AZ DOMAIN REVIEW (option (b): "I draft, you correct").
// Geothermal content is Az-authored. Schema-valid + renderable, NOT finalized.
// Domain claims flagged inline **⟦TODO-Az: …⟧**.
// Full prep: notes/arnorsson-2000-research-prep-2026-06-02.md
//
// OPEN TODO-Az ITEMS (prep §9):
//   A. Stefán Arnórsson life status UNCONFIRMED (no obituary; active into 2010s →
//      likely living/emeritus but not positively verified) — neutral/accomplishment
//      tense, assert neither "is" nor "the late" (Pruess posture).
//   B. Co-principal author = Franco D'Amore (verifier corrected my "Ármannsson" seed).
//   C. DRY-STEAM: a vapour-dominated field samples fumarole STEAM/CONDENSATE/GAS,
//      not a deep liquid → gas geothermometry + reconstruction; liquid examples
//      are the general case.
//   D. Worked-example isotope numbers illustrative; use Darajat's actual δD/δ18O.
//   E. Verify Craig 1961 (Science 133, 1702-1703) + GCA 1982 I (46(9), 1513-1532).
//   F. Seed cards deferred until Az signs off.
// ─────────────────────────────────────────────────────────────────────────

export const CONTENT = {
  itemId: 'arnorsson-2000',
  estimatedReadMinutes: 32,

  author: {
    fullName: { en: `Stefán Arnórsson (ed.) — with Franco D'Amore`, id: `Stefán Arnórsson (ed.) — dengan Franco D'Amore` },
    affiliation: {
      en: `International Atomic Energy Agency (IAEA), Vienna — edited by Stefán Arnórsson (University of Iceland)`,
      id: `International Atomic Energy Agency (IAEA), Vienna — diedit oleh Stefán Arnórsson (University of Iceland)`
    },
    tagline: {
      en: `The modern IAEA field manual for geothermal geochemistry — how to sample a hot fluid, analyze it, and read its temperature, origin and age from the chemistry and the isotopes.`,
      id: `Field manual IAEA modern buat geokimia geothermal — gimana nyampel hot fluid, nganalisisnya, dan membaca temperature, origin dan umurnya dari kimia dan isotop.`
    },
    bio: {
      en: `This is an IAEA guidebook edited by Stefán Arnórsson and written largely by Arnórsson and Franco D'Amore. Stefán Arnórsson, of the University of Iceland, is among the leading figures in geothermal solute and gas geochemistry: he created the WATCH aqueous-speciation program (which computes a reservoir water's speciation, pH, redox state, gas partial pressures and mineral saturation), authored the foundational three-part series "The chemistry of geothermal waters in Iceland" (Geochimica et Cosmochimica Acta, 1982-83), calibrated widely used silica and Na-K "Arnórsson geothermometers," and built conceptual models of Iceland's high- and low-temperature fields. Franco D'Amore, an Italian geothermal geochemist in the Larderello tradition, contributed especially the gas-geochemistry and gas-geothermometry material. Produced through an IAEA coordinated effort, the volume gathers contributions from specialists in isotope hydrology and geothermal chemistry; it builds directly on the Henley-Truesdell-Barton (1984) fluid-mineral-equilibria foundation, extending it with rigorous isotope techniques and standardized sampling and data-handling procedures, and is one of the standard modern references for geothermal geochemical and isotope investigation.`,
      id: `Ini IAEA guidebook yang diedit Stefán Arnórsson dan ditulis sebagian besar oleh Arnórsson dan Franco D'Amore. Stefán Arnórsson, dari University of Iceland, adalah salah satu figur terdepan di geokimia solute dan gas geothermal: dia bikin WATCH aqueous-speciation program (yang ngitung speciation, pH, redox state, gas partial pressure dan mineral saturation sebuah reservoir water), nulis seri tiga-bagian fondasional "The chemistry of geothermal waters in Iceland" (Geochimica et Cosmochimica Acta, 1982-83), ngalibrasi "Arnórsson geothermometer" silica dan Na-K yang dipake luas, dan bangun conceptual model field high- dan low-temperature Islandia. Franco D'Amore, geochemist geothermal Italia di tradisi Larderello, nyumbang terutama material gas-geochemistry dan gas-geothermometry. Diproduksi lewat upaya terkoordinasi IAEA, volume ngumpulin kontribusi dari spesialis isotope hydrology dan geokimia geothermal; dia bangun langsung di atas fondasi fluid-mineral-equilibria Henley-Truesdell-Barton (1984), nge-extend dengan teknik isotop yang rigor dan prosedur sampling dan data-handling yang terstandar, dan jadi salah satu referensi modern standar buat investigasi geokimia dan isotop geothermal.`
    },
    focus: {
      en: `The practical handbook of geothermal geochemistry: how to sample fluids and gases (springs, fumaroles, wet-steam wells), analyze them with proper QA, and interpret the results — solute and gas geothermometry, aqueous speciation and mineral saturation, mixing and boiling corrections, reconstruction of deep aquifer fluid from wet-steam-well data, and the ISOTOPE techniques (stable δD/δ¹⁸O for recharge origin and water-rock exchange; tritium for residence time; carbon isotopes) that chemistry alone cannot provide.`,
      id: `Handbook praktis geokimia geothermal: gimana nyampel fluid dan gas (spring, fumarol, wet-steam well), nganalisisnya dengan QA yang benar, dan nginterpretasi hasilnya — solute dan gas geothermometry, aqueous speciation dan mineral saturation, koreksi mixing dan boiling, rekonstruksi deep aquifer fluid dari wet-steam-well data, dan teknik ISOTOP (stable δD/δ¹⁸O buat recharge origin dan water-rock exchange; tritium buat residence time; carbon isotope) yang kimia sendiri gak bisa kasih.`
    },
    intellectualLineage: {
      en: `The Icelandic geothermal-geochemistry school (University of Iceland / Orkustofnun / the Iceland Water Chemistry Group), where Arnórsson built the aqueous-speciation-and-geothermometry tradition (WATCH), joined to the international isotope-hydrology community that the IAEA convenes. It is the explicit modern successor to the Henley-Truesdell-Barton (1984) solute-geothermometry foundation — same enterprise (read the fluid), extended with isotopes and standardized procedures.`,
      id: `Sekolah geokimia geothermal Islandia (University of Iceland / Orkustofnun / Iceland Water Chemistry Group), tempat Arnórsson bangun tradisi aqueous-speciation-and-geothermometry (WATCH), digabung sama komunitas isotope-hydrology internasional yang IAEA kumpulin. Dia successor modern eksplisit buat fondasi solute-geothermometry Henley-Truesdell-Barton (1984) — enterprise yang sama (baca fluid-nya), di-extend dengan isotop dan prosedur terstandar.`
    },
    keyCollaborators: {
      en: `**Franco D'Amore** — co-principal author, gas geochemistry/geothermometry. The **IAEA isotope-hydrology** programme and its contributing specialists. In Arnórsson's own lineage, **S. Sigurdsson** and **H. Svavarsson** (WATCH program, 1982) and **Jón Örn Bjarnason** (WATCH v2.1, 1994), and the **Iceland Water Chemistry Group / Orkustofnun / ISOR** community.`,
      id: `**Franco D'Amore** — co-principal author, gas geochemistry/geothermometry. Program **isotope-hydrology IAEA** dan spesialis kontributornya. Di lineage Arnórsson sendiri, **S. Sigurdsson** dan **H. Svavarsson** (WATCH program, 1982) dan **Jón Örn Bjarnason** (WATCH v2.1, 1994), dan komunitas **Iceland Water Chemistry Group / Orkustofnun / ISOR**.`
    },
    legacy: {
      en: `The volume codified geothermal fluid sampling and interpretation as a disciplined, isotope-aware practice and is widely used as the modern field reference. Its lasting contribution is twofold: it standardized how the community samples and quality-controls fluids and gases (so results from different fields and labs are comparable), and it brought stable isotopes and tritium into the routine interpretive toolkit alongside the solute geothermometers — letting a single fluid sample answer not just "how hot is the reservoir?" but "where did the water come from, how did it mix and boil, and how old is it?" It is the practical companion to the Henley-Truesdell-Barton geochemistry foundation.`,
      id: `Volume ngodifikasi sampling dan interpretasi fluid geothermal jadi praktek yang disiplin dan isotope-aware dan dipake luas sebagai field reference modern. Kontribusi yang bertahan-nya dua: dia nge-standarisasi gimana komunitas nyampel dan quality-control fluid dan gas (jadi hasil dari field dan lab berbeda comparable), dan dia bawa stable isotop dan tritium ke toolkit interpretif rutin bareng solute geothermometer — ngebikin satu fluid sample bisa jawab gak cuma "seberapa panas reservoir-nya?" tapi "air-nya datang dari mana, gimana dia mixing dan boiling, dan seberapa tua?" Dia companion praktis buat fondasi geokimia Henley-Truesdell-Barton.`
    },
    keyWorks: [
      { year: 2000, title: `Isotopic and Chemical Techniques in Geothermal Exploration, Development and Use (Arnórsson, ed.; this item)`, venue: `International Atomic Energy Agency, Vienna (x + 351 pp, STI/PUB/1086)` },
      { year: 1982, title: `The chemistry of geothermal waters in Iceland. I. Aqueous speciation 0-370°C (Arnórsson, Sigurdsson and Svavarsson; the WATCH basis)`, venue: `Geochimica et Cosmochimica Acta 46(9), 1513-1532` },
      { year: 1983, title: `The chemistry of geothermal waters in Iceland. II & III (mineral equilibria & geothermometry; Arnórsson et al.)`, venue: `Geochimica et Cosmochimica Acta 47` },
      { year: 1961, title: `Isotopic variations in meteoric waters (Craig — the Global Meteoric Water Line)`, venue: `Science 133(3465), 1702-1703` },
    ],
  },

  sections: [
    // ─────────────── 1. motivation ───────────────
    {
      id: 'motivation',
      heading: { en: 'Why this matters', id: 'Kenapa ini penting' },
      body: {
        en: `Geothermometry (the previous geochemistry item) reads a reservoir's *temperature* from a fluid's chemistry. But a sampled fluid carries more than a temperature: it carries a record of **where the water came from**, **how it mixed and boiled** on the way up, and **how old** it is. Reading those requires **isotopes** — and it requires sampling and analyzing the fluid correctly in the first place. This IAEA guidebook, edited by Stefán Arnórsson, is the modern field manual that puts both together: standardized sampling and data-handling, the solute and gas geothermometry it inherits from Henley-Truesdell-Barton, and the stable-isotope and tritium techniques that chemistry alone cannot provide.

The isotope payoff is specific. The hydrogen and oxygen isotopes of the water itself (δD and δ¹⁸O) fingerprint the **recharge** — the meteoric water that fed the system — because precipitation worldwide follows a tight relationship and high-temperature water-rock exchange shifts it in a diagnostic way. Tritium, a radioactive hydrogen isotope from 1950s-60s bomb testing, distinguishes **young** (recently recharged) water from **old**, well-isolated deep water. Together they answer questions a temperature cannot: is this field recharged from nearby high ground or distant mountains? Is the produced fluid mixing with shallow groundwater? Is recharge keeping pace with extraction?

The guidebook's other half is discipline: a geothermal fluid changes between the reservoir and the sample bottle (it boils, it degasses, it mixes), so the volume is exacting about **how** you sample springs, fumaroles and especially **two-phase (wet-steam) wells**, and how you **reconstruct the deep aquifer fluid** from the separated water and steam plus the measured enthalpy. For a vapour-dominated field the sample is steam, condensate and gas rather than a deep liquid, so this reconstruction-and-gas-geochemistry side is exactly the dry-steam-relevant part. **⟦TODO-Az: confirm Darajat's sampling/isotope/gas practice — what is sampled, and how the deep fluid/steam is interpreted for a vapour-dominated reservoir. Prep §9-C.⟧**`,
        id: `Geothermometry (item geokimia sebelumnya) baca *temperature* reservoir dari kimia fluid. Tapi fluid yang disampel bawa lebih dari temperature: dia bawa record tentang **air-nya datang dari mana**, **gimana dia mixing dan boiling** pas naik, dan **seberapa tua** dia. Membaca itu butuh **isotop** — dan butuh nyampel dan nganalisis fluid-nya dengan benar di tempat pertama. IAEA guidebook ini, diedit Stefán Arnórsson, itu field manual modern yang nyatuin keduanya: sampling dan data-handling terstandar, solute dan gas geothermometry yang dia warisi dari Henley-Truesdell-Barton, dan teknik stable-isotope dan tritium yang kimia sendiri gak bisa kasih.

Payoff isotop-nya spesifik. Isotop hidrogen dan oksigen air itu sendiri (δD dan δ¹⁸O) nge-fingerprint **recharge** — air meteoric yang ngasih makan sistem — karena presipitasi di seluruh dunia ngikutin hubungan yang ketat dan water-rock exchange high-temperature nge-shift-nya dengan cara yang diagnostik. Tritium, isotop hidrogen radioaktif dari bomb testing 1950-60-an, ngebedain air **young** (baru di-recharge) dari air **old** yang well-isolated dalam. Bareng mereka jawab pertanyaan yang temperature gak bisa: apakah field ini di-recharge dari high ground terdekat atau gunung jauh? Apakah produced fluid mixing sama shallow groundwater? Apakah recharge ngimbangin ekstraksi?

Separuh guidebook lainnya itu disiplin: fluid geothermal berubah antara reservoir dan botol sampel (dia boiling, degas, mixing), jadi volume teliti tentang **gimana** kamu nyampel spring, fumarol dan terutama **two-phase (wet-steam) well**, dan gimana kamu **merekonstruksi deep aquifer fluid** dari separated water dan steam plus enthalpy terukur. Buat field vapour-dominated sampel-nya steam, condensate dan gas daripada deep liquid, jadi sisi reconstruction-and-gas-geochemistry ini persis bagian dry-steam-relevant. **⟦TODO-Az: konfirmasi praktek sampling/isotop/gas Darajat — apa yang disampel, dan gimana deep fluid/steam diinterpretasi buat reservoir vapour-dominated. Prep §9-C.⟧**`
      }
    },

    // ─────────────── 2. intuition ───────────────
    {
      id: 'intuition',
      heading: { en: 'Intuition', id: 'Intuisi' },
      body: {
        en: `The stable-isotope story rests on one clean baseline and one diagnostic departure from it.

**The baseline — the Global Meteoric Water Line.** Worldwide precipitation, when you plot its deuterium ratio δD against its oxygen-18 ratio δ¹⁸O (both as per-mille deviations from ocean water on the VSMOW scale), falls on a tight line: δD = 8·δ¹⁸O + 10. The slope of 8 comes from equilibrium fractionation as water vapour condenses out of clouds; the +10 intercept is the global "deuterium excess." Cooler, higher, more inland precipitation plots further down-left (more isotopically depleted). So a water's position on this line encodes the climate and elevation of the precipitation that formed it.

**The diagnostic departure — the oxygen-18 shift.** Geothermal reservoir waters do NOT sit on the meteoric line — they plot to the *right* of it. At reservoir temperatures the water exchanges oxygen isotopes with the ¹⁸O-rich reservoir rock (silicates, carbonates), so its δ¹⁸O climbs. Crucially, **δD barely changes**, because rock contains very little hydrogen to exchange. The result is a near-horizontal rightward shift: same δD, higher δ¹⁸O. That asymmetry is the whole trick — the conserved δD still fingerprints the original recharge, while the size of the δ¹⁸O shift records the extent of high-temperature water-rock interaction. Project a geothermal water horizontally back to the meteoric line and you recover the recharge composition; combine with the fact that δD falls with altitude and you can locate the recharge area's elevation.

**Age — tritium.** Tritium (³H, half-life 12.32 years) was injected into the atmosphere by 1950s-60s nuclear testing, so detectable tritium in a water means a component of "young" (post-~1952) recharge or mixing with shallow water; a tritium-dead water is old and well-isolated. It is the clock that distinguishes recently-circulated from long-resident fluid.

For a vapour-dominated field these tools shift to steam, condensate and gas — you sample what the fumaroles and wet-steam wells give and reconstruct the deep fluid — rather than a deep liquid. **⟦TODO-Az: frame the liquid-water isotope examples as the general case and confirm the dry-steam (steam/condensate/gas) sampling for Darajat. Prep §9-C.⟧**`,
        id: `Cerita stable-isotope bersandar di satu baseline bersih dan satu departure diagnostik darinya.

**Baseline — Global Meteoric Water Line.** Presipitasi di seluruh dunia, pas kamu plot rasio deuterium-nya δD lawan rasio oxygen-18-nya δ¹⁸O (keduanya sebagai deviasi per-mille dari ocean water di skala VSMOW), jatuh di garis ketat: δD = 8·δ¹⁸O + 10. Slope 8 datang dari equilibrium fractionation pas water vapour condense keluar dari awan; intercept +10 itu "deuterium excess" global. Presipitasi yang lebih dingin, lebih tinggi, lebih inland plot lebih jauh down-left (lebih ter-deplesi isotopik). Jadi posisi air di garis ini nge-encode iklim dan elevasi presipitasi yang ngebentuk-nya.

**Departure diagnostik — oxygen-18 shift.** Reservoir water geothermal TIDAK duduk di meteoric line — mereka plot di *kanan*-nya. Di temperature reservoir air tukeran isotop oksigen sama reservoir rock yang ¹⁸O-rich (silikat, karbonat), jadi δ¹⁸O-nya naik. Penting, **δD nyaris gak berubah**, karena rock berisi sangat sedikit hidrogen buat ditukar. Hasilnya shift rightward near-horizontal: δD sama, δ¹⁸O lebih tinggi. Asimetri itu seluruh trik-nya — δD yang conserved tetap nge-fingerprint recharge asli, sementara ukuran shift δ¹⁸O nge-record extent water-rock interaction high-temperature. Proyeksiin air geothermal horizontal balik ke meteoric line dan kamu recover komposisi recharge; gabung sama fakta bahwa δD turun dengan altitude dan kamu bisa nge-lokasi elevasi area recharge.

**Umur — tritium.** Tritium (³H, half-life 12.32 tahun) di-inject ke atmosfer sama nuclear testing 1950-60-an, jadi tritium yang ke-deteksi di air berarti komponen recharge "young" (post-~1952) atau mixing sama shallow water; air tritium-dead itu tua dan well-isolated. Dia jam yang ngebedain fluid baru-bersirkulasi dari yang long-resident.

Buat field vapour-dominated tool ini geser ke steam, condensate dan gas — kamu sampel apa yang fumarol dan wet-steam well kasih dan rekonstruksi deep fluid — daripada deep liquid. **⟦TODO-Az: frame contoh isotop liquid-water sebagai kasus general dan konfirmasi sampling dry-steam (steam/condensate/gas) buat Darajat. Prep §9-C.⟧**`
      }
    },

    // ─────────────── 3. formalization ───────────────
    {
      id: 'formalization',
      heading: { en: 'The isotope relations', id: 'Relasi isotop' },
      body: {
        en: `**Delta notation (VSMOW scale).** Stable water-isotope ratios are reported as per-mille (‰) deviations from Vienna Standard Mean Ocean Water:

$$\\delta = \\left(\\frac{R_{sample}}{R_{VSMOW}} - 1\\right)\\times 1000$$

where $R$ is the heavy/light abundance ratio (²H/¹H for δD, ¹⁸O/¹⁶O for δ¹⁸O). Meteoric waters are negative (isotopically lighter than ocean water).

**Global Meteoric Water Line (Craig 1961).** Worldwide precipitation plots on

$$\\delta D = 8\\,\\delta^{18}O + 10\\ (\\text{‰, VSMOW})$$

— slope 8 from equilibrium condensation fractionation, +10 ‰ the global deuterium excess. Rearranged, the meteoric δ¹⁸O for a given δD is $\\delta^{18}O = (\\delta D - 10)/8$.

**The oxygen-18 shift.** A geothermal water plots to the right of the GMWL by

$$\\Delta^{18}O = \\delta^{18}O_{geothermal} - \\delta^{18}O_{meteoric}\\big|_{\\text{same }\\delta D}$$

at essentially **constant δD** (rock has little exchangeable hydrogen). The magnitude scales with temperature, the rock's δ¹⁸O, and the water/rock ratio.

**Recharge tracing.** Because δD is conserved, projecting a geothermal water horizontally onto the (local) meteoric line gives the recharge δ¹⁸O, and the recharge δD is just the water's own δD. With the **altitude effect** (δD decreases roughly 1.5–4 ‰ per 100 m of elevation), the recharge area's mean elevation follows. Heavier-than-meteoric δD signals seawater, evaporated, or magmatic/andesitic water input.

**Tritium.** ³H decays with a half-life of **12.32 years**, so $A(t) = A_0\\,2^{-t/12.32}$ (activity in Tritium Units). Bomb-pulse tritium dates "young" water; tritium-dead water is old/well-isolated.

For a two-phase (wet-steam) well, the produced enthalpy plus the separated water and steam compositions are combined to **reconstruct the deep aquifer fluid** before any geothermometer or isotope interpretation — the QA discipline the volume insists on. **⟦TODO-Az: verify Craig 1961 (Science 133, 1702-1703) and the altitude-effect range; for a dry-steam field the isotopes are read on steam/condensate, not a deep liquid. Prep §9-C, §9-E.⟧**`,
        id: `**Delta notation (skala VSMOW).** Rasio stable water-isotope di-report sebagai deviasi per-mille (‰) dari Vienna Standard Mean Ocean Water:

$$\\delta = \\left(\\frac{R_{sample}}{R_{VSMOW}} - 1\\right)\\times 1000$$

dimana $R$ itu rasio abundance heavy/light (²H/¹H buat δD, ¹⁸O/¹⁶O buat δ¹⁸O). Meteoric water negatif (lebih ringan isotopik dari ocean water).

**Global Meteoric Water Line (Craig 1961).** Presipitasi di seluruh dunia plot di

$$\\delta D = 8\\,\\delta^{18}O + 10\\ (\\text{‰, VSMOW})$$

— slope 8 dari equilibrium condensation fractionation, +10 ‰ deuterium excess global. Disusun ulang, δ¹⁸O meteoric buat δD tertentu itu $\\delta^{18}O = (\\delta D - 10)/8$.

**Oxygen-18 shift.** Air geothermal plot di kanan GMWL sebesar

$$\\Delta^{18}O = \\delta^{18}O_{geothermal} - \\delta^{18}O_{meteoric}\\big|_{\\text{δD sama}}$$

di **δD yang pada dasarnya konstan** (rock punya sedikit exchangeable hidrogen). Magnitude-nya scale sama temperature, δ¹⁸O rock, dan rasio water/rock.

**Recharge tracing.** Karena δD conserved, memproyeksiin air geothermal horizontal ke (local) meteoric line ngasih δ¹⁸O recharge, dan δD recharge itu cuma δD air itu sendiri. Dengan **altitude effect** (δD turun kira-kira 1.5–4 ‰ per 100 m elevasi), elevasi rata-rata area recharge ngikutin. δD lebih-berat-dari-meteoric nandain input seawater, evaporated, atau magmatic/andesitic water.

**Tritium.** ³H meluruh dengan half-life **12.32 tahun**, jadi $A(t) = A_0\\,2^{-t/12.32}$ (activity dalam Tritium Unit). Bomb-pulse tritium nge-date air "young"; air tritium-dead itu tua/well-isolated.

Buat two-phase (wet-steam) well, enthalpy yang diproduksi plus komposisi separated water dan steam digabung buat **merekonstruksi deep aquifer fluid** sebelum interpretasi geothermometer atau isotop apapun — disiplin QA yang volume bersikeras. **⟦TODO-Az: verifikasi Craig 1961 (Science 133, 1702-1703) dan range altitude-effect; buat field dry-steam isotop dibaca di steam/condensate, bukan deep liquid. Prep §9-C, §9-E.⟧**`
      }
    },

    // ─────────────── 4. worked-example ───────────────
    {
      id: 'worked-example',
      heading: { en: 'Worked example', id: 'Contoh kerjaan' },
      body: {
        en: `**The oxygen-18 shift and the recharge fingerprint.** A geothermal water is analyzed at δD = −60 ‰ and δ¹⁸O = −5 ‰ (VSMOW). Where would meteoric water of the same δD plot? Using the GMWL,

$$\\delta^{18}O_{meteoric} = \\frac{\\delta D - 10}{8} = \\frac{-60 - 10}{8} = \\frac{-70}{8} = -8.75\\ \\text{‰}$$

So the oxygen-18 shift is

$$\\Delta^{18}O = \\delta^{18}O_{geothermal} - \\delta^{18}O_{meteoric} = -5 - (-8.75) = +3.75\\ \\text{‰}$$

The water sits +3.75 ‰ to the right of the meteoric line — a clear water-rock-exchange signature, confirming it equilibrated with reservoir rock at high temperature. And because δD is conserved through that exchange, the **recharge** that fed this system had δD ≈ −60 ‰ and (on the meteoric line) δ¹⁸O ≈ −8.75 ‰: the geothermal water "remembers" its meteoric origin in its hydrogen even after its oxygen has been reset. If a local rain sample at the field had δD ≈ −60 ‰, the recharge is local; if local rain is markedly heavier (less negative), the recharge comes from higher/cooler ground (via the altitude effect), pointing the recharge area uphill.

Two checks the volume would insist on: (1) is the sample a representative deep fluid, or shallow/mixed? A tritium measurement settles young-vs-old; a position far off any sensible meteoric line flags mixing or evaporation. (2) Did the water boil before sampling? Steam loss also fractionates the isotopes, so a boiled sample must be corrected before the shift is read. **⟦TODO-Az: δD = −60 / δ¹⁸O = −5 are illustrative; use Darajat's actual values, and note the field samples steam/condensate (not a deep liquid), which changes the isotope interpretation. Prep §9-C, §9-D.⟧**`,
        id: `**Oxygen-18 shift dan fingerprint recharge.** Air geothermal dianalisis di δD = −60 ‰ dan δ¹⁸O = −5 ‰ (VSMOW). Di mana meteoric water dengan δD yang sama bakal plot? Pake GMWL,

$$\\delta^{18}O_{meteoric} = \\frac{\\delta D - 10}{8} = \\frac{-60 - 10}{8} = \\frac{-70}{8} = -8.75\\ \\text{‰}$$

Jadi oxygen-18 shift-nya

$$\\Delta^{18}O = \\delta^{18}O_{geothermal} - \\delta^{18}O_{meteoric} = -5 - (-8.75) = +3.75\\ \\text{‰}$$

Air duduk +3.75 ‰ di kanan meteoric line — signature water-rock-exchange yang jelas, konfirmasi dia ber-ekuilibrium sama reservoir rock di temperature tinggi. Dan karena δD conserved lewat exchange itu, **recharge** yang ngasih makan sistem ini punya δD ≈ −60 ‰ dan (di meteoric line) δ¹⁸O ≈ −8.75 ‰: air geothermal "inget" origin meteoric-nya di hidrogen-nya bahkan setelah oksigen-nya di-reset. Kalau sampel hujan lokal di field punya δD ≈ −60 ‰, recharge-nya lokal; kalau hujan lokal jelas lebih berat (kurang negatif), recharge datang dari ground lebih tinggi/dingin (via altitude effect), nunjuk area recharge ke atas bukit.

Dua cek yang volume bakal bersikeras: (1) apakah sampel itu deep fluid representatif, atau shallow/mixed? Pengukuran tritium nyelesain young-vs-old; posisi jauh dari meteoric line yang masuk akal nge-flag mixing atau evaporation. (2) Apakah air-nya boiling sebelum disampel? Steam loss juga nge-fractionate isotop, jadi sampel yang ke-boil harus dikoreksi sebelum shift-nya dibaca. **⟦TODO-Az: δD = −60 / δ¹⁸O = −5 ilustratif; pake nilai Darajat sebenarnya, dan catat field nyampel steam/condensate (bukan deep liquid), yang ngubah interpretasi isotop. Prep §9-C, §9-D.⟧**`
      }
    },

    // ─────────────── 5. applications ───────────────
    {
      id: 'applications',
      heading: { en: 'Applications by audience', id: 'Aplikasi per audience' },
      body: {
        en: `### For the advanced researcher / geochemist

The frontier the volume points to is **multicomponent integration**: combining the full aqueous speciation (Arnórsson's WATCH lineage) and gas geothermometry with the isotope tracers, so that temperature, redox, mineral saturation, recharge origin, mixing and residence time are solved as one consistent picture of the fluid. Carbon and other isotope systems, and tracer tests, extend the residence-time and connectivity story.

### For the exploration / field geochemist

This is the operational manual: sample springs, fumaroles and wet-steam wells to the volume's protocols, quality-control the analyses (charge balance, preservation), reconstruct the deep aquifer fluid for two-phase wells, run the geothermometers, and use δD/δ¹⁸O and tritium to map recharge and detect shallow mixing. The temperature and recharge picture feeds the conceptual model directly (it is what anchors and bounds the predicted isotherms and the upflow/recharge geometry). **⟦TODO-Az: for Darajat (vapour-dominated), the samples are steam/condensate/gas and the deep fluid is reconstructed; gas geochemistry and steam-condensate isotopes are the field-relevant tools. Confirm the practice. Prep §9-C.⟧**

### For the production / monitoring chemist

During exploitation the same sampling-and-interpretation toolkit becomes a **monitoring** instrument: tracking produced-fluid chemistry and isotopes over time detects boiling/dry-out (changing gas and isotope signatures), incursion of shallow or injected water (a tritium or δD shift toward the injectate/meteoric value — i.e. **injection breakthrough**), and scaling/corrosion onset from the saturation state. The standardized procedures are what make those time series comparable and trustworthy. **⟦TODO-Az: Darajat's produced-fluid/gas/isotope monitoring and any reinjection-tracing practice — Az to supply. Prep §9-F.⟧**`,
        id: `### Untuk advanced researcher / geochemist

Frontier yang volume tunjuk itu **multicomponent integration**: ngegabungin full aqueous speciation (lineage WATCH Arnórsson) dan gas geothermometry sama isotope tracer, jadi temperature, redox, mineral saturation, recharge origin, mixing dan residence time di-solve sebagai satu gambaran konsisten fluid. Carbon dan sistem isotop lain, dan tracer test, nge-extend cerita residence-time dan connectivity.

### Untuk exploration / field geochemist

Ini manual operasional: sampel spring, fumarol dan wet-steam well ke protokol volume, quality-control analisis (charge balance, preservasi), rekonstruksi deep aquifer fluid buat two-phase well, jalanin geothermometer, dan pake δD/δ¹⁸O dan tritium buat memetakan recharge dan deteksi shallow mixing. Gambaran temperature dan recharge nge-feed conceptual model langsung (itu yang nge-anchor dan nge-bound predicted isoterm dan geometry upflow/recharge). **⟦TODO-Az: buat Darajat (vapour-dominated), sampel-nya steam/condensate/gas dan deep fluid direkonstruksi; gas geochemistry dan steam-condensate isotop itu tool yang field-relevant. Konfirmasi prakteknya. Prep §9-C.⟧**

### Untuk production / monitoring chemist

Selama eksploitasi toolkit sampling-and-interpretation yang sama jadi instrumen **monitoring**: nge-track produced-fluid chemistry dan isotop over time ngedeteksi boiling/dry-out (signature gas dan isotop berubah), incursion shallow atau injected water (shift tritium atau δD ke arah nilai injectate/meteoric — yaitu **injection breakthrough**), dan onset scaling/corrosion dari saturation state. Prosedur terstandar yang ngebikin time series itu comparable dan bisa dipercaya. **⟦TODO-Az: monitoring produced-fluid/gas/isotop Darajat dan praktek reinjection-tracing apapun — Az yang sediain. Prep §9-F.⟧**`
      }
    },

    // ─────────────── 6. practice ───────────────
    {
      id: 'practice',
      heading: { en: 'Practice', id: 'Latihan' },
      body: {
        en: `**1.** A geothermal water has δD = −80 ‰ and δ¹⁸O = −7 ‰. Using the GMWL ($\\delta D = 8\\,\\delta^{18}O + 10$), compute the oxygen-18 shift Δ¹⁸O, and state what its sign tells you.

<details><summary>Answer</summary>
Meteoric δ¹⁸O at this δD: $\\delta^{18}O = (\\delta D - 10)/8 = (-80-10)/8 = -90/8 = -11.25$ ‰. The shift is $\\Delta^{18}O = -7 - (-11.25) = +4.25$ ‰. The positive sign (the water plots to the right of the meteoric line) indicates high-temperature water-rock oxygen-isotope exchange — the signature that the water equilibrated with reservoir rock. (A water on or left of the line would show no such exchange.)
</details>

**2.** For that same water (δD = −80 ‰), what is the δD of the recharge precipitation, and if local modern rain at the field has δD ≈ −55 ‰, what does that imply about where the water recharged?

<details><summary>Answer</summary>
Because δD is conserved through the oxygen shift, the recharge δD equals the water's own δD ≈ −80 ‰. Local rain at −55 ‰ is markedly heavier (less negative) than the recharge, so the recharge did not fall locally — via the altitude (and latitude) effect, more-depleted (−80 ‰) precipitation falls at higher, cooler elevations, so the recharge area is upslope/at higher elevation than the field. (Quantitatively, a −25 ‰ δD difference at, say, −2 to −3 ‰ per 100 m implies on the order of ~1 km of elevation difference — order-of-magnitude only.)
</details>

**3.** Two produced waters are identical in major chemistry, but one has measurable tritium and the other is tritium-dead. What does each indicate, and why is tritium able to make this distinction when the solute chemistry cannot?

<details><summary>Answer</summary>
The tritium-bearing water contains a component of "young" water — recharge that fell after the 1950s-60s atmospheric bomb tests, or mixing with shallow modern groundwater — so it is connected to a relatively fast, shallow circulation. The tritium-dead water is "old": its recharge predates the bomb pulse and any tritium has decayed away (half-life 12.32 yr), indicating a long residence time and good isolation from shallow water. Tritium can make this distinction because it is a radioactive clock built into the water molecule itself (³H in place of ¹H), set by a known atmospheric input history — it measures *time/age*, an axis the solute chemistry (which reflects temperature and rock equilibria, not age) does not capture. Two waters can therefore share major-element chemistry yet differ completely in age.
</details>

**4.** A produced well's fluid, monitored over several years of exploitation, drifts in δD and tritium toward the values of the field's reinjected water. What is happening, and why does this matter operationally?

<details><summary>Answer</summary>
This is **injection breakthrough** (thermal/chemical short-circuiting): produced fluid is increasingly drawing reinjected water that has travelled from an injector to this producer. The isotope signature gives it away — the reinjectate (often condensate or separated water, possibly tritium-bearing if shallow-sourced, and with its own δD) imprints its δD and tritium on the produced fluid as the breakthrough fraction grows, a shift the bulk chemistry may show only weakly. It matters operationally because breakthrough of cooler reinjected water lowers the produced enthalpy and can cool the reservoir around the producer, eroding deliverability — so detecting it early (and tracing injector-producer connectivity, often with deliberate tracers) drives decisions to move injection, change rates, or re-target wells. The standardized isotope monitoring is what makes the drift detectable and comparable over time.
</details>`,
        id: `**1.** Air geothermal punya δD = −80 ‰ dan δ¹⁸O = −7 ‰. Pake GMWL ($\\delta D = 8\\,\\delta^{18}O + 10$), hitung oxygen-18 shift Δ¹⁸O, dan nyatain apa yang tanda-nya kasih tau kamu.

<details><summary>Jawaban</summary>
δ¹⁸O meteoric di δD ini: $\\delta^{18}O = (\\delta D - 10)/8 = (-80-10)/8 = -90/8 = -11.25$ ‰. Shift-nya $\\Delta^{18}O = -7 - (-11.25) = +4.25$ ‰. Tanda positif (air plot di kanan meteoric line) ngindikasiin water-rock oxygen-isotope exchange high-temperature — signature bahwa air ber-ekuilibrium sama reservoir rock. (Air di atau di kiri garis bakal nunjukin gak ada exchange begitu.)
</details>

**2.** Buat air yang sama itu (δD = −80 ‰), berapa δD presipitasi recharge-nya, dan kalau hujan modern lokal di field punya δD ≈ −55 ‰, apa implikasinya tentang di mana air-nya recharge?

<details><summary>Jawaban</summary>
Karena δD conserved lewat oxygen shift, δD recharge sama dengan δD air itu sendiri ≈ −80 ‰. Hujan lokal di −55 ‰ jelas lebih berat (kurang negatif) dari recharge, jadi recharge-nya gak jatuh lokal — via altitude (dan latitude) effect, presipitasi yang lebih ter-deplesi (−80 ‰) jatuh di elevasi lebih tinggi, lebih dingin, jadi area recharge itu upslope/di elevasi lebih tinggi dari field. (Secara kuantitatif, selisih δD −25 ‰ di, misalnya, −2 sampai −3 ‰ per 100 m mengimplikasikan orde ~1 km selisih elevasi — order-of-magnitude doang.)
</details>

**3.** Dua produced water identik di major chemistry, tapi satu punya tritium terukur dan satunya tritium-dead. Apa yang masing-masing indicate, dan kenapa tritium bisa bikin distinction ini pas solute chemistry gak bisa?

<details><summary>Jawaban</summary>
Air yang bawa tritium berisi komponen air "young" — recharge yang jatuh setelah bomb test atmosferik 1950-60-an, atau mixing sama shallow modern groundwater — jadi dia terhubung ke sirkulasi yang relatif cepat, dangkal. Air tritium-dead itu "old": recharge-nya mendahului bomb pulse dan tritium apapun udah meluruh (half-life 12.32 thn), ngindikasiin residence time panjang dan isolasi bagus dari shallow water. Tritium bisa bikin distinction ini karena dia jam radioaktif yang built into molekul air itu sendiri (³H gantiin ¹H), di-set sama input history atmosferik yang diketahui — dia ngukur *waktu/umur*, axis yang solute chemistry (yang mencerminkan temperature dan rock equilibria, bukan umur) gak nangkep. Dua air karena itu bisa share major-element chemistry tapi beda total di umur.
</details>

**4.** Fluid sebuah produced well, dimonitor selama beberapa tahun eksploitasi, drift di δD dan tritium ke arah nilai reinjected water field. Apa yang terjadi, dan kenapa ini penting secara operasional?

<details><summary>Jawaban</summary>
Ini **injection breakthrough** (short-circuiting termal/kimia): produced fluid makin narik reinjected water yang udah travel dari injector ke producer ini. Signature isotop yang ngebocorin-nya — reinjectate (sering condensate atau separated water, mungkin bawa tritium kalau shallow-sourced, dan dengan δD-nya sendiri) nge-imprint δD dan tritium-nya ke produced fluid pas fraksi breakthrough tumbuh, shift yang bulk chemistry mungkin cuma nunjukin lemah. Penting secara operasional karena breakthrough reinjected water yang lebih dingin nurunin produced enthalpy dan bisa nge-cool reservoir sekitar producer, ngikis deliverability — jadi ngedeteksi-nya awal (dan nge-trace connectivity injector-producer, sering pake tracer deliberate) nge-drive keputusan buat mindahin injeksi, ngubah rate, atau re-target well. Monitoring isotop terstandar yang ngebikin drift-nya detectable dan comparable over time.
</details>`
      }
    },

    // ─────────────── 7. connections ───────────────
    {
      id: 'connections',
      heading: { en: 'Connections', id: 'Koneksi' },
      body: {
        en: `- **Prereq**: [Henley, Truesdell & Barton 1984](item:henley-truesdell-barton-1984) — the fluid-mineral-equilibria and solute-geothermometry foundation this guidebook extends; read it first. This volume adds the isotope techniques and standardized sampling/QA.
- **Feeds**: [Cumming 2009](item:cumming-2009) — the geothermometer temperatures and isotope recharge/mixing picture are exactly what anchor and constrain the conceptual model (predicted isotherms, upflow/recharge geometry).
- **Monitoring/scaling for**: [Acuña 2008](item:acuna-2008) and [Grant & Bixley 2011](item:grant-bixley-2011) — produced-fluid chemistry/isotopes monitor boiling/dry-out, injection breakthrough, and scaling during exploitation.
- **Survey-level on-ramp**: [Stober & Bucher 2021](item:stober-bucher-2021) — the textbook's geochemistry chapter is the gentle introduction; this guidebook is the field-practice depth.`,
        id: `- **Prereq**: [Henley, Truesdell & Barton 1984](item:henley-truesdell-barton-1984) — fondasi fluid-mineral-equilibria dan solute-geothermometry yang guidebook ini extend; baca dulu. Volume ini nambah teknik isotop dan sampling/QA terstandar.
- **Nge-feed**: [Cumming 2009](item:cumming-2009) — temperature geothermometer dan gambaran recharge/mixing isotop itu persis yang nge-anchor dan nge-constrain conceptual model (predicted isoterm, geometry upflow/recharge).
- **Monitoring/scaling buat**: [Acuña 2008](item:acuna-2008) dan [Grant & Bixley 2011](item:grant-bixley-2011) — produced-fluid chemistry/isotop nge-monitor boiling/dry-out, injection breakthrough, dan scaling selama eksploitasi.
- **On-ramp level-survey**: [Stober & Bucher 2021](item:stober-bucher-2021) — chapter geokimia textbook itu introduksi yang lembut; guidebook ini kedalaman field-practice-nya.`
      }
    },

    // ─────────────── 8. sources ───────────────
    {
      id: 'sources',
      heading: { en: 'Sources', id: 'Sumber' },
      body: {
        en: `- **Arnórsson, S.** (ed.) (2000). *Isotopic and Chemical Techniques in Geothermal Exploration, Development and Use: Sampling Methods, Data Handling, Interpretation*. International Atomic Energy Agency, Vienna. The modern geothermal-geochemistry sampling-and-interpretation handbook. **(This item.)**
- **Henley, R. W., Truesdell, A. H., and Barton, P. B. Jr.** (1984). *Fluid-Mineral Equilibria in Hydrothermal Systems*. Reviews in Economic Geology, Vol. 1. Society of Economic Geologists. The geothermometry/fluid-mineral foundation this guidebook extends (the declared prerequisite).
- **Craig, H.** (1961). "Isotopic variations in meteoric waters." *Science*, 133(3465), 1702-1703. The Global Meteoric Water Line.
- **Arnórsson, S., Sigurdsson, S., and Svavarsson, H.** (1982). "The chemistry of geothermal waters in Iceland. I. Calculation of aqueous speciation from 0° to 370°C." *Geochimica et Cosmochimica Acta*, 46(9), 1513-1532. The WATCH speciation basis.`,
        id: `- **Arnórsson, S.** (ed.) (2000). *Isotopic and Chemical Techniques in Geothermal Exploration, Development and Use: Sampling Methods, Data Handling, Interpretation*. International Atomic Energy Agency, Vienna. Handbook sampling-and-interpretation geokimia geothermal modern. **(Item ini.)**
- **Henley, R. W., Truesdell, A. H., dan Barton, P. B. Jr.** (1984). *Fluid-Mineral Equilibria in Hydrothermal Systems*. Reviews in Economic Geology, Vol. 1. Society of Economic Geologists. Fondasi geothermometry/fluid-mineral yang guidebook ini extend (prerequisite yang dideklarasikan).
- **Craig, H.** (1961). "Isotopic variations in meteoric waters." *Science*, 133(3465), 1702-1703. Global Meteoric Water Line.
- **Arnórsson, S., Sigurdsson, S., dan Svavarsson, H.** (1982). "The chemistry of geothermal waters in Iceland. I. Calculation of aqueous speciation from 0° to 370°C." *Geochimica et Cosmochimica Acta*, 46(9), 1513-1532. Basis speciation WATCH.`
      }
    },
  ],

  audio: { enabled: true },

  selfTest: [
    {
      sectionId: 'intuition',
      question: {
        en: 'Geothermal waters plot to the right of the Global Meteoric Water Line: their δ¹⁸O is shifted but their δD is almost unchanged. Explain the physical asymmetry that produces this, and why the conserved δD is so useful.',
        id: 'Air geothermal plot di kanan Global Meteoric Water Line: δ¹⁸O-nya ke-shift tapi δD-nya hampir gak berubah. Jelasin asimetri fisik yang ngehasilin ini, dan kenapa δD yang conserved begitu berguna.'
      },
      prompt: { en: 'Before continuing, try answering:', id: 'Sebelum lanjut, coba jawab:' },
      answer: {
        en: 'At reservoir temperatures the water exchanges isotopes with the rock. The rock is rich in oxygen (silicates, carbonates are oxygen-bearing minerals) and relatively ¹⁸O-heavy, so oxygen-isotope exchange transfers ¹⁸O into the water and raises its δ¹⁸O — the "oxygen-18 shift" to the right of the meteoric line. But rock contains very little hydrogen, so there is almost no hydrogen reservoir to exchange with: the water\'s δD is essentially unchanged by water-rock interaction. That asymmetry (lots of exchangeable oxygen in rock, almost no exchangeable hydrogen) is what shifts δ¹⁸O while leaving δD put. The conserved δD is useful precisely because it survives the high-temperature processing: it still records the isotopic composition of the original meteoric recharge, so projecting the geothermal water horizontally (constant δD) back to the meteoric line recovers the recharge composition and, via the altitude effect, the recharge elevation — while the size of the δ¹⁸O shift separately records how much water-rock exchange (i.e. temperature × time × low water/rock ratio) the fluid has undergone. One isotope fingerprints origin; the other fingerprints reservoir processing.',
        id: 'Di temperature reservoir air tukeran isotop sama rock. Rock kaya oksigen (silikat, karbonat itu mineral oxygen-bearing) dan relatif ¹⁸O-berat, jadi oxygen-isotope exchange mindahin ¹⁸O ke air dan naikin δ¹⁸O-nya — "oxygen-18 shift" ke kanan meteoric line. Tapi rock berisi sangat sedikit hidrogen, jadi hampir gak ada hydrogen reservoir buat ditukar: δD air pada dasarnya gak berubah sama water-rock interaction. Asimetri itu (banyak exchangeable oxygen di rock, hampir gak ada exchangeable hydrogen) yang nge-shift δ¹⁸O sambil ninggalin δD di tempat. δD yang conserved berguna persis karena dia selamat dari processing high-temperature: dia tetap nge-record komposisi isotopik recharge meteoric asli, jadi memproyeksiin air geothermal horizontal (δD konstan) balik ke meteoric line ngerecover komposisi recharge dan, via altitude effect, elevasi recharge — sementara ukuran shift δ¹⁸O secara terpisah nge-record seberapa banyak water-rock exchange (yaitu temperature × waktu × rasio water/rock rendah) yang fluid-nya alami. Satu isotop nge-fingerprint origin; satunya nge-fingerprint reservoir processing.'
      }
    },
    {
      sectionId: 'formalization',
      question: {
        en: 'Stable water-isotope ratios are reported in δ-notation, δ = (R_sample/R_VSMOW − 1) × 1000 ‰. What is R, what does this expression physically measure, and why do meteoric and geothermal waters come out negative on this scale?',
        id: 'Rasio stable water-isotope di-report dalam δ-notation, δ = (R_sample/R_VSMOW − 1) × 1000 ‰. Apa itu R, apa yang ekspresi ini ukur secara fisik, dan kenapa meteoric dan geothermal water keluar negatif di skala ini?'
      },
      prompt: { en: 'Before continuing, try answering:', id: 'Sebelum lanjut, coba jawab:' },
      answer: {
        en: 'R is the abundance ratio of the heavy isotope to the light one — ²H/¹H for δD, ¹⁸O/¹⁶O for δ¹⁸O. The δ-value expresses that ratio as a per-mille (parts-per-thousand) deviation from the same ratio in Vienna Standard Mean Ocean Water (VSMOW), the agreed reference. So δ = 0 ‰ means the sample matches ocean water; a positive δ means it is enriched in the heavy isotope relative to the ocean; a negative δ means it is depleted — isotopically "lighter" than ocean water, with proportionally less ²H or ¹⁸O than VSMOW. Meteoric waters, and the geothermal waters derived from them, come out negative because they are isotopically lighter than the ocean they ultimately evaporated from; the Global Meteoric Water Line the section then gives (δD = 8·δ¹⁸O + 10) describes how the depletion in the two isotopes is related. Reporting a small per-mille deviation instead of the raw ratio is what makes the tiny but diagnostic differences between waters — the few-per-mille signals the whole method rests on — readable.',
        id: 'R itu rasio abundance isotop berat ke yang ringan — ²H/¹H buat δD, ¹⁸O/¹⁶O buat δ¹⁸O. Nilai δ nyatain rasio itu sebagai deviasi per-mille (per-seribu) dari rasio yang sama di Vienna Standard Mean Ocean Water (VSMOW), referensi yang disepakati. Jadi δ = 0 ‰ berarti sampel sama persis dengan ocean water; δ positif berarti dia enriched di isotop berat relatif ke ocean; δ negatif berarti dia depleted — isotopik "lebih ringan" dari ocean water, dengan ²H atau ¹⁸O proporsional lebih sedikit dari VSMOW. Meteoric water, dan geothermal water yang berasal darinya, keluar negatif karena mereka isotopik lebih ringan dari ocean yang akhirnya mereka evaporasi-kan; Global Meteoric Water Line yang section ini lalu kasih (δD = 8·δ¹⁸O + 10) ngedeskripsiin gimana deplesi di dua isotop itu berhubungan. Nge-report deviasi per-mille kecil daripada rasio mentah yang ngebikin selisih kecil tapi diagnostik antara air — sinyal beberapa-per-mille yang seluruh metode-nya bersandar — bisa kebaca.'
      }
    },
    {
      sectionId: 'worked-example',
      question: {
        en: 'The worked example analyzes a water at δD = −60 ‰, δ¹⁸O = −5 ‰ and finds a +3.75 ‰ oxygen-18 shift with a reconstructed recharge δ¹⁸O of −8.75 ‰. Without re-deriving the arithmetic: what does the conserved δD tell you, what does the +3.75 ‰ shift tell you, and what are the two quality checks the volume insists on before trusting such a reading?',
        id: 'Worked example nganalisis air di δD = −60 ‰, δ¹⁸O = −5 ‰ dan nemu oxygen-18 shift +3.75 ‰ dengan recharge δ¹⁸O direkonstruksi −8.75 ‰. Tanpa nurunin ulang aritmetika-nya: apa yang δD conserved kasih tau, apa yang shift +3.75 ‰ kasih tau, dan apa dua quality check yang volume bersikeras sebelum percaya bacaan begini?'
      },
      prompt: { en: 'Before continuing, try answering:', id: 'Sebelum lanjut, coba jawab:' },
      answer: {
        en: 'The conserved δD (−60 ‰) fingerprints the water\'s ORIGIN: because high-temperature water-rock exchange barely touches hydrogen, the geothermal water\'s δD still equals that of the meteoric recharge that fed the system, so −60 ‰ identifies the recharge — and compared against local rainfall (via the altitude effect, δD falling with elevation) it shows whether that recharge fell locally or on higher, cooler ground. The +3.75 ‰ oxygen-18 shift fingerprints the PROCESSING: the water sits that far to the right of the meteoric line because it exchanged oxygen isotopes with ¹⁸O-rich reservoir rock at high temperature, so the shift confirms a genuine high-temperature geothermal water and its magnitude scales with the extent of water-rock interaction. The two quality checks before trusting the reading are: (1) is the sample a representative deep fluid rather than shallow or mixed water? — a tritium measurement settles young-vs-old, and a position far off any sensible meteoric line flags mixing or evaporation; and (2) did the water boil before sampling? — steam loss also fractionates the isotopes, so a boiled sample must be corrected before the shift is read.',
        id: 'δD conserved (−60 ‰) nge-fingerprint ORIGIN air: karena water-rock exchange high-temperature nyaris gak nyentuh hidrogen, δD air geothermal tetap sama dengan δD meteoric recharge yang ngasih makan sistem, jadi −60 ‰ ngidentifikasi recharge — dan dibanding hujan lokal (via altitude effect, δD turun dengan elevasi) dia nunjukin apakah recharge itu jatuh lokal atau di ground lebih tinggi, lebih dingin. Shift oxygen-18 +3.75 ‰ nge-fingerprint PROCESSING: air duduk sejauh itu di kanan meteoric line karena dia tukeran isotop oksigen sama reservoir rock yang ¹⁸O-rich di temperature tinggi, jadi shift-nya konfirmasi air geothermal high-temperature genuine dan magnitude-nya scale sama extent water-rock interaction. Dua quality check sebelum percaya bacaan-nya: (1) apakah sampel itu deep fluid representatif bukan shallow atau mixed water? — pengukuran tritium nyelesain young-vs-old, dan posisi jauh dari meteoric line yang masuk akal nge-flag mixing atau evaporation; dan (2) apakah air-nya boiling sebelum disampel? — steam loss juga nge-fractionate isotop, jadi sampel yang ke-boil harus dikoreksi sebelum shift-nya dibaca.'
      }
    },
    {
      sectionId: 'applications',
      question: {
        en: 'How does the same isotope-and-geochemistry toolkit serve a field team across the project life cycle — what does it provide during exploration, and how does its role change once the field is in production?',
        id: 'Gimana toolkit isotope-and-geochemistry yang sama ngelayanin tim field sepanjang siklus hidup proyek — apa yang dia sediain selama exploration, dan gimana peran-nya berubah pas field udah produksi?'
      },
      prompt: { en: 'Before continuing, try answering:', id: 'Sebelum lanjut, coba jawab:' },
      answer: {
        en: 'During EXPLORATION it is the operational manual for building the picture of the resource: the team samples springs, fumaroles and wet-steam wells to standardized protocols, quality-controls the analyses, runs the solute and gas geothermometers for reservoir temperature, and uses δD/δ¹⁸O and tritium to map the recharge origin and detect shallow mixing. That temperature-and-recharge picture feeds the conceptual model directly — it is what anchors and bounds the predicted isotherms and the upflow/recharge geometry the model is built on. Once the field is in PRODUCTION the same sampling-and-interpretation toolkit becomes a MONITORING instrument: tracking the produced-fluid chemistry and isotopes over time detects boiling/dry-out (changing gas and isotope signatures), incursion of shallow or injected water — for example injection breakthrough showing up as a tritium or δD drift toward the injectate — and the onset of scaling or corrosion from the saturation state. The value of the volume\'s standardized procedures is precisely that they make those time series comparable and trustworthy across years, labs and fields, so a real trend can be told apart from sampling noise.',
        id: 'Selama EXPLORATION dia manual operasional buat bangun gambaran resource: tim nyampel spring, fumarol dan wet-steam well ke protokol terstandar, quality-control analisis-nya, jalanin solute dan gas geothermometer buat temperature reservoir, dan pake δD/δ¹⁸O dan tritium buat memetakan recharge origin dan deteksi shallow mixing. Gambaran temperature-and-recharge itu nge-feed conceptual model langsung — itu yang nge-anchor dan nge-bound predicted isoterm dan geometry upflow/recharge yang model-nya dibangun di atasnya. Pas field udah PRODUKSI toolkit sampling-and-interpretation yang sama jadi instrumen MONITORING: nge-track produced-fluid chemistry dan isotop over time ngedeteksi boiling/dry-out (signature gas dan isotop berubah), incursion shallow atau injected water — misalnya injection breakthrough yang muncul sebagai drift tritium atau δD ke arah injectate — dan onset scaling atau corrosion dari saturation state. Nilai prosedur terstandar volume persis-nya bahwa mereka ngebikin time series itu comparable dan bisa dipercaya lintas tahun, lab dan field, jadi tren nyata bisa dibedain dari noise sampling.'
      }
    },
  ],
};
