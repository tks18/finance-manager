import { calendarTransactionConfig } from './calendar';
import { expenseTransactionConfig } from './expense';
import { incomeTransactionConfig } from './income';
import { investmentTransactionConfig } from './investment';
import { marketDataTransactionConfig } from './market-data';
import { openingBalanceTransactionConfig } from './opening-balances';

export const transactionConfig = {
  calendar: calendarTransactionConfig,
  expense: expenseTransactionConfig,
  income: incomeTransactionConfig,
  investment: investmentTransactionConfig,
  marketData: marketDataTransactionConfig,
  openingBalance: openingBalanceTransactionConfig,
};

export * from './calendar';
export * from './expense';
export * from './income';
export * from './investment';
export * from './market-data';
export * from './opening-balances';
