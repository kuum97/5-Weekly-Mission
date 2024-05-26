import { getUserByToken } from "@/api";
import { IS_CLIENT } from "@/constants";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";

export interface QueryTokenProp {
  localAccessToken: string | null | false;
}

export function useUser({ localAccessToken }: QueryTokenProp) {
  const router = useRouter();

  const {
    data: user,
    isLoading: isLoadingUser,
    isError: isErrorUser,
  } = useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      if (!localAccessToken) {
        router.replace("/signin");
        return null;
      }
      const data = await getUserByToken({ token: localAccessToken });

      return data;
    },
    enabled: IS_CLIENT,
  });

  return { user, isLoadingUser, isErrorUser };
}
