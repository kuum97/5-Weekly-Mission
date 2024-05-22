import { useState } from "react";
import { useRouter } from "next/router";
import useAsync from "@/hooks/useAsync";
import { getLinksByUserIdAndFolderId } from "@/api";
import { FolderData } from "@/types/folder";
import { LinkData } from "@/types/link";
import SearchBar from "@/common/SearchBar";
import FoldersList from "@/components/FoldersList";
import styles from "./index.module.css";
import LinkCards from "../LinkCards";

interface FoldersNavigationProps {
  folders?: FolderData[];
}

function FoldersNavigation({ folders }: FoldersNavigationProps) {
  const [searchedLinks, setSearchedLinks] = useState<LinkData[] | null>(null);
  const [selectedFolderId, setSelectedFolderId] = useState<number | null>(null);
  const router = useRouter();

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

  // const handleSearchByKeyword = (keyword: string) => {
  //   if (!links) return console.log("링크가 존재하지 않습니다!");
  //   const searchedLink = links?.filter((link) => link.title?.includes(keyword));
  //   if (!searchedLink) return console.log("해당 링크가 존재하지 않습니다!");
  //   setSearchedLinks(searchedLink);
  // };

  return (
    <section className={styles.container}>
      {/* <SearchBar onSearch={handleSearchByKeyword} /> */}
      <FoldersList
        onClick={handleClickFolder}
        folders={folders}
        selectedFolderId={selectedFolderId}
      />
      {/* <LinkCards links={links} searchedLinks={searchedLinks} /> */}
    </section>
  );
}

export default FoldersNavigation;
