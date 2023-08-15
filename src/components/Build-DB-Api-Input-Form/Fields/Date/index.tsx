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
  DatePickerProps<any>,
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
  dateRenderFields: {
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
  DatePickerProps<any>,
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
  dateRenderFields: {
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
  const { field, fields, dateRenderFields, getDateIdfromAPI } = props;
  const dateFormat = field.options.dateFormatter;

  const onDateValueChange = async (
    field: TCustomDateField,
    dateTime: DateTime,
  ) => {
    if (field.options.updateIdonOtherField.required) {
      const dateId = await getDateIdfromAPI(String(dateTime.toISODate()));
      fields.set({
        ...fields.state,
        [field.constructedValue]: dateTime.toISODate(),
        [field.options.updateIdonOtherField.fieldName]: dateId,
      });
      dateRenderFields.set({
        ...dateRenderFields.state,
        [field.constructedValue]: dateTime.toFormat(dateFormat),
      });
    } else {
      fields.set({
        ...fields.state,
        [field.constructedValue]: dateTime.toISODate(),
      });
      dateRenderFields.set({
        ...dateRenderFields.state,
        [field.constructedValue]: dateTime.toFormat(dateFormat),
      });
    }
  };

  const isStateUndefined = fields.state[field.constructedValue] === undefined;

  return isStateUndefined ? (
    <></>
  ) : (
    <DatePicker<DateTime>
      {...field.baseProps}
      sx={{ width: '100%' }}
      onChange={(newValue) => {
        const dateValue = newValue;
        if (dateValue) {
          onDateValueChange(field, dateValue);
        }
      }}
      slots={{
        textField: (params) => (
          <TextField
            sx={{ width: '100%' }}
            {...params}
            {...field.textProps}
            disabled={true}
            InputLabelProps={{
              shrink:
                dateRenderFields.state[field.constructedValue] === ''
                  ? false
                  : true,
            }}
            inputProps={{ readOnly: true }}
            value={dateRenderFields.state[field.constructedValue]}
          />
        ),
      }}
    />
  );
}

export function CustomMonthYearField(props: TMonthYearFieldProps) {
  const { field, fields, dateRenderFields } = props;
  const dateFormat = field.options.dateFormatter;

  const onMonthYearValueChange = (
    field: TCustomYearMonthField,
    dateTime: DateTime,
  ) => {
    fields.set({
      ...fields.state,
      [field.constructedValue]: dateTime.toFormat(dateFormat),
    });
    dateRenderFields.set({
      ...dateRenderFields.state,
      [field.constructedValue]: dateTime.toFormat(dateFormat),
    });
  };

  const isStateUndefined = fields.state[field.constructedValue] === undefined;

  return isStateUndefined ? (
    <></>
  ) : (
    <DatePicker<DateTime>
      {...field.baseProps}
      sx={{ width: '100%' }}
      onChange={(newValue) => {
        const dateValue = newValue;
        if (dateValue) {
          onMonthYearValueChange(field, dateValue);
        }
      }}
      slots={{
        textField: (params) => (
          <TextField
            sx={{ width: '100%' }}
            {...params}
            {...field.textProps}
            disabled={true}
            InputLabelProps={{
              ...params.InputLabelProps,
              shrink:
                fields.state[field.constructedValue] === '' ? false : true,
            }}
            inputProps={{ ...params.inputProps, readOnly: true }}
            value={dateRenderFields.state[field.constructedValue]}
          />
        ),
      }}
    />
  );
}
