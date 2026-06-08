# Documentation index

Map of every documentation file in Lattice. Sorted by how often you'd use it after a break.

---

## Returning to the project? Start here

| Doc | What it is | When to read |
|---|---|---|
| [RESUME.md](../RESUME.md) | Fast-adaptation snapshot — current state, what's next, quick commands | First thing when you come back |
| [README.md](../README.md) | Comprehensive entry-point — full state, features, architecture, how to extend | If RESUME.md doesn't cover what you need |

---

## Daily / iteration reference

| Doc | What it is | When to read |
|---|---|---|
| [CHANGELOG.md](../CHANGELOG.md) | Phase-by-phase change record | Before / after each commit, to see what shipped |
| [scripts/README.md](../scripts/README.md) | Verification harness docs + maintenance protocol | When something fails the verification suite |
| [ARCHITECTURE.md](ARCHITECTURE.md) | Patterns, principles, decisions (module dep graph, data model, viz framework) | When adding a new component / sim / domain |

---

## Per-phase deep dives

| Doc | What it is | When to read |
|---|---|---|
| [PHASES.md](PHASES.md) | Detailed per-phase records (scope, decisions, verification, notes, honest caveats) | When you need to remember WHY a phase decision was made |

---

## Content authoring

| Doc | What it is | When to read |
|---|---|---|
| [data/domains/microstructure/content/README.md](../data/domains/microstructure/content/README.md) | Microstructure content schema + tone | Before authoring a new microstructure content module |
| [data/domains/geothermal/content/README.md](../data/domains/geothermal/content/README.md) | Geothermal content schema + ID tone calibration (for reservoir engineering register) | Before authoring a new geothermal content module |

---

## Evaluation artifacts

| Doc | What it is | When to read |
|---|---|---|
| [notes/g1-dogfood-prep-2026-05-28.md](../notes/g1-dogfood-prep-2026-05-28.md) | Acuña dogfood preparation artifact (Sections A1-A9 simulator tables, B1-B8 ID self-audit, C self-test review, D patch list, E decision scaffold, F irreducible items, G ref summary) | Before doing the Acuña real-data dogfood |

---

## Status snapshots (rolling — older entries are historical)

| Doc | What it is |
|---|---|
| [STATUS.md](../STATUS.md) | Most recent wake-up status — landed Phase 1.4 + 1.5 + 1.6 autonomous run. Pre-Phase-1.7 era; superseded by [RESUME.md](../RESUME.md). |

---

## Where to find specific things

| Looking for... | Go to... |
|---|---|
| How to run the app | [README.md § Quick start](../README.md#quick-start) |
| How to add a new content module | [data/domains/.../content/README.md](../data/domains/microstructure/content/README.md) |
| How to add a new simulator | [README.md § Adding content § New simulator](../README.md#adding-content), [ARCHITECTURE.md § 7](ARCHITECTURE.md#7-visualization-framework) |
| Why we chose pattern X | [ARCHITECTURE.md](ARCHITECTURE.md) for principles, [PHASES.md](PHASES.md) for specific phase decisions |
| What changed in phase Y | [CHANGELOG.md](../CHANGELOG.md) for summary, [PHASES.md](PHASES.md) for detail |
| How verification harnesses work | [scripts/README.md](../scripts/README.md) |
| What's left to do | [RESUME.md § What's pending YOUR input](../RESUME.md#whats-pending-your-input-irreducible) |
| Keyboard shortcuts | [README.md § Keyboard shortcuts](../README.md#keyboard-shortcuts) |
| SM-2 algorithm details | [ARCHITECTURE.md § 5](ARCHITECTURE.md#5-sm-2-algorithm) |
| Storage schema | [ARCHITECTURE.md § 3.6](ARCHITECTURE.md#36-storage-schema-v3) |
| Bilingual fallback rules | [ARCHITECTURE.md § 3.7](ARCHITECTURE.md#37-per-field-bilingual-fallback) |
| Sepia theme palette | [ARCHITECTURE.md § 4](ARCHITECTURE.md#4-aesthetic-system) |
| Auth + AI gating | [README.md § AI features](../README.md#ai-features), [ARCHITECTURE.md § 3.9](ARCHITECTURE.md#39-ai-affordance-click-delegation), [§ 3.10](ARCHITECTURE.md#310-privacy-safe-export) |

---

## Total documentation count

As of 2026-05-31:
- **11 markdown docs in the repo** (this file + 10 others)
- **2649 verification checks** across 22 harnesses in `scripts/`

If you're adding a new doc: also add an entry here in INDEX.md so future-you can find it.
