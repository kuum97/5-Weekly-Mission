import { useEffect, useState } from "react";
import useAsync from "@/lib/useAsync";
import { SampleFolder, SampleUser, getFolder, getUser } from "@/lib/api";
import Header from "@/components/Header";
import SharedLinkCards from "@/components/SharedLinkCards/SharedLinkCards";
import UserProfileAndTitle from "@/components/UserProfileAndTitle";

function SharedPage() {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const {
    value: userProfileData,
    isLoading: isLoadingUser,
    error: userError,
  } = useAsync<SampleUser>(getUser);
  const {
    value: folderData,
    isLoading: isLoadingFolders,
    error: foldersError,
  } = useAsync<SampleFolder>(getFolder);

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

  if (!userProfileData || !folderData) {
    return <div>No Data Available</div>;
  }

  return (
    <>
      <Header
        userAvatarImage={userProfileData.profileImageSource}
        userProfileEmail={userProfileData.email}
        userLogInSuccess={isUserLoggedIn}
      />
      {isUserLoggedIn ? (
        <>
          <UserProfileAndTitle
            userName={userProfileData.name}
            folderName={folderData.name}
            folderImage={folderData.owner.profileImageSource}
          />
          {folderData.links && <SharedLinkCards links={folderData.links} />}
        </>
      ) : (
        <div>로그인해주세요.</div>
      )}
    </>
  );
}

export default SharedPage;
