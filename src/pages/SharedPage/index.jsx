import { useCallback, useEffect, useState } from "react";
import { getFolder, getUser } from "../../services/api";
import Header from "../../globalComponents/Header";
import Footer from "../../globalComponents/Footer";
import FavoriteLinkCards from "../../globalComponents/FavoriteLinkCards";
import UserProfileAndTitle from "./components/UserProfileAndTitle";
import "../../global.css";

function SharedPage() {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const [userProfileData, setUserProfileData] = useState("");
  const [folderData, setFolderData] = useState("");

  const handleLogin = useCallback(async () => {
    try {
      const user = await getUser();
      if (!user) {
        throw new Error("존재하지 않는 유저입니다.");
      }

      const folder = await getFolder();
      if (!folder) {
        throw new Error("존재하지 않는 폴더입니다.");
      }

      setIsUserLoggedIn(true);
      setUserProfileData(user);
      setFolderData(folder);
      return;
    } catch (error) {
      return console.error(error);
    }
  }, []);

  useEffect(() => {
    handleLogin();
  }, [handleLogin]);

  return (
    <>
      <Header
        handleLogin={handleLogin}
        userProfileData={userProfileData}
        isUserLoggedIn={isUserLoggedIn}
      />
      {isUserLoggedIn ? (
        <UserProfileAndTitle
          userProfileData={userProfileData}
          folderData={folderData}
        />
      ) : (
        <div>로그인해주세요.</div>
      )}
      {userProfileData ? (
        <FavoriteLinkCards folderData={folderData} />
      ) : (
        <div>로그인해주세요</div>
      )}
      <Footer />
    </>
  );
}

export default SharedPage;
