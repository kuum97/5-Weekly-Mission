import { Params } from "@/api";
import { useCallback, useEffect, useState } from "react";

export interface CustomAsyncReturns<T> {
  isLoading: boolean;
  value: T | null;
  error: Error | null;
}

type AsyncFunc<T> = (params: Params) => Promise<T>;

const useAsync = <T>(
  asyncFunc: AsyncFunc<T>,
  params: Params
): CustomAsyncReturns<T> => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [value, setValue] = useState<T | null>(null);
  const [error, setError] = useState<Error | null>(null);

  const fetchData = useCallback(async () => {
    setIsLoading(true);
    try {
      const result = await asyncFunc(params);
      setValue(result);
    } catch (error: unknown) {
      if (error instanceof Error) {
        setError(error);
      }
    } finally {
      setIsLoading(false);
    }
  }, [asyncFunc, params]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { value, error, isLoading };
};

export default useAsync;
