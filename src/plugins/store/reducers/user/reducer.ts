import { createSlice } from '@reduxjs/toolkit';
import * as userThunks from './thunks';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

import type { PayloadAction } from '@reduxjs/toolkit';
import type { IRequestError, IUserDoc } from '@plugins/backend/types';

interface IUserState {
  loginType: 'login' | 'register' | null;
  authenticated: boolean;
  verified: boolean;
  token: string | null;
  doc: IUserDoc | null;
  loading: {
    register: boolean;
    login: boolean;
    get: boolean;
    verify: boolean;
  };
  errors: {
    register: IRequestError | null;
    login: IRequestError | null;
    get: IRequestError | null;
    verify: IRequestError | null;
  };
}

const initialState: IUserState = {
  loginType: null,
  authenticated: false,
  verified: false,
  token: null,
  doc: null,
  loading: {
    register: false,
    login: false,
    get: false,
    verify: false,
  },
  errors: {
    register: null,
    login: null,
    get: null,
    verify: null,
  },
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setLoginType: (state, action: PayloadAction<IUserState['loginType']>) => {
      state.loginType = action.payload;
    },
    signOut: (state) => {
      state.authenticated = initialState.authenticated;
      state.doc = initialState.doc;
      state.errors = initialState.errors;
      state.loading = initialState.loading;
      state.token = initialState.token;
      state.verified = initialState.verified;
    },
  },
  extraReducers: (builder) => {
    // Register Handlers
    builder.addCase(userThunks.registerUser.pending, (state) => {
      state.loading.register = true;
    });
    builder.addCase(userThunks.registerUser.fulfilled, (state, { payload }) => {
      state.loading.register = false;
      state.errors.register = null;
      state.authenticated = true;
      state.token = payload.token;
      state.doc = {
        _id: payload._id,
        email: payload.email,
        name: payload.name,
      };
    });
    builder.addCase(userThunks.registerUser.rejected, (state, action) => {
      if (action.payload) {
        state.errors.register = action.payload;
      } else {
        const error: IRequestError = {
          status: 500,
          message: action.error.message || 'Unknown Error Caught in Handler',
          errorname: action.error.name || 'InternalError',
        };
        state.errors.register = error;
      }
      state.loading.register = false;
    });

    // Login Handlers
    builder.addCase(userThunks.loginUser.pending, (state) => {
      state.loading.login = true;
    });
    builder.addCase(userThunks.loginUser.fulfilled, (state, { payload }) => {
      state.loading.login = false;
      state.errors.login = null;
      state.authenticated = true;
      state.token = payload.token;
      state.doc = {
        _id: payload._id,
        email: payload.email,
        name: payload.name,
      };
    });
    builder.addCase(userThunks.loginUser.rejected, (state, action) => {
      if (action.payload) {
        state.errors.login = action.payload;
      } else {
        const error: IRequestError = {
          status: 500,
          message: action.error.message || 'Unknown Error Caught in Handler',
          errorname: action.error.name || 'InternalError',
        };
        state.errors.login = error;
      }
      state.loading.login = false;
    });

    // Get Handlers
    builder.addCase(userThunks.getUserDoc.pending, (state) => {
      state.loading.get = true;
    });
    builder.addCase(userThunks.getUserDoc.fulfilled, (state, { payload }) => {
      state.loading.get = false;
      state.errors.get = null;
      state.doc = payload;
    });
    builder.addCase(userThunks.getUserDoc.rejected, (state, action) => {
      if (action.payload) {
        state.errors.get = action.payload;
      } else {
        const error: IRequestError = {
          status: 500,
          message: action.error.message || 'Unknown Error Caught in Handler',
          errorname: action.error.name || 'InternalError',
        };
        state.errors.get = error;
      }
      state.loading.get = false;
    });

    // Verify Handlers
    builder.addCase(userThunks.verifyUser.pending, (state) => {
      state.loading.verify = true;
    });
    builder.addCase(userThunks.verifyUser.fulfilled, (state, { payload }) => {
      state.loading.verify = false;
      state.errors.verify = null;
      state.verified = true;
    });
    builder.addCase(userThunks.verifyUser.rejected, (state, action) => {
      if (action.payload) {
        state.errors.verify = action.payload;
      } else {
        const error: IRequestError = {
          status: 500,
          message: action.error.message || 'Unknown Error Caught in Handler',
          errorname: action.error.name || 'InternalError',
        };
        state.errors.verify = error;
      }
      state.loading.verify = false;
    });
  },
});

const persistConfig = {
  key: 'user',
  storage,
  blacklist: ['loading', 'errors'],
};

export const userActions = userSlice.actions;
export const userReducer = persistReducer<ReturnType<typeof userSlice.reducer>>(
  persistConfig,
  userSlice.reducer,
);
export * as userThunks from './thunks';
