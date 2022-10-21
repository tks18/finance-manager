import {
  ICreditCardMasterDocument,
  IDebitCardMasterDocument,
  IIncomeTransactionDocument,
  IExpenseTransactionDocument,
  IInvestmentTransactionDocument,
  IOpeningBalanceTransactionDocument,
} from '@plugins/backend/api/data/types';

export interface IBankMasterNonCreationAttributes {
  _id: number;
  created_at: Date;
  updated_at: Date;
}

export interface IBankMasterCreationAttributes {
  name: string;
  bank_branch: string;
  account_type: string;
  account_no: string;
  customer_id: string;
  ifsc_code: string;
  netbanking_username: string;
}

export interface IBankMasterOnetoManyAssociationAttributes {
  creditCards?: ICreditCardMasterDocument[];
  debitCards?: IDebitCardMasterDocument[];
  incomes?: IIncomeTransactionDocument[];
  expenses?: IExpenseTransactionDocument[];
  investments?: IInvestmentTransactionDocument[];
  openingBalances?: IOpeningBalanceTransactionDocument[];
}

export interface IBankMasterAssociationAttributes
  extends IBankMasterOnetoManyAssociationAttributes {}

export interface IBankMasterDocument
  extends IBankMasterNonCreationAttributes,
    IBankMasterCreationAttributes,
    IBankMasterAssociationAttributes {}
