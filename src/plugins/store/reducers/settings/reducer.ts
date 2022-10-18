import { createSlice } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

import type { PayloadAction } from '@reduxjs/toolkit';

interface ISettingsState {
  navbar: {
    toggle: boolean;
  };
}

const initialState: ISettingsState = {
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

const persistConfig = {
  key: 'settings',
  storage,
  blacklist: ['navbar'],
};

export const settingsActions = settingsSlice.actions;
export const settingsReducer = persistReducer<
  ReturnType<typeof settingsSlice.reducer>
>(persistConfig, settingsSlice.reducer);
