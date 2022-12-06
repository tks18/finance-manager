import { DatabaseHandler } from '@plugins/backend/helpers';
import { routes } from '@plugins/backend/routes';

import type * as DataTypes from './types';

export const databaseHandlers = {
  masters: {
    assets: {
      category: new DatabaseHandler<
        DataTypes.IAssetCategoryMasterCreationAttributes,
        DataTypes.IAssetCategoryMasterDocument
      >(routes.api.data.masters.assets.categories),
      master: new DatabaseHandler<
        DataTypes.IAssetMasterCreationAttributes,
        DataTypes.IAssetMasterDocument
      >(routes.api.data.masters.assets.master),
    },
    banks: new DatabaseHandler<
      DataTypes.IBankMasterCreationAttributes,
      DataTypes.IBankMasterDocument
    >(routes.api.data.masters.banks),
    creditCards: new DatabaseHandler<
      DataTypes.ICreditCardMasterCreationAttributes,
      DataTypes.ICreditCardMasterDocument
    >(routes.api.data.masters.creditCards),
    debitCards: new DatabaseHandler<
      DataTypes.IDebitCardMasterCreationAttributes,
      DataTypes.IDebitCardMasterDocument
    >(routes.api.data.masters.debitCards),
    emi: new DatabaseHandler<
      DataTypes.IEMIMasterCreationAttributes,
      DataTypes.IEMIMasterDocument
    >(routes.api.data.masters.emi),
    expenses: {
      category: new DatabaseHandler<
        DataTypes.IExpenseCategoryMasterCreationAttributes,
        DataTypes.IExpenseCategoryMasterDocument
      >(routes.api.data.masters.expenses.categories),
      master: new DatabaseHandler<
        DataTypes.IExpenseMasterCreationAttributes,
        DataTypes.IExpenseMasterDocument
      >(routes.api.data.masters.expenses.master),
    },
    incomes: {
      category: new DatabaseHandler<
        DataTypes.IIncomeCategoryMasterCreationAttributes,
        DataTypes.IIncomeCategoryMasterDocument
      >(routes.api.data.masters.incomes.categories),
      master: new DatabaseHandler<
        DataTypes.IIncomeMasterCreationAttributes,
        DataTypes.IIncomeMasterDocument
      >(routes.api.data.masters.incomes.master),
    },
    insurances: new DatabaseHandler<
      DataTypes.IInsuranceMasterCreationAttributes,
      DataTypes.IInsuranceMasterDocument
    >(routes.api.data.masters.insurances),
    investments: {
      category: new DatabaseHandler<
        DataTypes.IInvestmentCategoryMasterCreationAttributes,
        DataTypes.IInvestmentCategoryMasterDocument
      >(routes.api.data.masters.investments.categories),
      master: new DatabaseHandler<
        DataTypes.IInvestmentMasterCreationAttributes,
        DataTypes.IInvestmentMasterDocument
      >(routes.api.data.masters.investments.master),
    },
  },
  transactions: {
    calendar: new DatabaseHandler<
      DataTypes.ICalendarMasterCreationAttributes,
      DataTypes.ICalendarMasterDocument
    >(routes.api.data.transactions.calendar),
    expenses: new DatabaseHandler<
      DataTypes.IExpenseTransactionCreationAttributes,
      DataTypes.IExpenseTransactionDocument
    >(routes.api.data.transactions.expenses),
    incomes: new DatabaseHandler<
      DataTypes.IIncomeTransactionCreationAttributes,
      DataTypes.IIncomeTransactionDocument
    >(routes.api.data.transactions.incomes),
    investments: new DatabaseHandler<
      DataTypes.IInvestmentTransactionCreationAttributes,
      DataTypes.IInvestmentTransactionDocument
    >(routes.api.data.transactions.investments),
    marketData: new DatabaseHandler<
      DataTypes.IMarketDataTransactionCreationAttributes,
      DataTypes.IMarketDataTransactionDocument
    >(routes.api.data.transactions.marketData),
    openingBalances: new DatabaseHandler<
      DataTypes.IOpeningBalanceTransactionCreationAttributes,
      DataTypes.IOpeningBalanceTransactionDocument
    >(routes.api.data.transactions.openingBalances),
  },
};
