import { Box } from '@mui/material';
import { databaseHandlers } from '@plugins/backend/api/data/database-handlers';

// Types
import { IBaseDBApiConfig } from '@plugins/backend/api/data/types';
import {
  IInvestmentMasterDocument,
  IBankMasterDocument,
} from '@plugins/backend/api/data/types';

export const investmentTransactionConfig: IBaseDBApiConfig = {
  path: '/transactions/investments',
  api: databaseHandlers.transactions.investments,
  tableType: 'transaction',
  modelName: 'Investments',
  componentOptions: {
    title: 'Investment Transactions',
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
        fieldType: 'autocomplete',
        name: 'bank_id',
        constructedValue: 'bank_id',
        baseProps: {
          renderOption: (props, option: IBankMasterDocument) => {
            return (
              <Box component="li" {...props} key={option._id}>
                {option._id}. {option.name} - {option.account_type}
              </Box>
            );
          },
          getOptionLabel: (option: IBankMasterDocument) => {
            return option.name;
          },
          isOptionEqualToValue: (
            option: IBankMasterDocument,
            value: IBankMasterDocument,
          ) => {
            return option._id === value._id;
          },
        },
        textProps: {
          label: 'Bank ID',
          required: true,
        },
        options: {
          mode: 'api',
          api: databaseHandlers.masters.banks,
          valueField: '_id',
        },
      },
      {
        fieldType: 'amount',
        name: 'cost',
        constructedValue: 'cost',
        baseProps: {
          allowLeadingZeros: false,
          thousandsGroupStyle: 'thousand',
          thousandSeparator: ',',
          decimalSeparator: '.',
        },
        textProps: {
          label: 'Cost',
          required: true,
        },
      },
      {
        fieldType: 'amount',
        name: 'units',
        constructedValue: 'units',
        baseProps: {
          allowLeadingZeros: false,
          thousandsGroupStyle: 'thousand',
          thousandSeparator: ',',
          decimalSeparator: '.',
        },
        textProps: {
          label: 'Units',
          required: true,
        },
      },
      {
        fieldType: 'amount',
        name: 'amount',
        constructedValue: 'amount',
        baseProps: {
          allowLeadingZeros: false,
          thousandsGroupStyle: 'thousand',
          thousandSeparator: ',',
          decimalSeparator: '.',
        },
        textProps: {
          label: 'Amount',
          required: true,
        },
      },
      {
        fieldType: 'amount',
        name: 'tax_allowable_amount',
        constructedValue: 'tax_allowable_amount',
        baseProps: {
          allowLeadingZeros: false,
          thousandsGroupStyle: 'thousand',
          thousandSeparator: ',',
          decimalSeparator: '.',
        },
        textProps: {
          label: 'Tax Allowable Amount',
          required: true,
        },
      },
    ],
  },
};
