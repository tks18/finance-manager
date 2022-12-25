import { FormControlLabel, Switch } from '@mui/material';

import type { FormControlLabelProps, SwitchProps } from '@mui/material';
import type {
  IFieldBaseProps,
  TFieldSwitch,
} from '@plugins/backend/api/data/inputs';

type TCustomSwitch = IFieldBaseProps & TFieldSwitch;

type TSwitchFieldProps = Omit<FormControlLabelProps, 'control' | 'label'> & {
  switchProps?: SwitchProps;
  field: TCustomSwitch;
  fieldsState: {
    [key: string]: any;
  };
  setFieldsState: React.Dispatch<
    React.SetStateAction<{
      [key: string]: any;
    }>
  >;
};

export function CustomSwitchField(props: TSwitchFieldProps) {
  const { switchProps, field, fieldsState, setFieldsState } = props;

  const onSwitchValueChange = (
    field: TCustomSwitch,
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setFieldsState({
      ...fieldsState,
      [field.constructedValue]: e.target.checked ? 1 : 0,
    });
  };

  return (
    <FormControlLabel
      {...field.baseProps}
      control={
        <Switch
          {...switchProps}
          {...field.switchProps}
          name={field.constructedValue}
          value={fieldsState[field.constructedValue] === '1' ? true : false}
          onChange={(e) => onSwitchValueChange(field, e)}
        />
      }
    />
  );
}
