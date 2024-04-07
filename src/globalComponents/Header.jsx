import mainLogo from "../assets/Linkbrary.png";
import Avatar from "./Avatar";
import styles from "./styles/Header.module.css";

function Header({ userAvatarImage, userProfileEmail, userLogInSuccess }) {
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
