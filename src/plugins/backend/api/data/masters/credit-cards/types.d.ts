import {
  IBankMasterDocument,
  IEMIMasterDocument,
} from '@plugins/backend/api/data/types';

export interface ICreditCardMasterNonCreationAttributes {
  _id: number;
  created_at: Date;
  updated_at: Date;
}

export interface ICreditCardMasterCreationAttributes {
  card_name: string;
  card_type: string;
  card_gateway_vendor: string;
  bank_id: IBankMasterDocument['_id'];
  card_no: string;
  card_expiry_month: number;
  card_expiry_year: number;
  card_cvv_code: number;
  credit_limit: number;
  is_international: boolean;
  ecom_limit: number;
  tap_enabled: boolean;
  tap_limit: number;
  pos_limit: number;
  international_limit: number;
}

export interface ICreditCardMasterOnetoManyAssociationAttributes {
  emiRecords?: IEMIMasterDocument[];
}

export interface ICreditCardMasterManytoOneAssociationAttributes {
  bankRecord?: IBankMasterDocument;
}

export interface ICreditCardMasterAssociationAttributes
  extends ICreditCardMasterOnetoManyAssociationAttributes,
    ICreditCardMasterManytoOneAssociationAttributes {}

export interface ICreditCardMasterDocument
  extends ICreditCardMasterNonCreationAttributes,
    ICreditCardMasterCreationAttributes,
    ICreditCardMasterAssociationAttributes {}
