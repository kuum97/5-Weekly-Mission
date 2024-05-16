import Image from "next/image";
import { SampleLink } from "@/types/link";
import { displayCreatedTime, formatDateString } from "@/utils/date";
import styles from "../LinkCard.module.css";

interface SharedLinkCardProps {
  link: SampleLink;
}

function SharedLinkCard({ link }: SharedLinkCardProps) {
  const { url, description, title, createdAt, imageSource } = link;

  const createdTime = displayCreatedTime(createdAt);
  const createdAtFormat = formatDateString(createdAt);

  const src = imageSource || "/images/card-default.png";

  return (
    <div className={styles.linkContainer}>
      <a
        className={styles.linkImageAnchor}
        href={url}
        target="_blank"
        rel="noreferrer"
      >
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
