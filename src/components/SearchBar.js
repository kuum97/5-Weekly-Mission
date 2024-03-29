import { FaSearch } from "react-icons/fa";

function SearchBar() {
  return (
    <div>
      <form>
        <button>
          <FaSearch />
        </button>
        <input type="text" placeholder="링크를 검색해 보세요." />
      </form>
    </div>
  );
}

export default SearchBar;
