import { useQuery } from "@tanstack/react-query";
import { getUser } from "../lib/api";
import { User } from "../types/User";

export const USER = "user";

const useUser = () => {
  const { data: user, ...rest } = useQuery<User | null>({
    queryKey: [USER],
    queryFn: getUser,
    retry: false,
  });

  return { user, ...rest };
};

export default useUser;