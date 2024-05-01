import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import useAsync from "../../../../services/useAsync";
import { getLinksByUserIdAndFolderId } from "../../../../services/api";
import styles from "./FoldersController.module.css";
import SearchBar from "../../../../globalComponents/SearchBar";
import FoldersList from "../FoldersList";
import FolderLinkCards from "../FolderLinkCards";

function FoldersController({ folders, userId }) {
  const [loading, setLoading] = useState(true);
  const [selectedFolderName, setSelectedFolderName] = useState("전체");
  const [searchParams, setSearchParams] = useSearchParams();
  const selectedFolderId = searchParams.get("folderId");
  const {
    value: links,
    isLoading,
    error,
  } = useAsync(getLinksByUserIdAndFolderId, userId, selectedFolderId);

  const handleClick = (e, folderId) => {
    const selectedFolder = e.target.textContent;
    const newSearchParams = new URLSearchParams(searchParams);

    if (folderId) {
      newSearchParams.set("folderId", folderId);
    } else {
      newSearchParams.delete("folderId");
    }

    setSelectedFolderName(selectedFolder);
    setSearchParams(newSearchParams);
  };

  useEffect(() => {
    if (!isLoading && links) {
      setLoading(false);
    }
  }, [isLoading, links]);

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
            selectedFolderName={selectedFolderName}
            selectedFolderId={selectedFolderId}
          />
          <FolderLinkCards links={links} />
        </>
      )}
    </section>
  );
}

export default FoldersController;
