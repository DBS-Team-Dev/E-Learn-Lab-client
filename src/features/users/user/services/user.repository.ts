import { createAsyncThunk } from '@reduxjs/toolkit';
import { UserDTO } from '../../auth/lib';
import { users } from './mock-users';

export const UserRepository = {
  query: createAsyncThunk('user/query', async (): Promise<UserDTO[]> => {
    const res = await Promise.resolve(users);
    return res;
  }),
};
