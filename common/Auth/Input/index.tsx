import { HTMLInputTypeAttribute, useRef, useState } from "react";
import { FaEyeSlash, FaEye } from "react-icons/fa";
import styles from "./index.module.css";
import {
  FieldError,
  FieldErrorsImpl,
  FieldValues,
  Merge,
} from "react-hook-form";
import classNames from "classnames";

interface AuthInputProps {
  label: string;
  type: HTMLInputTypeAttribute;
  placeholder: string;
  register: FieldValues;
  error?: FieldError | Merge<FieldError, FieldErrorsImpl>;
}

function AuthInput({
  label,
  type,
  placeholder,
  register,
  error,
}: AuthInputProps) {
  const [isVisible, setIsVisible] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleToggleVisibility = () => {
    if (inputRef.current) {
      inputRef.current.type = isVisible ? "password" : "text";
    }
    setIsVisible(!isVisible);
  };

  return (
    <div className={styles.container}>
      <label className={styles.inputLabel} htmlFor={type}>
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        className={classNames(styles.inputWrapper, {
          [styles.errorBorder]: error,
        })}
        {...register}
        ref={inputRef}
      />
      {error && (
        <p className={styles.errorMessage}>{error.message?.toString()}</p>
      )}
      {type === "password" && (
        <button
          className={styles.eyeSlash}
          type="button"
          onClick={handleToggleVisibility}
        >
          {!isVisible ? <FaEye /> : <FaEyeSlash />}
        </button>
      )}
    </div>
  );
}

export default AuthInput;
