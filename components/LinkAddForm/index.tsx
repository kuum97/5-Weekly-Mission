import { FaLink } from "react-icons/fa";
import styles from "./LinkAddForm.module.css";

function LinkAddForm() {
  return (
    <section className={styles.container}>
      <form className={styles.form}>
        <FaLink className={styles.linkIcon} />
        <input
          className={styles.input}
          type="text"
          placeholder="링크를 추가해 보세요"
        />
        <button className={styles.button}>추가하기</button>
      </form>
    </section>
  );
}

export default LinkAddForm;
