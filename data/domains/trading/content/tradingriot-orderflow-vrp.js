// ─────────────────────────────────────────────────────────────────────────
// Trading domain — Tradingriot (Adam Bakay, @abetrade): the public two-phase
// arc from order-flow microstructure (delta/CVD absorption, footprint, Auction
// Market Theory, Market/Volume Profile) — taught FREE as how-markets-move —
// to a systematic book whose core is SELLING the variance risk premium with a
// mandatory tail hedge, blended with momentum so the payout curve survives.
// VRP grounding is ESTABLISHED (Carr-Wu 2009; Bollerslev-Tauchen-Zhou 2009);
// his 80-90%-short-vol implementation is [His]. Carries VolSurfaceSVISim (the
// implied-vol surface the premium is harvested from). Educational, not
// financial advice; NOT affiliated with or endorsed by Adam Bakay / Tradingriot.
// ─────────────────────────────────────────────────────────────────────────

export const CONTENT = {
  itemId: 'tradingriot-orderflow-vrp',
  estimatedReadMinutes: 30,

  author: {
    fullName: { en: 'Adam Bakay (Tradingriot, @abetrade)', id: 'Adam Bakay (Tradingriot, @abetrade)' },
    affiliation: {
      en: 'Self-taught independent trader and educator behind the Tradingriot blog; formerly Head of Trading at the prop firm Breakout (acquired by Kraken). The academic spine of his current edge is Carr & Wu (variance risk premia) and Bollerslev, Tauchen & Zhou; the foundation he taught maps onto Dalton/Steidlmayer (Auction Market Theory & Market Profile) and Larry Harris (microstructure).',
      id: 'Trader independen otodidak dan edukator di balik blog Tradingriot; mantan Head of Trading di prop firm Breakout (diakuisisi Kraken). Tulang punggung akademik edge-nya sekarang itu Carr & Wu (variance risk premia) dan Bollerslev, Tauchen & Zhou; fondasi yang dia ajarin nyambung ke Dalton/Steidlmayer (Auction Market Theory & Market Profile) dan Larry Harris (microstructure).',
    },
    tagline: {
      en: 'He taught order flow for free, then said "I\'m washed — I don\'t look below the daily timeframe" and rebuilt as a systematic seller of the variance risk premium.',
      id: 'Dia ngajarin order flow gratis, terus bilang "I\'m washed — gak pernah lihat di bawah timeframe harian" dan ngebangun ulang sebagai penjual systematic variance risk premium.',
    },
    bio: {
      en: `Adam Bakay is unusual among trading educators because his whole evolution is public and in his own words. He started on binary options as a beginner around 2016, learned real microstructure on the German Bund and Euro Stoxx futures in 2018-20, rode the 2021 BTC cycle, burned out from 15-18 hour days on the DOM, and re-emerged from 2023 as a **systematic options/volatility trader**. He is blunt that he no longer uses the famous intraday tools that made his name: *"I'm washed... I don't look below the daily timeframe."* So the order-flow material here is taught as the **foundation** — how markets actually move — not as his current method.

His current book is ~6-7 **uncorrelated** strategies across crypto, FX, futures and equities: a small directional sleeve (simple trend-following + mean-reversion) plus the bulk in **option-selling** to harvest the **variance risk premium** — the empirical fact that implied volatility is, *more often than not*, richer than realized. He pairs it with momentum precisely because the two payout shapes offset.

⟦Note: compiled from Bakay's public blog, the WOO X written Q&A, the Insilico Terminal Podcast #11, and his pinned X article — short quotes for commentary. Educational, NOT financial advice; NOT affiliated with or endorsed by Adam Bakay / Tradingriot.⟧`,
      id: `Adam Bakay itu beda dari edukator trading lain karena seluruh evolusinya publik dan pakai kata-katanya sendiri. Dia mulai dari binary options sebagai pemula sekitar 2016, belajar microstructure beneran di futures German Bund dan Euro Stoxx tahun 2018-20, naik siklus BTC 2021, burnout dari hari kerja 15-18 jam di DOM, dan muncul lagi dari 2023 sebagai **trader opsi/volatilitas systematic**. Dia blak-blakan kalau dia gak pakai lagi tool intraday terkenal yang bikin namanya gede: *"I'm washed... gak pernah lihat di bawah timeframe harian."* Jadi materi order flow di sini diajarin sebagai **fondasi** — gimana market beneran gerak — bukan sebagai metode dia sekarang.

Buku dia sekarang itu ~6-7 strategi **gak berkorelasi** lintas crypto, FX, futures, dan equity: satu lengan directional kecil (trend-following + mean-reversion sederhana) plus mayoritas di **jual opsi** buat manen **variance risk premium** — fakta empiris kalau implied volatility itu, *lebih sering ketimbang enggak*, lebih kaya dari realized. Dia pasangin sama momentum justru karena dua bentuk payout-nya saling nutup.

⟦Catatan: dikompilasi dari blog publik Bakay, Q&A tertulis WOO X, Insilico Terminal Podcast #11, dan artikel X yang dia pin — kutipan pendek buat komentar. Edukasi, BUKAN nasihat keuangan; tidak berafiliasi dengan atau didukung oleh Adam Bakay / Tradingriot.⟧`,
    },
    focus: {
      en: `Phase one (the foundation): **order flow** — the DOM as the rawest price, **limit orders = liquidity** (the passive "heavier hand"), **market orders = delta** (aggressive, the "weaker hand" but required to move price); **CVD absorption divergence** (CVD makes a new extreme but price does not → aggressive flow eaten by passive limits → reversal, his favourite tell, *only at key levels*); **footprint charts** (the inside of the candle); and **Auction Market Theory / Market Profile** (value area ≈ 68% of volume, POC magnet, balance ~80% vs imbalance ~20%, Dalton's 80% rule). Phase two (his current edge): **selling the variance risk premium** via ~30-DTE straddles/strangles plus a **mandatory 5-delta tail hedge**, **combining payout curves** (short-vol + momentum) for a survivable equity curve, and **reading positioning, not lines** (skew, OI percentile, funding, liquidations, IV vs RV — all on a comparative/percentile basis).`,
      id: `Fase satu (fondasi): **order flow** — DOM sebagai harga paling mentah, **limit order = likuiditas** ("tangan lebih berat" yang pasif), **market order = delta** (agresif, "tangan lebih lemah" tapi wajib buat gerakin harga); **CVD absorption divergence** (CVD bikin ekstrem baru tapi harga enggak → flow agresif dimakan limit pasif → reversal, tell favoritnya, *cuma di level kunci*); **footprint chart** (bagian dalam candle); dan **Auction Market Theory / Market Profile** (value area ≈ 68% volume, POC magnet, balance ~80% vs imbalance ~20%, aturan 80% Dalton). Fase dua (edge dia sekarang): **jual variance risk premium** via straddle/strangle ~30-DTE plus **tail hedge 5-delta wajib**, **menggabung payout curve** (short-vol + momentum) buat kurva ekuitas yang survivable, dan **baca posisi, bukan garis** (skew, percentile OI, funding, liquidasi, IV vs RV — semua dasar komparatif/percentile).`,
    },
    intellectualLineage: {
      en: `The order-flow phase descends from market microstructure (Larry Harris, *Trading and Exchanges*; O'Hara's *Market Microstructure Theory*) and the signed-flow / toxicity line (Easley, López de Prado & O'Hara, VPIN) — signed aggression carries information lagging indicators cannot. The Auction Market Theory / Market Profile layer is Steidlmayer (who introduced Market Profile at the CBOT in 1984-85) and Jim Dalton (*Mind Over Markets*, *Markets in Profile*), with the bid/ask footprint analogy borrowed from Peter Davies of Jigsaw Trading. The current variance-risk-premium edge rests on Carr & Wu (2009) and Bollerslev, Tauchen & Zhou (2009), with Euan Sinclair's *Volatility Trading* as the practitioner reference and Hull's *Options, Futures, and Other Derivatives* for the Greeks.`,
      id: `Fase order flow turun dari market microstructure (Larry Harris, *Trading and Exchanges*; *Market Microstructure Theory* O'Hara) dan garis signed-flow / toxicity (Easley, López de Prado & O'Hara, VPIN) — agresi bertanda bawa informasi yang indikator lagging gak bisa kasih. Lapisan Auction Market Theory / Market Profile itu Steidlmayer (yang ngenalin Market Profile di CBOT 1984-85) dan Jim Dalton (*Mind Over Markets*, *Markets in Profile*), dengan analogi footprint bid/ask dipinjem dari Peter Davies di Jigsaw Trading. Edge variance-risk-premium sekarang berdiri di atas Carr & Wu (2009) dan Bollerslev, Tauchen & Zhou (2009), dengan *Volatility Trading* Euan Sinclair sebagai referensi praktisi dan *Options, Futures, and Other Derivatives* Hull buat Greeks-nya.`,
    },
    keyCollaborators: {
      en: 'The Insilico Terminal team (Podcast #11, where the "I\'m washed" / "patience became the edge" framing was given); WOO X (the written Q&A); and the order-flow education community he both learned from and pushed against — Peter Davies / Jigsaw Trading for the footprint analogy. His prop-firm work was at Breakout (ex-Head of Trading; acquired by Kraken per the source pack).',
      id: 'Tim Insilico Terminal (Podcast #11, tempat framing "I\'m washed" / "patience jadi edge" muncul); WOO X (Q&A tertulis); dan komunitas edukasi order flow yang dia pelajarin sekaligus lawan — Peter Davies / Jigsaw Trading buat analogi footprint. Kerjaan prop firm-nya di Breakout (mantan Head of Trading; diakuisisi Kraken menurut source pack).',
    },
    legacy: {
      en: `Bakay's lasting contribution is twofold. First, an **anti-grift** body of free order-flow education (he made the blog free because the same content sat behind $1,000 paywalls — *"there is no hidden secret"*) that teaches microstructure as how-markets-move rather than as a magic system. Second, a refreshingly honest **second act**: publicly admitting the intraday game wore him out, and rebuilding around a small, explainable, evidence-backed edge (selling the variance risk premium) wrapped in risk discipline (the tail hedge, uncorrelated strategies, sustainability away from the desk). The throughline is *process over prediction* and *sustainability as the real edge*.`,
      id: `Kontribusi awet Bakay itu dua. Pertama, badan edukasi order flow gratis yang **anti-grift** (dia bikin blog gratis karena konten yang sama ada di balik paywall $1.000 — *"gak ada rahasia tersembunyi"*) yang ngajarin microstructure sebagai gimana-market-gerak bukan sistem ajaib. Kedua, **babak kedua** yang jujur menyegarkan: ngakuin terang-terangan game intraday bikin dia habis, dan ngebangun ulang di sekitar edge kecil, bisa-dijelasin, didukung-bukti (jual variance risk premium) dibungkus disiplin risiko (tail hedge, strategi gak berkorelasi, sustainability jauh dari meja). Benang merahnya itu *proses di atas prediksi* dan *sustainability sebagai edge sebenarnya*.`,
    },
    keyWorks: [
      { year: 2024, title: 'Tradingriot blog — the free order-flow / footprint / Auction Market Theory / Market & Volume Profile guides (the foundation)', venue: 'tradingriot.com (this item)' },
      { year: 2024, title: 'Insilico Terminal Podcast #11 — "why patience became the edge" / "I\'m washed... I don\'t look below the daily timeframe"', venue: 'Insilico Terminal Podcast' },
      { year: 2024, title: 'WOO X written Q&A + pinned X article — the two-phase arc, uncorrelated book, selling the VRP with a mandatory tail hedge', venue: 'WOO X / X (@abetrade)' },
      { year: 2009, title: 'Variance Risk Premiums (Carr & Wu) — implied vol systematically richer than realized (the academic spine of the edge)', venue: 'Review of Financial Studies 22(3):1311-1341' },
      { year: 2009, title: 'Expected Stock Returns and Variance Risk Premia (Bollerslev, Tauchen & Zhou) — the VRP has predictive power', venue: 'Review of Financial Studies 22(11):4463-4492' },
      { year: 2013, title: 'Volatility Trading, 2nd ed. (Sinclair) — the practitioner reference Bakay cites for IV vs RV and selling premium', venue: 'Wiley' },
    ],
  },

  sections: [
    {
      id: 'motivation',
      heading: { en: 'Why this matters', id: 'Kenapa ini penting' },
      body: {
        en: `Most "guru" stories are a straight line up. Adam Bakay's (Tradingriot, @abetrade) is the opposite, and that is exactly why it is worth studying: his **whole evolution is public and in his own words**. He went from a binary-options beginner (~2016), to learning real microstructure on Bund and Euro Stoxx futures (2018-20), to riding the 2021 BTC cycle, to **burnout** from 15-18 hour days glued to the DOM, to a **systematic options/volatility trader** from 2023. He says it plainly: *"I'm washed... I don't look below the daily timeframe."* [His]

That single sentence is the key to this module. The famous intraday tools — delta/CVD absorption, footprint charts, Auction Market Theory — are taught here as the **foundation**: a model of *how markets actually move*, not a claim that he day-trades them today. Treat them as microstructure literacy, then watch how a mature trader **dropped most of it** and rebuilt around something smaller and more durable.

His current core is **selling the variance risk premium**: implied volatility is "almost always higher than realized," so option buyers systematically overpay, and a disciplined seller of neutral structures can harvest that gap [Established]. He wraps it in three commitments that make it survivable:
- **A mandatory tail hedge** — selling vol is "definitely NOT a free trade — every once in a while the market moves a lot and you lose a lot." [His]
- **Combining payout curves** — pairing short-vol (many small wins, rare big loss) with momentum (many small losses, rare big win) so the blended equity curve is psychologically survivable. [His]
- **Sustainability** — away from the desk until midday, a run first; *"there is no hidden secret."*

⟦Disclaimer: educational, NOT financial advice. NOT affiliated with or endorsed by Adam Bakay / Tradingriot — compiled from his public blog, WOO X Q&A, Insilico #11, and pinned X article. The intraday material is his FOUNDATION, not his current method.⟧`,
        id: `Kebanyakan cerita "guru" itu garis lurus naik. Punya Adam Bakay (Tradingriot, @abetrade) kebalikannya, dan justru itu kenapa layak dipelajari: **seluruh evolusinya publik dan pakai kata-katanya sendiri**. Dia dari pemula binary options (~2016), ke belajar microstructure beneran di futures Bund dan Euro Stoxx (2018-20), ke naik siklus BTC 2021, ke **burnout** dari hari kerja 15-18 jam nempel di DOM, ke **trader opsi/volatilitas systematic** dari 2023. Dia bilang terang-terangan: *"I'm washed... gak pernah lihat di bawah timeframe harian."* [His]

Satu kalimat itu kunci module ini. Tool intraday terkenal — delta/CVD absorption, footprint chart, Auction Market Theory — diajarin di sini sebagai **fondasi**: model *gimana market beneran gerak*, bukan klaim dia masih day-trade pakai itu sekarang. Anggap sebagai literasi microstructure, terus lihat gimana trader matang **ninggalin sebagian besar** dan ngebangun ulang di sekitar sesuatu yang lebih kecil dan lebih awet.

Inti dia sekarang itu **jual variance risk premium**: implied volatility "hampir selalu lebih tinggi dari realized," jadi pembeli opsi sistematis bayar kemahalan, dan penjual struktur netral yang disiplin bisa manen gap itu [Established]. Dia bungkus dengan tiga komitmen yang bikin survivable:
- **Tail hedge wajib** — jual vol itu "jelas BUKAN trade gratis — sesekali market gerak banyak dan kamu rugi banyak." [His]
- **Menggabung payout curve** — pasangin short-vol (banyak menang kecil, jarang rugi besar) sama momentum (banyak rugi kecil, jarang menang besar) biar kurva ekuitas gabungan secara psikologis survivable. [His]
- **Sustainability** — jauh dari meja sampai siang, lari dulu; *"gak ada rahasia tersembunyi."*

⟦Disclaimer: edukasi, BUKAN nasihat keuangan. Tidak berafiliasi dengan atau didukung oleh Adam Bakay / Tradingriot — dikompilasi dari blog publik, Q&A WOO X, Insilico #11, dan artikel X yang dia pin. Materi intraday itu FONDASI dia, bukan metode dia sekarang.⟧`,
      },
    },
    {
      id: 'intuition',
      heading: { en: 'Order flow first, then why he left it', id: 'Order flow dulu, terus kenapa dia ninggalin' },
      body: {
        en: `Start with the rawest picture of a market: the **DOM** (Depth of Market). On it live two kinds of order. **Limit orders are liquidity** — passive, resting, the "heavier hand" big players use to avoid slippage; until filled, a limit is *just an advertisement* (it can be pulled or spoofed in seconds). **Market orders are delta** — aggressive, the "weaker hand," but **required for price to move**. Borrowing Jigsaw's analogy: *to go up you lift the offer; to go down you hit the bid.* When market orders exceed the resting limits at a price, price ticks. Delta = offer-lifted minus bid-hit; volume = total contracts. [Established]

**CVD (Cumulative Volume Delta)** is the running total of that signed aggression. In a healthy trend, CVD tracks price. Two divergences matter:
- **Regular divergence** — price makes a new extreme but CVD does not (no aggression at the extreme).
- **Absorption divergence** — *his favourite* — the opposite: **CVD makes a new extreme but PRICE does not**. Aggressive orders are being *eaten* by passive limits → a strong hand is absorbing → reversal. **Golden rule: only at key levels**, never "in the middle of nowhere." [His]

The **footprint chart** is the "inside of the candle" — executed volume at each price. Unlike the DOM advertisement, the footprint shows *filled* orders, so it doesn't lag. He reads stacked diagonal imbalances (3+ = strength → future S/R), finished vs unfinished auctions (0 contracts at the extreme = exhaustion), and a large-size tracker (real size stepping in *with* you = confirmation), filtering noise with **non-time bars** (BTC 1600-tick, ES 3500-tick). [Practitioner]

Above all that sits **Auction Market Theory**: markets are two-way auctions doing two jobs — facilitate trade and **seek fair value**. The **value area** is where ~68% (1 std dev) of volume traded; the **POC** (most-traded price) is a magnet; a naked/untested POC is strongest. Markets are **balanced ~80%** of the time (ranging) and **imbalanced ~20%** (trending). [Practitioner]

So why did he leave? Because doing this *well* meant 15-18 hours a day, and it didn't scale or last. The honest punchline — *"I'm washed"* — is the bridge to phase two: keep the microstructure literacy, drop the grind, and move to a daily-timeframe, evidence-backed edge.`,
        id: `Mulai dari gambaran market paling mentah: **DOM** (Depth of Market). Di situ hidup dua jenis order. **Limit order itu likuiditas** — pasif, diam, "tangan lebih berat" yang dipakai pemain besar buat hindari slippage; sampai ke-fill, limit itu *cuma iklan* (bisa ditarik atau di-spoof dalam hitungan detik). **Market order itu delta** — agresif, "tangan lebih lemah," tapi **wajib biar harga gerak**. Pinjem analogi Jigsaw: *buat naik kamu lift the offer; buat turun kamu hit the bid.* Pas market order ngelewatin limit yang diam di satu harga, harga gerak satu tick. Delta = offer-lifted dikurang bid-hit; volume = total kontrak. [Established]

**CVD (Cumulative Volume Delta)** itu total berjalan dari agresi bertanda itu. Di trend yang sehat, CVD ngikutin harga. Dua divergensi penting:
- **Divergensi reguler** — harga bikin ekstrem baru tapi CVD enggak (gak ada agresi di ekstrem).
- **Absorption divergence** — *favoritnya* — kebalikannya: **CVD bikin ekstrem baru tapi HARGA enggak**. Order agresif lagi *dimakan* sama limit pasif → tangan kuat lagi nyerap → reversal. **Aturan emas: cuma di level kunci**, gak pernah "di tengah antah-berantah." [His]

**Footprint chart** itu "bagian dalam candle" — volume tereksekusi di tiap harga. Beda dari iklan DOM, footprint nunjukin order yang *ke-fill*, jadi gak lagging. Dia baca imbalance diagonal bertumpuk (3+ = kekuatan → S/R masa depan), auction selesai vs belum (0 kontrak di ekstrem = exhaustion), dan large-size tracker (size beneran masuk *bareng* kamu = konfirmasi), nyaring noise pakai **non-time bar** (BTC 1600-tick, ES 3500-tick). [Practitioner]

Di atas semua itu duduk **Auction Market Theory**: market itu auction dua-arah yang ngerjain dua hal — fasilitasi trade dan **cari nilai wajar (fair value)**. **Value area** itu tempat ~68% (1 std dev) volume diperdagangkan; **POC** (harga paling banyak diperdagangkan) itu magnet; POC telanjang/belum-diuji itu paling kuat. Market **balance ~80%** waktu (ranging) dan **imbalance ~20%** (trending). [Practitioner]

Jadi kenapa dia ninggalin? Karena ngelakuin ini dengan *baik* artinya 15-18 jam sehari, dan itu gak scale atau awet. Punchline jujurnya — *"I'm washed"* — itu jembatan ke fase dua: pertahankan literasi microstructure, buang gilingannya, dan pindah ke edge timeframe harian yang didukung bukti.`,
      },
    },
    {
      id: 'formalization',
      heading: { en: 'The variance risk premium, formalized', id: 'Variance risk premium, diformalkan' },
      visualization: {
        id: 'tradingriot-orderflow-vrp-viz',
        component: 'VolSurfaceSVISim',
        title: {
          en: 'The implied-vol surface the premium is harvested from',
          id: 'Permukaan implied-vol tempat premium dipanen',
        },
        description: {
          en: `An SVI-parameterised implied-volatility smile/surface: for each expiry, the smile $w(k)=a+b\\,[\\rho(k-m)+\\sqrt{(k-m)^2+\\sigma^2}]$ in total variance against log-moneyness $k$. This is the object Bakay sells against: the whole curve typically sits ABOVE subsequently realized volatility (the variance risk premium), and put-rich skew ($\\rho<0$) is the "fear" he reads on a percentile basis. Tilt $\\rho$ and lift $a$/$b$ to see how a vol spike fattens the smile he would sell a ~30-DTE strangle into — and why a 5-delta tail hedge (far out in $k$, where the wings live) is cheap insurance against the rare big move.`,
          id: `Smile/surface implied-volatility ber-parameter SVI: tiap expiry, smile $w(k)=a+b\\,[\\rho(k-m)+\\sqrt{(k-m)^2+\\sigma^2}]$ dalam total variance lawan log-moneyness $k$. Ini objek yang Bakay jual lawannya: seluruh kurva biasanya duduk DI ATAS volatilitas realized berikutnya (variance risk premium), dan skew kaya-put ($\\rho<0$) itu "fear" yang dia baca dasar percentile. Miringin $\\rho$ dan angkat $a$/$b$ buat lihat gimana vol spike nggemukin smile yang dia jualin strangle ~30-DTE — dan kenapa tail hedge 5-delta (jauh di $k$, tempat wing hidup) itu asuransi murah lawan gerakan besar yang jarang.`,
        },
        defaultParams: { a: 0.01, b: 0.1, rho: -0.4, m: 0.0, sigma: 0.15, T: 0.25 },
        height: 430,
      },
      body: {
        en: `**The edge in one line.** Let $\\sigma_{\\text{IV}}^2$ be implied (risk-neutral) variance priced into an option today and $\\sigma_{\\text{RV}}^2$ the variance that subsequently realizes. The **variance risk premium** is
$$\\mathrm{VRP} = \\mathbb{E}^{\\mathbb{Q}}[\\sigma_{\\text{RV}}^2] - \\mathbb{E}^{\\mathbb{P}}[\\sigma_{\\text{RV}}^2] \\;\\approx\\; \\sigma_{\\text{IV}}^2 - \\sigma_{\\text{RV}}^2 \\;>\\; 0\\ \\text{on average.}$$
Carr & Wu (2009) and Bollerslev, Tauchen & Zhou (2009) document that this gap is **positive and persistent** — implied vol is, more often than not, richer than realized — so the *seller* of variance is paid a premium for bearing variance/jump risk. That is established [Established].

**How he expresses it.** Sell neutral structures and collect the decaying premium:
- **Straddle** = same-strike call + put; **strangle** = OTM call + put. Sell ~**30 DTE**, betting price stays roughly the same and the options decay (theta works for the seller).
- **Earnings vol-selling** = sell ~**1 DTE** because IV >> the realized move into a known event.
- Prefer **ETFs over single names** for less idiosyncratic/headline risk.

His sizing claim — that the VRP should be **~80-90% of a mature book** — is **[His]**, a personal allocation, not a theorem.

**Why the tail hedge is not optional.** The short-vol payout is "selling insurance": a high hit rate of small wins and a fat left tail. Formally the at-expiry P&L of a short strangle is bounded above by the premium $C$ but **unbounded below** as $|S_T - S_0|$ grows. So he buys cheap **~5-delta** options (≈5% probability of finishing ITM) far out in the wings, turning a ruinous tail into a **bounded** loss — *"so a large move doesn't completely roll you over."* [His] Selling Nvidia vol into a 30% earnings move without it is account-ending.

**Reading the surface.** The implied-vol surface (the sim) is exactly what he harvests. He reads it **comparatively/percentile**, not absolute: **skew** (puts vs calls = fear/direction), **OI percentile** (how crowded vs the last N days), **funding** (cost/crowding of being long/short), **liquidations** (forced-flow extremes), and **IV vs RV** (rich = sell, cheap = buy). [His]`,
        id: `**Edge-nya dalam satu baris.** Misalkan $\\sigma_{\\text{IV}}^2$ itu variance implied (risk-neutral) yang dihargai ke opsi hari ini dan $\\sigma_{\\text{RV}}^2$ variance yang ter-realisasi berikutnya. **Variance risk premium** itu
$$\\mathrm{VRP} = \\mathbb{E}^{\\mathbb{Q}}[\\sigma_{\\text{RV}}^2] - \\mathbb{E}^{\\mathbb{P}}[\\sigma_{\\text{RV}}^2] \\;\\approx\\; \\sigma_{\\text{IV}}^2 - \\sigma_{\\text{RV}}^2 \\;>\\; 0\\ \\text{rata-rata.}$$
Carr & Wu (2009) dan Bollerslev, Tauchen & Zhou (2009) ngedokumentasiin gap ini **positif dan persisten** — implied vol, lebih sering ketimbang enggak, lebih kaya dari realized — jadi *penjual* variance dibayar premium karena nanggung risiko variance/jump. Itu mapan [Established].

**Gimana dia mengekspresikannya.** Jual struktur netral dan kumpulin premium yang meluruh:
- **Straddle** = call + put strike sama; **strangle** = call + put OTM. Jual ~**30 DTE**, taruhan harga tetep kira-kira sama dan opsinya decay (theta kerja buat penjual).
- **Jual vol earnings** = jual ~**1 DTE** karena IV >> gerakan realized ke event yang udah diketahui.
- Lebih suka **ETF ketimbang nama tunggal** biar risiko idiosinkratik/headline lebih kecil.

Klaim sizing dia — kalau VRP harusnya **~80-90% buku matang** — itu **[His]**, alokasi pribadi, bukan teorema.

**Kenapa tail hedge gak opsional.** Payout short-vol itu "jual asuransi": hit rate tinggi dari menang kecil dan tail kiri yang gemuk. Secara formal P&L saat-expiry strangle short dibatasi di atas oleh premium $C$ tapi **gak terbatas di bawah** saat $|S_T - S_0|$ membesar. Jadi dia beli opsi murah **~5-delta** (≈5% probabilitas finish ITM) jauh di wing, ngubah tail yang menghancurkan jadi rugi **terbatas** — *"biar gerakan besar gak benar-benar ngegulingin kamu."* [His] Jual vol Nvidia ke gerakan earnings 30% tanpa itu = ngabisin akun.

**Baca surface-nya.** Surface implied-vol (sim ini) itu persis yang dia panen. Dia baca **komparatif/percentile**, bukan absolut: **skew** (put vs call = fear/arah), **percentile OI** (seberapa ramai vs N hari terakhir), **funding** (biaya/crowding long/short), **liquidasi** (ekstrem forced-flow), dan **IV vs RV** (kaya = jual, murah = beli). [His]`,
      },
    },
    {
      id: 'worked-example',
      heading: { en: 'Worked example: structuring a short-vol trade', id: 'Contoh: menyusun trade short-vol' },
      body: {
        en: `**Illustrative, not a recommendation.** Walk a single short-vol trade the way he frames it (the source pack uses an IBIT strangle after a vol spike as the shape; treat the exact numbers as a teaching illustration, not advice).

1. **Find rich IV.** A vol spike pushes IV well above what is likely to realize — say 30-day IV at the 90th percentile of its last year, while realized has been calm. That is the VRP at its widest: the surface in the sim sits high and put-skewed ($\\rho<0$, "fear"). Rich = sell.
2. **Pick the structure.** Sell a **~30-DTE strangle**: an OTM call above and an OTM put below, collecting a premium $C$. The at-expiry payout is a **tent**: maximum profit $C$ if price finishes between the strikes; loss grows linearly once price clears a strike; **breakevens** at (call strike $+\\,C$) and (put strike $-\\,C$). You are betting price *stays roughly the same* and the options decay.
3. **Buy the tail FIRST.** Before you are short any vol, buy a cheap **5-delta** call and put far in the wings. They cost a small fraction of $C$ but **clip the wings**: a 30% gap no longer "rolls you over" — your max loss is bounded. This is non-negotiable in his framing — selling vol is *"definitely NOT a free trade."* [His]
4. **Size for the unwind, prefer ETFs.** He prefers ETFs (e.g. IBIT) over single names so one headline doesn't blow the structure up; sizing assumes the rare big move *will* happen.
5. **Pair it with momentum.** Run this short-vol book *alongside* a trend-following book. When vol is dead, the strangle pays the bills; when vol explodes (your short-vol bad day), the momentum/tail side delivers the rare convex payoff — the blended curve is smoother. [His]

**Earnings variant.** Around a known earnings date, sell ~**1-DTE** vol because IV is jacked far above the typical realized move — same VRP logic, compressed in time, same mandatory hedge.

⟦Disclaimer: illustrative structure and numbers only — NOT a recommendation. Short vol is not free income; without the tail hedge a single move can be account-ending. On a small account "the P&L is almost meaningless" — this margin-using, multi-strategy approach is "not something you can do with a couple thousand dollars."⟧`,
        id: `**Ilustratif, bukan rekomendasi.** Jalanin satu trade short-vol cara dia ngeframe-nya (source pack pakai strangle IBIT setelah vol spike sebagai bentuknya; anggap angka persisnya ilustrasi ngajar, bukan nasihat).

1. **Cari IV kaya.** Vol spike ndorong IV jauh di atas yang kemungkinan ter-realisasi — misal IV 30-hari di percentile ke-90 dari setahun terakhir, sementara realized lagi tenang. Itu VRP di paling lebar: surface di sim duduk tinggi dan put-skewed ($\\rho<0$, "fear"). Kaya = jual.
2. **Pilih struktur.** Jual **strangle ~30-DTE**: call OTM di atas dan put OTM di bawah, ngumpulin premium $C$. Payout saat-expiry itu **tenda**: profit maksimum $C$ kalau harga finish di antara strike; rugi tumbuh linier begitu harga lewat strike; **breakeven** di (strike call $+\\,C$) dan (strike put $-\\,C$). Kamu taruhan harga *tetep kira-kira sama* dan opsinya decay.
3. **Beli tail DULUAN.** Sebelum kamu short vol apapun, beli call dan put **5-delta** murah jauh di wing. Mereka biayanya sebagian kecil dari $C$ tapi **motong wing**: gap 30% gak lagi "ngegulingin kamu" — rugi maksimum kamu terbatas. Ini gak bisa ditawar di framing dia — jual vol itu *"jelas BUKAN trade gratis."* [His]
4. **Size buat unwind, lebih suka ETF.** Dia lebih suka ETF (misal IBIT) ketimbang nama tunggal biar satu headline gak ngancurin struktur; sizing asumsi gerakan besar yang jarang *bakal* terjadi.
5. **Pasangin sama momentum.** Jalanin buku short-vol ini *bareng* buku trend-following. Pas vol mati, strangle bayar tagihan; pas vol meledak (hari buruk short-vol kamu), sisi momentum/tail ngasih payout konveks yang jarang — kurva gabungan lebih mulus. [His]

**Varian earnings.** Di sekitar tanggal earnings yang diketahui, jual vol ~**1-DTE** karena IV dipompa jauh di atas gerakan realized tipikal — logika VRP yang sama, dimampatkan dalam waktu, hedge wajib yang sama.

⟦Disclaimer: struktur dan angka ilustratif aja — BUKAN rekomendasi. Short vol bukan pendapatan gratis; tanpa tail hedge satu gerakan bisa ngabisin akun. Di akun kecil "P&L-nya hampir gak berarti" — pendekatan multi-strategi pakai-margin ini "bukan sesuatu yang bisa kamu lakuin dengan beberapa ribu dolar."⟧`,
      },
    },
    {
      id: 'applications',
      heading: { en: 'Applications', id: 'Aplikasi' },
      body: {
        en: `**Order flow as foundation, used at key levels.** The phase-one toolkit earns its keep as *confirmation*, not as a standalone system. Absorption divergence (CVD new extreme, price not) at a value-area edge or a naked POC is a higher-probability reversal tell than the same divergence "in the middle of nowhere" [His]. Footprint imbalances (3+ stacked) mark future S/R; finished vs unfinished auctions flag exhaustion vs likely-revisited extremes. This is the microstructure layer beneath an order-flow practitioner's read — see [Luckshury's order-flow routine](item:luckshury-orderflow) and the expectancy frame of [Trader XO](item:traderxo-expectancy).

**Auction Market Theory as a map.** Value area, POC, balance/imbalance and Dalton's heuristics give a daily *bias*: balanced ~80% of the time (fade extremes back to value) vs imbalanced ~20% (trend). **Dalton's 80% rule** — open outside prior value, accept back inside for two TPOs → ~80% odds of rotating to the other side — is a **probabilistic tendency he insists must be backtested**, not a law [Practitioner].

**Selling the VRP (the current core).** Harvest the implied-over-realized gap with ~30-DTE strangles/straddles plus the 5-delta tail hedge; sell ~1-DTE around earnings. The surface in the sim is the live object — read skew/OI/funding/IV-vs-RV on a percentile basis to decide *rich (sell) vs cheap (buy)*. The vol surface itself connects to [Gatheral's vol surface](item:gatheral-vol-surface). Funding as a crowding/cost gauge is its own module: [perp funding & carry](item:perp-funding-carry).

**Combining payout curves (the portfolio idea).** Run ~6-7 **uncorrelated** strategies so swing-trading's "prolonged periods of nothing" don't become a dead week, and so the short-vol "many small wins, rare big loss" payout is offset by momentum's "many small losses, rare big win." The blended equity curve is smoother and *psychologically survivable* — the real point [His].

**Honest limits.** That IV > RV is [Established]; the 80-90%-short-vol *implementation* is [His] and "definitely NOT a free trade." The 80% rule, absorption divergence, and IB/day-type odds are **practitioner heuristics to backtest**, not guarantees. This margin-using, multi-strategy approach "is not something you can do with a couple thousand dollars," and edges with long historical evidence outlast clever, crowded carry/arb edges that "usually don't last." And remember he himself stopped day-trading the intraday tools: *"I'm washed."*`,
        id: `**Order flow sebagai fondasi, dipakai di level kunci.** Toolkit fase-satu berguna sebagai *konfirmasi*, bukan sistem standalone. Absorption divergence (CVD ekstrem baru, harga enggak) di tepi value-area atau POC telanjang itu tell reversal lebih tinggi-probabilitas ketimbang divergensi yang sama "di tengah antah-berantah" [His]. Imbalance footprint (3+ bertumpuk) nandain S/R masa depan; auction selesai vs belum nge-flag exhaustion vs ekstrem yang kemungkinan-dikunjungi-lagi. Ini lapisan microstructure di bawah bacaan praktisi order flow — lihat [rutinitas order flow Luckshury](item:luckshury-orderflow) dan frame expectancy [Trader XO](item:traderxo-expectancy).

**Auction Market Theory sebagai peta.** Value area, POC, balance/imbalance, dan heuristik Dalton ngasih *bias* harian: balance ~80% waktu (fade ekstrem balik ke value) vs imbalance ~20% (trend). **Aturan 80% Dalton** — buka di luar value sebelumnya, terima balik ke dalam dua TPO → ~80% peluang rotasi ke sisi lain — itu **kecenderungan probabilistik yang dia tekankan harus di-backtest**, bukan hukum [Practitioner].

**Jual VRP (inti sekarang).** Panen gap implied-over-realized pakai strangle/straddle ~30-DTE plus tail hedge 5-delta; jual ~1-DTE di sekitar earnings. Surface di sim itu objek live-nya — baca skew/OI/funding/IV-vs-RV dasar percentile buat mutusin *kaya (jual) vs murah (beli)*. Vol surface sendiri nyambung ke [vol surface Gatheral](item:gatheral-vol-surface). Funding sebagai gauge crowding/biaya itu module sendiri: [perp funding & carry](item:perp-funding-carry).

**Menggabung payout curve (ide portfolio).** Jalanin ~6-7 strategi **gak berkorelasi** biar "periode panjang gak ada apa-apa" dari swing-trading gak jadi minggu mati, dan biar payout short-vol "banyak menang kecil, jarang rugi besar" diimbangi momentum "banyak rugi kecil, jarang menang besar." Kurva ekuitas gabungan lebih mulus dan *survivable secara psikologis* — inti sebenarnya [His].

**Batas jujur.** Kalau IV > RV itu [Established]; *implementasi* 80-90%-short-vol itu [His] dan "jelas BUKAN trade gratis." Aturan 80%, absorption divergence, dan odds IB/day-type itu **heuristik praktisi yang harus di-backtest**, bukan jaminan. Pendekatan multi-strategi pakai-margin ini "bukan sesuatu yang bisa kamu lakuin dengan beberapa ribu dolar," dan edge dengan bukti historis panjang ngalahin edge carry/arb yang pinter dan ramai yang "biasanya gak bertahan." Dan inget dia sendiri berhenti day-trade tool intraday: *"I'm washed."*`,
      },
    },
    {
      id: 'practice',
      heading: { en: 'Practice', id: 'Latihan' },
      body: {
        en: `**1.** What is the difference between limit orders and market orders in order flow, and why does only one of them move price?

<details><summary>Answer</summary>
LIMIT orders = LIQUIDITY: passive, resting orders (the "heavier hand" big players use to avoid slippage). Until filled, a limit is just an advertisement — it can be pulled or spoofed in seconds, so it doesn't itself move price. MARKET orders = DELTA: aggressive orders (the "weaker hand") that REQUIRE counterparty liquidity but are REQUIRED for price to move. Price only ticks when aggressive market orders exceed the resting limit liquidity at a price ("to go up you lift the offer; to go down you hit the bid"). Delta = offer-lifted minus bid-hit; volume = total contracts. [Established]
</details>

**2.** Define absorption divergence and state Bakay's golden rule for using it.

<details><summary>Answer</summary>
Absorption divergence (his FAVOURITE tell): CVD (cumulative signed aggression) makes a NEW EXTREME but PRICE does NOT — aggressive market orders are being absorbed/eaten by passive limit orders, so a strong hand is soaking up the flow → reversal. It is the opposite of a regular divergence (price new extreme, delta doesn't). GOLDEN RULE: only use order-flow divergences AT KEY LEVELS (value-area edge, naked POC, prior S/R), never "in the middle of nowhere." [His]
</details>

**3.** Write the variance risk premium and explain why selling it is a positive-expectancy edge — and why it is "definitely NOT a free trade."

<details><summary>Answer</summary>
VRP ≈ σ²_IV − σ²_RV > 0 on average: implied (risk-neutral) variance priced into options is, more often than not, richer than the variance that subsequently realizes (Carr & Wu 2009; Bollerslev-Tauchen-Zhou 2009) [Established]. So the SELLER of variance (e.g. a ~30-DTE strangle/straddle) collects a premium for bearing variance/jump risk, and theta decays the option in their favour. It is NOT free because the short-vol payout is "selling insurance": many small wins, but the left tail is unbounded — every once in a while the market moves a lot and you lose a lot. Hence the MANDATORY 5-delta tail hedge that clips the wings into a bounded loss. [His]
</details>

**4.** Explain "combining payout curves" and why Bakay runs both an option-selling book and a momentum book.

<details><summary>Answer</summary>
Option-selling has a "selling insurance" payout: MANY SMALL WINS, RARE BIG LOSS (concave). Momentum/trend-following is the mirror: MANY SMALL LOSSES, RARE BIG WIN (convex). Running BOTH blends the equity curve so it is smoother and PSYCHOLOGICALLY SURVIVABLE: in calm regimes the option book pays the bills; in a vol blow-up — the option book's bad day — the momentum/tail side delivers the rare convex payoff (and vice versa). He runs ~6-7 UNCORRELATED strategies for the same reason: so a quiet stretch in one isn't a dead week overall. [His]
</details>

**5.** State Dalton's 80% rule and the caveat Bakay attaches to it.

<details><summary>Answer</summary>
80% RULE: if price opens OUTSIDE the prior day's value area and then ACCEPTS BACK INSIDE for two 30-min TPO periods, there is ~80% probability it rotates to the OTHER side of the value area. CAVEAT: it is a PROBABILISTIC TENDENCY, not a law — Bakay insists it (like absorption divergence and IB/day-type odds) must be BACKTESTED on your market, not traded blindly. It comes from Auction Market Theory (Dalton): markets are balanced ~80% / imbalanced ~20%, seeking fair value via the value area (~68% of volume) and the POC magnet. [Practitioner]
</details>`,
        id: `**1.** Apa beda limit order dan market order di order flow, dan kenapa cuma salah satunya yang gerakin harga?

<details><summary>Jawaban</summary>
LIMIT order = LIKUIDITAS: order pasif yang diam (the "heavier hand" / "tangan lebih berat" yang dipakai pemain besar buat hindari slippage). Sampai ke-fill, limit cuma iklan — bisa ditarik atau di-spoof dalam detik, jadi dia sendiri gak gerakin harga. MARKET order = DELTA: order agresif ("tangan lebih lemah") yang BUTUH likuiditas lawan tapi WAJIB biar harga gerak. Harga cuma gerak satu tick pas market order agresif ngelewatin limit yang diam di satu harga ("buat naik kamu lift the offer; buat turun kamu hit the bid"). Delta = offer-lifted dikurang bid-hit; volume = total kontrak. [Established]
</details>

**2.** Definisiin absorption divergence dan sebutin aturan emas Bakay buat makainya.

<details><summary>Jawaban</summary>
Absorption divergence (tell FAVORITNYA): CVD (agresi bertanda kumulatif) bikin EKSTREM BARU tapi HARGA enggak — market order agresif lagi diserap/dimakan limit pasif, jadi tangan kuat lagi nyerap flow → reversal. Itu kebalikan divergensi reguler (harga ekstrem baru, delta enggak). ATURAN EMAS: cuma pakai divergensi order flow DI LEVEL KUNCI (tepi value-area, POC telanjang, S/R sebelumnya), gak pernah "di tengah antah-berantah." [His]
</details>

**3.** Tulis variance risk premium dan jelasin kenapa jual itu edge expectancy-positif — dan kenapa itu "jelas BUKAN trade gratis."

<details><summary>Jawaban</summary>
VRP ≈ σ²_IV − σ²_RV > 0 rata-rata: variance implied (risk-neutral) yang dihargai ke opsi, lebih sering ketimbang enggak, lebih kaya dari variance yang ter-realisasi berikutnya (Carr & Wu 2009; Bollerslev-Tauchen-Zhou 2009) [Established]. Jadi PENJUAL variance (misal strangle/straddle ~30-DTE) ngumpulin premium karena nanggung risiko variance/jump, dan theta nge-decay opsi ke arah dia. Itu BUKAN gratis karena payout short-vol itu "jual asuransi": banyak menang kecil, tapi tail kiri gak terbatas — sesekali market gerak banyak dan kamu rugi banyak. Makanya tail hedge 5-delta WAJIB yang motong wing jadi rugi terbatas. [His]
</details>

**4.** Jelasin "menggabung payout curve" dan kenapa Bakay jalanin buku jual-opsi sekaligus buku momentum.

<details><summary>Jawaban</summary>
Jual opsi punya payout "jual asuransi": BANYAK MENANG KECIL, JARANG RUGI BESAR (konkaf). Momentum/trend-following kebalikannya: BANYAK RUGI KECIL, JARANG MENANG BESAR (konveks). Jalanin DUA-DUANYA nge-blend kurva ekuitas biar lebih mulus dan SURVIVABLE SECARA PSIKOLOGIS: di regime tenang buku opsi bayar tagihan; di vol blow-up — hari buruk buku opsi — sisi momentum/tail ngasih payout konveks yang jarang (dan sebaliknya). Dia jalanin ~6-7 strategi GAK BERKORELASI buat alasan yang sama: biar masa sepi di satu strategi gak jadi minggu mati keseluruhan. [His]
</details>

**5.** Sebutin aturan 80% Dalton dan catatan yang Bakay tempelin ke situ.

<details><summary>Jawaban</summary>
ATURAN 80%: kalau harga buka DI LUAR value area hari sebelumnya terus DITERIMA BALIK KE DALAM selama dua periode TPO 30-menit, ada ~80% probabilitas dia rotasi ke sisi LAIN value area. CATATAN: itu KECENDERUNGAN PROBABILISTIK, bukan hukum — Bakay tekankan itu (kayak absorption divergence dan odds IB/day-type) harus di-BACKTEST di market kamu, bukan ditradein buta. Asalnya dari Auction Market Theory (Dalton): market balance ~80% / imbalance ~20%, nyari fair value via value area (~68% volume) dan magnet POC. [Practitioner]
</details>`,
      },
    },
    {
      id: 'connections',
      heading: { en: 'Connections', id: 'Koneksi' },
      body: {
        en: `- **Prerequisite / systematic neighbour**: [the Insilico method](item:insilico-method) — the systematic, multi-strategy mindset Bakay's second act shares; this module is its order-flow-to-vol-selling companion.
- **The vol surface he harvests**: [Gatheral's vol surface](item:gatheral-vol-surface) — the implied-vol smile/surface (the sim) is the object the VRP lives on; reading it rich-vs-cheap is the trade.
- **Order-flow siblings**: [Luckshury's order-flow routine](item:luckshury-orderflow) shares the footprint/CVD/Auction-Market-Theory foundation; [Trader XO's expectancy](item:traderxo-expectancy) frames why an evidence-backed edge plus sizing beats prediction.
- **The crowding/cost gauges he reads**: [perp funding & carry](item:perp-funding-carry) — funding is one of the percentile positioning inputs (cost/crowding of being long/short) in his "read positioning, not lines" lens.`,
        id: `- **Prasyarat / tetangga systematic**: [metode Insilico](item:insilico-method) — mindset systematic multi-strategi yang babak kedua Bakay share; module ini pendamping order-flow-ke-jual-vol-nya.
- **Vol surface yang dia panen**: [vol surface Gatheral](item:gatheral-vol-surface) — smile/surface implied-vol (sim ini) itu objek tempat VRP hidup; bacanya kaya-vs-murah itu trade-nya.
- **Saudara order flow**: [rutinitas order flow Luckshury](item:luckshury-orderflow) berbagi fondasi footprint/CVD/Auction-Market-Theory; [expectancy Trader XO](item:traderxo-expectancy) ngeframe kenapa edge didukung-bukti plus sizing ngalahin prediksi.
- **Gauge crowding/biaya yang dia baca**: [perp funding & carry](item:perp-funding-carry) — funding itu salah satu input positioning percentile (biaya/crowding long/short) di lensa "baca posisi, bukan garis"-nya.`,
      },
    },
    {
      id: 'sources',
      heading: { en: 'Sources', id: 'Sumber' },
      body: {
        en: `Primary practitioner source + academic grounding (web-verified where possible). **Educational, NOT financial advice. NOT affiliated with or endorsed by Adam Bakay / Tradingriot** — compiled from his public blog, the WOO X written Q&A, the Insilico Terminal Podcast #11, and his pinned X article; quotes are short and for commentary. The intraday order-flow / footprint / Market-Profile material is presented as his FOUNDATION, which he himself has stopped using (*"I'm washed... I don't look below the daily timeframe"*), not his current method.

- **Bakay, Adam (@abetrade).** (2019-2025). *Tradingriot blog; WOO X written Q&A; Insilico Terminal Podcast #11; pinned X article.* **(This item.)** Primary source for the two-phase arc and all quotes.
- **Carr, P. & Wu, L.** (2009). "Variance Risk Premiums." *Review of Financial Studies* 22(3):1311-1341. Implied vol systematically richer than realized — the academic spine of the option-selling edge. [Established]
- **Bollerslev, T., Tauchen, G. & Zhou, H.** (2009). "Expected Stock Returns and Variance Risk Premia." *RFS* 22(11):4463-4492. The VRP has predictive power for returns. [Established]
- **Sinclair, Euan.** (2013). *Volatility Trading*, 2nd ed. Wiley. The practitioner reference for IV vs RV and selling premium (the "selling insurance" framing).
- **Hull, John.** (2017). *Options, Futures, and Other Derivatives.* The standard text for delta, DTE, straddles/strangles and the 5-delta tail hedge.
- **Dalton, J., Jones, E. & Dalton, R.** (1990/2007). *Mind Over Markets / Markets in Profile.* Wiley. Auction Market Theory — value area, POC, day types, the 80% rule. [Practitioner]
- **Steidlmayer, J.P. & Hawkins, S.** (2003). *Steidlmayer on Markets: Trading with Market Profile.* Wiley. Market Profile foundations (introduced at the CBOT 1984-85). [Practitioner]
- **Harris, Larry.** (2003). *Trading and Exchanges: Market Microstructure for Practitioners.* Oxford University Press. DOM, limit vs market orders, hidden/iceberg orders, liquidity. [Established]
- **O'Hara, Maureen.** (1995). *Market Microstructure Theory.* Blackwell. Microstructure foundation (covered in depth by [O'Hara 1995](item:ohara-1995)).
- **Easley, D., López de Prado, M. & O'Hara, M.** (2012). "Flow Toxicity and Liquidity in a High-Frequency World (VPIN)." *RFS* 25(5):1457-1493. Signed flow carries information (covered in depth by [Easley-López de Prado-O'Hara, VPIN](item:easley-lopez-prado-vpin)).
- **Berkowitz, S., Logue, D. & Noser, E.** (1988). "The Total Cost of Transactions on the NYSE." *Journal of Finance* 43(1):97-112. Formalised VWAP as an execution benchmark / fair-value reference.

⟦Cautions: that IV > RV is [Established]; his 80-90%-short-vol implementation is [His] and "definitely NOT a free trade" — always paired with the mandatory tail hedge, never presented as risk-free income. The 80% rule, absorption divergence and IB/day-type odds are practitioner heuristics he says must be BACKTESTED. No specific win rates or returns are claimed. Some current-playbook details (co-founder names, the IBIT/"October 10th" example, ~198K followers, the Breakout/Kraken acquisition) are from the source pack and may be imprecise — the IBIT strangle is an illustration of how he structures a trade, not a recommendation. This margin-using, multi-strategy approach "is not something you can do with a couple thousand dollars."⟧`,
        id: `Sumber praktisi primer + landasan akademik (terverifikasi-web sebisanya). **Edukasi, BUKAN nasihat keuangan. Tidak berafiliasi dengan atau didukung oleh Adam Bakay / Tradingriot** — dikompilasi dari blog publik, Q&A tertulis WOO X, Insilico Terminal Podcast #11, dan artikel X yang dia pin; kutipan pendek dan buat komentar. Materi intraday order flow / footprint / Market Profile disajikan sebagai FONDASI dia, yang dia sendiri udah berhenti pakai (*"I'm washed... gak pernah lihat di bawah timeframe harian"*), bukan metode dia sekarang.

- **Bakay, Adam (@abetrade).** (2019-2025). *Blog Tradingriot; Q&A tertulis WOO X; Insilico Terminal Podcast #11; artikel X yang dipin.* **(Item ini.)** Sumber primer buat arc dua-fase dan semua kutipan.
- **Carr, P. & Wu, L.** (2009). "Variance Risk Premiums." *Review of Financial Studies* 22(3):1311-1341. Implied vol sistematis lebih kaya dari realized — tulang punggung akademik edge jual-opsi. [Established]
- **Bollerslev, T., Tauchen, G. & Zhou, H.** (2009). "Expected Stock Returns and Variance Risk Premia." *RFS* 22(11):4463-4492. VRP punya daya prediksi buat return. [Established]
- **Sinclair, Euan.** (2013). *Volatility Trading*, ed. ke-2. Wiley. Referensi praktisi buat IV vs RV dan jual premium (framing "jual asuransi").
- **Hull, John.** (2017). *Options, Futures, and Other Derivatives.* Teks standar buat delta, DTE, straddle/strangle, dan tail hedge 5-delta.
- **Dalton, J., Jones, E. & Dalton, R.** (1990/2007). *Mind Over Markets / Markets in Profile.* Wiley. Auction Market Theory — value area, POC, tipe hari, aturan 80%. [Practitioner]
- **Steidlmayer, J.P. & Hawkins, S.** (2003). *Steidlmayer on Markets: Trading with Market Profile.* Wiley. Fondasi Market Profile (diperkenalkan di CBOT 1984-85). [Practitioner]
- **Harris, Larry.** (2003). *Trading and Exchanges: Market Microstructure for Practitioners.* Oxford University Press. DOM, limit vs market order, hidden/iceberg order, likuiditas. [Established]
- **O'Hara, Maureen.** (1995). *Market Microstructure Theory.* Blackwell. Fondasi microstructure (dibahas mendalam di [O'Hara 1995](item:ohara-1995)).
- **Easley, D., López de Prado, M. & O'Hara, M.** (2012). "Flow Toxicity and Liquidity in a High-Frequency World (VPIN)." *RFS* 25(5):1457-1493. Signed flow bawa informasi (dibahas mendalam di [Easley-López de Prado-O'Hara, VPIN](item:easley-lopez-prado-vpin)).
- **Berkowitz, S., Logue, D. & Noser, E.** (1988). "The Total Cost of Transactions on the NYSE." *Journal of Finance* 43(1):97-112. Ngeformalisasi VWAP sebagai benchmark eksekusi / referensi fair-value.

⟦Catatan: kalau IV > RV itu [Established]; implementasi 80-90%-short-vol dia itu [His] dan "jelas BUKAN trade gratis" — selalu dipasangin tail hedge wajib, gak pernah disajikan sebagai pendapatan bebas-risiko. Aturan 80%, absorption divergence, dan odds IB/day-type itu heuristik praktisi yang dia bilang harus di-BACKTEST. Gak ada win rate atau return spesifik yang diklaim. Sebagian detail playbook sekarang (nama co-founder, contoh IBIT/"10 Oktober", ~198K follower, akuisisi Breakout/Kraken) dari source pack dan mungkin gak presisi — strangle IBIT itu ilustrasi gimana dia nyusun trade, bukan rekomendasi. Pendekatan multi-strategi pakai-margin ini "bukan sesuatu yang bisa kamu lakuin dengan beberapa ribu dolar."⟧`,
      },
    },
  ],

  audio: { enabled: true },

  selfTest: [
    {
      sectionId: 'intuition',
      question: { en: `In order flow, what is the difference between limit and market orders, and which one actually moves price?`, id: `Di order flow, apa beda limit dan market order, dan yang mana yang beneran gerakin harga?` },
      prompt: { en: 'Before continuing, try answering:', id: 'Sebelum lanjut, coba jawab:' },
      answer: {
        en: `LIMIT orders are LIQUIDITY: passive resting orders — the "heavier hand" big players use to avoid slippage — but until filled a limit is just an advertisement that can be pulled or spoofed in seconds, so it does not itself move price. MARKET orders are DELTA: aggressive orders (the "weaker hand") that consume liquidity and are REQUIRED for price to move. Price only ticks when aggressive market orders exceed the resting limit liquidity at a price — "to go up you lift the offer; to go down you hit the bid." Delta = offer-lifted minus bid-hit (signed aggression); volume = total contracts. CVD is the running total of that signed aggression; its divergences from price (especially absorption divergence, at key levels) are Bakay's reversal tells. [Established]`,
        id: `LIMIT order itu LIKUIDITAS: order pasif yang diam — "tangan lebih berat" yang dipakai pemain besar buat hindari slippage — tapi sampai ke-fill, limit cuma iklan yang bisa ditarik atau di-spoof dalam detik, jadi dia sendiri gak gerakin harga. MARKET order itu DELTA: order agresif ("tangan lebih lemah") yang ngonsumsi likuiditas dan WAJIB biar harga gerak. Harga cuma gerak satu tick pas market order agresif ngelewatin limit yang diam di satu harga — "buat naik kamu lift the offer; buat turun kamu hit the bid." Delta = offer-lifted dikurang bid-hit (agresi bertanda); volume = total kontrak. CVD itu total berjalan dari agresi bertanda itu; divergensinya dari harga (terutama absorption divergence, di level kunci) itu tell reversal Bakay. [Established]`,
      },
    },
    {
      sectionId: 'formalization',
      question: { en: `Write the variance risk premium, explain why selling it is positive-expectancy, and why the tail hedge is mandatory.`, id: `Tulis variance risk premium, jelasin kenapa jual itu expectancy-positif, dan kenapa tail hedge wajib.` },
      prompt: { en: 'Before continuing, try answering:', id: 'Sebelum lanjut, coba jawab:' },
      answer: {
        en: `VRP ≈ σ²_IV − σ²_RV > 0 on average: the implied (risk-neutral) variance priced into options is, more often than not, richer than the variance that subsequently realizes (Carr & Wu 2009; Bollerslev-Tauchen-Zhou 2009) [Established]. So the SELLER of variance — e.g. a ~30-DTE straddle/strangle — is paid a premium for bearing variance/jump risk, and theta decays the option in their favour: positive expectancy on average. But it is "definitely NOT a free trade" [His]: the short-vol payout is "selling insurance" — many small wins, but the LEFT TAIL is unbounded (the short strangle's loss grows without limit as |S_T − S_0| grows). Hence the MANDATORY ~5-delta tail hedge: cheap far-OTM options that clip the wings, converting a ruinous, account-ending tail into a BOUNDED loss "so a large move doesn't completely roll you over." His claim that this should be ~80-90% of a mature book is [His], an allocation, not a theorem.`,
        id: `VRP ≈ σ²_IV − σ²_RV > 0 rata-rata: variance implied (risk-neutral) yang dihargai ke opsi, lebih sering ketimbang enggak, lebih kaya dari variance yang ter-realisasi berikutnya (Carr & Wu 2009; Bollerslev-Tauchen-Zhou 2009) [Established]. Jadi PENJUAL variance — misal straddle/strangle ~30-DTE — dibayar premium karena nanggung risiko variance/jump, dan theta nge-decay opsi ke arah dia: expectancy positif rata-rata. Tapi itu "jelas BUKAN trade gratis" [His]: payout short-vol itu "jual asuransi" — banyak menang kecil, tapi TAIL KIRI gak terbatas (rugi strangle short tumbuh tanpa batas saat |S_T − S_0| membesar). Makanya tail hedge ~5-delta WAJIB: opsi murah jauh-OTM yang motong wing, ngubah tail yang menghancurkan dan ngabisin-akun jadi rugi TERBATAS "biar gerakan besar gak benar-benar ngegulingin kamu." Klaim dia kalau ini harusnya ~80-90% buku matang itu [His], alokasi, bukan teorema.`,
      },
    },
    {
      sectionId: 'applications',
      question: { en: `What is "combining payout curves," and why is it the heart of his survivability?`, id: `Apa itu "menggabung payout curve," dan kenapa itu inti survivability dia?` },
      prompt: { en: 'Before continuing, try answering:', id: 'Sebelum lanjut, coba jawab:' },
      answer: {
        en: `Option-selling has a "selling insurance" payout: MANY SMALL WINS, RARE BIG LOSS (concave). Momentum/trend-following is the mirror image: MANY SMALL LOSSES, RARE BIG WIN (convex). Their bad regimes are different: the option book suffers exactly when vol explodes, which is precisely when the momentum/tail book delivers its rare convex payoff — and in calm chop the option book pays the bills while momentum bleeds small. Running BOTH therefore blends the equity curve into something smoother and PSYCHOLOGICALLY SURVIVABLE — the real point, because a curve you can stick with is itself the edge. Bakay generalises this to ~6-7 UNCORRELATED strategies across crypto/FX/futures/equities so that a "prolonged period of nothing" in any one isn't a dead week overall. Note: that IV > RV is [Established], but the 80-90%-short-vol sizing and the payout-combining thesis are [His], and the whole thing assumes a tail hedge and an account large enough that the P&L is meaningful.`,
        id: `Jual opsi punya payout "jual asuransi": BANYAK MENANG KECIL, JARANG RUGI BESAR (konkaf). Momentum/trend-following bayangan cerminnya: BANYAK RUGI KECIL, JARANG MENANG BESAR (konveks). Regime buruknya beda: buku opsi menderita persis pas vol meledak, yang itu justru pas buku momentum/tail ngasih payout konveks langkanya — dan di chop tenang buku opsi bayar tagihan sementara momentum berdarah kecil. Jalanin DUA-DUANYA makanya nge-blend kurva ekuitas jadi sesuatu yang lebih mulus dan SURVIVABLE SECARA PSIKOLOGIS — inti sebenarnya, karena kurva yang bisa kamu pegangin itu sendiri edge-nya. Bakay generalisasi ini ke ~6-7 strategi GAK BERKORELASI lintas crypto/FX/futures/equity biar "periode panjang gak ada apa-apa" di satu strategi gak jadi minggu mati keseluruhan. Catatan: kalau IV > RV itu [Established], tapi sizing 80-90%-short-vol dan tesis penggabungan-payout itu [His], dan semuanya asumsi ada tail hedge dan akun cukup besar biar P&L-nya berarti.`,
      },
    },
  ],
};
