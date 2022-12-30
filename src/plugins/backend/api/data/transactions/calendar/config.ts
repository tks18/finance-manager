import { apiHandlers } from '@plugins/backend/api/data/api-handlers';

// Types
import { IBaseDBApiConfig } from '@plugins/backend/api/data/types';

export const calendarTransactionConfig: IBaseDBApiConfig = {
  path: '/transactions/calendar',
  api: apiHandlers.transactions.calendar,
  tableType: 'transaction',
  modelName: 'CalendarMaster',
  componentOptions: {
    title: 'Calendar Analysis',
  },
};
