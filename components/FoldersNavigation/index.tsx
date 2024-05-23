import { useState } from "react";
import { useRouter } from "next/router";
import { FolderData } from "@/types/folder";
import FoldersList from "@/components/FoldersList";
import styles from "./index.module.css";

interface FoldersNavigationProps {
  folders?: FolderData[];
}

function FoldersNavigation({ folders }: FoldersNavigationProps) {
  // const handleSearchByKeyword = (keyword: string) => {
  //   if (!links) return console.log("링크가 존재하지 않습니다!");
  //   const searchedLink = links?.filter((link) => link.title?.includes(keyword));
  //   if (!searchedLink) return console.log("해당 링크가 존재하지 않습니다!");
  //   setSearchedLinks(searchedLink);
  // };

  return (
    <section className={styles.container}>
      <FoldersList folders={folders} />
    </section>
  );
}

export default FoldersNavigation;
