export async function getUser() {
  const response = await fetch(
    "https://bootcamp-api.codeit.kr/api/sample/user"
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
