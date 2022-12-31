import {
  ICalendarMasterDocument,
  IIncomeMasterDocument,
  IBankMasterDocument,
  IInvestmentMasterDocument,
} from '@plugins/backend/api/data/types';

export interface IIncomeTransactionNonCreationAttributes {
  _id: number;
  created_at: Date;
  updated_at: Date;
}

export interface IIncomeTransactionCreationAttributes {
  date_id: ICalendarMasterDocument['_id'];
  date: string;
  master_id: IIncomeMasterDocument['_id'];
  bank_id: IBankMasterDocument['_id'];
  investment_id?: IInvestmentMasterDocument['_id'];
  remarks: string;
  amount: number;
  taxable_amount: number;
}

export interface IIncomeTransactionManytoOneAssociationAttributes {
  calendarRecord?: ICalendarMasterDocument;
  masterRecord?: IIncomeMasterDocument;
  bankRecord?: IBankMasterDocument;
  investmentRecord?: IInvestmentMasterDocument;
}

export interface IIncomeTransactionAssociationAttributes
  extends IIncomeTransactionManytoOneAssociationAttributes {}

export interface IIncomeTransactionDocument
  extends IIncomeTransactionNonCreationAttributes,
    IIncomeTransactionCreationAttributes,
    IIncomeTransactionAssociationAttributes {}
