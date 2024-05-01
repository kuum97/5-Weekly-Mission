import { jsx as _jsx } from "react/jsx-runtime";
import classNames from "classnames";
import styles from "./Avatar.module.css";
function Avatar({ src, size }) {
    const avatarClass = classNames(styles.avatar, {
        [styles.small]: size === "small",
        [styles.medium]: size === "medium",
    });
    return _jsx("img", { className: avatarClass, src: src, alt: "avatar" });
}
export default Avatar;
