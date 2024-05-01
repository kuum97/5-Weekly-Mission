import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import styles from "../../../LinkCards.module.css";
import SearchBar from "../../../../globalComponents/SearchBar";
import SharedLinkCard from "../SharedLinkCard";
function SharedLinkCards({ links }) {
    return (_jsxs("section", Object.assign({ className: styles.container }, { children: [_jsx(SearchBar, {}), _jsx("ul", Object.assign({ className: styles.linkList }, { children: links.map((link) => (_jsx("li", { children: _jsx(SharedLinkCard, { link: link }) }, link.id))) }))] })));
}
export default SharedLinkCards;
