import { UserDTO } from '../lib/types';

export const user: UserDTO = {
  id: 'testId',
  authId: 'testAuthId',
  firstName: 'test',
  lastName: 'user',
  status: 'Active',
  activeTill: new Date(),
  wasOnline: new Date(),
  email: 'testEmail@gmail.com',
  role: 'Admin',
  expiration: 60 * 60 * 24 * 7,
};
