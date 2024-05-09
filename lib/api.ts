import { Params } from "./useAsync";

const BASE_URL = "https://bootcamp-api.codeit.kr/api";

export interface SampleUser {
  id: number;
  name: string;
  email: string;
  profileImageSource: string;
}

interface SampleFolderOwner {
  id: number;
  name: string;
  profileImageSource: string;
}

export interface SampleLink {
  id: number;
  createdAt: string;
  url: string;
  title: string;
  description: string;
  imageSource: string;
}

export interface SampleFolder {
  id: number;
  name: string;
  owner: SampleFolderOwner;
  links?: SampleLink[];
}

interface SampleFolderResponse {
  folder: SampleFolder;
}

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

interface Response<Data> {
  data: Data[];
}

export async function getUser(): Promise<SampleUser> {
  const response = await fetch(`${BASE_URL}/sample/user`);
  if (!response.ok) {
    throw new Error("잘못된 요청입니다.");
  }

  const user: SampleUser = await response.json();

  return user;
}

export async function getFolder(): Promise<SampleFolder> {
  const response = await fetch(`${BASE_URL}/sample/folder`);
  if (!response.ok) {
    throw new Error("잘못된 요청입니다.");
  }

  const data: SampleFolderResponse = await response.json();
  const { folder } = data;

  return folder;
}

export async function getUserById({ userId }: Params): Promise<UserData> {
  const response = await fetch(`${BASE_URL}/users/${userId}`);
  if (!response.ok) {
    throw new Error("잘못된 요청입니다.");
  }

  const user: Response<UserData> = await response.json();
  const { data } = user;

  return data[0];
}

export async function getFoldersByUserId({
  userId,
}: Params): Promise<FolderData[]> {
  const response = await fetch(`${BASE_URL}/users/${userId}/folders`);
  if (!response.ok) {
    throw new Error("잘못된 요청입니다.");
  }

  const folders: Response<FolderData> = await response.json();
  const { data } = folders;

  return data;
}

export async function getLinksByUserIdAndFolderId({
  userId,
  folderId,
}: Params): Promise<LinkData[]> {
  let url = `${BASE_URL}/users/${userId}/links`;
  if (folderId) {
    url += `?folderId=${folderId}`;
  }

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("잘못된 요청입니다.");
  }

  const links: Response<LinkData> = await response.json();
  const { data } = links;

  return data;
}
