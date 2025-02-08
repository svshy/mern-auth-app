import {
  Button,
  HStack,
  Stack,
  Separator,
  Text,
  Link as ChakraLink,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { FormPasswordField } from "../ui/FormPasswordField/FormPasswordField";
import { LuUser } from "react-icons/lu";
import FormTextField from "../ui/FormTextField/FormTextField";
import { Link } from "react-router-dom";

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
        />
        <FormPasswordField
          label="Password"
          invalid={!!errors.password}
          errorText={errors.password?.message}
          fieldName={"password"}
          fieldPlaceholder="Type your password"
          register={register}
        />
        <Button type="submit">Login</Button>
        <HStack>
          <Separator flex="1" />
          <Text flexShrink="0">or</Text>
          <Separator flex="1" />
        </HStack>
        <Text alignSelf="center">
          Don't have an account?{" "}
          <ChakraLink asChild variant="underline" fontWeight="bold">
            <Link to="/register">Register now!</Link>
          </ChakraLink>
        </Text>
      </Stack>
    </form>
  );
};

export default LoginForm;
