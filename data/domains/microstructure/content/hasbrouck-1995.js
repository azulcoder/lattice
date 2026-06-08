export const CONTENT = {
  itemId: 'hasbrouck-1995',
  estimatedReadMinutes: 38,

  author: {
    fullName: { en: 'Joel Hasbrouck', id: 'Joel Hasbrouck' },
    affiliation: {
      en: 'Kenneth G. Langone Professor of Business Administration and Professor of Finance, New York University Stern School of Business.',
      id: 'Kenneth G. Langone Professor of Business Administration dan Professor of Finance, New York University Stern School of Business.'
    },
    tagline: {
      en: 'When one security trades in many places, where is its price actually discovered? Hasbrouck turns that question into an econometric measurement — the "information share" — by treating the venues as noisy readings of a single hidden efficient price.',
      id: 'Pas satu sekuritas trade di banyak tempat, di mana harganya sebenernya ditemuin? Hasbrouck ngubah pertanyaan itu jadi pengukuran ekonometrik — "information share" — dengan memperlakukan venue sebagai pembacaan ber-noise dari satu efficient price tersembunyi.'
    },
    bio: {
      en: `Joel Hasbrouck is one of the founders of modern empirical market microstructure — the person who, more than anyone, made the field *measurable*. A long-time professor at NYU Stern, his work supplies the econometric machinery the field runs on: the **efficient-price / random-walk decomposition** of transaction prices, vector-autoregression measures of the information content of trades, and — in this paper — the **information share** for price discovery across venues. His graduate text *Empirical Market Microstructure* (2007), also in this catalog, is the standard reference that organizes these tools.

This paper is characteristic Hasbrouck: take an idea everyone has loose intuitions about ("price discovery happens mostly at the NYSE"), define it precisely as a variance decomposition of an unobservable common efficient price, and produce a number you can actually compute from quote data. The result reframed a qualitative debate as an estimation problem and gave the literature a workhorse statistic.`,
      id: `Joel Hasbrouck itu salah satu pendiri empirical market microstructure modern — orang yang, lebih dari siapa pun, bikin field-nya *terukur*. Profesor lama di NYU Stern, kerjaannya nyediain mesin ekonometrik yang field-nya jalanin: **dekomposisi efficient-price / random-walk** dari transaction price, ukuran vector-autoregression dari information content trade, dan — di paper ini — **information share** buat price discovery lintas venue. Teks pascasarjana-nya *Empirical Market Microstructure* (2007), juga di katalog ini, itu referensi standar yang ngeorganisir tool-tool ini.

Paper ini khas Hasbrouck: ambil ide yang semua orang punya intuisi longgar soalnya ("price discovery mostly terjadi di NYSE"), definisiin dia presisi sebagai variance decomposition dari efficient price bersama yang gak teramati, dan hasilin angka yang beneran bisa kamu hitung dari data quote. Hasilnya nge-reframe debat kualitatif jadi masalah estimasi dan ngasih literatur statistik andalan.`
    },
    focus: {
      en: `The same security often trades in several places at once — a stock on the NYSE and regional exchanges, a currency on competing platforms, a crypto asset on many exchanges. Each venue posts its own price, and those prices are *cointegrated*: they wander together and never permanently separate, because they are all noisy readings of one underlying efficient value. Hasbrouck's question is allocational: of the new information that moves that common efficient price, **what fraction is first impounded at each venue?** That fraction is the venue's **information share**. The method models the venue prices as a cointegrated vector system (a vector error correction model), extracts the single common random-walk component they share, and decomposes the variance of *its* innovations across the venues. The punchline from his data — the thirty Dow stocks — is that price discovery is highly concentrated: the NYSE carries a **median information share of about 92.7%**, even though regional venues handle meaningful volume. Where a price is *discovered* is not the same as where it is *traded*.`,
      id: `Sekuritas yang sama sering trade di beberapa tempat sekaligus — saham di NYSE dan regional exchange, mata uang di platform yang bersaing, aset crypto di banyak exchange. Tiap venue posting harganya sendiri, dan harga-harga itu *cointegrated*: mereka berkelana bareng dan gak pernah permanen berpisah, karena mereka semua pembacaan ber-noise dari satu efficient value di bawahnya. Pertanyaan Hasbrouck itu alokatif: dari informasi baru yang gerakin efficient price bersama itu, **fraksi berapa yang pertama diserap di tiap venue?** Fraksi itu **information share** venue-nya. Metodenya ngemodelin harga venue sebagai sistem vektor cointegrated (vector error correction model), ngekstrak satu common random-walk component yang mereka bagi, dan ngedekomposisi varians inovasi *-nya* lintas venue. Punchline dari data-nya — tiga puluh saham Dow — itu price discovery sangat terkonsentrasi: NYSE bawa **median information share sekitar 92.7%**, walaupun venue regional nanganin volume yang berarti. Di mana harga *ditemuin* itu gak sama dengan di mana dia *di-trade*.`
    },
    intellectualLineage: {
      en: `The statistical backbone is the **cointegration / error-correction** revolution of **Engle and Granger (1987)** and the common-trends decomposition of **Stock and Watson (1988)** and **Beveridge-Nelson (1981)**: a set of nonstationary prices that move together has a common stochastic trend (the efficient price) plus stationary deviations. The microstructure idea — that observed prices are a **random-walk efficient price plus transitory microstructure noise** — is Hasbrouck's own program, descended from **Roll (1984)** (spread from price reversals) and the information economics of **Kyle (1985)** and **Glosten-Milgrom (1985)**. The closest contemporary is **Gonzalo and Granger (1995)**, whose permanent-transitory "component share" is the leading *alternative* price-discovery measure — built only from the error-correction (adjustment-speed) coefficients, ignoring innovation variances, where Hasbrouck's information share weights by them. The tension between the two, and the non-uniqueness of the information share under correlated innovations, set off a long methodological literature (de Jong 2002; Baillie, Booth, Tse, Zabotina 2002; Yan and Zivot 2010; Putniņš 2013).`,
      id: `Tulang punggung statistiknya itu revolusi **cointegration / error-correction** dari **Engle dan Granger (1987)** dan dekomposisi common-trends dari **Stock dan Watson (1988)** dan **Beveridge-Nelson (1981)**: sekumpulan harga nonstationary yang gerak bareng punya common stochastic trend (efficient price) plus deviasi stationary. Ide microstructure-nya — bahwa harga teramati itu **random-walk efficient price plus transitory microstructure noise** — itu program Hasbrouck sendiri, turunan dari **Roll (1984)** (spread dari price reversal) dan ekonomi informasi **Kyle (1985)** dan **Glosten-Milgrom (1985)**. Kontemporer terdeketnya itu **Gonzalo dan Granger (1995)**, yang "component share" permanent-transitory-nya itu ukuran price-discovery *alternatif* terdepan — dibangun cuma dari koefisien error-correction (kecepatan-penyesuaian), ngabaikin varians inovasi, di mana information share Hasbrouck nimbang dengannya. Ketegangan antara keduanya, dan non-keunikan information share di bawah inovasi berkorelasi, ngelahirin literatur metodologis panjang (de Jong 2002; Baillie, Booth, Tse, Zabotina 2002; Yan dan Zivot 2010; Putniņš 2013).`
    },
    keyCollaborators: {
      en: `Hasbrouck is largely a solo-authored theorist-econometrician, but his work sits in close dialogue with a generation of microstructure empiricists. The defining intellectual counterpart for *this* paper is **Clive Granger** (via Gonzalo-Granger), and the broader cointegration toolkit comes from **Robert Engle**. In microstructure his touchstones are **Richard Roll** (the efficient-price/transitory-noise split), **Albert Kyle** and **Lawrence Glosten / Paul Milgrom** (information-based price formation), and **Maureen O'Hara** (whose textbook frames the same field). Later contributors who refined or contested the information share include **Frank de Jong**, **Richard Baillie**, **Bingcheng Yan and Eric Zivot**, and **Tālis Putniņš**.`,
      id: `Hasbrouck sebagian besar theorist-ekonometrikus solo-author, tapi kerjaannya ada dalam dialog deket sama satu generasi empiris microstructure. Padanan intelektual yang ngedefinisiin buat paper *ini* itu **Clive Granger** (lewat Gonzalo-Granger), dan toolkit cointegration yang lebih luas datang dari **Robert Engle**. Di microstructure tonggaknya itu **Richard Roll** (split efficient-price/transitory-noise), **Albert Kyle** dan **Lawrence Glosten / Paul Milgrom** (price formation berbasis-informasi), dan **Maureen O'Hara** (yang textbook-nya ngeframe field yang sama). Kontributor belakangan yang nyempurnain atau ngebantah information share termasuk **Frank de Jong**, **Richard Baillie**, **Bingcheng Yan dan Eric Zivot**, dan **Tālis Putniņš**.`
    },
    legacy: {
      en: `The "information share" became *the* standard way to answer "where is the price discovered?", and the question now spans far more than equities: cross-listed stocks and their home markets, ETFs versus their baskets, futures versus spot, on-the-run versus off-the-run Treasuries, FX across platforms, credit default swaps versus bonds, and — most recently — the same crypto asset across many exchanges and the spot/perp split. Two things make the paper durable. First, it gave a **precise, computable definition** of an idea that had been hand-waved: price discovery is the share of the common efficient-price innovation variance a venue contributes, estimable from quote data via a VECM. Second, it honestly surfaced the method's **central caveat** — when venues' innovations are contemporaneously correlated, the information share is *not point-identified* and must be reported as Cholesky-ordering bounds — which spawned the component-share alternative and a productive reconciliation literature. For anyone studying fragmented markets (and almost all modern markets are fragmented), this paper is the measurement primitive: it turns "who leads?" into a number, with its uncertainty stated.`,
      id: `"Information share" jadi *cara* standar buat ngejawab "di mana harga ditemuin?", dan pertanyaannya sekarang ngelampaui jauh lebih dari equity: saham cross-listed dan home market-nya, ETF lawan basket-nya, futures lawan spot, on-the-run lawan off-the-run Treasury, FX lintas platform, credit default swap lawan obligasi, dan — paling baru — aset crypto yang sama lintas banyak exchange dan split spot/perp. Dua hal bikin paper-nya awet. Pertama, dia ngasih **definisi yang presisi, bisa dihitung** dari ide yang sebelumnya cuma dilambai-tangan: price discovery itu share dari common efficient-price innovation variance yang venue kontribusiin, bisa diestimasi dari data quote lewat VECM. Kedua, dia jujur ngemunculin **caveat sentral** metodenya — pas inovasi venue contemporaneously correlated, information share-nya *gak point-identified* dan harus dilaporin sebagai bound urutan Cholesky — yang ngelahirin alternatif component-share dan literatur rekonsiliasi yang produktif. Buat siapa pun yang ngestudi pasar terfragmentasi (dan hampir semua pasar modern terfragmentasi), paper ini primitif pengukurannya: dia ngubah "siapa yang mimpin?" jadi angka, dengan ketidakpastiannya dinyatakan.`
    },
    keyWorks: [
      { year: 1995, title: 'One Security, Many Markets: Determining the Contributions to Price Discovery (this item)', venue: 'Journal of Finance' },
      { year: 1991, title: 'Measuring the Information Content of Stock Trades', venue: 'Journal of Finance' },
      { year: 1993, title: 'Assessing the Quality of a Security Market: A New Approach to Transaction-Cost Measurement', venue: 'Review of Financial Studies' },
      { year: 2007, title: 'Empirical Market Microstructure (the graduate text; also in this catalog)', venue: 'Oxford University Press' },
      { year: 2009, title: 'Trading Costs and Returns for U.S. Equities: Estimating Effective Costs from Daily Data', venue: 'Journal of Finance' },
    ],
  },

  sections: [
    // ─────────────── 1. motivation ───────────────
    {
      id: 'motivation',
      heading: { en: 'Why this matters', id: 'Kenapa ini penting' },
      body: {
        en: `A single stock in the Dow does not trade in one place. In Hasbrouck's data it trades on the NYSE *and* on regional exchanges (Boston, Cincinnati, Pacific, Philadelphia, Midwest) and through other venues — all at once, all in the "same" security. Each venue continuously posts its own bid and ask. So there is not one price for IBM; there are several, ticking in parallel, never exactly equal.

They are not, however, free to wander apart. Because they are claims on the same cash flows, the prices are **cointegrated**: arbitrage and substitution keep them tethered, so the *gaps* between venues are stationary (they mean-revert) even as the common level follows a random walk. Picture several dogs on leashes held by one walker: each dog roams a little, but they all go where the walker goes. The walker is the **efficient price** — the unobservable common value that impounds fundamental information.

Here is the question the paper makes precise. New information arrives and moves the efficient price. *Which venue's quotes move first* — where is that new information actually impounded into prices? Everyone "knows" the NYSE leads, but knowing is not measuring. Hasbrouck defines a venue's **information share** as the fraction of the variance of the efficient-price innovation that originates in that venue, and shows how to estimate it from the quote data alone.

Two payoffs follow. First, a clean separation of **price discovery from trading volume**: a venue can print enormous volume yet contribute little new information (it mostly *follows*), or carry modest volume yet lead. For the Dow stocks the NYSE's median information share is about **92.7%** — price discovery is far more concentrated than volume. Second, a general-purpose tool: the same machinery now answers "who leads?" for ETFs vs. their baskets, futures vs. spot, cross-listed shares vs. their home market, and the same crypto asset across exchanges. The paper is less a result about the NYSE than a **measurement instrument** for any fragmented market — which today is nearly all of them.`,
        id: `Satu saham di Dow gak trade di satu tempat. Di data Hasbrouck dia trade di NYSE *dan* di regional exchange (Boston, Cincinnati, Pacific, Philadelphia, Midwest) dan lewat venue lain — semua sekaligus, semua di sekuritas yang "sama". Tiap venue terus-menerus posting bid dan ask-nya sendiri. Jadi gak ada satu harga buat IBM; ada beberapa, berdetak paralel, gak pernah persis sama.

Tapi mereka gak bebas berkelana menjauh. Karena mereka klaim atas cash flow yang sama, harga-harga itu **cointegrated**: arbitrage dan substitusi nahan mereka teriket, jadi *gap* antar venue itu stationary (mean-revert) bahkan pas level bersamanya ngikut random walk. Bayangin beberapa anjing di tali yang dipegang satu pejalan: tiap anjing berkeliaran sedikit, tapi mereka semua pergi ke mana pejalannya pergi. Pejalannya itu **efficient price** — common value gak teramati yang nyerap informasi fundamental.

Ini pertanyaan yang paper-nya bikin presisi. Informasi baru datang dan gerakin efficient price. *Quote venue mana yang gerak duluan* — di mana informasi baru itu sebenernya diserap ke harga? Semua orang "tau" NYSE mimpin, tapi tau itu bukan ngukur. Hasbrouck ngedefinisiin **information share** sebuah venue sebagai fraksi varians inovasi efficient-price yang berasal dari venue itu, dan nunjukin gimana ngestimasinya cuma dari data quote.

Dua payoff ngikut. Pertama, pemisahan bersih **price discovery dari trading volume**: sebuah venue bisa nge-print volume gede tapi nyumbang sedikit informasi baru (dia mostly *ngikut*), atau bawa volume sederhana tapi mimpin. Buat saham Dow median information share NYSE sekitar **92.7%** — price discovery jauh lebih terkonsentrasi daripada volume. Kedua, tool serbaguna: mesin yang sama sekarang ngejawab "siapa yang mimpin?" buat ETF vs basket-nya, futures vs spot, saham cross-listed vs home market-nya, dan aset crypto yang sama lintas exchange. Paper-nya kurang soal hasil tentang NYSE dan lebih **instrumen pengukuran** buat pasar terfragmentasi mana pun — yang hari ini hampir semuanya.`
      }
    },

    // ─────────────── 2. intuition ───────────────
    {
      id: 'intuition',
      heading: { en: 'Intuition', id: 'Intuisi' },
      body: {
        en: `Strip the problem to two venues, A and B, quoting the same stock. Both prices share one hidden efficient price $m_t$ that follows a random walk (it only moves on genuine news). Each observed price is that efficient price plus a small, temporary microstructure wobble (the bid-ask bounce, inventory effects, stale quotes):
$$p^A_t = m_t + s^A_t, \\qquad p^B_t = m_t + s^B_t,$$
where $s^A, s^B$ are stationary noise. The *difference* $p^A_t - p^B_t = s^A_t - s^B_t$ is stationary — it wiggles around zero and reverts. That is exactly cointegration with the vector $(1,-1)$.

Now ask: when a piece of news nudges $m_t$ up, **whose quote reflects it first?** If A's quote jumps immediately and B's quote only catches up over the next few seconds, then A *led*: the news entered prices through A. Mechanically, this shows up as **error correction**. When the two prices drift apart, who moves to close the gap? If B always moves toward A (and A stays put), then A is the source of the common price and B is a follower — A "doesn't error-correct," B does all the adjusting.

Hasbrouck's insight is to make "led" a **variance statement**. Write the efficient price's one-step innovation — the genuinely new information each instant — as a weighted combination of the two venues' surprise quote moves: $\\Delta m_t = \\psi_A \\varepsilon^A_t + \\psi_B \\varepsilon^B_t$. The **information share** of venue A is the fraction of $\\mathrm{Var}(\\Delta m_t)$ that A's innovations contribute. If almost all of the efficient-price variance traces to surprises in A's quotes, A's information share is near 1 and B's near 0.

One honest complication makes the measure subtle. If A's and B's innovations are *contemporaneously correlated* — both quotes react in the *same instant*, so you cannot tell from the data who truly moved first — then the split between them is not unique. Hasbrouck handles this by computing the information share under different orderings (a Cholesky factorization), reporting an **upper and lower bound**: assign the shared, simultaneous reaction first to A (its maximum) and then to B (its minimum). When the venues react at slightly different instants (low correlation), the bounds are tight and the answer is sharp; when they react together, the bounds are wide and the honest report is a range. The 92.7% NYSE figure is a midpoint of such bounds across the Dow stocks.`,
        id: `Kupas masalahnya ke dua venue, A dan B, nge-quote saham yang sama. Kedua harga bagi satu hidden efficient price $m_t$ yang ngikut random walk (dia cuma gerak di berita asli). Tiap harga teramati itu efficient price plus goyangan microstructure kecil, sementara (bid-ask bounce, efek inventory, stale quote):
$$p^A_t = m_t + s^A_t, \\qquad p^B_t = m_t + s^B_t,$$
di mana $s^A, s^B$ itu noise stationary. *Selisih* $p^A_t - p^B_t = s^A_t - s^B_t$ itu stationary — dia bergoyang di sekitar nol dan balik. Itu persis cointegration dengan vektor $(1,-1)$.

Sekarang tanya: pas sepotong berita ngedorong $m_t$ naik, **quote siapa yang mencerminkannya duluan?** Kalau quote A langsung loncat dan quote B baru ngejar beberapa detik berikutnya, maka A *mimpin*: berita masuk ke harga lewat A. Secara mekanis, ini muncul sebagai **error correction**. Pas dua harga melenceng, siapa yang gerak buat nutup gap? Kalau B selalu gerak ke arah A (dan A diem), maka A itu sumber harga bersama dan B follower — A "gak error-correct," B yang ngelakuin semua penyesuaian.

Wawasan Hasbrouck itu bikin "mimpin" jadi **pernyataan varians**. Tulis inovasi satu-langkah efficient price — informasi yang beneran baru tiap instan — sebagai kombinasi tertimbang dari gerakan quote kejutan kedua venue: $\\Delta m_t = \\psi_A \\varepsilon^A_t + \\psi_B \\varepsilon^B_t$. **Information share** venue A itu fraksi dari $\\mathrm{Var}(\\Delta m_t)$ yang inovasi A kontribusiin. Kalau hampir semua varians efficient-price nelusur ke kejutan di quote A, information share A deket 1 dan B deket 0.

Satu komplikasi jujur bikin ukurannya subtle. Kalau inovasi A dan B *contemporaneously correlated* — kedua quote bereaksi di *instan yang sama*, jadi kamu gak bisa tau dari data siapa yang beneran gerak duluan — maka split antara mereka gak unik. Hasbrouck nanganin ini dengan ngitung information share di bawah urutan berbeda (faktorisasi Cholesky), ngelaporin **bound atas dan bawah**: kasih reaksi bersama-simultan dulu ke A (maksimum-nya) terus ke B (minimum-nya). Pas venue bereaksi di instan yang sedikit beda (korelasi rendah), bound-nya ketat dan jawabannya tajam; pas mereka bereaksi bareng, bound-nya lebar dan laporan jujurnya itu rentang. Angka NYSE 92.7% itu titik tengah bound semacam itu lintas saham Dow.`
      }
    },

    // ─────────────── 3. formalization ───────────────
    {
      id: 'formalization',
      heading: { en: 'The model, formalized', id: 'Model, diformalkan' },
      body: {
        en: `**The cointegrated price system.** Let $p_t$ be the $n\\times 1$ vector of (log) prices for the same security across $n$ venues. Each is integrated of order one, $I(1)$, but every pairwise difference is stationary, $I(0)$ — they share one common stochastic trend. So $p_t$ is cointegrated with $n-1$ cointegrating relations; the cointegrating vectors are the price *differences* (e.g. rows like $(1,-1,0,\\dots)$).

**Vector error correction model (VECM).** A cointegrated system has an error-correction representation:
$$\\Delta p_t = \\alpha\\,\\beta' p_{t-1} + \\sum_{k=1}^{K}\\Gamma_k\\,\\Delta p_{t-k} + \\varepsilon_t, \\qquad \\mathrm{Cov}(\\varepsilon_t)=\\Omega.$$
Here $\\beta' p_{t-1}$ are the lagged price *gaps* (the error-correction terms), and $\\alpha$ is the $n\\times(n-1)$ matrix of **adjustment speeds**: $\\alpha_{ij}$ says how strongly venue $i$ moves to close gap $j$. A venue with $\\alpha$-row near zero does *not* adjust to others — it is a leader; a venue with large $\\alpha$ does the adjusting — it follows.

**The common efficient price.** Inverting to the moving-average (Wold) form $\\Delta p_t = \\Psi(L)\\varepsilon_t$, the long-run impact matrix $\\Psi(1)$ has rank one because there is a single common trend. Write $\\Psi(1) = \\iota\\,\\psi$ where $\\iota=(1,\\dots,1)'$ and $\\psi$ is a $1\\times n$ row vector (the **common-factor weights**). The efficient price is the random walk whose increment is
$$\\Delta m_t = \\psi\\,\\varepsilon_t,\\qquad \\mathrm{Var}(\\Delta m_t)=\\psi\\,\\Omega\\,\\psi'.$$
Intuitively, $\\psi$ extracts the *permanent* part of each instant's shocks — the piece that sticks in the price forever.

**The information share.** Decompose $\\psi\\,\\Omega\\,\\psi'$ across venues. If $\\Omega$ were diagonal (uncorrelated innovations), venue $j$'s contribution would be clean:
$$\\mathrm{IS}_j=\\frac{\\psi_j^2\\,\\Omega_{jj}}{\\psi\\,\\Omega\\,\\psi'}.$$
This is the fraction of the efficient-price innovation variance originating in venue $j$ — its **information share**, with $\\sum_j \\mathrm{IS}_j = 1$.

**The identification caveat (and the bounds).** When $\\Omega$ is *not* diagonal — venues react in the same instant — the cross-covariances must be attributed to *someone*, and there is no unique way to do it from the data. Hasbrouck uses a Cholesky factorization $\\Omega = FF'$ (lower-triangular $F$) and computes
$$\\mathrm{IS}_j=\\frac{\\big([\\psi F]_j\\big)^2}{\\psi\\,\\Omega\\,\\psi'}.$$
Because Cholesky depends on the variable ordering, the value changes when you permute the venues: ordering a venue *first* gives it credit for all of the shared simultaneous reaction (its **upper bound**); ordering it *last* gives it none of it (its **lower bound**). Report the $[\\text{lower},\\text{upper}]$ interval. When contemporaneous correlation is small, the interval is tight; when it is large, the honest answer is a wide band.

**The alternative (Gonzalo-Granger).** A different statistic, the permanent-transitory **component share**, is built only from the adjustment vector $\\alpha$ (specifically the orthogonal complement $\\alpha_\\perp$), *ignoring* the innovation variances $\\Omega$. It answers "who does not adjust?" rather than "whose surprises carry the variance?" The two coincide when innovations are uncorrelated and otherwise differ; the gap between them is exactly the role of $\\Omega$, and reconciling them (de Jong 2002; Yan-Zivot 2010; Putniņš 2013) is the subject of a substantial follow-up literature.`,
        id: `**Sistem harga cointegrated.** Misal $p_t$ itu vektor $n\\times 1$ dari (log) harga buat sekuritas yang sama lintas $n$ venue. Tiap satu integrated of order one, $I(1)$, tapi tiap selisih berpasangan itu stationary, $I(0)$ — mereka bagi satu common stochastic trend. Jadi $p_t$ cointegrated dengan $n-1$ relasi cointegrating; vektor cointegrating-nya itu *selisih* harga (misal baris kayak $(1,-1,0,\\dots)$).

**Vector error correction model (VECM).** Sistem cointegrated punya representasi error-correction:
$$\\Delta p_t = \\alpha\\,\\beta' p_{t-1} + \\sum_{k=1}^{K}\\Gamma_k\\,\\Delta p_{t-k} + \\varepsilon_t, \\qquad \\mathrm{Cov}(\\varepsilon_t)=\\Omega.$$
Di sini $\\beta' p_{t-1}$ itu *gap* harga ber-lag (term error-correction), dan $\\alpha$ itu matriks $n\\times(n-1)$ dari **kecepatan penyesuaian**: $\\alpha_{ij}$ ngomong seberapa kuat venue $i$ gerak buat nutup gap $j$. Venue dengan baris-$\\alpha$ deket nol *gak* nyesuaiin ke yang lain — dia leader; venue dengan $\\alpha$ besar yang ngelakuin penyesuaian — dia ngikut.

**Common efficient price.** Inversi ke bentuk moving-average (Wold) $\\Delta p_t = \\Psi(L)\\varepsilon_t$, matriks impact jangka-panjang $\\Psi(1)$ punya rank satu karena ada satu common trend. Tulis $\\Psi(1) = \\iota\\,\\psi$ di mana $\\iota=(1,\\dots,1)'$ dan $\\psi$ itu vektor baris $1\\times n$ (**bobot common-factor**). Efficient price itu random walk yang increment-nya
$$\\Delta m_t = \\psi\\,\\varepsilon_t,\\qquad \\mathrm{Var}(\\Delta m_t)=\\psi\\,\\Omega\\,\\psi'.$$
Secara intuitif, $\\psi$ ngekstrak bagian *permanen* dari shock tiap instan — potongan yang nempel di harga selamanya.

**Information share.** Dekomposisi $\\psi\\,\\Omega\\,\\psi'$ lintas venue. Kalau $\\Omega$ diagonal (inovasi gak berkorelasi), kontribusi venue $j$ bakal bersih:
$$\\mathrm{IS}_j=\\frac{\\psi_j^2\\,\\Omega_{jj}}{\\psi\\,\\Omega\\,\\psi'}.$$
Ini fraksi varians inovasi efficient-price yang berasal dari venue $j$ — **information share**-nya, dengan $\\sum_j \\mathrm{IS}_j = 1$.

**Caveat identifikasi (dan bound-nya).** Pas $\\Omega$ *gak* diagonal — venue bereaksi di instan yang sama — cross-covariance-nya harus diatribusiin ke *seseorang*, dan gak ada cara unik ngelakuinnya dari data. Hasbrouck pakai faktorisasi Cholesky $\\Omega = FF'$ (lower-triangular $F$) dan ngitung
$$\\mathrm{IS}_j=\\frac{\\big([\\psi F]_j\\big)^2}{\\psi\\,\\Omega\\,\\psi'}.$$
Karena Cholesky tergantung urutan variabel, nilainya berubah pas kamu permutasi venue: ngurutin venue *pertama* ngasih dia kredit buat semua reaksi simultan bersama (**bound atas**-nya); ngurutin dia *terakhir* gak ngasih dia sama sekali (**bound bawah**-nya). Laporin interval $[\\text{bawah},\\text{atas}]$. Pas korelasi contemporaneous kecil, intervalnya ketat; pas dia besar, jawaban jujurnya pita lebar.

**Alternatif (Gonzalo-Granger).** Statistik berbeda, **component share** permanent-transitory, dibangun cuma dari vektor penyesuaian $\\alpha$ (spesifiknya komplemen ortogonal $\\alpha_\\perp$), *ngabaikin* varians inovasi $\\Omega$. Dia ngejawab "siapa yang gak nyesuaiin?" bukan "kejutan siapa yang bawa variansnya?" Keduanya berhimpit pas inovasi gak berkorelasi dan kalau enggak beda; gap antara mereka persis peran $\\Omega$, dan ngerekonsiliasi mereka (de Jong 2002; Yan-Zivot 2010; Putniņš 2013) itu subjek literatur lanjutan yang substansial.`
      }
    },

    // ─────────────── 4. worked-example ───────────────
    {
      id: 'worked-example',
      heading: { en: 'Worked example', id: 'Contoh kerjaan' },
      body: {
        en: `**A two-venue calculation, from error-correction to information share.** Venues A and B quote the same stock. We estimate a VECM and read off two things: who adjusts (the $\\alpha$ vector) and how the instantaneous shocks are correlated (the $\\Omega$ matrix).

**Step 1 — who leads, from $\\alpha$.** Suppose the estimated adjustment speeds are $\\alpha_A \\approx 0$ and $\\alpha_B = -0.5$. Read this directly: when A and B drift apart (gap $= p^A-p^B$), **A does not move** to close it, while **B moves halfway back each period**. So A holds the common price and B chases it — A leads. The common-factor weights come out as roughly $\\psi = (\\psi_A,\\psi_B)$ heavily loaded on A, because permanent moves originate in A and B only tracks them.

**Step 2 — uncorrelated case (clean split).** Suppose the innovation covariance is diagonal, $\\Omega = \\mathrm{diag}(\\sigma_A^2,\\sigma_B^2)$, with $\\psi_A^2\\sigma_A^2 = 0.9$ and $\\psi_B^2\\sigma_B^2 = 0.1$ in the same units. Then
$$\\mathrm{IS}_A=\\frac{0.9}{0.9+0.1}=90\\%,\\qquad \\mathrm{IS}_B=10\\%.$$
A clean, order-independent answer: 90% of price discovery is at A.

**Step 3 — correlated case (the bounds).** Now suppose the contemporaneous correlation between A's and B's innovations is $\\rho=0.6$ — both quotes often jump in the same instant. The information share now depends on the Cholesky order:
- Order A *first*: A is credited with the entire shared simultaneous move ⇒ $\\mathrm{IS}_A$ rises, say to **96%** (its upper bound).
- Order A *last*: A gets none of the shared move ⇒ $\\mathrm{IS}_A$ falls, say to **82%** (its lower bound).

The honest report is $\\mathrm{IS}_A \\in [82\\%, 96\\%]$ (midpoint ≈ 89%). The width of that band *is* the contemporaneous correlation: with $\\rho$ near 0 the band collapses to a point; with $\\rho$ near 1 the data simply cannot say who moved first. This is why Hasbrouck reports bounds, and why the Dow result is summarized as a **median ~92.7%** for the NYSE rather than a single exact number.

**Step 4 — the lesson.** Volume did not appear anywhere in this calculation. A venue could be carrying half the trades and still have a 10% information share if its quotes merely *follow*. Price discovery is about whose quotes carry the *permanent* innovation, which is an error-correction-and-variance question, not a volume question — exactly the separation the paper was built to make.`,
        id: `**Perhitungan dua-venue, dari error-correction ke information share.** Venue A dan B nge-quote saham yang sama. Kita estimasi VECM dan baca dua hal: siapa yang nyesuaiin (vektor $\\alpha$) dan gimana shock instan-nya berkorelasi (matriks $\\Omega$).

**Langkah 1 — siapa yang mimpin, dari $\\alpha$.** Misal kecepatan penyesuaian yang diestimasi itu $\\alpha_A \\approx 0$ dan $\\alpha_B = -0.5$. Baca ini langsung: pas A dan B melenceng (gap $= p^A-p^B$), **A gak gerak** buat nutupnya, sementara **B gerak setengah jalan balik tiap periode**. Jadi A nahan harga bersama dan B ngejarnya — A mimpin. Bobot common-factor keluar sebagai kira-kira $\\psi = (\\psi_A,\\psi_B)$ berat ke A, karena gerakan permanen berasal di A dan B cuma ngelacaknya.

**Langkah 2 — kasus gak berkorelasi (split bersih).** Misal kovarians inovasi diagonal, $\\Omega = \\mathrm{diag}(\\sigma_A^2,\\sigma_B^2)$, dengan $\\psi_A^2\\sigma_A^2 = 0.9$ dan $\\psi_B^2\\sigma_B^2 = 0.1$ di unit yang sama. Maka
$$\\mathrm{IS}_A=\\frac{0.9}{0.9+0.1}=90\\%,\\qquad \\mathrm{IS}_B=10\\%.$$
Jawaban bersih, gak tergantung urutan: 90% price discovery di A.

**Langkah 3 — kasus berkorelasi (bound-nya).** Sekarang misal korelasi contemporaneous antara inovasi A dan B itu $\\rho=0.6$ — kedua quote sering loncat di instan yang sama. Information share sekarang tergantung urutan Cholesky:
- Urutan A *pertama*: A dikreditin seluruh gerakan simultan bersama ⇒ $\\mathrm{IS}_A$ naik, misal ke **96%** (bound atas-nya).
- Urutan A *terakhir*: A gak dapet gerakan bersama ⇒ $\\mathrm{IS}_A$ turun, misal ke **82%** (bound bawah-nya).

Laporan jujurnya $\\mathrm{IS}_A \\in [82\\%, 96\\%]$ (titik tengah ≈ 89%). Lebar pita itu *adalah* korelasi contemporaneous: dengan $\\rho$ deket 0 pita-nya kolaps ke titik; dengan $\\rho$ deket 1 data-nya sekadar gak bisa bilang siapa yang gerak duluan. Ini kenapa Hasbrouck ngelaporin bound, dan kenapa hasil Dow diringkas sebagai **median ~92.7%** buat NYSE bukan satu angka eksak.

**Langkah 4 — pelajarannya.** Volume gak muncul di mana pun di perhitungan ini. Sebuah venue bisa bawa separuh trade dan tetep punya information share 10% kalau quote-nya cuma *ngikut*. Price discovery itu soal quote siapa yang bawa inovasi *permanen*, yang itu pertanyaan error-correction-dan-varians, bukan pertanyaan volume — persis pemisahan yang paper-nya dibangun buat bikin.`
      }
    },

    // ─────────────── 5. applications ───────────────
    {
      id: 'applications',
      heading: { en: 'Applications', id: 'Aplikasi' },
      body: {
        en: `**The universal "who leads?" tool.** Any time the same risk trades in two or more places, the information share answers which venue prices it first. Standard applications: a stock vs. its options or single-stock futures; an **ETF vs. its underlying basket** (does the ETF or the components lead?); **futures vs. spot** (index futures usually lead the cash index); **on-the-run vs. off-the-run** Treasuries; a **cross-listed stock vs. its home market** (the home market typically dominates discovery despite foreign volume); **CDS vs. bonds** for credit. In every case the headline lesson recurs: *discovery concentrates somewhere, and it is not always where the volume is.*

**Market-quality and policy.** Regulators and exchanges use price-discovery shares to judge whether a venue contributes information or merely free-rides on others' quotes (a "parasite" venue that copies prices). Fragmentation debates — is splitting trading across many venues good or bad? — turn partly on whether the satellite venues add discovery or only divert volume. The information share gives the metric.

**Crypto: the modern fragmented market.** A single coin trades on dozens of centralized exchanges plus on-chain venues, and (for perpetual-futures coins) across spot and perp. The information-share machinery transfers directly: estimate a VECM across the venues' prices and decompose. Recurring empirical findings in this literature are that a few dominant venues (and often the **perpetual-futures** market) carry most discovery while many smaller exchanges mostly follow — the same volume-≠-discovery separation, in a market built natively fragmented. (This module points to the application; the original paper is equities.)

**Use it with its caveats.** Two disciplines matter in practice. First, **report the bounds, not a single number**, whenever innovations are contemporaneously correlated — and they usually are at high sampling frequency, where two venues' quotes update in the same interval. Second, the answer is **sampling-frequency-dependent**: sample too coarsely and you blur who moved first; sample too finely and microstructure noise and asynchronous quotes distort the VECM. The honest output of the method is a *range*, conditional on a stated sampling frequency — and reading it as a single decimal is the most common misuse.`,
        id: `**Tool "siapa yang mimpin?" universal.** Tiap kali risiko yang sama trade di dua tempat atau lebih, information share ngejawab venue mana yang ngehargainnya duluan. Aplikasi standar: saham vs opsi atau single-stock futures-nya; **ETF vs basket underlying-nya** (apakah ETF atau komponennya yang mimpin?); **futures vs spot** (index futures biasanya mimpin cash index); **on-the-run vs off-the-run** Treasury; **saham cross-listed vs home market-nya** (home market biasanya mendominasi discovery walaupun ada volume asing); **CDS vs obligasi** buat kredit. Di tiap kasus pelajaran headline-nya berulang: *discovery terkonsentrasi di suatu tempat, dan dia gak selalu di mana volumenya.*

**Kualitas pasar dan kebijakan.** Regulator dan exchange pakai share price-discovery buat ngenilai apakah sebuah venue nyumbang informasi atau cuma numpang gratis di quote orang lain (venue "parasit" yang nyalin harga). Debat fragmentasi — apakah misahin trading lintas banyak venue itu baik atau buruk? — sebagian tergantung apakah venue satelit nambah discovery atau cuma ngalihin volume. Information share ngasih metriknya.

**Crypto: pasar terfragmentasi modern.** Satu koin trade di puluhan centralized exchange plus venue on-chain, dan (buat koin perpetual-futures) lintas spot dan perp. Mesin information-share transfer langsung: estimasi VECM lintas harga venue dan dekomposisi. Temuan empiris berulang di literatur ini itu bahwa beberapa venue dominan (dan sering pasar **perpetual-futures**) bawa kebanyakan discovery sementara banyak exchange lebih kecil mostly ngikut — pemisahan volume-≠-discovery yang sama, di pasar yang dibangun natively terfragmentasi. (Modul ini nunjuk ke aplikasinya; paper aslinya equity.)

**Pakai dia dengan caveat-nya.** Dua disiplin penting dalam praktik. Pertama, **laporin bound, bukan satu angka**, kapan pun inovasi contemporaneously correlated — dan mereka biasanya begitu di frekuensi sampling tinggi, di mana quote dua venue update di interval yang sama. Kedua, jawabannya **tergantung-frekuensi-sampling**: sample terlalu kasar dan kamu ngeblur siapa yang gerak duluan; sample terlalu halus dan microstructure noise serta quote asinkron ngedistorsi VECM. Output jujur metodenya itu *rentang*, kondisional pada frekuensi sampling yang dinyatakan — dan ngebacanya sebagai satu desimal itu penyalahgunaan paling umum.`
      }
    },

    // ─────────────── 6. practice ───────────────
    {
      id: 'practice',
      heading: { en: 'Practice', id: 'Latihan' },
      body: {
        en: `**1.** A regional exchange handles 40% of a stock's share volume but its estimated information share is only 8%. Is this a contradiction? Explain what the two numbers measure and how both can be true at once.

<details><summary>Answer</summary>
No contradiction — they measure different things. **Volume share** is where trades *execute*; **information share** is where the common efficient price's new information is *impounded first*. A venue can execute many trades while its quotes merely *follow* the leader: when news moves the efficient price, its quotes adjust toward the leading venue rather than moving first. So it processes lots of volume (40%) but contributes little price discovery (8%) — it is a *liquidity / execution* venue more than a *price-discovery* venue. The whole point of the paper is to separate these: where a security is traded is not where its price is discovered.
</details>

**2.** In a two-venue VECM you estimate $\\alpha_A \\approx 0$ and $\\alpha_B$ large and negative. Before computing any variances, what does this already tell you about price discovery, and why?

<details><summary>Answer</summary>
It already says **A leads**. The adjustment coefficient $\\alpha$ measures how strongly each venue moves to close the price gap. $\\alpha_A \\approx 0$ means A does *not* error-correct — it does not chase B; it stays where it is. $\\alpha_B$ large and negative means B does the adjusting — when the gap opens, B moves back toward A. A venue that others adjust toward, while it adjusts to no one, is the source of the common (permanent) price. So A holds the efficient price and B follows it: A's information share will be high. (This is exactly the intuition the Gonzalo-Granger component share formalizes using only $\\alpha$.)
</details>

**3.** Hasbrouck reports the information share as an interval (lower and upper bound), not a single number. What creates the gap between the bounds, and when does the interval collapse to a point?

<details><summary>Answer</summary>
The gap is created by **contemporaneous correlation** in the venues' innovations ($\\Omega$ not diagonal): if two venues' quotes react in the *same* sampling instant, the data cannot say which truly moved first, so the shared simultaneous reaction can be attributed to either. Hasbrouck uses a Cholesky factorization, which depends on ordering: ordering a venue first assigns it all of the shared move (upper bound), ordering it last assigns none (lower bound). The interval width *is* the contemporaneous correlation. It collapses to a point when innovations are uncorrelated ($\\Omega$ diagonal) — then the split is unique and order-independent. Wide bounds are a signal that you are sampling too coarsely (or the venues genuinely co-move) and the data underdetermine the answer.
</details>

**4.** Contrast Hasbrouck's information share with the Gonzalo-Granger component share. What does each use, and when do they disagree?

<details><summary>Answer</summary>
Both start from the same VECM. The **Gonzalo-Granger component share** is built only from the adjustment vector $\\alpha$ (its orthogonal complement $\\alpha_\\perp$): it answers "whose price does *not* adjust to others?" — a pure error-correction statement that ignores how big each venue's shocks are. Hasbrouck's **information share** uses both $\\psi$ (the common-factor weights, derived from the same dynamics) *and* the innovation covariance $\\Omega$: it answers "whose surprises carry the variance of the permanent price?" When innovations are uncorrelated and equal-variance the two coincide; they disagree when venues differ in innovation variance or are contemporaneously correlated, because only the information share weights by $\\Omega$. A venue that adjusts slowly (low $\\alpha$) but has tiny, quiet innovations can look like a leader under the component share yet contribute little variance under the information share. The reconciliation literature (de Jong; Yan-Zivot; Putniņš) shows each is a different projection of the same system.
</details>`,
        id: `**1.** Sebuah regional exchange nanganin 40% share volume sebuah saham tapi information share yang diestimasi cuma 8%. Apakah ini kontradiksi? Jelasin apa yang dua angka itu ukur dan gimana keduanya bisa bener sekaligus.

<details><summary>Jawaban</summary>
Gak ada kontradiksi — mereka ngukur hal berbeda. **Volume share** itu di mana trade *dieksekusi*; **information share** itu di mana informasi baru efficient price bersama *diserap duluan*. Sebuah venue bisa ngeksekusi banyak trade sementara quote-nya cuma *ngikut* leader: pas berita gerakin efficient price, quote-nya nyesuaiin ke arah venue yang mimpin bukan gerak duluan. Jadi dia proses banyak volume (40%) tapi nyumbang sedikit price discovery (8%) — dia venue *liquidity / eksekusi* lebih dari venue *price-discovery*. Seluruh poin paper-nya itu misahin ini: di mana sekuritas di-trade itu bukan di mana harganya ditemuin.
</details>

**2.** Di VECM dua-venue kamu estimasi $\\alpha_A \\approx 0$ dan $\\alpha_B$ besar dan negatif. Sebelum ngitung varians apa pun, apa yang ini udah kasih tau kamu soal price discovery, dan kenapa?

<details><summary>Jawaban</summary>
Dia udah bilang **A mimpin**. Koefisien penyesuaian $\\alpha$ ngukur seberapa kuat tiap venue gerak buat nutup gap harga. $\\alpha_A \\approx 0$ berarti A *gak* error-correct — dia gak ngejar B; dia diem di tempat. $\\alpha_B$ besar dan negatif berarti B yang nyesuaiin — pas gap kebuka, B gerak balik ke arah A. Venue yang orang lain nyesuaiin ke arahnya, sementara dia gak nyesuaiin ke siapa pun, itu sumber harga bersama (permanen). Jadi A nahan efficient price dan B ngikutinnya: information share A bakal tinggi. (Ini persis intuisi yang component share Gonzalo-Granger formalin cuma pakai $\\alpha$.)
</details>

**3.** Hasbrouck ngelaporin information share sebagai interval (bound bawah dan atas), bukan satu angka. Apa yang ngebikin gap antara bound-nya, dan kapan intervalnya kolaps ke titik?

<details><summary>Jawaban</summary>
Gap-nya diciptain sama **korelasi contemporaneous** di inovasi venue ($\\Omega$ gak diagonal): kalau quote dua venue bereaksi di instan sampling yang *sama*, data-nya gak bisa bilang mana yang beneran gerak duluan, jadi reaksi simultan bersama bisa diatribusiin ke salah satu. Hasbrouck pakai faktorisasi Cholesky, yang tergantung urutan: ngurutin venue pertama ngasih dia seluruh gerakan bersama (bound atas), ngurutin dia terakhir gak ngasih (bound bawah). Lebar interval itu *adalah* korelasi contemporaneous. Dia kolaps ke titik pas inovasi gak berkorelasi ($\\Omega$ diagonal) — maka split-nya unik dan gak tergantung urutan. Bound lebar itu sinyal kamu nge-sample terlalu kasar (atau venue-nya beneran co-move) dan data underdetermine jawabannya.
</details>

**4.** Kontras-in information share Hasbrouck dengan component share Gonzalo-Granger. Apa yang masing-masing pakai, dan kapan mereka gak setuju?

<details><summary>Jawaban</summary>
Keduanya mulai dari VECM yang sama. **Component share Gonzalo-Granger** dibangun cuma dari vektor penyesuaian $\\alpha$ (komplemen ortogonal-nya $\\alpha_\\perp$): dia ngejawab "harga siapa yang *gak* nyesuaiin ke yang lain?" — pernyataan error-correction murni yang ngabaikin seberapa besar shock tiap venue. **Information share** Hasbrouck pakai baik $\\psi$ (bobot common-factor, diturunin dari dinamika yang sama) *dan* kovarians inovasi $\\Omega$: dia ngejawab "kejutan siapa yang bawa varians harga permanen?" Pas inovasi gak berkorelasi dan equal-variance keduanya berhimpit; mereka gak setuju pas venue beda di varians inovasi atau contemporaneously correlated, karena cuma information share yang nimbang dengan $\\Omega$. Venue yang nyesuaiin lambat (low $\\alpha$) tapi punya inovasi kecil, tenang bisa keliatan kayak leader di bawah component share tapi nyumbang sedikit varians di bawah information share. Literatur rekonsiliasi (de Jong; Yan-Zivot; Putniņš) nunjukin masing-masing itu proyeksi berbeda dari sistem yang sama.
</details>`
      }
    },

    // ─────────────── 7. connections ───────────────
    {
      id: 'connections',
      heading: { en: 'Connections', id: 'Koneksi' },
      body: {
        en: `- **The efficient-price idea**: [Hasbrouck 2007](item:hasbrouck-2007) develops the random-walk efficient price plus transitory microstructure noise that this paper decomposes across venues; this is its direct methodological parent.
- **Why prices are noisy**: Roll (1984) (bid-ask bounce) and the spread literature explain the transitory component $s_t$ that keeps each venue's price off the efficient price.
- **Where information comes from**: [Kyle 1985](item:kyle-1985) and [Glosten-Milgrom 1985](item:glosten-milgrom-1985) model the informed trading that moves the efficient price in the first place — the information whose *arrival venue* this paper measures.
- **Order-flow as the signal**: [Cont-Kukanov-Stoikov 2014](item:cont-kukanov-stoikov-2014) (order-flow imbalance) is a venue-level driver of the quote innovations $\\varepsilon_t$ whose permanent part the information share extracts.
- **Fragmentation & speed**: [Budish-Cramton-Shim 2015](item:budish-cramton-shim-2015) and [Aquilina-Budish-O'Neill 2022](item:aquilina-budish-oneill-2022) study what *fragmentation across venues* does to the speed race — the flip side of "which fragment discovers the price"; and [Makarov-Schoar 2020](item:makarov-schoar-2020) is cross-venue price *dispersion*, the failure of the cointegration tether when capital cannot move.`,
        id: `- **Ide efficient-price**: [Hasbrouck 2007](item:hasbrouck-2007) ngembangin random-walk efficient price plus transitory microstructure noise yang paper ini dekomposisi lintas venue; ini induk metodologis langsungnya.
- **Kenapa harga ber-noise**: Roll (1984) (bid-ask bounce) dan literatur spread ngejelasin komponen transitory $s_t$ yang nahan harga tiap venue lepas dari efficient price.
- **Dari mana informasi datang**: [Kyle 1985](item:kyle-1985) dan [Glosten-Milgrom 1985](item:glosten-milgrom-1985) ngemodelin informed trading yang gerakin efficient price di awalnya — informasi yang *venue kedatangannya* paper ini ukur.
- **Order-flow sebagai sinyal**: [Cont-Kukanov-Stoikov 2014](item:cont-kukanov-stoikov-2014) (order-flow imbalance) itu driver level-venue dari inovasi quote $\\varepsilon_t$ yang bagian permanennya information share ekstrak.
- **Fragmentasi & kecepatan**: [Budish-Cramton-Shim 2015](item:budish-cramton-shim-2015) dan [Aquilina-Budish-O'Neill 2022](item:aquilina-budish-oneill-2022) ngestudi apa yang *fragmentasi lintas venue* lakuin ke speed race — sisi sebaliknya dari "fragmen mana yang nemuin harga"; dan [Makarov-Schoar 2020](item:makarov-schoar-2020) itu *dispersi* harga lintas-venue, kegagalan ikatan cointegration pas modal gak bisa gerak.`
      }
    },

    // ─────────────── 8. sources ───────────────
    {
      id: 'sources',
      heading: { en: 'Sources', id: 'Sumber' },
      body: {
        en: `- **Hasbrouck, J.** (1995). "One Security, Many Markets: Determining the Contributions to Price Discovery." *The Journal of Finance*, 50(4), 1175-1199. **(This item.)** Defines the information share and applies it to the thirty Dow stocks (median NYSE information share ≈ 92.7%).
- **Engle, R. F. and Granger, C. W. J.** (1987). "Co-integration and Error Correction: Representation, Estimation, and Testing." *Econometrica*, 55(2), 251-276. The cointegration / VECM foundation.
- **Gonzalo, J. and Granger, C.** (1995). "Estimation of Common Long-Memory Components in Cointegrated Systems." *Journal of Business & Economic Statistics*, 13(1), 27-35. The permanent-transitory component-share alternative.
- **Stock, J. H. and Watson, M. W.** (1988). "Testing for Common Trends." *Journal of the American Statistical Association*, 83(404), 1097-1107. The common-trends decomposition behind the single efficient price.
- **Baillie, R., Booth, G. G., Tse, Y., and Zabotina, T.** (2002). "Price Discovery and Common Factor Models." *Journal of Financial Markets*, 5(3), 309-321. Relates the information share and the component share.
- **Putniņš, T. J.** (2013). "What Do Price Discovery Metrics Really Measure?" *Journal of Empirical Finance*, 23, 68-83. A modern reconciliation and guide to using the measures.`,
        id: `- **Hasbrouck, J.** (1995). "One Security, Many Markets: Determining the Contributions to Price Discovery." *The Journal of Finance*, 50(4), 1175-1199. **(Item ini.)** Ngedefinisiin information share dan nerapinnya ke tiga puluh saham Dow (median information share NYSE ≈ 92.7%).
- **Engle, R. F. dan Granger, C. W. J.** (1987). "Co-integration and Error Correction: Representation, Estimation, and Testing." *Econometrica*, 55(2), 251-276. Fondasi cointegration / VECM.
- **Gonzalo, J. dan Granger, C.** (1995). "Estimation of Common Long-Memory Components in Cointegrated Systems." *Journal of Business & Economic Statistics*, 13(1), 27-35. Alternatif component-share permanent-transitory.
- **Stock, J. H. dan Watson, M. W.** (1988). "Testing for Common Trends." *Journal of the American Statistical Association*, 83(404), 1097-1107. Dekomposisi common-trends di balik satu efficient price.
- **Baillie, R., Booth, G. G., Tse, Y., dan Zabotina, T.** (2002). "Price Discovery and Common Factor Models." *Journal of Financial Markets*, 5(3), 309-321. Ngehubungin information share dan component share.
- **Putniņš, T. J.** (2013). "What Do Price Discovery Metrics Really Measure?" *Journal of Empirical Finance*, 23, 68-83. Rekonsiliasi modern dan panduan pakai ukurannya.`
      }
    },
  ],

  audio: { enabled: true },

  selfTest: [
    {
      sectionId: 'intuition',
      question: {
        en: 'Several venues quote the same stock, yet we speak of one "efficient price." In what sense is there a single price, and how do the venue prices relate to it?',
        id: 'Beberapa venue nge-quote saham yang sama, tapi kita ngomong soal satu "efficient price". Dalam arti apa ada satu harga, dan gimana harga venue berhubungan ke dia?'
      },
      prompt: { en: 'Before continuing, try answering:', id: 'Sebelum lanjut, coba jawab:' },
      answer: {
        en: 'The venues are claims on the same security, so their prices are cointegrated: each observed price equals one common, unobservable efficient price (a random walk that moves only on genuine news) plus a small stationary microstructure deviation (bid-ask bounce, inventory, stale quotes). The differences between venues are stationary and mean-revert — like several dogs on leashes held by one walker, each wanders a little but they all follow the walker. The single "price" is that common efficient-price trend; the venue prices are noisy readings of it that can never permanently separate.',
        id: 'Venue-venue itu klaim atas sekuritas yang sama, jadi harga mereka cointegrated: tiap harga teramati sama dengan satu efficient price bersama yang gak teramati (random walk yang gerak cuma di berita asli) plus deviasi microstructure stationary kecil (bid-ask bounce, inventory, stale quote). Selisih antar venue itu stationary dan mean-revert — kayak beberapa anjing di tali yang dipegang satu pejalan, masing-masing berkeliaran sedikit tapi semua ngikut pejalannya. Satu "harga" itu tren efficient-price bersama; harga venue itu pembacaan ber-noise darinya yang gak pernah bisa permanen berpisah.'
      }
    },
    {
      sectionId: 'formalization',
      question: {
        en: 'What exactly is a venue\'s "information share," and how is it computed from the VECM?',
        id: 'Apa persisnya "information share" sebuah venue, dan gimana dia dihitung dari VECM?'
      },
      prompt: { en: 'Before continuing, try answering:', id: 'Sebelum lanjut, coba jawab:' },
      answer: {
        en: 'It is the fraction of the variance of the common efficient-price innovation that originates in that venue. From the VECM you recover the moving-average form and the common-factor row ψ, so the efficient-price increment is Δm = ψ·ε with variance ψΩψ′. Venue j\'s information share is its contribution to that variance — ψ_j²Ω_jj / ψΩψ′ when innovations are uncorrelated. When Ω is not diagonal, a Cholesky factorization Ω = FF′ is used and the share is ([ψF]_j)² / ψΩψ′, which depends on the ordering — so you report the maximum (venue ordered first) and minimum (ordered last) as upper and lower bounds. It measures whose surprises carry the permanent price move, independent of trading volume.',
        id: 'Itu fraksi dari varians inovasi efficient-price bersama yang berasal dari venue itu. Dari VECM kamu pulihin bentuk moving-average dan baris common-factor ψ, jadi increment efficient-price itu Δm = ψ·ε dengan varians ψΩψ′. Information share venue j itu kontribusinya ke varians itu — ψ_j²Ω_jj / ψΩψ′ pas inovasi gak berkorelasi. Pas Ω gak diagonal, faktorisasi Cholesky Ω = FF′ dipakai dan share-nya ([ψF]_j)² / ψΩψ′, yang tergantung urutan — jadi kamu laporin maksimum (venue diurutin pertama) dan minimum (diurutin terakhir) sebagai bound atas dan bawah. Dia ngukur kejutan siapa yang bawa gerakan harga permanen, lepas dari trading volume.'
      }
    },
    {
      sectionId: 'applications',
      question: {
        en: 'Why is "price discovery" not the same as "trading volume," and why does that distinction matter for judging a venue?',
        id: 'Kenapa "price discovery" gak sama dengan "trading volume", dan kenapa perbedaan itu penting buat ngenilai sebuah venue?'
      },
      prompt: { en: 'Before continuing, try answering:', id: 'Sebelum lanjut, coba jawab:' },
      answer: {
        en: 'Volume is where trades execute; price discovery is where new information first enters prices. A venue can execute huge volume while its quotes merely follow the leader (high volume, low information share), or carry modest volume yet move first on news (low volume, high information share) — Hasbrouck finds the NYSE has a median ~92.7% information share for the Dow despite regional venues handling real volume. The distinction matters because it tells you whether a venue genuinely contributes information or free-rides on others\' quotes (a "parasite" copying the leader). For market-quality and fragmentation policy, the information share — not the volume share — is the right measure of a venue\'s contribution to discovery.',
        id: 'Volume itu di mana trade dieksekusi; price discovery itu di mana informasi baru pertama masuk ke harga. Sebuah venue bisa ngeksekusi volume gede sementara quote-nya cuma ngikut leader (volume tinggi, information share rendah), atau bawa volume sederhana tapi gerak duluan di berita (volume rendah, information share tinggi) — Hasbrouck nemuin NYSE punya median ~92.7% information share buat Dow walaupun venue regional nanganin volume nyata. Perbedaannya penting karena dia ngasih tau kamu apakah sebuah venue beneran nyumbang informasi atau numpang gratis di quote orang lain ("parasit" yang nyalin leader). Buat kebijakan kualitas-pasar dan fragmentasi, information share — bukan volume share — itu ukuran yang bener dari kontribusi venue ke discovery.'
      }
    },
  ],
};
