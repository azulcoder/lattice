// Audio narration via Web Speech API (browser TTS).
//
// Single global player — only one section can play at a time. Clicking ▶
// on a new section cancels any active utterance and starts the new one.
//
// Voice selection: prefers voices matching the active language. Falls back
// to system default if no match. Math is read aloud as the word "equation"
// (both block $$…$$ and inline $…$ are replaced) to keep the flow natural.
//
// Zero recording, zero upload — purely browser TTS. No privacy concern.

let activeButton = null;       // currently active section button element
let activeUtterance = null;    // currently speaking utterance
let isPaused = false;

// Strip our markdown subset down to plain text for TTS.
// Math: replace inline + block math with "equation".
// Links: keep label, drop URL/item: target.
// Bold/italic/code: keep inner text.
// Bullets: read as "•" replaced with pause.
// HTML pass-through (<details>, <summary>): keep visible text only.
export function markdownToSpeech(text) {
  if (!text) return '';
  let s = text;

  // Block math
  s = s.replace(/\$\$([\s\S]+?)\$\$/g, ' equation ');
  // Inline math
  s = s.replace(/\$([^$\n]+?)\$/g, ' equation ');
  // External link [label](url)
  s = s.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1');
  // Bold/italic
  s = s.replace(/\*\*([^*]+)\*\*/g, '$1');
  s = s.replace(/\*([^*]+)\*/g, '$1');
  // Code
  s = s.replace(/`([^`]+)`/g, '$1');
  // Bullet markers
  s = s.replace(/^- /gm, '. ');
  // ### sub-headings
  s = s.replace(/^### (.+)$/gm, '. $1. ');
  // Strip <details>/<summary> tags but keep inner text
  s = s.replace(/<\/?details>/g, ' ');
  s = s.replace(/<summary>([^<]+)<\/summary>/g, ' $1. ');
  // Strip remaining HTML tags
  s = s.replace(/<[^>]+>/g, ' ');
  // Collapse whitespace
  s = s.replace(/\s+/g, ' ').trim();
  return s;
}

// Voice list warm-up. In Chromium-based browsers speechSynthesis.getVoices()
// returns [] on the first synchronous call because voices load asynchronously;
// the standard fix is to cache them and refresh on the 'voiceschanged' event.
// Without this, the first narration could fall back to the system-default
// (often English) voice, ignoring the id-*/en-* language preference.
let cachedVoices = [];
function refreshVoices() {
  if (typeof window === 'undefined' || !window.speechSynthesis) return;
  const v = window.speechSynthesis.getVoices();
  if (v && v.length) cachedVoices = v;
}
if (typeof window !== 'undefined' && window.speechSynthesis) {
  refreshVoices();
  if (typeof window.speechSynthesis.addEventListener === 'function') {
    window.speechSynthesis.addEventListener('voiceschanged', refreshVoices);
  } else {
    window.speechSynthesis.onvoiceschanged = refreshVoices;
  }
}

function pickVoice(lang) {
  if (typeof window === 'undefined' || !window.speechSynthesis) return null;
  const voices = cachedVoices.length ? cachedVoices : window.speechSynthesis.getVoices();
  if (!voices || voices.length === 0) return null;
  // Prefer exact lang match (e.g. 'id-ID' or 'en-US')
  const target = lang === 'id' ? 'id' : 'en';
  const exact = voices.find((v) => v.lang && v.lang.toLowerCase().startsWith(target));
  return exact || voices[0];
}

export function isAudioAvailable() {
  return typeof window !== 'undefined' && !!window.speechSynthesis;
}

// Speak the given text. `button` is the UI button element (so we can update
// its visual state). Returns the SpeechSynthesisUtterance for caller hooks.
export function speak(text, lang, button) {
  if (!isAudioAvailable()) return null;

  // Cancel any active speech
  stopAll();

  const utterance = new SpeechSynthesisUtterance(text);
  const voice = pickVoice(lang);
  if (voice) utterance.voice = voice;
  utterance.rate = 1.0;
  utterance.pitch = 1.0;
  utterance.lang = voice?.lang || (lang === 'id' ? 'id-ID' : 'en-US');

  utterance.onend = () => {
    if (activeButton === button) {
      button.classList.remove('playing', 'paused');
      activeButton = null;
      activeUtterance = null;
      isPaused = false;
    }
  };
  utterance.onerror = () => {
    if (activeButton === button) {
      button.classList.remove('playing', 'paused');
      activeButton = null;
      activeUtterance = null;
      isPaused = false;
    }
  };

  activeButton = button;
  activeUtterance = utterance;
  isPaused = false;
  button.classList.add('playing');
  button.classList.remove('paused');

  window.speechSynthesis.speak(utterance);
  return utterance;
}

export function togglePause(button) {
  if (!isAudioAvailable() || activeButton !== button) return;
  if (isPaused) {
    window.speechSynthesis.resume();
    isPaused = false;
    button.classList.remove('paused');
    button.classList.add('playing');
  } else {
    window.speechSynthesis.pause();
    isPaused = true;
    button.classList.remove('playing');
    button.classList.add('paused');
  }
}

export function stopAll() {
  if (!isAudioAvailable()) return;
  window.speechSynthesis.cancel();
  if (activeButton) {
    activeButton.classList.remove('playing', 'paused');
    activeButton = null;
  }
  activeUtterance = null;
  isPaused = false;
}

export function isPlayingButton(button) {
  return activeButton === button;
}
