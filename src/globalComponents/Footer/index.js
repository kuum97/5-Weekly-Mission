import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import styles from "./Footer.module.css";
function Footer() {
    return (_jsxs("footer", Object.assign({ className: styles.container }, { children: [_jsx("div", Object.assign({ className: styles.companyInfo }, { children: _jsx("span", { children: "\u00A9codeit-2023" }) })), _jsxs("div", Object.assign({ className: styles.forUser }, { children: [_jsx("a", Object.assign({ href: "./pages/privacy/index.html" }, { children: "Privacy Policy" })), _jsx("a", Object.assign({ href: "./pages/faq/index.html" }, { children: "FAQ" }))] })), _jsxs("div", Object.assign({ className: styles.socialMedia }, { children: [_jsx("a", Object.assign({ href: "https://www.facebook.com/", target: "_blank", rel: "noreferrer" }, { children: _jsx(FaFacebook, {}) })), _jsx("a", Object.assign({ href: "https://twitter.com/", target: "_blank", rel: "noreferrer" }, { children: _jsx(FaTwitter, {}) })), _jsx("a", Object.assign({ href: "https://www.youtube.com/", target: "_blank", rel: "noreferrer" }, { children: _jsx(FaYoutube, {}) })), _jsx("a", Object.assign({ href: "https://www.instagram.com/accounts/login/?next=https%3A%2F%2Fwww.instagram.com%2F", target: "_blank", rel: "noreferrer" }, { children: _jsx(FaInstagram, {}) }))] }))] })));
}
export default Footer;
