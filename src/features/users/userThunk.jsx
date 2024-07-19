import { getAxios } from '@/services';
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
      return rejectWithValue({
        errorMessage: 'An error occurred',
        originalError: error?.response?.data
      });
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
      return rejectWithValue({
        errorMessage: 'An error occurred',
        originalError: error?.response?.data
      });
    }
  }
);
