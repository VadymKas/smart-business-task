import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { BASE_URL } from '../../utils/constants';

const getUsers = createAsyncThunk('usersList/getUsers', async (_, thunkAPI) => {
  try {
    const { data } = await axios(`${BASE_URL}/users`);
    return data;
  } catch (err) {
    console.log(err);
    return thunkAPI.rejectWithValue(err);
  }
});

export default getUsers;
