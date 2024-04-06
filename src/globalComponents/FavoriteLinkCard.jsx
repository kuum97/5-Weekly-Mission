import styles from "./FavoriteLinkCard.module.css";
import errorImage from "../assets/error.png";
import { displayCreatedTime, formatDateString } from "../utils/dateUtils";

function FavoriteLinkCard({ link }) {
  const { url, createdAt, description, imageSource, title } = link;

  const createdTime = displayCreatedTime(createdAt);
  const createdAtFormat = formatDateString(createdAt);

  const src = imageSource || errorImage;

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

export default FavoriteLinkCard;
