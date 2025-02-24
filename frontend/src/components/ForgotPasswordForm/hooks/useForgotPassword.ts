import AuthAPI from "../../../api/auth.api";
import { ForgotPasswordBody } from "../../../types/Auth.types";
import { toaster } from "../../ui/Toaster/Toaster";
import useMutation from "../../../hooks/useMutation";

export const useForgotPassword = () => {
  const {
    mutate: forgotPasswordReq,
    isPending,
    isSuccess,
    isError,
    error,
  } = useMutation({
    mutationFn: (data: ForgotPasswordBody) => AuthAPI.forgotPassword(data),
    onError: (error) => {
      toaster.create({
        type: "error",
        description: error.error,
      });
    },
  });

  return {
    forgotPasswordReq,
    isPending,
    isSuccess,
    isError,
    error,
  };
};
