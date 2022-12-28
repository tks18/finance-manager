import { Box } from '@mui/material';
import { databaseHandlers } from '@plugins/backend/api/data/database-handlers';

// Types
import { IBaseDBApiConfig } from '@plugins/backend/api/data/types';
import { IBankMasterDocument } from '@plugins/backend/api/data/types';

export const creditCardConfig: IBaseDBApiConfig = {
  path: '/masters/credit-cards',
  api: databaseHandlers.masters.creditCards,
  tableType: 'master',
  modelName: 'CreditCardMaster',
  componentOptions: {
    title: 'Credit Card Masters',
    fields: [
      {
        fieldType: 'text',
        name: 'card_name',
        constructedValue: 'card_name',
        baseProps: {
          label: 'Card Name',
          required: true,
        },
      },
      {
        fieldType: 'text',
        name: 'card_type',
        constructedValue: 'card_type',
        baseProps: {
          label: 'Card Type',
          required: true,
        },
      },
      {
        fieldType: 'autocomplete',
        name: 'card_gateway_vendor',
        constructedValue: 'card_gateway_vendor',
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
          label: 'Card Gateway Vendor',
          required: true,
        },
        options: {
          mode: 'local',
          values: [
            {
              _id: 1,
              value: 'Mastercard',
            },
            {
              _id: 2,
              value: 'Rupay',
            },
            {
              _id: 3,
              value: 'Visa',
            },
          ],
          valueField: 'value',
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
          required: false,
        },
        options: {
          mode: 'api',
          api: databaseHandlers.masters.banks,
          valueField: '_id',
        },
      },
      {
        fieldType: 'text',
        name: 'card_no',
        constructedValue: 'card_no',
        baseProps: {
          label: 'Card Number',
          required: true,
          inputProps: {
            type: 'number',
            maxLength: 16,
          },
        },
      },
      {
        fieldType: 'year/month',
        name: 'card_expiry_month',
        constructedValue: 'card_expiry_month',
        baseProps: {
          inputFormat: 'L',
          mask: '_',
          views: ['month'],
          openTo: 'month',
        },
        textProps: {
          label: 'Card Expiry Month',
          required: true,
        },
        options: {
          dateFormatter: 'L',
        },
      },
      {
        fieldType: 'year/month',
        name: 'card_expiry_year',
        constructedValue: 'card_expiry_year',
        baseProps: {
          inputFormat: 'yyyy',
          mask: '____',
          views: ['year'],
          openTo: 'year',
        },
        textProps: {
          label: 'Card Expiry Year',
          required: true,
        },
        options: {
          dateFormatter: 'yyyy',
        },
      },
      {
        fieldType: 'text',
        name: 'card_cvv_code',
        constructedValue: 'card_cvv_code',
        baseProps: {
          label: 'Card CVV Code',
          required: true,
          inputProps: {
            maxLength: 3,
          },
        },
      },
      {
        fieldType: 'amount',
        name: 'credit_limit',
        constructedValue: 'credit_limit',
        baseProps: {
          allowLeadingZeros: false,
          thousandsGroupStyle: 'thousand',
          thousandSeparator: ',',
          decimalSeparator: '.',
        },
        textProps: {
          label: 'Credit Limit',
          required: true,
        },
      },
      {
        fieldType: 'switch',
        name: 'is_international',
        constructedValue: 'is_international',
        switchProps: {},
        baseProps: {
          label: 'Is Card International ?',
          labelPlacement: 'top',
        },
      },
      {
        fieldType: 'amount',
        name: 'international_limit',
        constructedValue: 'international_limit',
        baseProps: {
          allowLeadingZeros: false,
          thousandsGroupStyle: 'thousand',
          thousandSeparator: ',',
          decimalSeparator: '.',
        },
        textProps: {
          label: 'International Limit',
          required: true,
        },
      },
      {
        fieldType: 'amount',
        name: 'ecom_limit',
        constructedValue: 'ecom_limit',
        baseProps: {
          allowLeadingZeros: false,
          thousandsGroupStyle: 'thousand',
          thousandSeparator: ',',
          decimalSeparator: '.',
        },
        textProps: {
          label: 'Ecommerce Limit',
          required: true,
        },
      },
      {
        fieldType: 'switch',
        name: 'tap_enabled',
        constructedValue: 'tap_enabled',
        switchProps: {},
        baseProps: {
          label: 'Is Tap Enabled ?',
          labelPlacement: 'top',
        },
      },
      {
        fieldType: 'amount',
        name: 'tap_limit',
        constructedValue: 'tap_limit',
        baseProps: {
          allowLeadingZeros: false,
          thousandsGroupStyle: 'thousand',
          thousandSeparator: ',',
          decimalSeparator: '.',
        },
        textProps: {
          label: 'Tap Limit',
          required: true,
        },
      },
      {
        fieldType: 'amount',
        name: 'pos_limit',
        constructedValue: 'pos_limit',
        baseProps: {
          allowLeadingZeros: false,
          thousandsGroupStyle: 'thousand',
          thousandSeparator: ',',
          decimalSeparator: '.',
        },
        textProps: {
          label: 'POS Limit',
          required: true,
        },
      },
    ],
  },
};
