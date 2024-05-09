import { useCallback, useEffect, useState } from "react";
export interface CustomAsyncReturns<T> {
  isLoading: boolean;
  value: T | null;
  error: Error | null;
}

export interface Params {
  userId?: number;
  folderId?: number;
}

type AsyncFunc<T> = (params: Params) => Promise<T>;

const useAsync = <T>(
  asyncFunc: AsyncFunc<T>,
  userId?: Params["userId"],
  folderId?: Params["folderId"]
): CustomAsyncReturns<T> => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [value, setValue] = useState<T | null>(null);
  const [error, setError] = useState<Error | null>(null);

  const fetchData = useCallback(async () => {
    setIsLoading(true);
    try {
      let result;
      const params: Params = {};
      if (userId !== undefined) params.userId = userId;
      if (folderId !== undefined) params.folderId = folderId;

      result = await asyncFunc(params);
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
