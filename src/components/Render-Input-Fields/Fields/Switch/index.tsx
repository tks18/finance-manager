import { FormControlLabel, Switch } from '@mui/material';

import type { FormControlLabelProps, SwitchProps } from '@mui/material';
import type { Dispatch, SetStateAction } from 'react';
import type {
  IFieldBaseProps,
  TFieldSwitch,
} from '@plugins/backend/api/data/inputs';

type TCustomSwitch = IFieldBaseProps & TFieldSwitch;

type TSwitchFieldProps = Omit<FormControlLabelProps, 'control' | 'label'> & {
  switchProps?: SwitchProps;
  field: TCustomSwitch;
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

export function CustomSwitchField(props: TSwitchFieldProps) {
  const { switchProps, field, fields } = props;

  const onSwitchValueChange = (
    field: TCustomSwitch,
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    fields.set({
      ...fields.state,
      [field.constructedValue]: e.target.checked ? 1 : 0,
    });
  };

  const isStateUndefined = fields.state[field.constructedValue] === undefined;

  return isStateUndefined ? (
    <></>
  ) : (
    <FormControlLabel
      {...field.baseProps}
      control={
        <Switch
          {...switchProps}
          {...field.switchProps}
          name={field.constructedValue}
          value={fields.state[field.constructedValue] === '1' ? true : false}
          onChange={(e) => onSwitchValueChange(field, e)}
        />
      }
    />
  );
}
