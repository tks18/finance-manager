import { routes } from '@plugins/backend';
import { requester } from '@plugins/backend';

import {
  IBuildCalendarInput,
  IBuildCalendar,
} from '@plugins/backend/api/setup/types';

export async function buildCalendarTable(data: IBuildCalendarInput) {
  const response = await requester<IBuildCalendarInput, IBuildCalendar>(
    'post',
    {
      url: routes.api.setup.buildCalendar,
      data,
    },
  );
  return response;
}
