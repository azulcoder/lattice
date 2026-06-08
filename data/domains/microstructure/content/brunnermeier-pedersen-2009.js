export const CONTENT = {
  itemId: 'brunnermeier-pedersen-2009',
  estimatedReadMinutes: 40,

  author: {
    fullName: { en: 'Markus K. Brunnermeier & Lasse Heje Pedersen', id: 'Markus K. Brunnermeier & Lasse Heje Pedersen' },
    affiliation: {
      en: 'Brunnermeier: Edwards S. Sanford Professor of Economics, Princeton University; director of the Bendheim Center for Finance. Pedersen: Professor of Finance, Copenhagen Business School (and previously NYU Stern); principal at AQR Capital Management.',
      id: 'Brunnermeier: Edwards S. Sanford Professor of Economics, Princeton University; direktur Bendheim Center for Finance. Pedersen: Professor of Finance, Copenhagen Business School (dan sebelumnya NYU Stern); principal di AQR Capital Management.'
    },
    tagline: {
      en: 'The paper that wired together the two meanings of "liquidity" — how easily you can trade an asset, and how easily a trader can fund a position — and showed they feed back on each other into self-reinforcing spirals that turn a small shock into a market-wide dry-up.',
      id: 'Paper yang nyambungin dua makna "liquidity" — seberapa gampang kamu bisa trade aset, dan seberapa gampang trader bisa ngedanain posisi — dan nunjukin mereka saling memberi umpan balik jadi spiral yang nguatin diri yang ngubah shock kecil jadi pengeringan se-pasar.'
    },
    bio: {
      en: `**Markus Brunnermeier** is a macro-finance economist at Princeton whose work sits at the seam between asset pricing and financial stability: bubbles, liquidity crises, systemic risk (CoVaR), the "I theory of money," and the "reversal interest rate." He chronicled the 2007-2009 crisis in real time and his liquidity-spiral framework became one of its standard explanations. **Lasse Heje Pedersen** is a finance professor (Copenhagen Business School, formerly NYU Stern) and a principal at the quant manager AQR; his research defines much of modern liquidity and factor investing — liquidity risk and asset prices, "betting against beta," time-series momentum — distilled in his book *Efficiently Inefficient*.

The collaboration is characteristic of both: a clean theoretical model with immediate, testable real-world bite. Written before the 2008 crisis fully unfolded (the NBER working paper is 2007) and published in 2009, it reads in hindsight like a blueprint of the machinery that nearly broke the financial system — and it has framed how economists and central bankers talk about funding-driven liquidity ever since.`,
      id: `**Markus Brunnermeier** itu ekonom macro-finance di Princeton yang kerjaannya ada di jahitan antara asset pricing dan stabilitas finansial: bubble, krisis liquidity, risiko sistemik (CoVaR), "I theory of money," dan "reversal interest rate." Dia ngedokumentasiin krisis 2007-2009 secara real-time dan framework liquidity-spiral-nya jadi salah satu penjelasan standarnya. **Lasse Heje Pedersen** itu profesor finance (Copenhagen Business School, dulu NYU Stern) dan principal di manajer kuant AQR; risetnya ngedefinisiin banyak dari liquidity dan factor investing modern — risiko liquidity dan harga aset, "betting against beta," time-series momentum — disuling di bukunya *Efficiently Inefficient*.

Kolaborasinya khas keduanya: model teoritis yang bersih dengan gigitan dunia-nyata yang langsung, bisa diuji. Ditulis sebelum krisis 2008 sepenuhnya terkuak (NBER working paper-nya 2007) dan diterbitin 2009, dia kebaca di belakang kayak cetak biru dari mesin yang nyaris ngerusak sistem finansial — dan dia ngeframe gimana ekonom dan banker sentral ngomongin liquidity yang didorong-funding sejak itu.`
    },
    focus: {
      en: `"Liquidity" means two different things, and this paper is about the wire between them. **Market liquidity** is how cheaply you can trade an asset — tight spreads, depth, resilience. **Funding liquidity** is how easily the traders who *provide* that market liquidity — market makers, hedge funds, arbitrageurs — can finance their positions, which comes down to their capital and the margins (haircuts) their lenders demand. Brunnermeier and Pedersen model these two as mutually dependent: speculators supply market liquidity but are capital-constrained, so when their funding is ample they take big positions and markets are liquid; and margins themselves depend on market liquidity and volatility, so when markets get illiquid, funding tightens. Couple those two links and you get **liquidity spirals** — a *loss spiral* (losses force deleveraging, which causes more losses) and a *margin spiral* (illiquidity raises margins, which forces more deleveraging, which deepens illiquidity). The model explains why liquidity can vanish *suddenly*, why it dries up across many assets at once (commonality), why it tracks volatility, why capital flees to safe assets in a crunch ("flight to quality"), and why it co-moves with the market. It is the canonical account of *funding-driven* liquidity crises.`,
      id: `"Liquidity" berarti dua hal berbeda, dan paper ini soal kawat di antara mereka. **Market liquidity** itu seberapa murah kamu bisa trade aset — spread ketat, depth, resilience. **Funding liquidity** itu seberapa gampang trader yang *nyediain* market liquidity itu — market maker, hedge fund, arbitrageur — bisa ngedanain posisi mereka, yang ujungnya soal kapital mereka dan margin (haircut) yang lender mereka minta. Brunnermeier dan Pedersen ngemodelin keduanya sebagai saling tergantung: spekulator nyuplai market liquidity tapi terkendala-kapital, jadi pas funding mereka melimpah mereka ambil posisi gede dan pasar liquid; dan margin sendiri tergantung pada market liquidity dan volatility, jadi pas pasar jadi illiquid, funding mengetat. Sambungin dua link itu dan kamu dapet **liquidity spiral** — *loss spiral* (rugi maksa deleveraging, yang nyebabin lebih banyak rugi) dan *margin spiral* (illiquidity naikin margin, yang maksa lebih banyak deleveraging, yang ndalemin illiquidity). Model-nya ngejelasin kenapa liquidity bisa ilang *tiba-tiba*, kenapa dia ngering lintas banyak aset sekaligus (commonality), kenapa dia ngelacak volatility, kenapa kapital kabur ke aset aman pas crunch ("flight to quality"), dan kenapa dia co-move sama pasar. Dia akun kanonik dari krisis liquidity yang *didorong-funding*.`
    },
    intellectualLineage: {
      en: `The intellectual parent is the **limits of arbitrage** program: **Shleifer and Vishny (1997)**, where arbitrageurs with outside capital can be forced to liquidate exactly when mispricings are largest, and **Gromb and Vayanos (2002)**, who put capital-constrained arbitrageurs in general equilibrium. The amplification machinery descends from the **collateral / credit-cycle** literature — **Kiyotaki and Moore (1997)** "Credit Cycles," **Bernanke-Gertler** financial accelerator, and **Geanakoplos's** leverage cycle — where asset prices and borrowing capacity feed back. The microstructure side connects to **Kyle (1985)** (market depth as the price of liquidity) and the market-making inventory tradition (**Grossman-Miller**, **Ho-Stoll**): here the market maker's inventory capacity is endogenous to funding. The empirical liquidity facts the model targets come from **commonality-in-liquidity** work (**Chordia-Roll-Subrahmanyam**, **Hasbrouck-Seppi**) and the **liquidity-risk asset pricing** of **Pástor-Stambaugh (2003)** and **Acharya-Pedersen (2005)**. Together this is the "intermediary asset pricing" turn — prices set not by a frictionless representative investor but by constrained, levered intermediaries.`,
      id: `Induk intelektualnya itu program **limits of arbitrage**: **Shleifer dan Vishny (1997)**, di mana arbitrageur dengan kapital luar bisa dipaksa likuidasi persis pas mispricing paling gede, dan **Gromb dan Vayanos (2002)**, yang naruh arbitrageur terkendala-kapital di general equilibrium. Mesin amplifikasinya turun dari literatur **collateral / credit-cycle** — **Kiyotaki dan Moore (1997)** "Credit Cycles," financial accelerator **Bernanke-Gertler**, dan leverage cycle **Geanakoplos** — di mana harga aset dan kapasitas pinjam saling memberi umpan balik. Sisi microstructure-nya nyambung ke **Kyle (1985)** (market depth sebagai harga liquidity) dan tradisi inventory market-making (**Grossman-Miller**, **Ho-Stoll**): di sini kapasitas inventory market maker itu endogen ke funding. Fakta liquidity empiris yang model-nya target datang dari kerja **commonality-in-liquidity** (**Chordia-Roll-Subrahmanyam**, **Hasbrouck-Seppi**) dan **liquidity-risk asset pricing** dari **Pástor-Stambaugh (2003)** dan **Acharya-Pedersen (2005)**. Bareng ini itu belokan "intermediary asset pricing" — harga diset bukan sama representative investor tanpa friksi tapi sama intermediary yang terkendala, ber-leverage.`
    },
    keyCollaborators: {
      en: `The two authors are each at the centre of a dense network. **Brunnermeier** works on crises and systemic risk with **Yuliy Sannikov** (the "I theory of money," continuous-time macro-finance), **Tobias Adrian** (CoVaR systemic-risk measure), and **Martin Oehmke**; his crisis chronicle drew on the whole macro-finance community. **Pedersen**'s defining collaborations are with **Viral Acharya** (liquidity-adjusted CAPM), **Andrea Frazzini** (betting against beta, momentum, at AQR), and **Tobias Moskowitz** (time-series momentum). The shared intellectual touchstones are **Andrei Shleifer and Robert Vishny** (limits of arbitrage), **Denis Gromb and Dimitri Vayanos** (constrained arbitrage), and the central-banking world that adopted the framework after 2008.`,
      id: `Dua penulis masing-masing di pusat jaringan yang padat. **Brunnermeier** kerja soal krisis dan risiko sistemik sama **Yuliy Sannikov** ("I theory of money," macro-finance continuous-time), **Tobias Adrian** (ukuran risiko-sistemik CoVaR), dan **Martin Oehmke**; kronik krisisnya narik dari seluruh komunitas macro-finance. Kolaborasi yang ngedefinisiin **Pedersen** itu sama **Viral Acharya** (liquidity-adjusted CAPM), **Andrea Frazzini** (betting against beta, momentum, di AQR), dan **Tobias Moskowitz** (time-series momentum). Tonggak intelektual bersama itu **Andrei Shleifer dan Robert Vishny** (limits of arbitrage), **Denis Gromb dan Dimitri Vayanos** (constrained arbitrage), dan dunia central-banking yang ngadopsi framework-nya setelah 2008.`
    },
    legacy: {
      en: `This paper supplied the vocabulary — "market vs funding liquidity," "liquidity spirals," "margin/loss spiral," "destabilizing margins" — that economists and central bankers used to make sense of 2008, and have used for every funding crisis since: the 1998 LTCM unwind in hindsight, the 2008 collapse, the 2020 "dash for cash," and the 2022 UK gilt / LDI spiral. Three things make it durable. First, it **unified two literatures** — market microstructure (depth, spreads) and macro/credit (collateral, leverage) — by making the market maker's risk-bearing capacity depend on funding. Second, it explained a cluster of stubborn **stylized facts** about liquidity (sudden dry-ups, commonality, volatility-linkage, flight to quality, market comovement) from one mechanism. Third, it gave a **policy rationale**: because funding and market liquidity reinforce, a central bank acting as lender of last resort — easing *funding* — can restore *market* liquidity, which is precisely what the 2008 and 2020 facilities did. For anyone modelling crises, execution under stress, or the limits of arbitrage, this is the canonical reference for why liquidity is *fragile* — fine until a constraint binds, then gone all at once.`,
      id: `Paper ini nyediain kosakata — "market vs funding liquidity," "liquidity spiral," "margin/loss spiral," "destabilizing margins" — yang ekonom dan banker sentral pakai buat ngerti 2008, dan udah dipakai buat tiap krisis funding sejak itu: unwind LTCM 1998 di belakang, kolaps 2008, "dash for cash" 2020, dan spiral gilt UK / LDI 2022. Tiga hal bikin dia awet. Pertama, dia **nyatuin dua literatur** — market microstructure (depth, spread) dan macro/credit (collateral, leverage) — dengan bikin kapasitas nanggung-risiko market maker tergantung pada funding. Kedua, dia ngejelasin sekelompok **stylized fact** liquidity yang bandel (pengeringan tiba-tiba, commonality, keterkaitan-volatility, flight to quality, comovement pasar) dari satu mekanisme. Ketiga, dia ngasih **rasional kebijakan**: karena funding dan market liquidity saling nguatin, bank sentral yang bertindak sebagai lender of last resort — ngelonggarin *funding* — bisa mulihin *market* liquidity, yang persis apa yang fasilitas 2008 dan 2020 lakuin. Buat siapa pun yang ngemodelin krisis, eksekusi di bawah tekanan, atau limits of arbitrage, ini referensi kanonik buat kenapa liquidity itu *rapuh* — baik-baik aja sampai constraint mengikat, terus ilang sekaligus.`
    },
    keyWorks: [
      { year: 2009, title: 'Market Liquidity and Funding Liquidity (this item)', venue: 'Review of Financial Studies' },
      { year: 2009, title: 'Deciphering the Liquidity and Credit Crunch 2007-2008 (Brunnermeier)', venue: 'Journal of Economic Perspectives' },
      { year: 2014, title: 'A Macroeconomic Model with a Financial Sector (Brunnermeier & Sannikov)', venue: 'American Economic Review' },
      { year: 2005, title: 'Asset Pricing with Liquidity Risk (Acharya & Pedersen)', venue: 'Journal of Financial Economics' },
      { year: 2014, title: 'Betting Against Beta (Frazzini & Pedersen)', venue: 'Journal of Financial Economics' },
    ],
  },

  sections: [
    // ─────────────── 1. motivation ───────────────
    {
      id: 'motivation',
      heading: { en: 'Why this matters', id: 'Kenapa ini penting' },
      body: {
        en: `The word "liquidity" hides two very different ideas, and confusing them is how people fail to see crises coming.

**Market liquidity** is a property of an *asset*: how cheaply and quickly you can trade it without moving the price — tight bid-ask spread, depth in the book, resilience after a trade. It is the thing Kyle's $\\lambda$ measures.

**Funding liquidity** is a property of a *trader*: how easily the people who *provide* market liquidity — market makers, hedge funds, dealers, arbitrageurs — can finance the inventory they hold. It comes down to two things: how much capital they have, and what **margin** (haircut) their lenders demand to hold a position. A 10% margin means USD 1 of capital supports USD 10 of position; if the margin doubles to 20%, the same capital supports only USD 5 — the trader is forced to halve the position, whether they want to or not.

Brunnermeier and Pedersen's insight is that these two liquidities are **joined in a loop**. Speculators supply market liquidity, but only as much as their funding allows; so when funding is easy, they warehouse risk freely and markets are deep and liquid. Run the loop the other way: the margins lenders charge *depend on* market liquidity and volatility — an illiquid, volatile asset is risky collateral, so it gets a bigger haircut. Put the two links together and you have a feedback system that can switch character violently.

In calm times the loop is stabilizing and invisible: plenty of capital, low margins, deep markets. But once a shock pushes a constraint to bind, the loop reverses and **amplifies**. A price drop hurts speculators' capital *and* raises margins, both of which force them to sell, which drops prices further, which hurts capital and raises margins again — a **liquidity spiral**. Liquidity that looked abundant evaporates in hours.

This single mechanism explains five facts about liquidity that had been documented but not unified: it can **suddenly dry up**, it shows **commonality** (many assets lose liquidity together), it is **tied to volatility**, it exhibits **flight to quality** (capital abandons risky, high-margin assets for safe ones), and it **co-moves with the market**. The paper is the standard model of how a funding shock at a handful of intermediaries becomes a market-wide liquidity crisis — the story of LTCM in 1998, the 2008 crash, the 2020 dash-for-cash, and the 2022 gilt spiral.`,
        id: `Kata "liquidity" nyembunyiin dua ide yang sangat berbeda, dan ngebingungin mereka itu cara orang gagal liat krisis datang.

**Market liquidity** itu properti sebuah *aset*: seberapa murah dan cepet kamu bisa trade dia tanpa gerakin harga — bid-ask spread ketat, depth di book, resilience setelah trade. Itu hal yang $\\lambda$ Kyle ukur.

**Funding liquidity** itu properti sebuah *trader*: seberapa gampang orang-orang yang *nyediain* market liquidity — market maker, hedge fund, dealer, arbitrageur — bisa ngedanain inventory yang mereka pegang. Ujungnya dua hal: berapa kapital yang mereka punya, dan **margin** (haircut) apa yang lender mereka minta buat megang posisi. Margin 10% berarti USD 1 kapital nyokong USD 10 posisi; kalau margin-nya dobel jadi 20%, kapital yang sama cuma nyokong USD 5 — trader-nya dipaksa nyetengahin posisi, mau atau enggak.

Wawasan Brunnermeier dan Pedersen itu bahwa dua liquidity ini **disambung di sebuah loop**. Spekulator nyuplai market liquidity, tapi cuma sebanyak yang funding mereka bolehin; jadi pas funding gampang, mereka nampung risiko bebas dan pasar dalem dan liquid. Jalanin loop-nya arah sebaliknya: margin yang lender tagih *tergantung pada* market liquidity dan volatility — aset yang illiquid, volatile itu collateral berisiko, jadi dia dapet haircut lebih gede. Gabung dua link itu dan kamu punya sistem umpan balik yang bisa ganti karakter dengan keras.

Di waktu tenang loop-nya nyetabilin dan gak keliatan: kapital melimpah, margin rendah, pasar dalem. Tapi begitu shock ngedorong constraint buat mengikat, loop-nya kebalik dan **ngamplifikasi**. Penurunan harga ngelukain kapital spekulator *dan* naikin margin, keduanya maksa mereka jual, yang nurunin harga lebih jauh, yang ngelukain kapital dan naikin margin lagi — sebuah **liquidity spiral**. Liquidity yang keliatan melimpah menguap dalam jam.

Satu mekanisme ini ngejelasin lima fakta soal liquidity yang udah didokumentasiin tapi belum disatuin: dia bisa **tiba-tiba ngering**, dia nunjukin **commonality** (banyak aset kehilangan liquidity bareng), dia **terikat ke volatility**, dia nunjukin **flight to quality** (kapital ninggalin aset berisiko, margin-tinggi buat yang aman), dan dia **co-move sama pasar**. Paper-nya itu model standar gimana shock funding di segelintir intermediary jadi krisis liquidity se-pasar — cerita LTCM 1998, kolaps 2008, dash-for-cash 2020, dan spiral gilt 2022.`
      }
    },

    // ─────────────── 2. intuition ───────────────
    {
      id: 'intuition',
      heading: { en: 'Intuition', id: 'Intuisi' },
      body: {
        en: `Think of one levered speculator — a hedge fund running a convergence trade, or a dealer warehousing inventory. It has capital (equity) $E$ and holds a position $P$ financed with borrowed money, so its leverage is $P/E$. The lender requires a **margin** $m$: the fund must post $m$ per dollar of position, i.e. it can hold at most $P = E/m$. Low margin ⇒ high allowed leverage ⇒ the fund can absorb a lot of others' selling and *provide* market liquidity. The fund's risk-bearing capacity is its funding.

Now hit it with a price drop. Two distinct things go wrong at once.

**The loss spiral.** A levered fund's equity is hammered by losses: if it is 10× levered, a 1% fall in the position wipes 10% of equity. Smaller equity means it can hold a smaller position (even at unchanged margin), so it must **sell into the falling market**, which pushes the price down further, which destroys more equity, which forces more selling… This is pure leverage amplification: losses → forced deleveraging → more losses.

**The margin spiral.** Worse, the margin itself moves the wrong way. Lenders set margins to cover the risk of the collateral, so when prices fall and **volatility rises**, they *raise* margins (bigger haircuts on riskier collateral). But a higher margin means the *same* equity now supports a *smaller* position — so the fund must deleverage **even if it had no losses**. Forced selling makes the asset more illiquid and more volatile, which makes lenders raise margins again… Funding tightens precisely when the trader most needs it. Brunnermeier and Pedersen call these **destabilizing margins**.

The two spirals reinforce each other, and the crucial feature is that the system is **non-linear**. In normal times the funding constraint does not bind: the fund has spare capital, margins are low, and it freely absorbs shocks — markets look deep and stable, and small news moves prices only a little. But there is a threshold. Once a shock is big enough that the constraint binds, the spirals switch on, and liquidity **collapses suddenly** rather than degrading smoothly. That is why liquidity is *fragile*: it can look abundant right up to the moment it disappears.

From this one picture the five stylized facts fall out. **Sudden dry-ups**: the non-linearity (constraint binds or it doesn't). **Commonality**: a funding shock hits *all* the positions a constrained intermediary holds, so many assets lose liquidity together. **Volatility link**: margins rise with volatility, so volatile assets are the first to lose funded liquidity. **Flight to quality**: when capital is scarce, speculators dump the *high-margin, illiquid* assets first and retreat to low-margin safe ones, so quality assets stay liquid while risky ones crater — and capital flees to safety. **Market comovement**: liquidity tracks the aggregate capital of the intermediary sector, which tracks the market.`,
        id: `Bayangin satu spekulator ber-leverage — hedge fund yang jalanin convergence trade, atau dealer yang nampung inventory. Dia punya kapital (equity) $E$ dan megang posisi $P$ yang didanain duit pinjaman, jadi leverage-nya $P/E$. Lender minta **margin** $m$: fund-nya harus naruh $m$ per dolar posisi, yaitu dia bisa megang paling banyak $P = E/m$. Margin rendah ⇒ leverage diizinin tinggi ⇒ fund bisa nyerap banyak jualan orang lain dan *nyediain* market liquidity. Kapasitas nanggung-risiko fund itu funding-nya.

Sekarang hantam dia dengan penurunan harga. Dua hal berbeda jadi salah sekaligus.

**Loss spiral.** Equity fund ber-leverage dihantam rugi: kalau dia 10× leverage, jatuh 1% di posisi ngehapus 10% equity. Equity lebih kecil berarti dia bisa megang posisi lebih kecil (bahkan di margin yang gak berubah), jadi dia harus **jual ke pasar yang lagi jatuh**, yang ngedorong harga lebih turun, yang ngancurin lebih banyak equity, yang maksa lebih banyak jualan… Ini amplifikasi leverage murni: rugi → deleveraging paksa → lebih banyak rugi.

**Margin spiral.** Lebih buruk, margin-nya sendiri gerak ke arah yang salah. Lender nyetel margin buat nutup risiko collateral, jadi pas harga jatuh dan **volatility naik**, mereka *naikin* margin (haircut lebih gede di collateral lebih berisiko). Tapi margin lebih tinggi berarti equity yang *sama* sekarang nyokong posisi yang *lebih kecil* — jadi fund-nya harus deleverage **bahkan kalau dia gak ada rugi**. Jualan paksa bikin aset-nya lebih illiquid dan lebih volatile, yang bikin lender naikin margin lagi… Funding mengetat persis pas trader paling butuh. Brunnermeier dan Pedersen nyebut ini **destabilizing margins**.

Dua spiral nguatin satu sama lain, dan fitur krusialnya itu sistem-nya **non-linear**. Di waktu normal funding constraint gak mengikat: fund punya kapital cadangan, margin rendah, dan dia bebas nyerap shock — pasar keliatan dalem dan stabil, dan berita kecil gerakin harga cuma dikit. Tapi ada threshold. Begitu shock cukup gede sampai constraint mengikat, spiral-nya nyala, dan liquidity **kolaps tiba-tiba** bukan menurun mulus. Itu kenapa liquidity itu *rapuh*: dia bisa keliatan melimpah persis sampai momen dia ilang.

Dari satu gambar ini lima stylized fact jatuh keluar. **Pengeringan tiba-tiba**: non-linearitas-nya (constraint mengikat atau enggak). **Commonality**: shock funding ngehantam *semua* posisi yang intermediary terkendala pegang, jadi banyak aset kehilangan liquidity bareng. **Link volatility**: margin naik sama volatility, jadi aset volatile yang pertama kehilangan funded liquidity. **Flight to quality**: pas kapital langka, spekulator buang aset *margin-tinggi, illiquid* duluan dan mundur ke yang margin-rendah aman, jadi aset berkualitas tetep liquid sementara yang berisiko jeblok — dan kapital kabur ke keamanan. **Comovement pasar**: liquidity ngelacak kapital agregat sektor intermediary, yang ngelacak pasar.`
      }
    },

    // ─────────────── 3. formalization ───────────────
    {
      id: 'formalization',
      heading: { en: 'The model, formalized', id: 'Model, diformalkan' },
      body: {
        en: `**Players.** Customers have asynchronous liquidity needs and want to trade now; **speculators** (the marginal liquidity providers — think dealers / hedge funds) absorb the imbalance, holding inventory until customers on the other side arrive. Speculators are risk-averse and, crucially, **capital-constrained**: they finance positions with collateralized borrowing subject to margins.

**The funding constraint.** A speculator with capital (equity) $W_t$ facing margin $m_t$ per unit of position can hold at most
$$|x_t| \\le \\frac{W_t}{m_t}.$$
Market liquidity is the price concession customers must offer to get speculators to take the other side; that concession is large exactly when this constraint binds. So **market illiquidity is increasing in the shadow price of the funding constraint**.

**Endogenous margins.** Margins are set by financiers to cover position risk over the liquidation horizon, so $m_t$ rises with the asset's **volatility** and **illiquidity**. The key distinction:
- If financiers could perfectly tell *fundamental* shocks from *liquidity* shocks, margins would be roughly constant (or even counter-cyclical) and **stabilizing**.
- If they cannot — they raise margins whenever measured volatility spikes, as value-at-risk rules do — margins become **destabilizing**: they tighten in the bad state, amplifying the shock. This is the paper's central condition.

**The two spirals (comparative statics of a negative shock).**
1. **Loss spiral.** A price drop reduces levered speculators' capital $W_t$; with $|x|\\le W/m$, lower $W$ forces position cuts; the selling depresses the price further, lowering $W$ again. Amplification scales with **leverage**: the more levered, the bigger the feedback.
2. **Margin spiral.** The same drop raises volatility, so financiers raise $m_t$; a higher $m_t$ shrinks the allowed position $W/m$ *for given capital*, forcing further selling, raising volatility and $m_t$ again. Amplification scales with the **margin's sensitivity to volatility**.

Both spirals move market and funding liquidity *together*, in the same direction — they are mutually reinforcing.

**Fragility and multiplicity.** Because the constraint is an inequality that either binds or not, the equilibrium is **non-linear** and can feature a stable "liquid" regime and a fragile "illiquid" regime, with a sudden transition between them when a shock crosses the threshold. Small changes in fundamentals can produce large, discontinuous changes in liquidity — and there can be multiple equilibria (a self-fulfilling liquidity crisis).

**Five testable implications.** The model predicts that market liquidity (i) can suddenly dry up (the non-linear regime switch), (ii) has **commonality** across assets (a common funding factor), (iii) is **related to volatility** (through margins), (iv) is subject to **flight to quality** (high-margin assets lose liquidity first), and (v) **co-moves with the market** (liquidity tracks intermediary capital).

**Policy corollary.** Since the two liquidities reinforce, a central bank that eases *funding* liquidity — lending against collateral, cutting haircuts, acting as lender of last resort — can restore *market* liquidity. The model is the theoretical case for the liquidity facilities deployed in 2008 and 2020.`,
        id: `**Pemain.** Customer punya kebutuhan liquidity asinkron dan pengen trade sekarang; **spekulator** (penyedia liquidity marginal — bayangin dealer / hedge fund) nyerap imbalance-nya, megang inventory sampai customer di sisi sebaliknya datang. Spekulator risk-averse dan, krusial, **terkendala-kapital**: mereka ngedanain posisi dengan pinjaman ber-collateral yang kena margin.

**Funding constraint.** Spekulator dengan kapital (equity) $W_t$ yang hadapi margin $m_t$ per unit posisi bisa megang paling banyak
$$|x_t| \\le \\frac{W_t}{m_t}.$$
Market liquidity itu konsesi harga yang customer harus tawarin biar spekulator ambil sisi sebaliknya; konsesi itu gede persis pas constraint ini mengikat. Jadi **market illiquidity naik sama shadow price funding constraint**.

**Margin endogen.** Margin diset sama financier buat nutup risiko posisi over horizon likuidasi, jadi $m_t$ naik sama **volatility** dan **illiquidity** aset. Perbedaan kuncinya:
- Kalau financier bisa sempurna bedain shock *fundamental* dari shock *liquidity*, margin bakal kira-kira konstan (atau bahkan counter-cyclical) dan **nyetabilin**.
- Kalau enggak — mereka naikin margin tiap volatility terukur lonjak, kayak aturan value-at-risk lakuin — margin jadi **destabilizing**: mereka mengetat di keadaan buruk, ngamplifikasi shock. Ini kondisi sentral paper-nya.

**Dua spiral (comparative statics dari shock negatif).**
1. **Loss spiral.** Penurunan harga ngurangin kapital $W_t$ spekulator ber-leverage; dengan $|x|\\le W/m$, $W$ lebih rendah maksa potongan posisi; jualannya nekan harga lebih jauh, nurunin $W$ lagi. Amplifikasi nyekala sama **leverage**: makin ber-leverage, makin gede umpan baliknya.
2. **Margin spiral.** Penurunan yang sama naikin volatility, jadi financier naikin $m_t$; $m_t$ lebih tinggi nyusutin posisi yang diizinin $W/m$ *buat kapital yang dikasih*, maksa jualan lebih jauh, naikin volatility dan $m_t$ lagi. Amplifikasi nyekala sama **sensitivitas margin ke volatility**.

Kedua spiral gerakin market dan funding liquidity *bareng*, di arah yang sama — mereka saling nguatin.

**Fragility dan multiplicity.** Karena constraint-nya itu ketaksamaan yang mengikat atau enggak, equilibrium-nya **non-linear** dan bisa nampilin rezim "liquid" stabil dan rezim "illiquid" rapuh, dengan transisi tiba-tiba antara mereka pas shock nyebrang threshold. Perubahan kecil di fundamental bisa ngehasilin perubahan gede, diskontinu di liquidity — dan bisa ada multiple equilibria (krisis liquidity yang self-fulfilling).

**Lima implikasi yang bisa diuji.** Model-nya ngeprediksi market liquidity (i) bisa tiba-tiba ngering (regime switch non-linear), (ii) punya **commonality** lintas aset (common funding factor), (iii) **terkait volatility** (lewat margin), (iv) kena **flight to quality** (aset margin-tinggi kehilangan liquidity duluan), dan (v) **co-move sama pasar** (liquidity ngelacak kapital intermediary).

**Korolari kebijakan.** Karena dua liquidity saling nguatin, bank sentral yang ngelonggarin funding liquidity — minjemin lawan collateral, motong haircut, bertindak sebagai lender of last resort — bisa mulihin market liquidity. Model-nya itu argumen teoritis buat fasilitas liquidity yang dikerahin di 2008 dan 2020.`
      }
    },

    // ─────────────── 4. worked-example ───────────────
    {
      id: 'worked-example',
      heading: { en: 'Worked example', id: 'Contoh kerjaan' },
      body: {
        en: `**A levered desk through both spirals.** A speculator desk has equity $W = 100$ (USD 100m) and runs at $10\\times$ leverage, so it holds a position $P = 1{,}000$ (USD 1,000m). The lender's margin is $m = 10\\%$ (it must post USD 0.10 per USD 1 of position; $P_{\\max} = W/m = 100/0.10 = 1{,}000$, i.e. USD 1,000m — the constraint is exactly binding).

**Shock 1 — the loss spiral.** The asset falls **2%**. The desk loses $2\\% \\times 1{,}000 = 20$ (USD 20m) of equity, so $W: 100 \\to 80$. At the unchanged 10% margin the maximum position is now $W/m = 80/0.10 = 800$ (USD 800m). The desk must **sell USD 200m** into a market that is already falling. That forced sale pushes the price down further — say another 1% — which costs roughly another $1\\% \\times 800 = 8$ (USD 8m) of equity, forcing yet more selling. Losses → deleveraging → more losses. With *no* leverage this 2% move would have cost 2% of capital and ended there; at 10× it sets off a cascade.

**Shock 2 — the margin spiral, on top.** The falling, now-volatile market makes the lender nervous. It raises the margin from **10% to 20%** (a value-at-risk rule responding to higher measured volatility). Now even with the post-loss equity of USD 80m, the maximum position is $W/m = 80/0.20 = 400$ (USD 400m). The desk, already cut to USD 800m, must sell **another USD 400m** — *not because it lost more money, but because the haircut doubled*. That selling deepens the illiquidity and raises volatility again, prompting the lender to raise margins once more. Funding evaporates exactly when the desk needs it most.

**Why it stops being smooth.** Trace the desk's behaviour as the shock grows. For a *small* dip, the desk has spare capacity (it was not truly at the limit), absorbs the selling, and even *buys* — it stabilizes the market, and the price barely moves. But past the point where the constraint binds, every further USD 1 of price decline forces multiple dollars of selling through both spirals. The response is **non-linear**: stabilizing and invisible below the threshold, violently amplifying above it. Liquidity does not fade — it *snaps*.

**Why it spreads (commonality & flight to quality).** This same desk holds *many* assets against the *same* USD 80m of (shrinking) capital. To raise cash it sells across the whole book, so unrelated assets lose liquidity together — **commonality**. And it sells the **high-margin, illiquid** names first (they free up the most borrowing capacity per dollar sold and are the riskiest collateral), while clinging to low-margin safe assets — so the risky/illiquid assets crater and the safe ones hold: **flight to quality**. One funding shock at one intermediary, transmitted to the entire market.

**The exit.** Notice what *reverses* the spiral: more capital, or lower margins. That is exactly the central-bank playbook — lend against the collateral, cut haircuts, recapitalize the intermediaries — easing *funding* liquidity to bring *market* liquidity back. It is the logic behind 2008's facilities and 2020's dash-for-cash interventions.`,
        id: `**Desk ber-leverage lewat kedua spiral.** Sebuah desk spekulator punya equity $W = 100$ (USD 100jt) dan jalan di leverage $10\\times$, jadi dia megang posisi $P = 1{.}000$ (USD 1.000jt). Margin lender-nya $m = 10\\%$ (dia harus naruh USD 0.10 per USD 1 posisi; $P_{\\max} = W/m = 100/0.10 = 1{.}000$, yaitu USD 1.000jt — constraint-nya persis mengikat).

**Shock 1 — loss spiral.** Aset-nya jatuh **2%**. Desk-nya rugi $2\\% \\times 1{.}000 = 20$ (USD 20jt) equity, jadi $W: 100 \\to 80$. Di margin 10% yang gak berubah posisi maksimum sekarang $W/m = 80/0.10 = 800$ (USD 800jt). Desk-nya harus **jual USD 200jt** ke pasar yang udah jatuh. Jualan paksa itu ngedorong harga lebih turun — misal 1% lagi — yang ngebiayain kira-kira $1\\% \\times 800 = 8$ (USD 8jt) equity lagi, maksa lebih banyak jualan. Rugi → deleveraging → lebih banyak rugi. Dengan *tanpa* leverage gerakan 2% ini bakal ngebiayain 2% kapital dan berhenti di situ; di 10× dia ngenyalain cascade.

**Shock 2 — margin spiral, di atasnya.** Pasar yang jatuh, sekarang volatile bikin lender gugup. Dia naikin margin dari **10% ke 20%** (aturan value-at-risk yang nanggepin volatility terukur lebih tinggi). Sekarang bahkan dengan equity pasca-rugi USD 80jt, posisi maksimum-nya $W/m = 80/0.20 = 400$ (USD 400jt). Desk-nya, udah dipotong ke USD 800jt, harus jual **USD 400jt lagi** — *bukan karena dia rugi lebih banyak, tapi karena haircut-nya dobel*. Jualan itu ndalemin illiquidity dan naikin volatility lagi, ngedorong lender naikin margin sekali lagi. Funding menguap persis pas desk paling butuh.

**Kenapa dia berhenti jadi mulus.** Lacak kelakuan desk pas shock-nya tumbuh. Buat dip *kecil*, desk punya kapasitas cadangan (dia gak beneran di limit), nyerap jualan, dan bahkan *beli* — dia nyetabilin pasar, dan harga nyaris gak gerak. Tapi lewat titik di mana constraint mengikat, tiap USD 1 penurunan harga lebih lanjut maksa beberapa dolar jualan lewat kedua spiral. Responsnya **non-linear**: nyetabilin dan gak keliatan di bawah threshold, ngamplifikasi dengan keras di atasnya. Liquidity gak memudar — dia *patah*.

**Kenapa dia nyebar (commonality & flight to quality).** Desk yang sama ini megang *banyak* aset lawan USD 80jt kapital (yang nyusut) yang *sama*. Buat ngumpulin cash dia jual lintas seluruh book, jadi aset yang gak berhubungan kehilangan liquidity bareng — **commonality**. Dan dia jual nama **margin-tinggi, illiquid** duluan (mereka ngebebasin kapasitas pinjam paling banyak per dolar dijual dan paling berisiko sebagai collateral), sambil nyengkeram aset margin-rendah aman — jadi aset berisiko/illiquid jeblok dan yang aman bertahan: **flight to quality**. Satu shock funding di satu intermediary, ditransmisiin ke seluruh pasar.

**Jalan keluarnya.** Perhatiin apa yang *ngebalik* spiral: kapital lebih banyak, atau margin lebih rendah. Itu persis playbook bank sentral — minjemin lawan collateral, motong haircut, ngerekapitalisasi intermediary — ngelonggarin *funding* liquidity buat ngebalikin *market* liquidity. Itu logika di balik fasilitas 2008 dan intervensi dash-for-cash 2020.`
      }
    },

    // ─────────────── 5. applications ───────────────
    {
      id: 'applications',
      heading: { en: 'Applications', id: 'Aplikasi' },
      body: {
        en: `**Reading crises.** The framework is the standard lens for funding-driven crises. **LTCM (1998)**: a hugely levered convergence-trade book; losses + rising margins forced liquidation into the very spreads it was betting would converge — a textbook loss-and-margin spiral. **2008**: falling collateral values + rising haircuts on repo forced dealer deleveraging across everything, the canonical case the paper anticipated. **2020 "dash for cash"**: even US Treasuries went illiquid as a wave of forced selling — mutual-fund outflows, foreign-official liquidations, and levered relative-value funds (including the "basis trade") hit by margin calls — overwhelmed dealer balance-sheet capacity, until the Fed restored funding. **2022 UK gilts / LDI**: rising yields triggered collateral calls on pension-fund hedges, forcing gilt sales that raised yields further, until the Bank of England intervened — a margin spiral in slow motion.

**Risk management — your own margins are pro-cyclical.** The lesson for a levered desk is to model the *joint* dynamics of P&L and margins: a value-at-risk limit that scales with realized volatility will force you to sell precisely when everyone else is selling and liquidity is worst. Position sizing, haircut buffers, and committed funding lines should be set against the *stressed* margin, not today's calm one. The cost of a forced liquidation (Almgren-Chriss implementation shortfall) explodes exactly in the states where the spiral is running.

**Asset pricing — liquidity is a priced risk.** If liquidity dries up in bad states (when marginal utility is high), assets that lose the most liquidity then are riskier and must offer a **liquidity-risk premium**. This is the Acharya-Pedersen liquidity-adjusted CAPM and Pástor-Stambaugh liquidity factor — the asset-pricing payoff of this microstructure mechanism.

**Policy — why lender of last resort works.** Because funding and market liquidity reinforce, the cure for a *market*-liquidity crisis is often to ease *funding* liquidity: central-bank lending against collateral, lower haircuts, and direct purchases. The model rationalizes the 2008 and 2020 facilities and the design of counter-cyclical margin/haircut rules (so margins do not amplify) now discussed in macroprudential policy.

**Crypto — leverage without a lender of last resort.** Crypto markets run high leverage (perpetual futures with 10-100×), volatility-sensitive margining, and **automatic liquidations** — a margin spiral wired directly into the matching engine. A price drop triggers forced liquidations, which drop the price, which trigger more liquidations (cascading "long squeezes"), with no central bank to ease funding. The 2022 deleveraging (Terra/LUNA, 3AC, FTX) is the loss-and-margin spiral with the brakes removed. (The paper studies traditional markets; the crypto reading is this module's extension.)`,
        id: `**Membaca krisis.** Framework-nya itu lensa standar buat krisis yang didorong-funding. **LTCM (1998)**: book convergence-trade yang ber-leverage gila; rugi + margin naik maksa likuidasi ke spread yang dia taruhin bakal konvergen — loss-and-margin spiral textbook. **2008**: nilai collateral jatuh + haircut naik di repo maksa deleveraging dealer lintas segalanya, kasus kanonik yang paper-nya antisipasi. **"Dash for cash" 2020**: bahkan US Treasury jadi illiquid pas gelombang jualan paksa — outflow mutual fund, likuidasi foreign-official, dan relative-value fund ber-leverage (termasuk "basis trade") yang kena margin call — ngalahin kapasitas balance-sheet dealer, sampai Fed mulihin funding. **Gilt UK / LDI 2022**: yield naik ngetrigger collateral call di hedge dana pensiun, maksa jualan gilt yang naikin yield lebih jauh, sampai Bank of England intervensi — margin spiral dalam gerak lambat.

**Manajemen risiko — margin kamu sendiri itu pro-cyclical.** Pelajaran buat desk ber-leverage itu ngemodelin dinamika *gabungan* P&L dan margin: limit value-at-risk yang nyekala sama volatility realized bakal maksa kamu jual persis pas semua orang lain jual dan liquidity paling buruk. Position sizing, buffer haircut, dan committed funding line harusnya diset lawan margin *stressed*, bukan yang tenang hari ini. Biaya likuidasi paksa (implementation shortfall Almgren-Chriss) meledak persis di keadaan di mana spiral lagi jalan.

**Asset pricing — liquidity itu risiko yang dihargai.** Kalau liquidity ngering di keadaan buruk (pas marginal utility tinggi), aset yang kehilangan paling banyak liquidity saat itu lebih berisiko dan harus nawarin **liquidity-risk premium**. Ini liquidity-adjusted CAPM Acharya-Pedersen dan faktor liquidity Pástor-Stambaugh — payoff asset-pricing dari mekanisme microstructure ini.

**Kebijakan — kenapa lender of last resort bekerja.** Karena funding dan market liquidity saling nguatin, obat buat krisis *market*-liquidity sering ngelonggarin *funding* liquidity: pinjaman bank-sentral lawan collateral, haircut lebih rendah, dan pembelian langsung. Model-nya ngerasionalisasi fasilitas 2008 dan 2020 dan desain aturan margin/haircut counter-cyclical (biar margin gak ngamplifikasi) yang sekarang dibahas di kebijakan makroprudensial.

**Crypto — leverage tanpa lender of last resort.** Pasar crypto jalan leverage tinggi (perpetual futures dengan 10-100×), margining sensitif-volatility, dan **likuidasi otomatis** — margin spiral yang dikabel langsung ke matching engine. Penurunan harga ngetrigger likuidasi paksa, yang nurunin harga, yang ngetrigger lebih banyak likuidasi (cascading "long squeeze"), tanpa bank sentral buat ngelonggarin funding. Deleveraging 2022 (Terra/LUNA, 3AC, FTX) itu loss-and-margin spiral dengan rem dilepas. (Paper-nya ngestudi pasar tradisional; bacaan crypto-nya perpanjangan modul ini.)`
      }
    },

    // ─────────────── 6. practice ───────────────
    {
      id: 'practice',
      heading: { en: 'Practice', id: 'Latihan' },
      body: {
        en: `**1.** Distinguish market liquidity from funding liquidity in one sentence each, then state the two-way link that makes them a loop.

<details><summary>Answer</summary>
**Market liquidity** is how cheaply/quickly you can trade an *asset* without moving its price (tight spread, depth, resilience). **Funding liquidity** is how easily a *trader* who provides that market liquidity can finance positions — a function of their capital and the margins lenders charge. The loop: speculators supply market liquidity only up to what their funding allows (funding → market liquidity), and margins are set based on assets' volatility and market liquidity (market liquidity → funding). Because each depends on the other, a shock to one transmits to the other and can spiral.
</details>

**2.** A desk holds USD 1,000m of an asset on USD 100m of equity (10% margin). The asset falls 2% and, separately, the lender raises the margin to 20%. Compute the forced sale from each effect, and explain why the margin effect can bite even with zero further losses.

<details><summary>Answer</summary>
**Loss spiral:** the 2% fall costs $0.02 \\times 1{,}000 = 20$ (USD 20m) of equity, so $W: 100 \\to 80$. At the still-10% margin, max position $= W/m = 80/0.10 = 800$, i.e. USD 800m, forcing a **USD 200m sale**. **Margin spiral:** raising $m$ to 20% makes the max position $= 80/0.20 = 400$, i.e. USD 400m, forcing **another USD 400m sale** — purely because the haircut doubled, *with no additional loss*. The margin effect bites because the constraint is $|x| \\le W/m$: a bigger $m$ shrinks the allowed position for given $W$. Total forced selling USD 600m, into a market the selling itself is pushing down — the spiral.
</details>

**3.** The model predicts liquidity "suddenly dries up" rather than fading smoothly. What feature produces the suddenness, and what does it imply about measuring liquidity risk in calm times?

<details><summary>Answer</summary>
The suddenness comes from the **non-linearity** of the funding constraint $|x| \\le W/m$: it either binds or it doesn't. Below the threshold the desk has spare capacity, absorbs shocks, and even stabilizes prices — liquidity looks abundant and roughly constant. Once a shock pushes the constraint to bind, both spirals switch on and liquidity collapses discontinuously (possibly with multiple equilibria / self-fulfilling crises). The implication: liquidity measured in calm times *understates* the tail risk, because the dangerous regime is invisible until it arrives. Risk management must stress the constraint (use stressed margins and worst-case funding), not extrapolate from benign conditions — liquidity is fragile, not smoothly degrading.
</details>

**4.** Explain "flight to quality" and "commonality in liquidity" as consequences of the *same* funding shock, using the structure of the model.

<details><summary>Answer</summary>
Both follow from one constrained intermediary holding many assets against one shrinking pool of capital. **Commonality:** to raise cash when funding tightens, the desk sells across its *entire* book, so otherwise-unrelated assets lose liquidity together — their liquidity shares a common funding factor. **Flight to quality:** facing a binding constraint, the desk dumps the *high-margin, illiquid* assets first — they tie up the most capital per dollar held and are the riskiest collateral — while holding onto low-margin safe assets. So the risky/illiquid assets lose the most liquidity (and fall most) while safe assets stay liquid, and capital visibly retreats to quality. Same mechanism, two stylized facts: a funding shock at the intermediary, expressed as correlated illiquidity (commonality) skewed toward risky assets (flight to quality).
</details>`,
        id: `**1.** Bedain market liquidity dari funding liquidity dalam satu kalimat masing-masing, terus nyatain link dua-arah yang bikin mereka jadi loop.

<details><summary>Jawaban</summary>
**Market liquidity** itu seberapa murah/cepet kamu bisa trade sebuah *aset* tanpa gerakin harganya (spread ketat, depth, resilience). **Funding liquidity** itu seberapa gampang seorang *trader* yang nyediain market liquidity itu bisa ngedanain posisi — fungsi dari kapital mereka dan margin yang lender tagih. Loop-nya: spekulator nyuplai market liquidity cuma sampai yang funding mereka bolehin (funding → market liquidity), dan margin diset berdasar volatility dan market liquidity aset (market liquidity → funding). Karena masing-masing tergantung yang lain, shock ke satu nransmisi ke yang lain dan bisa spiral.
</details>

**2.** Sebuah desk megang USD 1.000jt aset di USD 100jt equity (margin 10%). Aset-nya jatuh 2% dan, terpisah, lender naikin margin ke 20%. Hitung jualan paksa dari tiap efek, dan jelasin kenapa efek margin bisa nggigit bahkan dengan nol rugi lebih lanjut.

<details><summary>Jawaban</summary>
**Loss spiral:** jatuh 2% ngebiayain $0.02 \\times 1{.}000 = 20$ (USD 20jt) equity, jadi $W: 100 \\to 80$. Di margin masih-10%, posisi maks $= W/m = 80/0.10 = 800$, yaitu USD 800jt, maksa **jualan USD 200jt**. **Margin spiral:** naikin $m$ ke 20% bikin posisi maks $= 80/0.20 = 400$, yaitu USD 400jt, maksa **jualan USD 400jt lagi** — murni karena haircut dobel, *tanpa rugi tambahan*. Efek margin nggigit karena constraint-nya $|x| \\le W/m$: $m$ lebih gede nyusutin posisi yang diizinin buat $W$ yang dikasih. Total jualan paksa USD 600jt, ke pasar yang jualan-nya sendiri lagi ngedorong turun — spiral-nya.
</details>

**3.** Model-nya ngeprediksi liquidity "tiba-tiba ngering" bukan memudar mulus. Fitur apa yang ngehasilin ketiba-tibaan-nya, dan apa yang dia implikasi soal ngukur risiko liquidity di waktu tenang?

<details><summary>Jawaban</summary>
Ketiba-tibaan-nya datang dari **non-linearitas** funding constraint $|x| \\le W/m$: dia mengikat atau enggak. Di bawah threshold desk punya kapasitas cadangan, nyerap shock, dan bahkan nyetabilin harga — liquidity keliatan melimpah dan kira-kira konstan. Begitu shock ngedorong constraint buat mengikat, kedua spiral nyala dan liquidity kolaps diskontinu (mungkin dengan multiple equilibria / krisis self-fulfilling). Implikasinya: liquidity yang diukur di waktu tenang *meremehkan* tail risk, karena rezim berbahaya-nya gak keliatan sampai dia datang. Manajemen risiko harus nge-stress constraint-nya (pakai margin stressed dan funding worst-case), bukan ngekstrapolasi dari kondisi jinak — liquidity itu rapuh, bukan menurun mulus.
</details>

**4.** Jelasin "flight to quality" dan "commonality in liquidity" sebagai konsekuensi dari shock funding yang *sama*, pakai struktur model-nya.

<details><summary>Jawaban</summary>
Keduanya ngikut dari satu intermediary terkendala yang megang banyak aset lawan satu kolam kapital yang nyusut. **Commonality:** buat ngumpulin cash pas funding mengetat, desk jual lintas *seluruh* book-nya, jadi aset yang kalau enggak gak berhubungan kehilangan liquidity bareng — liquidity mereka bagi common funding factor. **Flight to quality:** hadapi constraint yang mengikat, desk buang aset *margin-tinggi, illiquid* duluan — mereka ngiket kapital paling banyak per dolar dipegang dan paling berisiko sebagai collateral — sambil nyengkeram aset margin-rendah aman. Jadi aset berisiko/illiquid kehilangan paling banyak liquidity (dan jatuh paling banyak) sementara aset aman tetep liquid, dan kapital keliatan mundur ke kualitas. Mekanisme sama, dua stylized fact: shock funding di intermediary, diekspresiin sebagai illiquidity berkorelasi (commonality) condong ke aset berisiko (flight to quality).
</details>`
      }
    },

    // ─────────────── 7. connections ───────────────
    {
      id: 'connections',
      heading: { en: 'Connections', id: 'Koneksi' },
      body: {
        en: `- **What "market liquidity" means**: [Kyle 1985](item:kyle-1985) measures it as depth $1/\\lambda$ — here that depth becomes *endogenous* to the liquidity provider's funding, not a fixed parameter.
- **Who provides it**: [Avellaneda-Stoikov 2008](item:stoikov-2008) is the inventory-constrained market maker whose risk-bearing capacity this paper ties to capital and margins; a funding shock shrinks exactly that capacity.
- **The cost when it's gone**: [Almgren-Chriss 2000](item:almgren-chriss-2000) implementation shortfall is what a forced liquidation pays — and the spiral is when everyone is forced to liquidate at once.
- **Limits of arbitrage**: [Makarov-Schoar 2020](item:makarov-schoar-2020) is a concrete case of capital-constrained arbitrage failing to close a gap — the empirical cousin of this paper's funding constraint.
- **Toxicity & crashes**: [Easley-López de Prado-O'Hara VPIN](item:easley-lopez-prado-vpin) flags the order-flow toxicity that can trip the constraint, and the flash-crash/liquidity-evaporation literature is the high-frequency face of a liquidity spiral.`,
        id: `- **Apa arti "market liquidity"**: [Kyle 1985](item:kyle-1985) ngukurnya sebagai depth $1/\\lambda$ — di sini depth itu jadi *endogen* ke funding penyedia liquidity, bukan parameter tetap.
- **Siapa yang nyediainnya**: [Avellaneda-Stoikov 2008](item:stoikov-2008) itu market maker terkendala-inventory yang kapasitas nanggung-risikonya paper ini iket ke kapital dan margin; shock funding nyusutin persis kapasitas itu.
- **Biayanya pas dia ilang**: [Almgren-Chriss 2000](item:almgren-chriss-2000) implementation shortfall itu yang likuidasi paksa bayar — dan spiral-nya itu pas semua orang dipaksa likuidasi sekaligus.
- **Limits of arbitrage**: [Makarov-Schoar 2020](item:makarov-schoar-2020) itu kasus konkret arbitrage terkendala-kapital gagal nutup gap — sepupu empiris dari funding constraint paper ini.
- **Toxicity & crash**: [VPIN Easley-López de Prado-O'Hara](item:easley-lopez-prado-vpin) ngeflag toxicity order-flow yang bisa nyandung constraint-nya, dan literatur flash-crash/penguapan-liquidity itu wajah high-frequency dari liquidity spiral.`
      }
    },

    // ─────────────── 8. sources ───────────────
    {
      id: 'sources',
      heading: { en: 'Sources', id: 'Sumber' },
      body: {
        en: `- **Brunnermeier, M. K. and Pedersen, L. H.** (2009). "Market Liquidity and Funding Liquidity." *The Review of Financial Studies*, 22(6), 2201-2238. **(This item.)** The model of market-funding liquidity feedback, the loss and margin spirals, and the five empirical implications.
- **Brunnermeier, M. K.** (2009). "Deciphering the Liquidity and Credit Crunch 2007-2008." *Journal of Economic Perspectives*, 23(1), 77-100. The companion narrative of the crisis the model anticipates.
- **Shleifer, A. and Vishny, R. W.** (1997). "The Limits of Arbitrage." *Journal of Finance*, 52(1), 35-55. Why capital-constrained arbitrageurs can be forced out exactly when mispricings are largest.
- **Gromb, D. and Vayanos, D.** (2002). "Equilibrium and Welfare in Markets with Financially Constrained Arbitrageurs." *Journal of Financial Economics*, 66(2-3), 361-407. Constrained arbitrage in general equilibrium.
- **Acharya, V. V. and Pedersen, L. H.** (2005). "Asset Pricing with Liquidity Risk." *Journal of Financial Economics*, 77(2), 375-410. The asset-pricing payoff — a liquidity-adjusted CAPM.
- **Adrian, T. and Shin, H. S.** (2010). "Liquidity and Leverage." *Journal of Financial Intermediation*, 19(3), 418-437. Pro-cyclical leverage of intermediaries — the balance-sheet evidence behind the spirals.`,
        id: `- **Brunnermeier, M. K. dan Pedersen, L. H.** (2009). "Market Liquidity and Funding Liquidity." *The Review of Financial Studies*, 22(6), 2201-2238. **(Item ini.)** Model umpan balik market-funding liquidity, loss dan margin spiral, dan lima implikasi empiris.
- **Brunnermeier, M. K.** (2009). "Deciphering the Liquidity and Credit Crunch 2007-2008." *Journal of Economic Perspectives*, 23(1), 77-100. Narasi pendamping dari krisis yang model-nya antisipasi.
- **Shleifer, A. dan Vishny, R. W.** (1997). "The Limits of Arbitrage." *Journal of Finance*, 52(1), 35-55. Kenapa arbitrageur terkendala-kapital bisa dipaksa keluar persis pas mispricing paling gede.
- **Gromb, D. dan Vayanos, D.** (2002). "Equilibrium and Welfare in Markets with Financially Constrained Arbitrageurs." *Journal of Financial Economics*, 66(2-3), 361-407. Arbitrage terkendala di general equilibrium.
- **Acharya, V. V. dan Pedersen, L. H.** (2005). "Asset Pricing with Liquidity Risk." *Journal of Financial Economics*, 77(2), 375-410. Payoff asset-pricing — liquidity-adjusted CAPM.
- **Adrian, T. dan Shin, H. S.** (2010). "Liquidity and Leverage." *Journal of Financial Intermediation*, 19(3), 418-437. Leverage pro-cyclical intermediary — bukti balance-sheet di balik spiral.`
      }
    },
  ],

  audio: { enabled: true },

  selfTest: [
    {
      sectionId: 'intuition',
      question: {
        en: 'Brunnermeier-Pedersen describe two amplification mechanisms — the loss spiral and the margin spiral. How does each force a levered speculator to sell into a falling market, and how do they differ?',
        id: 'Brunnermeier-Pedersen ngedeskripsiin dua mekanisme amplifikasi — loss spiral dan margin spiral. Gimana masing-masing maksa spekulator ber-leverage buat jual ke pasar yang jatuh, dan gimana mereka beda?'
      },
      prompt: { en: 'Before continuing, try answering:', id: 'Sebelum lanjut, coba jawab:' },
      answer: {
        en: 'Loss spiral: a price drop destroys a levered speculator\'s equity (amplified by leverage), and with the position capped at equity/margin, smaller equity forces position cuts — selling that pushes the price down further and destroys more equity. Margin spiral: the same drop raises volatility, so lenders raise the margin/haircut; a higher margin shrinks the allowed position (equity/margin) for *given* equity, forcing more selling even with no further loss — and the selling raises volatility and margins again. Both force selling into weakness, but the loss spiral is driven by falling capital (scales with leverage) and the margin spiral by rising haircuts (scales with how sensitive margins are to volatility). They reinforce each other.',
        id: 'Loss spiral: penurunan harga ngancurin equity spekulator ber-leverage (diamplifikasi sama leverage), dan dengan posisi di-cap di equity/margin, equity lebih kecil maksa potongan posisi — jualan yang ngedorong harga lebih turun dan ngancurin lebih banyak equity. Margin spiral: penurunan yang sama naikin volatility, jadi lender naikin margin/haircut; margin lebih tinggi nyusutin posisi yang diizinin (equity/margin) buat equity yang *dikasih*, maksa lebih banyak jualan bahkan tanpa rugi lebih lanjut — dan jualannya naikin volatility dan margin lagi. Keduanya maksa jualan ke kelemahan, tapi loss spiral didorong kapital yang jatuh (nyekala sama leverage) dan margin spiral sama haircut yang naik (nyekala sama seberapa sensitif margin ke volatility). Mereka saling nguatin.'
      }
    },
    {
      sectionId: 'formalization',
      question: {
        en: 'The model says margins can be either stabilizing or destabilizing. What determines which, and why does it matter for whether a shock spirals?',
        id: 'Model-nya bilang margin bisa nyetabilin atau destabilizing. Apa yang nentuin yang mana, dan kenapa itu penting buat apakah shock spiral?'
      },
      prompt: { en: 'Before continuing, try answering:', id: 'Sebelum lanjut, coba jawab:' },
      answer: {
        en: 'It depends on whether financiers can distinguish fundamental shocks from liquidity shocks. If they can, margins stay roughly constant (or move counter-cyclically) and are stabilizing — funding does not tighten just because prices fell. If they cannot — and value-at-risk rules that raise margins whenever measured volatility spikes are the leading example — margins rise in the bad state, tightening funding exactly when the speculator is already hurt. Those "destabilizing margins" are the condition that turns a one-off shock into a margin spiral: higher margins force deleveraging, which raises volatility, which raises margins again. So the same price shock either gets absorbed (stabilizing margins) or amplified into a liquidity crisis (destabilizing margins), depending on how margins respond to volatility.',
        id: 'Tergantung apakah financier bisa bedain shock fundamental dari shock liquidity. Kalau bisa, margin tetep kira-kira konstan (atau gerak counter-cyclical) dan nyetabilin — funding gak mengetat cuma karena harga jatuh. Kalau enggak — dan aturan value-at-risk yang naikin margin tiap volatility terukur lonjak itu contoh terdepan — margin naik di keadaan buruk, ngetatin funding persis pas spekulator udah terluka. "Destabilizing margins" itu kondisi yang ngubah shock sekali jadi margin spiral: margin lebih tinggi maksa deleveraging, yang naikin volatility, yang naikin margin lagi. Jadi shock harga yang sama entah keserap (margin nyetabilin) atau diamplifikasi jadi krisis liquidity (destabilizing margins), tergantung gimana margin nanggepin volatility.'
      }
    },
    {
      sectionId: 'applications',
      question: {
        en: 'Why does the model imply that a central bank acting as lender of last resort can restore market liquidity, even though the central bank does not trade the illiquid asset itself?',
        id: 'Kenapa model-nya ngimplikasiin bank sentral yang bertindak sebagai lender of last resort bisa mulihin market liquidity, walaupun bank sentral-nya gak nge-trade aset illiquid-nya sendiri?'
      },
      prompt: { en: 'Before continuing, try answering:', id: 'Sebelum lanjut, coba jawab:' },
      answer: {
        en: 'Because market and funding liquidity reinforce each other, you can fix one by fixing the other. Market illiquidity here comes from speculators\' binding funding constraint (position ≤ capital/margin). A central bank that lends against the collateral, cuts haircuts, or recapitalizes intermediaries directly loosens the *funding* constraint — giving speculators more capacity to hold inventory — which lets them provide *market* liquidity again, breaking the spiral. It does not need to buy the illiquid asset itself (though it can); easing funding is enough because funding is the binding constraint. This is the model\'s rationale for the 2008 and 2020 liquidity facilities, and for counter-cyclical (stabilizing) margin rules.',
        id: 'Karena market dan funding liquidity saling nguatin, kamu bisa benerin satu dengan benerin yang lain. Market illiquidity di sini datang dari funding constraint spekulator yang mengikat (posisi ≤ kapital/margin). Bank sentral yang minjemin lawan collateral, motong haircut, atau ngerekapitalisasi intermediary langsung ngelonggarin *funding* constraint — ngasih spekulator kapasitas lebih buat megang inventory — yang ngebolehin mereka nyediain *market* liquidity lagi, mecahin spiral. Dia gak perlu beli aset illiquid-nya sendiri (walaupun bisa); ngelonggarin funding udah cukup karena funding itu constraint yang mengikat. Ini rasional model-nya buat fasilitas liquidity 2008 dan 2020, dan buat aturan margin counter-cyclical (nyetabilin).'
      }
    },
  ],
};
