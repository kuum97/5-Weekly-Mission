import { postSignin } from "@/api";
import { FormValues } from "@/common/Auth/Form";
import { LOCAL_ACCESSTOKEN } from "@/constants";
import { useRouter } from "next/router";
import { SubmitHandler, UseFormSetError } from "react-hook-form";

interface UseSigninProp {
  setError: UseFormSetError<FormValues>;
}

export function useSignin({ setError }: UseSigninProp) {
  const router = useRouter();

  const handleSignin: SubmitHandler<FormValues> = async (data) => {
    const { email, password } = data;

    try {
      const result = await postSignin({ email, password });
      const resultAccessToken = result.data.accessToken;

      if (LOCAL_ACCESSTOKEN === resultAccessToken) {
        router.replace("/folder");
        return;
      }

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

      localStorage.setItem("accessToken", resultAccessToken);
      router.replace("/folder");
    } catch (error) {
      console.error(error);
    }
  };

  return { handleSignin };
}
