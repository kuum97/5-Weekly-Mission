import { useForm } from "react-hook-form";
import { postEmailCheck } from "@/api";
import { emailPattern, passwordPattern } from "@/constants";
import AuthHeader from "@/common/Auth/Header";
import AuthForm, { FormValues } from "@/common/Auth/Form";
import AuthInput from "@/common/Auth/Input";
import SocialAuthBox from "@/components/SocialAuthBox";
import styles from "@/styles/Auth.module.css";
import React from "react";

function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setError,
  } = useForm<FormValues>({ mode: "onBlur" });

  const password = watch("password");

  const handleEmailCheck = async (e: React.FocusEvent<HTMLInputElement>) => {
    const email = e.target.value;
    try {
      const result = await postEmailCheck(email);
      console.log("result", result);

      if (typeof result === "string") {
        setError(
          "email",
          { type: "onBlur", message: result },
          { shouldFocus: true }
        );
      }

      return;
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className={styles.container}>
      <AuthHeader purpose="signup" />
      <main className={styles.main}>
        <AuthForm purpose="signup" handleSubmit={handleSubmit}>
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
                onBlur: (e) => handleEmailCheck(e),
              }),
            }}
            error={errors.email}
          />
          <AuthInput
            label="비밀번호"
            type="password"
            placeholder="영문, 숫자를 조합해 8자 이상 입력해 주세요"
            register={{
              ...register("password", {
                required: "비밀번호를 입력해 주세요",
                pattern: {
                  value: passwordPattern,
                  message: "영문, 숫자를 조합해 8자 이상 입력해 주세요",
                },
              }),
            }}
            error={errors.password}
          />
          <AuthInput
            label="비밀번호 확인"
            type="password"
            placeholder="비밀번호와 일치하는 값을 입력해 주세요"
            register={{
              ...register("passwordConfirm", {
                required: "비밀번호와 일치하는 값을 입력해 주세요",
                validate: (value) =>
                  value === password || "비밀번호와 일치하지 않습니다",
              }),
            }}
            error={errors.passwordConfirm}
          />
        </AuthForm>
        <SocialAuthBox />
      </main>
    </div>
  );
}

export default Signup;
