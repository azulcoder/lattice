// ─────────────────────────────────────────────────────────────────────────
// Trading domain — perpetual funding, basis & the "crypto carry": the
// mechanism that anchors a perp to spot, the positioning signal (who pays =
// the crowded side, the Husslin perp-premium read), and a carry trade.
// ESTABLISHED references (exchange methodology + academic), web-verified;
// carries the interactive FundingRateSim (js/viz.js, verified by
// scripts/verify-funding-sim.mjs). Educational, not financial advice.
// ─────────────────────────────────────────────────────────────────────────

export const CONTENT = {
  itemId: 'perp-funding-carry',
  estimatedReadMinutes: 28,

  author: {
    fullName: { en: 'Schmeling, Schrimpf & Todorov (Crypto Carry) + the exchange funding mechanism', id: 'Schmeling, Schrimpf & Todorov (Crypto Carry) + mekanisme funding exchange' },
    affiliation: {
      en: 'Maik Schmeling (Goethe University Frankfurt) with Andreas Schrimpf & Karamfil Todorov (Bank for International Settlements) authored "Crypto Carry" (BIS WP 1087; Management Science). The funding-rate formula itself is the standard exchange methodology (BitMEX / Binance / Hyperliquid); the no-arbitrage perp price is Ackerer, Hugonnier & Jermann.',
      id: 'Maik Schmeling (Goethe University Frankfurt) dengan Andreas Schrimpf & Karamfil Todorov (Bank for International Settlements) nulis "Crypto Carry" (BIS WP 1087; Management Science). Formula funding-rate-nya sendiri itu metodologi exchange standar (BitMEX / Binance / Hyperliquid); harga perp no-arbitrage itu Ackerer, Hugonnier & Jermann.',
    },
    tagline: {
      en: 'A perpetual swap never expires, so a periodic funding payment between longs and shorts pins it to spot. That single number is a convergence mechanism, a crowding signal (who pays = the crowded side), and a carry — all at once.',
      id: 'Perpetual swap gak pernah kedaluwarsa, jadi pembayaran funding periodik antara long dan short maku-nya ke spot. Satu angka itu mekanisme konvergensi, sinyal crowding (yang bayar = sisi ramai), dan carry — sekaligus.',
    },
    bio: {
      en: `Perpetual futures dominate crypto trading — Schmeling, Schrimpf & Todorov document that perps are more than 98% of Bitcoin futures volume. Unlike a dated future, a perp has no expiry to force convergence to spot, so exchanges use a **funding rate**: a payment exchanged between longs and shorts every interval (typically 8h) that is positive when the perp trades rich and negative when it trades cheap, nudging it back to spot. This module covers the exact exchange funding formula, the no-arbitrage pricing behind it (Ackerer-Hugonnier-Jermann), and — crucially for the Husslin framework — how the funding sign reads as a *positioning* signal and a *carry*.

⟦Note: this combines established exchange methodology with academic references (Crypto Carry; Perpetual Futures Pricing), web-verified. Educational, not financial advice; funding is a fee and a risk-neutral signal, not a forecast of returns.⟧`,
      id: `Perpetual futures mendominasi trading crypto — Schmeling, Schrimpf & Todorov ngedokumentasiin perp itu lebih dari 98% volume futures Bitcoin. Beda dari future bertanggal, perp gak punya expiry buat maksa konvergensi ke spot, jadi exchange pakai **funding rate**: pembayaran yang dipertukarkan antara long dan short tiap interval (biasanya 8 jam) yang positif pas perp trade kaya dan negatif pas trade murah, ngedorong dia balik ke spot. Module ini ngebahas formula funding exchange persis, pricing no-arbitrage di baliknya (Ackerer-Hugonnier-Jermann), dan — krusial buat framework Husslin — gimana tanda funding dibaca sebagai sinyal *positioning* dan *carry*.

⟦Catatan: ini ngegabung metodologi exchange mapan dengan referensi akademik (Crypto Carry; Perpetual Futures Pricing), terverifikasi-web. Edukatif, bukan nasihat keuangan; funding itu fee dan sinyal risk-neutral, bukan forecast return.⟧`
    },
    focus: {
      en: `The exchange funding rate is $F(P) = P + \\mathrm{clamp}(I - P, -c, c)$, where $P$ is the **premium index** (how rich/cheap the perp is vs spot), $I$ is a small **interest rate** (≈0.01%/8h), and $c$ is the clamp bound (≈0.05%). It has three regimes: $F=I$ (flat) for a small premium, $F=P-c$ when the perp is rich (longs pay roughly the premium), and $F=P+c$ when it is cheap. Three readings follow: as a **mechanism**, funding is the force that pulls the perp back to spot (the off-side pays); as a **positioning signal**, the sign of $F$ tells you the crowded side — persistent positive (longs pay) flags crowded longs / flush risk, persistent negative (shorts pay, market makers net long) flags upside-squeeze risk; and as a **carry**, the cash-and-carry (long spot, short perp) collects $+F$ when the premium is positive — the "crypto carry".`,
      id: `Funding rate exchange itu $F(P) = P + \\mathrm{clamp}(I - P, -c, c)$, dengan $P$ itu **premium index** (seberapa kaya/murah perp vs spot), $I$ itu **interest rate** kecil (≈0.01%/8h), dan $c$ itu bound clamp (≈0.05%). Dia punya tiga regime: $F=I$ (flat) buat premium kecil, $F=P-c$ pas perp kaya (long bayar kira-kira premium-nya), dan $F=P+c$ pas dia murah. Tiga bacaan ngikut: sebagai **mekanisme**, funding itu gaya yang narik perp balik ke spot (sisi-lawan bayar); sebagai **sinyal positioning**, tanda $F$ ngasih tau kamu sisi ramai — positif persisten (long bayar) nge-flag long ramai / risiko flush, negatif persisten (short bayar, market maker net long) nge-flag risiko upside-squeeze; dan sebagai **carry**, cash-and-carry (long spot, short perp) ngumpulin $+F$ pas premium positif — "crypto carry".`
    },
    intellectualLineage: {
      en: `The funding mechanism is the perpetual-swap analogue of cost-of-carry / convergence in dated futures: with no expiry, the funding payment substitutes for the pull-to-spot that maturity provides. The **no-arbitrage pricing** is Ackerer, Hugonnier & Jermann (2024): the perp price is the risk-neutral expectation of spot sampled at a random time reflecting the anchoring intensity. The **carry** interpretation is Schmeling, Schrimpf & Todorov (2023) "Crypto Carry": funding is the return on a cash-and-carry, and its boom-bust dynamics drive crypto risk premia. The positioning read — funding sign as the crowded side, and the squeeze/flush regimes — is the practitioner layer (the @Husslin_ perp-premium edge), and the squeeze dynamics connect to the funding-liquidity spiral of Brunnermeier & Pedersen (2009).`,
      id: `Mekanisme funding itu analog perpetual-swap dari cost-of-carry / konvergensi di future bertanggal: tanpa expiry, pembayaran funding nggantiin pull-to-spot yang maturity sediain. **Pricing no-arbitrage**-nya itu Ackerer, Hugonnier & Jermann (2024): harga perp itu ekspektasi risk-neutral dari spot yang disampel di waktu acak yang ngerefleksiin intensitas anchoring. Interpretasi **carry**-nya itu Schmeling, Schrimpf & Todorov (2023) "Crypto Carry": funding itu return cash-and-carry, dan dinamika boom-bust-nya ngedorong risk premia crypto. Bacaan positioning — tanda funding sebagai sisi ramai, dan regime squeeze/flush — itu lapisan praktisi (edge perp-premium @Husslin_), dan dinamika squeeze nyambung ke funding-liquidity spiral Brunnermeier & Pedersen (2009).`
    },
    keyCollaborators: {
      en: 'The funding rate is implemented near-identically across major venues (BitMEX, Binance, Hyperliquid); the academic neighbours are Ackerer-Hugonnier-Jermann (pricing), the "Fundamentals of Perpetual Futures" literature, and Brunnermeier-Pedersen (the funding-liquidity spiral). The data is the perp premium / funding feed (Coinglass, exchange APIs).',
      id: 'Funding rate diimplementasiin nyaris-identik lintas venue besar (BitMEX, Binance, Hyperliquid); tetangga akademiknya itu Ackerer-Hugonnier-Jermann (pricing), literatur "Fundamentals of Perpetual Futures", dan Brunnermeier-Pedersen (funding-liquidity spiral). Datanya itu feed perp premium / funding (Coinglass, API exchange).',
    },
    legacy: {
      en: `Funding is the single most-watched number in crypto perp trading because it does three jobs at once. It keeps the perp tethered to spot (without it, perps would drift); it is a real-time crowding gauge (the side that pays is the crowded one); and it is a tradeable carry that, at extremes, can annualise to tens of percent — large enough to dominate a position's P&L and to mark the boom-bust turns Schmeling et al. document. Reading it well is the practitioner's shortcut to "where is everyone, and what will it cost them."`,
      id: `Funding itu satu angka paling-diawasi di trading perp crypto karena dia ngerjain tiga hal sekaligus. Dia ngejaga perp terikat ke spot (tanpanya, perp bakal drift); dia gauge crowding real-time (sisi yang bayar itu yang ramai); dan dia carry yang bisa-ditradekan yang, di ekstrem, bisa annualised ke puluhan persen — cukup besar buat mendominasi P&L posisi dan nandain belokan boom-bust yang Schmeling dkk. dokumentasiin. Bacanya dengan baik itu jalan-pintas praktisi ke "di mana semua orang, dan apa biayanya buat mereka."`
    },
    keyWorks: [
      { year: 2023, title: 'Crypto Carry (Schmeling, Schrimpf & Todorov) — funding as cash-and-carry; perps >98% of BTC futures volume', venue: 'BIS Working Paper 1087; Management Science (this item)' },
      { year: 2024, title: 'Perpetual Futures Pricing (Ackerer, Hugonnier & Jermann) — no-arb perp price = risk-neutral E[spot at random anchoring time]', venue: 'NBER WP 32936; Mathematical Finance' },
      { year: 2022, title: 'Fundamentals of Perpetual Futures', venue: 'arXiv:2212.06888' },
      { year: 2016, title: 'Perpetual swap funding methodology (premium index + clamped interest)', venue: 'BitMEX / Binance / Hyperliquid exchange docs' },
      { year: 2009, title: 'Market Liquidity and Funding Liquidity (Brunnermeier & Pedersen) — the funding-liquidity spiral (in this catalog)', venue: 'Review of Financial Studies' },
    ],
  },

  sections: [
    {
      id: 'motivation',
      heading: { en: 'Why this matters', id: 'Kenapa ini penting' },
      body: {
        en: `A dated future converges to spot at expiry — that is what pins its price. A **perpetual swap** has no expiry, so something else must do the pinning: the **funding rate**, a payment exchanged between longs and shorts every interval (usually 8 hours). When the perp trades *above* spot (a positive premium), funding is positive and **longs pay shorts** — which discourages new longs and pulls the perp back down; when it trades *below* spot, funding is negative and **shorts pay longs**, pushing it back up. Perps dominate crypto (Schmeling et al.: >98% of Bitcoin futures volume), so this one number is central.

It is worth studying because it does three jobs at once:
- **A mechanism** — the force that keeps the perp anchored to spot (the off-side pays for being off-side).
- **A positioning signal** — the *sign* of funding tells you the **crowded side**: persistent positive (longs paying) flags crowded longs and flush risk; persistent negative (shorts paying, so market makers are net long) flags upside-squeeze risk. This is exactly the @Husslin_ "perp premium → market-maker positioning" read.
- **A carry** — the cash-and-carry (long spot, short perp) *collects* the funding when the premium is positive; Schmeling, Schrimpf & Todorov call this the **crypto carry**, and at extremes it annualises to tens of percent.

⟦Disclaimer: established exchange methodology + academic references (web-verified) — educational, not financial advice. Funding is a fee and a risk-neutral signal, not a forecast of price; venues differ, and a crowded carry is itself a risk.⟧`,
        id: `Future bertanggal konvergen ke spot di expiry — itu yang maku harganya. **Perpetual swap** gak punya expiry, jadi sesuatu yang lain harus maku: **funding rate**, pembayaran yang dipertukarkan antara long dan short tiap interval (biasanya 8 jam). Pas perp trade *di atas* spot (premium positif), funding positif dan **long bayar short** — yang ngedisinsentif long baru dan narik perp balik turun; pas trade *di bawah* spot, funding negatif dan **short bayar long**, ndorong dia balik naik. Perp mendominasi crypto (Schmeling dkk.: >98% volume futures Bitcoin), jadi satu angka ini sentral.

Layak dipelajari karena dia ngerjain tiga hal sekaligus:
- **Mekanisme** — gaya yang ngejaga perp terikat ke spot (sisi-lawan bayar karena jadi sisi-lawan).
- **Sinyal positioning** — *tanda* funding ngasih tau kamu **sisi ramai**: positif persisten (long bayar) nge-flag long ramai dan risiko flush; negatif persisten (short bayar, jadi market maker net long) nge-flag risiko upside-squeeze. Ini persis bacaan @Husslin_ "perp premium → positioning market-maker".
- **Carry** — cash-and-carry (long spot, short perp) *ngumpulin* funding pas premium positif; Schmeling, Schrimpf & Todorov nyebut ini **crypto carry**, dan di ekstrem dia annualised ke puluhan persen.

⟦Disclaimer: metodologi exchange mapan + referensi akademik (terverifikasi-web) — edukatif, bukan nasihat keuangan. Funding itu fee dan sinyal risk-neutral, bukan forecast harga; venue beda, dan carry ramai itu sendiri risiko.⟧`
      }
    },
    {
      id: 'intuition',
      heading: { en: 'Who pays, and why it converges', id: 'Siapa bayar, dan kenapa konvergen' },
      body: {
        en: `Picture the perp price tethered to spot by an elastic band — the funding rate is the tension in the band:

- **Perp rich (premium > 0).** Longs are paying a premium to be long; funding goes positive so **longs pay shorts** every interval. That is a holding cost for longs and an income for shorts, which (a) discourages new longs and rewards shorts, pulling the perp back toward spot, and (b) tells you longs are the **crowded** side. Persistent rich funding → crowded longs paying to stay long → **flush risk** if they get shaken.
- **Perp cheap (premium < 0).** Shorts are paying; funding goes negative so **shorts pay longs**. Market makers (and carry traders) are happy to be net long and collect it — which is why huss reads persistent *negative* funding as **MMs net long ⇒ upside-squeeze risk**: the shorts are crowded and paying, and a move up forces them to cover.

Two consequences. First, **convergence**: the off-side always pays, so funding continuously nudges the perp back to spot — a perp can't drift far from spot for long without someone being paid to close the gap. Second, the **cash-and-carry**: if the premium is positive, an arbitrageur goes *long spot and short perp*, is market-neutral, and **collects the funding** — the crypto carry. That carry trade is itself the convergence force, and when it gets crowded and then unwinds, you get the boom-bust dynamics Schmeling et al. document.`,
        id: `Bayangin harga perp terikat ke spot oleh karet elastis — funding rate itu tegangan di karet:

- **Perp kaya (premium > 0).** Long bayar premium buat jadi long; funding jadi positif jadi **long bayar short** tiap interval. Itu biaya nahan buat long dan pendapatan buat short, yang (a) ngedisinsentif long baru dan ngehadiahin short, narik perp balik menuju spot, dan (b) ngasih tau kamu long itu sisi **ramai**. Funding kaya persisten → long ramai bayar buat tetap long → **risiko flush** kalau mereka terguncang.
- **Perp murah (premium < 0).** Short bayar; funding jadi negatif jadi **short bayar long**. Market maker (dan carry trader) seneng jadi net long dan ngumpulinnya — itu kenapa huss baca funding *negatif* persisten sebagai **MM net long ⇒ risiko upside-squeeze**: short-nya ramai dan bayar, dan gerakan naik maksa mereka cover.

Dua konsekuensi. Pertama, **konvergensi**: sisi-lawan selalu bayar, jadi funding terus ngedorong perp balik ke spot — perp gak bisa drift jauh dari spot lama tanpa ada yang dibayar buat nutup gap. Kedua, **cash-and-carry**: kalau premium positif, arbitrageur go *long spot dan short perp*, market-neutral, dan **ngumpulin funding** — crypto carry. Carry trade itu sendiri gaya konvergensi-nya, dan pas dia jadi ramai terus unwind, kamu dapet dinamika boom-bust yang Schmeling dkk. dokumentasiin.`
      }
    },
    {
      id: 'formalization',
      heading: { en: 'The funding formula, formalized', id: 'Formula funding, diformalkan' },
      visualization: {
        id: 'funding-rate-sim',
        component: 'FundingRateSim',
        title: {
          en: 'Perpetual funding rate vs premium (with the clamp)',
          id: 'Funding rate perpetual vs premium (dengan clamp)'
        },
        description: {
          en: "The exchange funding rate F(P) = P + clamp(I−P, −c, c) as a function of the perp premium P (all % per funding interval). Three regimes: F = I (flat, gold band) for a small premium P∈[I−c, I+c]; F = P−c when the perp is rich (longs pay); F = P+c when it is cheap (shorts pay). The readout gives the annualised funding (F × periods/yr), who pays (red = longs pay, green = shorts pay), and the positioning verdict — persistent positive premium = crowded longs / flush risk; persistent negative = MMs net long / upside-squeeze risk. The cash-and-carry (long spot / short perp) earns +F when the premium is positive.",
          id: "Funding rate exchange F(P) = P + clamp(I−P, −c, c) sebagai fungsi premium perp P (semua % per interval funding). Tiga regime: F = I (flat, band emas) buat premium kecil P∈[I−c, I+c]; F = P−c pas perp kaya (long bayar); F = P+c pas dia murah (short bayar). Readout ngasih funding tahunan (F × periode/thn), yang bayar (merah = long bayar, hijau = short bayar), dan verdict positioning — premium positif persisten = long ramai / risiko flush; negatif persisten = MM net long / risiko upside-squeeze. Cash-and-carry (long spot / short perp) dapet +F pas premium positif."
        },
        defaultParams: { premium: 0.03, interest: 0.01, clampC: 0.05, intervalHours: 8 },
        height: 420,
      },
      body: {
        en: `**The exchange funding rate.** With the premium index $P$ (perp vs spot), a small interest rate $I$, and clamp bound $c$ (all per funding interval):
$$F(P) = P + \\mathrm{clamp}(I - P,\\ -c,\\ c),\\qquad \\mathrm{clamp}(x,-c,c)=\\max(-c,\\min(c,x)).$$
This is the standard methodology (BitMEX / Binance / Hyperliquid; typically $I\\approx0.01\\%$, $c\\approx0.05\\%$, every 8h). It is continuous, non-decreasing in $P$, and has **three regimes**:
- **Small premium** $P\\in[I-c,\\,I+c]$: the clamp is inactive, $F = P + (I-P) = I$ — funding is just the **flat interest rate**.
- **Rich** $P>I+c$: the clamp binds at $-c$, so $F = P - c$ — funding tracks the premium (**longs pay** roughly the premium).
- **Cheap** $P<I-c$: the clamp binds at $+c$, so $F = P + c$ (**shorts pay**).

**Annualised funding** is $F\\times(\\text{periods per year})$, with periods $=365\\cdot24/\\text{interval hours}$ (8h ⇒ 1095×). A funding of $0.05\\%$/8h annualises to $\\approx 55\\%$ — large enough to dominate a leveraged position's carry.

**No-arbitrage pricing.** Ackerer, Hugonnier & Jermann (2024) show the no-arbitrage perp price equals the **risk-neutral expectation of spot sampled at a random time** whose intensity reflects the funding anchoring — the formal statement of "funding keeps the perp tethered to spot."

The simulator plots $F(P)$ with the flat band and the two wings, marks the current premium, and reports the annualised funding, who pays, and the positioning verdict.`,
        id: `**Funding rate exchange.** Dengan premium index $P$ (perp vs spot), interest rate kecil $I$, dan bound clamp $c$ (semua per interval funding):
$$F(P) = P + \\mathrm{clamp}(I - P,\\ -c,\\ c),\\qquad \\mathrm{clamp}(x,-c,c)=\\max(-c,\\min(c,x)).$$
Ini metodologi standar (BitMEX / Binance / Hyperliquid; biasanya $I\\approx0.01\\%$, $c\\approx0.05\\%$, tiap 8 jam). Dia kontinu, non-decreasing di $P$, dan punya **tiga regime**:
- **Premium kecil** $P\\in[I-c,\\,I+c]$: clamp gak aktif, $F = P + (I-P) = I$ — funding cuma **interest rate flat**.
- **Kaya** $P>I+c$: clamp ngebind di $-c$, jadi $F = P - c$ — funding ngikut premium (**long bayar** kira-kira premium-nya).
- **Murah** $P<I-c$: clamp ngebind di $+c$, jadi $F = P + c$ (**short bayar**).

**Funding tahunan** itu $F\\times(\\text{periode per tahun})$, dengan periode $=365\\cdot24/\\text{jam interval}$ (8 jam ⇒ 1095×). Funding $0.05\\%$/8h annualised ke $\\approx 55\\%$ — cukup besar buat mendominasi carry posisi ter-leverage.

**Pricing no-arbitrage.** Ackerer, Hugonnier & Jermann (2024) nunjukin harga perp no-arbitrage sama dengan **ekspektasi risk-neutral dari spot yang disampel di waktu acak** yang intensitasnya ngerefleksiin anchoring funding — pernyataan formal dari "funding ngejaga perp terikat ke spot."

Simulator ngeplot $F(P)$ dengan band flat dan dua wing, nandain premium sekarang, dan ngelaporin funding tahunan, yang bayar, dan verdict positioning.`
      }
    },
    {
      id: 'worked-example',
      heading: { en: 'Worked example: reading a funding print', id: 'Contoh: membaca print funding' },
      body: {
        en: `**Read funding as positioning + carry (illustrative).**

1. **A rich-premium print.** The perp trades well above spot; the premium index is $+0.12\\%$/8h, with $I=0.01\\%$, $c=0.05\\%$. The premium is past the upper kink ($I+c=0.06\\%$), so the clamp binds: $F = P - c = 0.12\\% - 0.05\\% = 0.07\\%$/8h. **Annualised:** $0.07\\%\\times1095\\approx 77\\%$/yr. **Read:** longs are paying ~77%/yr to stay long — crowded longs, expensive to hold — **flush risk**. The cash-and-carry (long spot, short perp) earns that 77% market-neutral, and that arb flow is what drags the perp back toward spot.
2. **A small-premium print.** Premium $+0.02\\%$ (inside the flat band): $F = I = 0.01\\%$/8h ≈ 11%/yr — funding is just the baseline interest, no strong positioning signal.
3. **A negative-premium print.** Premium $-0.12\\%$: below the lower kink, $F = P + c = -0.07\\%$ — **shorts pay longs**, ~−77%/yr. **Read:** shorts are crowded and paying; market makers are net long collecting it — **upside-squeeze risk** (the exact @Husslin_ negative-funding setup; a move up forces shorts to cover).

**The read.** The same formula gives you, simultaneously, the *cost* of a position (annualised funding), the *crowded side* (sign of $F$), and a *market-neutral carry* (cash-and-carry). A persistently extreme funding is both a warning (crowding) and an opportunity (carry) — and, per Schmeling et al., the build-up and collapse of that carry is a driver of crypto boom-bust.

⟦Disclaimer: illustrative numbers, not a recommendation. Funding ≠ a return forecast; carry trades carry their own crash risk when crowded.⟧`,
        id: `**Baca funding sebagai positioning + carry (ilustratif).**

1. **Print premium-kaya.** Perp trade jauh di atas spot; premium index $+0.12\\%$/8h, dengan $I=0.01\\%$, $c=0.05\\%$. Premium-nya lewat kink atas ($I+c=0.06\\%$), jadi clamp ngebind: $F = P - c = 0.12\\% - 0.05\\% = 0.07\\%$/8h. **Annualised:** $0.07\\%\\times1095\\approx 77\\%$/thn. **Bacaan:** long bayar ~77%/thn buat tetap long — long ramai, mahal buat nahan — **risiko flush**. Cash-and-carry (long spot, short perp) dapet 77% itu market-neutral, dan flow arb itu yang narik perp balik menuju spot.
2. **Print premium-kecil.** Premium $+0.02\\%$ (di dalam band flat): $F = I = 0.01\\%$/8h ≈ 11%/thn — funding cuma interest baseline, gak ada sinyal positioning kuat.
3. **Print premium-negatif.** Premium $-0.12\\%$: di bawah kink bawah, $F = P + c = -0.07\\%$ — **short bayar long**, ~−77%/thn. **Bacaan:** short ramai dan bayar; market maker net long ngumpulinnya — **risiko upside-squeeze** (persis setup funding-negatif @Husslin_; gerakan naik maksa short cover).

**Bacaannya.** Formula yang sama ngasih kamu, sekaligus, *biaya* posisi (funding tahunan), *sisi ramai* (tanda $F$), dan *carry market-neutral* (cash-and-carry). Funding ekstrem persisten itu baik peringatan (crowding) maupun peluang (carry) — dan, menurut Schmeling dkk., build-up dan kolaps carry itu pendorong boom-bust crypto.

⟦Disclaimer: angka ilustratif, bukan rekomendasi. Funding ≠ forecast return; carry trade bawa crash risk sendiri pas ramai.⟧`
      }
    },
    {
      id: 'applications',
      heading: { en: 'Applications', id: 'Aplikasi' },
      body: {
        en: `**The positioning read (the Husslin first question).** Funding is the cleanest live answer to "where is everyone, and what does it cost them": the sign is the crowded side, the magnitude (annualised) is how strongly they are paying. Persistent rich funding = crowded longs / flush risk; persistent negative = MMs net long / upside-squeeze risk. This is the data behind the perp-premium row of [OI & positioning](item:husslin-oi-positioning).

**Carry & basis trades.** The cash-and-carry (long spot, short perp) harvests positive funding market-neutral — the crypto carry. The same machinery prices calendar/basis trades against dated futures, and the funding term structure (across venues and tenors) is itself tradeable. Schmeling et al. show the carry is a priced risk factor with boom-bust dynamics.

**A crowding & cost gauge.** Because funding annualises to large numbers at extremes, it is both a position *cost* you must budget and a *crowding* alarm. A funding spike alongside thin liquidity is harvest fuel (the [liquidity-harvesting](item:husslin-liquidity-harvesting) setup), and a forced deleveraging of crowded, funding-paying positions is the funding-liquidity spiral of [Brunnermeier-Pedersen](item:brunnermeier-pedersen-2009).

**Honest limits.** Funding is a *fee* and a *risk-neutral* signal, not a forecast of future returns — high funding does not "predict" a drop, it prices current crowding. The clamp, interval, and interest differ by venue, and basis risk (perp vs the specific spot you hold) is real. A carry trade that looks free is exposed precisely when everyone is in it: the carry collapses and the spiral runs against you. Treat funding as a positioning and cost gauge to combine with the rest of the framework, not a standalone signal.`,
        id: `**Bacaan positioning (pertanyaan pertama Husslin).** Funding itu jawaban live paling bersih buat "di mana semua orang, dan apa biayanya buat mereka": tanda itu sisi ramai, magnitudo (annualised) itu seberapa kuat mereka bayar. Funding kaya persisten = long ramai / risiko flush; negatif persisten = MM net long / risiko upside-squeeze. Ini data di balik baris perp-premium dari [OI & positioning](item:husslin-oi-positioning).

**Carry & basis trade.** Cash-and-carry (long spot, short perp) manen funding positif market-neutral — crypto carry. Mesin yang sama nge-price calendar/basis trade lawan future bertanggal, dan term structure funding (lintas venue dan tenor) itu sendiri bisa-ditradekan. Schmeling dkk. nunjukin carry itu faktor risiko ber-harga dengan dinamika boom-bust.

**Gauge crowding & biaya.** Karena funding annualised ke angka besar di ekstrem, dia baik *biaya* posisi yang harus kamu budget maupun alarm *crowding*. Lonjakan funding bareng likuiditas tipis itu bahan bakar harvest (setup [liquidity-harvesting](item:husslin-liquidity-harvesting)), dan deleveraging terpaksa dari posisi ramai yang bayar-funding itu funding-liquidity spiral [Brunnermeier-Pedersen](item:brunnermeier-pedersen-2009).

**Batas jujur.** Funding itu *fee* dan sinyal *risk-neutral*, bukan forecast return masa depan — funding tinggi gak "memprediksi" jatuh, dia nge-price crowding sekarang. Clamp, interval, dan interest beda per venue, dan basis risk (perp vs spot spesifik yang kamu pegang) itu nyata. Carry trade yang keliatan gratis terekspos persis pas semua orang di dalamnya: carry-nya kolaps dan spiral jalan lawan kamu. Perlakukan funding sebagai gauge positioning dan biaya buat digabung sama sisa framework, bukan sinyal standalone.`
      }
    },
    {
      id: 'practice',
      heading: { en: 'Practice', id: 'Latihan' },
      body: {
        en: `**1.** A perpetual swap has no expiry. What replaces the maturity-driven convergence of a dated future, and how does it work?

<details><summary>Answer</summary>
The FUNDING RATE — a payment exchanged between longs and shorts every interval (typically 8h). When the perp trades above spot (positive premium), funding is positive so LONGS PAY SHORTS, which discourages longs and rewards shorts, nudging the perp back down toward spot; when it trades below spot, funding is negative so SHORTS PAY LONGS, pushing it up. The off-side always pays for being off-side, so funding continuously anchors the perp to spot in place of the pull-to-spot a dated future gets at expiry. Formally (Ackerer-Hugonnier-Jermann), the no-arbitrage perp price is the risk-neutral expectation of spot sampled at a random anchoring time.
</details>

**2.** Write the exchange funding formula and describe its three regimes.

<details><summary>Answer</summary>
F(P) = P + clamp(I − P, −c, c), with P the premium index, I a small interest rate (~0.01%/8h), c the clamp (~0.05%). Three regimes: (1) SMALL PREMIUM, P∈[I−c, I+c]: the clamp is inactive and F = P + (I−P) = I — funding is just the flat interest rate. (2) RICH, P > I+c: the clamp binds at −c, F = P − c — funding tracks the premium and longs pay ≈ the premium. (3) CHEAP, P < I−c: the clamp binds at +c, F = P + c — shorts pay. The function is continuous (F = I at both kinks) and non-decreasing in P.
</details>

**3.** Funding on an 8h venue is +0.07%/interval. What does that mean as an annualised carry, who pays, and what is the positioning read?

<details><summary>Answer</summary>
Annualised = 0.07% × (365×24/8) = 0.07% × 1095 ≈ 77%/yr. F > 0 means LONGS PAY SHORTS — so longs are the crowded side, paying ~77%/yr to hold, which is an expensive, crowded long → FLUSH RISK (a shake-out forces them out). The market-neutral cash-and-carry (long spot, short perp) collects that ~77% (the crypto carry), and that arbitrage flow is what pulls the perp back toward spot. Conversely a persistently NEGATIVE funding would mean shorts pay / MMs net long → upside-squeeze risk. So this print is a crowded-long, high-carry, flush-risk situation.
</details>

**4.** Why is funding a risk-neutral/positioning signal rather than a forecast, and what is the trap in a crowded carry?

<details><summary>Answer</summary>
Funding prices the CURRENT premium/crowding (who is paying to hold their side now) and is the cost that enforces convergence — it does not predict future returns. High positive funding doesn't "predict" a fall; it says longs are currently crowded and paying. The trap in a crowded carry (everyone long spot / short perp to collect funding): the carry looks like free, market-neutral yield, but when the crowd is one-sided and conditions turn, the carry collapses and forced deleveraging (the Brunnermeier-Pedersen funding-liquidity spiral) runs against the crowded position — the boom-bust dynamics Schmeling et al. document. So funding is a positioning + cost gauge to combine with liquidity and the rest of the framework, sized for the unwind, not a standalone signal.
</details>`,
        id: `**1.** Perpetual swap gak punya expiry. Apa yang nggantiin konvergensi yang didorong-maturity dari future bertanggal, dan gimana dia kerja?

<details><summary>Jawaban</summary>
FUNDING RATE — pembayaran yang dipertukarkan antara long dan short tiap interval (biasanya 8 jam). Pas perp trade di atas spot (premium positif), funding positif jadi LONG BAYAR SHORT, yang ngedisinsentif long dan ngehadiahin short, ngedorong perp balik turun menuju spot; pas trade di bawah spot, funding negatif jadi SHORT BAYAR LONG, ndorong dia naik. Sisi-lawan selalu bayar karena jadi sisi-lawan, jadi funding terus nge-anchor perp ke spot menggantikan pull-to-spot yang future bertanggal dapet di expiry. Secara formal (Ackerer-Hugonnier-Jermann), harga perp no-arbitrage itu ekspektasi risk-neutral dari spot yang disampel di waktu anchoring acak.
</details>

**2.** Tulis formula funding exchange dan gambarin tiga regime-nya.

<details><summary>Jawaban</summary>
F(P) = P + clamp(I − P, −c, c), dengan P premium index, I interest rate kecil (~0.01%/8h), c clamp (~0.05%). Tiga regime: (1) PREMIUM KECIL, P∈[I−c, I+c]: clamp gak aktif dan F = P + (I−P) = I — funding cuma interest rate flat. (2) KAYA, P > I+c: clamp ngebind di −c, F = P − c — funding ngikut premium dan long bayar ≈ premium-nya. (3) MURAH, P < I−c: clamp ngebind di +c, F = P + c — short bayar. Fungsinya kontinu (F = I di kedua kink) dan non-decreasing di P.
</details>

**3.** Funding di venue 8 jam itu +0.07%/interval. Apa artinya sebagai carry tahunan, siapa bayar, dan apa bacaan positioning-nya?

<details><summary>Jawaban</summary>
Annualised = 0.07% × (365×24/8) = 0.07% × 1095 ≈ 77%/thn. F > 0 berarti LONG BAYAR SHORT — jadi long sisi ramai, bayar ~77%/thn buat nahan, yang itu long ramai mahal → RISIKO FLUSH (shake-out maksa mereka keluar). Cash-and-carry market-neutral (long spot, short perp) ngumpulin ~77% itu (crypto carry), dan flow arbitrase itu yang narik perp balik menuju spot. Sebaliknya funding NEGATIF persisten bakal berarti short bayar / MM net long → risiko upside-squeeze. Jadi print ini situasi long-ramai, carry-tinggi, risiko-flush.
</details>

**4.** Kenapa funding itu sinyal risk-neutral/positioning bukan forecast, dan apa jebakan di carry ramai?

<details><summary>Jawaban</summary>
Funding nge-price premium/crowding SEKARANG (siapa yang bayar buat nahan sisinya sekarang) dan itu biaya yang nge-enforce konvergensi — dia gak memprediksi return masa depan. Funding positif tinggi gak "memprediksi" jatuh; dia bilang long lagi ramai dan bayar. Jebakan di carry ramai (semua long spot / short perp buat ngumpulin funding): carry-nya keliatan kayak yield gratis, market-neutral, tapi pas kerumunan satu-sisi dan kondisi balik, carry-nya kolaps dan deleveraging terpaksa (funding-liquidity spiral Brunnermeier-Pedersen) jalan lawan posisi ramai — dinamika boom-bust yang Schmeling dkk. dokumentasiin. Jadi funding itu gauge positioning + biaya buat digabung sama likuiditas dan sisa framework, di-size buat unwind, bukan sinyal standalone.
</details>`
      }
    },
    {
      id: 'connections',
      heading: { en: 'Connections', id: 'Koneksi' },
      body: {
        en: `- **The positioning leg it powers**: [OI & positioning](item:husslin-oi-positioning) — funding/perp premium is its "who pays = the crowded side" row; this module is the mechanism beneath it.
- **The framework**: [the @Husslin_ framework](item:husslin-framework) — funding is a primary input to the first question ("where is everyone?").
- **Squeeze fuel**: [liquidity harvesting](item:husslin-liquidity-harvesting) — extreme funding + thin books is harvest geometry; and [Brunnermeier-Pedersen 2009](item:brunnermeier-pedersen-2009) is the funding-liquidity spiral that turns a crowded, funding-paying crowd into a cascade.
- **The literature map**: [Sources & Curriculum](item:trading-sources-curriculum) — Schmeling et al. (Crypto Carry), Ackerer et al. (perp pricing) in the bibliography.`,
        id: `- **Kaki positioning yang dia kuatkan**: [OI & positioning](item:husslin-oi-positioning) — funding/perp premium itu baris "yang bayar = sisi ramai"-nya; module ini mekanisme di bawahnya.
- **Framework-nya**: [framework @Husslin_](item:husslin-framework) — funding itu input utama buat pertanyaan pertama ("di mana semua orang?").
- **Bahan bakar squeeze**: [liquidity harvesting](item:husslin-liquidity-harvesting) — funding ekstrem + buku tipis itu geometri harvest; dan [Brunnermeier-Pedersen 2009](item:brunnermeier-pedersen-2009) itu funding-liquidity spiral yang ngubah kerumunan ramai yang bayar-funding jadi cascade.
- **Peta literatur**: [Sources & Curriculum](item:trading-sources-curriculum) — Schmeling dkk. (Crypto Carry), Ackerer dkk. (perp pricing) di bibliografi.`
      }
    },
    {
      id: 'sources',
      heading: { en: 'Sources', id: 'Sumber' },
      body: {
        en: `Established methodology + academic references (web-verified); educational, not financial advice.
- **Schmeling, M., Schrimpf, A., and Todorov, K.** (2023). "Crypto Carry." *BIS Working Paper No. 1087*; *Management Science.* **(This item.)** Funding as cash-and-carry; perps >98% of BTC futures volume; boom-bust dynamics.
- **Ackerer, D., Hugonnier, J., and Jermann, U.** (2024). "Perpetual Futures Pricing." *NBER WP 32936; Mathematical Finance.* No-arb perp price = risk-neutral E[spot at a random anchoring time].
- "Fundamentals of Perpetual Futures." (2022). *arXiv:2212.06888.*
- **Exchange funding methodology** (BitMEX / Binance / Hyperliquid): F = P + clamp(I − P, −0.05%, 0.05%), I ≈ 0.01%/8h, computed via a TWAP of the premium index.
- **Brunnermeier, M. K., and Pedersen, L. H.** (2009). "Market Liquidity and Funding Liquidity." *RFS.* The funding-liquidity spiral (in this catalog).`,
        id: `Metodologi mapan + referensi akademik (terverifikasi-web); edukatif, bukan nasihat keuangan.
- **Schmeling, M., Schrimpf, A., dan Todorov, K.** (2023). "Crypto Carry." *BIS Working Paper No. 1087*; *Management Science.* **(Item ini.)** Funding sebagai cash-and-carry; perp >98% volume futures BTC; dinamika boom-bust.
- **Ackerer, D., Hugonnier, J., dan Jermann, U.** (2024). "Perpetual Futures Pricing." *NBER WP 32936; Mathematical Finance.* Harga perp no-arb = E risk-neutral[spot di waktu anchoring acak].
- "Fundamentals of Perpetual Futures." (2022). *arXiv:2212.06888.*
- **Metodologi funding exchange** (BitMEX / Binance / Hyperliquid): F = P + clamp(I − P, −0.05%, 0.05%), I ≈ 0.01%/8h, dihitung via TWAP dari premium index.
- **Brunnermeier, M. K., dan Pedersen, L. H.** (2009). "Market Liquidity and Funding Liquidity." *RFS.* Funding-liquidity spiral (di katalog ini).`
      }
    },
  ],

  audio: { enabled: true },

  selfTest: [
    {
      sectionId: 'intuition',
      question: { en: `How does funding both anchor the perp to spot and reveal the crowded side?`, id: `Gimana funding sekaligus nge-anchor perp ke spot dan ngungkap sisi ramai?` },
      prompt: { en: 'Before continuing, try answering:', id: 'Sebelum lanjut, coba jawab:' },
      answer: {
        en: `Both follow from "the off-side pays." When the perp trades rich (premium > 0), funding is positive so longs pay shorts: that is a holding cost that discourages longs and rewards shorts, pulling the perp back toward spot (ANCHORING) — and the fact that longs are the ones paying tells you longs are the CROWDED side (a persistent rich funding = crowded longs / flush risk). When the perp trades cheap, funding is negative so shorts pay longs: it pushes the perp up (anchoring) and reveals shorts as crowded, with market makers net long collecting funding (persistent negative = MMs net long / upside-squeeze risk — the Husslin read). And the cash-and-carry (long spot, short perp) that collects positive funding IS the arbitrage flow doing the anchoring. So the one number is simultaneously the convergence force and the crowding gauge.`,
        id: `Keduanya ngikut dari "sisi-lawan bayar." Pas perp trade kaya (premium > 0), funding positif jadi long bayar short: itu biaya nahan yang ngedisinsentif long dan ngehadiahin short, narik perp balik menuju spot (ANCHORING) — dan fakta bahwa long yang bayar ngasih tau kamu long itu sisi RAMAI (funding kaya persisten = long ramai / risiko flush). Pas perp trade murah, funding negatif jadi short bayar long: dia ndorong perp naik (anchoring) dan ngungkap short sebagai ramai, dengan market maker net long ngumpulin funding (negatif persisten = MM net long / risiko upside-squeeze — bacaan Husslin). Dan cash-and-carry (long spot, short perp) yang ngumpulin funding positif ITU flow arbitrase yang ngelakuin anchoring. Jadi satu angka itu sekaligus gaya konvergensi dan gauge crowding.`
      }
    },
    {
      sectionId: 'formalization',
      question: { en: `Write F(P) and explain its three regimes and why it is continuous and non-decreasing.`, id: `Tulis F(P) dan jelasin tiga regime-nya dan kenapa dia kontinu dan non-decreasing.` },
      prompt: { en: 'Before continuing, try answering:', id: 'Sebelum lanjut, coba jawab:' },
      answer: {
        en: `F(P) = P + clamp(I − P, −c, c), with premium index P, interest I (~0.01%/8h), clamp c (~0.05%). Regimes: (1) P∈[I−c, I+c] (small premium): clamp inactive, F = P + (I−P) = I — flat at the interest rate. (2) P > I+c (rich): clamp binds at −c, F = P − c — funding tracks the premium, longs pay. (3) P < I−c (cheap): clamp binds at +c, F = P + c — shorts pay. It is CONTINUOUS because at the kinks the pieces meet: at P=I−c, P+c = I; at P=I+c, P−c = I — both equal the flat value I. It is NON-DECREASING because the wings have slope 1 in P and the middle is flat (slope 0), with no downward step. Annualised funding = F × (365·24/interval hours), e.g. 1095× for 8h.`,
        id: `F(P) = P + clamp(I − P, −c, c), dengan premium index P, interest I (~0.01%/8h), clamp c (~0.05%). Regime: (1) P∈[I−c, I+c] (premium kecil): clamp gak aktif, F = P + (I−P) = I — flat di interest rate. (2) P > I+c (kaya): clamp ngebind di −c, F = P − c — funding ngikut premium, long bayar. (3) P < I−c (murah): clamp ngebind di +c, F = P + c — short bayar. Dia KONTINU karena di kink potongannya ketemu: di P=I−c, P+c = I; di P=I+c, P−c = I — keduanya sama dengan nilai flat I. Dia NON-DECREASING karena wing-nya punya slope 1 di P dan tengahnya flat (slope 0), tanpa step turun. Funding tahunan = F × (365·24/jam interval), misal 1095× buat 8 jam.`
      }
    },
    {
      sectionId: 'applications',
      question: { en: `Why is funding a positioning/cost gauge rather than a forecast, and what is the danger in a crowded carry trade?`, id: `Kenapa funding itu gauge positioning/biaya bukan forecast, dan apa bahaya di carry trade ramai?` },
      prompt: { en: 'Before continuing, try answering:', id: 'Sebelum lanjut, coba jawab:' },
      answer: {
        en: `Funding prices the CURRENT premium and crowding — it is the fee the off-side pays to hold its position and the force that enforces convergence — so it tells you who is paying NOW, not what price will do next. High positive funding doesn't predict a fall; it says longs are crowded and paying. The danger in a crowded carry (everyone long spot / short perp to collect positive funding): it looks like free, market-neutral yield, but the trade is one-sided, so when conditions turn the carry collapses and forced deleveraging — the Brunnermeier-Pedersen funding-liquidity spiral — runs against the crowded position, producing the boom-bust dynamics Schmeling et al. document. So funding is a positioning and cost gauge to combine with liquidity and the broader framework, sized for the unwind, not a standalone alpha signal.`,
        id: `Funding nge-price premium dan crowding SEKARANG — dia fee yang sisi-lawan bayar buat nahan posisinya dan gaya yang nge-enforce konvergensi — jadi dia ngasih tau kamu siapa yang bayar SEKARANG, bukan harga bakal ngapain berikutnya. Funding positif tinggi gak memprediksi jatuh; dia bilang long ramai dan bayar. Bahaya di carry ramai (semua long spot / short perp buat ngumpulin funding positif): keliatan kayak yield gratis, market-neutral, tapi trade-nya satu-sisi, jadi pas kondisi balik carry-nya kolaps dan deleveraging terpaksa — funding-liquidity spiral Brunnermeier-Pedersen — jalan lawan posisi ramai, ngehasilin dinamika boom-bust yang Schmeling dkk. dokumentasiin. Jadi funding itu gauge positioning dan biaya buat digabung sama likuiditas dan framework lebih luas, di-size buat unwind, bukan sinyal alpha standalone.`
      }
    },
  ],
};
