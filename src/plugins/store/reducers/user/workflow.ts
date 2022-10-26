import { userThunks, userActions } from '@plugins/store';
import { IUserLoginInput, IUserRegisterInput } from '@plugins/backend/types';
import type { AppDispatch } from '@plugins/store';

export const userWorkflows = {
  login: (dispatch: AppDispatch, arg: IUserLoginInput) => {
    dispatch(userActions.setLoginType('login'));
    dispatch(userThunks.loginUser(arg))
      .unwrap()
      .then((userAuth) => {
        dispatch(
          userThunks.verifyUser({
            token: userAuth.token,
          }),
        );
      })
      .catch(console.error);
  },
  register: (dispatch: AppDispatch, arg: IUserRegisterInput) => {
    dispatch(userActions.setLoginType('register'));
    dispatch(userThunks.registerUser(arg))
      .unwrap()
      .then((userAuth) => {
        dispatch(
          userThunks.verifyUser({
            token: userAuth.token,
          }),
        );
      })
      .catch(console.error);
  },
};
