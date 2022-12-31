import { investmentCategoryMasterConfig } from './categories';
import { investmentMasterConfig } from './master';
import { investmentAgentMasterConfig } from './agents';

export const investmentConfig = {
  category: investmentCategoryMasterConfig,
  master: investmentMasterConfig,
  agents: investmentAgentMasterConfig,
};

export * from './categories';
export * from './master';
export * from './agents';
