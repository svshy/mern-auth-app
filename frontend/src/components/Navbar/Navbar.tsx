import { Box, Flex, Button, Icon, HStack } from "@chakra-ui/react";
import { ColorModeToggle } from "../ColorModeToggle";
import { RiQuillPenFill } from "react-icons/ri";
import { Link, Outlet } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <HStack
        as="nav"
        alignItems="center"
        justify="space-between"
        padding="1.5rem 2rem"
        position="fixed"
        top={0}
        left={0}
        right={0}
        lg={{ padding: "1.5rem 4rem" }}
      >
        <Link to="/">
          <Icon fontSize="2.25rem">
            <RiQuillPenFill />
          </Icon>
        </Link>
        <Flex gap="1rem" alignItems="center">
          <Box>
            <Link to="/login">
              <Button size="sm" variant="solid">
                Login
              </Button>
            </Link>
          </Box>
          <Box>
            <ColorModeToggle />
          </Box>
        </Flex>
      </HStack>
      <Outlet />
    </>
  );
};

export default Navbar;
