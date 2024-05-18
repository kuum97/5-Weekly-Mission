import AuthInput from "@/common/Auth/Input";
import styles from "../index.module.css";

interface SignupFormProps {
  ref: any;
}

function SignupForm({ ref }: SignupFormProps) {
  return (
    <form className={styles.formContainer}>
      <AuthInput
        type="email"
        label="이메일"
        placeholder="이메일을 입력해주세요"
        ref={ref}
      />
      <AuthInput
        type="password"
        label="비밀번호"
        placeholder="비밀번호를 입력해주세요"
        ref={ref}
      />
      <AuthInput
        type="password"
        label="비밀번호 확인"
        placeholder="비밀번호와 일치하는 값을 입력해주세요"
        ref={ref}
      />
      <button className={styles.submitBtn} type="submit">
        회원가입
      </button>
    </form>
  );
}

export default SignupForm;
