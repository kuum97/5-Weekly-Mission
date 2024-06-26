import { postSignin } from "@/api";
import { FormValues } from "@/types/form";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { SubmitHandler } from "react-hook-form";

function useSignin() {
  const router = useRouter();
  const mutation = useMutation({ mutationFn: postSignin });

  const handleSignin: SubmitHandler<FormValues> = ({ email, password }) => {
    try {
      mutation.mutate({ email, password });
      console.log("로그인 성공!");
    } catch (error) {
      console.error(error);
    }
  };

  return { handleSignin };
}

export default useSignin;
