# Research prep — Grant & Bixley (2011), *Geothermal Reservoir Engineering*

**Date:** 2026-06-01 · **For:** Az (author) · **Compiled from:** multi-source web research, verified

> **What this is — and what it is NOT.** This is a *research factsheet* to help **you** author the `grant-bixley-2011` content module. It is **not** a finished module and must not be published verbatim. Geothermal is your domain (6 yrs Darajat operational experience); geothermal content is authored by you, not drafted autonomously. Everything below is verified background + structure + an authoring checklist; the **§9 Expert-Review Flags** are the points where only you can make it correct for a dry-steam field.
>
> Research confidence: book **0.97**, bios **0.80**, methods **0.86**, lineage **0.86**, expert-flags **0.82**.

---

## 1. Verified bibliography

- **Grant, M. A., and Bixley, P. F.** (2011). *Geothermal Reservoir Engineering*, 2nd ed. Academic Press / Elsevier (Burlington, MA / Oxford). ~378 pp. Hardback ISBN 978-0-12-383880-3 (ISBN-10 0123838800); eBook ISBN 978-0-12-383881-0; DOI 10.1016/C2010-0-64792-4. **(This item.)**
- **1st edition (predecessor):** **Grant, M. A., Donaldson, I. G., and Bixley, P. F.** (1982). *Geothermal Reservoir Engineering*, 1st ed. Academic Press, New York (Energy Science and Engineering series). 369 pp. ISBN 0-12-295620-6.
  - ⚠️ **Correction to an initial hypothesis:** the dropped third author of the 1st ed. is **Ian G. Donaldson** (initials **I.G.**), **not** "James W. Donaldson." Confirmed by SciRP, the National Library of Australia catalogue, AbeBooks first-edition listings, and Google Books. Author order 1st ed. = Grant, **Donaldson**, Bixley; for the 2nd ed. Donaldson was dropped → Grant & Bixley.
- catalog entry: `id: grant-bixley-2011`, type `book`, phase `reservoir`, difficulty 3, prereq `stober-bucher-2021`, system_type `UNIVERSAL`, tags: textbook, reservoir-physics, two-phase-flow, well-testing, lumped-models, decline-curves.

Minor variance (decide which to cite): page count appears as 349 or **378** across vendors (378 = Google Books/Elsevier/Perlego); a 2016 paperback reprint exists (ISBN 9780128103753).

---

## 2. Author bios (verified, with flagged gaps)

**Malcolm A. Grant** (Malcolm Alister Grant) — lead author.
- **PhD in applied mathematics, MIT** (not physics — publisher/bio sources consistently say applied mathematics).
- Joined NZ **DSIR** (Department of Scientific and Industrial Research) for geothermal work ~1973; DSIR Geothermal Coordinator ~1985-87. Later NZ science management: GM of the NZ Meteorological Service (~1988-91), Chief Executive of **NIWA** (~1992-94). **Independent geothermal consultant since 1994, trading as MAGAK** (Auckland). Technical Advisor associated with **Contact Energy** at Wairakei.
- Expertise: reservoir assessment, mathematical/numerical modelling (incl. Wairakei), well testing, monitoring/interpretation. Involved in assessment/development of **~76 fields across 14 countries**. Lead author of the standard reference (1982 + 2011).
- ⚠️ **Unverified — do not assert without your check:** a discrete "Industrial Research Ltd (IRL)" stint (plausible via the 1992 DSIR→CRI restructuring, but not directly sourced); any specific GRC/IGA award (not found in the available award lists). The detailed management timeline comes from a single secondary source (Orkustofnun lecture notes).

