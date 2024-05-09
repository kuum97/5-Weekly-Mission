import styles from "globalComponents/Modal/ModalChildren.module.css";

function FolderEditForm() {
  return (
    <>
      <h1 className={styles.title}>폴더 이름 변경</h1>
      <form className={styles.formContainer}>
        <input
          className={styles.formInput}
          type="text"
          placeholder="유용한 팁"
        />
        <button className={styles.formButton}>변경하기</button>
      </form>
    </>
  );
}

export default FolderEditForm;
