import { RoleOptions, UserDTO } from './types';

export const isAdmin = (role: RoleOptions) => {
  if (role === 'Admin') {
    return true;
  }

  return false;
};

export function safeParseAuthCookie(json: string): UserDTO | null {
  try {
    return JSON.parse(json) as UserDTO;
  } catch (error) {
    console.error('Failed to parse Auth Cookie:', error);
    return null;
  }
}
