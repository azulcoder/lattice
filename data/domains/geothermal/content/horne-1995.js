// ─────────────────────────────────────────────────────────────────────────
// ⚠ DRAFT — AWAITING AZ DOMAIN REVIEW (option (b): "I draft, you correct").
// Geothermal content is Az-authored (Reservoir & Production Engineer, 6 yrs
// Star Energy Geothermal Darajat — dry-steam). Schema-valid + renderable,
// NOT finalized. Domain claims flagged **⟦TODO-Az: …⟧**.
// Full prep: notes/horne-1995-research-prep-2026-06-06.md
//
// OPEN TODO-Az ITEMS (prep §4):
//   A. HEADLINE: confirm the DRY-STEAM (Darajat) PTA framing — compressible /
//      pressure-squared (pseudo-pressure) flow, condensation (not flashing)
//      near the well, and Acuña deliverability (not the liquid PI). The module
//      teaches the standard (liquid/two-phase) PTA and flags the dry-steam
//      adaptation as the teaching point — verify it is framed right, not wrong.
//   B. Two-phase Horner interpretation: verify the exact single-/two-phase
//      mobility definitions and which straight-line segment gives formation kh.
//   C. Field-unit constants in the kh / skin formulas: I use consistent SI /
//      dimensionless forms; field forms (mD·ft, psi, STB/d, hr) carry numeric
//      constants — verify before teaching any number.
//   D. Worked-example numbers are ILLUSTRATIVE placeholders — swap for a real
//      Darajat buildup if desired.
//   E. Injection-test (cold-water) temperature correction for Darajat reinjectors.
//   F. Seed cards DEFERRED until Az signs off (card-coverage exempt: geothermal
//      domain + DRAFT marker).
// ─────────────────────────────────────────────────────────────────────────

