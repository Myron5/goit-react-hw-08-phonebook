import { useMemo } from 'react';

import { Contact } from 'components/Contact/Contact';
import { Ul } from './ContactList.styled';
import { Spinner } from 'components/Other';

import { checkOnInclude, myToast, ERROR } from 'utils';
import { useContacts } from 'hooks';

import { IContact } from 'types';

interface IProps {
  filterValue: string;
}

export const ContactList: React.FC<IProps> = ({ filterValue }) => {
  const { isLoading, isError, contacts } = useContacts();

  // const {
  //   data: contacts,
  //   isLoading,
  //   isError,
  // } = useGetContactsQuery('', {
  //   pollingInterval: 3000,
  //   refetchOnMountOrArgChange: true,
  //   skip: false,
  // });
  // const [deleteContact, { isLoading: isDeleting }] = useDeleteContactMutation();

  const filteredContacts = useMemo(() => {
    return !filterValue
      ? contacts!
      : contacts!.filter(
          ({ name, number }) =>
            checkOnInclude(name, filterValue) ||
            checkOnInclude(number, filterValue)
        );
  }, [contacts, filterValue]);

  if (isLoading) {
    return (
      <Ul>
        <Spinner />
      </Ul>
    );
  } else if (isError || !contacts) {
    // myToast("❌ We didn't get your contacts", ERROR);
    return <Ul>Error</Ul>;
  }

  return (
    <div>
      <Ul>
        {filteredContacts.map((contact: IContact) => (
          <Contact key={contact.id} contact={contact} />
        ))}
      </Ul>
    </div>
  );
};
