import { Box } from '@mui/material';
import { databaseHandlers } from '@plugins/backend/api/data/database-handlers';

// Types
import { IBaseDBApiConfig } from '@plugins/backend/api/data/types';
import {
  WithRequiredProperty,
  IExpenseMasterDocument,
  IBankMasterDocument,
  IAssetMasterDocument,
  IEMIMasterDocument,
  IInsuranceMasterDocument,
} from '@plugins/backend/api/data/types';

type TCustomExpenseMasterDocument = WithRequiredProperty<
  IExpenseMasterDocument,
  'expenseCategory'
>;

type TCustomEmiMasterDocument = WithRequiredProperty<
  IEMIMasterDocument,
  'creditCard'
>;

export const expenseTransactionConfig: IBaseDBApiConfig = {
  path: '/transactions/expenses',
  api: databaseHandlers.transactions.expenses,
  tableType: 'transaction',
  modelName: 'Expenses',
  componentOptions: {
    title: 'Expense Transactions',
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
          renderOption: (props, option: TCustomExpenseMasterDocument) => {
            return (
              <Box component="li" {...props} key={option._id}>
                {option._id}. {option.name} - {option.expenseCategory.category}
              </Box>
            );
          },
          getOptionLabel: (option: TCustomExpenseMasterDocument) => {
            return option.name;
          },
          isOptionEqualToValue: (
            option: TCustomExpenseMasterDocument,
            value: number,
          ) => {
            return option._id === value;
          },
        },
        textProps: {
          label: 'Expense Master ID',
          required: true,
        },
        options: {
          mode: 'api',
          api: databaseHandlers.masters.expenses.master,
          apiOptions: {
            options: {
              include: ['masterTables.expenses.master.category'],
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
            return `${option.name} - ${option.account_type}`;
          },
          isOptionEqualToValue: (
            option: IBankMasterDocument,
            value: number,
          ) => {
            return option._id === value;
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
        fieldType: 'autocomplete',
        name: 'asset_id',
        constructedValue: 'asset_id',
        baseProps: {
          renderOption: (props, option: IAssetMasterDocument) => {
            return (
              <Box component="li" {...props} key={option._id}>
                {option._id}. {option.name}
              </Box>
            );
          },
          getOptionLabel: (option: IAssetMasterDocument) => {
            return option.name;
          },
          isOptionEqualToValue: (
            option: IAssetMasterDocument,
            value: number,
          ) => {
            return option._id === value;
          },
        },
        textProps: {
          label: 'Asset ID (if any)',
          required: false,
        },
        options: {
          mode: 'api',
          api: databaseHandlers.masters.assets.master,
          valueField: '_id',
        },
      },
      {
        fieldType: 'autocomplete',
        name: 'emi_id',
        constructedValue: 'emi_id',
        baseProps: {
          renderOption: (props, option: TCustomEmiMasterDocument) => {
            return (
              <Box component="li" {...props} key={option._id}>
                {option._id}. {option.creditCard.card_name} -{' '}
                {option.emi_start_date} - {option.emi_amount}
              </Box>
            );
          },
          getOptionLabel: (option: TCustomEmiMasterDocument) => {
            return option.creditCard.card_name;
          },
          isOptionEqualToValue: (
            option: TCustomEmiMasterDocument,
            value: number,
          ) => {
            return option._id === value;
          },
        },
        textProps: {
          label: 'EMI ID (if any)',
          required: false,
        },
        options: {
          mode: 'api',
          api: databaseHandlers.masters.emi,
          apiOptions: {
            options: {
              include: ['masterTables.others.emi.creditCard'],
            },
          },
          valueField: '_id',
        },
      },
      {
        fieldType: 'autocomplete',
        name: 'insurance_id',
        constructedValue: 'insurance_id',
        baseProps: {
          renderOption: (props, option: IInsuranceMasterDocument) => {
            return (
              <Box component="li" {...props} key={option._id}>
                {option._id}. {option.name} - {option.type}
              </Box>
            );
          },
          getOptionLabel: (option: IInsuranceMasterDocument) => {
            return option.name;
          },
          isOptionEqualToValue: (
            option: IInsuranceMasterDocument,
            value: number,
          ) => {
            return option._id === value;
          },
        },
        textProps: {
          label: 'Insurance ID (if any)',
          required: false,
        },
        options: {
          mode: 'api',
          api: databaseHandlers.masters.insurances,
          valueField: '_id',
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
