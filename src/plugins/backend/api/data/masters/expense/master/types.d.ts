import {
  IExpenseCategoryMasterDocument,
  IExpenseTransactionDocument,
} from '@plugins/backend/api/data/types';

export interface IExpenseMasterNonCreationAttributes {
  _id: number;
  created_at: Date;
  updated_at: Date;
}

export interface IExpenseMasterCreationAttributes {
  name: string;
  type: string;
  category_id: IExpenseCategoryMasterDocument['_id'];
}

export interface IExpenseMasterOnetoManyAssociationAttributes {
  transactions?: IExpenseTransactionDocument[];
}

export interface IExpenseMasterManytoOneAssociationAttributes {
  expenseCategory?: IExpenseCategoryMasterDocument;
}

export interface IExpenseMasterAssociationAttributes
  extends IExpenseMasterOnetoManyAssociationAttributes,
    IExpenseMasterManytoOneAssociationAttributes {}

export interface IExpenseMasterDocument
  extends IExpenseMasterNonCreationAttributes,
    IExpenseMasterCreationAttributes,
    IExpenseMasterAssociationAttributes {}
