// ------------------------------ Using RTK ------------------------------

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IContact, IContactValues } from 'types';

export const contactsApi = createApi({
  reducerPath: 'todoApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://64326cff3e05ff8b3725ff60.mockapi.io/phonebook/',
  }),
  tagTypes: ['Contacts'],
  endpoints: builder => ({
    //   Повертає масив контактів
    getContacts: builder.query<IContact[], string>({
      query: id => ({ url: '/contacts' }),
      providesTags: ['Contacts'],
    }),

    //   Повертає один контакт
    getContact: builder.query<IContact, string>({
      query: id => ({ url: `/contacts/${id}` }),
      providesTags: ['Contacts'],
    }),

    // Додає контакт
    postContact: builder.mutation<IContact, IContactValues>({
      query: contact => ({
        url: `/contacts`,
        method: 'POST',
        body: contact,
      }),
      invalidatesTags: ['Contacts'],
    }),

    // Оновлює контакт
    putContact: builder.mutation<
      IContact,
      Partial<IContact> & Pick<IContact, 'id'>
    >({
      query: contact => ({
        url: `/contacts/${contact.id}`,
        method: 'PUT',
        body: contact,
      }),
      invalidatesTags: ['Contacts'],
    }),

    // Видаляє контакт
    deleteContact: builder.mutation<IContact, string>({
      query: id => ({
        url: `/contacts/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Contacts'],
    }),
  }),
});

// Експорт хуків
export const {
  useGetContactsQuery,
  useGetContactQuery,
  usePostContactMutation,
  usePutContactMutation,
  useDeleteContactMutation,
} = contactsApi;
