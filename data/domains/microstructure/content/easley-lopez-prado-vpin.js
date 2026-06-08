export const CONTENT = {
  itemId: 'easley-lopez-prado-vpin',
  estimatedReadMinutes: 40,

  author: {
    fullName: { en: 'David Easley, Marcos López de Prado & Maureen O\'Hara', id: 'David Easley, Marcos López de Prado & Maureen O\'Hara' },
    affiliation: {
      en: 'Easley: Henry Scarborough Professor of Social Science & Professor of Information Science, Cornell University. López de Prado: Global Head of Quantitative R&D, Abu Dhabi Investment Authority (ADIA); Professor of Practice, Cornell Engineering. O\'Hara: Robert W. Purcell Professor of Finance, Cornell Johnson.',
      id: 'Easley: Henry Scarborough Professor of Social Science & Professor of Information Science, Cornell University. López de Prado: Global Head of Quantitative R&D, Abu Dhabi Investment Authority (ADIA); Professor of Practice, Cornell Engineering. O\'Hara: Robert W. Purcell Professor of Finance, Cornell Johnson.'
    },
    tagline: {
      en: 'PIN re-engineered for the high-frequency world — a real-time gauge of order-flow toxicity built on the volume clock, that its authors argued flagged the conditions behind the 2010 Flash Crash (and drew a sharp empirical rebuttal).',
      id: 'PIN yang di-rekayasa-ulang buat dunia high-frequency — gauge real-time order-flow toxicity yang dibangun di atas volume clock, yang menurut author-nya nge-flag kondisi di balik Flash Crash 2010 (dan memicu rebuttal empiris yang tajam).'
    },
    bio: {
      en: `David Easley is the Henry Scarborough Professor of Social Science and Professor of Information Science at Cornell, where he chaired the economics department (1987–1993, 2010–2012). He took his PhD at Northwestern in 1979, is a Fellow of the Econometric Society, chaired the NASDAQ-OMX economic advisory board, and co-authored the widely used text "Networks, Crowds, and Markets" with Jon Kleinberg. His decades-long collaboration with O'Hara produced the PIN framework that VPIN extends.

Marcos López de Prado is one of the most prominent quantitative practitioners of his generation. He holds two doctorates (financial econometrics, 2003; mathematical finance, 2011) from Universidad Complutense de Madrid, with post-doctoral work at Harvard and Cornell. He was the first Head of Machine Learning at AQR Capital and led a $13B quantitative business at Guggenheim Partners before becoming Global Head of Quantitative R&D at ADIA. His 2018 book "Advances in Financial Machine Learning" is a standard reference, and he won the Journal of Portfolio Management's Quant of the Year (2019).

Maureen O'Hara (see her dedicated module) is the Robert W. Purcell Professor at Cornell Johnson, a past president of the American Finance Association, and author of the canonical "Market Microstructure Theory" (1995). She is the theoretical anchor of the PIN/VPIN line.

The 2012 paper sits at the intersection of O'Hara and Easley's structural microstructure theory and López de Prado's practitioner's instinct for what actually breaks in modern electronic markets — the volume clock and bulk-volume classification are very much engineering choices made for real, messy high-frequency data.`,
      id: `David Easley adalah Henry Scarborough Professor of Social Science dan Professor of Information Science di Cornell, di mana dia ngepalain departemen ekonomi (1987–1993, 2010–2012). Dia ambil PhD di Northwestern tahun 1979, Fellow of the Econometric Society, ngepalain NASDAQ-OMX economic advisory board, dan co-author textbook yang banyak dipake "Networks, Crowds, and Markets" sama Jon Kleinberg. Kolaborasi puluhan-tahun dia sama O'Hara ngehasilin framework PIN yang VPIN extend.

Marcos López de Prado salah satu praktisi kuantitatif paling prominent di generasinya. Dia punya dua doktorat (financial econometrics, 2003; mathematical finance, 2011) dari Universidad Complutense de Madrid, dengan post-doc di Harvard dan Cornell. Dia jadi Head of Machine Learning pertama di AQR Capital dan mimpin bisnis kuantitatif $13B di Guggenheim Partners sebelum jadi Global Head of Quantitative R&D di ADIA. Buku 2018-nya "Advances in Financial Machine Learning" jadi referensi standard, dan dia menang Journal of Portfolio Management's Quant of the Year (2019).

Maureen O'Hara (lihat modul khususnya) adalah Robert W. Purcell Professor di Cornell Johnson, past president American Finance Association, dan author "Market Microstructure Theory" (1995) yang kanon. Dia anchor teoritis dari line PIN/VPIN.

Paper 2012 itu duduk di intersection antara teori microstructure struktural O'Hara dan Easley dan insting praktisi López de Prado tentang apa yang sebenernya jebol di market elektronik modern — volume clock dan bulk-volume classification itu jelas pilihan engineering yang dibuat buat data high-frequency yang nyata dan berantakan.`
    },
    focus: {
      en: `Measuring order-flow toxicity — the rate at which liquidity providers are adversely selected — in real time, fast enough to be useful in a high-frequency market. The construction has two moves: (1) replace calendar time with a *volume clock* (sample in equal-volume buckets, not equal-time intervals), and (2) within each bucket, split volume into buy- and sell-initiated parts via *bulk volume classification* rather than trade-by-trade tick rules. VPIN is then the average absolute order imbalance across a window of buckets — a model-light, ML-free analogue of PIN that updates continuously.`,
      id: `Ngukur order-flow toxicity — laju liquidity provider di-adverse-select — secara real time, cukup cepet buat berguna di market high-frequency. Konstruksinya punya dua langkah: (1) ganti calendar time sama *volume clock* (sampel di equal-volume bucket, bukan equal-time interval), dan (2) di dalam tiap bucket, pisahin volume jadi bagian buy- dan sell-initiated lewat *bulk volume classification* daripada tick rule trade-per-trade. VPIN itu rata-rata absolute order imbalance across satu window bucket — analog PIN yang ringan-model, bebas-ML, yang update terus-menerus.`
    },
    intellectualLineage: {
      en: `The direct parent is PIN — the probability of informed trading from Easley-Kiefer-O'Hara-Paperman (1996), itself a structural estimate built on the Glosten-Milgrom / Easley-O'Hara adverse-selection tradition. Classic PIN is estimated by maximum likelihood on daily buy/sell counts: it is slow, needs many days of data, and assumes a stable daily information structure — all fatal in a high-frequency setting where toxicity can spike and clear within minutes. VPIN keeps PIN's economic content (imbalance reveals informed pressure) but discards its estimation machinery, substituting the volume clock and bulk classification. The volume clock itself draws on a long observation that markets run on "volume time," not calendar time — information and volatility arrive in bursts of activity, so sampling by volume normalizes for that and recovers more stationary statistical behaviour. López de Prado's later financial-ML program generalizes exactly this instinct: sample and label data by the right clock.`,
      id: `Parent langsungnya PIN — probability of informed trading dari Easley-Kiefer-O'Hara-Paperman (1996), yang sendiri estimate struktural yang dibangun di atas tradisi adverse-selection Glosten-Milgrom / Easley-O'Hara. PIN klasik di-estimate pakai maximum likelihood di daily buy/sell count: lambat, butuh banyak hari data, dan assume stable daily information structure — semuanya fatal di setting high-frequency di mana toxicity bisa spike dan clear dalam menit. VPIN nahan economic content-nya PIN (imbalance reveal informed pressure) tapi buang machinery estimasinya, ganti sama volume clock dan bulk classification. Volume clock sendiri narik dari observasi lama bahwa market jalan di "volume time," bukan calendar time — informasi dan volatility datang dalam burst aktivitas, jadi sampling by volume nge-normalize itu dan recover behaviour statistik yang lebih stationary. Program financial-ML López de Prado kemudian nge-generalize persis insting ini: sampel dan label data pakai clock yang bener.`
    },
    keyCollaborators: {
      en: `**Each other**, extending a 30-year Easley–O'Hara partnership with López de Prado's practitioner lens. The PIN ancestor is **Easley, Kiefer, O'Hara & Paperman (1996)**. The trio also wrote **"The Volume Clock: Insights into the High-Frequency Paradigm" (2012)**, the manifesto for volume-time sampling. The most consequential *adversarial* collaborator is the literature that pushed back: **Torben Andersen & Oleg Bondarenko (2014)** mounted the sharpest empirical critique of VPIN's flash-crash claims, prompting a published rejoinder. That exchange is part of why VPIN is taught with caveats rather than as settled fact.`,
      id: `**Satu sama lain**, nge-extend partnership Easley–O'Hara 30-tahun sama lens praktisi López de Prado. Ancestor PIN-nya **Easley, Kiefer, O'Hara & Paperman (1996)**. Trio ini juga nulis **"The Volume Clock: Insights into the High-Frequency Paradigm" (2012)**, manifesto buat volume-time sampling. Kolaborator *adversarial* paling konsekuensial itu literatur yang ndorong balik: **Torben Andersen & Oleg Bondarenko (2014)** ngebangun kritik empiris paling tajam ke klaim flash-crash VPIN, memicu rejoinder yang dipublish. Pertukaran itu bagian dari kenapa VPIN diajarin dengan caveat, bukan sebagai fakta yang udah settled.`
    },
    legacy: {
      en: `VPIN put "order-flow toxicity" into the working vocabulary of execution desks and exchanges, and made the *volume clock* a standard tool — bars sampled by volume (or dollar, or imbalance) are now routine in quantitative pipelines, popularized further by López de Prado's financial-ML work. As a toxicity *concept* it is widely used: liquidity providers monitor real-time imbalance to decide when to widen or withdraw, and the framing of liquidity as something that can evaporate when flow turns toxic is now mainstream. As a *predictor*, its record is genuinely contested — the Andersen-Bondarenko critique landed hard, and careful users treat VPIN as a contemporaneous toxicity gauge rather than a clean early-warning signal. Both halves are the legacy: a durable concept and tool set, and a cautionary case study in how a high-frequency metric can be mechanically entangled with the volume and volatility it claims to predict.`,
      id: `VPIN masukin "order-flow toxicity" ke vocabulary kerja execution desk dan exchange, dan bikin *volume clock* jadi tool standard — bar yang di-sampel by volume (atau dollar, atau imbalance) sekarang rutin di pipeline kuantitatif, dipopulerin lebih lanjut sama kerja financial-ML López de Prado. Sebagai *konsep* toxicity dia dipake luas: liquidity provider monitor real-time imbalance buat mutusin kapan widen atau withdraw, dan framing liquidity sebagai sesuatu yang bisa menguap pas flow jadi toxic sekarang mainstream. Sebagai *prediktor*, track record-nya beneran diperdebatkan — kritik Andersen-Bondarenko mendarat keras, dan user yang hati-hati nganggep VPIN sebagai gauge toxicity kontemporer daripada sinyal early-warning yang bersih. Dua-duanya legacy-nya: konsep dan tool set yang awet, dan studi kasus peringatan tentang gimana metrik high-frequency bisa secara mekanis terjerat sama volume dan volatility yang dia klaim prediksi.`
    },
    keyWorks: [
      { year: 2012, title: 'Flow Toxicity and Liquidity in a High-Frequency World (this item)', venue: 'Review of Financial Studies' },
      { year: 2012, title: 'The Volume Clock: Insights into the High-Frequency Paradigm (Easley, López de Prado & O\'Hara)', venue: 'Journal of Portfolio Management' },
      { year: 1996, title: 'Liquidity, Information, and Infrequently Traded Stocks (PIN; Easley, Kiefer, O\'Hara & Paperman)', venue: 'Journal of Finance' },
      { year: 2018, title: 'Advances in Financial Machine Learning (López de Prado)', venue: 'Wiley' },
    ],
  },

  sections: [
    // ─────────────── 1. motivation ───────────────
    {
      id: 'motivation',
      heading: { en: 'Why this matters', id: 'Kenapa ini penting' },
      body: {
        en: `The PIN framework (Easley-Kiefer-O'Hara-Paperman 1996) gave microstructure a way to *measure* adverse selection: estimate the probability that an arriving order is informed. But classic PIN is estimated by maximum likelihood on **daily** counts of buy- and sell-initiated trades, over **many days**. That is hopeless for the modern question that actually matters on a trading floor: *is the flow I am facing toxic right now?*

On 6 May 2010, the U.S. equity market fell roughly 9% and rebounded within minutes — the **Flash Crash**. Liquidity did not slowly dry up; it evaporated. A daily, slowly-estimated metric is useless for seeing that coming. Easley, López de Prado, and O'Hara (2012) asked: can we keep PIN's economic insight — that **order imbalance reveals informed, adversely-selecting pressure** — but compute it fast enough to be a real-time gauge?

Their answer, **VPIN** (Volume-Synchronized PIN), makes two engineering moves:

1. **Switch clocks.** Stop sampling in calendar time (per minute, per hour). Sample in a **volume clock**: cut the tape into consecutive buckets of *equal volume* (say, each bucket = 1/50 of average daily volume). High-activity periods produce many buckets quickly; quiet periods few. This is the natural clock of a market, because information and volatility arrive in bursts of *trading*, not at a steady calendar rate.

2. **Classify in bulk.** Instead of labelling each individual trade buy or sell with a tick rule (fragile and slow at high frequency), split each bucket's *total* volume into buy- and sell-initiated parts in one shot, from the bucket's price change — **bulk volume classification**.

VPIN is then just the average absolute buy/sell imbalance across a rolling window of buckets — a number between 0 and 1 that rises when flow is one-sided (toxic) and falls when it is balanced. No maximum likelihood, no multi-day window, updates every time a bucket fills.

The operational promise is large and the controversy is real — both are covered below. But the reframing alone reshaped practice: **liquidity is not a constant; it is a function of how toxic the current flow is**, and toxicity is something you can try to watch in real time.`,
        id: `Framework PIN (Easley-Kiefer-O'Hara-Paperman 1996) ngasih microstructure cara buat *ngukur* adverse selection: estimate probability bahwa order yang datang itu informed. Tapi PIN klasik di-estimate pakai maximum likelihood di count **harian** dari trade buy- dan sell-initiated, over **banyak hari**. Itu gak berguna buat pertanyaan modern yang sebenernya matter di trading floor: *apakah flow yang aku hadapi toxic sekarang?*

Tanggal 6 Mei 2010, market ekuitas US jatuh kira-kira 9% dan rebound dalam menit — **Flash Crash**. Liquidity gak perlahan-lahan kering; dia menguap. Metrik harian yang di-estimate lambat gak berguna buat lihat itu datang. Easley, López de Prado, dan O'Hara (2012) nanya: bisa gak kita nahan insight ekonomi PIN — bahwa **order imbalance reveal informed pressure yang adverse-selecting** — tapi compute cukup cepet buat jadi gauge real-time?

Jawaban mereka, **VPIN** (Volume-Synchronized PIN), bikin dua langkah engineering:

1. **Ganti clock.** Berhenti sampling di calendar time (per menit, per jam). Sampel di **volume clock**: potong tape jadi bucket berturut dengan *volume sama* (misal, tiap bucket = 1/50 average daily volume). Periode high-activity ngehasilin banyak bucket cepet; periode sepi sedikit. Ini clock natural sebuah market, karena informasi dan volatility datang dalam burst *trading*, bukan di laju calendar yang steady.

2. **Klasifikasi secara bulk.** Daripada nge-label tiap trade individual buy atau sell pakai tick rule (rapuh dan lambat di high frequency), pisahin *total* volume tiap bucket jadi bagian buy- dan sell-initiated sekaligus, dari price change bucket itu — **bulk volume classification**.

VPIN lalu cuma rata-rata absolute buy/sell imbalance across rolling window bucket — angka antara 0 dan 1 yang naik pas flow one-sided (toxic) dan turun pas balanced. Gak ada maximum likelihood, gak ada window multi-hari, update tiap kali bucket penuh.

Janji operasionalnya gede dan kontroversinya nyata — dua-duanya dibahas di bawah. Tapi reframing-nya aja udah ngubah praktik: **liquidity itu bukan konstanta; dia fungsi dari seberapa toxic flow saat ini**, dan toxicity itu sesuatu yang bisa kamu coba pantau real-time.`
      }
    },

    // ─────────────── 2. intuition ───────────────
    {
      id: 'intuition',
      heading: { en: 'Intuition', id: 'Intuisi' },
      body: {
        en: `Start with the toxicity idea, because it is the heart of the metric. A market maker quotes both sides and hopes to earn the spread on roughly balanced two-way flow. Flow is **toxic** when it is persistently one-sided *and informed* — you keep buying from the MM right before the price rises, so the MM is systematically on the losing side. Toxic flow makes market-making unprofitable, so MMs defend themselves: they widen quotes, post less size, or withdraw. If toxicity gets high enough, liquidity collapses — which is the microstructure story of the Flash Crash.

How do you measure toxicity without knowing who is informed? The PIN insight: **imbalance is the footprint of informed flow.** Uninformed (liquidity) trades are roughly balanced buy/sell; informed trades lean one way (the correct way). So a sustained excess of buys over sells (or vice versa) is the visible signature of informed, adversely-selecting pressure. VPIN measures exactly that excess — the absolute imbalance — as a fraction of total volume.

Now the two clock-and-classification tricks.

**The volume clock.** Calendar time is a bad ruler for markets. A minute at the open carries far more information than a minute at lunch. If you sample per minute, your statistics are wildly non-stationary. Sample per *equal chunk of volume* instead and the picture stabilizes: each bucket represents the same amount of "market activity," and the well-known intraday volume smile is absorbed into the clock rather than polluting the metric. Think of it as letting the market's own pace set the sampling rate.

**Bulk volume classification (BVC).** At high frequency you cannot reliably tag each trade as buyer- or seller-initiated — the tick rule mislabels, quotes flicker, trades print out of sequence. BVC sidesteps this: take a whole bucket, look at its net price change, and infer what *fraction* of the bucket's volume was buy-initiated. A big up-move over the bucket ⇒ mostly buys; a flat bucket ⇒ roughly 50/50; a big down-move ⇒ mostly sells. You never classify a single trade — you classify the bucket in aggregate, which is both faster and more robust.

Put together: VPIN watches, in volume-time, how lopsided the buy/sell split of each equal-volume bucket is, and reports the running average. High and rising VPIN = the book is being leaned on, toxicity is building, expect liquidity providers to flinch.`,
        id: `Mulai dari ide toxicity, karena itu jantung metriknya. Market maker quote dua sisi dan berharap dapet spread di flow dua-arah yang kira-kira balanced. Flow itu **toxic** pas dia persisten one-sided *dan informed* — kamu terus beli dari MM persis sebelum harga naik, jadi MM sistematis di sisi yang kalah. Toxic flow bikin market-making gak profitable, jadi MM bela diri: mereka widen quote, post less size, atau withdraw. Kalau toxicity cukup tinggi, liquidity collapse — itu cerita microstructure dari Flash Crash.

Gimana kamu ngukur toxicity tanpa tau siapa yang informed? Insight PIN: **imbalance itu jejak dari informed flow.** Trade uninformed (liquidity) kira-kira balanced buy/sell; trade informed condong satu arah (arah yang bener). Jadi sustained excess buy over sell (atau sebaliknya) itu signature visible dari informed pressure yang adverse-selecting. VPIN ngukur persis excess itu — absolute imbalance — sebagai fraksi dari total volume.

Sekarang dua trik clock-dan-classification.

**Volume clock.** Calendar time itu penggaris jelek buat market. Satu menit di open bawa jauh lebih banyak informasi dari satu menit pas makan siang. Kalau kamu sampel per menit, statistikmu wildly non-stationary. Sampel per *chunk volume yang sama* malah, dan gambarannya stabil: tiap bucket represent jumlah "market activity" yang sama, dan intraday volume smile yang terkenal diserap ke clock daripada nyemarin metrik. Anggap aja ngebiarin pace market sendiri yang nge-set sampling rate.

**Bulk volume classification (BVC).** Di high frequency kamu gak bisa reliably tag tiap trade sebagai buyer- atau seller-initiated — tick rule salah label, quote flicker, trade print out of sequence. BVC ngehindarin ini: ambil satu bucket utuh, lihat net price change-nya, dan infer *fraksi* mana dari volume bucket itu yang buy-initiated. Up-move gede over bucket ⇒ mostly buy; bucket flat ⇒ kira-kira 50/50; down-move gede ⇒ mostly sell. Kamu gak pernah klasifikasi satu trade — kamu klasifikasi bucket-nya agregat, yang lebih cepet sekaligus lebih robust.

Digabung: VPIN ngeliat, di volume-time, seberapa lopsided split buy/sell tiap equal-volume bucket, dan ngelaporin running average. VPIN tinggi dan naik = book lagi disandarin, toxicity lagi naik, expect liquidity provider mundur.`
      }
    },

    // ─────────────── 3. formalization ───────────────
    {
      id: 'formalization',
      heading: { en: 'Formal model', id: 'Model formal' },
      body: {
        en: `**Volume buckets.** Fix a bucket size $V$ (e.g. $V = \\tfrac{1}{50}$ of average daily volume). Walking through the trade tape, accumulate volume until it reaches $V$; that closes bucket $\\tau$ and opens the next. Buckets are equal in volume, unequal in calendar duration. Let $P_\\tau$ be the price at the close of bucket $\\tau$.

**Bulk volume classification.** Rather than sign individual trades, split bucket $\\tau$'s volume $V$ into buy- and sell-initiated parts from its price change:

$$\\boxed{V_\\tau^{B} = V \\cdot Z\\!\\left(\\frac{P_\\tau - P_{\\tau-1}}{\\sigma_{\\Delta P}}\\right), \\qquad V_\\tau^{S} = V - V_\\tau^{B}}$$

where $Z(\\cdot)$ is the standard normal CDF (the 2012 paper uses the standard normal; later BVC work generalizes $Z$ to a Student-$t$ CDF for heavier-tailed returns) and $\\sigma_{\\Delta P}$ is the standard deviation of the price changes between sampling bars inside the bucket (the paper's base implementation sums the CDF over intra-bucket time bars; this is a simplified bucket-level version). The logic: a large positive standardized return means the bucket was dominated by buyers, so $Z(\\cdot) \\to 1$ and almost all of $V$ is classified buy; a flat bucket gives $Z(0) = \\tfrac{1}{2}$, a 50/50 split; a large negative return gives $Z(\\cdot) \\to 0$, almost all sell.

**The VPIN metric.** Over a rolling window of $n$ buckets, VPIN is the average absolute order imbalance, normalized by bucket size:

$$\\boxed{\\text{VPIN} = \\frac{\\sum_{\\tau=1}^{n} \\left| V_\\tau^{S} - V_\\tau^{B} \\right|}{n \\, V}}$$

It lies in $[0, 1]$. Perfectly balanced buckets give $V^S = V^B$ and VPIN $= 0$; perfectly one-sided buckets give $|V^S - V^B| = V$ and VPIN $= 1$.

**Why this estimates toxicity.** In the underlying PIN model, total volume per period is informed plus uninformed, $\\alpha\\mu + 2\\epsilon$, while the *expected absolute imbalance* is approximately the informed part $\\alpha\\mu$ (the uninformed buy/sell imbalance is zero in expectation, but its absolute value still adds noise — so the relation is approximate, and the original authors write it with $\\approx$). The ratio of expected imbalance to total volume is then $\\approx \\tfrac{\\alpha\\mu}{\\alpha\\mu + 2\\epsilon}$ — which is PIN. VPIN is the volume-clock sample analogue of that ratio: average $\\tfrac{|V^S - V^B|}{V}$ across buckets and you approximate the probability that an arriving unit of volume is informed. It recovers PIN's economic content with none of its maximum-likelihood machinery.

**What it is not.** VPIN is a *sample statistic computed from price changes and volume*, not a fitted structural model. That is its strength (speed, no estimation) and the root of the critique below: because $V_\\tau^B$ is driven by the standardized return, VPIN is mechanically linked to volatility and volume — so one must be careful claiming it carries information *beyond* those.`,
        id: `**Volume bucket.** Fix ukuran bucket $V$ (misal $V = \\tfrac{1}{50}$ average daily volume). Jalan lewat trade tape, akumulasi volume sampai capai $V$; itu nutup bucket $\\tau$ dan buka berikutnya. Bucket sama dalam volume, beda dalam durasi calendar. Misal $P_\\tau$ price di close bucket $\\tau$.

**Bulk volume classification.** Daripada sign trade individual, pisahin volume $V$ bucket $\\tau$ jadi bagian buy- dan sell-initiated dari price change-nya:

$$\\boxed{V_\\tau^{B} = V \\cdot Z\\!\\left(\\frac{P_\\tau - P_{\\tau-1}}{\\sigma_{\\Delta P}}\\right), \\qquad V_\\tau^{S} = V - V_\\tau^{B}}$$

di mana $Z(\\cdot)$ itu standard normal CDF (paper 2012-nya pakai standard normal; kerja BVC kemudian nge-generalize $Z$ ke Student-$t$ CDF buat heavier-tailed return) dan $\\sigma_{\\Delta P}$ itu standard deviation perubahan price antara sampling bar di dalam bucket (implementasi base paper-nya nge-sum CDF over intra-bucket time bar; ini versi bucket-level yang disederhanain). Logikanya: standardized return positif gede berarti bucket didominasi buyer, jadi $Z(\\cdot) \\to 1$ dan hampir semua $V$ diklasifikasi buy; bucket flat ngasih $Z(0) = \\tfrac{1}{2}$, split 50/50; return negatif gede ngasih $Z(\\cdot) \\to 0$, hampir semua sell.

**Metrik VPIN.** Over rolling window $n$ bucket, VPIN itu rata-rata absolute order imbalance, dinormalisasi sama ukuran bucket:

$$\\boxed{\\text{VPIN} = \\frac{\\sum_{\\tau=1}^{n} \\left| V_\\tau^{S} - V_\\tau^{B} \\right|}{n \\, V}}$$

Dia ada di $[0, 1]$. Bucket yang perfectly balanced ngasih $V^S = V^B$ dan VPIN $= 0$; bucket yang perfectly one-sided ngasih $|V^S - V^B| = V$ dan VPIN $= 1$.

**Kenapa ini estimate toxicity.** Di model PIN yang mendasari, total volume per periode itu informed plus uninformed, $\\alpha\\mu + 2\\epsilon$, sementara *expected absolute imbalance* itu kira-kira bagian informed $\\alpha\\mu$ (signed imbalance buy/sell uninformed nol in expectation, tapi absolute value-nya masih nambah noise — jadi relasinya aproksimasi, dan author aslinya nulis pakai $\\approx$). Rasio expected imbalance ke total volume jadinya $\\approx \\tfrac{\\alpha\\mu}{\\alpha\\mu + 2\\epsilon}$ — yang itu PIN. VPIN itu analog sampel volume-clock dari rasio itu: rata-ratain $\\tfrac{|V^S - V^B|}{V}$ across bucket dan kamu approximate probability bahwa unit volume yang datang itu informed. Dia recover economic content PIN tanpa machinery maximum-likelihood-nya.

**Apa yang dia bukan.** VPIN itu *sample statistic yang dihitung dari price change dan volume*, bukan fitted structural model. Itu kekuatannya (cepet, gak ada estimasi) dan akar kritik di bawah: karena $V_\\tau^B$ digerakin sama standardized return, VPIN secara mekanis terhubung ke volatility dan volume — jadi harus hati-hati ngeklaim dia bawa informasi *di luar* itu.`
      }
    },

    // ─────────────── 4. worked-example ───────────────
    {
      id: 'worked-example',
      heading: { en: 'Worked example', id: 'Contoh kerjaan' },
      visualization: {
        id: 'vpin-simulator',
        component: 'VpinSim',
        title: {
          en: 'Order-flow toxicity on the volume clock',
          id: 'Order-flow toxicity di volume clock'
        },
        description: {
          en: "Each bar is a volume bucket; its height/direction is the buy ▲ / sell ▼ imbalance from bulk volume classification, V^B = V·Φ(z). VPIN (the gauge below) is the average absolute imbalance over the buckets — 0 when flow is balanced (bars hug the centre line), →1 when it is persistently one-sided (toxic). Drag toxicity up to push the standardized bucket returns one way and watch VPIN climb into the amber/red zone where market makers widen or withdraw — the microstructure story of the 2010 Flash Crash. Between-bucket noise scatters the bars without a net side.",
          id: "Tiap bar itu volume bucket; tinggi/arahnya itu imbalance buy ▲ / sell ▼ dari bulk volume classification, V^B = V·Φ(z). VPIN (gauge di bawah) itu rata-rata absolute imbalance over bucket — 0 pas flow balanced (bar nempel garis tengah), →1 pas persisten one-sided (toxic). Geser toxicity naik buat ndorong standardized bucket return ke satu arah dan lihat VPIN naik ke zona amber/merah di mana market maker widen atau withdraw — cerita microstructure Flash Crash 2010. Noise antar-bucket nyebar bar tanpa net side."
        },
        defaultParams: { toxicity: 0.4, noise: 0.8, seed: 12345 },
        height: 360,
      },
      body: {
        en: `**Compute VPIN over three buckets.** (Numbers illustrative; the procedure is the point.) Take bucket size $V = 10{,}000$ shares and suppose the standardized bucket returns $\\tfrac{P_\\tau - P_{\\tau-1}}{\\sigma_{\\Delta P}}$ are $+1.0$, $-0.5$, and $+0.2$. Apply bulk volume classification with the standard normal CDF $Z$:

| bucket $\\tau$ | std. return | $Z$ | $V^B = V\\,Z$ | $V^S = V - V^B$ | $\\lvert V^S - V^B\\rvert$ |
|---|---:|---:|---:|---:|---:|
| 1 | $+1.0$ | $0.841$ | $8413$ | $1587$ | $6826$ |
| 2 | $-0.5$ | $0.309$ | $3085$ | $6915$ | $3830$ |
| 3 | $+0.2$ | $0.579$ | $5793$ | $4207$ | $1586$ |

Read bucket 1: a $+1\\sigma$ move means $Z(1.0) = 0.841$, so $8413$ of the $10{,}000$ shares are classified buy-initiated and only $1587$ sell — a heavily one-sided, "toxic-looking" bucket with imbalance $6826$. Bucket 3 ($+0.2\\sigma$) is nearly balanced: imbalance only $1586$.

Now the metric:

$$\\text{VPIN} = \\frac{6826 + 3830 + 1586}{3 \\times 10{,}000} = \\frac{12{,}242}{30{,}000} \\approx 0.41.$$

So about **41% of order flow over this window looks directional** — an elevated toxicity reading. For intuition on the extremes: if every bucket had a near-zero standardized return, each $Z \\approx 0.5$, imbalances $\\approx 0$, and VPIN $\\approx 0$ (balanced, benign flow). If every bucket had a huge one-directional move, each $Z \\approx 1$ (or $0$), imbalance $\\approx V$, and VPIN $\\approx 1$ (maximally toxic).

**The operational read.** A desk computes this continuously as each new $10{,}000$-share bucket closes, dropping the oldest bucket from the window. A VPIN drifting up toward extreme percentiles of its own history is the signal that flow is turning one-sided — the cue to widen quotes or step back. Crucially, the input to the whole calculation is just **price changes and volume** — no quote book, no trade-by-trade signing, no maximum likelihood. That is what makes it fast enough for the high-frequency clock; it is also, as the critics stress, what ties it mechanically to volatility.`,
        id: `**Hitung VPIN over tiga bucket.** (Angka ilustratif; yang penting prosedurnya.) Ambil ukuran bucket $V = 10{,}000$ share dan misalkan standardized bucket return $\\tfrac{P_\\tau - P_{\\tau-1}}{\\sigma_{\\Delta P}}$ itu $+1.0$, $-0.5$, dan $+0.2$. Apply bulk volume classification pakai standard normal CDF $Z$:

| bucket $\\tau$ | std. return | $Z$ | $V^B = V\\,Z$ | $V^S = V - V^B$ | $\\lvert V^S - V^B\\rvert$ |
|---|---:|---:|---:|---:|---:|
| 1 | $+1.0$ | $0.841$ | $8413$ | $1587$ | $6826$ |
| 2 | $-0.5$ | $0.309$ | $3085$ | $6915$ | $3830$ |
| 3 | $+0.2$ | $0.579$ | $5793$ | $4207$ | $1586$ |

Baca bucket 1: move $+1\\sigma$ berarti $Z(1.0) = 0.841$, jadi $8413$ dari $10{,}000$ share diklasifikasi buy-initiated dan cuma $1587$ sell — bucket yang heavily one-sided, "keliatan toxic" dengan imbalance $6826$. Bucket 3 ($+0.2\\sigma$) hampir balanced: imbalance cuma $1586$.

Sekarang metriknya:

$$\\text{VPIN} = \\frac{6826 + 3830 + 1586}{3 \\times 10{,}000} = \\frac{12{,}242}{30{,}000} \\approx 0.41.$$

Jadi sekitar **41% order flow over window ini keliatan directional** — bacaan toxicity yang elevated. Buat intuisi di ekstrem: kalau tiap bucket punya standardized return mendekati-nol, tiap $Z \\approx 0.5$, imbalance $\\approx 0$, dan VPIN $\\approx 0$ (flow balanced, jinak). Kalau tiap bucket punya move one-directional gede, tiap $Z \\approx 1$ (atau $0$), imbalance $\\approx V$, dan VPIN $\\approx 1$ (maximally toxic).

**Bacaan operasionalnya.** Desk ngitung ini terus-menerus tiap bucket $10{,}000$-share baru nutup, ngedrop bucket tertua dari window. VPIN yang drift naik menuju extreme percentile dari history-nya sendiri itu sinyal bahwa flow lagi jadi one-sided — cue buat widen quote atau mundur. Krusial, input ke seluruh kalkulasi cuma **price change dan volume** — gak ada quote book, gak ada signing trade-per-trade, gak ada maximum likelihood. Itu yang bikin dia cukup cepet buat clock high-frequency; itu juga, kayak yang kritikus tekankan, yang nge-tie dia secara mekanis ke volatility.`
      }
    },

    // ─────────────── 5. applications ───────────────
    {
      id: 'applications',
      heading: { en: 'Applications by audience', id: 'Aplikasi per audience' },
      body: {
        en: `This section walks from the research frontier, through practitioner deployment, down to the operations and risk desk — and it is the section where the **VPIN controversy** must be stated honestly.

### For the advanced researcher

The headline claim of the 2012 paper is that VPIN rose to extreme levels around the **6 May 2010 Flash Crash**, behaving as a leading indicator of order-flow toxicity and impending illiquidity. This is the contested part. **Andersen and Bondarenko (2014)**, using S&P 500 futures tick data, argued the opposite on three points: (i) VPIN is *mechanically* correlated with trading volume and volatility by construction (the classification depends on standardized returns), so much of its apparent predictive content is not new information; (ii) after controlling for contemporaneous volume and volatility, they found *no* incremental predictive power for future volatility; and (iii) VPIN reached its sample extreme *after*, not before, the Flash Crash — undercutting the early-warning narrative. Easley, López de Prado, and O'Hara published a rejoinder (2014) defending the construction and arguing that the divergent results turn on data and trade-classification choices to which VPIN is admittedly sensitive. The honest research summary: VPIN is a real, widely-used *measure of contemporaneous order imbalance/toxicity*, but its status as a clean *predictor* of crises is not settled, and any empirical use must guard against the volume/volatility mechanical channel. Productive frontier work studies VPIN's parameter sensitivity (bucket size, window length, BVC distribution), cross-market behaviour, and combinations with order-book measures like OFI.

### For the quant practitioner

Treat VPIN as a **real-time toxicity gauge**, not an oracle. Computed continuously on the volume clock, a VPIN sitting in the high percentiles of its own recent history is a credible signal that flow is one-sided and that resting passive orders are likely to be adversely selected. Concrete uses: (i) *market-making* — widen quotes, cut size, or pause when VPIN spikes, then re-tighten as it normalizes; (ii) *execution* — schedule child orders away from high-VPIN windows to reduce the chance of trading into a toxic move; (iii) *the volume clock itself* — sampling bars by volume (or dollar, or imbalance) rather than by clock time is a robust default for any high-frequency feature pipeline, a practice López de Prado's financial-ML work generalizes. The practitioner caveat mirrors the research one: because VPIN co-moves mechanically with volatility, do not use it as a standalone alpha predictor; use it as a regime/toxicity flag combined with other signals (e.g. OFI from the order book).

### For the operations team / risk

VPIN is a microstructure **risk dashboard primitive**: a per-symbol, real-time number bounded in $[0,1]$ that summarizes how one-sided current flow is. Track it against its own historical percentiles and alert when it enters an extreme regime, especially across many symbols at once (a market-wide toxicity spike is the dangerous case). The risk-team framing that survives the controversy intact is the *concept*: liquidity is state-dependent and can withdraw fast when flow turns toxic, so capacity and stop-out assumptions calibrated in calm regimes can fail precisely when VPIN is high. Use it to size that tail, not to time it to the second.`,
        id: `Section ini jalan dari research frontier, lewat deployment praktisi, sampai turun ke operations dan risk desk — dan ini section di mana **kontroversi VPIN** harus dinyatakan jujur.

### Untuk advanced researcher

Klaim headline paper 2012 itu VPIN naik ke level ekstrem di sekitar **Flash Crash 6 Mei 2010**, behave sebagai leading indicator order-flow toxicity dan illiquidity yang akan datang. Ini bagian yang diperdebatkan. **Andersen dan Bondarenko (2014)**, pakai S&P 500 futures tick data, argue sebaliknya di tiga poin: (i) VPIN *secara mekanis* berkorelasi sama trading volume dan volatility by construction (klasifikasinya tergantung standardized return), jadi sebagian besar apparent predictive content-nya bukan informasi baru; (ii) setelah kontrol contemporaneous volume dan volatility, mereka nemu *gak ada* incremental predictive power buat future volatility; dan (iii) VPIN capai sample extreme-nya *setelah*, bukan sebelum, Flash Crash — nggerogoti narasi early-warning. Easley, López de Prado, dan O'Hara nerbitin rejoinder (2014) yang bela konstruksi dan argue hasil yang divergen itu turun ke pilihan data dan trade-classification yang VPIN-nya emang sensitif. Ringkasan riset yang jujur: VPIN itu *measure of contemporaneous order imbalance/toxicity* yang nyata dan dipake luas, tapi status-nya sebagai *prediktor* krisis yang bersih belum settled, dan penggunaan empiris apa pun harus jaga-jaga terhadap channel mekanis volume/volatility. Kerja frontier yang produktif nge-studi parameter sensitivity VPIN (bucket size, window length, distribusi BVC), behaviour cross-market, dan kombinasi sama measure order-book kayak OFI.

### Untuk quant practitioner

Anggap VPIN sebagai **gauge toxicity real-time**, bukan oracle. Dihitung terus-menerus di volume clock, VPIN yang duduk di percentile tinggi dari history recent-nya sendiri itu sinyal kredibel bahwa flow one-sided dan resting passive order kemungkinan di-adverse-select. Kegunaan konkret: (i) *market-making* — widen quote, potong size, atau pause pas VPIN spike, terus re-tighten pas normalize; (ii) *eksekusi* — jadwalin child order menjauh dari window VPIN-tinggi buat ngurangin peluang trading ke move toxic; (iii) *volume clock-nya sendiri* — sampling bar by volume (atau dollar, atau imbalance) daripada by clock time itu default robust buat pipeline fitur high-frequency apa pun, praktik yang kerja financial-ML López de Prado nge-generalize. Caveat praktisi mirror yang riset: karena VPIN co-move secara mekanis sama volatility, jangan pakai dia sebagai standalone alpha predictor; pakai dia sebagai flag regime/toxicity dikombinasi sama sinyal lain (misal OFI dari order book).

### Untuk tim operations / risk

VPIN itu **primitive risk dashboard** microstructure: angka per-simbol, real-time, bounded di $[0,1]$ yang nge-summarize seberapa one-sided flow saat ini. Track dia lawan historical percentile-nya sendiri dan alert pas dia masuk regime ekstrem, terutama across banyak simbol sekaligus (toxicity spike market-wide itu kasus berbahaya). Framing risk-team yang selamat utuh dari kontroversi itu *konsep*-nya: liquidity itu state-dependent dan bisa withdraw cepet pas flow jadi toxic, jadi asumsi capacity dan stop-out yang dikalibrasi di regime tenang bisa gagal persis pas VPIN tinggi. Pakai dia buat size tail itu, bukan buat time-nya per detik.`
      }
    },

    // ─────────────── 6. practice ───────────────
    {
      id: 'practice',
      heading: { en: 'Practice', id: 'Latihan' },
      body: {
        en: `**1.** A volume bucket of $V = 5{,}000$ shares has a standardized return of $0$ (flat). Using bulk volume classification with the normal CDF, what are $V^B$, $V^S$, and the bucket's imbalance?

<details><summary>Answer</summary>
$Z(0) = 0.5$, so $V^B = 5000 \\times 0.5 = 2500$ and $V^S = 2500$. Imbalance $|V^S - V^B| = 0$. A flat bucket is classified as perfectly balanced — no toxicity signal from it.
</details>

**2.** Two buckets (each $V = 8{,}000$) have standardized returns $+1.5$ and $-1.5$. With $Z(1.5) = 0.933$, compute VPIN over these two buckets. Does the sign symmetry cancel?

<details><summary>Answer</summary>
Bucket 1: $V^B = 8000 \\times 0.933 = 7464$, $V^S = 536$, imbalance $= 6928$. Bucket 2: $V^B = 8000 \\times (1-0.933) = 536$, $V^S = 7464$, imbalance $= 6928$. VPIN $= (6928 + 6928)/(2 \\times 8000) = 13856/16000 \\approx 0.87$. The signs do NOT cancel — VPIN uses the *absolute* imbalance, so a strong-up bucket and a strong-down bucket both register as high toxicity. (Net signed flow would cancel; VPIN deliberately does not.)
</details>

**3.** Why does VPIN sample in volume buckets rather than fixed time intervals (e.g. every 5 minutes)?

<details><summary>Answer</summary>
Because information and volatility arrive in bursts of trading, not at a constant calendar rate — a 5-minute window at the open carries far more activity than one at midday, making time-sampled statistics highly non-stationary and the intraday volume "smile" a source of noise. Equal-volume buckets put the same amount of market activity in each observation, absorbing the activity cycle into the clock and yielding more stationary, comparable readings. It also makes the metric update faster precisely when it matters (busy, potentially toxic periods produce buckets quickly).
</details>

**4.** State the core of the Andersen-Bondarenko (2014) critique of VPIN, and what it implies for how a practitioner should use the metric.

<details><summary>Answer</summary>
Their critique has three prongs: (i) VPIN is mechanically correlated with volume and volatility by construction (bulk volume classification is driven by standardized returns), so its apparent signal is not necessarily new information; (ii) after controlling for contemporaneous volume and volatility, they found no incremental power to predict future volatility; and (iii) VPIN actually peaked *after*, not before, the May 2010 Flash Crash, weakening the early-warning claim. Implication: do not use VPIN as a standalone *predictor* of crises or volatility. Use it as a *contemporaneous* toxicity/regime gauge, always alongside other signals, and never assume its high readings carry information beyond the volume and volatility you can already observe. (Easley-López de Prado-O'Hara published a rejoinder; the predictive question remains genuinely contested.)
</details>`,
        id: `**1.** Volume bucket $V = 5{,}000$ share punya standardized return $0$ (flat). Pakai bulk volume classification sama normal CDF, berapa $V^B$, $V^S$, dan imbalance bucket-nya?

<details><summary>Jawaban</summary>
$Z(0) = 0.5$, jadi $V^B = 5000 \\times 0.5 = 2500$ dan $V^S = 2500$. Imbalance $|V^S - V^B| = 0$. Bucket flat diklasifikasi perfectly balanced — gak ada sinyal toxicity darinya.
</details>

**2.** Dua bucket (tiap $V = 8{,}000$) punya standardized return $+1.5$ dan $-1.5$. Dengan $Z(1.5) = 0.933$, hitung VPIN over dua bucket ini. Apakah simetri tanda cancel?

<details><summary>Jawaban</summary>
Bucket 1: $V^B = 8000 \\times 0.933 = 7464$, $V^S = 536$, imbalance $= 6928$. Bucket 2: $V^B = 8000 \\times (1-0.933) = 536$, $V^S = 7464$, imbalance $= 6928$. VPIN $= (6928 + 6928)/(2 \\times 8000) = 13856/16000 \\approx 0.87$. Tanda-tandanya GAK cancel — VPIN pakai *absolute* imbalance, jadi bucket strong-up dan bucket strong-down dua-duanya register sebagai toxicity tinggi. (Net signed flow akan cancel; VPIN sengaja enggak.)
</details>

**3.** Kenapa VPIN sampel di volume bucket daripada fixed time interval (misal tiap 5 menit)?

<details><summary>Jawaban</summary>
Karena informasi dan volatility datang dalam burst trading, bukan di laju calendar konstan — window 5-menit di open bawa jauh lebih banyak aktivitas dari yang di tengah hari, bikin statistik time-sampled highly non-stationary dan intraday volume "smile" jadi sumber noise. Equal-volume bucket naro jumlah market activity yang sama di tiap observasi, nyerap activity cycle ke clock dan ngasih bacaan yang lebih stationary dan comparable. Dia juga bikin metrik update lebih cepet persis pas matter (periode busy, berpotensi toxic, ngehasilin bucket cepet).
</details>

**4.** Nyatain inti kritik Andersen-Bondarenko (2014) ke VPIN, dan apa implikasinya buat gimana praktisi harus pakai metriknya.

<details><summary>Jawaban</summary>
Kritik mereka punya tiga cabang: (i) VPIN secara mekanis berkorelasi sama volume dan volatility by construction (bulk volume classification digerakin sama standardized return), jadi apparent signal-nya gak harus informasi baru; (ii) setelah kontrol contemporaneous volume dan volatility, mereka nemu gak ada incremental power buat prediksi future volatility; dan (iii) VPIN sebenernya puncaknya *setelah*, bukan sebelum, Flash Crash Mei 2010, ngelemahin klaim early-warning. Implikasi: jangan pakai VPIN sebagai standalone *prediktor* krisis atau volatility. Pakai dia sebagai gauge toxicity/regime *contemporaneous*, selalu bareng sinyal lain, dan jangan pernah assume bacaan tingginya bawa informasi di luar volume dan volatility yang udah bisa kamu observe. (Easley-López de Prado-O'Hara nerbitin rejoinder; pertanyaan prediktifnya tetep beneran diperdebatkan.)
</details>`
      }
    },

    // ─────────────── 7. connections ───────────────
    {
      id: 'connections',
      heading: { en: 'Connections', id: 'Koneksi' },
      body: {
        en: `- **Prereqs**: [O'Hara 1995](item:ohara-1995) and [Glosten-Milgrom 1985](item:glosten-milgrom-1985) supply the adverse-selection foundation and the PIN model that VPIN is the high-frequency descendant of — read those first for *why* imbalance reveals informed flow.
- **Related to**: [Cont-Kukanov-Stoikov 2014](item:cont-kukanov-stoikov-2014) is the natural companion — both are high-frequency imbalance/toxicity measures, but OFI is built from *order-book events* (limit orders, cancellations, trades) and predicts price, while VPIN is built from *volume-bucket trade imbalance* and measures toxicity. They are complementary lenses on the same one-sided-flow phenomenon. [Kyle 1985](item:kyle-1985) is the strategic-trading parent of the whole adverse-selection program.
- **Builds on / replaces**: VPIN's bulk volume classification replaces the per-trade tick-rule classification used in [Hasbrouck 2007](item:hasbrouck-2007)-style empirical work; the volume clock generalizes into volume/dollar/imbalance bars used throughout modern financial machine learning.
- **Critical literature**: Andersen & Bondarenko (2014) is the essential counterpoint — any honest treatment of VPIN pairs the original claim with this rebuttal and the authors' rejoinder.`,
        id: `- **Prereqs**: [O'Hara 1995](item:ohara-1995) dan [Glosten-Milgrom 1985](item:glosten-milgrom-1985) nyediain fondasi adverse-selection dan model PIN yang VPIN itu keturunan high-frequency-nya — baca itu dulu buat *kenapa* imbalance reveal informed flow.
- **Related to**: [Cont-Kukanov-Stoikov 2014](item:cont-kukanov-stoikov-2014) itu companion natural — dua-duanya measure imbalance/toxicity high-frequency, tapi OFI dibangun dari *order-book event* (limit order, cancellation, trade) dan prediksi harga, sementara VPIN dibangun dari *volume-bucket trade imbalance* dan ngukur toxicity. Mereka lensa komplementer ke fenomena one-sided-flow yang sama. [Kyle 1985](item:kyle-1985) itu parent strategic-trading dari seluruh program adverse-selection.
- **Builds on / replaces**: bulk volume classification VPIN ngeganti klasifikasi tick-rule per-trade yang dipake di kerja empiris ala [Hasbrouck 2007](item:hasbrouck-2007); volume clock nge-generalize jadi volume/dollar/imbalance bar yang dipake di seluruh modern financial machine learning.
- **Literatur kritis**: Andersen & Bondarenko (2014) itu counterpoint esensial — treatment VPIN yang jujur apa pun nge-pair klaim aslinya sama rebuttal ini dan rejoinder para author.`
      }
    },

    // ─────────────── 8. sources ───────────────
    {
      id: 'sources',
      heading: { en: 'Sources', id: 'Sumber' },
      body: {
        en: `- **Easley, D., López de Prado, M. M., and O'Hara, M.** (2012). "Flow Toxicity and Liquidity in a High-Frequency World." *Review of Financial Studies*, 25(5), 1457-1493. The VPIN paper. **(This item.)**
- **Easley, D., López de Prado, M. M., and O'Hara, M.** (2012). "The Volume Clock: Insights into the High-Frequency Paradigm." *Journal of Portfolio Management*, 39(1), 19-29. The companion manifesto for volume-time sampling.
- **Easley, D., Kiefer, N. M., O'Hara, M., and Paperman, J. B.** (1996). "Liquidity, Information, and Infrequently Traded Stocks." *Journal of Finance*, 51(4), 1405-1436. The original PIN estimator that VPIN extends.
- **Andersen, T. G., and Bondarenko, O.** (2014). "VPIN and the Flash Crash." *Journal of Financial Markets*, 17(1), 1-46. The principal empirical critique — required reading alongside the original.
- **Easley, D., López de Prado, M. M., and O'Hara, M.** (2014). "VPIN and the Flash Crash: A rejoinder." *Journal of Financial Markets*, 17, 47-52. The authors' published rejoinder to Andersen-Bondarenko.
- **López de Prado, M. M.** (2018). *Advances in Financial Machine Learning*. Wiley. Generalizes the volume-clock / information-driven-bar approach across quantitative finance.`,
        id: `- **Easley, D., López de Prado, M. M., dan O'Hara, M.** (2012). "Flow Toxicity and Liquidity in a High-Frequency World." *Review of Financial Studies*, 25(5), 1457-1493. Paper VPIN-nya. **(Item ini.)**
- **Easley, D., López de Prado, M. M., dan O'Hara, M.** (2012). "The Volume Clock: Insights into the High-Frequency Paradigm." *Journal of Portfolio Management*, 39(1), 19-29. Manifesto companion buat volume-time sampling.
- **Easley, D., Kiefer, N. M., O'Hara, M., dan Paperman, J. B.** (1996). "Liquidity, Information, and Infrequently Traded Stocks." *Journal of Finance*, 51(4), 1405-1436. Estimator PIN original yang VPIN extend.
- **Andersen, T. G., dan Bondarenko, O.** (2014). "VPIN and the Flash Crash." *Journal of Financial Markets*, 17(1), 1-46. Kritik empiris utama — bacaan wajib bareng yang original.
- **Easley, D., López de Prado, M. M., dan O'Hara, M.** (2014). "VPIN and the Flash Crash: A rejoinder." *Journal of Financial Markets*, 17, 47-52. Rejoinder yang dipublish para author ke Andersen-Bondarenko.
- **López de Prado, M. M.** (2018). *Advances in Financial Machine Learning*. Wiley. Nge-generalize pendekatan volume-clock / information-driven-bar across quantitative finance.`
      }
    },
  ],

  audio: { enabled: true },

  selfTest: [
    {
      sectionId: 'intuition',
      question: {
        en: 'What does it mean for order flow to be "toxic," and why does measuring buy/sell imbalance capture it?',
        id: 'Apa artinya order flow itu "toxic," dan kenapa ngukur buy/sell imbalance nangkep itu?'
      },
      prompt: { en: 'Before continuing, try answering:', id: 'Sebelum lanjut, coba jawab:' },
      answer: {
        en: 'Flow is toxic when it is persistently one-sided and informed, so liquidity providers are systematically adversely selected — they keep buying right before prices fall (or selling right before they rise) and lose money. Measuring imbalance captures it because uninformed/liquidity trades are roughly balanced buy vs sell (they cancel in expectation), while informed trades lean one direction; so a sustained excess of buys over sells (or vice versa) is the visible footprint of informed, adversely-selecting pressure. VPIN reports that absolute imbalance as a fraction of total volume — high VPIN means the book is being leaned on and market-makers are likely to widen or withdraw.',
        id: 'Flow itu toxic pas dia persisten one-sided dan informed, jadi liquidity provider sistematis di-adverse-select — mereka terus beli persis sebelum harga turun (atau jual persis sebelum naik) dan rugi. Ngukur imbalance nangkep itu karena trade uninformed/liquidity kira-kira balanced buy vs sell (cancel in expectation), sementara trade informed condong satu arah; jadi sustained excess buy over sell (atau sebaliknya) itu jejak visible dari informed pressure yang adverse-selecting. VPIN ngelaporin absolute imbalance itu sebagai fraksi total volume — VPIN tinggi berarti book lagi disandarin dan market-maker kemungkinan widen atau withdraw.'
      }
    },
    {
      sectionId: 'formalization',
      question: {
        en: 'In bulk volume classification, a bucket with a large positive standardized return gets classified as mostly buy volume. Walk through why, using the formula, and what a flat bucket gives.',
        id: 'Di bulk volume classification, bucket dengan standardized return positif gede diklasifikasi sebagai mostly buy volume. Walk through kenapa, pakai formulanya, dan apa yang bucket flat kasih.'
      },
      prompt: { en: 'Before continuing, try answering:', id: 'Sebelum lanjut, coba jawab:' },
      answer: {
        en: 'V^B = V·Z((P_τ − P_{τ−1})/σ_ΔP), where Z is the standard normal CDF. A large positive standardized return makes the CDF argument large, so Z → 1 and V^B → V: nearly all the bucket\'s volume is classified buy-initiated (a big up-move over the bucket is read as buyers consuming liquidity). A flat bucket has standardized return ≈ 0, so Z(0) = 0.5 and V^B = V^S = V/2 — a perfectly balanced 50/50 split, contributing zero to imbalance. A large negative return gives Z → 0, so almost all volume is classified sell. The key design feature: you never sign individual trades; you infer the buy fraction of the whole bucket from its net price move.',
        id: 'V^B = V·Z((P_τ − P_{τ−1})/σ_ΔP), di mana Z itu standard normal CDF. Standardized return positif gede bikin argumen CDF-nya gede, jadi Z → 1 dan V^B → V: hampir semua volume bucket diklasifikasi buy-initiated (up-move gede over bucket dibaca sebagai buyer ngonsumsi liquidity). Bucket flat punya standardized return ≈ 0, jadi Z(0) = 0.5 dan V^B = V^S = V/2 — split 50/50 yang perfectly balanced, nyumbang nol ke imbalance. Return negatif gede ngasih Z → 0, jadi hampir semua volume diklasifikasi sell. Fitur desain kuncinya: kamu gak pernah sign trade individual; kamu infer fraksi buy dari seluruh bucket dari net price move-nya.'
      }
    },
    {
      sectionId: 'formalization',
      question: {
        en: 'How is VPIN the volume-clock analogue of PIN? Connect the average absolute imbalance to PIN = αμ/(αμ + 2ε).',
        id: 'Gimana VPIN itu analog volume-clock dari PIN? Hubungin average absolute imbalance ke PIN = αμ/(αμ + 2ε).'
      },
      prompt: { en: 'Before continuing, try answering:', id: 'Sebelum lanjut, coba jawab:' },
      answer: {
        en: 'In the PIN model, total volume in a period is informed plus uninformed: αμ + 2ε (informed arrival αμ, plus uninformed buys ε and sells ε). The expected ABSOLUTE order imbalance is approximately the informed part αμ — the uninformed buy/sell imbalance is zero in expectation, but its absolute value adds noise, so the relation is approximate (the authors use ≈). So expected imbalance / total volume ≈ αμ/(αμ + 2ε) = PIN — the probability an arriving order is informed. VPIN computes the sample version of that ratio on the volume clock: average |V^S − V^B|/V across a window of equal-volume buckets. So VPIN estimates PIN\'s quantity (toxicity = informed fraction of flow) but as a fast, model-light sample statistic instead of a maximum-likelihood fit on daily data.',
        id: 'Di model PIN, total volume di satu periode itu informed plus uninformed: αμ + 2ε (informed arrival αμ, plus uninformed buy ε dan sell ε). Expected ABSOLUTE order imbalance itu kira-kira bagian informed αμ — signed imbalance buy/sell uninformed nol in expectation, tapi absolute value-nya nambah noise, jadi relasinya aproksimasi (author pakai ≈). Jadi expected imbalance / total volume ≈ αμ/(αμ + 2ε) = PIN — probability order yang datang itu informed. VPIN ngitung versi sampel rasio itu di volume clock: rata-rata |V^S − V^B|/V across window equal-volume bucket. Jadi VPIN estimate kuantitas PIN (toxicity = fraksi informed dari flow) tapi sebagai sample statistic yang cepet dan ringan-model daripada fit maximum-likelihood di data harian.'
      }
    },
    {
      sectionId: 'applications',
      question: {
        en: 'The 2012 paper presents VPIN as having signaled the 2010 Flash Crash. What did Andersen-Bondarenko (2014) find, and how should that change the way you USE VPIN?',
        id: 'Paper 2012 nampilin VPIN sebagai udah nge-signal Flash Crash 2010. Apa yang Andersen-Bondarenko (2014) temuin, dan gimana itu harusnya ngubah cara kamu PAKAI VPIN?'
      },
      prompt: { en: 'Before continuing, try answering:', id: 'Sebelum lanjut, coba jawab:' },
      answer: {
        en: 'Andersen-Bondarenko (2014) argued (i) VPIN is mechanically correlated with volume and volatility by construction, so its apparent signal may carry no new information; (ii) after controlling for contemporaneous volume and volatility, it had no incremental power to predict future volatility; and (iii) VPIN actually peaked AFTER, not before, the Flash Crash — contradicting the leading-indicator story. So you should NOT treat VPIN as a clean predictor of crashes or future volatility. Use it as a contemporaneous toxicity/regime gauge, always combined with other signals (e.g. order-book OFI), and never assume a high reading means more than the volume and volatility you can already see. The authors published a rejoinder, so the predictive question is genuinely contested rather than closed — which is itself the lesson: a confidently-marketed HF metric needed adversarial scrutiny before it could be trusted as a predictor.',
        id: 'Andersen-Bondarenko (2014) argue (i) VPIN secara mekanis berkorelasi sama volume dan volatility by construction, jadi apparent signal-nya mungkin gak bawa informasi baru; (ii) setelah kontrol contemporaneous volume dan volatility, dia gak punya incremental power buat prediksi future volatility; dan (iii) VPIN sebenernya puncaknya SETELAH, bukan sebelum, Flash Crash — kontradiksi cerita leading-indicator. Jadi kamu HARUSNYA gak nganggep VPIN sebagai prediktor crash atau future volatility yang bersih. Pakai dia sebagai gauge toxicity/regime contemporaneous, selalu dikombinasi sama sinyal lain (misal OFI order-book), dan jangan pernah assume bacaan tinggi berarti lebih dari volume dan volatility yang udah bisa kamu lihat. Para author nerbitin rejoinder, jadi pertanyaan prediktifnya beneran diperdebatkan bukan ketutup — yang itu sendiri pelajarannya: metrik HF yang dipasarin dengan percaya diri butuh scrutiny adversarial sebelum bisa dipercaya sebagai prediktor.'
      }
    },
  ],
};
