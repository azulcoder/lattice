# Content authoring guide — microstructure domain

This directory holds rich item content modules. Each module is a static ES module exporting `CONTENT` for one item. Cards (in [`../seed-cards.js`](../seed-cards.js)) are atomic SRS retention units; content modules are the "long form" you read before the cards make sense.

**Current state (Phase 1.3):**
- `hasbrouck-2007.js` — first rich content, fully bilingual (EN + ID), 8 sections + author block
- Other items: items.js metadata present, no content modules. Fall back to minimal layout when selected.

## Schema (Phase 1.3)

```js
export const CONTENT = {
  itemId: 'hasbrouck-2007',         // must match an id in ../items.js
  estimatedReadMinutes: 38,
  
  author: {                          // frontmatter card metadata
    fullName:            { en: '...', id: '...' },
    affiliation:         { en: '...', id: '...' },
    tagline:             { en: '...', id: '...' },  // 1-line teaser shown collapsed
    bio:                 { en: '...', id: '...' },
    focus:               { en: '...', id: '...' },
    intellectualLineage: { en: '...', id: '...' },
    keyCollaborators:    { en: '...', id: '...' },
    legacy:              { en: '...', id: '...' },
    keyWorks: [
      { year: 1991, title: '...', venue: 'Journal of Finance' },
      // ...
    ],
  },
  
  sections: [
    // 8 canonical sections in this order — see below for IDs
    {
      id: 'motivation',
      heading: { en: 'Why this matters', id: 'Kenapa ini penting' },
      body:    { en: '...', id: '...' },
    },
    // ...
  ],
  
  audio:    {},                      // populated in Phase 1.5
  selfTest: [],                      // populated in Phase 1.6 (or later)
};
```

## The 8 canonical sections

Author in this order. IDs are stable (used for anchor links, self-test references, future visualization hooks).

1. **motivation** — Why this concept exists, what problem it solves, concrete cost of not knowing it. ~150 words.
2. **intuition** — Concept explained without math, with one analogy that grips the idea. ~200 words.
3. **formalization** — Math, notation, derivation step-by-step. KaTeX blocks for non-trivial expressions. Annotated: each algebraic move gets a 1-2 sentence "why" justification. ~500-600 words.
4. **worked-example** — Concrete numbers, walk-through application. Cross-check against direct observation when possible. ~200 words.
5. **applications** — Persona-framed practical relevance. 3 subsections via `### `, ordered: advanced researcher → quant practitioner → retail trader. ~400-600 words.
6. **practice** — 3-4 exercises with answers in `<details>` collapsibles. Use `<summary>Answer</summary>` (EN) or `<summary>Jawaban</summary>` (ID). ~300 words.
7. **connections** — Prereqs (↑), extends-to (↓) using `[text](item:item-id)` syntax for inter-item links, related cards. ~100 words.
8. **sources** — Citations with chapter/section pointers. ~80 words.

Headings can vary; **IDs cannot**.

## Bilingual fields

Every prose field has `{en, id}`:

- **EN** is the primary content. Always populate.
- **ID** is the intuitive Indonesian layer. May be empty for new items (renders with fallback notice).

When viewing in ID mode and `field[lang]` is empty, the page renders English with notice "ID belum tersedia — menampilkan English". Per-field fallback (not page-level).

### Tone calibration for ID

- Conversational Jakarta Indonesian, friend-explaining-to-friend register
- Technical vocabulary stays English: `efficient price`, `bid-ask bounce`, `spread`, `martingale`, `autocovariance`, `Roll estimator`, `trade direction`, `iid`, `informed trader`, `adverse selection`, `order flow`, `execution algorithm`, `market maker`, etc.
- Math notation unchanged ($\ldots$ and $$\ldots$$ render identically)
- Length target: ~65% of EN word count (intuitive layer is concise; not literal translation)
- Casual register markers:
  - "tapi" not "tetapi"
  - "jadi" not "oleh karena itu"
  - "kalau" not "jika"
  - "ngajarin" not "mengajarkan"
  - "kasih" not "memberikan"
- Avoid Google-translate-ish literal renderings — reframe ideas naturally

## Markdown subset

Body text supports:

| Syntax | Output | Notes |
|---|---|---|
| `**bold**` | `<strong>` | |
| `*italic*` | `<em>` | |
| `` `code` `` | `<code>` | Monospace |
| `[text](url)` | External link | Opens in new tab |
| `[text](item:item-id)` | Internal navigation | Clicks call `onItemSelect(item-id)` |
| `$inline math$` | KaTeX inline | |
| `$$block math$$` | KaTeX block | |
| `- ` at line start | Bullet list | |
| `### Heading` (single line) | `<h4 class="item-content-subheading">` | Used for persona subsections in applications |
| Blank line | Paragraph break | |
| `<details>`, `<summary>`, raw HTML | Pass-through | Trusted (content is committed source) |

### Math notation tips

- Escape backslash in JS strings: `\\frac{a}{b}` writes `\frac{a}{b}`
- Common LaTeX: `\\mathbb{E}` (expectation), `\\mathcal{F}` (filtration), `\\text{...}` (text inside math)
- Wrap long derivations in `$$...$$` for display mode
- `\\boxed{...}` highlights final results (e.g., Roll's formula)

## Author block guidelines

Five prose fields capture distinct aspects (don't overlap):

| Field | What goes here | Length |
|---|---|---|
| `tagline` | 1-line teaser shown collapsed | ~12 words |
| `bio` | Big-picture career arc + writing style | ~80 words |
| `focus` | Specific research themes | ~60 words |
| `intellectualLineage` | PhD institution, mentors, school of thought | ~60 words |
| `keyCollaborators` | Peer group, frequent co-authors | ~60 words |
| `legacy` | What we learn from the author's approach | ~80 words |

`keyWorks` array: 4+ entries, each with `year`, `title`, `venue`. Titles stay in original language.

### Author bio sourcing

When authoring an author block:
1. Check institution's faculty page (e.g., NYU Stern bio page) for current affiliation, editorial roles, awards
2. Check Wikipedia if available
3. Personal academic page for publications list
4. Flag specific facts you're uncertain about in commit message (PhD year, recent works post-2015, exact co-authorship patterns)

For Hasbrouck 2007, the NYU Stern faculty page correction was material — corrected initial misrecollection of "MIT PhD" to verified "UPenn Wharton Finance PhD". Verify, don't assume.

## When to add a new content module

The Wozniak discipline applies: **reading-driven authoring is the rule**. Don't bulk-generate content for items you haven't read deeply yourself. The 8-section template should reflect your encoded understanding, not a textbook summary.

Add a `// note:` comment near drafts for things you flagged as uncertain during reading — they become future review checkpoints.

When extending to new items:
1. Read source material
2. Author item-level content per this schema
3. Author cards for that item separately (see [../seed-cards.js](../seed-cards.js))
4. Both content + cards are domain-scoped; no cross-domain references

## File naming

`<item-id>.js` matching the `id` field in `../items.js`. The dynamic import in `js/content.js` uses this convention:

```js
const mod = await import(`../data/domains/${domainId}/content/${itemId}.js`);
```

If a content module is absent, the loader returns `null` and the Library item detail falls back to minimal layout (no content sections, just notes + cards).
