import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { displayCreatedTime, formatDateString, } from "../../../../utils/dateUtils";
import defaultImage from "../../../../assets/card-default.png";
import kebab from "../../../../assets/kebab.svg";
import styles from "../../../LinkCard.module.css";
import { FaRegStar } from "react-icons/fa";
import Modal from "../../../../globalComponents/Modal";
import LinkAddToFolderForm from "./components/LinkAddToFolderForm";
import LinkDeleteForm from "./components/LinkDeleteForm";
function FolderLinkCard({ link }) {
    const [onModal, setOnModal] = useState(false);
    const [modalContent, setModalContent] = useState(null);
    const handleClickModal = (actionType) => {
        const actionTypes = {
            deleteLink: _jsx(LinkDeleteForm, {}),
            addLink: _jsx(LinkAddToFolderForm, {}),
        };
        setModalContent(actionTypes[actionType]);
        setOnModal(true);
    };
    const { url, description, title, created_at, image_source } = link;
    const createdTime = displayCreatedTime(created_at);
    const createdAtFormat = formatDateString(created_at);
    const src = image_source || defaultImage;
    const handleToggleDropDown = (e) => {
        e.preventDefault();
        e.stopPropagation();
        const button = e.currentTarget;
        const linkInfo = button.closest(`.${styles.linkInfo}`);
        const dropdown = linkInfo.querySelector(`.${styles.dropdown}`);
        dropdown.classList.toggle(styles.hidden);
    };
    return (_jsxs("div", Object.assign({ className: styles.linkContainer }, { children: [_jsx("a", Object.assign({ href: url, target: "_blank", rel: "noreferrer" }, { children: _jsxs("div", Object.assign({ className: styles.imageWrapper }, { children: [_jsx("img", { className: styles.linkImage, src: src, alt: title }), _jsx(FaRegStar, { className: styles.starIcon })] })) })), _jsxs("div", Object.assign({ className: styles.linkInfo }, { children: [_jsxs("div", Object.assign({ className: styles.linkInfoContent }, { children: [_jsx("div", { children: createdTime }), _jsx("button", Object.assign({ onClick: handleToggleDropDown, className: styles.kebabButton }, { children: _jsx("img", { src: kebab, alt: "menu" }) }))] })), _jsx("div", Object.assign({ className: styles.linkInfoContent }, { children: description })), _jsx("div", Object.assign({ className: styles.linkInfoContent }, { children: createdAtFormat })), _jsxs("div", Object.assign({ className: `${styles.dropdown} ${styles.hidden}` }, { children: [_jsx("button", Object.assign({ onClick: () => handleClickModal("deleteLink") }, { children: "\uC0AD\uC81C\uD558\uAE30" })), _jsx("button", Object.assign({ onClick: () => handleClickModal("addLink") }, { children: "\uD3F4\uB354\uC5D0 \uCD94\uAC00" }))] }))] })), onModal && (_jsx(Modal, Object.assign({ onClick: () => setOnModal(false) }, { children: modalContent })))] })));
}
export default FolderLinkCard;
