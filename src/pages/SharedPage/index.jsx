import { useCallback, useEffect, useState } from "react";
import { getFolder, getUser } from "../../services/api";
import Header from "../../globalComponents/Header";
import Footer from "../../globalComponents/Footer";
import FavoriteLinkCards from "../../globalComponents/FavoriteLinkCards";
import UserProfileAndTitle from "./components/UserProfileAndTitle";
import "../../global.css";
import useAsync from "../../services/useAsync";

function SharedPage() {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const [user, setUser] = useState("");
  const [folder, setFolder] = useState("");
  const { value: userProfileData } = useAsync(getUser);
  const { value: folderData } = useAsync(getFolder);

  const handleLogin = useCallback(() => {
    if (!userProfileData) return;
    setUser(userProfileData);
    if (!folderData) return;
    setFolder(folderData);
    setIsUserLoggedIn(true);
  }, [userProfileData, folderData]);

  useEffect(() => {
    handleLogin();
  }, [handleLogin]);

  return (
    <>
      <Header
        handleLogin={handleLogin}
        userProfileData={userProfileData}
        userLogInSuccess={isUserLoggedIn}
      />
      {isUserLoggedIn ? (
        <UserProfileAndTitle
          userName={user.name}
          folderName={folder.name}
          folderImage={folder.owner.profileImageSource}
        />
      ) : (
        <div>로그인해주세요.</div>
      )}
      {isUserLoggedIn ? (
        <FavoriteLinkCards links={folder.links} />
      ) : (
        <div>로그인해주세요.</div>
      )}
      <Footer />
    </>
  );
}

export default SharedPage;