**Paul F. Bixley** — second author.
- **BSc (Hons), Victoria University of Wellington.** Practitioner reservoir engineer (no PhD; not academic).
- Career in the NZ **Wairakei** geothermal group: **Ministry of Works and Development** geothermal operations (with DSIR Wellington collaboration) → corporatized successor **Contact Energy** as Technical Advisor for geothermal, based at Wairakei. Overseas consultancy across Asia, the Pacific Rim, and Africa.
- **40+ years** in exploration/development/production of **high-temperature, liquid-dominated** resources. Specialist in well testing, field performance monitoring, data interpretation, and Wairakei field management. Authored work on Wairakei casing performance (1983) and reservoir cooling.
- ⚠️ Thin public profile (practitioner): exact employer-transition dates, awards, and current status not pinned down.

> **Authoring note:** this is a **textbook**, so the "author" block is two people. Their complementary roles (Grant = math/modelling/consulting breadth; Bixley = 40 yrs hands-on Wairakei field practice) are a nice framing — *and* the key to §9: the book is **liquid-field practice distilled**, which is exactly why it's only a partial guide for dry steam.

---

## 3. Book scope & structure (verified)

Canonical combined practitioner-and-academic reference. Ch. 1 self-description: *"examines the flow of fluid underground, how geothermal reservoirs came to exist, the reservoirs' characteristics, and how they change with development."* Empirical, field-driven, teaches by **case study and cautionary lesson**, moving from individual-well measurement/testing → reservoir-scale conceptual & numerical modelling → long-term management. Deeply grounded in **New Zealand** fields — above all **Wairakei** (first big liquid-dominated field, power since 1958) and **Ohaaki/Broadlands** (the 32-year single-well history of well **BR2** is a Ch. 9 set-piece) — broadening to The Geysers, Salak/Awibengkok, Svartsengi, Balçova-Narlıdere, Palinpinon, Mak-Ban. 2nd ed. added ~100 pp: **EGS**, well stimulation, improved well modelling, modern data prep for simulation.

Structure: **14 chapters + 4 appendices.** Indicative chapter map (sub-section numbers from a third-party TOC mirror — treat as indicative, you can correct):
1. Introduction
2. Concepts of Geothermal Systems (system taxonomy; **boiling-point-for-depth**; natural state; two-phase zones)
3. Simple Quantitative Models (Darcy; storage coefficient S_M; **lumped-parameter models §3.4**; dual-porosity §3.7; reserves §3.6)
4. Injection Testing / downhole profiles (conductive vs convective vs boiling-curve vs two-phase profiles §4.4)
5-6. (measurement / discharge physics)
7. Well Completion and Heating (completion testing; **injectivity index §7.2.1**; transient/skin §7.5)
8. Production Testing (output curves; **James lip-pressure §8.5.3**; enthalpy monitoring §8.9)
9. (well case history — Ohaaki BR2)
10. Conceptual Modeling
11-12. Numerical simulation / case histories
13. Field Management (**decline & lumped models §13.2**; **tracer §13.4**; **subsidence §13.7**; **injection §13.8**)
14. (EGS / frontier)
+ Appendices (A1 transient/skin/PI; A3 BPD model; etc.)

---

## 4. Key reservoir-engineering methods (your teaching menu)

**Concepts / reservoir physics (Ch. 2-3).** System taxonomy: conductive; **convective liquid-dominated** (the dominant class — vertical upflow ± lateral outflow); **convective vapor-dominated** (Geysers/Larderello — steam is the pressure-controlling phase, immobile water held in rock). **Boiling-point-for-depth (BPD)** curve: in a boiling hydrostatic column `dP/dz = ρ(T_sat(P))·g` with `T = T_sat(P)` — the max temperature attainable at a depth under a hydrostatic boiling pure-water column; deviations of measured T/P logs from BPD diagnose upflow/downflow/conductive caps/two-phase zones. **Mass storage coefficient S_M** (mass expelled per unit pressure drop): tiny for single-phase liquid, **huge for two-phase** (boiling releases large mass per unit ΔP) — this buffers pressure decline once boiling starts. Fractured media via dual-porosity (Warren & Root). Reserves via stored-heat/volumetric method.

