import { CODEIT_BASE_URL } from "@/constants";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { useUserState } from "../state/useUserState";

interface UseUserProps {
  localAccessToken: string | null | false;
}

export function useUser({ localAccessToken }: UseUserProps) {
  const setUser = useUserState((state) => state.setUser);
  const router = useRouter();

  const { data } = useQuery({
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
    enabled: !!localAccessToken,
  });

  if (data) {
    setUser(data);
  }

  return { data };
}
