# Audit findings — Finish Lattice v1 (2026-05-30)

Source: 12-dimension read-only audit. 63 raw findings produced at the review stage. The adversarial
verify stage dropped a number of items in its auto-confirmed tally (30), which **under-counted** —
notably it dropped ALL of Acuña, sims, harness, and completeness. The full set was recovered from the
audit log and deduplicated below. 2 raw findings were rejected as false-positive at verify (not listed).

Plan decided with owner: **Phase A (polish & lock current 5-module scope) first, then Phase B (expand).**
All "harness" below = the `node scripts/verify-all.mjs` 683-check suite. Re-run after every batch.

Legend: `[AUTO]` can be done autonomously · `[COLLAB]` needs one owner decision first · `[AZ]` irreducibly owner.

---

## TRACK 1 — BLOCKERS (a learner is taught something false, OR a runtime crash) — do first

- [ ] **B1 — GM martingale is taught wrong** `[AUTO]`
  `data/domains/microstructure/content/glosten-milgrom-1985.js` lines 181 & 220 (EN/ID) + self-test #2 lines 501–507.
  Text says the quote mid `m_t=(a_t+b_t)/2` is a martingale. It is NOT (off π=0.5). The martingale is
  `μ_t = π_t·V_H+(1−π_t)·V_L`. The simulator + its own B8 harness already encode the correct fact, so this
  is a content correction only. Fix: make the martingale claim refer to μ_t (mid only equals μ_t at π=0.5).

- [ ] **B2 — Hasbrouck worked example applies Roll to MID-price changes** `[AUTO]`
  `hasbrouck-2007.js` line 209 (EN) / 222 (ID). Roll's estimator needs TRANSACTION (trade-print) prices —
  mid-prices carry no bid-ask bounce. Contradicts the module's own derivation. Fix: "mid-price changes"
  → "transaction-price (trade-print) changes". Arithmetic (s≈0.113) unchanged.

- [ ] **B3 — `settings.ui` silently wiped on every load (CODE)** `[AUTO]`
  `data/shared/ai-config.js` `mergeWithDefaults` lines 49–70 returns only `{ai, appearance}` — drops `ui`.
  Run on every `load()` (storage.js:101) and every settings change (storage.js:230). Effect: self-test
  confidence + author-card open-state never persist. Fix: spread `...existingSettings` (or explicit
  `ui:{...}` passthrough) first; add `ui` to `defaultSettings()`. Add a regression check.

- [ ] **B4 — Glossary detail view crashes (CODE)** `[AUTO]`
  `js/reference.js` line 263 `findRelatedCards` does `term.term.toLowerCase()` but `term.term` became
  bilingual `{en,id}` in Phase 1.3 → TypeError, breaks the whole glossary-detail render. Line 169 See-also
  chip renders `[object Object]`. Fix: `pickLang(term.term, lang).text.toLowerCase()`; thread `lang` in.

- [ ] **B5 — Glosten endowed-chair title likely fabricated** `[AUTO, web-verify first]`
  `glosten-milgrom-1985.js` lines 8/9. "Colefax & Robert J. Berner Professor of Finance" → Columbia lists
  "S. Sloan Colt Professor of Banking & International Finance (Emeritus)". Verify, then fix both langs.

- [ ] **B6 — Glosten "AFA president (1999)" claim** `[AUTO, web-verify first]`
  `glosten-milgrom-1985.js` lines 16/21. 1999 AFA president was Hans R. Stoll. Verify; correct year or
  remove the presidency claim (substitute accurate role if any).

## TRACK 2 — DEFECTS (real error, localized)

