import styles from "globalComponents/Modal/ModalChildren.module.css";

function FolderAddForm() {
  return (
    <>
      <h1 className={styles.title}>폴더 추가</h1>
      <form className={styles.formContainer}>
        <input
          className={styles.formInput}
          type="text"
          placeholder="내용 입력"
        />
        <button className={styles.formButton}>추가하기</button>
      </form>
    </>
  );
}

export default FolderAddForm;
