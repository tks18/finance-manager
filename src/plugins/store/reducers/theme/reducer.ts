import { createSlice } from '@reduxjs/toolkit';
import common from '@mui/material/colors/common';

interface IThemeState {
  palette: {
    mode: 'dark' | 'light';
    primary: {
      main: string;
      contrastText: string;
    };
    secondary: {
      main: string;
      contrastText: string;
    };
    error: { main: string; contrastText: string };
    info: { main: string; contrastText: string };
    success: { main: string; contrastText: string };
    warning: { main: string; contrastText: string };
  };
}

const initialState: IThemeState = {
  palette: {
    mode: 'dark',
    primary: {
      main: '#9c27b0',
      contrastText: common.white,
    },
    secondary: {
      main: '#AE84B2',
      contrastText: common.white,
    },
    error: { main: '#FF5252', contrastText: common.white },
    info: { main: '#2196F3', contrastText: common.white },
    success: { main: '#4CAF50', contrastText: common.white },
    warning: { main: '#FFC107', contrastText: common.black },
  },
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    updateMode(state) {
      state.palette.mode = state.palette.mode === 'light' ? 'dark' : 'light';
    },
  },
});

export const themeActions = themeSlice.actions;
export const themeReducer = themeSlice.reducer;
