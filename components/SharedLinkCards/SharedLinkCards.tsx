import { SampleLink } from "@/lib/api";
import SearchBar from "../SearchBar";
import SharedLinkCard from "../SharedLinkCard";
import styles from "../LinkCards.module.css";

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
