// ─────────────────────────────────────────────────────────────────────────
// Trading domain — ATTRIBUTED lessons, compiled by Az from public material
// (X threads + shared resources). NOT financial advice; NOT asserted as fact.
// The @insiliconot persona is satirical; the quant is serious. The deepest
// material (MEGA folders, Telegram @insilicobunker, Medium) is NOT reproduced
// here — this captures the method and the canonical sources he points to.
// Evidence: [Established] standard text/paper · [Practitioner] · [His].
// ─────────────────────────────────────────────────────────────────────────

export const CONTENT = {
  itemId: 'insilico-method',
  estimatedReadMinutes: 30,

  author: {
    fullName: { en: 'Insilico — @insiliconot (Viscosity Solutions)', id: 'Insilico — @insiliconot (Viscosity Solutions)' },
    affiliation: {
      en: `"Insilico, very poor & very stupid", aka Viscosity Solution; founder @InsilicoTrading. A rigorous intraday-BTC quant operating behind a satirical "market broom" persona; teaches via a pinned thread, MEGA folders, a Medium ("Viscosity Solutions"), and a Telegram archive (@insilicobunker). (Per public posts; the persona is satire, the quant is serious.)`,
      id: `"Insilico, very poor & very stupid", alias Viscosity Solution; founder @InsilicoTrading. Quant intraday-BTC yang rigorous beroperasi di balik persona "sapu pasar" satir; ngajar lewat pinned thread, folder MEGA, Medium ("Viscosity Solutions"), dan arsip Telegram (@insilicobunker). (Dari postingan publik; persona-nya satir, quant-nya serius.)`
    },
    tagline: {
      en: `Read the auction, not the candle: where did volume trade (the profile), which participant archetype is driving, and what does the optimal-control math actually say. Rigor over hype; specialise ruthlessly.`,
      id: `Baca lelangnya, bukan candle-nya: di mana volume diperdagangkan (profil-nya), arketipe partisipan mana yang ngedorong, dan apa yang matematika optimal-control sebenarnya bilang. Rigor di atas hype; spesialisasi tanpa ampun.`
    },
    bio: {
      en: `@insiliconot is a self-deprecating, satirical persona wrapped around a genuinely rigorous quantitative approach to intraday Bitcoin. The public method has two layers: a practical reading of the **volume/market profile** (where trade actually happened, and therefore where price is accepted or rejected) and a serious **quant curriculum** rooted in stochastic optimal control — "viscosity solutions" being the mathematical namesake. This module captures the method and the canonical sources; the deepest material lives in folders and a Telegram archive that are not reproduced here.

⟦Note: synthesis of public posts, compiled by Az. Educational, not financial advice; not affiliated. The persona's irony is, by his own account, a filter to screen out low-effort followers — do not mistake the satire for the substance.⟧`,
      id: `@insiliconot itu persona satir yang merendahkan-diri yang ngebungkus pendekatan kuantitatif yang beneran rigorous ke Bitcoin intraday. Metode publiknya punya dua lapis: pembacaan praktis dari **volume/market profile** (di mana perdagangan beneran terjadi, dan karenanya di mana harga diterima atau ditolak) dan **kurikulum quant** serius yang berakar di stochastic optimal control — "viscosity solutions" jadi senama matematisnya. Module ini nangkep metode dan sumber kanoniknya; material terdalam ada di folder dan arsip Telegram yang gak direproduksi di sini.

⟦Catatan: sintesis postingan publik, dikompilasi Az. Edukatif, bukan nasihat keuangan; gak berafiliasi. Ironi persona-nya, menurut pengakuannya sendiri, itu filter buat nyaring follower yang low-effort — jangan salahin satir-nya buat substansinya.⟧`
    },
    focus: {
      en: `The method starts by replacing the price chart with the **profile**: a histogram of volume across price that reveals the point of control (POC, the most-traded price — a magnet), the value area (where most volume traded — "fair"), high-volume nodes (acceptance / support-resistance), and low-volume "pockets" (rejected prices through which price travels fast). On top of that, you classify *who* is trading — four participant archetypes with very different sizes and behaviours — and ask which is driving the current move. The quant layer formalises the *action* side: optimal execution, optimal stopping/switching, and pairs trading via stochastic control and viscosity solutions; volatility-surface modelling; and financial time-series analysis.`,
      id: `Metodenya mulai dengan ngeganti price chart dengan **profil**: histogram volume lintas harga yang ngungkap point of control (POC, harga paling-diperdagangkan — magnet), value area (di mana mayoritas volume diperdagangkan — "fair"), high-volume node (acceptance / support-resistance), dan "pocket" low-volume (harga ditolak yang harganya lewat dengan cepat). Di atas itu, kamu klasifikasi *siapa* yang trading — empat arketipe partisipan dengan ukuran dan perilaku sangat beda — dan nanya yang mana ngedorong gerakan sekarang. Lapisan quant ngeformalin sisi *aksi*: eksekusi optimal, optimal stopping/switching, dan pairs trading via stochastic control dan viscosity solutions; pemodelan volatility-surface; dan analisis financial time-series.`
    },
    intellectualLineage: {
      en: `The profile-reading descends from **market profile** — [Established] Steidlmayer (1984), whose original CBOT construct is the *time*-at-price TPO (Time Price Opportunity) distribution; the **volume profile** the method actually reads (a histogram of *traded volume* across price, with POC / value area / HVN / LVN) is the closely related volume-based derivative — and Dalton, Jones & Dalton (2007). The bar-construction discipline (close bars on volume/range/activity, not the clock) is [Established] López de Prado (2018), *Advances in Financial Machine Learning*. The quant namesake is **viscosity solutions** of Hamilton-Jacobi-Bellman equations — [Established] Crandall & Lions (1983) — the rigorous notion of a solution to the nonlinear PDEs of stochastic optimal control, applied to trading via [Established] Pham (2009), Ngo & Pham (2016, optimal switching for pairs trading), and [Established] Almgren & Chriss (2001, optimal execution). Volatility-surface modelling is [Established] Gatheral (2006); financial time series is [Established] Tsay (2010).`,
      id: `Pembacaan-profil turun dari **market profile** — [Established] Steidlmayer (1984), yang konstruksi CBOT aslinya itu distribusi TPO (Time Price Opportunity) *waktu*-di-harga; **volume profile** yang metodenya beneran baca (histogram *volume yang diperdagangkan* lintas harga, dengan POC / value area / HVN / LVN) itu turunan berbasis-volume yang sangat terkait — dan Dalton, Jones & Dalton (2007). Disiplin konstruksi-bar (tutup bar pada volume/range/aktivitas, bukan jam) itu [Established] López de Prado (2018), *Advances in Financial Machine Learning*. Senama quant-nya itu **viscosity solutions** dari persamaan Hamilton-Jacobi-Bellman — [Established] Crandall & Lions (1983) — notasi rigorous dari solusi ke PDE nonlinear stochastic optimal control, diterapin ke trading via [Established] Pham (2009), Ngo & Pham (2016, optimal switching buat pairs trading), dan [Established] Almgren & Chriss (2001, eksekusi optimal). Pemodelan volatility-surface itu [Established] Gatheral (2006); financial time series itu [Established] Tsay (2010).`
    },
    keyCollaborators: {
      en: `Taught mostly solo across an X account, downloadable MEGA folders (time-series · vol-surface · "occult"/advanced), a Medium long-form, and a Telegram educational archive (@insilicobunker). The canonical reading list — Steidlmayer/Dalton (profile), López de Prado (bars/ML), Gatheral (vol surface), Tsay (time series), Crandall-Lions/Pham (stochastic control), Almgren-Chriss (execution), Harris (market mechanics) — is the de-facto "syllabus" he points students to.`,
      id: `Diajar kebanyakan solo lintas akun X, folder MEGA yang bisa-diunduh (time-series · vol-surface · "occult"/lanjutan), Medium long-form, dan arsip edukatif Telegram (@insilicobunker). Daftar bacaan kanonik — Steidlmayer/Dalton (profil), López de Prado (bar/ML), Gatheral (vol surface), Tsay (time series), Crandall-Lions/Pham (stochastic control), Almgren-Chriss (eksekusi), Harris (mekanika pasar) — itu "silabus" de-facto yang dia tunjuk ke murid.`
    },
    legacy: {
      en: `The transferable lesson is *epistemic discipline*: specialise to one instrument and one timeframe; read where trade actually happened rather than where indicators say it should; distrust marketed/derived "order-flow" data and easy-answer signals; and build the action side on real optimal-control math rather than heuristics. It is a deliberately narrow, rigorous counterweight to the broad pattern-matching most retail trading runs on — and its reading list doubles as a serious self-study path into quant.`,
      id: `Pelajaran yang bisa-ditransfer itu *disiplin epistemik*: spesialisasi ke satu instrumen dan satu timeframe; baca di mana perdagangan beneran terjadi bukan di mana indikator bilang harusnya; gak percaya data "order-flow" yang dipasarkan/diturunkan dan sinyal jawaban-gampang; dan bangun sisi aksi di matematika optimal-control nyata bukan heuristik. Itu penyeimbang yang sengaja sempit, rigorous buat pencocokan-pola luas yang kebanyakan trading retail jalanin — dan daftar bacaannya sekaligus jadi jalur self-study serius ke quant.`
    },
    keyWorks: [
      { year: 2007, title: 'Markets in Profile (Dalton, Jones & Dalton) — POC, value area, acceptance/rejection', venue: 'Wiley' },
      { year: 2018, title: 'Advances in Financial Machine Learning (López de Prado) — non-time (volume/range) bars & ML discipline', venue: 'Wiley' },
      { year: 1983, title: 'Viscosity Solutions of Hamilton-Jacobi Equations (Crandall & Lions) — the namesake; solutions to stochastic-control PDEs', venue: 'Trans. AMS 277, 1–42' },
      { year: 2009, title: 'Continuous-time Stochastic Control and Optimization with Financial Applications (Pham)', venue: 'Springer' },
      { year: 2006, title: 'The Volatility Surface (Gatheral) — skew, term structure, arbitrage-free dynamics', venue: 'Wiley' },
    ],
  },

  sections: [
    // ─────────────── 1. motivation ───────────────
    {
      id: 'motivation',
      heading: { en: 'Why this matters', id: 'Kenapa ini penting' },
      body: {
        en: `Most charts plot price against the *clock* and decorate it with indicators. This method throws both assumptions out. It says: look at **where volume actually traded** (the profile), figure out **who is trading** (participant archetypes), and build your decisions on **real optimal-control mathematics** rather than indicator folklore. The persona is satirical — "very poor & very stupid", a self-described market broom — but that irony is a deliberate filter; the underlying quant is serious and rooted in standard texts.

Two ideas anchor the approach:

- **The auction, not the candle.** A market is a continuous auction. The most informative object is not the OHLC bar but the *distribution of traded volume across price*: the most-traded price (POC) acts as a magnet, a "fair" value area (conventionally the band holding ~70% of volume, ≈1 std dev around the POC) anchors agreed value, and thin "pockets" mark prices the market rejected and travels through quickly. This volume-at-price view is the volume-based descendant of Steidlmayer's (1984) time-based market profile (TPO). [Established] Steidlmayer (1984); Dalton et al. (2007).
- **Rigor and skepticism over hype.** Specialise to one instrument and one timeframe (his is intraday BTC, no altcoins); distrust marketed or derived "order-flow" products and any indicator that promises an easy answer; and when you model the *action* (when to enter, exit, switch, execute), use the actual mathematics of optimal control rather than heuristics. [Established] López de Prado (2018).

⟦Disclaimer: an attributed synthesis of a public quant's method, compiled for study — not financial advice, not affiliated, and explicitly NOT a reproduction of his private/deep material (which lives in folders and a Telegram archive). Treat it as a map to the canonical sources and a method, not a system.⟧`,
        id: `Kebanyakan chart ngeplot harga lawan *jam* dan menghiasinya dengan indikator. Metode ini ngebuang dua asumsi itu. Dia bilang: liat **di mana volume beneran diperdagangkan** (profil-nya), cari tau **siapa yang trading** (arketipe partisipan), dan bangun keputusanmu di **matematika optimal-control nyata** bukan folklor indikator. Persona-nya satir — "very poor & very stupid", sapu pasar yang dideskripsikan-sendiri — tapi ironi itu filter yang disengaja; quant yang mendasari serius dan berakar di teks standar.

Dua ide ngejangkar pendekatannya:

- **Lelangnya, bukan candle-nya.** Pasar itu lelang kontinu. Objek paling informatif bukan bar OHLC tapi *distribusi volume yang diperdagangkan lintas harga*: harga paling-diperdagangkan (POC) berperan kayak magnet, value area "fair" (konvensionalnya band yang nahan ~70% volume, ≈1 std dev di sekitar POC) ngejangkar value yang disepakati, dan "pocket" tipis nandain harga yang pasar tolak dan lewati dengan cepat. Pandangan volume-di-harga ini itu turunan berbasis-volume dari market profile berbasis-waktu (TPO) Steidlmayer (1984). [Established] Steidlmayer (1984); Dalton dkk. (2007).
- **Rigor dan skeptisisme di atas hype.** Spesialisasi ke satu instrumen dan satu timeframe (dia intraday BTC, gak ada altcoin); gak percaya produk "order-flow" yang dipasarkan atau diturunkan dan indikator apa pun yang janjiin jawaban gampang; dan pas memodelkan *aksi* (kapan masuk, keluar, switch, eksekusi), pakai matematika optimal-control yang sebenarnya bukan heuristik. [Established] López de Prado (2018).

⟦Disclaimer: sintesis teratribusi dari metode quant publik, dikompilasi buat belajar — bukan nasihat keuangan, gak berafiliasi, dan eksplisit BUKAN reproduksi material privat/dalam-nya (yang ada di folder dan arsip Telegram). Perlakukan sebagai peta ke sumber kanonik dan metode, bukan sistem.⟧`
      }
    },

    // ─────────────── 2. intuition ───────────────
    {
      id: 'intuition',
      heading: { en: 'Intuition: profiles & participants', id: 'Intuisi: profil & partisipan' },
      body: {
        en: `**Read the "salad" profile.** Stack the traded volume at each price into a horizontal histogram and the market's structure appears:
- **POC (point of control):** the single most-traded price — a *magnet* that price tends to return to.
- **Value area:** the price band containing the bulk of volume — by convention ~70% of it (≈1 std dev around the POC) — where the market agrees value *is* (fair). Trading inside it is acceptance; leaving it is a decision.
- **High-volume nodes (HVN):** thick shelves of volume — acceptance zones that act as support/resistance.
- **Low-volume nodes (LVN) / "pockets":** thin gaps — prices the market *rejected*, so price travels through them fast. Pockets are where moves accelerate.

When nested ranges conflict (a profile within a profile within a profile), you resolve it by **fixing the timeframe / auction you are actually trading** — the profile is scale-relative, so pick your scale and read that one.

**Classify the participant driving the move.** Four archetypes, with very different size and predictability:
1. **Mechanical intraday** (gamma-squeeze / VWAP / gap-fill / volume-pocket traders) — the biggest size and most mechanical; *watch these most*.
2. **Compounders / never-sell** — a slow, price-insensitive base.
3. **Macro-beta / momentum** — trend and beta chasers.
4. **Low-info YOLO / FOMO** — the harvested liquidity.

The operative question on any move is: *which archetype is driving this, and at what size?* A move led by mechanical intraday flow into a low-volume pocket is a very different trade from a FOMO push into a high-volume shelf.`,
        id: `**Baca profil "salad".** Tumpuk volume yang diperdagangkan di tiap harga jadi histogram horizontal dan struktur pasar muncul:
- **POC (point of control):** satu harga paling-diperdagangkan — *magnet* yang harga cenderung balik ke situ.
- **Value area:** band harga yang ngandung mayoritas volume — konvensionalnya ~70% darinya (≈1 std dev di sekitar POC) — di mana pasar setuju value *itu* (fair). Trading di dalamnya itu acceptance; ninggalinnya itu keputusan.
- **High-volume node (HVN):** rak volume tebal — zona acceptance yang berperan sebagai support/resistance.
- **Low-volume node (LVN) / "pocket":** gap tipis — harga yang pasar *tolak*, jadi harga lewat dengan cepat. Pocket itu di mana gerakan berakselerasi.

Pas range bersarang konflik (profil di dalam profil di dalam profil), kamu nyelesaiinnya dengan **nge-fix timeframe / lelang yang kamu beneran trade** — profil itu relatif-skala, jadi pilih skala-mu dan baca yang itu.

**Klasifikasi partisipan yang ngedorong gerakan.** Empat arketipe, dengan ukuran dan prediktabilitas sangat beda:
1. **Mekanis intraday** (trader gamma-squeeze / VWAP / gap-fill / volume-pocket) — size terbesar dan paling mekanis; *awasi ini paling banyak*.
2. **Compounder / never-sell** — basis lambat, tidak-sensitif-harga.
3. **Macro-beta / momentum** — pengejar trend dan beta.
4. **Low-info YOLO / FOMO** — likuiditas yang dipanen.

Pertanyaan operatifnya di gerakan apa pun: *arketipe mana yang ngedorong ini, dan di size berapa?* Gerakan yang dipimpin flow mekanis intraday ke low-volume pocket itu trade yang sangat beda dari dorongan FOMO ke high-volume shelf.`
      }
    },

    // ─────────────── 3. formalization ───────────────
    {
      id: 'formalization',
      heading: { en: 'Non-time bars & the quant curriculum', id: 'Bar non-waktu & kurikulum quant' },
      body: {
        en: `**Sample by information, not by the clock.** Standard candles close every fixed time interval, which over-samples quiet periods and under-samples bursts. The discipline is to close bars on **volume, range, or activity** instead — so each bar carries roughly equal information, returns are closer to i.i.d., and the statistical picture is cleaner. [Established] López de Prado (2018), *Advances in Financial Machine Learning* (tick/volume/dollar/imbalance bars).

**The quant curriculum (the "action" side).** The method's namesake is **viscosity solutions** — the rigorous notion of a (generally non-smooth) solution to the Hamilton-Jacobi-Bellman PDEs that arise in stochastic optimal control. [Established] Crandall & Lions (1983). The trading applications:
- **Optimal execution** — minimise the cost of trading a position over time against impact and risk. [Established] Almgren & Chriss (2001) — *the same Almgren-Chriss model that is a module in the microstructure domain.*
- **Optimal stopping / switching** — when to enter, exit, or flip a position; pairs trading is the canonical case. [Established] Pham (2009); Ngo & Pham (2016).
- **Volatility-surface modelling** — the skew and term structure of implied vol and its arbitrage-free dynamics. [Established] Gatheral (2006).
- **Financial time series** — ARMA/GARCH, cointegration, and regime models, for both the signal and the risk. [Established] Tsay (2010).

**Scope and skepticism (the method, not just the math).** Intraday BTC only; no altcoins. A documented distrust of marketed or derived "order-flow" datasets and of any indicator that offers an easy answer — the rigor is partly *what you refuse to use*. [His] / [Practitioner].`,
        id: `**Sampel berdasar informasi, bukan jam.** Candle standar nutup tiap interval waktu tetap, yang over-sample periode tenang dan under-sample ledakan. Disiplinnya itu nutup bar pada **volume, range, atau aktivitas** sebagai gantinya — jadi tiap bar bawa informasi kira-kira sama, return lebih dekat i.i.d., dan gambaran statistiknya lebih bersih. [Established] López de Prado (2018), *Advances in Financial Machine Learning* (tick/volume/dollar/imbalance bar).

**Kurikulum quant (sisi "aksi").** Senama metodenya itu **viscosity solutions** — notasi rigorous dari solusi (umumnya non-smooth) ke PDE Hamilton-Jacobi-Bellman yang muncul di stochastic optimal control. [Established] Crandall & Lions (1983). Aplikasi trading-nya:
- **Eksekusi optimal** — minimalin biaya nge-trade posisi over time lawan impact dan risiko. [Established] Almgren & Chriss (2001) — *model Almgren-Chriss yang sama yang jadi module di domain microstructure.*
- **Optimal stopping / switching** — kapan masuk, keluar, atau flip posisi; pairs trading itu kasus kanoniknya. [Established] Pham (2009); Ngo & Pham (2016).
- **Pemodelan volatility-surface** — skew dan term structure implied vol dan dinamika arbitrage-free-nya. [Established] Gatheral (2006).
- **Financial time series** — ARMA/GARCH, kointegrasi, dan model regime, buat baik sinyal maupun risiko. [Established] Tsay (2010).

**Scope dan skeptisisme (metodenya, bukan cuma matematikanya).** Intraday BTC doang; gak ada altcoin. Ketidakpercayaan terdokumentasi pada dataset "order-flow" yang dipasarkan atau diturunkan dan pada indikator apa pun yang nawarin jawaban gampang — rigor-nya sebagian *apa yang kamu nolak pakai*. [His] / [Practitioner].`
      }
    },

    // ─────────────── 4. worked-example ───────────────
    {
      id: 'worked-example',
      heading: { en: 'Worked example: reading a profile', id: 'Contoh: membaca profil' },
      body: {
        en: `**Reading an intraday BTC session (illustrative).**

1. **Build the profile.** Aggregate the session's traded volume by price. You get a fat shelf (the value area) around a peak (the POC), with a thin gap (an LVN pocket) above it and another HVN shelf higher still.
2. **Locate the magnets and barriers.** The POC is where price wants to return; the value-area edges are acceptance/rejection boundaries; the LVN pocket is a fast-travel zone; the upper HVN is the next acceptance shelf (likely resistance).
3. **Frame the auction.** Price is sitting near the value-area high. Two clean hypotheses: (a) rejection back toward the POC (failure to accept higher), or (b) acceptance through the LVN pocket — and because the pocket is thin, *if* price enters it, it should move fast to the next HVN.
4. **Identify the driver.** Ask which participant archetype is pushing. If it is mechanical intraday flow (e.g. a VWAP/gap-fill program) into the pocket, the move is more likely to follow through to the upper HVN; if it is thin FOMO into the value-area high, it is more likely to be rejected back to the POC.
5. **Resolve nesting if needed.** If a higher-timeframe profile disagrees, fix the auction you are trading (the intraday one) and read that profile; do not blend scales.

**The read.** The trade is conditional on *structure* (pocket vs shelf) and *driver* (which archetype, what size), not on a candlestick pattern. The action side — how aggressively to enter and exit — is where the optimal-execution / stopping math belongs.

⟦Disclaimer: illustrative method, not a signal or recommendation. Profiles describe where trade happened; they do not predict the future on their own.⟧`,
        id: `**Membaca sesi BTC intraday (ilustratif).**

1. **Bangun profilnya.** Agregat volume yang diperdagangkan sesi itu berdasar harga. Kamu dapet shelf gemuk (value area) di sekitar puncak (POC), dengan gap tipis (pocket LVN) di atasnya dan shelf HVN lain lebih tinggi lagi.
2. **Lokasiin magnet dan barrier.** POC itu di mana harga mau balik; tepi value-area itu batas acceptance/rejection; pocket LVN itu zona fast-travel; HVN atas itu shelf acceptance berikutnya (kemungkinan resistance).
3. **Frame lelangnya.** Harga duduk dekat value-area high. Dua hipotesis bersih: (a) rejection balik menuju POC (gagal nerima lebih tinggi), atau (b) acceptance lewat pocket LVN — dan karena pocket-nya tipis, *kalau* harga masuk, dia harusnya gerak cepat ke HVN berikutnya.
4. **Identifikasi pendorong.** Tanya arketipe partisipan mana yang ndorong. Kalau itu flow mekanis intraday (misal program VWAP/gap-fill) ke pocket, gerakannya lebih mungkin follow-through ke HVN atas; kalau itu FOMO tipis ke value-area high, dia lebih mungkin ditolak balik ke POC.
5. **Selesaiin nesting kalau perlu.** Kalau profil timeframe-tinggi gak setuju, fix lelang yang kamu trade (yang intraday) dan baca profil itu; jangan campur skala.

**Bacaannya.** Trade-nya kondisional pada *struktur* (pocket vs shelf) dan *pendorong* (arketipe mana, size berapa), bukan pada pola candlestick. Sisi aksi — seberapa agresif masuk dan keluar — itu di mana matematika optimal-execution / stopping berada.

⟦Disclaimer: metode ilustratif, bukan sinyal atau rekomendasi. Profil ngegambarin di mana perdagangan terjadi; mereka gak memprediksi masa depan sendirian.⟧`
      }
    },

    // ─────────────── 5. applications ───────────────
    {
      id: 'applications',
      heading: { en: 'Applications & study plan', id: 'Aplikasi & rencana belajar' },
      body: {
        en: `**As a study path.** The method doubles as a serious self-study syllabus into quant, in roughly this order:
1. **Profile literacy** — Steidlmayer (1984) and Dalton et al. (2007): POC, value area, acceptance/rejection.
2. **Bar construction** — López de Prado (2018): switch intraday BTC to volume/range bars; information-driven sampling.
3. **Volatility surface** — Gatheral (2006): skew, term structure, arbitrage-free dynamics.
4. **Time series** — Tsay (2010): ARMA/GARCH, cointegration, regimes.
5. **Stochastic control / viscosity solutions** — Pham (2009), Crandall & Lions (1983), Ngo & Pham (2016), Almgren & Chriss (2001): the action side.

**As a discipline.** Specialise (one instrument, one timeframe); read the auction; refuse marketed/derived order-flow products and easy-answer indicators; and let the irony of the persona screen out low-effort imitation. The deepest material (his MEGA folders, Medium, and @insilicobunker Telegram) is the next step *after* the syllabus — pull it from his pinned thread.

**How it composes with the rest of the catalog.** This is the rigorous-quant counterpart to the practitioner edges of [the @Husslin_ framework](item:husslin-framework): Husslin reads positioning and forced flow to *time* trades; Insilico reads the profile and builds the *action* on optimal-control math. And the curriculum points straight back into the academic microstructure domain — [Almgren-Chriss](item:almgren-chriss-2000) optimal execution is literally on the reading list.`,
        id: `**Sebagai jalur belajar.** Metodenya sekaligus silabus self-study serius ke quant, kira-kira urutan ini:
1. **Literasi profil** — Steidlmayer (1984) dan Dalton dkk. (2007): POC, value area, acceptance/rejection.
2. **Konstruksi bar** — López de Prado (2018): ganti intraday BTC ke volume/range bar; sampling didorong-informasi.
3. **Volatility surface** — Gatheral (2006): skew, term structure, dinamika arbitrage-free.
4. **Time series** — Tsay (2010): ARMA/GARCH, kointegrasi, regime.
5. **Stochastic control / viscosity solutions** — Pham (2009), Crandall & Lions (1983), Ngo & Pham (2016), Almgren & Chriss (2001): sisi aksi.

**Sebagai disiplin.** Spesialisasi (satu instrumen, satu timeframe); baca lelangnya; nolak produk order-flow yang dipasarkan/diturunkan dan indikator jawaban-gampang; dan biarin ironi persona-nya nyaring imitasi low-effort. Material terdalam (folder MEGA-nya, Medium, dan Telegram @insilicobunker) itu langkah berikutnya *setelah* silabus — ambil dari pinned thread-nya.

**Gimana dia berpadu sama sisa katalog.** Ini counterpart rigorous-quant buat edge praktisi dari [framework @Husslin_](item:husslin-framework): Husslin baca positioning dan forced flow buat *nge-time* trade; Insilico baca profil dan bangun *aksi* di matematika optimal-control. Dan kurikulumnya nunjuk langsung balik ke domain microstructure akademik — [Almgren-Chriss](item:almgren-chriss-2000) eksekusi optimal harfiah ada di daftar bacaan.`
      }
    },

    // ─────────────── 6. practice ───────────────
    {
      id: 'practice',
      heading: { en: 'Practice', id: 'Latihan' },
      body: {
        en: `**1.** In a volume profile, what do the POC, the value area, and a low-volume node (LVN) each tell you, and why do LVN "pockets" matter for how price moves?

<details><summary>Answer</summary>
The POC (point of control) is the single most-traded price — it acts as a MAGNET that price tends to revisit. The VALUE AREA is the price band holding the bulk of traded volume — the market's agreed "fair" region; trading inside it is acceptance, leaving it is a decision. A LOW-VOLUME NODE (LVN) is a thin price zone where little traded — a price the market REJECTED. LVN "pockets" matter because price travels through them FAST: with little resting volume to transact against, moves accelerate across a pocket and decelerate at the next high-volume node. So pockets are where breakouts gain speed, and HVN shelves are where they stall — structure, read from where volume actually traded. [Established] Dalton et al. (2007).
</details>

**2.** Why does this method close bars on volume or range instead of on a fixed clock interval?

<details><summary>Answer</summary>
Because clock-based bars sample by TIME, which over-samples quiet periods (many near-identical bars in dead hours) and under-samples bursts (one bar swallows a violent move). Closing bars on VOLUME, RANGE, or activity makes each bar carry roughly equal information, so the resulting return series is closer to i.i.d. and better-behaved statistically (more stable variance, fewer artefacts) — which matters for any model fit on top. This is López de Prado's (2018) information-driven bars (tick/volume/dollar/imbalance). It is the same impulse as the rest of the method: sample the AUCTION (trade/information) rather than the calendar.
</details>

**3.** What is the connection between "viscosity solutions" (the persona's namesake) and actually trading?

<details><summary>Answer</summary>
Viscosity solutions (Crandall & Lions, 1983) are the rigorous notion of a solution — generally non-smooth — to the nonlinear Hamilton-Jacobi-Bellman partial differential equations that arise in STOCHASTIC OPTIMAL CONTROL: the math of choosing the best action over time under uncertainty. In trading, the "best action" problems are exactly optimal EXECUTION (how to trade out of a position against impact and risk — Almgren-Chriss), optimal STOPPING/SWITCHING (when to enter/exit/flip; pairs trading — Pham; Ngo & Pham), and related control problems. So the namesake signals that the method builds the ACTION side of trading on real control theory rather than heuristics — when and how aggressively to act is solved, not guessed. It also ties the curriculum directly to the Almgren-Chriss execution module in the microstructure domain.
</details>

**4.** The persona is openly satirical and self-deprecating. According to the method itself, what purpose does that irony serve, and what should a serious student do with it?

<details><summary>Answer</summary>
By his own account the irony is a FILTER: a self-deprecating "very poor & very stupid" persona screens out low-effort followers who want easy signals, leaving the people willing to do the rigorous reading. A serious student should therefore separate the satire (the surface) from the substance (the method and the canonical sources), not dismiss the work because of the joke — and should treat the public material as a MAP to the real study (profiles → bars → vol surface → time series → stochastic control) plus the deeper folders/Medium/Telegram, rather than as a turnkey system. The discipline — specialise, read the auction, refuse easy answers — is the actual content; the persona is packaging.
</details>`,
        id: `**1.** Di volume profile, apa yang POC, value area, dan low-volume node (LVN) masing-masing ngasih tau kamu, dan kenapa "pocket" LVN penting buat gimana harga gerak?

<details><summary>Jawaban</summary>
POC (point of control) itu satu harga paling-diperdagangkan — dia berperan kayak MAGNET yang harga cenderung balik. VALUE AREA itu band harga yang nahan mayoritas volume yang diperdagangkan — region "fair" yang pasar sepakati; trading di dalamnya itu acceptance, ninggalinnya itu keputusan. LOW-VOLUME NODE (LVN) itu zona harga tipis di mana sedikit diperdagangkan — harga yang pasar TOLAK. "Pocket" LVN penting karena harga lewat dengan CEPAT: dengan sedikit volume resting buat ditransaksikan, gerakan berakselerasi lintas pocket dan melambat di high-volume node berikutnya. Jadi pocket itu di mana breakout dapet kecepatan, dan shelf HVN di mana mereka mandek — struktur, dibaca dari di mana volume beneran diperdagangkan. [Established] Dalton dkk. (2007).
</details>

**2.** Kenapa metode ini nutup bar pada volume atau range bukan pada interval jam tetap?

<details><summary>Jawaban</summary>
Karena bar berbasis-jam nyampel berdasar WAKTU, yang over-sample periode tenang (banyak bar nyaris-identik di jam mati) dan under-sample ledakan (satu bar nelen gerakan keras). Nutup bar pada VOLUME, RANGE, atau aktivitas bikin tiap bar bawa informasi kira-kira sama, jadi deret return-nya lebih dekat i.i.d. dan lebih baik secara statistik (variance lebih stabil, lebih sedikit artefak) — yang penting buat model apa pun yang di-fit di atasnya. Ini bar didorong-informasi López de Prado (2018) (tick/volume/dollar/imbalance). Itu dorongan yang sama kayak sisa metodenya: sampel LELANG-nya (trade/informasi) bukan kalender.
</details>

**3.** Apa koneksi antara "viscosity solutions" (senama persona) dan trading beneran?

<details><summary>Jawaban</summary>
Viscosity solutions (Crandall & Lions, 1983) itu notasi rigorous dari solusi — umumnya non-smooth — ke persamaan diferensial parsial Hamilton-Jacobi-Bellman nonlinear yang muncul di STOCHASTIC OPTIMAL CONTROL: matematika milih aksi terbaik over time di bawah ketidakpastian. Di trading, masalah "aksi terbaik" itu persis EKSEKUSI optimal (gimana trade keluar dari posisi lawan impact dan risiko — Almgren-Chriss), STOPPING/SWITCHING optimal (kapan masuk/keluar/flip; pairs trading — Pham; Ngo & Pham), dan masalah kontrol terkait. Jadi senama-nya nandain bahwa metodenya bangun sisi AKSI trading di teori kontrol nyata bukan heuristik — kapan dan seberapa agresif bertindak itu diselesaikan, bukan ditebak. Dia juga ngiket kurikulum langsung ke module eksekusi Almgren-Chriss di domain microstructure.
</details>

**4.** Persona-nya terang-terangan satir dan merendahkan-diri. Menurut metodenya sendiri, tujuan apa yang ironi itu layani, dan apa yang murid serius harusnya lakuin dengannya?

<details><summary>Jawaban</summary>
Menurut pengakuannya sendiri ironi-nya itu FILTER: persona "very poor & very stupid" yang merendahkan-diri nyaring follower low-effort yang mau sinyal gampang, ninggalin orang yang mau ngelakuin bacaan rigorous. Murid serius karena itu harusnya misahin satir-nya (permukaan) dari substansinya (metode dan sumber kanonik), bukan ngebuang kerjanya karena leluconnya — dan harusnya ngeperlakukan material publik sebagai PETA ke studi nyata (profil → bar → vol surface → time series → stochastic control) plus folder/Medium/Telegram lebih dalam, bukan sebagai sistem turnkey. Disiplinnya — spesialisasi, baca lelangnya, nolak jawaban gampang — itu konten sebenarnya; persona-nya kemasan.
</details>`
      }
    },

    // ─────────────── 7. connections ───────────────
    {
      id: 'connections',
      heading: { en: 'Connections', id: 'Koneksi' },
      body: {
        en: `- **The practitioner counterpart**: ⟦in this domain⟧ [The @Husslin_ framework](item:husslin-framework) — positioning & forced-flow timing; Insilico is the profile-and-optimal-control sibling. Read together: Husslin for *when*, Insilico for *how to act*.
- **Optimal execution (on his reading list)**: [Almgren-Chriss 2001](item:almgren-chriss-2000) — the execution model is literally part of the viscosity-solutions/stochastic-control curriculum.
- **Price impact the auction reveals**: [Kyle 1985](item:kyle-1985) and [Bouchaud et al. 2018](item:bouchaud-bonart-donier-gould-2018) — why trading through low-volume pockets moves price (impact), the academic complement to LVN "fast travel".
- **Market mechanics**: [O'Hara 1995](item:ohara-1995) — the foundational microstructure theory beneath the auction/participant view; and Harris (2003) *Trading and Exchanges* on the reading list.`,
        id: `- **Counterpart praktisinya**: ⟦di domain ini⟧ [Framework @Husslin_](item:husslin-framework) — timing positioning & forced-flow; Insilico itu saudara profil-dan-optimal-control. Baca bareng: Husslin buat *kapan*, Insilico buat *gimana bertindak*.
- **Eksekusi optimal (di daftar bacaannya)**: [Almgren-Chriss 2001](item:almgren-chriss-2000) — model eksekusi-nya harfiah bagian dari kurikulum viscosity-solutions/stochastic-control.
- **Price impact yang lelang ungkap**: [Kyle 1985](item:kyle-1985) dan [Bouchaud dkk. 2018](item:bouchaud-bonart-donier-gould-2018) — kenapa trading lewat low-volume pocket nggerakin harga (impact), komplemen akademik buat "fast travel" LVN.
- **Mekanika pasar**: [O'Hara 1995](item:ohara-1995) — teori microstructure fondasional di bawah pandangan lelang/partisipan; dan Harris (2003) *Trading and Exchanges* di daftar bacaan.`
      }
    },

    // ─────────────── 8. sources ───────────────
    {
      id: 'sources',
      heading: { en: 'Sources', id: 'Sumber' },
      body: {
        en: `Primary (practitioner): @insiliconot on X (pinned educational thread), the "Viscosity Solutions" Medium, MEGA folders, and the @insilicobunker Telegram archive — the deepest material is NOT reproduced here. Compiled by Az; educational, not financial advice; not affiliated.

Canonical reading list (verified / standard texts):
- **Steidlmayer** (1984). *Market Profile* (CBOT). (Origin of the market-profile/TPO time-at-price view; volume profile is the later volume-based derivative.)
- **Dalton, Jones & Dalton** (2007). *Markets in Profile.* Wiley.
- **López de Prado** (2018). *Advances in Financial Machine Learning.* Wiley. (Non-time bars, ML discipline.)
- **Gatheral** (2006). *The Volatility Surface.* Wiley.
- **Tsay** (2010). *Analysis of Financial Time Series.* Wiley.
- **Crandall & Lions** (1983). "Viscosity Solutions of Hamilton-Jacobi Equations." *Trans. AMS* 277, 1–42.
- **Pham** (2009). *Continuous-time Stochastic Control and Optimization with Financial Applications.* Springer.
- **Ngo & Pham** (2016). "Optimal switching for pairs trading: a viscosity solutions approach." SSRN.
- **Almgren & Chriss** (2001). "Optimal execution of portfolio transactions." *J. of Risk* 3. (Also a module in the microstructure domain.)
- **Harris** (2003). *Trading and Exchanges.* Oxford UP.`,
        id: `Primer (praktisi): @insiliconot di X (pinned educational thread), Medium "Viscosity Solutions", folder MEGA, dan arsip Telegram @insilicobunker — material terdalam GAK direproduksi di sini. Dikompilasi Az; edukatif, bukan nasihat keuangan; gak berafiliasi.

Daftar bacaan kanonik (terverifikasi / teks standar):
- **Steidlmayer** (1984). *Market Profile* (CBOT). (Asal pandangan market-profile/TPO waktu-di-harga; volume profile itu turunan berbasis-volume belakangan.)
- **Dalton, Jones & Dalton** (2007). *Markets in Profile.* Wiley.
- **López de Prado** (2018). *Advances in Financial Machine Learning.* Wiley. (Bar non-waktu, disiplin ML.)
- **Gatheral** (2006). *The Volatility Surface.* Wiley.
- **Tsay** (2010). *Analysis of Financial Time Series.* Wiley.
- **Crandall & Lions** (1983). "Viscosity Solutions of Hamilton-Jacobi Equations." *Trans. AMS* 277, 1–42.
- **Pham** (2009). *Continuous-time Stochastic Control and Optimization with Financial Applications.* Springer.
- **Ngo & Pham** (2016). "Optimal switching for pairs trading: a viscosity solutions approach." SSRN.
- **Almgren & Chriss** (2001). "Optimal execution of portfolio transactions." *J. of Risk* 3. (Juga module di domain microstructure.)
- **Harris** (2003). *Trading and Exchanges.* Oxford UP.`
      }
    },
  ],

  audio: { enabled: true },

  selfTest: [
    {
      sectionId: 'intuition',
      question: {
        en: `What is a volume "profile", and what do POC, value area, high-volume nodes, and low-volume "pockets" each tell a trader?`,
        id: `Apa itu "profil" volume, dan apa yang POC, value area, high-volume node, dan "pocket" low-volume masing-masing ngasih tau trader?`
      },
      prompt: { en: 'Before continuing, try answering:', id: 'Sebelum lanjut, coba jawab:' },
      answer: {
        en: `A volume profile is a histogram of how much volume traded at each PRICE (rather than over time) — it shows where the market actually did business. (It is the volume-based descendant of Steidlmayer's original 1984 market profile, which measured *time* at each price via TPO letters, not traded volume — a related but distinct construct.) The POC (point of control) is the most-traded price, a magnet price tends to return to. The value area is the band containing the bulk of volume — by convention ~70% of it, ≈1 std dev around the POC — the market's agreed "fair" zone, where trading is acceptance and leaving it is a decision. High-volume nodes (HVN) are thick shelves that act as support/resistance (acceptance). Low-volume nodes (LVN), or "pockets", are thin zones the market rejected: because little volume rests there, price travels through them fast, so moves accelerate across pockets and stall at the next HVN. Together they let you read structure — magnets, fair value, and fast-travel zones — from where volume traded rather than from candlestick shapes. [Established] Steidlmayer (1984); Dalton et al. (2007).`,
        id: `Profil volume itu histogram berapa banyak volume yang diperdagangkan di tiap HARGA (bukan over time) — dia nunjukin di mana pasar beneran berbisnis. (Dia itu turunan berbasis-volume dari market profile asli Steidlmayer 1984, yang ngukur *waktu* di tiap harga via huruf TPO, bukan volume yang diperdagangkan — konstruk terkait tapi berbeda.) POC (point of control) itu harga paling-diperdagangkan, magnet yang harga cenderung balik. Value area itu band yang ngandung mayoritas volume — konvensionalnya ~70% darinya, ≈1 std dev di sekitar POC — zona "fair" yang pasar sepakati, di mana trading itu acceptance dan ninggalinnya keputusan. High-volume node (HVN) itu shelf tebal yang berperan sebagai support/resistance (acceptance). Low-volume node (LVN), atau "pocket", itu zona tipis yang pasar tolak: karena sedikit volume resting di situ, harga lewat dengan cepat, jadi gerakan berakselerasi lintas pocket dan mandek di HVN berikutnya. Bareng-bareng mereka ngebiarin kamu baca struktur — magnet, fair value, dan zona fast-travel — dari di mana volume diperdagangkan bukan dari bentuk candlestick. [Established] Steidlmayer (1984); Dalton dkk. (2007).`
      }
    },
    {
      sectionId: 'formalization',
      question: {
        en: `Why sample bars by volume/range rather than by the clock, and what is the link from "viscosity solutions" to actual trading decisions?`,
        id: `Kenapa nyampel bar berdasar volume/range bukan jam, dan apa link dari "viscosity solutions" ke keputusan trading sebenarnya?`
      },
      prompt: { en: 'Before continuing, try answering:', id: 'Sebelum lanjut, coba jawab:' },
      answer: {
        en: `Clock bars sample by time, over-sampling quiet periods and under-sampling bursts; closing bars on volume/range/activity makes each bar carry roughly equal information, giving cleaner, closer-to-i.i.d. returns for any model built on top (López de Prado, 2018). Viscosity solutions (Crandall & Lions, 1983) are the rigorous solution concept for the Hamilton-Jacobi-Bellman PDEs of stochastic optimal control — the math of choosing the best action over time under uncertainty. The trading link is direct: optimal execution (Almgren-Chriss), optimal stopping/switching and pairs trading (Pham; Ngo & Pham) are all optimal-control problems, so the method builds the ACTION side (when and how aggressively to enter, exit, switch, execute) on control theory rather than heuristics. Both choices express the same value: sample and decide by the underlying process, not by convenience.`,
        id: `Bar jam nyampel berdasar waktu, over-sample periode tenang dan under-sample ledakan; nutup bar pada volume/range/aktivitas bikin tiap bar bawa informasi kira-kira sama, ngasih return lebih bersih, lebih-dekat-i.i.d. buat model apa pun di atasnya (López de Prado, 2018). Viscosity solutions (Crandall & Lions, 1983) itu konsep solusi rigorous buat PDE Hamilton-Jacobi-Bellman dari stochastic optimal control — matematika milih aksi terbaik over time di bawah ketidakpastian. Link trading-nya langsung: eksekusi optimal (Almgren-Chriss), optimal stopping/switching dan pairs trading (Pham; Ngo & Pham) semua masalah optimal-control, jadi metodenya bangun sisi AKSI (kapan dan seberapa agresif masuk, keluar, switch, eksekusi) di teori kontrol bukan heuristik. Kedua pilihan ngungkapin nilai yang sama: sampel dan putusin berdasar proses yang mendasari, bukan berdasar kenyamanan.`
      }
    },
    {
      sectionId: 'applications',
      question: {
        en: `How do the @insiliconot method and the @Husslin_ framework divide the labour, and how does the quant curriculum connect back to the academic microstructure domain?`,
        id: `Gimana metode @insiliconot dan framework @Husslin_ ngebagi kerja, dan gimana kurikulum quant nyambung balik ke domain microstructure akademik?`
      },
      prompt: { en: 'Before continuing, try answering:', id: 'Sebelum lanjut, coba jawab:' },
      answer: {
        en: `They split timing from action. The Husslin framework reads POSITIONING and forced flow (OI, perp premium, dealer hedging) to decide WHEN an asymmetric trade exists and to ride the narrative. The Insilico method reads the AUCTION via the volume profile (POC, value area, pockets) and participant archetypes to understand structure, and then builds the ACTION — when and how aggressively to enter/exit/execute — on stochastic optimal control (viscosity solutions). Used together: Husslin for the when, Insilico for the how-to-act, both grounded in market structure. The quant curriculum connects straight back to the academic microstructure domain because Almgren-Chriss optimal execution — a module there — is literally on Insilico's reading list, and the profile/impact ideas are the practitioner face of Kyle's price impact and the square-root impact law. The three layers — academic theory, practitioner timing, rigorous quant action — reinforce one another.`,
        id: `Mereka misahin timing dari aksi. Framework Husslin baca POSITIONING dan forced flow (OI, perp premium, dealer hedging) buat mutusin KAPAN trade asimetris ada dan buat naik narasi. Metode Insilico baca LELANG via volume profile (POC, value area, pocket) dan arketipe partisipan buat ngerti struktur, terus bangun AKSI — kapan dan seberapa agresif masuk/keluar/eksekusi — di stochastic optimal control (viscosity solutions). Dipakai bareng: Husslin buat kapan-nya, Insilico buat gimana-bertindak-nya, keduanya berdasar struktur pasar. Kurikulum quant nyambung langsung balik ke domain microstructure akademik karena eksekusi optimal Almgren-Chriss — module di sana — harfiah ada di daftar bacaan Insilico, dan ide profil/impact itu wajah praktisi dari price impact Kyle dan hukum square-root impact. Tiga lapisan — teori akademik, timing praktisi, aksi quant rigorous — saling menguatkan.`
      }
    },
  ],
};
