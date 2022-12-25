import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Autocomplete, TextField } from '@mui/material';
import { toast } from 'react-toastify';

import type {
  AutocompleteProps,
  AutocompleteChangeDetails,
} from '@mui/material';
import type {
  IFieldBaseProps,
  TFieldAutocomplete,
  TFieldAutoCompleteOptions,
} from '@plugins/backend/api/data/inputs';

type TAutoCompleteFieldsState = TFieldAutoCompleteOptions<
  { [key: string]: any },
  { [key: string]: any }
> & {
  constructedValue: string;
};

type TCustomAutocomplete = IFieldBaseProps &
  TFieldAutocomplete<{ [key: string]: any }, { [key: string]: any }>;

type TAutoCompleteProps = Omit<
  AutocompleteProps<any, undefined, undefined, undefined>,
  'renderInput' | 'options'
> & {
  userToken: string;
  field: TCustomAutocomplete;
  fieldsState: { [key: string]: any };
  setFieldsState: React.Dispatch<
    React.SetStateAction<{
      [key: string]: any;
    }>
  >;
};

interface IAutoCompleteFieldResultState {
  name: string;
  options: { [key: string]: any }[];
}

export function CustomAutoCompleteField(props: TAutoCompleteProps) {
  const { userToken, field, fieldsState, setFieldsState } = props;
  const location = useLocation();

  const [autoCompleteApiResult, setAutoCompleteApiResult] =
    useState<IAutoCompleteFieldResultState | null>(null);

  useEffect(() => {
    if (field.options.mode === 'api') {
      const { apiOptions } = field.options;
      try {
        field.options.api
          .get(
            userToken,
            apiOptions
              ? apiOptions
              : {
                  options: {
                    filter: {},
                  },
                },
          )
          .then((apiResult) => {
            setAutoCompleteApiResult({
              name: field.constructedValue,
              options: apiResult.data.docs,
            });
          })
          .catch((e) => {
            toast.error(String(e));
          });
      } catch (e) {
        toast.error(String(e));
      }
    }
  }, [field, userToken]);

  const onAutoCompleteValueChange = (
    e: React.SyntheticEvent,
    details: AutocompleteChangeDetails<{ [key: string]: any }> | undefined,
    fieldOptions: TAutoCompleteFieldsState,
  ) => {
    if (details !== undefined) {
      e.preventDefault();
      setFieldsState({
        ...fieldsState,
        [fieldOptions.constructedValue]:
          details.option[fieldOptions.valueField],
      });
    }
  };

  useEffect(() => {
    setAutoCompleteApiResult(null);
  }, [location]);

  if (field.options.mode === 'api') {
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
        options={
          autoCompleteApiResult !== null ? autoCompleteApiResult.options : []
        }
        renderInput={(params) => <TextField {...field.textProps} {...params} />}
      />
    );
  } else {
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
        options={field.options.values}
        renderInput={(params) => <TextField {...field.textProps} {...params} />}
      />
    );
  }
}