**Well testing (Ch. 7-8) — one of the two pillars.**
- **Completion testing:** end-of-drilling cold-water injection at stepped rates; locate feed zones, initial pressure, permeability; + heat-up survey → "pressure control point."
- **Injectivity index II** = Δ(injection rate)/Δ(pressure), in (kg/s)/bar or (L/s)/bar — cold-well analogue of PI.
- **Pressure-transient / injection testing:** Theis line-source, Horner semilog, type-curves, superposition → transmissivity `kh/μ`, storativity `S`, **skin `s`** (s>0 damage, s<0 stimulation).
- **Output / discharge (production) testing:** measure mass flow & enthalpy vs WHP → the well output (deliverability) curve. The challenge: the discharge is **two-phase** → James lip-pressure, separator+weir, total-flow calorimeter, tracer-dilution. ⚠️ **This is exactly where dry steam diverges — see §9.**
- **Productivity index PI** = `W/(p_e − p_wf)` (mass flow / drawdown); radial Darcy `PI = 2πkhρ / [μ(ln(r_e/r_w)+s)]`. Ideally **PI = II**; comparing them is a standard diagnostic.

**Lumped-parameter (tank/box) models (Ch. 3.4, 13.2) — the headline tractable class.** Reservoir as well-mixed boxes (capacitors = storage) + resistors (permeability), like an RC network. Book's one-box mass balance (Eq. 3.36): `S_M (dp/dt) + W − W_r = 0`. Recharge closed by a constitutive rule (simplest: recharge ∝ pressure difference to a fixed source → first-order linear ODE → exponential pressure response). The widely-taught **Axelsson (1989) / LUMPFIT** formalism (UNU-GTP): each tank `p = m/κ` (κ = storage), each resistor `q = σ·Δp` (σ = conductance); **closed** model (isolated → pessimistic/max drawdown) vs **open** model (final tank tied to an infinite constant-pressure source → optimistic/min drawdown). Fit 2-3 tanks; κ,σ invert to reservoir volume/area/kh. **Why it matters:** needs only pressure-monitoring + production history, gives closed-form drawdown forecasts, and the open/closed pair **brackets** the answer.

**Production decline (Ch. 13.2).** Exponential decline falls out of the one-box model with a well at fixed WHP (see §5 worked example). Plus harmonic/other forms. Under exploitation in a liquid field: pressure declines → in-situ boiling → growing two-phase then **steam zone**; symptoms = rising discharge **enthalpy**, changing mass flow, falling pressure. Wairakei grounding: ~25 bar drawdown initiated boiling, grew an extensive two-phase/steam zone; ~5250 t/h at ~1130 kJ/kg long-term; reinjection from the 1990s raised pressures several bar and slowed subsidence.

**Monitoring & management (Ch. 13).** Track pressure/output/enthalpy/chemistry/gas → recalibrate models. **Reinjection** (§13.8): return separated water/condensate to support pressure, dispose of waste, mitigate subsidence; risks = thermal breakthrough + scaling. **Tracer testing** (§13.4): map injector-producer connectivity & predict thermal breakthrough. **Subsidence** (§13.7): compaction of compressible layers as pore pressure drops (Wairakei = classic case). **Sustainability:** balance extraction vs recharge; the open/closed lumped pair brackets long-term drawdown.

---

## 5. Worked-example candidates (pick one to anchor the module)

> ⚠️ **Unit/convention caveats flagged by research — verify against the book's exact equation block before publishing.**

