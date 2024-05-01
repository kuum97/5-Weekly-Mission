import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import mainLogo from "../../assets/Linkbrary.png";
import styles from "./Header.module.css";
import Avatar from "../Avatar";
function Header({ userAvatarImage, userProfileEmail, userLogInSuccess }) {
    return (_jsxs("header", Object.assign({ className: styles.container }, { children: [_jsx("img", { className: styles.logo, src: mainLogo, alt: "logo" }), userLogInSuccess ? (_jsxs("div", Object.assign({ className: styles.profileContainer }, { children: [_jsx(Avatar, { size: "small", src: userAvatarImage }), _jsx("span", { children: userProfileEmail })] }))) : (_jsx("button", Object.assign({ className: styles.loginBtn }, { children: "\uB85C\uADF8\uC778" })))] })));
}
export default Header;
