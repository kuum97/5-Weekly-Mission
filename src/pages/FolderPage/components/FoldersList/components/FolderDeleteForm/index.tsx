import styles from "../../../../../../globalComponents/Modal/ModalChildren.module.css";

function FolderDeleteForm() {
  return (
    <>
      <h1 className={styles.title}>폴더 삭제</h1>
      <h2 className={styles.subTitle}>폴더명</h2>
      <form className={styles.formContainer}>
        <button className={`${styles.formButton} ${styles.redBackground}`}>
          삭제하기
        </button>
      </form>
    </>
  );
}

export default FolderDeleteForm;
