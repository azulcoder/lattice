// ─────────────────────────────────────────────────────────────────────────
// Trading domain — ATTRIBUTED deep-dive, compiled by Az from @insiliconot's
// public "Charts & Quant Curriculum" deep-dive. NOT financial advice.
// His deepest material (MEGA folders, Telegram, Medium) is NOT reproduced;
// this captures the chart METHOD + the canonical quant sources he points to.
// Evidence: [Established] standard text/paper · [Practitioner] · [His].
// ─────────────────────────────────────────────────────────────────────────

export const CONTENT = {
  itemId: 'insilico-quant-curriculum',
  estimatedReadMinutes: 30,

  author: {
    fullName: { en: 'Insilico — @insiliconot (charts & quant-curriculum deep-dive)', id: 'Insilico — @insiliconot (deep-dive charts & kurikulum-quant)' },
    affiliation: {
      en: `Viscosity Solution / @InsilicoTrading. A rigorous intraday-BTC quant behind a satirical persona; teaches via a pinned thread, MEGA folders, a Medium and a Telegram archive. (Public posts; compiled by Az.)`,
      id: `Viscosity Solution / @InsilicoTrading. Quant intraday-BTC rigorous di balik persona satir; ngajar lewat pinned thread, folder MEGA, Medium dan arsip Telegram. (Postingan publik; dikompilasi Az.)`
    },
    tagline: {
      en: `Read & rebuild the "salad profiles" yourself — volume profile + non-time bars — then go up the rigorous quant curriculum his handle and folders point to: viscosity solutions, the volatility surface, financial time series.`,
      id: `Baca & rebuild "salad profiles" sendiri — volume profile + bar non-waktu — terus naik kurikulum quant rigorous yang handle dan folder-nya tunjuk: viscosity solutions, volatility surface, financial time series.`
    },
    bio: {
      en: `This deep-dive does two things. Part A is practical: it explains the chart *method* behind @insiliconot's ephemeral intraday-BTC "salad profiles" — what a volume/market profile shows and how to rebuild it yourself — rather than reproducing his screenshots. Part B is the curriculum: with canonical sources, the graduate-level quant his handle ("Viscosity Solution") and shared folders (time-series, vol-surface, "occult") point to. The persona is satire; the quant is serious and standard.

⟦Note: attributed synthesis of public posts, compiled by Az. Educational, not financial advice; not affiliated. His deepest material lives in MEGA folders / Telegram / Medium and is NOT reproduced here — this is the method and the reading list.⟧`,
      id: `Deep-dive ini ngelakuin dua hal. Part A praktis: dia ngejelasin *metode* chart di balik "salad profiles" intraday-BTC efemeral @insiliconot — apa yang volume/market profile nunjukin dan gimana rebuild sendiri — bukan ngereproduksi screenshot-nya. Part B kurikulumnya: dengan sumber kanonik, quant level-graduate yang handle-nya ("Viscosity Solution") dan folder yang dibagikan (time-series, vol-surface, "occult") tunjuk. Persona-nya satir; quant-nya serius dan standar.

⟦Catatan: sintesis teratribusi postingan publik, dikompilasi Az. Edukatif, bukan nasihat keuangan; gak berafiliasi. Material terdalam-nya ada di folder MEGA / Telegram / Medium dan GAK direproduksi di sini — ini metode dan daftar bacaan.⟧`
    },
    focus: {
      en: `Part A — the chart method: a volume/market profile plots how much volume traded at each price (a horizontal histogram), answering "where did the market actually do business?" rather than "what was the close?". You read the point of control (POC, the magnet), the value area (~70% of volume, "fair"), high-volume nodes (acceptance / support-resistance) and low-volume nodes ("pockets", rejected prices that travel fast); you reconcile "conflicting" nested ranges by fixing which auction/timeframe you are trading; and you switch to non-time (volume/range) bars for cleaner statistics. Part B — the quant curriculum: viscosity solutions / stochastic control (his namesake), volatility-surface modelling, and financial time series, with the canonical texts for each.`,
      id: `Part A — metode chart: volume/market profile ngeplot berapa banyak volume yang diperdagangkan di tiap harga (histogram horizontal), ngejawab "di mana pasar beneran berbisnis?" bukan "apa close-nya?". Kamu baca point of control (POC, magnet), value area (~70% volume, "fair"), high-volume node (acceptance / support-resistance) dan low-volume node ("pocket", harga ditolak yang travel cepat); kamu rekonsiliasi range bersarang "konflik" dengan nge-fix lelang/timeframe mana yang kamu trade; dan kamu ganti ke bar non-waktu (volume/range) buat statistik lebih bersih. Part B — kurikulum quant: viscosity solutions / stochastic control (senama-nya), pemodelan volatility-surface, dan financial time series, dengan teks kanonik buat masing-masing.`
    },
    intellectualLineage: {
      en: `Part A descends from Auction Market Theory / Market Profile — [Established] Steidlmayer (CBOT, 1984) and Dalton (*Markets in Profile* / *Mind Over Markets*) — and from information-driven bars, [Established] López de Prado (2018). Part B is standard graduate quant: viscosity solutions for the Hamilton-Jacobi-Bellman PDEs of stochastic optimal control — [Established] Crandall & Lions (1983), the Crandall-Ishii-Lions (1992) "User's Guide", with finance applications in Pham (2009), Ngo & Pham (pairs trading) and Almgren & Chriss (2001, optimal execution); the volatility surface, [Established] Gatheral (2006); and financial time series, [Established] Tsay (2010).`,
      id: `Part A turun dari Auction Market Theory / Market Profile — [Established] Steidlmayer (CBOT, 1984) dan Dalton (*Markets in Profile* / *Mind Over Markets*) — dan dari bar didorong-informasi, [Established] López de Prado (2018). Part B itu quant graduate standar: viscosity solutions buat PDE Hamilton-Jacobi-Bellman dari stochastic optimal control — [Established] Crandall & Lions (1983), "User's Guide" Crandall-Ishii-Lions (1992), dengan aplikasi finance di Pham (2009), Ngo & Pham (pairs trading) dan Almgren & Chriss (2001, eksekusi optimal); volatility surface, [Established] Gatheral (2006); dan financial time series, [Established] Tsay (2010).`
    },
    keyCollaborators: {
      en: `Taught solo across an X pinned thread, downloadable MEGA folders (time-series · vol-surface · "occult"/advanced), a "Viscosity Solutions" Medium, and the @insilicobunker Telegram archive. The canonical reading list IS the collaboration — Steidlmayer/Dalton, López de Prado, Gatheral, Tsay, Crandall-Lions/Pham, Almgren-Chriss, Harris.`,
      id: `Diajar solo lintas pinned thread X, folder MEGA yang bisa-diunduh (time-series · vol-surface · "occult"/lanjutan), Medium "Viscosity Solutions", dan arsip Telegram @insilicobunker. Daftar bacaan kanonik ITU kolaborasinya — Steidlmayer/Dalton, López de Prado, Gatheral, Tsay, Crandall-Lions/Pham, Almgren-Chriss, Harris.`
    },
    legacy: {
      en: `The transferable contribution is a complete, rigorous self-study path that most retail never sees: from reading the auction (volume profile) and sampling it correctly (non-time bars), up through the volatility surface and time-series analysis, to the optimal-control math (viscosity solutions) that actually answers "what is the best action?". It pairs a concrete, rebuildable chart method with a serious syllabus — the antidote to easy-answer indicators.`,
      id: `Kontribusi yang bisa-ditransfer itu jalur self-study lengkap, rigorous yang kebanyakan retail gak pernah liat: dari baca lelang (volume profile) dan nyampelnya dengan benar (bar non-waktu), naik lewat volatility surface dan analisis time-series, ke matematika optimal-control (viscosity solutions) yang beneran ngejawab "apa aksi terbaik?". Dia masangin metode chart yang konkret, bisa-direbuild dengan silabus serius — penawar buat indikator jawaban-gampang.`
    },
    keyWorks: [
      { year: 2007, title: 'Markets in Profile (Dalton, Jones & Dalton) — POC / value area / acceptance', venue: 'Wiley' },
      { year: 2018, title: 'Advances in Financial Machine Learning (López de Prado) — non-time bars', venue: 'Wiley' },
      { year: 1992, title: "User's Guide to Viscosity Solutions of 2nd-Order PDEs (Crandall, Ishii & Lions)", venue: 'Bull. AMS' },
      { year: 2006, title: 'The Volatility Surface (Gatheral)', venue: 'Wiley' },
      { year: 2010, title: 'Analysis of Financial Time Series (Tsay)', venue: 'Wiley' },
    ],
  },

  sections: [
    {
      id: 'motivation',
      heading: { en: 'Why this matters', id: 'Kenapa ini penting' },
      body: {
        en: `@insiliconot's daily charts are *ephemeral* — intraday-BTC volume profiles, not a curated iconic set — so the value is not in copying screenshots but in learning the **method**: what a profile shows and how to rebuild it yourself, and then the **curriculum** behind the handle. This deep-dive does both: Part A teaches reading and rebuilding the "salad profiles"; Part B lays out the rigorous quant his name and folders point to, with canonical sources.

The motivation is a stance: **rigor over hype**. Read where the market actually traded (the auction) rather than where indicators say it should; sample by information, not the clock; and build the *action* side on real optimal-control mathematics rather than heuristics. The satirical persona is, by his own account, a filter — separate it from the substance.

⟦Disclaimer: attributed synthesis of @insiliconot's public deep-dive, for study — not financial advice, not affiliated. The deepest material (MEGA folders, Telegram @insilicobunker, Medium) is NOT reproduced; this is a map to the method and the canonical reading list.⟧`,
        id: `Chart harian @insiliconot itu *efemeral* — volume profile intraday-BTC, bukan set ikonik terkurasi — jadi value-nya bukan di nyalin screenshot tapi di belajar **metode**-nya: apa yang profil nunjukin dan gimana rebuild sendiri, terus **kurikulum** di balik handle. Deep-dive ini ngelakuin keduanya: Part A ngajarin baca dan rebuild "salad profiles"; Part B nyusun quant rigorous yang nama dan folder-nya tunjuk, dengan sumber kanonik.

Motivasinya sikap: **rigor di atas hype**. Baca di mana pasar beneran diperdagangkan (lelang) bukan di mana indikator bilang harusnya; sampel berdasar informasi, bukan jam; dan bangun sisi *aksi* di matematika optimal-control nyata bukan heuristik. Persona satir-nya, menurut pengakuannya sendiri, itu filter — pisahin dari substansinya.

⟦Disclaimer: sintesis teratribusi deep-dive publik @insiliconot, buat belajar — bukan nasihat keuangan, gak berafiliasi. Material terdalam (folder MEGA, Telegram @insilicobunker, Medium) GAK direproduksi; ini peta ke metode dan daftar bacaan kanonik.⟧`
      }
    },
    {
      id: 'intuition',
      heading: { en: 'Reading the salad profile', id: 'Membaca salad profile' },
      visualization: {
        id: 'volume-profile-sim',
        component: 'VolumeProfileSim',
        title: {
          en: 'Build & read a volume profile: POC, value area, HVN/LVN',
          id: 'Bangun & baca volume profile: POC, value area, HVN/LVN'
        },
        description: {
          en: "A volume profile built from a synthetic intraday auction (volume/time at each price). Gold = POC (most-traded price, the magnet); the bracket = the 70% value area (Dalton's canonical two-row rule: from the POC, annex whichever PAIR of two rows — above vs below — has the larger total, until ~70%); green = high-volume nodes (acceptance / S-R), red = low-volume nodes ('pockets' price travels through fast). Slide toward a BALANCED day for a central fat POC, toward a TREND day for a migrating/elongated profile; raise volatility to widen the range; Regenerate for a new path.",
          id: "Volume profile dibangun dari lelang intraday sintetis (volume/waktu di tiap harga). Emas = POC (harga paling-diperdagangkan, magnet); bracket = value area 70% (aturan kanonik Dalton dua-baris: dari POC, ambil PASANGAN dua baris — atas vs bawah — yang totalnya lebih besar, sampai ~70%); hijau = high-volume node (acceptance / S-R), merah = low-volume node ('pocket' yang harga travel lewat cepat). Geser ke hari BALANCED buat POC tengah gemuk, ke hari TREND buat profil migrasi/memanjang; naikin volatilitas buat ngelebarin range; Regenerate buat path baru."
        },
        defaultParams: { trend: 0.25, vol: 0.6, nBars: 300, seed: 7 },
        height: 440,
      },
      body: {
        en: `**What a profile is.** Instead of plotting price over time, a profile plots how much volume traded at each *price* — a horizontal histogram beside the chart. It answers "where did the market actually do business?" rather than "what was the close?".

**Key features.**
- **POC (Point of Control):** the price with the most volume — the magnet.
- **Value Area:** roughly the central ~70% of volume — where the market agreed on "fair".
- **High-Volume Nodes (HVN):** acceptance / support-resistance shelves.
- **Low-Volume Nodes (LVN) / "pockets":** rejected prices that price travels through fast.

**How he reads it.**
- **Trade toward value:** price tends to gravitate to the POC / value area (the magnet) and travel fast through pockets. Fade moves into HVNs; expect quick travel through LVNs.
- **Reconcile "conflicting" ranges:** the question people ask him — one range's low is another's mid — is resolved by stating *which* auction you are trading. Use the intraday profile for a scalp, the multi-day/composite profile for context; the levels stop conflicting once you fix the timeframe.
- **Acceptance vs rejection:** price spending time and *building volume* at a new level = acceptance (the auction is migrating); a fast wick that builds *no* volume = rejection (back to value).`,
        id: `**Apa itu profil.** Alih-alih ngeplot harga over time, profil ngeplot berapa banyak volume yang diperdagangkan di tiap *harga* — histogram horizontal di samping chart. Dia ngejawab "di mana pasar beneran berbisnis?" bukan "apa close-nya?".

**Fitur kunci.**
- **POC (Point of Control):** harga dengan volume terbanyak — magnet.
- **Value Area:** kira-kira ~70% volume tengah — di mana pasar sepakat "fair".
- **High-Volume Node (HVN):** shelf acceptance / support-resistance.
- **Low-Volume Node (LVN) / "pocket":** harga ditolak yang harga travel lewat cepat.

**Gimana dia bacanya.**
- **Trade menuju value:** harga cenderung gravitasi ke POC / value area (magnet) dan travel cepat lewat pocket. Fade gerakan ke HVN; harapin travel cepat lewat LVN.
- **Rekonsiliasi range "konflik":** pertanyaan yang orang tanya dia — low satu range itu mid yang lain — diselesaikan dengan nyatain *lelang mana* yang kamu trade. Pakai profil intraday buat scalp, profil multi-hari/composite buat konteks; level berhenti konflik begitu kamu nge-fix timeframe.
- **Acceptance vs rejection:** harga ngabisin waktu dan *ngebangun volume* di level baru = acceptance (lelang migrasi); wick cepat yang ngebangun *gak ada* volume = rejection (balik ke value).`
      }
    },
    {
      id: 'formalization',
      heading: { en: 'Non-time bars & viscosity solutions', id: 'Bar non-waktu & viscosity solutions' },
      body: {
        en: `**Non-time (information-driven) bars.** Candles that close on a *condition* — a set amount of volume, range, or ticks — not on the clock. Why it is better: time bars over-sample dead periods and under-sample bursts; volume/range bars sample by *activity*, giving more uniform information per bar and better statistical properties (returns closer to normal, less heteroskedasticity). [Established] López de Prado (2018): tick / volume / dollar / imbalance bars are the modern standard for microstructure work.

**Viscosity solutions & stochastic control (his namesake).** A rigorous notion of "solution" for the nonlinear **Hamilton-Jacobi-Bellman (HJB)** PDEs that arise whenever you optimise a strategy under uncertainty — optimal execution, optimal stopping (when to exit), optimal switching (when to flip a pairs trade), portfolio choice. Why a trader cares: it is the math that gives the **optimal action as a function of state** — how aggressively to execute given impact and risk, or the exact bands to enter/exit a mean-reverting spread. [Established] Crandall & Lions (1983) introduced viscosity solutions; the Crandall-Ishii-Lions (1992) "User's Guide" is the standard reference; Pham (2009) is the finance textbook; Ngo & Pham give a viscosity-solutions treatment of pairs-trading entry/exit; [Established] Almgren & Chriss (2001) is the classic optimal-execution application — and is itself a module in the microstructure domain.

These two formal pieces share the method's spirit: sample and decide by the *underlying process* (information, state) rather than by convenience (the clock, a fixed indicator).`,
        id: `**Bar non-waktu (didorong-informasi).** Candle yang nutup pada *kondisi* — sejumlah volume, range, atau tick — bukan pada jam. Kenapa lebih baik: bar waktu over-sample periode mati dan under-sample ledakan; bar volume/range nyampel berdasar *aktivitas*, ngasih informasi lebih seragam per bar dan properti statistik lebih baik (return lebih dekat normal, lebih sedikit heteroskedastisitas). [Established] López de Prado (2018): bar tick / volume / dollar / imbalance itu standar modern buat kerja microstructure.

**Viscosity solutions & stochastic control (senama-nya).** Gagasan "solusi" rigorous buat PDE **Hamilton-Jacobi-Bellman (HJB)** nonlinear yang muncul kapan pun kamu ngoptimasi strategi di bawah ketidakpastian — eksekusi optimal, optimal stopping (kapan keluar), optimal switching (kapan flip pairs trade), portfolio choice. Kenapa trader peduli: itu matematika yang ngasih **aksi optimal sebagai fungsi state** — seberapa agresif eksekusi diberi impact dan risiko, atau band persis buat masuk/keluar spread mean-reverting. [Established] Crandall & Lions (1983) ngenalin viscosity solutions; "User's Guide" Crandall-Ishii-Lions (1992) itu referensi standar; Pham (2009) itu textbook finance-nya; Ngo & Pham ngasih perlakuan viscosity-solutions buat entry/exit pairs-trading; [Established] Almgren & Chriss (2001) itu aplikasi eksekusi-optimal klasik — dan dia sendiri module di domain microstructure.

Dua bagian formal ini berbagi spirit metodenya: sampel dan putusin berdasar *proses yang mendasari* (informasi, state) bukan berdasar kenyamanan (jam, indikator tetap).`
      }
    },
    {
      id: 'worked-example',
      heading: { en: 'Worked example: rebuild his setup', id: 'Contoh: rebuild setup-nya' },
      body: {
        en: `**Rebuild the method yourself (practical).**

1. **Add a volume profile.** On TradingView (or similar), add Volume Profile — Session / Visible Range, or a Fixed-Range profile over the range you are studying. Show the **POC + Value Area**.
2. **Switch to non-time bars.** Where available, use a range-bar chart (or volume-based bars / a footprint chart) and build the profile on *that*, so each bar carries roughly equal information.
3. **Mark the structure.** Mark the **HVNs** (magnets / acceptance shelves) and the **LVNs** (pockets / fast-travel zones). Define the intraday auction's value area for the day, plus a composite / weekly profile for context.
4. **Trade the auction.** Long the lower value edge / short the upper edge *toward the POC*; expect *fast travel through pockets*; treat acceptance *outside* value (volume building at a new level) as a migration, not a fade.
5. **Resolve nesting.** If the intraday and composite profiles seem to conflict, fix which auction you are trading and read that profile — do not blend scales.

**The read.** The whole exercise replaces "what indicator fired?" with "where did volume trade, and is price being accepted or rejected here?" — a structural read you can rebuild from raw data, on any platform, for any instrument. The *action* side (how aggressively to enter/exit) is where the optimal-control half of the curriculum belongs.

⟦Disclaimer: illustrative method, not a signal or recommendation. A profile describes where trade happened; it does not predict the future on its own.⟧`,
        id: `**Rebuild metodenya sendiri (praktis).**

1. **Tambah volume profile.** Di TradingView (atau serupa), tambah Volume Profile — Session / Visible Range, atau profil Fixed-Range atas range yang kamu pelajari. Tunjukin **POC + Value Area**.
2. **Ganti ke bar non-waktu.** Di mana tersedia, pakai chart range-bar (atau bar berbasis-volume / footprint chart) dan bangun profil di *itu*, jadi tiap bar bawa informasi kira-kira sama.
3. **Tandain strukturnya.** Tandain **HVN** (magnet / shelf acceptance) dan **LVN** (pocket / zona fast-travel). Definisiin value area lelang intraday buat hari itu, plus profil composite / mingguan buat konteks.
4. **Trade lelangnya.** Long tepi value bawah / short tepi atas *menuju POC*; harapin *travel cepat lewat pocket*; perlakukan acceptance *di luar* value (volume nambah di level baru) sebagai migrasi, bukan fade.
5. **Selesaiin nesting.** Kalau profil intraday dan composite keliatan konflik, fix lelang mana yang kamu trade dan baca profil itu — jangan campur skala.

**Bacaannya.** Seluruh latihan ngeganti "indikator apa yang nyala?" dengan "di mana volume diperdagangkan, dan apakah harga diterima atau ditolak di sini?" — bacaan struktural yang bisa kamu rebuild dari data mentah, di platform apa pun, buat instrumen apa pun. Sisi *aksi* (seberapa agresif masuk/keluar) itu di mana paruh optimal-control kurikulum berada.

⟦Disclaimer: metode ilustratif, bukan sinyal atau rekomendasi. Profil ngegambarin di mana perdagangan terjadi; dia gak memprediksi masa depan sendirian.⟧`
      }
    },
    {
      id: 'applications',
      heading: { en: 'Applications & study plan', id: 'Aplikasi & rencana belajar' },
      body: {
        en: `**The study plan (a real syllabus).** Roughly in order:
1. **Profile literacy** — Steidlmayer (1984), Dalton et al. (2007): POC, value area, acceptance/rejection.
2. **Bar construction** — López de Prado (2018): switch intraday BTC to volume/range bars.
3. **Volatility surface** — Gatheral (2006): skew, term structure, arbitrage-free dynamics — the map of how options are priced and where relative value sits.
4. **Financial time series** — Tsay (2010): ARMA/GARCH, cointegration, regimes — for both signal and risk.
5. **Stochastic control / viscosity solutions** — Pham (2009), Crandall & Lions (1983), Ngo & Pham, Almgren & Chriss (2001): the action side.

**As a discipline.** Specialise to one instrument and one timeframe; read the auction; refuse marketed / derived order-flow products and easy-answer indicators; and let the persona's irony screen out low-effort imitation. The deepest material (MEGA folders, Medium, @insilicobunker) is the step *after* the syllabus — pull it from the pinned thread.

**How it composes.** This is the rigorous-quant counterpart of the practitioner edges of [the @Husslin_ framework](item:husslin-framework) and the deeper layer beneath [the @insiliconot method](item:insilico-method). The curriculum points straight into the academic microstructure domain — [Almgren-Chriss 2001](item:almgren-chriss-2000) optimal execution is on the reading list, and the profile/impact ideas are the practitioner face of [Kyle's price impact](item:kyle-1985) and the market-mechanics of [O'Hara](item:ohara-1995).

**Honest limits.** Volume-profile reading is a framework, not a predictor — it describes where trade happened, and acceptance/rejection is a judgement, not a signal. The quant curriculum is genuinely hard (graduate PDEs/stochastic calculus) and is a multi-year path, not a shortcut; and the deepest material is not reproduced here, so this is a map, not the territory.`,
        id: `**Rencana belajar (silabus nyata).** Kira-kira urutan:
1. **Literasi profil** — Steidlmayer (1984), Dalton dkk. (2007): POC, value area, acceptance/rejection.
2. **Konstruksi bar** — López de Prado (2018): ganti intraday BTC ke bar volume/range.
3. **Volatility surface** — Gatheral (2006): skew, term structure, dinamika arbitrage-free — peta gimana opsi di-price dan di mana relative value duduk.
4. **Financial time series** — Tsay (2010): ARMA/GARCH, kointegrasi, regime — buat baik sinyal maupun risiko.
5. **Stochastic control / viscosity solutions** — Pham (2009), Crandall & Lions (1983), Ngo & Pham, Almgren & Chriss (2001): sisi aksi.

**Sebagai disiplin.** Spesialisasi ke satu instrumen dan satu timeframe; baca lelangnya; tolak produk order-flow yang dipasarkan / diturunkan dan indikator jawaban-gampang; dan biarin ironi persona-nya nyaring imitasi low-effort. Material terdalam (folder MEGA, Medium, @insilicobunker) itu langkah *setelah* silabus — ambil dari pinned thread.

**Gimana dia berpadu.** Ini counterpart rigorous-quant dari edge praktisi [framework @Husslin_](item:husslin-framework) dan lapisan lebih dalam di bawah [metode @insiliconot](item:insilico-method). Kurikulumnya nunjuk langsung ke domain microstructure akademik — [Almgren-Chriss 2001](item:almgren-chriss-2000) eksekusi optimal ada di daftar bacaan, dan ide profil/impact itu wajah praktisi dari [price impact Kyle](item:kyle-1985) dan mekanika-pasar [O'Hara](item:ohara-1995).

**Batas jujur.** Pembacaan volume-profile itu framework, bukan prediktor — dia ngegambarin di mana perdagangan terjadi, dan acceptance/rejection itu pertimbangan, bukan sinyal. Kurikulum quant beneran susah (PDE/stochastic calculus graduate) dan itu jalur multi-tahun, bukan jalan pintas; dan material terdalam gak direproduksi di sini, jadi ini peta, bukan teritorinya.`
      }
    },
    {
      id: 'practice',
      heading: { en: 'Practice', id: 'Latihan' },
      body: {
        en: `**1.** People ask how to reconcile "conflicting" support/resistance from different profiles. What is the resolution?

<details><summary>Answer</summary>
There is no conflict once you specify WHICH auction you are trading. Volume profiles NEST across timeframes — one range's low is another range's mid — so a level only seems to conflict if you mix scales. Fix the timeframe/auction: use the intraday profile (its POC, value area, HVN/LVN) for a scalp, and the multi-day/composite profile for context. Read the profile of the auction you are actually trading, and the levels are consistent. Acceptance vs rejection is then judged within that fixed scale: volume building at a new level = acceptance (the auction is migrating); a fast wick with no volume = rejection (back toward value/POC).
</details>

**2.** Why sample bars by volume/range instead of the clock, and how does that express the same value as the rest of the method?

<details><summary>Answer</summary>
Time bars sample by the calendar: they over-sample dead periods (many near-identical bars) and under-sample bursts (one bar swallows a violent move). Closing bars on volume/range/ticks samples by ACTIVITY, so each bar carries roughly equal information, giving returns closer to normal with less heteroskedasticity — better statistical behaviour for any model on top (López de Prado, 2018). This expresses the method's core value: sample and decide by the underlying PROCESS (information / the auction) rather than by convenience (the clock or a fixed indicator). The volume profile reads where trade happened; non-time bars sample it correctly; both reject the clock-and-indicator default.
</details>

**3.** What are viscosity solutions, and which concrete trading problems do they solve?

<details><summary>Answer</summary>
Viscosity solutions (Crandall & Lions, 1983; the Crandall-Ishii-Lions 1992 "User's Guide") are the rigorous notion of a solution — generally non-smooth — to the nonlinear Hamilton-Jacobi-Bellman PDEs of STOCHASTIC OPTIMAL CONTROL, i.e. choosing the best action over time under uncertainty. They give the optimal action AS A FUNCTION OF STATE. Concrete trading problems: optimal EXECUTION (how aggressively to trade out of a position given impact and risk — Almgren-Chriss 2001), optimal STOPPING (when to exit), and optimal SWITCHING (when to flip a pairs trade — Ngo & Pham give the exact entry/exit bands for a mean-reverting spread). So the namesake signals that the method builds the ACTION side on real control theory, not heuristics — and it ties directly to the Almgren-Chriss module in the microstructure domain.
</details>

**4.** The persona is satirical. What is the responsible way to use this material, and what are its honest limits?

<details><summary>Answer</summary>
Separate the satire (packaging, a filter to screen out low-effort followers) from the substance (the chart method + the canonical reading list). Use the public material as a MAP — read the auction, sample by information, then climb the syllabus (profiles → bars → vol surface → time series → stochastic control) — not as a turnkey system. Honest limits: (1) volume-profile reading is a descriptive framework, not a predictor — acceptance/rejection is judgement, not a signal; (2) the quant curriculum is genuinely graduate-level (PDEs, stochastic calculus) and a multi-year path, not a shortcut; (3) the deepest material lives in his folders/Telegram/Medium and is not reproduced here, so this is a map, not the territory. The discipline — specialise, read the auction, refuse easy answers — is the real content.
</details>`,
        id: `**1.** Orang nanya gimana ngerekonsiliasi support/resistance "konflik" dari profil berbeda. Apa resolusinya?

<details><summary>Jawaban</summary>
Gak ada konflik begitu kamu spesifikasiin LELANG mana yang kamu trade. Volume profile BERSARANG lintas timeframe — low satu range itu mid range lain — jadi level cuma keliatan konflik kalau kamu campur skala. Fix timeframe/lelang: pakai profil intraday (POC, value area, HVN/LVN-nya) buat scalp, dan profil multi-hari/composite buat konteks. Baca profil lelang yang kamu beneran trade, dan level-nya konsisten. Acceptance vs rejection lalu dinilai dalam skala tetap itu: volume nambah di level baru = acceptance (lelang migrasi); wick cepat tanpa volume = rejection (balik menuju value/POC).
</details>

**2.** Kenapa nyampel bar berdasar volume/range bukan jam, dan gimana itu ngungkapin nilai yang sama kayak sisa metodenya?

<details><summary>Jawaban</summary>
Bar waktu nyampel berdasar kalender: over-sample periode mati (banyak bar nyaris-identik) dan under-sample ledakan (satu bar nelen gerakan keras). Nutup bar pada volume/range/tick nyampel berdasar AKTIVITAS, jadi tiap bar bawa informasi kira-kira sama, ngasih return lebih dekat normal dengan lebih sedikit heteroskedastisitas — perilaku statistik lebih baik buat model apa pun di atas (López de Prado, 2018). Ini ngungkapin nilai inti metodenya: sampel dan putusin berdasar PROSES yang mendasari (informasi / lelang) bukan berdasar kenyamanan (jam atau indikator tetap). Volume profile baca di mana perdagangan terjadi; bar non-waktu nyampelnya dengan benar; keduanya nolak default jam-dan-indikator.
</details>

**3.** Apa itu viscosity solutions, dan masalah trading konkret mana yang mereka selesaikan?

<details><summary>Jawaban</summary>
Viscosity solutions (Crandall & Lions, 1983; "User's Guide" Crandall-Ishii-Lions 1992) itu gagasan solusi rigorous — umumnya non-smooth — ke PDE Hamilton-Jacobi-Bellman nonlinear dari STOCHASTIC OPTIMAL CONTROL, yaitu milih aksi terbaik over time di bawah ketidakpastian. Mereka ngasih aksi optimal SEBAGAI FUNGSI STATE. Masalah trading konkret: EKSEKUSI optimal (seberapa agresif trade keluar dari posisi diberi impact dan risiko — Almgren-Chriss 2001), STOPPING optimal (kapan keluar), dan SWITCHING optimal (kapan flip pairs trade — Ngo & Pham ngasih band entry/exit persis buat spread mean-reverting). Jadi senama-nya nandain bahwa metodenya bangun sisi AKSI di teori kontrol nyata, bukan heuristik — dan dia ngiket langsung ke module Almgren-Chriss di domain microstructure.
</details>

**4.** Persona-nya satir. Apa cara bertanggung jawab pakai material ini, dan apa batas jujurnya?

<details><summary>Jawaban</summary>
Pisahin satir-nya (kemasan, filter buat nyaring follower low-effort) dari substansinya (metode chart + daftar bacaan kanonik). Pakai material publik sebagai PETA — baca lelangnya, sampel berdasar informasi, terus naik silabus (profil → bar → vol surface → time series → stochastic control) — bukan sebagai sistem turnkey. Batas jujur: (1) pembacaan volume-profile itu framework deskriptif, bukan prediktor — acceptance/rejection itu pertimbangan, bukan sinyal; (2) kurikulum quant beneran level-graduate (PDE, stochastic calculus) dan jalur multi-tahun, bukan jalan pintas; (3) material terdalam ada di folder/Telegram/Medium-nya dan gak direproduksi di sini, jadi ini peta, bukan teritorinya. Disiplinnya — spesialisasi, baca lelangnya, tolak jawaban gampang — itu konten sebenarnya.
</details>`
      }
    },
    {
      id: 'connections',
      heading: { en: 'Connections', id: 'Koneksi' },
      body: {
        en: `- **Parent method**: [The @insiliconot method](item:insilico-method) — this deep-dive expands its profile-reading and quant-curriculum parts.
- **The practitioner counterpart**: [The @Husslin_ framework](item:husslin-framework) — timing/positioning edges; Insilico is the profile-and-optimal-control rigor.
- **Optimal execution (on the reading list)**: [Almgren-Chriss 2001](item:almgren-chriss-2000) — the execution model in the viscosity-solutions curriculum.
- **Price impact & market mechanics**: [Kyle 1985](item:kyle-1985) (why pockets move price fast) and [O'Hara 1995](item:ohara-1995) (the microstructure theory beneath the auction view).`,
        id: `- **Metode induk**: [Metode @insiliconot](item:insilico-method) — deep-dive ini ngeperluas bagian pembacaan-profil dan kurikulum-quant-nya.
- **Counterpart praktisinya**: [Framework @Husslin_](item:husslin-framework) — edge timing/positioning; Insilico itu rigor profil-dan-optimal-control.
- **Eksekusi optimal (di daftar bacaan)**: [Almgren-Chriss 2001](item:almgren-chriss-2000) — model eksekusi di kurikulum viscosity-solutions.
- **Price impact & mekanika pasar**: [Kyle 1985](item:kyle-1985) (kenapa pocket nggerakin harga cepat) dan [O'Hara 1995](item:ohara-1995) (teori microstructure di bawah pandangan lelang).`
      }
    },
    {
      id: 'sources',
      heading: { en: 'Sources', id: 'Sumber' },
      body: {
        en: `Primary (practitioner): @insiliconot "Charts & Quant Curriculum" deep-dive + pinned thread + MEGA / Medium / @insilicobunker (deepest material NOT reproduced). Compiled by Az; educational, not financial advice.
- **Steidlmayer** (1984). *Market Profile* (CBOT). **Dalton, Jones & Dalton** (2007). *Markets in Profile* (also *Mind Over Markets*). Wiley.
- **López de Prado** (2018). *Advances in Financial Machine Learning.* Wiley. (Non-time bars.)
- **Crandall & Lions** (1983), and **Crandall, Ishii & Lions** (1992) "User's Guide." **Pham** (2009). **Ngo & Pham** (pairs trading). **Almgren & Chriss** (2001) — optimal execution (in the microstructure domain).
- **Gatheral** (2006). *The Volatility Surface.* Wiley. **Tsay** (2010). *Analysis of Financial Time Series.* Wiley. **Harris** (2003). *Trading and Exchanges.* Oxford UP.`,
        id: `Primer (praktisi): deep-dive "Charts & Quant Curriculum" @insiliconot + pinned thread + MEGA / Medium / @insilicobunker (material terdalam GAK direproduksi). Dikompilasi Az; edukatif, bukan nasihat keuangan.
- **Steidlmayer** (1984). *Market Profile* (CBOT). **Dalton, Jones & Dalton** (2007). *Markets in Profile* (juga *Mind Over Markets*). Wiley.
- **López de Prado** (2018). *Advances in Financial Machine Learning.* Wiley. (Bar non-waktu.)
- **Crandall & Lions** (1983), dan **Crandall, Ishii & Lions** (1992) "User's Guide." **Pham** (2009). **Ngo & Pham** (pairs trading). **Almgren & Chriss** (2001) — eksekusi optimal (di domain microstructure).
- **Gatheral** (2006). *The Volatility Surface.* Wiley. **Tsay** (2010). *Analysis of Financial Time Series.* Wiley. **Harris** (2003). *Trading and Exchanges.* Oxford UP.`
      }
    },
  ],

  audio: { enabled: true },

  selfTest: [
    {
      sectionId: 'intuition',
      question: { en: `What does a volume profile show that a price-over-time chart does not, and how do you resolve "conflicting" levels across nested profiles?`, id: `Apa yang volume profile nunjukin yang chart harga-over-time gak, dan gimana kamu nyelesaiin level "konflik" lintas profil bersarang?` },
      prompt: { en: 'Before continuing, try answering:', id: 'Sebelum lanjut, coba jawab:' },
      answer: {
        en: `A volume profile plots how much volume traded at each PRICE (a horizontal histogram), answering "where did the market actually do business?" rather than "what was the close?". It surfaces the POC (most-traded price, a magnet), the value area (~70% of volume, "fair"), high-volume nodes (acceptance / S-R) and low-volume "pockets" (rejected prices price travels through fast) — structure invisible on an OHLC chart. "Conflicting" levels are resolved by fixing WHICH auction/timeframe you are trading: profiles nest across scales (one range's low is another's mid), so you read the intraday profile for a scalp and the composite for context and never blend scales. Within that fixed scale, acceptance (volume building at a new level) vs rejection (a fast wick with no volume) is then unambiguous.`,
        id: `Volume profile ngeplot berapa banyak volume yang diperdagangkan di tiap HARGA (histogram horizontal), ngejawab "di mana pasar beneran berbisnis?" bukan "apa close-nya?". Dia ngemunculin POC (harga paling-diperdagangkan, magnet), value area (~70% volume, "fair"), high-volume node (acceptance / S-R) dan "pocket" low-volume (harga ditolak yang harga travel lewat cepat) — struktur yang gak keliatan di chart OHLC. Level "konflik" diselesaikan dengan nge-fix LELANG/timeframe mana yang kamu trade: profil bersarang lintas skala (low satu range itu mid yang lain), jadi kamu baca profil intraday buat scalp dan composite buat konteks dan gak pernah campur skala. Dalam skala tetap itu, acceptance (volume nambah di level baru) vs rejection (wick cepat tanpa volume) lalu gak ambigu.`
      }
    },
    {
      sectionId: 'formalization',
      question: { en: `Connect non-time bars and viscosity solutions to the method's single underlying value, and name the concrete trading problems viscosity solutions solve.`, id: `Hubungkan bar non-waktu dan viscosity solutions ke satu nilai mendasari metodenya, dan sebutin masalah trading konkret yang viscosity solutions selesaikan.` },
      prompt: { en: 'Before continuing, try answering:', id: 'Sebelum lanjut, coba jawab:' },
      answer: {
        en: `Both express "sample and decide by the underlying PROCESS, not by convenience." Non-time bars close on volume/range/ticks (information/activity) rather than the clock, so each bar carries roughly equal information and returns behave better statistically (López de Prado, 2018) — sampling by the process, not the calendar. Viscosity solutions provide the rigorous solution to the Hamilton-Jacobi-Bellman PDEs of stochastic optimal control, giving the optimal ACTION as a function of state rather than a heuristic rule — deciding by the process, not a fixed indicator. The concrete problems they solve: optimal EXECUTION (trade out against impact/risk — Almgren-Chriss 2001), optimal STOPPING (when to exit), and optimal SWITCHING / pairs-trading entry-exit bands (Ngo & Pham). Together: read the auction (profile), sample it right (non-time bars), and act optimally (control theory).`,
        id: `Keduanya ngungkapin "sampel dan putusin berdasar PROSES yang mendasari, bukan berdasar kenyamanan." Bar non-waktu nutup pada volume/range/tick (informasi/aktivitas) bukan jam, jadi tiap bar bawa informasi kira-kira sama dan return berperilaku lebih baik secara statistik (López de Prado, 2018) — nyampel berdasar proses, bukan kalender. Viscosity solutions nyediain solusi rigorous ke PDE Hamilton-Jacobi-Bellman dari stochastic optimal control, ngasih AKSI optimal sebagai fungsi state bukan aturan heuristik — mutusin berdasar proses, bukan indikator tetap. Masalah konkret yang mereka selesaikan: EKSEKUSI optimal (trade keluar lawan impact/risiko — Almgren-Chriss 2001), STOPPING optimal (kapan keluar), dan SWITCHING optimal / band entry-exit pairs-trading (Ngo & Pham). Bareng: baca lelang (profil), sampel dengan benar (bar non-waktu), dan bertindak optimal (teori kontrol).`
      }
    },
    {
      sectionId: 'applications',
      question: { en: `How does this curriculum connect the trading domain to the academic microstructure domain, and what are its honest limits?`, id: `Gimana kurikulum ini nyambungin domain trading ke domain microstructure akademik, dan apa batas jujurnya?` },
      prompt: { en: 'Before continuing, try answering:', id: 'Sebelum lanjut, coba jawab:' },
      answer: {
        en: `It connects them directly: Almgren-Chriss optimal execution — a module in the microstructure domain — is literally on the viscosity-solutions reading list, and the profile/impact ideas are the practitioner face of Kyle's price impact (why thin pockets move price fast) and O'Hara's microstructure theory (the auction/participant view). So the trading domain's quant deep-dive and the academic modules are two ends of one body of knowledge. Honest limits: volume-profile reading is a DESCRIPTIVE framework, not a predictor — acceptance/rejection is judgement, not a signal; the quant curriculum is genuinely graduate-level (PDEs, stochastic calculus), a multi-year path rather than a shortcut; and the deepest material lives in the author's folders/Telegram/Medium and is not reproduced here, so this is a map to the method and sources, not the territory.`,
        id: `Dia nyambungin mereka langsung: eksekusi optimal Almgren-Chriss — module di domain microstructure — harfiah ada di daftar bacaan viscosity-solutions, dan ide profil/impact itu wajah praktisi dari price impact Kyle (kenapa pocket tipis nggerakin harga cepat) dan teori microstructure O'Hara (pandangan lelang/partisipan). Jadi deep-dive quant domain trading dan module akademik itu dua ujung satu tubuh pengetahuan. Batas jujur: pembacaan volume-profile itu framework DESKRIPTIF, bukan prediktor — acceptance/rejection itu pertimbangan, bukan sinyal; kurikulum quant beneran level-graduate (PDE, stochastic calculus), jalur multi-tahun bukan jalan pintas; dan material terdalam ada di folder/Telegram/Medium penulis dan gak direproduksi di sini, jadi ini peta ke metode dan sumber, bukan teritorinya.`
      }
    },
  ],
};
