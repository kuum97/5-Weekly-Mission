import { CODEIT_BASE_URL, IS_CLIENT } from "@/constants";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";

interface UserProps {
  localAccessToken: string | null | false;
}

export function useUser({ localAccessToken }: UserProps) {
  const router = useRouter();

  const {
    data: user,
    isLoading: isLoadingUser,
    isError: isErrorUser,
  } = useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      if (!localAccessToken) return router.push("/signin");
      const response = await fetch(`${CODEIT_BASE_URL}/users`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: localAccessToken,
        },
      });
      const { data } = await response.json();

      return data[0];
    },
    enabled: !!localAccessToken && IS_CLIENT,
  });

  return { user, isLoadingUser, isErrorUser };
}
