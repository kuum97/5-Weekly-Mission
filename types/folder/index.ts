import { SampleLink } from "@/types/link";

export interface SampleFolderOwner {
  id: number;
  name: string;
  profileImageSource: string;
}

export interface SampleFolder {
  id: number;
  name: string;
  owner: SampleFolderOwner;
  links?: SampleLink[];
}

export interface FolderData {
  id: number;
  created_at: string;
  name: string;
  user_id: number;
  favorite: boolean;
  link: {
    count: number;
  };
}
