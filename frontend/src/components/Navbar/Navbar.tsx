import { Box, Flex, Button, Icon, HStack } from "@chakra-ui/react";
import { ColorModeToggle } from "../ColorModeToggle";
import { RiQuillPenFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { MenuContent, MenuItem, MenuRoot, MenuTrigger } from "../ui/Menu/Menu";
import { Avatar } from "../ui/Avatar/Avatar";
import { useRef } from "react";

const Navbar = () => {
  const { isAuthenticated, isLoading } = useAuth();
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
                      name="Esther"
                      size="sm"
                      colorPalette="teal"
                      variant="solid"
                      mr="3"
                    />
                  </MenuTrigger>
                  <MenuContent>
                    <MenuItem value="new-txt-a" cursor="pointer">
                      New Text File
                    </MenuItem>
                    <MenuItem value="new-file-a" cursor="pointer">
                      New File...
                    </MenuItem>
                    <MenuItem value="new-win-a" cursor="pointer">
                      New Window
                    </MenuItem>
                    <MenuItem value="open-file-a" cursor="pointer">
                      Open File...
                    </MenuItem>
                    <MenuItem value="export-a" cursor="pointer">
                      Export
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
