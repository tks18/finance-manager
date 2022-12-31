import {
  CustomTextField,
  CustomControlledTextField,
  CustomAutoCompleteField,
  CustomAmountField,
  CustomCalculatedAmountField,
  CustomDateField,
  CustomMonthYearField,
  CustomSwitchField,
} from '../Fields';

import type { THandleFieldTypeProps } from './types';

export function HandleFieldType(props: THandleFieldTypeProps) {
  const {
    userToken,
    field,
    fields,
    autoCompleteInputFields,
    amountFields,
    operationalAmounts,
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
          operationalAmounts={operationalAmounts}
        />
      );
    case 'controlledAmount':
      return <CustomCalculatedAmountField field={field} fields={fields} />;
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
    case 'helper':
      return <></>;
  }
}
