import { Container, Text, VStack, Image } from "@chakra-ui/react";
import "./Index.css"; // Import the CSS file

const Index = () => {
  return (
    <Container className="homepage-container" centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Image src="/images/homepage-banner.jpg" alt="Homepage Banner" />
        <Text fontSize="2xl">Welcome to the Bidding Management System</Text>
        <Text>Manage your bids and suppliers efficiently.</Text>
      </VStack>
    </Container>
  );
};

export default Index;