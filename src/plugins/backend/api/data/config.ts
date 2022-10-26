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
    tableType: 'master',
    modelName: 'AssetCategoryMaster',
    componentOptions: {
      title: 'Asset Category Masters',
    },
  },
  {
    path: '/masters/assets/master',
    api: new DatabaseHandler<
      DataTypes.IAssetMasterCreationAttributes,
      DataTypes.IAssetMasterDocument
    >(routes.api.data.masters.assets.master),
    tableType: 'master',
    modelName: 'AssetMaster',
    componentOptions: {
      title: 'Asset Masters',
    },
  },
  {
    path: '/masters/banks',
    api: new DatabaseHandler<
      DataTypes.IBankMasterCreationAttributes,
      DataTypes.IBankMasterDocument
    >(routes.api.data.masters.banks),
    tableType: 'master',
    modelName: 'BankMaster',
    componentOptions: {
      title: 'Bank Masters',
    },
  },
  {
    path: '/masters/credit-cards',
    api: new DatabaseHandler<
      DataTypes.ICreditCardMasterCreationAttributes,
      DataTypes.ICreditCardMasterDocument
    >(routes.api.data.masters.creditCards),
    tableType: 'master',
    modelName: 'CreditCardMaster',
    componentOptions: {
      title: 'Credit Card Masters',
    },
  },
  {
    path: '/masters/debit-cards',
    api: new DatabaseHandler<
      DataTypes.IDebitCardMasterCreationAttributes,
      DataTypes.IDebitCardMasterDocument
    >(routes.api.data.masters.debitCards),
    tableType: 'master',
    modelName: 'DebitCardMaster',
    componentOptions: {
      title: 'Debit Card Masters',
    },
  },
  {
    path: '/masters/emi',
    api: new DatabaseHandler<
      DataTypes.IEMIMasterCreationAttributes,
      DataTypes.IEMIMasterDocument
    >(routes.api.data.masters.emi),
    tableType: 'master',
    modelName: 'EMIMaster',
    componentOptions: {
      title: 'EMI Masters',
    },
  },
  {
    path: '/masters/expenses/categories',
    api: new DatabaseHandler<
      DataTypes.IExpenseCategoryMasterCreationAttributes,
      DataTypes.IExpenseCategoryMasterDocument
    >(routes.api.data.masters.expenses.categories),
    tableType: 'master',
    modelName: 'ExpenseCategoryMaster',
    componentOptions: {
      title: 'Expense Category Masters',
    },
  },
  {
    path: '/masters/expenses/master',
    api: new DatabaseHandler<
      DataTypes.IExpenseMasterCreationAttributes,
      DataTypes.IExpenseMasterDocument
    >(routes.api.data.masters.expenses.master),
    tableType: 'master',
    modelName: 'ExpenseMaster',
    componentOptions: {
      title: 'Expense Masters',
    },
  },
  {
    path: '/masters/incomes/categories',
    api: new DatabaseHandler<
      DataTypes.IIncomeCategoryMasterCreationAttributes,
      DataTypes.IIncomeCategoryMasterDocument
    >(routes.api.data.masters.incomes.categories),
    tableType: 'master',
    modelName: 'IncomeCategoryMaster',
    componentOptions: {
      title: 'Income Category Masters',
    },
  },
  {
    path: '/masters/incomes/master',
    api: new DatabaseHandler<
      DataTypes.IIncomeMasterCreationAttributes,
      DataTypes.IIncomeMasterDocument
    >(routes.api.data.masters.incomes.master),
    tableType: 'master',
    modelName: 'IncomeMaster',
    componentOptions: {
      title: 'Income Masters',
    },
  },
  {
    path: '/masters/insurances',
    api: new DatabaseHandler<
      DataTypes.IInsuranceMasterCreationAttributes,
      DataTypes.IInsuranceMasterDocument
    >(routes.api.data.masters.insurances),
    tableType: 'master',
    modelName: 'InsuranceMaster',
    componentOptions: {
      title: 'Insurance Masters',
    },
  },
  {
    path: '/masters/investments/categories',
    api: new DatabaseHandler<
      DataTypes.IInvestmentCategoryMasterCreationAttributes,
      DataTypes.IInvestmentCategoryMasterDocument
    >(routes.api.data.masters.investments.categories),
    tableType: 'master',
    modelName: 'InvestmentCategoryMaster',
    componentOptions: {
      title: 'Investment Category Masters',
    },
  },
  {
    path: '/masters/investments/master',
    api: new DatabaseHandler<
      DataTypes.IInvestmentMasterCreationAttributes,
      DataTypes.IInvestmentMasterDocument
    >(routes.api.data.masters.investments.master),
    tableType: 'master',
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
    tableType: 'transaction',
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
    tableType: 'transaction',
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
    tableType: 'transaction',
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
    tableType: 'transaction',
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
    tableType: 'transaction',
    modelName: 'OpeningBalances',
    componentOptions: {
      title: 'Opening Balance Transactions',
    },
  },
];
