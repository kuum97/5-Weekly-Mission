import styles from "./Modal.module.css";

function Modal({ children }) {
  return (
    <div className={styles.background}>
      <div className={styles.container}>
        <h1 className={styles.title}>title</h1>
        <h2 className={styles.subTitle}>subtitle</h2>
        {children}
        <button className={styles.exitButton}>X</button>
      </div>
    </div>
  );
}

export default Modal;
