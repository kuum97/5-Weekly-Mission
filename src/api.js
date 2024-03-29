export async function getUser() {
  const response = await fetch(
    "https://bootcamp-api.codeit.kr/api/sample/user"
  );
  const data = await response.json();

  if (!response.ok) {
    throw new Error("잘못된 요청입니다.");
  }
  return data;
}
