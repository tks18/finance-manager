import { routes } from '@plugins/backend';
import { requester } from '@plugins/backend';

import type {
  IUserAuth,
  IUserLoginInput,
} from '@plugins/backend/api/user/types';

export async function loginUser(user: IUserLoginInput) {
  const userAuthDoc = await requester<IUserLoginInput, IUserAuth>('post', {
    url: routes.api.user.login,
    data: user,
  });
  return userAuthDoc;
}
