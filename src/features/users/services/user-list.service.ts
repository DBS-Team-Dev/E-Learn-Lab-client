import { createSlice } from '@reduxjs/toolkit';
import { UserRepository } from './user-list.repository';
import { UserState } from '../lib';

const initialState: UserState = {
  loading: false,
  users: [],
};

export const userSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    const getUsers = UserRepository.query;
    builder
      .addCase(getUsers.pending, (state) => {
        state.loading = true;
      })
      .addCase(getUsers.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.users = payload;
      })
      .addCase(getUsers.rejected, (state) => {
        state.loading = false;
      });
  },
});

export const userReducer = userSlice.reducer;
