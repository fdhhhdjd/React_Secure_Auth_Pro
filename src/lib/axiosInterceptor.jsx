import axios from 'axios';

import { HEADER_KEYS, USER_KEYS } from '@/configs';
import { TIME_CONSTANTS } from '@/constants';
import {
  decryptAndRetrieveKey,
  encryptAndStoreKey,
  generateDeviceId,
  getItem,
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
    let deviceId = getItem(HEADER_KEYS.DEVICE_ID);
    if (!deviceId) {
      deviceId = generateDeviceId(10); // Assuming this generates a random device ID
      setItem(HEADER_KEYS.DEVICE_ID, encryptAndStoreKey(deviceId));
    } else {
      deviceId = decryptAndRetrieveKey(deviceId);
    }
    config.headers['X-Device-Id'] = deviceId;
    return config;
  },
  (error) => Promise.reject(error),
);

export default axiosInstance;
