export interface SampleUser {
  id: number;
  name: string;
  email: string;
  profileImageSource: string;
}

export interface UserData {
  id: number;
  created_at: string;
  name: string;
  image_source: string;
  email: string;
  auth_id: string;
}

export interface UserDataProp {
  user: UserData | null;
}
