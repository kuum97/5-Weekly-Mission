import { useCallback, useEffect, useState } from "react";

const useAsync = (asyncFunc, userId, folderId) => {
  const [isLoading, setIsLoading] = useState(false);
  const [value, setValue] = useState({});
  const [error, setError] = useState(null);

  const fetchData = useCallback(async () => {
    setIsLoading(true);
    try {
      let result;
      if (userId && folderId) {
        result = await asyncFunc(userId, folderId);
      } else if (userId) {
        result = await asyncFunc(userId);
      } else {
        result = await asyncFunc();
      }
      setValue(result);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  }, [asyncFunc, userId, folderId]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { value, error, isLoading };
};

export default useAsync;
