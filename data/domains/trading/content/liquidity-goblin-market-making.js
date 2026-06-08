// ─────────────────────────────────────────────────────────────────────────
// Trading domain — @liquiditygoblin: crypto market-making, adverse selection,
// and the edge-decay portfolio. The "be the bookie, not the gambler" engine
// (sell liquidity for a tiny edge at huge turnover), mark-outs as the toxicity
// metric, chase-the-uninformed, HFT lead-lag & edge decay, MEV / "do the good
// leg", limits of arbitrage, the retail-accessible cash-and-carry funding edge,
// the variance premium, table selection, and risk as a PID control system.
// Established micro-structure + academic references, web-verified; carries the
// interactive FundingRateSim (the funding carry he flags as retail-accessible).
// Educational, NOT financial advice; not affiliated with or endorsed by him.
// ─────────────────────────────────────────────────────────────────────────

export const CONTENT = {
  itemId: 'liquidity-goblin-market-making',
  estimatedReadMinutes: 30,

  author: {
    fullName: { en: 'LiquidityGoblin (@liquiditygoblin)', id: 'LiquidityGoblin (@liquiditygoblin)' },
    affiliation: {
      en: 'Anonymous crypto proprietary market-maker / HFT / MEV quant. Trades crypto spot, perpetuals and (newly) options across many venues, with Binance as the leading HFT reference venue. Publishes the "Liquidity Letters" Substack (mostly paid), the bybitpremiums.xyz funding tool, and a 1inch CLI on GitHub. The method is grounded in the academic market-microstructure of Glosten-Milgrom, Kyle, Avellaneda-Stoikov and the VPIN flow-toxicity literature.',
      id: 'Market-maker / HFT / MEV quant proprietary crypto anonim. Trade crypto spot, perpetual dan (baru-baru ini) opsi lintas banyak venue, dengan Binance sebagai venue referensi HFT yang memimpin. Nerbitin Substack "Liquidity Letters" (sebagian besar berbayar), tool funding bybitpremiums.xyz, dan CLI 1inch di GitHub. Metodenya berakar di microstructure akademik dari Glosten-Milgrom, Kyle, Avellaneda-Stoikov dan literatur flow-toxicity VPIN.',
    },
    tagline: {
      en: 'Be the bookie, not the gambler. Sell liquidity for a tiny edge at huge turnover, obsessively avoid the informed counterparty via mark-outs, and survive on a portfolio of uncorrelated, decaying edges.',
      id: 'Jadilah bandar, bukan penjudi. Jual likuiditas demi edge tipis dengan turnover besar, hindari mati-matian counterparty yang informed lewat mark-out, dan bertahan di atas portofolio edge yang tidak berkorelasi dan terus decay.',
    },
    bio: {
      en: `He came into crypto through atomic cross-exchange / flash-loan arbitrage and grew into a full prop market-maker, HFT and MEV operator. His self-description is the **used-car dealer of crypto**: quote a bid slightly below fair value and an ask slightly above, don't predict direction, and earn the spread by **turning over** as much inventory as possible — he targets 3-4x his allocated capital per day (a USD 1M book trading ~USD 4M/day). The single risk that can sink that engine is **adverse selection**: "does he know something we don't?" Some flow is toxic (informed); the rest is uninformed or forced. His signature tool for telling them apart is the **mark-out** — taking each fill and marking it to the mid at 5s / 10s / 1min / 5min / end-of-day to see whether the flow moved against him.

⟦Note: compiled from his public material (Risk Biscuits Interview #04, Insilico Terminal Podcast Ep. 28, Trading Stories), grounded in established microstructure references — web-verified. Educational, NOT financial advice; not affiliated with or endorsed by @liquiditygoblin. Most of his core is institutional / infra-dependent and NOT retail-replicable.⟧`,
      id: `Dia masuk crypto lewat arbitrase atomic cross-exchange / flash-loan dan berkembang jadi market-maker prop, HFT dan operator MEV penuh. Deskripsi dirinya itu **dealer mobil bekas kripto**: pasang bid sedikit di bawah fair value dan ask sedikit di atas, jangan prediksi arah, dan dapetin spread dengan **memutar (turnover)** inventory sebanyak mungkin — dia targetin 3-4x modal yang dialokasikan per hari (book USD 1M trading ~USD 4M/hari). Satu risiko yang bisa menenggelamkan mesin itu adalah **adverse selection**: "apa dia tahu sesuatu yang kita tidak tahu?" Sebagian flow itu toxic (informed); sisanya uninformed atau terpaksa. Tool andalannya buat membedakan itu adalah **mark-out** — ambil tiap fill dan mark ke mid di 5d / 10d / 1mnt / 5mnt / akhir-hari buat lihat apakah flow-nya bergerak lawan dia.

⟦Catatan: dikompilasi dari materi publiknya (Risk Biscuits Interview #04, Insilico Terminal Podcast Ep. 28, Trading Stories), berakar di referensi microstructure mapan — terverifikasi-web. Edukatif, BUKAN nasihat keuangan; tidak berafiliasi dengan atau didukung oleh @liquiditygoblin. Sebagian besar intinya itu institusional / bergantung-infra dan BUKAN buat ditiru ritel.⟧`,
    },
    focus: {
      en: `Three things hold the whole method together. **First, chase the uninformed and route away from the informed.** The market is "a group of people," not an omniscient oracle — the whole game is to transact against weaker counterparties (degenerate gamblers in perps, liquidations, forced sellers, points-farmers churning wash volume) and away from the more-informed. Perps are *less* toxic than spot (leverage-driven degens); options flow is *more* institutional and toxic (RFQ/OTC, ex-TradFi desks, miner hedging). **Second, edges decay.** His simplest signal — a regression on a large print on the leading venue, ~USD 50k → ~20bps on laggards in seconds — may give only ~5bps a week later, below cost; so he continuously renews, combines weak signals, and only fires when expected move > transaction cost. **Third, risk is a control system.** "Our trading systems are basically a PID controller": quote width, size and aggressiveness are continuously re-tuned toward a target; left untouched 2-3 weeks they all stop making money. You can only tell a dead edge from variance via P&L, so you run a portfolio of uncorrelated *strategies*, not just of assets.`,
      id: `Tiga hal yang nyatuin seluruh metode ini. **Pertama, kejar yang KURANG informed dan menjauh dari yang LEBIH informed.** Pasar itu "sekelompok orang", bukan oracle mahatahu — seluruh permainannya adalah transaksi lawan counterparty yang lebih lemah (penjudi degenerate di perp, likuidasi, penjual terpaksa, points-farmer yang muter volume wash) dan menjauh dari yang lebih informed. Perp *kurang* toxic daripada spot (degen yang digerakkan leverage); flow opsi *lebih* institusional dan toxic (RFQ/OTC, desk eks-TradFi, hedging miner). **Kedua, edge decay.** Sinyal paling sederhananya — regresi pada print besar di venue yang memimpin, ~USD 50k → ~20bps di venue laggard dalam hitungan detik — seminggu kemudian mungkin cuma ngasih ~5bps, di bawah biaya; jadi dia terus memperbarui, ngegabung sinyal-sinyal lemah, dan cuma nembak pas ekspektasi gerak > biaya transaksi. **Ketiga, risiko itu sistem kontrol.** "Sistem trading kami pada dasarnya PID controller": lebar quote, ukuran, dan agresivitas terus di-tune ulang menuju target; dibiarkan 2-3 minggu semuanya berhenti menghasilkan. Edge mati cuma bisa dibedain dari variance lewat P&L, jadi dia jalanin portofolio *strategi* yang tidak berkorelasi, bukan cuma aset.`,
    },
    intellectualLineage: {
      en: `The "does he know something?" core is **Glosten-Milgrom (1985)**: the bid-below / ask-above is the *adverse-selection premium* a maker charges because some counterparties are informed; and **Bagehot/Treynor (1971)**, "the market maker loses to the informed and profits only from uninformed liquidity traders," is the theory under his table selection. The quoting math is **Avellaneda-Stoikov (2008)** — bid/ask skewed around an inventory- and volatility-adjusted *reservation price* — the formal face of the "used-car dealer" with turnover. The fear of the hidden informed trader is **Kyle (1985)** (informed order flow hidden in noise; price impact = depth). Mark-outs operationalise **Easley-López de Prado-O'Hara VPIN (2012)** flow-toxicity. The lead-lag race is **Hasbrouck (1995)** information share plus **Budish-Cramton-Shim (2015)** (continuous books make speed decisive); MEV is **Daian et al. (2020)**; the "free arb isn't free" trap is **Shleifer-Vishny (1997)** limits of arbitrage; and the edge-decay thesis is **McLean-Pontiff (2016)**.`,
      id: `Inti "apa dia tahu sesuatu?" itu **Glosten-Milgrom (1985)**: bid-di-bawah / ask-di-atas itu *premi adverse-selection* yang dikenakan maker karena sebagian counterparty itu informed; dan **Bagehot/Treynor (1971)**, "market maker kalah ke yang informed dan cuma untung dari liquidity trader yang uninformed", itu teori di balik table selection-nya. Matematika quoting-nya itu **Avellaneda-Stoikov (2008)** — bid/ask di-skew di sekitar *reservation price* yang disesuaikan inventory dan volatilitas — wajah formal "dealer mobil bekas" dengan turnover. Ketakutan pada informed trader tersembunyi itu **Kyle (1985)** (order flow informed disembunyiin di noise; price impact = depth). Mark-out mengoperasionalkan flow-toxicity **Easley-López de Prado-O'Hara VPIN (2012)**. Balapan lead-lag itu information share **Hasbrouck (1995)** plus **Budish-Cramton-Shim (2015)** (buku kontinu bikin kecepatan menentukan); MEV itu **Daian dkk. (2020)**; jebakan "arb gratis tidak gratis" itu limits of arbitrage **Shleifer-Vishny (1997)**; dan tesis edge-decay itu **McLean-Pontiff (2016)**.`,
    },
    keyCollaborators: {
      en: `Not a coauthor network — an anonymous solo/small-team prop operator. The relevant "collaborators" are the public venues that host the interviews (Risk Biscuits, Insilico Terminal, Trading Stories), the tools he ships (bybitpremiums.xyz funding tool, a 1inch CLI on GitHub, the Liquidity Letters Substack), and the leading reference venue (Binance) whose prints he races. The academic neighbours are the microstructure canon (Glosten-Milgrom, Kyle, Avellaneda-Stoikov, VPIN), the options-vol practitioners he cites (Sinclair's "Volatility Trading", Natenberg), and the control-theory text (Åström-Murray) behind the PID metaphor.`,
      id: `Bukan jaringan coauthor — operator prop solo/tim-kecil anonim. "Kolaborator" yang relevan itu venue publik yang nge-host wawancaranya (Risk Biscuits, Insilico Terminal, Trading Stories), tool yang dia rilis (tool funding bybitpremiums.xyz, CLI 1inch di GitHub, Substack Liquidity Letters), dan venue referensi yang memimpin (Binance) yang print-nya dia balapin. Tetangga akademiknya itu kanon microstructure (Glosten-Milgrom, Kyle, Avellaneda-Stoikov, VPIN), praktisi vol-opsi yang dia kutip (Sinclair "Volatility Trading", Natenberg), dan teks teori-kontrol (Åström-Murray) di balik metafora PID.`,
    },
    legacy: {
      en: `His public legacy is a brutally honest *operating manual* for surviving as a small player in a market that is mostly faster, better-capitalised desks. The lessons that travel beyond crypto: spreads are paid for adverse selection, so measure your toxicity (mark-outs) before you measure your alpha; pick your table before you pick your model; size by edge and risk-of-ruin, not headline payoff; treat any system as a PID loop that decays without maintenance; and hide durable retail edge behind *friction* (new chains, slow bridges, ugly tooling the pros won't touch) — the annoying setup work is the moat. His closing realism is the most quoted line: most crypto fortunes were just being long ETH/BTC, trading for a living is a job ~99.9% of attempters fail at, and you should be skeptical of all shared "alpha," including this module.`,
      id: `Warisan publiknya itu *manual operasi* yang jujur brutal buat bertahan sebagai pemain kecil di pasar yang sebagian besar diisi desk yang lebih cepat dan bermodal lebih besar. Pelajaran yang berlaku di luar crypto: spread dibayar untuk adverse selection, jadi ukur toxicity-mu (mark-out) sebelum ngukur alpha-mu; pilih meja sebelum pilih model; ukur posisi berdasarkan edge dan risk-of-ruin, bukan payout headline; perlakukan tiap sistem sebagai loop PID yang decay tanpa perawatan; dan sembunyiin edge ritel yang tahan lama di balik *friksi* (chain baru, bridge lambat, tooling jelek yang pro malas sentuh) — kerja setup yang nyebelin itu sendiri moat-nya. Penutup realistisnya itu kalimat yang paling sering dikutip: sebagian besar kekayaan crypto itu cuma long ETH/BTC, trading buat hidup itu pekerjaan yang ~99,9% pencoba gagal, dan kamu harus skeptis ke semua "alpha" yang dibagikan, termasuk module ini.`,
    },
    keyWorks: [
      { year: 2023, title: 'Risk Biscuits Interview #04 (with Liquidity Goblin) — market making, mark-outs, HFT lead-lag, MEV, funding carry, table selection, PID-control, the honeypot wallet, the USDC-depeg trade', venue: 'Risk Biscuits (podcast/interview)' },
      { year: 2023, title: 'Insilico Terminal Podcast Ep. 28 & Trading Stories: "What Can You Do To Make Money Right Now?"', venue: 'Insilico Terminal / Trading Stories (podcasts)' },
      { year: 2023, title: '"Liquidity Letters" (mostly-paid Substack) + bybitpremiums.xyz funding tool + 1inch arbitrage CLI', venue: 'Substack / web tool / GitHub' },
      { year: 1985, title: 'Bid, Ask and Transaction Prices in a Specialist Market with Heterogeneously Informed Traders (Glosten & Milgrom) — the adverse-selection spread', venue: 'Journal of Financial Economics 14:71-100 (in this catalog)' },
      { year: 2008, title: 'High-frequency trading in a limit order book (Avellaneda & Stoikov) — inventory-aware reservation-price quoting', venue: 'Quantitative Finance 8(3):217-224' },
      { year: 2012, title: 'Flow Toxicity and Liquidity in a High-Frequency World — VPIN (Easley, López de Prado & O\'Hara)', venue: 'Review of Financial Studies 25(5):1457-1493 (in this catalog)' },
    ],
  },

  sections: [
    {
      id: 'motivation',
      heading: { en: 'Why this matters', id: 'Kenapa ini penting' },
      body: {
        en: `Most trading education tells you how to *predict price*. A market-maker does almost the opposite: he doesn't predict direction, he **sells liquidity** for a tiny edge and earns by repetition. @liquiditygoblin's frame is the casino: **be the bookie who collects the vig, not the gambler.** Quote a bid slightly *below* fair value and an ask slightly *above*; whoever crosses the spread pays you a little, and your profit is

$$\\text{P\\&L} \\approx (\\text{edge per trade}) \\times (\\text{turnover}).$$

He targets **3-4x turnover** of his allocated capital per day — a USD 1M book trading ~USD 4M/day — so an edge of a few basis points compounds into a real business. [Practitioner]

But there is a catch baked into the model. The counterparty who takes your quote might know something you don't. That is **adverse selection**, and the question that runs through everything he does is *"does he know something we don't?"* [Established] Some flow is **toxic** (informed — it tends to be right and you lose on those fills); the rest is **uninformed or forced** (degenerate perp gamblers, liquidations, forced sellers, wash-trading farmers) — and that is the flow a maker *wants*. The spread exists precisely to be paid for the toxic fills out of the benign ones.

This module teaches that engine and the discipline around it: the inventory-aware quoting math; **mark-outs**, his signature way to *measure* toxicity; how to chase the uninformed and route away from the informed; why edges **decay** and must be renewed; the retail-accessible **cash-and-carry funding** trade (carried by the interactive sim); and risk as a **PID control system** plus a **portfolio of uncorrelated strategies**.

⟦Disclaimer: educational, NOT financial advice; not affiliated with or endorsed by @liquiditygoblin. Most of his core (automated MM, HFT, MEV, cross-exchange arb) is INSTITUTIONAL and NOT retail-replicable; all his specific numbers are illustrative of a *mechanism*, not live edges.⟧`,
        id: `Sebagian besar edukasi trading ngajarin kamu cara *memprediksi harga*. Market-maker ngelakuin hampir kebalikannya: dia gak memprediksi arah, dia **jual likuiditas** demi edge tipis dan dapet dari pengulangan. Frame @liquiditygoblin itu kasino: **jadilah bandar yang ngumpulin vig, bukan penjudi.** Pasang bid sedikit *di bawah* fair value dan ask sedikit *di atas*; siapa pun yang menyeberangi spread bayar kamu sedikit, dan profitmu adalah

$$\\text{P\\&L} \\approx (\\text{edge per trade}) \\times (\\text{turnover}).$$

Dia targetin **turnover 3-4x** dari modal yang dialokasikan per hari — book USD 1M trading ~USD 4M/hari — jadi edge beberapa basis poin pun ngompon jadi bisnis nyata. [Practitioner]

Tapi ada jebakan yang nempel di model ini. Counterparty yang ngambil quote-mu mungkin tahu sesuatu yang kamu gak tahu. Itu **adverse selection**, dan pertanyaan yang ngalir di semua yang dia lakuin adalah *"apa dia tahu sesuatu yang kita tidak tahu?"* [Established] Sebagian flow itu **toxic** (informed — cenderung benar dan kamu kalah di fill itu); sisanya **uninformed atau terpaksa** (penjudi degenerate perp, likuidasi, penjual terpaksa, farmer wash-trading) — dan itu flow yang *diinginkan* maker. Spread ada justru buat dibayarin fill toxic dari yang benign.

Module ini ngajarin mesin itu dan disiplin di sekitarnya: matematika quoting yang sadar-inventory; **mark-out**, cara andalannya buat *mengukur* toxicity; cara ngejar yang uninformed dan menjauh dari yang informed; kenapa edge **decay** dan harus diperbarui; trade **cash-and-carry funding** yang bisa-diakses ritel (dibawa oleh sim interaktif); dan risiko sebagai **sistem kontrol PID** plus **portofolio strategi tidak berkorelasi**.

⟦Disclaimer: edukatif, BUKAN nasihat keuangan; tidak berafiliasi dengan atau didukung oleh @liquiditygoblin. Sebagian besar intinya (MM otomatis, HFT, MEV, arb cross-exchange) itu INSTITUSIONAL dan BUKAN buat ditiru ritel; semua angka spesifiknya ilustrasi *mekanisme*, bukan edge live.⟧`,
      },
    },
    {
      id: 'intuition',
      heading: { en: 'Be the bookie: the used-car dealer engine', id: 'Jadilah bandar: mesin dealer mobil bekas' },
      body: {
        en: `Picture a **used-car dealer**. He doesn't bet on whether cars go up; he buys a little under what a car is worth and sells a little over, and makes money on *flow* — how many cars pass through the lot. A market-maker is the same: quote a bid under fair value, an ask over, and earn the **spread** on volume. The more you turn over, the more the tiny edge adds up. That is why @liquiditygoblin obsesses over **turnover** (3-4x/day), not direction. [Practitioner]

Now the danger. Not every buyer is a clueless tourist. Some are **informed** — they buy from you *just before* the price rises and sell to you *just before* it falls. You systematically lose on those fills. That is **adverse selection**, and it is *why the spread exists at all*: the bid-below / ask-above is an **adverse-selection premium** you charge so the benign flow pays for the toxic flow. [Established] The whole craft is keeping the benign minus toxic balance positive.

So how do you *see* toxicity? With **mark-outs**. Take each fill price and compare it to the mid a few seconds, a minute, five minutes later. If the mid drifts *against* you after your fills — you bought and it kept falling, you sold and it kept rising — that flow was **toxic**; if the curve stays flat or drifts your way, it was benign. A single big trade that marks out sharply against you is a **red flag**: stop quoting that token, or go hunt the faster information source the counterparty must have seen. [Practitioner]

The strategic consequence is **table selection**, borrowed from poker: *don't play the toughest table — find the soft one and sit with the weaker players.* The market is "a group of people," not an oracle. Perps are full of leverage-driven degens (less toxic); options flow is institutional ex-TradFi desks (more toxic). Find low-liquidity venues, **paythroughs** (a market order eating several book levels, a wick on the candle), and forced or visible flow (a liquidation, a farmer who *must* trade, an on-chain TWAP you can watch execute). Riding a forced print in the same direction beats any clever model. "Find people worse than you and sit with them." [Practitioner]`,
        id: `Bayangin **dealer mobil bekas**. Dia gak taruhan apakah mobil naik; dia beli sedikit di bawah nilai mobil dan jual sedikit di atas, dan dapet dari *flow* — berapa banyak mobil lewat lot. Market-maker sama: pasang bid di bawah fair value, ask di atas, dan dapet **spread** dari volume. Makin banyak kamu muter, makin numpuk edge tipisnya. Itu kenapa @liquiditygoblin terobsesi sama **turnover** (3-4x/hari), bukan arah. [Practitioner]

Sekarang bahayanya. Gak semua pembeli itu turis lugu. Sebagian **informed** — mereka beli dari kamu *tepat sebelum* harga naik dan jual ke kamu *tepat sebelum* harga turun. Kamu sistematis kalah di fill itu. Itu **adverse selection**, dan itu *kenapa spread ada sama sekali*: bid-di-bawah / ask-di-atas itu **premi adverse-selection** yang kamu kenakan supaya flow benign bayarin flow toxic. [Established] Seluruh keahliannya itu menjaga keseimbangan benign minus toxic tetap positif.

Jadi gimana kamu *melihat* toxicity? Dengan **mark-out**. Ambil tiap harga fill dan bandingin sama mid beberapa detik, semenit, lima menit kemudian. Kalau mid melayang *lawan* kamu setelah fill — kamu beli dan terus turun, kamu jual dan terus naik — flow itu **toxic**; kalau kurvanya datar atau melayang ke arahmu, itu benign. Satu trade besar yang mark out tajam lawan kamu itu **bendera merah**: berhenti quote token itu, atau buru sumber informasi lebih cepat yang pasti dilihat counterparty. [Practitioner]

Konsekuensi strategisnya itu **table selection**, dipinjem dari poker: *jangan main di meja paling sulit — cari yang lunak dan duduk sama pemain yang lebih lemah.* Pasar itu "sekelompok orang", bukan oracle. Perp penuh degen yang digerakkan leverage (kurang toxic); flow opsi itu desk institusional eks-TradFi (lebih toxic). Cari venue likuiditas-rendah, **paythrough** (market order makan beberapa level buku, wick di candle), dan flow yang terpaksa atau terlihat (likuidasi, farmer yang *harus* trade, TWAP on-chain yang bisa kamu lihat eksekusi). Numpang print terpaksa di arah yang sama ngalahin model pintar mana pun. "Cari orang yang lebih buruk dari kamu dan duduk sama mereka." [Practitioner]`,
      },
    },
    {
      id: 'formalization',
      heading: { en: 'Quoting, mark-outs and the funding carry, formalized', id: 'Quoting, mark-out dan funding carry, diformalkan' },
      visualization: {
        id: 'liquidity-goblin-market-making-viz',
        component: 'FundingRateSim',
        title: {
          en: 'The funding carry: who pays, and the cash-and-carry he flags as retail-accessible',
          id: 'Funding carry: siapa bayar, dan cash-and-carry yang dia tandai bisa-diakses ritel',
        },
        description: {
          en: "The perpetual funding rate F(P) = P + clamp(I−P, −c, c) as a function of the perp premium P (all % per funding interval). Three regimes: F = I (flat band) for a small premium; F = P−c when the perp is rich (longs pay); F = P+c when it is cheap (shorts pay). For @liquiditygoblin this is his ONE retail-accessible edge: hold spot (earning staking yield) and SHORT the perp against it to collect funding while delta-neutral — his ATOM example, ~20% staking + 11-20% funding ≈ ~28% market-neutral. Read off the annualised funding (F × periods/yr), who pays, and remember his rule: the carry only pays if it OUTLIVES the ~20-30bps round-trip entry/exit cost (≈ one week of yield), and it still carries de-peg, liquidation, smart-contract and counterparty risk.",
          id: "Funding rate perpetual F(P) = P + clamp(I−P, −c, c) sebagai fungsi premium perp P (semua % per interval funding). Tiga regime: F = I (band datar) buat premium kecil; F = P−c pas perp kaya (long bayar); F = P+c pas murah (short bayar). Buat @liquiditygoblin ini SATU edge yang bisa-diakses ritel: pegang spot (dapet staking yield) dan SHORT perp lawannya buat ngumpulin funding sambil delta-netral — contoh ATOM-nya, ~20% staking + 11-20% funding ≈ ~28% market-neutral. Baca funding tahunan (F × periode/thn), siapa bayar, dan ingat aturannya: carry cuma bayar kalau MELEBIHI biaya masuk/keluar bolak-balik ~20-30bps (≈ seminggu yield), dan tetap bawa risiko de-peg, likuidasi, smart-contract, dan counterparty.",
        },
        defaultParams: { premium: 0.03, interest: 0.01, clampC: 0.05, intervalHours: 8 },
        height: 420,
      },
      body: {
        en: `**1) The quoting engine (Avellaneda-Stoikov).** A maker doesn't quote symmetrically around the mid; he quotes around an inventory- and volatility-adjusted **reservation price**. With mid $s$, inventory $q$, risk aversion $\\gamma$, volatility $\\sigma$ and horizon $T-t$:
$$r = s - q\\,\\gamma\\,\\sigma^2 (T-t),$$
so when he is *long* ($q>0$) the reservation price drops *below* the mid, skewing his quotes to sell off the unwanted inventory. The total optimal spread widens with volatility and with order-book competition. This is the formal face of the "used-car dealer + turnover" engine. [Established]

**2) Why the spread exists (Glosten-Milgrom).** If a fraction of incoming orders are informed, a competitive maker must set the ask *above* and the bid *below* the expected value so that the gains from uninformed traders cover the losses to informed ones. The spread *is* the **adverse-selection premium**. [Established]

**3) Mark-outs (the toxicity metric).** For a fill at price $p_0$ on side $d\\in\\{+1\\text{ (buy)}, -1\\text{ (sell)}\\}$, the mark-out at horizon $\\tau$ is
$$\\text{MO}(\\tau) = d\\,\\big(m_{t+\\tau} - p_0\\big),$$
where $m_{t+\\tau}$ is the mid $\\tau$ later (5s, 10s, 1m, 5m, EOD). $\\text{MO}<0$ means the market moved *against* the fill → toxic/informed flow. A flat or positive curve = benign flow to keep quoting; a sharply negative curve = stop. This is the desk-level version of **VPIN** flow-toxicity. [Practitioner]

**4) The funding carry (the sim).** The one retail-accessible edge. The perpetual **funding rate** ties the perp to spot:
$$F(P) = P + \\mathrm{clamp}(I - P,\\ -c,\\ c),$$
with premium index $P$, small interest $I\\approx0.01\\%$/8h, clamp $c\\approx0.05\\%$. When $F>0$, **longs pay shorts**: hold *spot* (earning staking/lending yield) and *short the perp* against it, stay delta-neutral, and **collect $+F$** — the cash-and-carry. His ATOM example: ~20% staking + 11-20% funding $\\approx$ ~28% market-neutral; DeFi loops reached 30-40%. **His gate:** the round-trip entry/exit on the liquid leg costs ~20-30bps ($\\approx$ one week of yield), so the carry only pays if it persists *more than a week*. Extreme prints (FXS ~390% APR, XCN ~190%) are transient and tiny-capacity. [His] The sim plots $F(P)$ so you can read the annualised funding, who pays, and where a carry is even worth entering.`,
        id: `**1) Mesin quoting (Avellaneda-Stoikov).** Maker gak quote simetris di sekitar mid; dia quote di sekitar **reservation price** yang disesuaikan inventory dan volatilitas. Dengan mid $s$, inventory $q$, risk aversion $\\gamma$, volatilitas $\\sigma$ dan horizon $T-t$:
$$r = s - q\\,\\gamma\\,\\sigma^2 (T-t),$$
jadi pas dia *long* ($q>0$) reservation price turun *di bawah* mid, nge-skew quote-nya buat ngelepas inventory yang gak diinginkan. Total spread optimal melebar dengan volatilitas dan dengan kompetisi order-book. Ini wajah formal mesin "dealer mobil bekas + turnover". [Established]

**2) Kenapa spread ada (Glosten-Milgrom).** Kalau sebagian order masuk itu informed, maker yang kompetitif harus pasang ask *di atas* dan bid *di bawah* nilai ekspektasi supaya keuntungan dari trader uninformed nutupin kerugian ke yang informed. Spread itu *adalah* **premi adverse-selection**. [Established]

**3) Mark-out (metrik toxicity).** Buat fill di harga $p_0$ di sisi $d\\in\\{+1\\text{ (beli)}, -1\\text{ (jual)}\\}$, mark-out di horizon $\\tau$ itu
$$\\text{MO}(\\tau) = d\\,\\big(m_{t+\\tau} - p_0\\big),$$
dengan $m_{t+\\tau}$ itu mid $\\tau$ kemudian (5d, 10d, 1m, 5m, EOD). $\\text{MO}<0$ berarti pasar bergerak *lawan* fill → flow toxic/informed. Kurva datar atau positif = flow benign buat terus quote; kurva tajam negatif = berhenti. Ini versi desk-level dari flow-toxicity **VPIN**. [Practitioner]

**4) Funding carry (sim-nya).** Satu edge yang bisa-diakses ritel. **Funding rate** perpetual ngiket perp ke spot:
$$F(P) = P + \\mathrm{clamp}(I - P,\\ -c,\\ c),$$
dengan premium index $P$, interest kecil $I\\approx0.01\\%$/8h, clamp $c\\approx0.05\\%$. Pas $F>0$, **long bayar short**: pegang *spot* (dapet staking/lending yield) dan *short perp* lawannya, tetap delta-netral, dan **ngumpulin $+F$** — cash-and-carry. Contoh ATOM-nya: ~20% staking + 11-20% funding $\\approx$ ~28% market-neutral; loop DeFi nyampe 30-40%. **Gerbangnya:** entry/exit bolak-balik di leg likuid biaya ~20-30bps ($\\approx$ seminggu yield), jadi carry cuma bayar kalau bertahan *lebih dari seminggu*. Print ekstrem (FXS ~390% APR, XCN ~190%) itu transient dan kapasitas-kecil. [His] Sim ngeplot $F(P)$ jadi kamu bisa baca funding tahunan, siapa bayar, dan di mana carry layak dimasuki sama sekali.`,
      },
    },
    {
      id: 'worked-example',
      heading: { en: 'Worked example: a fill, a mark-out, and a carry', id: 'Contoh: sebuah fill, mark-out, dan carry' },
      body: {
        en: `**(A) A benign vs a toxic fill (illustrative).** You quote a low-cap altcoin: bid 100.0, ask 100.2 (a 20bps spread), each for 1 unit.

- **Benign fill.** A perp degen market-buys your ask at 100.2. You are now *short* 1 unit. Mark-outs: mid at 5s = 100.18, 1m = 100.05, 5m = 100.1. Computed as $d(m-p_0)$ with $d=-1$ (you sold): $\\text{MO}(5\\text{s}) = -(100.18-100.2) = +0.02$, and it stays slightly positive. The curve is **flat/positive** → benign. Keep quoting; you captured the spread.
- **Toxic fill.** A single large buy lifts your ask at 100.2, and the mid then runs to 100.6 (5s), 101.4 (1m). $\\text{MO}(1\\text{m}) = -(101.4-100.2) = -1.2$ — a sharp **adverse** mark-out. Red flag: that counterparty was informed. **Stop quoting** this token and go find the faster info source they saw. [Practitioner]

**(B) The funding carry (his ATOM example, illustrative).** ATOM perp funding is rich: premium index $P=+0.10\\%$/8h, with $I=0.01\\%$, $c=0.05\\%$. Past the upper kink ($I+c=0.06\\%$), the clamp binds: $F = P - c = 0.10\\% - 0.05\\% = 0.05\\%$/8h. **Annualised:** $0.05\\%\\times1095 \\approx 55\\%$/yr in funding alone — and **longs pay shorts**. So: hold ATOM spot earning ~20% staking, **short the perp** to collect funding, stay delta-neutral. Net market-neutral carry $\\approx$ staking + funding. His real example netted ~28%. [His]

**His gate (the part beginners skip).** Entering and exiting the *liquid leg* (spot + perp) costs ~20-30bps round-trip — about **one week of yield**. So the carry only pays if it **persists more than a week**. A transient FXS-style ~390% APR print looks irresistible but is gone (and tiny-capacity) before you've recouped the entry cost. And it is **not free**: de-peg, liquidation (the short perp can be liquidated on a sharp rally), smart-contract/bridge risk in DeFi loops, counterparty/exchange risk, and a funding *reversal* (longs stop paying) all bite. [His]

⟦Disclaimer: illustrative numbers, NOT a recommendation. Treat every figure as a *mechanism* demo; by the time a number reaches a public podcast, that specific edge is almost certainly arbitraged away.⟧`,
        id: `**(A) Fill benign vs toxic (ilustratif).** Kamu quote altcoin low-cap: bid 100.0, ask 100.2 (spread 20bps), masing-masing 1 unit.

- **Fill benign.** Degen perp market-buy ask-mu di 100.2. Kamu sekarang *short* 1 unit. Mark-out: mid di 5d = 100.18, 1m = 100.05, 5m = 100.1. Dihitung sebagai $d(m-p_0)$ dengan $d=-1$ (kamu jual): $\\text{MO}(5\\text{d}) = -(100.18-100.2) = +0.02$, dan tetap sedikit positif. Kurvanya **datar/positif** → benign. Terus quote; kamu nangkep spread.
- **Fill toxic.** Satu beli besar ngangkat ask-mu di 100.2, dan mid lalu lari ke 100.6 (5d), 101.4 (1m). $\\text{MO}(1\\text{m}) = -(101.4-100.2) = -1.2$ — mark-out **adverse** tajam. Bendera merah: counterparty itu informed. **Berhenti quote** token ini dan cari sumber info lebih cepat yang mereka lihat. [Practitioner]

**(B) Funding carry (contoh ATOM-nya, ilustratif).** Funding perp ATOM kaya: premium index $P=+0.10\\%$/8h, dengan $I=0.01\\%$, $c=0.05\\%$. Lewat kink atas ($I+c=0.06\\%$), clamp ngebind: $F = P - c = 0.10\\% - 0.05\\% = 0.05\\%$/8h. **Annualised:** $0.05\\%\\times1095 \\approx 55\\%$/thn dari funding aja — dan **long bayar short**. Jadi: pegang spot ATOM dapet ~20% staking, **short perp** buat ngumpulin funding, tetap delta-netral. Net carry market-neutral $\\approx$ staking + funding. Contoh aslinya net ~28%. [His]

**Gerbangnya (bagian yang dilewati pemula).** Masuk dan keluar dari *leg likuid* (spot + perp) biaya ~20-30bps bolak-balik — sekitar **seminggu yield**. Jadi carry cuma bayar kalau **bertahan lebih dari seminggu**. Print ~390% APR gaya FXS yang transient keliatan gak tertahan tapi udah hilang (dan kapasitas-kecil) sebelum kamu balikin biaya masuk. Dan itu **gak gratis**: de-peg, likuidasi (short perp bisa dilikuidasi pas rally tajam), risiko smart-contract/bridge di loop DeFi, risiko counterparty/exchange, dan *pembalikan* funding (long berhenti bayar) semuanya menggigit. [His]

⟦Disclaimer: angka ilustratif, BUKAN rekomendasi. Perlakukan tiap angka sebagai demo *mekanisme*; pas sebuah angka nyampe podcast publik, edge spesifik itu hampir pasti udah di-arbitrase habis.⟧`,
      },
    },
    {
      id: 'applications',
      heading: { en: 'Applications', id: 'Aplikasi' },
      body: {
        en: `**HFT lead-lag (the latency edge).** His simplest signal: a linear regression on a large print on the **leading venue** (Binance for BTC). Every print above ~USD 50k is followed by ~20bps on laggard venues within seconds — so race to trade the same token there before they catch up. The signal is trivial; *being good at it is being fast* (co-location, microsecond networking, fast code). In continuous order books a lead-lag signal becomes a pure **speed race** (Budish-Cramton-Shim), which is why a microsecond latency edge is worth so much. [Established] And it **decays**: the same USD 50k trigger a week later may give only ~5bps, below cost — so you renew, combine weak signals, and fire only when expected move > transaction cost. [His]

**MEV, atomic arb and "do the good leg".** His entry to crypto was atomic cross-exchange / flash-loan arbitrage (borrow ~USD 100M with no capital, buy low / sell high in one block). It is now degraded: on-chain priority-gas auctions bid **~95-96% of the profit to the validator**. [His] His evolution: don't always close both legs atomically — take the *favourable* leg and exit the other later on a deep, liquid venue (e.g. Binance for ~3-5bps vs ~20bps atomic), keeping roughly twice the edge but carrying brief inventory risk you must be able to hedge.

**Limits of arbitrage.** His cautionary tale: a token looked mispriced between Kraken and Binance, but the two venues used different chains (Ethereum mainnet vs BNB-Chain), so the same token was **non-redeemable** across them — the "free" arb wasn't free. The rule: never do one leg of a liquid-market arb blindly; find the hidden friction (withdrawal limits, bridges, non-redeemability) first. This is **Shleifer-Vishny** limits-of-arbitrage made operational. [Established]

**Options: the variance premium.** Both sides of an option trade live off the gap between the vol you *pay* and the vol you *realise* delta-hedging it — but the sign matters. The **variance risk premium** is the *short-vol seller's* edge: implied vol systematically prices *above* the vol that subsequently realises, so the seller pockets $P\\&L \\approx$ implied vol − realised vol on average. [Established] A *long-gamma* position is the opposite sign — it only profits when realised exceeds implied, $P\\&L \\approx$ realised vol − implied vol — and you harvest that by **gamma-scalping**: hedge by buying dips and selling rips in the cheap, liquid underlying (not by round-tripping wide options, which cost ~20% in vol terms). The vol smile's slope (tangent at 50-delta) is the **skew**, encoding negative spot-vol correlation — markets crash with vol spikes, so puts are bid. [Established]

**Risk as a control system + the portfolio.** "Our trading systems are basically a PID controller": width, size and aggressiveness are continuously re-tuned toward a target; left 2-3 weeks they all stop making money — *trading is maintenance, not set-and-forget*. [His] You can only tell a dead edge from variance via P&L, so run enough **uncorrelated strategies** (options-vol vs spot, carry vs lead-lag) that one going quiet doesn't sink you; pick edges by return-on-capital *and* return-on-time, and run a portfolio of **strategies**, not just of assets. [Established]

**Honest limits.** Most of the above is **institutional** — it needs in-house infra, exchange/market-maker agreements, capital and a team. The retail-accessible pieces (funding carry, locked-token convergence, table selection, memecoin friction) are *not safe*: carry has de-peg, liquidation, smart-contract/bridge, counterparty and funding-reversal risk; the eye-watering APRs are transient and capacity-limited. Keep forced-flow / liquidity-harvesting ideas **defensive** — recognise the regime, don't be the harvested stop. And carry his realism: most crypto fortunes were just being long ETH/BTC; ~99.9% of people who try to trade for a living fail; be skeptical of all shared "alpha," including this. [His]`,
        id: `**HFT lead-lag (edge latency).** Sinyal paling sederhananya: regresi linear pada print besar di **venue yang memimpin** (Binance buat BTC). Tiap print di atas ~USD 50k diikuti ~20bps di venue laggard dalam hitungan detik — jadi balapan trade token yang sama di sana sebelum mereka nyusul. Sinyalnya sepele; *jadi jago di situ itu jadi cepat* (co-location, networking mikrodetik, kode cepat). Di order book kontinu sinyal lead-lag jadi **balapan kecepatan** murni (Budish-Cramton-Shim), itu kenapa edge latensi mikrodetik berharga banget. [Established] Dan dia **decay**: trigger USD 50k yang sama seminggu kemudian mungkin cuma ngasih ~5bps, di bawah biaya — jadi kamu perbarui, gabung sinyal lemah, dan nembak cuma pas ekspektasi gerak > biaya transaksi. [His]

**MEV, atomic arb dan "do the good leg".** Masuknya ke crypto itu arbitrase atomic cross-exchange / flash-loan (pinjem ~USD 100M tanpa modal, beli murah / jual mahal dalam satu blok). Sekarang udah merosot: priority-gas auction on-chain nawar **~95-96% profit ke validator**. [His] Evolusinya: jangan selalu tutup kedua leg atomik — ambil leg yang *menguntungkan* dan keluar yang lain nanti di venue dalam dan likuid (misal Binance buat ~3-5bps vs ~20bps atomik), nyimpen kira-kira dua kali edge tapi bawa inventory risk singkat yang harus bisa kamu hedge.

**Limits of arbitrage.** Kisah peringatannya: sebuah token keliatan salah-harga antara Kraken dan Binance, tapi dua venue itu pakai chain berbeda (Ethereum mainnet vs BNB-Chain), jadi token yang sama **tidak bisa-ditebus** lintas keduanya — arb "gratis" itu gak gratis. Aturannya: jangan pernah ngelakuin satu leg arb pasar-likuid secara buta; cari friksi tersembunyi (limit penarikan, bridge, non-redeemability) dulu. Ini limits-of-arbitrage **Shleifer-Vishny** yang dioperasionalkan. [Established]

**Opsi: premi variance.** Kedua sisi trade opsi hidup dari gap antara vol yang kamu *bayar* dan vol yang kamu *realisasi* pas delta-hedging — tapi tandanya penting. **Variance risk premium** itu edge *penjual short-vol*: implied vol sistematis di-harga *di atas* vol yang kemudian terealisasi, jadi penjual ngantongin $P\\&L \\approx$ implied vol − realised vol rata-rata. [Established] Posisi *long-gamma* itu tanda kebalikannya — cuma untung kalau realised melebihi implied, $P\\&L \\approx$ realised vol − implied vol — dan kamu memanennya dengan **gamma-scalp**: hedge dengan beli dip dan jual rip di underlying yang murah dan likuid (bukan dengan bolak-balik opsi lebar, yang biayanya ~20% dalam istilah vol). Kemiringan smile vol (tangen di 50-delta) itu **skew**, ngekode korelasi spot-vol negatif — pasar jatuh dengan lonjakan vol, jadi put dibeli. [Established]

**Risiko sebagai sistem kontrol + portofolio.** "Sistem trading kami pada dasarnya PID controller": lebar, ukuran, agresivitas terus di-tune ulang menuju target; dibiarkan 2-3 minggu semuanya berhenti menghasilkan — *trading itu perawatan, bukan set-and-forget*. [His] Edge mati cuma bisa dibedain dari variance lewat P&L, jadi jalanin cukup **strategi tidak berkorelasi** (vol-opsi vs spot, carry vs lead-lag) supaya satu yang sepi gak nenggelamin kamu; pilih edge berdasarkan return-on-capital *dan* return-on-time, dan jalanin portofolio **strategi**, bukan cuma aset. [Established]

**Batas jujur.** Sebagian besar di atas itu **institusional** — butuh infra in-house, perjanjian exchange/market-maker, modal dan tim. Bagian yang bisa-diakses ritel (funding carry, konvergensi locked-token, table selection, friksi memecoin) itu *tidak aman*: carry punya risiko de-peg, likuidasi, smart-contract/bridge, counterparty dan pembalikan funding; APR yang bikin melongo itu transient dan kapasitas-terbatas. Jaga ide forced-flow / liquidity-harvesting tetap **defensif** — kenali regime-nya, jangan jadi stop yang dipanen. Dan bawa realismenya: sebagian besar kekayaan crypto cuma long ETH/BTC; ~99,9% orang yang coba trading buat hidup gagal; skeptis ke semua "alpha" yang dibagikan, termasuk ini. [His]`,
      },
    },
    {
      id: 'practice',
      heading: { en: 'Practice', id: 'Latihan' },
      body: {
        en: `**1.** A market-maker says he doesn't predict direction. Where does his P&L come from, and what is the single risk that can make a positive-spread book bleed?

<details><summary>Answer</summary>
P&L ≈ (edge per trade) × (turnover). He quotes a bid below fair value and an ask above (the "used-car dealer"), captures the spread, and makes it a business by TURNING OVER capital 3-4x/day — so a few bps compounds. The killer risk is ADVERSE SELECTION: some counterparties are informed and buy from him just before a rise / sell just before a fall, so he systematically loses on those (toxic) fills. The spread itself IS the adverse-selection premium (Glosten-Milgrom): it exists so benign/uninformed flow pays for the toxic flow. If too much of the flow is toxic, the spread no longer covers the losses and the book bleeds despite quoting a positive spread.
</details>

**2.** Define a mark-out and write its formula. How do you read a benign vs a toxic curve, and what do you do in each case?

<details><summary>Answer</summary>
A mark-out takes a fill and compares it to the MID at later horizons (5s, 10s, 1m, 5m, EOD) to measure flow toxicity. For a fill at p₀ on side d (+1 buy, −1 sell): MO(τ) = d·(m_{t+τ} − p₀), where m is the mid τ later. MO < 0 means the market moved AGAINST your fill → informed/toxic flow. A FLAT or positive curve = benign flow → keep quoting (you earned the spread). A sharply NEGATIVE curve (especially from one big trade) = toxic → STOP quoting that token, or go hunt the faster information source the counterparty must have seen. It is the desk-level version of VPIN flow-toxicity.
</details>

**3.** ATOM perp funding premium is +0.10%/8h, with I=0.01%, c=0.05%. State the funding, the annualised carry, who pays, and how the cash-and-carry is built — then give his rule for whether it is worth doing.

<details><summary>Answer</summary>
Past the upper kink (I+c = 0.06%), the clamp binds: F = P − c = 0.10% − 0.05% = 0.05%/8h. Annualised = 0.05% × (365×24/8) = 0.05% × 1095 ≈ 55%/yr in funding alone, and F > 0 means LONGS PAY SHORTS. The cash-and-carry: hold ATOM SPOT (earning ~20% staking) and SHORT the perp against it, staying delta-neutral, to collect the funding — net market-neutral carry ≈ staking + funding (his example ≈ 28%). HIS RULE: the round-trip entry/exit on the liquid leg costs ~20-30bps ≈ one week of yield, so the carry only pays if it PERSISTS MORE THAN A WEEK. And it is not free: de-peg, liquidation of the short perp, smart-contract/bridge, counterparty and funding-reversal risk.
</details>

**4.** What does "our trading systems are basically a PID controller" mean operationally, and why does it force a PORTFOLIO of uncorrelated strategies?

<details><summary>Answer</summary>
A PID controller continuously re-tunes its output toward a target as the "plant" drifts. His systems are the same: quote width, size and aggressiveness must be continuously re-tuned, because the market regime drifts — left untouched 2-3 weeks, every edge decays to roughly zero P&L. So trading is MAINTENANCE, not set-and-forget. The catch: you can only distinguish a DEAD edge from ordinary variance by watching P&L over time, which is slow and noisy. So you must run enough UNCORRELATED strategies (e.g. options-vol vs spot, carry vs lead-lag) that any one going quiet — whether dead or just unlucky — doesn't sink the book while you diagnose it. Edges also decay out-of-sample once capital arrives (McLean-Pontiff), so you renew continuously and hide durable edge behind friction.
</details>

**5.** Why is "if a liquid arb isn't taken, there's a reason," and what is the operational rule it implies?

<details><summary>Answer</summary>
This is limits of arbitrage (Shleifer-Vishny): persistent "free" mispricings in liquid markets survive because of capital constraints, risk, and hidden frictions, not because everyone missed them. His own trap: a token looked mispriced between Kraken and Binance, but they settled on different chains (Ethereum vs BNB-Chain), so the same token was NON-REDEEMABLE across the two venues — the arb couldn't actually be closed. The rule: never do ONE LEG of a liquid-market arb blindly. First find the hidden friction (withdrawal limits, bridges, non-redeemability, settlement chain) that explains why the gap is still open. The same friction principle is also the retail MOAT — durable small-player edges live behind chains/bridges/tooling the pros won't bother with.
</details>`,
        id: `**1.** Market-maker bilang dia gak memprediksi arah. Dari mana P&L-nya, dan apa satu risiko yang bisa bikin book spread-positif berdarah?

<details><summary>Jawaban</summary>
P&L ≈ (edge per trade) × (turnover). Dia pasang bid di bawah fair value dan ask di atas ("dealer mobil bekas"), nangkep spread, dan bikin jadi bisnis dengan MEMUTAR modal 3-4x/hari — jadi beberapa bps ngompon. Risiko pembunuhnya itu ADVERSE SELECTION: sebagian counterparty itu informed dan beli dari dia tepat sebelum naik / jual tepat sebelum turun, jadi dia sistematis kalah di fill (toxic) itu. Spread itu sendiri ADALAH premi adverse-selection (Glosten-Milgrom): dia ada supaya flow benign/uninformed bayarin flow toxic. Kalau terlalu banyak flow yang toxic, spread gak lagi nutupin kerugian dan book berdarah meskipun quote spread positif.
</details>

**2.** Definisikan mark-out dan tulis formulanya. Gimana kamu baca kurva benign vs toxic, dan apa yang kamu lakuin di tiap kasus?

<details><summary>Jawaban</summary>
Mark-out ambil fill dan bandingin sama MID di horizon kemudian (5d, 10d, 1m, 5m, EOD) buat ngukur flow toxicity. Buat fill di p₀ di sisi d (+1 beli, −1 jual): MO(τ) = d·(m_{t+τ} − p₀), dengan m itu mid τ kemudian. MO < 0 berarti pasar bergerak LAWAN fill-mu → flow informed/toxic. Kurva DATAR atau positif = flow benign → terus quote (kamu dapet spread). Kurva tajam NEGATIF (apalagi dari satu trade besar) = toxic → BERHENTI quote token itu, atau buru sumber informasi lebih cepat yang pasti dilihat counterparty. Ini versi desk-level dari flow-toxicity VPIN.
</details>

**3.** Premium funding perp ATOM itu +0.10%/8h, dengan I=0.01%, c=0.05%. Sebutkan funding, carry tahunan, siapa bayar, dan gimana cash-and-carry dibangun — lalu kasih aturannya soal apakah layak dilakukan.

<details><summary>Jawaban</summary>
Lewat kink atas (I+c = 0.06%), clamp ngebind: F = P − c = 0.10% − 0.05% = 0.05%/8h. Annualised = 0.05% × (365×24/8) = 0.05% × 1095 ≈ 55%/thn dari funding aja, dan F > 0 berarti LONG BAYAR SHORT. Cash-and-carry: pegang SPOT ATOM (dapet ~20% staking) dan SHORT perp lawannya, tetap delta-netral, buat ngumpulin funding — net carry market-neutral ≈ staking + funding (contohnya ≈ 28%). ATURANNYA: entry/exit bolak-balik di leg likuid biaya ~20-30bps ≈ seminggu yield, jadi carry cuma bayar kalau BERTAHAN LEBIH DARI SEMINGGU. Dan gak gratis: de-peg, likuidasi short perp, smart-contract/bridge, counterparty dan risiko pembalikan funding.
</details>

**4.** Apa arti "sistem trading kami pada dasarnya PID controller" secara operasional, dan kenapa itu memaksa PORTOFOLIO strategi tidak berkorelasi?

<details><summary>Jawaban</summary>
PID controller terus nge-tune ulang outputnya menuju target pas "plant"-nya melayang. Sistemnya sama: lebar quote, ukuran, dan agresivitas harus terus di-tune ulang, karena regime pasar melayang — dibiarkan 2-3 minggu, tiap edge decay ke kira-kira nol P&L. Jadi trading itu PERAWATAN, bukan set-and-forget. Jebakannya: edge MATI cuma bisa dibedain dari variance biasa dengan ngawasin P&L dari waktu ke waktu, yang lambat dan berisik. Jadi kamu harus jalanin cukup strategi TIDAK BERKORELASI (misal vol-opsi vs spot, carry vs lead-lag) supaya satu yang sepi — entah mati atau cuma sial — gak nenggelamin book pas kamu mendiagnosisnya. Edge juga decay out-of-sample begitu modal datang (McLean-Pontiff), jadi kamu perbarui terus dan sembunyiin edge tahan-lama di balik friksi.
</details>

**5.** Kenapa "kalau arb likuid gak diambil, ada alasannya," dan apa aturan operasional yang diimplikasikannya?

<details><summary>Jawaban</summary>
Ini limits of arbitrage (Shleifer-Vishny): salah-harga "gratis" persisten di pasar likuid bertahan karena kendala modal, risiko, dan friksi tersembunyi, bukan karena semua orang melewatkannya. Jebakannya sendiri: sebuah token keliatan salah-harga antara Kraken dan Binance, tapi mereka settle di chain berbeda (Ethereum vs BNB-Chain), jadi token yang sama TIDAK BISA-DITEBUS lintas dua venue — arb-nya gak bisa benar-benar ditutup. Aturannya: jangan pernah ngelakuin SATU LEG arb pasar-likuid secara buta. Cari dulu friksi tersembunyi (limit penarikan, bridge, non-redeemability, chain settlement) yang menjelaskan kenapa gap-nya masih terbuka. Prinsip friksi yang sama juga itu MOAT ritel — edge pemain-kecil yang tahan lama hidup di balik chain/bridge/tooling yang pro malas urus.
</details>`,
      },
    },
    {
      id: 'connections',
      heading: { en: 'Connections', id: 'Koneksi' },
      body: {
        en: `- **The funding mechanism in depth**: [perp funding & carry](item:perp-funding-carry) — the full treatment of the funding rate $F(P)$, the cash-and-carry, and the positioning read behind his one retail-accessible edge.
- **The positioning framework it sits in**: [the @Husslin_ framework](item:husslin-framework) — "where is everyone, and what does it cost them" is the same first question; his chase-the-uninformed and table selection are its microstructure floor.
- **The adverse-selection metric**: [VPIN flow toxicity](item:easley-lopez-prado-vpin) — the academic grounding of his mark-outs; the rate of adverse selection a maker is being hit with.
- **Squeeze / forced-flow geometry**: [liquidity harvesting](item:husslin-liquidity-harvesting) — his forced-flow and paythrough reads, kept defensive (recognise the regime, don't be the harvested stop).`,
        id: `- **Mekanisme funding mendalam**: [funding & carry perp](item:perp-funding-carry) — pembahasan lengkap funding rate $F(P)$, cash-and-carry, dan bacaan positioning di balik satu edge-nya yang bisa-diakses ritel.
- **Framework positioning tempatnya berada**: [framework @Husslin_](item:husslin-framework) — "di mana semua orang, dan apa biayanya buat mereka" itu pertanyaan pertama yang sama; kejar-yang-uninformed dan table selection-nya itu lantai microstructure-nya.
- **Metrik adverse-selection**: [flow toxicity VPIN](item:easley-lopez-prado-vpin) — landasan akademik dari mark-out-nya; laju adverse selection yang dialami maker.
- **Geometri squeeze / forced-flow**: [liquidity harvesting](item:husslin-liquidity-harvesting) — bacaan forced-flow dan paythrough-nya, dijaga defensif (kenali regime-nya, jangan jadi stop yang dipanen).`,
      },
    },
    {
      id: 'sources',
      heading: { en: 'Sources', id: 'Sumber' },
      body: {
        en: `**Educational, NOT financial advice. Not affiliated with or endorsed by @liquiditygoblin.** Most of his core (automated market making, HFT, MEV, cross-exchange arb) is institutional / infra-dependent and NOT retail-replicable; the retail-accessible pieces (funding carry, table selection) are not "safe" and carry de-peg, liquidation, smart-contract/bridge, counterparty and funding-reversal risk. Treat all of HIS specific figures (the USD 50k→~20bps→~5bps signal, ATOM ~28% carry, DeFi loops 30-40%, FXS ~390% / XCN ~190% funding, gas at 95-96%, gamma 15%→16-17%) as illustrative of a *mechanism* — by the time a number reaches a public podcast that instance is almost certainly arbitraged away (McLean-Pontiff). Note: some popular attributions are NOT his (the "long term greedy, short term speedy" tagline is from his profile, not the interview; colocation specifics, Kelly sizing and the locked-token dashboard were the host's, only endorsed); and he did NOT "buy USDC at 92¢" — 92¢ was his fair/floor estimate, ~96¢ theoretical, and he max-bid below 90¢; he never names Circle.

**Primary (his own words).**
- **Liquidity Goblin (@liquiditygoblin)** (2023). *Risk Biscuits Interview #04*; *Insilico Terminal Podcast Ep. 28*; *Trading Stories: "What Can You Do To Make Money Right Now?"* — market making, mark-outs, HFT lead-lag, MEV, funding carry, table selection, PID-control, the honeypot wallet, the USDC-depeg trade. Plus the *Liquidity Letters* Substack (mostly paid), bybitpremiums.xyz funding tool, and a 1inch CLI on GitHub.

**Academic / textbook (web-verified).**
- **Glosten, L. & Milgrom, P.** (1985). "Bid, Ask and Transaction Prices in a Specialist Market with Heterogeneously Informed Traders." *JFE 14:71-100.* The adverse-selection spread (in this catalog).
- **Avellaneda, M. & Stoikov, S.** (2008). "High-frequency trading in a limit order book." *Quantitative Finance 8(3):217-224.* Inventory-aware reservation-price quoting.
- **Kyle, A.** (1985). "Continuous Auctions and Insider Trading." *Econometrica 53(6):1315-1335.* Informed flow hidden in noise; depth (in this catalog).
- **Easley, D., López de Prado, M. & O'Hara, M.** (2012). "Flow Toxicity and Liquidity in a High-Frequency World (VPIN)." *RFS 25(5):1457-1493.* The toxicity metric behind mark-outs (in this catalog).
- **Hasbrouck, J.** (1995). "One Security, Many Markets… (information share)." *Journal of Finance 50(4):1175-1199.* Which venue leads.
- **Budish, E., Cramton, P. & Shim, J.** (2015). "The High-Frequency Trading Arms Race…" *QJE 130(4):1547-1621.* Continuous books → speed race.
- **Daian, P. et al.** (2020). "Flash Boys 2.0 (Miner Extractable Value)." *IEEE S&P.* MEV and priority-gas auctions.
- **Shleifer, A. & Vishny, R.** (1997). "The Limits of Arbitrage." *Journal of Finance 52(1):35-55.* Why "free" arbs persist.
- **Carr, P. & Wu, L.** (2009). "Variance Risk Premiums." *RFS 22(3):1311-1341.* Implied vol > realised.
- **Bakshi, G., Kapadia, N. & Madan, D.** (2003). "…Skew Laws and the Differential Pricing of Individual Equity Options." *RFS 16(1):101-143.* Negative skew from spot-vol correlation.
- **McLean, R. D. & Pontiff, J.** (2016). "Does Academic Research Destroy Stock Return Predictability?" *Journal of Finance 71(1):5-32.* Edges decay out-of-sample (~58%).
- **Kelly, J. L.** (1956). "A New Interpretation of Information Rate." *Bell System Tech. J. 35:917-926.* Sizing by edge and risk-of-ruin.
- **Bagehot, W. (Jack Treynor)** (1971). "The Only Game in Town." *Financial Analysts Journal 27(2).* Makers profit only from uninformed traders.
- **Sinclair, E.** (2013). *Volatility Trading*; **Natenberg, S.** (1994). *Option Volatility & Pricing* — the options/gamma-scalping references he cites.
- **Åström, K. J. & Murray, R. M.** (2008). *Feedback Systems.* The PID/control-theory text behind his "trading systems are a PID controller."
- **Hull, J.** (2017). *Options, Futures, and Other Derivatives.* Cost-of-carry / cash-and-carry — the textbook basis of the funding carry.`,
        id: `**Edukatif, BUKAN nasihat keuangan. Tidak berafiliasi dengan atau didukung oleh @liquiditygoblin.** Sebagian besar intinya (market making otomatis, HFT, MEV, arb cross-exchange) itu institusional / bergantung-infra dan BUKAN buat ditiru ritel; bagian yang bisa-diakses ritel (funding carry, table selection) gak "aman" dan bawa risiko de-peg, likuidasi, smart-contract/bridge, counterparty dan pembalikan funding. Perlakukan semua angka spesifiknya (sinyal USD 50k→~20bps→~5bps, carry ATOM ~28%, loop DeFi 30-40%, funding FXS ~390% / XCN ~190%, gas 95-96%, gamma 15%→16-17%) sebagai ilustrasi *mekanisme* — pas sebuah angka nyampe podcast publik, instansi itu hampir pasti udah di-arbitrase habis (McLean-Pontiff). Catatan: beberapa atribusi populer BUKAN miliknya (tagline "long term greedy, short term speedy" itu dari profilnya, bukan wawancara; spesifik colocation, sizing Kelly dan dashboard locked-token itu dari host, cuma didukung); dan dia TIDAK "beli USDC di 92¢" — 92¢ itu estimasi fair/floor-nya, ~96¢ teoretis, dan dia max-bid di bawah 90¢; dia gak pernah nyebut Circle.

**Primer (kata-katanya sendiri).**
- **Liquidity Goblin (@liquiditygoblin)** (2023). *Risk Biscuits Interview #04*; *Insilico Terminal Podcast Ep. 28*; *Trading Stories: "What Can You Do To Make Money Right Now?"* — market making, mark-out, HFT lead-lag, MEV, funding carry, table selection, PID-control, honeypot wallet, trade depeg USDC. Plus Substack *Liquidity Letters* (sebagian besar berbayar), tool funding bybitpremiums.xyz, dan CLI 1inch di GitHub.

**Akademik / textbook (terverifikasi-web).**
- **Glosten, L. & Milgrom, P.** (1985). "Bid, Ask and Transaction Prices in a Specialist Market with Heterogeneously Informed Traders." *JFE 14:71-100.* Spread adverse-selection (di katalog ini).
- **Avellaneda, M. & Stoikov, S.** (2008). "High-frequency trading in a limit order book." *Quantitative Finance 8(3):217-224.* Quoting reservation-price yang sadar-inventory.
- **Kyle, A.** (1985). "Continuous Auctions and Insider Trading." *Econometrica 53(6):1315-1335.* Flow informed disembunyiin di noise; depth (di katalog ini).
- **Easley, D., López de Prado, M. & O'Hara, M.** (2012). "Flow Toxicity and Liquidity in a High-Frequency World (VPIN)." *RFS 25(5):1457-1493.* Metrik toxicity di balik mark-out (di katalog ini).
- **Hasbrouck, J.** (1995). "One Security, Many Markets… (information share)." *Journal of Finance 50(4):1175-1199.* Venue mana yang memimpin.
- **Budish, E., Cramton, P. & Shim, J.** (2015). "The High-Frequency Trading Arms Race…" *QJE 130(4):1547-1621.* Buku kontinu → balapan kecepatan.
- **Daian, P. dkk.** (2020). "Flash Boys 2.0 (Miner Extractable Value)." *IEEE S&P.* MEV dan priority-gas auction.
- **Shleifer, A. & Vishny, R.** (1997). "The Limits of Arbitrage." *Journal of Finance 52(1):35-55.* Kenapa arb "gratis" bertahan.
- **Carr, P. & Wu, L.** (2009). "Variance Risk Premiums." *RFS 22(3):1311-1341.* Implied vol > realised.
- **Bakshi, G., Kapadia, N. & Madan, D.** (2003). "…Skew Laws and the Differential Pricing of Individual Equity Options." *RFS 16(1):101-143.* Skew negatif dari korelasi spot-vol.
- **McLean, R. D. & Pontiff, J.** (2016). "Does Academic Research Destroy Stock Return Predictability?" *Journal of Finance 71(1):5-32.* Edge decay out-of-sample (~58%).
- **Kelly, J. L.** (1956). "A New Interpretation of Information Rate." *Bell System Tech. J. 35:917-926.* Sizing berdasarkan edge dan risk-of-ruin.
- **Bagehot, W. (Jack Treynor)** (1971). "The Only Game in Town." *Financial Analysts Journal 27(2).* Maker cuma untung dari trader uninformed.
- **Sinclair, E.** (2013). *Volatility Trading*; **Natenberg, S.** (1994). *Option Volatility & Pricing* — referensi opsi/gamma-scalping yang dia kutip.
- **Åström, K. J. & Murray, R. M.** (2008). *Feedback Systems.* Teks PID/teori-kontrol di balik "sistem trading itu PID controller".
- **Hull, J.** (2017). *Options, Futures, and Other Derivatives.* Cost-of-carry / cash-and-carry — dasar textbook funding carry.`,
      },
    },
  ],

  audio: { enabled: true },

  selfTest: [
    {
      sectionId: 'intuition',
      question: { en: `Why does the spread exist at all, and how does "be the bookie, not the gambler" turn it into a business?`, id: `Kenapa spread ada sama sekali, dan gimana "jadilah bandar, bukan penjudi" ngubahnya jadi bisnis?` },
      prompt: { en: 'Before continuing, try answering:', id: 'Sebelum lanjut, coba jawab:' },
      answer: {
        en: `The spread exists to be paid for ADVERSE SELECTION (Glosten-Milgrom): because some counterparties are informed and trade against the maker just before the price moves, a competitive maker must set the ask above and the bid below fair value so the gains from uninformed/benign flow cover the losses to informed/toxic flow. "Be the bookie, not the gambler" turns that into a business by refusing to bet on direction and instead earning the spread on VOLUME — quote a bid under fair value, an ask over (the used-car dealer), and TURN OVER capital 3-4x/day so a tiny per-trade edge compounds: P&L ≈ edge × turnover. The whole craft is keeping benign-minus-toxic positive: chase the uninformed (degen perp gamblers, liquidations, forced/wash flow), route away from the informed, and pick the soft table.`,
        id: `Spread ada buat dibayarin ADVERSE SELECTION (Glosten-Milgrom): karena sebagian counterparty itu informed dan trade lawan maker tepat sebelum harga bergerak, maker yang kompetitif harus pasang ask di atas dan bid di bawah fair value supaya keuntungan dari flow uninformed/benign nutupin kerugian ke flow informed/toxic. "Jadilah bandar, bukan penjudi" ngubahnya jadi bisnis dengan nolak taruhan arah dan malah dapet spread dari VOLUME — pasang bid di bawah fair value, ask di atas (dealer mobil bekas), dan MUTER modal 3-4x/hari supaya edge tipis per-trade ngompon: P&L ≈ edge × turnover. Seluruh keahliannya itu menjaga benign-minus-toxic tetap positif: kejar yang uninformed (penjudi degen perp, likuidasi, flow terpaksa/wash), menjauh dari yang informed, dan pilih meja yang lunak.`,
      },
    },
    {
      sectionId: 'formalization',
      question: { en: `Write the mark-out formula and explain how the reservation price skews a maker's quotes.`, id: `Tulis formula mark-out dan jelasin gimana reservation price nge-skew quote maker.` },
      prompt: { en: 'Before continuing, try answering:', id: 'Sebelum lanjut, coba jawab:' },
      answer: {
        en: `MARK-OUT: for a fill at price p₀ on side d (+1 buy, −1 sell), MO(τ) = d·(m_{t+τ} − p₀), where m_{t+τ} is the mid τ later (5s/10s/1m/5m/EOD). MO < 0 means the market moved AGAINST your fill → toxic/informed flow (stop quoting); flat/positive → benign (keep quoting). It is the desk version of VPIN flow-toxicity. RESERVATION PRICE (Avellaneda-Stoikov): r = s − q·γ·σ²·(T−t), with mid s, inventory q, risk aversion γ, volatility σ. The maker centres his bid/ask around r, not the raw mid: when he is LONG (q>0), r drops below s, skewing quotes DOWN so he is keener to sell and offload the unwanted inventory; when SHORT (q<0), r rises above s, skewing quotes up to buy back. The optimal spread also widens with σ and with competition. This is the formal face of the used-car-dealer-plus-turnover engine.`,
        id: `MARK-OUT: buat fill di harga p₀ di sisi d (+1 beli, −1 jual), MO(τ) = d·(m_{t+τ} − p₀), dengan m_{t+τ} itu mid τ kemudian (5d/10d/1m/5m/EOD). MO < 0 berarti pasar bergerak LAWAN fill-mu → flow toxic/informed (berhenti quote); datar/positif → benign (terus quote). Ini versi desk dari flow-toxicity VPIN. RESERVATION PRICE (Avellaneda-Stoikov): r = s − q·γ·σ²·(T−t), dengan mid s, inventory q, risk aversion γ, volatilitas σ. Maker nengahin bid/ask-nya di sekitar r, bukan mid mentah: pas dia LONG (q>0), r turun di bawah s, nge-skew quote TURUN supaya dia lebih pengen jual dan ngelepas inventory yang gak diinginkan; pas SHORT (q<0), r naik di atas s, nge-skew quote naik buat beli balik. Spread optimal juga melebar dengan σ dan dengan kompetisi. Ini wajah formal mesin dealer-mobil-bekas-plus-turnover.`,
      },
    },
    {
      sectionId: 'applications',
      question: { en: `What is "do the good leg," and what risk does it trade for more edge versus a fully atomic arb?`, id: `Apa itu "do the good leg", dan risiko apa yang dia tukar demi lebih banyak edge dibanding arb sepenuhnya atomik?` },
      prompt: { en: 'Before continuing, try answering:', id: 'Sebelum lanjut, coba jawab:' },
      answer: {
        en: `Atomic arb buys low on one venue and sells high on another within a single block (often flash-loan funded) so it either fully succeeds or reverts — but on-chain priority-gas auctions now bid ~95-96% of the profit to the validator, gutting the edge. "DO THE GOOD LEG" is his evolution: don't always close both legs atomically — take only the FAVOURABLE leg and exit the other later on a deep, liquid venue (e.g. Binance for ~3-5bps vs ~20bps atomic), keeping roughly TWICE the edge. The trade-off: you give up atomicity, so you carry brief INVENTORY/PRICE RISK between the two legs (the unhedged side can move against you before you close it). It only works if you can actually hedge or exit that leg quickly on a liquid venue. More broadly it is governed by limits of arbitrage — never do one leg blindly; first find the hidden friction (e.g. non-redeemable chains) that could trap the open leg.`,
        id: `Arb atomik beli murah di satu venue dan jual mahal di venue lain dalam satu blok (sering didanai flash-loan) jadi dia sepenuhnya sukses atau revert — tapi priority-gas auction on-chain sekarang nawar ~95-96% profit ke validator, ngabisin edge-nya. "DO THE GOOD LEG" itu evolusinya: jangan selalu tutup kedua leg atomik — ambil cuma leg yang MENGUNTUNGKAN dan keluar yang lain nanti di venue dalam dan likuid (misal Binance buat ~3-5bps vs ~20bps atomik), nyimpen kira-kira DUA KALI edge. Trade-off-nya: kamu nyerahin atomisitas, jadi kamu bawa INVENTORY/PRICE RISK singkat di antara dua leg (sisi yang gak di-hedge bisa bergerak lawan kamu sebelum kamu nutupnya). Cuma jalan kalau kamu benar-benar bisa hedge atau keluar leg itu cepat di venue likuid. Lebih luas dia diatur limits of arbitrage — jangan pernah ngelakuin satu leg secara buta; cari dulu friksi tersembunyi (misal chain non-redeemable) yang bisa nge-trap leg yang terbuka.`,
      },
    },
  ],
};
