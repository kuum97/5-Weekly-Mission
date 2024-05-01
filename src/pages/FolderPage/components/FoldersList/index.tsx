import { useState } from "react";
import styles from "./FoldersList.module.css";
import { FaPencilAlt, FaRegShareSquare, FaRegTrashAlt } from "react-icons/fa";
import Modal from "../../../../globalComponents/Modal";
import FolderAddForm from "./components/FolderAddForm";
import SocialShareBox from "./components/SocialShareBox";
import FolderEditForm from "./components/FolderEditForm";
import FolderDeleteForm from "./components/FolderDeleteForm";

function FoldersList({
  handleClick,
  folders,
  selectedFolderName,
  selectedFolderId,
}) {
  const [onModal, setOnModal] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  const handleClickModal = (actionType) => {
    const actionTypes = {
      add: <FolderAddForm />,
      share: <SocialShareBox title={selectedFolderName} />,
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
            <button onClick={(e) => handleClick(e)}>전체</button>
          </li>
          {folders.map((folder) => (
            <li key={folder.id}>
              <button onClick={(e) => handleClick(e, folder.id)}>
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
        <div className={styles.selectedFolderName}>{selectedFolderName}</div>
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
