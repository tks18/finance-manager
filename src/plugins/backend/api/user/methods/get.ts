import { routes } from '@plugins/backend';
import { requester } from '@plugins/backend';

import type { IUserDoc, IUserGetInput } from '@plugins/backend/api/user/types';

export async function getUser(user: IUserGetInput) {
  const userAuthDoc = await requester<IUserGetInput, IUserDoc>('post', {
    url: routes.api.user.get,
    data: user,
  });
  return userAuthDoc;
}
