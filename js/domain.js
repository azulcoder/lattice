import { META as MICROSTRUCTURE_META } from '../data/domains/microstructure/meta.js';
import { META as GEOTHERMAL_META } from '../data/domains/geothermal/meta.js';
import { META as TRADING_META } from '../data/domains/trading/meta.js';

export const DOMAINS = {
  microstructure: MICROSTRUCTURE_META,
  geothermal: GEOTHERMAL_META,
  trading: TRADING_META,
};

export const DEFAULT_DOMAIN_ID = 'microstructure';

export function getActiveDomain(state) {
  return state.activeDomain || DEFAULT_DOMAIN_ID;
}

export function setActiveDomain(state, id) {
  if (!DOMAINS[id]) throw new Error(`Unknown domain: ${id}`);
  return { ...state, activeDomain: id };
}

export function getMeta(id) {
  return DOMAINS[id] || null;
}

export async function loadDomainContent(id) {
  const meta = DOMAINS[id];
  if (!meta) throw new Error(`Unknown domain: ${id}`);

  const items = await tryImport(`../data/domains/${id}/items.js`, 'ITEMS', []);
  const seedCards = await tryImport(`../data/domains/${id}/seed-cards.js`, 'SEED_CARDS', []);
  const glossary = await tryImport(`../data/domains/${id}/glossary.js`, 'GLOSSARY', []);
  const glossaryCategories = await tryImport(`../data/domains/${id}/glossary.js`, 'GLOSSARY_CATEGORIES', []);
  const notation = await tryImport(`../data/domains/${id}/notation.js`, 'NOTATION', []);

  return {
    meta,
    items,
    seedCards,
    glossary,
    glossaryCategories,
    notation,
    phases: meta.phases || [],
  };
}

async function tryImport(path, name, fallback) {
  try {
    const mod = await import(path);
    return mod[name] !== undefined ? mod[name] : fallback;
  } catch {
    return fallback;
  }
}
