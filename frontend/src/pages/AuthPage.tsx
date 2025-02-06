import { Heading, VStack } from "@chakra-ui/react";
import AuthForm from "../components/AuthForm/AuthForm";

const AuthPage = () => {
  return (
    <VStack
      as="section"
      minHeight="100vh"
      align="center"
      justify="center"
      alignItems="center"
      gap="5rem"
      padding="1.5rem 2rem"
    >
      <Heading size="2xl" sm={{ fontSize: "4xl" }}>
        Start your journey today!
      </Heading>
      <AuthForm />
    </VStack>
  );
};

export default AuthPage;
