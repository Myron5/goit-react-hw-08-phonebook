import { useMemo } from 'react';
import { RxAvatar, RxMobile, RxCalendar, RxCross1 } from 'react-icons/rx';

import {
  useGetContactsQuery,
  useDeleteContactMutation,
} from 'redux/contactsSlice/contactsSlice';

import { Ul, Li, Name, Number, Date, Button } from './ContactList.styled';
import { Spinner } from 'components/Spiner/Spiner';

import { checkOnInclude, transformDate, myToast, ERROR, SUCCESS } from 'utils';
import { IContact } from 'types';

interface IProps {
  filterValue: string;
}

export const ContactList: React.FC<IProps> = ({ filterValue }) => {
  const {
    data: contacts,
    isLoading,
    isError,
  } = useGetContactsQuery('', {
    pollingInterval: 3000,
    refetchOnMountOrArgChange: true,
    skip: false,
  });

  const [deleteContact, { isLoading: isDeleting }] = useDeleteContactMutation();

  const onDelete = async (id: string) => {
    try {
      await deleteContact(id);
      myToast('✅ Contact was deleted successfully', SUCCESS);
    } catch (err: any) {
      console.log(err);
      myToast("❌ Contact wasn't deleted sucessfully", ERROR);
    }
  };

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
    myToast("❌ We didn't get your contacts", ERROR);
    return <Ul>Error</Ul>;
  }

  return (
    <div>
      <Ul>
        {filteredContacts.map(({ id, name, number, createdAt }: IContact) => (
          <Li key={id}>
            <Name>
              <RxAvatar />
              {name}
            </Name>
            <Number>
              <RxMobile size={20} />
              {number}
            </Number>
            <Date>
              <RxCalendar size={20} />({transformDate(createdAt)})
            </Date>
            <Button
              type="button"
              onClick={() => onDelete(id)}
              disabled={isDeleting}
            >
              <RxCross1 />
            </Button>
          </Li>
        ))}
      </Ul>
    </div>
  );
};
