import { AuthRedux, loginUser } from '@/features/auth/authThunk';

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoading: false,
  error: null,
  dataAuth: null
};

const authSlice = createSlice({
  name: AuthRedux.Auth,
  initialState,
  reducers: {
    clearAllInit: state => {
      state.isLoading = false;
      state.error = null;
      state.dataAuth = null;
    }
  },
  extraReducers: builder => {
    //* Login
    builder.addCase(loginUser.pending, (state, _) => {
      state.isLoading = true;
    });

    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.isLoading = false;
      state.dataAuth = action.payload;
    });

    builder.addMatcher(
      action => action.type.endsWith('/rejected'),
      (state, action) => {
        state.error = action.payload;
      }
    );
  }
});

export const { clearAllInit } = authSlice.actions;

export default authSlice.reducer;
