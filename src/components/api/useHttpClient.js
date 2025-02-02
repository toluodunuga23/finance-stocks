import { useState, useCallback } from 'react';
import axios from 'axios'

const useHttpClient = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const sendRequest = useCallback(async (url, method = 'GET', data = null, headers = {}) => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios({
        url,
        method,
        data,
        headers,
      });

      setLoading(false);
      return response.data;
    } catch (err) {
      setLoading(false);
      setError(err.message || 'Something went wrong, please try again.');
      throw err;
    }
  }, []);

  const clearError = () => setError(null);

  return { loading, error, sendRequest, clearError };
};

export default useHttpClient;