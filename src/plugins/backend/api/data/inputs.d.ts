import type {
  AutocompleteProps,
  TextFieldProps,
  SwitchProps,
  FormControlLabelProps,
} from '@mui/material';
import type { DatePickerProps } from '@mui/x-date-pickers';
import { ApiHandler } from '../..';
import { IDBGetInput } from '../../types';

type WithRequiredProperty<Type, Key extends keyof Type> = Type & {
  [Property in Key]-?: Type[Property];
};

export interface IFieldBaseProps {
  name: string;
  constructedValue: string;
}

export interface IFieldAutoCompleteApiOption<
  ICreationAttributes,
  IDocumentAttributes,
> {
  mode: 'api';
  api: ApiHandler<ICreationAttributes, IDocumentAttributes>;
  apiOptions?: IDBGetInput<ICreationAttributes>;
  valueField: string;
}

export interface IFieldAutoCompleteLocalOption {
  mode: 'local';
  values: {
    _id: number;
    value: string;
  }[];
  valueField: string;
}

export type TFieldAutoCompleteOptions<
  ICreationAttributes,
  IDocumentAttributes,
> =
  | IFieldAutoCompleteApiOption<ICreationAttributes, IDocumentAttributes>
  | IFieldAutoCompleteLocalOption;

export type TFieldAutocomplete<ICreationAttributes, IDocumentAttributes> = {
  fieldType: 'autocomplete';
  baseProps: WithRequiredProperty<
    Omit<
      AutocompleteProps<any, undefined, undefined, undefined>,
      'renderInput' | 'options'
    >,
    'renderOption' | 'getOptionLabel' | 'isOptionEqualToValue'
  >;
  textProps: TextFieldProps;
  options: TFieldAutoCompleteOptions<ICreationAttributes, IDocumentAttributes>;
};

export type TFieldText = {
  fieldType: 'text';
  baseProps: TextFieldProps;
};

export type TFieldSwitch = {
  fieldType: 'switch';
  baseProps: Omit<FormControlLabelProps, 'control'>;
  switchProps: SwitchProps;
};

export type TFieldDate = {
  fieldType: 'date';
  baseProps: WithRequiredProperty<
    Omit<DatePickerProps<DateTime>, 'renderInput' | 'value' | 'onChange'>,
    'disableFuture' | 'disablePast'
  >;
  textProps: TextFieldProps;
  options: {
    dateFormatter: string;
    updateIdonOtherField: {
      required: boolean;
      fieldName: string;
    };
  };
};

export type TFieldYearorMonth = {
  fieldType: 'year/month';
  baseProps: WithRequiredProperty<
    Omit<DatePickerProps<DateTime>, 'renderInput' | 'value' | 'onChange'>,
    'disableFuture' | 'disablePast'
  >;
  textProps: TextFieldProps;
  options: {
    dateFormatter: string;
  };
};

export type TFieldAmountCalculatedOperations =
  | 'add'
  | 'subtract'
  | 'multiply'
  | 'divide';

export type TFieldAmountCalculatedOperationConfig = {
  field1: string;
  field2: string;
  operation: TFieldAmountCalculatedOperations;
  affectedField: string;
  affectedFieldType: 'helperField' | 'stateField';
};

export type TFieldAmount = {
  fieldType: 'amount';
  baseProps: NumericFormatProps;
  textProps: TextFieldProps;
  startIcon: JSX.Element;
  affectsCalculatedField?: {
    operations: TFieldAmountCalculatedOperationConfig[];
  };
};

export type TFieldOperationHelper = {
  fieldType: 'helper';
};

export type TFieldCalculatedAmount = {
  fieldType: 'controlledAmount';
  baseProps: NumericFormatProps;
  textProps: TextFieldProps;
  startIcon: JSX.Element;
};

export type TFieldControlledTextField = {
  fieldType: 'controlledText';
  baseProps: TextFieldProps;
};

export type TInputFieldType = IFieldBaseProps &
  (
    | TFieldAutocomplete<{ [key: string]: any }, { [key: string]: any }>
    | TFieldText
    | TFieldControlledTextField
    | TFieldSwitch
    | TFieldDate
    | TFieldYearorMonth
    | TFieldAmount
    | TFieldCalculatedAmount
    | TFieldOperationHelper
  );
