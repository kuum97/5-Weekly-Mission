import styles from "./FavoriteLinkCard.module.css";
import errorImage from "../assets/error.png";
import { displayCreatedTime, formatDateString } from "../utils/dateUtils";

function FavoriteLinkCard({ link }) {
  const { url, createdAt, description, imageSource } = link;

  const createdTime = displayCreatedTime(createdAt);
  const createdAtFormat = formatDateString(createdAt);

  const src = imageSource || errorImage;

  return (
    <div className={styles.container}>
      <a
        className={styles.linkImageAnchor}
        href={url}
        target="_blank"
        rel="noreferrer"
      >
        <img className={styles.linkImage} src={src} alt="cardImage" />
      </a>
      <div className={styles.linkInfo}>
        <div className={styles.linkInfoContent}>{createdTime}</div>
        <div className={styles.linkInfoContent}>{description}</div>
        <div className={styles.linkInfoContent}>{createdAtFormat}</div>
      </div>
    </div>
  );
}

export default FavoriteLinkCard;
