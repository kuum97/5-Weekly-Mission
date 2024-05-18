import { InputHTMLAttributes, forwardRef, useState } from "react";
import { FaEyeSlash } from "react-icons/fa";
import styles from "./index.module.css";

interface Props extends InputHTMLAttributes<HTMLInputElement> {}

const AuthInput = forwardRef<HTMLInputElement, Props>(function AuthInput(
  { type },
  ref
) {
  return (
    <div className={styles.container}>
      <label className={styles.inputLabel} htmlFor={type}>
        {type === "password" ? "비밀번호" : "이메일"}
      </label>
      <input
        type={type}
        ref={ref}
        placeholder="내용 입력"
        className={styles.inputWrapper}
      />
      {type === "password" && (
        <button className={styles.eyeSlash} type="button">
          <FaEyeSlash />
        </button>
      )}
    </div>
  );
});

export default AuthInput;
