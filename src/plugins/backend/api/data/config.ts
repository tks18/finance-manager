import { DatabaseHandler } from '@plugins/backend/helpers';
import { routes } from '@plugins/backend/routes';

import type * as DataTypes from './types';

export const dbApiConfig: DataTypes.IBaseDBApiConfig[] = [
  {
    path: '/masters/assets/categories',
    api: new DatabaseHandler<
      DataTypes.IAssetCategoryMasterCreationAttributes,
      DataTypes.IAssetCategoryMasterDocument
    >(routes.api.data.masters.assets.categories),
    modelName: 'AssetCategoryMaster',
    componentOptions: {
      title: 'Asset Category Master',
    },
  },
  {
    path: '/masters/assets/master',
    api: new DatabaseHandler<
      DataTypes.IAssetMasterCreationAttributes,
      DataTypes.IAssetMasterDocument
    >(routes.api.data.masters.assets.master),
    modelName: 'AssetMaster',
    componentOptions: {
      title: 'Asset Master',
    },
  },
  {
    path: '/masters/banks',
    api: new DatabaseHandler<
      DataTypes.IBankMasterCreationAttributes,
      DataTypes.IBankMasterDocument
    >(routes.api.data.masters.banks),
    modelName: 'BankMaster',
    componentOptions: {
      title: 'Bank Master',
    },
  },
  {
    path: '/masters/credit-cards',
    api: new DatabaseHandler<
      DataTypes.ICreditCardMasterCreationAttributes,
      DataTypes.ICreditCardMasterDocument
    >(routes.api.data.masters.creditCards),
    modelName: 'CreditCardMaster',
    componentOptions: {
      title: 'Credit Card Master',
    },
  },
  {
    path: '/masters/debit-cards',
    api: new DatabaseHandler<
      DataTypes.IDebitCardMasterCreationAttributes,
      DataTypes.IDebitCardMasterDocument
    >(routes.api.data.masters.debitCards),
    modelName: 'DebitCardMaster',
    componentOptions: {
      title: 'Debit Card Master',
    },
  },
  {
    path: '/masters/emi',
    api: new DatabaseHandler<
      DataTypes.IEMIMasterCreationAttributes,
      DataTypes.IEMIMasterDocument
    >(routes.api.data.masters.emi),
    modelName: 'EMIMaster',
    componentOptions: {
      title: 'EMI Master',
    },
  },
  {
    path: '/masters/expenses/categories',
    api: new DatabaseHandler<
      DataTypes.IExpenseCategoryMasterCreationAttributes,
      DataTypes.IExpenseCategoryMasterDocument
    >(routes.api.data.masters.expenses.categories),
    modelName: 'ExpenseCategoryMaster',
    componentOptions: {
      title: 'Expense Category Master',
    },
  },
  {
    path: '/masters/expenses/master',
    api: new DatabaseHandler<
      DataTypes.IExpenseMasterCreationAttributes,
      DataTypes.IExpenseMasterDocument
    >(routes.api.data.masters.expenses.master),
    modelName: 'ExpenseMaster',
    componentOptions: {
      title: 'Expense Master',
    },
  },
  {
    path: '/masters/incomes/categories',
    api: new DatabaseHandler<
      DataTypes.IIncomeCategoryMasterCreationAttributes,
      DataTypes.IIncomeCategoryMasterDocument
    >(routes.api.data.masters.incomes.categories),
    modelName: 'IncomeCategoryMaster',
    componentOptions: {
      title: 'Income Category Master',
    },
  },
  {
    path: '/masters/incomes/master',
    api: new DatabaseHandler<
      DataTypes.IIncomeMasterCreationAttributes,
      DataTypes.IIncomeMasterDocument
    >(routes.api.data.masters.incomes.master),
    modelName: 'IncomeMaster',
    componentOptions: {
      title: 'Income Master',
    },
  },
  {
    path: '/masters/insurances',
    api: new DatabaseHandler<
      DataTypes.IInsuranceMasterCreationAttributes,
      DataTypes.IInsuranceMasterDocument
    >(routes.api.data.masters.insurances),
    modelName: 'InsuranceMaster',
    componentOptions: {
      title: 'Insurance Master',
    },
  },
  {
    path: '/masters/investments/categories',
    api: new DatabaseHandler<
      DataTypes.IInvestmentCategoryMasterCreationAttributes,
      DataTypes.IInvestmentCategoryMasterDocument
    >(routes.api.data.masters.investments.categories),
    modelName: 'InvestmentCategoryMaster',
    componentOptions: {
      title: 'Investment Category Master',
    },
  },
  {
    path: '/masters/investments/master',
    api: new DatabaseHandler<
      DataTypes.IInvestmentMasterCreationAttributes,
      DataTypes.IInvestmentMasterDocument
    >(routes.api.data.masters.investments.master),
    modelName: 'InvestmentMaster',
    componentOptions: {
      title: 'Investment Master',
    },
  },
  {
    path: '/transactions/calendar',
    api: new DatabaseHandler<
      DataTypes.ICalendarMasterCreationAttributes,
      DataTypes.ICalendarMasterDocument
    >(routes.api.data.transactions.calendar),
    modelName: 'CalendarMaster',
    componentOptions: {
      title: 'Calendar Analysis',
    },
  },
  {
    path: '/transactions/expenses',
    api: new DatabaseHandler<
      DataTypes.IExpenseTransactionCreationAttributes,
      DataTypes.IExpenseTransactionDocument
    >(routes.api.data.transactions.expenses),
    modelName: 'Expenses',
    componentOptions: {
      title: 'Expense Transactions',
    },
  },
  {
    path: '/transactions/incomes',
    api: new DatabaseHandler<
      DataTypes.IIncomeTransactionCreationAttributes,
      DataTypes.IIncomeTransactionDocument
    >(routes.api.data.transactions.incomes),
    modelName: 'Incomes',
    componentOptions: {
      title: 'Income Transactions',
    },
  },
  {
    path: '/transactions/investments',
    api: new DatabaseHandler<
      DataTypes.IInvestmentTransactionCreationAttributes,
      DataTypes.IInvestmentTransactionDocument
    >(routes.api.data.transactions.investments),
    modelName: 'Investments',
    componentOptions: {
      title: 'Investment Transactions',
    },
  },
  {
    path: '/transactions/opening-balances',
    api: new DatabaseHandler<
      DataTypes.IOpeningBalanceTransactionCreationAttributes,
      DataTypes.IOpeningBalanceTransactionDocument
    >(routes.api.data.transactions.openingBalances),
    modelName: 'OpeningBalances',
    componentOptions: {
      title: 'Opening Balance Transactions',
    },
  },
];
