#!/usr/bin/env node
// Master verification runner. Runs every verify-*.mjs script in scripts/ and
// reports pass/fail per script. Exit code 0 iff all scripts pass.
//
// Usage:
//   node scripts/verify-all.mjs                # full run
//   node scripts/verify-all.mjs --quiet        # only print summary line
//
// Useful for CI / pre-commit hooks. Each underlying script also accepts
// --quiet, which is forwarded.

import { spawnSync } from 'node:child_process';
import { readdirSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const QUIET = process.argv.includes('--quiet');

const scripts = readdirSync(__dirname)
  .filter(f => f.startsWith('verify-') && f.endsWith('.mjs') && f !== 'verify-all.mjs')
  .sort();

const results = [];
for (const script of scripts) {
  const args = QUIET ? ['--quiet'] : [];
  if (!QUIET) console.log(`\n--- ${script} ---`);
  const r = spawnSync('node', [path.join(__dirname, script), ...args], { stdio: 'inherit' });
  results.push({ script, exitCode: r.status, ok: r.status === 0 });
}

const passed = results.filter(r => r.ok).length;
console.log(`\n=== Master: ${passed}/${results.length} scripts pass ===`);
for (const r of results) {
  console.log(`  ${r.ok ? '✓' : '✗'} ${r.script}${r.ok ? '' : ` (exit ${r.exitCode})`}`);
}

process.exit(passed === results.length ? 0 : 1);
