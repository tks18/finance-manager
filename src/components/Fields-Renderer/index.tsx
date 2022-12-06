import { useState, useEffect, useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import {
  Typography,
  TextField,
  Unstable_Grid2 as Grid,
  Autocomplete,
  InputAdornment,
  Switch,
  FormControlLabel,
  Box,
  Button,
} from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers';
import { CurrencyRupee as CurrencyRupeeIcon } from '@mui/icons-material';
import { NumericFormat } from 'react-number-format';
import { toast } from 'react-toastify';

//Types
import type { AutocompleteChangeDetails, TextFieldProps } from '@mui/material';
import type {
  TInputFieldType,
  TFieldAutoCompleteOptions,
} from '@plugins/backend/api/data/inputs';
import type { IBaseDBApiConfig } from '@/plugins/backend/types';
import type { NumberFormatValues, SourceInfo } from 'react-number-format';
import type { DateTime } from 'luxon';

type TAutoCompleteFieldsState = TFieldAutoCompleteOptions<
  { [key: string]: any },
  { [key: string]: any }
> & {
  constructedValue: string;
};

interface IStateFields {
  [key: string]: any;
}

interface IAutoCompleteFieldResultState {
  name: string;
  options: { [key: string]: any }[];
}

interface IRenderModelInputFieldsProps extends React.PropsWithChildren {
  userToken: string;
  config: IBaseDBApiConfig;
}

export function RenderModelInputFields(props: IRenderModelInputFieldsProps) {
  const { userToken, config } = props;
  const location = useLocation();
  const {
    componentOptions: { fields, title },
    api,
  } = config;

  const initialState = useMemo(
    () => ({
      constructedStateFields: fields
        ? fields.reduce((prevValue, field) => {
            prevValue[field.constructedValue] = '';
            return prevValue;
          }, {} as { [key: string]: any })
        : {},
      amountFormattedFields: fields
        ? fields
            .filter((field) => field.fieldType === 'amount')
            .reduce((prevValue, field) => {
              prevValue[field.constructedValue] = '';
              return prevValue;
            }, {} as { [key: string]: any })
        : {},
      autoCompleteResults: [],
    }),
    [fields],
  );

  const [constructedStateFields, setConstructedStateFields] =
    useState<IStateFields>(initialState.constructedStateFields);
  const [amountFormattedFields, setAmountFormattedFields] =
    useState<IStateFields>(initialState.amountFormattedFields);
  const [autoCompleteResults, setAutoCompleteResults] = useState<
    IAutoCompleteFieldResultState[]
  >(initialState.autoCompleteResults);

  const getAutoCompleteOptions = (constructedValue: string) => {
    const [field] = autoCompleteResults.filter(
      (result) => result.name === constructedValue,
    );
    if (field) {
      return field.options;
    } else {
      return [];
    }
  };

  useEffect(() => {
    if (fields) {
      const autoCompletefields = fields.filter(
        (field) => field.fieldType === 'autocomplete',
      );
      autoCompletefields.forEach(async (field) => {
        if (field.fieldType === 'autocomplete') {
          if (field.options.mode === 'local') {
            const { values } = field.options;
            setAutoCompleteResults((prevAutoCompleteResults) => [
              ...prevAutoCompleteResults,
              {
                name: field.constructedValue,
                options: values,
              },
            ]);
          }
          if (field.options.mode === 'api') {
            const { apiOptions } = field.options;
            try {
              const apiResult = await field.options.api.get(
                userToken,
                apiOptions
                  ? apiOptions
                  : {
                      options: {
                        filter: {},
                      },
                    },
              );
              setAutoCompleteResults((prevAutoCompleteResults) => [
                ...prevAutoCompleteResults,
                {
                  name: field.constructedValue,
                  options: apiResult.data.docs,
                },
              ]);
            } catch (e) {
              toast.error(String(e));
            }
          }
        }
      });
    }
  }, [fields, userToken]);

  const onConstructedStateFieldChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    e.preventDefault();
    const { name, value } = e.target;
    setConstructedStateFields({ ...constructedStateFields, [name]: value });
  };

  const onAutoCompleteValueChange = (
    e: React.SyntheticEvent,
    details: AutocompleteChangeDetails<{ [key: string]: any }> | undefined,
    fieldOptions: TAutoCompleteFieldsState,
  ) => {
    if (details !== undefined) {
      e.preventDefault();
      setConstructedStateFields({
        ...constructedStateFields,
        [fieldOptions.constructedValue]:
          details.option[fieldOptions.valueField],
      });
    }
  };

  const onAmountValueChange = (
    constructedValue: string,
    values: NumberFormatValues,
    sourceInfo: SourceInfo,
  ) => {
    sourceInfo.event?.preventDefault();
    const { formattedValue, floatValue } = values;
    setConstructedStateFields({
      ...constructedStateFields,
      [constructedValue]: floatValue,
    });
    setAmountFormattedFields({
      ...constructedStateFields,
      [constructedValue]: formattedValue,
    });
  };

  const getDateIdfromAPI = async (date: string) => {
    try {
      const dateResponse = await config.api.getDateId(userToken, {
        dateToFind: date,
      });
      const { dateId } = dateResponse.data;
      return dateId;
    } catch (e) {
      toast.error(String(e));
    }
  };

  const onDateValueChange = async (
    field: TInputFieldType,
    dateTime: DateTime,
  ) => {
    if (field.fieldType === 'date') {
      if (field.options.updateIdonOtherField.required) {
        const dateId = await getDateIdfromAPI(dateTime.toISODate());
        setConstructedStateFields({
          ...constructedStateFields,
          [field.constructedValue]: dateTime.toISODate(),
          [field.options.updateIdonOtherField.fieldName]: dateId,
        });
      } else {
        setConstructedStateFields({
          ...constructedStateFields,
          [field.constructedValue]: dateTime.toISODate(),
        });
      }
    }
  };

  const onMonthYearValueChange = async (
    field: TInputFieldType,
    dateTime: DateTime,
  ) => {
    if (field.fieldType === 'year/month') {
      const { dateFormatter } = field.options;
      setConstructedStateFields({
        ...constructedStateFields,
        [field.constructedValue]: dateTime.toFormat(dateFormatter),
      });
    }
  };

  const onSwitchValueChange = (
    field: TInputFieldType,
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setConstructedStateFields({
      ...constructedStateFields,
      [field.constructedValue]: e.target.checked ? 1 : 0,
    });
  };

  const cleanData = (state: IStateFields) => {
    const cleanedData: IStateFields = {};
    for (const [obj, vals] of Object.entries(state)) {
      if (vals !== '') {
        cleanedData[obj] = vals;
      }
    }
    return cleanedData;
  };

  const handleDataSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      if (e.currentTarget.reportValidity()) {
        const cleanedData = cleanData(constructedStateFields);
        const dataToSubmit = { docsToAdd: [cleanedData] };
        const submitResponse = await api.add(userToken, dataToSubmit);
        if (submitResponse.status === 201) {
          toast.success(
            `Succesfully Posted ${submitResponse.data.docs.length} number of Documents to Database`,
          );
          clearState();
        }
      }
    } catch (e) {
      toast.error(String(e));
    }
  };

  useEffect(() => {
    setConstructedStateFields(initialState.constructedStateFields);
    setAmountFormattedFields(initialState.amountFormattedFields);
    setAutoCompleteResults(initialState.autoCompleteResults);
  }, [location, initialState]);

  const clearState = () => {
    setConstructedStateFields(initialState.constructedStateFields);
    setAmountFormattedFields(initialState.amountFormattedFields);
    setAutoCompleteResults(initialState.autoCompleteResults);
  };

  const handleField = (field: TInputFieldType) => {
    switch (field.fieldType) {
      case 'text':
        return (
          <TextField
            {...field.baseProps}
            sx={{ width: '100%' }}
            name={field.constructedValue}
            value={constructedStateFields[field.constructedValue]}
            onChange={onConstructedStateFieldChange}
          />
        );
      case 'controlledText':
        return (
          <TextField
            {...field.baseProps}
            sx={{ width: '100%' }}
            disabled={true}
            InputLabelProps={{ shrink: true }}
            name={field.constructedValue}
            defaultValue={constructedStateFields[field.constructedValue]}
            key={constructedStateFields[field.constructedValue]}
          />
        );
      case 'autocomplete':
        return (
          <Autocomplete
            {...field.baseProps}
            sx={{ width: '100%' }}
            onChange={(
              e,
              value,
              reason,
              details:
                | AutocompleteChangeDetails<{ [key: string]: any }>
                | undefined,
            ) =>
              onAutoCompleteValueChange(e, details, {
                ...field.options,
                constructedValue: field.constructedValue,
              })
            }
            options={getAutoCompleteOptions(field.constructedValue)}
            renderInput={(params) => (
              <TextField {...field.textProps} {...params} />
            )}
          />
        );
      case 'amount':
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
            value={amountFormattedFields[field.constructedValue]}
            onValueChange={(v, s) =>
              onAmountValueChange(field.constructedValue, v, s)
            }
          />
        );
      case 'date':
        return (
          <DatePicker
            {...field.baseProps}
            value={constructedStateFields[field.constructedValue]}
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
      case 'year/month':
        return (
          <DatePicker
            {...field.baseProps}
            value={constructedStateFields[field.constructedValue]}
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
      case 'switch':
        return (
          <FormControlLabel
            {...field.baseProps}
            control={
              <Switch
                {...field.switchProps}
                name={field.constructedValue}
                value={
                  constructedStateFields[field.constructedValue] === '1'
                    ? true
                    : false
                }
                onChange={(e) => onSwitchValueChange(field, e)}
              />
            }
          />
        );
    }
  };

  return (
    <Grid
      sx={{
        display: 'flex',
        alignContent: 'center',
        justifyContent: 'center',
      }}
      xs={12}
      container
      columnSpacing={1}
    >
      <Box
        sx={{
          width: '99%',
          display: 'flex',
          flexWrap: 'wrap',
        }}
        component="form"
        onSubmit={handleDataSubmit}
      >
        <Grid
          xs={12}
          sx={{
            display: 'flex',
            alignContent: 'center',
            justifyContent: 'center',
          }}
        >
          <Typography variant="overline">
            Enter the following Details for adding data to {title}
          </Typography>
        </Grid>
        {fields && fields.length > 0 ? (
          fields.map((field, index) => {
            return (
              <Grid
                key={index}
                sx={{
                  display: 'flex',
                  alignContent: 'center',
                  justifyContent: 'center',
                }}
                xs={3}
              >
                {handleField(field)}
              </Grid>
            );
          })
        ) : (
          <Typography
            sx={{ fontWeight: 'bold', textAlign: 'center' }}
            variant="subtitle1"
          >
            No Fields to Render
          </Typography>
        )}
        <Grid xs={12} container>
          <Grid
            xs={6}
            sx={{
              display: 'flex',
              alignContent: 'center',
              justifyContent: 'right',
            }}
          >
            <Button variant="contained" type="submit">
              Submit
            </Button>
          </Grid>
          <Grid
            xs={6}
            sx={{
              display: 'flex',
              alignContent: 'center',
              justifyContent: 'left',
            }}
          >
            <Button variant="contained" type="reset" onClick={clearState}>
              Reset
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Grid>
  );
}
