import {
  ICalendarMasterDocument,
  IBankMasterDocument,
} from '@plugins/backend/api/data/types';

export interface IOpeningBalanceTransactionNonCreationAttributes {
  _id: number;
  created_at: Date;
  updated_at: Date;
}

export interface IOpeningBalanceTransactionCreationAttributes {
  date_id: ICalendarMasterDocument['_id'];
  date: string;
  bank_id: IBankMasterDocument['_id'];
  opening_balance: number;
}

export interface IOpeningBalanceTransactionManytoOneAssociationAttributes {
  calendarRecord?: ICalendarMasterDocument;
  bankRecord?: IBankMasterDocument;
}

export interface IOpeningBalanceTransactionAssociationAttributes
  extends IOpeningBalanceTransactionManytoOneAssociationAttributes {}

export interface IOpeningBalanceTransactionDocument
  extends IOpeningBalanceTransactionNonCreationAttributes,
    IOpeningBalanceTransactionCreationAttributes,
    IOpeningBalanceTransactionAssociationAttributes {}
