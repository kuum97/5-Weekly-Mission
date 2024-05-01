import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { displayCreatedTime, formatDateString, } from "../../../../utils/dateUtils";
import defaultImage from "../../../../assets/card-default.png";
import styles from "../../../LinkCard.module.css";
function SharedLinkCard({ link }) {
    const { url, description, title, createdAt, imageSource } = link;
    const createdTime = displayCreatedTime(createdAt);
    const createdAtFormat = formatDateString(createdAt);
    const src = imageSource || defaultImage;
    return (_jsxs("div", Object.assign({ className: styles.linkContainer }, { children: [_jsx("a", Object.assign({ className: styles.linkImageAnchor, href: url, target: "_blank", rel: "noreferrer" }, { children: _jsx("div", Object.assign({ className: styles.imageWrapper }, { children: _jsx("img", { className: styles.linkImage, src: src, alt: title }) })) })), _jsxs("div", Object.assign({ className: styles.linkInfo }, { children: [_jsx("div", Object.assign({ className: styles.linkInfoContent }, { children: createdTime })), _jsx("div", Object.assign({ className: styles.linkInfoContent }, { children: description })), _jsx("div", Object.assign({ className: styles.linkInfoContent }, { children: createdAtFormat }))] }))] })));
}
export default SharedLinkCard;
