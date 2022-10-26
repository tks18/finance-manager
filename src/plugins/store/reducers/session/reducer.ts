import { createSlice } from '@reduxjs/toolkit';

import type { PayloadAction } from '@reduxjs/toolkit';

interface ISessionState {
  user: {
    verified: boolean;
  };
}

const initialState: ISessionState = {
  user: {
    verified: false,
  },
};

const sessionSlice = createSlice({
  name: 'session',
  initialState,
  reducers: {
    setUserVerifyStatus: (state, action: PayloadAction<boolean>) => {
      state.user.verified = action.payload;
    },
  },
});

export const sessionActions = sessionSlice.actions;
export const sessionReducer = sessionSlice.reducer;
