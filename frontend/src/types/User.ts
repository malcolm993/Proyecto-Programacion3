export interface User {
  _id: string;
  email: string;
  name: string;
  role: 'organizer' | 'participant';
  verified: boolean;
  createdAt: string;
  updatedAt?: string;
}