export const CONTENT = {
  itemId: 'almgren-chriss-2000',
  estimatedReadMinutes: 40,

  author: {
    fullName: { en: 'Robert Almgren & Neil Chriss', id: 'Robert Almgren & Neil Chriss' },
    affiliation: {
      en: 'Almgren: Chief Scientist, Quantitative Brokers; Professor of the Practice in Operations Research & Financial Engineering, Princeton University. Chriss: mathematician and quantitative investor; founder of Hutchin Hill Capital.',
      id: 'Almgren: Chief Scientist, Quantitative Brokers; Professor of the Practice in Operations Research & Financial Engineering, Princeton University. Chriss: matematikawan dan quantitative investor; founder Hutchin Hill Capital.'
    },
    tagline: {
      en: 'The model behind modern arrival-price and implementation-shortfall execution — optimal liquidation as a mean-variance trade-off between market-impact cost (trade fast) and timing risk (trade slow), traced out as an efficient frontier.',
      id: 'Model fondasi di balik eksekusi arrival-price/implementation-shortfall — optimal liquidation sebagai trade-off mean-variance antara market-impact cost (trade cepet) dan timing risk (trade lambat), digambar sebagai efficient frontier.'
    },
    bio: {
      en: `Robert Almgren is an applied mathematician turned execution-research practitioner. The son of the Princeton geometer Frederick J. Almgren Jr., he took degrees in physics and mathematics at MIT, an MS at Harvard, and a PhD in applied & computational mathematics at Princeton. He was an assistant professor of mathematics at Chicago and a tenured associate professor at Toronto (directing its Master's in Mathematical Finance) before leaving academia in 2005 to lead quantitative strategies at Bank of America, where he built the "Instinct" adaptive-execution algorithm. In 2008 he co-founded Quantitative Brokers, an agency algorithmic-execution firm for futures and rates, where he is Chief Scientist; he also teaches high-frequency markets at Princeton.

Neil Chriss is a mathematician-turned-quant. He holds a PhD and BS in mathematics from the University of Chicago (working in the Langlands program) and an MS from Caltech, and co-wrote the graduate text "Representation Theory and Complex Geometry" with Ginzburg before turning to finance. His "Black-Scholes and Beyond" (1996) is a widely-read derivatives text. He worked in quantitative strategies at Morgan Stanley, Goldman Sachs Asset Management, and SAC Capital, and founded the hedge fund Hutchin Hill Capital.

Their 2000 paper grew out of practitioner program-trading desks (Chriss was at Morgan Stanley's program-trading group) and gave the field its first clean, usable model of the speed-vs-risk execution trade-off — the foundation that arrival-price and implementation-shortfall algorithms across Wall Street were built on.`,
      id: `Robert Almgren adalah matematikawan terapan yang jadi praktisi execution-research. Anak dari geometer Princeton Frederick J. Almgren Jr., dia ambil gelar fisika dan matematika di MIT, MS di Harvard, dan PhD applied & computational mathematics di Princeton. Dia asisten profesor matematika di Chicago dan tenured associate professor di Toronto (mimpin Master's in Mathematical Finance-nya) sebelum ninggalin akademia tahun 2005 buat mimpin quantitative strategies di Bank of America, di mana dia bangun algoritma adaptive-execution "Instinct". Tahun 2008 dia co-found Quantitative Brokers, firma agency algorithmic-execution buat futures dan rates, di mana dia Chief Scientist; dia juga ngajar high-frequency markets di Princeton.

Neil Chriss matematikawan yang jadi quant. Dia punya PhD dan BS matematika dari University of Chicago (kerja di Langlands program) dan MS dari Caltech, dan co-write textbook graduate "Representation Theory and Complex Geometry" sama Ginzburg sebelum pindah ke finance. "Black-Scholes and Beyond"-nya (1996) textbook derivatif yang banyak dibaca. Dia kerja di quantitative strategies di Morgan Stanley, Goldman Sachs Asset Management, dan SAC Capital, dan founded hedge fund Hutchin Hill Capital.

Paper 2000 mereka tumbuh dari program-trading desk praktisi (Chriss di program-trading group Morgan Stanley) dan ngasih field-nya model pertama yang bersih dan usable dari trade-off execution speed-vs-risk — fondasi tempat algoritma arrival-price dan implementation-shortfall di seluruh Wall Street dibangun.`
    },
    focus: {
      en: `How to optimally execute a large order — liquidate (or acquire) X units over a fixed horizon — when trading moves the price against you. Two costs compete: market impact (trading fast pushes the price unfavourably) and timing/volatility risk (trading slow leaves you exposed to random price moves on the un-executed position). Almgren-Chriss casts this as a mean-variance optimization over the entire trading trajectory, with a risk-aversion parameter that dials between the two. For a linear impact model they derive a closed-form optimal schedule and trace out the *efficient frontier* of execution — the set of trajectories that minimize expected cost for each level of variance.`,
      id: `Gimana optimal eksekusi order gede — liquidate (atau acquire) X unit over horizon tetap — pas trading gerakin harga melawan kamu. Dua cost bersaing: market impact (trading cepet ndorong harga gak menguntungkan) dan timing/volatility risk (trading lambat ninggalin kamu ke-expose ke pergerakan harga random di posisi yang belum dieksekusi). Almgren-Chriss nge-cast ini sebagai optimisasi mean-variance over seluruh trading trajectory, dengan parameter risk-aversion yang nge-dial antara keduanya. Buat model impact linear mereka derive jadwal optimal closed-form dan ngegambar *efficient frontier* eksekusi — himpunan trajectory yang meminimalkan expected cost buat tiap level variance.`
    },
    intellectualLineage: {
      en: `The immediate predecessor is **Bertsimas-Lo (1998)**, which solved optimal execution for a *risk-neutral* trader — minimize expected cost alone — and found a simple result (trade in equal slices, roughly TWAP, when impact is linear). Almgren-Chriss's key move is to add **risk**: a trader cares not just about expected cost but about its *variance*, because a slow schedule leaves a large position exposed to volatility. Minimizing expected-cost + λ·variance turns the single best trajectory into a one-parameter family — the efficient frontier — indexed by risk aversion λ. The impact model is Kyle-flavoured (linear price impact), split into a *permanent* component (the price stays moved) and a *temporary* component (only this trade's fill is worse). The model is also the natural counterpart to Avellaneda-Stoikov: AS optimizes the *market maker's* quoting against inventory risk, while Almgren-Chriss optimizes the *liquidity taker's* schedule against impact and timing risk — the two sides of the same trade.`,
      id: `Predecessor langsungnya **Bertsimas-Lo (1998)**, yang nyelesain optimal execution buat trader *risk-neutral* — minimize expected cost doang — dan nemu hasil sederhana (trade di slice yang sama, kira-kira TWAP, pas impact linear). Langkah kunci Almgren-Chriss itu nambah **risk**: trader peduli bukan cuma expected cost tapi *variance*-nya, karena jadwal lambat ninggalin posisi gede ke-expose ke volatility. Meminimalkan expected-cost + λ·variance ngubah single best trajectory jadi keluarga satu-parameter — efficient frontier — di-index sama risk aversion λ. Model impact-nya Kyle-flavoured (linear price impact), dibelah jadi komponen *permanent* (harga tetep tergeser) dan komponen *temporary* (cuma fill trade ini yang lebih buruk). Model-nya juga counterpart natural ke Avellaneda-Stoikov: AS optimize quoting *market maker* lawan inventory risk, sementara Almgren-Chriss optimize jadwal *liquidity taker* lawan impact dan timing risk — dua sisi dari trade yang sama.`
    },
    keyCollaborators: {
      en: `**Each other**, out of late-1990s program-trading practice. The risk-neutral predecessor is **Dimitris Bertsimas & Andrew Lo (1998)**. Chriss's solo landmark is the textbook **"Black-Scholes and Beyond" (1996)**. The most important successors that relax the linear-impact assumption are **Jim Gatheral (2010)** on no-dynamic-arbitrage constraints for impact models and **Anna Obizhaeva & Jiang Wang (2013)** on limit-order-book supply/demand dynamics and transient impact. Almgren's own later work (e.g. nonlinear impact functions, and the empirical impact estimates from his Bank of America / Quantitative Brokers data) extended the framework toward production use.`,
      id: `**Satu sama lain**, dari praktik program-trading akhir 1990an. Predecessor risk-neutral-nya **Dimitris Bertsimas & Andrew Lo (1998)**. Landmark solo Chriss itu textbook **"Black-Scholes and Beyond" (1996)**. Successor paling penting yang nge-relax asumsi linear-impact itu **Jim Gatheral (2010)** soal no-dynamic-arbitrage constraint buat impact model dan **Anna Obizhaeva & Jiang Wang (2013)** soal supply/demand dynamics limit-order-book dan transient impact. Kerja Almgren sendiri kemudian (misal nonlinear impact function, dan empirical impact estimate dari data Bank of America / Quantitative Brokers-nya) nge-extend framework menuju penggunaan produksi.`
    },
    legacy: {
      en: `Almgren-Chriss is the theoretical foundation of agency execution. Arrival-price and implementation-shortfall algorithms — the default benchmark for institutional execution — are essentially AC in production, and VWAP/TWAP schedules are recognizable special/limiting cases of its trajectory. The two contributions that endure: the framing of execution as a **mean-variance trade-off** (impact vs timing risk) with an explicit risk-aversion knob, and the **efficient frontier** picture that makes "how aggressively should I trade?" a quantitative choice rather than a gut call. Its linear-impact assumptions are the usual simplification, and the active literature has relaxed them — nonlinear and transient (decaying) impact, no-dynamic-arbitrage constraints (Gatheral), explicit order-book resilience (Obizhaeva-Wang), and stochastic volatility/liquidity. But the core mental model — there is an optimal speed, set by how much timing risk you will trade for impact savings — is how every execution desk now thinks. For anyone building VWAP/TWAP/IS algorithms, this is the source.`,
      id: `Almgren-Chriss itu fondasi teoritis agency execution. Algoritma arrival-price dan implementation-shortfall — benchmark default buat eksekusi institusional — pada dasarnya AC di produksi, dan jadwal VWAP/TWAP itu special/limiting case yang bisa dikenali dari trajectory-nya. Dua kontribusi yang awet: framing eksekusi sebagai **trade-off mean-variance** (impact vs timing risk) dengan knob risk-aversion eksplisit, dan gambaran **efficient frontier** yang bikin "seberapa agresif aku harus trade?" jadi pilihan kuantitatif daripada feeling. Asumsi linear-impact-nya itu simplifikasi biasa, dan literatur aktif udah nge-relax mereka — nonlinear dan transient (decaying) impact, no-dynamic-arbitrage constraint (Gatheral), order-book resilience eksplisit (Obizhaeva-Wang), dan stochastic volatility/liquidity. Tapi mental model inti-nya — ada optimal speed, di-set sama seberapa banyak timing risk yang kamu tukar buat impact saving — itu gimana setiap execution desk sekarang mikir. Buat siapa pun yang bangun algoritma VWAP/TWAP/IS, ini sumbernya.`
    },
    keyWorks: [
      { year: 2000, title: 'Optimal Execution of Portfolio Transactions (this item)', venue: 'Journal of Risk' },
      { year: 1998, title: 'Optimal Control of Execution Costs (Bertsimas & Lo)', venue: 'Journal of Financial Markets' },
      { year: 2010, title: 'No-Dynamic-Arbitrage and Market Impact (Gatheral)', venue: 'Quantitative Finance' },
      { year: 1996, title: 'Black-Scholes and Beyond: Option Pricing Models (Chriss)', venue: 'Irwin Professional' },
    ],
  },

  sections: [
    // ─────────────── 1. motivation ───────────────
    {
      id: 'motivation',
      heading: { en: 'Why this matters', id: 'Kenapa ini penting' },
      body: {
        en: `Avellaneda-Stoikov answers how the *market maker* should quote. This module answers the mirror-image question, faced by the MM's counterparty: **you must buy or sell a large position — how do you trade it out over time?**

Say you must liquidate one million shares by the end of the day. You have two bad extremes:

- **Dump it all immediately.** You pay enormous **market impact** — your own selling pushes the price down (Kyle's $\\lambda$ in action), and you fill the later shares at much worse prices. Fast = expensive.
- **Trickle it out very slowly.** You minimize impact, but now you are holding a large unsold position for hours, exposed to **timing risk**: the price can drift against you on pure volatility before you finish. Slow = risky.

Every real execution lives between these. Trading faster cuts volatility exposure but raises impact cost; trading slower cuts impact but raises risk. Before 2000, the standard treatment (Bertsimas-Lo 1998) optimized only *expected* cost — which, for linear impact, just says "trade in equal slices" (TWAP) and ignores risk entirely.

Almgren and Chriss (2000) added the missing half: **risk**. A real trader is not risk-neutral — a strategy with a slightly higher expected cost but much lower variance is often preferable. They write the problem as a **mean-variance optimization over the whole trading trajectory**:

$$\\min_{\\text{trajectory}} \\;\\; \\mathbb{E}[\\text{cost}] + \\lambda \\, \\text{Var}[\\text{cost}],$$

where $\\lambda$ is the trader's risk aversion. The output is not a single answer but a **family** of optimal schedules — the *efficient frontier* of execution: for each tolerable level of variance, the lowest-expected-cost trajectory. A risk-neutral trader ($\\lambda=0$) gets the slow, impact-minimizing straight line; a risk-averse trader front-loads, paying more impact to cut exposure.

This is not an academic curiosity: it is the engine inside arrival-price and implementation-shortfall algorithms, and VWAP/TWAP schedules are special or limiting cases of it (TWAP ≈ the risk-neutral straight line; VWAP ≈ AC re-benchmarked to a volume curve). If you build execution algorithms — including VWAP suites — this is the model you are (knowingly or not) approximating.`,
        id: `Avellaneda-Stoikov ngejawab gimana *market maker* harusnya quote. Modul ini ngejawab pertanyaan cermin-nya, yang dihadapi counterpart MM: **kamu harus beli atau jual posisi gede — gimana kamu trade-out over time?**

Misal kamu harus liquidate satu juta share sebelum akhir hari. Kamu punya dua ekstrem buruk:

- **Buang semua langsung.** Kamu bayar **market impact** gede — jualanmu sendiri ndorong harga turun (λ-nya Kyle in action), dan kamu fill share-share belakangan di harga jauh lebih buruk. Cepet = mahal.
- **Tetesin pelan banget.** Kamu minimize impact, tapi sekarang kamu nahan posisi gede yang belum kejual berjam-jam, ke-expose ke **timing risk**: harga bisa drift melawanmu di volatility murni sebelum kamu selesai. Lambat = berisiko.

Setiap eksekusi nyata hidup di antara ini. Trading lebih cepet motong volatility exposure tapi naikin impact cost; trading lebih lambat motong impact tapi naikin risk. Sebelum 2000, treatment standar (Bertsimas-Lo 1998) optimize cuma *expected* cost — yang, buat impact linear, cuma bilang "trade di slice sama" (TWAP) dan ngabaikan risk sepenuhnya.

Almgren dan Chriss (2000) nambah setengah yang hilang: **risk**. Trader nyata gak risk-neutral — strategi dengan expected cost sedikit lebih tinggi tapi variance jauh lebih rendah sering lebih disukai. Mereka tulis problem-nya sebagai **optimisasi mean-variance over seluruh trading trajectory**:

$$\\min_{\\text{trajectory}} \\;\\; \\mathbb{E}[\\text{cost}] + \\lambda \\, \\text{Var}[\\text{cost}],$$

di mana $\\lambda$ itu risk aversion trader. Output-nya bukan satu jawaban tapi **keluarga** jadwal optimal — *efficient frontier* eksekusi: buat tiap level variance yang ditoleransi, trajectory dengan lowest-expected-cost. Trader risk-neutral ($\\lambda=0$) dapet garis lurus yang lambat dan impact-minimizing; trader risk-averse front-load, bayar lebih banyak impact buat motong exposure.

Ini bukan keingintahuan akademis: dia mesin di dalam algoritma arrival-price dan implementation-shortfall, dan jadwal VWAP/TWAP itu special atau limiting case-nya (TWAP ≈ garis lurus risk-neutral; VWAP ≈ AC yang di-rebenchmark ke volume curve). Kalau kamu bangun execution algorithm — termasuk VWAP suite — ini model yang kamu (sadar atau enggak) approximate.`
      }
    },

    // ─────────────── 2. intuition ───────────────
    {
      id: 'intuition',
      heading: { en: 'Intuition', id: 'Intuisi' },
      body: {
        en: `Two costs, pulling in opposite directions.

**Market impact (favours slow).** When you trade, you consume liquidity and move the price against yourself. Almgren-Chriss splits this into two parts. *Temporary* impact is the extra concession you pay on *this* trade for demanding immediacy — eat deeper into the book, get a worse average fill — and it depends on your trading *rate* (shares per unit time). *Permanent* impact is the part of the move that *stays*: your trading shifts the equilibrium price and does not bounce back. The faster you trade, the higher the temporary impact per share, so impact cost pushes you to **slow down and spread out**.

**Timing risk (favours fast).** While you still hold un-executed shares, their value fluctuates with the market. A position you have not yet sold is exposed to volatility $\\sigma$: by the time you get around to selling it, the price may have wandered far from where you started. The longer you hold, the more this variance accumulates. So timing risk pushes you to **trade fast and get flat**.

**The trade-off is the whole model.** There is no free lunch: cutting impact (go slow) raises risk, cutting risk (go fast) raises impact. What Almgren-Chriss provides is the *optimal* balance for a given appetite. The risk-aversion $\\lambda$ is the dial:

- $\\lambda = 0$ (risk-neutral): you only care about expected cost, so you trade as slowly as the horizon allows — a straight-line, constant-rate liquidation (the TWAP shape).
- $\\lambda$ large (very risk-averse): you front-load aggressively, selling most of the position early to kill exposure, accepting higher impact as the price of safety.

Plot every optimal strategy as a point (expected cost, variance) and you get the **efficient frontier**: a curve where you cannot reduce one without increasing the other. Picking a point on it — picking your $\\lambda$ — is the single execution decision the model makes explicit. The mental image: the efficient frontier turns "trade fast or slow?" from a gut feel into a coordinate on a curve.`,
        id: `Dua cost, narik ke arah berlawanan.

**Market impact (lebih suka lambat).** Pas kamu trade, kamu konsumsi liquidity dan gerakin harga melawanmu. Almgren-Chriss belah ini jadi dua bagian. Impact *temporary* itu konsesi ekstra yang kamu bayar di trade *ini* buat nuntut immediacy — makan lebih dalam ke book, dapet average fill lebih buruk — dan dia tergantung *rate* trading-mu (share per unit waktu). Impact *permanent* itu bagian pergerakan yang *tetep*: trading-mu nggeser equilibrium price dan gak balik. Makin cepet kamu trade, makin tinggi temporary impact per share, jadi impact cost ndorong kamu buat **pelan-pelan dan sebarin**.

**Timing risk (lebih suka cepet).** Selama kamu masih nahan share yang belum dieksekusi, nilainya berfluktuasi sama market. Posisi yang belum kamu jual ke-expose ke volatility $\\sigma$: pas kamu sempet jual, harganya mungkin udah ngembara jauh dari titik awal. Makin lama kamu nahan, makin banyak variance ini berakumulasi. Jadi timing risk ndorong kamu buat **trade cepet dan jadi flat**.

**Trade-off-nya itu seluruh model.** Gak ada free lunch: motong impact (pelan) naikin risk, motong risk (cepet) naikin impact. Yang Almgren-Chriss kasih itu balance *optimal* buat appetite tertentu. Risk-aversion $\\lambda$ itu dial-nya:

- $\\lambda = 0$ (risk-neutral): kamu cuma peduli expected cost, jadi kamu trade selambat yang horizon ngebolehin — liquidation garis-lurus, constant-rate (bentuk TWAP).
- $\\lambda$ gede (sangat risk-averse): kamu front-load agresif, jual sebagian besar posisi awal buat matiin exposure, nerima impact lebih tinggi sebagai harga keamanan.

Plot tiap strategi optimal sebagai titik (expected cost, variance) dan kamu dapet **efficient frontier**: kurva di mana kamu gak bisa ngurangin satu tanpa naikin yang lain. Milih titik di situ — milih $\\lambda$-mu — itu satu keputusan eksekusi yang model bikin eksplisit. Mental image-nya: efficient frontier ngubah "trade cepet atau lambat?" dari feeling jadi koordinat di kurva.`
      }
    },

    // ─────────────── 3. formalization ───────────────
    {
      id: 'formalization',
      heading: { en: 'Formal model', id: 'Model formal' },
      body: {
        en: `**Setup.** Liquidate $X$ units over horizon $T$, divided into $N$ intervals of length $\\tau = T/N$. The *holdings trajectory* is $x_0 = X, x_1, \\dots, x_N = 0$, where $x_k$ is the position still held after interval $k$; the trade in interval $k$ is $n_k = x_{k-1} - x_k$. The mid-price follows an arithmetic random walk with volatility $\\sigma$.

**Impact model (linear).** Two pieces:
- *Permanent impact* $g(v) = \\gamma v$: each unit traded permanently shifts the price by $\\gamma$ per unit. For a full liquidation this contributes a fixed $\\tfrac{1}{2}\\gamma X^2$ to the cost, independent of the schedule.
- *Temporary impact* $h(v) = \\epsilon\\,\\text{sgn}(v) + \\eta v$: trading at rate $v = n_k/\\tau$ worsens *this* interval's fill by $h$, then reverts. The $\\eta$ term is what the schedule can optimize against.

**The two moments.** For a given trajectory, the implementation shortfall (cost vs the arrival price $X S_0$) has:

$$\\mathbb{E}[\\text{cost}] = \\tfrac{1}{2}\\gamma X^2 + \\epsilon \\sum_k |n_k| + \\frac{\\eta}{\\tau}\\sum_k n_k^2, \\qquad \\text{Var}[\\text{cost}] = \\sigma^2 \\sum_k \\tau\\, x_k^2.$$

The variance depends on the *held* quantities $x_k$: holding more, longer, means more exposure. This is why front-loading (small $x_k$ early) cuts variance.

**Mean-variance objective.** Minimize over trajectories:

$$\\min_{x_1,\\dots,x_{N-1}} \\;\\; \\mathbb{E}[\\text{cost}] + \\lambda\\, \\text{Var}[\\text{cost}].$$

In the continuous limit this is $\\min_x \\int_0^T \\left[ \\eta\\, \\dot{x}(t)^2 + \\lambda\\sigma^2 x(t)^2 \\right] dt$ (dropping schedule-independent terms).

**Closed-form solution.** The Euler-Lagrange equation is $\\ddot{x} = \\kappa^2 x$ with the **urgency parameter**

$$\\boxed{\\kappa = \\sqrt{\\frac{\\lambda \\sigma^2}{\\eta}}}$$

and the optimal holdings trajectory is

$$\\boxed{x(t) = X\\, \\frac{\\sinh\\!\\big(\\kappa (T - t)\\big)}{\\sinh(\\kappa T)}}$$

a hyperbolic-sine decay from $X$ to $0$. Read the limits: as $\\kappa \\to 0$ (risk-neutral, $\\lambda=0$, or tiny vol, or huge impact) the $\\sinh$ becomes linear and $x(t) \\to X(1 - t/T)$ — the **straight-line, constant-rate** (TWAP-shaped) liquidation. As $\\kappa$ grows (risk-averse, volatile, or liquid/cheap-impact) the trajectory **front-loads**: most of the position is sold early, exposure decays fast.

**The efficient frontier.** Sweeping $\\lambda$ from $0$ upward traces a convex curve in (expected cost, variance) space. Every point is optimal for *its* $\\lambda$; you cannot lower expected cost without accepting more variance. Choosing $\\lambda$ — equivalently choosing $\\kappa$, the urgency — is the execution decision.`,
        id: `**Setup.** Liquidate $X$ unit over horizon $T$, dibagi jadi $N$ interval panjang $\\tau = T/N$. *Holdings trajectory*-nya $x_0 = X, x_1, \\dots, x_N = 0$, di mana $x_k$ itu posisi yang masih dipegang setelah interval $k$; trade di interval $k$ itu $n_k = x_{k-1} - x_k$. Mid-price mengikuti arithmetic random walk dengan volatility $\\sigma$.

**Model impact (linear).** Dua potong:
- *Permanent impact* $g(v) = \\gamma v$: tiap unit yang di-trade permanently nggeser harga sebesar $\\gamma$ per unit. Buat full liquidation ini nyumbang $\\tfrac{1}{2}\\gamma X^2$ tetap ke cost, independent of schedule.
- *Temporary impact* $h(v) = \\epsilon\\,\\text{sgn}(v) + \\eta v$: trading di rate $v = n_k/\\tau$ memperburuk fill interval *ini* sebesar $h$, lalu revert. Term $\\eta$ itu yang schedule bisa optimize.

**Dua momen.** Buat trajectory tertentu, implementation shortfall (cost vs arrival price $X S_0$) punya:

$$\\mathbb{E}[\\text{cost}] = \\tfrac{1}{2}\\gamma X^2 + \\epsilon \\sum_k |n_k| + \\frac{\\eta}{\\tau}\\sum_k n_k^2, \\qquad \\text{Var}[\\text{cost}] = \\sigma^2 \\sum_k \\tau\\, x_k^2.$$

Variance-nya tergantung kuantitas yang *dipegang* $x_k$: nahan lebih banyak, lebih lama, berarti lebih banyak exposure. Itu kenapa front-loading ($x_k$ kecil di awal) motong variance.

**Objektif mean-variance.** Minimize over trajectory:

$$\\min_{x_1,\\dots,x_{N-1}} \\;\\; \\mathbb{E}[\\text{cost}] + \\lambda\\, \\text{Var}[\\text{cost}].$$

Di continuous limit ini jadi $\\min_x \\int_0^T \\left[ \\eta\\, \\dot{x}(t)^2 + \\lambda\\sigma^2 x(t)^2 \\right] dt$ (ngedrop term yang schedule-independent).

**Solusi closed-form.** Euler-Lagrange equation-nya $\\ddot{x} = \\kappa^2 x$ dengan **urgency parameter**

$$\\boxed{\\kappa = \\sqrt{\\frac{\\lambda \\sigma^2}{\\eta}}}$$

dan optimal holdings trajectory-nya

$$\\boxed{x(t) = X\\, \\frac{\\sinh\\!\\big(\\kappa (T - t)\\big)}{\\sinh(\\kappa T)}}$$

decay hyperbolic-sine dari $X$ ke $0$. Baca limit-nya: pas $\\kappa \\to 0$ (risk-neutral, $\\lambda=0$, atau vol kecil, atau impact gede) $\\sinh$-nya jadi linear dan $x(t) \\to X(1 - t/T)$ — liquidation **garis-lurus, constant-rate** (bentuk TWAP). Pas $\\kappa$ tumbuh (risk-averse, volatile, atau liquid/cheap-impact) trajectory-nya **front-load**: sebagian besar posisi dijual awal, exposure decay cepet.

**Efficient frontier.** Nyapu $\\lambda$ dari $0$ ke atas ngegambar kurva convex di ruang (expected cost, variance). Tiap titik optimal buat $\\lambda$-nya *sendiri*; kamu gak bisa nurunin expected cost tanpa nerima variance lebih. Milih $\\lambda$ — ekuivalen milih $\\kappa$, urgency-nya — itu keputusan eksekusi.`
      }
    },

    // ─────────────── 4. worked-example ───────────────
    {
      id: 'worked-example',
      heading: { en: 'Worked example', id: 'Contoh kerjaan' },
      visualization: {
        id: 'almgren-frontier-simulator',
        component: 'AlmgrenFrontierSim',
        title: {
          en: 'The efficient frontier and the trajectory it picks',
          id: 'Efficient frontier dan trajectory yang dia pilih'
        },
        description: {
          en: "Drag the urgency κ = √(λσ²/η) and watch both panels move together. Top: the convex efficient frontier in (variance, expected-cost) space — the gold dot is your κ. Bottom: the holdings trajectory x(t) = X·sinh(κ(T−t))/sinh(κT) it corresponds to, against the dashed TWAP (κ=0) reference. κ=0 is the straight-line, lowest-cost / highest-variance liquidation; cranking κ up front-loads the schedule — lower variance, higher impact cost — sliding you up-left along the frontier. Raising volatility σ stretches the variance axis (timing risk grows). Numbers are illustrative; the shapes are the point.",
          id: "Geser urgency κ = √(λσ²/η) dan perhatikan kedua panel gerak bareng. Atas: efficient frontier convex di ruang (variance, expected-cost) — titik emas itu κ-mu. Bawah: holdings trajectory x(t) = X·sinh(κ(T−t))/sinh(κT) yang berkorespondensi, lawan referensi TWAP (κ=0) putus-putus. κ=0 itu liquidation garis-lurus, cost-terendah / variance-tertinggi; naikin κ nge-front-load jadwal — variance lebih rendah, impact cost lebih tinggi — nggeser kamu ke kiri-atas sepanjang frontier. Naikin volatility σ nge-stretch sumbu variance (timing risk tumbuh). Angka ilustratif; yang penting bentuknya."
        },
        defaultParams: { X: 100000, T: 5, N: 20, kappa: 0.5, sigma: 0.3, eta: 0.000001 },
        height: 420,
      },
      body: {
        en: `**Two schedules for the same order.** (Numbers illustrative; the shapes are the point.) Liquidate $X = 100{,}000$ shares over $T = 5$ intervals. Compare a **risk-neutral** schedule ($\\lambda = 0$, so $\\kappa = 0$) against a **risk-averse** one with urgency $\\kappa = 0.5$ per interval (e.g. higher volatility or risk aversion). The holdings $x_k$ remaining after each interval:

| after interval $k$ | risk-neutral $x_k$ (linear) | risk-averse $x_k$ ($\\kappa=0.5$) |
|---|---:|---:|
| 0 (start) | 100,000 | 100,000 |
| 1 | 80,000 | 59,946 |
| 2 | 60,000 | 35,194 |
| 3 | 40,000 | 19,424 |
| 4 | 20,000 | 8,613 |
| 5 (done) | 0 | 0 |

The risk-neutral trajectory is the straight line $x_k = X(1 - k/5)$ — sell 20,000 every interval (TWAP). The risk-averse trajectory is $x_k = X\\,\\sinh(0.5(5-k))/\\sinh(2.5)$ — it **front-loads**: it sells ~40,000 in the first interval and only ~8,600 in the last, so it holds far less at every interior point (59,946 vs 80,000 after interval 1, and so on).

**Reading the trade-off.** The risk-averse schedule has *lower variance* — its $\\sum \\tau x_k^2$ is smaller because it is holding less inventory through time, so it is less exposed to a price swing. But it pays *more temporary impact* — its early trades are larger, and impact cost grows with the square of the trade rate ($\\eta n_k^2/\\tau$). The risk-neutral schedule is the cheapest in expectation (smallest, evenly-spread trades) but the most exposed. Neither is "right": they are two points on the efficient frontier, and which one you want is entirely a function of your risk aversion $\\lambda$.

**The urgency dial.** $\\kappa = \\sqrt{\\lambda\\sigma^2/\\eta}$ ties it together. Crank up risk aversion $\\lambda$ or volatility $\\sigma$ → larger $\\kappa$ → more front-loading. Make impact $\\eta$ large (illiquid name) → smaller $\\kappa$ → flatter, slower schedule (you cannot afford to rush). A practical execution algo estimates $\\sigma$, $\\eta$ from data and exposes $\\lambda$ (or directly a "participation rate"/urgency) as the trader's one knob — which is exactly what a VWAP/IS algorithm's "aggressiveness" setting is.`,
        id: `**Dua jadwal buat order yang sama.** (Angka ilustratif; yang penting bentuknya.) Liquidate $X = 100{,}000$ share over $T = 5$ interval. Bandingin jadwal **risk-neutral** ($\\lambda = 0$, jadi $\\kappa = 0$) lawan yang **risk-averse** dengan urgency $\\kappa = 0.5$ per interval (misal volatility atau risk aversion lebih tinggi). Holdings $x_k$ yang tersisa setelah tiap interval:

| setelah interval $k$ | risk-neutral $x_k$ (linear) | risk-averse $x_k$ ($\\kappa=0.5$) |
|---|---:|---:|
| 0 (mulai) | 100,000 | 100,000 |
| 1 | 80,000 | 59,946 |
| 2 | 60,000 | 35,194 |
| 3 | 40,000 | 19,424 |
| 4 | 20,000 | 8,613 |
| 5 (selesai) | 0 | 0 |

Trajectory risk-neutral itu garis lurus $x_k = X(1 - k/5)$ — jual 20,000 tiap interval (TWAP). Trajectory risk-averse itu $x_k = X\\,\\sinh(0.5(5-k))/\\sinh(2.5)$ — dia **front-load**: jual ~40,000 di interval pertama dan cuma ~8,600 di terakhir, jadi dia nahan jauh lebih sedikit di tiap titik interior (59,946 vs 80,000 setelah interval 1, dan seterusnya).

**Baca trade-off-nya.** Jadwal risk-averse punya *variance lebih rendah* — $\\sum \\tau x_k^2$-nya lebih kecil karena dia nahan inventory lebih sedikit sepanjang waktu, jadi lebih sedikit ke-expose ke price swing. Tapi dia bayar *temporary impact lebih banyak* — trade awalnya lebih gede, dan impact cost tumbuh dengan kuadrat trade rate ($\\eta n_k^2/\\tau$). Jadwal risk-neutral itu termurah in expectation (trade terkecil, tersebar rata) tapi paling ke-expose. Gak ada yang "bener": mereka dua titik di efficient frontier, dan mana yang kamu mau sepenuhnya fungsi risk aversion $\\lambda$-mu.

**Dial urgency.** $\\kappa = \\sqrt{\\lambda\\sigma^2/\\eta}$ nyatuin semua. Naikin risk aversion $\\lambda$ atau volatility $\\sigma$ → $\\kappa$ lebih gede → lebih banyak front-loading. Bikin impact $\\eta$ gede (nama illiquid) → $\\kappa$ lebih kecil → jadwal lebih flat, lebih lambat (kamu gak mampu buru-buru). Execution algo praktis estimate $\\sigma$, $\\eta$ dari data dan expose $\\lambda$ (atau langsung "participation rate"/urgency) sebagai satu knob trader — yang itu persis apa setting "aggressiveness" algoritma VWAP/IS.`
      }
    },

    // ─────────────── 5. applications ───────────────
    {
      id: 'applications',
      heading: { en: 'Applications by audience', id: 'Aplikasi per audience' },
      visualization: {
        id: 'almgren-execution-animation',
        component: 'AlmgrenExecutionSim',
        title: {
          en: 'Watch the schedule execute',
          id: 'Lihat jadwalnya tereksekusi'
        },
        description: {
          en: "Press Play to drain the position interval by interval along the optimal trajectory — gold bars are already executed, faint blue are pending, and the readout tracks shares sold, % done, remaining inventory, and the trade this interval. This is what a VWAP/IS execution algo is doing under the hood. Raise the urgency κ to front-load: the early intervals sell much more, flattening the tail (lower exposure, higher impact). κ=0 is the flat TWAP drain. Scrub the step slider to inspect any moment.",
          id: "Tekan Play buat nguras posisi interval demi interval sepanjang trajectory optimal — bar emas udah tereksekusi, biru pudar pending, dan readout nge-track share terjual, % selesai, inventory tersisa, dan trade interval ini. Ini yang execution algo VWAP/IS lakuin di balik layar. Naikin urgency κ buat front-load: interval awal jual jauh lebih banyak, ngedatarin ekor (exposure lebih rendah, impact lebih tinggi). κ=0 itu TWAP drain datar. Geser slider step buat inspeksi momen mana pun."
        },
        defaultParams: { X: 100000, T: 5, N: 20, kappa: 0.5 },
        height: 320,
      },
      body: {
        en: `This section walks from the research frontier, through practitioner deployment, down to the operations and risk desk.

### For the advanced researcher

Almgren-Chriss is the base model that the optimal-execution literature extends. The linear-impact assumption is the obvious target. **Almgren (2003)** and others generalize to nonlinear (e.g. power-law) impact functions, which better match empirical fills. A separate, important critique is that AC's permanent+temporary split is not internally consistent under repeated trading: **Gatheral (2010)** derives *no-dynamic-arbitrage* constraints linking the impact and decay functions, motivating *transient* (decaying) impact models. **Obizhaeva-Wang (2013)** build execution directly on limit-order-book supply/demand and resilience, so impact decays at a finite rate rather than splitting cleanly into permanent/temporary. Further frontiers: stochastic volatility and liquidity, multi-asset/portfolio execution with cross-impact, execution under a benchmark (VWAP/close), and the interaction with the market-maker side (AS) and with informed-flow signals (OFI/VPIN). AC is also the standard benchmark against which reinforcement-learning execution agents are measured.

### For the quant practitioner

This *is* the theory behind your execution stack. Arrival-price / implementation-shortfall algorithms are AC in production; **VWAP and TWAP are special/limiting cases** (TWAP ≈ the risk-neutral straight line; VWAP ≈ a schedule tracking a volume curve). Practical workflow: estimate volatility $\\sigma$ and the impact coefficients ($\\eta$ temporary, $\\gamma$ permanent) from your own fills and market data; expose risk aversion $\\lambda$ (or, equivalently, an "urgency"/"participation" setting) as the one user-facing knob; and compute the schedule from the $\\sinh$ trajectory, re-solving intraday as $\\sigma$ and liquidity update. Cautions: the linear-impact and constant-parameter assumptions are calm-market calibration — in a fast or thin market, real impact is nonlinear and liquidity time-varying, so production algos overlay volume curves, limit-order placement, and toxicity/OFI signals (to slow down when flow is adverse). For a VWAP-suite builder specifically, AC tells you *why* the aggressiveness parameter exists and what it is trading off; the volume curve is the benchmark overlay on top of the AC speed/risk core.

### For the operations team / risk

AC reframes execution cost from an afterthought into a *budgeted, risk-managed* quantity. The efficient frontier is the governance object: it makes explicit that "trade faster" is a *risk decision* (less timing risk, more impact cost), not a free improvement. For oversight: set the desk's $\\lambda$/urgency policy deliberately and consistently with the fund's risk appetite; track realized implementation shortfall against the model's expected-cost prediction (large persistent gaps mean miscalibrated impact parameters or a regime the model does not fit); and recognize that AC's cost/variance numbers are calm-market estimates — during stress, both impact and volatility spike together, so the realized frontier shifts out and urgency policies set in calm conditions can be badly wrong. Pair the model's schedule with hard participation caps and toxicity-aware slowdowns.`,
        id: `Section ini jalan dari research frontier, lewat deployment praktisi, sampai turun ke operations dan risk desk.

### Untuk advanced researcher

Almgren-Chriss itu base model yang literatur optimal-execution extend. Asumsi linear-impact itu target jelas. **Almgren (2003)** dan yang lain generalize ke nonlinear (misal power-law) impact function, yang lebih match empirical fill. Kritik terpisah yang penting: split permanent+temporary AC gak internally consistent di bawah repeated trading: **Gatheral (2010)** derive constraint *no-dynamic-arbitrage* yang ngehubungin impact dan decay function, nge-motivate model impact *transient* (decaying). **Obizhaeva-Wang (2013)** bangun eksekusi langsung di supply/demand dan resilience limit-order-book, jadi impact decay di rate finite daripada belah bersih jadi permanent/temporary. Frontier lebih lanjut: stochastic volatility dan liquidity, eksekusi multi-asset/portfolio dengan cross-impact, eksekusi di bawah benchmark (VWAP/close), dan interaksi sama sisi market-maker (AS) dan sama sinyal informed-flow (OFI/VPIN). AC juga benchmark standar tempat reinforcement-learning execution agent diukur.

### Untuk quant practitioner

Ini *itu* teori di balik execution stack-mu. Algoritma arrival-price / implementation-shortfall itu AC di produksi; **VWAP dan TWAP itu special/limiting case** (TWAP ≈ garis lurus risk-neutral; VWAP ≈ jadwal yang nge-track volume curve). Workflow praktis: estimate volatility $\\sigma$ dan koefisien impact ($\\eta$ temporary, $\\gamma$ permanent) dari fill-mu sendiri dan market data; expose risk aversion $\\lambda$ (atau, ekuivalen, setting "urgency"/"participation") sebagai satu knob user-facing; dan compute jadwal dari $\\sinh$ trajectory, re-solve intraday pas $\\sigma$ dan liquidity update. Peringatan: asumsi linear-impact dan constant-parameter itu kalibrasi calm-market — di market cepet atau tipis, impact nyata itu nonlinear dan liquidity time-varying, jadi production algo overlay volume curve, limit-order placement, dan sinyal toxicity/OFI (buat pelan pas flow adverse). Buat builder VWAP-suite khususnya, AC kasih tau *kenapa* parameter aggressiveness ada dan apa yang dia trade-off; volume curve itu benchmark overlay di atas core speed/risk AC.

### Untuk tim operations / risk

AC nge-reframe execution cost dari afterthought jadi kuantitas yang *di-budget dan risk-managed*. Efficient frontier itu objek governance-nya: dia bikin eksplisit bahwa "trade lebih cepet" itu *keputusan risk* (lebih sedikit timing risk, lebih banyak impact cost), bukan improvement gratis. Buat oversight: set policy $\\lambda$/urgency desk secara deliberate dan konsisten sama risk appetite fund; track realized implementation shortfall lawan prediksi expected-cost model (gap gede yang persisten berarti impact parameter miscalibrated atau regime yang model gak fit); dan sadari bahwa angka cost/variance AC itu estimasi calm-market — selama stress, impact dan volatility spike bareng, jadi realized frontier-nya geser keluar dan policy urgency yang di-set di kondisi calm bisa salah parah. Pasangin jadwal model sama hard participation cap dan slowdown toxicity-aware.`
      }
    },

    // ─────────────── 6. practice ───────────────
    {
      id: 'practice',
      heading: { en: 'Practice', id: 'Latihan' },
      body: {
        en: `**1.** A risk-neutral trader ($\\lambda = 0$) must liquidate 60,000 shares over 3 equal intervals under linear impact. What is the optimal schedule, and what common algorithm does it correspond to?

<details><summary>Answer</summary>
With $\\lambda = 0$, $\\kappa = \\sqrt{\\lambda\\sigma^2/\\eta} = 0$, so the trajectory is the straight line $x_k = X(1 - k/N)$: holdings 60,000 → 40,000 → 20,000 → 0, i.e. sell 20,000 in each interval. Equal-sized slices over the horizon is the TWAP (time-weighted average price) schedule. With no risk term, the only goal is to minimize expected impact, which — because the per-interval impact cost is convex (it grows with the square of the trade rate) — means spreading trades as evenly as possible.
</details>

**2.** Two traders face the same order and the same stock, but trader B is more risk-averse (larger $\\lambda$). Whose schedule front-loads more, whose has lower variance, and whose pays more market impact?

<details><summary>Answer</summary>
Trader B (larger $\\lambda$) has the larger urgency $\\kappa = \\sqrt{\\lambda\\sigma^2/\\eta}$, so B front-loads more — selling a bigger fraction early. B therefore holds less inventory through time, giving B's schedule the *lower variance* (less timing-risk exposure). But B's early trades are larger, so B pays *more temporary impact cost* (which grows with the square of the trade rate). A pays less impact but carries more risk. They sit at different points on the same efficient frontier.
</details>

**3.** In the urgency parameter $\\kappa = \\sqrt{\\lambda\\sigma^2/\\eta}$, what happens to the optimal schedule if the stock becomes much less liquid (temporary-impact coefficient $\\eta$ rises sharply), holding $\\lambda$ and $\\sigma$ fixed?

<details><summary>Answer</summary>
A larger $\\eta$ shrinks $\\kappa$ (it is in the denominator under the square root), so the trajectory flattens toward the slow, straight-line (TWAP) shape. Intuition: when impact is expensive, rushing is very costly, so the optimal response is to slow down and spread the order out more, accepting more timing risk because the impact penalty for trading fast is now too high. Conversely, a very liquid name (small $\\eta$) lets you front-load aggressively at little impact cost.
</details>

**4.** VWAP and TWAP are often described as "execution algorithms," and so is implementation shortfall (arrival price). How does Almgren-Chriss relate to all three?

<details><summary>Answer</summary>
Almgren-Chriss is the underlying optimal-execution framework; the three are points/overlays on it. TWAP is essentially the risk-neutral ($\\kappa \\to 0$) straight-line schedule — trade evenly over time. VWAP is a schedule that tracks the day's expected volume curve (trade more when the market trades more) — it can be seen as AC with the benchmark/objective set to the volume-weighted price rather than the arrival price. Implementation-shortfall / arrival-price algorithms are the most direct realization of AC: they minimize cost-plus-risk against the arrival price, exposing the risk-aversion/urgency knob ($\\lambda$, hence $\\kappa$) as the user's aggressiveness setting. So AC is the theory; VWAP/TWAP/IS are the productized strategies that specialize or benchmark it.
</details>`,
        id: `**1.** Trader risk-neutral ($\\lambda = 0$) harus liquidate 60,000 share over 3 interval sama di bawah linear impact. Apa jadwal optimal-nya, dan algoritma umum apa yang dia korespondensi?

<details><summary>Jawaban</summary>
Dengan $\\lambda = 0$, $\\kappa = \\sqrt{\\lambda\\sigma^2/\\eta} = 0$, jadi trajectory-nya garis lurus $x_k = X(1 - k/N)$: holdings 60,000 → 40,000 → 20,000 → 0, yaitu jual 20,000 tiap interval. Slice sama-ukuran over horizon itu jadwal TWAP (time-weighted average price). Tanpa term risk, satu-satunya goal itu minimize expected impact, yang — karena impact cost per-interval konveks (tumbuh dengan kuadrat trade rate) — berarti nyebar trade serata mungkin.
</details>

**2.** Dua trader hadapi order sama dan saham sama, tapi trader B lebih risk-averse (λ lebih gede). Jadwal siapa yang lebih front-load, siapa yang variance-nya lebih rendah, dan siapa yang bayar market impact lebih banyak?

<details><summary>Jawaban</summary>
Trader B (λ lebih gede) punya urgency $\\kappa = \\sqrt{\\lambda\\sigma^2/\\eta}$ lebih gede, jadi B lebih front-load — jual fraksi lebih gede di awal. B karenanya nahan inventory lebih sedikit sepanjang waktu, ngasih jadwal B *variance lebih rendah* (exposure timing-risk lebih sedikit). Tapi trade awal B lebih gede, jadi B bayar *temporary impact cost lebih banyak* (yang tumbuh dengan kuadrat trade rate). A bayar impact lebih sedikit tapi bawa risk lebih banyak. Mereka duduk di titik berbeda di efficient frontier yang sama.
</details>

**3.** Di urgency parameter $\\kappa = \\sqrt{\\lambda\\sigma^2/\\eta}$, apa yang terjadi ke jadwal optimal kalau saham jadi jauh lebih illiquid (koefisien temporary-impact $\\eta$ naik tajam), nahan $\\lambda$ dan $\\sigma$ fixed?

<details><summary>Jawaban</summary>
$\\eta$ lebih gede nyusutin $\\kappa$ (dia di denominator di bawah akar), jadi trajectory-nya flatten menuju bentuk garis-lurus (TWAP) yang lambat. Intuisi: pas impact mahal, buru-buru sangat costly, jadi respons optimal itu pelan-pelan dan sebarin order lebih banyak, nerima timing risk lebih karena penalty impact buat trade cepet sekarang terlalu tinggi. Sebaliknya, nama yang sangat liquid (η kecil) ngebolehin kamu front-load agresif di impact cost kecil.
</details>

**4.** VWAP dan TWAP sering disebut "execution algorithm," dan begitu juga implementation shortfall (arrival price). Gimana Almgren-Chriss berhubungan sama ketiganya?

<details><summary>Jawaban</summary>
Almgren-Chriss itu framework optimal-execution yang mendasari; ketiganya itu titik/overlay di atasnya. TWAP pada dasarnya jadwal garis-lurus risk-neutral ($\\kappa \\to 0$) — trade rata over time. VWAP itu jadwal yang nge-track volume curve ekspektasi hari (trade lebih banyak pas market trade lebih banyak) — bisa dilihat sebagai AC dengan benchmark/objektif di-set ke volume-weighted price daripada arrival price. Algoritma implementation-shortfall / arrival-price itu realisasi paling langsung dari AC: mereka minimize cost-plus-risk lawan arrival price, expose knob risk-aversion/urgency ($\\lambda$, makanya $\\kappa$) sebagai setting aggressiveness user. Jadi AC itu teorinya; VWAP/TWAP/IS itu strategi yang di-produktisasi yang nge-specialize atau nge-benchmark dia.
</details>`
      }
    },

    // ─────────────── 7. connections ───────────────
    {
      id: 'connections',
      heading: { en: 'Connections', id: 'Koneksi' },
      body: {
        en: `- **Prereqs**: [Kyle 1985](item:kyle-1985) supplies the price-impact $\\lambda$ that Almgren-Chriss turns into an execution cost — AC is, in a sense, "what to do about your own $\\lambda$." [Hasbrouck 2007](item:hasbrouck-2007) provides the empirical methods to estimate the volatility and impact parameters AC needs.
- **Counterpart**: [Avellaneda-Stoikov 2008](item:stoikov-2008) is the other side of the trade — AS optimizes the market maker's quoting against inventory risk; AC optimizes the liquidity taker's schedule against impact and timing risk. The AC trader's market impact is, in part, the AS maker's adverse selection.
- **Related to**: [Cont-Kukanov-Stoikov 2014](item:cont-kukanov-stoikov-2014) (OFI) and [Easley-López de Prado-O'Hara 2012](item:easley-lopez-prado-vpin) (VPIN) — production execution overlays AC with these toxicity/imbalance signals to slow down when flow turns adverse.
- **Builds toward**: nonlinear impact (Almgren 2003), no-dynamic-arbitrage and transient impact (Gatheral 2010), order-book resilience (Obizhaeva-Wang 2013), and the arrival-price / implementation-shortfall / VWAP / TWAP algorithm family that productizes the model.`,
        id: `- **Prereqs**: [Kyle 1985](item:kyle-1985) nyediain price-impact $\\lambda$ yang Almgren-Chriss ubah jadi execution cost — AC itu, dalam arti, "apa yang harus dilakuin soal $\\lambda$-mu sendiri." [Hasbrouck 2007](item:hasbrouck-2007) nyediain metode empiris buat estimate parameter volatility dan impact yang AC butuh.
- **Counterpart**: [Avellaneda-Stoikov 2008](item:stoikov-2008) itu sisi lain dari trade — AS optimize quoting market maker lawan inventory risk; AC optimize jadwal liquidity taker lawan impact dan timing risk. Market impact trader AC itu, sebagian, adverse selection maker AS.
- **Related to**: [Cont-Kukanov-Stoikov 2014](item:cont-kukanov-stoikov-2014) (OFI) dan [Easley-López de Prado-O'Hara 2012](item:easley-lopez-prado-vpin) (VPIN) — production execution overlay AC sama sinyal toxicity/imbalance ini buat pelan pas flow jadi adverse.
- **Builds toward**: nonlinear impact (Almgren 2003), no-dynamic-arbitrage dan transient impact (Gatheral 2010), order-book resilience (Obizhaeva-Wang 2013), dan keluarga algoritma arrival-price / implementation-shortfall / VWAP / TWAP yang nge-produktisasi model-nya.`
      }
    },

    // ─────────────── 8. sources ───────────────
    {
      id: 'sources',
      heading: { en: 'Sources', id: 'Sumber' },
      body: {
        en: `- **Almgren, R., and Chriss, N.** (2000). "Optimal Execution of Portfolio Transactions." *Journal of Risk*, 3(2), 5-39. The mean-variance optimal-execution paper. **(This item.)**
- **Kyle, A. S.** (1985). "Continuous Auctions and Insider Trading." *Econometrica*, 53(6), 1315-1335. The source of the linear price-impact $\\lambda$ that AC operationalizes.
- **Bertsimas, D., and Lo, A. W.** (1998). "Optimal Control of Execution Costs." *Journal of Financial Markets*, 1(1), 1-50. The risk-neutral predecessor that AC extends by adding variance.
- **Gatheral, J.** (2010). "No-Dynamic-Arbitrage and Market Impact." *Quantitative Finance*, 10(7), 749-759. No-arbitrage constraints on impact, motivating transient-impact models.
- **Obizhaeva, A. A., and Wang, J.** (2013). "Optimal Trading Strategy and Supply/Demand Dynamics." *Journal of Financial Markets*, 16(1), 1-32. Execution built on limit-order-book resilience.`,
        id: `- **Almgren, R., dan Chriss, N.** (2000). "Optimal Execution of Portfolio Transactions." *Journal of Risk*, 3(2), 5-39. Paper optimal-execution mean-variance. **(Item ini.)**
- **Kyle, A. S.** (1985). "Continuous Auctions and Insider Trading." *Econometrica*, 53(6), 1315-1335. Sumber linear price-impact $\\lambda$ yang AC operasionalkan.
- **Bertsimas, D., dan Lo, A. W.** (1998). "Optimal Control of Execution Costs." *Journal of Financial Markets*, 1(1), 1-50. Predecessor risk-neutral yang AC extend dengan nambah variance.
- **Gatheral, J.** (2010). "No-Dynamic-Arbitrage and Market Impact." *Quantitative Finance*, 10(7), 749-759. No-arbitrage constraint di impact, nge-motivate transient-impact model.
- **Obizhaeva, A. A., dan Wang, J.** (2013). "Optimal Trading Strategy and Supply/Demand Dynamics." *Journal of Financial Markets*, 16(1), 1-32. Eksekusi dibangun di resilience limit-order-book.`
      }
    },
  ],

  audio: { enabled: true },

  selfTest: [
    {
      sectionId: 'intuition',
      question: {
        en: 'Almgren-Chriss balances two opposing costs. Name them, say which way each pushes the trading speed, and why.',
        id: 'Almgren-Chriss nyeimbangin dua cost berlawanan. Sebutin, bilang ke arah mana masing-masing ndorong trading speed, dan kenapa.'
      },
      prompt: { en: 'Before continuing, try answering:', id: 'Sebelum lanjut, coba jawab:' },
      answer: {
        en: 'Market impact and timing (volatility) risk. (1) Market impact favours trading SLOWLY: trading consumes liquidity and moves the price against you, and temporary impact grows with the trade rate, so spreading the order out over time reduces the per-share concession. (2) Timing risk favours trading FAST: while you still hold un-executed shares, their value fluctuates with volatility σ, so the longer you hold the position the more variance (exposure to an adverse price move) you accumulate — getting flat quickly cuts that risk. The two pull in opposite directions, and the optimal speed is the balance, set by the trader\'s risk aversion λ.',
        id: 'Market impact dan timing (volatility) risk. (1) Market impact lebih suka trading PELAN: trading konsumsi liquidity dan gerakin harga melawanmu, dan temporary impact tumbuh dengan trade rate, jadi nyebar order over time ngurangin konsesi per-share. (2) Timing risk lebih suka trading CEPET: selama kamu masih nahan share yang belum dieksekusi, nilainya berfluktuasi sama volatility σ, jadi makin lama kamu nahan posisi makin banyak variance (exposure ke pergerakan harga adverse) yang berakumulasi — jadi flat cepet motong risk itu. Keduanya narik ke arah berlawanan, dan optimal speed itu balance-nya, di-set sama risk aversion λ trader.'
      }
    },
    {
      sectionId: 'formalization',
      question: {
        en: 'The optimal holdings trajectory is x(t) = X·sinh(κ(T−t))/sinh(κT) with κ = √(λσ²/η). What schedule do you get as κ → 0, and what does that limit correspond to?',
        id: 'Optimal holdings trajectory-nya x(t) = X·sinh(κ(T−t))/sinh(κT) dengan κ = √(λσ²/η). Jadwal apa yang kamu dapet pas κ → 0, dan limit itu korespondensi ke apa?'
      },
      prompt: { en: 'Before continuing, try answering:', id: 'Sebelum lanjut, coba jawab:' },
      answer: {
        en: 'As κ → 0, sinh(κ(T−t))/sinh(κT) → (T−t)/T, so x(t) → X(1 − t/T): a straight line from X down to 0 — constant-rate liquidation, i.e. the TWAP shape. κ → 0 happens when λ = 0 (risk-neutral), or volatility σ is tiny, or temporary impact η is huge. Economically: with no risk penalty (or nothing to fear / too-costly impact), the trader only minimizes expected impact, which — because the per-interval impact cost is convex (quadratic in the trade rate) — means spreading trades perfectly evenly. As κ grows (more risk aversion, more volatility, or cheaper impact) the sinh curve bends and the schedule front-loads — selling more early to cut exposure.',
        id: 'Pas κ → 0, sinh(κ(T−t))/sinh(κT) → (T−t)/T, jadi x(t) → X(1 − t/T): garis lurus dari X turun ke 0 — liquidation constant-rate, yaitu bentuk TWAP. κ → 0 terjadi pas λ = 0 (risk-neutral), atau volatility σ kecil banget, atau temporary impact η gede banget. Secara ekonomi: tanpa penalty risk (atau gak ada yang ditakutin / impact terlalu mahal), trader cuma minimize expected impact, yang — karena impact cost per-interval konveks (kuadratik di trade rate) — berarti nyebar trade perfectly rata. Pas κ tumbuh (risk aversion lebih, volatility lebih, atau impact lebih murah) kurva sinh-nya nekuk dan jadwal-nya front-load — jual lebih banyak awal buat motong exposure.'
      }
    },
    {
      sectionId: 'formalization',
      question: {
        en: 'Why does the variance term in the objective depend on the HELD quantities x_k (Σ τ x_k²) rather than on the trades n_k? What behaviour does that drive?',
        id: 'Kenapa term variance di objektif tergantung kuantitas yang DIPEGANG x_k (Σ τ x_k²) daripada trade n_k? Behaviour apa yang itu drive?'
      },
      prompt: { en: 'Before continuing, try answering:', id: 'Sebelum lanjut, coba jawab:' },
      answer: {
        en: 'Because timing risk comes from PRICE MOVES on the position you are still holding, not from the act of trading. Over an interval of length τ, an un-executed holding x_k is exposed to the mid-price\'s random walk, contributing variance σ²·τ·x_k²; the total is Σ σ²τx_k². The trades n_k determine impact COST (the expectation term), but the held inventory determines RISK. This is exactly why front-loading reduces variance: by selling more early, you make the x_k small sooner, so you carry less exposed inventory through time. A risk-averse trader accepts larger (more impactful) early trades precisely to shrink the x_k and thus the Σ τ x_k² risk.',
        id: 'Karena timing risk datang dari PERGERAKAN HARGA di posisi yang masih kamu pegang, bukan dari tindakan trading. Over interval panjang τ, holding x_k yang belum dieksekusi ke-expose ke random walk mid-price, nyumbang variance σ²·τ·x_k²; totalnya Σ σ²τx_k². Trade n_k nentuin impact COST (term ekspektasi), tapi inventory yang dipegang nentuin RISK. Ini persis kenapa front-loading ngurangin variance: dengan jual lebih banyak awal, kamu bikin x_k kecil lebih cepet, jadi kamu bawa inventory ke-expose lebih sedikit sepanjang waktu. Trader risk-averse nerima trade awal lebih gede (lebih impactful) persis buat nyusutin x_k dan jadi Σ τ x_k² risk-nya.'
      }
    },
    {
      sectionId: 'applications',
      question: {
        en: 'Your VWAP suite has an "aggressiveness" parameter. Using Almgren-Chriss, explain what that parameter is really controlling and the trade-off the user is making when they turn it up.',
        id: 'VWAP suite-mu punya parameter "aggressiveness." Pakai Almgren-Chriss, jelasin apa yang parameter itu sebenernya kontrol dan trade-off apa yang user bikin pas mereka naikin.'
      },
      prompt: { en: 'Before continuing, try answering:', id: 'Sebelum lanjut, coba jawab:' },
      answer: {
        en: 'The aggressiveness setting is, in Almgren-Chriss terms, the risk-aversion λ — equivalently the urgency κ = √(λσ²/η). Turning it UP means a higher κ: the schedule front-loads, executing more of the order early (relative to the volume-curve baseline). The trade-off: higher aggressiveness reduces TIMING RISK (you get the position done sooner, so less exposure to the price drifting away from your arrival/benchmark price — lower variance of execution cost) at the expense of higher MARKET IMPACT (faster, larger early trades push the price more and worsen your average fill — higher expected cost). Turning it DOWN trades the opposite way: cheaper impact, more risk. So the user is choosing a point on the efficient frontier — there is no "free" aggressiveness; up buys certainty about cost by paying more expected cost.',
        id: 'Setting aggressiveness itu, dalam istilah Almgren-Chriss, risk-aversion λ — ekuivalen urgency κ = √(λσ²/η). Naikin berarti κ lebih tinggi: jadwal front-load, eksekusi lebih banyak order di awal (relatif ke baseline volume-curve). Trade-off-nya: aggressiveness lebih tinggi ngurangin TIMING RISK (kamu nyelesain posisi lebih cepet, jadi lebih sedikit exposure ke harga drift jauh dari arrival/benchmark price-mu — variance execution cost lebih rendah) dengan ongkos MARKET IMPACT lebih tinggi (trade awal lebih cepet, lebih gede ndorong harga lebih banyak dan memperburuk average fill — expected cost lebih tinggi). Nurunin nge-trade sebaliknya: impact lebih murah, risk lebih banyak. Jadi user milih titik di efficient frontier — gak ada aggressiveness "gratis"; naik beli kepastian soal cost dengan bayar expected cost lebih.'
      }
    },
  ],
};
