# Research prep — Whiting & Ramey, material balance / lumped-parameter modelling → DRAFT

Status: **DRAFT prep, autonomous.** Geothermal is Az-authored; this factsheet + the
module are a starting point for Az's review, NOT finalized domain fact. Carries an
INTERACTIVE VISUALIZATION whose math is verified; the dry-steam balance is Az's.
Date: 2026-06-07. Module: `data/domains/geothermal/content/whiting-ramey-1969.js` (DRAFT).

## 1. Why this item / where it sits
- New geothermal-DRAFT topic on Az's "more topics with the best visualization" go. Fills
  a real gap (reservoir-scale forecasting / lumped modelling) AND is the first geothermal
  DRAFT to ship with an interactive simulator (the others were text-only; only the rich
  Acuña module had a viz).
- Anchor: **Whiting, R.L. & Ramey, H.J. Jr. (1969) "Application of Material and Energy
  Balances to Geothermal Steam Production," JPT 21(7), 893–900** — the paper that first
  brought petroleum material/energy-balance reservoir engineering to geothermal,
  demonstrated on Wairakei. Web-verified. Ramey = the Stanford reservoir-engineering
  figure whose program Horne later led (nice cross-link to the Horne PTA draft).

## 2. Verified, FLUID-NEUTRAL backbone (the simulator + the math taught)
- Single-tank lumped mass balance: **κ dp/dt = −W_p(1−f) + a(p0−p)**.
  - W_p production, f reinjection fraction, net withdrawal = W_p(1−f), a recharge coeff,
    κ storativity.
- Closed form: **p∞ = p0 − net/a**, **τ = κ/a**, **p(t) = p∞ + (p0−p∞)e^(−t/τ)**.
- Closed reservoir (a→0): linear decline p(t) = p0 − (net/κ)t (unsustainable / mined).
- Open reservoir (a>0): stabilises at p∞ (sustainable iff p∞ > economic pressure).
- Reinjection (f) lifts p∞ and the whole curve; does not change τ.
- **Simulator `LumpedReservoirSim` (js/viz.js)** plots this; **`verify-lumped-sim.mjs`
  (L1–L8, 30 checks)** confirms it against an independent RK4 integration + analytic
  properties (steady state, reinjection monotonicity, closed-linear limit, 1/e point).
  This is a NEW verification harness → suite 32 → 33 harnesses.

## 3. Geothermal/Darajat-specific — ALL ⟦TODO-Az⟧
- **HEADLINE — dry-steam steam material/energy balance.** Whiting-Ramey is a STEAM
  balance: as p falls, pore water boils and latent heat is mined from the rock, so the
  effective "storativity" is a steam/heat relationship, state-dependent — NOT the simple
  liquid κ in the interactive tank. The tank is an intuition scaffold; the Darajat
  balance is the steam version. ⟦TODO-Az⟧
- Real κ, a, recharge character (open vs closed) for Darajat; sim units illustrative
  (pressure in % of initial). ⟦TODO-Az⟧
- Coupling of f, decline (Sanyal), reinjection (Axelsson) for Darajat. ⟦TODO-Az⟧
- Anchor choice (Whiting-Ramey steam vs Axelsson/Sarak lumped-parameter) — drafting. ⟦TODO-Az⟧

## 4. Open TODO-Az items (carried into the module header) — A–E as in the module file.

## 5. Sources to verify (Az)
- Whiting & Ramey (1969) JPT 21(7), 893–900.
- Schilthuis (1936) petroleum material balance.
- Grant & Bixley (2011) lumped models (catalog).
- Axelsson (1989) lumped-parameter pressure-response modelling.
- O'Sullivan-Pruess-Lippmann (2001) distributed simulation (catalog).
