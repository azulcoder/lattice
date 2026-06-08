export const CONTENT = {
  itemId: 'aquilina-budish-oneill-2022',
  estimatedReadMinutes: 38,

  author: {
    fullName: { en: 'Matteo Aquilina, Eric Budish & Peter O\'Neill', id: 'Matteo Aquilina, Eric Budish & Peter O\'Neill' },
    affiliation: {
      en: 'Aquilina: Senior Economist, Bank for International Settlements (the study was an FCA project). Budish: Paul G. McDermott Professor of Economics and Entrepreneurship, University of Chicago Booth School of Business; NBER. O\'Neill: Senior Lecturer, School of Banking and Finance, UNSW Business School, Sydney.',
      id: 'Aquilina: Senior Economist, Bank for International Settlements (studi-nya proyek FCA). Budish: Paul G. McDermott Professor of Economics and Entrepreneurship, University of Chicago Booth School of Business; NBER. O\'Neill: Senior Lecturer, School of Banking and Finance, UNSW Business School, Sydney.'
    },
    tagline: {
      en: 'The high-frequency speed race, finally measured — using exchange message data that capture even failed orders, the paper times latency-arbitrage races to the microsecond and prices the tax they levy on every investor.',
      id: 'Balapan kecepatan high-frequency, akhirnya terukur — pakai message data exchange yang nangkep bahkan order yang gagal, paper-nya nge-time race latency-arbitrage sampai mikrodetik dan ngehargai pajak yang mereka pungut dari tiap investor.'
    },
    bio: {
      en: `This is a three-author collaboration between an academic market designer and two regulator-economists, and the division of labour shows. **Eric Budish** is the Paul G. McDermott Professor of Economics and Entrepreneurship at the University of Chicago Booth School of Business — a leading market designer in the tradition of his Harvard PhD advisor Alvin Roth. With Peter Cramton and John Shim he wrote the 2015 theory paper that diagnosed the continuous limit order book's speed flaw and proposed frequent batch auctions; this paper is the empirical test of that diagnosis. (Budish also designed the A-CEEI course-allocation mechanism behind "Course Match," and works on the economic limits of blockchains.)

**Matteo Aquilina** and **Peter O'Neill** were economists at the UK Financial Conduct Authority when the study was done, which is why it exists at all: the FCA could compel the London Stock Exchange to hand over the message-level data — including failed orders — that the analysis requires, something no academic could obtain. Aquilina (PhD, Roma Tre) is now a Senior Economist at the Bank for International Settlements; O'Neill (PhD, UNSW) is now a finance academic at UNSW Sydney. Both specialize in empirical market microstructure, and both have continued on HFT and crypto/DeFi market structure.

The paper is, in effect, a regulator with subpoena power supplying the data that a market-design theorist had been waiting a decade to see.`,
      id: `Ini kolaborasi tiga-penulis antara seorang market designer akademik dan dua ekonom-regulator, dan pembagian kerjanya kelihatan. **Eric Budish** itu Paul G. McDermott Professor of Economics and Entrepreneurship di University of Chicago Booth School of Business — market designer terkemuka dalam tradisi advisor PhD Harvard-nya, Alvin Roth. Bareng Peter Cramton dan John Shim dia nulis paper teori 2015 yang ngediagnosis cacat kecepatan continuous limit order book dan ngusulin frequent batch auctions; paper ini tes empiris dari diagnosis itu. (Budish juga ngedesain mekanisme alokasi-mata-kuliah A-CEEI di balik "Course Match," dan kerja soal batas ekonomi blockchain.)

**Matteo Aquilina** dan **Peter O'Neill** itu ekonom di UK Financial Conduct Authority pas studi-nya dikerjain, dan itu kenapa dia bisa ada sama sekali: FCA bisa maksa London Stock Exchange nyerahin data message-level — termasuk order yang gagal — yang analisisnya butuh, sesuatu yang gak bisa didapat akademisi mana pun. Aquilina (PhD, Roma Tre) sekarang Senior Economist di Bank for International Settlements; O'Neill (PhD, UNSW) sekarang akademisi finance di UNSW Sydney. Keduanya spesialis empirical market microstructure, dan keduanya lanjut di struktur pasar HFT dan crypto/DeFi.

Paper-nya itu, intinya, seorang regulator dengan kekuatan subpoena nyediain data yang seorang market-design theorist udah nunggu satu dekade buat liat.`
    },
    focus: {
      en: `Does high-frequency trading impose a hidden cost on ordinary investors, and how big is it? The continuous limit order book used by nearly every major exchange processes messages serially, so when a public signal makes a resting quote stale, traders race — in nanoseconds — to either pick it off or cancel it. That race is "latency arbitrage." Critics had argued for years it was a wasteful tax; defenders said it was negligible. Nobody had measured it, because ordinary data hide the losers of a race. Aquilina, Budish and O'Neill use London Stock Exchange message data — which capture failed orders — to count latency-arbitrage races directly: how often they happen, how fast they are, who wins, and what they cost. The answer is that races are pervasive (about a fifth of FTSE 100 volume), astonishingly fast (tens of microseconds), individually trivial (about half a tick) but collectively a ~0.5 basis-point tax on all trading — roughly a third of the effective spread, and on the order of USD 5 billion a year worldwide — paid by everyone through wider spreads, and removable by a change in market design.`,
      id: `Apakah high-frequency trading ngebebanin biaya tersembunyi ke investor biasa, dan seberapa gede? Continuous limit order book yang dipakai hampir tiap exchange besar proses message secara serial, jadi pas sinyal publik bikin resting quote jadi stale, trader balapan — dalam nanodetik — buat metik atau ngecancel-nya. Race itu "latency arbitrage." Kritikus udah ngeklaim bertahun-tahun itu pajak yang boros; pembela bilang dia negligible. Gak ada yang ngukur, karena data biasa nyembunyiin yang kalah di race. Aquilina, Budish dan O'Neill pakai message data London Stock Exchange — yang nangkep order yang gagal — buat ngitung race latency-arbitrage langsung: seberapa sering terjadi, seberapa cepet, siapa menang, dan apa biayanya. Jawabannya race itu pervasif (sekitar seperlima volume FTSE 100), cepet luar biasa (puluhan mikrodetik), individual sepele (sekitar setengah tick) tapi kolektif jadi pajak ~0.5 basis-poin di semua trading — kira-kira sepertiga effective spread, dan dalam orde USD 5 miliar setahun sedunia — dibayar semua orang lewat spread yang lebih lebar, dan bisa dihapus dengan perubahan market design.`
    },
    intellectualLineage: {
      en: `The direct parent is **Budish-Cramton-Shim (2015)**, the theory paper that argued the continuous limit order book is a flawed market design: by processing messages serially in continuous time, it turns symmetrically-observed public information into a winner-take-all speed race, and it proposed frequent batch auctions as the cure. This paper supplies the missing empirical half — the races BCS predicted, caught in the data and priced. The deeper root is **Kyle (1985)**: latency arbitrage is adverse selection, but a *mechanical*, public-information variant — the maker is picked off for being slow, not for facing someone better-informed. Two close cousins frame the wider field: **Foucault-Kozhan-Tham (2017)** measure the same stale-quote sniping ("toxic arbitrage") in triangular FX, and **Biais-Foucault-Moinas (2015)** model the speed investment itself as an over-investment externality — the arms race as a prisoner's dilemma. The paper's methodological lineage is the regulatory-data empirical tradition: its novelty is less a new model than access to message data (including failed orders) that academics structurally cannot get.`,
      id: `Induk langsungnya **Budish-Cramton-Shim (2015)**, paper teori yang ngeklaim continuous limit order book itu market design yang cacat: dengan proses message secara serial di continuous time, dia ngubah informasi publik yang diamati simetris jadi winner-take-all speed race, dan dia ngusulin frequent batch auctions sebagai obatnya. Paper ini nyediain separuh empiris yang hilang — race yang BCS prediksi, ketangkep di data dan dihargai. Akar yang lebih dalam itu **Kyle (1985)**: latency arbitrage itu adverse selection, tapi varian *mekanis*, informasi-publik — maker dipetik karena lambat, bukan karena hadapi seseorang yang lebih berinformasi. Dua sepupu deket ngeframe field yang lebih luas: **Foucault-Kozhan-Tham (2017)** ngukur sniping stale-quote yang sama ("toxic arbitrage") di triangular FX, dan **Biais-Foucault-Moinas (2015)** ngemodelin investasi kecepatan itu sendiri sebagai eksternalitas over-investment — arms race sebagai prisoner's dilemma. Garis keturunan metodologis paper-nya itu tradisi empiris regulatory-data: kebaruannya bukan model baru tapi akses ke message data (termasuk order yang gagal) yang akademisi secara struktural gak bisa dapat.`
    },
    keyCollaborators: {
      en: `**Each other**, across the academic/regulator divide. Budish's defining collaboration is with **Peter Cramton and John Shim** on frequent batch auctions (the 2015 theory this paper tests); he also works with **Estelle Cantillon** and **Judd Kessler** on course allocation, and with **Paul Milgrom** and **Scott Duke Kominers** on market design. Aquilina and O'Neill's shared microstructure work continued past this paper — e.g. "Sharks in the Dark" on dark-pool latency arbitrage with **Sean Foley** and **Thomas Ruf**. The intellectual touchstones invoked here are **Alvin Roth** (Budish's market-design lineage), **Albert Kyle** (adverse selection), and **Thierry Foucault** (fast-trading theory).`,
      id: `**Satu sama lain**, lintas pembatas akademik/regulator. Kolaborasi yang ngedefinisiin Budish itu sama **Peter Cramton dan John Shim** soal frequent batch auctions (teori 2015 yang paper ini tes); dia juga kerja sama **Estelle Cantillon** dan **Judd Kessler** soal alokasi mata kuliah, dan sama **Paul Milgrom** dan **Scott Duke Kominers** soal market design. Kerja microstructure bareng Aquilina dan O'Neill lanjut setelah paper ini — misal "Sharks in the Dark" soal latency arbitrage dark-pool sama **Sean Foley** dan **Thomas Ruf**. Tonggak intelektual yang dipanggil di sini itu **Alvin Roth** (garis keturunan market-design Budish), **Albert Kyle** (adverse selection), dan **Thierry Foucault** (teori fast-trading).`
    },
    legacy: {
      en: `This paper turned a long-running argument into a number. Before it, the harm from the HFT speed race was either dismissed as trivial or decried as a scandal, with little hard evidence either way, because the data needed to see a race — the *failed* orders — were not available to researchers. By obtaining exchange message data, Aquilina-Budish-O'Neill produced the first direct, well-identified measurement: latency-arbitrage races are pervasive (~22% of FTSE 100 volume), microsecond-fast, individually tiny, and collectively a ~0.5 bps tax — about a third of the effective spread — borne by all investors and worth roughly USD 5 billion a year globally. Three things make it durable. First, it **validated a market-design theory** (Budish-Cramton-Shim) empirically, strengthening the case for frequent batch auctions and other speed-bump designs. Second, it gave regulators a **quantified harm** to weigh, not an anecdote. Third — the reason it sits in this track — the continuous-limit-order-book flaw it identifies is **not, in principle, specific to equities**, and this module extends its logic to crypto: centralized crypto exchanges are also continuous limit order books, and decentralized exchanges face a closely analogous on-chain problem, MEV. (That bridge to crypto is the module's analogy; the paper itself studies UK equities.) For anyone designing a matching engine, this is the paper that says the choice between continuous and batched time has a measurable price tag.`,
      id: `Paper ini ngubah argumen yang lama berjalan jadi sebuah angka. Sebelumnya, kerugian dari HFT speed race entah ditolak sebagai sepele atau dikecam sebagai skandal, dengan sedikit bukti keras di kedua sisi, karena data yang dibutuhin buat liat race — order yang *gagal* — gak tersedia buat peneliti. Dengan dapetin message data exchange, Aquilina-Budish-O'Neill ngehasilin pengukuran langsung dan well-identified pertama: race latency-arbitrage itu pervasif (~22% volume FTSE 100), cepet-mikrodetik, individual kecil, dan kolektif jadi pajak ~0.5 bps — sekitar sepertiga effective spread — ditanggung semua investor dan bernilai kira-kira USD 5 miliar setahun global. Tiga hal bikin dia awet. Pertama, dia **memvalidasi teori market-design** (Budish-Cramton-Shim) secara empiris, nguatin argumen buat frequent batch auctions dan desain speed-bump lain. Kedua, dia ngasih regulator **kerugian terkuantifikasi** buat ditimbang, bukan anekdot. Ketiga — alasan dia ada di track ini — cacat continuous-limit-order-book yang dia identifikasi itu **gak, pada prinsipnya, spesifik ke equity**, dan modul ini ngeperpanjang logikanya ke crypto: centralized crypto exchange juga continuous limit order book, dan decentralized exchange hadapi masalah on-chain yang mirip banget, MEV. (Jembatan ke crypto itu analogi modul ini; paper-nya sendiri ngestudi equity UK.) Buat siapa pun yang ngedesain matching engine, ini paper yang bilang pilihan antara continuous dan batched time punya price tag yang terukur.`
    },
    keyWorks: [
      { year: 2022, title: 'Quantifying the High-Frequency Trading "Arms Race" (this item)', venue: 'Quarterly Journal of Economics' },
      { year: 2015, title: 'The High-Frequency Trading Arms Race: Frequent Batch Auctions as a Market Design Response (Budish, Cramton & Shim)', venue: 'Quarterly Journal of Economics' },
      { year: 2011, title: 'The Combinatorial Assignment Problem: Approximate Competitive Equilibrium from Equal Incomes (Budish)', venue: 'Journal of Political Economy' },
      { year: 2012, title: 'The Multi-Unit Assignment Problem: Theory and Evidence from Course Allocation at Harvard (Budish & Cantillon)', venue: 'American Economic Review' },
      { year: 2024, title: 'Sharks in the Dark: Quantifying HFT Dark Pool Latency Arbitrage (Aquilina, Foley, O\'Neill & Ruf)', venue: 'Journal of Economic Dynamics and Control' },
    ],
  },

  sections: [
    // ─────────────── 1. motivation ───────────────
    {
      id: 'motivation',
      heading: { en: 'Why this matters', id: 'Kenapa ini penting' },
      body: {
        en: `If Makarov-Schoar is arbitrage *across* venues, this paper is arbitrage *within* one — and over a far shorter timescale: microseconds.

High-frequency trading (HFT) has an undisputed good side (tighter spreads, faster price discovery) and a disputed bad side: the **speed arms race**. The worry, formalized by Budish, Cramton and Shim (2015), is that the continuous limit order book — the design nearly every major stock exchange uses — has a structural flaw. Exchanges treat time as *continuous* but process messages *serially*, one at a time. So when a public signal moves the fair value of a stock (say a correlated futures contract ticks up), the resting quote is instantly **stale**, and a "race" breaks out: snipers fire orders to pick off the stale quote while the market maker fires a cancel to escape it. Whoever's message reaches the matching engine first — by *nanoseconds* — wins. This is **latency arbitrage**.

The problem had been argued about for years (and dramatized in *Flash Boys*), but never cleanly measured, because standard limit-order-book data only show orders that *succeeded*. You cannot see a race if you cannot see the orders that *lost*.

Aquilina, Budish and O'Neill (2022) got the data that can. Under a regulatory request, the UK Financial Conduct Authority obtained **message data** from the London Stock Exchange — every inbound message, including failed trade and cancel attempts — for all FTSE 350 stocks over 43 trading days in 2015 (~2.2 billion messages, timestamped to the microsecond). Now both the winner *and* the losers of every race are visible.

What they found: races are **everywhere and incredibly fast**. The average FTSE 100 stock has about **537 races per day** — roughly one a minute — each lasting on average **79 microseconds** (the most common duration is just **5-10 microseconds**, under 1/10,000th of a blink). About **22%** of all FTSE 100 trading volume is transacted in these races. Each race is worth almost nothing on its own — about **half a tick, ~£2** — but multiplied across that frequency, latency arbitrage levies a **~0.5 basis-point tax** on all trading, on the order of **£60 million a year** in the UK and **~USD 5 billion a year** across global equity markets. And because the sniped party is the liquidity provider, that tax is ultimately paid by *every* investor through wider spreads.`,
        id: `Kalau Makarov-Schoar itu arbitrage *antar* venue, paper ini arbitrage *dalam* satu venue — dan over timescale yang jauh lebih pendek: mikrodetik.

High-frequency trading (HFT) punya sisi baik yang gak terbantah (spread lebih ketat, price discovery lebih cepet) dan sisi buruk yang diperdebatkan: **speed arms race**. Kekhawatirannya, diformalin sama Budish, Cramton dan Shim (2015), itu bahwa continuous limit order book — desain yang dipakai hampir tiap exchange saham besar — punya cacat struktural. Exchange memperlakukan waktu sebagai *continuous* tapi proses message secara *serial*, satu per satu. Jadi pas sinyal publik gerakin fair value sebuah saham (misal futures yang berkorelasi naik satu tick), resting quote-nya langsung **stale**, dan "race" pecah: sniper nembak order buat metik stale quote sementara market maker nembak cancel buat kabur darinya. Siapa pun yang message-nya nyampe matching engine duluan — dalam *nanodetik* — menang. Ini **latency arbitrage**.

Masalahnya udah diperdebatin bertahun-tahun (dan didramatisir di *Flash Boys*), tapi gak pernah diukur dengan bersih, karena data limit-order-book standar cuma nunjukin order yang *berhasil*. Kamu gak bisa liat race kalau kamu gak bisa liat order yang *kalah*.

Aquilina, Budish dan O'Neill (2022) dapet data yang bisa. Di bawah permintaan regulasi, UK Financial Conduct Authority dapetin **message data** dari London Stock Exchange — tiap inbound message, termasuk percobaan trade dan cancel yang gagal — buat semua saham FTSE 350 over 43 hari trading di 2015 (~2.2 miliar message, di-timestamp sampai mikrodetik). Sekarang baik pemenang *maupun* yang kalah di tiap race keliatan.

Yang mereka temuin: race itu **di mana-mana dan cepet luar biasa**. Saham FTSE 100 rata-rata punya sekitar **537 race per hari** — kira-kira satu per menit — masing-masing tahan rata-rata **79 mikrodetik** (durasi paling umum cuma **5-10 mikrodetik**, di bawah 1/10.000 kedipan mata). Sekitar **22%** dari semua volume trading FTSE 100 ditransaksiin dalam race ini. Tiap race nyaris gak bernilai sendirian — sekitar **setengah tick, ~£2** — tapi dikali frekuensi itu, latency arbitrage memungut **pajak ~0.5 basis-poin** di semua trading, dalam orde **£60 juta setahun** di UK dan **~USD 5 miliar setahun** di pasar saham global. Dan karena pihak yang disnipe itu liquidity provider, pajak itu akhirnya dibayar *tiap* investor lewat spread yang lebih lebar.`
      }
    },

    // ─────────────── 2. intuition ───────────────
    {
      id: 'intuition',
      heading: { en: 'Intuition', id: 'Intuisi' },
      body: {
        en: `Why is the race winner-take-all, and why can't the loser just try again?

Picture a market maker resting an offer to sell 1,000 shares at 100.05. A public signal arrives that everyone fast can see at once — the fair value just jumped to, say, 100.10. That 100.05 offer is now **stale**: it is a standing promise to sell below the new fair value. Two things happen in the same instant:

- **Snipers** (liquidity takers) send aggressive orders to *buy* those shares at 100.05 before they vanish — grabbing something now worth 100.10.
- The **market maker** sends a *cancel* to pull the stale offer before it gets hit.

Both are reacting to the *same* public signal at the *same* time. The exchange processes messages one at a time, so the winner is simply whoever's packet crosses the finish line first. There is exactly one stale quote to win, so the contest is **winner-take-all over a few nanoseconds**. "Trying again" is meaningless — once the quote is taken or cancelled, the opportunity is gone; the prize existed only for the instant the quote was stale.

This is the crucial difference from Kyle (1985) and Glosten-Milgrom. There, the trader who moves the price has *private* information nobody else has. Here, the information is **public and symmetric** — everyone fast sees the same signal simultaneously. The rent does not come from knowing something; it comes purely from being a few nanoseconds *faster* at acting on what everyone already knows. That is why it is called latency arbitrage, and why it is a pure **speed** race rather than an information game.

Two consequences follow. First, the race is **mechanical adverse selection**: the market maker gets picked off on stale quotes through no fault of analysis, simply because someone was faster. To break even, makers must widen their spreads — so the cost lands on ordinary investors who trade those wider spreads. Second, the race is a **socially wasteful prisoner's dilemma** (Biais-Foucault-Moinas 2015): each firm must keep spending on ever-faster hardware just to stay in the race, but the speed produces no new information and no better prices — it only redistributes the stale-quote prize to whoever spent the most on speed.`,
        id: `Kenapa race-nya winner-take-all, dan kenapa yang kalah gak bisa nyoba lagi aja?

Bayangin market maker naruh offer jual 1.000 saham di 100.05. Sinyal publik datang yang semua yang cepet bisa liat sekaligus — fair value baru aja loncat ke, misalnya, 100.10. Offer 100.05 itu sekarang **stale**: dia janji berdiri buat jual di bawah fair value baru. Dua hal terjadi di instan yang sama:

- **Sniper** (liquidity taker) nembak order agresif buat *beli* saham itu di 100.05 sebelum mereka ilang — ngegrab sesuatu yang sekarang bernilai 100.10.
- **Market maker** nembak *cancel* buat narik stale offer sebelum kena hit.

Keduanya bereaksi ke sinyal publik yang *sama* di waktu yang *sama*. Exchange proses message satu per satu, jadi pemenangnya cuma siapa yang paket-nya nyebrang garis finis duluan. Ada persis satu stale quote buat dimenangin, jadi kontesnya **winner-take-all over beberapa nanodetik**. "Nyoba lagi" gak ada artinya — begitu quote-nya keambil atau ke-cancel, peluangnya ilang; hadiahnya cuma ada buat instan pas quote-nya stale.

Ini beda krusial dari Kyle (1985) dan Glosten-Milgrom. Di sana, trader yang gerakin harga punya informasi *privat* yang gak dimiliki orang lain. Di sini, informasinya **publik dan simetris** — semua yang cepet liat sinyal yang sama serentak. Rent-nya datang bukan dari tau sesuatu; dia datang murni dari beberapa nanodetik lebih *cepet* bertindak di apa yang semua orang udah tau. Itu kenapa dia disebut latency arbitrage, dan kenapa dia murni **speed** race bukan game informasi.

Dua konsekuensi ngikut. Pertama, race-nya itu **adverse selection mekanis**: market maker dipetik di stale quote tanpa salah analisis, cuma karena ada yang lebih cepet. Buat balik modal, maker harus ngelebarin spread mereka — jadi biayanya jatuh ke investor biasa yang trade di spread yang lebih lebar itu. Kedua, race-nya itu **prisoner's dilemma yang boros secara sosial** (Biais-Foucault-Moinas 2015): tiap firma harus terus ngeluarin duit buat hardware yang makin cepet cuma buat tetep di race, tapi kecepatannya gak ngehasilin informasi baru dan harga yang gak lebih baik — dia cuma ngeredistribusi hadiah stale-quote ke siapa pun yang paling banyak ngeluarin buat kecepatan.`
      }
    },

    // ─────────────── 3. formalization ───────────────
    {
      id: 'formalization',
      heading: { en: 'The mechanism, formalized', id: 'Mekanismenya, diformalkan' },
      body: {
        en: `**The continuous limit order book's flaw (Budish-Cramton-Shim 2015).** A continuous market accepts orders at any instant but processes them *serially*. When a symmetrically-observed public signal shifts an asset's value, every fast trader wants to act on the same stale quote at the same time, and serial processing turns "who acts on public news" into "whose message arrives first." This is **latency arbitrage**: rents from *public* information, distinct from the *private*-information adverse selection of Kyle (1985).

**Detecting a race.** The measurement breakthrough is the data: exchange **message data** record every inbound message — including trade and cancel attempts that *fail* — so both winners and losers are observable (standard order-book data show only successes). The authors define a race as an event with four features: (1) two or more participants act on the same symbol, side, and price; (2) a *mix* of liquidity-taking and cancel attempts; (3) some succeed and some fail; (4) all within a tiny window. The window is calibrated from the data — the minimum observed reaction time is about **29 microseconds**, median latency about **150 microseconds** — and capped at **500 microseconds**. Race duration is the gap between the first successful message and the first failed one.

**The scale.** Across the FTSE 350 there are about **71,000 races a day**; the average FTSE 100 symbol sees **537**. The average race lasts **79 microseconds** (mode 5-10 μs), involves about **3.3 participants**, and is won by an aggressive *take* about **90%** of the time (only ~10% by a cancel). Winning is concentrated: the **top 6 firms** win ~**82%** of races — and *lose* ~85% too (the body's Figure III figure; the abstract reports the slightly higher 87%), since the same fast firms are always in the race.

**The tax.** Define the **latency-arbitrage tax** as total race profits divided by trading volume: **0.42 bps** on all volume (**0.53 bps** on non-race volume). Each race is tiny — about **0.48 ticks ≈ 1.2 bps ≈ £2** for the FTSE 100 — but at that frequency the aggregate is large: **~£60 million/year** in the UK, **~USD 5 billion/year** globally. Crucially, the *realized spread* earned inside races is **negative** (about **−1.83 bps**, versus +0.23 bps outside races): liquidity providers *lose* money providing into races. They recoup it by widening quotes, so latency arbitrage shows up as roughly **a third of the effective spread**. Eliminating it would cut the cost of liquidity by about **17%** — precisely the ratio of the non-race tax to the effective spread, $0.53 / 3.17 \\approx 0.17$.

**The fix.** Because the race is created by *continuous* serial processing, the proposed remedy is a market-design change: **frequent batch auctions**. Time is sliced into short intervals (e.g. tens or hundreds of milliseconds); all orders arriving within an interval are treated as *simultaneous* and cleared at a single uniform price. Inside a batch, arriving a nanosecond earlier confers no advantage — so the speed race collapses and competition shifts back to **price**.`,
        id: `**Cacat continuous limit order book (Budish-Cramton-Shim 2015).** Pasar continuous nerima order di instan mana pun tapi proses mereka secara *serial*. Pas sinyal publik yang diamati simetris geser nilai sebuah aset, tiap trader cepet pengen bertindak di stale quote yang sama di waktu yang sama, dan proses serial ngubah "siapa bertindak di berita publik" jadi "message siapa yang nyampe duluan." Ini **latency arbitrage**: rent dari informasi *publik*, beda dari adverse selection informasi-*privat* Kyle (1985).

**Ndeteksi race.** Terobosan pengukurannya itu datanya: **message data** exchange ngerekam tiap inbound message — termasuk percobaan trade dan cancel yang *gagal* — jadi baik pemenang maupun yang kalah keliatan (data order-book standar cuma nunjukin yang berhasil). Penulis ngedefinisiin race sebagai event dengan empat fitur: (1) dua atau lebih peserta bertindak di simbol, sisi, dan harga yang sama; (2) *campuran* percobaan liquidity-taking dan cancel; (3) sebagian berhasil dan sebagian gagal; (4) semua dalam window yang sangat kecil. Window-nya dikalibrasi dari data — minimum observed reaction time sekitar **29 mikrodetik**, median latency sekitar **150 mikrodetik** — dan di-cap di **500 mikrodetik**. Durasi race itu jarak antara message berhasil pertama dan message gagal pertama.

**Skalanya.** Di seluruh FTSE 350 ada sekitar **71.000 race sehari**; simbol FTSE 100 rata-rata liat **537**. Race rata-rata tahan **79 mikrodetik** (mode 5-10 μs), ngelibatin sekitar **3.3 peserta**, dan dimenangin sama *take* agresif sekitar **90%** waktu (cuma ~10% sama cancel). Menang itu terkonsentrasi: **top 6 firma** menang ~**82%** race — dan *kalah* ~85% juga (angka Figure III di body; abstrak nyebut 87% yang sedikit lebih tinggi), karena firma cepet yang sama selalu di race.

**Pajaknya.** Definisiin **latency-arbitrage tax** sebagai total profit race dibagi volume trading: **0.42 bps** di semua volume (**0.53 bps** di volume non-race). Tiap race kecil — sekitar **0.48 tick ≈ 1.2 bps ≈ £2** buat FTSE 100 — tapi di frekuensi itu agregatnya gede: **~£60 juta/tahun** di UK, **~USD 5 miliar/tahun** global. Krusial, *realized spread* yang didapat di dalam race itu **negatif** (sekitar **−1.83 bps**, lawan +0.23 bps di luar race): liquidity provider *rugi* duit nyediain ke race. Mereka nutup itu dengan ngelebarin quote, jadi latency arbitrage muncul sebagai kira-kira **sepertiga effective spread**. Ngilanginnya bakal motong cost of liquidity sekitar **17%** — persis rasio non-race tax ke effective spread, $0.53 / 3.17 \\approx 0.17$.

**Fix-nya.** Karena race-nya diciptain sama proses serial *continuous*, remedy yang diusulin itu perubahan market-design: **frequent batch auctions**. Waktu diiris jadi interval pendek (misal puluhan atau ratusan milidetik); semua order yang datang dalam satu interval diperlakukan *simultan* dan di-clear di satu harga uniform. Dalam satu batch, nyampe satu nanodetik lebih awal gak ngasih keuntungan — jadi speed race-nya kolaps dan kompetisi geser balik ke **harga**.`
      }
    },

    // ─────────────── 4. worked-example ───────────────
    {
      id: 'worked-example',
      heading: { en: 'Worked example', id: 'Contoh kerjaan' },
      body: {
        en: `**Anatomy of one race, and how half-ticks become billions.** (Numbers illustrative where noted; the structure and the aggregates are the paper's.)

**One race.** A FTSE 100 stock rests an offer to sell at 100.05 (the touch is one tick wide). At 11:00:00.000000, a correlated signal — a futures tick, an ETF move, the same stock printing on another venue — reveals the fair value has risen to ~100.10. The 100.05 offer is now stale by about a tick.

- Three or four fast firms detect the signal in the same ~30 microseconds. Some send marketable buy orders to lift the 100.05 offer; the resting maker sends a cancel.
- The exchange processes them serially. The first marketable buy to arrive **wins** — it buys at 100.05 something worth ~100.10. The maker's cancel and the other snipers' orders **fail**.
- Elapsed time from the winning message to the first losing message: on the order of **5-79 microseconds**. The race is over before you could perceive it had begun.

**The prize.** The winner captured roughly half the value gap — for the average FTSE 100 race, **0.48 ticks ≈ 1.2 bps ≈ about £2**. The loser is the maker, picked off on a stale quote (mechanical adverse selection), plus the snipers whose orders failed. About 20% of races, after noise, are worth essentially nothing or less.

**The aggregate.** Two pounds is nothing. But the average FTSE 100 symbol runs **537 races a day**, and the whole FTSE 350 runs about **71,000 a day**, accounting for **~22%** of FTSE 100 volume — all of it compressed into roughly **0.043 seconds** of the trading day. A rough back-of-envelope: 71,000 races × ~£2 ≈ **£140,000 a day**, ≈ **£35 million a year** — the same order of magnitude as the paper's careful estimate of **~£60 million/year** for the UK (its volume-and-volatility model gives £51-63m, because real markets have higher-volume, higher-volatility days than the 2015 sample). Extrapolated to all global equity markets: **~USD 5 billion a year**.

**Who pays.** Not the snipers' counterparties alone — *everyone*. Because liquidity providers are the ones systematically picked off (their realized spread inside races is **negative**), they widen quotes to survive, and the latency-arbitrage tax is collected from every investor through the **effective spread** — about a third of which traces to races. Slicing time into **frequent batch auctions** (Budish-Cramton-Shim) would remove the speed prize and, the authors estimate, cut the cost of liquidity by **~17%**.`,
        id: `**Anatomi satu race, dan gimana setengah-tick jadi miliaran.** (Angka ilustratif di tempat yang ditandai; struktur dan agregatnya punya paper-nya.)

**Satu race.** Sebuah saham FTSE 100 naruh offer jual di 100.05 (touch-nya selebar satu tick). Di 11:00:00.000000, sinyal berkorelasi — futures tick, ETF move, saham yang sama nge-print di venue lain — ngungkap fair value-nya udah naik ke ~100.10. Offer 100.05 itu sekarang stale sekitar satu tick.

- Tiga atau empat firma cepet ndeteksi sinyalnya dalam ~30 mikrodetik yang sama. Sebagian nembak marketable buy order buat ngangkat offer 100.05; resting maker nembak cancel.
- Exchange proses mereka secara serial. Marketable buy pertama yang nyampe **menang** — dia beli di 100.05 sesuatu yang bernilai ~100.10. Cancel-nya maker dan order sniper lain **gagal**.
- Waktu berlalu dari message pemenang ke message kalah pertama: dalam orde **5-79 mikrodetik**. Race-nya selesai sebelum kamu bisa merasa dia udah mulai.

**Hadiahnya.** Pemenang nangkep kira-kira separuh gap nilai — buat race FTSE 100 rata-rata, **0.48 tick ≈ 1.2 bps ≈ sekitar £2**. Yang kalah itu maker, dipetik di stale quote (adverse selection mekanis), plus sniper yang order-nya gagal. Sekitar 20% race, setelah noise, bernilai nyaris gak ada atau kurang.

**Agregatnya.** Dua pound gak ada apa-apanya. Tapi simbol FTSE 100 rata-rata jalanin **537 race sehari**, dan seluruh FTSE 350 jalanin sekitar **71.000 sehari**, ngitung **~22%** volume FTSE 100 — semuanya dipadetin ke kira-kira **0.043 detik** dari hari trading. Back-of-envelope kasar: 71.000 race × ~£2 ≈ **£140.000 sehari**, ≈ **£35 juta setahun** — orde besaran yang sama kayak estimasi hati-hati paper-nya **~£60 juta/tahun** buat UK (model volume-dan-volatility-nya ngasih £51-63jt, karena pasar nyata punya hari volume-lebih-tinggi, volatility-lebih-tinggi daripada sampel 2015). Diekstrapolasi ke semua pasar saham global: **~USD 5 miliar setahun**.

**Siapa yang bayar.** Bukan cuma counterpart sniper — *semua orang*. Karena liquidity provider yang sistematis dipetik (realized spread mereka di dalam race **negatif**), mereka ngelebarin quote buat bertahan, dan latency-arbitrage tax dipungut dari tiap investor lewat **effective spread** — yang kira-kira sepertiganya nelusur ke race. Ngiris waktu jadi **frequent batch auctions** (Budish-Cramton-Shim) bakal ngilangin hadiah kecepatan dan, penulis estimasi, motong cost of liquidity **~17%**.`
      }
    },

    // ─────────────── 5. applications ───────────────
    {
      id: 'applications',
      heading: { en: 'Applications', id: 'Aplikasi' },
      body: {
        en: `**Why this matters beyond academia — and beyond equities.**

**Market design is a policy lever.** The headline practical implication is that the speed race is not a law of nature; it is an artifact of the continuous limit order book, and a different design removes it. **Frequent batch auctions** are the leading proposal, and the paper's measured ~17% cost-of-liquidity saving is the empirical case for them. Variants and relatives — speed bumps (IEX's 350-microsecond delay), randomized delays, and asymmetric "last look" — all attack the same winner-take-all-by-nanoseconds problem.

**It reframes what HFT spreads "cost."** A tight quoted spread can still hide a latency-arbitrage tax: part of the effective spread is the premium liquidity providers charge to cover being sniped. Execution desks and TCA (transaction-cost analysis) should recognize that some adverse selection is *mechanical and speed-driven*, not informed — and is concentrated in the microseconds after public signals.

**Speed spending is a prisoner's dilemma.** The arms race rewards relative, not absolute, speed: microwave towers, co-location, custom silicon. From a social standpoint the spend is largely wasteful — it reallocates the stale-quote prize without improving price discovery. That is the welfare argument (Biais-Foucault-Moinas) behind redesign.

**Crypto likely inherits the same flaw.** This is why the module sits in the crypto track. Centralized crypto exchanges are *also* continuous limit order books, often with weaker latency controls and co-location norms than regulated equity venues — so the same latency-arbitrage race can run there too, across and within venues (the cross-venue version is Makarov-Schoar). Decentralized exchanges face an even sharper version: **maximal extractable value (MEV)**, where block proposers reorder or insert transactions to snipe — the same stale-quote economics, played out in the mempool and the block. Anyone designing a crypto matching engine is, knowingly or not, choosing a position on the continuous-vs-batch question this paper makes concrete.

**The risk, stated plainly:** do not read a narrow quoted spread as a frictionless market. If the venue is a continuous limit order book, a measurable slice of the real cost of trading is the latency-arbitrage tax — and it is paid by the slow, which in a nanosecond race is almost everyone.`,
        id: `**Kenapa ini penting di luar akademia — dan di luar equity.**

**Market design itu tuas kebijakan.** Implikasi praktis headline-nya itu bahwa speed race bukan hukum alam; dia artefak dari continuous limit order book, dan desain berbeda ngilanginnya. **Frequent batch auctions** itu proposal terdepan, dan penghematan cost-of-liquidity ~17% yang terukur di paper itu argumen empiris buat mereka. Varian dan kerabatnya — speed bump (delay 350-mikrodetik IEX), randomized delay, dan "last look" asimetris — semua nyerang masalah winner-take-all-by-nanodetik yang sama.

**Dia nge-reframe apa yang spread HFT "biayain".** Quoted spread yang ketat masih bisa nyembunyiin latency-arbitrage tax: sebagian effective spread itu premium yang liquidity provider tagih buat nutup kena snipe. Execution desk dan TCA (transaction-cost analysis) harusnya nyadar bahwa sebagian adverse selection itu *mekanis dan speed-driven*, bukan informed — dan terkonsentrasi di mikrodetik setelah sinyal publik.

**Pengeluaran kecepatan itu prisoner's dilemma.** Arms race ngehadiahin kecepatan relatif, bukan absolut: menara microwave, co-location, silikon kustom. Dari sudut sosial pengeluaran itu sebagian besar boros — dia ngerealokasi hadiah stale-quote tanpa ngebaikin price discovery. Itu argumen welfare (Biais-Foucault-Moinas) di balik redesign.

**Crypto kemungkinan mewarisi cacat yang sama.** Ini kenapa modul ini ada di track crypto. Centralized crypto exchange *juga* continuous limit order book, sering dengan kontrol latency dan norma co-location yang lebih lemah daripada venue equity yang teregulasi — jadi race latency-arbitrage yang sama bisa jalan di sana juga, lintas dan dalam venue (versi lintas-venue-nya Makarov-Schoar). Decentralized exchange hadapi versi yang lebih tajam: **maximal extractable value (MEV)**, di mana block proposer ngurutin ulang atau nyisipin transaksi buat sniping — ekonomi stale-quote yang sama, dimainin di mempool dan block. Siapa pun yang ngedesain matching engine crypto itu, sadar atau enggak, milih posisi di pertanyaan continuous-vs-batch yang paper ini bikin konkret.

**Risikonya, terus terang:** jangan baca quoted spread yang sempit sebagai pasar tanpa friksi. Kalau venue-nya continuous limit order book, irisan terukur dari biaya nyata trading itu latency-arbitrage tax — dan dia dibayar sama yang lambat, yang di race nanodetik itu hampir semua orang.`
      }
    },

    // ─────────────── 6. practice ───────────────
    {
      id: 'practice',
      heading: { en: 'Practice', id: 'Latihan' },
      body: {
        en: `**1.** The average race is worth only about £2, yet the paper estimates the UK latency-arbitrage tax at roughly £60 million a year. Using this module's figures — about 71,000 races a day across the FTSE 350 and ~252 trading days a year — show how £2 per race reaches that order of magnitude, and explain why this back-of-envelope lands a bit *below* the paper's estimate.

<details><summary>Answer</summary>
71,000 races × ~£2 ≈ **£140,000 per day**; × 252 trading days ≈ **£35 million a year** — the right order of magnitude, produced by a trivially small per-race prize purely through frequency. It lands below the paper's ~£60 million central estimate (model range £51-63m) because the 2015 sample is a relatively calm, lower-volume period: the paper scales its estimate by volume and volatility, and real markets have busier, more volatile days on which races are both more frequent and more valuable. The lesson is that the size of latency arbitrage comes from *how often* it happens, not from any single race.
</details>

**2.** Inside races, liquidity providers earn a *realized* spread of about **−1.83 bps**; outside races it is about **+0.23 bps**. If makers lose money whenever they are caught in a race, why do they keep posting quotes at all — and how do they recoup the loss?

<details><summary>Answer</summary>
A maker cannot dodge races selectively: the *same* resting quote that earns the spread from ordinary (uninformed) flow is the quote that gets sniped when a public signal hits. Providing liquidity is therefore a bundle — small, frequent gains from normal flow plus occasional losses to faster snipers. Makers stay solvent by pricing the *expected* sniping loss into the quoted spread: they widen it until the profit from non-race flow covers the −1.83 bps bled in races. So the loss is recouped from every other trader through a wider **effective spread** — which is exactly why latency arbitrage is a tax on all investors, not just on the maker who was picked off.
</details>

**3.** The full-sample effective spread is about **3.17 bps** and the non-race latency-arbitrage tax is about **0.53 bps**. Compute the share of the effective spread attributable to latency arbitrage, and say what the remaining ~2.64 bps represents.

<details><summary>Answer</summary>
0.53 / 3.17 ≈ **0.167**, so about **17%** of the effective spread is the latency-arbitrage tax — the cost-of-liquidity reduction available if the speed race were removed. The residual, 3.17 − 0.53 ≈ **2.64 bps**, is the rest of the cost of liquidity: genuine inventory and order-processing costs, plus adverse selection against *privately* informed traders (the Kyle / Glosten-Milgrom kind). Those costs are not speed-driven, so a market-design fix aimed at the race would *not* remove them — only the ~17% speed slice is what frequent batch auctions take out.
</details>

**4.** This paper and Makarov-Schoar 2020 both describe arbitrage that ordinary intuition says should not survive. Contrast the *binding constraint* in each, and explain why the remedy is completely different.

<details><summary>Answer</summary>
Makarov-Schoar is *cross-venue* arbitrage whose binding constraint is **capital mobility** — moving fiat across borders through capital controls — so prices can diverge across countries for *weeks*, and the real remedy is about capital flow, not exchange design. Aquilina-Budish-O'Neill is *within-venue* arbitrage whose binding constraint is **speed** — being a nanosecond faster to a stale quote — so the deviation lasts *microseconds*, and the remedy is a market-design change (frequent batch auctions) that makes raw speed worthless within a batch. One is slow and capital-bounded, the other instantaneous and latency-bounded; together they show prices fail to be a single number along two different axes — space and time.
</details>`,
        id: `**1.** Race rata-rata cuma bernilai sekitar £2, tapi paper-nya estimasi latency-arbitrage tax UK kira-kira £60 juta setahun. Pakai angka modul ini — sekitar 71.000 race sehari di FTSE 350 dan ~252 hari trading setahun — tunjukin gimana £2 per race nyampe orde besaran itu, dan jelasin kenapa back-of-envelope ini mendarat sedikit *di bawah* estimasi paper-nya.

<details><summary>Jawaban</summary>
71.000 race × ~£2 ≈ **£140.000 sehari**; × 252 hari trading ≈ **£35 juta setahun** — orde besaran yang bener, dihasilin dari hadiah per-race yang sepele kecil murni lewat frekuensi. Dia mendarat di bawah estimasi sentral paper-nya ~£60 juta (range model £51-63jt) karena sampel 2015 itu periode yang relatif tenang, volume-lebih-rendah: paper-nya nge-scale estimasinya sama volume dan volatility, dan pasar nyata punya hari yang lebih sibuk dan lebih volatile di mana race lebih sering sekaligus lebih bernilai. Pelajarannya, ukuran latency arbitrage datang dari *seberapa sering* dia terjadi, bukan dari satu race mana pun.
</details>

**2.** Di dalam race, liquidity provider dapet *realized* spread sekitar **−1.83 bps**; di luar race sekitar **+0.23 bps**. Kalau maker rugi duit tiap kali ketangkep di race, kenapa mereka tetep posting quote — dan gimana mereka balik modal dari rugi itu?

<details><summary>Jawaban</summary>
Maker gak bisa ngehindarin race secara selektif: resting quote yang *sama* yang dapet spread dari flow biasa (uninformed) itu quote yang disnipe pas sinyal publik datang. Nyediain liquidity karenanya paket — gain kecil-sering dari flow normal plus rugi sesekali ke sniper yang lebih cepet. Maker tetep solven dengan ngehargai *expected* sniping loss ke quoted spread: mereka ngelebarinnya sampai profit dari flow non-race nutup −1.83 bps yang berdarah di race. Jadi ruginya dibalikin dari tiap trader lain lewat **effective spread** yang lebih lebar — yang persis kenapa latency arbitrage itu pajak buat semua investor, bukan cuma buat maker yang kena petik.
</details>

**3.** Full-sample effective spread sekitar **3.17 bps** dan non-race latency-arbitrage tax sekitar **0.53 bps**. Hitung share effective spread yang diatribusiin ke latency arbitrage, dan sebutin apa yang sisa ~2.64 bps itu representasiin.

<details><summary>Jawaban</summary>
0.53 / 3.17 ≈ **0.167**, jadi sekitar **17%** effective spread itu latency-arbitrage tax — pengurangan cost-of-liquidity yang tersedia kalau speed race-nya dihapus. Sisanya, 3.17 − 0.53 ≈ **2.64 bps**, itu sisa cost of liquidity: biaya inventory dan order-processing yang asli, plus adverse selection lawan trader yang *privat* berinformasi (jenis Kyle / Glosten-Milgrom). Biaya-biaya itu bukan speed-driven, jadi fix market-design yang nargetin race *gak* bakal ngilangin mereka — cuma irisan speed ~17% yang frequent batch auctions keluarin.
</details>

**4.** Paper ini dan Makarov-Schoar 2020 keduanya ngedeskripsiin arbitrage yang intuisi biasa bilang harusnya gak bertahan. Kontras-in *binding constraint* di masing-masing, dan jelasin kenapa remedy-nya beda total.

<details><summary>Jawaban</summary>
Makarov-Schoar itu arbitrage *lintas-venue* yang binding constraint-nya **mobilitas modal** — mindahin fiat lintas perbatasan lewat capital controls — jadi harga bisa divergen antar negara berminggu-minggu, dan remedy aslinya soal aliran modal, bukan desain exchange. Aquilina-Budish-O'Neill itu arbitrage *dalam-venue* yang binding constraint-nya **kecepatan** — jadi satu nanodetik lebih cepet ke stale quote — jadi deviasinya tahan *mikrodetik*, dan remedy-nya perubahan market-design (frequent batch auctions) yang bikin kecepatan mentah gak berharga dalam satu batch. Satu lambat dan terbatas-modal, yang lain instan dan terbatas-latency; bareng mereka nunjukin harga gagal jadi satu angka di dua sumbu berbeda — ruang dan waktu.
</details>`
      }
    },

    // ─────────────── 7. connections ───────────────
    {
      id: 'connections',
      heading: { en: 'Connections', id: 'Koneksi' },
      body: {
        en: `- **Mechanism**: [Kyle 1985](item:kyle-1985) is the anchor — sniping is *mechanical* adverse selection (public-signal, speed-driven) rather than the private-information adverse selection Kyle models, but the price-impact $\\lambda$ and the widen-to-survive logic are the same.
- **Market making**: [Avellaneda-Stoikov 2008](item:stoikov-2008) is the picked-off party — latency arbitrage is an extra adverse-selection cost the maker must load into the half-spread, on top of inventory risk.
- **Order flow & execution**: [Cont-Kukanov-Stoikov 2014](item:cont-kukanov-stoikov-2014) (OFI) is the short-horizon signal a sniper races on; [Almgren-Chriss 2000](item:almgren-chriss-2000) frames the latency tax as one more component of implementation shortfall.
- **The other arbitrage**: [Makarov-Schoar 2020](item:makarov-schoar-2020) is the *cross-venue, capital-constrained* arbitrage; this paper is the *within-venue, speed-constrained* race — together they map both axes of how prices fail to be a single number.
- **Builds toward**: the market-design literature on frequent batch auctions (Budish-Cramton-Shim 2015), speed bumps, and — in crypto — maximal extractable value (MEV), the on-chain analogue of the same stale-quote race.`,
        id: `- **Mekanisme**: [Kyle 1985](item:kyle-1985) itu jangkarnya — sniping itu adverse selection *mekanis* (sinyal-publik, speed-driven) bukan adverse selection informasi-privat yang Kyle modelin, tapi price-impact $\\lambda$ dan logika lebarin-buat-bertahan-nya sama.
- **Market making**: [Avellaneda-Stoikov 2008](item:stoikov-2008) itu pihak yang dipetik — latency arbitrage itu biaya adverse-selection ekstra yang maker harus muat ke half-spread, di atas inventory risk.
- **Order flow & eksekusi**: [Cont-Kukanov-Stoikov 2014](item:cont-kukanov-stoikov-2014) (OFI) itu sinyal jangka-pendek yang sniper balapin; [Almgren-Chriss 2000](item:almgren-chriss-2000) ngeframe latency tax sebagai satu komponen lagi dari implementation shortfall.
- **Arbitrage yang lain**: [Makarov-Schoar 2020](item:makarov-schoar-2020) itu arbitrage *lintas-venue, terbatas-modal*; paper ini race *dalam-venue, terbatas-kecepatan* — bareng mereka memetakan dua sumbu gimana harga gagal jadi satu angka.
- **Builds toward**: literatur market-design soal frequent batch auctions (Budish-Cramton-Shim 2015), speed bump, dan — di crypto — maximal extractable value (MEV), analog on-chain dari race stale-quote yang sama.`
      }
    },

    // ─────────────── 8. sources ───────────────
    {
      id: 'sources',
      heading: { en: 'Sources', id: 'Sumber' },
      body: {
        en: `- **Aquilina, M., Budish, E., and O'Neill, P.** (2022). "Quantifying the High-Frequency Trading 'Arms Race'." *Quarterly Journal of Economics*, 137(1), 493-564. The message-data measurement of latency-arbitrage races. **(This item.)**
- **Budish, E., Cramton, P., and Shim, J.** (2015). "The High-Frequency Trading Arms Race: Frequent Batch Auctions as a Market Design Response to the Limit Order Book." *Quarterly Journal of Economics*, 130(4), 1547-1621. The theoretical predecessor — the continuous-book flaw and the batch-auction fix this paper tests.
- **Kyle, A. S.** (1985). "Continuous Auctions and Insider Trading." *Econometrica*, 53(6), 1315-1335. The adverse-selection / price-impact framework; sniping is its mechanical, public-signal cousin.
- **Foucault, T., Kozhan, R., and Tham, W. W.** (2017). "Toxic Arbitrage." *The Review of Financial Studies*, 30(4), 1053-1094. The same stale-quote sniping measured in triangular FX — arbitrage that is "toxic" because it picks off slow quotes.
- **Biais, B., Foucault, T., and Moinas, S.** (2015). "Equilibrium Fast Trading." *Journal of Financial Economics*, 116(2), 292-313. Why traders over-invest in speed — the arms-race-as-prisoner's-dilemma welfare argument.`,
        id: `- **Aquilina, M., Budish, E., dan O'Neill, P.** (2022). "Quantifying the High-Frequency Trading 'Arms Race'." *Quarterly Journal of Economics*, 137(1), 493-564. Pengukuran message-data dari race latency-arbitrage. **(Item ini.)**
- **Budish, E., Cramton, P., dan Shim, J.** (2015). "The High-Frequency Trading Arms Race: Frequent Batch Auctions as a Market Design Response to the Limit Order Book." *Quarterly Journal of Economics*, 130(4), 1547-1621. Predecessor teoritis — cacat continuous-book dan fix batch-auction yang paper ini tes.
- **Kyle, A. S.** (1985). "Continuous Auctions and Insider Trading." *Econometrica*, 53(6), 1315-1335. Framework adverse-selection / price-impact; sniping itu sepupu mekanis, sinyal-publik-nya.
- **Foucault, T., Kozhan, R., dan Tham, W. W.** (2017). "Toxic Arbitrage." *The Review of Financial Studies*, 30(4), 1053-1094. Sniping stale-quote yang sama diukur di triangular FX — arbitrage yang "toxic" karena metik quote yang lambat.
- **Biais, B., Foucault, T., dan Moinas, S.** (2015). "Equilibrium Fast Trading." *Journal of Financial Economics*, 116(2), 292-313. Kenapa trader over-invest di kecepatan — argumen welfare arms-race-sebagai-prisoner's-dilemma.`
      }
    },
  ],

  audio: { enabled: true },

  selfTest: [
    {
      sectionId: 'intuition',
      question: {
        en: 'Latency arbitrage is a form of adverse selection, yet unlike Kyle (1985) it involves no private information. Where does the rent come from, and why does that make it a pure speed race?',
        id: 'Latency arbitrage itu bentuk adverse selection, tapi beda dari Kyle (1985) dia gak ngelibatin private information. Rent-nya datang dari mana, dan kenapa itu bikin dia pure speed race?'
      },
      prompt: { en: 'Before continuing, try answering:', id: 'Sebelum lanjut, coba jawab:' },
      answer: {
        en: 'The signal is public and symmetric — every fast trader sees the same correlated-asset move at the same instant. The rent comes not from knowing something others do not, but from acting on shared public news a few nanoseconds faster. Because only timing differs, the contest is a pure speed race: the exchange processes messages serially, so whoever reaches the matching engine first wins the single stale quote, and the market maker is picked off mechanically (for being slow) rather than for being less informed.',
        id: 'Sinyalnya publik dan simetris — tiap trader cepet liat correlated-asset move yang sama di instan yang sama. Rent-nya datang bukan dari tau sesuatu yang orang lain gak tau, tapi dari bertindak di public news yang sama beberapa nanodetik lebih cepet. Karena cuma timing yang beda, kontesnya pure speed race: exchange proses message secara serial, jadi siapa yang nyampe matching engine duluan menang satu stale quote itu, dan market maker dipetik secara mekanis (karena lambat) bukan karena kurang informasi.'
      }
    },
    {
      sectionId: 'formalization',
      question: {
        en: 'Standard limit-order-book data existed for years, but latency-arbitrage races had never been cleanly counted. What was missing from order-book data, and what data did the authors use instead?',
        id: 'Data limit-order-book udah ada bertahun-tahun, tapi race latency-arbitrage gak pernah dihitung dengan bersih. Apa yang hilang dari data order-book, dan data apa yang dipakai penulis sebagai gantinya?'
      },
      prompt: { en: 'Before continuing, try answering:', id: 'Sebelum lanjut, coba jawab:' },
      answer: {
        en: 'Order-book data show only orders that succeeded — the trade that printed, the quote that was cancelled — but not the orders that tried and failed. A race is defined by failed attempts: many participants fire at one stale quote and all but one lose, so without the losers you cannot see the race at all. The authors used exchange message data from the London Stock Exchange (obtained by the FCA), which record every inbound message including failed trade and cancel attempts. That made both the winner and the losers of each race observable, letting them count races and time them to the microsecond.',
        id: 'Data order-book cuma nunjukin order yang berhasil — trade yang tercetak, quote yang di-cancel — tapi bukan order yang nyoba dan gagal. Race itu didefinisiin sama percobaan yang gagal: banyak peserta nembak satu stale quote dan semua kecuali satu kalah, jadi tanpa yang kalah kamu gak bisa liat race-nya sama sekali. Penulis pakai message data exchange dari London Stock Exchange (didapat FCA), yang ngerekam tiap inbound message termasuk percobaan trade dan cancel yang gagal. Itu bikin baik pemenang maupun yang kalah di tiap race keliatan, ngebolehin mereka ngitung race dan nge-time-nya sampai mikrodetik.'
      }
    },
    {
      sectionId: 'formalization',
      question: {
        en: 'Each race is worth about £2 and the latency-arbitrage tax is only ~0.5 bps, yet the authors say eliminating it would cut the cost of liquidity by ~17%. Reconcile these, and say who pays the tax.',
        id: 'Tiap race cuma bernilai sekitar £2 dan latency-arbitrage tax cuma ~0.5 bps, tapi penulis bilang ngilanginnya bakal motong cost of liquidity ~17%. Rekonsiliasi ini, dan sebutin siapa yang bayar pajaknya.'
      },
      prompt: { en: 'Before continuing, try answering:', id: 'Sebelum lanjut, coba jawab:' },
      answer: {
        en: 'The per-race prize is tiny but races are relentless — about 71,000 a day across the FTSE 350, around 22% of FTSE 100 volume — so the aggregate tax is large (~£60m/year UK, ~USD 5bn/year globally). It is paid by liquidity providers, who are the party picked off on stale quotes: their realized spread inside races is negative (about −1.83 bps). To break even they widen their quotes, so the tax is baked into the effective spread that all investors trade against. The ~17% is the ratio of the non-race tax to the effective spread (≈ 0.53 / 3.17) — remove the race and that share of the spread can come out. Ordinary investors pay it through spreads even though they never run a server.',
        id: 'Hadiah per-race kecil tapi race-nya gak berhenti — sekitar 71.000 sehari di FTSE 350, sekitar 22% volume FTSE 100 — jadi pajak agregatnya gede (~£60jt/tahun UK, ~USD 5miliar/tahun global). Yang bayar itu liquidity provider, pihak yang dipetik di stale quote: realized spread mereka di dalam race negatif (sekitar −1.83 bps). Buat balik modal mereka ngelebarin quote, jadi pajaknya nempel di effective spread yang semua investor trade lawan. ~17% itu rasio non-race tax ke effective spread (≈ 0.53 / 3.17) — ilangin race-nya dan porsi spread itu bisa keluar. Investor biasa bayar lewat spread walaupun mereka gak pernah ngejalanin server.'
      }
    },
    {
      sectionId: 'applications',
      question: {
        en: 'The race is created by the continuous limit order book. What is the leading market-design fix, why does it work, and why might the same problem extend to crypto?',
        id: 'Race-nya diciptain sama continuous limit order book. Apa fix market-design utamanya, kenapa dia bekerja, dan kenapa masalah yang sama mungkin meluas ke crypto?'
      },
      prompt: { en: 'Before continuing, try answering:', id: 'Sebelum lanjut, coba jawab:' },
      answer: {
        en: 'The leading fix is frequent batch auctions: the exchange collects orders over a short interval and clears them together at a single uniform price, so within a batch arriving a nanosecond earlier wins nothing — the value of raw speed drops to zero and competition shifts from speed back to price. The same problem plausibly extends to crypto because centralized crypto exchanges are themselves continuous limit order books (often with weaker latency controls), so the identical stale-quote race can run there; and decentralized exchanges face an analogous on-chain problem, maximal extractable value (MEV), where block proposers reorder or insert transactions to snipe. (The paper studies equities; reading its logic onto crypto is the analogy this module draws.)',
        id: 'Fix utamanya frequent batch auctions: exchange ngumpulin order over interval pendek dan ngeclear mereka bareng di satu harga uniform, jadi dalam satu batch nyampe satu nanodetik lebih awal gak menang apa-apa — nilai kecepatan mentah jatuh ke nol dan kompetisi geser dari kecepatan balik ke harga. Masalah yang sama kemungkinan meluas ke crypto karena centralized crypto exchange itu sendiri continuous limit order book (sering dengan kontrol latency lebih lemah), jadi race stale-quote yang identik bisa jalan di sana; dan decentralized exchange hadapi masalah on-chain yang analog, maximal extractable value (MEV), di mana block proposer ngurutin ulang atau nyisipin transaksi buat sniping. (Paper-nya ngestudi equity; ngebaca logikanya ke crypto itu analogi yang modul ini tarik.)'
      }
    },
  ],
};
