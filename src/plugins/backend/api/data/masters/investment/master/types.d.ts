import {
  IInvestmentCategoryMasterDocument,
  IInvestmentTransactionDocument,
  IIncomeTransactionDocument,
  IMarketDataTransactionDocument,
} from '@plugins/backend/api/data/types';

export interface IInvestmentMasterNonCreationAttributes {
  _id: number;
  created_at: Date;
  updated_at: Date;
}

export interface IInvestmentMasterCreationAttributes {
  name: string;
  short_name: string;
  yahoo_ticker: string;
  investment_sector: string;
  category_id: IInvestmentCategoryMasterDocument['_id'];
}

export interface IInvestmentMasterOnetoManyAssociationAttributes {
  incomes?: IIncomeTransactionDocument[];
  transactions?: IInvestmentTransactionDocument[];
  marketRecords?: IMarketDataTransactionDocument[];
}

export interface IInvestmentMasterManytoOneAssociationAttributes {
  investmentCategory?: IInvestmentCategoryMasterDocument;
}

export interface IInvestmentMasterAssociationAttributes
  extends IInvestmentMasterOnetoManyAssociationAttributes,
    IInvestmentMasterManytoOneAssociationAttributes {}

export interface IInvestmentMasterDocument
  extends IInvestmentMasterNonCreationAttributes,
    IInvestmentMasterCreationAttributes,
    IInvestmentMasterAssociationAttributes {}
