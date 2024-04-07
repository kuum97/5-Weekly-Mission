import mainLogo from "../assets/Linkbrary.png";

import Avatar from "./Avatar";
import styles from "./Header.module.css";

function Header({ handleLogin, userProfileData, userLogInSuccess }) {
  return (
    <header className={styles.container}>
      <img className={styles.logo} src={mainLogo} alt="logo" />
      {userLogInSuccess ? (
        <div className={styles.profileContainer}>
          <Avatar size="small" src={userProfileData.profileImageSource} />
          <span>{userProfileData.email}</span>
        </div>
      ) : (
        <button className={styles.loginBtn} onClick={handleLogin}>
          로그인
        </button>
      )}
    </header>
  );
}

export default Header;
