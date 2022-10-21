import { axios } from '@plugins/axios';

import type { RawAxiosRequestHeaders, AxiosResponse } from 'axios';
import type { IRequestOptions, IRequestResponse } from './types';

export async function requester<T = any, U = any>(
  type: 'get' | 'post' | 'patch' | 'delete',
  options: IRequestOptions<T>,
): Promise<IRequestResponse<U>> {
  let headers: RawAxiosRequestHeaders & {
    'x-session-token'?: string;
  };
  headers = {
    ...options.config?.headers,
  };
  headers['x-session-token'] = options.token;

  const config: IRequestOptions<T>['config'] = {
    method: type,
    headers,
    data: { ...options.data, ...options.config?.data } as T,
    params: options.config?.params,
    ...options.config,
  };
  try {
    const response = await axios<
      IRequestResponse<U>,
      AxiosResponse<IRequestResponse<U>, T>,
      T
    >(options.url, config);
    return response.data;
  } catch (e) {
    throw e;
  }
}
