# Research-Prep Factsheet — Björnsson & Bodvarsson (1990)

**Item ID:** `bjornsson-bodvarsson-1990`
**Domain:** geothermal · **Group:** Reservoir Engineering · **System type (for catalog):** `UNIVERSAL`
**Prepared:** 2026-06-02 · **Status:** RESEARCH PREP ONLY — *not a content module.* For Az to author/correct.
**Pipeline:** 5-agent web-verified fan-out + adversarial recheck (workflow `wi2p9d3mz`, anti-stall guarded, ~4 min).

> **Boundary reminder.** Geothermal content is Az-authored. This factsheet supplies verified facts + flagged
> uncertainties only. The item is the **empirical reservoir-property survey** — the reference against which any model's
> assumed permeability/porosity/kh/temperature is sanity-checked.

---

## §1 — Verified Bibliography

| Field | Value | Confidence |
|---|---|---|
| Title | *A Survey of Geothermal Reservoir Properties* | HIGH |
| Authors | **G. Björnsson** (1), **G. S. Bodvarsson** (2) | HIGH |
| Journal | *Geothermics* | HIGH |
| Volume(Issue), pages | **19(1), 17-27** | HIGH |
| Year | **1990** | HIGH |
| DOI | **10.1016/0375-6505(90)90063-H** | HIGH (OpenEI + LBNL memorial both confirm) |
| Publisher | Pergamon Press (→ Elsevier) | MEDIUM (inferred from ISSN 0375-6505 / DOI prefix; not directly cited) |
| Type | empirical literature **survey / review** article | HIGH |

**Note:** OpenEI's "Björbsson" is an OCR artifact — correct surname **Björnsson** (confirmed by the LBNL Bodvarsson
memorial publication list). The ScienceDirect full text 403'd, so **the paper's exact tabulated property ranges were
not recovered** — see §9-A (this is the single most important caveat).

---

## §2 — Author Biographies

### Gudmundur S. ("Bo") Bodvarsson — VERIFIED deceased (2006)
- **Identity (disambiguation, verified):** Gudmundur **Svavar** Bodvarsson (b. **1952**, d. **November 29, 2006**),
  Icelandic-born hydrogeologist / geothermal reservoir engineer at **Lawrence Berkeley National Laboratory** (joined
  1980; **Director of the Earth Sciences Division from 2001** until his death). **Son of** Gunnar Bodvarsson (Oregon
  State geophysicist) — the *son* (middle initial S., LBNL, geothermal) is this paper's author, **not** the father.
- **Career:** 1980s–early-90s geothermal reservoir evaluation/modelling at LBNL alongside Karsten Pruess (the
  TOUGH/iTOUGH milieu); from the 1990s led the **Yucca Mountain unsaturated-zone flow & transport** modelling program.
  Died suddenly at 54. **Bio must be in accomplishment/past tense (deceased).** ⟦TODO-Az: birth year — Wikipedia says
  1952; one MDPI commemorative article title says 1951; cite 1952.⟧
- Also appears in the O'Sullivan module's keyCollaborators (Cerro Prieto with Lippmann) — same LBNL Bodvarsson,
  strengthening the identity.

### Grímur Björnsson — living (mild flag)
- **Affiliation/career:** Icelandic geothermal reservoir engineer/physicist, 30+ yrs. Orkustofnun (Iceland National
  Energy Authority, GeoScience Division) → senior reservoir physicist at **ISOR / Iceland GeoSurvey** → founded **Warm
  Arctic ehf** (consultancy, 2015). Reservoir physics, well-logging, 3-D modelling of Icelandic high-temperature fields
  (Hengill, Reykjanes); UNU-GTP instructor; consulting across the Philippines, Indonesia, Iceland, Nicaragua, the
  Caribbean, East Africa, the USA. **⟦TODO-Az: living status consistent but not independently re-confirmed in the pass;
  bio in neutral/career tense is safe.⟧**

**keyWorks (≥4):** the 1990 survey (this item); Bodvarsson — LBNL geothermal reservoir modelling with Pruess (1980s),
Yucca Mountain UZ Flow & Transport model reports; Björnsson — 3-D model of the greater Hengill volcano, Reykjanes
(RN-10) reservoir-physics studies, UNU-GTP reports.

---

## §3 — Structure & Scope

