import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { FaLink } from "react-icons/fa";
import styles from "./LinkAddForm.module.css";
function LinkAddForm() {
    return (_jsx("section", Object.assign({ className: styles.container }, { children: _jsxs("form", Object.assign({ className: styles.form }, { children: [_jsx(FaLink, { className: styles.linkIcon }), _jsx("input", { className: styles.input, type: "text", placeholder: "\uB9C1\uD06C\uB97C \uCD94\uAC00\uD574 \uBCF4\uC138\uC694" }), _jsx("button", Object.assign({ className: styles.button }, { children: "\uCD94\uAC00\uD558\uAE30" }))] })) })));
}
export default LinkAddForm;
