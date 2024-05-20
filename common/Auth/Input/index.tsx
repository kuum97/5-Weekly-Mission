import { HTMLInputTypeAttribute } from "react";
import { FaEyeSlash } from "react-icons/fa";
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
      />
      {error && (
        <p className={styles.errorMessage}>{error.message?.toString()}</p>
      )}
      {type === "password" && (
        <button className={styles.eyeSlash} type="button">
          <FaEyeSlash />
        </button>
      )}
    </div>
  );
}

export default AuthInput;
