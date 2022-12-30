import { ApiHandler } from '@plugins/backend/helpers';
import { routes } from '@plugins/backend/routes';

import type * as DataTypes from './types';

export const apiHandlers = {
  masters: {
    assets: {
      category: new ApiHandler<
        DataTypes.IAssetCategoryMasterCreationAttributes,
        DataTypes.IAssetCategoryMasterDocument
      >(routes.api.data.masters.assets.categories),
      master: new ApiHandler<
        DataTypes.IAssetMasterCreationAttributes,
        DataTypes.IAssetMasterDocument
      >(routes.api.data.masters.assets.master),
    },
    banks: new ApiHandler<
      DataTypes.IBankMasterCreationAttributes,
      DataTypes.IBankMasterDocument
    >(routes.api.data.masters.banks),
    creditCards: new ApiHandler<
      DataTypes.ICreditCardMasterCreationAttributes,
      DataTypes.ICreditCardMasterDocument
    >(routes.api.data.masters.creditCards),
    debitCards: new ApiHandler<
      DataTypes.IDebitCardMasterCreationAttributes,
      DataTypes.IDebitCardMasterDocument
    >(routes.api.data.masters.debitCards),
    emi: new ApiHandler<
      DataTypes.IEMIMasterCreationAttributes,
      DataTypes.IEMIMasterDocument
    >(routes.api.data.masters.emi),
    expenses: {
      category: new ApiHandler<
        DataTypes.IExpenseCategoryMasterCreationAttributes,
        DataTypes.IExpenseCategoryMasterDocument
      >(routes.api.data.masters.expenses.categories),
      master: new ApiHandler<
        DataTypes.IExpenseMasterCreationAttributes,
        DataTypes.IExpenseMasterDocument
      >(routes.api.data.masters.expenses.master),
    },
    incomes: {
      category: new ApiHandler<
        DataTypes.IIncomeCategoryMasterCreationAttributes,
        DataTypes.IIncomeCategoryMasterDocument
      >(routes.api.data.masters.incomes.categories),
      master: new ApiHandler<
        DataTypes.IIncomeMasterCreationAttributes,
        DataTypes.IIncomeMasterDocument
      >(routes.api.data.masters.incomes.master),
    },
    insurances: new ApiHandler<
      DataTypes.IInsuranceMasterCreationAttributes,
      DataTypes.IInsuranceMasterDocument
    >(routes.api.data.masters.insurances),
    investments: {
      category: new ApiHandler<
        DataTypes.IInvestmentCategoryMasterCreationAttributes,
        DataTypes.IInvestmentCategoryMasterDocument
      >(routes.api.data.masters.investments.categories),
      master: new ApiHandler<
        DataTypes.IInvestmentMasterCreationAttributes,
        DataTypes.IInvestmentMasterDocument
      >(routes.api.data.masters.investments.master),
      agents: new ApiHandler<
        DataTypes.IInvestmentAgentMasterCreationAttributes,
        DataTypes.IInvestmentAgentMasterDocument
      >(routes.api.data.masters.investments.agent),
    },
  },
  transactions: {
    calendar: new ApiHandler<
      DataTypes.ICalendarMasterCreationAttributes,
      DataTypes.ICalendarMasterDocument
    >(routes.api.data.transactions.calendar),
    expenses: new ApiHandler<
      DataTypes.IExpenseTransactionCreationAttributes,
      DataTypes.IExpenseTransactionDocument
    >(routes.api.data.transactions.expenses),
    incomes: new ApiHandler<
      DataTypes.IIncomeTransactionCreationAttributes,
      DataTypes.IIncomeTransactionDocument
    >(routes.api.data.transactions.incomes),
    investments: new ApiHandler<
      DataTypes.IInvestmentTransactionCreationAttributes,
      DataTypes.IInvestmentTransactionDocument
    >(routes.api.data.transactions.investments),
    marketData: new ApiHandler<
      DataTypes.IMarketDataTransactionCreationAttributes,
      DataTypes.IMarketDataTransactionDocument
    >(routes.api.data.transactions.marketData),
    openingBalances: new ApiHandler<
      DataTypes.IOpeningBalanceTransactionCreationAttributes,
      DataTypes.IOpeningBalanceTransactionDocument
    >(routes.api.data.transactions.openingBalances),
  },
};