export const CONTENT = {
  itemId: 'horne-1995',
  estimatedReadMinutes: 38,

  author: {
    fullName: { en: 'Roland N. Horne', id: 'Roland N. Horne' },
    affiliation: {
      en: 'Thomas Davies Barrow Professor of Earth Sciences, Stanford University; head of the Stanford Geothermal Program. A leading authority on well-test analysis spanning petroleum and geothermal reservoirs.',
      id: 'Thomas Davies Barrow Professor of Earth Sciences, Stanford University; kepala Stanford Geothermal Program. Otoritas terkemuka di well-test analysis yang ngerentang petroleum dan reservoir geothermal.'
    },
    tagline: {
      en: 'The standard modern guide to reading a reservoir from its pressure response — perturb the well, record p(t), and invert for permeability, skin, and boundaries. Written by the head of the Stanford Geothermal Program, so the bridge from petroleum PTA to geothermal is built in.',
      id: 'Panduan modern standar buat membaca reservoir dari pressure response-nya — ganggu sumur, rekam p(t), dan inversi buat permeability, skin, dan boundary. Ditulis kepala Stanford Geothermal Program, jadi jembatan dari PTA petroleum ke geothermal udah ada.'
    },
    bio: {
      en: `Roland Horne is one of the most influential figures in well-test analysis. His book *Modern Well Test Analysis: A Computer-Aided Approach* (1990; 2nd ed. 1995) helped move the field from hand-drawn semilog straight lines to computer-aided, derivative-based interpretation, and it became a standard reference for a generation of reservoir engineers. As head of the **Stanford Geothermal Program** he sits squarely at the intersection this module needs: the pressure-transient mathematics is shared between petroleum and geothermal, while the *fluid* — high-temperature water that can flash to steam, in fractured, feedzone-dominated rock — is distinctly geothermal.

⟦TODO-Az: bio/affiliation are from public record; confirm titles/edition before finalizing. The choice to anchor a *geothermal* PTA module on Horne (a methods text) rather than purely on Grant-Bixley is a drafting decision — tell me if you'd rather re-anchor on Grant-Bixley's well-test chapters or a Stanford Geothermal Workshop paper.⟧`,
      id: `Roland Horne salah satu figur paling berpengaruh di well-test analysis. Bukunya *Modern Well Test Analysis: A Computer-Aided Approach* (1990; ed. ke-2 1995) ngebantu mindahin field dari semilog straight line gambar-tangan ke interpretasi computer-aided berbasis-derivative, dan jadi referensi standar buat satu generasi reservoir engineer. Sebagai kepala **Stanford Geothermal Program** dia duduk persis di persimpangan yang module ini butuh: matematika pressure-transient-nya dibagi antara petroleum dan geothermal, sementara *fluida*-nya — air bersuhu-tinggi yang bisa flash jadi steam, di batuan fractured yang didominasi-feedzone — itu khas geothermal.

⟦TODO-Az: bio/affiliation dari public record; konfirmasi gelar/edisi sebelum finalisasi. Pilihan nge-anchor module PTA *geothermal* ke Horne (teks metode) bukan murni ke Grant-Bixley itu keputusan drafting — bilang kalau kamu lebih mau re-anchor ke bab well-test Grant-Bixley atau paper Stanford Geothermal Workshop.⟧`
    },
    focus: {
      en: `A pressure-transient well test is the reservoir engineer's stethoscope: change the flow at the well by a known amount (start producing, shut it in, or inject), record how the pressure responds over time, and invert that response for what you cannot see directly — the **permeability-thickness (kh)** of the formation, the **skin** (near-well damage or stimulation), the **reservoir pressure**, and the presence of **boundaries or fractures**. The mathematics is the line-source (Theis) solution, read on a semilog plot (the slope gives kh) and, in modern practice, on the **Bourdet pressure-derivative** log-log plot (whose shape diagnoses the flow regime). ⟦TODO-Az: in a *geothermal* reservoir the same machinery applies but the fluid breaks the textbook assumptions — high temperature makes viscosity and compressibility move; pressure drawdown can flash water to steam, creating a two-phase near-well zone that shows up as a second straight line on the Horner plot; production is often from discrete fractures/feedzones, not homogeneous rock; and for a vapour-dominated DRY-STEAM field like Darajat the flow is compressible (pseudo-pressure) and deliverability follows the Acuña relation, not a liquid productivity index. This module teaches the standard method and flags those geothermal adaptations for your sign-off.⟧`,
      id: `Pressure-transient well test itu stetoskop-nya reservoir engineer: ubah flow di sumur sebesar jumlah yang diketahui (mulai produksi, shut-in, atau injeksi), rekam gimana pressure respond over time, dan inversi response itu buat apa yang gak bisa kamu liat langsung — **permeability-thickness (kh)** formasi, **skin** (damage atau stimulasi near-well), **reservoir pressure**, dan keberadaan **boundary atau fracture**. Matematikanya solusi line-source (Theis), dibaca di plot semilog (slope-nya ngasih kh) dan, di praktik modern, di plot log-log **Bourdet pressure-derivative** (yang bentuknya ngediagnosis flow regime). ⟦TODO-Az: di reservoir *geothermal* mesin yang sama berlaku tapi fluidanya ngelanggar asumsi textbook — suhu tinggi bikin viscosity dan compressibility gerak; pressure drawdown bisa flash air jadi steam, ngebikin two-phase near-well zone yang muncul sebagai straight line kedua di Horner plot; produksi sering dari fracture/feedzone diskrit, bukan batuan homogen; dan buat field DRY-STEAM vapour-dominated kayak Darajat flow-nya compressible (pseudo-pressure) dan deliverability ngikut relasi Acuña, bukan liquid productivity index. Module ini ngajarin metode standar dan ngeflag adaptasi geothermal itu buat sign-off kamu.⟧`
    },
    intellectualLineage: {
      en: `The mathematical root is the **line-source / Theis (1935)** solution for radial flow to a well — itself the groundwater analogue of heat conduction — giving the exponential-integral pressure response and its semilog approximation. **Horner (1951)** added the buildup analysis (the Horner plot and extrapolated p*). **van Everdingen and Hurst (1949)** formalized wellbore storage and skin. The modern leap is the **pressure derivative of Bourdet (1983)**, which turned ambiguous semilog fitting into regime diagnosis on a log-log plot — the core of Horne's "computer-aided" approach. ⟦TODO-Az: the geothermal branch is where domain expertise takes over — two-phase well-test theory (Grant; Garg; Pruess and the TOUGH2 lineage already in this catalog via O'Sullivan-Pruess-Lippmann), fractured/feedzone and fractal reservoir models, and the dry-steam deliverability of Acuña. Confirm which of these you want emphasized as the geothermal lineage.⟧`,
      id: `Akar matematisnya solusi **line-source / Theis (1935)** buat radial flow ke sumur — yang itu sendiri analog groundwater dari konduksi panas — ngasih pressure response exponential-integral dan aproksimasi semilog-nya. **Horner (1951)** nambah analisis buildup (Horner plot dan p* yang diekstrapolasi). **van Everdingen dan Hurst (1949)** ngeformalin wellbore storage dan skin. Lompatan modern-nya itu **pressure derivative Bourdet (1983)**, yang ngubah fitting semilog yang ambigu jadi diagnosis regime di plot log-log — inti dari pendekatan "computer-aided" Horne. ⟦TODO-Az: cabang geothermal-nya di mana keahlian domain ngambil alih — teori well-test two-phase (Grant; Garg; Pruess dan garis keturunan TOUGH2 yang udah di katalog ini lewat O'Sullivan-Pruess-Lippmann), model reservoir fractured/feedzone dan fractal, dan deliverability dry-steam Acuña. Konfirmasi yang mana yang kamu mau ditekanin sebagai lineage geothermal.⟧`
    },
    keyCollaborators: {
      en: `Horne's milieu is the Stanford Geothermal Program and the well-test community. The methodological touchstones invoked here are **Dominique Bourdet** (the pressure derivative), **Henry Theis** and **D.R. Horner** (the classical solutions), and **Alain Gringarten** (type curves). ⟦TODO-Az: on the geothermal side the relevant names are **Sabodh Garg** and **Karsten Pruess** (two-phase well-test and simulation), **Malcolm Grant** (Grant-Bixley, already in the catalog), and the Stanford workshop community; confirm/adjust before finalizing.⟧`,
      id: `Lingkungan Horne itu Stanford Geothermal Program dan komunitas well-test. Tonggak metodologis yang dipanggil di sini itu **Dominique Bourdet** (pressure derivative), **Henry Theis** dan **D.R. Horner** (solusi klasik), dan **Alain Gringarten** (type curve). ⟦TODO-Az: di sisi geothermal nama yang relevan itu **Sabodh Garg** dan **Karsten Pruess** (well-test dan simulasi two-phase), **Malcolm Grant** (Grant-Bixley, udah di katalog), dan komunitas workshop Stanford; konfirmasi/sesuaikan sebelum finalisasi.⟧`
    },
    legacy: {
      en: `Pressure-transient analysis is how a reservoir engineer turns a pressure gauge into a map of the rock: a single well test yields kh, skin, the reservoir pressure, and a read on nearby faults or fractures, and repeated tests track how those evolve as a field is produced and reinjected. Horne's text is durable because it standardized the *modern* workflow — log-log diagnosis with the pressure derivative first to identify the flow regime, then the appropriate model and semilog/Horner analysis to quantify it — and because, written from Stanford, it kept geothermal in view. ⟦TODO-Az: the lasting value FOR DARAJAT is the part this draft cannot finalize without you: how the standard liquid/two-phase PTA must be adapted for a vapour-dominated dry-steam reservoir (compressible flow, condensation near the well, Acuña deliverability, fracture/feedzone dominance, and reinjection/injection-test thermal effects). Treat the module as the verified *method* plus a flagged *adaptation checklist* for your domain — not a finished geothermal teaching unit.⟧`,
      id: `Pressure-transient analysis itu gimana reservoir engineer ngubah pressure gauge jadi peta batuan: satu well test ngasih kh, skin, reservoir pressure, dan bacaan fault atau fracture di dekatnya, dan tes berulang ngelacak gimana itu berkembang seiring field diproduksi dan direinjeksi. Teks Horne awet karena dia nge-standarin workflow *modern* — diagnosis log-log dengan pressure derivative dulu buat ngidentifikasi flow regime, terus model yang sesuai dan analisis semilog/Horner buat ngukurnya — dan karena, ditulis dari Stanford, dia ngejaga geothermal tetap keliatan. ⟦TODO-Az: nilai abadi BUAT DARAJAT itu bagian yang draft ini gak bisa finalin tanpa kamu: gimana PTA liquid/two-phase standar harus diadaptasi buat reservoir dry-steam vapour-dominated (compressible flow, kondensasi near-well, deliverability Acuña, dominasi fracture/feedzone, dan efek termal reinjeksi/injection-test). Perlakukan module sebagai *metode* yang terverifikasi plus *checklist adaptasi* yang di-flag buat domain kamu — bukan unit pengajaran geothermal yang jadi.⟧`
    },
    keyWorks: [
      { year: 1995, title: 'Modern Well Test Analysis: A Computer-Aided Approach, 2nd ed. (this item)', venue: 'Petroway Inc.' },
      { year: 1951, title: 'Pressure Build-Up in Wells (Horner) — the Horner plot', venue: 'World Petroleum Congress' },
      { year: 1935, title: 'The Relation Between the Lowering of the Piezometric Surface… (Theis) — the line-source solution', venue: 'Trans. AGU' },
      { year: 1983, title: 'A New Set of Type Curves Simplifies Well Test Analysis (Bourdet et al.) — the pressure derivative', venue: 'World Oil' },
      { year: 2011, title: 'Geothermal Reservoir Engineering (Grant & Bixley) — the geothermal well-test counterpart (in this catalog)', venue: 'Elsevier' },
    ],
  },

  sections: [
    // ─────────────── 1. motivation ───────────────
    {
      id: 'motivation',
      heading: { en: 'Why this matters', id: 'Kenapa ini penting' },
      body: {
        en: `You cannot see a reservoir. You can see a pressure gauge. A **pressure-transient well test** is how the second tells you about the first: impose a known change in flow at the well — start producing at a fixed rate, shut a flowing well in, or inject — and record how the downhole pressure responds over the following minutes to days. That transient response is a fingerprint of the rock and fluid around the well, and inverting it yields the quantities a reservoir engineer actually needs:

- **Permeability-thickness $kh$** — how easily the formation transmits fluid, the single most important deliverability parameter.
- **Skin $s$** — the extra (or reduced) pressure drop right at the wellbore from damage (drilling mud, scale) or stimulation (fracturing, acidizing).
- **Reservoir pressure** — the undisturbed pressure the well is drawing against.
- **Boundaries and heterogeneity** — nearby faults, the edge of the permeable zone, fractures, or a second flowing layer.

For a producing field this is not a one-time measurement. Tests repeated over a field's life track how pressure is drawing down, whether skin is building (scaling) or a stimulation worked, and how reinjection is supporting pressure — the feedback an operator steers by.

⟦TODO-Az: this is where geothermal departs from the petroleum textbook, and the departures are exactly your territory. (1) High temperature: water's viscosity and compressibility change strongly with T, so the constants in the equations are not the room-temperature petroleum ones. (2) Flashing: drop the pressure enough and water boils to steam near the well, creating a two-phase zone — on a Horner plot this often appears as TWO straight-line segments (a near-well two-phase mobility and a far-field single-phase one). (3) Fractures/feedzones: geothermal wells frequently produce from a few discrete feedzones, not a uniform porous blanket, so the homogeneous-radial model is an idealization. (4) DRY STEAM (Darajat): a vapour-dominated reservoir is compressible-gas flow (analyzed in pressure-squared / pseudo-pressure), the near-well process is condensation rather than flashing, and well output follows the Acuña deliverability relation, not a liquid productivity index. Please confirm/correct this framing — the rest of the module builds on it.⟧`,
        id: `Kamu gak bisa liat reservoir. Kamu bisa liat pressure gauge. **Pressure-transient well test** itu gimana yang kedua ngasih tau kamu soal yang pertama: kenain perubahan flow yang diketahui di sumur — mulai produksi di rate tetap, shut-in sumur yang lagi ngalir, atau injeksi — dan rekam gimana downhole pressure respond selama menit sampai hari berikutnya. Transient response itu sidik jari batuan dan fluida di sekitar sumur, dan nginversinya ngasih kuantitas yang reservoir engineer beneran butuh:

- **Permeability-thickness $kh$** — seberapa gampang formasi nransmisi fluida, parameter deliverability paling penting.
- **Skin $s$** — pressure drop ekstra (atau berkurang) persis di wellbore dari damage (lumpur bor, scale) atau stimulasi (fracturing, acidizing).
- **Reservoir pressure** — pressure tak-terganggu yang sumur tarik lawan.
- **Boundary dan heterogenitas** — fault di dekatnya, tepi zona permeabel, fracture, atau lapisan kedua yang ngalir.

Buat field yang berproduksi ini bukan pengukuran sekali. Tes yang diulang sepanjang umur field ngelacak gimana pressure lagi drawdown, apakah skin lagi naik (scaling) atau stimulasi berhasil, dan gimana reinjeksi nyokong pressure — umpan balik yang operator pakai buat nyetir.

⟦TODO-Az: ini di mana geothermal berangkat dari textbook petroleum, dan keberangkatannya persis teritori kamu. (1) Suhu tinggi: viscosity dan compressibility air berubah kuat sama T, jadi konstanta di persamaan bukan yang petroleum suhu-ruang. (2) Flashing: turunin pressure cukup dan air mendidih jadi steam near-well, ngebikin two-phase zone — di Horner plot ini sering muncul sebagai DUA segmen straight-line (mobility two-phase near-well dan single-phase far-field). (3) Fracture/feedzone: sumur geothermal sering produksi dari beberapa feedzone diskrit, bukan selimut porous seragam, jadi model homogeneous-radial itu idealisasi. (4) DRY STEAM (Darajat): reservoir vapour-dominated itu compressible-gas flow (dianalisis di pressure-squared / pseudo-pressure), proses near-well-nya kondensasi bukan flashing, dan output sumur ngikut relasi deliverability Acuña, bukan liquid productivity index. Tolong konfirmasi/koreksi framing ini — sisa module ini ngebangun di atasnya.⟧`
      }
    },

    // ─────────────── 2. intuition ───────────────
    {
      id: 'intuition',
      heading: { en: 'Intuition', id: 'Intuisi' },
      body: {
        en: `Drop a stone in a pond and the ripple's shape and speed tell you about the pond. A well test is the same idea in reverse: you make a controlled "splash" in the pressure field (a step change in flow) and read the rock from how the pressure wave spreads.

When you start producing, a pressure drawdown propagates outward from the well; when you shut in, the pressure builds back up. Early on, the response is dominated by stuff right at the well — the **wellbore storage** (the well itself is a tank of fluid that must decompress before the formation "feels" the rate change) and the **skin** (a thin damaged or stimulated shell). A little later, the pressure wave reaches undisturbed formation and settles into **infinite-acting radial flow** — the clean regime where the physics is simplest. Later still, the wave reaches a **boundary** (a fault, the reservoir edge) and the response bends again.

The single most useful fact: in radial flow, pressure changes **linearly with the logarithm of time**. Plot pressure against log-time and you get a straight line whose *slope* is inversely proportional to $kh$ — a steep line means tight rock, a flat line means a highly permeable (good) well. That one slope is the headline number of a well test.

Reading which regime you are in is the art, and the modern tool for it is the **pressure derivative** (Bourdet): plot the rate of change of pressure with log-time on a log-log chart. Wellbore storage shows as a unit-slope rise; radial flow shows as a **flat plateau** (its height pins down $kh$); a sealing fault doubles the plateau; a fracture or boundary makes its own signature. The derivative turns "squint at the semilog plot and hope" into a diagnosis.

⟦TODO-Az: the geothermal intuition adds a wrinkle worth its own emphasis — the pressure wave can change the FLUID as it passes. Near a producing geothermal well the pressure can fall below the boiling point, so water flashes to steam and the near-well region becomes two-phase, with very different compressibility and mobility. On the diagnostic plots this is why you can see a near-well segment (two-phase) distinct from the far-field (single-phase liquid). For a dry-steam field the picture inverts again (the mobile phase is steam; condensation, not boiling, is the near-well process). Please confirm the framing before it becomes a teaching point.⟧`,
        id: `Jatuhin batu ke kolam dan bentuk serta kecepatan riak-nya ngasih tau kamu soal kolamnya. Well test itu ide yang sama kebalik: kamu bikin "cipratan" terkontrol di pressure field (step change di flow) dan baca batuan dari gimana gelombang pressure menyebar.

Pas kamu mulai produksi, pressure drawdown merambat keluar dari sumur; pas kamu shut-in, pressure naik balik. Awalnya, response-nya didominasi sama hal persis di sumur — **wellbore storage** (sumurnya sendiri itu tangki fluida yang harus dekompres sebelum formasi "ngerasa" perubahan rate) dan **skin** (cangkang tipis yang ter-damage atau ter-stimulasi). Sedikit kemudian, gelombang pressure nyampe formasi tak-terganggu dan settle ke **infinite-acting radial flow** — regime bersih di mana fisikanya paling simpel. Lebih lama lagi, gelombangnya nyampe **boundary** (fault, tepi reservoir) dan response-nya nekuk lagi.

Satu fakta paling berguna: di radial flow, pressure berubah **linear sama logaritma waktu**. Plot pressure lawan log-waktu dan kamu dapet straight line yang *slope*-nya berbanding terbalik sama $kh$ — garis curam berarti batuan ketat, garis datar berarti sumur permeable-tinggi (bagus). Satu slope itu angka headline dari well test.

Membaca kamu lagi di regime mana itu seni-nya, dan tool modern-nya itu **pressure derivative** (Bourdet): plot laju perubahan pressure sama log-waktu di chart log-log. Wellbore storage muncul sebagai kenaikan unit-slope; radial flow muncul sebagai **plateau datar** (tingginya ngepasin $kh$); sealing fault ngedobelin plateau-nya; fracture atau boundary bikin sidik jarinya sendiri. Derivative ngubah "ngeliat plot semilog sambil berharap" jadi diagnosis.

⟦TODO-Az: intuisi geothermal nambah lipatan yang layak penekanannya sendiri — gelombang pressure bisa ngubah FLUIDA pas dia lewat. Near sumur geothermal yang berproduksi pressure bisa jatuh di bawah titik didih, jadi air flash jadi steam dan region near-well jadi two-phase, dengan compressibility dan mobility yang sangat beda. Di plot diagnostik ini kenapa kamu bisa liat segmen near-well (two-phase) yang beda dari far-field (single-phase liquid). Buat field dry-steam gambarnya kebalik lagi (fase mobile-nya steam; kondensasi, bukan boiling, proses near-well-nya). Tolong konfirmasi framing-nya sebelum dia jadi teaching point.⟧`
      }
    },

    // ─────────────── 3. formalization ───────────────
    {
      id: 'formalization',
      heading: { en: 'The method, formalized', id: 'Metodenya, diformalkan' },
      body: {
        en: `**The diffusivity equation.** Radial flow of a slightly-compressible fluid to a well obeys a diffusion equation in pressure, with hydraulic diffusivity $\\eta = k/(\\phi\\mu c_t)$ ($k$ permeability, $\\phi$ porosity, $\\mu$ viscosity, $c_t$ total compressibility). The pressure "spreads" exactly like heat.

**Line-source (Theis) solution.** For a well producing at constant rate $q$ from an infinite, homogeneous reservoir, the drawdown is the exponential-integral solution; at the times a test samples it reduces to the **semilog approximation** — pressure linear in $\\ln t$. In consistent (SI) form the drawdown straight line has slope
$$m \\;\\propto\\; \\frac{q\\,\\mu}{k h}\\quad\\Longrightarrow\\quad kh \\;\\propto\\; \\frac{q\\,\\mu}{m}.$$
The slope is *the* measurement: a smaller slope ⇒ larger $kh$ ⇒ a more deliverable well. ⟦TODO-Az: I have written this proportionally on purpose — the field-unit forms (mD·ft, psi, STB/d, cp, hr) carry specific numeric constants (e.g. the 162.6 / 70.6 factors), and the geothermal SI forms differ again. Insert the exact constant you teach with.⟧

**Horner buildup.** Produce at rate $q$ for time $t_p$, then shut in and watch the pressure recover. Plot shut-in pressure against the **Horner time ratio** $(t_p+\\Delta t)/\\Delta t$ on a semilog axis; the late-time data fall on a straight line whose slope $m$ gives $kh$ exactly as above, and whose extrapolation to a Horner ratio of 1 estimates the **reservoir pressure $p^*$**.

**Skin.** The skin factor $s$ is a dimensionless near-well pressure drop; it is read from the offset between the measured early pressure and the extrapolated radial straight line (conventionally at $\\Delta t = 1$ hour). $s>0$ = damage (an extra pressure penalty); $s<0$ = stimulation (a fractured/acidized well that flows easier than ideal).

**Wellbore storage.** Immediately after a rate change the wellbore fluid itself expands or compresses, so the sand-face rate lags the surface rate. This dominates early time as a **unit-slope** line on the log-log plot and must be over before the radial straight line is valid.

**The pressure derivative (Bourdet).** Plot $t\\,\\mathrm{d}p/\\mathrm{d}t$ (the derivative with respect to $\\ln t$) against time on log-log. Flow regimes have signatures: wellbore storage = unit slope; **infinite-acting radial flow = a flat plateau** (its level fixes $kh$); a sealing fault doubles the plateau; closed boundaries, fractures, and dual-porosity systems each have their own shape. Diagnose the regime from the derivative *first*, then quantify with the matching model.

⟦TODO-Az: the geothermal formalization is where I most need your correction.
  1. **Two-phase near-well.** When drawdown flashes water to steam, the near-well zone is two-phase: the Horner plot can show two straight-line segments — a steeper near-well (two-phase mobility) and a far-field single-phase one — and the formation $kh$ is taken from the appropriate segment. Verify the exact mobility definitions and which segment is the formation property.
  2. **Compressible / dry-steam flow.** In a vapour-dominated DRY-STEAM reservoir (Darajat) the fluid is highly compressible, so analysis uses pressure-squared or a real-gas **pseudo-pressure** $m(p)$ rather than pressure directly; the diffusivity and the constants change accordingly.
  3. **Fractured / feedzone & fractal.** Production from discrete fractures gives non-integer ("fractal") flow dimensions and dual-porosity signatures rather than clean radial flow.
  4. **Injection / fall-off tests.** Cold-water injection (common in geothermal, and for Darajat reinjection) changes near-well viscosity and creates a moving thermal front, so injectivity is not simply the mirror of productivity — a temperature correction is needed.
All four are domain-judgment calls; the equations above are the verified, fluid-neutral backbone.⟧`,
        id: `**Persamaan diffusivity.** Radial flow fluida slightly-compressible ke sumur patuh ke persamaan difusi di pressure, dengan hydraulic diffusivity $\\eta = k/(\\phi\\mu c_t)$ ($k$ permeability, $\\phi$ porosity, $\\mu$ viscosity, $c_t$ total compressibility). Pressure "menyebar" persis kayak panas.

**Solusi line-source (Theis).** Buat sumur yang produksi di rate konstan $q$ dari reservoir infinite, homogen, drawdown-nya solusi exponential-integral; di waktu yang tes sampel dia tereduksi ke **aproksimasi semilog** — pressure linear di $\\ln t$. Dalam bentuk konsisten (SI) straight line drawdown punya slope
$$m \\;\\propto\\; \\frac{q\\,\\mu}{k h}\\quad\\Longrightarrow\\quad kh \\;\\propto\\; \\frac{q\\,\\mu}{m}.$$
Slope-nya *itu* pengukurannya: slope lebih kecil ⇒ $kh$ lebih besar ⇒ sumur lebih deliverable. ⟦TODO-Az: aku nulis ini proporsional dengan sengaja — bentuk field-unit (mD·ft, psi, STB/d, cp, hr) bawa konstanta numerik spesifik (misal faktor 162.6 / 70.6), dan bentuk SI geothermal beda lagi. Masukin konstanta persis yang kamu pakai ngajar.⟧

**Horner buildup.** Produksi di rate $q$ selama waktu $t_p$, terus shut-in dan liat pressure pulih. Plot shut-in pressure lawan **Horner time ratio** $(t_p+\\Delta t)/\\Delta t$ di sumbu semilog; data late-time jatuh di straight line yang slope $m$-nya ngasih $kh$ persis kayak di atas, dan yang ekstrapolasinya ke Horner ratio 1 ngestimasi **reservoir pressure $p^*$**.

**Skin.** Skin factor $s$ itu pressure drop near-well tanpa-dimensi; dia dibaca dari offset antara measured early pressure dan extrapolated radial straight line (konvensional di $\\Delta t = 1$ jam). $s>0$ = damage (penalti pressure ekstra); $s<0$ = stimulasi (sumur fractured/acidized yang ngalir lebih gampang dari ideal).

**Wellbore storage.** Langsung setelah perubahan rate fluida wellbore-nya sendiri ngembang atau kompres, jadi sand-face rate ketinggalan dari surface rate. Ini mendominasi early time sebagai garis **unit-slope** di plot log-log dan harus selesai sebelum radial straight line valid.

**Pressure derivative (Bourdet).** Plot $t\\,\\mathrm{d}p/\\mathrm{d}t$ (derivative terhadap $\\ln t$) lawan waktu di log-log. Flow regime punya sidik jari: wellbore storage = unit slope; **infinite-acting radial flow = plateau datar** (tingginya ngepasin $kh$); sealing fault ngedobelin plateau-nya; closed boundary, fracture, dan sistem dual-porosity masing-masing punya bentuknya sendiri. Diagnosis regime dari derivative *dulu*, terus kuantifikasi dengan model yang cocok.

⟦TODO-Az: formalisasi geothermal di mana aku paling butuh koreksi kamu.
  1. **Two-phase near-well.** Pas drawdown flash air jadi steam, zona near-well jadi two-phase: Horner plot bisa nunjukin dua segmen straight-line — near-well lebih curam (two-phase mobility) dan far-field single-phase — dan formasi $kh$ diambil dari segmen yang sesuai. Verifikasi definisi mobility persisnya dan segmen mana yang properti formasi.
  2. **Compressible / dry-steam flow.** Di reservoir DRY-STEAM vapour-dominated (Darajat) fluidanya sangat compressible, jadi analisis pakai pressure-squared atau **pseudo-pressure** real-gas $m(p)$ bukan pressure langsung; diffusivity dan konstantanya berubah sesuai.
  3. **Fractured / feedzone & fractal.** Produksi dari fracture diskrit ngasih dimensi flow non-integer ("fractal") dan sidik jari dual-porosity bukan radial flow bersih.
  4. **Injection / fall-off test.** Injeksi cold-water (umum di geothermal, dan buat reinjeksi Darajat) ngubah viscosity near-well dan ngebikin thermal front yang gerak, jadi injectivity bukan sekadar cermin productivity — koreksi temperatur dibutuhin.
Keempatnya domain-judgment; persamaan di atas itu backbone yang terverifikasi, netral-fluida.⟧`
      }
    },

    // ─────────────── 4. worked-example ───────────────
    {
      id: 'worked-example',
      heading: { en: 'Worked example', id: 'Contoh kerjaan' },
      body: {
        en: `**A Horner buildup, end to end (illustrative numbers).** ⟦TODO-Az: every number here is a placeholder to show the *procedure* — the unit constants and a realistic Darajat dataset are yours to set; do not teach these figures as Darajat values.⟧

A well produces at a constant rate $q$ for $t_p = 48$ hours, then is shut in. A downhole gauge records the pressure build-up versus shut-in time $\\Delta t$.

1. **Plot.** Put shut-in pressure on the y-axis against the Horner ratio $(t_p+\\Delta t)/\\Delta t$ on a log x-axis. (As $\\Delta t$ grows, the ratio → 1.)
2. **Find the straight line.** Skip the early points (wellbore storage + skin distort them — confirm on the derivative that you have reached the flat radial plateau), and fit the late, straight portion.
3. **Slope → $kh$.** Read the slope $m$ (pressure change per log-cycle of Horner ratio). Then $kh \\propto q\\mu/m$: with the proper unit constant this returns the permeability-thickness. A small $m$ (nearly flat line) ⇒ large $kh$ ⇒ a strong well.
4. **Extrapolate → $p^*$.** Extend the straight line to Horner ratio $=1$; the intercept estimates the reservoir pressure $p^*$.
5. **Offset → skin $s$.** Compare the measured pressure at $\\Delta t = 1$ h to the value the straight line predicts there; the gap (scaled by $m$) gives the dimensionless skin. Positive ⇒ damage; negative ⇒ stimulation.

**Reading the result.** Suppose the fit gives a large $kh$ and a skin near zero: a naturally productive, undamaged well — no stimulation needed. A large positive skin on an otherwise good $kh$ says the rock is fine but the *near-well* is choked (scale, fines) — a workover/acidize candidate, not a reservoir problem. That diagnostic split — *formation* (kh) vs *completion* (skin) — is the single most valuable output of the test.

⟦TODO-Az: the geothermal worked example you would actually use diverges here:
  • If the buildup shows TWO straight-line segments, the near-well (steeper) segment is the two-phase region and the far one the single-phase formation — interpret kh from the right segment.
  • For a DRY-STEAM Darajat well, replace the pressure axis with pressure-squared / pseudo-pressure, and pair the kh/skin from PTA with an Acuña deliverability (output-vs-WHP) curve for the production picture — they answer different questions (reservoir property vs well output).
  • A real worked example should use a Darajat buildup with the correct units; I have deliberately kept this fluid-neutral and flagged it.⟧`,
        id: `**Horner buildup, ujung ke ujung (angka ilustratif).** ⟦TODO-Az: tiap angka di sini placeholder buat nunjukin *prosedur*-nya — konstanta unit dan dataset Darajat realistis itu punya kamu buat nyetel; jangan ngajarin angka-angka ini sebagai nilai Darajat.⟧

Sebuah sumur produksi di rate konstan $q$ selama $t_p = 48$ jam, terus di-shut-in. Gauge downhole ngerekam pressure build-up lawan shut-in time $\\Delta t$.

1. **Plot.** Taruh shut-in pressure di sumbu-y lawan Horner ratio $(t_p+\\Delta t)/\\Delta t$ di sumbu-x log. (Seiring $\\Delta t$ tumbuh, ratio → 1.)
2. **Cari straight line.** Lewati titik-titik awal (wellbore storage + skin ngedistorsi mereka — konfirmasi di derivative bahwa kamu udah nyampe plateau radial datar), dan fit porsi late yang lurus.
3. **Slope → $kh$.** Baca slope $m$ (perubahan pressure per log-cycle Horner ratio). Terus $kh \\propto q\\mu/m$: dengan konstanta unit yang benar ini ngembaliin permeability-thickness. $m$ kecil (garis nyaris datar) ⇒ $kh$ besar ⇒ sumur kuat.
4. **Ekstrapolasi → $p^*$.** Perpanjang straight line ke Horner ratio $=1$; intercept-nya ngestimasi reservoir pressure $p^*$.
5. **Offset → skin $s$.** Bandingin measured pressure di $\\Delta t = 1$ jam ke nilai yang straight line prediksi di situ; gap-nya (di-scale sama $m$) ngasih skin tanpa-dimensi. Positif ⇒ damage; negatif ⇒ stimulasi.

**Membaca hasilnya.** Misal fit ngasih $kh$ besar dan skin deket nol: sumur produktif alami, gak ter-damage — gak perlu stimulasi. Skin positif besar di $kh$ yang sebenarnya bagus bilang batuannya oke tapi *near-well*-nya tersumbat (scale, fines) — kandidat workover/acidize, bukan masalah reservoir. Pemisahan diagnostik itu — *formasi* (kh) vs *completion* (skin) — output paling berharga dari tes.

⟦TODO-Az: worked example geothermal yang kamu beneran pakai menyimpang di sini:
  • Kalau buildup-nya nunjukin DUA segmen straight-line, segmen near-well (lebih curam) itu region two-phase dan yang jauh single-phase formation — interpretasi kh dari segmen yang benar.
  • Buat sumur DRY-STEAM Darajat, ganti sumbu pressure dengan pressure-squared / pseudo-pressure, dan pasangin kh/skin dari PTA dengan kurva deliverability Acuña (output-vs-WHP) buat gambaran produksi — mereka ngejawab pertanyaan berbeda (properti reservoir vs output sumur).
  • Worked example nyata harusnya pakai buildup Darajat dengan unit yang benar; aku sengaja ngejaga ini netral-fluida dan nge-flag-nya.⟧`
      }
    },

    // ─────────────── 5. applications ───────────────
    {
      id: 'applications',
      heading: { en: 'Applications', id: 'Aplikasi' },
      body: {
        en: `**What a well test decides.** The kh-and-skin pair drives real decisions: whether a newly-drilled well is a keeper or needs stimulation (skin), how many wells a field needs to hit a target output (kh → deliverability), and where the permeable structure is (comparing kh across wells maps the resource). The reservoir pressure $p^*$ from buildups, tracked over time, is the primary signal of how hard a field is being drawn down.

**Monitoring a producing field.** Repeated tests are a time series on the reservoir: rising skin flags scaling or fines migration at the wellbore (a cleanout/acidize trigger); falling $p^*$ quantifies depletion and tests whether reinjection is supporting pressure; a new boundary appearing in the derivative can signal that drawdown has reached a fault or the field edge.

**Injection and reinjection.** ⟦TODO-Az: for Darajat this is central — reinjection of condensate/brine is managed with injection (fall-off) tests, which use the same PTA machinery but with a cold fluid going *in*. The thermal front and viscosity change mean injectivity must be corrected, and tracer testing (a separate topic) complements PTA to track where reinjected fluid goes and guard against thermal breakthrough. Confirm how you want injection testing framed relative to production testing.⟧

**The geothermal-specific payoff.** ⟦TODO-Az: the reason PTA matters differently in geothermal is the fluid. (1) Two-phase tests yield both a near-well two-phase mobility and the formation kh — and the location of the flashing front itself is information. (2) In a dry-steam field, PTA in pseudo-pressure characterizes the steam reservoir, while Acuña-style deliverability characterizes the well; an engineer needs both. (3) Fracture/feedzone dominance means a single "kh" is an effective average over a few permeable features, to be read with that caveat. These are the points a Darajat reservoir/production engineer would foreground — please set the emphasis.⟧

**The honest limits.** A well test sees a region of a few tens to hundreds of metres around the well over a test of hours to days; it is a local, transient snapshot, not the whole reservoir, and the inversion is non-unique (different models can fit the same curve — the derivative narrows but does not eliminate this). It complements, rather than replaces, the field-scale numerical simulation (TOUGH2 lineage, O'Sullivan-Pruess-Lippmann) that integrates many wells and the conceptual model (Cumming).`,
        id: `**Apa yang well test putusin.** Pasangan kh-dan-skin ngedorong keputusan nyata: apakah sumur yang baru dibor itu layak atau butuh stimulasi (skin), berapa sumur yang field butuh buat capai target output (kh → deliverability), dan di mana struktur permeabel-nya (ngebandingin kh lintas sumur memetakan resource). Reservoir pressure $p^*$ dari buildup, dilacak over time, itu sinyal utama seberapa keras field ditarik.

**Memonitor field yang berproduksi.** Tes berulang itu deret-waktu pada reservoir: skin naik nge-flag scaling atau fines migration di wellbore (trigger cleanout/acidize); $p^*$ turun ngukur deplesi dan nge-tes apakah reinjeksi nyokong pressure; boundary baru yang muncul di derivative bisa nandain drawdown udah nyampe fault atau tepi field.

**Injeksi dan reinjeksi.** ⟦TODO-Az: buat Darajat ini sentral — reinjeksi kondensat/brine dikelola dengan injection (fall-off) test, yang pakai mesin PTA yang sama tapi dengan fluida dingin masuk *ke dalam*. Thermal front dan perubahan viscosity berarti injectivity harus dikoreksi, dan tracer testing (topik terpisah) ngelengkapi PTA buat ngelacak ke mana fluida reinjeksi pergi dan jaga dari thermal breakthrough. Konfirmasi gimana kamu mau injection testing diframe relatif ke production testing.⟧

**Payoff spesifik-geothermal.** ⟦TODO-Az: alasan PTA penting secara berbeda di geothermal itu fluidanya. (1) Tes two-phase ngasih baik two-phase mobility near-well maupun formasi kh — dan lokasi flashing front-nya sendiri itu informasi. (2) Di field dry-steam, PTA di pseudo-pressure ngarakterisasi reservoir steam, sementara deliverability ala-Acuña ngarakterisasi sumur; engineer butuh keduanya. (3) Dominasi fracture/feedzone berarti satu "kh" itu rata-rata efektif over beberapa fitur permeabel, dibaca dengan caveat itu. Ini poin yang reservoir/production engineer Darajat bakal majuin — tolong set penekanannya.⟧

**Batas yang jujur.** Well test ngeliat region beberapa puluh sampai ratusan meter di sekitar sumur over tes berjam-jam sampai berhari; dia snapshot lokal, transient, bukan seluruh reservoir, dan inversinya non-unik (model berbeda bisa fit kurva yang sama — derivative nyempitin tapi gak ngilangin ini). Dia ngelengkapi, bukan ngganti, simulasi numerik skala-field (garis keturunan TOUGH2, O'Sullivan-Pruess-Lippmann) yang ngintegrasi banyak sumur dan conceptual model (Cumming).`
      }
    },

    // ─────────────── 6. practice ───────────────
    {
      id: 'practice',
      heading: { en: 'Practice', id: 'Latihan' },
      body: {
        en: `⟦TODO-Az: these practice items exercise the verified PTA backbone; the answers stay fluid-neutral and flag where the geothermal specifics enter. Replace with Darajat-specific items when you finalize.⟧

**1.** On a Horner buildup, why must you ignore the early-time data before fitting the straight line, and how do you know which points to drop?

<details><summary>Answer</summary>
Early-time data are dominated by wellbore storage (the well bore decompressing, so the sand-face rate ≠ surface rate) and near-well skin, not by the formation's radial flow — fitting them would give the wrong slope and hence the wrong kh. You identify the valid radial portion from the pressure DERIVATIVE: wellbore storage shows as a unit-slope line, and you only trust the semilog/Horner straight line once the derivative has reached its flat plateau (infinite-acting radial flow). ⟦TODO-Az: in a two-phase geothermal test the "plateau" may itself be split into two-phase and single-phase segments — verify.⟧
</details>

**2.** Two wells in the same field return the same large kh, but well A has skin ≈ 0 and well B has skin ≈ +6. What does this tell you, and what is the recommended action for each?

<details><summary>Answer</summary>
Same kh means the FORMATION is equally good at both — the rock can deliver. The difference is at the wellbore: A is undamaged (skin ≈ 0), so it flows at its natural potential, no action needed. B has a large positive skin — a near-well restriction (scale, fines, drilling damage) imposing an extra pressure drop, so it underperforms its rock. B is a workover/stimulation (acidize or clean-out) candidate; the fix is at the completion, not the reservoir. This formation-vs-completion split is the test's key decision value. ⟦TODO-Az: scaling chemistry (silica/calcite) driving skin growth is Darajat-specific — link to the geochemistry track.⟧
</details>

**3.** Why does the slope of the radial straight line give permeability-thickness, and what does a flatter line mean for the well?

<details><summary>Answer</summary>
In infinite-acting radial flow the pressure changes linearly with the logarithm of time, and the line-source solution makes the slope proportional to qμ/(kh). So kh ∝ qμ/(slope): the slope is the inverse signature of how easily the formation transmits fluid. A FLATTER line (smaller slope) means a LARGER kh — the pressure barely moves to sustain the flow, i.e. a highly transmissive, strongly deliverable well. A steep line means tight rock. ⟦TODO-Az: for dry-steam (compressible) flow the linear-in-log relation is in pressure-squared / pseudo-pressure, not pressure — the slope-to-kh constant differs; confirm.⟧
</details>

**4.** Why is a single well test not a substitute for a reservoir simulation, and how do the two fit together?

<details><summary>Answer</summary>
A well test is local and transient: it probes a region of tens-to-hundreds of metres around one well over hours-to-days, and its inversion is non-unique (several models can match the same curve). A reservoir simulation (e.g. the TOUGH2 lineage) integrates the whole field, many wells, the conceptual model, and long-term mass/heat balance. They are complementary: well tests supply LOCAL, well-by-well kh and skin (and pressure) as hard data points that CALIBRATE and constrain the field-scale simulation, while the simulation provides the global picture the local test cannot see. ⟦TODO-Az: confirm how Darajat workflow chains PTA → conceptual model (Cumming) → numerical model (O'Sullivan-Pruess-Lippmann).⟧
</details>`,
        id: `⟦TODO-Az: item latihan ini ngelatih backbone PTA yang terverifikasi; jawabannya tetap netral-fluida dan nge-flag di mana spesifik geothermal masuk. Ganti dengan item spesifik-Darajat pas kamu finalisasi.⟧

**1.** Di Horner buildup, kenapa kamu harus ngabaikin data early-time sebelum fit straight line, dan gimana kamu tau titik mana yang dibuang?

<details><summary>Jawaban</summary>
Data early-time didominasi sama wellbore storage (bore-nya dekompres, jadi sand-face rate ≠ surface rate) dan skin near-well, bukan sama radial flow formasi — nge-fit mereka bakal ngasih slope yang salah dan karenanya kh yang salah. Kamu ngidentifikasi porsi radial yang valid dari pressure DERIVATIVE: wellbore storage muncul sebagai garis unit-slope, dan kamu cuma percaya semilog/Horner straight line begitu derivative-nya udah nyampe plateau datar (infinite-acting radial flow). ⟦TODO-Az: di tes two-phase geothermal "plateau"-nya sendiri mungkin terbelah jadi segmen two-phase dan single-phase — verifikasi.⟧
</details>

**2.** Dua sumur di field yang sama ngembaliin kh besar yang sama, tapi sumur A punya skin ≈ 0 dan sumur B punya skin ≈ +6. Apa yang ini ngasih tau kamu, dan apa aksi yang disarankan buat masing-masing?

<details><summary>Jawaban</summary>
Kh sama berarti FORMASI sama bagusnya di keduanya — batuannya bisa deliver. Bedanya di wellbore: A gak ter-damage (skin ≈ 0), jadi dia ngalir di potensi alaminya, gak perlu aksi. B punya skin positif besar — restriksi near-well (scale, fines, drilling damage) yang ngenain pressure drop ekstra, jadi dia underperform batuannya. B kandidat workover/stimulasi (acidize atau clean-out); fix-nya di completion, bukan reservoir. Pemisahan formasi-vs-completion ini nilai keputusan kunci dari tes. ⟦TODO-Az: kimia scaling (silica/calcite) yang ngedorong pertumbuhan skin itu spesifik-Darajat — link ke track geochemistry.⟧
</details>

**3.** Kenapa slope radial straight line ngasih permeability-thickness, dan apa arti garis yang lebih datar buat sumurnya?

<details><summary>Jawaban</summary>
Di infinite-acting radial flow pressure berubah linear sama logaritma waktu, dan solusi line-source bikin slope-nya proporsional ke qμ/(kh). Jadi kh ∝ qμ/(slope): slope-nya sidik jari kebalikan dari seberapa gampang formasi nransmisi fluida. Garis lebih DATAR (slope lebih kecil) berarti kh lebih BESAR — pressure-nya nyaris gak gerak buat nyokong flow, yaitu sumur yang sangat transmisif, deliverable kuat. Garis curam berarti batuan ketat. ⟦TODO-Az: buat flow dry-steam (compressible) relasi linear-in-log-nya di pressure-squared / pseudo-pressure, bukan pressure — konstanta slope-ke-kh-nya beda; konfirmasi.⟧
</details>

**4.** Kenapa satu well test bukan pengganti reservoir simulation, dan gimana keduanya pas bareng?

<details><summary>Jawaban</summary>
Well test itu lokal dan transient: dia ngeprobe region puluhan-sampai-ratusan meter di sekitar satu sumur over jam-sampai-hari, dan inversinya non-unik (beberapa model bisa cocok kurva yang sama). Reservoir simulation (misal garis keturunan TOUGH2) ngintegrasi seluruh field, banyak sumur, conceptual model, dan mass/heat balance jangka-panjang. Mereka komplementer: well test nyuplai kh dan skin (dan pressure) LOKAL, sumur-demi-sumur sebagai titik data keras yang MENGKALIBRASI dan ngebatasi simulasi skala-field, sementara simulasi nyediain gambaran global yang tes lokal gak bisa liat. ⟦TODO-Az: konfirmasi gimana workflow Darajat ngerangkai PTA → conceptual model (Cumming) → numerical model (O'Sullivan-Pruess-Lippmann).⟧
</details>`
      }
    },

    // ─────────────── 7. connections ───────────────
    {
      id: 'connections',
      heading: { en: 'Connections', id: 'Koneksi' },
      body: {
        en: `- **Reservoir engineering home**: [Grant & Bixley 2011](item:grant-bixley-2011) is the geothermal reservoir-engineering text whose well-test chapters this module focuses and modernizes (derivative-based diagnosis); read them together.
- **Well output / deliverability**: ⟦TODO-Az⟧ [Acuña 2008](item:acuna-2008) is the dry-steam deliverability (output-vs-pressure) counterpart — PTA gives the reservoir property (kh, skin), Acuña gives the well's production curve; a dry-steam engineer needs both.
- **Field-scale model**: [O'Sullivan-Pruess-Lippmann 2001](item:osullivan-pruess-lippmann-2001) (TOUGH2) is the numerical simulation that well-test kh/skin help calibrate; PTA is the local data, the simulator the global integrator.
- **Conceptual model**: [Cumming 2009](item:cumming-2009) frames the conceptual model (clay cap, upflow/outflow) into which well-test results are placed.
- **Chemistry of skin**: ⟦TODO-Az⟧ [Arnórsson 2000](item:arnorsson-2000) / [Henley-Truesdell-Barton 1984](item:henley-truesdell-barton-1984) — silica/calcite scaling is a physical driver of rising skin over a well's life (the geochemistry ↔ production link).`,
        id: `- **Rumah reservoir engineering**: [Grant & Bixley 2011](item:grant-bixley-2011) itu teks reservoir-engineering geothermal yang bab well-test-nya module ini fokuskan dan modernisasi (diagnosis berbasis-derivative); baca bareng.
- **Output sumur / deliverability**: ⟦TODO-Az⟧ [Acuña 2008](item:acuna-2008) itu counterpart deliverability dry-steam (output-vs-pressure) — PTA ngasih properti reservoir (kh, skin), Acuña ngasih kurva produksi sumur; engineer dry-steam butuh keduanya.
- **Model skala-field**: [O'Sullivan-Pruess-Lippmann 2001](item:osullivan-pruess-lippmann-2001) (TOUGH2) itu simulasi numerik yang kh/skin well-test bantu kalibrasi; PTA itu data lokal, simulator-nya integrator global.
- **Conceptual model**: [Cumming 2009](item:cumming-2009) ngeframe conceptual model (clay cap, upflow/outflow) tempat hasil well-test ditaruh.
- **Kimia skin**: ⟦TODO-Az⟧ [Arnórsson 2000](item:arnorsson-2000) / [Henley-Truesdell-Barton 1984](item:henley-truesdell-barton-1984) — scaling silica/calcite itu pendorong fisik dari skin yang naik sepanjang umur sumur (link geochemistry ↔ produksi).`
      }
    },

    // ─────────────── 8. sources ───────────────
    {
      id: 'sources',
      heading: { en: 'Sources', id: 'Sumber' },
      body: {
        en: `⟦TODO-Az: verify editions, page references, and which sources you want as canonical for the geothermal framing before finalizing.⟧
- **Horne, R. N.** (1995). *Modern Well Test Analysis: A Computer-Aided Approach*, 2nd ed. Petroway Inc. **(This item.)** The standard modern PTA workflow (derivative-based diagnosis + model identification).
- **Horner, D. R.** (1951). "Pressure Build-Up in Wells." *Proc. 3rd World Petroleum Congress.* The Horner plot and extrapolated reservoir pressure.
- **Theis, C. V.** (1935). "The Relation Between the Lowering of the Piezometric Surface and the Rate and Duration of Discharge of a Well Using Ground-Water Storage." *Trans. AGU.* The line-source solution.
- **Bourdet, D., Ayoub, J. A., and Pirard, Y. M.** (1989). "Use of Pressure Derivative in Well Test Interpretation." *SPE Formation Evaluation.* The pressure derivative.
- **Grant, M. A., and Bixley, P. F.** (2011). *Geothermal Reservoir Engineering*, 2nd ed. Elsevier. The geothermal well-test counterpart (in this catalog). ⟦TODO-Az⟧
- **Grant, M. A.; Garg, S. K.; Pruess, K.** — two-phase geothermal well-test theory. ⟦TODO-Az: add the exact references you teach from.⟧`,
        id: `⟦TODO-Az: verifikasi edisi, referensi halaman, dan sumber mana yang kamu mau sebagai kanonik buat framing geothermal sebelum finalisasi.⟧
- **Horne, R. N.** (1995). *Modern Well Test Analysis: A Computer-Aided Approach*, ed. ke-2. Petroway Inc. **(Item ini.)** Workflow PTA modern standar (diagnosis berbasis-derivative + identifikasi model).
- **Horner, D. R.** (1951). "Pressure Build-Up in Wells." *Proc. 3rd World Petroleum Congress.* Horner plot dan reservoir pressure yang diekstrapolasi.
- **Theis, C. V.** (1935). "The Relation Between the Lowering of the Piezometric Surface…" *Trans. AGU.* Solusi line-source.
- **Bourdet, D., Ayoub, J. A., dan Pirard, Y. M.** (1989). "Use of Pressure Derivative in Well Test Interpretation." *SPE Formation Evaluation.* Pressure derivative.
- **Grant, M. A., dan Bixley, P. F.** (2011). *Geothermal Reservoir Engineering*, ed. ke-2. Elsevier. Counterpart well-test geothermal (di katalog ini). ⟦TODO-Az⟧
- **Grant, M. A.; Garg, S. K.; Pruess, K.** — teori well-test two-phase geothermal. ⟦TODO-Az: tambah referensi persis yang kamu pakai ngajar.⟧`
      }
    },
  ],

  audio: { enabled: true },

  selfTest: [
    {
      sectionId: 'intuition',
      question: {
        en: 'A well test perturbs the flow and reads the pressure response. What are the three flow regimes a buildup passes through in time order, and which one yields permeability-thickness?',
        id: 'Well test ngeganggu flow dan baca pressure response. Apa tiga flow regime yang buildup lewati dalam urutan waktu, dan yang mana yang ngasih permeability-thickness?'
      },
      prompt: { en: 'Before continuing, try answering:', id: 'Sebelum lanjut, coba jawab:' },
      answer: {
        en: 'In time order: (1) WELLBORE STORAGE — earliest, dominated by the well bore itself decompressing (unit slope on the log-log derivative); (2) INFINITE-ACTING RADIAL FLOW — the clean middle regime where the pressure derivative is a flat plateau; (3) BOUNDARY effects — latest, when the pressure wave reaches a fault or reservoir edge and the response bends. Permeability-thickness (kh) comes from the RADIAL-FLOW regime: the slope of the semilog/Horner straight line (kh ∝ qμ/slope) or, equivalently, the height of the derivative plateau. You must wait out wellbore storage before that line is valid. ⟦TODO-Az: in two-phase geothermal tests the radial portion may split into two-phase and single-phase segments — verify which gives formation kh.⟧',
        id: 'Dalam urutan waktu: (1) WELLBORE STORAGE — paling awal, didominasi bore sumur sendiri yang dekompres (unit slope di derivative log-log); (2) INFINITE-ACTING RADIAL FLOW — regime tengah bersih di mana pressure derivative itu plateau datar; (3) efek BOUNDARY — paling akhir, pas gelombang pressure nyampe fault atau tepi reservoir dan response-nya nekuk. Permeability-thickness (kh) datang dari regime RADIAL-FLOW: slope semilog/Horner straight line (kh ∝ qμ/slope) atau, ekuivalen, tinggi plateau derivative. Kamu harus nunggu wellbore storage selesai sebelum garis itu valid. ⟦TODO-Az: di tes two-phase geothermal porsi radial-nya mungkin terbelah jadi segmen two-phase dan single-phase — verifikasi yang mana yang ngasih formasi kh.⟧'
      }
    },
    {
      sectionId: 'formalization',
      question: {
        en: 'Two wells return the same kh but very different skin (≈0 vs +6). Why is that the most actionable output of a well test?',
        id: 'Dua sumur ngembaliin kh sama tapi skin sangat beda (≈0 vs +6). Kenapa itu output paling bisa-ditindaklanjuti dari well test?'
      },
      prompt: { en: 'Before continuing, try answering:', id: 'Sebelum lanjut, coba jawab:' },
      answer: {
        en: 'Because it cleanly separates a FORMATION problem from a COMPLETION problem. Equal kh means the rock is equally productive at both wells. The skin difference is entirely near-wellbore: skin ≈ 0 is an undamaged well flowing at its natural potential; skin ≈ +6 is a near-well restriction (scale, fines, drilling damage) imposing an extra pressure drop, so that well underperforms its own rock. The action follows directly — the high-skin well is a stimulation/workover candidate (acidize, clean out), while the reservoir itself needs nothing. The test tells you whether to fix the well or accept the rock, which is exactly the decision an operator faces. ⟦TODO-Az: silica/calcite scaling as the cause of rising skin over time is Darajat-relevant — link to geochemistry.⟧',
        id: 'Karena dia misahin dengan bersih masalah FORMASI dari masalah COMPLETION. Kh sama berarti batuannya sama produktifnya di kedua sumur. Beda skin-nya sepenuhnya near-wellbore: skin ≈ 0 itu sumur gak ter-damage yang ngalir di potensi alaminya; skin ≈ +6 itu restriksi near-well (scale, fines, drilling damage) yang ngenain pressure drop ekstra, jadi sumur itu underperform batuannya sendiri. Aksinya ngikut langsung — sumur skin-tinggi itu kandidat stimulasi/workover (acidize, clean out), sementara reservoir-nya sendiri gak butuh apa-apa. Tes ngasih tau kamu apakah benerin sumur atau terima batuannya, yang persis keputusan yang operator hadapi. ⟦TODO-Az: scaling silica/calcite sebagai penyebab skin naik over time itu relevan-Darajat — link ke geochemistry.⟧'
      }
    },
    {
      sectionId: 'applications',
      question: {
        en: 'Why is pressure-transient analysis a complement to, not a replacement for, a field-scale reservoir simulation?',
        id: 'Kenapa pressure-transient analysis itu pelengkap, bukan pengganti, simulasi reservoir skala-field?'
      },
      prompt: { en: 'Before continuing, try answering:', id: 'Sebelum lanjut, coba jawab:' },
      answer: {
        en: 'Because they operate at different scales and answer different questions. A well test is LOCAL and TRANSIENT — it probes tens to hundreds of metres around a single well over hours to days, and its inversion is non-unique (several models can fit the same curve; the derivative narrows the choice but does not eliminate it). A reservoir simulation integrates the WHOLE field — many wells, the conceptual model, long-term mass and heat balance. So well tests supply hard, local, well-by-well measurements of kh, skin, and pressure that calibrate and constrain the simulation, while the simulation provides the global, long-term picture no single test can see. Local data points + global integrator. ⟦TODO-Az: confirm the Darajat chain PTA → conceptual model (Cumming) → numerical model (TOUGH2 / O\'Sullivan-Pruess-Lippmann).⟧',
        id: 'Karena mereka beroperasi di skala berbeda dan ngejawab pertanyaan berbeda. Well test itu LOKAL dan TRANSIENT — dia ngeprobe puluhan sampai ratusan meter di sekitar satu sumur over jam sampai hari, dan inversinya non-unik (beberapa model bisa fit kurva yang sama; derivative nyempitin pilihan tapi gak ngilanginnya). Reservoir simulation ngintegrasi SELURUH field — banyak sumur, conceptual model, mass dan heat balance jangka-panjang. Jadi well test nyuplai pengukuran kh, skin, dan pressure yang keras, lokal, sumur-demi-sumur yang ngkalibrasi dan ngebatasi simulasi, sementara simulasi nyediain gambaran global, jangka-panjang yang gak ada tes tunggal bisa liat. Titik data lokal + integrator global. ⟦TODO-Az: konfirmasi rantai Darajat PTA → conceptual model (Cumming) → numerical model (TOUGH2 / O\'Sullivan-Pruess-Lippmann).⟧'
      }
    },
  ],
};
