import { getLinksByUserIdAndFolderId } from "@/api";
import { UserDataProp } from "@/types/user";
import { useQuery } from "@tanstack/react-query";

export function useLink({ user }: UserDataProp) {
  return useQuery({
    queryKey: ["links", user?.id],
    queryFn: async () => {
      const data = await getLinksByUserIdAndFolderId({ userId: user.id });
      return data;
    },
    enabled: !!user,
  });
}
