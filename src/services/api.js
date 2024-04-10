export async function getUser() {
  const response = await fetch(
    `https://bootcamp-api.codeit.kr/api/sample/user`
  );
  const user = await response.json();

  if (!response.ok) {
    throw new Error("잘못된 요청입니다.");
  }
  return user;
}

export async function getFolder() {
  const response = await fetch(
    "https://bootcamp-api.codeit.kr/api/sample/folder"
  );
  const data = await response.json();
  const { folder } = data;

  if (!response.ok) {
    throw new Error("잘못된 요청입니다.");
  }
  return folder;
}

export async function getUserById(userId) {
  const response = await fetch(
    `https://bootcamp-api.codeit.kr/api/users/${userId}`
  );
  const user = await response.json();
  const { data } = user;

  if (!response.ok) {
    throw new Error("잘못된 요청입니다.");
  }
  return data[0];
}

export async function getFoldersByUserId(userId) {
  const response = await fetch(
    `https://bootcamp-api.codeit.kr/api/users/${userId}/folders`
  );
  const folders = await response.json();
  const { data } = folders;

  if (!response.ok) {
    throw new Error("잘못된 요청입니다.");
  }
  return data;
}

export async function getLinksByUserIdAndFolderId(userId, folderId) {
  let url = `https://bootcamp-api.codeit.kr/api/users/${userId}/links`;
  if (folderId) {
    url += `?folderId=${folderId}`;
  }
  const response = await fetch(url);
  const links = await response.json();
  const { data } = links;

  if (!response.ok) {
    throw new Error("잘못된 요청입니다.");
  }
  return data;
}
