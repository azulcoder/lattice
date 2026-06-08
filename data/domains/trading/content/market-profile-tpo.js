// ─────────────────────────────────────────────────────────────────────────
// Trading domain — Market Profile (TPO): Steidlmayer's time-at-price auction
// map, as read by Dalton. ESTABLISHED practitioner canon. Compiled by Az.
// Educational, NOT financial advice.
//
// IMPORTANT distinction: this is TIME at price (TPO letters per 30-minute
// period), NOT volume at price — that is the separate VOLUME profile in the
// insilico-quant-curriculum module. Keep the two straight.
// Evidence tags: [Established] standard text/method · [Practitioner] desk usage.
// ─────────────────────────────────────────────────────────────────────────

export const CONTENT = {
  itemId: 'market-profile-tpo',
  estimatedReadMinutes: 26,

  author: {
    fullName: { en: 'J. Peter Steidlmayer & James F. Dalton (Market Profile / TPO)', id: 'J. Peter Steidlmayer & James F. Dalton (Market Profile / TPO)' },
    affiliation: {
      en: `Steidlmayer: trader and director at the Chicago Board of Trade (CBOT); inventor of the Market Profile and the Liquidity Data Bank (on-line 1984, graphic public 1985). Dalton (with Eric T. Jones & Robert B. Dalton): popularised and systematised the reading in *Mind Over Markets* and *Markets in Profile*. (Compiled by Az.)`,
      id: `Steidlmayer: trader dan direktur di Chicago Board of Trade (CBOT); penemu Market Profile dan Liquidity Data Bank (online 1984, grafik publik 1985). Dalton (bersama Eric T. Jones & Robert B. Dalton): mempopulerkan dan menyistematisasi cara membacanya di *Mind Over Markets* dan *Markets in Profile*. (Dikompilasi Az.)`
    },
    tagline: {
      en: `The market is a two-way auction looking for value: price advertises, time confirms. The TPO profile is the time-at-price histogram that shows where the auction did its business.`,
      id: `Pasar adalah lelang dua-arah yang mencari value: harga mengiklankan, waktu mengonfirmasi. Profil TPO adalah histogram waktu-di-harga yang menunjukkan di mana lelang berbisnis.`
    },
    bio: {
      en: `J. Peter Steidlmayer spent his career on the floor of the Chicago Board of Trade and on its board of directors. Frustrated that a price-over-time chart throws away the very thing a pit trader feels — *how long* the market spends at each price — he built the Market Profile: split the session into 30-minute periods, letter them A, B, C, …, and stamp one letter (a "TPO", a time-price-opportunity) on every price that period trades. The result is a histogram of TIME at each price, drawn sideways, that reveals the day's auction as a statistical distribution. With the CBOT he shipped it as a product (the Liquidity Data Bank) in 1984-85.

James F. Dalton, a former CBOT executive, turned Steidlmayer's raw apparatus into a teachable discipline — Auction Market Theory — in *Mind Over Markets* (1990) and *Markets in Profile* (2007). Dalton's contribution is the vocabulary most desks now use: value, the point of control, initiative vs responsive activity, the "other timeframe" participant, and the catalogue of day types.

⟦Note: attributed synthesis of established public sources, compiled by Az. Educational, not financial advice. This module teaches the TIME-at-price profile; the VOLUME-at-price profile is a different tool (see the linked insilico-quant-curriculum module).⟧`,
      id: `J. Peter Steidlmayer menghabiskan kariernya di lantai Chicago Board of Trade dan di dewan direksinya. Frustrasi karena chart harga-terhadap-waktu membuang justru hal yang dirasakan trader pit — *berapa lama* pasar menghabiskan waktu di tiap harga — dia membangun Market Profile: bagi sesi jadi periode 30-menit, beri huruf A, B, C, …, dan cap satu huruf (sebuah "TPO", time-price-opportunity) di tiap harga yang diperdagangkan periode itu. Hasilnya histogram WAKTU di tiap harga, digambar menyamping, yang mengungkap lelang hari itu sebagai distribusi statistik. Bersama CBOT dia merilisnya sebagai produk (Liquidity Data Bank) pada 1984-85.

James F. Dalton, mantan eksekutif CBOT, mengubah aparatus mentah Steidlmayer jadi disiplin yang bisa diajarkan — Auction Market Theory — di *Mind Over Markets* (1990) dan *Markets in Profile* (2007). Kontribusi Dalton adalah kosakata yang dipakai kebanyakan desk sekarang: value, point of control, aktivitas initiative vs responsive, partisipan "other timeframe", dan katalog tipe hari.

⟦Catatan: sintesis teratribusi dari sumber publik mapan, dikompilasi Az. Edukatif, bukan nasihat keuangan. Module ini mengajarkan profil WAKTU-di-harga; profil VOLUME-di-harga adalah alat berbeda (lihat module insilico-quant-curriculum yang ditaut).⟧`
    },
    focus: {
      en: `Reading the auction from the letter stack. The longest TPO row is the Point of Control (POC) — the fairest price, where the most time was spent, a magnet. The central ~70% of TPOs is the Value Area — the range the market accepted as fair, built outward from the POC. The first two 30-minute periods (A and B, the first hour) are the Initial Balance (IB); when later periods print BEYOND the IB that is range extension — the "other timeframe" participant showing directional conviction. One-TPO rows are single prints (fast, unauctioned moves); single prints at an extreme are tails (a buying tail at the low, a selling tail at the high) and signal aggressive rejection. From IB width, range extension and shape you classify the day: Normal, Normal-Variation, Trend, Neutral, or Double-Distribution.`,
      id: `Membaca lelang dari tumpukan huruf. Baris TPO terpanjang adalah Point of Control (POC) — harga terwajar, tempat waktu terbanyak dihabiskan, sebuah magnet. ~70% TPO tengah adalah Value Area — rentang yang pasar terima sebagai wajar, dibangun keluar dari POC. Dua periode 30-menit pertama (A dan B, jam pertama) adalah Initial Balance (IB); ketika periode berikutnya mencetak DI LUAR IB itu range extension — partisipan "other timeframe" menunjukkan keyakinan arah. Baris satu-TPO adalah single print (gerakan cepat, tak terlelang); single print di ekstrem adalah tail (buying tail di low, selling tail di high) dan menandakan penolakan agresif. Dari lebar IB, range extension, dan bentuk, kamu mengklasifikasi hari: Normal, Normal-Variation, Trend, Neutral, atau Double-Distribution.`
    },
    intellectualLineage: {
      en: `Descends from the open-outcry pit and from a simple statistical idea: a day's trade, sampled by time, forms a roughly bell-shaped distribution (a "normal" curve laid on its side). [Established] Steidlmayer & Koy, *Markets and Market Logic* (1986) is the source text; [Established] the CBOT *A Six-Part Study Guide to Market Profile* (1996) is the institutional manual; [Established] Dalton, Jones & Dalton (*Mind Over Markets*, 1990; *Markets in Profile*, 2007) supply Auction Market Theory. Conceptually it sits beside, but is distinct from, the VOLUME profile (volume-at-price) and from academic market microstructure — [Established] Kyle (1985) on price impact and the order-flow / liquidity literature surveyed by Bouchaud, Bonart, Donier & Gould (2018).`,
      id: `Turun dari pit open-outcry dan dari ide statistik sederhana: perdagangan sehari, disampel berdasar waktu, membentuk distribusi kira-kira berbentuk lonceng (kurva "normal" dibaringkan menyamping). [Established] Steidlmayer & Koy, *Markets and Market Logic* (1986) adalah teks sumbernya; [Established] CBOT *A Six-Part Study Guide to Market Profile* (1996) adalah manual institusionalnya; [Established] Dalton, Jones & Dalton (*Mind Over Markets*, 1990; *Markets in Profile*, 2007) menyediakan Auction Market Theory. Secara konsep dia berdampingan, tapi berbeda, dengan profil VOLUME (volume-di-harga) dan dengan market microstructure akademik — [Established] Kyle (1985) tentang price impact dan literatur order-flow / likuiditas yang disurvei Bouchaud, Bonart, Donier & Gould (2018).`
    },
    keyCollaborators: {
      en: `Steidlmayer with Kevin Koy (*Markets and Market Logic*) and later Steven B. Hawkins (*Steidlmayer on Markets*); the Chicago Board of Trade itself, which built the Liquidity Data Bank and published the study guide; and James F. Dalton with Eric T. Jones and Robert B. Dalton, whose two books are the standard reading. The canonical reading list IS the collaboration.`,
      id: `Steidlmayer bersama Kevin Koy (*Markets and Market Logic*) dan kemudian Steven B. Hawkins (*Steidlmayer on Markets*); Chicago Board of Trade sendiri, yang membangun Liquidity Data Bank dan menerbitkan study guide; dan James F. Dalton bersama Eric T. Jones dan Robert B. Dalton, yang dua bukunya jadi bacaan standar. Daftar bacaan kanonik ITU kolaborasinya.`
    },
    legacy: {
      en: `Market Profile gave traders a language for "value" that survives the move from pits to screens. Even where the original time-sampled TPO is replaced by volume-at-price, the vocabulary — POC, value area, acceptance vs rejection, initial balance, range extension, single prints, naked POC, the day types — is the lingua franca of modern auction/order-flow trading. Steidlmayer's deepest claim endures: read where the market spent time (where it agreed on value), not just where it closed.`,
      id: `Market Profile memberi trader bahasa untuk "value" yang bertahan dari peralihan pit ke layar. Bahkan di tempat TPO yang disampel-waktu asli diganti volume-di-harga, kosakatanya — POC, value area, acceptance vs rejection, initial balance, range extension, single print, naked POC, tipe hari — adalah lingua franca trading lelang/order-flow modern. Klaim terdalam Steidlmayer bertahan: baca di mana pasar menghabiskan waktu (di mana ia sepakat soal value), bukan cuma di mana ia close.`
    },
    keyWorks: [
      { year: 1986, title: 'Markets and Market Logic (Steidlmayer & Koy)', venue: 'Porcupine Press' },
      { year: 1990, title: 'Mind Over Markets: Power Trading with Market Generated Information (Dalton, Jones & Dalton)', venue: 'Probus Publishing (updated ed. Wiley, 2013)' },
      { year: 2007, title: 'Markets in Profile: Profiting from the Auction Process (Dalton, Dalton & Jones)', venue: 'John Wiley & Sons' },
      { year: 1996, title: 'A Six-Part Study Guide to Market Profile', venue: 'Chicago Board of Trade (CBOT)' },
      { year: 2003, title: 'Steidlmayer on Markets: Trading with Market Profile (Steidlmayer & Hawkins)', venue: 'John Wiley & Sons' },
    ],
  },

  sections: [
    {
      id: 'motivation',
      heading: { en: 'Why time at price', id: 'Kenapa waktu di harga' },
      body: {
        en: `A candlestick chart answers "what was the high, low and close?" — but it throws away the one thing a floor trader feels in their bones: *how long* the market lingered at each price. Two days can have an identical high, low and close yet be completely different auctions — one spent all day grinding at the top, the other only flicked up once and spent the day at the bottom. [Established] J. Peter Steidlmayer built the Market Profile at the Chicago Board of Trade precisely to recover that lost dimension.

The core idea is **Auction Market Theory**: a market is a continuous two-way auction whose only job is to *find value* — a price area where both buyers and sellers are willing to do business. Price is the market's advertisement; **time** (and volume) is the confirmation. When price moves to a new level and the auction spends time there and trade builds, that price is **accepted** (value is migrating). When price pokes to a level and is instantly rejected — no time, no business — that is **excess**, and price snaps back toward value. Profile reading is the discipline of telling acceptance from rejection.

The Market Profile measures time directly. Cut the session into 30-minute periods; letter them A, B, C, …; and for every price a period trades at, stamp one letter — a **TPO** (time-price-opportunity). Stack the letters at each price and you have a sideways histogram of *time at price*. The fattest part of the stack is where the market agreed on value; the thin extremes are where it disagreed and moved on.

⟦CRITICAL distinction: this is TIME at price (counting 30-minute periods via TPO letters), NOT volume at price. The volume profile — how much *volume* traded at each price — is a different tool covered in the [volume & quant curriculum](item:insilico-quant-curriculum) module. They look similar and share vocabulary (POC, value area) but measure different things. Educational, not financial advice.⟧`,
        id: `Chart candlestick menjawab "berapa high, low, dan close-nya?" — tapi membuang satu hal yang dirasakan floor trader sampai ke tulang: *berapa lama* pasar berlama-lama di tiap harga. Dua hari bisa punya high, low, dan close identik namun jadi lelang yang sama sekali berbeda — yang satu seharian menggiling di atas, yang lain cuma sekali menyentil ke atas lalu seharian di bawah. [Established] J. Peter Steidlmayer membangun Market Profile di Chicago Board of Trade justru untuk memulihkan dimensi yang hilang itu.

Ide intinya adalah **Auction Market Theory**: pasar adalah lelang dua-arah berkelanjutan yang tugasnya cuma satu — *menemukan value* — area harga di mana baik pembeli maupun penjual bersedia berbisnis. Harga adalah iklan pasar; **waktu** (dan volume) adalah konfirmasinya. Ketika harga pindah ke level baru dan lelang menghabiskan waktu di sana serta perdagangan menumpuk, harga itu **diterima** (value bermigrasi). Ketika harga mencolek suatu level dan langsung ditolak — tanpa waktu, tanpa bisnis — itu **excess**, dan harga melenting balik menuju value. Membaca profil adalah disiplin membedakan acceptance dari rejection.

Market Profile mengukur waktu secara langsung. Potong sesi jadi periode 30-menit; beri huruf A, B, C, …; dan untuk tiap harga yang diperdagangkan suatu periode, cap satu huruf — sebuah **TPO** (time-price-opportunity). Tumpuk huruf di tiap harga dan kamu punya histogram menyamping dari *waktu di harga*. Bagian tergemuk tumpukan adalah tempat pasar sepakat soal value; ekstrem tipisnya adalah tempat ia tak sepakat lalu melanjut.

⟦Distinksi PENTING: ini WAKTU di harga (menghitung periode 30-menit lewat huruf TPO), BUKAN volume di harga. Volume profile — berapa banyak *volume* yang diperdagangkan di tiap harga — adalah alat berbeda yang dibahas di module [kurikulum volume & quant](item:insilico-quant-curriculum). Keduanya terlihat mirip dan berbagi kosakata (POC, value area) tapi mengukur hal berbeda. Edukatif, bukan nasihat keuangan.⟧`
      }
    },
    {
      id: 'intuition',
      heading: { en: 'Reading the letter stack', id: 'Membaca tumpukan huruf' },
      body: {
        en: `Picture prices listed vertically on the left and, beside each price, a row of letters. The **A** row marks every price that traded in the first 30 minutes, **B** the second, and so on. As the day unfolds the rows grow; a bell-shaped bulge usually forms in the middle (the prices visited by many periods) with thin tails at top and bottom (prices visited by only one or two). That shape — a distribution lying on its side — is the whole game.

**The four things you read off the stack:**
- **POC (Point of Control):** the **longest row** — the price touched by the most periods, hence the most TPOs. It is the day's fairest price and acts as a **magnet**: price tends to rotate back to it.
- **Value Area (VA):** the band of prices holding the central **~70%** of all TPOs. You start at the POC and grow *outward*, each step adding the larger of the two **row-pairs** (the two rows above vs the two below), until you have captured at least 70%. The VA is the range the market **accepted** as fair. (The simulator reports the achieved fraction — usually a little above 70% — because whole row-pairs are added.)
- **Initial Balance (IB):** the price range of the **first two periods, A + B** — the first hour. It is the opening "balance point" struck before the wider, slower "other timeframe" participants commit.
- **Range extension:** any trade that prints **beyond the IB** later in the day. Extension up or down is the footprint of the **other-timeframe** participant — a longer-horizon buyer or seller with directional conviction, pushing the auction out of its opening balance.

**Single prints and tails.** A row with exactly **one** TPO is a *single print* — a price the market passed through so fast that only one period touched it. A run of single prints at the very top or bottom of the profile is a **tail**: a *buying tail* at the low (aggressive buyers rejected the cheap prices) or a *selling tail* at the high (aggressive sellers rejected the expensive ones). Tails are excess — strong evidence the auction was rejected there. A single-print *valley* sandwiched between two fat areas means the day split into a **double distribution** (two value clusters with a hole between them).

**Acceptance vs rejection** is the verdict you assemble from all of this: time + trade building at a new level = acceptance (value migrating); a thin tail with no follow-through = rejection (back toward the POC).`,
        id: `Bayangkan harga terdaftar vertikal di kiri dan, di samping tiap harga, sebaris huruf. Baris **A** menandai tiap harga yang diperdagangkan di 30 menit pertama, **B** yang kedua, dan seterusnya. Seiring hari berjalan baris-baris tumbuh; tonjolan berbentuk lonceng biasanya terbentuk di tengah (harga yang dikunjungi banyak periode) dengan ekor tipis di atas dan bawah (harga yang dikunjungi cuma satu-dua). Bentuk itu — distribusi yang dibaringkan menyamping — adalah inti permainannya.

**Empat hal yang kamu baca dari tumpukan:**
- **POC (Point of Control):** **baris terpanjang** — harga yang disentuh paling banyak periode, jadi punya TPO terbanyak. Ini harga terwajar hari itu dan bertindak sebagai **magnet**: harga cenderung berotasi balik ke sana.
- **Value Area (VA):** pita harga yang memegang **~70%** TPO tengah. Kamu mulai di POC dan tumbuh *keluar*, tiap langkah menambahkan **pasangan dua baris** (dua baris di atas vs dua di bawah) yang lebih besar, sampai menangkap minimal 70%. VA adalah rentang yang pasar **terima** sebagai wajar. (Simulator melaporkan fraksi tercapai — biasanya sedikit di atas 70% — karena pasangan baris ditambahkan utuh.)
- **Initial Balance (IB):** rentang harga **dua periode pertama, A + B** — jam pertama. Ini titik "balance" pembuka yang dipalu sebelum partisipan "other timeframe" yang lebih lebar dan lambat berkomitmen.
- **Range extension:** perdagangan apa pun yang mencetak **di luar IB** kemudian di hari itu. Extension atas atau bawah adalah jejak partisipan **other-timeframe** — pembeli atau penjual horizon-panjang dengan keyakinan arah, mendorong lelang keluar dari balance pembukanya.

**Single print dan tail.** Baris dengan persis **satu** TPO adalah *single print* — harga yang dilewati pasar begitu cepat sampai cuma satu periode menyentuhnya. Rentetan single print di puncak atau dasar profil adalah **tail**: *buying tail* di low (pembeli agresif menolak harga murah) atau *selling tail* di high (penjual agresif menolak harga mahal). Tail adalah excess — bukti kuat lelang ditolak di sana. Sebuah *lembah* single-print yang terapit dua area gemuk berarti hari terbelah jadi **double distribution** (dua klaster value dengan lubang di antaranya).

**Acceptance vs rejection** adalah vonis yang kamu rakit dari semua ini: waktu + perdagangan menumpuk di level baru = acceptance (value bermigrasi); ekor tipis tanpa kelanjutan = rejection (balik menuju POC).`
      }
    },
    {
      id: 'formalization',
      heading: { en: 'The profile, made precise', id: 'Profil, dibuat presisi' },
      visualization: {
        id: 'market-profile-tpo-viz',
        component: 'MarketProfileTPOSim',
        title: {
          en: 'Build a TPO profile: stacked letters, POC, value area, IB & day type',
          id: 'Bangun profil TPO: huruf bertumpuk, POC, value area, IB & tipe hari'
        },
        description: {
          en: `A synthetic Market Profile. Each 30-minute period prints one letter (A, B, C, …) at every price it trades, so a row's length = TIME (number of periods) at that price — NOT volume. Gold = the POC (longest row, the fairest price / magnet); the blue band = the ~70% value area (grown outward from the POC); the green bracket on the far left = the Initial Balance (the A+B range, first hour); the right-hand readout gives range EXTENSION up/down beyond the IB and the buy/sell TAIL lengths (single prints at the extremes, shown in red). The header names the DAY TYPE — Normal, Normal-Variation, Trend, Neutral, or Double-Distribution — read from IB width, extension and shape. Slide "Day character" toward trend for a one-way Trend day with a long tail; raise "Range width" to widen the distribution; change the number of periods (letters). Note: this is the TIME profile — contrast it with the VOLUME profile in the quant-curriculum module.`,
          id: `Market Profile sintetis. Tiap periode 30-menit mencetak satu huruf (A, B, C, …) di tiap harga yang diperdagangkannya, jadi panjang baris = WAKTU (jumlah periode) di harga itu — BUKAN volume. Emas = POC (baris terpanjang, harga terwajar / magnet); pita biru = value area ~70% (ditumbuhkan keluar dari POC); bracket hijau di paling kiri = Initial Balance (rentang A+B, jam pertama); readout kanan memberi range EXTENSION atas/bawah di luar IB dan panjang TAIL beli/jual (single print di ekstrem, ditampilkan merah). Header menamai TIPE HARI — Normal, Normal-Variation, Trend, Neutral, atau Double-Distribution — dibaca dari lebar IB, extension, dan bentuk. Geser "Day character" ke trend untuk Trend day satu-arah dengan ekor panjang; naikkan "Range width" untuk melebarkan distribusi; ubah jumlah periode (huruf). Catatan: ini profil WAKTU — bandingkan dengan profil VOLUME di module kurikulum-quant.`
        },
        defaultParams: { trend: 1, vol: 0.5, nPeriods: 13 },
        height: 440,
      },
      body: {
        en: `Make the construction exact. Discretise prices into rows. For each 30-minute period $p$ with traded range $[\\text{lo}_p, \\text{hi}_p]$, add **one** TPO to every row the range covers. After $N$ periods, row $r$ holds a count $c_r$ = how many periods traded there. The profile is the vector $(c_r)$; everything else is read off it.

**POC.** $\\text{POC} = \\arg\\max_r c_r$ — the longest row. (Ties resolve to the row nearest the centre of the range.) Because it has the most TPOs, the POC is the day's time-weighted "fairest" price and the rotation magnet.

**Value Area (the 70% rule).** Start with the POC row. Each step, compare the **sum of the two rows above** the current band with the **sum of the two rows below**, and annex the **larger pair** (both rows), adding their counts to the running total. Stop once the band holds $\\ge 70\\%$ of all TPOs. This is Dalton's canonical two-row TPO-count construction; because whole row-pairs are annexed, the captured fraction usually lands a little above 70% (the simulator typically shows ~75-91%). The resulting $[\\text{VAL}, \\text{VAH}]$ — value-area low to value-area high — is the accepted range.

**Initial Balance.** $\\text{IB} = [\\min(\\text{lo}_A,\\text{lo}_B),\\ \\max(\\text{hi}_A,\\text{hi}_B)]$: the union of the first two periods' ranges. **Range extension** is what prints beyond it: $\\text{extUp} = \\max(0,\\ \\text{high} - \\text{IBhigh})$ and $\\text{extDown} = \\max(0,\\ \\text{IBlow} - \\text{low})$. Large one-sided extension = the other timeframe took control in that direction.

**Single prints & tails.** Any row with $c_r = 1$ is a single print. The **buying tail** is the run of single prints from the bottom up; the **selling tail** is the run from the top down. A single-print valley (a $c_r \\le 1$ row with fat areas $\\ge 60\\%$ of the peak both above and below) flags a **double distribution**.

**The five day types** (read from IB width, extension and shape):
- **Trend:** strong net directional move with extension essentially one-sided — a long buying or selling tail and a profile that elongates rather than balances.
- **Normal:** the IB is wide (here $\\ge 82\\%$ of the whole range) — the first hour set most of the day's range; little extension. A textbook bell.
- **Normal-Variation:** moderate one-sided extension — the IB held one side but the other timeframe stretched the range out the other.
- **Neutral:** extension on **both** sides — buyers and sellers each probed beyond the IB; the day is balanced and two-sided (often closing back in the middle).
- **Double-Distribution:** two fat value clusters separated by a single-print valley — the auction migrated, paused, and built a second distribution.`,
        id: `Buat konstruksinya eksak. Diskretkan harga jadi baris. Untuk tiap periode 30-menit $p$ dengan rentang diperdagangkan $[\\text{lo}_p, \\text{hi}_p]$, tambahkan **satu** TPO ke tiap baris yang dicakup rentang itu. Setelah $N$ periode, baris $r$ memegang hitungan $c_r$ = berapa periode berdagang di sana. Profilnya adalah vektor $(c_r)$; semua lainnya dibaca darinya.

**POC.** $\\text{POC} = \\arg\\max_r c_r$ — baris terpanjang. (Seri diselesaikan ke baris terdekat ke pusat rentang.) Karena punya TPO terbanyak, POC adalah harga "terwajar" terbobot-waktu hari itu dan magnet rotasi.

**Value Area (aturan 70%).** Mulai dengan baris POC. Tiap langkah, bandingkan **jumlah dua baris di atas** pita saat ini dengan **jumlah dua baris di bawah**, dan caplok **pasangan yang lebih besar** (kedua baris), tambahkan hitungannya ke total berjalan. Berhenti begitu pita memegang $\\ge 70\\%$ seluruh TPO. Ini konstruksi kanonik dua-baris Dalton; karena pasangan baris dicaplok utuh, fraksi tertangkap mendarat di atas 70% (simulator biasanya ~75-91%). Hasil $[\\text{VAL}, \\text{VAH}]$ — value-area low ke value-area high — adalah rentang yang diterima.

**Initial Balance.** $\\text{IB} = [\\min(\\text{lo}_A,\\text{lo}_B),\\ \\max(\\text{hi}_A,\\text{hi}_B)]$: gabungan rentang dua periode pertama. **Range extension** adalah yang mencetak di luarnya: $\\text{extUp} = \\max(0,\\ \\text{high} - \\text{IBhigh})$ dan $\\text{extDown} = \\max(0,\\ \\text{IBlow} - \\text{low})$. Extension satu-sisi besar = other timeframe ambil kendali ke arah itu.

**Single print & tail.** Baris mana pun dengan $c_r = 1$ adalah single print. **Buying tail** adalah rentetan single print dari bawah ke atas; **selling tail** rentetan dari atas ke bawah. Lembah single-print (baris $c_r \\le 1$ dengan area gemuk $\\ge 60\\%$ puncak baik di atas maupun bawah) menandai **double distribution**.

**Lima tipe hari** (dibaca dari lebar IB, extension, dan bentuk):
- **Trend:** gerakan arah neto kuat dengan extension pada dasarnya satu-sisi — buying atau selling tail panjang dan profil yang memanjang alih-alih seimbang.
- **Normal:** IB lebar (di sini $\\ge 82\\%$ seluruh range) — jam pertama menetapkan sebagian besar range hari; sedikit extension. Lonceng textbook.
- **Normal-Variation:** extension satu-sisi sedang — IB menahan satu sisi tapi other timeframe meregangkan range ke sisi lain.
- **Neutral:** extension di **kedua** sisi — pembeli dan penjual masing-masing menyondol di luar IB; hari seimbang dan dua-sisi (sering close balik di tengah).
- **Double-Distribution:** dua klaster value gemuk dipisah lembah single-print — lelang bermigrasi, jeda, dan membangun distribusi kedua.`
      }
    },
    {
      id: 'worked-example',
      heading: { en: 'Worked example: a Trend day', id: 'Contoh: sebuah Trend day' },
      body: {
        en: `Run the simulator on its defaults — **Day character = 1, Range width = 0.5, 13 periods** — and read the day out loud. (These are the embedded chart's default parameters, so the numbers below are exactly what you see.)

The header reports **Trend Day (one-way, small IB)**. Walk through why:

- **POC ≈ 11.5.** The longest row sits high in the range, not in the middle — already a hint the day pushed up and built value up there.
- **Value Area ≈ 7.4 to 26.0, capturing 71%.** The accepted range is skewed to the upper part of the day. The 71% (not exactly 70%) is the whole-row rounding from the 70% rule — expected, not a bug.
- **Initial Balance ≈ −11.7 to +11.7** (an IB range of ~23.4). The first hour balanced around zero.
- **Range extension: up ≈ 17.9, down = 0.** This is the tell. The market extended almost 18 points ABOVE the initial balance and **zero** below it — a one-sided, other-timeframe buyer drove the whole session. The total range (~41) is dominated by that upward extension.
- **Tails: buy = 9, sell = 0.** The bottom of the profile is a long run of nine single prints — a big **buying tail**. The market briefly visited the lows, found aggressive buyers, and never returned: textbook excess / rejection at the bottom. The counts vector starts $[1,1,1,1,1,1,1,1,1,2,2,3,\\dots]$ — nine 1's at the base — then thickens to a peak of 8 TPOs near the POC.

**The read.** Net move (~+24) exceeds 55% of the total range while downside extension is essentially nil, so this is unambiguously a **Trend day up**. The trading implication from Auction Market Theory: on a trend day you do **not** fade — you do not short into the upper value edge expecting a rotation back to the POC, because the other timeframe is in control and value is migrating up all day. Instead you treat pullbacks toward the developing value area / POC as **with-trend** entries (responsive buying in an initiative-up auction). The long buying tail at the base marks support that "should not" trade again on a true trend day; if price later returns and trades back *through* that tail, the trend thesis is in doubt.

Now drag **Day character toward 0**: extension becomes modest and one-sided and the header flips to **Normal-Variation**; the POC migrates back toward the centre. Push the slider to the **−** side and the trend reverses — downside extension grows, a **selling tail** forms at the top, and you get a **Trend day down**. Widening **Range width** simply fattens the whole distribution without changing the day's character.

⟦Disclaimer: an illustrative, synthetic profile — not a signal or a recommendation. A profile describes the auction that already happened; it does not predict the next one. Educational, not financial advice.⟧`,
        id: `Jalankan simulator pada default-nya — **Day character = 1, Range width = 0.5, 13 periode** — dan bacakan harinya keras-keras. (Ini parameter default chart yang ditanam, jadi angka di bawah persis seperti yang kamu lihat.)

Header melaporkan **Trend Day (one-way, small IB)**. Telusuri kenapa:

- **POC ≈ 11.5.** Baris terpanjang duduk tinggi di range, bukan di tengah — sudah memberi petunjuk hari mendorong naik dan membangun value di atas sana.
- **Value Area ≈ 7.4 sampai 26.0, menangkap 71%.** Rentang yang diterima miring ke bagian atas hari. 71% (bukan tepat 70%) itu pembulatan baris-utuh dari aturan 70% — diharapkan, bukan bug.
- **Initial Balance ≈ −11.7 sampai +11.7** (IB range ~23.4). Jam pertama seimbang sekitar nol.
- **Range extension: atas ≈ 17.9, bawah = 0.** Ini tell-nya. Pasar memanjang hampir 18 poin DI ATAS initial balance dan **nol** di bawahnya — pembeli other-timeframe satu-sisi menyetir seluruh sesi. Total range (~41) didominasi extension naik itu.
- **Tail: beli = 9, jual = 0.** Dasar profil adalah rentetan panjang sembilan single print — **buying tail** besar. Pasar sebentar mengunjungi low, menemukan pembeli agresif, dan tak pernah balik: excess / rejection textbook di dasar. Vektor hitungan mulai $[1,1,1,1,1,1,1,1,1,2,2,3,\\dots]$ — sembilan angka 1 di basis — lalu menebal ke puncak 8 TPO dekat POC.

**Bacaannya.** Net move (~+24) melebihi 55% total range sementara extension bawah pada dasarnya nol, jadi ini jelas **Trend day up**. Implikasi trading dari Auction Market Theory: di trend day kamu **tidak** fade — kamu tidak short ke tepi value atas berharap rotasi balik ke POC, karena other timeframe pegang kendali dan value bermigrasi naik sepanjang hari. Sebaliknya kamu perlakukan pullback menuju developing value area / POC sebagai entry **searah-tren** (responsive buying dalam lelang initiative-up). Buying tail panjang di basis menandai support yang "seharusnya" tak diperdagangkan lagi di trend day sejati; jika nanti harga balik dan berdagang *menembus* tail itu, tesis tren diragukan.

Sekarang seret **Day character menuju 0**: extension jadi sedang dan satu-sisi dan header berbalik ke **Normal-Variation**; POC bermigrasi balik ke tengah. Dorong slider ke sisi **−** dan tren berbalik — extension bawah tumbuh, **selling tail** terbentuk di atas, dan kamu dapat **Trend day down**. Melebarkan **Range width** cuma menggemukkan seluruh distribusi tanpa mengubah karakter hari.

⟦Disclaimer: profil ilustratif, sintetis — bukan sinyal atau rekomendasi. Profil menggambarkan lelang yang sudah terjadi; ia tidak memprediksi yang berikutnya. Edukatif, bukan nasihat keuangan.⟧`
      }
    },
    {
      id: 'applications',
      heading: { en: 'Trading the auction', id: 'Men-trade lelang' },
      body: {
        en: `Profile reading turns the chart into a decision about **where you are in the auction** and **who is in control**. The two master moves:

**1. Rotation inside value (responsive / fade).** When the day is **balanced** (Normal, Neutral, or a quiet range) the POC is a magnet and the value-area edges are fences. The responsive trade is to fade the edges *back toward the POC*: buy near the value-area low, sell near the value-area high, target the POC. You are betting the auction stays in balance and rotates. The risk: a value-area edge that *holds* on a balance day, but *breaks with acceptance* (time + trade beyond it) is no longer a fence — it is the start of a migration, and the fade is wrong.

**2. Extension out of value (initiative / with-trend).** When there is **range extension** beyond the IB and value is migrating — the Trend, Normal-Variation, or Double-Distribution days — the other timeframe is in control. Now you trade *with* the extension: in an initiative-up auction, buy responsive pullbacks toward developing value rather than shorting the highs. Trying to fade a trend day is the classic way to get run over.

**Acceptance vs rejection** is the hinge between the two. Price trading beyond a reference *and spending time there, building TPOs* = acceptance (go with it). Price spiking beyond and leaving a single-print **tail** with no follow-through = rejection (fade it, expect a return toward value).

**Naked / virgin POC.** A prior session's POC that price has not since returned to is a **naked POC** — an untested fair price that acts as a powerful magnet and a high-probability **target**. Many desks mark naked POCs from previous days and lean on them as objectives. (Same idea for an un-revisited single-print gap.)

**Open relative to value.** Where today opens versus yesterday's value area frames the whole day: open *inside* value suggests balance/rotation; open *outside* value and accepted suggests a directional, initiative day.

**How it composes with the rest of the toolkit.** The TPO time profile is the canonical sibling of the **volume** profile — see the [volume & quant curriculum](item:insilico-quant-curriculum) for the explicit time-vs-volume contrast (the single most important link here). It also underpins the practitioner order-flow stacks of [Luckshury's auction-and-flow method](item:luckshury-orderflow) and [Tradingriot's order-flow / VRP arc](item:tradingriot-orderflow-vrp), and pairs naturally with the positioning read in [OI & funding positioning](item:husslin-oi-positioning) — the profile says where value is, positioning says who is trapped.

**Honest limits.** A profile is **descriptive**, not predictive — it tells you where the auction has been, and acceptance/rejection is a judgement, not a signal. Day-type labels are read after the fact and can morph intraday (a Normal-Variation can become a Trend). And the original tool measured TIME; on screens many traders substitute VOLUME, which can disagree — know which one you are reading.`,
        id: `Membaca profil mengubah chart jadi keputusan tentang **di mana kamu dalam lelang** dan **siapa yang pegang kendali**. Dua jurus utamanya:

**1. Rotasi di dalam value (responsive / fade).** Ketika hari **seimbang** (Normal, Neutral, atau range tenang) POC adalah magnet dan tepi value-area adalah pagar. Trade responsive adalah fade tepi *balik menuju POC*: beli dekat value-area low, jual dekat value-area high, target POC. Kamu bertaruh lelang tetap seimbang dan berotasi. Risikonya: tepi value-area yang *menahan* di hari balance, tapi *break dengan acceptance* (waktu + perdagangan di luarnya) bukan lagi pagar — itu awal migrasi, dan fade-nya salah.

**2. Extension keluar value (initiative / searah-tren).** Ketika ada **range extension** di luar IB dan value bermigrasi — hari Trend, Normal-Variation, atau Double-Distribution — other timeframe pegang kendali. Kini kamu trade *searah* extension: di lelang initiative-up, beli pullback responsive menuju developing value alih-alih short high. Mencoba fade trend day adalah cara klasik untuk dilindas.

**Acceptance vs rejection** adalah engsel antara keduanya. Harga berdagang di luar referensi *dan menghabiskan waktu di sana, membangun TPO* = acceptance (ikuti). Harga melonjak di luar dan meninggalkan **tail** single-print tanpa kelanjutan = rejection (fade, harapkan balik menuju value).

**Naked / virgin POC.** POC sesi sebelumnya yang harga belum kembali ke sana adalah **naked POC** — harga wajar yang belum teruji yang bertindak sebagai magnet kuat dan **target** berprobabilitas-tinggi. Banyak desk menandai naked POC dari hari-hari sebelumnya dan menyandarinya sebagai objektif. (Ide sama untuk gap single-print yang belum dikunjungi ulang.)

**Open relatif terhadap value.** Di mana hari ini buka versus value area kemarin membingkai seluruh hari: buka *di dalam* value menyiratkan balance/rotasi; buka *di luar* value dan diterima menyiratkan hari directional, initiative.

**Bagaimana ia berpadu dengan sisa toolkit.** Profil waktu TPO adalah saudara kanonik profil **volume** — lihat [kurikulum volume & quant](item:insilico-quant-curriculum) untuk kontras waktu-vs-volume eksplisit (taut terpenting di sini). Ia juga menopang tumpukan order-flow praktisi [metode lelang-dan-flow Luckshury](item:luckshury-orderflow) dan [arc order-flow / VRP Tradingriot](item:tradingriot-orderflow-vrp), dan berpadu alami dengan pembacaan positioning di [positioning OI & funding](item:husslin-oi-positioning) — profil bilang di mana value, positioning bilang siapa yang terjebak.

**Batas jujur.** Profil itu **deskriptif**, bukan prediktif — ia memberitahu di mana lelang sudah berada, dan acceptance/rejection itu pertimbangan, bukan sinyal. Label tipe hari dibaca setelah fakta dan bisa bermetamorfosis intraday (Normal-Variation bisa jadi Trend). Dan alat aslinya mengukur WAKTU; di layar banyak trader menggantinya dengan VOLUME, yang bisa berbeda — tahu mana yang kamu baca.`
      }
    },
    {
      id: 'practice',
      heading: { en: 'Practice', id: 'Latihan' },
      body: {
        en: `**1.** A colleague calls the TPO profile "just a volume profile." Why is that wrong, and what does the letter stack actually measure?

<details><summary>Answer</summary>
They measure DIFFERENT things. A TPO profile measures TIME at price: the day is split into 30-minute periods (A, B, C, …) and each price a period trades at earns exactly one letter — so a row's length is the NUMBER OF PERIODS that visited that price, regardless of how much traded. A volume profile measures VOLUME at price: how many contracts/shares changed hands at each price. They share vocabulary (POC = longest/fattest row; value area = central ~70%) and often look similar, but they can disagree: a price visited by many periods on thin trade is a long TPO row but a short volume row, and a price hit hard in one violent period is a short TPO row but a tall volume row. The original Steidlmayer tool is the TIME profile; the volume profile is the separate tool in the volume & quant-curriculum module.
</details>

**2.** Define POC, value area and initial balance, and say how you build the value area from the profile.

<details><summary>Answer</summary>
POC (Point of Control) = the LONGEST row, i.e. the price with the most TPOs — the most-time, "fairest" price, a magnet. Value Area = the band of prices holding the central ~70% of all TPOs — the range the market ACCEPTED as fair. You build it by starting at the POC row and repeatedly annexing whichever PAIR of two rows (the two above vs the two below the current band) has the LARGER total, accumulating counts, until the band covers ≥70% of total TPOs (Dalton's canonical two-row rule); because whole row-pairs are added, the captured fraction usually lands above 70%. Initial Balance = the price range of the first two periods (A + B, the first hour) — the opening balance struck before the slower other-timeframe participants commit.
</details>

**3.** On the simulator's defaults (Day character 1, width 0.5, 13 periods) the header says "Trend Day," extension is up ≈ 18 / down = 0, and the buy tail is 9. Explain how those three facts produce that label and what it implies for trading.

<details><summary>Answer</summary>
The classification is read from net move, extension and shape. Net move is strongly positive (~+24, over 55% of the total range) AND the extension is essentially one-sided: ~18 points ABOVE the initial balance and ZERO below. One-sided extension plus a large directional net move = a Trend day (up). The buy tail of 9 — nine single prints at the base — is the excess/rejection at the lows that confirms aggressive buyers took control and never let price back down. Trading implication: do NOT fade. On a trend day the other timeframe controls and value migrates all day, so you trade WITH the trend — buy responsive pullbacks toward developing value rather than shorting the highs expecting a rotation to the POC. The buying tail marks support that should hold; price trading back through it would put the trend thesis in doubt.
</details>

**4.** What is a single print, what is a tail, and what does a single-print valley between two fat areas tell you?

<details><summary>Answer</summary>
A single print is a row with exactly ONE TPO — a price only one 30-minute period touched, i.e. a fast, "unauctioned" move the market passed through quickly. A tail is a RUN of single prints at an extreme of the profile: a BUYING tail at the low (aggressive buyers rejected the cheap prices and lifted the market away) or a SELLING tail at the high (aggressive sellers rejected the expensive prices). Tails are EXCESS — strong evidence the auction was rejected there, marking that extreme as meaningful support/resistance. A single-print VALLEY sandwiched between two fat areas (each well above half the peak) signals a DOUBLE DISTRIBUTION: the auction built value, migrated quickly through the thin middle, and built a second value cluster — two separate "fair" zones with a fast-travel gap between them.
</details>

**5.** What is a naked (virgin) POC and why do traders watch it?

<details><summary>Answer</summary>
A naked / virgin POC is a Point of Control from a PRIOR session that price has not traded back to since. Because the POC is the most-accepted, fairest price of that earlier auction, an untested one acts as a strong MAGNET: the market often gravitates back to retest it. Traders mark naked POCs from previous days and use them as high-probability TARGETS / reference levels — once price trades back through it, it is no longer "naked." The same magnet logic applies to un-revisited single-print gaps. Caveat: it is a probabilistic reference, not a guarantee — a descriptive level, not a signal.
</details>`,
        id: `**1.** Seorang kolega menyebut profil TPO "cuma volume profile." Kenapa itu salah, dan apa sebenarnya yang diukur tumpukan huruf?

<details><summary>Jawaban</summary>
Keduanya mengukur hal BERBEDA. Profil TPO mengukur WAKTU di harga: hari dibagi jadi periode 30-menit (A, B, C, …) dan tiap harga yang diperdagangkan suatu periode mendapat persis satu huruf — jadi panjang baris adalah JUMLAH PERIODE yang mengunjungi harga itu, terlepas dari berapa banyak yang diperdagangkan. Volume profile mengukur VOLUME di harga: berapa kontrak/saham berpindah tangan di tiap harga. Keduanya berbagi kosakata (POC = baris terpanjang/tergemuk; value area = ~70% tengah) dan sering terlihat mirip, tapi bisa berbeda: harga yang dikunjungi banyak periode pada perdagangan tipis adalah baris TPO panjang tapi baris volume pendek, dan harga yang dihantam keras dalam satu periode keras adalah baris TPO pendek tapi baris volume tinggi. Alat Steidlmayer asli adalah profil WAKTU; volume profile adalah alat terpisah di module kurikulum volume & quant.
</details>

**2.** Definisikan POC, value area, dan initial balance, dan katakan bagaimana kamu membangun value area dari profil.

<details><summary>Jawaban</summary>
POC (Point of Control) = baris TERPANJANG, yaitu harga dengan TPO terbanyak — harga ber-waktu-terbanyak, "terwajar", sebuah magnet. Value Area = pita harga yang memegang ~70% TPO tengah — rentang yang pasar TERIMA sebagai wajar. Kamu membangunnya dengan mulai di baris POC dan berulang mencaplok PASANGAN dua baris (dua di atas vs dua di bawah pita saat ini) yang totalnya LEBIH BESAR, mengakumulasi hitungan, sampai pita menutupi ≥70% total TPO (aturan kanonik dua-baris Dalton); karena pasangan baris ditambahkan utuh, fraksi tertangkap biasanya mendarat di atas 70%. Initial Balance = rentang harga dua periode pertama (A + B, jam pertama) — balance pembuka yang dipalu sebelum partisipan other-timeframe yang lebih lambat berkomitmen.
</details>

**3.** Pada default simulator (Day character 1, width 0.5, 13 periode) header bilang "Trend Day," extension atas ≈ 18 / bawah = 0, dan buy tail 9. Jelaskan bagaimana tiga fakta itu menghasilkan label tersebut dan apa implikasinya untuk trading.

<details><summary>Jawaban</summary>
Klasifikasi dibaca dari net move, extension, dan bentuk. Net move sangat positif (~+24, lebih 55% total range) DAN extension pada dasarnya satu-sisi: ~18 poin DI ATAS initial balance dan NOL di bawah. Extension satu-sisi plus net move arah besar = Trend day (up). Buy tail 9 — sembilan single print di basis — adalah excess/rejection di low yang mengonfirmasi pembeli agresif ambil kendali dan tak pernah biarkan harga turun lagi. Implikasi trading: JANGAN fade. Di trend day other timeframe mengendalikan dan value bermigrasi sepanjang hari, jadi kamu trade SEARAH tren — beli pullback responsive menuju developing value alih-alih short high berharap rotasi ke POC. Buying tail menandai support yang seharusnya menahan; harga berdagang menembusnya akan meragukan tesis tren.
</details>

**4.** Apa itu single print, apa itu tail, dan apa yang diberitahu lembah single-print di antara dua area gemuk?

<details><summary>Jawaban</summary>
Single print adalah baris dengan persis SATU TPO — harga yang cuma disentuh satu periode 30-menit, yaitu gerakan cepat, "tak terlelang" yang dilewati pasar cepat. Tail adalah RENTETAN single print di ekstrem profil: BUYING tail di low (pembeli agresif menolak harga murah dan mengangkat pasar menjauh) atau SELLING tail di high (penjual agresif menolak harga mahal). Tail adalah EXCESS — bukti kuat lelang ditolak di sana, menandai ekstrem itu sebagai support/resistance bermakna. Sebuah LEMBAH single-print yang terapit dua area gemuk (masing-masing jauh di atas separuh puncak) menandakan DOUBLE DISTRIBUTION: lelang membangun value, bermigrasi cepat lewat tengah yang tipis, dan membangun klaster value kedua — dua zona "wajar" terpisah dengan gap travel-cepat di antaranya.
</details>

**5.** Apa itu naked (virgin) POC dan kenapa trader mengawasinya?

<details><summary>Jawaban</summary>
Naked / virgin POC adalah Point of Control dari sesi SEBELUMNYA yang harga belum berdagang balik ke sana sejak itu. Karena POC adalah harga paling-diterima, terwajar dari lelang sebelumnya itu, yang belum teruji bertindak sebagai MAGNET kuat: pasar sering gravitasi balik untuk meng-retest-nya. Trader menandai naked POC dari hari-hari sebelumnya dan memakainya sebagai TARGET / level referensi berprobabilitas-tinggi — begitu harga berdagang menembusnya, ia tak lagi "naked." Logika magnet sama berlaku untuk gap single-print yang belum dikunjungi ulang. Catatan: ia referensi probabilistik, bukan jaminan — level deskriptif, bukan sinyal.
</details>`
      }
    },
    {
      id: 'connections',
      heading: { en: 'Connections', id: 'Koneksi' },
      body: {
        en: `- **Time vs volume (the key contrast)**: [Volume & quant curriculum](item:insilico-quant-curriculum) — that module's VOLUME profile (volume-at-price) is the sibling of this TIME profile (TPO time-at-price); same vocabulary (POC, value area), different measurement. Read the two together to keep them straight.
- **Auction & order-flow in practice**: [Luckshury's order-flow method](item:luckshury-orderflow) — builds a daily bias on Market Profile / value / naked-POC plus footprint and session stats.
- **Order-flow → systematic**: [Tradingriot's order-flow / VRP arc](item:tradingriot-orderflow-vrp) — taught Market Profile / TPO and auction-market theory as the order-flow foundation before evolving to systematic option-selling.
- **Profile + positioning**: [OI & funding positioning](item:husslin-oi-positioning) — the profile says where value/acceptance is; positioning says who is offside and likely to be squeezed.`,
        id: `- **Waktu vs volume (kontras kunci)**: [Kurikulum volume & quant](item:insilico-quant-curriculum) — profil VOLUME (volume-di-harga) module itu adalah saudara profil WAKTU ini (TPO waktu-di-harga); kosakata sama (POC, value area), pengukuran berbeda. Baca keduanya bersama agar tetap jelas.
- **Lelang & order-flow dalam praktik**: [Metode order-flow Luckshury](item:luckshury-orderflow) — membangun bias harian di Market Profile / value / naked-POC plus footprint dan statistik sesi.
- **Order-flow → sistematis**: [Arc order-flow / VRP Tradingriot](item:tradingriot-orderflow-vrp) — mengajarkan Market Profile / TPO dan auction-market theory sebagai fondasi order-flow sebelum berevolusi ke penjualan opsi sistematis.
- **Profil + positioning**: [Positioning OI & funding](item:husslin-oi-positioning) — profil bilang di mana value/acceptance; positioning bilang siapa yang offside dan mungkin di-squeeze.`
      }
    },
    {
      id: 'sources',
      heading: { en: 'Sources', id: 'Sumber' },
      body: {
        en: `Established practitioner canon, web-verified. Compiled by Az; educational, NOT financial advice — and explicitly NOT a trading system or recommendation. A Market Profile describes an auction that already happened; acceptance/rejection and day-type are judgements, not signals.

- **Steidlmayer, J. P. & Koy, K.** (1986). *Markets and Market Logic.* Porcupine Press (Chicago). — the source text for the TPO / time-at-price profile.
- **Dalton, J. F., Jones, E. T. & Dalton, R. B.** (1990). *Mind Over Markets: Power Trading with Market Generated Information.* Probus Publishing (updated ed. John Wiley & Sons, 2013). — Auction Market Theory, value, day types.
- **Dalton, J. F., Dalton, R. B. & Jones, E. T.** (2007). *Markets in Profile: Profiting from the Auction Process.* John Wiley & Sons.
- **Chicago Board of Trade** (1996). *A Six-Part Study Guide to Market Profile.* CBOT. — the institutional manual; Market Profile / Liquidity Data Bank went on-line at the CBOT in 1984, with the graphic introduced publicly in 1985.
- **Steidlmayer, J. P. & Hawkins, S. B.** (2003). *Steidlmayer on Markets: Trading with Market Profile* (2nd ed.). John Wiley & Sons.

Context (distinct fields): the VOLUME-profile contrast lives in the volume & quant-curriculum module; for the academic order-flow / price-impact background see [Kyle (1985)](item:kyle-1985) and the market-microstructure survey of [Bouchaud, Bonart, Donier & Gould (2018)](item:bouchaud-bonart-donier-gould-2018).`,
        id: `Kanon praktisi mapan, terverifikasi-web. Dikompilasi Az; edukatif, BUKAN nasihat keuangan — dan secara eksplisit BUKAN sistem atau rekomendasi trading. Market Profile menggambarkan lelang yang sudah terjadi; acceptance/rejection dan tipe-hari adalah pertimbangan, bukan sinyal.

- **Steidlmayer, J. P. & Koy, K.** (1986). *Markets and Market Logic.* Porcupine Press (Chicago). — teks sumber untuk profil TPO / waktu-di-harga.
- **Dalton, J. F., Jones, E. T. & Dalton, R. B.** (1990). *Mind Over Markets: Power Trading with Market Generated Information.* Probus Publishing (edisi diperbarui John Wiley & Sons, 2013). — Auction Market Theory, value, tipe hari.
- **Dalton, J. F., Dalton, R. B. & Jones, E. T.** (2007). *Markets in Profile: Profiting from the Auction Process.* John Wiley & Sons.
- **Chicago Board of Trade** (1996). *A Six-Part Study Guide to Market Profile.* CBOT. — manual institusional; Market Profile / Liquidity Data Bank online di CBOT pada 1984, dengan grafiknya diperkenalkan ke publik 1985.
- **Steidlmayer, J. P. & Hawkins, S. B.** (2003). *Steidlmayer on Markets: Trading with Market Profile* (edisi ke-2). John Wiley & Sons.

Konteks (bidang berbeda): kontras profil-VOLUME ada di module kurikulum volume & quant; untuk latar order-flow / price-impact akademik lihat [Kyle (1985)](item:kyle-1985) dan survei market-microstructure [Bouchaud, Bonart, Donier & Gould (2018)](item:bouchaud-bonart-donier-gould-2018).`
      }
    },
  ],

  audio: { enabled: true },

  selfTest: [
    {
      sectionId: 'motivation',
      question: { en: `Market Profile measures TIME at price, not volume at price. What does that mean concretely, and why did Steidlmayer think it was worth recovering?`, id: `Market Profile mengukur WAKTU di harga, bukan volume di harga. Apa artinya secara konkret, dan kenapa Steidlmayer pikir itu layak dipulihkan?` },
      prompt: { en: 'Before continuing, try answering:', id: 'Sebelum lanjut, coba jawab:' },
      answer: {
        en: `Concretely: the session is split into 30-minute periods lettered A, B, C, …; every price a period trades at earns exactly ONE letter (a TPO, time-price-opportunity); stacking the letters at each price gives a sideways histogram of how many PERIODS (i.e. how much TIME) visited each price — not how much volume traded there. A standard candlestick chart records only high/low/close and discards how long the market lingered at each price; two days with identical OHLC can be completely different auctions. Steidlmayer built the profile to recover that lost dimension because, under Auction Market Theory, where the market SPENDS TIME is where it agrees on value — the fattest part of the time distribution is the fairest price (the POC), and that, not the close, tells you where the auction did its business. (The volume-at-price profile is a separate, later tool.)`,
        id: `Konkretnya: sesi dibagi jadi periode 30-menit berhuruf A, B, C, …; tiap harga yang diperdagangkan suatu periode mendapat persis SATU huruf (TPO, time-price-opportunity); menumpuk huruf di tiap harga memberi histogram menyamping berapa PERIODE (yaitu berapa WAKTU) mengunjungi tiap harga — bukan berapa volume yang diperdagangkan di sana. Chart candlestick standar cuma merekam high/low/close dan membuang berapa lama pasar berlama-lama di tiap harga; dua hari dengan OHLC identik bisa jadi lelang yang sama sekali berbeda. Steidlmayer membangun profil untuk memulihkan dimensi yang hilang itu karena, di bawah Auction Market Theory, di mana pasar MENGHABISKAN WAKTU adalah di mana ia sepakat soal value — bagian tergemuk distribusi waktu adalah harga terwajar (POC), dan itu, bukan close, yang memberitahu di mana lelang berbisnis. (Profil volume-di-harga adalah alat terpisah, kemudian.)`
      }
    },
    {
      sectionId: 'formalization',
      question: { en: `Walk through how POC, the 70% value area, the initial balance and range extension are computed from the letter-count profile.`, id: `Telusuri bagaimana POC, value area 70%, initial balance, dan range extension dihitung dari profil hitungan-huruf.` },
      prompt: { en: 'Before continuing, try answering:', id: 'Sebelum lanjut, coba jawab:' },
      answer: {
        en: `Each row r holds a count c_r = the number of periods that traded at that price. POC = argmax_r c_r, the longest row (ties → nearest the centre) — the fairest/most-time price. Value Area: start at the POC row and repeatedly annex whichever PAIR of two rows (the two above vs the two below the current band) has the LARGER total, adding their counts, until the band holds ≥70% of all TPOs (Dalton's canonical two-row rule); because whole row-pairs are added, the captured fraction lands above 70%. The resulting [VAL, VAH] is the accepted range. Initial Balance = the union of the first two periods' ranges, [min(loA,loB), max(hiA,hiB)] — the first hour. Range extension = trade beyond the IB later in the day: extUp = max(0, high − IBhigh), extDown = max(0, IBlow − low). Strong one-sided extension means the other-timeframe participant took directional control.`,
        id: `Tiap baris r memegang hitungan c_r = jumlah periode yang berdagang di harga itu. POC = argmax_r c_r, baris terpanjang (seri → terdekat ke pusat) — harga terwajar/ber-waktu-terbanyak. Value Area: mulai di baris POC dan berulang caplok PASANGAN dua baris (dua di atas vs dua di bawah pita saat ini) yang totalnya LEBIH BESAR, tambahkan hitungannya, sampai pita memegang ≥70% seluruh TPO (aturan kanonik dua-baris Dalton); karena pasangan baris ditambahkan utuh, fraksi tertangkap mendarat di atas 70%. Hasil [VAL, VAH] adalah rentang yang diterima. Initial Balance = gabungan rentang dua periode pertama, [min(loA,loB), max(hiA,hiB)] — jam pertama. Range extension = perdagangan di luar IB kemudian di hari itu: extUp = max(0, high − IBhigh), extDown = max(0, IBlow − low). Extension satu-sisi kuat berarti partisipan other-timeframe mengambil kendali arah.`
      }
    },
    {
      sectionId: 'applications',
      question: { en: `When do you trade back toward the POC (rotation) versus with range extension out of value (initiative), and what is a naked POC?`, id: `Kapan kamu trade balik menuju POC (rotasi) versus searah range extension keluar value (initiative), dan apa itu naked POC?` },
      prompt: { en: 'Before continuing, try answering:', id: 'Sebelum lanjut, coba jawab:' },
      answer: {
        en: `Rotate toward the POC on BALANCED days (Normal, Neutral, quiet ranges): the POC is a magnet and the value-area edges are fences, so the responsive trade fades the value-area low/high back toward the POC, betting the auction stays in balance. Trade WITH range extension on directional days (Trend, Normal-Variation, Double-Distribution): when price extends beyond the initial balance and value is migrating, the other timeframe is in control, so you go with the move — e.g. buy responsive pullbacks toward developing value in an initiative-up auction rather than fading the highs. The hinge is acceptance vs rejection: time + trade building beyond a level = acceptance (go with it); a single-print tail with no follow-through = rejection (fade, expect a return to value). A naked (virgin) POC is a prior session's Point of Control that price has not returned to since — an untested fairest price that acts as a strong magnet and a high-probability target until it is retraded.`,
        id: `Berotasi menuju POC di hari SEIMBANG (Normal, Neutral, range tenang): POC adalah magnet dan tepi value-area adalah pagar, jadi trade responsive fade value-area low/high balik menuju POC, bertaruh lelang tetap seimbang. Trade SEARAH range extension di hari directional (Trend, Normal-Variation, Double-Distribution): ketika harga memanjang di luar initial balance dan value bermigrasi, other timeframe pegang kendali, jadi kamu ikut gerakan — misal beli pullback responsive menuju developing value di lelang initiative-up alih-alih fade high. Engselnya adalah acceptance vs rejection: waktu + perdagangan menumpuk di luar level = acceptance (ikuti); tail single-print tanpa kelanjutan = rejection (fade, harapkan balik ke value). Naked (virgin) POC adalah Point of Control sesi sebelumnya yang harga belum kembali ke sana — harga terwajar yang belum teruji yang bertindak sebagai magnet kuat dan target berprobabilitas-tinggi sampai diperdagangkan ulang.`
      }
    },
  ],
};
