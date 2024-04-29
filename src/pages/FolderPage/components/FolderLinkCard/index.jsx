import { useState } from "react";
import {
  displayCreatedTime,
  formatDateString,
} from "../../../../utils/dateUtils";
import defaultImage from "../../../../assets/card-default.png";
import kebab from "../../../../assets/kebab.svg";
import styles from "../../../LinkCard.module.css";
import { FaRegStar } from "react-icons/fa";
import Modal from "../../../../globalComponents/Modal";

function LinkDeleteForm() {
  return (
    <>
      <h1 className={styles.title}>링크 삭제</h1>
      <h2 className={styles.subTitle}>url</h2>
      <form className={styles.formContainer}>
        <button className={`${styles.formButton} ${styles.redBackground}`}>
          삭제하기
        </button>
      </form>
    </>
  );
}

function LinkAddToFolderForm() {
  return (
    <>
      <h1 className={styles.title}>폴더에 추가</h1>
      <h2 className={styles.subTitle}>링크 주소</h2>
      <form className={styles.formContainer}>
        <ul className={styles.inputList}>
          <li>
            <button>코딩 팁</button>
          </li>
          <li>
            <button>채용 사이트</button>
          </li>
          <li>
            <button>유용한 글</button>
          </li>
          <li>
            <button>나만의 장소</button>
          </li>
        </ul>
        <button className={styles.formButton}>추가하기</button>
      </form>
    </>
  );
}

function FolderLinkCard({ link }) {
  const [onModal, setOnModal] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  const handleClickModal = (actionType) => {
    const actionTypes = {
      deleteLink: <LinkDeleteForm />,
      addLink: <LinkAddToFolderForm />,
    };

    setModalContent(actionTypes[actionType]);
    setOnModal(true);
  };

  const { url, description, title, created_at, image_source } = link;

  const createdTime = displayCreatedTime(created_at);
  const createdAtFormat = formatDateString(created_at);

  const src = image_source || defaultImage;

  const handleToggleDropDown = (e) => {
    e.preventDefault();
    e.stopPropagation();

    const button = e.currentTarget;
    const linkInfo = button.closest(`.${styles.linkInfo}`);
    const dropdown = linkInfo.querySelector(`.${styles.dropdown}`);
    dropdown.classList.toggle(styles.hidden);
  };

  return (
    <div className={styles.linkContainer}>
      <a href={url} target="_blank" rel="noreferrer">
        <div className={styles.imageWrapper}>
          <img className={styles.linkImage} src={src} alt={title} />
          <FaRegStar className={styles.starIcon} />
        </div>
      </a>
      <div className={styles.linkInfo}>
        <div className={styles.linkInfoContent}>
          <div>{createdTime}</div>
          <button onClick={handleToggleDropDown} className={styles.kebabButton}>
            <img src={kebab} alt="menu" />
          </button>
        </div>
        <div className={styles.linkInfoContent}>{description}</div>
        <div className={styles.linkInfoContent}>{createdAtFormat}</div>
        <div className={`${styles.dropdown} ${styles.hidden}`}>
          <button onClick={() => handleClickModal("deleteLink")}>
            삭제하기
          </button>
          <button onClick={() => handleClickModal("addLink")}>
            폴더에 추가
          </button>
        </div>
      </div>
      {onModal && (
        <Modal onClick={() => setOnModal(false)}>{modalContent}</Modal>
      )}
    </div>
  );
}

export default FolderLinkCard;
