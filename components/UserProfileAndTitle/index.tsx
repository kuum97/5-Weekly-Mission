import { useStoreState } from "@/hooks/state";
import Avatar from "@/common/Avatar";
import styles from "./index.module.css";
import { useRouter } from "next/router";

function UserProfileAndTitle() {
  const { query } = useRouter();
  const { folderId } = query;
  const queryId = Number(folderId);
  const { user, folders } = useStoreState();
  const currentFolderName = folders
    ?.filter(({ id }) => id === queryId)
    .map(({ name }) => name)
    .toString();

  if (!user) {
    return <div>유저가 없어요</div>;
  }

  return (
    <section className={styles.container}>
      <Avatar size="medium" src={user.image_source} />
      <div className={styles.userName}>@{user.name}</div>
      <div className={styles.folderName}>{currentFolderName}</div>
    </section>
  );
}

export default UserProfileAndTitle;
