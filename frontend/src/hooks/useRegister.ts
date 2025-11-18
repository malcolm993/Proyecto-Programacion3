import { useMutation } from "@tanstack/react-query";
import { register } from "../lib/api";
import { RegisterData } from "../types/Register";

export const useRegister = () => {
  const { mutate, isPending, isError, error, isSuccess } = useMutation({
    mutationFn: register,
  });

  const registerUser = async (data: RegisterData): Promise<boolean> => {
    try {
      await mutate(data);
      return true;
    } catch {
      return false;
    }
  };

  return { 
    register: registerUser, 
    isPending, 
    isError, 
    error: error as Error,
    isSuccess 
  };
};