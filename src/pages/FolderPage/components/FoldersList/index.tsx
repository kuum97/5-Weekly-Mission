import { ReactElement, useState } from "react";
import { FolderData } from "services/api";
import Modal from "globalComponents/Modal";
import FolderAddForm from "./components/FolderAddForm";
import SocialShareBox from "./components/SocialShareBox";
import FolderEditForm from "./components/FolderEditForm";
import FolderDeleteForm from "./components/FolderDeleteForm";
import { FaPencilAlt, FaRegShareSquare, FaRegTrashAlt } from "react-icons/fa";
import styles from "./FoldersList.module.css";

interface FoldersListProps {
  handleClick: (folderId?: string) => void;
  folders: FolderData[];
  selectedFolderId: string;
}

interface ActionTypes {
  [actionType: string]: ReactElement;
}

function FoldersList({
  handleClick,
  folders,
  selectedFolderId,
}: FoldersListProps) {
  const [onModal, setOnModal] = useState(false);
  const [modalContent, setModalContent] = useState<ReactElement | null>(null);

  const handleClickModal = (actionType: string) => {
    const actionTypes: ActionTypes = {
      add: <FolderAddForm />,
      share: <SocialShareBox title="폴더명" />,
      modify: <FolderEditForm />,
      delete: <FolderDeleteForm />,
    };

    setModalContent(actionTypes[actionType]);
    setOnModal(true);
  };

  return (
    <section className={styles.container}>
      <div className={styles.listContainer}>
        <ul className={styles.folderButtonList}>
          <li>
            <button onClick={() => handleClick()}>전체</button>
          </li>
          {folders.map((folder) => (
            <li key={folder.id}>
              <button onClick={() => handleClick(String(folder.id))}>
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
        <div className={styles.selectedFolderName}>폴더명</div>
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
      {onModal && (
        <Modal onClick={() => setOnModal(false)}>{modalContent}</Modal>
      )}
    </section>
  );
}

export default FoldersList;