**(A) Exponential decline from the one-box lumped model — BEST conceptual anchor.**
`S_M dP/dt = −W` (mass balance) and `W = b(P − WHP)` (deliverability) ⟹ `W = W₀ e^(−a t)`, cumulative `= W₀/a`. For *n* identical wells, per-well `W = W₀ e^(−n a t)` but total cumulative `W₀/a` is unchanged — **drilling more wells produces the resource *faster*, not *more*.**
- ⚠️ The extracted text gives `a = S_M/b`, but **dimensionally the rate should be `a = b/S_M`** for `e^(−at)` — verify the exact Ch. 13.2.1 symbol convention before teaching.
- Variables: `S_M` storage (kg/Pa), `b` ≈ PI (kg/s per bar), `W₀` initial rate, `WHP` operating pressure, `n` wells.
- Teachable: derives a decline curve in 3 lines; ties storage + productivity to a semilog straight line; good "predict cumulative / time-to-half-flow" exercise. **Liquid-and-dry-steam-relevant** (decline is general), so this is the *safest* anchor for a Darajat-aware author.

**(B) James lip-pressure formula for two-phase well output — BEST *quantitative* anchor, BUT see §9.**
`m = 184·P_lip^0.96·A / H_t^1.102` (kg/s form; t/h form uses 663). Enthalpy closed via separator weir: `m = m_w·(H_s−H_w)/(H_s−H_t)`; dryness `x = (H_t−H_w)/(H_s−H_w)`; at atmospheric silencer `H_s≈2676`, `H_w≈419-420 kJ/kg`.
- ⚠️ Leading constant (184 vs 663) is **unit-system dependent** (original Russell James 1962 imperial form `G = 184·P^0.96/h_o^1.102` in lb/(s·ft²), psia, BTU/lb); the **1.102 enthalpy exponent is well attested**. Double-check coefficients against the exact units.
- ⚠️ **DRY-STEAM CAVEAT (critical):** this method exists because *two-phase* wells need both mass flow AND enthalpy. A Darajat **dry-steam** well discharges single-phase saturated steam (enthalpy fixed by pressure) → output testing collapses to a single-phase throttle/orifice/critical-flow curve, the regime the **Acuña 2008 C_WB/PI** framework you already authored was built for. **Do not present lip-pressure as the dry-steam workflow.** If you use this example, frame it explicitly as the *liquid/two-phase* method and contrast it with the dry-steam procedure (→ Acuña module).

**(C) Productivity index PI / injectivity index II — simple supporting example.**
`PI = W/(p_e − p_wf)`; radial `PI = 2πkhρ/[μ(ln(r_e/r_w)+s)]`; `II = Δrate/Δpressure`; ideally `PI = II`. One-line ratio of two measured quantities; reinforces skin & radial Darcy flow; pairs with (A) since `b ≈ PI`. ⚠️ §9 flags that Darajat near-well flow may be compressible/pressure-squared and non-Darcy (turbulent skin) — your call on the regime.

> **Recommendation for a Darajat-authored module:** anchor on **(A)** (general, dry-steam-safe) and reference **(B)/(C)** as the liquid-field methods that the **Acuña** module specializes for dry steam — turning the "Grant-Bixley is liquid-centric" tension (§9) into the module's *teaching point* rather than a hidden error.

---

## 6. Recommended sources (Group A citation format — for the Sources section)

- **Grant, M. A., and Bixley, P. F.** (2011). *Geothermal Reservoir Engineering*, 2nd ed. Academic Press / Elsevier. **(This item.)**
- **Grant, M. A., Donaldson, I. G., and Bixley, P. F.** (1982). *Geothermal Reservoir Engineering*, 1st ed. Academic Press. The first-edition predecessor this updates.
- **O'Sullivan, M. J., Pruess, K., and Lippmann, M. J.** (2001). "State of the Art of Geothermal Reservoir Simulation." *Geothermics*, 30(4), 395-429. The numerical-simulation next step beyond the book's analytical/lumped methods.
- **Acuña, J. A.** (2008). "A New Understanding of Deliverability of Dry Steam Wells." *Geothermal Resources Council Transactions*, 32, 269-274. The dry-steam specialization (already in the catalog as `acuna-2008`).
- **Bjornsson, G., and Bodvarsson, G. S.** (1990). "A Survey of Geothermal Reservoir Properties." *Geothermics*, 19(1), 17-27. Empirical permeability/porosity/temperature ranges for sanity-checking model assumptions.

