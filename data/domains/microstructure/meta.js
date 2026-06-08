export const META = {
  id: 'microstructure',
  name: 'Microstructure',
  fullName: 'Market Microstructure',
  description: 'Order books, price formation, trading, execution',
  icon: 'μ',
  accentColor: '#1a8fd6',
  phases: [
    { id: 'foundation', name: 'Foundation', order: 1 },
    { id: 'theory',     name: 'Theory',     order: 2 },
    { id: 'empirical',  name: 'Empirical',  order: 3 },
    { id: 'crypto',     name: 'Crypto-Specific', order: 4 },
    { id: 'practical',  name: 'Practical',  order: 5 },
  ],
  // AI capability opt-in per domain. Capability functions in js/ai.js check
  // this map before allowing invocation. Within-domain only — cross-domain
  // analogies require explicit user invocation in a future phase.
  aiCapabilities: {
    explainConcept: true,
    suggestNextItem: true,
    findRelatedConcepts: true,
    summarizeProgress: true,
  },
};
