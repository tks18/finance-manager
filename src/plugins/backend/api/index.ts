import * as userApi from './user';
import * as setupApi from './setup';

export const api = {
  user: userApi.userMethods,
  setup: setupApi.setupMethods,
};

export * from './user';
export * from './setup';
