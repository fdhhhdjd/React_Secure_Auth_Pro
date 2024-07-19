import {
  AuthRedux,
  loginGoogleUser,
  loginUser,
  registerUser,
  senOTPGeneral,
  verificationEmail
} from '@/features/auth/authThunk';

import { USER_KEYS } from '@/configs';
import {
  encryptAndStoreKey,
  handleErrorCode,
  setItem,
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
        setItem(
          USER_KEYS.USER_TOKEN,
          encryptAndStoreKey(action?.payload?.metadata?.accessToken)
        );
        setItem(USER_KEYS.USER_ID, action?.payload?.metadata?.id);
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
        setItem(USER_KEYS.USER_ID, action?.payload?.metadata?.id);
      })
      //* Register
      .addCase(registerUser.pending, state => {
        state.isLoading = true;
      })
      .addCase(registerUser.fulfilled, state => {
        state.isLoading = false;
        showToastSuccess('Please check your email to verify your account');
      })
      //* OTP
      .addCase(senOTPGeneral.pending, state => {
        state.isLoading = true;
      })
      .addCase(senOTPGeneral.fulfilled, (state, action) => {
        state.isLoading = false;
        setItem(
          USER_KEYS.USER_TOKEN,
          encryptAndStoreKey(action?.payload?.metadata?.accessToken)
        );
        setItem(USER_KEYS.USER_ID, action?.payload?.metadata?.id);
      })

      //* Verification Email
      .addCase(verificationEmail.pending, state => {
        state.isLoading = true;
      })
      .addCase(verificationEmail.fulfilled, (state, action) => {
        state.isLoading = false;
        setItem(
          USER_KEYS.USER_TOKEN,
          encryptAndStoreKey(action?.payload?.metadata?.accessToken)
        );
        setItem(USER_KEYS.USER_ID, action?.payload?.metadata?.id);
      })

      //* Handle Rejected Actions
      .addMatcher(
        action =>
          action.type.startsWith(`${AuthRedux.Auth}/`) &&
          action.type.endsWith('/rejected'),
        (state, action) => {
          handleErrorCode(action?.payload?.originalError?.code);
          state.error = action?.payload?.originalError;
          state.isLoading = false;
        }
      );
  }
});

export const { clearAllInit, clearLoading } = authSlice.actions;

export default authSlice.reducer;
