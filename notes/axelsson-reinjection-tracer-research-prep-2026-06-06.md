# Research prep — Axelsson, geothermal reinjection & tracer testing → DRAFT

Status: **DRAFT prep, autonomous.** Geothermal is Az-authored; this factsheet + the
module are a starting point for Az's review, NOT finalized domain fact.
Date: 2026-06-06. Module: `data/domains/geothermal/content/axelsson-2010.js` (DRAFT).

## 1. Why this item / where it sits
- One of the three remaining geothermal topics Az greenlit (2026-06-06, "continue
  other three geothermal topics") after the Horne PTA draft (G10). Pairs naturally
  with Horne: PTA reads the rock around a well; tracer testing reads the *connection
  between* an injector and a producer. Reinjection is the reservoir-management lever.
- Anchor: **Gudni Axelsson** (Iceland — ÍSOR / UNU-GTP / GRÓ-GTP), the modern
  authority on geothermal reinjection, tracer-test interpretation, and sustainable
  reservoir management. Real publications (verify exact anchor citation):
  - Axelsson, G. (2010) "Sustainable geothermal utilization – Case histories;
    definitions; research issues and modelling." *Geothermics* 39(4), 283–291.
  - Axelsson, G., Björnsson, G., Montalvo, F. (2005) "Quantitative Interpretation
    of Tracer Test Data." *Proc. World Geothermal Congress.*
  - Axelsson, G. et al. (2001) "Analysis of tracer test data, and injection-induced
    cooling, in the Laugaland geothermal field, N-Iceland." *Geothermics.*

## 2. Reinjection — backbone (standard; high confidence, fluid-neutral)
- Reinjection = returning spent fluid (separated brine + condensate) to the reservoir.
  Three purposes, historically in this order:
  1. **Disposal** — environmentally necessary (spent fluid carries As, B, H₂S, silica);
     surface discharge is unacceptable.
  2. **Pressure support** — counteracts production-driven pressure drawdown; sustains
     well deliverability and field life.
  3. **Enhanced heat recovery** — sweeps stored heat from rock that fluid alone would
     leave behind (the rock holds far more heat than the fluid).
- **Central trade-off / main risk: thermal breakthrough** — injected (cooler) fluid
  migrates to producers and cools them. Good for pressure, bad for enthalpy. The whole
  art of reinjection siting is buying pressure support + heat sweep while delaying
  thermal breakthrough beyond the project horizon.

## 3. Tracer testing — backbone (standard; high confidence, fluid-neutral)
- **Method**: inject a slug of conservative (non-reacting, non-sorbing) tracer at the
  injector; sample tracer concentration at surrounding producers over time → **tracer
  return / breakthrough curve** C(t).
- **Interpretation** (Axelsson): fit the return curve with analytical **flow-channel
  models** — idealized 1-D channels connecting injector→producer — to estimate the
  channel's **pore/flow volume**, flow velocity, and dispersion. Multiple channels
  superpose.
- **Moment analysis**: recovered mass fraction = (mass returned)/(mass injected) tells
  you how much of the injectate reaches that producer; mean residence time (first
  moment) → mean flow velocity along the connection.
- **Key physics — the thermal front lags the tracer/fluid front.** A conservative
  tracer travels at the fluid velocity; the *cooling* front travels slower because heat
  is continuously exchanged with the rock matrix (thermal retardation ≈ ratio of total
  (rock+fluid) heat capacity to fluid heat capacity, commonly several-fold). So a tracer
  breakthrough in weeks–months can correspond to a thermal breakthrough years–decades
  later — tracer tests are an **early-warning + quantitative predictor** of cooling.

## 4. Geothermal/Darajat-specific complications — ALL ⟦TODO-Az⟧
- **Dry-steam (Darajat) reinjection is different from liquid-dominated.** In a
  vapour-dominated field reinjection is typically peripheral/condensate and more limited;
  the connection between injectors and the steam zone, and the risk of quenching, are
  domain calls. ⟦TODO-Az: headline — confirm how Darajat actually manages reinjection.⟧
- **Tracer choice in two-phase/steam**: liquid vs vapour-phase tracers partition between
  phases; conservative-tracer assumptions need care when flashing/condensation occur.
  ⟦TODO-Az⟧
- **Thermal-retardation factor** numeric value (rock ρc, porosity) is field-specific.
  ⟦TODO-Az⟧
- **Acceptable breakthrough horizon** and injector siting strategy for Darajat. ⟦TODO-Az⟧

## 5. Open TODO-Az items (carried into the module header)
A. Headline: confirm dry-steam (Darajat) reinjection practice vs the liquid-dominated
   textbook picture (peripheral condensate injection, quenching risk, steam-zone link).
B. Tracer selection and the conservative-tracer assumption under two-phase conditions.
C. Numeric thermal-retardation factor / breakthrough-time estimate for Darajat rock.
D. Worked-example numbers are ILLUSTRATIVE placeholders — replace with a Darajat tracer
   test if desired.
E. Exact anchor citation/year for the Axelsson item.
F. Seed cards DEFERRED until Az signs off (card-coverage exempt: geothermal + DRAFT marker).

## 6. Sources to verify (Az)
- Axelsson 2010 (Geothermics), 2005 (WGC tracer interpretation), 2001 (Laugaland).
- Grant & Bixley (2011) reinjection chapter (catalog).
- Shook, G.M. — tracer-derived thermal-breakthrough prediction.
- Pruess / Bodvarsson — injection modelling.
