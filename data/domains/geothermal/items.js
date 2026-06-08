// Geothermal items — 9 canonical references across 5 phases.
// Cards authored later via reading-driven workflow (Phase 1+).
// Tags emerge inline per item; vocabulary is curated as items are added.
//
// system_type: classification of which reservoir system the item is most
// relevant to. Values: DRY_STEAM | TWO_PHASE | LIQUID | UNIVERSAL. UNIVERSAL
// applies across all system types (canonical references, broad textbooks).
// Filter UI in topbar shows when domain.meta declares systemTypes.

export const ITEMS = [
  // ─────────────── Earth Sciences ───────────────
  {
    id: 'stober-bucher-2021',
    type: 'book',
    title: 'Geothermal Energy: From Theoretical Models to Exploration and Development',
    authors: ['Stober, I.', 'Bucher, K.'],
    year: 2021,
    phase: 'earth-sciences',
    difficulty: 2,
    prereqs: [],
    tags: ['textbook', 'thermodynamics', 'hydrology', 'resource-types', 'heat-transport'],
    system_type: 'UNIVERSAL',
    notes: 'Springer textbook, 2nd edition. Broad foundation across geology, hydrology, thermodynamics. Read first.'
  },
  {
    id: 'cumming-2009',
    type: 'paper',
    title: 'Geothermal Resource Conceptual Models Using Surface Exploration Data',
    authors: ['Cumming, W.'],
    year: 2009,
    phase: 'earth-sciences',
    difficulty: 3,
    prereqs: ['stober-bucher-2021'],
    tags: ['conceptual-models', 'surface-exploration', 'magnetotellurics', 'resistivity', 'workflow'],
    system_type: 'UNIVERSAL',
    notes: 'Stanford Geothermal Workshop. Workflow for building conceptual models from MT, geochemistry, and surface geology before drilling.'
  },

  // ─────────────── Reservoir Engineering ───────────────
  {
    id: 'grant-bixley-2011',
    type: 'book',
    title: 'Geothermal Reservoir Engineering',
    authors: ['Grant, M.A.', 'Bixley, P.F.'],
    year: 2011,
    phase: 'reservoir',
    difficulty: 3,
    prereqs: ['stober-bucher-2021'],
    tags: ['textbook', 'reservoir-physics', 'two-phase-flow', 'well-testing', 'lumped-models', 'decline-curves'],
    system_type: 'UNIVERSAL',
    notes: 'Elsevier, 2nd edition. Canonical reservoir engineering reference. Two-phase flow, lumped-parameter models, well testing, production decline.'
  },
  {
    id: 'osullivan-pruess-lippmann-2001',
    type: 'paper',
    title: 'State of the Art of Geothermal Reservoir Simulation',
    authors: ["O'Sullivan, M.J.", 'Pruess, K.', 'Lippmann, M.J.'],
    year: 2001,
    phase: 'reservoir',
    difficulty: 4,
    prereqs: ['grant-bixley-2011'],
    tags: ['simulation', 'TOUGH2', 'history-matching', 'numerical-methods', 'review'],
    system_type: 'UNIVERSAL',
    notes: 'Geothermics review. Survey of geothermal numerical simulators, history-matching practices, calibration workflows. Foundational read for anyone touching reservoir models.'
  },

  // ─────────────── Well & Production ───────────────
  {
    id: 'dipippo-2016',
    type: 'book',
    title: 'Geothermal Power Plants: Principles, Applications, Case Studies and Environmental Impact',
    authors: ['DiPippo, R.'],
    year: 2016,
    phase: 'production',
    difficulty: 2,
    prereqs: [],
    tags: ['textbook', 'power-cycles', 'flash', 'binary', 'ORC', 'plant-design', 'thermodynamic-cycles'],
    system_type: 'UNIVERSAL',
    notes: 'Elsevier, 4th edition. Canonical surface-plant reference. Thermodynamic cycles (single/double flash, binary, hybrid), case studies of major fields (Wairakei, The Geysers, Larderello).'
  },
  {
    id: 'bjornsson-bodvarsson-1990',
    type: 'paper',
    title: 'A Survey of Geothermal Reservoir Properties',
    authors: ['Bjornsson, G.', 'Bodvarsson, G.S.'],
    year: 1990,
    phase: 'production',
    difficulty: 3,
    prereqs: ['grant-bixley-2011'],
    tags: ['reservoir-properties', 'permeability', 'porosity', 'empirical-survey', 'world-fields'],
    system_type: 'UNIVERSAL',
    notes: 'Geothermics paper. Empirical reference for typical permeability, porosity, and temperature ranges across global producing fields. Useful for sanity-checking model assumptions.'
  },

  // ─────────────── Geochemistry ───────────────
  {
    id: 'henley-truesdell-barton-1984',
    type: 'book',
    title: 'Fluid-Mineral Equilibria in Hydrothermal Systems',
    authors: ['Henley, R.W.', 'Truesdell, A.H.', 'Barton, P.B. Jr.', 'Whitney, J.A.'],
    year: 1984,
    phase: 'geochemistry',
    difficulty: 4,
    prereqs: [],
    tags: ['fluid-chemistry', 'mineral-equilibria', 'thermodynamics', 'scaling', 'SEG-reviews'],
    system_type: 'UNIVERSAL',
    notes: 'SEG Reviews in Economic Geology, vol. 1. Comprehensive mineral-fluid equilibrium framework. Foundation for understanding silica/calcite scaling and gas chemistry.'
  },
  {
    id: 'arnorsson-2000',
    type: 'book',
    title: 'Isotopic and Chemical Techniques in Geothermal Exploration, Development and Use',
    authors: ['Arnorsson, S. (ed.)'],
    year: 2000,
    phase: 'geochemistry',
    difficulty: 4,
    prereqs: ['henley-truesdell-barton-1984'],
    tags: ['isotope-geochemistry', 'geothermometers', 'fluid-origins', 'IAEA', 'handbook'],
    system_type: 'UNIVERSAL',
    notes: 'IAEA handbook. Solute geothermometers (silica, Na-K, Na-K-Ca), gas geothermometers, and stable + radiogenic isotopes for inferring fluid origin and reservoir temperature.'
  },

  // ─────────────── Well & Production — Acuña deliverability ───────────────
  {
    id: 'acuna-2008',
    type: 'paper',
    title: 'A New Understanding of Deliverability of Dry Steam Wells',
    authors: ['Acuña, J.A.'],
    year: 2008,
    phase: 'production',
    difficulty: 3,
    prereqs: ['grant-bixley-2011'],
    tags: ['deliverability', 'decline-analysis', 'wellbore-friction', 'productivity-index', 'dry-steam-diagnostic', 'darajat-relevant'],
    system_type: 'DRY_STEAM',
    notes: 'GRC Best Paper Award 2008. Decomposes dry-steam well deliverability into independently-measurable wellbore coefficient C_WB and reservoir productivity index PI. Foundational diagnostic framework now de facto standard across Indonesian dry-steam fields (Awibengkok, Salak, Wayang Windu, Kamojang, Darajat) and Philippine fields (Mak-Ban). 2010 follow-up with Pasaribu at Star Energy refined the formulation and provided Darajat application.'
  },

  // ─────────────── Frontier ───────────────
  {
    id: 'tester-mit-2006',
    type: 'paper',
    title: 'The Future of Geothermal Energy: Impact of Enhanced Geothermal Systems (EGS) on the United States in the 21st Century',
    authors: ['Tester, J.W.', 'Anderson, B.J.', 'Batchelor, A.S.', 'et al.'],
    year: 2006,
    phase: 'frontier',
    difficulty: 3,
    prereqs: ['grant-bixley-2011'],
    tags: ['EGS', 'policy', 'cost-modeling', 'MIT-report', 'landmark', 'resource-assessment'],
    system_type: 'UNIVERSAL',
    notes: 'MIT/INL landmark study. Defines modern EGS scope, cost models, US-wide resource potential, R&D priorities. Required reading for any EGS work.'
  },
  {
    id: 'horne-1995',
    type: 'book',
    title: 'Modern Well Test Analysis: A Computer-Aided Approach',
    authors: ['Horne, R.N.'],
    year: 1995,
    phase: 'production',
    difficulty: 4,
    prereqs: ['grant-bixley-2011'],
    tags: ['well-testing', 'pressure-transient-analysis', 'permeability-thickness', 'skin', 'horner-plot', 'DRAFT', 'darajat-relevant'],
    system_type: 'UNIVERSAL',
    notes: 'DRAFT (AWAITING AZ DOMAIN REVIEW). Geothermal pressure-transient analysis anchored on Horne (standard PTA text; head of Stanford Geothermal Program). Theis/Horner/derivative → kh, skin, p*, boundaries. Domain-specific adaptations (two-phase near-well, dry-steam pseudo-pressure, fracture/feedzone, injection tests, Acuña deliverability link) flagged ⟦TODO-Az⟧. Seed cards deferred until Az sign-off.'
  },
  {
    id: 'axelsson-2010',
    type: 'paper',
    title: 'Sustainable Geothermal Utilization: Reinjection and Tracer Testing',
    authors: ['Axelsson, G.'],
    year: 2010,
    phase: 'reservoir',
    difficulty: 4,
    prereqs: ['grant-bixley-2011'],
    tags: ['reinjection', 'tracer-testing', 'thermal-breakthrough', 'sustainability', 'flow-channel-model', 'DRAFT', 'darajat-relevant'],
    system_type: 'UNIVERSAL',
    notes: 'DRAFT (AWAITING AZ DOMAIN REVIEW). Reinjection management + tracer-test interpretation anchored on Axelsson (ÍSOR / UNU-GTP). Reinjection = disposal + pressure support + heat sweep; main hazard = thermal breakthrough. Tracer return curves → flow-channel volume/velocity (advection–dispersion + moment analysis); thermal front lags fluid front by retardation factor → predicts cooling. Dry-steam/Darajat adaptations (peripheral condensate, quenching, two-phase tracer partitioning, R_th value) flagged ⟦TODO-Az⟧. Exact anchor citation flagged. Seed cards deferred until Az sign-off.'
  },
  {
    id: 'sanyal-2005',
    type: 'paper',
    title: 'Booking Geothermal Energy Reserves: Decline-Curve Analysis and Resource Estimation',
    authors: ['Sanyal, S.K.', 'Sarmiento, Z.'],
    year: 2005,
    phase: 'production',
    difficulty: 4,
    prereqs: ['grant-bixley-2011'],
    tags: ['decline-curves', 'reserves', 'resource-assessment', 'monte-carlo', 'stored-heat', 'arps', 'DRAFT', 'darajat-relevant'],
    system_type: 'UNIVERSAL',
    notes: 'DRAFT (AWAITING AZ DOMAIN REVIEW). Decline-curve analysis + reserves/resource estimation anchored on Sanyal (GeothermEx). Arps rate–time decline (exponential/hyperbolic/harmonic via exponent b → EUR); volumetric stored-heat (Muffler-Cataldi) × recovery factor → MW capacity; Monte-Carlo → P90/P50/P10 = proven/probable/possible (Sanyal-Sarmiento). Dry-steam/Darajat adaptations (does Arps transfer to pressure/reinjection-governed steam-rate decline, dry-steam recovery factor, reinjection coupling, Acuña deliverability link) flagged ⟦TODO-Az⟧. Seed cards deferred until Az sign-off.'
  },
  {
    id: 'giggenbach-1988',
    type: 'paper',
    title: 'Geothermal Solute Equilibria: Derivation of Na-K-Mg-Ca Geoindicators',
    authors: ['Giggenbach, W.F.'],
    year: 1988,
    phase: 'geochemistry',
    difficulty: 4,
    prereqs: ['henley-truesdell-barton-1984'],
    tags: ['production-geochemistry', 'geothermometry', 'na-k-mg-diagram', 'gas-geothermometry', 'scaling', 'fluid-equilibria', 'DRAFT', 'darajat-relevant'],
    system_type: 'UNIVERSAL',
    notes: 'DRAFT (AWAITING AZ DOMAIN REVIEW). Production geochemistry / geothermometry anchored on Giggenbach (DSIR NZ; Na-K-Mg geoindicators, GCA 1988). Solute geothermometers (silica/quartz, Na-K = 1390/(1.75+log Na/K)−273, K-Mg); the Na-K-Mg ternary diagram as an equilibrium VALIDITY test (fully equilibrated / partial / immature); gas geothermometry (CO2/H2S/H2/CH4) for vapour-dominated fields; scaling prediction (silica/calcite). HEADLINE dry-steam adaptation: solute geothermometers need a liquid sample — Darajat produces steam+NCG, so reservoir-T & monitoring lean on gas geothermometry + steam/condensate chemistry — all ⟦TODO-Az⟧-flagged (incl. exact constants, sampling, NCG/H2S). Seed cards deferred until Az sign-off.'
  },
  {
    id: 'finger-blankenship-2010',
    type: 'book',
    title: 'Handbook of Best Practices for Geothermal Drilling',
    authors: ['Finger, J.', 'Blankenship, D.'],
    year: 2010,
    phase: 'production',
    difficulty: 3,
    prereqs: ['grant-bixley-2011'],
    tags: ['drilling', 'well-completion', 'casing-design', 'cementing', 'lost-circulation', 'directional-drilling', 'DRAFT', 'darajat-relevant'],
    system_type: 'UNIVERSAL',
    notes: 'DRAFT (AWAITING AZ DOMAIN REVIEW). Geothermal drilling & well construction anchored on the Sandia handbook (Finger & Blankenship, SAND2010-6048). Telescoping cemented casing strings (conductor→surface→intermediate→production) + production liner; casing design under thermal cycling (σ~EαΔT); lost-circulation spectrum (LCM → aerated/water → blind drilling); directional/pad targeting of fracture-feedzone structure; high-T logging. Drilling = ⅓–½ of project capital (ties to Sanyal). Dry-steam/Darajat adaptations (blind drilling under-pressured steam zones, large-bore deliverability completions, H2S, casing/cement choices, feedzone targeting) flagged ⟦TODO-Az⟧. Seed cards deferred until Az sign-off.'
  },
  {
    id: 'gallup-2009',
    type: 'paper',
    title: 'Production Engineering in Geothermal Technology: A Review',
    authors: ['Gallup, D.L.'],
    year: 2009,
    phase: 'geochemistry',
    difficulty: 4,
    prereqs: ['henley-truesdell-barton-1984'],
    tags: ['scaling', 'corrosion', 'production-chemistry', 'silica', 'calcite', 'flow-assurance', 'NCG', 'DRAFT', 'darajat-relevant'],
    system_type: 'UNIVERSAL',
    notes: 'DRAFT (AWAITING AZ DOMAIN REVIEW). Scaling, corrosion & production chemistry anchored on Gallup (Unocal/Chevron/Thermochem; inventor of the pH-mod silica-control process). Silica scaling (cooling + flashing concentration → polymerisation; controls: stay above saturation, residence time, pH-mod, inhibitors); calcite scaling (CO2 loss at flash point → CaCO3 at flash horizon; downhole inhibitor capillary); corrosion (H2S/CO2/chloride/low-pH/O2 ingress; materials, inhibitors, O2 exclusion); NCG/H2S abatement. HEADLINE dry-steam shift: steam+NCG not brine → condensate chemistry + H2S/NCG abatement + line corrosion dominate (most of the literature is liquid/brine) — all ⟦TODO-Az⟧-flagged. Seed cards deferred until Az sign-off.'
  },
  {
    id: 'whiting-ramey-1969',
    type: 'paper',
    title: 'Application of Material and Energy Balances to Geothermal Steam Production',
    authors: ['Whiting, R.L.', 'Ramey, H.J. Jr.'],
    year: 1969,
    phase: 'reservoir',
    difficulty: 3,
    prereqs: ['grant-bixley-2011'],
    tags: ['material-balance', 'lumped-parameter', 'reservoir-modelling', 'sustainability', 'history-matching', 'interactive-viz', 'DRAFT', 'darajat-relevant'],
    system_type: 'UNIVERSAL',
    notes: 'DRAFT (AWAITING AZ DOMAIN REVIEW). Material/energy balance + lumped-parameter reservoir modelling anchored on Whiting & Ramey 1969 (first applied petroleum material/energy balance to geothermal; Wairakei; Ramey = Stanford reservoir-eng, Horne lineage). Single-tank balance κ dp/dt = −Wp(1−f) + a(p0−p) → p∞ = p0−Wp(1−f)/a, τ=κ/a; open (stabilises/sustainable) vs closed (linear decline/mined); reinjection f lifts p∞. CARRIES AN INTERACTIVE VIZ (LumpedReservoirSim, js/viz.js; math verified by verify-lumped-sim.mjs vs RK4 — first DRAFT with a simulator). HEADLINE dry-steam adaptation: Whiting-Ramey is a STEAM material/energy balance (pore-water boiling + heat mined from rock); the liquid tank is an intuition scaffold — the Darajat steam/heat balance, κ/a/recharge values, and reinjection-decline coupling all ⟦TODO-Az⟧-flagged. Seed cards deferred until Az sign-off.'
  },
];
