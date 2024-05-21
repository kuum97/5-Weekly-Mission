import AuthHeader from "@/common/Auth/Header";
import SocialAuthBox from "@/components/SocialAuthBox";
import styles from "@/styles/Auth.module.css";
import AuthForm, { FormValues } from "@/common/Auth/Form";
import AuthInput from "@/common/Auth/Input";
import { SubmitHandler, useForm } from "react-hook-form";
import { emailPattern } from "@/constants";
import { postSignin } from "@/api";
import { useRouter } from "next/router";

function Signin() {
  const router = useRouter();
  const {
    register,
    formState: { errors },
    handleSubmit,
    setError,
  } = useForm<FormValues>();

  const handleSignin: SubmitHandler<FormValues> = async (data) => {
    const { email, password } = data;

    try {
      const result = await postSignin({ email, password });

      if (typeof result === "string") {
        const fields: (keyof FormValues)[] = ["email", "password"];

        fields.forEach((field) => {
          setError(field, {
            type: "manual",
            message: "이메일 또는 비밀번호를 확인해 주세요",
          });
        });

        return;
      }

      router.push("/folder");
    } catch (error) {
      console.error(error);
    }
  };

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
