import AuthAPI from "../../../api/auth.api";
import { CreateAccountBody } from "../../../types/Auth.types";
import { toaster } from "../../ui/Toaster/Toaster";
import useMutation from "../../../hooks/useMutation";

export const useCreateAccount = () => {
  const {
    mutate: createAccountReq,
    isPending,
    isSuccess,
  } = useMutation({
    mutationFn: (data: CreateAccountBody) => AuthAPI.createAccount(data),
    onError: (error) => {
      toaster.create({
        type: "error",
        description: error.error,
      });
    },
  });

  return {
    createAccountReq,
    isPending,
    isSuccess,
  };
};
