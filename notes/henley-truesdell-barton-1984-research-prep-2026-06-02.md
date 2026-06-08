# Research-Prep Factsheet — Henley, Truesdell & Barton (1984)

**Item ID:** `henley-truesdell-barton-1984`
**Domain:** geothermal · **Group:** Geochemistry (root) · **System type (for catalog):** `UNIVERSAL`
**Prepared:** 2026-06-02 · **Status:** RESEARCH PREP ONLY — *not a content module.* For Az to author/correct.
**Pipeline:** 5-agent web-verified fan-out + adversarial recheck (workflow `w2mur7c7b`, anti-stall guarded, ~5 min).

> **Boundary reminder.** Geothermal content is Az-authored. This factsheet supplies verified facts + flagged
> uncertainties only. The item is the **hydrothermal-geochemistry ROOT** — the foundational reference for fluid-mineral
> equilibria and **geothermometry** (inferring deep reservoir temperature from sampled fluid chemistry).

---

## §1 — Verified Bibliography

| Field | Value | Confidence |
|---|---|---|
| Title | *Fluid-Mineral Equilibria in Hydrothermal Systems* | HIGH |
| Authors | **R. W. Henley, A. H. Truesdell, P. B. Barton Jr.** (with a contribution by **J. A. Whitney**) | HIGH |
| Series | **Reviews in Economic Geology, Volume 1** (ISSN 0741-0123) | HIGH |
| Publisher | **Society of Economic Geologists (SEG)** | HIGH |
| Year | **1984** | HIGH |
| Pages / ISBN | **267 pp**; ISBN 0-9613074-0-4 (9780961307400); OCLC 11246446 | HIGH |
| DOI | unverified (GeoScienceWorld monograph book-ID 1213 + per-chapter DOIs likely exist; pages 403'd) | LOW |
| Type | **authored monograph** (NOT an edited multi-paper compilation); Henley primary author, Whitney "with contributions by" | HIGH |

**Note:** some catalogs render the first author as "Robert W. Henley" — authoritative ANU/ResearchGate profiles give
**Richard W. Henley** (same person). I seeded the workflow with "Philip B. Barton" — the verifier corrected it to
**Paul B. Barton Jr.** (use Paul). Cite as a book (no page range); per-chapter DOIs only if Az pulls them.

---

## §2 — Author Biographies

### Richard W. Henley — living
- Geochemist of hydrothermal/geothermal fluids and epithermal ore deposits. Career: New Zealand **DSIR** geothermal-
  chemistry programme (Taupo Volcanic Zone — Waiotapu, Broadlands-Ohaaki) → **Honorary Professor, Australian National
  University**. Built the conceptual bridge from active geothermal systems to fossil epithermal Au-Ag deposits; later
  worked on volcanic-gas geochemistry. Lead author/organizer of this volume. **Living — present/career tense.**

### Alfred H. Truesdell — VERIFIED deceased (2014)
- USGS geochemist (Menlo Park, 1962–1991), **b. Sept 10 1933, d. 2014**. B.A. Oberlin (1955), Ph.D. Harvard (1962).
  **Co-developer (with R. O. Fournier) of the chemical solute geothermometers** — silica, Na-K, Na-K-Ca — the standard
  tools for estimating reservoir temperature; worked Yellowstone, Cerro Prieto, Larderello. **GRC Pioneer Award (2002).**
  **Bio in accomplishment/past tense (deceased).**

### Paul B. Barton Jr. — VERIFIED deceased (2021)
- USGS economic geologist / ore-deposit geochemist; a very senior USGS figure (sulfide phase equilibria, ore genesis),
  **d. 2021**. Brought the economic-geology / mineral-stability side to the volume. **Bio in accomplishment/past tense.**

**keyWorks (≥4):** the 1984 volume (this item); Truesdell — Fournier & Truesdell (1973) Na-K-Ca geothermometer
(*Geochim. Cosmochim. Acta*); Henley & Ellis (1983) "Geothermal systems ancient and modern" (*Earth-Science Reviews*
19, 1-50); Hedenquist & Henley (1985) Waiotapu hydrothermal eruptions (*Economic Geology* 80); Barton — sulfide-system
phase-equilibria papers.

---

## §3 — Structure & Scope

A teaching-oriented synthesis (267 pp) of the equilibrium thermodynamics and routine calculations for interpreting
high-temperature fluid chemistry in both **geothermal systems** and **hydrothermal ore-forming environments**. Coverage:
**solute geothermometers** (silica/quartz & chalcedony; Na-K; Na-K-Ca; Mg-corrected Na-K-Ca-Mg), **gas geothermometers**
(CO₂/H₂S/H₂/CH₄ ratios), **fluid-mineral equilibria** & mineral-saturation indices, **pH and aqueous speciation**
calculation, **boiling/flashing (steam-separation) corrections**, **mixing/dilution models** (silica-enthalpy),
**activity-activity and log fO₂-pH stability diagrams**, the magmatic/igneous fluid contribution (Whitney), and a
steam-table appendix. The volume's role: it **systematized geothermometry for geothermal exploration** (and bridged it
to ore genesis), and is the upstream reference behind modern geochemistry handbooks.

