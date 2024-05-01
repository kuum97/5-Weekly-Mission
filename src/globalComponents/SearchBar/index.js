import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { FaSearch } from "react-icons/fa";
import styles from "./SearchBar.module.css";
function SearchBar() {
    return (_jsxs("form", Object.assign({ className: styles.wrapper }, { children: [_jsx("button", Object.assign({ className: styles.button }, { children: _jsx(FaSearch, {}) })), _jsx("input", { className: styles.input, name: "searchBar", type: "text", placeholder: "\uB9C1\uD06C\uB97C \uAC80\uC0C9\uD574 \uBCF4\uC138\uC694." })] })));
}
export default SearchBar;
