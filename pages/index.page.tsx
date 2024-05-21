import Link from "next/link";

export default function Home() {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Link href="/signin">로그인</Link>
      <Link href="/signup">회원가입</Link>
      <Link href="/shared">공유페이지</Link>
      <Link href="/folder">폴더페이지</Link>
    </div>
  );
}
