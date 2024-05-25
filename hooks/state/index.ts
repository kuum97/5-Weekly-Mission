import { create } from "zustand";
import { UserData } from "@/types/user";
import { FolderData } from "@/types/folder";
import { LinkData } from "@/types/link";

interface StoreStateProps {
  user: UserData | null;
  setUser: (user: UserData) => void;
  folders: FolderData[] | null;
  setFolders: (folders: FolderData[]) => void;
  links: LinkData[] | null;
  setLinks: (links: LinkData[]) => void;
  isLoadingWindow: boolean;
  setIsLoadingWindow: (isLoadingWindow: boolean) => void;
}

export const useStoreState = create<StoreStateProps>((set) => ({
  user: null,
  setUser: (user: UserData) => set({ user }),
  folders: null,
  setFolders: (folders: FolderData[]) => set({ folders }),
  links: null,
  setLinks: (links: LinkData[]) => set({ links }),
  isLoadingWindow: true,
  setIsLoadingWindow: (isLoadingWindow: boolean) => set({ isLoadingWindow }),
}));
