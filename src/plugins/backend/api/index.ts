import * as userApi from './user';
import * as setupApi from './setup';
import * as dataApi from './data';

export const api = {
  user: userApi.userMethods,
  setup: setupApi.setupMethods,
  data: dataApi.dataMethods,
};

export * from './user';
export * from './setup';
export * from './data';
