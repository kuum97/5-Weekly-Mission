import {
  FieldValues,
  SubmitHandler,
  UseFormHandleSubmit,
} from "react-hook-form";
import styles from "./index.module.css";
import { ReactNode } from "react";

export interface FormValues {
  email: string;
  password: number;
  passwordConfirm?: number;
}

export interface AuthFormProps {
  children?: ReactNode;
  handleSubmit: UseFormHandleSubmit<FormValues>;
  purpose: string;
}

function AuthForm({ children, handleSubmit, purpose }: AuthFormProps) {
  const onSubmit: SubmitHandler<FormValues> = (data) => console.log(data);

  return (
    <form className={styles.formContainer} onSubmit={handleSubmit(onSubmit)}>
      {children}
      <button className={styles.submitBtn} type="submit">
        {(purpose === "signin" && "로그인") ||
          (purpose === "signup" && "회원가입")}
      </button>
    </form>
  );
}

export default AuthForm;
