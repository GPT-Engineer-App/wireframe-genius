import { Box, Heading, VStack, Text, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Dashboard = () => (
  <Box p={4}>
    <VStack spacing={4} align="center">
      <Heading>Bidding Dashboard</Heading>
      <Text>View and manage your bids.</Text>
      <Button as={Link} to="/submit-bid" colorScheme="teal">
        Submit a Bid
      </Button>
      <Button as={Link} to="/bid-history" colorScheme="teal">
        View Bid History
      </Button>
    </VStack>
  </Box>
);

export default Dashboard;