import { ApiHandler } from '../../helpers';
import { TInputFieldType } from './inputs';
import * as MasterTypes from './masters/types';
import * as TransactionTypes from './transactions/types';
export interface IBaseDBApiConfig {
  path: string;
  api: ApiHandler<{ [key: string]: any }, { [key: string]: any }>;
  modelName: string;
  tableType: 'master' | 'transaction';
  componentOptions: {
    title: string;
    fields?: TInputFieldType[];
  };
}

export type TGeneriCDocument =
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
  | TransactionTypes.IOpeningBalanceTransactionDocument;

export * from './masters/types';
export * from './transactions/types';
export * from './inputs';
