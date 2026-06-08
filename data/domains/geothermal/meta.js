export const META = {
  id: 'geothermal',
  name: 'Geothermal',
  fullName: 'Geothermal Energy',
  description: 'Reservoir engineering, production, geochemistry',
  icon: '♨',
  accentColor: '#c47a3d',
  phases: [
    { id: 'earth-sciences', name: 'Earth Sciences',        order: 1 },
    { id: 'reservoir',      name: 'Reservoir Engineering', order: 2 },
    { id: 'production',     name: 'Well & Production',     order: 3 },
    { id: 'geochemistry',   name: 'Geochemistry',          order: 4 },
    { id: 'frontier',       name: 'Frontier',              order: 5 },
  ],
  // Reservoir system classification used to filter Library/Reference views.
  // Items declare a system_type; UNIVERSAL applies across all system types
  // (canonical references, broad textbooks, frameworks).
  // If a domain meta omits systemTypes, no filter UI is shown for that domain.
  systemTypes: [
    { id: 'DRY_STEAM',  label: 'Dry Steam' },
    { id: 'TWO_PHASE',  label: 'Two-Phase' },
    { id: 'LIQUID',     label: 'Liquid' },
    { id: 'UNIVERSAL',  label: 'Universal' },
  ],
  // AI capability opt-in per domain. Capability functions in js/ai.js check
  // this map before allowing invocation. Within-domain only.
  aiCapabilities: {
    explainConcept: true,
    suggestNextItem: true,
    findRelatedConcepts: true,
    summarizeProgress: true,
  },
};
