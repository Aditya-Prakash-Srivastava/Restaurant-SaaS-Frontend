import axios from 'axios';
import config from '../config/index.js';
import { APP_CONSTANTS } from '../constants/appConstants.js';

/**
 * Standard Axios API Client
 * Includes base configuration, request headers, and interceptors for auth tokens and errors.
 */
const apiClient = axios.create({
  baseURL: config.api.baseUrl,
  timeout: config.api.timeout,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
  withCredentials: true,
});

// Request Interceptor: Attach Bearer token if stored
apiClient.interceptors.request.use(
  (requestConfig) => {
    const token = localStorage.getItem(APP_CONSTANTS.STORAGE_KEYS.AUTH_TOKEN);
    if (token) {
      requestConfig.headers.Authorization = `Bearer ${token}`;
    }
    return requestConfig;
  },
  (error) => Promise.reject(error)
);

// Response Interceptor: Standardize error responses
apiClient.interceptors.response.use(
  (response) => response.data,
  (error) => {
    const formattedError = {
      message:
        error.response?.data?.message ||
        error.message ||
        'An unexpected network error occurred.',
      statusCode: error.response?.status || 500,
      data: error.response?.data || null,
    };

    // Handle token expiration or unauthorized access
    if (error.response?.status === 401) {
      localStorage.removeItem(APP_CONSTANTS.STORAGE_KEYS.AUTH_TOKEN);
      // Optional: window.location.href = APP_ROUTES.LOGIN;
    }

    return Promise.reject(formattedError);
  }
);

export default apiClient;

