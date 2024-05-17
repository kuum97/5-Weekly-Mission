import { SampleUser, UserData } from "@/types/user";
import { FolderData, SampleFolder } from "@/types/folder";
import { Response, SampleFolderResponse } from "@/types/response";
import { LinkData } from "@/types/link";
import { CODEIT_BASE_URL } from "@/constants";

export interface Params {
  [key: string]: number | null;
}

export async function getUser(): Promise<SampleUser> {
  const response = await fetch(`${CODEIT_BASE_URL}/sample/user`);
  if (!response.ok) {
    throw new Error("잘못된 요청입니다.");
  }

  const user: SampleUser = await response.json();

  return user;
}

export async function getFolder(): Promise<SampleFolder> {
  const response = await fetch(`${CODEIT_BASE_URL}/sample/folder`);
  if (!response.ok) {
    throw new Error("잘못된 요청입니다.");
  }

  const data: SampleFolderResponse = await response.json();
  const { folder } = data;

  return folder;
}

export async function getUserById({ userId }: Params): Promise<UserData> {
  const response = await fetch(`${CODEIT_BASE_URL}/users/${userId}`);
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
  const response = await fetch(`${CODEIT_BASE_URL}/users/${userId}/folders`);
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
  let url = `${CODEIT_BASE_URL}/users/${userId}/links`;
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