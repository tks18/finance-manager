import { databaseHandlers } from '@plugins/backend/api/data/database-handlers';

// Types
import { IBaseDBApiConfig } from '@plugins/backend/api/data/types';

export const incomeCategoryMasterConfig: IBaseDBApiConfig = {
  path: '/masters/incomes/categories',
  api: databaseHandlers.masters.incomes.category,
  tableType: 'master',
  modelName: 'IncomeCategoryMaster',
  componentOptions: {
    title: 'Income Category Masters',
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
