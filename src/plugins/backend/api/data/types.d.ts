import { ApiHandler } from '../../helpers';
import { TInputFieldType } from './inputs';
import * as MasterTypes from './masters/types';
import * as TransactionTypes from './transactions/types';

export type TGenericDocument =
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
  | MasterTypes.IIncomeSourceMasterDocument
  | MasterTypes.IIncomeMasterDocument
  | MasterTypes.IInsuranceMasterDocument
  | MasterTypes.IInvestmentCategoryMasterDocument
  | MasterTypes.IInvestmentAgentMasterDocument
  | MasterTypes.IInvestmentMasterDocument
  | TransactionTypes.IExpenseTransactionDocument
  | TransactionTypes.IIncomeTransactionDocument
  | TransactionTypes.IInvestmentTransactionDocument
  | TransactionTypes.IOpeningBalanceTransactionDocument
  | TransactionTypes.IMarketDataTransactionDocument;

export type TGenericCreationAttributes =
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
  | MasterTypes.IIncomeSourceMasterCreationAttributes
  | MasterTypes.IIncomeMasterCreationAttributes
  | MasterTypes.IInsuranceMasterCreationAttributes
  | MasterTypes.IInvestmentCategoryMasterCreationAttributes
  | MasterTypes.IInvestmentAgentMasterCreationAttributes
  | MasterTypes.IInvestmentMasterCreationAttributes
  | TransactionTypes.IExpenseTransactionCreationAttributes
  | TransactionTypes.IIncomeTransactionCreationAttributes
  | TransactionTypes.IInvestmentTransactionCreationAttributes
  | TransactionTypes.IOpeningBalanceTransactionCreationAttributes
  | TransactionTypes.IMarketDataTransactionCreationAttributes;

export interface IBaseDBApiConfig {
  path: string;
  api: ApiHandler<TGenericCreationAttributes, TGenericDocument>;
  modelName: string;
  tableType: 'master' | 'transaction';
  componentOptions: {
    title: string;
    excludeResetFields?: string[];
    fields?: TInputFieldType[];
  };
}

export * from './masters/types';
export * from './transactions/types';
export * from './inputs';
