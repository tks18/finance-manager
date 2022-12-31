import { Box } from '@mui/material';
import { CurrencyRupee as CurrencyRupeeIcon } from '@mui/icons-material';
import { apiHandlers } from '@plugins/backend/api/data/api-handlers';

// Types
import { IBaseDBApiConfig } from '@plugins/backend/api/data/types';
import {
  WithRequiredProperty,
  IIncomeMasterDocument,
  IBankMasterDocument,
  IInvestmentMasterDocument,
} from '@plugins/backend/api/data/types';

type TCustomIncomeMasterDocument = WithRequiredProperty<
  IIncomeMasterDocument,
  'incomeCategory'
>;

export const incomeTransactionConfig: IBaseDBApiConfig = {
  path: '/transactions/incomes',
  api: apiHandlers.transactions.incomes,
  tableType: 'transaction',
  modelName: 'Incomes',
  componentOptions: {
    title: 'Income Transactions',
    excludeResetFields: ['date_id', 'date', 'master_id', 'bank_id'],
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
          renderOption: (props, option: TCustomIncomeMasterDocument) => {
            return (
              <Box component="li" {...props} key={option._id}>
                {option._id}. {option.name} - {option.incomeCategory.category}
              </Box>
            );
          },
          getOptionLabel: (option: TCustomIncomeMasterDocument) => {
            return option.name;
          },
          isOptionEqualToValue: (
            option: TCustomIncomeMasterDocument,
            value: TCustomIncomeMasterDocument,
          ) => {
            return option._id === value._id;
          },
        },
        textProps: {
          label: 'Income Master ID',
          required: true,
        },
        options: {
          mode: 'api',
          api: apiHandlers.masters.incomes.master,
          apiOptions: {
            options: {
              include: ['masterTables.incomes.master.category'],
            },
          },
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
          api: apiHandlers.masters.banks,
          valueField: '_id',
        },
      },
      {
        fieldType: 'autocomplete',
        name: 'investment_id',
        constructedValue: 'investment_id',
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
          label: 'Investment ID (if any)',
          required: false,
        },
        options: {
          mode: 'api',
          api: apiHandlers.masters.investments.master,
          valueField: '_id',
        },
      },
      {
        fieldType: 'text',
        name: 'remarks',
        constructedValue: 'remarks',
        baseProps: {
          label: 'Transaction Remarks',
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
        startIcon: <CurrencyRupeeIcon />,
      },
      {
        fieldType: 'amount',
        name: 'taxable_amount',
        constructedValue: 'taxable_amount',
        baseProps: {
          allowLeadingZeros: false,
          thousandsGroupStyle: 'thousand',
          thousandSeparator: ',',
          decimalSeparator: '.',
        },
        textProps: {
          label: 'Taxable Amount',
          required: true,
        },
        startIcon: <CurrencyRupeeIcon />,
      },
    ],
  },
};
