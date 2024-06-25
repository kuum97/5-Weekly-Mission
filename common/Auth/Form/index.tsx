import { AuthFormProps } from "@/types/form";
import styles from "./index.module.css";

function AuthForm({
  children,
  onSubmit,
  handleSubmit,
  purpose,
}: AuthFormProps) {
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
