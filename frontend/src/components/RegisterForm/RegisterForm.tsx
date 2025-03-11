import { Button, Stack } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { emailRegex, passwordRegex } from "../../utils/regexPatterns";
import { FormPasswordField } from "../ui/FormPasswordField/FormPasswordField";
import { LuMail, LuUser } from "react-icons/lu";
import FormTextField from "../ui/FormTextField/FormTextField";
import { CreateAccountBody } from "../../types/Auth.types";
import { useValidateField } from "../hooks/useValidateField";

interface Props {
  isPending: boolean;
  createAccount: (data: CreateAccountBody) => void;
}

const RegisterForm = ({ createAccount, isPending }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateAccountBody>({
    mode: "onBlur",
  });
  const { validateField } = useValidateField();

  const onSubmit = handleSubmit((data) => createAccount(data));

  return (
    <form onSubmit={onSubmit}>
      <Stack w="xs" sm={{ w: "350px" }} gap="1.5rem">
        <FormTextField
          label="Login"
          invalid={!!errors.login}
          errorText={errors.login?.message}
          startElement={<LuUser />}
          placeholder="Type your login"
          register={register}
          name="login"
          registerOptions={{
            required: "Login is required.",
            minLength: {
              value: 3,
              message: "Login must be at least 3 characters long.",
            },
            validate: async (value) => {
              const result = await validateField({ login: value });
              return result.isUnique || "Login already taken";
            },
          }}
        />
        <FormTextField
          label="Email"
          invalid={!!errors.email}
          errorText={errors.email?.message}
          startElement={<LuMail />}
          placeholder="Type your email"
          register={register}
          name="email"
          registerOptions={{
            required: "Email is required.",
            pattern: {
              value: emailRegex,
              message: "Please enter a valid email",
            },
            validate: async (value) => {
              const result = await validateField({ email: value });
              return result.isUnique || "Email already taken";
            },
          }}
        />
        <FormPasswordField
          label="Password"
          invalid={!!errors.password}
          errorText={errors.password?.message}
          fieldName={"password"}
          fieldPlaceholder="Type your password"
          register={register}
          registerOptions={{
            required: "Password is required.",
            pattern: {
              value: passwordRegex,
              message:
                "Password must contain at least 8 characters, including one uppercase letter, one number, and one special character.",
            },
          }}
        />
        <Button type="submit" loading={isPending}>
          Create account
        </Button>
      </Stack>
    </form>
  );
};

export default RegisterForm;
