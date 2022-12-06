import { databaseHandlers } from '@plugins/backend/api/data/database-handlers';

// Types
import { IBaseDBApiConfig } from '@plugins/backend/api/data/types';

export const calendarTransactionConfig: IBaseDBApiConfig = {
  path: '/transactions/calendar',
  api: databaseHandlers.transactions.calendar,
  tableType: 'transaction',
  modelName: 'CalendarMaster',
  componentOptions: {
    title: 'Calendar Analysis',
  },
};
