import Avatar from "globalComponents/Avatar";
import styles from "./UserProfileAndTitle.module.css";

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
