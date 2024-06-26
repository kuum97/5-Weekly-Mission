import { postSignin } from "@/api";
import { AuthHookProp, FormValues } from "@/types/form";
import { useRouter } from "next/router";
import { SubmitHandler } from "react-hook-form";

function useSignin({ setError }: AuthHookProp) {
  const router = useRouter();
  const localAccessToken = localStorage.getItem("accessToken");

  const handleSignin: SubmitHandler<FormValues> = async (data) => {
    const { email, password } = data;
  };

  return;
}

export default useSignin;