- [ ] **D1 — GM worked example: "mid jumps to 103" but ask 105.5 + bid 100 = 102.75** `[AUTO]` gm L257 + ID. (103 is μ_1, not the mid.)
- [ ] **D2 — Glosten PhD year 1981 → 1980** `[AUTO, verify]` gm L16/21.
- [ ] **D3 — Kyle: x*=16 called "precise top"; realized peak (u=−3) is 17.5** `[AUTO]` kyle L235/258. Reframe to "maximizer of EXPECTED profit".
- [ ] **D4 — Kyle: marginal profit "(v−p)−λ" missing factor x** `[AUTO]` kyle L324/347 → "(v−p)−λx".
- [ ] **D5 — O'Hara self-test #3 uses μ=0.1 numbers for the μ=0.2 worked-example section** `[AUTO]` ohara L377–389. Retag to 'practice' OR rewrite to 0.6/0.692/0.771.
- [ ] **D6 — Acuña crossover p_f≈27 bara is wrong & impossible (>p_rg=26); true ≈22** `[AUTO]` acuna L231/262.
- [ ] **D7 — Acuña practice #3 asks to "show <20%" but decline is EXACTLY 20%** `[AUTO]` acuna L349/352/372/375. Reframe to exact proportionality.
- [ ] **D8 — storage `save()` has no try/catch — quota-exceeded throws after state mutated (CODE)** `[AUTO]` storage.js L108–110.
- [ ] **D9 — `onItemSelect` async race renders content under wrong header (CODE)** `[AUTO]` app.js L287–295. Guard `if (itemId !== App.selectedItemId) return;` after await.
- [ ] **D10 — audio: no `voiceschanged` warm-up → first utterance can use wrong-language voice (CODE)** `[AUTO]` audio.js L51–59,67–105.
- [ ] **D11 — harness S4 word-count throws uncaught TypeError on a missing body, aborting the run (CODE)** `[AUTO]` verify-content-schema.mjs L151. Guard with `isBilingual(s.body)`.

## TRACK 3 — INCONSISTENCIES

- [ ] **I1 — Kyle "naive" defined two incompatible ways (x* is both double and half)** `[AUTO]` kyle worked-ex vs practice/self-test.
- [ ] **I2 — Kyle-Obizhaeva "Econometrica" dated 2011; published 2016 (84(4),1345–1404)** `[AUTO, verify]` kyle L39,271/288.
- [ ] **I3 — Kyle "served on the Brady Commission" → he was staff, not a member** `[AUTO, verify]` kyle L16/17.
- [ ] **I4 — O'Hara: symbol μ silently shifts (GM fraction vs PIN arrival rate) in one section** `[AUTO]` ohara L92,122–124,161. Add a clause or distinct symbol.
- [ ] **I5 — Acuña affiliation line contradicts bio on Chevron dates** `[AUTO]` acuna L8/9 vs L16.
- [ ] **I6 — Acuña "silica scaling" → Hernawan-Situmorang 2013 documents CaCO₃/calcite** `[AUTO, verify; owner can confirm]` acuna L79/88.
- [ ] **I7 — GM uses α for informed fraction where notation.js / O'Hara / seed-cards use μ** `[AUTO]` add a one-line note in GM formalization (or reconcile in notation.js).
- [ ] **I8 — RESUME.md stale: "uncommitted" section + header commit (f24dace) + date (05-28)** `[AUTO]` RESUME.md L3,5,42–54. Tree is clean at 411dacf (05-30).
- [ ] **I9 — README v3 schema block wrong (masterEnabled/budgetMonthly/theme 'sepia'/cards-as-array)** `[AUTO]` README.md L333–345. ARCHITECTURE.md L155–166 has the correct shape.
- [ ] **I10 — STATUS.md wholesale stale (claims no GM, no geothermal, no Phase 1.7)** `[AUTO]` add "HISTORICAL — see RESUME.md" banner or delete.
- [ ] **I11 — ARCHITECTURE.md says self-test uses document-level delegation; code binds per-card** `[AUTO]` docs/ARCHITECTURE.md L428.
- [ ] **I12 — ARCHITECTURE.md says badge shows relative timestamp; it shows only the confidence label** `[AUTO]` L426.
- [ ] **I13 — PHASES.md still carries stale "~40%" Roll bias (README/CHANGELOG corrected to ~24% MC / −32% seed)** `[AUTO]` docs/PHASES.md L442.
- [ ] **I14 — Orphan glossary cross-ref: seeAlso 'stoll-model' has no defining entry** `[AUTO]` glossary.js L121,352. Add entry (Stoll 1978) or drop the slug.

## TRACK 4 — POLISH (low priority; batch at the end)

