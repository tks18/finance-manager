import {
  IIncomeCategoryMasterDocument,
  IIncomeTransactionDocument,
} from '@plugins/backend/api/data/types';

export interface IIncomeMasterNonCreationAttributes {
  _id: number;
  created_at: Date;
  updated_at: Date;
}

export interface IIncomeMasterCreationAttributes {
  name: string;
  type: string;
  is_pf: boolean;
  is_tds: boolean;
  is_mediclaim: boolean;
  category_id: IIncomeCategoryMasterDocument['_id'];
}

export interface IIncomeMasterOnetoManyAssociationAttributes {
  transactions?: IIncomeTransactionDocument[];
}

export interface IIncomeMasterManytoOneAssociationAttributes {
  incomeCategory?: IIncomeCategoryMasterDocument;
}

export interface IIncomeMasterAssociationAttributes
  extends IIncomeMasterOnetoManyAssociationAttributes,
    IIncomeMasterManytoOneAssociationAttributes {}

export interface IIncomeMasterDocument
  extends IIncomeMasterNonCreationAttributes,
    IIncomeMasterCreationAttributes,
    IIncomeMasterAssociationAttributes {}
