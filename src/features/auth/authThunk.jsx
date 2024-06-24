import { createAsyncThunk } from '@reduxjs/toolkit';

export const AuthRedux = {
  Auth: 'auth'
};

export const loginUser = createAsyncThunk(
  `${AuthRedux.Auth}/login`,
  async (data, { rejectWithValue }) => {
    try {
      return {
        metadata: data
      };
    } catch (error) {
      return rejectWithValue({
        errorMessage: 'An error occurred',
        originalError: error
      });
    }
  }
);
