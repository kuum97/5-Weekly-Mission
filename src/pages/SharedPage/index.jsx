import Header from "../../globalComponents/Header";
import Footer from "../../globalComponents/Footer";
import UserProfileAndTitle from "./components/UserProfileAndTitle";
import SharedLinkCards from "./components/SharedLinkCards";
import { useEffect, useState } from "react";
import { getFolder, getUser } from "../../services/api";
import useAsync from "../../services/useAsync";
import "../../global.css";

function SharedPage() {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const {
    value: userProfileData,
    isLoading: isLoadingUser,
    error: userError,
  } = useAsync(getUser);
  const {
    value: folderData,
    isLoading: isLoadingFolders,
    error: foldersError,
  } = useAsync(getFolder);

  useEffect(() => {
    if (!isLoadingUser && userProfileData) {
      setIsUserLoggedIn(true);
    }
  }, [isLoadingUser, userProfileData]);

  if (isLoadingUser || isLoadingFolders) {
    return <div>Loading...</div>;
  }

  if (userError || foldersError) {
    return <div>Error loading data.</div>;
  }

  return (
    <>
      <Header
        userAvatarImage={userProfileData.profileImageSource}
        userProfileEmail={userProfileData.email}
        userLogInSuccess={isUserLoggedIn}
      />
      {isUserLoggedIn ? (
        <UserProfileAndTitle
          userName={userProfileData.name}
          folderName={folderData.name}
          folderImage={folderData.owner.profileImageSource}
        />
      ) : (
        <div>로그인해주세요.</div>
      )}
      {isUserLoggedIn ? (
        <SharedLinkCards links={folderData.links} />
      ) : (
        <div>로그인해주세요.</div>
      )}
      <Footer />
    </>
  );
}

export default SharedPage;