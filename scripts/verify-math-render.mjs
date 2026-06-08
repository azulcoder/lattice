#!/usr/bin/env node
// Persistent harness: every piece of math in every content module must RENDER.
//
// The Lattice renderer (js/content.js renderTrustedMarkdown) treats '$' as the
// only math delimiter: $…$ = inline, $$…$$ = block. It does NOT understand the
// LaTeX delimiters \[ \] \( \), and it has no concept of an escaped \$ — so a
// literal/currency '$' (e.g. "$100M") or a stray \$ collides with the math
// delimiters, mis-pairs, and leaves raw LaTeX exposed to the reader. This
// harness scans every section body and self-test field and fails on:
//   M1: an UNSUPPORTED LaTeX delimiter \[ \] \( \) (use $$…$$ / $…$ instead)
//   M2: ODD '$' count in a field (after removing $$…$$ blocks) — a mis-paired
//       math/currency dollar (write currency as "USD N", never "$N" or "\$N")
//   M3: a stray LaTeX command (\frac, \lambda, …) surviving OUTSIDE a rendered
//       math span — math that was never wrapped in $…$
//
// Usage: node scripts/verify-math-render.mjs [--quiet]
// Exit: 0 = all math renders, 1 = any issue.

import { pathToFileURL, fileURLToPath } from 'node:url';
import path from 'node:path';
import { readdirSync } from 'node:fs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const QUIET = process.argv.includes('--quiet');

const { renderTrustedMarkdown } = await import(pathToFileURL(path.join(ROOT, 'js/content.js')).href);

const results = [];
function check(section, label, cond, detail = '') {
  results.push({ section, ok: !!cond });
  if (!QUIET && !cond) console.log(`  [${section}] ✗ ${label}${detail ? ': ' + detail : ''}`);
}

const STRAY = /\\(frac|sqrt|sum|prod|int|sigma|lambda|Delta|delta|theta|rho|alpha|beta|gamma|mu|tau|cdot|times|approx|ge|le|neq|partial|nabla|mathbb|mathbf|text|left|right|hat|bar|overline|Pi|Sigma|Omega|exp|ln|log|frac)\b/;

const domains = ['microstructure', 'geothermal', 'trading'];
for (const d of domains) {
  const dir = path.join(ROOT, 'data/domains', d, 'content');
  let files = [];
  try { files = readdirSync(dir).filter((x) => x.endsWith('.js')); } catch { continue; }
  for (const file of files) {
    let CONTENT;
    try { ({ CONTENT } = await import(pathToFileURL(path.join(dir, file)).href)); } catch { continue; }
    if (!CONTENT) continue;
    const fields = [];
    for (const s of (CONTENT.sections || [])) {
      fields.push([`${s.id}.en`, s.body?.en || '']);
      fields.push([`${s.id}.id`, s.body?.id || '']);
    }
    for (let i = 0; i < (CONTENT.selfTest || []).length; i++) {
      const st = CONTENT.selfTest[i];
      for (const L of ['en', 'id']) {
        fields.push([`selfTest[${i}].question.${L}`, st.question?.[L] || '']);
        fields.push([`selfTest[${i}].answer.${L}`, st.answer?.[L] || '']);
      }
    }
    for (const [loc, body] of fields) {
      const where = `${d}/${file} ${loc}`;
      check('M1', `${where}: no unsupported \\[ \\] \\( \\) delimiter`, !/\\\[|\\\]|\\\(|\\\)/.test(body));
      const noBlocks = body.replace(/\$\$[\s\S]+?\$\$/g, '');
      const dollars = (noBlocks.match(/\$/g) || []).length;
      check('M2', `${where}: even $ pairing (got ${dollars})`, dollars % 2 === 0);
      const stray = renderTrustedMarkdown(body).replace(/data-latex="[^"]*"/g, '').match(STRAY);
      check('M3', `${where}: no stray LaTeX outside $…$`, !stray, stray ? `"${stray[0]}"` : '');
    }
  }
}

const total = results.length, passed = results.filter((r) => r.ok).length;
const bySection = {};
for (const r of results) { bySection[r.section] = bySection[r.section] || { t: 0, p: 0 }; bySection[r.section].t++; if (r.ok) bySection[r.section].p++; }
if (!QUIET) {
  console.log('\n=== Math-rendering verification (all content modules) ===');
  for (const s of Object.keys(bySection).sort()) console.log(`  ${s}: ${bySection[s].p}/${bySection[s].t}${bySection[s].p === bySection[s].t ? ' ✓' : ' ✗'}`);
  console.log(`\nTotal: ${passed}/${total}`);
}
if (passed === total) { if (!QUIET) console.log('All math renders: no bad delimiters, even $ pairing, no stray LaTeX.'); process.exit(0); }
else { console.log(`\n${total - passed} field(s) with a math-rendering issue.`); process.exit(1); }
