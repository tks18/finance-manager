import { Box } from '@mui/material';
import { databaseHandlers } from '@plugins/backend/api/data/database-handlers';

// Types
import { IBaseDBApiConfig } from '@plugins/backend/api/data/types';
import { ICreditCardMasterDocument } from '@plugins/backend/api/data/types';

export const emiConfig: IBaseDBApiConfig = {
  path: '/masters/emi',
  api: databaseHandlers.masters.emi,
  tableType: 'master',
  modelName: 'EMIMaster',
  componentOptions: {
    title: 'EMI Masters',
    fields: [
      {
        fieldType: 'autocomplete',
        name: 'credit_card_id',
        constructedValue: 'credit_card_id',
        baseProps: {
          renderOption: (props, option: ICreditCardMasterDocument) => {
            return (
              <Box component="li" {...props} key={option._id}>
                {option._id}. {option.card_no}
              </Box>
            );
          },
          getOptionLabel: (option: ICreditCardMasterDocument) => {
            return option.card_no;
          },
          isOptionEqualToValue: (
            option: ICreditCardMasterDocument,
            value: number,
          ) => {
            return option._id === value;
          },
        },
        textProps: {
          label: 'Credit Card',
          required: false,
        },
        options: {
          mode: 'api',
          api: databaseHandlers.masters.creditCards,
          valueField: '_id',
        },
      },
      {
        fieldType: 'controlledText',
        name: 'emi_start_date_id',
        constructedValue: 'emi_start_date_id',
        baseProps: {
          label: 'EMI Start Date ID',
          required: true,
        },
      },
      {
        fieldType: 'date',
        name: 'emi_start_date',
        constructedValue: 'emi_start_date',
        baseProps: {
          inputFormat: 'yyyy-LL-dd',
          mask: '____-__-__',
        },
        textProps: {
          label: 'EMI Start Date',
          required: true,
        },
        options: {
          dateFormatter: 'yyyy-LL-dd',
          updateIdonOtherField: {
            required: true,
            fieldName: 'emi_start_date_id',
          },
        },
      },
      {
        fieldType: 'controlledText',
        name: 'emi_end_date_id',
        constructedValue: 'emi_end_date_id',
        baseProps: {
          label: 'EMI End Date ID',
          required: true,
        },
      },
      {
        fieldType: 'date',
        name: 'emi_end_date',
        constructedValue: 'emi_end_date',
        baseProps: {
          inputFormat: 'yyyy-LL-dd',
          mask: '____-__-__',
        },
        textProps: {
          label: 'EMI End Date',
          required: true,
        },
        options: {
          dateFormatter: 'yyyy-LL-dd',
          updateIdonOtherField: {
            required: true,
            fieldName: 'emi_end_date_id',
          },
        },
      },
      {
        fieldType: 'text',
        name: 'payable_term',
        constructedValue: 'payable_term',
        baseProps: {
          label: 'Payable Term (Months)',
          required: true,
          inputProps: {
            type: 'number',
          },
        },
      },
      {
        fieldType: 'text',
        name: 'total_installments',
        constructedValue: 'total_installments',
        baseProps: {
          label: 'Total Installments',
          required: true,
          inputProps: {
            type: 'number',
          },
        },
      },
      {
        fieldType: 'amount',
        name: 'total_emi_payment',
        constructedValue: 'total_emi_payment',
        baseProps: {
          allowLeadingZeros: false,
          thousandsGroupStyle: 'thousand',
          thousandSeparator: ',',
          decimalSeparator: '.',
        },
        textProps: {
          label: 'Total EMI Amount',
          required: true,
        },
      },
      {
        fieldType: 'amount',
        name: 'total_product_cost',
        constructedValue: 'total_product_cost',
        baseProps: {
          allowLeadingZeros: false,
          thousandsGroupStyle: 'thousand',
          thousandSeparator: ',',
          decimalSeparator: '.',
        },
        textProps: {
          label: 'Total Product Cost',
          required: true,
        },
      },
      {
        fieldType: 'amount',
        name: 'interest',
        constructedValue: 'interest',
        baseProps: {
          allowLeadingZeros: false,
          thousandsGroupStyle: 'thousand',
          thousandSeparator: ',',
          decimalSeparator: '.',
        },
        textProps: {
          label: 'Interest (%)',
          required: true,
        },
      },
      {
        fieldType: 'amount',
        name: 'total_interest_payable',
        constructedValue: 'total_interest_payable',
        baseProps: {
          allowLeadingZeros: false,
          thousandsGroupStyle: 'thousand',
          thousandSeparator: ',',
          decimalSeparator: '.',
        },
        textProps: {
          label: 'Total Interest Payable',
          required: true,
        },
      },
      {
        fieldType: 'amount',
        name: 'no_cost_emi_discount',
        constructedValue: 'no_cost_emi_discount',
        baseProps: {
          allowLeadingZeros: false,
          thousandsGroupStyle: 'thousand',
          thousandSeparator: ',',
          decimalSeparator: '.',
        },
        textProps: {
          label: 'No Cost EMI Discount',
          required: true,
        },
      },
      {
        fieldType: 'amount',
        name: 'emi_amount',
        constructedValue: 'emi_amount',
        baseProps: {
          allowLeadingZeros: false,
          thousandsGroupStyle: 'thousand',
          thousandSeparator: ',',
          decimalSeparator: '.',
        },
        textProps: {
          label: 'EMI Amount per Installment',
          required: true,
        },
      },
      {
        fieldType: 'amount',
        name: 'processing_cost',
        constructedValue: 'processing_cost',
        baseProps: {
          allowLeadingZeros: false,
          thousandsGroupStyle: 'thousand',
          thousandSeparator: ',',
          decimalSeparator: '.',
        },
        textProps: {
          label: 'Processing Cost',
          required: true,
        },
      },
      {
        fieldType: 'amount',
        name: 'processing_gst_component',
        constructedValue: 'processing_gst_component',
        baseProps: {
          allowLeadingZeros: false,
          thousandsGroupStyle: 'thousand',
          thousandSeparator: ',',
          decimalSeparator: '.',
        },
        textProps: {
          label: 'Processing GST Component',
          required: true,
        },
      },
    ],
  },
};
