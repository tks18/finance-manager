import { Box } from '@mui/material';
import { CurrencyRupee as CurrencyRupeeIcon } from '@mui/icons-material';
import { apiHandlers } from '@plugins/backend/api/data/api-handlers';

// Types
import { IBaseDBApiConfig } from '@plugins/backend/api/data/types';

export const insuranceConfig: IBaseDBApiConfig = {
  path: '/masters/insurances',
  api: apiHandlers.masters.insurances,
  tableType: 'master',
  modelName: 'InsuranceMaster',
  componentOptions: {
    title: 'Insurance Masters',
    fields: [
      {
        fieldType: 'text',
        name: 'name',
        constructedValue: 'name',
        baseProps: {
          label: 'Name of Insurance Plan',
          required: true,
        },
      },
      {
        fieldType: 'autocomplete',
        name: 'type',
        constructedValue: 'type',
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
            value: string,
          ) => {
            return option.value === value;
          },
        },
        textProps: {
          label: 'Type of Insurance Policy',
          required: true,
        },
        options: {
          mode: 'local',
          values: [
            {
              _id: 1,
              value: 'Health',
            },
            {
              _id: 2,
              value: 'Life',
            },
            {
              _id: 3,
              value: 'Mediclaim',
            },
            {
              _id: 4,
              value: 'Automobile',
            },
          ],
          valueField: 'value',
        },
      },
      {
        fieldType: 'text',
        name: 'policy_no',
        constructedValue: 'policy_no',
        baseProps: {
          label: 'Policy Number',
          required: true,
        },
      },
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
        name: 'purchase_date',
        constructedValue: 'purchase_date',
        baseProps: {
          inputFormat: 'yyyy-LL-dd',
          mask: '____-__-__',
        },
        textProps: {
          label: 'Purchase Date',
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
        fieldType: 'amount',
        name: 'amount_insured',
        constructedValue: 'amount_insured',
        baseProps: {
          allowLeadingZeros: false,
          thousandsGroupStyle: 'thousand',
          thousandSeparator: ',',
          decimalSeparator: '.',
        },
        textProps: {
          label: 'Amount Insured',
          required: true,
        },
        startIcon: <CurrencyRupeeIcon />,
      },
      {
        fieldType: 'text',
        name: 'cover_period_years',
        constructedValue: 'cover_period_years',
        baseProps: {
          label: 'Cover Period (Years)',
          required: true,
          inputProps: {
            type: 'number',
          },
        },
      },
      {
        fieldType: 'date',
        name: 'cover_period_start_date',
        constructedValue: 'cover_period_start_date',
        baseProps: {
          inputFormat: 'yyyy-LL-dd',
          mask: '____-__-__',
        },
        textProps: {
          label: 'Cover Period Start Date',
          required: true,
        },
        options: {
          dateFormatter: 'yyyy-LL-dd',
          updateIdonOtherField: {
            required: false,
            fieldName: '',
          },
        },
      },
      {
        fieldType: 'date',
        name: 'cover_period_end_date',
        constructedValue: 'cover_period_end_date',
        baseProps: {
          inputFormat: 'yyyy-LL-dd',
          mask: '____-__-__',
        },
        textProps: {
          label: 'Cover Period End Date',
          required: true,
        },
        options: {
          dateFormatter: 'yyyy-LL-dd',
          updateIdonOtherField: {
            required: false,
            fieldName: '',
          },
        },
      },
      {
        fieldType: 'text',
        name: 'ncb_allowance',
        constructedValue: 'ncb_allowance',
        baseProps: {
          label: 'NCB Allowance',
          required: true,
          inputProps: {
            type: 'number',
          },
        },
      },
      {
        fieldType: 'text',
        name: 'premium_payable_term_type',
        constructedValue: 'premium_payable_term_type',
        baseProps: {
          label: 'Premium Payable Term Type',
          required: true,
        },
      },
      {
        fieldType: 'amount',
        name: 'premium_payable',
        constructedValue: 'premium_payable',
        baseProps: {
          allowLeadingZeros: false,
          thousandsGroupStyle: 'thousand',
          thousandSeparator: ',',
          decimalSeparator: '.',
        },
        textProps: {
          label: 'Premium Payable',
          required: true,
        },
        startIcon: <CurrencyRupeeIcon />,
      },
    ],
  },
};
