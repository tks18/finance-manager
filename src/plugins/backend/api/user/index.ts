import * as methods from './methods';

export const userMethods = {
  get: methods.getUser,
  add: methods.addUser,
  login: methods.loginUser,
  verify: methods.verifyUser,
  checkRegistration: methods.checkRegistration,
};

export * from './methods';
