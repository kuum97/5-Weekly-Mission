import { useForm } from "react-hook-form";
import { useStoreState } from "@/hooks/state";
import { FaSearch } from "react-icons/fa";
import styles from "./index.module.css";

interface SearchValue {
  searchInput: string;
}

function SearchBar() {
  const { register, handleSubmit } = useForm<SearchValue>();
  const { setSearchQuery, searchQuery } = useStoreState();

  const onSubmit = (data: SearchValue) => {
    setSearchQuery(data.searchInput);
  };

  return (
    <>
      <form className={styles.wrapper} onSubmit={handleSubmit(onSubmit)}>
        <button className={styles.button} type="submit">
          <FaSearch />
        </button>
        <input
          className={styles.input}
          {...register("searchInput")}
          type="text"
          placeholder="링크를 검색해 보세요."
        />
      </form>
      {searchQuery && (
        <p className={styles.queryMessage}>
          <span className={styles.query}>{searchQuery}</span>으로 검색한
          결과입니다.
        </p>
      )}
    </>
  );
}

export default SearchBar;