---

## §4 — Key Concepts (with formulas; the geothermometers are the core)

1. **Geothermometry — the core idea.** Infer deep reservoir temperature from a sampled spring/well water, exploiting
   temperature-dependent mineral-solution equilibria "frozen in" as the water ascends. Validity needs: equilibrium at
   depth, a fixed mineral assemblage, no re-equilibration on ascent, and no chemical change (dilution/steam loss) other
   than the one corrected for.
2. **Silica (quartz) geothermometer** — conductive ("no steam loss") form
   `T(°C) = 1309/(5.19 − log[SiO₂]) − 273.15` (SiO₂ in mg/kg, ~25–250 °C); a separate **maximum-steam-loss** (adiabatic
   boiling to 100 °C) form `T = 1522/(5.75 − log[SiO₂]) − 273.15` must be used if the water boiled; chalcedony form
   `1032/(4.69 − log[SiO₂]) − 273.15` at lower T. Fast to re-equilibrate → sensitive to shallow processes.
3. **Na-K geothermometer** — alkali-feldspar exchange; slow to re-equilibrate, so it "remembers" the deepest/hottest
   equilibration and is robust to dilution/boiling (a ratio cancels concentration). Giggenbach (1988)
   `T(°C) = 1390/(1.75 + log(Na/K)) − 273.15`; best above ~180–200 °C; unreliable for cool/Ca-rich/immature waters.
4. **Na-K-Ca (Fournier & Truesdell 1973)** — adds a Ca term for cooler, Ca-rich waters: `T(K) = 1647/[log(Na/K) +
   β(log(√Ca/Na) + 2.06) + 2.47]` (molality), β=4/3 if first-pass T<100 °C else 1/3; plus a **Mg correction** for
   Mg-rich waters.
5. **Boiling & mixing corrections** — steam loss concentrates residual silica (use the steam-loss equation); the
   **Giggenbach Na-K-Mg ternary** classifies waters as fully-equilibrated / partially-equilibrated / immature (only
   "mature" waters give reliable cation temperatures); silica-enthalpy mixing models back out a hot end-member.
6. **Gas geothermometers** — CO₂/H₂S/H₂/CH₄ ratios; the relevant tool when the **surface discharge is steam/gas, not
   liquid** (the dry-steam case — fumaroles).

---

## §5 — Worked-Example Candidates (dry-steam-flagged)

| # | Candidate | Dry-steam safe? | Recommendation |
|---|---|---|---|
| 1 | **Silica geothermometer** — SiO₂ = 250 mg/kg → `T = 1309/(5.19 − log 250) − 273.15 ≈ 196 °C` (conductive) | ⚠ liquid sample | **RECOMMENDED PRIMARY** for a liquid spring; flag that a *boiled* sample needs the steam-loss form, and a dry-steam field gives mainly gas, not a silica-bearing liquid. |
| 2 | **Na-K geothermometer** — Na/K = 10 → `T = 1390/(1.75 + 1) − 273.15 ≈ 232 °C` (Giggenbach) | ⚠ liquid sample | Pair with #1; the two agreeing/disagreeing is itself diagnostic (slow Na-K vs fast silica). |
| 3 | **Boiling/maturity caveat** — same SiO₂ via the steam-loss form vs conductive; Giggenbach Na-K-Mg "immature water" rejection | ✅ conceptual | The discipline: which equation, is the water mature? |
| 4 | **Gas geothermometry for a vapour-dominated field** — why a dry-steam fumarole field uses gas ratios, not cation geothermometers | ✅ YES (dry-steam-relevant) | The Darajat-relevant angle. ⟦TODO-Az.⟧ |

**Math check (verify when authoring):** silica `log₁₀(250)=2.398`, `5.19−2.398=2.792`, `1309/2.792=468.8 K`,
`−273.15 ≈ 196 °C`. Na-K `log₁₀(10)=1`, `1.75+1=2.75`, `1390/2.75=505.5 K`, `−273.15 ≈ 232 °C`.
**⟦TODO-Az: confirm the geothermometer constants (1309/5.19 conductive vs 1522/5.75 steam-loss; Giggenbach 1390/1.75)
against the volume / standard references before publishing. Prep §9.⟧**

---

## §6 — Group-A Citations (DC1 house format)

