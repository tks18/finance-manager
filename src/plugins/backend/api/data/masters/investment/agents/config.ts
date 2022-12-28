import { databaseHandlers } from '@plugins/backend/api/data/database-handlers';

// Types
import { IBaseDBApiConfig } from '@plugins/backend/api/data/types';

export const investmentAgentMasterConfig: IBaseDBApiConfig = {
  path: '/masters/investments/agents',
  api: databaseHandlers.masters.investments.agents,
  tableType: 'master',
  modelName: 'InvestmentAgentMaster',
  componentOptions: {
    title: 'Investment Agents Master',
    fields: [
      {
        fieldType: 'text',
        name: 'name',
        constructedValue: 'name',
        baseProps: {
          label: 'Name of Depository Participant',
          required: true,
        },
      },
      {
        fieldType: 'text',
        name: 'company_name',
        constructedValue: 'company_name',
        baseProps: {
          label: 'Company Name',
          required: true,
        },
      },
      {
        fieldType: 'text',
        name: 'client_code',
        constructedValue: 'client_code',
        baseProps: {
          label: 'Client Code',
          required: true,
        },
      },
      {
        fieldType: 'text',
        name: 'dp_id',
        constructedValue: 'dp_id',
        baseProps: {
          label: 'Depository Participant ID',
          required: true,
        },
      },
      {
        fieldType: 'text',
        name: 'bo_id',
        constructedValue: 'bo_id',
        baseProps: {
          label: 'BO ID',
          required: true,
        },
      },
    ],
  },
};
