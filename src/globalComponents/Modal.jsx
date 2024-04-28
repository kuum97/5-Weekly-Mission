import styles from "./Modal.module.css";

function Modal({ children, onClick, title, subTitle }) {
  return (
    <div className={styles.background}>
      <div className={styles.container}>
        <h1 className={styles.title}>{title}</h1>
        {subTitle && <h2 className={styles.subTitle}>{subTitle}</h2>}
        {children}
        <button className={styles.exitButton} onClick={() => onClick("exit")}>
          X
        </button>
      </div>
    </div>
  );
}

export default Modal;
