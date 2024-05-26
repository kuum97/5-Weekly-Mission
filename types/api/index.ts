export interface UserData {
  id: number;
  created_at: string;
  name: string;
  image_source: string;
  email: string;
  auth_id: string;
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

export interface LinkData {
  id: number;
  created_at: string;
  updated_at?: string;
  url: string;
  title: string;
  description?: string;
  image_source?: string;
  folder_id: number;
}

export interface Response<Data> {
  data: Data[];
}

export interface UserDataProp {
  user: UserData | null;
}

export interface Params {
  [key: string]: number | undefined;
}
