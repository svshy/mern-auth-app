import { VStack } from "@chakra-ui/react";
import Navbar from "../components/Navbar/Navbar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <Navbar />
      <VStack
        as="section"
        minHeight="100vh"
        align="center"
        justify="center"
        alignItems="center"
        gap="3rem"
        padding="1.5rem 2rem"
      >
        <Outlet />
      </VStack>
    </>
  );
};

export default Layout;
