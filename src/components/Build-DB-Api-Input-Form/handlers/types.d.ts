import type { Dispatch, SetStateAction } from 'react';
import type { TInputFieldType } from '@plugins/backend/api/data/inputs';

export type THandleFieldTypeProps = {
  userToken: string;
  field: TInputFieldType;
  fields: {
    state: {
      [key: string]: any;
    };
    set: Dispatch<
      SetStateAction<{
        [key: string]: any;
      }>
    >;
  };
  autoCompleteInputFields: {
    state: {
      [key: string]: any;
    };
    set: Dispatch<
      SetStateAction<{
        [key: string]: any;
      }>
    >;
  };
  amountFields: {
    state: {
      [key: string]: any;
    };
    set: Dispatch<
      SetStateAction<{
        [key: string]: any;
      }>
    >;
  };
  operationalAmounts: {
    state: {
      [key: string]: number;
    };
    set: Dispatch<
      SetStateAction<{
        [key: string]: number;
      }>
    >;
  };
  autoCompleteFieldOptions: {
    state: {
      [key: string]: {
        [key: string]: any;
      } | null;
    };
    set: Dispatch<
      SetStateAction<{
        [key: string]: {
          [key: string]: any;
        } | null;
      }>
    >;
  };
  getDateIdfromAPI: (date: string) => Promise<number | undefined>;
};
