import { createSlice } from '@reduxjs/toolkit';
import { logOut } from 'redux/auth/operations';
import { fetchContacts, addContact, deleteContact } from './operations';
import { IContact } from 'types';

interface contactsState {
  items: IContact[];
  isLoading: boolean;
  error: string | null;
}

const initialState: contactsState = {
  items: [],
  isLoading: false,
  error: null,
};

const handlePending = <T extends { isLoading: boolean }>(state: T) => {
  state.isLoading = true;
};

const handleRejected = <
  T extends { isLoading: boolean; error: string | null },
  U extends { payload: string | null }
>(
  state: T,
  action: U
) => {
  state.isLoading = false;
  state.error = action.payload;
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchContacts.pending, handlePending);
    builder.addCase(addContact.pending, handlePending);
    builder.addCase(deleteContact.pending, handlePending);
    builder.addCase(fetchContacts.rejected, handleRejected);
    builder.addCase(addContact.rejected, handleRejected);
    builder.addCase(deleteContact.rejected, handleRejected);
    builder.addCase(fetchContacts.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    });
    builder.addCase(addContact.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.items.push(action.payload);
    });
    builder.addCase(deleteContact.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = null;
      const index = state.items.findIndex(
        contact => contact.id === action.payload.id
      );
      state.items.splice(index, 1);
    });
    builder.addCase(logOut.fulfilled, state => {
      state.items = [];
      state.error = null;
      state.isLoading = false;
    });
  },
});

export const contactsReducer = contactsSlice.reducer;
