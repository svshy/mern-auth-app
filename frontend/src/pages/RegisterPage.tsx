import { Heading, Link as ChakraLink, Text } from "@chakra-ui/react";
import RegisterForm from "../components/RegisterForm/RegisterForm";
import { useCreateAccount } from "../components/RegisterForm/hooks/useCreateAccount";
import ResultBox from "../components/ui/ResultBox/ResultBox";
import { Link } from "react-router-dom";

const RegisterPage = () => {
  const { createAccountReq, isPending, isSuccess } = useCreateAccount();

  if (isSuccess) {
    return (
      <ResultBox
        type="success"
        heading="Your account has been created."
        description="Please confirm your email by clicking the link in the sent email message. The link will be valid for 24 hours."
      />
    );
  }
  return (
    <>
      <Heading size="2xl" sm={{ fontSize: "4xl" }}>
        Start your journey today!
      </Heading>
      <RegisterForm isPending={isPending} createAccount={createAccountReq} />
      <Text alignSelf="center">
        Already have an account?{" "}
        <ChakraLink asChild variant="underline" fontWeight="bold">
          <Link to="/login">Log in!</Link>
        </ChakraLink>
      </Text>
    </>
  );
};

export default RegisterPage;
