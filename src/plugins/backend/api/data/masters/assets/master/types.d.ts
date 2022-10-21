import {
  IAssetCategoryMasterDocument,
  ICalendarMasterDocument,
  IExpenseTransactionDocument,
  IEMIMasterDocument,
} from '@plugins/backend/api/data/types';

export interface IAssetMasterNonCreationAttributes {
  _id: number;
  created_at: Date;
  updated_at: Date;
}

export interface IAssetMasterCreationAttributes {
  date_id: number;
  date: string;
  name: string;
  emi_id?: number;
  amount: number;
  category_id: IAssetCategoryMasterDocument['_id'];
}

export interface IAssetMasterOnetoManyAssociationAttributes {
  transactions?: IExpenseTransactionDocument[];
}

export interface IAssetMasterManytoOneAssociationAttributes {
  calendarRecord?: ICalendarMasterDocument;
  emiRecord?: IEMIMasterDocument;
  assetCategory?: IAssetCategoryMasterDocument;
}

export interface IAssetMasterAssociationAttributes
  extends IAssetMasterOnetoManyAssociationAttributes,
    IAssetMasterManytoOneAssociationAttributes {}

export interface IAssetMasterDocument
  extends IAssetMasterNonCreationAttributes,
    IAssetMasterCreationAttributes,
    IAssetMasterAssociationAttributes {}
