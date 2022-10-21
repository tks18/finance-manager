import { IInvestmentMasterDocument } from '@plugins/backend/api/data/types';

export interface IInvestmentCategoryMasterNonCreationAttributes {
  _id: number;
  created_at: Date;
  updated_at: Date;
}

export interface IInvestmentCategoryMasterCreationAttributes {
  category: string;
  category_short: string;
  risk_rank: number;
  risk_name: string;
  tax_term_threshold_years: number;
}

export interface IInvestmentCategoryMasterOnetoManyAssociationAttributes {
  investments?: IInvestmentMasterDocument[];
}

export interface IInvestmentCategoryMasterAssociationAttributes
  extends IInvestmentCategoryMasterOnetoManyAssociationAttributes {}

export interface IInvestmentCategoryMasterDocument
  extends IInvestmentCategoryMasterNonCreationAttributes,
    IInvestmentCategoryMasterCreationAttributes,
    IInvestmentCategoryMasterAssociationAttributes {}
