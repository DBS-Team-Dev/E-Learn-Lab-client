import { createSlice } from '@reduxjs/toolkit';
import { AuthRepository } from './auth.repository';
import { AuthState } from '../lib';

const initialState: AuthState = {
  loading: false,
  isLoggedIn: false,
  currentUser: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    const loginUser = AuthRepository.loginUser;
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(loginUser.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.currentUser = payload;
        state.isLoggedIn = true;
      })
      .addCase(loginUser.rejected, (state) => {
        state.loading = false;
      });
  },
});

export const authReducer = authSlice.reducer;
