import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { IContact, IContactValues } from 'types';

export const fetchContacts = createAsyncThunk<
  IContact[],
  void,
  { rejectValue: any }
>('contacts/getContacts', async (_, thunkAPI) => {
  try {
    const response = await axios.get('/contacts');
    return response.data;
  } catch (error: any) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const addContact = createAsyncThunk<
  IContact,
  IContactValues,
  { rejectValue: any }
>('contacts/addContact', async (body, thunkAPI) => {
  try {
    const response = await axios.post('/contacts', body);
    return response.data;
  } catch (error: any) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const deleteContact = createAsyncThunk<
  IContact,
  string,
  { rejectValue: any }
>('contacts/deleteContact', async (contactId, thunkAPI) => {
  try {
    const response = await axios.delete(`/contacts/${contactId}`);
    return response.data;
  } catch (error: any) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const editContact = createAsyncThunk<
  IContact,
  { contactId: string; body: Partial<IContact> },
  { rejectValue: any }
>('contacts/editContact', async ({ contactId, body }, thunkAPI) => {
  try {
    const response = await axios.patch(`/contacts/${contactId}`, body);
    return response.data;
  } catch (error: any) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
