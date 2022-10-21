import {
  IAssetMasterDocument,
  ICreditCardMasterDocument,
  ICalendarMasterDocument,
  IExpenseTransactionDocument,
} from '@plugins/backend/api/data/types';

export interface IEMIMasterNonCreationAttributes {
  _id: number;
  created_at: Date;
  updated_at: Date;
}

export interface IEMIMasterCreationAttributes {
  credit_card_id: ICreditCardMasterDocument['_id'];
  emi_start_date_id: ICalendarMasterDocument['_id'];
  emi_end_date_id: ICalendarMasterDocument['_id'];
  emi_start_date: string;
  emi_end_date: string;
  payable_term: number;
  total_installments: number;
  total_emi_payment: number;
  total_product_cost: number;
  interest: number;
  total_interest_payable: number;
  no_cost_emi_discount: number;
  emi_amount: number;
  processing_cost: number;
  processing_gst_component: number;
}

export interface IEMIMasterOnetoManyAssociationAttributes {
  assets?: IAssetMasterDocument[];
  transactions?: IExpenseTransactionDocument[];
}

export interface IEMIMasterManytoOneAssociationAttributes {
  creditCard?: ICreditCardMasterDocument;
  startCalendarDateRecord?: ICalendarMasterDocument;
  endCalendarDateRecord?: ICalendarMasterDocument;
}

export interface IEMIMasterAssociationAttributes
  extends IEMIMasterOnetoManyAssociationAttributes,
    IEMIMasterManytoOneAssociationAttributes {}

export interface IEMIMasterDocument
  extends IEMIMasterNonCreationAttributes,
    IEMIMasterCreationAttributes,
    IEMIMasterAssociationAttributes {}
