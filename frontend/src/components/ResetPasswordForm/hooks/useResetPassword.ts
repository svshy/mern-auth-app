import AuthAPI from "../../../api/auth.api";
import { ResetPasswordBody } from "../../../types/Auth.types";
import { toaster } from "../../ui/Toaster/Toaster";
import useMutation from "../../../hooks/useMutation";

export const useResetPassword = () => {
  const {
    mutate: resetPasswordReq,
    isPending,
    isSuccess,
    isError,
    error,
  } = useMutation({
    mutationFn: ({ data, token }: { data: ResetPasswordBody; token: string }) =>
      AuthAPI.resetPassword(data, token),
    onError: (error) => {
      toaster.create({
        type: "error",
        description: error.error,
      });
    },
  });

  return {
    resetPasswordReq,
    isPending,
    isSuccess,
    isError,
    error,
  };
};
