import API from "../config/apiClient";
import { Session } from "../types/Session";
import { User } from "../types/User";

// Auth types
interface LoginData {
  email: string;
  password: string;
}

interface RegisterData {
  name: string;
  email: string;
  password: string;
  role: 'organizer' | 'participant';
}

interface ResetPasswordData {
  verificationCode: string;
  password: string;
}

// Auth functions
export const register = async (data: RegisterData) => 
  API.post("/auth/register", data);

export const login = async (data: LoginData) => 
  API.post("/auth/login", data);

export const logout = async () => 
  API.get("/auth/logout");

export const verifyEmail = async (verificationCode: string) =>
  API.get(`/auth/email/verify/${verificationCode}`);

export const sendPasswordResetEmail = async (email: string) =>
  API.post("/auth/password/forgot", { email });

export const resetPassword = async ({ verificationCode, password }: ResetPasswordData) =>
  API.post("/auth/password/reset", { verificationCode, password });

// User functions
export const getUser = async (): Promise<User> => 
  API.get("/user").then(response => response.data);

export const getSessions = async (): Promise<Session[]> => 
  API.get("/sessions").then(response => response.data);

export const deleteSession = async (id: string) => 
  API.delete(`/sessions/${id}`);