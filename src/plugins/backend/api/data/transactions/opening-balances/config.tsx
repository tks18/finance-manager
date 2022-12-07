import { Box } from '@mui/material';
import { databaseHandlers } from '@plugins/backend/api/data/database-handlers';

// Types
import { IBaseDBApiConfig } from '@plugins/backend/api/data/types';
import { IBankMasterDocument } from '@plugins/backend/api/data/types';

export const openingBalanceTransactionConfig: IBaseDBApiConfig = {
  path: '/transactions/opening-balances',
  api: databaseHandlers.transactions.openingBalances,
  tableType: 'transaction',
  modelName: 'OpeningBalances',
  componentOptions: {
    title: 'Opening Balance Transactions',
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
        name: 'opening_balance',
        constructedValue: 'opening_balance',
        baseProps: {
          allowLeadingZeros: false,
          thousandsGroupStyle: 'thousand',
          thousandSeparator: ',',
          decimalSeparator: '.',
        },
        textProps: {
          label: 'Balance',
          required: true,
        },
      },
    ],
  },
};
