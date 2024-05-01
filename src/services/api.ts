const BASE_URL = "https://bootcamp-api.codeit.kr/api";

interface UserData {
  id: number;
  created_at: string;
  name: string;
  image_source: string;
  email: string;
  auth_id: string;
}

interface UserResponse {
  data: UserData[];
}

interface FolderData {
  id: number;
  created_at: string;
  name: string;
  user_id: number;
  favorite: boolean;
  link: {
    count: number;
  };
}

interface FolderResponse {
  data: FolderData[];
}

interface LinkData {
  id: number;
  created_at: string;
  updated_at?: string;
  url: string;
  title: string;
  description?: string;
  image_source?: string;
  folder_id: number;
}

interface LinkResponse {
  data: LinkData[];
}

export async function getUser() {
  const response = await fetch(`${BASE_URL}/sample/user`);
  const user = await response.json();

  if (!response.ok) {
    throw new Error("잘못된 요청입니다.");
  }
  return user;
}

export async function getFolder() {
  const response = await fetch(`${BASE_URL}/sample/folder`);
  const data = await response.json();
  const { folder } = data;

  if (!response.ok) {
    throw new Error("잘못된 요청입니다.");
  }
  return folder;
}

export async function getUserById(userId: number): Promise<UserData> {
  const response = await fetch(`${BASE_URL}/users/${userId}`);
  const user: UserResponse = await response.json();
  const { data } = user;

  if (!response.ok) {
    throw new Error("잘못된 요청입니다.");
  }
  return data[0];
}

export async function getFoldersByUserId(
  userId: number
): Promise<FolderData[]> {
  const response = await fetch(`${BASE_URL}/users/${userId}/folders`);
  const folders: FolderResponse = await response.json();
  const { data } = folders;

  if (!response.ok) {
    throw new Error("잘못된 요청입니다.");
  }
  return data;
}

export async function getLinksByUserIdAndFolderId(
  userId: number,
  folderId?: number
): Promise<LinkData[]> {
  let url = `${BASE_URL}/users/${userId}/links`;
  if (folderId) {
    url += `?folderId=${folderId}`;
  }
  const response = await fetch(url);
  const links: LinkResponse = await response.json();
  const { data } = links;

  if (!response.ok) {
    throw new Error("잘못된 요청입니다.");
  }
  return data;
}
