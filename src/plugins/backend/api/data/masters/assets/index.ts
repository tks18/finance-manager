import { assetCategoryMasterConfig } from './categories';
import { assetMasterConfig } from './master';

export const assetConfig = {
  category: assetCategoryMasterConfig,
  master: assetMasterConfig,
};

export * from './categories';
export * from './master';
