import { postAxios } from '@/services';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const AuthRedux = {
  Auth: 'auth'
};

export const loginUser = createAsyncThunk(
  `${AuthRedux.Auth}/login`,
  async (data, { rejectWithValue }) => {
    try {
      const response = await postAxios('/auth/login-identifier', data);
      return response;
    } catch (error) {
      return rejectWithValue({
        errorMessage: 'An error occurred',
        originalError: error?.response?.data
      });
    }
  }
);

export const loginGoogleUser = createAsyncThunk(
  `${AuthRedux.Auth}/loginGoogle`,
  async (data, { rejectWithValue }) => {
    try {
      const response = await postAxios('/auth/login-social', data);
      return response;
    } catch (error) {
      return rejectWithValue({
        errorMessage: 'An error occurred',
        originalError: error?.response?.data
      });
    }
  }
);

export const resignerUser = createAsyncThunk(
  `${AuthRedux.Auth}/register`,
  async (data, { rejectWithValue }) => {
    try {
      const response = await postAxios('/auth/register', data);

      return response;
    } catch (error) {
      return rejectWithValue({
        errorMessage: 'An error occurred',
        originalError: error
      });
    }
  }
);
