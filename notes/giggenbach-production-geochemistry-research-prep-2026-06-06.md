# Research prep — Giggenbach, production geochemistry / geothermometry → DRAFT

Status: **DRAFT prep, autonomous.** Geothermal is Az-authored; this factsheet + the
module are a starting point for Az's review, NOT finalized domain fact. Geochemistry
is deep domain — the dry-steam adaptation in particular is squarely Az's.
Date: 2026-06-06. Module: `data/domains/geothermal/content/giggenbach-1988.js` (DRAFT).

## 1. Why this item / where it sits
- 4th and last of the geothermal-DRAFT topics Az greenlit ("continue other three
  geothermal topics"). Sits in the **geochemistry** phase alongside the existing
  Henley-Truesdell-Barton (fluid-mineral equilibria root) and Arnórsson (IAEA
  isotope/geochemistry manual) drafts — this one is the *production-monitoring* /
  geothermometry workhorse.
- Anchor: **Werner F. Giggenbach** (DSIR, New Zealand), the defining figure in
  geothermal fluid/gas geochemistry. Real anchor publication (verified):
  - Giggenbach, W.F. (1988) "Geothermal solute equilibria. Derivation of Na-K-Mg-Ca
    geoindicators." *Geochimica et Cosmochimica Acta* 52(12), 2749–2765,
    doi:10.1016/0016-7037(88)90143-3. The **Na-K-Mg ternary diagram**.

## 2. Geothermometry — backbone (standard; verified forms, EXACT CONSTANTS flagged)
- **Principle**: solute concentrations in a fluid that last equilibrated with reservoir
  minerals are a function of temperature; if the fluid ascends fast enough to "remember"
  that equilibrium, the sampled chemistry back-calculates the **deep reservoir
  temperature**.
- **Silica (quartz) geothermometer** (Fournier): dissolved SiO₂ rises with T (quartz
  solubility) → T from [SiO₂]. ⟦constants TODO-Az⟧
- **Cation geothermometers**:
  - **Na-K** (Fournier 1979 / Giggenbach 1988): T = 1390/(1.75 + log(Na/K)) − 273.15
    (concentrations by weight; best for T ≳ 180 °C; slow to re-equilibrate, "remembers"
    deep T). ⟦exact constant + ratio convention TODO-Az⟧
  - **Na-K-Ca** (Fournier & Truesdell 1973) — for Ca-rich waters.
  - **K-Mg** (Giggenbach 1983) — fast-equilibrating, records shallow/last temperature.
- **Giggenbach Na-K-Mg ternary diagram (1988)**: plots each water by Na/1000, K/100,
  √Mg. Three regions: **fully equilibrated** waters (on the equilibrium curve — Na-K
  geothermometer valid), **partially equilibrated / mixed**, and **immature** waters
  (Mg-rich, dominated by rock dissolution — geothermometers NOT valid). The diagram is a
  *validity test*: it tells you whether to trust the geothermometer before you read it.

## 3. Gas geothermometry & process indicators (standard; verified principle)
- **Gas geothermometers**: equilibria among CO₂, H₂S, H₂, CH₄ (and ratios like
  CO₂/H₂, H₂/Ar) are temperature-dependent → reservoir T from gas chemistry. **Crucial
  for vapour-dominated/dry-steam fields where there is no liquid to sample.**
- **Process indicators**: stable isotopes (δD, δ¹⁸O — recharge & water-rock exchange,
  overlaps Arnórsson draft); Cl–enthalpy mixing diagrams (boiling vs dilution); gas/steam
  ratios for degassing/boiling monitoring.
- **Scaling prediction**: from fluid chemistry, saturation indices predict silica/calcite
  scaling (overlaps Henley-Truesdell-Barton).

## 4. Geothermal/Darajat-specific complications — ALL ⟦TODO-Az⟧
- **DRY STEAM headline**: in a vapour-dominated field (Darajat) the wellhead delivers
  steam + non-condensable gas, NOT liquid — so the *solute* (Na-K, silica) geothermometers
  do not directly apply; reservoir-temperature and process monitoring lean on **gas
  geothermometry** and steam/condensate chemistry. This is the central adaptation and is
  squarely Az's. ⟦TODO-Az⟧
- **Steam/condensate sampling** protocols (Weber/Webre separator, gas sampling) for a
  dry-steam well. ⟦TODO-Az⟧
- **NCG (non-condensable gas) management**, H₂S, scaling specifics for Darajat. ⟦TODO-Az⟧
- **Which geothermometers/constants** Star Energy actually trusts for the field. ⟦TODO-Az⟧

## 5. Open TODO-Az items (carried into the module header)
A. HEADLINE: the dry-steam adaptation — solute geothermometers don't directly apply when
   the wellhead fluid is steam; gas geothermometry + steam chemistry carry the load.
B. Exact geothermometer constants/conventions (Na-K, silica) and which calibration to teach.
C. Steam/condensate/gas sampling protocol for a Darajat dry-steam well.
D. Scaling & NCG specifics for the field; worked-example numbers are ILLUSTRATIVE.
E. Overlap boundaries with the Henley-Truesdell-Barton and Arnórsson drafts.
F. Seed cards DEFERRED until Az signs off (card-coverage exempt: geothermal + DRAFT marker).

## 6. Sources to verify (Az)
- Giggenbach (1988) GCA 52, 2749–2765 (Na-K-Mg-Ca geoindicators).
- Giggenbach (1991) "Chemical techniques in geothermal exploration" (UNITAR/gas geothermometers).
- Fournier (1977/1979) silica & Na-K geothermometers.
- Arnórsson 2000 (catalog) — geothermometer compilation.
- Henley, Truesdell & Barton 1984 (catalog) — mineral-fluid equilibria / scaling.
