import useAsync from "@/hooks/useAsync";
import { getFoldersByUserId } from "@/api";
import LinkAddForm from "@/components/LinkAddForm";
import FoldersController from "@/components/FolderController";
import { FolderData } from "@/types/folder";
import { SAMPLE_USER_ID } from "@/constants";
import { useUserState } from "@/hooks/useUserState";

function FolderPage() {
  const { user } = useUserState();
  // const {
  //   value: foldersData,
  //   isLoading: isLoadingFolders,
  //   error: foldersError,
  // } = useAsync<FolderData[]>(getFoldersByUserId, { SAMPLE_USER_ID });

  if (isLoadingFolders) {
    return <div>Loading...</div>;
  }

  if (foldersError) {
    return <div>Error loading data.</div>;
  }

  if (!foldersData) {
    return <div>No Data Available</div>;
  }

  return (
    <>
      {user ? (
        <>
          <LinkAddForm />
          <FoldersController folders={foldersData} userId={SAMPLE_USER_ID} />
        </>
      ) : (
        <div>로그인해주세요.</div>
      )}
    </>
  );
}

export default FolderPage;
