// ─────────────────────────────────────────────────────────────────────────
// Trading domain — PORTFOLIO OF EDGES: the portfolio/risk capstone. Don't bet
// everything on one edge; run MANY uncorrelated, decaying edges. For N equal-
// weight edges each Sharpe S, vol σ, pairwise correlation ρ (one-factor
// equicorrelation), portfolio vol σ_p = σ·√((1+(N−1)ρ)/N), so the Sharpe
// multiplies by the DIVERSIFICATION RATIO D(N,ρ) = √(N/(1+(N−1)ρ)) and
// Sharpe_port = S·D. Two regimes: ρ=0 ⇒ D=√N (unbounded — the free lunch of
// independence); ρ>0 ⇒ D→1/√ρ as N→∞ — CORRELATION sets the ceiling. Pooling
// also shrinks max-drawdown. Carries the interactive PortfolioEdgeSim (D-vs-N
// curve, the ρ=0 √N reference, the 1/√ρ ceiling, Monte-Carlo drawdown
// single-vs-portfolio; js/viz.js). Evidence-tagged [Established] (Markowitz
// 1952 mean-variance) vs [Practitioner] (the "run an uncorrelated book" usage;
// LiquidityGoblin "be the bookie", Tradingriot). Web-verified refs. Educational,
// NOT financial advice.
// ─────────────────────────────────────────────────────────────────────────

