import { combineReducers } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import { themeReducer } from './theme';
import { settingsReducer } from './settings';
import { userReducer } from './user';
import { sessionReducer } from './session';

const combinedReducer = combineReducers({
  theme: themeReducer,
  settings: settingsReducer,
  user: userReducer,
  session: sessionReducer,
});

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['settings', 'theme', 'user', 'session'],
};

export const rootReducer = persistReducer<ReturnType<typeof combinedReducer>>(
  persistConfig,
  combinedReducer,
);
