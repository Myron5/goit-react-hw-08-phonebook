import { nanoid } from 'nanoid';
import { IContact } from '../types';

const isIdInContacts = (id: string, contacts: IContact[]) =>
  contacts.some(contact => contact.id === id);

export const uniqueId = (contacts: IContact[]) => {
  let id = nanoid();
  while (isIdInContacts(id, contacts)) {
    id = nanoid();
  }
  return id;
};
