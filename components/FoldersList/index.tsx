import { ReactElement, useState } from "react";
import { FolderData } from "@/lib/api";
import FolderAddForm from "@/components/FolderAddForm";
import SocialShareBox from "@/components/SocialShareBox";
import FolderEditForm from "@/components/FolderEditForm";
import FolderDeleteForm from "@/components/FolderDeleteForm";
import Modal from "@/components/Modal";
import { FaPencilAlt, FaRegShareSquare, FaRegTrashAlt } from "react-icons/fa";
import styles from "@/components/FoldersList/FoldersList.module.css";

interface FoldersListProps {
  handleClick: (folderId: number | null) => void;
  folders: FolderData[];
  selectedFolderId: number | null;
}

interface ActionTypes {
  [actionType: string]: ReactElement;
}

function FoldersList({
  handleClick,
  folders,
  selectedFolderId,
}: FoldersListProps) {
  const [modalContent, setModalContent] = useState<ReactElement | null>(null);
  const currentFolder = folders.find(
    (folder) => folder.id === selectedFolderId
  );

  const handleClickModal = (actionType: string) => {
    const actionTypes: ActionTypes = {
      add: <FolderAddForm />,
      share: <SocialShareBox title="폴더명" />,
      modify: <FolderEditForm />,
      delete: <FolderDeleteForm />,
    };

    setModalContent(actionTypes[actionType]);
  };

  return (
    <section className={styles.container}>
      <div className={styles.listContainer}>
        <ul className={styles.folderButtonList}>
          <li>
            <button onClick={() => handleClick(null)}>전체</button>
          </li>
          {folders.map((folder) => (
            <li key={folder.id}>
              <button onClick={() => handleClick(folder.id)}>
                {folder.name}
              </button>
            </li>
          ))}
        </ul>
        <button
          className={styles.folderAddButton}
          onClick={() => handleClickModal("add")}
        >
          폴더 추가 +
        </button>
      </div>
      <div className={styles.controlContainer}>
        <div className={styles.selectedFolderName}>
          {currentFolder ? currentFolder.name : "전체"}
        </div>
        {selectedFolderId && (
          <div className={styles.folderControl}>
            <button onClick={() => handleClickModal("share")}>
              <FaRegShareSquare />
              공유
            </button>
            <button onClick={() => handleClickModal("modify")}>
              <FaPencilAlt />
              수정
            </button>
            <button onClick={() => handleClickModal("delete")}>
              <FaRegTrashAlt />
              삭제
            </button>
          </div>
        )}
      </div>
      {modalContent && (
        <Modal onClick={() => setModalContent(null)}>{modalContent}</Modal>
      )}
    </section>
  );
}

export default FoldersList;
