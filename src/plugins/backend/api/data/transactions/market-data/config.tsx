import { Box } from '@mui/material';
import { databaseHandlers } from '@plugins/backend/api/data/database-handlers';

// Types
import { IBaseDBApiConfig } from '@plugins/backend/api/data/types';
import { IInvestmentMasterDocument } from '@plugins/backend/api/data/types';

export const marketDataTransactionConfig: IBaseDBApiConfig = {
  path: '/transactions/market-data',
  api: databaseHandlers.transactions.marketData,
  tableType: 'transaction',
  modelName: 'MarketData',
  componentOptions: {
    title: 'Investment Market Data',
    fields: [
      {
        fieldType: 'controlledText',
        name: 'date_id',
        constructedValue: 'date_id',
        baseProps: {
          label: 'Date ID',
          required: true,
        },
      },
      {
        fieldType: 'date',
        name: 'date',
        constructedValue: 'date',
        baseProps: {
          inputFormat: 'yyyy-LL-dd',
          mask: '____-__-__',
        },
        textProps: {
          label: 'Date',
          required: true,
        },
        options: {
          dateFormatter: 'yyyy-LL-dd',
          updateIdonOtherField: {
            required: true,
            fieldName: 'date_id',
          },
        },
      },
      {
        fieldType: 'autocomplete',
        name: 'master_id',
        constructedValue: 'master_id',
        baseProps: {
          renderOption: (props, option: IInvestmentMasterDocument) => {
            return (
              <Box component="li" {...props} key={option._id}>
                {option._id}. {option.name}
              </Box>
            );
          },
          getOptionLabel: (option: IInvestmentMasterDocument) => {
            return option.name;
          },
          isOptionEqualToValue: (
            option: IInvestmentMasterDocument,
            value: IInvestmentMasterDocument,
          ) => {
            return option._id === value._id;
          },
        },
        textProps: {
          label: 'Investment Master ID',
          required: true,
        },
        options: {
          mode: 'api',
          api: databaseHandlers.masters.investments.master,
          valueField: '_id',
        },
      },
      {
        fieldType: 'amount',
        name: 'open',
        constructedValue: 'open',
        baseProps: {
          allowLeadingZeros: false,
          thousandsGroupStyle: 'thousand',
          thousandSeparator: ',',
          decimalSeparator: '.',
        },
        textProps: {
          label: 'Open Price',
          required: true,
        },
      },
      {
        fieldType: 'amount',
        name: 'high',
        constructedValue: 'high',
        baseProps: {
          allowLeadingZeros: false,
          thousandsGroupStyle: 'thousand',
          thousandSeparator: ',',
          decimalSeparator: '.',
        },
        textProps: {
          label: 'High Price',
          required: true,
        },
      },
      {
        fieldType: 'amount',
        name: 'low',
        constructedValue: 'low',
        baseProps: {
          allowLeadingZeros: false,
          thousandsGroupStyle: 'thousand',
          thousandSeparator: ',',
          decimalSeparator: '.',
        },
        textProps: {
          label: 'Low Price',
          required: true,
        },
      },
      {
        fieldType: 'amount',
        name: 'close',
        constructedValue: 'close',
        baseProps: {
          allowLeadingZeros: false,
          thousandsGroupStyle: 'thousand',
          thousandSeparator: ',',
          decimalSeparator: '.',
        },
        textProps: {
          label: 'Close Price',
          required: true,
        },
      },
      {
        fieldType: 'amount',
        name: 'adj_close',
        constructedValue: 'adj_close',
        baseProps: {
          allowLeadingZeros: false,
          thousandsGroupStyle: 'thousand',
          thousandSeparator: ',',
          decimalSeparator: '.',
        },
        textProps: {
          label: 'Adjusted Close Price',
          required: true,
        },
      },
      {
        fieldType: 'amount',
        name: 'volume',
        constructedValue: 'volume',
        baseProps: {
          allowLeadingZeros: false,
          thousandsGroupStyle: 'thousand',
          thousandSeparator: ',',
          decimalSeparator: '.',
        },
        textProps: {
          label: 'Trade Volume',
          required: true,
        },
      },
    ],
  },
};
