import { Box, Heading, VStack, Text, FormControl, FormLabel, Input, Button } from "@chakra-ui/react";

const Support = () => (
  <Box p={4} bg="black" color="white">
    <VStack spacing={4} align="center">
      <Heading>Support</Heading>
      <Text>Contact us for any support or queries.</Text>
      <FormControl id="query">
        <FormLabel>Your Query</FormLabel>
        <Input type="text" />
      </FormControl>
      <Button colorScheme="teal">Submit</Button>
    </VStack>
  </Box>
);

export default Support;