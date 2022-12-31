import { Box } from '@mui/material';
import { apiHandlers } from '@plugins/backend/api/data/api-handlers';

// Types
import { IBaseDBApiConfig } from '@plugins/backend/api/data/types';
import { IExpenseCategoryMasterDocument } from '@plugins/backend/api/data/types';

export const expenseMasterConfig: IBaseDBApiConfig = {
  path: '/masters/expenses/master',
  api: apiHandlers.masters.expenses.master,
  tableType: 'master',
  modelName: 'ExpenseMaster',
  componentOptions: {
    title: 'Expense Masters',
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
        fieldType: 'autocomplete',
        name: 'category_id',
        constructedValue: 'category_id',
        baseProps: {
          renderOption: (props, option: IExpenseCategoryMasterDocument) => {
            return (
              <Box component="li" {...props} key={option._id}>
                {option._id}. {option.category}
              </Box>
            );
          },
          getOptionLabel: (option: IExpenseCategoryMasterDocument) => {
            return option.category;
          },
          isOptionEqualToValue: (
            option: IExpenseCategoryMasterDocument,
            value: IExpenseCategoryMasterDocument,
          ) => {
            return option._id === value._id;
          },
        },
        textProps: {
          label: 'Category',
          required: false,
        },
        options: {
          mode: 'api',
          api: apiHandlers.masters.expenses.category,
          valueField: '_id',
        },
      },
    ],
  },
};
