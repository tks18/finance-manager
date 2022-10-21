import { routes } from '@plugins/backend';
import { requester } from '@plugins/backend';

import type {
  IUserAuth,
  IUserRegisterInput,
} from '@plugins/backend/api/user/types';

export async function addUser(user: IUserRegisterInput) {
  const userAuthDoc = await requester<IUserRegisterInput, IUserAuth>('post', {
    url: routes.api.user.register,
    data: user,
  });
  return userAuthDoc;
}
