import { useState } from "react";
import {
  Box,
  Button,
  Container,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Select,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useRegister } from "../hooks/useRegister";
import { Link, useNavigate } from "react-router-dom";

interface RegisterForm {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  role: "organizer" | "participant";
}

const Register = () => {
  const [form, setForm] = useState<RegisterForm>({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "participant",
  });

  const { register, isPending, isError, error } = useRegister();
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (form.password !== form.confirmPassword) {
      alert("Passwords don't match");
      return;
    }

    const { confirmPassword, ...registerData } = form;
    const success = await register(registerData);
    
    if (success) {
      navigate("/login");
    }
  };

  return (
    <Container maxW="md" mt={16}>
      <VStack spacing={6} as="form" onSubmit={handleSubmit}>
        <Heading size="lg">Create Account</Heading>

        <FormControl isRequired>
          <FormLabel>Name</FormLabel>
          <Input
            name="name"
            type="text"
            value={form.name}
            onChange={handleChange}
          />
        </FormControl>

        <FormControl isRequired>
          <FormLabel>Email</FormLabel>
          <Input
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
          />
        </FormControl>

        <FormControl isRequired>
          <FormLabel>Password</FormLabel>
          <Input
            name="password"
            type="password"
            value={form.password}
            onChange={handleChange}
          />
        </FormControl>

        <FormControl isRequired>
          <FormLabel>Confirm Password</FormLabel>
          <Input
            name="confirmPassword"
            type="password"
            value={form.confirmPassword}
            onChange={handleChange}
          />
        </FormControl>

        <FormControl isRequired>
          <FormLabel>Role</FormLabel>
          <Select name="role" value={form.role} onChange={handleChange}>
            <option value="participant">Participant</option>
            <option value="organizer">Organizer</option>
          </Select>
        </FormControl>

        {isError && (
          <Text color="red.400" textAlign="center">
            {error?.message || "Registration failed"}
          </Text>
        )}

        <Button type="submit" isLoading={isPending} width="full">
          Register
        </Button>

        <Text>
          Already have an account?{" "}
          <Link to="/login" style={{ color: "blue.400" }}>
            Log in
          </Link>
        </Text>
      </VStack>
    </Container>
  );
};

export default Register;