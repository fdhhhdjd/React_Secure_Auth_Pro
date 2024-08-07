import {
  UserRedux,
  changePassword,
  getProfile,
  logoutUser
} from '@/features/users/userThunk';

import { USER_KEYS } from '@/configs';
import { handleErrorCode, removeItem } from '@/utils';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoading: false,
  error: null,
  user: null
};

const userSlice = createSlice({
  name: UserRedux.Users,
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
      //* Logout
      .addCase(logoutUser.fulfilled, (_, __) => {
        removeItem(USER_KEYS.USER_TOKEN);
        removeItem(USER_KEYS.USER_ID);
      })

      //* Profile
      .addCase(getProfile.pending, state => {
        state.isLoading = true;
      })
      .addCase(getProfile.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload.metadata;
      })

      //* Change Password
      .addCase(changePassword.pending, state => {
        state.isLoading = true;
      })
      .addCase(changePassword.fulfilled, (state, __) => {
        state.isLoading = false;
      })

      //* Handle Rejected Actions
      .addMatcher(
        action =>
          action.type.startsWith(`${UserRedux.Users}/`) &&
          action.type.endsWith('/rejected'),
        (state, action) => {
          handleErrorCode(action?.payload?.originalError?.code);
          state.error = action?.payload?.originalError;
          state.isLoading = false;
        }
      );
  }
});

export const { clearAllInit, clearLoading } = userSlice.actions;

export default userSlice.reducer;
