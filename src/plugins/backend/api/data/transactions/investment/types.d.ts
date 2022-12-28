import {
  ICalendarMasterDocument,
  IInvestmentMasterDocument,
  IBankMasterDocument,
  IInvestmentAgentMasterDocument,
} from '@plugins/backend/api/data/types';

export interface IInvestmentTransactionNonCreationAttributes {
  _id: number;
  created_at: Date;
  updated_at: Date;
}

export interface IInvestmentTransactionCreationAttributes {
  date_id: ICalendarMasterDocument['_id'];
  date: string;
  master_id: IInvestmentMasterDocument['_id'];
  bank_id: IBankMasterDocument['_id'];
  agent_id: IInvestmentAgentMasterDocument['_id'];
  cost: number;
  units: number;
  amount: number;
  tax_allowable_amount: number;
}

export interface IInvestmentTransactionManytoOneAssociationAttributes {
  calendarRecord?: ICalendarMasterDocument;
  masterRecord?: IInvestmentMasterDocument;
  bankRecord?: IBankMasterDocument;
  agentRecord?: IInvestmentAgentMasterDocument;
}

export interface IInvestmentTransactionAssociationAttributes
  extends IInvestmentTransactionManytoOneAssociationAttributes {}

export interface IInvestmentTransactionDocument
  extends IInvestmentTransactionNonCreationAttributes,
    IInvestmentTransactionCreationAttributes,
    IInvestmentTransactionAssociationAttributes {}
