import { useState } from "react";
import styles from "../styles/FoldersList.module.css";
import { FaRegShareSquare, FaPencilAlt, FaRegTrashAlt } from "react-icons/fa";
import Modal from "../../../globalComponents/Modal";

function FoldersList({
  handleClick,
  folders,
  selectedFolderName,
  selectedFolderId,
}) {
  const [onModal, setOnModal] = useState(false);

  const handleClickModal = () => {
    setOnModal(!onModal);
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
        <button className={styles.folderAddButton} onClick={handleClickModal}>
          폴더 추가 +
        </button>
        {onModal && <Modal onClick={handleClickModal} />}
      </div>
      <div className={styles.controlContainer}>
        <div className={styles.selectedFolderName}>{selectedFolderName}</div>
        {selectedFolderId && (
          <div className={styles.folderControl}>
            <button>
              <FaRegShareSquare />
              공유
            </button>
            <button>
              <FaPencilAlt />
              수정
            </button>
            <button>
              <FaRegTrashAlt />
              삭제
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

export default FoldersList;
