import classNames from "classnames";
import styles from "./Avatar.module.css";

interface AvatarProps {
  src: string;
  size: string;
}

function Avatar({ src, size }: AvatarProps) {
  const avatarClass = classNames(styles.avatar, {
    [styles.small]: size === "small",
    [styles.medium]: size === "medium",
  });

  return <img className={avatarClass} src={src} alt="avatar" />;
}

export default Avatar;
