import { Box } from '@mui/material';
import { databaseHandlers } from '@plugins/backend/api/data/database-handlers';

// Types
import { IBaseDBApiConfig } from '@plugins/backend/api/data/types';
import { IInvestmentCategoryMasterDocument } from '@plugins/backend/api/data/types';

export const investmentMasterConfig: IBaseDBApiConfig = {
  path: '/masters/investments/master',
  api: databaseHandlers.masters.investments.master,
  tableType: 'master',
  modelName: 'InvestmentMaster',
  componentOptions: {
    title: 'Investment Master',
    fields: [
      {
        fieldType: 'text',
        name: 'name',
        constructedValue: 'name',
        baseProps: {
          label: 'Name of Investment',
          required: true,
        },
      },
      {
        fieldType: 'text',
        name: 'short_name',
        constructedValue: 'short_name',
        baseProps: {
          label: 'Short Name',
          required: true,
        },
      },
      {
        fieldType: 'text',
        name: 'yahoo_ticker',
        constructedValue: 'yahoo_ticker',
        baseProps: {
          label: 'Yahoo Ticker',
          required: true,
        },
      },
      {
        fieldType: 'text',
        name: 'investment_sector',
        constructedValue: 'investment_sector',
        baseProps: {
          label: 'Investment Sector',
          required: true,
        },
      },
      {
        fieldType: 'autocomplete',
        name: 'category_id',
        constructedValue: 'category_id',
        baseProps: {
          renderOption: (props, option: IInvestmentCategoryMasterDocument) => {
            return (
              <Box component="li" {...props} key={option._id}>
                {option._id}. {option.category}
              </Box>
            );
          },
          getOptionLabel: (option: IInvestmentCategoryMasterDocument) => {
            return option.category;
          },
          isOptionEqualToValue: (
            option: IInvestmentCategoryMasterDocument,
            value: IInvestmentCategoryMasterDocument,
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
          api: databaseHandlers.masters.investments.category,
          valueField: '_id',
        },
      },
    ],
  },
};
