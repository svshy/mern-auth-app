import { Button, Stack } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { emailRegex, passwordRegex } from "../../utils/regexPatterns";
import { FormPasswordField } from "../ui/FormPasswordField/FormPasswordField";
import { LuMail, LuUser } from "react-icons/lu";
import FormTextField from "../ui/FormTextField/FormTextField";

interface FormValues {
  login: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const AuthForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    mode: "onTouched",
  });

  const onSubmit = handleSubmit((data) => console.log(data));

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
        <Button type="submit">Submit</Button>
      </Stack>
    </form>
  );
};

export default AuthForm;
