// ─────────────────────────────────────────────────────────────────────────
// Trading domain — BACKTEST OVERFITTING & THE DEFLATED SHARPE RATIO. The
// rigorous companion to the expectancy module: expectancy asks "do you HAVE an
// edge?"; this asks "is the edge REAL, or did you fit noise by trying many
// strategies?" The core villain is SELECTION BIAS under multiple testing — test
// N skill-less strategies and report the best, and the winning Sharpe is
// inflated even with zero true skill. The expected maximum of N trials (in
// Sharpe units) is E[max] ≈ √V·[(1−γ)Z⁻¹(1−1/N) + γ Z⁻¹(1−1/(N·e))]; the
// Sharpe estimate itself carries Lo's standard error; the DEFLATED Sharpe Ratio
// is the Probabilistic Sharpe Ratio benchmarked against that N-trial expected
// max. Carries the interactive BacktestOverfitSim (js/viz.js; verified by
// scripts/verify-backtest-sim.mjs). Evidence-tagged [Established]. Educational,
// NOT financial advice.
// ─────────────────────────────────────────────────────────────────────────

export const CONTENT = {
  itemId: 'backtest-overfitting-dsr',
  estimatedReadMinutes: 32,

  author: {
    fullName: { en: 'Bailey, López de Prado, Harvey, Liu, Zhu & Lo — backtest overfitting and the Deflated Sharpe Ratio', id: 'Bailey, López de Prado, Harvey, Liu, Zhu & Lo — backtest overfitting dan Deflated Sharpe Ratio' },
    affiliation: {
      en: 'A cluster of quantitative-finance researchers who formalized selection bias / multiple-testing in trading research. David H. Bailey (Lawrence Berkeley National Laboratory) and Marcos López de Prado (then Hess Energy Trading / Guggenheim, later AQR and Cornell) co-authored the Deflated Sharpe Ratio; with Jonathan M. Borwein (mathematician) and Qiji Jim Zhu (Western Michigan University) they wrote the AMS "backtest overfitting" essay. Campbell R. Harvey (Duke, and a former Editor of the Journal of Finance) with Yan Liu and Heqing Zhu raised the cross-sectional t-statistic hurdle. Andrew W. Lo (MIT Sloan) supplied the statistical distribution of the Sharpe ratio itself.',
      id: 'Sekelompok periset keuangan kuantitatif yang memformalkan selection bias / multiple-testing dalam riset trading. David H. Bailey (Lawrence Berkeley National Laboratory) dan Marcos López de Prado (dulu Hess Energy Trading / Guggenheim, kemudian AQR dan Cornell) menulis bersama Deflated Sharpe Ratio; dengan Jonathan M. Borwein (matematikawan) dan Qiji Jim Zhu (Western Michigan University) mereka menulis esai "backtest overfitting" di AMS. Campbell R. Harvey (Duke, mantan Editor Journal of Finance) bersama Yan Liu dan Heqing Zhu menaikkan ambang t-statistik lintas-seksi. Andrew W. Lo (MIT Sloan) menyediakan distribusi statistik dari Sharpe ratio itu sendiri.',
    },
    tagline: {
      en: "A great backtest is not evidence of skill until you correct for how many strategies you tried. Try enough, and the best one looks brilliant by luck alone. Deflate the Sharpe by the search, or you are fooling yourself.",
      id: "Backtest hebat itu bukan bukti skill sampai kamu koreksi BERAPA strategi yang kamu coba. Coba cukup banyak, dan yang terbaik kelihatan brilian cuma karena keberuntungan. Deflasikan Sharpe-nya dengan ukuran pencarian, atau kamu lagi nipu diri sendiri.",
    },
    bio: {
      en: `This module has no single charismatic author — it is the *statistical conscience* of quantitative trading, assembled from a handful of papers that all say the same uncomfortable thing: **if you search hard enough, you will find a beautiful backtest that means nothing.**

The keystone is **Bailey & López de Prado (2014)**, *The Deflated Sharpe Ratio*. They took the **Probabilistic Sharpe Ratio** — which already corrected a reported Sharpe for sample length and non-normal returns — and added the missing correction: the **number of trials**. Their *Deflated* Sharpe Ratio asks "is this Sharpe higher than the best you would expect from $N$ skill-less strategies?" In the companion *Notices of the AMS* essay (**Bailey, Borwein, López de Prado & Zhu, 2014**) they called the failure to report $N$ "pseudo-mathematics and financial charlatanism," and proved that with enough configurations you can manufacture an arbitrarily high in-sample Sharpe with **zero** true edge.

**Harvey, Liu & Zhu (2016)** made the same point for the academic factor zoo: with hundreds of factors tested, the usual "$t>2$" bar is far too low — a real factor should clear roughly **$t>3$**. **Andrew Lo (2002)** supplied the foundation everyone builds on: the Sharpe ratio is an *estimate* with a **standard error** that grows with the strategy's skew and kurtosis and shrinks only with sample length. **López de Prado's** *Advances in Financial Machine Learning* (2018) turned the whole agenda into a practitioner toolkit (purged / combinatorial cross-validation, the minimum backtest length, deflated metrics).

⟦Note: this is established quantitative statistics, evidence-tagged [Established]. Educational, not financial advice.⟧`,
      id: `Module ini gak punya satu penulis karismatik — dia *hati nurani statistik* dari trading kuantitatif, dirakit dari segelintir paper yang semuanya bilang hal gak-enak yang sama: **kalau kamu nyari cukup keras, kamu bakal nemu backtest cantik yang gak berarti apa-apa.**

Batu kuncinya adalah **Bailey & López de Prado (2014)**, *The Deflated Sharpe Ratio*. Mereka ngambil **Probabilistic Sharpe Ratio** — yang udah ngoreksi Sharpe yang dilaporkan buat panjang sampel dan return non-normal — dan nambah koreksi yang hilang: **jumlah percobaan**. *Deflated* Sharpe Ratio mereka nanya "apakah Sharpe ini lebih tinggi dari yang terbaik yang kamu harapin dari $N$ strategi tanpa-skill?" Di esai pendamping *Notices of the AMS* (**Bailey, Borwein, López de Prado & Zhu, 2014**) mereka nyebut kegagalan ngelaporin $N$ sebagai "pseudo-matematika dan kecurangan finansial," dan ngebuktiin bahwa dengan cukup konfigurasi kamu bisa bikin Sharpe in-sample yang setinggi apa pun dengan edge sejati **nol**.

**Harvey, Liu & Zhu (2016)** bikin poin yang sama buat kebun-binatang faktor akademis: dengan ratusan faktor diuji, bar biasa "$t>2$" jauh terlalu rendah — faktor asli harusnya lolos kira-kira **$t>3$**. **Andrew Lo (2002)** nyediain fondasi yang semua orang bangun di atasnya: Sharpe ratio itu *estimasi* dengan **standard error** yang tumbuh dengan skew dan kurtosis strategi dan mengecil cuma dengan panjang sampel. *Advances in Financial Machine Learning* (2018) **López de Prado** ngubah seluruh agenda jadi toolkit praktisi (purged / combinatorial cross-validation, minimum backtest length, metrik ter-deflasi).

⟦Catatan: ini statistik kuantitatif mapan, ber-tag [Established]. Edukatif, bukan nasihat keuangan.⟧`,
    },
    focus: {
      en: `The central object is the **Deflated Sharpe Ratio (DSR)**. Start with the **Probabilistic Sharpe Ratio**, $\\mathrm{PSR}(SR^\\*) = \\Phi\\!\\big[(\\hat{SR}-SR^\\*)/\\sigma(\\hat{SR})\\big]$, the probability the *true* Sharpe exceeds a benchmark $SR^\\*$ given the noisy estimate $\\hat{SR}$. The DSR sets that benchmark to the **expected maximum Sharpe under $N$ skill-less trials**, $E[\\max_N]$. So the DSR is the probability your strategy is genuinely skilled *after deflating for the search*. The three moving parts: (1) the **luck threshold** $E[\\max_N]$ rises with $N$ — more trials, higher bar; (2) the **Sharpe standard error** $\\sigma(\\hat{SR})$ (Lo 2002) shrinks with sample length $T$ and widens with skew/kurtosis — short, fat-tailed records are noisier; (3) the **breakeven $N$** at which the luck threshold catches up to your observed Sharpe — beyond it, luck alone explains your result. Around this sit the practical defences: report $N$, hold out data, use walk-forward and combinatorial purged cross-validation, and treat a single dazzling backtest as a *hypothesis*, not a discovery.`,
      id: `Objek sentralnya adalah **Deflated Sharpe Ratio (DSR)**. Mulai dari **Probabilistic Sharpe Ratio**, $\\mathrm{PSR}(SR^\\*) = \\Phi\\!\\big[(\\hat{SR}-SR^\\*)/\\sigma(\\hat{SR})\\big]$, probabilitas Sharpe *sejati* ngelewatin benchmark $SR^\\*$ mengingat estimasi berisik $\\hat{SR}$. DSR nyetel benchmark itu ke **maksimum Sharpe yang diharapkan dari $N$ percobaan tanpa-skill**, $E[\\max_N]$. Jadi DSR itu probabilitas strategimu beneran skillful *setelah dideflasi buat pencarian*. Tiga bagian bergeraknya: (1) **ambang keberuntungan** $E[\\max_N]$ naik dengan $N$ — makin banyak percobaan, makin tinggi bar; (2) **standard error Sharpe** $\\sigma(\\hat{SR})$ (Lo 2002) mengecil dengan panjang sampel $T$ dan melebar dengan skew/kurtosis — rekam jejak pendek dan ekor-gemuk lebih berisik; (3) **$N$ impas** di mana ambang keberuntungan ngejar Sharpe teramatimu — di luar itu, keberuntungan saja menjelaskan hasilmu. Di sekitar ini ada pertahanan praktis: laporin $N$, sisihkan data, pakai walk-forward dan combinatorial purged cross-validation, dan perlakukan satu backtest yang memukau sebagai *hipotesis*, bukan penemuan.`,
    },
    intellectualLineage: {
      en: `The statistical roots are **multiple-hypothesis testing**: the Bonferroni and false-discovery-rate corrections (Benjamini-Hochberg 1995) say that testing many hypotheses inflates the chance of a spurious "significant" one, so the bar must rise with the number of tests. **Harvey, Liu & Zhu (2016)** imported exactly this into asset pricing. The **expected-maximum** machinery comes from extreme-value theory — the expected maximum of $N$ Gaussians grows like $\\sqrt{2\\ln N}$ — which Bailey & López de Prado approximated with the Euler-Mascheroni constant for the DSR. The **Sharpe-ratio distribution** is Andrew Lo's (2002) asymptotic result, itself resting on the delta method and GMM. The "backtest is an experiment with a hidden multiplicity" framing is pure scientific method: the same reason particle physics demands "5-sigma," and the replication crisis in psychology, applied to finance. López de Prado's machine-learning toolkit (purged/combinatorial cross-validation, minimum backtest length) operationalizes it for modern over-parameterized search.`,
      id: `Akar statistiknya adalah **pengujian multi-hipotesis**: koreksi Bonferroni dan false-discovery-rate (Benjamini-Hochberg 1995) bilang bahwa nguji banyak hipotesis ngembungin peluang ada satu yang "signifikan" palsu, jadi bar-nya harus naik dengan jumlah uji. **Harvey, Liu & Zhu (2016)** ngimpor persis ini ke asset pricing. Mesin **ekspektasi-maksimum** datang dari teori nilai-ekstrem — ekspektasi maksimum dari $N$ Gaussian tumbuh kayak $\\sqrt{2\\ln N}$ — yang Bailey & López de Prado aproksimasi dengan konstanta Euler-Mascheroni buat DSR. **Distribusi Sharpe-ratio** itu hasil asimtotik Andrew Lo (2002), yang sendiri bersandar di metode delta dan GMM. Pembingkaian "backtest itu eksperimen dengan multiplisitas tersembunyi" itu metode ilmiah murni: alasan sama kenapa fisika partikel nuntut "5-sigma," dan krisis replikasi di psikologi, diterapkan ke keuangan. Toolkit machine-learning López de Prado (purged/combinatorial cross-validation, minimum backtest length) ngoperasionalkannya buat pencarian over-parameterized modern.`,
    },
    keyCollaborators: {
      en: `The recurring pairing is **David H. Bailey & Marcos López de Prado**, who together produced the Probability of Backtest Overfitting, the Deflated Sharpe Ratio, and the minimum-backtest-length results; **Jonathan M. Borwein** (a renowned computational mathematician) and **Qiji Jim Zhu** joined them for the AMS essay. Separately, **Campbell R. Harvey** worked with **Yan Liu** and **Heqing Zhu** on the cross-section hurdle, and Harvey extended the multiple-testing agenda in later work (e.g. "Backtesting," Journal of Portfolio Management 2015). **Andrew W. Lo** stands slightly apart as the statistician of the Sharpe ratio whose standard-error result the others embed. The community context is the overlap of quantitative asset management (AQR, Guggenheim) and academic finance (Duke, MIT, Cornell), reacting to the same problem: cheap compute made over-searching trivial.`,
      id: `Pasangan berulangnya adalah **David H. Bailey & Marcos López de Prado**, yang bareng ngehasilin Probability of Backtest Overfitting, Deflated Sharpe Ratio, dan hasil minimum-backtest-length; **Jonathan M. Borwein** (matematikawan komputasi ternama) dan **Qiji Jim Zhu** gabung buat esai AMS. Terpisah, **Campbell R. Harvey** kerja dengan **Yan Liu** dan **Heqing Zhu** soal ambang lintas-seksi, dan Harvey ngelanjutin agenda multiple-testing di kerja kemudian (misal "Backtesting," Journal of Portfolio Management 2015). **Andrew W. Lo** berdiri agak terpisah sebagai statistikawan Sharpe ratio yang hasil standard-error-nya ditanam yang lain. Konteks komunitasnya adalah tumpang-tindih manajemen aset kuantitatif (AQR, Guggenheim) dan keuangan akademis (Duke, MIT, Cornell), bereaksi ke masalah yang sama: komputasi murah bikin over-searching jadi sepele.`,
    },
    legacy: {
      en: `Their lasting contribution is a *cultural and statistical norm*: **a backtest is a multiple-comparisons experiment, and its Sharpe must be deflated by the number of trials before it counts as evidence.** Concretely, the field gained (1) a reportable number — the **Deflated Sharpe Ratio** — that journals, allocators and risk committees can demand; (2) the slogan that *not reporting $N$ is itself a red flag*; (3) the **minimum backtest length** idea (a short record simply cannot support a high Sharpe claim); and (4) a practical defence stack — out-of-sample holdout, **walk-forward** analysis, and **combinatorial purged cross-validation (CPCV)** — now standard in serious quant shops. The deeper legacy is humility: most "discovered" strategies are overfit, the expected out-of-sample Sharpe of an over-searched backtest can be *negative*, and the honest response to a dazzling curve is to ask "how many did you try?" rather than "where do I send the money?"`,
      id: `Kontribusi abadinya adalah *norma kultural dan statistik*: **backtest itu eksperimen perbandingan-jamak, dan Sharpe-nya harus dideflasi dengan jumlah percobaan sebelum dihitung sebagai bukti.** Konkretnya, bidang ini dapat (1) satu angka yang bisa-dilaporkan — **Deflated Sharpe Ratio** — yang jurnal, alokator dan komite risiko bisa minta; (2) slogan bahwa *gak ngelaporin $N$ itu sendiri bendera merah*; (3) ide **minimum backtest length** (rekam jejak pendek sekadar gak bisa nyokong klaim Sharpe tinggi); dan (4) tumpukan pertahanan praktis — holdout out-of-sample, analisis **walk-forward**, dan **combinatorial purged cross-validation (CPCV)** — sekarang standar di tempat kuant serius. Warisan yang lebih dalam adalah kerendahan hati: kebanyakan strategi yang "ditemukan" itu overfit, ekspektasi Sharpe out-of-sample dari backtest yang over-searched bisa *negatif*, dan respons jujur ke kurva memukau adalah nanya "berapa yang kamu coba?" ketimbang "ke mana gue kirim duitnya?"`,
    },
    keyWorks: [
      { year: 2014, title: 'The Deflated Sharpe Ratio: Correcting for Selection Bias, Backtest Overfitting and Non-Normality (Bailey & López de Prado)', venue: 'The Journal of Portfolio Management 40(5), 94–107' },
      { year: 2014, title: 'Pseudo-Mathematics and Financial Charlatanism: The Effects of Backtest Overfitting on Out-of-Sample Performance (Bailey, Borwein, López de Prado & Zhu)', venue: 'Notices of the American Mathematical Society 61(5), 458–471' },
      { year: 2016, title: '… and the Cross-Section of Expected Returns (Harvey, Liu & Zhu) — the t > 3 multiple-testing hurdle for factors', venue: 'The Review of Financial Studies 29(1), 5–68' },
      { year: 2002, title: 'The Statistics of Sharpe Ratios (Lo) — the standard error and distribution of an estimated Sharpe', venue: 'Financial Analysts Journal 58(4), 36–52' },
      { year: 2018, title: 'Advances in Financial Machine Learning (López de Prado) — purged/combinatorial cross-validation, minimum backtest length, deflated metrics', venue: 'Wiley (ISBN 978-1-119-48208-6)' },
    ],
  },

  sections: [
    {
      id: 'motivation',
      heading: { en: 'Why this matters', id: 'Kenapa ini penting' },
      body: {
        en: `The expectancy module asked **"do you have an edge?"** — a positive $E_R = p\\cdot b - (1-p)$. This module asks the harder, adversarial question: **"is that edge REAL, or did you fit noise by trying many strategies?"** A positive expectancy you *discovered by searching* is not automatically an edge — it may be the luckiest of many coin-flippers.

Here is the trap in one sentence: **test $N$ strategies that all have zero true skill, report the best one, and its Sharpe ratio looks great — purely from selection bias.** This is *multiple testing* (a.k.a. data-snooping / backtest overfitting), and it is the dominant way quantitative researchers fool themselves [Established].

Three facts make this worth a whole module:
- **The best of many random strategies is not random-looking.** If each strategy's sample Sharpe is a noisy estimate centred on zero, the *maximum* of $N$ of them drifts upward with $N$. Try 1,000 skill-less variants over a few years and the winner can show an annualised Sharpe near 1–2 with **no edge at all** [Established]. Bailey, Borwein, López de Prado & Zhu (2014) proved you can manufacture an arbitrarily high in-sample Sharpe just by searching.
- **Most published "discoveries" are probably false.** Harvey, Liu & Zhu (2016) catalogued hundreds of factors claimed to predict returns and argued the standard "$t > 2$" significance bar is far too lenient given the search; a real factor should clear roughly **$t > 3$**. The same logic indicts the typical retail "I optimized this and look at the equity curve" backtest.
- **Not reporting the number of trials is itself the red flag.** If a backtest does not tell you how many configurations were tried to find the winner, you *cannot* assess overfitting — which is why the authors called it "pseudo-mathematics and financial charlatanism" (Notices of the AMS, 2014).

The fix is not despair, it is **deflation**: correct the reported Sharpe for (a) how many strategies you tried, (b) how long your sample is, and (c) how fat-tailed your returns are. That correction is the **Deflated Sharpe Ratio**, and engineering around it (held-out data, walk-forward, combinatorial purged cross-validation) is what separates a discovery from a fluke.

⟦Disclaimer: established quantitative statistics, evidence-tagged [Established]. Educational, not financial advice.⟧`,
        id: `Module expectancy nanya **"apakah kamu punya edge?"** — sebuah $E_R = p\\cdot b - (1-p)$ positif. Module ini nanya pertanyaan yang lebih sulit dan adversarial: **"apakah edge itu NYATA, atau kamu nge-fit noise dengan nyoba banyak strategi?"** Expectancy positif yang kamu *temukan lewat pencarian* gak otomatis edge — dia bisa jadi yang paling beruntung dari banyak pelempar koin.

Ini jebakannya dalam satu kalimat: **uji $N$ strategi yang semuanya punya skill sejati nol, laporin yang terbaik, dan Sharpe ratio-nya kelihatan hebat — murni dari selection bias.** Ini *multiple testing* (alias data-snooping / backtest overfitting), dan ini cara dominan periset kuantitatif nipu diri sendiri [Established].

Tiga fakta bikin ini layak satu module penuh:
- **Yang terbaik dari banyak strategi acak gak kelihatan acak.** Kalau Sharpe sampel tiap strategi itu estimasi berisik berpusat di nol, *maksimum* dari $N$ di antaranya melayang naik dengan $N$. Coba 1.000 varian tanpa-skill selama beberapa tahun dan pemenangnya bisa nunjukin Sharpe tahunan dekat 1–2 dengan **edge nol sama sekali** [Established]. Bailey, Borwein, López de Prado & Zhu (2014) ngebuktiin kamu bisa bikin Sharpe in-sample setinggi apa pun cuma dengan nyari.
- **Kebanyakan "penemuan" terbit kemungkinan palsu.** Harvey, Liu & Zhu (2016) ngatalog ratusan faktor yang diklaim memprediksi return dan berargumen bar signifikansi standar "$t > 2$" jauh terlalu lunak mengingat pencariannya; faktor asli harusnya lolos kira-kira **$t > 3$**. Logika sama mendakwa backtest retail tipikal "gue optimasi ini dan lihat kurva ekuitasnya."
- **Gak ngelaporin jumlah percobaan itu sendiri bendera merah.** Kalau backtest gak ngasih tahu berapa konfigurasi yang dicoba buat nemu pemenang, kamu *gak bisa* menilai overfitting — makanya para penulis nyebutnya "pseudo-matematika dan kecurangan finansial" (Notices of the AMS, 2014).

Perbaikannya bukan putus asa, tapi **deflasi**: koreksi Sharpe yang dilaporkan buat (a) berapa strategi yang kamu coba, (b) berapa panjang sampelmu, dan (c) seberapa ekor-gemuk return-mu. Koreksi itu adalah **Deflated Sharpe Ratio**, dan merekayasa di sekitarnya (data tersisih, walk-forward, combinatorial purged cross-validation) yang membedakan penemuan dari kebetulan.

⟦Disclaimer: statistik kuantitatif mapan, ber-tag [Established]. Edukatif, bukan nasihat keuangan.⟧`,
      },
    },
    {
      id: 'intuition',
      heading: { en: 'The intuition: the luckiest of many coin-flippers', id: 'Intuisi: yang paling beruntung dari banyak pelempar koin' },
      body: {
        en: `Picture a room of **1,000 people each flipping a fair coin** ten times. Someone will flip nine or ten heads. They are not skilled — they are the *maximum* of a thousand random draws. Now replace "people" with "strategy configurations" and "heads" with "good backtest returns," and you have backtest overfitting exactly. The researcher who only shows you the winner is showing you the lucky flipper and calling it skill.

The key statistical fact: **the maximum of $N$ noisy estimates drifts upward with $N$.** If each skill-less strategy has a *true* Sharpe of zero, its *sample* Sharpe over a finite record is a noisy draw scattered around zero. The best of $N$ such draws is not near zero — it is pulled out into the right tail, and that pull grows (slowly, like $\\sqrt{2\\ln N}$) with the number of trials. So:

- **More trials ⇒ a higher bar.** Reporting the best of 10 variants is mild; the best of 10,000 is a different universe. The "luck threshold" — the Sharpe you should *expect* from pure search with no edge — rises with $N$. Your observed Sharpe only counts as evidence if it clears that threshold.
- **Shorter sample ⇒ noisier ⇒ lower confidence.** A Sharpe measured over 1 year is a far noisier estimate than the same Sharpe over 10 years. Lo (2002) made this precise: the Sharpe estimate has a standard error that shrinks only with sample length $T$. A high Sharpe on a short record is easy to produce by luck and hard to trust.
- **Fat tails make it worse.** Negative skew and high kurtosis (the option-selling / "picking up pennies" profile) inflate the Sharpe's standard error — the estimate is even noisier than the naive $1/\\sqrt{T}$ suggests.

Put these together and you get the **breakeven $N$**: the number of trials at which the luck threshold catches up to your observed Sharpe. A backtest showing an annualised Sharpe of 2 over three years sounds wonderful — but if its breakeven $N$ is only a few hundred and you (or your software's grid search) tried thousands of parameter combinations, **luck alone explains it.** That is the whole intuition behind the simulator: watch the rising luck-threshold curve cross your observed Sharpe, and ask whether the number of strategies you really tried is on the safe side of that crossing.

The honest mental model: **a single backtest is one experiment with a hidden multiplicity.** Treat the dazzling result as a *hypothesis to be tested out-of-sample*, not a discovery. The expectancy module's edge ($E_R > 0$) is necessary; surviving deflation is what makes it credible.`,
        id: `Bayangin ruangan berisi **1.000 orang yang masing-masing ngelempar koin adil** sepuluh kali. Seseorang bakal ngelempar sembilan atau sepuluh kepala. Mereka gak skillful — mereka *maksimum* dari seribu undian acak. Sekarang ganti "orang" dengan "konfigurasi strategi" dan "kepala" dengan "return backtest bagus," dan kamu dapat backtest overfitting persis. Periset yang cuma nunjukin pemenangnya lagi nunjukin pelempar beruntung dan nyebutnya skill.

Fakta statistik kuncinya: **maksimum dari $N$ estimasi berisik melayang naik dengan $N$.** Kalau tiap strategi tanpa-skill punya Sharpe *sejati* nol, Sharpe *sampel*-nya atas rekam jejak berhingga itu undian berisik yang berserak di sekitar nol. Yang terbaik dari $N$ undian semacam itu gak dekat nol — dia ditarik keluar ke ekor kanan, dan tarikan itu tumbuh (pelan, kayak $\\sqrt{2\\ln N}$) dengan jumlah percobaan. Jadi:

- **Makin banyak percobaan ⇒ bar makin tinggi.** Ngelaporin yang terbaik dari 10 varian itu ringan; yang terbaik dari 10.000 itu jagat berbeda. "Ambang keberuntungan" — Sharpe yang harusnya kamu *harapin* dari pencarian murni tanpa edge — naik dengan $N$. Sharpe teramatimu cuma dihitung sebagai bukti kalau dia ngelewatin ambang itu.
- **Sampel lebih pendek ⇒ lebih berisik ⇒ keyakinan lebih rendah.** Sharpe yang diukur selama 1 tahun itu estimasi jauh lebih berisik dari Sharpe sama selama 10 tahun. Lo (2002) bikin ini presisi: estimasi Sharpe punya standard error yang mengecil cuma dengan panjang sampel $T$. Sharpe tinggi di rekam jejak pendek gampang diproduksi karena keberuntungan dan sulit dipercaya.
- **Ekor gemuk bikin lebih buruk.** Skew negatif dan kurtosis tinggi (profil jualan-opsi / "mungutin receh") ngembungin standard error Sharpe — estimasinya bahkan lebih berisik dari yang naif $1/\\sqrt{T}$ sarankan.

Satuin ini dan kamu dapat **$N$ impas**: jumlah percobaan di mana ambang keberuntungan ngejar Sharpe teramatimu. Backtest yang nunjukin Sharpe tahunan 2 selama tiga tahun kedengeran luar biasa — tapi kalau $N$ impas-nya cuma beberapa ratus dan kamu (atau grid search software-mu) nyoba ribuan kombinasi parameter, **keberuntungan saja menjelaskannya.** Itu seluruh intuisi di balik simulator: perhatikan kurva ambang-keberuntungan yang naik nyebrang Sharpe teramatimu, dan tanyakan apakah jumlah strategi yang beneran kamu coba ada di sisi aman dari penyeberangan itu.

Model mental jujurnya: **satu backtest itu satu eksperimen dengan multiplisitas tersembunyi.** Perlakukan hasil yang memukau sebagai *hipotesis yang harus diuji out-of-sample*, bukan penemuan. Edge module expectancy ($E_R > 0$) itu perlu; bertahan dari deflasi yang bikin dia kredibel.`,
      },
    },
    {
      id: 'formalization',
      heading: { en: 'Formalizing the luck threshold & the Deflated Sharpe Ratio', id: 'Memformalkan ambang keberuntungan & Deflated Sharpe Ratio' },
      visualization: {
        id: 'backtest-overfitting-dsr-viz',
        component: 'BacktestOverfitSim',
        title: {
          en: 'Deflated Sharpe lab: luck threshold, DSR & p(beaten by luck)',
          id: 'Lab Deflated Sharpe: ambang keberuntungan, DSR & p(dikalahkan keberuntungan)',
        },
        description: {
          en: "Set the observed annualised Sharpe, the number of strategies tried N, and the sample length in years. The lab plots the LUCK THRESHOLD E[max Sharpe] of N skill-less strategies — rising with N — against your observed Sharpe, and reports the DEFLATED SHARPE RATIO (the Probabilistic Sharpe benchmarked against that N-trial expected max, i.e. the probability the edge is genuine after the search), the luck threshold at your N, the Sharpe standard error (Lo 2002), a Monte-Carlo p(best-of-N noise beats you), and the breakeven N where luck alone first matches your Sharpe. A verdict flags SKILL (DSR > 95%), inconclusive, or likely OVERFIT. Default Sharpe 2, N=100, 3 years — a 'great' backtest that deflates dramatically once you account for the search.",
          id: "Atur Sharpe tahunan teramati, jumlah strategi dicoba N, dan panjang sampel dalam tahun. Lab-nya ngeplot AMBANG KEBERUNTUNGAN E[max Sharpe] dari N strategi tanpa-skill — naik dengan N — terhadap Sharpe teramatimu, dan ngelaporin DEFLATED SHARPE RATIO (Probabilistic Sharpe yang di-benchmark terhadap ekspektasi maksimum N-percobaan itu, yaitu probabilitas edge-nya asli setelah pencarian), ambang keberuntungan di N kamu, standard error Sharpe (Lo 2002), Monte-Carlo p(noise terbaik dari N ngalahin kamu), dan N impas di mana keberuntungan saja pertama menyamai Sharpe-mu. Sebuah vonis nandai SKILL (DSR > 95%), belum konklusif, atau kemungkinan OVERFIT. Default Sharpe 2, N=100, 3 tahun — backtest 'hebat' yang deflasi dramatis begitu kamu memperhitungkan pencariannya.",
        },
        defaultParams: { sharpe: 2, nTrials: 100, years: 3 },
        height: 440,
      },
      body: {
        en: `**Set-up.** Work in annualised Sharpe units. Let $\\hat{SR}$ be the observed annual Sharpe of the *winning* strategy, $T$ the number of return observations (here daily, so $T = \\text{years}\\times 252$), and $N$ the number of strategies tried. Internally the simulator works per-observation: $\\hat{SR}_{\\text{obs}} = \\hat{SR}/\\sqrt{252}$.

**1) The Sharpe is an estimate with a standard error (Lo 2002).** A Sharpe computed from a finite sample is noisy. For returns with skewness $\\gamma_3$ and kurtosis $\\gamma_4$, the per-observation standard error is
$$\\sigma(\\hat{SR}) = \\sqrt{\\frac{1 - \\gamma_3\\,\\hat{SR} + \\frac{\\gamma_4-1}{4}\\,\\hat{SR}^2}{T-1}}\\,.$$
For Gaussian returns ($\\gamma_3=0,\\ \\gamma_4=3$) this collapses toward $\\sqrt{(1+\\frac12\\hat{SR}^2)/(T-1)}$; negative skew and fat tails *inflate* it. The simulator annualises by multiplying by $\\sqrt{252}$.

**2) The luck threshold — expected maximum of $N$ trials.** If all $N$ strategies have zero true skill, each trial's Sharpe estimate has (null) variance $V = 1/(T-1)$. The expected maximum of $N$ such trials, in Sharpe units, is
$$E[\\max_N] \\approx \\sqrt{V}\\,\\Big[(1-\\gamma)\\,Z^{-1}\\!\\big(1-\\tfrac{1}{N}\\big) + \\gamma\\,Z^{-1}\\!\\big(1-\\tfrac{1}{N e}\\big)\\Big],$$
where $\\gamma \\approx 0.5772$ is the Euler-Mascheroni constant, $Z^{-1}$ is the inverse standard-normal CDF, and $e$ is Euler's number (Bailey & López de Prado 2014). This $SR^\\*$ is the **luck threshold**: the Sharpe you should *expect* to see from the best of $N$ skill-less searches. It rises with $N$ — the curve the lab draws.

**3) The Probabilistic Sharpe Ratio.** Given the estimate and its standard error, the probability the *true* Sharpe exceeds a benchmark $SR^\\*$ is
$$\\mathrm{PSR}(SR^\\*) = \\Phi\\!\\left[\\frac{\\hat{SR} - SR^\\*}{\\sigma(\\hat{SR})}\\right],$$
with $\\Phi$ the standard-normal CDF.

**4) The Deflated Sharpe Ratio.** The DSR is simply the PSR with the benchmark set to the $N$-trial expected max:
$$\\boxed{\\ \\mathrm{DSR} = \\mathrm{PSR}\\big(SR^\\* = E[\\max_N]\\big) = \\Phi\\!\\left[\\frac{\\hat{SR} - E[\\max_N]}{\\sigma(\\hat{SR})}\\right].\\ }$$
Read it as **the probability the strategy is genuinely skilled *after* deflating for the search.** A naive PSR against zero can look strong while the DSR — which moves the goalposts to the luck threshold — collapses, because the right benchmark is not "better than nothing" but "better than the best fluke from $N$ tries." A common decision rule treats $\\mathrm{DSR} > 0.95$ as evidence of skill.

**5) The breakeven $N$ and a Monte-Carlo cross-check.** The **breakeven $N$** is the smallest $N$ at which the luck threshold $E[\\max_N]$ first reaches your observed Sharpe — beyond it, pure search explains your result. As an independent check, note that under the null a sample Sharpe's $t$-statistic is $\\hat{SR}_{\\text{ann}}\\sqrt{\\text{years}}$ and is approximately standard normal; the lab draws the **max of $N$ standard normals** many times and reports $p(\\text{luck})$ = the fraction of those best-of-$N$ noise runs that beat your observed $t$. A high $p(\\text{luck})$ is the simulation-level twin of a low DSR.

The lab below ties all five together: raise $N$ and watch the luck threshold climb past your Sharpe while the DSR falls and $p(\\text{luck})$ rises.`,
        id: `**Setup.** Kerja dalam satuan Sharpe tahunan. Misal $\\hat{SR}$ itu Sharpe tahunan teramati dari strategi *pemenang*, $T$ jumlah observasi return (di sini harian, jadi $T = \\text{tahun}\\times 252$), dan $N$ jumlah strategi yang dicoba. Secara internal simulator kerja per-observasi: $\\hat{SR}_{\\text{obs}} = \\hat{SR}/\\sqrt{252}$.

**1) Sharpe itu estimasi dengan standard error (Lo 2002).** Sharpe yang dihitung dari sampel berhingga itu berisik. Buat return dengan skewness $\\gamma_3$ dan kurtosis $\\gamma_4$, standard error per-observasi adalah
$$\\sigma(\\hat{SR}) = \\sqrt{\\frac{1 - \\gamma_3\\,\\hat{SR} + \\frac{\\gamma_4-1}{4}\\,\\hat{SR}^2}{T-1}}\\,.$$
Buat return Gaussian ($\\gamma_3=0,\\ \\gamma_4=3$) ini mengerucut menuju $\\sqrt{(1+\\frac12\\hat{SR}^2)/(T-1)}$; skew negatif dan ekor gemuk *ngembungin*-nya. Simulator nahunin dengan ngali $\\sqrt{252}$.

**2) Ambang keberuntungan — ekspektasi maksimum dari $N$ percobaan.** Kalau semua $N$ strategi punya skill sejati nol, estimasi Sharpe tiap percobaan punya varians (null) $V = 1/(T-1)$. Ekspektasi maksimum dari $N$ percobaan semacam itu, dalam satuan Sharpe, adalah
$$E[\\max_N] \\approx \\sqrt{V}\\,\\Big[(1-\\gamma)\\,Z^{-1}\\!\\big(1-\\tfrac{1}{N}\\big) + \\gamma\\,Z^{-1}\\!\\big(1-\\tfrac{1}{N e}\\big)\\Big],$$
dengan $\\gamma \\approx 0.5772$ itu konstanta Euler-Mascheroni, $Z^{-1}$ itu inverse CDF normal-standar, dan $e$ itu bilangan Euler (Bailey & López de Prado 2014). $SR^\\*$ ini adalah **ambang keberuntungan**: Sharpe yang harusnya kamu *harapin* lihat dari yang terbaik dari $N$ pencarian tanpa-skill. Dia naik dengan $N$ — kurva yang lab-nya gambar.

**3) Probabilistic Sharpe Ratio.** Mengingat estimasi dan standard error-nya, probabilitas Sharpe *sejati* ngelewatin benchmark $SR^\\*$ adalah
$$\\mathrm{PSR}(SR^\\*) = \\Phi\\!\\left[\\frac{\\hat{SR} - SR^\\*}{\\sigma(\\hat{SR})}\\right],$$
dengan $\\Phi$ itu CDF normal-standar.

**4) Deflated Sharpe Ratio.** DSR itu sekadar PSR dengan benchmark disetel ke ekspektasi maksimum $N$-percobaan:
$$\\boxed{\\ \\mathrm{DSR} = \\mathrm{PSR}\\big(SR^\\* = E[\\max_N]\\big) = \\Phi\\!\\left[\\frac{\\hat{SR} - E[\\max_N]}{\\sigma(\\hat{SR})}\\right].\\ }$$
Baca dia sebagai **probabilitas strategi beneran skillful *setelah* dideflasi buat pencarian.** PSR naif terhadap nol bisa kelihatan kuat sementara DSR — yang mindahin gawang ke ambang keberuntungan — runtuh, karena benchmark yang benar bukan "lebih baik dari nol" tapi "lebih baik dari kebetulan terbaik dari $N$ percobaan." Aturan keputusan umum mperlakukan $\\mathrm{DSR} > 0.95$ sebagai bukti skill.

**5) $N$ impas dan cek-silang Monte-Carlo.** **$N$ impas** itu $N$ terkecil di mana ambang keberuntungan $E[\\max_N]$ pertama mencapai Sharpe teramatimu — di luar itu, pencarian murni menjelaskan hasilmu. Sebagai cek independen, perhatikan bahwa di bawah null $t$-statistik Sharpe sampel itu $\\hat{SR}_{\\text{ann}}\\sqrt{\\text{tahun}}$ dan kira-kira normal standar; lab-nya ngundi **maks dari $N$ normal standar** berkali-kali dan ngelaporin $p(\\text{luck})$ = fraksi run noise terbaik-dari-$N$ itu yang ngalahin $t$ teramatimu. $p(\\text{luck})$ tinggi itu kembaran level-simulasi dari DSR rendah.

Lab di bawah nyatuin kelimanya: naikin $N$ dan perhatikan ambang keberuntungan memanjat ngelewatin Sharpe-mu sementara DSR turun dan $p(\\text{luck})$ naik.`,
      },
    },
    {
      id: 'worked-example',
      heading: { en: 'Worked example: a "great" Sharpe that deflates', id: 'Contoh: Sharpe "hebat" yang terdeflasi' },
      body: {
        en: `Take the lab's defaults: an **observed annual Sharpe of 2.0**, found after trying **$N = 100$** strategy variants, on a **3-year** daily sample. This *looks* like a strong result. Let us deflate it.

**Step 1 — Sample length.** $T = 3 \\times 252 = 756$ daily observations, so the null variance of a single Sharpe estimate is $V = 1/(T-1) = 1/755 \\approx 0.001325$, i.e. a per-observation standard deviation $\\sqrt{V}\\approx 0.0364$. Annualised, one skill-less strategy's Sharpe has a spread of about $0.0364\\times\\sqrt{252}\\approx 0.58$ — already large relative to "impressive" annual Sharpes.

**Step 2 — The luck threshold $E[\\max_{100}]$.** Plug $N=100$ into
$$E[\\max_N] \\approx \\sqrt{V}\\big[(1-\\gamma)Z^{-1}(1-\\tfrac1N) + \\gamma Z^{-1}(1-\\tfrac{1}{Ne})\\big].$$
With $N=100$: $Z^{-1}(1-1/100)=Z^{-1}(0.99)\\approx 2.326$ and $Z^{-1}(1-1/(100e))=Z^{-1}(0.99632)\\approx 2.683$. So the bracket is $(1-0.5772)(2.326) + 0.5772(2.683) \\approx 0.983 + 1.549 = 2.532$ (per-observation $z$-units). Multiply by $\\sqrt{V}\\approx0.0364$ to get a per-observation $SR^\\*\\approx 0.0922$, and annualise: $SR^\\*_{\\text{ann}} \\approx 0.0922\\times\\sqrt{252} \\approx 1.46$. **So the best of 100 skill-less strategies on a 3-year daily record is already expected to show an annual Sharpe near 1.5 — with no edge at all.**

**Step 3 — The Sharpe standard error (Lo 2002, Gaussian).** Per-observation $\\hat{SR}_{\\text{obs}} = 2/\\sqrt{252}\\approx 0.126$. With $\\gamma_3=0,\\gamma_4=3$: $\\sigma(\\hat{SR}) = \\sqrt{(1 + \\tfrac12(0.126)^2)/755}\\approx \\sqrt{1.0079/755}\\approx 0.0365$ per observation, or $\\approx 0.58$ annualised. Your "Sharpe 2" is really $2 \\pm 0.58$.

**Step 4 — The Deflated Sharpe Ratio.**
$$\\mathrm{DSR} = \\Phi\\!\\left[\\frac{\\hat{SR}_{\\text{obs}} - SR^\\*}{\\sigma(\\hat{SR})}\\right] = \\Phi\\!\\left[\\frac{0.126 - 0.0922}{0.0365}\\right] = \\Phi[0.93] \\approx 0.82.$$
So after deflating for 100 trials, the probability this is genuine skill is only about **82%** — *below* the conventional 95% bar. A "Sharpe 2" that felt like a slam dunk is, honestly read, **inconclusive**.

**Step 5 — Crank the search.** Now suppose your grid search really tried **$N = 1{,}000$** combinations (easy with a few parameters). Re-running the expected-max with $N=1000$ pushes $SR^\\*_{\\text{ann}}$ up toward roughly **1.88**, the gap $\\hat{SR}-SR^\\*$ shrinks, and the DSR falls to about **58%** — still failing the 95% bar by a mile. Keep going: by the time you have tried enough variants that the luck threshold *reaches* your observed Sharpe of 2 — here around **$N \\approx 2{,}100$** (the **breakeven $N$**) — the DSR drops through 0.5 and the verdict flips to **likely OVERFIT** (e.g. $N=5{,}000$ gives $SR^\\*_{\\text{ann}}\\approx 2.1$ and $\\mathrm{DSR}\\approx 41\\%$). This is the breakeven-$N$ idea: there is a number of trials beyond which a Sharpe of 2 over three years is exactly what luck delivers, so it stops being evidence.

**The lesson in one line.** The same observed Sharpe is *skill* if you tried a handful of well-motivated strategies and *noise* if you tried thousands — which is why **reporting $N$ is not optional.** Tighten any one knob — more years (raises $T$, shrinks the SE and the threshold), fewer honest trials (lowers $SR^\\*$), or a cleaner return distribution — and the DSR rises. An "amazing backtest" can be pure luck once you admit how many you ran.

⟦Disclaimer: illustrative numbers; the inverse-normal values are rounded. Educational, not financial advice.⟧`,
        id: `Ambil default lab: **Sharpe tahunan teramati 2,0**, ditemukan setelah nyoba **$N = 100$** varian strategi, pada sampel harian **3-tahun**. Ini *kelihatan* hasil kuat. Mari kita deflasi.

**Langkah 1 — Panjang sampel.** $T = 3 \\times 252 = 756$ observasi harian, jadi varians null dari satu estimasi Sharpe itu $V = 1/(T-1) = 1/755 \\approx 0.001325$, yaitu standar deviasi per-observasi $\\sqrt{V}\\approx 0.0364$. Ditahunin, Sharpe satu strategi tanpa-skill punya sebaran sekitar $0.0364\\times\\sqrt{252}\\approx 0.58$ — udah besar relatif terhadap Sharpe tahunan yang "mengesankan."

**Langkah 2 — Ambang keberuntungan $E[\\max_{100}]$.** Masukin $N=100$ ke
$$E[\\max_N] \\approx \\sqrt{V}\\big[(1-\\gamma)Z^{-1}(1-\\tfrac1N) + \\gamma Z^{-1}(1-\\tfrac{1}{Ne})\\big].$$
Dengan $N=100$: $Z^{-1}(1-1/100)=Z^{-1}(0.99)\\approx 2.326$ dan $Z^{-1}(1-1/(100e))=Z^{-1}(0.99632)\\approx 2.683$. Jadi kurung-nya $(1-0.5772)(2.326) + 0.5772(2.683) \\approx 0.983 + 1.549 = 2.532$ (satuan $z$ per-observasi). Kali $\\sqrt{V}\\approx0.0364$ buat dapat $SR^\\*\\approx 0.0922$ per-observasi, dan tahunin: $SR^\\*_{\\text{ann}} \\approx 0.0922\\times\\sqrt{252} \\approx 1.46$. **Jadi yang terbaik dari 100 strategi tanpa-skill di rekam jejak harian 3-tahun udah diharapkan nunjukin Sharpe tahunan dekat 1,5 — dengan edge nol sama sekali.**

**Langkah 3 — Standard error Sharpe (Lo 2002, Gaussian).** $\\hat{SR}_{\\text{obs}} = 2/\\sqrt{252}\\approx 0.126$ per-observasi. Dengan $\\gamma_3=0,\\gamma_4=3$: $\\sigma(\\hat{SR}) = \\sqrt{(1 + \\tfrac12(0.126)^2)/755}\\approx \\sqrt{1.0079/755}\\approx 0.0365$ per observasi, atau $\\approx 0.58$ ditahunin. "Sharpe 2"-mu sebenarnya $2 \\pm 0.58$.

**Langkah 4 — Deflated Sharpe Ratio.**
$$\\mathrm{DSR} = \\Phi\\!\\left[\\frac{\\hat{SR}_{\\text{obs}} - SR^\\*}{\\sigma(\\hat{SR})}\\right] = \\Phi\\!\\left[\\frac{0.126 - 0.0922}{0.0365}\\right] = \\Phi[0.93] \\approx 0.82.$$
Jadi setelah dideflasi buat 100 percobaan, probabilitas ini skill asli cuma sekitar **82%** — *di bawah* bar konvensional 95%. "Sharpe 2" yang berasa slam dunk itu, dibaca jujur, **belum konklusif.**

**Langkah 5 — Genjot pencariannya.** Sekarang misal grid search-mu beneran nyoba **$N = 1.000$** kombinasi (gampang dengan beberapa parameter). Ngulang ekspektasi-maks dengan $N=1000$ ndorong $SR^\\*_{\\text{ann}}$ naik menuju kira-kira **1,88**, jarak $\\hat{SR}-SR^\\*$ mengecil, dan DSR turun ke sekitar **58%** — masih gagal bar 95% sejauh-jauhnya. Lanjut: pas kamu udah nyoba cukup varian sampai ambang keberuntungan *mencapai* Sharpe teramatimu 2 — di sini sekitar **$N \\approx 2.100$** (**$N$ impas**) — DSR turun ngelewatin 0,5 dan vonis flip ke **kemungkinan OVERFIT** (misal $N=5.000$ ngasih $SR^\\*_{\\text{ann}}\\approx 2,1$ dan $\\mathrm{DSR}\\approx 41\\%$). Ini ide $N$-impas: ada jumlah percobaan yang di luarnya Sharpe 2 selama tiga tahun persis yang keberuntungan kasih, jadi dia berhenti jadi bukti.

**Pelajaran dalam satu baris.** Sharpe teramati yang sama itu *skill* kalau kamu nyoba segelintir strategi yang termotivasi-baik dan *noise* kalau kamu nyoba ribuan — makanya **ngelaporin $N$ itu gak opsional.** Kencengin satu tombol mana pun — lebih banyak tahun (naikin $T$, ngecilin SE dan ambang), lebih sedikit percobaan jujur (nurunin $SR^\\*$), atau distribusi return lebih bersih — dan DSR naik. "Backtest menakjubkan" bisa murni keberuntungan begitu kamu ngaku berapa yang kamu jalanin.

⟦Disclaimer: angka ilustratif; nilai inverse-normal dibulatkan. Edukatif, bukan nasihat keuangan.⟧`,
      },
    },
    {
      id: 'applications',
      heading: { en: 'Applications', id: 'Aplikasi' },
      body: {
        en: `**Report the number of trials, always.** The single most important practice from Bailey, Borwein, López de Prado & Zhu (2014): a backtest that does not disclose how many configurations were tried *cannot* be assessed for overfitting. Keep a trial log — every parameter sweep, every indicator you tested and discarded, every variant — because $N$ is the input the Deflated Sharpe Ratio needs. The "I only tested a few" claim is rarely true once you count grid searches honestly.

**Deflate before you deploy.** Compute the DSR, not just the raw Sharpe. A reported Sharpe of 2 with $\\mathrm{DSR} < 0.95$ is a *hypothesis*, not a green light. This is the rigorous gate that sits on top of the expectancy module: a positive $E_R$ you found by searching must survive deflation before it earns capital.

**Out-of-sample holdout.** Lock away a slice of data (the most recent, ideally) *before* you search, and never touch it during development. The held-out Sharpe is your least-contaminated estimate. The catch: you can only use a true holdout once — peek and re-tune, and it becomes in-sample.

**Walk-forward analysis.** Repeatedly fit on a trailing window and test on the next, stepping forward through time. It mimics live deployment (you never use the future to fit the past) and exposes strategies whose "edge" was a single lucky regime. A walk-forward Sharpe far below the in-sample Sharpe is the fingerprint of overfitting.

**Combinatorial purged cross-validation (CPCV).** López de Prado's (2018) workhorse. Standard k-fold cross-validation leaks information in time series because adjacent observations overlap; CPCV **purges** training observations that overlap the test set (and **embargoes** a buffer after it), then forms *many* train/test splits to produce a distribution of out-of-sample Sharpes rather than a single number. It also feeds the **Probability of Backtest Overfitting (PBO)** — the chance your selected strategy underperforms the median out-of-sample.

**Minimum backtest length.** The flip side of the luck threshold: for a target Sharpe and a given $N$, there is a minimum sample length below which *any* high Sharpe is uninformative. Short records simply cannot support strong claims — demand more history, or lower your confidence.

**Raise the bar with the search size (Harvey-Liu-Zhu 2016).** For factor-style research, do not accept $t > 2$; with hundreds of candidate factors the appropriate hurdle is closer to $t > 3$. The principle generalizes: the more you search, the higher the significance bar must climb.

**Beware fat tails and autocorrelation.** Lo (2002) showed that non-IID returns and non-normality distort the Sharpe and its error. Strategies that sell options or "pick up pennies" have negative skew and high kurtosis that *inflate* the standard error — their high Sharpes are even less trustworthy than they look, and naive $\\sqrt{12}$ annualisation is wrong under autocorrelation.

**Connection to flow/toxicity (loosely).** Order-flow signals like [VPIN](item:easley-lopez-prado-vpin) are themselves estimated and tuned on history; the same multiple-testing discipline applies — a flow signal that "worked" across many bucketings and thresholds needs deflating too, and López de Prado is a common thread between that literature and this one.`,
        id: `**Laporin jumlah percobaan, selalu.** Praktik paling penting dari Bailey, Borwein, López de Prado & Zhu (2014): backtest yang gak ngungkapin berapa konfigurasi yang dicoba *gak bisa* dinilai buat overfitting. Simpan log percobaan — tiap sapuan parameter, tiap indikator yang kamu uji dan buang, tiap varian — karena $N$ itu input yang Deflated Sharpe Ratio butuhin. Klaim "gue cuma nguji beberapa" jarang benar begitu kamu ngitung grid search dengan jujur.

**Deflasi sebelum kamu deploy.** Hitung DSR, bukan cuma Sharpe mentah. Sharpe yang dilaporkan 2 dengan $\\mathrm{DSR} < 0.95$ itu *hipotesis*, bukan lampu hijau. Ini gerbang ketat yang duduk di atas module expectancy: $E_R$ positif yang kamu temukan lewat pencarian harus bertahan dari deflasi sebelum dia ngedapetin modal.

**Holdout out-of-sample.** Kunci sepotong data (yang terbaru, idealnya) *sebelum* kamu nyari, dan jangan pernah sentuh selama pengembangan. Sharpe yang ditahan itu estimasimu yang paling gak-terkontaminasi. Tangkapnya: kamu cuma bisa pakai holdout sejati sekali — ngintip dan nyetel-ulang, dan dia jadi in-sample.

**Analisis walk-forward.** Berulang kali fit di jendela mundur dan uji di yang berikutnya, melangkah maju lewat waktu. Dia meniru deployment live (kamu gak pernah pakai masa depan buat nge-fit masa lalu) dan ngebongkar strategi yang "edge"-nya cuma satu rezim beruntung. Sharpe walk-forward yang jauh di bawah Sharpe in-sample itu sidik jari overfitting.

**Combinatorial purged cross-validation (CPCV).** Kuda-beban López de Prado (2018). Cross-validation k-fold standar membocorkan informasi di deret waktu karena observasi bersebelahan tumpang-tindih; CPCV **memurnikan (purge)** observasi training yang tumpang-tindih dengan set tes (dan **mengembargo** penyangga setelahnya), lalu membentuk *banyak* pembagian train/test buat ngehasilin distribusi Sharpe out-of-sample ketimbang satu angka. Dia juga nyuapin **Probability of Backtest Overfitting (PBO)** — peluang strategi terpilihmu underperform median out-of-sample.

**Minimum backtest length.** Sisi sebaliknya dari ambang keberuntungan: buat Sharpe target dan $N$ tertentu, ada panjang sampel minimum yang di bawahnya *Sharpe tinggi apa pun* gak-informatif. Rekam jejak pendek sekadar gak bisa nyokong klaim kuat — minta lebih banyak sejarah, atau turunin keyakinanmu.

**Naikin bar dengan ukuran pencarian (Harvey-Liu-Zhu 2016).** Buat riset gaya-faktor, jangan terima $t > 2$; dengan ratusan faktor kandidat ambang yang pas lebih dekat ke $t > 3$. Prinsipnya menggeneralisasi: makin banyak kamu nyari, makin tinggi bar signifikansi harus memanjat.

**Waspada ekor gemuk dan autokorelasi.** Lo (2002) nunjukin return non-IID dan non-normalitas mendistorsi Sharpe dan error-nya. Strategi yang jualan opsi atau "mungutin receh" punya skew negatif dan kurtosis tinggi yang *ngembungin* standard error — Sharpe tinggi mereka bahkan kurang bisa-dipercaya dari kelihatannya, dan penahunan $\\sqrt{12}$ naif itu salah di bawah autokorelasi.

**Koneksi ke flow/toksisitas (longgar).** Sinyal order-flow kayak [VPIN](item:easley-lopez-prado-vpin) sendiri diestimasi dan disetel di sejarah; disiplin multiple-testing yang sama berlaku — sinyal flow yang "bekerja" lintas banyak bucketing dan ambang perlu dideflasi juga, dan López de Prado adalah benang merah antara literatur itu dan yang ini.`,
      },
    },
    {
      id: 'practice',
      heading: { en: 'Practice', id: 'Latihan' },
      body: {
        en: `**1.** In one sentence each, state the difference between the question the expectancy module answers and the question this module answers. Why is a positive expectancy not enough?

<details><summary>Answer</summary>
EXPECTANCY asks "do you HAVE an edge?" — is E_R = p·b − (1−p) > 0 for this strategy? THIS module asks "is that edge REAL, or did you fit noise by trying many strategies?" — i.e. after correcting for selection bias / multiple testing, is the result still significant? A positive expectancy is not enough because if you searched over many strategies and reported the best, that positive E_R (and its high Sharpe) can be the luckiest draw of many skill-less strategies — selection bias inflates it. The edge must survive DEFLATION (the Deflated Sharpe Ratio, out-of-sample holdout, walk-forward) before it counts as genuine.
</details>

**2.** Why does the "luck threshold" — the Sharpe you expect from pure search — rise as you test more strategies $N$? What happens to the Deflated Sharpe Ratio as $N$ grows, holding the observed Sharpe fixed?

<details><summary>Answer</summary>
Each skill-less strategy's SAMPLE Sharpe is a noisy estimate scattered around its true value of zero. The MAXIMUM of N such noisy draws is pulled into the right tail, and that pull grows with N (roughly like √(2·ln N)) — so the expected best-of-N Sharpe, E[max_N] ≈ √V·[(1−γ)Z⁻¹(1−1/N) + γ Z⁻¹(1−1/(Ne))], rises with N. As N grows with the observed Sharpe held fixed, the benchmark SR* = E[max_N] climbs toward (and past) your observed Sharpe, so the gap (ŜR − SR*) shrinks, and DSR = Φ[(ŜR − SR*)/σ(ŜR)] FALLS. Past the breakeven N, luck alone explains the result and the DSR drops below 0.5 — likely overfit.
</details>

**3.** Write the Deflated Sharpe Ratio in terms of the Probabilistic Sharpe Ratio, and explain what each input ($\\hat{SR}$, $SR^\\*$, $\\sigma(\\hat{SR})$) is and how it moves the DSR.

<details><summary>Answer</summary>
DSR = PSR(SR* = E[max_N]) = Φ[(ŜR − SR*)/σ(ŜR)]. Inputs: (1) ŜR is the OBSERVED Sharpe of the winning strategy — higher ŜR raises the DSR. (2) SR* = E[max_N], the LUCK THRESHOLD = the expected maximum Sharpe of N skill-less trials — it rises with N and LOWERS the DSR (it is the benchmark you must beat, set to the best fluke from your search, not to zero). (3) σ(ŜR) is the Sharpe STANDARD ERROR (Lo 2002), σ(ŜR) = √[(1 − γ3·ŜR + ((γ4−1)/4)·ŜR²)/(T−1)] — it shrinks with sample length T (raising DSR) and grows with negative skew / high kurtosis (lowering DSR). The DSR is the probability the true Sharpe exceeds the luck threshold — i.e. the probability the edge is genuine AFTER deflating for the search.
</details>

**4.** A backtest reports an annual Sharpe of 1.5 over 2 years and does not say how many strategies were tried. Your colleague says "great, let's allocate." List three things you would do before agreeing, and say why each helps.

<details><summary>Answer</summary>
(1) DEMAND THE NUMBER OF TRIALS N (and a trial log of every parameter sweep) — without N you cannot compute the luck threshold or the DSR, and not reporting N is itself a red flag (Bailey et al. 2014). (2) NOTE THE SHORT SAMPLE — T = 2×252 = 504 obs makes the Sharpe standard error large (Lo 2002), so 1.5 is a noisy estimate; check it against the minimum backtest length and ask for more history. (3) COMPUTE THE DSR and/or run an OUT-OF-SAMPLE HOLDOUT or WALK-FORWARD / CPCV — if the deflated/out-of-sample Sharpe collapses relative to in-sample, it was overfit. Only allocate if the DSR clears ~0.95 and the out-of-sample performance holds.
</details>

**5.** Why do negative skew and high kurtosis make a high Sharpe LESS trustworthy, and which kind of strategy typically has that return profile?

<details><summary>Answer</summary>
Lo (2002) showed the Sharpe's standard error is σ(ŜR) = √[(1 − γ3·ŜR + ((γ4−1)/4)·ŜR²)/(T−1)]. NEGATIVE skewness γ3 (with positive ŜR, the −γ3·ŜR term becomes positive) and HIGH kurtosis γ4 (the ((γ4−1)/4)·ŜR² term grows) both INCREASE the standard error — so the Sharpe ESTIMATE is noisier than the naive 1/√T suggests, and a high point estimate is less reliable. The classic profile is OPTION-SELLING / "picking up pennies in front of a steamroller" (variance-risk-premium harvesting): many small gains punctuated by rare large losses — negatively skewed, fat-tailed. Such strategies post flattering Sharpes that are statistically fragile, so they especially need deflation and tail-aware evaluation.
</details>`,
        id: `**1.** Dalam satu kalimat masing-masing, nyatakan beda antara pertanyaan yang dijawab module expectancy dan pertanyaan yang dijawab module ini. Kenapa expectancy positif gak cukup?

<details><summary>Jawaban</summary>
EXPECTANCY nanya "apakah kamu PUNYA edge?" — apakah E_R = p·b − (1−p) > 0 buat strategi ini? Module INI nanya "apakah edge itu NYATA, atau kamu nge-fit noise dengan nyoba banyak strategi?" — yaitu setelah ngoreksi selection bias / multiple testing, apakah hasilnya masih signifikan? Expectancy positif gak cukup karena kalau kamu nyari lintas banyak strategi dan ngelaporin yang terbaik, E_R positif itu (dan Sharpe tingginya) bisa jadi undian paling beruntung dari banyak strategi tanpa-skill — selection bias ngembungin-nya. Edge-nya harus bertahan dari DEFLASI (Deflated Sharpe Ratio, holdout out-of-sample, walk-forward) sebelum dihitung asli.
</details>

**2.** Kenapa "ambang keberuntungan" — Sharpe yang kamu harapin dari pencarian murni — naik saat kamu nguji lebih banyak strategi $N$? Apa yang terjadi ke Deflated Sharpe Ratio saat $N$ tumbuh, dengan Sharpe teramati ditahan tetap?

<details><summary>Jawaban</summary>
Sharpe SAMPEL tiap strategi tanpa-skill itu estimasi berisik yang berserak di sekitar nilai sejatinya nol. MAKSIMUM dari N undian berisik semacam itu ditarik ke ekor kanan, dan tarikan itu tumbuh dengan N (kira-kira kayak √(2·ln N)) — jadi ekspektasi Sharpe terbaik-dari-N, E[max_N] ≈ √V·[(1−γ)Z⁻¹(1−1/N) + γ Z⁻¹(1−1/(Ne))], naik dengan N. Saat N tumbuh dengan Sharpe teramati ditahan tetap, benchmark SR* = E[max_N] memanjat menuju (dan ngelewatin) Sharpe teramatimu, jadi jarak (ŜR − SR*) mengecil, dan DSR = Φ[(ŜR − SR*)/σ(ŜR)] TURUN. Di luar N impas, keberuntungan saja menjelaskan hasilnya dan DSR turun di bawah 0,5 — kemungkinan overfit.
</details>

**3.** Tulis Deflated Sharpe Ratio dalam istilah Probabilistic Sharpe Ratio, dan jelasin apa tiap input ($\\hat{SR}$, $SR^\\*$, $\\sigma(\\hat{SR})$) dan gimana dia ngegerakin DSR.

<details><summary>Jawaban</summary>
DSR = PSR(SR* = E[max_N]) = Φ[(ŜR − SR*)/σ(ŜR)]. Input: (1) ŜR itu Sharpe TERAMATI dari strategi pemenang — ŜR lebih tinggi naikin DSR. (2) SR* = E[max_N], AMBANG KEBERUNTUNGAN = ekspektasi maksimum Sharpe dari N percobaan tanpa-skill — dia naik dengan N dan NURUNIN DSR (dia benchmark yang harus kamu kalahin, disetel ke kebetulan terbaik dari pencarianmu, bukan ke nol). (3) σ(ŜR) itu STANDARD ERROR Sharpe (Lo 2002), σ(ŜR) = √[(1 − γ3·ŜR + ((γ4−1)/4)·ŜR²)/(T−1)] — dia mengecil dengan panjang sampel T (naikin DSR) dan tumbuh dengan skew negatif / kurtosis tinggi (nurunin DSR). DSR itu probabilitas Sharpe sejati ngelewatin ambang keberuntungan — yaitu probabilitas edge-nya asli SETELAH dideflasi buat pencarian.
</details>

**4.** Sebuah backtest ngelaporin Sharpe tahunan 1,5 selama 2 tahun dan gak bilang berapa strategi yang dicoba. Kolega kamu bilang "hebat, ayo alokasikan." Sebutkan tiga hal yang kamu lakuin sebelum setuju, dan bilang kenapa masing-masing membantu.

<details><summary>Jawaban</summary>
(1) MINTA JUMLAH PERCOBAAN N (dan log percobaan tiap sapuan parameter) — tanpa N kamu gak bisa ngitung ambang keberuntungan atau DSR, dan gak ngelaporin N itu sendiri bendera merah (Bailey dkk. 2014). (2) CATAT SAMPEL PENDEK — T = 2×252 = 504 obs bikin standard error Sharpe besar (Lo 2002), jadi 1,5 itu estimasi berisik; cek terhadap minimum backtest length dan minta lebih banyak sejarah. (3) HITUNG DSR dan/atau jalankan HOLDOUT OUT-OF-SAMPLE atau WALK-FORWARD / CPCV — kalau Sharpe ter-deflasi/out-of-sample runtuh relatif terhadap in-sample, dia overfit. Cuma alokasikan kalau DSR lolos ~0,95 dan kinerja out-of-sample bertahan.
</details>

**5.** Kenapa skew negatif dan kurtosis tinggi bikin Sharpe tinggi KURANG bisa-dipercaya, dan strategi jenis apa yang biasanya punya profil return itu?

<details><summary>Jawaban</summary>
Lo (2002) nunjukin standard error Sharpe itu σ(ŜR) = √[(1 − γ3·ŜR + ((γ4−1)/4)·ŜR²)/(T−1)]. Skewness NEGATIF γ3 (dengan ŜR positif, suku −γ3·ŜR jadi positif) dan kurtosis TINGGI γ4 (suku ((γ4−1)/4)·ŜR² tumbuh) keduanya MENAIKKAN standard error — jadi ESTIMASI Sharpe lebih berisik dari yang naif 1/√T sarankan, dan estimasi-titik tinggi kurang andal. Profil klasiknya itu JUALAN-OPSI / "mungutin receh di depan mesin giling" (memanen variance risk premium): banyak untung kecil diselingi rugi besar langka — skew negatif, ekor gemuk. Strategi semacam itu nge-post Sharpe yang menyanjung tapi rapuh secara statistik, jadi mereka khususnya butuh deflasi dan evaluasi yang sadar-ekor.
</details>`,
      },
    },
    {
      id: 'connections',
      heading: { en: 'Connections', id: 'Koneksi' },
      body: {
        en: `- **The prerequisite — "do you have an edge?"**: [@Trader_XO's expectancy framework](item:traderxo-expectancy). That module engineers a positive expectancy $E_R = p\\cdot b - (1-p)$ and validates it with Monte Carlo; THIS module is the adversarial sequel — a positive expectancy you *fit to noise* by trying many strategies is not an edge until it survives deflation. Expectancy says "is there an edge?"; the DSR says "is it real, or did the search invent it?"
- **The quant curriculum it lives in**: [the @insiliconot quant curriculum](item:insilico-quant-curriculum) — the canonical-sources track (stochastic control, vol surfaces, time series, and López de Prado's machine-learning workflow). The Deflated Sharpe Ratio and combinatorial purged cross-validation are the *evaluation* discipline that keeps that whole curriculum honest.
- **A sibling discretionary system**: [Jim Talbot's method](item:jimtalbot-method) — name the regime, run ≈3 fixed setups, journal for expectancy. Even a discretionary, low-$N$ trader benefits from the deflation mindset: the fewer strategies you *honestly* tried, the higher your DSR for the same Sharpe — a quantitative argument for simplicity over endless tinkering.
- **The flow/toxicity link (loosely)**: [Easley-López de Prado VPIN](item:easley-lopez-prado-vpin) — an order-flow toxicity metric that is itself estimated and tuned on history. The same multiple-testing discipline applies, and López de Prado is the common author bridging microstructure signals and the backtest-overfitting agenda.`,
        id: `- **Prasyarat — "apakah kamu punya edge?"**: [framework expectancy @Trader_XO](item:traderxo-expectancy). Module itu merekayasa expectancy positif $E_R = p\\cdot b - (1-p)$ dan memvalidasinya dengan Monte Carlo; module INI sekuel adversarial-nya — expectancy positif yang kamu *fit ke noise* dengan nyoba banyak strategi itu bukan edge sampai dia bertahan dari deflasi. Expectancy bilang "apakah ada edge?"; DSR bilang "apakah nyata, atau pencariannya yang nyiptain?"
- **Kurikulum kuant tempat dia tinggal**: [kurikulum kuant @insiliconot](item:insilico-quant-curriculum) — jalur sumber-kanonik (stochastic control, vol surface, time series, dan workflow machine-learning López de Prado). Deflated Sharpe Ratio dan combinatorial purged cross-validation itu disiplin *evaluasi* yang jaga seluruh kurikulum itu jujur.
- **Sistem diskresioner bersaudara**: [metode Jim Talbot](item:jimtalbot-method) — namai rezim, jalankan ≈3 setup tetap, jurnal buat expectancy. Bahkan trader diskresioner ber-$N$-rendah diuntungkan dari pola pikir deflasi: makin sedikit strategi yang *jujur* kamu coba, makin tinggi DSR-mu buat Sharpe yang sama — argumen kuantitatif buat kesederhanaan ketimbang oprek tanpa-henti.
- **Tautan flow/toksisitas (longgar)**: [VPIN Easley-López de Prado](item:easley-lopez-prado-vpin) — metrik toksisitas order-flow yang sendiri diestimasi dan disetel di sejarah. Disiplin multiple-testing yang sama berlaku, dan López de Prado itu penulis bersama yang menjembatani sinyal microstructure dan agenda backtest-overfitting.`,
      },
    },
    {
      id: 'sources',
      heading: { en: 'Sources', id: 'Sumber' },
      body: {
        en: `Compiled from the peer-reviewed quantitative-finance literature on selection bias, multiple testing and the statistics of the Sharpe ratio. All material is evidence-tagged [Established] (peer-reviewed journals and a standard practitioner-academic text). **Educational, NOT financial advice. None of this is a recommendation to trade any strategy; the Deflated Sharpe Ratio is a diagnostic for the credibility of a backtest, not a profit forecast. A high DSR is necessary, not sufficient — regimes change, edges decay, and out-of-sample reality can still differ from any in-sample or deflated estimate. Do your own research and consult a licensed professional before risking capital.**

*The core references (web-verified):*
- **Bailey, D. H. & López de Prado, M.** (2014). "The Deflated Sharpe Ratio: Correcting for Selection Bias, Backtest Overfitting and Non-Normality." *The Journal of Portfolio Management* 40(5), 94–107. The DSR = PSR benchmarked against the $N$-trial expected maximum Sharpe. [Established]
- **Bailey, D. H., Borwein, J. M., López de Prado, M. & Zhu, Q. J.** (2014). "Pseudo-Mathematics and Financial Charlatanism: The Effects of Backtest Overfitting on Out-of-Sample Performance." *Notices of the American Mathematical Society* 61(5), 458–471. Searching enough configurations manufactures an arbitrarily high in-sample Sharpe; not reporting $N$ is a red flag. [Established]
- **Harvey, C. R., Liu, Y. & Zhu, H.** (2016). "… and the Cross-Section of Expected Returns." *The Review of Financial Studies* 29(1), 5–68. Hundreds of tested factors mean the $t>2$ bar is too low; demand roughly $t>3$. [Established]
- **Lo, A. W.** (2002). "The Statistics of Sharpe Ratios." *Financial Analysts Journal* 58(4), 36–52. The standard error and distribution of an estimated Sharpe; the $\\sqrt{12}$-annualisation caveat under autocorrelation. [Established]
- **López de Prado, M.** (2018). *Advances in Financial Machine Learning.* Wiley (ISBN 978-1-119-48208-6). Purged / combinatorial cross-validation, the minimum backtest length, and deflated performance metrics. [Established]

*Supporting (multiple-testing foundations):*
- **Benjamini, Y. & Hochberg, Y.** (1995). "Controlling the False Discovery Rate." *Journal of the Royal Statistical Society B* 57(1), 289–300. The statistical backbone of "more tests ⇒ higher bar." [Established]
- **Bailey, D. H., Borwein, J. M., López de Prado, M. & Zhu, Q. J.** (2017). "The Probability of Backtest Overfitting." *Journal of Computational Finance* 20(4), 39–69. PBO via combinatorially symmetric cross-validation. [Established]
- **Harvey, C. R. & Liu, Y.** (2015). "Backtesting." *The Journal of Portfolio Management* 42(1), 13–28. Haircutting reported Sharpes for multiple testing. [Established]`,
        id: `Dikompilasi dari literatur keuangan kuantitatif peer-review soal selection bias, multiple testing dan statistik Sharpe ratio. Semua materi ber-tag bukti [Established] (jurnal peer-review dan satu teks praktisi-akademis standar). **Edukatif, BUKAN nasihat keuangan. Tidak ada di sini yang rekomendasi buat men-trade strategi apa pun; Deflated Sharpe Ratio itu diagnostik buat kredibilitas backtest, bukan ramalan profit. DSR tinggi itu perlu, bukan cukup — rezim berubah, edge meluruh, dan realitas out-of-sample masih bisa beda dari estimasi in-sample atau ter-deflasi mana pun. Lakukan riset sendiri dan konsultasi profesional berlisensi sebelum mempertaruhkan modal.**

*Referensi inti (terverifikasi-web):*
- **Bailey, D. H. & López de Prado, M.** (2014). "The Deflated Sharpe Ratio: Correcting for Selection Bias, Backtest Overfitting and Non-Normality." *The Journal of Portfolio Management* 40(5), 94–107. DSR = PSR yang di-benchmark terhadap ekspektasi maksimum Sharpe $N$-percobaan. [Established]
- **Bailey, D. H., Borwein, J. M., López de Prado, M. & Zhu, Q. J.** (2014). "Pseudo-Mathematics and Financial Charlatanism: The Effects of Backtest Overfitting on Out-of-Sample Performance." *Notices of the American Mathematical Society* 61(5), 458–471. Nyari cukup konfigurasi bikin Sharpe in-sample setinggi apa pun; gak ngelaporin $N$ itu bendera merah. [Established]
- **Harvey, C. R., Liu, Y. & Zhu, H.** (2016). "… and the Cross-Section of Expected Returns." *The Review of Financial Studies* 29(1), 5–68. Ratusan faktor diuji berarti bar $t>2$ terlalu rendah; tuntut kira-kira $t>3$. [Established]
- **Lo, A. W.** (2002). "The Statistics of Sharpe Ratios." *Financial Analysts Journal* 58(4), 36–52. Standard error dan distribusi Sharpe ter-estimasi; peringatan penahunan $\\sqrt{12}$ di bawah autokorelasi. [Established]
- **López de Prado, M.** (2018). *Advances in Financial Machine Learning.* Wiley (ISBN 978-1-119-48208-6). Purged / combinatorial cross-validation, minimum backtest length, dan metrik kinerja ter-deflasi. [Established]

*Pendukung (fondasi multiple-testing):*
- **Benjamini, Y. & Hochberg, Y.** (1995). "Controlling the False Discovery Rate." *Journal of the Royal Statistical Society B* 57(1), 289–300. Tulang punggung statistik dari "lebih banyak uji ⇒ bar lebih tinggi." [Established]
- **Bailey, D. H., Borwein, J. M., López de Prado, M. & Zhu, Q. J.** (2017). "The Probability of Backtest Overfitting." *Journal of Computational Finance* 20(4), 39–69. PBO via combinatorially symmetric cross-validation. [Established]
- **Harvey, C. R. & Liu, Y.** (2015). "Backtesting." *The Journal of Portfolio Management* 42(1), 13–28. Memangkas Sharpe yang dilaporkan buat multiple testing. [Established]`,
      },
    },
  ],

  audio: { enabled: true },

  selfTest: [
    {
      sectionId: 'motivation',
      question: { en: `Explain "backtest overfitting" via selection bias, and why testing N skill-less strategies and reporting the best produces an inflated Sharpe.`, id: `Jelasin "backtest overfitting" lewat selection bias, dan kenapa nguji N strategi tanpa-skill dan ngelaporin yang terbaik ngehasilin Sharpe yang menggembung.` },
      prompt: { en: 'Before continuing, try answering:', id: 'Sebelum lanjut, coba jawab:' },
      answer: {
        en: `Backtest overfitting (a.k.a. multiple testing / data-snooping) is reporting the BEST of many strategies as if it were chosen in advance. Each skill-less strategy has a TRUE Sharpe of zero, but its SAMPLE Sharpe over a finite record is a noisy estimate scattered around zero. When you test N of them and keep the maximum, you are not sampling a random strategy — you are sampling the right tail, and the expected maximum drifts upward with N (roughly like √(2·ln N)). So with enough trials the winning Sharpe looks impressive purely from SELECTION BIAS, with no real edge. Bailey, Borwein, López de Prado & Zhu (2014) proved you can manufacture an arbitrarily high in-sample Sharpe by searching; Harvey, Liu & Zhu (2016) showed the same forces make most "discovered" factors likely false, so the t>2 bar is too lenient. The remedy is to deflate the Sharpe for N (and for sample length and fat tails) — and to always REPORT the number of trials, because a backtest that hides N cannot be assessed for overfitting.`,
        id: `Backtest overfitting (alias multiple testing / data-snooping) itu ngelaporin yang TERBAIK dari banyak strategi seolah dipilih di muka. Tiap strategi tanpa-skill punya Sharpe SEJATI nol, tapi Sharpe SAMPEL-nya atas rekam jejak berhingga itu estimasi berisik yang berserak di sekitar nol. Pas kamu nguji N di antaranya dan nahan maksimumnya, kamu gak nyampel strategi acak — kamu nyampel ekor kanan, dan ekspektasi maksimum melayang naik dengan N (kira-kira kayak √(2·ln N)). Jadi dengan cukup percobaan Sharpe pemenang kelihatan mengesankan murni dari SELECTION BIAS, tanpa edge nyata. Bailey, Borwein, López de Prado & Zhu (2014) ngebuktiin kamu bisa bikin Sharpe in-sample setinggi apa pun dengan nyari; Harvey, Liu & Zhu (2016) nunjukin gaya yang sama bikin kebanyakan faktor "ditemukan" kemungkinan palsu, jadi bar t>2 terlalu lunak. Obatnya adalah ngedeflasi Sharpe buat N (dan buat panjang sampel dan ekor gemuk) — dan selalu LAPORIN jumlah percobaan, karena backtest yang nyembunyiin N gak bisa dinilai buat overfitting.`,
      },
    },
    {
      sectionId: 'formalization',
      question: { en: `Write the Deflated Sharpe Ratio and the expected-maximum (luck) threshold, and explain what makes the DSR rise or fall.`, id: `Tulis Deflated Sharpe Ratio dan ambang ekspektasi-maksimum (keberuntungan), dan jelasin apa yang bikin DSR naik atau turun.` },
      prompt: { en: 'Before continuing, try answering:', id: 'Sebelum lanjut, coba jawab:' },
      answer: {
        en: `The luck threshold is the expected maximum Sharpe of N skill-less trials: SR* = E[max_N] ≈ √V·[(1−γ)·Z⁻¹(1−1/N) + γ·Z⁻¹(1−1/(N·e))], where γ ≈ 0.5772 is Euler-Mascheroni, Z⁻¹ is the inverse normal CDF, e is Euler's number, and V = 1/(T−1) is the null variance of a Sharpe estimate. The Deflated Sharpe Ratio is the Probabilistic Sharpe Ratio benchmarked against that threshold: DSR = PSR(SR* = E[max_N]) = Φ[(ŜR − SR*)/σ(ŜR)], where σ(ŜR) = √[(1 − γ3·ŜR + ((γ4−1)/4)·ŜR²)/(T−1)] is Lo's (2002) Sharpe standard error. The DSR RISES with a higher observed Sharpe ŜR, a longer sample T (which shrinks both σ and, via V, the threshold), and cleaner (more Gaussian) returns. It FALLS as N grows (the threshold SR* climbs toward and past ŜR), as the sample shortens, and with negative skew / high kurtosis (which inflate σ). Read the DSR as the probability the strategy is genuinely skilled AFTER deflating for the search; a common rule treats DSR > 0.95 as evidence of skill.`,
        id: `Ambang keberuntungan itu ekspektasi maksimum Sharpe dari N percobaan tanpa-skill: SR* = E[max_N] ≈ √V·[(1−γ)·Z⁻¹(1−1/N) + γ·Z⁻¹(1−1/(N·e))], dengan γ ≈ 0,5772 itu Euler-Mascheroni, Z⁻¹ itu inverse CDF normal, e itu bilangan Euler, dan V = 1/(T−1) itu varians null estimasi Sharpe. Deflated Sharpe Ratio itu Probabilistic Sharpe Ratio yang di-benchmark terhadap ambang itu: DSR = PSR(SR* = E[max_N]) = Φ[(ŜR − SR*)/σ(ŜR)], dengan σ(ŜR) = √[(1 − γ3·ŜR + ((γ4−1)/4)·ŜR²)/(T−1)] itu standard error Sharpe Lo (2002). DSR NAIK dengan Sharpe teramati ŜR lebih tinggi, sampel T lebih panjang (yang ngecilin baik σ maupun, lewat V, ambangnya), dan return lebih bersih (lebih Gaussian). Dia TURUN saat N tumbuh (ambang SR* memanjat menuju dan ngelewatin ŜR), saat sampel memendek, dan dengan skew negatif / kurtosis tinggi (yang ngembungin σ). Baca DSR sebagai probabilitas strategi beneran skillful SETELAH dideflasi buat pencarian; aturan umum mperlakukan DSR > 0,95 sebagai bukti skill.`,
      },
    },
    {
      sectionId: 'worked-example',
      question: { en: `For Sharpe 2 over 3 years, why does the result move from "inconclusive" at N=100 toward "overfit" at N=1000? Tie it to the breakeven N.`, id: `Buat Sharpe 2 selama 3 tahun, kenapa hasilnya bergerak dari "belum konklusif" di N=100 menuju "overfit" di N=1000? Kaitkan ke N impas.` },
      prompt: { en: 'Before continuing, try answering:', id: 'Sebelum lanjut, coba jawab:' },
      answer: {
        en: `With T = 3×252 = 756, the null spread of one Sharpe is √V = √(1/755) ≈ 0.0364 per observation. At N=100 the expected-max bracket is (1−γ)·Z⁻¹(0.99) + γ·Z⁻¹(0.99632) ≈ 0.4228·2.326 + 0.5772·2.683 ≈ 2.53, giving a per-obs SR* ≈ 0.092 and annualised ≈ 1.46. The observed per-obs Sharpe is 2/√252 ≈ 0.126 with Lo SE ≈ 0.0365, so DSR = Φ[(0.126 − 0.092)/0.0365] = Φ[0.93] ≈ 0.82 — below the 0.95 bar, hence INCONCLUSIVE. Raising N to 1000 pushes the expected-max threshold up to ~1.88 annualised; the gap ŜR − SR* shrinks and the DSR falls to ~58% — still well below the 0.95 bar. The BREAKEVEN N is the number of trials at which the luck threshold first reaches the observed Sharpe of 2 — here around N ≈ 2,100; once your real N exceeds that, the DSR drops through 0.5 and the verdict flips to LIKELY OVERFIT (e.g. N=5,000 → SR* ≈ 2.1, DSR ≈ 41%), because pure search alone is then expected to produce a Sharpe of 2 over three years, so the backtest stops being evidence. The single observed Sharpe is "skill" with few honest trials and "noise" with many — which is exactly why N must be reported and the Sharpe deflated.`,
        id: `Dengan T = 3×252 = 756, sebaran null satu Sharpe itu √V = √(1/755) ≈ 0,0364 per observasi. Di N=100 kurung ekspektasi-maks itu (1−γ)·Z⁻¹(0,99) + γ·Z⁻¹(0,99632) ≈ 0,4228·2,326 + 0,5772·2,683 ≈ 2,53, ngasih SR* per-obs ≈ 0,092 dan ditahunin ≈ 1,46. Sharpe per-obs teramati itu 2/√252 ≈ 0,126 dengan SE Lo ≈ 0,0365, jadi DSR = Φ[(0,126 − 0,092)/0,0365] = Φ[0,93] ≈ 0,82 — di bawah bar 0,95, makanya BELUM KONKLUSIF. Naikin N ke 1000 ndorong ambang ekspektasi-maks naik ke ~1,88 ditahunin; jarak ŜR − SR* mengecil dan DSR turun ke ~58% — masih jauh di bawah bar 0,95. N IMPAS itu jumlah percobaan di mana ambang keberuntungan pertama mencapai Sharpe teramati 2 — di sini sekitar N ≈ 2.100; begitu N nyatamu ngelewatinnya, DSR turun ngelewatin 0,5 dan vonis flip ke KEMUNGKINAN OVERFIT (misal N=5.000 → SR* ≈ 2,1, DSR ≈ 41%), karena pencarian murni saja lalu diharapkan ngehasilin Sharpe 2 selama tiga tahun, jadi backtest-nya berhenti jadi bukti. Satu Sharpe teramati itu "skill" dengan sedikit percobaan jujur dan "noise" dengan banyak — yang persis kenapa N harus dilaporkan dan Sharpe dideflasi.`,
      },
    },
  ],
};
