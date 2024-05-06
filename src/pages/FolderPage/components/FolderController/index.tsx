import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import {
  FolderData,
  LinkData,
  getLinksByUserIdAndFolderId,
} from "services/api";
import useAsync from "services/useAsync";
import SearchBar from "globalComponents/SearchBar";
import FoldersList from "../FoldersList";
import FolderLinkCards from "../FolderLinkCards";
import styles from "./FoldersController.module.css";

interface FoldersControllerProps {
  folders: FolderData[];
  userId: number;
}

function FoldersController({ folders, userId }: FoldersControllerProps) {
  const [loading, setLoading] = useState(true);
  const [selectedFolderId, setSelectedFolderId] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
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
    const newSearchParams = new URLSearchParams(searchParams);

    if (folderId) {
      setSelectedFolderId(folderId);
      setSearchParams(newSearchParams);
    } else {
      newSearchParams.delete("folderId");
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
