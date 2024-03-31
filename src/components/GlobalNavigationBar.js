import mainLogo from "../assets/Linkbrary.png";
import Avatar from "./Avatar";

function GlobalNavigationBar({ handleLogin, userProfileData, isUserLoggedIn }) {
  const { profileImageSource, email } = userProfileData;

  return (
    <div>
      <img src={mainLogo} alt="logo" />
      {isUserLoggedIn ? (
        <div>
          <Avatar src={profileImageSource} />
          <span>{email}</span>
        </div>
      ) : (
        <button onClick={handleLogin}>로그인</button>
      )}
    </div>
  );
}

export default GlobalNavigationBar;
