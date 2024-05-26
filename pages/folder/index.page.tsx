import { useEffect } from "react";
import { useStoreState } from "@/hooks/state";
import { useUser } from "@/hooks/api/useUser";
import { useFolder } from "@/hooks/api/useFolder";
import { useLink } from "@/hooks/api/useLink";
import { IS_CLIENT, LOCAL_ACCESSTOKEN } from "@/constants";
import LinkListPageLayout from "@/components/LinkListPageLayout";
import LinkCards from "@/components/LinkCards";
import LinkAddForm from "@/components/LinkAddForm";
import SearchBar from "@/common/SearchBar";
import FoldersList from "@/components/FoldersList";
import EmptyLinkCards from "@/components/EmptyLinkCards";
import styles from "@/styles/LinkListPage.module.css";

function FolderPage() {
  const { setUser, setFolders, setIsLoadingWindow, isLoadingWindow } =
    useStoreState();
  const { user, isLoadingUser, isErrorUser } = useUser({
    localAccessToken: LOCAL_ACCESSTOKEN,
  });
  const { folders, isLoadingFolders, isErrorFolders } = useFolder({
    localAccessToken: LOCAL_ACCESSTOKEN,
  });
  const { links } = useLink({
    localAccessToken: LOCAL_ACCESSTOKEN,
  });

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

  const handleSearchByKeyword = () => {};

  return (
    <LinkListPageLayout>
      <LinkAddForm />
      <section className={styles.mainContainer}>
        <SearchBar onSearch={handleSearchByKeyword} />
        <FoldersList />
        {links && links.length > 0 ? (
          <LinkCards links={links} />
        ) : (
          <EmptyLinkCards />
        )}
      </section>
    </LinkListPageLayout>
  );
}

export default FolderPage;
