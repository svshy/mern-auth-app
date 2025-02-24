import { useForm } from "react-hook-form";
import { Button, Stack } from "@chakra-ui/react";
import { FormPasswordField } from "../ui/FormPasswordField/FormPasswordField";
import { passwordRegex } from "../../utils/regexPatterns";
import { ResetPasswordBody } from "../../types/Auth.types";

interface ResetPasswordFormValues {
  password: string;
  confirmPassword: string;
}

interface Props {
  isPending: boolean;
  resetPassword: ({
    data,
    token,
  }: {
    data: ResetPasswordBody;
    token: string;
  }) => void;
  token: string;
}

const ResetPasswordForm = ({ isPending, resetPassword, token }: Props) => {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<ResetPasswordFormValues>({ mode: "onChange" });

  const onSubmit = handleSubmit((data) =>
    resetPassword({ data: { password: data.password }, token }),
  );

  return (
    <form onSubmit={onSubmit}>
      <Stack w="xs" sm={{ w: "350px" }} gap="1.5rem">
        <FormPasswordField
          label="New password"
          invalid={!!errors.password}
          errorText={errors.password?.message}
          fieldName={"password"}
          fieldPlaceholder="Type your new password"
          register={register}
          registerOptions={{
            required: "New password is required.",
            pattern: {
              value: passwordRegex,
              message:
                "Password must contain at least 8 characters, including one uppercase letter, one number, and one special character.",
            },
          }}
        />
        <FormPasswordField
          label="Confirm password"
          invalid={!!errors.confirmPassword}
          errorText={errors.confirmPassword?.message}
          fieldName={"confirmPassword"}
          fieldPlaceholder="Confirm your new password"
          register={register}
          registerOptions={{
            required: "New password is required.",
            validate: (value) =>
              value === getValues("password") || "Passwords should match!",
          }}
          onPaste={(e) => {
            e.preventDefault();
            return false;
          }}
        />
        <Button type="submit" loading={isPending}>
          Change password
        </Button>
      </Stack>
    </form>
  );
};

export default ResetPasswordForm;
