export type RoleOptions = 'Student' | 'Admin';

export interface UserDTO {
  id: string;
  authId: string;
  firstName: string;
  lastName: string;
  status: string;
  email: string;
  role: RoleOptions;
  activeTill: string;
  wasOnline: string;
  expiration: number;
}

export interface AuthState {
  loading: boolean;
  isAdmin: boolean;
  currentUser: UserDTO | null;
}
