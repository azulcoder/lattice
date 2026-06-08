// ─────────────────────────────────────────────────────────────────────────
// ⚠ DRAFT — AWAITING AZ DOMAIN REVIEW (option (b): "I draft, you correct").
// Geothermal content is Az-authored (Reservoir & Production Engineer, 6 yrs
// Star Energy Geothermal Darajat — dry-steam). Schema-valid + renderable,
// NOT finalized. Domain claims flagged **⟦TODO-Az: …⟧**. The dry-steam
// adaptation here is squarely Az's.
// Full prep: notes/gallup-scaling-corrosion-research-prep-2026-06-07.md
//
// OPEN TODO-Az ITEMS (prep §5):
//   A. HEADLINE: the dry-steam adaptation — a vapour-dominated field produces
//      steam + NCG, NOT brine, so condensate chemistry + H₂S/NCG abatement +
//      line corrosion dominate; brine silica/calcite scaling much less so. Most
//      of Gallup's review is liquid/brine fields. The module teaches the
//      standard (liquid-field) scaling/corrosion engineering and flags the
//      dry-steam shift as the teaching point.
//   B. Darajat scaling/corrosion problems, NCG/H₂S load, chemical-treatment program.
//   C. pH-mod / inhibitor program relevance to a dry-steam field.
//   D. Worked-example numbers are ILLUSTRATIVE placeholders.
//   E. Reinjection-side scaling coupling (Axelsson).
//   F. Seed cards DEFERRED until Az signs off (card-coverage exempt: geothermal
//      domain + DRAFT marker).
// ─────────────────────────────────────────────────────────────────────────

