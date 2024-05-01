import styles from "./UserProfileAndTitle.module.css";
import Avatar from "../../../../globalComponents/Avatar";

function UserProfileAndTitle({ userName, folderName, folderImage }) {
  return (
    <section className={styles.container}>
      <Avatar size="medium" src={folderImage} />
      <div className={styles.userName}>@{userName}</div>
      <div className={styles.folderName}>{folderName}</div>
    </section>
  );
}

export default UserProfileAndTitle;
