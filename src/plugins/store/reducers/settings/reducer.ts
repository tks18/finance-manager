import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface IAppSettings {
  navbar: {
    toggle: boolean;
  };
}

const initialState: IAppSettings = {
  navbar: {
    toggle: false,
  },
};

const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    toggleNavBar: {
      reducer: (state, action: PayloadAction<boolean>) => {
        state.navbar.toggle = action.payload;
      },
      prepare: (toggle: boolean) => ({ payload: toggle }),
    },
  },
});

export const settingsActions = settingsSlice.actions;
export const settingsReducer = settingsSlice.reducer;
