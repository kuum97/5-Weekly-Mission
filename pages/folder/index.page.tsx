import { useEffect } from "react";
import { useStoreState } from "@/hooks/state";
import { useUser } from "@/hooks/api/useUser";
import { useFolder } from "@/hooks/api/useFolder";
import { useLink } from "@/hooks/api/useLink";
import { IS_CLIENT, LOCAL_ACCESSTOKEN } from "@/constants";
import FolderPageLayout from "@/components/FolderPageLayout";
import LinkCards from "@/components/LinkCards";

function FolderPage() {
  const { setUser, setFolders, setIsLoadingWindow, isLoadingWindow } =
    useStoreState();
  const { user, isLoadingUser, isErrorUser } = useUser({
    localAccessToken: LOCAL_ACCESSTOKEN,
  });
  const { folders, isLoadingFolders, isErrorFolders } = useFolder({ user });
  const { links } = useLink({ user });

  useEffect(() => {
    if (IS_CLIENT) {
      setIsLoadingWindow(false);

      if (user) {
        setUser(user);
      }
      if (folders) {
        setFolders(folders);
      }
    }
  }, [user, folders, setUser, setFolders, setIsLoadingWindow]);

  if (isLoadingWindow || isLoadingUser || isLoadingFolders) {
    return <div>Loading...</div>;
  }

  if (isErrorUser || isErrorFolders) {
    return <div>Error!!</div>;
  }

  return (
    <FolderPageLayout>
      <LinkCards links={links} />
    </FolderPageLayout>
  );
}

export default FolderPage;
