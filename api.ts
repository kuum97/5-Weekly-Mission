import { CODEIT_BASE_URL } from "@/constants";
import { FormValues } from "./common/Auth/Form";
import { FolderData, LinkData, Params, Response, UserData } from "./types/api";

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
  const defaultUrl = `${CODEIT_BASE_URL}/users/${userId}/links`;
  const url = folderId ? `${defaultUrl}?folderId=${folderId}` : `${defaultUrl}`;

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("잘못된 요청입니다.");
  }

  const links: Response<LinkData> = await response.json();
  const { data } = links;

  return data;
}

export async function postEmailCheck(email: string): Promise<void | string> {
  const response = await fetch(`${CODEIT_BASE_URL}/check-email`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email }),
  });

  if (response.status === 409) {
    const data = await response.json();
    return data.error.message;
  }

  if (!response.ok) {
    throw new Error("잘못된 요청입니다.");
  }

  return;
}

interface postData {
  data: {
    accessToken: string;
    refreshToken: string;
  };
}

export async function postSignup({
  email,
  password,
}: FormValues): Promise<postData> {
  const response = await fetch(`${CODEIT_BASE_URL}/sign-up`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });
  const data = await response.json();

  if (!response.ok) {
    return data.error.message;
  }

  return data;
}

export async function postSignin({
  email,
  password,
}: FormValues): Promise<postData> {
  const response = await fetch(`${CODEIT_BASE_URL}/sign-in`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });
  const data = await response.json();

  if (!response.ok) {
    return data.error.message;
  }

  return data;
}
