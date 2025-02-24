import { Box, Button, Heading, Icon, Text } from "@chakra-ui/react";
import { FaCheckCircle, FaExclamationCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

interface Props {
  type: "success" | "error";
  heading: string;
  description: string;
  link?: {
    to: string;
    text: string;
  };
}

const ResultBox = ({ type, heading, description, link }: Props) => {
  return (
    <Box textAlign="center" py={2} px={4} maxWidth="720px">
      <Icon fontSize="50px" color={type === "success" ? "green" : "red"}>
        {type === "success" ? <FaCheckCircle /> : <FaExclamationCircle />}
      </Icon>
      <Heading as="h2" size="2xl" mt={4}>
        {heading}
      </Heading>
      <Text mt={1}>{description}</Text>
      {link && (
        <Link to={link.to}>
          <Button size="sm" variant="solid" mt={4}>
            {link.text}
          </Button>
        </Link>
      )}
    </Box>
  );
};

export default ResultBox;
