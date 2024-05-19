import {
  FieldValues,
  SubmitHandler,
  UseFormHandleSubmit,
} from "react-hook-form";
import styles from "./index.module.css";
import { ReactNode } from "react";
import { postSignup } from "@/api";
import { useRouter } from "next/router";

export interface FormValues {
  email: string;
  password: number;
  passwordConfirm?: number;
}

export interface AuthFormProps {
  children?: ReactNode;
  onSubmit: UseFormHandleSubmit<FormValues>;
  purpose: string;
}

function AuthForm({ children, onSubmit, purpose }: AuthFormProps) {
  const router = useRouter();

  const handleSubmit: SubmitHandler<FormValues> = async (data) => {
    const { email, password } = data;

    try {
      await postSignup({ email, password });

      router.push("/folder");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form className={styles.formContainer} onSubmit={onSubmit(handleSubmit)}>
      {children}
      <button className={styles.submitBtn} type="submit">
        {(purpose === "signin" && "로그인") ||
          (purpose === "signup" && "회원가입")}
      </button>
    </form>
  );
}

export default AuthForm;
