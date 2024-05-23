import { ReactElement, useState } from "react";
import { FolderData } from "@/types/folder";
import { FaPencilAlt, FaRegShareSquare, FaRegTrashAlt } from "react-icons/fa";
import Modal from "@/common/Modal";
import FolderAddForm from "@/common/Modal/childrens/FolderAddForm";
import SocialShareBox from "@/common/Modal/childrens/SocialShareBox";
import FolderEditForm from "@/common/Modal/childrens/FolderEditForm";
import FolderDeleteForm from "@/common/Modal/childrens/FolderDeleteForm";
import styles from "./index.module.css";
import Link from "next/link";
import { useRouter } from "next/router";

interface FoldersListProps {
  folders?: FolderData[];
}

interface ActionTypes {
  [actionType: string]: ReactElement;
}

function FoldersList({ folders }: FoldersListProps) {
  const { query } = useRouter();
  const { folderId } = query;
  const [modalContent, setModalContent] = useState<ReactElement | null>(null);

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
            <Link className={styles.folderButton} href={"/folder"}>
              전체
            </Link>
          </li>
          {folders?.map(({ id, name }) => (
            <li key={id}>
              <Link className={styles.folderButton} href={`/folder/${id}`}>
                {name}
              </Link>
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
          {folderId
            ? folders?.map(({ name, id }) => id === Number(folderId) && name)
            : "전체"}
        </div>
        <div className={styles.folderControl}>
          <button
            className={styles.folderControlButton}
            onClick={() => handleClickModal("share")}
          >
            <FaRegShareSquare />
            공유
          </button>
          <button
            className={styles.folderControlButton}
            onClick={() => handleClickModal("modify")}
          >
            <FaPencilAlt />
            수정
          </button>
          <button
            className={styles.folderControlButton}
            onClick={() => handleClickModal("delete")}
          >
            <FaRegTrashAlt />
            삭제
          </button>
        </div>
      </div>
      {modalContent && (
        <Modal onClick={() => setModalContent(null)}>{modalContent}</Modal>
      )}
    </section>
  );
}

export default FoldersList;
