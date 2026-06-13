// ─────────────────────────────────────────────────────────────────────────
// ⚠ DRAFT — DARAJAT-SPECIFIC ITEMS STILL AWAIT AZ. Geothermal content is
// Az-authored. Schema-valid + renderable.
//
// GENERAL CLAIMS VERIFIED against the literature (2026-06-13): the dry-steam /
// flash / binary cycle physics, the turbine + exergy equations, the steam-table
// values and arithmetic in both worked examples and the practice set, the Baumann
// moisture-correction convention, η_t≈0.82–0.85, and the DiPippo bibliography/bio
// were confirmed across multiple independent sources. Two pure framing flags (the
// "flash machinery is the liquid case, not Darajat" notes in §formalization and
// §worked-example) were resolved into prose. CORRECTION: dry-steam utilization
// (second-law) efficiency was overstated as "half to two-thirds (50–60%)"; sourced
// values (The Geysers ~46–47%, Kamojang ~40–51%; DiPippo ≥40%) put it at ~45–55%,
// now used in §intuition, §formalization and practice #3.
//
// REMAINING DARAJAT OPERATIONAL FACTS — EXTERNAL TO THIS MODULE, Az's alone:
//   • Darajat plant trains (Units I/II/III) conversion + ownership split
//     (Unit I plant PLN/Indonesia Power w/ Star Energy steam; Units II & III Star Energy).
//   • Real Darajat turbine-inlet/condenser conditions + NCG (CO₂/H₂S) fraction and
//     gas-extraction design (worked-example inlet values are illustrative only).
//   • Darajat 271 MWe capacity staging (55→95→121) — cite a Darajat primary source,
//     not DiPippo — and resolve the AZ5 well count (49 vs ~39) before quoting one.
//   • Darajat vapour-dominated / dry-steam classification — confirm + cite a Darajat
//     source rather than asserting it here.
//   Bibliography note: 1st-ed ISBN 9780750686204 is refuted (it is the 2nd ed) and
//   the DOI is uncertain — body cites only the 4th-ed + prior-edition years (safe).
//   Seed cards deferred until Az signs off.
// Full prep: notes/dipippo-2016-research-prep-2026-06-02.md
// ─────────────────────────────────────────────────────────────────────────

