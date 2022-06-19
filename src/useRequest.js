import { useCallback, useEffect, useState } from "react"
import axios from "./axios";

export const useRequest = (url) => {
  const [movies, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async() => {
    setLoading(true)
    try {
      const request = await axios.get(url);
      setData(request.data.results)
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [url]);

  return {
    movies,
    loading,
    error
  }
}