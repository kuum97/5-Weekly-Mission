import { useState } from "react";
import { useRouter } from "next/router";
import useAsync from "@/hooks/useAsync";
import { getLinksByUserIdAndFolderId } from "@/api";
import { FolderData } from "@/types/folder";
import { LinkData } from "@/types/link";
import SearchBar from "@/common/SearchBar";
import FoldersList from "@/components/FoldersList";
import FolderLinkCards from "@/components/FolderLinkCards";
import styles from "./index.module.css";

interface FoldersControllerProps {
  folders: FolderData[];
  userId: number;
}

function FoldersController({ folders, userId }: FoldersControllerProps) {
  const [searchedLinks, setSearchedLinks] = useState<LinkData[] | null>(null);
  const [selectedFolderId, setSelectedFolderId] = useState<number | null>(null);
  const router = useRouter();
  const {
    value: links,
    isLoading,
    error,
  } = useAsync<LinkData[]>(getLinksByUserIdAndFolderId, {
    userId,
    selectedFolderId,
  });

  const handleClickFolder = (folderId: number | null) => {
    router.push({
      pathname: router.pathname,
      query: { ...router.query, folderId },
    });

    if (!folderId) {
      router.push({
        pathname: router.pathname,
      });
    }

    setSelectedFolderId(folderId);
  };

  const handleSearchByKeyword = (keyword: string) => {
    if (!links) return console.log("링크가 존재하지 않습니다!");
    const searchedLink = links?.filter((link) => link.title?.includes(keyword));
    if (!searchedLink) return console.log("해당 링크가 존재하지 않습니다!");
    setSearchedLinks(searchedLink);
  };

  return (
    <section className={styles.container}>
      <SearchBar onSearch={handleSearchByKeyword} />
      {isLoading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>Error loading data.</div>
      ) : (
        links && (
          <>
            <FoldersList
              handleClick={handleClickFolder}
              folders={folders}
              selectedFolderId={selectedFolderId}
            />
            <FolderLinkCards links={links} searchedLinks={searchedLinks} />
          </>
        )
      )}
    </section>
  );
}

export default FoldersController;
