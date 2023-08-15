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
  vendor: string;
  remarks: string;
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

type IFlattenedExpenseTransactionManytoOneAssociationAttributeCalendarRecord = {
  [Property in keyof ICalendarMasterDocument as `calendarRecord.${Property}`]?: ICalendarMasterDocument[Property];
};

type IFlattenedExpenseTransactionManytoOneAssociationAttributeMasterRecord = {
  [Property in keyof IExpenseMasterDocument as `masterRecord.${Property}`]?: IExpenseMasterDocument[Property];
};

type IFlattenedExpenseTransactionManytoOneAssociationAttributeBankRecord = {
  [Property in keyof IBankMasterDocument as `bankRecord.${Property}`]?: IBankMasterDocument[Property];
};

type IFlattenedExpenseTransactionManytoOneAssociationAttributeAssetRecord = {
  [Property in keyof IAssetMasterDocument as `assetRecord.${Property}`]?: IAssetMasterDocument[Property];
};

type IFlattenedExpenseTransactionManytoOneAssociationAttributeEMIRecord = {
  [Property in keyof IEMIMasterDocument as `emiRecord.${Property}`]?: IEMIMasterDocument[Property];
};

type IFlattenedExpenseTransactionManytoOneAssociationAttributeInsuranceRecord =
  {
    [Property in keyof IInsuranceMasterDocument as `insuranceRecord.${Property}`]?: IInsuranceMasterDocument[Property];
  };

export interface IFlattenedExpenseTransactionManytoOneAssociationAttributes
  extends IFlattenedExpenseTransactionManytoOneAssociationAttributeCalendarRecord,
    IFlattenedExpenseTransactionManytoOneAssociationAttributeMasterRecord,
    IFlattenedExpenseTransactionManytoOneAssociationAttributeBankRecord,
    IFlattenedExpenseTransactionManytoOneAssociationAttributeAssetRecord,
    IFlattenedExpenseTransactionManytoOneAssociationAttributeEMIRecord,
    IFlattenedExpenseTransactionManytoOneAssociationAttributeInsuranceRecord {}

export interface IExpenseTransactionAssociationAttributes
  extends IExpenseTransactionManytoOneAssociationAttributes {}

export interface IFlattenedExpenseTransactionAssociationAttributes
  extends IFlattenedExpenseTransactionManytoOneAssociationAttributes {}

export interface IExpenseTransactionDocument
  extends IExpenseTransactionNonCreationAttributes,
    IExpenseTransactionCreationAttributes,
    IExpenseTransactionAssociationAttributes {}

export interface IFlattenedExpenseTransactionDocument
  extends IExpenseTransactionNonCreationAttributes,
    IExpenseTransactionCreationAttributes,
    IFlattenedExpenseTransactionAssociationAttributes {}
