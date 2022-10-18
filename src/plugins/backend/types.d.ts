import type { AxiosRequestConfig } from 'axios';

export interface IRequestOptions<T> {
  url: string;
  token?: string;
  data?: T;
  config?: AxiosRequestConfig<T>;
}

export interface IRequestResponse<T> {
  status: number;
  data: T;
}

export interface IRequestError {
  status: number;
  errorname: string;
  message: string;
}

export type * from './api/types';
