# G1 (Acuña) dogfood preparation — 2026-05-28

Pre-session artifact prepared for Az's 90-min Acuña dogfood evaluation. Compiled with best and extra effort within categorical limits (cannot evaluate operational intuition, cannot judge native ID quality — those require Az's tacit knowledge by definition).

Goal: pre-load Az's evaluation session so tacit knowledge is spent on irreducible parts.

**Version history:**
- v1 (2026-05-28 09:26) — initial drop, identified D1 (negative-skin bug) + D2 (worked-example claim hedge) + D3-D6 deferred
- v2 (2026-05-28 post-G1.2) — D1 + D2 patched in commit `f24dace`. Self-check ran 80/80 non-stale claims match live solver. Tables below show **post-G1.2 verified values**. Stale pre-G1.2 entries explicitly marked.

**Verification stamp:** every numerical claim in Sections A1-A9 has been cross-checked against the live `solveAcunaW` function in [js/viz.js](js/viz.js) as of post-G1.2 (commit f24dace). Use these tables as ground truth for the dogfood comparison.

---

## A. Solver behavior characterization

Programmatic exploration of `solveAcunaW(p_rg, p_f, C_WB, PI, skin)` across realistic Darajat parameter ranges. Use these tables to compare against your operational intuition during the dogfood.

### A1. Baseline curve at default params (P_rg=30, C_WB=1.85, PI=0.45, S=0)

| P_f (bara) | W (kg/s) | dW/dP_f (kg/s per bara) |
|---:|---:|---:|
|  0 | 39.65 |    — |
|  2 | 39.54 | -0.058 |
|  4 | 39.18 | -0.176 |
|  6 | 38.59 | -0.296 |
|  8 | 37.76 | -0.419 |
| 10 | 36.66 | -0.548 |
| 12 | 35.29 | -0.685 |
| 14 | 33.63 | -0.832 |
| 16 | 31.64 | -0.994 |
| 18 | 29.29 | -1.176 |
| 20 | 26.51 | -1.386 |
| 22 | 23.24 | -1.638 |
| 24 | 19.33 | -1.953 |
| 26 | 14.57 | -2.379 |
| 28 | 8.53 | -3.023 |

Slope curvature: |dW/dP_f| accelerates as P_f → P_rg. Concave-down throughout. Standard output curve shape.

**Compare against:** what a real Darajat well's $W$-vs-$p_f$ curve looks like in operational data. Should the curve at $p_f = 18$ predict ~29 kg/s for a well producing ~40 kg/s AOF? If your real wells suggest the curve falls off faster (or slower) near the high-$p_f$ end, that's a simulator-physics gap.

### A2. AOF sensitivity to P_rg (C_WB=1.85, PI=0.45, S=0)

| P_rg (bara) | AOF (kg/s) | % change from P_rg=30 |
|---:|---:|---:|
| 20 | 22.59 | -43.0% |
| 22 | 25.91 | -34.7% |
| 25 | 30.99 | -21.8% |
| 27 | 34.43 | -13.2% |
| 30 | 39.65 | 0.0% |
| 32 | 43.16 | 8.9% |
| 35 | 48.47 | 22.2% |
| 37 | 52.03 | 31.2% |
| 40 | 57.39 | 44.7% |

Roughly linear over typical Darajat range. **Operational check:** a 5 bara P_rg decline (which a mature field can see over years) yields ~30% AOF reduction at fixed C_WB/PI. Does that match what you see in declining-P_rg fields?

### A3. AOF sensitivity to C_WB (P_rg=30, PI=0.45, S=0)

| C_WB | AOF | % change |
|---:|---:|---:|
| 0.40 | 11.14 | -71.9% |
| 0.70 | 18.45 | -53.5% |
| 1.00 | 24.95 | -37.1% |
| 1.30 | 30.73 | -22.5% |
| 1.60 | 35.84 |  -9.6% |
| 1.85 | 39.65 |  0.0% |
| 2.10 | 43.10 |   8.7% |
| 2.40 | 46.79 |  18.0% |

