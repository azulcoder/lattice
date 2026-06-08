export const CONTENT = {
  itemId: 'menkveld-2013',
  estimatedReadMinutes: 36,

  author: {
    fullName: { en: 'Albert J. Menkveld', id: 'Albert J. Menkveld' },
    affiliation: {
      en: 'Professor of Finance, Vrije Universiteit Amsterdam; Tinbergen Institute. A leading empirical microstructure economist and a founder of the field\'s large-scale replication and trading-data initiatives.',
      id: 'Professor of Finance, Vrije Universiteit Amsterdam; Tinbergen Institute. Ekonom microstructure empiris terkemuka dan pendiri inisiatif replikasi skala-besar dan trading-data field-nya.'
    },
    tagline: {
      en: 'A rare look inside a single high-frequency trader\'s book — showing that the modern HFT is, at bottom, a market maker: it earns the bid-ask spread and pays it back in adverse selection, netting a few cents a trade.',
      id: 'Tinjauan langka ke dalam book satu high-frequency trader — nunjukin bahwa HFT modern itu, pada dasarnya, market maker: dia dapet bid-ask spread dan bayarnya balik di adverse selection, dapet bersih beberapa sen per trade.'
    },
    bio: {
      en: `Albert Menkveld is one of the defining empirical microstructure economists of the high-frequency era. Based at Vrije Universiteit Amsterdam, his research uses granular trading data to answer first-order questions about how modern electronic markets actually work — the role of high-frequency traders, the economics of fragmentation across venues, and the measurement of liquidity and flash events. He is also an institution-builder for the field: a force behind large-scale **replication** efforts and shared trading-data infrastructure that raise the empirical standards of finance research.

This paper is characteristic: rather than argue about HFTs in the abstract, Menkveld obtained data identifying *one* large HFT across two competing venues and simply *looked at its book* — its trades, its inventory, its profit and loss, decomposed. The result is one of the cleanest pieces of evidence on what an HFT does for a living, and it reframed the policy debate by showing the activity is recognizable old-fashioned market making in new technological clothes.`,
      id: `Albert Menkveld itu salah satu ekonom microstructure empiris yang ngedefinisiin era high-frequency. Berbasis di Vrije Universiteit Amsterdam, risetnya pakai data trading granular buat ngejawab pertanyaan first-order soal gimana pasar elektronik modern sebenernya bekerja — peran high-frequency trader, ekonomi fragmentasi lintas venue, dan pengukuran liquidity dan flash event. Dia juga pembangun-institusi buat field-nya: kekuatan di balik upaya **replikasi** skala-besar dan infrastruktur trading-data bersama yang naikin standar empiris riset finance.

Paper ini khas: alih-alih berdebat soal HFT secara abstrak, Menkveld dapetin data yang ngidentifikasi *satu* HFT besar lintas dua venue yang bersaing dan sekadar *ngeliat book-nya* — trade-nya, inventory-nya, profit dan loss-nya, didekomposisi. Hasilnya salah satu bukti paling bersih soal apa yang HFT lakuin buat hidup, dan dia nge-reframe debat kebijakan dengan nunjukin aktivitasnya itu market making kuno yang bisa-dikenali dalam pakaian teknologis baru.`
    },
    focus: {
      en: `What does a high-frequency trader actually *do*, and is it good or bad for markets? Menkveld answers with an unusually clean natural experiment: the 2007-2008 arrival of **Chi-X**, a new low-fee trading venue competing with the incumbent **Euronext** for Dutch stocks, and a dataset that lets him identify *one* large HFT active across both. He finds the HFT is, in substance, a **modern market maker**: it posts on both sides of the book, earns the bid-ask spread on its passive (liquidity-providing) fills, and aggressively manages its inventory back toward zero, ending the day flat. Crucially, he can decompose its profit. Per trade, the HFT makes a **gross profit of about €0.88**, which is a **€1.55 gain on the spread** (net of fees) *minus* a **€0.68 'positioning' loss** — the adverse selection it pays when it ends up holding inventory the market then moves against. That decomposition *is* the Glosten-Milgrom / Avellaneda-Stoikov market-making tradeoff, measured in a real book: earn the spread, pay adverse selection, net a thin margin. And the HFT runs a **cross-market** strategy — providing liquidity heavily on the cheap entrant (a 64% trade-participation rate on Chi-X) while using the deep incumbent (8% on Euronext) to offload positions — which is exactly how a new venue bootstraps the liquidity it needs to survive.`,
      id: `Apa yang high-frequency trader sebenernya *lakuin*, dan apakah itu baik atau buruk buat pasar? Menkveld ngejawab dengan natural experiment yang luar biasa bersih: kedatangan 2007-2008 **Chi-X**, venue trading low-fee baru yang bersaing sama incumbent **Euronext** buat saham Belanda, dan dataset yang ngebolehin dia ngidentifikasi *satu* HFT besar yang aktif lintas keduanya. Dia nemuin HFT-nya itu, secara substansi, **market maker modern**: dia posting di kedua sisi book, dapet bid-ask spread di fill passive (penyedia-liquidity)-nya, dan agresif ngelola inventory-nya balik ke nol, ngakhirin hari flat. Krusial, dia bisa ngedekomposisi profit-nya. Per trade, HFT-nya bikin **gross profit sekitar €0.88**, yang itu **gain €1.55 di spread** (net fee) *dikurangin* **rugi 'positioning' €0.68** — adverse selection yang dia bayar pas dia berakhir megang inventory yang pasar terus gerakin lawan dia. Dekomposisi itu *adalah* tradeoff market-making Glosten-Milgrom / Avellaneda-Stoikov, diukur di book nyata: dapet spread, bayar adverse selection, dapet bersih margin tipis. Dan HFT-nya jalanin strategi **cross-market** — nyediain liquidity berat di entrant murah (trade-participation rate 64% di Chi-X) sambil pakai incumbent dalem (8% di Euronext) buat ngeluarin posisi — yang persis gimana venue baru nge-bootstrap liquidity yang dia butuh buat selamat.`
    },
    intellectualLineage: {
      en: `The theory being tested is classic market-making: **Glosten-Milgrom (1985)** and **Kyle (1985)** (the spread/price-impact as compensation for adverse selection) and the **inventory** tradition of **Ho and Stoll (1981)**, **Grossman and Miller (1988)**, and **Amihud and Mendelson (1980)** — formalized for the algorithmic era by **Avellaneda and Stoikov (2008)**, whose optimal-quoting market maker this paper is the empirical portrait of. The institutional backdrop is the post-**MiFID** (2007) fragmentation of European equity trading into competing venues, and the broader HFT-empirics wave it sits in: **Hendershott, Jones and Menkveld (2011)** ("Does Algorithmic Trading Improve Liquidity?"), **Brogaard, Hendershott and Riordan (2014)** (HFT and price discovery), and **Hagströmer and Nordén (2013)** (market-making vs opportunistic HFTs). Its policy counterpoint is the latency-arbitrage critique — **Budish-Cramton-Shim (2015)** and **Aquilina-Budish-O'Neill (2022)** — where the HFT is the *sniper*; here it is the *maker being sniped*, the two halves of what "HFT" means.`,
      id: `Teori yang diuji itu market-making klasik: **Glosten-Milgrom (1985)** dan **Kyle (1985)** (spread/price-impact sebagai kompensasi adverse selection) dan tradisi **inventory** **Ho dan Stoll (1981)**, **Grossman dan Miller (1988)**, dan **Amihud dan Mendelson (1980)** — diformalin buat era algoritmik sama **Avellaneda dan Stoikov (2008)**, yang market maker optimal-quoting-nya paper ini potret empirisnya. Latar institusional-nya itu fragmentasi pasca-**MiFID** (2007) dari trading equity Eropa jadi venue yang bersaing, dan gelombang HFT-empiris lebih luas yang dia tinggal di dalamnya: **Hendershott, Jones dan Menkveld (2011)** ("Does Algorithmic Trading Improve Liquidity?"), **Brogaard, Hendershott dan Riordan (2014)** (HFT dan price discovery), dan **Hagströmer dan Nordén (2013)** (market-making vs HFT oportunistik). Counterpoint kebijakan-nya itu kritik latency-arbitrage — **Budish-Cramton-Shim (2015)** dan **Aquilina-Budish-O'Neill (2022)** — di mana HFT-nya itu *sniper*; di sini dia *maker yang disnipe*, dua paruh dari apa arti "HFT."`
    },
    keyCollaborators: {
      en: `Menkveld's most-cited collaboration is with **Terrence Hendershott** and **Charles Jones** on "Does Algorithmic Trading Improve Liquidity?" (2011), a companion to this paper. He works across the empirical-microstructure community with **Jonathan Brogaard**, **Ryan Riordan**, **Bart Yueshen**, and **Marius Zoican** on HFT and fragmentation, and on flash-crash and systemic-liquidity work. Beyond research he co-leads field-wide **replication** and trading-data initiatives. The theoretical touchstones invoked are **Lawrence Glosten**, **Albert Kyle**, and **Marco Avellaneda / Sasha Stoikov** (the market-maker models his data make concrete).`,
      id: `Kolaborasi Menkveld yang paling-dikutip itu sama **Terrence Hendershott** dan **Charles Jones** soal "Does Algorithmic Trading Improve Liquidity?" (2011), pendamping paper ini. Dia kerja lintas komunitas empirical-microstructure sama **Jonathan Brogaard**, **Ryan Riordan**, **Bart Yueshen**, dan **Marius Zoican** soal HFT dan fragmentasi, dan soal kerja flash-crash dan systemic-liquidity. Di luar riset dia ko-mimpin inisiatif **replikasi** dan trading-data se-field. Tonggak teoritis yang dipanggil itu **Lawrence Glosten**, **Albert Kyle**, dan **Marco Avellaneda / Sasha Stoikov** (model market-maker yang data-nya bikin konkret).`
    },
    legacy: {
      en: `This paper grounded a noisy public debate in evidence. At the time, "high-frequency trading" was discussed as either a liquidity blessing or a predatory menace, mostly without data on what an HFT's book looked like. By identifying one large HFT across two venues and decomposing its economics, Menkveld showed three durable things. First, **HFTs are the new market makers**: stripped of jargon, this firm does what the NYSE specialist did — quote both sides, earn the spread, manage inventory — but with modern technology and *no affirmative obligation* to do so, providing liquidity only when it pays. Second, the **economics are thin and recognizable**: gross profit of about €0.88 a trade is the classic spread-minus-adverse-selection of Glosten-Milgrom and Avellaneda-Stoikov, not a hidden tax — competitive market making, measured. Third, HFTs are the **connective tissue of fragmented markets**: by making markets on the entrant and offloading on the incumbent, the HFT made Chi-X's entry viable, which is *how* post-MiFID (and later, multi-venue) markets actually get their liquidity. The paper pairs naturally with its own foil — the latency-arbitrage literature where HFTs *snipe* makers — to give a balanced picture: the same technology produces both the liquidity-providing "new market maker" and the stale-quote sniper, and good policy has to tell them apart.`,
      id: `Paper ini ngegroundin debat publik yang berisik di bukti. Saat itu, "high-frequency trading" dibahas entah sebagai berkah liquidity atau ancaman predator, kebanyakan tanpa data soal kayak apa book HFT. Dengan ngidentifikasi satu HFT besar lintas dua venue dan ngedekomposisi ekonominya, Menkveld nunjukin tiga hal abadi. Pertama, **HFT itu market maker baru**: dilucuti jargon, firma ini ngelakuin apa yang specialist NYSE lakuin — quote kedua sisi, dapet spread, kelola inventory — tapi dengan teknologi modern dan *tanpa kewajiban afirmatif* buat ngelakuinnya, nyediain liquidity cuma pas dia bayar. Kedua, **ekonominya tipis dan bisa-dikenali**: gross profit sekitar €0.88 per trade itu spread-minus-adverse-selection klasik Glosten-Milgrom dan Avellaneda-Stoikov, bukan pajak tersembunyi — market making kompetitif, terukur. Ketiga, HFT itu **jaringan penghubung pasar terfragmentasi**: dengan bikin pasar di entrant dan ngeluarin di incumbent, HFT-nya bikin entri Chi-X viable, yang itu *gimana* pasar pasca-MiFID (dan belakangan, multi-venue) sebenernya dapet liquidity-nya. Paper-nya pasangan natural sama foil-nya sendiri — literatur latency-arbitrage di mana HFT *nynipe* maker — buat ngasih gambaran seimbang: teknologi yang sama ngehasilin baik "new market maker" penyedia-liquidity maupun sniper stale-quote, dan kebijakan yang baik harus bisa bedain mereka.`
    },
    keyWorks: [
      { year: 2013, title: 'High Frequency Trading and the New Market Makers (this item)', venue: 'Journal of Financial Markets' },
      { year: 2011, title: 'Does Algorithmic Trading Improve Liquidity? (Hendershott, Jones & Menkveld)', venue: 'Journal of Finance' },
      { year: 2016, title: 'The Economics of High-Frequency Trading: Taking Stock (Menkveld, survey)', venue: 'Annual Review of Financial Economics' },
      { year: 2017, title: 'Need for Speed? Exchange Latency and Liquidity (Menkveld & Zoican)', venue: 'Review of Financial Studies' },
      { year: 2008, title: 'Avellaneda & Stoikov, High-Frequency Trading in a Limit Order Book (the theory this paper portrays)', venue: 'Quantitative Finance' },
    ],
  },

  sections: [
    // ─────────────── 1. motivation ───────────────
    {
      id: 'motivation',
      heading: { en: 'Why this matters', id: 'Kenapa ini penting' },
      body: {
        en: `By the late 2000s, "high-frequency trading" had become a Rorschach test: to critics it was predatory front-running; to defenders it was the source of historically tight spreads. The argument was loud and almost entirely **data-free**, because nobody outside the firms could see what an HFT's positions, trades, and profits actually looked like.

Menkveld got that look. Europe's MiFID directive (2007) broke the old national-exchange monopolies and let new venues compete, and one such entrant — **Chi-X**, a low-fee electronic venue — began competing with the incumbent **Euronext** for Dutch stocks. Menkveld obtained data that let him identify *one* large high-frequency trader active across *both* markets, and reconstruct its book: every trade, its running inventory, and its profit and loss, decomposed into where the money came from.

The headline is deflating in the best way. The HFT is, functionally, an old-fashioned **market maker** with new technology. It posts limit orders on *both* sides of the book, collects the bid-ask spread when those orders are filled, and then works hard to push its **inventory back toward zero**, ending each day roughly flat. Its profit is thin and entirely recognizable: per trade it nets a **gross profit of about €0.88**, made up of a **€1.55 profit on the spread** (after fees) *minus* a **€0.68 "positioning" loss** — the money it gives back through adverse selection when it is left holding inventory and the price moves against it. Earn the spread, pay adverse selection, keep a few cents: that *is* the Glosten-Milgrom / Avellaneda-Stoikov market-making model, caught in the wild.

Two more facts complete the picture. The HFT is astonishingly active — about **1,397 trades per stock per day** — and it runs a **cross-market** strategy: it provides the bulk of the liquidity on the small, cheap entrant (participating in about **64%** of Chi-X trades) and uses the deep incumbent (about **8%** of Euronext trades) to offload the positions it accumulates. That symbiosis is the deeper lesson: the new venue could not have bootstrapped its liquidity without the HFT, and the HFT could not run its book without the incumbent to flatten on. HFTs are not just *in* fragmented markets — they are the **connective tissue** that makes fragmentation work.`,
        id: `Menjelang akhir 2000-an, "high-frequency trading" udah jadi tes Rorschach: buat kritikus dia front-running predator; buat pembela dia sumber spread paling ketat secara historis. Argumennya berisik dan hampir sepenuhnya **bebas-data**, karena gak ada yang di luar firma-nya bisa liat kayak apa posisi, trade, dan profit HFT sebenernya.

Menkveld dapet liatan itu. Direktif MiFID Eropa (2007) mecah monopoli national-exchange lama dan ngebolehin venue baru bersaing, dan satu entrant kayak gitu — **Chi-X**, venue elektronik low-fee — mulai bersaing sama incumbent **Euronext** buat saham Belanda. Menkveld dapetin data yang ngebolehin dia ngidentifikasi *satu* high-frequency trader besar yang aktif lintas *kedua* pasar, dan ngerekonstruksi book-nya: tiap trade, running inventory-nya, dan profit dan loss-nya, didekomposisi jadi dari mana duitnya datang.

Headline-nya nge-deflasiin dengan cara terbaik. HFT-nya itu, secara fungsional, **market maker** kuno dengan teknologi baru. Dia posting limit order di *kedua* sisi book, ngumpulin bid-ask spread pas order itu di-fill, dan terus kerja keras buat ngedorong **inventory-nya balik ke nol**, ngakhirin tiap hari kira-kira flat. Profit-nya tipis dan sepenuhnya bisa-dikenali: per trade dia dapet bersih **gross profit sekitar €0.88**, terdiri dari **profit €1.55 di spread** (setelah fee) *dikurangin* **rugi "positioning" €0.68** — duit yang dia balikin lewat adverse selection pas dia ketinggalan megang inventory dan harga gerak lawan dia. Dapet spread, bayar adverse selection, simpen beberapa sen: itu *adalah* model market-making Glosten-Milgrom / Avellaneda-Stoikov, ketangkep di alam liar.

Dua fakta lagi nyelesain gambarannya. HFT-nya sangat aktif — sekitar **1.397 trade per saham per hari** — dan dia jalanin strategi **cross-market**: dia nyediain mayoritas liquidity di entrant kecil, murah (berpartisipasi di sekitar **64%** trade Chi-X) dan pakai incumbent dalem (sekitar **8%** trade Euronext) buat ngeluarin posisi yang dia akumulasi. Simbiosis itu pelajaran lebih dalemnya: venue baru-nya gak bakal bisa nge-bootstrap liquidity-nya tanpa HFT, dan HFT-nya gak bakal bisa jalanin book-nya tanpa incumbent buat ngeflat-in. HFT bukan cuma *di* pasar terfragmentasi — mereka **jaringan penghubung** yang bikin fragmentasi bekerja.`
      }
    },

    // ─────────────── 2. intuition ───────────────
    {
      id: 'intuition',
      heading: { en: 'Intuition', id: 'Intuisi' },
      body: {
        en: `Forget the speed for a moment and watch the *behaviour*. A market maker has one job: stand ready to buy from sellers and sell to buyers, and get paid the **spread** for the service. Post a bid at 99 and an ask at 101; if one trader sells to you at 99 and another buys from you at 101, you pocket the 2-point spread and you are flat. That is the dream round-trip.

But the two trades rarely arrive paired and instant. Suppose your bid at 99 gets hit — now you are *long* one unit, exposed to the price. Two bad things can follow. The price might keep falling (you bought from someone who knew it was heading down — **adverse selection**), or you might simply be stuck holding risk you did not want (**inventory risk**). Either way, to get back to flat you must trade *out* of the position, often by crossing the spread yourself or shading your quotes — and that costs you part of what you earned. So a market maker's P&L is a tug-of-war: **the spread you earn on passive fills, minus what you lose flattening the inventory those fills leave you with.**

Menkveld's decomposition is exactly this tug-of-war, with numbers on a real HFT's book: **+€1.55 on the spread, −€0.68 on positioning, = +€0.88 net per trade.** The HFT wins the spread on its passive (liquidity-providing) trades but hands a chunk back as adverse selection when it manages inventory. That it nets only a few cents is the *competitive* signature — if market making here were wildly profitable, more HFTs would compete the spread thinner. The "new market maker" is just the Glosten-Milgrom maker, automated.

The inventory discipline is the giveaway that this is market making and not directional betting. The HFT's position is strongly **mean-reverting**: it does not accumulate a view and hold it; it gets pushed off zero by incoming order flow and immediately works back to zero, flat by the close. A directional trader builds positions; a market maker *unwinds* them. The data show the latter.

Finally, the **cross-market** trick. Why provide liquidity mostly on the *small* entrant venue but offload on the *big* incumbent? Because the two venues offer different things. The entrant (Chi-X) has **low fees**, so capturing the spread by posting passively there is cheap and profitable — that is where you want to *earn*. The incumbent (Euronext) has **depth**, so when you need to dump an unwanted position quickly you can do it there with the least price impact — that is where you want to *flatten*. Make markets where it is cheap to quote; offload where it is cheap to trade. This division of labour is what let a tiny new venue attract real liquidity: the HFT supplied it, backstopped by the incumbent.`,
        id: `Lupain kecepatan sebentar dan liat *kelakuannya*. Market maker punya satu tugas: siap beli dari penjual dan jual ke pembeli, dan dibayar **spread** buat layanannya. Posting bid di 99 dan ask di 101; kalau satu trader jual ke kamu di 99 dan yang lain beli dari kamu di 101, kamu ngantongin spread 2-poin dan kamu flat. Itu round-trip impian.

Tapi dua trade jarang datang berpasangan dan instan. Misal bid kamu di 99 kena hit — sekarang kamu *long* satu unit, kena harga. Dua hal buruk bisa ngikut. Harga mungkin terus jatuh (kamu beli dari seseorang yang tau dia menuju turun — **adverse selection**), atau kamu mungkin sekadar nyangkut megang risiko yang kamu gak mau (**inventory risk**). Entah gimana, buat balik ke flat kamu harus trade *keluar* dari posisi, sering dengan nyebrang spread sendiri atau nge-shading quote kamu — dan itu makan sebagian dari yang kamu dapet. Jadi P&L market maker itu tarik-ulur: **spread yang kamu dapet di passive fill, dikurangin yang kamu rugi ngeflat-in inventory yang fill itu tinggalin.**

Dekomposisi Menkveld itu persis tarik-ulur ini, dengan angka di book HFT nyata: **+€1.55 di spread, −€0.68 di positioning, = +€0.88 bersih per trade.** HFT-nya menang spread di trade passive (penyedia-liquidity)-nya tapi ngembaliin sebongkah sebagai adverse selection pas dia kelola inventory. Bahwa dia dapet bersih cuma beberapa sen itu tanda-tangan *kompetitif* — kalau market making di sini super profitable, lebih banyak HFT bakal ngekompetisi spread-nya jadi lebih tipis. "New market maker" itu cuma maker Glosten-Milgrom, diotomatisasi.

Disiplin inventory-nya itu petunjuk bahwa ini market making bukan taruhan direksional. Posisi HFT-nya kuat **mean-reverting**: dia gak ngakumulasi pandangan dan megangnya; dia kedorong lepas dari nol sama order flow yang masuk dan langsung kerja balik ke nol, flat di close. Trader direksional ngebangun posisi; market maker *ngebongkar* mereka. Data nunjukin yang belakangan.

Akhirnya, trik **cross-market**. Kenapa nyediain liquidity mostly di venue entrant *kecil* tapi ngeluarin di incumbent *besar*? Karena dua venue nawarin hal berbeda. Entrant (Chi-X) punya **fee rendah**, jadi nangkep spread dengan posting passive di sana itu murah dan profitable — itu di mana kamu mau *dapet*. Incumbent (Euronext) punya **depth**, jadi pas kamu perlu buang posisi yang gak diinginin cepet kamu bisa ngelakuinnya di sana dengan price impact paling sedikit — itu di mana kamu mau *flatten*. Bikin pasar di mana murah buat quote; ngeluarin di mana murah buat trade. Pembagian kerja ini yang bikin venue baru mungil narik liquidity nyata: HFT-nya nyuplai-nya, di-backstop sama incumbent.`
      }
    },

    // ─────────────── 3. formalization ───────────────
    {
      id: 'formalization',
      heading: { en: 'The setting and the P&L decomposition', id: 'Setting dan dekomposisi P&L' },
      body: {
        en: `**The natural experiment.** Post-MiFID (2007), the entrant venue **Chi-X** competes with the incumbent **Euronext** for Dutch index stocks. Menkveld's data identify a single large **HFT** active on both. Because the firm is identifiable, its *every* trade, side (passive vs aggressive), venue, running inventory, and realized P&L can be reconstructed — a rarity in microstructure, where individual accounts are usually invisible.

**Classifying the HFT as a market maker.** Three observed features pin down the role:
1. **Two-sided, passive provision.** The HFT predominantly supplies liquidity with resting limit orders on both sides, earning the spread when filled — not crossing to take liquidity directionally.
2. **Mean-reverting inventory.** Its position is pushed off zero by incoming flow and rapidly returns to zero, ending the day flat. It manages, rather than accumulates, risk — the hallmark of making markets, not taking views.
3. **Enormous turnover.** About **1,397 trades per stock per day**: the activity level of an automated quoting engine, not a position trader.

**The P&L decomposition (the core result).** Split each trade's profit into the spread captured and the loss from positioning:
$$\\underbrace{\\text{gross profit}}_{\\approx\\,€0.88} \\;=\\; \\underbrace{\\text{spread P\\&L (net of fees)}}_{\\approx\\,+€1.55} \\;-\\; \\underbrace{\\text{positioning loss}}_{\\approx\\,€0.68}.$$
- The **spread component** (+€1.55) is the half-spread earned on passive fills, after exchange fees/rebates — the reward for supplying immediacy.
- The **positioning loss** (−€0.68) is the adverse selection / inventory cost: when the HFT is left holding a position and prices move against it (often because the counterparty was informed, or because flattening crosses the spread), it loses part of the spread back. Note that this is an *inventory-P&L* term, not solely the price-impact piece of a textbook realized-spread decomposition — it bundles adverse selection *and* inventory cost. Menkveld decomposes it further by holding period: a **+€0.45 profit on positions held under five seconds** but a **−€1.13 loss on longer-held positions**, summing to the −€0.68. The short-horizon profit is the market maker getting paid for immediacy; the longer-horizon loss is where adverse selection and inventory risk bite.
- The **net** (+€0.88) is thin — consistent with *competitive* market making, where free entry keeps margins near the cost of bearing inventory and adverse-selection risk. This is exactly the Glosten-Milgrom (adverse selection) and Avellaneda-Stoikov (inventory) tradeoff, now measured: $\\text{net} = \\text{spread} - \\text{adverse selection}$.

**The cross-market mechanism.** The HFT's trade-participation rates differ sharply by venue: about **64.4% on Chi-X** (the small entrant) versus about **8.1% on Euronext** (the large incumbent), with roughly half its trades on each in absolute terms. The logic is a fee/depth division of labour: provide liquidity (earn the spread) on the **low-fee** entrant, and **offload** accumulated inventory on the **deep** incumbent where price impact is lowest. The entrant's low fees make passive market making profitable enough to seed its book; the incumbent's depth makes inventory management cheap. The HFT is the bridge that lets the entrant survive — evidence that HFT liquidity provision is *what makes venue competition viable* under fragmentation.

**Reading the result.** The paper does not say HFTs are costless or always benign; it says *this* HFT, in *this* setting, behaves as a competitive, inventory-disciplined market maker earning a thin spread-minus-adverse-selection margin, and that its presence was decisive for a new venue's liquidity. It is a clean identification, not a universal law — but it reframed the HFT debate around a measurable economic role.`,
        id: `**Natural experiment.** Pasca-MiFID (2007), venue entrant **Chi-X** bersaing sama incumbent **Euronext** buat saham indeks Belanda. Data Menkveld ngidentifikasi satu **HFT** besar yang aktif di keduanya. Karena firma-nya bisa-diidentifikasi, *tiap* trade-nya, sisi (passive vs aggressive), venue, running inventory, dan realized P&L-nya bisa direkonstruksi — kelangkaan di microstructure, di mana akun individual biasanya gak keliatan.

**Ngeklasifikasi HFT sebagai market maker.** Tiga fitur teramati ngepasin perannya:
1. **Provisi dua-sisi, passive.** HFT-nya predominan nyuplai liquidity dengan resting limit order di kedua sisi, dapet spread pas di-fill — bukan nyebrang buat ngambil liquidity secara direksional.
2. **Inventory mean-reverting.** Posisi-nya kedorong lepas dari nol sama flow masuk dan cepet balik ke nol, ngakhirin hari flat. Dia ngelola, bukan ngakumulasi, risiko — ciri khas bikin pasar, bukan ngambil pandangan.
3. **Turnover besar.** Sekitar **1.397 trade per saham per hari**: level aktivitas quoting engine otomatis, bukan position trader.

**Dekomposisi P&L (hasil inti).** Pisahin profit tiap trade jadi spread yang ditangkep dan rugi dari positioning:
$$\\underbrace{\\text{gross profit}}_{\\approx\\,€0.88} \\;=\\; \\underbrace{\\text{spread P\\&L (net fee)}}_{\\approx\\,+€1.55} \\;-\\; \\underbrace{\\text{positioning loss}}_{\\approx\\,€0.68}.$$
- **Komponen spread** (+€1.55) itu half-spread yang didapet di passive fill, setelah fee/rebate exchange — reward buat nyuplai immediacy.
- **Rugi positioning** (−€0.68) itu biaya adverse selection / inventory: pas HFT ketinggalan megang posisi dan harga gerak lawan dia (sering karena counterparty berinformasi, atau karena ngeflat-in nyebrang spread), dia rugi sebagian spread balik. Perhatiin ini istilah *inventory-P&L*, bukan cuma potongan price-impact dari dekomposisi realized-spread textbook — dia ngebundel adverse selection *dan* inventory cost. Menkveld ngedekomposisi-nya lebih jauh by holding period: **profit +€0.45 di posisi yang dipegang di bawah lima detik** tapi **rugi −€1.13 di posisi yang dipegang lebih lama**, ngejumlah ke −€0.68. Profit horizon-pendek itu market maker dibayar buat immediacy; rugi horizon-lebih-panjang itu di mana adverse selection dan inventory risk nggigit.
- **Bersih**-nya (+€0.88) itu tipis — konsisten sama market making *kompetitif*, di mana free entry nahan margin deket biaya nanggung inventory dan risk adverse-selection. Ini persis tradeoff Glosten-Milgrom (adverse selection) dan Avellaneda-Stoikov (inventory), sekarang terukur: $\\text{bersih} = \\text{spread} - \\text{adverse selection}$.

**Mekanisme cross-market.** Trade-participation rate HFT-nya beda tajam by venue: sekitar **64.4% di Chi-X** (entrant kecil) lawan sekitar **8.1% di Euronext** (incumbent besar), dengan kira-kira separuh trade-nya di masing-masing secara absolut. Logika-nya pembagian kerja fee/depth: nyediain liquidity (dapet spread) di entrant **fee-rendah**, dan **ngeluarin** inventory yang terakumulasi di incumbent **dalem** di mana price impact paling rendah. Fee rendah entrant bikin passive market making cukup profitable buat ngebenih book-nya; depth incumbent bikin manajemen inventory murah. HFT-nya itu jembatan yang bikin entrant selamat — bukti bahwa penyediaan liquidity HFT itu *yang bikin kompetisi venue viable* di bawah fragmentasi.

**Membaca hasilnya.** Paper-nya gak bilang HFT itu tanpa-biaya atau selalu jinak; dia bilang *HFT ini*, di *setting ini*, berkelakuan sebagai market maker yang kompetitif, disiplin-inventory yang dapet margin spread-minus-adverse-selection tipis, dan bahwa kehadirannya menentukan buat liquidity venue baru. Itu identifikasi bersih, bukan hukum universal — tapi dia nge-reframe debat HFT di sekitar peran ekonomi yang terukur.`
      }
    },

    // ─────────────── 4. worked-example ───────────────
    {
      id: 'worked-example',
      heading: { en: 'Worked example', id: 'Contoh kerjaan' },
      body: {
        en: `**Following the HFT through a cross-market round-trip, and adding up the cents.**

**One round-trip.** A Dutch index stock is quoted with a one-tick spread. On the low-fee entrant (Chi-X), the HFT posts a passive bid. A customer sells into it — the HFT is now **long one unit**, having earned (in expectation) half the spread on that passive fill, less the entrant's tiny fee: call it **+€1.55** of "spread P&L" on the trade. But it is no longer flat. It does not want the position, so it turns to the deep incumbent (Euronext) and **sells the unit** to get back to zero. That flattening trade crosses the spread / pays some price impact, and sometimes the price has already ticked against it (the customer who sold may have known something): on average this costs **−€0.68** of "positioning" P&L. Net on the round-trip: **€1.55 − €0.68 = €0.88**.

**Why the split is the whole story.** Notice the HFT does *not* make €0.88 by predicting the price; it makes it by *providing immediacy* and being disciplined about inventory. The +€1.55 is the fee for standing ready to trade; the −€0.68 is the unavoidable cost of sometimes trading with someone better informed, or of paying to flatten. The residual €0.88 is the market maker's wage. If it were much larger, competitors would undercut the quotes; if it were negative, the HFT would stop quoting. A thin positive margin is precisely what competitive liquidity provision looks like.

**Scaling up.** Now multiply by activity. The HFT trades about **1,397 times per stock per day**. At ~€0.88 gross per trade that is on the order of **€1,200 per stock per day** of gross market-making profit — meaningful in aggregate across many stocks, yet a tiny *per-trade* rent, which is the point: high *volume*, thin *margin*. And the trades are split across venues by function — roughly half on each in count, but with very different *participation rates*: the HFT is about **64%** of all trades on the small entrant (it essentially *is* the liquidity there) versus about **8%** on the large incumbent (one participant among many, used mainly to offload).

**The bootstrapping lesson.** Strip it to the mechanism: a new venue with low fees but no liquidity is useless to customers; an HFT will provide that liquidity *if* it can manage the resulting inventory cheaply somewhere. The incumbent's depth is that somewhere. So the entrant's low fees + the incumbent's depth + the HFT's technology combine to seed a second venue's order book. Take away the HFT and Chi-X has no liquidity; take away Euronext and the HFT cannot safely make markets on Chi-X. The €0.88-a-trade market maker is the hinge on which post-MiFID venue competition turned.`,
        id: `**Ngikutin HFT lewat round-trip cross-market, dan ngejumlahin sen-nya.**

**Satu round-trip.** Saham indeks Belanda di-quote dengan spread satu-tick. Di entrant fee-rendah (Chi-X), HFT-nya posting bid passive. Customer jual ke dalamnya — HFT-nya sekarang **long satu unit**, udah dapet (dalam ekspektasi) separuh spread di passive fill itu, dikurangin fee mungil entrant: sebut **+€1.55** "spread P&L" di trade itu. Tapi dia gak lagi flat. Dia gak mau posisi-nya, jadi dia nuju ke incumbent dalem (Euronext) dan **jual unit-nya** buat balik ke nol. Trade flattening itu nyebrang spread / bayar sebagian price impact, dan kadang harga udah ke-tick lawan dia (customer yang jual mungkin tau sesuatu): rata-rata ini makan **−€0.68** "positioning" P&L. Bersih di round-trip: **€1.55 − €0.68 = €0.88**.

**Kenapa split-nya itu seluruh cerita.** Perhatiin HFT-nya *gak* bikin €0.88 dengan ngeprediksi harga; dia bikinnya dengan *nyediain immediacy* dan disiplin soal inventory. +€1.55 itu fee buat siap trade; −€0.68 itu biaya tak-terhindar kadang trade sama seseorang yang lebih berinformasi, atau bayar buat flatten. Residual €0.88 itu upah market maker. Kalau dia jauh lebih gede, kompetitor bakal ngebawah-in quote-nya; kalau dia negatif, HFT-nya bakal berhenti quote. Margin positif tipis itu persis kayak apa penyediaan liquidity kompetitif keliatan.

**Nge-scale.** Sekarang kali aktivitas. HFT-nya trade sekitar **1.397 kali per saham per hari**. Di ~€0.88 gross per trade itu dalam orde **€1.200 per saham per hari** gross profit market-making — berarti secara agregat lintas banyak saham, tapi rent *per-trade* mungil, yang itu poin-nya: *volume* tinggi, *margin* tipis. Dan trade-nya dibagi lintas venue by fungsi — kira-kira separuh di masing-masing dalam count, tapi dengan *participation rate* sangat beda: HFT-nya sekitar **64%** dari semua trade di entrant kecil (dia pada dasarnya *adalah* liquidity di sana) lawan sekitar **8%** di incumbent besar (satu peserta di antara banyak, dipakai utamanya buat ngeluarin).

**Pelajaran bootstrapping.** Lucuti ke mekanisme: venue baru dengan fee rendah tapi tanpa liquidity itu gak guna buat customer; HFT bakal nyediain liquidity itu *kalau* dia bisa ngelola inventory yang dihasilin dengan murah di suatu tempat. Depth incumbent itu tempat itu. Jadi fee rendah entrant + depth incumbent + teknologi HFT gabung buat ngebenih order book venue kedua. Ambil HFT-nya dan Chi-X gak punya liquidity; ambil Euronext dan HFT-nya gak bisa aman bikin pasar di Chi-X. Market maker €0.88-per-trade itu engsel di mana kompetisi venue pasca-MiFID berputar.`
      }
    },

    // ─────────────── 5. applications ───────────────
    {
      id: 'applications',
      heading: { en: 'Applications', id: 'Aplikasi' },
      body: {
        en: `**A balanced view of HFT.** The single most useful takeaway is a *frame*: much of HFT is recognizable market making — provide two-sided liquidity, earn the spread, manage inventory — earning thin, competitive margins, not a hidden tax. That belongs side-by-side with the latency-arbitrage critique (Budish-Cramton-Shim, Aquilina-Budish-O'Neill), where HFTs *snipe* stale quotes. The same firms and technology produce both faces: the **maker** (this paper) and the **sniper** (those papers). Good analysis and good policy separate the liquidity-providing role from the rent-extracting one, rather than treating "HFT" as a single thing.

**Designing venue competition and incentives.** The cross-market result is a template for how new venues attract liquidity: **low fees / maker rebates** to make passive provision profitable for HFTs, relying on a **deep reference market** where those HFTs can offload. Exchange fee schedules, maker-taker pricing, and the viability of a new venue all hinge on whether market-making HFTs find it worth quoting. The paper is a caution, too: a venue's liquidity may rest on a *handful* of HFTs, so it can be fragile if they withdraw.

**Market-maker risk management, validated.** The €1.55 − €0.68 decomposition is the empirical confirmation of the inventory/adverse-selection tradeoff that Avellaneda-Stoikov optimize. A modern liquidity desk lives in exactly this split: set the quoted spread wide enough that the spread earned covers expected adverse selection plus inventory risk, and manage inventory back to neutral fast. The positioning loss is the line item that blows up in toxic flow (high VPIN) and in the latency races — which is why makers widen quotes precisely then.

**Crypto market making.** The structure transfers cleanly to crypto, which is natively multi-venue: market-making firms quote on many exchanges and hedge/offload on the deepest (often a perpetual-futures venue), earning the spread and paying adverse selection, with maker rebates as the incentive to seed thin order books. The same "earn the spread, flatten on the deep venue, net a thin margin" economics — and the same fragility when the few large market makers step back (liquidity can vanish in a stress event). (Menkveld's data are 2007-2008 European equities; the crypto reading is this module's extension.)

**Read it for what it is.** This is one HFT, two venues, one period — a clean identification, not a claim about all HFTs everywhere. Its lasting contribution is the *method and the frame*: get inside one book, decompose the P&L, and you find a market maker. Treat the specific euro figures as that case's evidence and the *structure* (spread minus positioning; quote-where-cheap, offload-where-deep) as the general lesson.`,
        id: `**Pandangan seimbang soal HFT.** Takeaway paling berguna itu sebuah *frame*: banyak dari HFT itu market making yang bisa-dikenali — nyediain liquidity dua-sisi, dapet spread, kelola inventory — dapet margin tipis, kompetitif, bukan pajak tersembunyi. Itu termasuk berdampingan sama kritik latency-arbitrage (Budish-Cramton-Shim, Aquilina-Budish-O'Neill), di mana HFT *nynipe* stale quote. Firma dan teknologi yang sama ngehasilin kedua wajah: **maker** (paper ini) dan **sniper** (paper itu). Analisis baik dan kebijakan baik misahin peran penyedia-liquidity dari yang ng-ekstrak-rent, alih-alih memperlakukan "HFT" sebagai satu hal.

**Ngedesain kompetisi venue dan insentif.** Hasil cross-market itu template buat gimana venue baru narik liquidity: **fee rendah / maker rebate** buat bikin provisi passive profitable buat HFT, ngandelin **reference market dalem** di mana HFT itu bisa ngeluarin. Skedul fee exchange, pricing maker-taker, dan viabilitas venue baru semua bergantung pada apakah HFT market-making nemu worth buat quote. Paper-nya juga peringatan: liquidity venue mungkin bertumpu pada *segelintir* HFT, jadi dia bisa rapuh kalau mereka mundur.

**Manajemen risiko market-maker, divalidasi.** Dekomposisi €1.55 − €0.68 itu konfirmasi empiris dari tradeoff inventory/adverse-selection yang Avellaneda-Stoikov optimasi. Liquidity desk modern hidup di persis split ini: set quoted spread cukup lebar biar spread yang didapet nutup expected adverse selection plus inventory risk, dan kelola inventory balik ke netral cepet. Rugi positioning itu line item yang meledak di toxic flow (VPIN tinggi) dan di race latency — yang kenapa maker ngelebarin quote persis saat itu.

**Market making crypto.** Struktur-nya transfer bersih ke crypto, yang natively multi-venue: firma market-making quote di banyak exchange dan hedge/ngeluarin di yang paling dalem (sering venue perpetual-futures), dapet spread dan bayar adverse selection, dengan maker rebate sebagai insentif buat ngebenih order book tipis. Ekonomi "dapet spread, flatten di venue dalem, dapet bersih margin tipis" yang sama — dan kerapuhan yang sama pas segelintir market maker besar mundur (liquidity bisa ilang di stress event). (Data Menkveld itu equity Eropa 2007-2008; bacaan crypto-nya perpanjangan modul ini.)

**Baca dia apa adanya.** Ini satu HFT, dua venue, satu periode — identifikasi bersih, bukan klaim soal semua HFT di mana-mana. Kontribusi abadinya itu *metode dan frame*: masuk ke dalam satu book, dekomposisi P&L, dan kamu nemu market maker. Perlakukan angka euro spesifik sebagai bukti kasus itu dan *struktur*-nya (spread minus positioning; quote-di-mana-murah, ngeluarin-di-mana-dalem) sebagai pelajaran umum.`
      }
    },

    // ─────────────── 6. practice ───────────────
    {
      id: 'practice',
      heading: { en: 'Practice', id: 'Latihan' },
      body: {
        en: `**1.** Menkveld decomposes the HFT's gross profit as about €1.55 on the spread minus about €0.68 on positioning, netting ≈ €0.88 per trade. Explain what each piece is, and why this decomposition shows the HFT is a market maker rather than a directional trader.

<details><summary>Answer</summary>
The **spread component (+€1.55)** is the (net-of-fee) half-spread the HFT earns on its passive, liquidity-providing fills — the fee for standing ready to trade. The **positioning loss (−€0.68)** is the adverse-selection / inventory cost: when a fill leaves the HFT holding a position and the price then moves against it (the counterparty may have been informed, or flattening crosses the spread / pays impact), it gives part of the spread back. The **net (+€0.88)** is the thin market-maker margin. It shows market making, not directional betting, because the profit comes from *providing immediacy and managing inventory*, not from predicting price: the HFT earns the spread and then pays to get flat, exactly the Glosten-Milgrom/Avellaneda-Stoikov tradeoff. A directional trader would build and hold positions; this firm unwinds them.
</details>

**2.** The HFT participates in about 64% of trades on the entrant Chi-X but only about 8% on the incumbent Euronext, splitting its trades roughly half-and-half between them. Explain the cross-market logic.

<details><summary>Answer</summary>
It is a fee/depth division of labour. The entrant Chi-X has **low fees**, so capturing the spread by posting passive limit orders there is cheap and profitable — that is where the HFT *earns*, providing the bulk of the liquidity (hence its ~64% participation; it essentially *is* the market there). The incumbent Euronext is **deep**, so when the HFT accumulates an unwanted position it can **offload** there with minimal price impact — that is where it *flattens* (a small ~8% share, one participant among many). Make markets where it is cheap to quote; unwind where it is cheap to trade. This is also how the new venue bootstrapped liquidity: the HFT could profitably seed Chi-X's book *only because* Euronext's depth let it manage the resulting inventory cheaply.
</details>

**3.** The HFT nets only ≈ €0.88 per trade. Why is such a *thin* margin actually the expected outcome, and what does it imply about whether HFT market making is "extracting" from investors?

<details><summary>Answer</summary>
A thin margin is the signature of **competition**. Market making here has relatively free entry: if quoting were highly profitable, more HFTs would post tighter quotes and compete the spread down until the net margin just covers the cost of bearing inventory and adverse-selection risk. So ≈ €0.88 — small per trade, earned through enormous volume (~1,397 trades/stock/day) — looks like a competitive wage for liquidity provision, not a large hidden tax. That reframes the "HFT extracts from investors" claim: this activity is the modern form of market making that tightens spreads and supplies immediacy, paid a thin margin. (It does *not* settle the separate latency-arbitrage/sniping critique, where the same technology is used to pick off stale quotes — that is a different role, addressed by Budish-Cramton-Shim and Aquilina-Budish-O'Neill.)
</details>

**4.** This paper and the latency-arbitrage papers (Budish-Cramton-Shim, Aquilina-Budish-O'Neill) reach almost opposite-sounding conclusions about HFT. Reconcile them.

<details><summary>Answer</summary>
They study two *different roles* the same technology can play. In Menkveld, the HFT is the **market maker** — it posts passive quotes, supplies liquidity, earns the spread, and pays adverse selection; its margin is thin and competitive, and it makes a fragmented market viable. In the latency-arbitrage papers, HFTs are the **snipers** — they race to pick off a market maker's *stale* quote when a public signal moves, and that race is a wasteful tax the maker (and ultimately investors) pays through wider spreads. Both are true at once: the maker in Menkveld is exactly the party who gets sniped in the other papers, and the positioning loss he measures includes that adverse selection. So "is HFT good or bad?" is the wrong question; the right one is to separate the *liquidity-providing* role (beneficial, thin-margin) from the *stale-quote-sniping* role (a deadweight speed race), because the same firms do both and policy should target the latter without killing the former.
</details>`,
        id: `**1.** Menkveld ngedekomposisi gross profit HFT sebagai sekitar €1.55 di spread dikurangin sekitar €0.68 di positioning, dapet bersih ≈ €0.88 per trade. Jelasin tiap potongan itu apa, dan kenapa dekomposisi ini nunjukin HFT-nya market maker bukan trader direksional.

<details><summary>Jawaban</summary>
**Komponen spread (+€1.55)** itu half-spread (net-fee) yang HFT dapet di passive fill, penyedia-liquidity-nya — fee buat siap trade. **Rugi positioning (−€0.68)** itu biaya adverse-selection / inventory: pas fill ninggalin HFT megang posisi dan harga terus gerak lawan dia (counterparty mungkin berinformasi, atau ngeflat-in nyebrang spread / bayar impact), dia ngembaliin sebagian spread. **Bersih (+€0.88)** itu margin market-maker tipis. Dia nunjukin market making, bukan taruhan direksional, karena profit-nya datang dari *nyediain immediacy dan ngelola inventory*, bukan dari ngeprediksi harga: HFT-nya dapet spread terus bayar buat jadi flat, persis tradeoff Glosten-Milgrom/Avellaneda-Stoikov. Trader direksional bakal ngebangun dan megang posisi; firma ini ngebongkar mereka.
</details>

**2.** HFT-nya berpartisipasi di sekitar 64% trade di entrant Chi-X tapi cuma sekitar 8% di incumbent Euronext, ngebagi trade-nya kira-kira separuh-separuh antara mereka. Jelasin logika cross-market-nya.

<details><summary>Jawaban</summary>
Itu pembagian kerja fee/depth. Entrant Chi-X punya **fee rendah**, jadi nangkep spread dengan posting passive limit order di sana itu murah dan profitable — itu di mana HFT-nya *dapet*, nyediain mayoritas liquidity (makanya partisipasi ~64%-nya; dia pada dasarnya *adalah* pasar di sana). Incumbent Euronext itu **dalem**, jadi pas HFT-nya ngakumulasi posisi yang gak diinginin dia bisa **ngeluarin** di sana dengan price impact minimal — itu di mana dia *flatten* (share ~8% kecil, satu peserta di antara banyak). Bikin pasar di mana murah buat quote; bongkar di mana murah buat trade. Ini juga gimana venue baru-nya nge-bootstrap liquidity: HFT-nya bisa profitable ngebenih book Chi-X *cuma karena* depth Euronext ngebolehin dia ngelola inventory yang dihasilin dengan murah.
</details>

**3.** HFT-nya dapet bersih cuma ≈ €0.88 per trade. Kenapa margin *tipis* kayak gitu sebenernya hasil yang diharapkan, dan apa yang dia implikasi soal apakah market making HFT itu "ngambil" dari investor?

<details><summary>Jawaban</summary>
Margin tipis itu tanda-tangan **kompetisi**. Market making di sini punya entry yang relatif bebas: kalau quoting sangat profitable, lebih banyak HFT bakal posting quote lebih ketat dan ngekompetisi spread-nya turun sampai net margin pas nutup biaya nanggung inventory dan risk adverse-selection. Jadi ≈ €0.88 — kecil per trade, didapet lewat volume besar (~1.397 trade/saham/hari) — keliatan kayak upah kompetitif buat penyediaan liquidity, bukan pajak tersembunyi besar. Itu nge-reframe klaim "HFT ngambil dari investor": aktivitas ini bentuk modern market making yang ngetatin spread dan nyuplai immediacy, dibayar margin tipis. (Dia *gak* nyelesain kritik latency-arbitrage/sniping terpisah, di mana teknologi yang sama dipakai buat metik stale quote — itu peran berbeda, dibahas Budish-Cramton-Shim dan Aquilina-Budish-O'Neill.)
</details>

**4.** Paper ini dan paper latency-arbitrage (Budish-Cramton-Shim, Aquilina-Budish-O'Neill) nyampe kesimpulan yang kedengeran hampir berlawanan soal HFT. Rekonsiliasi mereka.

<details><summary>Jawaban</summary>
Mereka ngestudi dua *peran berbeda* yang teknologi yang sama bisa main. Di Menkveld, HFT-nya itu **market maker** — dia posting passive quote, nyuplai liquidity, dapet spread, dan bayar adverse selection; margin-nya tipis dan kompetitif, dan dia bikin pasar terfragmentasi viable. Di paper latency-arbitrage, HFT-nya itu **sniper** — mereka balapan buat metik quote *stale* market maker pas sinyal publik gerak, dan race itu pajak boros yang maker (dan akhirnya investor) bayar lewat spread lebih lebar. Keduanya bener sekaligus: maker di Menkveld itu persis pihak yang disnipe di paper lain, dan rugi positioning yang dia ukur termasuk adverse selection itu. Jadi "apakah HFT baik atau buruk?" itu pertanyaan yang salah; yang bener itu misahin peran *penyedia-liquidity* (bermanfaat, margin-tipis) dari peran *sniping-stale-quote* (race kecepatan deadweight), karena firma yang sama ngelakuin keduanya dan kebijakan harusnya nargetin yang belakangan tanpa ngebunuh yang depan.
</details>`
      }
    },

    // ─────────────── 7. connections ───────────────
    {
      id: 'connections',
      heading: { en: 'Connections', id: 'Koneksi' },
      body: {
        en: `- **The theory this portrays**: [Avellaneda-Stoikov 2008](item:stoikov-2008) is the optimal inventory-managing market maker; Menkveld is its empirical portrait — the spread-vs-inventory tradeoff measured in a real HFT book.
- **Why there is a positioning loss**: [Glosten-Milgrom 1985](item:glosten-milgrom-1985) (adverse selection) and [Kyle 1985](item:kyle-1985) (price impact when flattening) are the sources of the −€0.68.
- **The other face of HFT**: [Budish-Cramton-Shim 2015](item:budish-cramton-shim-2015) and [Aquilina-Budish-O'Neill 2022](item:aquilina-budish-oneill-2022) study HFTs as *snipers* of stale quotes — the maker here is the party they pick off; together they give the full picture.
- **Toxic flow**: [Easley-López de Prado-O'Hara VPIN](item:easley-lopez-prado-vpin) measures the order-flow toxicity that drives the positioning loss and makes makers widen or withdraw.
- **Fragmentation & cross-venue**: [Hasbrouck 1995](item:hasbrouck-1995) (which venue discovers the price) and [Makarov-Schoar 2020](item:makarov-schoar-2020) (cross-venue arbitrage) frame the multi-market world this HFT bridges.`,
        id: `- **Teori yang dia potret**: [Avellaneda-Stoikov 2008](item:stoikov-2008) itu market maker optimal ngelola-inventory; Menkveld potret empirisnya — tradeoff spread-vs-inventory diukur di book HFT nyata.
- **Kenapa ada rugi positioning**: [Glosten-Milgrom 1985](item:glosten-milgrom-1985) (adverse selection) dan [Kyle 1985](item:kyle-1985) (price impact pas ngeflat-in) itu sumber dari −€0.68.
- **Wajah lain HFT**: [Budish-Cramton-Shim 2015](item:budish-cramton-shim-2015) dan [Aquilina-Budish-O'Neill 2022](item:aquilina-budish-oneill-2022) ngestudi HFT sebagai *sniper* stale quote — maker di sini itu pihak yang mereka metik; bareng mereka ngasih gambaran penuh.
- **Toxic flow**: [VPIN Easley-López de Prado-O'Hara](item:easley-lopez-prado-vpin) ngukur toxicity order-flow yang ngedorong rugi positioning dan bikin maker ngelebarin atau mundur.
- **Fragmentasi & cross-venue**: [Hasbrouck 1995](item:hasbrouck-1995) (venue mana yang nemuin harga) dan [Makarov-Schoar 2020](item:makarov-schoar-2020) (arbitrage cross-venue) ngeframe dunia multi-market yang HFT ini jembatanin.`
      }
    },

    // ─────────────── 8. sources ───────────────
    {
      id: 'sources',
      heading: { en: 'Sources', id: 'Sumber' },
      body: {
        en: `- **Menkveld, A. J.** (2013). "High Frequency Trading and the New Market Makers." *Journal of Financial Markets*, 16(4), 712-740. **(This item.)** The single-HFT, two-venue identification; the €1.55 − €0.68 ≈ €0.88-per-trade P&L decomposition; the cross-market market-making strategy.
- **Hendershott, T., Jones, C. M., and Menkveld, A. J.** (2011). "Does Algorithmic Trading Improve Liquidity?" *Journal of Finance*, 66(1), 1-33. The companion evidence that algorithmic trading narrowed spreads.
- **Avellaneda, M. and Stoikov, S.** (2008). "High-Frequency Trading in a Limit Order Book." *Quantitative Finance*, 8(3), 217-224. The optimal market-maker model this paper portrays empirically.
- **Glosten, L. and Milgrom, P.** (1985). "Bid, Ask and Transaction Prices in a Specialist Market." *Journal of Financial Economics*, 14(1), 71-100. Adverse selection — the positioning loss.
- **Brogaard, J., Hendershott, T., and Riordan, R.** (2014). "High-Frequency Trading and Price Discovery." *Review of Financial Studies*, 27(8), 2267-2306. HFTs and the efficiency of prices.
- **Menkveld, A. J.** (2016). "The Economics of High-Frequency Trading: Taking Stock." *Annual Review of Financial Economics*, 8, 1-24. A survey placing this paper in the wider HFT literature.`,
        id: `- **Menkveld, A. J.** (2013). "High Frequency Trading and the New Market Makers." *Journal of Financial Markets*, 16(4), 712-740. **(Item ini.)** Identifikasi HFT-tunggal, dua-venue; dekomposisi P&L €1.55 − €0.68 ≈ €0.88-per-trade; strategi market-making cross-market.
- **Hendershott, T., Jones, C. M., dan Menkveld, A. J.** (2011). "Does Algorithmic Trading Improve Liquidity?" *Journal of Finance*, 66(1), 1-33. Bukti pendamping bahwa algorithmic trading nyempitin spread.
- **Avellaneda, M. dan Stoikov, S.** (2008). "High-Frequency Trading in a Limit Order Book." *Quantitative Finance*, 8(3), 217-224. Model market-maker optimal yang paper ini potret secara empiris.
- **Glosten, L. dan Milgrom, P.** (1985). "Bid, Ask and Transaction Prices in a Specialist Market." *Journal of Financial Economics*, 14(1), 71-100. Adverse selection — rugi positioning.
- **Brogaard, J., Hendershott, T., dan Riordan, R.** (2014). "High-Frequency Trading and Price Discovery." *Review of Financial Studies*, 27(8), 2267-2306. HFT dan efisiensi harga.
- **Menkveld, A. J.** (2016). "The Economics of High-Frequency Trading: Taking Stock." *Annual Review of Financial Economics*, 8, 1-24. Survey yang naruh paper ini di literatur HFT lebih luas.`
      }
    },
  ],

  audio: { enabled: true },

  selfTest: [
    {
      sectionId: 'intuition',
      question: {
        en: 'Menkveld classifies the HFT as a market maker, not a directional trader. What three observed behaviours support that, and what is the one number that captures the market-making tradeoff?',
        id: 'Menkveld ngeklasifikasi HFT-nya sebagai market maker, bukan trader direksional. Tiga kelakuan teramati apa yang ngedukung itu, dan apa satu angka yang nangkep tradeoff market-making-nya?'
      },
      prompt: { en: 'Before continuing, try answering:', id: 'Sebelum lanjut, coba jawab:' },
      answer: {
        en: 'Three behaviours: (1) it provides liquidity two-sidedly with passive resting limit orders, earning the spread when filled (not crossing to take liquidity directionally); (2) its inventory is strongly mean-reverting — pushed off zero by incoming flow and rapidly returned to zero, flat by the close (it manages, not accumulates, risk); (3) it trades enormously, ~1,397 times per stock per day, the activity of a quoting engine. The one number is the gross profit decomposition: ≈ €1.55 on the spread minus ≈ €0.68 on positioning = ≈ €0.88 net per trade — earn the spread, pay adverse selection, keep a thin margin, which is exactly the Glosten-Milgrom / Avellaneda-Stoikov market-making tradeoff.',
        id: 'Tiga kelakuan: (1) dia nyediain liquidity dua-sisi dengan passive resting limit order, dapet spread pas di-fill (bukan nyebrang buat ngambil liquidity direksional); (2) inventory-nya kuat mean-reverting — kedorong lepas dari nol sama flow masuk dan cepet balik ke nol, flat di close (dia ngelola, bukan ngakumulasi, risiko); (3) dia trade besar, ~1.397 kali per saham per hari, aktivitas quoting engine. Satu angka-nya itu dekomposisi gross profit: ≈ €1.55 di spread dikurangin ≈ €0.68 di positioning = ≈ €0.88 bersih per trade — dapet spread, bayar adverse selection, simpen margin tipis, yang persis tradeoff market-making Glosten-Milgrom / Avellaneda-Stoikov.'
      }
    },
    {
      sectionId: 'formalization',
      question: {
        en: 'Why does the HFT provide most of its liquidity on the small entrant venue (Chi-X) but offload on the large incumbent (Euronext)?',
        id: 'Kenapa HFT-nya nyediain mayoritas liquidity-nya di venue entrant kecil (Chi-X) tapi ngeluarin di incumbent besar (Euronext)?'
      },
      prompt: { en: 'Before continuing, try answering:', id: 'Sebelum lanjut, coba jawab:' },
      answer: {
        en: 'A fee/depth division of labour. The entrant Chi-X has low fees, so capturing the spread by posting passive limit orders there is cheap and profitable — that is where the HFT earns, supplying the bulk of the liquidity (~64% trade participation; it essentially is the market there). The incumbent Euronext is deep, so when the HFT accumulates an unwanted position it can offload there with minimal price impact — that is where it flattens (only ~8% participation, one of many). Make markets where it is cheap to quote; unwind where it is cheap to trade. This symbiosis is how the new venue bootstrapped its liquidity: the HFT could profitably seed Chi-X only because Euronext\'s depth let it manage the resulting inventory cheaply — so HFTs are the connective tissue that makes venue competition under fragmentation viable.',
        id: 'Pembagian kerja fee/depth. Entrant Chi-X punya fee rendah, jadi nangkep spread dengan posting passive limit order di sana itu murah dan profitable — itu di mana HFT-nya dapet, nyuplai mayoritas liquidity (~64% trade participation; dia pada dasarnya adalah pasar di sana). Incumbent Euronext itu dalem, jadi pas HFT-nya ngakumulasi posisi yang gak diinginin dia bisa ngeluarin di sana dengan price impact minimal — itu di mana dia flatten (cuma ~8% partisipasi, satu dari banyak). Bikin pasar di mana murah buat quote; bongkar di mana murah buat trade. Simbiosis ini gimana venue baru-nya nge-bootstrap liquidity-nya: HFT-nya bisa profitable ngebenih Chi-X cuma karena depth Euronext ngebolehin dia ngelola inventory yang dihasilin dengan murah — jadi HFT itu jaringan penghubung yang bikin kompetisi venue di bawah fragmentasi viable.'
      }
    },
    {
      sectionId: 'applications',
      question: {
        en: 'How can this paper (HFT as beneficial market maker) and the latency-arbitrage papers (HFT as wasteful sniper) both be right?',
        id: 'Gimana paper ini (HFT sebagai market maker bermanfaat) dan paper latency-arbitrage (HFT sebagai sniper boros) bisa keduanya bener?'
      },
      prompt: { en: 'Before continuing, try answering:', id: 'Sebelum lanjut, coba jawab:' },
      answer: {
        en: 'They describe two different roles the same technology plays. In Menkveld the HFT is the market maker: it posts passive quotes, supplies liquidity, earns a thin competitive spread, manages inventory, and makes a fragmented market viable — beneficial. In the latency-arbitrage papers HFTs are the snipers: they race to pick off a maker\'s stale quote when a public signal moves, a wasteful speed race that taxes the maker (and ultimately investors) through wider spreads. Both are true simultaneously — the maker in Menkveld is exactly the party who gets sniped in those papers, and his measured "positioning loss" includes that adverse selection. So "is HFT good or bad?" is the wrong question; separate the liquidity-providing role (beneficial, thin-margin) from the stale-quote-sniping role (a deadweight race), since the same firms do both and policy should curb the latter without killing the former.',
        id: 'Mereka ngedeskripsiin dua peran berbeda yang teknologi yang sama main. Di Menkveld HFT-nya itu market maker: dia posting passive quote, nyuplai liquidity, dapet spread kompetitif tipis, kelola inventory, dan bikin pasar terfragmentasi viable — bermanfaat. Di paper latency-arbitrage HFT-nya itu sniper: mereka balapan buat metik quote stale maker pas sinyal publik gerak, race kecepatan boros yang majakin maker (dan akhirnya investor) lewat spread lebih lebar. Keduanya bener serentak — maker di Menkveld itu persis pihak yang disnipe di paper itu, dan "rugi positioning"-nya yang terukur termasuk adverse selection itu. Jadi "apakah HFT baik atau buruk?" itu pertanyaan yang salah; pisahin peran penyedia-liquidity (bermanfaat, margin-tipis) dari peran sniping-stale-quote (race deadweight), karena firma yang sama ngelakuin keduanya dan kebijakan harusnya ngekang yang belakangan tanpa ngebunuh yang depan.'
      }
    },
  ],
};
