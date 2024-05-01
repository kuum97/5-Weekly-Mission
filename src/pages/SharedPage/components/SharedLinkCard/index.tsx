import {
  displayCreatedTime,
  formatDateString,
} from "../../../../utils/dateUtils";
import defaultImage from "../../../../assets/card-default.png";
import styles from "../../../LinkCard.module.css";

function SharedLinkCard({ link }) {
  const { url, description, title, createdAt, imageSource } = link;

  const createdTime = displayCreatedTime(createdAt);
  const createdAtFormat = formatDateString(createdAt);

  const src = imageSource || defaultImage;

  return (
    <div className={styles.linkContainer}>
      <a
        className={styles.linkImageAnchor}
        href={url}
        target="_blank"
        rel="noreferrer"
      >
        <div className={styles.imageWrapper}>
          <img className={styles.linkImage} src={src} alt={title} />
        </div>
      </a>
      <div className={styles.linkInfo}>
        <div className={styles.linkInfoContent}>{createdTime}</div>
        <div className={styles.linkInfoContent}>{description}</div>
        <div className={styles.linkInfoContent}>{createdAtFormat}</div>
      </div>
    </div>
  );
}

export default SharedLinkCard;
