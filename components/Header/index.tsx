import Image from "next/image";
import Avatar from "@/components/Avatar";
import styles from "@/components/Header/Header.module.css";

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
          src="/Linkbrary.png"
          alt="logo"
          style={{ objectFit: "contain" }}
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
