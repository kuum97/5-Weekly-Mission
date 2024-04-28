import { useState } from "react";
import { FaRegShareSquare, FaPencilAlt, FaRegTrashAlt } from "react-icons/fa";
import styles from "../styles/FoldersList.module.css";
import Modal from "../../../globalComponents/Modal";
import kakao from "../../../assets/kakaotalk.png";
import facebook from "../../../assets/facebook.png";
import share from "../../../assets/share.png";

function FoldersList({
  handleClick,
  folders,
  selectedFolderName,
  selectedFolderId,
}) {
  const [onModal, setOnModal] = useState(false);
  const [actionType, setActionType] = useState("");

  const handleClickModal = (actionType) => {
    if (actionType === "exit") {
      return setOnModal(false);
    }

    setActionType(actionType);
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
      {onModal && actionType === "add" ? (
        <Modal onClick={() => handleClickModal()} title={"폴더 추가"}>
          <form className={styles.formContainer}>
            <input
              className={styles.formInput}
              type="text"
              placeholder="내용 입력"
            />
            <button className={styles.formButton}>추가하기</button>
          </form>
        </Modal>
      ) : actionType === "share" ? (
        <Modal
          onClick={() => handleClickModal()}
          title={"폴더 공유"}
          subTitle={"폴더명"}
        >
          <div className={styles.shareBox}>
            <div className={styles.shareButton}>
              <img src={kakao} alt="kakaoBtn" />
              <span>카카오톡</span>
            </div>
            <div className={styles.shareButton}>
              <img src={facebook} alt="facebookBtn" />
              <span>페이스북</span>
            </div>
            <div className={styles.shareButton}>
              <img src={share} alt="shareBtn" />
              <span>링크 복사</span>
            </div>
          </div>
        </Modal>
      ) : actionType === "modify" ? (
        <Modal onClick={() => handleClickModal()} title={"폴더 이름 변경"}>
          <form className={styles.formContainer}>
            <input
              className={styles.formInput}
              type="text"
              placeholder="유용한 팁"
            />
            <button className={styles.formButton}>변경하기</button>
          </form>
        </Modal>
      ) : actionType === "delete" ? (
        <Modal
          onClick={() => handleClickModal()}
          title={"폴더 삭제"}
          subTitle={"폴더명"}
        >
          <form className={styles.formContainer}>
            <button className={`${styles.formButton} ${styles.redBackground}`}>
              삭제하기
            </button>
          </form>
        </Modal>
      ) : null}
    </section>
  );
}

export default FoldersList;
