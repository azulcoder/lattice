// ─────────────────────────────────────────────────────────────────────────
// ⚠ DRAFT — AWAITING AZ DOMAIN REVIEW (option (b): "I draft, you correct").
// Geothermal content is Az-authored (Reservoir & Production Engineer, 6 yrs
// Star Energy Geothermal Darajat — dry-steam). Schema-valid + renderable.
//
// GENERAL CLAIMS VERIFIED AGAINST THE LITERATURE (2026-06-13): the Giggenbach
// (1988) Na-K geothermometer form T = 1390/(1.75 + log[Na/K]) − 273.15 (Na, K by
// weight; best for T ≳ 180 °C), its difference from the Fournier (1979) Na-K
// calibration, the Na-K-Mg geoindicator diagram (vertices Na/1000, K/100, √Mg;
// fully-equilibrated / partially-equilibrated / immature classes), the silica
// (quartz, Fournier) and gas-equilibrium (CO₂-H₂S-H₂-CH₄) geothermometry
// principle, and the author-bio backbone (Giggenbach, DSIR/IGNS New Zealand,
// d. 1997 at Rabaul) are all confirmed against multiple sources.
//
// DARAJAT / SITE-SPECIFIC FACTS STAY EXTERNAL TO THE MODULE — they are Az's and
// remain flagged **⟦TODO-Az: …⟧**. Open items still requiring Az:
//   A. HEADLINE: the DRY-STEAM adaptation — at a vapour-dominated wellhead the
//      fluid is steam + non-condensable gas (not liquid), so the SOLUTE
//      geothermometers (Na-K, silica) do not directly apply; reservoir-T and
//      process monitoring lean on GAS geothermometry + steam/condensate
//      chemistry. The module teaches the standard (liquid) solute machinery and
//      the Na-K-Mg diagram, and flags the dry-steam/gas pathway as Az's.
//   B. WHICH calibrations Star Energy trusts for the field, and the silica
//      boiling/steam-loss correction to teach (the equations themselves are
//      verified above; the field choice is Az's).
//   C. Steam/condensate/gas sampling protocol for a Darajat dry-steam well.
//   D. Scaling & NCG specifics for the field; worked-example numbers are
//      ILLUSTRATIVE placeholders, not Darajat values.
//   E. Reinjection-return monitoring and PTA/simulation integration AT DARAJAT.
//   F. Anchor/lineage curation (Giggenbach vs Arnórsson/Fournier/HTB) and the
//      overlap boundaries with the sibling drafts — editorial calls for Az.
//   G. Seed cards DEFERRED until Az signs off (card-coverage exempt: geothermal
//      domain + DRAFT marker).
// Full prep: notes/giggenbach-production-geochemistry-research-prep-2026-06-06.md
// ─────────────────────────────────────────────────────────────────────────

