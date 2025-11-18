import { Container, Heading, Text, VStack } from "@chakra-ui/react";
import useUser from "../hooks/useUser";

const Profile = () => {
  const { user } = useUser();

  const { email, verified, createdAt } = user || {};

  return (
    <Container maxW="md" mt={16}>
      <VStack spacing={6} align="flex-start">
        <Heading size="lg">Profile</Heading>
        
        <VStack align="flex-start" spacing={3}>
          <Text>
            <strong>Email:</strong> {email}
          </Text>
          <Text>
            <strong>Verified:</strong> {verified ? "Yes" : "No"}
          </Text>
          <Text>
            <strong>Member since:</strong> {createdAt ? new Date(createdAt).toLocaleDateString() : "N/A"}
          </Text>
        </VStack>
      </VStack>
    </Container>
  );
};

export default Profile;