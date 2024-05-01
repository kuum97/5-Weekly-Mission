import styles from "../../../../../../globalComponents/Modal/ModalChildren.module.css";

function LinkAddToFolderForm() {
  return (
    <>
      <h1 className={styles.title}>폴더에 추가</h1>
      <h2 className={styles.subTitle}>링크 주소</h2>
      <form className={styles.formContainer}>
        <ul className={styles.inputList}>
          <li>
            <button>코딩 팁</button>
          </li>
          <li>
            <button>채용 사이트</button>
          </li>
          <li>
            <button>유용한 글</button>
          </li>
          <li>
            <button>나만의 장소</button>
          </li>
        </ul>
        <button className={styles.formButton}>추가하기</button>
      </form>
    </>
  );
}

export default LinkAddToFolderForm;
