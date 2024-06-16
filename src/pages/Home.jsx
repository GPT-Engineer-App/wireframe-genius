import { Box, Heading, Text, VStack, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Home = () => (
  <Box p={4} bg="black" color="white">
    <VStack spacing={4} align="center">
      <Heading>Welcome to the Bidding Management System</Heading>
      <Text>Manage your bids and suppliers efficiently.</Text>
      <Button as={Link} to="/onboarding" colorScheme="teal">
        Supplier Onboarding
      </Button>
      <Button as={Link} to="/dashboard" colorScheme="teal">
        Bidding Dashboard
      </Button>
    </VStack>
  </Box>
);

export default Home;