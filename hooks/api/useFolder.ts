import { getFoldersByUserId } from "@/api";
import { UserDataProp } from "@/types/user";
import { useQuery } from "@tanstack/react-query";

export function useFolder({ user }: UserDataProp) {
  return useQuery({
    queryKey: ["folders", user?.id],
    queryFn: async () => {
      const data = await getFoldersByUserId({ userId: user.id });
      return data;
    },
    enabled: !!user,
  });
}
