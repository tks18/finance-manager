import { Box } from '@mui/material';
import { databaseHandlers } from '@plugins/backend/api/data/database-handlers';

// Types
import {
  WithRequiredProperty,
  IBaseDBApiConfig,
  IEMIMasterDocument,
  IAssetCategoryMasterDocument,
} from '@plugins/backend/api/data/types';

type TCustomCreditCardMasterDocument = WithRequiredProperty<
  IEMIMasterDocument,
  'creditCard'
>;

export const assetMasterConfig: IBaseDBApiConfig = {
  path: '/masters/assets/master',
  api: databaseHandlers.masters.assets.master,
  tableType: 'master',
  modelName: 'AssetMaster',
  componentOptions: {
    title: 'Asset Masters',
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
          label: 'Date of Purchase',
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
        fieldType: 'text',
        name: 'name',
        constructedValue: 'name',
        baseProps: {
          label: 'Name of Asset',
          required: true,
        },
      },
      {
        fieldType: 'autocomplete',
        name: 'category_id',
        constructedValue: 'category_id',
        baseProps: {
          renderOption: (props, option: IAssetCategoryMasterDocument) => {
            return (
              <Box component="li" {...props} key={option._id}>
                {option._id}. {option.category}
              </Box>
            );
          },
          getOptionLabel: (option: IAssetCategoryMasterDocument) => {
            return option.category;
          },
          isOptionEqualToValue: (
            option: IAssetCategoryMasterDocument,
            value: number,
          ) => {
            return option._id === value;
          },
        },
        textProps: {
          label: 'Asset Category',
          required: true,
        },
        options: {
          mode: 'api',
          api: databaseHandlers.masters.assets.category,
          valueField: '_id',
        },
      },
      {
        fieldType: 'autocomplete',
        name: 'emi_id',
        constructedValue: 'emi_id',
        baseProps: {
          renderOption: (props, option: TCustomCreditCardMasterDocument) => {
            return (
              <Box component="li" {...props}>
                {option._id}. {option.credit_card_id} -{' '}
                {option.creditCard.card_name}
              </Box>
            );
          },
          getOptionLabel: (option: TCustomCreditCardMasterDocument) => {
            return option.creditCard.card_name;
          },
          isOptionEqualToValue: (
            option: TCustomCreditCardMasterDocument,
            value: number,
          ) => {
            return option._id === value;
          },
        },
        textProps: {
          label: 'EMI (if any)',
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
    ],
  },
};
