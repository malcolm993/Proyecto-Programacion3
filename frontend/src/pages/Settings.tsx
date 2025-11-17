import { Container, Heading, Spinner, Text, VStack } from "@chakra-ui/react";
import useSessions from "../hooks/useSessions";
import SessionCard from "../components/SessionCard";

const Settings = () => {
  const { sessions, isPending, isSuccess, isError } = useSessions();
  return (
    <Container mt={16}>
      <Heading mb={6}>Mis sesiones</Heading>
      {isPending && <Spinner />}
      {isError && <Text color="red.400">Error al obtener las sesiones.</Text>}
      {isSuccess && (
        <VStack spacing={3} align="flex-start">
          {sessions.map((session: any) => (
            <SessionCard key={session._id} session={session} />
          ))}
        </VStack>
      )}
    </Container>
  );
};
export default Settings;
