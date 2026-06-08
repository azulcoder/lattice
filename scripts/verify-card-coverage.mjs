#!/usr/bin/env node
// SRS card-coverage harness (Phase S1).
//
// For a spaced-repetition platform, a *finalized* content module with zero (or
// near-zero) review cards is a definition-of-done gap: its Review tab can never
// surface a due card. verify-app-logic L5 checks card *integrity* but explicitly
// allows a domain to have no cards yet; this harness adds the *coverage* gate.
//
// Rule:
//   - Every microstructure content module must carry >= MIN_CARDS seed cards.
//   - EXEMPT: the geothermal domain (cards are Az-gated / deferred until sign-off)
//     and any module whose file is flagged "AWAITING AZ DOMAIN REVIEW" (a DRAFT).
//   Exempt modules are reported (informational) but never fail the gate.
//
// Usage:
//   node scripts/verify-card-coverage.mjs
//   node scripts/verify-card-coverage.mjs --quiet
//
// Exit code: 0 = all pass, 1 = any fail.

import { pathToFileURL, fileURLToPath } from 'node:url';
import { readdirSync, readFileSync, existsSync } from 'node:fs';
import path from 'node:path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const QUIET = process.argv.includes('--quiet');

const MIN_CARDS = 8;                         // floor for a finalized module
const DRAFT_MARKER = 'AWAITING AZ DOMAIN REVIEW';
const ENFORCED_DOMAINS = new Set(['microstructure', 'trading']);  // geothermal exempt (Az-gated)

const imp = (rel) => import(pathToFileURL(path.join(ROOT, rel)).href);

const results = [];
function check(label, cond, detail = '') {
  results.push({ label, ok: !!cond, detail });
  if (!QUIET && !cond) console.log(`  ✗ ${label}${detail ? ': ' + detail : ''}`);
}

const domainsDir = path.join(ROOT, 'data/domains');
const domains = readdirSync(domainsDir).filter(d =>
  existsSync(path.join(domainsDir, d, 'content')));

let exemptCount = 0;
for (const domain of domains.sort()) {
  // Load this domain's seed cards and tally by itemId.
  const cardsRel = `data/domains/${domain}/seed-cards.js`;
  let cards = [];
  if (existsSync(path.join(ROOT, cardsRel))) {
    const mod = await imp(cardsRel).catch(() => ({}));
    cards = Array.isArray(mod.SEED_CARDS) ? mod.SEED_CARDS : [];
  }
  const countByItem = new Map();
  for (const c of cards) if (c && c.itemId) countByItem.set(c.itemId, (countByItem.get(c.itemId) || 0) + 1);

  const contentDir = path.join(domainsDir, domain, 'content');
  const files = readdirSync(contentDir).filter(f => f.endsWith('.js'));
  for (const file of files.sort()) {
    const src = readFileSync(path.join(contentDir, file), 'utf8');
    const m = src.match(/itemId:\s*'([a-z0-9-]+)'/);
    if (!m) continue;
    const itemId = m[1];
    const n = countByItem.get(itemId) || 0;
    const isDraft = src.includes(DRAFT_MARKER);
    const enforced = ENFORCED_DOMAINS.has(domain) && !isDraft;

    if (!enforced) {
      exemptCount++;
      if (!QUIET) console.log(`  · exempt (${isDraft ? 'DRAFT' : 'Az-gated domain'}): ${itemId} — ${n} cards`);
      continue;
    }
    check(`${itemId}: >= ${MIN_CARDS} seed cards`, n >= MIN_CARDS, `has ${n}`);
  }
}

const passed = results.filter(r => r.ok).length;
if (!QUIET) {
  console.log(`\n  enforced modules: ${results.length} · exempt (geothermal/DRAFT): ${exemptCount}`);
}
console.log(`Total: ${passed}/${results.length}`);
if (passed === results.length) console.log('All checks pass. Every finalized module has SRS card coverage.');
process.exit(passed === results.length ? 0 : 1);
