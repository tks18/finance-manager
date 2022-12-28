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

export function HandleFieldType(props: THandleFieldTypeProps) {
  const {
    userToken,
    field,
    fields,
    autoCompleteInputFields,
    amountFields,
    autoCompleteFieldOptions,
    getDateIdfromAPI,
  } = props;
  switch (field.fieldType) {
    case 'text':
      return <CustomTextField field={field} fields={fields} />;
    case 'controlledText':
      return <CustomControlledTextField field={field} fields={fields} />;
    case 'autocomplete':
      return (
        <CustomAutoCompleteField
          userToken={userToken}
          field={field}
          fields={fields}
          autoCompleteInputFields={autoCompleteInputFields}
          autoCompleteFieldOptions={autoCompleteFieldOptions}
        />
      );
    case 'amount':
      return (
        <CustomAmountField
          field={field}
          fields={fields}
          amountFields={amountFields}
        />
      );
    case 'date':
      return (
        <CustomDateField
          field={field}
          fields={fields}
          getDateIdfromAPI={getDateIdfromAPI}
        />
      );
    case 'year/month':
      return <CustomMonthYearField field={field} fields={fields} />;
    case 'switch':
      return <CustomSwitchField field={field} fields={fields} />;
  }
}
