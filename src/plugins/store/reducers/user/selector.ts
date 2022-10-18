import { RootState } from '@plugins/store';

export const userSelectors = {
  userDoc: (state: RootState) => state.user.doc,
  loadingStates: (state: RootState) => state.user.loading,
  errorStates: (state: RootState) => state.user.errors,
  isAuthenticated: (state: RootState) => state.user.authenticated,
  isVerified: (state: RootState) => state.user.verified,
};