```
**Henley, R. W., Truesdell, A. H., and Barton, P. B. Jr.** (1984). *Fluid-Mineral Equilibria in Hydrothermal Systems*. Reviews in Economic Geology, Vol. 1. Society of Economic Geologists. **(This item.)**

**Fournier, R. O., and Truesdell, A. H.** (1973). "An empirical Na-K-Ca geothermometer for natural waters." *Geochimica et Cosmochimica Acta*, 37(5), 1255-1275.

**Henley, R. W., and Ellis, A. J.** (1983). "Geothermal systems ancient and modern: a geochemical review." *Earth-Science Reviews*, 19(1), 1-50.
```
> Book cite: series + volume + publisher, no page range. **⟦TODO-Az: verify the Fournier-Truesdell 1973 and
> Henley-Ellis 1983 volume/issue/pages before publishing.⟧**

---

## §7 — Cross-References (geochemistry ROOT)

| Sibling | Relation | Status |
|---|---|---|
| **arnorsson-2000** | Arnórsson's IAEA isotope/chemical-techniques volume is the modern handbook that **builds on** this geothermometry foundation. **Declared PREREQ** (`items.js:117`: arnorsson prereq = henley-truesdell-barton). | WIRED ✓ |
| **cumming-2009** | Geothermometry (silica/Na-K/gas) is exactly what **anchors the conceptual model's isotherms** (Cumming uses geothermometer temperatures as the fixed points the predicted isotherms must honour). | foundation (intellectual) |
| **acuna-2008 / grant-bixley-2011** | Fluid-mineral equilibria underpin the **scaling chemistry** (calcite vs silica) that drives well/wellbore degradation — the open Acuña **I6 calcite-vs-silica** flag lives here. | foundation |
| **stober-bucher-2021** | The survey textbook's geochemistry chapter is the survey-level on-ramp; this volume is the depth. | depth-of (independent roots) |

---

## §8 — Authoring-Conventions Checklist

- [ ] Geochemistry-root, teaching tone. Bilingual EN+ID; 8 sections; KaTeX (double `\\` in backticks, no `${`, "USD",
      `\'` in single-quoted fields); no viz block unless registered.
- [ ] author{} 8 bilingual fields + keyWorks[≥4]; **three authors** — Henley (living) + Truesdell (d.2014) + Barton
      (d.2021); accomplishment tense for the two deceased.
- [ ] selfTest[4] answerable from the body, ≥3 sections, not practice dupes; don't restate a TODO-Az claim flag-free.
- [ ] Seed cards deferred until Az sign-off.
- [ ] Verify: `node scripts/verify-content-schema.mjs` → `node scripts/verify-all.mjs`; mechanical audit before commit.

---

## §9 — Expert-Review Flags (Az)

**A. Dry-steam angle (most important for Darajat).** Liquid cation geothermometers (Na-K, Na-K-Ca, silica) need a
liquid sample equilibrated with reservoir rock. A **vapour-dominated / dry-steam field discharges mainly fumarole gas**,
so the dry-steam-relevant tool is **gas geothermometry** (CO₂/H₂S/H₂/CH₄), and the liquid cation geothermometers apply
to outflow springs, not the deep steam reservoir. Frame the module so the liquid-geothermometer worked examples are the
general/liquid case and the dry-steam case routes to gas geothermometry. Confirm Darajat's actual geothermometry practice.
**B. Scaling chemistry** — fluid-mineral equilibria here underpin the **calcite-vs-silica scaling** question (open Acuña
I6 flag); confirm what actually deposits at Darajat and where.
**C. Author life status** — Truesdell d. 2014, Barton d. 2021 (verified) → accomplishment tense; Henley living.
**D. Barton = Paul B. Barton Jr.** (not Philip — my seed was wrong, verifier corrected).
**E. DOI unverified**; geothermometer **constants** should be confirmed against the volume / standard references before
publishing (conductive 1309/5.19 vs steam-loss 1522/5.75; Giggenbach Na-K 1390/1.75; Na-K-Ca β switch).
**F. Whitney** is a contributing author (magmatic/igneous material), not an editor.

---

## §10 — Three Ways to Proceed (Az's call)

- **(a) Az authors solo.**
- **(b) I draft, Az corrects** *(default for this run)* — bilingual DRAFT on geothermometry (worked examples #1 silica
  + #2 Na-K, with the #3 boiling/maturity caveat and the #4 dry-steam→gas-geothermometry flag), every §9 item
  `⟦TODO-Az⟧`-flagged, mechanical audit, commit as DRAFT.
- **(c) Park it** — but note arnorsson-2000 has this as its prereq, so drafting this first is the natural order; then
  arnorsson, then tester-mit (the last item).

**Recommendation: (b)** — the geothermometer formulas are clean and computable (worked examples verify), and the
dry-steam (gas-geothermometry) and scaling angles are well-scoped flags for you.

---
*Sources (primary): Google Books / Amazon / WorldCat (OCLC 11246446) — biblio (RiEG Vol 1, SEG 1984, 267 pp, ISBN
0961307400); ANU/ResearchGate (Henley); USGS/GRC (Truesdell b.1933 d.2014, GRC Pioneer 2002); Barton d.2021. GSW
monograph 403'd (no DOI). Full per-claim verification in workflow `w2mur7c7b`.*
