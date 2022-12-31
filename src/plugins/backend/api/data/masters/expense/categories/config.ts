import { apiHandlers } from '@plugins/backend/api/data/api-handlers';

// Types
import { IBaseDBApiConfig } from '@plugins/backend/api/data/types';

export const expenseCategoryMasterConfig: IBaseDBApiConfig = {
  path: '/masters/expenses/categories',
  api: apiHandlers.masters.expenses.category,
  tableType: 'master',
  modelName: 'ExpenseCategoryMaster',
  componentOptions: {
    title: 'Expense Category Masters',
    fields: [
      {
        fieldType: 'text',
        name: 'category',
        constructedValue: 'category',
        baseProps: {
          label: 'Category',
          required: true,
        },
      },
    ],
  },
};
