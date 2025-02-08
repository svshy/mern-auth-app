import { Heading, VStack } from "@chakra-ui/react";
import LoginForm from "../components/LoginForm/LoginForm";
import RegisterForm from "../components/RegisterForm/RegisterForm";

interface Props {
  isLogin: boolean;
}

const AuthPage = ({ isLogin }: Props) => {
  return (
    <VStack
      as="section"
      minHeight="100vh"
      align="center"
      justify="center"
      alignItems="center"
      gap="4rem"
      padding="1.5rem 2rem"
    >
      <Heading size="2xl" sm={{ fontSize: "4xl" }}>
        {isLogin ? "Welcome back!" : "Start your journey today!"}
      </Heading>
      {isLogin ? <LoginForm /> : <RegisterForm />}
    </VStack>
  );
};

export default AuthPage;
