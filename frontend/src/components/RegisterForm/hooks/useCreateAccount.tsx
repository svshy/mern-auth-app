import { useMutation } from "@tanstack/react-query";
import RegisterData from "../../../types/RegisterData.types";
import AuthAPI from "../../../api/auth.api";

export const useCreateAccount = () => {
  const { mutate: createAccountMutate, isPending } = useMutation({
    mutationFn: (data: RegisterData) => AuthAPI.createAccount(data),
    onSuccess: () => console.log("success"),
    onError: () => console.log("error"),
  });

  return {
    createAccountMutate,
    isPending,
  };
};
