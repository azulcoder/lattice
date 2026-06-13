// ─────────────────────────────────────────────────────────────────────────
// ⚠ DRAFT — AWAITING AZ DOMAIN REVIEW (option (b): "I draft, you correct").
// Geothermal content is Az-authored. Schema-valid + renderable, NOT finalized.
//
// GENERAL claims VERIFIED against the literature (2026-06-13) and de-flagged:
//   • Darcy→SI conversion (1 D ≈ 9.87×10⁻¹³ m²); radial-Darcy productivity index
//     PI = 2πkh/[μ(ln(re/rw)+s)] (AAPG / standard reservoir engineering).
//   • Fracture-controlled permeability with low–moderate matrix porosity and a
//     ~2-orders-of-magnitude spread (multiple geothermal sources; the recurring
//     citation from this very paper).
//   • The ~10 D·m commercial transmissivity rule of thumb and the ~1–100 D·m
//     productive range (Netherlands geothermal play literature + reservoir-
//     modelling refs corroborate; framed as general convention, not the paper's
//     own tables).
//   • Dry-steam inflow is compressible (pressure-squared) / often non-Darcy, so
//     linear-in-kh PI is an order-of-magnitude guide (general gas-flow physics).
//   • Bibliography + author bios (Geothermics 19(1) 17-27; Bodvarsson b.1952
//     d.2006, LBNL ESD Director from 2001; Björnsson living) re-confirmed.
//
// DARAJAT operational facts stay EXTERNAL to this module. Remaining inline
// ⟦TODO-Az⟧ flags are site-specific or owner catalog-graph decisions only:
//   • Where Darajat's own measured kh/porosity sit relative to the surveyed
//     distribution (§motivation, §worked-example 1, §applications).
//   • Whether the dry-steam productivity-vs-kh relation matches Darajat practice
//     (§worked-example 2).
//   • Whether the survey itself tabulates vapour-dominated fields by system type
//     (abstract lists parameters but does not break them out; full text 403'd).
//   • Optional catalog-graph cross-refs to acuna + cumming (§connections).
//   • Seed cards deferred until Az signs off.
// Full prep: notes/bjornsson-bodvarsson-1990-research-prep-2026-06-02.md
// ─────────────────────────────────────────────────────────────────────────

