# Content authoring guide — geothermal domain

Mirrors the microstructure content authoring guide with geothermal-specific tone calibration. Each module is a static ES module at `<item-id>.js` exporting `CONTENT` for one item.

**Current state (Phase G1):**
- `acuna-2008.js` — first geothermal content, fully bilingual (EN + ID), 8 sections + author block + interactive deliverability simulator

## Schema

Identical to microstructure schema (see [`../../microstructure/content/README.md`](../../microstructure/content/README.md) for the full reference). Use the same 8 canonical section IDs: `motivation`, `intuition`, `formalization`, `worked-example`, `applications`, `practice`, `connections`, `sources`.

Author block: 8 prose fields (`fullName`, `affiliation`, `tagline`, `bio`, `focus`, `intellectualLineage`, `keyCollaborators`, `legacy`) plus `keyWorks` array. All bilingual.

`audio: { enabled: true }`, `selfTest: [...]`, optional `section.visualization`.

## Tone calibration for geothermal ID layer

Same code-switching pattern as microstructure — **technical reservoir engineering vocabulary stays English even in Indonesian sentences**. The Indonesian geothermal operations community routinely code-switches; native register has high English density.

**Stay English:**
- `deliverability`, `wellbore`, `bottomhole`, `wellhead`, `feedzone`
- `reservoir pressure`, `productivity index`, `skin factor`, `permeability-thickness`
- `gravity correction`, `friction loss`, `kinematic viscosity`, `Reynolds number`
- `dry steam`, `vapor-dominated`, `two-phase`, `flash separator`
- `tie-back`, `casing`, `slotted liner`, `open hole`, `workover`
- `scaling`, `silica deposition`, `calcite`, `sample catcher`
- `decline curve`, `output curve`, `deliverability test`
- All field names (`Darajat`, `Wayang Windu`, `Salak`, `Awibengkok`, `Kamojang`, `Mak-Ban`)

**Translate naturally:**
- "However" → "tapi" not "namun"
- "Therefore" → "jadi" not "oleh karena itu"
- "Because" → "karena"
- "If" → "kalau" not "jika"
- "Using" → "pakai" not "menggunakan"

## Persona framing for geothermal

Adapt the three-persona structure to geothermal context:

- **Advanced researcher** → academic / consultant / R&D engineer at major operator. Audience for theoretical extensions, simulator integration (TOUGH2 / iTOUGH2), publication-grade methodology.
- **Quant practitioner** → **field reservoir engineer**. Daily workflow: production data analysis, decline forecasting, workover candidacy assessment, capex allocation across fleet.
- **Retail trader** → **operations team**. Weekly/monthly dashboards, alert thresholds, surveillance review. Owns the well-by-well watch.

These are different audiences than microstructure but the funnel shape (aspirational → practitioner → operational) is the same.

## Math notation tips (geothermal-specific)

- Pressure units default to **bara** (bar absolute). Always include explicit unit annotation in worked examples.
- Mass flow rate in **kg/s** (not kg/hr — geothermal industry standard is kg/s).
- Use `p_{rg}` for gravity-corrected reservoir pressure, `p_{wfg}` for gravity-corrected wellbore flowing pressure, `p_f` for wellhead flowing pressure, `p_r` for static reservoir pressure.
- Productivity index `PI` — dimensionless in many formulations or kg/s/bar² depending on convention; clarify per use.
- Wellbore coefficient `C_{WB}` — units kg/s·bar.
- Acuña 2010 definition of `C_{WB}` differs from 2008 by factor of √2 (2010 is the "physically intuitive" version). Use 2010 definition in all new content. Cite Acuña 2010 as the definitive form.

## When authoring geothermal content

Domain expert reviewer (`azul` is Reservoir & Production Engineer at Star Energy Geothermal Darajat) will catch operational inaccuracies. Frame conservatively:

- "Common practice at Indonesian dry steam fields" rather than claiming specific Darajat workflows that aren't publicly documented.
- Cite published application papers (Hernawan-Situmorang 2013 for Wayang Windu, Acuña-Stimac 2008 for Awibengkok) rather than asserting field-specific practice from general knowledge.
- Numerical examples should be plausible for Indonesian dry steam (reservoir pressure 20-35 bara at producing wells, wellhead pressure 8-18 bara typical, mass flow 30-80 kg/s per well).
