import axios from 'axios';
import { IContactValues } from 'types';

axios.defaults.baseURL =
  'https://64326cff3e05ff8b3725ff60.mockapi.io/phonebook/';

export const getContacts = async () => {
  const { data } = await axios.get(`/contacts`);
  return data;
};

export const getContact = async (id: string) => {
  const { data } = await axios.get(`/contacts/${id}`);
  return data;
};

export const postContact = async (contact: IContactValues) => {
  const { data } = await axios.post(`/contacts`, contact, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return data;
};

export const putContact = async (id: string, contact: IContactValues) => {
  const { data } = await axios.put(`/contacts/${id}`, contact, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return data;
};

export const deleteContact = async (id: string) => {
  const { data } = await axios.delete(`/contacts/${id}`);
  return data;
};
