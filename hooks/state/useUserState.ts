import { create } from "zustand";
import { SampleUser, UserData } from "@/types/user";

interface UserStateProps {
  user: UserData | null;
  setUser: (user: UserData) => void;
}

export const useUserState = create<UserStateProps>((set) => ({
  user: null,
  setUser: (user: UserData) => set({ user }),
}));
