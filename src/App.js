import { useCallback, useEffect, useState } from "react";
import "./global.css";
import FavoriteLinkCards from "./components/FavoriteLinkCards";
import Footer from "./components/Footer";
import UserProfileAndTitle from "./components/UserProfileAndTitle";
import { getFolder, getUser } from "./services/api";
import SharedHeader from "./components/SharedHeader";

function App() {
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
      <SharedHeader
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

export default App;