export const CONTENT = {
  itemId: 'portfolio-of-edges',
  estimatedReadMinutes: 30,

  author: {
    fullName: { en: 'Harry M. Markowitz — mean-variance diversification & the math of an uncorrelated book', id: 'Harry M. Markowitz — diversifikasi mean-variance & matematika buku tak-berkorelasi' },
    affiliation: {
      en: 'American economist (1927–2023); Nobel laureate in Economic Sciences (1990, shared with Merton Miller and William Sharpe) for the theory of portfolio choice. Work done at the University of Chicago / Cowles Commission, later the RAND Corporation, IBM, and the University of California, San Diego. This module pairs his ESTABLISHED mean-variance result with the PRACTITIONER framing — "run a portfolio of uncorrelated, decaying edges" — voiced by trading educators such as LiquidityGoblin ("be the bookie") and Tradingriot (the "uncorrelated book"), and the active-management cousin from Grinold & Kahn.',
      id: 'Ekonom Amerika (1927–2023); peraih Nobel Ilmu Ekonomi (1990, berbagi dengan Merton Miller dan William Sharpe) untuk teori pemilihan portfolio. Karyanya dikerjakan di University of Chicago / Cowles Commission, lalu RAND Corporation, IBM, dan University of California, San Diego. Module ini memasangkan hasil mean-variance-nya yang ESTABLISHED dengan pembingkaian PRAKTISI — "jalankan portfolio dari edge tak-berkorelasi yang meluruh" — yang disuarakan pengajar trading seperti LiquidityGoblin ("jadi bandar") dan Tradingriot ("buku tak-berkorelasi"), dan sepupu active-management dari Grinold & Kahn.',
    },
    tagline: {
      en: 'Diversification is the only free lunch in finance — but correlation prices it. One great edge is fragile; a book of many UNCORRELATED edges keeps the return and sheds the volatility, so the Sharpe rises. The catch: correlation, not the number of strategies, sets the ceiling at 1/√ρ.',
      id: 'Diversifikasi itu satu-satunya makan-siang-gratis di keuangan — tapi korelasi yang ngasih harganya. Satu edge hebat itu rapuh; sebuah buku berisi banyak edge TAK-BERKORELASI menahan return-nya dan membuang volatilitas-nya, jadi Sharpe-nya naik. Jebakannya: korelasi, bukan jumlah strategi, yang nentuin plafon di 1/√ρ.',
    },
    bio: {
      en: `In 1952, a 25-year-old graduate student named Harry Markowitz published a fourteen-page paper, *Portfolio Selection*, that turned investing from stock-picking folklore into mathematics. His insight was almost embarrassingly simple in hindsight: **the risk of a portfolio is not the average risk of its parts** — it depends on how the parts move *together*. Two assets that each look risky in isolation can combine into something far steadier if their ups and downs partly cancel. Risk, he showed, lives in the **covariance matrix**, not in any single position. For this he shared the 1990 Nobel Memorial Prize, and the result — the **efficient frontier**, mean-variance optimisation — became the spine of modern portfolio theory.

The trading-desk version of Markowitz is blunt and behavioural: **don't bet the account on one edge; run an uncorrelated book.** Practitioners call it "being the bookie" (LiquidityGoblin) — you don't need to win every bet, you need many small, independent positive-expectancy bets whose *risks* don't all fire at once. Tradingriot frames the graduation from one discretionary setup to a *book* of strategies the same way: combine payout curves that aren't correlated, and the equity curve smooths out. The math underneath is exactly Markowitz's, specialised to the clean case where every edge shares one Sharpe, one volatility, and one pairwise correlation.

⟦Note: this module compiles an ESTABLISHED result (Markowitz 1952) with its PRACTITIONER usage in the trading-education space, evidence-tagged. Educational, not financial advice. The trader quotes ("be the bookie," "uncorrelated book") are paraphrased framings, not endorsements.⟧`,
      id: `Tahun 1952, seorang mahasiswa pascasarjana berusia 25 tahun bernama Harry Markowitz menerbitkan makalah empat-belas halaman, *Portfolio Selection*, yang mengubah investasi dari folklore pilih-saham jadi matematika. Wawasannya hampir memalukan saking sederhananya jika dilihat ke belakang: **risiko sebuah portfolio bukan rata-rata risiko bagian-bagiannya** — dia tergantung bagaimana bagian-bagian itu bergerak *bersama*. Dua aset yang masing-masing kelihatan berisiko secara terpisah bisa berpadu jadi sesuatu yang jauh lebih stabil kalau naik-turunnya sebagian saling membatalkan. Risiko, dia tunjukkan, hidup di **matriks kovarians**, bukan di posisi tunggal mana pun. Untuk ini dia berbagi Nobel Memorial 1990, dan hasilnya — **efficient frontier**, optimasi mean-variance — jadi tulang punggung teori portfolio modern.

Versi meja-trading dari Markowitz itu blak-blakan dan behavioural: **jangan taruhin akun di satu edge; jalankan buku tak-berkorelasi.** Praktisi menyebutnya "jadi bandar" (LiquidityGoblin) — kamu gak perlu menang tiap taruhan, kamu perlu banyak taruhan ber-expectancy-positif yang kecil dan independen yang *risiko*-nya gak nyala semua bareng. Tradingriot membingkai lulus dari satu setup diskresioner ke sebuah *buku* strategi dengan cara yang sama: gabungin kurva payout yang gak berkorelasi, dan kurva ekuitasnya menghalus. Matematika di bawahnya persis Markowitz, dispesialkan ke kasus bersih di mana tiap edge berbagi satu Sharpe, satu volatilitas, dan satu korelasi berpasangan.

⟦Catatan: module ini mengompilasi hasil ESTABLISHED (Markowitz 1952) dengan penggunaan PRAKTISI-nya di ruang edukasi-trading, ber-tag bukti. Edukatif, bukan nasihat keuangan. Kutipan trader ("jadi bandar," "buku tak-berkorelasi") itu pembingkaian parafrase, bukan dukungan.⟧`,
    },
    focus: {
      en: `The core object is the **diversification ratio** for an equal-weight book of $N$ edges, each with the same Sharpe $S$, the same volatility $\\sigma$, and a single pairwise correlation $\\rho$ (the *equicorrelation* / one-factor case). The portfolio volatility is $\\sigma_p = \\sigma\\sqrt{(1+(N-1)\\rho)/N}$, so the Sharpe multiplies by $D(N,\\rho) = \\sigma/\\sigma_p = \\sqrt{N/(1+(N-1)\\rho)}$ and $\\text{Sharpe}_{\\text{port}} = S\\cdot D$. Everything important is in the two limits of $D$: when $\\rho = 0$, $D = \\sqrt{N}$ (the Sharpe grows without bound — the *free lunch* of true independence); when $\\rho > 0$, $D \\to 1/\\sqrt{\\rho}$ as $N \\to \\infty$ — a hard **ceiling** set by correlation, not by the number of strategies. Around this sits the survival payoff (pooling shrinks max-drawdown and risk-of-ruin) and the honest caveats (edges decay; correlations rise in a crisis; estimated $\\rho$ is noisy).`,
      id: `Objek intinya adalah **rasio diversifikasi** buat buku berbobot-sama berisi $N$ edge, masing-masing dengan Sharpe $S$ yang sama, volatilitas $\\sigma$ yang sama, dan satu korelasi berpasangan $\\rho$ (kasus *equicorrelation* / satu-faktor). Volatilitas portfolio-nya $\\sigma_p = \\sigma\\sqrt{(1+(N-1)\\rho)/N}$, jadi Sharpe-nya dikali $D(N,\\rho) = \\sigma/\\sigma_p = \\sqrt{N/(1+(N-1)\\rho)}$ dan $\\text{Sharpe}_{\\text{port}} = S\\cdot D$. Semua yang penting ada di dua limit $D$: pas $\\rho = 0$, $D = \\sqrt{N}$ (Sharpe tumbuh tanpa batas — *makan-siang-gratis* dari independensi sejati); pas $\\rho > 0$, $D \\to 1/\\sqrt{\\rho}$ saat $N \\to \\infty$ — sebuah **plafon** keras yang ditentukan korelasi, bukan jumlah strategi. Di sekitar ini ada bayaran bertahan (pooling ngecilin max-drawdown dan risk-of-ruin) dan caveat jujurnya (edge meluruh; korelasi naik di krisis; $\\rho$ estimasi itu berisik).`,
    },
    intellectualLineage: {
      en: `The result is **classical mean-variance portfolio theory** (Markowitz 1952), the foundation of Modern Portfolio Theory and a direct ancestor of the **Capital Asset Pricing Model** (Sharpe 1964; Lintner 1965) and the **Sharpe ratio** itself. The equicorrelation specialisation — every pair sharing one $\\rho$ — is the cleanest one-factor case of Markowitz's covariance matrix and underlies risk-parity and equal-weight thinking. The active-management cousin is **Grinold & Kahn's "fundamental law of active management,"** $\\text{IR} = \\text{IC}\\cdot\\sqrt{\\text{breadth}}$ (Active Portfolio Management): your information ratio scales with skill (IC) times the *square root of the number of independent bets* — the same $\\sqrt{N}$ engine seen from the alpha side. The fragility caveat — that diversification fails when you most need it — is grounded in **funding-liquidity spirals** (Brunnermeier & Pedersen 2009): in a crisis, forced deleveraging makes correlations jump toward 1. The trading-practitioner lineage runs through LiquidityGoblin's "be the bookie," Tradingriot's "uncorrelated book," and the expectancy-first foundation of TraderXO.`,
      id: `Hasilnya adalah **teori portfolio mean-variance klasik** (Markowitz 1952), fondasi Modern Portfolio Theory dan leluhur langsung **Capital Asset Pricing Model** (Sharpe 1964; Lintner 1965) dan **rasio Sharpe** itu sendiri. Spesialisasi equicorrelation — tiap pasangan berbagi satu $\\rho$ — itu kasus satu-faktor paling bersih dari matriks kovarians Markowitz dan mendasari pikiran risk-parity dan bobot-sama. Sepupu active-management-nya adalah **"hukum fundamental active management" Grinold & Kahn,** $\\text{IR} = \\text{IC}\\cdot\\sqrt{\\text{breadth}}$ (Active Portfolio Management): information ratio kamu naik dengan skill (IC) dikali *akar dari jumlah taruhan independen* — engine $\\sqrt{N}$ yang sama dilihat dari sisi alpha. Caveat kerapuhannya — bahwa diversifikasi gagal pas kamu paling butuh — berpijak di **spiral funding-likuiditas** (Brunnermeier & Pedersen 2009): di krisis, deleveraging terpaksa bikin korelasi melonjak menuju 1. Garis keturunan praktisi-trading-nya lewat "jadi bandar" LiquidityGoblin, "buku tak-berkorelasi" Tradingriot, dan fondasi expectancy-dulu TraderXO.`,
    },
    keyCollaborators: {
      en: `Markowitz built on, and was built upon by, a tight roster: his Chicago advisor **Milton Friedman** and **Jacob Marschak** at the Cowles Commission; **William F. Sharpe** (his de-facto doctoral mentee at RAND/UCLA, who turned mean-variance into the single-factor CAPM and the Sharpe ratio) and **Merton Miller**, with whom he shared the 1990 Nobel; **James Tobin** (the separation theorem); and later **A. D. Roy**, who published a closely related "safety-first" portfolio rule in the same year (1952). The active-management reframing is **Richard Grinold & Ronald Kahn**. In the trading-education space the practitioner voices are **LiquidityGoblin** (market-making / "be the bookie") and **Tradingriot** (the move from one setup to an uncorrelated book), with the crisis-correlation caveat owed to **Markus Brunnermeier & Lasse Pedersen**.`,
      id: `Markowitz membangun di atas, dan dibangun di atasnya oleh, jajaran erat: pembimbing Chicago-nya **Milton Friedman** dan **Jacob Marschak** di Cowles Commission; **William F. Sharpe** (mahasiswa bimbingan doktoral de-facto-nya di RAND/UCLA, yang ngubah mean-variance jadi CAPM satu-faktor dan rasio Sharpe) dan **Merton Miller**, yang dengannya dia berbagi Nobel 1990; **James Tobin** (teorema separasi); dan kemudian **A. D. Roy**, yang menerbitkan aturan portfolio "safety-first" yang sangat terkait di tahun yang sama (1952). Pembingkaian-ulang active-management itu **Richard Grinold & Ronald Kahn**. Di ruang edukasi-trading suara praktisinya adalah **LiquidityGoblin** (market-making / "jadi bandar") dan **Tradingriot** (perpindahan dari satu setup ke buku tak-berkorelasi), dengan caveat korelasi-krisis berutang ke **Markus Brunnermeier & Lasse Pedersen**.`,
    },
    legacy: {
      en: `Markowitz gave finance its first rigorous answer to "why diversify?" — and a number to measure it. The efficient frontier, mean-variance optimisation, and the entire risk-management apparatus of modern asset management descend from those fourteen pages; the work earned him the 1990 Nobel and the informal title "father of modern portfolio theory." For the trader, the durable lesson is sharper than "don't put all your eggs in one basket." It is that **adding more of the *same* edge barely helps**: once your strategies are correlated, the Sharpe is capped at $1/\\sqrt{\\rho}$ no matter how many you stack, so the entire payoff of diversification comes from finding edges that are genuinely *uncorrelated* — and from running enough of them that no single one's decay or drawdown can sink the book. The companion idea — that diversification's protection is exactly what evaporates in a funding crisis — is the humility clause that keeps the lesson honest.`,
      id: `Markowitz ngasih keuangan jawaban ketat pertamanya buat "kenapa diversifikasi?" — dan sebuah angka buat mengukurnya. Efficient frontier, optimasi mean-variance, dan seluruh aparatus manajemen-risiko asset management modern turun dari empat-belas halaman itu; karyanya ngebawa dia Nobel 1990 dan gelar informal "bapak teori portfolio modern." Buat trader, pelajaran awetnya lebih tajam dari "jangan taruh semua telur di satu keranjang." Pelajarannya: **nambah lebih banyak edge yang *sama* nyaris gak nolong**: begitu strategimu berkorelasi, Sharpe-nya diplafon di $1/\\sqrt{\\rho}$ seberapa banyak pun kamu numpuk, jadi seluruh bayaran diversifikasi datang dari nemu edge yang benar-benar *tak-berkorelasi* — dan dari njalanin cukup banyak biar gak ada satu pun peluruhan atau drawdown-nya yang bisa nenggelamin buku. Ide pendampingnya — bahwa perlindungan diversifikasi justru yang menguap di krisis pendanaan — itu klausa kerendahan-hati yang bikin pelajarannya jujur.`,
    },
    keyWorks: [
      { year: 1952, title: 'Portfolio Selection (the founding paper of mean-variance diversification & the efficient frontier)', venue: 'The Journal of Finance 7(1), 77–91 (Markowitz, H. M.)' },
      { year: 1959, title: 'Portfolio Selection: Efficient Diversification of Investments (the book-length treatment of the covariance-matrix theory)', venue: 'Wiley / Cowles Foundation Monograph 16 (Markowitz, H. M.)' },
      { year: 1999, title: 'Active Portfolio Management — the "fundamental law of active management," IR = IC·√breadth (the active-management cousin of the √N idea)', venue: 'McGraw-Hill, 2nd ed. (Grinold, R. C. & Kahn, R. N.)' },
      { year: 2009, title: 'Market Liquidity and Funding Liquidity — funding spirals make correlations jump toward 1 in a crisis (the diversification-fails caveat)', venue: 'The Review of Financial Studies 22(6), 2201–2238 (Brunnermeier, M. K. & Pedersen, L. H.)' },
      { year: 1964, title: 'Capital Asset Prices — the CAPM and the Sharpe ratio built directly on Markowitz mean-variance', venue: 'The Journal of Finance 19(3), 425–442 (Sharpe, W. F.)' },
    ],
  },

  sections: [
    {
      id: 'motivation',
      heading: { en: 'Why this matters', id: 'Kenapa ini penting' },
      body: {
        en: `You have done the hard work of [engineering one positive-expectancy edge](item:traderxo-expectancy). You validated it, sized it small, and survived the path. Now comes the question that separates a lucky run from a durable book: **what happens when you stack many edges instead of one?**

The naive fear is that more positions just means more ways to lose. The mean-variance answer — Harry Markowitz's 1952 result, the one piece of finance theory often called "the only free lunch" — is the opposite: **if your edges are not perfectly correlated, pooling them keeps the average return while shrinking the volatility, so the risk-adjusted return (the Sharpe) goes *up*.** You are not diluting your best idea; you are buying a smoother ride for the same expected gain.

This is the precise, mathematical form of the practitioner thesis that LiquidityGoblin calls **"be the bookie"** and Tradingriot calls running an **"uncorrelated book."** A bookie does not need to know who wins any single game; they need a *book* of bets whose risks don't all resolve the same way at once, so the law of large numbers grinds out the edge. A trader graduating from one setup to a portfolio is doing exactly this — combining payout curves that aren't correlated so the equity curve stops lurching [Practitioner].

Three reasons this is the capstone of the risk arc:
- **It changes what "edge" means.** A single edge is fragile — it [decays, and a backtest overstates it](item:backtest-overfitting-dsr). A *book* of edges is robust: the one thing that survives any single strategy dying is having others uncorrelated with it.
- **It makes survival cheaper.** The same pooling that raises the Sharpe also **shrinks the maximum drawdown and the risk-of-ruin** — the path that nearly killed a single-edge account is far gentler for a diversified one.
- **It comes with a hard ceiling.** The free lunch is *priced by correlation*. As you add correlated strategies, the benefit saturates at $1/\\sqrt{\\rho}$ — the 20th copy of the same trade barely helps. The lesson is not "trade more"; it is "find edges that are genuinely *different*."

⟦Disclaimer: this is an educational module on portfolio mathematics, NOT financial advice. The numbers are illustrative; real correlations are unstable and estimated with error.⟧`,
        id: `Kamu udah ngerjain kerja berat [merekayasa satu edge ber-expectancy-positif](item:traderxo-expectancy). Kamu validasi, size kecil, dan bertahan di path-nya. Sekarang datang pertanyaan yang misahin run beruntung dari buku yang awet: **apa yang terjadi kalau kamu numpuk banyak edge ketimbang satu?**

Ketakutan naif-nya: lebih banyak posisi cuma berarti lebih banyak cara buat rugi. Jawaban mean-variance — hasil Harry Markowitz 1952, satu-satunya potongan teori keuangan yang sering disebut "makan-siang-gratis" — itu kebalikannya: **kalau edge kamu gak berkorelasi sempurna, ngegabungin mereka nahan return rata-ratanya sambil ngecilin volatilitas-nya, jadi return-yang-disesuaikan-risiko (Sharpe-nya) *naik*.** Kamu gak nge-encerin ide terbaikmu; kamu ngebeli perjalanan yang lebih halus buat keuntungan harapan yang sama.

Ini bentuk presis dan matematis dari tesis praktisi yang LiquidityGoblin sebut **"jadi bandar"** dan Tradingriot sebut njalanin **"buku tak-berkorelasi."** Seorang bandar gak perlu tahu siapa menang di satu pertandingan pun; dia perlu *buku* taruhan yang risikonya gak selesai dengan cara sama bareng-bareng, biar hukum bilangan besar nggiling keluar edge-nya. Trader yang lulus dari satu setup ke portfolio ngelakuin persis ini — ngegabungin kurva payout yang gak berkorelasi biar kurva ekuitasnya berhenti tersentak [Practitioner].

Tiga alasan ini jadi capstone dari arc risiko:
- **Dia ngubah arti "edge."** Satu edge itu rapuh — dia [meluruh, dan backtest melebih-lebihkannya](item:backtest-overfitting-dsr). Sebuah *buku* edge itu kokoh: satu hal yang bertahan dari matinya strategi tunggal mana pun adalah punya yang lain yang tak-berkorelasi dengannya.
- **Dia bikin bertahan jadi lebih murah.** Pooling yang sama yang ngangkat Sharpe juga **ngecilin maximum drawdown dan risk-of-ruin** — path yang nyaris ngebunuh akun satu-edge jauh lebih lembut buat yang terdiversifikasi.
- **Dia datang dengan plafon keras.** Makan-siang-gratis itu *diberi harga oleh korelasi*. Saat kamu nambah strategi berkorelasi, manfaatnya jenuh di $1/\\sqrt{\\rho}$ — salinan ke-20 dari trade yang sama nyaris gak nolong. Pelajarannya bukan "trade lebih banyak"; tapi "nemu edge yang benar-benar *beda*."

⟦Disclaimer: ini module edukatif soal matematika portfolio, BUKAN nasihat keuangan. Angkanya ilustratif; korelasi nyata itu gak stabil dan diestimasi dengan error.⟧`,
      },
    },
    {
      id: 'intuition',
      heading: { en: 'The intuition: pooling keeps the mean, sheds the noise', id: 'Intuisi: pooling nahan rata-rata, buang noise' },
      body: {
        en: `Picture a casino, or a bookie. On any single bet they might lose badly. But run **a thousand bets with a small edge each**, and the *average* result is almost exactly the edge — the wild swings of individual bets cancel out. That cancellation is the whole game. It only works, though, if the bets are **independent**: a thousand bets on the *same* coin flip is just one big bet in disguise.

Now translate to a book of trading edges. Each edge has a mean return $\\mu$ and a volatility $\\sigma$. When you run $N$ of them at equal weight:
- **The mean is preserved.** The portfolio's expected return is the average of the parts — pooling does not dilute it. If each edge expects $\\mu$, so does the book.
- **The volatility shrinks — and *how much* depends on correlation.** Volatilities do not add; *variances* do, but with cross-terms for every pair. When edges are uncorrelated, those cross-terms vanish and the noise averages away fast. When they move together, the cross-terms stay and the noise survives.

Because the Sharpe ratio is mean ÷ volatility, holding the mean fixed while cutting the volatility means **the Sharpe goes up**. That ratio of "how much you cut the volatility" is the **diversification multiplier** $D$, and the Sharpe of the book is $D$ times the Sharpe of one edge.

The non-obvious payoff is in the two regimes:

- **True independence ($\\rho = 0$) is a free lunch with no menu price.** Here $D = \\sqrt{N}$: four uncorrelated edges double your Sharpe, nine triple it, and there is *no ceiling*. This is why an uncorrelated book is so coveted — and so rare. Genuinely independent edges (e.g. a mean-reversion crypto strategy, a stat-arb in equities, and a carry trade in FX) are hard to find, because most "different" strategies secretly load on the same risk factor.

- **Any correlation ($\\rho > 0$) installs a ceiling.** Now $D$ rises fast at first but flattens, approaching $1/\\sqrt{\\rho}$ and never passing it. At a modest $\\rho = 0.2$, the ceiling is about $2.24\\times$ — so going from 10 strategies to 20 to 100 barely moves the needle. **Correlation, not the number of strategies, sets the limit.** Piling on more of the same edge is like adding more bets on the same coin: it feels like diversification but buys almost nothing.

So the bookie's wisdom, made precise: *win the long run by holding many bets whose risks fire at different times.* The skill is not finding one more copy of your best trade — it is finding the trade that **zigs when your book zags**.`,
        id: `Bayangin kasino, atau bandar. Di satu taruhan dia mungkin rugi parah. Tapi jalanin **seribu taruhan dengan edge kecil masing-masing**, dan hasil *rata-rata*-nya hampir persis edge-nya — ayunan liar taruhan individual saling membatalkan. Pembatalan itu adalah seluruh permainannya. Tapi dia cuma jalan kalau taruhannya **independen**: seribu taruhan di koin yang *sama* itu cuma satu taruhan besar yang menyamar.

Sekarang terjemahin ke buku edge trading. Tiap edge punya return rata-rata $\\mu$ dan volatilitas $\\sigma$. Pas kamu jalanin $N$ dari mereka di bobot sama:
- **Rata-ratanya dipertahankan.** Return harapan portfolio itu rata-rata dari bagian-bagiannya — pooling gak nge-encerinnya. Kalau tiap edge harapin $\\mu$, gitu juga bukunya.
- **Volatilitas-nya mengecil — dan *seberapa banyak* tergantung korelasi.** Volatilitas gak nambah; *varians* yang nambah, tapi dengan suku-silang buat tiap pasangan. Pas edge tak-berkorelasi, suku-silang itu lenyap dan noise-nya merata cepat. Pas mereka bergerak bareng, suku-silang-nya tinggal dan noise-nya bertahan.

Karena rasio Sharpe itu rata-rata ÷ volatilitas, nahan rata-rata tetap sambil ngepotong volatilitas berarti **Sharpe-nya naik**. Rasio "seberapa banyak kamu motong volatilitas" itu **pengali diversifikasi** $D$, dan Sharpe bukunya itu $D$ kali Sharpe satu edge.

Bayaran yang gak-jelas ada di dua rezim:

- **Independensi sejati ($\\rho = 0$) itu makan-siang-gratis tanpa harga menu.** Di sini $D = \\sqrt{N}$: empat edge tak-berkorelasi nge-dua-kali-in Sharpe kamu, sembilan nge-tiga-kali-in, dan *gak ada plafon*. Makanya buku tak-berkorelasi itu sangat didamba — dan sangat langka. Edge yang benar-benar independen (misal strategi mean-reversion crypto, stat-arb di ekuitas, dan carry trade di FX) susah ditemu, karena kebanyakan strategi "beda" diam-diam loading di faktor risiko yang sama.

- **Korelasi apa pun ($\\rho > 0$) masang plafon.** Sekarang $D$ naik cepat di awal tapi mendatar, mendekati $1/\\sqrt{\\rho}$ dan gak pernah ngelewatinnya. Di $\\rho = 0.2$ yang sedang, plafonnya sekitar $2.24\\times$ — jadi dari 10 strategi ke 20 ke 100 nyaris gak ngegerakin jarum. **Korelasi, bukan jumlah strategi, yang nentuin batasnya.** Numpukin lebih banyak edge yang sama itu kayak nambah taruhan di koin yang sama: rasanya kayak diversifikasi tapi ngebeli nyaris gak ada.

Jadi kebijaksanaan bandar, dibikin presis: *menangin jangka panjang dengan nahan banyak taruhan yang risikonya nyala di waktu beda.* Skill-nya bukan nemu satu salinan lagi dari trade terbaikmu — tapi nemu trade yang **zig pas bukumu zag**.`,
      },
    },
    {
      id: 'formalization',
      heading: { en: 'Formalizing the diversification ratio', id: 'Memformalkan rasio diversifikasi' },
      visualization: {
        id: 'portfolio-of-edges-viz',
        component: 'PortfolioEdgeSim',
        title: {
          en: 'Diversification multiplier & the 1/√ρ ceiling',
          id: 'Pengali diversifikasi & plafon 1/√ρ',
        },
        description: {
          en: "Set the number of edges N, the per-edge Sharpe S, the pairwise correlation ρ, and the per-edge annual volatility, and the lab plots the diversification multiplier D(N,ρ) = √(N/(1+(N−1)ρ)) against N — the factor by which a book of N equal-weight, equicorrelated edges multiplies the Sharpe (Sharpe_port = S·D). The dashed reference curve is the ρ=0 case, D = √N, the unbounded 'free lunch' of true independence; the red dashed line is the ceiling D → 1/√ρ that any positive correlation imposes as N→∞ — so the gap between the two curves IS the cost of correlation. A Monte-Carlo panel reports how the median maximum-drawdown shrinks from a single edge to the pooled book, plus the realized correlation. Defaults N=6, S=0.8, ρ=0.2 give D=√3≈1.73, Sharpe_port≈1.39, and a ceiling of 1/√0.2≈2.24×.",
          id: "Atur jumlah edge N, Sharpe per-edge S, korelasi berpasangan ρ, dan volatilitas tahunan per-edge, lalu lab-nya memplot pengali diversifikasi D(N,ρ) = √(N/(1+(N−1)ρ)) terhadap N — faktor yang dengannya buku berisi N edge berbobot-sama dan equicorrelated mengali Sharpe (Sharpe_port = S·D). Kurva referensi putus-putus itu kasus ρ=0, D = √N, 'makan-siang-gratis' tak-terbatas dari independensi sejati; garis merah putus-putus itu plafon D → 1/√ρ yang dipaksakan korelasi positif apa pun saat N→∞ — jadi celah antara dua kurva itu ADALAH biaya korelasi. Panel Monte-Carlo melaporkan bagaimana median maximum-drawdown mengecil dari satu edge ke buku ter-pool, plus korelasi terukurnya. Default N=6, S=0.8, ρ=0.2 ngasih D=√3≈1.73, Sharpe_port≈1.39, dan plafon 1/√0.2≈2.24×.",
        },
        defaultParams: { nEdges: 6, sharpe: 0.8, rho: 0.2, volAnnual: 0.5 },
        height: 440,
      },
      body: {
        en: `**Setup.** Take $N$ edges at *equal weight* $1/N$, each with mean return $\\mu$, volatility $\\sigma$, and the *same* pairwise correlation $\\rho$ between any two (the **equicorrelation** or one-factor case). Equal weighting keeps the mean: the portfolio's expected return is just $\\mu$, the average of the parts. The work is all in the variance.

**Portfolio variance.** The variance of an equal-weight sum has $N$ "own" terms and $N(N-1)$ cross terms:
$$\\sigma_p^2 = \\frac{1}{N^2}\\left[\\,N\\sigma^2 + N(N-1)\\rho\\sigma^2\\,\\right] = \\frac{\\sigma^2}{N}\\bigl(1+(N-1)\\rho\\bigr)\\,.$$
Taking the square root gives the portfolio volatility
$$\\sigma_p = \\sigma\\sqrt{\\frac{1+(N-1)\\rho}{N}}\\,.$$

**The diversification ratio.** Define $D$ as how much smaller the book's volatility is than a single edge's, $D = \\sigma/\\sigma_p$:
$$\\boxed{\\,D(N,\\rho) = \\sqrt{\\dfrac{N}{1+(N-1)\\rho}}\\,}$$
Because the mean is unchanged, the Sharpe ratio scales by exactly this factor:
$$\\text{Sharpe}_{\\text{port}} = \\frac{\\mu}{\\sigma_p} = \\frac{\\mu}{\\sigma}\\cdot D = S\\cdot D\\,,\\qquad S = \\frac{\\mu}{\\sigma}\\,.$$

**The two regimes.** Everything important is in the limits of $D$:
- **$\\rho = 0$ (true independence):** $D = \\sqrt{N}$. The Sharpe grows without bound — the *free lunch*. Four uncorrelated edges double the Sharpe; nine triple it.
- **$\\rho > 0$, $N \\to \\infty$ (the ceiling):** $\\dfrac{N}{1+(N-1)\\rho} \\to \\dfrac{1}{\\rho}$, so
$$D \\;\\longrightarrow\\; \\frac{1}{\\sqrt{\\rho}}\\,.$$
**Correlation, not $N$, sets the limit.** At $\\rho = 0.2$ the ceiling is $1/\\sqrt{0.2}\\approx 2.24$; at $\\rho = 0.5$ it is $1/\\sqrt{0.5}\\approx 1.41$. Once you are correlated, no number of clones breaks through.

**Worked numbers (the sim's defaults).** Take $N = 6$, $S = 0.8$, $\\rho = 0.2$. Then
$$D = \\sqrt{\\frac{6}{1+5(0.2)}} = \\sqrt{\\frac{6}{2}} = \\sqrt{3} \\approx 1.73\\,,$$
so $\\text{Sharpe}_{\\text{port}} = 0.8\\times 1.73 \\approx 1.39$, against a ceiling of $\\approx 2.24$. Six edges already capture most of the available benefit; the next several barely move $D$.

**Diminishing returns, quantified.** At $\\rho = 0.2$: $D(2)\\approx 1.29$, $D(6)\\approx 1.73$, $D(10)\\approx 1.89$, $D(20)\\approx 2.04$ — versus the ceiling $2.24$. Going from 10 to 20 strategies buys only $\\sim 0.15\\times$ of Sharpe. Contrast $\\rho = 0$: $D(6)\\approx 2.45$, $D(10)\\approx 3.16$, climbing forever.

**Drawdown shrinks too.** The same $1/D$ volatility compression squeezes the *path*: the simulator's Monte-Carlo panel shows the median maximum-drawdown falling from a single edge to the pooled book — the survival payoff that ties back to [expectancy and risk-of-ruin](item:traderxo-expectancy).

The lab below plots $D$ vs $N$ for your chosen $\\rho$, draws the $\\rho=0$ $\\sqrt{N}$ reference and the $1/\\sqrt{\\rho}$ ceiling, and runs the equicorrelated one-factor model $z_i = \\sqrt{\\rho}\\,c + \\sqrt{1-\\rho}\\,e_i$ to show the drawdown reduction — so you can *see* the gap between the free lunch and the priced one.`,
        id: `**Setup.** Ambil $N$ edge di *bobot sama* $1/N$, masing-masing dengan return rata-rata $\\mu$, volatilitas $\\sigma$, dan korelasi berpasangan $\\rho$ yang *sama* antara dua mana pun (kasus **equicorrelation** atau satu-faktor). Pembobotan sama nahan rata-ratanya: return harapan portfolio cuma $\\mu$, rata-rata dari bagian-bagiannya. Kerjanya semua di varians.

**Varians portfolio.** Varians dari jumlah berbobot-sama punya $N$ suku "sendiri" dan $N(N-1)$ suku-silang:
$$\\sigma_p^2 = \\frac{1}{N^2}\\left[\\,N\\sigma^2 + N(N-1)\\rho\\sigma^2\\,\\right] = \\frac{\\sigma^2}{N}\\bigl(1+(N-1)\\rho\\bigr)\\,.$$
Ngambil akar-nya ngasih volatilitas portfolio
$$\\sigma_p = \\sigma\\sqrt{\\frac{1+(N-1)\\rho}{N}}\\,.$$

**Rasio diversifikasi.** Definisikan $D$ sebagai seberapa lebih kecil volatilitas buku dari satu edge, $D = \\sigma/\\sigma_p$:
$$\\boxed{\\,D(N,\\rho) = \\sqrt{\\dfrac{N}{1+(N-1)\\rho}}\\,}$$
Karena rata-ratanya gak berubah, rasio Sharpe-nya naik persis dengan faktor ini:
$$\\text{Sharpe}_{\\text{port}} = \\frac{\\mu}{\\sigma_p} = \\frac{\\mu}{\\sigma}\\cdot D = S\\cdot D\\,,\\qquad S = \\frac{\\mu}{\\sigma}\\,.$$

**Dua rezim.** Semua yang penting ada di limit $D$:
- **$\\rho = 0$ (independensi sejati):** $D = \\sqrt{N}$. Sharpe tumbuh tanpa batas — *makan-siang-gratis*. Empat edge tak-berkorelasi nge-dua-kali-in Sharpe; sembilan nge-tiga-kali-in.
- **$\\rho > 0$, $N \\to \\infty$ (plafon):** $\\dfrac{N}{1+(N-1)\\rho} \\to \\dfrac{1}{\\rho}$, jadi
$$D \\;\\longrightarrow\\; \\frac{1}{\\sqrt{\\rho}}\\,.$$
**Korelasi, bukan $N$, yang nentuin batasnya.** Di $\\rho = 0.2$ plafonnya $1/\\sqrt{0.2}\\approx 2.24$; di $\\rho = 0.5$ jadi $1/\\sqrt{0.5}\\approx 1.41$. Begitu kamu berkorelasi, gak ada jumlah klon yang nembus.

**Angka terkerjakan (default sim-nya).** Ambil $N = 6$, $S = 0.8$, $\\rho = 0.2$. Maka
$$D = \\sqrt{\\frac{6}{1+5(0.2)}} = \\sqrt{\\frac{6}{2}} = \\sqrt{3} \\approx 1.73\\,,$$
jadi $\\text{Sharpe}_{\\text{port}} = 0.8\\times 1.73 \\approx 1.39$, melawan plafon $\\approx 2.24$. Enam edge udah nangkep sebagian besar manfaat yang ada; beberapa berikutnya nyaris gak ngegerakin $D$.

**Hasil yang berkurang, dikuantifikasi.** Di $\\rho = 0.2$: $D(2)\\approx 1.29$, $D(6)\\approx 1.73$, $D(10)\\approx 1.89$, $D(20)\\approx 2.04$ — versus plafon $2.24$. Dari 10 ke 20 strategi cuma ngebeli $\\sim 0.15\\times$ Sharpe. Kontraskan $\\rho = 0$: $D(6)\\approx 2.45$, $D(10)\\approx 3.16$, naik selamanya.

**Drawdown juga mengecil.** Kompresi volatilitas $1/D$ yang sama meremas *path*-nya: panel Monte-Carlo simulator nunjukin median maximum-drawdown turun dari satu edge ke buku ter-pool — bayaran bertahan yang nyambung balik ke [expectancy dan risk-of-ruin](item:traderxo-expectancy).

Lab di bawah memplot $D$ terhadap $N$ buat $\\rho$ pilihanmu, ngegambar referensi $\\sqrt{N}$ $\\rho=0$ dan plafon $1/\\sqrt{\\rho}$, dan njalanin model satu-faktor equicorrelated $z_i = \\sqrt{\\rho}\\,c + \\sqrt{1-\\rho}\\,e_i$ buat nunjukin reduksi drawdown — jadi kamu bisa *lihat* celah antara makan-siang-gratis dan yang berharga.`,
      },
    },
    {
      id: 'worked-example',
      heading: { en: 'Worked example: building a three-then-six edge book', id: 'Contoh: membangun buku tiga-lalu-enam edge' },
      body: {
        en: `**Step 1 — One edge as the baseline.** Suppose each of your edges runs at Sharpe $S = 0.8$ and annual volatility $\\sigma = 50\\%$ (typical for an aggressive crypto strategy). On its own, an $S = 0.8$ edge is decent but lumpy — long losing stretches are normal, and the drawdowns test your discipline.

**Step 2 — Add a second, uncorrelated edge ($\\rho = 0$).** Two truly independent edges give
$$D = \\sqrt{\\frac{2}{1+1(0)}} = \\sqrt{2} \\approx 1.41\\,,\\qquad \\text{Sharpe}_{\\text{port}} = 0.8\\times 1.41 \\approx 1.13\\,.$$
The expected return per unit of capital is unchanged, but the volatility dropped by ~29%. You did nothing to either edge — the improvement is *pure correlation structure*.

**Step 3 — But your edges are not really independent ($\\rho = 0.2$).** Be honest: two crypto strategies usually share a market-beta factor, so set $\\rho = 0.2$. Now
$$D = \\sqrt{\\frac{2}{1+1(0.2)}} = \\sqrt{\\frac{2}{1.2}} \\approx 1.29\\,,\\qquad \\text{Sharpe}_{\\text{port}} \\approx 0.8\\times 1.29 \\approx 1.03\\,.$$
Still better than 0.80 — but the modest correlation already shaved the benefit from $1.41\\times$ to $1.29\\times$.

**Step 4 — Scale to six edges (the sim default).** Add four more, all at $\\rho = 0.2$:
$$D = \\sqrt{\\frac{6}{1+5(0.2)}} = \\sqrt{\\frac{6}{2}} = \\sqrt{3} \\approx 1.73\\,,\\qquad \\text{Sharpe}_{\\text{port}} \\approx 0.8\\times 1.73 \\approx 1.39\\,.$$
Six edges lifted the Sharpe from 0.80 to ~1.39. Good — but watch the next step closely.

**Step 5 — The ceiling bites.** Keep adding *correlated* edges:
$$D(10) \\approx 1.89,\\quad D(20) \\approx 2.04,\\quad D(\\infty) = \\frac{1}{\\sqrt{0.2}} \\approx 2.24\\,.$$
Going from 6 to 20 edges — more than tripling your operational complexity — buys only $1.73\\to 2.04$, about $0.3\\times$ of Sharpe, and you can *never* pass $2.24$. **The 20th correlated strategy barely helps.** The 6-edge book already captured $1.73/2.24 \\approx 77\\%$ of the entire achievable benefit.

**Step 6 — The counterfactual: what real independence would have bought.** Had those six edges been *truly* uncorrelated ($\\rho = 0$):
$$D = \\sqrt{6} \\approx 2.45\\,,\\qquad \\text{Sharpe}_{\\text{port}} \\approx 0.8\\times 2.45 \\approx 1.96\\,,$$
and ten of them would give $D = \\sqrt{10}\\approx 3.16$ — already past the *entire ceiling* of the correlated book, and still climbing. **This is the lesson in one comparison:** the difference between a Sharpe-1.4 book and a Sharpe-2.0+ book is not the *number* of strategies — it is whether they are genuinely uncorrelated. Chase orthogonality, not headcount.

**Step 7 — And the drawdown.** The same $D\\approx 1.73$ that lifts the Sharpe also compresses the path: in the simulator's Monte-Carlo panel, the median maximum-drawdown of the six-edge book is materially smaller than a single edge's — the diversified book *survives the path* that would have shaken you out of one strategy.

⟦Disclaimer: illustrative numbers only. Real $\\rho$ is estimated with error and drifts over time; equal weighting is a simplification. Not a recommendation.⟧`,
        id: `**Langkah 1 — Satu edge sebagai baseline.** Misal tiap edge-mu jalan di Sharpe $S = 0.8$ dan volatilitas tahunan $\\sigma = 50\\%$ (khas buat strategi crypto agresif). Sendirian, edge $S = 0.8$ itu lumayan tapi benjol-benjol — rentang rugi panjang itu normal, dan drawdown-nya nguji disiplinmu.

**Langkah 2 — Tambah edge kedua, tak-berkorelasi ($\\rho = 0$).** Dua edge yang benar-benar independen ngasih
$$D = \\sqrt{\\frac{2}{1+1(0)}} = \\sqrt{2} \\approx 1.41\\,,\\qquad \\text{Sharpe}_{\\text{port}} = 0.8\\times 1.41 \\approx 1.13\\,.$$
Return harapan per unit modal gak berubah, tapi volatilitas-nya turun ~29%. Kamu gak ngapa-ngapain ke edge mana pun — perbaikannya itu *murni struktur korelasi*.

**Langkah 3 — Tapi edge-mu gak benar-benar independen ($\\rho = 0.2$).** Jujur aja: dua strategi crypto biasanya berbagi faktor market-beta, jadi set $\\rho = 0.2$. Sekarang
$$D = \\sqrt{\\frac{2}{1+1(0.2)}} = \\sqrt{\\frac{2}{1.2}} \\approx 1.29\\,,\\qquad \\text{Sharpe}_{\\text{port}} \\approx 0.8\\times 1.29 \\approx 1.03\\,.$$
Masih lebih baik dari 0.80 — tapi korelasi sedang itu udah ngerampingin manfaatnya dari $1.41\\times$ ke $1.29\\times$.

**Langkah 4 — Skala ke enam edge (default sim).** Tambah empat lagi, semua di $\\rho = 0.2$:
$$D = \\sqrt{\\frac{6}{1+5(0.2)}} = \\sqrt{\\frac{6}{2}} = \\sqrt{3} \\approx 1.73\\,,\\qquad \\text{Sharpe}_{\\text{port}} \\approx 0.8\\times 1.73 \\approx 1.39\\,.$$
Enam edge ngangkat Sharpe dari 0.80 ke ~1.39. Bagus — tapi perhatikan langkah berikutnya dengan cermat.

**Langkah 5 — Plafon menggigit.** Terus nambah edge *berkorelasi*:
$$D(10) \\approx 1.89,\\quad D(20) \\approx 2.04,\\quad D(\\infty) = \\frac{1}{\\sqrt{0.2}} \\approx 2.24\\,.$$
Dari 6 ke 20 edge — lebih dari nge-tiga-kali-in kompleksitas operasionalmu — cuma ngebeli $1.73\\to 2.04$, sekitar $0.3\\times$ Sharpe, dan kamu *gak pernah* bisa ngelewatin $2.24$. **Strategi berkorelasi ke-20 nyaris gak nolong.** Buku 6-edge udah nangkep $1.73/2.24 \\approx 77\\%$ dari seluruh manfaat yang bisa-dicapai.

**Langkah 6 — Kontrafaktual: apa yang akan dibeli independensi nyata.** Andai enam edge itu *benar-benar* tak-berkorelasi ($\\rho = 0$):
$$D = \\sqrt{6} \\approx 2.45\\,,\\qquad \\text{Sharpe}_{\\text{port}} \\approx 0.8\\times 2.45 \\approx 1.96\\,,$$
dan sepuluh dari mereka bakal ngasih $D = \\sqrt{10}\\approx 3.16$ — udah ngelewatin *seluruh plafon* buku berkorelasi, dan masih naik. **Ini pelajarannya dalam satu perbandingan:** beda antara buku Sharpe-1.4 dan buku Sharpe-2.0+ itu bukan *jumlah* strategi — tapi apakah mereka benar-benar tak-berkorelasi. Kejar ortogonalitas, bukan jumlah-kepala.

**Langkah 7 — Dan drawdown-nya.** $D\\approx 1.73$ yang sama yang ngangkat Sharpe juga ngompres path-nya: di panel Monte-Carlo simulator, median maximum-drawdown buku enam-edge jauh lebih kecil dari satu edge — buku terdiversifikasi *bertahan di path* yang akan ngegoyang kamu keluar dari satu strategi.

⟦Disclaimer: angka ilustratif saja. $\\rho$ nyata diestimasi dengan error dan menyimpang seiring waktu; pembobotan sama itu penyederhanaan. Bukan rekomendasi.⟧`,
      },
    },
    {
      id: 'applications',
      heading: { en: 'Applications', id: 'Aplikasi' },
      body: {
        en: `**Run an uncorrelated book, not a louder one.** The first application is a discipline of *strategy selection*. When you evaluate a candidate edge for your book, the right question is not "is its standalone Sharpe high?" but "how correlated is it with what I already run?" A mediocre edge that is *uncorrelated* with your book can raise the portfolio Sharpe more than an excellent edge that is correlated with it — because the marginal $D$ benefit lives entirely in the off-diagonal. This is the precise content of "be the bookie": breadth of *independent* bets, not intensity of one.

**The active-management cousin: the fundamental law.** Grinold & Kahn's **fundamental law of active management** states $\\text{IR} = \\text{IC}\\cdot\\sqrt{\\text{breadth}}$ — your information ratio equals your skill (the information coefficient, the correlation between forecast and outcome) times the square root of the number of *independent* bets you make per year. It is the same $\\sqrt{N}$ engine viewed from the alpha side: doubling your skill doubles IR, but you need *four times* the breadth to do the same. The shared moral with Markowitz: independent bets compound your edge at rate $\\sqrt{N}$ — and "independent" is the load-bearing word in both.

**Sizing and rebalancing.** Equal weight is the clean teaching case, but the same machinery extends to full mean-variance optimisation (weight each edge by its risk-adjusted contribution) and to **risk parity** (size each edge so it contributes equal *risk*, not equal capital). In practice, practitioners cap any single edge's risk budget so that one strategy's decay or blow-up cannot dominate the book — the portfolio analogue of TraderXO's "risk manager first."

**Edges decay — so the book must be refreshed.** A real edge is not permanent: crowding, regime change, and [overfit backtests that never existed live](item:backtest-overfitting-dsr) all erode it. A *single*-edge trader dies when their one edge decays. A *book* survives, because the decay of one strategy is buffered by the others — *provided* you keep sourcing new, uncorrelated edges to replace the fading ones. Diversification across edges is also diversification across *decay timing*.

**Market-making as a portfolio.** A market maker who is [the bookie / liquidity provider](item:liquidity-goblin-market-making) is already running a portfolio of many tiny, near-independent spread-capture bets across instruments and time — the canonical "many small uncorrelated edges" book. The same pooling that smooths a multi-strategy equity curve smooths the inventory P&L of a maker quoting hundreds of small two-sided bets.

**The crisis caveat — diversification fails when you need it most.** The dangerous failure mode is that $\\rho$ is not constant. In a funding-liquidity crisis, forced deleveraging makes *everything* sell at once and correlations jump toward 1 — **the ceiling $1/\\sqrt{\\rho}$ collapses exactly when you are relying on it** (Brunnermeier & Pedersen 2009; the "liquidity spiral"). A book that looks beautifully diversified in calm markets can behave like a single leveraged bet in a crash. So practitioners stress-test with *crisis* correlations, not historical-average ones, and keep dry powder for the regime where diversification temporarily stops working.`,
        id: `**Jalankan buku tak-berkorelasi, bukan yang lebih berisik.** Aplikasi pertama itu disiplin *seleksi strategi*. Pas kamu mengevaluasi edge kandidat buat bukumu, pertanyaan yang benar bukan "apakah Sharpe standalone-nya tinggi?" tapi "seberapa berkorelasi dia dengan yang udah kujalankan?" Edge biasa-biasa yang *tak-berkorelasi* dengan bukumu bisa ngangkat Sharpe portfolio lebih dari edge hebat yang berkorelasi dengannya — karena manfaat $D$ marginal hidup seluruhnya di off-diagonal. Ini isi presis dari "jadi bandar": keluasan taruhan *independen*, bukan intensitas satu.

**Sepupu active-management: hukum fundamental.** **Hukum fundamental active management** Grinold & Kahn menyatakan $\\text{IR} = \\text{IC}\\cdot\\sqrt{\\text{breadth}}$ — information ratio kamu sama dengan skill-mu (information coefficient, korelasi antara prakiraan dan hasil) dikali akar dari jumlah taruhan *independen* yang kamu bikin per tahun. Itu engine $\\sqrt{N}$ yang sama dilihat dari sisi alpha: nge-dua-kali-in skill nge-dua-kali-in IR, tapi kamu butuh breadth *empat kali* buat ngelakuin hal sama. Moral bersama dengan Markowitz: taruhan independen ngebunga-bungain edge-mu di laju $\\sqrt{N}$ — dan "independen" itu kata penyangga di keduanya.

**Sizing dan rebalancing.** Bobot sama itu kasus pengajaran bersih, tapi mesin yang sama meluas ke optimasi mean-variance penuh (bobotin tiap edge dengan kontribusi-disesuaikan-risikonya) dan ke **risk parity** (size tiap edge biar dia nyumbang *risiko* sama, bukan modal sama). Dalam praktik, praktisi nge-cap budget risiko tiap edge tunggal biar peluruhan atau ledakan satu strategi gak bisa mendominasi buku — analog portfolio dari "manajer risiko dulu"-nya TraderXO.

**Edge meluruh — jadi buku harus disegarkan.** Edge nyata gak permanen: crowding, perubahan rezim, dan [backtest overfit yang gak pernah ada di live](item:backtest-overfitting-dsr) semua ngikis dia. Trader *satu*-edge mati pas satu edge-nya meluruh. Sebuah *buku* bertahan, karena peluruhan satu strategi di-buffer yang lain — *asalkan* kamu terus nge-source edge baru tak-berkorelasi buat ngeganti yang memudar. Diversifikasi lintas edge juga diversifikasi lintas *waktu peluruhan*.

**Market-making sebagai portfolio.** Market maker yang jadi [bandar / penyedia likuiditas](item:liquidity-goblin-market-making) udah njalanin portfolio dari banyak taruhan tangkap-spread mungil yang nyaris-independen lintas instrumen dan waktu — buku "banyak edge kecil tak-berkorelasi" kanonik. Pooling yang sama yang ngehalusin kurva ekuitas multi-strategi ngehalusin P&L inventaris maker yang ngutip ratusan taruhan dua-sisi kecil.

**Caveat krisis — diversifikasi gagal pas kamu paling butuh.** Mode kegagalan berbahayanya: $\\rho$ gak konstan. Di krisis funding-likuiditas, deleveraging terpaksa bikin *semuanya* jual bareng dan korelasi melonjak menuju 1 — **plafon $1/\\sqrt{\\rho}$ runtuh persis pas kamu lagi nyandar padanya** (Brunnermeier & Pedersen 2009; "spiral likuiditas"). Buku yang kelihatan indah-terdiversifikasi di market tenang bisa berperilaku kayak satu taruhan ber-leverage di crash. Jadi praktisi nge-stress-test dengan korelasi *krisis*, bukan rata-rata-historis, dan nyimpen amunisi kering buat rezim di mana diversifikasi sementara berhenti bekerja.`,
      },
    },
    {
      id: 'practice',
      heading: { en: 'Practice', id: 'Latihan' },
      body: {
        en: `**1.** You run 4 equal-weight edges, each Sharpe 0.6, with pairwise correlation ρ = 0. Compute the diversification ratio D and the portfolio Sharpe. What is the ceiling?

<details><summary>Answer</summary>
With ρ = 0, D = √N = √4 = 2. Portfolio Sharpe = S·D = 0.6 × 2 = 1.2. The ceiling for ρ = 0 is 1/√ρ → ∞: there is NO ceiling, the Sharpe grows as √N without bound. Doubling to 8 truly-uncorrelated edges would give D = √8 ≈ 2.83 (Sharpe ≈ 1.70), and so on. This is the "free lunch" of true independence — the reason an uncorrelated book is so valuable and so rare.
</details>

**2.** Same 4 edges, but now ρ = 0.25. Compute D and the portfolio Sharpe, and state the ceiling. How much of the ceiling have you already captured?

<details><summary>Answer</summary>
D = √(N/(1+(N−1)ρ)) = √(4/(1+3×0.25)) = √(4/1.75) = √2.286 ≈ 1.51. Portfolio Sharpe = 0.6 × 1.51 ≈ 0.91. The ceiling is 1/√ρ = 1/√0.25 = 1/0.5 = 2. So 4 correlated edges already reach D ≈ 1.51 of a maximum 2 — about 76% of the entire achievable benefit. Adding many more correlated edges can only crawl the remaining ~0.49× toward the ceiling of 2; it can never exceed it. Compare with Q1: the same 4 edges gave D = 2 when uncorrelated — correlation, not count, is the binding constraint.
</details>

**3.** Why does adding the 20th correlated strategy barely help, while adding a 2nd uncorrelated one helps a lot? Answer in terms of where the diversification benefit lives.

<details><summary>Answer</summary>
The benefit lives entirely in the CROSS-TERMS of the variance — the off-diagonal pairwise correlations. Portfolio variance is (σ²/N)(1+(N−1)ρ). When ρ = 0, the cross-terms vanish, so each added edge cuts variance by a full 1/N factor and D = √N grows without limit — a 2nd uncorrelated edge cuts volatility ~29%. When ρ > 0, the surviving cross-terms drag the variance toward σ²ρ as N grows, so D saturates at 1/√ρ. By the 20th correlated strategy you are already near that asymptote, so the marginal edge adds almost nothing: it is mostly redundant exposure to the same shared factor. The lesson: chase orthogonality (low ρ), not headcount (high N).
</details>

**4.** A trader says "my 12-strategy book is bulletproof — look how smooth the equity curve is." Using the crisis caveat, explain why this confidence can be dangerous.

<details><summary>Answer</summary>
The smooth curve was measured at the book's NORMAL-times correlation. But ρ is not constant. In a funding-liquidity crisis, forced deleveraging makes positions sell simultaneously and correlations JUMP toward 1 (Brunnermeier & Pedersen 2009, the liquidity spiral). As ρ → 1, the ceiling 1/√ρ → 1 and D → 1: the 12-strategy book temporarily behaves like a SINGLE leveraged bet, and its diversification protection evaporates exactly when it is needed most. Diversification "fails when you need it most." So the book should be stress-tested with CRISIS correlations (not historical averages), single-edge risk budgets should be capped, and dry powder kept for the regime where diversification stops working.
</details>

**5.** Connect this to the fundamental law of active management. If a manager has skill IC = 0.05, how does their information ratio scale with the number of independent bets, and what does that share with Markowitz?

<details><summary>Answer</summary>
The fundamental law (Grinold & Kahn) is IR = IC·√breadth, where breadth is the number of INDEPENDENT bets per year. With IC = 0.05, making 100 independent bets gives IR = 0.05 × √100 = 0.5; 400 bets gives IR = 0.05 × 20 = 1.0. So IR grows with the SQUARE ROOT of the number of independent bets — the same √N engine as the diversification ratio, viewed from the alpha side instead of the risk side. The shared moral with Markowitz: independent bets compound your edge at rate √N, and "independent" is load-bearing in both — correlated bets do NOT add breadth, just as correlated edges do not raise D past 1/√ρ.
</details>`,
        id: `**1.** Kamu njalanin 4 edge berbobot-sama, masing-masing Sharpe 0.6, dengan korelasi berpasangan ρ = 0. Hitung rasio diversifikasi D dan Sharpe portfolio. Apa plafonnya?

<details><summary>Jawaban</summary>
Dengan ρ = 0, D = √N = √4 = 2. Sharpe portfolio = S·D = 0.6 × 2 = 1.2. Plafon buat ρ = 0 itu 1/√ρ → ∞: GAK ADA plafon, Sharpe-nya tumbuh sebagai √N tanpa batas. Nge-dua-kali-in ke 8 edge yang benar-benar-tak-berkorelasi bakal ngasih D = √8 ≈ 2.83 (Sharpe ≈ 1.70), dan seterusnya. Ini "makan-siang-gratis" dari independensi sejati — alasan buku tak-berkorelasi itu sangat berharga dan sangat langka.
</details>

**2.** 4 edge yang sama, tapi sekarang ρ = 0.25. Hitung D dan Sharpe portfolio, dan nyatakan plafonnya. Berapa banyak dari plafon yang udah kamu tangkep?

<details><summary>Jawaban</summary>
D = √(N/(1+(N−1)ρ)) = √(4/(1+3×0.25)) = √(4/1.75) = √2.286 ≈ 1.51. Sharpe portfolio = 0.6 × 1.51 ≈ 0.91. Plafonnya 1/√ρ = 1/√0.25 = 1/0.5 = 2. Jadi 4 edge berkorelasi udah nyampe D ≈ 1.51 dari maksimum 2 — sekitar 76% dari seluruh manfaat yang bisa-dicapai. Nambah jauh lebih banyak edge berkorelasi cuma bisa merangkak sisa ~0.49× menuju plafon 2; gak pernah bisa ngelewatinnya. Bandingin dengan Q1: 4 edge yang sama ngasih D = 2 pas tak-berkorelasi — korelasi, bukan jumlah, yang jadi kendala mengikat.
</details>

**3.** Kenapa nambah strategi berkorelasi ke-20 nyaris gak nolong, sementara nambah satu tak-berkorelasi ke-2 nolong banyak? Jawab dari segi di mana manfaat diversifikasi hidup.

<details><summary>Jawaban</summary>
Manfaatnya hidup seluruhnya di SUKU-SILANG varians — korelasi berpasangan off-diagonal. Varians portfolio itu (σ²/N)(1+(N−1)ρ). Pas ρ = 0, suku-silang-nya lenyap, jadi tiap edge tambahan ngepotong varians dengan faktor penuh 1/N dan D = √N tumbuh tanpa batas — edge tak-berkorelasi ke-2 ngepotong volatilitas ~29%. Pas ρ > 0, suku-silang yang bertahan narik varians menuju σ²ρ saat N tumbuh, jadi D jenuh di 1/√ρ. Di strategi berkorelasi ke-20 kamu udah dekat asimtot itu, jadi edge marginal nambah nyaris gak ada: dia kebanyakan eksposur redundan ke faktor bersama yang sama. Pelajarannya: kejar ortogonalitas (ρ rendah), bukan jumlah-kepala (N tinggi).
</details>

**4.** Seorang trader bilang "buku 12-strategi gue anti-peluru — lihat tuh kurva ekuitasnya halus." Pakai caveat krisis, jelasin kenapa keyakinan ini bisa berbahaya.

<details><summary>Jawaban</summary>
Kurva halus itu diukur di korelasi WAKTU-NORMAL buku-nya. Tapi ρ gak konstan. Di krisis funding-likuiditas, deleveraging terpaksa bikin posisi jual serentak dan korelasi MELONJAK menuju 1 (Brunnermeier & Pedersen 2009, spiral likuiditas). Saat ρ → 1, plafon 1/√ρ → 1 dan D → 1: buku 12-strategi sementara berperilaku kayak SATU taruhan ber-leverage, dan perlindungan diversifikasi-nya menguap persis pas paling dibutuhin. Diversifikasi "gagal pas kamu paling butuh." Jadi buku harus di-stress-test dengan korelasi KRISIS (bukan rata-rata historis), budget risiko satu-edge harus di-cap, dan amunisi kering disimpen buat rezim di mana diversifikasi berhenti bekerja.
</details>

**5.** Sambungin ini ke hukum fundamental active management. Kalau seorang manajer punya skill IC = 0.05, gimana information ratio-nya naik dengan jumlah taruhan independen, dan apa yang dia bagi dengan Markowitz?

<details><summary>Jawaban</summary>
Hukum fundamental (Grinold & Kahn) itu IR = IC·√breadth, di mana breadth itu jumlah taruhan INDEPENDEN per tahun. Dengan IC = 0.05, bikin 100 taruhan independen ngasih IR = 0.05 × √100 = 0.5; 400 taruhan ngasih IR = 0.05 × 20 = 1.0. Jadi IR tumbuh dengan AKAR jumlah taruhan independen — engine √N yang sama dengan rasio diversifikasi, dilihat dari sisi alpha ketimbang sisi risiko. Moral bersama dengan Markowitz: taruhan independen ngebunga-bungain edge-mu di laju √N, dan "independen" itu penyangga di keduanya — taruhan berkorelasi TIDAK nambah breadth, persis kayak edge berkorelasi gak ngangkat D melewati 1/√ρ.
</details>`,
      },
    },
    {
      id: 'connections',
      heading: { en: 'Connections', id: 'Koneksi' },
      body: {
        en: `- **The prerequisite — one edge first**: [TraderXO's engineering an edge](item:traderxo-expectancy) — you cannot run a *book* of edges until you can build and validate *one* positive-expectancy edge with disciplined sizing. This module is the portfolio-level generalisation of that survival logic: the diversification ratio is what turns a fragile single edge into a robust book, and the same pooling that lifts the Sharpe shrinks the risk-of-ruin.
- **Why each edge is fragile**: [backtest overfitting & the deflated Sharpe ratio](item:backtest-overfitting-dsr) — a single backtested edge overstates itself and decays live, which is *precisely* why you need many of them. Diversification across edges is also insurance against any one of them having been an overfit illusion.
- **The bookie / liquidity-provider archetype**: [LiquidityGoblin's market-making](item:liquidity-goblin-market-making) — "be the bookie" made literal: a market maker already runs a portfolio of many tiny, near-independent spread-capture bets. The diversification math here is the formal account of *why* that book of small edges has such a smooth equity curve.
- **The order-flow → uncorrelated-book arc**: [Tradingriot's order-flow + VRP](item:tradingriot-orderflow-vrp) — the explicit practitioner move from a single discretionary setup to *combining payout curves* across uncorrelated strategies. This module supplies the mean-variance math beneath that graduation.`,
        id: `- **Prasyarat — satu edge dulu**: [merekayasa edge ala TraderXO](item:traderxo-expectancy) — kamu gak bisa njalanin *buku* edge sampai kamu bisa membangun dan memvalidasi *satu* edge ber-expectancy-positif dengan sizing disiplin. Module ini generalisasi level-portfolio dari logika bertahan itu: rasio diversifikasi yang ngubah satu edge rapuh jadi buku kokoh, dan pooling yang sama yang ngangkat Sharpe ngecilin risk-of-ruin.
- **Kenapa tiap edge rapuh**: [overfitting backtest & deflated Sharpe ratio](item:backtest-overfitting-dsr) — satu edge ter-backtest melebih-lebihkan dirinya dan meluruh di live, yang *persis* kenapa kamu butuh banyak dari mereka. Diversifikasi lintas edge juga asuransi terhadap salah satunya yang ternyata ilusi overfit.
- **Arketipe bandar / penyedia-likuiditas**: [market-making ala LiquidityGoblin](item:liquidity-goblin-market-making) — "jadi bandar" dibikin harfiah: market maker udah njalanin portfolio dari banyak taruhan tangkap-spread mungil yang nyaris-independen. Matematika diversifikasi di sini adalah penjelasan formal *kenapa* buku edge kecil itu punya kurva ekuitas yang begitu halus.
- **Arc order-flow → buku-tak-berkorelasi**: [order-flow + VRP Tradingriot](item:tradingriot-orderflow-vrp) — perpindahan praktisi eksplisit dari satu setup diskresioner ke *menggabungkan kurva payout* lintas strategi tak-berkorelasi. Module ini menyediakan matematika mean-variance di bawah lulus itu.`,
      },
    },
    {
      id: 'sources',
      heading: { en: 'Sources', id: 'Sumber' },
      body: {
        en: `Compiled from Harry Markowitz's foundational mean-variance theory and its practitioner usage in the trading-education space. Evidence-tagged [Established] (peer-reviewed / canonical) vs [Practitioner] (widely-used framing). **Educational, NOT financial advice. Diversification reduces risk only under assumptions (stable, less-than-perfect correlations) that can fail — correlations rise toward 1 in a crisis. The numbers here are illustrative; estimated correlations are noisy and drift over time, equal weighting is a simplification, and no portfolio construction guarantees a profit or prevents a loss.**

*The founding result (mean-variance diversification):*
- **Markowitz, H. M.** (1952). "Portfolio Selection." *The Journal of Finance* 7(1), 77–91. The founding paper: risk lives in the covariance matrix, and diversification across less-than-perfectly-correlated assets lowers portfolio variance for a given return (the efficient frontier). [Established]
- **Markowitz, H. M.** (1959). *Portfolio Selection: Efficient Diversification of Investments.* Wiley / Cowles Foundation Monograph 16. The book-length treatment. [Established]
- The **equal-weight equicorrelation identity** used here, σ_p = σ√((1+(N−1)ρ)/N) ⇒ D(N,ρ) = √(N/(1+(N−1)ρ)) with the limits D = √N (ρ=0) and D → 1/√ρ (N→∞), is the standard one-factor specialisation of Markowitz's covariance matrix. [Established]

*The active-management cousin:*
- **Grinold, R. C. & Kahn, R. N.** (1999). *Active Portfolio Management: A Quantitative Approach for Producing Superior Returns and Controlling Risk* (2nd ed.). McGraw-Hill. The "fundamental law of active management," IR = IC·√breadth — the √(independent bets) engine on the alpha side. [Established]
- **Sharpe, W. F.** (1964). "Capital Asset Prices: A Theory of Market Equilibrium under Conditions of Risk." *The Journal of Finance* 19(3), 425–442. The CAPM and the Sharpe ratio, built directly on Markowitz mean-variance. [Established]

*The crisis caveat (diversification fails when you need it):*
- **Brunnermeier, M. K. & Pedersen, L. H.** (2009). "Market Liquidity and Funding Liquidity." *The Review of Financial Studies* 22(6), 2201–2238. Funding-liquidity spirals: forced deleveraging makes correlations jump toward 1, so diversification weakens exactly in a crash. [Established]

*Practitioner framing (the "uncorrelated book"):*
- **LiquidityGoblin** — "be the bookie": run many small, near-independent positive-expectancy bets rather than one big one. [Practitioner]
- **Tradingriot** — the graduation from a single discretionary setup to an "uncorrelated book," combining uncorrelated payout curves to smooth the equity curve. [Practitioner]

⟦This module is not affiliated with or endorsed by the practitioners cited; their phrasings are paraphrased for education. The interactive PortfolioEdgeSim implements the equicorrelation model exactly as described and is verified by scripts/verify-portfolio-sim.mjs.⟧`,
        id: `Dikompilasi dari teori mean-variance fondasional Harry Markowitz dan penggunaan praktisinya di ruang edukasi-trading. Ber-tag bukti [Established] (peer-review / kanonik) vs [Practitioner] (pembingkaian yang luas-dipakai). **Edukatif, BUKAN nasihat keuangan. Diversifikasi ngurangin risiko cuma di bawah asumsi (korelasi stabil, kurang-dari-sempurna) yang bisa gagal — korelasi naik menuju 1 di krisis. Angka di sini ilustratif; korelasi estimasi itu berisik dan menyimpang seiring waktu, pembobotan sama itu penyederhanaan, dan gak ada konstruksi portfolio yang menjamin profit atau mencegah rugi.**

*Hasil pendiri (diversifikasi mean-variance):*
- **Markowitz, H. M.** (1952). "Portfolio Selection." *The Journal of Finance* 7(1), 77–91. Makalah pendiri: risiko hidup di matriks kovarians, dan diversifikasi lintas aset yang kurang-dari-sempurna-berkorelasi nurunin varians portfolio buat return tertentu (efficient frontier). [Established]
- **Markowitz, H. M.** (1959). *Portfolio Selection: Efficient Diversification of Investments.* Wiley / Cowles Foundation Monograph 16. Perlakuan sepanjang-buku. [Established]
- **Identitas equicorrelation bobot-sama** yang dipakai di sini, σ_p = σ√((1+(N−1)ρ)/N) ⇒ D(N,ρ) = √(N/(1+(N−1)ρ)) dengan limit D = √N (ρ=0) dan D → 1/√ρ (N→∞), itu spesialisasi satu-faktor standar dari matriks kovarians Markowitz. [Established]

*Sepupu active-management:*
- **Grinold, R. C. & Kahn, R. N.** (1999). *Active Portfolio Management: A Quantitative Approach for Producing Superior Returns and Controlling Risk* (ed. ke-2). McGraw-Hill. "Hukum fundamental active management," IR = IC·√breadth — engine √(taruhan independen) di sisi alpha. [Established]
- **Sharpe, W. F.** (1964). "Capital Asset Prices: A Theory of Market Equilibrium under Conditions of Risk." *The Journal of Finance* 19(3), 425–442. CAPM dan rasio Sharpe, dibangun langsung di atas mean-variance Markowitz. [Established]

*Caveat krisis (diversifikasi gagal pas kamu butuh):*
- **Brunnermeier, M. K. & Pedersen, L. H.** (2009). "Market Liquidity and Funding Liquidity." *The Review of Financial Studies* 22(6), 2201–2238. Spiral funding-likuiditas: deleveraging terpaksa bikin korelasi melonjak menuju 1, jadi diversifikasi melemah persis di crash. [Established]

*Pembingkaian praktisi ("buku tak-berkorelasi"):*
- **LiquidityGoblin** — "jadi bandar": jalanin banyak taruhan ber-expectancy-positif yang kecil dan nyaris-independen ketimbang satu yang besar. [Practitioner]
- **Tradingriot** — lulus dari satu setup diskresioner ke "buku tak-berkorelasi," menggabungkan kurva payout tak-berkorelasi buat ngehalusin kurva ekuitas. [Practitioner]

⟦Module ini tidak berafiliasi dengan atau didukung praktisi yang dikutip; frasa mereka diparafrase buat edukasi. PortfolioEdgeSim interaktif mengimplementasikan model equicorrelation persis seperti dijelaskan dan diverifikasi oleh scripts/verify-portfolio-sim.mjs.⟧`,
      },
    },
  ],

  audio: { enabled: true },

  selfTest: [
    {
      sectionId: 'intuition',
      question: { en: `Why does pooling many edges raise the Sharpe ratio, and why does it only work if the edges are uncorrelated?`, id: `Kenapa ngegabungin banyak edge ngangkat rasio Sharpe, dan kenapa dia cuma jalan kalau edge-nya tak-berkorelasi?` },
      prompt: { en: 'Before continuing, try answering:', id: 'Sebelum lanjut, coba jawab:' },
      answer: {
        en: `Pooling N equal-weight edges PRESERVES the mean return (the portfolio's expected return is just the average of the parts) while SHRINKING the volatility — and since Sharpe = mean ÷ volatility, holding the mean fixed while cutting the volatility raises the Sharpe. The volatility shrinks because variances add with cross-terms for every pair: when edges are UNCORRELATED those cross-terms vanish, so the individual swings cancel out and the noise averages away fast (the bookie's law-of-large-numbers logic). When edges are CORRELATED, the cross-terms survive and the noise does not cancel — a thousand bets on the same coin flip is just one big bet in disguise. Formally the benefit is the diversification ratio D = √(N/(1+(N−1)ρ)): at ρ=0, D = √N grows without bound; at ρ>0, D saturates at 1/√ρ. So the whole payoff of diversification lives in the edges being genuinely independent.`,
        id: `Ngegabungin N edge berbobot-sama MEMPERTAHANKAN return rata-ratanya (return harapan portfolio cuma rata-rata bagian-bagiannya) sambil NGECILIN volatilitas-nya — dan karena Sharpe = rata-rata ÷ volatilitas, nahan rata-rata tetap sambil motong volatilitas ngangkat Sharpe. Volatilitas-nya mengecil karena varians nambah dengan suku-silang buat tiap pasangan: pas edge TAK-BERKORELASI suku-silang itu lenyap, jadi ayunan individual saling membatalkan dan noise-nya merata cepat (logika hukum-bilangan-besar bandar). Pas edge BERKORELASI, suku-silang-nya bertahan dan noise-nya gak membatalkan — seribu taruhan di koin yang sama itu cuma satu taruhan besar yang menyamar. Secara formal manfaatnya itu rasio diversifikasi D = √(N/(1+(N−1)ρ)): di ρ=0, D = √N tumbuh tanpa batas; di ρ>0, D jenuh di 1/√ρ. Jadi seluruh bayaran diversifikasi hidup di edge-nya yang benar-benar independen.`,
      },
    },
    {
      sectionId: 'formalization',
      question: { en: `Write the diversification ratio and its two limiting regimes, and explain why correlation — not the number of strategies — sets the ceiling.`, id: `Tulis rasio diversifikasi dan dua rezim limitnya, dan jelasin kenapa korelasi — bukan jumlah strategi — yang nentuin plafon.` },
      prompt: { en: 'Before continuing, try answering:', id: 'Sebelum lanjut, coba jawab:' },
      answer: {
        en: `For N equal-weight edges each Sharpe S, vol σ, pairwise correlation ρ, the portfolio vol is σ_p = σ·√((1+(N−1)ρ)/N), so the diversification ratio is D(N,ρ) = σ/σ_p = √(N/(1+(N−1)ρ)) and Sharpe_port = S·D. Two regimes: (1) ρ = 0 ⇒ D = √N — the Sharpe grows WITHOUT BOUND (the "free lunch" of true independence). (2) ρ > 0, N → ∞ ⇒ N/(1+(N−1)ρ) → 1/ρ, so D → 1/√ρ — a hard CEILING. Correlation sets the limit because as N grows the variance is dragged toward σ²ρ by the surviving cross-terms: no matter how many correlated clones you add, the shared factor cannot be diversified away. E.g. at ρ = 0.2 the ceiling is 1/√0.2 ≈ 2.24, and a 6-edge book (D = √3 ≈ 1.73) already captures ~77% of it; going to 20 edges (D ≈ 2.04) barely helps. So the 20th correlated strategy adds almost nothing — chase orthogonality, not headcount.`,
        id: `Buat N edge berbobot-sama masing-masing Sharpe S, vol σ, korelasi berpasangan ρ, vol portfolio-nya σ_p = σ·√((1+(N−1)ρ)/N), jadi rasio diversifikasi-nya D(N,ρ) = σ/σ_p = √(N/(1+(N−1)ρ)) dan Sharpe_port = S·D. Dua rezim: (1) ρ = 0 ⇒ D = √N — Sharpe tumbuh TANPA BATAS ("makan-siang-gratis" dari independensi sejati). (2) ρ > 0, N → ∞ ⇒ N/(1+(N−1)ρ) → 1/ρ, jadi D → 1/√ρ — sebuah PLAFON keras. Korelasi yang nentuin batasnya karena saat N tumbuh varians-nya ditarik menuju σ²ρ oleh suku-silang yang bertahan: seberapa banyak pun klon berkorelasi yang kamu tambah, faktor bersama gak bisa didiversifikasi habis. Misal di ρ = 0.2 plafonnya 1/√0.2 ≈ 2.24, dan buku 6-edge (D = √3 ≈ 1.73) udah nangkep ~77%-nya; ke 20 edge (D ≈ 2.04) nyaris gak nolong. Jadi strategi berkorelasi ke-20 nyaris gak nambah apa-apa — kejar ortogonalitas, bukan jumlah-kepala.`,
      },
    },
    {
      sectionId: 'applications',
      question: { en: `What is the funding-liquidity caveat, and how does it relate to Grinold & Kahn's fundamental law of active management?`, id: `Apa caveat funding-likuiditas, dan gimana hubungannya dengan hukum fundamental active management Grinold & Kahn?` },
      prompt: { en: 'Before continuing, try answering:', id: 'Sebelum lanjut, coba jawab:' },
      answer: {
        en: `The funding-liquidity caveat (Brunnermeier & Pedersen 2009) is that ρ is NOT constant: in a crisis, forced deleveraging makes everything sell at once and correlations jump toward 1 (the liquidity spiral). As ρ → 1, the ceiling 1/√ρ → 1 and D → 1, so a beautifully diversified book temporarily behaves like a SINGLE leveraged bet — "diversification fails when you need it most." The link to Grinold & Kahn's fundamental law (IR = IC·√breadth): both results turn on the word INDEPENDENT. The fundamental law says your information ratio grows as the square root of the number of INDEPENDENT bets (breadth) — the same √N engine as the diversification ratio, viewed from the alpha side. And both break the same way: correlated bets do not add genuine breadth (IR does not grow), just as correlated edges do not raise D past 1/√ρ. A crisis that collapses ρ → 1 destroys both your effective breadth AND your diversification at once.`,
        id: `Caveat funding-likuiditas (Brunnermeier & Pedersen 2009) itu bahwa ρ TIDAK konstan: di krisis, deleveraging terpaksa bikin semuanya jual bareng dan korelasi melonjak menuju 1 (spiral likuiditas). Saat ρ → 1, plafon 1/√ρ → 1 dan D → 1, jadi buku yang indah-terdiversifikasi sementara berperilaku kayak SATU taruhan ber-leverage — "diversifikasi gagal pas kamu paling butuh." Kaitannya ke hukum fundamental Grinold & Kahn (IR = IC·√breadth): kedua hasil berputar pada kata INDEPENDEN. Hukum fundamental bilang information ratio kamu tumbuh sebagai akar jumlah taruhan INDEPENDEN (breadth) — engine √N yang sama dengan rasio diversifikasi, dilihat dari sisi alpha. Dan keduanya rusak dengan cara sama: taruhan berkorelasi gak nambah breadth sejati (IR gak tumbuh), persis kayak edge berkorelasi gak ngangkat D melewati 1/√ρ. Krisis yang ngeruntuhin ρ → 1 ngancurin breadth efektifmu DAN diversifikasimu sekaligus.`,
      },
    },
  ],
};
