import { createSlice } from '@reduxjs/toolkit';
import { ListStateType } from './types';
import getUsers from '../../api/getUsers';
import { RootState } from '../../store';

const initialState: ListStateType = {
  list: [],
  status: null,
};

const usersListSlice = createSlice({
  name: 'Users list',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getUsers.pending, (state) => {
        state.status = 'loading';
        state.list = [];
      })
      .addCase(getUsers.fulfilled, (state, { payload }) => {
        state.status = 'success';
        state.list = payload;
      })
      .addCase(getUsers.rejected, (state) => {
        state.status = 'error';
        state.list = [];
      });
  },
});

export default usersListSlice.reducer;
export const usersListState = (state: RootState) => state.usersListSlice;