(Optional 6th: **Stober, I., and Bucher, K.** (2021). *Geothermal Energy*, 2nd ed. Springer — the foundational prereq.)

---

## 7. Catalog cross-references (for the Connections section)

All confirmed present in `data/domains/geothermal/items.js`:
- **`stober-bucher-2021`** — foundational geology/hydrology/thermodynamics; already the declared *prereq* of grant-bixley-2011.
- **`acuna-2008`** — dry-steam deliverability *specialization* of the book's decline/PI methods (already has grant-bixley as prereq; DRY_STEAM). **The most important cross-link for a Darajat framing.**
- **`osullivan-pruess-lippmann-2001`** — numerical-simulation companion (the next step beyond lumped/analytical).
- **`bjornsson-bodvarsson-1990`** — empirical reservoir-property survey.
- **`cumming-2009`** — pre-drilling conceptual-model building (upstream of the reservoir model).
- **`tester-mit-2006`** — EGS frontier (the 2nd-ed additions point here).
- **`dipippo-2016`** — surface power-plant side (consumes reservoir output; weaker link, no shared prereq).

---

## 8. Authoring conventions (so the module passes the schema + audit on the first try)

These are the hard-won conventions from the 14 microstructure modules + the Acuña module. Follow them and the content-schema harness + adversarial audit go smoothly.

- **Schema:** `export const CONTENT = { itemId:'grant-bixley-2011', estimatedReadMinutes, author{ fullName, affiliation, tagline, bio, focus, intellectualLineage, keyCollaborators, legacy, keyWorks[≥4] }, sections[8: motivation, intuition, formalization, worked-example, applications, practice, connections, sources], audio{enabled:true}, selfTest[4] }`. Every translatable field is bilingual `{ en, id }`.
- **Self-tests:** 4 items, each `{ sectionId (must be a real section id), question{en,id}, prompt{en,id}, answer{en,id} }`. **Keep self-tests conceptual and the practice problems computational/comparative — do NOT let them 1:1 duplicate each other** (this was flagged repeatedly in the audits).
- **Seed cards** (`data/domains/geothermal/seed-cards.js`, English-only): ~13 cards, `{ id:'grant-bixley-2011-c001'…, itemId, type: basic|cloze|formula, front, [cloze], back, [latex], context }`. Cloze cards need the `{{c1::…}}` span in `front`; formula cards need a `latex` field.
- **KaTeX/rendering (from `js/content.js`):** inline math `$…$`, block `$$…$$`. **No bare `$` for currency** (it pairs into a math span) — write "USD". In **backtick** section bodies, **double every LaTeX backslash** (`\\sigma`, `\\sqrt`, `\\frac`) and never write `${`. In **single-quoted** fields (tagline, selfTest, keyWorks), escape apostrophes as `\'` (NOT `\\'` — that bug cost a debugging cycle on Kissell).
- **Authoritative syntax check:** `node --input-type=module -e 'import "….js"'` or `node scripts/verify-content-schema.mjs` — **`node --check` is NOT reliable for ESM string-escape bugs** (it passed a broken file once).
- **Citations:** Group A / DC1 format — `**Author, A. B.** (year). "Title." *Venue*, vol(issue), pages.` Comma before volume, ASCII hyphen page range, no "pp.", initials with periods+spaces, EN connector "and" / ID "dan", `**(This item.)**` on the anchor.
- **Run `node scripts/verify-all.mjs`** (expect content-schema to jump ~75 checks for the new module) before commit.

---

## 9. EXPERT-REVIEW FLAGS — where only your Darajat knowledge makes this correct

