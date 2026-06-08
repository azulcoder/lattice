export const CONTENT = {
  itemId: 'makarov-schoar-2020',
  estimatedReadMinutes: 35,

  author: {
    fullName: { en: 'Igor Makarov & Antoinette Schoar', id: 'Igor Makarov & Antoinette Schoar' },
    affiliation: {
      en: 'Makarov: Associate Professor of Finance, London School of Economics (Financial Markets Group). Schoar: Stewart C. Myers-Horn Family Professor of Finance, MIT Sloan School of Management; NBER, CEPR.',
      id: 'Makarov: Associate Professor of Finance, London School of Economics (Financial Markets Group). Schoar: Stewart C. Myers-Horn Family Professor of Finance, MIT Sloan School of Management; NBER, CEPR.'
    },
    tagline: {
      en: 'The law of one price, stress-tested by crypto — bitcoin is identical and transferable in minutes, yet its price diverged by up to 40% across countries because the binding constraint is moving fiat money, not bitcoin.',
      id: 'Hukum satu harga, di-stress-test sama crypto — bitcoin itu identik dan bisa dipindah dalam hitungan menit, tapi harganya beda sampai 40% antar negara karena yang ngebatasin itu mindahin uang fiat, bukan bitcoin.'
    },
    bio: {
      en: `Igor Makarov is a financial economist at the London School of Economics, where he has been an Associate Professor of Finance since 2013. Trained in the Russian mathematical-economics pipeline — a mathematics degree from Moscow State University and economics at the New Economic School in Moscow — he took his PhD in financial economics at MIT Sloan (2006), where Leonid Kogan supervised his thesis and Andrew Lo's work on market efficiency and hedge-fund econometrics shaped his early research. His work spans asset pricing, the limits of arbitrage, and information economics, and in recent years has turned decisively to the microstructure of cryptocurrency and decentralized finance. He is affiliated with the LSE Financial Markets Group and the NBER.

Antoinette Schoar is the Stewart C. Myers-Horn Family Professor of Finance at the MIT Sloan School of Management (she published this paper under her earlier Michael M. Koerner chair). She earned her PhD in economics at the University of Chicago (2000) after a diploma at the University of Cologne, and built her reputation in empirical corporate and entrepreneurial finance — most famously the "managerial style" person-fixed-effects approach (with Marianne Bertrand) and private-equity performance (with Steven Kaplan). She later moved into household finance, fintech, and crypto. She is Executive Editor of the Journal of Finance (the first woman to hold the post), a past President of the Society for Financial Studies, co-directs the NBER Corporate Finance Program, and won the 2003 Brattle Prize.

Their collaboration brought a rigorous empirical-asset-pricing lens to a market that, in 2017-2018, was widely dismissed as a speculative casino. Rather than ask whether crypto was a bubble, they asked a precise microstructure question — does the law of one price hold? — and turned the answer into a systematic, large-sample map of where, when, and why it breaks.`,
      id: `Igor Makarov itu ekonom finansial di London School of Economics, di mana dia udah jadi Associate Professor of Finance sejak 2013. Dilatih di jalur matematika-ekonomi Rusia — gelar matematika dari Moscow State University dan ekonomi di New Economic School di Moskow — dia ambil PhD financial economics di MIT Sloan (2006), di mana Leonid Kogan ngebimbing tesisnya dan kerja Andrew Lo soal market efficiency dan hedge-fund econometrics ngebentuk riset awalnya. Kerjanya ngeliputi asset pricing, limits of arbitrage, dan information economics, dan dalam tahun-tahun terakhir berbelok tegas ke microstructure cryptocurrency dan decentralized finance. Dia berafiliasi sama LSE Financial Markets Group dan NBER.

Antoinette Schoar itu Stewart C. Myers-Horn Family Professor of Finance di MIT Sloan School of Management (dia nerbitin paper ini di bawah chair Michael M. Koerner-nya yang lebih lama). Dia dapet PhD ekonomi di University of Chicago (2000) setelah diploma di University of Cologne, dan ngebangun reputasinya di empirical corporate dan entrepreneurial finance — paling terkenal pendekatan person-fixed-effects "managerial style" (sama Marianne Bertrand) dan private-equity performance (sama Steven Kaplan). Dia kemudian pindah ke household finance, fintech, dan crypto. Dia Executive Editor Journal of Finance (perempuan pertama yang megang posisi itu), mantan President Society for Financial Studies, co-direct NBER Corporate Finance Program, dan menang 2003 Brattle Prize.

Kolaborasi mereka ngebawa lensa empirical-asset-pricing yang rigorous ke pasar yang, di 2017-2018, banyak dipandang sebelah mata sebagai kasino spekulatif. Daripada nanya apakah crypto itu bubble, mereka nanya pertanyaan microstructure yang presisi — apakah hukum satu harga berlaku? — dan ngubah jawabannya jadi peta sistematis sampel-besar soal di mana, kapan, dan kenapa dia jebol.`
    },
    focus: {
      en: `What happens to the most basic no-arbitrage law in finance — the law of one price — in a market almost engineered to satisfy it? Bitcoin is perfectly fungible, transferable between any two exchanges in minutes, and traded around the clock on dozens of venues worldwide. If the law of one price holds anywhere, it should hold here. Makarov-Schoar assemble tick-level data on 34 exchanges across 19 countries (January 2017-February 2018) and show that it fails — spectacularly and persistently. Bitcoin traded up to 40% more expensively in Korea than in the US for days at a time, and more than 15% on average for two months. The deviations are an order of magnitude larger across countries than within a country, and the paper traces this to a single mechanism: arbitrage capital cannot cross borders freely. Moving bitcoin is trivial; moving the fiat money to complete the round-trip is not. The paper then decomposes order flow across exchanges into a common factor and exchange-specific components, showing that segmented, region-specific demand pressure drives both returns and the cross-market gaps.`,
      id: `Apa yang terjadi ke hukum no-arbitrage paling dasar di finance — hukum satu harga — di pasar yang nyaris di-rekayasa buat memenuhinya? Bitcoin itu fungible sempurna, bisa dipindah antara dua exchange mana pun dalam hitungan menit, dan ditradingin sepanjang waktu di puluhan venue sedunia. Kalau hukum satu harga berlaku di mana pun, dia harusnya berlaku di sini. Makarov-Schoar ngerakit data tick-level di 34 exchange di 19 negara (Januari 2017-Februari 2018) dan nunjukin dia gagal — spektakuler dan persisten. Bitcoin trade sampai 40% lebih mahal di Korea daripada di US berhari-hari, dan lebih dari 15% rata-rata selama dua bulan. Deviasinya satu orde lebih gede lintas negara daripada dalam satu negara, dan paper-nya nelusurin ini ke satu mekanisme: modal arbitrage gak bisa nyebrang perbatasan dengan bebas. Mindahin bitcoin itu sepele; mindahin uang fiat buat nyelesain round-trip-nya enggak. Paper-nya terus dekomposisi order flow lintas exchange jadi common factor dan komponen exchange-specific, nunjukin bahwa demand pressure yang tersegmentasi dan region-specific ndrive baik return maupun gap lintas-pasar.`
    },
    intellectualLineage: {
      en: `The paper sits squarely in the **limits-of-arbitrage** tradition. **Shleifer-Vishny (1997)** argued that real arbitrage is done by specialized, capital-constrained agents who can be forced to liquidate at the worst time, so price gaps need not close. **Gromb-Vayanos (2002)** formalized arbitrage between two segmented markets trading the same asset when arbitrageurs face wealth-dependent financial constraints — almost a literal model of an arbitrageur who must hold bitcoin in one country and dollars in another. Makarov-Schoar supply the clean empirical counterpart: crypto exchanges are segmented markets in a single, identical, transferable asset, and the friction is explicit and measurable (capital controls on fiat). The microstructure machinery — signed order flow, price impact, a common-factor decomposition of returns — descends from **Kyle (1985)** and the empirical-microstructure toolkit (**Hasbrouck**). Where classical limits-of-arbitrage examples (Royal Dutch/Shell, closed-end funds, on-the-run/off-the-run Treasuries) involved assets that were *similar* but not identical, bitcoin removes that ambiguity entirely — making this an unusually clean setting for studying the limits of arbitrage: the arbitraged asset is literally identical across venues, and the friction (capital controls on fiat) is explicit and measurable.`,
      id: `Paper-nya duduk persis di tradisi **limits-of-arbitrage**. **Shleifer-Vishny (1997)** ngeklaim bahwa arbitrage nyata dilakuin sama agen spesialis yang terbatas-modal yang bisa dipaksa likuidasi di waktu paling buruk, jadi gap harga gak harus nutup. **Gromb-Vayanos (2002)** ngeformalin arbitrage antara dua pasar tersegmentasi yang ngetrade aset sama pas arbitrageur kena financial constraint yang tergantung kekayaan — nyaris model harfiah dari arbitrageur yang harus pegang bitcoin di satu negara dan dolar di negara lain. Makarov-Schoar nyediain counterpart empiris yang bersih: exchange crypto itu pasar tersegmentasi di satu aset tunggal, identik, transferable, dan friksinya eksplisit dan terukur (capital controls di fiat). Mesin microstructure-nya — signed order flow, price impact, dekomposisi common-factor dari return — turun dari **Kyle (1985)** dan toolkit empirical-microstructure (**Hasbrouck**). Di mana contoh limits-of-arbitrage klasik (Royal Dutch/Shell, closed-end fund, Treasury on-the-run/off-the-run) ngelibatin aset yang *mirip* tapi gak identik, bitcoin ngilangin ambiguitas itu sepenuhnya — bikin ini setting yang luar biasa bersih buat ngestudi limits of arbitrage: aset yang di-arbitrage itu harfiah identik antar-venue, dan friksinya (capital controls di fiat) eksplisit dan terukur.`
    },
    keyCollaborators: {
      en: `**Each other**, plus their separate networks. Makarov's frequent coauthors include **Guillaume Plantin** (subprime lending, limits to arbitrage), **Mikhail Chernov and Alexander Gorbenko** (CDS auctions), and **Andrew Lo and Mila Getmansky** (hedge-fund return econometrics). Schoar's long-running collaborations include **Marianne Bertrand and David Thesmar** (managerial style, banking deregulation), **Josh Lerner** (private equity, angel investing), and **Steven Kaplan** (private-equity returns). The intellectual predecessors most directly invoked here are **Andrei Shleifer and Robert Vishny (1997)** and **Denis Gromb and Dimitri Vayanos (2002)** on the limits of arbitrage. A close contemporary in crypto microstructure is **John Griffin and Amin Shams (2020)** on the contested role of Tether in cross-exchange flows.`,
      id: `**Satu sama lain**, plus jaringan terpisah mereka. Coauthor sering Makarov termasuk **Guillaume Plantin** (subprime lending, limits to arbitrage), **Mikhail Chernov dan Alexander Gorbenko** (CDS auctions), dan **Andrew Lo dan Mila Getmansky** (hedge-fund return econometrics). Kolaborasi jangka-panjang Schoar termasuk **Marianne Bertrand dan David Thesmar** (managerial style, banking deregulation), **Josh Lerner** (private equity, angel investing), dan **Steven Kaplan** (private-equity returns). Predecessor intelektual yang paling langsung dipanggil di sini itu **Andrei Shleifer dan Robert Vishny (1997)** dan **Denis Gromb dan Dimitri Vayanos (2002)** soal limits of arbitrage. Kontemporer yang deket di crypto microstructure itu **John Griffin dan Amin Shams (2020)** soal peran Tether yang kontroversial di aliran lintas-exchange.`
    },
    legacy: {
      en: `Makarov-Schoar is the reference empirical study of crypto market integration. Its lasting contributions: (1) it established that the law of one price fails in crypto by large, persistent margins, refuting the naive view that a fungible, instantly-transferable asset must be priced identically everywhere; (2) it located the cause primarily in **segmentation of fiat capital**, not in any property of the blockchain — the decisive evidence being that cross-*cryptocurrency* arbitrage (e.g. ETH/BTC) stayed an order of magnitude smaller than cross-*fiat* arbitrage over the same period, because crypto-to-crypto trades never touch a banking border; and (3) it showed that order flow is largely a common factor (explaining roughly 80% of bitcoin returns) while the *idiosyncratic*, region-specific component drives the cross-exchange gaps. For anyone building crypto trading or market-making systems, this is the empirical foundation: it tells you that cross-venue price references are noisy, that "arbitrage" gaps are real but capital-constrained rather than free, and that regional demand pressure is a first-order driver of price. The "kimchi premium" entered the trading lexicon through this work.`,
      id: `Makarov-Schoar itu studi empiris rujukan soal integrasi pasar crypto. Kontribusi yang awet: (1) dia ngetetapin bahwa hukum satu harga gagal di crypto dengan margin yang gede dan persisten, ngebantah pandangan naif bahwa aset fungible yang bisa-dipindah-instan harus dihargai identik di mana-mana; (2) dia ngelacak penyebabnya terutama ke **segmentasi modal fiat**, bukan ke properti blockchain mana pun — bukti penentunya itu bahwa arbitrage lintas-*cryptocurrency* (misal ETH/BTC) tetep satu orde lebih kecil daripada arbitrage lintas-*fiat* sepanjang periode yang sama, karena trade crypto-ke-crypto gak pernah nyentuh perbatasan perbankan; dan (3) dia nunjukin bahwa order flow itu sebagian besar common factor (jelasin kira-kira 80% return bitcoin) sementara komponen *idiosinkratik*, region-specific, ndrive gap lintas-exchange. Buat siapa pun yang bangun sistem trading atau market-making crypto, ini fondasi empirisnya: dia ngasih tau kamu bahwa referensi harga lintas-venue itu berisik, bahwa gap "arbitrage" itu nyata tapi terbatas-modal daripada gratis, dan bahwa demand pressure regional itu pendorong harga first-order. "Kimchi premium" masuk leksikon trading lewat kerja ini.`
    },
    keyWorks: [
      { year: 2020, title: 'Trading and Arbitrage in Cryptocurrency Markets (this item)', venue: 'Journal of Financial Economics' },
      { year: 2003, title: 'Managing with Style: The Effect of Managers on Firm Policies (Bertrand & Schoar)', venue: 'Quarterly Journal of Economics' },
      { year: 2005, title: 'Private Equity Performance: Returns, Persistence, and Capital Flows (Kaplan & Schoar)', venue: 'Journal of Finance' },
      { year: 2013, title: 'CDS Auctions (Chernov, Gorbenko & Makarov)', venue: 'Review of Financial Studies' },
      { year: 2004, title: 'An Econometric Analysis of Serial Correlation and Illiquidity in Hedge-Fund Returns (Getmansky, Lo & Makarov)', venue: 'Journal of Financial Economics' },
    ],
  },

  sections: [
    // ─────────────── 1. motivation ───────────────
    {
      id: 'motivation',
      heading: { en: 'Why this matters', id: 'Kenapa ini penting' },
      body: {
        en: `The **law of one price** is the closest thing finance has to a law of physics: two claims to identical cash flows must trade at the same price, or a riskless arbitrage exists to force them together. It underlies almost every pricing model. But in real markets it is hard to test cleanly, because "identical" assets rarely are — Royal Dutch and Shell were twin shares with subtly different tax and governance, on-the-run and off-the-run Treasuries differ in liquidity, closed-end funds differ from their holdings. The gaps you observe are always contaminated by *something*.

Bitcoin removes the contamination. A bitcoin on Coinbase is **byte-for-byte identical** to a bitcoin on Bithumb. You can move it from one exchange to another in minutes for a trivial network fee, any hour of any day, with no custodian, no settlement cycle, no borrow. If the law of one price holds anywhere on earth, it should hold for bitcoin across exchanges — to the penny.

Makarov and Schoar (2020) checked. Using tick-level data on **34 exchanges across 19 countries** over January 2017-February 2018, they found the law of one price fails — not by basis points, but by **double-digit percentages, for weeks at a time**. Bitcoin in Korea traded at a daily-average premium of **more than 15%** over the US price for two months, **peaking near 40%** — the press called it the "kimchi premium." Japan ran about **10%** rich, Europe about **3%**.

How can a 40% gap in an identical, freely-movable asset survive for days? The answer is the heart of the paper, and it is not "nobody noticed." It is that **the arbitrage capital could not flow**. You can move bitcoin across the Korea-US border trivially; you cannot move the *won and dollars* needed to run the trade repeatedly, because of capital controls and crypto-wary banks. The binding constraint is on **fiat**, not on bitcoin.

This makes crypto in 2017-2018 a near-perfect natural experiment in the **limits of arbitrage** (Shleifer-Vishny; Gromb-Vayanos): segmented markets, an identical asset, and a friction you can actually measure. For anyone trading or making markets in crypto, it is also the foundational empirical map — it tells you that a price on one exchange is *not* the price everywhere, that cross-venue gaps are real but expensive to capture, and that where the money is trapped matters more than where the bitcoin is.`,
        id: `**Hukum satu harga** (law of one price) itu hal yang paling mirip hukum fisika di finance: dua klaim ke cash flow yang identik harus trade di harga yang sama, atau ada arbitrage riskless yang maksa mereka ketemu. Dia mendasari hampir tiap pricing model. Tapi di pasar nyata susah di-test bersih, karena aset "identik" jarang bener-bener identik — Royal Dutch dan Shell itu twin share dengan pajak dan governance yang beda tipis, Treasury on-the-run dan off-the-run beda likuiditas, closed-end fund beda dari holding-nya. Gap yang kamu amati selalu terkontaminasi *sesuatu*.

Bitcoin ngilangin kontaminasinya. Satu bitcoin di Coinbase **identik byte-per-byte** sama bitcoin di Bithumb. Kamu bisa mindahin dari satu exchange ke exchange lain dalam hitungan menit dengan network fee receh, jam berapa pun, hari apa pun, tanpa kustodian, tanpa settlement cycle, tanpa borrow. Kalau hukum satu harga berlaku di mana pun di bumi, dia harusnya berlaku buat bitcoin antar-exchange — sampai ke sen-nya.

Makarov dan Schoar (2020) ngecek. Pakai data tick-level di **34 exchange di 19 negara** sepanjang Januari 2017-Februari 2018, mereka nemu hukum satu harga gagal — bukan beberapa basis poin, tapi **persentase dua digit, berminggu-minggu**. Bitcoin di Korea trade di premium rata-rata harian **lebih dari 15%** di atas harga US selama dua bulan, **puncaknya nyaris 40%** — pers nyebut ini "kimchi premium". Jepang sekitar **10%** lebih mahal, Eropa sekitar **3%**.

Gimana gap 40% di aset yang identik dan bebas dipindah bisa bertahan berhari-hari? Jawabannya inti dari paper ini, dan dia bukan "gak ada yang nyadar". Dia karena **modal arbitrage-nya gak bisa ngalir**. Kamu bisa mindahin bitcoin lintas perbatasan Korea-US dengan gampang; kamu gak bisa mindahin *won dan dolar* yang dibutuhin buat ngejalanin trade-nya berulang-ulang, karena capital controls dan bank yang waswas sama crypto. Yang ngebatasin itu **fiat**, bukan bitcoin.

Ini bikin crypto di 2017-2018 jadi eksperimen alami yang nyaris sempurna soal **limits of arbitrage** (Shleifer-Vishny; Gromb-Vayanos): pasar tersegmentasi, aset identik, dan friksi yang beneran bisa diukur. Buat siapa pun yang trade atau bikin market di crypto, ini juga peta empiris fondasinya — dia ngasih tau kamu bahwa harga di satu exchange itu *bukan* harga di mana-mana, bahwa gap antar-venue itu nyata tapi mahal buat ditangkap, dan bahwa di mana uangnya keperangkap lebih penting daripada di mana bitcoin-nya.`
      }
    },

    // ─────────────── 2. intuition ───────────────
    {
      id: 'intuition',
      heading: { en: 'Intuition', id: 'Intuisi' },
      body: {
        en: `Picture the trade everyone "saw" in January 2018. Bitcoin is USD 10,000 on Coinbase in the US and the equivalent of USD 11,500 on Bithumb in Korea — a 15% gap. The recipe writes itself: buy a bitcoin in the US, send it to Korea (30 minutes, a few dollars of network fee), sell it for USD 11,500, pocket USD 1,500. Repeat. It looks like a money printer.

It is not, and seeing *why* is the whole point. After you sell on Bithumb, your USD 11,500 is sitting in a Korean bank account **denominated in won**. To actually bank the profit — and, more importantly, to do the trade *again* — you have to convert that won back to dollars and wire it out of Korea. That is exactly what Korean capital controls and the KYC limits its banks place on crypto-linked accounts make slow, capped, or impossible for an outside arbitrageur. Your "profit" is **stranded in won**. You haven't done a riskless arbitrage; you've made a one-way, capital-locked bet on the won/dollar rate, which is a completely different — and risky — trade.

So the only way to run the trade at scale is to **pre-position capital on both sides** — hold won in Korea *and* dollars in the US — and rebalance across the border as fast as the controls allow, which is not fast. The amount of arbitrage capital that can sit astride the border is *bounded*, so the gap is not competed away. That is Shleifer-Vishny and Gromb-Vayanos made concrete: arbitrage is done by constrained specialists, and when their capital is capped, prices can stay wrong for a long time.

The cleanest proof that the constraint is **fiat**, not bitcoin, is a within-crypto test. Over the same window when the US-Korea *dollar* price of bitcoin gapped by more than 20%, the **ETH/BTC** price (ether priced in bitcoin) differed across the same exchanges by only about **3%**. Trading ether for bitcoin never touches a bank or a border — so that arbitrage *does* get done, and the gap stays small. The fiat rail is the bottleneck.

Two more intuitions fall out. First, **direction**: bitcoin trades at a *premium* almost everywhere outside the US and Europe, essentially never a discount — capital wants *in* to these markets and can't get the proceeds out, so local demand pushes prices up. Second, **comovement**: the premia widen exactly when bitcoin rallies, and they widen most in the highest-premium countries — buying pressure is regional, and when it surges against trapped arbitrage capital, the local price runs away from the global one.`,
        id: `Bayangin trade yang semua orang "lihat" di Januari 2018. Bitcoin USD 10,000 di Coinbase di US dan setara USD 11,500 di Bithumb di Korea — gap 15%. Resepnya nulis sendiri: beli satu bitcoin di US, kirim ke Korea (30 menit, network fee beberapa dolar), jual USD 11,500, kantongin USD 1,500. Ulangi. Kelihatan kayak mesin cetak duit.

Bukan, dan ngeliat *kenapa* itu inti seluruhnya. Setelah kamu jual di Bithumb, USD 11,500-mu sekarang duduk di rekening bank Korea **dalam denominasi won**. Buat beneran ngebank profit-nya — dan, lebih penting, buat ngelakuin trade-nya *lagi* — kamu harus konversi won itu balik ke dolar dan wire keluar Korea. Itu persis yang dibikin lambat, dibatasi, atau mustahil sama capital controls Korea dan limit KYC yang ditaruh bank-nya di rekening terkait-crypto, buat arbitrageur luar. "Profit"-mu **keperangkap dalam won**. Kamu belum nyelesain arbitrage riskless; kamu udah bikin taruhan satu-arah, ter-lock-modal, di kurs won/dolar, yang itu trade yang sama sekali beda — dan berisiko.

Jadi satu-satunya cara ngejalanin trade-nya in scale itu **pre-position modal di dua sisi** — pegang won di Korea *dan* dolar di US — dan rebalance lintas perbatasan secepat yang controls izinin, yang gak cepet. Jumlah modal arbitrage yang bisa duduk ngangkangin perbatasan itu *terbatas*, jadi gap-nya gak ke-compete habis. Itu Shleifer-Vishny dan Gromb-Vayanos jadi konkret: arbitrage dilakuin sama spesialis yang terbatas, dan pas modal mereka dibatasi, harga bisa tetep salah lama.

Bukti paling bersih bahwa yang ngebatasin itu **fiat**, bukan bitcoin, itu tes dalam-crypto. Sepanjang window yang sama pas harga *dolar* US-Korea bitcoin gap lebih dari 20%, harga **ETH/BTC** (ether dihargai dalam bitcoin) beda antar-exchange yang sama cuma sekitar **3%**. Nuker ether ke bitcoin gak pernah nyentuh bank atau perbatasan — jadi arbitrage itu *kejalan*, dan gap-nya tetep kecil. Rel fiat-nya itu bottleneck-nya.

Dua intuisi lagi jatuh keluar. Pertama, **arah**: bitcoin trade di *premium* hampir di mana-mana di luar US dan Eropa, praktis gak pernah diskon — modal pengen *masuk* ke pasar-pasar ini dan gak bisa ngeluarin hasilnya, jadi demand lokal ndorong harga naik. Kedua, **komovement**: premium-nya melebar persis pas bitcoin reli, dan melebar paling banyak di negara premium tertinggi — buying pressure itu regional, dan pas dia melonjak lawan modal arbitrage yang keperangkap, harga lokal lari dari harga global.`
      }
    },

    // ─────────────── 3. formalization ───────────────
    {
      id: 'formalization',
      heading: { en: 'The mechanism, formalized', id: 'Mekanismenya, diformalkan' },
      body: {
        en: `**Setup.** Let $p_{i,t}$ be the log price of bitcoin on exchange $i$ at time $t$, expressed in a common currency (convert local fiat to USD at the spot FX rate). The **law of one price** says all $p_{i,t}$ should be equal up to tiny, fleeting transaction-cost bands. Define the **arbitrage spread** between two venues as $s_{ij,t} = p_{i,t} - p_{j,t}$.

**Finding 1 — segmentation.** Within a country (same fiat currency), $|s_{ij,t}|$ is small: average within-country deviations do not exceed about **1%**. Across countries the spreads are an order of magnitude larger and **persistent** — hours, days, even weeks — with a daily-average Korea-US spread above 15% (peak ~40%), Japan-US ~10%, Europe-US ~3%. High-frequency cross-exchange return correlation is only about **57%** at 5-minute horizons (rising to ~83% hourly, ~95% daily); that low short-horizon correlation *is* the price-deviation signal.

**Finding 2 — order-flow decomposition.** For each exchange, define **signed volume** (order-flow imbalance) $V_{i,t}$ as buy-initiated minus sell-initiated volume. Decompose it into a common factor and an idiosyncratic part:

$$V_{i,t} = \\beta_i\\,F_t + u_{i,t},$$

where $F_t$ is the common order-flow factor and $u_{i,t}$ is exchange-specific. The common component of signed volume explains roughly **50%** of return variation at 5-minute and hourly frequencies, and up to **85%** at the daily horizon. The common component of *returns* explains about **80%** of each exchange's return at 5-minute, **90%** hourly, **96%** daily — bitcoin moves together everywhere, slowly.

**Finding 3 — price impact (Kyle's $\\lambda$ for crypto).** Regress returns on net signed volume. A net buy of **10,000 BTC** raises the price by about **9%** over 5 minutes, **6%** hourly, and **3.6%** contemporaneously (about 3% total after lags) daily — and most of the daily impact is *permanent*. Regressing the common return on the common signed volume gives a tight fit — coefficient $\\approx 8.8\\times10^{-6}$, $t \\approx 80$, $R^2 \\approx 0.54$ — at 5-minute frequency. Order flow moves price, exactly as Kyle predicts.

**Finding 4 — the mechanism.** The *idiosyncratic* order flow $u_{i,t}$ — region-specific buying pressure — is what drives the cross-exchange spreads. When a segmented market sees a local buying surge and arbitrage capital is capped by capital controls, the local price rises **above** the global price and the premium $\\pi_c$ widens. Makarov-Schoar confirm the channel directly: regressing the correlation of two countries' arbitrage spreads on a **capital-control index** (Fernández et al. 2015) gives a significantly positive slope of about **0.29** — two countries that both restrict capital flows have arbitrage spreads that move together. Higher-premium countries also have a higher "bitcoin beta": their spreads widen *more* when bitcoin rallies.`,
        id: `**Setup.** Misal $p_{i,t}$ itu log harga bitcoin di exchange $i$ di waktu $t$, dinyatakan dalam mata uang sama (konversi fiat lokal ke USD di kurs spot). **Hukum satu harga** bilang semua $p_{i,t}$ harusnya sama up to band transaction-cost yang kecil dan sekejap. Definisiin **arbitrage spread** antar dua venue sebagai $s_{ij,t} = p_{i,t} - p_{j,t}$.

**Temuan 1 — segmentasi.** Dalam satu negara (mata uang fiat sama), $|s_{ij,t}|$ kecil: deviasi dalam-negeri rata-rata gak lebih dari sekitar **1%**. Lintas negara spread-nya satu orde lebih gede dan **persisten** — berjam-jam, berhari-hari, bahkan berminggu-minggu — dengan spread rata-rata harian Korea-US di atas 15% (puncak ~40%), Jepang-US ~10%, Eropa-US ~3%. Korelasi return antar-exchange frekuensi-tinggi cuma sekitar **57%** di horizon 5-menit (naik ke ~83% per-jam, ~95% harian); korelasi jangka-pendek yang rendah itu *justru* sinyal deviasi harga.

**Temuan 2 — dekomposisi order-flow.** Buat tiap exchange, definisiin **signed volume** (order-flow imbalance) $V_{i,t}$ sebagai volume buy-initiated dikurang sell-initiated. Dekomposisi jadi common factor dan bagian idiosinkratik:

$$V_{i,t} = \\beta_i\\,F_t + u_{i,t},$$

di mana $F_t$ itu common order-flow factor dan $u_{i,t}$ exchange-specific. Common component dari signed volume jelasin kira-kira **50%** variasi return di frekuensi 5-menit dan per-jam, dan sampai **85%** di horizon harian. Common component dari *return* jelasin sekitar **80%** return tiap exchange di 5-menit, **90%** per-jam, **96%** harian — bitcoin gerak bareng di mana-mana, pelan.

**Temuan 3 — price impact (Kyle's $\\lambda$ buat crypto).** Regresi return ke net signed volume. Net buy **10,000 BTC** naikin harga sekitar **9%** dalam 5 menit, **6%** per-jam, dan **3.6%** kontemporer (sekitar 3% total setelah lag) harian — dan sebagian besar impact harian itu *permanen*. Regresi common return ke common signed volume ngasih fit yang ketat — koefisien $\\approx 8.8\\times10^{-6}$, $t \\approx 80$, $R^2 \\approx 0.54$ — di frekuensi 5-menit. Order flow gerakin harga, persis kayak Kyle prediksi.

**Temuan 4 — mekanismenya.** Order flow *idiosinkratik* $u_{i,t}$ — buying pressure region-specific — itu yang ndrive cross-exchange spread. Pas pasar tersegmentasi liat lonjakan beli lokal dan modal arbitrage dibatasi capital controls, harga lokal naik **di atas** harga global dan premium $\\pi_c$ melebar. Makarov-Schoar konfirmasi channel-nya langsung: regresi korelasi arbitrage spread dua negara ke **capital-control index** (Fernández et al. 2015) ngasih slope positif signifikan sekitar **0.29** — dua negara yang sama-sama batasin aliran modal punya arbitrage spread yang gerak bareng. Negara premium-lebih-tinggi juga punya "bitcoin beta" lebih tinggi: spread mereka melebar *lebih* pas bitcoin reli.`
      }
    },

    // ─────────────── 4. worked-example ───────────────
    {
      id: 'worked-example',
      heading: { en: 'Worked example', id: 'Contoh kerjaan' },
      body: {
        en: `**The kimchi-premium trade that isn't free money.** (Numbers illustrative, calibrated to the paper's January 2018 figures.)

**The setup.** On a US exchange, bitcoin trades at USD 10,000. On a Korean exchange, it trades at ₩12,650,000. At an exchange rate of ₩1,100 per US dollar, that Korean price converts to USD 11,500 — a **15% premium**, right in the range Makarov-Schoar document for that period (peaks hit about 40%).

**The naive P&L.** The arbitrage looks trivial and riskless:

- **Buy** 1 BTC on the US exchange: −USD 10,000.
- **Transfer** the BTC to the Korean exchange: ~30 minutes, network fee ≈ 0.0005 BTC ≈ −USD 5.
- **Sell** the 1 BTC on the Korean exchange for ₩12,650,000 ≈ +USD 11,500.
- **Fees**, ~0.1-0.25% per side: ≈ −USD 35.

Net: about **+USD 1,460 per bitcoin, a ~14.6% return, apparently in under an hour with no price risk** (you were long bitcoin only for the ~30-minute transfer). Do it with 100 BTC and you have made ~USD 146,000 before lunch. So why didn't every trading desk on earth do exactly this until the gap vanished?

**The catch.** Your USD 11,500 of proceeds is now **₩12,650,000 sitting in a Korean bank account**. To realize the dollar profit — and, crucially, to *recycle the capital* and do the trade again — you must convert the won back to dollars and move it out of Korea. That is precisely what Korea's capital controls and the KYC limits its banks place on crypto-linked accounts make slow, capped, or, for a foreign arbitrageur, effectively impossible. Your "riskless profit" is **stranded in won**. You have not completed a round-trip arbitrage; you have made a leveraged, one-way bet on the won/dollar rate — a completely different, and risky, trade.

**What it actually takes.** To run the strategy at scale you must **pre-fund both legs**: keep a dollar balance in the US *and* a won balance in Korea, sell from the Korean inventory while buying in the US, then slowly rebalance across the border within whatever the controls permit. The total arbitrage capital that can straddle the border is **bounded**, so the gap is not competed to zero. This is why Makarov-Schoar estimate enormous *potential* profits — more than **USD 75 million a day** at the peak, and a **minimum of about USD 2 billion** over December 2017-February 2018 — that were mostly *unrealizable* by any single arbitrageur: the money to harvest them could not move fast enough.

**The clincher.** If the friction were really about bitcoin, you would see the same gaps between *cryptocurrencies*. You do not. Over the same window when the US-Korea bitcoin gap exceeded 20%, the ETH/BTC price differed across those exchanges by only about **3%** — because swapping ether for bitcoin never crosses a banking border. The bottleneck is the **fiat rail**, exactly as the law-of-one-price-fails-on-segmented-capital story predicts.`,
        id: `**Trade kimchi-premium yang bukan duit gratis.** (Angka ilustratif, dikalibrasi ke figur Januari 2018 paper-nya.)

**Setup-nya.** Di exchange US, bitcoin trade di USD 10,000. Di exchange Korea, dia trade di ₩12,650,000. Di kurs ₩1,100 per dolar US, harga Korea itu konversi ke USD 11,500 — premium **15%**, pas di range yang Makarov-Schoar dokumentasiin buat periode itu (puncak nyentuh sekitar 40%).

**P&L naif-nya.** Arbitrage-nya kelihatan sepele dan riskless:

- **Beli** 1 BTC di exchange US: −USD 10,000.
- **Transfer** BTC-nya ke exchange Korea: ~30 menit, network fee ≈ 0.0005 BTC ≈ −USD 5.
- **Jual** 1 BTC di exchange Korea seharga ₩12,650,000 ≈ +USD 11,500.
- **Fee**, ~0.1-0.25% per sisi: ≈ −USD 35.

Net: sekitar **+USD 1,460 per bitcoin, return ~14.6%, kelihatannya dalam waktu kurang dari sejam tanpa price risk** (kamu long bitcoin cuma buat transfer ~30-menit). Lakuin dengan 100 BTC dan kamu udah bikin ~USD 146,000 sebelum makan siang. Jadi kenapa gak tiap trading desk di bumi ngelakuin persis ini sampai gap-nya ilang?

**Catch-nya.** Hasil USD 11,500-mu sekarang **₩12,650,000 duduk di rekening bank Korea**. Buat ngerealisasiin profit dolar-nya — dan, krusial, buat *daur-ulang modalnya* dan ngelakuin trade-nya lagi — kamu harus konversi won itu balik ke dolar dan mindahin keluar Korea. Itu persis yang dibikin lambat, dibatasi, atau, buat arbitrageur asing, praktis mustahil sama capital controls Korea dan limit KYC yang bank-nya taruh di rekening terkait-crypto. "Profit riskless"-mu **keperangkap dalam won**. Kamu belum nyelesain arbitrage round-trip; kamu udah bikin taruhan satu-arah ber-leverage di kurs won/dolar — trade yang sama sekali beda, dan berisiko.

**Apa yang sebenernya dibutuhin.** Buat ngejalanin strategi-nya in scale kamu harus **pre-fund dua leg**: pegang saldo dolar di US *dan* saldo won di Korea, jual dari inventory Korea sambil beli di US, terus pelan-pelan rebalance lintas perbatasan dalam batas yang controls izinin. Total modal arbitrage yang bisa ngangkangin perbatasan itu **terbatas**, jadi gap-nya gak ke-compete jadi nol. Ini kenapa Makarov-Schoar estimasi *potensi* profit yang gede banget — lebih dari **USD 75 juta sehari** di puncak, dan **minimum sekitar USD 2 miliar** sepanjang Desember 2017-Februari 2018 — yang sebagian besar *gak bisa direalisasiin* sama arbitrageur tunggal mana pun: duit buat manen mereka gak bisa gerak cukup cepet.

**Penentunya.** Kalau friksinya beneran soal bitcoin, kamu bakal liat gap yang sama antar *cryptocurrency*. Enggak. Sepanjang window yang sama pas gap bitcoin US-Korea ngelewatin 20%, harga ETH/BTC beda antar exchange-exchange itu cuma sekitar **3%** — karena nuker ether ke bitcoin gak pernah nyebrang perbatasan perbankan. Bottleneck-nya itu **rel fiat**, persis kayak cerita hukum-satu-harga-gagal-di-modal-tersegmentasi prediksiin.`
      }
    },

    // ─────────────── 5. applications ───────────────
    {
      id: 'applications',
      heading: { en: 'Applications', id: 'Aplikasi' },
      body: {
        en: `For anyone trading or making markets in crypto, Makarov-Schoar is the empirical map of how *not* to think about cross-venue prices.

**There is no single "price of bitcoin."** At the 5-minute horizon, average cross-exchange return correlation is only about 57% — prices on different venues genuinely diverge intraday and reconverge slowly. A market maker who prices off one global reference (or a naive volume-weighted average across venues) will be systematically mis-marked against the venue they actually trade on, especially across currency zones. Mark to *your* venue, and treat any "global mid" as a noisy aggregate.

**Cross-venue gaps are real but not free.** The persistent premia are genuine, but capturing them requires pre-positioned capital on both sides of a border, exposure to the local currency, and the ability to move fiat through capital controls — a capital-intensive, currency-risky, operationally hard trade, not a riskless arbitrage. Size your "arbitrage" book by the capital you can actually keep on each leg and rebalance, not by the headline spread.

**Regional demand is a first-order signal.** Because idiosyncratic, region-specific order flow drives the deviations, a widening local premium is information: it signals buying pressure that arbitrage capital cannot offset. Desks watch premia (the kimchi premium, the Coinbase premium) as regime indicators for local demand and for fiat on-ramp stress.

**The fiat rail is the system.** What integrates or fragments crypto markets is the banking and capital-control plumbing, not the blockchain. Stablecoins (e.g. Tether) exist in part as a *crypto-native* settlement rail that routes around slow fiat banking — which is also why cross-exchange stablecoin flows became their own area of study (Griffin-Shams 2020).

**The risk, stated plainly:** the single most expensive mistake this paper guards against is booking a cross-exchange premium as locked-in P&L. Until the fiat is converted and repatriated, it is an open, currency-exposed position. Many 2017-2018 "arbitrage" desks discovered this when premia collapsed while their capital was still trapped in local currency.`,
        id: `Buat siapa pun yang trade atau bikin market di crypto, Makarov-Schoar itu peta empiris gimana *nggak* mikirin harga lintas-venue.

**Gak ada satu "harga bitcoin".** Di horizon 5-menit, korelasi return antar-exchange rata-rata cuma sekitar 57% — harga di venue beda beneran divergen intraday dan rekonvergen pelan. Market maker yang pricing dari satu referensi global (atau volume-weighted average naif lintas venue) bakal sistematis salah-mark lawan venue yang mereka beneran trade-in, apalagi lintas zona mata uang. Mark ke venue-*mu*, dan perlakuin "global mid" mana pun sebagai agregat berisik.

**Gap lintas-venue itu nyata tapi gak gratis.** Premium persisten itu beneran, tapi nangkepnya butuh modal yang udah di-pre-position di dua sisi perbatasan, exposure ke mata uang lokal, dan kemampuan mindahin fiat lewat capital controls — trade yang padat-modal, berisiko-mata-uang, susah secara operasional, bukan arbitrage riskless. Ukur "arbitrage" book-mu berdasarkan modal yang beneran bisa kamu pegang di tiap leg dan rebalance, bukan berdasarkan spread headline.

**Demand regional itu sinyal first-order.** Karena order flow idiosinkratik region-specific yang ndrive deviasi, premium lokal yang melebar itu informasi: dia nyinyalin buying pressure yang modal arbitrage gak bisa offset. Desk mantau premium (kimchi premium, Coinbase premium) sebagai indikator regime buat demand lokal dan buat stress fiat on-ramp.

**Rel fiat itu sistemnya.** Yang nge-integrasi atau nge-fragment pasar crypto itu pipa perbankan dan capital-control, bukan blockchain-nya. Stablecoin (misal Tether) ada sebagian sebagai rel settlement *crypto-native* yang muter ngehindarin perbankan fiat yang lambat — yang juga kenapa aliran stablecoin lintas-exchange jadi area studi sendiri (Griffin-Shams 2020).

**Risikonya, terus terang:** kesalahan paling mahal yang paper ini jaga itu nge-book premium lintas-exchange sebagai P&L yang udah terkunci. Sampai fiat-nya dikonversi dan dipulangin, dia posisi terbuka yang ter-expose mata uang. Banyak desk "arbitrage" 2017-2018 nyadar ini pas premium-nya kolaps sementara modal mereka masih keperangkap di mata uang lokal.`
      }
    },

    // ─────────────── 6. practice ───────────────
    {
      id: 'practice',
      heading: { en: 'Practice', id: 'Latihan' },
      body: {
        en: `**1.** Bitcoin is USD 30,000 on a US exchange and the won-equivalent of USD 34,500 on a Korean exchange — a 15% gap. A trader buys in the US, transfers the coin, and sells in Korea. Explain why this is *not* a riskless arbitrage, and what the trader actually ends up holding.

<details><summary>Answer</summary>
The sale leaves the proceeds denominated in **won, inside Korea**. To bank the dollar profit and repeat the trade, the trader must convert won to dollars and move it out of the country — exactly what capital controls and crypto-wary Korean banks block. So the position is not a closed round-trip; the trader is left **long won (and short dollars)**, a one-way currency bet whose payoff depends on the won/dollar rate, not a riskless arbitrage. The trade can only be scaled by pre-positioning capital on both sides, and that capital is bounded.
</details>

**2.** Over the same period that the US-Korea *dollar* price of bitcoin gapped by more than 20%, the ETH/BTC price differed across those exchanges by only ~3%. Why is this the single most important piece of evidence in the paper?

<details><summary>Answer</summary>
It isolates the cause. If the friction were about moving *bitcoin* (network congestion, withdrawal limits, blockchain risk), cross-cryptocurrency arbitrage would gap just as much. It doesn't — because trading ether for bitcoin on an exchange never touches a bank or a national border, so that arbitrage *does* get done. The large gap is specifically in the leg that requires moving **fiat money** across borders. This is the paper's sharpest evidence that the binding constraint is **capital controls on fiat**, not any property of crypto.
</details>

**3.** Makarov-Schoar decompose each exchange's signed order flow into a common factor and an idiosyncratic component. Which component drives bitcoin's *returns*, and which drives the *cross-exchange price gaps*? Why does that split make economic sense?

<details><summary>Answer</summary>
The **common** component drives returns: bitcoin is one global asset, so a worldwide wave of buying or selling moves its price everywhere together — the common signed-volume factor explains roughly half of return variation intraday and up to ~85% daily, and the common return component explains ~80-96% of each exchange's return. The **idiosyncratic**, region-specific component drives the gaps: when one segmented market has local buying pressure that arbitrage capital cannot offset, *that* exchange's price rises relative to the others, opening an arbitrage spread. Returns are global; deviations are local.
</details>

**4.** Within a single country, bitcoin prices across exchanges rarely differ by more than ~1%, but across countries they differed by 15-40%. Using the limits-of-arbitrage framework, explain the contrast.

<details><summary>Answer</summary>
Within a country, arbitrageurs share one banking system and one currency, so capital flows freely between exchanges and any gap closes almost immediately — the law of one price essentially holds (under ~1%). Across countries, completing the arbitrage requires moving fiat across a border subject to capital controls, so the pool of capital that can act is small and slow (Shleifer-Vishny: arbitrage is done by constrained specialists; Gromb-Vayanos: arbitrage between segmented markets is bounded by arbitrageur wealth). With arbitrage capital capped, cross-country gaps can grow large and persist for weeks. The difference between the two cases is *entirely* the cost and feasibility of moving the money, not the bitcoin.
</details>`,
        id: `**1.** Bitcoin USD 30,000 di exchange US dan setara won USD 34,500 di exchange Korea — gap 15%. Trader beli di US, transfer koin-nya, dan jual di Korea. Jelasin kenapa ini *bukan* arbitrage riskless, dan apa yang sebenernya trader-nya pegang di akhir.

<details><summary>Jawaban</summary>
Penjualannya ninggalin hasil dalam denominasi **won, di dalam Korea**. Buat ngebank profit dolar dan ngulang trade-nya, trader harus konversi won ke dolar dan mindahin keluar negara — persis yang capital controls dan bank Korea yang waswas-crypto blokir. Jadi posisinya bukan round-trip yang ketutup; trader-nya ketinggalan **long won (dan short dolar)**, taruhan mata uang satu-arah yang payoff-nya tergantung kurs won/dolar, bukan arbitrage riskless. Trade-nya cuma bisa di-scale dengan pre-position modal di dua sisi, dan modal itu terbatas.
</details>

**2.** Sepanjang periode yang sama pas harga *dolar* US-Korea bitcoin gap lebih dari 20%, harga ETH/BTC beda antar exchange-exchange itu cuma ~3%. Kenapa ini potongan bukti paling penting di paper-nya?

<details><summary>Jawaban</summary>
Dia ngisolasi penyebabnya. Kalau friksinya soal mindahin *bitcoin* (kongesti jaringan, limit withdrawal, risiko blockchain), arbitrage lintas-cryptocurrency bakal gap segede itu juga. Enggak — karena nuker ether ke bitcoin di exchange gak pernah nyentuh bank atau perbatasan nasional, jadi arbitrage itu *kejalan*. Gap gede-nya spesifik di leg yang butuh mindahin **uang fiat** lintas perbatasan. Ini bukti paling tajam dari paper-nya bahwa yang ngebatasin itu **capital controls di fiat**, bukan properti crypto mana pun.
</details>

**3.** Makarov-Schoar dekomposisi signed order flow tiap exchange jadi common factor dan komponen idiosinkratik. Komponen mana yang ndrive *return* bitcoin, dan mana yang ndrive *gap harga lintas-exchange*? Kenapa split itu masuk akal secara ekonomi?

<details><summary>Jawaban</summary>
Komponen **common** ndrive return: bitcoin itu satu aset global, jadi gelombang beli atau jual sedunia gerakin harganya di mana-mana bareng — common signed-volume factor jelasin kira-kira separuh variasi return intraday dan sampai ~85% harian, dan common return component jelasin ~80-96% return tiap exchange. Komponen **idiosinkratik**, region-specific, ndrive gap-nya: pas satu pasar tersegmentasi punya buying pressure lokal yang modal arbitrage gak bisa offset, harga *exchange itu* naik relatif ke yang lain, ngebuka arbitrage spread. Return itu global; deviasi itu lokal.
</details>

**4.** Dalam satu negara, harga bitcoin antar-exchange jarang beda lebih dari ~1%, tapi lintas negara mereka beda 15-40%. Pakai framework limits-of-arbitrage, jelasin kontras-nya.

<details><summary>Jawaban</summary>
Dalam satu negara, arbitrageur berbagi satu sistem perbankan dan satu mata uang, jadi modal ngalir bebas antar-exchange dan gap apa pun ketutup hampir langsung — hukum satu harga praktis berlaku (di bawah ~1%). Lintas negara, nyelesain arbitrage-nya butuh mindahin fiat lintas perbatasan yang kena capital controls, jadi pool modal yang bisa bertindak itu kecil dan lambat (Shleifer-Vishny: arbitrage dilakuin spesialis yang terbatas; Gromb-Vayanos: arbitrage antar pasar tersegmentasi dibatasi kekayaan arbitrageur). Dengan modal arbitrage dibatasi, gap lintas-negara bisa jadi gede dan bertahan berminggu-minggu. Beda antara dua kasus itu *sepenuhnya* biaya dan kelayakan mindahin uangnya, bukan bitcoin-nya.
</details>`
      }
    },

    // ─────────────── 7. connections ───────────────
    {
      id: 'connections',
      heading: { en: 'Connections', id: 'Koneksi' },
      body: {
        en: `- **Prereqs**: [Kyle 1985](item:kyle-1985) supplies the price-impact $\\lambda$ — moving size across venues costs money, which is half of why the gaps are not free. [Hasbrouck 2007](item:hasbrouck-2007) provides the empirical microstructure toolkit (trade signing, price-discovery decomposition) the paper builds on.
- **Order flow**: [Cont-Kukanov-Stoikov 2014](item:cont-kukanov-stoikov-2014) is the OFI lens — Makarov-Schoar's signed-volume decomposition is the cross-exchange analogue, and OFI is exactly the signal an arbitrageur watches to time each leg.
- **Execution**: [Almgren-Chriss 2000](item:almgren-chriss-2000) — each arbitrage leg is itself an execution problem; the impact and timing cost of unwinding size eats into the apparent spread.
- **Builds toward**: [Aquilina-Budish-O'Neill 2022](item:aquilina-budish-oneill-2022) on latency/sniping arbitrage — the *within-venue* speed race, complementary to the *cross-venue, capital-constrained* arbitrage here — and the broader limits-of-arbitrage theory (Shleifer-Vishny 1997, Gromb-Vayanos 2002). A close crypto companion is Griffin-Shams (2020) on cross-exchange Tether flows.`,
        id: `- **Prereqs**: [Kyle 1985](item:kyle-1985) nyediain price-impact $\\lambda$ — mindahin size lintas venue itu makan biaya, yang separuh dari kenapa gap-nya gak gratis. [Hasbrouck 2007](item:hasbrouck-2007) nyediain toolkit microstructure empiris (trade signing, dekomposisi price-discovery) yang paper-nya bangun di atasnya.
- **Order flow**: [Cont-Kukanov-Stoikov 2014](item:cont-kukanov-stoikov-2014) itu lensa OFI — dekomposisi signed-volume Makarov-Schoar itu analog lintas-exchange-nya, dan OFI persis sinyal yang arbitrageur pantau buat nge-time tiap leg.
- **Eksekusi**: [Almgren-Chriss 2000](item:almgren-chriss-2000) — tiap arbitrage leg itu sendiri masalah eksekusi; biaya impact dan timing dari nge-unwind size makan spread yang kelihatan.
- **Builds toward**: [Aquilina-Budish-O'Neill 2022](item:aquilina-budish-oneill-2022) soal latency/sniping arbitrage — balapan kecepatan *dalam-venue*, komplementer ke arbitrage *lintas-venue, terbatas-modal* di sini — dan teori limits-of-arbitrage yang lebih luas (Shleifer-Vishny 1997, Gromb-Vayanos 2002). Companion crypto yang deket itu Griffin-Shams (2020) soal aliran Tether lintas-exchange.`
      }
    },

    // ─────────────── 8. sources ───────────────
    {
      id: 'sources',
      heading: { en: 'Sources', id: 'Sumber' },
      body: {
        en: `- **Makarov, I., and Schoar, A.** (2020). "Trading and Arbitrage in Cryptocurrency Markets." *Journal of Financial Economics*, 135(2), 293-319. The study mapping persistent cross-exchange/cross-country crypto price gaps. **(This item.)**
- **Shleifer, A., and Vishny, R. W.** (1997). "The Limits of Arbitrage." *The Journal of Finance*, 52(1), 35-55. Why specialized, capital-constrained arbitrageurs cannot always close price gaps — the theoretical lens for persistent deviations.
- **Gromb, D., and Vayanos, D.** (2002). "Equilibrium and Welfare in Markets with Financially Constrained Arbitrageurs." *Journal of Financial Economics*, 66(2-3), 361-407. A formal model of arbitrage between segmented markets when arbitrageurs face wealth constraints — the mechanism Makarov-Schoar measure.
- **Kyle, A. S.** (1985). "Continuous Auctions and Insider Trading." *Econometrica*, 53(6), 1315-1335. The price-impact $\\lambda$ that makes moving size across venues costly, not free.
- **Griffin, J. M., and Shams, A.** (2020). "Is Bitcoin Really Untethered?" *The Journal of Finance*, 75(4), 1913-1964. A crypto-microstructure companion that argued cross-exchange Tether flows acted as a price-manipulation channel — an influential but contested finding (disputed by Tether/Bitfinex).`,
        id: `- **Makarov, I., dan Schoar, A.** (2020). "Trading and Arbitrage in Cryptocurrency Markets." *Journal of Financial Economics*, 135(2), 293-319. Studi yang memetakan gap harga crypto lintas-exchange/lintas-negara yang persisten. **(Item ini.)**
- **Shleifer, A., dan Vishny, R. W.** (1997). "The Limits of Arbitrage." *The Journal of Finance*, 52(1), 35-55. Kenapa arbitrageur spesialis yang terbatas-modal gak selalu bisa nutup gap harga — lensa teoritis buat deviasi persisten.
- **Gromb, D., dan Vayanos, D.** (2002). "Equilibrium and Welfare in Markets with Financially Constrained Arbitrageurs." *Journal of Financial Economics*, 66(2-3), 361-407. Model formal arbitrage antar pasar tersegmentasi pas arbitrageur kena financial constraint — mekanisme yang Makarov-Schoar ukur.
- **Kyle, A. S.** (1985). "Continuous Auctions and Insider Trading." *Econometrica*, 53(6), 1315-1335. Price-impact $\\lambda$ yang bikin mindahin size lintas venue itu mahal, bukan gratis.
- **Griffin, J. M., dan Shams, A.** (2020). "Is Bitcoin Really Untethered?" *The Journal of Finance*, 75(4), 1913-1964. Companion crypto-microstructure yang ngeklaim aliran Tether lintas-exchange bertindak sebagai channel manipulasi harga — temuan yang berpengaruh tapi kontroversial (dibantah Tether/Bitfinex).`
      }
    },
  ],

  audio: { enabled: true },

  selfTest: [
    {
      sectionId: 'intuition',
      question: {
        en: 'Bitcoin is identical across exchanges and transferable in minutes, yet the Korea-US price gap reached ~40% and lasted for weeks. Why was it not arbitraged away almost instantly?',
        id: 'Bitcoin identik antar-exchange dan bisa dipindah dalam hitungan menit, tapi gap harga Korea-US nyentuh ~40% dan tahan berminggu-minggu. Kenapa dia gak ke-arbitrage habis hampir langsung?'
      },
      prompt: { en: 'Before continuing, try answering:', id: 'Sebelum lanjut, coba jawab:' },
      answer: {
        en: 'Because the binding constraint is moving fiat money across borders, not moving bitcoin. After selling in Korea, the proceeds are in won inside the Korean banking system, and capital controls plus crypto-wary banks make converting won to dollars and wiring it out slow, capped, or impossible. So the round-trip cannot be recycled at speed; arbitrage requires pre-positioned capital on both sides of the border, and that capital is bounded (the limits-of-arbitrage logic of Shleifer-Vishny and Gromb-Vayanos). With arbitrage capital capped and segmented by capital controls, the gap can stay large for weeks.',
        id: 'Karena yang ngebatasin itu mindahin uang fiat lintas perbatasan, bukan mindahin bitcoin. Setelah jual di Korea, hasilnya dalam won di dalam sistem perbankan Korea, dan capital controls plus bank yang waswas-crypto bikin konversi won ke dolar dan wire keluar itu lambat, dibatasi, atau mustahil. Jadi round-trip-nya gak bisa didaur-ulang dengan cepat; arbitrage butuh modal yang udah di-pre-position di dua sisi perbatasan, dan modal itu terbatas (logika limits-of-arbitrage Shleifer-Vishny dan Gromb-Vayanos). Dengan modal arbitrage dibatasi dan tersegmentasi capital controls, gap-nya bisa tetep gede berminggu-minggu.'
      }
    },
    {
      sectionId: 'formalization',
      question: {
        en: 'Within a single country, bitcoin price deviations across exchanges stayed under about 1%, while across countries they reached 15-40% and persisted. What one mechanism explains both the magnitude and the persistence of the cross-country gaps?',
        id: 'Dalam satu negara, deviasi harga bitcoin antar-exchange tetep di bawah sekitar 1%, sementara lintas negara mereka nyentuh 15-40% dan persisten. Satu mekanisme apa yang jelasin baik magnitudo maupun persistensi gap lintas-negara?'
      },
      prompt: { en: 'Before continuing, try answering:', id: 'Sebelum lanjut, coba jawab:' },
      answer: {
        en: 'Segmentation of arbitrage capital by capital controls. Within a country, arbitrageurs share one currency and banking system, so capital moves freely and any gap closes almost immediately. Across countries, completing the arbitrage means moving fiat across a controlled border, so only a small, slow pool of pre-positioned capital can act. Because that arbitrage capital is bounded (Gromb-Vayanos), the cross-country gap is not competed away and can persist for weeks. The driver is the cost and feasibility of moving the money, not anything about bitcoin itself.',
        id: 'Segmentasi modal arbitrage sama capital controls. Dalam satu negara, arbitrageur berbagi satu mata uang dan sistem perbankan, jadi modal gerak bebas dan gap apa pun ketutup hampir langsung. Lintas negara, nyelesain arbitrage berarti mindahin fiat lintas perbatasan yang dikontrol, jadi cuma pool modal pre-position yang kecil dan lambat yang bisa bertindak. Karena modal arbitrage itu terbatas (Gromb-Vayanos), gap lintas-negara gak ke-compete habis dan bisa bertahan berminggu-minggu. Pendorongnya itu biaya dan kelayakan mindahin uangnya, bukan apa pun soal bitcoin-nya sendiri.'
      }
    },
    {
      sectionId: 'formalization',
      question: {
        en: 'Makarov-Schoar regress bitcoin returns on net signed order flow. About how much does a net buy of 10,000 BTC move the 5-minute price, what classic microstructure result does this confirm, and why does it matter for an arbitrageur?',
        id: 'Makarov-Schoar regresi return bitcoin ke net signed order flow. Net buy 10,000 BTC gerakin harga 5-menit kira-kira berapa, hasil microstructure klasik apa yang ini konfirmasi, dan kenapa itu penting buat arbitrageur?'
      },
      prompt: { en: 'Before continuing, try answering:', id: 'Sebelum lanjut, coba jawab:' },
      answer: {
        en: 'A net buy of 10,000 BTC raises the 5-minute price by about 9% (roughly 6% hourly and 3.6% contemporaneously daily), and most of the daily impact is permanent. This is Kyle (1985) price impact measured for crypto: order flow moves price, and largely permanently. It matters for arbitrage because an arbitrageur capturing a cross-exchange premium has to trade size on both legs and pays this impact each time, which eats into the apparent spread — part of why the gaps are not free money.',
        id: 'Net buy 10,000 BTC naikin harga 5-menit sekitar 9% (kira-kira 6% per-jam dan 3.6% kontemporer harian), dan sebagian besar impact harian-nya permanen. Ini price impact Kyle (1985) yang diukur buat crypto: order flow gerakin harga, dan sebagian besar permanen. Itu penting buat arbitrage karena arbitrageur yang nangkep premium lintas-exchange harus ngetrade size di dua leg dan bayar impact ini tiap kali, yang makan spread yang kelihatan — sebagian dari kenapa gap-nya bukan duit gratis.'
      }
    },
    {
      sectionId: 'applications',
      question: {
        en: 'You run a crypto market-making desk that prices off a single "global" bitcoin reference price. What two warnings does Makarov-Schoar give you?',
        id: 'Kamu jalanin crypto market-making desk yang pricing dari satu harga referensi bitcoin "global". Dua peringatan apa yang Makarov-Schoar kasih ke kamu?'
      },
      prompt: { en: 'Before continuing, try answering:', id: 'Sebelum lanjut, coba jawab:' },
      answer: {
        en: 'First, there is no single price of bitcoin: at 5-minute horizons cross-exchange return correlation is only about 57%, so a global reference is a noisy aggregate and you will be mis-marked against the venue you actually trade on — mark to your own venue. Second, cross-venue gaps are real but not free money: capturing a premium requires pre-positioned capital on both sides of a border, local-currency exposure, and moving fiat through capital controls, so it is a capital-intensive, currency-risky position, not a riskless arbitrage. Booking an unrealized premium as locked-in P&L is the classic expensive mistake.',
        id: 'Pertama, gak ada satu harga bitcoin: di horizon 5-menit korelasi return antar-exchange cuma sekitar 57%, jadi referensi global itu agregat berisik dan kamu bakal salah-mark lawan venue yang kamu beneran trade-in — mark ke venue-mu sendiri. Kedua, gap lintas-venue itu nyata tapi bukan duit gratis: nangkep premium butuh modal pre-position di dua sisi perbatasan, exposure mata-uang lokal, dan mindahin fiat lewat capital controls, jadi dia posisi padat-modal, berisiko-mata-uang, bukan arbitrage riskless. Nge-book premium yang belum terealisasi sebagai P&L terkunci itu kesalahan mahal yang klasik.'
      }
    },
  ],
};
