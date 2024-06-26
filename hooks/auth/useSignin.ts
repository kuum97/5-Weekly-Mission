import { postSignin } from "@/api";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/router";

interface AuthProps {
  email: string;
  password: string;
}

function useSignin() {
  const router = useRouter();
  const mutation = useMutation({ mutationFn: postSignin });

  const handleSignin = ({ email, password }: AuthProps) => {
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
