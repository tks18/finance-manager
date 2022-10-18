import { routes } from '@plugins/backend';
import { requester } from '@plugins/backend';

import type {
  TUserVerifyResponse,
  IUserVerifyInput,
} from '@plugins/backend/api/user/types';

export async function verifyUser(
  user: IUserVerifyInput,
): Promise<TUserVerifyResponse> {
  const userVerifyDoc = await requester<IUserVerifyInput, TUserVerifyResponse>(
    'post',
    {
      url: routes.api.user.verify,
      data: user,
    },
  );
  return userVerifyDoc;
}
