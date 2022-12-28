import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Autocomplete, TextField } from '@mui/material';
import { toast } from 'react-toastify';

import type {
  AutocompleteProps,
  AutocompleteChangeDetails,
} from '@mui/material';
import type { Dispatch, SetStateAction } from 'react';
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
  autoCompleteInputFields: {
    state: {
      [key: string]: any;
    };
    set: Dispatch<
      SetStateAction<{
        [key: string]: any;
      }>
    >;
  };
  autoCompleteFieldOptions: {
    state: {
      [key: string]: {
        [key: string]: any;
      } | null;
    };
    set: Dispatch<
      SetStateAction<{
        [key: string]: {
          [key: string]: any;
        } | null;
      }>
    >;
  };
};

interface IAutoCompleteFieldResultState {
  name: string;
  options: { [key: string]: any }[];
}

export function CustomAutoCompleteField(props: TAutoCompleteProps) {
  const {
    userToken,
    field,
    fields,
    autoCompleteInputFields,
    autoCompleteFieldOptions,
  } = props;
  const location = useLocation();

  const [autoCompleteApiResult, setAutoCompleteApiResult] =
    useState<IAutoCompleteFieldResultState | null>(null);

  useEffect(() => {
    if (field.options.mode === 'api') {
      const { apiOptions } = field.options;
      const defaultApiOptions = {
        options: {
          filter: {},
          order: [['_id', 'ASC']],
        },
      };
      const inputOptions = apiOptions
        ? {
            options: {
              ...apiOptions.options,
              ...defaultApiOptions.options,
              filter: apiOptions.options.filter
                ? {
                    ...apiOptions.options.filter,
                    ...defaultApiOptions.options.filter,
                  }
                : defaultApiOptions.options.filter,
              order: apiOptions.options.order
                ? [
                    ...apiOptions.options.order,
                    ...defaultApiOptions.options.order,
                  ]
                : defaultApiOptions.options.order,
            },
          }
        : defaultApiOptions;
      try {
        field.options.api
          .get(userToken, inputOptions)
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
      fields.set({
        ...fields.state,
        [fieldOptions.constructedValue]:
          details.option[fieldOptions.valueField],
      });
      autoCompleteFieldOptions.set({
        ...autoCompleteFieldOptions.state,
        [fieldOptions.constructedValue]: details.option,
      });
    }
  };

  const onAutoCompleteInputChange = (
    event: React.SyntheticEvent<Element, Event>,
    value: string,
    fieldOptions: TAutoCompleteFieldsState,
  ) => {
    autoCompleteInputFields.set({
      ...autoCompleteInputFields.state,
      [fieldOptions.constructedValue]: value,
    });
  };

  useEffect(() => {
    setAutoCompleteApiResult(null);
  }, [location]);

  const isStateUndefined =
    fields.state[field.constructedValue] === undefined &&
    autoCompleteInputFields.state[field.constructedValue] === undefined &&
    autoCompleteFieldOptions.state[field.constructedValue] === undefined;

  if (field.options.mode === 'api') {
    return isStateUndefined ? (
      <></>
    ) : (
      <Autocomplete
        {...field.baseProps}
        sx={{ width: '100%' }}
        value={autoCompleteFieldOptions.state[field.constructedValue]}
        inputValue={autoCompleteInputFields.state[field.constructedValue]}
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
        onInputChange={(e, value) =>
          onAutoCompleteInputChange(e, value, {
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
    return isStateUndefined ? (
      <></>
    ) : (
      <Autocomplete
        {...field.baseProps}
        sx={{ width: '100%' }}
        value={autoCompleteFieldOptions.state[field.constructedValue]}
        inputValue={autoCompleteInputFields.state[field.constructedValue]}
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
        onInputChange={(e, value) =>
          onAutoCompleteInputChange(e, value, {
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
