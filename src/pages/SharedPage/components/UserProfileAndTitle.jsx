import Avatar from "../../../globalComponents/Avatar";
import styles from "./UserProfileAndTitle.module.css";

function UserProfileAndTitle({ userProfileData, folderData }) {
  return (
    <div className={styles.container}>
      <Avatar size="medium" src={folderData.owner.profileImageSource} />
      <div className={styles.userName}>@{userProfileData.name}</div>
      <div className={styles.folderName}>{folderData.name}</div>
    </div>
  );
}

export default UserProfileAndTitle;
