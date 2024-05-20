import { create } from "zustand";
import { SampleUser, UserData } from "@/types/user";

interface UserStateProps {
  user: SampleUser | UserData | null;
  setUser: (user: SampleUser | UserData) => void;
}

export const useUserState = create<UserStateProps>((set) => ({
  user: null,
  setUser: (user: SampleUser | UserData) => set({ user }),
}));
