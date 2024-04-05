import Avatar from "../../../globalComponents/Avatar";
import styles from "./UserProfileAndTitle.module.css";

function UserProfileAndTitle({ userProfileData, folderData }) {
  const { profileImageSource, name } = userProfileData;

  return (
    <div className={styles.container}>
      <Avatar size="medium" src={profileImageSource} />
      <div className={styles.userName}>@{name}</div>
      <div className={styles.folderName}>{folderData.name}</div>
    </div>
  );
}

export default UserProfileAndTitle;
