import { routes } from '@plugins/backend';
import { requester } from '@plugins/backend';

import {
  IBuildCalendarInput,
  TBuildCalendarResponse,
} from '@plugins/backend/api/setup/types';

export async function buildCalendarTable(
  data: IBuildCalendarInput,
): Promise<TBuildCalendarResponse> {
  const response = await requester<IBuildCalendarInput, TBuildCalendarResponse>(
    'post',
    {
      url: routes.api.setup.buildCalendar,
      data,
    },
  );
  return response;
}
