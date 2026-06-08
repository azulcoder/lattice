export const CONTENT = {
  itemId: 'budish-cramton-shim-2015',
  estimatedReadMinutes: 40,

  author: {
    fullName: { en: 'Eric Budish, Peter Cramton & John Shim', id: 'Eric Budish, Peter Cramton & John Shim' },
    affiliation: {
      en: 'Budish: Paul G. McDermott Professor of Economics and Entrepreneurship, University of Chicago Booth School of Business; NBER. Cramton: Professor of Economics, University of Maryland (and University of Cologne); auction & market designer. Shim: Assistant Professor of Finance, University of Notre Dame, Mendoza College of Business (a Chicago Booth PhD when the paper was written).',
      id: 'Budish: Paul G. McDermott Professor of Economics and Entrepreneurship, University of Chicago Booth School of Business; NBER. Cramton: Professor of Economics, University of Maryland (dan University of Cologne); auction & market designer. Shim: Assistant Professor of Finance, University of Notre Dame, Mendoza College of Business (masih PhD Chicago Booth pas paper-nya ditulis).'
    },
    tagline: {
      en: 'The paper that diagnosed the speed race as a market-design bug, not a law of nature — the continuous limit order book turns symmetric public information into a winner-take-all sprint, and frequent batch auctions are the proposed cure.',
      id: 'Paper yang ngediagnosis speed race sebagai bug market-design, bukan hukum alam — continuous limit order book ngubah informasi publik yang simetris jadi sprint winner-take-all, dan frequent batch auctions itu obat yang diusulin.'
    },
    bio: {
      en: `This is a market-design collaboration in the tradition of mechanism design applied to real institutions. **Eric Budish** is the Paul G. McDermott Professor at the University of Chicago Booth School of Business and a leading market designer in the lineage of his Harvard PhD advisor Alvin Roth; alongside this paper he designed the A-CEEI course-allocation mechanism ("Course Match") and works on the economic limits of blockchains. **Peter Cramton** is a Professor of Economics at the University of Maryland (and the University of Cologne) with a career designing high-stakes auctions — FCC spectrum auctions, electricity and gas markets, financial-market mechanisms — i.e. exactly the practitioner-grade auction expertise the batch-auction proposal needs. **John Shim** was a PhD student at Chicago Booth when the paper was written and is now an Assistant Professor of Finance at the University of Notre Dame.

The three-way match is deliberate: a mechanism-design theorist (Budish), an auction-design practitioner (Cramton), and an empirically-fluent finance PhD (Shim). The paper's two halves — an empirical demonstration that continuous markets "break" at high frequency, and a theoretical model with a market-design fix — reflect that split.`,
      id: `Ini kolaborasi market-design dalam tradisi mechanism design yang diterapin ke institusi nyata. **Eric Budish** itu Paul G. McDermott Professor di University of Chicago Booth School of Business dan market designer terkemuka dalam garis keturunan advisor PhD Harvard-nya, Alvin Roth; selain paper ini dia ngedesain mekanisme alokasi-mata-kuliah A-CEEI ("Course Match") dan kerja soal batas ekonomi blockchain. **Peter Cramton** itu Professor of Economics di University of Maryland (dan University of Cologne) dengan karier ngedesain lelang high-stakes — lelang spektrum FCC, pasar listrik dan gas, mekanisme pasar finansial — yaitu persis keahlian auction kelas-praktisi yang proposal batch-auction butuhin. **John Shim** itu mahasiswa PhD di Chicago Booth pas paper-nya ditulis dan sekarang Assistant Professor of Finance di University of Notre Dame.

Match tiga-arahnya disengaja: seorang mechanism-design theorist (Budish), seorang auction-design practitioner (Cramton), dan seorang finance PhD yang fasih empiris (Shim). Dua paruh paper-nya — demonstrasi empiris bahwa pasar continuous "rusak" di high frequency, dan model teoritis dengan fix market-design — mencerminkan pembagian itu.`
    },
    focus: {
      en: `Is the high-frequency speed race a problem to be regulated, or a symptom of a deeper flaw in how exchanges are designed? Budish, Cramton and Shim argue the latter. The continuous limit order book — used by virtually every major exchange — treats time as a continuous flow but processes orders *serially*, one message at a time. That combination, they show, is the bug. When new public information arrives (a correlated index move, a futures tick), every fast trader sees it at once, and serial processing turns "act on the news" into "be the first packet to the matching engine." The result is a mechanical, winner-take-all sniping race over resting quotes, an arms race in speed that is socially wasteful, and a bid-ask spread that exists *even with no private information*. Their proposed fix is a different market design — **frequent batch auctions**: treat time as discrete, batch all orders arriving in a short interval, and clear them together at a single uniform price. Within a batch a nanosecond's head start is worthless, so competition shifts from speed back to price.`,
      id: `Apakah high-frequency speed race itu masalah yang harus diregulasi, atau gejala dari cacat lebih dalam di cara exchange didesain? Budish, Cramton dan Shim ngeklaim yang kedua. Continuous limit order book — dipakai hampir tiap exchange besar — memperlakukan waktu sebagai aliran continuous tapi proses order secara *serial*, satu message per satu waktu. Kombinasi itu, mereka tunjukin, itu bug-nya. Pas informasi publik baru datang (gerakan indeks berkorelasi, futures tick), tiap trader cepet liat sekaligus, dan proses serial ngubah "bertindak di berita" jadi "jadi paket pertama ke matching engine." Hasilnya race sniping mekanis, winner-take-all, di atas resting quote, sebuah arms race di kecepatan yang boros secara sosial, dan bid-ask spread yang ada *bahkan tanpa informasi privat*. Fix yang mereka usulin itu market design berbeda — **frequent batch auctions**: perlakukan waktu sebagai diskrit, batch semua order yang datang dalam interval pendek, dan clear mereka bareng di satu harga uniform. Dalam satu batch, head-start satu nanodetik gak berharga, jadi kompetisi geser dari kecepatan balik ke harga.`
    },
    intellectualLineage: {
      en: `The method is **market design** — Alvin Roth's program of treating real institutions as engineering objects — applied to the matching engine of a stock exchange. The economic mechanism is descended from **Glosten-Milgrom (1985)** and **Kyle (1985)**: a positive bid-ask spread as compensation for adverse selection. The paper's twist is that here the adverse selection is *mechanical and public-information-driven* — the maker is sniped for being slow, not for facing a privately-informed counterparty — so the spread survives even when nobody knows anything others don't. The auction half draws on the **uniform-price double auction** tradition (Cramton's auction-design career, and the classical theory of call markets). The welfare framing — that competition in speed is a wasteful, rent-dissipating **prisoner's dilemma** — is shared with **Biais-Foucault-Moinas (2015)** "Equilibrium Fast Trading." And the empirical companion, **Aquilina-Budish-O'Neill (2022)**, is the later measurement that catches the very races this paper predicts, in exchange message data, and prices the tax.`,
      id: `Metodenya **market design** — program Alvin Roth memperlakukan institusi nyata sebagai objek engineering — diterapin ke matching engine sebuah bursa saham. Mekanisme ekonominya turunan dari **Glosten-Milgrom (1985)** dan **Kyle (1985)**: bid-ask spread positif sebagai kompensasi adverse selection. Twist paper-nya, di sini adverse selection-nya *mekanis dan didorong-informasi-publik* — maker disnipe karena lambat, bukan karena hadapi counterparty yang berinformasi privat — jadi spread-nya bertahan bahkan pas gak ada yang tau sesuatu yang orang lain gak tau. Paruh auction-nya narik dari tradisi **uniform-price double auction** (karier auction-design Cramton, dan teori klasik call market). Framing welfare-nya — bahwa kompetisi di kecepatan itu **prisoner's dilemma** yang boros, ngedissipasi rent — dibagi sama **Biais-Foucault-Moinas (2015)** "Equilibrium Fast Trading." Dan pendamping empiris-nya, **Aquilina-Budish-O'Neill (2022)**, itu pengukuran belakangan yang nangkep persis race yang paper ini prediksi, di message data exchange, dan ngehargai pajaknya.`
    },
    keyCollaborators: {
      en: `**Each other**, above all — Budish-Cramton-Shim is a defining collaboration for all three. Budish's wider circle includes **Alvin Roth** (his market-design lineage), **Estelle Cantillon** and **Judd Kessler** (course allocation), and **Paul Milgrom** and **Scott Duke Kominers** (market design); the empirical sequel adds **Matteo Aquilina** and **Peter O'Neill**. Cramton's auction-design work connects him to the spectrum-auction circle around **Paul Milgrom** and **Robert Wilson** (the 2020 Nobel laureates in auction theory). The intellectual touchstones invoked are **Kyle** and **Glosten-Milgrom** (adverse selection) and **Thierry Foucault** (fast-trading theory).`,
      id: `**Satu sama lain**, di atas segalanya — Budish-Cramton-Shim itu kolaborasi yang ngedefinisiin buat ketiganya. Lingkaran Budish yang lebih luas termasuk **Alvin Roth** (garis keturunan market-design-nya), **Estelle Cantillon** dan **Judd Kessler** (alokasi mata kuliah), dan **Paul Milgrom** dan **Scott Duke Kominers** (market design); sekuel empiris-nya nambah **Matteo Aquilina** dan **Peter O'Neill**. Kerja auction-design Cramton nyambungin dia ke lingkaran lelang-spektrum di sekitar **Paul Milgrom** dan **Robert Wilson** (peraih Nobel 2020 di teori lelang). Tonggak intelektual yang dipanggil itu **Kyle** dan **Glosten-Milgrom** (adverse selection) dan **Thierry Foucault** (teori fast-trading).`
    },
    legacy: {
      en: `This is the paper that reframed the HFT debate from "are fast traders good or bad?" to "is the continuous limit order book the right *design*?" — and gave a constructive answer. Three contributions endure. First, the **diagnosis**: it isolated the mechanism (continuous time + serial processing) that converts symmetric public information into a speed race, and showed the resulting bid-ask spread and arms race are equilibrium features of that design, not misbehaviour to be policed. Second, the **prescription**: frequent batch auctions became the canonical market-design response, spawning a literature on speed bumps, randomized delays, and asymmetric speed bumps, and informing real venues — IEX's 350-microsecond delay, proposals for batch auctions at exchanges, and batch-auction designs in crypto (e.g. CoW Protocol's batch settlement, Penumbra). Third, the **bridge to empirics**: the companion Aquilina-Budish-O'Neill (2022) measured the predicted races directly, turning the theory's "tax" into a number (~0.5 bps of all trading; on the order of USD 5 billion a year globally). The paper's deepest idea travels beyond finance: when a market processes events serially in continuous time, it manufactures an artificial race for speed — a lesson now central to crypto market design, where the same flaw reappears as maximal extractable value (MEV) and motivates batched, sealed, or fair-ordering settlement.`,
      id: `Ini paper yang nge-reframe debat HFT dari "apakah trader cepet baik atau buruk?" jadi "apakah continuous limit order book itu *desain* yang benar?" — dan ngasih jawaban konstruktif. Tiga kontribusi bertahan. Pertama, **diagnosis**: dia ngisolasi mekanisme (continuous time + proses serial) yang ngubah informasi publik simetris jadi speed race, dan nunjukin bid-ask spread serta arms race yang dihasilin itu fitur equilibrium dari desain itu, bukan kelakuan buruk yang harus dipoles. Kedua, **resep**: frequent batch auctions jadi respons market-design kanonik, ngelahirin literatur soal speed bump, randomized delay, dan asymmetric speed bump, dan nginformasiin venue nyata — delay 350-mikrodetik IEX, proposal batch auction di bursa, dan desain batch-auction di crypto (misal batch settlement CoW Protocol, Penumbra). Ketiga, **jembatan ke empiris**: pendamping Aquilina-Budish-O'Neill (2022) ngukur race yang diprediksi secara langsung, ngubah "pajak" teori-nya jadi angka (~0.5 bps dari semua trading; dalam orde USD 5 miliar setahun global). Ide terdalam paper-nya jalan di luar finance: pas sebuah pasar proses event secara serial di continuous time, dia ngebikin race buatan buat kecepatan — pelajaran yang sekarang sentral di market design crypto, di mana cacat yang sama muncul lagi sebagai maximal extractable value (MEV) dan ngedorong settlement yang batched, sealed, atau fair-ordering.`
    },
    keyWorks: [
      { year: 2015, title: 'The High-Frequency Trading Arms Race: Frequent Batch Auctions as a Market Design Response (this item)', venue: 'Quarterly Journal of Economics' },
      { year: 2022, title: 'Quantifying the High-Frequency Trading "Arms Race" (Aquilina, Budish & O\'Neill)', venue: 'Quarterly Journal of Economics' },
      { year: 2011, title: 'The Combinatorial Assignment Problem: Approximate Competitive Equilibrium from Equal Incomes (Budish)', venue: 'Journal of Political Economy' },
      { year: 1997, title: 'The FCC Spectrum Auctions: An Early Assessment (McMillan / Cramton-era spectrum-auction design)', venue: 'Journal of Economics & Management Strategy' },
      { year: 2018, title: 'Will the Blockchain Transform the Economic Organization of Markets? / the economic limits of trust (Budish)', venue: 'NBER / AEA P&P' },
    ],
  },

  sections: [
    // ─────────────── 1. motivation ───────────────
    {
      id: 'motivation',
      heading: { en: 'Why this matters', id: 'Kenapa ini penting' },
      body: {
        en: `Almost every major exchange on earth runs the same market design: a **continuous limit order book** (CLOB). Orders rest in a book; new orders arrive and are processed the instant they reach the matching engine; price-time priority decides who trades. It feels natural — "continuous" sounds like the most responsive a market could be. Budish, Cramton and Shim (2015) argue it is, in fact, a **flawed design**, and that the high-frequency trading arms race is the symptom.

The flaw is a contradiction at the heart of the CLOB: it treats time as a *continuous* variable but processes messages *serially*, one at a time, in the order they arrive. So when a piece of public information moves the fair value of an asset, every fast trader sees it at the same instant — and they all want to act on the same resting quote at the same time. Serial processing breaks the tie by *arrival order*, turning "who reacts to public news" into "whose packet reaches the matching engine first, by nanoseconds." A race.

Two empirical facts set up the argument. First, **correlation breakdown**: two essentially identical instruments — the E-mini S&P 500 futures (ES) and the SPDR S&P 500 ETF (SPY) — have a return correlation near 1 at human time scales (minutes, seconds), but that correlation *collapses toward zero* at millisecond resolution. At high frequency, "the same" asset is not one price but two prices that constantly drift apart and snap back. Second, those snap-backs are **arbitrage opportunities that never die**: an ES move that SPY hasn't matched yet is money for whoever is fastest. Over 2005-2011 the *duration* of these ES-SPY arbitrages shrank dramatically — median about **97 milliseconds in 2005 to about 7 milliseconds in 2011** — but their *frequency* and *profitability per opportunity stayed roughly constant*.

That last fact is the whole paper in miniature. Getting faster did not compete the arbitrage away; it only raised the bar for how fast you must be to capture it. That is the signature of an **arms race**: an endless, socially wasteful contest in speed whose prize never shrinks. The continuous limit order book manufactures the race; this paper proposes a market design — **frequent batch auctions** — that does not.`,
        id: `Hampir tiap bursa besar di bumi jalanin market design yang sama: **continuous limit order book** (CLOB). Order beristirahat di book; order baru datang dan diproses begitu nyampe matching engine; price-time priority nentuin siapa yang trade. Rasanya natural — "continuous" kedengeran kayak paling responsif yang bisa dicapai pasar. Budish, Cramton dan Shim (2015) ngeklaim dia, sebenernya, **desain yang cacat**, dan high-frequency trading arms race itu gejalanya.

Cacatnya itu kontradiksi di jantung CLOB: dia memperlakukan waktu sebagai variabel *continuous* tapi proses message secara *serial*, satu per satu, dalam urutan kedatangan. Jadi pas sepotong informasi publik gerakin fair value sebuah aset, tiap trader cepet liat di instan yang sama — dan mereka semua pengen bertindak di resting quote yang sama di waktu yang sama. Proses serial mecahin tie berdasar *urutan kedatangan*, ngubah "siapa bereaksi ke berita publik" jadi "paket siapa yang nyampe matching engine duluan, dalam nanodetik." Sebuah race.

Dua fakta empiris nyusun argumennya. Pertama, **correlation breakdown**: dua instrumen yang pada dasarnya identik — E-mini S&P 500 futures (ES) dan SPDR S&P 500 ETF (SPY) — punya korelasi return deket 1 di skala waktu manusia (menit, detik), tapi korelasi itu *kolaps ke nol* di resolusi milidetik. Di high frequency, "aset yang sama" bukan satu harga tapi dua harga yang terus melenceng dan balik lagi. Kedua, snap-back itu **peluang arbitrage yang gak pernah mati**: gerakan ES yang belum disamain SPY itu duit buat siapa pun yang paling cepet. Over 2005-2011 *durasi* arbitrage ES-SPY ini menyusut drastis — median sekitar **97 milidetik di 2005 ke sekitar 7 milidetik di 2011** — tapi *frekuensi* dan *profitabilitas per peluangnya tetep kira-kira konstan*.

Fakta terakhir itu seluruh paper dalam miniatur. Jadi lebih cepet gak ngekompetisi arbitrage-nya sampe ilang; dia cuma naikin bar seberapa cepet kamu harus jadi buat nangkepnya. Itu tanda tangan sebuah **arms race**: kontes tak berujung, boros secara sosial, di kecepatan yang hadiahnya gak pernah menyusut. Continuous limit order book ngebikin race-nya; paper ini ngusulin market design — **frequent batch auctions** — yang enggak.`
      }
    },

    // ─────────────── 2. intuition ───────────────
    {
      id: 'intuition',
      heading: { en: 'Intuition', id: 'Intuisi' },
      body: {
        en: `Start with the snipe. A liquidity provider rests an offer to sell at 100.05. A public signal — the correlated future just ticked up — tells everyone fast, at the same instant, that fair value is now 100.10. That resting offer is **stale**: a standing promise to sell below the new value. In the next microseconds two things happen at once. Fast *takers* fire marketable buy orders to lift the stale offer (buy at 100.05 something worth 100.10); the *maker* fires a cancel to pull it. Because the exchange processes messages serially, the winner is simply whoever's message lands first. One stale quote, many racers, a few nanoseconds — **winner-take-all**.

Notice what is *not* happening: nobody has private information. Everyone is reacting to the same public signal. This is the crucial contrast with Kyle (1985) and Glosten-Milgrom, where the trader who moves the price knows something the maker does not. Here the rent comes purely from being a few nanoseconds *faster* at acting on what everyone already knows. It is a **speed** race, not an information game — which is why throwing more speed at it never resolves it.

Now the consequence for spreads. The maker cannot avoid this: the very same resting quote that earns the spread from ordinary, uninformed flow is the quote that gets sniped when news hits. So providing liquidity is a bundle of small frequent gains plus occasional **mechanical adverse selection** losses to whoever is faster. A risk-neutral, perfectly competitive maker who must break even responds the only way possible — by **widening the spread** until the gains from ordinary flow cover the sniping losses. The startling result: a positive bid-ask spread emerges *even though no one has private information and makers are competitive and risk-neutral*. The spread is the price of being sniped, and **every** investor pays it.

And the speed spending? It is a **prisoner's dilemma**. Some firms invest in speed to snipe; others invest to avoid being sniped. In equilibrium the spend on speed dissipates the sniping rents — a constant-sum redistribution that produces no better prices and no new information, only a faster treadmill. Each firm would be better off if nobody raced, but given that others race, each must too.

The fix follows directly from the diagnosis. The race exists because being first-by-a-nanosecond *matters*. Make it not matter: slice time into short intervals, treat every order arriving within an interval as **simultaneous**, and clear them together at a single **uniform price**. Inside a batch, arriving a nanosecond earlier wins nothing — so the speed prize vanishes and competition moves back to the one dimension that should decide who trades: **price**. That is a frequent batch auction.`,
        id: `Mulai dari snipe-nya. Liquidity provider naruh offer jual di 100.05. Sinyal publik — futures berkorelasi baru aja naik satu tick — ngasih tau semua yang cepet, di instan yang sama, bahwa fair value sekarang 100.10. Resting offer itu **stale**: janji berdiri buat jual di bawah nilai baru. Di mikrodetik berikutnya dua hal terjadi sekaligus. *Taker* cepet nembak marketable buy order buat ngangkat stale offer (beli di 100.05 sesuatu yang bernilai 100.10); *maker* nembak cancel buat nariknya. Karena exchange proses message secara serial, pemenangnya cuma siapa yang message-nya mendarat duluan. Satu stale quote, banyak peracer, beberapa nanodetik — **winner-take-all**.

Perhatiin yang *gak* terjadi: gak ada yang punya informasi privat. Semua bereaksi ke sinyal publik yang sama. Ini kontras krusial dengan Kyle (1985) dan Glosten-Milgrom, di mana trader yang gerakin harga tau sesuatu yang maker gak tau. Di sini rent-nya datang murni dari beberapa nanodetik lebih *cepet* bertindak di apa yang semua orang udah tau. Ini **speed** race, bukan game informasi — yang kenapa nambah kecepatan gak pernah nyelesainnya.

Sekarang konsekuensinya buat spread. Maker gak bisa ngehindarin ini: resting quote yang sama persis yang dapet spread dari flow biasa, uninformed, itu quote yang disnipe pas berita datang. Jadi nyediain liquidity itu paket gain kecil-sering plus rugi **adverse selection mekanis** sesekali ke siapa pun yang lebih cepet. Maker yang risk-neutral, kompetitif sempurna, yang harus balik modal, respond satu-satunya cara yang mungkin — dengan **ngelebarin spread** sampai gain dari flow biasa nutup rugi sniping. Hasil yang mengejutkan: bid-ask spread positif muncul *bahkan walaupun gak ada yang punya informasi privat dan maker-nya kompetitif dan risk-neutral*. Spread-nya itu harga buat disnipe, dan **tiap** investor bayar itu.

Dan pengeluaran kecepatannya? Itu **prisoner's dilemma**. Sebagian firma investasi di kecepatan buat snipe; yang lain investasi buat ngehindarin disnipe. Di equilibrium pengeluaran kecepatan ngedissipasi rent sniping — redistribusi constant-sum yang gak ngehasilin harga lebih baik dan informasi baru, cuma treadmill yang lebih cepet. Tiap firma bakal lebih baik kalau gak ada yang race, tapi mengingat yang lain race, tiap firma harus juga.

Fix-nya ngikut langsung dari diagnosis. Race-nya ada karena jadi pertama-dalam-satu-nanodetik itu *penting*. Bikin dia gak penting: iris waktu jadi interval pendek, perlakukan tiap order yang datang dalam satu interval sebagai **simultan**, dan clear mereka bareng di satu **harga uniform**. Dalam satu batch, nyampe satu nanodetik lebih awal gak menang apa-apa — jadi hadiah kecepatan ilang dan kompetisi pindah balik ke satu dimensi yang harusnya nentuin siapa yang trade: **harga**. Itu frequent batch auction.`
      }
    },

    // ─────────────── 3. formalization ───────────────
    {
      id: 'formalization',
      heading: { en: 'The model, formalized', id: 'Model, diformalkan' },
      body: {
        en: `**Setup.** A security has a public fundamental value $y$ that follows a jump process — at random times $y$ jumps by a known size, observed by all $N$ fast trading firms *simultaneously*. There is also a flow of "investors" who arrive randomly and trade for liquidity reasons. One firm acts as the liquidity provider, resting a bid and ask around $y$; all $N$ firms can also *take* liquidity. The market runs as a **continuous limit order book**: messages (new orders, cancels) are processed serially in arrival order.

**The sniping race.** When $y$ jumps — say upward by $J$ — the maker's resting ask is suddenly stale by $J$. All $N$ firms see the jump at once. Each fast taker sends a buy to lift the stale ask; the maker sends a cancel. Serial processing means exactly one message is first. If a taker's order is first, the maker is **sniped** and loses about $J$ (minus the half-spread); if the maker's cancel is first, it escapes. With $N$ symmetric racers each is first with probability $\\approx 1/N$, so the maker is sniped with probability $\\approx (N-1)/N$ on every jump. This is adverse selection with **no private information** — purely mechanical, from latency.

**The equilibrium spread.** A competitive, risk-neutral maker must earn zero expected profit. It collects the half-spread $s/2$ from ordinary investor flow but loses $\\approx J$ each time it is sniped. Balancing expected gains against expected sniping losses pins down a **strictly positive** bid-ask spread $s^\\* > 0$ that rises with the jump size $J$, the jump frequency, and the number of snipers $N$, and falls with ordinary investor volume. The spread is *not* compensation for private information (there is none) — it is compensation for being mechanically picked off.

**The arms race.** Now let firms invest in speed at cost $c$ to win races more often. Each firm's private incentive is to pay $c$ to move ahead in the queue; in the symmetric equilibrium, firms invest until the marginal speed spend equals the marginal sniping rent. The total expenditure on speed is on the order of the total sniping rents — a **rent-dissipating, constant-sum prisoner's dilemma**. Crucially, this competition does *not* eliminate the arbitrage: it only shrinks each opportunity's *duration* (you must be faster to catch it) while leaving its *frequency and size* intact — exactly the ES-SPY pattern (97 ms → 7 ms over 2005-2011, with frequency and per-arb profit roughly constant).

**The fix: frequent batch auctions (FBA).** Replace continuous serial processing with discrete time. Divide the trading day into short intervals of length $\\tau$ (a tenth of a second — or much shorter; what matters is that $\\tau > 0$, i.e. time is *discrete*, not the exact length). Within each interval, **batch** all orders and treat them as simultaneous — time priority *within* a batch is abolished. Clear the batch as a **uniform-price double auction**: aggregate the demand and supply schedules, find the price that clears the most volume, and execute all trades at that single price.

Two things change. (1) **Discreteness kills the speed prize.** When a jump occurs, the maker's stale quote does not have to be defended in a nanosecond race; it is repriced at the *next* batch, and within a batch being first confers no advantage — so the within-batch sniping race disappears. (2) **Uniform pricing shifts competition to price.** You no longer win by being fast; you win by offering a better price in the batch. The model's payoff: the equilibrium spread narrows (the sniping term drops out), the wasteful speed investment is no longer privately rational, and price discovery is essentially unharmed because $\\tau$ can be tiny. Speed still has a (small) role *across* batches — reacting to news in the next auction — but the pathological *within*-instant race is gone.`,
        id: `**Setup.** Sebuah sekuritas punya public fundamental value $y$ yang ngikut jump process — di waktu random $y$ loncat sebesar ukuran yang diketahui, diamati semua $N$ fast trading firm *secara simultan*. Ada juga flow "investor" yang datang random dan trade buat alasan liquidity. Satu firma jadi liquidity provider, naruh bid dan ask di sekitar $y$; semua $N$ firma juga bisa *take* liquidity. Pasar jalan sebagai **continuous limit order book**: message (order baru, cancel) diproses serial dalam urutan kedatangan.

**Race sniping.** Pas $y$ loncat — misal ke atas sebesar $J$ — resting ask maker tiba-tiba stale sebesar $J$. Semua $N$ firma liat loncatannya sekaligus. Tiap fast taker nembak buy buat ngangkat stale ask; maker nembak cancel. Proses serial berarti persis satu message yang pertama. Kalau order taker yang pertama, maker **disnipe** dan rugi sekitar $J$ (dikurangin half-spread); kalau cancel maker yang pertama, dia kabur. Dengan $N$ peracer simetris, masing-masing pertama dengan probabilitas $\\approx 1/N$, jadi maker disnipe dengan probabilitas $\\approx (N-1)/N$ di tiap loncatan. Ini adverse selection dengan **tanpa informasi privat** — murni mekanis, dari latency.

**Equilibrium spread.** Maker yang kompetitif, risk-neutral, harus dapet expected profit nol. Dia ngumpulin half-spread $s/2$ dari flow investor biasa tapi rugi $\\approx J$ tiap kali disnipe. Nyeimbangin expected gain lawan expected rugi sniping ngepasin bid-ask spread $s^\\* > 0$ yang **strictly positif** yang naik dengan ukuran loncatan $J$, frekuensi loncatan, dan jumlah sniper $N$, dan turun dengan volume investor biasa. Spread-nya *bukan* kompensasi buat informasi privat (gak ada) — dia kompensasi buat dipetik secara mekanis.

**Arms race.** Sekarang biarin firma investasi di kecepatan dengan biaya $c$ buat menang race lebih sering. Insentif privat tiap firma itu bayar $c$ buat maju di antrian; di equilibrium simetris, firma investasi sampai marginal speed spend sama dengan marginal sniping rent. Total pengeluaran di kecepatan itu dalam orde total sniping rent — **prisoner's dilemma constant-sum yang ngedissipasi rent**. Krusial, kompetisi ini *gak* ngilangin arbitrage-nya: dia cuma nyusutin *durasi* tiap peluang (kamu harus lebih cepet buat nangkepnya) sambil ninggalin *frekuensi dan ukurannya* utuh — persis pola ES-SPY (97 ms → 7 ms over 2005-2011, dengan frekuensi dan profit per-arb kira-kira konstan).

**Fix-nya: frequent batch auctions (FBA).** Ganti proses serial continuous dengan waktu diskrit. Bagi hari trading jadi interval pendek panjang $\\tau$ (sepersepuluh detik — atau jauh lebih pendek; yang penting $\\tau > 0$, yaitu waktu *diskrit*, bukan panjang persisnya). Dalam tiap interval, **batch** semua order dan perlakukan mereka sebagai simultan — time priority *dalam* batch dihapus. Clear batch-nya sebagai **uniform-price double auction**: agregat schedule demand dan supply, cari harga yang ngeclear volume terbanyak, dan eksekusi semua trade di satu harga itu.

Dua hal berubah. (1) **Diskrit ngebunuh hadiah kecepatan.** Pas loncatan terjadi, stale quote maker gak harus dipertahanin di race nanodetik; dia di-reprice di batch *berikutnya*, dan dalam satu batch jadi pertama gak ngasih keuntungan — jadi race sniping dalam-batch ilang. (2) **Uniform pricing geser kompetisi ke harga.** Kamu gak lagi menang dengan jadi cepet; kamu menang dengan nawarin harga lebih baik di batch. Payoff model-nya: equilibrium spread nyempit (term sniping-nya keluar), investasi kecepatan yang boros gak lagi rasional secara privat, dan price discovery pada dasarnya gak kena karena $\\tau$ bisa kecil banget. Kecepatan masih punya peran (kecil) *antar* batch — bereaksi ke berita di auction berikutnya — tapi race patologis *dalam*-instan ilang.`
      }
    },

    // ─────────────── 4. worked-example ───────────────
    {
      id: 'worked-example',
      heading: { en: 'Worked example', id: 'Contoh kerjaan' },
      body: {
        en: `**Part A — the correlation breakdown that creates the race.** Take ES (E-mini S&P 500 future) and SPY (S&P 500 ETF). They track the same index, so economically they are the "same" asset. Measure the correlation of their returns at different sampling intervals:

- At a **1-minute** interval: correlation $\\approx 0.99$ — they move together, as theory demands.
- At a **1-second** interval: correlation still high, but lower.
- At a **10-millisecond** interval: correlation is *much lower* — about $0.10$ (the 2011 median); in 2005 you had to wait about 2.6 seconds to recover a correlation of $0.50$, but by 2011 that same $0.50$ arrives in roughly $140$ ms.
- At a **1-millisecond** interval: correlation $\\approx 0$ (about $0.008$ in 2011) — at this sub-millisecond resolution the two prices look almost unrelated.

The correlation *breaks down* as you zoom in. The reason is not that the assets decoupled; it is that one price updates a few milliseconds before the other, so at millisecond resolution you are mostly seeing which venue happened to print first. Every one of those brief gaps — ES has moved, SPY has not yet — is a mechanical arbitrage: buy the cheap leg, sell the rich leg, for whoever is fastest. The opportunity exists for only as long as the slower price takes to catch up.

**Part B — the arms race signature.** Track those ES-SPY arbitrages over 2005-2011. Their median **duration** collapses from about **97 ms to about 7 ms** as firms invest in speed. But their **frequency** (how many per day) and **profitability per opportunity** stay roughly flat. Read that carefully: a decade of speed investment did *not* shrink the prize — it only shortened how long the prize sat on the table. That is exactly what an arms race looks like; competition raises the speed bar without dissipating the rent, so the incentive to keep spending never goes away.

**Part C — why a batch auction defuses it.** Now run the same market as a frequent batch auction with interval $\\tau = 100$ ms. Suppose at $t = 0$ a public signal lifts fair value, and three fast firms — A, B, C — each want to buy a now-stale offer, arriving at $t = 1\\,\\mu s$, $2\\,\\mu s$, $3\\,\\mu s$. In the **continuous** book, A wins (arrived first) and B, C lose: speed decided everything. In the **batch** ending at $t = 100$ ms, all three orders fall in the *same* batch and are treated as simultaneous; the auction collects every buy and sell, finds the single uniform price that clears the most volume, and fills at that price. A's 1-microsecond head start buys nothing — A, B and C are on equal footing, and whoever bid the better *price* trades. The maker, meanwhile, simply submits its updated quote into the same batch; it is never caught in a nanosecond race to cancel. The speed prize is gone; the contest is back to price.

The punchline: the same flow of orders, under two market designs, produces a wasteful speed race in one and an orderly price competition in the other. The design — continuous-serial vs discrete-batched — is the variable, and it has a measurable price (the companion Aquilina-Budish-O'Neill 2022 puts it near a third of the effective spread).`,
        id: `**Bagian A — correlation breakdown yang ngebikin race.** Ambil ES (E-mini S&P 500 future) dan SPY (S&P 500 ETF). Mereka ngelacak indeks yang sama, jadi secara ekonomi mereka aset yang "sama". Ukur korelasi return mereka di interval sampling berbeda:

- Di interval **1-menit**: korelasi $\\approx 0.99$ — mereka gerak bareng, kayak yang teori minta.
- Di interval **1-detik**: korelasi masih tinggi, tapi lebih rendah.
- Di interval **10-milidetik**: korelasi *jauh lebih rendah* — sekitar $0.10$ (median 2011); di 2005 kamu harus nunggu sekitar 2.6 detik buat balikin korelasi $0.50$, tapi pas 2011 $0.50$ yang sama itu nyampe dalam kira-kira $140$ ms.
- Di interval **1-milidetik**: korelasi $\\approx 0$ (sekitar $0.008$ di 2011) — di resolusi sub-milidetik ini dua harga keliatan nyaris gak berhubungan.

Korelasinya *break down* pas kamu zoom in. Alasannya bukan asetnya decouple; tapi satu harga update beberapa milidetik sebelum yang lain, jadi di resolusi milidetik kamu mostly liat venue mana yang kebetulan nge-print duluan. Tiap gap singkat itu — ES udah gerak, SPY belum — itu arbitrage mekanis: beli leg yang murah, jual leg yang mahal, buat siapa pun yang paling cepet. Peluangnya ada cuma selama harga yang lebih lambat butuh buat ngejar.

**Bagian B — tanda tangan arms race.** Lacak arbitrage ES-SPY itu over 2005-2011. Median **durasi** mereka kolaps dari sekitar **97 ms ke sekitar 7 ms** pas firma investasi di kecepatan. Tapi **frekuensi** mereka (berapa per hari) dan **profitabilitas per peluang** tetep kira-kira datar. Baca itu hati-hati: satu dekade investasi kecepatan *gak* nyusutin hadiahnya — dia cuma mendekin berapa lama hadiahnya nongkrong di meja. Itu persis kayak arms race; kompetisi naikin bar kecepatan tanpa ngedissipasi rent, jadi insentif buat terus ngeluarin duit gak pernah ilang.

**Bagian C — kenapa batch auction ngeredam-nya.** Sekarang jalanin pasar yang sama sebagai frequent batch auction dengan interval $\\tau = 100$ ms. Misal di $t = 0$ sinyal publik ngangkat fair value, dan tiga firma cepet — A, B, C — masing-masing pengen beli offer yang sekarang stale, nyampe di $t = 1\\,\\mu s$, $2\\,\\mu s$, $3\\,\\mu s$. Di book **continuous**, A menang (nyampe duluan) dan B, C kalah: kecepatan nentuin segalanya. Di **batch** yang berakhir di $t = 100$ ms, ketiga order jatuh di batch yang *sama* dan diperlakukan simultan; auction-nya ngumpulin tiap buy dan sell, nyari satu harga uniform yang ngeclear volume terbanyak, dan fill di harga itu. Head-start 1-mikrodetik A gak beli apa-apa — A, B dan C di pijakan yang sama, dan siapa pun yang nge-bid *harga* lebih baik yang trade. Maker, sementara itu, cuma nyerahin quote yang udah di-update ke batch yang sama; dia gak pernah ketangkep di race nanodetik buat cancel. Hadiah kecepatan ilang; kontesnya balik ke harga.

Punchline-nya: flow order yang sama, di bawah dua market design, ngehasilin speed race yang boros di satu dan kompetisi harga yang tertib di yang lain. Desainnya — continuous-serial vs discrete-batched — itu variabelnya, dan dia punya harga terukur (pendamping Aquilina-Budish-O'Neill 2022 naruhnya deket sepertiga effective spread).`
      }
    },

    // ─────────────── 5. applications ───────────────
    {
      id: 'applications',
      heading: { en: 'Applications', id: 'Aplikasi' },
      body: {
        en: `**Market design is a policy lever, not a law of nature.** The headline implication is constructive: the speed race is an artifact of the continuous limit order book, and a different matching engine removes it. **Frequent batch auctions** are the leading proposal, but they sit in a family of "deal with speed" designs — **speed bumps** (IEX's 350-microsecond delay on aggressive orders), **randomized delays**, and **asymmetric speed bumps** (delay snipers but not the maker's cancels). Each attacks the same winner-take-all-by-nanoseconds problem from a different angle.

**It reframes what a tight spread "costs."** A narrow quoted spread can still embed a latency-arbitrage premium: part of the effective spread is the cushion makers charge to survive being sniped. For execution and TCA (transaction-cost analysis), this means some adverse selection is *mechanical and speed-driven*, concentrated in the microseconds after public signals, and *not* the informed-trader adverse selection of Kyle/Glosten-Milgrom. The two have different cures — only the mechanical part is removable by market design.

**The welfare argument against the arms race.** Because speed rewards are *relative* (you need only be faster than the next firm), the spending — microwave towers, co-location, custom silicon, transatlantic cables — is largely a wasteful, rent-dissipating prisoner's dilemma (Biais-Foucault-Moinas 2015). It reallocates the stale-quote prize without improving price discovery. That is the social-welfare case for redesign, independent of any view on whether HFT is "good" or "bad."

**Common objections, and the model's answers.** *Does batching hurt price discovery?* Not materially: $\\tau$ can be a tiny fraction of a second, so prices still update many times per second — the only thing lost is the *within-instant* race. *Won't traders just race to the start of each batch?* The order within a batch does not matter (time priority is abolished inside it), so there is nothing to race *to*; the only residual speed value is reacting to news for the *next* batch. *Adoption?* The hard part is coordination and fragmentation — a single venue batching while others run continuous books invites cream-skimming — which is why the proposal is partly a *regulatory* one.

**Crypto inherits the same design choice.** Centralized crypto exchanges are themselves continuous limit order books, often with weaker latency controls — so the same stale-quote race runs there. Decentralized exchanges face an even sharper on-chain analogue: **maximal extractable value (MEV)**, where the block proposer can reorder, insert, or sandwich transactions to snipe — the same economics, now played in the mempool and the block. This is exactly why batch-auction and fair-ordering designs have become central to crypto market structure (batched settlement in CoW Protocol, sealed-bid/batch designs like Penumbra, and proposer-builder separation as an MEV response). Anyone designing a matching engine — on Wall Street or on-chain — is, knowingly or not, taking a position on the continuous-vs-batch question this paper made precise.`,
        id: `**Market design itu tuas kebijakan, bukan hukum alam.** Implikasi headline-nya konstruktif: speed race itu artefak dari continuous limit order book, dan matching engine berbeda ngilanginnya. **Frequent batch auctions** itu proposal terdepan, tapi mereka ada dalam keluarga desain "ngurusin kecepatan" — **speed bump** (delay 350-mikrodetik IEX di order agresif), **randomized delay**, dan **asymmetric speed bump** (nge-delay sniper tapi gak cancel-nya maker). Masing-masing nyerang masalah winner-take-all-by-nanodetik yang sama dari sudut berbeda.

**Dia nge-reframe apa yang spread ketat "biayain".** Quoted spread yang sempit masih bisa nempelin premium latency-arbitrage: sebagian effective spread itu bantalan yang maker tagih buat bertahan dari disnipe. Buat eksekusi dan TCA (transaction-cost analysis), ini berarti sebagian adverse selection itu *mekanis dan speed-driven*, terkonsentrasi di mikrodetik setelah sinyal publik, dan *bukan* adverse selection informed-trader-nya Kyle/Glosten-Milgrom. Keduanya punya obat berbeda — cuma bagian mekanis yang bisa dihapus sama market design.

**Argumen welfare lawan arms race.** Karena hadiah kecepatan itu *relatif* (kamu cuma perlu lebih cepet dari firma berikutnya), pengeluarannya — menara microwave, co-location, silikon kustom, kabel transatlantik — sebagian besar prisoner's dilemma yang boros, ngedissipasi rent (Biais-Foucault-Moinas 2015). Dia ngerealokasi hadiah stale-quote tanpa ngebaikin price discovery. Itu argumen social-welfare buat redesign, lepas dari pandangan apakah HFT itu "baik" atau "buruk".

**Keberatan umum, dan jawaban model-nya.** *Apakah batching ngerusak price discovery?* Gak material: $\\tau$ bisa fraksi kecil banget dari sedetik, jadi harga masih update banyak kali per detik — satu-satunya yang ilang itu race *dalam-instan*. *Bukannya trader bakal race ke awal tiap batch?* Urutan dalam satu batch gak penting (time priority dihapus di dalamnya), jadi gak ada yang bisa di-*race*-in; satu-satunya nilai kecepatan sisa itu bereaksi ke berita buat batch *berikutnya*. *Adopsi?* Bagian sulitnya itu koordinasi dan fragmentasi — satu venue nge-batch sementara yang lain jalanin book continuous ngundang cream-skimming — yang kenapa proposalnya sebagian *regulasi*.

**Crypto mewarisi pilihan desain yang sama.** Centralized crypto exchange itu sendiri continuous limit order book, sering dengan kontrol latency lebih lemah — jadi race stale-quote yang sama jalan di sana. Decentralized exchange hadapi analog on-chain yang lebih tajam: **maximal extractable value (MEV)**, di mana block proposer bisa ngurutin ulang, nyisipin, atau nge-sandwich transaksi buat snipe — ekonomi yang sama, sekarang dimainin di mempool dan block. Ini persis kenapa desain batch-auction dan fair-ordering jadi sentral di struktur pasar crypto (batched settlement di CoW Protocol, desain sealed-bid/batch kayak Penumbra, dan proposer-builder separation sebagai respons MEV). Siapa pun yang ngedesain matching engine — di Wall Street atau on-chain — itu, sadar atau enggak, ngambil posisi di pertanyaan continuous-vs-batch yang paper ini bikin presisi.`
      }
    },

    // ─────────────── 6. practice ───────────────
    {
      id: 'practice',
      heading: { en: 'Practice', id: 'Latihan' },
      body: {
        en: `**1.** In Budish-Cramton-Shim's model, a positive bid-ask spread emerges even though liquidity providers are risk-neutral, perfectly competitive, and *no one has private information*. Explain where the spread comes from, and why this is a different origin from the spread in Glosten-Milgrom (1985).

<details><summary>Answer</summary>
The spread compensates the maker for **mechanical adverse selection** — being sniped on stale quotes. When the public value jumps, the maker's resting quote is briefly stale, and faster traders pick it off through serial processing; the maker loses about the jump size each time. A competitive, risk-neutral maker that must break even widens the spread until ordinary-flow profits cover these sniping losses. In Glosten-Milgrom the spread compensates for adverse selection against *privately informed* traders — the maker quotes wider because some counterparties know more. Here there is no private information at all; the loss is purely from being *slower* on shared public news. Same symptom (a positive spread from adverse selection), different disease (latency vs information), and only the latency part is curable by market design.
</details>

**2.** Over 2005-2011, the median duration of ES-SPY arbitrage opportunities fell from ~97 ms to ~7 ms, while their frequency and per-opportunity profit stayed roughly constant. Why is the *constant* frequency-and-profit, not the falling duration, the evidence for an "arms race"?

<details><summary>Answer</summary>
If competition were genuinely eliminating the arbitrage, the *prize* would shrink — fewer opportunities and/or smaller profits per opportunity — as more firms competed it away. Instead, the prize held constant and only the *duration* shrank. That means a decade of speed investment did not compete the rent away; it merely raised the bar for how fast you must be to capture an unchanged prize. A contest whose reward never falls no matter how much is spent is the definition of an arms race / rent-dissipation equilibrium: each firm must keep spending just to stay in, and the spending produces no better prices — only a faster treadmill.
</details>

**3.** A frequent batch auction with interval $\\tau$ abolishes time priority *within* a batch but keeps it *across* batches. Explain precisely which kind of speed advantage this destroys and which (small) kind it preserves — and why that is the point.

<details><summary>Answer</summary>
It destroys the **within-instant** speed advantage: when a quote goes stale, you can no longer win by being the first packet to the matching engine, because every order in the same batch is treated as simultaneous and clears at one uniform price — a 1-microsecond head start inside a batch is worthless. It preserves a small **across-batch** advantage: being fast still lets you respond to news in time for the *next* auction. That is the point — the pathological, rent-dissipating race is the within-instant one (sniping a stale quote), and FBA removes exactly that while leaving the benign "react to new information promptly" speed, so price discovery is essentially unharmed (especially as $\\tau$ can be tiny).
</details>

**4.** Connect this paper to its empirical companion, Aquilina-Budish-O'Neill (2022). What did BCS predict that ABO measured, and what is the relationship between the model's "sniping" and ABO's "latency-arbitrage tax"?

<details><summary>Answer</summary>
BCS (2015) is the *theory*: continuous serial processing creates a mechanical sniping race and an arms race, and a positive spread that compensates makers for being sniped. ABO (2022) is the *measurement*: using exchange message data (which capture failed orders), they directly count latency-arbitrage races and price them. The model's "sniping loss on stale quotes" is ABO's empirically-measured **latency-arbitrage tax** — total race profits over volume, ~0.5 bps, about a third of the effective spread, on the order of USD 5 billion a year globally. ABO confirms BCS's central claim — the spread carries a removable, speed-driven tax — and the implied ~17% cost-of-liquidity saving is the empirical case for the frequent-batch-auction fix BCS proposed.
</details>`,
        id: `**1.** Di model Budish-Cramton-Shim, bid-ask spread positif muncul bahkan walaupun liquidity provider risk-neutral, kompetitif sempurna, dan *gak ada yang punya informasi privat*. Jelasin spread-nya datang dari mana, dan kenapa ini asal yang beda dari spread di Glosten-Milgrom (1985).

<details><summary>Jawaban</summary>
Spread-nya ngompensasi maker buat **adverse selection mekanis** — disnipe di stale quote. Pas public value loncat, resting quote maker sebentar stale, dan trader lebih cepet metiknya lewat proses serial; maker rugi sekitar ukuran loncatan tiap kali. Maker yang kompetitif, risk-neutral, yang harus balik modal ngelebarin spread sampai profit flow-biasa nutup rugi sniping ini. Di Glosten-Milgrom spread ngompensasi adverse selection lawan trader yang *berinformasi privat* — maker quote lebih lebar karena sebagian counterparty tau lebih banyak. Di sini gak ada informasi privat sama sekali; ruginya murni dari *lebih lambat* di berita publik bersama. Gejala sama (spread positif dari adverse selection), penyakit beda (latency vs informasi), dan cuma bagian latency yang bisa disembuhin sama market design.
</details>

**2.** Over 2005-2011, median durasi peluang arbitrage ES-SPY turun dari ~97 ms ke ~7 ms, sementara frekuensi dan profit per-peluang mereka tetep kira-kira konstan. Kenapa frekuensi-dan-profit yang *konstan*, bukan durasi yang turun, itu bukti buat "arms race"?

<details><summary>Jawaban</summary>
Kalau kompetisi beneran ngilangin arbitrage-nya, *hadiahnya* bakal menyusut — lebih sedikit peluang dan/atau profit lebih kecil per peluang — pas lebih banyak firma ngekompetisinya. Sebaliknya, hadiahnya tetep konstan dan cuma *durasinya* yang menyusut. Itu berarti satu dekade investasi kecepatan gak ngekompetisi rent-nya; dia cuma naikin bar seberapa cepet kamu harus jadi buat nangkep hadiah yang gak berubah. Kontes yang reward-nya gak pernah turun seberapa pun dikeluarin itu definisi arms race / equilibrium rent-dissipation: tiap firma harus terus ngeluarin duit cuma buat tetep di dalam, dan pengeluarannya gak ngehasilin harga lebih baik — cuma treadmill yang lebih cepet.
</details>

**3.** Frequent batch auction dengan interval $\\tau$ ngehapus time priority *dalam* satu batch tapi nyimpen-nya *antar* batch. Jelasin persis jenis keuntungan kecepatan mana yang dihancurin ini dan jenis (kecil) mana yang dipertahanin — dan kenapa itu poin-nya.

<details><summary>Jawaban</summary>
Dia ngehancurin keuntungan kecepatan **dalam-instan**: pas quote jadi stale, kamu gak bisa lagi menang dengan jadi paket pertama ke matching engine, karena tiap order di batch yang sama diperlakukan simultan dan clear di satu harga uniform — head-start 1-mikrodetik dalam satu batch gak berharga. Dia mertahanin keuntungan kecil **antar-batch**: jadi cepet masih ngebolehin kamu bereaksi ke berita tepat waktu buat auction *berikutnya*. Itu poin-nya — race yang patologis, ngedissipasi rent, itu yang dalam-instan (nynipe stale quote), dan FBA ngilangin persis itu sambil ninggalin kecepatan jinak "bereaksi ke informasi baru dengan cepat", jadi price discovery pada dasarnya gak kena (apalagi karena $\\tau$ bisa kecil banget).
</details>

**4.** Sambungin paper ini ke pendamping empiris-nya, Aquilina-Budish-O'Neill (2022). Apa yang BCS prediksi yang ABO ukur, dan apa hubungan antara "sniping" model-nya dan "latency-arbitrage tax" ABO?

<details><summary>Jawaban</summary>
BCS (2015) itu *teori*-nya: proses serial continuous ngebikin race sniping mekanis dan arms race, dan spread positif yang ngompensasi maker buat disnipe. ABO (2022) itu *pengukuran*-nya: pakai message data exchange (yang nangkep order gagal), mereka langsung ngitung race latency-arbitrage dan ngehargainnya. "Rugi sniping di stale quote" model-nya itu **latency-arbitrage tax** ABO yang terukur empiris — total profit race over volume, ~0.5 bps, sekitar sepertiga effective spread, dalam orde USD 5 miliar setahun global. ABO ngonfirmasi klaim sentral BCS — spread bawa pajak speed-driven yang bisa dihapus — dan penghematan cost-of-liquidity ~17% yang terimplikasi itu argumen empiris buat fix frequent-batch-auction yang BCS usulin.
</details>`
      }
    },

    // ─────────────── 7. connections ───────────────
    {
      id: 'connections',
      heading: { en: 'Connections', id: 'Koneksi' },
      body: {
        en: `- **Adverse selection roots**: [Glosten-Milgrom 1985](item:glosten-milgrom-1985) and [Kyle 1985](item:kyle-1985) give the spread-as-adverse-selection logic; BCS's twist is a spread from *mechanical, public-information* sniping rather than private information.
- **The market being sniped**: [Avellaneda-Stoikov 2008](item:stoikov-2008) is the liquidity provider — latency arbitrage is an extra adverse-selection term it must load into the half-spread, on top of inventory risk.
- **The design it critiques**: [O'Hara 1995](item:ohara-1995) frames the continuous limit order book whose serial processing is the flaw; the order-book mechanics are the same ones in [Cont-Kukanov-Stoikov 2014](item:cont-kukanov-stoikov-2014).
- **The empirical test**: [Aquilina-Budish-O'Neill 2022](item:aquilina-budish-oneill-2022) measures the very races this paper predicts and prices the latency-arbitrage tax (~0.5 bps, ~1/3 of the effective spread).
- **The other arbitrage / crypto bridge**: [Makarov-Schoar 2020](item:makarov-schoar-2020) is the cross-venue, capital-constrained arbitrage; on-chain, the same stale-quote economics reappear as **maximal extractable value (MEV)**, which motivates batch-auction and fair-ordering designs in DeFi.`,
        id: `- **Akar adverse selection**: [Glosten-Milgrom 1985](item:glosten-milgrom-1985) dan [Kyle 1985](item:kyle-1985) ngasih logika spread-sebagai-adverse-selection; twist BCS itu spread dari sniping *mekanis, informasi-publik* bukan informasi privat.
- **Pasar yang disnipe**: [Avellaneda-Stoikov 2008](item:stoikov-2008) itu liquidity provider-nya — latency arbitrage itu term adverse-selection ekstra yang dia harus muat ke half-spread, di atas inventory risk.
- **Desain yang dia kritik**: [O'Hara 1995](item:ohara-1995) ngeframe continuous limit order book yang proses serial-nya itu cacatnya; mekanika order-book-nya sama dengan yang di [Cont-Kukanov-Stoikov 2014](item:cont-kukanov-stoikov-2014).
- **Tes empiris-nya**: [Aquilina-Budish-O'Neill 2022](item:aquilina-budish-oneill-2022) ngukur persis race yang paper ini prediksi dan ngehargai latency-arbitrage tax (~0.5 bps, ~1/3 effective spread).
- **Arbitrage yang lain / jembatan crypto**: [Makarov-Schoar 2020](item:makarov-schoar-2020) itu arbitrage lintas-venue, terbatas-modal; on-chain, ekonomi stale-quote yang sama muncul lagi sebagai **maximal extractable value (MEV)**, yang ngedorong desain batch-auction dan fair-ordering di DeFi.`
      }
    },

    // ─────────────── 8. sources ───────────────
    {
      id: 'sources',
      heading: { en: 'Sources', id: 'Sumber' },
      body: {
        en: `- **Budish, E., Cramton, P., and Shim, J.** (2015). "The High-Frequency Trading Arms Race: Frequent Batch Auctions as a Market Design Response." *Quarterly Journal of Economics*, 130(4), 1547-1621. **(This item.)** The CLOB-flaw diagnosis, the sniping/arms-race model, and the frequent-batch-auction proposal.
- **Aquilina, M., Budish, E., and O'Neill, P.** (2022). "Quantifying the High-Frequency Trading 'Arms Race'." *Quarterly Journal of Economics*, 137(1), 493-564. The empirical companion — message-data measurement of the predicted races and the latency-arbitrage tax.
- **Kyle, A. S.** (1985). "Continuous Auctions and Insider Trading." *Econometrica*, 53(6), 1315-1335. The price-impact / adverse-selection framework; sniping is its mechanical, public-signal cousin.
- **Glosten, L. and Milgrom, P.** (1985). "Bid, Ask and Transaction Prices in a Specialist Market." *Journal of Financial Economics*, 14(1), 71-100. Spread as compensation for adverse selection — the information-based counterpart to BCS's mechanical spread.
- **Biais, B., Foucault, T., and Moinas, S.** (2015). "Equilibrium Fast Trading." *Journal of Financial Economics*, 116(2), 292-313. The arms-race-as-prisoner's-dilemma welfare argument (over-investment in speed).
- **Foucault, T., Kozhan, R., and Tham, W. W.** (2017). "Toxic Arbitrage." *The Review of Financial Studies*, 30(4), 1053-1094. The same stale-quote sniping measured in triangular FX.`,
        id: `- **Budish, E., Cramton, P., dan Shim, J.** (2015). "The High-Frequency Trading Arms Race: Frequent Batch Auctions as a Market Design Response." *Quarterly Journal of Economics*, 130(4), 1547-1621. **(Item ini.)** Diagnosis cacat-CLOB, model sniping/arms-race, dan proposal frequent-batch-auction.
- **Aquilina, M., Budish, E., dan O'Neill, P.** (2022). "Quantifying the High-Frequency Trading 'Arms Race'." *Quarterly Journal of Economics*, 137(1), 493-564. Pendamping empiris — pengukuran message-data dari race yang diprediksi dan latency-arbitrage tax.
- **Kyle, A. S.** (1985). "Continuous Auctions and Insider Trading." *Econometrica*, 53(6), 1315-1335. Framework price-impact / adverse-selection; sniping itu sepupu mekanis, sinyal-publik-nya.
- **Glosten, L. dan Milgrom, P.** (1985). "Bid, Ask and Transaction Prices in a Specialist Market." *Journal of Financial Economics*, 14(1), 71-100. Spread sebagai kompensasi adverse selection — padanan berbasis-informasi dari spread mekanis BCS.
- **Biais, B., Foucault, T., dan Moinas, S.** (2015). "Equilibrium Fast Trading." *Journal of Financial Economics*, 116(2), 292-313. Argumen welfare arms-race-sebagai-prisoner's-dilemma (over-investment di kecepatan).
- **Foucault, T., Kozhan, R., dan Tham, W. W.** (2017). "Toxic Arbitrage." *The Review of Financial Studies*, 30(4), 1053-1094. Sniping stale-quote yang sama diukur di triangular FX.`
      }
    },
  ],

  audio: { enabled: true },

  selfTest: [
    {
      sectionId: 'intuition',
      question: {
        en: 'In Budish-Cramton-Shim, a bid-ask spread appears even with competitive, risk-neutral makers and no private information. What exactly is the spread compensating for?',
        id: 'Di Budish-Cramton-Shim, bid-ask spread muncul bahkan dengan maker kompetitif, risk-neutral, dan tanpa informasi privat. Spread-nya ngompensasi apa persisnya?'
      },
      prompt: { en: 'Before continuing, try answering:', id: 'Sebelum lanjut, coba jawab:' },
      answer: {
        en: 'It compensates for mechanical adverse selection — being sniped on stale quotes. When the public fair value jumps, the maker\'s resting quote is briefly stale, and faster traders pick it off via serial processing, costing the maker roughly the jump size each time. A competitive, risk-neutral maker that must break even widens the spread until ordinary-flow profits cover the expected sniping loss. So the spread is the price of being slow on shared public news, not the price of facing someone better-informed (as in Glosten-Milgrom/Kyle).',
        id: 'Dia ngompensasi adverse selection mekanis — disnipe di stale quote. Pas public fair value loncat, resting quote maker sebentar stale, dan trader lebih cepet metiknya lewat proses serial, ngebiayain maker kira-kira ukuran loncatan tiap kali. Maker kompetitif, risk-neutral, yang harus balik modal ngelebarin spread sampai profit flow-biasa nutup expected rugi sniping. Jadi spread-nya itu harga jadi lambat di berita publik bersama, bukan harga hadapi seseorang yang lebih berinformasi (kayak di Glosten-Milgrom/Kyle).'
      }
    },
    {
      sectionId: 'formalization',
      question: {
        en: 'What single property of the continuous limit order book creates the speed race, and how do frequent batch auctions remove it?',
        id: 'Properti tunggal apa dari continuous limit order book yang ngebikin speed race, dan gimana frequent batch auctions ngilanginnya?'
      },
      prompt: { en: 'Before continuing, try answering:', id: 'Sebelum lanjut, coba jawab:' },
      answer: {
        en: 'The culprit is that the CLOB treats time as continuous but processes messages serially, in arrival order. So reacting to the same public signal becomes a contest of whose packet arrives first — a winner-take-all race over a single stale quote, decided by nanoseconds. Frequent batch auctions make time discrete: orders arriving within a short interval are batched, treated as simultaneous (time priority abolished within the batch), and cleared at a single uniform price. Inside a batch, arriving earlier wins nothing, so the within-instant speed race collapses and competition shifts back to price; a tiny residual speed value remains only for reacting to news in the next batch.',
        id: 'Biang keroknya, CLOB memperlakukan waktu sebagai continuous tapi proses message secara serial, dalam urutan kedatangan. Jadi bereaksi ke sinyal publik yang sama jadi kontes paket siapa yang nyampe duluan — race winner-take-all di atas satu stale quote, ditentuin nanodetik. Frequent batch auctions bikin waktu diskrit: order yang datang dalam interval pendek di-batch, diperlakukan simultan (time priority dihapus dalam batch), dan di-clear di satu harga uniform. Dalam satu batch, nyampe lebih awal gak menang apa-apa, jadi race kecepatan dalam-instan kolaps dan kompetisi geser balik ke harga; nilai kecepatan sisa kecil cuma buat bereaksi ke berita di batch berikutnya.'
      }
    },
    {
      sectionId: 'worked-example',
      question: {
        en: 'ES and SPY track the same index. Why does their return correlation fall toward zero at millisecond resolution, and how does that create arbitrage?',
        id: 'ES dan SPY ngelacak indeks yang sama. Kenapa korelasi return mereka turun ke nol di resolusi milidetik, dan gimana itu ngebikin arbitrage?'
      },
      prompt: { en: 'Before continuing, try answering:', id: 'Sebelum lanjut, coba jawab:' },
      answer: {
        en: 'Because the two prices do not update at exactly the same instant — one venue prints a few milliseconds before the other. At human time scales the lag is invisible and correlation is ~1; zoom to milliseconds and you are mostly seeing which leg happened to move first, so the measured correlation collapses toward 0 ("correlation breakdown"). Each brief gap — ES has moved, SPY has not yet — is a mechanical arbitrage: buy the lagging cheap leg and sell the rich leg, available to whoever is fastest, lasting only until the slow price catches up. It is money from public information, captured purely on speed.',
        id: 'Karena dua harga gak update di instan yang persis sama — satu venue nge-print beberapa milidetik sebelum yang lain. Di skala waktu manusia lag-nya gak keliatan dan korelasi ~1; zoom ke milidetik dan kamu mostly liat leg mana yang kebetulan gerak duluan, jadi korelasi terukur kolaps ke 0 ("correlation breakdown"). Tiap gap singkat — ES udah gerak, SPY belum — itu arbitrage mekanis: beli leg murah yang ketinggalan dan jual leg yang mahal, tersedia buat siapa pun yang paling cepet, tahan cuma sampai harga lambat ngejar. Itu duit dari informasi publik, ditangkep murni di kecepatan.'
      }
    },
  ],
};
