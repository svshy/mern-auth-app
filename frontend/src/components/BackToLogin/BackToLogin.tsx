import { Box, HStack, Icon, Text } from "@chakra-ui/react";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

const BackToLogin = () => {
  return (
    <Box>
      <Link to="/login">
        <HStack>
          <Icon>
            <FaArrowLeft />
          </Icon>
          <Text>Back to login</Text>
        </HStack>
      </Link>
    </Box>
  );
};

export default BackToLogin;
