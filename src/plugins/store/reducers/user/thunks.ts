import { createCustomAsyncThunk } from '@plugins/store/helpers';
import { api } from '@plugins/backend';

import type {
  IUserGetInput,
  IUserLoginInput,
  IUserRegisterInput,
  IUserVerifyInput,
  IUserAuth,
  IUserDoc,
  IUserVerify,
} from '@plugins/backend/types';

export const registerUser = createCustomAsyncThunk<
  IUserRegisterInput,
  IUserAuth
>('user/register', async (user: IUserRegisterInput) => {
  const userAuth = await api.user.add(user);
  return userAuth.data;
});

export const loginUser = createCustomAsyncThunk<IUserLoginInput, IUserAuth>(
  'user/login',
  async (user: IUserLoginInput) => {
    const userAuth = await api.user.login(user);
    return userAuth.data;
  },
);

export const verifyUser = createCustomAsyncThunk<IUserVerifyInput, IUserVerify>(
  'user/verify',
  async (user: IUserVerifyInput) => {
    const tokenResponse = await api.user.verify(user);
    return tokenResponse.data;
  },
);

export const getUserDoc = createCustomAsyncThunk<IUserGetInput, IUserDoc>(
  'user/get',
  async (user: IUserGetInput) => {
    const userResponse = await api.user.get(user);
    return userResponse.data;
  },
);
