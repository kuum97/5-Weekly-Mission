import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import styles from "./UserProfileAndTitle.module.css";
import Avatar from "../../../../globalComponents/Avatar";
function UserProfileAndTitle({ userName, folderName, folderImage }) {
    return (_jsxs("section", Object.assign({ className: styles.container }, { children: [_jsx(Avatar, { size: "medium", src: folderImage }), _jsxs("div", Object.assign({ className: styles.userName }, { children: ["@", userName] })), _jsx("div", Object.assign({ className: styles.folderName }, { children: folderName }))] })));
}
export default UserProfileAndTitle;
