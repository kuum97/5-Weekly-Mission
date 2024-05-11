import { FaSearch } from "react-icons/fa";
import styles from "@/components/SearchBar/SearchBar.module.css";
import { ChangeEventHandler, FormEventHandler, useState } from "react";

interface SearchBarProps {
  onSearch: (keyword: string) => void;
}

function SearchBar({ onSearch }: SearchBarProps) {
  const [inputValue, setInputValue] = useState<string>("");

  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    onSearch(inputValue);
  };

  return (
    <form className={styles.wrapper} onSubmit={handleSubmit}>
      <button className={styles.button} type="submit">
        <FaSearch />
      </button>
      <input
        className={styles.input}
        name="searchBar"
        type="text"
        placeholder="링크를 검색해 보세요."
        onChange={handleChange}
      />
    </form>
  );
}

export default SearchBar;
