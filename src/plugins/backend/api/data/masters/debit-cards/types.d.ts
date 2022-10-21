import { IBankMasterDocument } from '@plugins/backend/api/data/types';

export interface IDebitCardMasterNonCreationAttributes {
  _id: number;
  created_at: Date;
  updated_at: Date;
}

export interface IDebitCardMasterCreationAttributes {
  card_name: string;
  card_type: string;
  card_gateway_vendor: string;
  bank_id: IBankMasterDocument['_id'];
  card_no: string;
  card_expiry_month: number;
  card_expiry_year: number;
  card_cvv_code: number;
  is_international: boolean;
  atm_limit: number;
  ecom_limit: number;
  tap_enabled: boolean;
  tap_limit: number;
  pos_limit: number;
  international_limit: number;
}

export interface IDebitCardMasterManytoOneAssociationAttributes {
  bankRecord?: IBankMasterDocument;
}

export interface IDebitCardMasterAssociationAttributes
  extends IDebitCardMasterManytoOneAssociationAttributes {}

export interface IDebitCardMasterDocument
  extends IDebitCardMasterNonCreationAttributes,
    IDebitCardMasterCreationAttributes,
    IDebitCardMasterAssociationAttributes {}
