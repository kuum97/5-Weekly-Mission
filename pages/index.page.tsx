import Link from "next/link";

export default function Home() {
  let token;

  if (typeof window !== "undefined") {
    token = localStorage.getItem("accessToken");
  }

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Link href={token ? "/folder" : "/signin"}>로그인</Link>
      <Link href={token ? "/folder" : "/signup"}>회원가입</Link>
      <Link href="/shared">공유페이지</Link>
      <Link href="/folder">폴더페이지</Link>
    </div>
  );
}
