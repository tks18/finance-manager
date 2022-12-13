import { masterMethods } from './masters';
import { transactionMethods } from './transactions';

export const dataMethods = {
  masters: masterMethods,
  transactions: transactionMethods,
};

export * from './config';
