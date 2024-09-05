import { useCallback, useState } from "react";

export const useHttp = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState({})

  const request = useCallback(async (url, method = "GET", body = null, headers = {"Content-Type": "application/json"}) => {
    setLoading(true);

    try {
      let res = await fetch(url, { method, body, headers });
      console.log(res);

      if (!res.ok) {
        throw new Error(`Could not fetch ${url}, status: ${res.status}`);
      }

      const data = await res.json();

      setLoading(false);
      setData(data)

      return data;
    } catch (e) {
      setLoading(false);
      setError(e.message);
    }
  }, []); 

  const clearError = useCallback(() => setError(null), []);

  return { loading, error, request, clearError, data };
};