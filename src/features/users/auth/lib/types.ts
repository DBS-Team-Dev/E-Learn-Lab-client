export type User = {
  id: string;
  authId: string;
  login: string;
  email: string;
};

export type AuthState = {
  loading: boolean;
  isLoggedIn: boolean;
  currentUser: User | null;
};
