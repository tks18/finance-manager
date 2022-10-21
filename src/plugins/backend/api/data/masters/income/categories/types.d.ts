import { IIncomeMasterDocument } from '@plugins/backend/api/data/types';

export interface IIncomeCategoryMasterNonCreationAttributes {
  _id: number;
  created_at: Date;
  updated_at: Date;
}

export interface IIncomeCategoryMasterCreationAttributes {
  category: string;
}

export interface IIncomeCategoryMasterOnetoManyAssociationAttributes {
  expenses?: IIncomeMasterDocument[];
}

export interface IIncomeCategoryMasterAssociationAttributes
  extends IIncomeCategoryMasterOnetoManyAssociationAttributes {}

export interface IIncomeCategoryMasterDocument
  extends IIncomeCategoryMasterNonCreationAttributes,
    IIncomeCategoryMasterCreationAttributes,
    IIncomeCategoryMasterAssociationAttributes {}
