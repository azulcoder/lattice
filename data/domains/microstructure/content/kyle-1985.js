export const CONTENT = {
  itemId: 'kyle-1985',
  estimatedReadMinutes: 40,

  author: {
    fullName: { en: 'Albert S. ("Pete") Kyle', id: 'Albert S. ("Pete") Kyle' },
    affiliation: {
      en: 'Distinguished University Professor and Charles E. Smith Chair in Finance, Robert H. Smith School of Business, University of Maryland (since 2006)',
      id: 'Distinguished University Professor dan Charles E. Smith Chair in Finance, Robert H. Smith School of Business, University of Maryland (sejak 2006)'
    },
    tagline: {
      en: "Theoretical architect of strategic informed trading — Kyle's λ is the field's most-cited single quantity.",
      id: "Architect teoritis strategic informed trading — λ-nya Kyle itu kuantitas tunggal yang paling sering disitir di field."
    },
    bio: {
      en: `Pete Kyle is the theoretical economist whose 1985 *Econometrica* paper "Continuous Auctions and Insider Trading" introduced the canonical model of strategic informed trading. He moved to Maryland's Smith School in 2006 after positions at Princeton, Berkeley, and Duke, and continues to work on the cutting edges of microstructure — high-frequency trading, market manipulation, latency, and contagion. His paper is one of the most cited in finance and won the Wharton-Jacobs Levy Prize. Beyond academic work, Kyle has been a fixture in U.S. financial-market policy: he served on the staff of the Brady Commission analyzing the 1987 crash, and has consulted for the SEC, CFTC, and Department of Justice.`,
      id: `Pete Kyle adalah ekonom teoritis yang paper 1985-nya di *Econometrica* "Continuous Auctions and Insider Trading" ngenalin model kanon strategic informed trading. Dia pindah ke Maryland Smith School tahun 2006 setelah posisi di Princeton, Berkeley, dan Duke, dan masih kerja di cutting edge microstructure — high-frequency trading, market manipulation, latency, dan contagion. Paper-nya salah satu paling sering disitir di finance dan menang Wharton-Jacobs Levy Prize. Selain kerja akademis, Kyle juga fixture di policy financial-market US: dia jadi staf Brady Commission yang analisis crash 1987, dan jadi consultant buat SEC, CFTC, dan Department of Justice.`
    },
    focus: {
      en: `Market microstructure with emphasis on strategic informed trading and the equilibrium pricing of order flow. Recurring themes: how informed traders optimize their order execution against a competitive market maker, how price impact emerges from information asymmetry, and how market depth (the inverse of price impact) characterizes liquidity. Recent work extends to HFT, latency arbitrage, market manipulation, and contagion across linked markets.`,
      id: `Market microstructure dengan emphasis di strategic informed trading dan equilibrium pricing dari order flow. Tema yang berulang: gimana informed trader optimize order execution mereka melawan competitive market maker, gimana price impact muncul dari information asymmetry, dan gimana market depth (kebalikan price impact) nge-karakteristik liquidity. Kerja recent extend ke HFT, latency arbitrage, market manipulation, dan contagion lintas linked market.`
    },
    intellectualLineage: {
      en: `PhD in Economics from the University of Chicago, 1981 — the Chicago tradition shows up in his mechanism-design instincts: precise specification of agent information sets, optimization given rational expectations, equilibrium concepts grounded in fixed-point arguments. The Kyle 1985 paper is the result: a tight, formally elegant single-period batch-auction model that produced a closed-form equilibrium and a single quantity (λ) that captured the central tradeoff between information revelation and execution cost.`,
      id: `PhD Economics dari University of Chicago, 1981 — tradisi Chicago kelihatan di insting mechanism-design dia: spesifikasi presisi information set agent, optimisasi given rational expectations, equilibrium concept grounded di fixed-point argument. Paper Kyle 1985 itu hasilnya: model single-period batch-auction yang ketat, formally elegant, ngehasilin closed-form equilibrium dan satu kuantitas (λ) yang capture central tradeoff antara information revelation dan execution cost.`
    },
    keyCollaborators: {
      en: `Independent rather than collaborative throughout most of his career — the 1985 paper is single-author, as are most of his foundational contributions. Notable exception: **John Y. Campbell** (Harvard) — together they wrote "Smart Money, Noise Trading and Stock Price Behaviour" (RES 1993), an empirically-oriented extension of the noise-trader idea. Later work with various co-authors on HFT and market manipulation, but the trademark Kyle paper is solo theoretical work pushing one important model to its closed-form conclusion.`,
      id: `Independent daripada collaborative sepanjang karir dia — paper 1985 itu single-author, kayak kebanyakan kontribusi foundational dia. Exception notable: **John Y. Campbell** (Harvard) — bareng mereka tulis "Smart Money, Noise Trading and Stock Price Behaviour" (RES 1993), extension empirically-oriented dari ide noise-trader. Kerja later sama berbagai co-author di HFT dan market manipulation, tapi paper Kyle yang trademark itu solo theoretical work yang dorong satu model penting ke closed-form conclusion-nya.`
    },
    legacy: {
      en: `Kyle's lambda has outlasted the specific 1985 setup that produced it. Every modern microstructure model that includes price impact references some version of λ, either explicitly or as the slope of the linear pricing rule. The deeper legacy is methodological: Kyle showed that strategic interaction between informed and uninformed traders has a tractable equilibrium structure, and that the equilibrium quantities (depth, half-spread, information leakage rate) are measurable. Empirical microstructure spent the next forty years trying to estimate Kyle-style λ from real data — Hasbrouck's VAR-based price discovery work, Cont-Kukanov-Stoikov's OFI regressions, and modern HFT impact studies all trace back to this single model.`,
      id: `Lambda Kyle udah outlast specific setup 1985 yang ngehasilin dia. Setiap modern microstructure model yang include price impact reference some version λ, eksplisit atau sebagai slope dari linear pricing rule. Legacy lebih dalam itu metodologis: Kyle nunjukin bahwa strategic interaction antara informed dan uninformed trader punya tractable equilibrium structure, dan equilibrium quantity-nya (depth, half-spread, information leakage rate) bisa diukur. Empirical microstructure menghabiskan 40 tahun berikutnya buat coba estimate Kyle-style λ dari real data — kerja VAR-based price discovery Hasbrouck, regresi OFI Cont-Kukanov-Stoikov, dan modern HFT impact study semua trace balik ke model tunggal ini.`
    },
    keyWorks: [
      { year: 1985, title: 'Continuous Auctions and Insider Trading (this item)', venue: 'Econometrica' },
      { year: 1989, title: 'Informed Speculation with Imperfect Competition', venue: 'Review of Economic Studies' },
      { year: 1993, title: 'Smart Money, Noise Trading and Stock Price Behaviour (with Campbell)', venue: 'Review of Economic Studies' },
      { year: 2016, title: 'Market Microstructure Invariance: Empirical Hypotheses (with Obizhaeva)', venue: 'Econometrica' },
    ],
  },

  sections: [
    // ─────────────── 1. motivation ───────────────
    {
      id: 'motivation',
      heading: { en: 'Why this matters', id: 'Kenapa ini penting' },
      body: {
        en: `Glosten-Milgrom (1985) showed how a market maker setting risk-neutral competitive quotes generates a positive spread purely from adverse selection in a sequential-trade setting. Kyle (1985), published the same year, asks a complementary question: what if the informed trader is **strategic** rather than mechanical? What if she chooses how much to trade to maximize her own profit, knowing that her order itself will move the price?

The Kyle setup is a batch auction: at a single moment, the informed trader submits a market order, noise traders submit their own (uninformed) market orders, the market maker observes only total order flow $y = x + u$, and sets a single clearing price $p = E[v \\mid y]$ before unwinding any inventory. The market maker can't tell the insider's $x$ from the noise traders' $u$ — only the sum.

This setup matters because it captures the central tradeoff facing any informed trader in real markets: trade more to monetize information, but the more you trade the more you reveal, and the more the price moves against you. Kyle's equilibrium pins down exactly how much information leaks per unit of order flow — that constant is $\\lambda$, the most-cited single quantity in microstructure. Knowing $\\lambda$ tells you market depth (its inverse), execution cost, and how aggressively informed traders should optimize their slicing. The math is harder than Glosten-Milgrom, but the payoff is the closed-form linear equilibrium that became the field's reference point.`,
        id: `Glosten-Milgrom (1985) nunjukin gimana market maker yang set risk-neutral competitive quote ngehasilin positive spread murni dari adverse selection di setting sequential-trade. Kyle (1985), publish tahun yang sama, nanyain question komplementer: gimana kalau informed trader itu **strategic** daripada mekanis? Gimana kalau dia milih berapa banyak buat trade buat maximize profit dia sendiri, sambil tau bahwa order dia sendiri bakal gerakin price?

Kyle setup itu batch auction: di satu moment, informed trader submit market order, noise trader submit order mereka sendiri (uninformed), market maker cuma observe total order flow $y = x + u$, dan set satu clearing price $p = E[v \\mid y]$ sebelum unwind inventory apa pun. Market maker gak bisa bedain $x$ insider dari $u$ noise trader — cuma sum-nya.

Setup ini penting karena capture tradeoff sentral yang dihadapi setiap informed trader di real market: trade lebih banyak buat monetize info, tapi makin banyak trade makin banyak reveal, dan makin gerak price melawan kamu. Kyle equilibrium pin down exactly berapa banyak info bocor per unit order flow — konstanta itu $\\lambda$, kuantitas tunggal paling sering disitir di microstructure. Tahu $\\lambda$ ngasih tau market depth (kebalikan-nya), execution cost, dan seberapa aggressive informed trader harus optimize slicing mereka. Math-nya lebih sulit dari Glosten-Milgrom, tapi payoff-nya closed-form linear equilibrium yang jadi reference point field.`
      }
    },

    // ─────────────── 2. intuition ───────────────
    {
      id: 'intuition',
      heading: { en: 'Intuition', id: 'Intuisi' },
      body: {
        en: `Picture an informed trader who knows that a stock's true value is $\\$110$ when the current market price is $\\$100$. The naive strategy is to buy as much as possible — but trading large quantities moves the market price up against you. The marginal cost of each additional share rises with each share you buy.

The strategic question: how much to buy? Too little, you leave information rent on the table. Too much, you pay back your information rent in price impact. There's an optimal middle ground.

Kyle's insight is that this optimization has a clean closed-form when the market maker prices linearly: $p = \\lambda y$ where $y$ is total order flow. Linear pricing arises naturally because the conditional expectation $E[v \\mid y]$ is linear when $v$ and noise $u$ are jointly normal. The slope $\\lambda$ is the **price impact per unit of order flow**.

Given linear pricing, the insider's optimal trade is itself linear in the information she has: $x = \\beta(v - p_0)$ where $\\beta$ is her trading intensity. Bigger $\\beta$ means trading more aggressively per unit of mispricing, but bigger $\\beta$ also reveals more (changes Var($y$)), which makes $\\lambda$ larger, which makes trading more aggressively more expensive. Equilibrium pins down the unique $(\\beta, \\lambda)$ pair where the insider can't profitably deviate and the MM is breaking even on expected profits.

The headline result: $\\lambda = \\sqrt{\\Sigma_0} / (2 \\sigma_u)$ where $\\Sigma_0$ is the prior variance of $v$ and $\\sigma_u^2$ is the noise-trader order flow variance. Three readings: (a) more prior uncertainty → larger $\\lambda$ (information is more valuable); (b) more noise traders → smaller $\\lambda$ (the insider is harder to detect, depth is greater); (c) market depth $= 1/\\lambda$ is increasing in noise, decreasing in information asymmetry.`,
        id: `Bayangin informed trader yang tau true value stock $\\$110$ pas current market price $\\$100$. Strategi naive: beli sebanyak mungkin — tapi trading quantity besar gerak market price naik melawan kamu. Marginal cost tiap share tambahan naik per share yang kamu beli.

Pertanyaan strategis: beli berapa banyak? Kekurangan, kamu tinggalin information rent di meja. Kebanyakan, kamu balikin information rent kamu lewat price impact. Ada optimal middle ground.

Insight Kyle: optimization ini punya closed-form yang bersih pas market maker price secara linear: $p = \\lambda y$ dimana $y$ itu total order flow. Linear pricing muncul natural karena conditional expectation $E[v \\mid y]$ itu linear pas $v$ dan noise $u$ jointly normal. Slope $\\lambda$ itu **price impact per unit order flow**.

Given linear pricing, optimal trade insider itu sendiri linear di info yang dia punya: $x = \\beta(v - p_0)$ dimana $\\beta$ itu intensitas trading dia. $\\beta$ lebih besar berarti trading lebih aggressive per unit mispricing, tapi $\\beta$ lebih besar juga reveal lebih banyak (ubah Var($y$)), yang bikin $\\lambda$ lebih besar, yang bikin trading lebih aggressive lebih mahal. Equilibrium pin down unique pair $(\\beta, \\lambda)$ dimana insider gak bisa profitably deviate dan MM break-even di expected profit.

Headline result: $\\lambda = \\sqrt{\\Sigma_0} / (2 \\sigma_u)$ dimana $\\Sigma_0$ itu prior variance $v$ dan $\\sigma_u^2$ itu variance noise-trader order flow. Tiga bacaan: (a) prior uncertainty lebih → $\\lambda$ lebih besar (info lebih bernilai); (b) noise trader lebih banyak → $\\lambda$ lebih kecil (insider lebih susah dideteksi, depth lebih besar); (c) market depth $= 1/\\lambda$ naik di noise, turun di information asymmetry.`
      }
    },

    // ─────────────── 3. formalization ───────────────
    {
      id: 'formalization',
      heading: { en: 'Formal model', id: 'Model formal' },
      body: {
        en: `**Setup.** Three agents: an informed trader (insider), noise traders, a competitive market maker.

The asset has unknown value $v \\sim N(p_0, \\Sigma_0)$. The insider observes $v$ exactly. Noise traders submit total order flow $u \\sim N(0, \\sigma_u^2)$ independent of $v$. The insider's order is $x$. Total order flow $y = x + u$.

The MM observes only $y$ (not $x$ or $u$ separately) and sets price $p$ before clearing.

**Three commitments:**

1. **Insider rationality**: chooses $x$ to maximize expected profit $E[(v - p)x \\mid v]$.
2. **MM competition**: sets $p = E[v \\mid y]$ (zero expected profit conditional on observed flow).
3. **Linear equilibrium**: conjecture (and verify) that insider strategy is $x = \\beta(v - p_0)$ and pricing rule is $p = p_0 + \\lambda y$.

**Step 1 — solve insider's problem given $\\lambda$.** The insider knows $v$ and conjectures pricing $p = p_0 + \\lambda x + \\lambda u$. Her expected profit:

$$E[(v - p) x \\mid v] = (v - p_0 - \\lambda x) x - \\lambda E[u \\mid v] \\cdot x = (v - p_0 - \\lambda x) x$$

(since $u$ is independent of $v$, $E[u \\mid v] = 0$). Differentiate with respect to $x$ and set to zero:

$$\\frac{d}{dx}[(v - p_0)x - \\lambda x^2] = (v - p_0) - 2\\lambda x = 0$$

$$\\boxed{x^* = \\frac{v - p_0}{2\\lambda}}$$

Comparing to the conjectured form $x = \\beta(v - p_0)$:

$$\\beta = \\frac{1}{2\\lambda}$$

**Step 2 — solve MM's problem given $\\beta$.** The MM sets $p = E[v \\mid y]$. Since $v$ and $y = \\beta(v - p_0) + u$ are jointly normal:

$$E[v \\mid y] = p_0 + \\frac{\\text{Cov}(v, y)}{\\text{Var}(y)} (y - E[y])$$

Compute the moments. $E[y] = 0$ (since $E[v - p_0] = 0$ and $E[u] = 0$). $\\text{Cov}(v, y) = \\text{Cov}(v, \\beta(v - p_0) + u) = \\beta \\Sigma_0$. $\\text{Var}(y) = \\beta^2 \\Sigma_0 + \\sigma_u^2$. So:

$$p = p_0 + \\frac{\\beta \\Sigma_0}{\\beta^2 \\Sigma_0 + \\sigma_u^2} \\cdot y$$

Comparing to the conjectured form $p = p_0 + \\lambda y$:

$$\\lambda = \\frac{\\beta \\Sigma_0}{\\beta^2 \\Sigma_0 + \\sigma_u^2}$$

**Step 3 — solve the fixed point.** Substitute $\\beta = 1/(2\\lambda)$ into the $\\lambda$ equation:

$$\\lambda = \\frac{(1/(2\\lambda)) \\Sigma_0}{(1/(4\\lambda^2)) \\Sigma_0 + \\sigma_u^2}$$

Multiply both sides by the denominator:

$$\\lambda \\left[\\frac{\\Sigma_0}{4\\lambda^2} + \\sigma_u^2\\right] = \\frac{\\Sigma_0}{2\\lambda}$$

$$\\frac{\\Sigma_0}{4\\lambda} + \\lambda \\sigma_u^2 = \\frac{\\Sigma_0}{2\\lambda}$$

$$\\lambda \\sigma_u^2 = \\frac{\\Sigma_0}{2\\lambda} - \\frac{\\Sigma_0}{4\\lambda} = \\frac{\\Sigma_0}{4\\lambda}$$

$$4 \\lambda^2 \\sigma_u^2 = \\Sigma_0$$

$$\\boxed{\\lambda = \\frac{\\sqrt{\\Sigma_0}}{2 \\sigma_u}}$$

And correspondingly:

$$\\beta = \\frac{1}{2\\lambda} = \\frac{\\sigma_u}{\\sqrt{\\Sigma_0}}$$

**Reading the result.** $\\lambda$ scales with $\\sqrt{\\Sigma_0}$: more prior uncertainty about $v$ widens price impact. $\\lambda$ scales inversely with $\\sigma_u$: more noise traders thicken the market (more "cover" for the insider, but also less informational signal-to-noise for the MM).

**Market depth** $D = 1/\\lambda = 2 \\sigma_u / \\sqrt{\\Sigma_0}$ — the quantity of order flow needed to move the price by one unit.

**Information leakage.** A useful diagnostic: how much of the insider's private information leaks into the price? Computing $\\text{Var}(p) / \\Sigma_0 = 1/2$ — in equilibrium, *exactly half* the insider's information advantage gets revealed in the single-period clearing price. The other half remains private (unrealized) profit.`,
        id: `**Setup.** Tiga agent: informed trader (insider), noise trader, competitive market maker.

Asset punya unknown value $v \\sim N(p_0, \\Sigma_0)$. Insider observe $v$ exactly. Noise trader submit total order flow $u \\sim N(0, \\sigma_u^2)$ independent dari $v$. Order insider $x$. Total order flow $y = x + u$.

MM observe cuma $y$ (gak $x$ atau $u$ secara terpisah) dan set price $p$ sebelum clearing.

**Tiga commitment:**

1. **Insider rationality**: pilih $x$ buat maximize expected profit $E[(v - p)x \\mid v]$.
2. **MM competition**: set $p = E[v \\mid y]$ (zero expected profit conditional ke observed flow).
3. **Linear equilibrium**: conjecture (dan verify) bahwa strategi insider $x = \\beta(v - p_0)$ dan pricing rule $p = p_0 + \\lambda y$.

**Step 1 — solve insider problem given $\\lambda$.** Insider tau $v$ dan conjecture pricing $p = p_0 + \\lambda x + \\lambda u$. Expected profit dia:

$$E[(v - p) x \\mid v] = (v - p_0 - \\lambda x) x$$

(karena $u$ independent dari $v$, $E[u \\mid v] = 0$). Differentiate $x$ dan set ke nol:

$$(v - p_0) - 2\\lambda x = 0 \\implies x^* = \\frac{v - p_0}{2\\lambda}$$

Bandingin sama conjectured form $x = \\beta(v - p_0)$:

$$\\beta = \\frac{1}{2\\lambda}$$

**Step 2 — solve MM problem given $\\beta$.** MM set $p = E[v \\mid y]$. Karena $v$ dan $y = \\beta(v - p_0) + u$ jointly normal:

$$E[v \\mid y] = p_0 + \\frac{\\text{Cov}(v, y)}{\\text{Var}(y)} (y - E[y])$$

Hitung momen. $E[y] = 0$. $\\text{Cov}(v, y) = \\beta \\Sigma_0$. $\\text{Var}(y) = \\beta^2 \\Sigma_0 + \\sigma_u^2$. Jadi:

$$\\lambda = \\frac{\\beta \\Sigma_0}{\\beta^2 \\Sigma_0 + \\sigma_u^2}$$

**Step 3 — solve fixed point.** Substitusi $\\beta = 1/(2\\lambda)$ ke equation $\\lambda$:

$$\\lambda = \\frac{(1/(2\\lambda)) \\Sigma_0}{(1/(4\\lambda^2)) \\Sigma_0 + \\sigma_u^2}$$

Setelah aljabar (kalikan dua sisi sama denominator, simplify):

$$4 \\lambda^2 \\sigma_u^2 = \\Sigma_0 \\implies \\boxed{\\lambda = \\frac{\\sqrt{\\Sigma_0}}{2 \\sigma_u}}$$

Dan correspondingly:

$$\\beta = \\frac{1}{2\\lambda} = \\frac{\\sigma_u}{\\sqrt{\\Sigma_0}}$$

**Reading result-nya.** $\\lambda$ scale sama $\\sqrt{\\Sigma_0}$: prior uncertainty $v$ lebih → price impact lebih lebar. $\\lambda$ scale inversely sama $\\sigma_u$: noise trader lebih banyak → market lebih tebal (lebih banyak "cover" buat insider, tapi juga lebih sedikit informational signal-to-noise buat MM).

**Market depth** $D = 1/\\lambda = 2 \\sigma_u / \\sqrt{\\Sigma_0}$ — quantity order flow yang dibutuhin buat gerakin price satu unit.

**Information leakage.** Diagnostic berguna: berapa banyak private info insider yang bocor ke price? Hitung $\\text{Var}(p) / \\Sigma_0 = 1/2$ — di equilibrium, *exactly setengah* information advantage insider ke-reveal di single-period clearing price. Setengah lain stays private (unrealized profit).`
      }
    },

    // ─────────────── 4. worked-example ───────────────
    {
      id: 'worked-example',
      heading: { en: 'Worked example', id: 'Contoh kerjaan' },
      visualization: {
        id: 'kyle-lambda-simulator',
        component: 'KyleLambdaSim',
        title: {
          en: "Kyle's λ: price impact vs order flow",
          id: "λ Kyle: price impact vs order flow"
        },
        description: {
          en: "Adjust the value uncertainty σ₀ = √Σ₀ and the noise-trader volume σ_u and watch the price-impact line p = p₀ + λy pivot. λ = √Σ₀/(2σ_u) steepens with information asymmetry and flattens with noise cover; market depth 1/λ is its inverse. The dots are realized order flow landing on the line, clustered inside the ±1σ band. Note that Var(p)/Σ₀ stays at ½ regardless of the sliders — exactly half the insider's information leaks into the single-auction price. Defaults reproduce the worked example (σ₀=5, σ_u=10 → λ=0.25, β=2, depth=4).",
          id: "Geser ketidakpastian nilai σ₀ = √Σ₀ dan volume noise-trader σ_u dan perhatikan garis price-impact p = p₀ + λy berputar. λ = √Σ₀/(2σ_u) makin curam dengan information asymmetry dan makin datar dengan noise cover; market depth 1/λ itu kebalikannya. Titik-titik itu order flow realized yang jatuh di garis, ngumpul di dalam band ±1σ. Perhatiin Var(p)/Σ₀ tetap di ½ apapun slider-nya — persis setengah info insider bocor ke harga single-auction. Default mereproduksi worked example (σ₀=5, σ_u=10 → λ=0.25, β=2, depth=4)."
        },
        defaultParams: { sigma0: 5, sigmaU: 10, p0: 100, seed: 12345 },
        height: 380,
      },
      body: {
        en: `Set $p_0 = 100$, $\\Sigma_0 = 25$ (so $\\sqrt{\\Sigma_0} = 5$ — the prior says $v$ has a standard deviation of $5$ around $p_0$). Set $\\sigma_u = 10$ (noise traders have ten units of standard-deviation order flow per period).

**Equilibrium quantities:**

$$\\lambda = \\frac{\\sqrt{25}}{2 \\cdot 10} = \\frac{5}{20} = 0.25$$

$$\\beta = \\frac{\\sigma_u}{\\sqrt{\\Sigma_0}} = \\frac{10}{5} = 2$$

**Market depth:** $D = 1/\\lambda = 4$. The market absorbs 4 units of order flow per unit of price movement.

**Suppose the insider learns $v = 108$** (i.e. $v - p_0 = 8$ — the stock is mispriced by 8 dollars).

Insider's optimal trade: $x^* = (v - p_0)/(2\\lambda) = 8/(2 \\cdot 0.25) = 16$ units.

**Suppose noise traders submit $u = -3$** (slight net selling). Total order flow $y = x + u = 16 - 3 = 13$.

**Market maker's clearing price:** $p = p_0 + \\lambda y = 100 + 0.25 \\cdot 13 = 103.25$.

**Insider's realized profit:** $(v - p) \\cdot x = (108 - 103.25) \\cdot 16 = 4.75 \\cdot 16 = 76$ — that is USD 76.

Sanity check: if the insider had traded only $x = v - p_0 = 8$ units (matching the dollar mispricing one-for-one — a tempting but arbitrary rule, not the "naive" $(v-p_0)/\\lambda$ benchmark used later) at the same $\\lambda$, total order flow would have been $y = 8 - 3 = 5$, price would be $p = 101.25$, profit per unit = $108 - 101.25 = 6.75$, total profit = $6.75 \\cdot 8 = 54$ — that is USD 54. By trading the optimal larger quantity, the insider extracts more total profit despite worse per-unit price — the strategic optimization is genuine value.

Sanity check 2: if the insider had traded $x = 32$ (twice the optimum), $y = 29$, price would be $107.25$, per-unit profit $= 108 - 107.25 = 0.75$, total $= 0.75 \\cdot 32 = 24$ — that is USD 24. Trading too aggressively erases the rent. Note that $x^* = 16$ maximizes the insider's *expected* profit (averaging over the random noise draw $u$, whose mean is zero): $E[\\Pi] = (v - p_0 - \\lambda x)\\,x$ is maximized at $x = (v-p_0)/(2\\lambda) = 16$. For this *particular* realized draw $u = -3$ the realized-profit curve peaks a hair higher, at $x = 17.5$ (USD 76.56 vs USD 76) — but $x^*$ is the quantity she must commit to *before* seeing $u$, so it is the top of the expected-profit curve, which is the object she optimizes.`,
        id: `Set $p_0 = 100$, $\\Sigma_0 = 25$ (jadi $\\sqrt{\\Sigma_0} = 5$ — prior bilang $v$ punya standard deviation 5 di sekitar $p_0$). Set $\\sigma_u = 10$ (noise trader punya sepuluh unit standard-deviation order flow per period).

**Equilibrium quantities:**

$$\\lambda = \\frac{\\sqrt{25}}{2 \\cdot 10} = 0.25$$

$$\\beta = \\frac{10}{5} = 2$$

**Market depth:** $D = 1/\\lambda = 4$. Market serap 4 unit order flow per unit price movement.

**Misalkan insider belajar $v = 108$** (jadi $v - p_0 = 8$ — stock mispriced 8 dollar).

Optimal trade insider: $x^* = 8/(2 \\cdot 0.25) = 16$ unit.

**Misalkan noise trader submit $u = -3$** (slight net selling). Total order flow $y = 16 - 3 = 13$.

**Market maker clearing price:** $p = 100 + 0.25 \\cdot 13 = 103.25$.

**Realized profit insider:** $(108 - 103.25) \\cdot 16 = 4.75 \\cdot 16 = 76$ — yaitu USD 76.

Sanity check: kalau insider trade cuma $x = v - p_0 = 8$ unit (match dollar mispricing one-for-one — aturan yang menggoda tapi arbitrary, bukan benchmark "naive" $(v-p_0)/\\lambda$ yang dipake nanti) di $\\lambda$ yang sama, total order flow akan $y = 5$, price $p = 101.25$, profit per unit $= 6.75$, total profit $= 54$ — yaitu USD 54. Dengan trade optimal larger quantity, insider extract lebih banyak total profit meskipun per-unit price lebih buruk — strategic optimization itu genuine value.

Sanity check 2: kalau insider trade $x = 32$ (dua kali optimum), $y = 29$, price $= 107.25$, per-unit profit $= 0.75$, total $= 24$ — yaitu USD 24. Trading terlalu aggressive ngehapus rent. Catat bahwa $x^* = 16$ memaksimalkan *expected* profit insider (rata-rata over random noise draw $u$, yang mean-nya nol): $E[\\Pi] = (v - p_0 - \\lambda x)\\,x$ maksimal di $x = (v-p_0)/(2\\lambda) = 16$. Buat realized draw $u = -3$ *spesifik* ini, realized-profit curve puncaknya sedikit lebih tinggi, di $x = 17.5$ (USD 76.56 vs USD 76) — tapi $x^*$ itu kuantitas yang dia commit *sebelum* lihat $u$, jadi dia top dari expected-profit curve, yang itu object yang dia optimize.`
      }
    },

    // ─────────────── 5. applications ───────────────
    {
      id: 'applications',
      heading: { en: 'Applications by audience', id: 'Aplikasi per audience' },
      body: {
        en: `This section walks from where the research frontier is moving, through practitioner-level deployment, down to the trading desk. Pick whichever entry point matches your current need.

### For the advanced researcher

The Kyle 1985 single-period model is the building block for an entire literature of extensions. Multi-period Kyle (Back 1992, Back-Cao-Willard 2000) extends to continuous trading where the insider trades smoothly over time and information leaks gradually. Foster-Viswanathan (1996) introduces multiple competing informed traders, showing that competition between informed agents *accelerates* information revelation and tightens the market. Kyle-Obizhaeva (2016, *Econometrica*) generalizes the model into "market microstructure invariance" — a scaling law that holds across asset classes and time periods. Recent work on HFT, latency arbitrage, and stub quotes builds on Kyle's framework to formalize strategic interaction between speed-advantaged traders and conventional liquidity providers. The Kyle model is also the canonical benchmark for any model that wants to claim it generates "realistic" price impact: deviations from Kyle-like equilibria are arguments for specific market frictions.

### For the quant practitioner

$\\lambda$ is operationally identifiable from data as the slope of price changes on signed order flow over short horizons. Many implementations exist: regress $\\Delta p_t$ on signed trade size, on order book imbalance (OFI), on volume-time signed flow (VPIN-adjacent constructions). The Kyle benchmark says: if your estimated $\\lambda$ is stable across regimes, your market is well-modeled by Kyle-like equilibrium. If $\\lambda$ jumps during specific windows (post-news, market-on-close, HFT regime shifts), you have a regime detection signal.

Practitioner-specific use cases: calibrating market-impact functions for execution algorithms — Almgren-Chriss-style cost models effectively assume a constant $\\lambda$, but real markets have time-varying $\\lambda$ that you should track in production; using $\\lambda$ estimates as a real-time depth gauge (when $\\lambda$ doubles intraday, your slippage on a fixed-size order also roughly doubles); cross-asset $\\lambda$ comparison to surface relative liquidity (BTC vs ETH vs SOL or large-cap vs mid-cap equity); detecting "Kyle regimes" where informed activity dominates by combining $\\lambda$ spikes with PIN/VPIN signals.

### For the retail trader

The Kyle model gives a precise reason why large orders move markets even without news: the market maker, observing total order flow, *cannot tell* whether your buy is informed (signaling that price should be higher) or noise (you just rebalancing your portfolio). She has to assume there's some informed mix and prices accordingly. Your trade reveals partial information about your beliefs, and the price moves to reflect that even when you have no information at all.

This explains why "stealth liquidity" matters: if you submit a 1000-share market order on a thin stock, the market maker treats some fraction of that as informed, pushes the price against you, and your fill price is worse than the quoted price would have suggested. Slicing into smaller orders helps because each individual slice carries less information signal per unit. For a retail trader, the practical takeaway is: limit orders that wait for someone to come to you avoid revealing your urgency (and thus your potential information); market orders pay the full $\\lambda \\cdot$ size impact whether you had real information or not.`,
        id: `Section ini jalan dari mana research frontier lagi bergerak, lewat practitioner-level deployment, sampai turun ke trading desk. Pilih entry point yang match sama kebutuhan kamu sekarang.

### Untuk advanced researcher

Model single-period Kyle 1985 itu building block buat literature extension yang lengkap. Multi-period Kyle (Back 1992, Back-Cao-Willard 2000) extend ke continuous trading dimana insider trade smoothly over time dan info bocor gradually. Foster-Viswanathan (1996) ngenalin multiple informed trader yang kompetisi, nunjukin bahwa kompetisi antara informed agent *accelerate* information revelation dan ngeketatin market. Kyle-Obizhaeva (2016, *Econometrica*) generalize model jadi "market microstructure invariance" — scaling law yang hold lintas asset class dan time period. Kerja recent di HFT, latency arbitrage, dan stub quote build on framework Kyle buat formalize strategic interaction antara speed-advantaged trader dan conventional liquidity provider. Model Kyle juga jadi benchmark kanon buat model apa pun yang mau claim ngehasilin "realistic" price impact: deviasi dari Kyle-like equilibrium jadi argument buat specific market friction.

### Untuk quant practitioner

$\\lambda$ secara operasional identifiable dari data sebagai slope perubahan price terhadap signed order flow over short horizon. Banyak implementation eksis: regress $\\Delta p_t$ ke signed trade size, ke order book imbalance (OFI), ke volume-time signed flow (konstruksi VPIN-adjacent). Benchmark Kyle bilang: kalau estimated $\\lambda$ kamu stable lintas regime, market kamu well-modeled by Kyle-like equilibrium. Kalau $\\lambda$ lompat di window spesifik (post-news, market-on-close, HFT regime shift), kamu punya signal regime detection.

Use case practitioner spesifik: kalibrasi market-impact function buat execution algorithm — model cost Almgren-Chriss-style effectively assume constant $\\lambda$, tapi real market punya $\\lambda$ time-varying yang harusnya kamu track di production; pake estimasi $\\lambda$ sebagai real-time depth gauge (pas $\\lambda$ double intraday, slippage kamu di fixed-size order juga kira-kira double); cross-asset $\\lambda$ comparison buat surface relative liquidity (BTC vs ETH vs SOL atau large-cap vs mid-cap equity); deteksi "Kyle regime" dimana informed activity dominate dengan kombinasi $\\lambda$ spike sama signal PIN/VPIN.

### Untuk retail trader

Model Kyle kasih alasan presisi kenapa large order gerakin market bahkan tanpa news: market maker, observe total order flow, *gak bisa tau* apakah buy kamu informed (nge-signal price harusnya lebih tinggi) atau noise (kamu cuma rebalancing portfolio). Dia harus assume ada mix informed dan price accordingly. Trade kamu reveal partial info tentang belief kamu, dan price gerak buat reflect itu bahkan pas kamu gak punya info sama sekali.

Ini ngejelasin kenapa "stealth liquidity" penting: kalau kamu submit market order 1000-share di stock yang tipis, market maker treat some fraction itu sebagai informed, push price melawan kamu, dan fill price kamu lebih buruk daripada yang quoted price suggest. Slicing ke order lebih kecil bantu karena tiap slice individual bawa info signal lebih sedikit per unit. Buat retail trader, takeaway praktisnya: limit order yang nunggu seseorang datang ke kamu avoid reveal urgency kamu (dan thus potential info kamu); market order bayar full $\\lambda \\cdot$ size impact entah kamu punya real info atau gak.`
      }
    },

    // ─────────────── 6. practice ───────────────
    {
      id: 'practice',
      heading: { en: 'Practice', id: 'Latihan' },
      body: {
        en: `**1.** With $\\Sigma_0 = 100$ and $\\sigma_u = 50$, compute equilibrium $\\lambda$, $\\beta$, and market depth $D$.

<details><summary>Answer</summary>
$\\lambda = \\sqrt{100}/(2 \\cdot 50) = 10/100 = 0.10$. $\\beta = 50/\\sqrt{100} = 50/10 = 5$. $D = 1/\\lambda = 10$.
</details>

**2.** Suppose $\\sigma_u^2$ doubles (twice as many noise traders, same $\\Sigma_0$). How do $\\lambda$, $\\beta$, and the insider's expected profit change?

<details><summary>Answer</summary>
$\\sigma_u^2$ doubling means $\\sigma_u$ scales by $\\sqrt{2}$. So $\\lambda$ scales by $1/\\sqrt{2}$ (decreases — market is deeper). $\\beta$ scales by $\\sqrt{2}$ (insider trades more aggressively because cover is better). Insider's expected profit per round can be shown to scale as $\\sqrt{\\Sigma_0} \\cdot \\sigma_u / 2$, so it scales by $\\sqrt{2}$ (more profitable for the insider because the deeper market lets her extract more rent before her information leaks). Counterintuitive but correct: more noise traders make the market more liquid AND increase informed-trader profits, because they provide camouflage.
</details>

**3.** Why doesn't the insider just trade $x = (v - p_0)$ to "fully exploit" her information? Walk through the strategic logic.

<details><summary>Answer</summary>
Because trading $x = (v - p_0)$ would be a mechanical (naive) strategy. The insider's marginal profit from each additional unit traded is $(v - p) - \\lambda x$ (equivalently $(v - p_0) - 2\\lambda x$) — the gross informational rent per share minus the price impact she causes by trading. As $x$ grows, $p$ grows too (via $p = p_0 + \\lambda x + \\lambda u$), shrinking the per-unit rent. Optimal $x$ sets marginal profit to zero, which gives $x^* = (v - p_0)/(2\\lambda)$ — exactly half of the naive quantity. The deeper insight: trading more aggressively reveals more, which makes $\\lambda$ larger in equilibrium, which makes trading even more aggressively even costlier. The fixed-point logic — strategic optimization given $\\lambda$, plus $\\lambda$ derived from anticipating strategic behavior — gives the closed-form $\\lambda = \\sqrt{\\Sigma_0}/(2\\sigma_u)$.
</details>

**4.** In equilibrium, $\\text{Var}(p) = \\Sigma_0/2$ — the price reflects exactly half the prior uncertainty about $v$. Why exactly half? What would change if the insider faced competition from another informed trader (Foster-Viswanathan extension)?

<details><summary>Answer (sketch)</summary>
The "half" comes from the specific noisy linear signal structure: the insider scales her trade by $\\beta = \\sigma_u/\\sqrt{\\Sigma_0}$ which is exactly the inverse Sharpe ratio of the informational opportunity. When she submits this signal mixed with noise of equal scaled variance, the MM's posterior variance halves. With two competing informed traders (Foster-Viswanathan), each trades less aggressively individually (the equilibrium is undercut by the competing informed agent), but together they reveal *more* information faster — the price ends up closer to $v$ at the end of trading, and information leakage rate is higher. Multiple informed agents accelerate information aggregation, which is welfare-improving but reduces individual informed profits.
</details>`,
        id: `**1.** Dengan $\\Sigma_0 = 100$ dan $\\sigma_u = 50$, hitung equilibrium $\\lambda$, $\\beta$, dan market depth $D$.

<details><summary>Jawaban</summary>
$\\lambda = \\sqrt{100}/(2 \\cdot 50) = 0.10$. $\\beta = 50/10 = 5$. $D = 1/\\lambda = 10$.
</details>

**2.** Misalkan $\\sigma_u^2$ double (noise trader dua kali lipat, $\\Sigma_0$ sama). Gimana $\\lambda$, $\\beta$, dan expected profit insider berubah?

<details><summary>Jawaban</summary>
$\\sigma_u^2$ double berarti $\\sigma_u$ scale sama $\\sqrt{2}$. Jadi $\\lambda$ scale sama $1/\\sqrt{2}$ (turun — market lebih dalam). $\\beta$ scale sama $\\sqrt{2}$ (insider trade lebih aggressive karena cover lebih bagus). Expected profit insider per round bisa di-show scale sama $\\sqrt{\\Sigma_0} \\cdot \\sigma_u / 2$, jadi scale sama $\\sqrt{2}$ (lebih profitable buat insider karena market yang lebih dalam ngebolehin dia extract lebih banyak rent sebelum info bocor). Counterintuitive tapi bener: noise trader lebih banyak bikin market lebih liquid DAN naikkin profit informed-trader, karena mereka ngasih camouflage.
</details>

**3.** Kenapa insider gak just trade $x = (v - p_0)$ buat "fully exploit" info dia? Walk through logika strategis-nya.

<details><summary>Jawaban</summary>
Karena trading $x = (v - p_0)$ itu strategi mekanis (naive). Marginal profit insider dari tiap unit tambahan yang di-trade itu $(v - p) - \\lambda x$ (ekuivalen $(v - p_0) - 2\\lambda x$) — gross informational rent per share minus price impact yang dia cause dari trading. Pas $x$ tumbuh, $p$ tumbuh juga (via $p = p_0 + \\lambda x + \\lambda u$), ngecilin per-unit rent. Optimal $x$ set marginal profit ke nol, yang ngasih $x^* = (v - p_0)/(2\\lambda)$ — exactly setengah dari naive quantity. Insight lebih dalam: trade lebih aggressive reveal lebih banyak, yang bikin $\\lambda$ lebih besar di equilibrium, yang bikin trade lebih aggressive jadi lebih mahal. Logika fixed-point — strategic optimization given $\\lambda$, plus $\\lambda$ derived dari anticipate strategic behavior — ngasih closed-form $\\lambda = \\sqrt{\\Sigma_0}/(2\\sigma_u)$.
</details>

**4.** Di equilibrium, $\\text{Var}(p) = \\Sigma_0/2$ — price reflect exactly setengah prior uncertainty tentang $v$. Kenapa exactly setengah? Apa yang berubah kalau insider hadapi kompetisi dari informed trader lain (Foster-Viswanathan extension)?

<details><summary>Jawaban (sketch)</summary>
"Setengah" itu dari spesifik noisy linear signal structure: insider scale trade dia sama $\\beta = \\sigma_u/\\sqrt{\\Sigma_0}$ yang exactly inverse Sharpe ratio dari informational opportunity. Pas dia submit signal ini mixed sama noise dengan scaled variance yang sama, posterior variance MM ke-halve. Dengan dua informed trader yang kompetisi (Foster-Viswanathan), masing-masing trade kurang aggressive individually (equilibrium di-undercut sama competing informed agent), tapi bareng mereka reveal *lebih banyak* info lebih cepat — price ends up lebih deket ke $v$ di end of trading, dan information leakage rate lebih tinggi. Multiple informed agent accelerate information aggregation, yang welfare-improving tapi reduce individual informed profit.
</details>`
      }
    },

    // ─────────────── 7. connections ───────────────
    {
      id: 'connections',
      heading: { en: 'Connections', id: 'Koneksi' },
      body: {
        en: `- **Prereqs**: [O'Hara 1995](item:ohara-1995) provides the broader theoretical context within which Kyle sits. [Glosten-Milgrom 1985](item:glosten-milgrom-1985) is the sequential-trade counterpart — same year, complementary mechanism (discrete sequential trades + competitive quotes vs continuous batch auction + strategic informed trader).
- **Builds toward**: [Cont-Kukanov-Stoikov 2014](item:cont-kukanov-stoikov-2014) is the modern empirical successor — OFI as a price impact construct generalizes Kyle's λ to order book event flow. [Hasbrouck 2007](item:hasbrouck-2007) provides the empirical methodology for estimating Kyle-style λ from real data. [Easley-López de Prado-O'Hara 2012](item:easley-lopez-prado-vpin) extends the informed-flow detection problem into high-frequency time.
- **Related cards**: Kyle's lambda, market depth, and batch-trade vs sequential-trade distinction are covered in Foundation seed cards. Filter by item in the cards list below.`,
        id: `- **Prereqs**: [O'Hara 1995](item:ohara-1995) ngasih konteks teoritis luas tempat Kyle berada. [Glosten-Milgrom 1985](item:glosten-milgrom-1985) itu counterpart sequential-trade — tahun sama, mekanisme komplementer (discrete sequential trade + competitive quote vs continuous batch auction + strategic informed trader).
- **Builds toward**: [Cont-Kukanov-Stoikov 2014](item:cont-kukanov-stoikov-2014) itu modern empirical successor — OFI sebagai konstruk price impact generalize lambda Kyle ke order book event flow. [Hasbrouck 2007](item:hasbrouck-2007) ngasih metodologi empiris buat estimate lambda Kyle-style dari real data. [Easley-López de Prado-O'Hara 2012](item:easley-lopez-prado-vpin) extend informed-flow detection problem ke high-frequency time.
- **Related cards**: Lambda Kyle, market depth, dan distinction batch-trade vs sequential-trade di-cover di Foundation seed cards. Filter by item di card list bawah.`
      }
    },

    // ─────────────── 8. sources ───────────────
    {
      id: 'sources',
      heading: { en: 'Sources', id: 'Sumber' },
      body: {
        en: `- **Kyle, A. S.** (1985). "Continuous Auctions and Insider Trading." *Econometrica*, 53(6), 1315-1335. The primary paper. Single-period batch auction with strategic insider — also extends to multi-period continuous-time auction in Section IV.
- **O'Hara, M.** (1995). *Market Microstructure Theory.* Blackwell. Chapter 4 (strategic trade models) is the textbook treatment of Kyle plus extensions.
- **Back, K.** (1992). "Insider Trading in Continuous Time." *Review of Financial Studies*, 5(3), 387-409. The canonical continuous-time generalization — Kyle's single-period equilibrium emerges as a special case.
- **Foster, F. D., and Viswanathan, S.** (1996). "Strategic Trading When Agents Forecast the Forecasts of Others." *Journal of Finance*, 51(4), 1437-1478. The multi-informed-trader extension.`,
        id: `- **Kyle, A. S.** (1985). "Continuous Auctions and Insider Trading." *Econometrica*, 53(6), 1315-1335. Paper utama. Single-period batch auction dengan strategic insider — juga extend ke multi-period continuous-time auction di Section IV.
- **O'Hara, M.** (1995). *Market Microstructure Theory.* Blackwell. Chapter 4 (strategic trade model) itu treatment textbook dari Kyle plus extension.
- **Back, K.** (1992). "Insider Trading in Continuous Time." *Review of Financial Studies*, 5(3), 387-409. Generalisasi kanon continuous-time — equilibrium single-period Kyle muncul sebagai special case.
- **Foster, F. D., dan Viswanathan, S.** (1996). "Strategic Trading When Agents Forecast the Forecasts of Others." *Journal of Finance*, 51(4), 1437-1478. Extension multi-informed-trader.`
      }
    },
  ],

  audio: { enabled: true },

  selfTest: [
    {
      sectionId: 'intuition',
      question: {
        en: 'Why does the insider in Kyle trade only half of (v − p₀)/λ rather than going all-in to fully exploit her information?',
        id: 'Kenapa insider di Kyle trade cuma setengah dari (v − p₀)/λ daripada all-in buat fully exploit info-nya?'
      },
      prompt: {
        en: 'Before continuing, try answering:',
        id: 'Sebelum lanjut, coba jawab:'
      },
      answer: {
        en: 'Because she internalizes her own price impact. Each unit she trades pushes the clearing price against her by λ. Her marginal profit is (v − p₀) − 2λx (rent minus impact). Maximizing yields x* = (v − p₀)/(2λ) — exactly half the naive quantity. Going all-in would push the price so far that the rent per unit collapses faster than the volume gains. The strategic equilibrium captures the balance.',
        id: 'Karena dia internalize price impact dia sendiri. Tiap unit yang dia trade push clearing price melawan dia sama λ. Marginal profit dia (v − p₀) − 2λx (rent minus impact). Maximizing ngasih x* = (v − p₀)/(2λ) — exactly setengah dari naive quantity. All-in akan push price terlalu jauh sampai per-unit rent collapse lebih cepat dari volume gain. Strategic equilibrium capture balance-nya.'
      }
    },
    {
      sectionId: 'formalization',
      question: {
        en: 'Trace why λ = √(Σ₀)/(2σ_u). What does each piece mean intuitively?',
        id: 'Trace kenapa λ = √(Σ₀)/(2σ_u). Apa arti tiap komponen secara intuitif?'
      },
      prompt: {
        en: 'Before continuing, try answering:',
        id: 'Sebelum lanjut, coba jawab:'
      },
      answer: {
        en: 'The result comes from solving the fixed point where insider optimization β = 1/(2λ) meets MM optimization λ = βΣ₀/(β²Σ₀ + σ_u²). Algebra yields 4λ²σ_u² = Σ₀. Intuitively: √Σ₀ in the numerator captures information value — higher prior uncertainty about v means each unit of order flow is more informationally meaningful. σ_u in the denominator captures noise camouflage — more noise traders make the insider harder to detect per unit of order flow, lowering equilibrium λ. The factor of 2 comes from the strategic interaction: the insider only trades half the naive quantity, and that constraint enters λ. Market depth 1/λ = 2σ_u/√Σ₀ has the same interpretation in reverse.',
        id: 'Hasilnya dari solve fixed point dimana optimization insider β = 1/(2λ) ketemu optimization MM λ = βΣ₀/(β²Σ₀ + σ_u²). Aljabar ngasih 4λ²σ_u² = Σ₀. Intuitif: √Σ₀ di numerator capture information value — prior uncertainty $v$ lebih tinggi berarti tiap unit order flow lebih informationally meaningful. σ_u di denominator capture noise camouflage — noise trader lebih banyak bikin insider lebih susah dideteksi per unit order flow, ngurangin equilibrium λ. Factor 2 dari strategic interaction: insider cuma trade setengah dari naive quantity, dan constraint itu masuk ke λ. Market depth 1/λ = 2σ_u/√Σ₀ punya interpretasi sama di arah sebaliknya.'
      }
    },
    {
      sectionId: 'worked-example',
      question: {
        en: 'If σ_u doubles in the Kyle setup while Σ₀ stays the same, how does the insider\'s expected profit per round change? Why?',
        id: 'Kalau σ_u double di Kyle setup sementara Σ₀ tetap sama, gimana expected profit insider per round berubah? Kenapa?'
      },
      prompt: {
        en: 'Before continuing, try answering:',
        id: 'Sebelum lanjut, coba jawab:'
      },
      answer: {
        en: 'Counterintuitively, the insider profits MORE when there are more noise traders. λ halves (more depth), but β doubles (the insider trades more aggressively because cover improves). Expected profit per round scales with √(Σ₀) · σ_u / 2, so doubling σ_u scales profit by √2 ≈ 1.41. The intuition: noise traders provide camouflage. The more noise there is, the larger the trade the insider can place without revealing her information signal, so she captures more of the (v − p₀) gap before it leaks into price. This is why high-volume noisy markets are paradoxically attractive to informed traders, not deterring to them.',
        id: 'Counterintuitively, insider untung LEBIH banyak pas ada noise trader lebih banyak. λ halves (depth naik), tapi β double (insider trade lebih aggressive karena cover membaik). Expected profit per round scale sama √(Σ₀) · σ_u / 2, jadi double σ_u scale profit sama √2 ≈ 1.41. Intuisi: noise trader kasih camouflage. Makin banyak noise, makin besar trade yang bisa insider place tanpa reveal information signal-nya, jadi dia capture lebih banyak gap (v − p₀) sebelum bocor ke price. Itu kenapa high-volume noisy market paradoxically attractive buat informed trader, bukan deterring buat mereka.'
      }
    },
    {
      sectionId: 'applications',
      question: {
        en: 'How would you operationalize λ estimation in a daily cross-sectional setting across crypto perpetuals, and what regime signal would you build from it?',
        id: 'Gimana kamu operationalize estimation λ di setting daily cross-sectional lintas crypto perpetual, dan signal regime apa yang kamu bangun dari itu?'
      },
      prompt: {
        en: 'Before continuing, try answering:',
        id: 'Sebelum lanjut, coba jawab:'
      },
      answer: {
        en: 'Per asset per day: collect signed trade flow (signed by side) and aggregate price changes over short bars (e.g., 1-min or 5-min). Regress Δp on signed flow Q to estimate the instantaneous λ_t. Compute Σ₀_t empirically from prior-window return volatility (e.g., 30-day) and back out implied σ_u from λ_t and Σ₀_t. Track λ_t over time per asset. Build the regime signal: λ_t / λ_baseline (rolling 30-day median) per asset. Sustained ratios above ~1.5x for multiple consecutive sessions = "high impact regime" — informed activity dominates, market depth shrunk. Use cases: (a) flag for execution algorithms to slow down or step out; (b) cross-asset spread: assets with simultaneously high λ_t/λ_baseline ratios are correlated regime shifts (e.g., macro event); (c) market-making strategies should widen quotes proportionally to the ratio. Pair with VPIN or OFI signals for composite toxicity score.',
        id: 'Per asset per hari: kumpulin signed trade flow (signed by side) dan aggregate perubahan price over short bar (misalnya 1-min atau 5-min). Regress Δp ke signed flow Q buat estimate instantaneous λ_t. Hitung Σ₀_t empirically dari prior-window return volatility (misalnya 30-day) dan back out implied σ_u dari λ_t dan Σ₀_t. Track λ_t over time per asset. Bangun regime signal: λ_t / λ_baseline (rolling 30-day median) per asset. Ratio sustained di atas ~1.5x buat beberapa session berturut-turut = "high impact regime" — informed activity dominate, market depth menyusut. Use case: (a) flag buat execution algorithm buat slow down atau step out; (b) cross-asset spread: asset dengan ratio λ_t/λ_baseline tinggi bareng itu correlated regime shift (misalnya macro event); (c) market-making strategy harus lebarin quote proporsional ke ratio. Pair sama VPIN atau OFI signal buat composite toxicity score.'
      }
    },
  ],
};
