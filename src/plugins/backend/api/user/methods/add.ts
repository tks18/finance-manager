import { routes } from '@plugins/backend';
import { requester } from '@plugins/backend';

import type {
  TUserAuthResponse,
  IUserRegisterInput,
} from '@plugins/backend/api/user/types';

export async function addUser(
  user: IUserRegisterInput,
): Promise<TUserAuthResponse> {
  const userAuthDoc = await requester<IUserRegisterInput, TUserAuthResponse>(
    'post',
    {
      url: routes.api.user.register,
      data: user,
    },
  );
  return userAuthDoc;
}
