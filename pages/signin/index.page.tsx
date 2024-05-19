import AuthHeader from "@/common/Auth/Header";
import SocialAuthBox from "@/components/SocialAuthBox";
import styles from "@/styles/Auth.module.css";
import AuthForm, { FormValues } from "@/common/Auth/Form";
import AuthInput from "@/common/Auth/Input";
import { useForm } from "react-hook-form";
import { emailPattern } from "@/constants";

function Signin() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<FormValues>();

  return (
    <div className={styles.container}>
      <AuthHeader purpose="signin" />
      <main className={styles.main}>
        <AuthForm purpose="signin" handleSubmit={handleSubmit}>
          <AuthInput
            label="이메일"
            type="text"
            placeholder="이메일을 입력해 주세요"
            register={{
              ...register("email", {
                required: "이메일을 입력해 주세요",
                pattern: {
                  value: emailPattern,
                  message: "올바른 형식의 이메일을 입력해 주세요",
                },
              }),
            }}
            error={errors.email}
          />
          <AuthInput
            label="비밀번호"
            type="password"
            placeholder="비밀번호를 입력해 주세요"
            register={{
              ...register("password", {
                required: "비밀번호를 입력해 주세요",
              }),
            }}
            error={errors.password}
          />
        </AuthForm>
        <SocialAuthBox />
      </main>
    </div>
  );
}

export default Signin;
