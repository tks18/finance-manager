import { databaseHandlers } from '@plugins/backend/api/data/database-handlers';

// Types
import { IBaseDBApiConfig } from '@plugins/backend/api/data/types';

export const assetCategoryMasterConfig: IBaseDBApiConfig = {
  path: '/masters/assets/categories',
  api: databaseHandlers.masters.assets.category,
  tableType: 'master',
  modelName: 'AssetCategoryMaster',
  componentOptions: {
    title: 'Asset Category Masters',
    fields: [
      {
        fieldType: 'text',
        name: 'category',
        constructedValue: 'category',
        baseProps: {
          label: 'Category Name',
          required: true,
        },
      },
    ],
  },
};
