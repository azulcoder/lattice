// ─────────────────────────────────────────────────────────────────────────
// Trading domain — ORDER FLOW & CVD (cumulative volume delta): absorption &
// divergence, grounded in Kyle's λ. Aggressor classification (a market BUY
// lifts the offer = +δ; a market SELL hits the bid = −δ; Lee-Ready as the
// sign rule), CVD = running Σδ, the healthy "flow CONFIRMS price" case
// (Δp ≈ λδ), and the two reversal tells: ABSORPTION (large δ, no move ⇒ a
// passive participant soaks the flow) and a CVD DIVERGENCE (price new high,
// CVD lower high — or mirror). Carries the interactive OrderFlowCVDSim
// (Δpₜ = λ(1−a)δₜ + noise; λ̂ = OLS slope of Δp on δ ≈ λ(1−a); verdict
// confirmed/absorption/choppy; absorptionSide bearish/bullish). Footprint &
// CVD are a practitioner charting tool — tagged [Practitioner]; the price-
// impact spine (Kyle/VPIN/Cont-Kukanov-Stoikov) is tagged [Established].
// Educational, not financial advice.
// ─────────────────────────────────────────────────────────────────────────

export const CONTENT = {
  itemId: 'order-flow-cvd',
  estimatedReadMinutes: 26,

  author: {
    fullName: { en: 'Order flow & CVD — a practitioner read grounded in price-impact theory', id: 'Order flow & CVD — pembacaan praktisi yang berlandaskan teori price-impact' },
    affiliation: {
      en: 'A composite, evidence-tagged module rather than a single person: it joins the practitioner craft of footprint / cumulative volume delta (CVD) reading — absorption, exhaustion, divergence — to its academic spine in market microstructure: Kyle (1985) for price impact λ, Easley, López de Prado & O’Hara (2012) for order-flow toxicity (VPIN), Cont, Kukanov & Stoikov (2014) for order-flow imbalance, and Lee & Ready (1991) for trade-sign classification.',
      id: 'Modul komposit ber-tag-bukti, bukan satu orang: dia ngegabung kerajinan praktisi membaca footprint / cumulative volume delta (CVD) — absorpsi, exhaustion, divergence — dengan tulang punggung akademiknya di market microstructure: Kyle (1985) buat price impact λ, Easley, López de Prado & O’Hara (2012) buat order-flow toxicity (VPIN), Cont, Kukanov & Stoikov (2014) buat order-flow imbalance, dan Lee & Ready (1991) buat klasifikasi tanda-trade.',
    },
    tagline: {
      en: 'Price moves in the net order flow — Δp ≈ λ·δ. When heavy aggression stops moving price, someone passive is absorbing it; CVD is how you see that absorption before the reversal.',
      id: 'Harga gerak searah net order flow — Δp ≈ λ·δ. Pas agresi berat berhenti ngegerakin harga, ada yang pasif lagi nyerapnya; CVD itu cara kamu liat absorpsi itu sebelum reversal.',
    },
    bio: {
      en: `This module treats CVD not as a magic indicator but as a *visualization of a known mechanism*. The mechanism is Kyle’s λ: in a market with informed traders and noise traders, the market maker sets a price that moves linearly in net order flow, Δp ≈ λ·δ, where λ is the price-impact coefficient (inverse market depth). Footprint and CVD are the **practitioner tools** that let you watch δ and Σδ bar by bar; the academic literature is what tells you *why* the reading works and when it fails.

The craft side — footprint charts, delta, CVD, absorption, exhaustion — comes from order-flow practitioners (Davies’ Jigsaw / Market Delta lineage; traders like @Luckshuryy, Tradingriot, Jim Talbot). The science side gives it teeth: Lee & Ready (1991) for how a trade is signed as buyer- or seller-initiated, Kyle (1985) for the price-impact spine, Easley–López de Prado–O’Hara (2012) for the idea that order-flow *imbalance* (toxicity) is a measurable, informative quantity, and Cont–Kukanov–Stoikov (2014) for the empirical linear law between order-flow imbalance and price change.

⟦Note: education, not financial advice. CVD/footprint reads are [Practitioner] heuristics; the price-impact spine is [Established]. CVD is venue- and feed-dependent and can be noisy — see the caveats throughout.⟧`,
      id: `Modul ini ngeperlakuin CVD bukan sebagai indikator ajaib tapi sebagai *visualisasi dari mekanisme yang udah dikenal*. Mekanismenya itu λ Kyle: di pasar dengan informed trader dan noise trader, market maker nyetel harga yang gerak linear terhadap net order flow, Δp ≈ λ·δ, di mana λ itu koefisien price-impact (kebalikan dari kedalaman pasar). Footprint dan CVD itu **tools praktisi** yang ngebolehin kamu ngawasin δ dan Σδ bar per bar; literatur akademik itu yang ngasih tau *kenapa* pembacaannya jalan dan kapan dia gagal.

Sisi kerajinan — chart footprint, delta, CVD, absorpsi, exhaustion — datang dari praktisi order-flow (silsilah Jigsaw / Market Delta-nya Davies; trader kayak @Luckshuryy, Tradingriot, Jim Talbot). Sisi sains ngasih dia gigi: Lee & Ready (1991) buat gimana satu trade ditandai sebagai buyer- atau seller-initiated, Kyle (1985) buat tulang punggung price-impact, Easley–López de Prado–O’Hara (2012) buat ide bahwa *imbalance* order-flow (toxicity) itu kuantitas yang bisa-diukur dan informatif, dan Cont–Kukanov–Stoikov (2014) buat hukum linear empiris antara order-flow imbalance dan perubahan harga.

⟦Catatan: edukasi, bukan nasihat keuangan. Pembacaan CVD/footprint itu heuristik [Practitioner]; tulang punggung price-impact itu [Established]. CVD itu venue- dan feed-dependent dan bisa noisy — liat caveat sepanjang modul.⟧`,
    },
    focus: {
      en: `The signature idea is the **decoupling of flow and price**. In the healthy case price tracks the flow: δ large and positive, CVD rising, price advancing — flow CONFIRMS the move. The signal is when they DECOUPLE: heavy aggressive buying (δ large, CVD rising) but price will NOT advance ⇒ a large passive seller is ABSORBING the flow ⇒ bearish (mirror for bullish). The clean chart signature is a **CVD divergence**: price prints a new high while CVD prints a *lower* high (or price prints a new low while CVD prints a *higher* low). The module formalizes this with a model you can drive: Δpₜ = λ(1−a)·δₜ + noise, where a ∈ [0,1] is the fraction of flow absorbed; the OLS slope of Δp on δ recovers the effective impact λ̂ ≈ λ(1−a), so as absorption rises the price barely responds to flow even though CVD keeps climbing.`,
      id: `Ide khasnya itu **decoupling flow dan harga**. Di kasus sehat harga ngikut flow: δ besar dan positif, CVD naik, harga maju — flow KONFIRMASI gerakan. Sinyalnya itu pas mereka DECOUPLE: pembelian agresif berat (δ besar, CVD naik) tapi harga GAK mau maju ⇒ penjual pasif besar lagi MENYERAP flow ⇒ bearish (cermin buat bullish). Tanda chart yang bersih itu **divergensi CVD**: harga nge-print high baru sementara CVD nge-print high yang *lebih rendah* (atau harga nge-print low baru sementara CVD nge-print low yang *lebih tinggi*). Modul ngeformalin ini dengan model yang bisa kamu kendalikan: Δpₜ = λ(1−a)·δₜ + noise, di mana a ∈ [0,1] itu fraksi flow yang diserap; slope OLS dari Δp pada δ ngerecover impact efektif λ̂ ≈ λ(1−a), jadi pas absorpsi naik harga nyaris gak merespons flow walaupun CVD terus naik.`,
    },
    intellectualLineage: {
      en: `The spine is **Kyle (1985)**, "Continuous Auctions and Insider Trading," which gives the linear price-impact law Δp = λ·(order flow) and identifies λ with the inverse of market depth. **Lee & Ready (1991)** supplies the operational definition of order flow from tape data: sign each trade buyer- or seller-initiated via the quote rule (above the midpoint = buy, below = sell) with the tick test as tie-breaker — the rule behind every delta and CVD series. **Easley, López de Prado & O’Hara (2012)** reframe order-flow imbalance as *toxicity* (VPIN) — a measurable adverse-selection pressure on liquidity providers — which is exactly what absorption-then-reversal expresses. **Cont, Kukanov & Stoikov (2014)** show empirically that short-horizon price changes are linear in order-flow imbalance with slope inversely proportional to depth — the data-grounded version of Kyle’s λ. The broader synthesis (limit-order-book mechanics, the metaorder √-law of impact) is **Bouchaud, Bonart, Donier & Gould (2018)**. Footprint/CVD charting itself is a **practitioner** layer (Davies’ Jigsaw / Market Delta; modern crypto/futures order-flow educators) sitting on top of this science.`,
      id: `Tulang punggungnya itu **Kyle (1985)**, "Continuous Auctions and Insider Trading," yang ngasih hukum price-impact linear Δp = λ·(order flow) dan ngidentifikasi λ dengan kebalikan kedalaman pasar. **Lee & Ready (1991)** nyediain definisi operasional order flow dari data tape: tandai tiap trade buyer- atau seller-initiated lewat quote rule (di atas midpoint = buy, di bawah = sell) dengan tick test sebagai pemecah seri — aturan di balik tiap seri delta dan CVD. **Easley, López de Prado & O’Hara (2012)** ngeframe-ulang order-flow imbalance sebagai *toxicity* (VPIN) — tekanan adverse-selection yang bisa-diukur pada penyedia likuiditas — yang persis apa yang diekspresiin absorpsi-lalu-reversal. **Cont, Kukanov & Stoikov (2014)** nunjukin secara empiris bahwa perubahan harga horizon-pendek itu linear terhadap order-flow imbalance dengan slope berbanding terbalik dengan kedalaman — versi berlandaskan-data dari λ Kyle. Sintesis yang lebih luas (mekanik limit-order-book, hukum-√ impact metaorder) itu **Bouchaud, Bonart, Donier & Gould (2018)**. Charting footprint/CVD sendiri itu lapisan **praktisi** (Jigsaw / Market Delta-nya Davies; edukator order-flow crypto/futures modern) yang duduk di atas sains ini.`,
    },
    keyCollaborators: {
      en: 'The intellectual neighbours are Kyle (price impact λ), Lee & Ready (trade-sign classification), Easley–López de Prado–O’Hara (VPIN / order-flow toxicity), Cont–Kukanov–Stoikov (order-flow imbalance), Glosten–Milgrom and O’Hara (the adverse-selection theory of the spread), and Bouchaud–Bonart–Donier–Gould (limit-order-book microstructure). On the practitioner side: Peter Davies (Jigsaw Trading / Market Delta) for footprint & delta tooling, and the order-flow educators who popularised CVD divergence and absorption reads (@Luckshuryy, Tradingriot, Jim Talbot).',
      id: 'Tetangga intelektualnya itu Kyle (price impact λ), Lee & Ready (klasifikasi tanda-trade), Easley–López de Prado–O’Hara (VPIN / order-flow toxicity), Cont–Kukanov–Stoikov (order-flow imbalance), Glosten–Milgrom dan O’Hara (teori adverse-selection dari spread), dan Bouchaud–Bonart–Donier–Gould (microstructure limit-order-book). Di sisi praktisi: Peter Davies (Jigsaw Trading / Market Delta) buat tooling footprint & delta, dan edukator order-flow yang mempopulerkan pembacaan divergensi CVD dan absorpsi (@Luckshuryy, Tradingriot, Jim Talbot).',
    },
    legacy: {
      en: `Most retail "CVD divergence" content is a pattern shown without a mechanism. The contribution of this module is to put the practitioner read back on its scientific footing: CVD is a running sum of signed order flow; price *should* move with that flow (Kyle’s λ); when it does not, the missing impact is exactly absorption by passive size, and that adverse-selection pressure is what VPIN measures and what Cont–Kukanov–Stoikov find linear in the data. Read this way, an absorption/divergence is not a mystical pattern but a measured drop in effective λ — and the honest caveats follow automatically: CVD is venue- and feed-dependent, trade-signing is imperfect, and a divergence is a *probabilistic* tell, not a guarantee. Backtest before you trust it.`,
      id: `Kebanyakan konten "divergensi CVD" ritel itu pola yang ditunjukin tanpa mekanisme. Kontribusi modul ini itu naruh pembacaan praktisi balik ke pijakan ilmiahnya: CVD itu jumlah berjalan dari order flow bertanda; harga *seharusnya* gerak dengan flow itu (λ Kyle); pas dia enggak, impact yang ilang itu persis absorpsi oleh size pasif, dan tekanan adverse-selection itu yang diukur VPIN dan yang ditemuin Cont–Kukanov–Stoikov linear di data. Dibaca begini, absorpsi/divergensi itu bukan pola mistis tapi penurunan terukur di λ efektif — dan caveat jujur ikut otomatis: CVD itu venue- dan feed-dependent, tanda-trade gak sempurna, dan divergensi itu tell *probabilistik*, bukan jaminan. Back-test sebelum percaya.`,
    },
    keyWorks: [
      { year: 1985, title: 'Continuous Auctions and Insider Trading (Kyle) — the linear price-impact law Δp = λ·(order flow); λ = inverse market depth; the spine of CVD reads', venue: 'Econometrica 53(6):1315-1335' },
      { year: 1991, title: 'Inferring Trade Direction from Intraday Data (Lee & Ready) — sign trades buyer/seller-initiated via the quote rule + tick test; the basis of delta & CVD', venue: 'Journal of Finance 46(2):733-746' },
      { year: 2012, title: 'Flow Toxicity and Liquidity in a High-Frequency World (VPIN) (Easley, López de Prado & O’Hara) — order-flow imbalance as measurable toxicity / adverse selection', venue: 'Review of Financial Studies 25(5):1457-1493' },
      { year: 2014, title: 'The Price Impact of Order Book Events (Cont, Kukanov & Stoikov) — short-horizon price change is linear in order-flow imbalance, slope ∝ 1/depth', venue: 'Journal of Financial Econometrics 12(1):47-88' },
      { year: 2018, title: 'Trades, Quotes and Prices: Financial Markets Under the Microscope (Bouchaud, Bonart, Donier & Gould) — limit-order-book mechanics and price impact', venue: 'Cambridge University Press (book)' },
    ],
  },

  sections: [
    {
      id: 'motivation',
      heading: { en: 'Why order flow and CVD matter', id: 'Kenapa order flow dan CVD penting' },
      body: {
        en: `A candlestick tells you *that* price moved; it does not tell you *who* moved it or whether the move is real. Two bars can look identical — a green candle that closes on its high — yet one is a healthy advance and the other is a trap. **Order flow** is the missing dimension: it records the aggressive market orders that actually transacted, so you can see whether buyers or sellers were in control and, crucially, whether their aggression was *rewarded* with price movement.

The single organizing fact, from Kyle (1985), is that **price moves in the net order flow**: Δp ≈ λ·δ, where δ is the signed aggressor imbalance for the bar (buy market volume minus sell market volume) and λ is the price-impact coefficient — the slope of price against flow, equal to the inverse of market depth [Established]. In a healthy trend the flow and the price agree: aggressive buying lifts the price, aggressive selling drops it. **Cumulative volume delta (CVD)**, the running sum CVD = Σδ, is simply the practitioner’s way of plotting that flow so you can compare its trend to the price’s trend on the same chart [Practitioner].

The reason this matters for trading is the **decoupling**. When heavy aggressive buying keeps arriving — δ large, CVD climbing — but price stops advancing, the missing price impact has to go somewhere: a large *passive* seller is sitting on the offer and **absorbing** every market buy. The buyers are spending real money and getting nothing for it; when they exhaust, price falls back. This is the absorption-and-divergence read, and it is one of the few chart signals with a clean mechanism behind it: the effective λ has collapsed.

The academic spine keeps the practitioner read honest. Lee & Ready (1991) tell us how a trade is signed in the first place [Established]; Easley, López de Prado & O’Hara (2012) tell us that order-flow imbalance is a measurable *toxicity* that adversely selects liquidity providers — exactly the pressure absorption expresses [Established]; and Cont, Kukanov & Stoikov (2014) show that short-horizon price changes really are linear in order-flow imbalance, with slope inversely proportional to depth [Established]. Footprint and CVD are the [Practitioner] charting tools that let you watch all of this in real time.

⟦Disclaimer: education, not financial advice. CVD/footprint reads are practitioner heuristics, not guarantees; CVD is venue- and feed-dependent and can be noisy. A divergence is a probabilistic tell — backtest before you trust it.⟧`,
        id: `Sebatang candlestick ngasih tau kamu *bahwa* harga gerak; dia gak ngasih tau *siapa* yang ngegerakinnya atau apakah gerakannya nyata. Dua bar bisa keliatan identik — candle hijau yang nutup di high-nya — tapi satu itu kenaikan sehat dan yang satunya jebakan. **Order flow** itu dimensi yang ilang: dia ngerekam market order agresif yang benar-benar tertransaksi, jadi kamu bisa liat apakah buyer atau seller yang in control dan, yang krusial, apakah agresi mereka *dibayar* dengan pergerakan harga.

Fakta pengatur tunggal, dari Kyle (1985), itu bahwa **harga gerak searah net order flow**: Δp ≈ λ·δ, di mana δ itu aggressor imbalance bertanda buat bar itu (volume market buy dikurangi volume market sell) dan λ itu koefisien price-impact — slope harga terhadap flow, sama dengan kebalikan kedalaman pasar [Established]. Di trend sehat flow dan harga sepakat: pembelian agresif ngangkat harga, penjualan agresif ngejatuhinnya. **Cumulative volume delta (CVD)**, jumlah berjalan CVD = Σδ, itu cuma cara praktisi nge-plot flow itu biar kamu bisa bandingin trend-nya ke trend harga di chart yang sama [Practitioner].

Alasan ini penting buat trading itu **decoupling**-nya. Pas pembelian agresif berat terus datang — δ besar, CVD naik — tapi harga berhenti maju, price impact yang ilang itu harus ke suatu tempat: penjual *pasif* besar lagi duduk di offer dan **menyerap** tiap market buy. Buyer ngeluarin uang beneran dan gak dapet apa-apa; pas mereka habis, harga jatuh balik. Ini pembacaan absorpsi-dan-divergensi, dan dia salah satu dari sedikit sinyal chart dengan mekanisme bersih di belakangnya: λ efektif udah ambruk.

Tulang punggung akademik ngejaga pembacaan praktisi tetap jujur. Lee & Ready (1991) ngasih tau kita gimana satu trade ditandai pertama-tama [Established]; Easley, López de Prado & O’Hara (2012) ngasih tau kita bahwa order-flow imbalance itu *toxicity* yang bisa-diukur yang nge-adversely-select penyedia likuiditas — persis tekanan yang diekspresiin absorpsi [Established]; dan Cont, Kukanov & Stoikov (2014) nunjukin bahwa perubahan harga horizon-pendek beneran linear terhadap order-flow imbalance, dengan slope berbanding terbalik dengan kedalaman [Established]. Footprint dan CVD itu tools charting [Practitioner] yang ngebolehin kamu ngawasin semua ini secara real time.

⟦Disclaimer: edukasi, bukan nasihat keuangan. Pembacaan CVD/footprint itu heuristik praktisi, bukan jaminan; CVD itu venue- dan feed-dependent dan bisa noisy. Divergensi itu tell probabilistik — back-test sebelum percaya.⟧`,
      },
    },
    {
      id: 'intuition',
      heading: { en: 'Aggressors, delta, and the absorption story', id: 'Aggressor, delta, dan cerita absorpsi' },
      body: {
        en: `Start with **who is the aggressor**. Every trade has two sides — a resting limit order and an incoming market order that hits it. The market order is the *aggressor*: it is the one demanding immediacy and paying the spread. A market **BUY** lifts the offer (it trades at the ask, removing resting sell liquidity) and counts as **+volume**; a market **SELL** hits the bid (it trades at the bid, removing resting buy liquidity) and counts as **−volume**. From the tape alone you do not literally see "buy" or "sell" flags, so you *infer* the side: the **Lee & Ready (1991)** rule signs a trade by the quote rule (price above the midpoint ⇒ buyer-initiated, below ⇒ seller-initiated) with the tick test as tie-breaker [Established]. A **footprint** chart shows, for each price level inside a bar, the volume that traded on the bid versus the ask — the raw material from which delta is computed.

**Delta** is the net of that aggression for a bar: δ = (aggressive buy volume) − (aggressive sell volume). **CVD** is its running sum over bars, CVD = Σδ — a line that climbs while buyers are the net aggressors and falls while sellers are. Note what CVD is *not*: it is the flow of *aggressors* (market orders), not the *resting liquidity* (limit orders) sitting in the book. That distinction is the whole game.

Now the healthy case. In a clean uptrend, aggressive buyers keep lifting the offer, δ is positive, CVD rises, and **price rises with it** — flow CONFIRMS the move (Δp ≈ λ·δ). Buyers are being rewarded for their aggression; depth is thin in their direction; λ is doing its job.

Then the tell: **absorption**. Aggressive buying keeps coming — δ stays large and positive, CVD keeps climbing — but **price stops going up**. Where did the impact go? A large passive seller is parked on the offer, refilling it as fast as the buyers consume it, *absorbing* the flow. The aggressors are spending and getting nothing. This is bearish: when the buyers exhaust, there is no one left to lift the offer, and the passive seller’s inventory pushes price down. The mirror case — relentless aggressive selling that fails to move price down — means a large passive buyer is absorbing, which is bullish.

The clean chart signature of absorption is a **CVD divergence**: price prints a **new high while CVD prints a lower high** (buyers tried harder for less price — bearish), or price prints a **new low while CVD prints a higher low** (sellers tried harder for less price — bullish). **Exhaustion** is the close cousin at extremes: a final climactic surge of aggression that immediately fails, leaving a wick. Both say the same thing in the language of Kyle’s λ: the effective price impact of flow has collapsed, so the move is unlikely to continue.`,
        id: `Mulai dari **siapa aggressor-nya**. Tiap trade punya dua sisi — limit order nganggur dan market order masuk yang hantam dia. Market order itu *aggressor*: dia yang nuntut immediacy dan bayar spread. Market **BUY** ngangkat offer (dia trade di ask, ngehapus likuiditas sell nganggur) dan dihitung **+volume**; market **SELL** hantam bid (dia trade di bid, ngehapus likuiditas buy nganggur) dan dihitung **−volume**. Dari tape doang kamu gak literally liat flag "buy" atau "sell," jadi kamu *menyimpulkan* sisinya: aturan **Lee & Ready (1991)** nandain trade lewat quote rule (harga di atas midpoint ⇒ buyer-initiated, di bawah ⇒ seller-initiated) dengan tick test sebagai pemecah seri [Established]. Chart **footprint** nunjukin, buat tiap level harga di dalam bar, volume yang trade di bid versus ask — bahan mentah dari mana delta dihitung.

**Delta** itu net dari agresi itu buat satu bar: δ = (volume buy agresif) − (volume sell agresif). **CVD** itu jumlah berjalannya lintas bar, CVD = Σδ — garis yang naik selama buyer jadi net aggressor dan turun selama seller. Catat apa yang CVD itu *bukan*: dia flow dari *aggressor* (market order), bukan *resting liquidity* (limit order) yang duduk di buku. Pembedaan itu seluruh permainannya.

Sekarang kasus sehat. Di uptrend bersih, buyer agresif terus ngangkat offer, δ positif, CVD naik, dan **harga naik bareng dia** — flow KONFIRMASI gerakan (Δp ≈ λ·δ). Buyer dibayar buat agresinya; kedalaman tipis ke arah mereka; λ ngejalanin tugasnya.

Lalu tell-nya: **absorpsi**. Pembelian agresif terus datang — δ tetap besar dan positif, CVD terus naik — tapi **harga berhenti naik**. Impact-nya ke mana? Penjual pasif besar parkir di offer, ngisi-ulang secepat buyer ngonsumsinya, *menyerap* flow. Aggressor ngeluarin uang dan gak dapet apa-apa. Ini bearish: pas buyer habis, gak ada yang nyisa buat ngangkat offer, dan inventory si penjual pasif ngedorong harga turun. Kasus cermin — penjualan agresif tanpa henti yang gagal ngegerakin harga turun — berarti pembeli pasif besar lagi nyerap, yang itu bullish.

Tanda chart bersih dari absorpsi itu **divergensi CVD**: harga nge-print **high baru sementara CVD nge-print high yang lebih rendah** (buyer berusaha lebih keras buat harga lebih sedikit — bearish), atau harga nge-print **low baru sementara CVD nge-print low yang lebih tinggi** (seller berusaha lebih keras buat harga lebih sedikit — bullish). **Exhaustion** itu sepupu dekatnya di ekstrem: lonjakan agresi klimaktik terakhir yang langsung gagal, ninggalin wick. Keduanya ngomong hal yang sama dalam bahasa λ Kyle: price impact efektif dari flow udah ambruk, jadi gerakan kemungkinan gak lanjut.`,
      },
    },
    {
      id: 'formalization',
      heading: { en: 'Formalizing it: λ, δ, CVD, and the effective impact λ(1−a)', id: 'Memformalkan: λ, δ, CVD, dan impact efektif λ(1−a)' },
      visualization: {
        id: 'order-flow-cvd-viz',
        component: 'OrderFlowCVDSim',
        title: {
          en: 'Order flow & CVD: price vs cumulative delta, absorption & divergence',
          id: 'Order flow & CVD: harga vs delta kumulatif, absorpsi & divergensi',
        },
        description: {
          en: 'Plots normalized PRICE (solid) against CUMULATIVE VOLUME DELTA (CVD = Σδ, dashed) bar by bar. Each bar draws a signed aggressor imbalance δ; price moves by Δpₜ = λ(1−a)·δₜ + noise, so absorption a ∈ [0,1] is the fraction of flow soaked up by passive size. When a is small the two lines rise together — flow CONFIRMS price. Crank absorption up and CVD keeps climbing while price flattens: a DIVERGENCE appears (price new high, CVD lower high) and the verdict flips to absorption. The readout reports the OLS slope of Δp on δ, λ̂ ≈ λ(1−a) — the effective impact, which falls as a rises — plus the verdict (confirmed / absorption / choppy) and the absorbed side (bearish if CVD rises into a stalling price, bullish if CVD falls into one).',
          id: 'Nge-plot HARGA ternormalisasi (solid) terhadap CUMULATIVE VOLUME DELTA (CVD = Σδ, putus-putus) bar per bar. Tiap bar ngegambar aggressor imbalance bertanda δ; harga gerak sebesar Δpₜ = λ(1−a)·δₜ + noise, jadi absorpsi a ∈ [0,1] itu fraksi flow yang diserap size pasif. Pas a kecil dua garis naik bareng — flow KONFIRMASI harga. Naikin absorpsi dan CVD terus naik sementara harga mendatar: DIVERGENSI muncul (harga high baru, CVD high lebih rendah) dan verdict balik ke absorption. Readout ngelaporin slope OLS dari Δp pada δ, λ̂ ≈ λ(1−a) — impact efektif, yang turun pas a naik — plus verdict (confirmed / absorption / choppy) dan sisi yang diserap (bearish kalau CVD naik ke harga yang mandek, bullish kalau CVD turun ke harga itu).',
        },
        defaultParams: { flowTrend: 0.3, lambda: 1.5, absorption: 0.8, noise: 0.5 },
        height: 440,
      },
      body: {
        en: `**The price-impact spine.** Kyle (1985) gives a linear law: over a bar, the price change is proportional to the net aggressor order flow,
$$ \\Delta p_t \\approx \\lambda \\cdot \\delta_t, $$
where δₜ is the signed aggressor imbalance (buy market volume minus sell market volume) and λ is the **price-impact coefficient** — equal to the inverse of market depth, so a deep, liquid market has small λ (flow barely moves price) and a thin market has large λ [Established]. Cont, Kukanov & Stoikov (2014) confirm this linear relationship empirically for short horizons, with the slope inversely proportional to depth [Established].

**Signing the flow.** δ exists only because each trade is signed. Lee & Ready (1991): classify a trade as buyer-initiated if its price is above the prevailing quote midpoint, seller-initiated if below; if it is exactly at the midpoint, use the tick test (higher than the last different price ⇒ buy, lower ⇒ sell) [Established]. Then
$$ \\delta_t = B_t - S_t, \\qquad \\mathrm{CVD}(t) = \\sum_{\\tau \\le t} \\delta_\\tau, $$
with Bₜ, Sₜ the buyer- and seller-initiated volume in bar t.

**Modelling absorption.** Introduce an absorption fraction a ∈ [0,1]: of the flow δ that arrives, a fraction a is soaked up by passive resting size and produces *no* price impact, leaving only (1−a) to move price. The bar’s price change becomes
$$ \\Delta p_t = \\lambda(1-a)\\,\\delta_t + \\varepsilon_t, $$
with εₜ micro-noise. CVD still accumulates the *full* flow, CVD = Σδ, because the aggressors really did transact — but price only registers the unabsorbed part. So at a = 0 price and CVD move together (confirmation); as a → 1 the price impact vanishes while CVD keeps climbing — **divergence**.

**Recovering the effective impact.** Regress the bar price changes on the flow: the OLS slope is
$$ \\hat\\lambda = \\frac{\\mathrm{Cov}(\\Delta p, \\delta)}{\\mathrm{Var}(\\delta)} \\approx \\lambda(1-a). $$
This λ̂ is the **effective impact**: it equals the structural λ scaled down by the unabsorbed fraction. A healthy trend has λ̂ ≈ λ; heavy absorption drives λ̂ toward 0. This is exactly the quantity the simulator reports.

**The simulator’s verdict.** The embedded OrderFlowCVDSim draws each bar’s δ from an AR(1) aggressor process with trend flowTrend, then sets Δpₜ = λ(1−a)·δₜ + noise. It plots normalized price against CVD and reports: **λ̂** (the OLS slope, shown next to λ(1−a)); the **net CVD**; the correlation corr(Δp, δ); and the **effective impact** = priceTrend / cvdTrend (price per unit of CVD). It then classifies a **verdict**: if there is no clear CVD trend it is **choppy**; if the effective impact is below 0.4·λ it is **absorption** (a divergence — and it labels the absorbed side **bearish** when CVD is rising into a stalling price, **bullish** when CVD is falling into one); otherwise **confirmed**. Slide absorption from 0 toward 1 with the default flowTrend = 0.3, λ = 1.5, noise = 0.5 and watch λ̂ fall away from λ while CVD and price visibly decouple into a DIVERGENCE.`,
        id: `**Tulang punggung price-impact.** Kyle (1985) ngasih hukum linear: sepanjang satu bar, perubahan harga sebanding dengan net aggressor order flow,
$$ \\Delta p_t \\approx \\lambda \\cdot \\delta_t, $$
di mana δₜ itu aggressor imbalance bertanda (volume market buy dikurangi volume market sell) dan λ itu **koefisien price-impact** — sama dengan kebalikan kedalaman pasar, jadi pasar dalam dan likuid punya λ kecil (flow nyaris gak ngegerakin harga) dan pasar tipis punya λ besar [Established]. Cont, Kukanov & Stoikov (2014) ngonfirmasi hubungan linear ini secara empiris buat horizon pendek, dengan slope berbanding terbalik dengan kedalaman [Established].

**Menandai flow.** δ ada cuma karena tiap trade ditandai. Lee & Ready (1991): klasifikasi trade sebagai buyer-initiated kalau harganya di atas midpoint quote yang berlaku, seller-initiated kalau di bawah; kalau persis di midpoint, pakai tick test (lebih tinggi dari harga beda terakhir ⇒ buy, lebih rendah ⇒ sell) [Established]. Lalu
$$ \\delta_t = B_t - S_t, \\qquad \\mathrm{CVD}(t) = \\sum_{\\tau \\le t} \\delta_\\tau, $$
dengan Bₜ, Sₜ itu volume buyer- dan seller-initiated di bar t.

**Memodelkan absorpsi.** Perkenalkan fraksi absorpsi a ∈ [0,1]: dari flow δ yang datang, fraksi a diserap oleh size pasif nganggur dan ngehasilin *nol* price impact, ninggalin cuma (1−a) buat ngegerakin harga. Perubahan harga bar jadi
$$ \\Delta p_t = \\lambda(1-a)\\,\\delta_t + \\varepsilon_t, $$
dengan εₜ micro-noise. CVD tetap ngakumulasi flow *penuh*, CVD = Σδ, karena aggressor beneran tertransaksi — tapi harga cuma ngerekam bagian yang gak diserap. Jadi di a = 0 harga dan CVD gerak bareng (konfirmasi); pas a → 1 price impact ilang sementara CVD terus naik — **divergensi**.

**Merecover impact efektif.** Regresikan perubahan harga bar pada flow: slope OLS-nya itu
$$ \\hat\\lambda = \\frac{\\mathrm{Cov}(\\Delta p, \\delta)}{\\mathrm{Var}(\\delta)} \\approx \\lambda(1-a). $$
λ̂ ini itu **impact efektif**: dia sama dengan λ struktural diskala-turun oleh fraksi yang gak-diserap. Trend sehat punya λ̂ ≈ λ; absorpsi berat ngedorong λ̂ ke arah 0. Ini persis kuantitas yang dilaporin simulator.

**Verdict simulator.** OrderFlowCVDSim yang tertanam ngegambar δ tiap bar dari proses aggressor AR(1) dengan trend flowTrend, lalu nyetel Δpₜ = λ(1−a)·δₜ + noise. Dia nge-plot harga ternormalisasi terhadap CVD dan ngelaporin: **λ̂** (slope OLS, ditampilin di samping λ(1−a)); **net CVD**; korelasi corr(Δp, δ); dan **impact efektif** = priceTrend / cvdTrend (harga per unit CVD). Lalu dia ngeklasifikasi **verdict**: kalau gak ada trend CVD jelas dia **choppy**; kalau impact efektif di bawah 0.4·λ dia **absorption** (divergensi — dan dia nge-label sisi yang diserap **bearish** pas CVD naik ke harga yang mandek, **bullish** pas CVD turun ke harga itu); selain itu **confirmed**. Geser absorpsi dari 0 ke arah 1 dengan default flowTrend = 0.3, λ = 1.5, noise = 0.5 dan awasin λ̂ jatuh menjauh dari λ sementara CVD dan harga jelas decouple jadi DIVERGENSI.`,
      },
    },
    {
      id: 'worked-example',
      heading: { en: 'Worked example: driving the simulator from confirm to absorb', id: 'Contoh: ngendaliin simulator dari confirm ke absorb' },
      body: {
        en: `Let us walk the embedded OrderFlowCVDSim across its three regimes, holding λ = 1.5, flowTrend = 0.3, noise = 0.5 and sweeping the absorption slider a.

**Regime 1 — confirmation (a = 0).** Aggressive buying trends up (flowTrend = 0.3 > 0), so δ is net positive bar after bar and CVD climbs steadily. With no absorption, Δpₜ = λ·δₜ + noise = 1.5·δₜ + noise, so price climbs *with* CVD. The OLS slope recovers λ̂ ≈ λ(1−a) = 1.5·(1−0) = **1.5** — the effective impact equals the structural λ. The correlation corr(Δp, δ) is high. The verdict is **confirmed** (✓ flow CONFIRMS price): the two lines rise together, no divergence label. This is the healthy trend — buyers are aggressive *and* rewarded.

**Regime 2 — absorption / divergence (a = 0.8, the default).** Now 80% of every aggressive buy is soaked up by a passive seller, so Δpₜ = λ(1−a)·δₜ + noise = 1.5·0.2·δₜ + noise = 0.3·δₜ + noise. The aggressors are just as busy — CVD keeps climbing at the same rate, because Σδ is unchanged — but price barely advances and then flattens. The OLS slope collapses to λ̂ ≈ λ(1−a) = 1.5·0.2 = **0.30**, well under the 0.4·λ = 0.6 threshold, so the verdict flips to **absorption**. Because CVD is rising (cvdTrend > 0) into a stalling price, the simulator labels the absorbed side **bearish** (✗ ABSORPTION / divergence — upside absorbed, downside risk) and stamps **DIVERGENCE** on the chart: price makes its high while CVD’s contribution to price has evaporated. This is the textbook bearish CVD divergence — heavy buying, no progress, a large passive seller on the offer.

**The mirror (flowTrend = −0.3, a = 0.8).** Flip the flow negative: aggressive *selling* trends, CVD falls, but with a = 0.8 the price refuses to drop. λ̂ is still ≈ 0.30, the verdict is still **absorption**, but now cvdTrend < 0, so the absorbed side is **bullish** (✗ ABSORPTION / divergence — downside absorbed, upside risk): a large passive buyer is soaking the selling, the bearish push is failing, and the risk is to the upside. The chart shows price making a new low while CVD makes a higher low.

**Regime 3 — choppy (flowTrend ≈ 0).** Drag flowTrend to about 0. Now δ has no net direction; CVD wanders with no trend (|cvdTrend| ≤ 0.05) and neither line carries information. The verdict is **choppy** (~ no clear flow trend). The lesson: absorption/divergence is only meaningful when there *is* a flow trend to be absorbed. With no directional flow there is nothing to confirm or fade — do not read a divergence into noise.

**Reading the panel.** Three numbers tell the story: **λ̂** (effective impact — high = flow respected, near zero = absorbed), shown next to its target λ(1−a); the **effective impact** ratio priceTrend/cvdTrend (price earned per unit of CVD); and corr(Δp, δ). The colored verdict line and the DIVERGENCE stamp summarize them. The practitioner translation: a healthy trend is one where price and CVD make matching highs/lows; a fadeable reversal is one where they diverge and λ̂ has collapsed.

⟦Disclaimer: the simulator is a teaching model with Gaussian noise and a fixed seed, not a market. Real CVD is venue-/feed-dependent and trade-signing is imperfect; treat the regimes as intuition, not signals.⟧`,
        id: `Mari jalani OrderFlowCVDSim yang tertanam lintas tiga regime-nya, nahan λ = 1.5, flowTrend = 0.3, noise = 0.5 dan nyapu slider absorpsi a.

**Regime 1 — konfirmasi (a = 0).** Pembelian agresif tren naik (flowTrend = 0.3 > 0), jadi δ net positif bar demi bar dan CVD naik mantap. Tanpa absorpsi, Δpₜ = λ·δₜ + noise = 1.5·δₜ + noise, jadi harga naik *bareng* CVD. Slope OLS ngerecover λ̂ ≈ λ(1−a) = 1.5·(1−0) = **1.5** — impact efektif sama dengan λ struktural. Korelasi corr(Δp, δ) tinggi. Verdict-nya **confirmed** (✓ flow KONFIRMASI harga): dua garis naik bareng, gak ada label divergensi. Ini trend sehat — buyer agresif *dan* dibayar.

**Regime 2 — absorpsi / divergensi (a = 0.8, default-nya).** Sekarang 80% dari tiap buy agresif diserap penjual pasif, jadi Δpₜ = λ(1−a)·δₜ + noise = 1.5·0.2·δₜ + noise = 0.3·δₜ + noise. Aggressor sama sibuknya — CVD terus naik dengan laju sama, karena Σδ gak berubah — tapi harga nyaris gak maju lalu mendatar. Slope OLS ambruk ke λ̂ ≈ λ(1−a) = 1.5·0.2 = **0.30**, jauh di bawah ambang 0.4·λ = 0.6, jadi verdict balik ke **absorption**. Karena CVD naik (cvdTrend > 0) ke harga yang mandek, simulator nge-label sisi yang diserap **bearish** (✗ ABSORPTION / divergence — upside absorbed, downside risk) dan ngecap **DIVERGENCE** di chart: harga bikin high-nya sementara kontribusi CVD ke harga udah menguap. Ini divergensi CVD bearish buku teks — pembelian berat, gak ada kemajuan, penjual pasif besar di offer.

**Cermin (flowTrend = −0.3, a = 0.8).** Balik flow jadi negatif: *penjualan* agresif tren, CVD turun, tapi dengan a = 0.8 harga nolak turun. λ̂ masih ≈ 0.30, verdict masih **absorption**, tapi sekarang cvdTrend < 0, jadi sisi yang diserap **bullish** (✗ ABSORPTION / divergence — downside absorbed, upside risk): pembeli pasif besar lagi nyerap penjualan, dorongan bearish gagal, dan risikonya ke atas. Chart nunjukin harga bikin low baru sementara CVD bikin low yang lebih tinggi.

**Regime 3 — choppy (flowTrend ≈ 0).** Tarik flowTrend ke sekitar 0. Sekarang δ gak punya arah net; CVD ngembara tanpa trend (|cvdTrend| ≤ 0.05) dan gak ada garis yang bawa informasi. Verdict-nya **choppy** (~ gak ada trend flow jelas). Pelajarannya: absorpsi/divergensi cuma bermakna pas *ada* trend flow yang bisa diserap. Tanpa flow berarah gak ada yang bisa dikonfirmasi atau di-fade — jangan baca divergensi ke dalam noise.

**Membaca panel.** Tiga angka nyeritain ceritanya: **λ̂** (impact efektif — tinggi = flow dihormati, mendekati nol = diserap), ditampilin di samping target-nya λ(1−a); rasio **impact efektif** priceTrend/cvdTrend (harga yang didapat per unit CVD); dan corr(Δp, δ). Garis verdict berwarna dan cap DIVERGENCE ngerangkum mereka. Terjemahan praktisi: trend sehat itu di mana harga dan CVD bikin high/low yang cocok; reversal yang bisa-di-fade itu di mana mereka divergen dan λ̂ udah ambruk.

⟦Disclaimer: simulator itu model pengajaran dengan noise Gaussian dan seed tetap, bukan pasar. CVD nyata itu venue-/feed-dependent dan tanda-trade gak sempurna; perlakukan regime sebagai intuisi, bukan sinyal.⟧`,
      },
    },
    {
      id: 'applications',
      heading: { en: 'Applications: confirmation and divergence at levels', id: 'Aplikasi: konfirmasi dan divergensi di level' },
      body: {
        en: `Order flow is most useful **at a level**, not in a vacuum. The discipline is to mark a price of interest *first* — a value-area edge (VAH/VAL), the point of control (POC), a prior swing high/low, a support/resistance zone — and then let CVD tell you what the flow is doing *there*. Flow read at random points is noise; flow read at a decision level is information.

**Confirmation (with-flow break = initiative).** Price approaches a resistance level and breaks through while CVD breaks out *with* it — δ strongly positive, CVD making a new high, price advancing. This is an **initiative** move: aggressive buyers are both willing and *rewarded*, λ̂ ≈ λ, the break is backed by real flow. The application is to trade *with* the break, treating the broken level as new support. This is the healthy "confirmed" verdict from the simulator made concrete.

**Divergence (absorption at a level = fade).** Price pushes to a new high at or just beyond a resistance level, but CVD makes a *lower* high — heavy buying, no follow-through, λ̂ collapsing. A large passive seller is absorbing the initiative at the level; this is the classic **fade** setup: the move is exhausted and the risk is to the downside. Mirror at support: price makes a new low while CVD makes a higher low ⇒ a passive buyer is absorbing, fade the breakdown to the upside. The simulator’s **absorption** verdict and bearish/bullish side label are exactly these two cases.

**Combine with structure.** CVD is a *confirmation/trigger* layer, not a standalone system. Pair it with auction structure — value-area edges and the POC from [Market Profile / TPO](item:market-profile-tpo) give you *where* the level is; CVD tells you *whether* the flow respects it. Pair it with positioning — [OI & positioning](item:husslin-oi-positioning) (open interest, funding) tells you *who is offside* and likely to be forced; CVD tells you *when* their break shows up in the aggression. An absorption divergence at a value-area edge, with open interest piling into the failing push, is a much stronger fade than any one read alone. The footprint-confirmed reversal routine in [@Luckshuryy’s order flow](item:luckshury-orderflow) is this same machinery applied intraday.

**Exhaustion at extremes.** At the end of an extended move, a final climactic surge — huge δ, a vertical CVD spike — that immediately reverses is **exhaustion**: the last aggressors have committed and there is no one left to continue. This leaves the wick that mean-reversion trades aim back toward.

**Honest limits and caveats.** CVD is **venue- and feed-dependent**: spot vs perpetuals, one exchange vs another, and aggregated vs single-venue feeds all produce *different* CVD lines, so a divergence on one feed may not exist on another. Trade-signing is **imperfect** — Lee & Ready misclassifies a meaningful minority of trades, and at the midpoint it is a guess. Iceberg orders and hidden liquidity mean the resting size you are inferring may be larger or smaller than it looks. And as the Insilico data-skepticism posture stresses, a backtested edge from CVD divergence is *sample-dependent* and can decay — a divergence is a **probabilistic** tell, not a guarantee. Keep CVD/footprint reads tagged [Practitioner], lean on the [Established] price-impact mechanism beneath them, and backtest before you trust any specific rule.`,
        id: `Order flow paling berguna **di level**, bukan di ruang hampa. Disiplinnya itu nandain harga yang menarik *dulu* — tepi value-area (VAH/VAL), point of control (POC), swing high/low sebelumnya, zona support/resistance — lalu biarin CVD ngasih tau kamu flow lagi ngapain *di situ*. Flow yang dibaca di titik acak itu noise; flow yang dibaca di level keputusan itu informasi.

**Konfirmasi (break searah-flow = initiative).** Harga deketin level resistance dan nembus sementara CVD breakout *bareng* dia — δ kuat positif, CVD bikin high baru, harga maju. Ini gerakan **initiative**: buyer agresif mau *dan* dibayar, λ̂ ≈ λ, break didukung flow nyata. Aplikasinya itu trade *searah* break, ngeperlakuin level yang ditembus sebagai support baru. Ini verdict sehat "confirmed" dari simulator yang dibikin konkret.

**Divergensi (absorpsi di level = fade).** Harga dorong ke high baru di atau pas lewat level resistance, tapi CVD bikin high yang *lebih rendah* — pembelian berat, gak ada follow-through, λ̂ ambruk. Penjual pasif besar lagi nyerap initiative di level itu; ini setup **fade** klasik: gerakan habis dan risikonya ke bawah. Cermin di support: harga bikin low baru sementara CVD bikin low yang lebih tinggi ⇒ pembeli pasif lagi nyerap, fade breakdown ke atas. Verdict **absorption** simulator dan label sisi bearish/bullish itu persis dua kasus ini.

**Gabungkan dengan struktur.** CVD itu lapisan *konfirmasi/trigger*, bukan sistem mandiri. Pasangin dengan struktur lelang — tepi value-area dan POC dari [Market Profile / TPO](item:market-profile-tpo) ngasih kamu *di mana* level-nya; CVD ngasih tau kamu *apakah* flow ngehormatinnya. Pasangin dengan positioning — [OI & positioning](item:husslin-oi-positioning) (open interest, funding) ngasih tau kamu *siapa yang offside* dan kemungkinan dipaksa; CVD ngasih tau kamu *kapan* break mereka muncul di agresi. Divergensi absorpsi di tepi value-area, dengan open interest numpuk ke dorongan yang gagal, itu fade yang jauh lebih kuat daripada pembacaan tunggal mana pun. Rutinitas reversal terkonfirmasi-footprint di [order flow @Luckshuryy](item:luckshury-orderflow) itu mesin yang sama diterapkan intraday.

**Exhaustion di ekstrem.** Di ujung gerakan panjang, lonjakan klimaktik terakhir — δ raksasa, spike CVD vertikal — yang langsung balik itu **exhaustion**: aggressor terakhir udah commit dan gak ada yang nyisa buat ngelanjutin. Ini ninggalin wick yang ditujuin trade mean-reversion buat balik ke arahnya.

**Batas dan caveat jujur.** CVD itu **venue- dan feed-dependent**: spot vs perpetual, satu exchange vs lainnya, dan feed agregat vs satu-venue semua ngehasilin garis CVD yang *beda*, jadi divergensi di satu feed mungkin gak ada di feed lain. Tanda-trade itu **gak sempurna** — Lee & Ready salah-klasifikasi minoritas bermakna dari trade, dan di midpoint itu tebakan. Order iceberg dan likuiditas tersembunyi berarti size nganggur yang kamu simpulin bisa lebih besar atau lebih kecil dari keliatannya. Dan kayak sikap data-skeptis Insilico nekanin, edge hasil back-test dari divergensi CVD itu *sample-dependent* dan bisa decay — divergensi itu tell **probabilistik**, bukan jaminan. Tetap tag pembacaan CVD/footprint [Practitioner], sandar ke mekanisme price-impact [Established] di bawahnya, dan back-test sebelum percaya aturan spesifik mana pun.`,
      },
    },
    {
      id: 'practice',
      heading: { en: 'Practice', id: 'Latihan' },
      body: {
        en: `**1.** A market BUY and a market SELL each add to the bar’s volume. Explain how each affects delta δ, and what rule lets you sign a trade as buyer- or seller-initiated from the tape.

<details><summary>Answer</summary>
The aggressor is the incoming MARKET order. A market BUY LIFTS THE OFFER (trades at the ask, removing resting sell liquidity) and counts as +volume in delta; a market SELL HITS THE BID (trades at the bid) and counts as −volume. Delta is the net: δ = (aggressive buy volume) − (aggressive sell volume), and CVD = Σδ. You cannot read "buy"/"sell" directly off the tape, so you SIGN each trade with the LEE & READY (1991) rule: quote rule first — price above the prevailing quote MIDPOINT ⇒ buyer-initiated, below ⇒ seller-initiated; if exactly at the midpoint, use the TICK TEST (higher than the last different price ⇒ buy, lower ⇒ sell).
</details>

**2.** Price makes a new high but CVD makes a lower high. Name the condition, say which side is in trouble, and explain it in terms of Kyle’s λ and the model Δp = λ(1−a)·δ + noise.

<details><summary>Answer</summary>
This is a BEARISH CVD DIVERGENCE = ABSORPTION of the upside. Aggressive buyers keep lifting (CVD would normally make a matching new high) but a large PASSIVE SELLER is absorbing the flow, so price barely advances and CVD's high is lower / price's high is not backed. In the model, absorption a is high, so the effective impact λ(1−a) — recovered as the OLS slope λ̂ — collapses toward zero: the flow is real (Σδ still climbs) but it no longer moves price. The BUY side is in trouble: when the aggressors exhaust, the passive seller's inventory pushes price down. (Mirror: price new low + CVD higher low ⇒ a passive buyer absorbing ⇒ bullish.)
</details>

**3.** On the OrderFlowCVDSim with λ = 1.5, what value of λ̂ do you expect at absorption a = 0, a = 0.8, and a ≈ 1? Which verdict does each produce, and why does a near-zero flowTrend give "choppy" regardless of a?

<details><summary>Answer</summary>
λ̂ ≈ λ(1−a). At a = 0: λ̂ ≈ 1.5·1 = 1.5 ⇒ effective impact ≈ structural λ ⇒ verdict CONFIRMED (flow confirms price). At a = 0.8: λ̂ ≈ 1.5·0.2 = 0.30, which is below the 0.4·λ = 0.6 threshold ⇒ verdict ABSORPTION (a divergence; bearish if CVD is rising, bullish if falling). At a ≈ 1: λ̂ ≈ 0 ⇒ deep absorption, still ABSORPTION. With flowTrend ≈ 0 there is no net aggressor direction, so |cvdTrend| ≤ 0.05 (no clear flow trend) and the verdict is CHOPPY regardless of a — there is no flow to absorb, so absorption/divergence is meaningless. Lesson: only read divergence when a flow trend actually exists.
</details>

**4.** Why is CVD best read at a marked level, and what makes it unreliable enough to keep tagged [Practitioner]?

<details><summary>Answer</summary>
READ AT A LEVEL: flow at a random point is noise; at a decision level (value-area edge / POC / prior swing / S-R) it is information — a with-flow break = INITIATIVE (trade with it), an absorption divergence at the level = FADE. Combine with Market Profile (where the level is) and OI/positioning (who is offside). UNRELIABILITY: (a) CVD is VENUE- and FEED-DEPENDENT — spot vs perps, exchange A vs B, aggregated vs single-venue give different CVD lines, so a divergence on one feed may not exist on another; (b) trade-signing (Lee-Ready) is IMPERFECT and at the midpoint is a guess; (c) icebergs / hidden liquidity distort the inferred resting size; (d) any backtested CVD edge is sample-dependent and can decay. So a divergence is a PROBABILISTIC tell — keep it [Practitioner], lean on the [Established] λ mechanism beneath, and backtest.
</details>`,
        id: `**1.** Market BUY dan market SELL masing-masing nambah ke volume bar. Jelasin gimana masing-masing memengaruhi delta δ, dan aturan apa yang ngebolehin kamu nandain trade sebagai buyer- atau seller-initiated dari tape.

<details><summary>Jawaban</summary>
Aggressor itu MARKET order masuk. Market BUY NGANGKAT OFFER (trade di ask, ngehapus likuiditas sell nganggur) dan dihitung +volume di delta; market SELL HANTAM BID (trade di bid) dan dihitung −volume. Delta itu net-nya: δ = (volume buy agresif) − (volume sell agresif), dan CVD = Σδ. Kamu gak bisa baca "buy"/"sell" langsung dari tape, jadi kamu TANDAI tiap trade dengan aturan LEE & READY (1991): quote rule dulu — harga di atas MIDPOINT quote yang berlaku ⇒ buyer-initiated, di bawah ⇒ seller-initiated; kalau persis di midpoint, pakai TICK TEST (lebih tinggi dari harga beda terakhir ⇒ buy, lebih rendah ⇒ sell).
</details>

**2.** Harga bikin high baru tapi CVD bikin high yang lebih rendah. Sebutkan kondisinya, sebutkan sisi mana yang dalam masalah, dan jelasin dalam istilah λ Kyle dan model Δp = λ(1−a)·δ + noise.

<details><summary>Jawaban</summary>
Ini DIVERGENSI CVD BEARISH = ABSORPSI sisi atas. Buyer agresif terus ngangkat (CVD biasanya bikin high baru yang cocok) tapi PENJUAL PASIF besar lagi nyerap flow, jadi harga nyaris gak maju dan high CVD lebih rendah / high harga gak didukung. Di model, absorpsi a tinggi, jadi impact efektif λ(1−a) — direcover sebagai slope OLS λ̂ — ambruk ke arah nol: flow-nya nyata (Σδ masih naik) tapi dia gak lagi ngegerakin harga. Sisi BUY dalam masalah: pas aggressor habis, inventory penjual pasif ngedorong harga turun. (Cermin: harga low baru + CVD low lebih tinggi ⇒ pembeli pasif nyerap ⇒ bullish.)
</details>

**3.** Di OrderFlowCVDSim dengan λ = 1.5, nilai λ̂ apa yang kamu harapin di absorpsi a = 0, a = 0.8, dan a ≈ 1? Verdict mana yang dihasilin masing-masing, dan kenapa flowTrend mendekati-nol ngasih "choppy" terlepas dari a?

<details><summary>Jawaban</summary>
λ̂ ≈ λ(1−a). Di a = 0: λ̂ ≈ 1.5·1 = 1.5 ⇒ impact efektif ≈ λ struktural ⇒ verdict CONFIRMED (flow konfirmasi harga). Di a = 0.8: λ̂ ≈ 1.5·0.2 = 0.30, yang di bawah ambang 0.4·λ = 0.6 ⇒ verdict ABSORPTION (divergensi; bearish kalau CVD naik, bullish kalau turun). Di a ≈ 1: λ̂ ≈ 0 ⇒ absorpsi dalam, tetap ABSORPTION. Dengan flowTrend ≈ 0 gak ada arah aggressor net, jadi |cvdTrend| ≤ 0.05 (gak ada trend flow jelas) dan verdict-nya CHOPPY terlepas dari a — gak ada flow buat diserap, jadi absorpsi/divergensi gak bermakna. Pelajaran: cuma baca divergensi pas trend flow beneran ada.
</details>

**4.** Kenapa CVD paling baik dibaca di level yang ditandai, dan apa yang bikin dia cukup gak-andal buat tetap di-tag [Practitioner]?

<details><summary>Jawaban</summary>
DIBACA DI LEVEL: flow di titik acak itu noise; di level keputusan (tepi value-area / POC / swing sebelumnya / S-R) itu informasi — break searah-flow = INITIATIVE (trade searah), divergensi absorpsi di level = FADE. Gabungkan dengan Market Profile (di mana level-nya) dan OI/positioning (siapa yang offside). KETIDAKANDALAN: (a) CVD itu VENUE- dan FEED-DEPENDENT — spot vs perp, exchange A vs B, agregat vs satu-venue ngasih garis CVD beda, jadi divergensi di satu feed mungkin gak ada di feed lain; (b) tanda-trade (Lee-Ready) GAK SEMPURNA dan di midpoint itu tebakan; (c) iceberg / likuiditas tersembunyi nge-distorsi size nganggur yang disimpulin; (d) edge CVD hasil back-test mana pun sample-dependent dan bisa decay. Jadi divergensi itu tell PROBABILISTIK — tetap [Practitioner], sandar ke mekanisme λ [Established] di bawah, dan back-test.
</details>`,
      },
    },
    {
      id: 'connections',
      heading: { en: 'Connections', id: 'Koneksi' },
      body: {
        en: `- **The price-impact spine**: [Kyle (1985)](item:kyle-1985) — the linear law Δp = λ·(order flow) with λ the inverse of market depth is the exact mechanism that makes CVD a price-predictive quantity; absorption is a measured collapse of effective λ.
- **The positioning layer**: [OI & positioning](item:husslin-oi-positioning) — open interest and funding tell you *who is offside* and likely to be forced, while CVD tells you *when* their break shows up in the aggressive flow; this module is that prereq’s order-flow companion.
- **Where the levels come from**: [Market Profile / TPO](item:market-profile-tpo) — POC and value-area edges give the decision levels at which a CVD confirmation (initiative break) or divergence (absorption fade) is worth reading; flow is informative at a level, noise at random.
- **The footprint-confirmed routine intraday**: [@Luckshuryy’s order flow](item:luckshury-orderflow) — the same δ / CVD / absorption machinery applied as a fixed reversal routine with sessions and OI, showing how this mechanism is used in practice.`,
        id: `- **Tulang punggung price-impact**: [Kyle (1985)](item:kyle-1985) — hukum linear Δp = λ·(order flow) dengan λ kebalikan kedalaman pasar itu mekanisme persis yang bikin CVD jadi kuantitas yang prediktif-harga; absorpsi itu ambruknya λ efektif yang terukur.
- **Lapisan positioning**: [OI & positioning](item:husslin-oi-positioning) — open interest dan funding ngasih tau kamu *siapa yang offside* dan kemungkinan dipaksa, sementara CVD ngasih tau kamu *kapan* break mereka muncul di flow agresif; modul ini itu pendamping order-flow dari prereq itu.
- **Dari mana level-nya datang**: [Market Profile / TPO](item:market-profile-tpo) — POC dan tepi value-area ngasih level keputusan di mana konfirmasi CVD (break initiative) atau divergensi (fade absorpsi) layak dibaca; flow itu informatif di level, noise di acak.
- **Rutinitas terkonfirmasi-footprint intraday**: [order flow @Luckshuryy](item:luckshury-orderflow) — mesin δ / CVD / absorpsi yang sama diterapkan sebagai rutinitas reversal tetap dengan session dan OI, nunjukin gimana mekanisme ini dipakai dalam praktik.`,
      },
    },
    {
      id: 'sources',
      heading: { en: 'Sources', id: 'Sumber' },
      body: {
        en: `**Educational, not financial advice.** This module joins a [Practitioner] charting craft (footprint & CVD) to its [Established] scientific spine. CVD/footprint reads — absorption, exhaustion, divergence — are practitioner heuristics, not guarantees: CVD is venue- and feed-dependent, trade-signing is imperfect, and a divergence is a probabilistic tell whose edge is sample-dependent and can decay. Backtest before you trust any specific rule, and keep the practitioner layer tagged as such.

- **Kyle, A. S.** (1985). "Continuous Auctions and Insider Trading." *Econometrica* 53(6):1315-1335. The linear price-impact law Δp = λ·(order flow); λ as inverse market depth — the spine that makes net order flow (and thus CVD) price-predictive. [Established]
- **Lee, C. M. C., & Ready, M. J.** (1991). "Inferring Trade Direction from Intraday Data." *Journal of Finance* 46(2):733-746. The quote rule + tick test for signing trades buyer- or seller-initiated — the operational basis of delta and CVD. [Established]
- **Easley, D., López de Prado, M., & O’Hara, M.** (2012). "Flow Toxicity and Liquidity in a High-Frequency World" (VPIN). *Review of Financial Studies* 25(5):1457-1493. Order-flow imbalance as a measurable *toxicity* / adverse-selection pressure on liquidity providers — exactly what absorption-then-reversal expresses. [Established]
- **Cont, R., Kukanov, A., & Stoikov, S.** (2014). "The Price Impact of Order Book Events." *Journal of Financial Econometrics* 12(1):47-88. Empirically, short-horizon price changes are linear in order-flow imbalance with slope inversely proportional to depth — the data-grounded form of Kyle’s λ. [Established]
- **Bouchaud, J.-P., Bonart, J., Donier, J., & Gould, M.** (2018). *Trades, Quotes and Prices: Financial Markets Under the Microscope.* Cambridge University Press. Limit-order-book mechanics and price impact, the broader microstructure synthesis behind order-flow reading. [Established]
- **Footprint / CVD charting** — practitioner tooling and reads (the Jigsaw Trading / Market Delta lineage, Peter Davies; modern crypto/futures order-flow educators). Footprint shows bid×ask volume per price; CVD = Σδ; absorption, exhaustion and CVD divergence are practitioner heuristics on top of the science above. [Practitioner]`,
        id: `**Edukasi, bukan nasihat keuangan.** Modul ini ngegabung kerajinan charting [Practitioner] (footprint & CVD) dengan tulang punggung ilmiah [Established]-nya. Pembacaan CVD/footprint — absorpsi, exhaustion, divergensi — itu heuristik praktisi, bukan jaminan: CVD itu venue- dan feed-dependent, tanda-trade gak sempurna, dan divergensi itu tell probabilistik yang edge-nya sample-dependent dan bisa decay. Back-test sebelum percaya aturan spesifik mana pun, dan tetap tag lapisan praktisi sebagai begitu.

- **Kyle, A. S.** (1985). "Continuous Auctions and Insider Trading." *Econometrica* 53(6):1315-1335. Hukum price-impact linear Δp = λ·(order flow); λ sebagai kebalikan kedalaman pasar — tulang punggung yang bikin net order flow (dan jadi CVD) prediktif-harga. [Established]
- **Lee, C. M. C., & Ready, M. J.** (1991). "Inferring Trade Direction from Intraday Data." *Journal of Finance* 46(2):733-746. Quote rule + tick test buat nandain trade buyer- atau seller-initiated — basis operasional delta dan CVD. [Established]
- **Easley, D., López de Prado, M., & O’Hara, M.** (2012). "Flow Toxicity and Liquidity in a High-Frequency World" (VPIN). *Review of Financial Studies* 25(5):1457-1493. Order-flow imbalance sebagai *toxicity* / tekanan adverse-selection yang bisa-diukur pada penyedia likuiditas — persis apa yang diekspresiin absorpsi-lalu-reversal. [Established]
- **Cont, R., Kukanov, A., & Stoikov, S.** (2014). "The Price Impact of Order Book Events." *Journal of Financial Econometrics* 12(1):47-88. Secara empiris, perubahan harga horizon-pendek itu linear terhadap order-flow imbalance dengan slope berbanding terbalik dengan kedalaman — bentuk berlandaskan-data dari λ Kyle. [Established]
- **Bouchaud, J.-P., Bonart, J., Donier, J., & Gould, M.** (2018). *Trades, Quotes and Prices: Financial Markets Under the Microscope.* Cambridge University Press. Mekanik limit-order-book dan price impact, sintesis microstructure lebih luas di balik pembacaan order-flow. [Established]
- **Charting footprint / CVD** — tooling dan pembacaan praktisi (silsilah Jigsaw Trading / Market Delta, Peter Davies; edukator order-flow crypto/futures modern). Footprint nunjukin volume bid×ask per harga; CVD = Σδ; absorpsi, exhaustion, dan divergensi CVD itu heuristik praktisi di atas sains di atas. [Practitioner]`,
      },
    },
  ],

  audio: { enabled: true },

  selfTest: [
    {
      sectionId: 'intuition',
      question: { en: `How does a market buy vs a market sell affect delta, and how does that build into the absorption read?`, id: `Gimana market buy vs market sell memengaruhi delta, dan gimana itu kebangun jadi pembacaan absorpsi?` },
      prompt: { en: 'Before continuing, try answering:', id: 'Sebelum lanjut, coba jawab:' },
      answer: {
        en: `The aggressor is the incoming MARKET order. A market BUY lifts the offer (trades at the ask) ⇒ +volume; a market SELL hits the bid ⇒ −volume. Delta is the net per bar, δ = (aggressive buys) − (aggressive sells), and CVD = Σδ. You infer the side with the LEE & READY (1991) rule (quote rule above/below the midpoint, tick test at the midpoint). The HEALTHY case: δ positive, CVD rising, price rising — flow CONFIRMS the move (Δp ≈ λ·δ). ABSORPTION is the decoupling: heavy aggressive buying (δ large, CVD still climbing) but price stops advancing ⇒ a large PASSIVE seller is soaking up the flow ⇒ bearish (when buyers exhaust, price falls). Mirror for bullish. The clean signature is a CVD DIVERGENCE — price new high, CVD lower high (or price new low, CVD higher low).`,
        id: `Aggressor itu MARKET order masuk. Market BUY ngangkat offer (trade di ask) ⇒ +volume; market SELL hantam bid ⇒ −volume. Delta itu net per bar, δ = (buy agresif) − (sell agresif), dan CVD = Σδ. Kamu nyimpulin sisinya dengan aturan LEE & READY (1991) (quote rule di atas/bawah midpoint, tick test di midpoint). Kasus SEHAT: δ positif, CVD naik, harga naik — flow KONFIRMASI gerakan (Δp ≈ λ·δ). ABSORPSI itu decoupling-nya: pembelian agresif berat (δ besar, CVD masih naik) tapi harga berhenti maju ⇒ penjual PASIF besar lagi nyerap flow ⇒ bearish (pas buyer habis, harga jatuh). Cermin buat bullish. Tanda bersihnya itu DIVERGENSI CVD — harga high baru, CVD high lebih rendah (atau harga low baru, CVD low lebih tinggi).`,
      },
    },
    {
      sectionId: 'formalization',
      question: { en: `Write the absorption model and explain what the OLS slope λ̂ recovers and how the simulator's verdict is set.`, id: `Tulis model absorpsi dan jelasin apa yang direcover slope OLS λ̂ dan gimana verdict simulator disetel.` },
      prompt: { en: 'Before continuing, try answering:', id: 'Sebelum lanjut, coba jawab:' },
      answer: {
        en: `Model: Δpₜ = λ(1−a)·δₜ + εₜ, where δ is the signed aggressor imbalance, λ is Kyle's price-impact coefficient (inverse depth), a ∈ [0,1] is the absorbed fraction, and ε is micro-noise. CVD = Σδ accumulates the FULL flow regardless of a, so as a → 1 CVD keeps climbing while price flattens (divergence). The OLS slope of Δp on δ, λ̂ = Cov(Δp,δ)/Var(δ), recovers the EFFECTIVE impact λ̂ ≈ λ(1−a): healthy ⇒ λ̂ ≈ λ; heavy absorption ⇒ λ̂ → 0. The simulator's VERDICT: choppy if there is no clear CVD trend (|cvdTrend| ≤ 0.05); absorption if the effective impact is below 0.4·λ (a divergence — bearish if CVD rises into a stalling price, bullish if it falls); otherwise confirmed.`,
        id: `Model: Δpₜ = λ(1−a)·δₜ + εₜ, di mana δ itu aggressor imbalance bertanda, λ itu koefisien price-impact Kyle (kebalikan kedalaman), a ∈ [0,1] itu fraksi yang diserap, dan ε itu micro-noise. CVD = Σδ ngakumulasi flow PENUH terlepas dari a, jadi pas a → 1 CVD terus naik sementara harga mendatar (divergensi). Slope OLS dari Δp pada δ, λ̂ = Cov(Δp,δ)/Var(δ), ngerecover impact EFEKTIF λ̂ ≈ λ(1−a): sehat ⇒ λ̂ ≈ λ; absorpsi berat ⇒ λ̂ → 0. VERDICT simulator: choppy kalau gak ada trend CVD jelas (|cvdTrend| ≤ 0.05); absorption kalau impact efektif di bawah 0.4·λ (divergensi — bearish kalau CVD naik ke harga mandek, bullish kalau turun); selain itu confirmed.`,
      },
    },
    {
      sectionId: 'applications',
      question: { en: `At a resistance level, contrast a "confirmed" break with an "absorption" divergence, and give two reasons CVD stays tagged [Practitioner].`, id: `Di level resistance, kontraskan break "confirmed" dengan divergensi "absorption," dan kasih dua alasan CVD tetap di-tag [Practitioner].` },
      prompt: { en: 'Before continuing, try answering:', id: 'Sebelum lanjut, coba jawab:' },
      answer: {
        en: `Mark the level FIRST (value-area edge / POC / prior swing / S-R); flow is information at a level, noise at random. CONFIRMED (with-flow break = INITIATIVE): price breaks resistance while CVD breaks out with it — δ strongly positive, λ̂ ≈ λ, the break is backed by real, rewarded flow ⇒ trade WITH it. ABSORPTION (divergence = FADE): price makes a new high but CVD makes a LOWER high — heavy buying, no follow-through, λ̂ collapsing ⇒ a passive seller absorbs at the level ⇒ fade to the downside (mirror at support = fade up). Combine with Market Profile (where the level is) and OI/positioning (who is offside). [Practitioner] because: (1) CVD is VENUE-/FEED-DEPENDENT (spot vs perps, exchange A vs B, aggregated vs single-venue give different lines); (2) trade-signing is imperfect (and a guess at the midpoint); plus icebergs/hidden liquidity and sample-dependent decay make a divergence a probabilistic tell, not a guarantee.`,
        id: `Tandai level-nya DULU (tepi value-area / POC / swing sebelumnya / S-R); flow itu informasi di level, noise di acak. CONFIRMED (break searah-flow = INITIATIVE): harga nembus resistance sementara CVD breakout bareng dia — δ kuat positif, λ̂ ≈ λ, break didukung flow nyata yang dibayar ⇒ trade SEARAH. ABSORPTION (divergensi = FADE): harga bikin high baru tapi CVD bikin high LEBIH RENDAH — pembelian berat, gak ada follow-through, λ̂ ambruk ⇒ penjual pasif nyerap di level ⇒ fade ke bawah (cermin di support = fade ke atas). Gabungkan dengan Market Profile (di mana level-nya) dan OI/positioning (siapa yang offside). [Practitioner] karena: (1) CVD itu VENUE-/FEED-DEPENDENT (spot vs perp, exchange A vs B, agregat vs satu-venue ngasih garis beda); (2) tanda-trade gak sempurna (dan tebakan di midpoint); plus iceberg/likuiditas tersembunyi dan decay sample-dependent bikin divergensi itu tell probabilistik, bukan jaminan.`,
      },
    },
  ],
};
