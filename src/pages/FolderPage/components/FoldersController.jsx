import FolderLinkCards from "./FolderLinkCards";
import SearchBar from "../../../globalComponents/SearchBar";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { getLinksByUserIdAndFolderId } from "../../../services/api";
import useAsync from "../../../services/useAsync";
import FoldersList from "./FoldersList";
import styles from "../styles/FoldersController.module.css";

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
