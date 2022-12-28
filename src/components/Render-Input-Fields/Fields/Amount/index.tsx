import { InputAdornment, TextField } from '@mui/material';
import { NumericFormat } from 'react-number-format';
import { CurrencyRupee as CurrencyRupeeIcon } from '@mui/icons-material';

import type { TextFieldProps } from '@mui/material';
import type { Dispatch, SetStateAction } from 'react';
import type { NumericFormatProps } from 'react-number-format';
import type { NumberFormatValues, SourceInfo } from 'react-number-format';
import type {
  IFieldBaseProps,
  TFieldAmount,
} from '@plugins/backend/api/data/inputs';

type TCustomAmount = IFieldBaseProps & TFieldAmount;

type TAmountFieldProps = NumericFormatProps &
  TextFieldProps & {
    field: TCustomAmount;
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
  };

export function CustomAmountField(props: TAmountFieldProps) {
  const { field, fields, amountFields } = props;

  const onAmountValueChange = (
    constructedValue: string,
    values: NumberFormatValues,
    sourceInfo: SourceInfo,
  ) => {
    sourceInfo.event?.preventDefault();
    const { formattedValue, floatValue } = values;
    fields.set({
      ...fields.state,
      [constructedValue]: floatValue,
    });
    amountFields.set({
      ...amountFields.state,
      [constructedValue]: formattedValue,
    });
  };

  const isStateUndefined =
    fields.state[field.constructedValue] === undefined &&
    amountFields.state[field.constructedValue] === undefined;

  return isStateUndefined ? (
    <></>
  ) : (
    <NumericFormat<TextFieldProps>
      {...field.baseProps}
      {...field.textProps}
      type={'text'}
      sx={{ width: '100%' }}
      defaultValue={0}
      customInput={TextField}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <CurrencyRupeeIcon />
          </InputAdornment>
        ),
      }}
      name={field.constructedValue}
      value={amountFields.state[field.constructedValue]}
      onValueChange={(v, s) =>
        onAmountValueChange(field.constructedValue, v, s)
      }
    />
  );
}
