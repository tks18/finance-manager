import { axios } from '@plugins/axios';

import type { RawAxiosRequestHeaders, AxiosResponse } from 'axios';
import type { IRequestOptions } from '@plugins/backend/types';

export async function requester<T, U>(
  type: 'get' | 'post' | 'patch' | 'delete',
  options: IRequestOptions<T>,
): Promise<U> {
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
  console.log(config);
  try {
    const response = await axios<U, AxiosResponse<U, T>, T>(
      options.url,
      config,
    );
    return response.data;
  } catch (e) {
    throw e;
  }
}
