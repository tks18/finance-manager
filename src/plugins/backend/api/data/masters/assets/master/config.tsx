import { Box } from '@mui/material';
import { CurrencyRupee as CurrencyRupeeIcon } from '@mui/icons-material';
import { apiHandlers } from '@plugins/backend/api/data/api-handlers';

// Types
import {
  WithRequiredProperty,
  IBaseDBApiConfig,
  IEMIMasterDocument,
  IAssetCategoryMasterDocument,
} from '@plugins/backend/api/data/types';

type TCustomEMIMasterDocument = WithRequiredProperty<
  IEMIMasterDocument,
  'creditCard'
>;

export const assetMasterConfig: IBaseDBApiConfig = {
  path: '/masters/assets/master',
  api: apiHandlers.masters.assets.master,
  tableType: 'master',
  modelName: 'AssetMaster',
  componentOptions: {
    title: 'Asset Masters',
    excludeResetFields: ['date_id', 'date', 'category_id'],
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
          label: 'Date of Purchase',
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
            value: IAssetCategoryMasterDocument,
          ) => {
            return option._id === value._id;
          },
        },
        textProps: {
          label: 'Asset Category',
          required: true,
        },
        options: {
          mode: 'api',
          api: apiHandlers.masters.assets.category,
          valueField: '_id',
        },
      },
      {
        fieldType: 'autocomplete',
        name: 'emi_id',
        constructedValue: 'emi_id',
        baseProps: {
          renderOption: (props, option: TCustomEMIMasterDocument) => {
            return (
              <Box component="li" {...props}>
                {option._id}. {option.credit_card_id} -{' '}
                {option.creditCard.card_name}
              </Box>
            );
          },
          getOptionLabel: (option: TCustomEMIMasterDocument) => {
            return option.creditCard.card_name;
          },
          isOptionEqualToValue: (
            option: TCustomEMIMasterDocument,
            value: TCustomEMIMasterDocument,
          ) => {
            return option._id === value._id;
          },
        },
        textProps: {
          label: 'EMI (if any)',
          required: false,
        },
        options: {
          mode: 'api',
          api: apiHandlers.masters.emi,
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
        startIcon: <CurrencyRupeeIcon />,
      },
    ],
  },
};
