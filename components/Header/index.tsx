import mainLogo from "@assets/Linkbrary.png";
import styles from "./Header.module.css";
import Avatar from "globalComponents/Avatar";

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
      <img className={styles.logo} src={mainLogo} alt="logo" />
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
