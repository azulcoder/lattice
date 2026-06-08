// AI client wrapper. Phase 0.3: gating logic + structured placeholder
// returns. Phase 1+: real api.anthropic.com calls land in the marked
// // FUTURE blocks below. Zero outbound network in Phase 0.3.

import { DOMAINS } from './domain.js';

export const REASONS = {
  ai_disabled: { message: 'Enable AI features in Settings (press ",").' },
  no_api_key:  { message: 'Add your Anthropic API key in Settings.' },
  domain_disabled: { message: (d) => `Enable AI for ${d} in Settings.` },
  capability_unavailable: { message: (d, c) => `${c} is not supported for ${d}.` },
  not_implemented: { message: 'AI capability configured but real implementation ships in a future phase.' },
};

export function isAIEnabledFor(state, domainId, capability) {
  const s = state?.settings?.ai;
  if (!s?.enabled) {
    return { ok: false, reason: 'ai_disabled', message: REASONS.ai_disabled.message };
  }
  if (!s.apiKey || s.apiKey.length === 0) {
    return { ok: false, reason: 'no_api_key', message: REASONS.no_api_key.message };
  }
  if (!s.perDomain || !s.perDomain[domainId]) {
    const meta = DOMAINS[domainId];
    return { ok: false, reason: 'domain_disabled', message: REASONS.domain_disabled.message(meta?.name || domainId) };
  }
  const meta = DOMAINS[domainId];
  if (!meta?.aiCapabilities?.[capability]) {
    return { ok: false, reason: 'capability_unavailable', message: REASONS.capability_unavailable.message(meta?.name || domainId, capability) };
  }
  return { ok: true };
}

function placeholderResponse() {
  return {
    ok: false,
    reason: 'not_implemented',
    message: REASONS.not_implemented.message,
  };
}

export async function explainConcept({ concept, domainId, context, state }) {
  const gate = isAIEnabledFor(state, domainId, 'explainConcept');
  if (!gate.ok) return gate;
  // FUTURE: real Anthropic API call goes here.
  // const response = await fetch('https://api.anthropic.com/v1/messages', { ... });
  return placeholderResponse();
}

export async function suggestNextItem({ currentItemId, domainId, state }) {
  const gate = isAIEnabledFor(state, domainId, 'suggestNextItem');
  if (!gate.ok) return gate;
  // FUTURE: API call.
  return placeholderResponse();
}

// Within-domain only by design — cross-domain analogies require explicit
// future-phase invocation, not auto-suggestion.
export async function findRelatedConcepts({ concept, domainId, state }) {
  const gate = isAIEnabledFor(state, domainId, 'findRelatedConcepts');
  if (!gate.ok) return gate;
  // FUTURE: API call.
  return placeholderResponse();
}

export async function summarizeProgress({ domainId, state }) {
  const gate = isAIEnabledFor(state, domainId, 'summarizeProgress');
  if (!gate.ok) return gate;
  // FUTURE: API call.
  return placeholderResponse();
}

export const CAPABILITIES = {
  explainConcept,
  suggestNextItem,
  findRelatedConcepts,
  summarizeProgress,
};
