import { getAxios, postAxios } from '@/services';
import { handleError } from '@/utils';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const UserRedux = {
  Users: 'users'
};

export const logoutUser = createAsyncThunk(
  `${UserRedux.Users}/logout`,
  async (_, { rejectWithValue }) => {
    try {
      const response = await getAxios('/user/logout');
      return response;
    } catch (error) {
      return rejectWithValue(handleError(error));
    }
  }
);

export const getProfile = createAsyncThunk(
  `${UserRedux.Users}/profile`,
  async (data, { rejectWithValue }) => {
    try {
      const response = await getAxios(`/user/profile/${data.userId}`);
      return response;
    } catch (error) {
      return rejectWithValue(handleError(error));
    }
  }
);

export const twoFactorAuth = createAsyncThunk(
  `${UserRedux.Users}/two-factor`,
  async (data, { rejectWithValue }) => {
    try {
      const response = await postAxios('/user/enable-tow-factor', data);
      return response;
    } catch (error) {
      return rejectWithValue(handleError(error));
    }
  }
);

export const changePassword = createAsyncThunk(
  `${UserRedux.Users}/change-password`,
  async (data, { rejectWithValue }) => {
    try {
      const response = await postAxios('/user/change-pass', data);
      return response;
    } catch (error) {
      return rejectWithValue(handleError(error));
    }
  }
);
