import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import useAsync from "@/lib/useAsync";
import { FolderData, LinkData, getLinksByUserIdAndFolderId } from "@/lib/api";
import SearchBar from "@/components/SearchBar";
import FoldersList from "@/components/FoldersList";
import FolderLinkCards from "@/components/FolderLinkCards";
import styles from "@/components/FolderController/FoldersController.module.css";

interface FoldersControllerProps {
  folders: FolderData[];
  userId: number;
}

function FoldersController({ folders, userId }: FoldersControllerProps) {
  const [currentLinks, setCurrentLinks] = useState<LinkData[]>([]);
  const [selectedFolderId, setSelectedFolderId] = useState<number | null>(null);
  const router = useRouter();
  const {
    value: links,
    isLoading,
    error,
  } = useAsync<LinkData[]>(
    getLinksByUserIdAndFolderId,
    userId,
    selectedFolderId
  );

  const handleClick = (folderId: number | null) => {
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

  useEffect(() => {
    if (links) {
      setCurrentLinks(links);
    }
  }, [links]);

  return (
    <section className={styles.container}>
      <SearchBar />
      {isLoading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>Error loading data.</div>
      ) : (
        <>
          <FoldersList
            handleClick={handleClick}
            folders={folders}
            selectedFolderId={selectedFolderId}
          />
          <FolderLinkCards links={currentLinks} />
        </>
      )}
    </section>
  );
}

export default FoldersController;
