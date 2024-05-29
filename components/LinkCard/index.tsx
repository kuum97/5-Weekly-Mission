import { ReactElement, useState } from "react";
import Image from "next/image";
import { displayCreatedTime, formatDateString } from "@/utils/date";
import Modal from "@/common/Modal";
import LinkDeleteForm from "@/common/Modal/childrens/LinkDeleteForm";
import LinkAddToFolderForm from "@/common/Modal/childrens/LinkAddToFolderForm";
import { GoKebabHorizontal } from "react-icons/go";
import { FaRegStar } from "react-icons/fa";
import { LinkData } from "@/types/api";
import styles from "./index.module.css";

interface LinkCardProps {
  link: LinkData;
}

interface ActionTypes {
  [actionType: string]: ReactElement;
}

function LinkCard({ link }: LinkCardProps) {
  const [onModal, setOnModal] = useState(false);
  const [modalContent, setModalContent] = useState<ReactElement | null>(null);

  const handleClickModal = (actionType: string) => {
    const actionTypes: ActionTypes = {
      deleteLink: <LinkDeleteForm />,
      addLink: <LinkAddToFolderForm />,
    };

    setModalContent(actionTypes[actionType]);
    setOnModal(true);
  };

  const { url, description, title, created_at, image_source } = link;

  const createdTime = displayCreatedTime(created_at);
  const createdAtFormat = formatDateString(created_at);

  const src = image_source || "/images/card-default.png";

  const handleToggleDropDown = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();

    const button = e.currentTarget;
    const linkInfo = button.closest(`.${styles.linkInfo}`);
    const dropdown = linkInfo?.querySelector(`.${styles.dropdown}`);

    dropdown?.classList.toggle(styles.hidden);
  };

  return (
    <div className={styles.linkContainer}>
      <a href={url} target="_blank" rel="noreferrer">
        <div className={styles.imageWrapper}>
          <div className={styles.linkImage}>
            <Image
              fill
              src={src}
              alt={title || "링크 카드"}
              style={{ objectFit: "cover" }}
              sizes="(max-width: 767px) 325px, 340px"
              priority
            />
          </div>
          <FaRegStar className={styles.starIcon} />
        </div>
      </a>
      <div className={styles.linkInfo}>
        <div className={styles.linkInfoContent}>
          <div>{createdTime}</div>
          <button onClick={handleToggleDropDown} className={styles.kebabButton}>
            <GoKebabHorizontal />
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

export default LinkCard;
