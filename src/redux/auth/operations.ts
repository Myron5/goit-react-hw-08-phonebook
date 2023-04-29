import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  loginValue,
  regLogResponse,
  registerValue,
  userResponse,
} from './types';
import { RootState } from 'redux/store';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const setAuthHeader = (token: string) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

export const register = createAsyncThunk<
  regLogResponse,
  registerValue,
  { rejectValue: any }
>('auth/register', async (credentials, thunkAPI) => {
  try {
    const res = await axios.post('auth/signup', credentials);
    setAuthHeader(res.data.token);
    return res.data;
  } catch (error: any) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const logIn = createAsyncThunk<
  regLogResponse,
  loginValue,
  { rejectValue: any }
>('auth/login', async (credentials, thunkAPI) => {
  try {
    const res = await axios.post('/users/login', credentials);
    setAuthHeader(res.data.token);
    return res.data;
  } catch (error: any) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const logOut = createAsyncThunk<{}, void, { rejectValue: any }>(
  'auth/logout',
  async (_, thunkAPI) => {
    try {
      await axios.post('/users/logout');
      clearAuthHeader();
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const refreshUser = createAsyncThunk<
  userResponse,
  void,
  {
    rejectValue: any;
    state: RootState;
  }
>('auth/refresh', async (_, thunkAPI) => {
  const state = thunkAPI.getState();
  const persistedToken = state.auth.token;

  if (persistedToken === null) {
    return thunkAPI.rejectWithValue('Unable to fetch user');
  }

  try {
    setAuthHeader(persistedToken);
    const res = await axios.get('/users/current');
    return res.data;
  } catch (error: any) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
