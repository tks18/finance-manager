import { createAsyncThunk } from '@reduxjs/toolkit';
import axios, { AxiosError } from 'axios';

import type { IRequestError } from '@plugins/backend/types';

export function createCustomAsyncThunk<T, U>(
  action: string,
  callback: (data: T) => Promise<U>,
) {
  return createAsyncThunk<U, T, { rejectValue: IRequestError }>(
    action,
    async (data: T, thunkApi) => {
      try {
        const response = await callback(data);
        return response;
      } catch (e) {
        if (axios.isAxiosError(e)) {
          const error: AxiosError<IRequestError> = e;
          if (error.response) {
            if (typeof error.response.data === 'string') {
              const stringError: IRequestError = {
                status: 500,
                errorname: 'InternalError',
                message: String(error.response.data),
              };
              return thunkApi.rejectWithValue(stringError);
            } else {
              return thunkApi.rejectWithValue(error.response.data);
            }
          } else {
            const error: IRequestError = {
              status: 500,
              message: `Unknown Error in Async Thunk Handler ${String(e)}`,
              errorname: 'InternalError',
            };
            return thunkApi.rejectWithValue(error);
          }
        } else {
          const error: IRequestError = {
            status: 500,
            message: `Unknown Error in Async Thunk Handler ${String(e)}`,
            errorname: 'InternalError',
          };
          return thunkApi.rejectWithValue(error);
        }
      }
    },
  );
}
