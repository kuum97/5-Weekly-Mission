import { useEffect } from "react";
import { getUser } from "@/api";
import { useUserState } from "./useUserState";
import { SampleUser } from "@/types/user";

const login = async (): Promise<SampleUser | null> => {
  try {
    const user = await getUser();
    return user;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const useInitializeUser = () => {
  const { setUser } = useUserState();

  useEffect(() => {
    const initializeUser = async () => {
      const user = await login();
      if (user) {
        setUser(user);
      }
    };

    initializeUser();
  }, [setUser]);
};