A compact (11-page) **empirical compilation** of measured **thermal, hydrological, and chemical** characteristics across
many of the world's geothermal fields, organized by reservoir/field type (including **liquid-dominated vs
vapour(steam)-dominated**), with preliminary correlations between fluid and rock parameters. Surveyed parameters:
**permeability**, **permeability-thickness kh (transmissivity)**, **porosity**, **storativity**, **reservoir
temperature**, **pressure**, and fluid chemistry (**total dissolved solids**, **non-condensible gas**). The recurring
later citation from this paper is the observation that **producing fractures within a single field span ~2 orders of
magnitude in permeability** — geothermal permeability is enormously variable and fracture-controlled.

**Role:** the empirical **prior / sanity-check** reference — it gives the plausible ranges that a reservoir model's
assumed properties (and a history-matched estimate) must fall within.

---

## §4 — Key Concepts (with formulas)

1. **Permeability-thickness kh & transmissivity.** The directly well-test-measurable reservoir parameter (you measure
   `kh`, not `k` and `h` separately). `T = kh/μ` (mobility-thickness); hydraulic `T_h = kh·ρg/μ`; `1 D ≈ 9.87×10⁻¹³ m²`;
   a survey-era economic rule of thumb is `kh ≳ 10 D·m` for a commercially interesting field.
2. **Order-of-magnitude productivity from kh** (steady radial Darcy inflow): productivity index scales with `kh` —
   `PI ∝ 2πkh / [μ(ln(r_e/r_w) + s)]` — so the surveyed `kh` range bounds plausible well productivity. (Direct tie to
   the Acuña `PI` and the Grant-Bixley radial-Darcy `PI`.)
3. **Porosity & storativity.** Matrix porosity typically low–moderate (~2–20%), but effective flow is usually
   **fracture-dominated** (low-volume fracture porosity carries the flow); storativity small for single-phase liquid,
   large once two-phase/boiling develops (ties to the Grant-Bixley storage point).
4. **The wide spread / fracture control.** Geothermal permeability ranges over many orders of magnitude and is
   fracture-controlled — which is *why* a survey of measured values is useful: you cannot assume a tidy value.
5. **Using ranges as priors / sanity checks.** The core use: when a model assumes a `kh`, porosity, or temperature, or a
   history match returns one, check it against the surveyed distribution — an estimate far outside the range is a flag.

> **⟦TODO-Az: the specific numeric ranges above (≈2–20% porosity, ~0.1 mD–darcy permeability, ~10 D·m threshold) are
> from SECONDARY literature, NOT recovered from the paper's own tables (full text 403'd). Treat them as illustrative;
> confirm against the actual paper before publishing any number. Prep §9-A.⟧**

---

## §5 — Worked-Example Candidates (dry-steam-flagged)

| # | Candidate | Dry-steam safe? | Recommendation |
|---|---|---|---|
| 1 | **Sanity-check a model's assumed kh against the surveyed range** — a history match returns kh = X D·m; is it plausible vs the survey? | ✅ YES (property-range check is phase-agnostic) | **RECOMMENDED PRIMARY** — the paper's actual purpose; ties to every modelling item. |
| 2 | **Order-of-magnitude well productivity from kh** — given kh, estimate PI via radial Darcy; compare to a measured PI | ✅ YES | Strong tie to Acuña PI / Grant-Bixley; flag that dry-steam PI is compressible (pressure-squared) so the linear-Darcy estimate is an order-of-magnitude check only. |
| 3 | **Porosity / fracture-vs-matrix reasoning** — why low matrix porosity still gives a productive field (fracture flow) | ✅ YES | Conceptual; reinforces the fracture-control point. |

> All three are property-range exercises (largely phase-agnostic), so dry-steam-safe — but **⟦TODO-Az: confirm the
> survey actually covers vapour-dominated fields (Geysers/Larderello) and that the dry-steam kh/porosity values sit where
> stated, before using it as a dry-steam plausibility check for Darajat. Prep §9.⟧**

---

## §6 — Group-A Citations (DC1 house format)

```
**Björnsson, G., and Bodvarsson, G. S.** (1990). "A Survey of Geothermal Reservoir Properties." *Geothermics*, 19(1), 17-27. **(This item.)**

**Grant, M. A., and Bixley, P. F.** (2011). *Geothermal Reservoir Engineering*, 2nd ed. Academic Press / Elsevier. The reservoir-engineering text whose property assumptions this survey bounds (the declared prereq).
```
> Already cited identically in the Grant-Bixley and O'Sullivan modules' sources — keep the form consistent.

