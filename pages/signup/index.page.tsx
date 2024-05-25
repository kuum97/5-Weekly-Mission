import { SubmitHandler, useForm } from "react-hook-form";
import { postEmailCheck, postSignup } from "@/api";
import { EMAIL_PATTERN, PW_PATTERN } from "@/constants";
import AuthHeader from "@/common/Auth/Header";
import AuthForm, { FormValues } from "@/common/Auth/Form";
import AuthInput from "@/common/Auth/Input";
import SocialAuthBox from "@/components/SocialAuthBox";
import styles from "@/styles/Auth.module.css";
import React from "react";
import { useRouter } from "next/router";

function Signup() {
  const router = useRouter();
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

      if (result) {
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

  const handleSignup: SubmitHandler<FormValues> = async ({
    email,
    password,
  }) => {
    try {
      const result = await postSignup({ email, password });

      localStorage.setItem("accessToken", result.data.accessToken);
      router.push("/folder");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className={styles.container}>
      <AuthHeader purpose="signup" />
      <main className={styles.main}>
        <AuthForm
          purpose="signup"
          handleSubmit={handleSubmit}
          onSubmit={handleSignup}
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
              onBlur: (e) => handleEmailCheck(e),
            })}
            error={errors.email}
          />
          <AuthInput
            label="비밀번호"
            type="password"
            placeholder="영문, 숫자를 조합해 8자 이상 입력해 주세요"
            register={register("password", {
              required: "비밀번호를 입력해 주세요",
              pattern: {
                value: PW_PATTERN,
                message: "영문, 숫자를 조합해 8자 이상 입력해 주세요",
              },
            })}
            error={errors.password}
          />
          <AuthInput
            label="비밀번호 확인"
            type="password"
            placeholder="비밀번호와 일치하는 값을 입력해 주세요"
            register={register("passwordConfirm", {
              required: "비밀번호와 일치하는 값을 입력해 주세요",
              validate: (value) =>
                value === password || "비밀번호와 일치하지 않습니다",
            })}
            error={errors.passwordConfirm}
          />
        </AuthForm>
        <SocialAuthBox />
      </main>
    </div>
  );
}

export default Signup;
