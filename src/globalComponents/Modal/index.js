import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import styles from "./Modal.module.css";
function Modal({ children, onClick }) {
    return (_jsx("div", Object.assign({ className: styles.background }, { children: _jsxs("div", Object.assign({ className: styles.container }, { children: [children, _jsx("button", Object.assign({ className: styles.exitButton, onClick: onClick }, { children: "X" }))] })) })));
}
export default Modal;
