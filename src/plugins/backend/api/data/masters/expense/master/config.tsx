import { Box } from '@mui/material';
import { databaseHandlers } from '@plugins/backend/api/data/database-handlers';

// Types
import { IBaseDBApiConfig } from '@plugins/backend/api/data/types';
import { IExpenseCategoryMasterDocument } from '@plugins/backend/api/data/types';

export const expenseMasterConfig: IBaseDBApiConfig = {
  path: '/masters/expenses/master',
  api: databaseHandlers.masters.expenses.master,
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
            value: number,
          ) => {
            return option._id === value;
          },
        },
        textProps: {
          label: 'Category',
          required: false,
        },
        options: {
          mode: 'api',
          api: databaseHandlers.masters.expenses.category,
          valueField: '_id',
        },
      },
    ],
  },
};
