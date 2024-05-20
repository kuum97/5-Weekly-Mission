import Avatar from "@/common/Avatar";
import styles from "./index.module.css";

interface UserProfileAndTitleProps {
  userName: string;
  folderName: string;
  folderImage: string;
}

function UserProfileAndTitle({
  userName,
  folderName,
  folderImage,
}: UserProfileAndTitleProps) {
  return (
    <section className={styles.container}>
      <Avatar size="medium" src={folderImage} />
      <div className={styles.userName}>@{userName}</div>
      <div className={styles.folderName}>{folderName}</div>
    </section>
  );
}

export default UserProfileAndTitle;
