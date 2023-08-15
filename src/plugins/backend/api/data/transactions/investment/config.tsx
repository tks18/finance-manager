import { Box } from '@mui/material';
import { CurrencyRupee as CurrencyRupeeIcon } from '@mui/icons-material';
import { apiHandlers } from '@plugins/backend/api/data/api-handlers';

// Types
import { IBaseDBApiConfig } from '@plugins/backend/api/data/types';
import {
  IInvestmentMasterDocument,
  IBankMasterDocument,
  IInvestmentAgentMasterDocument,
} from '@plugins/backend/api/data/types';

export const investmentTransactionConfig: IBaseDBApiConfig = {
  path: '/transactions/investments',
  api: apiHandlers.transactions.investments,
  tableType: 'transaction',
  modelName: 'Investments',
  componentOptions: {
    title: 'Investment Transactions',
    excludeResetFields: ['date_id', 'date', 'master_id', 'bank_id', 'agent_id'],
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
          format: 'dd-LL-yyyy',
          disableFuture: true,
          disablePast: false,
        },
        textProps: {
          label: 'Date',
          required: true,
        },
        options: {
          dateFormatter: 'dd-LL-yyyy',
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
          api: apiHandlers.masters.investments.master,
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
        name: 'agent_id',
        constructedValue: 'agent_id',
        baseProps: {
          renderOption: (props, option: IInvestmentAgentMasterDocument) => {
            return (
              <Box component="li" {...props} key={option._id}>
                {option._id}. {option.name}({option.company_name})
              </Box>
            );
          },
          getOptionLabel: (option: IInvestmentAgentMasterDocument) => {
            return option.name;
          },
          isOptionEqualToValue: (
            option: IInvestmentAgentMasterDocument,
            value: IInvestmentAgentMasterDocument,
          ) => {
            return option._id === value._id;
          },
        },
        textProps: {
          label: 'Agent ID',
          required: true,
        },
        options: {
          mode: 'api',
          api: apiHandlers.masters.investments.agents,
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
        fieldType: 'helper',
        name: 'costHelper',
        constructedValue: 'costHelper',
      },
      {
        fieldType: 'helper',
        name: 'unitsHelper',
        constructedValue: 'unitsHelper',
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
        startIcon: <CurrencyRupeeIcon />,
        affectsCalculatedField: {
          operations: [
            {
              field1: 'cost',
              field2: 'units',
              operation: 'multiply',
              affectedField: 'amount',
              affectedFieldType: 'stateField',
            },
          ],
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
        startIcon: <CurrencyRupeeIcon />,
        affectsCalculatedField: {
          operations: [
            {
              field1: 'cost',
              field2: 'units',
              operation: 'multiply',
              affectedField: 'amount',
              affectedFieldType: 'stateField',
            },
          ],
        },
      },
      {
        fieldType: 'controlledAmount',
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
        startIcon: <CurrencyRupeeIcon />,
      },
    ],
  },
};
