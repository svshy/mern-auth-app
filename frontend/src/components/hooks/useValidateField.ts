import { useMutation } from "@tanstack/react-query";
import AuthAPI from "../../api/auth.api";
import { IsUserUniqueBody } from "../../types/Auth.types";
import { toaster } from "../ui/Toaster/Toaster";

export const useValidateField = () => {
  const { mutateAsync: validateField } = useMutation({
    mutationFn: (data: IsUserUniqueBody) => AuthAPI.isUserUnique(data),
    onError: (error) =>
      toaster.create({
        description: error.message,
        type: "error",
      }),
  });

  return { validateField };
};
