import { Box, Flex, Button, Icon, HStack } from "@chakra-ui/react";
import { ColorModeToggle } from "../ColorModeToggle";
import { RiQuillPenFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import {
  MenuContent,
  MenuItem,
  MenuRoot,
  MenuSeparator,
  MenuTrigger,
} from "../ui/Menu/Menu";
import { Avatar } from "../ui/Avatar/Avatar";
import { useRef } from "react";
import { LuLogOut } from "react-icons/lu";

const Navbar = () => {
  const { isAuthenticated, logoutReq, user, isLoading } = useAuth();
  const ref = useRef<HTMLDivElement | null>(null);

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
          {!isLoading && (
            <Box>
              {isAuthenticated ? (
                <MenuRoot
                  positioning={{
                    getAnchorRect() {
                      return ref.current!.getBoundingClientRect();
                    },
                    placement: "bottom-end",
                  }}
                >
                  <MenuTrigger as="button" all="unset" cursor="pointer">
                    <Avatar
                      ref={ref}
                      name={user?.login}
                      size="sm"
                      colorPalette="cyan"
                      variant="solid"
                    />
                  </MenuTrigger>
                  <MenuContent>
                    <MenuItem value="new-txt-a" cursor="pointer">
                      New Text File
                    </MenuItem>
                    <MenuSeparator />
                    <MenuItem
                      color="fg.error"
                      _hover={{ bg: "bg.error", color: "fg.error" }}
                      value="logOut"
                      cursor="pointer"
                      onClick={() => logoutReq()}
                    >
                      <LuLogOut />
                      <Box flex="1">Log out</Box>
                    </MenuItem>
                  </MenuContent>
                </MenuRoot>
              ) : (
                <Link to="/login">
                  <Button size="sm" variant="solid">
                    Login
                  </Button>
                </Link>
              )}
            </Box>
          )}
          <Box>
            <ColorModeToggle />
          </Box>
        </Flex>
      </HStack>
    </>
  );
};

export default Navbar;
