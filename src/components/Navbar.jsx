import { Box, Flex, Link, Button } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Navbar = () => (
  <Box bg="teal.500" px={4}>
    <Flex h={16} alignItems="center" justifyContent="space-between">
      <Box>
        <Link as={RouterLink} to="/" color="white" fontWeight="bold" fontSize="xl">
          Bidding System
        </Link>
      </Box>
      <Flex alignItems="center">
        <Link as={RouterLink} to="/onboarding" color="white" mr={4}>
          Onboarding
        </Link>
        <Link as={RouterLink} to="/dashboard" color="white" mr={4}>
          Dashboard
        </Link>
        <Link as={RouterLink} to="/notifications" color="white" mr={4}>
          Notifications
        </Link>
        <Link as={RouterLink} to="/support" color="white">
          Support
        </Link>
      </Flex>
    </Flex>
  </Box>
);

export default Navbar;