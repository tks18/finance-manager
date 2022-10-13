import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from './reducers';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { createLogger } from 'redux-logger';

const config = {
  key: 'root',
  storage,
  whitelist: ['theme'],
};

const middlewares = [createLogger()];

const reducer = persistReducer<ReturnType<typeof rootReducer>>(
  config,
  rootReducer,
);

export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddlewares) =>
    getDefaultMiddlewares({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(middlewares),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
