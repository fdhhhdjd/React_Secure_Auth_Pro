import {
  AuthRedux,
  loginGoogleUser,
  loginUser,
  resignerUser
} from '@/features/auth/authThunk';

import { USER_KEYS } from '@/configs';
import {
  encryptAndStoreKey,
  setItem,
  showToastError,
  showToastSuccess
} from '@/utils';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoading: false,
  error: null,
  user: null
};

const authSlice = createSlice({
  name: AuthRedux.Auth,
  initialState,
  reducers: {
    clearAllInit: state => {
      state.isLoading = false;
      state.error = null;
      state.user = null;
    },
    clearLoading: state => {
      state.isLoading = false;
    }
  },
  extraReducers: builder => {
    builder
      //* Login
      .addCase(loginUser.pending, state => {
        state.isLoading = true;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.isLoading = false;
        showToastSuccess('Sign in successfully');
        setItem(
          USER_KEYS.USER_TOKEN,
          encryptAndStoreKey(action?.payload?.metadata?.accessToken)
        );
      })
      //* Google Login
      .addCase(loginGoogleUser.pending, state => {
        state.isLoading = true;
      })
      .addCase(loginGoogleUser.fulfilled, (state, action) => {
        state.isLoading = false;
        showToastSuccess('Sign in with Google successfully');
        setItem(
          USER_KEYS.USER_TOKEN,
          encryptAndStoreKey(action?.payload?.metadata?.accessToken)
        );
      })
      //* Register
      .addCase(resignerUser.pending, state => {
        state.isLoading = true;
      })
      .addCase(resignerUser.fulfilled, state => {
        state.isLoading = false;
      })
      //* Handle Rejected Actions
      .addMatcher(
        action => action.type.endsWith('/rejected'),
        (state, action) => {
          showToastError(action?.payload?.originalError?.message);
          state.error = action?.payload?.originalError;
          state.isLoading = false;
        }
      );
  }
});

export const { clearAllInit, clearLoading } = authSlice.actions;

export default authSlice.reducer;
