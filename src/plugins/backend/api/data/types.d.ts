import { DatabaseHandler } from '../../helpers';
import * as MasterTypes from './masters/types';
import * as TransactionTypes from './transactions/types';

export interface IBaseDBApiConfig {
  path: string;
  api: DatabaseHandler<
    | MasterTypes.IAssetCategoryMasterCreationAttributes
    | MasterTypes.IAssetMasterCreationAttributes
    | MasterTypes.IBankMasterCreationAttributes
    | MasterTypes.ICalendarMasterCreationAttributes
    | MasterTypes.ICreditCardMasterCreationAttributes
    | MasterTypes.IDebitCardMasterCreationAttributes
    | MasterTypes.IEMIMasterCreationAttributes
    | MasterTypes.IExpenseCategoryMasterCreationAttributes
    | MasterTypes.IExpenseMasterCreationAttributes
    | MasterTypes.IIncomeCategoryMasterCreationAttributes
    | MasterTypes.IIncomeMasterCreationAttributes
    | MasterTypes.IInsuranceMasterCreationAttributes
    | MasterTypes.IInvestmentCategoryMasterCreationAttributes
    | MasterTypes.IInvestmentMasterCreationAttributes
    | TransactionTypes.IExpenseTransactionCreationAttributes
    | TransactionTypes.IIncomeTransactionCreationAttributes
    | TransactionTypes.IInvestmentTransactionCreationAttributes
    | TransactionTypes.IOpeningBalanceTransactionCreationAttributes,
    | MasterTypes.IAssetCategoryMasterDocument
    | MasterTypes.IAssetMasterDocument
    | MasterTypes.IBankMasterDocument
    | MasterTypes.ICalendarMasterDocument
    | MasterTypes.ICreditCardMasterDocument
    | MasterTypes.IDebitCardMasterDocument
    | MasterTypes.IEMIMasterDocument
    | MasterTypes.IExpenseCategoryMasterDocument
    | MasterTypes.IExpenseMasterDocument
    | MasterTypes.IIncomeCategoryMasterDocument
    | MasterTypes.IIncomeMasterDocument
    | MasterTypes.IInsuranceMasterDocument
    | MasterTypes.IInvestmentCategoryMasterDocument
    | MasterTypes.IInvestmentMasterDocument
    | TransactionTypes.IExpenseTransactionDocument
    | TransactionTypes.IIncomeTransactionDocument
    | TransactionTypes.IInvestmentTransactionDocument
    | TransactionTypes.IOpeningBalanceTransactionDocument
  >;
  modelName: string;
  componentOptions: {
    title: string;
  };
}

export * from './masters/types';
export * from './transactions/types';
