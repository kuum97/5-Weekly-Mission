import { getFoldersByUserId } from "@/api";
import { IS_CLIENT } from "@/constants";
import { UserDataProp } from "@/types/user";
import { useQuery } from "@tanstack/react-query";

export function useFolder({ user }: UserDataProp) {
  const {
    data: folders,
    isLoading: isLoadingFolders,
    isError: isErrorFolders,
  } = useQuery({
    queryKey: ["folders", user?.id],
    queryFn: async () => {
      if (!user) return;
      const data = await getFoldersByUserId({ userId: user.id });
      return data;
    },
    enabled: !!user && IS_CLIENT,
  });

  return { folders, isLoadingFolders, isErrorFolders };
}
