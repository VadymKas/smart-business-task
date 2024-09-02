import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

import usersListSlice from './slices/UsersListSlice';
import listFilterSlice from './slices/ListFilterSlice';

const store = configureStore({
  reducer: {
    usersListSlice,
    listFilterSlice,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
