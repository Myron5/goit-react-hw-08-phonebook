import { IContact } from '../types';

const LS_KEY = 'contacts';

export const getLSContacts = () => {
  const contactsJSON = localStorage.getItem(LS_KEY);

  if (!contactsJSON) {
    const emptyJSONArr = JSON.stringify([]);
    localStorage.setItem(LS_KEY, emptyJSONArr);
    return [];
  }

  const contacts = JSON.parse(contactsJSON);
  return contacts;
};

export const setLSContacts = (contacts: IContact[]) => {
  const contactsJSON = JSON.stringify(contacts);
  localStorage.setItem(LS_KEY, contactsJSON);
};
