import Image from "next/image";
import Avatar from "@/common/Avatar";
import styles from "./index.module.css";
import { useInitializeUser } from "@/hooks/useInitializeUser";
import { useUserState } from "@/hooks/useUserState";
import { SAMPLE_USER_ID } from "@/constants";

function Header() {
  useInitializeUser({ SAMPLE_USER_ID });
  const { user } = useUserState();

  return (
    <header className={styles.container}>
      <div className={styles.logo}>
        <Image
          fill
          src="/images/Linkbrary.png"
          alt="logo"
          style={{ objectFit: "cover" }}
          sizes="(max-width: 767px) 100px, 133px"
          priority
        />
      </div>
      {user ? (
        <div className={styles.profileContainer}>
          <Avatar size="small" src={user.image_source} />
          <span>{user.email}</span>
        </div>
      ) : (
        <button className={styles.loginBtn}>로그인</button>
      )}
    </header>
  );
}

export default Header;
