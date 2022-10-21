import { IAssetMasterDocument } from '@plugins/backend/api/data/types';

export interface IAssetCategoryMasterNonCreationAttributes {
  _id: number;
  created_at: Date;
  updated_at: Date;
}

export interface IAssetCategoryMasterCreationAttributes {
  category: string;
}

export interface IAssetCategoryMasterOnetoManyAssociationAttributes {
  assets?: IAssetMasterDocument[];
}

export interface IAssetCategoryMasterAssociationAttributes
  extends IAssetCategoryMasterOnetoManyAssociationAttributes {}

export interface IAssetCategoryMasterDocument
  extends IAssetCategoryMasterNonCreationAttributes,
    IAssetCategoryMasterCreationAttributes,
    IAssetCategoryMasterAssociationAttributes {}
