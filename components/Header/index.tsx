import Avatar from "../Avatar";
import mainLogo from "@/public/Linkbrary.png";
import styles from "./Header.module.css";

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
      <img className={styles.logo} src={String(mainLogo)} alt="logo" />
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
