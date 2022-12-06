import type {
  AutocompleteProps,
  TextFieldProps,
  SwitchProps,
  FormControlLabelProps,
} from '@mui/material';
import type { DatePickerProps } from '@mui/x-date-pickers';
import { DatabaseHandler } from '../..';
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
  api: DatabaseHandler<ICreationAttributes, IDocumentAttributes>;
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
  baseProps: Omit<
    DatePickerProps<any, any>,
    'renderInput' | 'value' | 'onChange'
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
  baseProps: Omit<
    DatePickerProps<any, any>,
    'renderInput' | 'value' | 'onChange'
  >;
  textProps: TextFieldProps;
  options: {
    dateFormatter: string;
  };
};

export type TFieldAmount = {
  fieldType: 'amount';
  baseProps: NumericFormatProps;
  textProps: TextFieldProps;
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
  );
