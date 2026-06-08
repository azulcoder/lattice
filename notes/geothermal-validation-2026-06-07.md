# Geothermal draft validation — 2026-06-07

Research-grounded validation of every ⟦TODO-Az⟧ claim across the 16 geothermal DRAFTs. Each claim was assessed by a geothermal-expert agent against the literature, then VERIFIED/QUESTIONABLE claims were independently double-checked. Classifications:

- **VERIFIED** — correct & citable from literature (Az can sign off quickly).
- **PLAUSIBLE** — generally accepted, with caveats.
- **SITE-SPECIFIC** — genuinely needs Darajat data; only Az can confirm.
- **QUESTIONABLE** — likely wrong; needs correction.

## Executive summary

- Drafts assessed: **16** (note: some drafts returned no extracted markers in this pass — flagged below)
- Claims assessed: **63** — VERIFIED **31**, PLAUSIBLE **13**, SITE-SPECIFIC **19**, QUESTIONABLE **0**

Verdict: **no claim was judged outright wrong (0 QUESTIONABLE).** ~49% are literature-VERIFIED and can be signed off fast; the rest are either general-but-caveated or genuinely Darajat-specific (your local well/chemistry/reservoir numbers).

> ⚠️ Drafts with no markers extracted this pass (re-run needed): tester-mit-2006, horne-1995, axelsson-2010, sanyal-2005, giggenbach-1988, finger-blankenship-2010, gallup-2009, whiting-ramey-1969

## ⚠️ QUESTIONABLE — correct before sign-off (0)

## ✅ VERIFIED — defensible from literature (31)

