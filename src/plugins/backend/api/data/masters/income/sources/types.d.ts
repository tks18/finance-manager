import {
  IIncomeCategoryMasterDocument,
  IIncomeTransactionDocument,
} from '@plugins/backend/api/data/types';

export interface IIncomeSourceMasterNonCreationAttributes {
  _id: number;
  created_at: Date;
  updated_at: Date;
}

export interface IIncomeSourceMasterCreationAttributes {
  source_name: string;
  source_type: string;
  category_id: IIncomeCategoryMasterDocument['_id'];
}

export interface IIncomeSourceMasterOnetoManyAssociationAttributes {
  transactions?: IIncomeTransactionDocument[];
}

export interface IIncomeSourceMasterManytoOneAssociationAttributes {
  incomeCategory?: IIncomeCategoryMasterDocument;
}

export interface IIncomeSourceMasterAssociationAttributes
  extends IIncomeSourceMasterOnetoManyAssociationAttributes,
    IIncomeSourceMasterManytoOneAssociationAttributes {}

export interface IIncomeSourceMasterDocument
  extends IIncomeSourceMasterNonCreationAttributes,
    IIncomeSourceMasterCreationAttributes,
    IIncomeSourceMasterAssociationAttributes {}