> Grant & Bixley is the right **conceptual backbone** (lumped models, PTA, decline analysis, conceptual modelling) but is built on **liquid-/two-phase** NZ fields (Wairakei; Bixley's 40 yrs are liquid-dominated). For a **dry-steam** field like Darajat, several core methods apply differently or not at all. These are the points to verify/correct/augment — and several are exactly what your **Acuña** module already fills.

1. **Dry-steam vs liquid is the headline caveat.** The book's two-phase mass-AND-enthalpy machinery (James lip-pressure, separator calorimetry) and liquid-drawdown decline are liquid-field tools. Decide how the module frames Grant-Bixley as the *backbone* while pointing to Acuña + your operational reality for the dry-steam specifics. (This can be the module's *strength*, not a flaw.)
2. **Well-discharge measurement.** Confirm the **actual Darajat output-test procedure** (instrument: orifice/critical-flow/wellhead throttle; throttle points; enthalpy measured vs assumed-from-pressure; frequency). Don't let lip-pressure/separator read as the dry-steam workflow.
3. **Inflow/wellbore regime.** Dry steam is compressible (pressure-squared, gas-pipeline-like) and often **non-Darcy** (turbulent skin), vs the book's pressure-linear liquid forms. Supply realistic Darajat `kh`, skin, and whether near-well flow is Darcy-radial vs fracture/turbulent; the `0.75` vs `0.5` term and the **C_WB √2** 2008-vs-2010 definition (repo audit AZ5) are open.
4. **Pressure decline / steam-cap / dry-out.** Vapour-dominated decline boils immobile water into mobile steam (enthalpy can rise; central field can dry out) — not simple liquid drawdown; a static/expanding **steam cap** is normal, not an artifact. Supply real static reservoir-pressure range, observed decline rate, and verify the guide band (20-35 bara producing? 8-18 bara wellhead? 30-80 kg/s/well?).
5. **Reinjection.** Dry-steam fields have ~no brine: reinjectate is mainly **condensate + cooling-tower blowdown**, deep-placed to avoid cold breakthrough (Darajat reportedly moved injection to deep NE-margin entries ~2012). Confirm the fraction of produced mass returned and the deep-vs-shallow rationale (the Acuña Scenario-B branch depends on this).
6. **Scaling/chemistry.** Shift from the book's deep-**silica** polymerization (liquid staple) toward **calcite** near the flash front + marginal-recharge carryover. Confirm what actually deposits, **where** (tubulars vs feedzone vs surface lines), and whether silica is a player at all. (Open audit item I6: worked example still lists both calcite *and* silica.)
7. **Non-condensable gas (NCG, CO₂/H₂S).** Material for dry steam (turbine/condenser load, gas extraction, the enthalpy-fixed-by-pressure assumption, the `ρ ≈ C·p` density behind C_WB) but barely in liquid-field Grant-Bixley and absent from the Acuña module. Confirm whether NCG belongs in the deliverability discussion.
8. **Open Darajat facts that intersect** (from `notes/audit-findings-2026-05-30.md` AZ5/I6 and `notes/validation-prep-2026-05-31.md` 4a/4b):
   - **Producing-well count:** Acuña module currently says **49**; public sources suggest **~39** — is 49 producers-only vs total stock, and as-of when? (271 MWe installed is confirmed: 55+95+121.)
   - **Calcite vs silica** (flag 6).
   - **C_WB √2 factor** (2008 vs 2010 Pasaribu formulation) (flag 3).

---

## 10. Suggested next step (your call)

Three ways to proceed, all respecting the Az-only boundary:
- **(a) You author** from this factsheet, then run the content-schema check + the adversarial audit on your draft.
- **(b) Supply the dry-steam corrections** (answers to §9) and draft the bilingual module *from those facts*, reviewing every line.
- **(c) Co-author section by section** — supply the dry-steam reality per section, building the prose/structure/cards around it.

No content has been written to `data/domains/geothermal/content/` — this is prep only.
