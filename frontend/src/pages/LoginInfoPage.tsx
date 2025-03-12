import { Heading, Text, VStack } from "@chakra-ui/react";
import { useAuth } from "../context/AuthContext";

const LoginInfoPage = () => {
  const { user } = useAuth();
  return (
    <>
      <Heading size="2xl" sm={{ fontSize: "4xl" }}>
        You are logged in as:
      </Heading>
      <VStack>
        <Text>{user?.login}</Text>
        <Text>{user?.email}</Text>
      </VStack>
    </>
  );
};

export default LoginInfoPage;
