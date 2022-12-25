import { userThunks, userActions } from '@plugins/store';
import { sessionActions } from '@plugins/store';
import { IUserLoginInput, IUserRegisterInput } from '@plugins/backend/types';

import type { AppDispatch } from '@plugins/store';
import type { NavigateFunction } from 'react-router-dom';

export const userWorkflows = {
  login: (dispatch: AppDispatch, arg: IUserLoginInput) => {
    dispatch(userActions.setLoginType('login'));
    dispatch(userThunks.loginUser(arg))
      .unwrap()
      .then((userAuth) =>
        dispatch(
          userThunks.verifyUser({
            token: userAuth.token,
          }),
        ).unwrap(),
      )
      .then(() => dispatch(sessionActions.setUserVerifyStatus(true)))
      .catch(() => {
        dispatch(userActions.signOut());
        dispatch(sessionActions.setUserVerifyStatus(false));
      });
  },
  register: (dispatch: AppDispatch, arg: IUserRegisterInput) => {
    dispatch(userActions.setLoginType('register'));
    dispatch(userThunks.registerUser(arg))
      .unwrap()
      .then((userAuth) =>
        dispatch(
          userThunks.verifyUser({
            token: userAuth.token,
          }),
        ).unwrap(),
      )
      .then(() => dispatch(sessionActions.setUserVerifyStatus(true)))
      .catch(() => {
        dispatch(userActions.signOut());
        dispatch(sessionActions.setUserVerifyStatus(false));
      });
  },
  signOut: (
    dispatch: AppDispatch,
    navigate: NavigateFunction,
    redirectRoute: string,
  ) => {
    dispatch(userActions.signOut());
    dispatch(sessionActions.setUserVerifyStatus(false));
    navigate(redirectRoute);
  },
};
