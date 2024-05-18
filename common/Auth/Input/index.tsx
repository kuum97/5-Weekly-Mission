import { HTMLInputTypeAttribute, forwardRef } from "react";
import { FaEyeSlash } from "react-icons/fa";
import styles from "./index.module.css";

interface AuthInputProps {
  label: string;
  type: HTMLInputTypeAttribute;
  placeholder: string;
}

const AuthInput = forwardRef<HTMLInputElement, AuthInputProps>(
  function AuthInput({ label, type, placeholder }, ref) {
    return (
      <div className={styles.container}>
        <label className={styles.inputLabel} htmlFor={type}>
          {label}
        </label>
        <input
          type={type}
          ref={ref}
          placeholder={placeholder}
          className={styles.inputWrapper}
        />
        {type === "password" && (
          <button className={styles.eyeSlash} type="button">
            <FaEyeSlash />
          </button>
        )}
      </div>
    );
  }
);

export default AuthInput;
