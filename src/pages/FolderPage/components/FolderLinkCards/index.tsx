import styles from "../../../LinkCards.module.css";
import FolderLinkCard from "../FolderLinkCard";

function FolderLinkCards({ links }) {
  return (
    <>
      {links && links.length > 0 ? (
        <section className={styles.container}>
          <ul className={styles.linkList}>
            {links.map((link) => (
              <li key={link.id}>
                <FolderLinkCard link={link} />
              </li>
            ))}
          </ul>
        </section>
      ) : (
        <div className={`${styles.container} ${styles.empty}`}>
          저장된 링크가 없습니다.
        </div>
      )}
    </>
  );
}

export default FolderLinkCards;
