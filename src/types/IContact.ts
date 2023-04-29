// ----------- ONLY FOR RTK (MockAPI) -----------
// export interface IContact {
//   createdAt: string;
//   name: string;
//   number: string;
//   id: string;
// }

export interface IContact {
  id: string;
  name: string;
  number: string;
}

export interface IContactValues extends Pick<IContact, 'name' | 'number'> {}
