import { createAsyncThunk } from '@reduxjs/toolkit';
import { user } from './mock-user';

export const AuthRepository = {
  loginUser: createAsyncThunk(
    'auth/login',
    async ({ login, password }: { login: string; password: string }) => {
      const res = await Promise.resolve(user);
      return res;
    },
  ),
};
