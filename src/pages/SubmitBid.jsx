import { Box, Heading, VStack, FormControl, FormLabel, Input, Button } from "@chakra-ui/react";

const SubmitBid = () => (
  <Box p={4}>
    <VStack spacing={4} align="center">
      <Heading>Submit a Bid</Heading>
      <FormControl id="bid-amount">
        <FormLabel>Bid Amount</FormLabel>
        <Input type="number" />
      </FormControl>
      <FormControl id="description">
        <FormLabel>Description</FormLabel>
        <Input type="text" />
      </FormControl>
      <Button colorScheme="teal">Submit</Button>
    </VStack>
  </Box>
);

export default SubmitBid;