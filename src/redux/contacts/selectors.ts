import { RootState } from 'redux/store';

export const selectLoading = (state: RootState) => state.contacts.isLoading;

export const selectContacts = (state: RootState) => state.contacts.items;

export const selectError = (state: RootState) => state.contacts.error;
