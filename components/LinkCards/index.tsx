import { LinkData } from "@/types/link";
import LinkCard from "../LinkCard";
import styles from "../LinkCards.module.css";

interface LinkCardsProps {
  links?: LinkData[];
  searchedLinks?: LinkData[];
}

function LinkCards({ links, searchedLinks }: LinkCardsProps) {
  return (
    <>
      {links ? (
        <section className={styles.container}>
          <ul className={styles.linkList}>
            {(searchedLinks ? searchedLinks : links).map((link) => (
              <li key={link.id}>
                <LinkCard link={link} />
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

export default LinkCards;
