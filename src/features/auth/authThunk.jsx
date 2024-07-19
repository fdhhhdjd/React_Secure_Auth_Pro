import { getAxios, postAxios } from '@/services';
import { handleError } from '@/utils';
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
      return rejectWithValue(handleError(error));
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
      return rejectWithValue(handleError(error));
    }
  }
);

export const registerUser = createAsyncThunk(
  `${AuthRedux.Auth}/register`,
  async (data, { rejectWithValue }) => {
    try {
      const response = await postAxios('/auth/register', data);

      return response;
    } catch (error) {
      return rejectWithValue(handleError(error));
    }
  }
);

export const senOTPGeneral = createAsyncThunk(
  `${AuthRedux.Auth}/otp`,
  async (data, { rejectWithValue }) => {
    try {
      const response = await postAxios('/auth/verify-otp', data);

      return response;
    } catch (error) {
      return rejectWithValue(handleError(error));
    }
  }
);

export const verificationEmail = createAsyncThunk(
  `${AuthRedux.Auth}/verificationEmail`,
  async (params, { rejectWithValue }) => {
    try {
      const response = await getAxios('/auth/veri-account', params);

      return response;
    } catch (error) {
      return rejectWithValue(handleError(error));
    }
  }
);

export const forgetPass = createAsyncThunk(
  `${AuthRedux.Auth}/forget`,
  async (data, { rejectWithValue }) => {
    try {
      const response = await postAxios('/auth/forget', data);

      return response;
    } catch (error) {
      return rejectWithValue(handleError(error));
    }
  }
);
