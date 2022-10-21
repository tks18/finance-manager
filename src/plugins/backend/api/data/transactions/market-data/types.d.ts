import {
  ICalendarMasterDocument,
  IInvestmentMasterDocument,
} from '@plugins/backend/api/data/types';

export interface IMarketDataTransactionNonCreationAttributes {
  _id: number;
  created_at: Date;
  updated_at: Date;
}

export interface IMarketDataTransactionCreationAttributes {
  date_id: ICalendarMasterDocument['_id'];
  date: string;
  master_id: IInvestmentMasterDocument['_id'];
  open: number;
  high: number;
  low: number;
  close: number;
  adj_close: number;
  volume: number;
}

export interface IMarketDataTransactionManytoOneAssociationAttributes {
  calendarRecord?: ICalendarMasterDocument;
  bankRecord?: IInvestmentMasterDocument;
}

export interface IMarketDataTransactionAssociationAttributes
  extends IMarketDataTransactionManytoOneAssociationAttributes {}

export interface IMarketDataTransactionDocument
  extends IMarketDataTransactionNonCreationAttributes,
    IMarketDataTransactionCreationAttributes,
    IMarketDataTransactionAssociationAttributes {}
