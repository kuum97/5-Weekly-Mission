import styles from "./Modal.module.css";

function Modal({ children, onClick }) {
  return (
    <div className={styles.background}>
      <div className={styles.container}>
        {children}
        <button className={styles.exitButton} onClick={onClick}>
          X
        </button>
      </div>
    </div>
  );
}

export default Modal;
