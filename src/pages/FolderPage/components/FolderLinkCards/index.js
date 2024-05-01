import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import styles from "../../../LinkCards.module.css";
import FolderLinkCard from "../FolderLinkCard";
function FolderLinkCards({ links }) {
    return (_jsx(_Fragment, { children: links && links.length > 0 ? (_jsx("section", Object.assign({ className: styles.container }, { children: _jsx("ul", Object.assign({ className: styles.linkList }, { children: links.map((link) => (_jsx("li", { children: _jsx(FolderLinkCard, { link: link }) }, link.id))) })) }))) : (_jsx("div", Object.assign({ className: `${styles.container} ${styles.empty}` }, { children: "\uC800\uC7A5\uB41C \uB9C1\uD06C\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4." }))) }));
}
export default FolderLinkCards;
