import SearchBar from "./SearchBar";
import styles from "./FavoriteLinkCards.module.css";
import FavoriteLinkCard from "./FavoriteLinkCard";

function FavoriteLinkCards({ folderData }) {
  const { links } = folderData;

  return (
    <div className={styles.container}>
      <SearchBar />
      <ul className={styles.linkList}>
        {links.map((link) => (
          <li key={link.id}>
            <FavoriteLinkCard link={link} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FavoriteLinkCards;
