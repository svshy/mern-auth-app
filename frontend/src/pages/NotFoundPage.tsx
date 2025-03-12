import { Heading, Text, Box, Icon } from "@chakra-ui/react";
import { MdOutlineQuestionMark } from "react-icons/md";

const NotFoundPage = () => {
  return (
    <Box textAlign="center" py={2} px={4} maxWidth="720px">
      <Icon fontSize="8xl">
        <MdOutlineQuestionMark />
      </Icon>
      <Heading size="2xl" mt={4}>
        404. Page not found
      </Heading>
      <Text mt={2}>The page you are looking for does not exist.</Text>
    </Box>
  );
};

export default NotFoundPage;
