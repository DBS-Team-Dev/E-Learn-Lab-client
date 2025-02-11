import { createAsyncThunk } from '@reduxjs/toolkit';
import { loginUserAction } from '../utils';

export const AuthRepository = {
  loginUser: createAsyncThunk('auth/login', loginUserAction),
};