**stober-bucher-2021**
- Exact low/high-enthalpy temperature cutoffs are not standardized (150/190/200 C) — don't attribute a single numeric threshold to the book.
  - _Assessment:_ Correct and well-judged. The geothermal literature explicitly states the temperature ranges used to bin low/medium/high enthalpy are arbitrary and not generally agreed upon. Concrete competing schemes: USGS uses <90 / 90-150 / >150 C; an enthalpy-based scheme 
  - _Source:_ Lee (2001) 'Classification of geothermal resources by exergy', Geothermics 30:431 (ranges arbitrary, not agreed); USGS temperature classes (<90 / 90-150 / >150 
  - _Rec:_ Keep the caveat as-is; it is accurate. The '~150 C electricity threshold' phrasing elsewhere in the draft is fine because it is hedged as approximate. No change needed beyond ensuring no sentence pins
- Three short calculations exercise the foundational equations; all are dry-steam-applicable. (illustrative teaching numbers)
  - _Assessment:_ The flag is appropriate and the three calculations are arithmetically and physically sound as general/teaching examples. Ex1: q = k·dT/dz = 3.0 x 0.030 = 0.090 W/m2 = 90 mW/m2, with the note that k≈2.2 gives ~66 mW/m2 near the continental mean — correct; mean 
  - _Source:_ Standard values confirmed: mean continental heat flow ~65 mW/m2 and gradient 25-30 C/km (Wikipedia/heatflow.org compilations; standard geophysics references). F
  - _Rec:_ Keep the 'illustrative' flag. Optionally soften 'all are dry-steam-applicable' to 'all exercise the foundational equations' or 'generally applicable', since Ex1/Ex2 are generic conductive calculations
- Quartz geothermometer T(C) = 1309/(5.19 - log10[SiO2]) - 273.15 (used both in formalization and practice Q4, where 250 mg/kg SiO2 yields ~196 C).
  - _Assessment:_ The equation is exactly Fournier's (1977) quartz geothermometer in its no-steam-loss (conductive cooling) form: T(C) = 1309/(5.19 - log S) - 273.15, with S = SiO2 in mg/kg. The practice-problem arithmetic is correct: log10(250)=2.398; 5.19-2.398=2.792; 1309/2.
  - _Source:_ Fournier (1977) 'Chemical geothermometers and mixing models for geothermal systems', Geothermics — quartz no-steam-loss: T=1309/(5.19-log S)-273.15. Confirmed i
  - _Rec:_ Keep the equation and the worked arithmetic — both correct. Since Darajat is vapor-dominated, consider adding one sentence (or a card later) noting that liquid solute geothermometers need a water samp
- Don't cite this survey as the primary source for geochemistry specifics — it is the on-ramp, not the depth.
  - _Assessment:_ Sound editorial/sourcing judgment, and consistent with what the book actually is. Stober & Bucher 2021 is a single-volume survey ('From Theoretical Models to Exploration and Development') spanning the whole value chain; it is widely used as a graduate orientat
  - _Source:_ Springer description of Stober & Bucher 2021 (survey scope, orientation text); Giggenbach (1988) Na-K-Mg as the primary geothermometry reference; Fournier (1977
  - _Rec:_ Keep the caveat verbatim; it is correct and protects citation integrity. When geochemistry cards/items are authored, point them at Giggenbach 1988, Fournier 1977, Arnorsson, etc., and reserve Stober &

**cumming-2009**
- Confirm how Darajat itself was explored and conceptualized — the MT surveys, the clay-cap mapping, and how the operator's working conceptual model is maintained today. (Surrounding prose asserts Daraj
  - _Assessment:_ The framing is correct and well documented in the public literature, though the operator-internal detail is genuinely Az's to confirm. Darajat IS a vapor-dominated/dry-steam field — Julfi Hadi (2001, INAGA), the field conceptual-model paper, is literally title
  - _Source:_ Julfi Hadi (2001), 'The Darajat Geothermal Field Conceptual Model, A Vapor Dominated System,' Proc. 5th INAGA Annual Scientific Conf., Yogyakarta; Soyer, Mackie
  - _Rec:_ Keep the framing as written — it is accurate. Az should add only the operator-internal specifics (current working conceptual-model maintenance workflow, any post-2004 surveys/revisions). The public cl
- For a vapour-dominated/dry-steam field the deep zone is near-isothermal and vapour-static rather than tracking a boiling-liquid profile, the diagnostic fluids are dominated by fumarole gas, and beneat
  - _Assessment:_ All three sub-claims are correct and are textbook for dry-steam systems. (1) Near-isothermal / vapour-static deep zone: the classic White, Muffler & Truesdell (1971) vapor-dominated model and Pruess (1982) heat-pipe analysis show a counterflowing steam/water '
  - _Source:_ White, Muffler & Truesdell (1971), Econ. Geol. 66:75-97; Pruess (1982), JGR 87(B11):9329; Julfi Hadi (2001) INAGA; Soyer et al. (2017) GRC Trans. 41 ('resistive
  - _Rec:_ Promote this caveat from TODO to settled text — it is correct. Az should optionally pin the Darajat-specific values (≈240 °C, vapor-static pressure ≈ the field's measured reservoir pressure) and note 
- Replace boiling-point-for-depth (the liquid upflow upper bound) with the near-isothermal vapour-static profile for the dry-steam Darajat case.
  - _Assessment:_ Correct. The boiling-point-for-depth (BPD) curve is the T(z) of a hydrostatic, boiling LIQUID column and is the right upper bound only for liquid-dominated upflows. A vapor-dominated reservoir is controlled by the steam phase, giving a near-isothermal temperat
  - _Source:_ White, Muffler & Truesdell (1971), Econ. Geol. 66:75-97; Pruess (1982), JGR 87; Grant & Bixley (2011), 'Geothermal Reservoir Engineering' (2nd ed.), vapor-domin
  - _Rec:_ Adopt the swap as written. Az may add one sentence noting that in dry steam the reservoir P-T sits essentially on the saturated-steam curve (so pressure, not just temperature, is near-constant with de
- The Darajat MT dataset (reportedly ~85 sites, 1996-97 and 2004, 3D inversion) is the concrete local example — confirm the survey details and which inversion the operator relies on.
  - _Assessment:_ Almost entirely confirmed, with one date correction. Soyer et al. (2017) state verbatim: 'The MT data set comprises 85 broadband soundings from surveys in 1996 and 2004.' So '~85 sites' is exactly right and '3D inversion' is right (CGG 3D regularized nonlinear
  - _Source:_ Soyer, Mackie, Hallinan, Pavesi, Nordquist, Suminar, Intani, Nelson (2017), 'Multi-Physics Imaging of the Darajat Field,' GRC Transactions 41 ('85 broadband sou
  - _Rec:_ Change '1996-97 and 2004' to '1996 and 2004' to match Soyer et al. 2017. Otherwise state as confirmed fact (85 MT soundings, 3D inversion, joint inversion with gravity/MEQ). Az to confirm only which i
- The BPD-to-near-isothermal/vapour-static swap AND the shift from cation (Na-K, Na-K-Ca) chloride-spring geothermometry to fumarole gas geothermometry for dry steam — confirm against Darajat field data
  - _Assessment:_ Both swaps are correct and the practice-answer reasoning is sound. (1) Cation geothermometers (Na-K, Na-K-Ca) require a liquid sample equilibrated with reservoir rock; the Na-K geothermometer is calibrated ~180-350 °C and needs dissolved Na/K — unavailable whe
  - _Source:_ D'Amore & Panichi (1980) gas geothermometer; Powell (2000), 'A Review of Exploration Gas Geothermometry,' Stanford SGW; Fournier (Na-K, Na-K-Ca) and USGS Na-K-C
  - _Rec:_ Treat both swaps as confirmed and finalize the answer as written. Az to add the actual Darajat fumarole-gas geothermometry result (the gas-geothermometer reservoir-T estimate and the gas ratios used) 

**grant-bixley-2011**
- The whole liquid-vs-dry-steam framing is the module's spine: Grant & Bixley distills liquid-dominated (Wairakei) practice; the general machinery (lumped models, decline analysis, well testing, concept
  - _Assessment:_ This framing is correct and is exactly the right pedagogical spine for a Darajat reader. Grant & Bixley (2011) is genuinely built on Wairakei, the first large liquid-dominated field developed for power (commercial since 1958), and Bixley's 40 years there are l
  - _Source:_ Grant & Bixley 2011, Geothermal Reservoir Engineering 2nd ed. (Wairakei-grounded, liquid-dominated focus); Hadi et al. / Star Energy, 'The Darajat Geothermal Fi
  - _Rec:_ Keep the framing as written and foreground it strongly — it is correct and is the single most valuable teaching point for a Darajat engineer. Az's only real decisions: (a) prominence, and (b) signing 
- In a vapour-dominated field steam is the pressure-controlling phase with immobile water held in the rock; the deep profile is near-isothermal/vapour-static rather than tracking the liquid BPD curve; s
  - _Assessment:_ Each physical statement here matches the established vapor-dominated model (White, Muffler & Truesdell 1971; the Geysers/Larderello canon). In a vapor-dominated reservoir steam IS the continuous, pressure-controlling phase occupying the large fractures/voids, 
  - _Source:_ White, Muffler & Truesdell 1971, 'Vapor-dominated hydrothermal systems compared with hot-water systems' (Economic Geology 66:75-97); Allis 2000, 'Insights on th
  - _Rec:_ Adopt the marker's adaptation. Add one clarifying sentence that the BPD curve still applies to the deep liquid root / steam-liquid interface at Darajat even though the main steam reservoir is vapor-st
- a = b/S_M is the dimensionally-correct decline rate (units 1/time); verify the exact symbol convention in the book's §13.2.1 before teaching it.
  - _Assessment:_ The mathematics is correct and self-consistent. From the one-box closed mass balance S_M dP/dt + W = 0 with deliverability W = b(P - P_whp), the rate decays as W = W_0 e^(-at) with a = b/S_M. Dimensionally b has units (mass/time)/pressure and S_M has units mas
  - _Source:_ Grant & Bixley 2011, Ch. 13 (lumped-parameter and decline modelling); Axelsson 1989 LUMPFIT formalism (UNU-GTP); Arps 1945 decline-curve analysis (exponential i
  - _Rec:_ No physics change. Az should simply confirm the printed symbol in §13.2.1 (likely the book uses 'D' or a different glyph for the decline constant, and may write the deliverability coefficient differen
- The radial-Darcy PI = 2*pi*k*h*rho / (mu*[ln(re/rw)+s]) is the liquid form; dry-steam inflow is compressible (pressure-squared, gas-pipeline-like) and often non-Darcy (turbulent skin) — the Acuña C_WB
  - _Assessment:_ Correct on every count. The quoted PI is the standard steady-state radial-Darcy productivity index for a single-phase, nearly-incompressible liquid (linear in drawdown P_e - P_wf) — the Grant & Bixley / petroleum form. For a compressible fluid (steam, like gas
  - _Source:_ Acuña, J.A. 2008, 'A New Understanding of Deliverability of Dry Steam Wells,' GRC Transactions 32:431-434; Acuña & Pasaribu 2010, 'Improved Method for Decline A
  - _Rec:_ Verified — teach as written, with the cross-link to the Acuña item (already present in 'connections'). Optionally state the dry-steam inflow explicitly as W proportional to (P_r^2 - P_wh^2) so the con
- Do NOT present James lip-pressure as the Darajat workflow — it is the liquid/two-phase method (needs both mass flow and enthalpy); a dry-steam well discharges single-phase steam whose enthalpy is fixe
  - _Assessment:_ Physically correct and the most important dry-steam correction in the module. The James lip-pressure test exists to solve a TWO-unknown problem (mass flow AND enthalpy/steam fraction) for a flashing liquid/two-phase discharge — that is exactly why a separator/
  - _Source:_ Acuña 2008 (GRC Trans. 32) and 2010 (WGC 2275) dry-steam deliverability; standard dry-steam output-testing practice (orifice/critical-flow), Geysers/Larderello;
  - _Rec:_ Verified — keep exactly as written; this is the module's headline correction and it is right. Az to supply the concrete Darajat output-test procedure (orifice/critical-flow method, calibration, measur
- The dry-steam divergences restated in the self-test answer (output testing; compressible/non-Darcy inflow; steam-cap growth and central dry-out rather than liquid drawdown; condensate/calcite/NCG) are
  - _Assessment:_ This marker is a faithful recap of the four divergences already individually assessed above, embedded in the self-test answer. Each is sound: (1) single-phase output testing replacing James lip-pressure — VERIFIED; (2) compressible, pressure-squared, often non
  - _Source:_ Aggregates the sources for markers #2, #4, #6, #8 (White/Muffler/Truesdell 1971; Acuña 2008/2010; James 1966; calcite/condensate literature). Internally consist
  - _Rec:_ Verified as a recap — no new physics to correct. When Az signs off the body-section TODOs (#1-#8), this self-test answer is automatically settled. Minor: consider 'steam-zone growth / central dry-out 

**osullivan-pruess-lippmann-2001**
- Dry-steam-vs-liquid contrast: in a liquid-dominated field exploitation draws pressure down until water boils in place, a two-phase zone grows, and produced enthalpy rises (the classic diagnostic); a v
  - _Assessment:_ Physically correct and matches established theory. The produced-enthalpy rise on pressure drawdown as the classic liquid/two-phase diagnostic is textbook Grant & Bixley. The vapour-dominated description is consistent with the canonical White-Muffler-Truesdell 
  - _Source:_ Grant & Bixley, Geothermal Reservoir Engineering (2nd ed., 2011) — enthalpy-rise diagnostic; White, Muffler & Truesdell 1971 (Econ. Geol.) — vapour-dominated 'h
  - _Rec:_ Accept as written, but add one clause noting that boiling of immobile in-place liquid (and rock heat) provides real pressure/energy buffering in a vapour-dominated field, so 'storativity is low' refer
- The governing equation set (integral mass/energy balance, mass accumulation M^κ = φ Σ S_β ρ_β X^κ_β, energy accumulation dominated by rock (1-φ)ρ_R C_R T, multiphase Darcy flux, conductive+advective h
  - _Assessment:_ Every equation and numerical choice is faithful to the canonical TOUGH2 formulation. The integral-balance form, the mass-accumulation sum over phases, the rock-dominated energy accumulation, multiphase Darcy with relative-permeability/viscosity mobility, Fouri
  - _Source:_ Pruess, Oldenburg & Moridis 1999, 'TOUGH2 User's Guide v2', LBNL-43134; Pruess & Narasimhan 1985 (MINC), SPE J 25(1):14-26; Narasimhan & Witherspoon 1976, WRR 1
  - _Rec:_ Accept the physics/numerics as final — it is textbook-correct. Az only needs to reconcile section labels/notation against the actual paper PDF if exact fidelity to O'Sullivan et al.'s symbols matters;
- The link to the Acuña deliverability framework is a synthesis: the 2001 review predates Acuña 2008 and does not cite it; present it as how deliverability relations serve as well boundary conditions ge
  - _Assessment:_ The caveat is factually correct and well-handled. The 2001 review genuinely predates Acuña 2008 and cannot cite it — the marker correctly frames the connection as a synthesis. The underlying engineering idea (a measured productivity index from a deliverability
  - _Source:_ Acuña 2008 (dry-steam deliverability, Indonesian fields incl. Wayang Windu/Kamojang); O'Sullivan, Pruess & Lippmann 2001 (publication date 2001 < 2008, confirmi
  - _Rec:_ Accept as written — the synthesis is honestly labeled and technically correct. Az only needs to confirm that pinning a well's PI from an independent deliverability test (rather than optimizer-tuning) 
- Pruess, K., and Narasimhan, T. N. (1985). 'A practical method for modeling fluid and heat flow in fractured porous media.' Society of Petroleum Engineers Journal, 25(1), 14-26 — spot-check page range 
  - _Assessment:_ The citation is correct in full. The MINC-method paper appeared in SPE Journal volume 25, issue 1 (February 1985), pages 14-26. Authors, title, journal, volume, issue, and page range all match the OnePetro / SPE record exactly.
  - _Source:_ SPE Journal 25(01):14-26, Feb 1985 (OnePetro abstract record, onepetro.org/spejournal/article-abstract/25/01/14); also indexed identically on ResearchGate and O
  - _Rec:_ Accept as final — the page range 14-26 is verified correct. The spot-check TODO can be closed.
- Narasimhan, T. N., and Witherspoon, P. A. (1976). 'An integrated finite difference method for analyzing fluid flow in porous media.' Water Resources Research, 12(1), 57-64 — spot-check page range.
  - _Assessment:_ The citation is correct in full. The paper appeared in Water Resources Research volume 12, issue 1 (1976), pages 57-64, DOI 10.1029/WR012i001p00057. Authors, title (note: the actual title uses 'integrated', matching the draft), volume, issue, and page range al
  - _Source:_ Water Resources Research 12(1):57-64, 1976, DOI 10.1029/WR012i001p00057 (AGU/Wiley Online Library; Semantic Scholar record).
  - _Rec:_ Accept as final — page range 57-64 is verified correct. The spot-check TODO can be closed.

**dipippo-2016**
- The flash-fraction machinery (x = (h1 - hf)/hfg at separator pressure; xṁ to turbine, (1-x)ṁ reinjected as brine) is the liquid/two-phase case, NOT Darajat; a dry-steam reservoir arrives at x ≈ 1 and 
  - _Assessment:_ Both the physics and the dry-steam/liquid distinction are correct and exactly the right caution for a Darajat reader. The isenthalpic-flash quality x = (h1 - hf)/hfg evaluated at the separator pressure is the standard single-flash relation (DiPippo, Geothermal
  - _Source:_ DiPippo (2016) Geothermal Power Plants, 4th ed., single-flash steam plant chapter (isenthalpic flash, x = (h1-hf)/hfg). Darajat water production: academia.edu '
  - _Rec:_ Keep the equation and the explicit 'this is the liquid case, not Darajat' framing. Optionally add one line that even a dry-steam field has minor moisture/produced water, so wellhead moisture removal i
- Worked Example 1 numbers (8 bara saturated dry steam -> 0.10 bara condenser, ηt=0.82; h1≈2769, s1≈6.663; condenser hf=191.8, hfg=2392.8, sf=0.649, sfg=7.501; x2s≈0.802, h2s≈2110, w≈540 kJ/kg, ~27 MW a
  - _Assessment:_ The thermodynamics is correct and self-consistent against standard steam tables. At 8 bar saturated vapor, hg≈2769 kJ/kg and sg≈6.66 kJ/kg·K (standard); at 0.10 bar, hf=191.8, hfg=2392.8, sf=0.649, sfg=7.501 (standard). The arithmetic checks: x2s=(6.663-0.649)
  - _Source:_ Standard steam tables (IAPWS/engineeringtoolbox; sat. vapor 8 bar hg≈2769, sg≈6.66; 0.10 bar hf=191.8, hfg=2392.8). Baumann rule: ScienceDirect 'Baumann Rule' (
  - _Rec:_ Keep the example as-is for teaching but retain the 'illustrative, not Darajat' label and the Baumann note. When Az authors the real version, plug in measured Darajat wellhead/turbine-inlet P,T (steam 
- Example 2 — single flash for contrast (LIQUID): geofluid at reservoir T=250°C (sat-liquid h1≈1086 kJ/kg) throttled to an 8 bara separator (hf=720.9, hfg=2047.5) flashes x≈0.18, so ~18% becomes turbine
  - _Assessment:_ Correct. Saturated-liquid enthalpy at 250°C is ≈1085.8 kJ/kg (sat. pressure ≈39.76 bar); the geofluid is throttled DOWN to the 8 bar separator where hf=720.9, hfg=2047.5 (sat. T≈170°C). x=(1086-720.9)/2047.5≈0.178≈0.18 — exactly the textbook single-flash resul
  - _Source:_ Standard steam tables (sat-liquid 250°C hf≈1085.8; 8 bar hf=720.9, hfg=2047.5). DiPippo (2016) single-flash chapter (typical single-flash steam fractions ~0.1-0
  - _Rec:_ Keep verbatim; the numbers and pedagogy are sound. Maintain the explicit LIQUID/'not Darajat' labels so a dry-steam reader never mistakes the 18%-flash arithmetic for their own field.
- Darajat's vapour-dominated / dry-steam classification (Cumming conceptual-model link) is well-established but is an external fact — confirm and cite a Darajat source rather than asserting it here. (Re
  - _Assessment:_ The classification is robustly supported by primary literature: Darajat is one of the few volcano-hosted VAPOR-DOMINATED systems in West Java, with a current reservoir temperature of ~240°C that evolved from an earlier hotter (>280°C) liquid-dominated state (r
  - _Source:_ Vapor-dominated/240°C: Stanford/INAGA 'The Darajat Geothermal Field Conceptual Model' (pangea.stanford.edu); GRC 'Why are the only volcano-hosted vapor-dominate
  - _Rec:_ Keep the vapour-dominated/dry-steam statement (it is correct) but attach a Darajat primary citation (e.g. the Stanford/INAGA conceptual model or the 2020 Geothermics conceptual-understanding paper) in

**bjornsson-bodvarsson-1990**
- Matrix porosity is typically low–moderate (commonly only a few to a couple of tens of percent), matrix permeability is tiny, flow travels through fractures; the porosity/permeability figures are illus
  - _Assessment:_ The physical claim is correct and well-supported for fractured volcanic geothermal reservoirs (the Darajat rock type). Published petrophysics of Taupo Volcanic Zone (Ngatamariki) and Los Humeros volcanic-hosted reservoirs show matrix porosities ranging from ~1
  - _Source:_ Heap et al., 'Matrix permeability of reservoir rocks, Ngatamariki, TVZ' (Geothermal Energy, 2017); Cant et al. / Los Humeros microporosity study (Geothermics, 2
  - _Rec:_ The physics needs no change. Only the provenance caveat must be honored: confirm the specific porosity numbers against the actual 1990 tables before publishing them as the survey's values. Safe to kee
- The radial-Darcy PI (PI = 2πkh/[μ(ln(r_e/r_w)+s)]) is the liquid form; a dry-steam well's inflow is compressible (pressure-squared) and often non-Darcy, so linear-in-kh scaling is an order-of-magnitud
  - _Assessment:_ This is the single most important dry-steam correctness point in the module, and it is right. The quoted PI is the textbook steady-state radial Darcy productivity index, derived explicitly for a single-phase INCOMPRESSIBLE liquid (confirmed: ScienceDirect 'Pro
  - _Source:_ Standard radial Darcy PI for incompressible liquid (ScienceDirect 'Productivity Index' overview; assumptions: radial, single-phase incompressible, homogeneous k
  - _Rec:_ Keep verbatim — this caveat is correct and is precisely what protects the module from over-applying liquid theory at Darajat. Ensure the Acuña cross-reference is actually wired (see the connections ma

**henley-truesdell-barton-1984**
- The classic solute geothermometers need a liquid sample equilibrated with the rock. A vapour-dominated / dry-steam field discharges mainly fumarole gas, not a representative deep liquid — so the dry-s
  - _Assessment:_ The general principle is correct and well-supported. Solute (silica, Na-K, Na-K-Ca) geothermometers require a liquid that equilibrated with reservoir rock; a vapor-dominated reservoir does not deliver a representative deep liquid to surface (its mobile phase i
  - _Source:_ D'Amore & Panichi 1980 (Geochim. Cosmochim. Acta 44, 549-556, gas geothermometry / fO2 buffer for vapor-dominated systems); Giggenbach 1980/1988 gas equilibria;
  - _Rec:_ Keep the principle as written — it is correct. Az to supply: (1) which gas geothermometers Darajat actually relies on (e.g. D'Amore-Panichi CO2-H2S-H2-CH4, H2/Ar, CO2/H2, FT-HSH), (2) the role, if any
- Geothermometer equations and constants: quartz conductive T=1309/(5.19-log SiO2)-273.15 valid ~25-250C; quartz max-steam-loss T=1522/(5.75-log SiO2)-273.15; chalcedony 1032/(4.69-log SiO2)-273.15; Na-
  - _Assessment:_ Every constant checks out against the primary literature. Quartz conductive 1309/5.19 and quartz maximum-steam-loss (adiabatic to 100C) 1522/5.75 are Fournier (1977); chalcedony 1032/4.69 is Fournier (1977). Na-K 1390/1.75 is the Giggenbach (1988) calibration 
  - _Source:_ Fournier 1977 ('Chemical geothermometers and mixing models for geothermal systems', Geothermics 5:41-50: quartz no-steam-loss 1309/5.19, max-steam-loss 1522/5.7
  - _Rec:_ Constants are correct — no change needed numerically. Az may wish to (1) attribute the silica equations to Fournier (1977) rather than implying the 1984 volume originated them, and (2) tighten the qua
- Worked example: SiO2=250 mg/kg gives quartz-conductive T~196C; Na/K=10 gives Giggenbach Na-K T~232C; the ~36C gap means the deep reservoir is near the Na-K value (~232C) while silica reset to a shallo
  - _Assessment:_ The arithmetic and the interpretive logic are correct. Quartz: 1309/(5.19-log10(250))-273.15 = 1309/(5.19-2.398)-273.15 = 1309/2.792-273.15 = 468.9-273.15 = 195.8 ~ 196C. Correct. Na-K: 1390/(1.75+log10(10))-273.15 = 1390/2.75-273.15 = 505.5-273.15 = 232.3 ~ 2
  - _Source:_ Arithmetic self-verified; interpretive logic per Fournier 1977 (Geothermics 5:41-50) and Giggenbach 1988 (GCA 52). Darajat reservoir T (~245-260C; H2/Ar gas geo
  - _Rec:_ Keep as a worked illustration; the caveat is correct and should stay. Az: ensure readers do not mistake these spring numbers for Darajat data — consider an explicit 'these are textbook liquid-spring v

**arnorsson-2000**
- ⟦TODO-Az: verify Craig 1961 (Science 133, 1702-1703) and the altitude-effect range [δD decreases roughly 1.5–4 ‰ per 100 m of elevation]; for a dry-steam field the isotopes are read on steam/condensat
  - _Assessment:_ CITATION VERIFIED exactly: Craig, H. (1961) 'Isotopic Variations in Meteoric Waters,' Science, vol. 133, issue 3465, pp. 1702-1703 (DOI 10.1126/science.133.3465.1702) — confirmed on science.org and multiple reference indices. The GMWL equation δD = 8·δ18O + 10
  - _Source:_ Craig 1961, Science 133(3465):1702-1703 (DOI 10.1126/science.133.3465.1702) — citation confirmed; Craig 1963 (oxygen shift); IAEA GNIP / Stable Isotope Hydrolog
  - _Rec:_ Mark Craig 1961 citation, GMWL equation, and tritium half-life as VERIFIED — no change. For the altitude effect, consider softening the lower bound (e.g. 'roughly 1–4 ‰ per 100 m of elevation, regiona
- For Darajat (vapour-dominated), the samples are steam/condensate/gas and the deep fluid is reconstructed; gas geochemistry and steam-condensate isotopes are the field-relevant tools. ⟦TODO-Az: Confirm
  - _Assessment:_ The Darajat-specific framing is CORRECT and matches the published record: Darajat's conceptual model is built precisely on gas geochemistry (high CH4 since initial production, CO2) plus stable isotopes ('heavier stable isotopes' marking the NW upflow), high in
  - _Source:_ Ibrahim et al. 2020, Geothermics 83 ('Improving the conceptual understanding of the Darajat Geothermal Field' — CH4/CO2 gas geochem + heavier stable isotopes de
  - _Rec:_ Endorse the dry-steam tool list (gas geochem + steam-condensate isotopes) as VERIFIED for Darajat. Tidy the wording so 'reconstruct the deep aquifer fluid for two-phase wells' is clearly the liquid-do

## 🔬 SITE-SPECIFIC — only Az can confirm (19)

**stober-bucher-2021**
- 240 C is illustrative; cite Darajat's field-specific reservoir temperature when authored. The dry-steam operational facts (capacity, well count) are external to this textbook (271 MWe / 49-vs-39 well 
  - _Assessment:_ Correctly flagged. The 240 C teaching figure is in fact an excellent match to reality: published Darajat data give a pre-production maximum reservoir temperature of ~225-245 C at ~35 bar (Intani et al., Stanford Geothermal Workshop 2022). So the illustrative n
  - _Source:_ Intani, Syaffitri et al. (2022) 'The Darajat Geothermal Field After 24+ Years of Production' / Geologic Conceptual Model Update — reservoir T 225-245 C, P ~35 b
  - _Rec:_ At sign-off, replace '240 C' with the citable Darajat reservoir temperature (range 225-245 C is publicly supportable; a single representative value is Az's call) and attach a non-textbook citation (In

**cumming-2009**
- Two worked examples; the numbers are ILLUSTRATIVE teaching values, not a Darajat estimate.
  - _Assessment:_ The disclaimer itself is appropriate and should stay — the arithmetic in both examples is correct (A50 = sqrt(8x20) ≈ 12.6 km², D50 = sqrt(6x22) ≈ 11.5 MWe/km², P50 ≈ 145 MWe; risked ~87 MWe at POS 0.6) and matches Cumming's lognormal method. Whether these num
  - _Source:_ Cumming (2016) SGP-TR-209 (method); Soyer et al. (2017) GRC Trans. 41 (Darajat ~271 MW installed — context, not a target).
  - _Rec:_ Keep the ILLUSTRATIVE disclaimer verbatim. If Az ever wants a Darajat-anchored example, supply: (a) P10/P90 resource area from Star Energy's current conceptual model, (b) field power density from Star

**grant-bixley-2011**
- Supply the real Darajat numbers and procedures — static reservoir-pressure range, observed decline rate, output-test method, reinjection (condensate, deep placement), and the open AZ5 producing-well c
  - _Assessment:_ This marker is correctly classified as needing Darajat data — none of these specific numbers can be settled from public literature with the precision a finalized teaching module needs. (1) Static reservoir pressure: vapor-dominated fields cluster near the ~33-
  - _Source:_ Public: Darajat is condensate-reinjecting, vapor-dominated, 271 MWe (academia.edu/63690020; Darajat Unit II/III Debottlenecking paper, ResearchGate 328136615 — 
  - _Rec:_ Treat as a data-fill task for Az, not a literature question. Resolve the 49-vs-39 issue by defining the metric explicitly: e.g. 'N producing wells of M total drilled in the resource area (as of YYYY).

**osullivan-pruess-lippmann-2001**
- Confirm how Darajat's resource is actually managed — whether the operator runs a full distributed numerical model (TOUGH2 / AUTOUGH2 / iTOUGH2 or a commercial code), lumped models, or both, and how st
  - _Assessment:_ The general claim the marker sits under — that a distributed numerical model is the right tool for spatial forecasting and make-up well siting in a dry-steam field — is fully supported by the paper itself, which reports simulation applied to >100 fields with 3
  - _Source:_ O'Sullivan, Pruess & Lippmann 2001, Geothermics 30(4):395-429 (>100 fields, >4000-block meshes routine); plus existence of a Darajat full-field TOUGH2 model and
  - _Rec:_ Az to state Darajat's actual stack (e.g. full-field TOUGH2/AUTOUGH2 vs commercial CHEARS, plus any lumped material-balance overlay) and how the rolling steam-supply forecast is produced. The generic s
- All worked-example numbers are illustrative teaching values, not a Darajat calibration (Example 1 single-block natural state: q_out=100 kg/s, h_out≈2790 kJ/kg, A=10 km², λ≈2 W/m·K, ΔT/Δz≈0.1 K/m ⇒ con
  - _Assessment:_ Correctly self-flagged as illustrative; the numbers are not a Darajat calibration and must be replaced with field figures if grounding is wanted. The PHYSICS and arithmetic are sound and the chosen values are realistic: dry-steam enthalpy 2790 kJ/kg is accurat
  - _Source:_ Steam tables (IAPWS-IF97): hg=2802.3 kJ/kg at 30 bar/233.8°C, hg max ~2803-2804 kJ/kg near 30-35 bar (Wikiversity saturated-steam-by-pressure table; engineering
  - _Rec:_ Keep as a teaching example. If Az wants it Darajat-grounded, substitute the field's measured deep upflow/discharge, reservoir T (hence the correct hg), caprock area and conductivity. No correction nee
- Darajat-specific facts the prep could not close: producing-well count (module text elsewhere says 49; public sources suggest ~39 — producers-only vs total stock? AZ5); the operator's working simulator
  - _Assessment:_ These are all genuinely operator-internal and cannot be resolved from public literature. Public sources confirm only the surrounding facts: Darajat is a vapour-dominated field, ~271 MWe installed, managed by drilling make-up wells (≈88 make-up wells since 2005
  - _Source:_ Star Energy / ThinkGeoEnergy (271 MWe, make-up-well management, ~88 make-up wells since 2005 across all three assets); Battistelli et al. (EOS1 vs EOS2 selectio
  - _Rec:_ Az to supply: (1) the producer count on an explicit basis (producers only vs total stock) to reconcile 49 vs 39; (2) the working simulator; (3) the measured NCG/CO2 fraction and the resulting EOS choi

**dipippo-2016**
- Confirm how the Darajat plant trains (Units I/II/III) actually convert the steam, and the ownership split: Unit I plant PLN/Indonesia Power with Star Energy supplying steam; Units II & III Star Energy
  - _Assessment:_ The conversion type is settleable from literature and is consistent with the draft: all Darajat units are dry-steam CONDENSING turbines (literature explicitly models 'Darajat Geothermal Power Plant Unit III on load 100% (110 MW)' as a condensing geothermal pla
  - _Source:_ Star Energy / Darajat field reviews: 'The Darajat Geothermal Field, Indonesia, After 24 Years of Production' (academia.edu); DergiPark 'A Case Study of Darajat 
  - _Rec:_ State only what is robust (271 MWe total; dry-steam condensing turbines; staged 1994/2000/2007 with a 2009 uprate) and correct the staging to 55 -> 95 -> 110(->121). Have Az supply the exact current o
- Confirm the Darajat NCG fraction and gas-extraction design, and the actual turbine-inlet/condenser conditions (for sizing the NCG ejector/vacuum-pump parasitic load that most directly eats net power).
  - _Assessment:_ The general physics is VERIFIED and correctly stated: geothermal NCG is mostly CO2 (typically ~90-98 wt% of the gas) with some H2S; total NCG is commonly ~0.5-5 wt% of steam (occasionally >20%); accumulation in the condenser destroys the vacuum, so continuous 
  - _Source:_ General NCG physics: ScienceDirect 'Sustainable removal of non-condensable gases from geothermal waters'; Stanford SGW 2023 (Yanto) and ResearchGate NCG studies
  - _Rec:_ Keep the general NCG/parasitic-load explanation (it is correct). Mark the numbers as TODO for Az: have him supply Darajat's measured NCG wt% (and CO2/H2S split), the per-unit gas-removal system type, 

**bjornsson-bodvarsson-1990**
- The survey's own tabulated ranges were not recoverable here (paywalled), so every specific number in this module is from secondary literature and must be confirmed against the actual paper; and where 
  - _Assessment:_ Two halves. (1) The provenance caveat is honest and correct: I confirmed via the OpenEI/ScienceDirect abstract that the 1990 paper (Geothermics 19(1), 17-27) does tabulate permeability, permeability-thickness, porosity, reservoir temperature, dissolved solids 
  - _Source:_ Björnsson & Bodvarsson (1990), 'A Survey of Geothermal Reservoir Properties,' Geothermics 19(1):17-27 (abstract via OpenEI / ScienceDirect 037565059090063H — co
  - _Rec:_ Keep the method-first framing and the explicit caveat. Az must (a) obtain the full paper and transcribe the actual tabulated ranges before any number is published, (b) supply Darajat's measured kh and
- The specific numeric ranges (kh, porosity, temperature) are secondary-literature values, not recovered from the paper's tables — confirm before publishing any number.
  - _Assessment:_ Correct and necessary as a publishing gate, though strictly this is a provenance/source-fidelity issue rather than a Darajat-data issue. The abstract confirms the parameters surveyed but not the numbers; the module's numbers therefore cannot be attributed to t
  - _Source:_ Björnsson & Bodvarsson (1990), Geothermics 19(1):17-27 — abstract confirms parameter set, numeric tables not in open access; n/a (primary-document access requir
  - _Rec:_ Hard gate: do not publish any specific numeric range until transcribed from the obtained full text. The caveat as written is appropriate; keep it until the paper is in hand.
- Confirm the dry-steam productivity-vs-kh relation against Darajat experience: two wells with kh = 60 and 6 D·m give PI ratio = 10 under linear-Darcy, but dry-steam inflow is compressible/non-Darcy so 
  - _Assessment:_ The generic statement is correct and the caveat is right (same physics as marker 3: linear-in-kh holds for incompressible liquid; dry-steam needs the pressure-squared / non-Darcy treatment, so the ratio is an order-of-magnitude guide). The arithmetic (60/6 = 1
  - _Source:_ Acuña & Pasaribu dry-steam deliverability framework (compressible C_WB/PI) for the physics; Darajat well deliverability data: n/a (site data).
  - _Rec:_ Keep the worked example with its caveat. Az to sanity-check against actual Darajat paired-well deliverability vs kh; expect scatter larger than the clean linear ratio because of non-Darcy steam skin. 
- For a dry-steam field the property ranges remain the yardstick but read deliverability through the compressible (Acuña) relation; supply where Darajat's measured kh/porosity sit relative to the survey
  - _Assessment:_ Sound guidance with two open items. (a) 'Property ranges as yardstick, deliverability via Acuña for dry steam' — correct and consistent with the rest of the module. (b) The Darajat placement is irreducibly site data. (c) The genuinely open scholarly question: 
  - _Source:_ Björnsson & Bodvarsson (1990) abstract (does not state vapour-dominated coverage); Darajat is confirmed vapour-dominated/dry-steam (Star Energy; 'The Darajat Ge
  - _Rec:_ Az to (1) check the paper's field list for dry-steam fields (Geysers/Larderello); if absent or sparse, add a one-line representativeness caveat that the survey's distribution is largely liquid-dominat

**henley-truesdell-barton-1984**
- For Darajat (vapour-dominated), the field-relevant tools are gas geothermometers on fumaroles; the liquid cation geothermometers apply to outflow springs, not the deep steam reservoir. [TODO-Az: confi
  - _Assessment:_ The general statement is sound (consistent with the motivation marker), but the operative phrase 'on fumaroles' is what makes this site-specific and potentially incomplete. In an exploration phase, fumarole gases are indeed the primary geothermometry substrate
  - _Source:_ General principle: Giggenbach 1980/1991, D'Amore & Panichi 1980 (gas geothermometry for vapor-dominated systems). Darajat-specific monitoring practice (fumarole
  - _Rec:_ Az to confirm: in producing Darajat, is reservoir-T tracked from well-discharge gas chemistry (likely) rather than fumaroles? Recommend broadening 'on fumaroles' to 'on fumaroles (exploration) and wel
- The same fluid-mineral equilibria that give a temperature also predict scaling and corrosion. [TODO-Az: the calcite-vs-silica scaling question for Darajat — what actually deposits, and where (tubulars
  - _Assessment:_ The general chemistry is correct and well-supported: calcite scales where CO2 degasses on flashing/pressure drop (raising pH and CaCO3 supersaturation), typically near the flash horizon / feedzone of liquid-bearing wells; amorphous silica scales where a coolin
  - _Source:_ Calcite mechanism: Arnorsson 1989; Simmons & Christenson; 'Modeling of Calcite Scaling and Estimation of Gas Breakout Depth' (PHREEQC). Silica: Fournier; Gunnar
  - _Rec:_ Keep the general chemistry. Az to settle the open Acuna I6 question with Darajat data: (1) is calcite the dominant scale (likely, at flash/feedzone in wetter wells), (2) how significant is silica vs i
- Scaling chemistry for: Acuna 2008 and Grant & Bixley 2011 — the fluid-mineral equilibria here underpin the calcite/silica scaling that degrades wells and wellbores (the open Acuna I6 calcite-vs-silica
  - _Assessment:_ The cross-reference relationship is valid: fluid-mineral equilibria (this volume's subject) do underpin the scaling treated in Grant & Bixley (2011, 'Geothermal Reservoir Engineering') and in Acuna's well-deliverability/scaling work, so the linkage is bibliogr
  - _Source:_ Grant & Bixley 2011 (Geothermal Reservoir Engineering, 2nd ed., scaling chapters) and Acuna 2008 (well-deliverability/scaling) are correct supporting references
  - _Rec:_ Accept the connection as written. The open Acuna I6 calcite-vs-silica resolution is the SAME deliverable as the operations marker — Az should resolve it once with Darajat deposition data and apply it 

**arnorsson-2000**
- For a vapour-dominated field the sample is steam, condensate and gas rather than a deep liquid, so this reconstruction-and-gas-geochemistry side is exactly the dry-steam-relevant part. ⟦TODO-Az: confi
  - _Assessment:_ The physical generalization is CORRECT and well-supported: in a vapour-dominated (dry-steam) reservoir the producible/sampleable phase is steam plus its non-condensable gas (NCG: CO2, H2S, CH4, H2, N2, etc.), so geochemistry leans on steam/condensate stable is
  - _Source:_ USGS OFR 99-304 (Gas & Isotope Geochemistry of steam samples, The Geysers); Ibrahim et al. 2020, Geothermics 83 (Darajat conceptual model, CH4/CO2 + stable isot
  - _Rec:_ KEEP the dry-steam framing — it is correct. Az to supply: (1) the actual sample matrix list (separated/wellhead steam, condensate, NCG by Gas-Weber/giggenbach bottle, surface fumaroles); (2) how the d
- For a vapour-dominated field these tools shift to steam, condensate and gas — you sample what the fumaroles and wet-steam wells give and reconstruct the deep fluid — rather than a deep liquid. ⟦TODO-A
  - _Assessment:_ The instruction to frame the liquid-water isotope examples (GMWL, oxygen-18 shift on a liquid) as the GENERAL/pedagogical case and to treat dry-steam steam/condensate/gas as the Darajat-specific reality is methodologically correct and good practice. One termin
  - _Source:_ Henley & Ellis 1983 / standard nomenclature distinguishing vapour-dominated (dry steam) vs liquid-dominated (wet steam); Darajat Power Station / Ibrahim et al. 
  - _Rec:_ Proceed with the general-case framing. But in the dry-steam sentence replace/clarify 'wet-steam wells' — for Darajat the producers are dry-steam (single-phase vapour) wells; 'wet-steam well' should be
- δD = −60 / δ¹⁸O = −5 (and the +3.75‰ shift / reconstructed recharge δ¹⁸O = −8.75‰) are illustrative; ⟦TODO-Az: use Darajat's actual values, and note the field samples steam/condensate (not a deep liqu
  - _Assessment:_ The arithmetic is internally correct: δ18O_meteoric = (δD−10)/8 = (−60−10)/8 = −8.75‰, so Δ18O = −5 −(−8.75) = +3.75‰, and δD-conservation gives recharge δD ≈ −60‰. The numbers are explicitly illustrative, so substituting Darajat's measured δD/δ18O is genuinel
  - _Source:_ Truesdell, Nathenson & Rye 1977 (effects of subsurface boiling on isotopes); Giggenbach 1992 / D'Amore & Panichi (steam-condensate isotope corrections); Arnorss
  - _Rec:_ Replace the illustrative δD/δ18O with Darajat's measured values (Az to supply). ADD an explicit note that, because Darajat samples are steam/condensate, the measured isotopes are first corrected for v
- During exploitation … tracking produced-fluid chemistry and isotopes detects boiling/dry-out, incursion of shallow or injected water (a tritium or δD shift toward the injectate/meteoric value — i.e. i
  - _Assessment:_ The monitoring concepts are all correct and field-standard, and crucially they are documented at Darajat, so this is well-founded though the operational details are Az's to supply. Specifics confirmed by the literature: (1) condensate REINJECTION is practiced 
  - _Source:_ 'The Darajat Geothermal Field After 24 Years of Production' (2012 condensate-injection relocation to NE margin; deep injection minimizes breakthrough); Ibrahim 
  - _Rec:_ Az to supply Darajat's actual produced-steam/gas/condensate monitoring cadence, parameters (NCG %, CH4/CO2, H2S, δD/δ18O of condensate, Cl carry-over) and reinjection-tracing program. Refine the break

## ~ PLAUSIBLE (with caveats) (13)

**stober-bucher-2021**
- The book is German-authored and may use Larderello/The Geysers (not Darajat/Kamojang) as its dry-steam exemplars; confirm before stating it names the Indonesian fields.
  - _Assessment:_ The instinct flagged here is correct and worth heeding. (1) The book IS German-authored (Stober & Bucher, University of Freiburg) and its center of gravity is hard-rock/EGS in the Black Forest and Upper Rhine Graben (Soultz), not Indonesian high-enthalpy volca
  - _Source:_ Allis et al. (2000, WGC) 'Insights on the Formation of Vapor-Dominated Geothermal Systems' — only four fields with deep vapor zones (Geysers, Larderello, Kamoja
  - _Rec:_ Keep the caveat. When finalizing, either (a) verify the exact page and quote which fields the book names, or (b) attribute the dry-steam exemplars (Larderello, The Geysers) to the general literature r

**cumming-2009**
- Use a power density calibrated to dry-steam analogs (Larderello, The Geysers, Kamojang, Darajat), not a generic value.
  - _Assessment:_ Methodologically correct and consistent with Cumming (2016), who derives power density from the Wilmarth & Stimac (2015) compilation 'categorized by conceptual setting' and explicitly recommends checking 'close analogies among the specific fields' used. Import
  - _Source:_ Cumming (2016) SGP-TR-209; Wilmarth & Stimac (2015), 'Power Density in Geothermal Fields,' Proc. WGC 2015 ('main sequence' rising with T vs. a 'constant' trend 
  - _Rec:_ Keep the principle (use dry-steam analogs) but refine the analog list: prioritize Kamojang and Darajat (same arc, same ~240 °C class) and treat The Geysers/Larderello as upper-bound analogs only, noti
- The hand-off from the conceptual model to the numerical reservoir simulator (and the relation to well-scale deliverability) is a cross-scale synthesis — confirm it matches Darajat/Star Energy practice
  - _Assessment:_ The general workflow is standard and correct: the conceptual model (natural-state isotherms, clay-cap geometry, upflow/outflow) is the design input that a TOUGH2/iTOUGH2-class simulator's grid and natural-state calibration target are built to honour (O'Sulliva
  - _Source:_ O'Sullivan, Pruess & Lippmann (2001), 'State of the art of geothermal reservoir simulation,' Geothermics 30:395-429; Acuna et al. (2008) well-scale deliverabili
  - _Rec:_ Keep as a generally-true cross-scale statement but mark the Darajat-specific sequencing as for Az to confirm. Add a one-line dry-steam note that deliverability here is steam mass/enthalpy deliverabili
- Cross-scale synthesis: Cumming works at field/exploration scale and the conceptual model predicts where Acuna-style productive feedzones should be found — confirm vs Darajat practice.
  - _Assessment:_ The scale relationship is correctly drawn and is good pedagogy: Cumming = pre-drilling field scale (where/how hot/how permeable); Acuna = single-well scale (what a completed well delivers and why it declines, via wellbore storage/coefficient C_WB and productiv
  - _Source:_ Acuna (2008) well-scale deliverability (C_WB, PI); Cumming (2009) SGP-TR-187; Grant & Bixley (2011).
  - _Rec:_ Keep the cross-scale framing — it is sound. Az to confirm it matches Darajat directional-well siting practice (cutting the upflow + controlling structures). Consider noting that in dry steam the well-

**grant-bixley-2011**
- James lip-pressure mass-flow correlation: m_dot = 184 * P_lip^0.96 * A / H_t^1.102; the 1.102 enthalpy exponent is well-attested; the leading constant is unit-system-dependent — 184 for the kg/s form 
  - _Assessment:_ The structure of the Russell James (1966) lip-pressure correlation is correct and the unit-dependence caveat is exactly the right thing to flag — this is a genuine, recurring trap. The published James critical-lip-pressure correlation has the form (mass flux) 
  - _Source:_ Russell James 1966/1970 lip-pressure (critical) discharge correlation; applied form documented in Irsamukhti et al. 2015 (Muara Laboh, WGC) and multiple Indones
  - _Rec:_ Largely safe but verify the printed constant. The 0.96 / 1.102 exponents and the unit-dependence caveat are correct; the 184 kg/s to 663 t/h pair is internally consistent (factor 3.6) so almost certai
- For Darajat the management levers differ in detail: condensate reinjection rather than brine; calcite-front rather than deep-silica scaling; non-condensable-gas handling. Confirm the Darajat reinjecti
  - _Assessment:_ The three contrasts are directionally correct and well-supported, with site-specific quantities to confirm. (a) Condensate vs brine reinjection: VERIFIED in kind — a vapor-dominated field produces dry steam, so the reinjected liquid is steam condensate (plus c
  - _Source:_ Calcite scaling in production wells from CO2 exsolution/boiling vs silica scaling in separators/brine lines/injectors: standard geothermal scaling literature (e
  - _Rec:_ Keep the three contrasts; they are correct in kind. Az to (1) confirm Darajat reinjection fraction and placement depth, (2) confirm calcite is the production-well scaling concern and note that silica 

**osullivan-pruess-lippmann-2001**
- A dry-steam producing well is a pressure-dependent sink in the block mass balance with compressible, pressure-squared inflow q = C(P² − P_wb²) (same structure as the Acuña wellbore relation); worked n
  - _Assessment:_ The pressure-squared form is the standard compressible (gas-well analog) deliverability structure and is consistent with Acuña 2008 'A New Understanding of Deliverability of Dry Steam Wells,' which parameterizes dry-steam wells with a wellbore coefficient C_WB
  - _Source:_ Acuña 2008 (GRC Transactions, 'A New Understanding of Deliverability of Dry Steam Wells') — C_WB + PI decomposition, time-invariant PI; gas-well pseudo-pressure
  - _Rec:_ Keep the pressure-squared example as intuition; add a half-sentence that Acuña's full relation separates a wellbore coefficient C_WB from PI (the example collapses both into C). Az to confirm the infl
- Acuña 2008 supplies the per-well deliverability relation (C_WB, PI) that serves as a production-well boundary condition (source term) inside a field simulator; the link is reciprocal (synthesized cros
  - _Assessment:_ Correct and consistent with the same synthesis assessed at the line-236 marker. Acuña 2008 does decompose dry-steam well behaviour into a wellbore coefficient C_WB and a productivity index PI, and using a measured deliverability relation as a producer source-t
  - _Source:_ Acuña 2008 (C_WB + PI decomposition for dry-steam wells); standard simulator practice of imposing well deliverability as a pressure-dependent source/sink (Prues
  - _Rec:_ Accept as a clearly-labeled synthesized cross-domain link. No correction needed; consistent with the line-236 treatment.

**bjornsson-bodvarsson-1990**
- Productive geothermal reservoirs broadly run from ~single-Darcy-metre up to ~100+ D·m, with a commercial threshold around kh ≳ 10 D·m; a fitted kh ≈ 40 D·m is plausible while kh ≈ 0.1 D·m is a flag. T
  - _Assessment:_ The order-of-magnitude picture is reasonable and consistent with field practice: productive geothermal/EGS-conventional reservoirs are commonly described as needing permeability above ~1 D and transmissivities of tens of D·m; one well-test example I found cite
  - _Source:_ ScienceDirect 'Geothermal Reservoir' overview ('permeability > 1 darcy for viable resources; porosity >20% + k >1 D = excellent reservoir'); GRC Tu Deh-Kah repo
  - _Rec:_ Keep as an explicitly-labelled illustrative heuristic. Do not attribute the 10 D·m threshold to Björnsson & Bodvarsson unless the obtained full text states it. Az to supply Darajat's measured kh range
- The transmissivity threshold around ten Darcy-metres lets a non-specialist judge go/no-go at screening; the ~10 D·m threshold is a secondary-literature rule of thumb, not quoted from the paper.
  - _Assessment:_ Same threshold as marker 5, used here for screening. As an order-of-magnitude go/no-go heuristic it is defensible (transmissivities of order tens of D·m are associated with commercial fields in the literature), and the module is honest that it is a rule of thu
  - _Source:_ GRC Tu Deh-Kah (well-test transmissivity ~25 D·m as commercially relevant); ScienceDirect geothermal-reservoir overview (k > 1 D for viable resources). The 10 D
  - _Rec:_ Keep as an explicitly-labelled rule of thumb; do not cite it to the paper unless the full text confirms it. Add a half-sentence noting that for a dry-steam screen, steam deliverability is the operativ
- Cross-link to Acuña 2008: a fitted Acuña productivity index PI implies a permeability-thickness (PI ∝ kh), and the surveyed kh range is the check on whether that implied kh is physical — but this cros
  - _Assessment:_ Two parts. The CONCEPTUAL link is sound: Acuña's dry-steam PI is, to first order, proportional to a permeability-thickness, so the surveyed kh distribution is indeed a reasonable physicality check on an Acuña-fitted PI — this is a genuinely useful pedagogical 
  - _Source:_ Acuña & Pasaribu, dry-steam C_WB/PI deliverability framework (PI relatable to kh); catalog-graph status: n/a (repo/site fact, confirmed by the file's own header
  - _Rec:_ Optional add, low risk. If Az wants the cross-link, wire item:acuna-2008 into the catalog graph; the accompanying sentence is technically fine as written. Not a blocker for publishing the module's bod
- Cross-link to Cumming 2009: the conceptual model's permeability/temperature assumptions draw on the same kind of measured-range priors (distinct from Cumming's own power-density capacity dataset) — bu
  - _Assessment:_ The conceptual relationship is legitimate: conceptual-model building does draw on measured-range priors for permeability/temperature, and Cumming's contribution is correctly characterized as a separate power-density (MWe per km^2) capacity-estimation dataset r
  - _Source:_ Cumming (2009) power-density / conceptual-model resource-capacity methodology (well-established in geothermal resource assessment); catalog-graph status: n/a (r
  - _Rec:_ Optional add, low risk. If desired, wire item:cumming-2009 into the graph; the descriptive sentence is accurate. Not a publishing blocker.

**henley-truesdell-barton-1984**
- For a vapour-dominated field the whole liquid-geothermometer picture shifts to gas, because the deep liquid never reaches the surface as liquid — the fumaroles carry steam and gas. [TODO-Az: frame the
  - _Assessment:_ Directionally correct and pedagogically sound: for a vapor-dominated reservoir the primary reservoir-temperature tool is gas geothermometry, and the liquid cation/silica tools are best applied to peripheral outflow. Caveat that makes this PLAUSIBLE rather than
  - _Source:_ White, Muffler & Truesdell 1971 (Econ. Geol. 66, vapor-dominated systems: liquid present but immobile, steam is the mobile phase); 'Evaluation of Water Produced
  - _Rec:_ Reframe 'the deep liquid never reaches the surface as liquid' to 'the mobile phase delivered to surface is steam + gas; the reservoir liquid is largely immobile and is not sampled directly except at t

