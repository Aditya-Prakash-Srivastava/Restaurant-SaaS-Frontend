/**
 * Centralized Backend API Endpoints
 * Freezes object to prevent accidental runtime mutation.
 */
export const API_ENDPOINTS = Object.freeze({
  HEALTH: '/health',
  AUTH: {
    LOGIN: '/auth/login',
    REGISTER: '/auth/register',
    LOGOUT: '/auth/logout',
    ME: '/auth/me',
    REFRESH: '/auth/refresh-token',
  },
  USERS: '/users',
});
