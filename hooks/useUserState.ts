import { create } from "zustand";
import { SampleUser } from "@/types/user";

interface UserStateProps {
  user: SampleUser | null;
  setUser: (user: SampleUser) => void;
}

export const useUserState = create<UserStateProps>((set) => ({
  user: null,
  setUser: (user: SampleUser) => set({ user }),
}));
