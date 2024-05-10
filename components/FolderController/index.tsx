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
  const [loading, setLoading] = useState(true);
  const [selectedFolderId, setSelectedFolderId] = useState("");
  const router = useRouter();
  const {
    value: links,
    isLoading,
    error,
  } = useAsync<LinkData[]>(
    getLinksByUserIdAndFolderId,
    userId,
    parseInt(selectedFolderId)
  );

  const handleClick = (folderId?: string) => {
    router.push({
      pathname: router.pathname,
      query: { ...router.query, folderId: folderId },
    });

    if (folderId) {
      setSelectedFolderId(folderId);
    }
  };

  useEffect(() => {
    if (!isLoading && links) {
      setLoading(false);
    }
  }, [isLoading, links]);

  if (!links) {
    return <div>No Data Available</div>;
  }

  return (
    <section className={styles.container}>
      <SearchBar />
      {loading ? (
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
          <FolderLinkCards links={links} />
        </>
      )}
    </section>
  );
}

export default FoldersController;
