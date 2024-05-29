import Link from "next/link";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  const localAccessToken =
    typeof window !== "undefined" && localStorage.getItem("accessToken");

  const handleAutoSignin = () => {
    if (localAccessToken) {
      return router.push("/folder");
    }

    return router.push("/signin");
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        gap: "20px",
      }}
    >
      <button onClick={handleAutoSignin} type="button">
        로그인
      </button>
      <Link href="/signup">회원가입</Link>
      <Link href="/folder">폴더페이지</Link>
    </div>
  );
}
