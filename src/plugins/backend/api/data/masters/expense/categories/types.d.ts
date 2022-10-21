import { IExpenseMasterDocument } from '@plugins/backend/api/data/types';

export interface IExpenseCategoryMasterNonCreationAttributes {
  _id: number;
  created_at: Date;
  updated_at: Date;
}

export interface IExpenseCategoryMasterCreationAttributes {
  category: string;
}

export interface IExpenseCategoryMasterOnetoManyAssociationAttributes {
  expenses?: IExpenseMasterDocument[];
}

export interface IExpenseCategoryMasterAssociationAttributes
  extends IExpenseCategoryMasterOnetoManyAssociationAttributes {}

export interface IExpenseCategoryMasterDocument
  extends IExpenseCategoryMasterNonCreationAttributes,
    IExpenseCategoryMasterCreationAttributes,
    IExpenseCategoryMasterAssociationAttributes {}