---

## §7 — Cross-References (per items.js — two gaps flagged)

| Sibling | Relation | Status |
|---|---|---|
| **grant-bixley-2011** | The survey's empirical property ranges **sanity-check** Grant-Bixley's lumped-model & well-test property assumptions. **Declared PREREQ** (`items.js`); already cited in the Grant-Bixley module ("Property inputs"). | WIRED ✓ |
| **osullivan-pruess-lippmann-2001** | Prior bounds for the simulator's grid-block rock properties + history-match sanity check. Already cited in the O'Sullivan module ("Property inputs / sanity bounds"). | WIRED ✓ |
| **acuna-2008** | The surveyed `kh` range is the plausibility check on whether a fitted Acuña `PI` implies a physical `kh` (Acuña `PI ∝ kh`). | **MISSING** — could add a "property plausibility / kh bounds" bullet to the Acuña module's connections when it's next touched. ⟦TODO-Az.⟧ |
| **cumming-2009** | Property-range priors behind the conceptual model's permeability/temperature assumptions. (NOT capacity-density — power density is Cumming's own 2016 dataset, not this survey.) | **MISSING** — optional add. ⟦TODO-Az.⟧ |

---

## §8 — Authoring-Conventions Checklist

- [ ] Survey/orientation tone (short empirical paper). Bilingual EN+ID; 8 sections; KaTeX rules (double `\\` in
      backticks, no `${`, "USD", `\'` in single-quoted fields); no viz block unless a registered component.
- [ ] author{} 8 bilingual fields + keyWorks[≥4]; **two authors** — Bodvarsson (LBNL, deceased → accomplishment tense)
      + Björnsson (Iceland, living).
- [ ] selfTest[4] answerable from the body, ≥3 sections, not practice dupes; don't restate a TODO-Az claim flag-free.
- [ ] Seed cards deferred until Az sign-off.
- [ ] Verify: `node scripts/verify-content-schema.mjs` → `node scripts/verify-all.mjs`; mechanical audit before commit.

---

## §9 — Expert-Review Flags (Az)

**A. (most important) Exact property ranges not recovered** — the paper's own tables were paywalled (403); every numeric
range in §4/§5 is from secondary literature. Confirm against the actual paper (or your own data) before publishing any
number; safest to keep the module about the *method* (kh as the measured quantity; ranges as priors/sanity-checks) and
flag specific numbers.
**B. Bodvarsson deceased 2006 (verified)** — bio in accomplishment/past tense; birth year 1952 (not 1951).
**C. Björnsson living** — consistent but not independently re-confirmed; neutral career tense is safe.
**D. Publisher** Pergamon/Elsevier inferred from ISSN/DOI, not directly cited.
**E. Vapour-dominated coverage** — confirm the survey covers dry-steam fields and where Darajat-class kh/porosity sit
before using it as a dry-steam plausibility check.
**F. Two missing cross-refs** (acuna, cumming) — catalog-graph additions, Az/owner decision (§7).

---

## §10 — Three Ways to Proceed (Az's call)

- **(a) Az authors solo.**
- **(b) I draft, Az corrects** *(default for this run)* — a bilingual DRAFT about kh/property-ranges-as-priors (worked
  examples #1 + #2), every §9 item `⟦TODO-Az⟧`-flagged (especially the un-recovered numeric ranges), mechanical audit,
  commit as DRAFT.
- **(c) Park it** — move to the geochemistry pair (henley-truesdell-barton, arnorsson) then tester-mit (EGS).

**Recommendation: (b)** — the *method* (kh is what you measure; surveyed ranges are the sanity check) is clean and
phase-agnostic; the only real risk is the specific numbers, which are well-scoped flags.

---
*Sources (primary): OpenEI record + LBNL "Bo Memorial" publication list (biblio + author identity/death); Wikipedia +
MDPI/OSTI commemorative article (Bodvarsson b.1952 d.2006); ISOR/Warm Arctic (Björnsson). Paper full text 403'd — exact
tables not recovered. Full per-claim verification in workflow `wi2p9d3mz`.*
