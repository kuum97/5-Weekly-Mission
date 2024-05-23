import Image from "next/image";
import Avatar from "@/common/Avatar";
import styles from "./index.module.css";
import { useUserState } from "@/hooks/state/useUserState";

function Header() {
  const user = useUserState((state) => state.user);

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
