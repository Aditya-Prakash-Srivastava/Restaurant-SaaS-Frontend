import apiClient from './apiClient.js';
import { API_ENDPOINTS } from '../constants/apiEndpoints.js';

/**
 * Health Service
 * Fetches server health status from backend
 */
export const healthService = {
  /**
   * Check backend health and database connectivity
   * @returns {Promise<object>}
   */
  checkBackendHealth: async () => {
    return await apiClient.get(API_ENDPOINTS.HEALTH);
  },
};