- [ ] P1 — Hasbrouck title "Professor of Business" → "Professor of Business Administration" `[AUTO]` L10/11.
- [ ] P2 — O'Hara "Microstructure in the Machine Age" italicized as a book; it's an RFS 2021 article `[AUTO]` L220/235.
- [ ] P3 — ARCHITECTURE §3.10 privacy wording imprecise for includeSettings=false `[AUTO]` L203.
- [ ] P4 — review.js dead no-op ternary `[AUTO]` js/review.js L127.
- [ ] P5 — audio.js docstring "math skipped" contradicts "read as equation" `[AUTO]` L8.
- [ ] P6 — reference.js `pickLang` returns un-trimmed string in non-empty branch `[AUTO]` L5–12.
- [ ] P7 — harness: 24× `check('S8', …, true)` placeholder that can never fail `[AUTO]` verify-content-schema.mjs L230.
- [ ] P8 — harness: R8 `isFinite(x)||isNaN(x)` near-tautology `[AUTO]` verify-roll-sim.mjs L234–250.
- [ ] P9 — harness: B4 "+0.05 slack" lets the asserted relation be violated `[AUTO]` verify-gm-sim.mjs L202–203.
- [ ] P10 — GM sim: V_L≥V_H guard mutates value without syncing slider readout `[AUTO]` viz.js L755–758.
- [ ] P11 — Acuña keyWorks 1995 title drops "the Study of" `[AUTO]` acuna L36.
- [ ] P12 — "builds toward" links land on thin catalog pages (soft UX) `[AUTO, optional]`.

## TRACK 5 — PENDING OWNER DECISION (then execute)

- [ ] **DC1 — Citation format.** GROUP A (Hasbrouck/O'Hara/Kyle): comma before volume, ASCII hyphen, no "pp.",
  no self-marker. GROUP B (GM/Acuña): no comma, en-dash, "pp.", "[THIS ITEM]" marker. Same GM 1985 paper
  cited both ways. **Recommend: normalize all 5 to Group A** + drop "[THIS ITEM]". (Also fixes gm-C6 dup.)
- [ ] **DC2 — SM-2 lapse behaviour.** Current variant does NOT decrement EF on a failed card (q<3) — intentional
  & documented, but deviates from canonical SM-2. **Recommend: keep + add explicit "deliberate deviation"
  note in ARCHITECTURE §5** (lower risk; behaviour already shipped). Override → match canonical.
- [ ] **DC3 — Roll slider ρ framing.** Slider drives the LATENT Gaussian AR(1); realized trade-sign autocorr is
  `(2/π)·arcsin(ρ)`, so `ŝ=s·|1−ρ|` doesn't reproduce on screen (code is correct & verified). **Recommend:
  relabel "latent-flow persistence" + one-sentence arcsine note** (keep code). Override → regenerate q as a
  true binary AR(1) so the slider equals the trade-sign autocorrelation.
- [ ] **DC4 — Seed cards (biggest SRS gap).** Only Hasbrouck+O'Hara have review cards; Kyle, GM, Acuña have
  none, and geothermal has no `seed-cards.js` at all (Review tab permanently empty). **Recommend: author
  Kyle+GM cards now (autonomous), scaffold `geothermal/seed-cards.js` + DRAFT Acuña cards for your review.**

## TRACK 6 — IRREDUCIBLY YOURS (needs-az; parallel lane, can only be scaffolded)

- [ ] **AZ1 — Acuña real-data dogfood** against a Darajat well you know (scaffold: notes/g1-dogfood-prep §A,F).
- [ ] **AZ2 — Native-Indonesian review** of all 5 modules' ID layer (only Acuña pre-flagged, notes §B1–B8).
- [ ] **AZ3 — Self-test honesty pass** — answer all 20 cold, rate whether they probe understanding (notes §C).
- [ ] **AZ4 — Geothermal authoring beyond Acuña** (9 catalog items) — go/no-go is yours.
- [ ] **AZ5 — Confirm Darajat facts:** producing-well count (module says 49; public ~39), the C_WB √2 factor,
  and the calcite-vs-silica call (I6).

---

### Suggested execution order (Phase A)
1. Owner answers DC1–DC4 (unblocks citation + seed cards + framing).
2. Web-verify the 5 disputed public facts (B5, B6, D2, I2, I3, I6) → then fix Track 1 + Track 2.
3. Track 3 (incl. citation normalization per DC1) + Track 4. Re-run harness after each file group.
4. Seed cards per DC4; add regression checks for B3, B4, D8, D9, D11.
5. Commit in logical groups; update CHANGELOG/PHASES/RESUME as we go.
6. Owner runs AZ1–AZ3 in parallel; AZ4/AZ5 gate Phase B.
7. Phase B (expansion: Cont-Kukanov-Stoikov 1.8 / Grant-Bixley G2) only after A signs off.
