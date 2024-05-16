import { HTMLInputTypeAttribute, useState } from "react";
import { FaEyeSlash } from "react-icons/fa";
import styles from "./index.module.css";

interface InputProps {
  type: HTMLInputTypeAttribute;
}

// 추후에 벨리데이션 로직과 컴포넌트에서 사용할 때 리팩토링 예정
function Input({ type }: InputProps) {
  const [isError, setIsError] = useState(true);

  return (
    <div className={styles.container}>
      {isError ? (
        <>
          <input
            type={type}
            placeholder="내용 입력"
            className={`${styles.inputWrapper} ${styles.errorBorder}`}
          />
          <span className={styles.errorMessage}>내용을 다시 작성해주세요</span>
        </>
      ) : (
        <input
          type={type}
          placeholder="내용 입력"
          className={styles.inputWrapper}
        />
      )}
      {type === "password" && (
        <button className={styles.eyeSlash}>
          <FaEyeSlash />
        </button>
      )}
    </div>
  );
}

export default Input;
