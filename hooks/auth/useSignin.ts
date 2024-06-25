import { postSignin } from "@/api";
import { AuthHookProp, FormValues } from "@/types/form";
import { useRouter } from "next/router";
import { SubmitHandler } from "react-hook-form";

export function useSignin({ setError }: AuthHookProp) {
  const router = useRouter();
  const localAccessToken = localStorage.getItem("accessToken");

  const handleSignin: SubmitHandler<FormValues> = async (data) => {
    const { email, password } = data;

    try {
      const result = await postSignin({ email, password });
      const resultAccessToken = result.data.accessToken;

      if (localAccessToken === resultAccessToken) {
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
