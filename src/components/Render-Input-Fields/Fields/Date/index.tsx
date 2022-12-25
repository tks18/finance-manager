import { DatePicker } from '@mui/x-date-pickers';
import { TextField } from '@mui/material';
import { DateTime } from 'luxon';

import type { DatePickerProps } from '@mui/x-date-pickers';
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
  fieldsState: {
    [key: string]: any;
  };
  setFieldsState: React.Dispatch<
    React.SetStateAction<{
      [key: string]: any;
    }>
  >;
  getDateIdfromAPI: (date: string) => Promise<number | undefined>;
};

type TMonthYearFieldProps = Omit<
  DatePickerProps<any, any>,
  'renderInput' | 'value' | 'onChange'
> & {
  field: TCustomYearMonthField;
  fieldsState: {
    [key: string]: any;
  };
  setFieldsState: React.Dispatch<
    React.SetStateAction<{
      [key: string]: any;
    }>
  >;
};

export function CustomDateField(props: TDateFieldProps) {
  const { field, fieldsState, setFieldsState, getDateIdfromAPI } = props;

  const onDateValueChange = async (
    field: TCustomDateField,
    dateTime: DateTime,
  ) => {
    if (field.options.updateIdonOtherField.required) {
      const dateId = await getDateIdfromAPI(dateTime.toISODate());
      setFieldsState({
        ...fieldsState,
        [field.constructedValue]: dateTime.toISODate(),
        [field.options.updateIdonOtherField.fieldName]: dateId,
      });
    } else {
      setFieldsState({
        ...fieldsState,
        [field.constructedValue]: dateTime.toISODate(),
      });
    }
  };

  return (
    <DatePicker
      {...field.baseProps}
      value={fieldsState[field.constructedValue]}
      onChange={(newValue) => {
        const dateValue = newValue as DateTime;
        onDateValueChange(field, dateValue);
      }}
      renderInput={(params) => (
        <TextField
          sx={{ width: '100%' }}
          {...params}
          {...field.textProps}
          InputLabelProps={{ shrink: true }}
        />
      )}
    />
  );
}

export function CustomMonthYearField(props: TMonthYearFieldProps) {
  const { field, fieldsState, setFieldsState } = props;

  const onMonthYearValueChange = (
    field: TCustomYearMonthField,
    dateTime: DateTime,
  ) => {
    const { dateFormatter } = field.options;
    setFieldsState({
      ...fieldsState,
      [field.constructedValue]: dateTime.toFormat(dateFormatter),
    });
  };

  return (
    <DatePicker
      {...field.baseProps}
      value={fieldsState[field.constructedValue]}
      onChange={(newValue) => {
        const dateValue = newValue as DateTime;
        onMonthYearValueChange(field, dateValue);
      }}
      renderInput={(params) => (
        <TextField
          sx={{ width: '100%' }}
          {...params}
          {...field.textProps}
          InputLabelProps={{ shrink: true }}
        />
      )}
    />
  );
}
