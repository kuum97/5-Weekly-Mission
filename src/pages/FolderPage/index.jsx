import { useEffect, useState } from "react";
import useAsync from "../../services/useAsync";
import { getFoldersByUserId, getUserById } from "../../services/api";
import Header from "../../globalComponents/Header";
import LinkAddForm from "./components/LinkAddForm";
import FoldersController from "./components/FolderController";
import Footer from "../../globalComponents/Footer";

function FolderPage() {
  let userId = 1;
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const {
    value: userProfileData,
    isLoading: isLoadingUser,
    error: userError,
  } = useAsync(getUserById, userId);
  const {
    value: foldersData,
    isLoading: isLoadingFolders,
    error: foldersError,
  } = useAsync(getFoldersByUserId, userId);

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
        userAvatarImage={userProfileData.image_source}
        userProfileEmail={userProfileData.email}
        userLogInSuccess={isUserLoggedIn}
      />
      {isUserLoggedIn ? (
        <>
          <LinkAddForm />
          <FoldersController folders={foldersData} userId={userId} />
        </>
      ) : (
        <div>로그인해주세요.</div>
      )}
      <Footer />
    </>
  );
}

export default FolderPage;
