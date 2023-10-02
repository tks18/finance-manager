import { useState, useEffect, useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import { Typography, Unstable_Grid2 as Grid, Box, Button } from '@mui/material';
import { HandleFieldType } from './handlers';
import { cleanData } from './helpers';
import { toast } from 'react-toastify';

//Types
import type { PropsWithChildren, FormEvent } from 'react';
import type { TInputFieldType } from '@plugins/backend/api/data/inputs';
import type { IBaseDBApiConfig } from '@plugins/backend/types';

interface IStateFields {
  [key: string]: any;
}

interface IAmountState {
  [key: string]: number;
}

interface ICurrentAutoCompleteOptionSelected {
  [key: string]: IStateFields | null;
}

interface IBuildDBApiInputForm extends PropsWithChildren {
  userToken: string;
  config: IBaseDBApiConfig;
}

export function BuildDBApiInputForm(props: IBuildDBApiInputForm) {
  const { userToken, config } = props;
  const location = useLocation();
  const {
    componentOptions: { fields, title, excludeResetFields },
    api,
  } = config;

  const initialState = useMemo(
    () => ({
      constructedStateFields: fields
        ? fields
            .filter((field) => field.fieldType !== 'helper')
            .reduce(
              (prevValue, field) => {
                if (field.fieldType === 'switch') {
                  prevValue[field.constructedValue] = 0;
                } else {
                  prevValue[field.constructedValue] = '';
                }
                return prevValue;
              },
              {} as { [key: string]: any },
            )
        : {},
      operationalAmountFields: fields
        ? fields
            .filter((field) =>
              ['amount', 'helper', 'controlledAmount'].includes(
                field.fieldType,
              ),
            )
            .reduce(
              (prevValue, field) => {
                prevValue[field.constructedValue] = 0;
                return prevValue;
              },
              {} as { [key: string]: number },
            )
        : {},
      amountFormattedFields: fields
        ? fields
            .filter((field) => field.fieldType === 'amount')
            .reduce(
              (prevValue, field) => {
                prevValue[field.constructedValue] = '';
                return prevValue;
              },
              {} as { [key: string]: any },
            )
        : {},
      dateRenderFields: fields
        ? fields
            .filter((field) => field.fieldType === 'date')
            .reduce(
              (prevValue, field) => {
                prevValue[field.constructedValue] = '';
                return prevValue;
              },
              {} as { [key: string]: any },
            )
        : {},
      autoCompleteFieldsInput: fields
        ? fields
            .filter((field) => field.fieldType === 'autocomplete')
            .reduce(
              (prevValue, field) => {
                prevValue[field.constructedValue] = '';
                return prevValue;
              },
              {} as { [key: string]: any },
            )
        : {},
      currentAutoCompleteOptionSelected: fields
        ? fields
            .filter((field) => field.fieldType === 'autocomplete')
            .reduce(
              (prevValue, field) => {
                prevValue[field.constructedValue] = null;
                return prevValue;
              },
              {} as { [key: string]: any },
            )
        : {},
    }),
    [fields],
  );

  const resetState = useMemo(
    () => ({
      constructedStateFields: excludeResetFields
        ? fields
          ? fields
              .filter((field) => field.fieldType !== 'helper')
              .filter((field) => {
                return !excludeResetFields.includes(field.constructedValue);
              })
              .reduce(
                (prevValue, field) => {
                  if (field.fieldType === 'switch') {
                    prevValue[field.constructedValue] = 0;
                  } else {
                    prevValue[field.constructedValue] = '';
                  }
                  return prevValue;
                },
                {} as { [key: string]: any },
              )
          : {}
        : initialState.constructedStateFields,
      dateRenderFields: excludeResetFields
        ? fields
          ? fields
              .filter((field) => field.fieldType === 'date')
              .filter(
                (field) => !excludeResetFields.includes(field.constructedValue),
              )
              .reduce(
                (prevValue, field) => {
                  prevValue[field.constructedValue] = '';
                  return prevValue;
                },
                {} as { [key: string]: any },
              )
          : {}
        : initialState.dateRenderFields,
      operationalAmountFields: excludeResetFields
        ? fields
          ? fields
              .filter((field) =>
                ['amount', 'helper', 'controlledAmount'].includes(
                  field.fieldType,
                ),
              )
              .filter(
                (field) => !excludeResetFields.includes(field.constructedValue),
              )
              .reduce(
                (prevValue, field) => {
                  prevValue[field.constructedValue] = 0;
                  return prevValue;
                },
                {} as { [key: string]: number },
              )
          : {}
        : initialState.operationalAmountFields,
      amountFormattedFields: excludeResetFields
        ? fields
          ? fields
              .filter((field) => field.fieldType === 'amount')
              .filter(
                (field) => !excludeResetFields.includes(field.constructedValue),
              )
              .reduce(
                (prevValue, field) => {
                  prevValue[field.constructedValue] = '';
                  return prevValue;
                },
                {} as { [key: string]: any },
              )
          : {}
        : initialState.amountFormattedFields,
      autoCompleteFieldsInput: excludeResetFields
        ? fields
          ? fields
              .filter((field) => field.fieldType === 'autocomplete')
              .filter(
                (field) => !excludeResetFields.includes(field.constructedValue),
              )
              .reduce(
                (prevValue, field) => {
                  prevValue[field.constructedValue] = '';
                  return prevValue;
                },
                {} as { [key: string]: any },
              )
          : {}
        : initialState.autoCompleteFieldsInput,
      currentAutoCompleteOptionSelected: excludeResetFields
        ? fields
          ? fields
              .filter((field) => field.fieldType === 'autocomplete')
              .filter(
                (field) => !excludeResetFields.includes(field.constructedValue),
              )
              .reduce(
                (prevValue, field) => {
                  prevValue[field.constructedValue] = null;
                  return prevValue;
                },
                {} as { [key: string]: any },
              )
          : {}
        : initialState.currentAutoCompleteOptionSelected,
    }),
    [initialState, fields, excludeResetFields],
  );

  const [constructedStateFields, setConstructedStateFields] =
    useState<IStateFields>(initialState.constructedStateFields);
  const [dateRenderFields, setDateRenderFields] = useState<IStateFields>(
    initialState.dateRenderFields,
  );
  const [amountFormattedFields, setAmountFormattedFields] =
    useState<IStateFields>(initialState.amountFormattedFields);
  const [operationalAmountFields, setOperationalAmountFields] =
    useState<IAmountState>(initialState.operationalAmountFields);
  const [autoCompleteFieldsInput, setAutoCompleteFieldsInput] =
    useState<IStateFields>(initialState.autoCompleteFieldsInput);
  const [
    currentAutoCompleteOptionSelected,
    setCurrentAutoCompleteOptionSelected,
  ] = useState<ICurrentAutoCompleteOptionSelected>(
    initialState.currentAutoCompleteOptionSelected,
  );

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

  const clearState = () => {
    setConstructedStateFields((state) => ({
      ...state,
      ...resetState.constructedStateFields,
    }));
    setDateRenderFields((state) => ({
      ...state,
      ...resetState.dateRenderFields,
    }));
    setAutoCompleteFieldsInput((state) => ({
      ...state,
      ...resetState.autoCompleteFieldsInput,
    }));
    setAmountFormattedFields((state) => ({
      ...state,
      ...resetState.amountFormattedFields,
    }));
    setCurrentAutoCompleteOptionSelected((state) => ({
      ...state,
      ...resetState.currentAutoCompleteOptionSelected,
    }));
  };

  const handleDataSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      if (e.currentTarget.reportValidity()) {
        const cleanedData = cleanData<IStateFields>(constructedStateFields);
        const dataToSubmit = {
          docsToAdd: [cleanedData],
        };
        const submitResponse = await api.add(userToken, dataToSubmit);
        if (submitResponse.status === 201) {
          let ids: string = '';
          submitResponse.data.docs.forEach((doc, index) => {
            if (index === 0) {
              ids += `${doc._id}`;
            } else {
              ids += `, ${doc._id}`;
            }
          });
          toast.success(
            `Succesfully Posted ${submitResponse.data.docs.length} number of Documents with ID's: ${ids} to Database`,
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
    setDateRenderFields(initialState.dateRenderFields);
    setAutoCompleteFieldsInput(initialState.autoCompleteFieldsInput);
    setAmountFormattedFields(initialState.amountFormattedFields);
    setCurrentAutoCompleteOptionSelected(
      initialState.currentAutoCompleteOptionSelected,
    );
  }, [location, initialState]);

  const HandleField = (field: TInputFieldType) => (
    <HandleFieldType
      userToken={userToken}
      field={field}
      fields={{
        state: constructedStateFields,
        set: setConstructedStateFields,
      }}
      dateRenderFields={{
        state: dateRenderFields,
        set: setDateRenderFields,
      }}
      autoCompleteInputFields={{
        state: autoCompleteFieldsInput,
        set: setAutoCompleteFieldsInput,
      }}
      amountFields={{
        state: amountFormattedFields,
        set: setAmountFormattedFields,
      }}
      operationalAmounts={{
        state: operationalAmountFields,
        set: setOperationalAmountFields,
      }}
      autoCompleteFieldOptions={{
        state: currentAutoCompleteOptionSelected,
        set: setCurrentAutoCompleteOptionSelected,
      }}
      getDateIdfromAPI={getDateIdfromAPI}
    />
  );

  return (
    <Grid
      sx={{
        display: 'flex',
        alignContent: 'center',
        justifyContent: 'center',
        flexWrap: 'wrap',
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
          fields
            .filter((field) => field.fieldType !== 'helper')
            .map((field, index) => {
              return (
                <Grid
                  key={index}
                  sx={{
                    display: 'flex',
                    alignContent: 'center',
                    justifyContent: 'center',
                    px: 1,
                    py: 1,
                  }}
                  xs={3}
                >
                  {HandleField(field)}
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
        <Grid
          xs={12}
          container
          sx={{
            my: 2,
          }}
        >
          <Grid
            xs={6}
            sx={{
              display: 'flex',
              alignContent: 'center',
              justifyContent: 'right',
              px: 1,
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
              px: 1,
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