Concave: AOF scales sub-linearly with C_WB (the closed form has sqrt(C_WB²·...) which approaches linearity, but the B = C_WB²·ν/PI term in the denominator dampens at high C_WB). **Compare:** does halving C_WB on a real well give ~50% AOF reduction in your data? Wayang Windu Case-1 had tie-back from C_WB 2.174 → 1.665 (76.6% of original); see A9 below for what the simulator predicts.

### A4. AOF sensitivity to PI (P_rg=30, C_WB=1.85, S=0)

| PI | AOF | % change |
|---:|---:|---:|
| 0.15 | 22.54 | -43.1% |
| 0.25 | 30.98 | -21.9% |
| 0.35 | 36.20 |  -8.7% |
| 0.45 | 39.65 |   0.0% |
| 0.55 | 42.08 |   6.1% |
| 0.65 | 43.88 |  10.7% |
| 0.75 | 45.25 |  14.1% |
| 0.80 | 45.83 |  15.6% |

**Highly asymmetric** sensitivity — PI degradation hurts much more than PI improvement helps. PI 0.45 → 0.15 (67% drop) → 43% AOF reduction. PI 0.45 → 0.80 (78% gain) → only 15.6% AOF gain. This is because as PI grows large, the wellbore eventually limits flow (you get diminishing returns from infinitely-good formation if wellbore can't move it).

**Operational check:** if you've seen wells where formation reservoir engineering (e.g., reinjection re-management) doubled PI but only modestly improved deliverability, that's the asymmetry showing up. If real data suggests PI improvements have bigger payoff than the table predicts, the ν_rg=5 constant is too small (formation-side too dominant in the model).

### A5. AOF sensitivity to skin (P_rg=30, C_WB=1.85, PI=0.45) — POST-G1.2 VALUES

| S | AOF (kg/s) | % change from S=0 | regime |
|---:|---:|---:|:---|
| -5 | 51.48 | +29.8% | strongly stimulated |
| -3 | 46.30 | +16.8% | moderately stimulated |
| -2 | 43.94 | +10.8% | mildly stimulated |
| -1 | 41.73 |  +5.2% | slight stimulation |
|  0 | 39.65 |   0.0% | baseline (no skin) |
|  1 | 37.71 |  -4.9% | mild damage |
|  3 | 34.21 | -13.7% | moderate damage |
|  5 | 31.16 | -21.4% | substantial damage |
|  8 | 27.30 | -31.1% | heavy damage |
| 12 | 23.25 | -41.4% | severe damage |
| 15 | 20.83 | -47.5% | very severe damage |

Note: S < -5.9 is clamped (PI_eff would blow up). S = -10, -50, -100 all produce same AOF as S = -5.908.

**G1.2 history:** pre-G1.2 the solver clamped S<0 to S=0 via `Math.max(0, skin)`, AND used a simplified formula `PI / (1 + S/ln(r_e/r_w))` instead of paper's exact Eq 6. Both fixed in commit `f24dace`. Post-fix uses `PI · (ln(r_e/r_w) - 0.5) / (ln(r_e/r_w) - 0.5 + S)` with S clamped to >= -5.9. See [js/viz.js:355-368](js/viz.js#L355-L368).

For comparison, pre-G1.2 values (now stale, kept for history):
- S=-3: 39.65 (clamped, **bug**) → post-G1.2: 46.30 ✓
- S=-2: 39.65 (clamped, **bug**) → post-G1.2: 43.94 ✓
- S=-1: 39.65 (clamped, **bug**) → post-G1.2: 41.73 ✓
- S=+1: 37.85 (simplified) → post-G1.2: 37.71 (exact, -0.14)
- S=+5: 31.68 (simplified) → post-G1.2: 31.16 (exact, -0.52)
- S=+15: 21.65 (simplified) → post-G1.2: 20.83 (exact, -0.82)

Positive-skin values shifted by ~0.1-0.8 kg/s due to formula correction — small but measurable.

### A6. Diagnostic signatures — Scenario A (C_WB×0.5) vs Scenario B (PI×0.6) by P_f

| P_f | base | A | drop% | B | drop% | who_drops_more |
|---:|---:|---:|---:|---:|---:|:---|
|  0 | 39.65 | 23.40 | 41% | 32.22 | 19% | A (wellbore) |
|  5 | 38.92 | 23.02 | 41% | 31.55 | 19% | A (wellbore) |
| 10 | 36.66 | 21.84 | 40% | 29.48 | 20% | A (wellbore) |
| 15 | 32.67 | 19.74 | 40% | 25.88 | 21% | A (wellbore) |
| 20 | 26.51 | 16.47 | 38% | 20.42 | 23% | A (wellbore) |
| 25 | 17.08 | 11.31 | 34% | 12.42 | 27% | A (wellbore) |
| 28 | 8.53 |  6.29 | 26% |  5.74 | 33% | **B (formation)** |

### A7. Crossover P_f

The point where Scenario B (formation problem) starts dropping more than Scenario A (wellbore problem) in relative terms is **P_f = 26.90 bara** — i.e., very close to P_rg = 30.

**Diagnostic implication:** Az, this is concerning. The Acuña framework's central claim is that wellbore-vs-formation problems show *visually distinct signatures at opposite ends of the output curve*. The simulator confirms wellbore problem dominates at low P_f (where the curve falls steeply), but only confirms formation problem dominates at extremely high P_f (P_f > 26.9 bara, very near P_rg) — i.e., at the low-flow tail where the well is barely producing.

In realistic operational scenarios where wells are choked to P_f = 10–18 bara, **scenario A drops dominate at both ends**. The diagnostic visual signature is real but its operational visibility may be weaker than the worked-example narrative implies.

Two interpretations:
1. The ν_rg = 5 illustrative constant is masking the diagnostic. With realistic ν_rg the formation regime extends to lower P_f and the crossover happens at more operationally-relevant pressure.
2. The framework's diagnostic claim is genuinely subtle and the simulator correctly conveys this — visible diagnostic signature requires testing at multiple P_f including the high-P_f end.

This is the kind of finding that would inform the "scale or refine" decision.

### A8. Edge cases (defensive behavior) — POST-G1.2 VALUES

| Case | Returns | Notes |
|---|---:|---|
| C_WB=0.4 (very low), P_f=0 | 11.14 | OK |
| PI=0.15 (very low), P_f=0 | 22.54 | OK |
| S=15 (very high), P_f=0 | 20.83 | OK (was 21.65 pre-G1.2 simplified formula) |
| S=-3 (stim), P_f=0 | 46.30 | ✓ Post-G1.2 — stimulated well now produces enhanced flow (was 39.65 buggy) |
| S=-10 (extreme stim) | 54.04 | OK — clamped at S = -5.9 |
| P_rg=15, P_f=20 (above res) | 0 | Correct |
| P_rg=15, P_f=14.999 (just under) | 0.0027 | OK, very small but positive |
| All zeros | 0 | Correct |
| Negative P_rg | 0 | Defensive (impossible input handled) |

Edge-case handling is clean. No NaN, no infinities, no negative flow returned. Negative-skin bug from pre-G1.2 fully resolved.

### A9. Hernawan-Situmorang 2013 Wayang Windu Case-1 sanity check

Reported: tie-back workover took C_WB from 2.174 to 1.665. Ratio: 0.766.

Simulator at C_WB=2.174 (pre, defaulting P_rg=30, PI=0.45, S=0): AOF = **44.05 kg/s**
Simulator at C_WB=1.665 (post): AOF = **36.87 kg/s**
Predicted reduction: **16.3%**

This is the only public benchmark I have to compare the simulator against. Hernawan-Situmorang doesn't report AOF directly so we can't validate the 44 → 37 absolute prediction, but the 16.3% reduction is roughly in the right ballpark for a 24% C_WB drop (concave AOF/C_WB relationship per A3).

**If you have access to actual Wayang Windu post-tie-back deliverability test data**, that would be the strongest test: set the simulator to the pre-workover C_WB and P_rg, fit PI, then compare the predicted post-workover deliverability curve at the new C_WB to the actually-observed curve.

---

## B. ID layer self-audit

Section-by-section concerns about Indonesian register. These are passages where I (the original author) suspect non-native or awkward phrasing. Your native-speaker judgment overrides mine for everything below.

### B1. Motivation section (lines 56-62)

**Passage concern:** *"Sebelum tiga dekade setelah Grant, Donaldson, dan Bixley (1982), standard deliverability equation $W = C_0(p_{si}^2 - p_f^2)^n$ nge-lump kedua effect jadi dua empirical fit constant."*

- "nge-lump" is a forced Indonesian-prefix-on-English-verb construction. Real Indonesian register might say "lumping" preserved English, or "nge-bundle" (slightly more idiomatic), or "lumped" (just preserved fully).
- "Sebelum tiga dekade setelah" — "before three decades after" is literal translation. More natural: "Selama tiga dekade setelah..."

**Verdict:** B1 likely needs ID rephrasing.

### B2. Intuition section (lines 71-77)

**Passage concern:** *"di-karakteristikin sama"* appears twice describing C_WB and PI characterization.

- "di-karakteristikin" — slangy nominalization. Native register might use "dicirikan oleh" (more standard) or "ditandai sama" (more casual). The "-in" suffix on -kan is informal Indonesian which works for the audience, but consistency check needed.

### B3. Formalization section (lines 138-178)

**Passage concern (lines 144-148):** The gravity correction explanation paragraph. After G1.1 patch this is now:

> *"— factor $(p_{wf} + p_f)/2$ itu pressure rata-rata di sepanjang column, yang dikombinasi sama $\rho \approx Cp$ ngehasilin average column density times $gH$."*

- "yang dikombinasi sama" — "which combined with" — natural enough, but "sama" might be too casual for technical math prose. Compare: "dipadukan dengan" (formal), "digabung sama" (casual), "dikombinasi sama" (your current).
- "average column density times $gH$" — left fully in English mid-Indonesian sentence. Per README guide this is the right move for technical terms, but the prepositional phrase "times" untranslated might feel jarring. Alternative: "menghasilkan average column density · $gH$" (use math symbol).

**Passage concern (line 174):** The boxed quadratic solution. Mostly fine but: *"Positive root (yang physically meaningful):"* — "physically meaningful" untranslated. Standard practice in your README guide allows this for technical terms, but check if Indonesian RE community would actually say this or use "yang punya makna fisik" or similar.

**Passage concern (line 178):** *"Kenapa ini penting operationally."* — heading-style "operationally" preserved English. Common in Indonesian technical writing but consistency-check: does the rest of the doc preserve adverbs like this or translate them?

### B4. Worked example (lines 230-258)

**Generally cleaner ID register** — operational scenarios narrate well in Indonesian. Specific concerns:

- Line 250: *"Production sample catcher nunjukin CaCO₃ sama silica precipitation."* — "nunjukin" (casual contraction of "menunjukkan") is appropriate for the casual register, but "sama silica precipitation" — "sama" used as "and" is colloquial. Compare: "dan silica precipitation" (more standard mix).
- Line 254: *"Roughly 40% reduction di $PI$."* — "di" used as "in" is borderline. "Reduction" preserved EN, "$PI$" math, "di" Indonesian preposition. Pure switching is OK but "Roughly 40% reduction" mid-sentence feels English-clause within Indonesian-sentence. Check if "Reduksi sekitar 40% di $PI$" reads better.

### B5. Applications section (lines 296-324)

**Heaviest technical density section, highest concern.** Three sub-personas with dense terminology.

- Field reservoir engineer paragraph (lines 308-316): uses "pull data" / "fit Eq" / "auto-flag" / "drift" — heavy English terms preserved. Your G1.1 patch made the threshold hedge ("10–20% over 90 hari") which reads natural in ID.
- "scaling diagnostic" (line 316) — left English. Should be? Indonesian RE might say "diagnostic scaling" (compound English) or "diagnostic kerak" (semi-translation) or "diagnosa scaling" (mix). Az to decide.
- "downhole video" / "sample catcher" / "tie-back" / "workover" / "AOF uplift" — all preserved English per README guide. Should be fine but spot-check consistency.

### B6. Practice section (lines 356-378)

The math problem statements should be cleaner since they're shorter and more procedural. Spot-check:

- Line 362: *"Field evidence apa yang akan strengthen tiap diagnosis?"* — "yang akan strengthen" — Indonesian relative + English verb. Compare: "yang akan memperkuat" (Indonesian) or "yang akan strengthen" (mix) — depends on whether "strengthen" is an Indonesian RE technical idiom.

### B7. Connections + Sources (lines 391-410)

Mostly bullet-list format with cross-references. ID register here is straightforward but check item-link syntax `[Grant & Bixley 2011](item:grant-bixley-2011)` renders correctly in the app (verified earlier but worth confirming during dogfood).

### B8. Self-tests (lines 417-477)

**Highest-density technical Indonesian.** Each self-test answer is a paragraph of detailed reasoning. Specific concerns:

- ST2 (formalization, line 444-446) — derivation prose explaining compressible flow physics. "ngehasilin pressure-squared form" — Indonesian verb + English noun phrase. Check naturalness.
- ST3 (worked-example, line 458-460) — long answer about additional measurements. "downhole video atau caliper log" — naturally mixed.
- ST4 (applications, line 466-473) — surveillance pipeline design. "Build surveillance pipeline di tiga tier" — "Build" preserved EN as verb. Compare: "Bangun surveillance pipeline" (Indonesian verb, used in your final commit version).

---

## C. Self-test pedagogical re-review

Critical evaluation of each Acuña self-test. Goal: identify weak self-tests for revision, document the strong ones.

### ST1 (intuition section): "Why does wellbore scaling show signature most strongly at high flow / low P_f?"

**Pedagogical strength:** Strong. Probes the central physics intuition that distinguishes wellbore from formation problems — the asymmetric P_f-sensitivity. Answer correctly invokes friction loss ∝ velocity² and the pressure-squared structure.

**Weakness:** The answer is long. Could be tightened. Maybe 60% of the prose can go.

**Verdict:** Keep, possibly compress.

### ST2 (formalization section): "Trace why wellbore equation is square-root form"

**Pedagogical strength:** Strong. Requires actual mechanical-engineering reasoning about compressible flow density variation. The Weymouth/Panhandle pipeline-equation reference is a nice cross-domain anchor for someone with petroleum-engineering background.

**Weakness:** The derivation in the answer is dense. A reader who can follow it probably didn't need the self-test; a reader who needed the self-test may not follow the derivation.

**Verdict:** Keep. Acknowledge as advanced-level self-test, not for everyone.

### ST3 (worked-example section): "What additional field measurements discriminate wellbore vs formation hypothesis?"

**Pedagogical strength:** Operationally grounded. Answer lists concrete measurements (mineralogy, downhole video, PTA, tracers, geochemistry). Useful as a learning checklist.

**Weakness:** Question is essentially asking "what do you do in operations" — the answer is more of a recitation than a derivation. For someone with field experience, answer is obvious; for someone without, the answer is a list to memorize rather than reason out.

**Verdict:** Consider sharpening. Better question might be: "Given a specific observation (e.g., sample catcher shows CaCO₃ but C_WB is stable), what does that combination tell you and what's the next diagnostic step?" — more case-based.

### ST4 (applications section): "Design 49-well surveillance pipeline"

**Pedagogical strength:** Open-ended design question. Answer demonstrates three-tier pipeline (automated daily, automated weekly alerts, RE weekly review) with concrete thresholds.

**Weakness:** The answer is heavily prescriptive — "Tier 1: do X, Tier 2: do Y" — without explaining the design trade-offs. Doesn't teach reasoning about WHY tier 2 should be automated vs. RE-team-driven; just states it. Also: the specific tier 2 thresholds (now hedged after G1.1) leave the pedagogical claim ambiguous — the answer says "common practice" but a learner reading this doesn't get a principled answer.

**Verdict:** Consider restructuring. Move from prescriptive "do this" to comparative "given these trade-offs, what would you choose and why?" — better Wozniak design.

---

## D. G1.2 candidate patch list

Concrete fixes that may emerge from the dogfood evaluation. Each is single-line or paragraph-scope, no structural rewrite.

### D1. ✅ FIXED in commit `f24dace` — Negative skin support

**Location:** [js/viz.js:355-368](js/viz.js#L355-L368) `solveAcunaW` function.

**Was (pre-G1.2):** `PI_eff = PI / (1 + Math.max(0, skin) / Math.log(1000))` — clamped S<0 to S=0 AND used simplified formula.

**Now (post-G1.2):**
```js
const nu_rg = 5.0;
const skinDenom = Math.log(1000) - 0.5;  // ≈ 6.408, baseline Eq 6 denominator
const skinClamped = Math.max(skin, -(skinDenom - 0.5));  // prevent PI_eff blow-up
const PI_eff = PI * skinDenom / (skinDenom + skinClamped);
```

Paper Eq 6 exact form. Negative skin now correctly produces PI_eff > PI (stimulated well behavior). S clamped to >= -5.9 to prevent PI_eff blow-up at extreme stimulation. Self-check confirms S=-3 → AOF 46.30 (16.8% increase), monotonicity holds across [-5, 15], S=0 still 39.65 baseline.

### D2. ✅ FIXED in commit `f24dace` — Worked example diagnostic-signature claim hedge

**Location:** [data/domains/geothermal/content/acuna-2008.js](data/domains/geothermal/content/acuna-2008.js) worked-example section.

**Was (pre-G1.2):** *"two failure modes have visually distinct signatures"* — true but understated how subtle the operational distinction is.

**Now (post-G1.2):** Added EN + ID paragraph acknowledging the A7 crossover finding (P_f ≈ 27 bara) and noting that in operational p_f range (8-18 bara), wellbore-problem effects dominate at both ends. Diagnostic distinction is real but operational visibility is sharpest when test spans up to high-p_f tail near p_rg. Practical lesson: test design matters — moderate-throttle-only sample points may underestimate formation-side decline.

### D3. (MEDIUM, only if A9 doesn't match) Wayang Windu sanity check

If your real Wayang Windu Case-1 post-tie-back data doesn't match the simulator's 16.3% AOF reduction prediction at the reported C_WB ratio, that's evidence for refining the ν_rg constant or unit system. Specifically:
- Recompute the constant ν_rg that would reproduce the observed post-tie-back deliverability
- Document the calibration in the formalization section
- Update simulator to use the calibrated constant

### D4. (LOW) ST3 sharpening per C above

Restructure ST3 self-test from "list measurements" to "given combination of observations, identify next diagnostic step."

### D5. (LOW) ST4 design-question restructuring

Move from prescriptive answer to comparative trade-off framing.

### D6. (LOW-OPTIONAL) ν_rg illustrative-vs-realistic toggle

Add a "research mode" toggle to the simulator that uses paper-realistic ν_rg from steam tables instead of the illustrative ν_rg=5. Lets advanced users see how the simulator behaves with physical-grade values. Default stays illustrative for educational clarity.

---

## E. Scale-or-refine decision scaffold

Decision flowchart for after your dogfood:

```
After Acuña dogfood, you have findings on:
  (a) Solver matches operational intuition? [yes/no]
  (b) ID register native enough? [yes/no/partial]
  (c) Self-tests usefully probe understanding? [yes/no/partial]

Decision rules:

  (a=YES, b=YES, c=YES) → "Pattern is solid"
    → Phase G2: Grant-Bixley 2011 next (canonical complement)
    → Continue under reading-driven discipline
    → Apply lessons from Acuña to Grant-Bixley authoring

  (a=YES, b=YES, c=PARTIAL) → "Mostly solid, minor self-test work"
    → Phase G1.2 patch (D1-D5 selectively)
    → Then G2

  (a=YES, b=PARTIAL or NO, c=any) → "ID register needs work"
    → Phase G1.2 ID layer pass (you draft fixes, I execute)
    → Then re-evaluate before G2

  (a=PARTIAL, b=any, c=any) → "Solver close but not quite"
    → Phase G1.2 patch with D1 (negative skin bug) + D2 (claim hedge)
    → Then second dogfood pass
    → Then G2 if satisfied

  (a=NO, ...) → "Solver needs rework"
    → Pause new content
    → Refactor solver: realistic ν_rg, calibrate against Wayang Windu data,
      add real-data input mode
    → This is bigger scope, plan carefully

(a=NO often co-occurs with high concern in operational claims like the
worked-example numbers, threshold values, or operational decision tree.
Note specific failures and we'll address them carefully.)
```

The decision is yours — this scaffold just gives you the if/then for the most likely outcomes.

---

## F. The irreducible part — what only you can do

For completeness, here's what this prep file *cannot* substitute for:

1. **Compare simulator output to a real Darajat well's known deliverability curve.** No external data substitutes for your tacit operational baseline. The A1-A9 tables above are useful for the comparison but you have to make the comparison.

2. **Read the ID body text and assess native quality.** B1-B8 above are my best self-flags but I am the source of any non-native phrasing. You're the judge.

3. **Try the self-tests as a learner (without looking at answers).** Did you actually have to think? C above predicts pedagogical strength but can't substitute for the experience of taking them.

4. **Make the scale-or-refine decision.** E above gives you the framework. The decision itself is yours.

5. **(Optional) Pull a real declining well's $(W, p_f)$ history and try fitting Acuña parameters via least-squares.** Practice #4 invites this. If you have the data and time, the most powerful possible validation.

Expected duration: 60-90 minutes if you use this prep file. Without it, probably 2+ hours.

---

## G. Reference summary (post-G1.2)

- Verified math: posterior + spread formulas at default params match paper Eq exactly (G1 verification, 121/121 pass + G1.2 self-check 80/80 non-stale claims)
- Code locations:
  - Solver: [js/viz.js:355-368](js/viz.js#L355-L368) (post-G1.2 paper-exact Eq 6 form)
  - Component: [js/viz.js:370-585](js/viz.js#L370-L585)
  - Content: [data/domains/geothermal/content/acuna-2008.js](data/domains/geothermal/content/acuna-2008.js)
- **D1 — FIXED** (commit f24dace): negative-skin bug resolved + formula upgraded to paper-exact Eq 6. Live behavior verified across [-5, 15] skin range.
- **D2 — FIXED** (commit f24dace): worked-example diagnostic-signature claim hedged with A7 crossover finding.
- **Most operational finding**: A7 (crossover P_f = 26.90 bara). Diagnostic claim is real but operational visibility is sharpest in the high-P_f tail near P_rg.
- **What remains pending Az**: B (ID register), C (self-test pedagogy), D3-D6 (deferred enhancements), Sections F (irreducible operational-intuition + native-judgment items)
- **Reading recommendation order** post-G1.2: jump straight to F to know what's irreducibly yours. Then A6/A7 in browser to see the diagnostic signature live. Then B at your pace for ID review.

Standing by for your dogfood findings.
