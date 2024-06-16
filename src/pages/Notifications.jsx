import { Box, Heading, VStack, Text } from "@chakra-ui/react";

const Notifications = () => (
  <Box p={4} bg="black" color="white">
    <VStack spacing={4} align="center">
      <Heading>Notifications</Heading>
      <Text>Stay updated with the latest notifications.</Text>
      {/* Placeholder for notifications */}
      <Box w="100%" p={4} borderWidth={1} borderRadius="lg">
        <Text>Notification 1: Your bid has been accepted.</Text>
      </Box>
      <Box w="100%" p={4} borderWidth={1} borderRadius="lg">
        <Text>Notification 2: New bidding opportunity available.</Text>
      </Box>
    </VStack>
  </Box>
);

export default Notifications;