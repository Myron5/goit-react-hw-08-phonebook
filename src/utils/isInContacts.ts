import { checkOnFullInclude, checkOnInclude } from './checkOnInclude';

import { IContact } from '../types';

export const isInContactsName = (contacts: IContact[], nameArg: string) =>
  contacts.find(({ name }) => checkOnInclude(name, nameArg));

export const isInContactsNumber = (contacts: IContact[], numberArg: string) =>
  contacts.find(({ number }) => checkOnFullInclude(number, numberArg));
