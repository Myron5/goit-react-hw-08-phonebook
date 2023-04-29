import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { uniqueId } from 'utils';

import { RootState } from 'oldRedux/store';
import { IContact, IContactValues } from 'types';
import { IAddContactAction } from 'oldRedux/types';

// Define a type for the slice state
interface ContactsState {
  array: IContact[];
}

// Define the initial state using that type
const initialState: ContactsState = { array: [] };

interface IAddContactPrepareProps {
  contact: IContactValues;
  contacts: IContact[];
}

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact: {
      reducer: (state, action: PayloadAction<IAddContactAction>) => {
        state.array.push(action.payload.contact);
      },
      prepare: ({
        contact,
        contacts,
      }: IAddContactPrepareProps): { payload: IAddContactAction } => {
        const id = uniqueId(contacts);
        // const createdAt = `${new Date()}`;
        const { name, number } = contact;
        return { payload: { contact: { id, name, number /*, createdAt */ } } };
      },
    },
    deleteContact: (state, action) => {
      state.array = state.array.filter(({ id }) => action.payload.id !== id);
    },
  },
});

const persistConfig = {
  key: 'contacts',
  storage,
  whitelist: ['array'],
};

export const contactsReducer = persistReducer(
  persistConfig,
  contactsSlice.reducer
);
export const { addContact, deleteContact } = contactsSlice.actions;
export const getContacts = (state: RootState) => state.contacts.array;
