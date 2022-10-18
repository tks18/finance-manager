import type { IRequestResponse } from '@plugins/backend/types';

export interface IUserRegisterInput {
  name: string;
  email: string;
  password: string;
}

export interface IUserLoginInput {
  email: string;
  password: string;
}

export interface IUserGetInput {
  email: string;
}

export interface IUserVerifyInput {
  token: string;
}

export interface IUserDoc {
  _id: number;
  name: string;
  email: string;
}

export interface IUserAuth extends IUserDoc {
  email: string;
  token: string;
}

export interface IUserVerify {
  authenticated: boolean;
}

export type TUserAuthResponse = IRequestResponse<IUserAuth>;

export type TUserDocResponse = IRequestResponse<IUserDoc>;

export type TUserVerifyResponse = IRequestResponse<IUserVerify>;
