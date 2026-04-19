import { combineReducers } from '@reduxjs/toolkit';

import { authApi } from '@features/auth/api';
import { userReducer } from './userSlice';

export const rootReducer = combineReducers({
  user: userReducer,
  [authApi.reducerPath]: authApi.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;
