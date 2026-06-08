export const META = {
  id: 'trading',
  name: 'Trading',
  fullName: 'Trading — Practitioner Edges & Quant Method',
  description: 'Positioning, dealer flows, volume profiles, the quant curriculum',
  icon: '📈',
  accentColor: '#7c4dff',
  // Learning pathway. The two founding modules sit in `framework`/`quant`;
  // the other phases are the roadmap for the deep-dive modules (dealer flows,
  // event trading, liquidity harvesting, the quant curriculum) to follow.
  phases: [
    { id: 'framework',        name: 'Framework & Method',     order: 1 },
    { id: 'positioning-flows', name: 'Positioning & Flows',    order: 2 },
    { id: 'events-tactics',   name: 'Events & Tactics',        order: 3 },
    { id: 'quant',            name: 'Quant Curriculum',        order: 4 },
    { id: 'practitioners',    name: 'Practitioner Playbooks',   order: 5 },
  ],
  systemTypes: [
    { id: 'CRYPTO',    label: 'Crypto (BTC perps)' },
    { id: 'TRADFI',    label: 'TradFi / equity-index' },
    { id: 'UNIVERSAL', label: 'Universal' },
  ],
  aiCapabilities: {
    explainConcept: true,
    suggestNextItem: true,
    findRelatedConcepts: true,
    summarizeProgress: true,
  },
};
