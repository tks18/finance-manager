import { apiHandlers } from '@plugins/backend/api/data/api-handlers';

// Types
import { IBaseDBApiConfig } from '@plugins/backend/api/data/types';

export const assetCategoryMasterConfig: IBaseDBApiConfig = {
  path: '/masters/assets/categories',
  api: apiHandlers.masters.assets.category,
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
