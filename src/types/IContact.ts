export interface IContact {
  createdAt: string;
  name: string;
  number: string;
  id: string;
}

export interface IContactValues extends Pick<IContact, 'name' | 'number'> {}
