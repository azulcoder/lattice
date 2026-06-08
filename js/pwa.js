// PWA UX (Phase S10): a custom install affordance + an update toast, plus the
// service-worker registration (moved here from the index.html inline script so
// it can also watch for updates).
//
//  • Install:  capture `beforeinstallprompt`, stash it, and offer a small
//    "Install" toast that calls prompt() on click.
//  • Update:   when the SW finds a new version (a worker reaches `installed`
//    while one already controls the page, or reg.waiting exists), show a
//    "New version — Reload" toast that messages the waiting worker to
//    skipWaiting; on controllerchange we reload once into the new version.
//
// The toast MARKUP is a pure exported function so it can be unit-tested; the
// event wiring is browser-only and self-initialises on import (guarded).

export function pwaToastHTML(kind, lang = 'en') {
  const t = lang === 'id'
    ? { install: ['Pasang Lattice buat akses offline', 'Pasang'], update: ['Versi baru tersedia', 'Muat ulang'], dismiss: 'Tutup' }
    : { install: ['Install Lattice for offline use', 'Install'], update: ['A new version is available', 'Reload'], dismiss: 'Dismiss' };
  const [msg, btn] = t[kind];
  const action = kind === 'install' ? 'pwa-install' : 'pwa-reload';
  return `
    <div class="pwa-toast" role="status">
      <span class="pwa-toast-msg">${msg}</span>
      <button class="pwa-toast-btn" data-action="${action}">${btn}</button>
      <button class="pwa-toast-dismiss" data-action="pwa-dismiss" aria-label="${t.dismiss}">×</button>
    </div>`;
}

export function initPWA() {
  if (typeof window === 'undefined' || typeof document === 'undefined' || !('serviceWorker' in navigator)) return;

  const host = document.createElement('div');
  host.id = 'pwa-toast-host';
  document.body.appendChild(host);

  let deferredInstall = null;
  let waiting = null;
  const lang = () => document.documentElement.lang || 'en';
  const hide = () => { host.innerHTML = ''; };

  function show(kind) {
    host.innerHTML = pwaToastHTML(kind, lang());
    host.querySelector('[data-action="pwa-dismiss"]')?.addEventListener('click', hide);
    host.querySelector('[data-action="pwa-install"]')?.addEventListener('click', async () => {
      hide();
      if (deferredInstall) { deferredInstall.prompt(); deferredInstall = null; }
    });
    host.querySelector('[data-action="pwa-reload"]')?.addEventListener('click', () => {
      if (waiting) waiting.postMessage({ type: 'SKIP_WAITING' });
    });
  }

  window.addEventListener('beforeinstallprompt', (e) => { e.preventDefault(); deferredInstall = e; show('install'); });
  window.addEventListener('appinstalled', hide);

  window.addEventListener('load', () => {
    navigator.serviceWorker.register('sw.js').then((reg) => {
      if (reg.waiting && navigator.serviceWorker.controller) { waiting = reg.waiting; show('update'); }
      reg.addEventListener('updatefound', () => {
        const nw = reg.installing;
        if (!nw) return;
        nw.addEventListener('statechange', () => {
          if (nw.state === 'installed' && navigator.serviceWorker.controller) { waiting = reg.waiting || nw; show('update'); }
        });
      });
    }).catch(() => { /* offline support unavailable */ });

    let reloaded = false;
    navigator.serviceWorker.addEventListener('controllerchange', () => {
      if (reloaded) return;
      reloaded = true;
      window.location.reload();
    });
  });
}

if (typeof window !== 'undefined') initPWA();