export const CONTENT = {
  itemId: 'giggenbach-1988',
  estimatedReadMinutes: 37,

  author: {
    fullName: { en: 'Werner F. Giggenbach', id: 'Werner F. Giggenbach' },
    affiliation: {
      en: 'Geochemist, Department of Scientific and Industrial Research (DSIR), New Zealand. The defining figure in geothermal fluid and gas geochemistry; originator of the Na-K-Mg "geoindicator" ternary diagram and a body of solute and gas geothermometry methods.',
      id: 'Geokimiawan, Department of Scientific and Industrial Research (DSIR), Selandia Baru. Figur penentu di geokimia fluida dan gas geothermal; pencipta diagram terner "geoindicator" Na-K-Mg dan kumpulan metode geothermometry solute dan gas.'
    },
    tagline: {
      en: 'The chemistry of the produced fluid is a thermometer for rock you will never touch. Giggenbach made it rigorous: read the dissolved ions and gases, test whether the water truly equilibrated with the reservoir, and back out the deep temperature — and a warning of what will scale on the way up.',
      id: 'Kimia fluida yang diproduksi itu termometer buat batuan yang gak bakal kamu sentuh. Giggenbach bikin dia rigor: baca ion dan gas terlarut, tes apakah airnya beneran setimbang dengan reservoir, dan keluarin temperatur dalam — dan peringatan apa yang bakal nge-scale dalam perjalanan naik.'
    },
    bio: {
      en: `Werner Giggenbach turned geothermal geochemistry from a collection of useful correlations into a coherent, equilibrium-based discipline. His 1988 paper deriving the **Na-K-Mg-Ca geoindicators** gave the field its single most recognisable tool — the **Na-K-Mg ternary diagram** — which does something deceptively important: before you trust any chemical thermometer, it tells you *whether the water has actually equilibrated with the reservoir rock* or is an immature, mixed, or rock-leaching sample that the thermometer would read wrongly. Alongside this he built much of modern **gas geochemistry** (the equilibria among CO₂, H₂S, H₂, CH₄ that let you take a reservoir's temperature from its gases), which is exactly the tool a vapour-dominated field needs.

⟦TODO-Az: bio/affiliation are from public record (incl. life status); confirm before finalizing. Anchoring a *production-geochemistry* module on Giggenbach is a drafting choice — tell me if you would rather anchor on Arnórsson (the IAEA manual, already a draft in this catalog), Fournier (the silica/Na-K geothermometer calibrations), or Henley-Truesdell-Barton (the equilibria root, also a draft here).⟧`,
      id: `Werner Giggenbach ngubah geokimia geothermal dari kumpulan korelasi berguna jadi disiplin koheren berbasis-kesetimbangan. Paper 1988-nya yang nurunin **geoindicator Na-K-Mg-Ca** ngasih field-nya tool paling dikenali — **diagram terner Na-K-Mg** — yang ngelakuin sesuatu yang secara menipu penting: sebelum kamu percaya termometer kimia apa pun, dia ngasih tau kamu *apakah airnya beneran udah setimbang dengan batuan reservoir* atau sampel immature, ter-mix, atau hasil-pelindian-batuan yang termometernya bakal baca salah. Di samping ini dia ngebangun banyak dari **geokimia gas** modern (kesetimbangan antara CO₂, H₂S, H₂, CH₄ yang ngebiarin kamu ngambil temperatur reservoir dari gasnya), yang persis tool yang field vapour-dominated butuh.

⟦TODO-Az: bio/afiliasi dari public record (termasuk status hidup); konfirmasi sebelum finalisasi. Nge-anchor module *geokimia-produksi* ke Giggenbach itu pilihan drafting — bilang kalau kamu lebih mau nge-anchor ke Arnórsson (manual IAEA, udah draft di katalog ini), Fournier (kalibrasi geothermometer silika/Na-K), atau Henley-Truesdell-Barton (akar kesetimbangan, juga draft di sini).⟧`
    },
    focus: {
      en: `You cannot put a thermometer in the deep reservoir, but the fluid that comes up has been there, and its chemistry remembers. **Solute geothermometry** exploits the fact that the concentrations (or ratios) of dissolved species in equilibrium with reservoir minerals are fixed functions of temperature: read the **silica** (quartz solubility) or the **Na/K** ratio in a produced water and back-calculate the **deep reservoir temperature**. The catch is that this only works if the water genuinely last equilibrated with the rock at depth and ascended fast enough to keep that signature — a boiled, diluted, or rock-leaching sample reads wrongly. Giggenbach's **Na-K-Mg ternary diagram** is the validity test: it sorts waters into *fully equilibrated* (thermometer trustworthy), *partially equilibrated / mixed*, and *immature* (thermometer invalid). And where there is no liquid to sample at all, **gas geothermometry** (equilibria among CO₂, H₂S, H₂, CH₄) takes the reservoir's temperature from its gases. The same chemistry also predicts what will **scale** — silica and calcite dropping out of solution as the fluid cools and boils on its way up. ⟦TODO-Az: the dry-steam headline is yours — at a vapour-dominated field like Darajat the wellhead delivers steam plus non-condensable gas, not liquid, so the solute (Na-K, silica) geothermometers do not directly apply and the monitoring leans on gas geothermometry and steam/condensate chemistry. This module teaches the standard liquid-solute method and the Na-K-Mg diagram, and flags the dry-steam/gas pathway as the teaching point.⟧`,
      id: `Kamu gak bisa naruh termometer di reservoir dalam, tapi fluida yang naik udah di sana, dan kimianya inget. **Solute geothermometry** memanfaatkan fakta bahwa konsentrasi (atau rasio) spesies terlarut yang setimbang dengan mineral reservoir itu fungsi tetap dari temperatur: baca **silika** (kelarutan kuarsa) atau rasio **Na/K** di air yang diproduksi dan back-calculate **temperatur reservoir dalam**. Tangkapannya itu ini cuma berhasil kalau airnya beneran terakhir setimbang dengan batuan di kedalaman dan naik cukup cepat buat ngejaga tanda itu — sampel yang mendidih, terdilusi, atau hasil-pelindian-batuan baca salah. **Diagram terner Na-K-Mg** Giggenbach itu tes validitasnya: dia nyortir air jadi *fully equilibrated* (termometer bisa-dipercaya), *partially equilibrated / mixed*, dan *immature* (termometer gak valid). Dan di mana gak ada liquid buat disampel sama sekali, **gas geothermometry** (kesetimbangan antara CO₂, H₂S, H₂, CH₄) ngambil temperatur reservoir dari gasnya. Kimia yang sama juga ngeprediksi apa yang bakal **nge-scale** — silika dan kalsit keluar dari larutan seiring fluida mendingin dan mendidih dalam perjalanan naik. ⟦TODO-Az: headline dry-steam-nya punya kamu — di field vapour-dominated kayak Darajat wellhead ngirim steam plus non-condensable gas, bukan liquid, jadi geothermometer solute (Na-K, silika) gak langsung berlaku dan monitoring-nya nyandar ke gas geothermometry dan kimia steam/condensate. Module ini ngajarin metode liquid-solute standar dan diagram Na-K-Mg, dan ngeflag pathway dry-steam/gas sebagai teaching point.⟧`
    },
    intellectualLineage: {
      en: `The idea that fluid chemistry records reservoir temperature goes back to the **silica geothermometer** and the **Na-K-Ca geothermometer of Fournier & Truesdell (1973)** and Fournier's silica/Na-K calibrations. The deeper principle — that the relative abundances of Na, K, Mg, Ca in a water in equilibrium with a stable mineral assemblage are uniquely fixed by temperature — was systematised by **Giggenbach (1988)** into the Na-K-Mg-Ca geoindicators and the ternary diagram, embedding geothermometry in proper **fluid-mineral equilibrium** (the Henley-Truesdell-Barton tradition, also in this catalog). Giggenbach extended the same equilibrium logic to **gas geochemistry**. ⟦TODO-Az: the geothermal-specific lineage to foreground — Arnórsson's IAEA compilation (a draft here), the gas-geothermometry literature for vapour-dominated systems, and whatever Darajat actually uses. Confirm.⟧`,
      id: `Ide bahwa kimia fluida ngerekam temperatur reservoir balik ke **geothermometer silika** dan **geothermometer Na-K-Ca Fournier & Truesdell (1973)** dan kalibrasi silika/Na-K Fournier. Prinsip lebih dalam — bahwa kelimpahan relatif Na, K, Mg, Ca di air yang setimbang dengan asosiasi mineral stabil itu unik diset oleh temperatur — disistematisasi oleh **Giggenbach (1988)** jadi geoindicator Na-K-Mg-Ca dan diagram terner, nanam geothermometry di **kesetimbangan fluida-mineral** yang benar (tradisi Henley-Truesdell-Barton, juga di katalog ini). Giggenbach ngeperluas logika kesetimbangan yang sama ke **geokimia gas**. ⟦TODO-Az: lineage spesifik-geothermal buat dimajuin — kompilasi IAEA Arnórsson (draft di sini), literatur gas-geothermometry buat sistem vapour-dominated, dan apa pun yang Darajat sebenarnya pakai. Konfirmasi.⟧`
    },
    keyCollaborators: {
      en: `Giggenbach worked within the New Zealand DSIR geothermal-chemistry tradition (Wairakei, Broadlands/Ohaaki) and the international geothermal-geochemistry community. The methodological neighbours invoked here are **Robert Fournier** and **Alfred Truesdell** (the silica, Na-K, Na-K-Ca geothermometers), **Stefán Arnórsson** (the IAEA compilation, a draft in this catalog), and **Henley, Truesdell & Barton** (the equilibria framework, also a draft here). ⟦TODO-Az: confirm/adjust, and whether a Darajat/Indonesian fluid-geochemistry reference belongs here.⟧`,
      id: `Giggenbach kerja dalam tradisi geokimia-geothermal DSIR Selandia Baru (Wairakei, Broadlands/Ohaaki) dan komunitas geokimia-geothermal internasional. Tetangga metodologis yang dipanggil di sini itu **Robert Fournier** dan **Alfred Truesdell** (geothermometer silika, Na-K, Na-K-Ca), **Stefán Arnórsson** (kompilasi IAEA, draft di katalog ini), dan **Henley, Truesdell & Barton** (framework kesetimbangan, juga draft di sini). ⟦TODO-Az: konfirmasi/sesuaikan, dan apakah referensi geokimia-fluida Darajat/Indonesia masuk di sini.⟧`
    },
    legacy: {
      en: `Production geochemistry is how an operator monitors a reservoir it cannot enter: routine sampling of produced fluids and gases tracks the deep temperature, detects boiling and dilution, warns of incoming reinjection returns, and predicts scaling before it chokes a well or a pipe. Giggenbach's lasting gift is the discipline of *checking equilibrium first* — the Na-K-Mg diagram is a habit of mind as much as a plot: never read a geothermometer on a water that has not earned it. ⟦TODO-Az: the lasting value FOR DARAJAT is exactly the dry-steam adaptation this draft cannot finalize — how a vapour-dominated field that produces steam and gas (not liquid) uses gas geothermometry and steam/condensate chemistry for reservoir monitoring, and how scaling and non-condensable-gas management actually work in your field. Treat the module as the verified solute/equilibrium method plus a flagged dry-steam checklist for your domain.⟧`,
      id: `Geokimia produksi itu gimana operator memonitor reservoir yang gak bisa dia masuki: sampling rutin fluida dan gas yang diproduksi ngelacak temperatur dalam, ngedeteksi boiling dan dilusi, ngingetin return reinjeksi yang masuk, dan ngeprediksi scaling sebelum dia nyumbat sumur atau pipa. Hadiah abadi Giggenbach itu disiplin *ngecek kesetimbangan dulu* — diagram Na-K-Mg itu kebiasaan pikiran sama kayak plot: jangan pernah baca geothermometer di air yang belum ngelayaninya. ⟦TODO-Az: nilai abadi BUAT DARAJAT itu persis adaptasi dry-steam yang draft ini gak bisa finalin — gimana field vapour-dominated yang ngeproduksi steam dan gas (bukan liquid) pakai gas geothermometry dan kimia steam/condensate buat monitoring reservoir, dan gimana scaling dan manajemen non-condensable-gas sebenarnya kerja di field kamu. Perlakukan module sebagai metode solute/kesetimbangan terverifikasi plus checklist dry-steam yang di-flag buat domain kamu.⟧`
    },
    keyWorks: [
      { year: 1988, title: 'Geothermal solute equilibria. Derivation of Na-K-Mg-Ca geoindicators (the Na-K-Mg ternary diagram) — this item', venue: 'Geochimica et Cosmochimica Acta 52(12), 2749–2765' },
      { year: 1991, title: 'Chemical techniques in geothermal exploration (gas geothermometry & sampling)', venue: 'UNITAR/UNDP guidebook' },
      { year: 1973, title: 'An empirical Na-K-Ca geothermometer (Fournier & Truesdell) — the cation-geothermometer foundation', venue: 'Geochimica et Cosmochimica Acta' },
      { year: 2000, title: 'Isotopic and Chemical Techniques… (Arnórsson, ed.) — geothermometer compilation (in this catalog)', venue: 'IAEA' },
      { year: 1984, title: 'Fluid-Mineral Equilibria in Hydrothermal Systems (Henley, Truesdell, Barton) — the equilibria root (in this catalog)', venue: 'SEG Reviews' },
    ],
  },

  sections: [
    // ─────────────── 1. motivation ───────────────
    {
      id: 'motivation',
      heading: { en: 'Why this matters', id: 'Kenapa ini penting' },
      body: {
        en: `You will never put a thermometer where it matters most — kilometres down, in the rock the wells draw from. But the fluid that comes up has been there, and its chemistry carries a memory of the conditions at depth. **Production geochemistry** is the practice of reading that memory: sample the produced fluid and gas, and infer the reservoir temperature, the processes the fluid has undergone (boiling, mixing, dilution), and what it will deposit as **scale** on the way up.

The keystone is the **geothermometer**. The concentrations of certain dissolved species — or ratios between them — sit in equilibrium with reservoir minerals at a temperature-dependent value. Two classics:
- **Silica (quartz)**: quartz dissolves more at higher temperature, so the dissolved SiO₂ in a deep-equilibrated water back-calculates the reservoir temperature.
- **Na/K**: the sodium-to-potassium ratio in equilibrium with feldspars is a function of temperature; a measured Na/K gives the deep temperature, and because Na-K re-equilibrates slowly it tends to remember the *deepest, hottest* equilibrium.

But a geothermometer is only as good as the assumption behind it: that the sampled water genuinely last equilibrated with the rock and ascended without being boiled, diluted, or re-equilibrated. Read a geothermometer on the wrong water and you get a confident wrong number. **Giggenbach's Na-K-Mg ternary diagram** is the discipline that prevents this: it classifies a water as **fully equilibrated** (geothermometer trustworthy), **partially equilibrated or mixed**, or **immature** (Mg-dominated, just leaching rock — geothermometer invalid). Check the diagram first; read the thermometer second.

⟦TODO-Az: this is where your field breaks the liquid-water textbook, and it is the headline of this whole module. At a vapour-dominated **DRY-STEAM** field like Darajat, the wellhead produces **steam plus non-condensable gas**, not a liquid — so there is no Na or K to measure at the wellhead and the *solute* geothermometers do not directly apply. Reservoir-temperature and process monitoring instead lean on **gas geothermometry** (equilibria among CO₂, H₂S, H₂, CH₄) and steam/condensate chemistry. The module teaches the standard liquid-solute method (and the Na-K-Mg diagram) because it is the foundation, then flags the dry-steam/gas pathway as the part you must set. Please confirm/correct the framing.⟧`,
        id: `Kamu gak bakal pernah naruh termometer di tempat yang paling penting — berkilometer ke bawah, di batuan tempat sumur narik. Tapi fluida yang naik udah di sana, dan kimianya bawa memori kondisi di kedalaman. **Geokimia produksi** itu praktik membaca memori itu: sampel fluida dan gas yang diproduksi, dan simpulkan temperatur reservoir, proses yang fluidanya alami (boiling, mixing, dilusi), dan apa yang dia bakal endapkan sebagai **scale** dalam perjalanan naik.

Kuncinya itu **geothermometer**. Konsentrasi spesies terlarut tertentu — atau rasio di antara mereka — duduk dalam kesetimbangan dengan mineral reservoir di nilai yang bergantung-temperatur. Dua klasik:
- **Silika (kuarsa)**: kuarsa larut lebih banyak di temperatur lebih tinggi, jadi SiO₂ terlarut di air yang ter-equilibrasi-dalam back-calculate temperatur reservoir.
- **Na/K**: rasio sodium-ke-potassium dalam kesetimbangan dengan feldspar itu fungsi temperatur; Na/K terukur ngasih temperatur dalam, dan karena Na-K re-equilibrasi lambat dia cenderung inget kesetimbangan *terdalam, terpanas*.

Tapi geothermometer cuma sebagus asumsi di baliknya: bahwa air yang disampel beneran terakhir setimbang dengan batuan dan naik tanpa di-boil, terdilusi, atau di-re-equilibrasi. Baca geothermometer di air yang salah dan kamu dapet angka salah yang yakin. **Diagram terner Na-K-Mg Giggenbach** itu disiplin yang nyegah ini: dia ngeklasifikasi air sebagai **fully equilibrated** (termometer bisa-dipercaya), **partially equilibrated atau mixed**, atau **immature** (didominasi-Mg, cuma melindi batuan — termometer gak valid). Cek diagram dulu; baca termometer kedua.

⟦TODO-Az: ini di mana field kamu ngerusak textbook liquid-water, dan ini headline seluruh module ini. Di field vapour-dominated **DRY-STEAM** kayak Darajat, wellhead ngeproduksi **steam plus non-condensable gas**, bukan liquid — jadi gak ada Na atau K buat diukur di wellhead dan geothermometer *solute* gak langsung berlaku. Monitoring temperatur-reservoir dan proses sebagai gantinya nyandar ke **gas geothermometry** (kesetimbangan antara CO₂, H₂S, H₂, CH₄) dan kimia steam/condensate. Module ngajarin metode liquid-solute standar (dan diagram Na-K-Mg) karena dia fondasinya, terus ngeflag pathway dry-steam/gas sebagai bagian yang kamu harus set. Tolong konfirmasi/koreksi framing-nya.⟧`
      }
    },

    // ─────────────── 2. intuition ───────────────
    {
      id: 'intuition',
      heading: { en: 'Intuition', id: 'Intuisi' },
      body: {
        en: `A geothermometer is a chemical clock that stopped at the reservoir. Down in the hot rock, the fluid and the minerals reach a chemical truce: at that temperature, the water holds a particular amount of dissolved silica and a particular Na-to-K ratio. As the fluid races up the well, it cools — but the chemistry cannot re-adjust fast enough, so it arrives at the surface still "set" to the deep temperature. Measure it, and you read the reservoir.

Different species are different clocks. Silica and Na-K are *slow* clocks — they keep the deep, hot reading even as the fluid ascends, which is why they are the trusted reservoir geothermometers. Magnesium is a *fast* clock — Mg re-equilibrates readily at lower temperature and at shallow rock contact, so a Mg-rich water is telling you about shallow processes, not the deep reservoir.

That difference is exactly what Giggenbach's **Na-K-Mg triangle** exploits. Plot a water by its Na, K, and Mg. A water that truly came from deep equilibrium lands on the **equilibrium curve** near the Na-K corner — trust its geothermometer. A water full of Mg lands down in the **immature** region — it is mostly dissolving shallow rock and has *not* equilibrated at depth, so its geothermometer is meaningless. Waters in between are **partially equilibrated or mixed** — read with caution. The triangle is a single picture that answers "should I believe this thermometer?" before you compute a temperature.

The same chemistry warns you about **scaling**. As the deep fluid rises and cools (and boils), minerals that were happily dissolved become over-saturated and start to precipitate — **silica** and **calcite** especially — plating out on the well, the pipes, and the plant. The fluid chemistry that tells you the reservoir temperature also tells you what will clog, and where.

⟦TODO-Az: the dry-steam picture changes the clock. When the produced fluid is steam plus gas rather than liquid, there is no Na/K ratio to read at the wellhead — the relevant "clock" is the equilibrium among the gases (CO₂, H₂S, H₂, CH₄). The intuition of "a slow clock that remembers the deep temperature" still holds, but it is carried by the gases, not the dissolved cations. Please confirm how Darajat reads its reservoir temperature before this becomes a teaching point.⟧`,
        id: `Geothermometer itu jam kimia yang berhenti di reservoir. Di bawah di batuan panas, fluida dan mineral nyampe gencatan kimia: di temperatur itu, airnya nahan jumlah silika terlarut tertentu dan rasio Na-ke-K tertentu. Seiring fluida ngebut naik sumur, dia mendingin — tapi kimianya gak bisa re-adjust cukup cepat, jadi dia tiba di permukaan masih "set" ke temperatur dalam. Ukur dia, dan kamu baca reservoir-nya.

Spesies berbeda itu jam berbeda. Silika dan Na-K itu jam *lambat* — mereka ngejaga bacaan dalam, panas bahkan saat fluida naik, makanya mereka geothermometer reservoir yang dipercaya. Magnesium itu jam *cepat* — Mg re-equilibrasi dengan mudah di temperatur lebih rendah dan di kontak batuan dangkal, jadi air kaya-Mg lagi ngasih tau kamu soal proses dangkal, bukan reservoir dalam.

Beda itu persis yang **segitiga Na-K-Mg** Giggenbach manfaatkan. Plot air dengan Na, K, dan Mg-nya. Air yang beneran datang dari kesetimbangan dalam mendarat di **kurva kesetimbangan** dekat pojok Na-K — percaya geothermometer-nya. Air penuh Mg mendarat di bawah di region **immature** — dia kebanyakan ngelarutin batuan dangkal dan *belum* ter-equilibrasi di kedalaman, jadi geothermometer-nya gak bermakna. Air di antaranya itu **partially equilibrated atau mixed** — baca dengan hati-hati. Segitiganya satu gambaran yang ngejawab "haruskah aku percaya termometer ini?" sebelum kamu ngitung temperatur.

Kimia yang sama ngingetin kamu soal **scaling**. Seiring fluida dalam naik dan mendingin (dan mendidih), mineral yang tadinya larut dengan senang jadi over-saturated dan mulai presipitasi — **silika** dan **kalsit** terutama — nempel di sumur, pipa, dan plant. Kimia fluida yang ngasih tau kamu temperatur reservoir juga ngasih tau apa yang bakal nyumbat, dan di mana.

⟦TODO-Az: gambaran dry-steam ngubah jam-nya. Pas fluida yang diproduksi itu steam plus gas bukan liquid, gak ada rasio Na/K buat dibaca di wellhead — "jam" yang relevan itu kesetimbangan antara gas (CO₂, H₂S, H₂, CH₄). Intuisi "jam lambat yang inget temperatur dalam" masih berlaku, tapi dia dibawa oleh gas, bukan kation terlarut. Tolong konfirmasi gimana Darajat baca temperatur reservoir-nya sebelum ini jadi teaching point.⟧`
      }
    },

    // ─────────────── 3. formalization ───────────────
    {
      id: 'formalization',
      heading: { en: 'The method, formalized', id: 'Metodenya, diformalkan' },
      body: {
        en: `**Solute geothermometers.** Each rests on a mineral-solution equilibrium whose constant varies with temperature, inverted to give $T$ from a concentration or ratio:
- **Silica (quartz)**: $T$ is an increasing function of dissolved $[\\mathrm{SiO_2}]$ (quartz solubility). ⟦TODO-Az: exact calibration (Fournier) and the conductive-vs-adiabatic/steam-loss correction are yours.⟧
- **Na-K**: the canonical Giggenbach form is
$$T(^{\\circ}\\mathrm{C}) \\;=\\; \\frac{1390}{1.75 + \\log_{10}(\\mathrm{Na}/\\mathrm{K})} \\;-\\; 273.15,$$
with Na, K by weight; best for $T \\gtrsim 180\\,^{\\circ}\\mathrm{C}$, and (being slow to re-equilibrate) it tends to record the deepest, hottest equilibrium. (Other published Na-K calibrations — e.g. Fournier 1979 — use slightly different constants; this is the Giggenbach 1988 form.)
- **K-Mg**: fast-equilibrating; records a shallower/last temperature, useful read alongside Na-K to detect re-equilibration.

**The Na-K-Mg geoindicator diagram (Giggenbach 1988).** Plot each water on a ternary with vertices proportional to $\\mathrm{Na}/1000$, $\\mathrm{K}/100$, and $\\sqrt{\\mathrm{Mg}}$. Three domains:
- **Fully equilibrated** — on the equilibrium curve: deep water-rock equilibrium reached; the Na-K geothermometer is valid.
- **Partially equilibrated / mixed** — between: dilution or partial re-equilibration; read with caution.
- **Immature** — near the Mg vertex: dominated by rock dissolution, not equilibrated; geothermometers invalid.
The diagram is run *before* any temperature is quoted — it certifies the geothermometer.

**Gas geothermometers.** Temperature-dependent equilibria among reservoir gases — e.g. ratios involving $\\mathrm{CO_2}$, $\\mathrm{H_2S}$, $\\mathrm{H_2}$, $\\mathrm{CH_4}$ — invert to a reservoir temperature from a gas analysis. ⟦TODO-Az: this is the pathway that matters for dry steam, where there is no liquid; specify the gas geothermometers Darajat uses.⟧

**Process indicators & scaling.** Stable isotopes ($\\delta D$, $\\delta^{18}O$) trace recharge and water-rock exchange (overlaps the Arnórsson draft); Cl–enthalpy mixing diagrams separate boiling from dilution; saturation indices from the fluid chemistry predict **silica** and **calcite** scaling as the fluid cools and boils (overlaps the Henley-Truesdell-Barton draft).

⟦TODO-Az: the dry-steam formalization is squarely your domain.
  1. **No liquid at the wellhead.** Solute geothermometers (Na-K, silica) require a liquid sample; a vapour-dominated well delivers steam + non-condensable gas. Reservoir T comes from gas geothermometry and from condensate/steam chemistry — set the methods.
  2. **Sampling.** The steam/condensate/gas sampling protocol (separator, gas train) and the corrections differ from liquid sampling.
  3. **Scaling & NCG.** Silica behaviour in condensate, calcite, H₂S and non-condensable-gas management are field-specific.
The solute geothermometry + Na-K-Mg diagram + gas-equilibrium principle above are the verified backbone; the dry-steam application is flagged.⟧`,
        id: `**Geothermometer solute.** Masing-masing bersandar pada kesetimbangan mineral-larutan yang konstantanya berubah sama temperatur, diinversi buat ngasih $T$ dari konsentrasi atau rasio:
- **Silika (kuarsa)**: $T$ itu fungsi naik dari $[\\mathrm{SiO_2}]$ terlarut (kelarutan kuarsa). ⟦TODO-Az: kalibrasi persis (Fournier) dan koreksi conductive-vs-adiabatic/steam-loss itu punya kamu.⟧
- **Na-K**: bentuk Giggenbach kanonik itu
$$T(^{\\circ}\\mathrm{C}) \\;=\\; \\frac{1390}{1.75 + \\log_{10}(\\mathrm{Na}/\\mathrm{K})} \\;-\\; 273.15,$$
dengan Na, K by weight; terbaik buat $T \\gtrsim 180\\,^{\\circ}\\mathrm{C}$, dan (karena lambat re-equilibrasi) dia cenderung ngerekam kesetimbangan terdalam, terpanas. (Kalibrasi Na-K lain yang dipublikasi — misal Fournier 1979 — pakai konstanta sedikit beda; ini bentuk Giggenbach 1988.)
- **K-Mg**: cepat-equilibrasi; ngerekam temperatur lebih dangkal/terakhir, berguna dibaca di samping Na-K buat ngedeteksi re-equilibrasi.

**Diagram geoindicator Na-K-Mg (Giggenbach 1988).** Plot tiap air di terner dengan vertex proporsional ke $\\mathrm{Na}/1000$, $\\mathrm{K}/100$, dan $\\sqrt{\\mathrm{Mg}}$. Tiga domain:
- **Fully equilibrated** — di kurva kesetimbangan: kesetimbangan water-rock dalam tercapai; geothermometer Na-K valid.
- **Partially equilibrated / mixed** — di antara: dilusi atau re-equilibrasi parsial; baca dengan hati-hati.
- **Immature** — dekat vertex Mg: didominasi pelarutan batuan, belum ter-equilibrasi; geothermometer gak valid.
Diagramnya dijalanin *sebelum* temperatur apa pun dikutip — dia nyertifikasi geothermometer-nya.

**Geothermometer gas.** Kesetimbangan yang bergantung-temperatur antara gas reservoir — misal rasio yang ngelibatin $\\mathrm{CO_2}$, $\\mathrm{H_2S}$, $\\mathrm{H_2}$, $\\mathrm{CH_4}$ — diinversi ke temperatur reservoir dari analisis gas. ⟦TODO-Az: ini pathway yang penting buat dry steam, di mana gak ada liquid; spesifikasiin gas geothermometer yang Darajat pakai.⟧

**Indikator proses & scaling.** Isotop stabil ($\\delta D$, $\\delta^{18}O$) ngelacak recharge dan pertukaran water-rock (overlap draft Arnórsson); diagram mixing Cl–enthalpy misahin boiling dari dilusi; saturation index dari kimia fluida ngeprediksi scaling **silika** dan **kalsit** seiring fluida mendingin dan mendidih (overlap draft Henley-Truesdell-Barton).

⟦TODO-Az: formalisasi dry-steam itu persis domain kamu.
  1. **Gak ada liquid di wellhead.** Geothermometer solute (Na-K, silika) butuh sampel liquid; sumur vapour-dominated ngirim steam + non-condensable gas. T reservoir datang dari gas geothermometry dan dari kimia condensate/steam — set metodenya.
  2. **Sampling.** Protokol sampling steam/condensate/gas (separator, gas train) dan koreksinya beda dari sampling liquid.
  3. **Scaling & NCG.** Perilaku silika di condensate, kalsit, H₂S dan manajemen non-condensable-gas itu spesifik-field.
Geothermometry solute + diagram Na-K-Mg + prinsip kesetimbangan-gas di atas itu backbone terverifikasi; aplikasi dry-steam-nya di-flag.⟧`
      }
    },

    // ─────────────── 4. worked-example ───────────────
    {
      id: 'worked-example',
      heading: { en: 'Worked example', id: 'Contoh kerjaan' },
      body: {
        en: `**Reading a produced water, end to end (illustrative numbers).** ⟦TODO-Az: every number is a placeholder to show the *procedure* — real Darajat samples, the correct calibrations, and (crucially) the dry-steam/gas pathway are yours; do not teach these figures as Darajat values.⟧

A water sample comes back from the lab with Na, K, Mg, Ca, Cl, and SiO₂ concentrations.

1. **Check equilibrium first.** Plot the sample on the **Na-K-Mg diagram**. Suppose it lands on the equilibrium curve near the Na-K corner: the water is **fully equilibrated** — its geothermometers are trustworthy. (Had it landed in the immature, Mg-rich region, you would stop here: the geothermometer would be meaningless.)
2. **Read the slow geothermometer.** Apply Na-K: $T = 1390/[1.75 + \\log_{10}(\\mathrm{Na}/\\mathrm{K})] - 273.15$. This gives the deep, hottest reservoir temperature.
3. **Cross-check with another clock.** Apply the silica geothermometer. If silica agrees with Na-K, confidence is high. If silica reads *lower*, the fluid likely lost silica or cooled conductively on the way up — a flag to interpret.
4. **Check for re-equilibration.** A K-Mg temperature far below Na-K suggests the water partly re-equilibrated at shallower, cooler conditions — the Na-K (slow clock) still records the deep value, K-Mg (fast clock) the shallow.
5. **Predict scaling.** From the silica content and temperature, compute the silica saturation as the fluid cools to plant conditions: if it goes super-saturated, silica scaling is expected — a design and monitoring concern.

**The read.** A consistent set of geothermometers on an equilibrated water gives a defensible reservoir temperature and a scaling forecast; disagreement between the clocks is itself information (boiling, mixing, dilution, conductive cooling).

⟦TODO-Az: the Darajat version is fundamentally different and is the headline flag — a dry-steam well gives you **steam and gas, not this liquid sample**, so steps 1–4 (solute geothermometers, Na-K-Mg) do not run as written; reservoir temperature comes from **gas geothermometry**, and the scaling/NCG picture is steam-side. A real worked example should use a Darajat steam/gas analysis; I have kept this on the standard liquid method and flagged the dry-steam reality.⟧`,
        id: `**Membaca air yang diproduksi, ujung ke ujung (angka ilustratif).** ⟦TODO-Az: tiap angka placeholder buat nunjukin *prosedur*-nya — sampel Darajat nyata, kalibrasi yang benar, dan (krusial) pathway dry-steam/gas itu punya kamu; jangan ngajarin angka-angka ini sebagai nilai Darajat.⟧

Sampel air balik dari lab dengan konsentrasi Na, K, Mg, Ca, Cl, dan SiO₂.

1. **Cek kesetimbangan dulu.** Plot sampel di **diagram Na-K-Mg**. Misal dia mendarat di kurva kesetimbangan dekat pojok Na-K: airnya **fully equilibrated** — geothermometer-nya bisa-dipercaya. (Kalau dia mendarat di region immature kaya-Mg, kamu berhenti di sini: geothermometer-nya bakal gak bermakna.)
2. **Baca geothermometer lambat.** Terapin Na-K: $T = 1390/[1.75 + \\log_{10}(\\mathrm{Na}/\\mathrm{K})] - 273.15$. Ini ngasih temperatur reservoir dalam, terpanas.
3. **Cross-check dengan jam lain.** Terapin geothermometer silika. Kalau silika sepakat sama Na-K, kepercayaan tinggi. Kalau silika baca *lebih rendah*, fluidanya kemungkinan kehilangan silika atau mendingin secara konduktif dalam perjalanan naik — flag buat diinterpretasi.
4. **Cek re-equilibrasi.** Temperatur K-Mg jauh di bawah Na-K nyaranin airnya sebagian re-equilibrasi di kondisi lebih dangkal, lebih dingin — Na-K (jam lambat) masih ngerekam nilai dalam, K-Mg (jam cepat) yang dangkal.
5. **Prediksi scaling.** Dari kandungan silika dan temperatur, hitung saturasi silika seiring fluida mendingin ke kondisi plant: kalau dia jadi super-saturated, scaling silika diharapkan — perhatian desain dan monitoring.

**Bacaannya.** Set geothermometer yang konsisten pada air yang ter-equilibrasi ngasih temperatur reservoir yang bisa-dipertahankan dan forecast scaling; ketidaksepakatan antara jam itu sendiri informasi (boiling, mixing, dilusi, conductive cooling).

⟦TODO-Az: versi Darajat fundamental berbeda dan ini flag headline — sumur dry-steam ngasih kamu **steam dan gas, bukan sampel liquid ini**, jadi langkah 1–4 (geothermometer solute, Na-K-Mg) gak jalan kayak yang ditulis; temperatur reservoir datang dari **gas geothermometry**, dan gambaran scaling/NCG itu sisi-steam. Worked example nyata harusnya pakai analisis steam/gas Darajat; aku ngejaga ini di metode liquid standar dan nge-flag realita dry-steam.⟧`
      }
    },

    // ─────────────── 5. applications ───────────────
    {
      id: 'applications',
      heading: { en: 'Applications', id: 'Aplikasi' },
      body: {
        en: `**What production geochemistry decides.** Before drilling, geothermometry on hot springs and fumaroles estimates the deep reservoir temperature — a first-order go/no-go for a prospect (it sets the achievable enthalpy and thus the resource grade). During production, routine fluid/gas sampling monitors the reservoir continuously: a falling geothermometer temperature flags cooling; a rising Mg or a shift on the Na-K-Mg diagram flags dilution or shallow-water incursion; gas ratios track boiling and degassing; and saturation indices forecast scaling before it chokes wells, pipes, or the plant.

**Detecting reinjection returns.** ⟦TODO-Az: chemistry is one of the clearest ways to detect injected fluid arriving at a producer — the injectate carries a chemical/isotopic signature distinct from the native reservoir fluid (and is cooler). This ties production geochemistry to the reinjection/tracer module (Axelsson): the tracer test predicts the connection, the chemistry confirms the arrival. Confirm how Darajat uses chemistry to monitor reinjection returns.⟧

**The dry-steam payoff.** ⟦TODO-Az: at Darajat the working fluid is steam + non-condensable gas, so the monitoring toolkit is gas geothermometry, steam/condensate chemistry, and NCG/H₂S tracking rather than solute geothermometry. These are the points a Darajat reservoir/production engineer would foreground; please set the emphasis and the methods.⟧

**The honest limits.** A geothermometer assumes attainment of a specific mineral equilibrium and undisturbed ascent; boiling, mixing, dilution, and re-equilibration all violate that — which is why the equilibrium check (Na-K-Mg) comes first and why multiple geothermometers are read together (agreement builds confidence, disagreement is diagnostic). Geochemistry tells you about *temperature and process*, not directly about *permeability or pressure* — it complements PTA (Horne), reservoir simulation (O'Sullivan-Pruess-Lippmann), and the equilibria/isotope drafts (Henley-Truesdell-Barton, Arnórsson) rather than replacing any of them.`,
        id: `**Apa yang geokimia produksi putusin.** Sebelum pengeboran, geothermometry pada hot spring dan fumarol ngestimasi temperatur reservoir dalam — go/no-go orde-pertama buat prospek (dia nyetel enthalpy yang bisa-dicapai dan dengan demikian grade resource). Selama produksi, sampling fluida/gas rutin memonitor reservoir terus-menerus: temperatur geothermometer yang turun nge-flag pendinginan; Mg yang naik atau pergeseran di diagram Na-K-Mg nge-flag dilusi atau penyusupan air-dangkal; rasio gas ngelacak boiling dan degassing; dan saturation index ngeforecast scaling sebelum dia nyumbat sumur, pipa, atau plant.

**Ngedeteksi return reinjeksi.** ⟦TODO-Az: kimia itu salah satu cara terjelas buat ngedeteksi fluida yang diinjeksi tiba di produser — injektat bawa tanda kimia/isotopik yang beda dari fluida reservoir asli (dan lebih dingin). Ini ngiket geokimia produksi ke module reinjeksi/tracer (Axelsson): tracer test ngeprediksi koneksi, kimianya ngonfirmasi kedatangan. Konfirmasi gimana Darajat pakai kimia buat memonitor return reinjeksi.⟧

**Payoff dry-steam.** ⟦TODO-Az: di Darajat working fluid-nya steam + non-condensable gas, jadi toolkit monitoring-nya gas geothermometry, kimia steam/condensate, dan tracking NCG/H₂S bukan geothermometry solute. Ini poin yang reservoir/production engineer Darajat bakal majuin; tolong set penekanan dan metodenya.⟧

**Batas yang jujur.** Geothermometer ngasumsiin pencapaian kesetimbangan mineral spesifik dan ascent tak-terganggu; boiling, mixing, dilusi, dan re-equilibrasi semua ngelanggar itu — makanya cek kesetimbangan (Na-K-Mg) datang dulu dan kenapa banyak geothermometer dibaca bareng (kesepakatan ngebangun kepercayaan, ketidaksepakatan itu diagnostik). Geokimia ngasih tau kamu soal *temperatur dan proses*, bukan langsung soal *permeabilitas atau pressure* — dia ngelengkapi PTA (Horne), simulasi reservoir (O'Sullivan-Pruess-Lippmann), dan draft kesetimbangan/isotop (Henley-Truesdell-Barton, Arnórsson) bukan ngganti salah satunya.`
      }
    },

    // ─────────────── 6. practice ───────────────
    {
      id: 'practice',
      heading: { en: 'Practice', id: 'Latihan' },
      body: {
        en: `⟦TODO-Az: these items exercise the verified solute-geothermometry backbone; answers stay liquid-water-standard and flag where the dry-steam specifics enter. Replace with Darajat items when you finalize.⟧

**1.** Why do you plot a water on the Na-K-Mg diagram BEFORE reading a geothermometer from it?

<details><summary>Answer</summary>
Because a geothermometer is only valid if the water actually reached equilibrium with the reservoir minerals at depth — and many sampled waters have not. The Na-K-Mg diagram classifies the water: FULLY EQUILIBRATED (on the equilibrium curve, near the Na-K corner) means the deep water-rock equilibrium was attained and the Na-K geothermometer is trustworthy; IMMATURE (near the Mg vertex) means the water is mostly dissolving shallow rock and never equilibrated at depth, so any geothermometer would give a confident but meaningless number; PARTIALLY EQUILIBRATED / MIXED is in between, read with caution. The diagram is a validity test that prevents you from quoting a temperature you should not believe. ⟦TODO-Az: for dry steam there is no liquid Na/K to plot — the gas pathway replaces this.⟧
</details>

**2.** Na-K and K-Mg geothermometers can disagree. Why, and what does the disagreement tell you?

<details><summary>Answer</summary>
Because they equilibrate at different speeds. Na-K is SLOW to re-equilibrate, so it "remembers" the deepest, hottest equilibrium even as the fluid ascends and cools — it records the deep reservoir temperature. K-Mg is FAST, re-equilibrating readily at shallower, cooler conditions, so it records a more recent/shallower temperature. If they agree, the fluid ascended quickly without much re-equilibration. If K-Mg reads well below Na-K, the water partially re-equilibrated on the way up — Na-K still gives the deep value, and the gap quantifies the shallow cooling/mixing. The two clocks together are more informative than either alone.
</details>

**3.** A produced water's silica geothermometer reads lower than its Na-K. Give two physical explanations.

<details><summary>Answer</summary>
(1) SILICA LOSS / scaling: as the fluid cooled and (especially) boiled on the way up, silica became super-saturated and precipitated, lowering the dissolved SiO₂ and so the silica-geothermometer temperature — while Na-K (a ratio, less affected by precipitation) still reads the deep value. (2) CONDUCTIVE COOLING or steam loss: if the fluid lost heat to surrounding rock or flashed steam, the silica content reflects a lower equilibration/last temperature than the slow Na-K clock. Either way the disagreement is diagnostic: it points to boiling/steam-loss or conductive cooling between the reservoir and the sample point, which is itself useful process information. ⟦TODO-Az: the boiling/steam-loss correction for the silica geothermometer is field-specific.⟧
</details>

**4.** Why is geochemistry a complement to pressure-transient analysis and reservoir simulation, not a substitute?

<details><summary>Answer</summary>
Because it measures a different thing. Geochemistry reads TEMPERATURE and PROCESS (deep reservoir temperature, boiling, mixing, dilution, scaling tendency, reinjection-return arrival) from the produced fluid's chemistry. PTA (Horne) reads the rock's PERMEABILITY-THICKNESS and skin from the pressure response; reservoir simulation integrates pressure, temperature, and mass over the whole field. They answer non-overlapping questions and are strongest together: chemistry can flag cooling or dilution that pressure data alone would miss, while PTA and simulation supply the flow and pressure picture chemistry cannot. The full diagnostic picture of a producing field uses all of them. ⟦TODO-Az: confirm how Darajat combines geochemical monitoring with PTA and simulation.⟧
</details>`,
        id: `⟦TODO-Az: item ini ngelatih backbone solute-geothermometry terverifikasi; jawaban tetap standar-liquid-water dan nge-flag di mana spesifik dry-steam masuk. Ganti dengan item Darajat pas kamu finalisasi.⟧

**1.** Kenapa kamu plot air di diagram Na-K-Mg SEBELUM baca geothermometer darinya?

<details><summary>Jawaban</summary>
Karena geothermometer cuma valid kalau airnya beneran nyampe kesetimbangan dengan mineral reservoir di kedalaman — dan banyak air yang disampel belum. Diagram Na-K-Mg ngeklasifikasi air: FULLY EQUILIBRATED (di kurva kesetimbangan, dekat pojok Na-K) berarti kesetimbangan water-rock dalam tercapai dan geothermometer Na-K bisa-dipercaya; IMMATURE (dekat vertex Mg) berarti airnya kebanyakan ngelarutin batuan dangkal dan gak pernah ter-equilibrasi di kedalaman, jadi geothermometer apa pun bakal ngasih angka yang yakin tapi gak bermakna; PARTIALLY EQUILIBRATED / MIXED itu di antara, baca dengan hati-hati. Diagramnya tes validitas yang nyegah kamu ngutip temperatur yang harusnya kamu gak percaya. ⟦TODO-Az: buat dry steam gak ada liquid Na/K buat di-plot — pathway gas ngeganti ini.⟧
</details>

**2.** Geothermometer Na-K dan K-Mg bisa gak sepakat. Kenapa, dan apa yang ketidaksepakatannya ngasih tau kamu?

<details><summary>Jawaban</summary>
Karena mereka equilibrasi di kecepatan berbeda. Na-K itu LAMBAT re-equilibrasi, jadi dia "inget" kesetimbangan terdalam, terpanas bahkan saat fluida naik dan mendingin — dia ngerekam temperatur reservoir dalam. K-Mg itu CEPAT, re-equilibrasi dengan mudah di kondisi lebih dangkal, lebih dingin, jadi dia ngerekam temperatur lebih baru/lebih dangkal. Kalau mereka sepakat, fluidanya naik cepat tanpa banyak re-equilibrasi. Kalau K-Mg baca jauh di bawah Na-K, airnya sebagian re-equilibrasi dalam perjalanan naik — Na-K masih ngasih nilai dalam, dan gap-nya ngukur cooling/mixing dangkal. Dua jam bareng lebih informatif dari salah satu sendirian.
</details>

**3.** Geothermometer silika air yang diproduksi baca lebih rendah dari Na-K-nya. Kasih dua penjelasan fisik.

<details><summary>Jawaban</summary>
(1) KEHILANGAN SILIKA / scaling: seiring fluida mendingin dan (terutama) mendidih dalam perjalanan naik, silika jadi super-saturated dan presipitasi, nurunin SiO₂ terlarut dan dengan demikian temperatur geothermometer-silika — sementara Na-K (rasio, kurang terpengaruh presipitasi) masih baca nilai dalam. (2) CONDUCTIVE COOLING atau steam loss: kalau fluidanya kehilangan panas ke batuan sekitar atau flash steam, kandungan silika ngerefleksiin temperatur equilibrasi/terakhir yang lebih rendah dari jam Na-K yang lambat. Either way ketidaksepakatannya diagnostik: dia nunjuk ke boiling/steam-loss atau conductive cooling antara reservoir dan titik sampel, yang itu sendiri informasi proses berguna. ⟦TODO-Az: koreksi boiling/steam-loss buat geothermometer silika itu spesifik-field.⟧
</details>

**4.** Kenapa geokimia itu pelengkap buat pressure-transient analysis dan reservoir simulation, bukan pengganti?

<details><summary>Jawaban</summary>
Karena dia ngukur hal berbeda. Geokimia baca TEMPERATUR dan PROSES (temperatur reservoir dalam, boiling, mixing, dilusi, kecenderungan scaling, kedatangan return-reinjeksi) dari kimia fluida yang diproduksi. PTA (Horne) baca PERMEABILITY-THICKNESS dan skin batuan dari pressure response; reservoir simulation ngintegrasi pressure, temperatur, dan massa over seluruh field. Mereka ngejawab pertanyaan yang gak-overlap dan paling kuat bareng: kimia bisa nge-flag pendinginan atau dilusi yang data pressure sendiri bakal kelewat, sementara PTA dan simulasi nyuplai gambaran flow dan pressure yang kimia gak bisa. Gambaran diagnostik lengkap field yang berproduksi pakai semuanya. ⟦TODO-Az: konfirmasi gimana Darajat ngegabung monitoring geokimia dengan PTA dan simulasi.⟧
</details>`
      }
    },

    // ─────────────── 7. connections ───────────────
    {
      id: 'connections',
      heading: { en: 'Connections', id: 'Koneksi' },
      body: {
        en: `- **Equilibria root**: [Henley-Truesdell-Barton 1984](item:henley-truesdell-barton-1984) is the fluid-mineral equilibrium framework this geothermometry rests on; read it first. ⟦TODO-Az⟧
- **Geothermometer compilation**: ⟦TODO-Az⟧ [Arnórsson 2000](item:arnorsson-2000) (IAEA) compiles the solute and gas geothermometers and the isotope methods; this module focuses the Na-K-Mg geoindicator + production-monitoring use.
- **Reinjection returns**: ⟦TODO-Az⟧ [Axelsson 2010](item:axelsson-2010) — chemistry confirms the arrival of injected fluid that a tracer test predicts (distinct chemical/isotopic signature, cooler).
- **Scaling ↔ skin**: ⟦TODO-Az⟧ [Horne 1995](item:horne-1995) — silica/calcite scaling predicted from fluid chemistry is a physical driver of rising near-well skin over a well's life.
- **Field-scale model**: [O'Sullivan-Pruess-Lippmann 2001](item:osullivan-pruess-lippmann-2001) — geochemical temperatures and process indicators help constrain and validate the numerical model.
- **Conceptual model**: [Cumming 2009](item:cumming-2009) — surface geochemistry of springs/fumaroles feeds the pre-drilling conceptual model and the first reservoir-temperature estimate.`,
        id: `- **Akar kesetimbangan**: [Henley-Truesdell-Barton 1984](item:henley-truesdell-barton-1984) itu framework kesetimbangan fluida-mineral yang geothermometry ini bersandar; baca dulu. ⟦TODO-Az⟧
- **Kompilasi geothermometer**: ⟦TODO-Az⟧ [Arnórsson 2000](item:arnorsson-2000) (IAEA) ngompilasi geothermometer solute dan gas dan metode isotop; module ini ngefokusin geoindicator Na-K-Mg + penggunaan production-monitoring.
- **Return reinjeksi**: ⟦TODO-Az⟧ [Axelsson 2010](item:axelsson-2010) — kimia ngonfirmasi kedatangan fluida yang diinjeksi yang tracer test prediksi (tanda kimia/isotopik beda, lebih dingin).
- **Scaling ↔ skin**: ⟦TODO-Az⟧ [Horne 1995](item:horne-1995) — scaling silika/kalsit yang diprediksi dari kimia fluida itu pendorong fisik dari skin near-well yang naik sepanjang umur sumur.
- **Model skala-field**: [O'Sullivan-Pruess-Lippmann 2001](item:osullivan-pruess-lippmann-2001) — temperatur geokimia dan indikator proses bantu ngebatasi dan memvalidasi model numerik.
- **Conceptual model**: [Cumming 2009](item:cumming-2009) — geokimia permukaan spring/fumarol nyuapin conceptual model pra-pengeboran dan estimasi temperatur-reservoir pertama.`
      }
    },

    // ─────────────── 8. sources ───────────────
    {
      id: 'sources',
      heading: { en: 'Sources', id: 'Sumber' },
      body: {
        en: `⟦TODO-Az: verify the exact geothermometer calibrations/constants and which sources you want canonical for the dry-steam framing, before finalizing.⟧
- **Giggenbach, W. F.** (1988). "Geothermal solute equilibria. Derivation of Na-K-Mg-Ca geoindicators." *Geochimica et Cosmochimica Acta* 52(12), 2749–2765. **(This item.)** The Na-K-Mg ternary diagram.
- **Giggenbach, W. F.** (1991). "Chemical techniques in geothermal exploration." In *Applications of Geochemistry in Geothermal Reservoir Development* (UNITAR/UNDP). Gas geothermometry & sampling.
- **Fournier, R. O.** (1977/1979). Silica and Na-K geothermometers. The cation/silica calibrations. ⟦TODO-Az: pin the exact equations you teach.⟧
- **Fournier, R. O., and Truesdell, A. H.** (1973). "An empirical Na-K-Ca geothermometer for natural waters." *Geochimica et Cosmochimica Acta.*
- **Arnórsson, S. (ed.)** (2000). *Isotopic and Chemical Techniques…* IAEA. Geothermometer compilation (in this catalog). ⟦TODO-Az⟧
- **Henley, R. W., Truesdell, A. H., and Barton, P. B.** (1984). *Fluid-Mineral Equilibria in Hydrothermal Systems.* SEG. The equilibria root (in this catalog). ⟦TODO-Az⟧`,
        id: `⟦TODO-Az: verifikasi kalibrasi/konstanta geothermometer persis dan sumber mana yang kamu mau kanonik buat framing dry-steam, sebelum finalisasi.⟧
- **Giggenbach, W. F.** (1988). "Geothermal solute equilibria. Derivation of Na-K-Mg-Ca geoindicators." *Geochimica et Cosmochimica Acta* 52(12), 2749–2765. **(Item ini.)** Diagram terner Na-K-Mg.
- **Giggenbach, W. F.** (1991). "Chemical techniques in geothermal exploration." Dalam *Applications of Geochemistry in Geothermal Reservoir Development* (UNITAR/UNDP). Gas geothermometry & sampling.
- **Fournier, R. O.** (1977/1979). Geothermometer silika dan Na-K. Kalibrasi kation/silika. ⟦TODO-Az: pin persamaan persis yang kamu ajarin.⟧
- **Fournier, R. O., dan Truesdell, A. H.** (1973). "An empirical Na-K-Ca geothermometer for natural waters." *Geochimica et Cosmochimica Acta.*
- **Arnórsson, S. (ed.)** (2000). *Isotopic and Chemical Techniques…* IAEA. Kompilasi geothermometer (di katalog ini). ⟦TODO-Az⟧
- **Henley, R. W., Truesdell, A. H., dan Barton, P. B.** (1984). *Fluid-Mineral Equilibria in Hydrothermal Systems.* SEG. Akar kesetimbangan (di katalog ini). ⟦TODO-Az⟧`
      }
    },
  ],

  audio: { enabled: true },

  selfTest: [
    {
      sectionId: 'motivation',
      question: {
        en: 'How can the chemistry of a produced fluid tell you the temperature of rock kilometres down that you can never reach?',
        id: 'Gimana kimia fluida yang diproduksi bisa ngasih tau kamu temperatur batuan berkilometer ke bawah yang gak bakal pernah kamu capai?'
      },
      prompt: { en: 'Before continuing, try answering:', id: 'Sebelum lanjut, coba jawab:' },
      answer: {
        en: 'Because the fluid was in chemical equilibrium with the reservoir minerals at depth, and that equilibrium is temperature-dependent. At reservoir temperature the water holds a specific dissolved silica content and a specific Na/K ratio (set by equilibrium with quartz and feldspars). As the fluid ascends it cools, but the chemistry cannot re-adjust fast enough — so the sample arrives still "set" to the deep equilibrium, and inverting the temperature-dependent relation (a GEOTHERMOMETER) back-calculates the reservoir temperature. Slow-re-equilibrating species (silica, Na-K) preserve the deep, hot signal; fast ones (K-Mg) record shallower conditions. The validity caveat is that the water must actually have equilibrated and ascended without major boiling/mixing — which is what the Na-K-Mg diagram checks. ⟦TODO-Az: for dry steam the gases, not the dissolved cations, carry this signal.⟧',
        id: 'Karena fluidanya dalam kesetimbangan kimia dengan mineral reservoir di kedalaman, dan kesetimbangan itu bergantung-temperatur. Di temperatur reservoir airnya nahan kandungan silika terlarut spesifik dan rasio Na/K spesifik (diset oleh kesetimbangan dengan kuarsa dan feldspar). Seiring fluida naik dia mendingin, tapi kimianya gak bisa re-adjust cukup cepat — jadi sampelnya tiba masih "set" ke kesetimbangan dalam, dan nginversi relasi yang bergantung-temperatur (GEOTHERMOMETER) back-calculate temperatur reservoir. Spesies yang lambat-re-equilibrasi (silika, Na-K) ngejaga sinyal dalam, panas; yang cepat (K-Mg) ngerekam kondisi lebih dangkal. Caveat validitasnya itu airnya harus beneran udah ter-equilibrasi dan naik tanpa boiling/mixing besar — yang itu yang diagram Na-K-Mg cek. ⟦TODO-Az: buat dry steam gasnya, bukan kation terlarut, yang bawa sinyal ini.⟧'
      }
    },
    {
      sectionId: 'formalization',
      question: {
        en: 'What does the Na-K-Mg geoindicator diagram add beyond computing a geothermometer temperature, and why is that essential?',
        id: 'Apa yang diagram geoindicator Na-K-Mg tambahin di luar ngitung temperatur geothermometer, dan kenapa itu esensial?'
      },
      prompt: { en: 'Before continuing, try answering:', id: 'Sebelum lanjut, coba jawab:' },
      answer: {
        en: 'It tests the VALIDITY of the geothermometer before you trust it. A geothermometer formula will return a number for any water — including waters that never equilibrated with the reservoir and for which the number is meaningless. The Na-K-Mg diagram classifies the water by its Na, K, and Mg: FULLY EQUILIBRATED (on the equilibrium curve) means deep water-rock equilibrium was reached and the Na-K geothermometer is valid; IMMATURE (Mg-rich vertex) means the water is just dissolving shallow rock and has not equilibrated, so any geothermometer is invalid; PARTIALLY EQUILIBRATED / MIXED is intermediate. This is essential because it prevents quoting a confident-but-wrong reservoir temperature from an unequilibrated or mixed sample — you check equilibrium first, read the thermometer second. ⟦TODO-Az: for a dry-steam wellhead there is no liquid Na/K, so the gas pathway substitutes.⟧',
        id: 'Dia nge-tes VALIDITAS geothermometer sebelum kamu percaya. Rumus geothermometer bakal ngembaliin angka buat air apa pun — termasuk air yang gak pernah ter-equilibrasi dengan reservoir dan yang angkanya gak bermakna. Diagram Na-K-Mg ngeklasifikasi air dengan Na, K, dan Mg-nya: FULLY EQUILIBRATED (di kurva kesetimbangan) berarti kesetimbangan water-rock dalam tercapai dan geothermometer Na-K valid; IMMATURE (vertex kaya-Mg) berarti airnya cuma ngelarutin batuan dangkal dan belum ter-equilibrasi, jadi geothermometer apa pun gak valid; PARTIALLY EQUILIBRATED / MIXED itu intermediate. Ini esensial karena dia nyegah ngutip temperatur reservoir yang yakin-tapi-salah dari sampel yang gak ter-equilibrasi atau ter-mix — kamu cek kesetimbangan dulu, baca termometer kedua. ⟦TODO-Az: buat wellhead dry-steam gak ada liquid Na/K, jadi pathway gas nggantiin.⟧'
      }
    },
    {
      sectionId: 'applications',
      question: {
        en: 'Why is geochemistry a complement to PTA and reservoir simulation rather than a substitute, and what unique signal does it carry?',
        id: 'Kenapa geokimia itu pelengkap buat PTA dan reservoir simulation bukan pengganti, dan sinyal unik apa yang dia bawa?'
      },
      prompt: { en: 'Before continuing, try answering:', id: 'Sebelum lanjut, coba jawab:' },
      answer: {
        en: 'Because it measures temperature and process, not flow and pressure. Geochemistry reads the deep reservoir TEMPERATURE (geothermometers), and detects PROCESSES — boiling, mixing, dilution, scaling tendency, and the arrival of reinjection returns — from the produced fluid/gas chemistry. PTA (Horne) reads the rock\'s permeability-thickness and skin from the pressure response, and reservoir simulation integrates pressure, temperature, and mass across the whole field. These are non-overlapping measurements: chemistry can flag cooling or dilution or injected-fluid breakthrough that pressure data alone would not reveal, while PTA and simulation give the flow/pressure picture chemistry cannot. A producing field is diagnosed best with all of them together — chemistry is the temperature-and-process channel. ⟦TODO-Az: confirm how Darajat integrates geochemical monitoring with PTA and simulation, and the dry-steam gas-monitoring specifics.⟧',
        id: 'Karena dia ngukur temperatur dan proses, bukan flow dan pressure. Geokimia baca TEMPERATUR reservoir dalam (geothermometer), dan ngedeteksi PROSES — boiling, mixing, dilusi, kecenderungan scaling, dan kedatangan return reinjeksi — dari kimia fluida/gas yang diproduksi. PTA (Horne) baca permeability-thickness dan skin batuan dari pressure response, dan reservoir simulation ngintegrasi pressure, temperatur, dan massa lintas seluruh field. Ini pengukuran yang gak-overlap: kimia bisa nge-flag pendinginan atau dilusi atau breakthrough fluida-injeksi yang data pressure sendiri gak bakal ungkap, sementara PTA dan simulasi ngasih gambaran flow/pressure yang kimia gak bisa. Field yang berproduksi didiagnosis terbaik dengan semuanya bareng — kimia itu kanal temperatur-dan-proses. ⟦TODO-Az: konfirmasi gimana Darajat ngintegrasi monitoring geokimia dengan PTA dan simulasi, dan spesifik gas-monitoring dry-steam.⟧'
      }
    },
  ],
};
