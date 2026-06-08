// ─────────────────────────────────────────────────────────────────────────
// Trading domain — a SOURCED LITERATURE SURVEY behind the Husslin & Insilico
// material, compiled & web-verified by Az. Each claim is read through four
// lenses — THEORY (why an edge exists) · FUNDAMENTAL (the mechanism/data) ·
// PRACTICAL (how to apply) · TIPS (pitfalls/decay). Evidence tags preserved.
// NOT financial advice; edges decay and are regime-conditional.
// ─────────────────────────────────────────────────────────────────────────

export const CONTENT = {
  itemId: 'trading-sources-curriculum',
  estimatedReadMinutes: 34,

  author: {
    fullName: { en: 'Sources & Curriculum — the Husslin/Insilico literature (compiled by Az)', id: 'Sumber & Kurikulum — literatur Husslin/Insilico (dikompilasi Az)' },
    affiliation: {
      en: 'A web-verified survey of the academic and practitioner literature that the @Husslin_ framework and the @insiliconot method rest on — mapped to the trading-domain modules. Compiled and cross-checked by Az.',
      id: 'Survei terverifikasi-web dari literatur akademik dan praktisi yang framework @Husslin_ dan metode @insiliconot bersandar — dipetakan ke module domain-trading. Dikompilasi dan di-cross-check oleh Az.',
    },
    tagline: {
      en: 'Every trading "edge" is a claim. Read each one through four lenses — theory, fundamental, practical, tips — and check it against the actual paper. This module is the annotated reading room behind the whole trading domain.',
      id: 'Tiap "edge" trading itu klaim. Baca tiap satu lewat empat lensa — teori, fundamental, praktikal, tips — dan cek lawan paper sebenarnya. Module ini ruang-baca beranotasi di balik seluruh domain trading.',
    },
    bio: {
      en: `The Husslin and Insilico modules each cite a real literature — order-flow toxicity, dealer gamma hedging, the pre-FOMC drift, stop-loss cascades, perpetual funding, market profile, information-driven bars, the volatility surface, financial time series, and stochastic optimal control. This module gathers that literature in one place, web-verified, and reads each strand through four consistent lenses so you can separate what is *established* from what is a *practitioner hypothesis* — and see where an edge has decayed.

⟦Note: compiled & web-verified by Az; a survey, not original research, and not financial advice. Where the literature contradicts a practitioner claim (e.g. the pre-FOMC drift), the module says so.⟧`,
      id: `Module Husslin dan Insilico masing-masing ngutip literatur nyata — order-flow toxicity, dealer gamma hedging, pre-FOMC drift, cascade stop-loss, perpetual funding, market profile, bar didorong-informasi, volatility surface, financial time series, dan stochastic optimal control. Module ini ngumpulin literatur itu di satu tempat, terverifikasi-web, dan baca tiap untai lewat empat lensa konsisten supaya kamu bisa misahin yang *mapan* dari yang *hipotesis praktisi* — dan liat di mana edge udah meluruh.

⟦Catatan: dikompilasi & terverifikasi-web oleh Az; survei, bukan riset orisinal, dan bukan nasihat keuangan. Di mana literatur bertentangan sama klaim praktisi (misal pre-FOMC drift), module ngomong gitu.⟧`
    },
    focus: {
      en: `The survey reads every claim through four lenses. THEORY: why should an edge exist at all — what mechanism or equilibrium predicts it? FUNDAMENTAL: what is the underlying object and the data — the Greeks, the funding rate, the volume-at-price, the PDE — and what did the paper actually measure? PRACTICAL: how do you apply it — the signal, the data feed, the execution? TIPS: where does it break — decay, regime-dependence, estimation noise, the ethics. A claim that survives all four is tradeable knowledge; one that fails the TIPS lens (like the pre-FOMC drift) is a cautionary tale. The literature is grouped to match the framework: dealer flows, positioning/funding, toxicity, events, liquidity/stops, reflexivity, price impact — and the Insilico quant stack (profile, bars, vol surface, time series, stochastic control).`,
      id: `Survei baca tiap klaim lewat empat lensa. TEORI: kenapa edge harus ada sama sekali — mekanisme atau ekuilibrium apa yang ngeprediksinya? FUNDAMENTAL: apa objek mendasari dan datanya — Greeks, funding rate, volume-di-harga, PDE — dan apa yang paper sebenarnya ukur? PRAKTIKAL: gimana kamu nerapinnya — sinyal, data feed, eksekusi? TIPS: di mana dia rusak — decay, regime-dependence, noise estimasi, etikanya. Klaim yang survive keempat itu pengetahuan yang bisa-ditradekan; yang gagal lensa TIPS (kayak pre-FOMC drift) itu kisah peringatan. Literatur dikelompokin buat cocok sama framework: dealer flows, positioning/funding, toxicity, events, liquidity/stops, reflexivity, price impact — dan quant stack Insilico (profil, bar, vol surface, time series, stochastic control).`
    },
    intellectualLineage: {
      en: `Two lineages meet here. The PRACTITIONER-MICROSTRUCTURE lineage: order-flow toxicity (Easley-López de Prado-O'Hara), dealer gamma/vanna/charm hedging (Baltussen et al.; Barbon & Buraschi; Ni et al.), funding mechanics (Schmeling et al.; Brunnermeier & Pedersen), pre-announcement drift (Lucca & Moench; Kurov et al.), stop cascades (Osler), market mechanics (Harris), and reflexivity (Soros; Shiller). The QUANT lineage: auction-market/volume profile (Steidlmayer; Dalton), information-driven bars (López de Prado), the volatility surface (Gatheral), financial time series (Tsay), and stochastic optimal control / viscosity solutions (Crandall & Lions; Pham; Almgren & Chriss). The academic microstructure domain (Kyle, O'Hara, Bouchaud, Menkveld, Avellaneda-Stoikov) is the shared root both draw on.`,
      id: `Dua garis keturunan ketemu di sini. Garis keturunan PRAKTISI-MICROSTRUCTURE: order-flow toxicity (Easley-López de Prado-O'Hara), dealer gamma/vanna/charm hedging (Baltussen dkk.; Barbon & Buraschi; Ni dkk.), mekanika funding (Schmeling dkk.; Brunnermeier & Pedersen), pre-announcement drift (Lucca & Moench; Kurov dkk.), cascade stop (Osler), mekanika pasar (Harris), dan reflexivity (Soros; Shiller). Garis keturunan QUANT: auction-market/volume profile (Steidlmayer; Dalton), bar didorong-informasi (López de Prado), volatility surface (Gatheral), financial time series (Tsay), dan stochastic optimal control / viscosity solutions (Crandall & Lions; Pham; Almgren & Chriss). Domain microstructure akademik (Kyle, O'Hara, Bouchaud, Menkveld, Avellaneda-Stoikov) itu akar bersama yang keduanya pakai.`
    },
    keyCollaborators: {
      en: 'The survey connects the trading-domain modules (the @Husslin_ framework + four deep-dives; the @insiliconot method + quant-curriculum deep-dive) to the academic microstructure modules they cite, via cross-domain item links. The data stack referenced by the practitioners: Coinglass, Kingfisher/Hyblock, options dealer-positioning (GEX) estimates, and a macro calendar.',
      id: 'Survei nyambungin module domain-trading (framework @Husslin_ + empat deep-dive; metode @insiliconot + deep-dive quant-curriculum) ke module microstructure akademik yang mereka kutip, lewat link item lintas-domain. Stack data yang dirujuk praktisi: Coinglass, Kingfisher/Hyblock, estimasi dealer-positioning opsi (GEX), dan kalender makro.',
    },
    legacy: {
      en: `The lasting value is epistemic hygiene: a trading claim is only as good as its evidence, and the four-lens read makes that explicit. The same survey doubles as a self-study syllabus — read in order, it takes you from reading the auction to the optimal-control math — and as a decay tracker: the pre-FOMC drift is the standing reminder that a documented edge can vanish once it is known.`,
      id: `Nilai abadinya itu higiene epistemik: klaim trading cuma sebagus buktinya, dan bacaan empat-lensa bikin itu eksplisit. Survei yang sama sekaligus jadi silabus self-study — dibaca berurutan, dia ngebawa kamu dari baca lelang ke matematika optimal-control — dan jadi pelacak decay: pre-FOMC drift itu pengingat tetap bahwa edge terdokumentasi bisa lenyap begitu diketahui.`
    },
    keyWorks: [
      { year: 2012, title: 'Flow Toxicity and Liquidity in a High-Frequency World (Easley, López de Prado & O\'Hara) — VPIN; toxicity rose before the 2010 flash crash', venue: 'Review of Financial Studies' },
      { year: 2021, title: 'Hedging Demand and Market Intraday Momentum (Baltussen, Da, Lammers & Martens) — short-gamma hedging → momentum, 60+ futures 1974–2020', venue: 'Journal of Financial Economics 142(1), 377–403' },
      { year: 2015, title: 'The Pre-FOMC Announcement Drift (Lucca & Moench) — +49bp in 24h pre-FOMC ≈ 80% of annual returns (then faded post-2015, Kurov et al. 2021)', venue: 'Journal of Finance 70(1), 329–371' },
      { year: 2003, title: 'Currency Orders and Exchange-Rate Dynamics (Osler) — stop/take-profit clustering explains TA support/resistance + breakout momentum', venue: 'Journal of Finance 58(5)' },
      { year: 2018, title: 'Advances in Financial Machine Learning (López de Prado) — information-driven (non-time) bars', venue: 'Wiley' },
    ],
  },

  sections: [
    {
      id: 'motivation',
      heading: { en: 'Why this matters', id: 'Kenapa ini penting' },
      body: {
        en: `A trading "edge" is a claim about the world, and claims vary wildly in how well they are supported — from peer-reviewed mechanisms to a practitioner's hunch to an edge that *used to* work. The Husslin and Insilico modules deliberately tag each claim ([Established] / [Practitioner] / [His]); this module goes one level deeper and gathers the actual **literature** behind those tags, web-verified, so you can read the primary evidence yourself.

The organising device is **four lenses**, applied to every claim:
- **Theory** — why should this edge exist? What mechanism, equilibrium, or constraint predicts it?
- **Fundamental** — what is the underlying object and the data? What did the paper actually measure?
- **Practical** — how do you apply it? The signal, the data feed, the execution.
- **Tips & traps** — where does it break? Decay, regime-dependence, estimation noise, ethics.

A claim that survives all four lenses is durable, tradeable knowledge. A claim that fails the *tips* lens — the **pre-FOMC drift** is the canonical example, documented by Lucca & Moench (2015) and then shown to have *disappeared after 2015* by Kurov et al. (2021) — is a cautionary tale about trading a decayed seasonal as if it were a law.

⟦Disclaimer: a compiled, web-verified survey by Az — not original research and not financial advice. The point is to read the evidence and its limits, not to take any edge on faith.⟧`,
        id: `"Edge" trading itu klaim tentang dunia, dan klaim bervariasi liar dalam seberapa baik didukung — dari mekanisme peer-reviewed ke firasat praktisi ke edge yang *dulu* berhasil. Module Husslin dan Insilico sengaja nandain tiap klaim ([Established] / [Practitioner] / [His]); module ini turun satu level lebih dalam dan ngumpulin **literatur** sebenarnya di balik tag itu, terverifikasi-web, supaya kamu bisa baca bukti primer sendiri.

Alat pengorganisirnya itu **empat lensa**, diterapin ke tiap klaim:
- **Teori** — kenapa edge ini harus ada? Mekanisme, ekuilibrium, atau kendala apa yang ngeprediksinya?
- **Fundamental** — apa objek mendasari dan datanya? Apa yang paper sebenarnya ukur?
- **Praktikal** — gimana kamu nerapinnya? Sinyal, data feed, eksekusi.
- **Tips & jebakan** — di mana dia rusak? Decay, regime-dependence, noise estimasi, etika.

Klaim yang survive keempat lensa itu pengetahuan tahan-lama, bisa-ditradekan. Klaim yang gagal lensa *tips* — **pre-FOMC drift** itu contoh kanonik, didokumentasiin Lucca & Moench (2015) lalu ditunjukin udah *lenyap setelah 2015* oleh Kurov dkk. (2021) — itu kisah peringatan soal nge-trade seasonal yang meluruh seolah-olah dia hukum.

⟦Disclaimer: survei yang dikompilasi, terverifikasi-web oleh Az — bukan riset orisinal dan bukan nasihat keuangan. Poinnya baca bukti dan batasnya, bukan ngambil edge apa pun atas keyakinan.⟧`
      }
    },
    {
      id: 'intuition',
      heading: { en: 'The four lenses', id: 'Empat lensa' },
      body: {
        en: `Take any claim — say "dealers who are short gamma create intraday momentum." Run it through the lenses:

- **Theory.** A short-gamma hedger must trade *in the direction of price* to stay delta-neutral, so its hedging *adds* to the move — a mechanical momentum mechanism, not a behavioural one. (This is why it is [Established], not just folklore.)
- **Fundamental.** The underlying object is the dealer's net gamma (a function of the option book and spot); the data is intraday returns. Baltussen et al. (2021) measured it across **60+ futures, 1974–2020**, and found the last-30-minutes return is predicted by the rest-of-day return — strongest where hedging demand is largest.
- **Practical.** Trade *with* the day's move into the close in a short-gamma regime; watch the gamma-flip level (the [dealer-flows](item:husslin-dealer-flows) simulator) to know which regime you are in.
- **Tips & traps.** The effect **reverts over the next days** (it is momentum *intraday*, not a free trend), dealer positioning is *estimated* not observed, and the sign flips above the gamma flip. Size accordingly.

The discipline is to *always* run all four. The Theory lens stops you trading a correlation with no mechanism; the Fundamental lens grounds you in what was actually measured; the Practical lens turns it into an action; and the Tips lens is where most retail loses money — by trading a decayed or regime-flipped edge as if the first three lenses were permanent.`,
        id: `Ambil klaim apa pun — katakanlah "dealer yang short gamma bikin intraday momentum." Jalanin lewat lensa:

- **Teori.** Hedger short-gamma harus trade *searah harga* buat tetap delta-neutral, jadi hedging-nya *nambah* ke gerakan — mekanisme momentum mekanis, bukan behavioural. (Ini kenapa dia [Established], bukan cuma folklor.)
- **Fundamental.** Objek mendasari itu net gamma dealer (fungsi buku opsi dan spot); datanya intraday returns. Baltussen dkk. (2021) ngukurnya lintas **60+ futures, 1974–2020**, dan nemu return 30-menit-terakhir diprediksi oleh return sisa-hari — paling kuat di mana hedging demand terbesar.
- **Praktikal.** Trade *sama* gerakan hari menuju close di regime short-gamma; awasi level gamma-flip (simulator [dealer-flows](item:husslin-dealer-flows)) buat tau kamu di regime mana.
- **Tips & jebakan.** Efeknya **revert over hari berikutnya** (itu momentum *intraday*, bukan trend gratis), positioning dealer *diestimasi* bukan diobservasi, dan tandanya flip di atas gamma flip. Size sesuai.

Disiplinnya itu *selalu* jalanin keempat. Lensa Teori nyetop kamu nge-trade korelasi tanpa mekanisme; lensa Fundamental ngegroundin kamu di apa yang sebenarnya diukur; lensa Praktikal ngubahnya jadi aksi; dan lensa Tips itu di mana kebanyakan retail kehilangan uang — dengan nge-trade edge yang meluruh atau regime-flipped seolah-olah tiga lensa pertama permanen.`
      }
    },
    {
      id: 'formalization',
      heading: { en: 'The literature, mapped to the framework', id: 'Literatur, dipetakan ke framework' },
      body: {
        en: `**Order-flow toxicity (the "are you the meat?" premise).** [Established] Easley, López de Prado & O'Hara (2012), *RFS*: order flow is *toxic* when it adversely selects market makers; **VPIN** estimates it from volume-imbalance in volume-time. Practically a risk gauge — and VPIN *rose in the hours before the 6 May 2010 flash crash*, as liquidity providers withdrew. Tip: it is a probability, not a price.

**Dealer gamma hedging (the signature edge).** [Established] Baltussen et al. (2021), *JFE*: hedging short gamma forces trading with price → **intraday momentum** (last-30-min predicted by rest-of-day, 60+ futures, 1974–2020), reverting over days. [Established] Barbon & Buraschi (2020): gamma × illiquidity → momentum (short γ) vs reversal (long γ). [Established] Ni, Pearson & Poteshman (2005): option-expiration **pinning**. [Established] Lou, Polk & Skouras (2019): overnight ≠ intraday return regimes.

**Positioning & funding.** [Established] Schmeling, Schrimpf & Todorov (2023, BIS) & Ackerer et al. (2024): perpetual **funding** anchors perp to spot and signals crowding. [Established] Brunnermeier & Pedersen (2009): the **funding-liquidity spiral** behind squeezes/cascades.

**Events.** [Established] Lucca & Moench (2015), *J. Finance*: the **pre-FOMC drift** (+49bp in 24h, ≈80% of annual returns, 1994–2011) — then [Regime-dependent] Kurov et al. (2021): it **disappeared after 2015**. The canonical decay case.

**Liquidity & stops.** [Established] Osler (2003, *J. Finance*; 2005): stop/take-profit **clustering** at round numbers → "gappy" **cascades**, explaining technical support/resistance and breakout momentum. [Established] Harris (2003): market mechanics & manipulation.

**Reflexivity.** [Established] Soros (1987); Shiller (2019): price makes the narrative that recruits more flow.

**The Insilico quant stack.** [Established] Steidlmayer (1984)/Dalton (2007): **market/volume profile** (POC, value area). [Established] López de Prado (2018): **information-driven bars**. [Established] Gatheral (2006): the **volatility surface**. [Established] Tsay (2010): **financial time series**. [Established] Crandall & Lions (1983)/Pham (2009)/Almgren & Chriss (2000): **viscosity solutions / optimal control** (execution, stopping, switching).

The shared academic root is the microstructure domain: [Kyle](item:kyle-1985) (price impact λ), [O'Hara](item:ohara-1995) (market microstructure theory), [Bouchaud et al.](item:bouchaud-bonart-donier-gould-2018) (square-root impact), [Menkveld](item:menkveld-2013) (HFT market making), [Avellaneda-Stoikov](item:stoikov-2008) (MM quotes).`,
        id: `**Order-flow toxicity (premis "kamu dagingnya?").** [Established] Easley, López de Prado & O'Hara (2012), *RFS*: order flow *toksik* pas dia adversely-select market maker; **VPIN** ngestimasinya dari volume-imbalance di volume-time. Praktis itu gauge risiko — dan VPIN *naik di jam sebelum flash crash 6 Mei 2010*, pas liquidity provider mundur. Tip: itu probabilitas, bukan harga.

**Dealer gamma hedging (signature edge).** [Established] Baltussen dkk. (2021), *JFE*: hedging short gamma maksa trade searah harga → **intraday momentum** (30-menit-terakhir diprediksi sisa-hari, 60+ futures, 1974–2020), revert over hari. [Established] Barbon & Buraschi (2020): gamma × illikuiditas → momentum (short γ) vs reversal (long γ). [Established] Ni, Pearson & Poteshman (2005): **pinning** kedaluwarsa-opsi. [Established] Lou, Polk & Skouras (2019): regime return overnight ≠ intraday.

**Positioning & funding.** [Established] Schmeling, Schrimpf & Todorov (2023, BIS) & Ackerer dkk. (2024): **funding** perpetual nge-anchor perp ke spot dan ngesinyalin crowding. [Established] Brunnermeier & Pedersen (2009): **funding-liquidity spiral** di balik squeeze/cascade.

**Events.** [Established] Lucca & Moench (2015), *J. Finance*: **pre-FOMC drift** (+49bp di 24 jam, ≈80% return tahunan, 1994–2011) — lalu [Regime-dependent] Kurov dkk. (2021): dia **lenyap setelah 2015**. Kasus decay kanonik.

**Liquidity & stops.** [Established] Osler (2003, *J. Finance*; 2005): **clustering** stop/take-profit di angka bulat → **cascade** "gappy", ngejelasin support/resistance teknikal dan momentum breakout. [Established] Harris (2003): mekanika pasar & manipulasi.

**Reflexivity.** [Established] Soros (1987); Shiller (2019): harga bikin narasi yang ngerekrut lebih banyak flow.

**Quant stack Insilico.** [Established] Steidlmayer (1984)/Dalton (2007): **market/volume profile** (POC, value area). [Established] López de Prado (2018): **bar didorong-informasi**. [Established] Gatheral (2006): **volatility surface**. [Established] Tsay (2010): **financial time series**. [Established] Crandall & Lions (1983)/Pham (2009)/Almgren & Chriss (2000): **viscosity solutions / optimal control** (eksekusi, stopping, switching).

Akar akademik bersama itu domain microstructure: [Kyle](item:kyle-1985) (price impact λ), [O'Hara](item:ohara-1995) (teori market microstructure), [Bouchaud dkk.](item:bouchaud-bonart-donier-gould-2018) (square-root impact), [Menkveld](item:menkveld-2013) (HFT market making), [Avellaneda-Stoikov](item:stoikov-2008) (kuotasi MM).`
      }
    },
    {
      id: 'worked-example',
      heading: { en: 'Worked example: one claim, four lenses', id: 'Contoh: satu klaim, empat lensa' },
      body: {
        en: `**Claim: "Buy equities in the 24 hours before an FOMC meeting."**

- **Theory.** Why might it exist? Pre-event hedging/risk-aversion that resolves at the announcement — a risk-premium / uncertainty-resolution story. Plausible, so the claim clears the first lens.
- **Fundamental.** What was measured? Lucca & Moench (2015) found U.S. equities earned **+49 basis points** on average in the 24h before scheduled FOMC announcements over **Sep 1994–Mar 2011**, accounting for roughly **80% of the annual equity premium** in that window. A large, real, documented effect.
- **Practical.** How would you trade it? Be long into the meeting, flat after — exactly the @Husslin_ event-trading execution (position before, close on the announcement).
- **Tips & traps.** Here it fails. Kurov et al. (2021) extended the sample and found the drift **essentially disappeared after 2015** — once documented and widely known, it was arbitraged away / uncertainty fell. So the unconditional version is *dead*; only a *conditional* read (confirmed by a down-drift + IV bid, sized for failure) is defensible, and a genuine data shock voids it.

**The lesson.** Three lenses said "great trade"; the fourth said "but not anymore." That is the entire value of reading the literature rather than the headline: the same paper that established the edge is one citation away from the paper that killed it. Apply this discipline to *every* edge in this domain — especially the [His]/[Practitioner]-tagged ones, which have not even been through the first three lenses rigorously.`,
        id: `**Klaim: "Beli ekuitas di 24 jam sebelum rapat FOMC."**

- **Teori.** Kenapa mungkin ada? Hedging/risk-aversion pra-event yang resolve di pengumuman — cerita risk-premium / uncertainty-resolution. Masuk akal, jadi klaim lolos lensa pertama.
- **Fundamental.** Apa yang diukur? Lucca & Moench (2015) nemu ekuitas AS dapet **+49 basis poin** rata-rata di 24 jam sebelum pengumuman FOMC terjadwal over **Sep 1994–Mar 2011**, ngitung kira-kira **80% equity premium tahunan** di window itu. Efek besar, nyata, terdokumentasi.
- **Praktikal.** Gimana kamu nge-trade-nya? Long masuk ke rapat, flat setelah — persis eksekusi event-trading @Husslin_ (berposisi sebelum, tutup pas pengumuman).
- **Tips & jebakan.** Di sini dia gagal. Kurov dkk. (2021) ngeperluas sampel dan nemu drift-nya **esensial lenyap setelah 2015** — begitu terdokumentasi dan terkenal luas, dia ter-arbitrase / ketidakpastian turun. Jadi versi tanpa-syarat *mati*; cuma bacaan *kondisional* (dikonfirmasi down-drift + IV bid, di-size buat kegagalan) yang bisa-dipertahankan, dan shock data sebenarnya ngebatalinnya.

**Pelajarannya.** Tiga lensa bilang "trade bagus"; yang keempat bilang "tapi gak lagi." Itu seluruh nilai baca literatur bukan headline: paper yang sama yang nge-establish edge itu satu sitasi jauh dari paper yang ngebunuhnya. Terapin disiplin ini ke *tiap* edge di domain ini — terutama yang ditandai [His]/[Practitioner], yang bahkan belum lewat tiga lensa pertama secara rigorous.`
      }
    },
    {
      id: 'applications',
      heading: { en: 'The reading path & how to use it', id: 'Reading path & cara pakainya' },
      body: {
        en: `**A reading path (roughly in order).**
1. **Foundations** — Harris (2003) *Trading and Exchanges* for market mechanics; O'Hara (microstructure theory) and Kyle (price impact) in the microstructure domain.
2. **Read the auction** — Steidlmayer (1984) / Dalton (2007) for market/volume profile; rebuild it with the [volume-profile simulator](item:insilico-quant-curriculum).
3. **Sample correctly** — López de Prado (2018) for information-driven bars.
4. **The forced flows** — Easley-López de Prado-O'Hara (toxicity/VPIN); Baltussen et al., Barbon & Buraschi, Ni et al., Lou et al. (dealer hedging); Brunnermeier-Pedersen, Schmeling et al. (funding/positioning); Osler (stops); Lucca-Moench + Kurov et al. (events).
5. **Reflexivity** — Soros (1987); Shiller (2019).
6. **The quant action layer** — Gatheral (vol surface); Tsay (time series); Crandall-Lions / Pham / Almgren-Chriss (stochastic control / execution).

**How to use it inside Lattice.** Each strand is a module: the [@Husslin_ framework](item:husslin-framework) + [dealer flows](item:husslin-dealer-flows), [OI/positioning](item:husslin-oi-positioning), [event trading](item:husslin-event-trading), [liquidity harvesting](item:husslin-liquidity-harvesting); and the [@insiliconot method](item:insilico-method) + [quant curriculum](item:insilico-quant-curriculum). The two **simulators** are the best visualizations: the **gamma-flip** sim (dealer flows) and the **volume-profile** sim (quant curriculum). Read the module, run the four lenses, check the cited paper here.

**Honest limits.** This is a survey, not a meta-analysis: it reports what each paper claims and (where known) where it failed to replicate or decayed, but it does not re-test anything. Practitioner-tagged claims have far weaker support than [Established] ones — and even established results are regime- and venue-dependent. The right posture is the four-lens read plus your own journal.`,
        id: `**Reading path (kira-kira berurutan).**
1. **Fondasi** — Harris (2003) *Trading and Exchanges* buat mekanika pasar; O'Hara (teori microstructure) dan Kyle (price impact) di domain microstructure.
2. **Baca lelang** — Steidlmayer (1984) / Dalton (2007) buat market/volume profile; rebuild dengan [simulator volume-profile](item:insilico-quant-curriculum).
3. **Sampel dengan benar** — López de Prado (2018) buat bar didorong-informasi.
4. **Forced flow** — Easley-López de Prado-O'Hara (toxicity/VPIN); Baltussen dkk., Barbon & Buraschi, Ni dkk., Lou dkk. (dealer hedging); Brunnermeier-Pedersen, Schmeling dkk. (funding/positioning); Osler (stop); Lucca-Moench + Kurov dkk. (events).
5. **Reflexivity** — Soros (1987); Shiller (2019).
6. **Layer aksi quant** — Gatheral (vol surface); Tsay (time series); Crandall-Lions / Pham / Almgren-Chriss (stochastic control / eksekusi).

**Cara pakainya di Lattice.** Tiap untai itu module: [framework @Husslin_](item:husslin-framework) + [dealer flows](item:husslin-dealer-flows), [OI/positioning](item:husslin-oi-positioning), [event trading](item:husslin-event-trading), [liquidity harvesting](item:husslin-liquidity-harvesting); dan [metode @insiliconot](item:insilico-method) + [quant curriculum](item:insilico-quant-curriculum). Dua **simulator** itu visualisasi terbaik: sim **gamma-flip** (dealer flows) dan sim **volume-profile** (quant curriculum). Baca module, jalanin empat lensa, cek paper yang dikutip di sini.

**Batas jujur.** Ini survei, bukan meta-analisis: dia ngelaporin apa yang tiap paper klaim dan (di mana diketahui) di mana dia gagal replikasi atau meluruh, tapi dia gak nge-tes-ulang apa pun. Klaim ditandai-praktisi punya dukungan jauh lebih lemah dari yang [Established] — dan bahkan hasil mapan itu regime- dan venue-dependent. Sikap yang benar itu bacaan empat-lensa plus jurnal kamu sendiri.`
      }
    },
    {
      id: 'practice',
      heading: { en: 'Practice', id: 'Latihan' },
      body: {
        en: `**1.** Name the four lenses and what each one protects you from.

<details><summary>Answer</summary>
THEORY (why should the edge exist — mechanism/equilibrium) protects you from trading a correlation with no cause. FUNDAMENTAL (the underlying object + what the paper actually measured) protects you from a vague claim with no real data behind it. PRACTICAL (the signal, data feed, execution) protects you from "interesting but un-actionable." TIPS & TRAPS (decay, regime-dependence, estimation noise, ethics) protects you from trading a decayed or regime-flipped edge as if it were permanent — the most common and expensive error. A claim must clear all four to be tradeable knowledge.
</details>

**2.** Run "short-gamma dealers create intraday momentum" through the four lenses.

<details><summary>Answer</summary>
THEORY: a short-gamma hedger must trade in the direction of price to stay delta-neutral, so its hedging adds to the move — a mechanical (not behavioural) momentum mechanism. FUNDAMENTAL: Baltussen et al. (2021, JFE) measured it across 60+ futures, 1974–2020, finding the last-30-min return is predicted by the rest-of-day return, strongest where hedging demand is largest. PRACTICAL: trade with the day's move into the close in a short-gamma regime; use the gamma-flip simulator to know which regime you're in. TIPS: it reverts over the next days (intraday only), positioning is estimated not observed, and the sign flips above the gamma flip — so size for it and don't hold for a trend.
</details>

**3.** Why is the pre-FOMC drift the canonical "decay" example, and what does it teach about trading any documented edge?

<details><summary>Answer</summary>
Lucca & Moench (2015) documented a large, real effect — +49bp in the 24h before FOMC, ~80% of the annual equity premium, 1994–2011 — so it cleared theory, fundamental, and practical lenses. But Kurov et al. (2021) extended the sample and found it essentially DISAPPEARED after 2015 (once widely known/arbitraged, and as uncertainty fell). The lesson: an edge documented in a paper can be dead by the time you read it, because publication and popularity erode it. So always check the tips/decay lens, prefer conditional versions confirmed in real time, size for failure, and journal — never trade a decayed seasonal as a constant.
</details>

**4.** What is the honest difference between an [Established] claim and a [Practitioner]/[His] claim in this domain?

<details><summary>Answer</summary>
[Established] claims have a peer-reviewed mechanism and measured evidence (e.g. VPIN, dealer-gamma intraday momentum, stop cascades, market profile, the quant texts) — though even these are regime- and venue-dependent and can decay. [Practitioner] claims are documented by trading desks but not rigorously tested out-of-sample (specific timings like the 2am-ET bid, the Saturday squeeze). [His] claims are one trader's own hypotheses (e.g. the "~80%" event hit rate). Support drops sharply from [Established] → [Practitioner] → [His]. The four-lens read is exactly how you keep that hierarchy in view instead of treating a hunch like a theorem.
</details>`,
        id: `**1.** Sebutin empat lensa dan apa yang masing-masing ngelindungin kamu darinya.

<details><summary>Jawaban</summary>
TEORI (kenapa edge harus ada — mekanisme/ekuilibrium) ngelindungin kamu dari nge-trade korelasi tanpa sebab. FUNDAMENTAL (objek mendasari + apa yang paper sebenarnya ukur) ngelindungin kamu dari klaim vague tanpa data nyata di baliknya. PRAKTIKAL (sinyal, data feed, eksekusi) ngelindungin kamu dari "menarik tapi gak-bisa-ditindaklanjuti." TIPS & JEBAKAN (decay, regime-dependence, noise estimasi, etika) ngelindungin kamu dari nge-trade edge yang meluruh atau regime-flipped seolah-olah permanen — error paling umum dan mahal. Klaim harus lolos keempat buat jadi pengetahuan yang bisa-ditradekan.
</details>

**2.** Jalanin "dealer short-gamma bikin intraday momentum" lewat empat lensa.

<details><summary>Jawaban</summary>
TEORI: hedger short-gamma harus trade searah harga buat tetap delta-neutral, jadi hedging-nya nambah ke gerakan — mekanisme momentum mekanis (bukan behavioural). FUNDAMENTAL: Baltussen dkk. (2021, JFE) ngukurnya lintas 60+ futures, 1974–2020, nemu return 30-menit-terakhir diprediksi return sisa-hari, paling kuat di mana hedging demand terbesar. PRAKTIKAL: trade sama gerakan hari menuju close di regime short-gamma; pakai simulator gamma-flip buat tau kamu di regime mana. TIPS: dia revert over hari berikutnya (intraday doang), positioning diestimasi bukan diobservasi, dan tandanya flip di atas gamma flip — jadi size buatnya dan jangan tahan buat trend.
</details>

**3.** Kenapa pre-FOMC drift itu contoh "decay" kanonik, dan apa yang dia ajarin soal nge-trade edge terdokumentasi apa pun?

<details><summary>Jawaban</summary>
Lucca & Moench (2015) ngedokumentasiin efek besar, nyata — +49bp di 24 jam sebelum FOMC, ~80% equity premium tahunan, 1994–2011 — jadi dia lolos lensa teori, fundamental, dan praktikal. Tapi Kurov dkk. (2021) ngeperluas sampel dan nemu dia esensial LENYAP setelah 2015 (begitu terkenal luas/ter-arbitrase, dan pas ketidakpastian turun). Pelajarannya: edge yang didokumentasiin di paper bisa mati pas kamu baca, karena publikasi dan popularitas ngeerosinya. Jadi selalu cek lensa tips/decay, lebih milih versi kondisional yang dikonfirmasi real-time, size buat kegagalan, dan jurnal — jangan pernah nge-trade seasonal yang meluruh sebagai konstan.
</details>

**4.** Apa beda jujur antara klaim [Established] dan klaim [Practitioner]/[His] di domain ini?

<details><summary>Jawaban</summary>
Klaim [Established] punya mekanisme peer-reviewed dan bukti terukur (misal VPIN, intraday momentum dealer-gamma, cascade stop, market profile, teks quant) — walau bahkan ini regime- dan venue-dependent dan bisa meluruh. Klaim [Practitioner] didokumentasiin desk trading tapi gak dites rigorous out-of-sample (timing spesifik kayak bid 2am-ET, squeeze Sabtu). Klaim [His] itu hipotesis satu trader sendiri (misal hit rate event "~80%"). Dukungan turun tajam dari [Established] → [Practitioner] → [His]. Bacaan empat-lensa itu persis gimana kamu ngejaga hierarki itu keliatan alih-alih ngeperlakukan firasat kayak teorema.
</details>`
      }
    },
    {
      id: 'connections',
      heading: { en: 'Connections', id: 'Koneksi' },
      body: {
        en: `- **The framework it surveys**: [@Husslin_ framework](item:husslin-framework) + [dealer flows](item:husslin-dealer-flows) · [OI/positioning](item:husslin-oi-positioning) · [event trading](item:husslin-event-trading) · [liquidity harvesting](item:husslin-liquidity-harvesting).
- **The quant method it surveys**: [@insiliconot method](item:insilico-method) + [quant curriculum](item:insilico-quant-curriculum) (carries the volume-profile simulator).
- **The shared academic root**: [Kyle 1985](item:kyle-1985), [O'Hara 1995](item:ohara-1995), [Bouchaud et al. 2018](item:bouchaud-bonart-donier-gould-2018), [Menkveld 2013](item:menkveld-2013), [Avellaneda-Stoikov 2008](item:stoikov-2008), [Easley-López de Prado-O'Hara VPIN](item:easley-lopez-prado-vpin), [Almgren-Chriss 2000](item:almgren-chriss-2000), [Brunnermeier-Pedersen 2009](item:brunnermeier-pedersen-2009).`,
        id: `- **Framework yang disurvei**: [framework @Husslin_](item:husslin-framework) + [dealer flows](item:husslin-dealer-flows) · [OI/positioning](item:husslin-oi-positioning) · [event trading](item:husslin-event-trading) · [liquidity harvesting](item:husslin-liquidity-harvesting).
- **Metode quant yang disurvei**: [metode @insiliconot](item:insilico-method) + [quant curriculum](item:insilico-quant-curriculum) (bawa simulator volume-profile).
- **Akar akademik bersama**: [Kyle 1985](item:kyle-1985), [O'Hara 1995](item:ohara-1995), [Bouchaud dkk. 2018](item:bouchaud-bonart-donier-gould-2018), [Menkveld 2013](item:menkveld-2013), [Avellaneda-Stoikov 2008](item:stoikov-2008), [Easley-López de Prado-O'Hara VPIN](item:easley-lopez-prado-vpin), [Almgren-Chriss 2000](item:almgren-chriss-2000), [Brunnermeier-Pedersen 2009](item:brunnermeier-pedersen-2009).`
      }
    },
    {
      id: 'sources',
      heading: { en: 'Sources (annotated, web-verified)', id: 'Sumber (beranotasi, terverifikasi-web)' },
      body: {
        en: `Compiled & web-verified by Az; not financial advice. Tags: [E]=Established · [P]=Practitioner · [H]=His.
- **Easley, López de Prado & O'Hara** (2012). "Flow Toxicity and Liquidity in a High-Frequency World." *RFS.* [E] VPIN; toxicity rose before the 2010 flash crash.
- **Baltussen, Da, Lammers & Martens** (2021). "Hedging Demand and Market Intraday Momentum." *JFE* 142(1), 377–403. [E] short-gamma hedging → intraday momentum, 60+ futures, 1974–2020.
- **Barbon & Buraschi** (2020). "Gamma Fragility." [E] gamma × illiquidity.
- **Ni, Pearson & Poteshman** (2005). "Stock Price Clustering on Option Expiration Dates." *JFE.* [E] OPEX pinning.
- **Lou, Polk & Skouras** (2019). "A Tug of War: Overnight vs Intraday Returns." *JFE.* [E]
- **Lucca & Moench** (2015). "The Pre-FOMC Announcement Drift." *J. Finance* 70(1), 329–371. [E] +49bp/24h, ≈80% of annual returns — **and Kurov, Wolfe & Gilbert (2021)**: disappeared after 2015. [Regime-dependent]
- **Brunnermeier & Pedersen** (2009). "Market Liquidity and Funding Liquidity." *RFS.* [E] funding-liquidity spiral.
- **Schmeling, Schrimpf & Todorov** (2023, BIS); **Ackerer et al.** (2024). [E] perpetual funding mechanics.
- **Osler** (2003). "Currency Orders and Exchange-Rate Dynamics." *J. Finance* 58(5); **Osler (2005)** stop-loss cascades. [E] clustering → cascades.
- **Harris** (2003). *Trading and Exchanges.* Oxford UP. [E] market mechanics & manipulation.
- **Soros** (1987) *The Alchemy of Finance*; **Shiller** (2019) *Narrative Economics.* [E] reflexivity & narrative.
- **Steidlmayer** (1984) *Market Profile*; **Dalton et al.** (2007) *Markets in Profile.* [E] auction / volume profile.
- **López de Prado** (2018). *Advances in Financial Machine Learning.* Wiley. [E] information-driven bars.
- **Gatheral** (2006). *The Volatility Surface.* Wiley. [E]  ·  **Tsay** (2010). *Analysis of Financial Time Series.* Wiley. [E]
- **Crandall & Lions** (1983) + **Crandall, Ishii & Lions** (1992); **Pham** (2009); **Ngo & Pham** (pairs trading); **Almgren & Chriss** (2000), "Optimal Execution of Portfolio Transactions," *J. Risk* 3, 5–39. [E] viscosity solutions / optimal control / execution.`,
        id: `Dikompilasi & terverifikasi-web oleh Az; bukan nasihat keuangan. Tag: [E]=Established · [P]=Practitioner · [H]=His.
- **Easley, López de Prado & O'Hara** (2012). "Flow Toxicity and Liquidity in a High-Frequency World." *RFS.* [E] VPIN; toxicity naik sebelum flash crash 2010.
- **Baltussen, Da, Lammers & Martens** (2021). "Hedging Demand and Market Intraday Momentum." *JFE* 142(1), 377–403. [E] hedging short-gamma → intraday momentum, 60+ futures, 1974–2020.
- **Barbon & Buraschi** (2020). "Gamma Fragility." [E] gamma × illikuiditas.
- **Ni, Pearson & Poteshman** (2005). "Stock Price Clustering on Option Expiration Dates." *JFE.* [E] OPEX pinning.
- **Lou, Polk & Skouras** (2019). "A Tug of War: Overnight vs Intraday Returns." *JFE.* [E]
- **Lucca & Moench** (2015). "The Pre-FOMC Announcement Drift." *J. Finance* 70(1), 329–371. [E] +49bp/24 jam, ≈80% return tahunan — **dan Kurov, Wolfe & Gilbert (2021)**: lenyap setelah 2015. [Regime-dependent]
- **Brunnermeier & Pedersen** (2009). "Market Liquidity and Funding Liquidity." *RFS.* [E] funding-liquidity spiral.
- **Schmeling, Schrimpf & Todorov** (2023, BIS); **Ackerer dkk.** (2024). [E] mekanika funding perpetual.
- **Osler** (2003). "Currency Orders and Exchange-Rate Dynamics." *J. Finance* 58(5); **Osler (2005)** cascade stop-loss. [E] clustering → cascade.
- **Harris** (2003). *Trading and Exchanges.* Oxford UP. [E] mekanika pasar & manipulasi.
- **Soros** (1987) *The Alchemy of Finance*; **Shiller** (2019) *Narrative Economics.* [E] reflexivity & narasi.
- **Steidlmayer** (1984) *Market Profile*; **Dalton dkk.** (2007) *Markets in Profile.* [E] auction / volume profile.
- **López de Prado** (2018). *Advances in Financial Machine Learning.* Wiley. [E] bar didorong-informasi.
- **Gatheral** (2006). *The Volatility Surface.* Wiley. [E]  ·  **Tsay** (2010). *Analysis of Financial Time Series.* Wiley. [E]
- **Crandall & Lions** (1983) + **Crandall, Ishii & Lions** (1992); **Pham** (2009); **Ngo & Pham** (pairs trading); **Almgren & Chriss** (2000), "Optimal Execution of Portfolio Transactions," *J. Risk* 3, 5–39. [E] viscosity solutions / optimal control / eksekusi.`
      }
    },
  ],

  audio: { enabled: true },

  selfTest: [
    {
      sectionId: 'intuition',
      question: { en: `What are the four lenses for reading a trading claim, and why is the fourth (tips/traps) the one that most often saves money?`, id: `Apa empat lensa buat baca klaim trading, dan kenapa yang keempat (tips/jebakan) yang paling sering nyelametin uang?` },
      prompt: { en: 'Before continuing, try answering:', id: 'Sebelum lanjut, coba jawab:' },
      answer: {
        en: `THEORY (why should the edge exist — a mechanism/equilibrium, not a bare correlation), FUNDAMENTAL (the underlying object and what the paper actually measured), PRACTICAL (the signal, data feed, and execution that turn it into an action), and TIPS & TRAPS (decay, regime-dependence, estimation noise, ethics). The fourth saves the most money because the first three can all say "great trade" about an edge that has since DECAYED or that flips sign in another regime — and trading a dead or regime-flipped edge as if it were permanent is the most common, expensive retail error. The pre-FOMC drift is the canonical case: real and large in-sample (lenses 1–3), but gone after 2015 (lens 4). So you always run all four and prefer conditional, journalled, failure-sized versions.`,
        id: `TEORI (kenapa edge harus ada — mekanisme/ekuilibrium, bukan korelasi telanjang), FUNDAMENTAL (objek mendasari dan apa yang paper sebenarnya ukur), PRAKTIKAL (sinyal, data feed, dan eksekusi yang ngubahnya jadi aksi), dan TIPS & JEBAKAN (decay, regime-dependence, noise estimasi, etika). Yang keempat nyelametin paling banyak uang karena tiga pertama semua bisa bilang "trade bagus" soal edge yang udah MELURUH atau yang flip tanda di regime lain — dan nge-trade edge mati atau regime-flipped seolah-olah permanen itu error retail paling umum, mahal. Pre-FOMC drift itu kasus kanonik: nyata dan besar in-sample (lensa 1–3), tapi hilang setelah 2015 (lensa 4). Jadi kamu selalu jalanin keempat dan lebih milih versi kondisional, dijurnal, di-size-buat-kegagalan.`
      }
    },
    {
      sectionId: 'formalization',
      question: { en: `Pick three [Established] strands from the literature and state, for each, what was actually measured.`, id: `Pilih tiga untai [Established] dari literatur dan nyatain, buat masing-masing, apa yang sebenarnya diukur.` },
      prompt: { en: 'Before continuing, try answering:', id: 'Sebelum lanjut, coba jawab:' },
      answer: {
        en: `Examples: (1) VPIN — Easley, López de Prado & O'Hara (2012, RFS) estimate order-flow toxicity from volume-imbalance in volume-time and show VPIN rose in the hours before the 6 May 2010 flash crash as liquidity providers withdrew. (2) Dealer-gamma intraday momentum — Baltussen et al. (2021, JFE) measure, across 60+ futures over 1974–2020, that the last-30-minutes return is positively predicted by the rest-of-day return (and reverts over days), linking it to short-gamma hedging. (3) Pre-FOMC drift — Lucca & Moench (2015, J. Finance) find U.S. equities earned ~+49bp in the 24h before scheduled FOMC meetings (1994–2011), ~80% of the annual premium — with Kurov et al. (2021) showing it disappeared after 2015. (Others: Osler's stop-cluster cascades; Ni et al.'s OPEX pinning.) Each is a concrete, measured result, which is what earns the [Established] tag.`,
        id: `Contoh: (1) VPIN — Easley, López de Prado & O'Hara (2012, RFS) ngestimasi order-flow toxicity dari volume-imbalance di volume-time dan nunjukin VPIN naik di jam sebelum flash crash 6 Mei 2010 pas liquidity provider mundur. (2) Intraday momentum dealer-gamma — Baltussen dkk. (2021, JFE) ngukur, lintas 60+ futures over 1974–2020, bahwa return 30-menit-terakhir diprediksi positif oleh return sisa-hari (dan revert over hari), ngiketnya ke hedging short-gamma. (3) Pre-FOMC drift — Lucca & Moench (2015, J. Finance) nemu ekuitas AS dapet ~+49bp di 24 jam sebelum rapat FOMC terjadwal (1994–2011), ~80% premium tahunan — dengan Kurov dkk. (2021) nunjukin dia lenyap setelah 2015. (Lainnya: cascade stop-cluster Osler; OPEX pinning Ni dkk.) Masing-masing hasil konkret, terukur, yang itu yang ngedapetin tag [Established].`
      }
    },
    {
      sectionId: 'applications',
      question: { en: `What is the honest difference in evidential weight between [Established], [Practitioner], and [His] claims, and how should that change how you trade each?`, id: `Apa beda jujur dalam bobot bukti antara klaim [Established], [Practitioner], dan [His], dan gimana itu harusnya ngubah cara kamu nge-trade masing-masing?` },
      prompt: { en: 'Before continuing, try answering:', id: 'Sebelum lanjut, coba jawab:' },
      answer: {
        en: `[Established] = a peer-reviewed mechanism plus measured, often replicated evidence (VPIN, dealer-gamma momentum, stop cascades, market profile, the quant texts) — the strongest, though still regime/venue-dependent and capable of decay. [Practitioner] = documented by desks but not rigorously tested out-of-sample (specific timings like the 2am-ET bid or the Saturday squeeze) — weaker, treat as hypotheses with priors. [His] = one trader's own claim/estimate (e.g. the "~80%" event hit rate) — weakest, an opinion to test. Evidential weight drops sharply [E] → [P] → [H], so you scale conviction and size accordingly: trade [Established] edges with respect for their regime limits, treat [Practitioner] and [His] as journalling experiments at small size, and never let a [His] number masquerade as a measured statistic. The four-lens read keeps that hierarchy explicit.`,
        id: `[Established] = mekanisme peer-reviewed plus bukti terukur, sering tereplikasi (VPIN, momentum dealer-gamma, cascade stop, market profile, teks quant) — paling kuat, walau tetap regime/venue-dependent dan bisa meluruh. [Practitioner] = didokumentasiin desk tapi gak dites rigorous out-of-sample (timing spesifik kayak bid 2am-ET atau squeeze Sabtu) — lebih lemah, perlakukan sebagai hipotesis dengan prior. [His] = klaim/estimasi satu trader sendiri (misal hit rate event "~80%") — paling lemah, opini buat dites. Bobot bukti turun tajam [E] → [P] → [H], jadi kamu nge-skala keyakinan dan size sesuai: trade edge [Established] dengan hormat ke batas regime-nya, perlakukan [Practitioner] dan [His] sebagai eksperimen jurnal di size kecil, dan jangan pernah biarin angka [His] menyamar sebagai statistik terukur. Bacaan empat-lensa ngejaga hierarki itu eksplisit.`
      }
    },
  ],
};