export const CONTENT = {
  itemId: 'dipippo-2016',
  estimatedReadMinutes: 34,

  author: {
    fullName: { en: `Ronald DiPippo`, id: `Ronald DiPippo` },
    affiliation: {
      en: `Chancellor Professor Emeritus of Mechanical Engineering, University of Massachusetts Dartmouth`,
      id: `Chancellor Professor Emeritus of Mechanical Engineering, University of Massachusetts Dartmouth`
    },
    tagline: {
      en: `The thermodynamicist who made exergy analysis the common language of geothermal power-plant engineering.`,
      id: `Thermodynamicist yang ngebikin exergy analysis jadi bahasa bersama rekayasa power-plant geothermal.`
    },
    bio: {
      en: `Ronald DiPippo is a leading authority on the surface side of geothermal energy — turning reservoir steam and brine into electricity. Trained as a classical thermodynamicist at Brown University (doctoral work on the thermodynamic and transport properties of high-temperature, high-pressure gases), he spent roughly thirty-seven years at the University of Massachusetts Dartmouth (1967–2004), chairing Mechanical Engineering for about fourteen of them and serving as Associate Dean of Engineering, retiring as Chancellor Professor. Alongside academia he became one of the most experienced geothermal-power consultants in the world, advising governments and utilities across some nine or ten countries and sitting on a dozen technical advisory boards, and he served for years on the editorial board of *Geothermics*. He authored roughly nine books and over a hundred papers, and his honors include the Geothermal Resources Council's Ben Holt Award (2007) and LaGeo's Victor De Sola Award (2010). His textbook *Geothermal Power Plants* — now in its fourth edition (2016) — is widely regarded as the field's standard reference for energy conversion.`,
      id: `Ronald DiPippo adalah salah satu otoritas terkemuka buat sisi permukaan energi geothermal — ngubah steam dan brine reservoir jadi listrik. Dilatih sebagai thermodynamicist klasik di Brown University (kerja doktoral di thermodynamic dan transport properties gas high-temperature high-pressure), dia menghabiskan kira-kira tiga puluh tujuh tahun di University of Massachusetts Dartmouth (1967–2004), ngepalain Mechanical Engineering sekitar empat belas tahunnya dan jadi Associate Dean of Engineering, pensiun sebagai Chancellor Professor. Selain akademia dia jadi salah satu konsultan geothermal-power paling berpengalaman di dunia, ngasih advice ke pemerintah dan utility di sekitar sembilan atau sepuluh negara dan duduk di selusin technical advisory board, dan dia bertahun-tahun di editorial board *Geothermics*. Dia nulis kira-kira sembilan buku dan lebih dari seratus paper, dan honor-nya termasuk Ben Holt Award Geothermal Resources Council (2007) dan Victor De Sola Award LaGeo (2010). Textbook-nya *Geothermal Power Plants* — sekarang edisi keempat (2016) — banyak dianggap sebagai referensi standar bidang ini buat energy conversion.`
    },
    focus: {
      en: `Geothermal surface energy conversion: the power-cycle types (dry-steam, single/double/triple flash, binary/ORC, combined/hybrid), their thermodynamics, and — the unifying thread — Second-Law (exergy) analysis as the consistent way to evaluate and compare them. Plus environmental impact and a large body of worldwide plant case studies.`,
      id: `Geothermal surface energy conversion: tipe-tipe power-cycle (dry-steam, single/double/triple flash, binary/ORC, combined/hybrid), termodinamika mereka, dan — benang pemersatu — analisis Second-Law (exergy) sebagai cara konsisten buat ngevaluasi dan ngebandingin mereka. Plus environmental impact dan kumpulan besar case study plant di seluruh dunia.`
    },
    intellectualLineage: {
      en: `Engineering thermodynamics and the Second-Law "availability/exergy" school (the Gibbs-Keenan availability tradition), trained at Brown. DiPippo transposed that rigorous performance methodology onto geothermal energy conversion, helping establish exergy analysis as a standard analytical approach to geothermal power-plant design and as the field's common figure of merit. As the surface/utilization track he stands complementary to — and a downstream consumer of — the subsurface resource (reservoir/geology) tradition.`,
      id: `Engineering thermodynamics dan sekolah "availability/exergy" Second-Law (tradisi availability Gibbs-Keenan), dilatih di Brown. DiPippo nransposisi metodologi performance yang rigor itu ke geothermal energy conversion, membantu ngedirikan exergy analysis sebagai salah satu pendekatan analitik standar buat desain power-plant geothermal dan jadi figure of merit bersama bidang ini. Sebagai track surface/utilization dia berdiri komplementer ke — dan konsumen downstream dari — tradisi subsurface resource (reservoir/geologi).`
    },
    keyCollaborators: {
      en: `Primarily a single-author authority; his edited volume *Geothermal Power Generation: Developments and Innovation* (2016) gathered specialist chapters from across the field (including William Cumming's chapter on geophysics and conceptual models — the cross-link to the exploration track). The broader **Geothermal Resources Council** community and the worldwide plant operators whose fields populate his case studies (Larderello, The Geysers, the New Zealand and Indonesian fields, Iceland's Nesjavellir/Hellisheidi).`,
      id: `Terutama otoritas penulis-tunggal; edited volume-nya *Geothermal Power Generation: Developments and Innovation* (2016) ngumpulin chapter spesialis dari seluruh bidang (termasuk chapter William Cumming tentang geofisika dan conceptual model — cross-link ke track eksplorasi). Komunitas **Geothermal Resources Council** yang lebih luas dan operator plant seluruh dunia yang field-nya ngisi case study-nya (Larderello, The Geysers, field New Zealand dan Indonesia, Nesjavellir/Hellisheidi Islandia).`
    },
    legacy: {
      en: `*Geothermal Power Plants* is a standard textbook for geothermal energy conversion, taught and used worldwide, and its lasting contribution is methodological: it put **exergy (Second-Law) analysis** at the center of how geothermal plants are evaluated, so that dry-steam, flash and binary cycles can be compared on a common, physically meaningful footing rather than by first-law thermal efficiency alone. Its chapter-per-cycle structure and its worldwide case studies make it both a design reference and a survey of how the resource's thermodynamic state dictates the plant that sits on top of it.`,
      id: `*Geothermal Power Plants* itu salah satu textbook standar buat geothermal energy conversion, diajarin dan dipake di seluruh dunia, dan kontribusi yang bertahan itu metodologis: dia naruh **analisis exergy (Second-Law)** di pusat gimana plant geothermal dievaluasi, jadi dry-steam, flash dan binary cycle bisa dibandingin di pijakan bersama yang physically meaningful daripada by first-law thermal efficiency doang. Struktur chapter-per-cycle-nya dan case study seluruh dunianya bikin dia baik referensi desain maupun survey gimana thermodynamic state sumber daya nentuin plant yang duduk di atasnya.`
    },
    keyWorks: [
      { year: 2016, title: `Geothermal Power Plants: Principles, Applications, Case Studies and Environmental Impact, 4th ed. (this item)`, venue: `Butterworth-Heinemann / Elsevier (1st ed. 2005, 2nd 2008, 3rd 2012)` },
      { year: 2016, title: `Geothermal Power Generation: Developments and Innovation (DiPippo, ed.)`, venue: `Woodhead Publishing / Elsevier` },
      { year: 1980, title: `Geothermal Energy as a Source of Electricity (early U.S. DOE-era worldwide assessment)`, venue: `U.S. Department of Energy` },
      { year: 2004, title: `Second Law assessment of binary plants generating power from low-temperature geothermal fluids`, venue: `Geothermics 33(5), 565-586` },
    ],
  },

  sections: [
    // ─────────────── 1. motivation ───────────────
    {
      id: 'motivation',
      heading: { en: 'Why this matters', id: 'Kenapa ini penting' },
      body: {
        en: `Every other geothermal item in this catalog is about the resource underground — finding it, characterizing it, forecasting how much it can deliver. DiPippo is about what happens at the surface: once a well delivers steam or hot brine, how do you turn it into electricity, and how well? This is the **utilization** end of the value chain, and it is an independent discipline — classical power-plant thermodynamics, adapted to a hot fluid that comes out of the ground instead of a boiler.

The organizing insight is that you do not get to choose the cycle freely — **the reservoir's thermodynamic state dictates it**. A vapour-dominated reservoir that delivers dry steam feeds a *dry-steam plant* (steam straight to the turbine). A liquid-dominated high-enthalpy reservoir feeds a *flash plant* (throttle the hot liquid so part of it boils, separate the steam, send it to the turbine). A lower-enthalpy liquid resource feeds a *binary/ORC plant* (keep the geofluid liquid, hand its heat to a secondary working fluid that boils at a lower temperature). Pick the wrong cycle for the resource and you either throw away energy or build a plant that cannot run.

For a dry-steam field — the class this catalog's owner works in — the surface story is the *simplest* of all: the reservoir hands you turbine-ready steam, so the plant is little more than gathering lines, a turbine, a condenser, and the equipment to pull non-condensable gas out of the condenser. That simplicity is exactly why dry-steam plants were the first geothermal power technology (Larderello, 1900s) and remain among the most efficient. The companion to the dry-steam deliverability framework you already have is this: deliverability is the *supply* side (how much steam each well gives), and the power cycle is the *demand/conversion* side (how much electricity that steam becomes). **⟦TODO-Az: confirm how the Darajat plant trains (Units I/II/III) actually convert the steam, and the ownership split (Unit I plant PLN/Indonesia Power with Star Energy supplying steam; Units II & III Star Energy). Prep §9-C.⟧**`,
        id: `Tiap item geothermal lain di katalog ini tentang sumber daya di bawah tanah — nemuin, ngarakterisasi, forecast berapa banyak dia bisa deliver. DiPippo tentang apa yang terjadi di permukaan: begitu sumur deliver steam atau hot brine, gimana kamu ngubahnya jadi listrik, dan seberapa bagus? Ini ujung **utilization** dari rantai nilai, dan dia disiplin independen — power-plant thermodynamics klasik, diadaptasi ke hot fluid yang keluar dari tanah bukan dari boiler.

Insight pengaturnya bahwa kamu gak bisa milih cycle dengan bebas — **thermodynamic state reservoir yang nentuin dia**. Reservoir vapour-dominated yang deliver dry steam ngasih makan *dry-steam plant* (steam langsung ke turbine). Reservoir liquid-dominated high-enthalpy ngasih makan *flash plant* (throttle hot liquid biar sebagian mendidih, pisahin steam-nya, kirim ke turbine). Sumber daya liquid lower-enthalpy ngasih makan *binary/ORC plant* (biarin geofluid tetap liquid, serahin panasnya ke secondary working fluid yang mendidih di suhu lebih rendah). Pilih cycle yang salah buat sumber dayanya dan kamu entah buang energi atau bangun plant yang gak bisa jalan.

Buat field dry-steam — kelas yang owner katalog ini kerjain — cerita permukaannya yang *paling sederhana* dari semua: reservoir nyerahin kamu steam yang turbine-ready, jadi plant-nya gak lebih dari gathering line, turbine, condenser, dan peralatan buat narik non-condensable gas keluar dari condenser. Kesederhanaan itu persis kenapa dry-steam plant jadi teknologi power geothermal pertama (Larderello, 1900-an) dan tetap di antara yang paling efisien. Companion buat framework deliverability dry-steam yang kamu udah punya itu ini: deliverability itu sisi *supply* (berapa banyak steam tiap sumur kasih), dan power cycle itu sisi *demand/conversion* (berapa banyak listrik steam itu jadi). **⟦TODO-Az: konfirmasi gimana train plant Darajat (Unit I/II/III) sebenarnya ngonversi steam, dan ownership split (plant Unit I PLN/Indonesia Power dengan Star Energy nyuplai steam; Unit II & III Star Energy). Prep §9-C.⟧**`
      }
    },

    // ─────────────── 2. intuition ───────────────
    {
      id: 'intuition',
      heading: { en: 'Intuition', id: 'Intuisi' },
      body: {
        en: `Three ideas carry DiPippo.

**Cycle selection follows the resource.** The reservoir hands you a fluid in some thermodynamic state, and that state picks the plant. Dry steam (quality essentially 1) → send it straight to a turbine. Pressurized hot liquid → *flash* it: drop the pressure so a fraction boils, separate that steam, and turbine it (single-flash; do it twice or three times to wring out more — double/triple-flash). Liquid too cool to flash usefully → *binary*: pass the geofluid through a heat exchanger that boils a separate, lower-boiling working fluid (an organic Rankine cycle) which drives the turbine, and reinject the still-liquid geofluid. The whole book is organized this way, one cycle per chapter.

**Dry steam is the simplest cycle — and that is a real advantage.** With turbine-ready steam there is no separator, no brine handling, no scaling-prone flash vessels, no secondary fluid or heat exchanger. The plant reduces to: gather the steam, knock out moisture and particulates, expand it through the turbine, condense it under vacuum, reject heat at the cooling tower. Fewer unit operations means lower cost per kW and high reliability — which is why dry steam, though rare in nature (Larderello, The Geysers, Kamojang, Darajat), is prized.

**The one real complication of a dry-steam plant is gas.** Geothermal steam carries non-condensable gases — mostly CO₂, with some H₂S. They do not condense in the condenser, so if you let them accumulate they destroy the vacuum that the turbine's power depends on. So a dry-steam plant runs continuous gas extraction (steam-jet ejectors or vacuum pumps), which is a *parasitic* load — it costs power to make power — and that load grows with the gas fraction. H₂S then usually needs abatement before release.

**Exergy is the right scorecard.** First-law (thermal) efficiency makes all geothermal plants look poor, because the heat source is lukewarm by power-station standards. DiPippo's contribution is to score plants by **exergy** (Second-Law) — the *useful work potential* of the fluid relative to the ambient dead state — so the question becomes "of the work that was thermodynamically available in this steam, how much did the plant actually capture?" By that measure dry-steam units do very well (roughly half of the wellhead exergy — on the order of 45–55%), and different cycles become comparable on a common, physically honest footing.`,
        id: `Tiga ide bawa DiPippo.

**Pemilihan cycle ngikutin sumber daya.** Reservoir nyerahin kamu fluid dalam suatu thermodynamic state, dan state itu milih plant-nya. Dry steam (quality pada dasarnya 1) → kirim langsung ke turbine. Pressurized hot liquid → *flash* dia: turunin pressure biar sebagian mendidih, pisahin steam itu, dan turbine-in (single-flash; lakuin dua atau tiga kali buat meres lebih banyak — double/triple-flash). Liquid terlalu dingin buat flash dengan berguna → *binary*: lewatin geofluid lewat heat exchanger yang ngedidihin working fluid terpisah yang lebih rendah titik didihnya (organic Rankine cycle) yang ngedrive turbine, dan reinject geofluid yang masih liquid. Seluruh buku diatur begini, satu cycle per chapter.

**Dry steam itu cycle paling sederhana — dan itu keuntungan nyata.** Dengan steam yang turbine-ready gak ada separator, gak ada brine handling, gak ada flash vessel yang rawan scaling, gak ada secondary fluid atau heat exchanger. Plant-nya tereduksi jadi: kumpulin steam, knock out moisture dan particulate, expand lewat turbine, condense di bawah vacuum, reject heat di cooling tower. Lebih sedikit unit operation berarti biaya lebih rendah per kW dan reliability tinggi — itu kenapa dry steam, meski langka di alam (Larderello, The Geysers, Kamojang, Darajat), dihargai.

**Satu komplikasi nyata dari dry-steam plant itu gas.** Steam geothermal bawa non-condensable gas — sebagian besar CO₂, dengan sedikit H₂S. Mereka gak condense di condenser, jadi kalau kamu biarin mereka ke-akumulasi mereka ngancurin vacuum yang power turbine-nya tergantung. Jadi dry-steam plant jalanin gas extraction kontinu (steam-jet ejector atau vacuum pump), yang itu beban *parasitic* — dia ngabisin power buat bikin power — dan beban itu tumbuh dengan gas fraction. H₂S terus biasanya butuh abatement sebelum dilepas.

**Exergy itu scorecard yang benar.** First-law (thermal) efficiency bikin semua plant geothermal keliatan jelek, karena heat source-nya suam-suam kuku menurut standar power-station. Kontribusi DiPippo itu nge-score plant by **exergy** (Second-Law) — *useful work potential* fluid relatif ke ambient dead state — jadi pertanyaannya jadi "dari kerja yang secara termodinamik tersedia di steam ini, berapa banyak yang plant beneran tangkep?" Dengan ukuran itu dry-steam unit jalan sangat bagus (kira-kira setengah exergy wellhead — di kisaran 45–55%), dan cycle berbeda jadi comparable di pijakan bersama yang physically honest.`
      }
    },

    // ─────────────── 3. formalization ───────────────
    {
      id: 'formalization',
      heading: { en: 'The cycle equations', id: 'Persamaan cycle' },
      body: {
        en: `**Dry-steam turbine work.** Steam enters the turbine at state 1 (enthalpy $h_1$, entropy $s_1$, from the wellhead/throttle condition) and expands to the condenser pressure. The ideal (isentropic) exit has $s_{2s} = s_1$; reading the steam tables at the condenser pressure gives the exit quality $x_{2s} = (s_1 - s_f)/s_{fg}$ and enthalpy $h_{2s} = h_f + x_{2s}\\,h_{fg}$. The actual specific work is the isentropic drop scaled by the turbine efficiency:

$$w = h_1 - h_2 = \\eta_t\\,(h_1 - h_{2s})$$

Gross power is $W_{gt} = \\dot m\\,w$, and net power subtracts the parasitic loads (above all gas extraction): $W_{net} = W_{gt} - W_{parasitic}$. A practical sizing metric ties steam supply to output — the **specific steam consumption**:

$$\\mathrm{SSC} = \\frac{\\dot m}{W_{net}} \\quad (\\text{typically } \\sim 6.5\\text{–}8\\ \\text{kg/kWh for dry steam})$$

The condenser is held under vacuum (e.g. ~0.10 bara) because a lower exhaust pressure means a larger $h_1 - h_{2s}$ and thus more work — which is exactly why continuous non-condensable-gas removal matters: gas accumulation would raise the back-pressure and steal that work.

**Flash fraction (liquid resources, for contrast).** A liquid-dominated geofluid at enthalpy $h_1$ throttled isenthalpically to a separator pressure $p_{sep}$ boils a fraction equal to its quality there:

$$x = \\frac{h_1 - h_f}{h_{fg}}\\bigg|_{p_{sep}}$$

so $x\\,\\dot m$ goes to the turbine as steam and $(1-x)\\,\\dot m$ is reinjected as brine. This flash machinery is the liquid/two-phase case, kept separate from the dry-steam path: a dry-steam reservoir arrives at $x \\approx 1$ and skips it entirely — there is no separator.

**Exergy / utilization efficiency.** The useful work potential of a stream relative to the ambient dead state $(T_0, p_0)$ is its specific exergy:

$$e = (h - h_0) - T_0\\,(s - s_0)$$

and the **utilization (second-law) efficiency** is the net work captured divided by the exergy supplied:

$$\\eta_u = \\frac{W_{net}}{\\dot m\\,e_{in}}$$

This — not first-law thermal efficiency — is the figure that lets dry-steam, flash and binary plants be compared honestly; dry-steam units typically reach $\\eta_u \\approx 45\\text{–}55\\%$ on wellhead exergy.`,
        id: `**Kerja turbine dry-steam.** Steam masuk turbine di state 1 (enthalpy $h_1$, entropy $s_1$, dari kondisi wellhead/throttle) dan expand ke condenser pressure. Exit ideal (isentropic) punya $s_{2s} = s_1$; baca steam table di condenser pressure ngasih exit quality $x_{2s} = (s_1 - s_f)/s_{fg}$ dan enthalpy $h_{2s} = h_f + x_{2s}\\,h_{fg}$. Specific work aktual itu isentropic drop di-scale sama turbine efficiency:

$$w = h_1 - h_2 = \\eta_t\\,(h_1 - h_{2s})$$

Gross power $W_{gt} = \\dot m\\,w$, dan net power ngurangin parasitic load (terutama gas extraction): $W_{net} = W_{gt} - W_{parasitic}$. Metrik sizing praktis ngiket steam supply ke output — **specific steam consumption**:

$$\\mathrm{SSC} = \\frac{\\dot m}{W_{net}} \\quad (\\text{biasanya } \\sim 6.5\\text{–}8\\ \\text{kg/kWh buat dry steam})$$

Condenser ditahan di bawah vacuum (misalnya ~0.10 bara) karena exhaust pressure lebih rendah berarti $h_1 - h_{2s}$ lebih besar dan jadi kerja lebih banyak — persis kenapa non-condensable-gas removal kontinu penting: akumulasi gas bakal naikin back-pressure dan nyolong kerja itu.

**Flash fraction (sumber daya liquid, buat kontras).** Geofluid liquid-dominated di enthalpy $h_1$ yang di-throttle isenthalpic ke separator pressure $p_{sep}$ ngedidihin fraksi sama dengan quality-nya di situ:

$$x = \\frac{h_1 - h_f}{h_{fg}}\\bigg|_{p_{sep}}$$

jadi $x\\,\\dot m$ ke turbine sebagai steam dan $(1-x)\\,\\dot m$ direinject sebagai brine. Mesin flash ini kasus liquid/two-phase, dijaga terpisah dari path dry-steam: reservoir dry-steam datang di $x \\approx 1$ dan ngelewatin ini sepenuhnya — gak ada separator.

**Exergy / utilization efficiency.** Useful work potential sebuah stream relatif ke ambient dead state $(T_0, p_0)$ itu specific exergy-nya:

$$e = (h - h_0) - T_0\\,(s - s_0)$$

dan **utilization (second-law) efficiency** itu net work yang ditangkep dibagi exergy yang disuplai:

$$\\eta_u = \\frac{W_{net}}{\\dot m\\,e_{in}}$$

Ini — bukan first-law thermal efficiency — yang ngebikin dry-steam, flash dan binary plant bisa dibandingin dengan jujur; dry-steam unit biasanya nyampe $\\eta_u \\approx 45\\text{–}55\\%$ di wellhead exergy.`
      }
    },

    // ─────────────── 4. worked-example ───────────────
    {
      id: 'worked-example',
      heading: { en: 'Worked example', id: 'Contoh kerjaan' },
      body: {
        en: `**Example 1 — a dry-steam turbine (dry-steam-safe; the Darajat-relevant case).** Take saturated dry steam delivered at $8$ bara expanding to a condenser at $0.10$ bara, with an isentropic turbine efficiency $\\eta_t = 0.82$. From the steam tables: inlet $h_1 \\approx 2769$ kJ/kg, $s_1 \\approx 6.663$ kJ/kg·K; at the condenser, $h_f = 191.8$, $h_{fg} = 2392.8$, $s_f = 0.649$, $s_{fg} = 7.501$.

Isentropic exit: $x_{2s} = (s_1 - s_f)/s_{fg} = (6.663 - 0.649)/7.501 \\approx 0.802$, so $h_{2s} = 191.8 + 0.802 \\times 2392.8 \\approx 2110$ kJ/kg. The isentropic drop is $h_1 - h_{2s} \\approx 659$ kJ/kg, and the actual work is

$$w = \\eta_t\\,(h_1 - h_{2s}) = 0.82 \\times 659 \\approx 540\\ \\text{kJ/kg}$$

For a steam supply of $\\dot m = 50$ kg/s (a few productive wells), gross power $W_{gt} = 50 \\times 540 \\approx 27$ MW, and the (gross) specific steam consumption is $\\mathrm{SSC} = 3600/540 \\approx 6.7$ kg/kWh — right in the dry-steam band. The net SSC is somewhat higher once the non-condensable-gas extraction parasitic load is subtracted. These numbers are illustrative and author-generated, not plant data; note also that the exhaust here is wet ($x_{2s}<1$), so in practice a Baumann-rule correction for moisture is folded into the single value $\\eta_t$. **⟦TODO-Az: replace the illustrative inlet conditions and NCG fraction with the real Darajat turbine-inlet/condenser values when authoring. Prep §9-E.⟧**

**Example 2 — a single flash, for contrast (LIQUID, not dry-steam).** A liquid-dominated geofluid at a reservoir temperature of $250\\,^{\\circ}$C (saturated-liquid enthalpy $h_1 \\approx 1086$ kJ/kg) is throttled to a separator at $8$ bara ($h_f = 720.9$, $h_{fg} = 2047.5$). The flash fraction is

$$x = \\frac{h_1 - h_f}{h_{fg}} = \\frac{1086 - 720.9}{2047.5} \\approx 0.18$$

so only ~18% of the produced mass becomes turbine steam and ~82% is reinjected as brine — the liquid exergy that a flash plant must discard. This is the liquid/two-phase contrast, deliberately separate from Example 1: a dry-steam reservoir, arriving already at $x \\approx 1$, needs none of this: no throttle-to-separator, no brine, no scaling-prone flash vessels. That is the concrete reason the dry-steam cycle (Example 1) is the simplest and typically among the lowest-cost per kW for an equivalent resource.`,
        id: `**Contoh 1 — turbine dry-steam (dry-steam-safe; kasus Darajat-relevant).** Ambil saturated dry steam yang di-deliver di $8$ bara expand ke condenser di $0.10$ bara, dengan isentropic turbine efficiency $\\eta_t = 0.82$. Dari steam table: inlet $h_1 \\approx 2769$ kJ/kg, $s_1 \\approx 6.663$ kJ/kg·K; di condenser, $h_f = 191.8$, $h_{fg} = 2392.8$, $s_f = 0.649$, $s_{fg} = 7.501$.

Isentropic exit: $x_{2s} = (s_1 - s_f)/s_{fg} = (6.663 - 0.649)/7.501 \\approx 0.802$, jadi $h_{2s} = 191.8 + 0.802 \\times 2392.8 \\approx 2110$ kJ/kg. Isentropic drop itu $h_1 - h_{2s} \\approx 659$ kJ/kg, dan kerja aktual

$$w = \\eta_t\\,(h_1 - h_{2s}) = 0.82 \\times 659 \\approx 540\\ \\text{kJ/kg}$$

Buat steam supply $\\dot m = 50$ kg/s (beberapa sumur produktif), gross power $W_{gt} = 50 \\times 540 \\approx 27$ MW, dan (gross) specific steam consumption $\\mathrm{SSC} = 3600/540 \\approx 6.7$ kg/kWh — persis di band dry-steam. Net SSC agak lebih tinggi begitu parasitic load gas extraction dikurangin. Angka-angka ini ilustratif dan author-generated, bukan data plant; catat juga exhaust-nya di sini wet ($x_{2s}<1$), jadi dalam praktik koreksi Baumann-rule buat moisture di-fold ke satu nilai $\\eta_t$. **⟦TODO-Az: ganti inlet condition ilustratif dan NCG fraction dengan nilai turbine-inlet/condenser Darajat nyata pas authoring. Prep §9-E.⟧**

**Contoh 2 — single flash, buat kontras (LIQUID, bukan dry-steam).** Geofluid liquid-dominated di suhu reservoir $250\\,^{\\circ}$C (saturated-liquid enthalpy $h_1 \\approx 1086$ kJ/kg) di-throttle ke separator di $8$ bara ($h_f = 720.9$, $h_{fg} = 2047.5$). Flash fraction-nya

$$x = \\frac{h_1 - h_f}{h_{fg}} = \\frac{1086 - 720.9}{2047.5} \\approx 0.18$$

jadi cuma ~18% massa yang diproduksi jadi turbine steam dan ~82% direinject sebagai brine — liquid exergy yang flash plant harus buang. Ini kontras liquid/two-phase, sengaja dipisah dari Contoh 1: reservoir dry-steam, datang udah di $x \\approx 1$, gak butuh ini: gak ada throttle-to-separator, gak ada brine, gak ada flash vessel rawan-scaling. Itu alasan konkret kenapa dry-steam cycle (Contoh 1) paling sederhana dan biasanya termasuk yang biaya per kW-nya paling rendah buat sumber daya ekuivalen.`
      }
    },

    // ─────────────── 5. applications ───────────────
    {
      id: 'applications',
      heading: { en: 'Applications by audience', id: 'Aplikasi per audience' },
      body: {
        en: `### For the advanced researcher

The frontier DiPippo points to is squeezing more work from the same resource: advanced **combined and hybrid cycles** (e.g. a flash topping cycle with a binary bottoming cycle on the separated brine), supercritical and EGS resources, and exergy-guided optimization of every component. Exergy analysis is the research tool — it localizes *where* the available work is being destroyed (across the throttle, the heat exchanger, the condenser) so design effort goes where it pays.

### For the plant / utilization engineer

This is the operational core: pick the cycle the resource dictates, then design and run it. For a dry-steam plant the recurring engineering levers are the condenser vacuum (deeper vacuum → more work, but more cooling and gas-extraction duty), the **non-condensable-gas system** (ejectors/pumps sized to the gas fraction — the parasitic load that most directly eats net power), moisture removal to protect the turbine, and H₂S abatement. The sizing arithmetic runs through specific steam consumption: SSC times the target MW gives the steam mass flow the field must sustain — which is exactly where the plant's demand meets the reservoir's deliverability. **⟦TODO-Az: confirm the Darajat NCG fraction and gas-extraction design, and the actual turbine-inlet/condenser conditions. Prep §9-C.⟧**

### For management / project planning

The book's case studies and its development survey make it a planning reference: which cycle a prospective field warrants, what plants of that type have achieved elsewhere, and the environmental obligations (emissions, H₂S, induced seismicity, land and water) that come with each. The supply side is the subsurface items in this catalog — the well deliverability ([Acuña 2008](item:acuna-2008)), the reservoir forecast ([Grant & Bixley 2011](item:grant-bixley-2011)), the simulator ([O'Sullivan-Pruess-Lippmann 2001](item:osullivan-pruess-lippmann-2001)) — and DiPippo is the demand side that turns the forecast steam into a megawatt number and an environmental footprint. **⟦TODO-Az: the Darajat 271 MWe capacity staging (55→95→121) and the PLN/Star-Energy ownership split are external operational facts — cite a Darajat primary source, not DiPippo, and resolve the AZ5 well count first. Prep §9-C, §9-D.⟧**`,
        id: `### Untuk advanced researcher

Frontier yang DiPippo tunjuk itu meres lebih banyak kerja dari sumber daya yang sama: **combined dan hybrid cycle** lanjutan (misalnya flash topping cycle dengan binary bottoming cycle di brine yang dipisah), sumber daya supercritical dan EGS, dan optimisasi exergy-guided tiap komponen. Exergy analysis itu alat risetnya — dia nge-lokasi *di mana* available work dihancurkan (across throttle, heat exchanger, condenser) jadi usaha desain pergi ke tempat yang bayar.

### Untuk plant / utilization engineer

Ini core operasional: pilih cycle yang sumber daya nentuin, terus desain dan jalanin. Buat dry-steam plant tuas rekayasa berulang itu condenser vacuum (vacuum lebih dalam → kerja lebih banyak, tapi cooling dan gas-extraction duty lebih banyak), **sistem non-condensable-gas** (ejector/pump di-size ke gas fraction — parasitic load yang paling langsung makan net power), moisture removal buat lindungi turbine, dan abatement H₂S. Aritmetika sizing jalan lewat specific steam consumption: SSC dikali target MW ngasih steam mass flow yang field harus sustain — persis di mana demand plant ketemu deliverability reservoir. **⟦TODO-Az: konfirmasi NCG fraction Darajat dan desain gas-extraction, dan kondisi turbine-inlet/condenser sebenarnya. Prep §9-C.⟧**

### Untuk manajemen / project planning

Case study buku dan development survey-nya bikin dia referensi planning: cycle mana yang field prospektif warrant, plant tipe itu udah capai apa di tempat lain, dan kewajiban environmental (emisi, H₂S, induced seismicity, land dan water) yang datang sama masing-masing. Sisi supply itu item subsurface di katalog ini — well deliverability ([Acuña 2008](item:acuna-2008)), reservoir forecast ([Grant & Bixley 2011](item:grant-bixley-2011)), simulator ([O'Sullivan-Pruess-Lippmann 2001](item:osullivan-pruess-lippmann-2001)) — dan DiPippo sisi demand yang ngubah forecast steam jadi angka megawatt dan environmental footprint. **⟦TODO-Az: capacity staging Darajat 271 MWe (55→95→121) dan ownership split PLN/Star-Energy itu fakta operasional eksternal — cite sumber primer Darajat, bukan DiPippo, dan resolve well count AZ5 dulu. Prep §9-C, §9-D.⟧**`
      }
    },

    // ─────────────── 6. practice ───────────────
    {
      id: 'practice',
      heading: { en: 'Practice', id: 'Latihan' },
      body: {
        en: `**1.** A dry-steam turbine takes steam with an isentropic enthalpy drop $h_1 - h_{2s} = 700$ kJ/kg. With $\\eta_t = 0.80$ and a steam supply of $40$ kg/s, find the actual specific work, the gross power, and the gross specific steam consumption.

<details><summary>Answer</summary>
Actual work $w = \\eta_t (h_1 - h_{2s}) = 0.80 \\times 700 = 560$ kJ/kg. Gross power $W_{gt} = \\dot m\\,w = 40 \\times 560 = 22{,}400$ kW $= 22.4$ MW. Gross SSC $= 3600 / w = 3600 / 560 \\approx 6.4$ kg/kWh (using SSC $= \\dot m / W = 40\\ \\text{kg/s} \\times 3600\\ \\text{s/h} / 22{,}400\\ \\text{kW}$ gives the same 6.4 kg/kWh). Net SSC would be higher once the gas-extraction parasitic load is subtracted from the 22.4 MW.
</details>

**2.** A liquid-dominated geofluid at saturated-liquid enthalpy $h_1 = 1000$ kJ/kg is flashed to a separator where $h_f = 700$ kJ/kg and $h_{fg} = 2050$ kJ/kg. What fraction flashes to steam, and what does that imply about the rest of the produced mass?

<details><summary>Answer</summary>
Flash fraction $x = (h_1 - h_f)/h_{fg} = (1000 - 700)/2050 = 300/2050 \\approx 0.146$, i.e. about 15% of the produced mass flashes to steam and goes to the turbine; the remaining ~85% stays liquid and is reinjected as brine. The implication is that a single-flash plant uses only a small fraction of the produced fluid for power and discards the (large) liquid exergy — which is why double/triple-flash and binary bottoming cycles exist (to recover more of it), and why a dry-steam reservoir, arriving at $x\\approx1$, is so much simpler: essentially all of the produced mass is usable steam.
</details>

**3.** First-law thermal efficiencies of geothermal plants look low (often 10–20%), yet DiPippo argues dry-steam plants are thermodynamically excellent. Resolve the apparent contradiction.

<details><summary>Answer</summary>
The two efficiencies answer different questions. First-law thermal efficiency compares net work to the total *heat* in the fluid relative to ambient, and that denominator is huge because geothermal fluid is lukewarm by power-station standards — so the ratio is small regardless of how good the plant is. Exergy (second-law / utilization) efficiency compares net work to the *available work* in the fluid — its exergy relative to the dead state — which is the work a perfect plant could extract. Dry-steam plants capture roughly half of that available work (η_u ≈ 45–55%), which is excellent for a thermal plant of this resource grade: they are not wasting much of what was thermodynamically extractable. The low first-law number reflects a lukewarm resource, not a poor plant; exergy is the figure that isolates plant performance from resource temperature and lets cycles be compared fairly.
</details>

**4.** A developer holds three prospects: (A) a vapour-dominated field delivering dry steam at ~240 °C; (B) a liquid-dominated field at ~230 °C; (C) a liquid resource at ~120 °C. Name the power cycle each calls for and the single biggest reason.

<details><summary>Answer</summary>
(A) Dry steam → a **dry-steam plant**: the reservoir delivers turbine-ready steam, so no separator or working fluid is needed — the simplest cycle and typically the lowest cost per kW (e.g. Larderello, The Geysers, Kamojang, Darajat). (B) Liquid-dominated, high-enthalpy → a **flash plant** (single, or double/triple to recover more): the hot liquid is throttled so a fraction boils, the steam is separated and sent to the turbine, and the brine is reinjected. (C) Lower-enthalpy liquid (~120 °C is too cool to flash usefully) → a **binary / ORC plant**: the geofluid stays liquid and transfers its heat through an exchanger to a secondary working fluid that boils at a lower temperature and drives the turbine. The unifying reason in every case is that the reservoir's thermodynamic state (phase and enthalpy) dictates the cycle — you match the plant to the resource, not the reverse.
</details>`,
        id: `**1.** Sebuah turbine dry-steam ngambil steam dengan isentropic enthalpy drop $h_1 - h_{2s} = 700$ kJ/kg. Dengan $\\eta_t = 0.80$ dan steam supply $40$ kg/s, cari actual specific work, gross power, dan gross specific steam consumption.

<details><summary>Jawaban</summary>
Actual work $w = \\eta_t (h_1 - h_{2s}) = 0.80 \\times 700 = 560$ kJ/kg. Gross power $W_{gt} = \\dot m\\,w = 40 \\times 560 = 22{,}400$ kW $= 22.4$ MW. Gross SSC $= 3600 / w = 3600 / 560 \\approx 6.4$ kg/kWh (pake SSC $= \\dot m / W = 40\\ \\text{kg/s} \\times 3600\\ \\text{s/h} / 22{,}400\\ \\text{kW}$ ngasih 6.4 kg/kWh yang sama). Net SSC bakal lebih tinggi begitu parasitic load gas-extraction dikurangin dari 22.4 MW.
</details>

**2.** Geofluid liquid-dominated di saturated-liquid enthalpy $h_1 = 1000$ kJ/kg di-flash ke separator di mana $h_f = 700$ kJ/kg dan $h_{fg} = 2050$ kJ/kg. Fraksi berapa yang flash jadi steam, dan apa implikasinya buat sisa massa yang diproduksi?

<details><summary>Jawaban</summary>
Flash fraction $x = (h_1 - h_f)/h_{fg} = (1000 - 700)/2050 = 300/2050 \\approx 0.146$, yaitu sekitar 15% massa yang diproduksi flash jadi steam dan ke turbine; sisa ~85% tetap liquid dan direinject sebagai brine. Implikasinya single-flash plant pake cuma fraksi kecil fluid yang diproduksi buat power dan buang liquid exergy yang (besar) — itu kenapa double/triple-flash dan binary bottoming cycle ada (buat recover lebih banyak), dan kenapa reservoir dry-steam, datang di $x\\approx1$, jauh lebih sederhana: pada dasarnya semua massa yang diproduksi itu steam yang usable.
</details>

**3.** First-law thermal efficiency plant geothermal keliatan rendah (sering 10–20%), tapi DiPippo berargumen dry-steam plant secara termodinamik excellent. Selesaikan kontradiksi yang keliatan ini.

<details><summary>Jawaban</summary>
Dua efficiency menjawab pertanyaan berbeda. First-law thermal efficiency ngebandingin net work ke total *heat* di fluid relatif ke ambient, dan denominator itu besar banget karena fluid geothermal suam-suam kuku menurut standar power-station — jadi rasionya kecil terlepas dari seberapa bagus plant-nya. Exergy (second-law / utilization) efficiency ngebandingin net work ke *available work* di fluid — exergy-nya relatif ke dead state — yang itu kerja yang plant sempurna bisa ekstrak. Dry-steam plant nangkep kira-kira setengah available work itu (η_u ≈ 45–55%), yang excellent buat thermal plant kelas sumber daya ini: mereka gak buang banyak dari yang secara termodinamik extractable. Angka first-law rendah mencerminkan sumber daya suam-suam kuku, bukan plant jelek; exergy itu figure yang ngisolasi performance plant dari suhu sumber daya dan ngebikin cycle bisa dibandingin dengan adil.
</details>

**4.** Seorang developer punya tiga prospect: (A) field vapour-dominated yang deliver dry steam di ~240 °C; (B) field liquid-dominated di ~230 °C; (C) sumber daya liquid di ~120 °C. Sebutkan power cycle yang masing-masing minta dan satu alasan terbesar.

<details><summary>Jawaban</summary>
(A) Dry steam → **dry-steam plant**: reservoir deliver steam yang turbine-ready, jadi gak butuh separator atau working fluid — cycle paling sederhana dan biasanya biaya per kW terendah (misalnya Larderello, The Geysers, Kamojang, Darajat). (B) Liquid-dominated, high-enthalpy → **flash plant** (single, atau double/triple buat recover lebih banyak): hot liquid di-throttle biar sebagian mendidih, steam-nya dipisah dan dikirim ke turbine, dan brine-nya direinject. (C) Liquid lower-enthalpy (~120 °C terlalu dingin buat flash dengan berguna) → **binary / ORC plant**: geofluid tetap liquid dan transfer panasnya lewat exchanger ke secondary working fluid yang mendidih di suhu lebih rendah dan ngedrive turbine. Alasan pemersatu di tiap kasus bahwa thermodynamic state reservoir (fase dan enthalpy) nentuin cycle — kamu match plant ke sumber daya, bukan sebaliknya.
</details>`
      }
    },

    // ─────────────── 7. connections ───────────────
    {
      id: 'connections',
      heading: { en: 'Connections', id: 'Koneksi' },
      body: {
        en: `DiPippo is the catalog's **utilization track** — an independent root with no prerequisite, the demand/conversion side that consumes what the subsurface items supply.

- **Supplied by (well scale)**: [Acuña 2008](item:acuna-2008) — dry-steam well deliverability (C_WB, PI) sets the steam mass flow and wellhead conditions that are the turbine-inlet boundary condition here. The tightest dry-steam link: Acuña is the supply curve, this is the conversion.
- **Supplied by (reservoir scale)**: [Grant & Bixley 2011](item:grant-bixley-2011) — governs the sustainable mass/enthalpy the field can deliver over its life; DiPippo's own Ch. 4 overlaps but treats the reservoir as a boundary.
- **Supplied by (forecast)**: [O'Sullivan-Pruess-Lippmann 2001](item:osullivan-pruess-lippmann-2001) — the history-matched simulator certifies the deliverable steam/decline that determines sustained MW and capacity staging.
- **Set up by (resource class)**: [Cumming 2009](item:cumming-2009) — the conceptual model predicts the temperature/phase class that determines which cycle is viable (Darajat vapour-dominated → dry steam). Reciprocally, Cumming's own chapter appears in DiPippo's *edited* volume.
- **Foundation**: [Stober & Bucher 2021](item:stober-bucher-2021) — the survey textbook's high-enthalpy / power chapter is the survey-level version of this book's depth.`,
        id: `DiPippo itu **utilization track** katalog — root independen tanpa prerequisite, sisi demand/conversion yang ngonsumsi apa yang item subsurface suplai.

- **Disuplai oleh (skala sumur)**: [Acuña 2008](item:acuna-2008) — dry-steam well deliverability (C_WB, PI) nge-set steam mass flow dan kondisi wellhead yang jadi turbine-inlet boundary condition di sini. Link dry-steam paling erat: Acuña itu supply curve, ini conversion-nya.
- **Disuplai oleh (skala reservoir)**: [Grant & Bixley 2011](item:grant-bixley-2011) — nge-govern mass/enthalpy sustainable yang field bisa deliver sepanjang umurnya; Ch. 4 DiPippo sendiri overlap tapi treat reservoir sebagai boundary.
- **Disuplai oleh (forecast)**: [O'Sullivan-Pruess-Lippmann 2001](item:osullivan-pruess-lippmann-2001) — simulator history-matched nge-certify deliverable steam/decline yang nentuin sustained MW dan capacity staging.
- **Disiapin oleh (resource class)**: [Cumming 2009](item:cumming-2009) — conceptual model memprediksi kelas temperature/fase yang nentuin cycle mana yang viable (Darajat vapour-dominated → dry steam). Resiprokal, chapter Cumming sendiri muncul di *edited* volume DiPippo.
- **Fondasi**: [Stober & Bucher 2021](item:stober-bucher-2021) — chapter high-enthalpy / power textbook survey itu versi level-survey dari kedalaman buku ini.`
      }
    },

    // ─────────────── 8. sources ───────────────
    {
      id: 'sources',
      heading: { en: 'Sources', id: 'Sumber' },
      body: {
        en: `- **DiPippo, R.** (2016). *Geothermal Power Plants: Principles, Applications, Case Studies and Environmental Impact*, 4th ed. Butterworth-Heinemann / Elsevier. A standard reference for geothermal energy conversion (earlier editions 2005, 2008, 2012). **(This item.)**
- **DiPippo, R.** (ed.) (2016). *Geothermal Power Generation: Developments and Innovation*. Woodhead Publishing / Elsevier. The companion edited volume of specialist chapters (including Cumming's on geophysics and conceptual models).
- **DiPippo, R.** (2004). "Second Law assessment of binary plants generating power from low-temperature geothermal fluids." *Geothermics*, 33(5), 565-586. A representative exergy-analysis paper applying the book's method.`,
        id: `- **DiPippo, R.** (2016). *Geothermal Power Plants: Principles, Applications, Case Studies and Environmental Impact*, 4th ed. Butterworth-Heinemann / Elsevier. Salah satu referensi standar buat geothermal energy conversion (edisi sebelumnya 2005, 2008, 2012). **(Item ini.)**
- **DiPippo, R.** (ed.) (2016). *Geothermal Power Generation: Developments and Innovation*. Woodhead Publishing / Elsevier. Edited volume companion dari chapter spesialis (termasuk Cumming tentang geofisika dan conceptual model).
- **DiPippo, R.** (2004). "Second Law assessment of binary plants generating power from low-temperature geothermal fluids." *Geothermics*, 33(5), 565-586. Paper exergy-analysis representatif yang nerapin metode buku.`
      }
    },
  ],

  audio: { enabled: true },

  selfTest: [
    {
      sectionId: 'intuition',
      question: {
        en: 'DiPippo organizes geothermal power plants by cycle type (dry-steam, flash, binary). What single property of the resource determines which cycle a field calls for, and why is dry steam the simplest?',
        id: 'DiPippo ngatur plant geothermal by tipe cycle (dry-steam, flash, binary). Properti tunggal apa dari sumber daya yang nentuin cycle mana yang field minta, dan kenapa dry steam paling sederhana?'
      },
      prompt: { en: 'Before continuing, try answering:', id: 'Sebelum lanjut, coba jawab:' },
      answer: {
        en: 'The reservoir fluid\'s thermodynamic state — essentially its phase and enthalpy — determines the cycle. A vapour-dominated reservoir delivers dry steam (quality ≈ 1) and feeds a dry-steam plant; a liquid-dominated high-enthalpy reservoir feeds a flash plant (throttle so a fraction boils, separate the steam); a lower-enthalpy liquid resource feeds a binary/ORC plant (transfer heat to a secondary working fluid). Dry steam is the simplest because the reservoir hands the plant turbine-ready steam: there is no separator, no brine handling, no scaling-prone flash vessels, and no secondary working fluid or heat exchanger. The plant reduces to gathering lines → moisture removal → turbine → condenser → cooling tower, plus gas extraction. Fewest unit operations means lowest cost per kW and high reliability — which is why dry-steam plants were the first geothermal power technology and remain prized, even though dry-steam reservoirs are rare in nature.',
        id: 'Thermodynamic state fluid reservoir — pada dasarnya fase dan enthalpy-nya — nentuin cycle. Reservoir vapour-dominated deliver dry steam (quality ≈ 1) dan ngasih makan dry-steam plant; reservoir liquid-dominated high-enthalpy ngasih makan flash plant (throttle biar sebagian mendidih, pisahin steam); sumber daya liquid lower-enthalpy ngasih makan binary/ORC plant (transfer panas ke secondary working fluid). Dry steam paling sederhana karena reservoir nyerahin plant steam yang turbine-ready: gak ada separator, gak ada brine handling, gak ada flash vessel rawan-scaling, dan gak ada secondary working fluid atau heat exchanger. Plant tereduksi jadi gathering line → moisture removal → turbine → condenser → cooling tower, plus gas extraction. Unit operation paling sedikit berarti biaya per kW paling rendah dan reliability tinggi — itu kenapa dry-steam plant jadi teknologi power geothermal pertama dan tetap dihargai, walaupun reservoir dry-steam langka di alam.'
      }
    },
    {
      sectionId: 'formalization',
      question: {
        en: 'In a dry-steam turbine calculation you set s_2s = s_1 to find the exit state. What does that step represent physically, and how does the actual exit enthalpy differ from h_2s?',
        id: 'Di perhitungan turbine dry-steam kamu nge-set s_2s = s_1 buat nemu exit state. Apa yang langkah itu wakilin secara fisik, dan gimana actual exit enthalpy beda dari h_2s?'
      },
      prompt: { en: 'Before continuing, try answering:', id: 'Sebelum lanjut, coba jawab:' },
      answer: {
        en: 'Setting s_2s = s_1 imposes an isentropic (reversible, adiabatic) expansion — the ideal, lossless turbine. It is the reference against which the real machine is measured: at the condenser pressure, constant entropy fixes the ideal exit quality x_2s = (s_1 − s_f)/s_fg and hence the ideal exit enthalpy h_2s = h_f + x_2s·h_fg, giving the maximum possible enthalpy drop h_1 − h_2s. The actual turbine is irreversible, so it captures only a fraction of that ideal drop: the real specific work is w = η_t(h_1 − h_2s) with isentropic efficiency η_t < 1, and the actual exit enthalpy is h_2 = h_1 − w = h_1 − η_t(h_1 − h_2s), which is higher than h_2s (the lost work shows up as extra enthalpy/entropy at exit).',
        id: 'Nge-set s_2s = s_1 maksain expansion isentropic (reversible, adiabatic) — turbine ideal tanpa-rugi. Itu referensi yang mesin nyata diukur terhadapnya: di condenser pressure, entropy konstan nge-fix ideal exit quality x_2s = (s_1 − s_f)/s_fg dan karena itu ideal exit enthalpy h_2s = h_f + x_2s·h_fg, ngasih enthalpy drop maksimum yang mungkin h_1 − h_2s. Turbine aktual irreversible, jadi dia nangkep cuma fraksi dari ideal drop itu: real specific work w = η_t(h_1 − h_2s) dengan isentropic efficiency η_t < 1, dan actual exit enthalpy h_2 = h_1 − w = h_1 − η_t(h_1 − h_2s), yang lebih tinggi dari h_2s (lost work muncul sebagai extra enthalpy/entropy di exit).'
      }
    },
    {
      sectionId: 'formalization',
      question: {
        en: 'Why does holding the condenser under a deep vacuum increase a dry-steam plant\'s power output, and what is the operational reason continuous non-condensable-gas removal is essential to keep that benefit?',
        id: 'Kenapa nahan condenser di bawah vacuum dalam naikin power output dry-steam plant, dan apa alasan operasional non-condensable-gas removal kontinu esensial buat njaga benefit itu?'
      },
      prompt: { en: 'Before continuing, try answering:', id: 'Sebelum lanjut, coba jawab:' },
      answer: {
        en: 'The turbine work is the enthalpy drop from inlet to exhaust, w = η_t(h_1 − h_2s), and h_2s is read at the condenser (exhaust) pressure. Lowering that pressure (a deeper vacuum) pushes the exhaust point further down the expansion, increasing h_1 − h_2s and therefore the work extracted per kg of steam — so deeper condenser vacuum directly raises power output (within material and moisture limits). The catch: geothermal steam carries non-condensable gases (mainly CO₂, some H₂S) that, unlike steam, do not condense in the condenser. If they are allowed to accumulate they raise the partial pressure in the condenser — i.e. they destroy the vacuum — which raises the back-pressure, shrinks h_1 − h_2s, and erodes the very power the vacuum was bought to gain. So continuous gas extraction (steam-jet ejectors / vacuum pumps) is essential to maintain the vacuum; it is itself a parasitic load that grows with the gas fraction, so net power is the gross turbine power minus that extraction duty.',
        id: 'Kerja turbine itu enthalpy drop dari inlet ke exhaust, w = η_t(h_1 − h_2s), dan h_2s dibaca di condenser (exhaust) pressure. Nurunin pressure itu (vacuum lebih dalam) ndorong exhaust point lebih jauh ke bawah expansion, naikin h_1 − h_2s dan karena itu kerja yang diekstrak per kg steam — jadi condenser vacuum lebih dalam langsung naikin power output (dalam batas material dan moisture). Tangkapannya: steam geothermal bawa non-condensable gas (terutama CO₂, sedikit H₂S) yang, gak kayak steam, gak condense di condenser. Kalau dibiarin ke-akumulasi mereka naikin partial pressure di condenser — yaitu ngancurin vacuum — yang naikin back-pressure, ngecilin h_1 − h_2s, dan ngikis power yang vacuum-nya dibeli buat dapet. Jadi gas extraction kontinu (steam-jet ejector / vacuum pump) esensial buat maintain vacuum; dia sendiri parasitic load yang tumbuh dengan gas fraction, jadi net power itu gross turbine power dikurang extraction duty itu.'
      }
    },
    {
      sectionId: 'applications',
      question: {
        en: 'Specific steam consumption (SSC) ties a dry-steam plant to its reservoir. Explain how SSC connects a target megawatt rating to the field\'s well deliverability, and which catalog item supplies that deliverability.',
        id: 'Specific steam consumption (SSC) ngiket dry-steam plant ke reservoir-nya. Jelasin gimana SSC ngehubungin target megawatt rating ke well deliverability field, dan item katalog mana yang nyuplai deliverability itu.'
      },
      prompt: { en: 'Before continuing, try answering:', id: 'Sebelum lanjut, coba jawab:' },
      answer: {
        en: 'SSC = ṁ / W_net is the steam mass flow needed per unit of net power (~6.5–8 kg/kWh for dry steam). Rearranged, the steam the field must sustain for a target plant rating is ṁ = SSC × W_net: a 27 MW unit at ~6.7 kg/kWh needs on the order of 27,000 kW × 6.7 kg/kWh ÷ 3600 s/h ≈ 50 kg/s of steam delivered continuously. That required mass flow is exactly the demand the reservoir must meet — and the supply is the sum of the individual wells\' deliverability curves. The catalog item that supplies that is Acuña 2008: the dry-steam deliverability framework (C_WB and PI) gives how much steam each well delivers at a given wellhead pressure, and the aggregate of those curves over the producing wells is the field steam supply that the plant\'s SSC-derived demand draws on. So SSC is the hinge between the conversion side (DiPippo) and the supply side (Acuña): the plant\'s MW rating sets the steam demand, well deliverability sets the supply, and make-up drilling is needed when the declining supply can no longer meet the SSC-implied demand.',
        id: 'SSC = ṁ / W_net itu steam mass flow yang dibutuhin per unit net power (~6.5–8 kg/kWh buat dry steam). Disusun ulang, steam yang field harus sustain buat target plant rating itu ṁ = SSC × W_net: unit 27 MW di ~6.7 kg/kWh butuh sekitar 27.000 kW × 6.7 kg/kWh ÷ 3600 s/h ≈ 50 kg/s steam yang di-deliver kontinu. Mass flow yang dibutuhin itu persis demand yang reservoir harus penuhi — dan supply-nya itu jumlah kurva deliverability sumur-sumur individual. Item katalog yang nyuplai itu Acuña 2008: framework deliverability dry-steam (C_WB dan PI) ngasih berapa banyak steam tiap sumur deliver di wellhead pressure tertentu, dan agregat kurva itu across producing well itu field steam supply yang demand SSC-derived plant narik darinya. Jadi SSC itu engsel antara sisi conversion (DiPippo) dan sisi supply (Acuña): MW rating plant nge-set steam demand, well deliverability nge-set supply, dan make-up drilling dibutuhin pas supply yang decline gak bisa lagi penuhi demand yang di-imply SSC.'
      }
    },
  ],
};
