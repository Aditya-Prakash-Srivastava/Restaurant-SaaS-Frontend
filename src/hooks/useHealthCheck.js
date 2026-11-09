import { useState, useEffect, useCallback } from 'react';
import { healthService } from '../services/health.service.js';

/**
 * Custom hook to monitor and refresh backend health
 */
export const useHealthCheck = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchHealth = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await healthService.checkBackendHealth();
      setData(response.data);
    } catch (err) {
      setError(err.message || 'Unable to connect to backend server');
      setData(null);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchHealth();
  }, [fetchHealth]);

  return {
    healthData: data,
    isLoading: loading,
    error,
    refresh: fetchHealth,
  };
};
