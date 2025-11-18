import { useEffect, useState } from "react";
import { Container, Heading, Spinner, Text, VStack } from "@chakra-ui/react";
import { useSearchParams } from "react-router-dom";
import { useVerifyEmail } from "../hooks/useVerifyEmail";

const VerifyEmail = () => {
  const [searchParams] = useSearchParams();
  const code = searchParams.get("code") || "";
  
  const { verifyEmail, isPending, isError, isSuccess } = useVerifyEmail();

  useEffect(() => {
    if (code) {
      verifyEmail(code);
    }
  }, [code, verifyEmail]);

  return (
    <Container maxW="md" mt={16}>
      <VStack spacing={6}>
        <Heading size="lg">Verify Email</Heading>
        
        {isPending && (
          <>
            <Spinner size="xl" />
            <Text>Verifying your email...</Text>
          </>
        )}
        
        {isSuccess && (
          <Text color="green.400" textAlign="center">
            Your email has been verified successfully! You can now log in.
          </Text>
        )}
        
        {isError && (
          <Text color="red.400" textAlign="center">
            Failed to verify email. The link may be invalid or expired.
          </Text>
        )}
      </VStack>
    </Container>
  );
};

export default VerifyEmail;