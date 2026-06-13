// ─────────────────────────────────────────────────────────────────────────
// ⚠ DRAFT — AWAITING AZ DOMAIN REVIEW (option (b): "I draft, you correct").
// Geothermal content is Az-authored (Reservoir & Production Engineer, 6 yrs
// Star Energy Geothermal Darajat — dry-steam). Schema-valid + renderable.
//
// GENERAL BACKBONE VERIFIED (2026-06-13). The fluid-neutral, generally-
// applicable claims have been checked against the primary literature and
// cleared: the SAND2010-6048 bibliographic facts (Finger & Blankenship,
// Sandia Geothermal Research Dept., prepared for the IEA Geothermal
// Implementing Agreement Annex VII), the constrained-thermal-stress relation
// σ ~ E·α·ΔT, drilling ≈ a third-to-half of project capital (handbook ~50%;
// Suranta et al. 2023 35–40%), the casing-string sequence, lost-circulation /
// blind-drilling and directional/pad practice, and the catalog cross-links
// and source editions/report numbers (Grant & Bixley 2011 2nd ed., Academic
// Press/Elsevier; Tester et al. 2006 MIT/INL; Suranta et al. 2023 SCOG Vol. 46
// No. 3). The Darajat operational facts stay EXTERNAL to the module.
// Full prep: notes/finger-blankenship-drilling-research-prep-2026-06-07.md
//
// REMAINING TODO-Az ITEMS (Darajat-specific / owner editorial — NOT auto-clearable):
//   A. HEADLINE: dry-steam (Darajat) drilling specifics — blind drilling
//      under-pressured steam zones, large-bore deliverability wells, H₂S,
//      casing/cement choices.
//   B. Feedzone-targeting directional design for fractured dry-steam.
//   C. Worked example: any real Darajat casing depths/diameters/costs.
//   D. Darajat-specific drilling records/practice and material selections
//      (grades, safety factors, production-casing cementing, make-up/workover
//      cadence).
//   E. Editorial anchor/emphasis choices (which lineage to foreground; whether
//      a Star Energy / Indonesian team belongs in collaborators).
//   F. Seed cards DEFERRED until Az signs off (card-coverage exempt:
//      geothermal domain + DRAFT marker).
// ─────────────────────────────────────────────────────────────────────────

