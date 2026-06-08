// ─────────────────────────────────────────────────────────────────────────
// Trading domain — ATTRIBUTED deep-dive, compiled by Az from @Husslin_'s
// public "Event Trading" deep-dive. NOT financial advice.
// Evidence: [Established] · [Practitioner] · [His].
// ─────────────────────────────────────────────────────────────────────────

export const CONTENT = {
  itemId: 'husslin-event-trading',
  estimatedReadMinutes: 25,

  author: {
    fullName: { en: 'huss — @Husslin_ (event-trading deep-dive)', id: 'huss — @Husslin_ (deep-dive event-trading)' },
    affiliation: {
      en: `Quant fund founder; microstructure + HFT. Trades scheduled events as hedging-flow events, not fundamental ones. (Public persona; compiled by Az.)`,
      id: `Founder quant fund; microstructure + HFT. Nge-trade event terjadwal sebagai event hedging-flow, bukan fundamental. (Persona publik; dikompilasi Az.)`
    },
    tagline: {
      en: `Scheduled events are hedging-flow events, not fundamental ones. Big holders do not day-trade — they hedge before and unwind after. Read the hedging state from how price drifts in, then trade the relief.`,
      id: `Event terjadwal itu event hedging-flow, bukan fundamental. Holder besar gak day-trade — mereka hedge sebelum dan unwind setelah. Baca state hedging dari gimana harga drift masuk, terus trade relief-nya.`
    },
    bio: {
      en: `This deep-dive applies the @Husslin_ logic to scheduled macro events — FOMC, CPI, NFP, elections. The thesis is that the tradeable flow around an event is the *hedging* and its unwind, not the headline itself: institutions buy protection into the event (pushing price down and bidding volatility), and unwind it after (a relief rally). Read the hedging state from the pre-event drift, and trade the relief.

⟦Note: attributed synthesis of public material, compiled by Az. Not financial advice; the pre-event drift is regime-dependent and has decayed — see the caveat.⟧`,
      id: `Deep-dive ini nerapin logika @Husslin_ ke event makro terjadwal — FOMC, CPI, NFP, pemilu. Tesisnya itu flow yang bisa-ditradekan di sekitar event itu *hedging*-nya dan unwind-nya, bukan headline-nya sendiri: institusi beli proteksi masuk ke event (ndorong harga turun dan nge-bid volatilitas), dan unwind setelahnya (relief rally). Baca state hedging dari drift pra-event, dan trade relief-nya.

⟦Catatan: sintesis teratribusi material publik, dikompilasi Az. Bukan nasihat keuangan; pre-event drift itu regime-dependent dan udah meluruh — liat caveat.⟧`
    },
    focus: {
      en: `Funds hedge before a known event — often too much — which pushes price down and bids implied volatility in the days before. Once the uncertainty resolves, those hedges come off and the flow reverses into a relief rally: "sell the rumour, buy the news." The actionable read is the **pre-event tell**: if the market trades *down* into the event it is hedged / priced-in, so the higher-EV lean is *long*; if it trades *up* into the event it is under-hedged / fragile, so the downside is unprotected and caution or a fade is warranted. The execution is to be positioned before the event and close on the announcement (take the relief), and for off-hours events to watch the CME reopen / gap where the real institutional repricing shows up.`,
      id: `Fund hedge sebelum event yang diketahui — sering terlalu banyak — yang ndorong harga turun dan nge-bid implied volatility di hari-hari sebelum. Begitu ketidakpastian resolve, hedge itu lepas dan flow-nya balik jadi relief rally: "jual rumor, beli berita." Bacaan yang bisa-ditindaklanjuti itu **pre-event tell**: kalau pasar trade *turun* menuju event dia ter-hedge / priced-in, jadi lean EV-lebih-tinggi itu *long*; kalau dia trade *naik* menuju event dia under-hedge / rapuh, jadi downside-nya gak terlindungi dan hati-hati atau fade beralasan. Eksekusinya berposisi sebelum event dan nutup pas pengumuman (ambil relief), dan buat event di luar jam ngawasin CME reopen / gap di mana repricing institusi sebenarnya muncul.`
    },
    intellectualLineage: {
      en: `The headline empirical anchor is [Established] Lucca & Moench (2015) — large average equity returns in the ~24h before scheduled FOMC meetings (the "pre-FOMC drift"). But [Regime-dependent] Kurov, Halova Wolfe & Gilbert (2021) show the drift largely *faded* after ~2015, so it must be traded as a conditional, not a constant. The hedging-and-unwind mechanism connects to the dealer-flows deep-dive (the same Greeks: protective puts bought into the event, their hedging and decay).`,
      id: `Anchor empiris utamanya [Established] Lucca & Moench (2015) — return ekuitas rata-rata besar di ~24 jam sebelum rapat FOMC terjadwal ("pre-FOMC drift"). Tapi [Regime-dependent] Kurov, Halova Wolfe & Gilbert (2021) nunjukin drift-nya sebagian besar *memudar* setelah ~2015, jadi harus di-trade sebagai kondisional, bukan konstan. Mekanisme hedging-dan-unwind nyambung ke deep-dive dealer-flows (Greeks yang sama: put proteksi dibeli masuk ke event, hedging dan decay-nya).`
    },
    keyCollaborators: {
      en: `Shared on X / the Steady Lads podcast; the data read is a macro calendar (FOMC/CPI/NFP/elections), the pre-event drift direction, the IV bid, funding/positioning, and the CME reopen for off-hours events. Methodological neighbour: the pre-announcement-drift literature.`,
      id: `Dibagikan di X / podcast Steady Lads; data yang dibaca itu kalender makro (FOMC/CPI/NFP/pemilu), arah pre-event drift, bid IV, funding/positioning, dan CME reopen buat event di luar jam. Tetangga metodologis: literatur pre-announcement-drift.`
    },
    legacy: {
      en: `The durable idea is to stop trading the *content* of an event and start trading its *hedging cycle* — weakness in as protection is bought, relief out as it unwinds — gated by the pre-event tell and the regime. It is the event-specific case of "trade the plumbing, not the story," with an explicit, honest caveat that the canonical version (pre-FOMC drift) has decayed.`,
      id: `Ide abadinya itu berhenti nge-trade *konten* event dan mulai nge-trade *siklus hedging*-nya — lemah masuk pas proteksi dibeli, relief keluar pas dia unwind — di-gate sama pre-event tell dan regime. Itu kasus spesifik-event dari "trade plumbing-nya, bukan ceritanya," dengan caveat eksplisit, jujur bahwa versi kanonik (pre-FOMC drift) udah meluruh.`
    },
    keyWorks: [
      { year: 2015, title: 'The Pre-FOMC Announcement Drift (Lucca & Moench)', venue: 'Journal of Finance' },
      { year: 2021, title: 'The Disappearing Pre-FOMC Announcement Drift (Kurov, Halova Wolfe & Gilbert) — the drift faded after ~2015', venue: 'Finance Research Letters, Vol. 40' },
      { year: 2024, title: '@Husslin_ "Event Trading" deep-dive + X/podcast', venue: 'practitioner source' },
      { year: 2005, title: 'Ni, Pearson & Poteshman — option-expiration / hedging effects (mechanism backdrop)', venue: 'Journal of Financial Economics' },
    ],
  },

  sections: [
    {
      id: 'motivation',
      heading: { en: 'Why this matters', id: 'Kenapa ini penting' },
      body: {
        en: `Retail trades the *content* of an event — will the CPI print be hot, will the Fed cut. This deep-dive trades the *flow* instead. Big holders do not day-trade a number; they **hedge before the event and unwind after**. Buying protection into the event pushes price down and bids implied volatility in the days before; once the uncertainty resolves, those hedges come off, and that flow reverses into a **relief rally**. "Sell the rumour, buy the news" is not folklore here — it is the mechanical signature of a hedging cycle.

The whole edge is to read the **hedging state** from how price drifts into the event, and then position for the relief — *if* the market was actually hedged. The honest caveat, stated up front: the canonical version of this (the pre-FOMC drift) has weakened over time, so it must be traded as a *conditional*, sized for being wrong, never as a guaranteed seasonal.

⟦Disclaimer: attributed synthesis of @Husslin_'s public event material, for study — not financial advice. The pre-FOMC drift (Lucca & Moench 2015) largely faded after ~2015 (Kurov et al. 2021); treat every claim here as regime-conditional.⟧`,
        id: `Retail nge-trade *konten* event — apakah print CPI panas, apakah Fed cut. Deep-dive ini nge-trade *flow*-nya. Holder besar gak day-trade sebuah angka; mereka **hedge sebelum event dan unwind setelah**. Beli proteksi masuk ke event ndorong harga turun dan nge-bid implied volatility di hari-hari sebelum; begitu ketidakpastian resolve, hedge itu lepas, dan flow-nya balik jadi **relief rally**. "Jual rumor, beli berita" bukan folklor di sini — itu sidik jari mekanis dari siklus hedging.

Seluruh edge-nya itu baca **state hedging** dari gimana harga drift masuk ke event, terus berposisi buat relief-nya — *kalau* pasar beneran ter-hedge. Caveat jujur, dinyatakan di depan: versi kanonik dari ini (pre-FOMC drift) udah melemah over time, jadi harus di-trade sebagai *kondisional*, di-size buat salah, jangan pernah sebagai seasonal yang dijamin.

⟦Disclaimer: sintesis teratribusi material event publik @Husslin_, buat belajar — bukan nasihat keuangan. Pre-FOMC drift (Lucca & Moench 2015) sebagian besar memudar setelah ~2015 (Kurov dkk. 2021); perlakukan tiap klaim di sini sebagai regime-conditional.⟧`
      }
    },
    {
      id: 'intuition',
      heading: { en: 'The hedging cycle', id: 'Siklus hedging' },
      body: {
        en: `- **Pre-event hedging.** Funds buy insurance (puts / index hedges) into an event — often *too much*. That hedging pushes price down and bids implied volatility in the days before.
- **Resolution & unwind.** Once the uncertainty clears, the hedges come off, and that flow reverses into a relief rally — the mechanical basis of "sell the rumour, buy the news."
- **The drift.** Because of this hedging-and-unwind pattern, equities have historically drifted *up* in the ~24 hours before scheduled Fed meetings (the pre-FOMC drift).

Two distinct drifts, do not conflate them. The **documented empirical anchor** (Lucca & Moench 2015) is the pre-FOMC *up*-drift — the canonical relief/positioning pattern that builds *as the hedge starts to come off* in the final ~24h. The **practitioner tell** below — "down into the event = hedged" — is a separate, regime-conditional heuristic about the *earlier* hedge-on phase (protection being bought pushes price down over the days before). They are not in tension: protection going on can weigh on price in the run-up, while the relief into and after the announcement is the up-leg the FOMC literature measures. The point of the tell is that the relief is only worth trading *if* the hedge-on weakness was actually present first.

The intuition is that the event itself is mostly *already priced* by the hedging; what is *not* priced is the unwind. So the tradeable move is usually the relief after the uncertainty clears, not the reaction to the content. The catch — and the whole reason for the pre-event tell below — is that this only works *if the market actually hedged*. If it went into the event complacent and under-hedged, there is no protective flow to unwind, and the downside is wide open.`,
        id: `- **Hedging pra-event.** Fund beli asuransi (put / hedge index) masuk ke event — sering *terlalu banyak*. Hedging itu ndorong harga turun dan nge-bid implied volatility di hari-hari sebelum.
- **Resolusi & unwind.** Begitu ketidakpastian jelas, hedge lepas, dan flow-nya balik jadi relief rally — basis mekanis "jual rumor, beli berita."
- **Drift-nya.** Karena pola hedging-dan-unwind ini, ekuitas historis drift *naik* di ~24 jam sebelum rapat Fed terjadwal (pre-FOMC drift).

Dua drift yang beda, jangan dicampur. **Anchor empiris terdokumentasi** (Lucca & Moench 2015) itu pre-FOMC *up*-drift — pola relief/positioning kanonik yang kebangun *pas hedge mulai dilepas* di ~24 jam terakhir. **Tell praktisi** di bawah — "turun masuk ke event = ter-hedge" — itu heuristik terpisah, regime-conditional soal fase hedge-on yang *lebih awal* (proteksi yang dibeli ndorong harga turun over hari-hari sebelum). Keduanya gak bertentangan: proteksi yang dipasang bisa nimbang harga di run-up, sementara relief masuk ke dan setelah pengumuman itu up-leg yang diukur literatur FOMC. Poin tell-nya itu relief cuma layak di-trade *kalau* lemah hedge-on beneran ada duluan.

Intuisinya itu event-nya sendiri kebanyakan udah *ter-price* sama hedging; yang *gak* ter-price itu unwind-nya. Jadi gerakan yang bisa-ditradekan biasanya relief setelah ketidakpastian jelas, bukan reaksi ke konten. Tangkapannya — dan seluruh alasan buat pre-event tell di bawah — itu ini cuma berhasil *kalau pasar beneran hedge*. Kalau dia masuk ke event lengah dan under-hedge, gak ada flow protektif buat di-unwind, dan downside-nya terbuka lebar.`
      }
    },
    {
      id: 'formalization',
      heading: { en: 'The setups & the pre-event tell', id: 'Setup & pre-event tell' },
      body: {
        en: `**Sell the rumour, buy the news.** Base case: weakness into the event and relief out of it — *but only if the market was actually hedged*.

**The pre-event hedging tell (the core heuristic).**
- If the market trades **DOWN into the event** ⇒ it is hedged / priced-in ⇒ the higher-EV trade is to **lean long**.
- If the market trades **UP into the event** ⇒ it is under-hedged / fragile ⇒ be **cautious or fade** (the downside is unprotected).
- He estimates the down-into-event → long pattern works **~80%** of the time. [His]

**Execution.** Be positioned *before* the event and **"always close post-announcement"** — take the relief, do not hold for more. For events that hit while CME futures are closed, the **reopen / gap** is where the real institutional repricing shows up.

**Confirming the hedge.** A rising IV bid into the event *confirms* hedging; funding/positioning cooling confirms de-risking. If price drifts down *and* IV is bid, the hedged read is strong.

**The regime caveat (do not skip).** [Established] Lucca & Moench (2015) document the pre-FOMC drift, but [Regime-dependent] Kurov et al. (2021) show it largely faded after ~2015. So this is a *conditional* edge: it requires confirmation each time (drift + IV bid), it is sized for the ~20% where it fails, and a genuine data *shock* voids the thesis entirely — then you stand aside rather than fight a real surprise.`,
        id: `**Jual rumor, beli berita.** Base case: lemah masuk ke event dan relief keluar darinya — *tapi cuma kalau pasar beneran ter-hedge*.

**Pre-event hedging tell (heuristik inti).**
- Kalau pasar trade **TURUN masuk ke event** ⇒ dia ter-hedge / priced-in ⇒ trade EV-lebih-tinggi itu **lean long**.
- Kalau pasar trade **NAIK masuk ke event** ⇒ dia under-hedge / rapuh ⇒ **hati-hati atau fade** (downside gak terlindungi).
- Dia ngestimasi pola turun-masuk-event → long berhasil **~80%** waktu. [His]

**Eksekusi.** Berposisi *sebelum* event dan **"selalu tutup post-announcement"** — ambil relief, jangan tahan buat lebih. Buat event yang kena pas CME futures tutup, **reopen / gap** itu di mana repricing institusi sebenarnya muncul.

**Konfirmasi hedge.** Bid IV yang naik masuk ke event *ngonfirmasi* hedging; funding/positioning yang mendingin ngonfirmasi de-risking. Kalau harga drift turun *dan* IV di-bid, bacaan ter-hedge kuat.

**Caveat regime (jangan lewati).** [Established] Lucca & Moench (2015) ngedokumentasiin pre-FOMC drift, tapi [Regime-dependent] Kurov dkk. (2021) nunjukin dia sebagian besar memudar setelah ~2015. Jadi ini edge *kondisional*: dia butuh konfirmasi tiap kali (drift + bid IV), di-size buat ~20% di mana dia gagal, dan *shock* data sebenarnya ngebatalin tesisnya sepenuhnya — lalu kamu minggir alih-alih ngelawan kejutan nyata.`
      }
    },
    {
      id: 'worked-example',
      heading: { en: 'Worked example', id: 'Contoh kerjaan' },
      body: {
        en: `**A CPI print (illustrative).**

- **Setup.** CPI drops Thursday morning. From Monday to Wednesday the market grinds **down**, IV is **bid**, and funding cools.
- **Read.** Down-into-event + IV bid = the market is **hedged / priced-in**. Base case: relief on or after the print as hedges unwind.
- **Plan.** Lean **long into the print, sized small**, and **take profit on the post-announcement relief** rather than holding for more. **Invalidate** if (a) the data is a genuine shock (thesis void — stand aside), or (b) the market had actually *rallied* into the event (under-hedged — stand aside; the downside is unprotected). Always size for the ~20% where it is irrational.

**The read.** You are not forecasting the CPI number; you are reading that the market hedged for it (down drift + IV bid) and positioning for the unwind. The discipline is in the exits and the invalidations: close on the relief, and refuse the trade when the pre-event tell is absent or a real shock lands.

⟦Disclaimer: illustrative, not a recommendation. The pre-event drift has decayed; never trade it without current confirmation and tight risk.⟧`,
        id: `**Print CPI (ilustratif).**

- **Setup.** CPI keluar Kamis pagi. Dari Senin ke Rabu pasar grinding **turun**, IV **di-bid**, dan funding mendingin.
- **Bacaan.** Turun-masuk-event + bid IV = pasar **ter-hedge / priced-in**. Base case: relief pas atau setelah print pas hedge unwind.
- **Rencana.** Lean **long masuk ke print, di-size kecil**, dan **ambil profit pada relief post-announcement** alih-alih nahan buat lebih. **Invalidasi** kalau (a) data-nya shock sebenarnya (tesis batal — minggir), atau (b) pasar sebenarnya *rally* masuk ke event (under-hedge — minggir; downside gak terlindungi). Selalu size buat ~20% di mana dia irasional.

**Bacaannya.** Kamu gak ngeforecast angka CPI; kamu baca bahwa pasar hedge buatnya (drift turun + bid IV) dan berposisi buat unwind. Disiplinnya di exit dan invalidasi: tutup pada relief, dan tolak trade pas pre-event tell absen atau shock nyata mendarat.

⟦Disclaimer: ilustratif, bukan rekomendasi. Pre-event drift udah meluruh; jangan pernah trade tanpa konfirmasi terkini dan risiko ketat.⟧`
      }
    },
    {
      id: 'applications',
      heading: { en: 'Applications', id: 'Aplikasi' },
      body: {
        en: `**A decision flow.** Market drifts **down + IV bid** into the event ⇒ hedged / priced-in ⇒ lean long, take profit on the relief. Market drifts **up** into it ⇒ under-hedged / fragile ⇒ caution or fade (downside unprotected). **Off-hours / weekend** event ⇒ repricing deferred ⇒ watch the CME open & gap for the real move. **Genuine data shock** ⇒ thesis void ⇒ stand aside; do not fight a real surprise.

**The data.** A macro calendar with exact date/time; the drift direction over the 1–3 days into the event; IV / funding behaviour (a rising IV bid confirms hedging); and the CME reopen after off-hours events.

**Composing with the rest.** The hedging being read here is the same dealer/protective-put hedging formalised in [dealer-hedging flows](item:husslin-dealer-flows) (the vol bid into the event is the vanna/charm and protective-put demand); the positioning cooling is read with [OI & positioning](item:husslin-oi-positioning); and the whole thing is the event-specific instance of the [parent framework](item:husslin-framework).

**Honest limits.** The flagship pre-FOMC drift has decayed (Kurov et al. 2021), so the unconditional version is dead; only the *conditional* (confirmed by drift + IV) is worth trading, and even then a genuine shock dominates everything. Pre-event-tell hit rates ("~80%") are practitioner estimates, not measured out-of-sample stats — treat them as priors to test in a journal.`,
        id: `**Decision flow.** Pasar drift **turun + bid IV** masuk ke event ⇒ ter-hedge / priced-in ⇒ lean long, ambil profit pada relief. Pasar drift **naik** masuk ⇒ under-hedge / rapuh ⇒ hati-hati atau fade (downside gak terlindungi). Event **luar-jam / akhir-pekan** ⇒ repricing ditunda ⇒ ngawasin CME open & gap buat gerakan sebenarnya. **Shock data sebenarnya** ⇒ tesis batal ⇒ minggir; jangan ngelawan kejutan nyata.

**Datanya.** Kalender makro dengan tanggal/waktu persis; arah drift over 1–3 hari masuk ke event; perilaku IV / funding (bid IV naik ngonfirmasi hedging); dan CME reopen setelah event luar-jam.

**Berpadu sama sisanya.** Hedging yang dibaca di sini itu hedging dealer/protective-put yang sama yang diformalin di [dealer-hedging flows](item:husslin-dealer-flows) (bid vol masuk ke event itu vanna/charm dan permintaan protective-put); positioning yang mendingin dibaca sama [OI & positioning](item:husslin-oi-positioning); dan seluruhnya itu instance spesifik-event dari [framework induk](item:husslin-framework).

**Batas jujur.** Pre-FOMC drift unggulan udah meluruh (Kurov dkk. 2021), jadi versi tanpa-syarat mati; cuma yang *kondisional* (dikonfirmasi drift + IV) yang layak di-trade, dan bahkan lalu shock sebenarnya mendominasi semuanya. Hit rate pre-event-tell ("~80%") itu estimasi praktisi, bukan statistik terukur out-of-sample — perlakukan sebagai prior buat dites di jurnal.`
      }
    },
    {
      id: 'practice',
      heading: { en: 'Practice', id: 'Latihan' },
      body: {
        en: `**1.** Why are scheduled events described as "hedging-flow events, not fundamental ones"?

<details><summary>Answer</summary>
Because the tradeable flow around a scheduled event is dominated by HEDGING and its unwind, not by the headline content. Large holders do not day-trade the number — they buy protection (puts/index hedges) into the event, which pushes price down and bids implied volatility beforehand, and they unwind that protection after the uncertainty clears, producing a relief rally ("sell the rumour, buy the news"). So most of the event is already priced by the hedging; the un-priced, tradeable part is the unwind. You trade the hedging cycle, not the fundamental surprise — which is why the pre-event drift exists at all.
</details>

**2.** State the pre-event tell and the two leans it implies.

<details><summary>Answer</summary>
The tell reads the hedging state from the drift INTO the event. DOWN into the event (especially with a rising IV bid) ⇒ the market is hedged / priced-in ⇒ the higher-EV lean is LONG (position before, take profit on the post-announcement relief as hedges unwind). UP into the event ⇒ the market is under-hedged / complacent / fragile ⇒ be cautious or fade, because the downside is unprotected and there is little protective flow to unwind. He estimates the down→long case works ~80% of the time [His], but it must be confirmed each time and sized for the ~20% failures.
</details>

**3.** What two situations invalidate the "lean long into a hedged event" trade?

<details><summary>Answer</summary>
(1) A GENUINE DATA SHOCK — if the event is a real surprise (not just resolution of priced-in uncertainty), the hedging-unwind thesis is void; you stand aside rather than fight a real move. (2) The market actually RALLIED into the event (up-drift, under-hedged) — then there is no protective flow to unwind and the downside is unprotected, so the setup is absent and you do not take it. Execution discipline adds a third guardrail: always close post-announcement (take the relief, don't hold), and for off-hours events wait for the CME reopen/gap where the real repricing happens.
</details>

**4.** Why must this trade be treated as regime-conditional rather than a reliable seasonal?

<details><summary>Answer</summary>
Because its flagship form, the pre-FOMC drift documented by Lucca & Moench (2015), largely FADED after ~2015 (Kurov et al. 2021) — the unconditional "buy before FOMC" edge decayed once it became well known and arbitraged. So the only defensible version is the conditional one: trade it only when the pre-event tell confirms (down-drift + IV bid), size for failure, and abandon it on a genuine shock. The practitioner hit-rate estimates are priors, not out-of-sample statistics. Treating a decayed seasonal as a constant is exactly how an edge becomes a loss; the discipline is to re-confirm and journal, not to assume.
</details>`,
        id: `**1.** Kenapa event terjadwal digambarkan sebagai "event hedging-flow, bukan fundamental"?

<details><summary>Jawaban</summary>
Karena flow yang bisa-ditradekan di sekitar event terjadwal didominasi HEDGING dan unwind-nya, bukan konten headline. Holder besar gak day-trade angka — mereka beli proteksi (put/hedge index) masuk ke event, yang ndorong harga turun dan nge-bid implied volatility sebelumnya, dan mereka unwind proteksi itu setelah ketidakpastian jelas, ngehasilin relief rally ("jual rumor, beli berita"). Jadi kebanyakan event udah ter-price sama hedging; bagian yang gak-ter-price, bisa-ditradekan itu unwind-nya. Kamu nge-trade siklus hedging, bukan kejutan fundamental — itu kenapa pre-event drift ada sama sekali.
</details>

**2.** Nyatain pre-event tell dan dua lean yang dia implikasiin.

<details><summary>Jawaban</summary>
Tell-nya baca state hedging dari drift MASUK ke event. TURUN masuk ke event (terutama dengan bid IV naik) ⇒ pasar ter-hedge / priced-in ⇒ lean EV-lebih-tinggi itu LONG (berposisi sebelum, ambil profit pada relief post-announcement pas hedge unwind). NAIK masuk ke event ⇒ pasar under-hedge / lengah / rapuh ⇒ hati-hati atau fade, karena downside gak terlindungi dan sedikit flow protektif buat di-unwind. Dia ngestimasi kasus turun→long berhasil ~80% waktu [His], tapi harus dikonfirmasi tiap kali dan di-size buat ~20% kegagalan.
</details>

**3.** Dua situasi apa yang nginvalidasi trade "lean long masuk ke event ter-hedge"?

<details><summary>Jawaban</summary>
(1) SHOCK DATA SEBENARNYA — kalau event-nya kejutan nyata (bukan cuma resolusi ketidakpastian yang priced-in), tesis hedging-unwind batal; kamu minggir alih-alih ngelawan gerakan nyata. (2) Pasar sebenarnya RALLY masuk ke event (drift-naik, under-hedge) — lalu gak ada flow protektif buat di-unwind dan downside gak terlindungi, jadi setup absen dan kamu gak ngambilnya. Disiplin eksekusi nambah guardrail ketiga: selalu tutup post-announcement (ambil relief, jangan tahan), dan buat event luar-jam tunggu CME reopen/gap di mana repricing sebenarnya terjadi.
</details>

**4.** Kenapa trade ini harus diperlakukan regime-conditional bukan seasonal yang andal?

<details><summary>Jawaban</summary>
Karena bentuk unggulannya, pre-FOMC drift yang didokumentasiin Lucca & Moench (2015), sebagian besar MEMUDAR setelah ~2015 (Kurov dkk. 2021) — edge tanpa-syarat "beli sebelum FOMC" meluruh begitu dia jadi terkenal dan ter-arbitrase. Jadi satu-satunya versi yang bisa-dipertahankan itu yang kondisional: trade cuma pas pre-event tell ngonfirmasi (drift-turun + bid IV), size buat kegagalan, dan tinggalin pas shock sebenarnya. Estimasi hit-rate praktisi itu prior, bukan statistik out-of-sample. Ngeperlakukan seasonal yang meluruh sebagai konstan itu persis gimana edge jadi loss; disiplinnya itu re-konfirmasi dan jurnal, bukan ngasumsi.
</details>`
      }
    },
    {
      id: 'connections',
      heading: { en: 'Connections', id: 'Koneksi' },
      body: {
        en: `- **Parent framework**: [The @Husslin_ framework](item:husslin-framework) — event trading is its scheduled-event special case (Part V).
- **The hedging being read**: [Dealer-hedging flows](item:husslin-dealer-flows) — the IV bid and protective-put hedging into an event are the same dealer Greeks; the unwind is the vanna/charm reversal.
- **Positioning into the event**: [OI & positioning](item:husslin-oi-positioning) — funding/positioning cooling confirms de-risking into the event.`,
        id: `- **Framework induk**: [Framework @Husslin_](item:husslin-framework) — event trading itu kasus khusus event-terjadwalnya (Part V).
- **Hedging yang dibaca**: [Dealer-hedging flows](item:husslin-dealer-flows) — bid IV dan hedging protective-put masuk ke event itu Greeks dealer yang sama; unwind-nya reversal vanna/charm.
- **Positioning masuk ke event**: [OI & positioning](item:husslin-oi-positioning) — funding/positioning yang mendingin ngonfirmasi de-risking masuk ke event.`
      }
    },
    {
      id: 'sources',
      heading: { en: 'Sources', id: 'Sumber' },
      body: {
        en: `Primary (practitioner): @Husslin_ "Event Trading" deep-dive + X/podcast. Compiled by Az; evidence-tagged; not financial advice.
- **Lucca & Moench** (2015). "The Pre-FOMC Announcement Drift." *Journal of Finance.* (Large pre-FOMC equity drift.)
- **Kurov, Halova Wolfe & Gilbert** (2021, Finance Research Letters 40). The pre-FOMC drift faded after ~2015 — [Regime-dependent].
- The down-into-event → long pre-event tell and the "~80%" hit-rate estimate are [His] / [Practitioner], to be journalled.`,
        id: `Primer (praktisi): deep-dive "Event Trading" @Husslin_ + X/podcast. Dikompilasi Az; evidence-tagged; bukan nasihat keuangan.
- **Lucca & Moench** (2015). "The Pre-FOMC Announcement Drift." *Journal of Finance.* (Drift ekuitas pre-FOMC besar.)
- **Kurov, Halova Wolfe & Gilbert** (2021, Finance Research Letters 40). Pre-FOMC drift memudar setelah ~2015 — [Regime-dependent].
- Pre-event tell turun-masuk-event → long dan estimasi hit-rate "~80%" itu [His] / [Practitioner], buat dijurnal.`
      }
    },
  ],

  audio: { enabled: true },

  selfTest: [
    {
      sectionId: 'intuition',
      question: { en: `Walk through the hedging cycle around a scheduled event and explain why "sell the rumour, buy the news" is mechanical here.`, id: `Jalanin siklus hedging di sekitar event terjadwal dan jelasin kenapa "jual rumor, beli berita" itu mekanis di sini.` },
      prompt: { en: 'Before continuing, try answering:', id: 'Sebelum lanjut, coba jawab:' },
      answer: {
        en: `Into the event, funds buy protection (puts / index hedges) — often too much — which is mechanical SELLING pressure on the underlying and a BID on implied volatility, so price drifts down and IV rises beforehand. When the event resolves and the uncertainty is gone, that protection is no longer needed and gets unwound — the hedges are bought back / sold off, reversing the flow into a RELIEF RALLY. So "sell the rumour" (weakness as hedges go on) and "buy the news" (relief as they come off) is not sentiment, it is the mechanical signature of the hedging-and-unwind cycle. The key conditionality: it only works if the market actually hedged — an under-hedged (up-drifting) market has no protective flow to unwind and an unprotected downside.`,
        id: `Masuk ke event, fund beli proteksi (put / hedge index) — sering terlalu banyak — yang itu tekanan JUAL mekanis pada underlying dan BID pada implied volatility, jadi harga drift turun dan IV naik sebelumnya. Pas event resolve dan ketidakpastian hilang, proteksi itu gak dibutuhin lagi dan di-unwind — hedge dibeli balik / dijual, ngebalikin flow jadi RELIEF RALLY. Jadi "jual rumor" (lemah pas hedge dipasang) dan "beli berita" (relief pas dilepas) bukan sentimen, itu sidik jari mekanis dari siklus hedging-dan-unwind. Kondisionalitas kunci: dia cuma berhasil kalau pasar beneran hedge — pasar under-hedge (drift-naik) gak punya flow protektif buat di-unwind dan downside gak terlindungi.`
      }
    },
    {
      sectionId: 'formalization',
      question: { en: `What is the pre-event tell, what does each direction imply, and what is the mandatory regime caveat?`, id: `Apa pre-event tell, apa yang tiap arah implikasiin, dan apa caveat regime yang wajib?` },
      prompt: { en: 'Before continuing, try answering:', id: 'Sebelum lanjut, coba jawab:' },
      answer: {
        en: `The pre-event tell reads the drift INTO the event as a proxy for the hedging state. DOWN into the event (ideally with a rising IV bid) ⇒ hedged/priced-in ⇒ lean LONG, positioned before and closed on the post-announcement relief. UP into the event ⇒ under-hedged/fragile ⇒ caution or fade (downside unprotected). The mandatory caveat: this is REGIME-CONDITIONAL — the canonical pre-FOMC drift (Lucca & Moench 2015) largely faded after ~2015 (Kurov et al. 2021), so the edge must be confirmed each time (drift + IV), sized for the ~20% (his estimate) where it fails, abandoned on a genuine data shock (thesis void), and journalled rather than assumed. A decayed seasonal traded as a constant is how the edge becomes a loss.`,
        id: `Pre-event tell baca drift MASUK ke event sebagai proxy state hedging. TURUN masuk ke event (idealnya dengan bid IV naik) ⇒ ter-hedge/priced-in ⇒ lean LONG, berposisi sebelum dan ditutup pada relief post-announcement. NAIK masuk ke event ⇒ under-hedge/rapuh ⇒ hati-hati atau fade (downside gak terlindungi). Caveat wajib: ini REGIME-CONDITIONAL — pre-FOMC drift kanonik (Lucca & Moench 2015) sebagian besar memudar setelah ~2015 (Kurov dkk. 2021), jadi edge harus dikonfirmasi tiap kali (drift + IV), di-size buat ~20% (estimasinya) di mana dia gagal, ditinggalin pada shock data sebenarnya (tesis batal), dan dijurnal bukan diasumsi. Seasonal yang meluruh di-trade sebagai konstan itu gimana edge jadi loss.`
      }
    },
    {
      sectionId: 'applications',
      question: { en: `How does event trading connect to dealer-hedging flows and positioning, and why is the "~80%" hit rate not to be taken at face value?`, id: `Gimana event trading nyambung ke dealer-hedging flows dan positioning, dan kenapa hit rate "~80%" gak boleh diterima mentah-mentah?` },
      prompt: { en: 'Before continuing, try answering:', id: 'Sebelum lanjut, coba jawab:' },
      answer: {
        en: `The hedging read in event trading IS dealer-flow analysis applied to a scheduled catalyst: the protective-put buying that drifts price down and bids IV into the event is the same dealer Greeks (the vol bid; the vanna/charm and protective-put demand), and the relief is the unwind of that hedging. Positioning (OI/funding cooling) corroborates the de-risking into the event. So event trading is the framework's three legs focused on one moment. The "~80%" hit rate is a PRACTITIONER ESTIMATE, not a measured out-of-sample statistic — it predates the documented decay of the pre-FOMC drift, depends on the conditional setup actually being present, and is exactly the kind of number that looks great until it is arbitraged away. Treat it as a prior to validate in your own journal, confirm the tell each time, and size for being wrong.`,
        id: `Bacaan hedging di event trading ITU analisis dealer-flow yang diterapin ke katalis terjadwal: beli protective-put yang nge-drift harga turun dan nge-bid IV masuk ke event itu Greeks dealer yang sama (bid vol; vanna/charm dan permintaan protective-put), dan relief-nya unwind hedging itu. Positioning (OI/funding mendingin) ngoroborasi de-risking masuk ke event. Jadi event trading itu tiga kaki framework difokusin ke satu momen. Hit rate "~80%" itu ESTIMASI PRAKTISI, bukan statistik out-of-sample terukur — dia mendahului decay terdokumentasi pre-FOMC drift, tergantung setup kondisional beneran ada, dan persis jenis angka yang keliatan bagus sampai ter-arbitrase. Perlakukan sebagai prior buat divalidasi di jurnal kamu sendiri, konfirmasi tell tiap kali, dan size buat salah.`
      }
    },
  ],
};
