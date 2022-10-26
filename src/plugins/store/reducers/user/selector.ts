import { RootState } from '@plugins/store';

export const userSelectors = {
  userLoginType: (state: RootState) => state.user.loginType,
  userToken: (state: RootState) => state.user.token,
  userDoc: (state: RootState) => state.user.doc,
  loadingStates: (state: RootState) => state.user.loading,
  errorStates: (state: RootState) => state.user.errors,
  isAuthenticated: (state: RootState) => state.user.authenticated,
  isVerified: (state: RootState) => state.user.verified,
};
