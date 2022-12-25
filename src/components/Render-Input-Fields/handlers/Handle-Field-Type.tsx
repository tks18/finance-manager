import {
  CustomTextField,
  CustomControlledTextField,
  CustomAutoCompleteField,
  CustomAmountField,
  CustomDateField,
  CustomMonthYearField,
  CustomSwitchField,
} from '../Fields';

import type { Dispatch, SetStateAction } from 'react';
import type { TInputFieldType } from '@plugins/backend/api/data/inputs';

type THandleFieldTypeProps = {
  userToken: string;
  field: TInputFieldType;
  fieldsState: {
    [key: string]: any;
  };
  setFieldsState: Dispatch<
    SetStateAction<{
      [key: string]: any;
    }>
  >;
  amountFieldsState: {
    [key: string]: any;
  };
  setAmountFieldsState: Dispatch<
    SetStateAction<{
      [key: string]: any;
    }>
  >;
  getDateIdfromAPI: (date: string) => Promise<number | undefined>;
};

export function HandleFieldType(props: THandleFieldTypeProps) {
  const {
    userToken,
    field,
    fieldsState,
    setFieldsState,
    amountFieldsState,
    setAmountFieldsState,
    getDateIdfromAPI,
  } = props;
  switch (field.fieldType) {
    case 'text':
      return (
        <CustomTextField
          field={field}
          fieldsState={fieldsState}
          setFieldsState={setFieldsState}
        />
      );
    case 'controlledText':
      return (
        <CustomControlledTextField field={field} fieldsState={fieldsState} />
      );
    case 'autocomplete':
      return (
        <CustomAutoCompleteField
          userToken={userToken}
          field={field}
          fieldsState={fieldsState}
          setFieldsState={setFieldsState}
        />
      );
    case 'amount':
      return (
        <CustomAmountField
          field={field}
          fieldsState={fieldsState}
          setFieldsState={setFieldsState}
          amountFormattedFieldsState={amountFieldsState}
          setAmountFormattedFieldsState={setAmountFieldsState}
        />
      );
    case 'date':
      return (
        <CustomDateField
          field={field}
          fieldsState={fieldsState}
          setFieldsState={setFieldsState}
          getDateIdfromAPI={getDateIdfromAPI}
        />
      );
    case 'year/month':
      return (
        <CustomMonthYearField
          field={field}
          fieldsState={fieldsState}
          setFieldsState={setFieldsState}
        />
      );
    case 'switch':
      return (
        <CustomSwitchField
          field={field}
          fieldsState={fieldsState}
          setFieldsState={setFieldsState}
        />
      );
  }
}
