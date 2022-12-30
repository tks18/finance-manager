import { TextField } from '@mui/material';

import type { TextFieldProps } from '@mui/material';
import type { Dispatch, SetStateAction } from 'react';
import type {
  IFieldBaseProps,
  TFieldText,
  TFieldControlledTextField,
} from '@plugins/backend/types';

type TCustomText = IFieldBaseProps & TFieldText;

type TTextFieldProps = TextFieldProps & {
  field: TCustomText;
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
};

type TCustomControlledText = IFieldBaseProps & TFieldControlledTextField;

type TControlledTextFieldProps = TextFieldProps & {
  field: TCustomControlledText;
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
};

export function CustomTextField(props: TTextFieldProps) {
  const { field, fields } = props;

  const onStateFieldChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    e.preventDefault();
    const { name, value } = e.target;
    fields.set({ ...fields.state, [name]: value });
  };

  const isStateUndefined = fields.state[field.constructedValue] === undefined;

  return isStateUndefined ? (
    <></>
  ) : (
    <TextField
      {...field.baseProps}
      sx={{ width: '100%' }}
      name={field.constructedValue}
      value={fields.state[field.constructedValue]}
      onChange={onStateFieldChange}
    />
  );
}

export function CustomControlledTextField(props: TControlledTextFieldProps) {
  const { field, fields } = props;

  const isStateUndefined = fields.state[field.constructedValue] === undefined;

  return isStateUndefined ? (
    <></>
  ) : (
    <TextField
      {...field.baseProps}
      sx={{ width: '100%' }}
      disabled={true}
      InputLabelProps={{
        shrink: fields.state[field.constructedValue] === '' ? false : true,
      }}
      name={field.constructedValue}
      value={fields.state[field.constructedValue]}
    />
  );
}
