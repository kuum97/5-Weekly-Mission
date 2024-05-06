import { useEffect, useState } from "react";
import {
  FolderData,
  UserData,
  getFoldersByUserId,
  getUserById,
} from "services/api";
import useAsync from "services/useAsync";
import Header from "globalComponents/Header";
import Footer from "globalComponents/Footer";
import LinkAddForm from "./components/LinkAddForm";
import FoldersController from "./components/FolderController";

const SAMPLE_USER_ID = 1;

function FolderPage() {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const {
    value: userProfileData,
    isLoading: isLoadingUser,
    error: userError,
  } = useAsync<UserData>(getUserById, SAMPLE_USER_ID);
  const {
    value: foldersData,
    isLoading: isLoadingFolders,
    error: foldersError,
  } = useAsync<FolderData[]>(getFoldersByUserId, SAMPLE_USER_ID);

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

  if (!userProfileData || !foldersData) {
    return <div>No Data Available</div>;
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
          <FoldersController folders={foldersData} userId={SAMPLE_USER_ID} />
        </>
      ) : (
        <div>로그인해주세요.</div>
      )}
      <Footer />
    </>
  );
}

export default FolderPage;
