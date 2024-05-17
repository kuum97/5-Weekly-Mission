import { ReactElement } from "react";
import useAsync from "@/hooks/useAsync";
import { useUserState } from "@/hooks/useUserState";
import { getFolder } from "@/api";
import { SampleFolder } from "@/types/folder";
import SharedLinkCards from "@/components/SharedLinkCards";
import UserProfileAndTitle from "@/components/UserProfileAndTitle";
import CardListPagesLayout from "@/components/CardListPagesLayout";

function SharedPage() {
  const { user } = useUserState();
  const {
    value: folderData,
    isLoading: isLoadingFolders,
    error: foldersError,
  } = useAsync<SampleFolder>(getFolder, {});

  if (isLoadingFolders) {
    return <div>Loading...</div>;
  }

  if (foldersError) {
    return <div>Error loading data.</div>;
  }

  if (!folderData) {
    return <div>No Data Available</div>;
  }

  return (
    <>
      {user && (
        <UserProfileAndTitle
          userName={user.name}
          folderName={folderData.name}
          folderImage={folderData.owner.profileImageSource}
        />
      )}
      {folderData.links && <SharedLinkCards links={folderData.links} />}
    </>
  );
}

SharedPage.getLayout = function getLayout(page: ReactElement) {
  return <CardListPagesLayout>{page}</CardListPagesLayout>;
};

export default SharedPage;
