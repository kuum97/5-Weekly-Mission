import { FolderData, LinkData, NewFolderData, UserData } from "@/types/api";
import { create } from "zustand";

interface StoreStateProps {
  user: UserData | null;
  setUser: (user: UserData) => void;
  folders: NewFolderData[] | FolderData[] | null;
  setFolders: (folders: NewFolderData[] | FolderData[]) => void;
  links?: LinkData[];
  setLinks: (links: LinkData[]) => void;
  isLoadingWindow: boolean;
  setIsLoadingWindow: (isLoadingWindow: boolean) => void;
}

export const useStoreState = create<StoreStateProps>((set) => ({
  user: null,
  setUser: (user: UserData) => set({ user }),
  folders: null,
  setFolders: (folders: NewFolderData[] | FolderData[]) => set({ folders }),
  links: [],
  setLinks: (links: LinkData[]) => set({ links }),
  isLoadingWindow: true,
  setIsLoadingWindow: (isLoadingWindow: boolean) => set({ isLoadingWindow }),
}));
