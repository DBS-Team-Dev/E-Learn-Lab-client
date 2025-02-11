import { createSlice } from '@reduxjs/toolkit';
import { AuthRepository } from './auth.repository';
import { AuthState, authUtils } from '../lib';

const initialState: AuthState = {
  loading: false,
  currentUser: null,
  isAdmin: false,
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
        const isAdmin = authUtils.isAdmin(payload.role);
        state.isAdmin = isAdmin;
      })
      .addCase(loginUser.rejected, (state) => {
        state.loading = false;
      });
  },
});

export const authReducer = authSlice.reducer;
