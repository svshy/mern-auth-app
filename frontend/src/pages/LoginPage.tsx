import { Heading, Link as ChakraLink, Text, Box } from "@chakra-ui/react";
import LoginForm from "../components/LoginForm/LoginForm";
import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <>
      <Heading size="2xl" sm={{ fontSize: "4xl" }}>
        Welcome back!
      </Heading>
      <LoginForm />
      <Box>
        <Text alignSelf="center">
          Don't have an account?{" "}
          <ChakraLink asChild variant="underline" fontWeight="bold">
            <Link to="/register">Register now!</Link>
          </ChakraLink>
        </Text>
      </Box>
    </>
  );
};

export default LoginPage;
