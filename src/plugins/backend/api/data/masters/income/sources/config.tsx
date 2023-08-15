import { Box } from '@mui/material';
import { apiHandlers } from '@plugins/backend/api/data/api-handlers';

// Types
import { IBaseDBApiConfig } from '@plugins/backend/api/data/types';
import { IIncomeCategoryMasterDocument } from '@plugins/backend/api/data/types';

export const incomeSourceMasterConfig: IBaseDBApiConfig = {
  path: '/masters/incomes/sources',
  api: apiHandlers.masters.incomes.source,
  tableType: 'master',
  modelName: 'IncomeSourceMaster',
  componentOptions: {
    title: 'Income Source Masters',
    excludeResetFields: ['category_id'],
    fields: [
      {
        fieldType: 'text',
        name: 'source_name',
        constructedValue: 'source_name',
        baseProps: {
          label: 'Source Name',
          required: true,
        },
      },
      {
        fieldType: 'text',
        name: 'source_type',
        constructedValue: 'source_type',
        baseProps: {
          label: 'Source Type',
          required: true,
        },
      },
      {
        fieldType: 'autocomplete',
        name: 'category_id',
        constructedValue: 'category_id',
        baseProps: {
          renderOption: (props, option: IIncomeCategoryMasterDocument) => {
            return (
              <Box component="li" {...props} key={option._id}>
                {option._id}. {option.category}
              </Box>
            );
          },
          getOptionLabel: (option: IIncomeCategoryMasterDocument) => {
            return option.category;
          },
          isOptionEqualToValue: (
            option: IIncomeCategoryMasterDocument,
            value: IIncomeCategoryMasterDocument,
          ) => {
            return option._id === value._id;
          },
        },
        textProps: {
          label: 'Category',
          required: true,
        },
        options: {
          mode: 'api',
          api: apiHandlers.masters.incomes.category,
          valueField: '_id',
        },
      },
    ],
  },
};
