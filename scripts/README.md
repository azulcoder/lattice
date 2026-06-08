# scripts/

Persistent verification + utility scripts for Lattice. Run with `node scripts/<name>.mjs`.

These complement the inline `node -e` verification done during phase commits — anything that should remain re-runnable after the phase ships goes here.

## Quick start

```bash
node scripts/verify-all.mjs          # run all verify-*.mjs scripts
node scripts/verify-all.mjs --quiet  # only print summary line
```

Exit code 0 iff every script passes. Useful for CI / pre-commit hooks.

## Scripts

### `verify-all.mjs`

Master runner. Auto-discovers and runs every `verify-*.mjs` in this directory (except itself). Forwards `--quiet` to each.

### `verify-acuna-prep.mjs`

Verifies the live Acuña simulator (`solveAcunaW` in `js/viz.js`) against every numerical claim in [`notes/g1-dogfood-prep-2026-05-28.md`](../notes/g1-dogfood-prep-2026-05-28.md) Sections A1-A9. **96 checks** across:

- A1: baseline curve (15 P_f points) + monotonicity
- A2-A4: AOF sensitivity to P_rg, C_WB, PI + monotonicity + PI asymmetry
- A5 (post-G1.2): skin sensitivity + negative-skin behavior + clamping
- A6: Scenario A vs B diagnostic signatures (7 P_f × 3 curves)
- A7: crossover P_f recompute + properties
- A8: edge cases + 243-point NaN-resistance sweep
- A9: Wayang Windu Case-1 sanity benchmark

### `verify-content-schema.mjs`

Validates structural integrity of every content module across all domains. Auto-discovers `data/domains/*/content/*.js` and runs **414 checks** against the canonical content schema:

- S1: itemId resolves in domain's `items.js`
- S2: Required top-level fields (estimatedReadMinutes, audio, sections, author, selfTest)
- S3: Author block — 8 required prose fields all bilingual + keyWorks array (≥4 entries with year/title/venue)
- S4: All 8 canonical sections present (motivation, intuition, formalization, worked-example, applications, practice, connections, sources) + bilingual heading + bilingual body + word count thresholds (EN ≥ 1500, ID ≥ 1000 per module)
- S5: selfTest entries well-formed (sectionId resolves, question/prompt/answer all bilingual, spans ≥ 3 distinct sections)
- S6: Viz component references in content modules resolve to registered components in `js/viz.js`
- S7: `item:foo-bar` cross-references in body text resolve to real item ids across all domains
- S8: items.js prereqs resolve (cross-domain prereqs allowed) + no duplicate item ids per domain

Covers all 5 current content modules: hasbrouck-2007, ohara-1995, kyle-1985, glosten-milgrom-1985, acuna-2008. Auto-extends as new modules are added.

### `verify-roll-sim.mjs`

Verifies the live Roll (1984) spread simulator (`simulateRoll` in `js/viz.js`) against the statistical theory of the Roll estimator. Roll is inherently statistical, so most checks use Monte Carlo across many seeds with loose tolerance (E[Roll estimate] → s, not single-sample equality). **30 checks** across:

- R1: Structural — output shape, q ∈ {-1,+1} only, p = m + (s/2)·q identity, dp = first diff identity
- R2: Roll estimator approximately unbiased at ρ=0 (Monte Carlo, 3 spread values × 60 seeds × 2000 samples)
- R3: Theoretical Cov(Δp_t, Δp_{t-1}) ≈ -(s/2)² at ρ=0
- R4: ρ > 0 (informed-trader autocorrelation) produces downward-biased Roll estimate
- R5: ρ < 0 (anti-correlated trades, reinforced bid-ask bounce) produces upward-biased Roll estimate
- R6: Variance shrinks with n (approximately 1/√n)
- R7: Determinism (same seed = same trace, different seeds diverge)
- R8: Boundary behavior (very small s, s=0, |ρ| near slider edges)

### `verify-gm-sim.mjs`

Verifies the live Glosten-Milgrom simulator (`gmAsk`, `gmBid`, `gmPosteriorOnBuy`, `gmPosteriorOnSell`, `simulateGM` in `js/viz.js`) against the closed-form theory in the 1985 paper. **143 checks** across:

- B1: Posterior formulas (P(V_H|buy), P(V_H|sell)) at default + α/π boundaries + Bayesian directional sanity (buy raises posterior, sell lowers)
- B2: Quote formulas (ask, bid) at default + α=0/α=1 boundaries + ask ≥ bid no-arbitrage across param grid
- B3: Spread formula s = α(V_H - V_L) at π=0.5 + α=0/α=1 edges + spread vanishes at π→0/π→1 + spread maximal at π=0.5
- B4: Convergence to truth (mean across 30 seeds × 300 trades, true=H/L) + higher α converges faster
- B5: Spread shrinkage over trade sequence
- B6: Determinism (same seed = same trace, different seeds diverge)
- B7: Boundary behavior (π=0/1 absorbing, α=0 no learning, α=1 with true=H jumps instantly)
- B8: Martingale property E[μ_{t+1} | F_t] = μ_t (the GM martingale is μ_t = π_t·V_H + (1-π_t)·V_L, NOT the (a+b)/2 mid — they coincide at π=0.5 by symmetry but not elsewhere)

## Common usage

```bash
# Full run, verbose
node scripts/verify-all.mjs

# Quiet (for CI)
node scripts/verify-all.mjs --quiet

# Single script
node scripts/verify-acuna-prep.mjs

# Filter to one section within a script
node scripts/verify-acuna-prep.mjs --section A5
node scripts/verify-gm-sim.mjs --section B8
```

## Maintenance protocol

When `js/viz.js` (solver or sim) changes, re-run the relevant script. If failures appear, decide whether to:

1. **Update the solver/sim** to match prep file / theory (if the prep file / theory is correct)
2. **Update the prep file + this script** to match the new solver (if the new solver is intentionally different)

Either way, keep all three in sync (solver, prep file, harness). The harness is the source-of-truth for "what the simulator should do at default params."
