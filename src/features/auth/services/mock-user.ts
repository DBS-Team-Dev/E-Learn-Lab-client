import { UserDTO } from '../lib/types';

export const user: UserDTO = {
  id: 'testId',
  authId: 'testAuthId',
  firstName: 'test',
  lastName: 'user',
  status: 'Active',
  activeTill: '11/02/2026',
  wasOnline: '11/02/2025',
  email: 'testEmail@gmail.com',
  role: 'Admin',
  expiration: 60 * 60 * 24 * 7,
};
