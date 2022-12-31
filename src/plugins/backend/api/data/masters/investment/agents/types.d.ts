import { IInvestmentTransactionDocument } from '@plugins/backend/api/data/types';

export interface IInvestmentAgentMasterNonCreationAttributes {
  _id: number;
  created_at: Date;
  updated_at: Date;
}

export interface IInvestmentAgentMasterCreationAttributes {
  name: string;
  company_name: string;
  client_code: string;
  dp_id: string;
  bo_id: string;
}

export interface IInvestmentAgentMasterOnetoManyAssociationAttributes {
  investments?: IInvestmentTransactionDocument[];
}

export interface IInvestmentAgentMasterAssociationAttributes
  extends IInvestmentAgentMasterOnetoManyAssociationAttributes {}

export interface IInvestmentAgentMasterDocument
  extends IInvestmentAgentMasterNonCreationAttributes,
    IInvestmentAgentMasterCreationAttributes,
    IInvestmentAgentMasterAssociationAttributes {}
