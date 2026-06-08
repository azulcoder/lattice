# Research-Prep Factsheet — DiPippo (2016), *Geothermal Power Plants* (4th ed.)

**Item ID:** `dipippo-2016`
**Domain:** geothermal · **Group:** Production / Utilization · **System type (for catalog):** `UNIVERSAL`
**Prepared:** 2026-06-02 · **Status:** RESEARCH PREP ONLY — *not a content module.* For Az to author/correct.
**Pipeline:** 5-agent web-verified fan-out + adversarial recheck (workflow `wl4exwbc8`, anti-stall guarded, ~4.4 min).

> **Boundary reminder.** Geothermal content is Az-authored. This factsheet supplies verified facts + drafted
> candidates + flagged uncertainties only; every §9 flag is Az's to resolve. DiPippo is an **independent ROOT** of the
> catalog — the **surface / utilization track** (the power plant), complementary to the subsurface resource track. For
> Darajat the load-bearing chapter is **Ch. 7, Dry-Steam Power Plants**.

---

## §1 — Verified Bibliography

| Field | Value | Confidence |
|---|---|---|
| Title | *Geothermal Power Plants: Principles, Applications, Case Studies and Environmental Impact* | HIGH |
| Author | **Ronald DiPippo** (sole author) | HIGH |
| Edition / year | **4th edition, 2016** (released Nov/Dec 2015; 2016 imprint/copyright) | HIGH |
| Publisher | **Butterworth-Heinemann** (imprint of **Elsevier**) | HIGH |
| ISBN (4th ed.) | 978-0-08-100879-9 (hardcover; ISBN-10 0081008791); eBook 978-0-08-100290-2 | HIGH |
| Prior editions | 1st **2005**, 2nd **2008**, 3rd **2012** (3rd-ed ISBN 978-0-08-098206-9) | HIGH |
| Pages | ~800 (publisher/retail; one listing says 762 — exact unverified) | MEDIUM |
| DOI | 10.1016/C2014-0-02885-7 | **LOW — uncertain** (from a search snippet; ScienceDirect 403'd) |

**Corrections / cautions (carry these):**
- **⟦TODO-Az: the 1st-ed (2005) ISBN 9780750686204 is WRONG — the adversarial verifier found it maps to the 2nd
  edition (2008) per Elsevier/VitalSource. Do NOT cite 9780750686204 as the 1st edition. Safest: cite only the 4th-ed
  ISBN and give prior-edition years without per-edition ISBNs.⟧**
- **⟦TODO-Az: the DOI 10.1016/C2014-0-02885-7 is unconfirmed (LOW). Verify on the ScienceDirect page or drop it.⟧**
- "2015 vs 2016": late-2015 release, 2016 copyright — cite **2016** (matches the catalog `dipippo-2016`).

---

## §2 — Author Biography (Ronald DiPippo) — living/active, VERIFIED

- **Affiliation:** Chancellor Professor Emeritus of Mechanical Engineering (and former Associate Dean of Engineering),
  **University of Massachusetts Dartmouth**. PhD at **Brown University** (thermodynamic and transport properties of
  high-temperature, high-pressure gases — a classical engineering-thermodynamics foundation).
- **Career:** ~37 years at UMass Dartmouth (and predecessor institutions), 1967–2004; chaired Mechanical Engineering
  ~14 years; one of the most experienced geothermal-power consultants worldwide (advised governments/utilities in ~9–10
  countries — Costa Rica, Guatemala, El Salvador, Kenya, etc.); long-time *Geothermics* editorial board; ~9 books and
  110+ papers. Honors include the GRC **Ben Holt Award (2007)**, the LaGeo **Victor De Sola Award (2010)**, multiple GRC
  Best Paper awards, and the AT&T Foundation teaching award (1989). **Living** (verified — UMass Dartmouth retired-faculty
  page; co-authored work through the mid-2010s).
- **Key contribution:** brought **exergy (second-law / availability) analysis** into mainstream geothermal power-plant
  engineering, giving the field a consistent thermodynamic-performance framework, plus a large body of worldwide plant
  case studies with environmental-impact assessment. *Geothermal Power Plants* is the standard reference for the surface
  conversion track.
- **keyWorks (≥4):** the 4th-ed textbook (this item); *Geothermal Power Generation: Developments and Innovation* (DiPippo,
  ed., Woodhead/Elsevier, 2016 — the edited volume containing Cumming's chapter, cross-linking this item to `cumming-2009`);
  early DOE-era *Geothermal Energy as a Source of Electricity* (1980); numerous *Geothermics*/GRC exergy-analysis papers
  on flash and binary cycles.
- **⟦TODO-Az: I did not find an explicit NAE membership claim for DiPippo — do not assert one.⟧**

---

## §3 — Structure (3 parts, 23 chapters + 6 appendices)

- **Part 1 — Resource Identification & Development** (Ch. 1 geology · 2 exploration · 3 well drilling · **4 reservoir
  engineering**) — subsurface background for the surface track (overlaps Grant-Bixley; treated as boundary/supply here).
- **Part 2 — Power Generating Systems** (Ch. 5 single-flash · 6 double/triple-flash · **7 dry-steam** · 8 binary/ORC ·
  9 advanced combined/hybrid · **10 exergy analysis**) — the technical core.
- **Part 3 — Case Studies** (Ch. 11 Larderello · 12 The Geysers · 13 New Zealand · **14 Indonesia** · 15 Central America ·
  16 Nevada · 17 Heber binary · 18 Magmamax · 19 Nesjavellir/Hellisheidi · 20 Raft River · 21 Turkey · **22 EGS** ·
  23 environmental impact) + Appendices A–F (worldwide status as of Dec 2014, unit conversions, thermodynamics primer,
  selected-problem answers, **REFPROP tutorial**).

**Thesis / role:** the definitive engineering treatment of geothermal **surface energy conversion** — each power-cycle
type chapter-by-chapter, unified by rigorous Second-Law/exergy analysis, and grounded in worldwide field case studies.
The cycle you build is **dictated by the reservoir thermodynamic state**, so cycle selection is a thermodynamic-economic
optimization, not a free choice. **⟦TODO-Az: confirm Ch. 14 (Indonesia) coverage — whether Darajat is treated by name;
if you cite Darajat specifics, use a Darajat primary source, not DiPippo. Prep §9.⟧**

---

## §4 — Key Concepts (with formulas)

1. **Cycle taxonomy (resource-driven selection).** Vapour-dominated (dry-steam) → dry-steam plant (steam direct to
   turbine); liquid-dominated high-enthalpy → flash (single/double/triple); lower-enthalpy liquid → binary/ORC.
   `x_reservoir ≈ 1` (dry-steam), `0 < x < 1` (flash feed), subcooled liquid (binary).
2. **Dry-steam cycle (the Darajat-relevant one).** The **simplest** geothermal cycle: vapour-dominated reservoir supplies
   dry/saturated steam directly, so **no separator, no brine handling, no working fluid** — plant = gathering lines →
   moisture/particulate removal → turbine → condenser (under vacuum) → cooling tower, plus **NCG removal**. Turbine
   specific work `w = h₁ − h₂ = η_t(h₁ − h₂ₛ)` with `s₂ₛ = s₁` setting `h₂ₛ` at condenser pressure; gross power
   `W_gt = ṁ·w`; net `W_net = W_gt − W_parasitic`. **Specific steam consumption** `SSC = ṁ/W_net` (~6.5–8 kg/kWh).
3. **NCG handling** — geothermal steam carries non-condensable gas (CO₂-dominant + H₂S) that would kill condenser vacuum;
   steam-jet ejectors / vacuum pumps extract it continuously — a **parasitic load growing with NCG fraction** (then H₂S
   abatement). This is the chief complication of an otherwise simple plant.
4. **Flash fraction (liquid resources).** Isenthalpic throttle to separator pressure: `x = (h₁ − h_f)/h_fg` at `p_sep`;
   steam to turbine `= x·ṁ`, brine reinjected `= (1−x)·ṁ`. (Flash plants discard the liquid's exergy.)
5. **Exergy / utilization efficiency.** Stream exergy `e = (h − h₀) − T₀(s − s₀)` at dead state `(T₀,p₀)`;
   `η_u = W_net / [ṁ(e_in − e₀)]`. Dry-steam units score high (~50–60% on wellhead exergy) even where first-law thermal
   efficiency looks low — exergy is the correct cross-cycle figure of merit.

---

## §5 — Worked-Example Candidates (dry-steam-flagged; #1 computed from steam tables)

| # | Candidate | Dry-steam safe? | Recommendation |
|---|---|---|---|
| 1 | **Dry-steam turbine power + SSC** — saturated steam ~8 bara → condenser 0.10 bar, η_t=0.82 | ✅ YES | **RECOMMENDED PRIMARY** — fully computable, Darajat-relevant. |
| 2 | **Single-flash flash-fraction** — `x=(h₁−h_f)/h_fg` at separator pressure | ❌ NO — LIQUID | Use as the contrast showing what dry-steam avoids. |
| 3 | **Utilization (exergy) efficiency of the dry-steam unit** — `η_u = W_net/(ṁ·Δe)` | ✅ YES | Pairs with #1; explains why dry-steam scores high. |

**Worked Example 1, computed (illustrative; verify steam-table values when authoring):**
inlet saturated dry steam at 8 bar → `h₁ ≈ 2769 kJ/kg`, `s₁ ≈ 6.663 kJ/kg·K`. Condenser 0.10 bar →
`h_f=191.8`, `h_fg=2392.8`, `s_f=0.649`, `s_fg=7.501`. Isentropic: `x₂ₛ=(6.663−0.649)/7.501≈0.802`,
`h₂ₛ=191.8+0.802·2392.8≈2110 kJ/kg`. Isentropic drop `h₁−h₂ₛ≈659 kJ/kg`; actual work `w=0.82·659≈540 kJ/kg`.
For `ṁ=50 kg/s`: gross power `≈ 27 MW`; `SSC = 3600/540 ≈ 6.7 kg/kWh` (gross; net is higher after the NCG parasitic
load). **⟦TODO-Az: all numbers illustrative/author-generated, NOT Darajat plant data; the exhaust is wet (x₂ₛ<1) so a
Baumann correction is folded into η_t; cite real Darajat turbine-inlet conditions + NCG fraction when authoring.⟧**

---

## §6 — Group-A Citations (DC1 house format)

```
**DiPippo, R.** (2016). *Geothermal Power Plants: Principles, Applications, Case Studies and Environmental Impact*, 4th ed. Butterworth-Heinemann / Elsevier. **(This item.)**

**DiPippo, R.** (ed.) (2016). *Geothermal Power Generation: Developments and Innovation*. Woodhead Publishing / Elsevier.
```
> Whole-book cites carry no page range. Prior editions (2005 / 2008 / 2012) can be mentioned in prose without per-edition
> ISBNs (the 1st-ed ISBN is disputed — §1). The edited volume cross-links to `cumming-2009` (Cumming's chapter is in it).

---

## §7 — Cross-References (DiPippo is an INDEPENDENT ROOT — `prereqs:[]`)

DiPippo is the **demand / conversion side**; every subsurface item is **upstream supply**:

| Sibling | Relation | Direction |
|---|---|---|
| **acuna-2008** | dry-steam **well deliverability** (C_WB, PI) = the per-well steam supply at wellhead conditions; DiPippo Ch. 7 takes that delivered steam as the **turbine-inlet boundary condition**. Tightest dry-steam link. | Acuña (well) → DiPippo (plant) |
| **grant-bixley-2011** | reservoir engineering governs the sustainable mass/enthalpy supply over field life; DiPippo Ch. 4 overlaps but treats the reservoir as boundary/supply. | reservoir → utilization |
| **cumming-2009** | conceptual model predicts the reservoir **temperature/phase class** that sets the viable cycle (Darajat vapour-dominated → dry-steam). | exploration → utilization (longest range) |
| **osullivan-pruess-lippmann-2001** | the history-matched simulator forecasts the deliverable steam/decline that determines sustained MW and capacity-staging (Darajat 55→95→121). | simulation → utilization |

No graph prereq edges (independent root); these are intellectual supply→demand links. **⟦TODO-Az: confirm the framing
that the plant "consumes" what the reservoir/well "delivers" matches how Darajat is actually operated/planned.⟧**

---

## §8 — Authoring-Conventions Checklist

- [ ] System type `UNIVERSAL` (covers all cycle types) but anchor the **dry-steam (Ch. 7)** path for Darajat relevance.
- [ ] Bilingual EN+ID; survey-with-real-thermo tone. 8 sections. KaTeX rules (double `\\` in backticks, no `${`,
      "USD" for money, `\'` in single-quoted fields). No viz block unless a component is registered (the dry-steam
      turbine sweep would be a *nice* future viz but author text-first).
- [ ] author{} 8 bilingual fields + keyWorks[≥4]; single author (DiPippo).
- [ ] selfTest[4] answerable from the body, ≥3 sections, not practice dupes (recurring audit defect — keep self-tests
      conceptual, practice computational, and don't restate a TODO-Az-flagged claim flag-free in a self-test answer).
- [ ] Seed cards deferred until Az sign-off.
- [ ] Verify: `node scripts/verify-content-schema.mjs` (import-based) → `node scripts/verify-all.mjs`; mechanical audit
      before commit.

---

## §9 — Expert-Review Flags (Az)

**A.** **1st-ed ISBN refuted** (9780750686204 → actually 2nd ed) and **DOI uncertain** — §1.
**B.** **Darajat in Ch. 14 (Indonesia)?** Confirm whether DiPippo treats Darajat by name; cite a Darajat primary source
for any Darajat specific, not DiPippo.
**C.** **Darajat operational facts** (external to DiPippo; from GRC/WGC/Star Energy): 271 MWe = Unit I 55 (1994) + Unit
II ~95 (~2000) + Unit III ~121 (~2007); **ownership wrinkle** — Unit I plant PLN/Indonesia Power with SEGD supplying
steam, Units II & III owned+operated by Star Energy (state precisely); operator lineage Amoseas → Chevron → Star Energy
(confirm transfer year); relict water-dominated >280 °C → ~240 °C vapour reservoir; NCG (CO₂/H₂S) content sets
turbine-inlet + gas-extraction design.
**D.** **AZ5 well count** (49 vs ~39) still open — don't repeat a well count in a DiPippo module until resolved.
**E.** **Worked-example numbers** are illustrative/author-generated, not Darajat plant data — replace with field values
or keep clearly labelled.

---

## §10 — Three Ways to Proceed (Az's call)

- **(a) Az authors solo** from this factsheet.
- **(b) I draft, Az corrects** *(my default for this run)* — bilingual DRAFT anchored on the dry-steam cycle (worked
  examples #1 + #3, #2 as the liquid contrast), every §9 item `⟦TODO-Az⟧`-flagged, mechanical audit, commit as DRAFT.
- **(c) Park it** — move to the next prep (bjornsson-bodvarsson, already launched; then the geochemistry pair
  henley-truesdell-barton + arnorsson, then tester-mit EGS).

**Recommendation: (b)** — DiPippo's dry-steam chapter is the natural surface-side complement to the Acuña module, the
thermo is clean and computable (Example 1), and the Darajat specifics are well-scoped flags for you.

---
*Sources (primary): Elsevier shop + ScienceDirect (4th ed., ISBN 978-0-08-100879-9); UMass Dartmouth faculty page
(DiPippo bio); VitalSource/AbeBooks (edition/ISBN history). Full per-claim verification in workflow `wl4exwbc8`.*
