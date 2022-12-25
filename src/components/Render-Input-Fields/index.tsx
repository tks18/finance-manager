import { useState, useEffect, useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import { Typography, Unstable_Grid2 as Grid, Box, Button } from '@mui/material';
import { HandleFieldType } from './handlers';
import { cleanData } from './helpers';
import { toast } from 'react-toastify';

//Types
import { PropsWithChildren, FormEvent } from 'react';
import type { TInputFieldType } from '@plugins/backend/api/data/inputs';
import type { IBaseDBApiConfig } from '@plugins/backend/types';

interface IStateFields {
  [key: string]: any;
}

interface IRenderModelInputFieldsProps extends PropsWithChildren {
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
            if (field.fieldType === 'switch') {
              prevValue[field.constructedValue] = 0;
            } else {
              prevValue[field.constructedValue] = '';
            }
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
    }),
    [fields],
  );

  const [constructedStateFields, setConstructedStateFields] =
    useState<IStateFields>(initialState.constructedStateFields);
  const [amountFormattedFields, setAmountFormattedFields] =
    useState<IStateFields>(initialState.amountFormattedFields);

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

  const handleDataSubmit = async (e: FormEvent<HTMLFormElement>) => {
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
  }, [location, initialState]);

  const clearState = () => {
    setConstructedStateFields(initialState.constructedStateFields);
    setAmountFormattedFields(initialState.amountFormattedFields);
  };

  const HandleField = (field: TInputFieldType) => (
    <HandleFieldType
      userToken={userToken}
      field={field}
      fieldsState={constructedStateFields}
      setFieldsState={setConstructedStateFields}
      amountFieldsState={amountFormattedFields}
      setAmountFieldsState={setAmountFormattedFields}
      getDateIdfromAPI={getDateIdfromAPI}
    />
  );

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
      <Grid
        xs={12}
        sx={{
          width: '99%',
          display: 'flex',
          flexWrap: 'wrap',
        }}
      ></Grid>
    </Grid>
  );
}
