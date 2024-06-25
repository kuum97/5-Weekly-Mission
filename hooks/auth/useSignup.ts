import { postEmailCheck, postSignup } from "@/api";
import { AuthHookProp, FormValues } from "@/types/form";
import { useRouter } from "next/router";
import { SubmitHandler } from "react-hook-form";

function useSignup({ setError }: AuthHookProp) {
  const router = useRouter();

  const handleEmailCheck = async (e: React.FocusEvent<HTMLInputElement>) => {
    const email = e.target.value;
    try {
      if (email.length === 0) return;

      const result = await postEmailCheck(email);

      if (typeof result === "string") {
        setError(
          "email",
          { type: "value", message: result },
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
      await postSignup({ email, password });

      router.replace("/signin");
    } catch (error) {
      console.error(error);
    }
  };

  return { handleEmailCheck, handleSignup };
}

export default useSignup;
