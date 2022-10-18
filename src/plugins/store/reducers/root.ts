import { combineReducers } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import { themeReducer } from './theme';
import { settingsReducer } from './settings';
import { userReducer } from './user';

const combinedReducer = combineReducers({
  theme: themeReducer,
  settings: settingsReducer,
  user: userReducer,
});

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['settings', 'theme', 'user'],
};

export const rootReducer = persistReducer<ReturnType<typeof combinedReducer>>(
  persistConfig,
  combinedReducer,
);
