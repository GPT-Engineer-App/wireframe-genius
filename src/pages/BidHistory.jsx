import { Box, Heading, VStack, Text } from "@chakra-ui/react";

const BidHistory = () => (
  <Box p={4}>
    <VStack spacing={4} align="center">
      <Heading>Bid History</Heading>
      <Text>View your past bids.</Text>
      {/* Placeholder for bid history items */}
      <Box w="100%" p={4} borderWidth={1} borderRadius="lg">
        <Text>Bid 1: $1000 - Pending</Text>
      </Box>
      <Box w="100%" p={4} borderWidth={1} borderRadius="lg">
        <Text>Bid 2: $1500 - Accepted</Text>
      </Box>
    </VStack>
  </Box>
);

export default BidHistory;