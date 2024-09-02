import { createSlice } from '@reduxjs/toolkit';
import { FilterStateType } from './types';
import { RootState } from '../../store';

const initialState: FilterStateType = {
  name: '',
  username: '',
  email: '',
  tel: '',
};

const listFilterSlice = createSlice({
  name: 'List filter',
  initialState,
  reducers: {
    filterBy: (state, { payload }) => {
      if (payload.filter === 'name') {
        state.name = payload.value;
      }

      if (payload.filter === 'username') {
        state.username = payload.value;
      }

      if (payload.filter === 'email') {
        state.email = payload.value;
      }

      if (payload.filter === 'tel') {
        state.tel = payload.value;
      }
    },
  },
});

export default listFilterSlice.reducer;
export const listFilterState = (state: RootState) => state.listFilterSlice;
export const { filterBy } = listFilterSlice.actions;
