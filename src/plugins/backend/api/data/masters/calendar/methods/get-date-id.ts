import { routes } from '@plugins/backend';
import { requester } from '@plugins/backend';

import {
  ICalendarDateIdInput,
  ICalendarDateIdResponse,
} from '@plugins/backend/api/data/masters/calendar/types';

export async function getDateId(token: string, data: ICalendarDateIdInput) {
  const response = await requester<
    ICalendarDateIdInput,
    ICalendarDateIdResponse
  >('post', {
    url: routes.api.data.masters.calendar.getDateId,
    token,
    data,
  });
  return response;
}
