import AuthAPI from "../../../api/auth.api";
import { ResendActivationBody } from "../../../types/Auth.types";
import { toaster } from "../../ui/Toaster/Toaster";
import useMutation from "../../../hooks/useMutation";

export const useResendActivationEmail = () => {
  const {
    mutate: resendEmailReq,
    isPending,
    isSuccess,
    isError,
    error,
  } = useMutation({
    mutationFn: (data: ResendActivationBody) =>
      AuthAPI.resendActivationEmail(data),
    onError: (error) => {
      toaster.create({
        type: "error",
        description: error.error,
      });
    },
  });

  return {
    resendEmailReq,
    isPending,
    isSuccess,
    isError,
    error,
  };
};
