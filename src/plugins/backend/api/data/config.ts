import { masterConfig } from './masters';
import { transactionConfig } from './transactions';

import { IBaseDBApiConfig } from './types';

export const dbApiConfig: IBaseDBApiConfig[] = [
  masterConfig.asset.category,
  masterConfig.asset.master,
  masterConfig.bank,
  masterConfig.creditCard,
  masterConfig.debitCard,
  masterConfig.emi,
  masterConfig.expense.category,
  masterConfig.expense.master,
  masterConfig.income.category,
  masterConfig.income.master,
  masterConfig.insurance,
  masterConfig.investment.category,
  masterConfig.investment.master,
  masterConfig.investment.agents,
  transactionConfig.calendar,
  transactionConfig.expense,
  transactionConfig.income,
  transactionConfig.investment,
  transactionConfig.marketData,
  transactionConfig.openingBalance,
];
