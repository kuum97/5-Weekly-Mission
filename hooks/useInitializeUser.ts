import { useEffect } from "react";
import { Params, getUser, getUserById } from "@/api";
import { useUserState } from "./useUserState";
import { SampleUser, UserData } from "@/types/user";

const login = async (userId: Params): Promise<SampleUser | UserData | null> => {
  try {
    let user;
    if (!userId) {
      user = await getUser();
    }
    user = await getUserById(userId);
    return user;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const useInitializeUser = (userId: Params) => {
  const { setUser } = useUserState();

  useEffect(() => {
    const initializeUser = async () => {
      const user = await login(userId);
      if (user) {
        setUser(user);
      }
    };

    initializeUser();
  }, [setUser, userId]);
};
