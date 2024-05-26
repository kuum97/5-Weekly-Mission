import SearchBar from "@/common/SearchBar";
import EmptyLinkCards from "@/components/EmptyLinkCards";
import LinkCards from "@/components/LinkCards";
import LinkListPageLayout from "@/components/LinkListPageLayout";
import UserProfileAndTitle from "@/components/UserProfileAndTitle";
import { LOCAL_ACCESSTOKEN } from "@/constants";
import { useLink } from "@/hooks/api/useLink";
import { useStoreState } from "@/hooks/state";
import styles from "@/styles/LinkListPage.module.css";
import { useRouter } from "next/router";

function SharedFolder() {
  const { query } = useRouter();
  const { folderId } = query;
  const id = Number(folderId);
  const { links } = useLink({
    folderId: id,
    localAccessToken: LOCAL_ACCESSTOKEN,
  });

  const handleSearchByKeyword = () => {};

  return (
    <LinkListPageLayout>
      <UserProfileAndTitle />
      <section className={styles.mainContainer}>
        <SearchBar onSearch={handleSearchByKeyword} />
        {links && links.length > 0 ? (
          <LinkCards links={links} />
        ) : (
          <EmptyLinkCards />
        )}
      </section>
    </LinkListPageLayout>
  );
}

export default SharedFolder;
