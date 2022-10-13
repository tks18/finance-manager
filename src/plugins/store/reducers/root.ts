import { combineReducers } from '@reduxjs/toolkit';
import { themeReducer } from './theme';
import { settingsReducer } from './settings';

export const rootReducer = combineReducers({
  theme: themeReducer,
  settings: settingsReducer,
});
