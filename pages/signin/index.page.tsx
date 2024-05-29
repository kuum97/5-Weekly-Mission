import AuthHeader from "@/common/Auth/Header";
import SocialAuthBox from "@/components/SocialAuthBox";
import styles from "@/styles/Auth.module.css";
import AuthForm, { FormValues } from "@/common/Auth/Form";
import AuthInput from "@/common/Auth/Input";
import { useForm } from "react-hook-form";
import { EMAIL_PATTERN } from "@/constants";
import { useRef } from "react";
import { useSignin } from "@/hooks/auth/useSignin";

function Signin() {
  const passwordRef = useRef<HTMLInputElement | null>(null);
  const {
    register,
    formState: { errors },
    handleSubmit,
    setError,
  } = useForm<FormValues>({ mode: "onBlur" });
  const { handleSignin } = useSignin({ setError });

  return (
    <div className={styles.container}>
      <AuthHeader purpose="signin" />
      <main className={styles.main}>
        <AuthForm
          purpose="signin"
          handleSubmit={handleSubmit}
          onSubmit={handleSignin}
        >
          <AuthInput
            label="이메일"
            type="text"
            placeholder="이메일을 입력해 주세요"
            register={register("email", {
              required: "이메일을 입력해 주세요",
              pattern: {
                value: EMAIL_PATTERN,
                message: "올바른 형식의 이메일을 입력해 주세요",
              },
            })}
            error={errors.email}
          />
          <AuthInput
            label="비밀번호"
            type="password"
            placeholder="비밀번호를 입력해 주세요"
            register={register("password", {
              required: "비밀번호를 입력해 주세요",
            })}
            error={errors.password}
            ref={passwordRef}
          />
        </AuthForm>
        <SocialAuthBox />
      </main>
    </div>
  );
}

export default Signin;
