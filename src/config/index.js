/**
 * Centralized Application Configuration
 * Validates and exposes frontend environment variables.
 * Never access `import.meta.env` directly outside this file.
 */
const config = Object.freeze({
  env: import.meta.env.VITE_NODE_ENV || 'development',
  isProduction: import.meta.env.VITE_NODE_ENV === 'production',
  isDevelopment: import.meta.env.VITE_NODE_ENV !== 'production',

  app: {
    name: import.meta.env.VITE_APP_NAME || 'Restaurant SaaS',
    version: import.meta.env.VITE_APP_VERSION || '1.0.0',
  },

  api: {
    baseUrl: import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000/api/v1',
    timeout: parseInt(import.meta.env.VITE_API_TIMEOUT, 10) || 10000,
  },
});

export default config;

