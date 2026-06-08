// ─────────────────────────────────────────────────────────────────────────
// Trading domain — @Luckshuryy's free intraday order-flow curriculum: a
// five-layer synthesis (Auction Market Theory / Market Profile · footprint &
// CVD · derivatives positioning OI/liquidations · Smart-Money structures ·
// back-tested SESSION STATISTICS) fused into ONE fixed daily-bias routine for
// trading reversals on custom UTC sessions (Asia/London/NY/Close). Carries the
// interactive VolumeProfileSim (POC / value area / HVN-LVN). Evidence-tagged
// [Established]/[Practitioner]/[His]. DISCRETIONARY intraday — hard, most
// attempters lose. Educational, not financial advice; not affiliated with or
// endorsed by @Luckshuryy.
// ─────────────────────────────────────────────────────────────────────────

export const CONTENT = {
  itemId: 'luckshury-orderflow',
  estimatedReadMinutes: 30,

  author: {
    fullName: { en: '@Luckshuryy — intraday order-flow day trader (Exocharts lead)', id: '@Luckshuryy — day trader order-flow intraday (lead Exocharts)' },
    affiliation: {
      en: 'Self-described full-time day trader since 2018 and Exocharts admin/lead, trading crypto and futures (BTC, NQ, ES) intraday. Publishes a free, unusually systematic order-flow curriculum. The method rests on established Auction Market Theory (Steidlmayer; Dalton), market microstructure (Harris; OHara), order-flow toxicity (Easley, Lopez de Prado & OHara), and stop-clustering (Osler).',
      id: 'Mengaku full-time day trader sejak 2018 dan admin/lead Exocharts, trading crypto dan futures (BTC, NQ, ES) secara intraday. Mempublikasikan kurikulum order-flow gratis yang luar biasa sistematis. Metodenya bertumpu pada Auction Market Theory mapan (Steidlmayer; Dalton), market microstructure (Harris; OHara), order-flow toxicity (Easley, Lopez de Prado & OHara), dan clustering stop (Osler).',
    },
    tagline: {
      en: 'Cross-walk the trendy vocabulary back to its roots, then back-test everything: a fair value gap IS a single print, liquidity IS resting stop clusters. Know WHERE and WHEN a reversal is most likely, then wait for the order flow to confirm.',
      id: 'Telusuri kosakata kekinian balik ke akarnya, lalu back-test semuanya: fair value gap ITU single print, liquidity ITU klaster stop yang nganggur. Tahu DI MANA dan KAPAN reversal paling mungkin, baru tunggu order flow konfirmasi.',
    },
    bio: {
      en: `@Luckshuryy teaches a single, fixed daily routine that fuses five bodies of knowledge into one decision process: (1) Auction Market Theory / Market Profile, (2) order flow / footprint & CVD, (3) derivatives positioning (open interest & liquidations), (4) Smart-Money Concepts / ICT structures, and (5) statistics plus a repeatable routine. His distinctive posture is **statistics and transparency**: he back-tests "high-hit-rate" levels and publishes the numbers, and he is honest that the trendy terms overlap — a *fair value gap* is the same inefficiency as a Market-Profile *single print*, and *liquidity* is just resting stop clusters. He trades mainly **reversals** (swing-failure patterns, structure changes, failed auctions), so his whole framework exists to answer one question: where and when is a reversal most likely?

⟦Note: compiled from his free public curriculum and cross-checked against the academic neighbours (Dalton, Steidlmayer, Harris, OHara, Easley-Lopez de Prado-OHara, Osler). Educational, not financial advice; not affiliated with or endorsed by @Luckshuryy. Discretionary intraday trading is genuinely hard and most attempters lose money.⟧`,
      id: `@Luckshuryy ngajarin satu rutinitas harian tetap yang ngegabung lima badan pengetahuan jadi satu proses keputusan: (1) Auction Market Theory / Market Profile, (2) order flow / footprint & CVD, (3) positioning derivatif (open interest & likuidasi), (4) struktur Smart-Money Concepts / ICT, dan (5) statistik plus rutinitas yang bisa diulang. Sikap khasnya itu **statistik dan transparansi**: dia back-test level "high-hit-rate" dan publikasiin angkanya, dan dia jujur bahwa istilah kekinian itu tumpang-tindih — *fair value gap* itu inefisiensi yang sama dengan *single print* Market Profile, dan *liquidity* itu cuma klaster stop yang nganggur. Dia trading terutama **reversal** (swing-failure pattern, perubahan struktur, lelang gagal), jadi seluruh framework-nya ada buat ngejawab satu pertanyaan: di mana dan kapan reversal paling mungkin?

⟦Catatan: dikompilasi dari kurikulum publik gratisnya dan dicek-silang dengan tetangga akademiknya (Dalton, Steidlmayer, Harris, OHara, Easley-Lopez de Prado-OHara, Osler). Edukatif, bukan nasihat keuangan; tidak berafiliasi dengan atau diendors oleh @Luckshuryy. Trading intraday diskresioner itu betul-betul sulit dan mayoritas yang nyoba rugi.⟧`,
    },
    focus: {
      en: `The signature edge is a **statistics-and-transparency posture applied to reversals**, anchored on WHERE and WHEN. WHERE: value, POC, naked POC (an untapped most-traded price that acts as a magnet), single prints / fair value gaps (inefficiencies that tend to fill), and especially **internal resting liquidity** — the higher-lows / lower-highs sitting *inside* the major pivots that "most people overlook." WHEN: his custom UTC sessions (Asia 00-06, London 06-12, NY 12-20, Close 20-00) and his back-tested session statistics — London makes the daily high or low only ~12% of days, New York takes out a London extreme ~88-92% of days, and NY makes BOTH the daily H and L ~38% of days. So he pre-marks points of interest in London, generally WAITS for New York, and watches ~12:10-12:30 UTC (especially ~12:20) for a sweep. He confirms with footprint, delta and CVD (records of what actually transacted) to read absorption and exhaustion, and with the OI matrix to spot trapped/offside positions.`,
      id: `Edge khasnya itu **sikap statistik-dan-transparansi yang diterapkan ke reversal**, berjangkar pada DI MANA dan KAPAN. DI MANA: value, POC, naked POC (harga paling-banyak-ditradekan yang belum ditap, bertindak sebagai magnet), single print / fair value gap (inefisiensi yang cenderung keisi), dan terutama **internal resting liquidity** — higher-low / lower-high yang duduk *di dalam* pivot mayor yang "kebanyakan orang lewatkan." KAPAN: custom session UTC-nya (Asia 00-06, London 06-12, NY 12-20, Close 20-00) dan statistik session hasil back-test-nya — London bikin daily high atau low cuma ~12% hari, New York nyapu ekstrem London ~88-92% hari, dan NY bikin KEDUA daily H dan L ~38% hari. Jadi dia pre-mark point of interest di London, umumnya NUNGGU New York, dan ngawasin ~12:10-12:30 UTC (terutama ~12:20) buat sweep. Dia konfirmasi pakai footprint, delta dan CVD (rekaman apa yang benar-benar tertransaksi) buat baca absorpsi dan exhaustion, dan pakai OI matrix buat ngedeteksi posisi trapped/offside.`,
    },
    intellectualLineage: {
      en: `The WHERE layer is **Auction Market Theory / Market Profile** from its inventor Steidlmayer (introduced at the CBOT in 1984) and codified by Dalton in "Mind Over Markets" — one-time framing, value area, POC, single prints, initial balance and range extension across sessions. The order-flow layer is **market microstructure**: Harris ("Trading and Exchanges") for market vs limit orders, takers-move-price / makers-provide-liquidity and stop mechanics, OHara for price formation, and Easley, Lopez de Prado & OHara (VPIN, 2012) for order-flow toxicity that grounds delta and CVD. The session-extreme sweep and "liquidity pools" rest on Osler (2003) showing stop and limit orders cluster at obvious levels and trigger predictably. The Smart-Money / ICT vocabulary (Huddleston) is a popular *practitioner* framework that he honestly cross-walks back to these roots — and VWAP-as-fair-value goes back to Berkowitz, Logue & Noser (1988). His own contribution is the synthesis, the session percentages, the internal-liquidity emphasis, and the fixed reversal routine.`,
      id: `Lapisan DI MANA itu **Auction Market Theory / Market Profile** dari penemunya Steidlmayer (diperkenalkan di CBOT tahun 1984) dan dikodifikasi Dalton di "Mind Over Markets" — one-time framing, value area, POC, single print, initial balance dan range extension lintas session. Lapisan order-flow itu **market microstructure**: Harris ("Trading and Exchanges") buat market vs limit order, taker-gerakkan-harga / maker-sediakan-likuiditas dan mekanik stop, OHara buat pembentukan harga, dan Easley, Lopez de Prado & OHara (VPIN, 2012) buat order-flow toxicity yang ngedasarin delta dan CVD. Sweep ekstrem session dan "liquidity pool" bertumpu pada Osler (2003) yang nunjukin order stop dan limit ngumpul di level jelas dan trigger secara terprediksi. Kosakata Smart-Money / ICT (Huddleston) itu framework *praktisi* populer yang dia jujur telusuri balik ke akar-akar ini — dan VWAP-sebagai-fair-value balik ke Berkowitz, Logue & Noser (1988). Kontribusinya sendiri itu sintesis-nya, persentase session, penekanan internal-liquidity, dan rutinitas reversal tetap.`,
    },
    keyCollaborators: {
      en: 'His tooling is Exocharts (the footprint / volume-profile platform he leads), with the footprint-and-delta reading lineage popularised by Jigsaw Trading / Market Delta (Peter Davies). The intellectual neighbours are Dalton/Steidlmayer (Market Profile), Harris/OHara (microstructure), Easley-Lopez de Prado-OHara (VPIN/CVD), Osler (stop clustering), Williams (the Fractal indicator he uses to mark swings), and Huddleston (the ICT/SMC vocabulary he cross-walks).',
      id: 'Tooling-nya Exocharts (platform footprint / volume-profile yang dia lead), dengan silsilah pembacaan footprint-dan-delta yang dipopulerkan Jigsaw Trading / Market Delta (Peter Davies). Tetangga intelektualnya Dalton/Steidlmayer (Market Profile), Harris/OHara (microstructure), Easley-Lopez de Prado-OHara (VPIN/CVD), Osler (clustering stop), Williams (indikator Fractal yang dia pakai buat nandain swing), dan Huddleston (kosakata ICT/SMC yang dia telusuri-silang).',
    },
    legacy: {
      en: `Most retail order-flow content is a grab-bag of trendy terms; Luckshurys contribution is to make it *systematic and falsifiable*. He cross-walks the vocabulary back to its real roots (FVG = single print, liquidity = stop clusters), insists on backtesting every claim ("dont trust, verify"), and publishes the session numbers so they can be checked. The result is a teachable, fixed routine for reversal trading — pre-mark in London, wait for New York, require aligned confluences, then take an order-flow trigger — with an honest emphasis on the parts others overlook (internal resting liquidity) and on the limits of the method (the percentages are his own backtests on his own instruments and sessions, to be re-verified).`,
      id: `Kebanyakan konten order-flow ritel itu campur-aduk istilah kekinian; kontribusi Luckshury itu bikin dia *sistematis dan bisa-difalsifikasi*. Dia telusuri-silang kosakatanya balik ke akar aslinya (FVG = single print, liquidity = klaster stop), maksa back-test tiap klaim ("jangan percaya, verifikasi"), dan publikasiin angka session biar bisa dicek. Hasilnya rutinitas tetap yang bisa-diajarkan buat trading reversal — pre-mark di London, tunggu New York, butuh confluence searah, baru ambil trigger order-flow — dengan penekanan jujur pada bagian yang orang lain lewatkan (internal resting liquidity) dan pada batas metodenya (persentasenya itu back-test sendiri di instrumen dan session-nya sendiri, harus diverifikasi-ulang).`,
    },
    keyWorks: [
      { year: 2024, title: '@Luckshuryy free intraday order-flow curriculum / threads — the five-layer synthesis, custom UTC sessions, and the fixed daily-bias reversal routine', venue: 'X (Twitter) public threads & guides (this item)' },
      { year: 1990, title: 'Mind Over Markets: Power Trading with Market Generated Information (Dalton, Jones & Dalton) — one-time framing, value area, POC, single prints, initial balance / range extension', venue: 'Probus / Wiley (book)' },
      { year: 2003, title: 'Trading and Exchanges: Market Microstructure for Practitioners (Harris) — market vs limit orders, takers move price / makers provide liquidity, stop & absorption mechanics', venue: 'Oxford University Press (book)' },
      { year: 2012, title: 'Flow Toxicity and Liquidity in a High-Frequency World (VPIN) (Easley, Lopez de Prado & OHara) — order-flow imbalance / toxicity grounds delta & CVD', venue: 'Review of Financial Studies 25(5):1457-1493' },
      { year: 2003, title: 'Currency Orders and Exchange-Rate Dynamics (Osler) — stop/limit orders cluster at obvious levels and trigger predictably (liquidity pools, stop-runs, session-extreme sweeps)', venue: 'Journal of Finance 58(5):1791-1819' },
    ],
  },

  sections: [
    {
      id: 'motivation',
      heading: { en: 'Why this matters', id: 'Kenapa ini penting' },
      body: {
        en: `Most intraday traders collect tools — Market Profile here, footprint there, a dash of ICT, some open-interest screenshots — and never fuse them into a decision. @Luckshuryy's curriculum is unusual because it does exactly that: it blends **five layers** into one fixed daily routine and, crucially, *back-tests* the parts that can be back-tested and publishes the numbers. His stated ethos is **"dont trust, verify"** — backtest every claim before you trade it.

The five layers are (1) **Auction Market Theory / Market Profile**, (2) **order flow / footprint & CVD**, (3) **derivatives positioning** (open interest & liquidations), (4) **Smart-Money Concepts / ICT** structures, and (5) **statistics + a repeatable routine** [His]. What makes it teachable is his honesty about overlap: a *fair value gap* is the same inefficiency as a Market-Profile *single print*, and *liquidity* is just resting stop clusters [Practitioner]. That cross-walk takes trendy vocabulary back to its real roots so you can reason about one underlying market, not five.

He trades mainly **reversals** — swing-failure patterns, structure changes, failed auctions — so the entire framework exists to answer two questions: **WHERE** is a reversal most likely (value, POC, naked POC, single prints, and the internal resting liquidity others overlook) and **WHEN** (his custom UTC sessions and back-tested session statistics, e.g. that New York usually sweeps a London extreme around midday UTC) [His]. "Timing can matter more than your strategy," he says — so the *when* is not an afterthought; it is half the edge.

⟦Disclaimer: education, not financial advice; not affiliated with or endorsed by @Luckshuryy. This is **discretionary intraday trading**, which is genuinely hard and where the majority of attempters lose money. His session percentages and "high-hit-rate" levels are his own self-reported backtests on his own instruments and custom UTC windows — re-verify them on your own market and timeframe before trusting them.⟧`,
        id: `Kebanyakan trader intraday ngumpulin tools — Market Profile di sini, footprint di sana, sedikit ICT, beberapa screenshot open interest — dan gak pernah ngegabungnya jadi satu keputusan. Kurikulum @Luckshuryy itu gak biasa karena dia ngelakuin persis itu: dia ngeblend **lima lapisan** jadi satu rutinitas harian tetap dan, yang krusial, *back-test* bagian yang bisa di-back-test dan publikasiin angkanya. Etos yang dia nyatakan itu **"jangan percaya, verifikasi"** — back-test tiap klaim sebelum kamu tradekan.

Lima lapisannya itu (1) **Auction Market Theory / Market Profile**, (2) **order flow / footprint & CVD**, (3) **positioning derivatif** (open interest & likuidasi), (4) struktur **Smart-Money Concepts / ICT**, dan (5) **statistik + rutinitas yang bisa diulang** [His]. Yang bikin dia bisa-diajarkan itu kejujurannya soal tumpang-tindih: *fair value gap* itu inefisiensi yang sama dengan *single print* Market Profile, dan *liquidity* itu cuma klaster stop yang nganggur [Practitioner]. Telusur-silang itu ngebawa kosakata kekinian balik ke akar aslinya biar kamu bisa nalar soal satu pasar yang mendasari, bukan lima.

Dia trading terutama **reversal** — swing-failure pattern, perubahan struktur, lelang gagal — jadi seluruh framework-nya ada buat ngejawab dua pertanyaan: **DI MANA** reversal paling mungkin (value, POC, naked POC, single print, dan internal resting liquidity yang orang lain lewatkan) dan **KAPAN** (custom session UTC-nya dan statistik session hasil back-test, misalnya New York biasanya nyapu ekstrem London sekitar tengah hari UTC) [His]. "Timing bisa lebih penting dari strategimu," katanya — jadi *kapan*-nya bukan tambahan; dia setengah dari edge-nya.

⟦Disclaimer: edukasi, bukan nasihat keuangan; tidak berafiliasi dengan atau diendors oleh @Luckshuryy. Ini **trading intraday diskresioner**, yang betul-betul sulit dan di mana mayoritas yang nyoba rugi. Persentase session dan level "high-hit-rate"-nya itu back-test yang dia laporin sendiri di instrumen dan window UTC custom-nya sendiri — verifikasi-ulang di pasar dan timeframe-mu sendiri sebelum percaya.⟧`,
      },
    },
    {
      id: 'intuition',
      heading: { en: 'The market as an auction, read through real transactions', id: 'Pasar sebagai lelang, dibaca lewat transaksi nyata' },
      body: {
        en: `Start from the auction. Price is the market's continuous search for a price at which trade happens — it spends most of its time near the **POC** (the most-traded price) and inside the **value area** (roughly the central 70% of traded volume), and only briefly races through prices it rejects, leaving **single prints / fair value gaps** behind [Established]. A **naked POC** — a most-traded price that has not yet been revisited — acts like a magnet, because unfinished auctions tend to be revisited. **One-time framing** is the simplest trend read: each new candle makes a strictly higher low than the prior candle (uptrend) or a strictly lower high (downtrend); an exactly-equal extreme is a tie that does not extend the run. On the daily, this is Luckshury's single strongest, *standalone* bias — "no need to fight a strong trend... I learned that the hard way" [His].

Now read the *who* with order flow. The book of resting limit orders can be pulled or faked (spoofed), but a **footprint** chart records only **executed market orders** per price cluster — what actually transacted — so "they dont lie" (the honest qualifier: harder to fake, not impossible) [Practitioner]. **Delta** is market buys minus market sells; he prefers **per-price** delta over a single per-candle figure so he can see at exactly which price and time aggression arrived. **CVD** (cumulative delta) compared between two pivots reveals **absorption**: when aggressive market orders stack at a level but price wont move, resting limits are soaking them up — a CVD-vs-price divergence flags a weak, likely-reversing move [Established, via VPIN].

Finally, read the *fuel*. The **OI matrix** maps price-direction against open-interest-direction: price up + OI up = new longs; price up + OI down = shorts squeezed; price down + OI up = new shorts; price down + OI down = longs squeezed [Practitioner]. His favourite read: new positions piling into a minor bounce *during a freefall* instantly regret it and are forced to close, adding fuel — the basis of "fade the breakout." And a **liquidation cascade** (market makers pull limits while forced liquidations hit thin books) over-extends price and leaves the very wick he later trades back toward.`,
        id: `Mulai dari lelang. Harga itu pencarian pasar yang terus-menerus akan harga di mana trade terjadi — dia ngehabisin sebagian besar waktunya dekat **POC** (harga paling-banyak-ditradekan) dan di dalam **value area** (kira-kira 70% tengah dari volume tertradekan), dan cuma sebentar ngebut lewat harga yang dia tolak, ninggalin **single print / fair value gap** [Established]. **Naked POC** — harga paling-banyak-ditradekan yang belum dikunjungi-ulang — bertindak kayak magnet, karena lelang yang belum selesai cenderung dikunjungi-ulang. **One-time framing** itu pembacaan trend paling sederhana: tiap candle baru bikin low yang lebih tinggi secara ketat dari candle sebelumnya (uptrend) atau high yang lebih rendah secara ketat (downtrend); ekstrem yang persis sama itu seri yang gak ngelanjutin run. Di daily, ini bias *standalone* paling kuat Luckshury — "gak perlu lawan trend kuat... aku belajar itu dengan cara yang berat" [His].

Sekarang baca *siapa*-nya pakai order flow. Buku limit order yang nganggur bisa ditarik atau dipalsukan (di-spoof), tapi chart **footprint** cuma ngerekam **market order yang tereksekusi** per klaster harga — apa yang benar-benar tertransaksi — jadi "mereka gak bohong" (kualifikasi jujur: lebih sulit dipalsukan, bukan mustahil) [Practitioner]. **Delta** itu market buy dikurangi market sell; dia lebih suka delta **per-harga** daripada satu angka per-candle biar bisa liat persis di harga dan waktu mana agresi datang. **CVD** (delta kumulatif) dibandingin antara dua pivot ngungkap **absorpsi**: pas market order agresif numpuk di satu level tapi harga gak gerak, limit yang nganggur lagi nyerapnya — divergensi CVD-vs-harga nge-flag gerakan lemah yang kemungkinan reversal [Established, lewat VPIN].

Akhirnya, baca *bahan bakar*-nya. **OI matrix** ngemap arah-harga lawan arah-open-interest: harga naik + OI naik = long baru; harga naik + OI turun = short di-squeeze; harga turun + OI naik = short baru; harga turun + OI turun = long di-squeeze [Practitioner]. Bacaan favoritnya: posisi baru numpuk ke bounce minor *pas freefall* langsung nyesel dan dipaksa nutup, nambah bahan bakar — basis dari "fade the breakout." Dan **liquidation cascade** (market maker narik limit sambil likuidasi paksa hantam buku tipis) ngebikin harga over-extend dan ninggalin wick yang nanti dia tradekan balik ke arahnya.`,
      },
    },
    {
      id: 'formalization',
      heading: { en: 'The auction, formalized: value, POC, value area and single prints', id: 'Lelang, diformalkan: value, POC, value area, dan single print' },
      visualization: {
        id: 'luckshury-orderflow-viz',
        component: 'VolumeProfileSim',
        title: {
          en: 'Volume profile: POC, value area, HVN acceptance and LVN pockets',
          id: 'Volume profile: POC, value area, penerimaan HVN, dan kantong LVN',
        },
        description: {
          en: "Simulates an intraday session and renders its volume profile — volume (or time) traded at each price. The most-traded price is the POC (gold); the central ~70% of volume is the value area; chunky High-Volume Nodes (HVN, green) are prices the market ACCEPTED, while thin Low-Volume Nodes (LVN, red pockets) are prices it REJECTED — Luckshury's single prints / fair value gaps, the inefficiencies that tend to get filled. Slide trend↔balanced to see a one-time-framing trend day (a thin, sloping profile, lots of single prints) versus a balanced range (a fat bell around the POC). This is the WHERE half of his routine: it shows the magnet levels (naked POC, value edges) and the LVN pockets a reversal can race back through.",
          id: "Mensimulasikan satu session intraday dan ngerender volume profile-nya — volume (atau waktu) tertradekan di tiap harga. Harga paling-banyak-ditradekan itu POC (emas); ~70% tengah dari volume itu value area; High-Volume Node tebal (HVN, hijau) itu harga yang pasar TERIMA, sementara Low-Volume Node tipis (LVN, kantong merah) itu harga yang dia TOLAK — single print / fair value gap Luckshury, inefisiensi yang cenderung keisi. Geser trend↔balanced buat liat hari trend one-time-framing (profil tipis menanjak, banyak single print) versus range balanced (lonceng gemuk di sekitar POC). Ini setengah DI MANA dari rutinitasnya: dia nunjukin level magnet (naked POC, tepi value) dan kantong LVN yang reversal bisa balik ngebut lewatnya.",
        },
        defaultParams: { trend: 0.25, vol: 0.6, nBars: 300, seed: 7 },
        height: 440,
      },
      body: {
        en: `**The auction objects.** Build the session's **volume profile**: the volume (Luckshury, following Market Profile, also reads *time*) traded at each price level. From it:
- **POC (Point of Control)** = the price $p^\\*$ with the most volume, $p^\\* = \\arg\\max_p V(p)$. A **naked POC** is a POC not yet revisited; it acts as a magnet [Established].
- **Value area (VA)** = the contiguous band around the POC containing ~70% of total volume: grow outward from the POC, each step adding the heavier of the two row-PAIRS (the sum of the next two prices above vs the next two below) — Dalton's canonical two-row rule — until $\\sum_{p\\in VA} V(p) \\ge 0.70\\sum_p V(p)$. The VA edges (VAH/VAL) are acceptance boundaries [Established].
- **HVN / LVN.** A **High-Volume Node** is a local peak in $V(p)$ — price the market *accepted* (it tends to pause/consolidate there). A **Low-Volume Node** is a thin trough — price the market *rejected* and raced through, i.e. a **single print / fair value gap**; these tend to get filled [Established]. "The naming is meaningless," he says: single print, gap and FVG are the same inefficiency [His/Practitioner cross-walk].

**One-time framing.** With $H_t, L_t$ the high/low of candle $t$: an **uptrend** holds $L_t > L_{t-1}$ for every $t$ (each low is strictly higher than the prior low); a **downtrend** holds $H_t < H_{t-1}$ (each high strictly lower). The first violation ends the run — an exactly-equal low/high is a tie, not a continuation, so it does not extend it. On the daily this is his standalone top bias.

**VWAP as fair value.** $\\mathrm{VWAP} = \\dfrac{\\sum_i p_i\\,v_i}{\\sum_i v_i}$ over the session's trades $i$; above VWAP, buyers are in control; below it, sellers [Established: Berkowitz-Logue-Noser 1988].

**Order-flow measures.** Per-price **delta** $\\delta(p) = B(p) - S(p)$ (market buys minus market sells at price $p$); **CVD** is its running sum over time, $\\mathrm{CVD}(t) = \\sum_{\\tau \\le t}\\delta_\\tau$. **Absorption** is the condition where aggressive volume is large but the price barely moves: high $|\\delta|$ with $\\Delta p \\approx 0$ — resting limits are soaking up the aggression. A CVD-vs-price *divergence* between two pivots (price makes a new extreme, CVD does not) flags a weak move [Established, via VPIN order-flow toxicity].

The simulator renders the profile: POC in gold, the value area highlighted, HVN acceptance in green, LVN pockets (single prints) in red — exactly the WHERE map he marks before deciding.`,
        id: `**Objek lelang.** Bangun **volume profile** session: volume (Luckshury, ngikut Market Profile, juga baca *waktu*) tertradekan di tiap level harga. Dari situ:
- **POC (Point of Control)** = harga $p^\\*$ dengan volume terbanyak, $p^\\* = \\arg\\max_p V(p)$. **Naked POC** itu POC yang belum dikunjungi-ulang; dia bertindak sebagai magnet [Established].
- **Value area (VA)** = pita kontigu di sekitar POC yang ngandung ~70% total volume: tumbuh ke luar dari POC, tiap langkah nambah PASANGAN-dua-baris yang lebih berat (jumlah dua harga di atas vs dua di bawah) — aturan kanonik dua-baris Dalton — sampai $\\sum_{p\\in VA} V(p) \\ge 0.70\\sum_p V(p)$. Tepi VA (VAH/VAL) itu batas penerimaan [Established].
- **HVN / LVN.** **High-Volume Node** itu puncak lokal di $V(p)$ — harga yang pasar *terima* (cenderung pause/konsolidasi di situ). **Low-Volume Node** itu lembah tipis — harga yang pasar *tolak* dan ngebut lewatinya, yaitu **single print / fair value gap**; ini cenderung keisi [Established]. "Penamaannya gak ada artinya," katanya: single print, gap, dan FVG itu inefisiensi yang sama [telusur-silang His/Practitioner].

**One-time framing.** Dengan $H_t, L_t$ high/low candle $t$: **uptrend** nahan $L_t > L_{t-1}$ buat tiap $t$ (tiap low lebih tinggi secara ketat dari low sebelumnya); **downtrend** nahan $H_t < H_{t-1}$ (tiap high lebih rendah secara ketat). Violation pertama ngakhirin run-nya — low/high yang persis sama itu seri, bukan kelanjutan, jadi gak ngelanjutin run. Di daily ini bias atas standalone-nya.

**VWAP sebagai fair value.** $\\mathrm{VWAP} = \\dfrac{\\sum_i p_i\\,v_i}{\\sum_i v_i}$ atas trade $i$ session; di atas VWAP, buyer in control; di bawahnya, seller [Established: Berkowitz-Logue-Noser 1988].

**Ukuran order-flow.** **Delta** per-harga $\\delta(p) = B(p) - S(p)$ (market buy dikurangi market sell di harga $p$); **CVD** itu jumlah berjalannya seiring waktu, $\\mathrm{CVD}(t) = \\sum_{\\tau \\le t}\\delta_\\tau$. **Absorpsi** itu kondisi di mana volume agresif besar tapi harga nyaris gak gerak: $|\\delta|$ tinggi dengan $\\Delta p \\approx 0$ — limit nganggur lagi nyerap agresi-nya. *Divergensi* CVD-vs-harga antara dua pivot (harga bikin ekstrem baru, CVD enggak) nge-flag gerakan lemah [Established, lewat order-flow toxicity VPIN].

Simulator ngerender profil-nya: POC emas, value area di-highlight, penerimaan HVN hijau, kantong LVN (single print) merah — persis peta DI MANA yang dia tandain sebelum mutusin.`,
      },
    },
    {
      id: 'worked-example',
      heading: { en: 'Worked example: the fixed daily-bias routine on a reversal', id: 'Contoh: rutinitas daily-bias tetap pada satu reversal' },
      body: {
        en: `Walk through his actual routine on an illustrative day [His framing throughout].

**Step 1 — daily one-time framing?** Check the daily candles. If price is cleanly one-time-framing (e.g. an uptrend, every low strictly higher than the prior low), *that is the bias and it stands alone* — "no need to fight a strong trend." Suppose today it is **not** (the prior daily low was violated), so there is no standalone trend; we proceed.

**Step 2 — which session made the H/L?** Using his custom UTC windows (Asia 00-06, London 06-12, NY 12-20, Close 20-00), note where the day's extreme formed. His backtests: **London makes the daily high or low only ~12% of days** (the lowest of all sessions). So if London *did* print today's high, that extreme is unusually likely to be taken out later — mark it as a target. (Two of his articles report the London-break rate as 87.6% and 92%, so treat **~88-92%** as a range, not a point.)

**Step 3 — mark poor highs/lows + inefficiencies.** Mark a *poor* (weak, single-tick) high in London, plus any **single prints / FVGs** and the **naked POC** above. Then mark **internal resting liquidity** — the higher-lows / lower-highs sitting *inside* the major pivots, which he calls his overlooked edge.

**Step 4 — track structure from the OPEN.** Build a 15m/30m profile from the session open, stripping prior-day noise, and read one-time framing intraday.

**Step 5 — add back-tested levels + wait for New York.** New York takes out a London extreme **~88-92% of days**, and NY makes *both* the daily H and L **~38% of days**, so he generally **waits for NY** and watches **~12:10-12:30 UTC (especially ~12:20)** for a sweep of the London POI — "timing can matter more than your strategy."

**Step 6 — require ≥2 confluences, then take an order-flow trigger.** At ~12:20 UTC price sweeps the poor London high into the naked POC (two aligned confluences). Now demand a trigger:
- **Absorption fade.** The footprint shows heavy market *buys* into the high but price wont push — high $|\\delta|$, $\\Delta p \\approx 0$ — and CVD diverges (new price high, lower CVD high). Limits are absorbing; this is a swing-failure / reversal tell.
- **OI confirm (fade the breakout).** OI ticks *up* on the push (price up + OI up = new longs). Those new longs that bought the sweep are now offside — forced to cover, they add downside fuel.

**Entry / risk.** Enter the fade as price rejects back below the swept high; stop **just above where the new shorts/longs began entering** (above the swept high). If instead this were a **liquidation flush**, his rule is to **trade back toward the wick for at least a 50% fill, with the stop just above where the new shorts began entering** [His]. Suggested TPO tick sizes for context: BTC 200 / NQ 20 / ES 4 [His].

⟦Disclaimer: illustrative, not a recommendation. Every percentage and level here is his own backtest on his own instruments and UTC windows; re-verify on yours. Timing windows and stop placements are conditional heuristics, not guaranteed edges.⟧`,
        id: `Jalani rutinitas aslinya pada satu hari ilustratif [framing His sepanjang ini].

**Langkah 1 — daily one-time framing?** Cek candle daily. Kalau harga bersih one-time-framing (misalnya uptrend, tiap low lebih tinggi secara ketat dari low sebelumnya), *itu bias-nya dan dia berdiri sendiri* — "gak perlu lawan trend kuat." Misalnya hari ini **enggak** (low daily sebelumnya di-violate), jadi gak ada trend standalone; kita lanjut.

**Langkah 2 — session mana yang bikin H/L?** Pakai window UTC custom-nya (Asia 00-06, London 06-12, NY 12-20, Close 20-00), catat di mana ekstrem hari itu terbentuk. Back-test-nya: **London bikin daily high atau low cuma ~12% hari** (terendah dari semua session). Jadi kalau London *memang* nge-print high hari ini, ekstrem itu luar biasa mungkin diambil nanti — tandain sebagai target. (Dua artikelnya melaporkan rate break London sebagai 87.6% dan 92%, jadi perlakukan **~88-92%** sebagai rentang, bukan titik.)

**Langkah 3 — tandain poor high/low + inefisiensi.** Tandain *poor* high (lemah, single-tick) di London, plus tiap **single print / FVG** dan **naked POC** di atas. Lalu tandain **internal resting liquidity** — higher-low / lower-high yang duduk *di dalam* pivot mayor, yang dia sebut edge yang dilewatkan.

**Langkah 4 — track struktur dari OPEN.** Bangun profil 15m/30m dari open session, buang noise hari-sebelumnya, dan baca one-time framing intraday.

**Langkah 5 — tambah level hasil back-test + tunggu New York.** New York nyapu ekstrem London **~88-92% hari**, dan NY bikin *kedua* daily H dan L **~38% hari**, jadi dia umumnya **nunggu NY** dan ngawasin **~12:10-12:30 UTC (terutama ~12:20)** buat sweep POI London — "timing bisa lebih penting dari strategimu."

**Langkah 6 — butuh ≥2 confluence, baru ambil trigger order-flow.** Di ~12:20 UTC harga nyapu poor high London ke naked POC (dua confluence searah). Sekarang minta trigger:
- **Absorption fade.** Footprint nunjukin market *buy* berat ke high tapi harga gak mau dorong — $|\\delta|$ tinggi, $\\Delta p \\approx 0$ — dan CVD divergen (high harga baru, high CVD lebih rendah). Limit lagi nyerap; ini tell swing-failure / reversal.
- **Konfirmasi OI (fade the breakout).** OI naik di dorongan (harga naik + OI naik = long baru). Long baru yang beli sweep itu sekarang offside — dipaksa cover, mereka nambah bahan bakar turun.

**Entry / risk.** Masuk fade pas harga reject balik di bawah high yang disapu; stop **persis di atas tempat short/long baru mulai masuk** (di atas high yang disapu). Kalau sebaliknya ini **liquidation flush**, aturannya **trade balik ke arah wick buat fill setidaknya 50%, dengan stop persis di atas tempat short baru mulai masuk** [His]. Ukuran tick TPO yang disaranin buat konteks: BTC 200 / NQ 20 / ES 4 [His].

⟦Disclaimer: ilustratif, bukan rekomendasi. Tiap persentase dan level di sini itu back-test sendiri di instrumen dan window UTC-nya sendiri; verifikasi-ulang di punyamu. Window timing dan penempatan stop itu heuristik kondisional, bukan edge terjamin.⟧`,
      },
    },
    {
      id: 'applications',
      heading: { en: 'Applications', id: 'Aplikasi' },
      body: {
        en: `**A WHERE+WHEN map for reversals.** The core application is a pre-trade map: in London, mark the value edges, the naked POC, the single prints / FVGs, and especially the **internal resting liquidity** inside the major pivots; then *wait* for New York and the ~12:10-12:30 UTC sweep window before acting. Because London prints the daily extreme only ~12% of the time but NY sweeps a London extreme ~88-92% of the time, the map tells you which level is most likely to be hit and roughly when — turning a chart into a small set of high-probability reaction zones [His].

**Footprint/CVD as the trigger, not the thesis.** The order-flow layer is for *confirmation at the level*, not for finding setups in a vacuum: at a marked POI, look for absorption (heavy delta, no move) and a CVD divergence to fade, or a liquidation flush to trade back toward the wick. This pairs naturally with the positioning read in [OI & positioning](item:husslin-oi-positioning) — funding/perp-premium and OI tell you who is offside; the footprint tells you when they break.

**The OI matrix for trapped traders.** The 2x2 (price vs OI) is a live trapped-trader detector: new positions opening into a counter-trend bounce are tomorrow's forced sellers/buyers. "Fade the breakout" is exactly this — new longs into a freefall bounce regret it and add fuel when they cover.

**Cross-walking trendy tools.** Because he maps ICT/SMC vocabulary back to roots (FVG = single print, liquidity = stop clusters, order block = the last opposing candle before an illiquid move), a learner can use Smart-Money content without buying its predictive claims — keep it tagged Practitioner and lean on the auction/microstructure mechanism underneath.

**Honest limits.** This is **discretionary intraday trading**, which is hard and where most attempters lose. All the percentages (~12% / ~88-92% / ~38%, and the ~35-37% Monday-pivot figures) are *his* backtests on *his* instruments and *his* custom UTC sessions — re-verify them on your own market and timeframe; sample-dependent edges decay. Smart-Money/ICT structures are a popular practitioner framework, **not peer-reviewed** — do not assert predictive power. Footprints are **harder** to fake than the resting book, not impossible (icebergs and aggressive flow can still mislead). Specific timing windows and stop placements are conditional heuristics, never guarantees. His own ethos — backtest every claim, "dont trust, verify" — is the right framing for all of it.`,
        id: `**Peta DI MANA+KAPAN buat reversal.** Aplikasi intinya itu peta pra-trade: di London, tandain tepi value, naked POC, single print / FVG, dan terutama **internal resting liquidity** di dalam pivot mayor; lalu *tunggu* New York dan window sweep ~12:10-12:30 UTC sebelum bertindak. Karena London nge-print ekstrem daily cuma ~12% waktu tapi NY nyapu ekstrem London ~88-92% waktu, peta itu ngasih tau kamu level mana yang paling mungkin kena dan kira-kira kapan — ngubah chart jadi sekumpulan kecil zona reaksi probabilitas-tinggi [His].

**Footprint/CVD sebagai trigger, bukan tesis.** Lapisan order-flow itu buat *konfirmasi di level*, bukan buat nemu setup di ruang hampa: di POI yang ditandai, cari absorpsi (delta berat, gak gerak) dan divergensi CVD buat fade, atau liquidation flush buat trade balik ke arah wick. Ini berpasangan alami dengan pembacaan positioning di [OI & positioning](item:husslin-oi-positioning) — funding/perp-premium dan OI ngasih tau kamu siapa yang offside; footprint ngasih tau kamu kapan mereka pecah.

**OI matrix buat trader trapped.** 2x2 (harga vs OI) itu detektor trader-trapped live: posisi baru buka ke bounce counter-trend itu seller/buyer paksa besok. "Fade the breakout" itu persis ini — long baru ke bounce freefall nyesel dan nambah bahan bakar pas mereka cover.

**Telusur-silang tools kekinian.** Karena dia ngemap kosakata ICT/SMC balik ke akar (FVG = single print, liquidity = klaster stop, order block = candle berlawanan terakhir sebelum gerakan illiquid), seorang pembelajar bisa pakai konten Smart-Money tanpa beli klaim prediktifnya — tetap tag Practitioner dan sandar ke mekanisme lelang/microstructure di bawahnya.

**Batas jujur.** Ini **trading intraday diskresioner**, yang sulit dan di mana kebanyakan yang nyoba rugi. Semua persentase (~12% / ~88-92% / ~38%, dan angka Monday-pivot ~35-37%) itu back-test *-nya* di instrumen *-nya* dan custom session UTC *-nya* — verifikasi-ulang di pasar dan timeframe-mu sendiri; edge yang sample-dependent decay. Struktur Smart-Money/ICT itu framework praktisi populer, **bukan peer-review** — jangan klaim daya prediktif. Footprint itu **lebih sulit** dipalsukan dari buku nganggur, bukan mustahil (iceberg dan flow agresif masih bisa nyesatin). Window timing dan penempatan stop spesifik itu heuristik kondisional, gak pernah jaminan. Etosnya sendiri — back-test tiap klaim, "jangan percaya, verifikasi" — itu framing yang benar buat semuanya.`,
      },
    },
    {
      id: 'practice',
      heading: { en: 'Practice', id: 'Latihan' },
      body: {
        en: `**1.** Define POC, naked POC, value area and a single print / FVG from a volume profile, and say which two are "magnets" vs "the inefficiency that fills."

<details><summary>Answer</summary>
POC (Point of Control) = the price with the most traded volume, p* = argmax V(p). NAKED POC = a POC not yet revisited — it acts as a MAGNET (unfinished auctions tend to be revisited). VALUE AREA = the contiguous band around the POC holding ~70% of total volume (its edges VAH/VAL are acceptance boundaries). SINGLE PRINT / FAIR VALUE GAP = a thin Low-Volume Node, a stretch of price the market raced through and rejected — THE INEFFICIENCY that tends to get filled. Luckshury's point: single print, gap and FVG are the same thing ("the naming is meaningless").
</details>

**2.** Why does Luckshury read absorption from the footprint (executed market orders) rather than from the resting order book, and what is the honest caveat?

<details><summary>Answer</summary>
The resting limit-order book can be PULLED or FAKED (spoofed) before execution, so it is unreliable. A FOOTPRINT records only EXECUTED market orders per price cluster — what actually transacted — so it is much harder to fake ("they dont lie"). Absorption shows up as heavy market-order aggression at a level (high |delta|) with price NOT moving (Δp ≈ 0): resting limits are soaking up the aggression, a reversal tell, often with a CVD-vs-price divergence. HONEST CAVEAT: footprints are HARDER to fake, not impossible — large players can still mislead via icebergs and aggressive flow. (Grounding: Easley-Lopez de Prado-OHara VPIN order-flow toxicity.)
</details>

**3.** State Luckshury's session statistics and how they drive his routine. Why must they be treated as a range and re-verified?

<details><summary>Answer</summary>
On his custom UTC sessions (Asia 00-06, London 06-12, NY 12-20, Close 20-00): LONDON makes the daily high or low only ~12% of days (lowest); NEW YORK takes out a London extreme ~88-92% of days; NY makes BOTH the daily H and L ~38% of days (highest). Routine consequence: pre-mark POIs in London, generally WAIT for NY, and watch ~12:10-12:30 UTC (esp. ~12:20) for a sweep of a London extreme. Treat ~88-92% as a RANGE because two of his articles report 87.6% and 92%. And re-verify everything because these are HIS self-reported backtests on HIS instruments and HIS custom windows — sample-dependent edges decay; "dont trust, verify."
</details>

**4.** Use the OI matrix to explain "fade the breakout," and give his liquidation-flush rule.

<details><summary>Answer</summary>
OI matrix (price-direction × OI-direction): price up + OI up = NEW LONGS; price up + OI down = shorts squeezed; price down + OI up = new shorts; price down + OI down = longs squeezed. "FADE THE BREAKOUT": when new positions pile into a minor counter-trend bounce during a freefall (price up + OI up = new longs), those longs are instantly offside and forced to close, adding fuel back in the trend's direction — so you fade the breakout rather than chase it. LIQUIDATION-FLUSH RULE: in a cascade (MMs pull limits + forced liquidations hit thin books, over-extending price and leaving a wick), trade BACK TOWARD THE WICK for at least a 50% fill, with the stop just ABOVE where the new shorts began entering.
</details>`,
        id: `**1.** Definisikan POC, naked POC, value area, dan single print / FVG dari volume profile, dan sebutkan dua mana yang "magnet" vs "inefisiensi yang keisi."

<details><summary>Jawaban</summary>
POC (Point of Control) = harga dengan volume tertradekan terbanyak, p* = argmax V(p). NAKED POC = POC yang belum dikunjungi-ulang — bertindak sebagai MAGNET (lelang belum selesai cenderung dikunjungi-ulang). VALUE AREA = pita kontigu di sekitar POC yang nahan ~70% total volume (tepinya VAH/VAL itu batas penerimaan). SINGLE PRINT / FAIR VALUE GAP = Low-Volume Node tipis, rentang harga yang pasar ngebut lewatinya dan tolak — INEFISIENSI yang cenderung keisi. Poin Luckshury: single print, gap, dan FVG itu sama ("penamaannya gak ada artinya").
</details>

**2.** Kenapa Luckshury baca absorpsi dari footprint (market order tereksekusi) bukan dari buku order nganggur, dan apa caveat jujurnya?

<details><summary>Jawaban</summary>
Buku limit-order nganggur bisa DITARIK atau DIPALSUKAN (di-spoof) sebelum eksekusi, jadi gak bisa diandalkan. FOOTPRINT cuma ngerekam market order TEREKSEKUSI per klaster harga — apa yang benar-benar tertransaksi — jadi jauh lebih sulit dipalsukan ("mereka gak bohong"). Absorpsi muncul sebagai agresi market-order berat di satu level (|delta| tinggi) dengan harga GAK gerak (Δp ≈ 0): limit nganggur lagi nyerap agresi-nya, tell reversal, sering dengan divergensi CVD-vs-harga. CAVEAT JUJUR: footprint LEBIH sulit dipalsukan, bukan mustahil — pemain besar masih bisa nyesatin lewat iceberg dan flow agresif. (Landasan: order-flow toxicity VPIN Easley-Lopez de Prado-OHara.)
</details>

**3.** Sebutkan statistik session Luckshury dan gimana mereka ngedorong rutinitasnya. Kenapa mereka harus diperlakukan sebagai rentang dan diverifikasi-ulang?

<details><summary>Jawaban</summary>
Di custom session UTC-nya (Asia 00-06, London 06-12, NY 12-20, Close 20-00): LONDON bikin daily high atau low cuma ~12% hari (terendah); NEW YORK nyapu ekstrem London ~88-92% hari; NY bikin KEDUA daily H dan L ~38% hari (tertinggi). Konsekuensi rutinitas: pre-mark POI di London, umumnya TUNGGU NY, dan awasin ~12:10-12:30 UTC (terutama ~12:20) buat sweep ekstrem London. Perlakukan ~88-92% sebagai RENTANG karena dua artikelnya melaporkan 87.6% dan 92%. Dan verifikasi-ulang semuanya karena ini back-test yang DIA laporkan sendiri di instrumen-NYA dan window custom-NYA — edge sample-dependent decay; "jangan percaya, verifikasi."
</details>

**4.** Pakai OI matrix buat jelasin "fade the breakout," dan kasih aturan liquidation-flush-nya.

<details><summary>Jawaban</summary>
OI matrix (arah-harga × arah-OI): harga naik + OI naik = LONG BARU; harga naik + OI turun = short di-squeeze; harga turun + OI naik = short baru; harga turun + OI turun = long di-squeeze. "FADE THE BREAKOUT": pas posisi baru numpuk ke bounce counter-trend minor pas freefall (harga naik + OI naik = long baru), long itu langsung offside dan dipaksa nutup, nambah bahan bakar balik ke arah trend — jadi kamu fade breakout-nya bukan ngejar. ATURAN LIQUIDATION-FLUSH: di cascade (MM narik limit + likuidasi paksa hantam buku tipis, ngebikin harga over-extend dan ninggalin wick), trade BALIK KE ARAH WICK buat fill setidaknya 50%, dengan stop persis DI ATAS tempat short baru mulai masuk.
</details>`,
      },
    },
    {
      id: 'connections',
      heading: { en: 'Connections', id: 'Koneksi' },
      body: {
        en: `- **The positioning layer beneath the OI matrix**: [OI & positioning](item:husslin-oi-positioning) — Luckshury's OI 2x2 and trapped/offside read are the same machinery; this module is the prereq's intraday, footprint-confirmed cousin.
- **The reversal-engine sibling**: [@jimtalbot's method](item:jimtalbot-method) — both name the regime first (trend vs chop / one-time framing), then run a matching engine with discretionary order-flow confluence; "mechanical skeleton, discretionary muscle."
- **The auction/volume-profile deep dive**: [Insilico quant curriculum](item:insilico-quant-curriculum) — POC magnet, value area ~70%, HVN acceptance / LVN pockets, rebuilding profiles, and non-time bars (López de Prado) formalise the WHERE layer he reads.
- **The order-flow-toxicity grounding**: [VPIN — Easley, López de Prado & O'Hara](item:easley-lopez-prado-vpin) — the academic basis that delta/CVD imbalance is a measurable, informative quantity behind his absorption reads.`,
        id: `- **Lapisan positioning di bawah OI matrix**: [OI & positioning](item:husslin-oi-positioning) — OI 2x2 Luckshury dan pembacaan trapped/offside itu mesin yang sama; module ini sepupu intraday, terkonfirmasi-footprint dari prereq-nya.
- **Saudara mesin-reversal**: [metode @jimtalbot](item:jimtalbot-method) — keduanya nyebut regime dulu (trend vs chop / one-time framing), lalu jalanin engine yang cocok dengan confluence order-flow diskresioner; "kerangka mekanis, otot diskresioner."
- **Deep dive lelang/volume-profile**: [kurikulum kuant Insilico](item:insilico-quant-curriculum) — magnet POC, value area ~70%, penerimaan HVN / kantong LVN, rebuild profil, dan bar non-waktu (López de Prado) ngeformalin lapisan DI MANA yang dia baca.
- **Landasan order-flow-toxicity**: [VPIN — Easley, López de Prado & O'Hara](item:easley-lopez-prado-vpin) — basis akademik bahwa imbalance delta/CVD itu kuantitas yang bisa-diukur dan informatif di balik pembacaan absorpsi-nya.`,
      },
    },
    {
      id: 'sources',
      heading: { en: 'Sources', id: 'Sumber' },
      body: {
        en: `Compiled from @Luckshuryy's free public curriculum, cross-checked against the academic neighbours. **Educational, not financial advice; not affiliated with or endorsed by @Luckshuryy.** This is discretionary intraday trading — genuinely hard, where most attempters lose; all session percentages and "high-hit-rate" levels are his self-reported backtests on his instruments and custom UTC windows, to be re-verified on your own market and timeframe.

- **Dalton, J., Jones, E., & Dalton, R.** (1990). *Mind Over Markets: Power Trading with Market Generated Information.* The standard Auction Market Theory / Market Profile text — one-time framing, value area, POC, single prints, initial balance and range extension. [Established]
- **Steidlmayer, J. P., & Hawkins, S.** (2003). *Steidlmayer on Markets: Trading with Market Profile.* Market Profile from its inventor (introduced at the CBOT, 1984). [Established]
- **Harris, L.** (2003). *Trading and Exchanges: Market Microstructure for Practitioners.* Market vs limit orders, takers-move-price / makers-provide-liquidity, stop & absorption mechanics. [Established]
- **O'Hara, M.** (1995). *Market Microstructure Theory.* Price formation and informed-order-flow effects underlying delta/CVD. [Established]
- **Easley, D., López de Prado, M., & O'Hara, M.** (2012). "Flow Toxicity and Liquidity in a High-Frequency World" (VPIN). *Review of Financial Studies* 25(5):1457-1493. Order-flow imbalance / toxicity as a measurable, predictive quantity — grounds delta and CVD. [Established]
- **Osler, C. L.** (2003). "Currency Orders and Exchange-Rate Dynamics." *Journal of Finance* 58(5):1791-1819. Stops/limits cluster at obvious levels and trigger predictably — the basis for liquidity pools, stop-runs and the session-extreme sweep. [Established]
- **Berkowitz, S. A., Logue, D. E., & Noser, E. A.** (1988). "The Total Cost of Transactions on the NYSE." *Journal of Finance* 43(1):97-112. Formalises VWAP as an execution / fair-value benchmark. [Established]
- **Williams, B.** (1995). *Trading Chaos.* Source of the Williams Fractal indicator he uses to mark swing points. [Practitioner]
- **Huddleston, M. J.** (Inner Circle Trader / Smart Money Concepts, c. 2016). Origin of Fair Value Gaps, Order Blocks and the "liquidity" vocabulary — a popular **practitioner** framework, *not* peer-reviewed; he cross-walks FVG back to the Market-Profile single print. [Practitioner]
- **Exocharts** (footprint / volume-profile platform he leads) and **Jigsaw Trading / Market Delta** order-flow education (Peter Davies). The footprint/delta tooling and lineage. [Practitioner/tool]`,
        id: `Dikompilasi dari kurikulum publik gratis @Luckshuryy, dicek-silang dengan tetangga akademiknya. **Edukasi, bukan nasihat keuangan; tidak berafiliasi dengan atau diendors oleh @Luckshuryy.** Ini trading intraday diskresioner — betul-betul sulit, di mana kebanyakan yang nyoba rugi; semua persentase session dan level "high-hit-rate" itu back-test yang dia laporin sendiri di instrumen dan window UTC custom-nya, harus diverifikasi-ulang di pasar dan timeframe-mu sendiri.

- **Dalton, J., Jones, E., & Dalton, R.** (1990). *Mind Over Markets: Power Trading with Market Generated Information.* Teks standar Auction Market Theory / Market Profile — one-time framing, value area, POC, single print, initial balance dan range extension. [Established]
- **Steidlmayer, J. P., & Hawkins, S.** (2003). *Steidlmayer on Markets: Trading with Market Profile.* Market Profile dari penemunya (diperkenalkan di CBOT, 1984). [Established]
- **Harris, L.** (2003). *Trading and Exchanges: Market Microstructure for Practitioners.* Market vs limit order, taker-gerakkan-harga / maker-sediakan-likuiditas, mekanik stop & absorpsi. [Established]
- **O'Hara, M.** (1995). *Market Microstructure Theory.* Pembentukan harga dan efek informed-order-flow yang mendasari delta/CVD. [Established]
- **Easley, D., López de Prado, M., & O'Hara, M.** (2012). "Flow Toxicity and Liquidity in a High-Frequency World" (VPIN). *Review of Financial Studies* 25(5):1457-1493. Imbalance / toxicity order-flow sebagai kuantitas yang bisa-diukur dan prediktif — ngedasarin delta dan CVD. [Established]
- **Osler, C. L.** (2003). "Currency Orders and Exchange-Rate Dynamics." *Journal of Finance* 58(5):1791-1819. Stop/limit ngumpul di level jelas dan trigger secara terprediksi — basis buat liquidity pool, stop-run, dan sweep ekstrem session. [Established]
- **Berkowitz, S. A., Logue, D. E., & Noser, E. A.** (1988). "The Total Cost of Transactions on the NYSE." *Journal of Finance* 43(1):97-112. Ngeformalin VWAP sebagai benchmark eksekusi / fair-value. [Established]
- **Williams, B.** (1995). *Trading Chaos.* Sumber indikator Williams Fractal yang dia pakai buat nandain titik swing. [Practitioner]
- **Huddleston, M. J.** (Inner Circle Trader / Smart Money Concepts, sekitar 2016). Asal Fair Value Gap, Order Block, dan kosakata "liquidity" — framework **praktisi** populer, *bukan* peer-review; dia telusuri-silang FVG balik ke single print Market Profile. [Practitioner]
- **Exocharts** (platform footprint / volume-profile yang dia lead) dan edukasi order-flow **Jigsaw Trading / Market Delta** (Peter Davies). Tooling dan silsilah footprint/delta. [Practitioner/tool]`,
      },
    },
  ],

  audio: { enabled: true },

  selfTest: [
    {
      sectionId: 'intuition',
      question: { en: `Why does Luckshury trust the footprint over the resting order book, and how does that lead to an "absorption" reversal read?`, id: `Kenapa Luckshury lebih percaya footprint daripada buku order nganggur, dan gimana itu ngarah ke pembacaan reversal "absorpsi"?` },
      prompt: { en: 'Before continuing, try answering:', id: 'Sebelum lanjut, coba jawab:' },
      answer: {
        en: `The resting limit-order book shows ORDERS THAT MAY NEVER EXECUTE — they can be pulled or spoofed — so it is unreliable. A FOOTPRINT records only EXECUTED market orders per price cluster (sells left, buys right): a record of what actually transacted, so it is much harder to fake ("they dont lie"). ABSORPTION is then read from aggression, not the book: when heavy market orders stack at a level (large |delta|) but price will NOT move (Δp ≈ 0), resting limits are quietly soaking up the aggression — and if CVD diverges from price (price makes a new extreme but CVD does not) the move is weak and likely to reverse. That is his absorption-fade tell. Honest caveat: footprints are HARDER to fake, not impossible (icebergs / aggressive flow can still mislead). Grounding: Easley-Lopez de Prado-OHara VPIN order-flow toxicity.`,
        id: `Buku limit-order nganggur nunjukin ORDER YANG MUNGKIN GAK PERNAH EKSEKUSI — bisa ditarik atau di-spoof — jadi gak bisa diandalkan. FOOTPRINT cuma ngerekam market order TEREKSEKUSI per klaster harga (sell kiri, buy kanan): rekaman apa yang benar-benar tertransaksi, jadi jauh lebih sulit dipalsukan ("mereka gak bohong"). ABSORPSI lalu dibaca dari agresi, bukan dari buku: pas market order berat numpuk di satu level (|delta| besar) tapi harga GAK mau gerak (Δp ≈ 0), limit nganggur diam-diam nyerap agresi-nya — dan kalau CVD divergen dari harga (harga bikin ekstrem baru tapi CVD enggak) gerakannya lemah dan kemungkinan reversal. Itu tell absorption-fade-nya. Caveat jujur: footprint LEBIH sulit dipalsukan, bukan mustahil (iceberg / flow agresif masih bisa nyesatin). Landasan: order-flow toxicity VPIN Easley-Lopez de Prado-OHara.`,
      },
    },
    {
      sectionId: 'formalization',
      question: { en: `Define the value area, POC and a single print / FVG from a volume profile, and write the value-area rule and one-time-framing condition.`, id: `Definisikan value area, POC, dan single print / FVG dari volume profile, dan tulis aturan value-area dan kondisi one-time-framing.` },
      prompt: { en: 'Before continuing, try answering:', id: 'Sebelum lanjut, coba jawab:' },
      answer: {
        en: `POC = the price with the most traded volume, p* = argmax_p V(p) (a NAKED POC, not yet revisited, acts as a magnet). VALUE AREA = the contiguous band around the POC containing ~70% of total volume: grow outward from the POC, each step adding the heavier of the two row-PAIRS (the next two prices above vs the next two below) — Dalton's canonical two-row rule — until Σ_{p∈VA} V(p) ≥ 0.70·Σ_p V(p); its edges VAH/VAL are acceptance boundaries. A SINGLE PRINT / FAIR VALUE GAP is a thin Low-Volume Node — a stretch of price the market raced through and rejected (an inefficiency that tends to fill); single print = gap = FVG. ONE-TIME FRAMING: with candle highs/lows H_t, L_t, an uptrend holds L_t > L_{t-1} for every t (each low strictly higher than the prior low); a downtrend holds H_t < H_{t-1} (each high strictly lower); the first violation ends the run, and an exactly-equal low/high is a tie that does not extend it. On the daily it is his strongest standalone bias.`,
        id: `POC = harga dengan volume tertradekan terbanyak, p* = argmax_p V(p) (NAKED POC, belum dikunjungi-ulang, bertindak sebagai magnet). VALUE AREA = pita kontigu di sekitar POC yang ngandung ~70% total volume: tumbuh ke luar dari POC, tiap langkah nambah PASANGAN-dua-baris yang lebih berat (dua harga di atas vs dua di bawah) — aturan kanonik dua-baris Dalton — sampai Σ_{p∈VA} V(p) ≥ 0.70·Σ_p V(p); tepinya VAH/VAL itu batas penerimaan. SINGLE PRINT / FAIR VALUE GAP itu Low-Volume Node tipis — rentang harga yang pasar ngebut lewatinya dan tolak (inefisiensi yang cenderung keisi); single print = gap = FVG. ONE-TIME FRAMING: dengan high/low candle H_t, L_t, uptrend nahan L_t > L_{t-1} buat tiap t (tiap low lebih tinggi secara ketat dari low sebelumnya); downtrend nahan H_t < H_{t-1} (tiap high lebih rendah secara ketat); violation pertama ngakhirin run, dan low/high yang persis sama itu seri yang gak ngelanjutin run. Di daily ini bias standalone terkuatnya.`,
      },
    },
    {
      sectionId: 'worked-example',
      question: { en: `Reconstruct Luckshury's fixed routine: from daily one-time framing to the ~12:20 UTC sweep and the order-flow trigger.`, id: `Rekonstruksi rutinitas tetap Luckshury: dari one-time framing daily ke sweep ~12:20 UTC dan trigger order-flow.` },
      prompt: { en: 'Before continuing, try answering:', id: 'Sebelum lanjut, coba jawab:' },
      answer: {
        en: `(1) Is the DAILY one-time-framing? If yes, that trend is the bias and stands alone (don't fight a strong trend). (2) If not, note WHICH SESSION made the day's H/L on his custom UTC windows — London prints the daily extreme only ~12% of days, so a London extreme is a prime target. (3) Mark poor highs/lows, single prints/FVGs, the naked POC, and especially INTERNAL RESTING LIQUIDITY inside the major pivots. (4) Track structure from the OPEN on a 15m/30m profile, stripping prior-day noise. (5) Add back-tested levels and generally WAIT FOR NEW YORK — NY sweeps a London extreme ~88-92% of days and makes both H and L ~38% — watching ~12:10-12:30 UTC (esp. ~12:20) for the sweep. (6) Require ≥2 aligned confluences, then take an ORDER-FLOW TRIGGER: an absorption fade (heavy delta, no move, CVD divergence) and/or OI confirmation (price up + OI up = new longs that are now offside → fade the breakout). Enter on the rejection back through the swept level; stop just above where the new positions began entering. In a liquidation flush, trade back toward the wick for ≥50% fill, stop just above where new shorts entered. All percentages are his backtests — re-verify.`,
        id: `(1) Apakah DAILY one-time-framing? Kalau ya, trend itu bias-nya dan berdiri sendiri (jangan lawan trend kuat). (2) Kalau enggak, catat SESSION MANA yang bikin H/L hari itu di window UTC custom-nya — London nge-print ekstrem daily cuma ~12% hari, jadi ekstrem London itu target utama. (3) Tandain poor high/low, single print/FVG, naked POC, dan terutama INTERNAL RESTING LIQUIDITY di dalam pivot mayor. (4) Track struktur dari OPEN di profil 15m/30m, buang noise hari-sebelumnya. (5) Tambah level hasil back-test dan umumnya TUNGGU NEW YORK — NY nyapu ekstrem London ~88-92% hari dan bikin kedua H dan L ~38% — ngawasin ~12:10-12:30 UTC (terutama ~12:20) buat sweep. (6) Butuh ≥2 confluence searah, baru ambil TRIGGER ORDER-FLOW: absorption fade (delta berat, gak gerak, divergensi CVD) dan/atau konfirmasi OI (harga naik + OI naik = long baru yang sekarang offside → fade the breakout). Masuk pas rejection balik lewat level yang disapu; stop persis di atas tempat posisi baru mulai masuk. Di liquidation flush, trade balik ke arah wick buat fill ≥50%, stop persis di atas tempat short baru masuk. Semua persentase itu back-test-nya — verifikasi-ulang.`,
      },
    },
  ],
};
