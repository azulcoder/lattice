# Research prep — Sanyal, decline-curve analysis & geothermal reserves → DRAFT

Status: **DRAFT prep, autonomous.** Geothermal is Az-authored; this factsheet + the
module are a starting point for Az's review, NOT finalized domain fact.
Date: 2026-06-06. Module: `data/domains/geothermal/content/sanyal-2005.js` (DRAFT).

## 1. Why this item / where it sits
- 3rd of the four geothermal-DRAFT topics Az greenlit ("continue other three geothermal
  topics"). Closes the production loop: PTA (Horne) reads the well, reinjection/tracer
  (Axelsson) manages the field, **decline + reserves** asks *how much is there and how
  long will it last.*
- Anchor: **Subir K. Sanyal** (GeothermEx — VP Reservoir Engineering 1980, President
  1995), the leading authority on geothermal **resource capacity, reserves estimation,
  and sustainability**. Real anchor publication:
  - Sanyal, S.K. & Sarmiento, Z. (2005) "Booking Geothermal Energy Reserves."
    *Geothermal Resources Council Transactions* 29. (Reserve classification: proven /
    probable / possible.)
  - Sanyal, S.K. (2005) "Sustainability and renewability of geothermal power capacity."
    *Proc. World Geothermal Congress.*

## 2. Decline-curve analysis — backbone (standard; verified, fluid-neutral)
- **Arps (1945)** empirical rate–time decline. Master form:
  q(t) = q_i / (1 + b·D_i·t)^(1/b), where q_i = initial rate, D_i = initial decline
  rate, b = decline exponent (curvature):
  - **b = 0 → exponential**: q = q_i·e^(−D t); cumulative N_p = (q_i − q)/D. Constant
    fractional decline. Most conservative.
  - **0 < b < 1 → hyperbolic**: decline rate itself decreases over time.
  - **b = 1 → harmonic**: q = q_i/(1 + D_i t). Slowest decline.
- **Estimated Ultimate Recovery (EUR)**: integrate q(t) to an economic limit rate.
  Fit historical production → extrapolate → remaining reserves + field life.

## 3. Reserves / resource estimation — backbone (standard; verified, fluid-neutral)
- **Volumetric "stored-heat" / "heat-in-place"** (USGS Muffler & Cataldi 1978):
  Q = (ρc)_res · V · (T_res − T_ref), V = area × thickness, (ρc)_res the rock+fluid
  volumetric heat capacity. Recoverable electricity ≈ Q × recovery factor × conversion
  efficiency ÷ (plant life × capacity factor) → **MW capacity**.
- **Monte Carlo**: treat area, thickness, temperature, porosity, recovery factor as
  probability distributions → output a distribution of MW capacity → read **P90 / P50 /
  P10**. (Sanyal & Sarmiento map these to **proven / probable / possible** reserves.)
- **Decline analysis** complements volumetric for *mature* fields: once a field has
  produced for years, the production decline forecasts remaining reserves directly.
- Reserve units: geothermal "reserves" are typically expressed as **MW-for-N-years**
  (or MWe capacity), not barrels.

## 4. Geothermal/Darajat-specific complications — ALL ⟦TODO-Az⟧
- **Does Arps transfer?** Arps is an empirical *oil/gas* tool. Geothermal decline is
  often governed by *pressure* drawdown and *reinjection support*, and for dry steam by
  steam-rate / WHP decline — whether a clean Arps b-factor fits, and what it means
  physically, is a domain call. ⟦TODO-Az: headline.⟧
- **Recovery factor** for a vapour-dominated dry-steam field (Darajat) is field-specific
  and uncertain — it is the dominant lever in the volumetric estimate. ⟦TODO-Az⟧
- **Reinjection changes decline** (links to Axelsson) — pressure support flattens the
  curve; thermal breakthrough can steepen enthalpy decline. ⟦TODO-Az⟧
- **Deliverability link** — Acuña decomposes dry-steam well decline into wellbore vs
  reservoir; decline-curve analysis sits on top of that. ⟦TODO-Az⟧

## 5. Open TODO-Az items (carried into the module header)
A. Headline: whether/how Arps decline transfers to geothermal (pressure- and
   reinjection-governed; dry-steam steam-rate/WHP decline) vs the oil/gas original.
B. Darajat recovery factor and the volumetric heat-in-place assumptions.
C. How reinjection support (Axelsson) and Acuña deliverability modify the decline.
D. Worked-example numbers are ILLUSTRATIVE placeholders — replace with Darajat history.
E. Reserve units / classification convention used at Star Energy.
F. Seed cards DEFERRED until Az signs off (card-coverage exempt: geothermal + DRAFT marker).

## 6. Sources to verify (Az)
- Sanyal & Sarmiento (2005) "Booking Geothermal Energy Reserves," GRC Trans. 29.
- Sanyal (2005) sustainability/renewability of capacity, WGC.
- Arps, J.J. (1945) "Analysis of Decline Curves," Trans. AIME 160.
- Muffler, P. & Cataldi, R. (1978) "Methods for regional assessment of geothermal
  resources," Geothermics (USGS stored-heat method).
- Grant & Bixley (2011) decline + lumped-parameter chapters (catalog).
