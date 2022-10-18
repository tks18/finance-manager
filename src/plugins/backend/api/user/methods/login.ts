import { routes } from '@plugins/backend';
import { requester } from '@plugins/backend';

import type {
  TUserAuthResponse,
  IUserLoginInput,
} from '@plugins/backend/api/user/types';

export async function loginUser(
  user: IUserLoginInput,
): Promise<TUserAuthResponse> {
  const userAuthDoc = await requester<IUserLoginInput, TUserAuthResponse>(
    'post',
    {
      url: routes.api.user.login,
      data: user,
    },
  );
  return userAuthDoc;
}
