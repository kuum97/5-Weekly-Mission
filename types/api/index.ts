// 유저 데이터
export interface UserData {
  id: number;
  created_at: string;
  name: string;
  image_source: string;
  email: string;
  auth_id: string;
}

export interface NewUserData {
  id: number;
  created_at: string;
  name: string;
  image_source: string;
  email: string;
  auth_id: string;
}

// 폴더 데이터
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

export interface NewFolderData {
  id: number;
  created_at: string;
  name: string;
  user_id: number;
  favorite: boolean;
}

// 링크 데이터

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

// 리스폰스, 파라미터, 프로퍼티

export interface Response<Data> {
  data: Data[];
}

export interface UserDataProp {
  user: UserData | null;
}

export interface Params {
  [key: string]: number | undefined;
}
