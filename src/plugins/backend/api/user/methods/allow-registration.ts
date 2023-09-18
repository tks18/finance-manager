import { routes } from '@plugins/backend';
import { requester } from '@plugins/backend';

import type { IUserAllowRegistrationResponse } from '@plugins/backend/api/user/types';

export async function checkRegistration() {
  const registrationStatus = await requester<
    null,
    IUserAllowRegistrationResponse
  >('post', {
    url: routes.api.user.allowRegistration,
  });
  return registrationStatus;
}
