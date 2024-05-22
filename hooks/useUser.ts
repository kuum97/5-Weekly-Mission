import { getUserById } from "@/api";
import { SAMPLE_USER_ID } from "@/constants";
import { useQuery } from "@tanstack/react-query";

export const useUser = () => {
  return useQuery({
    queryKey: ["user", SAMPLE_USER_ID],
    queryFn: () => getUserById({ SAMPLE_USER_ID }),
  });
};
