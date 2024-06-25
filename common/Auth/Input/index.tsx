import React, { InputHTMLAttributes, forwardRef, useState } from "react";
import { FaEyeSlash, FaEye } from "react-icons/fa";
import styles from "./index.module.css";
import {
  FieldError,
  FieldErrorsImpl,
  FieldValues,
  Merge,
} from "react-hook-form";
import classNames from "classnames";

interface AuthInputProps extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  label: string;
  register: FieldValues;
  error?: FieldError | Merge<FieldError, FieldErrorsImpl>;
}

function AuthInput(
  { id, label, type, placeholder, register, error }: AuthInputProps,
  ref: React.ForwardedRef<HTMLInputElement>
) {
  const [isVisible, setIsVisible] = useState(false);

  const handleToggleVisibility = () => {
    if (typeof ref !== "function" && ref?.current) {
      ref.current.type = isVisible ? "password" : "text";
    }
    setIsVisible(!isVisible);
  };

  return (
    <div className={styles.container}>
      <label className={styles.inputLabel} htmlFor={id}>
        {label}
      </label>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        className={classNames(styles.inputWrapper, {
          [styles.errorBorder]: error,
        })}
        {...register}
        ref={(e) => {
          register.ref(e);
          if (typeof ref === "function") {
            ref(e);
          } else if (ref) {
            ref.current = e;
          }
        }}
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

export default forwardRef(AuthInput);
