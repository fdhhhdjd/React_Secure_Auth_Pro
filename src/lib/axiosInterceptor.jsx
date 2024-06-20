import axios from 'axios';

import { HEADER_KEYS, USER_KEYS } from '@/configs';
import { TIME_CONSTANTS } from '@/constants';
import {
  decryptAndRetrieveKey,
  encryptAndStoreKey,
  generateDeviceId,
  getItem,
  removeItem,
  setItem,
} from '@/utils';

// Create an Axios instance
const axiosInstance = axios.create({
  baseURL: '/v1',
  timeout: TIME_CONSTANTS._15_SECONDS,
  withCredentials: true,
  headers: {
    Accept: 'application/json',
  },
});

// Function to ensure X-Device-Id header is always included
const ensureDeviceId = () => {
  let deviceId = getItem(HEADER_KEYS.DEVICE_ID);
  if (!deviceId) {
    deviceId = generateDeviceId(10); // Assuming this generates a random device ID
    setItem(HEADER_KEYS.DEVICE_ID, encryptAndStoreKey(deviceId));
  } else {
    deviceId = decryptAndRetrieveKey(deviceId);
  }
  return deviceId;
};

// Request interceptor
axiosInstance.interceptors.request.use(
  async (config) => {
    // Handle Authorization Token
    const encryptedToken = getItem(USER_KEYS.USER_TOKEN);
    if (encryptedToken) {
      const token = decryptAndRetrieveKey(encryptedToken);
      config.headers.Authorization = `Bearer ${token}`;
    }

    // Handle Device ID
    config.headers['X-Device-Id'] = ensureDeviceId();
    return config;
  },
  (error) => Promise.reject(error),
);

let isTokenRefreshing = false;
let refreshSubscribers = [];

// Function to renew token
const renewToken = async () => {
  try {
    const deviceId = ensureDeviceId(); // Ensure Device ID is included in the renewal request
    // Assuming you have an API endpoint for renewing the token
    const response = await axiosInstance.get('/auth/renew-token', {
      headers: {
        'X-Device-Id': deviceId,
      },
    });
    const newToken = response?.data?.metadata?.accessToken;
    return newToken;
  } catch (error) {
    console.error('Failed to renew token:', error);
    throw error;
  }
};

const onTokenRefreshed = (newToken) => {
  refreshSubscribers.forEach((callback) => callback(newToken));
  refreshSubscribers = [];
};

const addRefreshSubscriber = (callback) => {
  refreshSubscribers.push(callback);
};

// Clear user session and redirect to login
const handleTokenRenewalFailure = () => {
  removeItem(USER_KEYS.USER_TOKEN);
};

// Response interceptor
axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    if (
      error.response &&
      error.response.status === 401 &&
      !originalRequest._retry &&
      !originalRequest.url.includes('/auth')
    ) {
      if (!isTokenRefreshing) {
        isTokenRefreshing = true;
        originalRequest._retry = true;

        try {
          const newToken = await renewToken();
          axios.defaults.headers.common.Authorization = `Bearer ${newToken}`;
          onTokenRefreshed(newToken);
          isTokenRefreshing = false;
          // Retry the original request with the new token
          originalRequest.headers.Authorization = `Bearer ${newToken}`;
          originalRequest.headers['X-Device-Id'] = ensureDeviceId();
          return axiosInstance(originalRequest);
        } catch (tokenError) {
          isTokenRefreshing = false;
          handleTokenRenewalFailure();
          return Promise.reject(tokenError);
        }
      }

      return new Promise((resolve) => {
        addRefreshSubscriber((newToken) => {
          originalRequest.headers.Authorization = `Bearer ${newToken}`;
          originalRequest.headers['X-Device-Id'] = ensureDeviceId();
          resolve(axiosInstance(originalRequest));
        });
      });
    }
    return Promise.reject(error);
  },
);

export default axiosInstance;
