import { Box } from '@mui/material';
import { apiHandlers } from '@plugins/backend/api/data/api-handlers';

// Types
import { IBaseDBApiConfig } from '@plugins/backend/api/data/types';
import { IIncomeCategoryMasterDocument } from '@plugins/backend/api/data/types';

export const incomeMasterConfig: IBaseDBApiConfig = {
  path: '/masters/incomes/master',
  api: apiHandlers.masters.incomes.master,
  tableType: 'master',
  modelName: 'IncomeMaster',
  componentOptions: {
    title: 'Income Masters',
    fields: [
      {
        fieldType: 'text',
        name: 'name',
        constructedValue: 'name',
        baseProps: {
          label: 'Name of Expense',
          required: true,
        },
      },
      {
        fieldType: 'text',
        name: 'type',
        constructedValue: 'type',
        baseProps: {
          label: 'Type of Expense',
          required: true,
        },
      },
      {
        fieldType: 'switch',
        name: 'is_pf',
        constructedValue: 'is_pf',
        switchProps: {},
        baseProps: {
          label: 'Is PF ?',
          labelPlacement: 'top',
        },
      },
      {
        fieldType: 'switch',
        name: 'is_tds',
        constructedValue: 'is_tds',
        switchProps: {},
        baseProps: {
          label: 'Is TDS ?',
          labelPlacement: 'top',
        },
      },
      {
        fieldType: 'switch',
        name: 'is_mediclaim',
        constructedValue: 'is_mediclaim',
        switchProps: {},
        baseProps: {
          label: 'Is Mediclaim ?',
          labelPlacement: 'top',
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
