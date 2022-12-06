import { expenseCategoryMasterConfig } from './categories';
import { expenseMasterConfig } from './master';

export const expenseConfig = {
  category: expenseCategoryMasterConfig,
  master: expenseMasterConfig,
};

export * from './categories';
export * from './master';
