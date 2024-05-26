import { useEffect } from "react";
import { useRouter } from "next/router";
import { useStoreState } from "@/hooks/state";
import { useLink } from "@/hooks/api/useLink";
import { LOCAL_ACCESSTOKEN } from "@/constants";
import LinkListPageLayout from "@/components/LinkListPageLayout";
import LinkCards from "@/components/LinkCards";
import LinkAddForm from "@/components/LinkAddForm";
import SearchBar from "@/common/SearchBar";
import FoldersList from "@/components/FoldersList";
import EmptyLinkCards from "@/components/EmptyLinkCards";
import styles from "@/styles/LinkListPage.module.css";

function Folder() {
  const { user, folders, setLinks } = useStoreState();
  const router = useRouter();
  const { folderId } = router.query;
  const id = Number(folderId);
  const { links } = useLink({
    folderId: id,
    localAccessToken: LOCAL_ACCESSTOKEN,
  });

  const handleClickToSharedPage = () => {
    router.push(`/shared/${folderId}`);
  };

  useEffect(() => {
    if (!user) {
      router.replace("/signin");
    }
    if (!folders) {
      router.replace("/folder");
    }
    if (links) {
      setLinks(links);
    }
  }, [router, user, folders, links, setLinks]);

  return (
    <LinkListPageLayout>
      <LinkAddForm />
      <section className={styles.mainContainer}>
        <button onClick={handleClickToSharedPage} type="button">
          공유 페이지로
        </button>
        <SearchBar />
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

export default Folder;
