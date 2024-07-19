import {
  AuthRedux,
  loginGoogleUser,
  loginUser,
  registerUser,
  senOTPGeneral
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
      .addCase(registerUser.pending, state => {
        state.isLoading = true;
      })
      .addCase(registerUser.fulfilled, state => {
        state.isLoading = false;
      })
      //* OTP
      .addCase(senOTPGeneral.pending, (state, action) => {
        state.isLoading = true;
        setItem(
          USER_KEYS.USER_TOKEN,
          encryptAndStoreKey(action?.payload?.metadata?.accessToken)
        );
      })
      .addCase(senOTPGeneral.fulfilled, state => {
        state.isLoading = false;
      })
      //* Handle Rejected Actions
      .addMatcher(
        action =>
          action.type.startsWith(`${AuthRedux.Auth}/`) &&
          action.type.endsWith('/rejected'),
        (state, action) => {
          if (!action?.payload?.showError) {
            showToastError(action?.payload?.originalError?.message);
          }
          state.error = action?.payload?.originalError;
          state.isLoading = false;
        }
      );
  }
});

export const { clearAllInit, clearLoading } = authSlice.actions;

export default authSlice.reducer;