export const CONTENT = {
  itemId: 'bjornsson-bodvarsson-1990',
  estimatedReadMinutes: 30,

  author: {
    fullName: { en: `Grímur Björnsson & Gudmundur S. Bodvarsson`, id: `Grímur Björnsson & Gudmundur S. Bodvarsson` },
    affiliation: {
      en: `Icelandic geothermal reservoir engineering (Björnsson, Orkustofnun / ISOR) and Lawrence Berkeley National Laboratory (Bodvarsson)`,
      id: `Reservoir engineering geothermal Islandia (Björnsson, Orkustofnun / ISOR) dan Lawrence Berkeley National Laboratory (Bodvarsson)`
    },
    tagline: {
      en: `The empirical stocktaking that told reservoir engineers what a "normal" geothermal field's permeability, porosity and temperature actually look like.`,
      id: `Stocktaking empiris yang ngasih tau reservoir engineer seperti apa permeability, porosity dan temperature field geothermal yang "normal" sebenarnya.`
    },
    bio: {
      en: `This survey pairs an Icelandic field reservoir engineer with a leading Berkeley reservoir modeller of the era. Grímur Björnsson is a geothermal reservoir physicist who spent his career in the Icelandic tradition — the GeoScience division of Orkustofnun (Iceland's National Energy Authority) and then ISOR (Iceland GeoSurvey) as a senior reservoir physicist — specializing in well-logging interpretation and numerical modelling of Icelandic high-temperature fields such as Hengill and Reykjanes, with consulting across the Philippines, Indonesia, East Africa and beyond; he later founded the consultancy Warm Arctic. Gudmundur S. ("Bo") Bodvarsson (1952–2006) was an Icelandic-born hydrogeologist and geothermal reservoir engineer at Lawrence Berkeley National Laboratory, where he worked from 1980 until his death and rose to Director of the Earth Sciences Division; in the 1980s he was central to LBNL's geothermal reservoir-modelling programme alongside Karsten Pruess (the TOUGH simulator milieu), and from the 1990s he led the Yucca Mountain unsaturated-zone flow-and-transport modelling. (He was the son of the geophysicist Gunnar Bodvarsson — not to be confused with his father.) Their 1990 survey reflects exactly that pairing: Icelandic field measurement married to Berkeley reservoir-engineering synthesis.`,
      id: `Survey ini masangin seorang field reservoir engineer Islandia sama salah satu reservoir modeller Berkeley terdepan di era itu. Grímur Björnsson adalah reservoir physicist geothermal yang menghabiskan karirnya di tradisi Islandia — divisi GeoScience Orkustofnun (National Energy Authority Islandia) lalu ISOR (Iceland GeoSurvey) sebagai senior reservoir physicist — spesialis interpretasi well-logging dan numerical modelling field high-temperature Islandia seperti Hengill dan Reykjanes, dengan konsultansi across Filipina, Indonesia, Afrika Timur dan lainnya; dia kemudian mendirikan konsultansi Warm Arctic. Gudmundur S. ("Bo") Bodvarsson (1952–2006) adalah hydrogeologist Islandia-born dan reservoir engineer geothermal di Lawrence Berkeley National Laboratory, tempat dia kerja dari 1980 sampai wafat dan naik jadi Director of the Earth Sciences Division; di 1980-an dia sentral di program reservoir-modelling geothermal LBNL bareng Karsten Pruess (milieu simulator TOUGH), dan dari 1990-an dia mimpin Yucca Mountain unsaturated-zone flow-and-transport modelling. (Dia anak geophysicist Gunnar Bodvarsson — jangan dikelirukan dengan ayahnya.) Survey 1990 mereka mencerminkan persis pasangan itu: field measurement Islandia dikawinkan sama sintesis reservoir-engineering Berkeley.`
    },
    focus: {
      en: `An empirical compilation of measured geothermal reservoir properties across many of the world's fields — permeability, permeability-thickness (kh), porosity, storativity, reservoir temperature and pressure, plus fluid chemistry (dissolved solids, non-condensible gas) — organized so the ranges can serve as prior bounds and sanity checks for reservoir models and well-test interpretation. The recurring lesson: geothermal permeability is enormously variable and fracture-controlled.`,
      id: `Kompilasi empiris dari measured geothermal reservoir property across banyak field di dunia — permeability, permeability-thickness (kh), porosity, storativity, reservoir temperature dan pressure, plus fluid chemistry (dissolved solids, non-condensible gas) — diatur biar range-nya bisa jadi prior bound dan sanity check buat reservoir model dan well-test interpretation. Pelajaran berulang: permeability geothermal sangat variabel dan fracture-controlled.`
    },
    intellectualLineage: {
      en: `Two strands of the geothermal reservoir-engineering world: the Icelandic measurement-and-modelling tradition (Orkustofnun / ISOR / UNU Geothermal Training Programme) that Björnsson comes from, and the Lawrence Berkeley National Laboratory reservoir-simulation school (the TOUGH/iTOUGH lineage around Karsten Pruess) that Bodvarsson helped lead. The survey sits at their intersection — empirical field data assembled in the service of building and bounding numerical reservoir models.`,
      id: `Dua untai dunia reservoir-engineering geothermal: tradisi measurement-and-modelling Islandia (Orkustofnun / ISOR / UNU Geothermal Training Programme) tempat Björnsson berasal, dan sekolah reservoir-simulation Lawrence Berkeley National Laboratory (lineage TOUGH/iTOUGH sekitar Karsten Pruess) yang Bodvarsson bantu mimpin. Survey duduk di persimpangan mereka — empirical field data yang dirakit buat melayani pembangunan dan pem-bound-an numerical reservoir model.`
    },
    keyCollaborators: {
      en: `**Karsten Pruess** and the broader **LBNL Earth Sciences** geothermal group, within which Bodvarsson worked and which produced the TOUGH simulator family his modelling relied on (Bodvarsson also collaborated with Marcelo Lippmann on Cerro Prieto). The **Orkustofnun / ISOR** Icelandic reservoir-physics community and the **UNU Geothermal Training Programme** form Björnsson's side of the network.`,
      id: `**Karsten Pruess** dan grup geothermal **LBNL Earth Sciences** yang lebih luas, tempat Bodvarsson kerja dan yang ngehasilin keluarga simulator TOUGH yang modelling-nya andelin (Bodvarsson juga kolaborasi sama Marcelo Lippmann di Cerro Prieto). Komunitas reservoir-physics Islandia **Orkustofnun / ISOR** dan **UNU Geothermal Training Programme** jadi sisi network Björnsson.`
    },
    legacy: {
      en: `The survey is the empirical reference that reservoir engineers reach for when they need to know whether an assumed or fitted property is reasonable: it assembled measured permeability, kh, porosity, temperature and chemistry across many fields into a picture of what is typical and how widely it varies. A frequently cited observation is that producing fractures within even a single field can span roughly two orders of magnitude in permeability — geothermal permeability is fracture-controlled and not a tidy number, which is precisely why a survey of measured values is useful. The lasting role is as a prior/sanity-check: a model's block permeability or a history-matched kh that falls far outside the surveyed distribution is a flag to re-examine.`,
      id: `Survey ini referensi empiris yang reservoir engineer raih pas mereka perlu tahu apakah property yang diasumsikan atau di-fit itu reasonable: dia ngumpulin measured permeability, kh, porosity, temperature dan chemistry across banyak field jadi gambaran apa yang tipikal dan seberapa lebar variasinya. Observasi yang sering dikutip-nya bahwa producing fracture bahkan dalam satu field bisa span kira-kira dua orders of magnitude di permeability — permeability geothermal fracture-controlled dan bukan angka rapi, persis kenapa survey measured value berguna. Peran yang bertahan itu sebagai prior/sanity-check: block permeability model atau history-matched kh yang jatuh jauh di luar distribusi yang disurvei itu flag buat di-reexamine.`
    },
    keyWorks: [
      { year: 1990, title: `A Survey of Geothermal Reservoir Properties (this item)`, venue: `Geothermics 19(1), 17-27` },
      { year: 1987, title: `East Olkaria Geothermal Field, Kenya. 1. History match with production and pressure decline data (Bodvarsson, Pruess, Stefánsson, Björnsson & Ojiambo; TOUGH-lineage reservoir modelling)`, venue: `Journal of Geophysical Research 92(B1), 521-539` },
      { year: 1999, title: `Yucca Mountain Unsaturated Zone Flow & Transport Model (lead/direction; Bodvarsson)`, venue: `Lawrence Berkeley National Laboratory reports` },
      { year: 2003, title: `Development of a 3-D geothermal reservoir model for the greater Hengill volcano, SW Iceland (Björnsson, co-author)`, venue: `Icelandic high-temperature field studies` },
    ],
  },

  sections: [
    // ─────────────── 1. motivation ───────────────
    {
      id: 'motivation',
      heading: { en: 'Why this matters', id: 'Kenapa ini penting' },
      body: {
        en: `Every reservoir model and every well-test interpretation rests on assumed numbers: a permeability, a porosity, a temperature, a permeability-thickness. The uncomfortable question is always — *is the number I just assumed (or fitted) even reasonable?* A history match can return a permeability that reproduces the data perfectly and is still physically absurd; a well-test analysis can hand you a transmissivity with no sense of whether it is high, low, or typical. You need a reference for what real geothermal reservoirs actually measure.

That is what Björnsson and Bodvarsson's 1990 survey provides. It is not a theory or a method so much as an **empirical stocktaking**: measured permeability, permeability-thickness, porosity, storativity, temperature, pressure and fluid chemistry, assembled across many of the world's geothermal fields into a picture of the typical ranges and — just as important — how widely they vary. The survey's value is as a **prior and a sanity check**: when your model assumes a property, or a history match returns one, you compare it against the surveyed distribution, and an estimate far outside that distribution is a signal to re-examine the data or the model.

The headline finding is a warning against false precision: geothermal permeability is **fracture-controlled and enormously variable** — producing fractures within even a single field can span roughly two orders of magnitude. You cannot assume a tidy value; you have to measure, and you have to expect a wide spread. For a field like the catalog owner's, the survey is the external yardstick against which the field's measured permeability-thickness and porosity can be placed: is this field permeable by world standards, and is a fitted value plausible? **⟦TODO-Az: where Darajat's measured kh/porosity actually sit relative to the surveyed world distribution is yours to supply (site-specific). Prep §9-A, §9-E.⟧**`,
        id: `Tiap reservoir model dan tiap well-test interpretation bersandar di angka yang diasumsikan: sebuah permeability, porosity, temperature, permeability-thickness. Pertanyaan yang gak nyaman selalu — *apakah angka yang barusan aku asumsikan (atau fit) itu bahkan reasonable?* History match bisa balikin permeability yang mereproduksi data sempurna dan tetap absurd secara fisik; well-test analysis bisa nyerahin kamu transmissivity tanpa sense apakah dia tinggi, rendah, atau tipikal. Kamu butuh referensi buat apa yang reservoir geothermal nyata sebenarnya ukur.

Itu yang survey 1990 Björnsson dan Bodvarsson sediain. Dia bukan teori atau metode sebanyak **stocktaking empiris**: measured permeability, permeability-thickness, porosity, storativity, temperature, pressure dan fluid chemistry, dirakit across banyak field geothermal di dunia jadi gambaran range tipikal dan — sama pentingnya — seberapa lebar variasinya. Nilai survey itu sebagai **prior dan sanity check**: pas model kamu mengasumsikan property, atau history match balikin satu, kamu bandingin lawan distribusi yang disurvei, dan estimasi jauh di luar distribusi itu sinyal buat re-examine data atau model.

Temuan headline-nya peringatan lawan false precision: permeability geothermal itu **fracture-controlled dan sangat variabel** — producing fracture bahkan dalam satu field bisa span kira-kira dua orders of magnitude. Kamu gak bisa mengasumsikan angka rapi; kamu harus ukur, dan kamu harus expect spread lebar. Buat field seperti punya owner katalog, survey ini yardstick eksternal yang permeability-thickness dan porosity terukur field bisa ditempatkan terhadapnya: apakah field ini permeabel menurut standar dunia, dan apakah nilai yang di-fit plausibel? **⟦TODO-Az: di mana kh/porosity terukur Darajat sebenarnya duduk relatif ke distribusi dunia yang disurvei itu punya kamu buat sediain (site-specific). Prep §9-A, §9-E.⟧**`
      }
    },

    // ─────────────── 2. intuition ───────────────
    {
      id: 'intuition',
      heading: { en: 'Intuition', id: 'Intuisi' },
      body: {
        en: `Two ideas make the survey make sense.

**You measure kh, not k and h.** A pressure-transient (well) test does not resolve the intrinsic permeability $k$ and the productive thickness $h$ separately — what it actually determines is their *product*, the permeability-thickness $kh$ (often quoted in Darcy-metres). That is why $kh$, not $k$, is the field-comparable reservoir parameter and the one the survey tabulates: it is what every field's well tests can report on a common footing. Transmissivity is just $kh$ divided by the fluid viscosity (the mobility-thickness that actually sets flow rate). A rough survey-era rule of thumb is that a field becomes commercially interesting when its transmissivity exceeds something like ten Darcy-metres.

**Permeability is fracture-controlled and spans orders of magnitude.** This is the survey's deepest lesson and the reason it exists. In most geothermal reservoirs the flow does not travel through the rock matrix — matrix porosity is low (commonly only a few up to the low teens of percent) and matrix permeability is tiny. The flow travels through *fractures*, and fracture permeability is wildly variable: producing fractures within a single field can differ by ~100× (two orders of magnitude), and across different fields the spread is larger still. So there is no single "geothermal permeability" to assume — which is exactly why an empirical survey of measured values is the right tool: it tells you the distribution, not a point value.

Put together, these two ideas explain the survey's use. Because permeability is so variable, you cannot derive a field's properties from first principles — you must measure ($kh$ from well tests) and then *place* the measurement in the world distribution to judge it. A fitted $kh$ inside the surveyed range is plausible; one far outside is a flag.`,
        id: `Dua ide ngebikin survey masuk akal.

**Kamu ngukur kh, bukan k dan h.** Pressure-transient (well) test gak ngeresolve intrinsic permeability $k$ dan productive thickness $h$ secara terpisah — yang dia sebenarnya tentuin itu *produk* mereka, permeability-thickness $kh$ (sering di-quote dalam Darcy-meter). Itu kenapa $kh$, bukan $k$, yang jadi reservoir parameter field-comparable dan yang survey tabulasi: dia yang well test tiap field bisa report di pijakan bersama. Transmissivity itu cuma $kh$ dibagi fluid viscosity (mobility-thickness yang sebenarnya nge-set flow rate). Rule of thumb era-survey kasar bahwa field jadi commercially interesting pas transmissivity-nya lewat sekitar sepuluh Darcy-meter.

**Permeability fracture-controlled dan span orders of magnitude.** Ini pelajaran terdalam survey dan alasan dia ada. Di kebanyakan reservoir geothermal flow gak jalan lewat rock matrix — matrix porosity rendah (biasanya cuma beberapa sampai belasan persen) dan matrix permeability kecil. Flow jalan lewat *fracture*, dan fracture permeability sangat variabel: producing fracture dalam satu field bisa beda ~100× (dua orders of magnitude), dan across field berbeda spread-nya lebih besar lagi. Jadi gak ada "geothermal permeability" tunggal buat diasumsikan — persis kenapa empirical survey measured value itu tool yang benar: dia ngasih tau distribusi, bukan point value.

Digabung, dua ide ini ngejelasin penggunaan survey. Karena permeability begitu variabel, kamu gak bisa nurunin property field dari first principles — kamu harus ukur ($kh$ dari well test) lalu *tempatkan* measurement di distribusi dunia buat menilainya. $kh$ yang di-fit di dalam range yang disurvei itu plausibel; yang jauh di luar itu flag.`
      }
    },

    // ─────────────── 3. formalization ───────────────
    {
      id: 'formalization',
      heading: { en: 'The measured quantities', id: 'Kuantitas yang diukur' },
      body: {
        en: `**Permeability-thickness and transmissivity.** The directly measurable reservoir parameter from a well test is the permeability-thickness product,

$$kh \\quad [\\mathrm{D\\cdot m}], \\qquad 1\\ \\mathrm{D} \\approx 9.87\\times10^{-13}\\ \\mathrm{m}^2$$

Transmissivity is $kh$ scaled by the fluid mobility — $T = kh/\\mu$ (or, as a hydraulic transmissivity, $T_h = kh\\,\\rho g/\\mu$, units m²/s). The survey tabulates $kh$ because a pressure-transient test resolves the product, not $k$ and $h$ separately, so $kh$ is the quantity every field can report comparably. A common survey-era economic threshold is

$$kh \\gtrsim 10\\ \\mathrm{D\\cdot m}$$

for a commercially interesting field.

**Productivity scales with kh.** Steady radial (Darcy) inflow makes the productivity index proportional to $kh$:

$$PI = \\frac{2\\pi\\,kh}{\\mu\\,[\\ln(r_e/r_w) + s]}$$

so, at equal drawdown and geometry, well productivity is *linear* in $kh$. This is the bridge from the surveyed property to deliverability: the two-orders-of-magnitude spread in $kh$ across producing fractures translates directly into a ~100× spread in well output. This radial-Darcy PI is the liquid form; a dry-steam well's inflow is compressible (pressure-squared) and often non-Darcy, so the linear-in-$kh$ scaling is an order-of-magnitude guide, not an exact relation — see the Acuña module for the precise compressible form.

**Porosity and storativity.** Matrix porosity is typically low–moderate, but effective flow is carried by low-volume fracture porosity; the storativity (storage per unit pressure drop) is small for single-phase liquid and large once two-phase/boiling conditions develop (the Grant-Bixley storage point). The survey records these as additional per-field parameters, along with fluid chemistry (dissolved solids, non-condensible gas).

**Using ranges as priors / sanity checks.** The operational point is simple: a surveyed distribution turns an assumed or fitted property into a *testable* claim. Place your $kh$, porosity, or temperature on the survey's range; if it sits inside, it is plausible; if it falls far outside, the data, the test interpretation, or the model needs another look.`,
        id: `**Permeability-thickness dan transmissivity.** Reservoir parameter yang langsung terukur dari well test itu produk permeability-thickness,

$$kh \\quad [\\mathrm{D\\cdot m}], \\qquad 1\\ \\mathrm{D} \\approx 9.87\\times10^{-13}\\ \\mathrm{m}^2$$

Transmissivity itu $kh$ di-scale sama fluid mobility — $T = kh/\\mu$ (atau, sebagai hydraulic transmissivity, $T_h = kh\\,\\rho g/\\mu$, unit m²/s). Survey nge-tabulasi $kh$ karena pressure-transient test ngeresolve produk-nya, bukan $k$ dan $h$ terpisah, jadi $kh$ kuantitas yang tiap field bisa report comparably. Threshold ekonomi era-survey yang umum

$$kh \\gtrsim 10\\ \\mathrm{D\\cdot m}$$

buat field yang commercially interesting.

**Productivity scale sama kh.** Steady radial (Darcy) inflow ngebikin productivity index proporsional ke $kh$:

$$PI = \\frac{2\\pi\\,kh}{\\mu\\,[\\ln(r_e/r_w) + s]}$$

jadi, di drawdown dan geometry yang sama, well productivity itu *linear* di $kh$. Ini jembatan dari surveyed property ke deliverability: spread dua-orders-of-magnitude di $kh$ across producing fracture translate langsung jadi spread ~100× di well output. Radial-Darcy PI ini bentuk liquid; inflow dry-steam well compressible (pressure-squared) dan sering non-Darcy, jadi scaling linear-di-$kh$ itu panduan order-of-magnitude, bukan relasi eksak — lihat module Acuña buat bentuk compressible yang presisi.

**Porosity dan storativity.** Matrix porosity biasanya rendah–moderat, tapi effective flow dibawa low-volume fracture porosity; storativity (storage per unit pressure drop) kecil buat single-phase liquid dan besar begitu kondisi two-phase/boiling berkembang (poin storage Grant-Bixley). Survey nge-record ini sebagai parameter per-field tambahan, bareng fluid chemistry (dissolved solids, non-condensible gas).

**Pake range sebagai prior / sanity check.** Poin operasionalnya sederhana: distribusi yang disurvei ngubah property yang diasumsikan atau di-fit jadi klaim yang *testable*. Tempatkan $kh$, porosity, atau temperature kamu di range survey; kalau dia duduk di dalam, dia plausibel; kalau jatuh jauh di luar, data, test interpretation, atau model butuh dilihat lagi.`
      }
    },

    // ─────────────── 4. worked-example ───────────────
    {
      id: 'worked-example',
      heading: { en: 'Worked example', id: 'Contoh kerjaan' },
      body: {
        en: `**Example 1 — sanity-check a fitted permeability-thickness (dry-steam-safe).** A TOUGH2 history match of a field returns a near-well permeability-thickness of $kh \\approx 40$ D·m. Is that plausible? Place it on the surveyed picture: productive geothermal reservoirs broadly run from roughly the single-Darcy-metre level up to ~100+ D·m, with the commercial threshold around $kh \\gtrsim 10$ D·m. A fitted $kh$ of 40 D·m sits comfortably inside that range and well above the threshold — it is plausible and consistent with a productive field, so the history match passes this check. By contrast, if the match had returned $kh \\approx 0.1$ D·m (below the economic threshold), that is a flag: either the field really is marginal, or the data/interpretation/model needs another look. The survey turns "is my number reasonable?" into a concrete comparison against measured reality. **⟦TODO-Az: where Darajat's own kh actually sits relative to this range is yours to supply (site-specific). Prep §9-E.⟧**

**Example 2 — what the spread means for well output (dry-steam caveat).** Because steady radial productivity is linear in $kh$ ($PI = 2\\pi kh / [\\mu(\\ln(r_e/r_w)+s)]$), the survey's two-orders-of-magnitude permeability spread translates directly into well output. Take two wells in the same field with the same drawdown, geometry and skin, one intersecting a fracture zone with $kh = 60$ D·m and the other $kh = 6$ D·m:

$$\\frac{PI_A}{PI_B} = \\frac{kh_A}{kh_B} = \\frac{60}{6} = 10$$

— a tenfold difference in deliverability from the same field, purely from where each well happened to cut the fracture network. That is why two wells metres apart can perform completely differently, and why the survey insists permeability is fracture-controlled rather than a field-wide constant. The caveat for a dry-steam field: the inflow there is compressible (pressure-squared, gas-pipeline-like) and often non-Darcy, so this linear-in-$kh$ ratio is an order-of-magnitude guide, not an exact law — the dry-steam deliverability framework (Acuña) is the precise tool. **⟦TODO-Az: confirm the dry-steam productivity-vs-kh relation against Darajat experience (site-specific). Prep §9-E.⟧**`,
        id: `**Contoh 1 — sanity-check permeability-thickness yang di-fit (dry-steam-safe).** History match TOUGH2 sebuah field balikin near-well permeability-thickness $kh \\approx 40$ D·m. Apakah plausibel? Tempatkan di gambaran yang disurvei: reservoir geothermal produktif kira-kira berkisar dari level single-Darcy-meter sampai ~100+ D·m, dengan threshold komersial sekitar $kh \\gtrsim 10$ D·m. $kh$ yang di-fit 40 D·m duduk nyaman di dalam range itu dan jauh di atas threshold — dia plausibel dan konsisten sama field produktif, jadi history match lolos check ini. Sebaliknya, kalau match balikin $kh \\approx 0.1$ D·m (di bawah threshold ekonomi), itu flag: entah field-nya beneran marginal, atau data/interpretation/model butuh dilihat lagi. Survey ngubah "apakah angkaku reasonable?" jadi perbandingan konkret lawan measured reality. **⟦TODO-Az: di mana kh Darajat sendiri sebenarnya duduk relatif ke range ini itu punya kamu buat sediain (site-specific). Prep §9-E.⟧**

**Contoh 2 — apa arti spread buat well output (caveat dry-steam).** Karena steady radial productivity linear di $kh$ ($PI = 2\\pi kh / [\\mu(\\ln(r_e/r_w)+s)]$), spread permeability dua-orders-of-magnitude survey translate langsung jadi well output. Ambil dua sumur di field yang sama dengan drawdown, geometry dan skin yang sama, satu motong fracture zone dengan $kh = 60$ D·m dan satunya $kh = 6$ D·m:

$$\\frac{PI_A}{PI_B} = \\frac{kh_A}{kh_B} = \\frac{60}{6} = 10$$

— perbedaan sepuluh kali lipat di deliverability dari field yang sama, murni dari di mana tiap sumur kebetulan motong fracture network. Itu kenapa dua sumur berjarak beberapa meter bisa perform sama sekali beda, dan kenapa survey bersikeras permeability fracture-controlled bukan konstanta field-wide. Caveat buat field dry-steam: inflow di situ compressible (pressure-squared, gas-pipeline-like) dan sering non-Darcy, jadi rasio linear-di-$kh$ ini panduan order-of-magnitude, bukan hukum eksak — framework deliverability dry-steam (Acuña) itu tool yang presisi. **⟦TODO-Az: konfirmasi relasi productivity-vs-kh dry-steam lawan pengalaman Darajat (site-specific). Prep §9-E.⟧**`
      }
    },

    // ─────────────── 5. applications ───────────────
    {
      id: 'applications',
      heading: { en: 'Applications by audience', id: 'Aplikasi per audience' },
      body: {
        en: `### For the advanced researcher

The survey is the empirical grounding for **priors in inverse modelling**: when iTOUGH2 (or any history-matching tool) estimates block permeabilities, the surveyed distribution supplies the plausible prior range that keeps the optimizer from wandering into physically absurd values, and the basis for a Bayesian or regularized treatment. The deeper research thread is **fracture characterization** — because the survey shows permeability is fracture-controlled and orders-of-magnitude variable, the live questions are how to represent that statistically (geostatistics, discrete-fracture networks) rather than as a homogeneous block value.

### For the reservoir engineer

Two daily uses. First, **sanity-check every fitted or assumed property**: a history-matched $kh$, a well-test transmissivity, an assumed porosity — place each on the surveyed range before trusting it. Second, **set productivity expectations**: since $PI$ is roughly linear in $kh$, the surveyed range tells you the spread of well output to expect, and a well far below the field norm is a candidate for stimulation or a sign it missed the fracture network. For a dry-steam field, the property ranges are still the yardstick, but read deliverability through the compressible (Acuña) relation rather than the linear-Darcy one. **⟦TODO-Az: supply where Darajat's measured kh/porosity sit relative to the survey (site-specific); and confirm the survey itself tabulates vapour-dominated fields — its abstract lists the surveyed parameters but does not break them out by system type, and the paper's tables were not recoverable. Prep §9-E.⟧**

### For management / resource screening

At the screening stage the survey answers a blunt question: *is this prospect permeable enough to be commercial?* The transmissivity threshold (around ten Darcy-metres) and the world distribution of measured $kh$ let a non-specialist judge whether early well-test results put a field in the productive population or below it — a first-order go/no-go input that complements the conceptual-model capacity estimate. The survey is the empirical reality check on optimistic resource assumptions.`,
        id: `### Untuk advanced researcher

Survey ini grounding empiris buat **prior di inverse modelling**: pas iTOUGH2 (atau tool history-matching apapun) nge-estimasi block permeability, distribusi yang disurvei nyediain plausible prior range yang njaga optimizer dari nyasar ke nilai absurd secara fisik, dan basis buat treatment Bayesian atau regularized. Thread riset lebih dalam itu **fracture characterization** — karena survey nunjukin permeability fracture-controlled dan variabel orders-of-magnitude, pertanyaan hidupnya gimana ngerepresentasiin itu secara statistik (geostatistics, discrete-fracture network) daripada sebagai homogeneous block value.

### Untuk reservoir engineer

Dua penggunaan harian. Pertama, **sanity-check tiap property yang di-fit atau diasumsikan**: $kh$ yang history-matched, transmissivity well-test, porosity yang diasumsikan — tempatkan masing-masing di range yang disurvei sebelum mempercayainya. Kedua, **set ekspektasi productivity**: karena $PI$ kira-kira linear di $kh$, range yang disurvei ngasih tau spread well output yang di-expect, dan sumur jauh di bawah norma field itu kandidat buat stimulasi atau tanda dia miss fracture network. Buat field dry-steam, range property tetap yardstick, tapi baca deliverability lewat relasi compressible (Acuña) daripada linear-Darcy. **⟦TODO-Az: sediain di mana kh/porosity terukur Darajat duduk relatif ke survey (site-specific); dan konfirmasi survey-nya sendiri nge-tabulasi field vapour-dominated — abstract-nya nyebut parameter yang disurvei tapi gak misah per tipe sistem, dan tabel paper-nya gak bisa di-recover. Prep §9-E.⟧**

### Untuk manajemen / resource screening

Di tahap screening survey jawab pertanyaan tumpul: *apakah prospect ini cukup permeabel buat komersial?* Threshold transmissivity (sekitar sepuluh Darcy-meter) dan distribusi dunia $kh$ terukur ngebikin non-spesialis bisa menilai apakah hasil well-test awal naruh field di populasi produktif atau di bawahnya — input go/no-go orde-pertama yang melengkapi estimasi kapasitas conceptual-model. Survey itu reality check empiris lawan asumsi sumber daya yang optimistik.`
      }
    },

    // ─────────────── 6. practice ───────────────
    {
      id: 'practice',
      heading: { en: 'Practice', id: 'Latihan' },
      body: {
        en: `**1.** A well test reports a permeability-thickness of $kh = 25$ D·m. Using the survey-era commercial rule of thumb ($kh \\gtrsim 10$ D·m), is this interval likely to be commercially interesting on this basis — and name the other reservoir properties you would still want before judging the resource.

<details><summary>Answer</summary>
On this basis yes: $kh = 25$ D·m is above the ~10 D·m commercial rule of thumb, so the interval is permeable enough to be of commercial interest — but that is only one input. Before judging the resource you would still want, at least, the reservoir temperature/enthalpy (a permeable but lukewarm zone is not a power resource), the fluid chemistry (scaling/corrosion potential, non-condensible gas), and the reservoir pressure and storativity (how much can be produced sustainably); and you would treat this single $kh$ cautiously given the order-of-magnitude well-to-well variability the survey documents. Permeability alone does not make a resource.
</details>

**2.** Two wells in one field, same drawdown and geometry, intersect fracture zones with $kh = 80$ D·m and $kh = 20$ D·m respectively. Estimate the ratio of their productivity indices, and state the assumption that makes the estimate only order-of-magnitude for a dry-steam well.

<details><summary>Answer</summary>
Steady radial productivity is linear in $kh$: $PI = 2\\pi kh/[\\mu(\\ln(r_e/r_w)+s)]$, so with the same drawdown, geometry and skin, $PI_A/PI_B = kh_A/kh_B = 80/20 = 4$ — the first well is about four times as productive, purely from cutting a more permeable fracture zone. The assumption is *liquid, Darcy (pressure-linear) radial inflow*. A dry-steam well's inflow is compressible (pressure-squared) and often non-Darcy (turbulent skin), so the linear-in-$kh$ proportionality is only an order-of-magnitude guide there; the Acuña $C_{WB}/PI$ framework is the precise dry-steam relation.
</details>

**3.** Why does the survey emphasize that geothermal permeability is "fracture-controlled," and what does that imply about assuming a single permeability value for a field?

<details><summary>Answer</summary>
In most geothermal reservoirs the matrix permeability is too low to carry economic flow; the flow travels through fractures, and fracture permeability is set by the local fracture density, aperture and connectivity — which vary enormously from place to place. The survey found that producing fractures within even a single field can span roughly two orders of magnitude in permeability. The implication is that there is no meaningful single field-wide permeability to assume: a value is a property of *where you drilled into the fracture network*, not of the field as a whole. Modelling and well-targeting must therefore treat permeability as a spatially variable, fracture-controlled quantity (hence the value of a measured-distribution survey), and expect wide well-to-well variation.
</details>

**4.** A history match of a producing field returns a block permeability-thickness of $kh = 0.2$ D·m for the main reservoir. Using the survey as a sanity check, what should you conclude, and what are the two broad explanations?

<details><summary>Answer</summary>
$kh = 0.2$ D·m is well below the ~10 D·m commercial threshold and near the low end of (or below) the surveyed range for *productive* reservoirs — yet the field is producing, so the fitted value is suspect. The sanity check flags a contradiction. The two broad explanations: (1) the value is real but local — the block is genuinely tight and the field produces through other, more permeable blocks/fractures the model is lumping or mis-assigning (a model-resolution/parameterization issue); or (2) the fit is wrong — the history match has compensated for some other error (boundary condition, storativity, recharge) by driving permeability to an unphysical value (a non-uniqueness/over-fitting issue). Either way the survey comparison is doing its job: an estimate far outside the measured world distribution is a signal to re-examine the data, the test interpretation, or the model rather than to trust the number.
</details>`,
        id: `**1.** Sebuah well test ngelaporin permeability-thickness $kh = 25$ D·m. Pake rule of thumb komersial era-survey ($kh \\gtrsim 10$ D·m), apakah interval ini kemungkinan commercially interesting atas dasar ini — dan sebutkan property reservoir lain yang kamu masih mau sebelum menilai sumber daya.

<details><summary>Jawaban</summary>
Atas dasar ini ya: $kh = 25$ D·m di atas rule of thumb komersial ~10 D·m, jadi interval-nya cukup permeabel buat commercial interest — tapi itu cuma satu input. Sebelum menilai sumber daya kamu masih mau, setidaknya, reservoir temperature/enthalpy (zona permeabel tapi suam-suam kuku bukan power resource), fluid chemistry (potensi scaling/corrosion, non-condensible gas), dan reservoir pressure dan storativity (berapa banyak bisa diproduksi sustainable); dan kamu bakal perlakuin $kh$ tunggal ini hati-hati mengingat variabilitas well-to-well order-of-magnitude yang survey dokumenin. Permeability sendiri gak bikin sumber daya.
</details>

**2.** Dua sumur di satu field, drawdown dan geometry sama, motong fracture zone dengan $kh = 80$ D·m dan $kh = 20$ D·m masing-masing. Estimasi rasio productivity index mereka, dan nyatain asumsi yang ngebikin estimasi cuma order-of-magnitude buat dry-steam well.

<details><summary>Jawaban</summary>
Steady radial productivity linear di $kh$: $PI = 2\\pi kh/[\\mu(\\ln(r_e/r_w)+s)]$, jadi dengan drawdown, geometry dan skin yang sama, $PI_A/PI_B = kh_A/kh_B = 80/20 = 4$ — sumur pertama kira-kira empat kali lebih produktif, murni dari motong fracture zone yang lebih permeabel. Asumsinya *liquid, Darcy (pressure-linear) radial inflow*. Inflow dry-steam well compressible (pressure-squared) dan sering non-Darcy (turbulent skin), jadi proporsionalitas linear-di-$kh$ cuma panduan order-of-magnitude di situ; framework Acuña $C_{WB}/PI$ itu relasi dry-steam yang presisi.
</details>

**3.** Kenapa survey nekanin bahwa permeability geothermal itu "fracture-controlled," dan apa implikasinya buat mengasumsikan satu nilai permeability buat sebuah field?

<details><summary>Jawaban</summary>
Di kebanyakan reservoir geothermal matrix permeability terlalu rendah buat ngebawa economic flow; flow jalan lewat fracture, dan fracture permeability di-set sama fracture density, aperture dan connectivity lokal — yang varian sangat besar dari tempat ke tempat. Survey nemu producing fracture bahkan dalam satu field bisa span kira-kira dua orders of magnitude di permeability. Implikasinya gak ada single field-wide permeability yang meaningful buat diasumsikan: sebuah nilai itu property *di mana kamu ngebor ke fracture network*, bukan property field secara keseluruhan. Modelling dan well-targeting karena itu harus perlakuin permeability sebagai kuantitas variabel-spasial, fracture-controlled (makanya survey measured-distribution berharga), dan expect variasi well-to-well lebar.
</details>

**4.** History match field produktif balikin block permeability-thickness $kh = 0.2$ D·m buat reservoir utama. Pake survey sebagai sanity check, apa yang harus kamu simpulin, dan apa dua penjelasan luasnya?

<details><summary>Jawaban</summary>
$kh = 0.2$ D·m jauh di bawah threshold komersial ~10 D·m dan dekat ujung bawah (atau di bawah) range yang disurvei buat reservoir *produktif* — padahal field-nya produksi, jadi nilai yang di-fit mencurigakan. Sanity check nge-flag kontradiksi. Dua penjelasan luas: (1) nilai-nya real tapi lokal — block-nya beneran ketat dan field produksi lewat block/fracture lain yang lebih permeabel yang model lump atau mis-assign (isu model-resolution/parameterization); atau (2) fit-nya salah — history match udah ngompensasi error lain (boundary condition, storativity, recharge) dengan ndorong permeability ke nilai unphysical (isu non-uniqueness/over-fitting). Apapun caranya, perbandingan survey ngelakuin tugasnya: estimasi jauh di luar distribusi dunia terukur itu sinyal buat re-examine data, test interpretation, atau model daripada mempercayai angka.
</details>`
      }
    },

    // ─────────────── 7. connections ───────────────
    {
      id: 'connections',
      heading: { en: 'Connections', id: 'Koneksi' },
      body: {
        en: `- **Prereq**: [Grant & Bixley 2011](item:grant-bixley-2011) — the reservoir-engineering text whose lumped-model and well-test property assumptions this survey's empirical ranges sanity-check. Read the methods first, then use the survey to bound them.
- **Property bounds for**: [O'Sullivan-Pruess-Lippmann 2001](item:osullivan-pruess-lippmann-2001) — the surveyed permeability/porosity/temperature ranges are the prior bounds for the rock properties assigned to numerical-simulator grid blocks and the sanity check on history-matched estimates (Bodvarsson worked squarely in that TOUGH2 reservoir-modelling world).
- **Plausibility check for**: [Acuña 2008](item:acuna-2008) — a fitted Acuña productivity index $PI$ implies a permeability-thickness ($PI \\propto kh$); the surveyed $kh$ range is the check on whether that implied $kh$ is physical. **⟦TODO-Az: this cross-link is not yet in the catalog graph — an optional addition. Prep §9-D.⟧**
- **Property priors for**: [Cumming 2009](item:cumming-2009) — the conceptual model's permeability/temperature assumptions draw on the same kind of measured-range priors (distinct from Cumming's own power-density capacity dataset). **⟦TODO-Az: also not yet wired. Prep §9-D.⟧**`,
        id: `- **Prereq**: [Grant & Bixley 2011](item:grant-bixley-2011) — teks reservoir-engineering yang asumsi property lumped-model dan well-test-nya range empiris survey ini sanity-check. Baca metode-nya dulu, lalu pake survey buat nge-bound mereka.
- **Property bound buat**: [O'Sullivan-Pruess-Lippmann 2001](item:osullivan-pruess-lippmann-2001) — range permeability/porosity/temperature yang disurvei itu prior bound buat rock property yang di-assign ke grid block numerical-simulator dan sanity check buat estimasi history-matched (Bodvarsson kerja persis di dunia reservoir-modelling TOUGH2 itu).
- **Plausibility check buat**: [Acuña 2008](item:acuna-2008) — Acuña productivity index $PI$ yang di-fit mengimplikasikan permeability-thickness ($PI \\propto kh$); range $kh$ yang disurvei itu check apakah $kh$ yang diimplikasikan itu fisik. **⟦TODO-Az: cross-link ini belum di catalog graph — tambahan opsional. Prep §9-D.⟧**
- **Property prior buat**: [Cumming 2009](item:cumming-2009) — asumsi permeability/temperature conceptual model narik dari jenis prior measured-range yang sama (distinct dari dataset power-density capacity Cumming sendiri). **⟦TODO-Az: juga belum di-wire. Prep §9-D.⟧**`
      }
    },

    // ─────────────── 8. sources ───────────────
    {
      id: 'sources',
      heading: { en: 'Sources', id: 'Sumber' },
      body: {
        en: `- **Björnsson, G., and Bodvarsson, G. S.** (1990). "A Survey of Geothermal Reservoir Properties." *Geothermics*, 19(1), 17-27. The empirical compilation of measured reservoir properties across world geothermal fields. **(This item.)**
- **Grant, M. A., and Bixley, P. F.** (2011). *Geothermal Reservoir Engineering*, 2nd ed. Academic Press / Elsevier. The reservoir-engineering methods (well testing, lumped models) whose property assumptions this survey bounds; the declared prerequisite.
- **O'Sullivan, M. J., Pruess, K., and Lippmann, M. J.** (2001). "State of the art of geothermal reservoir simulation." *Geothermics*, 30(4), 395-429. The numerical-simulation context in which surveyed property ranges serve as block-property priors.`,
        id: `- **Björnsson, G., dan Bodvarsson, G. S.** (1990). "A Survey of Geothermal Reservoir Properties." *Geothermics*, 19(1), 17-27. Kompilasi empiris dari measured reservoir property across field geothermal dunia. **(Item ini.)**
- **Grant, M. A., dan Bixley, P. F.** (2011). *Geothermal Reservoir Engineering*, 2nd ed. Academic Press / Elsevier. Metode reservoir-engineering (well testing, lumped model) yang asumsi property-nya survey ini bound; prerequisite yang dideklarasikan.
- **O'Sullivan, M. J., Pruess, K., dan Lippmann, M. J.** (2001). "State of the art of geothermal reservoir simulation." *Geothermics*, 30(4), 395-429. Konteks numerical-simulation di mana range property yang disurvei jadi block-property prior.`
      }
    },
  ],

  audio: { enabled: true },

  selfTest: [
    {
      sectionId: 'intuition',
      question: {
        en: 'A pressure-transient well test gives you a permeability-thickness kh, not k and h separately. Why is kh (rather than the intrinsic permeability k) the parameter the survey tabulates and the one that is field-comparable?',
        id: 'Pressure-transient well test ngasih kamu permeability-thickness kh, bukan k dan h terpisah. Kenapa kh (daripada intrinsic permeability k) yang jadi parameter yang survey tabulasi dan yang field-comparable?'
      },
      prompt: { en: 'Before continuing, try answering:', id: 'Sebelum lanjut, coba jawab:' },
      answer: {
        en: 'A pressure-transient test measures how the reservoir pressure responds to a flow rate, and the response is governed by the product of permeability and the flowing thickness — the permeability-thickness kh (equivalently the transmissivity kh/μ). The test cannot separate a thin, very permeable feed zone from a thick, less permeable one if they give the same kh; only the product is resolved. So kh is the quantity the measurement actually delivers, and it is the same quantity every field can report from its own well tests — making it field-comparable in a way that k alone is not (reporting k would require independently knowing the productive thickness, which the test does not give). That is why the survey compiles kh across fields: it is the directly measured, common-footing reservoir parameter.',
        id: 'Pressure-transient test ngukur gimana reservoir pressure merespon flow rate, dan respon-nya diatur produk permeability dan flowing thickness — permeability-thickness kh (ekuivalen transmissivity kh/μ). Test gak bisa misah feed zone tipis-sangat-permeabel dari yang tebal-kurang-permeabel kalau mereka ngasih kh yang sama; cuma produk-nya yang ke-resolve. Jadi kh kuantitas yang measurement sebenarnya kasih, dan dia kuantitas sama yang tiap field bisa report dari well test-nya sendiri — bikin dia field-comparable dengan cara yang k sendiri enggak (ngelaporin k bakal butuh tahu productive thickness secara independen, yang test gak kasih). Itu kenapa survey ngumpulin kh across field: dia reservoir parameter yang langsung terukur, common-footing.'
      }
    },
    {
      sectionId: 'formalization',
      question: {
        en: 'The steady radial productivity index is PI = 2πkh/[μ(ln(r_e/r_w)+s)]. Use the linearity in kh to explain how the survey\'s two-orders-of-magnitude permeability spread shows up in well output, and why this is only an order-of-magnitude guide for a dry-steam well.',
        id: 'Steady radial productivity index PI = 2πkh/[μ(ln(r_e/r_w)+s)]. Pake linearitas di kh buat jelasin gimana spread permeability dua-orders-of-magnitude survey muncul di well output, dan kenapa ini cuma panduan order-of-magnitude buat dry-steam well.'
      },
      prompt: { en: 'Before continuing, try answering:', id: 'Sebelum lanjut, coba jawab:' },
      answer: {
        en: 'In the radial-Darcy expression PI is directly proportional to kh (everything else — viscosity, the ln(r_e/r_w) geometry term, skin — being equal). So for two wells with the same drawdown and geometry, the ratio of their productivity indices equals the ratio of their kh values. If surveyed producing fractures span two orders of magnitude in permeability (and hence kh), then well output spans the same ~100× range: the best-placed well can out-deliver the worst by about a hundredfold, purely from where each cut the fracture network. That directly links the survey\'s headline finding (fracture-controlled, hugely variable permeability) to the practical reality of wildly different well productivities in one field. The dry-steam caveat: this proportionality assumes liquid, pressure-linear Darcy inflow. A dry-steam well\'s inflow is compressible — driven by the difference of squared pressures, gas-pipeline-like — and often non-Darcy (turbulent near-well skin), so PI is not simply linear in kh there. The linear-in-kh ratio remains a useful order-of-magnitude guide, but the precise dry-steam relation is the compressible C_WB/PI deliverability framework (Acuña), not the radial-Darcy PI.',
        id: 'Di ekspresi radial-Darcy PI proporsional langsung ke kh (semua yang lain — viscosity, term geometry ln(r_e/r_w), skin — sama). Jadi buat dua sumur dengan drawdown dan geometry sama, rasio productivity index mereka sama dengan rasio nilai kh mereka. Kalau producing fracture yang disurvei span dua orders of magnitude di permeability (dan jadi kh), maka well output span range ~100× yang sama: sumur yang paling baik-ditempatkan bisa out-deliver yang terburuk sekitar seratus kali lipat, murni dari di mana masing-masing motong fracture network. Itu langsung ngehubungin temuan headline survey (permeability fracture-controlled, sangat variabel) ke realitas praktis productivity sumur yang sangat berbeda dalam satu field. Caveat dry-steam: proporsionalitas ini mengasumsikan liquid, pressure-linear Darcy inflow. Inflow dry-steam well compressible — di-drive selisih pressure kuadrat, gas-pipeline-like — dan sering non-Darcy (turbulent near-well skin), jadi PI gak sekadar linear di kh di situ. Rasio linear-di-kh tetap panduan order-of-magnitude yang berguna, tapi relasi dry-steam presisi itu framework deliverability compressible C_WB/PI (Acuña), bukan radial-Darcy PI.'
      }
    },
    {
      sectionId: 'worked-example',
      question: {
        en: 'A TOUGH2 history match of a producing field returns a near-well kh ≈ 40 D·m. Using the surveyed picture, why does this value pass the sanity check — and what would have made you flag it instead?',
        id: 'History match TOUGH2 field produktif balikin near-well kh ≈ 40 D·m. Pake gambaran yang disurvei, kenapa nilai ini lolos sanity check — dan apa yang bakal bikin kamu nge-flag-nya?'
      },
      prompt: { en: 'Before continuing, try answering:', id: 'Sebelum lanjut, coba jawab:' },
      answer: {
        en: 'A fitted kh ≈ 40 D·m sits comfortably inside the broad measured range of productive geothermal reservoirs (roughly the single-Darcy-metre level up to ~100+ D·m) and well above the survey-era commercial rule of thumb of about 10 D·m — so it is plausible and consistent with a producing field, and the history match passes this sanity check. What would have flagged it instead is a fitted kh far outside that picture: in particular a value well below the ~10 D·m rule of thumb (say a fraction of a Darcy-metre) for a field that is nonetheless producing, which is internally contradictory and signals that either the field is genuinely marginal or the data, the test interpretation, or the model needs another look. The survey turns "is my number reasonable?" into a concrete comparison against the measured world distribution. (The ~1–100 D·m productive range and the ~10 D·m commercial rule of thumb are typical values from the geothermal reservoir-engineering literature; where a specific field actually sits is the site-specific input.)',
        id: 'kh ≈ 40 D·m yang di-fit duduk nyaman di dalam range terukur luas reservoir geothermal produktif (kira-kira level single-Darcy-meter sampai ~100+ D·m) dan jauh di atas rule of thumb komersial era-survey sekitar 10 D·m — jadi dia plausibel dan konsisten sama field produktif, dan history match lolos sanity check ini. Yang bakal nge-flag-nya itu kh yang di-fit jauh di luar gambaran itu: khususnya nilai jauh di bawah rule of thumb ~10 D·m (misalnya sepersekian Darcy-meter) buat field yang tetap produksi, yang kontradiktif secara internal dan nandain entah field-nya beneran marginal atau data, test interpretation, atau model butuh dilihat lagi. Survey ngubah "apakah angkaku reasonable?" jadi perbandingan konkret lawan distribusi dunia terukur. (Range produktif ~1–100 D·m dan rule of thumb komersial ~10 D·m itu nilai tipikal dari literatur reservoir-engineering geothermal; di mana field tertentu sebenarnya duduk itu input site-specific.)'
      }
    },
    {
      sectionId: 'applications',
      question: {
        en: 'At the resource-screening stage, how does an empirical property survey complement a conceptual-model capacity estimate, and what blunt question does the transmissivity threshold help answer?',
        id: 'Di tahap resource-screening, gimana empirical property survey melengkapi estimasi kapasitas conceptual-model, dan pertanyaan tumpul apa yang threshold transmissivity bantu jawab?'
      },
      prompt: { en: 'Before continuing, try answering:', id: 'Sebelum lanjut, coba jawab:' },
      answer: {
        en: 'A conceptual-model capacity estimate (e.g. the lognormal power-density × area method) answers "how big might this resource be?" — but it assumes the resource is productive enough to exploit. The empirical property survey supplies the independent reality check on that assumption: it tells you whether the field\'s measured permeability-thickness puts it in the productive population of world geothermal fields or below it. The blunt question the transmissivity threshold (around ten Darcy-metres) helps answer is "is this prospect permeable enough to be commercial at all?" — a first-order go/no-go on deliverability that is logically prior to, and complementary with, the size estimate. A field can have a large inferred volume and high temperature yet be uncommercial because it cannot deliver fluid; the survey-based threshold catches exactly that failure mode, so screening uses both: the capacity estimate for size and the measured-property comparison for whether the size is actually producible. (For a dry-steam field the property ranges still apply as the yardstick; deliverability is then read through the compressible Acuña relation.)',
        id: 'Estimasi kapasitas conceptual-model (misalnya metode lognormal power-density × area) jawab "seberapa besar sumber daya ini mungkin?" — tapi dia mengasumsikan sumber daya cukup produktif buat dieksploitasi. Empirical property survey nyediain reality check independen atas asumsi itu: dia ngasih tau apakah permeability-thickness terukur field naruh dia di populasi produktif field geothermal dunia atau di bawahnya. Pertanyaan tumpul yang threshold transmissivity (sekitar sepuluh Darcy-meter) bantu jawab itu "apakah prospect ini cukup permeabel buat komersial sama sekali?" — go/no-go orde-pertama di deliverability yang logically prior ke, dan komplementer sama, estimasi ukuran. Field bisa punya inferred volume besar dan temperature tinggi tapi gak komersial karena gak bisa deliver fluid; threshold berbasis-survey nangkep persis failure mode itu, jadi screening pake keduanya: estimasi kapasitas buat ukuran dan perbandingan measured-property buat apakah ukuran-nya beneran producible. (Buat field dry-steam range property tetap berlaku sebagai yardstick; deliverability lalu dibaca lewat relasi Acuña compressible.)'
      }
    },
  ],
};
