import { SampleLink } from "services/api";
import SearchBar from "globalComponents/SearchBar";
import styles from "pages/LinkCards.module.css";
import SharedLinkCard from "pages/SharedPage/components/SharedLinkCard";

interface SharedLinkCardsProps {
  links: SampleLink[] | undefined;
}

function SharedLinkCards({ links }: SharedLinkCardsProps) {
  return (
    <section className={styles.container}>
      <SearchBar />
      <ul className={styles.linkList}>
        {links?.map((link) => (
          <li key={link.id}>
            <SharedLinkCard link={link} />
          </li>
        ))}
      </ul>
    </section>
  );
}

export default SharedLinkCards;
