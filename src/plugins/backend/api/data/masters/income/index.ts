import { incomeCategoryMasterConfig } from './categories';
import { incomeSourceMasterConfig } from './sources';
import { incomeMasterConfig } from './master';

export const incomeConfig = {
  category: incomeCategoryMasterConfig,
  source: incomeSourceMasterConfig,
  master: incomeMasterConfig,
};

export * from './categories';
export * from './sources';
export * from './master';
