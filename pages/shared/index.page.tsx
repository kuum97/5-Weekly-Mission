import { ReactElement } from "react";
import SharedLinkCards from "@/components/SharedLinkCards";
import UserProfileAndTitle from "@/components/UserProfileAndTitle";
import CardListPagesLayout from "@/components/CardListPagesLayout";

function SharedPage() {
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
