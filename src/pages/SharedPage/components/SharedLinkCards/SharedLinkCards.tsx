import styles from "../../../LinkCards.module.css";
import SearchBar from "../../../../globalComponents/SearchBar";
import SharedLinkCard from "../SharedLinkCard";

function SharedLinkCards({ links }) {
  return (
    <section className={styles.container}>
      <SearchBar />
      <ul className={styles.linkList}>
        {links.map((link) => (
          <li key={link.id}>
            <SharedLinkCard link={link} />
          </li>
        ))}
      </ul>
    </section>
  );
}

export default SharedLinkCards;
