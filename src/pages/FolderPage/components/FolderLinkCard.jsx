import { displayCreatedTime, formatDateString } from "../../../utils/dateUtils";
import defaultImage from "../../../assets/card-default.png";
import styles from "../styles/FolderLinkCard.module.css";

function FolderLinkCard({ link }) {
  const { url, description, title, created_at, image_source } = link;

  const createdTime = displayCreatedTime(created_at);
  const createdAtFormat = formatDateString(created_at);

  const src = image_source || defaultImage;

  return (
    <a
      className={styles.linkImageAnchor}
      href={url}
      target="_blank"
      rel="noreferrer"
    >
      <div className={styles.imageWrapper}>
        <img className={styles.linkImage} src={src} alt={title} />
      </div>
      <div className={styles.linkInfo}>
        <div className={styles.linkInfoContent}>{createdTime}</div>
        <div className={styles.linkInfoContent}>{description}</div>
        <div className={styles.linkInfoContent}>{createdAtFormat}</div>
      </div>
    </a>
  );
}

export default FolderLinkCard;
