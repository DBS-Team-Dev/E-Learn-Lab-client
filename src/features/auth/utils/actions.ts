'use server';

import { cookies } from 'next/headers';
import { UserDTO } from '../lib';
import { user } from '../services/mock-user';

export const loginUserAction = async (): Promise<UserDTO> => {
  const res = await Promise.resolve(user);
  (await cookies()).set('user', JSON.stringify(res), { maxAge: res.expiration });
  return res;
};
