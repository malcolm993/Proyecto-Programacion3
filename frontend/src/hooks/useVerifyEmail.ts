import { useMutation } from "@tanstack/react-query";
import { verifyEmail } from "../lib/api";

export const useVerifyEmail = () => {
  const { mutate, isPending, isError, isSuccess } = useMutation({
    mutationFn: verifyEmail,
  });

  return { 
    verifyEmail: mutate, 
    isPending, 
    isError, 
    isSuccess 
  };
};