export const CONTENT = {
  itemId: 'finger-blankenship-2010',
  estimatedReadMinutes: 35,

  author: {
    fullName: { en: 'John Finger & Doug Blankenship', id: 'John Finger & Doug Blankenship' },
    affiliation: {
      en: 'Drilling engineers, Sandia National Laboratories (Geothermal Research Department), USA. Authors of the U.S. Department of Energy / Sandia "Handbook of Best Practices for Geothermal Drilling" (SAND2010-6048), the standard practical reference for constructing geothermal wells.',
      id: 'Drilling engineer, Sandia National Laboratories (Geothermal Research Department), AS. Penulis "Handbook of Best Practices for Geothermal Drilling" (SAND2010-6048) U.S. Department of Energy / Sandia, referensi praktis standar buat ngonstruksi sumur geothermal.'
    },
    tagline: {
      en: 'Everything a reservoir engineer measures — kh, skin, decline, deliverability — depends first on a well being drilled to the feedzone and cased so it survives decades of heating and cooling. Drilling is the largest single cost and the physical foundation of the whole field.',
      id: 'Semua yang reservoir engineer ukur — kh, skin, decline, deliverability — bergantung pertama pada sumur yang dibor sampai feedzone dan di-casing supaya dia bertahan berdekade pemanasan dan pendinginan. Pengeboran itu biaya tunggal terbesar dan fondasi fisik seluruh field.'
    },
    bio: {
      en: `John Finger and Doug Blankenship led geothermal drilling research at Sandia National Laboratories, and their 2010 *Handbook of Best Practices for Geothermal Drilling* distilled decades of field experience into a single practical reference. It walks through the whole process of building a geothermal well — rig and bit selection, casing design, cementing, lost-circulation control, directional drilling, logging and instrumentation — emphasising the techniques and hardware that have actually worked in hot, hard, fractured geothermal ground around the world. It is written for engineers who must turn a reservoir target into a steel-and-cement structure that produces reliably for decades.

⟦TODO-Az: bio/affiliation are from public record; confirm before finalizing. Anchoring a *drilling* module on the Sandia handbook is a drafting choice — tell me if you would rather anchor on Grant & Bixley's well-design treatment, on an IGA/Indonesian drilling reference, or on Star Energy's own Darajat drilling practice.⟧`,
      id: `John Finger dan Doug Blankenship mimpin riset pengeboran geothermal di Sandia National Laboratories, dan *Handbook of Best Practices for Geothermal Drilling* 2010 mereka nyuling pengalaman lapangan berdekade jadi satu referensi praktis. Dia ngejalanin seluruh proses ngebangun sumur geothermal — pemilihan rig dan bit, desain casing, cementing, kontrol lost-circulation, directional drilling, logging dan instrumentasi — nekanin teknik dan hardware yang beneran berhasil di tanah geothermal yang panas, keras, fractured di seluruh dunia. Dia ditulis buat engineer yang harus ngubah target reservoir jadi struktur baja-dan-semen yang berproduksi andal berdekade.

⟦TODO-Az: bio/afiliasi dari public record; konfirmasi sebelum finalisasi. Nge-anchor module *pengeboran* ke handbook Sandia itu pilihan drafting — bilang kalau kamu lebih mau nge-anchor ke perlakuan well-design Grant & Bixley, ke referensi pengeboran IGA/Indonesia, atau ke praktik pengeboran Darajat Star Energy sendiri.⟧`
    },
    focus: {
      en: `Before a well test, before a deliverability curve, before a single MW is generated, someone has to drill a hole kilometres into hot, hard, fractured rock and line it with steel and cement so that it flows for decades. **Geothermal drilling** is that step, and it differs sharply from oil-and-gas drilling in ways that define the engineering: the rock is **hotter** (tools and cement must survive it), **harder and more abrasive** (igneous/metamorphic, slow penetration, short bit life), and **fractured** (so drilling fluid is constantly **lost** into the formation); the wells are **larger in diameter** (to carry high steam or two-phase mass rates); and the fluids are **corrosive**. The well is built as a telescoping series of cemented **casing strings** — conductor, surface, intermediate, production — ending in a **production liner** (slotted or open) across the feedzone, and the casing must be designed to survive the **thermal cycling** of heating up on production and cooling on shut-in or injection. ⟦TODO-Az: for a vapour-dominated DRY-STEAM field like Darajat the drilling story has its own specifics — under-pressured steam zones cause severe lost circulation so wells are often drilled "blind" (no returns) through the production interval, the wells are large-bore for steam deliverability, and H₂S and the right casing/cement choices matter. This module teaches the standard geothermal drilling practice and flags the dry-steam specifics for your sign-off.⟧`,
      id: `Sebelum well test, sebelum kurva deliverability, sebelum satu MW dibangkitin, seseorang harus ngebor lubang berkilometer ke batuan yang panas, keras, fractured dan ngelapisin dia dengan baja dan semen supaya dia ngalir berdekade. **Pengeboran geothermal** itu langkah itu, dan dia beda tajam dari pengeboran oil-and-gas dengan cara yang nentuin engineering-nya: batuannya **lebih panas** (tool dan semen harus bertahan), **lebih keras dan abrasif** (igneous/metamorphic, penetrasi lambat, umur bit pendek), dan **fractured** (jadi drilling fluid terus-menerus **hilang** ke formasi); sumurnya **lebih besar diameternya** (buat bawa steam atau two-phase mass rate tinggi); dan fluidanya **korosif**. Sumur dibangun sebagai seri teleskopik **casing string** yang di-cement — conductor, surface, intermediate, production — diakhiri dengan **production liner** (slotted atau open) lintas feedzone, dan casing-nya harus didesain buat bertahan **thermal cycling** dari pemanasan saat produksi dan pendinginan saat shut-in atau injeksi. ⟦TODO-Az: buat field DRY-STEAM vapour-dominated kayak Darajat cerita pengeborannya punya spesifiknya sendiri — zona steam under-pressured nyebabin lost circulation parah jadi sumur sering dibor "blind" (tanpa returns) lewat interval produksi, sumurnya large-bore buat steam deliverability, dan H₂S dan pilihan casing/cement yang benar penting. Module ini ngajarin praktik pengeboran geothermal standar dan ngeflag spesifik dry-steam buat sign-off kamu.⟧`
    },
    intellectualLineage: {
      en: `Geothermal drilling borrowed its toolkit from the **petroleum industry** — rotary rigs, roller-cone and PDC bits, casing-and-cement well construction, directional drilling — and then adapted each piece to high temperature, hard rock, and lost circulation. The Sandia geothermal-drilling program (out of which this handbook came) developed and tested much of the specialised hardware (high-temperature tools, lost-circulation methods, hard-rock bits) and codified the practices. The lineage is therefore **petroleum drilling engineering specialised for hot fractured rock**. ⟦TODO-Az: the geothermal-specific lineage to foreground — Grant & Bixley's well-design chapters (in this catalog), the IGA/Stanford workshop drilling literature, and Indonesian dry-steam drilling experience (e.g. the rapid-drilling case studies in Java/Sumatra). Confirm which to emphasise.⟧`,
      id: `Pengeboran geothermal minjem toolkit-nya dari **industri petroleum** — rotary rig, bit roller-cone dan PDC, konstruksi sumur casing-dan-cement, directional drilling — terus ngadaptasi tiap bagian ke suhu tinggi, batuan keras, dan lost circulation. Program pengeboran-geothermal Sandia (dari mana handbook ini datang) ngembangin dan nge-tes banyak hardware terspesialisasi (tool suhu-tinggi, metode lost-circulation, bit hard-rock) dan ngodifikasi praktiknya. Lineage-nya karena itu **engineering pengeboran petroleum yang dispesialisasi buat batuan fractured panas**. ⟦TODO-Az: lineage spesifik-geothermal buat dimajuin — bab well-design Grant & Bixley (di katalog ini), literatur pengeboran workshop IGA/Stanford, dan pengalaman pengeboran dry-steam Indonesia (misal studi kasus rapid-drilling di Java/Sumatra). Konfirmasi yang mana yang ditekankan.⟧`
    },
    keyCollaborators: {
      en: `The handbook draws on the Sandia National Laboratories geothermal-drilling community and the broader U.S. DOE geothermal program, alongside service-company and operator field experience. Methodological neighbours in this catalog are **Grant & Bixley** (well design and testing) and the conceptual/numerical modellers (**Cumming**; **O'Sullivan-Pruess-Lippmann**) whose targets the drillers must hit. ⟦TODO-Az: confirm/adjust, and whether a Star Energy / Indonesian drilling reference or team belongs here.⟧`,
      id: `Handbook-nya nyandar pada komunitas pengeboran-geothermal Sandia National Laboratories dan program geothermal U.S. DOE yang lebih luas, di samping pengalaman lapangan service-company dan operator. Tetangga metodologis di katalog ini itu **Grant & Bixley** (desain dan testing sumur) dan para modeller konseptual/numerik (**Cumming**; **O'Sullivan-Pruess-Lippmann**) yang targetnya driller harus capai. ⟦TODO-Az: konfirmasi/sesuaikan, dan apakah referensi atau tim pengeboran Star Energy / Indonesia masuk di sini.⟧`
    },
    legacy: {
      en: `Drilling is where a geothermal project spends its money and takes its biggest physical risks: a third to a half of the capital goes into the ground as steel and cement, and a well that is poorly cased or badly cemented will fail under thermal cycling or leak between zones long before the reservoir is exhausted. The Sandia handbook's lasting value is that it made the hard-won practices explicit — how to case and cement for thermal cycling, how to cope with lost circulation, how to drill hard rock economically — so that wells are built to last the decades the reserves estimate assumes. ⟦TODO-Az: the lasting value FOR DARAJAT is the dry-steam practice this draft cannot finalize — blind drilling through under-pressured steam zones, large-bore deliverability completions, the casing/cement and H₂S choices your field actually uses, and how directional design targets the fracture/feedzone structure. Treat the module as the verified general practice plus a flagged dry-steam checklist for your field.⟧`,
      id: `Pengeboran itu di mana proyek geothermal ngabisin uangnya dan ngambil risiko fisik terbesarnya: sepertiga sampai setengah kapital masuk ke tanah sebagai baja dan semen, dan sumur yang casing-nya buruk atau cement-nya jelek bakal gagal di bawah thermal cycling atau bocor antar-zona jauh sebelum reservoir-nya habis. Nilai abadi handbook Sandia itu bahwa dia bikin praktik yang susah-payah-didapat eksplisit — gimana nge-casing dan cement buat thermal cycling, gimana ngadepin lost circulation, gimana ngebor batuan keras secara ekonomis — supaya sumur dibangun buat bertahan berdekade yang estimasi cadangan asumsikan. ⟦TODO-Az: nilai abadi BUAT DARAJAT itu praktik dry-steam yang draft ini gak bisa finalin — blind drilling lewat zona steam under-pressured, completion deliverability large-bore, pilihan casing/cement dan H₂S yang field kamu sebenarnya pakai, dan gimana desain directional nargetin struktur fracture/feedzone. Perlakukan module sebagai praktik umum terverifikasi plus checklist dry-steam yang di-flag buat field kamu.⟧`
    },
    keyWorks: [
      { year: 2010, title: 'Handbook of Best Practices for Geothermal Drilling (Finger & Blankenship) — this item', venue: 'Sandia National Laboratories, SAND2010-6048' },
      { year: 2011, title: 'Geothermal Reservoir Engineering (Grant & Bixley) — well design & testing context (in this catalog)', venue: 'Elsevier' },
      { year: 2006, title: 'The Future of Geothermal Energy / MIT EGS report — drilling-cost modelling for EGS (in this catalog)', venue: 'MIT/INL' },
      { year: 2023, title: 'Best Practices to Achieve Optimal Geothermal Drilling Performance in a Cost-Effective Manner: Case Study of the Fastest Geothermal Well Drilling in Java and Sumatra (Suranta et al.) — Indonesian rapid-drilling case studies', venue: 'Scientific Contributions Oil and Gas (LEMIGAS), Vol. 46 No. 3' },
    ],
  },

  sections: [
    // ─────────────── 1. motivation ───────────────
    {
      id: 'motivation',
      heading: { en: 'Why this matters', id: 'Kenapa ini penting' },
      body: {
        en: `Every other topic in this domain assumes a well already exists. Pressure-transient analysis reads a well; deliverability and decline describe a well's output; geochemistry samples a well's fluid. **Drilling is where the well comes from** — and it is, by a wide margin, the most expensive and physically riskiest part of developing a geothermal field. A third to a half of a project's capital is literally drilled into the ground as steel and cement.

Geothermal drilling is not just oil-and-gas drilling that happens to be hot. The differences are structural:

- **Heat.** Reservoir temperatures of 200–300 °C+ degrade drilling fluids, push tools and electronics past their ratings, and demand thermally stable cement. Everything downhole must survive the heat.
- **Hard, abrasive rock.** Geothermal reservoirs are often in igneous or metamorphic rock — far harder than sedimentary oil-and-gas formations — so penetration is slow and bits wear out fast.
- **Lost circulation.** The fractures that make a geothermal reservoir permeable also swallow drilling fluid. Losing returns — sometimes total losses — is the routine, defining problem of geothermal drilling.
- **Large diameters.** To flow the high mass rates of steam or two-phase fluid a geothermal well needs, the wells are drilled and cased much larger than a typical oil well.
- **Thermal cycling.** A geothermal well heats up when produced and cools when shut in or injected into, expanding and contracting the casing repeatedly — a fatigue and buckling challenge that ordinary wells rarely face.

The well is built as a nested set of **casing strings**, each cemented in place, telescoping smaller with depth, and finished with a **production liner** across the feedzone. Get the casing and cement right and the well produces reliably for decades; get them wrong and it fails under thermal stress or leaks between zones long before the reservoir is depleted.

⟦TODO-Az: this is where your field's specifics take over, and they are your call. In a vapour-dominated DRY-STEAM reservoir like Darajat the steam zone is often UNDER-pressured, so drilling fluid is lost wholesale and wells are frequently drilled "blind" — circulating water to surface is impossible in the production interval, so you drill ahead accepting total losses and manage cuttings and stability differently. The wells are large-bore for steam deliverability, H₂S must be handled at the rig, and the casing/cement program and directional design (to intersect the fracture/feedzone structure) are field-specific. The module teaches the standard practice and flags these — please confirm/correct.⟧`,
        id: `Setiap topik lain di domain ini ngasumsiin sumur udah ada. Pressure-transient analysis baca sumur; deliverability dan decline ngegambarin output sumur; geokimia nyampel fluida sumur. **Pengeboran itu dari mana sumurnya datang** — dan dia, dengan margin lebar, bagian paling mahal dan paling berisiko-fisik dari ngembangin field geothermal. Sepertiga sampai setengah kapital proyek secara harfiah dibor ke tanah sebagai baja dan semen.

Pengeboran geothermal bukan cuma pengeboran oil-and-gas yang kebetulan panas. Bedanya struktural:

- **Panas.** Temperatur reservoir 200–300 °C+ ngedegradasi drilling fluid, ndorong tool dan elektronik lewat rating-nya, dan nuntut semen yang stabil-termal. Semua di bawah tanah harus bertahan panas.
- **Batuan keras, abrasif.** Reservoir geothermal sering di batuan igneous atau metamorphic — jauh lebih keras dari formasi oil-and-gas sedimen — jadi penetrasi lambat dan bit aus cepat.
- **Lost circulation.** Fracture yang bikin reservoir geothermal permeabel juga nelen drilling fluid. Kehilangan returns — kadang total — itu masalah rutin, penentu dari pengeboran geothermal.
- **Diameter besar.** Buat ngalirin mass rate tinggi steam atau two-phase yang sumur geothermal butuh, sumurnya dibor dan di-casing jauh lebih besar dari sumur minyak tipikal.
- **Thermal cycling.** Sumur geothermal manas pas diproduksi dan mendingin pas shut-in atau diinjeksi, ngembang dan nyusutin casing berulang — tantangan fatigue dan buckling yang sumur biasa jarang hadapi.

Sumur dibangun sebagai set bersarang **casing string**, masing-masing di-cement di tempat, teleskopik mengecil sama kedalaman, dan diselesaikan dengan **production liner** lintas feedzone. Benerin casing dan cement-nya dan sumur berproduksi andal berdekade; salahin mereka dan dia gagal di bawah thermal stress atau bocor antar-zona jauh sebelum reservoir-nya di-deplesi.

⟦TODO-Az: ini di mana spesifik field kamu ngambil alih, dan itu keputusan kamu. Di reservoir DRY-STEAM vapour-dominated kayak Darajat steam zone-nya sering UNDER-pressured, jadi drilling fluid hilang besar-besaran dan sumur sering dibor "blind" — nyirkulasiin air ke permukaan mustahil di interval produksi, jadi kamu ngebor maju nerima total losses dan ngelola cutting dan stabilitas dengan cara berbeda. Sumurnya large-bore buat steam deliverability, H₂S harus ditangani di rig, dan program casing/cement dan desain directional (buat motong struktur fracture/feedzone) itu spesifik-field. Module ngajarin praktik standar dan ngeflag ini — tolong konfirmasi/koreksi.⟧`
      }
    },

    // ─────────────── 2. intuition ───────────────
    {
      id: 'intuition',
      heading: { en: 'Intuition', id: 'Intuisi' },
      body: {
        en: `Picture building a drinking straw down to a boiling, cracked, rock layer — except the straw is a kilometre or more long, the rock keeps trying to crush and corrode it, and you have to keep it intact while it is alternately heated to 250 °C and cooled back down, for thirty years.

**Why casing telescopes.** You cannot drill the whole well at the final diameter in one pass — the upper formations would cave, fresh-water zones would be contaminated, and you could not control pressure. So you drill a big hole a short way, run **casing** and cement it, then drill a smaller hole deeper through it, case that, and so on — each string nested inside the last, getting narrower with depth. The shallow strings (conductor, surface casing) protect groundwater and give the rig something to seal against; the deeper strings (intermediate, production casing) isolate troublesome zones and carry the well down to the reservoir; the final **liner** is left open or slotted so the reservoir fluid can enter.

**Why cement matters more here.** Cement is not just glue; it is what keeps the steel from buckling when it tries to grow and shrink with temperature. A casing string cemented all the way to surface is held in place along its whole length, so thermal expansion is restrained and distributed; a poorly cemented string can buckle, part, or let fluid migrate up the outside between zones. In a well that thermally cycles for decades, the cement job is a durability decision, not a detail.

**Why losing your drilling fluid is the normal state.** A good geothermal reservoir is permeable because it is fractured. The moment your bit reaches those fractures, the drilling fluid you are pumping down has somewhere to go — out into the formation — and it stops coming back up. Mild losses you fight with lost-circulation material; severe or total losses in the production zone you often simply accept, **drilling "blind"** with water, because the fractures eating your fluid are exactly the feedzones you came for. The thing that makes the well productive is the thing that makes it hard to drill.

⟦TODO-Az: the dry-steam intuition is sharper still — a vapour-dominated steam zone can be at LOWER pressure than the column of water in your wellbore, so it does not just take your fluid, it can flash and flow back; blind drilling and the way you manage an under-pressured steam entry are Darajat specifics. Please confirm the picture for your field before it becomes a teaching point.⟧`,
        id: `Bayangin ngebangun sedotan ke bawah ke lapisan batuan yang mendidih, retak — kecuali sedotannya sekilometer atau lebih panjang, batuannya terus nyoba ngeremukin dan ngorosi dia, dan kamu harus ngejaganya utuh sementara dia bergantian dipanasin ke 250 °C dan didinginin balik, selama tiga puluh tahun.

**Kenapa casing teleskopik.** Kamu gak bisa ngebor seluruh sumur di diameter final dalam satu pass — formasi atas bakal ambruk, zona air-tawar bakal terkontaminasi, dan kamu gak bisa ngontrol pressure. Jadi kamu ngebor lubang besar sebentar, jalanin **casing** dan cement, terus ngebor lubang lebih kecil lebih dalam lewatnya, casing itu, dan seterusnya — tiap string bersarang di dalam yang sebelumnya, makin sempit sama kedalaman. String dangkal (conductor, surface casing) ngelindungin groundwater dan ngasih rig sesuatu buat nyegel; string lebih dalam (intermediate, production casing) ngisolasi zona bermasalah dan ngebawa sumur turun ke reservoir; **liner** final dibiarin open atau slotted supaya fluida reservoir bisa masuk.

**Kenapa cement lebih penting di sini.** Cement bukan cuma lem; dia yang ngejaga baja dari buckling pas dia nyoba tumbuh dan nyusut sama temperatur. Casing string yang di-cement sampai ke permukaan ditahan di tempat sepanjang seluruh panjangnya, jadi thermal expansion ditahan dan disebar; string yang di-cement buruk bisa buckling, putus, atau ngebiarin fluida migrasi naik di luar antar-zona. Di sumur yang thermal cycling berdekade, cement job itu keputusan durabilitas, bukan detail.

**Kenapa kehilangan drilling fluid itu keadaan normal.** Reservoir geothermal bagus permeabel karena dia fractured. Begitu bit kamu nyampe fracture itu, drilling fluid yang kamu pompa turun punya tempat buat pergi — keluar ke formasi — dan dia berhenti naik balik. Loss ringan kamu lawan dengan lost-circulation material; loss parah atau total di zona produksi sering kamu terima aja, **ngebor "blind"** dengan air, karena fracture yang makan fluida kamu itu persis feedzone yang kamu datangin. Hal yang bikin sumur produktif itu hal yang bikin dia susah dibor.

⟦TODO-Az: intuisi dry-steam-nya lebih tajam lagi — steam zone vapour-dominated bisa di pressure LEBIH RENDAH dari kolom air di wellbore kamu, jadi dia gak cuma ngambil fluida kamu, dia bisa flash dan ngalir balik; blind drilling dan cara kamu ngelola entry steam under-pressured itu spesifik Darajat. Tolong konfirmasi gambarannya buat field kamu sebelum dia jadi teaching point.⟧`
      }
    },

    // ─────────────── 3. formalization ───────────────
    {
      id: 'formalization',
      heading: { en: 'The method, formalized', id: 'Metodenya, diformalkan' },
      body: {
        en: `**The well-construction sequence.** A geothermal well is built top-down as telescoping cemented casing strings:
1. **Conductor** — shallow, large diameter; stabilises the very top and supports wellhead loads.
2. **Surface casing** — set below the freshwater aquifers and cemented to surface; protects groundwater and anchors blowout-prevention equipment.
3. **Intermediate casing** — isolates unstable or loss-prone zones between surface and reservoir.
4. **Production casing** — set near the top of the reservoir, cemented (ideally to surface) so it resists thermal cycling; it is the main pressure-bearing string for production.
5. **Production liner** — hung across the feedzone, **slotted/perforated or open hole**, so reservoir fluid enters while keeping the hole from collapsing.

**Casing design under thermal load.** When a cemented string heats by $\\Delta T$, the constrained thermal strain generates an axial stress on the order of $\\sigma \\sim E\\,\\alpha\\,\\Delta T$ ($E$ steel modulus, $\\alpha$ thermal-expansion coefficient). For $\\Delta T$ of a couple of hundred degrees this is large — it drives the choice of steel grade, wall thickness, connections, and the insistence on a complete cement sheath so the load is transferred to the formation rather than buckling the pipe. ⟦TODO-Az: the exact grades, safety factors, and whether Darajat fully cements production casing are yours; I have kept this at the level of the governing relation.⟧

**Lost circulation.** Drilling-fluid loss into fractures is managed on a spectrum: **lost-circulation material** (LCM) for partial losses; **aerated or water-based drilling** to reduce the hydrostatic head pushing fluid out; and **blind drilling** (drilling ahead with no returns, sweeping the hole with water) for total losses in the production zone. The trade-off is hole cleaning and stability versus protecting the very fractures that will produce.

**Directional drilling & pads.** Several deviated wells are drilled from one surface **pad**, fanning out to (a) reduce surface footprint and (b) steer each well to intersect the fracture/feedzone structures that carry the fluid. These structures are often steeply-dipping faults and fractures — which a vertical well can run parallel to and miss — so deviated trajectories are favoured to cut across them; but feedzones can also sit on moderate-dip structures or stratigraphic contacts, so the trajectory is matched to the conceptual structural model. Geothermal targets are structural, so trajectory design is reservoir-driven.

**Logging, instrumentation & completion testing.** High-temperature **temperature and pressure surveys** and **spinner (flow) logs** locate and rank feedzones; a completion test (and later the well test, Horne) confirms what the well will deliver.

⟦TODO-Az: the dry-steam formalization is your domain.
  1. **Blind drilling under-pressured steam zones.** When the steam zone is below hydrostatic, you cannot maintain returns; the standard practice is blind drilling with water, and the entry of steam into the well during drilling is managed specifically.
  2. **Large-bore deliverability completions.** Dry-steam wells are sized for high steam mass rate; the casing/liner diameters and the completion differ from a liquid well.
  3. **Casing/cement & H₂S.** The thermal-cycling casing program, cement system, and H₂S handling actually used at Darajat.
The construction sequence, thermal-stress relation, lost-circulation spectrum, and directional/pad logic above are the verified, generally-applicable backbone.⟧`,
        id: `**Urutan konstruksi sumur.** Sumur geothermal dibangun atas-ke-bawah sebagai casing string teleskopik yang di-cement:
1. **Conductor** — dangkal, diameter besar; ngestabilin paling atas dan nyokong beban wellhead.
2. **Surface casing** — diset di bawah akuifer air-tawar dan di-cement ke permukaan; ngelindungin groundwater dan ngejangkar peralatan blowout-prevention.
3. **Intermediate casing** — ngisolasi zona gak-stabil atau rawan-loss antara surface dan reservoir.
4. **Production casing** — diset deket atas reservoir, di-cement (idealnya ke permukaan) supaya dia tahan thermal cycling; dia string penahan-pressure utama buat produksi.
5. **Production liner** — digantung lintas feedzone, **slotted/perforated atau open hole**, supaya fluida reservoir masuk sambil ngejaga lubang dari ambruk.

**Desain casing di bawah thermal load.** Pas string yang di-cement manas sebesar $\\Delta T$, thermal strain yang ditahan ngehasilin axial stress pada orde $\\sigma \\sim E\\,\\alpha\\,\\Delta T$ ($E$ modulus baja, $\\alpha$ koefisien thermal-expansion). Buat $\\Delta T$ beberapa ratus derajat ini besar — dia ngedorong pilihan grade baja, ketebalan dinding, connection, dan keharusan cement sheath lengkap supaya beban ditransfer ke formasi bukan buckling pipa. ⟦TODO-Az: grade persis, safety factor, dan apakah Darajat sepenuhnya nge-cement production casing itu punya kamu; aku ngejaga ini di level relasi yang ngatur.⟧

**Lost circulation.** Loss drilling-fluid ke fracture dikelola di spektrum: **lost-circulation material** (LCM) buat loss parsial; **pengeboran aerated atau water-based** buat ngurangin head hidrostatik yang ndorong fluida keluar; dan **blind drilling** (ngebor maju tanpa returns, nyapu lubang dengan air) buat total loss di zona produksi. Trade-off-nya pembersihan dan stabilitas lubang lawan ngelindungin fracture yang bakal berproduksi.

**Directional drilling & pad.** Beberapa sumur deviated dibor dari satu **pad** permukaan, menyebar buat (a) ngurangin surface footprint dan (b) nyetir tiap sumur buat motong struktur fracture/feedzone yang bawa fluida. Struktur ini sering berupa fault dan fracture yang ber-dip terjal — yang sumur vertikal bisa sejajar dan meleset darinya — jadi trajektori deviated lebih disukai buat motong silang mereka; tapi feedzone juga bisa duduk di struktur dip-sedang atau kontak stratigrafi, jadi trajektori-nya dicocokin ke conceptual structural model. Target geothermal itu struktural, jadi desain trajektori itu reservoir-driven.

**Logging, instrumentasi & completion testing.** **Temperature dan pressure survey** suhu-tinggi dan **spinner (flow) log** ngelokasiin dan nge-rank feedzone; completion test (dan nanti well test, Horne) ngonfirmasi apa yang sumur bakal deliver.

⟦TODO-Az: formalisasi dry-steam itu domain kamu.
  1. **Blind drilling zona steam under-pressured.** Pas steam zone di bawah hidrostatik, kamu gak bisa nahan returns; praktik standarnya blind drilling dengan air, dan masuknya steam ke sumur selama pengeboran dikelola secara spesifik.
  2. **Completion deliverability large-bore.** Sumur dry-steam diukur buat steam mass rate tinggi; diameter casing/liner dan completion-nya beda dari sumur liquid.
  3. **Casing/cement & H₂S.** Program casing thermal-cycling, sistem cement, dan penanganan H₂S yang sebenarnya dipakai di Darajat.
Urutan konstruksi, relasi thermal-stress, spektrum lost-circulation, dan logika directional/pad di atas itu backbone terverifikasi, berlaku-umum.⟧`
      }
    },

    // ─────────────── 4. worked-example ───────────────
    {
      id: 'worked-example',
      heading: { en: 'Worked example', id: 'Contoh kerjaan' },
      body: {
        en: `**Planning a well, top to bottom (illustrative numbers).** ⟦TODO-Az: every depth, diameter, and cost figure is a placeholder to show the *logic* — real Darajat casing programs, diameters, and costs are yours; do not teach these as Darajat values.⟧

A reservoir target sits beneath fresh-water aquifers, an unstable clay-cap interval, and the production fractures.

1. **Set surface casing below the aquifers.** Drill a large hole through the freshwater zone, run surface casing, cement to surface — groundwater protected, BOP anchored.
2. **Set intermediate casing through the unstable interval.** Drill ahead, case and cement across the clay cap / loss-prone zone so it cannot cave or steal fluid during deeper drilling.
3. **Set production casing at the top of the reservoir.** This is the string that will thermally cycle for the well's life, so cement it as fully as possible. Check the thermal-stress estimate $\\sigma \\sim E\\,\\alpha\\,\\Delta T$ against the chosen grade.
4. **Drill the production interval and hang a slotted liner.** Here losses are expected; if they go total, drill blind with water. Hang a slotted/open liner across the feedzone so fluid can enter without the hole collapsing.
5. **Log and test.** Run temperature/pressure and spinner logs to find which feedzones flow; a completion test gives a first read on deliverability (later refined by a well test).

**Reading the result.** A well that found strong feedzones (clear spinner crossflow, high completion-test output) and was cleanly cased and cemented is a keeper; one that lost the feedzone or has a questionable cement job behind the production casing is a future workover or integrity risk. The drilling decisions made here set what the reservoir engineer can later measure.

⟦TODO-Az: the Darajat version diverges — under-pressured dry-steam means the production interval is drilled blind as the norm, the wells are larger-bore, and the casing/cement program is tuned for steam and thermal cycling. A real worked example should use a Darajat well plan; I have kept this generic and flagged it.⟧`,
        id: `**Ngerencanain sumur, atas ke bawah (angka ilustratif).** ⟦TODO-Az: tiap kedalaman, diameter, dan angka biaya itu placeholder buat nunjukin *logika*-nya — program casing, diameter, dan biaya Darajat nyata itu punya kamu; jangan ngajarin ini sebagai nilai Darajat.⟧

Target reservoir duduk di bawah akuifer air-tawar, interval clay-cap gak-stabil, dan fracture produksi.

1. **Set surface casing di bawah akuifer.** Bor lubang besar lewat zona air-tawar, jalanin surface casing, cement ke permukaan — groundwater terlindungi, BOP terjangkar.
2. **Set intermediate casing lewat interval gak-stabil.** Bor maju, casing dan cement lintas clay cap / zona rawan-loss supaya dia gak bisa ambruk atau nyuri fluida selama pengeboran lebih dalam.
3. **Set production casing di atas reservoir.** Ini string yang bakal thermal cycling sepanjang umur sumur, jadi cement dia selengkap mungkin. Cek estimasi thermal-stress $\\sigma \\sim E\\,\\alpha\\,\\Delta T$ lawan grade yang dipilih.
4. **Bor interval produksi dan gantung slotted liner.** Di sini loss diharapkan; kalau jadi total, bor blind dengan air. Gantung slotted/open liner lintas feedzone supaya fluida bisa masuk tanpa lubang ambruk.
5. **Log dan test.** Jalanin temperature/pressure dan spinner log buat nemu feedzone mana yang ngalir; completion test ngasih bacaan pertama deliverability (nanti dihalusin well test).

**Membaca hasilnya.** Sumur yang nemu feedzone kuat (spinner crossflow jelas, output completion-test tinggi) dan di-casing dan cement bersih itu layak; yang kehilangan feedzone atau punya cement job dipertanyakan di belakang production casing itu risiko workover atau integritas masa depan. Keputusan pengeboran yang dibuat di sini nyetel apa yang reservoir engineer nanti bisa ukur.

⟦TODO-Az: versi Darajat menyimpang — dry-steam under-pressured berarti interval produksi dibor blind sebagai norma, sumurnya larger-bore, dan program casing/cement disetel buat steam dan thermal cycling. Worked example nyata harusnya pakai rencana sumur Darajat; aku ngejaga ini generik dan nge-flag-nya.⟧`
      }
    },

    // ─────────────── 5. applications ───────────────
    {
      id: 'applications',
      heading: { en: 'Applications', id: 'Aplikasi' },
      body: {
        en: `**What drilling decides.** The well's geometry and integrity set everything downstream: which feedzones are connected (trajectory + liner placement), how much the well can flow (diameter), how long it will last (casing/cement under thermal cycling), and a large slice of project economics (drilling cost per MW). A field-development plan is, in large part, a drilling plan.

**Across field life.** Drilling is not a one-time campaign: **make-up wells** replace declining producers, **directional re-drills** chase migrating feedzones, and **workovers** repair casing/cement integrity or clean out scale. The drilling group and the reservoir group are in continuous dialogue — the decline forecast (Sanyal) and the connection map (Axelsson) say where and when to drill next.

**The economics link.** ⟦TODO-Az: because drilling is a third to a half of capital, drilling efficiency directly moves the levelised cost and the reserves economics — faster, more reliable wells lower the cost per MW. The Indonesian rapid-drilling case studies suggest dry-steam fields can push drilling performance hard; how Darajat's drilling cost and performance feed the project economics is yours to state.⟧

**The dry-steam payoff.** ⟦TODO-Az: at Darajat the drilling toolkit is shaped by the vapour-dominated reservoir — blind drilling through under-pressured steam, large-bore deliverability completions, H₂S management, and fracture-targeting directional design. These are the points a Darajat engineer would foreground; please set the emphasis.⟧

**The honest limits.** A well plan is built on a conceptual/structural model (Cumming) that is uncertain until the bit confirms it; targets are missed, feedzones are weaker than hoped, losses are worse than planned. Drilling is iterative and risk-laden, and a drilled well is a hard, expensive fact that then constrains the reservoir engineering — PTA, deliverability, and decline all read the well drilling produced, for better or worse.`,
        id: `**Apa yang pengeboran putusin.** Geometri dan integritas sumur nyetel semua di hilir: feedzone mana yang terhubung (trajektori + penempatan liner), seberapa banyak sumur bisa ngalir (diameter), berapa lama dia bertahan (casing/cement di bawah thermal cycling), dan irisan besar ekonomi proyek (biaya pengeboran per MW). Rencana pengembangan field itu, sebagian besar, rencana pengeboran.

**Sepanjang umur field.** Pengeboran bukan kampanye sekali: **sumur make-up** ngeganti produser yang declining, **directional re-drill** ngejar feedzone yang migrasi, dan **workover** ngeperbaiki integritas casing/cement atau ngebersihin scale. Grup pengeboran dan grup reservoir dalam dialog terus-menerus — forecast decline (Sanyal) dan peta koneksi (Axelsson) bilang di mana dan kapan ngebor berikutnya.

**Link ekonomi.** ⟦TODO-Az: karena pengeboran itu sepertiga sampai setengah kapital, efisiensi pengeboran langsung ngegerakin levelised cost dan ekonomi cadangan — sumur yang lebih cepat, lebih andal nurunin biaya per MW. Studi kasus rapid-drilling Indonesia nyaranin field dry-steam bisa ndorong performa pengeboran keras; gimana biaya dan performa pengeboran Darajat nyuapin ekonomi proyek itu punya kamu buat nyatain.⟧

**Payoff dry-steam.** ⟦TODO-Az: di Darajat toolkit pengeboran dibentuk sama reservoir vapour-dominated — blind drilling lewat steam under-pressured, completion deliverability large-bore, manajemen H₂S, dan desain directional yang nargetin-fracture. Ini poin yang engineer Darajat bakal majuin; tolong set penekanannya.⟧

**Batas yang jujur.** Rencana sumur dibangun di conceptual/structural model (Cumming) yang gak pasti sampai bit ngonfirmasinya; target meleset, feedzone lebih lemah dari yang diharapkan, loss lebih buruk dari rencana. Pengeboran itu iteratif dan sarat-risiko, dan sumur yang udah dibor itu fakta keras, mahal yang terus ngebatasi reservoir engineering — PTA, deliverability, dan decline semua baca sumur yang pengeboran hasilkan, baik atau buruk.`
      }
    },

    // ─────────────── 6. practice ───────────────
    {
      id: 'practice',
      heading: { en: 'Practice', id: 'Latihan' },
      body: {
        en: `⟦TODO-Az: these items exercise the verified general drilling backbone; answers stay generic and flag where the dry-steam specifics enter. Replace with Darajat items when you finalize.⟧

**1.** Name three ways geothermal drilling is physically harder than typical oil-and-gas drilling, and tie each to a consequence for the well program.

<details><summary>Answer</summary>
(1) HIGHER TEMPERATURE (200–300 °C+) → drilling fluids degrade, tools/electronics are pushed past ratings, and cement must be thermally stable; everything downhole must survive the heat. (2) HARDER, ABRASIVE rock (igneous/metamorphic) → slow rate of penetration and short bit life, so bit selection and trip planning matter more. (3) FRACTURED, permeable formation → pervasive LOST CIRCULATION, so the program must plan for lost-circulation material, aerated/water drilling, or blind drilling. (A fourth: large diameters for high mass flow; a fifth: thermal cycling that fatigues casing.) Each pushes the well design away from the oil-and-gas default. ⟦TODO-Az: dry-steam under-pressured zones intensify lost circulation into routine blind drilling.⟧
</details>

**2.** Why is cementing the production casing all the way to surface treated as a durability decision rather than a detail?

<details><summary>Answer</summary>
Because the production casing thermally cycles for the well's whole life — heating by a couple of hundred degrees when produced and cooling when shut in or injected. A constrained string develops a large axial thermal stress (~ E·α·ΔT). A casing cemented continuously to surface is restrained and supported along its entire length, so that thermal load is transferred into the formation and distributed, preventing buckling, parting, or fatigue failure. A poorly or partially cemented string can buckle or part under cycling and can also allow fluid to migrate up the annulus between zones (a well-integrity and inter-zonal-flow problem). So the cement job determines whether the well survives decades of cycling. ⟦TODO-Az: confirm Darajat's production-casing cementing practice.⟧
</details>

**3.** Why is the loss of drilling fluid into the formation often a GOOD sign even though it is an operational problem, and how is "blind drilling" a response to it?

<details><summary>Answer</summary>
Because a geothermal reservoir is permeable precisely through its fractures, and those same fractures are what swallow the drilling fluid. So total losses in the production interval usually mean the bit has reached exactly the permeable feedzones the well was drilled to produce from — the operational problem and the productive target are the same feature. BLIND DRILLING is the response: rather than fight to maintain returns (which would risk plugging the very fractures you want open), you drill ahead accepting no returns, sweeping the hole with water to clean cuttings. You trade normal hole-cleaning/pressure control for protecting the feedzone. ⟦TODO-Az: in dry-steam the zone may be under-pressured, so blind drilling is the norm and the steam entry is managed specifically.⟧
</details>

**4.** Why are several geothermal wells often drilled directionally from a single pad?

<details><summary>Answer</summary>
Two reasons. (1) SURFACE FOOTPRINT: drilling multiple deviated wells from one pad concentrates surface disturbance, infrastructure, and access in one place — important in the rugged, often forested or protected terrain where geothermal fields sit. (2) TARGETING: geothermal permeability is structural, and much of it lives in steeply-dipping faults and fractures — which a vertical well can run parallel to and miss — so a deviated/directional trajectory can be steered to cut across those structures and maximise the productive feedzones a well connects to. (Feedzones are not always steep — some sit on moderate-dip structures or stratigraphic contacts — so the trajectory is matched to the structural model rather than assumed vertical-only.) Trajectory design is therefore reservoir-driven, aimed at the fracture network. ⟦TODO-Az: confirm how Darajat targets its fracture/feedzone structure directionally.⟧
</details>`,
        id: `⟦TODO-Az: item ini ngelatih backbone pengeboran umum terverifikasi; jawaban tetap generik dan nge-flag di mana spesifik dry-steam masuk. Ganti dengan item Darajat pas kamu finalisasi.⟧

**1.** Sebutin tiga cara pengeboran geothermal lebih susah secara fisik dari pengeboran oil-and-gas tipikal, dan iket masing-masing ke konsekuensi buat program sumur.

<details><summary>Jawaban</summary>
(1) TEMPERATUR LEBIH TINGGI (200–300 °C+) → drilling fluid terdegradasi, tool/elektronik didorong lewat rating, dan cement harus stabil-termal; semua di bawah tanah harus bertahan panas. (2) Batuan LEBIH KERAS, abrasif (igneous/metamorphic) → rate of penetration lambat dan umur bit pendek, jadi pemilihan bit dan perencanaan trip lebih penting. (3) Formasi FRACTURED, permeabel → LOST CIRCULATION yang pervasif, jadi program harus ngerencanain lost-circulation material, pengeboran aerated/water, atau blind drilling. (Keempat: diameter besar buat mass flow tinggi; kelima: thermal cycling yang nge-fatigue casing.) Masing-masing ndorong desain sumur jauh dari default oil-and-gas. ⟦TODO-Az: zona under-pressured dry-steam ngintensifin lost circulation jadi blind drilling rutin.⟧
</details>

**2.** Kenapa nge-cement production casing sampai ke permukaan diperlakukan sebagai keputusan durabilitas bukan detail?

<details><summary>Jawaban</summary>
Karena production casing thermal cycling sepanjang seluruh umur sumur — manas beberapa ratus derajat pas diproduksi dan mendingin pas shut-in atau diinjeksi. String yang ditahan ngembangin axial thermal stress besar (~ E·α·ΔT). Casing yang di-cement kontinu ke permukaan ditahan dan disokong sepanjang seluruh panjangnya, jadi thermal load itu ditransfer ke formasi dan disebar, nyegah buckling, putus, atau kegagalan fatigue. String yang di-cement buruk atau parsial bisa buckling atau putus di bawah cycling dan juga bisa ngebiarin fluida migrasi naik annulus antar-zona (masalah integritas-sumur dan flow antar-zonal). Jadi cement job nentuin apakah sumur bertahan berdekade cycling. ⟦TODO-Az: konfirmasi praktik cementing production-casing Darajat.⟧
</details>

**3.** Kenapa kehilangan drilling fluid ke formasi sering tanda BAGUS walau dia masalah operasional, dan gimana "blind drilling" itu respons ke situ?

<details><summary>Jawaban</summary>
Karena reservoir geothermal permeabel persis lewat fracture-nya, dan fracture yang sama itu yang nelen drilling fluid. Jadi total loss di interval produksi biasanya berarti bit udah nyampe persis feedzone permeabel yang sumur dibor buat berproduksi darinya — masalah operasional dan target produktif itu fitur yang sama. BLIND DRILLING itu responsnya: alih-alih bertarung nahan returns (yang bakal nge-risk nyumbat fracture yang kamu mau buka), kamu ngebor maju nerima gak ada returns, nyapu lubang dengan air buat ngebersihin cutting. Kamu nukar hole-cleaning/pressure control normal buat ngelindungin feedzone. ⟦TODO-Az: di dry-steam zona-nya mungkin under-pressured, jadi blind drilling itu norma dan steam entry dikelola spesifik.⟧
</details>

**4.** Kenapa beberapa sumur geothermal sering dibor directional dari satu pad?

<details><summary>Jawaban</summary>
Dua alasan. (1) SURFACE FOOTPRINT: ngebor beberapa sumur deviated dari satu pad ngonsentrasiin gangguan permukaan, infrastruktur, dan akses di satu tempat — penting di medan terjal, sering berhutan atau terlindungi tempat field geothermal duduk. (2) TARGETING: permeabilitas geothermal itu struktural, dan banyak darinya hidup di fault dan fracture ber-dip terjal — yang sumur vertikal bisa sejajar dan meleset darinya — jadi trajektori deviated/directional bisa disetir buat motong silang struktur itu dan ngemaksimalin feedzone produktif yang sumur terhubung ke. (Feedzone gak selalu terjal — sebagian duduk di struktur dip-sedang atau kontak stratigrafi — jadi trajektori-nya dicocokin ke structural model bukan diasumsiin vertikal-doang.) Desain trajektori karena itu reservoir-driven, dibidik ke jaringan fracture. ⟦TODO-Az: konfirmasi gimana Darajat nargetin struktur fracture/feedzone-nya secara directional.⟧
</details>`
      }
    },

    // ─────────────── 7. connections ───────────────
    {
      id: 'connections',
      heading: { en: 'Connections', id: 'Koneksi' },
      body: {
        en: `- **Reservoir engineering home**: [Grant & Bixley 2011](item:grant-bixley-2011) covers well design and testing; this module focuses the construction/drilling side that produces the wells the rest of the domain analyses.
- **What the well then tells you**: [Horne 1995](item:horne-1995) — once drilled and completed, the well is well-tested for kh/skin; the completion test is the first read, the well test the refined one.
- **Deliverability of the completed well**: [Acuña 2008](item:acuna-2008) — well diameter and completion (drilling decisions) set the wellbore component of dry-steam deliverability.
- **Targets to hit**: [Cumming 2009](item:cumming-2009) (conceptual/structural model) and [O'Sullivan-Pruess-Lippmann 2001](item:osullivan-pruess-lippmann-2001) (numerical model) define the feedzone targets the trajectory aims for.
- **Economics**: [Sanyal 2005](item:sanyal-2005) — drilling cost (a third to a half of capital) is a primary driver of the levelised cost and reserves economics; faster/reliable wells lower cost per MW.
- **Integrity over life**: [Horne 1995](item:horne-1995) / [Henley-Truesdell-Barton 1984](item:henley-truesdell-barton-1984) — scaling and corrosion drive workovers, re-drills, and rising near-well skin; casing integrity under thermal cycling is a lifelong concern.`,
        id: `- **Rumah reservoir engineering**: [Grant & Bixley 2011](item:grant-bixley-2011) ngebahas desain dan testing sumur; module ini ngefokusin sisi konstruksi/pengeboran yang ngehasilin sumur yang sisa domain analisis.
- **Apa yang sumur lalu ngasih tau**: [Horne 1995](item:horne-1995) — begitu dibor dan di-complete, sumur di-well-test buat kh/skin; completion test bacaan pertama, well test yang dihalusin.
- **Deliverability sumur yang udah di-complete**: [Acuña 2008](item:acuna-2008) — diameter sumur dan completion (keputusan pengeboran) nyetel komponen wellbore deliverability dry-steam.
- **Target yang dicapai**: [Cumming 2009](item:cumming-2009) (conceptual/structural model) dan [O'Sullivan-Pruess-Lippmann 2001](item:osullivan-pruess-lippmann-2001) (numerical model) nentuin target feedzone yang trajektori bidik.
- **Ekonomi**: [Sanyal 2005](item:sanyal-2005) — biaya pengeboran (sepertiga sampai setengah kapital) itu pendorong utama levelised cost dan ekonomi cadangan; sumur lebih cepat/andal nurunin biaya per MW.
- **Integritas sepanjang umur**: [Horne 1995](item:horne-1995) / [Henley-Truesdell-Barton 1984](item:henley-truesdell-barton-1984) — scaling dan korosi ngedorong workover, re-drill, dan skin near-well yang naik; integritas casing di bawah thermal cycling itu perhatian seumur-hidup.`
      }
    },

    // ─────────────── 8. sources ───────────────
    {
      id: 'sources',
      heading: { en: 'Sources', id: 'Sumber' },
      body: {
        en: `Editions and report numbers below are verified against the primary record; the canonical sources for the Darajat dry-steam drilling framing remain Az's to set.
- **Finger, J., and Blankenship, D.** (2010). *Handbook of Best Practices for Geothermal Drilling.* Sandia National Laboratories, SAND2010-6048 (prepared for the IEA Geothermal Implementing Agreement, Annex VII). **(This item.)** Casing, cementing, lost circulation, logging, hardware.
- **Grant, M. A., and Bixley, P. F.** (2011). *Geothermal Reservoir Engineering*, 2nd ed. Academic Press / Elsevier. Well design & testing context (in this catalog).
- **Tester, J. W., et al.** (2006). *The Future of Geothermal Energy* (MIT/INL). Drilling-cost modelling for EGS (in this catalog).
- **Suranta, B. Y., Rasyid, I., Sofyan, A., and Rahutama, A.** (2023). *Best Practices to Achieve Optimal Geothermal Drilling Performance in a Cost-Effective Manner: Case Study of the Fastest Geothermal Well Drilling in Java and Sumatra.* Scientific Contributions Oil and Gas (LEMIGAS), Vol. 46 No. 3 — Indonesian dry-steam rapid-drilling case studies. ⟦TODO-Az: add the Star Energy Darajat drilling reports you teach from.⟧`,
        id: `Edisi dan nomor report di bawah udah diverifikasi lawan rekam primer; sumber kanonik buat framing pengeboran dry-steam Darajat tetap punya Az buat nyetel.
- **Finger, J., dan Blankenship, D.** (2010). *Handbook of Best Practices for Geothermal Drilling.* Sandia National Laboratories, SAND2010-6048 (disiapin buat IEA Geothermal Implementing Agreement, Annex VII). **(Item ini.)** Casing, cementing, lost circulation, logging, hardware.
- **Grant, M. A., dan Bixley, P. F.** (2011). *Geothermal Reservoir Engineering*, ed. ke-2. Academic Press / Elsevier. Konteks desain & testing sumur (di katalog ini).
- **Tester, J. W., dkk.** (2006). *The Future of Geothermal Energy* (MIT/INL). Pemodelan biaya-pengeboran buat EGS (di katalog ini).
- **Suranta, B. Y., Rasyid, I., Sofyan, A., dan Rahutama, A.** (2023). *Best Practices to Achieve Optimal Geothermal Drilling Performance in a Cost-Effective Manner: Case Study of the Fastest Geothermal Well Drilling in Java and Sumatra.* Scientific Contributions Oil and Gas (LEMIGAS), Vol. 46 No. 3 — studi kasus rapid-drilling dry-steam Indonesia. ⟦TODO-Az: tambah report pengeboran Darajat Star Energy yang kamu pakai ngajar.⟧`
      }
    },
  ],

  audio: { enabled: true },

  selfTest: [
    {
      sectionId: 'motivation',
      question: {
        en: 'Why is drilling described as both the largest cost and the physical foundation of a geothermal project, and what makes geothermal drilling distinctively hard?',
        id: 'Kenapa pengeboran digambarkan sebagai baik biaya terbesar maupun fondasi fisik proyek geothermal, dan apa yang bikin pengeboran geothermal khas susah?'
      },
      prompt: { en: 'Before continuing, try answering:', id: 'Sebelum lanjut, coba jawab:' },
      answer: {
        en: 'Cost: a third to a half of project capital is literally drilled into the ground as steel and cement, so drilling dominates the budget and the levelised cost. Foundation: every downstream activity — well testing (kh/skin), deliverability, decline, geochemical sampling — assumes a well that has already been drilled to the feedzone and cased to last; drilling produces the object everything else reads. What makes it distinctively hard: high temperature (degrades fluids, stresses tools, demands thermal cement), hard abrasive igneous/metamorphic rock (slow penetration, short bit life), pervasive lost circulation into the productive fractures, large diameters for high mass flow, and thermal cycling that fatigues casing. ⟦TODO-Az: dry-steam under-pressured zones turn lost circulation into routine blind drilling.⟧',
        id: 'Biaya: sepertiga sampai setengah kapital proyek secara harfiah dibor ke tanah sebagai baja dan semen, jadi pengeboran mendominasi budget dan levelised cost. Fondasi: setiap aktivitas hilir — well testing (kh/skin), deliverability, decline, sampling geokimia — ngasumsiin sumur yang udah dibor sampai feedzone dan di-casing buat bertahan; pengeboran ngehasilin objek yang semua lain baca. Apa yang bikin dia khas susah: suhu tinggi (ngedegradasi fluida, nekan tool, nuntut cement termal), batuan igneous/metamorphic keras abrasif (penetrasi lambat, umur bit pendek), lost circulation pervasif ke fracture produktif, diameter besar buat mass flow tinggi, dan thermal cycling yang nge-fatigue casing. ⟦TODO-Az: zona under-pressured dry-steam ngubah lost circulation jadi blind drilling rutin.⟧'
      }
    },
    {
      sectionId: 'formalization',
      question: {
        en: 'Why does heating a fully cemented casing string generate large stress, and how does the cement job address it?',
        id: 'Kenapa manasin casing string yang di-cement penuh ngehasilin stress besar, dan gimana cement job ngatasinya?'
      },
      prompt: { en: 'Before continuing, try answering:', id: 'Sebelum lanjut, coba jawab:' },
      answer: {
        en: 'Steel expands when heated; if it is restrained from expanding, that prevented strain shows up as stress. A cemented casing constrained over a temperature rise ΔT develops an axial thermal stress on the order of σ ~ E·α·ΔT (E the steel modulus, α the expansion coefficient). For a geothermal ΔT of a couple hundred degrees this is large and cyclic (heating on production, cooling on shut-in/injection). The cement job addresses it by bonding the casing to the formation continuously, ideally to surface: the thermal load is then transferred into the rock and distributed along the whole string rather than concentrating, which prevents buckling, parting, and fatigue and also seals the annulus against inter-zonal fluid migration. A partial or poor cement sheath leaves the string free to buckle and leak. ⟦TODO-Az: confirm Darajat production-casing cementing and grades.⟧',
        id: 'Baja ngembang pas dipanasin; kalau dia ditahan dari ngembang, strain yang dicegah itu muncul sebagai stress. Casing yang di-cement ditahan over kenaikan temperatur ΔT ngembangin axial thermal stress pada orde σ ~ E·α·ΔT (E modulus baja, α koefisien ekspansi). Buat ΔT geothermal beberapa ratus derajat ini besar dan siklik (manas pas produksi, dingin pas shut-in/injeksi). Cement job ngatasinya dengan ngeboding casing ke formasi kontinu, idealnya ke permukaan: thermal load lalu ditransfer ke batuan dan disebar sepanjang seluruh string bukan ngonsentrasi, yang nyegah buckling, putus, dan fatigue dan juga nyegel annulus lawan migrasi fluida antar-zonal. Cement sheath parsial atau buruk ngebiarin string bebas buckling dan bocor. ⟦TODO-Az: konfirmasi cementing dan grade production-casing Darajat.⟧'
      }
    },
    {
      sectionId: 'applications',
      question: {
        en: 'How does drilling stay coupled to reservoir engineering across a field\'s producing life, rather than being a one-time campaign?',
        id: 'Gimana pengeboran tetap ter-couple ke reservoir engineering sepanjang umur produksi field, bukan kampanye sekali?'
      },
      prompt: { en: 'Before continuing, try answering:', id: 'Sebelum lanjut, coba jawab:' },
      answer: {
        en: 'Because the field keeps needing new and repaired wells. As producers decline (Sanyal), MAKE-UP WELLS are drilled to hold capacity; as feedzones deplete or migrate, DIRECTIONAL RE-DRILLS chase them; and as casing/cement integrity degrades or scale builds, WORKOVERS repair and clean out (linking to Gallup on scaling and to well integrity). The decline forecast and the connection map (Axelsson) tell the drilling group where and when to drill next, and each new well in turn feeds back kh/skin (Horne) and deliverability (Acuña) data. So drilling and reservoir engineering are in continuous dialogue over the whole field life, not a single up-front phase. ⟦TODO-Az: confirm Darajat\'s make-up drilling and workover cadence.⟧',
        id: 'Karena field terus butuh sumur baru dan diperbaiki. Seiring produser declining (Sanyal), SUMUR MAKE-UP dibor buat nahan kapasitas; seiring feedzone di-deplesi atau migrasi, DIRECTIONAL RE-DRILL ngejar mereka; dan seiring integritas casing/cement terdegradasi atau scale numpuk, WORKOVER ngeperbaiki dan ngebersihin (nge-link ke Gallup soal scaling dan ke integritas sumur). Forecast decline dan peta koneksi (Axelsson) ngasih tau grup pengeboran di mana dan kapan ngebor berikutnya, dan tiap sumur baru pada gilirannya nyuapin balik data kh/skin (Horne) dan deliverability (Acuña). Jadi pengeboran dan reservoir engineering dalam dialog terus-menerus over seluruh umur field, bukan satu fase di-depan. ⟦TODO-Az: konfirmasi kadens make-up drilling dan workover Darajat.⟧'
      }
    },
  ],
};
