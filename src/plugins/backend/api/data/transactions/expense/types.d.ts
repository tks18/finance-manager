import {
  ICalendarMasterDocument,
  IExpenseMasterDocument,
  IBankMasterDocument,
  IAssetMasterDocument,
  IEMIMasterDocument,
  IInsuranceMasterDocument,
} from '@plugins/backend/api/data/types';

export interface IExpenseTransactionNonCreationAttributes {
  _id: number;
  created_at: Date;
  updated_at: Date;
}

export interface IExpenseTransactionCreationAttributes {
  date_id: ICalendarMasterDocument['_id'];
  date: string;
  master_id: IExpenseMasterDocument['_id'];
  bank_id: IBankMasterDocument['_id'];
  asset_id?: IAssetMasterDocument['_id'];
  emi_id?: IEMIMasterDocument['_id'];
  insurance_id?: IInsuranceMasterDocument['_id'];
  amount: number;
  tax_allowable_amount: number;
}

export interface IExpenseTransactionManytoOneAssociationAttributes {
  calendarRecord?: ICalendarMasterDocument;
  masterRecord?: IExpenseMasterDocument;
  bankRecord?: IBankMasterDocument;
  assetRecord?: IAssetMasterDocument;
  emiRecord?: IEMIMasterDocument;
  insuranceRecord?: IInsuranceMasterDocument;
}

export interface IExpenseTransactionAssociationAttributes
  extends IExpenseTransactionManytoOneAssociationAttributes {}

export interface IExpenseTransactionDocument
  extends IExpenseTransactionNonCreationAttributes,
    IExpenseTransactionCreationAttributes,
    IExpenseTransactionAssociationAttributes {}
