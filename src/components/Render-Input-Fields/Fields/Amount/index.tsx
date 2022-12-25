import { InputAdornment, TextField } from '@mui/material';
import { NumericFormat } from 'react-number-format';
import { CurrencyRupee as CurrencyRupeeIcon } from '@mui/icons-material';

import type { TextFieldProps } from '@mui/material';
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
    fieldsState: {
      [key: string]: any;
    };
    setFieldsState: React.Dispatch<
      React.SetStateAction<{
        [key: string]: any;
      }>
    >;
    amountFormattedFieldsState: {
      [key: string]: any;
    };
    setAmountFormattedFieldsState: React.Dispatch<
      React.SetStateAction<{
        [key: string]: any;
      }>
    >;
  };

export function CustomAmountField(props: TAmountFieldProps) {
  const {
    field,
    fieldsState,
    setFieldsState,
    amountFormattedFieldsState,
    setAmountFormattedFieldsState,
  } = props;

  const onAmountValueChange = (
    constructedValue: string,
    values: NumberFormatValues,
    sourceInfo: SourceInfo,
  ) => {
    sourceInfo.event?.preventDefault();
    const { formattedValue, floatValue } = values;
    setFieldsState({
      ...fieldsState,
      [constructedValue]: floatValue,
    });
    setAmountFormattedFieldsState({
      ...amountFormattedFieldsState,
      [constructedValue]: formattedValue,
    });
  };

  return (
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
      value={amountFormattedFieldsState[field.constructedValue]}
      onValueChange={(v, s) =>
        onAmountValueChange(field.constructedValue, v, s)
      }
    />
  );
}
