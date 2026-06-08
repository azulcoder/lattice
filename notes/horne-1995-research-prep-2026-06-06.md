# Research prep — Horne (1995), *Modern Well Test Analysis* → geothermal PTA DRAFT

Status: **DRAFT prep, autonomous.** Geothermal is Az-authored; this factsheet + the
module are a starting point for Az's review, NOT finalized domain fact.
Date: 2026-06-06. Module: `data/domains/geothermal/content/horne-1995.js` (DRAFT).

## 1. Why this item / where it sits
- Catalog gap chosen by Az (2026-06-06): **well testing & pressure-transient analysis (PTA)** —
  the reservoir/production engineer's core diagnostic. Complements the existing
  `grant-bixley-2011` (reservoir engineering, has a well-test chapter) by making PTA
  its own focused module.
- Anchor reference: **Roland N. Horne, *Modern Well Test Analysis: A Computer-Aided
  Approach* (Petroway, 2nd ed. 1995)** — the standard PTA methodology text. Horne heads
  the **Stanford Geothermal Program**, so he bridges petroleum PTA and geothermal — a
  credible anchor distinct from Grant-Bixley. The module FRAMES PTA for geothermal and
  flags the geothermal-specific adaptations for Az.

## 2. Core PTA methodology (standard; high confidence)
- **Well test** = impose a known rate change (drawdown / buildup / injection / fall-off),
  measure p(t), invert for reservoir properties.
- **Line-source (Theis) solution** → infinite-acting radial flow → semilog straight line;
  slope m ∝ qμ/(kh) ⇒ **permeability-thickness kh** from the slope.
- **Horner buildup**: plot p_ws vs log((t_p+Δt)/Δt); slope → kh; extrapolate to Horner
  ratio = 1 → p* (≈ initial reservoir pressure).
- **Skin s**: near-well extra ΔP (damage +, stimulation −); from early-time offset.
- **Wellbore storage**: early unit-slope on log-log; must pass before radial line.
- **Bourdet pressure derivative** (dp/d ln t, log-log): flat = radial flow; diagnoses
  regimes (storage unit slope, faults/boundaries, dual porosity).

## 3. Geothermal-specific complications — ALL ⟦TODO-Az⟧ (domain judgment)
- **High T**: μ, compressibility vary strongly with temperature; isothermal petroleum
  assumptions need care. ⟦TODO-Az⟧
- **Two-phase near well**: pressure drop → flashing → two-phase zone (rel-perm, high
  compressibility). Horner plot shows TWO straight-line segments (single-phase far,
  two-phase near) → two mobilities + formation kh (Grant-Bixley, Garg, Pruess). ⟦TODO-Az⟧
- **Feedzone / fractured** reservoirs: production from discrete fractures, not homogeneous
  porous media → homogeneous-radial is an idealization; fractal/dual-porosity often fit
  better. ⟦TODO-Az⟧
- **Injection (cold-water) tests**: common in geothermal; thermal front + μ change ⇒
  injectivity ≠ productivity exactly. ⟦TODO-Az⟧
- **DRY STEAM / Darajat (vapour-dominated)** — the headline adaptation, needs Az:
  flow is compressible (pressure-squared / pseudo-pressure), the near-well story is
  condensation not flashing, and deliverability is the **Acuña** compressible relation,
  NOT the liquid productivity index. ⟦TODO-Az⟧ (links to `acuna-2008`).
- **Deliverability / output curves**: PTA gives kh + skin; output (mass vs WHP) is the
  production counterpart — dry-steam = Acuña. ⟦TODO-Az⟧

## 4. Open TODO-Az items (carried into the module header)
A. Headline: confirm the dry-steam (Darajat) PTA framing — compressible/pressure-squared,
   condensation near well, Acuña deliverability — vs the liquid/two-phase textbook story.
B. The two-phase Horner two-straight-line interpretation: verify the exact mobility
   definitions and which segment gives formation kh.
C. Field-unit constants in the kh and skin formulas (I use consistent SI / dimensionless
   forms; the book/field forms carry unit constants) — verify before teaching numbers.
D. Worked-example numbers are ILLUSTRATIVE placeholders — replace with a real Darajat
   buildup if Az wants.
E. Injection-test temperature correction for Darajat reinjection wells.
F. Seed cards DEFERRED until Az signs off (card-coverage exempt: geothermal + DRAFT marker).

## 5. Sources to verify (Az)
- Horne, R.N. (1995) *Modern Well Test Analysis: A Computer-Aided Approach*, 2nd ed.
- Grant & Bixley (2011) well-test chapters (already in catalog).
- Bourdet, D. (2002) *Well Test Analysis: The Use of Advanced Interpretation Models*.
- Garg & Pruess; Stanford Geothermal Workshop two-phase PTA papers.
- Acuña (2008) — dry-steam deliverability (catalog).
