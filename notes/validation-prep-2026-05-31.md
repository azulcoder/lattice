# Validation prep — 7 rich modules (2026-05-31)

**Purpose.** You chose *pause → validate → continue*. This is the scaffold for the **validate** step: a focused checklist so you can dogfood + native-ID-review the 7 rich modules and the draft cards efficiently, record findings inline, and hand them back. Then the flagged items get fixed in a batch and Phase B resumes (next queued: Avellaneda-Stoikov 2008).

**Why now.** All 7 modules pass automated + adversarial checks (861/861), but **none are *you*-validated.** The per-module audits kept finding real errors (6 in CKS, 6 in VPIN) — so a domain-expert read will too, especially on emphasis/pedagogy and Indonesian register, which automation can't judge.

**How to use.** Start the server, work module by module, and jot findings in the `→ FINDINGS` slots (or a scratch file). Don't fix anything yourself — just flag it; the fixes get applied in a batch afterward so the verification gate runs once.

```bash
cd ~/Code/lattice && python3 -m http.server 8765    # then open http://127.0.0.1:8765
```

Three tracks per module: **[D] dogfood/sanity** · **[ID] native-Indonesian read** · **[ST] self-test honesty** (answer cold, then reveal & rate).

---

## Priority order

1. **CKS 2014 + VPIN 2012** — newest, recently authored, ID layer never seen by a native speaker. Highest-value review.
2. **Acuña 2008** — your domain; also has the 12 draft seed cards + 3 open fact questions (below).
3. **GM, Kyle, O'Hara, Hasbrouck** — older, already partly reviewed; lighter pass.

---

## Per-module checklist

### 1. Cont-Kukanov-Stoikov 2014 — OFI  *(NEW)*
- **[D]** Worked example: a 4-event sequence → OFI = +100, then a 5-interval OLS (β̂ ≈ 0.0055, 1/β̂ ≈ 180, R² ≈ 0.97). Does the OFI sign-bookkeeping (the `e_n` rules) match how you think about book events? Is the "1/β̂ ∝ depth" framing intuitive?
- **[ID]** Read all 8 sections in ID. Flag translated-feeling passages. (Recently authored without native-speaker review — expect rough spots.)
- **[ST]** 4 self-tests.
- → FINDINGS:

### 2. Easley-López de Prado-O'Hara 2012 — VPIN  *(NEW)*
- **[D]** Worked example: 3 volume buckets → VPIN ≈ 0.41 via bulk volume classification. Sanity-check the "volume clock" + "toxicity" framing against your HFT intuition. **Key judgment call:** is the balance between the original flash-crash claim and the Andersen-Bondarenko rebuttal fair, or does it lean too hard either way?
- **[ID]** Read all 8 sections in ID. Flag non-native passages.
- **[ST]** 4 self-tests (esp. #4 on the AB critique).
- → FINDINGS:

### 3. Acuña 2008 — deliverability  *(your domain)*
- **[D]** The big one: run `AcunaDeliverabilitySim` against a **real Darajat well you know**. Compare baseline curve at your well's `p_rg`; toggle diagnostic mode; check Scenario A vs B signatures vs observed degradation. (Full 90-min scaffold still in [notes/g1-dogfood-prep-2026-05-28.md](g1-dogfood-prep-2026-05-28.md) §A, F.)
- **[ID]** §B1–B8 of the g1-dogfood doc pre-flagged suspicious ID passages — confirm/deny.
- **[ST]** 4 self-tests.
- **3 open fact questions (need your call):**
  - (a) **Darajat producing-well count** — module says "49 producing wells"; public sources say ~39. Which is right (or is 49 *total* wells)?
  - (b) **Case-2 scaling mineral** — audit changed "silica" → **calcite (CaCO₃)** to match Hernawan-Situmorang 2013. Confirm that matches your field knowledge.
  - (c) **C_WB √2 factor** between the 2008 and 2010 definitions — was asserted, couldn't be web-verified. Confirm or soften.
- → FINDINGS:

### 4. Glosten-Milgrom 1985
- **[D]** Run `GlostenMilgromBayesianSim`. Confirm the corrected martingale framing (μ_t, not the quote mid) reads clearly now.
- **[ID]** Read in ID; flag register issues.
- **[ST]** 4 self-tests (esp. #2 on the martingale).
- → FINDINGS:

### 5. Kyle 1985
- **[D]** No sim — sanity-check the worked example (x* = 16 as expected-profit maximizer; the "naive" benchmark wording).
- **[ID]** Read in ID.
- **[ST]** 4 self-tests.
- → FINDINGS:

### 6. O'Hara 1995
- **[D]** No sim — sanity-check the PIN worked example + the μ fraction-vs-rate clarification.
- **[ID]** Read in ID.
- **[ST]** 4 self-tests.
- → FINDINGS:

### 7. Hasbrouck 2007
- **[D]** Run `RollSpreadSim`. Confirm the relabeled "latent-flow persistence ρ" slider + the transaction-vs-mid-price correction read clearly.
- **[ID]** Read in ID.
- **[ST]** 4 self-tests.
- → FINDINGS:

---

## Draft SRS cards to review

- **12 draft Acuña cards** in [data/domains/geothermal/seed-cards.js](../data/domains/geothermal/seed-cards.js). These were authored conservatively from the module but the operational framings are your call. Flag any that are wrong, trivial, or mis-framed for a Darajat engineer.
- (Optional) skim the new **Kyle/GM/CKS/VPIN cards** in [microstructure/seed-cards.js](../data/domains/microstructure/seed-cards.js) for accuracy.
- → FINDINGS:

---

## After validation

Hand back the `→ FINDINGS`. Then: (1) apply all fixes in one batch, (2) re-run the 861-check suite + re-audit any module with substantive content changes, (3) commit as a `validation fixes` patch, then (4) resume Phase B authoring — **next queued: Avellaneda-Stoikov 2008** (the market-making quoter that consumes the OFI/VPIN toxicity signals), with the same audit cycle.

If a module comes back clean, even better — that's signal the authoring+audit pipeline is trustworthy enough to scale the remaining Phase-B papers (Almgren-Chriss, Makarov-Schoar, Aquilina-Budish-O'Neill) with confidence.
