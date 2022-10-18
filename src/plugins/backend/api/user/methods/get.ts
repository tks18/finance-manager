import { routes } from '@plugins/backend';
import { requester } from '@plugins/backend';

import type {
  TUserDocResponse,
  IUserGetInput,
} from '@plugins/backend/api/user/types';

export async function getUser(user: IUserGetInput): Promise<TUserDocResponse> {
  const userAuthDoc = await requester<IUserGetInput, TUserDocResponse>('post', {
    url: routes.api.user.get,
    data: user,
  });
  return userAuthDoc;
}
