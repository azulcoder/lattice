export function todayLocalISO(date = new Date()) {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, '0');
  const d = String(date.getDate()).padStart(2, '0');
  return `${y}-${m}-${d}`;
}

export function addDays(isoDate, days) {
  const [y, m, d] = isoDate.split('-').map(Number);
  const date = new Date(y, m - 1, d);
  date.setDate(date.getDate() + days);
  return todayLocalISO(date);
}

export function isOnOrBefore(isoA, isoB) {
  return isoA <= isoB;
}

// Whole days from isoA to isoB (>= 0; 0 if isoA missing). Both are YYYY-MM-DD.
export function daysBetween(isoA, isoB) {
  if (!isoA || !isoB) return 0;
  const a = Date.parse(isoA.slice(0, 10) + 'T00:00:00Z');
  const b = Date.parse(isoB.slice(0, 10) + 'T00:00:00Z');
  if (Number.isNaN(a) || Number.isNaN(b)) return 0;
  return Math.max(0, Math.round((b - a) / 86400000));
}

export function hash(str) {
  let h = 5381;
  for (let i = 0; i < str.length; i++) {
    h = ((h << 5) + h) ^ str.charCodeAt(i);
  }
  return (h >>> 0).toString(16);
}

export function shuffle(arr) {
  const out = arr.slice();
  for (let i = out.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [out[i], out[j]] = [out[j], out[i]];
  }
  return out;
}

export function escapeHTML(str) {
  return String(str).replace(/[&<>"']/g, (c) => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
  })[c]);
}

export function renderCloze(text) {
  return text.replace(/\{\{c\d+::(.+?)\}\}/g, '<span class="cloze">[…]</span>');
}

export function revealCloze(text) {
  return text.replace(/\{\{c\d+::(.+?)\}\}/g, '<span class="cloze-revealed">$1</span>');
}
