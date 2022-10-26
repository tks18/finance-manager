import { RootState } from '@plugins/store';

export const sessionSelectors = {
  selectUserVerifyState: (state: RootState) => state.session.user.verified,
};
