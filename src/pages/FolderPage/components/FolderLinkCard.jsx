import { displayCreatedTime, formatDateString } from "../../../utils/dateUtils";
import defaultImage from "../../../assets/card-default.png";
import styles from "../../LinkCard.module.css";
import { FaRegStar } from "react-icons/fa6";
import kebab from "../../../assets/kebab.svg";

function FolderLinkCard({ link }) {
  const { url, description, title, created_at, image_source } = link;

  const createdTime = displayCreatedTime(created_at);
  const createdAtFormat = formatDateString(created_at);

  const src = image_source || defaultImage;

  const handleToggleModal = (e) => {
    e.preventDefault();

    const button = e.currentTarget;
    const linkInfo = button.closest(`.${styles.linkInfo}`);
    const modal = linkInfo.querySelector(`.${styles.modal}`);
    modal.classList.toggle(styles.hidden);
  };

  return (
    <a
      className={styles.linkImageAnchor}
      href={url}
      target="_blank"
      rel="noreferrer"
    >
      <div className={styles.imageWrapper}>
        <img className={styles.linkImage} src={src} alt={title} />
        <FaRegStar className={styles.starIcon} />
      </div>
      <div className={styles.linkInfo}>
        <div className={styles.linkInfoContent}>
          <div>{createdTime}</div>
          <button onClick={handleToggleModal} className={styles.kebabButton}>
            <img src={kebab} alt="menu" />
          </button>
        </div>
        <div className={styles.linkInfoContent}>{description}</div>
        <div className={styles.linkInfoContent}>{createdAtFormat}</div>
        <div className={`${styles.modal} ${styles.hidden}`}>
          <button>삭제하기</button>
          <button>폴더에 추가</button>
        </div>
      </div>
    </a>
  );
}

export default FolderLinkCard;
