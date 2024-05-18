import { ReactNode } from "react";
import styles from "./index.module.css";

interface SocialButtonProp {
  children: ReactNode;
}

function SocialButton({ children }: SocialButtonProp) {
  return (
    <button
      className={styles.shareButton}
      // onClick={() => handleShareToKakao(title)}
    >
      {children}
    </button>
  );
}

export default SocialButton;
