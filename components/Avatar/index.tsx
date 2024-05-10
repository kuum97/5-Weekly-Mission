import classNames from "classnames";
import styles from "./Avatar.module.css";
import Image from "next/image";

interface AvatarProps {
  src: string;
  size: string;
}

function Avatar({ src, size }: AvatarProps) {
  const avatarClass = classNames(styles.avatar, {
    [styles.small]: size === "small",
    [styles.medium]: size === "medium",
  });

  return (
    <div className={avatarClass}>
      <Image fill src={src} alt="avatar" />
    </div>
  );
}

export default Avatar;
