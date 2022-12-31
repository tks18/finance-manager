import { DatePicker } from '@mui/x-date-pickers';
import { TextField } from '@mui/material';
import { DateTime } from 'luxon';

import type { DatePickerProps } from '@mui/x-date-pickers';
import type { Dispatch, SetStateAction } from 'react';
import type {
  IFieldBaseProps,
  TFieldDate,
  TFieldYearorMonth,
} from '@plugins/backend/api/data/inputs';

type TCustomDateField = IFieldBaseProps & TFieldDate;
type TCustomYearMonthField = IFieldBaseProps & TFieldYearorMonth;

type TDateFieldProps = Omit<
  DatePickerProps<any, any>,
  'renderInput' | 'value' | 'onChange'
> & {
  field: TCustomDateField;
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
  getDateIdfromAPI: (date: string) => Promise<number | undefined>;
};

type TMonthYearFieldProps = Omit<
  DatePickerProps<any, any>,
  'renderInput' | 'value' | 'onChange'
> & {
  field: TCustomYearMonthField;
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

export function CustomDateField(props: TDateFieldProps) {
  const { field, fields, getDateIdfromAPI } = props;

  const onDateValueChange = async (
    field: TCustomDateField,
    dateTime: DateTime,
  ) => {
    if (field.options.updateIdonOtherField.required) {
      const dateId = await getDateIdfromAPI(dateTime.toISODate());
      fields.set({
        ...fields.state,
        [field.constructedValue]: dateTime.toISODate(),
        [field.options.updateIdonOtherField.fieldName]: dateId,
      });
    } else {
      fields.set({
        ...fields.state,
        [field.constructedValue]: dateTime.toISODate(),
      });
    }
  };

  const isStateUndefined = fields.state[field.constructedValue] === undefined;

  return isStateUndefined ? (
    <></>
  ) : (
    <DatePicker
      {...field.baseProps}
      value={
        fields.state[field.constructedValue] === ''
          ? null
          : fields.state[field.constructedValue]
      }
      onChange={(newValue) => {
        const dateValue = newValue as DateTime;
        onDateValueChange(field, dateValue);
      }}
      renderInput={(params) => (
        <TextField
          sx={{ width: '100%' }}
          {...params}
          {...field.textProps}
          disabled={true}
          InputLabelProps={{
            shrink: fields.state[field.constructedValue] === '' ? false : true,
          }}
          inputProps={{ readOnly: true }}
          value={fields.state[field.constructedValue]}
        />
      )}
    />
  );
}

export function CustomMonthYearField(props: TMonthYearFieldProps) {
  const { field, fields } = props;

  const onMonthYearValueChange = (
    field: TCustomYearMonthField,
    dateTime: DateTime,
  ) => {
    const { dateFormatter } = field.options;
    fields.set({
      ...fields.state,
      [field.constructedValue]: dateTime.toFormat(dateFormatter),
    });
  };

  const isStateUndefined = fields.state[field.constructedValue] === undefined;

  return isStateUndefined ? (
    <></>
  ) : (
    <DatePicker
      {...field.baseProps}
      value={
        fields.state[field.constructedValue] === ''
          ? null
          : fields.state[field.constructedValue]
      }
      onChange={(newValue) => {
        const dateValue = newValue as DateTime;
        onMonthYearValueChange(field, dateValue);
      }}
      renderInput={(params) => (
        <TextField
          sx={{ width: '100%' }}
          {...params}
          {...field.textProps}
          disabled={true}
          InputLabelProps={{
            ...params.InputLabelProps,
            shrink: fields.state[field.constructedValue] === '' ? false : true,
          }}
          inputProps={{ ...params.inputProps, readOnly: true }}
          value={fields.state[field.constructedValue]}
        />
      )}
    />
  );
}
