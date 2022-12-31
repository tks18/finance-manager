import { Box } from '@mui/material';
import { apiHandlers } from '@plugins/backend/api/data/api-handlers';

// Types
import { IBaseDBApiConfig } from '@plugins/backend/api/data/types';

export const bankConfig: IBaseDBApiConfig = {
  path: '/masters/banks',
  api: apiHandlers.masters.banks,
  tableType: 'master',
  modelName: 'BankMaster',
  componentOptions: {
    title: 'Bank Masters',
    fields: [
      {
        fieldType: 'text',
        name: 'name',
        constructedValue: 'name',
        baseProps: {
          label: 'Name of Bank',
          required: true,
        },
      },
      {
        fieldType: 'text',
        name: 'bank_branch',
        constructedValue: 'bank_branch',
        baseProps: {
          label: 'Bank Branch',
          required: true,
        },
      },
      {
        fieldType: 'autocomplete',
        name: 'account_type',
        constructedValue: 'account_type',
        baseProps: {
          renderOption: (props, option: { _id: number; value: string }) => {
            return (
              <Box component="li" {...props} key={option._id}>
                {option._id}. {option.value}
              </Box>
            );
          },
          getOptionLabel: (option: { _id: number; value: string }) => {
            return option.value;
          },
          isOptionEqualToValue: (
            option: { _id: number; value: string },
            value: { _id: number; value: string },
          ) => {
            return option._id === value._id;
          },
        },
        textProps: {
          label: 'Account Type',
          required: true,
        },
        options: {
          mode: 'local',
          values: [
            {
              _id: 1,
              value: 'Current',
            },
            {
              _id: 2,
              value: 'Savings',
            },
            {
              _id: 3,
              value: 'Salary',
            },
            {
              _id: 4,
              value: 'Credit Card',
            },
            {
              _id: 5,
              value: 'Other',
            },
          ],
          valueField: 'value',
        },
      },
      {
        fieldType: 'text',
        name: 'account_no',
        constructedValue: 'account_no',
        baseProps: {
          label: 'Account Number',
          required: true,
        },
      },
      {
        fieldType: 'text',
        name: 'customer_id',
        constructedValue: 'customer_id',
        baseProps: {
          label: 'Customer ID',
          required: true,
        },
      },
      {
        fieldType: 'text',
        name: 'ifsc_code',
        constructedValue: 'ifsc_code',
        baseProps: {
          label: 'IFSC Code',
          required: true,
        },
      },
      {
        fieldType: 'text',
        name: 'netbanking_username',
        constructedValue: 'netbanking_username',
        baseProps: {
          label: 'Netbanking Username',
          required: true,
        },
      },
    ],
  },
};
