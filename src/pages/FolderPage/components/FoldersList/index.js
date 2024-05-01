import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import styles from "./FoldersList.module.css";
import { FaPencilAlt, FaRegShareSquare, FaRegTrashAlt } from "react-icons/fa";
import Modal from "../../../../globalComponents/Modal";
import FolderAddForm from "./components/FolderAddForm";
import SocialShareBox from "./components/SocialShareBox";
import FolderEditForm from "./components/FolderEditForm";
import FolderDeleteForm from "./components/FolderDeleteForm";
function FoldersList({ handleClick, folders, selectedFolderName, selectedFolderId, }) {
    const [onModal, setOnModal] = useState(false);
    const [modalContent, setModalContent] = useState(null);
    const handleClickModal = (actionType) => {
        const actionTypes = {
            add: _jsx(FolderAddForm, {}),
            share: _jsx(SocialShareBox, { title: selectedFolderName }),
            modify: _jsx(FolderEditForm, {}),
            delete: _jsx(FolderDeleteForm, {}),
        };
        setModalContent(actionTypes[actionType]);
        setOnModal(true);
    };
    return (_jsxs("section", Object.assign({ className: styles.container }, { children: [_jsxs("div", Object.assign({ className: styles.listContainer }, { children: [_jsxs("ul", Object.assign({ className: styles.folderButtonList }, { children: [_jsx("li", { children: _jsx("button", Object.assign({ onClick: (e) => handleClick(e) }, { children: "\uC804\uCCB4" })) }), folders.map((folder) => (_jsx("li", { children: _jsx("button", Object.assign({ onClick: (e) => handleClick(e, folder.id) }, { children: folder.name })) }, folder.id)))] })), _jsx("button", Object.assign({ className: styles.folderAddButton, onClick: () => handleClickModal("add") }, { children: "\uD3F4\uB354 \uCD94\uAC00 +" }))] })), _jsxs("div", Object.assign({ className: styles.controlContainer }, { children: [_jsx("div", Object.assign({ className: styles.selectedFolderName }, { children: selectedFolderName })), selectedFolderId && (_jsxs("div", Object.assign({ className: styles.folderControl }, { children: [_jsxs("button", Object.assign({ onClick: () => handleClickModal("share") }, { children: [_jsx(FaRegShareSquare, {}), "\uACF5\uC720"] })), _jsxs("button", Object.assign({ onClick: () => handleClickModal("modify") }, { children: [_jsx(FaPencilAlt, {}), "\uC218\uC815"] })), _jsxs("button", Object.assign({ onClick: () => handleClickModal("delete") }, { children: [_jsx(FaRegTrashAlt, {}), "\uC0AD\uC81C"] }))] })))] })), onModal && (_jsx(Modal, Object.assign({ onClick: () => setOnModal(false) }, { children: modalContent })))] })));
}
export default FoldersList;
