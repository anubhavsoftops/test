import { useState, useEffect } from "react";

function useFetch(url: string) {
  const [data, setData] = useState<any>(null);
  const [error, setError] = useState<null | any>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchData();
  }, [url]);

  const fetchData = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(url);
      const result = await response.json();
      setData(result);
    } catch (err) {
      setError(err);
    } finally {
      setIsLoading(false);
    }
  };
  return { data, error, isLoading };
}

export default useFetch;