export const CONTENT = {
  itemId: 'gallup-2009',
  estimatedReadMinutes: 36,

  author: {
    fullName: { en: 'Darrell L. Gallup', id: 'Darrell L. Gallup' },
    affiliation: {
      en: 'Production/process chemist with decades in geothermal and petroleum (Texaco, Unocal, Chevron Geothermal, then Thermochem). An internationally recognised authority on geothermal scaling, corrosion, and production chemistry; inventor of the pH-modification ("pH-mod") process for silica-scale control.',
      id: 'Production/process chemist dengan puluhan tahun di geothermal dan petroleum (Texaco, Unocal, Chevron Geothermal, lalu Thermochem). Otoritas yang diakui internasional di scaling, korosi, dan kimia produksi geothermal; penemu proses pH-modification ("pH-mod") buat kontrol silica-scale.'
    },
    tagline: {
      en: 'The same dissolved chemistry that lets you take a reservoir\'s temperature will, left alone, plate your wells and pipes with silica and calcite and eat your steel from the inside. Production chemistry is the engineering of keeping a geothermal field flowing.',
      id: 'Kimia terlarut yang sama yang ngebiarin kamu ngambil temperatur reservoir bakal, kalau dibiarin, ngelapisin sumur dan pipa kamu dengan silika dan kalsit dan makan baja kamu dari dalam. Kimia produksi itu engineering ngejaga field geothermal tetap ngalir.'
    },
    bio: {
      en: `Darrell Gallup spent decades on the unglamorous problem that decides whether a geothermal field actually keeps running: the chemistry of the produced fluid as it cools, flashes, and is reinjected. Across Unocal, Chevron Geothermal, and later Thermochem he worked the full span of geothermal **flow assurance** — silica and calcite **scaling**, **corrosion** by H₂S/CO₂/chloride, and **non-condensable-gas** handling — and is best known as the inventor of the **pH-modification process** for controlling silica scale (patented at Unocal and applied at the Salton Sea, one of the most chemically hostile brines in the industry). His 2009 *Geothermics* review, "Production engineering in geothermal technology," surveys the field's practical chemistry challenges and their controls.

⟦TODO-Az: bio/affiliation are from public record; confirm before finalizing. Anchoring a scaling/corrosion module on Gallup is a drafting choice, and a deliberate one — his career is the production-chemistry counterweight to the *equilibrium* geochemistry of Henley/Giggenbach/Arnórsson already in this catalog. Tell me if you would rather anchor on a specific scaling-control paper or on Star Energy's own chemical-treatment practice.⟧`,
      id: `Darrell Gallup ngabisin puluhan tahun di masalah gak-glamor yang nentuin apakah field geothermal beneran terus jalan: kimia fluida yang diproduksi seiring dia mendingin, flash, dan direinjeksi. Lintas Unocal, Chevron Geothermal, dan kemudian Thermochem dia ngerjain rentang penuh **flow assurance** geothermal — **scaling** silika dan kalsit, **korosi** oleh H₂S/CO₂/klorida, dan penanganan **non-condensable-gas** — dan paling dikenal sebagai penemu **proses pH-modification** buat ngontrol silica scale (dipatenin di Unocal dan diterapin di Salton Sea, salah satu brine paling hostil secara kimia di industri). Review *Geothermics* 2009-nya, "Production engineering in geothermal technology," nyurvei tantangan kimia praktis field dan kontrolnya.

⟦TODO-Az: bio/afiliasi dari public record; konfirmasi sebelum finalisasi. Nge-anchor module scaling/korosi ke Gallup itu pilihan drafting, dan disengaja — karirnya itu penyeimbang kimia-produksi buat geokimia *kesetimbangan* Henley/Giggenbach/Arnórsson yang udah di katalog ini. Bilang kalau kamu lebih mau nge-anchor ke paper kontrol-scaling spesifik atau ke praktik chemical-treatment Star Energy sendiri.⟧`
    },
    focus: {
      en: `Geochemistry has two faces in a geothermal field. One reads the fluid to learn about the reservoir (geothermometry — the Giggenbach module). The other fights the fluid to keep the field running, because the same dissolved load, once the fluid cools and flashes on its way up and through the plant, comes out of solution and attacks the hardware. **Production chemistry** is that second face — the engineering of **scaling**, **corrosion**, and **gas handling**:
- **Silica scaling**: as the fluid cools below silica saturation — and as flashing concentrates the leftover brine — amorphous silica polymerises and plates out on pipes, separators, and especially injection wells.
- **Calcite scaling**: when the fluid first flashes, CO₂ leaves for the steam, the liquid pH rises, and calcium carbonate drops out right at the flash point in the wellbore.
- **Corrosion**: H₂S, CO₂, chloride, low pH, and any oxygen ingress attack carbon steel — pitting, sulfide stress cracking, wall loss.
- **Non-condensable gas (NCG)**: CO₂ and H₂S ride out with the steam, loading the condenser and demanding H₂S abatement.
The controls are a chemist's toolkit: keep the fluid above saturation, manage residence time, **pH-modify** or acidify, dose **inhibitors** (including downhole capillary injection for calcite), select corrosion-resistant materials, and exclude oxygen. ⟦TODO-Az: for a vapour-dominated DRY-STEAM field like Darajat the balance shifts hard — the wellhead produces steam + NCG rather than brine, so wellhead *brine* silica/calcite scaling is much less the issue, and the dominant problems become condensate-side chemistry, H₂S/NCG abatement, and corrosion in condensate and reinjection lines. Most of the standard literature (and Gallup's review) is liquid/brine fields; the dry-steam application is yours. The module teaches the standard engineering and flags the dry-steam shift.⟧`,
      id: `Geokimia punya dua wajah di field geothermal. Satu baca fluida buat belajar soal reservoir (geothermometry — module Giggenbach). Yang lain ngelawan fluida buat ngejaga field tetap jalan, karena muatan terlarut yang sama, begitu fluidanya mendingin dan flash dalam perjalanan naik dan lewat plant, keluar dari larutan dan nyerang hardware. **Kimia produksi** itu wajah kedua itu — engineering **scaling**, **korosi**, dan **penanganan gas**:
- **Silica scaling**: seiring fluida mendingin di bawah silica saturation — dan seiring flashing ngonsentrasiin brine sisa — silika amorf berpolimerisasi dan nempel di pipa, separator, dan terutama injection well.
- **Calcite scaling**: pas fluida pertama flash, CO₂ pergi ke steam, pH liquid naik, dan calcium carbonate keluar persis di flash point di wellbore.
- **Korosi**: H₂S, CO₂, klorida, pH rendah, dan oksigen yang masuk nyerang carbon steel — pitting, sulfide stress cracking, kehilangan dinding.
- **Non-condensable gas (NCG)**: CO₂ dan H₂S naik bareng steam, ngeloadin condenser dan nuntut H₂S abatement.
Kontrolnya toolkit chemist: jaga fluida di atas saturation, kelola residence time, **pH-modify** atau asamkan, dosis **inhibitor** (termasuk downhole capillary injection buat calcite), pilih material tahan-korosi, dan ekslusi oksigen. ⟦TODO-Az: buat field DRY-STEAM vapour-dominated kayak Darajat keseimbangannya bergeser keras — wellhead ngeproduksi steam + NCG bukan brine, jadi *brine* silica/calcite scaling di wellhead jauh kurang jadi isu, dan masalah dominannya jadi kimia sisi-condensate, H₂S/NCG abatement, dan korosi di condensate dan reinjection line. Mayoritas literatur standar (dan review Gallup) itu field liquid/brine; aplikasi dry-steam-nya punya kamu. Module ngajarin engineering standar dan ngeflag pergeseran dry-steam.⟧`
    },
    intellectualLineage: {
      en: `Production chemistry sits downstream of the **equilibrium geochemistry** of Henley, Truesdell & Barton (mineral-fluid equilibria) and Giggenbach (solute/gas chemistry): those frameworks say what is dissolved and why, and production chemistry asks what happens when the fluid leaves equilibrium — cools, flashes, degasses — and the dissolved load precipitates or turns aggressive. The control technologies borrow from oilfield **flow assurance** and water treatment (inhibitors, pH control, materials engineering), adapted to hot, gas-rich, high-silica geothermal fluids. Gallup's **pH-modification** approach to silica is a signature geothermal adaptation. ⟦TODO-Az: the geothermal-specific lineage to foreground — the equilibrium-geochemistry items in this catalog (Henley-Truesdell-Barton, Giggenbach, Arnórsson) on the science side, and the plant/utilization item (DiPippo) on the engineering side. Confirm.⟧`,
      id: `Kimia produksi duduk di hilir **geokimia kesetimbangan** Henley, Truesdell & Barton (kesetimbangan fluida-mineral) dan Giggenbach (kimia solute/gas): framework itu bilang apa yang terlarut dan kenapa, dan kimia produksi nanya apa yang terjadi pas fluida ninggalin kesetimbangan — mendingin, flash, degas — dan muatan terlarut presipitasi atau jadi agresif. Teknologi kontrolnya minjem dari **flow assurance** oilfield dan water treatment (inhibitor, kontrol pH, material engineering), diadaptasi ke fluida geothermal yang panas, kaya-gas, tinggi-silika. Pendekatan **pH-modification** Gallup buat silika itu adaptasi geothermal khas. ⟦TODO-Az: lineage spesifik-geothermal buat dimajuin — item geokimia-kesetimbangan di katalog ini (Henley-Truesdell-Barton, Giggenbach, Arnórsson) di sisi sains, dan item plant/utilisasi (DiPippo) di sisi engineering. Konfirmasi.⟧`
    },
    keyCollaborators: {
      en: `Gallup's world is the operator and service-company production-chemistry community (Unocal/Chevron Geothermal, Thermochem) and the Geothermal Resources Council / Stanford Workshop venues. The scientific neighbours in this catalog are the equilibrium geochemists — **Henley, Truesdell & Barton**, **Giggenbach**, **Arnórsson** — whose chemistry his engineering manages. ⟦TODO-Az: confirm/adjust, and whether Star Energy / Indonesian production-chemistry colleagues or programs belong here.⟧`,
      id: `Dunia Gallup itu komunitas kimia-produksi operator dan service-company (Unocal/Chevron Geothermal, Thermochem) dan venue Geothermal Resources Council / Stanford Workshop. Tetangga sains di katalog ini itu para geokimiawan kesetimbangan — **Henley, Truesdell & Barton**, **Giggenbach**, **Arnórsson** — yang kimianya engineering-nya kelola. ⟦TODO-Az: konfirmasi/sesuaikan, dan apakah kolega atau program kimia-produksi Star Energy / Indonesia masuk di sini.⟧`
    },
    legacy: {
      en: `Scaling and corrosion are quiet killers of geothermal economics: a silica-choked injection well, a calcite-plugged producer, or a corroded pipeline does not announce itself until output drops or something fails, and the cost is in lost generation and constant workovers. Gallup's contribution is to treat production chemistry as a designed, monitored discipline — predict the scaling and corrosion from the fluid chemistry, then engineer it out with pH control, inhibitors, materials, and operating choices — rather than reacting to failures. ⟦TODO-Az: the lasting value FOR DARAJAT is the dry-steam version this draft cannot finalize — in a vapour-dominated field the chemistry battle is fought on the steam/condensate and NCG side (H₂S abatement, condensate corrosion, reinjection-line chemistry) rather than on a producing brine. Treat the module as the verified liquid-field engineering plus a flagged dry-steam checklist for your field.⟧`,
      id: `Scaling dan korosi itu pembunuh diam-diam ekonomi geothermal: injection well yang tersumbat-silika, produser yang tersumbat-calcite, atau pipeline yang terkorosi gak ngumumin dirinya sampai output turun atau sesuatu gagal, dan biayanya di generasi yang hilang dan workover terus-menerus. Kontribusi Gallup itu ngeperlakukan kimia produksi sebagai disiplin yang didesain, dimonitor — prediksi scaling dan korosi dari kimia fluida, terus engineer dia keluar dengan kontrol pH, inhibitor, material, dan pilihan operasi — bukan bereaksi ke kegagalan. ⟦TODO-Az: nilai abadi BUAT DARAJAT itu versi dry-steam yang draft ini gak bisa finalin — di field vapour-dominated pertarungan kimia dilawan di sisi steam/condensate dan NCG (H₂S abatement, korosi condensate, kimia reinjection-line) bukan di brine yang berproduksi. Perlakukan module sebagai engineering liquid-field terverifikasi plus checklist dry-steam yang di-flag buat field kamu.⟧`
    },
    keyWorks: [
      { year: 2009, title: 'Production engineering in geothermal technology: A review (this item)', venue: 'Geothermics 38(3), 326–334' },
      { year: 2002, title: 'Investigations of organic inhibitors for silica scale control from geothermal brines', venue: 'Geothermics ⟦TODO-Az: confirm year/volume⟧' },
      { year: 1996, title: 'pH-modification ("pH-mod") process for silica-scale control (Unocal; Salton Sea)', venue: 'Unocal patent / GRC ⟦TODO-Az: confirm⟧' },
      { year: 1984, title: 'Fluid-Mineral Equilibria in Hydrothermal Systems (Henley, Truesdell, Barton) — the scaling thermodynamics root (in this catalog)', venue: 'SEG Reviews' },
      { year: 1988, title: 'Geothermal solute equilibria (Giggenbach) — the fluid chemistry behind the scaling (in this catalog)', venue: 'Geochimica et Cosmochimica Acta' },
    ],
  },

  sections: [
    // ─────────────── 1. motivation ───────────────
    {
      id: 'motivation',
      heading: { en: 'Why this matters', id: 'Kenapa ini penting' },
      body: {
        en: `A geothermal field can have excellent permeability, strong wells, and a hot reservoir, and still bleed money — because the fluid that carries the heat also carries dissolved minerals and aggressive gases, and as that fluid cools, flashes, and is reinjected, it deposits scale and corrodes steel. **Production chemistry** is the engineering discipline that keeps the field flowing against this. It is the operational flip-side of the geothermometry in the Giggenbach module: there, the dissolved chemistry was a *signal* to read; here, it is a *liability* to manage.

Three battles dominate:

- **Silica scaling.** Geothermal brines are silica-rich. As the fluid cools below silica saturation — and especially as **flashing concentrates the remaining brine** by boiling off steam — amorphous silica becomes supersaturated, polymerises, and deposits in surface pipework, separators, and most damagingly in **injection wells**, slowly choking the path the spent fluid must take back into the ground.
- **Calcite scaling.** When the fluid first **flashes** in the wellbore, CO₂ escapes into the steam phase; that raises the liquid pH and tips calcium carbonate into supersaturation, so calcite deposits **right at the flash point** inside the well — a classic cause of producer plugging.
- **Corrosion.** H₂S, CO₂, chloride, low pH, and any ingress of oxygen (especially in cooled condensate and injection lines) attack carbon steel: pitting, sulfide stress cracking, and general wall loss that threaten well and surface integrity.

On top of these, the **non-condensable gases** (mainly CO₂ and H₂S) that come out with the steam load the condenser and must be extracted and abated (H₂S is both a corrosion agent and an environmental/safety concern).

The controls are a designed program, not improvisation: keep the fluid **above silica saturation**, manage **residence time**, **acidify / pH-modify** to slow silica polymerisation, dose **scale inhibitors** (including a downhole capillary string for calcite), select **corrosion-resistant materials**, and **exclude oxygen** — all guided by monitoring (silica polymerisation kinetics, suspended solids, corrosion coupons).

⟦TODO-Az: this is the part that flips for your field, and it is your call. A vapour-dominated DRY-STEAM reservoir like Darajat produces **steam plus non-condensable gas, not brine**, so the wellhead *brine* silica/calcite scaling above is largely not the dominant problem. Instead the chemistry battle moves to the **condensate** side (silica and pH in the condensed steam), to **H₂S and NCG abatement** (which is large for dry-steam plants), and to **corrosion in condensate and reinjection lines**. Most of the standard scaling/corrosion literature (and Gallup's review) is written for liquid/brine fields; the dry-steam application is yours. The module teaches the standard engineering and flags the shift.⟧`,
        id: `Field geothermal bisa punya permeabilitas bagus, sumur kuat, dan reservoir panas, dan tetap berdarah uang — karena fluida yang bawa panas juga bawa mineral terlarut dan gas agresif, dan seiring fluida itu mendingin, flash, dan direinjeksi, dia ngendapin scale dan ngorosi baja. **Kimia produksi** itu disiplin engineering yang ngejaga field tetap ngalir lawan ini. Dia sisi-balik operasional dari geothermometry di module Giggenbach: di sana, kimia terlarut itu *sinyal* buat dibaca; di sini, dia *liability* buat dikelola.

Tiga pertarungan mendominasi:

- **Silica scaling.** Brine geothermal kaya-silika. Seiring fluida mendingin di bawah silica saturation — dan terutama seiring **flashing ngonsentrasiin brine sisa** dengan ngeboilin steam — silika amorf jadi supersaturated, berpolimerisasi, dan ngendap di pipework permukaan, separator, dan paling merusak di **injection well**, perlahan nyumbat jalur yang fluida bekas harus ambil balik ke tanah.
- **Calcite scaling.** Pas fluida pertama **flash** di wellbore, CO₂ lolos ke fase steam; itu naikin pH liquid dan ngedorong calcium carbonate ke supersaturation, jadi calcite ngendap **persis di flash point** di dalam sumur — penyebab klasik penyumbatan produser.
- **Korosi.** H₂S, CO₂, klorida, pH rendah, dan masuknya oksigen apa pun (terutama di condensate dingin dan injection line) nyerang carbon steel: pitting, sulfide stress cracking, dan kehilangan dinding umum yang ngancam integritas sumur dan permukaan.

Di atas ini, **non-condensable gas** (terutama CO₂ dan H₂S) yang keluar bareng steam ngeloadin condenser dan harus diekstrak dan di-abate (H₂S itu baik agen korosi maupun perhatian lingkungan/keselamatan).

Kontrolnya program yang didesain, bukan improvisasi: jaga fluida **di atas silica saturation**, kelola **residence time**, **asamkan / pH-modify** buat ngelambatin polimerisasi silika, dosis **scale inhibitor** (termasuk downhole capillary string buat calcite), pilih **material tahan-korosi**, dan **ekslusi oksigen** — semua dipandu monitoring (kinetika polimerisasi silika, suspended solids, corrosion coupon).

⟦TODO-Az: ini bagian yang kebalik buat field kamu, dan itu keputusan kamu. Reservoir DRY-STEAM vapour-dominated kayak Darajat ngeproduksi **steam plus non-condensable gas, bukan brine**, jadi *brine* silica/calcite scaling di wellhead di atas sebagian besar bukan masalah dominan. Sebagai gantinya pertarungan kimia pindah ke sisi **condensate** (silika dan pH di steam yang terkondensasi), ke **H₂S dan NCG abatement** (yang besar buat plant dry-steam), dan ke **korosi di condensate dan reinjection line**. Mayoritas literatur scaling/korosi standar (dan review Gallup) ditulis buat field liquid/brine; aplikasi dry-steam-nya punya kamu. Module ngajarin engineering standar dan ngeflag pergeserannya.⟧`
      }
    },

    // ─────────────── 2. intuition ───────────────
    {
      id: 'intuition',
      heading: { en: 'Intuition', id: 'Intuisi' },
      body: {
        en: `Hot water dissolves more than cold water — that is the whole intuition for scaling. Down in the reservoir the fluid is hot and holds a large dissolved load comfortably. Bring it up, cool it, and boil part of it away, and the water can no longer hold what it carried; the surplus has to go somewhere, and it goes onto your pipes.

**Silica is the cooling-and-concentrating problem.** Two things push silica out of solution: cooling (less soluble cold) and **flashing** (when steam boils off, the silica that was in that water stays behind in less liquid, so its concentration jumps). Once supersaturated, dissolved silica does not deposit instantly — it first **polymerises**, linking up into ever-larger particles, and that takes time. This kinetic lag is the lever: if you can move the fluid through the plant and into the injection wells *before* the silica polymerises and sticks, you avoid the scale; if it lingers, it plates out. Hence the controls — keep it hot (above saturation), keep it moving (residence-time control), or chemically slow the polymerisation (pH-modification, inhibitors).

**Calcite is the flashing-and-degassing problem, and it is sneaky.** Calcite is *less* soluble when CO₂ leaves the water. So the instant the fluid flashes in the wellbore and CO₂ partitions into the new steam, the remaining liquid suddenly cannot hold its calcium carbonate, and calcite crystallises **right there, at the flash point**, inside the well. That is why calcite scale famously forms as a hard ring at a specific depth — the boiling depth — rather than everywhere. Control it by injecting an inhibitor *below* that depth (a thin capillary string), so the crystals never get a foothold.

**Corrosion is the fluid fighting back.** The same gases that scale (CO₂) and the field's H₂S, plus chloride and any leaked-in oxygen, make the fluid chemically aggressive to ordinary steel. You manage it the way any chemist would: pick metals that resist the specific attack, dose inhibitors, and above all keep oxygen out, because oxygen turns a manageable fluid into a fast-corroding one.

⟦TODO-Az: the dry-steam intuition inverts the silica/calcite picture — if the well delivers dry steam, there is no flashing brine at the wellhead to concentrate silica or drop calcite, so those classic problems recede and the action moves to where the steam condenses (the condensate becomes the corrosive/scaling fluid) and to handling the H₂S and CO₂ that came up with the steam. Please confirm how the chemistry battle actually plays out at Darajat before this becomes a teaching point.⟧`,
        id: `Air panas ngelarutin lebih banyak dari air dingin — itu seluruh intuisi buat scaling. Di bawah di reservoir fluidanya panas dan nahan muatan terlarut besar dengan nyaman. Bawa dia naik, dinginin, dan boilin sebagian, dan airnya gak bisa lagi nahan apa yang dia bawa; surplus-nya harus pergi ke suatu tempat, dan dia pergi ke pipa kamu.

**Silika itu masalah cooling-dan-concentrating.** Dua hal ndorong silika keluar dari larutan: cooling (dingin kurang larut) dan **flashing** (pas steam boil off, silika yang ada di air itu tetap tertinggal di liquid yang lebih sedikit, jadi konsentrasinya melonjak). Begitu supersaturated, silika terlarut gak ngendap instan — dia pertama **berpolimerisasi**, ngegabung jadi partikel makin besar, dan itu makan waktu. Lag kinetik ini lever-nya: kalau kamu bisa mindahin fluida lewat plant dan ke injection well *sebelum* silika berpolimerisasi dan nempel, kamu ngehindarin scale; kalau dia berlama-lama, dia plating out. Maka kontrolnya — jaga dia panas (di atas saturation), jaga dia gerak (kontrol residence-time), atau secara kimia lambatin polimerisasi (pH-modification, inhibitor).

**Calcite itu masalah flashing-dan-degassing, dan dia licik.** Calcite *kurang* larut pas CO₂ ninggalin air. Jadi seketika fluida flash di wellbore dan CO₂ partisi ke steam baru, liquid sisa tiba-tiba gak bisa nahan calcium carbonate-nya, dan calcite mengkristal **persis di situ, di flash point**, di dalam sumur. Itu kenapa calcite scale terkenal kebentuk sebagai cincin keras di kedalaman spesifik — kedalaman boiling — bukan di mana-mana. Kontrol dia dengan nginjeksi inhibitor *di bawah* kedalaman itu (capillary string tipis), supaya kristalnya gak pernah dapet pijakan.

**Korosi itu fluida ngelawan balik.** Gas yang sama yang nge-scale (CO₂) dan H₂S field, plus klorida dan oksigen yang bocor masuk, bikin fluida agresif secara kimia ke baja biasa. Kamu ngelolanya kayak chemist mana pun: pilih logam yang tahan serangan spesifik, dosis inhibitor, dan di atas semua jaga oksigen keluar, karena oksigen ngubah fluida yang bisa-dikelola jadi yang cepat-korosi.

⟦TODO-Az: intuisi dry-steam ngebalik gambaran silika/calcite — kalau sumur ngirim dry steam, gak ada brine yang flashing di wellhead buat ngonsentrasiin silika atau ngedrop calcite, jadi masalah klasik itu surut dan aksinya pindah ke tempat steam mengkondensasi (condensate jadi fluida korosif/scaling) dan ke nanganin H₂S dan CO₂ yang naik bareng steam. Tolong konfirmasi gimana pertarungan kimia sebenarnya berlangsung di Darajat sebelum ini jadi teaching point.⟧`
      }
    },

    // ─────────────── 3. formalization ───────────────
    {
      id: 'formalization',
      heading: { en: 'The mechanisms, formalized', id: 'Mekanismenya, diformalkan' },
      body: {
        en: `**Silica saturation and flashing.** Amorphous-silica solubility rises with temperature. Define the **silica saturation index** as the ratio of dissolved silica to its solubility at the local temperature; scaling risk appears when this exceeds 1. Two processes push it up: **cooling** (lowers the solubility denominator) and **flashing** — boiling off a steam fraction $y$ concentrates the non-volatile silica in the residual liquid by roughly $1/(1-y)$. Supersaturated silica then **polymerises** at a kinetically controlled rate (faster at higher supersaturation and certain pH), so deposition depends on the **residence time** between supersaturation and the injection wells. Controls follow directly: stay above saturation (limit cooling), shorten or lengthen residence to control where polymerised silica drops, **lower the pH** (Gallup pH-modification) to slow polymerisation, or dose inhibitors. ⟦TODO-Az: exact solubility correlations, the pH-mod set-point, and inhibitor chemistry are yours.⟧

**Calcite and CO₂ partitioning.** Calcite solubility is *retrograde* and strongly tied to dissolved CO₂: schematically, dissolved bicarbonate equilibrium means losing CO₂ raises pH and supersaturates $\\mathrm{CaCO_3}$. When the fluid **flashes**, CO₂ preferentially enters the steam, so calcite supersaturates abruptly at the **flash horizon** in the wellbore — which is why calcite scale localises at the boiling depth. Control: inject scale **inhibitor below the flash point** (capillary string), or move the flash to surface.

**Corrosion drivers.** Aggressiveness rises with H₂S and CO₂ partial pressures, chloride concentration, temperature, and especially **dissolved O₂** (even trace oxygen sharply accelerates attack on carbon steel and enables pitting). Failure modes include sulfide stress cracking and pitting. Controls: material selection (corrosion-resistant alloys for the worst duty), corrosion inhibitors, and rigorous oxygen exclusion.

**NCG / H₂S.** The non-condensable gases (CO₂, H₂S) partition into the steam and arrive at the plant, where they must be extracted from the condenser (they degrade vacuum/efficiency) and H₂S abated (e.g. oxidised to elemental sulfur).

⟦TODO-Az: the dry-steam formalization is squarely your domain.
  1. **No producing brine at the wellhead.** With steam + NCG produced, the brine silica/calcite scaling formalism above does not apply at the well; the relevant chemistry is the **condensate** (where steam condenses, silica/pH/corrosion re-emerge) and the **gas** (NCG load, H₂S abatement).
  2. **Reinjection-side scaling.** Spent condensate/brine going back down can scale the injectors (links to Axelsson) — set the Darajat reinjection chemistry.
  3. **Constants & program.** The solubility correlations, pH-mod set-points, inhibitor and abatement chemistry, and the actual Darajat treatment program are yours.
The saturation/flashing/polymerisation, calcite-at-flash, corrosion-driver, and NCG mechanisms above are the verified, generally-applicable backbone.⟧`,
        id: `**Silica saturation dan flashing.** Kelarutan amorphous-silica naik sama temperatur. Definisikan **silica saturation index** sebagai rasio silika terlarut ke kelarutannya di temperatur lokal; risiko scaling muncul pas ini ngelebihin 1. Dua proses ndorong dia naik: **cooling** (nurunin denominator kelarutan) dan **flashing** — ngeboilin fraksi steam $y$ ngonsentrasiin silika non-volatile di liquid residual sebesar kira-kira $1/(1-y)$. Silika supersaturated lalu **berpolimerisasi** di laju yang dikontrol-kinetik (lebih cepat di supersaturasi lebih tinggi dan pH tertentu), jadi deposisi bergantung pada **residence time** antara supersaturasi dan injection well. Kontrol ngikut langsung: tetap di atas saturation (batasin cooling), perpendek atau perpanjang residence buat ngontrol di mana silika terpolimerisasi ngedrop, **turunin pH** (pH-modification Gallup) buat ngelambatin polimerisasi, atau dosis inhibitor. ⟦TODO-Az: korelasi kelarutan persis, set-point pH-mod, dan kimia inhibitor itu punya kamu.⟧

**Calcite dan partisi CO₂.** Kelarutan calcite itu *retrograde* dan kuat terikat ke CO₂ terlarut: secara skematis, kesetimbangan bikarbonat terlarut berarti kehilangan CO₂ naikin pH dan nyupersaturasiin $\\mathrm{CaCO_3}$. Pas fluida **flash**, CO₂ secara preferensial masuk ke steam, jadi calcite supersaturasi mendadak di **flash horizon** di wellbore — itu kenapa calcite scale terlokalisasi di kedalaman boiling. Kontrol: injeksi **inhibitor di bawah flash point** (capillary string), atau pindahin flash ke permukaan.

**Pendorong korosi.** Agresivitas naik sama tekanan parsial H₂S dan CO₂, konsentrasi klorida, temperatur, dan terutama **O₂ terlarut** (bahkan oksigen jejak tajam ngepercepat serangan ke carbon steel dan ngebikin pitting). Failure mode termasuk sulfide stress cracking dan pitting. Kontrol: pemilihan material (alloy tahan-korosi buat duty terburuk), inhibitor korosi, dan ekslusi oksigen yang ketat.

**NCG / H₂S.** Non-condensable gas (CO₂, H₂S) partisi ke steam dan tiba di plant, di mana mereka harus diekstrak dari condenser (mereka ngedegradasi vacuum/efisiensi) dan H₂S di-abate (misal dioksidasi jadi elemental sulfur).

⟦TODO-Az: formalisasi dry-steam itu persis domain kamu.
  1. **Gak ada brine berproduksi di wellhead.** Dengan steam + NCG diproduksi, formalisme brine silica/calcite scaling di atas gak berlaku di sumur; kimia yang relevan itu **condensate** (di mana steam mengkondensasi, silika/pH/korosi muncul lagi) dan **gas** (NCG load, H₂S abatement).
  2. **Scaling sisi-reinjeksi.** Condensate/brine bekas yang balik turun bisa nge-scale injektor (nge-link ke Axelsson) — set kimia reinjeksi Darajat.
  3. **Konstanta & program.** Korelasi kelarutan, set-point pH-mod, kimia inhibitor dan abatement, dan program treatment Darajat sebenarnya itu punya kamu.
Mekanisme saturation/flashing/polimerisasi, calcite-di-flash, pendorong-korosi, dan NCG di atas itu backbone terverifikasi, berlaku-umum.⟧`
      }
    },

    // ─────────────── 4. worked-example ───────────────
    {
      id: 'worked-example',
      heading: { en: 'Worked example', id: 'Contoh kerjaan' },
      body: {
        en: `**Diagnosing and controlling scale in a liquid-field loop (illustrative).** ⟦TODO-Az: every number is a placeholder to show the *logic* — the Darajat fluid chemistry, set-points, and (crucially) the dry-steam reframing are yours; do not teach these as Darajat values.⟧

A producing well flashes in the wellbore; separated brine runs through surface lines to injection wells.

1. **Predict silica.** Take the reservoir silica content; compute the saturation index at separator temperature, accounting for the flashing concentration factor $1/(1-y)$. If the index exceeds 1, silica will tend to deposit — strongly if residence time to the injectors is long.
2. **Choose the silica control.** Options: keep the brine hotter (inject before it cools below saturation), shorten residence time, apply **pH-modification** (lower pH to slow polymerisation — the Gallup approach), or dose an inhibitor. Pick based on cost and how supersaturated you are.
3. **Check calcite at the flash point.** If the producer shows pressure/output decline localised to a depth, suspect calcite at the flash horizon (CO₂ loss). The fix is a **downhole inhibitor capillary** set below the flash point.
4. **Assess corrosion.** From H₂S, CO₂, chloride, and any O₂, judge the corrosivity; select materials for the worst-duty components and guarantee oxygen exclusion in the injection/condensate system.
5. **Monitor.** Track silica polymerisation/TSS and corrosion coupons; adjust the program as the field and chemistry evolve.

**The read.** Production chemistry is predict-then-engineer: the fluid analysis tells you what will scale or corrode and where, and the controls are chosen before the failure, not after. A field run this way avoids the slow strangulation of injectors and the surprise of a plugged producer.

⟦TODO-Az: the Darajat version reframes the whole example — a dry-steam well does not deliver this flashing brine, so steps 1–3 (brine silica/calcite) move to the condensate side or recede, while NCG/H₂S handling and condensate/line corrosion become the worked problem. A real example should use Darajat steam/condensate/gas chemistry; I have kept this on the standard liquid-field loop and flagged it.⟧`,
        id: `**Mendiagnosis dan ngontrol scale di loop liquid-field (ilustratif).** ⟦TODO-Az: tiap angka placeholder buat nunjukin *logika*-nya — kimia fluida Darajat, set-point, dan (krusial) reframing dry-steam itu punya kamu; jangan ngajarin ini sebagai nilai Darajat.⟧

Sumur berproduksi flash di wellbore; brine terpisah ngalir lewat surface line ke injection well.

1. **Prediksi silika.** Ambil kandungan silika reservoir; hitung saturation index di temperatur separator, ngitung faktor konsentrasi flashing $1/(1-y)$. Kalau index ngelebihin 1, silika bakal cenderung ngendap — kuat kalau residence time ke injektor panjang.
2. **Pilih kontrol silika.** Opsi: jaga brine lebih panas (injeksi sebelum dia mendingin di bawah saturation), perpendek residence time, terapin **pH-modification** (turunin pH buat ngelambatin polimerisasi — pendekatan Gallup), atau dosis inhibitor. Pilih berdasar biaya dan seberapa supersaturated kamu.
3. **Cek calcite di flash point.** Kalau produser nunjukin decline pressure/output terlokalisasi ke kedalaman, curigai calcite di flash horizon (kehilangan CO₂). Fix-nya **capillary inhibitor downhole** diset di bawah flash point.
4. **Nilai korosi.** Dari H₂S, CO₂, klorida, dan O₂ apa pun, nilai korosivitasnya; pilih material buat komponen worst-duty dan jamin ekslusi oksigen di sistem injeksi/condensate.
5. **Monitor.** Lacak polimerisasi silika/TSS dan corrosion coupon; sesuaikan program seiring field dan kimia berkembang.

**Bacaannya.** Kimia produksi itu prediksi-lalu-engineer: analisis fluida ngasih tau kamu apa yang bakal scale atau korosi dan di mana, dan kontrolnya dipilih sebelum kegagalan, bukan sesudah. Field yang dijalanin gini ngehindarin pencekikan lambat injektor dan kejutan produser yang tersumbat.

⟦TODO-Az: versi Darajat ngerefram seluruh contoh — sumur dry-steam gak ngirim brine yang flashing ini, jadi langkah 1–3 (brine silika/calcite) pindah ke sisi condensate atau surut, sementara penanganan NCG/H₂S dan korosi condensate/line jadi masalah yang dikerjain. Contoh nyata harusnya pakai kimia steam/condensate/gas Darajat; aku ngejaga ini di loop liquid-field standar dan nge-flag-nya.⟧`
      }
    },

    // ─────────────── 5. applications ───────────────
    {
      id: 'applications',
      heading: { en: 'Applications', id: 'Aplikasi' },
      body: {
        en: `**What production chemistry decides.** It sets the operating envelope (how cool you dare run the fluid before silica deposits, where to flash to avoid calcite), the **materials** of wells and surface plant, the **chemical-treatment budget** (inhibitors, pH-mod, abatement), and the **maintenance/workover cadence** (descaling, re-drills). A field that ignores it pays in declining injectivity, plugged producers, corrosion failures, and lost generation.

**Across field life.** Chemistry is monitored continuously, because the fluid changes: as a field is produced and reinjected, temperatures, gas content, and salinity shift, so the scaling and corrosion risks — and the treatment program — must be re-tuned. Rising skin on a well test (Horne) may be scale; falling injectivity may be silica in the injectors; both send the chemist back to the program.

**The reinjection coupling.** ⟦TODO-Az: the spent fluid returned to the ground (Axelsson) is exactly the most scale-prone stream — cooled and concentrated — so injection-well silica scaling is a central production-chemistry problem, and the reinjection scheme and the chemical-treatment program are designed together. Confirm how Darajat manages injector chemistry.⟧

**The dry-steam payoff.** ⟦TODO-Az: at Darajat the production-chemistry workload is the steam/condensate and gas side — H₂S/NCG abatement (large for dry steam), condensate corrosion and chemistry, and reinjection-line management — rather than producing-brine scaling. These are the points a Darajat engineer would foreground; please set the emphasis.⟧

**The honest limits.** Predictions rest on fluid samples and solubility/kinetic correlations that carry uncertainty, and the controls have costs and side-effects (acidification can itself drive corrosion; inhibitors add expense and chemistry). Production chemistry is a continual optimisation, tightly coupled to the equilibrium geochemistry that explains the fluid (Henley-Truesdell-Barton, Giggenbach, Arnórsson), to drilling/integrity (Finger-Blankenship), and to the plant that processes the fluid (DiPippo) — not a standalone fix.`,
        id: `**Apa yang kimia produksi putusin.** Dia nyetel operating envelope (seberapa dingin kamu berani njalanin fluida sebelum silika ngendap, di mana flash buat ngehindarin calcite), **material** sumur dan surface plant, **budget chemical-treatment** (inhibitor, pH-mod, abatement), dan **kadens maintenance/workover** (descaling, re-drill). Field yang ngabaikan dia bayar di injectivity yang menurun, produser tersumbat, kegagalan korosi, dan generasi yang hilang.

**Sepanjang umur field.** Kimia dimonitor terus-menerus, karena fluidanya berubah: seiring field diproduksi dan direinjeksi, temperatur, kandungan gas, dan salinitas bergeser, jadi risiko scaling dan korosi — dan program treatment — harus di-tune ulang. Skin yang naik di well test (Horne) mungkin scale; injectivity yang turun mungkin silika di injektor; keduanya ngirim chemist balik ke program.

**Coupling reinjeksi.** ⟦TODO-Az: fluida bekas yang dibalikin ke tanah (Axelsson) itu persis stream paling rawan-scale — didinginin dan dikonsentrasi — jadi silica scaling injection-well itu masalah kimia-produksi sentral, dan skema reinjeksi dan program chemical-treatment didesain bareng. Konfirmasi gimana Darajat ngelola kimia injektor.⟧

**Payoff dry-steam.** ⟦TODO-Az: di Darajat beban kimia-produksi itu sisi steam/condensate dan gas — H₂S/NCG abatement (besar buat dry steam), korosi dan kimia condensate, dan manajemen reinjection-line — bukan scaling brine yang berproduksi. Ini poin yang engineer Darajat bakal majuin; tolong set penekanannya.⟧

**Batas yang jujur.** Prediksi bersandar pada sampel fluida dan korelasi kelarutan/kinetik yang bawa ketidakpastian, dan kontrolnya punya biaya dan efek-samping (asamisasi sendiri bisa ndorong korosi; inhibitor nambah biaya dan kimia). Kimia produksi itu optimisasi kontinu, ter-couple erat ke geokimia kesetimbangan yang ngejelasin fluida (Henley-Truesdell-Barton, Giggenbach, Arnórsson), ke drilling/integritas (Finger-Blankenship), dan ke plant yang ngeproses fluida (DiPippo) — bukan fix standalone.`
      }
    },

    // ─────────────── 6. practice ───────────────
    {
      id: 'practice',
      heading: { en: 'Practice', id: 'Latihan' },
      body: {
        en: `⟦TODO-Az: these items exercise the verified liquid-field scaling/corrosion backbone; answers stay standard and flag where the dry-steam specifics enter. Replace with Darajat items when you finalize.⟧

**1.** Why does flashing, not just cooling, drive silica scaling, and what does that imply for where silica deposits?

<details><summary>Answer</summary>
Cooling lowers silica solubility, but flashing does something extra: when a steam fraction boils off, the non-volatile silica that was dissolved in that water stays behind in a smaller volume of remaining liquid, so its CONCENTRATION rises (roughly by 1/(1-y) for steam fraction y). Flashing therefore pushes the silica saturation index up by both raising the dissolved concentration and (through the temperature drop) lowering solubility. The implication: silica supersaturation appears downstream of the flash (separators, brine lines) and worsens toward the cooler, more-concentrated end of the loop — the injection wells — which is why injectors are the classic silica-scaling victims. Because polymerisation is kinetically slow, residence time controls exactly where it plates out. ⟦TODO-Az: in dry steam there is no producing brine to concentrate — the silica issue moves to the condensate side.⟧
</details>

**2.** Calcite scale famously forms as a ring at one depth in the wellbore. Why there, and how is it controlled?

<details><summary>Answer</summary>
At the FLASH POINT — the depth where the rising fluid first boils. Calcite solubility is tied to dissolved CO2: when the fluid flashes, CO2 partitions into the newly formed steam, the remaining liquid pH rises, and calcium carbonate becomes supersaturated abruptly at that depth, so calcite crystallises right at the flash horizon rather than throughout the well. Control is by injecting a scale inhibitor through a thin capillary string set BELOW the flash point, so the inhibitor is present before supersaturation occurs and prevents the crystals from establishing; alternatively, operate so the flash occurs at surface rather than downhole. ⟦TODO-Az: confirm calcite relevance for a dry-steam well, where the producing fluid is vapour.⟧
</details>

**3.** Why is excluding oxygen singled out as critical in corrosion control, given the fluid already contains H2S and CO2?

<details><summary>Answer</summary>
Because oxygen is a far more aggressive oxidant than the natively present gases and the geothermal system is not designed for it. H2S and CO2 set a baseline corrosivity the materials are selected to tolerate, but even trace dissolved OXYGEN, typically entering in cooled condensate or injection lines, sharply accelerates attack on carbon steel and promotes pitting and localized failure that the native chemistry alone would not cause. Oxygen ingress is also avoidable by design (sealing, deaeration, blanketing), so it is the highest-leverage corrosion control: keep air out and the fluid stays within the corrosivity the system was built for. ⟦TODO-Az: oxygen ingress in condensate/reinjection lines is the relevant dry-steam corrosion concern.⟧
</details>

**4.** How is production chemistry coupled to reinjection, and why does that make injection wells a focus?

<details><summary>Answer</summary>
The fluid sent back down by reinjection (the Axelsson topic) is the coldest and most concentrated stream in the whole loop: it has been produced, flashed, had steam removed, and cooled through the plant, so its silica is the most supersaturated it will ever be. That makes the INJECTION WELLS the place silica most wants to deposit, slowly choking injectivity and undermining the pressure support and disposal that reinjection exists to provide. So the reinjection scheme and the chemical-treatment program (keeping the brine hot enough, pH-modification, inhibitors, residence-time management) are designed together — you cannot plan reinjection without planning its chemistry. ⟦TODO-Az: set the Darajat injector chemistry/treatment.⟧
</details>`,
        id: `⟦TODO-Az: item ini ngelatih backbone scaling/korosi liquid-field terverifikasi; jawaban tetap standar dan nge-flag di mana spesifik dry-steam masuk. Ganti dengan item Darajat pas kamu finalisasi.⟧

**1.** Kenapa flashing, bukan cuma cooling, ndorong silica scaling, dan apa implikasinya buat di mana silika ngendap?

<details><summary>Jawaban</summary>
Cooling nurunin kelarutan silika, tapi flashing ngelakuin sesuatu ekstra: pas fraksi steam boil off, silika non-volatile yang tadinya terlarut di air itu tetap tertinggal di volume liquid sisa yang lebih kecil, jadi KONSENTRASINYA naik (kira-kira 1/(1-y) buat fraksi steam y). Flashing karena itu ndorong silica saturation index naik dengan baik naikin konsentrasi terlarut maupun (lewat penurunan temperatur) nurunin kelarutan. Implikasinya: supersaturasi silika muncul di hilir flash (separator, brine line) dan memburuk ke arah ujung loop yang lebih dingin, lebih-terkonsentrasi — injection well — itu kenapa injektor itu korban silica-scaling klasik. Karena polimerisasi itu lambat secara kinetik, residence time ngontrol persis di mana dia plating out. ⟦TODO-Az: di dry steam gak ada brine berproduksi buat dikonsentrasi — isu silika pindah ke sisi condensate.⟧
</details>

**2.** Calcite scale terkenal kebentuk sebagai cincin di satu kedalaman di wellbore. Kenapa di situ, dan gimana dikontrol?

<details><summary>Jawaban</summary>
Di FLASH POINT — kedalaman di mana fluida yang naik pertama boil. Kelarutan calcite terikat ke CO2 terlarut: pas fluida flash, CO2 partisi ke steam yang baru kebentuk, pH liquid sisa naik, dan calcium carbonate jadi supersaturated mendadak di kedalaman itu, jadi calcite mengkristal persis di flash horizon bukan di seluruh sumur. Kontrol dengan nginjeksi scale inhibitor lewat capillary string tipis diset DI BAWAH flash point, supaya inhibitor-nya ada sebelum supersaturasi terjadi dan nyegah kristal kebentuk; alternatifnya, jalanin supaya flash terjadi di permukaan bukan downhole. ⟦TODO-Az: konfirmasi relevansi calcite buat sumur dry-steam, di mana fluida yang berproduksi itu vapour.⟧
</details>

**3.** Kenapa ekslusi oksigen disorot sebagai kritis di kontrol korosi, padahal fluidanya udah ngandung H2S dan CO2?

<details><summary>Jawaban</summary>
Karena oksigen itu oksidan yang jauh lebih agresif dari gas yang ada secara native dan sistem geothermal gak didesain buatnya. H2S dan CO2 nyetel baseline korosivitas yang material-nya dipilih buat ditoleransi, tapi bahkan OKSIGEN terlarut jejak, biasanya masuk di condensate dingin atau injection line, tajam ngepercepat serangan ke carbon steel dan ngepromosiin pitting dan kegagalan lokal yang kimia native sendiri gak bakal sebabin. Masuknya oksigen juga bisa-dihindari by design (sealing, deaerasi, blanketing), jadi dia kontrol korosi leverage-tertinggi: jaga udara keluar dan fluidanya tetap dalam korosivitas yang sistem dibangun untuknya. ⟦TODO-Az: masuknya oksigen di condensate/reinjection line itu perhatian korosi dry-steam yang relevan.⟧
</details>

**4.** Gimana kimia produksi ter-couple ke reinjeksi, dan kenapa itu bikin injection well jadi fokus?

<details><summary>Jawaban</summary>
Fluida yang dikirim balik turun oleh reinjeksi (topik Axelsson) itu stream paling dingin dan paling terkonsentrasi di seluruh loop: dia udah diproduksi, flash, steam-nya dihilangkan, dan didinginin lewat plant, jadi silika-nya itu paling supersaturated yang dia bakal pernah. Itu bikin INJECTION WELL tempat silika paling mau ngendap, perlahan nyumbat injectivity dan ngerusak pressure support dan disposal yang reinjeksi ada buat nyediain. Jadi skema reinjeksi dan program chemical-treatment (ngejaga brine cukup panas, pH-modification, inhibitor, manajemen residence-time) didesain bareng — kamu gak bisa ngerencanain reinjeksi tanpa ngerencanain kimianya. ⟦TODO-Az: set kimia/treatment injektor Darajat.⟧
</details>`
      }
    },

    // ─────────────── 7. connections ───────────────
    {
      id: 'connections',
      heading: { en: 'Connections', id: 'Koneksi' },
      body: {
        en: `- **Equilibrium-chemistry root**: [Henley-Truesdell-Barton 1984](item:henley-truesdell-barton-1984) supplies the fluid-mineral equilibrium thermodynamics behind silica/calcite saturation; this module is its production-engineering application. ⟦TODO-Az⟧
- **The fluid being managed**: ⟦TODO-Az⟧ [Giggenbach 1988](item:giggenbach-1988) / [Arnórsson 2000](item:arnorsson-2000) — the same dissolved load read as a geothermometer is what scales and corrodes here; two faces of one chemistry.
- **Scale ↔ skin**: ⟦TODO-Az⟧ [Horne 1995](item:horne-1995) — silica/calcite deposition near the wellbore is a physical driver of rising skin over a well's life; the well test detects it.
- **Reinjection coupling**: ⟦TODO-Az⟧ [Axelsson 2010](item:axelsson-2010) — the cooled, concentrated reinjectate is the most scale-prone stream; injector chemistry and the reinjection scheme are designed together.
- **Well integrity**: ⟦TODO-Az⟧ [Finger-Blankenship 2010](item:finger-blankenship-2010) — corrosion and scale drive workovers and casing-integrity concerns over the well's life.
- **Plant & NCG**: [DiPippo 2016](item:dipippo-2016) — the non-condensable gases and corrosive condensate are handled in the surface plant (condenser, gas extraction, H₂S abatement).`,
        id: `- **Akar kimia-kesetimbangan**: [Henley-Truesdell-Barton 1984](item:henley-truesdell-barton-1984) nyuplai termodinamika kesetimbangan fluida-mineral di balik silica/calcite saturation; module ini aplikasi production-engineering-nya. ⟦TODO-Az⟧
- **Fluida yang dikelola**: ⟦TODO-Az⟧ [Giggenbach 1988](item:giggenbach-1988) / [Arnórsson 2000](item:arnorsson-2000) — muatan terlarut yang sama yang dibaca sebagai geothermometer itu yang nge-scale dan ngorosi di sini; dua wajah satu kimia.
- **Scale ↔ skin**: ⟦TODO-Az⟧ [Horne 1995](item:horne-1995) — deposisi silika/calcite near-wellbore itu pendorong fisik skin yang naik sepanjang umur sumur; well test ngedeteksinya.
- **Coupling reinjeksi**: ⟦TODO-Az⟧ [Axelsson 2010](item:axelsson-2010) — reinjektat yang didinginin, dikonsentrasi itu stream paling rawan-scale; kimia injektor dan skema reinjeksi didesain bareng.
- **Integritas sumur**: ⟦TODO-Az⟧ [Finger-Blankenship 2010](item:finger-blankenship-2010) — korosi dan scale ngedorong workover dan perhatian integritas-casing sepanjang umur sumur.
- **Plant & NCG**: [DiPippo 2016](item:dipippo-2016) — non-condensable gas dan condensate korosif ditangani di surface plant (condenser, gas extraction, H₂S abatement).`
      }
    },

    // ─────────────── 8. sources ───────────────
    {
      id: 'sources',
      heading: { en: 'Sources', id: 'Sumber' },
      body: {
        en: `⟦TODO-Az: verify exact citations/years and which sources you want canonical for the dry-steam framing, before finalizing.⟧
- **Gallup, D. L.** (2009). "Production engineering in geothermal technology: A review." *Geothermics* 38(3), 326–334. **(This item.)** Scaling, corrosion, gas, and their controls.
- **Gallup, D. L.** — organic inhibitors for silica-scale control from geothermal brines (*Geothermics*); and the **pH-modification process** (Unocal; Salton Sea). ⟦TODO-Az: pin the exact references.⟧
- **Henley, R. W., Truesdell, A. H., and Barton, P. B.** (1984). *Fluid-Mineral Equilibria in Hydrothermal Systems.* SEG. Scaling thermodynamics root (in this catalog). ⟦TODO-Az⟧
- **Giggenbach, W. F.** (1988). *Geothermal solute equilibria.* GCA. The fluid chemistry (in this catalog). ⟦TODO-Az⟧
- **DiPippo, R.** (2016). *Geothermal Power Plants*, 4th ed. Elsevier. Plant-side gas/condensate handling (in this catalog).`,
        id: `⟦TODO-Az: verifikasi citation/tahun persis dan sumber mana yang kamu mau kanonik buat framing dry-steam, sebelum finalisasi.⟧
- **Gallup, D. L.** (2009). "Production engineering in geothermal technology: A review." *Geothermics* 38(3), 326–334. **(Item ini.)** Scaling, korosi, gas, dan kontrolnya.
- **Gallup, D. L.** — inhibitor organik buat kontrol silica-scale dari brine geothermal (*Geothermics*); dan **proses pH-modification** (Unocal; Salton Sea). ⟦TODO-Az: pin referensi persisnya.⟧
- **Henley, R. W., Truesdell, A. H., dan Barton, P. B.** (1984). *Fluid-Mineral Equilibria in Hydrothermal Systems.* SEG. Akar termodinamika scaling (di katalog ini). ⟦TODO-Az⟧
- **Giggenbach, W. F.** (1988). *Geothermal solute equilibria.* GCA. Kimia fluida (di katalog ini). ⟦TODO-Az⟧
- **DiPippo, R.** (2016). *Geothermal Power Plants*, ed. ke-4. Elsevier. Penanganan gas/condensate sisi-plant (di katalog ini).`
      }
    },
  ],

  audio: { enabled: true },

  selfTest: [
    {
      sectionId: 'motivation',
      question: {
        en: 'Production chemistry is called the operational flip-side of geothermometry. What does that mean, and what are the three battles it fights?',
        id: 'Kimia produksi disebut sisi-balik operasional dari geothermometry. Apa artinya, dan apa tiga pertarungan yang dia lawan?'
      },
      prompt: { en: 'Before continuing, try answering:', id: 'Sebelum lanjut, coba jawab:' },
      answer: {
        en: 'Geothermometry READS the dissolved chemistry of the fluid to infer the reservoir (a signal); production chemistry MANAGES that same dissolved load as a liability, because once the fluid cools, flashes, and is reinjected it leaves equilibrium and the dissolved minerals precipitate or turn aggressive. The three battles: (1) SILICA SCALING — amorphous silica supersaturates as the fluid cools and flashing concentrates the brine, then polymerises and plates pipes and injection wells; (2) CALCITE SCALING — CO2 loss at the flash point raises pH and deposits calcium carbonate at the boiling depth in the wellbore; (3) CORROSION — H2S, CO2, chloride, low pH, and oxygen ingress attack steel. Plus NCG/H2S handling at the plant. The controls (stay above saturation, manage residence time, pH-modify, inhibitors, materials, oxygen exclusion) are predicted and engineered, not improvised. ⟦TODO-Az: dry-steam shifts this to condensate + NCG/H2S.⟧',
        id: 'Geothermometry MEMBACA kimia terlarut fluida buat nyimpulin reservoir (sinyal); kimia produksi MENGELOLA muatan terlarut yang sama sebagai liability, karena begitu fluidanya mendingin, flash, dan direinjeksi dia ninggalin kesetimbangan dan mineral terlarut presipitasi atau jadi agresif. Tiga pertarungan: (1) SILICA SCALING — silika amorf supersaturasi seiring fluida mendingin dan flashing ngonsentrasiin brine, terus berpolimerisasi dan ngelapisin pipa dan injection well; (2) CALCITE SCALING — kehilangan CO2 di flash point naikin pH dan ngendapin calcium carbonate di kedalaman boiling di wellbore; (3) KOROSI — H2S, CO2, klorida, pH rendah, dan masuknya oksigen nyerang baja. Plus penanganan NCG/H2S di plant. Kontrolnya (tetap di atas saturation, kelola residence time, pH-modify, inhibitor, material, ekslusi oksigen) diprediksi dan di-engineer, bukan diimprovisasi. ⟦TODO-Az: dry-steam ngegeser ini ke condensate + NCG/H2S.⟧'
      }
    },
    {
      sectionId: 'formalization',
      question: {
        en: 'Silica supersaturates but does not deposit instantly. Why, and how does that kinetic fact become a control lever?',
        id: 'Silika supersaturasi tapi gak ngendap instan. Kenapa, dan gimana fakta kinetik itu jadi lever kontrol?'
      },
      prompt: { en: 'Before continuing, try answering:', id: 'Sebelum lanjut, coba jawab:' },
      answer: {
        en: 'Because dissolved (monomeric) silica must first POLYMERISE — link into progressively larger colloidal particles — before it deposits as scale, and that polymerisation proceeds at a finite, kinetically controlled rate (depending on the degree of supersaturation, temperature, and pH). So there is a time window between when the fluid becomes supersaturated and when silica actually sticks. That window is the lever: if the operator moves the fluid through the surface plant and into the injection wells FASTER than the silica polymerises (residence-time control), it is reinjected before it can deposit; alternatively, lowering the pH (Gallup pH-modification) slows the polymerisation kinetics, widening the window; or inhibitors interfere with particle growth. Control silica by racing or slowing its kinetics rather than only by thermodynamics. ⟦TODO-Az: set the Darajat correlations and pH-mod set-point.⟧',
        id: 'Karena silika terlarut (monomerik) harus pertama BERPOLIMERISASI — ngegabung jadi partikel koloidal makin besar — sebelum dia ngendap sebagai scale, dan polimerisasi itu berjalan di laju terbatas, dikontrol-kinetik (tergantung derajat supersaturasi, temperatur, dan pH). Jadi ada jendela waktu antara pas fluida jadi supersaturated dan pas silika beneran nempel. Jendela itu lever-nya: kalau operator mindahin fluida lewat surface plant dan ke injection well LEBIH CEPAT dari silika berpolimerisasi (kontrol residence-time), dia direinjeksi sebelum bisa ngendap; alternatifnya, nurunin pH (pH-modification Gallup) ngelambatin kinetika polimerisasi, ngelebarin jendela; atau inhibitor nginterferensi pertumbuhan partikel. Kontrol silika dengan ngebalapin atau ngelambatin kinetikanya bukan cuma dengan termodinamika. ⟦TODO-Az: set korelasi dan set-point pH-mod Darajat.⟧'
      }
    },
    {
      sectionId: 'applications',
      question: {
        en: 'Why are injection wells the classic victims of silica scaling, and what does that say about how reinjection and chemistry must be planned?',
        id: 'Kenapa injection well itu korban klasik silica scaling, dan apa yang itu bilang soal gimana reinjeksi dan kimia harus direncanain?'
      },
      prompt: { en: 'Before continuing, try answering:', id: 'Sebelum lanjut, coba jawab:' },
      answer: {
        en: 'Because the fluid sent to the injection wells is the coldest and most concentrated in the entire loop: it has been produced, flashed (which concentrated the brine), stripped of steam, and cooled through the plant, so its silica saturation index is at its maximum exactly when it reaches the injectors. Silica therefore tends to deposit there, slowly reducing injectivity and undermining the pressure support and fluid disposal that reinjection exists to provide. The implication is that reinjection cannot be planned independently of chemistry: the reinjection scheme (where and how much to inject) and the chemical-treatment program (keeping the brine hot enough, pH-modification, inhibitors, residence-time management) are a single coupled design. Manage one without the other and the injectors scale up. ⟦TODO-Az: set Darajat injector chemistry/treatment and the reinjection coupling.⟧',
        id: 'Karena fluida yang dikirim ke injection well itu paling dingin dan paling terkonsentrasi di seluruh loop: dia udah diproduksi, flash (yang ngonsentrasiin brine), distrip steam-nya, dan didinginin lewat plant, jadi silica saturation index-nya di maksimum persis pas dia nyampe injektor. Silika karena itu cenderung ngendap di situ, perlahan ngurangin injectivity dan ngerusak pressure support dan disposal fluida yang reinjeksi ada buat nyediain. Implikasinya reinjeksi gak bisa direncanain independen dari kimia: skema reinjeksi (di mana dan berapa banyak nginjeksi) dan program chemical-treatment (ngejaga brine cukup panas, pH-modification, inhibitor, manajemen residence-time) itu satu desain ter-couple. Kelola satu tanpa yang lain dan injektor-nya scale up. ⟦TODO-Az: set kimia/treatment injektor Darajat dan coupling reinjeksinya.⟧'
      }
    },
  ],
};
