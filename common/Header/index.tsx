import Image from "next/image";
import Avatar from "@/common/Avatar";
import styles from "./index.module.css";

interface HeaderProps {
  userAvatarImage: string;
  userProfileEmail: string;
  userLogInSuccess: boolean;
}

function Header({
  userAvatarImage,
  userProfileEmail,
  userLogInSuccess,
}: HeaderProps) {
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
      {userLogInSuccess ? (
        <div className={styles.profileContainer}>
          <Avatar size="small" src={userAvatarImage} />
          <span>{userProfileEmail}</span>
        </div>
      ) : (
        <button className={styles.loginBtn}>로그인</button>
      )}
    </header>
  );
}

export default Header;
