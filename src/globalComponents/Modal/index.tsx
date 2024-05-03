import styles from "./Modal.module.css";

interface ModalProps {
  children: React.ReactNode;
  onClick: () => void;
}

function Modal({ children, onClick }: ModalProps) {
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
