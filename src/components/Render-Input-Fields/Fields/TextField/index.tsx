import { TextField } from '@mui/material';

import type { TextFieldProps } from '@mui/material';
import type {
  IFieldBaseProps,
  TFieldText,
  TFieldControlledTextField,
} from '@plugins/backend/types';

type TCustomText = IFieldBaseProps & TFieldText;

type TTextFieldProps = TextFieldProps & {
  field: TCustomText;
  fieldsState: { [key: string]: any };
  setFieldsState: React.Dispatch<
    React.SetStateAction<{
      [key: string]: any;
    }>
  >;
};

type TCustomControlledText = IFieldBaseProps & TFieldControlledTextField;

type TControlledTextFieldProps = TextFieldProps & {
  field: TCustomControlledText;
  fieldsState: { [key: string]: any };
};

export function CustomTextField(props: TTextFieldProps) {
  const { field, fieldsState, setFieldsState } = props;

  const onStateFieldChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    e.preventDefault();
    const { name, value } = e.target;
    setFieldsState({ ...fieldsState, [name]: value });
  };

  return (
    <TextField
      {...field.baseProps}
      sx={{ width: '100%' }}
      name={field.constructedValue}
      value={fieldsState[field.constructedValue]}
      onChange={onStateFieldChange}
    />
  );
}

export function CustomControlledTextField(props: TControlledTextFieldProps) {
  const { field, fieldsState } = props;

  return (
    <TextField
      {...field.baseProps}
      sx={{ width: '100%' }}
      disabled={true}
      InputLabelProps={{ shrink: true }}
      name={field.constructedValue}
      defaultValue={fieldsState[field.constructedValue]}
      key={fieldsState[field.constructedValue]}
    />
  );
}
