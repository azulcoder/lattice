#!/usr/bin/env node
// Static validation for the PWA / offline layer (Phase S6): the web app
// manifest, the icon, the service worker (precache + network-first + cross-origin
// guard), the index.html wiring, and the responsive stylesheet. Pure
// file-content checks — no browser needed.
//
// Usage:  node scripts/verify-pwa.mjs [--quiet]
// Exit code: 0 = all pass, 1 = any fail.

import { readFileSync, existsSync } from 'node:fs';
import { fileURLToPath, pathToFileURL } from 'node:url';
import path from 'node:path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const QUIET = process.argv.includes('--quiet');
const read = (rel) => readFileSync(path.join(ROOT, rel), 'utf8');

const results = [];
function check(section, label, cond, detail = '') {
  results.push({ section, ok: !!cond });
  if (!QUIET && !cond) console.log(`  [${section}] ✗ ${label}${detail ? ': ' + detail : ''}`);
}

// ─── P1: manifest.json ─────────────────────────────────────────────────
{
  check('P1', 'manifest.json exists', existsSync(path.join(ROOT, 'manifest.json')));
  let m = {};
  try { m = JSON.parse(read('manifest.json')); check('P1', 'manifest is valid JSON', true); }
  catch { check('P1', 'manifest is valid JSON', false); }
  check('P1', 'has name + short_name', typeof m.name === 'string' && typeof m.short_name === 'string');
  check('P1', "start_url + scope are './'", m.start_url === './' && m.scope === './');
  check('P1', "display = 'standalone'", m.display === 'standalone');
  check('P1', 'theme_color + background_color set', /^#/.test(m.theme_color || '') && /^#/.test(m.background_color || ''));
  check('P1', 'theme_color matches chrome (#1a1614)', m.theme_color === '#1a1614');
  check('P1', '≥1 icon with src + type', Array.isArray(m.icons) && m.icons.length >= 1 && m.icons.every((i) => i.src && i.type));
  check('P1', 'icon is maskable', (m.icons || []).some((i) => /maskable/.test(i.purpose || '')));
}

// ─── P2: icon.svg ──────────────────────────────────────────────────────
{
  check('P2', 'icon.svg exists', existsSync(path.join(ROOT, 'icon.svg')));
  const svg = existsSync(path.join(ROOT, 'icon.svg')) ? read('icon.svg') : '';
  check('P2', 'is an <svg> with a viewBox', /<svg[^>]*viewBox=/.test(svg));
  check('P2', 'square 512 viewBox', /viewBox="0 0 512 512"/.test(svg));
}

// ─── P3: service worker ────────────────────────────────────────────────
{
  check('P3', 'sw.js exists', existsSync(path.join(ROOT, 'sw.js')));
  const sw = existsSync(path.join(ROOT, 'sw.js')) ? read('sw.js') : '';
  check('P3', 'defines a versioned cache name', /const\s+CACHE\s*=\s*['"][\w-]+['"]/.test(sw));
  check('P3', 'install handler precaches a shell', /addEventListener\(['"]install['"]/.test(sw) && /addAll\(/.test(sw));
  check('P3', 'activate handler cleans old caches', /addEventListener\(['"]activate['"]/.test(sw) && /caches\.delete/.test(sw));
  check('P3', 'fetch handler with respondWith', /addEventListener\(['"]fetch['"]/.test(sw) && /respondWith/.test(sw));
  check('P3', 'network-first with cache fallback (cache.put + cache.match)', /cache\.put\(/.test(sw) && /cache\.match\(/.test(sw));
  check('P3', 'GET-only + same-origin guard', /method\s*!==\s*['"]GET['"]/.test(sw) && /origin\s*!==\s*self\.location\.origin/.test(sw));
  // precached shell files actually exist on disk
  const shell = ['index.html', 'styles.css', 'manifest.json', 'icon.svg', 'vendor/katex.min.css', 'vendor/katex.min.js', 'js/app.js'];
  check('P3', 'every precached shell file exists', shell.every((f) => existsSync(path.join(ROOT, f))));
  check('P3', 'shell lists the core app files', ['index.html', 'styles.css', 'js/app.js'].every((f) => sw.includes(f)));
}

// ─── P4: index.html wiring ─────────────────────────────────────────────
{
  const html = read('index.html');
  check('P4', 'links the manifest', /<link[^>]*rel=["']manifest["'][^>]*href=["']manifest\.json["']/.test(html));
  check('P4', 'theme-color meta', /<meta[^>]*name=["']theme-color["'][^>]*content=["']#1a1614["']/.test(html));
  check('P4', 'svg icon link', /<link[^>]*rel=["']icon["'][^>]*icon\.svg/.test(html));
  check('P4', 'apple-touch-icon', /apple-touch-icon/.test(html));
  check('P4', 'loads the PWA module (js/pwa.js)', /<script[^>]*src=["']js\/pwa\.js["']/.test(html));
}

// ─── P6: PWA install prompt + update toast (js/pwa.js) ─────────────────
{
  const pwa = existsSync(path.join(ROOT, 'js/pwa.js')) ? read('js/pwa.js') : '';
  check('P6', 'js/pwa.js exists', pwa.length > 0);
  check('P6', 'registers the service worker (guarded)', /serviceWorker\.register\(\s*['"]sw\.js['"]/.test(pwa) && /serviceWorker['"]?\s+in\s+navigator/.test(pwa) && /\.catch\(/.test(pwa));
  check('P6', 'captures beforeinstallprompt + appinstalled', /beforeinstallprompt/.test(pwa) && /appinstalled/.test(pwa) && /\.prompt\(\)/.test(pwa));
  check('P6', 'detects updates (updatefound / waiting)', /updatefound/.test(pwa) && /reg\.waiting/.test(pwa));
  check('P6', 'posts SKIP_WAITING + reloads on controllerchange', /postMessage\(\s*\{\s*type:\s*['"]SKIP_WAITING['"]/.test(pwa) && /controllerchange/.test(pwa) && /location\.reload\(\)/.test(pwa));
  check('P6', 'self-init is guarded (window check)', /typeof\s+window\s*!==\s*['"]undefined['"]/.test(pwa));
  // sw.js honours the SKIP_WAITING message
  const sw = read('sw.js');
  check('P6', 'sw.js handles SKIP_WAITING → skipWaiting', /addEventListener\(['"]message['"]/.test(sw) && /SKIP_WAITING/.test(sw) && /skipWaiting\(\)/.test(sw));
  // toast markup (pure)
  const mod = await import(pathToFileURL(path.join(ROOT, 'js/pwa.js')).href);
  const installHTML = mod.pwaToastHTML('install', 'en');
  const updateHTML = mod.pwaToastHTML('update', 'en');
  check('P6', 'install toast has an install action', /data-action=["']pwa-install["']/.test(installHTML) && /Install/.test(installHTML));
  check('P6', 'update toast has a reload action', /data-action=["']pwa-reload["']/.test(updateHTML) && /Reload/.test(updateHTML));
  check('P6', 'both toasts have a dismiss control', /data-action=["']pwa-dismiss["']/.test(installHTML) && /data-action=["']pwa-dismiss["']/.test(updateHTML));
  check('P6', 'toast localises to ID', /Pasang/.test(mod.pwaToastHTML('install', 'id')));
}

// ─── P5: responsive stylesheet ─────────────────────────────────────────
{
  const css = read('styles.css');
  check('P5', 'has a mobile max-width media query', /@media\s*\(max-width:\s*720px\)/.test(css));
  check('P5', 'hides keyboard hints on mobile', /\.tab kbd\s*\{\s*display:\s*none/.test(css));
  check('P5', 'stacks viz control labels', /\.viz-control-label\s*\{[^}]*flex-basis:\s*100%/.test(css));
  check('P5', 'has a small-phone breakpoint', /@media\s*\(max-width:\s*420px\)/.test(css));
}

const passed = results.filter(r => r.ok).length;
console.log(`\nTotal: ${passed}/${results.length}`);
if (passed === results.length) console.log('All checks pass. PWA manifest + service worker + responsive layer wired correctly.');
process.exit(passed === results.length ? 0 : 1);
