export type RoleOptions = 'Student' | 'Admin';

export interface UserDTO {
  id: string;
  authId: string;
  firstName: string;
  lastName: string;
  status: string;
  email: string;
  role: RoleOptions;
  activeTill: Date;
  wasOnline: Date;
  expiration: number;
}

export interface AuthState {
  loading: boolean;
  isLoggedIn: boolean;
  currentUser: UserDTO | null;
}
