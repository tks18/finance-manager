import { apiHandlers } from '@plugins/backend/api/data/api-handlers';

// Types
import { IBaseDBApiConfig } from '@plugins/backend/api/data/types';

export const investmentCategoryMasterConfig: IBaseDBApiConfig = {
  path: '/masters/investments/categories',
  api: apiHandlers.masters.investments.category,
  tableType: 'master',
  modelName: 'InvestmentCategoryMaster',
  componentOptions: {
    title: 'Investment Category Masters',
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
      {
        fieldType: 'text',
        name: 'category_short',
        constructedValue: 'category_short',
        baseProps: {
          label: 'Category Short (3 Chars)',
          required: true,
          inputProps: {
            maxLength: 3,
          },
        },
      },
      {
        fieldType: 'text',
        name: 'risk_rank',
        constructedValue: 'risk_rank',
        baseProps: {
          label: 'Investment Risk Rank',
          required: true,
          inputProps: {
            type: 'number',
          },
        },
      },
      {
        fieldType: 'text',
        name: 'risk_name',
        constructedValue: 'risk_name',
        baseProps: {
          label: 'Risk Name',
          required: true,
        },
      },
      {
        fieldType: 'text',
        name: 'tax_term_threshold_years',
        constructedValue: 'tax_term_threshold_years',
        baseProps: {
          label: 'Tax Term Threshold (Years)',
          required: true,
          inputProps: {
            type: 'number',
          },
        },
      },
    ],
  },
};
