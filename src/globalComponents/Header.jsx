import mainLogo from "../assets/Linkbrary.png";
import Avatar from "./Avatar";
import styles from "./Header.module.css";

function Header({ handleLogin, userProfileData, isUserLoggedIn }) {
  const { profileImageSource, email } = userProfileData;

  return (
    <div className={styles.container}>
      <img className={styles.logo} src={mainLogo} alt="logo" />
      {isUserLoggedIn ? (
        <div className={styles.profileContainer}>
          <Avatar size="small" src={profileImageSource} />
          <span>{email}</span>
        </div>
      ) : (
        <button className={styles.loginBtn} onClick={handleLogin}>
          로그인
        </button>
      )}
    </div>
  );
}

export default Header;
