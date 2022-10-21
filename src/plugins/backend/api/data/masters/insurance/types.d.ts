import {
  ICalendarMasterDocument,
  IExpenseTransactionDocument,
} from '@plugins/backend/api/data/types';

export interface IInsuranceMasterNonCreationAttributes {
  _id: number;
  created_at: Date;
  updated_at: Date;
}

export interface IInsuranceMasterCreationAttributes {
  name: string;
  type: string;
  policy_no: string;
  date_id: ICalendarMasterDocument['_id'];
  purchase_date: string;
  amount_insured: number;
  cover_period_years: number;
  cover_period_start_date: string;
  cover_period_end_date: string;
  ncb_allowance: number;
  premium_payable_term_type: string;
  premium_payable: number;
}

export interface IInsuranceMasterOnetoManyAssociationAttributes {
  transactions?: IExpenseTransactionDocument[];
}

export interface IInsuranceMasterManytoOneAssociationAttributes {
  calendarRecord?: ICalendarMasterDocument;
}

export interface IInsuranceMasterAssociationAttributes
  extends IInsuranceMasterOnetoManyAssociationAttributes,
    IInsuranceMasterManytoOneAssociationAttributes {}

export interface IInsuranceMasterDocument
  extends IInsuranceMasterNonCreationAttributes,
    IInsuranceMasterCreationAttributes,
    IInsuranceMasterAssociationAttributes {}
