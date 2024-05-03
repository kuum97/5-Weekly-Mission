import { useCallback, useEffect, useState } from "react";
export interface CustomAsyncReturns<T> {
  isLoading: boolean;
  value: T | null;
  error: Error | null;
}

type asyncFunc<T> = (userId?: number, folderId?: number) => Promise<T>;

type asyncFuncNoArgs<T> = () => Promise<T>;

const useAsync = <T>(
  asyncFunc: asyncFuncNoArgs<T> | asyncFunc<T>,
  userId?: number,
  folderId?: number
): CustomAsyncReturns<T> => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [value, setValue] = useState<T | null>(null);
  const [error, setError] = useState<Error | null>(null);

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
    } catch (error: unknown) {
      if (error instanceof Error) {
        setError(error);
      }
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
