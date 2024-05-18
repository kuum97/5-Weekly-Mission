import AuthInput from "@/common/Auth/Input";
import styles from "./index.module.css";

interface SigninFormProps {
  ref: any;
}

function SigninForm({ ref }: SigninFormProps) {
  return (
    <form className={styles.formContainer}>
      <AuthInput type="email" ref={ref} />
      <AuthInput type="password" ref={ref} />
      <button className={styles.submitBtn} type="submit">
        로그인
      </button>
    </form>
  );
}

export default SigninForm;
