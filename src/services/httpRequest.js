import axiosInstance from '@/lib/axiosInterceptor';

/**
 * Sends a GET request to the specified URL with optional parameters and configuration.
 * @param {string} url - The URL to send the GET request to.
 * @param {Object} params - Optional parameters to include in the request.
 * @param {Object} config - Optional configuration for the request.
 * @returns {Promise<any>} - A promise that resolves to the response data.
 */
export const getAxios = async (url, params = {}, config = {}) => {
  const response = await axiosInstance.get(url, { params, ...config });
  return response.data;
};

/**
 * Sends a POST request to the specified URL with optional data and configuration.
 * @param {string} url - The URL to send the POST request to.
 * @param {Object} data - Optional data to include in the request.
 * @param {Object} config - Optional configuration for the request.
 * @returns {Promise<any>} - A promise that resolves to the response data.
 */
export const postAxios = async (url, data = {}, config = {}) => {
  const response = await axiosInstance.post(url, data, config);
  return response.data;
};
