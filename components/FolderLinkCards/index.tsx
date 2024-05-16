import { LinkData } from "@/types/link";
import FolderLinkCard from "@/components/FolderLinkCard";
import styles from "../LinkCards.module.css";

interface FolderLinkCardsProps {
  links: LinkData[];
  searchedLinks: LinkData[] | null;
}

function FolderLinkCards({ links, searchedLinks }: FolderLinkCardsProps) {
  return (
    <>
      {links.length > 0 ? (
        <section className={styles.container}>
          <ul className={styles.linkList}>
            {(searchedLinks ? searchedLinks : links).map((link) => (
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
