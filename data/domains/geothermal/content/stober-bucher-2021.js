// ─────────────────────────────────────────────────────────────────────────
// ⚠ DRAFT — AWAITING AZ DOMAIN REVIEW (option (b): "I draft, you correct").
// Geothermal content is Az-authored. Schema-valid + renderable, NOT finalized.
// Survey/orientation format (this is the catalog's geothermal textbook ROOT).
// Domain claims flagged inline **⟦TODO-Az: …⟧**.
// Full prep: notes/stober-bucher-2021-research-prep-2026-06-02.md
//
// OPEN TODO-Az ITEMS (prep §9):
//   A. Survey-depth — don't cite as primary for geochem/reservoir specifics.
//   B. Enthalpy class thresholds vary (150/190/200C) — no specific cutoff asserted.
//   C. 2nd-ed page count + whether the book names Darajat by name: unconfirmed.
//   D. Darajat operational facts (271 MWe etc.) are EXTERNAL to this book; AZ5
//      49-vs-39 wells still open.
//   E. Seed cards deferred until Az signs off.
// ─────────────────────────────────────────────────────────────────────────

export const CONTENT = {
  itemId: 'stober-bucher-2021',
  estimatedReadMinutes: 30,

  author: {
    fullName: { en: `Ingrid Stober & Kurt Bucher`, id: `Ingrid Stober & Kurt Bucher` },
    affiliation: {
      en: `Institute of Earth and Environmental Sciences, University of Freiburg, Germany`,
      id: `Institute of Earth and Environmental Sciences, University of Freiburg, Jerman`
    },
    tagline: {
      en: `A hydrogeologist and a petrologist map the whole geothermal value chain — from the Earth's heat to a working power plant — in one survey.`,
      id: `Seorang hydrogeologist dan seorang petrologist memetakan seluruh rantai nilai geothermal — dari panas Bumi sampai pembangkit yang beroperasi — dalam satu survey.`
    },
    bio: {
      en: `This textbook is the work of two University of Freiburg geoscientists with complementary halves of the subject. Ingrid Stober is a hydrogeologist whose career — at the Geological Survey of Baden-Württemberg, then KIT Karlsruhe, now Freiburg — has centered on the hydraulics and chemistry of deep crystalline (hard-rock) aquifers, especially the Black Forest basement and the Upper Rhine Graben that anchor Germany's deep- and enhanced-geothermal programs. Kurt Bucher is a metamorphic petrologist and geochemist (PhD ETH Zurich; later Basel, Oslo, and Freiburg, now Emeritus), author of the standard Springer textbook *Petrogenesis of Metamorphic Rocks*, who brought water-rock interaction and fluid geochemistry to the study of deep geothermal systems. Their long Freiburg partnership joins reservoir hydraulics to fluid geochemistry, and that is exactly the pairing the book embodies: a wide, foundational survey rather than a deep monograph on any one piece.`,
      id: `Textbook ini karya dua geoscientist University of Freiburg dengan separuh-separuh subjek yang komplementer. Ingrid Stober adalah hydrogeologist yang karirnya — di Geological Survey Baden-Württemberg, lalu KIT Karlsruhe, sekarang Freiburg — berpusat di hidraulika dan kimia deep crystalline (hard-rock) aquifer, terutama basement Black Forest dan Upper Rhine Graben yang jadi jangkar program deep- dan enhanced-geothermal Jerman. Kurt Bucher adalah metamorphic petrologist dan geochemist (PhD ETH Zurich; kemudian Basel, Oslo, dan Freiburg, sekarang Emeritus), penulis textbook Springer standar *Petrogenesis of Metamorphic Rocks*, yang bawa water-rock interaction dan geokimia fluid ke studi sistem deep geothermal. Partnership Freiburg mereka yang panjang nyatuin reservoir hydraulics sama geokimia fluid, dan itu persis pasangan yang buku ini wujudkan: survey luas dan fondasional, bukan monograf dalam tentang satu bagian saja.`
    },
    focus: {
      en: `An orientation across the entire geothermal field: the thermal structure of the Earth and heat transport; classification of geothermal systems (shallow vs deep, hydrothermal vs petrothermal/EGS, low vs high enthalpy); shallow ground-source technology; deep hydrothermal doublets and engineered systems; high-enthalpy power; and the cross-cutting disciplines of drilling, geophysical exploration, hydraulic well testing, and deep-fluid geochemistry. Stober supplies the hydraulics, Bucher the geochemistry.`,
      id: `Orientasi across seluruh bidang geothermal: struktur termal Bumi dan heat transport; klasifikasi sistem geothermal (shallow vs deep, hydrothermal vs petrothermal/EGS, low vs high enthalpy); teknologi ground-source dangkal; deep hydrothermal doublet dan engineered system; high-enthalpy power; dan disiplin lintas-bidang drilling, eksplorasi geofisika, hydraulic well testing, dan geokimia deep-fluid. Stober nyediain hidraulika, Bucher geokimia.`
    },
    intellectualLineage: {
      en: `Stober comes out of the German/Black-Forest hydrogeology tradition (Freiburg + the Baden-Württemberg survey); Bucher out of the ETH Zurich metamorphic-petrology school, continuing the textbook lineage of Martin Frey and later Rodney Grapes. Their genuine collaboration — the *Geothermal Energy* textbook itself and the edited *Hydrogeology of Crystalline Rocks* (Springer/Kluwer, 2000) — is what lets a single book speak credibly to both the physics of flow and the chemistry of the fluid; Stober's deep-basement field work (e.g. the 1999 Stober-led "Ohlsbach Plume" study) supplies the field grounding.`,
      id: `Stober keluar dari tradisi hydrogeology Jerman/Black-Forest (Freiburg + survey Baden-Württemberg); Bucher dari sekolah metamorphic-petrology ETH Zurich, ngelanjutin lineage textbook Martin Frey dan kemudian Rodney Grapes. Kolaborasi nyata mereka — textbook *Geothermal Energy* itu sendiri dan *Hydrogeology of Crystalline Rocks* yang mereka edit (Springer/Kluwer, 2000) — yang ngebikin satu buku bisa ngomong kredibel ke baik fisika flow maupun kimia fluid; kerja field deep-basement Stober (misalnya studi "Ohlsbach Plume" 1999 yang dipimpin Stober) ngasih grounding lapangannya.`
    },
    keyCollaborators: {
      en: `The two authors are each other's principal collaborators across decades of Black Forest / Upper Rhine Graben work. Bucher's metamorphic-petrology textbook lineage runs through **Martin Frey** (the original co-author) and **Rodney Grapes**. The book sits in the broader European deep-geothermal and EGS research community (the Soultz-sous-Forêts HDR/EGS programme and the German geothermal-development effort form its practical backdrop).`,
      id: `Dua penulis itu kolaborator utama satu sama lain selama puluhan tahun kerja Black Forest / Upper Rhine Graben. Lineage textbook metamorphic-petrology Bucher lewat **Martin Frey** (co-author asli) dan **Rodney Grapes**. Buku ini duduk di komunitas riset deep-geothermal dan EGS Eropa yang lebih luas (program HDR/EGS Soultz-sous-Forêts dan upaya pengembangan geothermal Jerman jadi latar praktisnya).`
    },
    legacy: {
      en: `As a single-volume survey from physical foundations through exploration, drilling, reservoir testing, power conversion, geochemistry and environmental impact, the book serves as a widely used orientation text and graduate entry point into geothermal energy — the on-ramp from which more specialized references branch. Its breadth is the point: a reader finishes it knowing the vocabulary and the physical intuition of every part of the value chain, and therefore knowing where each specialized topic (conceptual modelling, reservoir engineering, numerical simulation, power-plant cycles, fluid geochemistry) fits in the whole.`,
      id: `Sebagai survey satu-volume dari fondasi fisik sampai eksplorasi, drilling, reservoir testing, power conversion, geokimia dan environmental impact, buku ini jadi teks orientasi yang dipakai luas dan entry point pascasarjana ke geothermal energy — on-ramp dari mana referensi yang lebih spesialis bercabang. Keluasannya itu poinnya: pembaca menyelesaikannya dengan tahu vocabulary dan intuisi fisik tiap bagian rantai nilai, dan karena itu tahu di mana tiap topik spesialis (conceptual modelling, reservoir engineering, numerical simulation, power-plant cycle, geokimia fluid) cocok dalam keseluruhan.`
    },
    keyWorks: [
      { year: 2021, title: `Geothermal Energy: From Theoretical Models to Exploration and Development, 2nd ed. (this item)`, venue: `Springer (DOI 10.1007/978-3-030-71685-1; 1st ed. 2013)` },
      { year: 2011, title: `Petrogenesis of Metamorphic Rocks, 8th ed. (Bucher & Grapes; earlier eds with Martin Frey)`, venue: `Springer` },
      { year: 1999, title: `The Ohlsbach Plume - discharge of deep saline water from the crystalline basement of the Black Forest, Germany (Stober, Richter, Brost et al.)`, venue: `Hydrogeology Journal, 7(3), 273-283` },
      { year: 2000, title: `Hydrogeology of Crystalline Rocks (Stober & Bucher, eds.)`, venue: `Springer/Kluwer` },
    ],
  },

  sections: [
    // ─────────────── 1. motivation ───────────────
    {
      id: 'motivation',
      heading: { en: 'Why this matters', id: 'Kenapa ini penting' },
      body: {
        en: `Geothermal energy is a long value chain: heat is generated and stored in the Earth, carried (or not) by circulating fluid through permeable rock, found and characterized by surface exploration and drilling, produced through wells, and finally converted to heat or electricity at the surface. Every later item in this catalog dives deep into one link of that chain — conceptual modelling, reservoir engineering, numerical simulation, deliverability, fluid geochemistry, power-plant cycles. Stober & Bucher's textbook is the item that holds the whole chain in view at once.

That orientation matters because the links are easy to confuse without the map. Is a given resource shallow or deep? Hydrothermal (it already contains hot mobile fluid) or petrothermal (the heat is locked in low-permeability rock and must be engineered out)? Low-enthalpy (good for district heating via a heat pump) or high-enthalpy (hot enough to spin a turbine)? Liquid-dominated (it will flash to steam at the surface) or vapour-dominated (it already delivers dry steam)? These classifications are not academic — each one routes you to a completely different technology, a different economics, and a different set of the specialized references.

The book's value for this catalog is precisely that it situates everything else. When you read the dry-steam deliverability item, or the conceptual-modelling item, or the reservoir-simulation item, you are looking at one leaf; this survey is the trunk. For the vapour-dominated, high-enthalpy class that the catalog's owner works in, the book is the context-setter that places that rare system type within the full taxonomy — even though the dry-steam depth lives in the specialized items, not here. **⟦TODO-Az: the book is German-authored and may use Larderello/The Geysers (not Darajat/Kamojang) as its dry-steam exemplars; confirm before stating it names the Indonesian fields. Prep §9-C.⟧**`,
        id: `Energi geothermal itu rantai nilai panjang: panas dibangkitkan dan disimpan di Bumi, dibawa (atau tidak) oleh fluid yang bersirkulasi lewat rock permeabel, ditemukan dan dikarakterisasi oleh eksplorasi permukaan dan drilling, diproduksi lewat sumur, dan akhirnya dikonversi jadi panas atau listrik di permukaan. Tiap item belakangan di katalog ini menyelam dalam ke satu mata rantai itu — conceptual modelling, reservoir engineering, numerical simulation, deliverability, geokimia fluid, power-plant cycle. Textbook Stober & Bucher itu item yang nahan seluruh rantai dalam pandangan sekaligus.

Orientasi itu penting karena mata-rantainya gampang ketuker tanpa peta. Apakah sumber daya tertentu itu dangkal atau dalam? Hydrothermal (dia udah punya hot mobile fluid) atau petrothermal (panasnya terkunci di rock low-permeability dan harus di-engineer keluar)? Low-enthalpy (bagus buat district heating via heat pump) atau high-enthalpy (cukup panas buat muter turbine)? Liquid-dominated (dia bakal flash jadi steam di permukaan) atau vapour-dominated (dia udah deliver dry steam)? Klasifikasi ini bukan akademis — masing-masing nge-route kamu ke teknologi yang sama sekali beda, ekonomi yang beda, dan set referensi spesialis yang beda.

Nilai buku ini buat katalog ini persis bahwa dia nempatin semua yang lain. Pas kamu baca item dry-steam deliverability, atau item conceptual-modelling, atau item reservoir-simulation, kamu lagi lihat satu daun; survey ini batangnya. Buat kelas vapour-dominated, high-enthalpy yang owner katalog ini kerjain, buku ini context-setter yang nempatin tipe sistem langka itu dalam taksonomi penuh — walaupun kedalaman dry-steam-nya hidup di item spesialis, bukan di sini. **⟦TODO-Az: buku ini di-authored Jerman dan mungkin pake Larderello/The Geysers (bukan Darajat/Kamojang) sebagai exemplar dry-steam-nya; konfirmasi sebelum bilang dia nyebut field Indonesia. Prep §9-C.⟧**`
      }
    },

    // ─────────────── 2. intuition ───────────────
    {
      id: 'intuition',
      heading: { en: 'Intuition', id: 'Intuisi' },
      body: {
        en: `Start from the one fact everything rests on: it gets hotter as you go down. The continental geothermal gradient averages about 25-30 °C per kilometre, and the heat flowing up through the crust is set by that gradient times the rock's thermal conductivity. That is the resource — and the first question is always how the heat moves.

If heat moves only by **conduction** (diffusing through stationary rock), you get a smooth, steep temperature increase with depth and you must drill deep to reach useful temperatures: this is the "hot dry rock" setting that engineered (EGS) systems target by creating artificial fracture permeability. If instead **convection** dominates — hot fluid actually circulating through permeable rock — heat is carried bodily upward, temperatures become high at shallower depth, and you have a natural hydrothermal system you can produce directly. The dimensionless Péclet number captures which regime you are in (advection over conduction); convection switches on once a permeable layer's Rayleigh number passes a critical value.

That single conduction-vs-convection distinction organizes the book's classification. **Hydrothermal** systems have hot mobile fluid in permeable rock — you produce the fluid. **Petrothermal / hot-dry-rock** systems have the heat but not the permeability — EGS engineers it. Cross-cutting that is the **enthalpy** axis: low-enthalpy resources (warm water, used directly or via heat pumps) versus high-enthalpy resources (hot enough for efficient electricity, usually in volcanic settings). And high-enthalpy hydrothermal systems split again by phase: liquid-dominated (flashes to steam at surface), two-phase, or the rare vapour-dominated (dry-steam) systems.

The rest of the value chain hangs off this. Shallow ground-source systems use a heat pump to upgrade low-grade near-surface heat; deep systems produce naturally hot fluid directly. Exploration (geophysics, geochemistry) locates and characterizes the resource before drilling; hydraulic well testing measures whether the rock will actually deliver; and the surface plant converts whatever the reservoir provides. Stober & Bucher walk all of it; the specialized catalog items then go deep on individual links.`,
        id: `Mulai dari satu fakta yang semuanya bersandar: makin ke bawah makin panas. Geothermal gradient kontinental rata-rata sekitar 25-30 °C per kilometer, dan panas yang ngalir ke atas lewat kerak di-set sama gradient itu dikali thermal conductivity rock. Itu sumber dayanya — dan pertanyaan pertama selalu gimana panasnya bergerak.

Kalau panas bergerak cuma lewat **konduksi** (berdifusi lewat rock yang diam), kamu dapet kenaikan suhu yang halus dan tajam dengan kedalaman dan kamu harus ngebor dalam buat nyampe suhu berguna: ini setting "hot dry rock" yang sistem engineered (EGS) target dengan bikin fracture permeability buatan. Kalau malah **konveksi** yang dominan — hot fluid beneran bersirkulasi lewat rock permeabel — panas dibawa bodily ke atas, suhu jadi tinggi di kedalaman lebih dangkal, dan kamu punya sistem hydrothermal natural yang bisa kamu produksi langsung. Péclet number tanpa-dimensi nangkep rezim mana kamu ada (adveksi atas konduksi); konveksi nyala begitu Rayleigh number lapisan permeabel lewat nilai kritis.

Distinction konduksi-vs-konveksi tunggal itu ngatur klasifikasi buku. Sistem **hydrothermal** punya hot mobile fluid di rock permeabel — kamu produksi fluid-nya. Sistem **petrothermal / hot-dry-rock** punya panasnya tapi bukan permeability-nya — EGS nge-engineer dia. Lintas itu ada axis **enthalpy**: sumber daya low-enthalpy (air hangat, dipake langsung atau via heat pump) versus high-enthalpy (cukup panas buat listrik efisien, biasanya di setting volcanic). Dan sistem high-enthalpy hydrothermal pisah lagi by fase: liquid-dominated (flash jadi steam di permukaan), two-phase, atau sistem vapour-dominated (dry-steam) yang langka.

Sisa rantai nilai gantung dari ini. Sistem ground-source dangkal pake heat pump buat nge-upgrade panas near-surface low-grade; sistem dalam produksi hot fluid natural langsung. Eksplorasi (geofisika, geokimia) nge-lokasi dan ngarakterisasi sumber daya sebelum drilling; hydraulic well testing ngukur apakah rock-nya bakal beneran deliver; dan plant permukaan ngonversi apapun yang reservoir sediain. Stober & Bucher jalan semuanya; item katalog spesialis kemudian masuk dalam ke mata rantai individual.`
      }
    },

    // ─────────────── 3. formalization ───────────────
    {
      id: 'formalization',
      heading: { en: 'The foundational equations', id: 'Persamaan fondasional' },
      body: {
        en: `A survey is held together by a few equations that recur everywhere downstream.

**Terrestrial heat flow (Fourier's law).** The conductive heat-flow density is the thermal conductivity times the temperature gradient:

$$q = -k\\,\\frac{dT}{dz}$$

with $k$ the rock's thermal conductivity (W m⁻¹ K⁻¹) and $dT/dz$ the geothermal gradient. Continental gradients average ~25-30 °C/km and mean continental heat flow is ~60-65 mW/m². This is the master driver of the whole resource.

**Conductive temperature at depth.** Where conduction dominates and conductivity is roughly constant, temperature rises linearly:

$$T(z) = T_{s} + \\left(\\frac{dT}{dz}\\right) z$$

— the back-of-envelope estimate of reservoir temperature at a target depth (and the baseline that a convecting system beats).

**Conduction vs convection (Péclet, Rayleigh).** The Péclet number compares advective to conductive heat transport,

$$\\mathrm{Pe} = \\frac{\\rho_f c_f\\, v\\, L}{\\lambda}$$

(Pe ≫ 1 → fluid-flow-dominated hydrothermal convection; Pe ≪ 1 → conductive geotherm), and free convection in a permeable layer switches on when the Rayleigh number exceeds a critical value (~40 for a layer heated from below).

**Darcy flow and transmissivity.** Fluid delivery follows Darcy's law, $q = -(k/\\mu)\\nabla P$; for an aquifer of thickness $b$, transmissivity $T = K b$ (with hydraulic conductivity $K = k\\rho g/\\mu$) sets the deliverability measured in hydraulic well tests.

**Enthalpy classes and the heat pump.** Resources are graded low / medium / high enthalpy (electricity needs high enthalpy); enthalpy $h = h_f + x\\,h_{fg}$ captures any steam fraction $x$, which is why enthalpy — not temperature alone — is the rigorous classifier. Shallow systems use a heat pump whose coefficient of performance $\\mathrm{COP} = \\dot Q_{heat}/\\dot W$ is bounded above by the Carnot limit $T_{hot}/(T_{hot}-T_{cold})$. **⟦TODO-Az: exact low/high-enthalpy temperature cutoffs are not standardized (150/190/200 °C) — don't attribute a single numeric threshold to the book. Prep §9-B.⟧**

**Water-rock interaction and solute geothermometry.** Deep fluids equilibrate with reservoir rock, which both sets scaling/corrosion risk and lets a measured solute concentration invert back to reservoir temperature — e.g. the quartz geothermometer $T(^{\\circ}\\mathrm{C}) = 1309/(5.19 - \\log_{10}[\\mathrm{SiO_2}]) - 273.15$.`,
        id: `Sebuah survey diikat sama beberapa persamaan yang berulang di mana-mana di hilir.

**Terrestrial heat flow (hukum Fourier).** Conductive heat-flow density itu thermal conductivity dikali temperature gradient:

$$q = -k\\,\\frac{dT}{dz}$$

dengan $k$ thermal conductivity rock (W m⁻¹ K⁻¹) dan $dT/dz$ geothermal gradient. Gradient kontinental rata-rata ~25-30 °C/km dan mean continental heat flow ~60-65 mW/m². Ini master driver seluruh sumber daya.

**Conductive temperature at depth.** Di mana konduksi dominan dan conductivity kira-kira konstan, suhu naik linear:

$$T(z) = T_{s} + \\left(\\frac{dT}{dz}\\right) z$$

— estimasi back-of-envelope suhu reservoir di kedalaman target (dan baseline yang sistem konvektif kalahin).

**Konduksi vs konveksi (Péclet, Rayleigh).** Péclet number ngebandingin advective ke conductive heat transport,

$$\\mathrm{Pe} = \\frac{\\rho_f c_f\\, v\\, L}{\\lambda}$$

(Pe ≫ 1 → konveksi hydrothermal fluid-flow-dominated; Pe ≪ 1 → conductive geotherm), dan free convection di lapisan permeabel nyala pas Rayleigh number lewat nilai kritis (~40 buat lapisan yang dipanasin dari bawah).

**Darcy flow dan transmissivity.** Pengiriman fluid ngikutin hukum Darcy, $q = -(k/\\mu)\\nabla P$; buat aquifer ketebalan $b$, transmissivity $T = K b$ (dengan hydraulic conductivity $K = k\\rho g/\\mu$) nge-set deliverability yang diukur di hydraulic well test.

**Enthalpy class dan heat pump.** Sumber daya digradein low / medium / high enthalpy (listrik butuh high enthalpy); enthalpy $h = h_f + x\\,h_{fg}$ nangkep steam fraction $x$ apapun, itu kenapa enthalpy — bukan suhu doang — classifier yang rigor. Sistem dangkal pake heat pump yang coefficient of performance $\\mathrm{COP} = \\dot Q_{heat}/\\dot W$ dibatasi atas sama limit Carnot $T_{hot}/(T_{hot}-T_{cold})$. **⟦TODO-Az: cutoff suhu low/high-enthalpy persis gak standar (150/190/200 °C) — jangan attribute satu threshold numerik ke buku. Prep §9-B.⟧**

**Water-rock interaction dan solute geothermometry.** Deep fluid ber-ekuilibrium sama reservoir rock, yang baik nge-set risiko scaling/corrosion maupun ngebikin concentration solute terukur bisa di-invert balik ke suhu reservoir — misalnya quartz geothermometer $T(^{\\circ}\\mathrm{C}) = 1309/(5.19 - \\log_{10}[\\mathrm{SiO_2}]) - 273.15$.`
      }
    },

    // ─────────────── 4. worked-example ───────────────
    {
      id: 'worked-example',
      heading: { en: 'Worked example', id: 'Contoh kerjaan' },
      body: {
        en: `Three short calculations exercise the foundational equations; all are dry-steam-applicable. **⟦TODO-Az: illustrative teaching numbers.⟧**

**Example 1 — heat-flow density from a measured gradient.** A borehole in granitic crust shows a gradient $dT/dz = 30$ °C/km $= 0.030$ K/m, and the rock's thermal conductivity is $k = 3.0$ W m⁻¹ K⁻¹. By Fourier's law,

$$q = k\\,\\frac{dT}{dz} = 3.0 \\times 0.030 = 0.090\\ \\text{W/m}^2 = 90\\ \\text{mW/m}^2$$

— an elevated-but-plausible continental value (using a more typical $k \\approx 2.2$ would give ~66 mW/m², close to the continental mean).

**Example 2 — temperature at target depth.** Assuming a conductive geotherm with surface temperature $T_s = 12$ °C and the same gradient, the temperature at 4 km is

$$T(4\\,\\text{km}) = 12 + 30 \\times 4 = 132\\ ^{\\circ}\\text{C}$$

— medium-enthalpy, marginal for power, good for deep direct-heat. (A *convecting* system would be far hotter at this depth — which is exactly why a hot, shallow upflow is the prize.)

**Example 3 — classifying a dry-steam field.** A reservoir reported at roughly 240 °C that produces dry/superheated steam classifies cleanly: **high-enthalpy** (well above the ~150 °C electricity threshold), **hydrothermal** (it contains natural mobile fluid), **vapour-dominated** (dry steam, not liquid that flashes at surface). The technology that follows is a **direct dry-steam turbine** — conventionally the simplest geothermal power cycle, with no separator needed (unlike a flash plant for a liquid-dominated field). Dry-steam fields are globally rare (classically Larderello and The Geysers; Indonesia hosts dry-steam fields too), which is why this catalog treats the type as a specialized leaf. **⟦TODO-Az: 240 °C is illustrative; cite Darajat's field-specific reservoir temperature when authored. The dry-steam operational facts (capacity, well count) are external to this textbook — see prep §9-D and the open AZ5 49-vs-39 well-count item.⟧**`,
        id: `Tiga perhitungan pendek ngelatih persamaan fondasional; semuanya dry-steam-applicable. **⟦TODO-Az: angka pengajaran ilustratif.⟧**

**Contoh 1 — heat-flow density dari gradient terukur.** Sebuah borehole di kerak granitik nunjukin gradient $dT/dz = 30$ °C/km $= 0.030$ K/m, dan thermal conductivity rock-nya $k = 3.0$ W m⁻¹ K⁻¹. Lewat hukum Fourier,

$$q = k\\,\\frac{dT}{dz} = 3.0 \\times 0.030 = 0.090\\ \\text{W/m}^2 = 90\\ \\text{mW/m}^2$$

— nilai kontinental yang elevated-tapi-plausibel (pake $k \\approx 2.2$ yang lebih tipikal bakal ngasih ~66 mW/m², dekat mean kontinental).

**Contoh 2 — suhu di kedalaman target.** Mengasumsikan conductive geotherm dengan suhu permukaan $T_s = 12$ °C dan gradient yang sama, suhu di 4 km

$$T(4\\,\\text{km}) = 12 + 30 \\times 4 = 132\\ ^{\\circ}\\text{C}$$

— medium-enthalpy, marginal buat power, bagus buat deep direct-heat. (Sistem *konvektif* bakal jauh lebih panas di kedalaman ini — persis kenapa hot, shallow upflow itu hadiahnya.)

**Contoh 3 — mengklasifikasi field dry-steam.** Reservoir yang dilaporin sekitar 240 °C yang produksi dry/superheated steam terklasifikasi bersih: **high-enthalpy** (jauh di atas threshold listrik ~150 °C), **hydrothermal** (dia berisi natural mobile fluid), **vapour-dominated** (dry steam, bukan liquid yang flash di permukaan). Teknologi yang ngikutin itu **direct dry-steam turbine** — secara konvensional power cycle geothermal paling sederhana, gak butuh separator (gak kayak flash plant buat field liquid-dominated). Field dry-steam langka secara global (klasiknya Larderello dan The Geysers; Indonesia juga punya field dry-steam), itu kenapa katalog ini nganggep tipe ini daun spesialis. **⟦TODO-Az: 240 °C ilustratif; cite suhu reservoir spesifik-Darajat pas di-author. Fakta operasional dry-steam (kapasitas, well count) eksternal ke textbook ini — lihat prep §9-D dan item AZ5 49-vs-39 well-count yang terbuka.⟧**`
      }
    },

    // ─────────────── 5. applications ───────────────
    {
      id: 'applications',
      heading: { en: 'Applications by audience', id: 'Aplikasi per audience' },
      body: {
        en: `### For the advanced researcher

The book's forward edge is the **petrothermal / EGS** frontier — accessing the vast conductive-heat resource locked in low-permeability rock by engineering fracture permeability (the Soultz-sous-Forêts lineage), and pushing toward supercritical-fluid resources for far higher per-well power. The companion research themes are the ones the book treats at survey level and the specialized literature deepens: induced seismicity from stimulation (the Basel and St. Gallen cases), and water-rock interaction governing scaling, corrosion and reservoir longevity.

### For the engineer

Read this as the map of the value chain you work in, and let each link hand off to the specialized item. The book's exploration/geophysics and geochemistry chapters set up [Cumming 2009](item:cumming-2009) (surface conceptual modelling); its reservoir-physics and well-testing chapters set up [Grant & Bixley 2011](item:grant-bixley-2011) (reservoir engineering), which in turn roots [O'Sullivan-Pruess-Lippmann 2001](item:osullivan-pruess-lippmann-2001) (numerical simulation); its high-enthalpy power chapter is the survey-level version of [DiPippo 2016](item:dipippo-2016) (power-plant cycles); and its dry-steam treatment is the context for [Acuña 2008](item:acuna-2008) (dry-steam deliverability). The skill the book builds is knowing, for any problem in front of you, which link it belongs to and therefore which tool applies.

### For management / planning

The book's classification scheme is, in effect, a routing table for capital. The shallow-vs-deep, hydrothermal-vs-petrothermal, and enthalpy-class distinctions each map to a different project type, technology, cost structure and risk profile — so getting the classification right at the outset is what determines whether you are planning a heat-pump district-heating scheme, a hydrothermal doublet, an EGS project, or a high-enthalpy power plant. The survey gives a non-specialist the vocabulary to ask the specialists the right questions.`,
        id: `### Untuk advanced researcher

Tepi depan buku itu frontier **petrothermal / EGS** — ngakses sumber daya conductive-heat yang vast yang terkunci di rock low-permeability dengan nge-engineer fracture permeability (lineage Soultz-sous-Forêts), dan ndorong ke arah sumber daya supercritical-fluid buat power per-sumur yang jauh lebih tinggi. Tema riset companion itu yang buku treat di level survey dan literatur spesialis perdalam: induced seismicity dari stimulasi (kasus Basel dan St. Gallen), dan water-rock interaction yang nge-govern scaling, corrosion dan reservoir longevity.

### Untuk engineer

Baca ini sebagai peta rantai nilai yang kamu kerjain, dan biarin tiap mata rantai nyerahin ke item spesialis. Bab eksplorasi/geofisika dan geokimia buku nyiapin [Cumming 2009](item:cumming-2009) (surface conceptual modelling); bab reservoir-physics dan well-testing-nya nyiapin [Grant & Bixley 2011](item:grant-bixley-2011) (reservoir engineering), yang gilirannya nge-root [O'Sullivan-Pruess-Lippmann 2001](item:osullivan-pruess-lippmann-2001) (numerical simulation); bab high-enthalpy power-nya versi level-survey dari [DiPippo 2016](item:dipippo-2016) (power-plant cycle); dan treatment dry-steam-nya konteks buat [Acuña 2008](item:acuna-2008) (dry-steam deliverability). Skill yang buku bangun itu tahu, buat masalah apapun di depan kamu, mata rantai mana dia punya dan karena itu tool mana yang berlaku.

### Untuk manajemen / planning

Skema klasifikasi buku itu, efektifnya, routing table buat kapital. Distinction shallow-vs-deep, hydrothermal-vs-petrothermal, dan enthalpy-class masing-masing map ke tipe proyek, teknologi, struktur biaya dan profil risiko yang beda — jadi ngebikin klasifikasi benar di awal itu yang nentuin apakah kamu lagi ngerencanain skema district-heating heat-pump, hydrothermal doublet, proyek EGS, atau high-enthalpy power plant. Survey-nya ngasih non-spesialis vocabulary buat nanya spesialis pertanyaan yang benar.`
      }
    },

    // ─────────────── 6. practice ───────────────
    {
      id: 'practice',
      heading: { en: 'Practice', id: 'Latihan' },
      body: {
        en: `**1.** A sedimentary-basin borehole has a geothermal gradient of 35 °C/km in rock of thermal conductivity 2.5 W m⁻¹ K⁻¹. Compute the conductive heat-flow density.

<details><summary>Answer</summary>
$q = k\\,(dT/dz) = 2.5 \\times 0.035 = 0.0875$ W/m² $= 87.5$ mW/m². An above-average continental heat flow, consistent with a warm sedimentary basin. (Note the gradient must be in K/m: 35 °C/km = 0.035 K/m.)
</details>

**2.** Using a conductive geotherm with surface temperature 15 °C and gradient 35 °C/km, at what depth do you first reach 150 °C — the rough threshold for electricity generation?

<details><summary>Answer</summary>
Solve $T(z) = T_s + (dT/dz)z$ for $z$: $150 = 15 + 35 z$, so $z = 135/35 = 3.86$ km. You would need to drill nearly 4 km in this purely conductive basin to reach power-grade temperature — which is precisely why naturally convecting high-enthalpy systems (hot fluid brought up shallow) are so much more attractive for electricity than conductive basins, and why EGS must engineer permeability at depth.
</details>

**3.** Two resources are offered: (A) 95 °C water from a 2 km sedimentary aquifer with good natural flow; (B) 200 °C rock at 4 km with negligible natural permeability. Classify each on the book's axes (shallow/deep, hydrothermal/petrothermal, enthalpy class) and name the technology each implies.

<details><summary>Answer</summary>
(A) Deep (2 km), **hydrothermal** (hot mobile water present), **low-enthalpy** (~95 °C, below the power threshold) → direct-use district heating or a heat-pump-assisted scheme, produced through a hydrothermal doublet. (B) Deep (4 km), **petrothermal / hot-dry-rock** (the heat is there but the permeability is not), **high-enthalpy** by temperature (~200 °C) → an **EGS** project: hydraulically stimulate fracture permeability and circulate injected water to mine the heat. Same depth class, completely different projects — the hydrothermal-vs-petrothermal axis is what routes the decision.
</details>

**4.** A neutral-chloride hot-spring water contains 250 mg/kg dissolved silica (SiO₂). Estimate the deep reservoir temperature with the quartz geothermometer $T = 1309/(5.19 - \\log_{10}[\\mathrm{SiO_2}]) - 273.15$, and state one assumption that could make the estimate wrong.

<details><summary>Answer</summary>
$\\log_{10}(250) = 2.398$, so $5.19 - 2.398 = 2.792$; $1309/2.792 = 468.8$ K; $468.8 - 273.15 \\approx 196\\ ^{\\circ}$C. So the reservoir is ~195-200 °C — high-enthalpy. Key assumptions that can break it: the water must have equilibrated with quartz at reservoir temperature and not re-equilibrated or precipitated silica while ascending (conductive cooling vs. steam loss/boiling change the right formula), and it must be a genuine deep upflow water, not a shallow steam-heated or mixed water — exactly the cross-checks the conceptual-modelling and geochemistry items insist on.
</details>`,
        id: `**1.** Sebuah borehole sedimentary-basin punya geothermal gradient 35 °C/km di rock dengan thermal conductivity 2.5 W m⁻¹ K⁻¹. Hitung conductive heat-flow density.

<details><summary>Jawaban</summary>
$q = k\\,(dT/dz) = 2.5 \\times 0.035 = 0.0875$ W/m² $= 87.5$ mW/m². Heat flow kontinental di-atas-rata-rata, konsisten sama sedimentary basin yang hangat. (Catat gradient harus dalam K/m: 35 °C/km = 0.035 K/m.)
</details>

**2.** Pake conductive geotherm dengan suhu permukaan 15 °C dan gradient 35 °C/km, di kedalaman berapa kamu pertama nyampe 150 °C — threshold kasar buat pembangkitan listrik?

<details><summary>Jawaban</summary>
Solve $T(z) = T_s + (dT/dz)z$ buat $z$: $150 = 15 + 35 z$, jadi $z = 135/35 = 3.86$ km. Kamu bakal perlu ngebor hampir 4 km di basin konduktif murni ini buat nyampe suhu power-grade — persis kenapa sistem high-enthalpy yang konvektif natural (hot fluid dibawa naik dangkal) jauh lebih menarik buat listrik daripada basin konduktif, dan kenapa EGS harus nge-engineer permeability di kedalaman.
</details>

**3.** Dua sumber daya ditawarin: (A) air 95 °C dari aquifer sedimentary 2 km dengan natural flow bagus; (B) rock 200 °C di 4 km dengan permeability natural diabaikan. Klasifikasi masing-masing di axis buku (shallow/deep, hydrothermal/petrothermal, enthalpy class) dan sebutkan teknologi yang masing-masing implikasiin.

<details><summary>Jawaban</summary>
(A) Deep (2 km), **hydrothermal** (hot mobile water ada), **low-enthalpy** (~95 °C, di bawah threshold power) → direct-use district heating atau skema heat-pump-assisted, diproduksi lewat hydrothermal doublet. (B) Deep (4 km), **petrothermal / hot-dry-rock** (panasnya ada tapi permeability-nya enggak), **high-enthalpy** by suhu (~200 °C) → proyek **EGS**: stimulasi hidraulik fracture permeability dan sirkulasi injected water buat nambang panasnya. Kelas kedalaman sama, proyek yang sama sekali beda — axis hydrothermal-vs-petrothermal yang nge-route keputusan.
</details>

**4.** Air hot-spring neutral-chloride berisi 250 mg/kg dissolved silica (SiO₂). Estimasi suhu reservoir dalam pake quartz geothermometer $T = 1309/(5.19 - \\log_{10}[\\mathrm{SiO_2}]) - 273.15$, dan sebutkan satu asumsi yang bisa bikin estimasi salah.

<details><summary>Jawaban</summary>
$\\log_{10}(250) = 2.398$, jadi $5.19 - 2.398 = 2.792$; $1309/2.792 = 468.8$ K; $468.8 - 273.15 \\approx 196\\ ^{\\circ}$C. Jadi reservoir ~195-200 °C — high-enthalpy. Asumsi kunci yang bisa ngerusak: air harus udah ber-ekuilibrium sama quartz di suhu reservoir dan gak re-equilibrate atau presipitasi silica pas naik (conductive cooling vs. steam loss/boiling ngubah formula yang benar), dan dia harus genuine deep upflow water, bukan shallow steam-heated atau mixed water — persis cross-check yang item conceptual-modelling dan geokimia tekanin.
</details>`
      }
    },

    // ─────────────── 7. connections ───────────────
    {
      id: 'connections',
      heading: { en: 'Connections', id: 'Koneksi' },
      body: {
        en: `This survey is the geothermal domain's textbook **root** — the orientation the specialized items branch from. Per the catalog graph, it is the *direct* prerequisite of two items and the foundational backdrop for the rest:

- **Direct prereq of**: [Cumming 2009](item:cumming-2009) — surface-exploration conceptual modelling builds on this book's geophysics, geochemistry and systems chapters.
- **Direct prereq of**: [Grant & Bixley 2011](item:grant-bixley-2011) — reservoir engineering deepens this book's reservoir-physics and well-testing chapters; Grant & Bixley in turn roots the numerical-simulation, reservoir-property and dry-steam-deliverability items, so this survey is their foundational grandparent.
- **Foundational to (downstream)**: [O'Sullivan-Pruess-Lippmann 2001](item:osullivan-pruess-lippmann-2001) (simulation), [Acuña 2008](item:acuna-2008) (dry-steam deliverability) — reached via Grant & Bixley.
- **Complementary root**: [DiPippo 2016](item:dipippo-2016) — the independent surface/power-plant track; the two meet at the enthalpy-class → power-cycle boundary (high-enthalpy vapour-dominated → dry-steam turbine; liquid-dominated → flash/binary).
- **Survey-level on-ramp to the geochemistry track** (Bucher's half of the book): the deeper fluid-mineral-equilibria and isotope references. **⟦TODO-Az: don't cite this survey as the primary source for geochemistry specifics — it is the on-ramp, not the depth. Prep §9-A.⟧**`,
        id: `Survey ini **root** textbook domain geothermal — orientasi yang item spesialis bercabang darinya. Per graph katalog, dia prerequisite *langsung* dari dua item dan latar fondasional buat sisanya:

- **Prereq langsung dari**: [Cumming 2009](item:cumming-2009) — surface-exploration conceptual modelling bangun di bab geofisika, geokimia dan sistem buku ini.
- **Prereq langsung dari**: [Grant & Bixley 2011](item:grant-bixley-2011) — reservoir engineering perdalam bab reservoir-physics dan well-testing buku ini; Grant & Bixley gilirannya nge-root item numerical-simulation, reservoir-property dan dry-steam-deliverability, jadi survey ini grandparent fondasional mereka.
- **Fondasional ke (downstream)**: [O'Sullivan-Pruess-Lippmann 2001](item:osullivan-pruess-lippmann-2001) (simulation), [Acuña 2008](item:acuna-2008) (dry-steam deliverability) — dicapai via Grant & Bixley.
- **Root komplementer**: [DiPippo 2016](item:dipippo-2016) — track surface/power-plant independen; keduanya ketemu di boundary enthalpy-class → power-cycle (high-enthalpy vapour-dominated → dry-steam turbine; liquid-dominated → flash/binary).
- **On-ramp level-survey ke track geokimia** (separuh buku Bucher): referensi fluid-mineral-equilibria dan isotop yang lebih dalam. **⟦TODO-Az: jangan cite survey ini sebagai sumber primer buat spesifik geokimia — dia on-ramp, bukan kedalaman. Prep §9-A.⟧**`
      }
    },

    // ─────────────── 8. sources ───────────────
    {
      id: 'sources',
      heading: { en: 'Sources', id: 'Sumber' },
      body: {
        en: `- **Stober, I., and Bucher, K.** (2021). *Geothermal Energy: From Theoretical Models to Exploration and Development*, 2nd ed. Springer. DOI 10.1007/978-3-030-71685-1 (1st ed. 2013). The survey textbook itself. **(This item.)**
- **Bucher, K., and Grapes, R.** (2011). *Petrogenesis of Metamorphic Rocks*, 8th ed. Springer. Bucher's standard metamorphic-petrology textbook — the geochemistry/petrology background he brings to the partnership.
- **Stober, I., Richter, A., Brost, E., et al.** (1999). "The Ohlsbach Plume - discharge of deep saline water from the crystalline basement of the Black Forest, Germany." *Hydrogeology Journal*, 7(3), 273-283. DOI 10.1007/s100400050201. A Stober-led field study of deep crystalline-basement fluids.
- **Stober, I., and Bucher, K.** (eds.) (2000). *Hydrogeology of Crystalline Rocks*. Springer/Kluwer. The hard-rock-aquifer reference underpinning the book's deep-reservoir hydraulics.`,
        id: `- **Stober, I., dan Bucher, K.** (2021). *Geothermal Energy: From Theoretical Models to Exploration and Development*, 2nd ed. Springer. DOI 10.1007/978-3-030-71685-1 (1st ed. 2013). Textbook survey-nya sendiri. **(Item ini.)**
- **Bucher, K., dan Grapes, R.** (2011). *Petrogenesis of Metamorphic Rocks*, 8th ed. Springer. Textbook metamorphic-petrology standar Bucher — background geokimia/petrologi yang dia bawa ke partnership.
- **Stober, I., Richter, A., Brost, E., dkk.** (1999). "The Ohlsbach Plume - discharge of deep saline water from the crystalline basement of the Black Forest, Germany." *Hydrogeology Journal*, 7(3), 273-283. DOI 10.1007/s100400050201. Studi field yang dipimpin Stober tentang deep crystalline-basement fluid.
- **Stober, I., dan Bucher, K.** (eds.) (2000). *Hydrogeology of Crystalline Rocks*. Springer/Kluwer. Referensi hard-rock-aquifer yang ngedukung deep-reservoir hydraulics buku ini.`
      }
    },
  ],

  audio: { enabled: true },

  selfTest: [
    {
      sectionId: 'intuition',
      question: {
        en: 'The single distinction between conductive and convective heat transport organizes the whole resource taxonomy. Explain how it separates a "petrothermal / hot-dry-rock" target from a naturally productive "hydrothermal" one, and what each implies for technology.',
        id: 'Distinction tunggal antara conductive dan convective heat transport ngatur seluruh taksonomi sumber daya. Jelasin gimana dia misahin target "petrothermal / hot-dry-rock" dari "hydrothermal" yang produktif natural, dan apa yang masing-masing implikasiin buat teknologi.'
      },
      prompt: { en: 'Before continuing, try answering:', id: 'Sebelum lanjut, coba jawab:' },
      answer: {
        en: 'If heat reaches a depth mainly by conduction, the rock is hot but the fluid is not moving — there is little natural permeability, so although the thermal resource exists you cannot simply produce it. That is the petrothermal / hot-dry-rock case, and the technology is EGS: hydraulically stimulate the rock to create fracture permeability and circulate injected water through the engineered heat exchanger. If instead convection dominates, hot fluid is already circulating through permeable rock and carrying heat bodily upward; temperatures are high at shallower depth and you have a hydrothermal system you can produce directly by drilling into the upflow/reservoir and bringing the hot fluid (water or steam) to the surface. So the same temperature at depth means a producible resource in the convective/hydrothermal case but only an engineerable resource in the conductive/petrothermal case — which is why the conduction-vs-convection (Péclet/Rayleigh) distinction is the first fork in the taxonomy and routes you to entirely different technology.',
        id: 'Kalau panas nyampe kedalaman terutama lewat konduksi, rock-nya panas tapi fluid-nya gak bergerak — natural permeability sedikit, jadi walaupun thermal resource-nya ada kamu gak bisa cuma produksi dia. Itu kasus petrothermal / hot-dry-rock, dan teknologinya EGS: stimulasi hidraulik rock buat bikin fracture permeability dan sirkulasi injected water lewat engineered heat exchanger. Kalau malah konveksi yang dominan, hot fluid udah bersirkulasi lewat rock permeabel dan bawa panas bodily ke atas; suhu tinggi di kedalaman lebih dangkal dan kamu punya sistem hydrothermal yang bisa kamu produksi langsung dengan ngebor ke upflow/reservoir dan bawa hot fluid (air atau steam) ke permukaan. Jadi suhu yang sama di kedalaman berarti sumber daya yang producible di kasus konvektif/hydrothermal tapi cuma engineerable di kasus konduktif/petrothermal — itu kenapa distinction konduksi-vs-konveksi (Péclet/Rayleigh) itu fork pertama di taksonomi dan nge-route kamu ke teknologi yang sama sekali beda.'
      }
    },
    {
      sectionId: 'formalization',
      question: {
        en: 'Why is enthalpy (h = h_f + x·h_fg), rather than temperature alone, the rigorous classifier of a high-enthalpy geothermal resource for power generation?',
        id: 'Kenapa enthalpy (h = h_f + x·h_fg), bukan suhu doang, yang jadi classifier rigor dari sumber daya geothermal high-enthalpy buat pembangkitan listrik?'
      },
      prompt: { en: 'Before continuing, try answering:', id: 'Sebelum lanjut, coba jawab:' },
      answer: {
        en: 'Power output depends on the energy you can extract per unit mass of produced fluid, and that energy is the enthalpy, not the temperature. Two fluids at the same temperature can carry very different energy if one is liquid and the other is partly or wholly steam: the steam fraction x carries the latent heat h_fg, which is large. The expression h = h_f + x·h_fg makes this explicit — at a fixed saturation temperature, enthalpy rises steeply with steam fraction, so a dry-steam (x≈1) fluid delivers far more usable energy to a turbine than a saturated-liquid (x=0) fluid at the very same temperature. Because the surface technology (turbine work) is driven by enthalpy drop, classifying and valuing a resource by temperature alone would misrank a liquid-dominated and a vapour-dominated reservoir that happen to share a temperature. Enthalpy captures the phase/steam-fraction information that temperature throws away.',
        id: 'Power output tergantung energi yang bisa kamu ekstrak per unit massa produced fluid, dan energi itu enthalpy, bukan suhu. Dua fluid di suhu sama bisa bawa energi yang sangat beda kalau satu liquid dan satunya sebagian atau seluruhnya steam: steam fraction x bawa latent heat h_fg, yang besar. Ekspresi h = h_f + x·h_fg ngebikin ini eksplisit — di suhu saturasi tetap, enthalpy naik tajam dengan steam fraction, jadi fluid dry-steam (x≈1) deliver energi usable jauh lebih banyak ke turbine daripada fluid saturated-liquid (x=0) di suhu yang persis sama. Karena teknologi permukaan (kerja turbine) di-drive sama enthalpy drop, mengklasifikasi dan menilai sumber daya by suhu doang bakal misrank reservoir liquid-dominated dan vapour-dominated yang kebetulan punya suhu sama. Enthalpy nangkep informasi fase/steam-fraction yang suhu buang.'
      }
    },
    {
      sectionId: 'worked-example',
      question: {
        en: 'In the conductive-geotherm examples, reaching 150 °C took nearly 4 km of drilling. Why are naturally convecting (hydrothermal) high-enthalpy systems so much more attractive for electricity than a purely conductive sedimentary basin at the same gradient?',
        id: 'Di contoh conductive-geotherm, nyampe 150 °C butuh hampir 4 km drilling. Kenapa sistem high-enthalpy yang konvektif natural (hydrothermal) jauh lebih menarik buat listrik daripada sedimentary basin konduktif murni di gradient yang sama?'
      },
      prompt: { en: 'Before continuing, try answering:', id: 'Sebelum lanjut, coba jawab:' },
      answer: {
        en: 'In a purely conductive basin, temperature climbs linearly with depth at the geothermal gradient, so power-grade temperatures (~150 °C+) sit deep — nearly 4 km in the worked example — and drilling cost rises steeply with depth, while the rock may still lack the permeability to deliver fluid. A naturally convecting hydrothermal system instead carries hot fluid bodily upward along permeable pathways, so high temperatures are reached at much shallower depth (cheaper wells) AND the convection itself proves the rock is permeable enough to produce the fluid. You get both halves of what a power project needs — high enthalpy and deliverability — at lower drilling cost. That is why explorers prize a shallow, hot, permeable upflow (the target of conceptual modelling) and why a deep conductive basin, despite having the same gradient, is a far weaker electricity prospect (and may only be exploitable via EGS, which must engineer the missing permeability).',
        id: 'Di basin konduktif murni, suhu naik linear dengan kedalaman di geothermal gradient, jadi suhu power-grade (~150 °C+) duduk dalam — hampir 4 km di worked example — dan biaya drilling naik tajam dengan kedalaman, sementara rock-nya mungkin masih kurang permeability buat deliver fluid. Sistem hydrothermal yang konvektif natural malah bawa hot fluid bodily ke atas sepanjang permeable pathway, jadi suhu tinggi dicapai di kedalaman jauh lebih dangkal (sumur lebih murah) DAN konveksi-nya sendiri ngebuktiin rock-nya cukup permeabel buat produksi fluid. Kamu dapet kedua separuh yang proyek power butuh — high enthalpy dan deliverability — di biaya drilling lebih rendah. Itu kenapa explorer ngehargain shallow, hot, permeable upflow (target conceptual modelling) dan kenapa deep conductive basin, meskipun punya gradient yang sama, prospect listrik yang jauh lebih lemah (dan mungkin cuma exploitable via EGS, yang harus nge-engineer permeability yang hilang).'
      }
    },
    {
      sectionId: 'connections',
      question: {
        en: 'The textbook is the catalog\'s survey root; the specialized items deep-dive individual links. Give the chain by which this book connects to dry-steam deliverability (Acuña 2008), naming the intermediate links.',
        id: 'Textbook ini root survey katalog; item spesialis menyelam dalam ke mata rantai individual. Kasih rantai yang ngehubungin buku ini ke dry-steam deliverability (Acuña 2008), nyebutin mata rantai antara.'
      },
      prompt: { en: 'Before continuing, try answering:', id: 'Sebelum lanjut, coba jawab:' },
      answer: {
        en: 'Stober & Bucher (the survey root) covers reservoir physics and well testing at foundational level; that sets up Grant & Bixley 2011 (reservoir engineering), which is the direct prerequisite of Acuña 2008 (dry-steam deliverability). So the chain is: Stober & Bucher → Grant & Bixley → Acuña. The survey gives the system classification (high-enthalpy, hydrothermal, vapour-dominated) that identifies a field as dry-steam in the first place and the reservoir-physics vocabulary; Grant & Bixley supplies the reservoir-engineering machinery (well testing, lumped and decline models, the predecessor deliverability equation); and Acuña narrows to the specific dry-steam deliverability decomposition (C_WB wellbore vs PI reservoir). The survey is the foundational grandparent of Acuña, not a direct prerequisite — the direct edge is Grant & Bixley. (In parallel, the survey is the direct prerequisite of Cumming 2009 and Grant & Bixley themselves.)',
        id: 'Stober & Bucher (root survey) nyakup reservoir physics dan well testing di level fondasional; itu nyiapin Grant & Bixley 2011 (reservoir engineering), yang prerequisite langsung dari Acuña 2008 (dry-steam deliverability). Jadi rantainya: Stober & Bucher → Grant & Bixley → Acuña. Survey ngasih klasifikasi sistem (high-enthalpy, hydrothermal, vapour-dominated) yang ngidentifikasi field sebagai dry-steam di tempat pertama dan vocabulary reservoir-physics; Grant & Bixley nyediain mesin reservoir-engineering (well testing, lumped dan decline model, persamaan deliverability predecessor); dan Acuña nyempitin ke dekomposisi deliverability dry-steam spesifik (C_WB wellbore vs PI reservoir). Survey itu grandparent fondasional Acuña, bukan prerequisite langsung — edge langsung-nya Grant & Bixley. (Paralel, survey itu prerequisite langsung dari Cumming 2009 dan Grant & Bixley sendiri.)'
      }
    },
  ],
};
