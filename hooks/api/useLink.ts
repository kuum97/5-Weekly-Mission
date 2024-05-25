import { getLinksByUserIdAndFolderId } from "@/api";
import { IS_CLIENT } from "@/constants";
import { UserDataProp } from "@/types/user";
import { useQuery } from "@tanstack/react-query";

interface LinkProps extends UserDataProp {
  folderId?: number;
}

export function useLink({ user, folderId }: LinkProps) {
  const {
    data: links,
    isLoading: isLoadingLinks,
    isError: isErrorLinks,
  } = useQuery({
    queryKey: ["links", user?.id, folderId],
    queryFn: async () => {
      if (!user) return;
      const data = await getLinksByUserIdAndFolderId({
        userId: user.id,
        folderId,
      });
      return data;
    },
    enabled: !!user && IS_CLIENT,
  });

  return { links, isLoadingLinks, isErrorLinks };
}
