import { Button, Stack, Link as ChakraLink, VStack } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { FormPasswordField } from "../ui/FormPasswordField/FormPasswordField";
import { LuUser } from "react-icons/lu";
import FormTextField from "../ui/FormTextField/FormTextField";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

interface FormValues {
  login: string;
  password: string;
}

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const { loginReq } = useAuth();

  const onSubmit = handleSubmit((data) => loginReq(data));

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
          }}
        />
        <VStack alignItems="flex-end">
          <ChakraLink asChild fontSize="sm">
            <Link to="/forgot-password">Forgot password?</Link>
          </ChakraLink>
          <ChakraLink asChild fontSize="sm">
            <Link to="/resend-verification">
              Activation email not received?
            </Link>
          </ChakraLink>
        </VStack>
        <Button type="submit">Login</Button>
      </Stack>
    </form>
  );
};

export default LoginForm;
