import { FaSearch } from "react-icons/fa";
import styles from "./SearchBar.module.css";

function SearchBar() {
  return (
    <form className={styles.wrapper}>
      <button className={styles.button}>
        <FaSearch />
      </button>
      <input
        className={styles.input}
        name="searchBar"
        type="text"
        placeholder="링크를 검색해 보세요."
      />
    </form>
  );
}

export default SearchBar;
