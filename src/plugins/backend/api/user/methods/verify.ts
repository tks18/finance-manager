import { routes } from '@plugins/backend';
import { requester } from '@plugins/backend';

import type {
  IUserVerify,
  IUserVerifyInput,
} from '@plugins/backend/api/user/types';

export async function verifyUser(user: IUserVerifyInput) {
  const userVerifyDoc = await requester<IUserVerifyInput, IUserVerify>('post', {
    url: routes.api.user.verify,
    data: user,
  });
  return userVerifyDoc;
}
