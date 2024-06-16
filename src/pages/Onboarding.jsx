import { Box, Heading, VStack, FormControl, FormLabel, Input, Button } from "@chakra-ui/react";

const Onboarding = () => (
  <Box p={4} bg="black" color="white">
    <VStack spacing={4} align="center">
      <Heading>Supplier Onboarding</Heading>
      <FormControl id="name">
        <FormLabel>Name</FormLabel>
        <Input type="text" />
      </FormControl>
      <FormControl id="email">
        <FormLabel>Email</FormLabel>
        <Input type="email" />
      </FormControl>
      <FormControl id="company">
        <FormLabel>Company</FormLabel>
        <Input type="text" />
      </FormControl>
      <Button colorScheme="teal">Submit</Button>
    </VStack>
  </Box>
);

export default Onboarding;