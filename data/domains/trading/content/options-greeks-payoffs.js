// ─────────────────────────────────────────────────────────────────────────
// Trading domain — the OPTIONS / GREEKS foundation: the Black-Scholes-Merton
// price, the Greeks (Δ, Γ, ν, Θ, ρ) read as exposures, and the payoff / P&L
// of multi-leg structures (expiry intrinsic vs current mark-to-model,
// breakevens, net Greeks). This is the pricing layer BENEATH the dealer-gamma
// and vol-surface modules. ESTABLISHED textbook math, web-verified refs.
// Carries the interactive OptionsStrategySim (js/viz.js, verified by
// scripts/verify-options-sim.mjs — put-call parity + every Greek vs a
// finite-difference bump). Educational, not financial advice.
// ─────────────────────────────────────────────────────────────────────────

export const CONTENT = {
  itemId: 'options-greeks-payoffs',
  estimatedReadMinutes: 30,

  author: {
    fullName: { en: 'Black, Scholes & Merton (the option-pricing canon)', id: 'Black, Scholes & Merton (kanon penetapan-harga opsi)' },
    affiliation: {
      en: 'Fischer Black and Myron Scholes (University of Chicago / MIT) published "The Pricing of Options and Corporate Liabilities" (Journal of Political Economy, 1973); Robert C. Merton (MIT) gave the rigorous and generalized treatment in "Theory of Rational Option Pricing" (Bell Journal of Economics and Management Science, 1973). Scholes and Merton received the 1997 Nobel Memorial Prize in Economic Sciences (Black had died in 1995). The practitioner canon that turned the model into a trading discipline is Hull, Natenberg, and Taleb.',
      id: 'Fischer Black dan Myron Scholes (University of Chicago / MIT) nerbitin "The Pricing of Options and Corporate Liabilities" (Journal of Political Economy, 1973); Robert C. Merton (MIT) ngasih perlakuan yang ketat dan tergeneralisasi di "Theory of Rational Option Pricing" (Bell Journal of Economics and Management Science, 1973). Scholes dan Merton dapet Nobel Memorial Prize bidang Ekonomi 1997 (Black udah wafat tahun 1995). Kanon praktisi yang ngubah model jadi disiplin trading itu Hull, Natenberg, dan Taleb.',
    },
    tagline: {
      en: 'An option is a bet on where the stock goes AND on how much it moves. Black-Scholes-Merton gives the price; the Greeks decompose that price into separate exposures you can hold, hedge, or trade — direction (Δ), curvature (Γ), volatility (ν), and time (Θ).',
      id: 'Opsi itu taruhan tentang ke mana saham pergi DAN seberapa banyak dia gerak. Black-Scholes-Merton ngasih harganya; Greeks ngebongkar harga itu jadi eksposur terpisah yang bisa kamu pegang, hedge, atau trade — arah (Δ), kelengkungan (Γ), volatilitas (ν), dan waktu (Θ).',
    },
    bio: {
      en: `In 1973 Fischer Black and Myron Scholes showed that an option can be **replicated** by a continuously rebalanced position in the stock and a risk-free bond, so its fair price is forced by no-arbitrage — independent of any view on the stock's expected return. Robert Merton gave the rigorous derivation and extended it (dividends, stochastic rates). The **Greeks** are the partial derivatives of that price: they tell you exactly how the option's value responds to the stock (Δ), to changes in Δ itself (Γ), to volatility (ν), and to the passage of time (Θ). This module is the pricing foundation that sits beneath the rest of the options material: the [dealer-gamma](item:husslin-dealer-flows) read is *Γ from the dealer's book*, and the [vol surface](item:gatheral-vol-surface) is the *σ input* this model takes as given.

⟦Note: this is established textbook mathematics (Black-Scholes-Merton; Hull; Natenberg; Taleb), web-verified. Educational, not financial advice. The model is a deliberate idealization — constant σ, no jumps, frictionless hedging — and the market's departures from it (the smile, gaps) are themselves the subject of the vol-surface and dealer-flow modules.⟧`,
      id: `Tahun 1973 Fischer Black dan Myron Scholes nunjukin opsi bisa di-**replikasi** lewat posisi yang di-rebalance terus-menerus di saham dan obligasi bebas-risiko, jadi harga wajarnya dipaksa oleh no-arbitrage — lepas dari pandangan apa pun soal expected return saham. Robert Merton ngasih derivasi yang ketat dan ngembangin (dividen, suku bunga stokastik). **Greeks** itu turunan parsial dari harga itu: mereka ngasih tau kamu persis gimana nilai opsi nanggepin saham (Δ), perubahan di Δ sendiri (Γ), volatilitas (ν), dan berlalunya waktu (Θ). Module ini fondasi pricing yang duduk di bawah sisa materi opsi: bacaan [dealer-gamma](item:husslin-dealer-flows) itu *Γ dari buku dealer*, dan [vol surface](item:gatheral-vol-surface) itu *input σ* yang model ini terima sebagai given.

⟦Catatan: ini matematika buku-teks mapan (Black-Scholes-Merton; Hull; Natenberg; Taleb), terverifikasi-web. Edukatif, bukan nasihat keuangan. Model ini idealization yang disengaja — σ konstan, tanpa lompatan, hedging tanpa friksi — dan penyimpangan pasar darinya (smile, gap) itu sendiri jadi subjek module vol-surface dan dealer-flow.⟧`
    },
    focus: {
      en: `With spot $S$, strike $K$, volatility $\\sigma$, time-to-expiry $\\tau$ (years), and rate $r$ (dividend yield $q=0$ here): $d_1=[\\ln(S/K)+(r+\\tfrac12\\sigma^2)\\tau]/(\\sigma\\sqrt\\tau)$, $d_2=d_1-\\sigma\\sqrt\\tau$, and the **call** is $C=S\\,N(d_1)-K e^{-r\\tau}N(d_2)$, the **put** $P=K e^{-r\\tau}N(-d_2)-S\\,N(-d_1)$. The Greeks: $\\Delta_{\\text{call}}=N(d_1)$ (the **hedge ratio** / directional exposure), $\\Gamma=\\varphi(d_1)/(S\\sigma\\sqrt\\tau)$ (**convexity** — how Δ moves, peaked at-the-money and as expiry nears), $\\nu=S\\varphi(d_1)\\sqrt\\tau$ (**vega** — sensitivity to σ), $\\Theta$ (**time decay** — long options bleed, short options earn), and $\\rho$ (rate sensitivity, usually minor). The **put-call parity** $C-P=S-K e^{-r\\tau}$ is the exact no-arbitrage tie between the two. A position is a set of legs; its **payoff at expiry** is intrinsic value, its **value now** is the BSM mark-to-model, and the gap between the two curves is time value bleeding off.`,
      id: `Dengan spot $S$, strike $K$, volatilitas $\\sigma$, waktu-ke-expiry $\\tau$ (tahun), dan rate $r$ (dividend yield $q=0$ di sini): $d_1=[\\ln(S/K)+(r+\\tfrac12\\sigma^2)\\tau]/(\\sigma\\sqrt\\tau)$, $d_2=d_1-\\sigma\\sqrt\\tau$, dan **call**-nya $C=S\\,N(d_1)-K e^{-r\\tau}N(d_2)$, **put**-nya $P=K e^{-r\\tau}N(-d_2)-S\\,N(-d_1)$. Greeks-nya: $\\Delta_{\\text{call}}=N(d_1)$ (**hedge ratio** / eksposur arah), $\\Gamma=\\varphi(d_1)/(S\\sigma\\sqrt\\tau)$ (**konveksitas** — gimana Δ gerak, puncaknya at-the-money dan pas expiry mendekat), $\\nu=S\\varphi(d_1)\\sqrt\\tau$ (**vega** — sensitivitas ke σ), $\\Theta$ (**peluruhan waktu** — opsi long berdarah, opsi short dapet), dan $\\rho$ (sensitivitas rate, biasanya minor). **Put-call parity** $C-P=S-K e^{-r\\tau}$ itu ikatan no-arbitrage persis antara keduanya. Posisi itu sekumpulan leg; **payoff saat expiry**-nya itu nilai intrinsik, **nilai sekarang**-nya itu mark-to-model BSM, dan jarak antara dua kurva itu time value yang luruh.`
    },
    intellectualLineage: {
      en: `The replication argument descends from the no-arbitrage logic of Modigliani-Miller and the random-walk view of prices (Bachelier, Samuelson). Black-Scholes-Merton's insight is that a delta-hedged option is **locally riskless**, so it must earn the risk-free rate — which yields a PDE whose solution is the formula, and explains why the expected return of the stock never appears (risk-neutral valuation, later formalized by Harrison-Kreps-Pliska). Merton generalized it. The **practitioner lineage** turned it into a craft: Hull's *Options, Futures, and Other Derivatives* is the standard course text; Natenberg's *Option Volatility & Pricing* teaches trading by the Greeks and the smile; Taleb's *Dynamic Hedging* is the trader's field manual for the second-order risks (Γ, vanna, charm, the tails) the textbook model understates. From there the road forks into the **vol surface** (Gatheral — what σ really looks like across strike and maturity) and **dealer hedging flows** (the market impact of everyone hedging their Γ at once).`,
      id: `Argumen replikasi turun dari logika no-arbitrage Modigliani-Miller dan pandangan random-walk soal harga (Bachelier, Samuelson). Wawasan Black-Scholes-Merton itu opsi yang di-delta-hedge itu **riskless secara lokal**, jadi dia harus dapet rate bebas-risiko — yang ngasih PDE yang solusinya formula itu, dan ngejelasin kenapa expected return saham gak pernah muncul (valuasi risk-neutral, belakangan diformalkan Harrison-Kreps-Pliska). Merton ngegeneralisasi. **Garis praktisi**-nya ngubah dia jadi keahlian: *Options, Futures, and Other Derivatives* Hull itu teks kuliah standar; *Option Volatility & Pricing* Natenberg ngajarin trading lewat Greeks dan smile; *Dynamic Hedging* Taleb itu manual lapangan trader buat risiko orde-dua (Γ, vanna, charm, tail) yang model buku-teks kecilkan. Dari situ jalannya bercabang ke **vol surface** (Gatheral — σ sebenarnya kayak apa lintas strike dan maturity) dan **dealer hedging flows** (dampak pasar dari semua orang nge-hedge Γ mereka serempak).`
    },
    keyCollaborators: {
      en: 'Black & Scholes co-authored the original; Merton was the close contemporary who generalized and named the framework (he supplied the rigorous PDE/replication proof and the "Black-Scholes-Merton" label is now standard). The pedagogical and practitioner neighbours are John C. Hull (the canonical textbook), Sheldon Natenberg (Greeks-first option trading), and Nassim Nicholas Taleb (dynamic hedging and the tail risks). Downstream in this catalog: Jim Gatheral (the implied-volatility surface that supplies σ) and the dealer-gamma practitioners.',
      id: 'Black & Scholes nulis bareng yang asli; Merton itu sezaman dekat yang ngegeneralisasi dan ngasih nama framework-nya (dia nyediain bukti PDE/replikasi yang ketat dan label "Black-Scholes-Merton" sekarang standar). Tetangga pedagogis dan praktisinya itu John C. Hull (buku-teks kanonik), Sheldon Natenberg (trading opsi Greeks-dulu), dan Nassim Nicholas Taleb (dynamic hedging dan tail risk). Hilir di katalog ini: Jim Gatheral (permukaan volatilitas-implisit yang nyediain σ) dan praktisi dealer-gamma.',
    },
    legacy: {
      en: `Black-Scholes-Merton is the single most consequential formula in modern finance: it gave traders a common language (the Greeks), made listed options markets possible at scale, and won the 1997 Nobel. But its deepest lesson is conceptual: an option's price is set by **replication cost**, not by anyone's forecast — which is why the same formula is read backwards by the market to quote *implied volatility* as a price. Every later refinement (the smile, local and stochastic vol, jump models) is a correction to its idealized assumptions, not a replacement for its framework. To trade or even read options, you think in its Greeks; to understand dealer flows and the vol surface, you start here.`,
      id: `Black-Scholes-Merton itu satu formula paling berkonsekuensi di keuangan modern: dia ngasih trader bahasa bersama (Greeks), bikin pasar opsi ter-listing mungkin dalam skala, dan menang Nobel 1997. Tapi pelajaran terdalamnya itu konseptual: harga opsi diset oleh **biaya replikasi**, bukan oleh forecast siapa pun — itu kenapa formula yang sama dibaca mundur oleh pasar buat ngutip *implied volatility* sebagai harga. Tiap penyempurnaan belakangan (smile, local dan stochastic vol, model jump) itu koreksi atas asumsi idealnya, bukan pengganti framework-nya. Buat trade atau bahkan baca opsi, kamu mikir dalam Greeks-nya; buat ngerti dealer flows dan vol surface, kamu mulai di sini.`
    },
    keyWorks: [
      { year: 1973, title: 'The Pricing of Options and Corporate Liabilities (Black & Scholes) — the replication argument and the option price formula', venue: 'Journal of Political Economy, 81(3), 637–654' },
      { year: 1973, title: 'Theory of Rational Option Pricing (Merton) — rigorous derivation, generalizations, and no-arbitrage bounds', venue: 'Bell Journal of Economics and Management Science, 4(1), 141–183' },
      { year: 2017, title: 'Options, Futures, and Other Derivatives (Hull) — the canonical course text', venue: 'Pearson, 10th edition' },
      { year: 2014, title: 'Option Volatility & Pricing (Natenberg) — trading by the Greeks, volatility, and the smile', venue: 'McGraw-Hill, 2nd edition' },
      { year: 1997, title: 'Dynamic Hedging: Managing Vanilla and Exotic Options (Taleb) — the practitioner field manual for second-order and tail risk', venue: 'John Wiley & Sons' },
    ],
  },

  sections: [
    {
      id: 'motivation',
      heading: { en: 'Why this matters', id: 'Kenapa ini penting' },
      body: {
        en: `Buy a stock and you have one exposure: it goes up, you win; it goes down, you lose. Buy an **option** and you suddenly have several at once — exposure to *direction*, to *how fast it moves* (volatility), to *time passing*, and to *interest rates*. The genius of Black-Scholes-Merton (1973) is that it gives you both a single fair **price** for that bundle and a clean way to take the bundle apart into separate, nameable risks — the **Greeks**.

This is the foundation under the rest of the options material, so it is worth getting exactly right:
- The [dealer-gamma](item:husslin-dealer-flows) read — the one that tells you when the tape gets pinned or amplified — is nothing but **Γ from the market-maker's option book**. You cannot read it without first knowing what Γ is.
- The [implied-volatility surface](item:gatheral-vol-surface) is the **σ that goes into this formula**, read backwards: the market quotes option prices, and we invert BSM to recover the σ implied by each strike and maturity.
- Every options strategy — a straddle, an iron condor, a covered call — is just a **combination of legs**, and what makes it interesting is the *net Greeks* it expresses: long volatility, short time, defined risk, and so on.

The model is a deliberate idealization (constant σ, no jumps, costless continuous hedging). Its **failures** are not a bug to hide — they are precisely what the smile and dealer-flow modules study. But you cannot understand the corrections without the baseline.

⟦Disclaimer: established textbook mathematics (Black-Scholes-Merton; Hull; Natenberg; Taleb), web-verified — educational, not financial advice. Real options have bid-ask, early exercise (American), dividends, and jumps the basic model omits.⟧`,
        id: `Beli saham dan kamu punya satu eksposur: dia naik, kamu menang; dia turun, kamu rugi. Beli **opsi** dan tiba-tiba kamu punya beberapa sekaligus — eksposur ke *arah*, ke *seberapa cepat dia gerak* (volatilitas), ke *waktu berlalu*, dan ke *suku bunga*. Kejeniusan Black-Scholes-Merton (1973) itu dia ngasih kamu baik satu **harga** wajar buat bundel itu maupun cara bersih buat ngebongkar bundel-nya jadi risiko-risiko terpisah yang bisa-dinamai — **Greeks**.

Ini fondasi di bawah sisa materi opsi, jadi layak dibikin persis benar:
- Bacaan [dealer-gamma](item:husslin-dealer-flows) — yang ngasih tau kamu pas tape ke-pin atau ke-amplifikasi — itu gak lain cuma **Γ dari buku opsi market-maker**. Kamu gak bisa bacanya tanpa tau dulu Γ itu apa.
- [Permukaan implied-volatility](item:gatheral-vol-surface) itu **σ yang masuk ke formula ini**, dibaca mundur: pasar ngutip harga opsi, dan kita inversiin BSM buat ngerecover σ yang diimplikasi tiap strike dan maturity.
- Tiap strategi opsi — straddle, iron condor, covered call — cuma **kombinasi leg**, dan yang bikin dia menarik itu *Greeks net* yang dia ekspresiin: long volatilitas, short waktu, risiko terdefinisi, dan seterusnya.

Model ini idealization yang disengaja (σ konstan, tanpa lompatan, hedging kontinu tanpa biaya). **Kegagalan**-nya bukan bug yang harus disembunyiin — itu persis yang module smile dan dealer-flow pelajari. Tapi kamu gak bisa ngerti koreksinya tanpa baseline-nya.

⟦Disclaimer: matematika buku-teks mapan (Black-Scholes-Merton; Hull; Natenberg; Taleb), terverifikasi-web — edukatif, bukan nasihat keuangan. Opsi nyata punya bid-ask, early exercise (Amerika), dividen, dan lompatan yang model dasar abaikan.⟧`
      }
    },
    {
      id: 'intuition',
      heading: { en: 'The Greeks as exposures you can feel', id: 'Greeks sebagai eksposur yang bisa kamu rasakan' },
      body: {
        en: `Forget the formulas for a moment and think of each Greek as a knob describing *what happens to your option when the world moves one notch*.

- **Delta (Δ) — direction.** If the stock rises USD 1, the option value changes by Δ. A call's Δ runs from 0 (far out-of-the-money, barely reacts) to 1 (deep in-the-money, moves like the stock); at-the-money it is ≈0.5. So Δ is also the **hedge ratio**: to neutralize an option's directional risk you hold −Δ shares against it. A delta-neutral position has no first-order view on direction.

- **Gamma (Γ) — convexity, how Δ moves.** Δ is not constant; Γ tells you how fast it changes as the stock moves. **Long options are long Γ**: as the stock rises your Δ grows (you get longer into strength) and as it falls your Δ shrinks (you get shorter into weakness) — your hedge always lags in your favour, which is *why* you paid premium. **Short options are short Γ**: the hedge lags against you. Γ is largest **at-the-money and as expiry approaches**. This is the exact quantity behind the [dealer-gamma](item:husslin-dealer-flows) tape: a short-Γ dealer must buy as price rises and sell as it falls (amplifying), a long-Γ dealer does the opposite (pinning).

- **Vega (ν) — volatility.** How much the option gains if implied volatility rises one point. Long options are **long vega**: you profit if the market starts pricing bigger moves, even before the stock moves at all. Vega is the bridge to the [vol surface](item:gatheral-vol-surface): the σ you trade is read off that surface.

- **Theta (Θ) — time decay.** Options are wasting assets. Each day, all else equal, a long option loses a little value (Θ < 0) — you **bleed** time. The mirror image: short options **earn** Θ. There is no free lunch — long Γ comes with negative Θ, and short Θ comes with negative Γ. You are always paying time to rent convexity, or earning time by selling it.

- **Rho (ρ) — rates.** Sensitivity to the interest rate; usually the smallest Greek for short-dated equity options, but it is why higher rates lift calls and depress puts (via the $K e^{-r\\tau}$ discounting).

The whole craft of options trading is choosing **which Greeks you want to be long or short**, and structuring legs so the net position expresses exactly that.`,
        id: `Lupain formulanya sebentar dan pikirin tiap Greek sebagai kenop yang ngegambarin *apa yang terjadi ke opsimu pas dunia gerak satu takik*.

- **Delta (Δ) — arah.** Kalau saham naik USD 1, nilai opsi berubah sebesar Δ. Δ call jalan dari 0 (jauh out-of-the-money, nyaris gak nanggepin) ke 1 (deep in-the-money, gerak kayak saham); at-the-money dia ≈0.5. Jadi Δ juga **hedge ratio**: buat ngenetralin risiko arah opsi kamu pegang −Δ lembar lawan dia. Posisi delta-netral gak punya pandangan orde-pertama soal arah.

- **Gamma (Γ) — konveksitas, gimana Δ gerak.** Δ gak konstan; Γ ngasih tau kamu seberapa cepat dia berubah pas saham gerak. **Opsi long itu long Γ**: pas saham naik Δ-mu tumbuh (kamu jadi lebih long ke kekuatan) dan pas turun Δ-mu nyusut (kamu jadi lebih short ke kelemahan) — hedge-mu selalu telat menguntungkanmu, yang itu *kenapa* kamu bayar premium. **Opsi short itu short Γ**: hedge-nya telat melawanmu. Γ paling besar **at-the-money dan pas expiry mendekat**. Ini persis kuantitas di balik tape [dealer-gamma](item:husslin-dealer-flows): dealer short-Γ harus beli pas harga naik dan jual pas turun (ngamplifikasi), dealer long-Γ ngelakuin sebaliknya (nge-pin).

- **Vega (ν) — volatilitas.** Seberapa banyak opsi naik kalau implied volatility naik satu poin. Opsi long itu **long vega**: kamu untung kalau pasar mulai nge-price gerakan lebih besar, bahkan sebelum saham gerak sama sekali. Vega itu jembatan ke [vol surface](item:gatheral-vol-surface): σ yang kamu trade dibaca dari permukaan itu.

- **Theta (Θ) — peluruhan waktu.** Opsi itu aset yang menyusut. Tiap hari, hal lain sama, opsi long kehilangan sedikit nilai (Θ < 0) — kamu **berdarah** waktu. Bayangan cerminnya: opsi short **dapet** Θ. Gak ada makan siang gratis — long Γ datang dengan Θ negatif, dan short Θ datang dengan Γ negatif. Kamu selalu bayar waktu buat nyewa konveksitas, atau dapet waktu dengan jualnya.

- **Rho (ρ) — suku bunga.** Sensitivitas ke suku bunga; biasanya Greek terkecil buat opsi ekuitas jangka-pendek, tapi itu kenapa rate lebih tinggi ngangkat call dan nekan put (lewat diskonto $K e^{-r\\tau}$).

Seluruh keahlian trading opsi itu milih **Greeks mana yang kamu mau long atau short**, dan nyusun leg biar posisi net-nya ngekspresiin persis itu.`
      }
    },
    {
      id: 'formalization',
      heading: { en: 'Black-Scholes-Merton, formalized', id: 'Black-Scholes-Merton, diformalkan' },
      visualization: {
        id: 'options-greeks-payoffs-viz',
        component: 'OptionsStrategySim',
        title: {
          en: 'Option strategy payoff, P&L, and net Greeks',
          id: 'Payoff strategi opsi, P&L, dan Greeks net'
        },
        description: {
          en: "Pick a strategy and watch its payoff diagram. The solid gold line is P&L AT EXPIRY (intrinsic value minus the entry cost) — its kinks sit at the strikes. The dashed blue line is P&L NOW (the Black-Scholes mark-to-model at the current days-to-expiry); the vertical gap between the two curves is the time value that will decay away. Gold dashed verticals mark the BREAKEVENS (where the expiry P&L crosses zero); the dotted line marks spot S. The readout gives the entry cost (debit = you paid, credit = you received), max profit/loss, and the NET GREEKS at spot: Δ (direction), Γ (convexity), ν per 1% of vol, Θ per day. Slide IV (σ) up and the now-curve lifts (long vega gains); slide days-to-expiry down and the now-curve collapses onto the expiry kinks (theta decay). A straddle shows long Γ + long ν + short Θ; an iron condor shows the mirror — short ν, short Γ, positive Θ.",
          id: "Pilih strategi dan lihat diagram payoff-nya. Garis emas solid itu P&L SAAT EXPIRY (nilai intrinsik dikurangi biaya masuk) — kink-nya duduk di strike. Garis biru putus-putus itu P&L SEKARANG (mark-to-model Black-Scholes di hari-ke-expiry sekarang); jarak vertikal antara dua kurva itu time value yang bakal luruh. Garis vertikal emas putus-putus nandain BREAKEVEN (di mana P&L expiry nyebrang nol); garis titik-titik nandain spot S. Readout ngasih biaya masuk (debit = kamu bayar, credit = kamu terima), max profit/loss, dan GREEKS NET di spot: Δ (arah), Γ (konveksitas), ν per 1% vol, Θ per hari. Geser IV (σ) naik dan kurva-sekarang ngangkat (long vega untung); geser hari-ke-expiry turun dan kurva-sekarang ambruk ke kink expiry (peluruhan theta). Straddle nunjukin long Γ + long ν + short Θ; iron condor nunjukin cerminannya — short ν, short Γ, positif Θ."
        },
        defaultParams: { strategy: 'straddle', S: 100, sigma: 0.5, dte: 30 },
        height: 440,
      },
      body: {
        en: `**The price.** With spot $S$, strike $K$, volatility $\\sigma$, time-to-expiry $\\tau$ (in years), continuously-compounded rate $r$ and dividend yield $q=0$:
$$d_1=\\frac{\\ln(S/K)+\\left(r+\\tfrac12\\sigma^2\\right)\\tau}{\\sigma\\sqrt\\tau},\\qquad d_2=d_1-\\sigma\\sqrt\\tau,$$
$$C=S\\,N(d_1)-K e^{-r\\tau}N(d_2),\\qquad P=K e^{-r\\tau}N(-d_2)-S\\,N(-d_1),$$
where $N(\\cdot)$ is the standard normal CDF and $\\varphi(\\cdot)$ its density. **[Established]** Read $N(d_2)$ as the risk-neutral probability the call finishes in-the-money, and $N(d_1)$ as the delta. The simulator uses exactly these formulas (with $r=0$).

**Put-call parity.** A call minus a put with the same strike and expiry is a forward:
$$C-P=S-K e^{-r\\tau}.$$
This is pure no-arbitrage — independent of the model — and is the verification oracle in \`scripts/verify-options-sim.mjs\`.

**The Greeks** (per one option, $q=0$):
$$\\Delta_{\\text{call}}=N(d_1),\\quad \\Delta_{\\text{put}}=N(d_1)-1,\\quad \\Gamma=\\frac{\\varphi(d_1)}{S\\sigma\\sqrt\\tau},$$
$$\\nu=S\\,\\varphi(d_1)\\sqrt\\tau,\\quad \\Theta_{\\text{call}}=-\\frac{S\\varphi(d_1)\\sigma}{2\\sqrt\\tau}-rK e^{-r\\tau}N(d_2).$$
Note Δ_call − Δ_put = 1 (parity differentiated); Γ and ν are **identical for a call and a put** of the same strike; both peak at-the-money. As $\\tau\\to0$ Γ and Θ spike for the at-the-money option (gamma "lights up" near expiry). The simulator reports **net Greeks** for the whole position: Δ, Γ, vega scaled per 1% of vol (ν/100), and Θ per day (Θ/365).

**Payoff vs P&L.** At **expiry** an option is worth only its **intrinsic value** — $\\max(S_T-K,0)$ for a call, $\\max(K-S_T,0)$ for a put — so the position's expiry P&L is the sum of leg intrinsics minus the **entry cost** (a net **debit** if you paid, a net **credit** if you received). **Before** expiry the position is worth the BSM mark-to-model; the gap between the two curves is **time value**. A leg held short has $\\text{qty}<0$. The simulator draws both curves, marks the **breakevens** (where the expiry P&L crosses zero) and reports max profit and max loss.`,
        id: `**Harga.** Dengan spot $S$, strike $K$, volatilitas $\\sigma$, waktu-ke-expiry $\\tau$ (dalam tahun), rate ter-compound-kontinu $r$ dan dividend yield $q=0$:
$$d_1=\\frac{\\ln(S/K)+\\left(r+\\tfrac12\\sigma^2\\right)\\tau}{\\sigma\\sqrt\\tau},\\qquad d_2=d_1-\\sigma\\sqrt\\tau,$$
$$C=S\\,N(d_1)-K e^{-r\\tau}N(d_2),\\qquad P=K e^{-r\\tau}N(-d_2)-S\\,N(-d_1),$$
dengan $N(\\cdot)$ itu CDF normal standar dan $\\varphi(\\cdot)$ density-nya. **[Established]** Baca $N(d_2)$ sebagai probabilitas risk-neutral call finis in-the-money, dan $N(d_1)$ sebagai delta. Simulator pakai persis formula ini (dengan $r=0$).

**Put-call parity.** Call dikurangi put dengan strike dan expiry yang sama itu forward:
$$C-P=S-K e^{-r\\tau}.$$
Ini murni no-arbitrage — lepas dari model — dan jadi oracle verifikasi di \`scripts/verify-options-sim.mjs\`.

**Greeks** (per satu opsi, $q=0$):
$$\\Delta_{\\text{call}}=N(d_1),\\quad \\Delta_{\\text{put}}=N(d_1)-1,\\quad \\Gamma=\\frac{\\varphi(d_1)}{S\\sigma\\sqrt\\tau},$$
$$\\nu=S\\,\\varphi(d_1)\\sqrt\\tau,\\quad \\Theta_{\\text{call}}=-\\frac{S\\varphi(d_1)\\sigma}{2\\sqrt\\tau}-rK e^{-r\\tau}N(d_2).$$
Catat Δ_call − Δ_put = 1 (parity diturunkan); Γ dan ν **identik buat call dan put** strike yang sama; keduanya puncaknya at-the-money. Pas $\\tau\\to0$ Γ dan Θ melonjak buat opsi at-the-money (gamma "menyala" dekat expiry). Simulator ngelaporin **Greeks net** buat seluruh posisi: Δ, Γ, vega di-skala per 1% vol (ν/100), dan Θ per hari (Θ/365).

**Payoff vs P&L.** Pas **expiry** opsi cuma bernilai **nilai intrinsik**-nya — $\\max(S_T-K,0)$ buat call, $\\max(K-S_T,0)$ buat put — jadi P&L expiry posisi itu jumlah intrinsik leg dikurangi **biaya masuk** (net **debit** kalau kamu bayar, net **credit** kalau kamu terima). **Sebelum** expiry posisi bernilai mark-to-model BSM; jarak antara dua kurva itu **time value**. Leg yang dipegang short punya $\\text{qty}<0$. Simulator nggambar kedua kurva, nandain **breakeven** (di mana P&L expiry nyebrang nol) dan ngelaporin max profit dan max loss.`
      }
    },
    {
      id: 'worked-example',
      heading: { en: 'Worked example: an ATM straddle vs an iron condor', id: 'Contoh: straddle ATM vs iron condor' },
      body: {
        en: `Take the simulator defaults: $S=100$, $\\sigma=50\\%$, $\\tau=30/365\\approx0.0822$ yr, $r=0$. The strike machinery rounds the ATM strike to the nearest 5 (here $K=100$) and a wing width $w=5$.

**1. The long straddle = long Γ + long ν, short Θ.** A straddle is *long one call + long one put at $K=100$*. With $\\sigma\\sqrt\\tau=0.5\\times0.2867\\approx0.1434$ and $S=K$, $\\ln(S/K)=0$, so $d_1=\\tfrac12\\sigma\\sqrt\\tau\\approx+0.0717$ and $d_2\\approx-0.0717$. Then $N(d_1)\\approx0.5286$, so $\\Delta_{\\text{call}}\\approx+0.529$ and $\\Delta_{\\text{put}}\\approx-0.471$ — the **net Δ is ≈ +0.057**, almost flat (a straddle is near delta-neutral at the money). Each option costs $C=P\\approx100\\times\\varphi(0)\\times0.1434\\approx$ USD 5.7, so the straddle is a **debit** of ≈USD 11.4, and that debit is the **max loss** (if the stock pins exactly at 100 at expiry). The two **breakevens** sit roughly at $100\\pm11.4$, i.e. ≈ 88.6 and ≈ 111.4 — you need a move bigger than the premium, in either direction, to profit. The position is **long Γ** (it gets longer as the stock rises, shorter as it falls), **long vega** (a jump in IV lifts the whole now-curve before the stock even moves), and **short Θ** (every quiet day bleeds time value — slide days-to-expiry down in the sim and watch the dashed now-curve collapse onto the V-shaped expiry kinks). This is the canonical *buy volatility* trade.

**2. The iron condor = the mirror: short ν, short Γ, positive Θ.** Now switch the sim to *iron condor*. It is four legs: **short** the put at $95$ and call at $105$ (the inner strikes you sell), **long** the put at $90$ and call at $110$ (the outer wings you buy for protection). Because you sell more expensive near-the-money options and buy cheaper far ones, the position is a net **credit** — money received up front, which is your **max profit** (kept if the stock stays between 95 and 105 at expiry). The **max loss** is capped at wing width minus credit. Its Greeks are the straddle's inverted: **short vega** (you want IV to fall), **short Γ** (a big move in either direction hurts), and **positive Θ** (time decay works *for* you). This is the canonical *sell volatility, defined-risk* trade — the structure a variance-risk-premium seller reaches for (see [selling vega](item:tradingriot-orderflow-vrp)).

**The lesson.** Same underlying, same expiry, opposite Greek signatures. The straddle buyer is paying Θ to be long Γ and ν (betting on a big move or rising vol); the condor seller is collecting Θ and short Γ and ν (betting on a quiet, range-bound tape). Everything you need to choose between them — net Δ, Γ, ν, Θ, the breakevens and the debit/credit — is read straight off the readout.

⟦Disclaimer: illustrative numbers under $r=0$, $q=0$, constant σ; not a recommendation. Short-vol structures like the condor have small, frequent gains and rare large losses — size for the tail.⟧`,
        id: `Ambil default simulator: $S=100$, $\\sigma=50\\%$, $\\tau=30/365\\approx0.0822$ thn, $r=0$. Mesin strike ngebulatin strike ATM ke kelipatan-5 terdekat (di sini $K=100$) dan lebar wing $w=5$.

**1. Long straddle = long Γ + long ν, short Θ.** Straddle itu *long satu call + long satu put di $K=100$*. Dengan $\\sigma\\sqrt\\tau=0.5\\times0.2867\\approx0.1434$ dan $S=K$, $\\ln(S/K)=0$, jadi $d_1=\\tfrac12\\sigma\\sqrt\\tau\\approx+0.0717$ dan $d_2\\approx-0.0717$. Lalu $N(d_1)\\approx0.5286$, jadi $\\Delta_{\\text{call}}\\approx+0.529$ dan $\\Delta_{\\text{put}}\\approx-0.471$ — **Δ net-nya ≈ +0.057**, nyaris datar (straddle itu nyaris delta-netral at the money). Tiap opsi harganya $C=P\\approx100\\times\\varphi(0)\\times0.1434\\approx$ USD 5.7, jadi straddle itu **debit** ≈USD 11.4, dan debit itu **max loss**-nya (kalau saham pas di 100 saat expiry). Dua **breakeven**-nya duduk kira-kira di $100\\pm11.4$, yaitu ≈ 88.6 dan ≈ 111.4 — kamu butuh gerakan lebih besar dari premium, di salah satu arah, buat untung. Posisinya **long Γ** (jadi lebih long pas saham naik, lebih short pas turun), **long vega** (lompatan IV ngangkat seluruh kurva-sekarang sebelum saham gerak), dan **short Θ** (tiap hari tenang berdarah time value — geser hari-ke-expiry turun di sim dan lihat kurva-sekarang putus-putus ambruk ke kink expiry bentuk-V). Ini trade *beli volatilitas* kanonik.

**2. Iron condor = cerminannya: short ν, short Γ, positif Θ.** Sekarang ganti sim ke *iron condor*. Dia empat leg: **short** put di $95$ dan call di $105$ (strike dalam yang kamu jual), **long** put di $90$ dan call di $110$ (wing luar yang kamu beli buat proteksi). Karena kamu jual opsi dekat-uang yang lebih mahal dan beli yang jauh lebih murah, posisinya net **credit** — uang diterima di muka, yang itu **max profit**-mu (disimpan kalau saham tetap antara 95 dan 105 saat expiry). **Max loss**-nya dibatasi di lebar wing dikurangi credit. Greeks-nya straddle yang dibalik: **short vega** (kamu mau IV turun), **short Γ** (gerakan besar di arah mana pun nyakitin), dan **positif Θ** (peluruhan waktu kerja *buat* kamu). Ini trade *jual volatilitas, risiko-terdefinisi* kanonik — struktur yang penjual variance-risk-premium raih (lihat [jualan vega](item:tradingriot-orderflow-vrp)).

**Pelajarannya.** Underlying sama, expiry sama, tanda-tangan Greek berlawanan. Pembeli straddle bayar Θ buat long Γ dan ν (taruhan gerakan besar atau vol naik); penjual condor ngumpulin Θ dan short Γ dan ν (taruhan tape tenang, terikat-range). Semua yang kamu butuh buat milih antara keduanya — Δ, Γ, ν, Θ net, breakeven dan debit/credit — dibaca langsung dari readout.

⟦Disclaimer: angka ilustratif di bawah $r=0$, $q=0$, σ konstan; bukan rekomendasi. Struktur short-vol kayak condor punya gain kecil sering dan rugi besar jarang — size buat tail.⟧`
      }
    },
    {
      id: 'applications',
      heading: { en: 'Applications', id: 'Aplikasi' },
      body: {
        en: `**Express a view as Greeks, not a guess.** The first discipline options give you is precision about *what you are actually betting on*. Bullish but want defined risk? A **bull call spread** (long lower call, short higher call) is a debit with capped profit and loss. Want to be paid to own a stock you would buy anyway lower? A **covered call** (long stock, short an out-of-the-money call) is short Γ / short vega / positive Θ — you trade away upside for premium income. Think a quiet range will hold? A **call butterfly** or **iron condor** is short Γ, short vega, positive Θ with defined risk. Each of the nine structures in the simulator is a different *net-Greek fingerprint*; choosing one is choosing which exposures you want.

**Hedging and delta-neutral trading.** Because Δ is the hedge ratio, a market-maker or vol trader can strip out direction and trade **pure volatility**: hold the option, short Δ shares, and rebalance. What is left is the Γ–Θ trade — long Γ means you profit from *realized* movement (you buy low and sell high as you re-hedge) but pay Θ; short Γ means you collect Θ but lose to large realized moves. This is the engine of the variance-risk-premium harvest in [selling vega](item:tradingriot-orderflow-vrp): sell options, delta-hedge, and earn the gap between implied and realized vol — with a mandatory tail hedge because short Γ is short the tails.

**The dealer-flow connection.** When dealers are net short options (short Γ), their delta-hedging *amplifies* moves (buy higher, sell lower); when net long Γ, it *pins* price. That is the [dealer-gamma](item:husslin-dealer-flows) read, and it is just the aggregate Γ of the option book applied to the tape. The σ that prices all of it is read off the [implied-vol surface](item:gatheral-vol-surface): the smile and term structure tell you that real markets do **not** use one constant σ — exactly the assumption this baseline model makes.

**Honest limits.** Black-Scholes-Merton assumes constant volatility, no jumps, frictionless continuous hedging, and (in this form) European exercise with no dividends. Real markets violate every one: volatility is stochastic and smiles across strikes, prices gap, hedging costs bid-ask, and American options can be exercised early. The Greeks are *local* sensitivities — accurate for small moves, treacherous for large ones (which is precisely why Γ and the tails matter, the theme of Taleb's *Dynamic Hedging*). Use BSM as the common language and the first-order map, not as truth.`,
        id: `**Ekspresiin pandangan sebagai Greeks, bukan tebakan.** Disiplin pertama yang opsi kasih itu presisi soal *apa yang sebenarnya kamu taruhin*. Bullish tapi mau risiko terdefinisi? **Bull call spread** (long call bawah, short call atas) itu debit dengan profit dan loss terbatas. Mau dibayar buat punya saham yang toh kamu mau beli lebih murah? **Covered call** (long saham, short call out-of-the-money) itu short Γ / short vega / positif Θ — kamu tukar upside buat pendapatan premium. Mikir range tenang bakal tahan? **Call butterfly** atau **iron condor** itu short Γ, short vega, positif Θ dengan risiko terdefinisi. Tiap dari sembilan struktur di simulator itu *sidik-jari net-Greek* yang beda; milih satu itu milih eksposur mana yang kamu mau.

**Hedging dan trading delta-netral.** Karena Δ itu hedge ratio, market-maker atau vol trader bisa nyopot arah dan trade **volatilitas murni**: pegang opsi, short Δ lembar, dan rebalance. Yang tersisa itu trade Γ–Θ — long Γ berarti kamu untung dari gerakan *terealisasi* (kamu beli murah jual mahal pas re-hedge) tapi bayar Θ; short Γ berarti kamu ngumpulin Θ tapi rugi ke gerakan terealisasi besar. Ini mesin panen variance-risk-premium di [jualan vega](item:tradingriot-orderflow-vrp): jual opsi, delta-hedge, dan dapet jarak antara implied dan realized vol — dengan tail hedge wajib karena short Γ itu short tail.

**Koneksi dealer-flow.** Pas dealer net short opsi (short Γ), delta-hedging mereka *ngamplifikasi* gerakan (beli lebih tinggi, jual lebih rendah); pas net long Γ, dia *nge-pin* harga. Itu bacaan [dealer-gamma](item:husslin-dealer-flows), dan dia cuma Γ agregat dari buku opsi diterapin ke tape. σ yang nge-price semua itu dibaca dari [permukaan implied-vol](item:gatheral-vol-surface): smile dan term structure ngasih tau kamu pasar nyata **gak** pakai satu σ konstan — persis asumsi yang model baseline ini bikin.

**Batas jujur.** Black-Scholes-Merton ngasumsiin volatilitas konstan, tanpa lompatan, hedging kontinu tanpa friksi, dan (dalam bentuk ini) exercise Eropa tanpa dividen. Pasar nyata ngelanggar tiap satunya: volatilitas itu stokastik dan smile lintas strike, harga gap, hedging berbiaya bid-ask, dan opsi Amerika bisa di-exercise awal. Greeks itu sensitivitas *lokal* — akurat buat gerakan kecil, berbahaya buat yang besar (yang persis kenapa Γ dan tail penting, tema *Dynamic Hedging* Taleb). Pakai BSM sebagai bahasa bersama dan peta orde-pertama, bukan sebagai kebenaran.`
      }
    },
    {
      id: 'practice',
      heading: { en: 'Practice', id: 'Latihan' },
      body: {
        en: `**1.** What are Δ and Γ, and what does it mean to be "long gamma"? Why does long gamma come with negative theta?

<details><summary>Answer</summary>
DELTA (Δ) is the first derivative of the option price with respect to spot — how much the option value changes per USD 1 move in the underlying, and equivalently the hedge ratio (hold −Δ shares to neutralize direction). A call's Δ runs 0→1, a put's −1→0, ≈±0.5 at the money. GAMMA (Γ) is the second derivative — how fast Δ itself changes as spot moves; it is largest at-the-money and as expiry approaches. LONG GAMMA (you own options) means your Δ grows as the stock rises and shrinks as it falls, so your hedge always lags in your favour — you buy low and sell high when re-hedging, profiting from realized movement. There is no free lunch: long Γ ALWAYS comes with negative Θ (time decay), because the convexity you own is paid for with premium that bleeds away each day. Short Γ is the mirror — you earn Θ but get hurt by large moves.
</details>

**2.** Write the Black-Scholes call and the put-call parity relation. Why does parity not depend on the model?

<details><summary>Answer</summary>
Call: C = S·N(d1) − K·e^(−rτ)·N(d2), with d1 = [ln(S/K) + (r + ½σ²)τ]/(σ√τ) and d2 = d1 − σ√τ; N is the standard normal CDF. Put-call parity: C − P = S − K·e^(−rτ). Parity is MODEL-INDEPENDENT because it is a pure no-arbitrage identity: a portfolio of long one call + short one put with the same strike/expiry has the same payoff at expiry as being long the stock and short K bonds (it pays S_T − K in every state), so by no-arbitrage their present values must be equal — no assumption about how S moves, no σ, is needed. That is why it serves as the exact verification oracle for any pricing implementation.
</details>

**3.** In the simulator at S=100, σ=50%, 30 DTE, contrast the net Greeks of a straddle vs an iron condor. Which buys volatility and which sells it?

<details><summary>Answer</summary>
The STRADDLE (long call + long put at K=100) is near delta-neutral (net Δ ≈ +0.06 at the money), and is LONG Γ, LONG vega (ν), and SHORT Θ. It is paid for as a DEBIT (≈USD 11.4), which is the max loss; breakevens sit at roughly 100 ± premium (≈ 88.6 and 111.4). It is the BUY-VOLATILITY trade: it profits from a big move in either direction or a rise in IV, and bleeds time value if the stock sits still. The IRON CONDOR (short the 95 put + 105 call, long the 90 put + 110 call) is the mirror: SHORT vega, SHORT Γ, POSITIVE Θ, taken in as a CREDIT (the max profit, kept if price stays in the 95–105 band), with loss capped at wing width minus credit. It is the SELL-VOLATILITY, defined-risk trade: it profits from a quiet, range-bound tape and falling IV.
</details>

**4.** Name three assumptions of Black-Scholes-Merton that real markets violate, and why this makes the Greeks "local."

<details><summary>Answer</summary>
(1) CONSTANT volatility — real σ is stochastic and varies across strike and maturity (the smile / vol surface), so a single σ misprices wings. (2) NO JUMPS / continuous paths — real prices gap (earnings, news), which short-gamma sellers feel as sudden large losses the diffusion model underweights. (3) FRICTIONLESS, continuous hedging — real hedging pays bid-ask and happens discretely, so perfect replication is impossible; also, the basic European/no-dividend form ignores early exercise and dividends. The Greeks are LOCAL because they are first/second-order derivatives (a Taylor expansion around the current spot/vol): accurate for SMALL moves but increasingly wrong for large ones, where higher-order terms and the tails dominate — which is exactly why gamma and tail risk (Taleb's Dynamic Hedging) matter and why you cannot treat Δ as a static hedge.
</details>`,
        id: `**1.** Apa itu Δ dan Γ, dan apa artinya "long gamma"? Kenapa long gamma datang dengan theta negatif?

<details><summary>Jawaban</summary>
DELTA (Δ) itu turunan pertama harga opsi terhadap spot — seberapa banyak nilai opsi berubah per gerakan USD 1 di underlying, dan setara dengan hedge ratio (pegang −Δ lembar buat ngenetralin arah). Δ call jalan 0→1, put −1→0, ≈±0.5 at the money. GAMMA (Γ) itu turunan kedua — seberapa cepat Δ sendiri berubah pas spot gerak; dia paling besar at-the-money dan pas expiry mendekat. LONG GAMMA (kamu punya opsi) berarti Δ-mu tumbuh pas saham naik dan nyusut pas turun, jadi hedge-mu selalu telat menguntungkanmu — kamu beli murah jual mahal pas re-hedge, untung dari gerakan terealisasi. Gak ada makan siang gratis: long Γ SELALU datang dengan Θ negatif (peluruhan waktu), karena konveksitas yang kamu punya dibayar dengan premium yang berdarah tiap hari. Short Γ itu cerminannya — kamu dapet Θ tapi disakiti gerakan besar.
</details>

**2.** Tulis call Black-Scholes dan relasi put-call parity. Kenapa parity gak bergantung pada model?

<details><summary>Jawaban</summary>
Call: C = S·N(d1) − K·e^(−rτ)·N(d2), dengan d1 = [ln(S/K) + (r + ½σ²)τ]/(σ√τ) dan d2 = d1 − σ√τ; N itu CDF normal standar. Put-call parity: C − P = S − K·e^(−rτ). Parity itu BEBAS-MODEL karena dia identitas no-arbitrage murni: portofolio long satu call + short satu put dengan strike/expiry sama punya payoff yang sama saat expiry kayak long saham dan short K obligasi (dia bayar S_T − K di tiap keadaan), jadi lewat no-arbitrage present value mereka harus sama — gak butuh asumsi soal gimana S gerak, gak butuh σ. Itu kenapa dia jadi oracle verifikasi persis buat implementasi pricing apa pun.
</details>

**3.** Di simulator pada S=100, σ=50%, 30 DTE, kontraskan Greeks net straddle vs iron condor. Mana yang beli volatilitas dan mana yang jual?

<details><summary>Jawaban</summary>
STRADDLE (long call + long put di K=100) itu nyaris delta-netral (Δ net ≈ +0.06 at the money), dan LONG Γ, LONG vega (ν), dan SHORT Θ. Dibayar sebagai DEBIT (≈USD 11.4), yang itu max loss-nya; breakeven duduk kira-kira di 100 ± premium (≈ 88.6 dan 111.4). Itu trade BELI-VOLATILITAS: untung dari gerakan besar di arah mana pun atau kenaikan IV, dan berdarah time value kalau saham diam. IRON CONDOR (short put 95 + call 105, long put 90 + call 110) itu cerminannya: SHORT vega, SHORT Γ, POSITIF Θ, diterima sebagai CREDIT (max profit, disimpan kalau harga tetap di band 95–105), dengan rugi dibatasi di lebar wing dikurangi credit. Itu trade JUAL-VOLATILITAS, risiko-terdefinisi: untung dari tape tenang terikat-range dan IV turun.
</details>

**4.** Sebutkan tiga asumsi Black-Scholes-Merton yang dilanggar pasar nyata, dan kenapa ini bikin Greeks "lokal".

<details><summary>Jawaban</summary>
(1) Volatilitas KONSTAN — σ nyata stokastik dan beda lintas strike dan maturity (smile / vol surface), jadi satu σ salah-harga wing. (2) TANPA LOMPATAN / jalur kontinu — harga nyata gap (earnings, berita), yang penjual short-gamma rasain sebagai rugi besar mendadak yang model difusi kecilkan. (3) Hedging kontinu TANPA FRIKSI — hedging nyata bayar bid-ask dan terjadi diskret, jadi replikasi sempurna mustahil; juga, bentuk Eropa/tanpa-dividen dasar abaikan early exercise dan dividen. Greeks itu LOKAL karena mereka turunan orde-pertama/kedua (ekspansi Taylor sekitar spot/vol sekarang): akurat buat gerakan KECIL tapi makin salah buat yang besar, di mana suku orde-tinggi dan tail mendominasi — yang persis kenapa gamma dan tail risk (Dynamic Hedging Taleb) penting dan kenapa kamu gak bisa perlakukan Δ sebagai hedge statis.
</details>`
      }
    },
    {
      id: 'connections',
      heading: { en: 'Connections', id: 'Koneksi' },
      body: {
        en: `- **The flow it drives**: [dealer hedging flows](item:husslin-dealer-flows) — the dealer-gamma read of the tape is just the **aggregate Γ** of the option book; short-Γ dealers amplify, long-Γ dealers pin. This module is the pricing math underneath that read.
- **The σ it takes as input**: [the implied-volatility surface](item:gatheral-vol-surface) — BSM treats σ as a single number, but the market quotes a different implied σ at every strike and maturity (the smile). The surface is *this formula read backwards*, and it is where the σ you trade comes from.
- **Selling the Greeks for a premium**: [order flow & the variance risk premium](item:tradingriot-orderflow-vrp) — the iron-condor / short-vega structures here are exactly the variance-premium harvest: sell options, delta-hedge, earn implied-minus-realized, with a tail hedge for the short Γ.
- **A different carry on a different instrument**: [perpetual funding & carry](item:perp-funding-carry) — perps have no Greeks but their own convergence-and-carry mechanism; a useful contrast to option time-value decay.`,
        id: `- **Flow yang dia dorong**: [dealer hedging flows](item:husslin-dealer-flows) — bacaan dealer-gamma atas tape itu cuma **Γ agregat** dari buku opsi; dealer short-Γ ngamplifikasi, dealer long-Γ nge-pin. Module ini matematika pricing di bawah bacaan itu.
- **σ yang dia terima sebagai input**: [permukaan implied-volatility](item:gatheral-vol-surface) — BSM perlakuin σ sebagai satu angka, tapi pasar ngutip σ implied yang beda di tiap strike dan maturity (smile). Permukaan itu *formula ini dibaca mundur*, dan di situ σ yang kamu trade berasal.
- **Jual Greeks buat premium**: [order flow & variance risk premium](item:tradingriot-orderflow-vrp) — struktur iron-condor / short-vega di sini itu persis panen variance-premium: jual opsi, delta-hedge, dapet implied-dikurangi-realized, dengan tail hedge buat short Γ.
- **Carry beda di instrumen beda**: [perpetual funding & carry](item:perp-funding-carry) — perp gak punya Greeks tapi punya mekanisme konvergensi-dan-carry sendiri; kontras berguna buat peluruhan time-value opsi.`
      }
    },
    {
      id: 'sources',
      heading: { en: 'Sources', id: 'Sumber' },
      body: {
        en: `Established textbook mathematics and practitioner canon (web-verified); educational, not financial advice.
- **Black, F., and Scholes, M.** (1973). "The Pricing of Options and Corporate Liabilities." *Journal of Political Economy*, 81(3), 637–654. The replication argument and the option price formula.
- **Merton, R. C.** (1973). "Theory of Rational Option Pricing." *Bell Journal of Economics and Management Science*, 4(1), 141–183. Rigorous derivation, generalizations, no-arbitrage bounds. (Scholes & Merton, 1997 Nobel; Black d. 1995.)
- **Hull, J. C.** *Options, Futures, and Other Derivatives.* Pearson (10th ed., 2017). The canonical course text — pricing, the Greeks, and hedging.
- **Natenberg, S.** *Option Volatility & Pricing: Advanced Trading Strategies and Techniques.* McGraw-Hill (2nd ed., 2014). Trading by the Greeks, volatility, and the smile.
- **Taleb, N. N.** *Dynamic Hedging: Managing Vanilla and Exotic Options.* John Wiley & Sons (1997). The practitioner's field manual for second-order and tail risk.
- The interactive **OptionsStrategySim** (\`js/viz.js\`) implements exactly these formulas (with $r=0$, $q=0$) and is verified against put-call parity and a finite-difference check of every Greek in \`scripts/verify-options-sim.mjs\`.`,
        id: `Matematika buku-teks mapan dan kanon praktisi (terverifikasi-web); edukatif, bukan nasihat keuangan.
- **Black, F., dan Scholes, M.** (1973). "The Pricing of Options and Corporate Liabilities." *Journal of Political Economy*, 81(3), 637–654. Argumen replikasi dan formula harga opsi.
- **Merton, R. C.** (1973). "Theory of Rational Option Pricing." *Bell Journal of Economics and Management Science*, 4(1), 141–183. Derivasi ketat, generalisasi, batas no-arbitrage. (Scholes & Merton, Nobel 1997; Black wafat 1995.)
- **Hull, J. C.** *Options, Futures, and Other Derivatives.* Pearson (ed. ke-10, 2017). Teks kuliah kanonik — pricing, Greeks, dan hedging.
- **Natenberg, S.** *Option Volatility & Pricing: Advanced Trading Strategies and Techniques.* McGraw-Hill (ed. ke-2, 2014). Trading lewat Greeks, volatilitas, dan smile.
- **Taleb, N. N.** *Dynamic Hedging: Managing Vanilla and Exotic Options.* John Wiley & Sons (1997). Manual lapangan praktisi buat risiko orde-dua dan tail.
- **OptionsStrategySim** interaktif (\`js/viz.js\`) ngimplementasiin persis formula ini (dengan $r=0$, $q=0$) dan diverifikasi lawan put-call parity dan cek finite-difference tiap Greek di \`scripts/verify-options-sim.mjs\`.`
      }
    },
  ],

  audio: { enabled: true },

  selfTest: [
    {
      sectionId: 'intuition',
      question: { en: `Explain Δ and Γ as exposures, and why being long gamma always means being short theta.`, id: `Jelasin Δ dan Γ sebagai eksposur, dan kenapa long gamma selalu berarti short theta.` },
      prompt: { en: 'Before continuing, try answering:', id: 'Sebelum lanjut, coba jawab:' },
      answer: {
        en: `Δ (delta) is the directional exposure: the change in option value per USD 1 move in the underlying, and equivalently the hedge ratio (−Δ shares neutralizes direction). It runs 0→1 for a call, −1→0 for a put, ≈±0.5 at the money. Γ (gamma) is the rate of change of Δ — convexity — largest at-the-money and as expiry nears. Being LONG GAMMA (owning options) means Δ grows as the stock rises and shrinks as it falls, so when you re-hedge you systematically buy low and sell high, profiting from REALIZED movement. That convexity is never free: you bought it with premium, and that premium decays every day, so long Γ ALWAYS pairs with negative Θ (you bleed time). The mirror holds for short options: you collect Θ but are short Γ, exposed to large realized moves. So the straddle (long Γ, short Θ) and the iron condor (short Γ, positive Θ) are the two sides of this same trade-off.`,
        id: `Δ (delta) itu eksposur arah: perubahan nilai opsi per gerakan USD 1 di underlying, dan setara dengan hedge ratio (−Δ lembar ngenetralin arah). Dia jalan 0→1 buat call, −1→0 buat put, ≈±0.5 at the money. Γ (gamma) itu laju perubahan Δ — konveksitas — paling besar at-the-money dan pas expiry mendekat. LONG GAMMA (punya opsi) berarti Δ tumbuh pas saham naik dan nyusut pas turun, jadi pas re-hedge kamu sistematis beli murah jual mahal, untung dari gerakan TEREALISASI. Konveksitas itu gak pernah gratis: kamu belinya dengan premium, dan premium itu luruh tiap hari, jadi long Γ SELALU berpasangan dengan Θ negatif (kamu berdarah waktu). Cerminannya berlaku buat opsi short: kamu ngumpulin Θ tapi short Γ, terekspos gerakan terealisasi besar. Jadi straddle (long Γ, short Θ) dan iron condor (short Γ, positif Θ) itu dua sisi dari trade-off yang sama ini.`
      }
    },
    {
      sectionId: 'formalization',
      question: { en: `Write the Black-Scholes call price and put-call parity, and state Δ, Γ, ν. Why is parity model-free?`, id: `Tulis harga call Black-Scholes dan put-call parity, dan nyatain Δ, Γ, ν. Kenapa parity bebas-model?` },
      prompt: { en: 'Before continuing, try answering:', id: 'Sebelum lanjut, coba jawab:' },
      answer: {
        en: `Call: C = S·N(d1) − K·e^(−rτ)·N(d2), with d1 = [ln(S/K) + (r + ½σ²)τ]/(σ√τ), d2 = d1 − σ√τ, N the standard normal CDF, φ its density. Put-call parity: C − P = S − K·e^(−rτ). The Greeks: Δ_call = N(d1) (Δ_put = N(d1) − 1), Γ = φ(d1)/(S·σ·√τ), ν = S·φ(d1)·√τ. Γ and ν are identical for a call and put of the same strike and both peak at-the-money; as τ→0 Γ and Θ spike for the ATM option. Parity is MODEL-FREE because long-call/short-put with the same strike and expiry replicates exactly "long stock, short K bonds" — it pays S_T − K in every state at expiry — so by no-arbitrage their present values must match, with no assumption about the dynamics of S or about σ. That is why it is used as the exact verification oracle for any implementation.`,
        id: `Call: C = S·N(d1) − K·e^(−rτ)·N(d2), dengan d1 = [ln(S/K) + (r + ½σ²)τ]/(σ√τ), d2 = d1 − σ√τ, N itu CDF normal standar, φ density-nya. Put-call parity: C − P = S − K·e^(−rτ). Greeks: Δ_call = N(d1) (Δ_put = N(d1) − 1), Γ = φ(d1)/(S·σ·√τ), ν = S·φ(d1)·√τ. Γ dan ν identik buat call dan put strike yang sama dan keduanya puncaknya at-the-money; pas τ→0 Γ dan Θ melonjak buat opsi ATM. Parity itu BEBAS-MODEL karena long-call/short-put strike dan expiry yang sama me-replikasi persis "long saham, short K obligasi" — dia bayar S_T − K di tiap keadaan saat expiry — jadi lewat no-arbitrage present value mereka harus cocok, tanpa asumsi soal dinamika S atau soal σ. Itu kenapa dia dipakai sebagai oracle verifikasi persis buat implementasi apa pun.`
      }
    },
    {
      sectionId: 'worked-example',
      question: { en: `For an ATM straddle vs an iron condor, contrast debit/credit, breakevens, and the net Greek signature.`, id: `Buat straddle ATM vs iron condor, kontraskan debit/credit, breakeven, dan tanda-tangan Greek net.` },
      prompt: { en: 'Before continuing, try answering:', id: 'Sebelum lanjut, coba jawab:' },
      answer: {
        en: `STRADDLE (long call + long put at the same ATM strike): paid as a DEBIT (≈USD 11.4 at S=100, σ=50%, 30 DTE), which is the max loss if the stock pins the strike at expiry. Two breakevens at roughly strike ± total premium (≈ 88.6 and 111.4). Net Greeks: near delta-neutral, LONG Γ, LONG vega, SHORT Θ — the buy-volatility trade, profiting from a large move either way or rising IV, bleeding if the stock sits still. IRON CONDOR (short the inner put+call, long the outer put+call): taken in as a CREDIT, which is the max profit, kept if price stays inside the short strikes at expiry; max loss is capped at wing width minus the credit. Net Greeks are the straddle inverted: SHORT vega, SHORT Γ, POSITIVE Θ — the sell-volatility, defined-risk trade, profiting from a quiet range and falling IV. Same underlying and expiry, opposite Greek fingerprints; you choose based on whether you expect a big move/high vol (straddle) or a quiet, range-bound tape (condor).`,
        id: `STRADDLE (long call + long put di strike ATM yang sama): dibayar sebagai DEBIT (≈USD 11.4 di S=100, σ=50%, 30 DTE), yang itu max loss kalau saham pin strike saat expiry. Dua breakeven kira-kira di strike ± total premium (≈ 88.6 dan 111.4). Greeks net: nyaris delta-netral, LONG Γ, LONG vega, SHORT Θ — trade beli-volatilitas, untung dari gerakan besar arah mana pun atau IV naik, berdarah kalau saham diam. IRON CONDOR (short put+call dalam, long put+call luar): diterima sebagai CREDIT, yang itu max profit, disimpan kalau harga tetap di dalam strike short saat expiry; max loss dibatasi di lebar wing dikurangi credit. Greeks net-nya straddle yang dibalik: SHORT vega, SHORT Γ, POSITIF Θ — trade jual-volatilitas, risiko-terdefinisi, untung dari range tenang dan IV turun. Underlying dan expiry sama, sidik-jari Greek berlawanan; kamu milih berdasar apakah kamu nyangka gerakan besar/vol tinggi (straddle) atau tape tenang terikat-range (condor).`
      }
    },
  ],
};
