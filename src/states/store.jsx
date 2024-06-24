import loggerMiddleware from 'redux-logger';

import { APP_NODE } from '@/constants/appConstants';
import authSlice from '@/features/auth/authSlice';

import { configureStore } from '@reduxjs/toolkit';

const shouldEnvironment = process.env.NODE_APP === APP_NODE.dev;

const middlewares = [];

if (shouldEnvironment) {
  middlewares.push(loggerMiddleware);
}

export const store = configureStore({
  reducer: {
    auth: authSlice
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({ serializableCheck: true }).concat(middlewares),
  devTools: shouldEnvironment
});
