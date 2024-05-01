import styles from "../../../../../../globalComponents/Modal/ModalChildren.module.css";

function LinkDeleteForm() {
  return (
    <>
      <h1 className={styles.title}>링크 삭제</h1>
      <h2 className={styles.subTitle}>url</h2>
      <form className={styles.formContainer}>
        <button className={`${styles.formButton} ${styles.redBackground}`}>
          삭제하기
        </button>
      </form>
    </>
  );
}

export default LinkDeleteForm;
