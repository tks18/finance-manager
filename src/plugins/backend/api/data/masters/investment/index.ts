import { investmentCategoryMasterConfig } from './categories';
import { investmentMasterConfig } from './master';

export const investmentConfig = {
  category: investmentCategoryMasterConfig,
  master: investmentMasterConfig,
};

export * from './categories';
export * from './master';
