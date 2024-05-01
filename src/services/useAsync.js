var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { useCallback, useEffect, useState } from "react";
const useAsync = (asyncFunc, userId, folderId) => {
    const [isLoading, setIsLoading] = useState(false);
    const [value, setValue] = useState({});
    const [error, setError] = useState(null);
    const fetchData = useCallback(() => __awaiter(void 0, void 0, void 0, function* () {
        setIsLoading(true);
        try {
            let result;
            if (userId && folderId) {
                result = yield asyncFunc(userId, folderId);
            }
            else if (userId) {
                result = yield asyncFunc(userId);
            }
            else {
                result = yield asyncFunc();
            }
            setValue(result);
        }
        catch (error) {
            setError(error);
        }
        finally {
            setIsLoading(false);
        }
    }), [asyncFunc, userId, folderId]);
    useEffect(() => {
        fetchData();
    }, [fetchData]);
    return { value, error, isLoading };
};
export default useAsync;
