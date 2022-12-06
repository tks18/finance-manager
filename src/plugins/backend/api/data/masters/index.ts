import { assetConfig } from './assets';
import { bankConfig } from './banks';
import { creditCardConfig } from './credit-cards';
import { debitCardConfig } from './debit-cards';
import { emiConfig } from './emi';
import { expenseConfig } from './expense';
import { incomeConfig } from './income';
import { insuranceConfig } from './insurance';
import { investmentConfig } from './investment';
import { calendarMethods } from './calendar';

export const masterConfig = {
  asset: assetConfig,
  bank: bankConfig,
  creditCard: creditCardConfig,
  debitCard: debitCardConfig,
  emi: emiConfig,
  expense: expenseConfig,
  income: incomeConfig,
  insurance: insuranceConfig,
  investment: investmentConfig,
};

export const masterMethods = {
  calendar: calendarMethods,
};

export * from './assets';
export * from './banks';
export * from './calendar';
export * from './credit-cards';
export * from './debit-cards';
export * from './emi';
export * from './expense';
export * from './income';
export * from './insurance';
export * from './investment';
